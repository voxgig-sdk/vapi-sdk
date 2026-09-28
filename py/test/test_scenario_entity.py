# Scenario entity test

import json
import os
import time

import pytest

from vapi_sdk.utility.voxgig_struct import voxgig_struct as vs
from vapi_sdk import VapiSDK
from vapi_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestScenarioEntity:

    def test_should_create_instance(self):
        testsdk = VapiSDK.test(None, None)
        ent = testsdk.Scenario(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "scenario": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = VapiSDK.test(seed, None)
        seen = list(base.Scenario(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from vapi_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = VapiSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Scenario(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _scenario_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "scenario." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set VAPI_TEST_SCENARIO_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        scenario_ref01_ent = client.Scenario(None)
        scenario_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.scenario"), "scenario_ref01"))

        scenario_ref01_data = helpers.to_map(runner.entity_data(scenario_ref01_ent.create(scenario_ref01_data, None)))
        assert scenario_ref01_data is not None
        assert scenario_ref01_data["id"] is not None

        # LIST
        scenario_ref01_match = {}

        scenario_ref01_list_result = scenario_ref01_ent.list(scenario_ref01_match, None)
        assert isinstance(scenario_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(scenario_ref01_list_result),
            {"id": scenario_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        scenario_ref01_data_up0_up = {
            "id": scenario_ref01_data["id"],
        }

        scenario_ref01_markdef_up0_name = "createdAt"
        scenario_ref01_markdef_up0_value = "Mark01-scenario_ref01_" + str(setup["now"])
        scenario_ref01_data_up0_up[scenario_ref01_markdef_up0_name] = scenario_ref01_markdef_up0_value

        scenario_ref01_resdata_up0 = helpers.to_map(runner.entity_data(scenario_ref01_ent.update(scenario_ref01_data_up0_up, None)))
        assert scenario_ref01_resdata_up0 is not None
        assert scenario_ref01_resdata_up0["id"] == scenario_ref01_data_up0_up["id"]
        assert scenario_ref01_resdata_up0[scenario_ref01_markdef_up0_name] == scenario_ref01_markdef_up0_value

        # LOAD
        scenario_ref01_match_dt0 = {
            "id": scenario_ref01_data["id"],
        }
        scenario_ref01_data_dt0_loaded = scenario_ref01_ent.load(scenario_ref01_match_dt0, None)
        scenario_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(scenario_ref01_data_dt0_loaded))
        assert scenario_ref01_data_dt0_load_result is not None
        assert scenario_ref01_data_dt0_load_result["id"] == scenario_ref01_data["id"]

        # REMOVE
        scenario_ref01_match_rm0 = {
            "id": scenario_ref01_data["id"],
        }
        scenario_ref01_ent.remove(scenario_ref01_match_rm0, None)

        # LIST
        scenario_ref01_match_rt0 = {}

        scenario_ref01_list_rt0_result = scenario_ref01_ent.list(scenario_ref01_match_rt0, None)
        assert isinstance(scenario_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(scenario_ref01_list_rt0_result),
            {"id": scenario_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _scenario_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/scenario/ScenarioTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = VapiSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["scenario01", "scenario02", "scenario03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "VAPI_TEST_SCENARIO_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "VAPI_TEST_SCENARIO_ENTID": idmap,
        "VAPI_TEST_LIVE": "FALSE",
        "VAPI_TEST_EXPLAIN": "FALSE",
        "VAPI_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("VAPI_TEST_SCENARIO_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("VAPI_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("VAPI_APIKEY"),
            },
            extra or {},
        ])
        client = VapiSDK(helpers.to_map(merged_opts))

    _live = env.get("VAPI_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("VAPI_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
