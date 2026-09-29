

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


describe('CallEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('VAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VapiSDK.test()
    const ent = testsdk.Call()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VAPI_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'call.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"analysis":{"a":true,"h":"Analysis","n":"analysis","r":false,"sh":"This is the analysis of the call.","t":"`$ANY`","key$":"analysis","index$":0},"artifact":{"a":true,"h":"Artifact","n":"artifact","r":false,"sh":"These are the artifacts created from the call.","t":"`$ANY`","union":{"branches":5,"count":13,"depth":19},"key$":"artifact","index$":1},"artifactPlan":{"a":true,"h":"Artifact Plan","n":"artifactPlan","r":false,"sh":"This is a copy of assistant artifact plan.","t":"`$ANY`","union":{"branches":5,"count":3,"depth":11},"key$":"artifactPlan","index$":2},"assistant":{"a":true,"h":"Assistant","n":"assistant","r":false,"sh":"This is the assistant that will be used for the call.","t":"`$ANY`","union":{"branches":23,"count":19650,"depth":55},"key$":"assistant","index$":3},"assistantId":{"a":true,"h":"Assistant Id","n":"assistantId","r":false,"sh":"This is the assistant ID that will be used for the call.","t":"`$STRING`","key$":"assistantId","index$":4},"assistantOverrides":{"a":true,"h":"Assistant Overrides","n":"assistantOverrides","r":false,"sh":"These are the overrides for the `assistant` or `assistantId`'s settings and template variables.","t":"`$ANY`","union":{"branches":23,"count":5356,"depth":42},"key$":"assistantOverrides","index$":5},"assistantVersion":{"a":true,"h":"Assistant Version","n":"assistantVersion","r":false,"sh":"This is the assistant version to use for this call.","t":"`$STRING`","key$":"assistantVersion","index$":6},"campaignId":{"a":true,"h":"Campaign Id","n":"campaignId","r":false,"sh":"This is the campaign ID that the call belongs to.","t":"`$STRING`","key$":"campaignId","index$":7},"compliance":{"a":true,"h":"Compliance","n":"compliance","r":false,"sh":"This is the compliance of the call.","t":"`$ANY`","key$":"compliance","index$":8},"cost":{"a":true,"h":"Cost","n":"cost","r":false,"sh":"This is the cost of the call in USD.","t":"`$NUMBER`","key$":"cost","index$":9},"costBreakdown":{"a":true,"h":"Cost Breakdown","n":"costBreakdown","r":false,"sh":"This is the cost of the call in USD.","t":"`$ANY`","key$":"costBreakdown","index$":10},"costs":{"a":true,"h":"Costs","n":"costs","r":false,"sh":"These are the costs of individual components of the call in USD.","t":"`$ARRAY`","union":{"branches":8,"count":1,"depth":1},"key$":"costs","index$":11},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"This is the ISO 8601 date-time string of when the call was created.","t":"`$STRING`","key$":"createdAt","index$":12},"customer":{"a":true,"h":"Customer","n":"customer","r":false,"sh":"This is the customer that will be called.","t":"`$ANY`","union":{"branches":23,"count":8908,"depth":41},"key$":"customer","index$":13},"customerId":{"a":true,"h":"Customer Id","n":"customerId","r":false,"sh":"This is the customer that will be called.","t":"`$STRING`","key$":"customerId","index$":14},"customers":{"a":true,"h":"Customers","n":"customers","r":false,"sh":"This is used to issue batch calls to multiple customers.","t":"`$ARRAY`","union":{"branches":23,"count":8908,"depth":40},"key$":"customers","index$":15},"destination":{"a":true,"h":"Destination","n":"destination","r":false,"sh":"This is the destination where the call ended up being transferred to.","t":"`$ANY`","union":{"branches":3,"count":9,"depth":12},"key$":"destination","index$":16},"endedAt":{"a":true,"fo":"date-time","h":"Ended At","n":"endedAt","r":false,"sh":"This is the ISO 8601 date-time string of when the call was ended.","t":"`$STRING`","key$":"endedAt","index$":17},"endedMessage":{"a":true,"h":"Ended Message","n":"endedMessage","r":false,"sh":"This is the message that adds more context to the ended reason.","t":"`$STRING`","key$":"endedMessage","index$":18},"endedReason":{"a":true,"h":"Ended Reason","n":"endedReason","r":false,"sh":"This is the explanation for how the call ended.","t":"`$STRING`","key$":"endedReason","index$":19},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"This is the unique identifier for the call.","t":"`$STRING`","key$":"id","index$":20},"messages":{"a":true,"h":"Messages","n":"messages","r":false,"t":"`$ARRAY`","union":{"branches":5,"count":1,"depth":1},"key$":"messages","index$":21},"monitor":{"a":true,"h":"Monitor","n":"monitor","r":false,"sh":"This is to real-time monitor the call.","t":"`$ANY`","key$":"monitor","index$":22},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"This is the name of the call.","t":"`$STRING`","key$":"name","index$":23},"orgId":{"a":true,"h":"Org Id","n":"orgId","r":true,"sh":"This is the unique identifier for the org that this call belongs to.","t":"`$STRING`","key$":"orgId","index$":24},"phoneCallProvider":{"a":true,"de":true,"h":"Phone Call Provider","n":"phoneCallProvider","r":false,"sh":"This is the provider of the call.","t":"`$STRING`","key$":"phoneCallProvider","index$":25},"phoneCallProviderId":{"a":true,"de":true,"h":"Phone Call Provider Id","n":"phoneCallProviderId","r":false,"sh":"The ID of the call as provided by the phone number service.","t":"`$STRING`","key$":"phoneCallProviderId","index$":26},"phoneCallTransport":{"a":true,"h":"Phone Call Transport","n":"phoneCallTransport","r":false,"sh":"This is the transport of the phone call.","t":"`$STRING`","key$":"phoneCallTransport","index$":27},"phoneNumber":{"a":true,"h":"Phone Number","n":"phoneNumber","r":false,"sh":"This is the phone number that will be used for the call.","t":"`$ANY`","union":{"branches":3,"count":30,"depth":26},"key$":"phoneNumber","index$":28},"phoneNumberId":{"a":true,"h":"Phone Number Id","n":"phoneNumberId","r":false,"sh":"This is the phone number that will be used for the call.","t":"`$STRING`","key$":"phoneNumberId","index$":29},"schedulePlan":{"a":true,"h":"Schedule Plan","n":"schedulePlan","r":false,"sh":"This is the schedule plan of the call.","t":"`$ANY`","key$":"schedulePlan","index$":30},"squad":{"a":true,"h":"Squad","n":"squad","r":false,"sh":"This is a squad that will be used for the call.","t":"`$ANY`","union":{"branches":23,"count":12463,"depth":49},"key$":"squad","index$":31},"squadId":{"a":true,"h":"Squad Id","n":"squadId","r":false,"sh":"This is the squad that will be used for the call.","t":"`$STRING`","key$":"squadId","index$":32},"squadOverrides":{"a":true,"h":"Squad Overrides","n":"squadOverrides","r":false,"sh":"These are the overrides for the `squad` or `squadId`'s member settings and template variables.","t":"`$ANY`","union":{"branches":23,"count":5356,"depth":42},"key$":"squadOverrides","index$":33},"squadVersion":{"a":true,"h":"Squad Version","n":"squadVersion","r":false,"sh":"This is the squad version to use for this call.","t":"`$STRING`","key$":"squadVersion","index$":34},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":false,"sh":"This is the ISO 8601 date-time string of when the call was started.","t":"`$STRING`","key$":"startedAt","index$":35},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"This is the status of the call.","t":"`$STRING`","key$":"status","index$":36},"transport":{"a":true,"h":"Transport","n":"transport","r":false,"sh":"This is the transport of the call.","t":"`$ANY`","union":{"branches":6,"count":1,"depth":0},"key$":"transport","index$":37},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"This is the type of call.","t":"`$STRING`","key$":"type","index$":38},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"This is the ISO 8601 date-time string of when the call was last updated.","t":"`$STRING`","key$":"updatedAt","index$":39},"workflow":{"a":true,"h":"Workflow","n":"workflow","r":false,"sh":"This is a workflow that will be used for the call.","t":"`$ANY`","union":{"branches":23,"count":2788,"depth":34},"key$":"workflow","index$":40},"workflowId":{"a":true,"h":"Workflow Id","n":"workflowId","r":false,"sh":"This is the workflow that will be used for the call.","t":"`$STRING`","key$":"workflowId","index$":41},"workflowOverrides":{"a":true,"h":"Workflow Overrides","n":"workflowOverrides","r":false,"sh":"These are the overrides for the `workflow` or `workflowId`'s settings and template variables.","t":"`$ANY`","key$":"workflowOverrides","index$":42}},"id":{"field":"id","name":"id"},"name":"call","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /call","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/call","q":{},"r":{},"s":[{"lit":"call"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /call","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"assistant_id","or":"assistantId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created_at_ge","or":"createdAtGe","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_gt","or":"createdAtGt","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created_at_le","or":"createdAtLe","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"created_at_lt","or":"createdAtLt","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"phone_number_id","or":"phoneNumberId","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"updated_at_ge","or":"updatedAtGe","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"updated_at_gt","or":"updatedAtGt","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"updated_at_le","or":"updatedAtLe","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"updated_at_lt","or":"updatedAtLt","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/call","q":{"exist":["assistant_id","created_at_ge","created_at_gt","created_at_le","created_at_lt","id","limit","phone_number_id","updated_at_ge","updated_at_gt","updated_at_le","updated_at_lt"]},"r":{},"s":[{"lit":"call"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /call/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/call/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /call/{id}/assistant-recording","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/call/{id}/assistant-recording","q":{"$action":"assistant_recording","exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"},{"lit":"assistant-recording"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /call/{id}/call-logs","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/call/{id}/call-logs","q":{"$action":"call_log","exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"},{"lit":"call-logs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /call/{id}/customer-recording","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/call/{id}/customer-recording","q":{"$action":"customer_recording","exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"},{"lit":"customer-recording"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /call/{id}/mono-recording","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/call/{id}/mono-recording","q":{"$action":"mono_recording","exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"},{"lit":"mono-recording"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /call/{id}/pcap","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/call/{id}/pcap","q":{"$action":"pcap","exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"},{"lit":"pcap"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"GET /call/{id}/stereo-recording","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/call/{id}/stereo-recording","q":{"$action":"stereo_recording","exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"},{"lit":"stereo-recording"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"GET /call/{id}/video-recording","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/call/{id}/video-recording","q":{"$action":"video_recording","exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"},{"lit":"video-recording"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /call/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/call/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /call/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/call/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"call"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"call","name__orig":"call","Name":"Call","name_":"call","name-":"call","NAME":"CALL","index$":3}, {"active":true,"entity":"call","key$":"BasicCallFlow","kind":"basic","name":"BasicCallFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"call_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"call_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"call_ref01","srcdatavar":"call_ref01_data","suffix":"_up0","textfield":"assistantId"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-call_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"call_ref01","srcdatavar":"call_ref01_data","suffix":"_dt0"},"m":{"id":"call01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-call_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"call_ref01","suffix":"_rm0"},"m":{"id":"call01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"call_ref01"}}],"index$":5}]}, 'Call', {"POST /call":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"assistantVersion":{"type":"string","nullable":true,"description":"This is the assistant version to use for this call. Supported only with\ndirect `assistantId`. Omit to follow the latest version.","key$":"assistantVersion"},"squadVersion":{"type":"string","nullable":true,"description":"This is the squad version to use for this call. Supported only with\ndirect `squadId`. Omit to follow the latest version.","key$":"squadVersion"},"transport":{"description":"This is the transport of the call.","oneOf":[{"type":"object","properties":{"conversationType":{},"provider":{},"audioFormat":{}},"required":["provider"],"title":"VapiWebsocketTransport","x-ref":"#/components/schemas/VapiWebsocketTransport"},{"type":"object","properties":{"conversationType":{},"provider":{},"conversationUUID":{},"callUUID":{}},"required":["provider"],"title":"VonageTransport","x-ref":"#/components/schemas/VonageTransport"},{"type":"object","properties":{"conversationType":{},"provider":{},"accountSid":{},"callSid":{},"callToken":{},"forwardedFrom":{}},"required":["provider"],"title":"TwilioTransport","x-ref":"#/components/schemas/TwilioTransport"},{"type":"object","properties":{"conversationType":{},"provider":{},"dialTimeout":{},"sbcCallSid":{},"callSid":{}},"required":["provider"],"title":"VapiSipTransport","x-ref":"#/components/schemas/VapiSipTransport"},{"type":"object","properties":{"conversationType":{},"provider":{},"callControlId":{},"callLegId":{},"callSessionId":{}},"required":["provider"],"title":"TelnyxTransport","x-ref":"#/components/schemas/TelnyxTransport"},{"type":"object","properties":{"conversationType":{},"provider":{},"roomDeleteOnUserLeaveEnabled":{},"callToken":{},"callUrl":{},"callSipUri":{}},"required":["provider"],"title":"VapiWebCallTransport","x-ref":"#/components/schemas/VapiWebCallTransport"}],"key$":"transport"},"customers":{"description":"This is used to issue batch calls to multiple customers.\n\nOnly relevant for `outboundPhoneCall`. To call a single customer, use `customer` instead.","type":"array","items":{"type":"object","properties":{"numberE164CheckEnabled":{"default":true,"description":"This is the flag to toggle the E164 check for the `number` field. This is an advanced property which should be used if you know your use case requires it.\n\nUse cases:\n- `false`: To allow non-E164 numbers like `+001234567890`, `1234`, or `abc`. This is useful for dialing out to non-E164 numbers on your SIP trunks.\n- `true` (default): To allow only E164 numbers like `+14155551234`. This is standard for PSTN calls.\n\nIf `false`, the `number` is still required to only contain alphanumeric characters (regex: `/^\\+?[a-zA-Z0-9]+$/`).\n\n@default true (E164 check is enabled)","type":"boolean"},"extension":{"description":"This is the extension that will be dialed after the call is answered.","example":null,"maxLength":10,"type":"string"},"assistantOverrides":{"allOf":[],"description":"These are the overrides for the assistant's settings and template variables specific to this customer.\nThis allows customization of the assistant's behavior for individual customers in batch calls."},"squadOverrides":{"allOf":[],"description":"These are the overrides applied when the call targets a `squadId`. Mirrors\nthe call-level `squadOverrides` — use this instead of `assistantOverrides`\nwhen the campaign or call is squad-based."},"number":{"description":"This is the number of the customer.","maxLength":40,"minLength":3,"type":"string"},"sipUri":{"description":"This is the SIP URI of the customer.","type":"string"},"name":{"description":"This is the name of the customer. This is just for your own reference.\n\nFor SIP inbound calls, this is extracted from the `From` SIP header with format `\"Display Name\" <sip:username@domain>`.","maxLength":40,"type":"string"},"email":{"description":"This is the email of the customer.","maxLength":40,"type":"string"},"externalId":{"description":"This is the external ID of the customer.","maxLength":40,"type":"string"}},"x-ref":"#/components/schemas/CreateCustomerDTO"},"key$":"customers"},"name":{"type":"string","description":"This is the name of the call. This is just for your own reference.","maxLength":40,"key$":"name"},"schedulePlan":{"description":"This is the schedule plan of the call.","allOf":[{"type":"object","properties":{"earliestAt":{},"latestAt":{}},"required":["earliestAt"],"x-ref":"#/components/schemas/SchedulePlan"}],"key$":"schedulePlan"},"assistantId":{"type":"string","description":"This is the assistant ID that will be used for the call. To use a transient assistant, use `assistant` instead.\n\nTo start a call with:\n- Assistant, use `assistantId` or `assistant`\n- Squad, use `squadId` or `squad`\n- Workflow, use `workflowId` or `workflow`","key$":"assistantId"},"assistant":{"description":"This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead.\n\nTo start a call with:\n- Assistant, use `assistant`\n- Squad, use `squad`\n- Workflow, use `workflow`","allOf":[{"type":"object","properties":{"transcriber":{},"model":{},"voice":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"voicemailDetection":{},"clientMessages":{},"serverMessages":{},"maxDurationSeconds":{},"backgroundSound":{},"modelOutputInMessagesEnabled":{},"transportConfigurations":{},"observabilityPlan":{},"credentials":{},"hooks":{},"name":{},"voicemailMessage":{},"endCallMessage":{},"endCallPhrases":{},"compliancePlan":{},"metadata":{},"backgroundSpeechDenoisingPlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"credentialIds":{},"server":{},"keypadInputPlan":{}},"x-ref":"#/components/schemas/CreateAssistantDTO"}],"key$":"assistant"},"assistantOverrides":{"description":"These are the overrides for the `assistant` or `assistantId`'s settings and template variables.","allOf":[{"type":"object","properties":{"transcriber":{},"model":{},"voice":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"voicemailDetection":{},"clientMessages":{},"serverMessages":{},"maxDurationSeconds":{},"backgroundSound":{},"modelOutputInMessagesEnabled":{},"transportConfigurations":{},"observabilityPlan":{},"credentials":{},"hooks":{},"tools:append":{},"variableValues":{},"name":{},"voicemailMessage":{},"endCallMessage":{},"endCallPhrases":{},"compliancePlan":{},"metadata":{},"backgroundSpeechDenoisingPlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"credentialIds":{},"server":{},"keypadInputPlan":{}},"x-ref":"#/components/schemas/AssistantOverrides"}],"key$":"assistantOverrides"},"squadId":{"type":"string","description":"This is the squad that will be used for the call. To use a transient squad, use `squad` instead.\n\nTo start a call with:\n- Assistant, use `assistant` or `assistantId`\n- Squad, use `squad` or `squadId`\n- Workflow, use `workflow` or `workflowId`","key$":"squadId"},"squad":{"description":"This is a squad that will be used for the call. To use an existing squad, use `squadId` instead.\n\nTo start a call with:\n- Assistant, use `assistant` or `assistantId`\n- Squad, use `squad` or `squadId`\n- Workflow, use `workflow` or `workflowId`","allOf":[{"type":"object","properties":{"name":{},"members":{},"membersOverrides":{}},"required":["members"],"x-ref":"#/components/schemas/CreateSquadDTO"}],"key$":"squad"},"squadOverrides":{"description":"These are the overrides for the `squad` or `squadId`'s member settings and template variables.\nThis will apply to all members of the squad.","allOf":[{"type":"object","properties":{"transcriber":{},"model":{},"voice":{},"firstMessage":{},"firstMessageInterruptionsEnabled":{},"firstMessageMode":{},"voicemailDetection":{},"clientMessages":{},"serverMessages":{},"maxDurationSeconds":{},"backgroundSound":{},"modelOutputInMessagesEnabled":{},"transportConfigurations":{},"observabilityPlan":{},"credentials":{},"hooks":{},"tools:append":{},"variableValues":{},"name":{},"voicemailMessage":{},"endCallMessage":{},"endCallPhrases":{},"compliancePlan":{},"metadata":{},"backgroundSpeechDenoisingPlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"credentialIds":{},"server":{},"keypadInputPlan":{}},"x-ref":"#/components/schemas/AssistantOverrides"}],"key$":"squadOverrides"},"workflowId":{"type":"string","description":"This is the workflow that will be used for the call. To use a transient workflow, use `workflow` instead.\n\nTo start a call with:\n- Assistant, use `assistant` or `assistantId`\n- Squad, use `squad` or `squadId`\n- Workflow, use `workflow` or `workflowId`","key$":"workflowId"},"workflow":{"description":"This is a workflow that will be used for the call. To use an existing workflow, use `workflowId` instead.\n\nTo start a call with:\n- Assistant, use `assistant` or `assistantId`\n- Squad, use `squad` or `squadId`\n- Workflow, use `workflow` or `workflowId`","allOf":[{"type":"object","properties":{"nodes":{},"model":{},"transcriber":{},"voice":{},"observabilityPlan":{},"backgroundSound":{},"hooks":{},"credentials":{},"voicemailDetection":{},"maxDurationSeconds":{},"name":{},"edges":{},"globalPrompt":{},"server":{},"compliancePlan":{},"analysisPlan":{},"artifactPlan":{},"startSpeakingPlan":{},"stopSpeakingPlan":{},"monitorPlan":{},"backgroundSpeechDenoisingPlan":{},"credentialIds":{},"keypadInputPlan":{},"voicemailMessage":{}},"required":["nodes","name","edges"],"x-ref":"#/components/schemas/CreateWorkflowDTO"}],"key$":"workflow"},"workflowOverrides":{"description":"These are the overrides for the `workflow` or `workflowId`'s settings and template variables.","allOf":[{"type":"object","properties":{"variableValues":{}},"x-ref":"#/components/schemas/WorkflowOverrides"}],"key$":"workflowOverrides"},"phoneNumberId":{"type":"string","description":"This is the phone number that will be used for the call. To use a transient number, use `phoneNumber` instead.\n\nOnly relevant for `outboundPhoneCall` and `inboundPhoneCall` type.","key$":"phoneNumberId"},"phoneNumber":{"description":"This is the phone number that will be used for the call. To use an existing number, use `phoneNumberId` instead.\n\nOnly relevant for `outboundPhoneCall` and `inboundPhoneCall` type.","allOf":[{"type":"object","properties":{"fallbackDestination":{},"hooks":{},"smsEnabled":{},"twilioPhoneNumber":{},"twilioAccountSid":{},"twilioAuthToken":{},"twilioApiKey":{},"twilioApiSecret":{},"name":{},"assistantId":{},"workflowId":{},"squadId":{},"server":{}},"required":["twilioPhoneNumber","twilioAccountSid"],"x-ref":"#/components/schemas/ImportTwilioPhoneNumberDTO"}],"key$":"phoneNumber"},"customerId":{"type":"string","description":"This is the customer that will be called. To call a transient customer , use `customer` instead.\n\nOnly relevant for `outboundPhoneCall` and `inboundPhoneCall` type.","key$":"customerId"},"customer":{"description":"This is the customer that will be called. To call an existing customer, use `customerId` instead.\n\nOnly relevant for `outboundPhoneCall` and `inboundPhoneCall` type.","allOf":[{"type":"object","properties":{"numberE164CheckEnabled":{},"extension":{},"assistantOverrides":{},"squadOverrides":{},"number":{},"sipUri":{},"name":{},"email":{},"externalId":{}},"x-ref":"#/components/schemas/CreateCustomerDTO"}],"key$":"customer"}},"x-ref":"#/components/schemas/CreateCallDTO","index$":1}}}},"parameters":[]},"GET /call":{"protocol":"http","parameters":[{"name":"id","required":false,"in":"query","description":"This is the unique identifier for the call.","schema":{"type":"string"},"index$":0},{"name":"assistantId","required":false,"in":"query","description":"This will return calls with the specified assistantId.","schema":{"type":"string"},"index$":1},{"name":"phoneNumberId","required":false,"in":"query","description":"This is the phone number that will be used for the call. To use a transient number, use `phoneNumber` instead.\n\nOnly relevant for `outboundPhoneCall` and `inboundPhoneCall` type.","schema":{"type":"string"},"index$":2},{"name":"limit","required":false,"in":"query","description":"This is the maximum number of items to return. Defaults to 100.","schema":{"minimum":0,"maximum":1000,"type":"number"},"index$":3},{"name":"createdAtGt","required":false,"in":"query","description":"This will return items where the createdAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":4},{"name":"createdAtLt","required":false,"in":"query","description":"This will return items where the createdAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":5},{"name":"createdAtGe","required":false,"in":"query","description":"This will return items where the createdAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":6},{"name":"createdAtLe","required":false,"in":"query","description":"This will return items where the createdAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":7},{"name":"updatedAtGt","required":false,"in":"query","description":"This will return items where the updatedAt is greater than the specified value.","schema":{"format":"date-time","type":"string"},"index$":8},{"name":"updatedAtLt","required":false,"in":"query","description":"This will return items where the updatedAt is less than the specified value.","schema":{"format":"date-time","type":"string"},"index$":9},{"name":"updatedAtGe","required":false,"in":"query","description":"This will return items where the updatedAt is greater than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":10},{"name":"updatedAtLe","required":false,"in":"query","description":"This will return items where the updatedAt is less than or equal to the specified value.","schema":{"format":"date-time","type":"string"},"index$":11}]},"GET /call/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]},"GET /call/{id}/assistant-recording":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Call ID","schema":{"format":"uuid","type":"string"},"index$":0}]},"GET /call/{id}/call-logs":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Call ID","schema":{"format":"uuid","type":"string"},"index$":0}]},"GET /call/{id}/customer-recording":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Call ID","schema":{"format":"uuid","type":"string"},"index$":0}]},"GET /call/{id}/mono-recording":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Call ID","schema":{"format":"uuid","type":"string"},"index$":0}]},"GET /call/{id}/pcap":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Call ID","schema":{"format":"uuid","type":"string"},"index$":0}]},"GET /call/{id}/stereo-recording":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Call ID","schema":{"format":"uuid","type":"string"},"index$":0}]},"GET /call/{id}/video-recording":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","description":"Call ID","schema":{"format":"uuid","type":"string"},"index$":0}]},"DELETE /call/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"ids":{"description":"These are the Call IDs to be bulk deleted.\nIf provided, the call ID if any in the request query will be ignored\nWhen requesting a bulk delete, updates when a call is deleted will be sent as a webhook to the server URL configured in the Org settings.\nIt may take up to a few hours to complete the bulk delete, and will be asynchronous.","type":"array","items":{"type":"string"}}},"x-ref":"#/components/schemas/DeleteCallDTO"}}}},"parameters":[]},"PATCH /call/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"This is the name of the call. This is just for your own reference.","maxLength":40,"key$":"name"}},"x-ref":"#/components/schemas/UpdateCallDTO","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","description":"The unique identifier for the resource.","schema":{"format":"uuid","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const call_ref01_ent = client.Call()
    let call_ref01_data = setup.data.new.call['call_ref01']

    call_ref01_data = (await call_ref01_ent.create(call_ref01_data)).data()
    assert(null != call_ref01_data.id)


    // LIST
    const call_ref01_match: any = {}

    const call_ref01_list = (await call_ref01_ent.list(call_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(call_ref01_list, { id: call_ref01_data.id })))


    // UPDATE
    const call_ref01_data_up0: any = {}
    call_ref01_data_up0.id = call_ref01_data.id

    const call_ref01_markdef_up0 = { name: 'assistantId', value: 'Mark01-call_ref01_' + setup.now }
    ;(call_ref01_data_up0 as any)[call_ref01_markdef_up0.name] = call_ref01_markdef_up0.value

    const call_ref01_resdata_up0 = (await call_ref01_ent.update(call_ref01_data_up0)).data()
    assert(call_ref01_resdata_up0.id === call_ref01_data_up0.id)

    assert((call_ref01_resdata_up0 as any)[call_ref01_markdef_up0.name] === call_ref01_markdef_up0.value)


    // LOAD
    const call_ref01_match_dt0: any = {}
    call_ref01_match_dt0.id = call_ref01_data.id
    const call_ref01_data_dt0 = (await call_ref01_ent.load(call_ref01_match_dt0)).data()
    assert(call_ref01_data_dt0.id === call_ref01_data.id)


    // REMOVE
    const call_ref01_match_rm0: any = { id: call_ref01_data.id }
    await call_ref01_ent.remove(call_ref01_match_rm0)
  

    // LIST
    const call_ref01_match_rt0: any = {}

    const call_ref01_list_rt0 = (await call_ref01_ent.list(call_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(call_ref01_list_rt0, { id: call_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/call/CallTestData.json')

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
    ['call01','call02','call03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VAPI_TEST_CALL_ENTID': idmap,
    'VAPI_TEST_LIVE': 'FALSE',
    'VAPI_TEST_EXPLAIN': 'FALSE',
    'VAPI_APIKEY': '',
  })

  idmap = env['VAPI_TEST_CALL_ENTID']

  const live = 'TRUE' === env.VAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VAPI_TEST_CALL_ENTID']
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
  
