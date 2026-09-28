# Provider entity test

require "minitest/autorun"
require "json"
require_relative "../Vapi_sdk"
require_relative "runner"

class ProviderEntityTest < Minitest::Test
  def test_create_instance
    testsdk = VapiSDK.test(nil, nil)
    ent = testsdk.Provider(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = provider_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "provider." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set VAPI_TEST_PROVIDER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    provider_ref01_ent = client.Provider(nil)
    provider_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.provider"), "provider_ref01"))
    provider_ref01_data["provider"] = setup[:idmap]["provider01"]
    provider_ref01_data["resource_name"] = setup[:idmap]["resource_name01"]

    provider_ref01_data_result = provider_ref01_ent.create(provider_ref01_data, nil)
    provider_ref01_data = Helpers.to_map(provider_ref01_data_result.respond_to?(:data_get) ? provider_ref01_data_result.data_get : provider_ref01_data_result)
    assert !provider_ref01_data.nil?
    assert !provider_ref01_data["id"].nil?

    # UPDATE
    provider_ref01_data_up0_up = {
      "id" => provider_ref01_data["id"],
      "provider" => setup[:idmap]["provider"],
      "resource_name" => setup[:idmap]["resource_name"],
    }

    provider_ref01_resdata_up0_result = provider_ref01_ent.update(provider_ref01_data_up0_up, nil)
    provider_ref01_resdata_up0 = Helpers.to_map(provider_ref01_resdata_up0_result.respond_to?(:data_get) ? provider_ref01_resdata_up0_result.data_get : provider_ref01_resdata_up0_result)
    assert !provider_ref01_resdata_up0.nil?
    assert_equal provider_ref01_resdata_up0["id"], provider_ref01_data_up0_up["id"]

    # LOAD
    provider_ref01_match_dt0 = {
      "id" => provider_ref01_data["id"],
    }
    provider_ref01_data_dt0_loaded = provider_ref01_ent.load(provider_ref01_match_dt0, nil)
    provider_ref01_data_dt0_load_result = Helpers.to_map(provider_ref01_data_dt0_loaded.respond_to?(:data_get) ? provider_ref01_data_dt0_loaded.data_get : provider_ref01_data_dt0_loaded)
    assert !provider_ref01_data_dt0_load_result.nil?
    assert_equal provider_ref01_data_dt0_load_result["id"], provider_ref01_data["id"]

    # REMOVE
    provider_ref01_match_rm0 = {
      "id" => provider_ref01_data["id"],
    }
    provider_ref01_ent.remove(provider_ref01_match_rm0, nil)

  end
end

def provider_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "provider", "ProviderTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = VapiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["provider01", "provider02", "provider03", "resource_name01"],
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
  entid_env_raw = ENV["VAPI_TEST_PROVIDER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "VAPI_TEST_PROVIDER_ENTID" => idmap,
    "VAPI_TEST_LIVE" => "FALSE",
    "VAPI_TEST_EXPLAIN" => "FALSE",
    "VAPI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["VAPI_TEST_PROVIDER_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["provider"].nil?
    idmap_resolved["provider"] = idmap_resolved["provider01"]
  end
  if idmap_resolved["resource_name"].nil?
    idmap_resolved["resource_name"] = idmap_resolved["resource_name01"]
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
