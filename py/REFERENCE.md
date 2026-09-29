# Vapi Python SDK Reference

Complete API reference for the Vapi Python SDK.


## VapiSDK

### Constructor

```python
from vapi_sdk import VapiSDK

client = VapiSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VapiSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = VapiSDK.test()
```


### Instance Methods

#### `Analytics(data=None)`

Create a new `AnalyticsEntity` instance. Pass `None` for no initial data.

#### `Assistant(data=None)`

Create a new `AssistantEntity` instance. Pass `None` for no initial data.

#### `Board(data=None)`

Create a new `BoardEntity` instance. Pass `None` for no initial data.

#### `Call(data=None)`

Create a new `CallEntity` instance. Pass `None` for no initial data.

#### `Campaign(data=None)`

Create a new `CampaignEntity` instance. Pass `None` for no initial data.

#### `Chat(data=None)`

Create a new `ChatEntity` instance. Pass `None` for no initial data.

#### `Eval(data=None)`

Create a new `EvalEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `Insight(data=None)`

Create a new `InsightEntity` instance. Pass `None` for no initial data.

#### `KnowledgeBase(data=None)`

Create a new `KnowledgeBaseEntity` instance. Pass `None` for no initial data.

#### `KnowledgeBaseV2File(data=None)`

Create a new `KnowledgeBaseV2FileEntity` instance. Pass `None` for no initial data.

#### `Personality(data=None)`

Create a new `PersonalityEntity` instance. Pass `None` for no initial data.

#### `PhoneNumber(data=None)`

Create a new `PhoneNumberEntity` instance. Pass `None` for no initial data.

#### `Provider(data=None)`

Create a new `ProviderEntity` instance. Pass `None` for no initial data.

#### `Scenario(data=None)`

Create a new `ScenarioEntity` instance. Pass `None` for no initial data.

#### `Scorecard(data=None)`

Create a new `ScorecardEntity` instance. Pass `None` for no initial data.

#### `Session(data=None)`

Create a new `SessionEntity` instance. Pass `None` for no initial data.

#### `Simulation(data=None)`

Create a new `SimulationEntity` instance. Pass `None` for no initial data.

#### `SimulationRun(data=None)`

Create a new `SimulationRunEntity` instance. Pass `None` for no initial data.

#### `SimulationRunItem(data=None)`

Create a new `SimulationRunItemEntity` instance. Pass `None` for no initial data.

#### `SimulationSuite(data=None)`

Create a new `SimulationSuiteEntity` instance. Pass `None` for no initial data.

#### `Squad(data=None)`

Create a new `SquadEntity` instance. Pass `None` for no initial data.

#### `StructuredOutput(data=None)`

Create a new `StructuredOutputEntity` instance. Pass `None` for no initial data.

#### `Tool(data=None)`

Create a new `ToolEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AnalyticsEntity

```python
analytics = client.Analytics()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queries` | `list` | Yes | This is the list of metric queries you want to perform. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Analytics().create({
    "queries": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnalyticsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssistantEntity

```python
assistant = client.Assistant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisPlan` | `Any` | No | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `Any` | No | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `Any` | No | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `Any` | No | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `list` | No | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `dict` | No |  |
| `contentType` | `str` | No | The content-type the URL returned, when a response was received. |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `list` | No | These are the credentials that will be used for the assistant calls. |
| `credentials` | `list` | No | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `str` | No | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `list` | No | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `str` | No | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `bool` | No |  |
| `firstMessageMode` | `str` | No | This is the mode for the first message. |
| `hooks` | `list` | No | This is a set of actions that will be performed on certain events. |
| `id` | `str` | Yes | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `dict` | No |  |
| `latestVersion` | `str` | No | This is the latest version label (e.g. |
| `maxDurationSeconds` | `float` | No | This is the maximum number of seconds that the call will last. |
| `metadata` | `dict` | No | This is for metadata you want to store on the assistant. |
| `model` | `Any` | No | These are the options for the assistant's LLM. |
| `modelDeprecations` | `list` | No | Read-only. |
| `modelOutputInMessagesEnabled` | `bool` | No | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `Any` | No | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `str` | No | This is the name of the assistant. |
| `observabilityPlan` | `Any` | No | This is the plan for observability of assistant's calls. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `str` | No | Why validation failed. |
| `server` | `Any` | No | This is where Vapi will send webhooks. |
| `serverMessages` | `list` | No | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `Any` | No | This is the plan for when the assistant should start talking. |
| `status` | `float` | No | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `Any` | No | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `Any` | No | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `list` | No | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `str` | Yes | This is the background sound URL to validate. |
| `valid` | `bool` | Yes | Whether the URL currently serves a live media file. |
| `voice` | `Any` | No | These are the options for the assistant's voice. |
| `voicemailDetection` | `Any` | No | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `str` | No | This is the message that the assistant will say if the call is forwarded to voicemail. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Assistant().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
    "url": "example_url",  # str
    "valid": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Assistant().list()
for assistant in results:
    print(assistant)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Assistant().load({"id": "assistant_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Assistant().remove({"id": "assistant_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Assistant().update({
    "id": "assistant_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssistantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BoardEntity

```python
board = client.Board()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `str` | Yes | This is the unique identifier for the Board. |
| `items` | `list` | No | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `Any` | Yes | This is the layout of the Board. |
| `name` | `str` | Yes | This is the name of the Board. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `str` | No | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `Any` | No | This is the timerange override for the board. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the Board was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Board().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "layout": "example_layout",  # Any
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Board().list()
for board in results:
    print(board)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Board().load({"id": "board_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Board().remove({"id": "board_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Board().update({
    "id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallEntity

```python
call = client.Call()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis` | `Any` | No | This is the analysis of the call. |
| `artifact` | `Any` | No | These are the artifacts created from the call. |
| `artifactPlan` | `Any` | No | This is a copy of assistant artifact plan. |
| `assistant` | `Any` | No | This is the assistant that will be used for the call. |
| `assistantId` | `str` | No | This is the assistant ID that will be used for the call. |
| `assistantOverrides` | `Any` | No | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `assistantVersion` | `str` | No | This is the assistant version to use for this call. |
| `campaignId` | `str` | No | This is the campaign ID that the call belongs to. |
| `compliance` | `Any` | No | This is the compliance of the call. |
| `cost` | `float` | No | This is the cost of the call in USD. |
| `costBreakdown` | `Any` | No | This is the cost of the call in USD. |
| `costs` | `list` | No | These are the costs of individual components of the call in USD. |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `Any` | No | This is the customer that will be called. |
| `customerId` | `str` | No | This is the customer that will be called. |
| `customers` | `list` | No | This is used to issue batch calls to multiple customers. |
| `destination` | `Any` | No | This is the destination where the call ended up being transferred to. |
| `endedAt` | `str` | No | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `str` | No | This is the message that adds more context to the ended reason. |
| `endedReason` | `str` | No | This is the explanation for how the call ended. |
| `id` | `str` | Yes | This is the unique identifier for the call. |
| `messages` | `list` | No |  |
| `monitor` | `Any` | No | This is to real-time monitor the call. |
| `name` | `str` | No | This is the name of the call. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this call belongs to. |
| `phoneCallProvider` | `str` | No | This is the provider of the call. |
| `phoneCallProviderId` | `str` | No | The ID of the call as provided by the phone number service. |
| `phoneCallTransport` | `str` | No | This is the transport of the phone call. |
| `phoneNumber` | `Any` | No | This is the phone number that will be used for the call. |
| `phoneNumberId` | `str` | No | This is the phone number that will be used for the call. |
| `schedulePlan` | `Any` | No | This is the schedule plan of the call. |
| `squad` | `Any` | No | This is a squad that will be used for the call. |
| `squadId` | `str` | No | This is the squad that will be used for the call. |
| `squadOverrides` | `Any` | No | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `squadVersion` | `str` | No | This is the squad version to use for this call. |
| `startedAt` | `str` | No | This is the ISO 8601 date-time string of when the call was started. |
| `status` | `str` | No | This is the status of the call. |
| `transport` | `Any` | No | This is the transport of the call. |
| `type` | `str` | No | This is the type of call. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the call was last updated. |
| `workflow` | `Any` | No | This is a workflow that will be used for the call. |
| `workflowId` | `str` | No | This is the workflow that will be used for the call. |
| `workflowOverrides` | `Any` | No | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Call().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Call().list()
for call in results:
    print(call)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Call().load({"id": "call_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Call().remove({"id": "call_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Call().update({
    "id": "call_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CampaignEntity

```python
campaign = client.Campaign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantId` | `str` | No | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `Any` | No | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `Any` | No | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `dict` | Yes | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `float` | Yes | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `float` | Yes | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `float` | Yes | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `float` | Yes | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `float` | Yes | This is the number of calls that have been scheduled. |
| `contactCounters` | `Any` | No | These are the per-status contact counts for this campaign. |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `list` | No | These are the customers that will be called in the campaign. |
| `dialPlan` | `list` | No | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `str` | No | Optional campaign ID to duplicate config from. |
| `endedReason` | `str` | No | This is the explanation for how the campaign ended. |
| `id` | `str` | Yes | This is the unique identifier for the campaign. |
| `maxConcurrency` | `float` | No | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `str` | Yes | This is the name of the campaign. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `str` | No | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `Any` | No | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `Any` | No | This is the schedule plan for the campaign. |
| `server` | `Any` | No | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `list` | No | These are the messages that will be sent to your Server URL. |
| `squadId` | `str` | No | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `Any` | No | These are the overrides for the squad and template variables for the campaign. |
| `status` | `str` | Yes | This is the status of the campaign. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | `str` | No | This is the workflow ID that will be used for the campaign calls. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Campaign().create({
    "calls": {},  # dict
    "callsCounterEnded": 1,  # float
    "callsCounterEndedVoicemail": 1,  # float
    "callsCounterInProgress": 1,  # float
    "callsCounterQueued": 1,  # float
    "callsCounterScheduled": 1,  # float
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Campaign().list()
for campaign in results:
    print(campaign)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Campaign().load({"id": "campaign_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Campaign().remove({"id": "campaign_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Campaign().update({
    "id": "campaign_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CampaignEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatEntity

```python
chat = client.Chat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `Any` | No | This is the assistant that will be used for the chat. |
| `assistantId` | `str` | No | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `Any` | No | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `float` | No | This is the cost of the chat in USD. |
| `costs` | `list` | No | These are the costs of individual components of the chat in USD. |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `str` | Yes | This is the unique identifier for the chat. |
| `input` | `Any` | No | This is the input text for the chat. |
| `messages` | `list` | No | This is an array of messages used as context for the chat. |
| `name` | `str` | No | This is the name of the chat. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this chat belongs to. |
| `output` | `list` | No | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `str` | No | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `str` | No | This is the ID of the session that will be used for the chat. |
| `squad` | `Any` | No | This is the squad that will be used for the chat. |
| `squadId` | `str` | No | This is the squad that will be used for the chat. |
| `stream` | `bool` | No | This is a flag that determines whether the response should be streamed. |
| `transport` | `Any` | No | This is used to send the chat through a transport like SMS. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the chat was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Chat().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Chat().list()
for chat in results:
    print(chat)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Chat().load({"id": "chat_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Chat().remove({"id": "chat_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EvalEntity

```python
eval = client.Eval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `float` | Yes | This is the cost of the eval or suite run in USD. |
| `costs` | `list` | Yes | This is the break up of costs of the eval or suite run. |
| `createdAt` | `str` | Yes |  |
| `description` | `str` | No | This is the description of the eval. |
| `endedAt` | `str` | Yes |  |
| `endedMessage` | `str` | No | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `str` | Yes | This is the reason for the eval run to end. |
| `eval` | `Any` | No | This is the transient eval that will be run |
| `evalId` | `str` | No | This is the id of the eval that will be run. |
| `id` | `str` | Yes |  |
| `messages` | `list` | Yes | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `str` | No | This is the name of the eval. |
| `orgId` | `str` | Yes |  |
| `results` | `list` | Yes | This is the results of the eval or suite run. |
| `startedAt` | `str` | Yes |  |
| `status` | `str` | Yes | This is the status of the eval run. |
| `target` | `Any` | Yes | This is the target that will be run against the eval |
| `type` | `str` | Yes | This is the type of the run. |
| `updatedAt` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Eval().create({
    "cost": 1,  # float
    "costs": [],  # list
    "createdAt": "example_createdAt",  # str
    "endedAt": "example_endedAt",  # str
    "endedReason": "example_endedReason",  # str
    "id": "example_id",  # str
    "messages": [],  # list
    "orgId": "example_orgId",  # str
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
    "target": "example_target",  # Any
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Eval().list()
for eval in results:
    print(eval)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Eval().load({"id": "eval_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Eval().remove({"id": "eval_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Eval().update({
    "id": "eval_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EvalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileEntity

```python
file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `str` | No |  |
| `bytes` | `float` | No |  |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `str` | Yes | This is the unique identifier for the file. |
| `key` | `str` | No |  |
| `metadata` | `dict` | No |  |
| `mimetype` | `str` | No |  |
| `name` | `str` | No | This is the name of the file. |
| `object` | `str` | No |  |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `str` | No |  |
| `parsedTextBytes` | `float` | No |  |
| `parsedTextUrl` | `str` | No |  |
| `path` | `str` | No |  |
| `purpose` | `str` | No |  |
| `status` | `str` | No |  |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.File().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.File().list()
for file in results:
    print(file)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.File().load({"id": "file_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.File().remove({"id": "file_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.File().update({
    "id": "file_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InsightEntity

```python
insight = client.Insight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the Insight was created. |
| `id` | `str` | Yes | This is the unique identifier for the Insight. |
| `name` | `str` | No | This is the name of the Insight. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this Insight belongs to. |
| `systemKey` | `str` | No | Stable server-owned identifier for system-created insights. |
| `type` | `str` | Yes | This is the type of the Insight. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the Insight was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Insight().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Insight().list()
for insight in results:
    print(insight)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Insight().load({"id": "insight_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Insight().remove({"id": "insight_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Insight().update({
    "id": "insight_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InsightEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## KnowledgeBaseEntity

```python
knowledge_base = client.KnowledgeBase()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes |  |
| `description` | `str` | No |  |
| `files` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `orgId` | `str` | Yes |  |
| `toolId` | `str` | Yes | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.KnowledgeBase().create({
    "createdAt": "example_createdAt",  # str
    "files": [],  # list
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "toolId": "example_toolId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.KnowledgeBase().list()
for knowledge_base in results:
    print(knowledge_base)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.KnowledgeBase().load({"id": "knowledge_base_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.KnowledgeBase().remove({"id": "knowledge_base_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.KnowledgeBase().update({
    "id": "knowledge_base_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KnowledgeBaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## KnowledgeBaseV2FileEntity

```python
knowledge_base_v2_file = client.KnowledgeBaseV2File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `float` | No |  |
| `createdAt` | `str` | Yes |  |
| `fileId` | `str` | Yes |  |
| `fileName` | `str` | No |  |
| `id` | `str` | Yes |  |
| `knowledgeBaseV2Id` | `str` | Yes |  |
| `mimetype` | `str` | No |  |
| `status` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.KnowledgeBaseV2File().create({
    "id": "example_id",  # str
    "createdAt": "example_createdAt",  # str
    "fileId": "example_fileId",  # str
    "knowledgeBaseV2Id": "example_knowledgeBaseV2Id",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.KnowledgeBaseV2File().list({"id": "example"})
for knowledge_base_v2_file in results:
    print(knowledge_base_v2_file)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.KnowledgeBaseV2File().remove({"id": "id", "knowledge_base_id": "knowledge_base_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KnowledgeBaseV2FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PersonalityEntity

```python
personality = client.Personality()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `Any` | Yes | This is the full assistant configuration for this personality. |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the personality was created. |
| `id` | `str` | Yes | This is the unique identifier for the personality. |
| `name` | `str` | Yes | This is the name of the personality (e.g., "Confused Carl", "Rude Rob"). |
| `orgId` | `str` | Yes | This is the unique identifier for the organization this personality belongs to. |
| `path` | `str` | No | Optional folder path for organizing personalities. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the personality was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Personality().create({
    "assistant": "example_assistant",  # Any
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Personality().list()
for personality in results:
    print(personality)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Personality().load({"id": "personality_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Personality().remove({"id": "personality_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Personality().update({
    "id": "personality_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonalityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PhoneNumberEntity

```python
phone_number = client.PhoneNumber()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `metadata` | `Any` | Yes | Metadata about the pagination. |
| `results` | `list` | Yes | A list of phone numbers, which can be of any provider type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PhoneNumber().create({
    "metadata": "example_metadata",  # Any
    "results": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PhoneNumber().list()
for phone_number in results:
    print(phone_number)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PhoneNumber().load({"id": "phone_number_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PhoneNumber().remove({"id": "phone_number_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PhoneNumber().update({
    "id": "phone_number_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhoneNumberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProviderEntity

```python
provider = client.Provider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the provider resource was created. |
| `id` | `str` | Yes | This is the unique identifier for the provider resource. |
| `metadata` | `dict` | Yes |  |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this provider resource belongs to. |
| `provider` | `str` | Yes | This is the provider that manages this resource. |
| `resource` | `dict` | Yes | This is the full resource data from the provider's API. |
| `resourceId` | `str` | Yes | This is the provider-specific identifier for the resource. |
| `resourceName` | `str` | Yes | This is the name/type of the resource. |
| `results` | `list` | Yes |  |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the provider resource was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Provider().create({
    "provider": "example_provider",  # str
    "resource_name": "example_resource_name",  # str
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "metadata": {},  # dict
    "orgId": "example_orgId",  # str
    "resource": {},  # dict
    "resourceId": "example_resourceId",  # str
    "resourceName": "example_resourceName",  # str
    "results": [],  # list
    "updatedAt": "example_updatedAt",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Provider().load({"id": "provider_id", "provider": "provider", "resource_name": "resource_name"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Provider().remove({"id": "provider_id", "provider": "provider", "resource_name": "resource_name"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Provider().update({
    "id": "provider_id",
    "provider": "provider",
    "resource_name": "resource_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScenarioEntity

```python
scenario = client.Scenario()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `list` | Yes | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `list` | No | Hooks to run on simulation lifecycle events |
| `id` | `str` | Yes | This is the unique identifier for the scenario. |
| `instructions` | `str` | Yes | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `str` | Yes | This is the name of the scenario. |
| `orgId` | `str` | Yes | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `str` | No | Optional folder path for organizing scenarios. |
| `targetOverrides` | `Any` | No | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `list` | No | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the scenario was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Scenario().create({
    "createdAt": "example_createdAt",  # str
    "evaluations": [],  # list
    "id": "example_id",  # str
    "instructions": "example_instructions",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Scenario().list()
for scenario in results:
    print(scenario)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Scenario().load({"id": "scenario_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Scenario().remove({"id": "scenario_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Scenario().update({
    "id": "scenario_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScenarioEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScorecardEntity

```python
scorecard = client.Scorecard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `list` | No | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `str` | No | This is the description of the scorecard. |
| `id` | `str` | Yes | This is the unique identifier for the scorecard. |
| `metrics` | `list` | Yes | These are the metrics that will be used to evaluate the scorecard. |
| `name` | `str` | No | This is the name of the scorecard. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the scorecard was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Scorecard().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "metrics": [],  # list
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Scorecard().list()
for scorecard in results:
    print(scorecard)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Scorecard().load({"id": "scorecard_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Scorecard().remove({"id": "scorecard_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Scorecard().update({
    "id": "scorecard_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScorecardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SessionEntity

```python
session = client.Session()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact` | `Any` | No | These are the artifacts that were extracted from the session messages. |
| `assistant` | `Any` | No | This is the assistant configuration for this session. |
| `assistantId` | `str` | No | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `Any` | No | These are the overrides for the assistant configuration. |
| `cost` | `float` | No | This is the cost of the session in USD. |
| `costs` | `list` | No | These are the costs of individual components of the session in USD. |
| `createdAt` | `str` | Yes | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `Any` | No | This is the customer information associated with this session. |
| `customerId` | `str` | No | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `float` | No | Session expiration time in seconds. |
| `id` | `str` | Yes | This is the unique identifier for the session. |
| `messages` | `list` | No | This is an array of chat messages in the session. |
| `name` | `str` | No | This is a user-defined name for the session. |
| `orgId` | `str` | Yes | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `Any` | No | This is the phone number configuration for this session. |
| `phoneNumberId` | `str` | No | This is the ID of the phone number associated with this session. |
| `squad` | `Any` | No | This is the squad configuration for this session. |
| `squadId` | `str` | No | This is the squad ID associated with this session. |
| `status` | `str` | No | This is the current status of the session. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 timestamp indicating when the session was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Session().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Session().list()
for session in results:
    print(session)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Session().load({"id": "session_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Session().remove({"id": "session_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Session().update({
    "id": "session_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SimulationEntity

```python
simulation = client.Simulation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantId` | `str` | No | ID of the assistant to generate scenarios for |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the simulation was created. |
| `id` | `str` | Yes | This is the unique identifier for the simulation. |
| `name` | `str` | No | This is an optional friendly name for the simulation. |
| `orgId` | `str` | Yes | This is the unique identifier for the organization this simulation belongs to. |
| `path` | `str` | No | Optional folder path for organizing simulations. |
| `personalityId` | `str` | Yes | This is the ID of the personality to use for this simulation. |
| `scenarioId` | `str` | Yes | This is the ID of the scenario to use for this simulation. |
| `squadId` | `str` | No | ID of the squad to generate scenarios for |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the simulation was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Simulation().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "personalityId": "example_personalityId",  # str
    "scenarioId": "example_scenarioId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Simulation().list()
for simulation in results:
    print(simulation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Simulation().load({"id": "simulation_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Simulation().remove({"id": "simulation_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Simulation().update({
    "id": "simulation_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SimulationRunEntity

```python
simulation_run = client.SimulationRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | ISO 8601 date-time when created |
| `endedAt` | `str` | No | When the run ended |
| `endedReason` | `str` | No | Reason the run ended |
| `id` | `str` | Yes | Unique identifier for the run |
| `itemCounts` | `Any` | No | Aggregate counts of run items by status |
| `iterations` | `float` | No | Number of times to run each simulation (default: 1) |
| `orgId` | `str` | Yes | Organization ID |
| `queuedAt` | `str` | Yes | When the run was queued |
| `simulations` | `list` | Yes | Array of simulations and/or suites to run |
| `startedAt` | `str` | No | When the run started |
| `status` | `str` | Yes | Current status of the run |
| `target` | `Any` | Yes | Target to test against |
| `transport` | `Any` | No | Transport configuration for the simulation runs |
| `updatedAt` | `str` | Yes | ISO 8601 date-time when last updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SimulationRun().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "queuedAt": "example_queuedAt",  # str
    "simulations": [],  # list
    "status": "example_status",  # str
    "target": "example_target",  # Any
    "updatedAt": "example_updatedAt",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SimulationRun().load({"id": "simulation_run_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SimulationRun().update({
    "id": "simulation_run_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulationRunEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SimulationRunItemEntity

```python
simulation_run_item = client.SimulationRunItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `callId` | `str` | No | This is the ID of the target Vapi call (the assistant being tested). |
| `canceledAt` | `str` | No | This is the ISO 8601 date-time string of when the run was canceled. |
| `completedAt` | `str` | No | This is the ISO 8601 date-time string of when the run completed. |
| `configurations` | `Any` | No | This is the configuration for how this simulation run executes. |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the run item was created. |
| `failedAt` | `str` | No | This is the ISO 8601 date-time string of when the run failed. |
| `failureReason` | `str` | No | This is the reason for failure. |
| `hooks` | `list` | No | Hooks configured for this simulation run item |
| `id` | `str` | Yes | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `Any` | No | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `float` | No | This is the iteration number (1-indexed) when run with iterations > 1. |
| `metadata` | `Any` | No | This is the metadata containing snapshots and call data. |
| `orgId` | `str` | Yes | This is the unique identifier for the organization. |
| `personalityId` | `str` | No | This is the personality ID at run creation time. |
| `queuedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the run was queued. |
| `results` | `Any` | No | This is the results of the simulation run. |
| `runId` | `str` | No | This is the ID of the parent run (batch/group). |
| `scenarioId` | `str` | No | This is the scenario ID at run creation time. |
| `sessionId` | `str` | No | This is the session ID for chat-based simulations (webchat transport). |
| `simulationId` | `str` | Yes | This is the ID of the simulation this run belongs to. |
| `startedAt` | `str` | No | This is the ISO 8601 date-time string of when the run started. |
| `status` | `str` | Yes | This is the current status of the run. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the run item was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SimulationRunItem().create({
    "item_id": "example_item_id",  # str
    "run_id": "example_run_id",  # str
    "force": "example_force",  # str
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "queuedAt": "example_queuedAt",  # str
    "simulationId": "example_simulationId",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SimulationRunItem().list()
for simulation_run_item in results:
    print(simulation_run_item)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SimulationRunItem().load({"id": "simulation_run_item_id", "run_id": "run_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SimulationRunItem().update({
    "id": "simulation_run_item_id",
    "run_id": "run_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulationRunItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SimulationSuiteEntity

```python
simulation_suite = client.SimulationSuite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `str` | Yes | This is the unique identifier for the simulation suite. |
| `name` | `str` | Yes | This is the name of the simulation suite. |
| `orgId` | `str` | Yes | This is the unique identifier for the organization this suite belongs to. |
| `path` | `str` | No | Optional folder path for organizing simulation suites. |
| `simulationIds` | `list` | Yes | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `str` | No | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `list` | Yes | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the suite was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SimulationSuite().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "simulationIds": [],  # list
    "targetAssignments": [],  # list
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SimulationSuite().list()
for simulation_suite in results:
    print(simulation_suite)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SimulationSuite().load({"id": "simulation_suite_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SimulationSuite().remove({"id": "simulation_suite_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SimulationSuite().update({
    "id": "simulation_suite_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimulationSuiteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SquadEntity

```python
squad = client.Squad()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `str` | Yes | This is the unique identifier for the squad. |
| `latestVersion` | `str` | No | This is the latest version label (e.g. |
| `members` | `list` | Yes | This is the list of assistants that make up the squad. |
| `membersOverrides` | `Any` | No | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `list` | No | Read-only. |
| `name` | `str` | No | This is the name of the squad. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the squad was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Squad().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "members": [],  # list
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Squad().list()
for squad in results:
    print(squad)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Squad().load({"id": "squad_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Squad().remove({"id": "squad_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Squad().update({
    "id": "squad_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SquadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StructuredOutputEntity

```python
structured_output = client.StructuredOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `list` | No | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `Any` | No | Compliance configuration for this output. |
| `conditions` | `list` | No | These are the conditions that gate the execution of this structured output. |
| `createdAt` | `str` | Yes | This is the ISO 8601 date-time string of when the structured output was created. |
| `description` | `str` | No | This is the description of what the structured output extracts. |
| `id` | `str` | Yes | This is the unique identifier for the structured output. |
| `model` | `Any` | No | This is the model that will be used to extract the structured output. |
| `name` | `str` | Yes | This is the name of the structured output. |
| `orgId` | `str` | Yes | This is the unique identifier for the org that this structured output belongs to. |
| `regex` | `str` | No | This is the regex pattern to match against the transcript. |
| `schema` | `Any` | Yes | This is the JSON Schema definition for the structured output. |
| `type` | `str` | No | This is the type of structured output. |
| `updatedAt` | `str` | Yes | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `workflowIds` | `list` | No | These are the workflow IDs that this structured output is linked to. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StructuredOutput().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "schema": "example_schema",  # Any
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.StructuredOutput().list()
for structured_output in results:
    print(structured_output)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.StructuredOutput().load({"id": "structured_output_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.StructuredOutput().remove({"id": "structured_output_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.StructuredOutput().update({
    "id": "structured_output_id",
    "schema_override": "schema_override",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StructuredOutputEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ToolEntity

```python
tool = client.Tool()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Tool().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Tool().list()
for tool in results:
    print(tool)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Tool().load({"id": "tool_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Tool().remove({"id": "tool_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Tool().update({
    "id": "tool_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ToolEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = VapiSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

