

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


describe('BoardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.Board()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'board.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"This is the ISO 8601 date-time string of when the Board was created.","t":"`$STRING`","key$":"createdAt","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"This is the unique identifier for the Board.","t":"`$STRING`","key$":"id","index$":1},"items":{"a":true,"h":"Items","n":"items","r":false,"sh":"This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board.","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"items","index$":2},"layout":{"a":true,"h":"Layout","n":"layout","op":{"update":{"req":false,"type":"`$ANY`"}},"r":true,"sh":"This is the layout of the Board.","t":"`$ANY`","key$":"layout","index$":3},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"This is the name of the Board.","t":"`$STRING`","key$":"name","index$":4},"orgId":{"a":true,"h":"Org Id","n":"orgId","r":true,"sh":"This is the unique identifier for the org that this Board belongs to.","t":"`$STRING`","key$":"orgId","index$":5},"systemKey":{"a":true,"h":"System Key","n":"systemKey","r":false,"sh":"Server-owned key for system-provisioned boards.","t":"`$STRING`","key$":"systemKey","index$":6},"timeRangeOverride":{"a":true,"h":"Time Range Override","n":"timeRangeOverride","r":false,"sh":"This is the timerange override for the board.","t":"`$ANY`","key$":"timeRangeOverride","index$":7},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"This is the ISO 8601 date-time string of when the Board was last updated.","t":"`$STRING`","key$":"updatedAt","index$":8}},"id":{"field":"id","name":"id"},"name":"board","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /reporting/board","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/reporting/board","q":{},"r":{},"s":[{"lit":"reporting"},{"lit":"board"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /reporting/board","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_at_ge","or":"created_at_ge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_gt","or":"created_at_gt","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_le","or":"created_at_le","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_lt","or":"created_at_lt","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"updated_at_ge","or":"updated_at_ge","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"updated_at_gt","or":"updated_at_gt","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_le","or":"updated_at_le","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_lt","or":"updated_at_lt","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/reporting/board","q":{"exist":["created_at_ge","created_at_gt","created_at_le","created_at_lt","limit","page","sort_by","sort_order","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"reporting"},{"lit":"board"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /reporting/board/default/metrics-overview","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/reporting/board/default/metrics-overview","q":{},"r":{},"s":[{"lit":"reporting"},{"lit":"board"},{"lit":"default"},{"lit":"metrics-overview"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /reporting/board/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/reporting/board/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"reporting"},{"lit":"board"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /reporting/board/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/reporting/board/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"reporting"},{"lit":"board"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /reporting/board/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/reporting/board/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"reporting"},{"lit":"board"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"board","name__orig":"board","Name":"Board","name_":"board","name-":"board","NAME":"BOARD","index$":2}, {"active":true,"entity":"board","key$":"BasicBoardFlow","kind":"basic","name":"BasicBoardFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"board_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"board_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"board_ref01","srcdatavar":"board_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-board_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"board_ref01","srcdatavar":"board_ref01_data","suffix":"_dt0"},"m":{"id":"board01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-board_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"board_ref01","suffix":"_rm0"},"m":{"id":"board01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"board_ref01"}}],"index$":5}]}, 'Board', {"POST /reporting/board":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"items":{"type":"array","description":"This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board.","items":{"oneOf":[{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/BoardInsightItem"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/BoardMetricWidgetItem"}]},"key$":"items"},"name":{"type":"string","description":"This is the name of the Board.","minLength":1,"maxLength":40,"key$":"name"},"layout":{"description":"This is the layout of the Board.","allOf":[{"type":"object","properties":{"columns":{}},"required":["columns"],"x-ref":"#/components/schemas/BoardLayout"}],"key$":"layout"},"timeRangeOverride":{"description":"This is the timerange override for the board.\nBy default, individual insights have their own timerange.\nThis is a global override for the board which will be passed to all insights on the board.","allOf":[{"type":"object","properties":{"step":{},"start":{},"end":{},"timezone":{}},"x-ref":"#/components/schemas/InsightTimeRangeWithStep"}],"key$":"timeRangeOverride"}},"required":["name","layout"],"x-ref":"#/components/schemas/CreateBoardDTO","index$":1}}}},"parameters":[]},"GET /reporting/board":{"protocol":"http","parameters":[{"name":"page","required":false,"in":"query","description":"This is the page number to return. Defaults to 1.","schema":{"minimum":1,"type":"number"},"index$":0},{"name":"sortOrder","required":false,"in":"query","description":"This is the sort order for pagination. Defaults to 'DESC'.","schema":{"enum":["ASC","DESC"],"type":"string"},"index$":1},{"name":"sortBy","required":false,"in":"query","description":"This is the column to sort by. Defaults to 'createdAt'.","schema":{"enum":["createdAt","duration","cost"],"type":"string"},"index$":2},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":3},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":4},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":5},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11}]},"GET /reporting/board/default/metrics-overview":{"protocol":"http","parameters":[]},"GET /reporting/board/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /reporting/board/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /reporting/board/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"items":{"type":"array","description":"This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board.","items":{"oneOf":[{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/BoardInsightItem"},{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/BoardMetricWidgetItem"}]},"key$":"items"},"name":{"type":"string","description":"This is the name of the Board.","minLength":1,"maxLength":40,"key$":"name"},"layout":{"description":"This is the layout of the Board.","allOf":[{"type":"object","properties":{"columns":{}},"required":["columns"],"x-ref":"#/components/schemas/BoardLayout"}],"key$":"layout"},"timeRangeOverride":{"description":"This is the timerange override for the board.\nBy default, individual insights have their own timerange.\nThis is a global override for the board which will be passed to all insights on the board.","allOf":[{"type":"object","properties":{"step":{},"start":{},"end":{},"timezone":{}},"x-ref":"#/components/schemas/InsightTimeRangeWithStep"}],"key$":"timeRangeOverride"}},"x-ref":"#/components/schemas/UpdateBoardDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const board_ref01_ent = client.Board()
    let board_ref01_data = setup.data.new.board['board_ref01']

    board_ref01_data = (await board_ref01_ent.create(board_ref01_data)).data()
    assert(null != board_ref01_data.id)


    // LIST
    const board_ref01_match: any = {}

    const board_ref01_list = (await board_ref01_ent.list(board_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(board_ref01_list, { id: board_ref01_data.id })))


    // UPDATE
    const board_ref01_data_up0: any = {}
    board_ref01_data_up0.id = board_ref01_data.id

    const board_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-board_ref01_' + setup.now }
    ;(board_ref01_data_up0 as any)[board_ref01_markdef_up0.name] = board_ref01_markdef_up0.value

    const board_ref01_resdata_up0 = (await board_ref01_ent.update(board_ref01_data_up0)).data()
    assert(board_ref01_resdata_up0.id === board_ref01_data_up0.id)

    assert((board_ref01_resdata_up0 as any)[board_ref01_markdef_up0.name] === board_ref01_markdef_up0.value)


    // LOAD
    const board_ref01_match_dt0: any = {}
    board_ref01_match_dt0.id = board_ref01_data.id
    const board_ref01_data_dt0 = (await board_ref01_ent.load(board_ref01_match_dt0)).data()
    assert(board_ref01_data_dt0.id === board_ref01_data.id)


    // REMOVE
    const board_ref01_match_rm0: any = { id: board_ref01_data.id }
    await board_ref01_ent.remove(board_ref01_match_rm0)
  

    // LIST
    const board_ref01_match_rt0: any = {}

    const board_ref01_list_rt0 = (await board_ref01_ent.list(board_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(board_ref01_list_rt0, { id: board_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/board/BoardTestData.json')

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
    ['board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_BOARD_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_BOARD_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_BOARD_ENTID']
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
  
