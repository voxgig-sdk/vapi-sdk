<?php
declare(strict_types=1);

// SimulationRunItem entity test

require_once __DIR__ . '/../vapi_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class SimulationRunItemEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = VapiSDK::test(null, null);
        $ent = $testsdk->SimulationRunItem(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "simulation_run_item" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = VapiSDK::test($seed, null);
        $seen = iterator_to_array($base->SimulationRunItem(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = VapiConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = VapiSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->SimulationRunItem(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = simulation_run_item_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "simulation_run_item." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set VAPI_TEST_SIMULATION_RUN_ITEM_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $simulation_run_item_ref01_ent = $client->SimulationRunItem(null);
        $simulation_run_item_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.simulation_run_item"), "simulation_run_item_ref01"));
        $simulation_run_item_ref01_data["item_id"] = $setup["idmap"]["item01"];
        $simulation_run_item_ref01_data["run_id"] = $setup["idmap"]["run01"];

        $simulation_run_item_ref01_data_result = $simulation_run_item_ref01_ent->create($simulation_run_item_ref01_data, null);
        $simulation_run_item_ref01_data = Helpers::to_map(is_object($simulation_run_item_ref01_data_result) && method_exists($simulation_run_item_ref01_data_result, 'data_get') ? $simulation_run_item_ref01_data_result->data_get() : $simulation_run_item_ref01_data_result);
        $this->assertNotNull($simulation_run_item_ref01_data);
        $this->assertNotNull($simulation_run_item_ref01_data["id"]);

        // LIST
        $simulation_run_item_ref01_match = [
            "run_id" => $setup["idmap"]["run01"],
        ];

        $simulation_run_item_ref01_list_result = $simulation_run_item_ref01_ent->list($simulation_run_item_ref01_match, null);
        $this->assertIsArray($simulation_run_item_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($simulation_run_item_ref01_list_result),
            ["id" => $simulation_run_item_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $simulation_run_item_ref01_data_up0_up = [
            "id" => $simulation_run_item_ref01_data["id"],
            "run_id" => $setup["idmap"]["run_id"],
        ];

        $simulation_run_item_ref01_markdef_up0_name = "callId";
        $simulation_run_item_ref01_markdef_up0_value = "Mark01-simulation_run_item_ref01_" . $setup["now"];
        $simulation_run_item_ref01_data_up0_up[$simulation_run_item_ref01_markdef_up0_name] = $simulation_run_item_ref01_markdef_up0_value;

        $simulation_run_item_ref01_resdata_up0_result = $simulation_run_item_ref01_ent->update($simulation_run_item_ref01_data_up0_up, null);
        $simulation_run_item_ref01_resdata_up0 = Helpers::to_map(is_object($simulation_run_item_ref01_resdata_up0_result) && method_exists($simulation_run_item_ref01_resdata_up0_result, 'data_get') ? $simulation_run_item_ref01_resdata_up0_result->data_get() : $simulation_run_item_ref01_resdata_up0_result);
        $this->assertNotNull($simulation_run_item_ref01_resdata_up0);
        $this->assertEquals($simulation_run_item_ref01_resdata_up0["id"], $simulation_run_item_ref01_data_up0_up["id"]);
        $this->assertEquals($simulation_run_item_ref01_resdata_up0[$simulation_run_item_ref01_markdef_up0_name], $simulation_run_item_ref01_markdef_up0_value);

        // LOAD
        $simulation_run_item_ref01_match_dt0 = [
            "id" => $simulation_run_item_ref01_data["id"],
        ];
        $simulation_run_item_ref01_data_dt0_loaded = $simulation_run_item_ref01_ent->load($simulation_run_item_ref01_match_dt0, null);
        $simulation_run_item_ref01_data_dt0_load_result = Helpers::to_map(is_object($simulation_run_item_ref01_data_dt0_loaded) && method_exists($simulation_run_item_ref01_data_dt0_loaded, 'data_get') ? $simulation_run_item_ref01_data_dt0_loaded->data_get() : $simulation_run_item_ref01_data_dt0_loaded);
        $this->assertNotNull($simulation_run_item_ref01_data_dt0_load_result);
        $this->assertEquals($simulation_run_item_ref01_data_dt0_load_result["id"], $simulation_run_item_ref01_data["id"]);

    }
}

function simulation_run_item_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/simulation_run_item/SimulationRunItemTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = VapiSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["simulation_run_item01", "simulation_run_item02", "simulation_run_item03", "item01", "run01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("VAPI_TEST_SIMULATION_RUN_ITEM_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "VAPI_TEST_SIMULATION_RUN_ITEM_ENTID" => $idmap,
        "VAPI_TEST_LIVE" => "FALSE",
        "VAPI_TEST_EXPLAIN" => "FALSE",
        "VAPI_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["VAPI_TEST_SIMULATION_RUN_ITEM_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["run_id"])) {
        $idmap_resolved["run_id"] = $idmap_resolved["run01"];
    }

    if ($env["VAPI_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["VAPI_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new VapiSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["VAPI_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["VAPI_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
