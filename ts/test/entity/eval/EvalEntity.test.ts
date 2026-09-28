

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


describe('EvalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.Eval()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'eval.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cost":{"a":true,"h":"Cost","n":"cost","r":true,"sh":"This is the cost of the eval or suite run in USD.","t":"`$NUMBER`","key$":"cost","index$":0},"costs":{"a":true,"h":"Costs","n":"costs","r":true,"sh":"This is the break up of costs of the eval or suite run.","t":"`$ARRAY`","key$":"costs","index$":1},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"This is the description of the eval.","t":"`$STRING`","key$":"description","index$":3},"endedAt":{"a":true,"fo":"date-time","h":"Ended At","n":"endedAt","r":true,"t":"`$STRING`","key$":"endedAt","index$":4},"endedMessage":{"a":true,"h":"Ended Message","n":"endedMessage","r":false,"sh":"This is the ended message when the eval run ended for any reason apart from mockConversation.done","t":"`$STRING`","key$":"endedMessage","index$":5},"endedReason":{"a":true,"h":"Ended Reason","n":"endedReason","r":true,"sh":"This is the reason for the eval run to end.","t":"`$STRING`","key$":"endedReason","index$":6},"eval":{"a":true,"h":"Eval","n":"eval","r":false,"sh":"This is the transient eval that will be run","t":"`$ANY`","union":{"branches":6,"count":6,"depth":13},"key$":"eval","index$":7},"evalId":{"a":true,"h":"Eval Id","n":"evalId","r":false,"sh":"This is the id of the eval that will be run.","t":"`$STRING`","key$":"evalId","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":9},"messages":{"a":true,"h":"Messages","n":"messages","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"This is the mock conversation that will be used to evaluate the flow of the conversation.","t":"`$ARRAY`","union":{"branches":6,"count":5,"depth":9},"key$":"messages","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"This is the name of the eval.","t":"`$STRING`","key$":"name","index$":11},"orgId":{"a":true,"h":"Org Id","n":"orgId","r":true,"t":"`$STRING`","key$":"orgId","index$":12},"results":{"a":true,"h":"Results","n":"results","r":true,"sh":"This is the results of the eval or suite run.","t":"`$ARRAY`","union":{"branches":4,"count":1,"depth":4},"key$":"results","index$":13},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":true,"t":"`$STRING`","key$":"startedAt","index$":14},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"This is the status of the eval run.","t":"`$STRING`","key$":"status","index$":15},"target":{"a":true,"h":"Target","n":"target","r":true,"sh":"This is the target that will be run against the eval","t":"`$ANY`","union":{"branches":23,"count":28236,"depth":57},"key$":"target","index$":16},"type":{"a":true,"h":"Type","n":"type","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"This is the type of the run.","t":"`$STRING`","key$":"type","index$":17},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":18}},"id":{"field":"id","name":"id"},"name":"eval","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /eval","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/eval","q":{},"r":{},"s":[{"lit":"eval"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /eval/run","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/eval/run","q":{"$action":"run"},"r":{},"s":[{"lit":"eval"},{"lit":"run"}],"t":{"req":{"eval":"`reqdata`"},"res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /eval/run","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"created_at_ge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"created_at_gt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"created_at_le","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"created_at_lt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_ge","or":"updated_at_ge","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_gt","or":"updated_at_gt","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"updated_at_le","or":"updated_at_le","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"updated_at_lt","or":"updated_at_lt","r":false,"t":"`$STRING`","index$":13}]},"k":"http","m":"GET","o":"/eval/run","q":{"$action":"run","exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","id","limit","page","search","sort_by","sort_order","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"eval"},{"lit":"run"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /eval","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"created_at_ge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"created_at_gt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"created_at_le","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"created_at_lt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"updated_at_ge","or":"updated_at_ge","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_gt","or":"updated_at_gt","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_le","or":"updated_at_le","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"updated_at_lt","or":"updated_at_lt","r":false,"t":"`$STRING`","index$":12}]},"k":"http","m":"GET","o":"/eval","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","id","limit","page","sort_by","sort_order","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"eval"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /eval/run/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/eval/run/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"run"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.eval`"},"index$":0},{"a":true,"co":{"id":"GET /eval/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/eval/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /eval/run/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/eval/run/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"run"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.eval`"},"index$":0},{"a":true,"co":{"id":"DELETE /eval/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/eval/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /eval/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/eval/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"eval","name__orig":"eval","Name":"Eval","name_":"eval","name-":"eval","NAME":"EVAL","index$":7}, {"active":true,"entity":"eval","key$":"BasicEvalFlow","kind":"basic","name":"BasicEvalFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"eval_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"eval_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"eval_ref01","srcdatavar":"eval_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-eval_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"eval_ref01","srcdatavar":"eval_ref01_data","suffix":"_dt0"},"m":{"id":"eval01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-eval_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"eval_ref01","suffix":"_rm0"},"m":{"id":"eval01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"eval_ref01"}}],"index$":5}]}, 'Eval', {"POST /eval":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"messages":{"description":"This is the mock conversation that will be used to evaluate the flow of the conversation.\n\nMock Messages are used to simulate the flow of the conversation\n\nEvaluation Messages are used as checkpoints in the flow where the model's response to previous conversation needs to be evaluated to check the content and tool calls","example":"[{ role: \"user\", content: \"Hello, how are you?\" }, { role: \"assistant\", judgePlan: { type: \"exact\", content: \"I am good, thank you!\" } }]","items":{"oneOf":[{"properties":{},"required":[],"title":"ChatEvalAssistantMessageMock","type":"object","x-ref":"#/components/schemas/ChatEvalAssistantMessageMock"},{"properties":{},"required":[],"title":"ChatEvalSystemMessageMock","type":"object","x-ref":"#/components/schemas/ChatEvalSystemMessageMock"},{"properties":{},"required":[],"title":"ChatEvalToolResponseMessageMock","type":"object","x-ref":"#/components/schemas/ChatEvalToolResponseMessageMock"},{"properties":{},"required":[],"title":"ChatEvalToolResponseMessageEvaluation","type":"object","x-ref":"#/components/schemas/ChatEvalToolResponseMessageEvaluation"},{"properties":{},"required":[],"title":"ChatEvalUserMessageMock","type":"object","x-ref":"#/components/schemas/ChatEvalUserMessageMock"},{"properties":{},"required":[],"title":"ChatEvalAssistantMessageEvaluation","type":"object","x-ref":"#/components/schemas/ChatEvalAssistantMessageEvaluation"}]},"type":"array","key$":"messages"},"name":{"description":"This is the name of the eval.\nIt helps identify what the eval is checking for.","example":"Verified User Flow Eval","maxLength":80,"minLength":1,"type":"string","key$":"name"},"description":{"description":"This is the description of the eval.\nThis helps describe the eval and its purpose in detail. It will not be used to evaluate the flow of the conversation.","example":"This eval checks if the user flow is verified.","maxLength":500,"type":"string","key$":"description"},"type":{"description":"This is the type of the eval.\nCurrently it is fixed to `chat.mockConversation`.","enum":["chat.mockConversation"],"example":"chat.mockConversation","type":"string","key$":"type"}},"required":["messages","type"],"x-ref":"#/components/schemas/CreateEvalDTO","index$":1}}}},"parameters":[]},"POST /eval/run":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"eval":{"description":"This is the transient eval that will be run","oneOf":[{"type":"object","properties":{"messages":{},"name":{},"description":{},"type":{}},"required":["messages","type"],"title":"CreateEvalDTO","x-ref":"#/components/schemas/CreateEvalDTO"}],"allOf":[{"type":"object","properties":{"messages":{},"name":{},"description":{},"type":{}},"required":["messages","type"],"x-ref":"#/components/schemas/CreateEvalDTO"}]},"target":{"description":"This is the target that will be run against the eval","oneOf":[{"type":"object","properties":{"assistant":{},"assistantOverrides":{},"type":{},"assistantId":{}},"required":["type"],"title":"EvalRunTargetAssistant","x-ref":"#/components/schemas/EvalRunTargetAssistant"},{"type":"object","properties":{"squad":{},"assistantOverrides":{},"type":{},"squadId":{}},"required":["type"],"title":"EvalRunTargetSquad","x-ref":"#/components/schemas/EvalRunTargetSquad"}]},"type":{"type":"string","description":"This is the type of the run.\nCurrently it is fixed to `eval`.","example":"eval","enum":["eval"]},"evalId":{"type":"string","description":"This is the id of the eval that will be run.","example":"123e4567-e89b-12d3-a456-426614174000"}},"required":["target","type"],"x-ref":"#/components/schemas/CreateEvalRunDTO"}}}},"parameters":[]},"GET /eval/run":{"protocol":"http","parameters":[{"name":"sortBy","required":false,"in":"query","schema":{"enum":["createdAt"],"type":"string"},"index$":0},{"name":"search","required":false,"in":"query","description":"Literal, case-insensitive search across eval and assistant names.","schema":{"maxLength":256,"type":"string"},"index$":1},{"name":"id","required":false,"in":"query","schema":{"type":"string"},"index$":2},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":3},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":4},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":5},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11},{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":12},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":13}]},"GET /eval":{"protocol":"http","parameters":[{"name":"id","required":false,"in":"query","schema":{"type":"string"},"index$":0},{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":1},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":2},{"name":"sortBy","required":false,"in":"query","description":"This is the column to sort by. Defaults to 'createdAt'.","schema":{"enum":["createdAt","duration","cost"],"type":"string"},"index$":3},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":4},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":5},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":12}]},"GET /eval/run/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"GET /eval/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /eval/run/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /eval/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /eval/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"messages":{"type":"array","description":"This is the mock conversation that will be used to evaluate the flow of the conversation.\n\nMock Messages are used to simulate the flow of the conversation\n\nEvaluation Messages are used as checkpoints in the flow where the model's response to previous conversation needs to be evaluated to check the content and tool calls","example":"[{ role: \"user\", content: \"Hello, how are you?\" }, { role: \"assistant\", judgePlan: { type: \"exact\", content: \"I am good, thank you!\" } }]","items":{"oneOf":[{"type":"object","properties":{},"required":[],"title":"ChatEvalAssistantMessageMock","x-ref":"#/components/schemas/ChatEvalAssistantMessageMock"},{"type":"object","properties":{},"required":[],"title":"ChatEvalSystemMessageMock","x-ref":"#/components/schemas/ChatEvalSystemMessageMock"},{"type":"object","properties":{},"required":[],"title":"ChatEvalToolResponseMessageMock","x-ref":"#/components/schemas/ChatEvalToolResponseMessageMock"},{"type":"object","properties":{},"required":[],"title":"ChatEvalToolResponseMessageEvaluation","x-ref":"#/components/schemas/ChatEvalToolResponseMessageEvaluation"},{"type":"object","properties":{},"required":[],"title":"ChatEvalUserMessageMock","x-ref":"#/components/schemas/ChatEvalUserMessageMock"},{"type":"object","properties":{},"required":[],"title":"ChatEvalAssistantMessageEvaluation","x-ref":"#/components/schemas/ChatEvalAssistantMessageEvaluation"}]},"key$":"messages"},"name":{"type":"string","description":"This is the name of the eval.\nIt helps identify what the eval is checking for.","example":"Verified User Flow Eval","minLength":1,"maxLength":80,"key$":"name"},"description":{"type":"string","description":"This is the description of the eval.\nThis helps describe the eval and its purpose in detail. It will not be used to evaluate the flow of the conversation.","example":"This eval checks if the user flow is verified.","maxLength":500,"key$":"description"},"type":{"type":"string","description":"This is the type of the eval.\nCurrently it is fixed to `chat.mockConversation`.","example":"chat.mockConversation","enum":["chat.mockConversation"],"key$":"type"}},"x-ref":"#/components/schemas/UpdateEvalDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const eval_ref01_ent = client.Eval()
    let eval_ref01_data = setup.data.new.eval['eval_ref01']

    eval_ref01_data = (await eval_ref01_ent.create(eval_ref01_data)).data()
    assert(null != eval_ref01_data.id)


    // LIST
    const eval_ref01_match: any = {}

    const eval_ref01_list = (await eval_ref01_ent.list(eval_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(eval_ref01_list, { id: eval_ref01_data.id })))


    // UPDATE
    const eval_ref01_data_up0: any = {}
    eval_ref01_data_up0.id = eval_ref01_data.id

    const eval_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-eval_ref01_' + setup.now }
    ;(eval_ref01_data_up0 as any)[eval_ref01_markdef_up0.name] = eval_ref01_markdef_up0.value

    const eval_ref01_resdata_up0 = (await eval_ref01_ent.update(eval_ref01_data_up0)).data()
    assert(eval_ref01_resdata_up0.id === eval_ref01_data_up0.id)

    assert((eval_ref01_resdata_up0 as any)[eval_ref01_markdef_up0.name] === eval_ref01_markdef_up0.value)


    // LOAD
    const eval_ref01_match_dt0: any = {}
    eval_ref01_match_dt0.id = eval_ref01_data.id
    const eval_ref01_data_dt0 = (await eval_ref01_ent.load(eval_ref01_match_dt0)).data()
    assert(eval_ref01_data_dt0.id === eval_ref01_data.id)


    // REMOVE
    const eval_ref01_match_rm0: any = { id: eval_ref01_data.id }
    await eval_ref01_ent.remove(eval_ref01_match_rm0)
  

    // LIST
    const eval_ref01_match_rt0: any = {}

    const eval_ref01_list_rt0 = (await eval_ref01_ent.list(eval_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(eval_ref01_list_rt0, { id: eval_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/eval/EvalTestData.json')

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
    ['eval01','eval02','eval03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_EVAL_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_EVAL_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_EVAL_ENTID']
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
  
