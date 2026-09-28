# Vapi PHP SDK Reference

Complete API reference for the Vapi PHP SDK.


## VapiSDK

### Constructor

```php
require_once __DIR__ . '/vapi_sdk.php';

$client = new VapiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VapiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = VapiSDK::test();
```


### Instance Methods

#### `Analytics($data = null)`

Create a new `AnalyticsEntity` instance. Pass `null` for no initial data.

#### `Assistant($data = null)`

Create a new `AssistantEntity` instance. Pass `null` for no initial data.

#### `Board($data = null)`

Create a new `BoardEntity` instance. Pass `null` for no initial data.

#### `Call($data = null)`

Create a new `CallEntity` instance. Pass `null` for no initial data.

#### `Campaign($data = null)`

Create a new `CampaignEntity` instance. Pass `null` for no initial data.

#### `Chat($data = null)`

Create a new `ChatEntity` instance. Pass `null` for no initial data.

#### `CreateSimulationRun($data = null)`

Create a new `CreateSimulationRunEntity` instance. Pass `null` for no initial data.

#### `Eval($data = null)`

Create a new `EvalEntity` instance. Pass `null` for no initial data.

#### `File($data = null)`

Create a new `FileEntity` instance. Pass `null` for no initial data.

#### `Insight($data = null)`

Create a new `InsightEntity` instance. Pass `null` for no initial data.

#### `KnowledgeBase($data = null)`

Create a new `KnowledgeBaseEntity` instance. Pass `null` for no initial data.

#### `KnowledgeBaseV2File($data = null)`

Create a new `KnowledgeBaseV2FileEntity` instance. Pass `null` for no initial data.

#### `Personality($data = null)`

Create a new `PersonalityEntity` instance. Pass `null` for no initial data.

#### `PhoneNumber($data = null)`

Create a new `PhoneNumberEntity` instance. Pass `null` for no initial data.

#### `Provider($data = null)`

Create a new `ProviderEntity` instance. Pass `null` for no initial data.

#### `Scenario($data = null)`

Create a new `ScenarioEntity` instance. Pass `null` for no initial data.

#### `Scorecard($data = null)`

Create a new `ScorecardEntity` instance. Pass `null` for no initial data.

#### `Session($data = null)`

Create a new `SessionEntity` instance. Pass `null` for no initial data.

#### `Simulation($data = null)`

Create a new `SimulationEntity` instance. Pass `null` for no initial data.

#### `SimulationRun($data = null)`

Create a new `SimulationRunEntity` instance. Pass `null` for no initial data.

#### `SimulationRunItem($data = null)`

Create a new `SimulationRunItemEntity` instance. Pass `null` for no initial data.

#### `SimulationSuite($data = null)`

Create a new `SimulationSuiteEntity` instance. Pass `null` for no initial data.

#### `Squad($data = null)`

Create a new `SquadEntity` instance. Pass `null` for no initial data.

#### `StructuredOutput($data = null)`

Create a new `StructuredOutputEntity` instance. Pass `null` for no initial data.

#### `Tool($data = null)`

Create a new `ToolEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): VapiUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AnalyticsEntity

```php
$analytics = $client->Analytics();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queries` | `array` | Yes | This is the list of metric queries you want to perform. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Analytics()->create([
  "queries" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnalyticsEntity`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssistantEntity

```php
$assistant = $client->Assistant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisPlan` | `mixed` | No | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `mixed` | No | This is the plan for artifacts generated during assistant's calls. |
| `backgroundSound` | `mixed` | No | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `mixed` | No | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `array` | No | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `array` | No |  |
| `contentType` | `string` | No | The content-type the URL returned, when a response was received. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the assistant was created. |
| `credentialIds` | `array` | No | These are the credentials that will be used for the assistant calls. |
| `credentials` | `array` | No | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `string` | No | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `array` | No | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `string` | No | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `bool` | No |  |
| `firstMessageMode` | `string` | No | This is the mode for the first message. |
| `hooks` | `array` | No | This is a set of actions that will be performed on certain events. |
| `id` | `string` | Yes | This is the unique identifier for the assistant. |
| `keypadInputPlan` | `array` | No |  |
| `latestVersion` | `string` | No | This is the latest version label (e.g. |
| `maxDurationSeconds` | `float` | No | This is the maximum number of seconds that the call will last. |
| `metadata` | `array` | No | This is for metadata you want to store on the assistant. |
| `model` | `mixed` | No | These are the options for the assistant's LLM. |
| `modelDeprecations` | `array` | No | Read-only. |
| `modelOutputInMessagesEnabled` | `bool` | No | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `mixed` | No | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `string` | No | This is the name of the assistant. |
| `observabilityPlan` | `mixed` | No | This is the plan for observability of assistant's calls. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this assistant belongs to. |
| `reason` | `string` | No | Why validation failed. |
| `server` | `mixed` | No | This is where Vapi will send webhooks. |
| `serverMessages` | `array` | No | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `mixed` | No | This is the plan for when the assistant should start talking. |
| `status` | `float` | No | The HTTP status the URL returned, when a response was received. |
| `stopSpeakingPlan` | `mixed` | No | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `mixed` | No | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `array` | No | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the assistant was last updated. |
| `url` | `string` | Yes | This is the background sound URL to validate. |
| `valid` | `bool` | Yes | Whether the URL currently serves a live media file. |
| `voice` | `mixed` | No | These are the options for the assistant's voice. |
| `voicemailDetection` | `mixed` | No | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `string` | No | This is the message that the assistant will say if the call is forwarded to voicemail. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Assistant()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "updatedAt" => null, // string
  "url" => null, // string
  "valid" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Assistant()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Assistant()->load(["id" => "assistant_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Assistant()->remove(["id" => "assistant_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Assistant()->update([
  "id" => "assistant_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssistantEntity`

Create a new `AssistantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BoardEntity

```php
$board = $client->Board();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the Board was created. |
| `id` | `string` | Yes | This is the unique identifier for the Board. |
| `items` | `array` | No | This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board. |
| `layout` | `mixed` | Yes | This is the layout of the Board. |
| `name` | `string` | Yes | This is the name of the Board. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this Board belongs to. |
| `systemKey` | `string` | No | Server-owned key for system-provisioned boards. |
| `timeRangeOverride` | `mixed` | No | This is the timerange override for the board. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Board()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "layout" => null, // mixed
  "name" => null, // string
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Board()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Board()->load(["id" => "board_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Board()->remove(["id" => "board_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Board()->update([
  "id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BoardEntity`

Create a new `BoardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallEntity

```php
$call = $client->Call();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis` | `mixed` | No | This is the analysis of the call. |
| `artifact` | `mixed` | No | These are the artifacts created from the call. |
| `artifactPlan` | `mixed` | No | This is a copy of assistant artifact plan. |
| `assistant` | `mixed` | No | This is the assistant that will be used for the call. |
| `assistantId` | `string` | No | This is the assistant ID that will be used for the call. |
| `assistantOverrides` | `mixed` | No | These are the overrides for the `assistant` or `assistantId`'s settings and template variables. |
| `assistantVersion` | `string` | No | This is the assistant version to use for this call. |
| `campaignId` | `string` | No | This is the campaign ID that the call belongs to. |
| `compliance` | `mixed` | No | This is the compliance of the call. |
| `cost` | `float` | No | This is the cost of the call in USD. |
| `costBreakdown` | `mixed` | No | This is the cost of the call in USD. |
| `costs` | `array` | No | These are the costs of individual components of the call in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the call was created. |
| `customer` | `mixed` | No | This is the customer that will be called. |
| `customerId` | `string` | No | This is the customer that will be called. |
| `customers` | `array` | No | This is used to issue batch calls to multiple customers. |
| `destination` | `mixed` | No | This is the destination where the call ended up being transferred to. |
| `endedAt` | `string` | No | This is the ISO 8601 date-time string of when the call was ended. |
| `endedMessage` | `string` | No | This is the message that adds more context to the ended reason. |
| `endedReason` | `string` | No | This is the explanation for how the call ended. |
| `id` | `string` | Yes | This is the unique identifier for the call. |
| `messages` | `array` | No |  |
| `monitor` | `mixed` | No | This is to real-time monitor the call. |
| `name` | `string` | No | This is the name of the call. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this call belongs to. |
| `phoneCallProvider` | `string` | No | This is the provider of the call. |
| `phoneCallProviderId` | `string` | No | The ID of the call as provided by the phone number service. |
| `phoneCallTransport` | `string` | No | This is the transport of the phone call. |
| `phoneNumber` | `mixed` | No | This is the phone number that will be used for the call. |
| `phoneNumberId` | `string` | No | This is the phone number that will be used for the call. |
| `schedulePlan` | `mixed` | No | This is the schedule plan of the call. |
| `squad` | `mixed` | No | This is a squad that will be used for the call. |
| `squadId` | `string` | No | This is the squad that will be used for the call. |
| `squadOverrides` | `mixed` | No | These are the overrides for the `squad` or `squadId`'s member settings and template variables. |
| `squadVersion` | `string` | No | This is the squad version to use for this call. |
| `startedAt` | `string` | No | This is the ISO 8601 date-time string of when the call was started. |
| `status` | `string` | No | This is the status of the call. |
| `transport` | `mixed` | No | This is the transport of the call. |
| `type` | `string` | No | This is the type of call. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the call was last updated. |
| `workflow` | `mixed` | No | This is a workflow that will be used for the call. |
| `workflowId` | `string` | No | This is the workflow that will be used for the call. |
| `workflowOverrides` | `mixed` | No | These are the overrides for the `workflow` or `workflowId`'s settings and template variables. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Call()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Call()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Call()->load(["id" => "call_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Call()->remove(["id" => "call_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Call()->update([
  "id" => "call_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallEntity`

Create a new `CallEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CampaignEntity

```php
$campaign = $client->Campaign();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantId` | `string` | No | This is the assistant ID that will be used for the campaign calls. |
| `assistantOverrides` | `mixed` | No | These are the overrides for the assistant's settings and template variables for the campaign. |
| `callMetrics` | `mixed` | No | These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up. |
| `calls` | `array` | Yes | This is a map of call IDs to campaign call details. |
| `callsCounterEnded` | `float` | Yes | This is the number of calls that have ended. |
| `callsCounterEndedVoicemail` | `float` | Yes | This is the number of calls whose ended reason is 'voicemail'. |
| `callsCounterInProgress` | `float` | Yes | This is the number of calls that have been in progress. |
| `callsCounterQueued` | `float` | Yes | This is the number of calls that have been queued. |
| `callsCounterScheduled` | `float` | Yes | This is the number of calls that have been scheduled. |
| `contactCounters` | `mixed` | No | These are the per-status contact counts for this campaign. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the campaign was created. |
| `customers` | `array` | No | These are the customers that will be called in the campaign. |
| `dialPlan` | `array` | No | This is a list of dial entries, each specifying a phone number and the customers to call using that number. |
| `duplicateFromCampaignId` | `string` | No | Optional campaign ID to duplicate config from. |
| `endedReason` | `string` | No | This is the explanation for how the campaign ended. |
| `id` | `string` | Yes | This is the unique identifier for the campaign. |
| `maxConcurrency` | `float` | No | This is the maximum number of concurrent calls that will be made for the campaign. |
| `name` | `string` | Yes | This is the name of the campaign. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this campaign belongs to. |
| `phoneNumberId` | `string` | No | This is the phone number ID that will be used for the campaign calls. |
| `predialPlan` | `mixed` | No | This opts the campaign into the blocking `campaign.predial` eligibility webhook. |
| `schedulePlan` | `mixed` | No | This is the schedule plan for the campaign. |
| `server` | `mixed` | No | This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks. |
| `serverMessages` | `array` | No | These are the messages that will be sent to your Server URL. |
| `squadId` | `string` | No | This is the squad ID that will be used for the campaign calls. |
| `squadOverrides` | `mixed` | No | These are the overrides for the squad and template variables for the campaign. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Campaign()->create([
  "calls" => null, // array
  "callsCounterEnded" => null, // float
  "callsCounterEndedVoicemail" => null, // float
  "callsCounterInProgress" => null, // float
  "callsCounterQueued" => null, // float
  "callsCounterScheduled" => null, // float
  "createdAt" => null, // string
  "id" => null, // string
  "name" => null, // string
  "orgId" => null, // string
  "status" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Campaign()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Campaign()->load(["id" => "campaign_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Campaign()->remove(["id" => "campaign_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Campaign()->update([
  "id" => "campaign_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CampaignEntity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatEntity

```php
$chat = $client->Chat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistant` | `mixed` | No | This is the assistant that will be used for the chat. |
| `assistantId` | `string` | No | This is the assistant that will be used for the chat. |
| `assistantOverrides` | `mixed` | No | These are the variable values that will be used to replace template variables in the assistant messages. |
| `cost` | `float` | No | This is the cost of the chat in USD. |
| `costs` | `array` | No | These are the costs of individual components of the chat in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the chat was created. |
| `id` | `string` | Yes | This is the unique identifier for the chat. |
| `input` | `mixed` | No | This is the input text for the chat. |
| `messages` | `array` | No | This is an array of messages used as context for the chat. |
| `name` | `string` | No | This is the name of the chat. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this chat belongs to. |
| `output` | `array` | No | This is the output messages generated by the system in response to the input. |
| `previousChatId` | `string` | No | This is the ID of the chat that will be used as context for the new chat. |
| `sessionId` | `string` | No | This is the ID of the session that will be used for the chat. |
| `squad` | `mixed` | No | This is the squad that will be used for the chat. |
| `squadId` | `string` | No | This is the squad that will be used for the chat. |
| `stream` | `bool` | No | This is a flag that determines whether the response should be streamed. |
| `transport` | `mixed` | No | This is used to send the chat through a transport like SMS. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Chat()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Chat()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Chat()->load(["id" => "chat_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Chat()->remove(["id" => "chat_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatEntity`

Create a new `ChatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateSimulationRunEntity

```php
$create_simulation_run = $client->CreateSimulationRun();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `iterations` | `float` | No | Number of times to run each simulation (default: 1) |
| `simulations` | `array` | Yes | Array of simulations and/or suites to run |
| `target` | `mixed` | Yes | Target to test against |
| `transport` | `mixed` | No | Transport configuration for the simulation runs |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateSimulationRun()->create([
  "simulations" => null, // array
  "target" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateSimulationRunEntity`

Create a new `CreateSimulationRunEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EvalEntity

```php
$eval = $client->Eval();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cost` | `float` | Yes | This is the cost of the eval or suite run in USD. |
| `costs` | `array` | Yes | This is the break up of costs of the eval or suite run. |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No | This is the description of the eval. |
| `endedAt` | `string` | Yes |  |
| `endedMessage` | `string` | No | This is the ended message when the eval run ended for any reason apart from mockConversation.done |
| `endedReason` | `string` | Yes | This is the reason for the eval run to end. |
| `eval` | `mixed` | No | This is the transient eval that will be run |
| `evalId` | `string` | No | This is the id of the eval that will be run. |
| `id` | `string` | Yes |  |
| `messages` | `array` | Yes | This is the mock conversation that will be used to evaluate the flow of the conversation. |
| `name` | `string` | No | This is the name of the eval. |
| `orgId` | `string` | Yes |  |
| `results` | `array` | Yes | This is the results of the eval or suite run. |
| `startedAt` | `string` | Yes |  |
| `status` | `string` | Yes | This is the status of the eval run. |
| `target` | `mixed` | Yes | This is the target that will be run against the eval |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Eval()->create([
  "cost" => null, // float
  "costs" => null, // array
  "createdAt" => null, // string
  "endedAt" => null, // string
  "endedReason" => null, // string
  "id" => null, // string
  "messages" => null, // array
  "orgId" => null, // string
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
  "target" => null, // mixed
  "type" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Eval()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Eval()->load(["id" => "eval_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Eval()->remove(["id" => "eval_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Eval()->update([
  "id" => "eval_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EvalEntity`

Create a new `EvalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileEntity

```php
$file = $client->File();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bucket` | `string` | No |  |
| `bytes` | `float` | No |  |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the file was created. |
| `id` | `string` | Yes | This is the unique identifier for the file. |
| `key` | `string` | No |  |
| `metadata` | `array` | No |  |
| `mimetype` | `string` | No |  |
| `name` | `string` | No | This is the name of the file. |
| `object` | `string` | No |  |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this file belongs to. |
| `originalName` | `string` | No |  |
| `parsedTextBytes` | `float` | No |  |
| `parsedTextUrl` | `string` | No |  |
| `path` | `string` | No |  |
| `purpose` | `string` | No |  |
| `status` | `string` | No |  |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the file was last updated. |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->File()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->File()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->File()->load(["id" => "file_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->File()->remove(["id" => "file_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->File()->update([
  "id" => "file_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileEntity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InsightEntity

```php
$insight = $client->Insight();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Insight()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "type" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Insight()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Insight()->load(["id" => "insight_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Insight()->remove(["id" => "insight_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Insight()->update([
  "id" => "insight_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InsightEntity`

Create a new `InsightEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## KnowledgeBaseEntity

```php
$knowledge_base = $client->KnowledgeBase();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | No |  |
| `files` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->KnowledgeBase()->create([
  "createdAt" => null, // string
  "files" => null, // array
  "id" => null, // string
  "name" => null, // string
  "orgId" => null, // string
  "toolId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->KnowledgeBase()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->KnowledgeBase()->load(["id" => "knowledge_base_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->KnowledgeBase()->remove(["id" => "knowledge_base_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->KnowledgeBase()->update([
  "id" => "knowledge_base_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): KnowledgeBaseEntity`

Create a new `KnowledgeBaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## KnowledgeBaseV2FileEntity

```php
$knowledge_base_v2_file = $client->KnowledgeBaseV2File();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `float` | No |  |
| `createdAt` | `string` | Yes |  |
| `fileId` | `string` | Yes |  |
| `fileName` | `string` | No |  |
| `id` | `string` | Yes |  |
| `knowledgeBaseV2Id` | `string` | Yes |  |
| `mimetype` | `string` | No |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->KnowledgeBaseV2File()->create([
  "id" => null, // string
  "createdAt" => null, // string
  "fileId" => null, // string
  "knowledgeBaseV2Id" => null, // string
  "status" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->KnowledgeBaseV2File()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->KnowledgeBaseV2File()->remove(["id" => "id", "knowledge_base_id" => "knowledge_base_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): KnowledgeBaseV2FileEntity`

Create a new `KnowledgeBaseV2FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PersonalityEntity

```php
$personality = $client->Personality();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysisPlan` | `mixed` | No | This is the plan for analysis of assistant's calls. |
| `artifactPlan` | `mixed` | No | This is the plan for artifacts generated during assistant's calls. |
| `assistant` | `mixed` | Yes | This is the full assistant configuration for this personality. |
| `backgroundSound` | `mixed` | No | This is the background sound in the call. |
| `backgroundSpeechDenoisingPlan` | `mixed` | No | This enables filtering of noise and background speech while the user is talking. |
| `clientMessages` | `array` | No | These are the messages that will be sent to your Client SDKs. |
| `compliancePlan` | `array` | No |  |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the personality was created. |
| `credentialIds` | `array` | No | These are the credentials that will be used for the assistant calls. |
| `credentials` | `array` | No | These are dynamic credentials that will be used for the assistant calls. |
| `endCallMessage` | `string` | No | This is the message that the assistant will say if it ends the call. |
| `endCallPhrases` | `array` | No | This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. |
| `firstMessage` | `string` | No | This is the first message that the assistant will say. |
| `firstMessageInterruptionsEnabled` | `bool` | No |  |
| `firstMessageMode` | `string` | No | This is the mode for the first message. |
| `hooks` | `array` | No | This is a set of actions that will be performed on certain events. |
| `id` | `string` | Yes | This is the unique identifier for the personality. |
| `keypadInputPlan` | `array` | No |  |
| `maxDurationSeconds` | `float` | No | This is the maximum number of seconds that the call will last. |
| `metadata` | `array` | No | This is for metadata you want to store on the assistant. |
| `model` | `mixed` | No | These are the options for the assistant's LLM. |
| `modelOutputInMessagesEnabled` | `bool` | No | This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech. |
| `monitorPlan` | `mixed` | No | This is the plan for real-time monitoring of the assistant's calls. |
| `name` | `string` | No | This is the name of the assistant. |
| `observabilityPlan` | `mixed` | No | This is the plan for observability of assistant's calls. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this personality belongs to. |
| `path` | `string` | No | Optional folder path for organizing personalities. |
| `server` | `mixed` | No | This is where Vapi will send webhooks. |
| `serverMessages` | `array` | No | These are the messages that will be sent to your Server URL. |
| `startSpeakingPlan` | `mixed` | No | This is the plan for when the assistant should start talking. |
| `stopSpeakingPlan` | `mixed` | No | This is the plan for when assistant should stop talking on customer interruption. |
| `transcriber` | `mixed` | No | These are the options for the assistant's transcriber. |
| `transportConfigurations` | `array` | No | These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the personality was last updated. |
| `voice` | `mixed` | No | These are the options for the assistant's voice. |
| `voicemailDetection` | `mixed` | No | These are the settings to configure or disable voicemail detection. |
| `voicemailMessage` | `string` | No | This is the message that the assistant will say if the call is forwarded to voicemail. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Personality()->create([
  "assistant" => null, // mixed
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Personality()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Personality()->load(["id" => "personality_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Personality()->remove(["id" => "personality_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Personality()->update([
  "id" => "personality_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PersonalityEntity`

Create a new `PersonalityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PhoneNumberEntity

```php
$phone_number = $client->PhoneNumber();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `metadata` | `mixed` | Yes | Metadata about the pagination. |
| `results` | `array` | Yes | A list of phone numbers, which can be of any provider type. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PhoneNumber()->create([
  "metadata" => null, // mixed
  "results" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PhoneNumber()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PhoneNumber()->load(["id" => "phone_number_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PhoneNumber()->remove(["id" => "phone_number_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PhoneNumber()->update([
  "id" => "phone_number_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PhoneNumberEntity`

Create a new `PhoneNumberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProviderEntity

```php
$provider = $client->Provider();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `metadata` | `array` | Yes |  |
| `results` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Provider()->create([
  "provider" => null, // string
  "resource_name" => null, // string
  "metadata" => null, // array
  "results" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Provider()->load(["id" => "provider_id", "provider" => "provider", "resource_name" => "resource_name"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Provider()->remove(["id" => "provider_id", "provider" => "provider", "resource_name" => "resource_name"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Provider()->update([
  "id" => "provider_id",
  "provider" => "provider",
  "resource_name" => "resource_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProviderEntity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScenarioEntity

```php
$scenario = $client->Scenario();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the scenario was created. |
| `evaluations` | `array` | Yes | This is the structured output-based evaluation plan for the simulation. |
| `hooks` | `array` | No | Hooks to run on simulation lifecycle events |
| `id` | `string` | Yes | This is the unique identifier for the scenario. |
| `instructions` | `string` | Yes | This is the script/instructions for the tester to follow during the simulation. |
| `name` | `string` | Yes | This is the name of the scenario. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this scenario belongs to. |
| `path` | `string` | No | Optional folder path for organizing scenarios. |
| `targetOverrides` | `mixed` | No | Overrides to inject into the simulated target assistant or squad |
| `toolMocks` | `array` | No | Scenario-level tool call mocks to use during simulations. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Scenario()->create([
  "createdAt" => null, // string
  "evaluations" => null, // array
  "id" => null, // string
  "instructions" => null, // string
  "name" => null, // string
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Scenario()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Scenario()->load(["id" => "scenario_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Scenario()->remove(["id" => "scenario_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Scenario()->update([
  "id" => "scenario_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScenarioEntity`

Create a new `ScenarioEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScorecardEntity

```php
$scorecard = $client->Scorecard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `array` | No | These are the assistant IDs that this scorecard is linked to. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the scorecard was created. |
| `description` | `string` | No | This is the description of the scorecard. |
| `id` | `string` | Yes | This is the unique identifier for the scorecard. |
| `metrics` | `array` | Yes | These are the metrics that will be used to evaluate the scorecard. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Scorecard()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "metrics" => null, // array
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Scorecard()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Scorecard()->load(["id" => "scorecard_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Scorecard()->remove(["id" => "scorecard_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Scorecard()->update([
  "id" => "scorecard_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScorecardEntity`

Create a new `ScorecardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SessionEntity

```php
$session = $client->Session();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact` | `mixed` | No | These are the artifacts that were extracted from the session messages. |
| `assistant` | `mixed` | No | This is the assistant configuration for this session. |
| `assistantId` | `string` | No | This is the ID of the assistant associated with this session. |
| `assistantOverrides` | `mixed` | No | These are the overrides for the assistant configuration. |
| `cost` | `float` | No | This is the cost of the session in USD. |
| `costs` | `array` | No | These are the costs of individual components of the session in USD. |
| `createdAt` | `string` | Yes | This is the ISO 8601 timestamp indicating when the session was created. |
| `customer` | `mixed` | No | This is the customer information associated with this session. |
| `customerId` | `string` | No | This is the customerId of the customer associated with this session. |
| `expirationSeconds` | `float` | No | Session expiration time in seconds. |
| `id` | `string` | Yes | This is the unique identifier for the session. |
| `messages` | `array` | No | This is an array of chat messages in the session. |
| `name` | `string` | No | This is a user-defined name for the session. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization that owns this session. |
| `phoneNumber` | `mixed` | No | This is the phone number configuration for this session. |
| `phoneNumberId` | `string` | No | This is the ID of the phone number associated with this session. |
| `squad` | `mixed` | No | This is the squad configuration for this session. |
| `squadId` | `string` | No | This is the squad ID associated with this session. |
| `status` | `string` | No | This is the current status of the session. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 timestamp indicating when the session was last updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Session()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Session()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Session()->load(["id" => "session_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Session()->remove(["id" => "session_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Session()->update([
  "id" => "session_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SessionEntity`

Create a new `SessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SimulationEntity

```php
$simulation = $client->Simulation();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Simulation()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "personalityId" => null, // string
  "scenarioId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Simulation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Simulation()->load(["id" => "simulation_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Simulation()->remove(["id" => "simulation_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Simulation()->update([
  "id" => "simulation_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SimulationEntity`

Create a new `SimulationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SimulationRunEntity

```php
$simulation_run = $client->SimulationRun();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | ISO 8601 date-time when created |
| `endedAt` | `string` | No | When the run ended |
| `endedReason` | `string` | No | Reason the run ended |
| `id` | `string` | Yes | Unique identifier for the run |
| `itemCounts` | `mixed` | No | Aggregate counts of run items by status |
| `iterations` | `float` | No | Number of times to run each simulation (default: 1) |
| `orgId` | `string` | Yes | Organization ID |
| `queuedAt` | `string` | Yes | When the run was queued |
| `simulations` | `array` | Yes | Array of simulations and/or suites to run |
| `startedAt` | `string` | No | When the run started |
| `status` | `string` | Yes | Current status of the run |
| `target` | `mixed` | Yes | Target to test against |
| `transport` | `mixed` | No | Transport configuration for the simulation runs |
| `updatedAt` | `string` | Yes | ISO 8601 date-time when last updated |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SimulationRun()->load(["id" => "simulation_run_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SimulationRun()->update([
  "id" => "simulation_run_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SimulationRunEntity`

Create a new `SimulationRunEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SimulationRunItemEntity

```php
$simulation_run_item = $client->SimulationRunItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `callId` | `string` | No | This is the ID of the target Vapi call (the assistant being tested). |
| `canceledAt` | `string` | No | This is the ISO 8601 date-time string of when the run was canceled. |
| `completedAt` | `string` | No | This is the ISO 8601 date-time string of when the run completed. |
| `configurations` | `mixed` | No | This is the configuration for how this simulation run executes. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the run item was created. |
| `failedAt` | `string` | No | This is the ISO 8601 date-time string of when the run failed. |
| `failureReason` | `string` | No | This is the reason for failure. |
| `hooks` | `array` | No | Hooks configured for this simulation run item |
| `id` | `string` | Yes | This is the unique identifier for the simulation run item. |
| `improvementSuggestions` | `mixed` | No | This is the AI-generated improvement suggestions for failed runs. |
| `iterationNumber` | `float` | No | This is the iteration number (1-indexed) when run with iterations > 1. |
| `metadata` | `mixed` | No | This is the metadata containing snapshots and call data. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization. |
| `personalityId` | `string` | No | This is the personality ID at run creation time. |
| `queuedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the run was queued. |
| `results` | `mixed` | No | This is the results of the simulation run. |
| `runId` | `string` | No | This is the ID of the parent run (batch/group). |
| `scenarioId` | `string` | No | This is the scenario ID at run creation time. |
| `sessionId` | `string` | No | This is the session ID for chat-based simulations (webchat transport). |
| `simulationId` | `string` | Yes | This is the ID of the simulation this run belongs to. |
| `startedAt` | `string` | No | This is the ISO 8601 date-time string of when the run started. |
| `status` | `string` | Yes | This is the current status of the run. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the run item was last updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SimulationRunItem()->create([
  "item_id" => null, // string
  "run_id" => null, // string
  "force" => null, // string
  "createdAt" => null, // string
  "id" => null, // string
  "orgId" => null, // string
  "queuedAt" => null, // string
  "simulationId" => null, // string
  "status" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SimulationRunItem()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SimulationRunItem()->load(["id" => "simulation_run_item_id", "run_id" => "run_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SimulationRunItem()->update([
  "id" => "simulation_run_item_id",
  "run_id" => "run_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SimulationRunItemEntity`

Create a new `SimulationRunItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SimulationSuiteEntity

```php
$simulation_suite = $client->SimulationSuite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the suite was created. |
| `id` | `string` | Yes | This is the unique identifier for the simulation suite. |
| `name` | `string` | Yes | This is the name of the simulation suite. |
| `orgId` | `string` | Yes | This is the unique identifier for the organization this suite belongs to. |
| `path` | `string` | No | Optional folder path for organizing simulation suites. |
| `simulationIds` | `array` | Yes | This is the list of simulation IDs in this suite. |
| `slackWebhookUrl` | `string` | No | This is the Slack webhook URL for notifications. |
| `targetAssignments` | `array` | Yes | This is the ordered list of assistant or squad assignments for the suite. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SimulationSuite()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "name" => null, // string
  "orgId" => null, // string
  "simulationIds" => null, // array
  "targetAssignments" => null, // array
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SimulationSuite()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SimulationSuite()->load(["id" => "simulation_suite_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SimulationSuite()->remove(["id" => "simulation_suite_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SimulationSuite()->update([
  "id" => "simulation_suite_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SimulationSuiteEntity`

Create a new `SimulationSuiteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SquadEntity

```php
$squad = $client->Squad();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the squad was created. |
| `id` | `string` | Yes | This is the unique identifier for the squad. |
| `latestVersion` | `string` | No | This is the latest version label (e.g. |
| `members` | `array` | Yes | This is the list of assistants that make up the squad. |
| `membersOverrides` | `mixed` | No | This can be used to override all the assistants' settings and provide values for their template variables. |
| `modelDeprecations` | `array` | No | Read-only. |
| `name` | `string` | No | This is the name of the squad. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this squad belongs to. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the squad was last updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Squad()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "members" => null, // array
  "orgId" => null, // string
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Squad()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Squad()->load(["id" => "squad_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Squad()->remove(["id" => "squad_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Squad()->update([
  "id" => "squad_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SquadEntity`

Create a new `SquadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StructuredOutputEntity

```php
$structured_output = $client->StructuredOutput();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assistantIds` | `array` | No | These are the assistant IDs that this structured output is linked to. |
| `compliancePlan` | `mixed` | No | Compliance configuration for this output. |
| `conditions` | `array` | No | These are the conditions that gate the execution of this structured output. |
| `createdAt` | `string` | Yes | This is the ISO 8601 date-time string of when the structured output was created. |
| `description` | `string` | No | This is the description of what the structured output extracts. |
| `id` | `string` | Yes | This is the unique identifier for the structured output. |
| `model` | `mixed` | No | This is the model that will be used to extract the structured output. |
| `name` | `string` | Yes | This is the name of the structured output. |
| `orgId` | `string` | Yes | This is the unique identifier for the org that this structured output belongs to. |
| `regex` | `string` | No | This is the regex pattern to match against the transcript. |
| `schema` | `mixed` | Yes | This is the JSON Schema definition for the structured output. |
| `type` | `string` | No | This is the type of structured output. |
| `updatedAt` | `string` | Yes | This is the ISO 8601 date-time string of when the structured output was last updated. |
| `workflowIds` | `array` | No | These are the workflow IDs that this structured output is linked to. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StructuredOutput()->create([
  "createdAt" => null, // string
  "id" => null, // string
  "name" => null, // string
  "orgId" => null, // string
  "schema" => null, // mixed
  "updatedAt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->StructuredOutput()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->StructuredOutput()->load(["id" => "structured_output_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->StructuredOutput()->remove(["id" => "structured_output_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->StructuredOutput()->update([
  "id" => "structured_output_id",
  "schema_override" => "schema_override",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StructuredOutputEntity`

Create a new `StructuredOutputEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ToolEntity

```php
$tool = $client->Tool();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Tool()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Tool()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Tool()->load(["id" => "tool_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Tool()->remove(["id" => "tool_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Tool()->update([
  "id" => "tool_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ToolEntity`

Create a new `ToolEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new VapiSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

