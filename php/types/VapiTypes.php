<?php
declare(strict_types=1);

// Typed models for the Vapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Analytics entity data model. */
class Analytics
{
    public array $queries;
}

/** Request payload for Analytics#create. */
class AnalyticsCreateData
{
    public array $queries;
}

/** Assistant entity data model. */
class Assistant
{
    public mixed $analysisPlan = null;
    public mixed $artifactPlan = null;
    public mixed $backgroundSound = null;
    public mixed $backgroundSpeechDenoisingPlan = null;
    public ?array $clientMessages = null;
    public ?array $compliancePlan = null;
    public ?string $contentType = null;
    public string $createdAt;
    public ?array $credentialIds = null;
    public ?array $credentials = null;
    public ?string $endCallMessage = null;
    public ?array $endCallPhrases = null;
    public ?string $firstMessage = null;
    public ?bool $firstMessageInterruptionsEnabled = null;
    public ?string $firstMessageMode = null;
    public ?array $hooks = null;
    public string $id;
    public ?array $keypadInputPlan = null;
    public ?string $latestVersion = null;
    public ?float $maxDurationSeconds = null;
    public ?array $metadata = null;
    public mixed $model = null;
    public ?array $modelDeprecations = null;
    public ?bool $modelOutputInMessagesEnabled = null;
    public mixed $monitorPlan = null;
    public ?string $name = null;
    public mixed $observabilityPlan = null;
    public string $orgId;
    public ?string $reason = null;
    public mixed $server = null;
    public ?array $serverMessages = null;
    public mixed $startSpeakingPlan = null;
    public ?float $status = null;
    public mixed $stopSpeakingPlan = null;
    public mixed $transcriber = null;
    public ?array $transportConfigurations = null;
    public string $updatedAt;
    public string $url;
    public bool $valid;
    public mixed $voice = null;
    public mixed $voicemailDetection = null;
    public ?string $voicemailMessage = null;
}

/** Request payload for Assistant#load. */
class AssistantLoadMatch
{
    public string $id;
}

/** Request payload for Assistant#list. */
class AssistantListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?float $limit = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Assistant#create. */
class AssistantCreateData
{
    public mixed $analysisPlan = null;
    public mixed $artifactPlan = null;
    public mixed $backgroundSound = null;
    public mixed $backgroundSpeechDenoisingPlan = null;
    public ?array $clientMessages = null;
    public ?array $compliancePlan = null;
    public ?string $contentType = null;
    public string $createdAt;
    public ?array $credentialIds = null;
    public ?array $credentials = null;
    public ?string $endCallMessage = null;
    public ?array $endCallPhrases = null;
    public ?string $firstMessage = null;
    public ?bool $firstMessageInterruptionsEnabled = null;
    public ?string $firstMessageMode = null;
    public ?array $hooks = null;
    public string $id;
    public ?array $keypadInputPlan = null;
    public ?string $latestVersion = null;
    public ?float $maxDurationSeconds = null;
    public ?array $metadata = null;
    public mixed $model = null;
    public ?array $modelDeprecations = null;
    public ?bool $modelOutputInMessagesEnabled = null;
    public mixed $monitorPlan = null;
    public ?string $name = null;
    public mixed $observabilityPlan = null;
    public string $orgId;
    public ?string $reason = null;
    public mixed $server = null;
    public ?array $serverMessages = null;
    public mixed $startSpeakingPlan = null;
    public ?float $status = null;
    public mixed $stopSpeakingPlan = null;
    public mixed $transcriber = null;
    public ?array $transportConfigurations = null;
    public string $updatedAt;
    public string $url;
    public bool $valid;
    public mixed $voice = null;
    public mixed $voicemailDetection = null;
    public ?string $voicemailMessage = null;
}

/** Request payload for Assistant#update. */
class AssistantUpdateData
{
    public string $id;
    public mixed $analysisPlan = null;
    public mixed $artifactPlan = null;
    public mixed $backgroundSound = null;
    public mixed $backgroundSpeechDenoisingPlan = null;
    public ?array $clientMessages = null;
    public ?array $compliancePlan = null;
    public ?string $contentType = null;
    public ?string $createdAt = null;
    public ?array $credentialIds = null;
    public ?array $credentials = null;
    public ?string $endCallMessage = null;
    public ?array $endCallPhrases = null;
    public ?string $firstMessage = null;
    public ?bool $firstMessageInterruptionsEnabled = null;
    public ?string $firstMessageMode = null;
    public ?array $hooks = null;
    public ?array $keypadInputPlan = null;
    public ?string $latestVersion = null;
    public ?float $maxDurationSeconds = null;
    public ?array $metadata = null;
    public mixed $model = null;
    public ?array $modelDeprecations = null;
    public ?bool $modelOutputInMessagesEnabled = null;
    public mixed $monitorPlan = null;
    public ?string $name = null;
    public mixed $observabilityPlan = null;
    public ?string $orgId = null;
    public ?string $reason = null;
    public mixed $server = null;
    public ?array $serverMessages = null;
    public mixed $startSpeakingPlan = null;
    public ?float $status = null;
    public mixed $stopSpeakingPlan = null;
    public mixed $transcriber = null;
    public ?array $transportConfigurations = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
    public ?bool $valid = null;
    public mixed $voice = null;
    public mixed $voicemailDetection = null;
    public ?string $voicemailMessage = null;
}

/** Request payload for Assistant#remove. */
class AssistantRemoveMatch
{
    public string $id;
}

/** Board entity data model. */
class Board
{
    public string $createdAt;
    public string $id;
    public ?array $items = null;
    public mixed $layout;
    public string $name;
    public string $orgId;
    public ?string $systemKey = null;
    public mixed $timeRangeOverride = null;
    public string $updatedAt;
}

/** Request payload for Board#load. */
class BoardLoadMatch
{
    public string $id;
}

/** Request payload for Board#list. */
class BoardListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Board#create. */
class BoardCreateData
{
    public string $createdAt;
    public string $id;
    public ?array $items = null;
    public mixed $layout;
    public string $name;
    public string $orgId;
    public ?string $systemKey = null;
    public mixed $timeRangeOverride = null;
    public string $updatedAt;
}

/** Request payload for Board#update. */
class BoardUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?array $items = null;
    public mixed $layout = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $systemKey = null;
    public mixed $timeRangeOverride = null;
    public ?string $updatedAt = null;
}

/** Request payload for Board#remove. */
class BoardRemoveMatch
{
    public string $id;
}

/** Call entity data model. */
class Call
{
    public mixed $analysis = null;
    public mixed $artifact = null;
    public mixed $artifactPlan = null;
    public mixed $assistant = null;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public ?string $assistantVersion = null;
    public ?string $campaignId = null;
    public mixed $compliance = null;
    public ?float $cost = null;
    public mixed $costBreakdown = null;
    public ?array $costs = null;
    public string $createdAt;
    public mixed $customer = null;
    public ?string $customerId = null;
    public ?array $customers = null;
    public mixed $destination = null;
    public ?string $endedAt = null;
    public ?string $endedMessage = null;
    public ?string $endedReason = null;
    public string $id;
    public ?array $messages = null;
    public mixed $monitor = null;
    public ?string $name = null;
    public string $orgId;
    public ?string $phoneCallProvider = null;
    public ?string $phoneCallProviderId = null;
    public ?string $phoneCallTransport = null;
    public mixed $phoneNumber = null;
    public ?string $phoneNumberId = null;
    public mixed $schedulePlan = null;
    public mixed $squad = null;
    public ?string $squadId = null;
    public mixed $squadOverrides = null;
    public ?string $squadVersion = null;
    public ?string $startedAt = null;
    public ?string $status = null;
    public mixed $transport = null;
    public ?string $type = null;
    public string $updatedAt;
    public mixed $workflow = null;
    public ?string $workflowId = null;
    public mixed $workflowOverrides = null;
}

/** Request payload for Call#load. */
class CallLoadMatch
{
    public string $id;
}

/** Request payload for Call#list. */
class CallListMatch
{
    public ?string $assistant_id = null;
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $id = null;
    public ?float $limit = null;
    public ?string $phone_number_id = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Call#create. */
class CallCreateData
{
    public mixed $analysis = null;
    public mixed $artifact = null;
    public mixed $artifactPlan = null;
    public mixed $assistant = null;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public ?string $assistantVersion = null;
    public ?string $campaignId = null;
    public mixed $compliance = null;
    public ?float $cost = null;
    public mixed $costBreakdown = null;
    public ?array $costs = null;
    public string $createdAt;
    public mixed $customer = null;
    public ?string $customerId = null;
    public ?array $customers = null;
    public mixed $destination = null;
    public ?string $endedAt = null;
    public ?string $endedMessage = null;
    public ?string $endedReason = null;
    public string $id;
    public ?array $messages = null;
    public mixed $monitor = null;
    public ?string $name = null;
    public string $orgId;
    public ?string $phoneCallProvider = null;
    public ?string $phoneCallProviderId = null;
    public ?string $phoneCallTransport = null;
    public mixed $phoneNumber = null;
    public ?string $phoneNumberId = null;
    public mixed $schedulePlan = null;
    public mixed $squad = null;
    public ?string $squadId = null;
    public mixed $squadOverrides = null;
    public ?string $squadVersion = null;
    public ?string $startedAt = null;
    public ?string $status = null;
    public mixed $transport = null;
    public ?string $type = null;
    public string $updatedAt;
    public mixed $workflow = null;
    public ?string $workflowId = null;
    public mixed $workflowOverrides = null;
}

/** Request payload for Call#update. */
class CallUpdateData
{
    public string $id;
    public mixed $analysis = null;
    public mixed $artifact = null;
    public mixed $artifactPlan = null;
    public mixed $assistant = null;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public ?string $assistantVersion = null;
    public ?string $campaignId = null;
    public mixed $compliance = null;
    public ?float $cost = null;
    public mixed $costBreakdown = null;
    public ?array $costs = null;
    public ?string $createdAt = null;
    public mixed $customer = null;
    public ?string $customerId = null;
    public ?array $customers = null;
    public mixed $destination = null;
    public ?string $endedAt = null;
    public ?string $endedMessage = null;
    public ?string $endedReason = null;
    public ?array $messages = null;
    public mixed $monitor = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $phoneCallProvider = null;
    public ?string $phoneCallProviderId = null;
    public ?string $phoneCallTransport = null;
    public mixed $phoneNumber = null;
    public ?string $phoneNumberId = null;
    public mixed $schedulePlan = null;
    public mixed $squad = null;
    public ?string $squadId = null;
    public mixed $squadOverrides = null;
    public ?string $squadVersion = null;
    public ?string $startedAt = null;
    public ?string $status = null;
    public mixed $transport = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public mixed $workflow = null;
    public ?string $workflowId = null;
    public mixed $workflowOverrides = null;
}

/** Request payload for Call#remove. */
class CallRemoveMatch
{
    public string $id;
}

/** Campaign entity data model. */
class Campaign
{
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public mixed $callMetrics = null;
    public array $calls;
    public float $callsCounterEnded;
    public float $callsCounterEndedVoicemail;
    public float $callsCounterInProgress;
    public float $callsCounterQueued;
    public float $callsCounterScheduled;
    public mixed $contactCounters = null;
    public string $createdAt;
    public ?array $customers = null;
    public ?array $dialPlan = null;
    public ?string $duplicateFromCampaignId = null;
    public ?string $endedReason = null;
    public string $id;
    public ?float $maxConcurrency = null;
    public string $name;
    public string $orgId;
    public ?string $phoneNumberId = null;
    public mixed $predialPlan = null;
    public mixed $schedulePlan = null;
    public mixed $server = null;
    public ?array $serverMessages = null;
    public ?string $squadId = null;
    public mixed $squadOverrides = null;
    public string $status;
    public string $updatedAt;
    public ?string $workflowId = null;
}

/** Request payload for Campaign#load. */
class CampaignLoadMatch
{
    public string $id;
    public ?bool $include_counter = null;
}

/** Request payload for Campaign#list. */
class CampaignListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $id = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $status = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Campaign#create. */
class CampaignCreateData
{
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public mixed $callMetrics = null;
    public array $calls;
    public float $callsCounterEnded;
    public float $callsCounterEndedVoicemail;
    public float $callsCounterInProgress;
    public float $callsCounterQueued;
    public float $callsCounterScheduled;
    public mixed $contactCounters = null;
    public string $createdAt;
    public ?array $customers = null;
    public ?array $dialPlan = null;
    public ?string $duplicateFromCampaignId = null;
    public ?string $endedReason = null;
    public string $id;
    public ?float $maxConcurrency = null;
    public string $name;
    public string $orgId;
    public ?string $phoneNumberId = null;
    public mixed $predialPlan = null;
    public mixed $schedulePlan = null;
    public mixed $server = null;
    public ?array $serverMessages = null;
    public ?string $squadId = null;
    public mixed $squadOverrides = null;
    public string $status;
    public string $updatedAt;
    public ?string $workflowId = null;
}

/** Request payload for Campaign#update. */
class CampaignUpdateData
{
    public string $id;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public mixed $callMetrics = null;
    public ?array $calls = null;
    public ?float $callsCounterEnded = null;
    public ?float $callsCounterEndedVoicemail = null;
    public ?float $callsCounterInProgress = null;
    public ?float $callsCounterQueued = null;
    public ?float $callsCounterScheduled = null;
    public mixed $contactCounters = null;
    public ?string $createdAt = null;
    public ?array $customers = null;
    public ?array $dialPlan = null;
    public ?string $duplicateFromCampaignId = null;
    public ?string $endedReason = null;
    public ?float $maxConcurrency = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $phoneNumberId = null;
    public mixed $predialPlan = null;
    public mixed $schedulePlan = null;
    public mixed $server = null;
    public ?array $serverMessages = null;
    public ?string $squadId = null;
    public mixed $squadOverrides = null;
    public ?string $status = null;
    public ?string $updatedAt = null;
    public ?string $workflowId = null;
}

/** Request payload for Campaign#remove. */
class CampaignRemoveMatch
{
    public string $id;
}

/** Chat entity data model. */
class Chat
{
    public mixed $assistant = null;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public ?float $cost = null;
    public ?array $costs = null;
    public string $createdAt;
    public string $id;
    public mixed $input = null;
    public ?array $messages = null;
    public ?string $name = null;
    public string $orgId;
    public ?array $output = null;
    public ?string $previousChatId = null;
    public ?string $sessionId = null;
    public mixed $squad = null;
    public ?string $squadId = null;
    public ?bool $stream = null;
    public mixed $transport = null;
    public string $updatedAt;
}

/** Request payload for Chat#load. */
class ChatLoadMatch
{
    public string $id;
}

/** Request payload for Chat#list. */
class ChatListMatch
{
    public ?string $assistant_id = null;
    public ?string $assistant_id_any = null;
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $id = null;
    public ?string $id_any = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $previous_chat_id = null;
    public ?string $session_id = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $squad_id = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Chat#create. */
class ChatCreateData
{
    public mixed $assistant = null;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public ?float $cost = null;
    public ?array $costs = null;
    public string $createdAt;
    public string $id;
    public mixed $input = null;
    public ?array $messages = null;
    public ?string $name = null;
    public string $orgId;
    public ?array $output = null;
    public ?string $previousChatId = null;
    public ?string $sessionId = null;
    public mixed $squad = null;
    public ?string $squadId = null;
    public ?bool $stream = null;
    public mixed $transport = null;
    public string $updatedAt;
}

/** Request payload for Chat#remove. */
class ChatRemoveMatch
{
    public string $id;
}

/** Eval entity data model. */
class EvalType
{
    public float $cost;
    public array $costs;
    public string $createdAt;
    public ?string $description = null;
    public string $endedAt;
    public ?string $endedMessage = null;
    public string $endedReason;
    public mixed $eval = null;
    public ?string $evalId = null;
    public string $id;
    public array $messages;
    public ?string $name = null;
    public string $orgId;
    public array $results;
    public string $startedAt;
    public string $status;
    public mixed $target;
    public string $type;
    public string $updatedAt;
}

/** Request payload for Eval#load. */
class EvalLoadMatch
{
    public string $id;
}

/** Request payload for Eval#list. */
class EvalListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $id = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Eval#create. */
class EvalCreateData
{
    public float $cost;
    public array $costs;
    public string $createdAt;
    public ?string $description = null;
    public string $endedAt;
    public ?string $endedMessage = null;
    public string $endedReason;
    public mixed $eval = null;
    public ?string $evalId = null;
    public string $id;
    public array $messages;
    public ?string $name = null;
    public string $orgId;
    public array $results;
    public string $startedAt;
    public string $status;
    public mixed $target;
    public string $type;
    public string $updatedAt;
}

/** Request payload for Eval#update. */
class EvalUpdateData
{
    public string $id;
    public ?float $cost = null;
    public ?array $costs = null;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?string $endedAt = null;
    public ?string $endedMessage = null;
    public ?string $endedReason = null;
    public mixed $eval = null;
    public ?string $evalId = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?array $results = null;
    public ?string $startedAt = null;
    public ?string $status = null;
    public mixed $target = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
}

/** Request payload for Eval#remove. */
class EvalRemoveMatch
{
    public string $id;
}

/** File entity data model. */
class File
{
    public ?string $bucket = null;
    public ?float $bytes = null;
    public string $createdAt;
    public string $id;
    public ?string $key = null;
    public ?array $metadata = null;
    public ?string $mimetype = null;
    public ?string $name = null;
    public ?string $object = null;
    public string $orgId;
    public ?string $originalName = null;
    public ?float $parsedTextBytes = null;
    public ?string $parsedTextUrl = null;
    public ?string $path = null;
    public ?string $purpose = null;
    public ?string $status = null;
    public string $updatedAt;
    public ?string $url = null;
}

/** Request payload for File#load. */
class FileLoadMatch
{
    public string $id;
}

/** Request payload for File#list. */
class FileListMatch
{
    public ?string $purpose = null;
}

/** Request payload for File#create. */
class FileCreateData
{
    public ?string $bucket = null;
    public ?float $bytes = null;
    public string $createdAt;
    public string $id;
    public ?string $key = null;
    public ?array $metadata = null;
    public ?string $mimetype = null;
    public ?string $name = null;
    public ?string $object = null;
    public string $orgId;
    public ?string $originalName = null;
    public ?float $parsedTextBytes = null;
    public ?string $parsedTextUrl = null;
    public ?string $path = null;
    public ?string $purpose = null;
    public ?string $status = null;
    public string $updatedAt;
    public ?string $url = null;
}

/** Request payload for File#update. */
class FileUpdateData
{
    public string $id;
    public ?string $bucket = null;
    public ?float $bytes = null;
    public ?string $createdAt = null;
    public ?string $key = null;
    public ?array $metadata = null;
    public ?string $mimetype = null;
    public ?string $name = null;
    public ?string $object = null;
    public ?string $orgId = null;
    public ?string $originalName = null;
    public ?float $parsedTextBytes = null;
    public ?string $parsedTextUrl = null;
    public ?string $path = null;
    public ?string $purpose = null;
    public ?string $status = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for File#remove. */
class FileRemoveMatch
{
    public string $id;
}

/** Insight entity data model. */
class Insight
{
    public string $createdAt;
    public string $id;
    public ?string $name = null;
    public string $orgId;
    public ?string $systemKey = null;
    public string $type;
    public string $updatedAt;
}

/** Request payload for Insight#load. */
class InsightLoadMatch
{
    public string $id;
}

/** Request payload for Insight#list. */
class InsightListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $id = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Insight#create. */
class InsightCreateData
{
    public string $createdAt;
    public string $id;
    public ?string $name = null;
    public string $orgId;
    public ?string $systemKey = null;
    public string $type;
    public string $updatedAt;
}

/** Request payload for Insight#update. */
class InsightUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $systemKey = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
}

/** Request payload for Insight#remove. */
class InsightRemoveMatch
{
    public string $id;
}

/** KnowledgeBase entity data model. */
class KnowledgeBase
{
    public string $createdAt;
    public ?string $description = null;
    public array $files;
    public string $id;
    public string $name;
    public string $orgId;
    public string $toolId;
    public string $updatedAt;
}

/** Request payload for KnowledgeBase#load. */
class KnowledgeBaseLoadMatch
{
    public string $id;
}

/** Request payload for KnowledgeBase#list. */
class KnowledgeBaseListMatch
{
    public ?float $limit = null;
}

/** Request payload for KnowledgeBase#create. */
class KnowledgeBaseCreateData
{
    public string $createdAt;
    public ?string $description = null;
    public array $files;
    public string $id;
    public string $name;
    public string $orgId;
    public string $toolId;
    public string $updatedAt;
}

/** Request payload for KnowledgeBase#update. */
class KnowledgeBaseUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?array $files = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $toolId = null;
    public ?string $updatedAt = null;
}

/** Request payload for KnowledgeBase#remove. */
class KnowledgeBaseRemoveMatch
{
    public string $id;
}

/** KnowledgeBaseV2File entity data model. */
class KnowledgeBaseV2File
{
    public ?float $bytes = null;
    public string $createdAt;
    public string $fileId;
    public ?string $fileName = null;
    public string $id;
    public string $knowledgeBaseV2Id;
    public ?string $mimetype = null;
    public string $status;
    public string $updatedAt;
}

/** Request payload for KnowledgeBaseV2File#list. */
class KnowledgeBaseV2FileListMatch
{
    public string $id;
}

/** Request payload for KnowledgeBaseV2File#create. */
class KnowledgeBaseV2FileCreateData
{
    public string $id;
    public ?float $bytes = null;
    public string $createdAt;
    public string $fileId;
    public ?string $fileName = null;
    public string $knowledgeBaseV2Id;
    public ?string $mimetype = null;
    public string $status;
    public string $updatedAt;
}

/** Request payload for KnowledgeBaseV2File#remove. */
class KnowledgeBaseV2FileRemoveMatch
{
    public string $id;
    public string $knowledge_base_id;
}

/** Personality entity data model. */
class Personality
{
    public mixed $assistant;
    public string $createdAt;
    public string $id;
    public string $name;
    public string $orgId;
    public ?string $path = null;
    public string $updatedAt;
}

/** Request payload for Personality#load. */
class PersonalityLoadMatch
{
    public string $id;
}

/** Request payload for Personality#list. */
class PersonalityListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Personality#create. */
class PersonalityCreateData
{
    public mixed $assistant;
    public string $createdAt;
    public string $id;
    public string $name;
    public string $orgId;
    public ?string $path = null;
    public string $updatedAt;
}

/** Request payload for Personality#update. */
class PersonalityUpdateData
{
    public string $id;
    public mixed $assistant = null;
    public ?string $createdAt = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $path = null;
    public ?string $updatedAt = null;
}

/** Request payload for Personality#remove. */
class PersonalityRemoveMatch
{
    public string $id;
}

/** PhoneNumber entity data model. */
class PhoneNumber
{
    public ?string $id = null;
    public mixed $metadata;
    public array $results;
}

/** Request payload for PhoneNumber#load. */
class PhoneNumberLoadMatch
{
    public string $id;
}

/** Request payload for PhoneNumber#list. */
class PhoneNumberListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?float $limit = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for PhoneNumber#create. */
class PhoneNumberCreateData
{
    public ?string $id = null;
    public mixed $metadata;
    public array $results;
}

/** Request payload for PhoneNumber#update. */
class PhoneNumberUpdateData
{
    public string $id;
    public mixed $metadata = null;
    public ?array $results = null;
}

/** Request payload for PhoneNumber#remove. */
class PhoneNumberRemoveMatch
{
    public string $id;
}

/** Provider entity data model. */
class Provider
{
    public string $createdAt;
    public string $id;
    public array $metadata;
    public string $orgId;
    public string $provider;
    public array $resource;
    public string $resourceId;
    public string $resourceName;
    public array $results;
    public string $updatedAt;
}

/** Request payload for Provider#load. */
class ProviderLoadMatch
{
    public string $provider;
    public string $resource_name;
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $id = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $resource_id = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Provider#create. */
class ProviderCreateData
{
    public string $provider;
    public string $resource_name;
    public string $createdAt;
    public string $id;
    public array $metadata;
    public string $orgId;
    public array $resource;
    public string $resourceId;
    public string $resourceName;
    public array $results;
    public string $updatedAt;
}

/** Request payload for Provider#update. */
class ProviderUpdateData
{
    public string $id;
    public string $provider;
    public string $resource_name;
    public ?string $createdAt = null;
    public ?array $metadata = null;
    public ?string $orgId = null;
    public ?array $resource = null;
    public ?string $resourceId = null;
    public ?string $resourceName = null;
    public ?array $results = null;
    public ?string $updatedAt = null;
}

/** Request payload for Provider#remove. */
class ProviderRemoveMatch
{
    public string $id;
    public string $provider;
    public string $resource_name;
}

/** Scenario entity data model. */
class Scenario
{
    public string $createdAt;
    public array $evaluations;
    public ?array $hooks = null;
    public string $id;
    public string $instructions;
    public string $name;
    public string $orgId;
    public ?string $path = null;
    public mixed $targetOverrides = null;
    public ?array $toolMocks = null;
    public string $updatedAt;
}

/** Request payload for Scenario#load. */
class ScenarioLoadMatch
{
    public string $id;
}

/** Request payload for Scenario#list. */
class ScenarioListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?array $id_any = null;
    public ?float $limit = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Scenario#create. */
class ScenarioCreateData
{
    public string $createdAt;
    public array $evaluations;
    public ?array $hooks = null;
    public string $id;
    public string $instructions;
    public string $name;
    public string $orgId;
    public ?string $path = null;
    public mixed $targetOverrides = null;
    public ?array $toolMocks = null;
    public string $updatedAt;
}

/** Request payload for Scenario#update. */
class ScenarioUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?array $evaluations = null;
    public ?array $hooks = null;
    public ?string $instructions = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $path = null;
    public mixed $targetOverrides = null;
    public ?array $toolMocks = null;
    public ?string $updatedAt = null;
}

/** Request payload for Scenario#remove. */
class ScenarioRemoveMatch
{
    public string $id;
}

/** Scorecard entity data model. */
class Scorecard
{
    public ?array $assistantIds = null;
    public string $createdAt;
    public ?string $description = null;
    public string $id;
    public array $metrics;
    public ?string $name = null;
    public string $orgId;
    public string $updatedAt;
}

/** Request payload for Scorecard#load. */
class ScorecardLoadMatch
{
    public string $id;
}

/** Request payload for Scorecard#list. */
class ScorecardListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $id = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Scorecard#create. */
class ScorecardCreateData
{
    public ?array $assistantIds = null;
    public string $createdAt;
    public ?string $description = null;
    public string $id;
    public array $metrics;
    public ?string $name = null;
    public string $orgId;
    public string $updatedAt;
}

/** Request payload for Scorecard#update. */
class ScorecardUpdateData
{
    public string $id;
    public ?array $assistantIds = null;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?array $metrics = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $updatedAt = null;
}

/** Request payload for Scorecard#remove. */
class ScorecardRemoveMatch
{
    public string $id;
}

/** Session entity data model. */
class Session
{
    public mixed $artifact = null;
    public mixed $assistant = null;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public ?float $cost = null;
    public ?array $costs = null;
    public string $createdAt;
    public mixed $customer = null;
    public ?string $customerId = null;
    public ?float $expirationSeconds = null;
    public string $id;
    public ?array $messages = null;
    public ?string $name = null;
    public string $orgId;
    public mixed $phoneNumber = null;
    public ?string $phoneNumberId = null;
    public mixed $squad = null;
    public ?string $squadId = null;
    public ?string $status = null;
    public string $updatedAt;
}

/** Request payload for Session#load. */
class SessionLoadMatch
{
    public string $id;
}

/** Request payload for Session#list. */
class SessionListMatch
{
    public ?string $assistant_id = null;
    public ?string $assistant_id_any = null;
    public mixed $assistant_override = null;
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $customer_number_any = null;
    public ?string $email = null;
    public ?string $extension = null;
    public ?string $external_id = null;
    public ?string $id = null;
    public ?string $id_any = null;
    public ?float $limit = null;
    public ?string $name = null;
    public ?string $number = null;
    public ?bool $number_e164_check_enabled = null;
    public ?float $page = null;
    public ?string $phone_number_id = null;
    public ?array $phone_number_id_any = null;
    public ?string $sip_uri = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $squad_id = null;
    public mixed $squad_override = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
    public ?string $workflow_id = null;
}

/** Request payload for Session#create. */
class SessionCreateData
{
    public mixed $artifact = null;
    public mixed $assistant = null;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public ?float $cost = null;
    public ?array $costs = null;
    public string $createdAt;
    public mixed $customer = null;
    public ?string $customerId = null;
    public ?float $expirationSeconds = null;
    public string $id;
    public ?array $messages = null;
    public ?string $name = null;
    public string $orgId;
    public mixed $phoneNumber = null;
    public ?string $phoneNumberId = null;
    public mixed $squad = null;
    public ?string $squadId = null;
    public ?string $status = null;
    public string $updatedAt;
}

/** Request payload for Session#update. */
class SessionUpdateData
{
    public string $id;
    public mixed $artifact = null;
    public mixed $assistant = null;
    public ?string $assistantId = null;
    public mixed $assistantOverrides = null;
    public ?float $cost = null;
    public ?array $costs = null;
    public ?string $createdAt = null;
    public mixed $customer = null;
    public ?string $customerId = null;
    public ?float $expirationSeconds = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public mixed $phoneNumber = null;
    public ?string $phoneNumberId = null;
    public mixed $squad = null;
    public ?string $squadId = null;
    public ?string $status = null;
    public ?string $updatedAt = null;
}

/** Request payload for Session#remove. */
class SessionRemoveMatch
{
    public string $id;
}

/** Simulation entity data model. */
class Simulation
{
    public ?string $assistantId = null;
    public string $createdAt;
    public string $id;
    public ?string $name = null;
    public string $orgId;
    public ?string $path = null;
    public string $personalityId;
    public string $scenarioId;
    public ?string $squadId = null;
    public string $updatedAt;
}

/** Request payload for Simulation#load. */
class SimulationLoadMatch
{
    public string $id;
}

/** Request payload for Simulation#list. */
class SimulationListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?array $id_any = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?bool $standalone_only = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Simulation#create. */
class SimulationCreateData
{
    public ?string $assistantId = null;
    public string $createdAt;
    public string $id;
    public ?string $name = null;
    public string $orgId;
    public ?string $path = null;
    public string $personalityId;
    public string $scenarioId;
    public ?string $squadId = null;
    public string $updatedAt;
}

/** Request payload for Simulation#update. */
class SimulationUpdateData
{
    public string $id;
    public ?string $assistantId = null;
    public ?string $createdAt = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $path = null;
    public ?string $personalityId = null;
    public ?string $scenarioId = null;
    public ?string $squadId = null;
    public ?string $updatedAt = null;
}

/** Request payload for Simulation#remove. */
class SimulationRemoveMatch
{
    public string $id;
}

/** SimulationRun entity data model. */
class SimulationRun
{
    public string $createdAt;
    public ?string $endedAt = null;
    public ?string $endedReason = null;
    public string $id;
    public mixed $itemCounts = null;
    public ?float $iterations = null;
    public string $orgId;
    public string $queuedAt;
    public array $simulations;
    public ?string $startedAt = null;
    public string $status;
    public mixed $target;
    public mixed $transport = null;
    public string $updatedAt;
}

/** Request payload for SimulationRun#load. */
class SimulationRunLoadMatch
{
    public string $id;
}

/** Request payload for SimulationRun#create. */
class SimulationRunCreateData
{
    public string $createdAt;
    public ?string $endedAt = null;
    public ?string $endedReason = null;
    public string $id;
    public mixed $itemCounts = null;
    public ?float $iterations = null;
    public string $orgId;
    public string $queuedAt;
    public array $simulations;
    public ?string $startedAt = null;
    public string $status;
    public mixed $target;
    public mixed $transport = null;
    public string $updatedAt;
}

/** Request payload for SimulationRun#update. */
class SimulationRunUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?string $endedAt = null;
    public ?string $endedReason = null;
    public mixed $itemCounts = null;
    public ?float $iterations = null;
    public ?string $orgId = null;
    public ?string $queuedAt = null;
    public ?array $simulations = null;
    public ?string $startedAt = null;
    public ?string $status = null;
    public mixed $target = null;
    public mixed $transport = null;
    public ?string $updatedAt = null;
}

/** SimulationRunItem entity data model. */
class SimulationRunItem
{
    public ?string $callId = null;
    public ?string $canceledAt = null;
    public ?string $completedAt = null;
    public mixed $configurations = null;
    public string $createdAt;
    public ?string $failedAt = null;
    public ?string $failureReason = null;
    public ?array $hooks = null;
    public string $id;
    public mixed $improvementSuggestions = null;
    public ?float $iterationNumber = null;
    public mixed $metadata = null;
    public string $orgId;
    public ?string $personalityId = null;
    public string $queuedAt;
    public mixed $results = null;
    public ?string $runId = null;
    public ?string $scenarioId = null;
    public ?string $sessionId = null;
    public string $simulationId;
    public ?string $startedAt = null;
    public string $status;
    public string $updatedAt;
}

/** Request payload for SimulationRunItem#load. */
class SimulationRunItemLoadMatch
{
    public string $id;
    public string $run_id;
}

/** Request payload for SimulationRunItem#list. */
class SimulationRunItemListMatch
{
    public ?string $run_id = null;
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $simulation_id = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $status = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for SimulationRunItem#create. */
class SimulationRunItemCreateData
{
    public string $item_id;
    public string $run_id;
    public string $force;
    public ?string $persist = null;
    public ?string $callId = null;
    public ?string $canceledAt = null;
    public ?string $completedAt = null;
    public mixed $configurations = null;
    public string $createdAt;
    public ?string $failedAt = null;
    public ?string $failureReason = null;
    public ?array $hooks = null;
    public string $id;
    public mixed $improvementSuggestions = null;
    public ?float $iterationNumber = null;
    public mixed $metadata = null;
    public string $orgId;
    public ?string $personalityId = null;
    public string $queuedAt;
    public mixed $results = null;
    public ?string $runId = null;
    public ?string $scenarioId = null;
    public ?string $sessionId = null;
    public string $simulationId;
    public ?string $startedAt = null;
    public string $status;
    public string $updatedAt;
}

/** Request payload for SimulationRunItem#update. */
class SimulationRunItemUpdateData
{
    public string $id;
    public string $run_id;
    public ?string $callId = null;
    public ?string $canceledAt = null;
    public ?string $completedAt = null;
    public mixed $configurations = null;
    public ?string $createdAt = null;
    public ?string $failedAt = null;
    public ?string $failureReason = null;
    public ?array $hooks = null;
    public mixed $improvementSuggestions = null;
    public ?float $iterationNumber = null;
    public mixed $metadata = null;
    public ?string $orgId = null;
    public ?string $personalityId = null;
    public ?string $queuedAt = null;
    public mixed $results = null;
    public ?string $runId = null;
    public ?string $scenarioId = null;
    public ?string $sessionId = null;
    public ?string $simulationId = null;
    public ?string $startedAt = null;
    public ?string $status = null;
    public ?string $updatedAt = null;
}

/** SimulationSuite entity data model. */
class SimulationSuite
{
    public string $createdAt;
    public string $id;
    public string $name;
    public string $orgId;
    public ?string $path = null;
    public array $simulationIds;
    public ?string $slackWebhookUrl = null;
    public array $targetAssignments;
    public string $updatedAt;
}

/** Request payload for SimulationSuite#load. */
class SimulationSuiteLoadMatch
{
    public string $id;
}

/** Request payload for SimulationSuite#list. */
class SimulationSuiteListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?float $limit = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for SimulationSuite#create. */
class SimulationSuiteCreateData
{
    public string $createdAt;
    public string $id;
    public string $name;
    public string $orgId;
    public ?string $path = null;
    public array $simulationIds;
    public ?string $slackWebhookUrl = null;
    public array $targetAssignments;
    public string $updatedAt;
}

/** Request payload for SimulationSuite#update. */
class SimulationSuiteUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $path = null;
    public ?array $simulationIds = null;
    public ?string $slackWebhookUrl = null;
    public ?array $targetAssignments = null;
    public ?string $updatedAt = null;
}

/** Request payload for SimulationSuite#remove. */
class SimulationSuiteRemoveMatch
{
    public string $id;
}

/** Squad entity data model. */
class Squad
{
    public string $createdAt;
    public string $id;
    public ?string $latestVersion = null;
    public array $members;
    public mixed $membersOverrides = null;
    public ?array $modelDeprecations = null;
    public ?string $name = null;
    public string $orgId;
    public string $updatedAt;
}

/** Request payload for Squad#load. */
class SquadLoadMatch
{
    public string $id;
}

/** Request payload for Squad#list. */
class SquadListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?array $id_any = null;
    public ?float $limit = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Squad#create. */
class SquadCreateData
{
    public string $createdAt;
    public string $id;
    public ?string $latestVersion = null;
    public array $members;
    public mixed $membersOverrides = null;
    public ?array $modelDeprecations = null;
    public ?string $name = null;
    public string $orgId;
    public string $updatedAt;
}

/** Request payload for Squad#update. */
class SquadUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?string $latestVersion = null;
    public ?array $members = null;
    public mixed $membersOverrides = null;
    public ?array $modelDeprecations = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $updatedAt = null;
}

/** Request payload for Squad#remove. */
class SquadRemoveMatch
{
    public string $id;
}

/** StructuredOutput entity data model. */
class StructuredOutput
{
    public ?array $assistantIds = null;
    public mixed $compliancePlan = null;
    public ?array $conditions = null;
    public string $createdAt;
    public ?string $description = null;
    public string $id;
    public mixed $model = null;
    public string $name;
    public string $orgId;
    public ?string $regex = null;
    public mixed $schema;
    public ?string $type = null;
    public string $updatedAt;
    public ?array $workflowIds = null;
}

/** Request payload for StructuredOutput#load. */
class StructuredOutputLoadMatch
{
    public string $id;
}

/** Request payload for StructuredOutput#list. */
class StructuredOutputListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?string $id = null;
    public ?float $limit = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for StructuredOutput#create. */
class StructuredOutputCreateData
{
    public ?array $assistantIds = null;
    public mixed $compliancePlan = null;
    public ?array $conditions = null;
    public string $createdAt;
    public ?string $description = null;
    public string $id;
    public mixed $model = null;
    public string $name;
    public string $orgId;
    public ?string $regex = null;
    public mixed $schema;
    public ?string $type = null;
    public string $updatedAt;
    public ?array $workflowIds = null;
}

/** Request payload for StructuredOutput#update. */
class StructuredOutputUpdateData
{
    public string $id;
    public string $schema_override;
    public ?array $assistantIds = null;
    public mixed $compliancePlan = null;
    public ?array $conditions = null;
    public ?string $createdAt = null;
    public ?string $description = null;
    public mixed $model = null;
    public ?string $name = null;
    public ?string $orgId = null;
    public ?string $regex = null;
    public mixed $schema = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
    public ?array $workflowIds = null;
}

/** Request payload for StructuredOutput#remove. */
class StructuredOutputRemoveMatch
{
    public string $id;
}

/** Tool entity data model. */
class Tool
{
    public ?string $id = null;
}

/** Request payload for Tool#load. */
class ToolLoadMatch
{
    public string $id;
}

/** Request payload for Tool#list. */
class ToolListMatch
{
    public ?string $created_at_ge = null;
    public ?string $created_at_gt = null;
    public ?string $created_at_le = null;
    public ?string $created_at_lt = null;
    public ?float $limit = null;
    public ?string $updated_at_ge = null;
    public ?string $updated_at_gt = null;
    public ?string $updated_at_le = null;
    public ?string $updated_at_lt = null;
}

/** Request payload for Tool#create. */
class ToolCreateData
{
    public ?string $id = null;
}

/** Request payload for Tool#update. */
class ToolUpdateData
{
    public string $id;
}

/** Request payload for Tool#remove. */
class ToolRemoveMatch
{
    public string $id;
}

