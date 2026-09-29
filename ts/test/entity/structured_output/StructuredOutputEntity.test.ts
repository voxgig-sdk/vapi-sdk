

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { VapiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('StructuredOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.StructuredOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'structured_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assistantIds":{"a":true,"h":"Assistant Ids","n":"assistantIds","r":false,"sh":"These are the assistant IDs that this structured output is linked to.","t":"`$ARRAY`","key$":"assistantIds","index$":0},"compliancePlan":{"a":true,"h":"Compliance Plan","n":"compliancePlan","r":false,"sh":"Compliance configuration for this output.","t":"`$ANY`","key$":"compliancePlan","index$":1},"conditions":{"a":true,"h":"Conditions","n":"conditions","r":false,"sh":"These are the conditions that gate the execution of this structured output.","t":"`$ARRAY`","union":{"branches":3,"count":1,"depth":1},"key$":"conditions","index$":2},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"This is the ISO 8601 date-time string of when the structured output was created.","t":"`$STRING`","key$":"createdAt","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"This is the description of what the structured output extracts.","t":"`$STRING`","key$":"description","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"This is the unique identifier for the structured output.","t":"`$STRING`","key$":"id","index$":5},"model":{"a":true,"h":"Model","n":"model","r":false,"sh":"This is the model that will be used to extract the structured output.","t":"`$ANY`","union":{"branches":5,"count":1,"depth":0},"key$":"model","index$":6},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"This is the name of the structured output.","t":"`$STRING`","key$":"name","index$":7},"orgId":{"a":true,"h":"Org Id","n":"orgId","r":true,"sh":"This is the unique identifier for the org that this structured output belongs to.","t":"`$STRING`","key$":"orgId","index$":8},"regex":{"a":true,"h":"Regex","n":"regex","r":false,"sh":"This is the regex pattern to match against the transcript.","t":"`$STRING`","key$":"regex","index$":9},"schema":{"a":true,"h":"Schema","n":"schema","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"sh":"This is the JSON Schema definition for the structured output.","t":"`$ANY`","key$":"schema","index$":10},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"This is the type of structured output.","t":"`$STRING`","key$":"type","index$":11},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"This is the ISO 8601 date-time string of when the structured output was last updated.","t":"`$STRING`","key$":"updatedAt","index$":12},"workflowIds":{"a":true,"h":"Workflow Ids","n":"workflowIds","r":false,"sh":"These are the workflow IDs that this structured output is linked to.","t":"`$ARRAY`","key$":"workflowIds","index$":13}},"id":{"field":"id","name":"id"},"name":"structured_output","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /structured-output","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/structured-output","q":{},"r":{},"s":[{"lit":"structured-output"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /structured-output/run","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/structured-output/run","q":{"$action":"run"},"r":{},"s":[{"lit":"structured-output"},{"lit":"run"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /structured-output","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"createdAtGe","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"createdAtGt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"createdAtLe","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"createdAtLt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":7},{"a":true,"k":"query","n":"sort_by","or":"sortBy","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"sort_order","or":"sortOrder","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_ge","or":"updatedAtGe","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_gt","or":"updatedAtGt","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"updated_at_le","or":"updatedAtLe","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"updated_at_lt","or":"updatedAtLt","r":false,"t":"`$STRING`","index$":13}]},"k":"http","m":"GET","o":"/structured-output","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","id","limit","name","page","sort_by","sort_order","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"structured-output"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /structured-output/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/structured-output/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"structured-output"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /structured-output/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/structured-output/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"structured-output"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /structured-output/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"schema_override","or":"schemaOverride","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/structured-output/{id}","q":{"exist":["id","schema_override"]},"r":{},"s":[{"lit":"structured-output"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"structured_output","name__orig":"structured_output","Name":"StructuredOutput","name_":"structured_output","name-":"structured-output","NAME":"STRUCTURED_OUTPUT","index$":22}, {"active":true,"entity":"structured_output","key$":"BasicStructuredOutputFlow","kind":"basic","name":"BasicStructuredOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"structured_output_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"structured_output_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"structured_output_ref01","srcdatavar":"structured_output_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-structured_output_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"structured_output_ref01","srcdatavar":"structured_output_ref01_data","suffix":"_dt0"},"m":{"id":"structured_output01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-structured_output_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"structured_output_ref01","suffix":"_rm0"},"m":{"id":"structured_output01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"structured_output_ref01"}}],"index$":5}]}, 'StructuredOutput', {"POST /structured-output":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"type":{"default":"ai","description":"This is the type of structured output.\n\n- 'ai': Uses an LLM to extract structured data from the conversation (default).\n- 'regex': Uses a regex pattern to extract data from the transcript without an LLM.\n\nDefaults to 'ai' if not specified.","enum":["ai","regex"],"type":"string","key$":"type"},"regex":{"description":"This is the regex pattern to match against the transcript.\n\nSimulation evaluations use a canonical transcript built from recorded messages:\nUser: and AI: dialogue, AI: tool_calls: JSON name/arguments records, and\nAI: tool_call_results: JSON results. System messages are excluded. These\nfixed labels apply even when custom artifact transcript labels are configured.\nTool payloads participate in first-match and all-match extraction in event order.\nAn empty message array falls back to the supplied transcript verbatim.\nProduction-call extraction and call preview use their existing transcripts,\nso previewing the same output on a simulation's call can return a different result.\n\nOnly used when type is 'regex'. Supports both raw patterns (e.g. '\\d+') and\nregex literal format (e.g. '/\\d+/gi'). Uses RE2 syntax for safety.\n\nThe result depends on the schema type:\n- boolean: true if the pattern matches, false otherwise\n- string: the first match or first capture group\n- number/integer: the first match parsed as a number\n- array: all matches","maxLength":1000,"minLength":1,"type":"string","key$":"regex"},"model":{"description":"This is the model that will be used to extract the structured output.\n\nTo provide your own custom system and user prompts for structured output extraction, populate the messages array with your system and user messages. You can specify liquid templating in your system and user messages.\nBetween the system or user messages, you must reference either 'transcript' or 'messages' with the `{{}}` syntax to access the conversation history.\nBetween the system or user messages, you must reference a variation of the structured output with the `{{}}` syntax to access the structured output definition.\ni.e.:\n`{{structuredOutput}}`\n`{{structuredOutput.name}}`\n`{{structuredOutput.description}}`\n`{{structuredOutput.schema}}`\n\nIf model is not specified, GPT-4.1 will be used by default for extraction, utilizing default system and user prompts.\nIf messages or required fields are not specified, the default system and user prompts will be used.","oneOf":[{"properties":{"maxTokens":{},"messages":{},"model":{},"provider":{},"temperature":{}},"required":["provider","model"],"title":"WorkflowOpenAIModel","type":"object","x-ref":"#/components/schemas/WorkflowOpenAIModel"},{"properties":{"maxTokens":{},"messages":{},"model":{},"provider":{},"temperature":{},"thinking":{}},"required":["provider","model"],"title":"WorkflowAnthropicModel","type":"object","x-ref":"#/components/schemas/WorkflowAnthropicModel"},{"properties":{"maxTokens":{},"messages":{},"model":{},"provider":{},"temperature":{},"thinking":{}},"required":["provider","model"],"title":"WorkflowAnthropicBedrockModel","type":"object","x-ref":"#/components/schemas/WorkflowAnthropicBedrockModel"},{"properties":{"maxTokens":{},"messages":{},"model":{},"provider":{},"temperature":{}},"required":["provider","model"],"title":"WorkflowGoogleModel","type":"object","x-ref":"#/components/schemas/WorkflowGoogleModel"},{"properties":{"headers":{},"maxTokens":{},"messages":{},"metadataSendMode":{},"model":{},"provider":{},"temperature":{},"timeoutSeconds":{},"url":{}},"required":["provider","url","model"],"title":"WorkflowCustomModel","type":"object","x-ref":"#/components/schemas/WorkflowCustomModel"}],"key$":"model"},"compliancePlan":{"allOf":[{"properties":{"forceStoreOnHipaaEnabled":{}},"type":"object","x-ref":"#/components/schemas/ComplianceOverride"}],"description":"Compliance configuration for this output. Only enable overrides if no sensitive data will be stored.","example":{"forceStoreOnHipaaEnabled":false},"key$":"compliancePlan"},"conditions":{"description":"These are the conditions that gate the execution of this structured output. Every condition must pass for the structured output to run (AND semantics). When omitted or empty, no user-defined conditions gate this output. Send null to clear a previously saved gate.","example":[{"count":4,"type":"minMessages"},{"seconds":10,"type":"minCallDuration"}],"items":{"oneOf":[{"properties":{},"required":[],"title":"MinMessagesCondition","type":"object","x-ref":"#/components/schemas/MinMessagesCondition"},{"properties":{},"required":[],"title":"MinCallDurationCondition","type":"object","x-ref":"#/components/schemas/MinCallDurationCondition"},{"properties":{},"required":[],"title":"EndedReasonCondition","type":"object","x-ref":"#/components/schemas/EndedReasonCondition"}]},"nullable":true,"type":"array","key$":"conditions"},"name":{"description":"This is the name of the structured output.","maxLength":40,"minLength":1,"type":"string","key$":"name"},"schema":{"allOf":[{"properties":{"description":{},"enum":{},"format":{},"items":{},"pattern":{},"properties":{},"required":{},"title":{},"type":{}},"required":["type"],"type":"object","x-ref":"#/components/schemas/JsonSchema"}],"description":"This is the JSON Schema definition for the structured output.\n\nThis is required when creating a structured output. Defines the structure and validation rules for the data that will be extracted. Supports all JSON Schema features including:\n- Objects and nested properties\n- Arrays and array validation\n- String, number, boolean, and null types\n- Enums and const values\n- Validation constraints (min/max, patterns, etc.)\n- Composition with allOf, anyOf, oneOf","key$":"schema"},"description":{"description":"This is the description of what the structured output extracts.\n\nUse this to provide context about what data will be extracted and how it will be used.","type":"string","key$":"description"},"assistantIds":{"description":"These are the assistant IDs that this structured output is linked to.\n\nWhen linked to assistants, this structured output will be available for extraction during those assistant's calls.","items":{"type":"string"},"type":"array","key$":"assistantIds"},"workflowIds":{"description":"These are the workflow IDs that this structured output is linked to.\n\nWhen linked to workflows, this structured output will be available for extraction during those workflow's execution.","items":{"type":"string"},"type":"array","key$":"workflowIds"}},"required":["name","schema"],"x-ref":"#/components/schemas/CreateStructuredOutputDTO","index$":1}}}},"parameters":[]},"POST /structured-output/run":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"previewEnabled":{"type":"boolean","description":"This is the preview flag for the re-run. If true, the re-run will be executed and the response will be returned immediately and the call artifact will NOT be updated.\nIf false (default), the re-run will be executed and the response will be updated in the call artifact.","default":false},"structuredOutputId":{"type":"string","description":"This is the ID of the structured output that will be run. This must be provided unless a transient structured output is provided.\nWhen the re-run is executed, only the value of this structured output will be replaced with the new value, or added if not present."},"structuredOutput":{"description":"This is the transient structured output that will be run. This must be provided if a structured output ID is not provided.\nWhen the re-run is executed, the structured output value will be added to the existing artifact.","allOf":[{"type":"object","properties":{"type":{},"regex":{},"model":{},"compliancePlan":{},"conditions":{},"name":{},"schema":{},"description":{},"assistantIds":{},"workflowIds":{}},"required":["name","schema"],"x-ref":"#/components/schemas/CreateStructuredOutputDTO"}]},"callIds":{"description":"This is the array of callIds that will be updated with the new structured output value. If preview is true, this array must be provided and contain exactly 1 callId.\nIf preview is false, up to 100 callIds may be provided.","type":"array","items":{"type":"string"}}},"required":["callIds"],"x-ref":"#/components/schemas/StructuredOutputRunDTO"}}}},"parameters":[]},"GET /structured-output":{"protocol":"http","parameters":[{"name":"id","required":false,"in":"query","description":"This will return structured outputs where the id matches the specified value.","schema":{"type":"string"},"index$":0},{"name":"name","required":false,"in":"query","description":"This will return structured outputs where the name matches the specified value.","schema":{"type":"string"},"index$":1},{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":2},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":3},{"name":"sortBy","required":false,"in":"query","description":"This is the column to sort by. Defaults to 'createdAt'.","schema":{"enum":["createdAt","duration","cost"],"type":"string"},"index$":4},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":5},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":11},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":12},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":13}]},"GET /structured-output/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /structured-output/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /structured-output/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"type":{"type":"string","description":"This is the type of structured output.\n\n- 'ai': Uses an LLM to extract structured data from the conversation (default).\n- 'regex': Uses a regex pattern to extract data from the transcript without an LLM.","enum":["ai","regex"],"key$":"type"},"regex":{"type":"string","description":"This is the regex pattern to match against the transcript.\n\nSimulation evaluations use a canonical transcript built from recorded messages:\nUser: and AI: dialogue, AI: tool_calls: JSON name/arguments records, and\nAI: tool_call_results: JSON results. System messages are excluded. These\nfixed labels apply even when custom artifact transcript labels are configured.\nTool payloads participate in first-match and all-match extraction in event order.\nAn empty message array falls back to the supplied transcript verbatim.\nProduction-call extraction and call preview use their existing transcripts,\nso previewing the same output on a simulation's call can return a different result.\n\nOnly used when type is 'regex'. Supports both raw patterns (e.g. '\\d+') and\nregex literal format (e.g. '/\\d+/gi'). Uses RE2 syntax for safety.\n\nThe result depends on the schema type:\n- boolean: true if the pattern matches, false otherwise\n- string: the first match or first capture group\n- number/integer: the first match parsed as a number\n- array: all matches","minLength":1,"maxLength":1000,"key$":"regex"},"model":{"description":"This is the model that will be used to extract the structured output.\n\nTo provide your own custom system and user prompts for structured output extraction, populate the messages array with your system and user messages. You can specify liquid templating in your system and user messages.\nBetween the system or user messages, you must reference either 'transcript' or 'messages' with the `{{}}` syntax to access the conversation history.\nBetween the system or user messages, you must reference a variation of the structured output with the `{{}}` syntax to access the structured output definition.\ni.e.:\n`{{structuredOutput}}`\n`{{structuredOutput.name}}`\n`{{structuredOutput.description}}`\n`{{structuredOutput.schema}}`\n\nIf model is not specified, GPT-4.1 will be used by default for extraction, utilizing default system and user prompts.\nIf messages or required fields are not specified, the default system and user prompts will be used.","oneOf":[{"type":"object","properties":{"messages":{},"provider":{},"model":{},"temperature":{},"maxTokens":{}},"required":["provider","model"],"title":"WorkflowOpenAIModel","x-ref":"#/components/schemas/WorkflowOpenAIModel"},{"type":"object","properties":{"messages":{},"provider":{},"model":{},"thinking":{},"temperature":{},"maxTokens":{}},"required":["provider","model"],"title":"WorkflowAnthropicModel","x-ref":"#/components/schemas/WorkflowAnthropicModel"},{"type":"object","properties":{"messages":{},"provider":{},"model":{},"thinking":{},"temperature":{},"maxTokens":{}},"required":["provider","model"],"title":"WorkflowAnthropicBedrockModel","x-ref":"#/components/schemas/WorkflowAnthropicBedrockModel"},{"type":"object","properties":{"messages":{},"provider":{},"model":{},"temperature":{},"maxTokens":{}},"required":["provider","model"],"title":"WorkflowGoogleModel","x-ref":"#/components/schemas/WorkflowGoogleModel"},{"type":"object","properties":{"messages":{},"provider":{},"metadataSendMode":{},"url":{},"headers":{},"timeoutSeconds":{},"model":{},"temperature":{},"maxTokens":{}},"required":["provider","url","model"],"title":"WorkflowCustomModel","x-ref":"#/components/schemas/WorkflowCustomModel"}],"key$":"model"},"compliancePlan":{"description":"Compliance configuration for this output. Only enable overrides if no sensitive data will be stored.","example":{"forceStoreOnHipaaEnabled":false},"allOf":[{"type":"object","properties":{"forceStoreOnHipaaEnabled":{}},"x-ref":"#/components/schemas/ComplianceOverride"}],"key$":"compliancePlan"},"conditions":{"type":"array","nullable":true,"description":"These are the conditions that gate the execution of this structured output. Every condition must pass for the structured output to run (AND semantics). When omitted or empty, no user-defined conditions gate this output. Send null to clear a previously saved gate.","example":[{"type":"minMessages","count":4},{"type":"minCallDuration","seconds":10}],"items":{"oneOf":[{"type":"object","properties":{},"required":[],"title":"MinMessagesCondition","x-ref":"#/components/schemas/MinMessagesCondition"},{"type":"object","properties":{},"required":[],"title":"MinCallDurationCondition","x-ref":"#/components/schemas/MinCallDurationCondition"},{"type":"object","properties":{},"required":[],"title":"EndedReasonCondition","x-ref":"#/components/schemas/EndedReasonCondition"}]},"key$":"conditions"},"name":{"type":"string","description":"This is the name of the structured output.","minLength":1,"maxLength":40,"key$":"name"},"description":{"type":"string","description":"This is the description of what the structured output extracts.\n\nUse this to provide context about what data will be extracted and how it will be used.","key$":"description"},"assistantIds":{"description":"These are the assistant IDs that this structured output is linked to.\n\nWhen linked to assistants, this structured output will be available for extraction during those assistant's calls.","type":"array","items":{"type":"string"},"key$":"assistantIds"},"workflowIds":{"description":"These are the workflow IDs that this structured output is linked to.\n\nWhen linked to workflows, this structured output will be available for extraction during those workflow's execution.","type":"array","items":{"type":"string"},"key$":"workflowIds"},"schema":{"description":"This is the JSON Schema definition for the structured output.\n\nDefines the structure and validation rules for the data that will be extracted. Supports all JSON Schema features including:\n- Objects and nested properties\n- Arrays and array validation\n- String, number, boolean, and null types\n- Enums and const values\n- Validation constraints (min/max, patterns, etc.)\n- Composition with allOf, anyOf, oneOf","allOf":[{"type":"object","properties":{"type":{},"items":{},"properties":{},"description":{},"pattern":{},"format":{},"required":{},"enum":{},"title":{}},"required":["type"],"x-ref":"#/components/schemas/JsonSchema"}],"key$":"schema"}},"x-ref":"#/components/schemas/UpdateStructuredOutputDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0},{"name":"schemaOverride","required":true,"in":"query","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const structured_output_ref01_ent = client.StructuredOutput()
    let structured_output_ref01_data = setup.data.new.structured_output['structured_output_ref01']

    structured_output_ref01_data = (await structured_output_ref01_ent.create(structured_output_ref01_data)).data()
    assert(null != structured_output_ref01_data.id)


    // LIST
    const structured_output_ref01_match: any = {}

    const structured_output_ref01_list = (await structured_output_ref01_ent.list(structured_output_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(structured_output_ref01_list, { id: structured_output_ref01_data.id })))


    // UPDATE
    const structured_output_ref01_data_up0: any = {}
    structured_output_ref01_data_up0.id = structured_output_ref01_data.id

    const structured_output_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-structured_output_ref01_' + setup.now }
    ;(structured_output_ref01_data_up0 as any)[structured_output_ref01_markdef_up0.name] = structured_output_ref01_markdef_up0.value

    const structured_output_ref01_resdata_up0 = (await structured_output_ref01_ent.update(structured_output_ref01_data_up0)).data()
    assert(structured_output_ref01_resdata_up0.id === structured_output_ref01_data_up0.id)

    assert((structured_output_ref01_resdata_up0 as any)[structured_output_ref01_markdef_up0.name] === structured_output_ref01_markdef_up0.value)


    // LOAD
    const structured_output_ref01_match_dt0: any = {}
    structured_output_ref01_match_dt0.id = structured_output_ref01_data.id
    const structured_output_ref01_data_dt0 = (await structured_output_ref01_ent.load(structured_output_ref01_match_dt0)).data()
    assert(structured_output_ref01_data_dt0.id === structured_output_ref01_data.id)


    // REMOVE
    const structured_output_ref01_match_rm0: any = { id: structured_output_ref01_data.id }
    await structured_output_ref01_ent.remove(structured_output_ref01_match_rm0)
  

    // LIST
    const structured_output_ref01_match_rt0: any = {}

    const structured_output_ref01_list_rt0 = (await structured_output_ref01_ent.list(structured_output_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(structured_output_ref01_list_rt0, { id: structured_output_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/structured_output/StructuredOutputTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = VapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['structured_output01','structured_output02','structured_output03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_STRUCTURED_OUTPUT_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_STRUCTURED_OUTPUT_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_STRUCTURED_OUTPUT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new VapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.VAPI_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.VAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
