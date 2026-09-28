# Vapi Golang SDK



The Golang SDK for the Vapi API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Analytics(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/vapi-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/vapi-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/vapi-sdk/go=../vapi-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/vapi-sdk/go"
)

func main() {
    client := sdk.NewVapiSDK(map[string]any{
        "apikey": os.Getenv("VAPI_APIKEY"),
    })

    // Create a analytics.
    created, err := client.Analytics(nil).Create(map[string]any{"queries": []any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
scenarios, err := client.Scenario(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = scenarios
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

scenario, err := client.Scenario(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(scenario) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewVapiSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
VAPI_TEST_LIVE=TRUE
VAPI_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewVapiSDK

```go
func NewVapiSDK(options map[string]any) *VapiSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *VapiSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### VapiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Analytics` | `(data map[string]any) VapiEntity` | Create an Analytics entity instance. |
| `Assistant` | `(data map[string]any) VapiEntity` | Create an Assistant entity instance. |
| `Board` | `(data map[string]any) VapiEntity` | Create a Board entity instance. |
| `Call` | `(data map[string]any) VapiEntity` | Create a Call entity instance. |
| `Campaign` | `(data map[string]any) VapiEntity` | Create a Campaign entity instance. |
| `Chat` | `(data map[string]any) VapiEntity` | Create a Chat entity instance. |
| `CreateSimulationRun` | `(data map[string]any) VapiEntity` | Create a CreateSimulationRun entity instance. |
| `Eval` | `(data map[string]any) VapiEntity` | Create an Eval entity instance. |
| `File` | `(data map[string]any) VapiEntity` | Create a File entity instance. |
| `Insight` | `(data map[string]any) VapiEntity` | Create an Insight entity instance. |
| `KnowledgeBase` | `(data map[string]any) VapiEntity` | Create a KnowledgeBase entity instance. |
| `KnowledgeBaseV2File` | `(data map[string]any) VapiEntity` | Create a KnowledgeBaseV2File entity instance. |
| `Personality` | `(data map[string]any) VapiEntity` | Create a Personality entity instance. |
| `PhoneNumber` | `(data map[string]any) VapiEntity` | Create a PhoneNumber entity instance. |
| `Provider` | `(data map[string]any) VapiEntity` | Create a Provider entity instance. |
| `Scenario` | `(data map[string]any) VapiEntity` | Create a Scenario entity instance. |
| `Scorecard` | `(data map[string]any) VapiEntity` | Create a Scorecard entity instance. |
| `Session` | `(data map[string]any) VapiEntity` | Create a Session entity instance. |
| `Simulation` | `(data map[string]any) VapiEntity` | Create a Simulation entity instance. |
| `SimulationRun` | `(data map[string]any) VapiEntity` | Create a SimulationRun entity instance. |
| `SimulationRunItem` | `(data map[string]any) VapiEntity` | Create a SimulationRunItem entity instance. |
| `SimulationSuite` | `(data map[string]any) VapiEntity` | Create a SimulationSuite entity instance. |
| `Squad` | `(data map[string]any) VapiEntity` | Create a Squad entity instance. |
| `StructuredOutput` | `(data map[string]any) VapiEntity` | Create a StructuredOutput entity instance. |
| `Tool` | `(data map[string]any) VapiEntity` | Create a Tool entity instance. |

### Entity interface (VapiEntity)

All entities implement the `VapiEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    analytics, err := client.Analytics(nil).Create(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // analytics is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Analytics

| Field | Description |
| --- | --- |
| `"queries"` | This is the list of metric queries you want to perform. |

Operations: Create.

API path: `/analytics`

#### Assistant

| Field | Description |
| --- | --- |
| `"analysisPlan"` | This is the plan for analysis of assistant's calls. |
| `"artifactPlan"` | This is the plan for artifacts generated during assistant's calls. |
| `"backgroundSound"` | This is the background sound in the call. |
| `"backgroundSpeechDenoisingPlan"` | This enables filtering of noise and background speech while the user is talking. |
| `"clientMessages"` | These are the messages that will be sent to your Client SDKs. |
| `"compliancePlan"` |  |
| `"contentType"` | The content-type the URL returned, when a response was received. |
| `"createdAt"` | This is the ISO 8601 date-time string of when the assistant was created. |
| `"credentialIds"` | These are the credentials that will be used for the assistant calls. |
| `"credentials"` | These are dynamic credentials that will be used for the assistant calls. |
| `"endCallMessage"` | This is the message that the assistant will say if it ends the call. |
| `"endCallPhrases"` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `"firstMessage"` | This is the first message that the assistant will say. |
| `"firstMessageInterruptionsEnabled"` |  |
| `"firstMessageMode"` | This is the mode for the first message. |
| `"hooks"` | This is a set of actions that will be performed on certain events. |
| `"id"` | This is the unique identifier for the assistant. |
| `"keypadInputPlan"` |  |
| `"latestVersion"` | This is the latest version label (e.g. |
| `"maxDurationSeconds"` | This is the maximum number of seconds that the call will last. |
| `"metadata"` | This is for metadata you want to store on the assistant. |
| `"model"` | These are the options for the assistant's LLM. |
| `"modelDeprecations"` | Read-only. |
| `"modelOutputInMessagesEnabled"` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `"monitorPlan"` | This is the plan for real-time monitoring of the assistant's calls. |
| `"name"` | This is the name of the assistant. |
| `"observabilityPlan"` | This is the plan for observability of assistant's calls. |
| `"orgId"` | This is the unique identifier for the org that this assistant belongs to. |
| `"reason"` | Why validation failed. |
| `"server"` | This is where Vapi will send webhooks. |
| `"serverMessages"` | These are the messages that will be sent to your Server URL. |
| `"startSpeakingPlan"` | This is the plan for when the assistant should start talking. |
| `"status"` | The HTTP status the URL returned, when a response was received. |
| `"stopSpeakingPlan"` | This is the plan for when assistant should stop talking on customer interruption. |
| `"transcriber"` | These are the options for the assistant's transcriber. |
| `"transportConfigurations"` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `"url"` | This is the background sound URL to validate. |
| `"valid"` | Whether the URL currently serves a live media file. |
| `"voice"` | These are the options for the assistant's voice. |
| `"voicemailDetection"` | These are the settings to configure or disable voicemail detection. |
| `"voicemailMessage"` | This is the message that the assistant will say if the call is forwarded to voicemail. |

Operations: Create, List, Load, Remove, Update.

API path: `/assistant`

#### Board

| Field | Description |
| --- | --- |
| `"createdAt"` | This is the ISO 8601 date-time string of when the Board was created. |
| `"id"` | This is the unique identifier for the Board. |
| `"items"` | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `"layout"` | This is the layout of the Board. |
| `"name"` | This is the name of the Board. |
| `"orgId"` | This is the unique identifier for the org that this Board belongs to. |
| `"systemKey"` | Server-owned key for system-provisioned boards. |
| `"timeRangeOverride"` | This is the timerange override for the board. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the Board was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/reporting/board`

#### Call

| Field | Description |
| --- | --- |
| `"analysis"` | This is the analysis of the call. |
| `"artifact"` | These are the artifacts created from the call. |
| `"artifactPlan"` | This is a copy of assistant artifact plan. |
| `"assistant"` | This is the assistant that will be used for the call. |
| `"assistantId"` | This is the assistant ID that will be used for the call. |
| `"assistantOverrides"` | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `"assistantVersion"` | This is the assistant version to use for this call. |
| `"campaignId"` | This is the campaign ID that the call belongs to. |
| `"compliance"` | This is the compliance of the call. |
| `"cost"` | This is the cost of the call in USD. |
| `"costBreakdown"` | This is the cost of the call in USD. |
| `"costs"` | These are the costs of individual components of the call in USD. |
| `"createdAt"` | This is the ISO 8601 date-time string of when the call was created. |
| `"customer"` | This is the customer that will be called. |
| `"customerId"` | This is the customer that will be called. |
| `"customers"` | This is used to issue batch calls to multiple customers. |
| `"destination"` | This is the destination where the call ended up being transferred to. |
| `"endedAt"` | This is the ISO 8601 date-time string of when the call was ended. |
| `"endedMessage"` | This is the message that adds more context to the ended reason. |
| `"endedReason"` | This is the explanation for how the call ended. |
| `"id"` | This is the unique identifier for the call. |
| `"messages"` |  |
| `"monitor"` | This is to real-time monitor the call. |
| `"name"` | This is the name of the call. |
| `"orgId"` | This is the unique identifier for the org that this call belongs to. |
| `"phoneCallProvider"` | This is the provider of the call. |
| `"phoneCallProviderId"` | The ID of the call as provided by the phone number service. |
| `"phoneCallTransport"` | This is the transport of the phone call. |
| `"phoneNumber"` | This is the phone number that will be used for the call. |
| `"phoneNumberId"` | This is the phone number that will be used for the call. |
| `"schedulePlan"` | This is the schedule plan of the call. |
| `"squad"` | This is a squad that will be used for the call. |
| `"squadId"` | This is the squad that will be used for the call. |
| `"squadOverrides"` | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `"squadVersion"` | This is the squad version to use for this call. |
| `"startedAt"` | This is the ISO 8601 date-time string of when the call was started. |
| `"status"` | This is the status of the call. |
| `"transport"` | This is the transport of the call. |
| `"type"` | This is the type of call. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the call was last updated. |
| `"workflow"` | This is a workflow that will be used for the call. |
| `"workflowId"` | This is the workflow that will be used for the call. |
| `"workflowOverrides"` | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

Operations: Create, List, Load, Remove, Update.

API path: `/call`

#### Campaign

| Field | Description |
| --- | --- |
| `"assistantId"` | This is the assistant ID that will be used for the campaign calls. |
| `"assistantOverrides"` | These are the overrides for the assistant's settings and template variables for the campaign. |
| `"callMetrics"` | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `"calls"` | This is a map of call IDs to campaign call details. |
| `"callsCounterEnded"` | This is the number of calls that have ended. |
| `"callsCounterEndedVoicemail"` | This is the number of calls whose ended reason is 'voicemail'. |
| `"callsCounterInProgress"` | This is the number of calls that have been in progress. |
| `"callsCounterQueued"` | This is the number of calls that have been queued. |
| `"callsCounterScheduled"` | This is the number of calls that have been scheduled. |
| `"contactCounters"` | These are the per-status contact counts for this campaign. |
| `"createdAt"` | This is the ISO 8601 date-time string of when the campaign was created. |
| `"customers"` | These are the customers that will be called in the campaign. |
| `"dialPlan"` | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `"duplicateFromCampaignId"` | Optional campaign ID to duplicate config from. |
| `"endedReason"` | This is the explanation for how the campaign ended. |
| `"id"` | This is the unique identifier for the campaign. |
| `"maxConcurrency"` | This is the maximum number of concurrent calls that will be made for the campaign. |
| `"name"` | This is the name of the campaign. |
| `"orgId"` | This is the unique identifier for the org that this campaign belongs to. |
| `"phoneNumberId"` | This is the phone number ID that will be used for the campaign calls. |
| `"predialPlan"` | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `"schedulePlan"` | This is the schedule plan for the campaign. |
| `"server"` | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `"serverMessages"` | These are the messages that will be sent to your Server URL. |
| `"squadId"` | This is the squad ID that will be used for the campaign calls. |
| `"squadOverrides"` | These are the overrides for the squad and template variables for the campaign. |
| `"status"` | This is the status of the campaign. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `"workflowId"` | This is the workflow ID that will be used for the campaign calls. |

Operations: Create, List, Load, Remove, Update.

API path: `/campaign`

#### Chat

| Field | Description |
| --- | --- |
| `"assistant"` | This is the assistant that will be used for the chat. |
| `"assistantId"` | This is the assistant that will be used for the chat. |
| `"assistantOverrides"` | These are the variable values that will be used to replace template variables in the assistant messages. |
| `"cost"` | This is the cost of the chat in USD. |
| `"costs"` | These are the costs of individual components of the chat in USD. |
| `"createdAt"` | This is the ISO 8601 date-time string of when the chat was created. |
| `"id"` | This is the unique identifier for the chat. |
| `"input"` | This is the input text for the chat. |
| `"messages"` | This is an array of messages used as context for the chat. |
| `"name"` | This is the name of the chat. |
| `"orgId"` | This is the unique identifier for the org that this chat belongs to. |
| `"output"` | This is the output messages generated by the system in response to the input. |
| `"previousChatId"` | This is the ID of the chat that will be used as context for the new chat. |
| `"sessionId"` | This is the ID of the session that will be used for the chat. |
| `"squad"` | This is the squad that will be used for the chat. |
| `"squadId"` | This is the squad that will be used for the chat. |
| `"stream"` | This is a flag that determines whether the response should be streamed. |
| `"transport"` | This is used to send the chat through a transport like SMS. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the chat was last updated. |

Operations: Create, List, Load, Remove.

API path: `/chat`

#### CreateSimulationRun

| Field | Description |
| --- | --- |
| `"iterations"` | Number of times to run each simulation (default: 1) |
| `"simulations"` | Array of simulations and/or suites to run |
| `"target"` | Target to test against |
| `"transport"` | Transport configuration for the simulation runs |

Operations: Create.

API path: `/eval/simulation/run`

#### Eval

| Field | Description |
| --- | --- |
| `"cost"` | This is the cost of the eval or suite run in USD. |
| `"costs"` | This is the break up of costs of the eval or suite run. |
| `"createdAt"` |  |
| `"description"` | This is the description of the eval. |
| `"endedAt"` |  |
| `"endedMessage"` | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `"endedReason"` | This is the reason for the eval run to end. |
| `"eval"` | This is the transient eval that will be run |
| `"evalId"` | This is the id of the eval that will be run. |
| `"id"` |  |
| `"messages"` | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `"name"` | This is the name of the eval. |
| `"orgId"` |  |
| `"results"` | This is the results of the eval or suite run. |
| `"startedAt"` |  |
| `"status"` | This is the status of the eval run. |
| `"target"` | This is the target that will be run against the eval |
| `"type"` | This is the type of the run. |
| `"updatedAt"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/eval`

#### File

| Field | Description |
| --- | --- |
| `"bucket"` |  |
| `"bytes"` |  |
| `"createdAt"` | This is the ISO 8601 date-time string of when the file was created. |
| `"id"` | This is the unique identifier for the file. |
| `"key"` |  |
| `"metadata"` |  |
| `"mimetype"` |  |
| `"name"` | This is the name of the file. |
| `"object"` |  |
| `"orgId"` | This is the unique identifier for the org that this file belongs to. |
| `"originalName"` |  |
| `"parsedTextBytes"` |  |
| `"parsedTextUrl"` |  |
| `"path"` |  |
| `"purpose"` |  |
| `"status"` |  |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the file was last updated. |
| `"url"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/file`

#### Insight

| Field | Description |
| --- | --- |
| `"createdAt"` | This is the ISO 8601 date-time string of when the Insight was created. |
| `"id"` | This is the unique identifier for the Insight. |
| `"name"` | This is the name of the Insight. |
| `"orgId"` | This is the unique identifier for the org that this Insight belongs to. |
| `"systemKey"` | Stable server-owned identifier for system-created insights. |
| `"type"` | This is the type of the Insight. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the Insight was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/reporting/insight/{id}/run`

#### KnowledgeBase

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"description"` |  |
| `"files"` |  |
| `"id"` |  |
| `"name"` |  |
| `"orgId"` |  |
| `"toolId"` | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `"updatedAt"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/knowledge-base`

#### KnowledgeBaseV2File

| Field | Description |
| --- | --- |
| `"bytes"` |  |
| `"createdAt"` |  |
| `"fileId"` |  |
| `"fileName"` |  |
| `"id"` |  |
| `"knowledgeBaseV2Id"` |  |
| `"mimetype"` |  |
| `"status"` |  |
| `"updatedAt"` |  |

Operations: Create, List, Remove.

API path: `/v2/knowledge-base/{id}/file/{fileId}/retry`

#### Personality

| Field | Description |
| --- | --- |
| `"analysisPlan"` | This is the plan for analysis of assistant's calls. |
| `"artifactPlan"` | This is the plan for artifacts generated during assistant's calls. |
| `"assistant"` | This is the full assistant configuration for this personality. |
| `"backgroundSound"` | This is the background sound in the call. |
| `"backgroundSpeechDenoisingPlan"` | This enables filtering of noise and background speech while the user is talking. |
| `"clientMessages"` | These are the messages that will be sent to your Client SDKs. |
| `"compliancePlan"` |  |
| `"createdAt"` | This is the ISO 8601 date-time string of when the personality was created. |
| `"credentialIds"` | These are the credentials that will be used for the assistant calls. |
| `"credentials"` | These are dynamic credentials that will be used for the assistant calls. |
| `"endCallMessage"` | This is the message that the assistant will say if it ends the call. |
| `"endCallPhrases"` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `"firstMessage"` | This is the first message that the assistant will say. |
| `"firstMessageInterruptionsEnabled"` |  |
| `"firstMessageMode"` | This is the mode for the first message. |
| `"hooks"` | This is a set of actions that will be performed on certain events. |
| `"id"` | This is the unique identifier for the personality. |
| `"keypadInputPlan"` |  |
| `"maxDurationSeconds"` | This is the maximum number of seconds that the call will last. |
| `"metadata"` | This is for metadata you want to store on the assistant. |
| `"model"` | These are the options for the assistant's LLM. |
| `"modelOutputInMessagesEnabled"` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `"monitorPlan"` | This is the plan for real-time monitoring of the assistant's calls. |
| `"name"` | This is the name of the assistant. |
| `"observabilityPlan"` | This is the plan for observability of assistant's calls. |
| `"orgId"` | This is the unique identifier for the organization this personality belongs to. |
| `"path"` | Optional folder path for organizing personalities. |
| `"server"` | This is where Vapi will send webhooks. |
| `"serverMessages"` | These are the messages that will be sent to your Server URL. |
| `"startSpeakingPlan"` | This is the plan for when the assistant should start talking. |
| `"stopSpeakingPlan"` | This is the plan for when assistant should stop talking on customer interruption. |
| `"transcriber"` | These are the options for the assistant's transcriber. |
| `"transportConfigurations"` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the personality was last updated. |
| `"voice"` | These are the options for the assistant's voice. |
| `"voicemailDetection"` | These are the settings to configure or disable voicemail detection. |
| `"voicemailMessage"` | This is the message that the assistant will say if the call is forwarded to voicemail. |

Operations: Create, List, Load, Remove, Update.

API path: `/eval/simulation/personality`

#### PhoneNumber

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"metadata"` | Metadata about the pagination. |
| `"results"` | A list of phone numbers, which can be of any provider type. |

Operations: Create, List, Load, Remove, Update.

API path: `/phone-number`

#### Provider

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"metadata"` |  |
| `"results"` |  |

Operations: Create, Load, Remove, Update.

API path: `/provider/{provider}/{resourceName}`

#### Scenario

| Field | Description |
| --- | --- |
| `"createdAt"` | This is the ISO 8601 date-time string of when the scenario was created. |
| `"evaluations"` | This is the structured output-based evaluation plan for the simulation. |
| `"hooks"` | Hooks to run on simulation lifecycle events |
| `"id"` | This is the unique identifier for the scenario. |
| `"instructions"` | This is the script/instructions for the tester to follow during the simulation. |
| `"name"` | This is the name of the scenario. |
| `"orgId"` | This is the unique identifier for the organization this scenario belongs to. |
| `"path"` | Optional folder path for organizing scenarios. |
| `"targetOverrides"` | Overrides to inject into the simulated target assistant or squad |
| `"toolMocks"` | Scenario-level tool call mocks to use during simulations. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the scenario was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/eval/simulation/scenario`

#### Scorecard

| Field | Description |
| --- | --- |
| `"assistantIds"` | These are the assistant IDs that this scorecard is linked to. |
| `"createdAt"` | This is the ISO 8601 date-time string of when the scorecard was created. |
| `"description"` | This is the description of the scorecard. |
| `"id"` | This is the unique identifier for the scorecard. |
| `"metrics"` | These are the metrics that will be used to evaluate the scorecard. |
| `"name"` | This is the name of the scorecard. |
| `"orgId"` | This is the unique identifier for the org that this scorecard belongs to. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the scorecard was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/observability/scorecard`

#### Session

| Field | Description |
| --- | --- |
| `"artifact"` | These are the artifacts that were extracted from the session messages. |
| `"assistant"` | This is the assistant configuration for this session. |
| `"assistantId"` | This is the ID of the assistant associated with this session. |
| `"assistantOverrides"` | These are the overrides for the assistant configuration. |
| `"cost"` | This is the cost of the session in USD. |
| `"costs"` | These are the costs of individual components of the session in USD. |
| `"createdAt"` | This is the ISO 8601 timestamp indicating when the session was created. |
| `"customer"` | This is the customer information associated with this session. |
| `"customerId"` | This is the customerId of the customer associated with this session. |
| `"expirationSeconds"` | Session expiration time in seconds. |
| `"id"` | This is the unique identifier for the session. |
| `"messages"` | This is an array of chat messages in the session. |
| `"name"` | This is a user-defined name for the session. |
| `"orgId"` | This is the unique identifier for the organization that owns this session. |
| `"phoneNumber"` | This is the phone number configuration for this session. |
| `"phoneNumberId"` | This is the ID of the phone number associated with this session. |
| `"squad"` | This is the squad configuration for this session. |
| `"squadId"` | This is the squad ID associated with this session. |
| `"status"` | This is the current status of the session. |
| `"updatedAt"` | This is the ISO 8601 timestamp indicating when the session was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/session`

#### Simulation

| Field | Description |
| --- | --- |
| `"assistantId"` | ID of the assistant to generate scenarios for |
| `"createdAt"` | This is the ISO 8601 date-time string of when the simulation was created. |
| `"id"` | This is the unique identifier for the simulation. |
| `"name"` | This is an optional friendly name for the simulation. |
| `"orgId"` | This is the unique identifier for the organization this simulation belongs to. |
| `"path"` | Optional folder path for organizing simulations. |
| `"personalityId"` | This is the ID of the personality to use for this simulation. |
| `"scenarioId"` | This is the ID of the scenario to use for this simulation. |
| `"squadId"` | ID of the squad to generate scenarios for |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the simulation was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/eval/simulation`

#### SimulationRun

| Field | Description |
| --- | --- |
| `"createdAt"` | ISO 8601 date-time when created |
| `"endedAt"` | When the run ended |
| `"endedReason"` | Reason the run ended |
| `"id"` | Unique identifier for the run |
| `"itemCounts"` | Aggregate counts of run items by status |
| `"iterations"` | Number of times to run each simulation (default: 1) |
| `"orgId"` | Organization ID |
| `"queuedAt"` | When the run was queued |
| `"simulations"` | Array of simulations and/or suites to run |
| `"startedAt"` | When the run started |
| `"status"` | Current status of the run |
| `"target"` | Target to test against |
| `"transport"` | Transport configuration for the simulation runs |
| `"updatedAt"` | ISO 8601 date-time when last updated |

Operations: Load, Update.

API path: `/eval/simulation/run`

#### SimulationRunItem

| Field | Description |
| --- | --- |
| `"callId"` | This is the ID of the target Vapi call (the assistant being tested). |
| `"canceledAt"` | This is the ISO 8601 date-time string of when the run was canceled. |
| `"completedAt"` | This is the ISO 8601 date-time string of when the run completed. |
| `"configurations"` | This is the configuration for how this simulation run executes. |
| `"createdAt"` | This is the ISO 8601 date-time string of when the run item was created. |
| `"failedAt"` | This is the ISO 8601 date-time string of when the run failed. |
| `"failureReason"` | This is the reason for failure. |
| `"hooks"` | Hooks configured for this simulation run item |
| `"id"` | This is the unique identifier for the simulation run item. |
| `"improvementSuggestions"` | This is the AI-generated improvement suggestions for failed runs. |
| `"iterationNumber"` | This is the iteration number (1-indexed) when run with iterations > 1. |
| `"metadata"` | This is the metadata containing snapshots and call data. |
| `"orgId"` | This is the unique identifier for the organization. |
| `"personalityId"` | This is the personality ID at run creation time. |
| `"queuedAt"` | This is the ISO 8601 date-time string of when the run was queued. |
| `"results"` | This is the results of the simulation run. |
| `"runId"` | This is the ID of the parent run (batch/group). |
| `"scenarioId"` | This is the scenario ID at run creation time. |
| `"sessionId"` | This is the session ID for chat-based simulations (webchat transport). |
| `"simulationId"` | This is the ID of the simulation this run belongs to. |
| `"startedAt"` | This is the ISO 8601 date-time string of when the run started. |
| `"status"` | This is the current status of the run. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the run item was last updated. |

Operations: Create, List, Load, Update.

API path: `/eval/simulation/run/{id}/item/{itemId}/generate`

#### SimulationSuite

| Field | Description |
| --- | --- |
| `"createdAt"` | This is the ISO 8601 date-time string of when the suite was created. |
| `"id"` | This is the unique identifier for the simulation suite. |
| `"name"` | This is the name of the simulation suite. |
| `"orgId"` | This is the unique identifier for the organization this suite belongs to. |
| `"path"` | Optional folder path for organizing simulation suites. |
| `"simulationIds"` | This is the list of simulation IDs in this suite. |
| `"slackWebhookUrl"` | This is the Slack webhook URL for notifications. |
| `"targetAssignments"` | This is the ordered list of assistant or squad assignments for the suite. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the suite was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/eval/simulation/suite/{id}/duplicate`

#### Squad

| Field | Description |
| --- | --- |
| `"createdAt"` | This is the ISO 8601 date-time string of when the squad was created. |
| `"id"` | This is the unique identifier for the squad. |
| `"latestVersion"` | This is the latest version label (e.g. |
| `"members"` | This is the list of assistants that make up the squad. |
| `"membersOverrides"` | This can be used to override all the assistants' settings and provide values for their template variables. |
| `"modelDeprecations"` | Read-only. |
| `"name"` | This is the name of the squad. |
| `"orgId"` | This is the unique identifier for the org that this squad belongs to. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the squad was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/squad`

#### StructuredOutput

| Field | Description |
| --- | --- |
| `"assistantIds"` | These are the assistant IDs that this structured output is linked to. |
| `"compliancePlan"` | Compliance configuration for this output. |
| `"conditions"` | These are the conditions that gate the execution of this structured output. |
| `"createdAt"` | This is the ISO 8601 date-time string of when the structured output was created. |
| `"description"` | This is the description of what the structured output extracts. |
| `"id"` | This is the unique identifier for the structured output. |
| `"model"` | This is the model that will be used to extract the structured output. |
| `"name"` | This is the name of the structured output. |
| `"orgId"` | This is the unique identifier for the org that this structured output belongs to. |
| `"regex"` | This is the regex pattern to match against the transcript. |
| `"schema"` | This is the JSON Schema definition for the structured output. |
| `"type"` | This is the type of structured output. |
| `"updatedAt"` | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `"workflowIds"` | These are the workflow IDs that this structured output is linked to. |

Operations: Create, List, Load, Remove, Update.

API path: `/structured-output`

#### Tool

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/tool`



## Entities


### Analytics

Create an instance: `analytics := client.Analytics(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queries` | `[]any` | This is the list of metric queries you want to perform. |

#### Example: Create

```go
result, err := client.Analytics(nil).Create(map[string]any{
    "queries": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Assistant

Create an instance: `assistant := client.Assistant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysisPlan` | `any` | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `any` | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `any` | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `any` | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `[]any` | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `map[string]any` |  |
| `contentType` | `string` | The content-type the URL returned, when a response was received. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `[]any` | These are the credentials that will be used for the assistant calls. |
| `credentials` | `[]any` | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `string` | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `[]any` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `string` | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `bool` |  |
| `firstMessageMode` | `string` | This is the mode for the first message. |
| `hooks` | `[]any` | This is a set of actions that will be performed on certain events. |
| `id` | `string` | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `map[string]any` |  |
| `latestVersion` | `string` | This is the latest version label (e.g. |
| `maxDurationSeconds` | `float64` | This is the maximum number of seconds that the call will last. |
| `metadata` | `map[string]any` | This is for metadata you want to store on the assistant. |
| `model` | `any` | These are the options for the assistant's LLM. |
| `modelDeprecations` | `[]any` | Read-only. |
| `modelOutputInMessagesEnabled` | `bool` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `any` | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `string` | This is the name of the assistant. |
| `observabilityPlan` | `any` | This is the plan for observability of assistant's calls. |
| `orgId` | `string` | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `string` | Why validation failed. |
| `server` | `any` | This is where Vapi will send webhooks. |
| `serverMessages` | `[]any` | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `any` | This is the plan for when the assistant should start talking. |
| `status` | `float64` | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `any` | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `any` | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `[]any` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `string` | This is the background sound URL to validate. |
| `valid` | `bool` | Whether the URL currently serves a live media file. |
| `voice` | `any` | These are the options for the assistant's voice. |
| `voicemailDetection` | `any` | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `string` | This is the message that the assistant will say if the call is forwarded to voicemail. |

#### Example: Load

```go
assistant, err := client.Assistant(nil).Load(map[string]any{"id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistant) // the loaded record
```

#### Example: List

```go
assistants, err := client.Assistant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(assistants) // the array of records
```

#### Example: Create

```go
result, err := client.Assistant(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
    "valid": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Board

Create an instance: `board := client.Board(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `string` | This is the unique identifier for the Board. |
| `items` | `[]any` | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `any` | This is the layout of the Board. |
| `name` | `string` | This is the name of the Board. |
| `orgId` | `string` | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `string` | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `any` | This is the timerange override for the board. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the Board was last updated. |

#### Example: Load

```go
board, err := client.Board(nil).Load(map[string]any{"id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(board) // the loaded record
```

#### Example: List

```go
boards, err := client.Board(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(boards) // the array of records
```

#### Example: Create

```go
result, err := client.Board(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "layout": "example_layout",
    "name": "example_name",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Call

Create an instance: `call := client.Call(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis` | `any` | This is the analysis of the call. |
| `artifact` | `any` | These are the artifacts created from the call. |
| `artifactPlan` | `any` | This is a copy of assistant artifact plan. |
| `assistant` | `any` | This is the assistant that will be used for the call. |
| `assistantId` | `string` | This is the assistant ID that will be used for the call. |
| `assistantOverrides` | `any` | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `assistantVersion` | `string` | This is the assistant version to use for this call. |
| `campaignId` | `string` | This is the campaign ID that the call belongs to. |
| `compliance` | `any` | This is the compliance of the call. |
| `cost` | `float64` | This is the cost of the call in USD. |
| `costBreakdown` | `any` | This is the cost of the call in USD. |
| `costs` | `[]any` | These are the costs of individual components of the call in USD. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `any` | This is the customer that will be called. |
| `customerId` | `string` | This is the customer that will be called. |
| `customers` | `[]any` | This is used to issue batch calls to multiple customers. |
| `destination` | `any` | This is the destination where the call ended up being transferred to. |
| `endedAt` | `string` | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `string` | This is the message that adds more context to the ended reason. |
| `endedReason` | `string` | This is the explanation for how the call ended. |
| `id` | `string` | This is the unique identifier for the call. |
| `messages` | `[]any` |  |
| `monitor` | `any` | This is to real-time monitor the call. |
| `name` | `string` | This is the name of the call. |
| `orgId` | `string` | This is the unique identifier for the org that this call belongs to. |
| `phoneCallProvider` | `string` | This is the provider of the call. |
| `phoneCallProviderId` | `string` | The ID of the call as provided by the phone number service. |
| `phoneCallTransport` | `string` | This is the transport of the phone call. |
| `phoneNumber` | `any` | This is the phone number that will be used for the call. |
| `phoneNumberId` | `string` | This is the phone number that will be used for the call. |
| `schedulePlan` | `any` | This is the schedule plan of the call. |
| `squad` | `any` | This is a squad that will be used for the call. |
| `squadId` | `string` | This is the squad that will be used for the call. |
| `squadOverrides` | `any` | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `squadVersion` | `string` | This is the squad version to use for this call. |
| `startedAt` | `string` | This is the ISO 8601 date-time string of when the call was started. |
| `status` | `string` | This is the status of the call. |
| `transport` | `any` | This is the transport of the call. |
| `type` | `string` | This is the type of call. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the call was last updated. |
| `workflow` | `any` | This is a workflow that will be used for the call. |
| `workflowId` | `string` | This is the workflow that will be used for the call. |
| `workflowOverrides` | `any` | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

#### Example: Load

```go
call, err := client.Call(nil).Load(map[string]any{"id": "call_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(call) // the loaded record
```

#### Example: List

```go
calls, err := client.Call(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(calls) // the array of records
```

#### Example: Create

```go
result, err := client.Call(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Campaign

Create an instance: `campaign := client.Campaign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantId` | `string` | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `any` | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `any` | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `map[string]any` | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `float64` | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `float64` | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `float64` | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `float64` | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `float64` | This is the number of calls that have been scheduled. |
| `contactCounters` | `any` | These are the per-status contact counts for this campaign. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `[]any` | These are the customers that will be called in the campaign. |
| `dialPlan` | `[]any` | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `string` | Optional campaign ID to duplicate config from. |
| `endedReason` | `string` | This is the explanation for how the campaign ended. |
| `id` | `string` | This is the unique identifier for the campaign. |
| `maxConcurrency` | `float64` | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `string` | This is the name of the campaign. |
| `orgId` | `string` | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `string` | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `any` | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `any` | This is the schedule plan for the campaign. |
| `server` | `any` | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `[]any` | These are the messages that will be sent to your Server URL. |
| `squadId` | `string` | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `any` | These are the overrides for the squad and template variables for the campaign. |
| `status` | `string` | This is the status of the campaign. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | `string` | This is the workflow ID that will be used for the campaign calls. |

#### Example: Load

```go
campaign, err := client.Campaign(nil).Load(map[string]any{"id": "campaign_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(campaign) // the loaded record
```

#### Example: List

```go
campaigns, err := client.Campaign(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(campaigns) // the array of records
```

#### Example: Create

```go
result, err := client.Campaign(nil).Create(map[string]any{
    "calls": map[string]any{},
    "callsCounterEnded": 1,
    "callsCounterEndedVoicemail": 1,
    "callsCounterInProgress": 1,
    "callsCounterQueued": 1,
    "callsCounterScheduled": 1,
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "orgId": "example_orgId",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Chat

Create an instance: `chat := client.Chat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistant` | `any` | This is the assistant that will be used for the chat. |
| `assistantId` | `string` | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `any` | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `float64` | This is the cost of the chat in USD. |
| `costs` | `[]any` | These are the costs of individual components of the chat in USD. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `string` | This is the unique identifier for the chat. |
| `input` | `any` | This is the input text for the chat. |
| `messages` | `[]any` | This is an array of messages used as context for the chat. |
| `name` | `string` | This is the name of the chat. |
| `orgId` | `string` | This is the unique identifier for the org that this chat belongs to. |
| `output` | `[]any` | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `string` | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `string` | This is the ID of the session that will be used for the chat. |
| `squad` | `any` | This is the squad that will be used for the chat. |
| `squadId` | `string` | This is the squad that will be used for the chat. |
| `stream` | `bool` | This is a flag that determines whether the response should be streamed. |
| `transport` | `any` | This is used to send the chat through a transport like SMS. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the chat was last updated. |

#### Example: Load

```go
chat, err := client.Chat(nil).Load(map[string]any{"id": "chat_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(chat) // the loaded record
```

#### Example: List

```go
chats, err := client.Chat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(chats) // the array of records
```

#### Example: Create

```go
result, err := client.Chat(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreateSimulationRun

Create an instance: `createSimulationRun := client.CreateSimulationRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `iterations` | `float64` | Number of times to run each simulation (default: 1) |
| `simulations` | `[]any` | Array of simulations and/or suites to run |
| `target` | `any` | Target to test against |
| `transport` | `any` | Transport configuration for the simulation runs |

#### Example: Create

```go
result, err := client.CreateSimulationRun(nil).Create(map[string]any{
    "simulations": []any{},
    "target": "example_target",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Eval

Create an instance: `eval := client.Eval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cost` | `float64` | This is the cost of the eval or suite run in USD. |
| `costs` | `[]any` | This is the break up of costs of the eval or suite run. |
| `createdAt` | `string` |  |
| `description` | `string` | This is the description of the eval. |
| `endedAt` | `string` |  |
| `endedMessage` | `string` | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `string` | This is the reason for the eval run to end. |
| `eval` | `any` | This is the transient eval that will be run |
| `evalId` | `string` | This is the id of the eval that will be run. |
| `id` | `string` |  |
| `messages` | `[]any` | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `string` | This is the name of the eval. |
| `orgId` | `string` |  |
| `results` | `[]any` | This is the results of the eval or suite run. |
| `startedAt` | `string` |  |
| `status` | `string` | This is the status of the eval run. |
| `target` | `any` | This is the target that will be run against the eval |
| `type` | `string` | This is the type of the run. |
| `updatedAt` | `string` |  |

#### Example: Load

```go
eval, err := client.Eval(nil).Load(map[string]any{"id": "eval_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(eval) // the loaded record
```

#### Example: List

```go
evals, err := client.Eval(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(evals) // the array of records
```

#### Example: Create

```go
result, err := client.Eval(nil).Create(map[string]any{
    "cost": 1,
    "costs": []any{},
    "createdAt": "example_createdAt",
    "endedAt": "example_endedAt",
    "endedReason": "example_endedReason",
    "id": "example_id",
    "messages": []any{},
    "orgId": "example_orgId",
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
    "target": "example_target",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### File

Create an instance: `file := client.File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bucket` | `string` |  |
| `bytes` | `float64` |  |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `string` | This is the unique identifier for the file. |
| `key` | `string` |  |
| `metadata` | `map[string]any` |  |
| `mimetype` | `string` |  |
| `name` | `string` | This is the name of the file. |
| `object` | `string` |  |
| `orgId` | `string` | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `string` |  |
| `parsedTextBytes` | `float64` |  |
| `parsedTextUrl` | `string` |  |
| `path` | `string` |  |
| `purpose` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `string` |  |

#### Example: Load

```go
file, err := client.File(nil).Load(map[string]any{"id": "file_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(file) // the loaded record
```

#### Example: List

```go
files, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(files) // the array of records
```

#### Example: Create

```go
result, err := client.File(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Insight

Create an instance: `insight := client.Insight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the Insight was created. |
| `id` | `string` | This is the unique identifier for the Insight. |
| `name` | `string` | This is the name of the Insight. |
| `orgId` | `string` | This is the unique identifier for the org that this Insight belongs to. |
| `systemKey` | `string` | Stable server-owned identifier for system-created insights. |
| `type` | `string` | This is the type of the Insight. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the Insight was last updated. |

#### Example: Load

```go
insight, err := client.Insight(nil).Load(map[string]any{"id": "insight_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(insight) // the loaded record
```

#### Example: List

```go
insights, err := client.Insight(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(insights) // the array of records
```

#### Example: Create

```go
result, err := client.Insight(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### KnowledgeBase

Create an instance: `knowledgeBase := client.KnowledgeBase(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `files` | `[]any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `orgId` | `string` |  |
| `toolId` | `string` | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` | `string` |  |

#### Example: Load

```go
knowledgeBase, err := client.KnowledgeBase(nil).Load(map[string]any{"id": "knowledge_base_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(knowledgeBase) // the loaded record
```

#### Example: List

```go
knowledgeBases, err := client.KnowledgeBase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(knowledgeBases) // the array of records
```

#### Example: Create

```go
result, err := client.KnowledgeBase(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "files": []any{},
    "id": "example_id",
    "name": "example_name",
    "orgId": "example_orgId",
    "toolId": "example_toolId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### KnowledgeBaseV2File

Create an instance: `knowledgeBaseV2File := client.KnowledgeBaseV2File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bytes` | `float64` |  |
| `createdAt` | `string` |  |
| `fileId` | `string` |  |
| `fileName` | `string` |  |
| `id` | `string` |  |
| `knowledgeBaseV2Id` | `string` |  |
| `mimetype` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: List

```go
knowledgeBaseV2Files, err := client.KnowledgeBaseV2File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(knowledgeBaseV2Files) // the array of records
```

#### Example: Create

```go
result, err := client.KnowledgeBaseV2File(nil).Create(map[string]any{
    "id": "example_id",
    "createdAt": "example_createdAt",
    "fileId": "example_fileId",
    "knowledgeBaseV2Id": "example_knowledgeBaseV2Id",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Personality

Create an instance: `personality := client.Personality(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysisPlan` | `any` | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `any` | This is the plan for artifacts generated during assistant's calls. |
| `assistant` | `any` | This is the full assistant configuration for this personality. |
| `backgroundSound` | `any` | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `any` | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `[]any` | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `map[string]any` |  |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the personality was created. |
| `credentialIds` | `[]any` | These are the credentials that will be used for the assistant calls. |
| `credentials` | `[]any` | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `string` | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `[]any` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `string` | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `bool` |  |
| `firstMessageMode` | `string` | This is the mode for the first message. |
| `hooks` | `[]any` | This is a set of actions that will be performed on certain events. |
| `id` | `string` | This is the unique identifier for the personality. |
| `keypadInputPlan` | `map[string]any` |  |
| `maxDurationSeconds` | `float64` | This is the maximum number of seconds that the call will last. |
| `metadata` | `map[string]any` | This is for metadata you want to store on the assistant. |
| `model` | `any` | These are the options for the assistant's LLM. |
| `modelOutputInMessagesEnabled` | `bool` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `any` | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `string` | This is the name of the assistant. |
| `observabilityPlan` | `any` | This is the plan for observability of assistant's calls. |
| `orgId` | `string` | This is the unique identifier for the organization this personality belongs to. |
| `path` | `string` | Optional folder path for organizing personalities. |
| `server` | `any` | This is where Vapi will send webhooks. |
| `serverMessages` | `[]any` | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `any` | This is the plan for when the assistant should start talking. |
| `stopSpeakingPlan` | `any` | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `any` | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `[]any` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the personality was last updated. |
| `voice` | `any` | These are the options for the assistant's voice. |
| `voicemailDetection` | `any` | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `string` | This is the message that the assistant will say if the call is forwarded to voicemail. |

#### Example: Load

```go
personality, err := client.Personality(nil).Load(map[string]any{"id": "personality_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(personality) // the loaded record
```

#### Example: List

```go
personalitys, err := client.Personality(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(personalitys) // the array of records
```

#### Example: Create

```go
result, err := client.Personality(nil).Create(map[string]any{
    "assistant": "example_assistant",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PhoneNumber

Create an instance: `phoneNumber := client.PhoneNumber(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `metadata` | `any` | Metadata about the pagination. |
| `results` | `[]any` | A list of phone numbers, which can be of any provider type. |

#### Example: Load

```go
phoneNumber, err := client.PhoneNumber(nil).Load(map[string]any{"id": "phone_number_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(phoneNumber) // the loaded record
```

#### Example: List

```go
phoneNumbers, err := client.PhoneNumber(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(phoneNumbers) // the array of records
```

#### Example: Create

```go
result, err := client.PhoneNumber(nil).Create(map[string]any{
    "metadata": "example_metadata",
    "results": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Provider

Create an instance: `provider := client.Provider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `metadata` | `map[string]any` |  |
| `results` | `[]any` |  |

#### Example: Load

```go
provider, err := client.Provider(nil).Load(map[string]any{"id": "provider_id", "provider": "provider", "resource_name": "resource_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(provider) // the loaded record
```

#### Example: Create

```go
result, err := client.Provider(nil).Create(map[string]any{
    "provider": "example_provider",
    "resource_name": "example_resource_name",
    "metadata": map[string]any{},
    "results": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Scenario

Create an instance: `scenario := client.Scenario(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `[]any` | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `[]any` | Hooks to run on simulation lifecycle events |
| `id` | `string` | This is the unique identifier for the scenario. |
| `instructions` | `string` | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `string` | This is the name of the scenario. |
| `orgId` | `string` | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `string` | Optional folder path for organizing scenarios. |
| `targetOverrides` | `any` | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `[]any` | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the scenario was last updated. |

#### Example: Load

```go
scenario, err := client.Scenario(nil).Load(map[string]any{"id": "scenario_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scenario) // the loaded record
```

#### Example: List

```go
scenarios, err := client.Scenario(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(scenarios) // the array of records
```

#### Example: Create

```go
result, err := client.Scenario(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "evaluations": []any{},
    "id": "example_id",
    "instructions": "example_instructions",
    "name": "example_name",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Scorecard

Create an instance: `scorecard := client.Scorecard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantIds` | `[]any` | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `string` | This is the description of the scorecard. |
| `id` | `string` | This is the unique identifier for the scorecard. |
| `metrics` | `[]any` | These are the metrics that will be used to evaluate the scorecard. |
| `name` | `string` | This is the name of the scorecard. |
| `orgId` | `string` | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the scorecard was last updated. |

#### Example: Load

```go
scorecard, err := client.Scorecard(nil).Load(map[string]any{"id": "scorecard_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scorecard) // the loaded record
```

#### Example: List

```go
scorecards, err := client.Scorecard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(scorecards) // the array of records
```

#### Example: Create

```go
result, err := client.Scorecard(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "metrics": []any{},
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Session

Create an instance: `session := client.Session(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifact` | `any` | These are the artifacts that were extracted from the session messages. |
| `assistant` | `any` | This is the assistant configuration for this session. |
| `assistantId` | `string` | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `any` | These are the overrides for the assistant configuration. |
| `cost` | `float64` | This is the cost of the session in USD. |
| `costs` | `[]any` | These are the costs of individual components of the session in USD. |
| `createdAt` | `string` | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `any` | This is the customer information associated with this session. |
| `customerId` | `string` | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `float64` | Session expiration time in seconds. |
| `id` | `string` | This is the unique identifier for the session. |
| `messages` | `[]any` | This is an array of chat messages in the session. |
| `name` | `string` | This is a user-defined name for the session. |
| `orgId` | `string` | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `any` | This is the phone number configuration for this session. |
| `phoneNumberId` | `string` | This is the ID of the phone number associated with this session. |
| `squad` | `any` | This is the squad configuration for this session. |
| `squadId` | `string` | This is the squad ID associated with this session. |
| `status` | `string` | This is the current status of the session. |
| `updatedAt` | `string` | This is the ISO 8601 timestamp indicating when the session was last updated. |

#### Example: Load

```go
session, err := client.Session(nil).Load(map[string]any{"id": "session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(session) // the loaded record
```

#### Example: List

```go
sessions, err := client.Session(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sessions) // the array of records
```

#### Example: Create

```go
result, err := client.Session(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Simulation

Create an instance: `simulation := client.Simulation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantId` | `string` | ID of the assistant to generate scenarios for |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the simulation was created. |
| `id` | `string` | This is the unique identifier for the simulation. |
| `name` | `string` | This is an optional friendly name for the simulation. |
| `orgId` | `string` | This is the unique identifier for the organization this simulation belongs to. |
| `path` | `string` | Optional folder path for organizing simulations. |
| `personalityId` | `string` | This is the ID of the personality to use for this simulation. |
| `scenarioId` | `string` | This is the ID of the scenario to use for this simulation. |
| `squadId` | `string` | ID of the squad to generate scenarios for |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the simulation was last updated. |

#### Example: Load

```go
simulation, err := client.Simulation(nil).Load(map[string]any{"id": "simulation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(simulation) // the loaded record
```

#### Example: List

```go
simulations, err := client.Simulation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(simulations) // the array of records
```

#### Example: Create

```go
result, err := client.Simulation(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "personalityId": "example_personalityId",
    "scenarioId": "example_scenarioId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SimulationRun

Create an instance: `simulationRun := client.SimulationRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | ISO 8601 date-time when created |
| `endedAt` | `string` | When the run ended |
| `endedReason` | `string` | Reason the run ended |
| `id` | `string` | Unique identifier for the run |
| `itemCounts` | `any` | Aggregate counts of run items by status |
| `iterations` | `float64` | Number of times to run each simulation (default: 1) |
| `orgId` | `string` | Organization ID |
| `queuedAt` | `string` | When the run was queued |
| `simulations` | `[]any` | Array of simulations and/or suites to run |
| `startedAt` | `string` | When the run started |
| `status` | `string` | Current status of the run |
| `target` | `any` | Target to test against |
| `transport` | `any` | Transport configuration for the simulation runs |
| `updatedAt` | `string` | ISO 8601 date-time when last updated |

#### Example: Load

```go
simulationRun, err := client.SimulationRun(nil).Load(map[string]any{"id": "simulation_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(simulationRun) // the loaded record
```


### SimulationRunItem

Create an instance: `simulationRunItem := client.SimulationRunItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `callId` | `string` | This is the ID of the target Vapi call (the assistant being tested). |
| `canceledAt` | `string` | This is the ISO 8601 date-time string of when the run was canceled. |
| `completedAt` | `string` | This is the ISO 8601 date-time string of when the run completed. |
| `configurations` | `any` | This is the configuration for how this simulation run executes. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the run item was created. |
| `failedAt` | `string` | This is the ISO 8601 date-time string of when the run failed. |
| `failureReason` | `string` | This is the reason for failure. |
| `hooks` | `[]any` | Hooks configured for this simulation run item |
| `id` | `string` | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `any` | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `float64` | This is the iteration number (1-indexed) when run with iterations > 1. |
| `metadata` | `any` | This is the metadata containing snapshots and call data. |
| `orgId` | `string` | This is the unique identifier for the organization. |
| `personalityId` | `string` | This is the personality ID at run creation time. |
| `queuedAt` | `string` | This is the ISO 8601 date-time string of when the run was queued. |
| `results` | `any` | This is the results of the simulation run. |
| `runId` | `string` | This is the ID of the parent run (batch/group). |
| `scenarioId` | `string` | This is the scenario ID at run creation time. |
| `sessionId` | `string` | This is the session ID for chat-based simulations (webchat transport). |
| `simulationId` | `string` | This is the ID of the simulation this run belongs to. |
| `startedAt` | `string` | This is the ISO 8601 date-time string of when the run started. |
| `status` | `string` | This is the current status of the run. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the run item was last updated. |

#### Example: Load

```go
simulationRunItem, err := client.SimulationRunItem(nil).Load(map[string]any{"id": "simulation_run_item_id", "run_id": "run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(simulationRunItem) // the loaded record
```

#### Example: List

```go
simulationRunItems, err := client.SimulationRunItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(simulationRunItems) // the array of records
```

#### Example: Create

```go
result, err := client.SimulationRunItem(nil).Create(map[string]any{
    "item_id": "example_item_id",
    "run_id": "example_run_id",
    "force": "example_force",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "queuedAt": "example_queuedAt",
    "simulationId": "example_simulationId",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SimulationSuite

Create an instance: `simulationSuite := client.SimulationSuite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `string` | This is the unique identifier for the simulation suite. |
| `name` | `string` | This is the name of the simulation suite. |
| `orgId` | `string` | This is the unique identifier for the organization this suite belongs to. |
| `path` | `string` | Optional folder path for organizing simulation suites. |
| `simulationIds` | `[]any` | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `string` | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `[]any` | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the suite was last updated. |

#### Example: Load

```go
simulationSuite, err := client.SimulationSuite(nil).Load(map[string]any{"id": "simulation_suite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(simulationSuite) // the loaded record
```

#### Example: List

```go
simulationSuites, err := client.SimulationSuite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(simulationSuites) // the array of records
```

#### Example: Create

```go
result, err := client.SimulationSuite(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "orgId": "example_orgId",
    "simulationIds": []any{},
    "targetAssignments": []any{},
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Squad

Create an instance: `squad := client.Squad(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `string` | This is the unique identifier for the squad. |
| `latestVersion` | `string` | This is the latest version label (e.g. |
| `members` | `[]any` | This is the list of assistants that make up the squad. |
| `membersOverrides` | `any` | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `[]any` | Read-only. |
| `name` | `string` | This is the name of the squad. |
| `orgId` | `string` | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the squad was last updated. |

#### Example: Load

```go
squad, err := client.Squad(nil).Load(map[string]any{"id": "squad_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(squad) // the loaded record
```

#### Example: List

```go
squads, err := client.Squad(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(squads) // the array of records
```

#### Example: Create

```go
result, err := client.Squad(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "members": []any{},
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### StructuredOutput

Create an instance: `structuredOutput := client.StructuredOutput(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantIds` | `[]any` | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `any` | Compliance configuration for this output. |
| `conditions` | `[]any` | These are the conditions that gate the execution of this structured output. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the structured output was created. |
| `description` | `string` | This is the description of what the structured output extracts. |
| `id` | `string` | This is the unique identifier for the structured output. |
| `model` | `any` | This is the model that will be used to extract the structured output. |
| `name` | `string` | This is the name of the structured output. |
| `orgId` | `string` | This is the unique identifier for the org that this structured output belongs to. |
| `regex` | `string` | This is the regex pattern to match against the transcript. |
| `schema` | `any` | This is the JSON Schema definition for the structured output. |
| `type` | `string` | This is the type of structured output. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `workflowIds` | `[]any` | These are the workflow IDs that this structured output is linked to. |

#### Example: Load

```go
structuredOutput, err := client.StructuredOutput(nil).Load(map[string]any{"id": "structured_output_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(structuredOutput) // the loaded record
```

#### Example: List

```go
structuredOutputs, err := client.StructuredOutput(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(structuredOutputs) // the array of records
```

#### Example: Create

```go
result, err := client.StructuredOutput(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "orgId": "example_orgId",
    "schema": "example_schema",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Tool

Create an instance: `tool := client.Tool(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
tool, err := client.Tool(nil).Load(map[string]any{"id": "tool_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tool) // the loaded record
```

#### Example: List

```go
tools, err := client.Tool(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tools) // the array of records
```

#### Example: Create

```go
result, err := client.Tool(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

66 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `assistant` | `hooks` | 23 | 27 levels |
| `assistant` | `model` | 23 | 51 levels |
| `call` | `assistant` | 23 | 55 levels |
| `call` | `assistantOverrides` | 23 | 42 levels |
| `call` | `customer` | 23 | 41 levels |
| `call` | `customers` | 23 | 40 levels |
| `call` | `squad` | 23 | 49 levels |
| `call` | `squadOverrides` | 23 | 42 levels |
| `call` | `workflow` | 23 | 34 levels |
| `campaign` | `assistantOverrides` | 23 | 37 levels |
| `campaign` | `customers` | 23 | 40 levels |
| `campaign` | `dialPlan` | 23 | 43 levels |
| `campaign` | `squadOverrides` | 23 | 37 levels |
| `chat` | `assistant` | 23 | 53 levels |
| `chat` | `assistantOverrides` | 23 | 37 levels |
| `chat` | `squad` | 23 | 49 levels |
| `chat` | `transport` | 23 | 45 levels |
| `create_simulation_run` | `simulations` | 23 | 60 levels |
| `create_simulation_run` | `target` | 23 | 59 levels |
| `eval` | `target` | 23 | 57 levels |
| `personality` | `assistant` | 23 | 55 levels |
| `personality` | `hooks` | 23 | 27 levels |
| `personality` | `model` | 23 | 51 levels |
| `scenario` | `targetOverrides` | 23 | 42 levels |
| `session` | `assistant` | 23 | 53 levels |
| `session` | `assistantOverrides` | 23 | 37 levels |
| `session` | `customer` | 23 | 41 levels |
| `session` | `squad` | 23 | 49 levels |
| `simulation_run` | `simulations` | 23 | 60 levels |
| `simulation_run` | `target` | 23 | 59 levels |
| `squad` | `members` | 23 | 45 levels |
| `squad` | `membersOverrides` | 23 | 42 levels |
| `assistant` | `compliancePlan` | 20 | 28 levels |
| `assistant` | `voice` | 20 | 22 levels |
| `personality` | `compliancePlan` | 20 | 28 levels |
| `personality` | `voice` | 20 | 22 levels |
| `assistant` | `transcriber` | 14 | 18 levels |
| `personality` | `transcriber` | 14 | 18 levels |
| `call` | `costs` | 8 | 1 level |
| `call` | `transport` | 6 | 0 levels |
| `eval` | `eval` | 6 | 13 levels |
| `eval` | `messages` | 6 | 9 levels |
| `assistant` | `artifactPlan` | 5 | 11 levels |
| `assistant` | `voicemailDetection` | 5 | 0 levels |
| `call` | `artifact` | 5 | 19 levels |
| `call` | `artifactPlan` | 5 | 11 levels |
| `call` | `messages` | 5 | 1 level |
| `chat` | `input` | 5 | 3 levels |
| `chat` | `messages` | 5 | 1 level |
| `chat` | `output` | 5 | 1 level |
| `personality` | `artifactPlan` | 5 | 11 levels |
| `personality` | `voicemailDetection` | 5 | 0 levels |
| `phone_number` | `results` | 5 | 27 levels |
| `scenario` | `evaluations` | 5 | 8 levels |
| `session` | `artifact` | 5 | 19 levels |
| `session` | `messages` | 5 | 1 level |
| `structured_output` | `model` | 5 | 0 levels |
| `eval` | `results` | 4 | 4 levels |
| `assistant` | `startSpeakingPlan` | 3 | 5 levels |
| `call` | `destination` | 3 | 12 levels |
| `call` | `phoneNumber` | 3 | 26 levels |
| `personality` | `startSpeakingPlan` | 3 | 5 levels |
| `session` | `costs` | 3 | 1 level |
| `session` | `phoneNumber` | 3 | 26 levels |
| `simulation_run_item` | `results` | 3 | 7 levels |
| `structured_output` | `conditions` | 3 | 1 level |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/vapi-sdk/go/
├── vapi.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/vapi-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
scenario := client.Scenario(nil)
scenario.List(nil, nil)

// scenario.Data() now returns the scenario data from the last list
// scenario.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
