# Vapi SDK utility: make_context

from vapi_sdk.core.context import VapiContext


def make_context_util(ctxmap, basectx):
    return VapiContext(ctxmap, basectx)
