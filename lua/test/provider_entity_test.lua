-- Provider entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("vapi_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ProviderEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Provider(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = provider_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "provider." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set VAPI_TEST_PROVIDER_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local provider_ref01_ent = client:Provider(nil)
    local provider_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.provider"), "provider_ref01"))
    provider_ref01_data["provider"] = setup.idmap["provider01"]
    provider_ref01_data["resource_name"] = setup.idmap["resource_name01"]

    local provider_ref01_data_result, err = provider_ref01_ent:create(provider_ref01_data, nil)
    assert.is_nil(err)
    provider_ref01_data = helpers.to_map(type(provider_ref01_data_result) == 'table' and provider_ref01_data_result.data_get and provider_ref01_data_result:data_get() or provider_ref01_data_result)
    assert.is_not_nil(provider_ref01_data)
    assert.is_not_nil(provider_ref01_data["id"])

    -- UPDATE
    local provider_ref01_data_up0_up = {
      id = provider_ref01_data["id"],
      ["provider"] = setup.idmap["provider"],
      ["resource_name"] = setup.idmap["resource_name"],
    }

    local provider_ref01_resdata_up0_result, err = provider_ref01_ent:update(provider_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local provider_ref01_resdata_up0 = helpers.to_map(type(provider_ref01_resdata_up0_result) == 'table' and provider_ref01_resdata_up0_result.data_get and provider_ref01_resdata_up0_result:data_get() or provider_ref01_resdata_up0_result)
    assert.is_not_nil(provider_ref01_resdata_up0)
    assert.are.equal(provider_ref01_resdata_up0["id"], provider_ref01_data_up0_up["id"])

    -- LOAD
    local provider_ref01_match_dt0 = {
      id = provider_ref01_data["id"],
    }
    local provider_ref01_data_dt0_loaded, err = provider_ref01_ent:load(provider_ref01_match_dt0, nil)
    assert.is_nil(err)
    local provider_ref01_data_dt0_load_result = helpers.to_map(type(provider_ref01_data_dt0_loaded) == 'table' and provider_ref01_data_dt0_loaded.data_get and provider_ref01_data_dt0_loaded:data_get() or provider_ref01_data_dt0_loaded)
    assert.is_not_nil(provider_ref01_data_dt0_load_result)
    assert.are.equal(provider_ref01_data_dt0_load_result["id"], provider_ref01_data["id"])

    -- REMOVE
    local provider_ref01_match_rm0 = {
      id = provider_ref01_data["id"],
    }
    local _, err = provider_ref01_ent:remove(provider_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function provider_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/provider/ProviderTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read provider test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "provider01", "provider02", "provider03", "resource_name01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("VAPI_TEST_PROVIDER_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["VAPI_TEST_PROVIDER_ENTID"] = idmap,
    ["VAPI_TEST_LIVE"] = "FALSE",
    ["VAPI_TEST_EXPLAIN"] = "FALSE",
    ["VAPI_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["VAPI_TEST_PROVIDER_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["provider"] == nil then
    idmap_resolved["provider"] = idmap_resolved["provider01"]
  end
  if idmap_resolved["resource_name"] == nil then
    idmap_resolved["resource_name"] = idmap_resolved["resource_name01"]
  end

  if env["VAPI_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["VAPI_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["VAPI_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["VAPI_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
