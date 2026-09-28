# Vapi SDK feature factory

from vapi_sdk.feature.base_feature import VapiBaseFeature
from vapi_sdk.feature.debug_feature import VapiDebugFeature
from vapi_sdk.feature.idempotency_feature import VapiIdempotencyFeature
from vapi_sdk.feature.metrics_feature import VapiMetricsFeature
from vapi_sdk.feature.paging_feature import VapiPagingFeature
from vapi_sdk.feature.ratelimit_feature import VapiRatelimitFeature
from vapi_sdk.feature.retry_feature import VapiRetryFeature
from vapi_sdk.feature.test_feature import VapiTestFeature
from vapi_sdk.feature.timeout_feature import VapiTimeoutFeature


_FEATURES = {
    "base": lambda: VapiBaseFeature(),
    "debug": lambda: VapiDebugFeature(),
    "idempotency": lambda: VapiIdempotencyFeature(),
    "metrics": lambda: VapiMetricsFeature(),
    "paging": lambda: VapiPagingFeature(),
    "ratelimit": lambda: VapiRatelimitFeature(),
    "retry": lambda: VapiRetryFeature(),
    "test": lambda: VapiTestFeature(),
    "timeout": lambda: VapiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
