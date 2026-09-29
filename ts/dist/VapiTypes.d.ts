export interface Analytics {
    queries: any[];
}
export interface AnalyticsCreateData {
    queries: any[];
}
export interface Assistant {
    analysisPlan?: any;
    artifactPlan?: any;
    backgroundSound?: any;
    backgroundSpeechDenoisingPlan?: any;
    clientMessages?: any[];
    compliancePlan?: Record<string, any>;
    contentType?: string;
    createdAt: string;
    credentialIds?: any[];
    credentials?: any[];
    endCallMessage?: string;
    endCallPhrases?: any[];
    firstMessage?: string;
    firstMessageInterruptionsEnabled?: boolean;
    firstMessageMode?: string;
    hooks?: any[];
    id: string;
    keypadInputPlan?: Record<string, any>;
    latestVersion?: string;
    maxDurationSeconds?: number;
    metadata?: Record<string, any>;
    model?: any;
    modelDeprecations?: any[];
    modelOutputInMessagesEnabled?: boolean;
    monitorPlan?: any;
    name?: string;
    observabilityPlan?: any;
    orgId: string;
    reason?: string;
    server?: any;
    serverMessages?: any[];
    startSpeakingPlan?: any;
    status?: number;
    stopSpeakingPlan?: any;
    transcriber?: any;
    transportConfigurations?: any[];
    updatedAt: string;
    url: string;
    valid: boolean;
    voice?: any;
    voicemailDetection?: any;
    voicemailMessage?: string;
}
export interface AssistantLoadMatch {
    id: string;
}
export interface AssistantListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    limit?: number;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface AssistantCreateData {
    analysisPlan?: any;
    artifactPlan?: any;
    backgroundSound?: any;
    backgroundSpeechDenoisingPlan?: any;
    clientMessages?: any[];
    compliancePlan?: Record<string, any>;
    contentType?: string;
    createdAt: string;
    credentialIds?: any[];
    credentials?: any[];
    endCallMessage?: string;
    endCallPhrases?: any[];
    firstMessage?: string;
    firstMessageInterruptionsEnabled?: boolean;
    firstMessageMode?: string;
    hooks?: any[];
    id: string;
    keypadInputPlan?: Record<string, any>;
    latestVersion?: string;
    maxDurationSeconds?: number;
    metadata?: Record<string, any>;
    model?: any;
    modelDeprecations?: any[];
    modelOutputInMessagesEnabled?: boolean;
    monitorPlan?: any;
    name?: string;
    observabilityPlan?: any;
    orgId: string;
    reason?: string;
    server?: any;
    serverMessages?: any[];
    startSpeakingPlan?: any;
    status?: number;
    stopSpeakingPlan?: any;
    transcriber?: any;
    transportConfigurations?: any[];
    updatedAt: string;
    url: string;
    valid: boolean;
    voice?: any;
    voicemailDetection?: any;
    voicemailMessage?: string;
}
export interface AssistantUpdateData {
    id: string;
    analysisPlan?: any;
    artifactPlan?: any;
    backgroundSound?: any;
    backgroundSpeechDenoisingPlan?: any;
    clientMessages?: any[];
    compliancePlan?: Record<string, any>;
    contentType?: string;
    createdAt?: string;
    credentialIds?: any[];
    credentials?: any[];
    endCallMessage?: string;
    endCallPhrases?: any[];
    firstMessage?: string;
    firstMessageInterruptionsEnabled?: boolean;
    firstMessageMode?: string;
    hooks?: any[];
    keypadInputPlan?: Record<string, any>;
    latestVersion?: string;
    maxDurationSeconds?: number;
    metadata?: Record<string, any>;
    model?: any;
    modelDeprecations?: any[];
    modelOutputInMessagesEnabled?: boolean;
    monitorPlan?: any;
    name?: string;
    observabilityPlan?: any;
    orgId?: string;
    reason?: string;
    server?: any;
    serverMessages?: any[];
    startSpeakingPlan?: any;
    status?: number;
    stopSpeakingPlan?: any;
    transcriber?: any;
    transportConfigurations?: any[];
    updatedAt?: string;
    url?: string;
    valid?: boolean;
    voice?: any;
    voicemailDetection?: any;
    voicemailMessage?: string;
}
export interface AssistantRemoveMatch {
    id: string;
}
export interface Board {
    createdAt: string;
    id: string;
    items?: any[];
    layout: any;
    name: string;
    orgId: string;
    systemKey?: string;
    timeRangeOverride?: any;
    updatedAt: string;
}
export interface BoardLoadMatch {
    id: string;
}
export interface BoardListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    limit?: number;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface BoardCreateData {
    createdAt: string;
    id: string;
    items?: any[];
    layout: any;
    name: string;
    orgId: string;
    systemKey?: string;
    timeRangeOverride?: any;
    updatedAt: string;
}
export interface BoardUpdateData {
    id: string;
    createdAt?: string;
    items?: any[];
    layout?: any;
    name?: string;
    orgId?: string;
    systemKey?: string;
    timeRangeOverride?: any;
    updatedAt?: string;
}
export interface BoardRemoveMatch {
    id: string;
}
export interface Call {
    analysis?: any;
    artifact?: any;
    artifactPlan?: any;
    assistant?: any;
    assistantId?: string;
    assistantOverrides?: any;
    assistantVersion?: string;
    campaignId?: string;
    compliance?: any;
    cost?: number;
    costBreakdown?: any;
    costs?: any[];
    createdAt: string;
    customer?: any;
    customerId?: string;
    customers?: any[];
    destination?: any;
    endedAt?: string;
    endedMessage?: string;
    endedReason?: string;
    id: string;
    messages?: any[];
    monitor?: any;
    name?: string;
    orgId: string;
    phoneCallProvider?: string;
    phoneCallProviderId?: string;
    phoneCallTransport?: string;
    phoneNumber?: any;
    phoneNumberId?: string;
    schedulePlan?: any;
    squad?: any;
    squadId?: string;
    squadOverrides?: any;
    squadVersion?: string;
    startedAt?: string;
    status?: string;
    transport?: any;
    type?: string;
    updatedAt: string;
    workflow?: any;
    workflowId?: string;
    workflowOverrides?: any;
}
export interface CallLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface CallListMatch {
    assistant_id?: string;
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id?: string;
    limit?: number;
    phone_number_id?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface CallCreateData {
    analysis?: any;
    artifact?: any;
    artifactPlan?: any;
    assistant?: any;
    assistantId?: string;
    assistantOverrides?: any;
    assistantVersion?: string;
    campaignId?: string;
    compliance?: any;
    cost?: number;
    costBreakdown?: any;
    costs?: any[];
    createdAt: string;
    customer?: any;
    customerId?: string;
    customers?: any[];
    destination?: any;
    endedAt?: string;
    endedMessage?: string;
    endedReason?: string;
    id: string;
    messages?: any[];
    monitor?: any;
    name?: string;
    orgId: string;
    phoneCallProvider?: string;
    phoneCallProviderId?: string;
    phoneCallTransport?: string;
    phoneNumber?: any;
    phoneNumberId?: string;
    schedulePlan?: any;
    squad?: any;
    squadId?: string;
    squadOverrides?: any;
    squadVersion?: string;
    startedAt?: string;
    status?: string;
    transport?: any;
    type?: string;
    updatedAt: string;
    workflow?: any;
    workflowId?: string;
    workflowOverrides?: any;
}
export interface CallUpdateData {
    id: string;
    analysis?: any;
    artifact?: any;
    artifactPlan?: any;
    assistant?: any;
    assistantId?: string;
    assistantOverrides?: any;
    assistantVersion?: string;
    campaignId?: string;
    compliance?: any;
    cost?: number;
    costBreakdown?: any;
    costs?: any[];
    createdAt?: string;
    customer?: any;
    customerId?: string;
    customers?: any[];
    destination?: any;
    endedAt?: string;
    endedMessage?: string;
    endedReason?: string;
    messages?: any[];
    monitor?: any;
    name?: string;
    orgId?: string;
    phoneCallProvider?: string;
    phoneCallProviderId?: string;
    phoneCallTransport?: string;
    phoneNumber?: any;
    phoneNumberId?: string;
    schedulePlan?: any;
    squad?: any;
    squadId?: string;
    squadOverrides?: any;
    squadVersion?: string;
    startedAt?: string;
    status?: string;
    transport?: any;
    type?: string;
    updatedAt?: string;
    workflow?: any;
    workflowId?: string;
    workflowOverrides?: any;
}
export interface CallRemoveMatch {
    id: string;
}
export interface Campaign {
    assistantId?: string;
    assistantOverrides?: any;
    callMetrics?: any;
    calls: Record<string, any>;
    callsCounterEnded: number;
    callsCounterEndedVoicemail: number;
    callsCounterInProgress: number;
    callsCounterQueued: number;
    callsCounterScheduled: number;
    contactCounters?: any;
    createdAt: string;
    customers?: any[];
    dialPlan?: any[];
    duplicateFromCampaignId?: string;
    endedReason?: string;
    id: string;
    maxConcurrency?: number;
    name: string;
    orgId: string;
    phoneNumberId?: string;
    predialPlan?: any;
    schedulePlan?: any;
    server?: any;
    serverMessages?: any[];
    squadId?: string;
    squadOverrides?: any;
    status: string;
    updatedAt: string;
    workflowId?: string;
}
export interface CampaignLoadMatch {
    id: string;
    include_counter?: boolean;
}
export interface CampaignListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id?: string;
    limit?: number;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    status?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
    $action?: string;
    [action: string]: any;
}
export interface CampaignCreateData {
    assistantId?: string;
    assistantOverrides?: any;
    callMetrics?: any;
    calls: Record<string, any>;
    callsCounterEnded: number;
    callsCounterEndedVoicemail: number;
    callsCounterInProgress: number;
    callsCounterQueued: number;
    callsCounterScheduled: number;
    contactCounters?: any;
    createdAt: string;
    customers?: any[];
    dialPlan?: any[];
    duplicateFromCampaignId?: string;
    endedReason?: string;
    id: string;
    maxConcurrency?: number;
    name: string;
    orgId: string;
    phoneNumberId?: string;
    predialPlan?: any;
    schedulePlan?: any;
    server?: any;
    serverMessages?: any[];
    squadId?: string;
    squadOverrides?: any;
    status: string;
    updatedAt: string;
    workflowId?: string;
}
export interface CampaignUpdateData {
    id: string;
    assistantId?: string;
    assistantOverrides?: any;
    callMetrics?: any;
    calls?: Record<string, any>;
    callsCounterEnded?: number;
    callsCounterEndedVoicemail?: number;
    callsCounterInProgress?: number;
    callsCounterQueued?: number;
    callsCounterScheduled?: number;
    contactCounters?: any;
    createdAt?: string;
    customers?: any[];
    dialPlan?: any[];
    duplicateFromCampaignId?: string;
    endedReason?: string;
    maxConcurrency?: number;
    name?: string;
    orgId?: string;
    phoneNumberId?: string;
    predialPlan?: any;
    schedulePlan?: any;
    server?: any;
    serverMessages?: any[];
    squadId?: string;
    squadOverrides?: any;
    status?: string;
    updatedAt?: string;
    workflowId?: string;
}
export interface CampaignRemoveMatch {
    id: string;
}
export interface Chat {
    assistant?: any;
    assistantId?: string;
    assistantOverrides?: any;
    cost?: number;
    costs?: any[];
    createdAt: string;
    id: string;
    input?: any;
    messages?: any[];
    name?: string;
    orgId: string;
    output?: any[];
    previousChatId?: string;
    sessionId?: string;
    squad?: any;
    squadId?: string;
    stream?: boolean;
    transport?: any;
    updatedAt: string;
}
export interface ChatLoadMatch {
    id: string;
}
export interface ChatListMatch {
    assistant_id?: string;
    assistant_id_any?: string;
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id?: string;
    id_any?: string;
    limit?: number;
    page?: number;
    previous_chat_id?: string;
    session_id?: string;
    sort_by?: string;
    sort_order?: string;
    squad_id?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface ChatCreateData {
    assistant?: any;
    assistantId?: string;
    assistantOverrides?: any;
    cost?: number;
    costs?: any[];
    createdAt: string;
    id: string;
    input?: any;
    messages?: any[];
    name?: string;
    orgId: string;
    output?: any[];
    previousChatId?: string;
    sessionId?: string;
    squad?: any;
    squadId?: string;
    stream?: boolean;
    transport?: any;
    updatedAt: string;
    $action?: string;
    [action: string]: any;
}
export interface ChatRemoveMatch {
    id: string;
}
export interface Eval {
    cost: number;
    costs: any[];
    createdAt: string;
    description?: string;
    endedAt: string;
    endedMessage?: string;
    endedReason: string;
    eval?: any;
    evalId?: string;
    id: string;
    messages: any[];
    name?: string;
    orgId: string;
    results: any[];
    startedAt: string;
    status: string;
    target: any;
    type: string;
    updatedAt: string;
}
export interface EvalLoadMatch {
    id: string;
}
export interface EvalListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id?: string;
    limit?: number;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
    $action?: string;
    [action: string]: any;
}
export interface EvalCreateData {
    cost: number;
    costs: any[];
    createdAt: string;
    description?: string;
    endedAt: string;
    endedMessage?: string;
    endedReason: string;
    eval?: any;
    evalId?: string;
    id: string;
    messages: any[];
    name?: string;
    orgId: string;
    results: any[];
    startedAt: string;
    status: string;
    target: any;
    type: string;
    updatedAt: string;
    $action?: string;
    [action: string]: any;
}
export interface EvalUpdateData {
    id: string;
    cost?: number;
    costs?: any[];
    createdAt?: string;
    description?: string;
    endedAt?: string;
    endedMessage?: string;
    endedReason?: string;
    eval?: any;
    evalId?: string;
    messages?: any[];
    name?: string;
    orgId?: string;
    results?: any[];
    startedAt?: string;
    status?: string;
    target?: any;
    type?: string;
    updatedAt?: string;
}
export interface EvalRemoveMatch {
    id: string;
}
export interface File {
    bucket?: string;
    bytes?: number;
    createdAt: string;
    id: string;
    key?: string;
    metadata?: Record<string, any>;
    mimetype?: string;
    name?: string;
    object?: string;
    orgId: string;
    originalName?: string;
    parsedTextBytes?: number;
    parsedTextUrl?: string;
    path?: string;
    purpose?: string;
    status?: string;
    updatedAt: string;
    url?: string;
}
export interface FileLoadMatch {
    id: string;
}
export interface FileListMatch {
    purpose?: string;
}
export interface FileCreateData {
    bucket?: string;
    bytes?: number;
    createdAt: string;
    id: string;
    key?: string;
    metadata?: Record<string, any>;
    mimetype?: string;
    name?: string;
    object?: string;
    orgId: string;
    originalName?: string;
    parsedTextBytes?: number;
    parsedTextUrl?: string;
    path?: string;
    purpose?: string;
    status?: string;
    updatedAt: string;
    url?: string;
}
export interface FileUpdateData {
    id: string;
    bucket?: string;
    bytes?: number;
    createdAt?: string;
    key?: string;
    metadata?: Record<string, any>;
    mimetype?: string;
    name?: string;
    object?: string;
    orgId?: string;
    originalName?: string;
    parsedTextBytes?: number;
    parsedTextUrl?: string;
    path?: string;
    purpose?: string;
    status?: string;
    updatedAt?: string;
    url?: string;
}
export interface FileRemoveMatch {
    id: string;
}
export interface Insight {
    createdAt: string;
    id: string;
    name?: string;
    orgId: string;
    systemKey?: string;
    type: string;
    updatedAt: string;
}
export interface InsightLoadMatch {
    id: string;
}
export interface InsightListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id?: string;
    limit?: number;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface InsightCreateData {
    createdAt: string;
    id: string;
    name?: string;
    orgId: string;
    systemKey?: string;
    type: string;
    updatedAt: string;
    $action?: string;
    [action: string]: any;
}
export interface InsightUpdateData {
    id: string;
    createdAt?: string;
    name?: string;
    orgId?: string;
    systemKey?: string;
    type?: string;
    updatedAt?: string;
}
export interface InsightRemoveMatch {
    id: string;
}
export interface KnowledgeBase {
    createdAt: string;
    description?: string;
    files: any[];
    id: string;
    name: string;
    orgId: string;
    toolId: string;
    updatedAt: string;
}
export interface KnowledgeBaseLoadMatch {
    id: string;
}
export interface KnowledgeBaseListMatch {
    limit?: number;
}
export interface KnowledgeBaseCreateData {
    createdAt: string;
    description?: string;
    files: any[];
    id: string;
    name: string;
    orgId: string;
    toolId: string;
    updatedAt: string;
}
export interface KnowledgeBaseUpdateData {
    id: string;
    createdAt?: string;
    description?: string;
    files?: any[];
    name?: string;
    orgId?: string;
    toolId?: string;
    updatedAt?: string;
}
export interface KnowledgeBaseRemoveMatch {
    id: string;
}
export interface KnowledgeBaseV2File {
    bytes?: number;
    createdAt: string;
    fileId: string;
    fileName?: string;
    id: string;
    knowledgeBaseV2Id: string;
    mimetype?: string;
    status: string;
    updatedAt: string;
}
export interface KnowledgeBaseV2FileListMatch {
    id: string;
}
export interface KnowledgeBaseV2FileCreateData {
    id: string;
    bytes?: number;
    createdAt: string;
    fileId: string;
    fileName?: string;
    knowledgeBaseV2Id: string;
    mimetype?: string;
    status: string;
    updatedAt: string;
}
export interface KnowledgeBaseV2FileRemoveMatch {
    id: string;
    knowledge_base_id: string;
}
export interface Personality {
    assistant: any;
    createdAt: string;
    id: string;
    name: string;
    orgId: string;
    path?: string;
    updatedAt: string;
}
export interface PersonalityLoadMatch {
    id: string;
}
export interface PersonalityListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    limit?: number;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface PersonalityCreateData {
    assistant: any;
    createdAt: string;
    id: string;
    name: string;
    orgId: string;
    path?: string;
    updatedAt: string;
}
export interface PersonalityUpdateData {
    id: string;
    assistant?: any;
    createdAt?: string;
    name?: string;
    orgId?: string;
    path?: string;
    updatedAt?: string;
}
export interface PersonalityRemoveMatch {
    id: string;
}
export interface PhoneNumber {
    id?: string;
    metadata: any;
    results: any[];
}
export interface PhoneNumberLoadMatch {
    id: string;
}
export interface PhoneNumberListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    limit?: number;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface PhoneNumberCreateData {
    id?: string;
    metadata: any;
    results: any[];
}
export interface PhoneNumberUpdateData {
    id: string;
    metadata?: any;
    results?: any[];
}
export interface PhoneNumberRemoveMatch {
    id: string;
}
export interface Provider {
    createdAt: string;
    id: string;
    metadata: Record<string, any>;
    orgId: string;
    provider: string;
    resource: Record<string, any>;
    resourceId: string;
    resourceName: string;
    results: any[];
    updatedAt: string;
}
export interface ProviderLoadMatch {
    provider: string;
    resource_name: string;
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id?: string;
    limit?: number;
    page?: number;
    resource_id?: string;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface ProviderCreateData {
    provider: string;
    resource_name: string;
    createdAt: string;
    id: string;
    metadata: Record<string, any>;
    orgId: string;
    resource: Record<string, any>;
    resourceId: string;
    resourceName: string;
    results: any[];
    updatedAt: string;
}
export interface ProviderUpdateData {
    id: string;
    provider: string;
    resource_name: string;
    createdAt?: string;
    metadata?: Record<string, any>;
    orgId?: string;
    resource?: Record<string, any>;
    resourceId?: string;
    resourceName?: string;
    results?: any[];
    updatedAt?: string;
}
export interface ProviderRemoveMatch {
    id: string;
    provider: string;
    resource_name: string;
}
export interface Scenario {
    createdAt: string;
    evaluations: any[];
    hooks?: any[];
    id: string;
    instructions: string;
    name: string;
    orgId: string;
    path?: string;
    targetOverrides?: any;
    toolMocks?: any[];
    updatedAt: string;
}
export interface ScenarioLoadMatch {
    id: string;
}
export interface ScenarioListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id_any?: any[];
    limit?: number;
    name?: string;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface ScenarioCreateData {
    createdAt: string;
    evaluations: any[];
    hooks?: any[];
    id: string;
    instructions: string;
    name: string;
    orgId: string;
    path?: string;
    targetOverrides?: any;
    toolMocks?: any[];
    updatedAt: string;
}
export interface ScenarioUpdateData {
    id: string;
    createdAt?: string;
    evaluations?: any[];
    hooks?: any[];
    instructions?: string;
    name?: string;
    orgId?: string;
    path?: string;
    targetOverrides?: any;
    toolMocks?: any[];
    updatedAt?: string;
}
export interface ScenarioRemoveMatch {
    id: string;
}
export interface Scorecard {
    assistantIds?: any[];
    createdAt: string;
    description?: string;
    id: string;
    metrics: any[];
    name?: string;
    orgId: string;
    updatedAt: string;
}
export interface ScorecardLoadMatch {
    id: string;
}
export interface ScorecardListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id?: string;
    limit?: number;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface ScorecardCreateData {
    assistantIds?: any[];
    createdAt: string;
    description?: string;
    id: string;
    metrics: any[];
    name?: string;
    orgId: string;
    updatedAt: string;
}
export interface ScorecardUpdateData {
    id: string;
    assistantIds?: any[];
    createdAt?: string;
    description?: string;
    metrics?: any[];
    name?: string;
    orgId?: string;
    updatedAt?: string;
}
export interface ScorecardRemoveMatch {
    id: string;
}
export interface Session {
    artifact?: any;
    assistant?: any;
    assistantId?: string;
    assistantOverrides?: any;
    cost?: number;
    costs?: any[];
    createdAt: string;
    customer?: any;
    customerId?: string;
    expirationSeconds?: number;
    id: string;
    messages?: any[];
    name?: string;
    orgId: string;
    phoneNumber?: any;
    phoneNumberId?: string;
    squad?: any;
    squadId?: string;
    status?: string;
    updatedAt: string;
}
export interface SessionLoadMatch {
    id: string;
}
export interface SessionListMatch {
    assistant_id?: string;
    assistant_id_any?: string;
    assistant_override?: any;
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    customer_number_any?: string;
    email?: string;
    extension?: string;
    external_id?: string;
    id?: string;
    id_any?: string;
    limit?: number;
    name?: string;
    number?: string;
    number_e164_check_enabled?: boolean;
    page?: number;
    phone_number_id?: string;
    phone_number_id_any?: any[];
    sip_uri?: string;
    sort_by?: string;
    sort_order?: string;
    squad_id?: string;
    squad_override?: any;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
    workflow_id?: string;
}
export interface SessionCreateData {
    artifact?: any;
    assistant?: any;
    assistantId?: string;
    assistantOverrides?: any;
    cost?: number;
    costs?: any[];
    createdAt: string;
    customer?: any;
    customerId?: string;
    expirationSeconds?: number;
    id: string;
    messages?: any[];
    name?: string;
    orgId: string;
    phoneNumber?: any;
    phoneNumberId?: string;
    squad?: any;
    squadId?: string;
    status?: string;
    updatedAt: string;
}
export interface SessionUpdateData {
    id: string;
    artifact?: any;
    assistant?: any;
    assistantId?: string;
    assistantOverrides?: any;
    cost?: number;
    costs?: any[];
    createdAt?: string;
    customer?: any;
    customerId?: string;
    expirationSeconds?: number;
    messages?: any[];
    name?: string;
    orgId?: string;
    phoneNumber?: any;
    phoneNumberId?: string;
    squad?: any;
    squadId?: string;
    status?: string;
    updatedAt?: string;
}
export interface SessionRemoveMatch {
    id: string;
}
export interface Simulation {
    assistantId?: string;
    createdAt: string;
    id: string;
    name?: string;
    orgId: string;
    path?: string;
    personalityId: string;
    scenarioId: string;
    squadId?: string;
    updatedAt: string;
}
export interface SimulationLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface SimulationListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id_any?: any[];
    limit?: number;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    standalone_only?: boolean;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface SimulationCreateData {
    assistantId?: string;
    createdAt: string;
    id: string;
    name?: string;
    orgId: string;
    path?: string;
    personalityId: string;
    scenarioId: string;
    squadId?: string;
    updatedAt: string;
}
export interface SimulationUpdateData {
    id: string;
    assistantId?: string;
    createdAt?: string;
    name?: string;
    orgId?: string;
    path?: string;
    personalityId?: string;
    scenarioId?: string;
    squadId?: string;
    updatedAt?: string;
}
export interface SimulationRemoveMatch {
    id: string;
}
export interface SimulationRun {
    createdAt: string;
    endedAt?: string;
    endedReason?: string;
    id: string;
    itemCounts?: any;
    iterations?: number;
    orgId: string;
    queuedAt: string;
    simulations: any[];
    startedAt?: string;
    status: string;
    target: any;
    transport?: any;
    updatedAt: string;
}
export interface SimulationRunLoadMatch {
    id: string;
}
export interface SimulationRunCreateData {
    createdAt: string;
    endedAt?: string;
    endedReason?: string;
    id: string;
    itemCounts?: any;
    iterations?: number;
    orgId: string;
    queuedAt: string;
    simulations: any[];
    startedAt?: string;
    status: string;
    target: any;
    transport?: any;
    updatedAt: string;
}
export interface SimulationRunUpdateData {
    id: string;
    createdAt?: string;
    endedAt?: string;
    endedReason?: string;
    itemCounts?: any;
    iterations?: number;
    orgId?: string;
    queuedAt?: string;
    simulations?: any[];
    startedAt?: string;
    status?: string;
    target?: any;
    transport?: any;
    updatedAt?: string;
}
export interface SimulationRunItem {
    callId?: string;
    canceledAt?: string;
    completedAt?: string;
    configurations?: any;
    createdAt: string;
    failedAt?: string;
    failureReason?: string;
    hooks?: any[];
    id: string;
    improvementSuggestions?: any;
    iterationNumber?: number;
    metadata?: any;
    orgId: string;
    personalityId?: string;
    queuedAt: string;
    results?: any;
    runId?: string;
    scenarioId?: string;
    sessionId?: string;
    simulationId: string;
    startedAt?: string;
    status: string;
    updatedAt: string;
}
export interface SimulationRunItemLoadMatch {
    id: string;
    run_id: string;
}
export interface SimulationRunItemListMatch {
    run_id?: string;
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    limit?: number;
    page?: number;
    simulation_id?: string;
    sort_by?: string;
    sort_order?: string;
    status?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface SimulationRunItemCreateData {
    item_id: string;
    run_id: string;
    force: string;
    persist?: string;
    callId?: string;
    canceledAt?: string;
    completedAt?: string;
    configurations?: any;
    createdAt: string;
    failedAt?: string;
    failureReason?: string;
    hooks?: any[];
    id: string;
    improvementSuggestions?: any;
    iterationNumber?: number;
    metadata?: any;
    orgId: string;
    personalityId?: string;
    queuedAt: string;
    results?: any;
    runId?: string;
    scenarioId?: string;
    sessionId?: string;
    simulationId: string;
    startedAt?: string;
    status: string;
    updatedAt: string;
    $action?: string;
    [action: string]: any;
}
export interface SimulationRunItemUpdateData {
    id: string;
    run_id: string;
    callId?: string;
    canceledAt?: string;
    completedAt?: string;
    configurations?: any;
    createdAt?: string;
    failedAt?: string;
    failureReason?: string;
    hooks?: any[];
    improvementSuggestions?: any;
    iterationNumber?: number;
    metadata?: any;
    orgId?: string;
    personalityId?: string;
    queuedAt?: string;
    results?: any;
    runId?: string;
    scenarioId?: string;
    sessionId?: string;
    simulationId?: string;
    startedAt?: string;
    status?: string;
    updatedAt?: string;
}
export interface SimulationSuite {
    createdAt: string;
    id: string;
    name: string;
    orgId: string;
    path?: string;
    simulationIds: any[];
    slackWebhookUrl?: string;
    targetAssignments: any[];
    updatedAt: string;
}
export interface SimulationSuiteLoadMatch {
    id: string;
}
export interface SimulationSuiteListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    limit?: number;
    name?: string;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface SimulationSuiteCreateData {
    createdAt: string;
    id: string;
    name: string;
    orgId: string;
    path?: string;
    simulationIds: any[];
    slackWebhookUrl?: string;
    targetAssignments: any[];
    updatedAt: string;
}
export interface SimulationSuiteUpdateData {
    id: string;
    createdAt?: string;
    name?: string;
    orgId?: string;
    path?: string;
    simulationIds?: any[];
    slackWebhookUrl?: string;
    targetAssignments?: any[];
    updatedAt?: string;
}
export interface SimulationSuiteRemoveMatch {
    id: string;
}
export interface Squad {
    createdAt: string;
    id: string;
    latestVersion?: string;
    members: any[];
    membersOverrides?: any;
    modelDeprecations?: any[];
    name?: string;
    orgId: string;
    updatedAt: string;
}
export interface SquadLoadMatch {
    id: string;
}
export interface SquadListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id_any?: any[];
    limit?: number;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface SquadCreateData {
    createdAt: string;
    id: string;
    latestVersion?: string;
    members: any[];
    membersOverrides?: any;
    modelDeprecations?: any[];
    name?: string;
    orgId: string;
    updatedAt: string;
}
export interface SquadUpdateData {
    id: string;
    createdAt?: string;
    latestVersion?: string;
    members?: any[];
    membersOverrides?: any;
    modelDeprecations?: any[];
    name?: string;
    orgId?: string;
    updatedAt?: string;
}
export interface SquadRemoveMatch {
    id: string;
}
export interface StructuredOutput {
    assistantIds?: any[];
    compliancePlan?: any;
    conditions?: any[];
    createdAt: string;
    description?: string;
    id: string;
    model?: any;
    name: string;
    orgId: string;
    regex?: string;
    schema: any;
    type?: string;
    updatedAt: string;
    workflowIds?: any[];
}
export interface StructuredOutputLoadMatch {
    id: string;
}
export interface StructuredOutputListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    id?: string;
    limit?: number;
    name?: string;
    page?: number;
    sort_by?: string;
    sort_order?: string;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface StructuredOutputCreateData {
    assistantIds?: any[];
    compliancePlan?: any;
    conditions?: any[];
    createdAt: string;
    description?: string;
    id: string;
    model?: any;
    name: string;
    orgId: string;
    regex?: string;
    schema: any;
    type?: string;
    updatedAt: string;
    workflowIds?: any[];
    $action?: string;
    [action: string]: any;
}
export interface StructuredOutputUpdateData {
    id: string;
    schema_override: string;
    assistantIds?: any[];
    compliancePlan?: any;
    conditions?: any[];
    createdAt?: string;
    description?: string;
    model?: any;
    name?: string;
    orgId?: string;
    regex?: string;
    schema?: any;
    type?: string;
    updatedAt?: string;
    workflowIds?: any[];
}
export interface StructuredOutputRemoveMatch {
    id: string;
}
export interface Tool {
    id?: string;
}
export interface ToolLoadMatch {
    id: string;
}
export interface ToolListMatch {
    created_at_ge?: string;
    created_at_gt?: string;
    created_at_le?: string;
    created_at_lt?: string;
    limit?: number;
    updated_at_ge?: string;
    updated_at_gt?: string;
    updated_at_le?: string;
    updated_at_lt?: string;
}
export interface ToolCreateData {
    id?: string;
}
export interface ToolUpdateData {
    id: string;
}
export interface ToolRemoveMatch {
    id: string;
}
