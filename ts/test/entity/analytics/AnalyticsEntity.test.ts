

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


describe('AnalyticsEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.Analytics()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'analytics.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"queries":{"a":true,"h":"Queries","n":"queries","r":true,"sh":"This is the list of metric queries you want to perform.","t":"`$ARRAY`","key$":"queries","index$":0}},"name":"analytics","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /analytics","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/analytics","q":{},"r":{},"s":[{"lit":"analytics"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"analytics","name__orig":"analytics","Name":"Analytics","name_":"analytics","name-":"analytics","NAME":"ANALYTICS","index$":0}, {"active":true,"entity":"analytics","key$":"BasicAnalyticsFlow","kind":"basic","name":"BasicAnalyticsFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"analytics_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Analytics', {"POST /analytics":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"queries":{"description":"This is the list of metric queries you want to perform.","type":"array","items":{"type":"object","properties":{"table":{"type":"string","description":"This is the table you want to query.","enum":[]},"groupBy":{"type":"array","description":"This is the list of columns you want to group by.","enum":[],"items":{}},"groupByVariableValue":{"description":"This is the list of variable value keys you want to group by.","type":"array","items":{}},"name":{"type":"string","description":"This is the name of the query. This will be used to identify the query in the response.","maxLength":40},"timeRange":{"description":"This is the time range for the query.","allOf":[]},"operations":{"description":"This is the list of operations you want to perform.","type":"array","items":{}}},"required":["table","name","operations"],"x-ref":"#/components/schemas/AnalyticsQuery"},"key$":"queries"}},"required":["queries"],"x-ref":"#/components/schemas/AnalyticsQueryDTO","index$":1}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const analytics_ref01_ent = client.Analytics()
    let analytics_ref01_data = setup.data.new.analytics['analytics_ref01']

    analytics_ref01_data = (await analytics_ref01_ent.create(analytics_ref01_data)).data()
    assert(null != analytics_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/analytics/AnalyticsTestData.json')

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
    ['analytics01','analytics02','analytics03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_ANALYTICS_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_ANALYTICS_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_ANALYTICS_ENTID']
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
  
