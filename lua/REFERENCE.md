# Vapi Lua SDK Reference

Complete API reference for the Vapi Lua SDK.


## VapiSDK

### Constructor

```lua
local sdk = require("vapi_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Analytics(data)`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Assistant(data)`

Create a new `Assistant` entity instance. Pass `nil` for no initial data.

#### `Board(data)`

Create a new `Board` entity instance. Pass `nil` for no initial data.

#### `Call(data)`

Create a new `Call` entity instance. Pass `nil` for no initial data.

#### `Campaign(data)`

Create a new `Campaign` entity instance. Pass `nil` for no initial data.

#### `Chat(data)`

Create a new `Chat` entity instance. Pass `nil` for no initial data.

#### `Eval(data)`

Create a new `Eval` entity instance. Pass `nil` for no initial data.

#### `File(data)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Insight(data)`

Create a new `Insight` entity instance. Pass `nil` for no initial data.

#### `KnowledgeBase(data)`

Create a new `KnowledgeBase` entity instance. Pass `nil` for no initial data.

#### `KnowledgeBaseV2File(data)`

Create a new `KnowledgeBaseV2File` entity instance. Pass `nil` for no initial data.

#### `Personality(data)`

Create a new `Personality` entity instance. Pass `nil` for no initial data.

#### `PhoneNumber(data)`

Create a new `PhoneNumber` entity instance. Pass `nil` for no initial data.

#### `Provider(data)`

Create a new `Provider` entity instance. Pass `nil` for no initial data.

#### `Scenario(data)`

Create a new `Scenario` entity instance. Pass `nil` for no initial data.

#### `Scorecard(data)`

Create a new `Scorecard` entity instance. Pass `nil` for no initial data.

#### `Session(data)`

Create a new `Session` entity instance. Pass `nil` for no initial data.

#### `Simulation(data)`

Create a new `Simulation` entity instance. Pass `nil` for no initial data.

#### `SimulationRun(data)`

Create a new `SimulationRun` entity instance. Pass `nil` for no initial data.

#### `SimulationRunItem(data)`

Create a new `SimulationRunItem` entity instance. Pass `nil` for no initial data.

#### `SimulationSuite(data)`

Create a new `SimulationSuite` entity instance. Pass `nil` for no initial data.

#### `Squad(data)`

Create a new `Squad` entity instance. Pass `nil` for no initial data.

#### `StructuredOutput(data)`

Create a new `StructuredOutput` entity instance. Pass `nil` for no initial data.

#### `Tool(data)`

Create a new `Tool` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AnalyticsEntity

```lua
local analytics = client:Analytics(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queries` | `table` | Yes | This is the list of metric queries you want to perform. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Analytics():create({
  queries = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssistantEntity

```lua
local assistant = client:Assistant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisPlan` | `any` | No | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `any` | No | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `any` | No | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `any` | No | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `table` | No | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `table` | No |  |
| `contentType` | `string` | No | The content-type the URL returned, when a response was received. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `table` | No | These are the credentials that will be used for the assistant calls. |
| `credentials` | `table` | No | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `string` | No | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `table` | No | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `string` | No | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `boolean` | No |  |
| `firstMessageMode` | `string` | No | This is the mode for the first message. |
| `hooks` | `table` | No | This is a set of actions that will be performed on certain events. |
| `id` | `string` | Yes | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `table` | No |  |
| `latestVersion` | `string` | No | This is the latest version label (e.g. |
| `maxDurationSeconds` | `number` | No | This is the maximum number of seconds that the call will last. |
| `metadata` | `table` | No | This is for metadata you want to store on the assistant. |
| `model` | `any` | No | These are the options for the assistant's LLM. |
| `modelDeprecations` | `table` | No | Read-only. |
| `modelOutputInMessagesEnabled` | `boolean` | No | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `any` | No | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `string` | No | This is the name of the assistant. |
| `observabilityPlan` | `any` | No | This is the plan for observability of assistant's calls. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `string` | No | Why validation failed. |
| `server` | `any` | No | This is where Vapi will send webhooks. |
| `serverMessages` | `table` | No | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `any` | No | This is the plan for when the assistant should start talking. |
| `status` | `number` | No | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `any` | No | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `any` | No | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `table` | No | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `string` | Yes | This is the background sound URL to validate. |
| `valid` | `boolean` | Yes | Whether the URL currently serves a live media file. |
| `voice` | `any` | No | These are the options for the assistant's voice. |
| `voicemailDetection` | `any` | No | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `string` | No | This is the message that the assistant will say if the call is forwarded to voicemail. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Assistant():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
  url = --[[ string ]],
  valid = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Assistant():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Assistant():load({ id = "assistant_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Assistant():remove({ id = "assistant_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Assistant():update({
  id = "assistant_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BoardEntity

```lua
local board = client:Board(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `string` | Yes | This is the unique identifier for the Board. |
| `items` | `table` | No | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Board():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  layout = --[[ any ]],
  name = --[[ string ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Board():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Board():load({ id = "board_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Board():remove({ id = "board_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Board():update({
  id = "board_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallEntity

```lua
local call = client:Call(nil)
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
| `cost` | `number` | No | This is the cost of the call in USD. |
| `costBreakdown` | `any` | No | This is the cost of the call in USD. |
| `costs` | `table` | No | These are the costs of individual components of the call in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `any` | No | This is the customer that will be called. |
| `customerId` | `string` | No | This is the customer that will be called. |
| `customers` | `table` | No | This is used to issue batch calls to multiple customers. |
| `destination` | `any` | No | This is the destination where the call ended up being transferred to. |
| `endedAt` | `string` | No | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `string` | No | This is the message that adds more context to the ended reason. |
| `endedReason` | `string` | No | This is the explanation for how the call ended. |
| `id` | `string` | Yes | This is the unique identifier for the call. |
| `messages` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Call():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Call():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Call():load({ id = "call_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Call():remove({ id = "call_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Call():update({
  id = "call_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CampaignEntity

```lua
local campaign = client:Campaign(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantId` | `string` | No | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `any` | No | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `any` | No | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `table` | Yes | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `number` | Yes | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `number` | Yes | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `number` | Yes | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `number` | Yes | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `number` | Yes | This is the number of calls that have been scheduled. |
| `contactCounters` | `any` | No | These are the per-status contact counts for this campaign. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `table` | No | These are the customers that will be called in the campaign. |
| `dialPlan` | `table` | No | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `string` | No | Optional campaign ID to duplicate config from. |
| `endedReason` | `string` | No | This is the explanation for how the campaign ended. |
| `id` | `string` | Yes | This is the unique identifier for the campaign. |
| `maxConcurrency` | `number` | No | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `string` | Yes | This is the name of the campaign. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `string` | No | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `any` | No | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `any` | No | This is the schedule plan for the campaign. |
| `server` | `any` | No | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `table` | No | These are the messages that will be sent to your Server URL. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Campaign():create({
  calls = --[[ table ]],
  callsCounterEnded = --[[ number ]],
  callsCounterEndedVoicemail = --[[ number ]],
  callsCounterInProgress = --[[ number ]],
  callsCounterQueued = --[[ number ]],
  callsCounterScheduled = --[[ number ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  orgId = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Campaign():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Campaign():load({ id = "campaign_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Campaign():remove({ id = "campaign_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Campaign():update({
  id = "campaign_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatEntity

```lua
local chat = client:Chat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `any` | No | This is the assistant that will be used for the chat. |
| `assistantId` | `string` | No | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `any` | No | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `number` | No | This is the cost of the chat in USD. |
| `costs` | `table` | No | These are the costs of individual components of the chat in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `string` | Yes | This is the unique identifier for the chat. |
| `input` | `any` | No | This is the input text for the chat. |
| `messages` | `table` | No | This is an array of messages used as context for the chat. |
| `name` | `string` | No | This is the name of the chat. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this chat belongs to. |
| `output` | `table` | No | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `string` | No | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `string` | No | This is the ID of the session that will be used for the chat. |
| `squad` | `any` | No | This is the squad that will be used for the chat. |
| `squadId` | `string` | No | This is the squad that will be used for the chat. |
| `stream` | `boolean` | No | This is a flag that determines whether the response should be streamed. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Chat():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Chat():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Chat():load({ id = "chat_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Chat():remove({ id = "chat_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EvalEntity

```lua
local eval = client:Eval(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `number` | Yes | This is the cost of the eval or suite run in USD. |
| `costs` | `table` | Yes | This is the break up of costs of the eval or suite run. |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No | This is the description of the eval. |
| `endedAt` | `string` | Yes |  |
| `endedMessage` | `string` | No | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `string` | Yes | This is the reason for the eval run to end. |
| `eval` | `any` | No | This is the transient eval that will be run |
| `evalId` | `string` | No | This is the id of the eval that will be run. |
| `id` | `string` | Yes |  |
| `messages` | `table` | Yes | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `string` | No | This is the name of the eval. |
| `orgId` | `string` | Yes |  |
| `results` | `table` | Yes | This is the results of the eval or suite run. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Eval():create({
  cost = --[[ number ]],
  costs = --[[ table ]],
  createdAt = --[[ string ]],
  endedAt = --[[ string ]],
  endedReason = --[[ string ]],
  id = --[[ string ]],
  messages = --[[ table ]],
  orgId = --[[ string ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
  target = --[[ any ]],
  type = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Eval():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Eval():load({ id = "eval_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Eval():remove({ id = "eval_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Eval():update({
  id = "eval_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EvalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileEntity

```lua
local file = client:File(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `string` | No |  |
| `bytes` | `number` | No |  |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `string` | Yes | This is the unique identifier for the file. |
| `key` | `string` | No |  |
| `metadata` | `table` | No |  |
| `mimetype` | `string` | No |  |
| `name` | `string` | No | This is the name of the file. |
| `object` | `string` | No |  |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `string` | No |  |
| `parsedTextBytes` | `number` | No |  |
| `parsedTextUrl` | `string` | No |  |
| `path` | `string` | No |  |
| `purpose` | `string` | No |  |
| `status` | `string` | No |  |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:File():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:File():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:File():load({ id = "file_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:File():remove({ id = "file_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:File():update({
  id = "file_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InsightEntity

```lua
local insight = client:Insight(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Insight():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Insight():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Insight():load({ id = "insight_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Insight():remove({ id = "insight_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Insight():update({
  id = "insight_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InsightEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## KnowledgeBaseEntity

```lua
local knowledge_base = client:KnowledgeBase(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No |  |
| `files` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:KnowledgeBase():create({
  createdAt = --[[ string ]],
  files = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  orgId = --[[ string ]],
  toolId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:KnowledgeBase():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:KnowledgeBase():load({ id = "knowledge_base_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:KnowledgeBase():remove({ id = "knowledge_base_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:KnowledgeBase():update({
  id = "knowledge_base_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KnowledgeBaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## KnowledgeBaseV2FileEntity

```lua
local knowledge_base_v2_file = client:KnowledgeBaseV2File(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `number` | No |  |
| `createdAt` | `string` | Yes |  |
| `fileId` | `string` | Yes |  |
| `fileName` | `string` | No |  |
| `id` | `string` | Yes |  |
| `knowledgeBaseV2Id` | `string` | Yes |  |
| `mimetype` | `string` | No |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:KnowledgeBaseV2File():create({
  id = --[[ string ]],
  createdAt = --[[ string ]],
  fileId = --[[ string ]],
  knowledgeBaseV2Id = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:KnowledgeBaseV2File():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:KnowledgeBaseV2File():remove({ id = "id", knowledge_base_id = "knowledge_base_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KnowledgeBaseV2FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PersonalityEntity

```lua
local personality = client:Personality(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Personality():create({
  assistant = --[[ any ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Personality():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Personality():load({ id = "personality_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Personality():remove({ id = "personality_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Personality():update({
  id = "personality_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonalityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PhoneNumberEntity

```lua
local phone_number = client:PhoneNumber(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `metadata` | `any` | Yes | Metadata about the pagination. |
| `results` | `table` | Yes | A list of phone numbers, which can be of any provider type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PhoneNumber():create({
  metadata = --[[ any ]],
  results = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PhoneNumber():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PhoneNumber():load({ id = "phone_number_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PhoneNumber():remove({ id = "phone_number_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PhoneNumber():update({
  id = "phone_number_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhoneNumberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProviderEntity

```lua
local provider = client:Provider(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the provider resource was created. |
| `id` | `string` | Yes | This is the unique identifier for the provider resource. |
| `metadata` | `table` | Yes |  |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this provider resource belongs to. |
| `provider` | `string` | Yes | This is the provider that manages this resource. |
| `resource` | `table` | Yes | This is the full resource data from the provider's API. |
| `resourceId` | `string` | Yes | This is the provider-specific identifier for the resource. |
| `resourceName` | `string` | Yes | This is the name/type of the resource. |
| `results` | `table` | Yes |  |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the provider resource was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Provider():create({
  provider = --[[ string ]],
  resource_name = --[[ string ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  metadata = --[[ table ]],
  orgId = --[[ string ]],
  resource = --[[ table ]],
  resourceId = --[[ string ]],
  resourceName = --[[ string ]],
  results = --[[ table ]],
  updatedAt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Provider():load({ id = "provider_id", provider = "provider", resource_name = "resource_name" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Provider():remove({ id = "provider_id", provider = "provider", resource_name = "resource_name" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Provider():update({
  id = "provider_id",
  provider = "provider",
  resource_name = "resource_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScenarioEntity

```lua
local scenario = client:Scenario(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `table` | Yes | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `table` | No | Hooks to run on simulation lifecycle events |
| `id` | `string` | Yes | This is the unique identifier for the scenario. |
| `instructions` | `string` | Yes | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `string` | Yes | This is the name of the scenario. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `string` | No | Optional folder path for organizing scenarios. |
| `targetOverrides` | `any` | No | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `table` | No | Scenario-level tool call mocks to use during simulations. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Scenario():create({
  createdAt = --[[ string ]],
  evaluations = --[[ table ]],
  id = --[[ string ]],
  instructions = --[[ string ]],
  name = --[[ string ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Scenario():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Scenario():load({ id = "scenario_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Scenario():remove({ id = "scenario_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Scenario():update({
  id = "scenario_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScenarioEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScorecardEntity

```lua
local scorecard = client:Scorecard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `table` | No | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `string` | No | This is the description of the scorecard. |
| `id` | `string` | Yes | This is the unique identifier for the scorecard. |
| `metrics` | `table` | Yes | These are the metrics that will be used to evaluate the scorecard. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Scorecard():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  metrics = --[[ table ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Scorecard():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Scorecard():load({ id = "scorecard_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Scorecard():remove({ id = "scorecard_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Scorecard():update({
  id = "scorecard_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScorecardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SessionEntity

```lua
local session = client:Session(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact` | `any` | No | These are the artifacts that were extracted from the session messages. |
| `assistant` | `any` | No | This is the assistant configuration for this session. |
| `assistantId` | `string` | No | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `any` | No | These are the overrides for the assistant configuration. |
| `cost` | `number` | No | This is the cost of the session in USD. |
| `costs` | `table` | No | These are the costs of individual components of the session in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `any` | No | This is the customer information associated with this session. |
| `customerId` | `string` | No | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `number` | No | Session expiration time in seconds. |
| `id` | `string` | Yes | This is the unique identifier for the session. |
| `messages` | `table` | No | This is an array of chat messages in the session. |
| `name` | `string` | No | This is a user-defined name for the session. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `any` | No | This is the phone number configuration for this session. |
| `phoneNumberId` | `string` | No | This is the ID of the phone number associated with this session. |
| `squad` | `any` | No | This is the squad configuration for this session. |
| `squadId` | `string` | No | This is the squad ID associated with this session. |
| `status` | `string` | No | This is the current status of the session. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 timestamp indicating when the session was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Session():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Session():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Session():load({ id = "session_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Session():remove({ id = "session_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Session():update({
  id = "session_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SimulationEntity

```lua
local simulation = client:Simulation(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Simulation():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  personalityId = --[[ string ]],
  scenarioId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Simulation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Simulation():load({ id = "simulation_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Simulation():remove({ id = "simulation_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Simulation():update({
  id = "simulation_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SimulationRunEntity

```lua
local simulation_run = client:SimulationRun(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 date-time when created |
| `endedAt` | `string` | No | When the run ended |
| `endedReason` | `string` | No | Reason the run ended |
| `id` | `string` | Yes | Unique identifier for the run |
| `itemCounts` | `any` | No | Aggregate counts of run items by status |
| `iterations` | `number` | No | Number of times to run each simulation (default: 1) |
| `orgId` | `string` | Yes | Organization ID |
| `queuedAt` | `string` | Yes | When the run was queued |
| `simulations` | `table` | Yes | Array of simulations and/or suites to run |
| `startedAt` | `string` | No | When the run started |
| `status` | `string` | Yes | Current status of the run |
| `target` | `any` | Yes | Target to test against |
| `transport` | `any` | No | Transport configuration for the simulation runs |
| `updatedAt` | `string` | Yes | ISO 8601 date-time when last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SimulationRun():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  queuedAt = --[[ string ]],
  simulations = --[[ table ]],
  status = --[[ string ]],
  target = --[[ any ]],
  updatedAt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SimulationRun():load({ id = "simulation_run_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SimulationRun():update({
  id = "simulation_run_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulationRunEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SimulationRunItemEntity

```lua
local simulation_run_item = client:SimulationRunItem(nil)
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
| `hooks` | `table` | No | Hooks configured for this simulation run item |
| `id` | `string` | Yes | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `any` | No | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `number` | No | This is the iteration number (1-indexed) when run with iterations > 1. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SimulationRunItem():create({
  item_id = --[[ string ]],
  run_id = --[[ string ]],
  force = --[[ string ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  orgId = --[[ string ]],
  queuedAt = --[[ string ]],
  simulationId = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SimulationRunItem():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SimulationRunItem():load({ id = "simulation_run_item_id", run_id = "run_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SimulationRunItem():update({
  id = "simulation_run_item_id",
  run_id = "run_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulationRunItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SimulationSuiteEntity

```lua
local simulation_suite = client:SimulationSuite(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `string` | Yes | This is the unique identifier for the simulation suite. |
| `name` | `string` | Yes | This is the name of the simulation suite. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this suite belongs to. |
| `path` | `string` | No | Optional folder path for organizing simulation suites. |
| `simulationIds` | `table` | Yes | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `string` | No | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `table` | Yes | This is the ordered list of assistant or squad assignments for the suite. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SimulationSuite():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  orgId = --[[ string ]],
  simulationIds = --[[ table ]],
  targetAssignments = --[[ table ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SimulationSuite():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SimulationSuite():load({ id = "simulation_suite_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SimulationSuite():remove({ id = "simulation_suite_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SimulationSuite():update({
  id = "simulation_suite_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulationSuiteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SquadEntity

```lua
local squad = client:Squad(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `string` | Yes | This is the unique identifier for the squad. |
| `latestVersion` | `string` | No | This is the latest version label (e.g. |
| `members` | `table` | Yes | This is the list of assistants that make up the squad. |
| `membersOverrides` | `any` | No | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `table` | No | Read-only. |
| `name` | `string` | No | This is the name of the squad. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the squad was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Squad():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  members = --[[ table ]],
  orgId = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Squad():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Squad():load({ id = "squad_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Squad():remove({ id = "squad_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Squad():update({
  id = "squad_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SquadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StructuredOutputEntity

```lua
local structured_output = client:StructuredOutput(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `table` | No | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `any` | No | Compliance configuration for this output. |
| `conditions` | `table` | No | These are the conditions that gate the execution of this structured output. |
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
| `workflowIds` | `table` | No | These are the workflow IDs that this structured output is linked to. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StructuredOutput():create({
  createdAt = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  orgId = --[[ string ]],
  schema = --[[ any ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:StructuredOutput():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:StructuredOutput():load({ id = "structured_output_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:StructuredOutput():remove({ id = "structured_output_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:StructuredOutput():update({
  id = "structured_output_id",
  schema_override = "schema_override",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StructuredOutputEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ToolEntity

```lua
local tool = client:Tool(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Tool():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Tool():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Tool():load({ id = "tool_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Tool():remove({ id = "tool_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Tool():update({
  id = "tool_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ToolEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

