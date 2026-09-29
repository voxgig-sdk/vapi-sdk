# Vapi Python SDK



The Python SDK for the Vapi API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Analytics()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/vapi-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from vapi_sdk import VapiSDK

client = VapiSDK({
    "apikey": os.environ.get("VAPI_APIKEY"),
})
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Analytics().create({"queries": []})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    provider = client.Provider().load({"provider": "example", "resource_name": "example"})
    print(provider)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = VapiSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
provider = client.Provider().load({"id": "test01", "provider": "example", "resource_name": "example"})
# provider contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = VapiSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### VapiSDK

```python
from vapi_sdk import VapiSDK

client = VapiSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = VapiSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### VapiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Analytics` | `(data) -> AnalyticsEntity` | Create an Analytics entity instance. |
| `Assistant` | `(data) -> AssistantEntity` | Create an Assistant entity instance. |
| `Board` | `(data) -> BoardEntity` | Create a Board entity instance. |
| `Call` | `(data) -> CallEntity` | Create a Call entity instance. |
| `Campaign` | `(data) -> CampaignEntity` | Create a Campaign entity instance. |
| `Chat` | `(data) -> ChatEntity` | Create a Chat entity instance. |
| `Eval` | `(data) -> EvalEntity` | Create an Eval entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `Insight` | `(data) -> InsightEntity` | Create an Insight entity instance. |
| `KnowledgeBase` | `(data) -> KnowledgeBaseEntity` | Create a KnowledgeBase entity instance. |
| `KnowledgeBaseV2File` | `(data) -> KnowledgeBaseV2FileEntity` | Create a KnowledgeBaseV2File entity instance. |
| `Personality` | `(data) -> PersonalityEntity` | Create a Personality entity instance. |
| `PhoneNumber` | `(data) -> PhoneNumberEntity` | Create a PhoneNumber entity instance. |
| `Provider` | `(data) -> ProviderEntity` | Create a Provider entity instance. |
| `Scenario` | `(data) -> ScenarioEntity` | Create a Scenario entity instance. |
| `Scorecard` | `(data) -> ScorecardEntity` | Create a Scorecard entity instance. |
| `Session` | `(data) -> SessionEntity` | Create a Session entity instance. |
| `Simulation` | `(data) -> SimulationEntity` | Create a Simulation entity instance. |
| `SimulationRun` | `(data) -> SimulationRunEntity` | Create a SimulationRun entity instance. |
| `SimulationRunItem` | `(data) -> SimulationRunItemEntity` | Create a SimulationRunItem entity instance. |
| `SimulationSuite` | `(data) -> SimulationSuiteEntity` | Create a SimulationSuite entity instance. |
| `Squad` | `(data) -> SquadEntity` | Create a Squad entity instance. |
| `StructuredOutput` | `(data) -> StructuredOutputEntity` | Create a StructuredOutput entity instance. |
| `Tool` | `(data) -> ToolEntity` | Create a Tool entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Analytics

| Field | Description |
| --- | --- |
| `queries` | This is the list of metric queries you want to perform. |

Operations: Create.

API path: `/analytics`

#### Assistant

| Field | Description |
| --- | --- |
| `analysisPlan` | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` |  |
| `contentType` | The content-type the URL returned, when a response was received. |
| `createdAt` | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | These are the credentials that will be used for the assistant calls. |
| `credentials` | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` |  |
| `firstMessageMode` | This is the mode for the first message. |
| `hooks` | This is a set of actions that will be performed on certain events. |
| `id` | This is the unique identifier for the assistant. |
| `keypadInputPlan` |  |
| `latestVersion` | This is the latest version label (e.g. |
| `maxDurationSeconds` | This is the maximum number of seconds that the call will last. |
| `metadata` | This is for metadata you want to store on the assistant. |
| `model` | These are the options for the assistant's LLM. |
| `modelDeprecations` | Read-only. |
| `modelOutputInMessagesEnabled` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | This is the name of the assistant. |
| `observabilityPlan` | This is the plan for observability of assistant's calls. |
| `orgId` | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | Why validation failed. |
| `server` | This is where Vapi will send webhooks. |
| `serverMessages` | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | This is the plan for when the assistant should start talking. |
| `status` | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | These are the options for the assistant's transcriber. |
| `transportConfigurations` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | This is the background sound URL to validate. |
| `valid` | Whether the URL currently serves a live media file. |
| `voice` | These are the options for the assistant's voice. |
| `voicemailDetection` | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | This is the message that the assistant will say if the call is forwarded to voicemail. |

Operations: Create, List, Load, Remove, Update.

API path: `/assistant`

#### Board

| Field | Description |
| --- | --- |
| `createdAt` | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | This is the unique identifier for the Board. |
| `items` | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | This is the layout of the Board. |
| `name` | This is the name of the Board. |
| `orgId` | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | This is the timerange override for the board. |
| `updatedAt` | This is the ISO 8601 date-time string of when the Board was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/reporting/board`

#### Call

| Field | Description |
| --- | --- |
| `analysis` | This is the analysis of the call. |
| `artifact` | These are the artifacts created from the call. |
| `artifactPlan` | This is a copy of assistant artifact plan. |
| `assistant` | This is the assistant that will be used for the call. |
| `assistantId` | This is the assistant ID that will be used for the call. |
| `assistantOverrides` | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `assistantVersion` | This is the assistant version to use for this call. |
| `campaignId` | This is the campaign ID that the call belongs to. |
| `compliance` | This is the compliance of the call. |
| `cost` | This is the cost of the call in USD. |
| `costBreakdown` | This is the cost of the call in USD. |
| `costs` | These are the costs of individual components of the call in USD. |
| `createdAt` | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | This is the customer that will be called. |
| `customerId` | This is the customer that will be called. |
| `customers` | This is used to issue batch calls to multiple customers. |
| `destination` | This is the destination where the call ended up being transferred to. |
| `endedAt` | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | This is the message that adds more context to the ended reason. |
| `endedReason` | This is the explanation for how the call ended. |
| `id` | This is the unique identifier for the call. |
| `messages` |  |
| `monitor` | This is to real-time monitor the call. |
| `name` | This is the name of the call. |
| `orgId` | This is the unique identifier for the org that this call belongs to. |
| `phoneCallProvider` | This is the provider of the call. |
| `phoneCallProviderId` | The ID of the call as provided by the phone number service. |
| `phoneCallTransport` | This is the transport of the phone call. |
| `phoneNumber` | This is the phone number that will be used for the call. |
| `phoneNumberId` | This is the phone number that will be used for the call. |
| `schedulePlan` | This is the schedule plan of the call. |
| `squad` | This is a squad that will be used for the call. |
| `squadId` | This is the squad that will be used for the call. |
| `squadOverrides` | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `squadVersion` | This is the squad version to use for this call. |
| `startedAt` | This is the ISO 8601 date-time string of when the call was started. |
| `status` | This is the status of the call. |
| `transport` | This is the transport of the call. |
| `type` | This is the type of call. |
| `updatedAt` | This is the ISO 8601 date-time string of when the call was last updated. |
| `workflow` | This is a workflow that will be used for the call. |
| `workflowId` | This is the workflow that will be used for the call. |
| `workflowOverrides` | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

Operations: Create, List, Load, Remove, Update.

API path: `/call`

#### Campaign

| Field | Description |
| --- | --- |
| `assistantId` | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | This is the number of calls that have been in progress. |
| `callsCounterQueued` | This is the number of calls that have been queued. |
| `callsCounterScheduled` | This is the number of calls that have been scheduled. |
| `contactCounters` | These are the per-status contact counts for this campaign. |
| `createdAt` | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | These are the customers that will be called in the campaign. |
| `dialPlan` | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | Optional campaign ID to duplicate config from. |
| `endedReason` | This is the explanation for how the campaign ended. |
| `id` | This is the unique identifier for the campaign. |
| `maxConcurrency` | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | This is the name of the campaign. |
| `orgId` | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | This is the schedule plan for the campaign. |
| `server` | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | These are the messages that will be sent to your Server URL. |
| `squadId` | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | These are the overrides for the squad and template variables for the campaign. |
| `status` | This is the status of the campaign. |
| `updatedAt` | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | This is the workflow ID that will be used for the campaign calls. |

Operations: Create, List, Load, Remove, Update.

API path: `/campaign`

#### Chat

| Field | Description |
| --- | --- |
| `assistant` | This is the assistant that will be used for the chat. |
| `assistantId` | This is the assistant that will be used for the chat. |
| `assistantOverrides` | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | This is the cost of the chat in USD. |
| `costs` | These are the costs of individual components of the chat in USD. |
| `createdAt` | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | This is the unique identifier for the chat. |
| `input` | This is the input text for the chat. |
| `messages` | This is an array of messages used as context for the chat. |
| `name` | This is the name of the chat. |
| `orgId` | This is the unique identifier for the org that this chat belongs to. |
| `output` | This is the output messages generated by the system in response to the input. |
| `previousChatId` | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | This is the ID of the session that will be used for the chat. |
| `squad` | This is the squad that will be used for the chat. |
| `squadId` | This is the squad that will be used for the chat. |
| `stream` | This is a flag that determines whether the response should be streamed. |
| `transport` | This is used to send the chat through a transport like SMS. |
| `updatedAt` | This is the ISO 8601 date-time string of when the chat was last updated. |

Operations: Create, List, Load, Remove.

API path: `/chat`

#### Eval

| Field | Description |
| --- | --- |
| `cost` | This is the cost of the eval or suite run in USD. |
| `costs` | This is the break up of costs of the eval or suite run. |
| `createdAt` |  |
| `description` | This is the description of the eval. |
| `endedAt` |  |
| `endedMessage` | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | This is the reason for the eval run to end. |
| `eval` | This is the transient eval that will be run |
| `evalId` | This is the id of the eval that will be run. |
| `id` |  |
| `messages` | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | This is the name of the eval. |
| `orgId` |  |
| `results` | This is the results of the eval or suite run. |
| `startedAt` |  |
| `status` | This is the status of the eval run. |
| `target` | This is the target that will be run against the eval |
| `type` | This is the type of the run. |
| `updatedAt` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/eval`

#### File

| Field | Description |
| --- | --- |
| `bucket` |  |
| `bytes` |  |
| `createdAt` | This is the ISO 8601 date-time string of when the file was created. |
| `id` | This is the unique identifier for the file. |
| `key` |  |
| `metadata` |  |
| `mimetype` |  |
| `name` | This is the name of the file. |
| `object` |  |
| `orgId` | This is the unique identifier for the org that this file belongs to. |
| `originalName` |  |
| `parsedTextBytes` |  |
| `parsedTextUrl` |  |
| `path` |  |
| `purpose` |  |
| `status` |  |
| `updatedAt` | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/file`

#### Insight

| Field | Description |
| --- | --- |
| `createdAt` | This is the ISO 8601 date-time string of when the Insight was created. |
| `id` | This is the unique identifier for the Insight. |
| `name` | This is the name of the Insight. |
| `orgId` | This is the unique identifier for the org that this Insight belongs to. |
| `systemKey` | Stable server-owned identifier for system-created insights. |
| `type` | This is the type of the Insight. |
| `updatedAt` | This is the ISO 8601 date-time string of when the Insight was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/reporting/insight/{id}/run`

#### KnowledgeBase

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `description` |  |
| `files` |  |
| `id` |  |
| `name` |  |
| `orgId` |  |
| `toolId` | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/knowledge-base`

#### KnowledgeBaseV2File

| Field | Description |
| --- | --- |
| `bytes` |  |
| `createdAt` |  |
| `fileId` |  |
| `fileName` |  |
| `id` |  |
| `knowledgeBaseV2Id` |  |
| `mimetype` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create, List, Remove.

API path: `/v2/knowledge-base/{id}/file/{fileId}/retry`

#### Personality

| Field | Description |
| --- | --- |
| `assistant` | This is the full assistant configuration for this personality. |
| `createdAt` | This is the ISO 8601 date-time string of when the personality was created. |
| `id` | This is the unique identifier for the personality. |
| `name` | This is the name of the personality (e.g., "Confused Carl", "Rude Rob"). |
| `orgId` | This is the unique identifier for the organization this personality belongs to. |
| `path` | Optional folder path for organizing personalities. |
| `updatedAt` | This is the ISO 8601 date-time string of when the personality was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/eval/simulation/personality`

#### PhoneNumber

| Field | Description |
| --- | --- |
| `id` |  |
| `metadata` | Metadata about the pagination. |
| `results` | A list of phone numbers, which can be of any provider type. |

Operations: Create, List, Load, Remove, Update.

API path: `/phone-number`

#### Provider

| Field | Description |
| --- | --- |
| `createdAt` | This is the ISO 8601 date-time string of when the provider resource was created. |
| `id` | This is the unique identifier for the provider resource. |
| `metadata` |  |
| `orgId` | This is the unique identifier for the org that this provider resource belongs to. |
| `provider` | This is the provider that manages this resource. |
| `resource` | This is the full resource data from the provider's API. |
| `resourceId` | This is the provider-specific identifier for the resource. |
| `resourceName` | This is the name/type of the resource. |
| `results` |  |
| `updatedAt` | This is the ISO 8601 date-time string of when the provider resource was last updated. |

Operations: Create, Load, Remove, Update.

API path: `/provider/{provider}/{resourceName}`

#### Scenario

| Field | Description |
| --- | --- |
| `createdAt` | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | Hooks to run on simulation lifecycle events |
| `id` | This is the unique identifier for the scenario. |
| `instructions` | This is the script/instructions for the tester to follow during the simulation. |
| `name` | This is the name of the scenario. |
| `orgId` | This is the unique identifier for the organization this scenario belongs to. |
| `path` | Optional folder path for organizing scenarios. |
| `targetOverrides` | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | This is the ISO 8601 date-time string of when the scenario was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/eval/simulation/scenario`

#### Scorecard

| Field | Description |
| --- | --- |
| `assistantIds` | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | This is the description of the scorecard. |
| `id` | This is the unique identifier for the scorecard. |
| `metrics` | These are the metrics that will be used to evaluate the scorecard. |
| `name` | This is the name of the scorecard. |
| `orgId` | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | This is the ISO 8601 date-time string of when the scorecard was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/observability/scorecard`

#### Session

| Field | Description |
| --- | --- |
| `artifact` | These are the artifacts that were extracted from the session messages. |
| `assistant` | This is the assistant configuration for this session. |
| `assistantId` | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | These are the overrides for the assistant configuration. |
| `cost` | This is the cost of the session in USD. |
| `costs` | These are the costs of individual components of the session in USD. |
| `createdAt` | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | This is the customer information associated with this session. |
| `customerId` | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | Session expiration time in seconds. |
| `id` | This is the unique identifier for the session. |
| `messages` | This is an array of chat messages in the session. |
| `name` | This is a user-defined name for the session. |
| `orgId` | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | This is the phone number configuration for this session. |
| `phoneNumberId` | This is the ID of the phone number associated with this session. |
| `squad` | This is the squad configuration for this session. |
| `squadId` | This is the squad ID associated with this session. |
| `status` | This is the current status of the session. |
| `updatedAt` | This is the ISO 8601 timestamp indicating when the session was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/session`

#### Simulation

| Field | Description |
| --- | --- |
| `assistantId` | ID of the assistant to generate scenarios for |
| `createdAt` | This is the ISO 8601 date-time string of when the simulation was created. |
| `id` | This is the unique identifier for the simulation. |
| `name` | This is an optional friendly name for the simulation. |
| `orgId` | This is the unique identifier for the organization this simulation belongs to. |
| `path` | Optional folder path for organizing simulations. |
| `personalityId` | This is the ID of the personality to use for this simulation. |
| `scenarioId` | This is the ID of the scenario to use for this simulation. |
| `squadId` | ID of the squad to generate scenarios for |
| `updatedAt` | This is the ISO 8601 date-time string of when the simulation was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/eval/simulation`

#### SimulationRun

| Field | Description |
| --- | --- |
| `createdAt` | ISO 8601 date-time when created |
| `endedAt` | When the run ended |
| `endedReason` | Reason the run ended |
| `id` | Unique identifier for the run |
| `itemCounts` | Aggregate counts of run items by status |
| `iterations` | Number of times to run each simulation (default: 1) |
| `orgId` | Organization ID |
| `queuedAt` | When the run was queued |
| `simulations` | Array of simulations and/or suites to run |
| `startedAt` | When the run started |
| `status` | Current status of the run |
| `target` | Target to test against |
| `transport` | Transport configuration for the simulation runs |
| `updatedAt` | ISO 8601 date-time when last updated |

Operations: Create, Load, Update.

API path: `/eval/simulation/run`

#### SimulationRunItem

| Field | Description |
| --- | --- |
| `callId` | This is the ID of the target Vapi call (the assistant being tested). |
| `canceledAt` | This is the ISO 8601 date-time string of when the run was canceled. |
| `completedAt` | This is the ISO 8601 date-time string of when the run completed. |
| `configurations` | This is the configuration for how this simulation run executes. |
| `createdAt` | This is the ISO 8601 date-time string of when the run item was created. |
| `failedAt` | This is the ISO 8601 date-time string of when the run failed. |
| `failureReason` | This is the reason for failure. |
| `hooks` | Hooks configured for this simulation run item |
| `id` | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | This is the iteration number (1-indexed) when run with iterations > 1. |
| `metadata` | This is the metadata containing snapshots and call data. |
| `orgId` | This is the unique identifier for the organization. |
| `personalityId` | This is the personality ID at run creation time. |
| `queuedAt` | This is the ISO 8601 date-time string of when the run was queued. |
| `results` | This is the results of the simulation run. |
| `runId` | This is the ID of the parent run (batch/group). |
| `scenarioId` | This is the scenario ID at run creation time. |
| `sessionId` | This is the session ID for chat-based simulations (webchat transport). |
| `simulationId` | This is the ID of the simulation this run belongs to. |
| `startedAt` | This is the ISO 8601 date-time string of when the run started. |
| `status` | This is the current status of the run. |
| `updatedAt` | This is the ISO 8601 date-time string of when the run item was last updated. |

Operations: Create, List, Load, Update.

API path: `/eval/simulation/run/{id}/item/{itemId}/generate`

#### SimulationSuite

| Field | Description |
| --- | --- |
| `createdAt` | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | This is the unique identifier for the simulation suite. |
| `name` | This is the name of the simulation suite. |
| `orgId` | This is the unique identifier for the organization this suite belongs to. |
| `path` | Optional folder path for organizing simulation suites. |
| `simulationIds` | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | This is the Slack webhook URL for notifications. |
| `targetAssignments` | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | This is the ISO 8601 date-time string of when the suite was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/eval/simulation/suite/{id}/duplicate`

#### Squad

| Field | Description |
| --- | --- |
| `createdAt` | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | This is the unique identifier for the squad. |
| `latestVersion` | This is the latest version label (e.g. |
| `members` | This is the list of assistants that make up the squad. |
| `membersOverrides` | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | Read-only. |
| `name` | This is the name of the squad. |
| `orgId` | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | This is the ISO 8601 date-time string of when the squad was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/squad`

#### StructuredOutput

| Field | Description |
| --- | --- |
| `assistantIds` | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | Compliance configuration for this output. |
| `conditions` | These are the conditions that gate the execution of this structured output. |
| `createdAt` | This is the ISO 8601 date-time string of when the structured output was created. |
| `description` | This is the description of what the structured output extracts. |
| `id` | This is the unique identifier for the structured output. |
| `model` | This is the model that will be used to extract the structured output. |
| `name` | This is the name of the structured output. |
| `orgId` | This is the unique identifier for the org that this structured output belongs to. |
| `regex` | This is the regex pattern to match against the transcript. |
| `schema` | This is the JSON Schema definition for the structured output. |
| `type` | This is the type of structured output. |
| `updatedAt` | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `workflowIds` | These are the workflow IDs that this structured output is linked to. |

Operations: Create, List, Load, Remove, Update.

API path: `/structured-output`

#### Tool

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/tool`



## Entities


### Analytics

Create an instance: `analytics = client.Analytics()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queries` | `list` | This is the list of metric queries you want to perform. |

#### Example: Create

```python
analytics = client.Analytics().create({
    "queries": [],  # list
})
```


### Assistant

Create an instance: `assistant = client.Assistant()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysisPlan` | `Any` | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `Any` | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `Any` | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `Any` | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `list` | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `dict` |  |
| `contentType` | `str` | The content-type the URL returned, when a response was received. |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `list` | These are the credentials that will be used for the assistant calls. |
| `credentials` | `list` | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `str` | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `list` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `str` | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `bool` |  |
| `firstMessageMode` | `str` | This is the mode for the first message. |
| `hooks` | `list` | This is a set of actions that will be performed on certain events. |
| `id` | `str` | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `dict` |  |
| `latestVersion` | `str` | This is the latest version label (e.g. |
| `maxDurationSeconds` | `float` | This is the maximum number of seconds that the call will last. |
| `metadata` | `dict` | This is for metadata you want to store on the assistant. |
| `model` | `Any` | These are the options for the assistant's LLM. |
| `modelDeprecations` | `list` | Read-only. |
| `modelOutputInMessagesEnabled` | `bool` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `Any` | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `str` | This is the name of the assistant. |
| `observabilityPlan` | `Any` | This is the plan for observability of assistant's calls. |
| `orgId` | `str` | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `str` | Why validation failed. |
| `server` | `Any` | This is where Vapi will send webhooks. |
| `serverMessages` | `list` | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `Any` | This is the plan for when the assistant should start talking. |
| `status` | `float` | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `Any` | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `Any` | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `list` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `str` | This is the background sound URL to validate. |
| `valid` | `bool` | Whether the URL currently serves a live media file. |
| `voice` | `Any` | These are the options for the assistant's voice. |
| `voicemailDetection` | `Any` | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `str` | This is the message that the assistant will say if the call is forwarded to voicemail. |

#### Example: Load

```python
assistant = client.Assistant().load({"id": "assistant_id"})
```

#### Example: List

```python
assistants = client.Assistant().list()
```

#### Example: Create

```python
assistant = client.Assistant().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
    "url": "example_url",  # str
    "valid": True,  # bool
})
```


### Board

Create an instance: `board = client.Board()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `str` | This is the unique identifier for the Board. |
| `items` | `list` | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `Any` | This is the layout of the Board. |
| `name` | `str` | This is the name of the Board. |
| `orgId` | `str` | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `str` | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `Any` | This is the timerange override for the board. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the Board was last updated. |

#### Example: Load

```python
board = client.Board().load({"id": "board_id"})
```

#### Example: List

```python
boards = client.Board().list()
```

#### Example: Create

```python
board = client.Board().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "layout": "example_layout",  # Any
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Call

Create an instance: `call = client.Call()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis` | `Any` | This is the analysis of the call. |
| `artifact` | `Any` | These are the artifacts created from the call. |
| `artifactPlan` | `Any` | This is a copy of assistant artifact plan. |
| `assistant` | `Any` | This is the assistant that will be used for the call. |
| `assistantId` | `str` | This is the assistant ID that will be used for the call. |
| `assistantOverrides` | `Any` | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `assistantVersion` | `str` | This is the assistant version to use for this call. |
| `campaignId` | `str` | This is the campaign ID that the call belongs to. |
| `compliance` | `Any` | This is the compliance of the call. |
| `cost` | `float` | This is the cost of the call in USD. |
| `costBreakdown` | `Any` | This is the cost of the call in USD. |
| `costs` | `list` | These are the costs of individual components of the call in USD. |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `Any` | This is the customer that will be called. |
| `customerId` | `str` | This is the customer that will be called. |
| `customers` | `list` | This is used to issue batch calls to multiple customers. |
| `destination` | `Any` | This is the destination where the call ended up being transferred to. |
| `endedAt` | `str` | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `str` | This is the message that adds more context to the ended reason. |
| `endedReason` | `str` | This is the explanation for how the call ended. |
| `id` | `str` | This is the unique identifier for the call. |
| `messages` | `list` |  |
| `monitor` | `Any` | This is to real-time monitor the call. |
| `name` | `str` | This is the name of the call. |
| `orgId` | `str` | This is the unique identifier for the org that this call belongs to. |
| `phoneCallProvider` | `str` | This is the provider of the call. |
| `phoneCallProviderId` | `str` | The ID of the call as provided by the phone number service. |
| `phoneCallTransport` | `str` | This is the transport of the phone call. |
| `phoneNumber` | `Any` | This is the phone number that will be used for the call. |
| `phoneNumberId` | `str` | This is the phone number that will be used for the call. |
| `schedulePlan` | `Any` | This is the schedule plan of the call. |
| `squad` | `Any` | This is a squad that will be used for the call. |
| `squadId` | `str` | This is the squad that will be used for the call. |
| `squadOverrides` | `Any` | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `squadVersion` | `str` | This is the squad version to use for this call. |
| `startedAt` | `str` | This is the ISO 8601 date-time string of when the call was started. |
| `status` | `str` | This is the status of the call. |
| `transport` | `Any` | This is the transport of the call. |
| `type` | `str` | This is the type of call. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the call was last updated. |
| `workflow` | `Any` | This is a workflow that will be used for the call. |
| `workflowId` | `str` | This is the workflow that will be used for the call. |
| `workflowOverrides` | `Any` | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

#### Example: Load

```python
call = client.Call().load({"id": "call_id"})
```

#### Example: List

```python
calls = client.Call().list()
```

#### Example: Create

```python
call = client.Call().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Campaign

Create an instance: `campaign = client.Campaign()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantId` | `str` | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `Any` | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `Any` | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `dict` | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `float` | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `float` | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `float` | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `float` | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `float` | This is the number of calls that have been scheduled. |
| `contactCounters` | `Any` | These are the per-status contact counts for this campaign. |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `list` | These are the customers that will be called in the campaign. |
| `dialPlan` | `list` | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `str` | Optional campaign ID to duplicate config from. |
| `endedReason` | `str` | This is the explanation for how the campaign ended. |
| `id` | `str` | This is the unique identifier for the campaign. |
| `maxConcurrency` | `float` | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `str` | This is the name of the campaign. |
| `orgId` | `str` | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `str` | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `Any` | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `Any` | This is the schedule plan for the campaign. |
| `server` | `Any` | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `list` | These are the messages that will be sent to your Server URL. |
| `squadId` | `str` | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `Any` | These are the overrides for the squad and template variables for the campaign. |
| `status` | `str` | This is the status of the campaign. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | `str` | This is the workflow ID that will be used for the campaign calls. |

#### Example: Load

```python
campaign = client.Campaign().load({"id": "campaign_id"})
```

#### Example: List

```python
campaigns = client.Campaign().list()
```

#### Example: Create

```python
campaign = client.Campaign().create({
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


### Chat

Create an instance: `chat = client.Chat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistant` | `Any` | This is the assistant that will be used for the chat. |
| `assistantId` | `str` | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `Any` | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `float` | This is the cost of the chat in USD. |
| `costs` | `list` | These are the costs of individual components of the chat in USD. |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `str` | This is the unique identifier for the chat. |
| `input` | `Any` | This is the input text for the chat. |
| `messages` | `list` | This is an array of messages used as context for the chat. |
| `name` | `str` | This is the name of the chat. |
| `orgId` | `str` | This is the unique identifier for the org that this chat belongs to. |
| `output` | `list` | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `str` | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `str` | This is the ID of the session that will be used for the chat. |
| `squad` | `Any` | This is the squad that will be used for the chat. |
| `squadId` | `str` | This is the squad that will be used for the chat. |
| `stream` | `bool` | This is a flag that determines whether the response should be streamed. |
| `transport` | `Any` | This is used to send the chat through a transport like SMS. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the chat was last updated. |

#### Example: Load

```python
chat = client.Chat().load({"id": "chat_id"})
```

#### Example: List

```python
chats = client.Chat().list()
```

#### Example: Create

```python
chat = client.Chat().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Eval

Create an instance: `eval = client.Eval()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cost` | `float` | This is the cost of the eval or suite run in USD. |
| `costs` | `list` | This is the break up of costs of the eval or suite run. |
| `createdAt` | `str` |  |
| `description` | `str` | This is the description of the eval. |
| `endedAt` | `str` |  |
| `endedMessage` | `str` | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `str` | This is the reason for the eval run to end. |
| `eval` | `Any` | This is the transient eval that will be run |
| `evalId` | `str` | This is the id of the eval that will be run. |
| `id` | `str` |  |
| `messages` | `list` | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `str` | This is the name of the eval. |
| `orgId` | `str` |  |
| `results` | `list` | This is the results of the eval or suite run. |
| `startedAt` | `str` |  |
| `status` | `str` | This is the status of the eval run. |
| `target` | `Any` | This is the target that will be run against the eval |
| `type` | `str` | This is the type of the run. |
| `updatedAt` | `str` |  |

#### Example: Load

```python
eval = client.Eval().load({"id": "eval_id"})
```

#### Example: List

```python
evals = client.Eval().list()
```

#### Example: Create

```python
eval = client.Eval().create({
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


### File

Create an instance: `file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bucket` | `str` |  |
| `bytes` | `float` |  |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `str` | This is the unique identifier for the file. |
| `key` | `str` |  |
| `metadata` | `dict` |  |
| `mimetype` | `str` |  |
| `name` | `str` | This is the name of the file. |
| `object` | `str` |  |
| `orgId` | `str` | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `str` |  |
| `parsedTextBytes` | `float` |  |
| `parsedTextUrl` | `str` |  |
| `path` | `str` |  |
| `purpose` | `str` |  |
| `status` | `str` |  |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `str` |  |

#### Example: Load

```python
file = client.File().load({"id": "file_id"})
```

#### Example: List

```python
files = client.File().list()
```

#### Example: Create

```python
file = client.File().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Insight

Create an instance: `insight = client.Insight()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the Insight was created. |
| `id` | `str` | This is the unique identifier for the Insight. |
| `name` | `str` | This is the name of the Insight. |
| `orgId` | `str` | This is the unique identifier for the org that this Insight belongs to. |
| `systemKey` | `str` | Stable server-owned identifier for system-created insights. |
| `type` | `str` | This is the type of the Insight. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the Insight was last updated. |

#### Example: Load

```python
insight = client.Insight().load({"id": "insight_id"})
```

#### Example: List

```python
insights = client.Insight().list()
```

#### Example: Create

```python
insight = client.Insight().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### KnowledgeBase

Create an instance: `knowledge_base = client.KnowledgeBase()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` |  |
| `description` | `str` |  |
| `files` | `list` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `orgId` | `str` |  |
| `toolId` | `str` | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` | `str` |  |

#### Example: Load

```python
knowledge_base = client.KnowledgeBase().load({"id": "knowledge_base_id"})
```

#### Example: List

```python
knowledge_bases = client.KnowledgeBase().list()
```

#### Example: Create

```python
knowledge_base = client.KnowledgeBase().create({
    "createdAt": "example_createdAt",  # str
    "files": [],  # list
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "toolId": "example_toolId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### KnowledgeBaseV2File

Create an instance: `knowledge_base_v2_file = client.KnowledgeBaseV2File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bytes` | `float` |  |
| `createdAt` | `str` |  |
| `fileId` | `str` |  |
| `fileName` | `str` |  |
| `id` | `str` |  |
| `knowledgeBaseV2Id` | `str` |  |
| `mimetype` | `str` |  |
| `status` | `str` |  |
| `updatedAt` | `str` |  |

#### Example: List

```python
knowledge_base_v2_files = client.KnowledgeBaseV2File().list({"id": "example"})
```

#### Example: Create

```python
knowledge_base_v2_file = client.KnowledgeBaseV2File().create({
    "id": "example_id",  # str
    "createdAt": "example_createdAt",  # str
    "fileId": "example_fileId",  # str
    "knowledgeBaseV2Id": "example_knowledgeBaseV2Id",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Personality

Create an instance: `personality = client.Personality()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistant` | `Any` | This is the full assistant configuration for this personality. |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the personality was created. |
| `id` | `str` | This is the unique identifier for the personality. |
| `name` | `str` | This is the name of the personality (e.g., "Confused Carl", "Rude Rob"). |
| `orgId` | `str` | This is the unique identifier for the organization this personality belongs to. |
| `path` | `str` | Optional folder path for organizing personalities. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the personality was last updated. |

#### Example: Load

```python
personality = client.Personality().load({"id": "personality_id"})
```

#### Example: List

```python
personalitys = client.Personality().list()
```

#### Example: Create

```python
personality = client.Personality().create({
    "assistant": "example_assistant",  # Any
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### PhoneNumber

Create an instance: `phone_number = client.PhoneNumber()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `metadata` | `Any` | Metadata about the pagination. |
| `results` | `list` | A list of phone numbers, which can be of any provider type. |

#### Example: Load

```python
phone_number = client.PhoneNumber().load({"id": "phone_number_id"})
```

#### Example: List

```python
phone_numbers = client.PhoneNumber().list()
```

#### Example: Create

```python
phone_number = client.PhoneNumber().create({
    "metadata": "example_metadata",  # Any
    "results": [],  # list
})
```


### Provider

Create an instance: `provider = client.Provider()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the provider resource was created. |
| `id` | `str` | This is the unique identifier for the provider resource. |
| `metadata` | `dict` |  |
| `orgId` | `str` | This is the unique identifier for the org that this provider resource belongs to. |
| `provider` | `str` | This is the provider that manages this resource. |
| `resource` | `dict` | This is the full resource data from the provider's API. |
| `resourceId` | `str` | This is the provider-specific identifier for the resource. |
| `resourceName` | `str` | This is the name/type of the resource. |
| `results` | `list` |  |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the provider resource was last updated. |

#### Example: Load

```python
provider = client.Provider().load({"id": "provider_id", "provider": "provider", "resource_name": "resource_name"})
```

#### Example: Create

```python
provider = client.Provider().create({
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


### Scenario

Create an instance: `scenario = client.Scenario()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `list` | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `list` | Hooks to run on simulation lifecycle events |
| `id` | `str` | This is the unique identifier for the scenario. |
| `instructions` | `str` | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `str` | This is the name of the scenario. |
| `orgId` | `str` | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `str` | Optional folder path for organizing scenarios. |
| `targetOverrides` | `Any` | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `list` | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the scenario was last updated. |

#### Example: Load

```python
scenario = client.Scenario().load({"id": "scenario_id"})
```

#### Example: List

```python
scenarios = client.Scenario().list()
```

#### Example: Create

```python
scenario = client.Scenario().create({
    "createdAt": "example_createdAt",  # str
    "evaluations": [],  # list
    "id": "example_id",  # str
    "instructions": "example_instructions",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Scorecard

Create an instance: `scorecard = client.Scorecard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantIds` | `list` | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `str` | This is the description of the scorecard. |
| `id` | `str` | This is the unique identifier for the scorecard. |
| `metrics` | `list` | These are the metrics that will be used to evaluate the scorecard. |
| `name` | `str` | This is the name of the scorecard. |
| `orgId` | `str` | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the scorecard was last updated. |

#### Example: Load

```python
scorecard = client.Scorecard().load({"id": "scorecard_id"})
```

#### Example: List

```python
scorecards = client.Scorecard().list()
```

#### Example: Create

```python
scorecard = client.Scorecard().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "metrics": [],  # list
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Session

Create an instance: `session = client.Session()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifact` | `Any` | These are the artifacts that were extracted from the session messages. |
| `assistant` | `Any` | This is the assistant configuration for this session. |
| `assistantId` | `str` | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `Any` | These are the overrides for the assistant configuration. |
| `cost` | `float` | This is the cost of the session in USD. |
| `costs` | `list` | These are the costs of individual components of the session in USD. |
| `createdAt` | `str` | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `Any` | This is the customer information associated with this session. |
| `customerId` | `str` | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `float` | Session expiration time in seconds. |
| `id` | `str` | This is the unique identifier for the session. |
| `messages` | `list` | This is an array of chat messages in the session. |
| `name` | `str` | This is a user-defined name for the session. |
| `orgId` | `str` | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `Any` | This is the phone number configuration for this session. |
| `phoneNumberId` | `str` | This is the ID of the phone number associated with this session. |
| `squad` | `Any` | This is the squad configuration for this session. |
| `squadId` | `str` | This is the squad ID associated with this session. |
| `status` | `str` | This is the current status of the session. |
| `updatedAt` | `str` | This is the ISO 8601 timestamp indicating when the session was last updated. |

#### Example: Load

```python
session = client.Session().load({"id": "session_id"})
```

#### Example: List

```python
sessions = client.Session().list()
```

#### Example: Create

```python
session = client.Session().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### Simulation

Create an instance: `simulation = client.Simulation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantId` | `str` | ID of the assistant to generate scenarios for |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the simulation was created. |
| `id` | `str` | This is the unique identifier for the simulation. |
| `name` | `str` | This is an optional friendly name for the simulation. |
| `orgId` | `str` | This is the unique identifier for the organization this simulation belongs to. |
| `path` | `str` | Optional folder path for organizing simulations. |
| `personalityId` | `str` | This is the ID of the personality to use for this simulation. |
| `scenarioId` | `str` | This is the ID of the scenario to use for this simulation. |
| `squadId` | `str` | ID of the squad to generate scenarios for |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the simulation was last updated. |

#### Example: Load

```python
simulation = client.Simulation().load({"id": "simulation_id"})
```

#### Example: List

```python
simulations = client.Simulation().list()
```

#### Example: Create

```python
simulation = client.Simulation().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "orgId": "example_orgId",  # str
    "personalityId": "example_personalityId",  # str
    "scenarioId": "example_scenarioId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### SimulationRun

Create an instance: `simulation_run = client.SimulationRun()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | ISO 8601 date-time when created |
| `endedAt` | `str` | When the run ended |
| `endedReason` | `str` | Reason the run ended |
| `id` | `str` | Unique identifier for the run |
| `itemCounts` | `Any` | Aggregate counts of run items by status |
| `iterations` | `float` | Number of times to run each simulation (default: 1) |
| `orgId` | `str` | Organization ID |
| `queuedAt` | `str` | When the run was queued |
| `simulations` | `list` | Array of simulations and/or suites to run |
| `startedAt` | `str` | When the run started |
| `status` | `str` | Current status of the run |
| `target` | `Any` | Target to test against |
| `transport` | `Any` | Transport configuration for the simulation runs |
| `updatedAt` | `str` | ISO 8601 date-time when last updated |

#### Example: Load

```python
simulation_run = client.SimulationRun().load({"id": "simulation_run_id"})
```

#### Example: Create

```python
simulation_run = client.SimulationRun().create({
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


### SimulationRunItem

Create an instance: `simulation_run_item = client.SimulationRunItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `callId` | `str` | This is the ID of the target Vapi call (the assistant being tested). |
| `canceledAt` | `str` | This is the ISO 8601 date-time string of when the run was canceled. |
| `completedAt` | `str` | This is the ISO 8601 date-time string of when the run completed. |
| `configurations` | `Any` | This is the configuration for how this simulation run executes. |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the run item was created. |
| `failedAt` | `str` | This is the ISO 8601 date-time string of when the run failed. |
| `failureReason` | `str` | This is the reason for failure. |
| `hooks` | `list` | Hooks configured for this simulation run item |
| `id` | `str` | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `Any` | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `float` | This is the iteration number (1-indexed) when run with iterations > 1. |
| `metadata` | `Any` | This is the metadata containing snapshots and call data. |
| `orgId` | `str` | This is the unique identifier for the organization. |
| `personalityId` | `str` | This is the personality ID at run creation time. |
| `queuedAt` | `str` | This is the ISO 8601 date-time string of when the run was queued. |
| `results` | `Any` | This is the results of the simulation run. |
| `runId` | `str` | This is the ID of the parent run (batch/group). |
| `scenarioId` | `str` | This is the scenario ID at run creation time. |
| `sessionId` | `str` | This is the session ID for chat-based simulations (webchat transport). |
| `simulationId` | `str` | This is the ID of the simulation this run belongs to. |
| `startedAt` | `str` | This is the ISO 8601 date-time string of when the run started. |
| `status` | `str` | This is the current status of the run. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the run item was last updated. |

#### Example: Load

```python
simulation_run_item = client.SimulationRunItem().load({"id": "simulation_run_item_id", "run_id": "run_id"})
```

#### Example: List

```python
simulation_run_items = client.SimulationRunItem().list()
```

#### Example: Create

```python
simulation_run_item = client.SimulationRunItem().create({
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


### SimulationSuite

Create an instance: `simulation_suite = client.SimulationSuite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `str` | This is the unique identifier for the simulation suite. |
| `name` | `str` | This is the name of the simulation suite. |
| `orgId` | `str` | This is the unique identifier for the organization this suite belongs to. |
| `path` | `str` | Optional folder path for organizing simulation suites. |
| `simulationIds` | `list` | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `str` | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `list` | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the suite was last updated. |

#### Example: Load

```python
simulation_suite = client.SimulationSuite().load({"id": "simulation_suite_id"})
```

#### Example: List

```python
simulation_suites = client.SimulationSuite().list()
```

#### Example: Create

```python
simulation_suite = client.SimulationSuite().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "simulationIds": [],  # list
    "targetAssignments": [],  # list
    "updatedAt": "example_updatedAt",  # str
})
```


### Squad

Create an instance: `squad = client.Squad()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `str` | This is the unique identifier for the squad. |
| `latestVersion` | `str` | This is the latest version label (e.g. |
| `members` | `list` | This is the list of assistants that make up the squad. |
| `membersOverrides` | `Any` | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `list` | Read-only. |
| `name` | `str` | This is the name of the squad. |
| `orgId` | `str` | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the squad was last updated. |

#### Example: Load

```python
squad = client.Squad().load({"id": "squad_id"})
```

#### Example: List

```python
squads = client.Squad().list()
```

#### Example: Create

```python
squad = client.Squad().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "members": [],  # list
    "orgId": "example_orgId",  # str
    "updatedAt": "example_updatedAt",  # str
})
```


### StructuredOutput

Create an instance: `structured_output = client.StructuredOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantIds` | `list` | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `Any` | Compliance configuration for this output. |
| `conditions` | `list` | These are the conditions that gate the execution of this structured output. |
| `createdAt` | `str` | This is the ISO 8601 date-time string of when the structured output was created. |
| `description` | `str` | This is the description of what the structured output extracts. |
| `id` | `str` | This is the unique identifier for the structured output. |
| `model` | `Any` | This is the model that will be used to extract the structured output. |
| `name` | `str` | This is the name of the structured output. |
| `orgId` | `str` | This is the unique identifier for the org that this structured output belongs to. |
| `regex` | `str` | This is the regex pattern to match against the transcript. |
| `schema` | `Any` | This is the JSON Schema definition for the structured output. |
| `type` | `str` | This is the type of structured output. |
| `updatedAt` | `str` | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `workflowIds` | `list` | These are the workflow IDs that this structured output is linked to. |

#### Example: Load

```python
structured_output = client.StructuredOutput().load({"id": "structured_output_id"})
```

#### Example: List

```python
structured_outputs = client.StructuredOutput().list()
```

#### Example: Create

```python
structured_output = client.StructuredOutput().create({
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "orgId": "example_orgId",  # str
    "schema": "example_schema",  # Any
    "updatedAt": "example_updatedAt",  # str
})
```


### Tool

Create an instance: `tool = client.Tool()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
tool = client.Tool().load({"id": "tool_id"})
```

#### Example: List

```python
tools = client.Tool().list()
```

#### Example: Create

```python
tool = client.Tool().create({
})
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

56 fields are carried as open values rather than typed structures.
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
| `eval` | `target` | 23 | 57 levels |
| `personality` | `assistant` | 23 | 55 levels |
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
| `assistant` | `transcriber` | 14 | 18 levels |
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
| `phone_number` | `results` | 5 | 27 levels |
| `scenario` | `evaluations` | 5 | 8 levels |
| `session` | `artifact` | 5 | 19 levels |
| `session` | `messages` | 5 | 1 level |
| `structured_output` | `model` | 5 | 0 levels |
| `eval` | `results` | 4 | 4 levels |
| `assistant` | `startSpeakingPlan` | 3 | 5 levels |
| `call` | `destination` | 3 | 12 levels |
| `call` | `phoneNumber` | 3 | 26 levels |
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── vapi_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`vapi_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
provider = client.Provider()
provider.load({"provider": "example", "resource_name": "example"})

# provider.data_get() now returns the provider data from the last load
# provider.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
