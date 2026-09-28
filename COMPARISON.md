# Vapi: the Voxgig SDK and the Fern SDK compared

Vergleich: Fern. Compared with VapiAI/server-sdk-typescript (@vapi-ai/server-sdk 2.0.1). Spec: VapiAI/docs fern/apis/api/openapi.json at 6ead80d, the Fern input, OAS 3.0.0, 71 paths / 139 ops, MIT (inherited from VapiAI/docs). Added 2026-09-28.

This repository is on the admin **vergleich** list. It is built only to be compared, and it is not published.

## Scorecard

| | Voxgig | Fern |
|---|---|---|
| SDK | this repository, commit `b235642`: eight targets (go, go-cli, go-mcp, ts, py, rb, lua, php) | `@vapi-ai/server-sdk@2.0.1` (TypeScript) |
| Input | `vapi-openapi.json`: OAS 3.0.0, `info.version` 1.0, 71 paths, 139 operations | the vendor's own generation; the note above names the definition version it came from |
| Operations callable | 139 of 139 | 139 operation methods |
| Entities | 25 | not applicable |
| ts package | 2.99 MB, 344 files | 9.68 MB, 10563 files |
| Runtime dependencies | 0 | 0 |
| Generated tests | ts 331 pass / 0 fail; py 333 pass; rb 357 runs / 0 fail; lua 331 pass / 0 fail; php 357 tests, 0 fail; go, go-cli, go-mcp build, vet and test | not run: a published package |
| Determinism | a second generation on the same toolchain is byte-identical | not measured |
| Scenario against a mock | 4 of 4 steps right, 0 request violations (minimock) | 4 of 4 steps right, 0 request violations (minimock) |

## Features

Voxgig's features are opt-in; these builds enable the standard set. The Fern column is read from the published package, with the evidence below.

| Feature | Voxgig | Fern |
|---|---|---|
| Retries | yes | yes |
| Timeouts | yes | yes |
| Pagination helper | partial | no |
| Idempotency keys | yes | no |
| Rate-limit handling | yes | yes |
| Logging / debug | yes | yes |
| Built-in offline test mode | yes | no |
| Metrics / telemetry | partial | no |
| Cancellation | yes | yes |
| Hooks / middleware | yes | partial |

**Evidence, Fern.**

- Retries: dist/cjs/core/fetcher/requestWithRetries.js: status 408, 429, >=500 only (thrown network/timeout errors are not retried); maxRetries default 2; 1s x 2^n backoff, +/-10% jitter, max 60s.
- Timeouts: timeoutInSeconds on client and per request (dist/cjs/BaseClient.d.ts), default 60s, enforced by an AbortController in core/fetcher/makeRequest.js.
- Pagination helper: No core/pagination, Page class or async iterator in dist/cjs. Paginated endpoints (e.g. phoneNumberControllerFindAllPaginated) take page/limit and return a plain body.
- Idempotency keys: Searched idempot across dist/cjs: only a doc comment in api/types/SimulationRunItemMetadata.d.ts. No key is sent or generated.
- Rate-limit handling: requestWithRetries.js getRetryDelayFromHeaders: on 429 waits per Retry-After (seconds or date) or X-RateLimit-Reset, capped at 60s, within the 2-retry budget. No throttling.
- Logging / debug: logging option (dist/cjs/core/logging/logger.js): level, custom logger, silent (default true). core/fetcher/Fetcher.js logs requests and responses with secrets redacted. No env var.
- Built-in offline test mode: Searched mock/testMode/fake: hits are only Vapi eval API models (e.g. ChatEvalUserMessageMockRole). No mock mode or test transport.
- Metrics / telemetry: Searched opentelemetry/telemetry/tracer/traceparent: 0 hits. Only X-Fern-* SDK and runtime identification headers (dist/cjs/BaseClient.js), which are not metrics.
- Cancellation: Per-request abortSignal (BaseRequestOptions, dist/cjs/BaseClient.d.ts), merged with the timeout signal by core/fetcher/signals.js anySignal; abort -> VapiError.
- Hooks / middleware: No hook or middleware API. BaseClientOptions.fetch (custom fetch) and fetcher (replaces the request function) let a caller wrap requests; the README calls it break-glass.
- Auth: new VapiClient({ token }) (string or supplier) -> Authorization: Bearer, in dist/cjs/auth/BearerAuthProvider.js. No env-var default.
- Errors: Partly: 400/401/402/404/409/500/503 classes (BadRequestError, NotFoundError, ...) are thrown by only 19 of 139 endpoints; the rest throw a generic VapiError carrying statusCode.

**Evidence, Voxgig.**

- Retries: retry feature: 408, 425, 429 and 5xx, honouring Retry-After.
- Timeouts: timeout feature: 30 s per attempt by default.
- Pagination helper: paging feature: page and cursor state carried between calls (ctrl.paging); no iterator.
- Idempotency keys: idempotency feature: generates an Idempotency-Key for mutating calls, stable across retries.
- Rate-limit handling: ratelimit feature: client-side token bucket; retry honours Retry-After on 429.
- Logging / debug: debug feature: request and response logging with auth headers redacted.
- Built-in offline test mode: test feature: an offline mock transport; every generated suite runs on it.
- Metrics / telemetry: metrics feature: per-operation counts and timings; no OpenTelemetry.
- Cancellation: an AbortSignal per call (callopts.signal).
- Hooks / middleware: extend: custom features hook every pipeline stage.

## Scenario

✓ right, ⚠ returned without error but with the wrong data, ✗ failed.

Each SDK lists one resource, loads and removes the first item it listed, and creates one from the definition's own example or required fields, against a mock built from the same vendor definition. The mock is Prism: static mode answers with the definition's examples, and dynamic mode generates schema-valid data. Each SDK is credited with its better mode. Request violations are Prism's verdicts on what the SDK sent.

- **Voxgig, minimock:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
- **Fern, minimock:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`

## Voxgig toolchain findings

- **TS-NAMES** (@voxgig/sdkgen 4.30.2). An entity named operation, context or control collided with the SDK types the ts entity file imports (TS2300: Neon, Novu). An entity named eval produced `const eval` in the README examples (TS1215: Vapi). Fixed in voxgig/sdkgen#210, released in 4.30.3. All eight SDKs are built on 4.30.3.
- **QUERY-ECHO** (@voxgig/sdkgen 4.30.3 (PrepareQuery: ts, js and rb read the field; other targets not checked)). Every match field, path parameters included, is also sent as a query parameter: GET /video/v1/assets/a1?id=a1 (Mux), GET /assistant/asst_1?id=asst_1 (Vapi), DELETE .../containers/web?id=web&organization_name=acme&project_id=demo (SaladCloud). prepareQuery excludes names in point.params, but the generated config carries path parameters in point.args.params (which prepareParams reads), so nothing is excluded. Harmless to a lenient server, rejected by a strict one. Prism logs paths without query strings, so its runs did not show it. Reported, not changed: the same exclusion exists per target.
- **DOCS-QA** (@voxgig/docgen 0.29.2 (the generated Documentation workflow)). The generated API pages quote each vendor's own descriptions, and the Documentation workflow runs its prose checks over them. Vale reads identifiers such as `asset_id` as misspellings (272 errors on Mux, 44 on Neon), and docgen's own rules reject the vendor's repeated words and first-person prose (Apicurio). Vapi and Maxio fail the same step. Every SDK's tests pass on every target; only the documentation check fails. Reported, not changed: whether a vendor's text is prose-checked is docgen's design. Lob and Novu fail earlier, at generation, on the unpatched YAML parser (Y1-Y3). SaladCloud's pages pass the check; only the deploy fails, because GitHub Pages is not enabled for the repository.

## How this was measured

- Operations: the definition's operations are counted over its paths. Voxgig's are the generated model's points, less those under an op no target generates. The compared SDK's are the operation methods in its published package, counted per generator (method declarations, request-builder verbs, or functions per operation).
- Package size and file count: `npm pack --dry-run` for the Voxgig ts target, and the registry's `dist.unpackedSize` and `dist.fileCount` for the compared package.
- Tests: `admin/scripts/cedar-test-all.sh` runs each target's generated suite.
- Features: read from the code of the published package, crediting a feature only for a mechanism, not a word in the API's own models.

