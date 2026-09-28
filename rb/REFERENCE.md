# Vapi Ruby SDK Reference

Complete API reference for the Vapi Ruby SDK.


## VapiSDK

### Constructor

```ruby
require_relative 'Vapi_sdk'

client = VapiSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VapiSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = VapiSDK.test
```


### Instance Methods

#### `Analytics(data = nil)`

Create a new `Analytics` entity instance. Pass `nil` for no initial data.

#### `Assistant(data = nil)`

Create a new `Assistant` entity instance. Pass `nil` for no initial data.

#### `Board(data = nil)`

Create a new `Board` entity instance. Pass `nil` for no initial data.

#### `Call(data = nil)`

Create a new `Call` entity instance. Pass `nil` for no initial data.

#### `Campaign(data = nil)`

Create a new `Campaign` entity instance. Pass `nil` for no initial data.

#### `Chat(data = nil)`

Create a new `Chat` entity instance. Pass `nil` for no initial data.

#### `CreateSimulationRun(data = nil)`

Create a new `CreateSimulationRun` entity instance. Pass `nil` for no initial data.

#### `Eval(data = nil)`

Create a new `Eval` entity instance. Pass `nil` for no initial data.

#### `File(data = nil)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Insight(data = nil)`

Create a new `Insight` entity instance. Pass `nil` for no initial data.

#### `KnowledgeBase(data = nil)`

Create a new `KnowledgeBase` entity instance. Pass `nil` for no initial data.

#### `KnowledgeBaseV2File(data = nil)`

Create a new `KnowledgeBaseV2File` entity instance. Pass `nil` for no initial data.

#### `Personality(data = nil)`

Create a new `Personality` entity instance. Pass `nil` for no initial data.

#### `PhoneNumber(data = nil)`

Create a new `PhoneNumber` entity instance. Pass `nil` for no initial data.

#### `Provider(data = nil)`

Create a new `Provider` entity instance. Pass `nil` for no initial data.

#### `Scenario(data = nil)`

Create a new `Scenario` entity instance. Pass `nil` for no initial data.

#### `Scorecard(data = nil)`

Create a new `Scorecard` entity instance. Pass `nil` for no initial data.

#### `Session(data = nil)`

Create a new `Session` entity instance. Pass `nil` for no initial data.

#### `Simulation(data = nil)`

Create a new `Simulation` entity instance. Pass `nil` for no initial data.

#### `SimulationRun(data = nil)`

Create a new `SimulationRun` entity instance. Pass `nil` for no initial data.

#### `SimulationRunItem(data = nil)`

Create a new `SimulationRunItem` entity instance. Pass `nil` for no initial data.

#### `SimulationSuite(data = nil)`

Create a new `SimulationSuite` entity instance. Pass `nil` for no initial data.

#### `Squad(data = nil)`

Create a new `Squad` entity instance. Pass `nil` for no initial data.

#### `StructuredOutput(data = nil)`

Create a new `StructuredOutput` entity instance. Pass `nil` for no initial data.

#### `Tool(data = nil)`

Create a new `Tool` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AnalyticsEntity

```ruby
analytics = client.Analytics
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queries` | `Array` | Yes | This is the list of metric queries you want to perform. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Analytics.create({
  "queries" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AssistantEntity

```ruby
assistant = client.Assistant
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisPlan` | `Object` | No | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `Object` | No | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `Object` | No | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `Object` | No | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `Array` | No | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `Hash` | No |  |
| `contentType` | `String` | No | The content-type the URL returned, when a response was received. |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `Array` | No | These are the credentials that will be used for the assistant calls. |
| `credentials` | `Array` | No | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `String` | No | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `Array` | No | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `String` | No | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `Boolean` | No |  |
| `firstMessageMode` | `String` | No | This is the mode for the first message. |
| `hooks` | `Array` | No | This is a set of actions that will be performed on certain events. |
| `id` | `String` | Yes | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `Hash` | No |  |
| `latestVersion` | `String` | No | This is the latest version label (e.g. |
| `maxDurationSeconds` | `Float` | No | This is the maximum number of seconds that the call will last. |
| `metadata` | `Hash` | No | This is for metadata you want to store on the assistant. |
| `model` | `Object` | No | These are the options for the assistant's LLM. |
| `modelDeprecations` | `Array` | No | Read-only. |
| `modelOutputInMessagesEnabled` | `Boolean` | No | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `Object` | No | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `String` | No | This is the name of the assistant. |
| `observabilityPlan` | `Object` | No | This is the plan for observability of assistant's calls. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `String` | No | Why validation failed. |
| `server` | `Object` | No | This is where Vapi will send webhooks. |
| `serverMessages` | `Array` | No | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `Object` | No | This is the plan for when the assistant should start talking. |
| `status` | `Float` | No | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `Object` | No | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `Object` | No | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `Array` | No | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `String` | Yes | This is the background sound URL to validate. |
| `valid` | `Boolean` | Yes | Whether the URL currently serves a live media file. |
| `voice` | `Object` | No | These are the options for the assistant's voice. |
| `voicemailDetection` | `Object` | No | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `String` | No | This is the message that the assistant will say if the call is forwarded to voicemail. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Assistant.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
  "url" => "example_url", # String
  "valid" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Assistant.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Assistant.load({ "id" => "assistant_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Assistant.remove({ "id" => "assistant_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Assistant.update({
  "id" => "assistant_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AssistantEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BoardEntity

```ruby
board = client.Board
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `String` | Yes | This is the unique identifier for the Board. |
| `items` | `Array` | No | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `Object` | Yes | This is the layout of the Board. |
| `name` | `String` | Yes | This is the name of the Board. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `String` | No | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `Object` | No | This is the timerange override for the board. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the Board was last updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Board.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "layout" => "example_layout", # Object
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Board.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Board.load({ "id" => "board_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Board.remove({ "id" => "board_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Board.update({
  "id" => "board_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BoardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CallEntity

```ruby
call = client.Call
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis` | `Object` | No | This is the analysis of the call. |
| `artifact` | `Object` | No | These are the artifacts created from the call. |
| `artifactPlan` | `Object` | No | This is a copy of assistant artifact plan. |
| `assistant` | `Object` | No | This is the assistant that will be used for the call. |
| `assistantId` | `String` | No | This is the assistant ID that will be used for the call. |
| `assistantOverrides` | `Object` | No | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `assistantVersion` | `String` | No | This is the assistant version to use for this call. |
| `campaignId` | `String` | No | This is the campaign ID that the call belongs to. |
| `compliance` | `Object` | No | This is the compliance of the call. |
| `cost` | `Float` | No | This is the cost of the call in USD. |
| `costBreakdown` | `Object` | No | This is the cost of the call in USD. |
| `costs` | `Array` | No | These are the costs of individual components of the call in USD. |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `Object` | No | This is the customer that will be called. |
| `customerId` | `String` | No | This is the customer that will be called. |
| `customers` | `Array` | No | This is used to issue batch calls to multiple customers. |
| `destination` | `Object` | No | This is the destination where the call ended up being transferred to. |
| `endedAt` | `String` | No | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `String` | No | This is the message that adds more context to the ended reason. |
| `endedReason` | `String` | No | This is the explanation for how the call ended. |
| `id` | `String` | Yes | This is the unique identifier for the call. |
| `messages` | `Array` | No |  |
| `monitor` | `Object` | No | This is to real-time monitor the call. |
| `name` | `String` | No | This is the name of the call. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this call belongs to. |
| `phoneCallProvider` | `String` | No | This is the provider of the call. |
| `phoneCallProviderId` | `String` | No | The ID of the call as provided by the phone number service. |
| `phoneCallTransport` | `String` | No | This is the transport of the phone call. |
| `phoneNumber` | `Object` | No | This is the phone number that will be used for the call. |
| `phoneNumberId` | `String` | No | This is the phone number that will be used for the call. |
| `schedulePlan` | `Object` | No | This is the schedule plan of the call. |
| `squad` | `Object` | No | This is a squad that will be used for the call. |
| `squadId` | `String` | No | This is the squad that will be used for the call. |
| `squadOverrides` | `Object` | No | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `squadVersion` | `String` | No | This is the squad version to use for this call. |
| `startedAt` | `String` | No | This is the ISO 8601 date-time string of when the call was started. |
| `status` | `String` | No | This is the status of the call. |
| `transport` | `Object` | No | This is the transport of the call. |
| `type` | `String` | No | This is the type of call. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the call was last updated. |
| `workflow` | `Object` | No | This is a workflow that will be used for the call. |
| `workflowId` | `String` | No | This is the workflow that will be used for the call. |
| `workflowOverrides` | `Object` | No | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Call.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Call.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Call.load({ "id" => "call_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Call.remove({ "id" => "call_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Call.update({
  "id" => "call_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CallEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CampaignEntity

```ruby
campaign = client.Campaign
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantId` | `String` | No | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `Object` | No | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `Object` | No | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `Hash` | Yes | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `Float` | Yes | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `Float` | Yes | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `Float` | Yes | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `Float` | Yes | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `Float` | Yes | This is the number of calls that have been scheduled. |
| `contactCounters` | `Object` | No | These are the per-status contact counts for this campaign. |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `Array` | No | These are the customers that will be called in the campaign. |
| `dialPlan` | `Array` | No | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `String` | No | Optional campaign ID to duplicate config from. |
| `endedReason` | `String` | No | This is the explanation for how the campaign ended. |
| `id` | `String` | Yes | This is the unique identifier for the campaign. |
| `maxConcurrency` | `Float` | No | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `String` | Yes | This is the name of the campaign. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `String` | No | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `Object` | No | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `Object` | No | This is the schedule plan for the campaign. |
| `server` | `Object` | No | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `Array` | No | These are the messages that will be sent to your Server URL. |
| `squadId` | `String` | No | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `Object` | No | These are the overrides for the squad and template variables for the campaign. |
| `status` | `String` | Yes | This is the status of the campaign. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | `String` | No | This is the workflow ID that will be used for the campaign calls. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Campaign.create({
  "calls" => {}, # Hash
  "callsCounterEnded" => 1, # Float
  "callsCounterEndedVoicemail" => 1, # Float
  "callsCounterInProgress" => 1, # Float
  "callsCounterQueued" => 1, # Float
  "callsCounterScheduled" => 1, # Float
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Campaign.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Campaign.load({ "id" => "campaign_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Campaign.remove({ "id" => "campaign_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Campaign.update({
  "id" => "campaign_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChatEntity

```ruby
chat = client.Chat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `Object` | No | This is the assistant that will be used for the chat. |
| `assistantId` | `String` | No | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `Object` | No | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `Float` | No | This is the cost of the chat in USD. |
| `costs` | `Array` | No | These are the costs of individual components of the chat in USD. |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `String` | Yes | This is the unique identifier for the chat. |
| `input` | `Object` | No | This is the input text for the chat. |
| `messages` | `Array` | No | This is an array of messages used as context for the chat. |
| `name` | `String` | No | This is the name of the chat. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this chat belongs to. |
| `output` | `Array` | No | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `String` | No | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `String` | No | This is the ID of the session that will be used for the chat. |
| `squad` | `Object` | No | This is the squad that will be used for the chat. |
| `squadId` | `String` | No | This is the squad that will be used for the chat. |
| `stream` | `Boolean` | No | This is a flag that determines whether the response should be streamed. |
| `transport` | `Object` | No | This is used to send the chat through a transport like SMS. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the chat was last updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Chat.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Chat.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Chat.load({ "id" => "chat_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Chat.remove({ "id" => "chat_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateSimulationRunEntity

```ruby
create_simulation_run = client.CreateSimulationRun
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `iterations` | `Float` | No | Number of times to run each simulation (default: 1) |
| `simulations` | `Array` | Yes | Array of simulations and/or suites to run |
| `target` | `Object` | Yes | Target to test against |
| `transport` | `Object` | No | Transport configuration for the simulation runs |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateSimulationRun.create({
  "simulations" => [], # Array
  "target" => "example_target", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateSimulationRunEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EvalEntity

```ruby
eval = client.Eval
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `Float` | Yes | This is the cost of the eval or suite run in USD. |
| `costs` | `Array` | Yes | This is the break up of costs of the eval or suite run. |
| `createdAt` | `String` | Yes |  |
| `description` | `String` | No | This is the description of the eval. |
| `endedAt` | `String` | Yes |  |
| `endedMessage` | `String` | No | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `String` | Yes | This is the reason for the eval run to end. |
| `eval` | `Object` | No | This is the transient eval that will be run |
| `evalId` | `String` | No | This is the id of the eval that will be run. |
| `id` | `String` | Yes |  |
| `messages` | `Array` | Yes | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `String` | No | This is the name of the eval. |
| `orgId` | `String` | Yes |  |
| `results` | `Array` | Yes | This is the results of the eval or suite run. |
| `startedAt` | `String` | Yes |  |
| `status` | `String` | Yes | This is the status of the eval run. |
| `target` | `Object` | Yes | This is the target that will be run against the eval |
| `type` | `String` | Yes | This is the type of the run. |
| `updatedAt` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Eval.create({
  "cost" => 1, # Float
  "costs" => [], # Array
  "createdAt" => "example_createdAt", # String
  "endedAt" => "example_endedAt", # String
  "endedReason" => "example_endedReason", # String
  "id" => "example_id", # String
  "messages" => [], # Array
  "orgId" => "example_orgId", # String
  "results" => [], # Array
  "startedAt" => "example_startedAt", # String
  "status" => "example_status", # String
  "target" => "example_target", # Object
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Eval.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Eval.load({ "id" => "eval_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Eval.remove({ "id" => "eval_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Eval.update({
  "id" => "eval_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EvalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FileEntity

```ruby
file = client.File
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `String` | No |  |
| `bytes` | `Float` | No |  |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `String` | Yes | This is the unique identifier for the file. |
| `key` | `String` | No |  |
| `metadata` | `Hash` | No |  |
| `mimetype` | `String` | No |  |
| `name` | `String` | No | This is the name of the file. |
| `object` | `String` | No |  |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `String` | No |  |
| `parsedTextBytes` | `Float` | No |  |
| `parsedTextUrl` | `String` | No |  |
| `path` | `String` | No |  |
| `purpose` | `String` | No |  |
| `status` | `String` | No |  |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.File.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.File.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.File.load({ "id" => "file_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.File.remove({ "id" => "file_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.File.update({
  "id" => "file_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InsightEntity

```ruby
insight = client.Insight
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the Insight was created. |
| `id` | `String` | Yes | This is the unique identifier for the Insight. |
| `name` | `String` | No | This is the name of the Insight. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this Insight belongs to. |
| `systemKey` | `String` | No | Stable server-owned identifier for system-created insights. |
| `type` | `String` | Yes | This is the type of the Insight. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the Insight was last updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Insight.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Insight.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Insight.load({ "id" => "insight_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Insight.remove({ "id" => "insight_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Insight.update({
  "id" => "insight_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InsightEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## KnowledgeBaseEntity

```ruby
knowledge_base = client.KnowledgeBase
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes |  |
| `description` | `String` | No |  |
| `files` | `Array` | Yes |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `orgId` | `String` | Yes |  |
| `toolId` | `String` | Yes | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.KnowledgeBase.create({
  "createdAt" => "example_createdAt", # String
  "files" => [], # Array
  "id" => "example_id", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "toolId" => "example_toolId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.KnowledgeBase.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.KnowledgeBase.load({ "id" => "knowledge_base_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.KnowledgeBase.remove({ "id" => "knowledge_base_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.KnowledgeBase.update({
  "id" => "knowledge_base_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `KnowledgeBaseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## KnowledgeBaseV2FileEntity

```ruby
knowledge_base_v2_file = client.KnowledgeBaseV2File
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `Float` | No |  |
| `createdAt` | `String` | Yes |  |
| `fileId` | `String` | Yes |  |
| `fileName` | `String` | No |  |
| `id` | `String` | Yes |  |
| `knowledgeBaseV2Id` | `String` | Yes |  |
| `mimetype` | `String` | No |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.KnowledgeBaseV2File.create({
  "id" => "example_id", # String
  "createdAt" => "example_createdAt", # String
  "fileId" => "example_fileId", # String
  "knowledgeBaseV2Id" => "example_knowledgeBaseV2Id", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.KnowledgeBaseV2File.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.KnowledgeBaseV2File.remove({ "id" => "id", "knowledge_base_id" => "knowledge_base_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `KnowledgeBaseV2FileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PersonalityEntity

```ruby
personality = client.Personality
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisPlan` | `Object` | No | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `Object` | No | This is the plan for artifacts generated during assistant's calls. |
| `assistant` | `Object` | Yes | This is the full assistant configuration for this personality. |
| `backgroundSound` | `Object` | No | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `Object` | No | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `Array` | No | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `Hash` | No |  |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the personality was created. |
| `credentialIds` | `Array` | No | These are the credentials that will be used for the assistant calls. |
| `credentials` | `Array` | No | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `String` | No | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `Array` | No | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `String` | No | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `Boolean` | No |  |
| `firstMessageMode` | `String` | No | This is the mode for the first message. |
| `hooks` | `Array` | No | This is a set of actions that will be performed on certain events. |
| `id` | `String` | Yes | This is the unique identifier for the personality. |
| `keypadInputPlan` | `Hash` | No |  |
| `maxDurationSeconds` | `Float` | No | This is the maximum number of seconds that the call will last. |
| `metadata` | `Hash` | No | This is for metadata you want to store on the assistant. |
| `model` | `Object` | No | These are the options for the assistant's LLM. |
| `modelOutputInMessagesEnabled` | `Boolean` | No | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `Object` | No | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `String` | No | This is the name of the assistant. |
| `observabilityPlan` | `Object` | No | This is the plan for observability of assistant's calls. |
| `orgId` | `String` | Yes | This is the unique identifier for the organization this personality belongs to. |
| `path` | `String` | No | Optional folder path for organizing personalities. |
| `server` | `Object` | No | This is where Vapi will send webhooks. |
| `serverMessages` | `Array` | No | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `Object` | No | This is the plan for when the assistant should start talking. |
| `stopSpeakingPlan` | `Object` | No | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `Object` | No | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `Array` | No | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the personality was last updated. |
| `voice` | `Object` | No | These are the options for the assistant's voice. |
| `voicemailDetection` | `Object` | No | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `String` | No | This is the message that the assistant will say if the call is forwarded to voicemail. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `analysisPlan` | - | - | - | - | - |
| `artifactPlan` | - | - | - | - | - |
| `assistant` | - | - | - | Yes | - |
| `backgroundSound` | - | - | - | - | - |
| `backgroundSpeechDenoisingPlan` | - | - | - | - | - |
| `clientMessages` | - | - | - | - | - |
| `compliancePlan` | - | - | - | - | - |
| `createdAt` | - | - | - | - | - |
| `credentialIds` | - | - | - | - | - |
| `credentials` | - | - | - | - | - |
| `endCallMessage` | - | - | - | - | - |
| `endCallPhrases` | - | - | - | - | - |
| `firstMessage` | - | - | - | - | - |
| `firstMessageInterruptionsEnabled` | - | - | - | - | - |
| `firstMessageMode` | - | - | - | - | - |
| `hooks` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `keypadInputPlan` | - | - | - | - | - |
| `maxDurationSeconds` | - | - | - | - | - |
| `metadata` | - | - | - | - | - |
| `model` | - | - | - | - | - |
| `modelOutputInMessagesEnabled` | - | - | - | - | - |
| `monitorPlan` | - | - | - | - | - |
| `name` | - | Yes | Yes | - | - |
| `observabilityPlan` | - | - | - | - | - |
| `orgId` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `server` | - | - | - | - | - |
| `serverMessages` | - | - | - | - | - |
| `startSpeakingPlan` | - | - | - | - | - |
| `stopSpeakingPlan` | - | - | - | - | - |
| `transcriber` | - | - | - | - | - |
| `transportConfigurations` | - | - | - | - | - |
| `updatedAt` | - | - | - | - | - |
| `voice` | - | - | - | - | - |
| `voicemailDetection` | - | - | - | - | - |
| `voicemailMessage` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Personality.create({
  "assistant" => "example_assistant", # Object
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Personality.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Personality.load({ "id" => "personality_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Personality.remove({ "id" => "personality_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Personality.update({
  "id" => "personality_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PersonalityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PhoneNumberEntity

```ruby
phone_number = client.PhoneNumber
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `metadata` | `Object` | Yes | Metadata about the pagination. |
| `results` | `Array` | Yes | A list of phone numbers, which can be of any provider type. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PhoneNumber.create({
  "metadata" => "example_metadata", # Object
  "results" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PhoneNumber.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PhoneNumber.load({ "id" => "phone_number_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PhoneNumber.remove({ "id" => "phone_number_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PhoneNumber.update({
  "id" => "phone_number_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PhoneNumberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProviderEntity

```ruby
provider = client.Provider
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `metadata` | `Hash` | Yes |  |
| `results` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Provider.create({
  "provider" => "example_provider", # String
  "resource_name" => "example_resource_name", # String
  "metadata" => {}, # Hash
  "results" => [], # Array
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Provider.load({ "id" => "provider_id", "provider" => "provider", "resource_name" => "resource_name" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Provider.remove({ "id" => "provider_id", "provider" => "provider", "resource_name" => "resource_name" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Provider.update({
  "id" => "provider_id",
  "provider" => "provider",
  "resource_name" => "resource_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScenarioEntity

```ruby
scenario = client.Scenario
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `Array` | Yes | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `Array` | No | Hooks to run on simulation lifecycle events |
| `id` | `String` | Yes | This is the unique identifier for the scenario. |
| `instructions` | `String` | Yes | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `String` | Yes | This is the name of the scenario. |
| `orgId` | `String` | Yes | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `String` | No | Optional folder path for organizing scenarios. |
| `targetOverrides` | `Object` | No | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `Array` | No | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the scenario was last updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Scenario.create({
  "createdAt" => "example_createdAt", # String
  "evaluations" => [], # Array
  "id" => "example_id", # String
  "instructions" => "example_instructions", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Scenario.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Scenario.load({ "id" => "scenario_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Scenario.remove({ "id" => "scenario_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Scenario.update({
  "id" => "scenario_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScenarioEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScorecardEntity

```ruby
scorecard = client.Scorecard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `Array` | No | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `String` | No | This is the description of the scorecard. |
| `id` | `String` | Yes | This is the unique identifier for the scorecard. |
| `metrics` | `Array` | Yes | These are the metrics that will be used to evaluate the scorecard. |
| `name` | `String` | No | This is the name of the scorecard. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the scorecard was last updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Scorecard.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "metrics" => [], # Array
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Scorecard.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Scorecard.load({ "id" => "scorecard_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Scorecard.remove({ "id" => "scorecard_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Scorecard.update({
  "id" => "scorecard_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScorecardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SessionEntity

```ruby
session = client.Session
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact` | `Object` | No | These are the artifacts that were extracted from the session messages. |
| `assistant` | `Object` | No | This is the assistant configuration for this session. |
| `assistantId` | `String` | No | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `Object` | No | These are the overrides for the assistant configuration. |
| `cost` | `Float` | No | This is the cost of the session in USD. |
| `costs` | `Array` | No | These are the costs of individual components of the session in USD. |
| `createdAt` | `String` | Yes | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `Object` | No | This is the customer information associated with this session. |
| `customerId` | `String` | No | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `Float` | No | Session expiration time in seconds. |
| `id` | `String` | Yes | This is the unique identifier for the session. |
| `messages` | `Array` | No | This is an array of chat messages in the session. |
| `name` | `String` | No | This is a user-defined name for the session. |
| `orgId` | `String` | Yes | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `Object` | No | This is the phone number configuration for this session. |
| `phoneNumberId` | `String` | No | This is the ID of the phone number associated with this session. |
| `squad` | `Object` | No | This is the squad configuration for this session. |
| `squadId` | `String` | No | This is the squad ID associated with this session. |
| `status` | `String` | No | This is the current status of the session. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 timestamp indicating when the session was last updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Session.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Session.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Session.load({ "id" => "session_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Session.remove({ "id" => "session_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Session.update({
  "id" => "session_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SessionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SimulationEntity

```ruby
simulation = client.Simulation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantId` | `String` | No | ID of the assistant to generate scenarios for |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the simulation was created. |
| `id` | `String` | Yes | This is the unique identifier for the simulation. |
| `name` | `String` | No | This is an optional friendly name for the simulation. |
| `orgId` | `String` | Yes | This is the unique identifier for the organization this simulation belongs to. |
| `path` | `String` | No | Optional folder path for organizing simulations. |
| `personalityId` | `String` | Yes | This is the ID of the personality to use for this simulation. |
| `scenarioId` | `String` | Yes | This is the ID of the scenario to use for this simulation. |
| `squadId` | `String` | No | ID of the squad to generate scenarios for |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the simulation was last updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Simulation.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "personalityId" => "example_personalityId", # String
  "scenarioId" => "example_scenarioId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Simulation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Simulation.load({ "id" => "simulation_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Simulation.remove({ "id" => "simulation_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Simulation.update({
  "id" => "simulation_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SimulationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SimulationRunEntity

```ruby
simulation_run = client.SimulationRun
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes | ISO 8601 date-time when created |
| `endedAt` | `String` | No | When the run ended |
| `endedReason` | `String` | No | Reason the run ended |
| `id` | `String` | Yes | Unique identifier for the run |
| `itemCounts` | `Object` | No | Aggregate counts of run items by status |
| `iterations` | `Float` | No | Number of times to run each simulation (default: 1) |
| `orgId` | `String` | Yes | Organization ID |
| `queuedAt` | `String` | Yes | When the run was queued |
| `simulations` | `Array` | Yes | Array of simulations and/or suites to run |
| `startedAt` | `String` | No | When the run started |
| `status` | `String` | Yes | Current status of the run |
| `target` | `Object` | Yes | Target to test against |
| `transport` | `Object` | No | Transport configuration for the simulation runs |
| `updatedAt` | `String` | Yes | ISO 8601 date-time when last updated |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SimulationRun.load({ "id" => "simulation_run_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SimulationRun.update({
  "id" => "simulation_run_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SimulationRunEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SimulationRunItemEntity

```ruby
simulation_run_item = client.SimulationRunItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `callId` | `String` | No | This is the ID of the target Vapi call (the assistant being tested). |
| `canceledAt` | `String` | No | This is the ISO 8601 date-time string of when the run was canceled. |
| `completedAt` | `String` | No | This is the ISO 8601 date-time string of when the run completed. |
| `configurations` | `Object` | No | This is the configuration for how this simulation run executes. |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the run item was created. |
| `failedAt` | `String` | No | This is the ISO 8601 date-time string of when the run failed. |
| `failureReason` | `String` | No | This is the reason for failure. |
| `hooks` | `Array` | No | Hooks configured for this simulation run item |
| `id` | `String` | Yes | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `Object` | No | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `Float` | No | This is the iteration number (1-indexed) when run with iterations > 1. |
| `metadata` | `Object` | No | This is the metadata containing snapshots and call data. |
| `orgId` | `String` | Yes | This is the unique identifier for the organization. |
| `personalityId` | `String` | No | This is the personality ID at run creation time. |
| `queuedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the run was queued. |
| `results` | `Object` | No | This is the results of the simulation run. |
| `runId` | `String` | No | This is the ID of the parent run (batch/group). |
| `scenarioId` | `String` | No | This is the scenario ID at run creation time. |
| `sessionId` | `String` | No | This is the session ID for chat-based simulations (webchat transport). |
| `simulationId` | `String` | Yes | This is the ID of the simulation this run belongs to. |
| `startedAt` | `String` | No | This is the ISO 8601 date-time string of when the run started. |
| `status` | `String` | Yes | This is the current status of the run. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the run item was last updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SimulationRunItem.create({
  "item_id" => "example_item_id", # String
  "run_id" => "example_run_id", # String
  "force" => "example_force", # String
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "queuedAt" => "example_queuedAt", # String
  "simulationId" => "example_simulationId", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SimulationRunItem.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SimulationRunItem.load({ "id" => "simulation_run_item_id", "run_id" => "run_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SimulationRunItem.update({
  "id" => "simulation_run_item_id",
  "run_id" => "run_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SimulationRunItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SimulationSuiteEntity

```ruby
simulation_suite = client.SimulationSuite
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `String` | Yes | This is the unique identifier for the simulation suite. |
| `name` | `String` | Yes | This is the name of the simulation suite. |
| `orgId` | `String` | Yes | This is the unique identifier for the organization this suite belongs to. |
| `path` | `String` | No | Optional folder path for organizing simulation suites. |
| `simulationIds` | `Array` | Yes | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `String` | No | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `Array` | Yes | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the suite was last updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SimulationSuite.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "simulationIds" => [], # Array
  "targetAssignments" => [], # Array
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SimulationSuite.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SimulationSuite.load({ "id" => "simulation_suite_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SimulationSuite.remove({ "id" => "simulation_suite_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SimulationSuite.update({
  "id" => "simulation_suite_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SimulationSuiteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SquadEntity

```ruby
squad = client.Squad
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `String` | Yes | This is the unique identifier for the squad. |
| `latestVersion` | `String` | No | This is the latest version label (e.g. |
| `members` | `Array` | Yes | This is the list of assistants that make up the squad. |
| `membersOverrides` | `Object` | No | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `Array` | No | Read-only. |
| `name` | `String` | No | This is the name of the squad. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the squad was last updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Squad.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "members" => [], # Array
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Squad.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Squad.load({ "id" => "squad_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Squad.remove({ "id" => "squad_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Squad.update({
  "id" => "squad_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SquadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StructuredOutputEntity

```ruby
structured_output = client.StructuredOutput
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `Array` | No | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `Object` | No | Compliance configuration for this output. |
| `conditions` | `Array` | No | These are the conditions that gate the execution of this structured output. |
| `createdAt` | `String` | Yes | This is the ISO 8601 date-time string of when the structured output was created. |
| `description` | `String` | No | This is the description of what the structured output extracts. |
| `id` | `String` | Yes | This is the unique identifier for the structured output. |
| `model` | `Object` | No | This is the model that will be used to extract the structured output. |
| `name` | `String` | Yes | This is the name of the structured output. |
| `orgId` | `String` | Yes | This is the unique identifier for the org that this structured output belongs to. |
| `regex` | `String` | No | This is the regex pattern to match against the transcript. |
| `schema` | `Object` | Yes | This is the JSON Schema definition for the structured output. |
| `type` | `String` | No | This is the type of structured output. |
| `updatedAt` | `String` | Yes | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `workflowIds` | `Array` | No | These are the workflow IDs that this structured output is linked to. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.StructuredOutput.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "schema" => "example_schema", # Object
  "updatedAt" => "example_updatedAt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.StructuredOutput.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.StructuredOutput.load({ "id" => "structured_output_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.StructuredOutput.remove({ "id" => "structured_output_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.StructuredOutput.update({
  "id" => "structured_output_id",
  "schema_override" => "schema_override",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StructuredOutputEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ToolEntity

```ruby
tool = client.Tool
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Tool.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Tool.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Tool.load({ "id" => "tool_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Tool.remove({ "id" => "tool_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Tool.update({
  "id" => "tool_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ToolEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = VapiSDK.new({
  "feature" => {
    "debug" => { "active" => true },
    "idempotency" => { "active" => true },
    "metrics" => { "active" => true },
    "paging" => { "active" => true },
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

