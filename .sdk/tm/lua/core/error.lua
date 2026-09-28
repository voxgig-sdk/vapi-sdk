-- Vapi SDK error

local VapiError = {}
VapiError.__index = VapiError


function VapiError.new(code, msg, ctx)
  local self = setmetatable({}, VapiError)
  self.is_sdk_error = true
  self.sdk = "Vapi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function VapiError:error()
  return self.msg
end


function VapiError:__tostring()
  return self.msg
end


return VapiError
