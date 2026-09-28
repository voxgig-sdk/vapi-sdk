# Vapi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

VapiUtility.registrar = ->(u) {
  u.clean = VapiUtilities::Clean
  u.done = VapiUtilities::Done
  u.make_error = VapiUtilities::MakeError
  u.feature_add = VapiUtilities::FeatureAdd
  u.feature_hook = VapiUtilities::FeatureHook
  u.feature_init = VapiUtilities::FeatureInit
  u.fetcher = VapiUtilities::Fetcher
  u.make_fetch_def = VapiUtilities::MakeFetchDef
  u.make_context = VapiUtilities::MakeContext
  u.make_options = VapiUtilities::MakeOptions
  u.make_request = VapiUtilities::MakeRequest
  u.make_response = VapiUtilities::MakeResponse
  u.make_result = VapiUtilities::MakeResult
  u.make_point = VapiUtilities::MakePoint
  u.make_spec = VapiUtilities::MakeSpec
  u.make_url = VapiUtilities::MakeUrl
  u.param = VapiUtilities::Param
  u.prepare_auth = VapiUtilities::PrepareAuth
  u.prepare_body = VapiUtilities::PrepareBody
  u.prepare_headers = VapiUtilities::PrepareHeaders
  u.prepare_method = VapiUtilities::PrepareMethod
  u.prepare_params = VapiUtilities::PrepareParams
  u.prepare_path = VapiUtilities::PreparePath
  u.prepare_query = VapiUtilities::PrepareQuery
  u.graphql_body = VapiUtilities::GraphqlBody
  u.graphql_errors = VapiUtilities::GraphqlErrors
  u.result_basic = VapiUtilities::ResultBasic
  u.result_body = VapiUtilities::ResultBody
  u.result_headers = VapiUtilities::ResultHeaders
  u.transform_request = VapiUtilities::TransformRequest
  u.transform_response = VapiUtilities::TransformResponse
}
