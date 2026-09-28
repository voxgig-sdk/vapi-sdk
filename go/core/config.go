package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Vapi",
			"slug": "vapi",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.vapi.ai",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"analytics": map[string]any{},
				"assistant": map[string]any{},
				"board": map[string]any{},
				"call": map[string]any{},
				"campaign": map[string]any{},
				"chat": map[string]any{},
				"create_simulation_run": map[string]any{},
				"eval": map[string]any{},
				"file": map[string]any{},
				"insight": map[string]any{},
				"knowledge_base": map[string]any{},
				"knowledge_base_v2_file": map[string]any{},
				"personality": map[string]any{},
				"phone_number": map[string]any{},
				"provider": map[string]any{},
				"scenario": map[string]any{},
				"scorecard": map[string]any{},
				"session": map[string]any{},
				"simulation": map[string]any{},
				"simulation_run": map[string]any{},
				"simulation_run_item": map[string]any{},
				"simulation_suite": map[string]any{},
				"squad": map[string]any{},
				"structured_output": map[string]any{},
				"tool": map[string]any{},
			},
		},
		"entity": map[string]any{
			"analytics": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "queries",
						"title": "Queries",
						"type": "`$ARRAY`",
						"req": true,
						"short": "This is the list of metric queries you want to perform.",
					},
				},
				"name": "analytics",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/analytics",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
								},
								"parts": []any{
									"analytics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"assistant": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "analysisPlan",
						"title": "Analysis Plan",
						"type": "`$ANY`",
						"short": "This is the plan for analysis of assistant's calls.",
						"deprecated": true,
					},
					map[string]any{
						"name": "artifactPlan",
						"title": "Artifact Plan",
						"type": "`$ANY`",
						"short": "This is the plan for artifacts generated during assistant's calls.",
					},
					map[string]any{
						"name": "backgroundSound",
						"title": "Background Sound",
						"type": "`$ANY`",
						"short": "This is the background sound in the call.",
					},
					map[string]any{
						"name": "backgroundSpeechDenoisingPlan",
						"title": "Background Speech Denoising Plan",
						"type": "`$ANY`",
						"short": "This enables filtering of noise and background speech while the user is talking.",
					},
					map[string]any{
						"name": "clientMessages",
						"title": "Client Messages",
						"type": "`$ARRAY`",
						"short": "These are the messages that will be sent to your Client SDKs.",
					},
					map[string]any{
						"name": "compliancePlan",
						"title": "Compliance Plan",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "contentType",
						"title": "Content Type",
						"type": "`$STRING`",
						"short": "The content-type the URL returned, when a response was received.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the assistant was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "credentialIds",
						"title": "Credential Ids",
						"type": "`$ARRAY`",
						"short": "These are the credentials that will be used for the assistant calls.",
					},
					map[string]any{
						"name": "credentials",
						"title": "Credentials",
						"type": "`$ARRAY`",
						"short": "These are dynamic credentials that will be used for the assistant calls.",
					},
					map[string]any{
						"name": "endCallMessage",
						"title": "End Call Message",
						"type": "`$STRING`",
						"short": "This is the message that the assistant will say if it ends the call.",
					},
					map[string]any{
						"name": "endCallPhrases",
						"title": "End Call Phrases",
						"type": "`$ARRAY`",
						"short": "This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up.",
					},
					map[string]any{
						"name": "firstMessage",
						"title": "First Message",
						"type": "`$STRING`",
						"short": "This is the first message that the assistant will say.",
					},
					map[string]any{
						"name": "firstMessageInterruptionsEnabled",
						"title": "First Message Interruptions Enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "firstMessageMode",
						"title": "First Message Mode",
						"type": "`$STRING`",
						"short": "This is the mode for the first message.",
					},
					map[string]any{
						"name": "hooks",
						"title": "Hooks",
						"type": "`$ARRAY`",
						"short": "This is a set of actions that will be performed on certain events.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the assistant.",
					},
					map[string]any{
						"name": "keypadInputPlan",
						"title": "Keypad Input Plan",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "latestVersion",
						"title": "Latest Version",
						"type": "`$STRING`",
						"short": "This is the latest version label (e.g.",
					},
					map[string]any{
						"name": "maxDurationSeconds",
						"title": "Max Duration Seconds",
						"type": "`$NUMBER`",
						"short": "This is the maximum number of seconds that the call will last.",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"short": "This is for metadata you want to store on the assistant.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$ANY`",
						"short": "These are the options for the assistant's LLM.",
					},
					map[string]any{
						"name": "modelDeprecations",
						"title": "Model Deprecations",
						"type": "`$ARRAY`",
						"short": "Read-only.",
					},
					map[string]any{
						"name": "modelOutputInMessagesEnabled",
						"title": "Model Output In Messages Enabled",
						"type": "`$BOOLEAN`",
						"short": "This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech.",
					},
					map[string]any{
						"name": "monitorPlan",
						"title": "Monitor Plan",
						"type": "`$ANY`",
						"short": "This is the plan for real-time monitoring of the assistant's calls.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is the name of the assistant.",
					},
					map[string]any{
						"name": "observabilityPlan",
						"title": "Observability Plan",
						"type": "`$ANY`",
						"short": "This is the plan for observability of assistant's calls.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this assistant belongs to.",
					},
					map[string]any{
						"name": "reason",
						"title": "Reason",
						"type": "`$STRING`",
						"short": "Why validation failed.",
					},
					map[string]any{
						"name": "server",
						"title": "Server",
						"type": "`$ANY`",
						"short": "This is where Vapi will send webhooks.",
					},
					map[string]any{
						"name": "serverMessages",
						"title": "Server Messages",
						"type": "`$ARRAY`",
						"short": "These are the messages that will be sent to your Server URL.",
					},
					map[string]any{
						"name": "startSpeakingPlan",
						"title": "Start Speaking Plan",
						"type": "`$ANY`",
						"short": "This is the plan for when the assistant should start talking.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$NUMBER`",
						"short": "The HTTP status the URL returned, when a response was received.",
					},
					map[string]any{
						"name": "stopSpeakingPlan",
						"title": "Stop Speaking Plan",
						"type": "`$ANY`",
						"short": "This is the plan for when assistant should stop talking on customer interruption.",
					},
					map[string]any{
						"name": "transcriber",
						"title": "Transcriber",
						"type": "`$ANY`",
						"short": "These are the options for the assistant's transcriber.",
					},
					map[string]any{
						"name": "transportConfigurations",
						"title": "Transport Configurations",
						"type": "`$ARRAY`",
						"short": "These are the configurations to be passed to the transport providers of assistant's calls, like Twilio.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the assistant was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the background sound URL to validate.",
					},
					map[string]any{
						"name": "valid",
						"title": "Valid",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the URL currently serves a live media file.",
					},
					map[string]any{
						"name": "voice",
						"title": "Voice",
						"type": "`$ANY`",
						"short": "These are the options for the assistant's voice.",
					},
					map[string]any{
						"name": "voicemailDetection",
						"title": "Voicemail Detection",
						"type": "`$ANY`",
						"short": "These are the settings to configure or disable voicemail detection.",
					},
					map[string]any{
						"name": "voicemailMessage",
						"title": "Voicemail Message",
						"type": "`$STRING`",
						"short": "This is the message that the assistant will say if the call is forwarded to voicemail.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "assistant",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/assistant",
								"segments": []any{
									map[string]any{
										"lit": "assistant",
									},
								},
								"parts": []any{
									"assistant",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/assistant/background-sound/validate",
								"segments": []any{
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"lit": "background-sound",
									},
									map[string]any{
										"lit": "validate",
									},
								},
								"parts": []any{
									"assistant",
									"background-sound",
									"validate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/assistant",
								"segments": []any{
									map[string]any{
										"lit": "assistant",
									},
								},
								"parts": []any{
									"assistant",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/assistant/{id}",
								"segments": []any{
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"assistant",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/assistant/{id}",
								"segments": []any{
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"assistant",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/assistant/{id}",
								"segments": []any{
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"assistant",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"board": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the Board was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the Board.",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$ARRAY`",
						"short": "This is the contents of the Board, which is an array of objects defining the type, contents, and position of the widgets on the Board.",
					},
					map[string]any{
						"name": "layout",
						"title": "Layout",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ANY`",
							},
						},
						"short": "This is the layout of the Board.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the name of the Board.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this Board belongs to.",
					},
					map[string]any{
						"name": "systemKey",
						"title": "System Key",
						"type": "`$STRING`",
						"short": "Server-owned key for system-provisioned boards.",
					},
					map[string]any{
						"name": "timeRangeOverride",
						"title": "Time Range Override",
						"type": "`$ANY`",
						"short": "This is the timerange override for the board.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the Board was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "board",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/reporting/board",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "board",
									},
								},
								"parts": []any{
									"reporting",
									"board",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reporting/board",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "board",
									},
								},
								"parts": []any{
									"reporting",
									"board",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reporting/board/default/metrics-overview",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "board",
									},
									map[string]any{
										"lit": "default",
									},
									map[string]any{
										"lit": "metrics-overview",
									},
								},
								"parts": []any{
									"reporting",
									"board",
									"default",
									"metrics-overview",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reporting/board/{id}",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "board",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"reporting",
									"board",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/reporting/board/{id}",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "board",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"reporting",
									"board",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/reporting/board/{id}",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "board",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"reporting",
									"board",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"call": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "analysis",
						"title": "Analysis",
						"type": "`$ANY`",
						"short": "This is the analysis of the call.",
					},
					map[string]any{
						"name": "artifact",
						"title": "Artifact",
						"type": "`$ANY`",
						"short": "These are the artifacts created from the call.",
					},
					map[string]any{
						"name": "artifactPlan",
						"title": "Artifact Plan",
						"type": "`$ANY`",
						"short": "This is a copy of assistant artifact plan.",
					},
					map[string]any{
						"name": "assistant",
						"title": "Assistant",
						"type": "`$ANY`",
						"short": "This is the assistant that will be used for the call.",
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"short": "This is the assistant ID that will be used for the call.",
					},
					map[string]any{
						"name": "assistantOverrides",
						"title": "Assistant Overrides",
						"type": "`$ANY`",
						"short": "These are the overrides for the `assistant` or `assistantId`'s settings and template variables.",
					},
					map[string]any{
						"name": "assistantVersion",
						"title": "Assistant Version",
						"type": "`$STRING`",
						"short": "This is the assistant version to use for this call.",
					},
					map[string]any{
						"name": "campaignId",
						"title": "Campaign Id",
						"type": "`$STRING`",
						"short": "This is the campaign ID that the call belongs to.",
					},
					map[string]any{
						"name": "compliance",
						"title": "Compliance",
						"type": "`$ANY`",
						"short": "This is the compliance of the call.",
					},
					map[string]any{
						"name": "cost",
						"title": "Cost",
						"type": "`$NUMBER`",
						"short": "This is the cost of the call in USD.",
					},
					map[string]any{
						"name": "costBreakdown",
						"title": "Cost Breakdown",
						"type": "`$ANY`",
						"short": "This is the cost of the call in USD.",
					},
					map[string]any{
						"name": "costs",
						"title": "Costs",
						"type": "`$ARRAY`",
						"short": "These are the costs of individual components of the call in USD.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the call was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "customer",
						"title": "Customer",
						"type": "`$ANY`",
						"short": "This is the customer that will be called.",
					},
					map[string]any{
						"name": "customerId",
						"title": "Customer Id",
						"type": "`$STRING`",
						"short": "This is the customer that will be called.",
					},
					map[string]any{
						"name": "customers",
						"title": "Customers",
						"type": "`$ARRAY`",
						"short": "This is used to issue batch calls to multiple customers.",
					},
					map[string]any{
						"name": "destination",
						"title": "Destination",
						"type": "`$ANY`",
						"short": "This is the destination where the call ended up being transferred to.",
					},
					map[string]any{
						"name": "endedAt",
						"title": "Ended At",
						"type": "`$STRING`",
						"short": "This is the ISO 8601 date-time string of when the call was ended.",
						"format": "date-time",
					},
					map[string]any{
						"name": "endedMessage",
						"title": "Ended Message",
						"type": "`$STRING`",
						"short": "This is the message that adds more context to the ended reason.",
					},
					map[string]any{
						"name": "endedReason",
						"title": "Ended Reason",
						"type": "`$STRING`",
						"short": "This is the explanation for how the call ended.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the call.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "monitor",
						"title": "Monitor",
						"type": "`$ANY`",
						"short": "This is to real-time monitor the call.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is the name of the call.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this call belongs to.",
					},
					map[string]any{
						"name": "phoneCallProvider",
						"title": "Phone Call Provider",
						"type": "`$STRING`",
						"short": "This is the provider of the call.",
						"deprecated": true,
					},
					map[string]any{
						"name": "phoneCallProviderId",
						"title": "Phone Call Provider Id",
						"type": "`$STRING`",
						"short": "The ID of the call as provided by the phone number service.",
						"deprecated": true,
					},
					map[string]any{
						"name": "phoneCallTransport",
						"title": "Phone Call Transport",
						"type": "`$STRING`",
						"short": "This is the transport of the phone call.",
					},
					map[string]any{
						"name": "phoneNumber",
						"title": "Phone Number",
						"type": "`$ANY`",
						"short": "This is the phone number that will be used for the call.",
					},
					map[string]any{
						"name": "phoneNumberId",
						"title": "Phone Number Id",
						"type": "`$STRING`",
						"short": "This is the phone number that will be used for the call.",
					},
					map[string]any{
						"name": "schedulePlan",
						"title": "Schedule Plan",
						"type": "`$ANY`",
						"short": "This is the schedule plan of the call.",
					},
					map[string]any{
						"name": "squad",
						"title": "Squad",
						"type": "`$ANY`",
						"short": "This is a squad that will be used for the call.",
					},
					map[string]any{
						"name": "squadId",
						"title": "Squad Id",
						"type": "`$STRING`",
						"short": "This is the squad that will be used for the call.",
					},
					map[string]any{
						"name": "squadOverrides",
						"title": "Squad Overrides",
						"type": "`$ANY`",
						"short": "These are the overrides for the `squad` or `squadId`'s member settings and template variables.",
					},
					map[string]any{
						"name": "squadVersion",
						"title": "Squad Version",
						"type": "`$STRING`",
						"short": "This is the squad version to use for this call.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"short": "This is the ISO 8601 date-time string of when the call was started.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "This is the status of the call.",
					},
					map[string]any{
						"name": "transport",
						"title": "Transport",
						"type": "`$ANY`",
						"short": "This is the transport of the call.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "This is the type of call.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the call was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "workflow",
						"title": "Workflow",
						"type": "`$ANY`",
						"short": "This is a workflow that will be used for the call.",
					},
					map[string]any{
						"name": "workflowId",
						"title": "Workflow Id",
						"type": "`$STRING`",
						"short": "This is the workflow that will be used for the call.",
					},
					map[string]any{
						"name": "workflowOverrides",
						"title": "Workflow Overrides",
						"type": "`$ANY`",
						"short": "These are the overrides for the `workflow` or `workflowId`'s settings and template variables.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "call",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/call",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
								},
								"parts": []any{
									"call",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
								},
								"parts": []any{
									"call",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistant_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "phone_number_id",
											"orig": "phone_number_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call/{id}",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"call",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call/{id}/assistant-recording",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "assistant-recording",
									},
								},
								"parts": []any{
									"call",
									"{id}",
									"assistant-recording",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "assistant_recording",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call/{id}/call-logs",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "call-logs",
									},
								},
								"parts": []any{
									"call",
									"{id}",
									"call-logs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "call_log",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call/{id}/customer-recording",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "customer-recording",
									},
								},
								"parts": []any{
									"call",
									"{id}",
									"customer-recording",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "customer_recording",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call/{id}/mono-recording",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "mono-recording",
									},
								},
								"parts": []any{
									"call",
									"{id}",
									"mono-recording",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "mono_recording",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call/{id}/pcap",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "pcap",
									},
								},
								"parts": []any{
									"call",
									"{id}",
									"pcap",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "pcap",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call/{id}/stereo-recording",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "stereo-recording",
									},
								},
								"parts": []any{
									"call",
									"{id}",
									"stereo-recording",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "stereo_recording",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/call/{id}/video-recording",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "video-recording",
									},
								},
								"parts": []any{
									"call",
									"{id}",
									"video-recording",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "video_recording",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/call/{id}",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"call",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/call/{id}",
								"segments": []any{
									map[string]any{
										"lit": "call",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"call",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"campaign": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"short": "This is the assistant ID that will be used for the campaign calls.",
					},
					map[string]any{
						"name": "assistantOverrides",
						"title": "Assistant Overrides",
						"type": "`$ANY`",
						"short": "These are the overrides for the assistant's settings and template variables for the campaign.",
					},
					map[string]any{
						"name": "callMetrics",
						"title": "Call Metrics",
						"type": "`$ANY`",
						"short": "These are the call-level outcomes for this campaign — how many contacts were actually dialed, and how many of those a human picked up.",
					},
					map[string]any{
						"name": "calls",
						"title": "Calls",
						"type": "`$OBJECT`",
						"req": true,
						"short": "This is a map of call IDs to campaign call details.",
					},
					map[string]any{
						"name": "callsCounterEnded",
						"title": "Calls Counter Ended",
						"type": "`$NUMBER`",
						"req": true,
						"short": "This is the number of calls that have ended.",
					},
					map[string]any{
						"name": "callsCounterEndedVoicemail",
						"title": "Calls Counter Ended Voicemail",
						"type": "`$NUMBER`",
						"req": true,
						"short": "This is the number of calls whose ended reason is 'voicemail'.",
					},
					map[string]any{
						"name": "callsCounterInProgress",
						"title": "Calls Counter In Progress",
						"type": "`$NUMBER`",
						"req": true,
						"short": "This is the number of calls that have been in progress.",
					},
					map[string]any{
						"name": "callsCounterQueued",
						"title": "Calls Counter Queued",
						"type": "`$NUMBER`",
						"req": true,
						"short": "This is the number of calls that have been queued.",
					},
					map[string]any{
						"name": "callsCounterScheduled",
						"title": "Calls Counter Scheduled",
						"type": "`$NUMBER`",
						"req": true,
						"short": "This is the number of calls that have been scheduled.",
					},
					map[string]any{
						"name": "contactCounters",
						"title": "Contact Counters",
						"type": "`$ANY`",
						"short": "These are the per-status contact counts for this campaign.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the campaign was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "customers",
						"title": "Customers",
						"type": "`$ARRAY`",
						"short": "These are the customers that will be called in the campaign.",
					},
					map[string]any{
						"name": "dialPlan",
						"title": "Dial Plan",
						"type": "`$ARRAY`",
						"short": "This is a list of dial entries, each specifying a phone number and the customers to call using that number.",
					},
					map[string]any{
						"name": "duplicateFromCampaignId",
						"title": "Duplicate From Campaign Id",
						"type": "`$STRING`",
						"short": "Optional campaign ID to duplicate config from.",
					},
					map[string]any{
						"name": "endedReason",
						"title": "Ended Reason",
						"type": "`$STRING`",
						"short": "This is the explanation for how the campaign ended.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the campaign.",
					},
					map[string]any{
						"name": "maxConcurrency",
						"title": "Max Concurrency",
						"type": "`$NUMBER`",
						"short": "This is the maximum number of concurrent calls that will be made for the campaign.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the name of the campaign.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this campaign belongs to.",
					},
					map[string]any{
						"name": "phoneNumberId",
						"title": "Phone Number Id",
						"type": "`$STRING`",
						"short": "This is the phone number ID that will be used for the campaign calls.",
					},
					map[string]any{
						"name": "predialPlan",
						"title": "Predial Plan",
						"type": "`$ANY`",
						"short": "This opts the campaign into the blocking `campaign.predial` eligibility webhook.",
					},
					map[string]any{
						"name": "schedulePlan",
						"title": "Schedule Plan",
						"type": "`$ANY`",
						"short": "This is the schedule plan for the campaign.",
					},
					map[string]any{
						"name": "server",
						"title": "Server",
						"type": "`$ANY`",
						"short": "This is the server (URL, auth headers, timeout, etc.) for the campaign webhooks.",
					},
					map[string]any{
						"name": "serverMessages",
						"title": "Server Messages",
						"type": "`$ARRAY`",
						"short": "These are the messages that will be sent to your Server URL.",
					},
					map[string]any{
						"name": "squadId",
						"title": "Squad Id",
						"type": "`$STRING`",
						"short": "This is the squad ID that will be used for the campaign calls.",
					},
					map[string]any{
						"name": "squadOverrides",
						"title": "Squad Overrides",
						"type": "`$ANY`",
						"short": "These are the overrides for the squad and template variables for the campaign.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the status of the campaign.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the campaign was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "workflowId",
						"title": "Workflow Id",
						"type": "`$STRING`",
						"short": "This is the workflow ID that will be used for the campaign calls.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "campaign",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/campaign",
								"segments": []any{
									map[string]any{
										"lit": "campaign",
									},
								},
								"parts": []any{
									"campaign",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/campaign",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "campaign",
									},
								},
								"parts": []any{
									"v2",
									"campaign",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/campaign",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "campaign",
									},
								},
								"parts": []any{
									"v2",
									"campaign",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_counter",
											"orig": "include_counter",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/campaign",
								"segments": []any{
									map[string]any{
										"lit": "campaign",
									},
								},
								"parts": []any{
									"campaign",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/campaign/{id}/contacts",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "campaign",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "contacts",
									},
								},
								"parts": []any{
									"v2",
									"campaign",
									"{id}",
									"contacts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "contact",
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/campaign/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "campaign",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"campaign",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_counter",
											"orig": "include_counter",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_counter",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/campaign/{id}",
								"segments": []any{
									map[string]any{
										"lit": "campaign",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"campaign",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/campaign/{id}",
								"segments": []any{
									map[string]any{
										"lit": "campaign",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"campaign",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/campaign/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "campaign",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"campaign",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/campaign/{id}",
								"segments": []any{
									map[string]any{
										"lit": "campaign",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"campaign",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/campaign/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "campaign",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"campaign",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"chat": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistant",
						"title": "Assistant",
						"type": "`$ANY`",
						"short": "This is the assistant that will be used for the chat.",
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"short": "This is the assistant that will be used for the chat.",
					},
					map[string]any{
						"name": "assistantOverrides",
						"title": "Assistant Overrides",
						"type": "`$ANY`",
						"short": "These are the variable values that will be used to replace template variables in the assistant messages.",
					},
					map[string]any{
						"name": "cost",
						"title": "Cost",
						"type": "`$NUMBER`",
						"short": "This is the cost of the chat in USD.",
					},
					map[string]any{
						"name": "costs",
						"title": "Costs",
						"type": "`$ARRAY`",
						"short": "These are the costs of individual components of the chat in USD.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the chat was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the chat.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$ANY`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"short": "This is the input text for the chat.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"short": "This is an array of messages used as context for the chat.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is the name of the chat.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this chat belongs to.",
					},
					map[string]any{
						"name": "output",
						"title": "Output",
						"type": "`$ARRAY`",
						"short": "This is the output messages generated by the system in response to the input.",
					},
					map[string]any{
						"name": "previousChatId",
						"title": "Previous Chat Id",
						"type": "`$STRING`",
						"short": "This is the ID of the chat that will be used as context for the new chat.",
					},
					map[string]any{
						"name": "sessionId",
						"title": "Session Id",
						"type": "`$STRING`",
						"short": "This is the ID of the session that will be used for the chat.",
					},
					map[string]any{
						"name": "squad",
						"title": "Squad",
						"type": "`$ANY`",
						"short": "This is the squad that will be used for the chat.",
					},
					map[string]any{
						"name": "squadId",
						"title": "Squad Id",
						"type": "`$STRING`",
						"short": "This is the squad that will be used for the chat.",
					},
					map[string]any{
						"name": "stream",
						"title": "Stream",
						"type": "`$BOOLEAN`",
						"short": "This is a flag that determines whether the response should be streamed.",
					},
					map[string]any{
						"name": "transport",
						"title": "Transport",
						"type": "`$ANY`",
						"short": "This is used to send the chat through a transport like SMS.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the chat was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "chat",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/chat",
								"segments": []any{
									map[string]any{
										"lit": "chat",
									},
								},
								"parts": []any{
									"chat",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/chat/responses",
								"segments": []any{
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"lit": "responses",
									},
								},
								"parts": []any{
									"chat",
									"responses",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "response",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/chat",
								"segments": []any{
									map[string]any{
										"lit": "chat",
									},
								},
								"parts": []any{
									"chat",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistant_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "assistant_id_any",
											"orig": "assistant_id_any",
											"type": "`$STRING`",
											"kind": "query",
											"example": "assistant-1,assistant-2,assistant-3",
										},
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_any",
											"orig": "id_any",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "previous_chat_id",
											"orig": "previous_chat_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "session_id",
											"orig": "session_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "squad_id",
											"orig": "squad_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/chat/{id}",
								"segments": []any{
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"chat",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/chat/{id}",
								"segments": []any{
									map[string]any{
										"lit": "chat",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"chat",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_simulation_run": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "iterations",
						"title": "Iterations",
						"type": "`$NUMBER`",
						"short": "Number of times to run each simulation (default: 1)",
					},
					map[string]any{
						"name": "simulations",
						"title": "Simulations",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of simulations and/or suites to run",
					},
					map[string]any{
						"name": "target",
						"title": "Target",
						"type": "`$ANY`",
						"req": true,
						"short": "Target to test against",
					},
					map[string]any{
						"name": "transport",
						"title": "Transport",
						"type": "`$ANY`",
						"short": "Transport configuration for the simulation runs",
					},
				},
				"name": "create_simulation_run",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/simulation/run",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "run",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "user_agent",
											"orig": "user_agent",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"user_agent",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"eval": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cost",
						"title": "Cost",
						"type": "`$NUMBER`",
						"req": true,
						"short": "This is the cost of the eval or suite run in USD.",
					},
					map[string]any{
						"name": "costs",
						"title": "Costs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "This is the break up of costs of the eval or suite run.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "This is the description of the eval.",
					},
					map[string]any{
						"name": "endedAt",
						"title": "Ended At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "endedMessage",
						"title": "Ended Message",
						"type": "`$STRING`",
						"short": "This is the ended message when the eval run ended for any reason apart from mockConversation.done",
					},
					map[string]any{
						"name": "endedReason",
						"title": "Ended Reason",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the reason for the eval run to end.",
					},
					map[string]any{
						"name": "eval",
						"title": "Eval",
						"type": "`$ANY`",
						"short": "This is the transient eval that will be run",
					},
					map[string]any{
						"name": "evalId",
						"title": "Eval Id",
						"type": "`$STRING`",
						"short": "This is the id of the eval that will be run.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "This is the mock conversation that will be used to evaluate the flow of the conversation.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is the name of the eval.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "This is the results of the eval or suite run.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the status of the eval run.",
					},
					map[string]any{
						"name": "target",
						"title": "Target",
						"type": "`$ANY`",
						"req": true,
						"short": "This is the target that will be run against the eval",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the type of the run.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "eval",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
								},
								"parts": []any{
									"eval",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/run",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "run",
									},
								},
								"parts": []any{
									"eval",
									"run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"eval": "`reqdata`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "run",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/run",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "run",
									},
								},
								"parts": []any{
									"eval",
									"run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "run",
									"exist": []any{
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
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
								},
								"parts": []any{
									"eval",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/run/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"run",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.eval`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/eval/run/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"run",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.eval`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/eval/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/eval/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"file": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bucket",
						"title": "Bucket",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bytes",
						"title": "Bytes",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the file was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the file.",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mimetype",
						"title": "Mimetype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is the name of the file.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this file belongs to.",
					},
					map[string]any{
						"name": "originalName",
						"title": "Original Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parsedTextBytes",
						"title": "Parsed Text Bytes",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "parsedTextUrl",
						"title": "Parsed Text Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "path",
						"title": "Path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "purpose",
						"title": "Purpose",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the file was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/file",
								"segments": []any{
									map[string]any{
										"lit": "file",
									},
								},
								"parts": []any{
									"file",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metadata`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/file",
								"segments": []any{
									map[string]any{
										"lit": "file",
									},
								},
								"parts": []any{
									"file",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "purpose",
											"orig": "purpose",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"purpose",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/file/{id}",
								"segments": []any{
									map[string]any{
										"lit": "file",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"file",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metadata`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/file/{id}",
								"segments": []any{
									map[string]any{
										"lit": "file",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"file",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metadata`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/file/{id}",
								"segments": []any{
									map[string]any{
										"lit": "file",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"file",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metadata`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"insight": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the Insight was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the Insight.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is the name of the Insight.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this Insight belongs to.",
					},
					map[string]any{
						"name": "systemKey",
						"title": "System Key",
						"type": "`$STRING`",
						"short": "Stable server-owned identifier for system-created insights.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the type of the Insight.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the Insight was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "insight",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/reporting/insight/{id}/run",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "insight",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "run",
									},
								},
								"parts": []any{
									"reporting",
									"insight",
									"{id}",
									"run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "run",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/reporting/insight",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "insight",
									},
								},
								"parts": []any{
									"reporting",
									"insight",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/reporting/insight/preview",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "insight",
									},
									map[string]any{
										"lit": "preview",
									},
								},
								"parts": []any{
									"reporting",
									"insight",
									"preview",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "preview",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reporting/insight",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "insight",
									},
								},
								"parts": []any{
									"reporting",
									"insight",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reporting/insight/{id}",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "insight",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"reporting",
									"insight",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/reporting/insight/{id}",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "insight",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"reporting",
									"insight",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/reporting/insight/{id}",
								"segments": []any{
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "insight",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"reporting",
									"insight",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"knowledge_base": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "files",
						"title": "Files",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "toolId",
						"title": "Tool Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Id of the tool that searches this knowledge base (at most one per base; provisioned on creation).",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "knowledge_base",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/knowledge-base",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/knowledge-base",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/knowledge-base/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/knowledge-base/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v2/knowledge-base/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"knowledge_base_v2_file": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bytes",
						"title": "Bytes",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "fileId",
						"title": "File Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "fileName",
						"title": "File Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "knowledgeBaseV2Id",
						"title": "Knowledge Base V2 Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mimetype",
						"title": "Mimetype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "knowledge_base_v2_file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/knowledge-base/{id}/file/{fileId}/retry",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
									map[string]any{
										"var": "knowledge_base_id",
									},
									map[string]any{
										"lit": "file",
									},
									map[string]any{
										"var": "file_id",
									},
									map[string]any{
										"lit": "retry",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
									"{knowledge_base_id}",
									"file",
									"{file_id}",
									"retry",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"fileId": "file_id",
										"id": "knowledge_base_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "file_id",
											"orig": "file_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "knowledge_base_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file_id",
										"knowledge_base_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v2/knowledge-base/{id}/file",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "file",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
									"{id}",
									"file",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/knowledge-base/{id}/file",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "file",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
									"{id}",
									"file",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v2/knowledge-base/{id}/file/{fileId}",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "knowledge-base",
									},
									map[string]any{
										"var": "knowledge_base_id",
									},
									map[string]any{
										"lit": "file",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v2",
									"knowledge-base",
									"{knowledge_base_id}",
									"file",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"fileId": "id",
										"id": "knowledge_base_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "file_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "knowledge_base_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"knowledge_base_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.knowledge_base",
						},
						[]any{
							"$.main.kit.entity.knowledge_base",
							"$.main.kit.entity.file",
						},
					},
				},
			},
			"personality": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "analysisPlan",
						"title": "Analysis Plan",
						"type": "`$ANY`",
						"short": "This is the plan for analysis of assistant's calls.",
						"deprecated": true,
					},
					map[string]any{
						"name": "artifactPlan",
						"title": "Artifact Plan",
						"type": "`$ANY`",
						"short": "This is the plan for artifacts generated during assistant's calls.",
					},
					map[string]any{
						"name": "assistant",
						"title": "Assistant",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ANY`",
							},
						},
						"short": "This is the full assistant configuration for this personality.",
					},
					map[string]any{
						"name": "backgroundSound",
						"title": "Background Sound",
						"type": "`$ANY`",
						"short": "This is the background sound in the call.",
					},
					map[string]any{
						"name": "backgroundSpeechDenoisingPlan",
						"title": "Background Speech Denoising Plan",
						"type": "`$ANY`",
						"short": "This enables filtering of noise and background speech while the user is talking.",
					},
					map[string]any{
						"name": "clientMessages",
						"title": "Client Messages",
						"type": "`$ARRAY`",
						"short": "These are the messages that will be sent to your Client SDKs.",
					},
					map[string]any{
						"name": "compliancePlan",
						"title": "Compliance Plan",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the personality was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "credentialIds",
						"title": "Credential Ids",
						"type": "`$ARRAY`",
						"short": "These are the credentials that will be used for the assistant calls.",
					},
					map[string]any{
						"name": "credentials",
						"title": "Credentials",
						"type": "`$ARRAY`",
						"short": "These are dynamic credentials that will be used for the assistant calls.",
					},
					map[string]any{
						"name": "endCallMessage",
						"title": "End Call Message",
						"type": "`$STRING`",
						"short": "This is the message that the assistant will say if it ends the call.",
					},
					map[string]any{
						"name": "endCallPhrases",
						"title": "End Call Phrases",
						"type": "`$ARRAY`",
						"short": "This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up.",
					},
					map[string]any{
						"name": "firstMessage",
						"title": "First Message",
						"type": "`$STRING`",
						"short": "This is the first message that the assistant will say.",
					},
					map[string]any{
						"name": "firstMessageInterruptionsEnabled",
						"title": "First Message Interruptions Enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "firstMessageMode",
						"title": "First Message Mode",
						"type": "`$STRING`",
						"short": "This is the mode for the first message.",
					},
					map[string]any{
						"name": "hooks",
						"title": "Hooks",
						"type": "`$ARRAY`",
						"short": "This is a set of actions that will be performed on certain events.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the personality.",
						"format": "uuid",
					},
					map[string]any{
						"name": "keypadInputPlan",
						"title": "Keypad Input Plan",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "maxDurationSeconds",
						"title": "Max Duration Seconds",
						"type": "`$NUMBER`",
						"short": "This is the maximum number of seconds that the call will last.",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"short": "This is for metadata you want to store on the assistant.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$ANY`",
						"short": "These are the options for the assistant's LLM.",
					},
					map[string]any{
						"name": "modelOutputInMessagesEnabled",
						"title": "Model Output In Messages Enabled",
						"type": "`$BOOLEAN`",
						"short": "This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech.",
					},
					map[string]any{
						"name": "monitorPlan",
						"title": "Monitor Plan",
						"type": "`$ANY`",
						"short": "This is the plan for real-time monitoring of the assistant's calls.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "This is the name of the assistant.",
					},
					map[string]any{
						"name": "observabilityPlan",
						"title": "Observability Plan",
						"type": "`$ANY`",
						"short": "This is the plan for observability of assistant's calls.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the organization this personality belongs to.",
						"format": "uuid",
					},
					map[string]any{
						"name": "path",
						"title": "Path",
						"type": "`$STRING`",
						"short": "Optional folder path for organizing personalities.",
					},
					map[string]any{
						"name": "server",
						"title": "Server",
						"type": "`$ANY`",
						"short": "This is where Vapi will send webhooks.",
					},
					map[string]any{
						"name": "serverMessages",
						"title": "Server Messages",
						"type": "`$ARRAY`",
						"short": "These are the messages that will be sent to your Server URL.",
					},
					map[string]any{
						"name": "startSpeakingPlan",
						"title": "Start Speaking Plan",
						"type": "`$ANY`",
						"short": "This is the plan for when the assistant should start talking.",
					},
					map[string]any{
						"name": "stopSpeakingPlan",
						"title": "Stop Speaking Plan",
						"type": "`$ANY`",
						"short": "This is the plan for when assistant should stop talking on customer interruption.",
					},
					map[string]any{
						"name": "transcriber",
						"title": "Transcriber",
						"type": "`$ANY`",
						"short": "These are the options for the assistant's transcriber.",
					},
					map[string]any{
						"name": "transportConfigurations",
						"title": "Transport Configurations",
						"type": "`$ARRAY`",
						"short": "These are the configurations to be passed to the transport providers of assistant's calls, like Twilio.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the personality was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "voice",
						"title": "Voice",
						"type": "`$ANY`",
						"short": "These are the options for the assistant's voice.",
					},
					map[string]any{
						"name": "voicemailDetection",
						"title": "Voicemail Detection",
						"type": "`$ANY`",
						"short": "These are the settings to configure or disable voicemail detection.",
					},
					map[string]any{
						"name": "voicemailMessage",
						"title": "Voicemail Message",
						"type": "`$STRING`",
						"short": "This is the message that the assistant will say if the call is forwarded to voicemail.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "personality",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/simulation/personality",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "personality",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"personality",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.assistant`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/personality",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "personality",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"personality",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/personality/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "personality",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"personality",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.assistant`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/eval/simulation/personality/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "personality",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"personality",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.assistant`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/eval/simulation/personality/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "personality",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"personality",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.assistant`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"phone_number": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$ANY`",
						"req": true,
						"short": "Metadata about the pagination.",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of phone numbers, which can be of any provider type.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "phone_number",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/phone-number",
								"segments": []any{
									map[string]any{
										"lit": "phone-number",
									},
								},
								"parts": []any{
									"phone-number",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v2/phone-number",
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "phone-number",
									},
								},
								"parts": []any{
									"v2",
									"phone-number",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/phone-number",
								"segments": []any{
									map[string]any{
										"lit": "phone-number",
									},
								},
								"parts": []any{
									"phone-number",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/phone-number/{id}",
								"segments": []any{
									map[string]any{
										"lit": "phone-number",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"phone-number",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/phone-number/{id}",
								"segments": []any{
									map[string]any{
										"lit": "phone-number",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"phone-number",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/phone-number/{id}",
								"segments": []any{
									map[string]any{
										"lit": "phone-number",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"phone-number",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"provider": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"id": "id",
						"provider": "provider",
						"resource_name": "resourceName",
					},
					"name": "id",
					"parts": []any{
						"provider",
						"resource_name",
						"id",
					},
					"sep": "/",
				},
				"name": "provider",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/provider/{provider}/{resourceName}",
								"segments": []any{
									map[string]any{
										"lit": "provider",
									},
									map[string]any{
										"var": "provider",
									},
									map[string]any{
										"var": "resource_name",
									},
								},
								"parts": []any{
									"provider",
									"{provider}",
									"{resource_name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceName": "resource_name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.resource`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "content_type",
											"orig": "content_type",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_name",
											"orig": "resource_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_type",
										"provider",
										"resource_name",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/provider/{provider}/{resourceName}",
								"segments": []any{
									map[string]any{
										"lit": "provider",
									},
									map[string]any{
										"var": "provider",
									},
									map[string]any{
										"var": "resource_name",
									},
								},
								"parts": []any{
									"provider",
									"{provider}",
									"{resource_name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceName": "resource_name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_name",
											"orig": "resource_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/provider/{provider}/{resourceName}/{id}",
								"segments": []any{
									map[string]any{
										"lit": "provider",
									},
									map[string]any{
										"var": "provider",
									},
									map[string]any{
										"var": "resource_name",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"provider",
									"{provider}",
									"{resource_name}",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceName": "resource_name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.resource`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_name",
											"orig": "resource_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"provider",
										"resource_name",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/provider/{provider}/{resourceName}/{id}",
								"segments": []any{
									map[string]any{
										"lit": "provider",
									},
									map[string]any{
										"var": "provider",
									},
									map[string]any{
										"var": "resource_name",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"provider",
									"{provider}",
									"{resource_name}",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceName": "resource_name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.resource`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_name",
											"orig": "resource_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"provider",
										"resource_name",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/provider/{provider}/{resourceName}/{id}",
								"segments": []any{
									map[string]any{
										"lit": "provider",
									},
									map[string]any{
										"var": "provider",
									},
									map[string]any{
										"var": "resource_name",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"provider",
									"{provider}",
									"{resource_name}",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resourceName": "resource_name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.resource`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_name",
											"orig": "resource_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"provider",
										"resource_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"scenario": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the scenario was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "evaluations",
						"title": "Evaluations",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "This is the structured output-based evaluation plan for the simulation.",
					},
					map[string]any{
						"name": "hooks",
						"title": "Hooks",
						"type": "`$ARRAY`",
						"short": "Hooks to run on simulation lifecycle events",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the scenario.",
						"format": "uuid",
					},
					map[string]any{
						"name": "instructions",
						"title": "Instructions",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the script/instructions for the tester to follow during the simulation.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the name of the scenario.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the organization this scenario belongs to.",
						"format": "uuid",
					},
					map[string]any{
						"name": "path",
						"title": "Path",
						"type": "`$STRING`",
						"short": "Optional folder path for organizing scenarios.",
					},
					map[string]any{
						"name": "targetOverrides",
						"title": "Target Overrides",
						"type": "`$ANY`",
						"short": "Overrides to inject into the simulated target assistant or squad",
					},
					map[string]any{
						"name": "toolMocks",
						"title": "Tool Mocks",
						"type": "`$ARRAY`",
						"short": "Scenario-level tool call mocks to use during simulations.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the scenario was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "scenario",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/simulation/scenario",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "scenario",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"scenario",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/scenario",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "scenario",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"scenario",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_any",
											"orig": "id_any",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/scenario/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "scenario",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"scenario",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/eval/simulation/scenario/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "scenario",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"scenario",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/eval/simulation/scenario/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "scenario",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"scenario",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"scorecard": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantIds",
						"title": "Assistant Ids",
						"type": "`$ARRAY`",
						"short": "These are the assistant IDs that this scorecard is linked to.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the scorecard was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "This is the description of the scorecard.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the scorecard.",
					},
					map[string]any{
						"name": "metrics",
						"title": "Metrics",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "These are the metrics that will be used to evaluate the scorecard.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is the name of the scorecard.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this scorecard belongs to.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the scorecard was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "scorecard",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/observability/scorecard",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "scorecard",
									},
								},
								"parts": []any{
									"observability",
									"scorecard",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/observability/scorecard",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "scorecard",
									},
								},
								"parts": []any{
									"observability",
									"scorecard",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/observability/scorecard/{id}",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "scorecard",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"observability",
									"scorecard",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/observability/scorecard/{id}",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "scorecard",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"observability",
									"scorecard",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/observability/scorecard/{id}",
								"segments": []any{
									map[string]any{
										"lit": "observability",
									},
									map[string]any{
										"lit": "scorecard",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"observability",
									"scorecard",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"session": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "artifact",
						"title": "Artifact",
						"type": "`$ANY`",
						"short": "These are the artifacts that were extracted from the session messages.",
					},
					map[string]any{
						"name": "assistant",
						"title": "Assistant",
						"type": "`$ANY`",
						"short": "This is the assistant configuration for this session.",
					},
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"short": "This is the ID of the assistant associated with this session.",
					},
					map[string]any{
						"name": "assistantOverrides",
						"title": "Assistant Overrides",
						"type": "`$ANY`",
						"short": "These are the overrides for the assistant configuration.",
					},
					map[string]any{
						"name": "cost",
						"title": "Cost",
						"type": "`$NUMBER`",
						"short": "This is the cost of the session in USD.",
					},
					map[string]any{
						"name": "costs",
						"title": "Costs",
						"type": "`$ARRAY`",
						"short": "These are the costs of individual components of the session in USD.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 timestamp indicating when the session was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "customer",
						"title": "Customer",
						"type": "`$ANY`",
						"short": "This is the customer information associated with this session.",
					},
					map[string]any{
						"name": "customerId",
						"title": "Customer Id",
						"type": "`$STRING`",
						"short": "This is the customerId of the customer associated with this session.",
					},
					map[string]any{
						"name": "expirationSeconds",
						"title": "Expiration Seconds",
						"type": "`$NUMBER`",
						"short": "Session expiration time in seconds.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the session.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"short": "This is an array of chat messages in the session.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is a user-defined name for the session.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the organization that owns this session.",
					},
					map[string]any{
						"name": "phoneNumber",
						"title": "Phone Number",
						"type": "`$ANY`",
						"short": "This is the phone number configuration for this session.",
					},
					map[string]any{
						"name": "phoneNumberId",
						"title": "Phone Number Id",
						"type": "`$STRING`",
						"short": "This is the ID of the phone number associated with this session.",
					},
					map[string]any{
						"name": "squad",
						"title": "Squad",
						"type": "`$ANY`",
						"short": "This is the squad configuration for this session.",
					},
					map[string]any{
						"name": "squadId",
						"title": "Squad Id",
						"type": "`$STRING`",
						"short": "This is the squad ID associated with this session.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "This is the current status of the session.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 timestamp indicating when the session was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "session",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/session",
								"segments": []any{
									map[string]any{
										"lit": "session",
									},
								},
								"parts": []any{
									"session",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/session",
								"segments": []any{
									map[string]any{
										"lit": "session",
									},
								},
								"parts": []any{
									"session",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "assistant_id",
											"orig": "assistant_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "assistant_id_any",
											"orig": "assistant_id_any",
											"type": "`$STRING`",
											"kind": "query",
											"example": "assistant-1,assistant-2,assistant-3",
										},
										map[string]any{
											"name": "assistant_override",
											"orig": "assistant_override",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "customer_number_any",
											"orig": "customer_number_any",
											"type": "`$STRING`",
											"kind": "query",
											"example": "+1234567890,+0987654321",
										},
										map[string]any{
											"name": "email",
											"orig": "email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "extension",
											"orig": "extension",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "external_id",
											"orig": "external_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_any",
											"orig": "id_any",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "number",
											"orig": "number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "number_e164_check_enabled",
											"orig": "number_e164_check_enabled",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "phone_number_id",
											"orig": "phone_number_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "phone_number_id_any",
											"orig": "phone_number_id_any",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "sip_uri",
											"orig": "sip_uri",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "squad_id",
											"orig": "squad_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "squad_override",
											"orig": "squad_override",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "workflow_id",
											"orig": "workflow_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/session/{id}",
								"segments": []any{
									map[string]any{
										"lit": "session",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"session",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/session/{id}",
								"segments": []any{
									map[string]any{
										"lit": "session",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"session",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/session/{id}",
								"segments": []any{
									map[string]any{
										"lit": "session",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"session",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"simulation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantId",
						"title": "Assistant Id",
						"type": "`$STRING`",
						"short": "ID of the assistant to generate scenarios for",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the simulation was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the simulation.",
						"format": "uuid",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is an optional friendly name for the simulation.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the organization this simulation belongs to.",
						"format": "uuid",
					},
					map[string]any{
						"name": "path",
						"title": "Path",
						"type": "`$STRING`",
						"short": "Optional folder path for organizing simulations.",
					},
					map[string]any{
						"name": "personalityId",
						"title": "Personality Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the ID of the personality to use for this simulation.",
						"format": "uuid",
					},
					map[string]any{
						"name": "scenarioId",
						"title": "Scenario Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the ID of the scenario to use for this simulation.",
						"format": "uuid",
					},
					map[string]any{
						"name": "squadId",
						"title": "Squad Id",
						"type": "`$STRING`",
						"short": "ID of the squad to generate scenarios for",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the simulation was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "simulation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/simulation",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/simulation/scenario/generate",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "scenario",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"scenario",
									"generate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_any",
											"orig": "id_any",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "standalone_only",
											"orig": "standalone_only",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/concurrency",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "concurrency",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"concurrency",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "concurrency",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/eval/simulation/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/eval/simulation/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"simulation_run": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 date-time when created",
						"format": "date-time",
					},
					map[string]any{
						"name": "endedAt",
						"title": "Ended At",
						"type": "`$STRING`",
						"short": "When the run ended",
						"format": "date-time",
					},
					map[string]any{
						"name": "endedReason",
						"title": "Ended Reason",
						"type": "`$STRING`",
						"short": "Reason the run ended",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the run",
						"format": "uuid",
					},
					map[string]any{
						"name": "itemCounts",
						"title": "Item Counts",
						"type": "`$ANY`",
						"short": "Aggregate counts of run items by status",
					},
					map[string]any{
						"name": "iterations",
						"title": "Iterations",
						"type": "`$NUMBER`",
						"short": "Number of times to run each simulation (default: 1)",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization ID",
						"format": "uuid",
					},
					map[string]any{
						"name": "queuedAt",
						"title": "Queued At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the run was queued",
						"format": "date-time",
					},
					map[string]any{
						"name": "simulations",
						"title": "Simulations",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of simulations and/or suites to run",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"short": "When the run started",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the run",
					},
					map[string]any{
						"name": "target",
						"title": "Target",
						"type": "`$ANY`",
						"req": true,
						"short": "Target to test against",
					},
					map[string]any{
						"name": "transport",
						"title": "Transport",
						"type": "`$ANY`",
						"short": "Transport configuration for the simulation runs",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 date-time when last updated",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "simulation_run",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/run",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "run",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter_status",
											"orig": "filter_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "target_id",
											"orig": "target_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "target_type",
											"orig": "target_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/run/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"run",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/eval/simulation/run/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"run",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"simulation_run_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "callId",
						"title": "Call Id",
						"type": "`$STRING`",
						"short": "This is the ID of the target Vapi call (the assistant being tested).",
						"format": "uuid",
					},
					map[string]any{
						"name": "canceledAt",
						"title": "Canceled At",
						"type": "`$STRING`",
						"short": "This is the ISO 8601 date-time string of when the run was canceled.",
						"format": "date-time",
					},
					map[string]any{
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"short": "This is the ISO 8601 date-time string of when the run completed.",
						"format": "date-time",
					},
					map[string]any{
						"name": "configurations",
						"title": "Configurations",
						"type": "`$ANY`",
						"short": "This is the configuration for how this simulation run executes.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the run item was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "failedAt",
						"title": "Failed At",
						"type": "`$STRING`",
						"short": "This is the ISO 8601 date-time string of when the run failed.",
						"format": "date-time",
					},
					map[string]any{
						"name": "failureReason",
						"title": "Failure Reason",
						"type": "`$STRING`",
						"short": "This is the reason for failure.",
					},
					map[string]any{
						"name": "hooks",
						"title": "Hooks",
						"type": "`$ARRAY`",
						"short": "Hooks configured for this simulation run item",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the simulation run item.",
						"format": "uuid",
					},
					map[string]any{
						"name": "improvementSuggestions",
						"title": "Improvement Suggestions",
						"type": "`$ANY`",
						"short": "This is the AI-generated improvement suggestions for failed runs.",
					},
					map[string]any{
						"name": "iterationNumber",
						"title": "Iteration Number",
						"type": "`$NUMBER`",
						"short": "This is the iteration number (1-indexed) when run with iterations > 1.",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$ANY`",
						"short": "This is the metadata containing snapshots and call data.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the organization.",
						"format": "uuid",
					},
					map[string]any{
						"name": "personalityId",
						"title": "Personality Id",
						"type": "`$STRING`",
						"short": "This is the personality ID at run creation time.",
						"format": "uuid",
					},
					map[string]any{
						"name": "queuedAt",
						"title": "Queued At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the run was queued.",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ANY`",
						"short": "This is the results of the simulation run.",
					},
					map[string]any{
						"name": "runId",
						"title": "Run Id",
						"type": "`$STRING`",
						"short": "This is the ID of the parent run (batch/group).",
						"format": "uuid",
					},
					map[string]any{
						"name": "scenarioId",
						"title": "Scenario Id",
						"type": "`$STRING`",
						"short": "This is the scenario ID at run creation time.",
						"format": "uuid",
					},
					map[string]any{
						"name": "sessionId",
						"title": "Session Id",
						"type": "`$STRING`",
						"short": "This is the session ID for chat-based simulations (webchat transport).",
						"format": "uuid",
					},
					map[string]any{
						"name": "simulationId",
						"title": "Simulation Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ID of the simulation this run belongs to.",
						"format": "uuid",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"short": "This is the ISO 8601 date-time string of when the run started.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the current status of the run.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the run item was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "simulation_run_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/simulation/run/{id}/item/{itemId}/generate",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "run_id",
									},
									map[string]any{
										"lit": "item",
									},
									map[string]any{
										"var": "item_id",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"run",
									"{run_id}",
									"item",
									"{item_id}",
									"generate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "run_id",
										"itemId": "item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "item_id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "run_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "force",
											"orig": "force",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "persist",
											"orig": "persist",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "generate",
									"exist": []any{
										"force",
										"item_id",
										"persist",
										"run_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/run/{id}/item",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "run_id",
									},
									map[string]any{
										"lit": "item",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"run",
									"{run_id}",
									"item",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "run_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "run_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "run_id",
											"orig": "run_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "simulation_id",
											"orig": "simulation_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/run/{id}/item/{itemId}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "run_id",
									},
									map[string]any{
										"lit": "item",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"run",
									"{run_id}",
									"item",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "run_id",
										"itemId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "run_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"run_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/eval/simulation/run/{id}/item/{itemId}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "run",
									},
									map[string]any{
										"var": "run_id",
									},
									map[string]any{
										"lit": "item",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"run",
									"{run_id}",
									"item",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "run_id",
										"itemId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "run_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"run_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"simulation_suite": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the suite was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the simulation suite.",
						"format": "uuid",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the name of the simulation suite.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the organization this suite belongs to.",
						"format": "uuid",
					},
					map[string]any{
						"name": "path",
						"title": "Path",
						"type": "`$STRING`",
						"short": "Optional folder path for organizing simulation suites.",
					},
					map[string]any{
						"name": "simulationIds",
						"title": "Simulation Ids",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "This is the list of simulation IDs in this suite.",
					},
					map[string]any{
						"name": "slackWebhookUrl",
						"title": "Slack Webhook Url",
						"type": "`$STRING`",
						"short": "This is the Slack webhook URL for notifications.",
					},
					map[string]any{
						"name": "targetAssignments",
						"title": "Target Assignments",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "This is the ordered list of assistant or squad assignments for the suite.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the suite was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "simulation_suite",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/simulation/suite/{id}/duplicate",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "suite",
									},
									map[string]any{
										"var": "suite_id",
									},
									map[string]any{
										"lit": "duplicate",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"suite",
									"{suite_id}",
									"duplicate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "suite_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "suite_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"suite_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/eval/simulation/suite",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "suite",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"suite",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/suite",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "suite",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"suite",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/eval/simulation/suite/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "suite",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"suite",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/eval/simulation/suite/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "suite",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"suite",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/eval/simulation/suite/{id}",
								"segments": []any{
									map[string]any{
										"lit": "eval",
									},
									map[string]any{
										"lit": "simulation",
									},
									map[string]any{
										"lit": "suite",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"eval",
									"simulation",
									"suite",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"squad": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the squad was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the squad.",
					},
					map[string]any{
						"name": "latestVersion",
						"title": "Latest Version",
						"type": "`$STRING`",
						"short": "This is the latest version label (e.g.",
					},
					map[string]any{
						"name": "members",
						"title": "Members",
						"type": "`$ARRAY`",
						"req": true,
						"short": "This is the list of assistants that make up the squad.",
					},
					map[string]any{
						"name": "membersOverrides",
						"title": "Members Overrides",
						"type": "`$ANY`",
						"short": "This can be used to override all the assistants' settings and provide values for their template variables.",
					},
					map[string]any{
						"name": "modelDeprecations",
						"title": "Model Deprecations",
						"type": "`$ARRAY`",
						"short": "Read-only.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "This is the name of the squad.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this squad belongs to.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the squad was last updated.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "squad",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/squad",
								"segments": []any{
									map[string]any{
										"lit": "squad",
									},
								},
								"parts": []any{
									"squad",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/squad",
								"segments": []any{
									map[string]any{
										"lit": "squad",
									},
								},
								"parts": []any{
									"squad",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_any",
											"orig": "id_any",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/squad/{id}",
								"segments": []any{
									map[string]any{
										"lit": "squad",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"squad",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/squad/{id}",
								"segments": []any{
									map[string]any{
										"lit": "squad",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"squad",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/squad/{id}",
								"segments": []any{
									map[string]any{
										"lit": "squad",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"squad",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"structured_output": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assistantIds",
						"title": "Assistant Ids",
						"type": "`$ARRAY`",
						"short": "These are the assistant IDs that this structured output is linked to.",
					},
					map[string]any{
						"name": "compliancePlan",
						"title": "Compliance Plan",
						"type": "`$ANY`",
						"short": "Compliance configuration for this output.",
					},
					map[string]any{
						"name": "conditions",
						"title": "Conditions",
						"type": "`$ARRAY`",
						"short": "These are the conditions that gate the execution of this structured output.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the structured output was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "This is the description of what the structured output extracts.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the structured output.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$ANY`",
						"short": "This is the model that will be used to extract the structured output.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "This is the name of the structured output.",
					},
					map[string]any{
						"name": "orgId",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the unique identifier for the org that this structured output belongs to.",
					},
					map[string]any{
						"name": "regex",
						"title": "Regex",
						"type": "`$STRING`",
						"short": "This is the regex pattern to match against the transcript.",
					},
					map[string]any{
						"name": "schema",
						"title": "Schema",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ANY`",
							},
						},
						"short": "This is the JSON Schema definition for the structured output.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "This is the type of structured output.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "This is the ISO 8601 date-time string of when the structured output was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "workflowIds",
						"title": "Workflow Ids",
						"type": "`$ARRAY`",
						"short": "These are the workflow IDs that this structured output is linked to.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "structured_output",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/structured-output",
								"segments": []any{
									map[string]any{
										"lit": "structured-output",
									},
								},
								"parts": []any{
									"structured-output",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/structured-output/run",
								"segments": []any{
									map[string]any{
										"lit": "structured-output",
									},
									map[string]any{
										"lit": "run",
									},
								},
								"parts": []any{
									"structured-output",
									"run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "run",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/structured-output",
								"segments": []any{
									map[string]any{
										"lit": "structured-output",
									},
								},
								"parts": []any{
									"structured-output",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/structured-output/{id}",
								"segments": []any{
									map[string]any{
										"lit": "structured-output",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"structured-output",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/structured-output/{id}",
								"segments": []any{
									map[string]any{
										"lit": "structured-output",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"structured-output",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/structured-output/{id}",
								"segments": []any{
									map[string]any{
										"lit": "structured-output",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"structured-output",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "schema_override",
											"orig": "schema_override",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"schema_override",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tool": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "tool",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/tool",
								"segments": []any{
									map[string]any{
										"lit": "tool",
									},
								},
								"parts": []any{
									"tool",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tool",
								"segments": []any{
									map[string]any{
										"lit": "tool",
									},
								},
								"parts": []any{
									"tool",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "created_at_ge",
											"orig": "created_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_gt",
											"orig": "created_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_le",
											"orig": "created_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_lt",
											"orig": "created_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_ge",
											"orig": "updated_at_ge",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_gt",
											"orig": "updated_at_gt",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_le",
											"orig": "updated_at_le",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_at_lt",
											"orig": "updated_at_lt",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tool/{id}",
								"segments": []any{
									map[string]any{
										"lit": "tool",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"tool",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/tool/{id}",
								"segments": []any{
									map[string]any{
										"lit": "tool",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"tool",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/tool/{id}",
								"segments": []any{
									map[string]any{
										"lit": "tool",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"tool",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
