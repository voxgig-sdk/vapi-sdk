# Vapi Golang SDK Reference

Complete API reference for the Vapi Golang SDK.


## VapiSDK

### Constructor

```go
func NewVapiSDK(options map[string]any) *VapiSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *VapiSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *VapiSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Analytics(data map[string]any) VapiEntity`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Assistant(data map[string]any) VapiEntity`

Create a new `Assistant` entity instance. Pass `nil` for no initial data.

#### `Board(data map[string]any) VapiEntity`

Create a new `Board` entity instance. Pass `nil` for no initial data.

#### `Call(data map[string]any) VapiEntity`

Create a new `Call` entity instance. Pass `nil` for no initial data.

#### `Campaign(data map[string]any) VapiEntity`

Create a new `Campaign` entity instance. Pass `nil` for no initial data.

#### `Chat(data map[string]any) VapiEntity`

Create a new `Chat` entity instance. Pass `nil` for no initial data.

#### `Eval(data map[string]any) VapiEntity`

Create a new `Eval` entity instance. Pass `nil` for no initial data.

#### `File(data map[string]any) VapiEntity`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Insight(data map[string]any) VapiEntity`

Create a new `Insight` entity instance. Pass `nil` for no initial data.

#### `KnowledgeBase(data map[string]any) VapiEntity`

Create a new `KnowledgeBase` entity instance. Pass `nil` for no initial data.

#### `KnowledgeBaseV2File(data map[string]any) VapiEntity`

Create a new `KnowledgeBaseV2File` entity instance. Pass `nil` for no initial data.

#### `Personality(data map[string]any) VapiEntity`

Create a new `Personality` entity instance. Pass `nil` for no initial data.

#### `PhoneNumber(data map[string]any) VapiEntity`

Create a new `PhoneNumber` entity instance. Pass `nil` for no initial data.

#### `Provider(data map[string]any) VapiEntity`

Create a new `Provider` entity instance. Pass `nil` for no initial data.

#### `Scenario(data map[string]any) VapiEntity`

Create a new `Scenario` entity instance. Pass `nil` for no initial data.

#### `Scorecard(data map[string]any) VapiEntity`

Create a new `Scorecard` entity instance. Pass `nil` for no initial data.

#### `Session(data map[string]any) VapiEntity`

Create a new `Session` entity instance. Pass `nil` for no initial data.

#### `Simulation(data map[string]any) VapiEntity`

Create a new `Simulation` entity instance. Pass `nil` for no initial data.

#### `SimulationRun(data map[string]any) VapiEntity`

Create a new `SimulationRun` entity instance. Pass `nil` for no initial data.

#### `SimulationRunItem(data map[string]any) VapiEntity`

Create a new `SimulationRunItem` entity instance. Pass `nil` for no initial data.

#### `SimulationSuite(data map[string]any) VapiEntity`

Create a new `SimulationSuite` entity instance. Pass `nil` for no initial data.

#### `Squad(data map[string]any) VapiEntity`

Create a new `Squad` entity instance. Pass `nil` for no initial data.

#### `StructuredOutput(data map[string]any) VapiEntity`

Create a new `StructuredOutput` entity instance. Pass `nil` for no initial data.

#### `Tool(data map[string]any) VapiEntity`

Create a new `Tool` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AnalyticsEntity

```go
analytics := client.Analytics(nil)
fmt.Println(analytics.GetName()) // "analytics"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queries` | `[]any` | Yes | This is the list of metric queries you want to perform. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Analytics(nil).Create(map[string]any{
    "queries": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssistantEntity

```go
assistant := client.Assistant(nil)
fmt.Println(assistant.GetName()) // "assistant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisPlan` | `any` | No | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `any` | No | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `any` | No | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `any` | No | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `[]any` | No | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `map[string]any` | No |  |
| `contentType` | `string` | No | The content-type the URL returned, when a response was received. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `[]any` | No | These are the credentials that will be used for the assistant calls. |
| `credentials` | `[]any` | No | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `string` | No | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `[]any` | No | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `string` | No | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `bool` | No |  |
| `firstMessageMode` | `string` | No | This is the mode for the first message. |
| `hooks` | `[]any` | No | This is a set of actions that will be performed on certain events. |
| `id` | `string` | Yes | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `map[string]any` | No |  |
| `latestVersion` | `string` | No | This is the latest version label (e.g. |
| `maxDurationSeconds` | `float64` | No | This is the maximum number of seconds that the call will last. |
| `metadata` | `map[string]any` | No | This is for metadata you want to store on the assistant. |
| `model` | `any` | No | These are the options for the assistant's LLM. |
| `modelDeprecations` | `[]any` | No | Read-only. |
| `modelOutputInMessagesEnabled` | `bool` | No | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `any` | No | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `string` | No | This is the name of the assistant. |
| `observabilityPlan` | `any` | No | This is the plan for observability of assistant's calls. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `string` | No | Why validation failed. |
| `server` | `any` | No | This is where Vapi will send webhooks. |
| `serverMessages` | `[]any` | No | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `any` | No | This is the plan for when the assistant should start talking. |
| `status` | `float64` | No | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `any` | No | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `any` | No | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `[]any` | No | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `string` | Yes | This is the background sound URL to validate. |
| `valid` | `bool` | Yes | Whether the URL currently serves a live media file. |
| `voice` | `any` | No | These are the options for the assistant's voice. |
| `voicemailDetection` | `any` | No | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `string` | No | This is the message that the assistant will say if the call is forwarded to voicemail. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Assistant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Assistant(nil).Load(map[string]any{"id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Assistant(nil).Update(map[string]any{
    "id": "assistant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Assistant(nil).Remove(map[string]any{"id": "assistant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssistantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BoardEntity

```go
board := client.Board(nil)
fmt.Println(board.GetName()) // "board"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `string` | Yes | This is the unique identifier for the Board. |
| `items` | `[]any` | No | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `any` | Yes | This is the layout of the Board. |
| `name` | `string` | Yes | This is the name of the Board. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `string` | No | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `any` | No | This is the timerange override for the board. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the Board was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `createdAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `items` | - | - | - | - | - |
| `layout` | - | - | - | Yes | - |
| `name` | - | - | - | Yes | - |
| `orgId` | - | - | - | - | - |
| `systemKey` | - | - | - | - | - |
| `timeRangeOverride` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Board(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Board(nil).Load(map[string]any{"id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Board(nil).Update(map[string]any{
    "id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Board(nil).Remove(map[string]any{"id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BoardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CallEntity

```go
call := client.Call(nil)
fmt.Println(call.GetName()) // "call"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis` | `any` | No | This is the analysis of the call. |
| `artifact` | `any` | No | These are the artifacts created from the call. |
| `artifactPlan` | `any` | No | This is a copy of assistant artifact plan. |
| `assistant` | `any` | No | This is the assistant that will be used for the call. |
| `assistantId` | `string` | No | This is the assistant ID that will be used for the call. |
| `assistantOverrides` | `any` | No | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `assistantVersion` | `string` | No | This is the assistant version to use for this call. |
| `campaignId` | `string` | No | This is the campaign ID that the call belongs to. |
| `compliance` | `any` | No | This is the compliance of the call. |
| `cost` | `float64` | No | This is the cost of the call in USD. |
| `costBreakdown` | `any` | No | This is the cost of the call in USD. |
| `costs` | `[]any` | No | These are the costs of individual components of the call in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `any` | No | This is the customer that will be called. |
| `customerId` | `string` | No | This is the customer that will be called. |
| `customers` | `[]any` | No | This is used to issue batch calls to multiple customers. |
| `destination` | `any` | No | This is the destination where the call ended up being transferred to. |
| `endedAt` | `string` | No | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `string` | No | This is the message that adds more context to the ended reason. |
| `endedReason` | `string` | No | This is the explanation for how the call ended. |
| `id` | `string` | Yes | This is the unique identifier for the call. |
| `messages` | `[]any` | No |  |
| `monitor` | `any` | No | This is to real-time monitor the call. |
| `name` | `string` | No | This is the name of the call. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this call belongs to. |
| `phoneCallProvider` | `string` | No | This is the provider of the call. |
| `phoneCallProviderId` | `string` | No | The ID of the call as provided by the phone number service. |
| `phoneCallTransport` | `string` | No | This is the transport of the phone call. |
| `phoneNumber` | `any` | No | This is the phone number that will be used for the call. |
| `phoneNumberId` | `string` | No | This is the phone number that will be used for the call. |
| `schedulePlan` | `any` | No | This is the schedule plan of the call. |
| `squad` | `any` | No | This is a squad that will be used for the call. |
| `squadId` | `string` | No | This is the squad that will be used for the call. |
| `squadOverrides` | `any` | No | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `squadVersion` | `string` | No | This is the squad version to use for this call. |
| `startedAt` | `string` | No | This is the ISO 8601 date-time string of when the call was started. |
| `status` | `string` | No | This is the status of the call. |
| `transport` | `any` | No | This is the transport of the call. |
| `type` | `string` | No | This is the type of call. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the call was last updated. |
| `workflow` | `any` | No | This is a workflow that will be used for the call. |
| `workflowId` | `string` | No | This is the workflow that will be used for the call. |
| `workflowOverrides` | `any` | No | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Call(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Call(nil).Load(map[string]any{"id": "call_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Call(nil).Update(map[string]any{
    "id": "call_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Call(nil).Remove(map[string]any{"id": "call_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CampaignEntity

```go
campaign := client.Campaign(nil)
fmt.Println(campaign.GetName()) // "campaign"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantId` | `string` | No | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `any` | No | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `any` | No | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `map[string]any` | Yes | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `float64` | Yes | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `float64` | Yes | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `float64` | Yes | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `float64` | Yes | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `float64` | Yes | This is the number of calls that have been scheduled. |
| `contactCounters` | `any` | No | These are the per-status contact counts for this campaign. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `[]any` | No | These are the customers that will be called in the campaign. |
| `dialPlan` | `[]any` | No | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `string` | No | Optional campaign ID to duplicate config from. |
| `endedReason` | `string` | No | This is the explanation for how the campaign ended. |
| `id` | `string` | Yes | This is the unique identifier for the campaign. |
| `maxConcurrency` | `float64` | No | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `string` | Yes | This is the name of the campaign. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `string` | No | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `any` | No | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `any` | No | This is the schedule plan for the campaign. |
| `server` | `any` | No | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `[]any` | No | These are the messages that will be sent to your Server URL. |
| `squadId` | `string` | No | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `any` | No | These are the overrides for the squad and template variables for the campaign. |
| `status` | `string` | Yes | This is the status of the campaign. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | `string` | No | This is the workflow ID that will be used for the campaign calls. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assistantId` | - | - | - | - | - |
| `assistantOverrides` | - | - | - | - | - |
| `callMetrics` | - | - | - | - | - |
| `calls` | - | - | - | - | - |
| `callsCounterEnded` | - | - | - | - | - |
| `callsCounterEndedVoicemail` | - | - | - | - | - |
| `callsCounterInProgress` | - | - | - | - | - |
| `callsCounterQueued` | - | - | - | - | - |
| `callsCounterScheduled` | - | - | - | - | - |
| `contactCounters` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `customers` | - | - | - | - | - |
| `dialPlan` | - | - | - | - | - |
| `duplicateFromCampaignId` | - | - | - | - | - |
| `endedReason` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `maxConcurrency` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `orgId` | - | - | - | - | - |
| `phoneNumberId` | - | - | - | - | - |
| `predialPlan` | - | - | - | - | - |
| `schedulePlan` | - | - | - | - | - |
| `server` | - | - | - | - | - |
| `serverMessages` | - | - | - | - | - |
| `squadId` | - | - | - | - | - |
| `squadOverrides` | - | - | - | - | - |
| `status` | - | - | - | Yes | - |
| `updatedAt` | - | - | - | - | - |
| `workflowId` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Campaign(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Campaign(nil).Load(map[string]any{"id": "campaign_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Campaign(nil).Update(map[string]any{
    "id": "campaign_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Campaign(nil).Remove(map[string]any{"id": "campaign_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChatEntity

```go
chat := client.Chat(nil)
fmt.Println(chat.GetName()) // "chat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `any` | No | This is the assistant that will be used for the chat. |
| `assistantId` | `string` | No | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `any` | No | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `float64` | No | This is the cost of the chat in USD. |
| `costs` | `[]any` | No | These are the costs of individual components of the chat in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `string` | Yes | This is the unique identifier for the chat. |
| `input` | `any` | No | This is the input text for the chat. |
| `messages` | `[]any` | No | This is an array of messages used as context for the chat. |
| `name` | `string` | No | This is the name of the chat. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this chat belongs to. |
| `output` | `[]any` | No | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `string` | No | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `string` | No | This is the ID of the session that will be used for the chat. |
| `squad` | `any` | No | This is the squad that will be used for the chat. |
| `squadId` | `string` | No | This is the squad that will be used for the chat. |
| `stream` | `bool` | No | This is a flag that determines whether the response should be streamed. |
| `transport` | `any` | No | This is used to send the chat through a transport like SMS. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the chat was last updated. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `assistant` | - | - | - | - |
| `assistantId` | - | - | - | - |
| `assistantOverrides` | - | - | - | - |
| `cost` | - | - | - | - |
| `costs` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `id` | - | - | - | - |
| `input` | - | - | Yes | - |
| `messages` | - | - | - | - |
| `name` | - | - | - | - |
| `orgId` | - | - | - | - |
| `output` | - | - | - | - |
| `previousChatId` | - | - | - | - |
| `sessionId` | - | - | - | - |
| `squad` | - | - | - | - |
| `squadId` | - | - | - | - |
| `stream` | - | - | - | - |
| `transport` | - | - | - | - |
| `updatedAt` | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Chat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Chat(nil).Load(map[string]any{"id": "chat_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Chat(nil).Remove(map[string]any{"id": "chat_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EvalEntity

```go
eval := client.Eval(nil)
fmt.Println(eval.GetName()) // "eval"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `float64` | Yes | This is the cost of the eval or suite run in USD. |
| `costs` | `[]any` | Yes | This is the break up of costs of the eval or suite run. |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No | This is the description of the eval. |
| `endedAt` | `string` | Yes |  |
| `endedMessage` | `string` | No | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `string` | Yes | This is the reason for the eval run to end. |
| `eval` | `any` | No | This is the transient eval that will be run |
| `evalId` | `string` | No | This is the id of the eval that will be run. |
| `id` | `string` | Yes |  |
| `messages` | `[]any` | Yes | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `string` | No | This is the name of the eval. |
| `orgId` | `string` | Yes |  |
| `results` | `[]any` | Yes | This is the results of the eval or suite run. |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes | This is the status of the eval run. |
| `target` | `any` | Yes | This is the target that will be run against the eval |
| `type` | `string` | Yes | This is the type of the run. |
| `updatedAt` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `cost` | - | - | - | - | - |
| `costs` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `endedAt` | - | - | - | - | - |
| `endedMessage` | - | - | - | - | - |
| `endedReason` | - | - | - | - | - |
| `eval` | - | - | - | - | - |
| `evalId` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | Yes | - |
| `name` | - | - | - | - | - |
| `orgId` | - | - | - | - | - |
| `results` | - | - | - | - | - |
| `startedAt` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `target` | - | - | - | - | - |
| `type` | - | - | - | Yes | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Eval(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Eval(nil).Load(map[string]any{"id": "eval_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Eval(nil).Update(map[string]any{
    "id": "eval_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Eval(nil).Remove(map[string]any{"id": "eval_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EvalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileEntity

```go
file := client.File(nil)
fmt.Println(file.GetName()) // "file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `string` | No |  |
| `bytes` | `float64` | No |  |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `string` | Yes | This is the unique identifier for the file. |
| `key` | `string` | No |  |
| `metadata` | `map[string]any` | No |  |
| `mimetype` | `string` | No |  |
| `name` | `string` | No | This is the name of the file. |
| `object` | `string` | No |  |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `string` | No |  |
| `parsedTextBytes` | `float64` | No |  |
| `parsedTextUrl` | `string` | No |  |
| `path` | `string` | No |  |
| `purpose` | `string` | No |  |
| `status` | `string` | No |  |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.File(nil).Load(map[string]any{"id": "file_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.File(nil).Update(map[string]any{
    "id": "file_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.File(nil).Remove(map[string]any{"id": "file_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InsightEntity

```go
insight := client.Insight(nil)
fmt.Println(insight.GetName()) // "insight"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the Insight was created. |
| `id` | `string` | Yes | This is the unique identifier for the Insight. |
| `name` | `string` | No | This is the name of the Insight. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this Insight belongs to. |
| `systemKey` | `string` | No | Stable server-owned identifier for system-created insights. |
| `type` | `string` | Yes | This is the type of the Insight. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the Insight was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Insight(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Insight(nil).Load(map[string]any{"id": "insight_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Insight(nil).Update(map[string]any{
    "id": "insight_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Insight(nil).Remove(map[string]any{"id": "insight_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InsightEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## KnowledgeBaseEntity

```go
knowledgeBase := client.KnowledgeBase(nil)
fmt.Println(knowledgeBase.GetName()) // "knowledge_base"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No |  |
| `files` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `orgId` | `string` | Yes |  |
| `toolId` | `string` | Yes | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `createdAt` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `files` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `orgId` | - | - | - | - | - |
| `toolId` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.KnowledgeBase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.KnowledgeBase(nil).Load(map[string]any{"id": "knowledge_base_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.KnowledgeBase(nil).Update(map[string]any{
    "id": "knowledge_base_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.KnowledgeBase(nil).Remove(map[string]any{"id": "knowledge_base_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `KnowledgeBaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## KnowledgeBaseV2FileEntity

```go
knowledgeBaseV2File := client.KnowledgeBaseV2File(nil)
fmt.Println(knowledgeBaseV2File.GetName()) // "knowledge_base_v2_file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `float64` | No |  |
| `createdAt` | `string` | Yes |  |
| `fileId` | `string` | Yes |  |
| `fileName` | `string` | No |  |
| `id` | `string` | Yes |  |
| `knowledgeBaseV2Id` | `string` | Yes |  |
| `mimetype` | `string` | No |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.KnowledgeBaseV2File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.KnowledgeBaseV2File(nil).Remove(map[string]any{"id": "id", "knowledge_base_id": "knowledge_base_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `KnowledgeBaseV2FileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PersonalityEntity

```go
personality := client.Personality(nil)
fmt.Println(personality.GetName()) // "personality"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `any` | Yes | This is the full assistant configuration for this personality. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the personality was created. |
| `id` | `string` | Yes | This is the unique identifier for the personality. |
| `name` | `string` | Yes | This is the name of the personality (e.g., "Confused Carl", "Rude Rob"). |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this personality belongs to. |
| `path` | `string` | No | Optional folder path for organizing personalities. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the personality was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assistant` | - | - | - | Yes | - |
| `createdAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `orgId` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Personality(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Personality(nil).Load(map[string]any{"id": "personality_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Personality(nil).Create(map[string]any{
    "assistant": "example_assistant",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "orgId": "example_orgId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Personality(nil).Update(map[string]any{
    "id": "personality_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Personality(nil).Remove(map[string]any{"id": "personality_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PersonalityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PhoneNumberEntity

```go
phoneNumber := client.PhoneNumber(nil)
fmt.Println(phoneNumber.GetName()) // "phone_number"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `metadata` | `any` | Yes | Metadata about the pagination. |
| `results` | `[]any` | Yes | A list of phone numbers, which can be of any provider type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PhoneNumber(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PhoneNumber(nil).Load(map[string]any{"id": "phone_number_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PhoneNumber(nil).Update(map[string]any{
    "id": "phone_number_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PhoneNumber(nil).Remove(map[string]any{"id": "phone_number_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PhoneNumberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProviderEntity

```go
provider := client.Provider(nil)
fmt.Println(provider.GetName()) // "provider"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the provider resource was created. |
| `id` | `string` | Yes | This is the unique identifier for the provider resource. |
| `metadata` | `map[string]any` | Yes |  |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this provider resource belongs to. |
| `provider` | `string` | Yes | This is the provider that manages this resource. |
| `resource` | `map[string]any` | Yes | This is the full resource data from the provider's API. |
| `resourceId` | `string` | Yes | This is the provider-specific identifier for the resource. |
| `resourceName` | `string` | Yes | This is the name/type of the resource. |
| `results` | `[]any` | Yes |  |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the provider resource was last updated. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Provider(nil).Load(map[string]any{"id": "provider_id", "provider": "provider", "resource_name": "resource_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Provider(nil).Create(map[string]any{
    "provider": "example_provider",
    "resource_name": "example_resource_name",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "metadata": map[string]any{},
    "orgId": "example_orgId",
    "resource": map[string]any{},
    "resourceId": "example_resourceId",
    "resourceName": "example_resourceName",
    "results": []any{},
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Provider(nil).Update(map[string]any{
    "id": "provider_id",
    "provider": "provider",
    "resource_name": "resource_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Provider(nil).Remove(map[string]any{"id": "provider_id", "provider": "provider", "resource_name": "resource_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScenarioEntity

```go
scenario := client.Scenario(nil)
fmt.Println(scenario.GetName()) // "scenario"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `[]any` | Yes | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `[]any` | No | Hooks to run on simulation lifecycle events |
| `id` | `string` | Yes | This is the unique identifier for the scenario. |
| `instructions` | `string` | Yes | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `string` | Yes | This is the name of the scenario. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `string` | No | Optional folder path for organizing scenarios. |
| `targetOverrides` | `any` | No | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `[]any` | No | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the scenario was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `createdAt` | - | - | - | - | - |
| `evaluations` | - | - | - | Yes | - |
| `hooks` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `instructions` | - | - | - | Yes | - |
| `name` | - | - | - | Yes | - |
| `orgId` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `targetOverrides` | - | - | - | - | - |
| `toolMocks` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Scenario(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Scenario(nil).Load(map[string]any{"id": "scenario_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Scenario(nil).Update(map[string]any{
    "id": "scenario_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Scenario(nil).Remove(map[string]any{"id": "scenario_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScenarioEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScorecardEntity

```go
scorecard := client.Scorecard(nil)
fmt.Println(scorecard.GetName()) // "scorecard"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `[]any` | No | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `string` | No | This is the description of the scorecard. |
| `id` | `string` | Yes | This is the unique identifier for the scorecard. |
| `metrics` | `[]any` | Yes | These are the metrics that will be used to evaluate the scorecard. |
| `name` | `string` | No | This is the name of the scorecard. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the scorecard was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assistantIds` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `metrics` | - | - | - | Yes | - |
| `name` | - | - | - | - | - |
| `orgId` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Scorecard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Scorecard(nil).Load(map[string]any{"id": "scorecard_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Scorecard(nil).Update(map[string]any{
    "id": "scorecard_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Scorecard(nil).Remove(map[string]any{"id": "scorecard_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScorecardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SessionEntity

```go
session := client.Session(nil)
fmt.Println(session.GetName()) // "session"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact` | `any` | No | These are the artifacts that were extracted from the session messages. |
| `assistant` | `any` | No | This is the assistant configuration for this session. |
| `assistantId` | `string` | No | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `any` | No | These are the overrides for the assistant configuration. |
| `cost` | `float64` | No | This is the cost of the session in USD. |
| `costs` | `[]any` | No | These are the costs of individual components of the session in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `any` | No | This is the customer information associated with this session. |
| `customerId` | `string` | No | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `float64` | No | Session expiration time in seconds. |
| `id` | `string` | Yes | This is the unique identifier for the session. |
| `messages` | `[]any` | No | This is an array of chat messages in the session. |
| `name` | `string` | No | This is a user-defined name for the session. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `any` | No | This is the phone number configuration for this session. |
| `phoneNumberId` | `string` | No | This is the ID of the phone number associated with this session. |
| `squad` | `any` | No | This is the squad configuration for this session. |
| `squadId` | `string` | No | This is the squad ID associated with this session. |
| `status` | `string` | No | This is the current status of the session. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 timestamp indicating when the session was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Session(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Session(nil).Load(map[string]any{"id": "session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Session(nil).Update(map[string]any{
    "id": "session_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Session(nil).Remove(map[string]any{"id": "session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SessionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SimulationEntity

```go
simulation := client.Simulation(nil)
fmt.Println(simulation.GetName()) // "simulation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantId` | `string` | No | ID of the assistant to generate scenarios for |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the simulation was created. |
| `id` | `string` | Yes | This is the unique identifier for the simulation. |
| `name` | `string` | No | This is an optional friendly name for the simulation. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this simulation belongs to. |
| `path` | `string` | No | Optional folder path for organizing simulations. |
| `personalityId` | `string` | Yes | This is the ID of the personality to use for this simulation. |
| `scenarioId` | `string` | Yes | This is the ID of the scenario to use for this simulation. |
| `squadId` | `string` | No | ID of the squad to generate scenarios for |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the simulation was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assistantId` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `orgId` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `personalityId` | - | - | - | Yes | - |
| `scenarioId` | - | - | - | Yes | - |
| `squadId` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Simulation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Simulation(nil).Load(map[string]any{"id": "simulation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Simulation(nil).Update(map[string]any{
    "id": "simulation_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Simulation(nil).Remove(map[string]any{"id": "simulation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SimulationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SimulationRunEntity

```go
simulationRun := client.SimulationRun(nil)
fmt.Println(simulationRun.GetName()) // "simulation_run"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 date-time when created |
| `endedAt` | `string` | No | When the run ended |
| `endedReason` | `string` | No | Reason the run ended |
| `id` | `string` | Yes | Unique identifier for the run |
| `itemCounts` | `any` | No | Aggregate counts of run items by status |
| `iterations` | `float64` | No | Number of times to run each simulation (default: 1) |
| `orgId` | `string` | Yes | Organization ID |
| `queuedAt` | `string` | Yes | When the run was queued |
| `simulations` | `[]any` | Yes | Array of simulations and/or suites to run |
| `startedAt` | `string` | No | When the run started |
| `status` | `string` | Yes | Current status of the run |
| `target` | `any` | Yes | Target to test against |
| `transport` | `any` | No | Transport configuration for the simulation runs |
| `updatedAt` | `string` | Yes | ISO 8601 date-time when last updated |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SimulationRun(nil).Load(map[string]any{"id": "simulation_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SimulationRun(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "orgId": "example_orgId",
    "queuedAt": "example_queuedAt",
    "simulations": []any{},
    "status": "example_status",
    "target": "example_target",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SimulationRun(nil).Update(map[string]any{
    "id": "simulation_run_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SimulationRunEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SimulationRunItemEntity

```go
simulationRunItem := client.SimulationRunItem(nil)
fmt.Println(simulationRunItem.GetName()) // "simulation_run_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `callId` | `string` | No | This is the ID of the target Vapi call (the assistant being tested). |
| `canceledAt` | `string` | No | This is the ISO 8601 date-time string of when the run was canceled. |
| `completedAt` | `string` | No | This is the ISO 8601 date-time string of when the run completed. |
| `configurations` | `any` | No | This is the configuration for how this simulation run executes. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the run item was created. |
| `failedAt` | `string` | No | This is the ISO 8601 date-time string of when the run failed. |
| `failureReason` | `string` | No | This is the reason for failure. |
| `hooks` | `[]any` | No | Hooks configured for this simulation run item |
| `id` | `string` | Yes | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `any` | No | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `float64` | No | This is the iteration number (1-indexed) when run with iterations > 1. |
| `metadata` | `any` | No | This is the metadata containing snapshots and call data. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization. |
| `personalityId` | `string` | No | This is the personality ID at run creation time. |
| `queuedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the run was queued. |
| `results` | `any` | No | This is the results of the simulation run. |
| `runId` | `string` | No | This is the ID of the parent run (batch/group). |
| `scenarioId` | `string` | No | This is the scenario ID at run creation time. |
| `sessionId` | `string` | No | This is the session ID for chat-based simulations (webchat transport). |
| `simulationId` | `string` | Yes | This is the ID of the simulation this run belongs to. |
| `startedAt` | `string` | No | This is the ISO 8601 date-time string of when the run started. |
| `status` | `string` | Yes | This is the current status of the run. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the run item was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SimulationRunItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SimulationRunItem(nil).Load(map[string]any{"id": "simulation_run_item_id", "run_id": "run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SimulationRunItem(nil).Update(map[string]any{
    "id": "simulation_run_item_id",
    "run_id": "run_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SimulationRunItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SimulationSuiteEntity

```go
simulationSuite := client.SimulationSuite(nil)
fmt.Println(simulationSuite.GetName()) // "simulation_suite"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `string` | Yes | This is the unique identifier for the simulation suite. |
| `name` | `string` | Yes | This is the name of the simulation suite. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this suite belongs to. |
| `path` | `string` | No | Optional folder path for organizing simulation suites. |
| `simulationIds` | `[]any` | Yes | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `string` | No | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `[]any` | Yes | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the suite was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `createdAt` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `orgId` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `simulationIds` | - | - | - | Yes | - |
| `slackWebhookUrl` | - | - | - | - | - |
| `targetAssignments` | - | - | Yes | Yes | - |
| `updatedAt` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SimulationSuite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SimulationSuite(nil).Load(map[string]any{"id": "simulation_suite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SimulationSuite(nil).Update(map[string]any{
    "id": "simulation_suite_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SimulationSuite(nil).Remove(map[string]any{"id": "simulation_suite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SimulationSuiteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SquadEntity

```go
squad := client.Squad(nil)
fmt.Println(squad.GetName()) // "squad"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `string` | Yes | This is the unique identifier for the squad. |
| `latestVersion` | `string` | No | This is the latest version label (e.g. |
| `members` | `[]any` | Yes | This is the list of assistants that make up the squad. |
| `membersOverrides` | `any` | No | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `[]any` | No | Read-only. |
| `name` | `string` | No | This is the name of the squad. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the squad was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Squad(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Squad(nil).Load(map[string]any{"id": "squad_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Squad(nil).Update(map[string]any{
    "id": "squad_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Squad(nil).Remove(map[string]any{"id": "squad_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SquadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StructuredOutputEntity

```go
structuredOutput := client.StructuredOutput(nil)
fmt.Println(structuredOutput.GetName()) // "structured_output"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `[]any` | No | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `any` | No | Compliance configuration for this output. |
| `conditions` | `[]any` | No | These are the conditions that gate the execution of this structured output. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the structured output was created. |
| `description` | `string` | No | This is the description of what the structured output extracts. |
| `id` | `string` | Yes | This is the unique identifier for the structured output. |
| `model` | `any` | No | This is the model that will be used to extract the structured output. |
| `name` | `string` | Yes | This is the name of the structured output. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this structured output belongs to. |
| `regex` | `string` | No | This is the regex pattern to match against the transcript. |
| `schema` | `any` | Yes | This is the JSON Schema definition for the structured output. |
| `type` | `string` | No | This is the type of structured output. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `workflowIds` | `[]any` | No | These are the workflow IDs that this structured output is linked to. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assistantIds` | - | - | - | - | - |
| `compliancePlan` | - | - | - | - | - |
| `conditions` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `model` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `orgId` | - | - | - | - | - |
| `regex` | - | - | - | - | - |
| `schema` | - | - | - | Yes | - |
| `type` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `workflowIds` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.StructuredOutput(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.StructuredOutput(nil).Load(map[string]any{"id": "structured_output_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.StructuredOutput(nil).Update(map[string]any{
    "id": "structured_output_id",
    "schema_override": "schema_override",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.StructuredOutput(nil).Remove(map[string]any{"id": "structured_output_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StructuredOutputEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ToolEntity

```go
tool := client.Tool(nil)
fmt.Println(tool.GetName()) // "tool"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Tool(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Tool(nil).Load(map[string]any{"id": "tool_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Tool(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Tool(nil).Update(map[string]any{
    "id": "tool_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Tool(nil).Remove(map[string]any{"id": "tool_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ToolEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```go
client := sdk.NewVapiSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

