package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestScorecardEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Scorecard(nil)
		if ent == nil {
			t.Fatal("expected non-nil ScorecardEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"scorecard": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Scorecard(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.Scorecard(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := scorecardBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "scorecard." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VAPI_TEST_SCORECARD_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		scorecardRef01Ent := client.Scorecard(nil)
		scorecardRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "scorecard"}), "scorecard_ref01"))

		scorecardRef01DataResult, err := scorecardRef01Ent.Create(scorecardRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		scorecardRef01Data = core.ToMapAny(entityData(scorecardRef01DataResult))
		if scorecardRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if scorecardRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		scorecardRef01Match := map[string]any{}

		scorecardRef01ListResult, err := scorecardRef01Ent.List(scorecardRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		scorecardRef01List, scorecardRef01ListOk := scorecardRef01ListResult.([]any)
		if !scorecardRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", scorecardRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(scorecardRef01List), map[string]any{"id": scorecardRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		scorecardRef01DataUp0Up := map[string]any{
			"id": scorecardRef01Data["id"],
		}

		scorecardRef01MarkdefUp0Name := "createdAt"
		scorecardRef01MarkdefUp0Value := fmt.Sprintf("Mark01-scorecard_ref01_%d", setup.now)
		scorecardRef01DataUp0Up[scorecardRef01MarkdefUp0Name] = scorecardRef01MarkdefUp0Value

		scorecardRef01ResdataUp0Result, err := scorecardRef01Ent.Update(scorecardRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		scorecardRef01ResdataUp0 := core.ToMapAny(entityData(scorecardRef01ResdataUp0Result))
		if scorecardRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if scorecardRef01ResdataUp0["id"] != scorecardRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if scorecardRef01ResdataUp0[scorecardRef01MarkdefUp0Name] != scorecardRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", scorecardRef01MarkdefUp0Name, scorecardRef01ResdataUp0[scorecardRef01MarkdefUp0Name])
		}

		// LOAD
		scorecardRef01MatchDt0 := map[string]any{
			"id": scorecardRef01Data["id"],
		}
		scorecardRef01DataDt0Loaded, err := scorecardRef01Ent.Load(scorecardRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		scorecardRef01DataDt0LoadResult := core.ToMapAny(entityData(scorecardRef01DataDt0Loaded))
		if scorecardRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if scorecardRef01DataDt0LoadResult["id"] != scorecardRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		scorecardRef01MatchRm0 := map[string]any{
			"id": scorecardRef01Data["id"],
		}
		_, err = scorecardRef01Ent.Remove(scorecardRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		scorecardRef01MatchRt0 := map[string]any{}

		scorecardRef01ListRt0Result, err := scorecardRef01Ent.List(scorecardRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		scorecardRef01ListRt0, scorecardRef01ListRt0Ok := scorecardRef01ListRt0Result.([]any)
		if !scorecardRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", scorecardRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(scorecardRef01ListRt0), map[string]any{"id": scorecardRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func scorecardBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "scorecard", "ScorecardTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read scorecard test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse scorecard test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"scorecard01", "scorecard02", "scorecard03"},
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
	entidEnvRaw := os.Getenv("VAPI_TEST_SCORECARD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VAPI_TEST_SCORECARD_ENTID": idmap,
		"VAPI_TEST_LIVE":      "FALSE",
		"VAPI_TEST_EXPLAIN":   "FALSE",
		"VAPI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VAPI_TEST_SCORECARD_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
