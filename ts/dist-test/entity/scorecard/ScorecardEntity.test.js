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
(0, node_test_1.describe)('ScorecardEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VAPI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VapiSDK.test();
        const ent = testsdk.Scorecard();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VAPI_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'scorecard.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "assistantIds": { "a": true, "h": "Assistant Ids", "n": "assistantIds", "r": false, "sh": "These are the assistant IDs that this scorecard is linked to.", "t": "`$ARRAY`", "key$": "assistantIds", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "This is the ISO 8601 date-time string of when the scorecard was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "This is the description of the scorecard.", "t": "`$STRING`", "key$": "description", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "This is the unique identifier for the scorecard.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "metrics": { "a": true, "h": "Metrics", "n": "metrics", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "These are the metrics that will be used to evaluate the scorecard.", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 4 }, "key$": "metrics", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "This is the name of the scorecard.", "t": "`$STRING`", "key$": "name", "index$": 5 }, "orgId": { "a": true, "h": "Org Id", "n": "orgId", "r": true, "sh": "This is the unique identifier for the org that this scorecard belongs to.", "t": "`$STRING`", "key$": "orgId", "index$": 6 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "sh": "This is the ISO 8601 date-time string of when the scorecard was last updated.", "t": "`$STRING`", "key$": "updatedAt", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "scorecard", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /observability/scorecard", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/observability/scorecard", "q": {}, "r": {}, "s": [{ "lit": "observability" }, { "lit": "scorecard" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /observability/scorecard", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "created_at_ge", "or": "created_at_ge", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "created_at_gt", "or": "created_at_gt", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "created_at_le", "or": "created_at_le", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "created_at_lt", "or": "created_at_lt", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 6 }, { "a": true, "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "sort_order", "or": "sort_order", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "updated_at_ge", "or": "updated_at_ge", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "updated_at_gt", "or": "updated_at_gt", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "updated_at_le", "or": "updated_at_le", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "updated_at_lt", "or": "updated_at_lt", "r": false, "t": "`$STRING`", "index$": 12 }] }, "k": "http", "m": "GET", "o": "/observability/scorecard", "q": { "exist": ["created_at_ge", "created_at_gt", "created_at_le", "created_at_lt", "id", "limit", "page", "sort_by", "sort_order", "updated_at_ge", "updated_at_gt", "updated_at_le", "updated_at_lt"] }, "r": {}, "s": [{ "lit": "observability" }, { "lit": "scorecard" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /observability/scorecard/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/observability/scorecard/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "observability" }, { "lit": "scorecard" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /observability/scorecard/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/observability/scorecard/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "observability" }, { "lit": "scorecard" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /observability/scorecard/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/observability/scorecard/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "observability" }, { "lit": "scorecard" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "scorecard", "name__orig": "scorecard", "Name": "Scorecard", "name_": "scorecard", "name-": "scorecard", "NAME": "SCORECARD", "index$": 16 }, { "active": true, "entity": "scorecard", "key$": "BasicScorecardFlow", "kind": "basic", "name": "BasicScorecardFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "scorecard_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "scorecard_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "scorecard_ref01", "srcdatavar": "scorecard_ref01_data", "suffix": "_up0", "textfield": "createdAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-scorecard_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "scorecard_ref01", "srcdatavar": "scorecard_ref01_data", "suffix": "_dt0" }, "m": { "id": "scorecard01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-scorecard_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "scorecard_ref01", "suffix": "_rm0" }, "m": { "id": "scorecard01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "scorecard_ref01" } }], "index$": 5 }] }, 'Scorecard', { "POST /observability/scorecard": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "This is the name of the scorecard. It is only for user reference and will not be used for any evaluation.", "maxLength": 80, "type": "string", "key$": "name" }, "description": { "description": "This is the description of the scorecard. It is only for user reference and will not be used for any evaluation.", "maxLength": 500, "type": "string", "key$": "description" }, "metrics": { "description": "These are the metrics that will be used to evaluate the scorecard.\nEach metric will have a set of conditions and points that will be used to generate the score.", "items": { "properties": { "conditions": { "description": "These are the conditions that will be used to evaluate the scorecard.\nEach condition will have a comparator, value, and points that will be used to calculate the final score.\nThe points will be added to the overall score if the condition is met.\nThe overall score will be normalized to a 100 point scale to ensure uniformity across different scorecards.", "items": {}, "type": "array" }, "structuredOutputId": { "description": "This is the unique identifier for the structured output that will be used to evaluate the scorecard.\nThe structured output must be of type number or boolean only for now.", "type": "string" } }, "required": ["conditions", "structuredOutputId"], "type": "object", "x-ref": "#/components/schemas/ScorecardMetric" }, "type": "array", "key$": "metrics" }, "assistantIds": { "description": "These are the assistant IDs that this scorecard is linked to.\nWhen linked to assistants, this scorecard will be available for evaluation during those assistants' calls.", "items": { "type": "string" }, "type": "array", "key$": "assistantIds" } }, "required": ["metrics"], "x-ref": "#/components/schemas/CreateScorecardDTO", "index$": 1 } } } }, "parameters": [] }, "GET /observability/scorecard": { "protocol": "http", "parameters": [{ "name": "id", "required": false, "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "required": false, "in": "query", "description": "This is the page number to return. Defaults to 1.", "schema": { "minimum": 1, "type": "number" }, "index$": 1 }, { "name": "sortOrder", "required": false, "in": "query", "description": "This is the sort order for pagination. Defaults to 'DESC'.", "schema": { "enum": ["ASC", "DESC"], "type": "string" }, "index$": 2 }, { "name": "sortBy", "required": false, "in": "query", "description": "This is the column to sort by. Defaults to 'createdAt'.", "schema": { "enum": ["createdAt", "duration", "cost"], "type": "string" }, "index$": 3 }, { "name": "limit", "required": false, "in": "query", "description": "This is the maximum number of items to return. Defaults to 100.", "schema": { "minimum": 0, "maximum": 1000, "type": "number" }, "index$": 4 }, { "name": "createdAtGt", "required": false, "in": "query", "description": "This will return items where the createdAt is greater than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 5 }, { "name": "createdAtLt", "required": false, "in": "query", "description": "This will return items where the createdAt is less than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 6 }, { "name": "createdAtGe", "required": false, "in": "query", "description": "This will return items where the createdAt is greater than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 7 }, { "name": "createdAtLe", "required": false, "in": "query", "description": "This will return items where the createdAt is less than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 8 }, { "name": "updatedAtGt", "required": false, "in": "query", "description": "This will return items where the updatedAt is greater than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 9 }, { "name": "updatedAtLt", "required": false, "in": "query", "description": "This will return items where the updatedAt is less than the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 10 }, { "name": "updatedAtGe", "required": false, "in": "query", "description": "This will return items where the updatedAt is greater than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 11 }, { "name": "updatedAtLe", "required": false, "in": "query", "description": "This will return items where the updatedAt is less than or equal to the specified value.", "schema": { "format": "date-time", "type": "string" }, "index$": 12 }] }, "GET /observability/scorecard/{id}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }] }, "DELETE /observability/scorecard/{id}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }] }, "PATCH /observability/scorecard/{id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "This is the name of the scorecard. It is only for user reference and will not be used for any evaluation.", "maxLength": 80, "key$": "name" }, "description": { "type": "string", "description": "This is the description of the scorecard. It is only for user reference and will not be used for any evaluation.", "maxLength": 500, "key$": "description" }, "metrics": { "description": "These are the metrics that will be used to evaluate the scorecard.\nEach metric will have a set of conditions and points that will be used to generate the score.", "type": "array", "items": { "type": "object", "properties": { "conditions": { "description": "These are the conditions that will be used to evaluate the scorecard.\nEach condition will have a comparator, value, and points that will be used to calculate the final score.\nThe points will be added to the overall score if the condition is met.\nThe overall score will be normalized to a 100 point scale to ensure uniformity across different scorecards.", "items": {}, "type": "array" }, "structuredOutputId": { "description": "This is the unique identifier for the structured output that will be used to evaluate the scorecard.\nThe structured output must be of type number or boolean only for now.", "type": "string" } }, "required": ["conditions", "structuredOutputId"], "x-ref": "#/components/schemas/ScorecardMetric" }, "key$": "metrics" }, "assistantIds": { "description": "These are the assistant IDs that this scorecard is linked to.\nWhen linked to assistants, this scorecard will be available for evaluation during those assistants' calls.", "type": "array", "items": { "type": "string" }, "key$": "assistantIds" } }, "x-ref": "#/components/schemas/UpdateScorecardDTO", "index$": 1 } } } }, "parameters": [{ "name": "id", "required": true, "in": "path", "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const scorecard_ref01_ent = client.Scorecard();
        let scorecard_ref01_data = setup.data.new.scorecard['scorecard_ref01'];
        scorecard_ref01_data = (await scorecard_ref01_ent.create(scorecard_ref01_data)).data();
        (0, node_assert_1.default)(null != scorecard_ref01_data.id);
        // LIST
        const scorecard_ref01_match = {};
        const scorecard_ref01_list = (await scorecard_ref01_ent.list(scorecard_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(scorecard_ref01_list, { id: scorecard_ref01_data.id })));
        // UPDATE
        const scorecard_ref01_data_up0 = {};
        scorecard_ref01_data_up0.id = scorecard_ref01_data.id;
        const scorecard_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-scorecard_ref01_' + setup.now };
        scorecard_ref01_data_up0[scorecard_ref01_markdef_up0.name] = scorecard_ref01_markdef_up0.value;
        const scorecard_ref01_resdata_up0 = (await scorecard_ref01_ent.update(scorecard_ref01_data_up0)).data();
        (0, node_assert_1.default)(scorecard_ref01_resdata_up0.id === scorecard_ref01_data_up0.id);
        (0, node_assert_1.default)(scorecard_ref01_resdata_up0[scorecard_ref01_markdef_up0.name] === scorecard_ref01_markdef_up0.value);
        // LOAD
        const scorecard_ref01_match_dt0 = {};
        scorecard_ref01_match_dt0.id = scorecard_ref01_data.id;
        const scorecard_ref01_data_dt0 = (await scorecard_ref01_ent.load(scorecard_ref01_match_dt0)).data();
        (0, node_assert_1.default)(scorecard_ref01_data_dt0.id === scorecard_ref01_data.id);
        // REMOVE
        const scorecard_ref01_match_rm0 = { id: scorecard_ref01_data.id };
        await scorecard_ref01_ent.remove(scorecard_ref01_match_rm0);
        // LIST
        const scorecard_ref01_match_rt0 = {};
        const scorecard_ref01_list_rt0 = (await scorecard_ref01_ent.list(scorecard_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(scorecard_ref01_list_rt0, { id: scorecard_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/scorecard/ScorecardTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VapiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['scorecard01', 'scorecard02', 'scorecard03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VAPI_TEST_SCORECARD_ENTID': idmap,
        'VAPI_TEST_LIVE': 'FALSE',
        'VAPI_TEST_EXPLAIN': 'FALSE',
        'VAPI_APIKEY': '',
    });
    idmap = env['VAPI_TEST_SCORECARD_ENTID'];
    const live = 'TRUE' === env.VAPI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VAPI_TEST_SCORECARD_ENTID'];
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
//# sourceMappingURL=ScorecardEntity.test.js.map