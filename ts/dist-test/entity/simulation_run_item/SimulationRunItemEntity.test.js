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
(0, node_test_1.describe)('SimulationRunItemEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VAPI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VapiSDK.test();
        const ent = testsdk.SimulationRunItem();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VAPI_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'simulation_run_item.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "callId": { "a": true, "fo": "uuid", "h": "Call Id", "n": "callId", "r": false, "sh": "This is the ID of the target Vapi call (the assistant being tested).", "t": "`$STRING`", "key$": "callId", "index$": 0 }, "canceledAt": { "a": true, "fo": "date-time", "h": "Canceled At", "n": "canceledAt", "r": false, "sh": "This is the ISO 8601 date-time string of when the run was canceled.", "t": "`$STRING`", "key$": "canceledAt", "index$": 1 }, "completedAt": { "a": true, "fo": "date-time", "h": "Completed At", "n": "completedAt", "r": false, "sh": "This is the ISO 8601 date-time string of when the run completed.", "t": "`$STRING`", "key$": "completedAt", "index$": 2 }, "configurations": { "a": true, "h": "Configurations", "n": "configurations", "r": false, "sh": "This is the configuration for how this simulation run executes.", "t": "`$ANY`", "key$": "configurations", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "This is the ISO 8601 date-time string of when the run item was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "failedAt": { "a": true, "fo": "date-time", "h": "Failed At", "n": "failedAt", "r": false, "sh": "This is the ISO 8601 date-time string of when the run failed.", "t": "`$STRING`", "key$": "failedAt", "index$": 5 }, "failureReason": { "a": true, "h": "Failure Reason", "n": "failureReason", "r": false, "sh": "This is the reason for failure.", "t": "`$STRING`", "key$": "failureReason", "index$": 6 }, "hooks": { "a": true, "h": "Hooks", "n": "hooks", "r": false, "sh": "Hooks configured for this simulation run item", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "hooks", "index$": 7 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "This is the unique identifier for the simulation run item.", "t": "`$STRING`", "key$": "id", "index$": 8 }, "improvementSuggestions": { "a": true, "h": "Improvement Suggestions", "n": "improvementSuggestions", "r": false, "sh": "This is the AI-generated improvement suggestions for failed runs.", "t": "`$ANY`", "key$": "improvementSuggestions", "index$": 9 }, "iterationNumber": { "a": true, "h": "Iteration Number", "n": "iterationNumber", "r": false, "sh": "This is the iteration number (1-indexed) when run with iterations > 1.", "t": "`$NUMBER`", "key$": "iterationNumber", "index$": 10 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "This is the metadata containing snapshots and call data.", "t": "`$ANY`", "key$": "metadata", "index$": 11 }, "orgId": { "a": true, "fo": "uuid", "h": "Org Id", "n": "orgId", "r": true, "sh": "This is the unique identifier for the organization.", "t": "`$STRING`", "key$": "orgId", "index$": 12 }, "personalityId": { "a": true, "fo": "uuid", "h": "Personality Id", "n": "personalityId", "r": false, "sh": "This is the personality ID at run creation time.", "t": "`$STRING`", "key$": "personalityId", "index$": 13 }, "queuedAt": { "a": true, "fo": "date-time", "h": "Queued At", "n": "queuedAt", "r": true, "sh": "This is the ISO 8601 date-time string of when the run was queued.", "t": "`$STRING`", "key$": "queuedAt", "index$": 14 }, "results": { "a": true, "h": "Results", "n": "results", "r": false, "sh": "This is the results of the simulation run.", "t": "`$ANY`", "union": { "branches": 3, "count": 2, "depth": 7 }, "key$": "results", "index$": 15 }, "runId": { "a": true, "fo": "uuid", "h": "Run Id", "n": "runId", "r": false, "sh": "This is the ID of the parent run (batch/group).", "t": "`$STRING`", "key$": "runId", "index$": 16 }, "scenarioId": { "a": true, "fo": "uuid", "h": "Scenario Id", "n": "scenarioId", "r": false, "sh": "This is the scenario ID at run creation time.", "t": "`$STRING`", "key$": "scenarioId", "index$": 17 }, "sessionId": { "a": true, "fo": "uuid", "h": "Session Id", "n": "sessionId", "r": false, "sh": "This is the session ID for chat-based simulations (webchat transport).", "t": "`$STRING`", "key$": "sessionId", "index$": 18 }, "simulationId": { "a": true, "fo": "uuid", "h": "Simulation Id", "n": "simulationId", "r": true, "sh": "This is the ID of the simulation this run belongs to.", "t": "`$STRING`", "key$": "simulationId", "index$": 19 }, "startedAt": { "a": true, "fo": "date-time", "h": "Started At", "n": "startedAt", "r": false, "sh": "This is the ISO 8601 date-time string of when the run started.", "t": "`$STRING`", "key$": "startedAt", "index$": 20 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "This is the current status of the run.", "t": "`$STRING`", "key$": "status", "index$": 21 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "sh": "This is the ISO 8601 date-time string of when the run item was last updated.", "t": "`$STRING`", "key$": "updatedAt", "index$": 22 } }, "id": { "field": "id", "name": "id" }, "name": "simulation_run_item", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /eval/simulation/run/{id}/item/{itemId}/generate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "item_id", "or": "item_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "run_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "force", "or": "force", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "persist", "or": "persist", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/eval/simulation/run/{id}/item/{itemId}/generate", "q": { "$action": "generate", "exist": ["force", "item_id", "persist", "run_id"] }, "r": { "param": { "id": "run_id", "itemId": "item_id" } }, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "run" }, { "var": "run_id" }, { "lit": "item" }, { "var": "item_id" }, { "lit": "generate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /eval/simulation/run/{id}/item", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "run_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "created_at_ge", "or": "created_at_ge", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "created_at_gt", "or": "created_at_gt", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "created_at_le", "or": "created_at_le", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "created_at_lt", "or": "created_at_lt", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "k": "query", "n": "run_id", "or": "run_id", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "simulation_id", "or": "simulation_id", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "sort_order", "or": "sort_order", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "updated_at_ge", "or": "updated_at_ge", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "updated_at_gt", "or": "updated_at_gt", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "updated_at_le", "or": "updated_at_le", "r": false, "t": "`$STRING`", "index$": 13 }, { "a": true, "k": "query", "n": "updated_at_lt", "or": "updated_at_lt", "r": false, "t": "`$STRING`", "index$": 14 }] }, "k": "http", "m": "GET", "o": "/eval/simulation/run/{id}/item", "q": { "exist": ["created_at_ge", "created_at_gt", "created_at_le", "created_at_lt", "limit", "page", "run_id", "simulation_id", "sort_by", "sort_order", "status", "updated_at_ge", "updated_at_gt", "updated_at_le", "updated_at_lt"] }, "r": { "param": { "id": "run_id" } }, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "run" }, { "var": "run_id" }, { "lit": "item" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /eval/simulation/run/{id}/item/{itemId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "item_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "run_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/eval/simulation/run/{id}/item/{itemId}", "q": { "exist": ["id", "run_id"] }, "r": { "param": { "id": "run_id", "itemId": "id" } }, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "run" }, { "var": "run_id" }, { "lit": "item" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /eval/simulation/run/{id}/item/{itemId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "item_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "run_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/eval/simulation/run/{id}/item/{itemId}", "q": { "exist": ["id", "run_id"] }, "r": { "param": { "id": "run_id", "itemId": "id" } }, "s": [{ "lit": "eval" }, { "lit": "simulation" }, { "lit": "run" }, { "var": "run_id" }, { "lit": "item" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "simulation_run_item", "name__orig": "simulation_run_item", "Name": "SimulationRunItem", "name_": "simulation_run_item", "name-": "simulation-run-item", "NAME": "SIMULATION_RUN_ITEM", "index$": 20 }, { "active": true, "entity": "simulation_run_item", "key$": "BasicSimulationRunItemFlow", "kind": "basic", "name": "BasicSimulationRunItemFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "simulation_run_item_ref01" }, "m": { "item_id": "item01", "run_id": "run01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "run_id": "run01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "simulation_run_item_ref01" } }], "index$": 1 }, { "a": true, "d": { "run_id": "run01" }, "i": { "ref": "simulation_run_item_ref01", "srcdatavar": "simulation_run_item_ref01_data", "suffix": "_up0", "textfield": "callId" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-simulation_run_item_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "simulation_run_item_ref01", "srcdatavar": "simulation_run_item_ref01_data", "suffix": "_dt0" }, "m": { "id": "simulation_run_item01", "run_id": "run01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-simulation_run_item_ref01" } }], "index$": 3 }] }, 'SimulationRunItem', { "POST /eval/simulation/run/{id}/item/{itemId}/generate": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "itemId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 1 }, { "name": "force", "required": true, "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "persist", "required": false, "in": "query", "schema": { "type": "string" }, "index$": 3 }] }, "GET /eval/simulation/run/{id}/item": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "description": "The unique identifier for the resource.", "schema": { "format": "uuid", "type": "string" }, "index$": 0 }, { "name": "simulationId", "required": false, "in": "query", "description": "This is the simulation ID to filter by.", "schema": { "format": "uuid", "type": "string" }, "index$": 1 }, { "name": "runId", "required": false, "in": "query", "description": "This is the run ID (batch/group) to filter by.", "schema": { "format": "uuid", "type": "string" }, "index$": 2 }, { "name": "status", "required": false, "in": "query", "description": "This is the status to filter by.", "schema": { "enum": ["queued", "running", "evaluating", "passed", "failed", "canceled"], "type": "string" }, "index$": 3 }, { "name": "page", "required": false, "in": "query", "description": "This is the page number to return. Defaults to 1.", "schema": { "minimum": 1, "type": "number" }, "index$": 4 }, { "name": "sortOrder", "required": false, "in": "query", "description": "This is the sort order for pagination. Defaults to 'DESC'.", "schema": { "enum": ["ASC", "DESC"], "type": "string" }, "index$": 5 }, { "name": "sortBy", "required": false, "in": "query", "description": "This is the column to sort by. Defaults to 'createdAt'.", "schema": { "enum": ["createdAt", "duration", "cost"], "type": "string" }, "index$": 6 }, { "name": "limit", "required": false, "in": "query", "description": "This is the maximum number of items to return. Defaults to 100.", "schema": { "minimum": 0, "maximum": 1000, "type": "number" }, "index$": 7 }, { "name": "createdAtGt", "required": false, "in": "query", "description": "This will return items where the createdAt is greater than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 8 }, { "name": "createdAtLt", "required": false, "in": "query", "description": "This will return items where the createdAt is less than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 9 }, { "name": "createdAtGe", "required": false, "in": "query", "description": "This will return items where the createdAt is greater than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 10 }, { "name": "createdAtLe", "required": false, "in": "query", "description": "This will return items where the createdAt is less than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 11 }, { "name": "updatedAtGt", "required": false, "in": "query", "description": "This will return items where the updatedAt is greater than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 12 }, { "name": "updatedAtLt", "required": false, "in": "query", "description": "This will return items where the updatedAt is less than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 13 }, { "name": "updatedAtGe", "required": false, "in": "query", "description": "This will return items where the updatedAt is greater than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 14 }, { "name": "updatedAtLe", "required": false, "in": "query", "description": "This will return items where the updatedAt is less than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 15 }] }, "GET /eval/simulation/run/{id}/item/{itemId}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "itemId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 1 }] }, "PATCH /eval/simulation/run/{id}/item/{itemId}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }, { "name": "itemId", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const simulation_run_item_ref01_ent = client.SimulationRunItem();
        let simulation_run_item_ref01_data = setup.data.new.simulation_run_item['simulation_run_item_ref01'];
        simulation_run_item_ref01_data['item_id'] = setup.idmap['item01'];
        simulation_run_item_ref01_data['run_id'] = setup.idmap['run01'];
        simulation_run_item_ref01_data = (await simulation_run_item_ref01_ent.create(simulation_run_item_ref01_data)).data();
        (0, node_assert_1.default)(null != simulation_run_item_ref01_data.id);
        // LIST
        const simulation_run_item_ref01_match = {};
        simulation_run_item_ref01_match['run_id'] = setup.idmap['run01'];
        const simulation_run_item_ref01_list = (await simulation_run_item_ref01_ent.list(simulation_run_item_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(simulation_run_item_ref01_list, { id: simulation_run_item_ref01_data.id })));
        // UPDATE
        const simulation_run_item_ref01_data_up0 = {};
        simulation_run_item_ref01_data_up0.id = simulation_run_item_ref01_data.id;
        simulation_run_item_ref01_data_up0['run_id'] = setup.idmap['run_id'];
        const simulation_run_item_ref01_markdef_up0 = { name: 'callId', value: 'Mark01-simulation_run_item_ref01_' + setup.now };
        simulation_run_item_ref01_data_up0[simulation_run_item_ref01_markdef_up0.name] = simulation_run_item_ref01_markdef_up0.value;
        const simulation_run_item_ref01_resdata_up0 = (await simulation_run_item_ref01_ent.update(simulation_run_item_ref01_data_up0)).data();
        (0, node_assert_1.default)(simulation_run_item_ref01_resdata_up0.id === simulation_run_item_ref01_data_up0.id);
        (0, node_assert_1.default)(simulation_run_item_ref01_resdata_up0[simulation_run_item_ref01_markdef_up0.name] === simulation_run_item_ref01_markdef_up0.value);
        // LOAD
        const simulation_run_item_ref01_match_dt0 = {};
        simulation_run_item_ref01_match_dt0.id = simulation_run_item_ref01_data.id;
        const simulation_run_item_ref01_data_dt0 = (await simulation_run_item_ref01_ent.load(simulation_run_item_ref01_match_dt0)).data();
        (0, node_assert_1.default)(simulation_run_item_ref01_data_dt0.id === simulation_run_item_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/simulation_run_item/SimulationRunItemTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VapiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['simulation_run_item01', 'simulation_run_item02', 'simulation_run_item03', 'item01', 'run01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VAPI_TEST_SIMULATION_RUN_ITEM_ENTID': idmap,
        'VAPI_TEST_LIVE': 'FALSE',
        'VAPI_TEST_EXPLAIN': 'FALSE',
        'VAPI_APIKEY': '',
    });
    idmap = env['VAPI_TEST_SIMULATION_RUN_ITEM_ENTID'];
    const live = 'TRUE' === env.VAPI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VAPI_TEST_SIMULATION_RUN_ITEM_ENTID'];
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
//# sourceMappingURL=SimulationRunItemEntity.test.js.map