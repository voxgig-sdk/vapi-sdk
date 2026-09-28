# Vapi API

Voice AI for developers.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 25 entities and 139 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Analytics](docs/api/analytics.html)

SDK operations: `create`.

Key fields to recognise:

- `queries`: This is the list of metric queries you want to perform.

### [Assistant](docs/api/assistant.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `analysisPlan`: This is the plan for analysis of assistant&#39;s calls. Stored in `call.analysis`.
- `artifactPlan`: This is the plan for artifacts generated during assistant&#39;s calls. Stored in `call.artifact`.
- `backgroundSound`: This is the background sound in the call. Default for phone calls is &#39;office&#39; and default for web calls is &#39;off&#39;. You can also provide a custom sound by providing a URL to an audio file.
- `backgroundSpeechDenoisingPlan`: This enables filtering of noise and background speech while the user is talking. Features: - Smart denoising using Krisp - Fourier denoising Smart denoising can be combined with or used independently of Fourier denoising. Order of precedence: - Smart denoising - Fourier denoising
- `clientMessages`: These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transfer-update,transcript,tool-calls,user-interrupted,voice-input,workflow.node.started,assistant.started. You can check the shape of the messages in ClientMessage schema.

### [Board](docs/api/board.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `createdAt`: This is the ISO 8601 date-time string of when the Board was created.
- `id`: This is the unique identifier for the Board.
- `items`: This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board.
- `layout`: This is the layout of the Board.
- `name`: This is the name of the Board.

### [Call](docs/api/call.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `analysis`: This is the analysis of the call. Configure in `assistant.analysisPlan`.
- `artifact`: These are the artifacts created from the call. Configure in `assistant.artifactPlan`.
- `artifactPlan`: This is a copy of assistant artifact plan. This isn&#39;t actually stored on the call but rather just returned in POST /call/web to enable artifact creation client side.
- `assistant`: This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. To start a call with: - Assistant, use `assistant` - Squad, use `squad` - Workflow, use `workflow`
- `assistantId`: This is the assistant ID that will be used for the call. To use a transient assistant, use `assistant` instead. To start a call with: - Assistant, use `assistantId` or `assistant` - Squad, use `squadId` or `squad` - Workflow, use `workflowId` or `workflow`

### [Campaign](docs/api/campaign.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `assistantId`: This is the assistant ID that will be used for the campaign calls. Note: Only one of assistantId, workflowId, or squadId can be used.
- `assistantOverrides`: These are the overrides for the assistant&#39;s settings and template variables for the campaign. Use this when the campaign targets an `assistantId`.
- `callMetrics`: These are the call-level outcomes for this campaign, how many contacts were actually dialed, and how many of those a human picked up.
- `calls`: This is a map of call IDs to campaign call details.
- `callsCounterEnded`: This is the number of calls that have ended.

### [Chat](docs/api/chat.html)

Results: Chat response - either non-streaming chat or streaming; OpenAI Responses API format - either non-streaming or streaming.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `assistant`: This is the assistant that will be used for the chat. To use an existing assistant, use `assistantId` instead.
- `assistantId`: This is the assistant that will be used for the chat. To use an existing assistant, use `assistantId` instead.
- `assistantOverrides`: These are the variable values that will be used to replace template variables in the assistant messages. Only variable substitution is supported in chat contexts - other assistant properties cannot be overridden.
- `cost`: This is the cost of the chat in USD.
- `costs`: These are the costs of individual components of the chat in USD.

### [CreateSimulationRun](docs/api/create_simulation_run.html)

SDK operations: `create`.

Key fields to recognise:

- `iterations`: Number of times to run each simulation (default: 1)
- `simulations`: Array of simulations and/or suites to run
- `target`: Target to test against
- `transport`: Transport configuration for the simulation runs

### [Eval](docs/api/eval.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `cost`: This is the cost of the eval or suite run in USD.
- `costs`: This is the break up of costs of the eval or suite run.
- `description`: This is the description of the eval. This helps describe the eval and its purpose in detail. It will not be used to evaluate the flow of the conversation.
- `endedAt`: This is the end time of the eval run result.
- `endedMessage`: This is the ended message when the eval run ended for any reason apart from mockConversation.done

### [File](docs/api/file.html)

Results: File uploaded successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `createdAt`: This is the ISO 8601 date-time string of when the file was created.
- `id`: This is the unique identifier for the file.
- `name`: This is the name of the file. This is just for your own reference.
- `orgId`: This is the unique identifier for the org that this file belongs to.
- `updatedAt`: This is the ISO 8601 date-time string of when the file was last updated.

### [Insight](docs/api/insight.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `createdAt`: This is the ISO 8601 date-time string of when the Insight was created.
- `id`: This is the unique identifier for the Insight.
- `name`: This is the name of the Insight.
- `orgId`: This is the unique identifier for the org that this Insight belongs to.
- `systemKey`: Stable server-owned identifier for system-created insights.

### [KnowledgeBase](docs/api/knowledge_base.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `toolId`: Id of the tool that searches this knowledge base (at most one per base; provisioned on creation). Attach it to an assistant via model.toolIds. Null when the base has no search tool yet.

### [KnowledgeBaseV2File](docs/api/knowledge_base_v2_file.html)

SDK operations: `create`, `list`, `remove`.

### [Personality](docs/api/personality.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `analysisPlan`: This is the plan for analysis of assistant&#39;s calls. Stored in `call.analysis`.
- `artifactPlan`: This is the plan for artifacts generated during assistant&#39;s calls. Stored in `call.artifact`.
- `assistant`: This is the full assistant configuration for this personality. It defines the tester&#39;s voice, model, behavior via system prompt, and other settings.
- `backgroundSound`: This is the background sound in the call. Default for phone calls is &#39;office&#39; and default for web calls is &#39;off&#39;. You can also provide a custom sound by providing a URL to an audio file.
- `backgroundSpeechDenoisingPlan`: This enables filtering of noise and background speech while the user is talking. Features: - Smart denoising using Krisp - Fourier denoising Smart denoising can be combined with or used independently of Fourier denoising. Order of precedence: - Smart denoising - Fourier denoising

### [PhoneNumber](docs/api/phone_number.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: This is the unique identifier for the phone number.
- `metadata`: Metadata about the pagination.
- `results`: A list of phone numbers, which can be of any provider type.

### [Provider](docs/api/provider.html)

Results: Successfully created provider resource; List of provider resources; Successfully retrieved provider resource.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: This is the unique identifier for the provider resource.

### [Scenario](docs/api/scenario.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `createdAt`: This is the ISO 8601 date-time string of when the scenario was created.
- `evaluations`: This is the structured output-based evaluation plan for the simulation. Each item defines a structured output to extract and evaluate against an expected value.
- `hooks`: Hooks to run on simulation lifecycle events
- `id`: This is the unique identifier for the scenario.
- `instructions`: This is the script/instructions for the tester to follow during the simulation.

### [Scorecard](docs/api/scorecard.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `assistantIds`: These are the assistant IDs that this scorecard is linked to. When linked to assistants, this scorecard will be available for evaluation during those assistants&#39; calls.
- `createdAt`: This is the ISO 8601 date-time string of when the scorecard was created.
- `description`: This is the description of the scorecard. It is only for user reference and will not be used for any evaluation.
- `id`: This is the unique identifier for the scorecard.
- `metrics`: These are the metrics that will be used to evaluate the scorecard. Each metric will have a set of conditions and points that will be used to generate the score.

### [Session](docs/api/session.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `artifact`: These are the artifacts that were extracted from the session messages. They are only available after the session has completed. The artifact plan from the assistant or active assistant of squad is used to generate the artifact. Currently the only supported fields of assistant artifact plan are: - structuredOutputIds
- `assistant`: This is the assistant configuration for this session. Use this when creating a new assistant configuration. If assistantId is provided, this will be ignored.
- `assistantId`: This is the ID of the assistant associated with this session. Use this when referencing an existing assistant.
- `assistantOverrides`: These are the overrides for the assistant configuration. Use this to provide variable values and other overrides when using assistantId. Variable substitution will be applied to the assistant&#39;s messages and other text-based fields.
- `cost`: This is the cost of the session in USD.

### [Simulation](docs/api/simulation.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `assistantId`: ID of the assistant to generate scenarios for
- `createdAt`: This is the ISO 8601 date-time string of when the simulation was created.
- `id`: This is the unique identifier for the simulation.
- `name`: This is an optional friendly name for the simulation.
- `orgId`: This is the unique identifier for the organization this simulation belongs to.

### [SimulationRun](docs/api/simulation_run.html)

SDK operations: `load`, `update`.

Key fields to recognise:

- `createdAt`: ISO 8601 date-time when created
- `endedAt`: When the run ended
- `endedReason`: Reason the run ended
- `id`: Unique identifier for the run
- `itemCounts`: Aggregate counts of run items by status

### [SimulationRunItem](docs/api/simulation_run_item.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `callId`: This is the ID of the target Vapi call (the assistant being tested).
- `canceledAt`: This is the ISO 8601 date-time string of when the run was canceled.
- `completedAt`: This is the ISO 8601 date-time string of when the run completed.
- `configurations`: This is the configuration for how this simulation run executes.
- `createdAt`: This is the ISO 8601 date-time string of when the run item was created.

### [SimulationSuite](docs/api/simulation_suite.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `createdAt`: This is the ISO 8601 date-time string of when the suite was created.
- `id`: This is the unique identifier for the simulation suite.
- `name`: This is the name of the simulation suite.
- `orgId`: This is the unique identifier for the organization this suite belongs to.
- `path`: Optional folder path for organizing simulation suites. Supports up to 3 levels (for example, &quot;dept/feature/variant&quot;). Maps to GitOps resource folder structure.

### [Squad](docs/api/squad.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `createdAt`: This is the ISO 8601 date-time string of when the squad was created.
- `id`: This is the unique identifier for the squad.
- `latestVersion`: This is the latest version label (for example `v3`) of the squad in the version history. `null` while the org is not yet onboarded to versioning, or for squads that have not yet been published under it.
- `members`: This is the list of assistants that make up the squad. The call will start with the first assistant in the list.
- `membersOverrides`: This can be used to override all the assistants&#39; settings and provide values for their template variables. Both `membersOverrides` and `members[n].assistantOverrides` can be used together. First, `members[n].assistantOverrides` is applied. Then, `membersOverrides` is applied as a global override.

### [StructuredOutput](docs/api/structured_output.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `assistantIds`: These are the assistant IDs that this structured output is linked to. When linked to assistants, this structured output will be available for extraction during those assistant&#39;s calls.
- `compliancePlan`: Compliance configuration for this output. Only enable overrides if no sensitive data will be stored.
- `conditions`: These are the conditions that gate the execution of this structured output. Every condition must pass for the structured output to run (AND semantics). When omitted or empty, no user-defined conditions gate this output. Send null to clear a previously saved gate.
- `createdAt`: This is the ISO 8601 date-time string of when the structured output was created.
- `description`: This is the description of what the structured output extracts. Use this to provide context about what data will be extracted and how it will be used.

### [Tool](docs/api/tool.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: This is the unique identifier for the tool.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Analytics](docs/api/analytics.html) | `create` | `POST /analytics` | Required |
| [Assistant](docs/api/assistant.html) | `create` | `POST /assistant` | Required |
| [Assistant](docs/api/assistant.html) | `create` | `POST /assistant/background-sound/validate` | Required |
| [Assistant](docs/api/assistant.html) | `list` | `GET /assistant` | Required |
| [Assistant](docs/api/assistant.html) | `load` | `GET /assistant/{id}` | Required |
| [Assistant](docs/api/assistant.html) | `remove` | `DELETE /assistant/{id}` | Required |
| [Assistant](docs/api/assistant.html) | `update` | `PATCH /assistant/{id}` | Required |
| [Board](docs/api/board.html) | `create` | `POST /reporting/board` | Required |
| [Board](docs/api/board.html) | `list` | `GET /reporting/board` | Required |
| [Board](docs/api/board.html) | `list` | `GET /reporting/board/default/metrics-overview` | Required |
| [Board](docs/api/board.html) | `load` | `GET /reporting/board/{id}` | Required |
| [Board](docs/api/board.html) | `remove` | `DELETE /reporting/board/{id}` | Required |
| [Board](docs/api/board.html) | `update` | `PATCH /reporting/board/{id}` | Required |
| [Call](docs/api/call.html) | `create` | `POST /call` | Required |
| [Call](docs/api/call.html) | `list` | `GET /call` | Required |
| [Call](docs/api/call.html) | `load` | `GET /call/{id}` | Required |
| [Call](docs/api/call.html) | `load` | `GET /call/{id}/assistant-recording` | Required |
| [Call](docs/api/call.html) | `load` | `GET /call/{id}/call-logs` | Required |
| [Call](docs/api/call.html) | `load` | `GET /call/{id}/customer-recording` | Required |
| [Call](docs/api/call.html) | `load` | `GET /call/{id}/mono-recording` | Required |
| [Call](docs/api/call.html) | `load` | `GET /call/{id}/pcap` | Required |
| [Call](docs/api/call.html) | `load` | `GET /call/{id}/stereo-recording` | Required |
| [Call](docs/api/call.html) | `load` | `GET /call/{id}/video-recording` | Required |
| [Call](docs/api/call.html) | `remove` | `DELETE /call/{id}` | Required |
| [Call](docs/api/call.html) | `update` | `PATCH /call/{id}` | Required |
| [Campaign](docs/api/campaign.html) | `create` | `POST /campaign` | Required |
| [Campaign](docs/api/campaign.html) | `create` | `POST /v2/campaign` | Required |
| [Campaign](docs/api/campaign.html) | `list` | `GET /v2/campaign` | Required |
| [Campaign](docs/api/campaign.html) | `list` | `GET /campaign` | Required |
| [Campaign](docs/api/campaign.html) | `list` | `GET /v2/campaign/{id}/contacts` | Required |
| [Campaign](docs/api/campaign.html) | `load` | `GET /v2/campaign/{id}` | Required |
| [Campaign](docs/api/campaign.html) | `load` | `GET /campaign/{id}` | Required |
| [Campaign](docs/api/campaign.html) | `remove` | `DELETE /campaign/{id}` | Required |
| [Campaign](docs/api/campaign.html) | `remove` | `DELETE /v2/campaign/{id}` | Required |
| [Campaign](docs/api/campaign.html) | `update` | `PATCH /campaign/{id}` | Required |
| [Campaign](docs/api/campaign.html) | `update` | `PATCH /v2/campaign/{id}` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat/responses` | Required |
| [Chat](docs/api/chat.html) | `list` | `GET /chat` | Required |
| [Chat](docs/api/chat.html) | `load` | `GET /chat/{id}` | Required |
| [Chat](docs/api/chat.html) | `remove` | `DELETE /chat/{id}` | Required |
| [CreateSimulationRun](docs/api/create_simulation_run.html) | `create` | `POST /eval/simulation/run` | Required |
| [Eval](docs/api/eval.html) | `create` | `POST /eval` | Required |
| [Eval](docs/api/eval.html) | `create` | `POST /eval/run` | Required |
| [Eval](docs/api/eval.html) | `list` | `GET /eval/run` | Required |
| [Eval](docs/api/eval.html) | `list` | `GET /eval` | Required |
| [Eval](docs/api/eval.html) | `load` | `GET /eval/run/{id}` | Required |
| [Eval](docs/api/eval.html) | `load` | `GET /eval/{id}` | Required |
| [Eval](docs/api/eval.html) | `remove` | `DELETE /eval/run/{id}` | Required |
| [Eval](docs/api/eval.html) | `remove` | `DELETE /eval/{id}` | Required |
| [Eval](docs/api/eval.html) | `update` | `PATCH /eval/{id}` | Required |
| [File](docs/api/file.html) | `create` | `POST /file` | Required |
| [File](docs/api/file.html) | `list` | `GET /file` | Required |
| [File](docs/api/file.html) | `load` | `GET /file/{id}` | Required |
| [File](docs/api/file.html) | `remove` | `DELETE /file/{id}` | Required |
| [File](docs/api/file.html) | `update` | `PATCH /file/{id}` | Required |
| [Insight](docs/api/insight.html) | `create` | `POST /reporting/insight/{id}/run` | Required |
| [Insight](docs/api/insight.html) | `create` | `POST /reporting/insight` | Required |
| [Insight](docs/api/insight.html) | `create` | `POST /reporting/insight/preview` | Required |
| [Insight](docs/api/insight.html) | `list` | `GET /reporting/insight` | Required |
| [Insight](docs/api/insight.html) | `load` | `GET /reporting/insight/{id}` | Required |
| [Insight](docs/api/insight.html) | `remove` | `DELETE /reporting/insight/{id}` | Required |
| [Insight](docs/api/insight.html) | `update` | `PATCH /reporting/insight/{id}` | Required |
| [KnowledgeBase](docs/api/knowledge_base.html) | `create` | `POST /v2/knowledge-base` | Required |
| [KnowledgeBase](docs/api/knowledge_base.html) | `list` | `GET /v2/knowledge-base` | Required |
| [KnowledgeBase](docs/api/knowledge_base.html) | `load` | `GET /v2/knowledge-base/{id}` | Required |
| [KnowledgeBase](docs/api/knowledge_base.html) | `remove` | `DELETE /v2/knowledge-base/{id}` | Required |
| [KnowledgeBase](docs/api/knowledge_base.html) | `update` | `PATCH /v2/knowledge-base/{id}` | Required |
| [KnowledgeBaseV2File](docs/api/knowledge_base_v2_file.html) | `create` | `POST /v2/knowledge-base/{id}/file/{fileId}/retry` | Required |
| [KnowledgeBaseV2File](docs/api/knowledge_base_v2_file.html) | `create` | `POST /v2/knowledge-base/{id}/file` | Required |
| [KnowledgeBaseV2File](docs/api/knowledge_base_v2_file.html) | `list` | `GET /v2/knowledge-base/{id}/file` | Required |
| [KnowledgeBaseV2File](docs/api/knowledge_base_v2_file.html) | `remove` | `DELETE /v2/knowledge-base/{id}/file/{fileId}` | Required |
| [Personality](docs/api/personality.html) | `create` | `POST /eval/simulation/personality` | Required |
| [Personality](docs/api/personality.html) | `list` | `GET /eval/simulation/personality` | Required |
| [Personality](docs/api/personality.html) | `load` | `GET /eval/simulation/personality/{id}` | Required |
| [Personality](docs/api/personality.html) | `remove` | `DELETE /eval/simulation/personality/{id}` | Required |
| [Personality](docs/api/personality.html) | `update` | `PATCH /eval/simulation/personality/{id}` | Required |
| [PhoneNumber](docs/api/phone_number.html) | `create` | `POST /phone-number` | Required |
| [PhoneNumber](docs/api/phone_number.html) | `list` | `GET /v2/phone-number` | Required |
| [PhoneNumber](docs/api/phone_number.html) | `list` | `GET /phone-number` | Required |
| [PhoneNumber](docs/api/phone_number.html) | `load` | `GET /phone-number/{id}` | Required |
| [PhoneNumber](docs/api/phone_number.html) | `remove` | `DELETE /phone-number/{id}` | Required |
| [PhoneNumber](docs/api/phone_number.html) | `update` | `PATCH /phone-number/{id}` | Required |
| [Provider](docs/api/provider.html) | `create` | `POST /provider/{provider}/{resourceName}` | Required |
| [Provider](docs/api/provider.html) | `load` | `GET /provider/{provider}/{resourceName}` | Required |
| [Provider](docs/api/provider.html) | `load` | `GET /provider/{provider}/{resourceName}/{id}` | Required |
| [Provider](docs/api/provider.html) | `remove` | `DELETE /provider/{provider}/{resourceName}/{id}` | Required |
| [Provider](docs/api/provider.html) | `update` | `PATCH /provider/{provider}/{resourceName}/{id}` | Required |
| [Scenario](docs/api/scenario.html) | `create` | `POST /eval/simulation/scenario` | Required |
| [Scenario](docs/api/scenario.html) | `list` | `GET /eval/simulation/scenario` | Required |
| [Scenario](docs/api/scenario.html) | `load` | `GET /eval/simulation/scenario/{id}` | Required |
| [Scenario](docs/api/scenario.html) | `remove` | `DELETE /eval/simulation/scenario/{id}` | Required |
| [Scenario](docs/api/scenario.html) | `update` | `PATCH /eval/simulation/scenario/{id}` | Required |
| [Scorecard](docs/api/scorecard.html) | `create` | `POST /observability/scorecard` | Required |
| [Scorecard](docs/api/scorecard.html) | `list` | `GET /observability/scorecard` | Required |
| [Scorecard](docs/api/scorecard.html) | `load` | `GET /observability/scorecard/{id}` | Required |
| [Scorecard](docs/api/scorecard.html) | `remove` | `DELETE /observability/scorecard/{id}` | Required |
| [Scorecard](docs/api/scorecard.html) | `update` | `PATCH /observability/scorecard/{id}` | Required |
| [Session](docs/api/session.html) | `create` | `POST /session` | Required |
| [Session](docs/api/session.html) | `list` | `GET /session` | Required |
| [Session](docs/api/session.html) | `load` | `GET /session/{id}` | Required |
| [Session](docs/api/session.html) | `remove` | `DELETE /session/{id}` | Required |
| [Session](docs/api/session.html) | `update` | `PATCH /session/{id}` | Required |
| [Simulation](docs/api/simulation.html) | `create` | `POST /eval/simulation` | Required |
| [Simulation](docs/api/simulation.html) | `create` | `POST /eval/simulation/scenario/generate` | Required |
| [Simulation](docs/api/simulation.html) | `list` | `GET /eval/simulation` | Required |
| [Simulation](docs/api/simulation.html) | `load` | `GET /eval/simulation/{id}` | Required |
| [Simulation](docs/api/simulation.html) | `load` | `GET /eval/simulation/concurrency` | Required |
| [Simulation](docs/api/simulation.html) | `remove` | `DELETE /eval/simulation/{id}` | Required |
| [Simulation](docs/api/simulation.html) | `update` | `PATCH /eval/simulation/{id}` | Required |
| [SimulationRun](docs/api/simulation_run.html) | `load` | `GET /eval/simulation/run` | Required |
| [SimulationRun](docs/api/simulation_run.html) | `load` | `GET /eval/simulation/run/{id}` | Required |
| [SimulationRun](docs/api/simulation_run.html) | `update` | `PATCH /eval/simulation/run/{id}` | Required |
| [SimulationRunItem](docs/api/simulation_run_item.html) | `create` | `POST /eval/simulation/run/{id}/item/{itemId}/generate` | Required |
| [SimulationRunItem](docs/api/simulation_run_item.html) | `list` | `GET /eval/simulation/run/{id}/item` | Required |
| [SimulationRunItem](docs/api/simulation_run_item.html) | `load` | `GET /eval/simulation/run/{id}/item/{itemId}` | Required |
| [SimulationRunItem](docs/api/simulation_run_item.html) | `update` | `PATCH /eval/simulation/run/{id}/item/{itemId}` | Required |
| [SimulationSuite](docs/api/simulation_suite.html) | `create` | `POST /eval/simulation/suite/{id}/duplicate` | Required |
| [SimulationSuite](docs/api/simulation_suite.html) | `create` | `POST /eval/simulation/suite` | Required |
| [SimulationSuite](docs/api/simulation_suite.html) | `list` | `GET /eval/simulation/suite` | Required |
| [SimulationSuite](docs/api/simulation_suite.html) | `load` | `GET /eval/simulation/suite/{id}` | Required |
| [SimulationSuite](docs/api/simulation_suite.html) | `remove` | `DELETE /eval/simulation/suite/{id}` | Required |
| [SimulationSuite](docs/api/simulation_suite.html) | `update` | `PATCH /eval/simulation/suite/{id}` | Required |
| [Squad](docs/api/squad.html) | `create` | `POST /squad` | Required |
| [Squad](docs/api/squad.html) | `list` | `GET /squad` | Required |
| [Squad](docs/api/squad.html) | `load` | `GET /squad/{id}` | Required |
| [Squad](docs/api/squad.html) | `remove` | `DELETE /squad/{id}` | Required |
| [Squad](docs/api/squad.html) | `update` | `PATCH /squad/{id}` | Required |
| [StructuredOutput](docs/api/structured_output.html) | `create` | `POST /structured-output` | Required |
| [StructuredOutput](docs/api/structured_output.html) | `create` | `POST /structured-output/run` | Required |
| [StructuredOutput](docs/api/structured_output.html) | `list` | `GET /structured-output` | Required |
| [StructuredOutput](docs/api/structured_output.html) | `load` | `GET /structured-output/{id}` | Required |
| [StructuredOutput](docs/api/structured_output.html) | `remove` | `DELETE /structured-output/{id}` | Required |
| [StructuredOutput](docs/api/structured_output.html) | `update` | `PATCH /structured-output/{id}` | Required |
| [Tool](docs/api/tool.html) | `create` | `POST /tool` | Required |
| [Tool](docs/api/tool.html) | `list` | `GET /tool` | Required |
| [Tool](docs/api/tool.html) | `load` | `GET /tool/{id}` | Required |
| [Tool](docs/api/tool.html) | `remove` | `DELETE /tool/{id}` | Required |
| [Tool](docs/api/tool.html) | `update` | `PATCH /tool/{id}` | Required |

## Connect to the API

- API server: `https://api.vapi.ai`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Retrieve your API Key from [Dashboard](dashboard.vapi.ai).

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `vapi_list`: List records for an entity. Supported entities: `assistant`, `board`, `call`, `campaign`, `chat`, `eval`, `file`, `insight`, `knowledge_base`, `knowledge_base_v2_file`, `personality`, `phone_number`, `scenario`, `scorecard`, `session`, `simulation`, `simulation_run_item`, `simulation_suite`, `squad`, `structured_output`, `tool`.
- `vapi_load`: Load one record for an entity. Supported entities: `assistant`, `board`, `call`, `campaign`, `chat`, `eval`, `file`, `insight`, `knowledge_base`, `personality`, `phone_number`, `provider`, `scenario`, `scorecard`, `session`, `simulation`, `simulation_run`, `simulation_run_item`, `simulation_suite`, `squad`, `structured_output`, `tool`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

