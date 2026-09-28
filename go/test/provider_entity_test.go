package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/vapi-sdk/go"
	"github.com/voxgig-sdk/vapi-sdk/go/core"

	vs "github.com/voxgig-sdk/vapi-sdk/go/utility/struct"
)

func TestProviderEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Provider(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProviderEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := providerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "provider." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set VAPI_TEST_PROVIDER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		providerRef01Ent := client.Provider(nil)
		providerRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "provider"}), "provider_ref01"))
		providerRef01Data["provider"] = setup.idmap["provider01"]
		providerRef01Data["resource_name"] = setup.idmap["resource_name01"]

		providerRef01DataResult, err := providerRef01Ent.Create(providerRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		providerRef01Data = core.ToMapAny(entityData(providerRef01DataResult))
		if providerRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if providerRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		providerRef01DataUp0Up := map[string]any{
			"id": providerRef01Data["id"],
			"provider": setup.idmap["provider"],
			"resource_name": setup.idmap["resource_name"],
		}

		providerRef01ResdataUp0Result, err := providerRef01Ent.Update(providerRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		providerRef01ResdataUp0 := core.ToMapAny(entityData(providerRef01ResdataUp0Result))
		if providerRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if providerRef01ResdataUp0["id"] != providerRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		providerRef01MatchDt0 := map[string]any{
			"id": providerRef01Data["id"],
		}
		providerRef01DataDt0Loaded, err := providerRef01Ent.Load(providerRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		providerRef01DataDt0LoadResult := core.ToMapAny(entityData(providerRef01DataDt0Loaded))
		if providerRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if providerRef01DataDt0LoadResult["id"] != providerRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		providerRef01MatchRm0 := map[string]any{
			"id": providerRef01Data["id"],
		}
		_, err = providerRef01Ent.Remove(providerRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func providerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "provider", "ProviderTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read provider test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse provider test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"provider01", "provider02", "provider03", "resource_name01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("VAPI_TEST_PROVIDER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VAPI_TEST_PROVIDER_ENTID": idmap,
		"VAPI_TEST_LIVE":      "FALSE",
		"VAPI_TEST_EXPLAIN":   "FALSE",
		"VAPI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VAPI_TEST_PROVIDER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add provider alias for update test.
	if idmapResolved["provider"] == nil {
		idmapResolved["provider"] = idmapResolved["provider01"]
	}
	// Add resource_name alias for update test.
	if idmapResolved["resource_name"] == nil {
		idmapResolved["resource_name"] = idmapResolved["resource_name01"]
	}

	if env["VAPI_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["VAPI_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewVapiSDK(core.ToMapAny(mergedOpts))
	}

	live := env["VAPI_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["VAPI_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
