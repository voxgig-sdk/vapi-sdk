# frozen_string_literal: true

# Typed models for the Vapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Analytics entity data model.
#
# @!attribute [rw] queries
#   @return [Array]
Analytics = Struct.new(
  :queries,
  keyword_init: true
)

# Request payload for Analytics#create.
#
# @!attribute [rw] queries
#   @return [Array]
AnalyticsCreateData = Struct.new(
  :queries,
  keyword_init: true
)

# Assistant entity data model.
#
# @!attribute [rw] analysisPlan
#   @return [Object, nil]
#
# @!attribute [rw] artifactPlan
#   @return [Object, nil]
#
# @!attribute [rw] backgroundSound
#   @return [Object, nil]
#
# @!attribute [rw] backgroundSpeechDenoisingPlan
#   @return [Object, nil]
#
# @!attribute [rw] clientMessages
#   @return [Array, nil]
#
# @!attribute [rw] compliancePlan
#   @return [Hash, nil]
#
# @!attribute [rw] contentType
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] credentialIds
#   @return [Array, nil]
#
# @!attribute [rw] credentials
#   @return [Array, nil]
#
# @!attribute [rw] endCallMessage
#   @return [String, nil]
#
# @!attribute [rw] endCallPhrases
#   @return [Array, nil]
#
# @!attribute [rw] firstMessage
#   @return [String, nil]
#
# @!attribute [rw] firstMessageInterruptionsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] firstMessageMode
#   @return [String, nil]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] keypadInputPlan
#   @return [Hash, nil]
#
# @!attribute [rw] latestVersion
#   @return [String, nil]
#
# @!attribute [rw] maxDurationSeconds
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] modelDeprecations
#   @return [Array, nil]
#
# @!attribute [rw] modelOutputInMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] monitorPlan
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] observabilityPlan
#   @return [Object, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] server
#   @return [Object, nil]
#
# @!attribute [rw] serverMessages
#   @return [Array, nil]
#
# @!attribute [rw] startSpeakingPlan
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Float, nil]
#
# @!attribute [rw] stopSpeakingPlan
#   @return [Object, nil]
#
# @!attribute [rw] transcriber
#   @return [Object, nil]
#
# @!attribute [rw] transportConfigurations
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] valid
#   @return [Boolean]
#
# @!attribute [rw] voice
#   @return [Object, nil]
#
# @!attribute [rw] voicemailDetection
#   @return [Object, nil]
#
# @!attribute [rw] voicemailMessage
#   @return [String, nil]
Assistant = Struct.new(
  :analysisPlan,
  :artifactPlan,
  :backgroundSound,
  :backgroundSpeechDenoisingPlan,
  :clientMessages,
  :compliancePlan,
  :contentType,
  :createdAt,
  :credentialIds,
  :credentials,
  :endCallMessage,
  :endCallPhrases,
  :firstMessage,
  :firstMessageInterruptionsEnabled,
  :firstMessageMode,
  :hooks,
  :id,
  :keypadInputPlan,
  :latestVersion,
  :maxDurationSeconds,
  :metadata,
  :model,
  :modelDeprecations,
  :modelOutputInMessagesEnabled,
  :monitorPlan,
  :name,
  :observabilityPlan,
  :orgId,
  :reason,
  :server,
  :serverMessages,
  :startSpeakingPlan,
  :status,
  :stopSpeakingPlan,
  :transcriber,
  :transportConfigurations,
  :updatedAt,
  :url,
  :valid,
  :voice,
  :voicemailDetection,
  :voicemailMessage,
  keyword_init: true
)

# Request payload for Assistant#load.
#
# @!attribute [rw] id
#   @return [String]
AssistantLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Assistant#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
AssistantListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :limit,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Assistant#create.
#
# @!attribute [rw] analysisPlan
#   @return [Object, nil]
#
# @!attribute [rw] artifactPlan
#   @return [Object, nil]
#
# @!attribute [rw] backgroundSound
#   @return [Object, nil]
#
# @!attribute [rw] backgroundSpeechDenoisingPlan
#   @return [Object, nil]
#
# @!attribute [rw] clientMessages
#   @return [Array, nil]
#
# @!attribute [rw] compliancePlan
#   @return [Hash, nil]
#
# @!attribute [rw] contentType
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] credentialIds
#   @return [Array, nil]
#
# @!attribute [rw] credentials
#   @return [Array, nil]
#
# @!attribute [rw] endCallMessage
#   @return [String, nil]
#
# @!attribute [rw] endCallPhrases
#   @return [Array, nil]
#
# @!attribute [rw] firstMessage
#   @return [String, nil]
#
# @!attribute [rw] firstMessageInterruptionsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] firstMessageMode
#   @return [String, nil]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] keypadInputPlan
#   @return [Hash, nil]
#
# @!attribute [rw] latestVersion
#   @return [String, nil]
#
# @!attribute [rw] maxDurationSeconds
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] modelDeprecations
#   @return [Array, nil]
#
# @!attribute [rw] modelOutputInMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] monitorPlan
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] observabilityPlan
#   @return [Object, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] server
#   @return [Object, nil]
#
# @!attribute [rw] serverMessages
#   @return [Array, nil]
#
# @!attribute [rw] startSpeakingPlan
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Float, nil]
#
# @!attribute [rw] stopSpeakingPlan
#   @return [Object, nil]
#
# @!attribute [rw] transcriber
#   @return [Object, nil]
#
# @!attribute [rw] transportConfigurations
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] valid
#   @return [Boolean]
#
# @!attribute [rw] voice
#   @return [Object, nil]
#
# @!attribute [rw] voicemailDetection
#   @return [Object, nil]
#
# @!attribute [rw] voicemailMessage
#   @return [String, nil]
AssistantCreateData = Struct.new(
  :analysisPlan,
  :artifactPlan,
  :backgroundSound,
  :backgroundSpeechDenoisingPlan,
  :clientMessages,
  :compliancePlan,
  :contentType,
  :createdAt,
  :credentialIds,
  :credentials,
  :endCallMessage,
  :endCallPhrases,
  :firstMessage,
  :firstMessageInterruptionsEnabled,
  :firstMessageMode,
  :hooks,
  :id,
  :keypadInputPlan,
  :latestVersion,
  :maxDurationSeconds,
  :metadata,
  :model,
  :modelDeprecations,
  :modelOutputInMessagesEnabled,
  :monitorPlan,
  :name,
  :observabilityPlan,
  :orgId,
  :reason,
  :server,
  :serverMessages,
  :startSpeakingPlan,
  :status,
  :stopSpeakingPlan,
  :transcriber,
  :transportConfigurations,
  :updatedAt,
  :url,
  :valid,
  :voice,
  :voicemailDetection,
  :voicemailMessage,
  keyword_init: true
)

# Request payload for Assistant#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] analysisPlan
#   @return [Object, nil]
#
# @!attribute [rw] artifactPlan
#   @return [Object, nil]
#
# @!attribute [rw] backgroundSound
#   @return [Object, nil]
#
# @!attribute [rw] backgroundSpeechDenoisingPlan
#   @return [Object, nil]
#
# @!attribute [rw] clientMessages
#   @return [Array, nil]
#
# @!attribute [rw] compliancePlan
#   @return [Hash, nil]
#
# @!attribute [rw] contentType
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] credentialIds
#   @return [Array, nil]
#
# @!attribute [rw] credentials
#   @return [Array, nil]
#
# @!attribute [rw] endCallMessage
#   @return [String, nil]
#
# @!attribute [rw] endCallPhrases
#   @return [Array, nil]
#
# @!attribute [rw] firstMessage
#   @return [String, nil]
#
# @!attribute [rw] firstMessageInterruptionsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] firstMessageMode
#   @return [String, nil]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] keypadInputPlan
#   @return [Hash, nil]
#
# @!attribute [rw] latestVersion
#   @return [String, nil]
#
# @!attribute [rw] maxDurationSeconds
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] modelDeprecations
#   @return [Array, nil]
#
# @!attribute [rw] modelOutputInMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] monitorPlan
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] observabilityPlan
#   @return [Object, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] server
#   @return [Object, nil]
#
# @!attribute [rw] serverMessages
#   @return [Array, nil]
#
# @!attribute [rw] startSpeakingPlan
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Float, nil]
#
# @!attribute [rw] stopSpeakingPlan
#   @return [Object, nil]
#
# @!attribute [rw] transcriber
#   @return [Object, nil]
#
# @!attribute [rw] transportConfigurations
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
#
# @!attribute [rw] voice
#   @return [Object, nil]
#
# @!attribute [rw] voicemailDetection
#   @return [Object, nil]
#
# @!attribute [rw] voicemailMessage
#   @return [String, nil]
AssistantUpdateData = Struct.new(
  :id,
  :analysisPlan,
  :artifactPlan,
  :backgroundSound,
  :backgroundSpeechDenoisingPlan,
  :clientMessages,
  :compliancePlan,
  :contentType,
  :createdAt,
  :credentialIds,
  :credentials,
  :endCallMessage,
  :endCallPhrases,
  :firstMessage,
  :firstMessageInterruptionsEnabled,
  :firstMessageMode,
  :hooks,
  :keypadInputPlan,
  :latestVersion,
  :maxDurationSeconds,
  :metadata,
  :model,
  :modelDeprecations,
  :modelOutputInMessagesEnabled,
  :monitorPlan,
  :name,
  :observabilityPlan,
  :orgId,
  :reason,
  :server,
  :serverMessages,
  :startSpeakingPlan,
  :status,
  :stopSpeakingPlan,
  :transcriber,
  :transportConfigurations,
  :updatedAt,
  :url,
  :valid,
  :voice,
  :voicemailDetection,
  :voicemailMessage,
  keyword_init: true
)

# Request payload for Assistant#remove.
#
# @!attribute [rw] id
#   @return [String]
AssistantRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Board entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] layout
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] systemKey
#   @return [String, nil]
#
# @!attribute [rw] timeRangeOverride
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
Board = Struct.new(
  :createdAt,
  :id,
  :items,
  :layout,
  :name,
  :orgId,
  :systemKey,
  :timeRangeOverride,
  :updatedAt,
  keyword_init: true
)

# Request payload for Board#load.
#
# @!attribute [rw] id
#   @return [String]
BoardLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Board#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
BoardListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :limit,
  :page,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Board#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] layout
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] systemKey
#   @return [String, nil]
#
# @!attribute [rw] timeRangeOverride
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
BoardCreateData = Struct.new(
  :createdAt,
  :id,
  :items,
  :layout,
  :name,
  :orgId,
  :systemKey,
  :timeRangeOverride,
  :updatedAt,
  keyword_init: true
)

# Request payload for Board#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] layout
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] systemKey
#   @return [String, nil]
#
# @!attribute [rw] timeRangeOverride
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
BoardUpdateData = Struct.new(
  :id,
  :createdAt,
  :items,
  :layout,
  :name,
  :orgId,
  :systemKey,
  :timeRangeOverride,
  :updatedAt,
  keyword_init: true
)

# Request payload for Board#remove.
#
# @!attribute [rw] id
#   @return [String]
BoardRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Call entity data model.
#
# @!attribute [rw] analysis
#   @return [Object, nil]
#
# @!attribute [rw] artifact
#   @return [Object, nil]
#
# @!attribute [rw] artifactPlan
#   @return [Object, nil]
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] assistantVersion
#   @return [String, nil]
#
# @!attribute [rw] campaignId
#   @return [String, nil]
#
# @!attribute [rw] compliance
#   @return [Object, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costBreakdown
#   @return [Object, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customerId
#   @return [String, nil]
#
# @!attribute [rw] customers
#   @return [Array, nil]
#
# @!attribute [rw] destination
#   @return [Object, nil]
#
# @!attribute [rw] endedAt
#   @return [String, nil]
#
# @!attribute [rw] endedMessage
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] monitor
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] phoneCallProvider
#   @return [String, nil]
#
# @!attribute [rw] phoneCallProviderId
#   @return [String, nil]
#
# @!attribute [rw] phoneCallTransport
#   @return [String, nil]
#
# @!attribute [rw] phoneNumber
#   @return [Object, nil]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] schedulePlan
#   @return [Object, nil]
#
# @!attribute [rw] squad
#   @return [Object, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] squadOverrides
#   @return [Object, nil]
#
# @!attribute [rw] squadVersion
#   @return [String, nil]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] transport
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] workflow
#   @return [Object, nil]
#
# @!attribute [rw] workflowId
#   @return [String, nil]
#
# @!attribute [rw] workflowOverrides
#   @return [Object, nil]
Call = Struct.new(
  :analysis,
  :artifact,
  :artifactPlan,
  :assistant,
  :assistantId,
  :assistantOverrides,
  :assistantVersion,
  :campaignId,
  :compliance,
  :cost,
  :costBreakdown,
  :costs,
  :createdAt,
  :customer,
  :customerId,
  :customers,
  :destination,
  :endedAt,
  :endedMessage,
  :endedReason,
  :id,
  :messages,
  :monitor,
  :name,
  :orgId,
  :phoneCallProvider,
  :phoneCallProviderId,
  :phoneCallTransport,
  :phoneNumber,
  :phoneNumberId,
  :schedulePlan,
  :squad,
  :squadId,
  :squadOverrides,
  :squadVersion,
  :startedAt,
  :status,
  :transport,
  :type,
  :updatedAt,
  :workflow,
  :workflowId,
  :workflowOverrides,
  keyword_init: true
)

# Request payload for Call#load.
#
# @!attribute [rw] id
#   @return [String]
CallLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Call#list.
#
# @!attribute [rw] assistant_id
#   @return [String, nil]
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] phone_number_id
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
CallListMatch = Struct.new(
  :assistant_id,
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id,
  :limit,
  :phone_number_id,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Call#create.
#
# @!attribute [rw] analysis
#   @return [Object, nil]
#
# @!attribute [rw] artifact
#   @return [Object, nil]
#
# @!attribute [rw] artifactPlan
#   @return [Object, nil]
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] assistantVersion
#   @return [String, nil]
#
# @!attribute [rw] campaignId
#   @return [String, nil]
#
# @!attribute [rw] compliance
#   @return [Object, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costBreakdown
#   @return [Object, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customerId
#   @return [String, nil]
#
# @!attribute [rw] customers
#   @return [Array, nil]
#
# @!attribute [rw] destination
#   @return [Object, nil]
#
# @!attribute [rw] endedAt
#   @return [String, nil]
#
# @!attribute [rw] endedMessage
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] monitor
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] phoneCallProvider
#   @return [String, nil]
#
# @!attribute [rw] phoneCallProviderId
#   @return [String, nil]
#
# @!attribute [rw] phoneCallTransport
#   @return [String, nil]
#
# @!attribute [rw] phoneNumber
#   @return [Object, nil]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] schedulePlan
#   @return [Object, nil]
#
# @!attribute [rw] squad
#   @return [Object, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] squadOverrides
#   @return [Object, nil]
#
# @!attribute [rw] squadVersion
#   @return [String, nil]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] transport
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] workflow
#   @return [Object, nil]
#
# @!attribute [rw] workflowId
#   @return [String, nil]
#
# @!attribute [rw] workflowOverrides
#   @return [Object, nil]
CallCreateData = Struct.new(
  :analysis,
  :artifact,
  :artifactPlan,
  :assistant,
  :assistantId,
  :assistantOverrides,
  :assistantVersion,
  :campaignId,
  :compliance,
  :cost,
  :costBreakdown,
  :costs,
  :createdAt,
  :customer,
  :customerId,
  :customers,
  :destination,
  :endedAt,
  :endedMessage,
  :endedReason,
  :id,
  :messages,
  :monitor,
  :name,
  :orgId,
  :phoneCallProvider,
  :phoneCallProviderId,
  :phoneCallTransport,
  :phoneNumber,
  :phoneNumberId,
  :schedulePlan,
  :squad,
  :squadId,
  :squadOverrides,
  :squadVersion,
  :startedAt,
  :status,
  :transport,
  :type,
  :updatedAt,
  :workflow,
  :workflowId,
  :workflowOverrides,
  keyword_init: true
)

# Request payload for Call#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] analysis
#   @return [Object, nil]
#
# @!attribute [rw] artifact
#   @return [Object, nil]
#
# @!attribute [rw] artifactPlan
#   @return [Object, nil]
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] assistantVersion
#   @return [String, nil]
#
# @!attribute [rw] campaignId
#   @return [String, nil]
#
# @!attribute [rw] compliance
#   @return [Object, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costBreakdown
#   @return [Object, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customerId
#   @return [String, nil]
#
# @!attribute [rw] customers
#   @return [Array, nil]
#
# @!attribute [rw] destination
#   @return [Object, nil]
#
# @!attribute [rw] endedAt
#   @return [String, nil]
#
# @!attribute [rw] endedMessage
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] monitor
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] phoneCallProvider
#   @return [String, nil]
#
# @!attribute [rw] phoneCallProviderId
#   @return [String, nil]
#
# @!attribute [rw] phoneCallTransport
#   @return [String, nil]
#
# @!attribute [rw] phoneNumber
#   @return [Object, nil]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] schedulePlan
#   @return [Object, nil]
#
# @!attribute [rw] squad
#   @return [Object, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] squadOverrides
#   @return [Object, nil]
#
# @!attribute [rw] squadVersion
#   @return [String, nil]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] transport
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] workflow
#   @return [Object, nil]
#
# @!attribute [rw] workflowId
#   @return [String, nil]
#
# @!attribute [rw] workflowOverrides
#   @return [Object, nil]
CallUpdateData = Struct.new(
  :id,
  :analysis,
  :artifact,
  :artifactPlan,
  :assistant,
  :assistantId,
  :assistantOverrides,
  :assistantVersion,
  :campaignId,
  :compliance,
  :cost,
  :costBreakdown,
  :costs,
  :createdAt,
  :customer,
  :customerId,
  :customers,
  :destination,
  :endedAt,
  :endedMessage,
  :endedReason,
  :messages,
  :monitor,
  :name,
  :orgId,
  :phoneCallProvider,
  :phoneCallProviderId,
  :phoneCallTransport,
  :phoneNumber,
  :phoneNumberId,
  :schedulePlan,
  :squad,
  :squadId,
  :squadOverrides,
  :squadVersion,
  :startedAt,
  :status,
  :transport,
  :type,
  :updatedAt,
  :workflow,
  :workflowId,
  :workflowOverrides,
  keyword_init: true
)

# Request payload for Call#remove.
#
# @!attribute [rw] id
#   @return [String]
CallRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Campaign entity data model.
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] callMetrics
#   @return [Object, nil]
#
# @!attribute [rw] calls
#   @return [Hash]
#
# @!attribute [rw] callsCounterEnded
#   @return [Float]
#
# @!attribute [rw] callsCounterEndedVoicemail
#   @return [Float]
#
# @!attribute [rw] callsCounterInProgress
#   @return [Float]
#
# @!attribute [rw] callsCounterQueued
#   @return [Float]
#
# @!attribute [rw] callsCounterScheduled
#   @return [Float]
#
# @!attribute [rw] contactCounters
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] customers
#   @return [Array, nil]
#
# @!attribute [rw] dialPlan
#   @return [Array, nil]
#
# @!attribute [rw] duplicateFromCampaignId
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] maxConcurrency
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] predialPlan
#   @return [Object, nil]
#
# @!attribute [rw] schedulePlan
#   @return [Object, nil]
#
# @!attribute [rw] server
#   @return [Object, nil]
#
# @!attribute [rw] serverMessages
#   @return [Array, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] squadOverrides
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] workflowId
#   @return [String, nil]
Campaign = Struct.new(
  :assistantId,
  :assistantOverrides,
  :callMetrics,
  :calls,
  :callsCounterEnded,
  :callsCounterEndedVoicemail,
  :callsCounterInProgress,
  :callsCounterQueued,
  :callsCounterScheduled,
  :contactCounters,
  :createdAt,
  :customers,
  :dialPlan,
  :duplicateFromCampaignId,
  :endedReason,
  :id,
  :maxConcurrency,
  :name,
  :orgId,
  :phoneNumberId,
  :predialPlan,
  :schedulePlan,
  :server,
  :serverMessages,
  :squadId,
  :squadOverrides,
  :status,
  :updatedAt,
  :workflowId,
  keyword_init: true
)

# Request payload for Campaign#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] include_counter
#   @return [Boolean, nil]
CampaignLoadMatch = Struct.new(
  :id,
  :include_counter,
  keyword_init: true
)

# Request payload for Campaign#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
CampaignListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id,
  :limit,
  :page,
  :sort_by,
  :sort_order,
  :status,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Campaign#create.
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] callMetrics
#   @return [Object, nil]
#
# @!attribute [rw] calls
#   @return [Hash]
#
# @!attribute [rw] callsCounterEnded
#   @return [Float]
#
# @!attribute [rw] callsCounterEndedVoicemail
#   @return [Float]
#
# @!attribute [rw] callsCounterInProgress
#   @return [Float]
#
# @!attribute [rw] callsCounterQueued
#   @return [Float]
#
# @!attribute [rw] callsCounterScheduled
#   @return [Float]
#
# @!attribute [rw] contactCounters
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] customers
#   @return [Array, nil]
#
# @!attribute [rw] dialPlan
#   @return [Array, nil]
#
# @!attribute [rw] duplicateFromCampaignId
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] maxConcurrency
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] predialPlan
#   @return [Object, nil]
#
# @!attribute [rw] schedulePlan
#   @return [Object, nil]
#
# @!attribute [rw] server
#   @return [Object, nil]
#
# @!attribute [rw] serverMessages
#   @return [Array, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] squadOverrides
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] workflowId
#   @return [String, nil]
CampaignCreateData = Struct.new(
  :assistantId,
  :assistantOverrides,
  :callMetrics,
  :calls,
  :callsCounterEnded,
  :callsCounterEndedVoicemail,
  :callsCounterInProgress,
  :callsCounterQueued,
  :callsCounterScheduled,
  :contactCounters,
  :createdAt,
  :customers,
  :dialPlan,
  :duplicateFromCampaignId,
  :endedReason,
  :id,
  :maxConcurrency,
  :name,
  :orgId,
  :phoneNumberId,
  :predialPlan,
  :schedulePlan,
  :server,
  :serverMessages,
  :squadId,
  :squadOverrides,
  :status,
  :updatedAt,
  :workflowId,
  keyword_init: true
)

# Request payload for Campaign#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] callMetrics
#   @return [Object, nil]
#
# @!attribute [rw] calls
#   @return [Hash, nil]
#
# @!attribute [rw] callsCounterEnded
#   @return [Float, nil]
#
# @!attribute [rw] callsCounterEndedVoicemail
#   @return [Float, nil]
#
# @!attribute [rw] callsCounterInProgress
#   @return [Float, nil]
#
# @!attribute [rw] callsCounterQueued
#   @return [Float, nil]
#
# @!attribute [rw] callsCounterScheduled
#   @return [Float, nil]
#
# @!attribute [rw] contactCounters
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] customers
#   @return [Array, nil]
#
# @!attribute [rw] dialPlan
#   @return [Array, nil]
#
# @!attribute [rw] duplicateFromCampaignId
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] maxConcurrency
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] predialPlan
#   @return [Object, nil]
#
# @!attribute [rw] schedulePlan
#   @return [Object, nil]
#
# @!attribute [rw] server
#   @return [Object, nil]
#
# @!attribute [rw] serverMessages
#   @return [Array, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] squadOverrides
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] workflowId
#   @return [String, nil]
CampaignUpdateData = Struct.new(
  :id,
  :assistantId,
  :assistantOverrides,
  :callMetrics,
  :calls,
  :callsCounterEnded,
  :callsCounterEndedVoicemail,
  :callsCounterInProgress,
  :callsCounterQueued,
  :callsCounterScheduled,
  :contactCounters,
  :createdAt,
  :customers,
  :dialPlan,
  :duplicateFromCampaignId,
  :endedReason,
  :maxConcurrency,
  :name,
  :orgId,
  :phoneNumberId,
  :predialPlan,
  :schedulePlan,
  :server,
  :serverMessages,
  :squadId,
  :squadOverrides,
  :status,
  :updatedAt,
  :workflowId,
  keyword_init: true
)

# Request payload for Campaign#remove.
#
# @!attribute [rw] id
#   @return [String]
CampaignRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Chat entity data model.
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] input
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] output
#   @return [Array, nil]
#
# @!attribute [rw] previousChatId
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String, nil]
#
# @!attribute [rw] squad
#   @return [Object, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] transport
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
Chat = Struct.new(
  :assistant,
  :assistantId,
  :assistantOverrides,
  :cost,
  :costs,
  :createdAt,
  :id,
  :input,
  :messages,
  :name,
  :orgId,
  :output,
  :previousChatId,
  :sessionId,
  :squad,
  :squadId,
  :stream,
  :transport,
  :updatedAt,
  keyword_init: true
)

# Request payload for Chat#load.
#
# @!attribute [rw] id
#   @return [String]
ChatLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Chat#list.
#
# @!attribute [rw] assistant_id
#   @return [String, nil]
#
# @!attribute [rw] assistant_id_any
#   @return [String, nil]
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] id_any
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] previous_chat_id
#   @return [String, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] squad_id
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
ChatListMatch = Struct.new(
  :assistant_id,
  :assistant_id_any,
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id,
  :id_any,
  :limit,
  :page,
  :previous_chat_id,
  :session_id,
  :sort_by,
  :sort_order,
  :squad_id,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Chat#create.
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] input
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] output
#   @return [Array, nil]
#
# @!attribute [rw] previousChatId
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String, nil]
#
# @!attribute [rw] squad
#   @return [Object, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] transport
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
ChatCreateData = Struct.new(
  :assistant,
  :assistantId,
  :assistantOverrides,
  :cost,
  :costs,
  :createdAt,
  :id,
  :input,
  :messages,
  :name,
  :orgId,
  :output,
  :previousChatId,
  :sessionId,
  :squad,
  :squadId,
  :stream,
  :transport,
  :updatedAt,
  keyword_init: true
)

# Request payload for Chat#remove.
#
# @!attribute [rw] id
#   @return [String]
ChatRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Eval entity data model.
#
# @!attribute [rw] cost
#   @return [Float]
#
# @!attribute [rw] costs
#   @return [Array]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] endedAt
#   @return [String]
#
# @!attribute [rw] endedMessage
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String]
#
# @!attribute [rw] eval
#   @return [Object, nil]
#
# @!attribute [rw] evalId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] startedAt
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target
#   @return [Object]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
Eval = Struct.new(
  :cost,
  :costs,
  :createdAt,
  :description,
  :endedAt,
  :endedMessage,
  :endedReason,
  :eval,
  :evalId,
  :id,
  :messages,
  :name,
  :orgId,
  :results,
  :startedAt,
  :status,
  :target,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Eval#load.
#
# @!attribute [rw] id
#   @return [String]
EvalLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Eval#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
EvalListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id,
  :limit,
  :page,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Eval#create.
#
# @!attribute [rw] cost
#   @return [Float]
#
# @!attribute [rw] costs
#   @return [Array]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] endedAt
#   @return [String]
#
# @!attribute [rw] endedMessage
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String]
#
# @!attribute [rw] eval
#   @return [Object, nil]
#
# @!attribute [rw] evalId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] startedAt
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target
#   @return [Object]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
EvalCreateData = Struct.new(
  :cost,
  :costs,
  :createdAt,
  :description,
  :endedAt,
  :endedMessage,
  :endedReason,
  :eval,
  :evalId,
  :id,
  :messages,
  :name,
  :orgId,
  :results,
  :startedAt,
  :status,
  :target,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Eval#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] endedAt
#   @return [String, nil]
#
# @!attribute [rw] endedMessage
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] eval
#   @return [Object, nil]
#
# @!attribute [rw] evalId
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] target
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
EvalUpdateData = Struct.new(
  :id,
  :cost,
  :costs,
  :createdAt,
  :description,
  :endedAt,
  :endedMessage,
  :endedReason,
  :eval,
  :evalId,
  :messages,
  :name,
  :orgId,
  :results,
  :startedAt,
  :status,
  :target,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Eval#remove.
#
# @!attribute [rw] id
#   @return [String]
EvalRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# File entity data model.
#
# @!attribute [rw] bucket
#   @return [String, nil]
#
# @!attribute [rw] bytes
#   @return [Float, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] mimetype
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] originalName
#   @return [String, nil]
#
# @!attribute [rw] parsedTextBytes
#   @return [Float, nil]
#
# @!attribute [rw] parsedTextUrl
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] purpose
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] url
#   @return [String, nil]
FileType = Struct.new(
  :bucket,
  :bytes,
  :createdAt,
  :id,
  :key,
  :metadata,
  :mimetype,
  :name,
  :object,
  :orgId,
  :originalName,
  :parsedTextBytes,
  :parsedTextUrl,
  :path,
  :purpose,
  :status,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for File#load.
#
# @!attribute [rw] id
#   @return [String]
FileLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for File#list.
#
# @!attribute [rw] purpose
#   @return [String, nil]
FileListMatch = Struct.new(
  :purpose,
  keyword_init: true
)

# Request payload for File#create.
#
# @!attribute [rw] bucket
#   @return [String, nil]
#
# @!attribute [rw] bytes
#   @return [Float, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] mimetype
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] originalName
#   @return [String, nil]
#
# @!attribute [rw] parsedTextBytes
#   @return [Float, nil]
#
# @!attribute [rw] parsedTextUrl
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] purpose
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] url
#   @return [String, nil]
FileCreateData = Struct.new(
  :bucket,
  :bytes,
  :createdAt,
  :id,
  :key,
  :metadata,
  :mimetype,
  :name,
  :object,
  :orgId,
  :originalName,
  :parsedTextBytes,
  :parsedTextUrl,
  :path,
  :purpose,
  :status,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for File#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] bucket
#   @return [String, nil]
#
# @!attribute [rw] bytes
#   @return [Float, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] mimetype
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] originalName
#   @return [String, nil]
#
# @!attribute [rw] parsedTextBytes
#   @return [Float, nil]
#
# @!attribute [rw] parsedTextUrl
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] purpose
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
FileUpdateData = Struct.new(
  :id,
  :bucket,
  :bytes,
  :createdAt,
  :key,
  :metadata,
  :mimetype,
  :name,
  :object,
  :orgId,
  :originalName,
  :parsedTextBytes,
  :parsedTextUrl,
  :path,
  :purpose,
  :status,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for File#remove.
#
# @!attribute [rw] id
#   @return [String]
FileRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Insight entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] systemKey
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
Insight = Struct.new(
  :createdAt,
  :id,
  :name,
  :orgId,
  :systemKey,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Insight#load.
#
# @!attribute [rw] id
#   @return [String]
InsightLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Insight#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
InsightListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id,
  :limit,
  :page,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Insight#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] systemKey
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
InsightCreateData = Struct.new(
  :createdAt,
  :id,
  :name,
  :orgId,
  :systemKey,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Insight#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] systemKey
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
InsightUpdateData = Struct.new(
  :id,
  :createdAt,
  :name,
  :orgId,
  :systemKey,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Insight#remove.
#
# @!attribute [rw] id
#   @return [String]
InsightRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# KnowledgeBase entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] files
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] toolId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
KnowledgeBase = Struct.new(
  :createdAt,
  :description,
  :files,
  :id,
  :name,
  :orgId,
  :toolId,
  :updatedAt,
  keyword_init: true
)

# Request payload for KnowledgeBase#load.
#
# @!attribute [rw] id
#   @return [String]
KnowledgeBaseLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for KnowledgeBase#list.
#
# @!attribute [rw] limit
#   @return [Float, nil]
KnowledgeBaseListMatch = Struct.new(
  :limit,
  keyword_init: true
)

# Request payload for KnowledgeBase#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] files
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] toolId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
KnowledgeBaseCreateData = Struct.new(
  :createdAt,
  :description,
  :files,
  :id,
  :name,
  :orgId,
  :toolId,
  :updatedAt,
  keyword_init: true
)

# Request payload for KnowledgeBase#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] toolId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
KnowledgeBaseUpdateData = Struct.new(
  :id,
  :createdAt,
  :description,
  :files,
  :name,
  :orgId,
  :toolId,
  :updatedAt,
  keyword_init: true
)

# Request payload for KnowledgeBase#remove.
#
# @!attribute [rw] id
#   @return [String]
KnowledgeBaseRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# KnowledgeBaseV2File entity data model.
#
# @!attribute [rw] bytes
#   @return [Float, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] fileId
#   @return [String]
#
# @!attribute [rw] fileName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] knowledgeBaseV2Id
#   @return [String]
#
# @!attribute [rw] mimetype
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
KnowledgeBaseV2File = Struct.new(
  :bytes,
  :createdAt,
  :fileId,
  :fileName,
  :id,
  :knowledgeBaseV2Id,
  :mimetype,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for KnowledgeBaseV2File#list.
#
# @!attribute [rw] id
#   @return [String]
KnowledgeBaseV2FileListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for KnowledgeBaseV2File#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] bytes
#   @return [Float, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] fileId
#   @return [String]
#
# @!attribute [rw] fileName
#   @return [String, nil]
#
# @!attribute [rw] knowledgeBaseV2Id
#   @return [String]
#
# @!attribute [rw] mimetype
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
KnowledgeBaseV2FileCreateData = Struct.new(
  :id,
  :bytes,
  :createdAt,
  :fileId,
  :fileName,
  :knowledgeBaseV2Id,
  :mimetype,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for KnowledgeBaseV2File#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] knowledge_base_id
#   @return [String]
KnowledgeBaseV2FileRemoveMatch = Struct.new(
  :id,
  :knowledge_base_id,
  keyword_init: true
)

# Personality entity data model.
#
# @!attribute [rw] assistant
#   @return [Object]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
Personality = Struct.new(
  :assistant,
  :createdAt,
  :id,
  :name,
  :orgId,
  :path,
  :updatedAt,
  keyword_init: true
)

# Request payload for Personality#load.
#
# @!attribute [rw] id
#   @return [String]
PersonalityLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Personality#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
PersonalityListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :limit,
  :page,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Personality#create.
#
# @!attribute [rw] assistant
#   @return [Object]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
PersonalityCreateData = Struct.new(
  :assistant,
  :createdAt,
  :id,
  :name,
  :orgId,
  :path,
  :updatedAt,
  keyword_init: true
)

# Request payload for Personality#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
PersonalityUpdateData = Struct.new(
  :id,
  :assistant,
  :createdAt,
  :name,
  :orgId,
  :path,
  :updatedAt,
  keyword_init: true
)

# Request payload for Personality#remove.
#
# @!attribute [rw] id
#   @return [String]
PersonalityRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# PhoneNumber entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Object]
#
# @!attribute [rw] results
#   @return [Array]
PhoneNumber = Struct.new(
  :id,
  :metadata,
  :results,
  keyword_init: true
)

# Request payload for PhoneNumber#load.
#
# @!attribute [rw] id
#   @return [String]
PhoneNumberLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PhoneNumber#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
PhoneNumberListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :limit,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for PhoneNumber#create.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Object]
#
# @!attribute [rw] results
#   @return [Array]
PhoneNumberCreateData = Struct.new(
  :id,
  :metadata,
  :results,
  keyword_init: true
)

# Request payload for PhoneNumber#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
PhoneNumberUpdateData = Struct.new(
  :id,
  :metadata,
  :results,
  keyword_init: true
)

# Request payload for PhoneNumber#remove.
#
# @!attribute [rw] id
#   @return [String]
PhoneNumberRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Provider entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] resource
#   @return [Hash]
#
# @!attribute [rw] resourceId
#   @return [String]
#
# @!attribute [rw] resourceName
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] updatedAt
#   @return [String]
Provider = Struct.new(
  :createdAt,
  :id,
  :metadata,
  :orgId,
  :provider,
  :resource,
  :resourceId,
  :resourceName,
  :results,
  :updatedAt,
  keyword_init: true
)

# Request payload for Provider#load.
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] resource_name
#   @return [String]
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] resource_id
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
ProviderLoadMatch = Struct.new(
  :provider,
  :resource_name,
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id,
  :limit,
  :page,
  :resource_id,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Provider#create.
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] resource_name
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Hash]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] resource
#   @return [Hash]
#
# @!attribute [rw] resourceId
#   @return [String]
#
# @!attribute [rw] resourceName
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] updatedAt
#   @return [String]
ProviderCreateData = Struct.new(
  :provider,
  :resource_name,
  :createdAt,
  :id,
  :metadata,
  :orgId,
  :resource,
  :resourceId,
  :resourceName,
  :results,
  :updatedAt,
  keyword_init: true
)

# Request payload for Provider#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] resource_name
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] resource
#   @return [Hash, nil]
#
# @!attribute [rw] resourceId
#   @return [String, nil]
#
# @!attribute [rw] resourceName
#   @return [String, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
ProviderUpdateData = Struct.new(
  :id,
  :provider,
  :resource_name,
  :createdAt,
  :metadata,
  :orgId,
  :resource,
  :resourceId,
  :resourceName,
  :results,
  :updatedAt,
  keyword_init: true
)

# Request payload for Provider#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] resource_name
#   @return [String]
ProviderRemoveMatch = Struct.new(
  :id,
  :provider,
  :resource_name,
  keyword_init: true
)

# Scenario entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] evaluations
#   @return [Array]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instructions
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] targetOverrides
#   @return [Object, nil]
#
# @!attribute [rw] toolMocks
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
Scenario = Struct.new(
  :createdAt,
  :evaluations,
  :hooks,
  :id,
  :instructions,
  :name,
  :orgId,
  :path,
  :targetOverrides,
  :toolMocks,
  :updatedAt,
  keyword_init: true
)

# Request payload for Scenario#load.
#
# @!attribute [rw] id
#   @return [String]
ScenarioLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Scenario#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id_any
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
ScenarioListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id_any,
  :limit,
  :name,
  :page,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Scenario#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] evaluations
#   @return [Array]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instructions
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] targetOverrides
#   @return [Object, nil]
#
# @!attribute [rw] toolMocks
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
ScenarioCreateData = Struct.new(
  :createdAt,
  :evaluations,
  :hooks,
  :id,
  :instructions,
  :name,
  :orgId,
  :path,
  :targetOverrides,
  :toolMocks,
  :updatedAt,
  keyword_init: true
)

# Request payload for Scenario#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] evaluations
#   @return [Array, nil]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] instructions
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] targetOverrides
#   @return [Object, nil]
#
# @!attribute [rw] toolMocks
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
ScenarioUpdateData = Struct.new(
  :id,
  :createdAt,
  :evaluations,
  :hooks,
  :instructions,
  :name,
  :orgId,
  :path,
  :targetOverrides,
  :toolMocks,
  :updatedAt,
  keyword_init: true
)

# Request payload for Scenario#remove.
#
# @!attribute [rw] id
#   @return [String]
ScenarioRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Scorecard entity data model.
#
# @!attribute [rw] assistantIds
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] metrics
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
Scorecard = Struct.new(
  :assistantIds,
  :createdAt,
  :description,
  :id,
  :metrics,
  :name,
  :orgId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Scorecard#load.
#
# @!attribute [rw] id
#   @return [String]
ScorecardLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Scorecard#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
ScorecardListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id,
  :limit,
  :page,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Scorecard#create.
#
# @!attribute [rw] assistantIds
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] metrics
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
ScorecardCreateData = Struct.new(
  :assistantIds,
  :createdAt,
  :description,
  :id,
  :metrics,
  :name,
  :orgId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Scorecard#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] assistantIds
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] metrics
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
ScorecardUpdateData = Struct.new(
  :id,
  :assistantIds,
  :createdAt,
  :description,
  :metrics,
  :name,
  :orgId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Scorecard#remove.
#
# @!attribute [rw] id
#   @return [String]
ScorecardRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Session entity data model.
#
# @!attribute [rw] artifact
#   @return [Object, nil]
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customerId
#   @return [String, nil]
#
# @!attribute [rw] expirationSeconds
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] phoneNumber
#   @return [Object, nil]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] squad
#   @return [Object, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
Session = Struct.new(
  :artifact,
  :assistant,
  :assistantId,
  :assistantOverrides,
  :cost,
  :costs,
  :createdAt,
  :customer,
  :customerId,
  :expirationSeconds,
  :id,
  :messages,
  :name,
  :orgId,
  :phoneNumber,
  :phoneNumberId,
  :squad,
  :squadId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for Session#load.
#
# @!attribute [rw] id
#   @return [String]
SessionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Session#list.
#
# @!attribute [rw] assistant_id
#   @return [String, nil]
#
# @!attribute [rw] assistant_id_any
#   @return [String, nil]
#
# @!attribute [rw] assistant_override
#   @return [Object, nil]
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] customer_number_any
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] extension
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] id_any
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] number_e164_check_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] phone_number_id
#   @return [String, nil]
#
# @!attribute [rw] phone_number_id_any
#   @return [Array, nil]
#
# @!attribute [rw] sip_uri
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] squad_id
#   @return [String, nil]
#
# @!attribute [rw] squad_override
#   @return [Object, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
#
# @!attribute [rw] workflow_id
#   @return [String, nil]
SessionListMatch = Struct.new(
  :assistant_id,
  :assistant_id_any,
  :assistant_override,
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :customer_number_any,
  :email,
  :extension,
  :external_id,
  :id,
  :id_any,
  :limit,
  :name,
  :number,
  :number_e164_check_enabled,
  :page,
  :phone_number_id,
  :phone_number_id_any,
  :sip_uri,
  :sort_by,
  :sort_order,
  :squad_id,
  :squad_override,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  :workflow_id,
  keyword_init: true
)

# Request payload for Session#create.
#
# @!attribute [rw] artifact
#   @return [Object, nil]
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customerId
#   @return [String, nil]
#
# @!attribute [rw] expirationSeconds
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] phoneNumber
#   @return [Object, nil]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] squad
#   @return [Object, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
SessionCreateData = Struct.new(
  :artifact,
  :assistant,
  :assistantId,
  :assistantOverrides,
  :cost,
  :costs,
  :createdAt,
  :customer,
  :customerId,
  :expirationSeconds,
  :id,
  :messages,
  :name,
  :orgId,
  :phoneNumber,
  :phoneNumberId,
  :squad,
  :squadId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for Session#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] artifact
#   @return [Object, nil]
#
# @!attribute [rw] assistant
#   @return [Object, nil]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] assistantOverrides
#   @return [Object, nil]
#
# @!attribute [rw] cost
#   @return [Float, nil]
#
# @!attribute [rw] costs
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customerId
#   @return [String, nil]
#
# @!attribute [rw] expirationSeconds
#   @return [Float, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] phoneNumber
#   @return [Object, nil]
#
# @!attribute [rw] phoneNumberId
#   @return [String, nil]
#
# @!attribute [rw] squad
#   @return [Object, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SessionUpdateData = Struct.new(
  :id,
  :artifact,
  :assistant,
  :assistantId,
  :assistantOverrides,
  :cost,
  :costs,
  :createdAt,
  :customer,
  :customerId,
  :expirationSeconds,
  :messages,
  :name,
  :orgId,
  :phoneNumber,
  :phoneNumberId,
  :squad,
  :squadId,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for Session#remove.
#
# @!attribute [rw] id
#   @return [String]
SessionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Simulation entity data model.
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] personalityId
#   @return [String]
#
# @!attribute [rw] scenarioId
#   @return [String]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
Simulation = Struct.new(
  :assistantId,
  :createdAt,
  :id,
  :name,
  :orgId,
  :path,
  :personalityId,
  :scenarioId,
  :squadId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Simulation#load.
#
# @!attribute [rw] id
#   @return [String]
SimulationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Simulation#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id_any
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] standalone_only
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
SimulationListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id_any,
  :limit,
  :page,
  :sort_by,
  :sort_order,
  :standalone_only,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Simulation#create.
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] personalityId
#   @return [String]
#
# @!attribute [rw] scenarioId
#   @return [String]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
SimulationCreateData = Struct.new(
  :assistantId,
  :createdAt,
  :id,
  :name,
  :orgId,
  :path,
  :personalityId,
  :scenarioId,
  :squadId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Simulation#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] assistantId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] personalityId
#   @return [String, nil]
#
# @!attribute [rw] scenarioId
#   @return [String, nil]
#
# @!attribute [rw] squadId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SimulationUpdateData = Struct.new(
  :id,
  :assistantId,
  :createdAt,
  :name,
  :orgId,
  :path,
  :personalityId,
  :scenarioId,
  :squadId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Simulation#remove.
#
# @!attribute [rw] id
#   @return [String]
SimulationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# SimulationRun entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] endedAt
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] itemCounts
#   @return [Object, nil]
#
# @!attribute [rw] iterations
#   @return [Float, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] queuedAt
#   @return [String]
#
# @!attribute [rw] simulations
#   @return [Array]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target
#   @return [Object]
#
# @!attribute [rw] transport
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
SimulationRun = Struct.new(
  :createdAt,
  :endedAt,
  :endedReason,
  :id,
  :itemCounts,
  :iterations,
  :orgId,
  :queuedAt,
  :simulations,
  :startedAt,
  :status,
  :target,
  :transport,
  :updatedAt,
  keyword_init: true
)

# Request payload for SimulationRun#load.
#
# @!attribute [rw] id
#   @return [String]
SimulationRunLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SimulationRun#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] endedAt
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] itemCounts
#   @return [Object, nil]
#
# @!attribute [rw] iterations
#   @return [Float, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] queuedAt
#   @return [String]
#
# @!attribute [rw] simulations
#   @return [Array]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] target
#   @return [Object]
#
# @!attribute [rw] transport
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
SimulationRunCreateData = Struct.new(
  :createdAt,
  :endedAt,
  :endedReason,
  :id,
  :itemCounts,
  :iterations,
  :orgId,
  :queuedAt,
  :simulations,
  :startedAt,
  :status,
  :target,
  :transport,
  :updatedAt,
  keyword_init: true
)

# Request payload for SimulationRun#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] endedAt
#   @return [String, nil]
#
# @!attribute [rw] endedReason
#   @return [String, nil]
#
# @!attribute [rw] itemCounts
#   @return [Object, nil]
#
# @!attribute [rw] iterations
#   @return [Float, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] queuedAt
#   @return [String, nil]
#
# @!attribute [rw] simulations
#   @return [Array, nil]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] target
#   @return [Object, nil]
#
# @!attribute [rw] transport
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SimulationRunUpdateData = Struct.new(
  :id,
  :createdAt,
  :endedAt,
  :endedReason,
  :itemCounts,
  :iterations,
  :orgId,
  :queuedAt,
  :simulations,
  :startedAt,
  :status,
  :target,
  :transport,
  :updatedAt,
  keyword_init: true
)

# SimulationRunItem entity data model.
#
# @!attribute [rw] callId
#   @return [String, nil]
#
# @!attribute [rw] canceledAt
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [String, nil]
#
# @!attribute [rw] configurations
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] failedAt
#   @return [String, nil]
#
# @!attribute [rw] failureReason
#   @return [String, nil]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] improvementSuggestions
#   @return [Object, nil]
#
# @!attribute [rw] iterationNumber
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] personalityId
#   @return [String, nil]
#
# @!attribute [rw] queuedAt
#   @return [String]
#
# @!attribute [rw] results
#   @return [Object, nil]
#
# @!attribute [rw] runId
#   @return [String, nil]
#
# @!attribute [rw] scenarioId
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String, nil]
#
# @!attribute [rw] simulationId
#   @return [String]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
SimulationRunItem = Struct.new(
  :callId,
  :canceledAt,
  :completedAt,
  :configurations,
  :createdAt,
  :failedAt,
  :failureReason,
  :hooks,
  :id,
  :improvementSuggestions,
  :iterationNumber,
  :metadata,
  :orgId,
  :personalityId,
  :queuedAt,
  :results,
  :runId,
  :scenarioId,
  :sessionId,
  :simulationId,
  :startedAt,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for SimulationRunItem#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] run_id
#   @return [String]
SimulationRunItemLoadMatch = Struct.new(
  :id,
  :run_id,
  keyword_init: true
)

# Request payload for SimulationRunItem#list.
#
# @!attribute [rw] run_id
#   @return [String, nil]
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] simulation_id
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
SimulationRunItemListMatch = Struct.new(
  :run_id,
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :limit,
  :page,
  :simulation_id,
  :sort_by,
  :sort_order,
  :status,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for SimulationRunItem#create.
#
# @!attribute [rw] item_id
#   @return [String]
#
# @!attribute [rw] run_id
#   @return [String]
#
# @!attribute [rw] force
#   @return [String]
#
# @!attribute [rw] persist
#   @return [String, nil]
#
# @!attribute [rw] callId
#   @return [String, nil]
#
# @!attribute [rw] canceledAt
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [String, nil]
#
# @!attribute [rw] configurations
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] failedAt
#   @return [String, nil]
#
# @!attribute [rw] failureReason
#   @return [String, nil]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] improvementSuggestions
#   @return [Object, nil]
#
# @!attribute [rw] iterationNumber
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] personalityId
#   @return [String, nil]
#
# @!attribute [rw] queuedAt
#   @return [String]
#
# @!attribute [rw] results
#   @return [Object, nil]
#
# @!attribute [rw] runId
#   @return [String, nil]
#
# @!attribute [rw] scenarioId
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String, nil]
#
# @!attribute [rw] simulationId
#   @return [String]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
SimulationRunItemCreateData = Struct.new(
  :item_id,
  :run_id,
  :force,
  :persist,
  :callId,
  :canceledAt,
  :completedAt,
  :configurations,
  :createdAt,
  :failedAt,
  :failureReason,
  :hooks,
  :id,
  :improvementSuggestions,
  :iterationNumber,
  :metadata,
  :orgId,
  :personalityId,
  :queuedAt,
  :results,
  :runId,
  :scenarioId,
  :sessionId,
  :simulationId,
  :startedAt,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for SimulationRunItem#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] run_id
#   @return [String]
#
# @!attribute [rw] callId
#   @return [String, nil]
#
# @!attribute [rw] canceledAt
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [String, nil]
#
# @!attribute [rw] configurations
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] failedAt
#   @return [String, nil]
#
# @!attribute [rw] failureReason
#   @return [String, nil]
#
# @!attribute [rw] hooks
#   @return [Array, nil]
#
# @!attribute [rw] improvementSuggestions
#   @return [Object, nil]
#
# @!attribute [rw] iterationNumber
#   @return [Float, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] personalityId
#   @return [String, nil]
#
# @!attribute [rw] queuedAt
#   @return [String, nil]
#
# @!attribute [rw] results
#   @return [Object, nil]
#
# @!attribute [rw] runId
#   @return [String, nil]
#
# @!attribute [rw] scenarioId
#   @return [String, nil]
#
# @!attribute [rw] sessionId
#   @return [String, nil]
#
# @!attribute [rw] simulationId
#   @return [String, nil]
#
# @!attribute [rw] startedAt
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SimulationRunItemUpdateData = Struct.new(
  :id,
  :run_id,
  :callId,
  :canceledAt,
  :completedAt,
  :configurations,
  :createdAt,
  :failedAt,
  :failureReason,
  :hooks,
  :improvementSuggestions,
  :iterationNumber,
  :metadata,
  :orgId,
  :personalityId,
  :queuedAt,
  :results,
  :runId,
  :scenarioId,
  :sessionId,
  :simulationId,
  :startedAt,
  :status,
  :updatedAt,
  keyword_init: true
)

# SimulationSuite entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] simulationIds
#   @return [Array]
#
# @!attribute [rw] slackWebhookUrl
#   @return [String, nil]
#
# @!attribute [rw] targetAssignments
#   @return [Array]
#
# @!attribute [rw] updatedAt
#   @return [String]
SimulationSuite = Struct.new(
  :createdAt,
  :id,
  :name,
  :orgId,
  :path,
  :simulationIds,
  :slackWebhookUrl,
  :targetAssignments,
  :updatedAt,
  keyword_init: true
)

# Request payload for SimulationSuite#load.
#
# @!attribute [rw] id
#   @return [String]
SimulationSuiteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SimulationSuite#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
SimulationSuiteListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :limit,
  :name,
  :page,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for SimulationSuite#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] simulationIds
#   @return [Array]
#
# @!attribute [rw] slackWebhookUrl
#   @return [String, nil]
#
# @!attribute [rw] targetAssignments
#   @return [Array]
#
# @!attribute [rw] updatedAt
#   @return [String]
SimulationSuiteCreateData = Struct.new(
  :createdAt,
  :id,
  :name,
  :orgId,
  :path,
  :simulationIds,
  :slackWebhookUrl,
  :targetAssignments,
  :updatedAt,
  keyword_init: true
)

# Request payload for SimulationSuite#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] simulationIds
#   @return [Array, nil]
#
# @!attribute [rw] slackWebhookUrl
#   @return [String, nil]
#
# @!attribute [rw] targetAssignments
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SimulationSuiteUpdateData = Struct.new(
  :id,
  :createdAt,
  :name,
  :orgId,
  :path,
  :simulationIds,
  :slackWebhookUrl,
  :targetAssignments,
  :updatedAt,
  keyword_init: true
)

# Request payload for SimulationSuite#remove.
#
# @!attribute [rw] id
#   @return [String]
SimulationSuiteRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Squad entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latestVersion
#   @return [String, nil]
#
# @!attribute [rw] members
#   @return [Array]
#
# @!attribute [rw] membersOverrides
#   @return [Object, nil]
#
# @!attribute [rw] modelDeprecations
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
Squad = Struct.new(
  :createdAt,
  :id,
  :latestVersion,
  :members,
  :membersOverrides,
  :modelDeprecations,
  :name,
  :orgId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Squad#load.
#
# @!attribute [rw] id
#   @return [String]
SquadLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Squad#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id_any
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
SquadListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id_any,
  :limit,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Squad#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] latestVersion
#   @return [String, nil]
#
# @!attribute [rw] members
#   @return [Array]
#
# @!attribute [rw] membersOverrides
#   @return [Object, nil]
#
# @!attribute [rw] modelDeprecations
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
SquadCreateData = Struct.new(
  :createdAt,
  :id,
  :latestVersion,
  :members,
  :membersOverrides,
  :modelDeprecations,
  :name,
  :orgId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Squad#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] latestVersion
#   @return [String, nil]
#
# @!attribute [rw] members
#   @return [Array, nil]
#
# @!attribute [rw] membersOverrides
#   @return [Object, nil]
#
# @!attribute [rw] modelDeprecations
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SquadUpdateData = Struct.new(
  :id,
  :createdAt,
  :latestVersion,
  :members,
  :membersOverrides,
  :modelDeprecations,
  :name,
  :orgId,
  :updatedAt,
  keyword_init: true
)

# Request payload for Squad#remove.
#
# @!attribute [rw] id
#   @return [String]
SquadRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# StructuredOutput entity data model.
#
# @!attribute [rw] assistantIds
#   @return [Array, nil]
#
# @!attribute [rw] compliancePlan
#   @return [Object, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] regex
#   @return [String, nil]
#
# @!attribute [rw] schema
#   @return [Object]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] workflowIds
#   @return [Array, nil]
StructuredOutput = Struct.new(
  :assistantIds,
  :compliancePlan,
  :conditions,
  :createdAt,
  :description,
  :id,
  :model,
  :name,
  :orgId,
  :regex,
  :schema,
  :type,
  :updatedAt,
  :workflowIds,
  keyword_init: true
)

# Request payload for StructuredOutput#load.
#
# @!attribute [rw] id
#   @return [String]
StructuredOutputLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for StructuredOutput#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
StructuredOutputListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :id,
  :limit,
  :name,
  :page,
  :sort_by,
  :sort_order,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for StructuredOutput#create.
#
# @!attribute [rw] assistantIds
#   @return [Array, nil]
#
# @!attribute [rw] compliancePlan
#   @return [Object, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] orgId
#   @return [String]
#
# @!attribute [rw] regex
#   @return [String, nil]
#
# @!attribute [rw] schema
#   @return [Object]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] workflowIds
#   @return [Array, nil]
StructuredOutputCreateData = Struct.new(
  :assistantIds,
  :compliancePlan,
  :conditions,
  :createdAt,
  :description,
  :id,
  :model,
  :name,
  :orgId,
  :regex,
  :schema,
  :type,
  :updatedAt,
  :workflowIds,
  keyword_init: true
)

# Request payload for StructuredOutput#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] schema_override
#   @return [String]
#
# @!attribute [rw] assistantIds
#   @return [Array, nil]
#
# @!attribute [rw] compliancePlan
#   @return [Object, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] model
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] orgId
#   @return [String, nil]
#
# @!attribute [rw] regex
#   @return [String, nil]
#
# @!attribute [rw] schema
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] workflowIds
#   @return [Array, nil]
StructuredOutputUpdateData = Struct.new(
  :id,
  :schema_override,
  :assistantIds,
  :compliancePlan,
  :conditions,
  :createdAt,
  :description,
  :model,
  :name,
  :orgId,
  :regex,
  :schema,
  :type,
  :updatedAt,
  :workflowIds,
  keyword_init: true
)

# Request payload for StructuredOutput#remove.
#
# @!attribute [rw] id
#   @return [String]
StructuredOutputRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Tool entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Tool = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Tool#load.
#
# @!attribute [rw] id
#   @return [String]
ToolLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Tool#list.
#
# @!attribute [rw] created_at_ge
#   @return [String, nil]
#
# @!attribute [rw] created_at_gt
#   @return [String, nil]
#
# @!attribute [rw] created_at_le
#   @return [String, nil]
#
# @!attribute [rw] created_at_lt
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] updated_at_ge
#   @return [String, nil]
#
# @!attribute [rw] updated_at_gt
#   @return [String, nil]
#
# @!attribute [rw] updated_at_le
#   @return [String, nil]
#
# @!attribute [rw] updated_at_lt
#   @return [String, nil]
ToolListMatch = Struct.new(
  :created_at_ge,
  :created_at_gt,
  :created_at_le,
  :created_at_lt,
  :limit,
  :updated_at_ge,
  :updated_at_gt,
  :updated_at_le,
  :updated_at_lt,
  keyword_init: true
)

# Request payload for Tool#create.
#
# @!attribute [rw] id
#   @return [String, nil]
ToolCreateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Tool#update.
#
# @!attribute [rw] id
#   @return [String]
ToolUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Tool#remove.
#
# @!attribute [rw] id
#   @return [String]
ToolRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

