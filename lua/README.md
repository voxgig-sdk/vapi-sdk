# Vapi Lua SDK



The Lua SDK for the Vapi API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Analytics()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/vapi-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("vapi_sdk")

local client = sdk.new({
  apikey = os.getenv("VAPI_APIKEY"),
})
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Analytics():create({ queries = {} })
if err then error(err) end

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local provider, err = client:Provider():load({ provider = "example", resource_name = "example" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Provider():load({ id = "test01", provider = "example", resource_name = "example" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### VapiSDK

```lua
local sdk = require("vapi_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### VapiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local assistant, err = client:Assistant():load({ id = "example_id" })
    if err then error(err) end
    -- assistant is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local analytics = client:Analytics(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queries` | `table` | This is the list of metric queries you want to perform. |

#### Example: Create

```lua
local analytics, err = client:Analytics():create({
  queries = {}, -- table
})
```


### Assistant

Create an instance: `local assistant = client:Assistant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysisPlan` | `any` | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `any` | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `any` | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `any` | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `table` | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `table` |  |
| `contentType` | `string` | The content-type the URL returned, when a response was received. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `table` | These are the credentials that will be used for the assistant calls. |
| `credentials` | `table` | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `string` | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `table` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `string` | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `boolean` |  |
| `firstMessageMode` | `string` | This is the mode for the first message. |
| `hooks` | `table` | This is a set of actions that will be performed on certain events. |
| `id` | `string` | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `table` |  |
| `latestVersion` | `string` | This is the latest version label (e.g. |
| `maxDurationSeconds` | `number` | This is the maximum number of seconds that the call will last. |
| `metadata` | `table` | This is for metadata you want to store on the assistant. |
| `model` | `any` | These are the options for the assistant's LLM. |
| `modelDeprecations` | `table` | Read-only. |
| `modelOutputInMessagesEnabled` | `boolean` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `any` | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `string` | This is the name of the assistant. |
| `observabilityPlan` | `any` | This is the plan for observability of assistant's calls. |
| `orgId` | `string` | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `string` | Why validation failed. |
| `server` | `any` | This is where Vapi will send webhooks. |
| `serverMessages` | `table` | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `any` | This is the plan for when the assistant should start talking. |
| `status` | `number` | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `any` | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `any` | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `table` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `string` | This is the background sound URL to validate. |
| `valid` | `boolean` | Whether the URL currently serves a live media file. |
| `voice` | `any` | These are the options for the assistant's voice. |
| `voicemailDetection` | `any` | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `string` | This is the message that the assistant will say if the call is forwarded to voicemail. |

#### Example: Load

```lua
local assistant, err = client:Assistant():load({ id = "assistant_id" })
```

#### Example: List

```lua
local assistants, err = client:Assistant():list()
```

#### Example: Create

```lua
local assistant, err = client:Assistant():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
  url = "example_url", -- string
  valid = true, -- boolean
})
```


### Board

Create an instance: `local board = client:Board(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `string` | This is the unique identifier for the Board. |
| `items` | `table` | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `any` | This is the layout of the Board. |
| `name` | `string` | This is the name of the Board. |
| `orgId` | `string` | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `string` | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `any` | This is the timerange override for the board. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the Board was last updated. |

#### Example: Load

```lua
local board, err = client:Board():load({ id = "board_id" })
```

#### Example: List

```lua
local boards, err = client:Board():list()
```

#### Example: Create

```lua
local board, err = client:Board():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  layout = "example_layout", -- any
  name = "example_name", -- string
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Call

Create an instance: `local call = client:Call(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

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
| `cost` | `number` | This is the cost of the call in USD. |
| `costBreakdown` | `any` | This is the cost of the call in USD. |
| `costs` | `table` | These are the costs of individual components of the call in USD. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `any` | This is the customer that will be called. |
| `customerId` | `string` | This is the customer that will be called. |
| `customers` | `table` | This is used to issue batch calls to multiple customers. |
| `destination` | `any` | This is the destination where the call ended up being transferred to. |
| `endedAt` | `string` | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `string` | This is the message that adds more context to the ended reason. |
| `endedReason` | `string` | This is the explanation for how the call ended. |
| `id` | `string` | This is the unique identifier for the call. |
| `messages` | `table` |  |
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

```lua
local call, err = client:Call():load({ id = "call_id" })
```

#### Example: List

```lua
local calls, err = client:Call():list()
```

#### Example: Create

```lua
local call, err = client:Call():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Campaign

Create an instance: `local campaign = client:Campaign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantId` | `string` | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `any` | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `any` | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `table` | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `number` | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `number` | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `number` | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `number` | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `number` | This is the number of calls that have been scheduled. |
| `contactCounters` | `any` | These are the per-status contact counts for this campaign. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `table` | These are the customers that will be called in the campaign. |
| `dialPlan` | `table` | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `string` | Optional campaign ID to duplicate config from. |
| `endedReason` | `string` | This is the explanation for how the campaign ended. |
| `id` | `string` | This is the unique identifier for the campaign. |
| `maxConcurrency` | `number` | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `string` | This is the name of the campaign. |
| `orgId` | `string` | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `string` | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `any` | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `any` | This is the schedule plan for the campaign. |
| `server` | `any` | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `table` | These are the messages that will be sent to your Server URL. |
| `squadId` | `string` | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `any` | These are the overrides for the squad and template variables for the campaign. |
| `status` | `string` | This is the status of the campaign. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | `string` | This is the workflow ID that will be used for the campaign calls. |

#### Example: Load

```lua
local campaign, err = client:Campaign():load({ id = "campaign_id" })
```

#### Example: List

```lua
local campaigns, err = client:Campaign():list()
```

#### Example: Create

```lua
local campaign, err = client:Campaign():create({
  calls = {}, -- table
  callsCounterEnded = 1, -- number
  callsCounterEndedVoicemail = 1, -- number
  callsCounterInProgress = 1, -- number
  callsCounterQueued = 1, -- number
  callsCounterScheduled = 1, -- number
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  orgId = "example_orgId", -- string
  status = "example_status", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Chat

Create an instance: `local chat = client:Chat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistant` | `any` | This is the assistant that will be used for the chat. |
| `assistantId` | `string` | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `any` | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `number` | This is the cost of the chat in USD. |
| `costs` | `table` | These are the costs of individual components of the chat in USD. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `string` | This is the unique identifier for the chat. |
| `input` | `any` | This is the input text for the chat. |
| `messages` | `table` | This is an array of messages used as context for the chat. |
| `name` | `string` | This is the name of the chat. |
| `orgId` | `string` | This is the unique identifier for the org that this chat belongs to. |
| `output` | `table` | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `string` | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `string` | This is the ID of the session that will be used for the chat. |
| `squad` | `any` | This is the squad that will be used for the chat. |
| `squadId` | `string` | This is the squad that will be used for the chat. |
| `stream` | `boolean` | This is a flag that determines whether the response should be streamed. |
| `transport` | `any` | This is used to send the chat through a transport like SMS. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the chat was last updated. |

#### Example: Load

```lua
local chat, err = client:Chat():load({ id = "chat_id" })
```

#### Example: List

```lua
local chats, err = client:Chat():list()
```

#### Example: Create

```lua
local chat, err = client:Chat():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Eval

Create an instance: `local eval = client:Eval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cost` | `number` | This is the cost of the eval or suite run in USD. |
| `costs` | `table` | This is the break up of costs of the eval or suite run. |
| `createdAt` | `string` |  |
| `description` | `string` | This is the description of the eval. |
| `endedAt` | `string` |  |
| `endedMessage` | `string` | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `string` | This is the reason for the eval run to end. |
| `eval` | `any` | This is the transient eval that will be run |
| `evalId` | `string` | This is the id of the eval that will be run. |
| `id` | `string` |  |
| `messages` | `table` | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `string` | This is the name of the eval. |
| `orgId` | `string` |  |
| `results` | `table` | This is the results of the eval or suite run. |
| `startedAt` | `string` |  |
| `status` | `string` | This is the status of the eval run. |
| `target` | `any` | This is the target that will be run against the eval |
| `type` | `string` | This is the type of the run. |
| `updatedAt` | `string` |  |

#### Example: Load

```lua
local eval, err = client:Eval():load({ id = "eval_id" })
```

#### Example: List

```lua
local evals, err = client:Eval():list()
```

#### Example: Create

```lua
local eval, err = client:Eval():create({
  cost = 1, -- number
  costs = {}, -- table
  createdAt = "example_createdAt", -- string
  endedAt = "example_endedAt", -- string
  endedReason = "example_endedReason", -- string
  id = "example_id", -- string
  messages = {}, -- table
  orgId = "example_orgId", -- string
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
  target = "example_target", -- any
  type = "example_type", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### File

Create an instance: `local file = client:File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bucket` | `string` |  |
| `bytes` | `number` |  |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `string` | This is the unique identifier for the file. |
| `key` | `string` |  |
| `metadata` | `table` |  |
| `mimetype` | `string` |  |
| `name` | `string` | This is the name of the file. |
| `object` | `string` |  |
| `orgId` | `string` | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `string` |  |
| `parsedTextBytes` | `number` |  |
| `parsedTextUrl` | `string` |  |
| `path` | `string` |  |
| `purpose` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `string` |  |

#### Example: Load

```lua
local file, err = client:File():load({ id = "file_id" })
```

#### Example: List

```lua
local files, err = client:File():list()
```

#### Example: Create

```lua
local file, err = client:File():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Insight

Create an instance: `local insight = client:Insight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

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

```lua
local insight, err = client:Insight():load({ id = "insight_id" })
```

#### Example: List

```lua
local insights, err = client:Insight():list()
```

#### Example: Create

```lua
local insight, err = client:Insight():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  type = "example_type", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### KnowledgeBase

Create an instance: `local knowledge_base = client:KnowledgeBase(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `files` | `table` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `orgId` | `string` |  |
| `toolId` | `string` | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` | `string` |  |

#### Example: Load

```lua
local knowledge_base, err = client:KnowledgeBase():load({ id = "knowledge_base_id" })
```

#### Example: List

```lua
local knowledge_bases, err = client:KnowledgeBase():list()
```

#### Example: Create

```lua
local knowledge_base, err = client:KnowledgeBase():create({
  createdAt = "example_createdAt", -- string
  files = {}, -- table
  id = "example_id", -- string
  name = "example_name", -- string
  orgId = "example_orgId", -- string
  toolId = "example_toolId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### KnowledgeBaseV2File

Create an instance: `local knowledge_base_v2_file = client:KnowledgeBaseV2File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bytes` | `number` |  |
| `createdAt` | `string` |  |
| `fileId` | `string` |  |
| `fileName` | `string` |  |
| `id` | `string` |  |
| `knowledgeBaseV2Id` | `string` |  |
| `mimetype` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: List

```lua
local knowledge_base_v2_files, err = client:KnowledgeBaseV2File():list()
```

#### Example: Create

```lua
local knowledge_base_v2_file, err = client:KnowledgeBaseV2File():create({
  id = "example_id", -- string
  createdAt = "example_createdAt", -- string
  fileId = "example_fileId", -- string
  knowledgeBaseV2Id = "example_knowledgeBaseV2Id", -- string
  status = "example_status", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Personality

Create an instance: `local personality = client:Personality(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistant` | `any` | This is the full assistant configuration for this personality. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the personality was created. |
| `id` | `string` | This is the unique identifier for the personality. |
| `name` | `string` | This is the name of the personality (e.g., "Confused Carl", "Rude Rob"). |
| `orgId` | `string` | This is the unique identifier for the organization this personality belongs to. |
| `path` | `string` | Optional folder path for organizing personalities. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the personality was last updated. |

#### Example: Load

```lua
local personality, err = client:Personality():load({ id = "personality_id" })
```

#### Example: List

```lua
local personalitys, err = client:Personality():list()
```

#### Example: Create

```lua
local personality, err = client:Personality():create({
  assistant = "example_assistant", -- any
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### PhoneNumber

Create an instance: `local phone_number = client:PhoneNumber(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `metadata` | `any` | Metadata about the pagination. |
| `results` | `table` | A list of phone numbers, which can be of any provider type. |

#### Example: Load

```lua
local phone_number, err = client:PhoneNumber():load({ id = "phone_number_id" })
```

#### Example: List

```lua
local phone_numbers, err = client:PhoneNumber():list()
```

#### Example: Create

```lua
local phone_number, err = client:PhoneNumber():create({
  metadata = "example_metadata", -- any
  results = {}, -- table
})
```


### Provider

Create an instance: `local provider = client:Provider(nil)`

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
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the provider resource was created. |
| `id` | `string` | This is the unique identifier for the provider resource. |
| `metadata` | `table` |  |
| `orgId` | `string` | This is the unique identifier for the org that this provider resource belongs to. |
| `provider` | `string` | This is the provider that manages this resource. |
| `resource` | `table` | This is the full resource data from the provider's API. |
| `resourceId` | `string` | This is the provider-specific identifier for the resource. |
| `resourceName` | `string` | This is the name/type of the resource. |
| `results` | `table` |  |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the provider resource was last updated. |

#### Example: Load

```lua
local provider, err = client:Provider():load({ id = "provider_id", provider = "provider", resource_name = "resource_name" })
```

#### Example: Create

```lua
local provider, err = client:Provider():create({
  provider = "example_provider", -- string
  resource_name = "example_resource_name", -- string
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  metadata = {}, -- table
  orgId = "example_orgId", -- string
  resource = {}, -- table
  resourceId = "example_resourceId", -- string
  resourceName = "example_resourceName", -- string
  results = {}, -- table
  updatedAt = "example_updatedAt", -- string
})
```


### Scenario

Create an instance: `local scenario = client:Scenario(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `table` | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `table` | Hooks to run on simulation lifecycle events |
| `id` | `string` | This is the unique identifier for the scenario. |
| `instructions` | `string` | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `string` | This is the name of the scenario. |
| `orgId` | `string` | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `string` | Optional folder path for organizing scenarios. |
| `targetOverrides` | `any` | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `table` | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the scenario was last updated. |

#### Example: Load

```lua
local scenario, err = client:Scenario():load({ id = "scenario_id" })
```

#### Example: List

```lua
local scenarios, err = client:Scenario():list()
```

#### Example: Create

```lua
local scenario, err = client:Scenario():create({
  createdAt = "example_createdAt", -- string
  evaluations = {}, -- table
  id = "example_id", -- string
  instructions = "example_instructions", -- string
  name = "example_name", -- string
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Scorecard

Create an instance: `local scorecard = client:Scorecard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantIds` | `table` | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `string` | This is the description of the scorecard. |
| `id` | `string` | This is the unique identifier for the scorecard. |
| `metrics` | `table` | These are the metrics that will be used to evaluate the scorecard. |
| `name` | `string` | This is the name of the scorecard. |
| `orgId` | `string` | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the scorecard was last updated. |

#### Example: Load

```lua
local scorecard, err = client:Scorecard():load({ id = "scorecard_id" })
```

#### Example: List

```lua
local scorecards, err = client:Scorecard():list()
```

#### Example: Create

```lua
local scorecard, err = client:Scorecard():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  metrics = {}, -- table
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Session

Create an instance: `local session = client:Session(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifact` | `any` | These are the artifacts that were extracted from the session messages. |
| `assistant` | `any` | This is the assistant configuration for this session. |
| `assistantId` | `string` | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `any` | These are the overrides for the assistant configuration. |
| `cost` | `number` | This is the cost of the session in USD. |
| `costs` | `table` | These are the costs of individual components of the session in USD. |
| `createdAt` | `string` | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `any` | This is the customer information associated with this session. |
| `customerId` | `string` | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `number` | Session expiration time in seconds. |
| `id` | `string` | This is the unique identifier for the session. |
| `messages` | `table` | This is an array of chat messages in the session. |
| `name` | `string` | This is a user-defined name for the session. |
| `orgId` | `string` | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `any` | This is the phone number configuration for this session. |
| `phoneNumberId` | `string` | This is the ID of the phone number associated with this session. |
| `squad` | `any` | This is the squad configuration for this session. |
| `squadId` | `string` | This is the squad ID associated with this session. |
| `status` | `string` | This is the current status of the session. |
| `updatedAt` | `string` | This is the ISO 8601 timestamp indicating when the session was last updated. |

#### Example: Load

```lua
local session, err = client:Session():load({ id = "session_id" })
```

#### Example: List

```lua
local sessions, err = client:Session():list()
```

#### Example: Create

```lua
local session, err = client:Session():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### Simulation

Create an instance: `local simulation = client:Simulation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

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

```lua
local simulation, err = client:Simulation():load({ id = "simulation_id" })
```

#### Example: List

```lua
local simulations, err = client:Simulation():list()
```

#### Example: Create

```lua
local simulation, err = client:Simulation():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  personalityId = "example_personalityId", -- string
  scenarioId = "example_scenarioId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### SimulationRun

Create an instance: `local simulation_run = client:SimulationRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | ISO 8601 date-time when created |
| `endedAt` | `string` | When the run ended |
| `endedReason` | `string` | Reason the run ended |
| `id` | `string` | Unique identifier for the run |
| `itemCounts` | `any` | Aggregate counts of run items by status |
| `iterations` | `number` | Number of times to run each simulation (default: 1) |
| `orgId` | `string` | Organization ID |
| `queuedAt` | `string` | When the run was queued |
| `simulations` | `table` | Array of simulations and/or suites to run |
| `startedAt` | `string` | When the run started |
| `status` | `string` | Current status of the run |
| `target` | `any` | Target to test against |
| `transport` | `any` | Transport configuration for the simulation runs |
| `updatedAt` | `string` | ISO 8601 date-time when last updated |

#### Example: Load

```lua
local simulation_run, err = client:SimulationRun():load({ id = "simulation_run_id" })
```

#### Example: Create

```lua
local simulation_run, err = client:SimulationRun():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  queuedAt = "example_queuedAt", -- string
  simulations = {}, -- table
  status = "example_status", -- string
  target = "example_target", -- any
  updatedAt = "example_updatedAt", -- string
})
```


### SimulationRunItem

Create an instance: `local simulation_run_item = client:SimulationRunItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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
| `hooks` | `table` | Hooks configured for this simulation run item |
| `id` | `string` | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `any` | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `number` | This is the iteration number (1-indexed) when run with iterations > 1. |
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

```lua
local simulation_run_item, err = client:SimulationRunItem():load({ id = "simulation_run_item_id", run_id = "run_id" })
```

#### Example: List

```lua
local simulation_run_items, err = client:SimulationRunItem():list()
```

#### Example: Create

```lua
local simulation_run_item, err = client:SimulationRunItem():create({
  item_id = "example_item_id", -- string
  run_id = "example_run_id", -- string
  force = "example_force", -- string
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  orgId = "example_orgId", -- string
  queuedAt = "example_queuedAt", -- string
  simulationId = "example_simulationId", -- string
  status = "example_status", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### SimulationSuite

Create an instance: `local simulation_suite = client:SimulationSuite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `string` | This is the unique identifier for the simulation suite. |
| `name` | `string` | This is the name of the simulation suite. |
| `orgId` | `string` | This is the unique identifier for the organization this suite belongs to. |
| `path` | `string` | Optional folder path for organizing simulation suites. |
| `simulationIds` | `table` | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `string` | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `table` | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the suite was last updated. |

#### Example: Load

```lua
local simulation_suite, err = client:SimulationSuite():load({ id = "simulation_suite_id" })
```

#### Example: List

```lua
local simulation_suites, err = client:SimulationSuite():list()
```

#### Example: Create

```lua
local simulation_suite, err = client:SimulationSuite():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  orgId = "example_orgId", -- string
  simulationIds = {}, -- table
  targetAssignments = {}, -- table
  updatedAt = "example_updatedAt", -- string
})
```


### Squad

Create an instance: `local squad = client:Squad(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `string` | This is the unique identifier for the squad. |
| `latestVersion` | `string` | This is the latest version label (e.g. |
| `members` | `table` | This is the list of assistants that make up the squad. |
| `membersOverrides` | `any` | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `table` | Read-only. |
| `name` | `string` | This is the name of the squad. |
| `orgId` | `string` | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the squad was last updated. |

#### Example: Load

```lua
local squad, err = client:Squad():load({ id = "squad_id" })
```

#### Example: List

```lua
local squads, err = client:Squad():list()
```

#### Example: Create

```lua
local squad, err = client:Squad():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  members = {}, -- table
  orgId = "example_orgId", -- string
  updatedAt = "example_updatedAt", -- string
})
```


### StructuredOutput

Create an instance: `local structured_output = client:StructuredOutput(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assistantIds` | `table` | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `any` | Compliance configuration for this output. |
| `conditions` | `table` | These are the conditions that gate the execution of this structured output. |
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
| `workflowIds` | `table` | These are the workflow IDs that this structured output is linked to. |

#### Example: Load

```lua
local structured_output, err = client:StructuredOutput():load({ id = "structured_output_id" })
```

#### Example: List

```lua
local structured_outputs, err = client:StructuredOutput():list()
```

#### Example: Create

```lua
local structured_output, err = client:StructuredOutput():create({
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  orgId = "example_orgId", -- string
  schema = "example_schema", -- any
  updatedAt = "example_updatedAt", -- string
})
```


### Tool

Create an instance: `local tool = client:Tool(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local tool, err = client:Tool():load({ id = "tool_id" })
```

#### Example: List

```lua
local tools, err = client:Tool():list()
```

#### Example: Create

```lua
local tool, err = client:Tool():create({
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

Features are the extension mechanism. A feature is a Lua table
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

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── vapi_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`vapi_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local provider = client:Provider()
provider:load({ provider = "example", resource_name = "example" })

-- provider:data_get() now returns the provider data from the last load
-- provider:match_get() returns the last match criteria
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
