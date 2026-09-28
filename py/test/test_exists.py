# Vapi SDK exists test

import pytest
from vapi_sdk import VapiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = VapiSDK.test(None, None)
        assert testsdk is not None
