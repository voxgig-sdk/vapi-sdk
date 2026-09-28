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

func TestStructuredOutputEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.StructuredOutput(nil)
		if ent == nil {
			t.Fatal("expected non-nil StructuredOutputEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"structured_output": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.StructuredOutput(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.StructuredOutput(nil).Stream("list", nil, nil) {
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
		setup := structured_outputBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "structured_output." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VAPI_TEST_STRUCTURED_OUTPUT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		structuredOutputRef01Ent := client.StructuredOutput(nil)
		structuredOutputRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "structured_output"}), "structured_output_ref01"))

		structuredOutputRef01DataResult, err := structuredOutputRef01Ent.Create(structuredOutputRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		structuredOutputRef01Data = core.ToMapAny(entityData(structuredOutputRef01DataResult))
		if structuredOutputRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if structuredOutputRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		structuredOutputRef01Match := map[string]any{}

		structuredOutputRef01ListResult, err := structuredOutputRef01Ent.List(structuredOutputRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		structuredOutputRef01List, structuredOutputRef01ListOk := structuredOutputRef01ListResult.([]any)
		if !structuredOutputRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", structuredOutputRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(structuredOutputRef01List), map[string]any{"id": structuredOutputRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		structuredOutputRef01DataUp0Up := map[string]any{
			"id": structuredOutputRef01Data["id"],
		}

		structuredOutputRef01MarkdefUp0Name := "createdAt"
		structuredOutputRef01MarkdefUp0Value := fmt.Sprintf("Mark01-structured_output_ref01_%d", setup.now)
		structuredOutputRef01DataUp0Up[structuredOutputRef01MarkdefUp0Name] = structuredOutputRef01MarkdefUp0Value

		structuredOutputRef01ResdataUp0Result, err := structuredOutputRef01Ent.Update(structuredOutputRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		structuredOutputRef01ResdataUp0 := core.ToMapAny(entityData(structuredOutputRef01ResdataUp0Result))
		if structuredOutputRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if structuredOutputRef01ResdataUp0["id"] != structuredOutputRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if structuredOutputRef01ResdataUp0[structuredOutputRef01MarkdefUp0Name] != structuredOutputRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", structuredOutputRef01MarkdefUp0Name, structuredOutputRef01ResdataUp0[structuredOutputRef01MarkdefUp0Name])
		}

		// LOAD
		structuredOutputRef01MatchDt0 := map[string]any{
			"id": structuredOutputRef01Data["id"],
		}
		structuredOutputRef01DataDt0Loaded, err := structuredOutputRef01Ent.Load(structuredOutputRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		structuredOutputRef01DataDt0LoadResult := core.ToMapAny(entityData(structuredOutputRef01DataDt0Loaded))
		if structuredOutputRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if structuredOutputRef01DataDt0LoadResult["id"] != structuredOutputRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		structuredOutputRef01MatchRm0 := map[string]any{
			"id": structuredOutputRef01Data["id"],
		}
		_, err = structuredOutputRef01Ent.Remove(structuredOutputRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		structuredOutputRef01MatchRt0 := map[string]any{}

		structuredOutputRef01ListRt0Result, err := structuredOutputRef01Ent.List(structuredOutputRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		structuredOutputRef01ListRt0, structuredOutputRef01ListRt0Ok := structuredOutputRef01ListRt0Result.([]any)
		if !structuredOutputRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", structuredOutputRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(structuredOutputRef01ListRt0), map[string]any{"id": structuredOutputRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func structured_outputBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "structured_output", "StructuredOutputTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read structured_output test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse structured_output test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"structured_output01", "structured_output02", "structured_output03"},
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
	entidEnvRaw := os.Getenv("VAPI_TEST_STRUCTURED_OUTPUT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VAPI_TEST_STRUCTURED_OUTPUT_ENTID": idmap,
		"VAPI_TEST_LIVE":      "FALSE",
		"VAPI_TEST_EXPLAIN":   "FALSE",
		"VAPI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VAPI_TEST_STRUCTURED_OUTPUT_ENTID"])
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
