

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


describe('KnowledgeBaseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.KnowledgeBase()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'knowledge_base.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"files":{"a":true,"h":"Files","n":"files","r":true,"t":"`$ARRAY`","key$":"files","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":4},"orgId":{"a":true,"h":"Org Id","n":"orgId","r":true,"t":"`$STRING`","key$":"orgId","index$":5},"toolId":{"a":true,"h":"Tool Id","n":"toolId","r":true,"sh":"Id of the tool that searches this knowledge base (at most one per base; provisioned on creation).","t":"`$STRING`","key$":"toolId","index$":6},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":7}},"id":{"field":"id","name":"id"},"name":"knowledge_base","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/knowledge-base","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/knowledge-base","q":{},"r":{},"s":[{"lit":"v2"},{"lit":"knowledge-base"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/knowledge-base","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":0}]},"k":"http","m":"GET","o":"/v2/knowledge-base","q":{"exist":["limit"]},"r":{},"s":[{"lit":"v2"},{"lit":"knowledge-base"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/knowledge-base/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/knowledge-base/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"knowledge-base"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/knowledge-base/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/knowledge-base/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"knowledge-base"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v2/knowledge-base/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/knowledge-base/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"knowledge-base"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"knowledge_base","name__orig":"knowledge_base","Name":"KnowledgeBase","name_":"knowledge_base","name-":"knowledge-base","NAME":"KNOWLEDGE_BASE","index$":9}, {"active":true,"entity":"knowledge_base","key$":"BasicKnowledgeBaseFlow","kind":"basic","name":"BasicKnowledgeBaseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"knowledge_base_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"knowledge_base_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"knowledge_base_ref01","srcdatavar":"knowledge_base_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-knowledge_base_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"knowledge_base_ref01","srcdatavar":"knowledge_base_ref01_data","suffix":"_dt0"},"m":{"id":"knowledge_base01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-knowledge_base_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"knowledge_base_ref01","suffix":"_rm0"},"m":{"id":"knowledge_base01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"knowledge_base_ref01"}}],"index$":5}]}, 'KnowledgeBase', {"POST /v2/knowledge-base":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","minLength":1,"maxLength":80,"key$":"name"},"description":{"type":"string","nullable":true,"maxLength":1000,"key$":"description"}},"required":["name"],"x-ref":"#/components/schemas/CreateKnowledgeBaseV2DTO","index$":1}}}},"parameters":[]},"GET /v2/knowledge-base":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":0}]},"GET /v2/knowledge-base/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /v2/knowledge-base/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /v2/knowledge-base/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","minLength":1,"maxLength":80,"key$":"name"},"description":{"type":"string","nullable":true,"maxLength":1000,"key$":"description"}},"x-ref":"#/components/schemas/UpdateKnowledgeBaseV2DTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const knowledge_base_ref01_ent = client.KnowledgeBase()
    let knowledge_base_ref01_data = setup.data.new.knowledge_base['knowledge_base_ref01']

    knowledge_base_ref01_data = (await knowledge_base_ref01_ent.create(knowledge_base_ref01_data)).data()
    assert(null != knowledge_base_ref01_data.id)


    // LIST
    const knowledge_base_ref01_match: any = {}

    const knowledge_base_ref01_list = (await knowledge_base_ref01_ent.list(knowledge_base_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(knowledge_base_ref01_list, { id: knowledge_base_ref01_data.id })))


    // UPDATE
    const knowledge_base_ref01_data_up0: any = {}
    knowledge_base_ref01_data_up0.id = knowledge_base_ref01_data.id

    const knowledge_base_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-knowledge_base_ref01_' + setup.now }
    ;(knowledge_base_ref01_data_up0 as any)[knowledge_base_ref01_markdef_up0.name] = knowledge_base_ref01_markdef_up0.value

    const knowledge_base_ref01_resdata_up0 = (await knowledge_base_ref01_ent.update(knowledge_base_ref01_data_up0)).data()
    assert(knowledge_base_ref01_resdata_up0.id === knowledge_base_ref01_data_up0.id)

    assert((knowledge_base_ref01_resdata_up0 as any)[knowledge_base_ref01_markdef_up0.name] === knowledge_base_ref01_markdef_up0.value)


    // LOAD
    const knowledge_base_ref01_match_dt0: any = {}
    knowledge_base_ref01_match_dt0.id = knowledge_base_ref01_data.id
    const knowledge_base_ref01_data_dt0 = (await knowledge_base_ref01_ent.load(knowledge_base_ref01_match_dt0)).data()
    assert(knowledge_base_ref01_data_dt0.id === knowledge_base_ref01_data.id)


    // REMOVE
    const knowledge_base_ref01_match_rm0: any = { id: knowledge_base_ref01_data.id }
    await knowledge_base_ref01_ent.remove(knowledge_base_ref01_match_rm0)
  

    // LIST
    const knowledge_base_ref01_match_rt0: any = {}

    const knowledge_base_ref01_list_rt0 = (await knowledge_base_ref01_ent.list(knowledge_base_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(knowledge_base_ref01_list_rt0, { id: knowledge_base_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/knowledge_base/KnowledgeBaseTestData.json')

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
    ['knowledge_base01','knowledge_base02','knowledge_base03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_KNOWLEDGE_BASE_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_KNOWLEDGE_BASE_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_KNOWLEDGE_BASE_ENTID']
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
  
