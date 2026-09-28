

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


describe('SimulationSuiteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.SimulationSuite()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'simulation_suite.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"This is the ISO 8601 date-time string of when the suite was created.","t":"`$STRING`","key$":"createdAt","index$":0},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"This is the unique identifier for the simulation suite.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"This is the name of the simulation suite.","t":"`$STRING`","key$":"name","index$":2},"orgId":{"a":true,"fo":"uuid","h":"Org Id","n":"orgId","r":true,"sh":"This is the unique identifier for the organization this suite belongs to.","t":"`$STRING`","key$":"orgId","index$":3},"path":{"a":true,"h":"Path","n":"path","r":false,"sh":"Optional folder path for organizing simulation suites.","t":"`$STRING`","key$":"path","index$":4},"simulationIds":{"a":true,"h":"Simulation Ids","n":"simulationIds","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"This is the list of simulation IDs in this suite.","t":"`$ARRAY`","key$":"simulationIds","index$":5},"slackWebhookUrl":{"a":true,"h":"Slack Webhook Url","n":"slackWebhookUrl","r":false,"sh":"This is the Slack webhook URL for notifications.","t":"`$STRING`","key$":"slackWebhookUrl","index$":6},"targetAssignments":{"a":true,"h":"Target Assignments","n":"targetAssignments","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"This is the ordered list of assistant or squad assignments for the suite.","t":"`$ARRAY`","key$":"targetAssignments","index$":7},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"This is the ISO 8601 date-time string of when the suite was last updated.","t":"`$STRING`","key$":"updatedAt","index$":8}},"id":{"field":"id","name":"id"},"name":"simulation_suite","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /eval/simulation/suite/{id}/duplicate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"suite_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/eval/simulation/suite/{id}/duplicate","q":{"exist":["suite_id"]},"r":{"param":{"id":"suite_id"}},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"suite"},{"var":"suite_id"},{"lit":"duplicate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /eval/simulation/suite","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/eval/simulation/suite","q":{},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"suite"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /eval/simulation/suite","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"created_at_ge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"created_at_gt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"created_at_le","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"created_at_lt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"updated_at_ge","or":"updated_at_ge","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_gt","or":"updated_at_gt","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_le","or":"updated_at_le","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"updated_at_lt","or":"updated_at_lt","r":false,"t":"`$STRING`","index$":12}]},"k":"http","m":"GET","o":"/eval/simulation/suite","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","limit","name","page","sort_by","sort_order","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"suite"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /eval/simulation/suite/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/eval/simulation/suite/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"suite"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /eval/simulation/suite/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/eval/simulation/suite/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"suite"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /eval/simulation/suite/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/eval/simulation/suite/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"suite"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"simulation_suite","name__orig":"simulation_suite","Name":"SimulationSuite","name_":"simulation_suite","name-":"simulation-suite","NAME":"SIMULATION_SUITE","index$":21}, {"active":true,"entity":"simulation_suite","key$":"BasicSimulationSuiteFlow","kind":"basic","name":"BasicSimulationSuiteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"simulation_suite_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"simulation_suite_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"simulation_suite_ref01","srcdatavar":"simulation_suite_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-simulation_suite_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"simulation_suite_ref01","srcdatavar":"simulation_suite_ref01_data","suffix":"_dt0"},"m":{"id":"simulation_suite01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-simulation_suite_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"simulation_suite_ref01","suffix":"_rm0"},"m":{"id":"simulation_suite01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"simulation_suite_ref01"}}],"index$":5}]}, 'SimulationSuite', {"POST /eval/simulation/suite/{id}/duplicate":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"POST /eval/simulation/suite":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the simulation suite.","maxLength":80,"example":"Checkout Flow Tests","key$":"name"},"slackWebhookUrl":{"type":"string","description":"This is the Slack webhook URL for notifications.","key$":"slackWebhookUrl"},"simulationIds":{"description":"This is the list of simulation IDs to include in the suite.","type":"array","items":{"type":"string"},"key$":"simulationIds"},"targetAssignments":{"description":"Optional assistant or squad assignments for the suite.","type":"array","items":{"type":"object","properties":{"targetType":{"type":"string","description":"This is the type of target assigned to the simulation suite.","enum":[]},"targetId":{"type":"string","description":"This is the unique identifier of the assigned assistant or squad.","format":"uuid"}},"required":["targetType","targetId"],"x-ref":"#/components/schemas/SimulationSuiteTargetAssignment"},"key$":"targetAssignments"},"path":{"type":"string","nullable":true,"description":"Optional folder path for organizing simulation suites.\nSupports up to 3 levels (e.g., \"dept/feature/variant\").\nMaps to GitOps resource folder structure.","maxLength":255,"pattern":"/^[a-zA-Z0-9][a-zA-Z0-9._-]*(?:\\/[a-zA-Z0-9][a-zA-Z0-9._-]*){0,2}$/","key$":"path"}},"required":["name","simulationIds"],"x-ref":"#/components/schemas/CreateSimulationSuiteDTO","index$":1}}}},"parameters":[]},"GET /eval/simulation/suite":{"protocol":"http","parameters":[{"name":"name","required":false,"in":"query","description":"Search by simulation suite name","schema":{"type":"string"},"index$":0},{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":1},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":2},{"name":"sortBy","required":false,"in":"query","description":"This is the column to sort by. Defaults to 'createdAt'.","schema":{"enum":["createdAt","duration","cost"],"type":"string"},"index$":3},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":4},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":5},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":12}]},"GET /eval/simulation/suite/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /eval/simulation/suite/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /eval/simulation/suite/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the simulation suite.","maxLength":80,"key$":"name"},"slackWebhookUrl":{"type":"string","description":"This is the Slack webhook URL for notifications.","key$":"slackWebhookUrl"},"simulationIds":{"description":"This is the list of simulation IDs to include in the suite (replaces existing).","type":"array","items":{"type":"string"},"key$":"simulationIds"},"targetAssignments":{"description":"Optional assistant or squad assignments (replaces existing).","type":"array","items":{"type":"object","properties":{"targetType":{"type":"string","description":"This is the type of target assigned to the simulation suite.","enum":[]},"targetId":{"type":"string","description":"This is the unique identifier of the assigned assistant or squad.","format":"uuid"}},"required":["targetType","targetId"],"x-ref":"#/components/schemas/SimulationSuiteTargetAssignment"},"key$":"targetAssignments"},"path":{"type":"string","nullable":true,"description":"Optional folder path for organizing simulation suites.\nSupports up to 3 levels (e.g., \"dept/feature/variant\").\nSet to null to remove from folder.","maxLength":255,"pattern":"/^[a-zA-Z0-9][a-zA-Z0-9._-]*(?:\\/[a-zA-Z0-9][a-zA-Z0-9._-]*){0,2}$/","key$":"path"}},"x-ref":"#/components/schemas/UpdateSimulationSuiteDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const simulation_suite_ref01_ent = client.SimulationSuite()
    let simulation_suite_ref01_data = setup.data.new.simulation_suite['simulation_suite_ref01']

    simulation_suite_ref01_data = (await simulation_suite_ref01_ent.create(simulation_suite_ref01_data)).data()
    assert(null != simulation_suite_ref01_data.id)


    // LIST
    const simulation_suite_ref01_match: any = {}

    const simulation_suite_ref01_list = (await simulation_suite_ref01_ent.list(simulation_suite_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(simulation_suite_ref01_list, { id: simulation_suite_ref01_data.id })))


    // UPDATE
    const simulation_suite_ref01_data_up0: any = {}
    simulation_suite_ref01_data_up0.id = simulation_suite_ref01_data.id

    const simulation_suite_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-simulation_suite_ref01_' + setup.now }
    ;(simulation_suite_ref01_data_up0 as any)[simulation_suite_ref01_markdef_up0.name] = simulation_suite_ref01_markdef_up0.value

    const simulation_suite_ref01_resdata_up0 = (await simulation_suite_ref01_ent.update(simulation_suite_ref01_data_up0)).data()
    assert(simulation_suite_ref01_resdata_up0.id === simulation_suite_ref01_data_up0.id)

    assert((simulation_suite_ref01_resdata_up0 as any)[simulation_suite_ref01_markdef_up0.name] === simulation_suite_ref01_markdef_up0.value)


    // LOAD
    const simulation_suite_ref01_match_dt0: any = {}
    simulation_suite_ref01_match_dt0.id = simulation_suite_ref01_data.id
    const simulation_suite_ref01_data_dt0 = (await simulation_suite_ref01_ent.load(simulation_suite_ref01_match_dt0)).data()
    assert(simulation_suite_ref01_data_dt0.id === simulation_suite_ref01_data.id)


    // REMOVE
    const simulation_suite_ref01_match_rm0: any = { id: simulation_suite_ref01_data.id }
    await simulation_suite_ref01_ent.remove(simulation_suite_ref01_match_rm0)
  

    // LIST
    const simulation_suite_ref01_match_rt0: any = {}

    const simulation_suite_ref01_list_rt0 = (await simulation_suite_ref01_ent.list(simulation_suite_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(simulation_suite_ref01_list_rt0, { id: simulation_suite_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/simulation_suite/SimulationSuiteTestData.json')

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
    ['simulation_suite01','simulation_suite02','simulation_suite03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_SIMULATION_SUITE_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_SIMULATION_SUITE_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_SIMULATION_SUITE_ENTID']
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
  
