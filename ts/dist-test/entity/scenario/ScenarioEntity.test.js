"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ScenarioEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VAPI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VapiSDK.test();
        const ent = testsdk.Scenario();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VAPI_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'scenario.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "This is the ISO 8601 date-time string of when the scenario was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 0 }, "evaluations": { "a": true, "h": "Evaluations", "n": "evaluations", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "This is the structured output-based evaluation plan for the simulation.", "t": "`$ARRAY`", "union": { "branches": 5, "count": 3, "depth": 8 }, "key$": "evaluations", "index$": 1 }, "hooks": { "a": true, "h": "Hooks", "n": "hooks", "r": false, "sh": "Hooks to run on simulation lifecycle events", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "hooks", "index$": 2 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "This is the unique identifier for the scenario.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "instructions": { "a": true, "h": "Instructions", "n": "instructions", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "This is the script/instructions for the tester to follow during the simulation.", "t": "`$STRING`", "key$": "instructions", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "This is the name of the scenario.", "t": "`$STRING`", "key$": "name", "index$": 5 }, "orgId": { "a": true, "fo": "uuid", "h": "Org Id", "n": "orgId", "r": true, "sh": "This is the unique identifier for the organization this scenario belongs to.", "t": "`$STRING`", "key$": "orgId", "index$": 6 }, "path": { "a": true, "h": "Path", "n": "path", "r": false, "sh": "Optional folder path for organizing scenarios.", "t": "`$STRING`", "key$": "path", "index$": 7 }, "targetOverrides": { "a": true, "h": "Target Overrides", "n": "targetOverrides", "r": false, "sh": "Overrides to inject into the simulated target assistant or squad", "t": "`$ANY`", "union": { "branches": 23, "count": 5356, "depth": 42 }, "key$": "targetOverrides", "index$": 8 }, "toolMocks": { "a": true, "h": "Tool Mocks", "n": "toolMocks", "r": false, "sh": "Scenario-level tool call mocks to use during simulations.", "t": "`$ARRAY`", "key$": "toolMocks", "index$": 9 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "sh": "This is the ISO 8601 date-time string of when the scenario was last updated.", "t": "`$STRING`", "key$": "updatedAt", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "scenario", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /eval/simulation/scenario", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/eval/simulation/scenario", "q": {}, "r": {}, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "scenario" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /eval/simulation/scenario", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "created_at_ge", "or": "created_at_ge", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "created_at_gt", "or": "created_at_gt", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "created_at_le", "or": "created_at_le", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "created_at_lt", "or": "created_at_lt", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "id_any", "or": "id_any", "r": false, "t": "`$ARRAY`", "index$": 4 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 7 }, { "a": true, "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "sort_order", "or": "sort_order", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "updated_at_ge", "or": "updated_at_ge", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "updated_at_gt", "or": "updated_at_gt", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "updated_at_le", "or": "updated_at_le", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "updated_at_lt", "or": "updated_at_lt", "r": false, "t": "`$STRING`", "index$": 13 }] }, "k": "http", "m": "GET", "o": "/eval/simulation/scenario", "q": { "exist": ["created_at_ge", "created_at_gt", "created_at_le", "created_at_lt", "id_any", "limit", "name", "page", "sort_by", "sort_order", "updated_at_ge", "updated_at_gt", "updated_at_le", "updated_at_lt"] }, "r": {}, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "scenario" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /eval/simulation/scenario/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/eval/simulation/scenario/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "scenario" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /eval/simulation/scenario/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/eval/simulation/scenario/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "scenario" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /eval/simulation/scenario/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/eval/simulation/scenario/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "scenario" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "scenario", "name__orig": "scenario", "Name": "Scenario", "name_": "scenario", "name-": "scenario", "NAME": "SCENARIO", "index$": 15 }, { "active": true, "entity": "scenario", "key$": "BasicScenarioFlow", "kind": "basic", "name": "BasicScenarioFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "scenario_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "scenario_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "scenario_ref01", "srcdatavar": "scenario_ref01_data", "suffix": "_up0", "textfield": "createdAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-scenario_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "scenario_ref01", "srcdatavar": "scenario_ref01_data", "suffix": "_dt0" }, "m": { "id": "scenario01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-scenario_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "scenario_ref01", "suffix": "_rm0" }, "m": { "id": "scenario01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "scenario_ref01" } }], "index$": 5 }] }, 'Scenario', { "POST /eval/simulation/scenario": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "This is the name of the scenario.", "maxLength": 80, "example": "Health Enrollment - Eligible Path", "key$": "name" }, "instructions": { "type": "string", "description": "This is the script/instructions for the tester to follow during the simulation.", "maxLength": 10000, "example": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.", "key$": "instructions" }, "evaluations": { "description": "This is the structured output-based evaluation plan for the simulation.\nEach item defines a structured output to extract and evaluate against an expected value.", "type": "array", "items": { "type": "object", "properties": { "structuredOutputId": { "type": "string", "description": "This is the ID of an existing structured output to use for evaluation.\nMutually exclusive with structuredOutput.", "format": "uuid" }, "structuredOutput": { "description": "This is an inline structured output definition for evaluation.\nMutually exclusive with structuredOutputId.\nOnly primitive schema types (string, number, integer, boolean) are allowed.", "allOf": [] }, "path": { "type": "string", "description": "Optional dot-notation path to a primitive leaf when evaluating an object structured output.", "example": "contact.auth_started" }, "comparator": { "type": "string", "description": "This is the comparison operator to use when evaluating the extracted value against the expected value.\nAvailable operators depend on the structured output's schema type:\n- boolean: '=', '!='\n- string: '=', '!='\n- number/integer: '=', '!=', '>', '<', '>=', '<='", "enum": [], "example": "=" }, "value": { "description": "This is the expected value to compare against the extracted structured output result.\nType should match the structured output's schema type.", "oneOf": [] }, "required": { "type": "boolean", "description": "This is whether this evaluation must pass for the simulation to pass.\nDefaults to true. If false, the result is informational only.", "default": true } }, "required": ["comparator", "value"], "x-ref": "#/components/schemas/EvaluationPlanItem" }, "key$": "evaluations" }, "hooks": { "type": "array", "description": "Hooks to run on simulation lifecycle events", "items": { "oneOf": [{ "type": "object", "properties": {}, "required": [], "title": "SimulationHookCallStarted", "x-ref": "#/components/schemas/SimulationHookCallStarted" }, { "type": "object", "properties": {}, "required": [], "title": "SimulationHookCallEnded", "x-ref": "#/components/schemas/SimulationHookCallEnded" }] }, "key$": "hooks" }, "targetOverrides": { "description": "Overrides to inject into the simulated target assistant or squad", "example": { "variableValues": { "customerName": "Alice", "orderId": "12345" } }, "allOf": [{ "type": "object", "properties": { "transcriber": {}, "model": {}, "voice": {}, "firstMessage": {}, "firstMessageInterruptionsEnabled": {}, "firstMessageMode": {}, "voicemailDetection": {}, "clientMessages": {}, "serverMessages": {}, "maxDurationSeconds": {}, "backgroundSound": {}, "modelOutputInMessagesEnabled": {}, "transportConfigurations": {}, "observabilityPlan": {}, "credentials": {}, "hooks": {}, "tools:append": {}, "variableValues": {}, "name": {}, "voicemailMessage": {}, "endCallMessage": {}, "endCallPhrases": {}, "compliancePlan": {}, "metadata": {}, "backgroundSpeechDenoisingPlan": {}, "analysisPlan": {}, "artifactPlan": {}, "startSpeakingPlan": {}, "stopSpeakingPlan": {}, "monitorPlan": {}, "credentialIds": {}, "server": {}, "keypadInputPlan": {} }, "x-ref": "#/components/schemas/AssistantOverrides" }], "key$": "targetOverrides" }, "toolMocks": { "description": "Scenario-level tool call mocks to use during simulations.", "type": "array", "items": { "type": "object", "properties": { "toolName": { "type": "string", "description": "This is the tool call function name to mock (must match `toolCall.function.name`)." }, "result": { "type": "string", "description": "This is the result content to return for this tool call." }, "enabled": { "type": "boolean", "description": "This is whether this mock is enabled. Defaults to true when omitted.", "default": true } }, "required": ["toolName"], "x-ref": "#/components/schemas/ScenarioToolMock" }, "key$": "toolMocks" }, "path": { "type": "string", "nullable": true, "description": "Optional folder path for organizing scenarios.\nSupports up to 3 levels (e.g., \"dept/feature/variant\").\nMaps to GitOps resource folder structure.", "maxLength": 255, "pattern": "/^[a-zA-Z0-9][a-zA-Z0-9._-]*(?:\\/[a-zA-Z0-9][a-zA-Z0-9._-]*){0,2}$/", "key$": "path" } }, "required": ["name", "instructions", "evaluations"], "x-ref": "#/components/schemas/CreateScenarioDTO", "index$": 1 } } } }, "parameters": [] }, "GET /eval/simulation/scenario": { "protocol": "http", "parameters": [{ "name": "idAny", "required": false, "in": "query", "description": "Return only scenarios matching the provided ids", "schema": { "format": "uuid", "type": "array", "items": { "type": "string" } }, "index$": 0 }, { "name": "name", "required": false, "in": "query", "description": "Search by scenario name", "schema": { "type": "string" }, "index$": 1 }, { "name": "page", "required": false, "in": "query", "description": "This is the page number to return. Defaults to 1.", "schema": { "minimum": 1, "type": "number" }, "index$": 2 }, { "name": "sortOrder", "required": false, "in": "query", "description": "This is the sort order for pagination. Defaults to 'DESC'.", "schema": { "enum": ["ASC", "DESC"], "type": "string" }, "index$": 3 }, { "name": "sortBy", "required": false, "in": "query", "description": "This is the column to sort by. Defaults to 'createdAt'.", "schema": { "enum": ["createdAt", "duration", "cost"], "type": "string" }, "index$": 4 }, { "name": "limit", "required": false, "in": "query", "description": "This is the maximum number of items to return. Defaults to 100.", "schema": { "minimum": 0, "maximum": 1000, "type": "number" }, "index$": 5 }, { "name": "createdAtGt", "required": false, "in": "query", "description": "This will return items where the createdAt is greater than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 6 }, { "name": "createdAtLt", "required": false, "in": "query", "description": "This will return items where the createdAt is less than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 7 }, { "name": "createdAtGe", "required": false, "in": "query", "description": "This will return items where the createdAt is greater than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 8 }, { "name": "createdAtLe", "required": false, "in": "query", "description": "This will return items where the createdAt is less than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 9 }, { "name": "updatedAtGt", "required": false, "in": "query", "description": "This will return items where the updatedAt is greater than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 10 }, { "name": "updatedAtLt", "required": false, "in": "query", "description": "This will return items where the updatedAt is less than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 11 }, { "name": "updatedAtGe", "required": false, "in": "query", "description": "This will return items where the updatedAt is greater than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 12 }, { "name": "updatedAtLe", "required": false, "in": "query", "description": "This will return items where the updatedAt is less than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 13 }] }, "GET /eval/simulation/scenario/{id}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "description": "The unique identifier for the resource.", "schema": { "format": "uuid", "type": "string" }, "index$": 0 }] }, "DELETE /eval/simulation/scenario/{id}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "description": "The unique identifier for the resource.", "schema": { "format": "uuid", "type": "string" }, "index$": 0 }] }, "PATCH /eval/simulation/scenario/{id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "This is the name of the scenario.", "maxLength": 80, "key$": "name" }, "instructions": { "type": "string", "description": "This is the script/instructions for the tester to follow during the simulation.", "maxLength": 10000, "key$": "instructions" }, "evaluations": { "description": "This is the structured output-based evaluation plan for the simulation.\nEach item defines a structured output to extract and evaluate against an expected value.", "type": "array", "items": { "type": "object", "properties": { "structuredOutputId": { "type": "string", "description": "This is the ID of an existing structured output to use for evaluation.\nMutually exclusive with structuredOutput.", "format": "uuid" }, "structuredOutput": { "description": "This is an inline structured output definition for evaluation.\nMutually exclusive with structuredOutputId.\nOnly primitive schema types (string, number, integer, boolean) are allowed.", "allOf": [] }, "path": { "type": "string", "description": "Optional dot-notation path to a primitive leaf when evaluating an object structured output.", "example": "contact.auth_started" }, "comparator": { "type": "string", "description": "This is the comparison operator to use when evaluating the extracted value against the expected value.\nAvailable operators depend on the structured output's schema type:\n- boolean: '=', '!='\n- string: '=', '!='\n- number/integer: '=', '!=', '>', '<', '>=', '<='", "enum": [], "example": "=" }, "value": { "description": "This is the expected value to compare against the extracted structured output result.\nType should match the structured output's schema type.", "oneOf": [] }, "required": { "type": "boolean", "description": "This is whether this evaluation must pass for the simulation to pass.\nDefaults to true. If false, the result is informational only.", "default": true } }, "required": ["comparator", "value"], "x-ref": "#/components/schemas/EvaluationPlanItem" }, "key$": "evaluations" }, "hooks": { "type": "array", "description": "Hooks to run on simulation lifecycle events", "items": { "oneOf": [{ "type": "object", "properties": {}, "required": [], "title": "SimulationHookCallStarted", "x-ref": "#/components/schemas/SimulationHookCallStarted" }, { "type": "object", "properties": {}, "required": [], "title": "SimulationHookCallEnded", "x-ref": "#/components/schemas/SimulationHookCallEnded" }] }, "key$": "hooks" }, "targetOverrides": { "description": "Complete override replacement. Omitted credentials and redacted server secrets are preserved when their endpoint URL is unchanged. Send credentials: [] to clear credentials; omit a server container to remove it.", "example": { "variableValues": { "customerName": "Alice", "orderId": "12345" } }, "allOf": [{ "type": "object", "properties": { "transcriber": {}, "model": {}, "voice": {}, "firstMessage": {}, "firstMessageInterruptionsEnabled": {}, "firstMessageMode": {}, "voicemailDetection": {}, "clientMessages": {}, "serverMessages": {}, "maxDurationSeconds": {}, "backgroundSound": {}, "modelOutputInMessagesEnabled": {}, "transportConfigurations": {}, "observabilityPlan": {}, "credentials": {}, "hooks": {}, "tools:append": {}, "variableValues": {}, "name": {}, "voicemailMessage": {}, "endCallMessage": {}, "endCallPhrases": {}, "compliancePlan": {}, "metadata": {}, "backgroundSpeechDenoisingPlan": {}, "analysisPlan": {}, "artifactPlan": {}, "startSpeakingPlan": {}, "stopSpeakingPlan": {}, "monitorPlan": {}, "credentialIds": {}, "server": {}, "keypadInputPlan": {} }, "x-ref": "#/components/schemas/AssistantOverrides" }], "key$": "targetOverrides" }, "toolMocks": { "type": "array", "items": { "type": "object", "properties": { "toolName": { "type": "string", "description": "This is the tool call function name to mock (must match `toolCall.function.name`)." }, "result": { "type": "string", "description": "This is the result content to return for this tool call." }, "enabled": { "type": "boolean", "description": "This is whether this mock is enabled. Defaults to true when omitted.", "default": true } }, "required": ["toolName"], "x-ref": "#/components/schemas/ScenarioToolMock" }, "key$": "toolMocks" }, "path": { "type": "string", "nullable": true, "description": "Optional folder path for organizing scenarios.\nSupports up to 3 levels (e.g., \"dept/feature/variant\").\nSet to null to remove from folder.", "maxLength": 255, "pattern": "/^[a-zA-Z0-9][a-zA-Z0-9._-]*(?:\\/[a-zA-Z0-9][a-zA-Z0-9._-]*){0,2}$/", "key$": "path" } }, "x-ref": "#/components/schemas/UpdateScenarioDTO", "index$": 1 } } } }, "parameters": [{ "name": "id", "required": true, "in": "path", "description": "The unique identifier for the resource.", "schema": { "format": "uuid", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const scenario_ref01_ent = client.Scenario();
        let scenario_ref01_data = setup.data.new.scenario['scenario_ref01'];
        scenario_ref01_data = (await scenario_ref01_ent.create(scenario_ref01_data)).data();
        (0, node_assert_1.default)(null != scenario_ref01_data.id);
        // LIST
        const scenario_ref01_match = {};
        const scenario_ref01_list = (await scenario_ref01_ent.list(scenario_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(scenario_ref01_list, { id: scenario_ref01_data.id })));
        // UPDATE
        const scenario_ref01_data_up0 = {};
        scenario_ref01_data_up0.id = scenario_ref01_data.id;
        const scenario_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-scenario_ref01_' + setup.now };
        scenario_ref01_data_up0[scenario_ref01_markdef_up0.name] = scenario_ref01_markdef_up0.value;
        const scenario_ref01_resdata_up0 = (await scenario_ref01_ent.update(scenario_ref01_data_up0)).data();
        (0, node_assert_1.default)(scenario_ref01_resdata_up0.id === scenario_ref01_data_up0.id);
        (0, node_assert_1.default)(scenario_ref01_resdata_up0[scenario_ref01_markdef_up0.name] === scenario_ref01_markdef_up0.value);
        // LOAD
        const scenario_ref01_match_dt0 = {};
        scenario_ref01_match_dt0.id = scenario_ref01_data.id;
        const scenario_ref01_data_dt0 = (await scenario_ref01_ent.load(scenario_ref01_match_dt0)).data();
        (0, node_assert_1.default)(scenario_ref01_data_dt0.id === scenario_ref01_data.id);
        // REMOVE
        const scenario_ref01_match_rm0 = { id: scenario_ref01_data.id };
        await scenario_ref01_ent.remove(scenario_ref01_match_rm0);
        // LIST
        const scenario_ref01_match_rt0 = {};
        const scenario_ref01_list_rt0 = (await scenario_ref01_ent.list(scenario_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(scenario_ref01_list_rt0, { id: scenario_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/scenario/ScenarioTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VapiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['scenario01', 'scenario02', 'scenario03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VAPI_TEST_SCENARIO_ENTID': idmap,
        'VAPI_TEST_LIVE': 'FALSE',
        'VAPI_TEST_EXPLAIN': 'FALSE',
        'VAPI_APIKEY': '',
    });
    idmap = env['VAPI_TEST_SCENARIO_ENTID'];
    const live = 'TRUE' === env.VAPI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VAPI_TEST_SCENARIO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.VapiSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.VAPI_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.VAPI_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ScenarioEntity.test.js.map