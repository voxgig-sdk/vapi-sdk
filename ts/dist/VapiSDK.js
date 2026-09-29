"use strict";
// Vapi Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.VapiSDK = exports.VapiEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AnalyticsEntity_1 = require("./entity/AnalyticsEntity");
const AssistantEntity_1 = require("./entity/AssistantEntity");
const BoardEntity_1 = require("./entity/BoardEntity");
const CallEntity_1 = require("./entity/CallEntity");
const CampaignEntity_1 = require("./entity/CampaignEntity");
const ChatEntity_1 = require("./entity/ChatEntity");
const EvalEntity_1 = require("./entity/EvalEntity");
const FileEntity_1 = require("./entity/FileEntity");
const InsightEntity_1 = require("./entity/InsightEntity");
const KnowledgeBaseEntity_1 = require("./entity/KnowledgeBaseEntity");
const KnowledgeBaseV2FileEntity_1 = require("./entity/KnowledgeBaseV2FileEntity");
const PersonalityEntity_1 = require("./entity/PersonalityEntity");
const PhoneNumberEntity_1 = require("./entity/PhoneNumberEntity");
const ProviderEntity_1 = require("./entity/ProviderEntity");
const ScenarioEntity_1 = require("./entity/ScenarioEntity");
const ScorecardEntity_1 = require("./entity/ScorecardEntity");
const SessionEntity_1 = require("./entity/SessionEntity");
const SimulationEntity_1 = require("./entity/SimulationEntity");
const SimulationRunEntity_1 = require("./entity/SimulationRunEntity");
const SimulationRunItemEntity_1 = require("./entity/SimulationRunItemEntity");
const SimulationSuiteEntity_1 = require("./entity/SimulationSuiteEntity");
const SquadEntity_1 = require("./entity/SquadEntity");
const StructuredOutputEntity_1 = require("./entity/StructuredOutputEntity");
const ToolEntity_1 = require("./entity/ToolEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const VapiEntityBase_1 = require("./VapiEntityBase");
Object.defineProperty(exports, "VapiEntityBase", { enumerable: true, get: function () { return VapiEntityBase_1.VapiEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class VapiSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('VapiSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('VapiSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('VapiSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Analytics().list()` / `client.Analytics().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Analytics(entopts) {
        const self = this;
        return new AnalyticsEntity_1.AnalyticsEntity(self, entopts);
    }
    // Entity access: `client.Assistant().list()` / `client.Assistant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Assistant(entopts) {
        const self = this;
        return new AssistantEntity_1.AssistantEntity(self, entopts);
    }
    // Entity access: `client.Board().list()` / `client.Board().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Board(entopts) {
        const self = this;
        return new BoardEntity_1.BoardEntity(self, entopts);
    }
    // Entity access: `client.Call().list()` / `client.Call().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Call(entopts) {
        const self = this;
        return new CallEntity_1.CallEntity(self, entopts);
    }
    // Entity access: `client.Campaign().list()` / `client.Campaign().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Campaign(entopts) {
        const self = this;
        return new CampaignEntity_1.CampaignEntity(self, entopts);
    }
    // Entity access: `client.Chat().list()` / `client.Chat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Chat(entopts) {
        const self = this;
        return new ChatEntity_1.ChatEntity(self, entopts);
    }
    // Entity access: `client.Eval().list()` / `client.Eval().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Eval(entopts) {
        const self = this;
        return new EvalEntity_1.EvalEntity(self, entopts);
    }
    // Entity access: `client.File().list()` / `client.File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    File(entopts) {
        const self = this;
        return new FileEntity_1.FileEntity(self, entopts);
    }
    // Entity access: `client.Insight().list()` / `client.Insight().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Insight(entopts) {
        const self = this;
        return new InsightEntity_1.InsightEntity(self, entopts);
    }
    // Entity access: `client.KnowledgeBase().list()` / `client.KnowledgeBase().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    KnowledgeBase(entopts) {
        const self = this;
        return new KnowledgeBaseEntity_1.KnowledgeBaseEntity(self, entopts);
    }
    // Entity access: `client.KnowledgeBaseV2File().list()` / `client.KnowledgeBaseV2File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    KnowledgeBaseV2File(entopts) {
        const self = this;
        return new KnowledgeBaseV2FileEntity_1.KnowledgeBaseV2FileEntity(self, entopts);
    }
    // Entity access: `client.Personality().list()` / `client.Personality().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Personality(entopts) {
        const self = this;
        return new PersonalityEntity_1.PersonalityEntity(self, entopts);
    }
    // Entity access: `client.PhoneNumber().list()` / `client.PhoneNumber().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PhoneNumber(entopts) {
        const self = this;
        return new PhoneNumberEntity_1.PhoneNumberEntity(self, entopts);
    }
    // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Provider(entopts) {
        const self = this;
        return new ProviderEntity_1.ProviderEntity(self, entopts);
    }
    // Entity access: `client.Scenario().list()` / `client.Scenario().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Scenario(entopts) {
        const self = this;
        return new ScenarioEntity_1.ScenarioEntity(self, entopts);
    }
    // Entity access: `client.Scorecard().list()` / `client.Scorecard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Scorecard(entopts) {
        const self = this;
        return new ScorecardEntity_1.ScorecardEntity(self, entopts);
    }
    // Entity access: `client.Session().list()` / `client.Session().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Session(entopts) {
        const self = this;
        return new SessionEntity_1.SessionEntity(self, entopts);
    }
    // Entity access: `client.Simulation().list()` / `client.Simulation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Simulation(entopts) {
        const self = this;
        return new SimulationEntity_1.SimulationEntity(self, entopts);
    }
    // Entity access: `client.SimulationRun().list()` / `client.SimulationRun().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SimulationRun(entopts) {
        const self = this;
        return new SimulationRunEntity_1.SimulationRunEntity(self, entopts);
    }
    // Entity access: `client.SimulationRunItem().list()` / `client.SimulationRunItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SimulationRunItem(entopts) {
        const self = this;
        return new SimulationRunItemEntity_1.SimulationRunItemEntity(self, entopts);
    }
    // Entity access: `client.SimulationSuite().list()` / `client.SimulationSuite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SimulationSuite(entopts) {
        const self = this;
        return new SimulationSuiteEntity_1.SimulationSuiteEntity(self, entopts);
    }
    // Entity access: `client.Squad().list()` / `client.Squad().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Squad(entopts) {
        const self = this;
        return new SquadEntity_1.SquadEntity(self, entopts);
    }
    // Entity access: `client.StructuredOutput().list()` / `client.StructuredOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StructuredOutput(entopts) {
        const self = this;
        return new StructuredOutputEntity_1.StructuredOutputEntity(self, entopts);
    }
    // Entity access: `client.Tool().list()` / `client.Tool().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tool(entopts) {
        const self = this;
        return new ToolEntity_1.ToolEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new VapiSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return VapiSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Vapi' };
    }
    toString() {
        return 'Vapi ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.VapiSDK = VapiSDK;
const SDK = VapiSDK;
exports.SDK = SDK;
//# sourceMappingURL=VapiSDK.js.map