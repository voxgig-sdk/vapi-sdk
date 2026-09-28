package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/vapi-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"analytics | assistant | board | call | campaign | chat | create_simulation_run | eval | file | insight | knowledge_base | knowledge_base_v2_file | personality | phone_number | provider | scenario | scorecard | session | simulation | simulation_run | simulation_run_item | simulation_suite | squad | structured_output | tool"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.VapiSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "vapi_list",
		Description: "List records from Vapi. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "vapi_load",
		Description: "Load a single record from Vapi. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.VapiSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.VapiSDK, name string) (sdk.VapiEntity, error) {
	switch strings.ToLower(name) {
	case "analytics":
		return client.Analytics(nil), nil
	case "assistant":
		return client.Assistant(nil), nil
	case "board":
		return client.Board(nil), nil
	case "call":
		return client.Call(nil), nil
	case "campaign":
		return client.Campaign(nil), nil
	case "chat":
		return client.Chat(nil), nil
	case "create_simulation_run":
		return client.CreateSimulationRun(nil), nil
	case "eval":
		return client.Eval(nil), nil
	case "file":
		return client.File(nil), nil
	case "insight":
		return client.Insight(nil), nil
	case "knowledge_base":
		return client.KnowledgeBase(nil), nil
	case "knowledge_base_v2_file":
		return client.KnowledgeBaseV2File(nil), nil
	case "personality":
		return client.Personality(nil), nil
	case "phone_number":
		return client.PhoneNumber(nil), nil
	case "provider":
		return client.Provider(nil), nil
	case "scenario":
		return client.Scenario(nil), nil
	case "scorecard":
		return client.Scorecard(nil), nil
	case "session":
		return client.Session(nil), nil
	case "simulation":
		return client.Simulation(nil), nil
	case "simulation_run":
		return client.SimulationRun(nil), nil
	case "simulation_run_item":
		return client.SimulationRunItem(nil), nil
	case "simulation_suite":
		return client.SimulationSuite(nil), nil
	case "squad":
		return client.Squad(nil), nil
	case "structured_output":
		return client.StructuredOutput(nil), nil
	case "tool":
		return client.Tool(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
