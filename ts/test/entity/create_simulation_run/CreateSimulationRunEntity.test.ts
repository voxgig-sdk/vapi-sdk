

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


describe('CreateSimulationRunEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.CreateSimulationRun()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_simulation_run.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"iterations":{"a":true,"h":"Iterations","n":"iterations","r":false,"sh":"Number of times to run each simulation (default: 1)","t":"`$NUMBER`","key$":"iterations","index$":0},"simulations":{"a":true,"h":"Simulations","n":"simulations","r":true,"sh":"Array of simulations and/or suites to run","t":"`$ARRAY`","union":{"branches":23,"count":23009,"depth":60},"key$":"simulations","index$":1},"target":{"a":true,"h":"Target","n":"target","r":true,"sh":"Target to test against","t":"`$ANY`","union":{"branches":23,"count":19861,"depth":59},"key$":"target","index$":2},"transport":{"a":true,"h":"Transport","n":"transport","r":false,"sh":"Transport configuration for the simulation runs","t":"`$ANY`","key$":"transport","index$":3}},"name":"create_simulation_run","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /eval/simulation/run","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"user_agent","or":"user_agent","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/eval/simulation/run","q":{"exist":["user_agent"]},"r":{},"s":[{"lit":"eval"},{"lit":"simulation"},{"lit":"run"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_simulation_run","name__orig":"create_simulation_run","Name":"CreateSimulationRun","name_":"create_simulation_run","name-":"create-simulation-run","NAME":"CREATE_SIMULATION_RUN","index$":6}, {"active":true,"entity":"create_simulation_run","key$":"BasicCreateSimulationRunFlow","kind":"basic","name":"BasicCreateSimulationRunFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_simulation_run_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateSimulationRun', {"POST /eval/simulation/run":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"simulations":{"type":"array","description":"Array of simulations and/or suites to run","items":{"oneOf":[{"type":"object","properties":{},"required":[],"title":"Simulation","x-ref":"#/components/schemas/SimulationRunSimulationEntry"},{"type":"object","properties":{},"required":[],"title":"Suite","x-ref":"#/components/schemas/SimulationRunSuiteEntry"}]},"key$":"simulations"},"target":{"description":"Target to test against","oneOf":[{"type":"object","properties":{"type":{},"assistantId":{},"assistant":{}},"required":["type"],"title":"Assistant","x-ref":"#/components/schemas/SimulationRunTargetAssistant"},{"type":"object","properties":{"type":{},"squadId":{},"squad":{}},"required":["type"],"title":"Squad","x-ref":"#/components/schemas/SimulationRunTargetSquad"}],"key$":"target"},"iterations":{"type":"number","minimum":1,"maximum":10,"description":"Number of times to run each simulation (default: 1)","default":1,"key$":"iterations"},"transport":{"description":"Transport configuration for the simulation runs","allOf":[{"type":"object","properties":{"provider":{}},"required":["provider"],"x-ref":"#/components/schemas/SimulationRunTransportConfiguration"}],"key$":"transport"}},"required":["simulations","target"],"x-ref":"#/components/schemas/CreateSimulationRunDTO","index$":1}}}},"parameters":[{"name":"user-agent","required":false,"in":"header","description":"Identifies the client starting the simulation run","schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_simulation_run_ref01_ent = client.CreateSimulationRun()
    let create_simulation_run_ref01_data = setup.data.new.create_simulation_run['create_simulation_run_ref01']

    create_simulation_run_ref01_data = (await create_simulation_run_ref01_ent.create(create_simulation_run_ref01_data)).data()
    assert(null != create_simulation_run_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_simulation_run/CreateSimulationRunTestData.json')

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
    ['create_simulation_run01','create_simulation_run02','create_simulation_run03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_CREATE_SIMULATION_RUN_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_CREATE_SIMULATION_RUN_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_CREATE_SIMULATION_RUN_ENTID']
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
  
