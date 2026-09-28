# Vapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module VapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      VapiBaseFeature.new
    when "debug"
      VapiDebugFeature.new
    when "idempotency"
      VapiIdempotencyFeature.new
    when "metrics"
      VapiMetricsFeature.new
    when "paging"
      VapiPagingFeature.new
    when "ratelimit"
      VapiRatelimitFeature.new
    when "retry"
      VapiRetryFeature.new
    when "test"
      VapiTestFeature.new
    when "timeout"
      VapiTimeoutFeature.new
    else
      VapiBaseFeature.new
    end
  end
end
