# Vapi SDK

from vapi_sdk.utility.voxgig_struct import voxgig_struct as vs
from vapi_sdk.core.utility_type import VapiUtility
from vapi_sdk.core.spec import VapiSpec
from vapi_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from vapi_sdk.utility import register

# Load features
from vapi_sdk.feature.base_feature import VapiBaseFeature
from vapi_sdk.features import _has_feature, _make_feature


class VapiSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = VapiUtility()
        self._utility = utility

        from vapi_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return VapiUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = VapiSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "VapiSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("VapiSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Analytics(self, data=None) -> "AnalyticsEntity":
        """Entity factory: client.Analytics().list() / client.Analytics().load({"id": ...})."""
        from vapi_sdk.entity.analytics_entity import AnalyticsEntity
        return AnalyticsEntity(self, data)


    def Assistant(self, data=None) -> "AssistantEntity":
        """Entity factory: client.Assistant().list() / client.Assistant().load({"id": ...})."""
        from vapi_sdk.entity.assistant_entity import AssistantEntity
        return AssistantEntity(self, data)


    def Board(self, data=None) -> "BoardEntity":
        """Entity factory: client.Board().list() / client.Board().load({"id": ...})."""
        from vapi_sdk.entity.board_entity import BoardEntity
        return BoardEntity(self, data)


    def Call(self, data=None) -> "CallEntity":
        """Entity factory: client.Call().list() / client.Call().load({"id": ...})."""
        from vapi_sdk.entity.call_entity import CallEntity
        return CallEntity(self, data)


    def Campaign(self, data=None) -> "CampaignEntity":
        """Entity factory: client.Campaign().list() / client.Campaign().load({"id": ...})."""
        from vapi_sdk.entity.campaign_entity import CampaignEntity
        return CampaignEntity(self, data)


    def Chat(self, data=None) -> "ChatEntity":
        """Entity factory: client.Chat().list() / client.Chat().load({"id": ...})."""
        from vapi_sdk.entity.chat_entity import ChatEntity
        return ChatEntity(self, data)


    def Eval(self, data=None) -> "EvalEntity":
        """Entity factory: client.Eval().list() / client.Eval().load({"id": ...})."""
        from vapi_sdk.entity.eval_entity import EvalEntity
        return EvalEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from vapi_sdk.entity.file_entity import FileEntity
        return FileEntity(self, data)


    def Insight(self, data=None) -> "InsightEntity":
        """Entity factory: client.Insight().list() / client.Insight().load({"id": ...})."""
        from vapi_sdk.entity.insight_entity import InsightEntity
        return InsightEntity(self, data)


    def KnowledgeBase(self, data=None) -> "KnowledgeBaseEntity":
        """Entity factory: client.KnowledgeBase().list() / client.KnowledgeBase().load({"id": ...})."""
        from vapi_sdk.entity.knowledge_base_entity import KnowledgeBaseEntity
        return KnowledgeBaseEntity(self, data)


    def KnowledgeBaseV2File(self, data=None) -> "KnowledgeBaseV2FileEntity":
        """Entity factory: client.KnowledgeBaseV2File().list() / client.KnowledgeBaseV2File().load({"id": ...})."""
        from vapi_sdk.entity.knowledge_base_v2_file_entity import KnowledgeBaseV2FileEntity
        return KnowledgeBaseV2FileEntity(self, data)


    def Personality(self, data=None) -> "PersonalityEntity":
        """Entity factory: client.Personality().list() / client.Personality().load({"id": ...})."""
        from vapi_sdk.entity.personality_entity import PersonalityEntity
        return PersonalityEntity(self, data)


    def PhoneNumber(self, data=None) -> "PhoneNumberEntity":
        """Entity factory: client.PhoneNumber().list() / client.PhoneNumber().load({"id": ...})."""
        from vapi_sdk.entity.phone_number_entity import PhoneNumberEntity
        return PhoneNumberEntity(self, data)


    def Provider(self, data=None) -> "ProviderEntity":
        """Entity factory: client.Provider().list() / client.Provider().load({"id": ...})."""
        from vapi_sdk.entity.provider_entity import ProviderEntity
        return ProviderEntity(self, data)


    def Scenario(self, data=None) -> "ScenarioEntity":
        """Entity factory: client.Scenario().list() / client.Scenario().load({"id": ...})."""
        from vapi_sdk.entity.scenario_entity import ScenarioEntity
        return ScenarioEntity(self, data)


    def Scorecard(self, data=None) -> "ScorecardEntity":
        """Entity factory: client.Scorecard().list() / client.Scorecard().load({"id": ...})."""
        from vapi_sdk.entity.scorecard_entity import ScorecardEntity
        return ScorecardEntity(self, data)


    def Session(self, data=None) -> "SessionEntity":
        """Entity factory: client.Session().list() / client.Session().load({"id": ...})."""
        from vapi_sdk.entity.session_entity import SessionEntity
        return SessionEntity(self, data)


    def Simulation(self, data=None) -> "SimulationEntity":
        """Entity factory: client.Simulation().list() / client.Simulation().load({"id": ...})."""
        from vapi_sdk.entity.simulation_entity import SimulationEntity
        return SimulationEntity(self, data)


    def SimulationRun(self, data=None) -> "SimulationRunEntity":
        """Entity factory: client.SimulationRun().list() / client.SimulationRun().load({"id": ...})."""
        from vapi_sdk.entity.simulation_run_entity import SimulationRunEntity
        return SimulationRunEntity(self, data)


    def SimulationRunItem(self, data=None) -> "SimulationRunItemEntity":
        """Entity factory: client.SimulationRunItem().list() / client.SimulationRunItem().load({"id": ...})."""
        from vapi_sdk.entity.simulation_run_item_entity import SimulationRunItemEntity
        return SimulationRunItemEntity(self, data)


    def SimulationSuite(self, data=None) -> "SimulationSuiteEntity":
        """Entity factory: client.SimulationSuite().list() / client.SimulationSuite().load({"id": ...})."""
        from vapi_sdk.entity.simulation_suite_entity import SimulationSuiteEntity
        return SimulationSuiteEntity(self, data)


    def Squad(self, data=None) -> "SquadEntity":
        """Entity factory: client.Squad().list() / client.Squad().load({"id": ...})."""
        from vapi_sdk.entity.squad_entity import SquadEntity
        return SquadEntity(self, data)


    def StructuredOutput(self, data=None) -> "StructuredOutputEntity":
        """Entity factory: client.StructuredOutput().list() / client.StructuredOutput().load({"id": ...})."""
        from vapi_sdk.entity.structured_output_entity import StructuredOutputEntity
        return StructuredOutputEntity(self, data)


    def Tool(self, data=None) -> "ToolEntity":
        """Entity factory: client.Tool().list() / client.Tool().load({"id": ...})."""
        from vapi_sdk.entity.tool_entity import ToolEntity
        return ToolEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "VapiSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from vapi_sdk.entity.analytics_entity import AnalyticsEntity
    from vapi_sdk.entity.assistant_entity import AssistantEntity
    from vapi_sdk.entity.board_entity import BoardEntity
    from vapi_sdk.entity.call_entity import CallEntity
    from vapi_sdk.entity.campaign_entity import CampaignEntity
    from vapi_sdk.entity.chat_entity import ChatEntity
    from vapi_sdk.entity.eval_entity import EvalEntity
    from vapi_sdk.entity.file_entity import FileEntity
    from vapi_sdk.entity.insight_entity import InsightEntity
    from vapi_sdk.entity.knowledge_base_entity import KnowledgeBaseEntity
    from vapi_sdk.entity.knowledge_base_v2_file_entity import KnowledgeBaseV2FileEntity
    from vapi_sdk.entity.personality_entity import PersonalityEntity
    from vapi_sdk.entity.phone_number_entity import PhoneNumberEntity
    from vapi_sdk.entity.provider_entity import ProviderEntity
    from vapi_sdk.entity.scenario_entity import ScenarioEntity
    from vapi_sdk.entity.scorecard_entity import ScorecardEntity
    from vapi_sdk.entity.session_entity import SessionEntity
    from vapi_sdk.entity.simulation_entity import SimulationEntity
    from vapi_sdk.entity.simulation_run_entity import SimulationRunEntity
    from vapi_sdk.entity.simulation_run_item_entity import SimulationRunItemEntity
    from vapi_sdk.entity.simulation_suite_entity import SimulationSuiteEntity
    from vapi_sdk.entity.squad_entity import SquadEntity
    from vapi_sdk.entity.structured_output_entity import StructuredOutputEntity
    from vapi_sdk.entity.tool_entity import ToolEntity
