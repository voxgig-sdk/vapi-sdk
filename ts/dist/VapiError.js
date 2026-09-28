"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VapiError = void 0;
class VapiError extends Error {
    isVapiError = true;
    sdk = 'Vapi';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.VapiError = VapiError;
//# sourceMappingURL=VapiError.js.map