# Insight entity test

require "minitest/autorun"
require "json"
require_relative "../Vapi_sdk"
require_relative "runner"

class InsightEntityTest < Minitest::Test
  def test_create_instance
    testsdk = VapiSDK.test(nil, nil)
    ent = testsdk.Insight(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "insight" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = VapiSDK.test(seed, nil)
    seen = base.Insight(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = VapiConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = VapiSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Insight(nil).stream("list", nil, nil).each do |item|
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
    setup = insight_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "insight." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set VAPI_TEST_INSIGHT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    insight_ref01_ent = client.Insight(nil)
    insight_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.insight"), "insight_ref01"))

    insight_ref01_data_result = insight_ref01_ent.create(insight_ref01_data, nil)
    insight_ref01_data = Helpers.to_map(insight_ref01_data_result.respond_to?(:data_get) ? insight_ref01_data_result.data_get : insight_ref01_data_result)
    assert !insight_ref01_data.nil?
    assert !insight_ref01_data["id"].nil?

    # LIST
    insight_ref01_match = {}

    insight_ref01_list_result = insight_ref01_ent.list(insight_ref01_match, nil)
    assert insight_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(insight_ref01_list_result),
      { "id" => insight_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    insight_ref01_data_up0_up = {
      "id" => insight_ref01_data["id"],
    }

    insight_ref01_markdef_up0_name = "createdAt"
    insight_ref01_markdef_up0_value = "Mark01-insight_ref01_#{setup[:now]}"
    insight_ref01_data_up0_up[insight_ref01_markdef_up0_name] = insight_ref01_markdef_up0_value

    insight_ref01_resdata_up0_result = insight_ref01_ent.update(insight_ref01_data_up0_up, nil)
    insight_ref01_resdata_up0 = Helpers.to_map(insight_ref01_resdata_up0_result.respond_to?(:data_get) ? insight_ref01_resdata_up0_result.data_get : insight_ref01_resdata_up0_result)
    assert !insight_ref01_resdata_up0.nil?
    assert_equal insight_ref01_resdata_up0["id"], insight_ref01_data_up0_up["id"]
    assert_equal insight_ref01_resdata_up0[insight_ref01_markdef_up0_name], insight_ref01_markdef_up0_value

    # LOAD
    insight_ref01_match_dt0 = {
      "id" => insight_ref01_data["id"],
    }
    insight_ref01_data_dt0_loaded = insight_ref01_ent.load(insight_ref01_match_dt0, nil)
    insight_ref01_data_dt0_load_result = Helpers.to_map(insight_ref01_data_dt0_loaded.respond_to?(:data_get) ? insight_ref01_data_dt0_loaded.data_get : insight_ref01_data_dt0_loaded)
    assert !insight_ref01_data_dt0_load_result.nil?
    assert_equal insight_ref01_data_dt0_load_result["id"], insight_ref01_data["id"]

    # REMOVE
    insight_ref01_match_rm0 = {
      "id" => insight_ref01_data["id"],
    }
    insight_ref01_ent.remove(insight_ref01_match_rm0, nil)

    # LIST
    insight_ref01_match_rt0 = {}

    insight_ref01_list_rt0_result = insight_ref01_ent.list(insight_ref01_match_rt0, nil)
    assert insight_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(insight_ref01_list_rt0_result),
      { "id" => insight_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def insight_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "insight", "InsightTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = VapiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["insight01", "insight02", "insight03"],
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
  entid_env_raw = ENV["VAPI_TEST_INSIGHT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "VAPI_TEST_INSIGHT_ENTID" => idmap,
    "VAPI_TEST_LIVE" => "FALSE",
    "VAPI_TEST_EXPLAIN" => "FALSE",
    "VAPI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["VAPI_TEST_INSIGHT_ENTID"])
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
