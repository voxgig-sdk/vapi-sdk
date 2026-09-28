
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { VapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = VapiSDK.test()
    equal(testsdk instanceof VapiSDK, true,
      'VapiSDK.test() must return a client synchronously')
  })

})
