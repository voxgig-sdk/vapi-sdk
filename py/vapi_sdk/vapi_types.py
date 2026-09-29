# Typed models for the Vapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Analytics(TypedDict):
    queries: list


class AnalyticsCreateData(TypedDict):
    queries: list


class AssistantRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str
    url: str
    valid: bool


class Assistant(AssistantRequired, total=False):
    analysisPlan: Any
    artifactPlan: Any
    backgroundSound: Any
    backgroundSpeechDenoisingPlan: Any
    clientMessages: list
    compliancePlan: dict
    contentType: str
    credentialIds: list
    credentials: list
    endCallMessage: str
    endCallPhrases: list
    firstMessage: str
    firstMessageInterruptionsEnabled: bool
    firstMessageMode: str
    hooks: list
    keypadInputPlan: dict
    latestVersion: str
    maxDurationSeconds: float
    metadata: dict
    model: Any
    modelDeprecations: list
    modelOutputInMessagesEnabled: bool
    monitorPlan: Any
    name: str
    observabilityPlan: Any
    reason: str
    server: Any
    serverMessages: list
    startSpeakingPlan: Any
    status: float
    stopSpeakingPlan: Any
    transcriber: Any
    transportConfigurations: list
    voice: Any
    voicemailDetection: Any
    voicemailMessage: str


class AssistantLoadMatch(TypedDict):
    id: str


class AssistantListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    limit: float
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class AssistantCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str
    url: str
    valid: bool


class AssistantCreateData(AssistantCreateDataRequired, total=False):
    analysisPlan: Any
    artifactPlan: Any
    backgroundSound: Any
    backgroundSpeechDenoisingPlan: Any
    clientMessages: list
    compliancePlan: dict
    contentType: str
    credentialIds: list
    credentials: list
    endCallMessage: str
    endCallPhrases: list
    firstMessage: str
    firstMessageInterruptionsEnabled: bool
    firstMessageMode: str
    hooks: list
    keypadInputPlan: dict
    latestVersion: str
    maxDurationSeconds: float
    metadata: dict
    model: Any
    modelDeprecations: list
    modelOutputInMessagesEnabled: bool
    monitorPlan: Any
    name: str
    observabilityPlan: Any
    reason: str
    server: Any
    serverMessages: list
    startSpeakingPlan: Any
    status: float
    stopSpeakingPlan: Any
    transcriber: Any
    transportConfigurations: list
    voice: Any
    voicemailDetection: Any
    voicemailMessage: str


class AssistantUpdateDataRequired(TypedDict):
    id: str


class AssistantUpdateData(AssistantUpdateDataRequired, total=False):
    analysisPlan: Any
    artifactPlan: Any
    backgroundSound: Any
    backgroundSpeechDenoisingPlan: Any
    clientMessages: list
    compliancePlan: dict
    contentType: str
    createdAt: str
    credentialIds: list
    credentials: list
    endCallMessage: str
    endCallPhrases: list
    firstMessage: str
    firstMessageInterruptionsEnabled: bool
    firstMessageMode: str
    hooks: list
    keypadInputPlan: dict
    latestVersion: str
    maxDurationSeconds: float
    metadata: dict
    model: Any
    modelDeprecations: list
    modelOutputInMessagesEnabled: bool
    monitorPlan: Any
    name: str
    observabilityPlan: Any
    orgId: str
    reason: str
    server: Any
    serverMessages: list
    startSpeakingPlan: Any
    status: float
    stopSpeakingPlan: Any
    transcriber: Any
    transportConfigurations: list
    updatedAt: str
    url: str
    valid: bool
    voice: Any
    voicemailDetection: Any
    voicemailMessage: str


class AssistantRemoveMatch(TypedDict):
    id: str


class BoardRequired(TypedDict):
    createdAt: str
    id: str
    layout: Any
    name: str
    orgId: str
    updatedAt: str


class Board(BoardRequired, total=False):
    items: list
    systemKey: str
    timeRangeOverride: Any


class BoardLoadMatch(TypedDict):
    id: str


class BoardListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    limit: float
    page: float
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class BoardCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    layout: Any
    name: str
    orgId: str
    updatedAt: str


class BoardCreateData(BoardCreateDataRequired, total=False):
    items: list
    systemKey: str
    timeRangeOverride: Any


class BoardUpdateDataRequired(TypedDict):
    id: str


class BoardUpdateData(BoardUpdateDataRequired, total=False):
    createdAt: str
    items: list
    layout: Any
    name: str
    orgId: str
    systemKey: str
    timeRangeOverride: Any
    updatedAt: str


class BoardRemoveMatch(TypedDict):
    id: str


class CallRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str


class Call(CallRequired, total=False):
    analysis: Any
    artifact: Any
    artifactPlan: Any
    assistant: Any
    assistantId: str
    assistantOverrides: Any
    assistantVersion: str
    campaignId: str
    compliance: Any
    cost: float
    costBreakdown: Any
    costs: list
    customer: Any
    customerId: str
    customers: list
    destination: Any
    endedAt: str
    endedMessage: str
    endedReason: str
    messages: list
    monitor: Any
    name: str
    phoneCallProvider: str
    phoneCallProviderId: str
    phoneCallTransport: str
    phoneNumber: Any
    phoneNumberId: str
    schedulePlan: Any
    squad: Any
    squadId: str
    squadOverrides: Any
    squadVersion: str
    startedAt: str
    status: str
    transport: Any
    type: str
    workflow: Any
    workflowId: str
    workflowOverrides: Any


class CallLoadMatch(TypedDict):
    id: str


class CallListMatch(TypedDict, total=False):
    assistant_id: str
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id: str
    limit: float
    phone_number_id: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class CallCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str


class CallCreateData(CallCreateDataRequired, total=False):
    analysis: Any
    artifact: Any
    artifactPlan: Any
    assistant: Any
    assistantId: str
    assistantOverrides: Any
    assistantVersion: str
    campaignId: str
    compliance: Any
    cost: float
    costBreakdown: Any
    costs: list
    customer: Any
    customerId: str
    customers: list
    destination: Any
    endedAt: str
    endedMessage: str
    endedReason: str
    messages: list
    monitor: Any
    name: str
    phoneCallProvider: str
    phoneCallProviderId: str
    phoneCallTransport: str
    phoneNumber: Any
    phoneNumberId: str
    schedulePlan: Any
    squad: Any
    squadId: str
    squadOverrides: Any
    squadVersion: str
    startedAt: str
    status: str
    transport: Any
    type: str
    workflow: Any
    workflowId: str
    workflowOverrides: Any


class CallUpdateDataRequired(TypedDict):
    id: str


class CallUpdateData(CallUpdateDataRequired, total=False):
    analysis: Any
    artifact: Any
    artifactPlan: Any
    assistant: Any
    assistantId: str
    assistantOverrides: Any
    assistantVersion: str
    campaignId: str
    compliance: Any
    cost: float
    costBreakdown: Any
    costs: list
    createdAt: str
    customer: Any
    customerId: str
    customers: list
    destination: Any
    endedAt: str
    endedMessage: str
    endedReason: str
    messages: list
    monitor: Any
    name: str
    orgId: str
    phoneCallProvider: str
    phoneCallProviderId: str
    phoneCallTransport: str
    phoneNumber: Any
    phoneNumberId: str
    schedulePlan: Any
    squad: Any
    squadId: str
    squadOverrides: Any
    squadVersion: str
    startedAt: str
    status: str
    transport: Any
    type: str
    updatedAt: str
    workflow: Any
    workflowId: str
    workflowOverrides: Any


class CallRemoveMatch(TypedDict):
    id: str


class CampaignRequired(TypedDict):
    calls: dict
    callsCounterEnded: float
    callsCounterEndedVoicemail: float
    callsCounterInProgress: float
    callsCounterQueued: float
    callsCounterScheduled: float
    createdAt: str
    id: str
    name: str
    orgId: str
    status: str
    updatedAt: str


class Campaign(CampaignRequired, total=False):
    assistantId: str
    assistantOverrides: Any
    callMetrics: Any
    contactCounters: Any
    customers: list
    dialPlan: list
    duplicateFromCampaignId: str
    endedReason: str
    maxConcurrency: float
    phoneNumberId: str
    predialPlan: Any
    schedulePlan: Any
    server: Any
    serverMessages: list
    squadId: str
    squadOverrides: Any
    workflowId: str


class CampaignLoadMatchRequired(TypedDict):
    id: str


class CampaignLoadMatch(CampaignLoadMatchRequired, total=False):
    include_counter: bool


class CampaignListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id: str
    limit: float
    page: float
    sort_by: str
    sort_order: str
    status: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class CampaignCreateDataRequired(TypedDict):
    calls: dict
    callsCounterEnded: float
    callsCounterEndedVoicemail: float
    callsCounterInProgress: float
    callsCounterQueued: float
    callsCounterScheduled: float
    createdAt: str
    id: str
    name: str
    orgId: str
    status: str
    updatedAt: str


class CampaignCreateData(CampaignCreateDataRequired, total=False):
    assistantId: str
    assistantOverrides: Any
    callMetrics: Any
    contactCounters: Any
    customers: list
    dialPlan: list
    duplicateFromCampaignId: str
    endedReason: str
    maxConcurrency: float
    phoneNumberId: str
    predialPlan: Any
    schedulePlan: Any
    server: Any
    serverMessages: list
    squadId: str
    squadOverrides: Any
    workflowId: str


class CampaignUpdateDataRequired(TypedDict):
    id: str


class CampaignUpdateData(CampaignUpdateDataRequired, total=False):
    assistantId: str
    assistantOverrides: Any
    callMetrics: Any
    calls: dict
    callsCounterEnded: float
    callsCounterEndedVoicemail: float
    callsCounterInProgress: float
    callsCounterQueued: float
    callsCounterScheduled: float
    contactCounters: Any
    createdAt: str
    customers: list
    dialPlan: list
    duplicateFromCampaignId: str
    endedReason: str
    maxConcurrency: float
    name: str
    orgId: str
    phoneNumberId: str
    predialPlan: Any
    schedulePlan: Any
    server: Any
    serverMessages: list
    squadId: str
    squadOverrides: Any
    status: str
    updatedAt: str
    workflowId: str


class CampaignRemoveMatch(TypedDict):
    id: str


class ChatRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str


class Chat(ChatRequired, total=False):
    assistant: Any
    assistantId: str
    assistantOverrides: Any
    cost: float
    costs: list
    input: Any
    messages: list
    name: str
    output: list
    previousChatId: str
    sessionId: str
    squad: Any
    squadId: str
    stream: bool
    transport: Any


class ChatLoadMatch(TypedDict):
    id: str


class ChatListMatch(TypedDict, total=False):
    assistant_id: str
    assistant_id_any: str
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id: str
    id_any: str
    limit: float
    page: float
    previous_chat_id: str
    session_id: str
    sort_by: str
    sort_order: str
    squad_id: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class ChatCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str


class ChatCreateData(ChatCreateDataRequired, total=False):
    assistant: Any
    assistantId: str
    assistantOverrides: Any
    cost: float
    costs: list
    input: Any
    messages: list
    name: str
    output: list
    previousChatId: str
    sessionId: str
    squad: Any
    squadId: str
    stream: bool
    transport: Any


class ChatRemoveMatch(TypedDict):
    id: str


class EvalRequired(TypedDict):
    cost: float
    costs: list
    createdAt: str
    endedAt: str
    endedReason: str
    id: str
    messages: list
    orgId: str
    results: list
    startedAt: str
    status: str
    target: Any
    type: str
    updatedAt: str


class Eval(EvalRequired, total=False):
    description: str
    endedMessage: str
    eval: Any
    evalId: str
    name: str


class EvalLoadMatch(TypedDict):
    id: str


class EvalListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id: str
    limit: float
    page: float
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class EvalCreateDataRequired(TypedDict):
    cost: float
    costs: list
    createdAt: str
    endedAt: str
    endedReason: str
    id: str
    messages: list
    orgId: str
    results: list
    startedAt: str
    status: str
    target: Any
    type: str
    updatedAt: str


class EvalCreateData(EvalCreateDataRequired, total=False):
    description: str
    endedMessage: str
    eval: Any
    evalId: str
    name: str


class EvalUpdateDataRequired(TypedDict):
    id: str


class EvalUpdateData(EvalUpdateDataRequired, total=False):
    cost: float
    costs: list
    createdAt: str
    description: str
    endedAt: str
    endedMessage: str
    endedReason: str
    eval: Any
    evalId: str
    messages: list
    name: str
    orgId: str
    results: list
    startedAt: str
    status: str
    target: Any
    type: str
    updatedAt: str


class EvalRemoveMatch(TypedDict):
    id: str


class FileRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str


class File(FileRequired, total=False):
    bucket: str
    bytes: float
    key: str
    metadata: dict
    mimetype: str
    name: str
    object: str
    originalName: str
    parsedTextBytes: float
    parsedTextUrl: str
    path: str
    purpose: str
    status: str
    url: str


class FileLoadMatch(TypedDict):
    id: str


class FileListMatch(TypedDict, total=False):
    purpose: str


class FileCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str


class FileCreateData(FileCreateDataRequired, total=False):
    bucket: str
    bytes: float
    key: str
    metadata: dict
    mimetype: str
    name: str
    object: str
    originalName: str
    parsedTextBytes: float
    parsedTextUrl: str
    path: str
    purpose: str
    status: str
    url: str


class FileUpdateDataRequired(TypedDict):
    id: str


class FileUpdateData(FileUpdateDataRequired, total=False):
    bucket: str
    bytes: float
    createdAt: str
    key: str
    metadata: dict
    mimetype: str
    name: str
    object: str
    orgId: str
    originalName: str
    parsedTextBytes: float
    parsedTextUrl: str
    path: str
    purpose: str
    status: str
    updatedAt: str
    url: str


class FileRemoveMatch(TypedDict):
    id: str


class InsightRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    type: str
    updatedAt: str


class Insight(InsightRequired, total=False):
    name: str
    systemKey: str


class InsightLoadMatch(TypedDict):
    id: str


class InsightListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id: str
    limit: float
    page: float
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class InsightCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    type: str
    updatedAt: str


class InsightCreateData(InsightCreateDataRequired, total=False):
    name: str
    systemKey: str


class InsightUpdateDataRequired(TypedDict):
    id: str


class InsightUpdateData(InsightUpdateDataRequired, total=False):
    createdAt: str
    name: str
    orgId: str
    systemKey: str
    type: str
    updatedAt: str


class InsightRemoveMatch(TypedDict):
    id: str


class KnowledgeBaseRequired(TypedDict):
    createdAt: str
    files: list
    id: str
    name: str
    orgId: str
    toolId: str
    updatedAt: str


class KnowledgeBase(KnowledgeBaseRequired, total=False):
    description: str


class KnowledgeBaseLoadMatch(TypedDict):
    id: str


class KnowledgeBaseListMatch(TypedDict, total=False):
    limit: float


class KnowledgeBaseCreateDataRequired(TypedDict):
    createdAt: str
    files: list
    id: str
    name: str
    orgId: str
    toolId: str
    updatedAt: str


class KnowledgeBaseCreateData(KnowledgeBaseCreateDataRequired, total=False):
    description: str


class KnowledgeBaseUpdateDataRequired(TypedDict):
    id: str


class KnowledgeBaseUpdateData(KnowledgeBaseUpdateDataRequired, total=False):
    createdAt: str
    description: str
    files: list
    name: str
    orgId: str
    toolId: str
    updatedAt: str


class KnowledgeBaseRemoveMatch(TypedDict):
    id: str


class KnowledgeBaseV2FileRequired(TypedDict):
    createdAt: str
    fileId: str
    id: str
    knowledgeBaseV2Id: str
    status: str
    updatedAt: str


class KnowledgeBaseV2File(KnowledgeBaseV2FileRequired, total=False):
    bytes: float
    fileName: str
    mimetype: str


class KnowledgeBaseV2FileListMatch(TypedDict):
    id: str


class KnowledgeBaseV2FileCreateDataRequired(TypedDict):
    id: str
    createdAt: str
    fileId: str
    knowledgeBaseV2Id: str
    status: str
    updatedAt: str


class KnowledgeBaseV2FileCreateData(KnowledgeBaseV2FileCreateDataRequired, total=False):
    bytes: float
    fileName: str
    mimetype: str


class KnowledgeBaseV2FileRemoveMatch(TypedDict):
    id: str
    knowledge_base_id: str


class PersonalityRequired(TypedDict):
    assistant: Any
    createdAt: str
    id: str
    name: str
    orgId: str
    updatedAt: str


class Personality(PersonalityRequired, total=False):
    path: str


class PersonalityLoadMatch(TypedDict):
    id: str


class PersonalityListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    limit: float
    page: float
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class PersonalityCreateDataRequired(TypedDict):
    assistant: Any
    createdAt: str
    id: str
    name: str
    orgId: str
    updatedAt: str


class PersonalityCreateData(PersonalityCreateDataRequired, total=False):
    path: str


class PersonalityUpdateDataRequired(TypedDict):
    id: str


class PersonalityUpdateData(PersonalityUpdateDataRequired, total=False):
    assistant: Any
    createdAt: str
    name: str
    orgId: str
    path: str
    updatedAt: str


class PersonalityRemoveMatch(TypedDict):
    id: str


class PhoneNumberRequired(TypedDict):
    metadata: Any
    results: list


class PhoneNumber(PhoneNumberRequired, total=False):
    id: str


class PhoneNumberLoadMatch(TypedDict):
    id: str


class PhoneNumberListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    limit: float
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class PhoneNumberCreateDataRequired(TypedDict):
    metadata: Any
    results: list


class PhoneNumberCreateData(PhoneNumberCreateDataRequired, total=False):
    id: str


class PhoneNumberUpdateDataRequired(TypedDict):
    id: str


class PhoneNumberUpdateData(PhoneNumberUpdateDataRequired, total=False):
    metadata: Any
    results: list


class PhoneNumberRemoveMatch(TypedDict):
    id: str


class Provider(TypedDict):
    createdAt: str
    id: str
    metadata: dict
    orgId: str
    provider: str
    resource: dict
    resourceId: str
    resourceName: str
    results: list
    updatedAt: str


class ProviderLoadMatchRequired(TypedDict):
    provider: str
    resource_name: str


class ProviderLoadMatch(ProviderLoadMatchRequired, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id: str
    limit: float
    page: float
    resource_id: str
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class ProviderCreateData(TypedDict):
    provider: str
    resource_name: str
    createdAt: str
    id: str
    metadata: dict
    orgId: str
    resource: dict
    resourceId: str
    resourceName: str
    results: list
    updatedAt: str


class ProviderUpdateDataRequired(TypedDict):
    id: str
    provider: str
    resource_name: str


class ProviderUpdateData(ProviderUpdateDataRequired, total=False):
    createdAt: str
    metadata: dict
    orgId: str
    resource: dict
    resourceId: str
    resourceName: str
    results: list
    updatedAt: str


class ProviderRemoveMatch(TypedDict):
    id: str
    provider: str
    resource_name: str


class ScenarioRequired(TypedDict):
    createdAt: str
    evaluations: list
    id: str
    instructions: str
    name: str
    orgId: str
    updatedAt: str


class Scenario(ScenarioRequired, total=False):
    hooks: list
    path: str
    targetOverrides: Any
    toolMocks: list


class ScenarioLoadMatch(TypedDict):
    id: str


class ScenarioListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id_any: list
    limit: float
    name: str
    page: float
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class ScenarioCreateDataRequired(TypedDict):
    createdAt: str
    evaluations: list
    id: str
    instructions: str
    name: str
    orgId: str
    updatedAt: str


class ScenarioCreateData(ScenarioCreateDataRequired, total=False):
    hooks: list
    path: str
    targetOverrides: Any
    toolMocks: list


class ScenarioUpdateDataRequired(TypedDict):
    id: str


class ScenarioUpdateData(ScenarioUpdateDataRequired, total=False):
    createdAt: str
    evaluations: list
    hooks: list
    instructions: str
    name: str
    orgId: str
    path: str
    targetOverrides: Any
    toolMocks: list
    updatedAt: str


class ScenarioRemoveMatch(TypedDict):
    id: str


class ScorecardRequired(TypedDict):
    createdAt: str
    id: str
    metrics: list
    orgId: str
    updatedAt: str


class Scorecard(ScorecardRequired, total=False):
    assistantIds: list
    description: str
    name: str


class ScorecardLoadMatch(TypedDict):
    id: str


class ScorecardListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id: str
    limit: float
    page: float
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class ScorecardCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    metrics: list
    orgId: str
    updatedAt: str


class ScorecardCreateData(ScorecardCreateDataRequired, total=False):
    assistantIds: list
    description: str
    name: str


class ScorecardUpdateDataRequired(TypedDict):
    id: str


class ScorecardUpdateData(ScorecardUpdateDataRequired, total=False):
    assistantIds: list
    createdAt: str
    description: str
    metrics: list
    name: str
    orgId: str
    updatedAt: str


class ScorecardRemoveMatch(TypedDict):
    id: str


class SessionRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str


class Session(SessionRequired, total=False):
    artifact: Any
    assistant: Any
    assistantId: str
    assistantOverrides: Any
    cost: float
    costs: list
    customer: Any
    customerId: str
    expirationSeconds: float
    messages: list
    name: str
    phoneNumber: Any
    phoneNumberId: str
    squad: Any
    squadId: str
    status: str


class SessionLoadMatch(TypedDict):
    id: str


class SessionListMatch(TypedDict, total=False):
    assistant_id: str
    assistant_id_any: str
    assistant_override: Any
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    customer_number_any: str
    email: str
    extension: str
    external_id: str
    id: str
    id_any: str
    limit: float
    name: str
    number: str
    number_e164_check_enabled: bool
    page: float
    phone_number_id: str
    phone_number_id_any: list
    sip_uri: str
    sort_by: str
    sort_order: str
    squad_id: str
    squad_override: Any
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str
    workflow_id: str


class SessionCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    updatedAt: str


class SessionCreateData(SessionCreateDataRequired, total=False):
    artifact: Any
    assistant: Any
    assistantId: str
    assistantOverrides: Any
    cost: float
    costs: list
    customer: Any
    customerId: str
    expirationSeconds: float
    messages: list
    name: str
    phoneNumber: Any
    phoneNumberId: str
    squad: Any
    squadId: str
    status: str


class SessionUpdateDataRequired(TypedDict):
    id: str


class SessionUpdateData(SessionUpdateDataRequired, total=False):
    artifact: Any
    assistant: Any
    assistantId: str
    assistantOverrides: Any
    cost: float
    costs: list
    createdAt: str
    customer: Any
    customerId: str
    expirationSeconds: float
    messages: list
    name: str
    orgId: str
    phoneNumber: Any
    phoneNumberId: str
    squad: Any
    squadId: str
    status: str
    updatedAt: str


class SessionRemoveMatch(TypedDict):
    id: str


class SimulationRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    personalityId: str
    scenarioId: str
    updatedAt: str


class Simulation(SimulationRequired, total=False):
    assistantId: str
    name: str
    path: str
    squadId: str


class SimulationLoadMatch(TypedDict):
    id: str


class SimulationListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id_any: list
    limit: float
    page: float
    sort_by: str
    sort_order: str
    standalone_only: bool
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class SimulationCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    personalityId: str
    scenarioId: str
    updatedAt: str


class SimulationCreateData(SimulationCreateDataRequired, total=False):
    assistantId: str
    name: str
    path: str
    squadId: str


class SimulationUpdateDataRequired(TypedDict):
    id: str


class SimulationUpdateData(SimulationUpdateDataRequired, total=False):
    assistantId: str
    createdAt: str
    name: str
    orgId: str
    path: str
    personalityId: str
    scenarioId: str
    squadId: str
    updatedAt: str


class SimulationRemoveMatch(TypedDict):
    id: str


class SimulationRunRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    queuedAt: str
    simulations: list
    status: str
    target: Any
    updatedAt: str


class SimulationRun(SimulationRunRequired, total=False):
    endedAt: str
    endedReason: str
    itemCounts: Any
    iterations: float
    startedAt: str
    transport: Any


class SimulationRunLoadMatch(TypedDict):
    id: str


class SimulationRunCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    queuedAt: str
    simulations: list
    status: str
    target: Any
    updatedAt: str


class SimulationRunCreateData(SimulationRunCreateDataRequired, total=False):
    endedAt: str
    endedReason: str
    itemCounts: Any
    iterations: float
    startedAt: str
    transport: Any


class SimulationRunUpdateDataRequired(TypedDict):
    id: str


class SimulationRunUpdateData(SimulationRunUpdateDataRequired, total=False):
    createdAt: str
    endedAt: str
    endedReason: str
    itemCounts: Any
    iterations: float
    orgId: str
    queuedAt: str
    simulations: list
    startedAt: str
    status: str
    target: Any
    transport: Any
    updatedAt: str


class SimulationRunItemRequired(TypedDict):
    createdAt: str
    id: str
    orgId: str
    queuedAt: str
    simulationId: str
    status: str
    updatedAt: str


class SimulationRunItem(SimulationRunItemRequired, total=False):
    callId: str
    canceledAt: str
    completedAt: str
    configurations: Any
    failedAt: str
    failureReason: str
    hooks: list
    improvementSuggestions: Any
    iterationNumber: float
    metadata: Any
    personalityId: str
    results: Any
    runId: str
    scenarioId: str
    sessionId: str
    startedAt: str


class SimulationRunItemLoadMatch(TypedDict):
    id: str
    run_id: str


class SimulationRunItemListMatch(TypedDict, total=False):
    run_id: str
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    limit: float
    page: float
    simulation_id: str
    sort_by: str
    sort_order: str
    status: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class SimulationRunItemCreateDataRequired(TypedDict):
    item_id: str
    run_id: str
    force: str
    createdAt: str
    id: str
    orgId: str
    queuedAt: str
    simulationId: str
    status: str
    updatedAt: str


class SimulationRunItemCreateData(SimulationRunItemCreateDataRequired, total=False):
    persist: str
    callId: str
    canceledAt: str
    completedAt: str
    configurations: Any
    failedAt: str
    failureReason: str
    hooks: list
    improvementSuggestions: Any
    iterationNumber: float
    metadata: Any
    personalityId: str
    results: Any
    runId: str
    scenarioId: str
    sessionId: str
    startedAt: str


class SimulationRunItemUpdateDataRequired(TypedDict):
    id: str
    run_id: str


class SimulationRunItemUpdateData(SimulationRunItemUpdateDataRequired, total=False):
    callId: str
    canceledAt: str
    completedAt: str
    configurations: Any
    createdAt: str
    failedAt: str
    failureReason: str
    hooks: list
    improvementSuggestions: Any
    iterationNumber: float
    metadata: Any
    orgId: str
    personalityId: str
    queuedAt: str
    results: Any
    runId: str
    scenarioId: str
    sessionId: str
    simulationId: str
    startedAt: str
    status: str
    updatedAt: str


class SimulationSuiteRequired(TypedDict):
    createdAt: str
    id: str
    name: str
    orgId: str
    simulationIds: list
    targetAssignments: list
    updatedAt: str


class SimulationSuite(SimulationSuiteRequired, total=False):
    path: str
    slackWebhookUrl: str


class SimulationSuiteLoadMatch(TypedDict):
    id: str


class SimulationSuiteListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    limit: float
    name: str
    page: float
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class SimulationSuiteCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    name: str
    orgId: str
    simulationIds: list
    targetAssignments: list
    updatedAt: str


class SimulationSuiteCreateData(SimulationSuiteCreateDataRequired, total=False):
    path: str
    slackWebhookUrl: str


class SimulationSuiteUpdateDataRequired(TypedDict):
    id: str


class SimulationSuiteUpdateData(SimulationSuiteUpdateDataRequired, total=False):
    createdAt: str
    name: str
    orgId: str
    path: str
    simulationIds: list
    slackWebhookUrl: str
    targetAssignments: list
    updatedAt: str


class SimulationSuiteRemoveMatch(TypedDict):
    id: str


class SquadRequired(TypedDict):
    createdAt: str
    id: str
    members: list
    orgId: str
    updatedAt: str


class Squad(SquadRequired, total=False):
    latestVersion: str
    membersOverrides: Any
    modelDeprecations: list
    name: str


class SquadLoadMatch(TypedDict):
    id: str


class SquadListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id_any: list
    limit: float
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class SquadCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    members: list
    orgId: str
    updatedAt: str


class SquadCreateData(SquadCreateDataRequired, total=False):
    latestVersion: str
    membersOverrides: Any
    modelDeprecations: list
    name: str


class SquadUpdateDataRequired(TypedDict):
    id: str


class SquadUpdateData(SquadUpdateDataRequired, total=False):
    createdAt: str
    latestVersion: str
    members: list
    membersOverrides: Any
    modelDeprecations: list
    name: str
    orgId: str
    updatedAt: str


class SquadRemoveMatch(TypedDict):
    id: str


class StructuredOutputRequired(TypedDict):
    createdAt: str
    id: str
    name: str
    orgId: str
    schema: Any
    updatedAt: str


class StructuredOutput(StructuredOutputRequired, total=False):
    assistantIds: list
    compliancePlan: Any
    conditions: list
    description: str
    model: Any
    regex: str
    type: str
    workflowIds: list


class StructuredOutputLoadMatch(TypedDict):
    id: str


class StructuredOutputListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    id: str
    limit: float
    name: str
    page: float
    sort_by: str
    sort_order: str
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class StructuredOutputCreateDataRequired(TypedDict):
    createdAt: str
    id: str
    name: str
    orgId: str
    schema: Any
    updatedAt: str


class StructuredOutputCreateData(StructuredOutputCreateDataRequired, total=False):
    assistantIds: list
    compliancePlan: Any
    conditions: list
    description: str
    model: Any
    regex: str
    type: str
    workflowIds: list


class StructuredOutputUpdateDataRequired(TypedDict):
    id: str
    schema_override: str


class StructuredOutputUpdateData(StructuredOutputUpdateDataRequired, total=False):
    assistantIds: list
    compliancePlan: Any
    conditions: list
    createdAt: str
    description: str
    model: Any
    name: str
    orgId: str
    regex: str
    schema: Any
    type: str
    updatedAt: str
    workflowIds: list


class StructuredOutputRemoveMatch(TypedDict):
    id: str


class Tool(TypedDict, total=False):
    id: str


class ToolLoadMatch(TypedDict):
    id: str


class ToolListMatch(TypedDict, total=False):
    created_at_ge: str
    created_at_gt: str
    created_at_le: str
    created_at_lt: str
    limit: float
    updated_at_ge: str
    updated_at_gt: str
    updated_at_le: str
    updated_at_lt: str


class ToolCreateData(TypedDict, total=False):
    id: str


class ToolUpdateData(TypedDict):
    id: str


class ToolRemoveMatch(TypedDict):
    id: str
