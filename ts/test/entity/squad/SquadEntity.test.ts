

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


describe('SquadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.Squad()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'squad.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"This is the ISO 8601 date-time string of when the squad was created.","t":"`$STRING`","key$":"createdAt","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"This is the unique identifier for the squad.","t":"`$STRING`","key$":"id","index$":1},"latestVersion":{"a":true,"h":"Latest Version","n":"latestVersion","r":false,"sh":"This is the latest version label (e.g.","t":"`$STRING`","key$":"latestVersion","index$":2},"members":{"a":true,"h":"Members","n":"members","r":true,"sh":"This is the list of assistants that make up the squad.","t":"`$ARRAY`","union":{"branches":23,"count":8911,"depth":45},"key$":"members","index$":3},"membersOverrides":{"a":true,"h":"Members Overrides","n":"membersOverrides","r":false,"sh":"This can be used to override all the assistants' settings and provide values for their template variables.","t":"`$ANY`","union":{"branches":23,"count":5356,"depth":42},"key$":"membersOverrides","index$":4},"modelDeprecations":{"a":true,"h":"Model Deprecations","n":"modelDeprecations","r":false,"sh":"Read-only.","t":"`$ARRAY`","key$":"modelDeprecations","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"This is the name of the squad.","t":"`$STRING`","key$":"name","index$":6},"orgId":{"a":true,"h":"Org Id","n":"orgId","r":true,"sh":"This is the unique identifier for the org that this squad belongs to.","t":"`$STRING`","key$":"orgId","index$":7},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"This is the ISO 8601 date-time string of when the squad was last updated.","t":"`$STRING`","key$":"updatedAt","index$":8}},"id":{"field":"id","name":"id"},"name":"squad","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /squad","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/squad","q":{},"r":{},"s":[{"lit":"squad"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /squad","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"createdAtGe","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"createdAtGt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"createdAtLe","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"createdAtLt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"id_any","or":"idAny","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"updated_at_ge","or":"updatedAtGe","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"updated_at_gt","or":"updatedAtGt","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"updated_at_le","or":"updatedAtLe","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"updated_at_lt","or":"updatedAtLt","r":false,"t":"`$STRING`","index$":9}]},"k":"http","m":"GET","o":"/squad","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","id_any","limit","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"squad"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /squad/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/squad/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"squad"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /squad/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/squad/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"squad"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /squad/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/squad/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"squad"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"squad","name__orig":"squad","Name":"Squad","name_":"squad","name-":"squad","NAME":"SQUAD","index$":21}, {"active":true,"entity":"squad","key$":"BasicSquadFlow","kind":"basic","name":"BasicSquadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"squad_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"squad_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"squad_ref01","srcdatavar":"squad_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-squad_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"squad_ref01","srcdatavar":"squad_ref01_data","suffix":"_dt0"},"m":{"id":"squad01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-squad_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"squad_ref01","suffix":"_rm0"},"m":{"id":"squad01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"squad_ref01"}}],"index$":5}]}, 'Squad', {"POST /squad":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"description":"This is the name of the squad.","type":"string","key$":"name"},"members":{"description":"This is the list of assistants that make up the squad.\n\nThe call will start with the first assistant in the list.","items":{"properties":{"assistant":{"allOf":[],"description":"This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead."},"assistantDestinations":{"items":{},"type":"array"},"assistantId":{"description":"This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead.","nullable":true,"type":"string"},"assistantOverrides":{"allOf":[],"description":"This can be used to override the assistant's settings and provide values for it's template variables."},"assistantVersion":{"description":"This is the assistant version (e.g. `v3`) to pin for this squad member. When set, the call uses\nthe snapshot from `assistant_version` (by `(assistantId, version)`) instead of the latest. Valid\nonly with `assistantId`; rejected with inline `assistant`. Omit to follow the latest version.","nullable":true,"type":"string"}},"type":"object","x-ref":"#/components/schemas/SquadMemberDTO"},"type":"array","key$":"members"},"membersOverrides":{"allOf":[{"properties":{"analysisPlan":{},"artifactPlan":{},"backgroundSound":{},"backgroundSpeechDenoisingPlan":{},"clientMessages":{},"compliancePlan":{},"credentialIds":{},"credentials":{},"endCallMessage":{},"endCallPhrases":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"hooks":{},"keypadInputPlan":{},"maxDurationSeconds":{},"metadata":{},"model":{},"modelOutputInMessagesEnabled":{},"monitorPlan":{},"name":{},"observabilityPlan":{},"server":{},"serverMessages":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"tools:append":{},"transcriber":{},"transportConfigurations":{},"variableValues":{},"voice":{},"voicemailDetection":{},"voicemailMessage":{}},"type":"object","x-ref":"#/components/schemas/AssistantOverrides"}],"description":"This can be used to override all the assistants' settings and provide values for their template variables.\n\nBoth `membersOverrides` and `members[n].assistantOverrides` can be used together. First, `members[n].assistantOverrides` is applied. Then, `membersOverrides` is applied as a global override.","key$":"membersOverrides"}},"required":["members"],"x-ref":"#/components/schemas/CreateSquadDTO","index$":1}}}},"parameters":[]},"GET /squad":{"protocol":"http","parameters":[{"name":"idAny","required":false,"in":"query","description":"Return only squads matching the provided ids","schema":{"format":"uuid","type":"array","items":{"type":"string"}},"index$":0},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":1},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":2},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":3},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":4},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":5},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":9}]},"GET /squad/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /squad/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /squad/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the squad.","key$":"name"},"members":{"description":"This is the list of assistants that make up the squad.\n\nThe call will start with the first assistant in the list.","type":"array","items":{"type":"object","properties":{"assistantVersion":{"description":"This is the assistant version (e.g. `v3`) to pin for this squad member. When set, the call uses\nthe snapshot from `assistant_version` (by `(assistantId, version)`) instead of the latest. Valid\nonly with `assistantId`; rejected with inline `assistant`. Omit to follow the latest version.","nullable":true,"type":"string"},"assistantDestinations":{"items":{},"type":"array"},"assistantId":{"description":"This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead.","nullable":true,"type":"string"},"assistant":{"allOf":[],"description":"This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead."},"assistantOverrides":{"allOf":[],"description":"This can be used to override the assistant's settings and provide values for it's template variables."}},"x-ref":"#/components/schemas/SquadMemberDTO"},"key$":"members"},"membersOverrides":{"description":"This can be used to override all the assistants' settings and provide values for their template variables.\n\nBoth `membersOverrides` and `members[n].assistantOverrides` can be used together. First, `members[n].assistantOverrides` is applied. Then, `membersOverrides` is applied as a global override.","allOf":[{"type":"object","properties":{"transcriber":{},"model":{},"voice":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"voicemailDetection":{},"clientMessages":{},"serverMessages":{},"maxDurationSeconds":{},"backgroundSound":{},"modelOutputInMessagesEnabled":{},"transportConfigurations":{},"observabilityPlan":{},"credentials":{},"hooks":{},"tools:append":{},"variableValues":{},"name":{},"voicemailMessage":{},"endCallMessage":{},"endCallPhrases":{},"compliancePlan":{},"metadata":{},"backgroundSpeechDenoisingPlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"credentialIds":{},"server":{},"keypadInputPlan":{}},"x-ref":"#/components/schemas/AssistantOverrides"}],"key$":"membersOverrides"}},"required":["members"],"x-ref":"#/components/schemas/UpdateSquadDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const squad_ref01_ent = client.Squad()
    let squad_ref01_data = setup.data.new.squad['squad_ref01']

    squad_ref01_data = (await squad_ref01_ent.create(squad_ref01_data)).data()
    assert(null != squad_ref01_data.id)


    // LIST
    const squad_ref01_match: any = {}

    const squad_ref01_list = (await squad_ref01_ent.list(squad_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(squad_ref01_list, { id: squad_ref01_data.id })))


    // UPDATE
    const squad_ref01_data_up0: any = {}
    squad_ref01_data_up0.id = squad_ref01_data.id

    const squad_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-squad_ref01_' + setup.now }
    ;(squad_ref01_data_up0 as any)[squad_ref01_markdef_up0.name] = squad_ref01_markdef_up0.value

    const squad_ref01_resdata_up0 = (await squad_ref01_ent.update(squad_ref01_data_up0)).data()
    assert(squad_ref01_resdata_up0.id === squad_ref01_data_up0.id)

    assert((squad_ref01_resdata_up0 as any)[squad_ref01_markdef_up0.name] === squad_ref01_markdef_up0.value)


    // LOAD
    const squad_ref01_match_dt0: any = {}
    squad_ref01_match_dt0.id = squad_ref01_data.id
    const squad_ref01_data_dt0 = (await squad_ref01_ent.load(squad_ref01_match_dt0)).data()
    assert(squad_ref01_data_dt0.id === squad_ref01_data.id)


    // REMOVE
    const squad_ref01_match_rm0: any = { id: squad_ref01_data.id }
    await squad_ref01_ent.remove(squad_ref01_match_rm0)
  

    // LIST
    const squad_ref01_match_rt0: any = {}

    const squad_ref01_list_rt0 = (await squad_ref01_ent.list(squad_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(squad_ref01_list_rt0, { id: squad_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/squad/SquadTestData.json')

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
    ['squad01','squad02','squad03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_SQUAD_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_SQUAD_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_SQUAD_ENTID']
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
  
