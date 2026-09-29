

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


describe('FileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.File()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'file.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bucket":{"a":true,"h":"Bucket","n":"bucket","r":false,"t":"`$STRING`","key$":"bucket","index$":0},"bytes":{"a":true,"h":"Bytes","n":"bytes","r":false,"t":"`$NUMBER`","key$":"bytes","index$":1},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"This is the ISO 8601 date-time string of when the file was created.","t":"`$STRING`","key$":"createdAt","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"This is the unique identifier for the file.","t":"`$STRING`","key$":"id","index$":3},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":4},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"t":"`$OBJECT`","key$":"metadata","index$":5},"mimetype":{"a":true,"h":"Mimetype","n":"mimetype","r":false,"t":"`$STRING`","key$":"mimetype","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"This is the name of the file.","t":"`$STRING`","key$":"name","index$":7},"object":{"a":true,"h":"Object","n":"object","r":false,"t":"`$STRING`","key$":"object","index$":8},"orgId":{"a":true,"h":"Org Id","n":"orgId","r":true,"sh":"This is the unique identifier for the org that this file belongs to.","t":"`$STRING`","key$":"orgId","index$":9},"originalName":{"a":true,"h":"Original Name","n":"originalName","r":false,"t":"`$STRING`","key$":"originalName","index$":10},"parsedTextBytes":{"a":true,"h":"Parsed Text Bytes","n":"parsedTextBytes","r":false,"t":"`$NUMBER`","key$":"parsedTextBytes","index$":11},"parsedTextUrl":{"a":true,"h":"Parsed Text Url","n":"parsedTextUrl","r":false,"t":"`$STRING`","key$":"parsedTextUrl","index$":12},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":13},"purpose":{"a":true,"h":"Purpose","n":"purpose","r":false,"t":"`$STRING`","key$":"purpose","index$":14},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":15},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"This is the ISO 8601 date-time string of when the file was last updated.","t":"`$STRING`","key$":"updatedAt","index$":16},"url":{"a":true,"h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":17}},"id":{"field":"id","name":"id"},"name":"file","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /file","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/file","q":{},"r":{},"s":[{"lit":"file"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /file","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"purpose","or":"purpose","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/file","q":{"exist":["purpose"]},"r":{},"s":[{"lit":"file"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /file/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/file/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"file"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /file/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/file/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"file"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /file/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/file/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"file"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"file","name__orig":"file","Name":"File","name_":"file","name-":"file","NAME":"FILE","index$":7}, {"active":true,"entity":"file","key$":"BasicFileFlow","kind":"basic","name":"BasicFileFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"file_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"file_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"file_ref01","srcdatavar":"file_ref01_data","suffix":"_up0","textfield":"bucket"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-file_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"file_ref01","srcdatavar":"file_ref01_data","suffix":"_dt0"},"m":{"id":"file01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-file_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"file_ref01","suffix":"_rm0"},"m":{"id":"file01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"file_ref01"}}],"index$":5}]}, 'File', {"POST /file":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"file":{"type":"string","description":"The file to upload.","format":"binary"},"purpose":{"type":"string","description":"Optional product flow that owns the uploaded file.","enum":["assistant","composer-attachment","knowledge-base-v2"]},"metadata":{"type":"string","description":"Optional JSON-encoded metadata for multipart uploads.","maxLength":4096}},"required":["file"],"x-ref":"#/components/schemas/CreateFileDTO"}}}},"parameters":[]},"GET /file":{"protocol":"http","parameters":[{"name":"purpose","required":false,"in":"query","description":"Only return files with this purpose. When omitted, files of every purpose except composer attachments are returned.","schema":{"enum":["assistant","composer-attachment","knowledge-base-v2"],"type":"string"},"index$":0}]},"GET /file/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /file/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"PATCH /file/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the file. This is just for your own reference.","minLength":1,"maxLength":40,"key$":"name"}},"x-ref":"#/components/schemas/UpdateFileDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const file_ref01_ent = client.File()
    let file_ref01_data = setup.data.new.file['file_ref01']

    file_ref01_data = (await file_ref01_ent.create(file_ref01_data)).data()
    assert(null != file_ref01_data.id)


    // LIST
    const file_ref01_match: any = {}

    const file_ref01_list = (await file_ref01_ent.list(file_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(file_ref01_list, { id: file_ref01_data.id })))


    // UPDATE
    const file_ref01_data_up0: any = {}
    file_ref01_data_up0.id = file_ref01_data.id

    const file_ref01_markdef_up0 = { name: 'bucket', value: 'Mark01-file_ref01_' + setup.now }
    ;(file_ref01_data_up0 as any)[file_ref01_markdef_up0.name] = file_ref01_markdef_up0.value

    const file_ref01_resdata_up0 = (await file_ref01_ent.update(file_ref01_data_up0)).data()
    assert(file_ref01_resdata_up0.id === file_ref01_data_up0.id)

    assert((file_ref01_resdata_up0 as any)[file_ref01_markdef_up0.name] === file_ref01_markdef_up0.value)


    // LOAD
    const file_ref01_match_dt0: any = {}
    file_ref01_match_dt0.id = file_ref01_data.id
    const file_ref01_data_dt0 = (await file_ref01_ent.load(file_ref01_match_dt0)).data()
    assert(file_ref01_data_dt0.id === file_ref01_data.id)


    // REMOVE
    const file_ref01_match_rm0: any = { id: file_ref01_data.id }
    await file_ref01_ent.remove(file_ref01_match_rm0)
  

    // LIST
    const file_ref01_match_rt0: any = {}

    const file_ref01_list_rt0 = (await file_ref01_ent.list(file_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(file_ref01_list_rt0, { id: file_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/file/FileTestData.json')

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
    ['file01','file02','file03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_FILE_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_FILE_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_FILE_ENTID']
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
  
