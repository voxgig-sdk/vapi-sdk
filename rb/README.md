# Vapi Ruby SDK



The Ruby SDK for the Vapi API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Analytics` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/vapi-sdk/releases)), or
from a clone:

```bash
git clone https://github.com/voxgig-sdk/vapi-sdk
```

Then add it to your `Gemfile` by path, and run `bundle install`:

```ruby
gem "voxgig-sdk-vapi-sdk", path: "./vapi-sdk/rb"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Vapi_sdk"

client = VapiSDK.new({
  "apikey" => ENV["VAPI_APIKEY"],
})
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created Analytics record.
created = client.Analytics.create({ "queries" => [] })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  provider = client.Provider.load({ "provider" => "example", "resource_name" => "example" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = VapiSDK.test({
  "entity" => { "provider" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
provider = client.Provider.load({ "id" => "test01", "provider" => "example", "resource_name" => "example" })
puts provider
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = VapiSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### VapiSDK

```ruby
require_relative "Vapi_sdk"
client = VapiSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = VapiSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### VapiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `VapiError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `analytics = client.Analytics`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queries` | `Array` | This is the list of metric queries you want to perform. |

#### Example: Create

```ruby
analytics = client.Analytics.create({
  "queries" => [], # Array
})
```


### Assistant

Create an instance: `assistant = client.Assistant`

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
| `analysisPlan` | `Object` | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `Object` | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `Object` | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `Object` | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `Array` | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `Hash` |  |
| `contentType` | `String` | The content-type the URL returned, when a response was received. |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `Array` | These are the credentials that will be used for the assistant calls. |
| `credentials` | `Array` | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `String` | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `Array` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `String` | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `Boolean` |  |
| `firstMessageMode` | `String` | This is the mode for the first message. |
| `hooks` | `Array` | This is a set of actions that will be performed on certain events. |
| `id` | `String` | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `Hash` |  |
| `latestVersion` | `String` | This is the latest version label (e.g. |
| `maxDurationSeconds` | `Float` | This is the maximum number of seconds that the call will last. |
| `metadata` | `Hash` | This is for metadata you want to store on the assistant. |
| `model` | `Object` | These are the options for the assistant's LLM. |
| `modelDeprecations` | `Array` | Read-only. |
| `modelOutputInMessagesEnabled` | `Boolean` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `Object` | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `String` | This is the name of the assistant. |
| `observabilityPlan` | `Object` | This is the plan for observability of assistant's calls. |
| `orgId` | `String` | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `String` | Why validation failed. |
| `server` | `Object` | This is where Vapi will send webhooks. |
| `serverMessages` | `Array` | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `Object` | This is the plan for when the assistant should start talking. |
| `status` | `Float` | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `Object` | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `Object` | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `Array` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `String` | This is the background sound URL to validate. |
| `valid` | `Boolean` | Whether the URL currently serves a live media file. |
| `voice` | `Object` | These are the options for the assistant's voice. |
| `voicemailDetection` | `Object` | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `String` | This is the message that the assistant will say if the call is forwarded to voicemail. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Assistant record (raises on error).
assistant = client.Assistant.load({ "id" => "assistant_id" })
```

#### Example: List

```ruby
# list returns an Array of Assistant records (raises on error).
assistants = client.Assistant.list
```

#### Example: Create

```ruby
assistant = client.Assistant.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
  "url" => "example_url", # String
  "valid" => true, # Boolean
})
```


### Board

Create an instance: `board = client.Board`

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
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `String` | This is the unique identifier for the Board. |
| `items` | `Array` | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `Object` | This is the layout of the Board. |
| `name` | `String` | This is the name of the Board. |
| `orgId` | `String` | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `String` | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `Object` | This is the timerange override for the board. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the Board was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Board record (raises on error).
board = client.Board.load({ "id" => "board_id" })
```

#### Example: List

```ruby
# list returns an Array of Board records (raises on error).
boards = client.Board.list
```

#### Example: Create

```ruby
board = client.Board.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "layout" => "example_layout", # Object
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Call

Create an instance: `call = client.Call`

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
| `analysis` | `Object` | This is the analysis of the call. |
| `artifact` | `Object` | These are the artifacts created from the call. |
| `artifactPlan` | `Object` | This is a copy of assistant artifact plan. |
| `assistant` | `Object` | This is the assistant that will be used for the call. |
| `assistantId` | `String` | This is the assistant ID that will be used for the call. |
| `assistantOverrides` | `Object` | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `assistantVersion` | `String` | This is the assistant version to use for this call. |
| `campaignId` | `String` | This is the campaign ID that the call belongs to. |
| `compliance` | `Object` | This is the compliance of the call. |
| `cost` | `Float` | This is the cost of the call in USD. |
| `costBreakdown` | `Object` | This is the cost of the call in USD. |
| `costs` | `Array` | These are the costs of individual components of the call in USD. |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `Object` | This is the customer that will be called. |
| `customerId` | `String` | This is the customer that will be called. |
| `customers` | `Array` | This is used to issue batch calls to multiple customers. |
| `destination` | `Object` | This is the destination where the call ended up being transferred to. |
| `endedAt` | `String` | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `String` | This is the message that adds more context to the ended reason. |
| `endedReason` | `String` | This is the explanation for how the call ended. |
| `id` | `String` | This is the unique identifier for the call. |
| `messages` | `Array` |  |
| `monitor` | `Object` | This is to real-time monitor the call. |
| `name` | `String` | This is the name of the call. |
| `orgId` | `String` | This is the unique identifier for the org that this call belongs to. |
| `phoneCallProvider` | `String` | This is the provider of the call. |
| `phoneCallProviderId` | `String` | The ID of the call as provided by the phone number service. |
| `phoneCallTransport` | `String` | This is the transport of the phone call. |
| `phoneNumber` | `Object` | This is the phone number that will be used for the call. |
| `phoneNumberId` | `String` | This is the phone number that will be used for the call. |
| `schedulePlan` | `Object` | This is the schedule plan of the call. |
| `squad` | `Object` | This is a squad that will be used for the call. |
| `squadId` | `String` | This is the squad that will be used for the call. |
| `squadOverrides` | `Object` | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `squadVersion` | `String` | This is the squad version to use for this call. |
| `startedAt` | `String` | This is the ISO 8601 date-time string of when the call was started. |
| `status` | `String` | This is the status of the call. |
| `transport` | `Object` | This is the transport of the call. |
| `type` | `String` | This is the type of call. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the call was last updated. |
| `workflow` | `Object` | This is a workflow that will be used for the call. |
| `workflowId` | `String` | This is the workflow that will be used for the call. |
| `workflowOverrides` | `Object` | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Call record (raises on error).
call = client.Call.load({ "id" => "call_id" })
```

#### Example: List

```ruby
# list returns an Array of Call records (raises on error).
calls = client.Call.list
```

#### Example: Create

```ruby
call = client.Call.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Campaign

Create an instance: `campaign = client.Campaign`

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
| `assistantId` | `String` | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `Object` | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `Object` | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `Hash` | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `Float` | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `Float` | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `Float` | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `Float` | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `Float` | This is the number of calls that have been scheduled. |
| `contactCounters` | `Object` | These are the per-status contact counts for this campaign. |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `Array` | These are the customers that will be called in the campaign. |
| `dialPlan` | `Array` | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `String` | Optional campaign ID to duplicate config from. |
| `endedReason` | `String` | This is the explanation for how the campaign ended. |
| `id` | `String` | This is the unique identifier for the campaign. |
| `maxConcurrency` | `Float` | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `String` | This is the name of the campaign. |
| `orgId` | `String` | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `String` | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `Object` | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `Object` | This is the schedule plan for the campaign. |
| `server` | `Object` | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `Array` | These are the messages that will be sent to your Server URL. |
| `squadId` | `String` | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `Object` | These are the overrides for the squad and template variables for the campaign. |
| `status` | `String` | This is the status of the campaign. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | `String` | This is the workflow ID that will be used for the campaign calls. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Campaign record (raises on error).
campaign = client.Campaign.load({ "id" => "campaign_id" })
```

#### Example: List

```ruby
# list returns an Array of Campaign records (raises on error).
campaigns = client.Campaign.list
```

#### Example: Create

```ruby
campaign = client.Campaign.create({
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


### Chat

Create an instance: `chat = client.Chat`

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
| `assistant` | `Object` | This is the assistant that will be used for the chat. |
| `assistantId` | `String` | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `Object` | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `Float` | This is the cost of the chat in USD. |
| `costs` | `Array` | These are the costs of individual components of the chat in USD. |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `String` | This is the unique identifier for the chat. |
| `input` | `Object` | This is the input text for the chat. |
| `messages` | `Array` | This is an array of messages used as context for the chat. |
| `name` | `String` | This is the name of the chat. |
| `orgId` | `String` | This is the unique identifier for the org that this chat belongs to. |
| `output` | `Array` | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `String` | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `String` | This is the ID of the session that will be used for the chat. |
| `squad` | `Object` | This is the squad that will be used for the chat. |
| `squadId` | `String` | This is the squad that will be used for the chat. |
| `stream` | `Boolean` | This is a flag that determines whether the response should be streamed. |
| `transport` | `Object` | This is used to send the chat through a transport like SMS. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the chat was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Chat record (raises on error).
chat = client.Chat.load({ "id" => "chat_id" })
```

#### Example: List

```ruby
# list returns an Array of Chat records (raises on error).
chats = client.Chat.list
```

#### Example: Create

```ruby
chat = client.Chat.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Eval

Create an instance: `eval = client.Eval`

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
| `cost` | `Float` | This is the cost of the eval or suite run in USD. |
| `costs` | `Array` | This is the break up of costs of the eval or suite run. |
| `createdAt` | `String` |  |
| `description` | `String` | This is the description of the eval. |
| `endedAt` | `String` |  |
| `endedMessage` | `String` | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `String` | This is the reason for the eval run to end. |
| `eval` | `Object` | This is the transient eval that will be run |
| `evalId` | `String` | This is the id of the eval that will be run. |
| `id` | `String` |  |
| `messages` | `Array` | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `String` | This is the name of the eval. |
| `orgId` | `String` |  |
| `results` | `Array` | This is the results of the eval or suite run. |
| `startedAt` | `String` |  |
| `status` | `String` | This is the status of the eval run. |
| `target` | `Object` | This is the target that will be run against the eval |
| `type` | `String` | This is the type of the run. |
| `updatedAt` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Eval record (raises on error).
eval = client.Eval.load({ "id" => "eval_id" })
```

#### Example: List

```ruby
# list returns an Array of Eval records (raises on error).
evals = client.Eval.list
```

#### Example: Create

```ruby
eval = client.Eval.create({
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


### File

Create an instance: `file = client.File`

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
| `bucket` | `String` |  |
| `bytes` | `Float` |  |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `String` | This is the unique identifier for the file. |
| `key` | `String` |  |
| `metadata` | `Hash` |  |
| `mimetype` | `String` |  |
| `name` | `String` | This is the name of the file. |
| `object` | `String` |  |
| `orgId` | `String` | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `String` |  |
| `parsedTextBytes` | `Float` |  |
| `parsedTextUrl` | `String` |  |
| `path` | `String` |  |
| `purpose` | `String` |  |
| `status` | `String` |  |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the File record (raises on error).
file = client.File.load({ "id" => "file_id" })
```

#### Example: List

```ruby
# list returns an Array of File records (raises on error).
files = client.File.list
```

#### Example: Create

```ruby
file = client.File.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Insight

Create an instance: `insight = client.Insight`

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
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the Insight was created. |
| `id` | `String` | This is the unique identifier for the Insight. |
| `name` | `String` | This is the name of the Insight. |
| `orgId` | `String` | This is the unique identifier for the org that this Insight belongs to. |
| `systemKey` | `String` | Stable server-owned identifier for system-created insights. |
| `type` | `String` | This is the type of the Insight. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the Insight was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Insight record (raises on error).
insight = client.Insight.load({ "id" => "insight_id" })
```

#### Example: List

```ruby
# list returns an Array of Insight records (raises on error).
insights = client.Insight.list
```

#### Example: Create

```ruby
insight = client.Insight.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### KnowledgeBase

Create an instance: `knowledge_base = client.KnowledgeBase`

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
| `createdAt` | `String` |  |
| `description` | `String` |  |
| `files` | `Array` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `orgId` | `String` |  |
| `toolId` | `String` | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the KnowledgeBase record (raises on error).
knowledge_base = client.KnowledgeBase.load({ "id" => "knowledge_base_id" })
```

#### Example: List

```ruby
# list returns an Array of KnowledgeBase records (raises on error).
knowledge_bases = client.KnowledgeBase.list
```

#### Example: Create

```ruby
knowledge_base = client.KnowledgeBase.create({
  "createdAt" => "example_createdAt", # String
  "files" => [], # Array
  "id" => "example_id", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "toolId" => "example_toolId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### KnowledgeBaseV2File

Create an instance: `knowledge_base_v2_file = client.KnowledgeBaseV2File`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bytes` | `Float` |  |
| `createdAt` | `String` |  |
| `fileId` | `String` |  |
| `fileName` | `String` |  |
| `id` | `String` |  |
| `knowledgeBaseV2Id` | `String` |  |
| `mimetype` | `String` |  |
| `status` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: List

```ruby
# list returns an Array of KnowledgeBaseV2File records (raises on error).
knowledge_base_v2_files = client.KnowledgeBaseV2File.list
```

#### Example: Create

```ruby
knowledge_base_v2_file = client.KnowledgeBaseV2File.create({
  "id" => "example_id", # String
  "createdAt" => "example_createdAt", # String
  "fileId" => "example_fileId", # String
  "knowledgeBaseV2Id" => "example_knowledgeBaseV2Id", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Personality

Create an instance: `personality = client.Personality`

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
| `assistant` | `Object` | This is the full assistant configuration for this personality. |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the personality was created. |
| `id` | `String` | This is the unique identifier for the personality. |
| `name` | `String` | This is the name of the personality (e.g., "Confused Carl", "Rude Rob"). |
| `orgId` | `String` | This is the unique identifier for the organization this personality belongs to. |
| `path` | `String` | Optional folder path for organizing personalities. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the personality was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Personality record (raises on error).
personality = client.Personality.load({ "id" => "personality_id" })
```

#### Example: List

```ruby
# list returns an Array of Personality records (raises on error).
personalitys = client.Personality.list
```

#### Example: Create

```ruby
personality = client.Personality.create({
  "assistant" => "example_assistant", # Object
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### PhoneNumber

Create an instance: `phone_number = client.PhoneNumber`

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
| `id` | `String` |  |
| `metadata` | `Object` | Metadata about the pagination. |
| `results` | `Array` | A list of phone numbers, which can be of any provider type. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PhoneNumber record (raises on error).
phone_number = client.PhoneNumber.load({ "id" => "phone_number_id" })
```

#### Example: List

```ruby
# list returns an Array of PhoneNumber records (raises on error).
phone_numbers = client.PhoneNumber.list
```

#### Example: Create

```ruby
phone_number = client.PhoneNumber.create({
  "metadata" => "example_metadata", # Object
  "results" => [], # Array
})
```


### Provider

Create an instance: `provider = client.Provider`

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
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the provider resource was created. |
| `id` | `String` | This is the unique identifier for the provider resource. |
| `metadata` | `Hash` |  |
| `orgId` | `String` | This is the unique identifier for the org that this provider resource belongs to. |
| `provider` | `String` | This is the provider that manages this resource. |
| `resource` | `Hash` | This is the full resource data from the provider's API. |
| `resourceId` | `String` | This is the provider-specific identifier for the resource. |
| `resourceName` | `String` | This is the name/type of the resource. |
| `results` | `Array` |  |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the provider resource was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Provider record (raises on error).
provider = client.Provider.load({ "id" => "provider_id", "provider" => "provider", "resource_name" => "resource_name" })
```

#### Example: Create

```ruby
provider = client.Provider.create({
  "provider" => "example_provider", # String
  "resource_name" => "example_resource_name", # String
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "metadata" => {}, # Hash
  "orgId" => "example_orgId", # String
  "resource" => {}, # Hash
  "resourceId" => "example_resourceId", # String
  "resourceName" => "example_resourceName", # String
  "results" => [], # Array
  "updatedAt" => "example_updatedAt", # String
})
```


### Scenario

Create an instance: `scenario = client.Scenario`

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
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `Array` | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `Array` | Hooks to run on simulation lifecycle events |
| `id` | `String` | This is the unique identifier for the scenario. |
| `instructions` | `String` | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `String` | This is the name of the scenario. |
| `orgId` | `String` | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `String` | Optional folder path for organizing scenarios. |
| `targetOverrides` | `Object` | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `Array` | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the scenario was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Scenario record (raises on error).
scenario = client.Scenario.load({ "id" => "scenario_id" })
```

#### Example: List

```ruby
# list returns an Array of Scenario records (raises on error).
scenarios = client.Scenario.list
```

#### Example: Create

```ruby
scenario = client.Scenario.create({
  "createdAt" => "example_createdAt", # String
  "evaluations" => [], # Array
  "id" => "example_id", # String
  "instructions" => "example_instructions", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Scorecard

Create an instance: `scorecard = client.Scorecard`

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
| `assistantIds` | `Array` | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `String` | This is the description of the scorecard. |
| `id` | `String` | This is the unique identifier for the scorecard. |
| `metrics` | `Array` | These are the metrics that will be used to evaluate the scorecard. |
| `name` | `String` | This is the name of the scorecard. |
| `orgId` | `String` | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the scorecard was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Scorecard record (raises on error).
scorecard = client.Scorecard.load({ "id" => "scorecard_id" })
```

#### Example: List

```ruby
# list returns an Array of Scorecard records (raises on error).
scorecards = client.Scorecard.list
```

#### Example: Create

```ruby
scorecard = client.Scorecard.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "metrics" => [], # Array
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Session

Create an instance: `session = client.Session`

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
| `artifact` | `Object` | These are the artifacts that were extracted from the session messages. |
| `assistant` | `Object` | This is the assistant configuration for this session. |
| `assistantId` | `String` | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `Object` | These are the overrides for the assistant configuration. |
| `cost` | `Float` | This is the cost of the session in USD. |
| `costs` | `Array` | These are the costs of individual components of the session in USD. |
| `createdAt` | `String` | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `Object` | This is the customer information associated with this session. |
| `customerId` | `String` | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `Float` | Session expiration time in seconds. |
| `id` | `String` | This is the unique identifier for the session. |
| `messages` | `Array` | This is an array of chat messages in the session. |
| `name` | `String` | This is a user-defined name for the session. |
| `orgId` | `String` | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `Object` | This is the phone number configuration for this session. |
| `phoneNumberId` | `String` | This is the ID of the phone number associated with this session. |
| `squad` | `Object` | This is the squad configuration for this session. |
| `squadId` | `String` | This is the squad ID associated with this session. |
| `status` | `String` | This is the current status of the session. |
| `updatedAt` | `String` | This is the ISO 8601 timestamp indicating when the session was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Session record (raises on error).
session = client.Session.load({ "id" => "session_id" })
```

#### Example: List

```ruby
# list returns an Array of Session records (raises on error).
sessions = client.Session.list
```

#### Example: Create

```ruby
session = client.Session.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Simulation

Create an instance: `simulation = client.Simulation`

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
| `assistantId` | `String` | ID of the assistant to generate scenarios for |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the simulation was created. |
| `id` | `String` | This is the unique identifier for the simulation. |
| `name` | `String` | This is an optional friendly name for the simulation. |
| `orgId` | `String` | This is the unique identifier for the organization this simulation belongs to. |
| `path` | `String` | Optional folder path for organizing simulations. |
| `personalityId` | `String` | This is the ID of the personality to use for this simulation. |
| `scenarioId` | `String` | This is the ID of the scenario to use for this simulation. |
| `squadId` | `String` | ID of the squad to generate scenarios for |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the simulation was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Simulation record (raises on error).
simulation = client.Simulation.load({ "id" => "simulation_id" })
```

#### Example: List

```ruby
# list returns an Array of Simulation records (raises on error).
simulations = client.Simulation.list
```

#### Example: Create

```ruby
simulation = client.Simulation.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "personalityId" => "example_personalityId", # String
  "scenarioId" => "example_scenarioId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### SimulationRun

Create an instance: `simulation_run = client.SimulationRun`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `String` | ISO 8601 date-time when created |
| `endedAt` | `String` | When the run ended |
| `endedReason` | `String` | Reason the run ended |
| `id` | `String` | Unique identifier for the run |
| `itemCounts` | `Object` | Aggregate counts of run items by status |
| `iterations` | `Float` | Number of times to run each simulation (default: 1) |
| `orgId` | `String` | Organization ID |
| `queuedAt` | `String` | When the run was queued |
| `simulations` | `Array` | Array of simulations and/or suites to run |
| `startedAt` | `String` | When the run started |
| `status` | `String` | Current status of the run |
| `target` | `Object` | Target to test against |
| `transport` | `Object` | Transport configuration for the simulation runs |
| `updatedAt` | `String` | ISO 8601 date-time when last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SimulationRun record (raises on error).
simulation_run = client.SimulationRun.load({ "id" => "simulation_run_id" })
```

#### Example: Create

```ruby
simulation_run = client.SimulationRun.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "orgId" => "example_orgId", # String
  "queuedAt" => "example_queuedAt", # String
  "simulations" => [], # Array
  "status" => "example_status", # String
  "target" => "example_target", # Object
  "updatedAt" => "example_updatedAt", # String
})
```


### SimulationRunItem

Create an instance: `simulation_run_item = client.SimulationRunItem`

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
| `callId` | `String` | This is the ID of the target Vapi call (the assistant being tested). |
| `canceledAt` | `String` | This is the ISO 8601 date-time string of when the run was canceled. |
| `completedAt` | `String` | This is the ISO 8601 date-time string of when the run completed. |
| `configurations` | `Object` | This is the configuration for how this simulation run executes. |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the run item was created. |
| `failedAt` | `String` | This is the ISO 8601 date-time string of when the run failed. |
| `failureReason` | `String` | This is the reason for failure. |
| `hooks` | `Array` | Hooks configured for this simulation run item |
| `id` | `String` | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `Object` | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `Float` | This is the iteration number (1-indexed) when run with iterations > 1. |
| `metadata` | `Object` | This is the metadata containing snapshots and call data. |
| `orgId` | `String` | This is the unique identifier for the organization. |
| `personalityId` | `String` | This is the personality ID at run creation time. |
| `queuedAt` | `String` | This is the ISO 8601 date-time string of when the run was queued. |
| `results` | `Object` | This is the results of the simulation run. |
| `runId` | `String` | This is the ID of the parent run (batch/group). |
| `scenarioId` | `String` | This is the scenario ID at run creation time. |
| `sessionId` | `String` | This is the session ID for chat-based simulations (webchat transport). |
| `simulationId` | `String` | This is the ID of the simulation this run belongs to. |
| `startedAt` | `String` | This is the ISO 8601 date-time string of when the run started. |
| `status` | `String` | This is the current status of the run. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the run item was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SimulationRunItem record (raises on error).
simulation_run_item = client.SimulationRunItem.load({ "id" => "simulation_run_item_id", "run_id" => "run_id" })
```

#### Example: List

```ruby
# list returns an Array of SimulationRunItem records (raises on error).
simulation_run_items = client.SimulationRunItem.list
```

#### Example: Create

```ruby
simulation_run_item = client.SimulationRunItem.create({
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


### SimulationSuite

Create an instance: `simulation_suite = client.SimulationSuite`

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
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `String` | This is the unique identifier for the simulation suite. |
| `name` | `String` | This is the name of the simulation suite. |
| `orgId` | `String` | This is the unique identifier for the organization this suite belongs to. |
| `path` | `String` | Optional folder path for organizing simulation suites. |
| `simulationIds` | `Array` | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `String` | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `Array` | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the suite was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SimulationSuite record (raises on error).
simulation_suite = client.SimulationSuite.load({ "id" => "simulation_suite_id" })
```

#### Example: List

```ruby
# list returns an Array of SimulationSuite records (raises on error).
simulation_suites = client.SimulationSuite.list
```

#### Example: Create

```ruby
simulation_suite = client.SimulationSuite.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "simulationIds" => [], # Array
  "targetAssignments" => [], # Array
  "updatedAt" => "example_updatedAt", # String
})
```


### Squad

Create an instance: `squad = client.Squad`

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
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `String` | This is the unique identifier for the squad. |
| `latestVersion` | `String` | This is the latest version label (e.g. |
| `members` | `Array` | This is the list of assistants that make up the squad. |
| `membersOverrides` | `Object` | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `Array` | Read-only. |
| `name` | `String` | This is the name of the squad. |
| `orgId` | `String` | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the squad was last updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Squad record (raises on error).
squad = client.Squad.load({ "id" => "squad_id" })
```

#### Example: List

```ruby
# list returns an Array of Squad records (raises on error).
squads = client.Squad.list
```

#### Example: Create

```ruby
squad = client.Squad.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "members" => [], # Array
  "orgId" => "example_orgId", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### StructuredOutput

Create an instance: `structured_output = client.StructuredOutput`

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
| `assistantIds` | `Array` | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `Object` | Compliance configuration for this output. |
| `conditions` | `Array` | These are the conditions that gate the execution of this structured output. |
| `createdAt` | `String` | This is the ISO 8601 date-time string of when the structured output was created. |
| `description` | `String` | This is the description of what the structured output extracts. |
| `id` | `String` | This is the unique identifier for the structured output. |
| `model` | `Object` | This is the model that will be used to extract the structured output. |
| `name` | `String` | This is the name of the structured output. |
| `orgId` | `String` | This is the unique identifier for the org that this structured output belongs to. |
| `regex` | `String` | This is the regex pattern to match against the transcript. |
| `schema` | `Object` | This is the JSON Schema definition for the structured output. |
| `type` | `String` | This is the type of structured output. |
| `updatedAt` | `String` | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `workflowIds` | `Array` | These are the workflow IDs that this structured output is linked to. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the StructuredOutput record (raises on error).
structured_output = client.StructuredOutput.load({ "id" => "structured_output_id" })
```

#### Example: List

```ruby
# list returns an Array of StructuredOutput records (raises on error).
structured_outputs = client.StructuredOutput.list
```

#### Example: Create

```ruby
structured_output = client.StructuredOutput.create({
  "createdAt" => "example_createdAt", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "orgId" => "example_orgId", # String
  "schema" => "example_schema", # Object
  "updatedAt" => "example_updatedAt", # String
})
```


### Tool

Create an instance: `tool = client.Tool`

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
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Tool record (raises on error).
tool = client.Tool.load({ "id" => "tool_id" })
```

#### Example: List

```ruby
# list returns an Array of Tool records (raises on error).
tools = client.Tool.list
```

#### Example: Create

```ruby
tool = client.Tool.create({
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

Features are the extension mechanism. A feature is a Ruby class
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

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Vapi_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Vapi_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
provider = client.Provider
provider.load({ "provider" => "example", "resource_name" => "example" })

# provider.data_get now returns the provider data from the last load
# provider.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
