# Vapi SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Vapi_types'


class VapiSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = VapiUtility.new
    @_utility = utility

    config = VapiConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = VapiHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = VapiHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, VapiFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    VapiUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = VapiHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = VapiHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = VapiHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = VapiSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => VapiError.new(
        "#{op}_allow",
        "VapiSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue VapiError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = VapiHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = VapiHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = VapiError.new(
        "graphql_error", "VapiSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Analytics.list / client.Analytics.load({ "id" => ... })
  def Analytics(data = nil)
    require_relative 'entity/analytics_entity'
    AnalyticsEntity.new(self, data)
  end


  # Canonical facade: client.Assistant.list / client.Assistant.load({ "id" => ... })
  def Assistant(data = nil)
    require_relative 'entity/assistant_entity'
    AssistantEntity.new(self, data)
  end


  # Canonical facade: client.Board.list / client.Board.load({ "id" => ... })
  def Board(data = nil)
    require_relative 'entity/board_entity'
    BoardEntity.new(self, data)
  end


  # Canonical facade: client.Call.list / client.Call.load({ "id" => ... })
  def Call(data = nil)
    require_relative 'entity/call_entity'
    CallEntity.new(self, data)
  end


  # Canonical facade: client.Campaign.list / client.Campaign.load({ "id" => ... })
  def Campaign(data = nil)
    require_relative 'entity/campaign_entity'
    CampaignEntity.new(self, data)
  end


  # Canonical facade: client.Chat.list / client.Chat.load({ "id" => ... })
  def Chat(data = nil)
    require_relative 'entity/chat_entity'
    ChatEntity.new(self, data)
  end


  # Canonical facade: client.CreateSimulationRun.list / client.CreateSimulationRun.load({ "id" => ... })
  def CreateSimulationRun(data = nil)
    require_relative 'entity/create_simulation_run_entity'
    CreateSimulationRunEntity.new(self, data)
  end


  # Canonical facade: client.Eval.list / client.Eval.load({ "id" => ... })
  def Eval(data = nil)
    require_relative 'entity/eval_entity'
    EvalEntity.new(self, data)
  end


  # Canonical facade: client.File.list / client.File.load({ "id" => ... })
  def File(data = nil)
    require_relative 'entity/file_entity'
    FileEntity.new(self, data)
  end


  # Canonical facade: client.Insight.list / client.Insight.load({ "id" => ... })
  def Insight(data = nil)
    require_relative 'entity/insight_entity'
    InsightEntity.new(self, data)
  end


  # Canonical facade: client.KnowledgeBase.list / client.KnowledgeBase.load({ "id" => ... })
  def KnowledgeBase(data = nil)
    require_relative 'entity/knowledge_base_entity'
    KnowledgeBaseEntity.new(self, data)
  end


  # Canonical facade: client.KnowledgeBaseV2File.list / client.KnowledgeBaseV2File.load({ "id" => ... })
  def KnowledgeBaseV2File(data = nil)
    require_relative 'entity/knowledge_base_v2_file_entity'
    KnowledgeBaseV2FileEntity.new(self, data)
  end


  # Canonical facade: client.Personality.list / client.Personality.load({ "id" => ... })
  def Personality(data = nil)
    require_relative 'entity/personality_entity'
    PersonalityEntity.new(self, data)
  end


  # Canonical facade: client.PhoneNumber.list / client.PhoneNumber.load({ "id" => ... })
  def PhoneNumber(data = nil)
    require_relative 'entity/phone_number_entity'
    PhoneNumberEntity.new(self, data)
  end


  # Canonical facade: client.Provider.list / client.Provider.load({ "id" => ... })
  def Provider(data = nil)
    require_relative 'entity/provider_entity'
    ProviderEntity.new(self, data)
  end


  # Canonical facade: client.Scenario.list / client.Scenario.load({ "id" => ... })
  def Scenario(data = nil)
    require_relative 'entity/scenario_entity'
    ScenarioEntity.new(self, data)
  end


  # Canonical facade: client.Scorecard.list / client.Scorecard.load({ "id" => ... })
  def Scorecard(data = nil)
    require_relative 'entity/scorecard_entity'
    ScorecardEntity.new(self, data)
  end


  # Canonical facade: client.Session.list / client.Session.load({ "id" => ... })
  def Session(data = nil)
    require_relative 'entity/session_entity'
    SessionEntity.new(self, data)
  end


  # Canonical facade: client.Simulation.list / client.Simulation.load({ "id" => ... })
  def Simulation(data = nil)
    require_relative 'entity/simulation_entity'
    SimulationEntity.new(self, data)
  end


  # Canonical facade: client.SimulationRun.list / client.SimulationRun.load({ "id" => ... })
  def SimulationRun(data = nil)
    require_relative 'entity/simulation_run_entity'
    SimulationRunEntity.new(self, data)
  end


  # Canonical facade: client.SimulationRunItem.list / client.SimulationRunItem.load({ "id" => ... })
  def SimulationRunItem(data = nil)
    require_relative 'entity/simulation_run_item_entity'
    SimulationRunItemEntity.new(self, data)
  end


  # Canonical facade: client.SimulationSuite.list / client.SimulationSuite.load({ "id" => ... })
  def SimulationSuite(data = nil)
    require_relative 'entity/simulation_suite_entity'
    SimulationSuiteEntity.new(self, data)
  end


  # Canonical facade: client.Squad.list / client.Squad.load({ "id" => ... })
  def Squad(data = nil)
    require_relative 'entity/squad_entity'
    SquadEntity.new(self, data)
  end


  # Canonical facade: client.StructuredOutput.list / client.StructuredOutput.load({ "id" => ... })
  def StructuredOutput(data = nil)
    require_relative 'entity/structured_output_entity'
    StructuredOutputEntity.new(self, data)
  end


  # Canonical facade: client.Tool.list / client.Tool.load({ "id" => ... })
  def Tool(data = nil)
    require_relative 'entity/tool_entity'
    ToolEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = VapiSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
