package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/vapi-sdk/go/utility/struct"
)

type VapiSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewVapiSDK(options map[string]any) *VapiSDK {
	sdk := &VapiSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *VapiSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *VapiSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *VapiSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *VapiSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *VapiSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *VapiSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *VapiSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("VapiSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *VapiSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *VapiSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("VapiSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Analytics returns a Analytics entity bound to this client.
// Idiomatic usage: client.Analytics(nil).List(nil, nil) or
// client.Analytics(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Analytics(data map[string]any) VapiEntity {
	return NewAnalyticsEntityFunc(sdk, data)
}


// Assistant returns a Assistant entity bound to this client.
// Idiomatic usage: client.Assistant(nil).List(nil, nil) or
// client.Assistant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Assistant(data map[string]any) VapiEntity {
	return NewAssistantEntityFunc(sdk, data)
}


// Board returns a Board entity bound to this client.
// Idiomatic usage: client.Board(nil).List(nil, nil) or
// client.Board(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Board(data map[string]any) VapiEntity {
	return NewBoardEntityFunc(sdk, data)
}


// Call returns a Call entity bound to this client.
// Idiomatic usage: client.Call(nil).List(nil, nil) or
// client.Call(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Call(data map[string]any) VapiEntity {
	return NewCallEntityFunc(sdk, data)
}


// Campaign returns a Campaign entity bound to this client.
// Idiomatic usage: client.Campaign(nil).List(nil, nil) or
// client.Campaign(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Campaign(data map[string]any) VapiEntity {
	return NewCampaignEntityFunc(sdk, data)
}


// Chat returns a Chat entity bound to this client.
// Idiomatic usage: client.Chat(nil).List(nil, nil) or
// client.Chat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Chat(data map[string]any) VapiEntity {
	return NewChatEntityFunc(sdk, data)
}


// Eval returns a Eval entity bound to this client.
// Idiomatic usage: client.Eval(nil).List(nil, nil) or
// client.Eval(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Eval(data map[string]any) VapiEntity {
	return NewEvalEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) File(data map[string]any) VapiEntity {
	return NewFileEntityFunc(sdk, data)
}


// Insight returns a Insight entity bound to this client.
// Idiomatic usage: client.Insight(nil).List(nil, nil) or
// client.Insight(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Insight(data map[string]any) VapiEntity {
	return NewInsightEntityFunc(sdk, data)
}


// KnowledgeBase returns a KnowledgeBase entity bound to this client.
// Idiomatic usage: client.KnowledgeBase(nil).List(nil, nil) or
// client.KnowledgeBase(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) KnowledgeBase(data map[string]any) VapiEntity {
	return NewKnowledgeBaseEntityFunc(sdk, data)
}


// KnowledgeBaseV2File returns a KnowledgeBaseV2File entity bound to this client.
// Idiomatic usage: client.KnowledgeBaseV2File(nil).List(nil, nil) or
// client.KnowledgeBaseV2File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) KnowledgeBaseV2File(data map[string]any) VapiEntity {
	return NewKnowledgeBaseV2FileEntityFunc(sdk, data)
}


// Personality returns a Personality entity bound to this client.
// Idiomatic usage: client.Personality(nil).List(nil, nil) or
// client.Personality(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Personality(data map[string]any) VapiEntity {
	return NewPersonalityEntityFunc(sdk, data)
}


// PhoneNumber returns a PhoneNumber entity bound to this client.
// Idiomatic usage: client.PhoneNumber(nil).List(nil, nil) or
// client.PhoneNumber(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) PhoneNumber(data map[string]any) VapiEntity {
	return NewPhoneNumberEntityFunc(sdk, data)
}


// Provider returns a Provider entity bound to this client.
// Idiomatic usage: client.Provider(nil).List(nil, nil) or
// client.Provider(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Provider(data map[string]any) VapiEntity {
	return NewProviderEntityFunc(sdk, data)
}


// Scenario returns a Scenario entity bound to this client.
// Idiomatic usage: client.Scenario(nil).List(nil, nil) or
// client.Scenario(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Scenario(data map[string]any) VapiEntity {
	return NewScenarioEntityFunc(sdk, data)
}


// Scorecard returns a Scorecard entity bound to this client.
// Idiomatic usage: client.Scorecard(nil).List(nil, nil) or
// client.Scorecard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Scorecard(data map[string]any) VapiEntity {
	return NewScorecardEntityFunc(sdk, data)
}


// Session returns a Session entity bound to this client.
// Idiomatic usage: client.Session(nil).List(nil, nil) or
// client.Session(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Session(data map[string]any) VapiEntity {
	return NewSessionEntityFunc(sdk, data)
}


// Simulation returns a Simulation entity bound to this client.
// Idiomatic usage: client.Simulation(nil).List(nil, nil) or
// client.Simulation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Simulation(data map[string]any) VapiEntity {
	return NewSimulationEntityFunc(sdk, data)
}


// SimulationRun returns a SimulationRun entity bound to this client.
// Idiomatic usage: client.SimulationRun(nil).List(nil, nil) or
// client.SimulationRun(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) SimulationRun(data map[string]any) VapiEntity {
	return NewSimulationRunEntityFunc(sdk, data)
}


// SimulationRunItem returns a SimulationRunItem entity bound to this client.
// Idiomatic usage: client.SimulationRunItem(nil).List(nil, nil) or
// client.SimulationRunItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) SimulationRunItem(data map[string]any) VapiEntity {
	return NewSimulationRunItemEntityFunc(sdk, data)
}


// SimulationSuite returns a SimulationSuite entity bound to this client.
// Idiomatic usage: client.SimulationSuite(nil).List(nil, nil) or
// client.SimulationSuite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) SimulationSuite(data map[string]any) VapiEntity {
	return NewSimulationSuiteEntityFunc(sdk, data)
}


// Squad returns a Squad entity bound to this client.
// Idiomatic usage: client.Squad(nil).List(nil, nil) or
// client.Squad(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Squad(data map[string]any) VapiEntity {
	return NewSquadEntityFunc(sdk, data)
}


// StructuredOutput returns a StructuredOutput entity bound to this client.
// Idiomatic usage: client.StructuredOutput(nil).List(nil, nil) or
// client.StructuredOutput(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) StructuredOutput(data map[string]any) VapiEntity {
	return NewStructuredOutputEntityFunc(sdk, data)
}


// Tool returns a Tool entity bound to this client.
// Idiomatic usage: client.Tool(nil).List(nil, nil) or
// client.Tool(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *VapiSDK) Tool(data map[string]any) VapiEntity {
	return NewToolEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *VapiSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewVapiSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
