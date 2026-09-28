# Vapi SDK exists test

require "minitest/autorun"
require_relative "../Vapi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = VapiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
