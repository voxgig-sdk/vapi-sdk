

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


describe('PersonalityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.Personality()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'personality.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assistant":{"a":true,"h":"Assistant","n":"assistant","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"sh":"This is the full assistant configuration for this personality.","t":"`$ANY`","union":{"branches":23,"count":19650,"depth":55},"key$":"assistant","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"This is the ISO 8601 date-time string of when the personality was created.","t":"`$STRING`","key$":"createdAt","index$":1},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"This is the unique identifier for the personality.","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"This is the name of the personality (e.g., \"Confused Carl\", \"Rude Rob\").","t":"`$STRING`","key$":"name","index$":3},"orgId":{"a":true,"fo":"uuid","h":"Org Id","n":"orgId","r":true,"sh":"This is the unique identifier for the organization this personality belongs to.","t":"`$STRING`","key$":"orgId","index$":4},"path":{"a":true,"h":"Path","n":"path","r":false,"sh":"Optional folder path for organizing personalities.","t":"`$STRING`","key$":"path","index$":5},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"This is the ISO 8601 date-time string of when the personality was last updated.","t":"`$STRING`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"personality","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /eval/simulation/personality","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/eval/simulation/personality","q":{},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /eval/simulation/personality","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"createdAtGe","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"createdAtGt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"createdAtLe","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"createdAtLt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"sort_by","or":"sortBy","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"sort_order","or":"sortOrder","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"updated_at_ge","or":"updatedAtGe","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"updated_at_gt","or":"updatedAtGt","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_le","or":"updatedAtLe","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_lt","or":"updatedAtLt","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/eval/simulation/personality","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","limit","page","sort_by","sort_order","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /eval/simulation/personality/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/eval/simulation/personality/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /eval/simulation/personality/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/eval/simulation/personality/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /eval/simulation/personality/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/eval/simulation/personality/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"personality","name__orig":"personality","Name":"Personality","name_":"personality","name-":"personality","NAME":"PERSONALITY","index$":11}, {"active":true,"entity":"personality","key$":"BasicPersonalityFlow","kind":"basic","name":"BasicPersonalityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"personality_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"personality_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"personality_ref01","srcdatavar":"personality_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-personality_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"personality_ref01","srcdatavar":"personality_ref01_data","suffix":"_dt0"},"m":{"id":"personality01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-personality_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"personality_ref01","suffix":"_rm0"},"m":{"id":"personality01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"personality_ref01"}}],"index$":5}]}, 'Personality', {"POST /eval/simulation/personality":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the personality (e.g., \"Confused Carl\", \"Rude Rob\").","maxLength":80,"key$":"name"},"assistant":{"description":"This is the full assistant configuration for this personality.\nIt defines the tester's voice, model, behavior via system prompt, and other settings.","allOf":[{"type":"object","properties":{"transcriber":{},"model":{},"voice":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"voicemailDetection":{},"clientMessages":{},"serverMessages":{},"maxDurationSeconds":{},"backgroundSound":{},"modelOutputInMessagesEnabled":{},"transportConfigurations":{},"observabilityPlan":{},"credentials":{},"hooks":{},"name":{},"voicemailMessage":{},"endCallMessage":{},"endCallPhrases":{},"compliancePlan":{},"metadata":{},"backgroundSpeechDenoisingPlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"credentialIds":{},"server":{},"keypadInputPlan":{}},"x-ref":"#/components/schemas/CreateAssistantDTO"}],"key$":"assistant"},"path":{"type":"string","nullable":true,"description":"Optional folder path for organizing personalities.\nSupports up to 3 levels (e.g., \"dept/feature/variant\").\nMaps to GitOps resource folder structure.","maxLength":255,"pattern":"/^[a-zA-Z0-9][a-zA-Z0-9._-]*(?:\\/[a-zA-Z0-9][a-zA-Z0-9._-]*){0,2}$/","key$":"path"}},"required":["name","assistant"],"x-ref":"#/components/schemas/CreatePersonalityDTO","index$":1}}}},"parameters":[]},"GET /eval/simulation/personality":{"protocol":"http","parameters":[{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":0},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":1},{"name":"sortBy","required":false,"in":"query","description":"This is the column to sort by. Defaults to 'createdAt'.","schema":{"enum":["createdAt","duration","cost"],"type":"string"},"index$":2},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":3},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":4},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":5},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11}]},"GET /eval/simulation/personality/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /eval/simulation/personality/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /eval/simulation/personality/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the personality.","maxLength":80,"key$":"name"},"assistant":{"description":"Complete assistant replacement. Omitted credentials and redacted server secrets are preserved when their endpoint URL is unchanged. Send credentials: [] to clear credentials; omit a server container to remove it.","allOf":[{"type":"object","properties":{"transcriber":{},"model":{},"voice":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"voicemailDetection":{},"clientMessages":{},"serverMessages":{},"maxDurationSeconds":{},"backgroundSound":{},"modelOutputInMessagesEnabled":{},"transportConfigurations":{},"observabilityPlan":{},"credentials":{},"hooks":{},"name":{},"voicemailMessage":{},"endCallMessage":{},"endCallPhrases":{},"compliancePlan":{},"metadata":{},"backgroundSpeechDenoisingPlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"credentialIds":{},"server":{},"keypadInputPlan":{}},"x-ref":"#/components/schemas/CreateAssistantDTO"}],"key$":"assistant"},"path":{"type":"string","nullable":true,"description":"Optional folder path for organizing personalities.\nSupports up to 3 levels (e.g., \"dept/feature/variant\").\nSet to null to remove from folder.","maxLength":255,"pattern":"/^[a-zA-Z0-9][a-zA-Z0-9._-]*(?:\\/[a-zA-Z0-9][a-zA-Z0-9._-]*){0,2}$/","key$":"path"}},"x-ref":"#/components/schemas/UpdatePersonalityDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const personality_ref01_ent = client.Personality()
    let personality_ref01_data = setup.data.new.personality['personality_ref01']

    personality_ref01_data = (await personality_ref01_ent.create(personality_ref01_data)).data()
    assert(null != personality_ref01_data.id)


    // LIST
    const personality_ref01_match: any = {}

    const personality_ref01_list = (await personality_ref01_ent.list(personality_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(personality_ref01_list, { id: personality_ref01_data.id })))


    // UPDATE
    const personality_ref01_data_up0: any = {}
    personality_ref01_data_up0.id = personality_ref01_data.id

    const personality_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-personality_ref01_' + setup.now }
    ;(personality_ref01_data_up0 as any)[personality_ref01_markdef_up0.name] = personality_ref01_markdef_up0.value

    const personality_ref01_resdata_up0 = (await personality_ref01_ent.update(personality_ref01_data_up0)).data()
    assert(personality_ref01_resdata_up0.id === personality_ref01_data_up0.id)

    assert((personality_ref01_resdata_up0 as any)[personality_ref01_markdef_up0.name] === personality_ref01_markdef_up0.value)


    // LOAD
    const personality_ref01_match_dt0: any = {}
    personality_ref01_match_dt0.id = personality_ref01_data.id
    const personality_ref01_data_dt0 = (await personality_ref01_ent.load(personality_ref01_match_dt0)).data()
    assert(personality_ref01_data_dt0.id === personality_ref01_data.id)


    // REMOVE
    const personality_ref01_match_rm0: any = { id: personality_ref01_data.id }
    await personality_ref01_ent.remove(personality_ref01_match_rm0)
  

    // LIST
    const personality_ref01_match_rt0: any = {}

    const personality_ref01_list_rt0 = (await personality_ref01_ent.list(personality_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(personality_ref01_list_rt0, { id: personality_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/personality/PersonalityTestData.json')

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
    ['personality01','personality02','personality03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_PERSONALITY_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_PERSONALITY_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_PERSONALITY_ENTID']
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
  
