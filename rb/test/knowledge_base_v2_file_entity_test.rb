# KnowledgeBaseV2File entity test

require "minitest/autorun"
require "json"
require_relative "../Vapi_sdk"
require_relative "runner"

class KnowledgeBaseV2FileEntityTest < Minitest::Test
  def test_create_instance
    testsdk = VapiSDK.test(nil, nil)
    ent = testsdk.KnowledgeBaseV2File(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "knowledge_base_v2_file" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = VapiSDK.test(seed, nil)
    seen = base.KnowledgeBaseV2File(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = VapiConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = VapiSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.KnowledgeBaseV2File(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = knowledge_base_v2_file_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "knowledge_base_v2_file." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    knowledge_base_v2_file_ref01_ent = client.KnowledgeBaseV2File(nil)
    knowledge_base_v2_file_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.knowledge_base_v2_file"), "knowledge_base_v2_file_ref01"))
    knowledge_base_v2_file_ref01_data["knowledge_base_id"] = setup[:idmap]["knowledge_base01"]

    knowledge_base_v2_file_ref01_data_result = knowledge_base_v2_file_ref01_ent.create(knowledge_base_v2_file_ref01_data, nil)
    knowledge_base_v2_file_ref01_data = Helpers.to_map(knowledge_base_v2_file_ref01_data_result.respond_to?(:data_get) ? knowledge_base_v2_file_ref01_data_result.data_get : knowledge_base_v2_file_ref01_data_result)
    assert !knowledge_base_v2_file_ref01_data.nil?
    assert !knowledge_base_v2_file_ref01_data["id"].nil?

    # LIST
    knowledge_base_v2_file_ref01_match = {}

    knowledge_base_v2_file_ref01_list_result = knowledge_base_v2_file_ref01_ent.list(knowledge_base_v2_file_ref01_match, nil)
    assert knowledge_base_v2_file_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(knowledge_base_v2_file_ref01_list_result),
      { "id" => knowledge_base_v2_file_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # REMOVE
    knowledge_base_v2_file_ref01_match_rm0 = {
      "id" => knowledge_base_v2_file_ref01_data["id"],
    }
    knowledge_base_v2_file_ref01_ent.remove(knowledge_base_v2_file_ref01_match_rm0, nil)

    # LIST
    knowledge_base_v2_file_ref01_match_rt0 = {}

    knowledge_base_v2_file_ref01_list_rt0_result = knowledge_base_v2_file_ref01_ent.list(knowledge_base_v2_file_ref01_match_rt0, nil)
    assert knowledge_base_v2_file_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(knowledge_base_v2_file_ref01_list_rt0_result),
      { "id" => knowledge_base_v2_file_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def knowledge_base_v2_file_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "knowledge_base_v2_file", "KnowledgeBaseV2FileTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = VapiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["knowledge_base_v2_file01", "knowledge_base_v2_file02", "knowledge_base_v2_file03", "knowledge_base01", "knowledge_base02", "knowledge_base03", "file01", "file02", "file03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID" => idmap,
    "VAPI_TEST_LIVE" => "FALSE",
    "VAPI_TEST_EXPLAIN" => "FALSE",
    "VAPI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["VAPI_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["VAPI_APIKEY"],
      },
      extra || {},
    ])
    client = VapiSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["VAPI_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["VAPI_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
