-- Vapi SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Vapi",
      slug = "vapi",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["debug"] = {
        ["options"] = {
          ["active"] = false,
          ["max"] = 100,
          ["redact"] = {
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          },
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["onEntry"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["idempotency"] = {
        ["options"] = {
          ["active"] = false,
          ["header"] = "Idempotency-Key",
          ["methods"] = {
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          },
          ["ops"] = {
            "create",
            "update",
            "remove",
          },
        },
        ["optspec"] = {
          ["keygen"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["metrics"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["paging"] = {
        ["options"] = {
          ["active"] = false,
          ["afterVar"] = "after",
          ["cursorParam"] = "cursor",
          ["firstVar"] = "first",
          ["limitParam"] = "limit",
          ["pageParam"] = "page",
          ["startPage"] = 1,
        },
        ["optspec"] = {
          ["limit"] = "`$NUMBER`",
          ["ops"] = "`$LIST`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.vapi.ai",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["analytics"] = {},
        ["assistant"] = {},
        ["board"] = {},
        ["call"] = {},
        ["campaign"] = {},
        ["chat"] = {},
        ["eval"] = {},
        ["file"] = {},
        ["insight"] = {},
        ["knowledge_base"] = {},
        ["knowledge_base_v2_file"] = {},
        ["personality"] = {},
        ["phone_number"] = {},
        ["provider"] = {},
        ["scenario"] = {},
        ["scorecard"] = {},
        ["session"] = {},
        ["simulation"] = {},
        ["simulation_run"] = {},
        ["simulation_run_item"] = {},
        ["simulation_suite"] = {},
        ["squad"] = {},
        ["structured_output"] = {},
        ["tool"] = {},
      },
    },
    entity = {
      ["analytics"] = {
        ["fields"] = {
          {
            ["name"] = "queries",
            ["title"] = "Queries",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "This is the list of metric queries you want to perform.",
          },
        },
        ["name"] = "analytics",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/analytics",
                ["segments"] = {
                  {
                    ["lit"] = "analytics",
                  },
                },
                ["parts"] = {
                  "analytics",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["assistant"] = {
        ["fields"] = {
          {
            ["name"] = "analysisPlan",
            ["title"] = "Analysis Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is the plan for analysis of assistant's calls.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "artifactPlan",
            ["title"] = "Artifact Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is the plan for artifacts generated during assistant's calls.",
          },
          {
            ["name"] = "backgroundSound",
            ["title"] = "Background Sound",
            ["type"] = "`$ANY`",
            ["short"] = "This is the background sound in the call.",
          },
          {
            ["name"] = "backgroundSpeechDenoisingPlan",
            ["title"] = "Background Speech Denoising Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This enables filtering of noise and background speech while the user is talking.",
          },
          {
            ["name"] = "clientMessages",
            ["title"] = "Client Messages",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the messages that will be sent to your Client SDKs.",
          },
          {
            ["name"] = "compliancePlan",
            ["title"] = "Compliance Plan",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "contentType",
            ["title"] = "Content Type",
            ["type"] = "`$STRING`",
            ["short"] = "The content-type the URL returned, when a response was received.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the assistant was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "credentialIds",
            ["title"] = "Credential Ids",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the credentials that will be used for the assistant calls.",
          },
          {
            ["name"] = "credentials",
            ["title"] = "Credentials",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are dynamic credentials that will be used for the assistant calls.",
          },
          {
            ["name"] = "endCallMessage",
            ["title"] = "End Call Message",
            ["type"] = "`$STRING`",
            ["short"] = "This is the message that the assistant will say if it ends the call.",
          },
          {
            ["name"] = "endCallPhrases",
            ["title"] = "End Call Phrases",
            ["type"] = "`$ARRAY`",
            ["short"] = "This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up.",
          },
          {
            ["name"] = "firstMessage",
            ["title"] = "First Message",
            ["type"] = "`$STRING`",
            ["short"] = "This is the first message that the assistant will say.",
          },
          {
            ["name"] = "firstMessageInterruptionsEnabled",
            ["title"] = "First Message Interruptions Enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "firstMessageMode",
            ["title"] = "First Message Mode",
            ["type"] = "`$STRING`",
            ["short"] = "This is the mode for the first message.",
          },
          {
            ["name"] = "hooks",
            ["title"] = "Hooks",
            ["type"] = "`$ARRAY`",
            ["short"] = "This is a set of actions that will be performed on certain events.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the assistant.",
          },
          {
            ["name"] = "keypadInputPlan",
            ["title"] = "Keypad Input Plan",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "latestVersion",
            ["title"] = "Latest Version",
            ["type"] = "`$STRING`",
            ["short"] = "This is the latest version label (e.g.",
          },
          {
            ["name"] = "maxDurationSeconds",
            ["title"] = "Max Duration Seconds",
            ["type"] = "`$NUMBER`",
            ["short"] = "This is the maximum number of seconds that the call will last.",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
            ["short"] = "This is for metadata you want to store on the assistant.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$ANY`",
            ["short"] = "These are the options for the assistant's LLM.",
          },
          {
            ["name"] = "modelDeprecations",
            ["title"] = "Model Deprecations",
            ["type"] = "`$ARRAY`",
            ["short"] = "Read-only.",
          },
          {
            ["name"] = "modelOutputInMessagesEnabled",
            ["title"] = "Model Output In Messages Enabled",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech.",
          },
          {
            ["name"] = "monitorPlan",
            ["title"] = "Monitor Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is the plan for real-time monitoring of the assistant's calls.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is the name of the assistant.",
          },
          {
            ["name"] = "observabilityPlan",
            ["title"] = "Observability Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is the plan for observability of assistant's calls.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this assistant belongs to.",
          },
          {
            ["name"] = "reason",
            ["title"] = "Reason",
            ["type"] = "`$STRING`",
            ["short"] = "Why validation failed.",
          },
          {
            ["name"] = "server",
            ["title"] = "Server",
            ["type"] = "`$ANY`",
            ["short"] = "This is where Vapi will send webhooks.",
          },
          {
            ["name"] = "serverMessages",
            ["title"] = "Server Messages",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the messages that will be sent to your Server URL.",
          },
          {
            ["name"] = "startSpeakingPlan",
            ["title"] = "Start Speaking Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is the plan for when the assistant should start talking.",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$NUMBER`",
            ["short"] = "The HTTP status the URL returned, when a response was received.",
          },
          {
            ["name"] = "stopSpeakingPlan",
            ["title"] = "Stop Speaking Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is the plan for when assistant should stop talking on customer interruption.",
          },
          {
            ["name"] = "transcriber",
            ["title"] = "Transcriber",
            ["type"] = "`$ANY`",
            ["short"] = "These are the options for the assistant's transcriber.",
          },
          {
            ["name"] = "transportConfigurations",
            ["title"] = "Transport Configurations",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the configurations to be passed to the transport providers of assistant's calls, like Twilio.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the assistant was last updated.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the background sound URL to validate.",
          },
          {
            ["name"] = "valid",
            ["title"] = "Valid",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the URL currently serves a live media file.",
          },
          {
            ["name"] = "voice",
            ["title"] = "Voice",
            ["type"] = "`$ANY`",
            ["short"] = "These are the options for the assistant's voice.",
          },
          {
            ["name"] = "voicemailDetection",
            ["title"] = "Voicemail Detection",
            ["type"] = "`$ANY`",
            ["short"] = "These are the settings to configure or disable voicemail detection.",
          },
          {
            ["name"] = "voicemailMessage",
            ["title"] = "Voicemail Message",
            ["type"] = "`$STRING`",
            ["short"] = "This is the message that the assistant will say if the call is forwarded to voicemail.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "assistant",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/assistant",
                ["segments"] = {
                  {
                    ["lit"] = "assistant",
                  },
                },
                ["parts"] = {
                  "assistant",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/assistant/background-sound/validate",
                ["segments"] = {
                  {
                    ["lit"] = "assistant",
                  },
                  {
                    ["lit"] = "background-sound",
                  },
                  {
                    ["lit"] = "validate",
                  },
                },
                ["parts"] = {
                  "assistant",
                  "background-sound",
                  "validate",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/assistant",
                ["segments"] = {
                  {
                    ["lit"] = "assistant",
                  },
                },
                ["parts"] = {
                  "assistant",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "limit",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/assistant/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "assistant",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "assistant",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/assistant/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "assistant",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "assistant",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/assistant/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "assistant",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "assistant",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["board"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the Board was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the Board.",
          },
          {
            ["name"] = "items",
            ["title"] = "Items",
            ["type"] = "`$ARRAY`",
            ["short"] = "This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board.",
          },
          {
            ["name"] = "layout",
            ["title"] = "Layout",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ANY`",
              },
            },
            ["short"] = "This is the layout of the Board.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the name of the Board.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this Board belongs to.",
          },
          {
            ["name"] = "systemKey",
            ["title"] = "System Key",
            ["type"] = "`$STRING`",
            ["short"] = "Server-owned key for system-provisioned boards.",
          },
          {
            ["name"] = "timeRangeOverride",
            ["title"] = "Time Range Override",
            ["type"] = "`$ANY`",
            ["short"] = "This is the timerange override for the board.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the Board was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "board",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/reporting/board",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "board",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "board",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/reporting/board",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "board",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "board",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/reporting/board/default/metrics-overview",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "board",
                  },
                  {
                    ["lit"] = "default",
                  },
                  {
                    ["lit"] = "metrics-overview",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "board",
                  "default",
                  "metrics-overview",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/reporting/board/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "board",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "board",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/reporting/board/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "board",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "board",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/reporting/board/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "board",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "board",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["call"] = {
        ["fields"] = {
          {
            ["name"] = "analysis",
            ["title"] = "Analysis",
            ["type"] = "`$ANY`",
            ["short"] = "This is the analysis of the call.",
          },
          {
            ["name"] = "artifact",
            ["title"] = "Artifact",
            ["type"] = "`$ANY`",
            ["short"] = "These are the artifacts created from the call.",
          },
          {
            ["name"] = "artifactPlan",
            ["title"] = "Artifact Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is a copy of assistant artifact plan.",
          },
          {
            ["name"] = "assistant",
            ["title"] = "Assistant",
            ["type"] = "`$ANY`",
            ["short"] = "This is the assistant that will be used for the call.",
          },
          {
            ["name"] = "assistantId",
            ["title"] = "Assistant Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the assistant ID that will be used for the call.",
          },
          {
            ["name"] = "assistantOverrides",
            ["title"] = "Assistant Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "These are the overrides for the `assistant` or `assistantId`'s settings and template variables.",
          },
          {
            ["name"] = "assistantVersion",
            ["title"] = "Assistant Version",
            ["type"] = "`$STRING`",
            ["short"] = "This is the assistant version to use for this call.",
          },
          {
            ["name"] = "campaignId",
            ["title"] = "Campaign Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the campaign ID that the call belongs to.",
          },
          {
            ["name"] = "compliance",
            ["title"] = "Compliance",
            ["type"] = "`$ANY`",
            ["short"] = "This is the compliance of the call.",
          },
          {
            ["name"] = "cost",
            ["title"] = "Cost",
            ["type"] = "`$NUMBER`",
            ["short"] = "This is the cost of the call in USD.",
          },
          {
            ["name"] = "costBreakdown",
            ["title"] = "Cost Breakdown",
            ["type"] = "`$ANY`",
            ["short"] = "This is the cost of the call in USD.",
          },
          {
            ["name"] = "costs",
            ["title"] = "Costs",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the costs of individual components of the call in USD.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the call was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "customer",
            ["title"] = "Customer",
            ["type"] = "`$ANY`",
            ["short"] = "This is the customer that will be called.",
          },
          {
            ["name"] = "customerId",
            ["title"] = "Customer Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the customer that will be called.",
          },
          {
            ["name"] = "customers",
            ["title"] = "Customers",
            ["type"] = "`$ARRAY`",
            ["short"] = "This is used to issue batch calls to multiple customers.",
          },
          {
            ["name"] = "destination",
            ["title"] = "Destination",
            ["type"] = "`$ANY`",
            ["short"] = "This is the destination where the call ended up being transferred to.",
          },
          {
            ["name"] = "endedAt",
            ["title"] = "Ended At",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ISO 8601 date-time string of when the call was ended.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "endedMessage",
            ["title"] = "Ended Message",
            ["type"] = "`$STRING`",
            ["short"] = "This is the message that adds more context to the ended reason.",
          },
          {
            ["name"] = "endedReason",
            ["title"] = "Ended Reason",
            ["type"] = "`$STRING`",
            ["short"] = "This is the explanation for how the call ended.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the call.",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "monitor",
            ["title"] = "Monitor",
            ["type"] = "`$ANY`",
            ["short"] = "This is to real-time monitor the call.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is the name of the call.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this call belongs to.",
          },
          {
            ["name"] = "phoneCallProvider",
            ["title"] = "Phone Call Provider",
            ["type"] = "`$STRING`",
            ["short"] = "This is the provider of the call.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "phoneCallProviderId",
            ["title"] = "Phone Call Provider Id",
            ["type"] = "`$STRING`",
            ["short"] = "The ID of the call as provided by the phone number service.",
            ["deprecated"] = true,
          },
          {
            ["name"] = "phoneCallTransport",
            ["title"] = "Phone Call Transport",
            ["type"] = "`$STRING`",
            ["short"] = "This is the transport of the phone call.",
          },
          {
            ["name"] = "phoneNumber",
            ["title"] = "Phone Number",
            ["type"] = "`$ANY`",
            ["short"] = "This is the phone number that will be used for the call.",
          },
          {
            ["name"] = "phoneNumberId",
            ["title"] = "Phone Number Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the phone number that will be used for the call.",
          },
          {
            ["name"] = "schedulePlan",
            ["title"] = "Schedule Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is the schedule plan of the call.",
          },
          {
            ["name"] = "squad",
            ["title"] = "Squad",
            ["type"] = "`$ANY`",
            ["short"] = "This is a squad that will be used for the call.",
          },
          {
            ["name"] = "squadId",
            ["title"] = "Squad Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the squad that will be used for the call.",
          },
          {
            ["name"] = "squadOverrides",
            ["title"] = "Squad Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "These are the overrides for the `squad` or `squadId`'s member settings and template variables.",
          },
          {
            ["name"] = "squadVersion",
            ["title"] = "Squad Version",
            ["type"] = "`$STRING`",
            ["short"] = "This is the squad version to use for this call.",
          },
          {
            ["name"] = "startedAt",
            ["title"] = "Started At",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ISO 8601 date-time string of when the call was started.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["short"] = "This is the status of the call.",
          },
          {
            ["name"] = "transport",
            ["title"] = "Transport",
            ["type"] = "`$ANY`",
            ["short"] = "This is the transport of the call.",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["short"] = "This is the type of call.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the call was last updated.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "workflow",
            ["title"] = "Workflow",
            ["type"] = "`$ANY`",
            ["short"] = "This is a workflow that will be used for the call.",
          },
          {
            ["name"] = "workflowId",
            ["title"] = "Workflow Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the workflow that will be used for the call.",
          },
          {
            ["name"] = "workflowOverrides",
            ["title"] = "Workflow Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "These are the overrides for the `workflow` or `workflowId`'s settings and template variables.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "call",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/call",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                },
                ["parts"] = {
                  "call",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                },
                ["parts"] = {
                  "call",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "assistant_id",
                      ["orig"] = "assistantId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "phone_number_id",
                      ["orig"] = "phoneNumberId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "assistant_id",
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "limit",
                    "phone_number_id",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call/{id}/assistant-recording",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "assistant-recording",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                  "assistant-recording",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "assistant_recording",
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call/{id}/call-logs",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "call-logs",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                  "call-logs",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "call_log",
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call/{id}/customer-recording",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "customer-recording",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                  "customer-recording",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "customer_recording",
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call/{id}/mono-recording",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "mono-recording",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                  "mono-recording",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "mono_recording",
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call/{id}/pcap",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "pcap",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                  "pcap",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "pcap",
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call/{id}/stereo-recording",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "stereo-recording",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                  "stereo-recording",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "stereo_recording",
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/call/{id}/video-recording",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "video-recording",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                  "video-recording",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "video_recording",
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/call/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/call/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "call",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "call",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["campaign"] = {
        ["fields"] = {
          {
            ["name"] = "assistantId",
            ["title"] = "Assistant Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the assistant ID that will be used for the campaign calls.",
          },
          {
            ["name"] = "assistantOverrides",
            ["title"] = "Assistant Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "These are the overrides for the assistant's settings and template variables for the campaign.",
          },
          {
            ["name"] = "callMetrics",
            ["title"] = "Call Metrics",
            ["type"] = "`$ANY`",
            ["short"] = "These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up.",
          },
          {
            ["name"] = "calls",
            ["title"] = "Calls",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "This is a map of call IDs to campaign call details.",
          },
          {
            ["name"] = "callsCounterEnded",
            ["title"] = "Calls Counter Ended",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "This is the number of calls that have ended.",
          },
          {
            ["name"] = "callsCounterEndedVoicemail",
            ["title"] = "Calls Counter Ended Voicemail",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "This is the number of calls whose ended reason is 'voicemail'.",
          },
          {
            ["name"] = "callsCounterInProgress",
            ["title"] = "Calls Counter In Progress",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "This is the number of calls that have been in progress.",
          },
          {
            ["name"] = "callsCounterQueued",
            ["title"] = "Calls Counter Queued",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "This is the number of calls that have been queued.",
          },
          {
            ["name"] = "callsCounterScheduled",
            ["title"] = "Calls Counter Scheduled",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "This is the number of calls that have been scheduled.",
          },
          {
            ["name"] = "contactCounters",
            ["title"] = "Contact Counters",
            ["type"] = "`$ANY`",
            ["short"] = "These are the per-status contact counts for this campaign.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the campaign was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "customers",
            ["title"] = "Customers",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the customers that will be called in the campaign.",
          },
          {
            ["name"] = "dialPlan",
            ["title"] = "Dial Plan",
            ["type"] = "`$ARRAY`",
            ["short"] = "This is a list of dial entries, each specifying a phone number and the customers to call using that number.",
          },
          {
            ["name"] = "duplicateFromCampaignId",
            ["title"] = "Duplicate From Campaign Id",
            ["type"] = "`$STRING`",
            ["short"] = "Optional campaign ID to duplicate config from.",
          },
          {
            ["name"] = "endedReason",
            ["title"] = "Ended Reason",
            ["type"] = "`$STRING`",
            ["short"] = "This is the explanation for how the campaign ended.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the campaign.",
          },
          {
            ["name"] = "maxConcurrency",
            ["title"] = "Max Concurrency",
            ["type"] = "`$NUMBER`",
            ["short"] = "This is the maximum number of concurrent calls that will be made for the campaign.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the name of the campaign.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this campaign belongs to.",
          },
          {
            ["name"] = "phoneNumberId",
            ["title"] = "Phone Number Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the phone number ID that will be used for the campaign calls.",
          },
          {
            ["name"] = "predialPlan",
            ["title"] = "Predial Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This opts the campaign into the blocking `campaign.predial` eligibility webhook.",
          },
          {
            ["name"] = "schedulePlan",
            ["title"] = "Schedule Plan",
            ["type"] = "`$ANY`",
            ["short"] = "This is the schedule plan for the campaign.",
          },
          {
            ["name"] = "server",
            ["title"] = "Server",
            ["type"] = "`$ANY`",
            ["short"] = "This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks.",
          },
          {
            ["name"] = "serverMessages",
            ["title"] = "Server Messages",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the messages that will be sent to your Server URL.",
          },
          {
            ["name"] = "squadId",
            ["title"] = "Squad Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the squad ID that will be used for the campaign calls.",
          },
          {
            ["name"] = "squadOverrides",
            ["title"] = "Squad Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "These are the overrides for the squad and template variables for the campaign.",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the status of the campaign.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the campaign was last updated.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "workflowId",
            ["title"] = "Workflow Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the workflow ID that will be used for the campaign calls.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "campaign",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/campaign",
                ["segments"] = {
                  {
                    ["lit"] = "campaign",
                  },
                },
                ["parts"] = {
                  "campaign",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v2/campaign",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "campaign",
                  },
                },
                ["parts"] = {
                  "v2",
                  "campaign",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v2/campaign",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "campaign",
                  },
                },
                ["parts"] = {
                  "v2",
                  "campaign",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "include_counter",
                      ["orig"] = "includeCounters",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "include_counter",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "status",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/campaign",
                ["segments"] = {
                  {
                    ["lit"] = "campaign",
                  },
                },
                ["parts"] = {
                  "campaign",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "status",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v2/campaign/{id}/contacts",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "campaign",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "contacts",
                  },
                },
                ["parts"] = {
                  "v2",
                  "campaign",
                  "{id}",
                  "contacts",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "contact",
                  ["exist"] = {
                    "id",
                    "limit",
                    "page",
                    "sort_by",
                    "status",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v2/campaign/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "campaign",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "v2",
                  "campaign",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "include_counter",
                      ["orig"] = "includeCounters",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "include_counter",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/campaign/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "campaign",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "campaign",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/campaign/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "campaign",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "campaign",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/v2/campaign/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "campaign",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "v2",
                  "campaign",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/campaign/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "campaign",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "campaign",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/v2/campaign/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "campaign",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "v2",
                  "campaign",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["chat"] = {
        ["fields"] = {
          {
            ["name"] = "assistant",
            ["title"] = "Assistant",
            ["type"] = "`$ANY`",
            ["short"] = "This is the assistant that will be used for the chat.",
          },
          {
            ["name"] = "assistantId",
            ["title"] = "Assistant Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the assistant that will be used for the chat.",
          },
          {
            ["name"] = "assistantOverrides",
            ["title"] = "Assistant Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "These are the variable values that will be used to replace template variables in the assistant messages.",
          },
          {
            ["name"] = "cost",
            ["title"] = "Cost",
            ["type"] = "`$NUMBER`",
            ["short"] = "This is the cost of the chat in USD.",
          },
          {
            ["name"] = "costs",
            ["title"] = "Costs",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the costs of individual components of the chat in USD.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the chat was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the chat.",
          },
          {
            ["name"] = "input",
            ["title"] = "Input",
            ["type"] = "`$ANY`",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$ANY`",
              },
            },
            ["short"] = "This is the input text for the chat.",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["short"] = "This is an array of messages used as context for the chat.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is the name of the chat.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this chat belongs to.",
          },
          {
            ["name"] = "output",
            ["title"] = "Output",
            ["type"] = "`$ARRAY`",
            ["short"] = "This is the output messages generated by the system in response to the input.",
          },
          {
            ["name"] = "previousChatId",
            ["title"] = "Previous Chat Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ID of the chat that will be used as context for the new chat.",
          },
          {
            ["name"] = "sessionId",
            ["title"] = "Session Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ID of the session that will be used for the chat.",
          },
          {
            ["name"] = "squad",
            ["title"] = "Squad",
            ["type"] = "`$ANY`",
            ["short"] = "This is the squad that will be used for the chat.",
          },
          {
            ["name"] = "squadId",
            ["title"] = "Squad Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the squad that will be used for the chat.",
          },
          {
            ["name"] = "stream",
            ["title"] = "Stream",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "This is a flag that determines whether the response should be streamed.",
          },
          {
            ["name"] = "transport",
            ["title"] = "Transport",
            ["type"] = "`$ANY`",
            ["short"] = "This is used to send the chat through a transport like SMS.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the chat was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "chat",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/chat",
                ["segments"] = {
                  {
                    ["lit"] = "chat",
                  },
                },
                ["parts"] = {
                  "chat",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/chat/responses",
                ["segments"] = {
                  {
                    ["lit"] = "chat",
                  },
                  {
                    ["lit"] = "responses",
                  },
                },
                ["parts"] = {
                  "chat",
                  "responses",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "response",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/chat",
                ["segments"] = {
                  {
                    ["lit"] = "chat",
                  },
                },
                ["parts"] = {
                  "chat",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "assistant_id",
                      ["orig"] = "assistantId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "assistant_id_any",
                      ["orig"] = "assistantIdAny",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "assistant-1,assistant-2,assistant-3",
                    },
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_any",
                      ["orig"] = "idAny",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "previous_chat_id",
                      ["orig"] = "previousChatId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "session_id",
                      ["orig"] = "sessionId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "squad_id",
                      ["orig"] = "squadId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "assistant_id",
                    "assistant_id_any",
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "id_any",
                    "limit",
                    "page",
                    "previous_chat_id",
                    "session_id",
                    "sort_by",
                    "sort_order",
                    "squad_id",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/chat/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "chat",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "chat",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/chat/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "chat",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "chat",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["eval"] = {
        ["fields"] = {
          {
            ["name"] = "cost",
            ["title"] = "Cost",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "This is the cost of the eval or suite run in USD.",
          },
          {
            ["name"] = "costs",
            ["title"] = "Costs",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "This is the break up of costs of the eval or suite run.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "This is the description of the eval.",
          },
          {
            ["name"] = "endedAt",
            ["title"] = "Ended At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "endedMessage",
            ["title"] = "Ended Message",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ended message when the eval run ended for any reason apart from mockConversation.done",
          },
          {
            ["name"] = "endedReason",
            ["title"] = "Ended Reason",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the reason for the eval run to end.",
          },
          {
            ["name"] = "eval",
            ["title"] = "Eval",
            ["type"] = "`$ANY`",
            ["short"] = "This is the transient eval that will be run",
          },
          {
            ["name"] = "evalId",
            ["title"] = "Eval Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the id of the eval that will be run.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["short"] = "This is the mock conversation that will be used to evaluate the flow of the conversation.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is the name of the eval.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "results",
            ["title"] = "Results",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "This is the results of the eval or suite run.",
          },
          {
            ["name"] = "startedAt",
            ["title"] = "Started At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the status of the eval run.",
          },
          {
            ["name"] = "target",
            ["title"] = "Target",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "This is the target that will be run against the eval",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the type of the run.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "eval",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                },
                ["parts"] = {
                  "eval",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/run",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "run",
                  },
                },
                ["parts"] = {
                  "eval",
                  "run",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "run",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/run",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "run",
                  },
                },
                ["parts"] = {
                  "eval",
                  "run",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "search",
                      ["orig"] = "search",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "run",
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "limit",
                    "page",
                    "search",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                },
                ["parts"] = {
                  "eval",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/run/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "run",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "run",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.eval`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/eval/run/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "run",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "run",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.eval`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/eval/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/eval/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["file"] = {
        ["fields"] = {
          {
            ["name"] = "bucket",
            ["title"] = "Bucket",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "bytes",
            ["title"] = "Bytes",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the file was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the file.",
          },
          {
            ["name"] = "key",
            ["title"] = "Key",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "mimetype",
            ["title"] = "Mimetype",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is the name of the file.",
          },
          {
            ["name"] = "object",
            ["title"] = "Object",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this file belongs to.",
          },
          {
            ["name"] = "originalName",
            ["title"] = "Original Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "parsedTextBytes",
            ["title"] = "Parsed Text Bytes",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "parsedTextUrl",
            ["title"] = "Parsed Text Url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "path",
            ["title"] = "Path",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "purpose",
            ["title"] = "Purpose",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the file was last updated.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "file",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/file",
                ["segments"] = {
                  {
                    ["lit"] = "file",
                  },
                },
                ["parts"] = {
                  "file",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/file",
                ["segments"] = {
                  {
                    ["lit"] = "file",
                  },
                },
                ["parts"] = {
                  "file",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "purpose",
                      ["orig"] = "purpose",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "purpose",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/file/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "file",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "file",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/file/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "file",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "file",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/file/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "file",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "file",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["insight"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the Insight was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the Insight.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is the name of the Insight.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this Insight belongs to.",
          },
          {
            ["name"] = "systemKey",
            ["title"] = "System Key",
            ["type"] = "`$STRING`",
            ["short"] = "Stable server-owned identifier for system-created insights.",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the type of the Insight.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the Insight was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "insight",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/reporting/insight/{id}/run",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "insight",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "run",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "insight",
                  "{id}",
                  "run",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "run",
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/reporting/insight",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "insight",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "insight",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/reporting/insight/preview",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "insight",
                  },
                  {
                    ["lit"] = "preview",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "insight",
                  "preview",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "preview",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/reporting/insight",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "insight",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "insight",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/reporting/insight/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "insight",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "insight",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/reporting/insight/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "insight",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "insight",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/reporting/insight/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "reporting",
                  },
                  {
                    ["lit"] = "insight",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "reporting",
                  "insight",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["knowledge_base"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "files",
            ["title"] = "Files",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "toolId",
            ["title"] = "Tool Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Id of the tool that searches this knowledge base (at most one per base; provisioned on creation).",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "knowledge_base",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v2/knowledge-base",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v2/knowledge-base",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v2/knowledge-base/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/v2/knowledge-base/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/v2/knowledge-base/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["knowledge_base_v2_file"] = {
        ["fields"] = {
          {
            ["name"] = "bytes",
            ["title"] = "Bytes",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "fileId",
            ["title"] = "File Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "fileName",
            ["title"] = "File Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "knowledgeBaseV2Id",
            ["title"] = "Knowledge Base V2 Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "mimetype",
            ["title"] = "Mimetype",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "knowledge_base_v2_file",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v2/knowledge-base/{id}/file/{fileId}/retry",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                  {
                    ["var"] = "knowledge_base_id",
                  },
                  {
                    ["lit"] = "file",
                  },
                  {
                    ["var"] = "file_id",
                  },
                  {
                    ["lit"] = "retry",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                  "{knowledge_base_id}",
                  "file",
                  "{file_id}",
                  "retry",
                },
                ["rename"] = {
                  ["param"] = {
                    ["fileId"] = "file_id",
                    ["id"] = "knowledge_base_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "file_id",
                      ["orig"] = "fileId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "knowledge_base_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "file_id",
                    "knowledge_base_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v2/knowledge-base/{id}/file",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "file",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                  "{id}",
                  "file",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v2/knowledge-base/{id}/file",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "file",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                  "{id}",
                  "file",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/v2/knowledge-base/{id}/file/{fileId}",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "knowledge-base",
                  },
                  {
                    ["var"] = "knowledge_base_id",
                  },
                  {
                    ["lit"] = "file",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "v2",
                  "knowledge-base",
                  "{knowledge_base_id}",
                  "file",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["fileId"] = "id",
                    ["id"] = "knowledge_base_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "fileId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "knowledge_base_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "knowledge_base_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.knowledge_base",
            },
            {
              "$.main.kit.entity.knowledge_base",
              "$.main.kit.entity.file",
            },
          },
        },
      },
      ["personality"] = {
        ["fields"] = {
          {
            ["name"] = "assistant",
            ["title"] = "Assistant",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ANY`",
              },
            },
            ["short"] = "This is the full assistant configuration for this personality.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the personality was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the personality.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the name of the personality (e.g., \"Confused Carl\", \"Rude Rob\").",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the organization this personality belongs to.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "path",
            ["title"] = "Path",
            ["type"] = "`$STRING`",
            ["short"] = "Optional folder path for organizing personalities.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the personality was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "personality",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/simulation/personality",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "personality",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "personality",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/personality",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "personality",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "personality",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/personality/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "personality",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "personality",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/eval/simulation/personality/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "personality",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "personality",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/eval/simulation/personality/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "personality",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "personality",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["phone_number"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Metadata about the pagination.",
          },
          {
            ["name"] = "results",
            ["title"] = "Results",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "A list of phone numbers, which can be of any provider type.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "phone_number",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/phone-number",
                ["segments"] = {
                  {
                    ["lit"] = "phone-number",
                  },
                },
                ["parts"] = {
                  "phone-number",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v2/phone-number",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "phone-number",
                  },
                },
                ["parts"] = {
                  "v2",
                  "phone-number",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "search",
                      ["orig"] = "search",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "limit",
                    "page",
                    "search",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/phone-number",
                ["segments"] = {
                  {
                    ["lit"] = "phone-number",
                  },
                },
                ["parts"] = {
                  "phone-number",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "limit",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/phone-number/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "phone-number",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "phone-number",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/phone-number/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "phone-number",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "phone-number",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/phone-number/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "phone-number",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "phone-number",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["provider"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the provider resource was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the provider resource.",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this provider resource belongs to.",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the provider that manages this resource.",
          },
          {
            ["name"] = "resource",
            ["title"] = "Resource",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "This is the full resource data from the provider's API.",
          },
          {
            ["name"] = "resourceId",
            ["title"] = "Resource Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the provider-specific identifier for the resource.",
          },
          {
            ["name"] = "resourceName",
            ["title"] = "Resource Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the name/type of the resource.",
          },
          {
            ["name"] = "results",
            ["title"] = "Results",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the provider resource was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["from"] = {
            ["id"] = "id",
            ["provider"] = "provider",
            ["resource_name"] = "resourceName",
          },
          ["name"] = "id",
          ["parts"] = {
            "provider",
            "resource_name",
            "id",
          },
          ["sep"] = "/",
        },
        ["name"] = "provider",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/provider/{provider}/{resourceName}",
                ["segments"] = {
                  {
                    ["lit"] = "provider",
                  },
                  {
                    ["var"] = "provider",
                  },
                  {
                    ["var"] = "resource_name",
                  },
                },
                ["parts"] = {
                  "provider",
                  "{provider}",
                  "{resource_name}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["resourceName"] = "resource_name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "content_type",
                      ["orig"] = "content-type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                      ["reqd"] = true,
                    },
                  },
                  ["params"] = {
                    {
                      ["name"] = "provider",
                      ["orig"] = "provider",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "resource_name",
                      ["orig"] = "resourceName",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "content_type",
                    "provider",
                    "resource_name",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/provider/{provider}/{resourceName}",
                ["segments"] = {
                  {
                    ["lit"] = "provider",
                  },
                  {
                    ["var"] = "provider",
                  },
                  {
                    ["var"] = "resource_name",
                  },
                },
                ["parts"] = {
                  "provider",
                  "{provider}",
                  "{resource_name}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["resourceName"] = "resource_name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "provider",
                      ["orig"] = "provider",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "resource_name",
                      ["orig"] = "resourceName",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "resource_id",
                      ["orig"] = "resourceId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "limit",
                    "page",
                    "provider",
                    "resource_id",
                    "resource_name",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/provider/{provider}/{resourceName}/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "provider",
                  },
                  {
                    ["var"] = "provider",
                  },
                  {
                    ["var"] = "resource_name",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "provider",
                  "{provider}",
                  "{resource_name}",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["resourceName"] = "resource_name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "provider",
                      ["orig"] = "provider",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "resource_name",
                      ["orig"] = "resourceName",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "provider",
                    "resource_name",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/provider/{provider}/{resourceName}/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "provider",
                  },
                  {
                    ["var"] = "provider",
                  },
                  {
                    ["var"] = "resource_name",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "provider",
                  "{provider}",
                  "{resource_name}",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["resourceName"] = "resource_name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "provider",
                      ["orig"] = "provider",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "resource_name",
                      ["orig"] = "resourceName",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "provider",
                    "resource_name",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/provider/{provider}/{resourceName}/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "provider",
                  },
                  {
                    ["var"] = "provider",
                  },
                  {
                    ["var"] = "resource_name",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "provider",
                  "{provider}",
                  "{resource_name}",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["resourceName"] = "resource_name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "provider",
                      ["orig"] = "provider",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "resource_name",
                      ["orig"] = "resourceName",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "provider",
                    "resource_name",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["scenario"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the scenario was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "evaluations",
            ["title"] = "Evaluations",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["short"] = "This is the structured output-based evaluation plan for the simulation.",
          },
          {
            ["name"] = "hooks",
            ["title"] = "Hooks",
            ["type"] = "`$ARRAY`",
            ["short"] = "Hooks to run on simulation lifecycle events",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the scenario.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "instructions",
            ["title"] = "Instructions",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the script/instructions for the tester to follow during the simulation.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the name of the scenario.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the organization this scenario belongs to.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "path",
            ["title"] = "Path",
            ["type"] = "`$STRING`",
            ["short"] = "Optional folder path for organizing scenarios.",
          },
          {
            ["name"] = "targetOverrides",
            ["title"] = "Target Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "Overrides to inject into the simulated target assistant or squad",
          },
          {
            ["name"] = "toolMocks",
            ["title"] = "Tool Mocks",
            ["type"] = "`$ARRAY`",
            ["short"] = "Scenario-level tool call mocks to use during simulations.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the scenario was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "scenario",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/simulation/scenario",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "scenario",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "scenario",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/scenario",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "scenario",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "scenario",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_any",
                      ["orig"] = "idAny",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id_any",
                    "limit",
                    "name",
                    "page",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/scenario/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "scenario",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "scenario",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/eval/simulation/scenario/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "scenario",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "scenario",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/eval/simulation/scenario/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "scenario",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "scenario",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["scorecard"] = {
        ["fields"] = {
          {
            ["name"] = "assistantIds",
            ["title"] = "Assistant Ids",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the assistant IDs that this scorecard is linked to.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the scorecard was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "This is the description of the scorecard.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the scorecard.",
          },
          {
            ["name"] = "metrics",
            ["title"] = "Metrics",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["short"] = "These are the metrics that will be used to evaluate the scorecard.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is the name of the scorecard.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this scorecard belongs to.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the scorecard was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "scorecard",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/observability/scorecard",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "scorecard",
                  },
                },
                ["parts"] = {
                  "observability",
                  "scorecard",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/observability/scorecard",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "scorecard",
                  },
                },
                ["parts"] = {
                  "observability",
                  "scorecard",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/observability/scorecard/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "scorecard",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "observability",
                  "scorecard",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/observability/scorecard/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "scorecard",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "observability",
                  "scorecard",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/observability/scorecard/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "observability",
                  },
                  {
                    ["lit"] = "scorecard",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "observability",
                  "scorecard",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["session"] = {
        ["fields"] = {
          {
            ["name"] = "artifact",
            ["title"] = "Artifact",
            ["type"] = "`$ANY`",
            ["short"] = "These are the artifacts that were extracted from the session messages.",
          },
          {
            ["name"] = "assistant",
            ["title"] = "Assistant",
            ["type"] = "`$ANY`",
            ["short"] = "This is the assistant configuration for this session.",
          },
          {
            ["name"] = "assistantId",
            ["title"] = "Assistant Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ID of the assistant associated with this session.",
          },
          {
            ["name"] = "assistantOverrides",
            ["title"] = "Assistant Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "These are the overrides for the assistant configuration.",
          },
          {
            ["name"] = "cost",
            ["title"] = "Cost",
            ["type"] = "`$NUMBER`",
            ["short"] = "This is the cost of the session in USD.",
          },
          {
            ["name"] = "costs",
            ["title"] = "Costs",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the costs of individual components of the session in USD.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 timestamp indicating when the session was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "customer",
            ["title"] = "Customer",
            ["type"] = "`$ANY`",
            ["short"] = "This is the customer information associated with this session.",
          },
          {
            ["name"] = "customerId",
            ["title"] = "Customer Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the customerId of the customer associated with this session.",
          },
          {
            ["name"] = "expirationSeconds",
            ["title"] = "Expiration Seconds",
            ["type"] = "`$NUMBER`",
            ["short"] = "Session expiration time in seconds.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the session.",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["short"] = "This is an array of chat messages in the session.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is a user-defined name for the session.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the organization that owns this session.",
          },
          {
            ["name"] = "phoneNumber",
            ["title"] = "Phone Number",
            ["type"] = "`$ANY`",
            ["short"] = "This is the phone number configuration for this session.",
          },
          {
            ["name"] = "phoneNumberId",
            ["title"] = "Phone Number Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ID of the phone number associated with this session.",
          },
          {
            ["name"] = "squad",
            ["title"] = "Squad",
            ["type"] = "`$ANY`",
            ["short"] = "This is the squad configuration for this session.",
          },
          {
            ["name"] = "squadId",
            ["title"] = "Squad Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the squad ID associated with this session.",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["short"] = "This is the current status of the session.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 timestamp indicating when the session was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "session",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/session",
                ["segments"] = {
                  {
                    ["lit"] = "session",
                  },
                },
                ["parts"] = {
                  "session",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/session",
                ["segments"] = {
                  {
                    ["lit"] = "session",
                  },
                },
                ["parts"] = {
                  "session",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "assistant_id",
                      ["orig"] = "assistantId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "assistant_id_any",
                      ["orig"] = "assistantIdAny",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "assistant-1,assistant-2,assistant-3",
                    },
                    {
                      ["name"] = "assistant_override",
                      ["orig"] = "assistantOverrides",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "customer_number_any",
                      ["orig"] = "customerNumberAny",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "+1234567890,+0987654321",
                    },
                    {
                      ["name"] = "email",
                      ["orig"] = "email",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "extension",
                      ["orig"] = "extension",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "external_id",
                      ["orig"] = "externalId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_any",
                      ["orig"] = "idAny",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "number",
                      ["orig"] = "number",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "number_e164_check_enabled",
                      ["orig"] = "numberE164CheckEnabled",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "phone_number_id",
                      ["orig"] = "phoneNumberId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "phone_number_id_any",
                      ["orig"] = "phoneNumberIdAny",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sip_uri",
                      ["orig"] = "sipUri",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "squad_id",
                      ["orig"] = "squadId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "squad_override",
                      ["orig"] = "squadOverrides",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "workflow_id",
                      ["orig"] = "workflowId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "assistant_id",
                    "assistant_id_any",
                    "assistant_override",
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "customer_number_any",
                    "email",
                    "extension",
                    "external_id",
                    "id",
                    "id_any",
                    "limit",
                    "name",
                    "number",
                    "number_e164_check_enabled",
                    "page",
                    "phone_number_id",
                    "phone_number_id_any",
                    "sip_uri",
                    "sort_by",
                    "sort_order",
                    "squad_id",
                    "squad_override",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                    "workflow_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/session/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "session",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "session",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/session/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "session",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "session",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/session/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "session",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "session",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["simulation"] = {
        ["fields"] = {
          {
            ["name"] = "assistantId",
            ["title"] = "Assistant Id",
            ["type"] = "`$STRING`",
            ["short"] = "ID of the assistant to generate scenarios for",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the simulation was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the simulation.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is an optional friendly name for the simulation.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the organization this simulation belongs to.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "path",
            ["title"] = "Path",
            ["type"] = "`$STRING`",
            ["short"] = "Optional folder path for organizing simulations.",
          },
          {
            ["name"] = "personalityId",
            ["title"] = "Personality Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the ID of the personality to use for this simulation.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "scenarioId",
            ["title"] = "Scenario Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the ID of the scenario to use for this simulation.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "squadId",
            ["title"] = "Squad Id",
            ["type"] = "`$STRING`",
            ["short"] = "ID of the squad to generate scenarios for",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the simulation was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "simulation",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/simulation",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/simulation/scenario/generate",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "scenario",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "scenario",
                  "generate",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_any",
                      ["orig"] = "idAny",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "standalone_only",
                      ["orig"] = "standaloneOnly",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id_any",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "standalone_only",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/concurrency",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "concurrency",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "concurrency",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "concurrency",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/eval/simulation/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/eval/simulation/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["simulation_run"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 date-time when created",
            ["format"] = "date-time",
          },
          {
            ["name"] = "endedAt",
            ["title"] = "Ended At",
            ["type"] = "`$STRING`",
            ["short"] = "When the run ended",
            ["format"] = "date-time",
          },
          {
            ["name"] = "endedReason",
            ["title"] = "Ended Reason",
            ["type"] = "`$STRING`",
            ["short"] = "Reason the run ended",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Unique identifier for the run",
            ["format"] = "uuid",
          },
          {
            ["name"] = "itemCounts",
            ["title"] = "Item Counts",
            ["type"] = "`$ANY`",
            ["short"] = "Aggregate counts of run items by status",
          },
          {
            ["name"] = "iterations",
            ["title"] = "Iterations",
            ["type"] = "`$NUMBER`",
            ["short"] = "Number of times to run each simulation (default: 1)",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Organization ID",
            ["format"] = "uuid",
          },
          {
            ["name"] = "queuedAt",
            ["title"] = "Queued At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "When the run was queued",
            ["format"] = "date-time",
          },
          {
            ["name"] = "simulations",
            ["title"] = "Simulations",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "Array of simulations and/or suites to run",
          },
          {
            ["name"] = "startedAt",
            ["title"] = "Started At",
            ["type"] = "`$STRING`",
            ["short"] = "When the run started",
            ["format"] = "date-time",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Current status of the run",
          },
          {
            ["name"] = "target",
            ["title"] = "Target",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Target to test against",
          },
          {
            ["name"] = "transport",
            ["title"] = "Transport",
            ["type"] = "`$ANY`",
            ["short"] = "Transport configuration for the simulation runs",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "ISO 8601 date-time when last updated",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "simulation_run",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/simulation/run",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "run",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "run",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["header"] = {
                    {
                      ["name"] = "user_agent",
                      ["orig"] = "user-agent",
                      ["type"] = "`$STRING`",
                      ["kind"] = "header",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "user_agent",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/run",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "run",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "run",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "filter_status",
                      ["orig"] = "filterStatus",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "target_id",
                      ["orig"] = "targetId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "target_type",
                      ["orig"] = "targetType",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "filter_status",
                    "limit",
                    "page",
                    "sort_by",
                    "sort_order",
                    "status",
                    "target_id",
                    "target_type",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/run/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "run",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "run",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/eval/simulation/run/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "run",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "run",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["simulation_run_item"] = {
        ["fields"] = {
          {
            ["name"] = "callId",
            ["title"] = "Call Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ID of the target Vapi call (the assistant being tested).",
            ["format"] = "uuid",
          },
          {
            ["name"] = "canceledAt",
            ["title"] = "Canceled At",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ISO 8601 date-time string of when the run was canceled.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "completedAt",
            ["title"] = "Completed At",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ISO 8601 date-time string of when the run completed.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "configurations",
            ["title"] = "Configurations",
            ["type"] = "`$ANY`",
            ["short"] = "This is the configuration for how this simulation run executes.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the run item was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "failedAt",
            ["title"] = "Failed At",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ISO 8601 date-time string of when the run failed.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "failureReason",
            ["title"] = "Failure Reason",
            ["type"] = "`$STRING`",
            ["short"] = "This is the reason for failure.",
          },
          {
            ["name"] = "hooks",
            ["title"] = "Hooks",
            ["type"] = "`$ARRAY`",
            ["short"] = "Hooks configured for this simulation run item",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the simulation run item.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "improvementSuggestions",
            ["title"] = "Improvement Suggestions",
            ["type"] = "`$ANY`",
            ["short"] = "This is the AI-generated improvement suggestions for failed runs.",
          },
          {
            ["name"] = "iterationNumber",
            ["title"] = "Iteration Number",
            ["type"] = "`$NUMBER`",
            ["short"] = "This is the iteration number (1-indexed) when run with iterations > 1.",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$ANY`",
            ["short"] = "This is the metadata containing snapshots and call data.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the organization.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "personalityId",
            ["title"] = "Personality Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the personality ID at run creation time.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "queuedAt",
            ["title"] = "Queued At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the run was queued.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "results",
            ["title"] = "Results",
            ["type"] = "`$ANY`",
            ["short"] = "This is the results of the simulation run.",
          },
          {
            ["name"] = "runId",
            ["title"] = "Run Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ID of the parent run (batch/group).",
            ["format"] = "uuid",
          },
          {
            ["name"] = "scenarioId",
            ["title"] = "Scenario Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the scenario ID at run creation time.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "sessionId",
            ["title"] = "Session Id",
            ["type"] = "`$STRING`",
            ["short"] = "This is the session ID for chat-based simulations (webchat transport).",
            ["format"] = "uuid",
          },
          {
            ["name"] = "simulationId",
            ["title"] = "Simulation Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ID of the simulation this run belongs to.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "startedAt",
            ["title"] = "Started At",
            ["type"] = "`$STRING`",
            ["short"] = "This is the ISO 8601 date-time string of when the run started.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the current status of the run.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the run item was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "simulation_run_item",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/simulation/run/{id}/item/{itemId}/generate",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "run",
                  },
                  {
                    ["var"] = "run_id",
                  },
                  {
                    ["lit"] = "item",
                  },
                  {
                    ["var"] = "item_id",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "run",
                  "{run_id}",
                  "item",
                  "{item_id}",
                  "generate",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "run_id",
                    ["itemId"] = "item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "item_id",
                      ["orig"] = "itemId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "run_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "force",
                      ["orig"] = "force",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "persist",
                      ["orig"] = "persist",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "generate",
                  ["exist"] = {
                    "force",
                    "item_id",
                    "persist",
                    "run_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/run/{id}/item",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "run",
                  },
                  {
                    ["var"] = "run_id",
                  },
                  {
                    ["lit"] = "item",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "run",
                  "{run_id}",
                  "item",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "run_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "run_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "run_id",
                      ["orig"] = "runId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "simulation_id",
                      ["orig"] = "simulationId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "limit",
                    "page",
                    "run_id",
                    "simulation_id",
                    "sort_by",
                    "sort_order",
                    "status",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/run/{id}/item/{itemId}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "run",
                  },
                  {
                    ["var"] = "run_id",
                  },
                  {
                    ["lit"] = "item",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "run",
                  "{run_id}",
                  "item",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "run_id",
                    ["itemId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "itemId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "run_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "run_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/eval/simulation/run/{id}/item/{itemId}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "run",
                  },
                  {
                    ["var"] = "run_id",
                  },
                  {
                    ["lit"] = "item",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "run",
                  "{run_id}",
                  "item",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "run_id",
                    ["itemId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "itemId",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "run_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "run_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["simulation_suite"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the suite was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the simulation suite.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the name of the simulation suite.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the organization this suite belongs to.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "path",
            ["title"] = "Path",
            ["type"] = "`$STRING`",
            ["short"] = "Optional folder path for organizing simulation suites.",
          },
          {
            ["name"] = "simulationIds",
            ["title"] = "Simulation Ids",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["short"] = "This is the list of simulation IDs in this suite.",
          },
          {
            ["name"] = "slackWebhookUrl",
            ["title"] = "Slack Webhook Url",
            ["type"] = "`$STRING`",
            ["short"] = "This is the Slack webhook URL for notifications.",
          },
          {
            ["name"] = "targetAssignments",
            ["title"] = "Target Assignments",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$ARRAY`",
              },
              ["update"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["short"] = "This is the ordered list of assistant or squad assignments for the suite.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the suite was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "simulation_suite",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/simulation/suite/{id}/duplicate",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "suite",
                  },
                  {
                    ["var"] = "suite_id",
                  },
                  {
                    ["lit"] = "duplicate",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "suite",
                  "{suite_id}",
                  "duplicate",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "suite_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "suite_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "suite_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/eval/simulation/suite",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "suite",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "suite",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/suite",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "suite",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "suite",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "limit",
                    "name",
                    "page",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/eval/simulation/suite/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "suite",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "suite",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/eval/simulation/suite/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "suite",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "suite",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/eval/simulation/suite/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "eval",
                  },
                  {
                    ["lit"] = "simulation",
                  },
                  {
                    ["lit"] = "suite",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "eval",
                  "simulation",
                  "suite",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["squad"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the squad was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the squad.",
          },
          {
            ["name"] = "latestVersion",
            ["title"] = "Latest Version",
            ["type"] = "`$STRING`",
            ["short"] = "This is the latest version label (e.g.",
          },
          {
            ["name"] = "members",
            ["title"] = "Members",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "This is the list of assistants that make up the squad.",
          },
          {
            ["name"] = "membersOverrides",
            ["title"] = "Members Overrides",
            ["type"] = "`$ANY`",
            ["short"] = "This can be used to override all the assistants' settings and provide values for their template variables.",
          },
          {
            ["name"] = "modelDeprecations",
            ["title"] = "Model Deprecations",
            ["type"] = "`$ARRAY`",
            ["short"] = "Read-only.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "This is the name of the squad.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this squad belongs to.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the squad was last updated.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "squad",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/squad",
                ["segments"] = {
                  {
                    ["lit"] = "squad",
                  },
                },
                ["parts"] = {
                  "squad",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/squad",
                ["segments"] = {
                  {
                    ["lit"] = "squad",
                  },
                },
                ["parts"] = {
                  "squad",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_any",
                      ["orig"] = "idAny",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id_any",
                    "limit",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/squad/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "squad",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "squad",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/squad/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "squad",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "squad",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/squad/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "squad",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "squad",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["structured_output"] = {
        ["fields"] = {
          {
            ["name"] = "assistantIds",
            ["title"] = "Assistant Ids",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the assistant IDs that this structured output is linked to.",
          },
          {
            ["name"] = "compliancePlan",
            ["title"] = "Compliance Plan",
            ["type"] = "`$ANY`",
            ["short"] = "Compliance configuration for this output.",
          },
          {
            ["name"] = "conditions",
            ["title"] = "Conditions",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the conditions that gate the execution of this structured output.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the structured output was created.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "This is the description of what the structured output extracts.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the structured output.",
          },
          {
            ["name"] = "model",
            ["title"] = "Model",
            ["type"] = "`$ANY`",
            ["short"] = "This is the model that will be used to extract the structured output.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "This is the name of the structured output.",
          },
          {
            ["name"] = "orgId",
            ["title"] = "Org Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the unique identifier for the org that this structured output belongs to.",
          },
          {
            ["name"] = "regex",
            ["title"] = "Regex",
            ["type"] = "`$STRING`",
            ["short"] = "This is the regex pattern to match against the transcript.",
          },
          {
            ["name"] = "schema",
            ["title"] = "Schema",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ANY`",
              },
            },
            ["short"] = "This is the JSON Schema definition for the structured output.",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["short"] = "This is the type of structured output.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "This is the ISO 8601 date-time string of when the structured output was last updated.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "workflowIds",
            ["title"] = "Workflow Ids",
            ["type"] = "`$ARRAY`",
            ["short"] = "These are the workflow IDs that this structured output is linked to.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "structured_output",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/structured-output",
                ["segments"] = {
                  {
                    ["lit"] = "structured-output",
                  },
                },
                ["parts"] = {
                  "structured-output",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/structured-output/run",
                ["segments"] = {
                  {
                    ["lit"] = "structured-output",
                  },
                  {
                    ["lit"] = "run",
                  },
                },
                ["parts"] = {
                  "structured-output",
                  "run",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "run",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/structured-output",
                ["segments"] = {
                  {
                    ["lit"] = "structured-output",
                  },
                },
                ["parts"] = {
                  "structured-output",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sortBy",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sortOrder",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "id",
                    "limit",
                    "name",
                    "page",
                    "sort_by",
                    "sort_order",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/structured-output/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "structured-output",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "structured-output",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/structured-output/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "structured-output",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "structured-output",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/structured-output/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "structured-output",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "structured-output",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "schema_override",
                      ["orig"] = "schemaOverride",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "schema_override",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tool"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "tool",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/tool",
                ["segments"] = {
                  {
                    ["lit"] = "tool",
                  },
                },
                ["parts"] = {
                  "tool",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tool",
                ["segments"] = {
                  {
                    ["lit"] = "tool",
                  },
                },
                ["parts"] = {
                  "tool",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "created_at_ge",
                      ["orig"] = "createdAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_gt",
                      ["orig"] = "createdAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_le",
                      ["orig"] = "createdAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "created_at_lt",
                      ["orig"] = "createdAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_ge",
                      ["orig"] = "updatedAtGe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_gt",
                      ["orig"] = "updatedAtGt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_le",
                      ["orig"] = "updatedAtLe",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "updated_at_lt",
                      ["orig"] = "updatedAtLt",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "created_at_ge",
                    "created_at_gt",
                    "created_at_le",
                    "created_at_lt",
                    "limit",
                    "updated_at_ge",
                    "updated_at_gt",
                    "updated_at_le",
                    "updated_at_lt",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tool/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "tool",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "tool",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/tool/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "tool",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "tool",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/tool/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "tool",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "tool",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
