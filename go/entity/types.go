// Typed models for the Vapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/vapi-sdk/go/core"
)

// Analytics is the typed data model for the analytics entity.
type Analytics struct {
}

// AnalyticsCreateData is the typed request payload for Analytics.CreateTyped.
type AnalyticsCreateData struct {
	Queries []any `json:"queries"`
}

// Assistant is the typed data model for the assistant entity.
type Assistant struct {
}

// AssistantLoadMatch is the typed request payload for Assistant.LoadTyped.
type AssistantLoadMatch struct {
	Id string `json:"id"`
}

// AssistantListMatch is the typed request payload for Assistant.ListTyped.
type AssistantListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// AssistantCreateData is the typed request payload for Assistant.CreateTyped.
type AssistantCreateData struct {
	AnalysisPlan *any `json:"analysisPlan,omitempty"`
	ArtifactPlan *any `json:"artifactPlan,omitempty"`
	BackgroundSound *any `json:"backgroundSound,omitempty"`
	BackgroundSpeechDenoisingPlan *any `json:"backgroundSpeechDenoisingPlan,omitempty"`
	ClientMessages *[]any `json:"clientMessages,omitempty"`
	CompliancePlan *map[string]any `json:"compliancePlan,omitempty"`
	ContentType *string `json:"contentType,omitempty"`
	CreatedAt string `json:"createdAt"`
	CredentialIds *[]any `json:"credentialIds,omitempty"`
	Credentials *[]any `json:"credentials,omitempty"`
	EndCallMessage *string `json:"endCallMessage,omitempty"`
	EndCallPhrases *[]any `json:"endCallPhrases,omitempty"`
	FirstMessage *string `json:"firstMessage,omitempty"`
	FirstMessageInterruptionsEnabled *bool `json:"firstMessageInterruptionsEnabled,omitempty"`
	FirstMessageMode *string `json:"firstMessageMode,omitempty"`
	Hooks *[]any `json:"hooks,omitempty"`
	Id string `json:"id"`
	KeypadInputPlan *map[string]any `json:"keypadInputPlan,omitempty"`
	LatestVersion *string `json:"latestVersion,omitempty"`
	MaxDurationSeconds *float64 `json:"maxDurationSeconds,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model *any `json:"model,omitempty"`
	ModelDeprecations *[]any `json:"modelDeprecations,omitempty"`
	ModelOutputInMessagesEnabled *bool `json:"modelOutputInMessagesEnabled,omitempty"`
	MonitorPlan *any `json:"monitorPlan,omitempty"`
	Name *string `json:"name,omitempty"`
	ObservabilityPlan *any `json:"observabilityPlan,omitempty"`
	OrgId string `json:"orgId"`
	Reason *string `json:"reason,omitempty"`
	Server *any `json:"server,omitempty"`
	ServerMessages *[]any `json:"serverMessages,omitempty"`
	StartSpeakingPlan *any `json:"startSpeakingPlan,omitempty"`
	Status *float64 `json:"status,omitempty"`
	StopSpeakingPlan *any `json:"stopSpeakingPlan,omitempty"`
	Transcriber *any `json:"transcriber,omitempty"`
	TransportConfigurations *[]any `json:"transportConfigurations,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	Url string `json:"url"`
	Valid bool `json:"valid"`
	Voice *any `json:"voice,omitempty"`
	VoicemailDetection *any `json:"voicemailDetection,omitempty"`
	VoicemailMessage *string `json:"voicemailMessage,omitempty"`
}

// AssistantUpdateData is the typed request payload for Assistant.UpdateTyped.
type AssistantUpdateData struct {
	Id string `json:"id"`
	AnalysisPlan *any `json:"analysisPlan,omitempty"`
	ArtifactPlan *any `json:"artifactPlan,omitempty"`
	BackgroundSound *any `json:"backgroundSound,omitempty"`
	BackgroundSpeechDenoisingPlan *any `json:"backgroundSpeechDenoisingPlan,omitempty"`
	ClientMessages *[]any `json:"clientMessages,omitempty"`
	CompliancePlan *map[string]any `json:"compliancePlan,omitempty"`
	ContentType *string `json:"contentType,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CredentialIds *[]any `json:"credentialIds,omitempty"`
	Credentials *[]any `json:"credentials,omitempty"`
	EndCallMessage *string `json:"endCallMessage,omitempty"`
	EndCallPhrases *[]any `json:"endCallPhrases,omitempty"`
	FirstMessage *string `json:"firstMessage,omitempty"`
	FirstMessageInterruptionsEnabled *bool `json:"firstMessageInterruptionsEnabled,omitempty"`
	FirstMessageMode *string `json:"firstMessageMode,omitempty"`
	Hooks *[]any `json:"hooks,omitempty"`
	KeypadInputPlan *map[string]any `json:"keypadInputPlan,omitempty"`
	LatestVersion *string `json:"latestVersion,omitempty"`
	MaxDurationSeconds *float64 `json:"maxDurationSeconds,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model *any `json:"model,omitempty"`
	ModelDeprecations *[]any `json:"modelDeprecations,omitempty"`
	ModelOutputInMessagesEnabled *bool `json:"modelOutputInMessagesEnabled,omitempty"`
	MonitorPlan *any `json:"monitorPlan,omitempty"`
	Name *string `json:"name,omitempty"`
	ObservabilityPlan *any `json:"observabilityPlan,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	Reason *string `json:"reason,omitempty"`
	Server *any `json:"server,omitempty"`
	ServerMessages *[]any `json:"serverMessages,omitempty"`
	StartSpeakingPlan *any `json:"startSpeakingPlan,omitempty"`
	Status *float64 `json:"status,omitempty"`
	StopSpeakingPlan *any `json:"stopSpeakingPlan,omitempty"`
	Transcriber *any `json:"transcriber,omitempty"`
	TransportConfigurations *[]any `json:"transportConfigurations,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	Valid *bool `json:"valid,omitempty"`
	Voice *any `json:"voice,omitempty"`
	VoicemailDetection *any `json:"voicemailDetection,omitempty"`
	VoicemailMessage *string `json:"voicemailMessage,omitempty"`
}

// AssistantRemoveMatch is the typed request payload for Assistant.RemoveTyped.
type AssistantRemoveMatch struct {
	Id string `json:"id"`
}

// Board is the typed data model for the board entity.
type Board struct {
}

// BoardLoadMatch is the typed request payload for Board.LoadTyped.
type BoardLoadMatch struct {
	Id string `json:"id"`
}

// BoardListMatch is the typed request payload for Board.ListTyped.
type BoardListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// BoardCreateData is the typed request payload for Board.CreateTyped.
type BoardCreateData struct {
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Items *[]any `json:"items,omitempty"`
	Layout any `json:"layout"`
	Name string `json:"name"`
	OrgId string `json:"orgId"`
	SystemKey *string `json:"systemKey,omitempty"`
	TimeRangeOverride *any `json:"timeRangeOverride,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// BoardUpdateData is the typed request payload for Board.UpdateTyped.
type BoardUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Layout *any `json:"layout,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	SystemKey *string `json:"systemKey,omitempty"`
	TimeRangeOverride *any `json:"timeRangeOverride,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// BoardRemoveMatch is the typed request payload for Board.RemoveTyped.
type BoardRemoveMatch struct {
	Id string `json:"id"`
}

// Call is the typed data model for the call entity.
type Call struct {
}

// CallLoadMatch is the typed request payload for Call.LoadTyped.
type CallLoadMatch struct {
	Id string `json:"id"`
}

// CallListMatch is the typed request payload for Call.ListTyped.
type CallListMatch struct {
	AssistantId *string `json:"assistant_id,omitempty"`
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Id *string `json:"id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	PhoneNumberId *string `json:"phone_number_id,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// CallCreateData is the typed request payload for Call.CreateTyped.
type CallCreateData struct {
	Analysis *any `json:"analysis,omitempty"`
	Artifact *any `json:"artifact,omitempty"`
	ArtifactPlan *any `json:"artifactPlan,omitempty"`
	Assistant *any `json:"assistant,omitempty"`
	AssistantId *string `json:"assistantId,omitempty"`
	AssistantOverrides *any `json:"assistantOverrides,omitempty"`
	AssistantVersion *string `json:"assistantVersion,omitempty"`
	CampaignId *string `json:"campaignId,omitempty"`
	Compliance *any `json:"compliance,omitempty"`
	Cost *float64 `json:"cost,omitempty"`
	CostBreakdown *any `json:"costBreakdown,omitempty"`
	Costs *[]any `json:"costs,omitempty"`
	CreatedAt string `json:"createdAt"`
	Customer *any `json:"customer,omitempty"`
	CustomerId *string `json:"customerId,omitempty"`
	Customers *[]any `json:"customers,omitempty"`
	Destination *any `json:"destination,omitempty"`
	EndedAt *string `json:"endedAt,omitempty"`
	EndedMessage *string `json:"endedMessage,omitempty"`
	EndedReason *string `json:"endedReason,omitempty"`
	Id string `json:"id"`
	Messages *[]any `json:"messages,omitempty"`
	Monitor *any `json:"monitor,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId string `json:"orgId"`
	PhoneCallProvider *string `json:"phoneCallProvider,omitempty"`
	PhoneCallProviderId *string `json:"phoneCallProviderId,omitempty"`
	PhoneCallTransport *string `json:"phoneCallTransport,omitempty"`
	PhoneNumber *any `json:"phoneNumber,omitempty"`
	PhoneNumberId *string `json:"phoneNumberId,omitempty"`
	SchedulePlan *any `json:"schedulePlan,omitempty"`
	Squad *any `json:"squad,omitempty"`
	SquadId *string `json:"squadId,omitempty"`
	SquadOverrides *any `json:"squadOverrides,omitempty"`
	SquadVersion *string `json:"squadVersion,omitempty"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status *string `json:"status,omitempty"`
	Transport *any `json:"transport,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	Workflow *any `json:"workflow,omitempty"`
	WorkflowId *string `json:"workflowId,omitempty"`
	WorkflowOverrides *any `json:"workflowOverrides,omitempty"`
}

// CallUpdateData is the typed request payload for Call.UpdateTyped.
type CallUpdateData struct {
	Id string `json:"id"`
	Analysis *any `json:"analysis,omitempty"`
	Artifact *any `json:"artifact,omitempty"`
	ArtifactPlan *any `json:"artifactPlan,omitempty"`
	Assistant *any `json:"assistant,omitempty"`
	AssistantId *string `json:"assistantId,omitempty"`
	AssistantOverrides *any `json:"assistantOverrides,omitempty"`
	AssistantVersion *string `json:"assistantVersion,omitempty"`
	CampaignId *string `json:"campaignId,omitempty"`
	Compliance *any `json:"compliance,omitempty"`
	Cost *float64 `json:"cost,omitempty"`
	CostBreakdown *any `json:"costBreakdown,omitempty"`
	Costs *[]any `json:"costs,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Customer *any `json:"customer,omitempty"`
	CustomerId *string `json:"customerId,omitempty"`
	Customers *[]any `json:"customers,omitempty"`
	Destination *any `json:"destination,omitempty"`
	EndedAt *string `json:"endedAt,omitempty"`
	EndedMessage *string `json:"endedMessage,omitempty"`
	EndedReason *string `json:"endedReason,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Monitor *any `json:"monitor,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	PhoneCallProvider *string `json:"phoneCallProvider,omitempty"`
	PhoneCallProviderId *string `json:"phoneCallProviderId,omitempty"`
	PhoneCallTransport *string `json:"phoneCallTransport,omitempty"`
	PhoneNumber *any `json:"phoneNumber,omitempty"`
	PhoneNumberId *string `json:"phoneNumberId,omitempty"`
	SchedulePlan *any `json:"schedulePlan,omitempty"`
	Squad *any `json:"squad,omitempty"`
	SquadId *string `json:"squadId,omitempty"`
	SquadOverrides *any `json:"squadOverrides,omitempty"`
	SquadVersion *string `json:"squadVersion,omitempty"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status *string `json:"status,omitempty"`
	Transport *any `json:"transport,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Workflow *any `json:"workflow,omitempty"`
	WorkflowId *string `json:"workflowId,omitempty"`
	WorkflowOverrides *any `json:"workflowOverrides,omitempty"`
}

// CallRemoveMatch is the typed request payload for Call.RemoveTyped.
type CallRemoveMatch struct {
	Id string `json:"id"`
}

// Campaign is the typed data model for the campaign entity.
type Campaign struct {
}

// CampaignLoadMatch is the typed request payload for Campaign.LoadTyped.
type CampaignLoadMatch struct {
	Id string `json:"id"`
	IncludeCounter *bool `json:"include_counter,omitempty"`
}

// CampaignListMatch is the typed request payload for Campaign.ListTyped.
type CampaignListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Id *string `json:"id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// CampaignCreateData is the typed request payload for Campaign.CreateTyped.
type CampaignCreateData struct {
	AssistantId *string `json:"assistantId,omitempty"`
	AssistantOverrides *any `json:"assistantOverrides,omitempty"`
	CallMetrics *any `json:"callMetrics,omitempty"`
	Calls map[string]any `json:"calls"`
	CallsCounterEnded float64 `json:"callsCounterEnded"`
	CallsCounterEndedVoicemail float64 `json:"callsCounterEndedVoicemail"`
	CallsCounterInProgress float64 `json:"callsCounterInProgress"`
	CallsCounterQueued float64 `json:"callsCounterQueued"`
	CallsCounterScheduled float64 `json:"callsCounterScheduled"`
	ContactCounters *any `json:"contactCounters,omitempty"`
	CreatedAt string `json:"createdAt"`
	Customers *[]any `json:"customers,omitempty"`
	DialPlan *[]any `json:"dialPlan,omitempty"`
	DuplicateFromCampaignId *string `json:"duplicateFromCampaignId,omitempty"`
	EndedReason *string `json:"endedReason,omitempty"`
	Id string `json:"id"`
	MaxConcurrency *float64 `json:"maxConcurrency,omitempty"`
	Name string `json:"name"`
	OrgId string `json:"orgId"`
	PhoneNumberId *string `json:"phoneNumberId,omitempty"`
	PredialPlan *any `json:"predialPlan,omitempty"`
	SchedulePlan *any `json:"schedulePlan,omitempty"`
	Server *any `json:"server,omitempty"`
	ServerMessages *[]any `json:"serverMessages,omitempty"`
	SquadId *string `json:"squadId,omitempty"`
	SquadOverrides *any `json:"squadOverrides,omitempty"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
	WorkflowId *string `json:"workflowId,omitempty"`
}

// CampaignUpdateData is the typed request payload for Campaign.UpdateTyped.
type CampaignUpdateData struct {
	Id string `json:"id"`
	AssistantId *string `json:"assistantId,omitempty"`
	AssistantOverrides *any `json:"assistantOverrides,omitempty"`
	CallMetrics *any `json:"callMetrics,omitempty"`
	Calls *map[string]any `json:"calls,omitempty"`
	CallsCounterEnded *float64 `json:"callsCounterEnded,omitempty"`
	CallsCounterEndedVoicemail *float64 `json:"callsCounterEndedVoicemail,omitempty"`
	CallsCounterInProgress *float64 `json:"callsCounterInProgress,omitempty"`
	CallsCounterQueued *float64 `json:"callsCounterQueued,omitempty"`
	CallsCounterScheduled *float64 `json:"callsCounterScheduled,omitempty"`
	ContactCounters *any `json:"contactCounters,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Customers *[]any `json:"customers,omitempty"`
	DialPlan *[]any `json:"dialPlan,omitempty"`
	DuplicateFromCampaignId *string `json:"duplicateFromCampaignId,omitempty"`
	EndedReason *string `json:"endedReason,omitempty"`
	MaxConcurrency *float64 `json:"maxConcurrency,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	PhoneNumberId *string `json:"phoneNumberId,omitempty"`
	PredialPlan *any `json:"predialPlan,omitempty"`
	SchedulePlan *any `json:"schedulePlan,omitempty"`
	Server *any `json:"server,omitempty"`
	ServerMessages *[]any `json:"serverMessages,omitempty"`
	SquadId *string `json:"squadId,omitempty"`
	SquadOverrides *any `json:"squadOverrides,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	WorkflowId *string `json:"workflowId,omitempty"`
}

// CampaignRemoveMatch is the typed request payload for Campaign.RemoveTyped.
type CampaignRemoveMatch struct {
	Id string `json:"id"`
}

// Chat is the typed data model for the chat entity.
type Chat struct {
}

// ChatLoadMatch is the typed request payload for Chat.LoadTyped.
type ChatLoadMatch struct {
	Id string `json:"id"`
}

// ChatListMatch is the typed request payload for Chat.ListTyped.
type ChatListMatch struct {
	AssistantId *string `json:"assistant_id,omitempty"`
	AssistantIdAny *string `json:"assistant_id_any,omitempty"`
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Id *string `json:"id,omitempty"`
	IdAny *string `json:"id_any,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PreviousChatId *string `json:"previous_chat_id,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	SquadId *string `json:"squad_id,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// ChatCreateData is the typed request payload for Chat.CreateTyped.
type ChatCreateData struct {
	Assistant *any `json:"assistant,omitempty"`
	AssistantId *string `json:"assistantId,omitempty"`
	AssistantOverrides *any `json:"assistantOverrides,omitempty"`
	Cost *float64 `json:"cost,omitempty"`
	Costs *[]any `json:"costs,omitempty"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Input *any `json:"input,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId string `json:"orgId"`
	Output *[]any `json:"output,omitempty"`
	PreviousChatId *string `json:"previousChatId,omitempty"`
	SessionId *string `json:"sessionId,omitempty"`
	Squad *any `json:"squad,omitempty"`
	SquadId *string `json:"squadId,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	Transport *any `json:"transport,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// ChatRemoveMatch is the typed request payload for Chat.RemoveTyped.
type ChatRemoveMatch struct {
	Id string `json:"id"`
}

// Eval is the typed data model for the eval entity.
type Eval struct {
}

// EvalLoadMatch is the typed request payload for Eval.LoadTyped.
type EvalLoadMatch struct {
	Id string `json:"id"`
}

// EvalListMatch is the typed request payload for Eval.ListTyped.
type EvalListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Id *string `json:"id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// EvalCreateData is the typed request payload for Eval.CreateTyped.
type EvalCreateData struct {
	Cost float64 `json:"cost"`
	Costs []any `json:"costs"`
	CreatedAt string `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	EndedAt string `json:"endedAt"`
	EndedMessage *string `json:"endedMessage,omitempty"`
	EndedReason string `json:"endedReason"`
	Eval *any `json:"eval,omitempty"`
	EvalId *string `json:"evalId,omitempty"`
	Id string `json:"id"`
	Messages []any `json:"messages"`
	Name *string `json:"name,omitempty"`
	OrgId string `json:"orgId"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
	Target any `json:"target"`
	Type string `json:"type"`
	UpdatedAt string `json:"updatedAt"`
}

// EvalUpdateData is the typed request payload for Eval.UpdateTyped.
type EvalUpdateData struct {
	Id string `json:"id"`
	Cost *float64 `json:"cost,omitempty"`
	Costs *[]any `json:"costs,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	EndedAt *string `json:"endedAt,omitempty"`
	EndedMessage *string `json:"endedMessage,omitempty"`
	EndedReason *string `json:"endedReason,omitempty"`
	Eval *any `json:"eval,omitempty"`
	EvalId *string `json:"evalId,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	Results *[]any `json:"results,omitempty"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status *string `json:"status,omitempty"`
	Target *any `json:"target,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// EvalRemoveMatch is the typed request payload for Eval.RemoveTyped.
type EvalRemoveMatch struct {
	Id string `json:"id"`
}

// File is the typed data model for the file entity.
type File struct {
}

// FileLoadMatch is the typed request payload for File.LoadTyped.
type FileLoadMatch struct {
	Id string `json:"id"`
}

// FileListMatch is the typed request payload for File.ListTyped.
type FileListMatch struct {
	Purpose *string `json:"purpose,omitempty"`
}

// FileCreateData is the typed request payload for File.CreateTyped.
type FileCreateData struct {
	Bucket *string `json:"bucket,omitempty"`
	Bytes *float64 `json:"bytes,omitempty"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Key *string `json:"key,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Mimetype *string `json:"mimetype,omitempty"`
	Name *string `json:"name,omitempty"`
	Object *string `json:"object,omitempty"`
	OrgId string `json:"orgId"`
	OriginalName *string `json:"originalName,omitempty"`
	ParsedTextBytes *float64 `json:"parsedTextBytes,omitempty"`
	ParsedTextUrl *string `json:"parsedTextUrl,omitempty"`
	Path *string `json:"path,omitempty"`
	Purpose *string `json:"purpose,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
}

// FileUpdateData is the typed request payload for File.UpdateTyped.
type FileUpdateData struct {
	Id string `json:"id"`
	Bucket *string `json:"bucket,omitempty"`
	Bytes *float64 `json:"bytes,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Key *string `json:"key,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Mimetype *string `json:"mimetype,omitempty"`
	Name *string `json:"name,omitempty"`
	Object *string `json:"object,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	OriginalName *string `json:"originalName,omitempty"`
	ParsedTextBytes *float64 `json:"parsedTextBytes,omitempty"`
	ParsedTextUrl *string `json:"parsedTextUrl,omitempty"`
	Path *string `json:"path,omitempty"`
	Purpose *string `json:"purpose,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// FileRemoveMatch is the typed request payload for File.RemoveTyped.
type FileRemoveMatch struct {
	Id string `json:"id"`
}

// Insight is the typed data model for the insight entity.
type Insight struct {
}

// InsightLoadMatch is the typed request payload for Insight.LoadTyped.
type InsightLoadMatch struct {
	Id string `json:"id"`
}

// InsightListMatch is the typed request payload for Insight.ListTyped.
type InsightListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Id *string `json:"id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// InsightCreateData is the typed request payload for Insight.CreateTyped.
type InsightCreateData struct {
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	OrgId string `json:"orgId"`
	SystemKey *string `json:"systemKey,omitempty"`
	Type string `json:"type"`
	UpdatedAt string `json:"updatedAt"`
}

// InsightUpdateData is the typed request payload for Insight.UpdateTyped.
type InsightUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	SystemKey *string `json:"systemKey,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// InsightRemoveMatch is the typed request payload for Insight.RemoveTyped.
type InsightRemoveMatch struct {
	Id string `json:"id"`
}

// KnowledgeBase is the typed data model for the knowledge_base entity.
type KnowledgeBase struct {
}

// KnowledgeBaseLoadMatch is the typed request payload for KnowledgeBase.LoadTyped.
type KnowledgeBaseLoadMatch struct {
	Id string `json:"id"`
}

// KnowledgeBaseListMatch is the typed request payload for KnowledgeBase.ListTyped.
type KnowledgeBaseListMatch struct {
	Limit *float64 `json:"limit,omitempty"`
}

// KnowledgeBaseCreateData is the typed request payload for KnowledgeBase.CreateTyped.
type KnowledgeBaseCreateData struct {
	CreatedAt string `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Files []any `json:"files"`
	Id string `json:"id"`
	Name string `json:"name"`
	OrgId string `json:"orgId"`
	ToolId string `json:"toolId"`
	UpdatedAt string `json:"updatedAt"`
}

// KnowledgeBaseUpdateData is the typed request payload for KnowledgeBase.UpdateTyped.
type KnowledgeBaseUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Files *[]any `json:"files,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	ToolId *string `json:"toolId,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// KnowledgeBaseRemoveMatch is the typed request payload for KnowledgeBase.RemoveTyped.
type KnowledgeBaseRemoveMatch struct {
	Id string `json:"id"`
}

// KnowledgeBaseV2File is the typed data model for the knowledge_base_v2_file entity.
type KnowledgeBaseV2File struct {
}

// KnowledgeBaseV2FileListMatch is the typed request payload for KnowledgeBaseV2File.ListTyped.
type KnowledgeBaseV2FileListMatch struct {
	Id string `json:"id"`
}

// KnowledgeBaseV2FileCreateData is the typed request payload for KnowledgeBaseV2File.CreateTyped.
type KnowledgeBaseV2FileCreateData struct {
	Id string `json:"id"`
	Bytes *float64 `json:"bytes,omitempty"`
	CreatedAt string `json:"createdAt"`
	FileId string `json:"fileId"`
	FileName *string `json:"fileName,omitempty"`
	KnowledgeBaseV2Id string `json:"knowledgeBaseV2Id"`
	Mimetype *string `json:"mimetype,omitempty"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// KnowledgeBaseV2FileRemoveMatch is the typed request payload for KnowledgeBaseV2File.RemoveTyped.
type KnowledgeBaseV2FileRemoveMatch struct {
	Id string `json:"id"`
	KnowledgeBaseId string `json:"knowledge_base_id"`
}

// Personality is the typed data model for the personality entity.
type Personality struct {
}

// PersonalityLoadMatch is the typed request payload for Personality.LoadTyped.
type PersonalityLoadMatch struct {
	Id string `json:"id"`
}

// PersonalityListMatch is the typed request payload for Personality.ListTyped.
type PersonalityListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// PersonalityCreateData is the typed request payload for Personality.CreateTyped.
type PersonalityCreateData struct {
	Assistant any `json:"assistant"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Name string `json:"name"`
	OrgId string `json:"orgId"`
	Path *string `json:"path,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// PersonalityUpdateData is the typed request payload for Personality.UpdateTyped.
type PersonalityUpdateData struct {
	Id string `json:"id"`
	Assistant *any `json:"assistant,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	Path *string `json:"path,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PersonalityRemoveMatch is the typed request payload for Personality.RemoveTyped.
type PersonalityRemoveMatch struct {
	Id string `json:"id"`
}

// PhoneNumber is the typed data model for the phone_number entity.
type PhoneNumber struct {
}

// PhoneNumberLoadMatch is the typed request payload for PhoneNumber.LoadTyped.
type PhoneNumberLoadMatch struct {
	Id string `json:"id"`
}

// PhoneNumberListMatch is the typed request payload for PhoneNumber.ListTyped.
type PhoneNumberListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// PhoneNumberCreateData is the typed request payload for PhoneNumber.CreateTyped.
type PhoneNumberCreateData struct {
	Id *string `json:"id,omitempty"`
	Metadata any `json:"metadata"`
	Results []any `json:"results"`
}

// PhoneNumberUpdateData is the typed request payload for PhoneNumber.UpdateTyped.
type PhoneNumberUpdateData struct {
	Id string `json:"id"`
	Metadata *any `json:"metadata,omitempty"`
	Results *[]any `json:"results,omitempty"`
}

// PhoneNumberRemoveMatch is the typed request payload for PhoneNumber.RemoveTyped.
type PhoneNumberRemoveMatch struct {
	Id string `json:"id"`
}

// Provider is the typed data model for the provider entity.
type Provider struct {
}

// ProviderLoadMatch is the typed request payload for Provider.LoadTyped.
type ProviderLoadMatch struct {
	Provider string `json:"provider"`
	ResourceName string `json:"resource_name"`
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Id *string `json:"id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	ResourceId *string `json:"resource_id,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// ProviderCreateData is the typed request payload for Provider.CreateTyped.
type ProviderCreateData struct {
	Provider string `json:"provider"`
	ResourceName string `json:"resource_name"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Metadata map[string]any `json:"metadata"`
	OrgId string `json:"orgId"`
	Resource map[string]any `json:"resource"`
	ResourceId string `json:"resourceId"`
	ResourceName2 string `json:"resourceName"`
	Results []any `json:"results"`
	UpdatedAt string `json:"updatedAt"`
}

// ProviderUpdateData is the typed request payload for Provider.UpdateTyped.
type ProviderUpdateData struct {
	Id string `json:"id"`
	Provider string `json:"provider"`
	ResourceName string `json:"resource_name"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	Resource *map[string]any `json:"resource,omitempty"`
	ResourceId *string `json:"resourceId,omitempty"`
	ResourceName2 *string `json:"resourceName,omitempty"`
	Results *[]any `json:"results,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ProviderRemoveMatch is the typed request payload for Provider.RemoveTyped.
type ProviderRemoveMatch struct {
	Id string `json:"id"`
	Provider string `json:"provider"`
	ResourceName string `json:"resource_name"`
}

// Scenario is the typed data model for the scenario entity.
type Scenario struct {
}

// ScenarioLoadMatch is the typed request payload for Scenario.LoadTyped.
type ScenarioLoadMatch struct {
	Id string `json:"id"`
}

// ScenarioListMatch is the typed request payload for Scenario.ListTyped.
type ScenarioListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	IdAny *[]any `json:"id_any,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// ScenarioCreateData is the typed request payload for Scenario.CreateTyped.
type ScenarioCreateData struct {
	CreatedAt string `json:"createdAt"`
	Evaluations []any `json:"evaluations"`
	Hooks *[]any `json:"hooks,omitempty"`
	Id string `json:"id"`
	Instructions string `json:"instructions"`
	Name string `json:"name"`
	OrgId string `json:"orgId"`
	Path *string `json:"path,omitempty"`
	TargetOverrides *any `json:"targetOverrides,omitempty"`
	ToolMocks *[]any `json:"toolMocks,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// ScenarioUpdateData is the typed request payload for Scenario.UpdateTyped.
type ScenarioUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Evaluations *[]any `json:"evaluations,omitempty"`
	Hooks *[]any `json:"hooks,omitempty"`
	Instructions *string `json:"instructions,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	Path *string `json:"path,omitempty"`
	TargetOverrides *any `json:"targetOverrides,omitempty"`
	ToolMocks *[]any `json:"toolMocks,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ScenarioRemoveMatch is the typed request payload for Scenario.RemoveTyped.
type ScenarioRemoveMatch struct {
	Id string `json:"id"`
}

// Scorecard is the typed data model for the scorecard entity.
type Scorecard struct {
}

// ScorecardLoadMatch is the typed request payload for Scorecard.LoadTyped.
type ScorecardLoadMatch struct {
	Id string `json:"id"`
}

// ScorecardListMatch is the typed request payload for Scorecard.ListTyped.
type ScorecardListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Id *string `json:"id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// ScorecardCreateData is the typed request payload for Scorecard.CreateTyped.
type ScorecardCreateData struct {
	AssistantIds *[]any `json:"assistantIds,omitempty"`
	CreatedAt string `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Metrics []any `json:"metrics"`
	Name *string `json:"name,omitempty"`
	OrgId string `json:"orgId"`
	UpdatedAt string `json:"updatedAt"`
}

// ScorecardUpdateData is the typed request payload for Scorecard.UpdateTyped.
type ScorecardUpdateData struct {
	Id string `json:"id"`
	AssistantIds *[]any `json:"assistantIds,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Metrics *[]any `json:"metrics,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ScorecardRemoveMatch is the typed request payload for Scorecard.RemoveTyped.
type ScorecardRemoveMatch struct {
	Id string `json:"id"`
}

// Session is the typed data model for the session entity.
type Session struct {
}

// SessionLoadMatch is the typed request payload for Session.LoadTyped.
type SessionLoadMatch struct {
	Id string `json:"id"`
}

// SessionListMatch is the typed request payload for Session.ListTyped.
type SessionListMatch struct {
	AssistantId *string `json:"assistant_id,omitempty"`
	AssistantIdAny *string `json:"assistant_id_any,omitempty"`
	AssistantOverride *any `json:"assistant_override,omitempty"`
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	CustomerNumberAny *string `json:"customer_number_any,omitempty"`
	Email *string `json:"email,omitempty"`
	Extension *string `json:"extension,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	Id *string `json:"id,omitempty"`
	IdAny *string `json:"id_any,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *string `json:"number,omitempty"`
	NumberE164CheckEnabled *bool `json:"number_e164_check_enabled,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PhoneNumberId *string `json:"phone_number_id,omitempty"`
	PhoneNumberIdAny *[]any `json:"phone_number_id_any,omitempty"`
	SipUri *string `json:"sip_uri,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	SquadId *string `json:"squad_id,omitempty"`
	SquadOverride *any `json:"squad_override,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
	WorkflowId *string `json:"workflow_id,omitempty"`
}

// SessionCreateData is the typed request payload for Session.CreateTyped.
type SessionCreateData struct {
	Artifact *any `json:"artifact,omitempty"`
	Assistant *any `json:"assistant,omitempty"`
	AssistantId *string `json:"assistantId,omitempty"`
	AssistantOverrides *any `json:"assistantOverrides,omitempty"`
	Cost *float64 `json:"cost,omitempty"`
	Costs *[]any `json:"costs,omitempty"`
	CreatedAt string `json:"createdAt"`
	Customer *any `json:"customer,omitempty"`
	CustomerId *string `json:"customerId,omitempty"`
	ExpirationSeconds *float64 `json:"expirationSeconds,omitempty"`
	Id string `json:"id"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId string `json:"orgId"`
	PhoneNumber *any `json:"phoneNumber,omitempty"`
	PhoneNumberId *string `json:"phoneNumberId,omitempty"`
	Squad *any `json:"squad,omitempty"`
	SquadId *string `json:"squadId,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// SessionUpdateData is the typed request payload for Session.UpdateTyped.
type SessionUpdateData struct {
	Id string `json:"id"`
	Artifact *any `json:"artifact,omitempty"`
	Assistant *any `json:"assistant,omitempty"`
	AssistantId *string `json:"assistantId,omitempty"`
	AssistantOverrides *any `json:"assistantOverrides,omitempty"`
	Cost *float64 `json:"cost,omitempty"`
	Costs *[]any `json:"costs,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Customer *any `json:"customer,omitempty"`
	CustomerId *string `json:"customerId,omitempty"`
	ExpirationSeconds *float64 `json:"expirationSeconds,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	PhoneNumber *any `json:"phoneNumber,omitempty"`
	PhoneNumberId *string `json:"phoneNumberId,omitempty"`
	Squad *any `json:"squad,omitempty"`
	SquadId *string `json:"squadId,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// SessionRemoveMatch is the typed request payload for Session.RemoveTyped.
type SessionRemoveMatch struct {
	Id string `json:"id"`
}

// Simulation is the typed data model for the simulation entity.
type Simulation struct {
}

// SimulationLoadMatch is the typed request payload for Simulation.LoadTyped.
type SimulationLoadMatch struct {
	Id string `json:"id"`
}

// SimulationListMatch is the typed request payload for Simulation.ListTyped.
type SimulationListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	IdAny *[]any `json:"id_any,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	StandaloneOnly *bool `json:"standalone_only,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// SimulationCreateData is the typed request payload for Simulation.CreateTyped.
type SimulationCreateData struct {
	AssistantId *string `json:"assistantId,omitempty"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	OrgId string `json:"orgId"`
	Path *string `json:"path,omitempty"`
	PersonalityId string `json:"personalityId"`
	ScenarioId string `json:"scenarioId"`
	SquadId *string `json:"squadId,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// SimulationUpdateData is the typed request payload for Simulation.UpdateTyped.
type SimulationUpdateData struct {
	Id string `json:"id"`
	AssistantId *string `json:"assistantId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	Path *string `json:"path,omitempty"`
	PersonalityId *string `json:"personalityId,omitempty"`
	ScenarioId *string `json:"scenarioId,omitempty"`
	SquadId *string `json:"squadId,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// SimulationRemoveMatch is the typed request payload for Simulation.RemoveTyped.
type SimulationRemoveMatch struct {
	Id string `json:"id"`
}

// SimulationRun is the typed data model for the simulation_run entity.
type SimulationRun struct {
}

// SimulationRunLoadMatch is the typed request payload for SimulationRun.LoadTyped.
type SimulationRunLoadMatch struct {
	Id string `json:"id"`
}

// SimulationRunCreateData is the typed request payload for SimulationRun.CreateTyped.
type SimulationRunCreateData struct {
	CreatedAt string `json:"createdAt"`
	EndedAt *string `json:"endedAt,omitempty"`
	EndedReason *string `json:"endedReason,omitempty"`
	Id string `json:"id"`
	ItemCounts *any `json:"itemCounts,omitempty"`
	Iterations *float64 `json:"iterations,omitempty"`
	OrgId string `json:"orgId"`
	QueuedAt string `json:"queuedAt"`
	Simulations []any `json:"simulations"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status string `json:"status"`
	Target any `json:"target"`
	Transport *any `json:"transport,omitempty"`
	UpdatedAt string `json:"updatedAt"`
}

// SimulationRunUpdateData is the typed request payload for SimulationRun.UpdateTyped.
type SimulationRunUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EndedAt *string `json:"endedAt,omitempty"`
	EndedReason *string `json:"endedReason,omitempty"`
	ItemCounts *any `json:"itemCounts,omitempty"`
	Iterations *float64 `json:"iterations,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	QueuedAt *string `json:"queuedAt,omitempty"`
	Simulations *[]any `json:"simulations,omitempty"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status *string `json:"status,omitempty"`
	Target *any `json:"target,omitempty"`
	Transport *any `json:"transport,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// SimulationRunItem is the typed data model for the simulation_run_item entity.
type SimulationRunItem struct {
}

// SimulationRunItemLoadMatch is the typed request payload for SimulationRunItem.LoadTyped.
type SimulationRunItemLoadMatch struct {
	Id string `json:"id"`
	RunId string `json:"run_id"`
}

// SimulationRunItemListMatch is the typed request payload for SimulationRunItem.ListTyped.
type SimulationRunItemListMatch struct {
	RunId *string `json:"run_id,omitempty"`
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SimulationId *string `json:"simulation_id,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// SimulationRunItemCreateData is the typed request payload for SimulationRunItem.CreateTyped.
type SimulationRunItemCreateData struct {
	ItemId string `json:"item_id"`
	RunId string `json:"run_id"`
	Force string `json:"force"`
	Persist *string `json:"persist,omitempty"`
	CallId *string `json:"callId,omitempty"`
	CanceledAt *string `json:"canceledAt,omitempty"`
	CompletedAt *string `json:"completedAt,omitempty"`
	Configurations *any `json:"configurations,omitempty"`
	CreatedAt string `json:"createdAt"`
	FailedAt *string `json:"failedAt,omitempty"`
	FailureReason *string `json:"failureReason,omitempty"`
	Hooks *[]any `json:"hooks,omitempty"`
	Id string `json:"id"`
	ImprovementSuggestions *any `json:"improvementSuggestions,omitempty"`
	IterationNumber *float64 `json:"iterationNumber,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	OrgId string `json:"orgId"`
	PersonalityId *string `json:"personalityId,omitempty"`
	QueuedAt string `json:"queuedAt"`
	Results *any `json:"results,omitempty"`
	RunId2 *string `json:"runId,omitempty"`
	ScenarioId *string `json:"scenarioId,omitempty"`
	SessionId *string `json:"sessionId,omitempty"`
	SimulationId string `json:"simulationId"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// SimulationRunItemUpdateData is the typed request payload for SimulationRunItem.UpdateTyped.
type SimulationRunItemUpdateData struct {
	Id string `json:"id"`
	RunId string `json:"run_id"`
	CallId *string `json:"callId,omitempty"`
	CanceledAt *string `json:"canceledAt,omitempty"`
	CompletedAt *string `json:"completedAt,omitempty"`
	Configurations *any `json:"configurations,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	FailedAt *string `json:"failedAt,omitempty"`
	FailureReason *string `json:"failureReason,omitempty"`
	Hooks *[]any `json:"hooks,omitempty"`
	ImprovementSuggestions *any `json:"improvementSuggestions,omitempty"`
	IterationNumber *float64 `json:"iterationNumber,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	PersonalityId *string `json:"personalityId,omitempty"`
	QueuedAt *string `json:"queuedAt,omitempty"`
	Results *any `json:"results,omitempty"`
	RunId2 *string `json:"runId,omitempty"`
	ScenarioId *string `json:"scenarioId,omitempty"`
	SessionId *string `json:"sessionId,omitempty"`
	SimulationId *string `json:"simulationId,omitempty"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// SimulationSuite is the typed data model for the simulation_suite entity.
type SimulationSuite struct {
}

// SimulationSuiteLoadMatch is the typed request payload for SimulationSuite.LoadTyped.
type SimulationSuiteLoadMatch struct {
	Id string `json:"id"`
}

// SimulationSuiteListMatch is the typed request payload for SimulationSuite.ListTyped.
type SimulationSuiteListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// SimulationSuiteCreateData is the typed request payload for SimulationSuite.CreateTyped.
type SimulationSuiteCreateData struct {
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Name string `json:"name"`
	OrgId string `json:"orgId"`
	Path *string `json:"path,omitempty"`
	SimulationIds []any `json:"simulationIds"`
	SlackWebhookUrl *string `json:"slackWebhookUrl,omitempty"`
	TargetAssignments []any `json:"targetAssignments"`
	UpdatedAt string `json:"updatedAt"`
}

// SimulationSuiteUpdateData is the typed request payload for SimulationSuite.UpdateTyped.
type SimulationSuiteUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	Path *string `json:"path,omitempty"`
	SimulationIds *[]any `json:"simulationIds,omitempty"`
	SlackWebhookUrl *string `json:"slackWebhookUrl,omitempty"`
	TargetAssignments *[]any `json:"targetAssignments,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// SimulationSuiteRemoveMatch is the typed request payload for SimulationSuite.RemoveTyped.
type SimulationSuiteRemoveMatch struct {
	Id string `json:"id"`
}

// Squad is the typed data model for the squad entity.
type Squad struct {
}

// SquadLoadMatch is the typed request payload for Squad.LoadTyped.
type SquadLoadMatch struct {
	Id string `json:"id"`
}

// SquadListMatch is the typed request payload for Squad.ListTyped.
type SquadListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	IdAny *[]any `json:"id_any,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// SquadCreateData is the typed request payload for Squad.CreateTyped.
type SquadCreateData struct {
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	LatestVersion *string `json:"latestVersion,omitempty"`
	Members []any `json:"members"`
	MembersOverrides *any `json:"membersOverrides,omitempty"`
	ModelDeprecations *[]any `json:"modelDeprecations,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId string `json:"orgId"`
	UpdatedAt string `json:"updatedAt"`
}

// SquadUpdateData is the typed request payload for Squad.UpdateTyped.
type SquadUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	LatestVersion *string `json:"latestVersion,omitempty"`
	Members *[]any `json:"members,omitempty"`
	MembersOverrides *any `json:"membersOverrides,omitempty"`
	ModelDeprecations *[]any `json:"modelDeprecations,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// SquadRemoveMatch is the typed request payload for Squad.RemoveTyped.
type SquadRemoveMatch struct {
	Id string `json:"id"`
}

// StructuredOutput is the typed data model for the structured_output entity.
type StructuredOutput struct {
}

// StructuredOutputLoadMatch is the typed request payload for StructuredOutput.LoadTyped.
type StructuredOutputLoadMatch struct {
	Id string `json:"id"`
}

// StructuredOutputListMatch is the typed request payload for StructuredOutput.ListTyped.
type StructuredOutputListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Id *string `json:"id,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// StructuredOutputCreateData is the typed request payload for StructuredOutput.CreateTyped.
type StructuredOutputCreateData struct {
	AssistantIds *[]any `json:"assistantIds,omitempty"`
	CompliancePlan *any `json:"compliancePlan,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	CreatedAt string `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Model *any `json:"model,omitempty"`
	Name string `json:"name"`
	OrgId string `json:"orgId"`
	Regex *string `json:"regex,omitempty"`
	Schema any `json:"schema"`
	Type *string `json:"type,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	WorkflowIds *[]any `json:"workflowIds,omitempty"`
}

// StructuredOutputUpdateData is the typed request payload for StructuredOutput.UpdateTyped.
type StructuredOutputUpdateData struct {
	Id string `json:"id"`
	SchemaOverride string `json:"schema_override"`
	AssistantIds *[]any `json:"assistantIds,omitempty"`
	CompliancePlan *any `json:"compliancePlan,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Model *any `json:"model,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"orgId,omitempty"`
	Regex *string `json:"regex,omitempty"`
	Schema *any `json:"schema,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	WorkflowIds *[]any `json:"workflowIds,omitempty"`
}

// StructuredOutputRemoveMatch is the typed request payload for StructuredOutput.RemoveTyped.
type StructuredOutputRemoveMatch struct {
	Id string `json:"id"`
}

// Tool is the typed data model for the tool entity.
type Tool struct {
}

// ToolLoadMatch is the typed request payload for Tool.LoadTyped.
type ToolLoadMatch struct {
	Id string `json:"id"`
}

// ToolListMatch is the typed request payload for Tool.ListTyped.
type ToolListMatch struct {
	CreatedAtGe *string `json:"created_at_ge,omitempty"`
	CreatedAtGt *string `json:"created_at_gt,omitempty"`
	CreatedAtLe *string `json:"created_at_le,omitempty"`
	CreatedAtLt *string `json:"created_at_lt,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	UpdatedAtGe *string `json:"updated_at_ge,omitempty"`
	UpdatedAtGt *string `json:"updated_at_gt,omitempty"`
	UpdatedAtLe *string `json:"updated_at_le,omitempty"`
	UpdatedAtLt *string `json:"updated_at_lt,omitempty"`
}

// ToolCreateData is the typed request payload for Tool.CreateTyped.
type ToolCreateData struct {
	Id *string `json:"id,omitempty"`
}

// ToolUpdateData is the typed request payload for Tool.UpdateTyped.
type ToolUpdateData struct {
	Id string `json:"id"`
}

// ToolRemoveMatch is the typed request payload for Tool.RemoveTyped.
type ToolRemoveMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
