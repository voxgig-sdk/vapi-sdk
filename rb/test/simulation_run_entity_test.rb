# SimulationRun entity test

require "minitest/autorun"
require "json"
require_relative "../Vapi_sdk"
require_relative "runner"

class SimulationRunEntityTest < Minitest::Test
  def test_create_instance
    testsdk = VapiSDK.test(nil, nil)
    ent = testsdk.SimulationRun(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = simulation_run_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "simulation_run." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set VAPI_TEST_SIMULATION_RUN_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    simulation_run_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.simulation_run")))
    simulation_run_ref01_data = nil
    if simulation_run_ref01_data_raw.length > 0
      simulation_run_ref01_data = Helpers.to_map(simulation_run_ref01_data_raw[0][1])
    end

    # UPDATE
    simulation_run_ref01_ent = client.SimulationRun(nil)
    simulation_run_ref01_data_up0_up = {
      "id" => simulation_run_ref01_data["id"],
    }

    simulation_run_ref01_markdef_up0_name = "createdAt"
    simulation_run_ref01_markdef_up0_value = "Mark01-simulation_run_ref01_#{setup[:now]}"
    simulation_run_ref01_data_up0_up[simulation_run_ref01_markdef_up0_name] = simulation_run_ref01_markdef_up0_value

    simulation_run_ref01_resdata_up0_result = simulation_run_ref01_ent.update(simulation_run_ref01_data_up0_up, nil)
    simulation_run_ref01_resdata_up0 = Helpers.to_map(simulation_run_ref01_resdata_up0_result.respond_to?(:data_get) ? simulation_run_ref01_resdata_up0_result.data_get : simulation_run_ref01_resdata_up0_result)
    assert !simulation_run_ref01_resdata_up0.nil?
    assert_equal simulation_run_ref01_resdata_up0["id"], simulation_run_ref01_data_up0_up["id"]
    assert_equal simulation_run_ref01_resdata_up0[simulation_run_ref01_markdef_up0_name], simulation_run_ref01_markdef_up0_value

    # LOAD
    simulation_run_ref01_match_dt0 = {
      "id" => simulation_run_ref01_data["id"],
    }
    simulation_run_ref01_data_dt0_loaded = simulation_run_ref01_ent.load(simulation_run_ref01_match_dt0, nil)
    simulation_run_ref01_data_dt0_load_result = Helpers.to_map(simulation_run_ref01_data_dt0_loaded.respond_to?(:data_get) ? simulation_run_ref01_data_dt0_loaded.data_get : simulation_run_ref01_data_dt0_loaded)
    assert !simulation_run_ref01_data_dt0_load_result.nil?
    assert_equal simulation_run_ref01_data_dt0_load_result["id"], simulation_run_ref01_data["id"]

  end
end

def simulation_run_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "simulation_run", "SimulationRunTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = VapiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["simulation_run01", "simulation_run02", "simulation_run03"],
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
  entid_env_raw = ENV["VAPI_TEST_SIMULATION_RUN_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "VAPI_TEST_SIMULATION_RUN_ENTID" => idmap,
    "VAPI_TEST_LIVE" => "FALSE",
    "VAPI_TEST_EXPLAIN" => "FALSE",
    "VAPI_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["VAPI_TEST_SIMULATION_RUN_ENTID"])
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
