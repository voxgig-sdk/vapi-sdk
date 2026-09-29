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
(0, node_test_1.describe)('KnowledgeBaseV2FileEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VAPI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VAPI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VapiSDK.test();
        const ent = testsdk.KnowledgeBaseV2File();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VAPI_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'knowledge_base_v2_file.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "bytes": { "a": true, "h": "Bytes", "n": "bytes", "r": false, "t": "`$NUMBER`", "key$": "bytes", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "fileId": { "a": true, "h": "File Id", "n": "fileId", "r": true, "t": "`$STRING`", "key$": "fileId", "index$": 2 }, "fileName": { "a": true, "h": "File Name", "n": "fileName", "r": false, "t": "`$STRING`", "key$": "fileName", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 4 }, "knowledgeBaseV2Id": { "a": true, "h": "Knowledge Base V2 Id", "n": "knowledgeBaseV2Id", "r": true, "t": "`$STRING`", "key$": "knowledgeBaseV2Id", "index$": 5 }, "mimetype": { "a": true, "h": "Mimetype", "n": "mimetype", "r": false, "t": "`$STRING`", "key$": "mimetype", "index$": 6 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 7 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "t": "`$STRING`", "key$": "updatedAt", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "knowledge_base_v2_file", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v2/knowledge-base/{id}/file/{fileId}/retry", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "file_id", "or": "fileId", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "knowledge_base_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/v2/knowledge-base/{id}/file/{fileId}/retry", "q": { "exist": ["file_id", "knowledge_base_id"] }, "r": { "param": { "fileId": "file_id", "id": "knowledge_base_id" } }, "s": [{ "lit": "v2" }, { "lit": "knowledge-base" }, { "var": "knowledge_base_id" }, { "lit": "file" }, { "var": "file_id" }, { "lit": "retry" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v2/knowledge-base/{id}/file", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/knowledge-base/{id}/file", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "knowledge-base" }, { "var": "id" }, { "lit": "file" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/knowledge-base/{id}/file", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/knowledge-base/{id}/file", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "knowledge-base" }, { "var": "id" }, { "lit": "file" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/knowledge-base/{id}/file/{fileId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "fileId", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "knowledge_base_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/v2/knowledge-base/{id}/file/{fileId}", "q": { "exist": ["id", "knowledge_base_id"] }, "r": { "param": { "fileId": "id", "id": "knowledge_base_id" } }, "s": [{ "lit": "v2" }, { "lit": "knowledge-base" }, { "var": "knowledge_base_id" }, { "lit": "file" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.knowledge_base"], ["$.main.kit.entity.knowledge_base", "$.main.kit.entity.file"]] }, "key$": "knowledge_base_v2_file", "name__orig": "knowledge_base_v2_file", "Name": "KnowledgeBaseV2File", "name_": "knowledge_base_v2_file", "name-": "knowledge-base-v2-file", "NAME": "KNOWLEDGE_BASE_V2_FILE", "index$": 10 }, { "active": true, "entity": "knowledge_base_v2_file", "key$": "BasicKnowledgeBaseV2FileFlow", "kind": "basic", "name": "BasicKnowledgeBaseV2FileFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "knowledge_base_v2_file_ref01" }, "m": { "knowledge_base_id": "knowledge_base01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "knowledge_base_v2_file_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "knowledge_base_v2_file_ref01", "suffix": "_rm0" }, "m": { "id": "knowledge_base_v2_file01", "knowledge_base_id": "knowledge_base01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "knowledge_base_v2_file_ref01" } }], "index$": 3 }] }, 'KnowledgeBaseV2File', { "POST /v2/knowledge-base/{id}/file/{fileId}/retry": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "description": "The unique identifier for the resource.", "schema": { "format": "uuid", "type": "string" }, "index$": 0 }, { "name": "fileId", "required": true, "in": "path", "schema": { "format": "uuid", "type": "string" }, "index$": 1 }] }, "POST /v2/knowledge-base/{id}/file": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "fileId": { "type": "string", "key$": "fileId" } }, "required": ["fileId"], "x-ref": "#/components/schemas/AttachKnowledgeBaseV2FileDTO", "index$": 1 } } } }, "parameters": [{ "name": "id", "required": true, "in": "path", "description": "The unique identifier for the resource.", "schema": { "format": "uuid", "type": "string" }, "index$": 0 }] }, "GET /v2/knowledge-base/{id}/file": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "description": "The unique identifier for the resource.", "schema": { "format": "uuid", "type": "string" }, "index$": 0 }] }, "DELETE /v2/knowledge-base/{id}/file/{fileId}": { "protocol": "http", "parameters": [{ "name": "id", "required": true, "in": "path", "description": "The unique identifier for the resource.", "schema": { "format": "uuid", "type": "string" }, "index$": 0 }, { "name": "fileId", "required": true, "in": "path", "schema": { "format": "uuid", "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const knowledge_base_v2_file_ref01_ent = client.KnowledgeBaseV2File();
        let knowledge_base_v2_file_ref01_data = setup.data.new.knowledge_base_v2_file['knowledge_base_v2_file_ref01'];
        knowledge_base_v2_file_ref01_data['knowledge_base_id'] = setup.idmap['knowledge_base01'];
        knowledge_base_v2_file_ref01_data = (await knowledge_base_v2_file_ref01_ent.create(knowledge_base_v2_file_ref01_data)).data();
        (0, node_assert_1.default)(null != knowledge_base_v2_file_ref01_data.id);
        // LIST
        const knowledge_base_v2_file_ref01_match = {};
        const knowledge_base_v2_file_ref01_list = (await knowledge_base_v2_file_ref01_ent.list(knowledge_base_v2_file_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(knowledge_base_v2_file_ref01_list, { id: knowledge_base_v2_file_ref01_data.id })));
        // REMOVE
        const knowledge_base_v2_file_ref01_match_rm0 = { id: knowledge_base_v2_file_ref01_data.id };
        await knowledge_base_v2_file_ref01_ent.remove(knowledge_base_v2_file_ref01_match_rm0);
        // LIST
        const knowledge_base_v2_file_ref01_match_rt0 = {};
        const knowledge_base_v2_file_ref01_list_rt0 = (await knowledge_base_v2_file_ref01_ent.list(knowledge_base_v2_file_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(knowledge_base_v2_file_ref01_list_rt0, { id: knowledge_base_v2_file_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/knowledge_base_v2_file/KnowledgeBaseV2FileTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VapiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['knowledge_base_v2_file01', 'knowledge_base_v2_file02', 'knowledge_base_v2_file03', 'knowledge_base01', 'knowledge_base02', 'knowledge_base03', 'file01', 'file02', 'file03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID': idmap,
        'VAPI_TEST_LIVE': 'FALSE',
        'VAPI_TEST_EXPLAIN': 'FALSE',
        'VAPI_APIKEY': '',
    });
    idmap = env['VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID'];
    const live = 'TRUE' === env.VAPI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VAPI_TEST_KNOWLEDGE_BASE_V2_FILE_ENTID'];
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
//# sourceMappingURL=KnowledgeBaseV2FileEntity.test.js.map