package voxgigvapisdk

import (
	"github.com/voxgig-sdk/vapi-sdk/go/core"
	"github.com/voxgig-sdk/vapi-sdk/go/entity"
	"github.com/voxgig-sdk/vapi-sdk/go/feature"
	_ "github.com/voxgig-sdk/vapi-sdk/go/utility"
)

// Type aliases preserve external API.
type VapiSDK = core.VapiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type VapiEntity = core.VapiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type VapiError = core.VapiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAnalyticsEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewAnalyticsEntity(client, entopts)
	}
	core.NewAssistantEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewAssistantEntity(client, entopts)
	}
	core.NewBoardEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewBoardEntity(client, entopts)
	}
	core.NewCallEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewCallEntity(client, entopts)
	}
	core.NewCampaignEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewCampaignEntity(client, entopts)
	}
	core.NewChatEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewChatEntity(client, entopts)
	}
	core.NewCreateSimulationRunEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewCreateSimulationRunEntity(client, entopts)
	}
	core.NewEvalEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewEvalEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewInsightEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewInsightEntity(client, entopts)
	}
	core.NewKnowledgeBaseEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewKnowledgeBaseEntity(client, entopts)
	}
	core.NewKnowledgeBaseV2FileEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewKnowledgeBaseV2FileEntity(client, entopts)
	}
	core.NewPersonalityEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewPersonalityEntity(client, entopts)
	}
	core.NewPhoneNumberEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewPhoneNumberEntity(client, entopts)
	}
	core.NewProviderEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewProviderEntity(client, entopts)
	}
	core.NewScenarioEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewScenarioEntity(client, entopts)
	}
	core.NewScorecardEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewScorecardEntity(client, entopts)
	}
	core.NewSessionEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewSessionEntity(client, entopts)
	}
	core.NewSimulationEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewSimulationEntity(client, entopts)
	}
	core.NewSimulationRunEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewSimulationRunEntity(client, entopts)
	}
	core.NewSimulationRunItemEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewSimulationRunItemEntity(client, entopts)
	}
	core.NewSimulationSuiteEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewSimulationSuiteEntity(client, entopts)
	}
	core.NewSquadEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewSquadEntity(client, entopts)
	}
	core.NewStructuredOutputEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewStructuredOutputEntity(client, entopts)
	}
	core.NewToolEntityFunc = func(client *core.VapiSDK, entopts map[string]any) core.VapiEntity {
		return entity.NewToolEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewVapiSDK = core.NewVapiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewVapiSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *VapiSDK  { return NewVapiSDK(nil) }
func Test() *VapiSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
