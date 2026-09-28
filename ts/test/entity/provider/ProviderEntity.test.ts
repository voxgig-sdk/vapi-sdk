

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


describe('ProviderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.Provider()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'provider.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"t":"`$OBJECT`","key$":"metadata","index$":1},"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$ARRAY`","key$":"results","index$":2}},"id":{"field":"id","from":{"id":"id","provider":"provider","resource_name":"resourceName"},"name":"id","parts":["provider","resource_name","id"],"sep":"/"},"name":"provider","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /provider/{provider}/{resourceName}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"content_type","or":"content_type","r":true,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"provider","or":"provider","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"resource_name","or":"resource_name","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/provider/{provider}/{resourceName}","q":{"exist":["content_type","provider","resource_name"]},"r":{"param":{"resourceName":"resource_name"}},"s":[{"lit":"provider"},{"var":"provider"},{"var":"resource_name"}],"t":{"req":"`reqdata`","res":"`body.resource`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /provider/{provider}/{resourceName}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"provider","or":"provider","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"resource_name","or":"resource_name","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"created_at_ge","or":"created_at_ge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"created_at_gt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"created_at_le","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"created_at_lt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"resource_id","or":"resource_id","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_ge","or":"updated_at_ge","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_gt","or":"updated_at_gt","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"updated_at_le","or":"updated_at_le","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"updated_at_lt","or":"updated_at_lt","r":false,"t":"`$STRING`","index$":13}]},"k":"http","m":"GET","o":"/provider/{provider}/{resourceName}","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","id","limit","page","provider","resource_id","resource_name","sort_by","sort_order","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{"param":{"resourceName":"resource_name"}},"s":[{"lit":"provider"},{"var":"provider"},{"var":"resource_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /provider/{provider}/{resourceName}/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"provider","or":"provider","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"resource_name","or":"resource_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/provider/{provider}/{resourceName}/{id}","q":{"exist":["id","provider","resource_name"]},"r":{"param":{"resourceName":"resource_name"}},"s":[{"lit":"provider"},{"var":"provider"},{"var":"resource_name"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.resource`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /provider/{provider}/{resourceName}/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"provider","or":"provider","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"resource_name","or":"resource_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/provider/{provider}/{resourceName}/{id}","q":{"exist":["id","provider","resource_name"]},"r":{"param":{"resourceName":"resource_name"}},"s":[{"lit":"provider"},{"var":"provider"},{"var":"resource_name"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.resource`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /provider/{provider}/{resourceName}/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"provider","or":"provider","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"resource_name","or":"resource_name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PATCH","o":"/provider/{provider}/{resourceName}/{id}","q":{"exist":["id","provider","resource_name"]},"r":{"param":{"resourceName":"resource_name"}},"s":[{"lit":"provider"},{"var":"provider"},{"var":"resource_name"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.resource`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"provider","name__orig":"provider","Name":"Provider","name_":"provider","name-":"provider","NAME":"PROVIDER","index$":14}, {"active":true,"entity":"provider","key$":"BasicProviderFlow","kind":"basic","name":"BasicProviderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"provider_ref01"},"m":{"provider":"provider01","resource_name":"resource_name01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"provider":"provider01","resource_name":"resource_name01"},"i":{"ref":"provider_ref01","srcdatavar":"provider_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-provider_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"provider_ref01","srcdatavar":"provider_ref01_data","suffix":"_dt0"},"m":{"id":"provider01","provider":"provider01","resource_name":"resource_name01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-provider_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"provider_ref01","suffix":"_rm0"},"m":{"id":"provider01","provider":"provider01","resource_name":"resource_name01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Provider', {"POST /provider/{provider}/{resourceName}":{"protocol":"http","parameters":[{"name":"content-type","required":true,"in":"header","schema":{"type":"string"},"index$":0},{"name":"provider","required":true,"in":"path","description":"The provider (e.g., 11labs)","schema":{"enum":["cartesia","11labs"],"type":"string"},"index$":1},{"name":"resourceName","required":true,"in":"path","description":"The resource name (e.g., pronunciation-dictionary)","schema":{"enum":["pronunciation-dictionary"],"type":"string"},"index$":2}]},"GET /provider/{provider}/{resourceName}":{"protocol":"http","parameters":[{"name":"provider","required":true,"in":"path","description":"The provider (e.g., 11labs)","schema":{"enum":["cartesia","11labs"],"type":"string"},"index$":0},{"name":"resourceName","required":true,"in":"path","description":"The resource name (e.g., pronunciation-dictionary)","schema":{"enum":["pronunciation-dictionary"],"type":"string"},"index$":1},{"name":"id","required":false,"in":"query","schema":{"type":"string"},"index$":2},{"name":"resourceId","required":false,"in":"query","schema":{"type":"string"},"index$":3},{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":4},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":5},{"name":"sortBy","required":false,"in":"query","description":"This is the column to sort by. Defaults to 'createdAt'.","schema":{"enum":["createdAt","duration","cost"],"type":"string"},"index$":6},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":7},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":12},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":13},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":14},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":15}]},"GET /provider/{provider}/{resourceName}/{id}":{"protocol":"http","parameters":[{"name":"provider","required":true,"in":"path","description":"The provider (e.g., 11labs)","schema":{"enum":["cartesia","11labs"],"type":"string"},"index$":0},{"name":"resourceName","required":true,"in":"path","description":"The resource name (e.g., pronunciation-dictionary)","schema":{"enum":["pronunciation-dictionary"],"type":"string"},"index$":1},{"name":"id","required":true,"in":"path","schema":{"format":"uuid","type":"string"},"index$":2}]},"DELETE /provider/{provider}/{resourceName}/{id}":{"protocol":"http","parameters":[{"name":"provider","required":true,"in":"path","description":"The provider (e.g., 11labs)","schema":{"enum":["cartesia","11labs"],"type":"string"},"index$":0},{"name":"resourceName","required":true,"in":"path","description":"The resource name (e.g., pronunciation-dictionary)","schema":{"enum":["pronunciation-dictionary"],"type":"string"},"index$":1},{"name":"id","required":true,"in":"path","schema":{"format":"uuid","type":"string"},"index$":2}]},"PATCH /provider/{provider}/{resourceName}/{id}":{"protocol":"http","parameters":[{"name":"provider","required":true,"in":"path","description":"The provider (e.g., 11labs)","schema":{"enum":["cartesia","11labs"],"type":"string"},"index$":0},{"name":"resourceName","required":true,"in":"path","description":"The resource name (e.g., pronunciation-dictionary)","schema":{"enum":["pronunciation-dictionary"],"type":"string"},"index$":1},{"name":"id","required":true,"in":"path","schema":{"format":"uuid","type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const provider_ref01_ent = client.Provider()
    let provider_ref01_data = setup.data.new.provider['provider_ref01']
    provider_ref01_data['provider'] = setup.idmap['provider01']
    provider_ref01_data['resource_name'] = setup.idmap['resource_name01']

    provider_ref01_data = (await provider_ref01_ent.create(provider_ref01_data)).data()
    assert(null != provider_ref01_data.id)


    // UPDATE
    const provider_ref01_data_up0: any = {}
    provider_ref01_data_up0.id = provider_ref01_data.id
    provider_ref01_data_up0 ['provider'] = setup.idmap['provider']
    provider_ref01_data_up0 ['resource_name'] = setup.idmap['resource_name']

    const provider_ref01_resdata_up0 = (await provider_ref01_ent.update(provider_ref01_data_up0)).data()
    assert(provider_ref01_resdata_up0.id === provider_ref01_data_up0.id)


    // LOAD
    const provider_ref01_match_dt0: any = {}
    provider_ref01_match_dt0.id = provider_ref01_data.id
    const provider_ref01_data_dt0 = (await provider_ref01_ent.load(provider_ref01_match_dt0)).data()
    assert(provider_ref01_data_dt0.id === provider_ref01_data.id)


    // REMOVE
    const provider_ref01_match_rm0: any = { id: provider_ref01_data.id }
    await provider_ref01_ent.remove(provider_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/provider/ProviderTestData.json')

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
    ['provider01','provider02','provider03','resource_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_PROVIDER_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_PROVIDER_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_PROVIDER_ENTID']
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
  
