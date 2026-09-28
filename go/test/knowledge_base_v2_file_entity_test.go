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

func TestKnowledgeBaseV2FileEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.KnowledgeBaseV2File(nil)
		if ent == nil {
			t.Fatal("expected non-nil KnowledgeBaseV2FileEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"knowledge_base_v2_file": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.KnowledgeBaseV2File(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.KnowledgeBaseV2File(nil).Stream("list", nil, nil) {
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
		setup := knowledge_base_v2_fileBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "knowledge_base_v2_file." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		knowledgeBaseV2FileRef01Ent := client.KnowledgeBaseV2File(nil)
		knowledgeBaseV2FileRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "knowledge_base_v2_file"}), "knowledge_base_v2_file_ref01"))
		knowledgeBaseV2FileRef01Data["knowledge_base_id"] = setup.idmap["knowledge_base01"]

		knowledgeBaseV2FileRef01DataResult, err := knowledgeBaseV2FileRef01Ent.Create(knowledgeBaseV2FileRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		knowledgeBaseV2FileRef01Data = core.ToMapAny(entityData(knowledgeBaseV2FileRef01DataResult))
		if knowledgeBaseV2FileRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if knowledgeBaseV2FileRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		knowledgeBaseV2FileRef01Match := map[string]any{}

		knowledgeBaseV2FileRef01ListResult, err := knowledgeBaseV2FileRef01Ent.List(knowledgeBaseV2FileRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		knowledgeBaseV2FileRef01List, knowledgeBaseV2FileRef01ListOk := knowledgeBaseV2FileRef01ListResult.([]any)
		if !knowledgeBaseV2FileRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", knowledgeBaseV2FileRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(knowledgeBaseV2FileRef01List), map[string]any{"id": knowledgeBaseV2FileRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// REMOVE
		knowledgeBaseV2FileRef01MatchRm0 := map[string]any{
			"id": knowledgeBaseV2FileRef01Data["id"],
		}
		_, err = knowledgeBaseV2FileRef01Ent.Remove(knowledgeBaseV2FileRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		knowledgeBaseV2FileRef01MatchRt0 := map[string]any{}

		knowledgeBaseV2FileRef01ListRt0Result, err := knowledgeBaseV2FileRef01Ent.List(knowledgeBaseV2FileRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		knowledgeBaseV2FileRef01ListRt0, knowledgeBaseV2FileRef01ListRt0Ok := knowledgeBaseV2FileRef01ListRt0Result.([]any)
		if !knowledgeBaseV2FileRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", knowledgeBaseV2FileRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(knowledgeBaseV2FileRef01ListRt0), map[string]any{"id": knowledgeBaseV2FileRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func knowledge_base_v2_fileBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "knowledge_base_v2_file", "KnowledgeBaseV2FileTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read knowledge_base_v2_file test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse knowledge_base_v2_file test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"knowledge_base_v2_file01", "knowledge_base_v2_file02", "knowledge_base_v2_file03", "knowledge_base01", "knowledge_base02", "knowledge_base03", "file01", "file02", "file03"},
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
	entidEnvRaw := os.Getenv("VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID": idmap,
		"VAPI_TEST_LIVE":      "FALSE",
		"VAPI_TEST_EXPLAIN":   "FALSE",
		"VAPI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID"])
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
