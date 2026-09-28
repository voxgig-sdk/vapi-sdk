# Vapi SDK utility: make_context
require_relative '../core/context'
module VapiUtilities
  MakeContext = ->(ctxmap, basectx) {
    VapiContext.new(ctxmap, basectx)
  }
end
