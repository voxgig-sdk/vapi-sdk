

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"analysisPlan":{"a":true,"de":true,"h":"Analysis Plan","n":"analysisPlan","r":false,"sh":"This is the plan for analysis of assistant's calls.","t":"`$ANY`","key$":"analysisPlan","index$":0},"artifactPlan":{"a":true,"h":"Artifact Plan","n":"artifactPlan","r":false,"sh":"This is the plan for artifacts generated during assistant's calls.","t":"`$ANY`","union":{"branches":5,"count":3,"depth":11},"key$":"artifactPlan","index$":1},"assistant":{"a":true,"h":"Assistant","n":"assistant","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"sh":"This is the full assistant configuration for this personality.","t":"`$ANY`","union":{"branches":23,"count":19650,"depth":55},"key$":"assistant","index$":2},"backgroundSound":{"a":true,"h":"Background Sound","n":"backgroundSound","r":false,"sh":"This is the background sound in the call.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"backgroundSound","index$":3},"backgroundSpeechDenoisingPlan":{"a":true,"h":"Background Speech Denoising Plan","n":"backgroundSpeechDenoisingPlan","r":false,"sh":"This enables filtering of noise and background speech while the user is talking.","t":"`$ANY`","key$":"backgroundSpeechDenoisingPlan","index$":4},"clientMessages":{"a":true,"h":"Client Messages","n":"clientMessages","r":false,"sh":"These are the messages that will be sent to your Client SDKs.","t":"`$ARRAY`","key$":"clientMessages","index$":5},"compliancePlan":{"a":true,"h":"Compliance Plan","n":"compliancePlan","r":false,"t":"`$OBJECT`","union":{"branches":20,"count":1282,"depth":28},"key$":"compliancePlan","index$":6},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"This is the ISO 8601 date-time string of when the personality was created.","t":"`$STRING`","key$":"createdAt","index$":7},"credentialIds":{"a":true,"h":"Credential Ids","n":"credentialIds","r":false,"sh":"These are the credentials that will be used for the assistant calls.","t":"`$ARRAY`","key$":"credentialIds","index$":8},"credentials":{"a":true,"h":"Credentials","n":"credentials","r":false,"sh":"These are dynamic credentials that will be used for the assistant calls.","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":5},"key$":"credentials","index$":9},"endCallMessage":{"a":true,"h":"End Call Message","n":"endCallMessage","r":false,"sh":"This is the message that the assistant will say if it ends the call.","t":"`$STRING`","key$":"endCallMessage","index$":10},"endCallPhrases":{"a":true,"h":"End Call Phrases","n":"endCallPhrases","r":false,"sh":"This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up.","t":"`$ARRAY`","key$":"endCallPhrases","index$":11},"firstMessage":{"a":true,"h":"First Message","n":"firstMessage","r":false,"sh":"This is the first message that the assistant will say.","t":"`$STRING`","key$":"firstMessage","index$":12},"firstMessageInterruptionsEnabled":{"a":true,"h":"First Message Interruptions Enabled","n":"firstMessageInterruptionsEnabled","r":false,"t":"`$BOOLEAN`","key$":"firstMessageInterruptionsEnabled","index$":13},"firstMessageMode":{"a":true,"h":"First Message Mode","n":"firstMessageMode","r":false,"sh":"This is the mode for the first message.","t":"`$STRING`","key$":"firstMessageMode","index$":14},"hooks":{"a":true,"h":"Hooks","n":"hooks","r":false,"sh":"This is a set of actions that will be performed on certain events.","t":"`$ARRAY`","union":{"branches":23,"count":323,"depth":27},"key$":"hooks","index$":15},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"This is the unique identifier for the personality.","t":"`$STRING`","key$":"id","index$":16},"keypadInputPlan":{"a":true,"h":"Keypad Input Plan","n":"keypadInputPlan","r":false,"t":"`$OBJECT`","key$":"keypadInputPlan","index$":17},"maxDurationSeconds":{"a":true,"h":"Max Duration Seconds","n":"maxDurationSeconds","r":false,"sh":"This is the maximum number of seconds that the call will last.","t":"`$NUMBER`","key$":"maxDurationSeconds","index$":18},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"This is for metadata you want to store on the assistant.","t":"`$OBJECT`","key$":"metadata","index$":19},"model":{"a":true,"h":"Model","n":"model","r":false,"sh":"These are the options for the assistant's LLM.","t":"`$ANY`","union":{"branches":23,"count":18153,"depth":51},"key$":"model","index$":20},"modelOutputInMessagesEnabled":{"a":true,"h":"Model Output In Messages Enabled","n":"modelOutputInMessagesEnabled","r":false,"sh":"This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech.","t":"`$BOOLEAN`","key$":"modelOutputInMessagesEnabled","index$":21},"monitorPlan":{"a":true,"h":"Monitor Plan","n":"monitorPlan","r":false,"sh":"This is the plan for real-time monitoring of the assistant's calls.","t":"`$ANY`","key$":"monitorPlan","index$":22},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"},"list":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"This is the name of the assistant.","t":"`$STRING`","key$":"name","index$":23},"observabilityPlan":{"a":true,"h":"Observability Plan","n":"observabilityPlan","r":false,"sh":"This is the plan for observability of assistant's calls.","t":"`$ANY`","key$":"observabilityPlan","index$":24},"orgId":{"a":true,"fo":"uuid","h":"Org Id","n":"orgId","r":true,"sh":"This is the unique identifier for the organization this personality belongs to.","t":"`$STRING`","key$":"orgId","index$":25},"path":{"a":true,"h":"Path","n":"path","r":false,"sh":"Optional folder path for organizing personalities.","t":"`$STRING`","key$":"path","index$":26},"server":{"a":true,"h":"Server","n":"server","r":false,"sh":"This is where Vapi will send webhooks.","t":"`$ANY`","key$":"server","index$":27},"serverMessages":{"a":true,"h":"Server Messages","n":"serverMessages","r":false,"sh":"These are the messages that will be sent to your Server URL.","t":"`$ARRAY`","key$":"serverMessages","index$":28},"startSpeakingPlan":{"a":true,"h":"Start Speaking Plan","n":"startSpeakingPlan","r":false,"sh":"This is the plan for when the assistant should start talking.","t":"`$ANY`","union":{"branches":3,"count":3,"depth":5},"key$":"startSpeakingPlan","index$":29},"stopSpeakingPlan":{"a":true,"h":"Stop Speaking Plan","n":"stopSpeakingPlan","r":false,"sh":"This is the plan for when assistant should stop talking on customer interruption.","t":"`$ANY`","key$":"stopSpeakingPlan","index$":30},"transcriber":{"a":true,"h":"Transcriber","n":"transcriber","r":false,"sh":"These are the options for the assistant's transcriber.","t":"`$ANY`","union":{"branches":14,"count":42,"depth":18},"key$":"transcriber","index$":31},"transportConfigurations":{"a":true,"h":"Transport Configurations","n":"transportConfigurations","r":false,"sh":"These are the configurations to be passed to the transport providers of assistant's calls, like Twilio.","t":"`$ARRAY`","key$":"transportConfigurations","index$":32},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"This is the ISO 8601 date-time string of when the personality was last updated.","t":"`$STRING`","key$":"updatedAt","index$":33},"voice":{"a":true,"h":"Voice","n":"voice","r":false,"sh":"These are the options for the assistant's voice.","t":"`$ANY`","union":{"branches":20,"count":641,"depth":22},"key$":"voice","index$":34},"voicemailDetection":{"a":true,"h":"Voicemail Detection","n":"voicemailDetection","r":false,"sh":"These are the settings to configure or disable voicemail detection.","t":"`$ANY`","union":{"branches":5,"count":1,"depth":0},"key$":"voicemailDetection","index$":35},"voicemailMessage":{"a":true,"h":"Voicemail Message","n":"voicemailMessage","r":false,"sh":"This is the message that the assistant will say if the call is forwarded to voicemail.","t":"`$STRING`","key$":"voicemailMessage","index$":36}},"id":{"field":"id","name":"id"},"name":"personality","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /eval/simulation/personality","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/eval/simulation/personality","q":{},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"}],"t":{"req":"`reqdata`","res":"`body.assistant`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /eval/simulation/personality","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"created_at_ge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"created_at_gt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"created_at_le","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"created_at_lt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"updated_at_ge","or":"updated_at_ge","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"updated_at_gt","or":"updated_at_gt","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_le","or":"updated_at_le","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_lt","or":"updated_at_lt","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/eval/simulation/personality","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","limit","page","sort_by","sort_order","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /eval/simulation/personality/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/eval/simulation/personality/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.assistant`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /eval/simulation/personality/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/eval/simulation/personality/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.assistant`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /eval/simulation/personality/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/eval/simulation/personality/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"personality"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.assistant`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"personality","name__orig":"personality","Name":"Personality","name_":"personality","name-":"personality","NAME":"PERSONALITY","index$":12}, {"active":true,"entity":"personality","key$":"BasicPersonalityFlow","kind":"basic","name":"BasicPersonalityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"personality_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"personality_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"personality_ref01","srcdatavar":"personality_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-personality_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"personality_ref01","srcdatavar":"personality_ref01_data","suffix":"_dt0"},"m":{"id":"personality01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-personality_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"personality_ref01","suffix":"_rm0"},"m":{"id":"personality01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"personality_ref01"}}],"index$":5}]}, 'Personality', {"POST /eval/simulation/personality":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the personality (e.g., \"Confused Carl\", \"Rude Rob\").","maxLength":80,"key$":"name"},"assistant":{"description":"This is the full assistant configuration for this personality.\nIt defines the tester's voice, model, behavior via system prompt, and other settings.","allOf":[{"type":"object","properties":{"transcriber":{},"model":{},"voice":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"voicemailDetection":{},"clientMessages":{},"serverMessages":{},"maxDurationSeconds":{},"backgroundSound":{},"modelOutputInMessagesEnabled":{},"transportConfigurations":{},"observabilityPlan":{},"credentials":{},"hooks":{},"name":{},"voicemailMessage":{},"endCallMessage":{},"endCallPhrases":{},"compliancePlan":{},"metadata":{},"backgroundSpeechDenoisingPlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"credentialIds":{},"server":{},"keypadInputPlan":{}},"x-ref":"#/components/schemas/CreateAssistantDTO"}],"key$":"assistant"},"path":{"type":"string","nullable":true,"description":"Optional folder path for organizing personalities.\nSupports up to 3 levels (e.g., \"dept/feature/variant\").\nMaps to GitOps resource folder structure.","maxLength":255,"pattern":"/^[a-zA-Z0-9][a-zA-Z0-9._-]*(?:\\/[a-zA-Z0-9][a-zA-Z0-9._-]*){0,2}$/","key$":"path"}},"required":["name","assistant"],"x-ref":"#/components/schemas/CreatePersonalityDTO","index$":1}}}},"parameters":[]},"GET /eval/simulation/personality":{"protocol":"http","parameters":[{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":0},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":1},{"name":"sortBy","required":false,"in":"query","description":"This is the column to sort by. Defaults to 'createdAt'.","schema":{"enum":["createdAt","duration","cost"],"type":"string"},"index$":2},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":3},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":4},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":5},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11}]},"GET /eval/simulation/personality/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /eval/simulation/personality/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /eval/simulation/personality/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the personality.","maxLength":80,"key$":"name"},"assistant":{"description":"Complete assistant replacement. Omitted credentials and redacted server secrets are preserved when their endpoint URL is unchanged. Send credentials: [] to clear credentials; omit a server container to remove it.","allOf":[{"type":"object","properties":{"transcriber":{},"model":{},"voice":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"voicemailDetection":{},"clientMessages":{},"serverMessages":{},"maxDurationSeconds":{},"backgroundSound":{},"modelOutputInMessagesEnabled":{},"transportConfigurations":{},"observabilityPlan":{},"credentials":{},"hooks":{},"name":{},"voicemailMessage":{},"endCallMessage":{},"endCallPhrases":{},"compliancePlan":{},"metadata":{},"backgroundSpeechDenoisingPlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"credentialIds":{},"server":{},"keypadInputPlan":{}},"x-ref":"#/components/schemas/CreateAssistantDTO"}],"key$":"assistant"},"path":{"type":"string","nullable":true,"description":"Optional folder path for organizing personalities.\nSupports up to 3 levels (e.g., \"dept/feature/variant\").\nSet to null to remove from folder.","maxLength":255,"pattern":"/^[a-zA-Z0-9][a-zA-Z0-9._-]*(?:\\/[a-zA-Z0-9][a-zA-Z0-9._-]*){0,2}$/","key$":"path"}},"x-ref":"#/components/schemas/UpdatePersonalityDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
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
  
