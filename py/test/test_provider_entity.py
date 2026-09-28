# Provider entity test

import json
import os
import time

import pytest

from vapi_sdk.utility.voxgig_struct import voxgig_struct as vs
from vapi_sdk import VapiSDK
from vapi_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestProviderEntity:

    def test_should_create_instance(self):
        testsdk = VapiSDK.test(None, None)
        ent = testsdk.Provider(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _provider_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "provider." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set VAPI_TEST_PROVIDER_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        provider_ref01_ent = client.Provider(None)
        provider_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.provider"), "provider_ref01"))
        provider_ref01_data["provider"] = setup["idmap"]["provider01"]
        provider_ref01_data["resource_name"] = setup["idmap"]["resource_name01"]

        provider_ref01_data = helpers.to_map(runner.entity_data(provider_ref01_ent.create(provider_ref01_data, None)))
        assert provider_ref01_data is not None
        assert provider_ref01_data["id"] is not None

        # UPDATE
        provider_ref01_data_up0_up = {
            "id": provider_ref01_data["id"],
            "provider": setup["idmap"]["provider"],
            "resource_name": setup["idmap"]["resource_name"],
        }

        provider_ref01_resdata_up0 = helpers.to_map(runner.entity_data(provider_ref01_ent.update(provider_ref01_data_up0_up, None)))
        assert provider_ref01_resdata_up0 is not None
        assert provider_ref01_resdata_up0["id"] == provider_ref01_data_up0_up["id"]

        # LOAD
        provider_ref01_match_dt0 = {
            "id": provider_ref01_data["id"],
        }
        provider_ref01_data_dt0_loaded = provider_ref01_ent.load(provider_ref01_match_dt0, None)
        provider_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(provider_ref01_data_dt0_loaded))
        assert provider_ref01_data_dt0_load_result is not None
        assert provider_ref01_data_dt0_load_result["id"] == provider_ref01_data["id"]

        # REMOVE
        provider_ref01_match_rm0 = {
            "id": provider_ref01_data["id"],
        }
        provider_ref01_ent.remove(provider_ref01_match_rm0, None)



def _provider_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/provider/ProviderTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = VapiSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["provider01", "provider02", "provider03", "resource_name01"],
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
        "VAPI_TEST_PROVIDER_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "VAPI_TEST_PROVIDER_ENTID": idmap,
        "VAPI_TEST_LIVE": "FALSE",
        "VAPI_TEST_EXPLAIN": "FALSE",
        "VAPI_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("VAPI_TEST_PROVIDER_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("provider") is None:
        idmap_resolved["provider"] = idmap_resolved.get("provider01")
    if idmap_resolved.get("resource_name") is None:
        idmap_resolved["resource_name"] = idmap_resolved.get("resource_name01")

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
