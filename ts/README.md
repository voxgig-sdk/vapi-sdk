# Vapi TypeScript SDK



The TypeScript SDK for the Vapi API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Analytics()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/vapi-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/vapi-sdk
npm install ./vapi-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { VapiSDK } from '@voxgig-sdk/vapi-sdk'

const client = new VapiSDK({
  apikey: process.env.VAPI_APIKEY,
})
```

### 4. Create, update, and remove

```ts
// Create — returns the created Analytics ENTITY (.data() for the record)
const created = await client.Analytics().create({
  queries: [],
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const provider = await client.Provider().load({ provider: "example", resource_name: "example" })
  console.log(provider)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = VapiSDK.test()

const provider = await client.Provider().load({ id: 'test01', provider: 'example_provider', resource_name: 'example_resource_name' })
// provider is the entity, populated with mock response data
// — call provider.data() for the record itself
console.log(provider)
```

You can also use the instance method:

```ts
const client = new VapiSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Provider()

// First call runs the operation and stores its result
await entity.load({ id: 'example', provider: 'example_provider', resource_name: 'example_resource_name' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new VapiSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### VapiSDK

#### Constructor

```ts
new VapiSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Analytics(data?)` | `AnalyticsEntity` | Create an Analytics entity instance. |
| `Assistant(data?)` | `AssistantEntity` | Create an Assistant entity instance. |
| `Board(data?)` | `BoardEntity` | Create a Board entity instance. |
| `Call(data?)` | `CallEntity` | Create a Call entity instance. |
| `Campaign(data?)` | `CampaignEntity` | Create a Campaign entity instance. |
| `Chat(data?)` | `ChatEntity` | Create a Chat entity instance. |
| `Eval(data?)` | `EvalEntity` | Create an Eval entity instance. |
| `File(data?)` | `FileEntity` | Create a File entity instance. |
| `Insight(data?)` | `InsightEntity` | Create an Insight entity instance. |
| `KnowledgeBase(data?)` | `KnowledgeBaseEntity` | Create a KnowledgeBase entity instance. |
| `KnowledgeBaseV2File(data?)` | `KnowledgeBaseV2FileEntity` | Create a KnowledgeBaseV2File entity instance. |
| `Personality(data?)` | `PersonalityEntity` | Create a Personality entity instance. |
| `PhoneNumber(data?)` | `PhoneNumberEntity` | Create a PhoneNumber entity instance. |
| `Provider(data?)` | `ProviderEntity` | Create a Provider entity instance. |
| `Scenario(data?)` | `ScenarioEntity` | Create a Scenario entity instance. |
| `Scorecard(data?)` | `ScorecardEntity` | Create a Scorecard entity instance. |
| `Session(data?)` | `SessionEntity` | Create a Session entity instance. |
| `Simulation(data?)` | `SimulationEntity` | Create a Simulation entity instance. |
| `SimulationRun(data?)` | `SimulationRunEntity` | Create a SimulationRun entity instance. |
| `SimulationRunItem(data?)` | `SimulationRunItemEntity` | Create a SimulationRunItem entity instance. |
| `SimulationSuite(data?)` | `SimulationSuiteEntity` | Create a SimulationSuite entity instance. |
| `Squad(data?)` | `SquadEntity` | Create a Squad entity instance. |
| `StructuredOutput(data?)` | `StructuredOutputEntity` | Create a StructuredOutput entity instance. |
| `Tool(data?)` | `ToolEntity` | Create a Tool entity instance. |
| `tester(testopts?, sdkopts?)` | `VapiSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `VapiSDK.test(testopts?, sdkopts?)` | `VapiSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): VapiSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Analytics

| Field | Description |
| --- | --- |
| `queries` | This is the list of metric queries you want to perform. |

Operations: create.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, remove.

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

Operations: create, list, load, remove, update.

API path: `/eval/simulation/personality`

#### PhoneNumber

| Field | Description |
| --- | --- |
| `id` |  |
| `metadata` | Metadata about the pagination. |
| `results` | A list of phone numbers, which can be of any provider type. |

Operations: create, list, load, remove, update.

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

Operations: create, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, load, update.

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

Operations: create, list, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/structured-output`

#### Tool

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, load, remove, update.

API path: `/tool`



## Entities


### Analytics

Create an instance: `const analytics = client.Analytics()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `queries` | `any[]` | This is the list of metric queries you want to perform. |

#### Example: Create

```ts
const analytics = await client.Analytics().create({
  queries: [],
})
```


### Assistant

Create an instance: `const assistant = client.Assistant()`

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
| `clientMessages` | `any[]` | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `Record<string, any>` |  |
| `contentType` | `string` | The content-type the URL returned, when a response was received. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `any[]` | These are the credentials that will be used for the assistant calls. |
| `credentials` | `any[]` | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `string` | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `any[]` | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `string` | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `boolean` |  |
| `firstMessageMode` | `string` | This is the mode for the first message. |
| `hooks` | `any[]` | This is a set of actions that will be performed on certain events. |
| `id` | `string` | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `Record<string, any>` |  |
| `latestVersion` | `string` | This is the latest version label (e.g. |
| `maxDurationSeconds` | `number` | This is the maximum number of seconds that the call will last. |
| `metadata` | `Record<string, any>` | This is for metadata you want to store on the assistant. |
| `model` | `any` | These are the options for the assistant's LLM. |
| `modelDeprecations` | `any[]` | Read-only. |
| `modelOutputInMessagesEnabled` | `boolean` | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `any` | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `string` | This is the name of the assistant. |
| `observabilityPlan` | `any` | This is the plan for observability of assistant's calls. |
| `orgId` | `string` | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `string` | Why validation failed. |
| `server` | `any` | This is where Vapi will send webhooks. |
| `serverMessages` | `any[]` | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `any` | This is the plan for when the assistant should start talking. |
| `status` | `number` | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `any` | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `any` | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `any[]` | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `string` | This is the background sound URL to validate. |
| `valid` | `boolean` | Whether the URL currently serves a live media file. |
| `voice` | `any` | These are the options for the assistant's voice. |
| `voicemailDetection` | `any` | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `string` | This is the message that the assistant will say if the call is forwarded to voicemail. |

#### Example: Load

```ts
const assistant = await client.Assistant().load({ id: 'assistant_id' })
```

#### Example: List

```ts
const assistants = await client.Assistant().list()
```

#### Example: Create

```ts
const assistant = await client.Assistant().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
  valid: true,
})
```


### Board

Create an instance: `const board = client.Board()`

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
| `items` | `any[]` | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `any` | This is the layout of the Board. |
| `name` | `string` | This is the name of the Board. |
| `orgId` | `string` | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `string` | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `any` | This is the timerange override for the board. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the Board was last updated. |

#### Example: Load

```ts
const board = await client.Board().load({ id: 'board_id' })
```

#### Example: List

```ts
const boards = await client.Board().list()
```

#### Example: Create

```ts
const board = await client.Board().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  layout: 'example_layout',
  name: 'example_name',
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### Call

Create an instance: `const call = client.Call()`

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
| `costs` | `any[]` | These are the costs of individual components of the call in USD. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `any` | This is the customer that will be called. |
| `customerId` | `string` | This is the customer that will be called. |
| `customers` | `any[]` | This is used to issue batch calls to multiple customers. |
| `destination` | `any` | This is the destination where the call ended up being transferred to. |
| `endedAt` | `string` | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `string` | This is the message that adds more context to the ended reason. |
| `endedReason` | `string` | This is the explanation for how the call ended. |
| `id` | `string` | This is the unique identifier for the call. |
| `messages` | `any[]` |  |
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

```ts
const call = await client.Call().load({ id: 'call_id' })
```

#### Example: List

```ts
const calls = await client.Call().list()
```

#### Example: Create

```ts
const call = await client.Call().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### Campaign

Create an instance: `const campaign = client.Campaign()`

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
| `calls` | `Record<string, any>` | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `number` | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `number` | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `number` | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `number` | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `number` | This is the number of calls that have been scheduled. |
| `contactCounters` | `any` | These are the per-status contact counts for this campaign. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `any[]` | These are the customers that will be called in the campaign. |
| `dialPlan` | `any[]` | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
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
| `serverMessages` | `any[]` | These are the messages that will be sent to your Server URL. |
| `squadId` | `string` | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `any` | These are the overrides for the squad and template variables for the campaign. |
| `status` | `string` | This is the status of the campaign. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the campaign was last updated. |
| `workflowId` | `string` | This is the workflow ID that will be used for the campaign calls. |

#### Example: Load

```ts
const campaign = await client.Campaign().load({ id: 'campaign_id' })
```

#### Example: List

```ts
const campaigns = await client.Campaign().list()
```

#### Example: Create

```ts
const campaign = await client.Campaign().create({
  calls: {},
  callsCounterEnded: 1,
  callsCounterEndedVoicemail: 1,
  callsCounterInProgress: 1,
  callsCounterQueued: 1,
  callsCounterScheduled: 1,
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  orgId: 'example_orgId',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```


### Chat

Create an instance: `const chat = client.Chat()`

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
| `costs` | `any[]` | These are the costs of individual components of the chat in USD. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `string` | This is the unique identifier for the chat. |
| `input` | `any` | This is the input text for the chat. |
| `messages` | `any[]` | This is an array of messages used as context for the chat. |
| `name` | `string` | This is the name of the chat. |
| `orgId` | `string` | This is the unique identifier for the org that this chat belongs to. |
| `output` | `any[]` | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `string` | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `string` | This is the ID of the session that will be used for the chat. |
| `squad` | `any` | This is the squad that will be used for the chat. |
| `squadId` | `string` | This is the squad that will be used for the chat. |
| `stream` | `boolean` | This is a flag that determines whether the response should be streamed. |
| `transport` | `any` | This is used to send the chat through a transport like SMS. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the chat was last updated. |

#### Example: Load

```ts
const chat = await client.Chat().load({ id: 'chat_id' })
```

#### Example: List

```ts
const chats = await client.Chat().list()
```

#### Example: Create

```ts
const chat = await client.Chat().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### Eval

Create an instance: `const eval_ = client.Eval()`

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
| `costs` | `any[]` | This is the break up of costs of the eval or suite run. |
| `createdAt` | `string` |  |
| `description` | `string` | This is the description of the eval. |
| `endedAt` | `string` |  |
| `endedMessage` | `string` | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `string` | This is the reason for the eval run to end. |
| `eval` | `any` | This is the transient eval that will be run |
| `evalId` | `string` | This is the id of the eval that will be run. |
| `id` | `string` |  |
| `messages` | `any[]` | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `string` | This is the name of the eval. |
| `orgId` | `string` |  |
| `results` | `any[]` | This is the results of the eval or suite run. |
| `startedAt` | `string` |  |
| `status` | `string` | This is the status of the eval run. |
| `target` | `any` | This is the target that will be run against the eval |
| `type` | `string` | This is the type of the run. |
| `updatedAt` | `string` |  |

#### Example: Load

```ts
const eval_ = await client.Eval().load({ id: 'eval_id' })
```

#### Example: List

```ts
const eval_s = await client.Eval().list()
```

#### Example: Create

```ts
const eval_ = await client.Eval().create({
  cost: 1,
  costs: [],
  createdAt: 'example_createdAt',
  endedAt: 'example_endedAt',
  endedReason: 'example_endedReason',
  id: 'example_id',
  messages: [],
  orgId: 'example_orgId',
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
  target: 'example_target',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```


### File

Create an instance: `const file = client.File()`

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
| `metadata` | `Record<string, any>` |  |
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

```ts
const file = await client.File().load({ id: 'file_id' })
```

#### Example: List

```ts
const files = await client.File().list()
```

#### Example: Create

```ts
const file = await client.File().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### Insight

Create an instance: `const insight = client.Insight()`

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

```ts
const insight = await client.Insight().load({ id: 'insight_id' })
```

#### Example: List

```ts
const insights = await client.Insight().list()
```

#### Example: Create

```ts
const insight = await client.Insight().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```


### KnowledgeBase

Create an instance: `const knowledge_base = client.KnowledgeBase()`

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
| `files` | `any[]` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `orgId` | `string` |  |
| `toolId` | `string` | Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). |
| `updatedAt` | `string` |  |

#### Example: Load

```ts
const knowledge_base = await client.KnowledgeBase().load({ id: 'knowledge_base_id' })
```

#### Example: List

```ts
const knowledge_bases = await client.KnowledgeBase().list()
```

#### Example: Create

```ts
const knowledge_base = await client.KnowledgeBase().create({
  createdAt: 'example_createdAt',
  files: [],
  id: 'example_id',
  name: 'example_name',
  orgId: 'example_orgId',
  toolId: 'example_toolId',
  updatedAt: 'example_updatedAt',
})
```


### KnowledgeBaseV2File

Create an instance: `const knowledge_base_v2_file = client.KnowledgeBaseV2File()`

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

```ts
const knowledge_base_v2_files = await client.KnowledgeBaseV2File().list({ id: "example" })
```

#### Example: Create

```ts
const knowledge_base_v2_file = await client.KnowledgeBaseV2File().create({
  id: 'example_id',
  createdAt: 'example_createdAt',
  fileId: 'example_fileId',
  knowledgeBaseV2Id: 'example_knowledgeBaseV2Id',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```


### Personality

Create an instance: `const personality = client.Personality()`

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

```ts
const personality = await client.Personality().load({ id: 'personality_id' })
```

#### Example: List

```ts
const personalitys = await client.Personality().list()
```

#### Example: Create

```ts
const personality = await client.Personality().create({
  assistant: 'example_assistant',
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### PhoneNumber

Create an instance: `const phone_number = client.PhoneNumber()`

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
| `results` | `any[]` | A list of phone numbers, which can be of any provider type. |

#### Example: Load

```ts
const phone_number = await client.PhoneNumber().load({ id: 'phone_number_id' })
```

#### Example: List

```ts
const phone_numbers = await client.PhoneNumber().list()
```

#### Example: Create

```ts
const phone_number = await client.PhoneNumber().create({
  metadata: 'example_metadata',
  results: [],
})
```


### Provider

Create an instance: `const provider = client.Provider()`

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
| `metadata` | `Record<string, any>` |  |
| `orgId` | `string` | This is the unique identifier for the org that this provider resource belongs to. |
| `provider` | `string` | This is the provider that manages this resource. |
| `resource` | `Record<string, any>` | This is the full resource data from the provider's API. |
| `resourceId` | `string` | This is the provider-specific identifier for the resource. |
| `resourceName` | `string` | This is the name/type of the resource. |
| `results` | `any[]` |  |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the provider resource was last updated. |

#### Example: Load

```ts
const provider = await client.Provider().load({ id: 'provider_id', provider: 'provider', resource_name: 'resource_name' })
```

#### Example: Create

```ts
const provider = await client.Provider().create({
  provider: 'example_provider',
  resource_name: 'example_resource_name',
  createdAt: 'example_createdAt',
  id: 'example_id',
  metadata: {},
  orgId: 'example_orgId',
  resource: {},
  resourceId: 'example_resourceId',
  resourceName: 'example_resourceName',
  results: [],
  updatedAt: 'example_updatedAt',
})
```


### Scenario

Create an instance: `const scenario = client.Scenario()`

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
| `evaluations` | `any[]` | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `any[]` | Hooks to run on simulation lifecycle events |
| `id` | `string` | This is the unique identifier for the scenario. |
| `instructions` | `string` | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `string` | This is the name of the scenario. |
| `orgId` | `string` | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `string` | Optional folder path for organizing scenarios. |
| `targetOverrides` | `any` | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `any[]` | Scenario-level tool call mocks to use during simulations. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the scenario was last updated. |

#### Example: Load

```ts
const scenario = await client.Scenario().load({ id: 'scenario_id' })
```

#### Example: List

```ts
const scenarios = await client.Scenario().list()
```

#### Example: Create

```ts
const scenario = await client.Scenario().create({
  createdAt: 'example_createdAt',
  evaluations: [],
  id: 'example_id',
  instructions: 'example_instructions',
  name: 'example_name',
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### Scorecard

Create an instance: `const scorecard = client.Scorecard()`

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
| `assistantIds` | `any[]` | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `string` | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `string` | This is the description of the scorecard. |
| `id` | `string` | This is the unique identifier for the scorecard. |
| `metrics` | `any[]` | These are the metrics that will be used to evaluate the scorecard. |
| `name` | `string` | This is the name of the scorecard. |
| `orgId` | `string` | This is the unique identifier for the org that this scorecard belongs to. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the scorecard was last updated. |

#### Example: Load

```ts
const scorecard = await client.Scorecard().load({ id: 'scorecard_id' })
```

#### Example: List

```ts
const scorecards = await client.Scorecard().list()
```

#### Example: Create

```ts
const scorecard = await client.Scorecard().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  metrics: [],
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### Session

Create an instance: `const session = client.Session()`

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
| `costs` | `any[]` | These are the costs of individual components of the session in USD. |
| `createdAt` | `string` | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `any` | This is the customer information associated with this session. |
| `customerId` | `string` | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `number` | Session expiration time in seconds. |
| `id` | `string` | This is the unique identifier for the session. |
| `messages` | `any[]` | This is an array of chat messages in the session. |
| `name` | `string` | This is a user-defined name for the session. |
| `orgId` | `string` | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `any` | This is the phone number configuration for this session. |
| `phoneNumberId` | `string` | This is the ID of the phone number associated with this session. |
| `squad` | `any` | This is the squad configuration for this session. |
| `squadId` | `string` | This is the squad ID associated with this session. |
| `status` | `string` | This is the current status of the session. |
| `updatedAt` | `string` | This is the ISO 8601 timestamp indicating when the session was last updated. |

#### Example: Load

```ts
const session = await client.Session().load({ id: 'session_id' })
```

#### Example: List

```ts
const sessions = await client.Session().list()
```

#### Example: Create

```ts
const session = await client.Session().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### Simulation

Create an instance: `const simulation = client.Simulation()`

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

```ts
const simulation = await client.Simulation().load({ id: 'simulation_id' })
```

#### Example: List

```ts
const simulations = await client.Simulation().list()
```

#### Example: Create

```ts
const simulation = await client.Simulation().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  personalityId: 'example_personalityId',
  scenarioId: 'example_scenarioId',
  updatedAt: 'example_updatedAt',
})
```


### SimulationRun

Create an instance: `const simulation_run = client.SimulationRun()`

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
| `simulations` | `any[]` | Array of simulations and/or suites to run |
| `startedAt` | `string` | When the run started |
| `status` | `string` | Current status of the run |
| `target` | `any` | Target to test against |
| `transport` | `any` | Transport configuration for the simulation runs |
| `updatedAt` | `string` | ISO 8601 date-time when last updated |

#### Example: Load

```ts
const simulation_run = await client.SimulationRun().load({ id: 'simulation_run_id' })
```

#### Example: Create

```ts
const simulation_run = await client.SimulationRun().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  queuedAt: 'example_queuedAt',
  simulations: [],
  status: 'example_status',
  target: 'example_target',
  updatedAt: 'example_updatedAt',
})
```


### SimulationRunItem

Create an instance: `const simulation_run_item = client.SimulationRunItem()`

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
| `hooks` | `any[]` | Hooks configured for this simulation run item |
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

```ts
const simulation_run_item = await client.SimulationRunItem().load({ id: 'simulation_run_item_id', run_id: 'run_id' })
```

#### Example: List

```ts
const simulation_run_items = await client.SimulationRunItem().list()
```

#### Example: Create

```ts
const simulation_run_item = await client.SimulationRunItem().create({
  item_id: 'example_item_id',
  run_id: 'example_run_id',
  force: 'example_force',
  createdAt: 'example_createdAt',
  id: 'example_id',
  orgId: 'example_orgId',
  queuedAt: 'example_queuedAt',
  simulationId: 'example_simulationId',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```


### SimulationSuite

Create an instance: `const simulation_suite = client.SimulationSuite()`

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
| `simulationIds` | `any[]` | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `string` | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `any[]` | This is the ordered list of assistant or squad assignments for the suite. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the suite was last updated. |

#### Example: Load

```ts
const simulation_suite = await client.SimulationSuite().load({ id: 'simulation_suite_id' })
```

#### Example: List

```ts
const simulation_suites = await client.SimulationSuite().list()
```

#### Example: Create

```ts
const simulation_suite = await client.SimulationSuite().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  orgId: 'example_orgId',
  simulationIds: [],
  targetAssignments: [],
  updatedAt: 'example_updatedAt',
})
```


### Squad

Create an instance: `const squad = client.Squad()`

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
| `members` | `any[]` | This is the list of assistants that make up the squad. |
| `membersOverrides` | `any` | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `any[]` | Read-only. |
| `name` | `string` | This is the name of the squad. |
| `orgId` | `string` | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `string` | This is the ISO 8601 date-time string of when the squad was last updated. |

#### Example: Load

```ts
const squad = await client.Squad().load({ id: 'squad_id' })
```

#### Example: List

```ts
const squads = await client.Squad().list()
```

#### Example: Create

```ts
const squad = await client.Squad().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  members: [],
  orgId: 'example_orgId',
  updatedAt: 'example_updatedAt',
})
```


### StructuredOutput

Create an instance: `const structured_output = client.StructuredOutput()`

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
| `assistantIds` | `any[]` | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `any` | Compliance configuration for this output. |
| `conditions` | `any[]` | These are the conditions that gate the execution of this structured output. |
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
| `workflowIds` | `any[]` | These are the workflow IDs that this structured output is linked to. |

#### Example: Load

```ts
const structured_output = await client.StructuredOutput().load({ id: 'structured_output_id' })
```

#### Example: List

```ts
const structured_outputs = await client.StructuredOutput().list()
```

#### Example: Create

```ts
const structured_output = await client.StructuredOutput().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  orgId: 'example_orgId',
  schema: 'example_schema',
  updatedAt: 'example_updatedAt',
})
```


### Tool

Create an instance: `const tool = client.Tool()`

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

```ts
const tool = await client.Tool().load({ id: 'tool_id' })
```

#### Example: List

```ts
const tools = await client.Tool().list()
```

#### Example: Create

```ts
const tool = await client.Tool().create({
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
vapi/
├── src/
│   ├── VapiSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { VapiSDK } from '@voxgig-sdk/vapi-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const provider = client.Provider()
await provider.load({ provider: "example", resource_name: "example" })

// provider.data() now returns the provider data from the last `load`
// provider.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
