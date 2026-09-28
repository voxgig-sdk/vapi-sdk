package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAnalyticsEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewAssistantEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewBoardEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewCallEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewCampaignEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewChatEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewCreateSimulationRunEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewEvalEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewFileEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewInsightEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewKnowledgeBaseEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewKnowledgeBaseV2FileEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewPersonalityEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewPhoneNumberEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewProviderEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewScenarioEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewScorecardEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewSessionEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewSimulationEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewSimulationRunEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewSimulationRunItemEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewSimulationSuiteEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewSquadEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewStructuredOutputEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

var NewToolEntityFunc func(client *VapiSDK, entopts map[string]any) VapiEntity

