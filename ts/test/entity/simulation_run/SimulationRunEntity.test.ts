

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


describe('SimulationRunEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.SimulationRun()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'simulation_run.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"ISO 8601 date-time when created","t":"`$STRING`","key$":"createdAt","index$":0},"endedAt":{"a":true,"fo":"date-time","h":"Ended At","n":"endedAt","r":false,"sh":"When the run ended","t":"`$STRING`","key$":"endedAt","index$":1},"endedReason":{"a":true,"h":"Ended Reason","n":"endedReason","r":false,"sh":"Reason the run ended","t":"`$STRING`","key$":"endedReason","index$":2},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"Unique identifier for the run","t":"`$STRING`","key$":"id","index$":3},"itemCounts":{"a":true,"h":"Item Counts","n":"itemCounts","r":false,"sh":"Aggregate counts of run items by status","t":"`$ANY`","key$":"itemCounts","index$":4},"iterations":{"a":true,"h":"Iterations","n":"iterations","r":false,"sh":"Number of times to run each simulation (default: 1)","t":"`$NUMBER`","key$":"iterations","index$":5},"orgId":{"a":true,"fo":"uuid","h":"Org Id","n":"orgId","r":true,"sh":"Organization ID","t":"`$STRING`","key$":"orgId","index$":6},"queuedAt":{"a":true,"fo":"date-time","h":"Queued At","n":"queuedAt","r":true,"sh":"When the run was queued","t":"`$STRING`","key$":"queuedAt","index$":7},"simulations":{"a":true,"h":"Simulations","n":"simulations","r":true,"sh":"Array of simulations and/or suites to run","t":"`$ARRAY`","union":{"branches":23,"count":23009,"depth":60},"key$":"simulations","index$":8},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":false,"sh":"When the run started","t":"`$STRING`","key$":"startedAt","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the run","t":"`$STRING`","key$":"status","index$":10},"target":{"a":true,"h":"Target","n":"target","r":true,"sh":"Target to test against","t":"`$ANY`","union":{"branches":23,"count":19861,"depth":59},"key$":"target","index$":11},"transport":{"a":true,"h":"Transport","n":"transport","r":false,"sh":"Transport configuration for the simulation runs","t":"`$ANY`","key$":"transport","index$":12},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"ISO 8601 date-time when last updated","t":"`$STRING`","key$":"updatedAt","index$":13}},"id":{"field":"id","name":"id"},"name":"simulation_run","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /eval/simulation/run","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"created_at_ge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"created_at_gt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"created_at_le","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"created_at_lt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"filter_status","or":"filter_status","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"target_id","or":"target_id","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"target_type","or":"target_type","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"updated_at_ge","or":"updated_at_ge","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"updated_at_gt","or":"updated_at_gt","r":false,"t":"`$STRING`","index$":13},{"a":true,"k":"query","n":"updated_at_le","or":"updated_at_le","r":false,"t":"`$STRING`","index$":14},{"a":true,"k":"query","n":"updated_at_lt","or":"updated_at_lt","r":false,"t":"`$STRING`","index$":15}]},"k":"http","m":"GET","o":"/eval/simulation/run","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","filter_status","limit","page","sort_by","sort_order","status","target_id","target_type","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"run"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /eval/simulation/run/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/eval/simulation/run/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"run"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /eval/simulation/run/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/eval/simulation/run/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"run"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"simulation_run","name__orig":"simulation_run","Name":"SimulationRun","name_":"simulation_run","name-":"simulation-run","NAME":"SIMULATION_RUN","index$":19}, {"active":true,"entity":"simulation_run","key$":"BasicSimulationRunFlow","kind":"basic","name":"BasicSimulationRunFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"simulation_run_ref01","srcdatavar":"simulation_run_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-simulation_run_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"simulation_run_ref01","srcdatavar":"simulation_run_ref01_data","suffix":"_dt0"},"m":{"id":"simulation_run01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-simulation_run_ref01"}}],"index$":1}]}, 'SimulationRun', {"GET /eval/simulation/run":{"protocol":"http","parameters":[{"name":"status","required":false,"in":"query","description":"Filter by status","schema":{"enum":["queued","running","ended"],"type":"string"},"index$":0},{"name":"filterStatus","required":false,"in":"query","description":"Filter by aggregate run result status","schema":{"enum":["passed","failed","running"],"type":"string"},"index$":1},{"name":"targetType","required":false,"in":"query","description":"Filter by target type","schema":{"enum":["assistant","squad"],"type":"string"},"index$":2},{"name":"targetId","required":false,"in":"query","description":"Filter by target id","schema":{"format":"uuid","type":"string"},"index$":3},{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":4},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":5},{"name":"sortBy","required":false,"in":"query","description":"This is the column to sort by. Defaults to 'createdAt'.","schema":{"enum":["createdAt","duration","cost"],"type":"string"},"index$":6},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":7},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":12},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":13},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":14},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":15}]},"GET /eval/simulation/run/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /eval/simulation/run/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let simulation_run_ref01_data = Object.values(setup.data.existing.simulation_run)[0] as any

    // UPDATE
    const simulation_run_ref01_ent = client.SimulationRun()
    const simulation_run_ref01_data_up0: any = {}
    simulation_run_ref01_data_up0.id = simulation_run_ref01_data.id

    const simulation_run_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-simulation_run_ref01_' + setup.now }
    ;(simulation_run_ref01_data_up0 as any)[simulation_run_ref01_markdef_up0.name] = simulation_run_ref01_markdef_up0.value

    const simulation_run_ref01_resdata_up0 = (await simulation_run_ref01_ent.update(simulation_run_ref01_data_up0)).data()
    assert(simulation_run_ref01_resdata_up0.id === simulation_run_ref01_data_up0.id)

    assert((simulation_run_ref01_resdata_up0 as any)[simulation_run_ref01_markdef_up0.name] === simulation_run_ref01_markdef_up0.value)


    // LOAD
    const simulation_run_ref01_match_dt0: any = {}
    simulation_run_ref01_match_dt0.id = simulation_run_ref01_data.id
    const simulation_run_ref01_data_dt0 = (await simulation_run_ref01_ent.load(simulation_run_ref01_match_dt0)).data()
    assert(simulation_run_ref01_data_dt0.id === simulation_run_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/simulation_run/SimulationRunTestData.json')

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
    ['simulation_run01','simulation_run02','simulation_run03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_SIMULATION_RUN_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_SIMULATION_RUN_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_SIMULATION_RUN_ENTID']
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
  
