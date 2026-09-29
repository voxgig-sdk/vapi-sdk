"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "analytics",
        "accessor": "Analytics",
        "op": "create",
        "method": "POST",
        "path": "/analytics",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "name": "x",
                "timeRange": {
                    "step": "second",
                    "start": "2026-01-01T00:00:00Z",
                    "end": "2026-01-01T00:00:00Z",
                    "timezone": "x"
                },
                "result": [
                    {}
                ]
            }
        ],
        "idField": "id"
    },
    {
        "entity": "assistant",
        "accessor": "Assistant",
        "op": "list",
        "method": "GET",
        "path": "/assistant",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "limit": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "transcriber": {
                    "provider": "assembly-ai",
                    "language": "multi",
                    "confidenceThreshold": 0.4,
                    "formatTurns": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "wordFinalizationMaxWaitTime": 160,
                    "maxTurnSilence": 400,
                    "vadAssistedEndpointingEnabled": true,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "languageCodes": [
                        "en"
                    ],
                    "speechModel": "universal-streaming-english",
                    "realtimeUrl": "x",
                    "wordBoost": [
                        "x"
                    ],
                    "keytermsPrompt": [
                        "x"
                    ],
                    "endUtteranceSilenceThreshold": 1,
                    "disablePartialTranscripts": true,
                    "fallbackPlan": {
                        "transcribers": []
                    }
                },
                "model": {
                    "messages": [
                        {
                            "content": "x",
                            "role": "assistant"
                        }
                    ],
                    "tools": [
                        {}
                    ],
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {
                            "toolId": "x",
                            "version": "x"
                        }
                    ],
                    "knowledgeBase": {
                        "provider": "custom-knowledge-base",
                        "server": {}
                    },
                    "model": "claude-3-opus-20240229",
                    "provider": "anthropic",
                    "thinking": {
                        "budgetTokens": 1,
                        "type": "enabled"
                    },
                    "temperature": 1,
                    "maxTokens": 1,
                    "emotionRecognitionEnabled": true,
                    "numFastTurns": 1
                },
                "voice": {
                    "cachingEnabled": true,
                    "provider": "azure",
                    "voiceId": "andrew",
                    "chunkPlan": {
                        "enabled": true,
                        "formatPlan": {},
                        "minCharacters": 30,
                        "punctuationBoundaries": [
                            "。",
                            "，",
                            "."
                        ]
                    },
                    "speed": 1,
                    "fallbackPlan": {
                        "voices": []
                    }
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "timeout": 60,
                        "record": false,
                        "recordingChannels": "mono"
                    }
                ],
                "observabilityPlan": {
                    "provider": "langfuse",
                    "promptName": "x",
                    "promptVersion": 1,
                    "traceName": "x",
                    "tags": [
                        "x"
                    ],
                    "metadata": {}
                },
                "credentials": [
                    {
                        "provider": "anthropic",
                        "apiKey": "x",
                        "name": "x"
                    }
                ],
                "hooks": [
                    {
                        "on": "call.ending",
                        "do": [],
                        "filters": [
                            {}
                        ]
                    }
                ],
                "latestVersion": "x",
                "modelDeprecations": [
                    {
                        "slot": "model.fallbackModels[1]",
                        "provider": "openai",
                        "model": "gpt-4-1106-preview",
                        "deprecationDate": "2025-09-26",
                        "retirementDate": "2026-03-26",
                        "replacementModel": "gpt-5"
                    }
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "voice": {},
                        "waitSeconds": 3
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "smartDenoisingPlan": {
                        "enabled": true
                    },
                    "fourierDenoisingPlan": {
                        "baselineOffsetDb": -15,
                        "baselinePercentile": 85,
                        "enabled": true,
                        "mediaDetectionEnabled": true,
                        "staticThreshold": -35,
                        "windowSizeMs": 3000
                    }
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "summaryPlan": {
                        "enabled": true,
                        "messages": [],
                        "timeoutSeconds": 1
                    },
                    "structuredDataPlan": {
                        "enabled": true,
                        "messages": [],
                        "schema": {},
                        "timeoutSeconds": 1
                    },
                    "structuredDataMultiPlan": [
                        {
                            "key": "x",
                            "plan": {}
                        }
                    ],
                    "successEvaluationPlan": {
                        "enabled": true,
                        "messages": [],
                        "rubric": "NumericScale",
                        "timeoutSeconds": 1
                    },
                    "outcomeIds": [
                        "x"
                    ]
                },
                "artifactPlan": {
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingUseCustomStorageEnabled": true,
                    "videoRecordingEnabled": false,
                    "fullMessageHistoryEnabled": false,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "loggingEnabled": true,
                    "loggingUseCustomStorageEnabled": true,
                    "transcriptPlan": {
                        "assistantName": "x",
                        "enabled": true,
                        "userName": "x"
                    },
                    "recordingPath": "x",
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {
                            "assistantIds": [],
                            "compliancePlan": {
                                "forceStoreOnHipaaEnabled": false
                            },
                            "conditions": [
                                {
                                    "count": 4,
                                    "type": "minMessages"
                                },
                                {
                                    "seconds": 10,
                                    "type": "minCallDuration"
                                }
                            ],
                            "description": "x",
                            "name": "x",
                            "regex": "x",
                            "schema": {},
                            "type": "ai",
                            "workflowIds": []
                        }
                    ],
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {
                            "assistantIds": [],
                            "description": "x",
                            "metrics": [],
                            "name": "x"
                        }
                    ],
                    "loggingPath": "x"
                },
                "startSpeakingPlan": {
                    "waitSeconds": 0.4,
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {
                        "provider": "vapi"
                    },
                    "customEndpointingRules": [
                        {}
                    ],
                    "transcriptionEndpointingPlan": {
                        "onNoPunctuationSeconds": 1.5,
                        "onNumberSeconds": 0.5,
                        "onPunctuationSeconds": 0.1
                    }
                },
                "stopSpeakingPlan": {
                    "numWords": 0,
                    "voiceSeconds": 0.2,
                    "backoffSeconds": 1,
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ]
                },
                "monitorPlan": {
                    "listenEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "controlAuthenticationEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "timeoutSeconds": 20,
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "staticIpAddressesEnabled": false,
                    "encryptedPaths": [
                        "x"
                    ],
                    "url": "x",
                    "headers": {},
                    "backoffPlan": {
                        "baseDelaySeconds": 1,
                        "excludedStatusCodes": [
                            400,
                            401,
                            403
                        ],
                        "maxRetries": 0,
                        "type": "fixed"
                    }
                },
                "keypadInputPlan": {
                    "enabled": true,
                    "timeoutSeconds": 1,
                    "delimiters": "#"
                },
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "assistant",
        "accessor": "Assistant",
        "op": "load",
        "method": "GET",
        "path": "/assistant/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "transcriber": {
                "provider": "assembly-ai",
                "language": "multi",
                "confidenceThreshold": 0.4,
                "formatTurns": true,
                "endOfTurnConfidenceThreshold": 0.7,
                "minEndOfTurnSilenceWhenConfident": 160,
                "wordFinalizationMaxWaitTime": 160,
                "maxTurnSilence": 400,
                "vadAssistedEndpointingEnabled": true,
                "mode": "max_accuracy",
                "prompt": "x",
                "agentContext": "x",
                "agentContextAutoUpdateEnabled": true,
                "languageCodes": [
                    "en"
                ],
                "speechModel": "universal-streaming-english",
                "realtimeUrl": "x",
                "wordBoost": [
                    "x"
                ],
                "keytermsPrompt": [
                    "x"
                ],
                "endUtteranceSilenceThreshold": 1,
                "disablePartialTranscripts": true,
                "fallbackPlan": {
                    "transcribers": []
                }
            },
            "model": {
                "messages": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "tools": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "toolIds": [
                    "x"
                ],
                "toolRefs": [
                    {
                        "toolId": "x",
                        "version": "x"
                    }
                ],
                "knowledgeBase": {
                    "provider": "custom-knowledge-base",
                    "server": {}
                },
                "model": "claude-3-opus-20240229",
                "provider": "anthropic",
                "thinking": {
                    "budgetTokens": 1,
                    "type": "enabled"
                },
                "temperature": 1,
                "maxTokens": 1,
                "emotionRecognitionEnabled": true,
                "numFastTurns": 1
            },
            "voice": {
                "cachingEnabled": true,
                "provider": "azure",
                "voiceId": "andrew",
                "chunkPlan": {
                    "enabled": true,
                    "formatPlan": {},
                    "minCharacters": 30,
                    "punctuationBoundaries": [
                        "。",
                        "，",
                        "."
                    ]
                },
                "speed": 1,
                "fallbackPlan": {
                    "voices": []
                }
            },
            "firstMessage": "Hello! How can I help you today?",
            "firstMessageInterruptionsEnabled": true,
            "firstMessageMode": "assistant-speaks-first",
            "voicemailDetection": "off",
            "clientMessages": [
                "conversation-update",
                "function-call",
                "hang"
            ],
            "serverMessages": [
                "conversation-update",
                "end-of-call-report",
                "function-call"
            ],
            "maxDurationSeconds": 600,
            "backgroundSound": "office",
            "modelOutputInMessagesEnabled": false,
            "transportConfigurations": [
                {
                    "provider": "twilio",
                    "timeout": 60,
                    "record": false,
                    "recordingChannels": "mono"
                }
            ],
            "observabilityPlan": {
                "provider": "langfuse",
                "promptName": "x",
                "promptVersion": 1,
                "traceName": "x",
                "tags": [
                    "x"
                ],
                "metadata": {}
            },
            "credentials": [
                {
                    "provider": "anthropic",
                    "apiKey": "x",
                    "name": "x"
                }
            ],
            "hooks": [
                {
                    "on": "call.ending",
                    "do": [
                        {}
                    ],
                    "filters": [
                        {
                            "key": "x",
                            "oneOf": [],
                            "type": "oneOf"
                        }
                    ]
                }
            ],
            "latestVersion": "x",
            "modelDeprecations": [
                {
                    "slot": "model.fallbackModels[1]",
                    "provider": "openai",
                    "model": "gpt-4-1106-preview",
                    "deprecationDate": "2025-09-26",
                    "retirementDate": "2026-03-26",
                    "replacementModel": "gpt-5"
                }
            ],
            "name": "x",
            "voicemailMessage": "x",
            "endCallMessage": "x",
            "endCallPhrases": [
                "x"
            ],
            "compliancePlan": {
                "hipaaEnabled": true,
                "pciEnabled": {
                    "pciEnabled": false
                },
                "securityFilterPlan": {
                    "enabled": true,
                    "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                    "mode": "sanitize",
                    "replacementText": "x"
                },
                "recordingConsentPlan": {
                    "firstMessageMode": "assistant-speaks-first",
                    "message": "x",
                    "type": "stay-on-line",
                    "voice": {
                        "cachingEnabled": true,
                        "chunkPlan": {},
                        "fallbackPlan": {},
                        "provider": "azure",
                        "speed": 1
                    },
                    "waitSeconds": 3
                }
            },
            "metadata": {},
            "backgroundSpeechDenoisingPlan": {
                "smartDenoisingPlan": {
                    "enabled": true
                },
                "fourierDenoisingPlan": {
                    "baselineOffsetDb": -15,
                    "baselinePercentile": 85,
                    "enabled": true,
                    "mediaDetectionEnabled": true,
                    "staticThreshold": -35,
                    "windowSizeMs": 3000
                }
            },
            "analysisPlan": {
                "minMessagesThreshold": 1,
                "summaryPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "timeoutSeconds": 1
                },
                "structuredDataPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "schema": {},
                    "timeoutSeconds": 1
                },
                "structuredDataMultiPlan": [
                    {
                        "key": "x",
                        "plan": {}
                    }
                ],
                "successEvaluationPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "rubric": "NumericScale",
                    "timeoutSeconds": 1
                },
                "outcomeIds": [
                    "x"
                ]
            },
            "artifactPlan": {
                "recordingEnabled": true,
                "recordingFormat": "wav;l16",
                "recordingUseCustomStorageEnabled": true,
                "videoRecordingEnabled": false,
                "fullMessageHistoryEnabled": false,
                "pcapEnabled": true,
                "pcapS3PathPrefix": "/pcaps",
                "pcapUseCustomStorageEnabled": true,
                "loggingEnabled": true,
                "loggingUseCustomStorageEnabled": true,
                "transcriptPlan": {
                    "assistantName": "x",
                    "enabled": true,
                    "userName": "x"
                },
                "recordingPath": "x",
                "structuredOutputIds": [
                    "x"
                ],
                "structuredOutputs": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "description": "x",
                        "model": {},
                        "name": "x",
                        "regex": "x",
                        "schema": {},
                        "type": "ai",
                        "workflowIds": [
                            "x"
                        ]
                    }
                ],
                "scorecardIds": [
                    "x"
                ],
                "scorecards": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "description": "x",
                        "metrics": [
                            {}
                        ],
                        "name": "x"
                    }
                ],
                "loggingPath": "x"
            },
            "startSpeakingPlan": {
                "waitSeconds": 0.4,
                "smartEndpointingEnabled": false,
                "smartEndpointingPlan": {
                    "provider": "vapi"
                },
                "customEndpointingRules": [
                    {
                        "regex": "x",
                        "regexOptions": [],
                        "timeoutSeconds": 1,
                        "type": "assistant"
                    }
                ],
                "transcriptionEndpointingPlan": {
                    "onNoPunctuationSeconds": 1.5,
                    "onNumberSeconds": 0.5,
                    "onPunctuationSeconds": 0.1
                }
            },
            "stopSpeakingPlan": {
                "numWords": 0,
                "voiceSeconds": 0.2,
                "backoffSeconds": 1,
                "acknowledgementPhrases": [
                    "i understand",
                    "i see",
                    "i got it"
                ],
                "interruptionPhrases": [
                    "stop",
                    "shut",
                    "up"
                ]
            },
            "monitorPlan": {
                "listenEnabled": false,
                "listenAuthenticationEnabled": false,
                "controlEnabled": false,
                "controlAuthenticationEnabled": false,
                "monitorIds": [
                    "123e4567-e89b-12d3-a456-426614174000"
                ]
            },
            "credentialIds": [
                "x"
            ],
            "server": {
                "timeoutSeconds": 20,
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "staticIpAddressesEnabled": false,
                "encryptedPaths": [
                    "x"
                ],
                "url": "x",
                "headers": {},
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                }
            },
            "keypadInputPlan": {
                "enabled": true,
                "timeoutSeconds": 1,
                "delimiters": "#"
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "assistant",
        "accessor": "Assistant",
        "op": "remove",
        "method": "DELETE",
        "path": "/assistant/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "transcriber": {
                "provider": "assembly-ai",
                "language": "multi",
                "confidenceThreshold": 0.4,
                "formatTurns": true,
                "endOfTurnConfidenceThreshold": 0.7,
                "minEndOfTurnSilenceWhenConfident": 160,
                "wordFinalizationMaxWaitTime": 160,
                "maxTurnSilence": 400,
                "vadAssistedEndpointingEnabled": true,
                "mode": "max_accuracy",
                "prompt": "x",
                "agentContext": "x",
                "agentContextAutoUpdateEnabled": true,
                "languageCodes": [
                    "en"
                ],
                "speechModel": "universal-streaming-english",
                "realtimeUrl": "x",
                "wordBoost": [
                    "x"
                ],
                "keytermsPrompt": [
                    "x"
                ],
                "endUtteranceSilenceThreshold": 1,
                "disablePartialTranscripts": true,
                "fallbackPlan": {
                    "transcribers": []
                }
            },
            "model": {
                "messages": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "tools": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "toolIds": [
                    "x"
                ],
                "toolRefs": [
                    {
                        "toolId": "x",
                        "version": "x"
                    }
                ],
                "knowledgeBase": {
                    "provider": "custom-knowledge-base",
                    "server": {}
                },
                "model": "claude-3-opus-20240229",
                "provider": "anthropic",
                "thinking": {
                    "budgetTokens": 1,
                    "type": "enabled"
                },
                "temperature": 1,
                "maxTokens": 1,
                "emotionRecognitionEnabled": true,
                "numFastTurns": 1
            },
            "voice": {
                "cachingEnabled": true,
                "provider": "azure",
                "voiceId": "andrew",
                "chunkPlan": {
                    "enabled": true,
                    "formatPlan": {},
                    "minCharacters": 30,
                    "punctuationBoundaries": [
                        "。",
                        "，",
                        "."
                    ]
                },
                "speed": 1,
                "fallbackPlan": {
                    "voices": []
                }
            },
            "firstMessage": "Hello! How can I help you today?",
            "firstMessageInterruptionsEnabled": true,
            "firstMessageMode": "assistant-speaks-first",
            "voicemailDetection": "off",
            "clientMessages": [
                "conversation-update",
                "function-call",
                "hang"
            ],
            "serverMessages": [
                "conversation-update",
                "end-of-call-report",
                "function-call"
            ],
            "maxDurationSeconds": 600,
            "backgroundSound": "office",
            "modelOutputInMessagesEnabled": false,
            "transportConfigurations": [
                {
                    "provider": "twilio",
                    "timeout": 60,
                    "record": false,
                    "recordingChannels": "mono"
                }
            ],
            "observabilityPlan": {
                "provider": "langfuse",
                "promptName": "x",
                "promptVersion": 1,
                "traceName": "x",
                "tags": [
                    "x"
                ],
                "metadata": {}
            },
            "credentials": [
                {
                    "provider": "anthropic",
                    "apiKey": "x",
                    "name": "x"
                }
            ],
            "hooks": [
                {
                    "on": "call.ending",
                    "do": [
                        {}
                    ],
                    "filters": [
                        {
                            "key": "x",
                            "oneOf": [],
                            "type": "oneOf"
                        }
                    ]
                }
            ],
            "latestVersion": "x",
            "modelDeprecations": [
                {
                    "slot": "model.fallbackModels[1]",
                    "provider": "openai",
                    "model": "gpt-4-1106-preview",
                    "deprecationDate": "2025-09-26",
                    "retirementDate": "2026-03-26",
                    "replacementModel": "gpt-5"
                }
            ],
            "name": "x",
            "voicemailMessage": "x",
            "endCallMessage": "x",
            "endCallPhrases": [
                "x"
            ],
            "compliancePlan": {
                "hipaaEnabled": true,
                "pciEnabled": {
                    "pciEnabled": false
                },
                "securityFilterPlan": {
                    "enabled": true,
                    "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                    "mode": "sanitize",
                    "replacementText": "x"
                },
                "recordingConsentPlan": {
                    "firstMessageMode": "assistant-speaks-first",
                    "message": "x",
                    "type": "stay-on-line",
                    "voice": {
                        "cachingEnabled": true,
                        "chunkPlan": {},
                        "fallbackPlan": {},
                        "provider": "azure",
                        "speed": 1
                    },
                    "waitSeconds": 3
                }
            },
            "metadata": {},
            "backgroundSpeechDenoisingPlan": {
                "smartDenoisingPlan": {
                    "enabled": true
                },
                "fourierDenoisingPlan": {
                    "baselineOffsetDb": -15,
                    "baselinePercentile": 85,
                    "enabled": true,
                    "mediaDetectionEnabled": true,
                    "staticThreshold": -35,
                    "windowSizeMs": 3000
                }
            },
            "analysisPlan": {
                "minMessagesThreshold": 1,
                "summaryPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "timeoutSeconds": 1
                },
                "structuredDataPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "schema": {},
                    "timeoutSeconds": 1
                },
                "structuredDataMultiPlan": [
                    {
                        "key": "x",
                        "plan": {}
                    }
                ],
                "successEvaluationPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "rubric": "NumericScale",
                    "timeoutSeconds": 1
                },
                "outcomeIds": [
                    "x"
                ]
            },
            "artifactPlan": {
                "recordingEnabled": true,
                "recordingFormat": "wav;l16",
                "recordingUseCustomStorageEnabled": true,
                "videoRecordingEnabled": false,
                "fullMessageHistoryEnabled": false,
                "pcapEnabled": true,
                "pcapS3PathPrefix": "/pcaps",
                "pcapUseCustomStorageEnabled": true,
                "loggingEnabled": true,
                "loggingUseCustomStorageEnabled": true,
                "transcriptPlan": {
                    "assistantName": "x",
                    "enabled": true,
                    "userName": "x"
                },
                "recordingPath": "x",
                "structuredOutputIds": [
                    "x"
                ],
                "structuredOutputs": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "description": "x",
                        "model": {},
                        "name": "x",
                        "regex": "x",
                        "schema": {},
                        "type": "ai",
                        "workflowIds": [
                            "x"
                        ]
                    }
                ],
                "scorecardIds": [
                    "x"
                ],
                "scorecards": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "description": "x",
                        "metrics": [
                            {}
                        ],
                        "name": "x"
                    }
                ],
                "loggingPath": "x"
            },
            "startSpeakingPlan": {
                "waitSeconds": 0.4,
                "smartEndpointingEnabled": false,
                "smartEndpointingPlan": {
                    "provider": "vapi"
                },
                "customEndpointingRules": [
                    {
                        "regex": "x",
                        "regexOptions": [],
                        "timeoutSeconds": 1,
                        "type": "assistant"
                    }
                ],
                "transcriptionEndpointingPlan": {
                    "onNoPunctuationSeconds": 1.5,
                    "onNumberSeconds": 0.5,
                    "onPunctuationSeconds": 0.1
                }
            },
            "stopSpeakingPlan": {
                "numWords": 0,
                "voiceSeconds": 0.2,
                "backoffSeconds": 1,
                "acknowledgementPhrases": [
                    "i understand",
                    "i see",
                    "i got it"
                ],
                "interruptionPhrases": [
                    "stop",
                    "shut",
                    "up"
                ]
            },
            "monitorPlan": {
                "listenEnabled": false,
                "listenAuthenticationEnabled": false,
                "controlEnabled": false,
                "controlAuthenticationEnabled": false,
                "monitorIds": [
                    "123e4567-e89b-12d3-a456-426614174000"
                ]
            },
            "credentialIds": [
                "x"
            ],
            "server": {
                "timeoutSeconds": 20,
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "staticIpAddressesEnabled": false,
                "encryptedPaths": [
                    "x"
                ],
                "url": "x",
                "headers": {},
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                }
            },
            "keypadInputPlan": {
                "enabled": true,
                "timeoutSeconds": 1,
                "delimiters": "#"
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "assistant",
        "accessor": "Assistant",
        "op": "update",
        "method": "PATCH",
        "path": "/assistant/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "transcriber": {
                "provider": "assembly-ai",
                "language": "multi",
                "confidenceThreshold": 0.4,
                "formatTurns": true,
                "endOfTurnConfidenceThreshold": 0.7,
                "minEndOfTurnSilenceWhenConfident": 160,
                "wordFinalizationMaxWaitTime": 160,
                "maxTurnSilence": 400,
                "vadAssistedEndpointingEnabled": true,
                "mode": "max_accuracy",
                "prompt": "x",
                "agentContext": "x",
                "agentContextAutoUpdateEnabled": true,
                "languageCodes": [
                    "en"
                ],
                "speechModel": "universal-streaming-english",
                "realtimeUrl": "x",
                "wordBoost": [
                    "x"
                ],
                "keytermsPrompt": [
                    "x"
                ],
                "endUtteranceSilenceThreshold": 1,
                "disablePartialTranscripts": true,
                "fallbackPlan": {
                    "transcribers": []
                }
            },
            "model": {
                "messages": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "tools": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "toolIds": [
                    "x"
                ],
                "toolRefs": [
                    {
                        "toolId": "x",
                        "version": "x"
                    }
                ],
                "knowledgeBase": {
                    "provider": "custom-knowledge-base",
                    "server": {}
                },
                "model": "claude-3-opus-20240229",
                "provider": "anthropic",
                "thinking": {
                    "budgetTokens": 1,
                    "type": "enabled"
                },
                "temperature": 1,
                "maxTokens": 1,
                "emotionRecognitionEnabled": true,
                "numFastTurns": 1
            },
            "voice": {
                "cachingEnabled": true,
                "provider": "azure",
                "voiceId": "andrew",
                "chunkPlan": {
                    "enabled": true,
                    "formatPlan": {},
                    "minCharacters": 30,
                    "punctuationBoundaries": [
                        "。",
                        "，",
                        "."
                    ]
                },
                "speed": 1,
                "fallbackPlan": {
                    "voices": []
                }
            },
            "firstMessage": "Hello! How can I help you today?",
            "firstMessageInterruptionsEnabled": true,
            "firstMessageMode": "assistant-speaks-first",
            "voicemailDetection": "off",
            "clientMessages": [
                "conversation-update",
                "function-call",
                "hang"
            ],
            "serverMessages": [
                "conversation-update",
                "end-of-call-report",
                "function-call"
            ],
            "maxDurationSeconds": 600,
            "backgroundSound": "office",
            "modelOutputInMessagesEnabled": false,
            "transportConfigurations": [
                {
                    "provider": "twilio",
                    "timeout": 60,
                    "record": false,
                    "recordingChannels": "mono"
                }
            ],
            "observabilityPlan": {
                "provider": "langfuse",
                "promptName": "x",
                "promptVersion": 1,
                "traceName": "x",
                "tags": [
                    "x"
                ],
                "metadata": {}
            },
            "credentials": [
                {
                    "provider": "anthropic",
                    "apiKey": "x",
                    "name": "x"
                }
            ],
            "hooks": [
                {
                    "on": "call.ending",
                    "do": [
                        {}
                    ],
                    "filters": [
                        {
                            "key": "x",
                            "oneOf": [],
                            "type": "oneOf"
                        }
                    ]
                }
            ],
            "latestVersion": "x",
            "modelDeprecations": [
                {
                    "slot": "model.fallbackModels[1]",
                    "provider": "openai",
                    "model": "gpt-4-1106-preview",
                    "deprecationDate": "2025-09-26",
                    "retirementDate": "2026-03-26",
                    "replacementModel": "gpt-5"
                }
            ],
            "name": "x",
            "voicemailMessage": "x",
            "endCallMessage": "x",
            "endCallPhrases": [
                "x"
            ],
            "compliancePlan": {
                "hipaaEnabled": true,
                "pciEnabled": {
                    "pciEnabled": false
                },
                "securityFilterPlan": {
                    "enabled": true,
                    "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                    "mode": "sanitize",
                    "replacementText": "x"
                },
                "recordingConsentPlan": {
                    "firstMessageMode": "assistant-speaks-first",
                    "message": "x",
                    "type": "stay-on-line",
                    "voice": {
                        "cachingEnabled": true,
                        "chunkPlan": {},
                        "fallbackPlan": {},
                        "provider": "azure",
                        "speed": 1
                    },
                    "waitSeconds": 3
                }
            },
            "metadata": {},
            "backgroundSpeechDenoisingPlan": {
                "smartDenoisingPlan": {
                    "enabled": true
                },
                "fourierDenoisingPlan": {
                    "baselineOffsetDb": -15,
                    "baselinePercentile": 85,
                    "enabled": true,
                    "mediaDetectionEnabled": true,
                    "staticThreshold": -35,
                    "windowSizeMs": 3000
                }
            },
            "analysisPlan": {
                "minMessagesThreshold": 1,
                "summaryPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "timeoutSeconds": 1
                },
                "structuredDataPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "schema": {},
                    "timeoutSeconds": 1
                },
                "structuredDataMultiPlan": [
                    {
                        "key": "x",
                        "plan": {}
                    }
                ],
                "successEvaluationPlan": {
                    "enabled": true,
                    "messages": [
                        {}
                    ],
                    "rubric": "NumericScale",
                    "timeoutSeconds": 1
                },
                "outcomeIds": [
                    "x"
                ]
            },
            "artifactPlan": {
                "recordingEnabled": true,
                "recordingFormat": "wav;l16",
                "recordingUseCustomStorageEnabled": true,
                "videoRecordingEnabled": false,
                "fullMessageHistoryEnabled": false,
                "pcapEnabled": true,
                "pcapS3PathPrefix": "/pcaps",
                "pcapUseCustomStorageEnabled": true,
                "loggingEnabled": true,
                "loggingUseCustomStorageEnabled": true,
                "transcriptPlan": {
                    "assistantName": "x",
                    "enabled": true,
                    "userName": "x"
                },
                "recordingPath": "x",
                "structuredOutputIds": [
                    "x"
                ],
                "structuredOutputs": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "description": "x",
                        "model": {},
                        "name": "x",
                        "regex": "x",
                        "schema": {},
                        "type": "ai",
                        "workflowIds": [
                            "x"
                        ]
                    }
                ],
                "scorecardIds": [
                    "x"
                ],
                "scorecards": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "description": "x",
                        "metrics": [
                            {}
                        ],
                        "name": "x"
                    }
                ],
                "loggingPath": "x"
            },
            "startSpeakingPlan": {
                "waitSeconds": 0.4,
                "smartEndpointingEnabled": false,
                "smartEndpointingPlan": {
                    "provider": "vapi"
                },
                "customEndpointingRules": [
                    {
                        "regex": "x",
                        "regexOptions": [],
                        "timeoutSeconds": 1,
                        "type": "assistant"
                    }
                ],
                "transcriptionEndpointingPlan": {
                    "onNoPunctuationSeconds": 1.5,
                    "onNumberSeconds": 0.5,
                    "onPunctuationSeconds": 0.1
                }
            },
            "stopSpeakingPlan": {
                "numWords": 0,
                "voiceSeconds": 0.2,
                "backoffSeconds": 1,
                "acknowledgementPhrases": [
                    "i understand",
                    "i see",
                    "i got it"
                ],
                "interruptionPhrases": [
                    "stop",
                    "shut",
                    "up"
                ]
            },
            "monitorPlan": {
                "listenEnabled": false,
                "listenAuthenticationEnabled": false,
                "controlEnabled": false,
                "controlAuthenticationEnabled": false,
                "monitorIds": [
                    "123e4567-e89b-12d3-a456-426614174000"
                ]
            },
            "credentialIds": [
                "x"
            ],
            "server": {
                "timeoutSeconds": 20,
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "staticIpAddressesEnabled": false,
                "encryptedPaths": [
                    "x"
                ],
                "url": "x",
                "headers": {},
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                }
            },
            "keypadInputPlan": {
                "enabled": true,
                "timeoutSeconds": 1,
                "delimiters": "#"
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "board",
        "accessor": "Board",
        "op": "create",
        "method": "POST",
        "path": "/reporting/board",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "items": [
                {
                    "insightId": "x",
                    "position": {
                        "x": 1,
                        "y": 1
                    },
                    "size": {
                        "height": 1,
                        "width": 1
                    },
                    "systemKey": "x",
                    "type": "insight"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x",
            "name": "x",
            "layout": {
                "columns": 1
            },
            "timeRangeOverride": {
                "end": "\"2025-01-01\" or \"now\"",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "step": "minute",
                "timezone": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "board",
        "accessor": "Board",
        "op": "list",
        "method": "GET",
        "path": "/reporting/board",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "createdAt": "2026-01-01T00:00:00Z",
                    "id": "x",
                    "items": [
                        {
                            "insightId": "x",
                            "position": {},
                            "size": {},
                            "systemKey": "x",
                            "type": "insight"
                        }
                    ],
                    "layout": {
                        "columns": 1
                    },
                    "name": "x",
                    "orgId": "x",
                    "systemKey": "x",
                    "timeRangeOverride": {
                        "end": "\"2025-01-01\" or \"now\"",
                        "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                        "step": "minute",
                        "timezone": "x"
                    },
                    "updatedAt": "2026-01-01T00:00:00Z"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "board",
        "accessor": "Board",
        "op": "list",
        "method": "GET",
        "path": "/reporting/board/default/metrics-overview",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "insightId": "x",
                    "position": {
                        "x": 1,
                        "y": 1
                    },
                    "size": {
                        "height": 1,
                        "width": 1
                    },
                    "systemKey": "x",
                    "type": "insight"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x",
            "name": "x",
            "layout": {
                "columns": 1
            },
            "timeRangeOverride": {
                "end": "\"2025-01-01\" or \"now\"",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "step": "minute",
                "timezone": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "board",
        "accessor": "Board",
        "op": "load",
        "method": "GET",
        "path": "/reporting/board/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "insightId": "x",
                    "position": {
                        "x": 1,
                        "y": 1
                    },
                    "size": {
                        "height": 1,
                        "width": 1
                    },
                    "systemKey": "x",
                    "type": "insight"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x",
            "name": "x",
            "layout": {
                "columns": 1
            },
            "timeRangeOverride": {
                "end": "\"2025-01-01\" or \"now\"",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "step": "minute",
                "timezone": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "board",
        "accessor": "Board",
        "op": "remove",
        "method": "DELETE",
        "path": "/reporting/board/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "insightId": "x",
                    "position": {
                        "x": 1,
                        "y": 1
                    },
                    "size": {
                        "height": 1,
                        "width": 1
                    },
                    "systemKey": "x",
                    "type": "insight"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x",
            "name": "x",
            "layout": {
                "columns": 1
            },
            "timeRangeOverride": {
                "end": "\"2025-01-01\" or \"now\"",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "step": "minute",
                "timezone": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "board",
        "accessor": "Board",
        "op": "update",
        "method": "PATCH",
        "path": "/reporting/board/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "insightId": "x",
                    "position": {
                        "x": 1,
                        "y": 1
                    },
                    "size": {
                        "height": 1,
                        "width": 1
                    },
                    "systemKey": "x",
                    "type": "insight"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x",
            "name": "x",
            "layout": {
                "columns": 1
            },
            "timeRangeOverride": {
                "end": "\"2025-01-01\" or \"now\"",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "step": "minute",
                "timezone": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "create",
        "method": "POST",
        "path": "/call",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "type": "inboundPhoneCall",
            "costs": [
                {
                    "type": "transport",
                    "provider": "daily",
                    "minutes": 1,
                    "cost": 1
                }
            ],
            "messages": [
                {
                    "role": "x",
                    "message": "x",
                    "time": 1,
                    "endTime": 1,
                    "secondsFromStart": 1,
                    "duration": 1,
                    "isFiltered": true,
                    "detectedThreats": [
                        "x"
                    ],
                    "originalMessage": "x",
                    "metadata": {},
                    "speakerLabel": "x"
                }
            ],
            "phoneCallProvider": "twilio",
            "phoneCallTransport": "sip",
            "status": "scheduled",
            "endedReason": "call-start-error-neither-assistant-nor-server-set",
            "endedMessage": "x",
            "destination": {
                "message": "x",
                "type": "number",
                "numberE164CheckEnabled": true,
                "number": "x",
                "extension": "x",
                "callerId": "x",
                "transferPlan": {
                    "dialTimeout": 1,
                    "fallbackPlan": {},
                    "holdAudioUrl": "x",
                    "mode": "blind-transfer",
                    "sipHeadersInReferToEnabled": true,
                    "sipVerb": "refer",
                    "summaryPlan": {},
                    "timeout": 1,
                    "transferCompleteAudioUrl": "x",
                    "twiml": "x"
                },
                "name": "x",
                "description": "x"
            },
            "assistantVersion": "x",
            "squadVersion": "x",
            "transport": {
                "conversationType": "voice",
                "provider": "vapi.websocket",
                "audioFormat": {
                    "sampleRate": 1,
                    "format": "pcm_s16le",
                    "container": "raw"
                }
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "endedAt": "2026-01-01T00:00:00Z",
            "cost": 1,
            "costBreakdown": {
                "transport": 1,
                "stt": 1,
                "llm": 1,
                "tts": 1,
                "vapi": 1,
                "chat": 1,
                "total": 1,
                "llmPromptTokens": 1,
                "llmCompletionTokens": 1,
                "llmCachedPromptTokens": 1,
                "ttsCharacters": 1,
                "analysisCostBreakdown": {
                    "summary": 1,
                    "summaryPromptTokens": 1,
                    "summaryCompletionTokens": 1,
                    "summaryCachedPromptTokens": 1,
                    "structuredData": 1,
                    "structuredDataPromptTokens": 1,
                    "structuredDataCompletionTokens": 1,
                    "structuredDataCachedPromptTokens": 1,
                    "successEvaluation": 1,
                    "successEvaluationPromptTokens": 1,
                    "successEvaluationCompletionTokens": 1,
                    "successEvaluationCachedPromptTokens": 1,
                    "structuredOutput": 1,
                    "structuredOutputPromptTokens": 1,
                    "structuredOutputCompletionTokens": 1,
                    "structuredOutputCachedPromptTokens": 1
                }
            },
            "artifactPlan": {
                "recordingEnabled": true,
                "recordingFormat": "wav;l16",
                "recordingUseCustomStorageEnabled": true,
                "videoRecordingEnabled": false,
                "fullMessageHistoryEnabled": false,
                "pcapEnabled": true,
                "pcapS3PathPrefix": "/pcaps",
                "pcapUseCustomStorageEnabled": true,
                "loggingEnabled": true,
                "loggingUseCustomStorageEnabled": true,
                "transcriptPlan": {
                    "assistantName": "x",
                    "enabled": true,
                    "userName": "x"
                },
                "recordingPath": "x",
                "structuredOutputIds": [
                    "x"
                ],
                "structuredOutputs": [
                    {
                        "assistantIds": [],
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "description": "x",
                        "name": "x",
                        "regex": "x",
                        "schema": {},
                        "type": "ai",
                        "workflowIds": []
                    }
                ],
                "scorecardIds": [
                    "x"
                ],
                "scorecards": [
                    {
                        "assistantIds": [],
                        "description": "x",
                        "metrics": [],
                        "name": "x"
                    }
                ],
                "loggingPath": "x"
            },
            "analysis": {
                "summary": "x",
                "structuredData": {},
                "structuredDataMulti": [
                    {}
                ],
                "successEvaluation": "x"
            },
            "monitor": {
                "monitors": [
                    {
                        "monitorId": "x",
                        "filterPassed": true
                    }
                ],
                "listenUrl": "x",
                "controlUrl": "x"
            },
            "artifact": {
                "messages": [
                    {}
                ],
                "messagesOpenAIFormatted": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "skippedStructuredOutputs": {},
                "transfers": [
                    {
                        "messages": [],
                        "mode": "blind-transfer",
                        "status": "connected",
                        "transcript": "x"
                    }
                ],
                "recordingUrl": "x",
                "stereoRecordingUrl": "x",
                "videoRecordingUrl": "x",
                "videoRecordingStartDelaySeconds": 1,
                "recording": {
                    "mono": {},
                    "stereoUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "videoUrl": "x"
                },
                "transcript": "x",
                "pcapUrl": "x",
                "logUrl": "x",
                "nodes": [
                    {
                        "messages": [],
                        "nodeName": "x",
                        "variableValues": {}
                    }
                ],
                "assistantActivations": [
                    {
                        "assistantId": "x",
                        "assistantName": "x",
                        "assistantVersion": "x",
                        "squadVersion": "x"
                    }
                ],
                "variableValues": {},
                "performanceMetrics": {
                    "endpointingLatencyAverage": 1,
                    "fromTransportLatencyAverage": 1,
                    "modelLatencyAverage": 1,
                    "numAssistantInterrupted": 1,
                    "numUserInterrupted": 1,
                    "toTransportLatencyAverage": 1,
                    "transcriberLatencyAverage": 1,
                    "turnLatencies": [],
                    "turnLatencyAverage": 1,
                    "voiceLatencyAverage": 1
                },
                "structuredOutputs": {},
                "scorecards": {},
                "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                "presignedMonoUrl": "x",
                "presignedStereoUrl": "x",
                "presignedVideoUrl": "x",
                "presignedAssistantUrl": "x",
                "presignedCustomerUrl": "x",
                "presignedPcapUrl": "x",
                "presignedLogUrl": "x",
                "presignedUrlsExpiresAt": "x"
            },
            "compliance": {
                "recordingConsent": {
                    "type": "stay-on-line",
                    "grantedAt": "2026-01-01T00:00:00Z"
                }
            },
            "phoneCallProviderId": "x",
            "campaignId": "x",
            "assistantId": "x",
            "assistant": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [],
                    "language": "multi",
                    "languageCodes": [],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {
                    "emotionRecognitionEnabled": true,
                    "maxTokens": 1,
                    "messages": [],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [],
                    "toolRefs": [],
                    "tools": []
                },
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {}
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [],
                    "traceName": "x"
                },
                "credentials": [
                    {}
                ],
                "hooks": [
                    {}
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {},
                    "securityFilterPlan": {}
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [],
                    "structuredDataMultiPlan": [],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [],
                    "scorecards": [],
                    "structuredOutputIds": [],
                    "structuredOutputs": [],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "assistantOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [],
                    "language": "multi",
                    "languageCodes": [],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {}
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [],
                    "traceName": "x"
                },
                "credentials": [
                    {}
                ],
                "hooks": [
                    {}
                ],
                "tools:append": [
                    {}
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {},
                    "securityFilterPlan": {}
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [],
                    "structuredDataMultiPlan": [],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [],
                    "scorecards": [],
                    "structuredOutputIds": [],
                    "structuredOutputs": [],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "squadId": "x",
            "squad": {
                "name": "x",
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {},
                    "credentialIds": [],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {},
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voicemailMessage": "x"
                }
            },
            "squadOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [],
                    "language": "multi",
                    "languageCodes": [],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {}
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [],
                    "traceName": "x"
                },
                "credentials": [
                    {}
                ],
                "hooks": [
                    {}
                ],
                "tools:append": [
                    {}
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {},
                    "securityFilterPlan": {}
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [],
                    "structuredDataMultiPlan": [],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [],
                    "scorecards": [],
                    "structuredOutputIds": [],
                    "structuredOutputs": [],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "workflowId": "x",
            "workflow": {
                "nodes": [
                    {}
                ],
                "model": {
                    "messages": [],
                    "provider": "openai",
                    "model": "gpt-5.6-sol",
                    "temperature": 1,
                    "maxTokens": 1
                },
                "transcriber": {
                    "provider": "assembly-ai",
                    "language": "multi",
                    "confidenceThreshold": 0.4,
                    "formatTurns": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "wordFinalizationMaxWaitTime": 160,
                    "maxTurnSilence": 400,
                    "vadAssistedEndpointingEnabled": true,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "languageCodes": [],
                    "speechModel": "universal-streaming-english",
                    "realtimeUrl": "x",
                    "wordBoost": [],
                    "keytermsPrompt": [],
                    "endUtteranceSilenceThreshold": 1,
                    "disablePartialTranscripts": true,
                    "fallbackPlan": {}
                },
                "voice": {
                    "cachingEnabled": true,
                    "provider": "azure",
                    "chunkPlan": {},
                    "speed": 1,
                    "fallbackPlan": {}
                },
                "observabilityPlan": {
                    "provider": "langfuse",
                    "promptName": "x",
                    "promptVersion": 1,
                    "traceName": "x",
                    "tags": [],
                    "metadata": {}
                },
                "backgroundSound": "office",
                "hooks": [
                    {}
                ],
                "credentials": [
                    {}
                ],
                "voicemailDetection": "off",
                "maxDurationSeconds": 600,
                "name": "x",
                "edges": [
                    {
                        "from": "x",
                        "to": "x",
                        "metadata": {}
                    }
                ],
                "globalPrompt": "x",
                "server": {
                    "timeoutSeconds": 20,
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "staticIpAddressesEnabled": false,
                    "encryptedPaths": [],
                    "url": "x",
                    "headers": {},
                    "backoffPlan": {}
                },
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "securityFilterPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "summaryPlan": {},
                    "structuredDataPlan": {},
                    "structuredDataMultiPlan": [],
                    "successEvaluationPlan": {},
                    "outcomeIds": []
                },
                "artifactPlan": {
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingUseCustomStorageEnabled": true,
                    "videoRecordingEnabled": false,
                    "fullMessageHistoryEnabled": false,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "loggingEnabled": true,
                    "loggingUseCustomStorageEnabled": true,
                    "transcriptPlan": {},
                    "recordingPath": "x",
                    "structuredOutputIds": [],
                    "structuredOutputs": [],
                    "scorecardIds": [],
                    "scorecards": [],
                    "loggingPath": "x"
                },
                "startSpeakingPlan": {
                    "waitSeconds": 0.4,
                    "smartEndpointingEnabled": false,
                    "customEndpointingRules": [],
                    "transcriptionEndpointingPlan": {}
                },
                "stopSpeakingPlan": {
                    "numWords": 0,
                    "voiceSeconds": 0.2,
                    "backoffSeconds": 1,
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ]
                },
                "monitorPlan": {
                    "listenEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "controlAuthenticationEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "backgroundSpeechDenoisingPlan": {
                    "smartDenoisingPlan": {},
                    "fourierDenoisingPlan": {}
                },
                "credentialIds": [
                    "x"
                ],
                "keypadInputPlan": {
                    "enabled": true,
                    "timeoutSeconds": 1,
                    "delimiters": "#"
                },
                "voicemailMessage": "x"
            },
            "workflowOverrides": {
                "variableValues": {}
            },
            "phoneNumberId": "x",
            "phoneNumber": {
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {}
                ],
                "smsEnabled": true,
                "twilioPhoneNumber": "x",
                "twilioAccountSid": "x",
                "twilioAuthToken": "x",
                "twilioApiKey": "x",
                "twilioApiSecret": "x",
                "name": "x",
                "assistantId": "x",
                "workflowId": "x",
                "squadId": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                }
            },
            "customerId": "x",
            "customer": {
                "numberE164CheckEnabled": true,
                "extension": null,
                "assistantOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {},
                    "credentialIds": [],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {},
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voicemailMessage": "x"
                },
                "squadOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {},
                    "credentialIds": [],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {},
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voicemailMessage": "x"
                },
                "number": "x",
                "sipUri": "x",
                "name": "x",
                "email": "x",
                "externalId": "x"
            },
            "name": "x",
            "schedulePlan": {
                "earliestAt": "2026-01-01T00:00:00Z",
                "latestAt": "2026-01-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "list",
        "method": "GET",
        "path": "/call",
        "args": [],
        "select": {
            "assistant_id": "v1",
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "limit": "v1",
            "phone_number_id": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "assistantId",
            "phoneNumberId",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "type": "inboundPhoneCall",
                "costs": [
                    {
                        "type": "transport",
                        "provider": "daily",
                        "minutes": 1,
                        "cost": 1
                    }
                ],
                "messages": [
                    {
                        "role": "x",
                        "message": "x",
                        "time": 1,
                        "endTime": 1,
                        "secondsFromStart": 1,
                        "duration": 1,
                        "isFiltered": true,
                        "detectedThreats": [
                            "x"
                        ],
                        "originalMessage": "x",
                        "metadata": {},
                        "speakerLabel": "x"
                    }
                ],
                "phoneCallProvider": "twilio",
                "phoneCallTransport": "sip",
                "status": "scheduled",
                "endedReason": "call-start-error-neither-assistant-nor-server-set",
                "endedMessage": "x",
                "destination": {
                    "message": "x",
                    "type": "number",
                    "numberE164CheckEnabled": true,
                    "number": "x",
                    "extension": "x",
                    "callerId": "x",
                    "transferPlan": {
                        "dialTimeout": 1,
                        "fallbackPlan": {},
                        "holdAudioUrl": "x",
                        "mode": "blind-transfer",
                        "sipHeadersInReferToEnabled": true,
                        "sipVerb": "refer",
                        "summaryPlan": {},
                        "timeout": 1,
                        "transferCompleteAudioUrl": "x",
                        "twiml": "x"
                    },
                    "name": "x",
                    "description": "x"
                },
                "assistantVersion": "x",
                "squadVersion": "x",
                "transport": {
                    "conversationType": "voice",
                    "provider": "vapi.websocket",
                    "audioFormat": {
                        "sampleRate": 1,
                        "format": "pcm_s16le",
                        "container": "raw"
                    }
                },
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "startedAt": "2026-01-01T00:00:00Z",
                "endedAt": "2026-01-01T00:00:00Z",
                "cost": 1,
                "costBreakdown": {
                    "transport": 1,
                    "stt": 1,
                    "llm": 1,
                    "tts": 1,
                    "vapi": 1,
                    "chat": 1,
                    "total": 1,
                    "llmPromptTokens": 1,
                    "llmCompletionTokens": 1,
                    "llmCachedPromptTokens": 1,
                    "ttsCharacters": 1,
                    "analysisCostBreakdown": {
                        "summary": 1,
                        "summaryPromptTokens": 1,
                        "summaryCompletionTokens": 1,
                        "summaryCachedPromptTokens": 1,
                        "structuredData": 1,
                        "structuredDataPromptTokens": 1,
                        "structuredDataCompletionTokens": 1,
                        "structuredDataCachedPromptTokens": 1,
                        "successEvaluation": 1,
                        "successEvaluationPromptTokens": 1,
                        "successEvaluationCompletionTokens": 1,
                        "successEvaluationCachedPromptTokens": 1,
                        "structuredOutput": 1,
                        "structuredOutputPromptTokens": 1,
                        "structuredOutputCompletionTokens": 1,
                        "structuredOutputCachedPromptTokens": 1
                    }
                },
                "artifactPlan": {
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingUseCustomStorageEnabled": true,
                    "videoRecordingEnabled": false,
                    "fullMessageHistoryEnabled": false,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "loggingEnabled": true,
                    "loggingUseCustomStorageEnabled": true,
                    "transcriptPlan": {
                        "assistantName": "x",
                        "enabled": true,
                        "userName": "x"
                    },
                    "recordingPath": "x",
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {
                            "assistantIds": [],
                            "compliancePlan": {
                                "forceStoreOnHipaaEnabled": false
                            },
                            "conditions": [
                                {
                                    "count": 4,
                                    "type": "minMessages"
                                },
                                {
                                    "seconds": 10,
                                    "type": "minCallDuration"
                                }
                            ],
                            "description": "x",
                            "name": "x",
                            "regex": "x",
                            "schema": {},
                            "type": "ai",
                            "workflowIds": []
                        }
                    ],
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {
                            "assistantIds": [],
                            "description": "x",
                            "metrics": [],
                            "name": "x"
                        }
                    ],
                    "loggingPath": "x"
                },
                "analysis": {
                    "summary": "x",
                    "structuredData": {},
                    "structuredDataMulti": [
                        {}
                    ],
                    "successEvaluation": "x"
                },
                "monitor": {
                    "monitors": [
                        {
                            "monitorId": "x",
                            "filterPassed": true
                        }
                    ],
                    "listenUrl": "x",
                    "controlUrl": "x"
                },
                "artifact": {
                    "messages": [
                        {}
                    ],
                    "messagesOpenAIFormatted": [
                        {
                            "content": "x",
                            "role": "assistant"
                        }
                    ],
                    "skippedStructuredOutputs": {},
                    "transfers": [
                        {
                            "messages": [],
                            "mode": "blind-transfer",
                            "status": "connected",
                            "transcript": "x"
                        }
                    ],
                    "recordingUrl": "x",
                    "stereoRecordingUrl": "x",
                    "videoRecordingUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "recording": {
                        "mono": {},
                        "stereoUrl": "x",
                        "videoRecordingStartDelaySeconds": 1,
                        "videoUrl": "x"
                    },
                    "transcript": "x",
                    "pcapUrl": "x",
                    "logUrl": "x",
                    "nodes": [
                        {
                            "messages": [],
                            "nodeName": "x",
                            "variableValues": {}
                        }
                    ],
                    "assistantActivations": [
                        {
                            "assistantId": "x",
                            "assistantName": "x",
                            "assistantVersion": "x",
                            "squadVersion": "x"
                        }
                    ],
                    "variableValues": {},
                    "performanceMetrics": {
                        "endpointingLatencyAverage": 1,
                        "fromTransportLatencyAverage": 1,
                        "modelLatencyAverage": 1,
                        "numAssistantInterrupted": 1,
                        "numUserInterrupted": 1,
                        "toTransportLatencyAverage": 1,
                        "transcriberLatencyAverage": 1,
                        "turnLatencies": [],
                        "turnLatencyAverage": 1,
                        "voiceLatencyAverage": 1
                    },
                    "structuredOutputs": {},
                    "scorecards": {},
                    "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                    "presignedMonoUrl": "x",
                    "presignedStereoUrl": "x",
                    "presignedVideoUrl": "x",
                    "presignedAssistantUrl": "x",
                    "presignedCustomerUrl": "x",
                    "presignedPcapUrl": "x",
                    "presignedLogUrl": "x",
                    "presignedUrlsExpiresAt": "x"
                },
                "compliance": {
                    "recordingConsent": {
                        "type": "stay-on-line",
                        "grantedAt": "2026-01-01T00:00:00Z"
                    }
                },
                "phoneCallProviderId": "x",
                "campaignId": "x",
                "assistantId": "x",
                "assistant": {
                    "transcriber": {
                        "agentContext": "x",
                        "agentContextAutoUpdateEnabled": true,
                        "confidenceThreshold": 0.4,
                        "disablePartialTranscripts": true,
                        "endOfTurnConfidenceThreshold": 0.7,
                        "endUtteranceSilenceThreshold": 1,
                        "fallbackPlan": {},
                        "formatTurns": true,
                        "keytermsPrompt": [],
                        "language": "multi",
                        "languageCodes": [],
                        "maxTurnSilence": 400,
                        "minEndOfTurnSilenceWhenConfident": 160,
                        "mode": "max_accuracy",
                        "prompt": "x",
                        "provider": "assembly-ai",
                        "realtimeUrl": "x",
                        "speechModel": "universal-streaming-english",
                        "vadAssistedEndpointingEnabled": true,
                        "wordBoost": [],
                        "wordFinalizationMaxWaitTime": 160
                    },
                    "model": {
                        "emotionRecognitionEnabled": true,
                        "maxTokens": 1,
                        "messages": [],
                        "model": "claude-3-opus-20240229",
                        "numFastTurns": 1,
                        "provider": "anthropic",
                        "temperature": 1,
                        "thinking": {},
                        "toolIds": [],
                        "toolRefs": [],
                        "tools": []
                    },
                    "voice": {
                        "cachingEnabled": true,
                        "chunkPlan": {},
                        "fallbackPlan": {},
                        "provider": "azure",
                        "speed": 1
                    },
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "voicemailDetection": "off",
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "maxDurationSeconds": 600,
                    "backgroundSound": "office",
                    "modelOutputInMessagesEnabled": false,
                    "transportConfigurations": [
                        {}
                    ],
                    "observabilityPlan": {
                        "metadata": {},
                        "promptName": "x",
                        "promptVersion": 1,
                        "provider": "langfuse",
                        "tags": [],
                        "traceName": "x"
                    },
                    "credentials": [
                        {}
                    ],
                    "hooks": [
                        {}
                    ],
                    "name": "x",
                    "voicemailMessage": "x",
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "recordingConsentPlan": {},
                        "securityFilterPlan": {}
                    },
                    "metadata": {},
                    "backgroundSpeechDenoisingPlan": {
                        "fourierDenoisingPlan": {},
                        "smartDenoisingPlan": {}
                    },
                    "analysisPlan": {
                        "minMessagesThreshold": 1,
                        "outcomeIds": [],
                        "structuredDataMultiPlan": [],
                        "structuredDataPlan": {},
                        "successEvaluationPlan": {},
                        "summaryPlan": {}
                    },
                    "artifactPlan": {
                        "fullMessageHistoryEnabled": false,
                        "loggingEnabled": true,
                        "loggingPath": "x",
                        "loggingUseCustomStorageEnabled": true,
                        "pcapEnabled": true,
                        "pcapS3PathPrefix": "/pcaps",
                        "pcapUseCustomStorageEnabled": true,
                        "recordingEnabled": true,
                        "recordingFormat": "wav;l16",
                        "recordingPath": "x",
                        "recordingUseCustomStorageEnabled": true,
                        "scorecardIds": [],
                        "scorecards": [],
                        "structuredOutputIds": [],
                        "structuredOutputs": [],
                        "transcriptPlan": {},
                        "videoRecordingEnabled": false
                    },
                    "startSpeakingPlan": {
                        "customEndpointingRules": [],
                        "smartEndpointingEnabled": false,
                        "transcriptionEndpointingPlan": {},
                        "waitSeconds": 0.4
                    },
                    "stopSpeakingPlan": {
                        "acknowledgementPhrases": [
                            "i understand",
                            "i see",
                            "i got it"
                        ],
                        "backoffSeconds": 1,
                        "interruptionPhrases": [
                            "stop",
                            "shut",
                            "up"
                        ],
                        "numWords": 0,
                        "voiceSeconds": 0.2
                    },
                    "monitorPlan": {
                        "controlAuthenticationEnabled": false,
                        "controlEnabled": false,
                        "listenAuthenticationEnabled": false,
                        "listenEnabled": false,
                        "monitorIds": [
                            "123e4567-e89b-12d3-a456-426614174000"
                        ]
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    },
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    }
                },
                "assistantOverrides": {
                    "transcriber": {
                        "agentContext": "x",
                        "agentContextAutoUpdateEnabled": true,
                        "confidenceThreshold": 0.4,
                        "disablePartialTranscripts": true,
                        "endOfTurnConfidenceThreshold": 0.7,
                        "endUtteranceSilenceThreshold": 1,
                        "fallbackPlan": {},
                        "formatTurns": true,
                        "keytermsPrompt": [],
                        "language": "multi",
                        "languageCodes": [],
                        "maxTurnSilence": 400,
                        "minEndOfTurnSilenceWhenConfident": 160,
                        "mode": "max_accuracy",
                        "prompt": "x",
                        "provider": "assembly-ai",
                        "realtimeUrl": "x",
                        "speechModel": "universal-streaming-english",
                        "vadAssistedEndpointingEnabled": true,
                        "wordBoost": [],
                        "wordFinalizationMaxWaitTime": 160
                    },
                    "model": {},
                    "voice": {
                        "cachingEnabled": true,
                        "chunkPlan": {},
                        "fallbackPlan": {},
                        "provider": "azure",
                        "speed": 1
                    },
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "voicemailDetection": "off",
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "maxDurationSeconds": 600,
                    "backgroundSound": "office",
                    "modelOutputInMessagesEnabled": false,
                    "transportConfigurations": [
                        {}
                    ],
                    "observabilityPlan": {
                        "metadata": {},
                        "promptName": "x",
                        "promptVersion": 1,
                        "provider": "langfuse",
                        "tags": [],
                        "traceName": "x"
                    },
                    "credentials": [
                        {}
                    ],
                    "hooks": [
                        {}
                    ],
                    "tools:append": [
                        {}
                    ],
                    "variableValues": {},
                    "name": "x",
                    "voicemailMessage": "x",
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "recordingConsentPlan": {},
                        "securityFilterPlan": {}
                    },
                    "metadata": {},
                    "backgroundSpeechDenoisingPlan": {
                        "fourierDenoisingPlan": {},
                        "smartDenoisingPlan": {}
                    },
                    "analysisPlan": {
                        "minMessagesThreshold": 1,
                        "outcomeIds": [],
                        "structuredDataMultiPlan": [],
                        "structuredDataPlan": {},
                        "successEvaluationPlan": {},
                        "summaryPlan": {}
                    },
                    "artifactPlan": {
                        "fullMessageHistoryEnabled": false,
                        "loggingEnabled": true,
                        "loggingPath": "x",
                        "loggingUseCustomStorageEnabled": true,
                        "pcapEnabled": true,
                        "pcapS3PathPrefix": "/pcaps",
                        "pcapUseCustomStorageEnabled": true,
                        "recordingEnabled": true,
                        "recordingFormat": "wav;l16",
                        "recordingPath": "x",
                        "recordingUseCustomStorageEnabled": true,
                        "scorecardIds": [],
                        "scorecards": [],
                        "structuredOutputIds": [],
                        "structuredOutputs": [],
                        "transcriptPlan": {},
                        "videoRecordingEnabled": false
                    },
                    "startSpeakingPlan": {
                        "customEndpointingRules": [],
                        "smartEndpointingEnabled": false,
                        "transcriptionEndpointingPlan": {},
                        "waitSeconds": 0.4
                    },
                    "stopSpeakingPlan": {
                        "acknowledgementPhrases": [
                            "i understand",
                            "i see",
                            "i got it"
                        ],
                        "backoffSeconds": 1,
                        "interruptionPhrases": [
                            "stop",
                            "shut",
                            "up"
                        ],
                        "numWords": 0,
                        "voiceSeconds": 0.2
                    },
                    "monitorPlan": {
                        "controlAuthenticationEnabled": false,
                        "controlEnabled": false,
                        "listenAuthenticationEnabled": false,
                        "listenEnabled": false,
                        "monitorIds": [
                            "123e4567-e89b-12d3-a456-426614174000"
                        ]
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    },
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    }
                },
                "squadId": "x",
                "squad": {
                    "name": "x",
                    "members": [
                        {
                            "assistant": {},
                            "assistantDestinations": [],
                            "assistantId": "x",
                            "assistantOverrides": {},
                            "assistantVersion": "x"
                        }
                    ],
                    "membersOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {},
                        "credentialIds": [],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {},
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voicemailMessage": "x"
                    }
                },
                "squadOverrides": {
                    "transcriber": {
                        "agentContext": "x",
                        "agentContextAutoUpdateEnabled": true,
                        "confidenceThreshold": 0.4,
                        "disablePartialTranscripts": true,
                        "endOfTurnConfidenceThreshold": 0.7,
                        "endUtteranceSilenceThreshold": 1,
                        "fallbackPlan": {},
                        "formatTurns": true,
                        "keytermsPrompt": [],
                        "language": "multi",
                        "languageCodes": [],
                        "maxTurnSilence": 400,
                        "minEndOfTurnSilenceWhenConfident": 160,
                        "mode": "max_accuracy",
                        "prompt": "x",
                        "provider": "assembly-ai",
                        "realtimeUrl": "x",
                        "speechModel": "universal-streaming-english",
                        "vadAssistedEndpointingEnabled": true,
                        "wordBoost": [],
                        "wordFinalizationMaxWaitTime": 160
                    },
                    "model": {},
                    "voice": {
                        "cachingEnabled": true,
                        "chunkPlan": {},
                        "fallbackPlan": {},
                        "provider": "azure",
                        "speed": 1
                    },
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "voicemailDetection": "off",
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "maxDurationSeconds": 600,
                    "backgroundSound": "office",
                    "modelOutputInMessagesEnabled": false,
                    "transportConfigurations": [
                        {}
                    ],
                    "observabilityPlan": {
                        "metadata": {},
                        "promptName": "x",
                        "promptVersion": 1,
                        "provider": "langfuse",
                        "tags": [],
                        "traceName": "x"
                    },
                    "credentials": [
                        {}
                    ],
                    "hooks": [
                        {}
                    ],
                    "tools:append": [
                        {}
                    ],
                    "variableValues": {},
                    "name": "x",
                    "voicemailMessage": "x",
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "recordingConsentPlan": {},
                        "securityFilterPlan": {}
                    },
                    "metadata": {},
                    "backgroundSpeechDenoisingPlan": {
                        "fourierDenoisingPlan": {},
                        "smartDenoisingPlan": {}
                    },
                    "analysisPlan": {
                        "minMessagesThreshold": 1,
                        "outcomeIds": [],
                        "structuredDataMultiPlan": [],
                        "structuredDataPlan": {},
                        "successEvaluationPlan": {},
                        "summaryPlan": {}
                    },
                    "artifactPlan": {
                        "fullMessageHistoryEnabled": false,
                        "loggingEnabled": true,
                        "loggingPath": "x",
                        "loggingUseCustomStorageEnabled": true,
                        "pcapEnabled": true,
                        "pcapS3PathPrefix": "/pcaps",
                        "pcapUseCustomStorageEnabled": true,
                        "recordingEnabled": true,
                        "recordingFormat": "wav;l16",
                        "recordingPath": "x",
                        "recordingUseCustomStorageEnabled": true,
                        "scorecardIds": [],
                        "scorecards": [],
                        "structuredOutputIds": [],
                        "structuredOutputs": [],
                        "transcriptPlan": {},
                        "videoRecordingEnabled": false
                    },
                    "startSpeakingPlan": {
                        "customEndpointingRules": [],
                        "smartEndpointingEnabled": false,
                        "transcriptionEndpointingPlan": {},
                        "waitSeconds": 0.4
                    },
                    "stopSpeakingPlan": {
                        "acknowledgementPhrases": [
                            "i understand",
                            "i see",
                            "i got it"
                        ],
                        "backoffSeconds": 1,
                        "interruptionPhrases": [
                            "stop",
                            "shut",
                            "up"
                        ],
                        "numWords": 0,
                        "voiceSeconds": 0.2
                    },
                    "monitorPlan": {
                        "controlAuthenticationEnabled": false,
                        "controlEnabled": false,
                        "listenAuthenticationEnabled": false,
                        "listenEnabled": false,
                        "monitorIds": [
                            "123e4567-e89b-12d3-a456-426614174000"
                        ]
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    },
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    }
                },
                "workflowId": "x",
                "workflow": {
                    "nodes": [
                        {}
                    ],
                    "model": {
                        "messages": [],
                        "provider": "openai",
                        "model": "gpt-5.6-sol",
                        "temperature": 1,
                        "maxTokens": 1
                    },
                    "transcriber": {
                        "provider": "assembly-ai",
                        "language": "multi",
                        "confidenceThreshold": 0.4,
                        "formatTurns": true,
                        "endOfTurnConfidenceThreshold": 0.7,
                        "minEndOfTurnSilenceWhenConfident": 160,
                        "wordFinalizationMaxWaitTime": 160,
                        "maxTurnSilence": 400,
                        "vadAssistedEndpointingEnabled": true,
                        "mode": "max_accuracy",
                        "prompt": "x",
                        "agentContext": "x",
                        "agentContextAutoUpdateEnabled": true,
                        "languageCodes": [],
                        "speechModel": "universal-streaming-english",
                        "realtimeUrl": "x",
                        "wordBoost": [],
                        "keytermsPrompt": [],
                        "endUtteranceSilenceThreshold": 1,
                        "disablePartialTranscripts": true,
                        "fallbackPlan": {}
                    },
                    "voice": {
                        "cachingEnabled": true,
                        "provider": "azure",
                        "chunkPlan": {},
                        "speed": 1,
                        "fallbackPlan": {}
                    },
                    "observabilityPlan": {
                        "provider": "langfuse",
                        "promptName": "x",
                        "promptVersion": 1,
                        "traceName": "x",
                        "tags": [],
                        "metadata": {}
                    },
                    "backgroundSound": "office",
                    "hooks": [
                        {}
                    ],
                    "credentials": [
                        {}
                    ],
                    "voicemailDetection": "off",
                    "maxDurationSeconds": 600,
                    "name": "x",
                    "edges": [
                        {
                            "from": "x",
                            "to": "x",
                            "metadata": {}
                        }
                    ],
                    "globalPrompt": "x",
                    "server": {
                        "timeoutSeconds": 20,
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "staticIpAddressesEnabled": false,
                        "encryptedPaths": [],
                        "url": "x",
                        "headers": {},
                        "backoffPlan": {}
                    },
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "analysisPlan": {
                        "minMessagesThreshold": 1,
                        "summaryPlan": {},
                        "structuredDataPlan": {},
                        "structuredDataMultiPlan": [],
                        "successEvaluationPlan": {},
                        "outcomeIds": []
                    },
                    "artifactPlan": {
                        "recordingEnabled": true,
                        "recordingFormat": "wav;l16",
                        "recordingUseCustomStorageEnabled": true,
                        "videoRecordingEnabled": false,
                        "fullMessageHistoryEnabled": false,
                        "pcapEnabled": true,
                        "pcapS3PathPrefix": "/pcaps",
                        "pcapUseCustomStorageEnabled": true,
                        "loggingEnabled": true,
                        "loggingUseCustomStorageEnabled": true,
                        "transcriptPlan": {},
                        "recordingPath": "x",
                        "structuredOutputIds": [],
                        "structuredOutputs": [],
                        "scorecardIds": [],
                        "scorecards": [],
                        "loggingPath": "x"
                    },
                    "startSpeakingPlan": {
                        "waitSeconds": 0.4,
                        "smartEndpointingEnabled": false,
                        "customEndpointingRules": [],
                        "transcriptionEndpointingPlan": {}
                    },
                    "stopSpeakingPlan": {
                        "numWords": 0,
                        "voiceSeconds": 0.2,
                        "backoffSeconds": 1,
                        "acknowledgementPhrases": [
                            "i understand",
                            "i see",
                            "i got it"
                        ],
                        "interruptionPhrases": [
                            "stop",
                            "shut",
                            "up"
                        ]
                    },
                    "monitorPlan": {
                        "listenEnabled": false,
                        "listenAuthenticationEnabled": false,
                        "controlEnabled": false,
                        "controlAuthenticationEnabled": false,
                        "monitorIds": [
                            "123e4567-e89b-12d3-a456-426614174000"
                        ]
                    },
                    "backgroundSpeechDenoisingPlan": {
                        "smartDenoisingPlan": {},
                        "fourierDenoisingPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "keypadInputPlan": {
                        "enabled": true,
                        "timeoutSeconds": 1,
                        "delimiters": "#"
                    },
                    "voicemailMessage": "x"
                },
                "workflowOverrides": {
                    "variableValues": {}
                },
                "phoneNumberId": "x",
                "phoneNumber": {
                    "fallbackDestination": {
                        "callerId": "x",
                        "description": "x",
                        "extension": "x",
                        "name": "x",
                        "number": "x",
                        "numberE164CheckEnabled": true,
                        "transferPlan": {},
                        "type": "number"
                    },
                    "hooks": [
                        {}
                    ],
                    "smsEnabled": true,
                    "twilioPhoneNumber": "x",
                    "twilioAccountSid": "x",
                    "twilioAuthToken": "x",
                    "twilioApiKey": "x",
                    "twilioApiSecret": "x",
                    "name": "x",
                    "assistantId": "x",
                    "workflowId": "x",
                    "squadId": "x",
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    }
                },
                "customerId": "x",
                "customer": {
                    "numberE164CheckEnabled": true,
                    "extension": null,
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {},
                        "credentialIds": [],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {},
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voicemailMessage": "x"
                    },
                    "squadOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {},
                        "credentialIds": [],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {},
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voicemailMessage": "x"
                    },
                    "number": "x",
                    "sipUri": "x",
                    "name": "x",
                    "email": "x",
                    "externalId": "x"
                },
                "name": "x",
                "schedulePlan": {
                    "earliestAt": "2026-01-01T00:00:00Z",
                    "latestAt": "2026-01-01T00:00:00Z"
                }
            }
        ],
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "load",
        "method": "GET",
        "path": "/call/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "inboundPhoneCall",
            "costs": [
                {
                    "type": "transport",
                    "provider": "daily",
                    "minutes": 1,
                    "cost": 1
                }
            ],
            "messages": [
                {
                    "role": "x",
                    "message": "x",
                    "time": 1,
                    "endTime": 1,
                    "secondsFromStart": 1,
                    "duration": 1,
                    "isFiltered": true,
                    "detectedThreats": [
                        "x"
                    ],
                    "originalMessage": "x",
                    "metadata": {},
                    "speakerLabel": "x"
                }
            ],
            "phoneCallProvider": "twilio",
            "phoneCallTransport": "sip",
            "status": "scheduled",
            "endedReason": "call-start-error-neither-assistant-nor-server-set",
            "endedMessage": "x",
            "destination": {
                "message": "x",
                "type": "number",
                "numberE164CheckEnabled": true,
                "number": "x",
                "extension": "x",
                "callerId": "x",
                "transferPlan": {
                    "contextEngineeringPlan": {},
                    "dialTimeout": 1,
                    "fallbackPlan": {},
                    "holdAudioUrl": "x",
                    "message": "x",
                    "mode": "blind-transfer",
                    "sipHeadersInReferToEnabled": true,
                    "sipVerb": "refer",
                    "summaryPlan": {},
                    "timeout": 1,
                    "transferCompleteAudioUrl": "x",
                    "twiml": "x"
                },
                "name": "x",
                "description": "x"
            },
            "assistantVersion": "x",
            "squadVersion": "x",
            "transport": {
                "conversationType": "voice",
                "provider": "vapi.websocket",
                "audioFormat": {
                    "sampleRate": 1,
                    "format": "pcm_s16le",
                    "container": "raw"
                }
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "endedAt": "2026-01-01T00:00:00Z",
            "cost": 1,
            "costBreakdown": {
                "transport": 1,
                "stt": 1,
                "llm": 1,
                "tts": 1,
                "vapi": 1,
                "chat": 1,
                "total": 1,
                "llmPromptTokens": 1,
                "llmCompletionTokens": 1,
                "llmCachedPromptTokens": 1,
                "ttsCharacters": 1,
                "analysisCostBreakdown": {
                    "summary": 1,
                    "summaryPromptTokens": 1,
                    "summaryCompletionTokens": 1,
                    "summaryCachedPromptTokens": 1,
                    "structuredData": 1,
                    "structuredDataPromptTokens": 1,
                    "structuredDataCompletionTokens": 1,
                    "structuredDataCachedPromptTokens": 1,
                    "successEvaluation": 1,
                    "successEvaluationPromptTokens": 1,
                    "successEvaluationCompletionTokens": 1,
                    "successEvaluationCachedPromptTokens": 1,
                    "structuredOutput": 1,
                    "structuredOutputPromptTokens": 1,
                    "structuredOutputCompletionTokens": 1,
                    "structuredOutputCachedPromptTokens": 1
                }
            },
            "artifactPlan": {
                "recordingEnabled": true,
                "recordingFormat": "wav;l16",
                "recordingUseCustomStorageEnabled": true,
                "videoRecordingEnabled": false,
                "fullMessageHistoryEnabled": false,
                "pcapEnabled": true,
                "pcapS3PathPrefix": "/pcaps",
                "pcapUseCustomStorageEnabled": true,
                "loggingEnabled": true,
                "loggingUseCustomStorageEnabled": true,
                "transcriptPlan": {
                    "assistantName": "x",
                    "enabled": true,
                    "userName": "x"
                },
                "recordingPath": "x",
                "structuredOutputIds": [
                    "x"
                ],
                "structuredOutputs": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "description": "x",
                        "model": {},
                        "name": "x",
                        "regex": "x",
                        "schema": {},
                        "type": "ai",
                        "workflowIds": [
                            "x"
                        ]
                    }
                ],
                "scorecardIds": [
                    "x"
                ],
                "scorecards": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "description": "x",
                        "metrics": [
                            {}
                        ],
                        "name": "x"
                    }
                ],
                "loggingPath": "x"
            },
            "analysis": {
                "summary": "x",
                "structuredData": {},
                "structuredDataMulti": [
                    {}
                ],
                "successEvaluation": "x"
            },
            "monitor": {
                "monitors": [
                    {
                        "monitorId": "x",
                        "filterPassed": true
                    }
                ],
                "listenUrl": "x",
                "controlUrl": "x"
            },
            "artifact": {
                "messages": [
                    {
                        "detectedThreats": [],
                        "duration": 1,
                        "endTime": 1,
                        "isFiltered": true,
                        "message": "x",
                        "metadata": {},
                        "originalMessage": "x",
                        "role": "x",
                        "secondsFromStart": 1,
                        "speakerLabel": "x",
                        "time": 1
                    }
                ],
                "messagesOpenAIFormatted": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "skippedStructuredOutputs": {},
                "transfers": [
                    {
                        "destination": {},
                        "messages": [],
                        "mode": "blind-transfer",
                        "status": "connected",
                        "transcript": "x"
                    }
                ],
                "recordingUrl": "x",
                "stereoRecordingUrl": "x",
                "videoRecordingUrl": "x",
                "videoRecordingStartDelaySeconds": 1,
                "recording": {
                    "mono": {},
                    "stereoUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "videoUrl": "x"
                },
                "transcript": "x",
                "pcapUrl": "x",
                "logUrl": "x",
                "nodes": [
                    {
                        "messages": [],
                        "nodeName": "x",
                        "variableValues": {}
                    }
                ],
                "assistantActivations": [
                    {
                        "assistantId": "x",
                        "assistantName": "x",
                        "assistantVersion": "x",
                        "squadVersion": "x"
                    }
                ],
                "variableValues": {},
                "performanceMetrics": {
                    "endpointingLatencyAverage": 1,
                    "fromTransportLatencyAverage": 1,
                    "modelLatencyAverage": 1,
                    "numAssistantInterrupted": 1,
                    "numUserInterrupted": 1,
                    "toTransportLatencyAverage": 1,
                    "transcriberLatencyAverage": 1,
                    "turnLatencies": [
                        {}
                    ],
                    "turnLatencyAverage": 1,
                    "voiceLatencyAverage": 1
                },
                "structuredOutputs": {},
                "scorecards": {},
                "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                "presignedMonoUrl": "x",
                "presignedStereoUrl": "x",
                "presignedVideoUrl": "x",
                "presignedAssistantUrl": "x",
                "presignedCustomerUrl": "x",
                "presignedPcapUrl": "x",
                "presignedLogUrl": "x",
                "presignedUrlsExpiresAt": "x"
            },
            "compliance": {
                "recordingConsent": {
                    "type": "stay-on-line",
                    "grantedAt": "2026-01-01T00:00:00Z"
                }
            },
            "phoneCallProviderId": "x",
            "campaignId": "x",
            "assistantId": "x",
            "assistant": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "assistantOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "squadId": "x",
            "squad": {
                "name": "x",
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                }
            },
            "squadOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "workflowId": "x",
            "workflow": {
                "nodes": [
                    {
                        "type": "conversation",
                        "tools": [],
                        "toolIds": [],
                        "prompt": "x",
                        "globalNodePlan": {},
                        "variableExtractionPlan": {},
                        "name": "x",
                        "isStart": true,
                        "metadata": {}
                    }
                ],
                "model": {
                    "messages": [
                        {}
                    ],
                    "provider": "openai",
                    "model": "gpt-5.6-sol",
                    "temperature": 1,
                    "maxTokens": 1
                },
                "transcriber": {
                    "provider": "assembly-ai",
                    "language": "multi",
                    "confidenceThreshold": 0.4,
                    "formatTurns": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "wordFinalizationMaxWaitTime": 160,
                    "maxTurnSilence": 400,
                    "vadAssistedEndpointingEnabled": true,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "languageCodes": [
                        "en"
                    ],
                    "speechModel": "universal-streaming-english",
                    "realtimeUrl": "x",
                    "wordBoost": [
                        "x"
                    ],
                    "keytermsPrompt": [
                        "x"
                    ],
                    "endUtteranceSilenceThreshold": 1,
                    "disablePartialTranscripts": true,
                    "fallbackPlan": {}
                },
                "voice": {
                    "cachingEnabled": true,
                    "provider": "azure",
                    "voiceId": "andrew",
                    "chunkPlan": {},
                    "speed": 1,
                    "fallbackPlan": {}
                },
                "observabilityPlan": {
                    "provider": "langfuse",
                    "promptName": "x",
                    "promptVersion": 1,
                    "traceName": "x",
                    "tags": [
                        "x"
                    ],
                    "metadata": {}
                },
                "backgroundSound": "office",
                "hooks": [
                    {
                        "on": "call.ending",
                        "do": [],
                        "filters": []
                    }
                ],
                "credentials": [
                    {
                        "provider": "anthropic",
                        "apiKey": "x",
                        "name": "x"
                    }
                ],
                "voicemailDetection": "off",
                "maxDurationSeconds": 600,
                "name": "x",
                "edges": [
                    {
                        "condition": {},
                        "from": "x",
                        "to": "x",
                        "metadata": {}
                    }
                ],
                "globalPrompt": "x",
                "server": {
                    "timeoutSeconds": 20,
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "staticIpAddressesEnabled": false,
                    "encryptedPaths": [
                        "x"
                    ],
                    "url": "x",
                    "headers": {},
                    "backoffPlan": {}
                },
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "securityFilterPlan": {},
                    "recordingConsentPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "summaryPlan": {},
                    "structuredDataPlan": {},
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "successEvaluationPlan": {},
                    "outcomeIds": [
                        "x"
                    ]
                },
                "artifactPlan": {
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingUseCustomStorageEnabled": true,
                    "videoRecordingEnabled": false,
                    "fullMessageHistoryEnabled": false,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "loggingEnabled": true,
                    "loggingUseCustomStorageEnabled": true,
                    "transcriptPlan": {},
                    "recordingPath": "x",
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "loggingPath": "x"
                },
                "startSpeakingPlan": {
                    "waitSeconds": 0.4,
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "customEndpointingRules": [],
                    "transcriptionEndpointingPlan": {}
                },
                "stopSpeakingPlan": {
                    "numWords": 0,
                    "voiceSeconds": 0.2,
                    "backoffSeconds": 1,
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ]
                },
                "monitorPlan": {
                    "listenEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "controlAuthenticationEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "backgroundSpeechDenoisingPlan": {
                    "smartDenoisingPlan": {},
                    "fourierDenoisingPlan": {}
                },
                "credentialIds": [
                    "x"
                ],
                "keypadInputPlan": {
                    "enabled": true,
                    "timeoutSeconds": 1,
                    "delimiters": "#"
                },
                "voicemailMessage": "x"
            },
            "workflowOverrides": {
                "variableValues": {}
            },
            "phoneNumberId": "x",
            "phoneNumber": {
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "message": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ringing"
                    }
                ],
                "smsEnabled": true,
                "twilioPhoneNumber": "x",
                "twilioAccountSid": "x",
                "twilioAuthToken": "x",
                "twilioApiKey": "x",
                "twilioApiSecret": "x",
                "name": "x",
                "assistantId": "x",
                "workflowId": "x",
                "squadId": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                }
            },
            "customerId": "x",
            "customer": {
                "numberE164CheckEnabled": true,
                "extension": null,
                "assistantOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "squadOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "number": "x",
                "sipUri": "x",
                "name": "x",
                "email": "x",
                "externalId": "x"
            },
            "name": "x",
            "schedulePlan": {
                "earliestAt": "2026-01-01T00:00:00Z",
                "latestAt": "2026-01-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "load",
        "method": "GET",
        "path": "/call/{id}/assistant-recording",
        "action": "assistant_recording",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "load",
        "method": "GET",
        "path": "/call/{id}/call-logs",
        "action": "call_log",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "load",
        "method": "GET",
        "path": "/call/{id}/customer-recording",
        "action": "customer_recording",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "load",
        "method": "GET",
        "path": "/call/{id}/mono-recording",
        "action": "mono_recording",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "load",
        "method": "GET",
        "path": "/call/{id}/pcap",
        "action": "pcap",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "load",
        "method": "GET",
        "path": "/call/{id}/stereo-recording",
        "action": "stereo_recording",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "load",
        "method": "GET",
        "path": "/call/{id}/video-recording",
        "action": "video_recording",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "remove",
        "method": "DELETE",
        "path": "/call/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "inboundPhoneCall",
            "costs": [
                {
                    "type": "transport",
                    "provider": "daily",
                    "minutes": 1,
                    "cost": 1
                }
            ],
            "messages": [
                {
                    "role": "x",
                    "message": "x",
                    "time": 1,
                    "endTime": 1,
                    "secondsFromStart": 1,
                    "duration": 1,
                    "isFiltered": true,
                    "detectedThreats": [
                        "x"
                    ],
                    "originalMessage": "x",
                    "metadata": {},
                    "speakerLabel": "x"
                }
            ],
            "phoneCallProvider": "twilio",
            "phoneCallTransport": "sip",
            "status": "scheduled",
            "endedReason": "call-start-error-neither-assistant-nor-server-set",
            "endedMessage": "x",
            "destination": {
                "message": "x",
                "type": "number",
                "numberE164CheckEnabled": true,
                "number": "x",
                "extension": "x",
                "callerId": "x",
                "transferPlan": {
                    "contextEngineeringPlan": {},
                    "dialTimeout": 1,
                    "fallbackPlan": {},
                    "holdAudioUrl": "x",
                    "message": "x",
                    "mode": "blind-transfer",
                    "sipHeadersInReferToEnabled": true,
                    "sipVerb": "refer",
                    "summaryPlan": {},
                    "timeout": 1,
                    "transferCompleteAudioUrl": "x",
                    "twiml": "x"
                },
                "name": "x",
                "description": "x"
            },
            "assistantVersion": "x",
            "squadVersion": "x",
            "transport": {
                "conversationType": "voice",
                "provider": "vapi.websocket",
                "audioFormat": {
                    "sampleRate": 1,
                    "format": "pcm_s16le",
                    "container": "raw"
                }
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "endedAt": "2026-01-01T00:00:00Z",
            "cost": 1,
            "costBreakdown": {
                "transport": 1,
                "stt": 1,
                "llm": 1,
                "tts": 1,
                "vapi": 1,
                "chat": 1,
                "total": 1,
                "llmPromptTokens": 1,
                "llmCompletionTokens": 1,
                "llmCachedPromptTokens": 1,
                "ttsCharacters": 1,
                "analysisCostBreakdown": {
                    "summary": 1,
                    "summaryPromptTokens": 1,
                    "summaryCompletionTokens": 1,
                    "summaryCachedPromptTokens": 1,
                    "structuredData": 1,
                    "structuredDataPromptTokens": 1,
                    "structuredDataCompletionTokens": 1,
                    "structuredDataCachedPromptTokens": 1,
                    "successEvaluation": 1,
                    "successEvaluationPromptTokens": 1,
                    "successEvaluationCompletionTokens": 1,
                    "successEvaluationCachedPromptTokens": 1,
                    "structuredOutput": 1,
                    "structuredOutputPromptTokens": 1,
                    "structuredOutputCompletionTokens": 1,
                    "structuredOutputCachedPromptTokens": 1
                }
            },
            "artifactPlan": {
                "recordingEnabled": true,
                "recordingFormat": "wav;l16",
                "recordingUseCustomStorageEnabled": true,
                "videoRecordingEnabled": false,
                "fullMessageHistoryEnabled": false,
                "pcapEnabled": true,
                "pcapS3PathPrefix": "/pcaps",
                "pcapUseCustomStorageEnabled": true,
                "loggingEnabled": true,
                "loggingUseCustomStorageEnabled": true,
                "transcriptPlan": {
                    "assistantName": "x",
                    "enabled": true,
                    "userName": "x"
                },
                "recordingPath": "x",
                "structuredOutputIds": [
                    "x"
                ],
                "structuredOutputs": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "description": "x",
                        "model": {},
                        "name": "x",
                        "regex": "x",
                        "schema": {},
                        "type": "ai",
                        "workflowIds": [
                            "x"
                        ]
                    }
                ],
                "scorecardIds": [
                    "x"
                ],
                "scorecards": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "description": "x",
                        "metrics": [
                            {}
                        ],
                        "name": "x"
                    }
                ],
                "loggingPath": "x"
            },
            "analysis": {
                "summary": "x",
                "structuredData": {},
                "structuredDataMulti": [
                    {}
                ],
                "successEvaluation": "x"
            },
            "monitor": {
                "monitors": [
                    {
                        "monitorId": "x",
                        "filterPassed": true
                    }
                ],
                "listenUrl": "x",
                "controlUrl": "x"
            },
            "artifact": {
                "messages": [
                    {
                        "detectedThreats": [],
                        "duration": 1,
                        "endTime": 1,
                        "isFiltered": true,
                        "message": "x",
                        "metadata": {},
                        "originalMessage": "x",
                        "role": "x",
                        "secondsFromStart": 1,
                        "speakerLabel": "x",
                        "time": 1
                    }
                ],
                "messagesOpenAIFormatted": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "skippedStructuredOutputs": {},
                "transfers": [
                    {
                        "destination": {},
                        "messages": [],
                        "mode": "blind-transfer",
                        "status": "connected",
                        "transcript": "x"
                    }
                ],
                "recordingUrl": "x",
                "stereoRecordingUrl": "x",
                "videoRecordingUrl": "x",
                "videoRecordingStartDelaySeconds": 1,
                "recording": {
                    "mono": {},
                    "stereoUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "videoUrl": "x"
                },
                "transcript": "x",
                "pcapUrl": "x",
                "logUrl": "x",
                "nodes": [
                    {
                        "messages": [],
                        "nodeName": "x",
                        "variableValues": {}
                    }
                ],
                "assistantActivations": [
                    {
                        "assistantId": "x",
                        "assistantName": "x",
                        "assistantVersion": "x",
                        "squadVersion": "x"
                    }
                ],
                "variableValues": {},
                "performanceMetrics": {
                    "endpointingLatencyAverage": 1,
                    "fromTransportLatencyAverage": 1,
                    "modelLatencyAverage": 1,
                    "numAssistantInterrupted": 1,
                    "numUserInterrupted": 1,
                    "toTransportLatencyAverage": 1,
                    "transcriberLatencyAverage": 1,
                    "turnLatencies": [
                        {}
                    ],
                    "turnLatencyAverage": 1,
                    "voiceLatencyAverage": 1
                },
                "structuredOutputs": {},
                "scorecards": {},
                "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                "presignedMonoUrl": "x",
                "presignedStereoUrl": "x",
                "presignedVideoUrl": "x",
                "presignedAssistantUrl": "x",
                "presignedCustomerUrl": "x",
                "presignedPcapUrl": "x",
                "presignedLogUrl": "x",
                "presignedUrlsExpiresAt": "x"
            },
            "compliance": {
                "recordingConsent": {
                    "type": "stay-on-line",
                    "grantedAt": "2026-01-01T00:00:00Z"
                }
            },
            "phoneCallProviderId": "x",
            "campaignId": "x",
            "assistantId": "x",
            "assistant": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "assistantOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "squadId": "x",
            "squad": {
                "name": "x",
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                }
            },
            "squadOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "workflowId": "x",
            "workflow": {
                "nodes": [
                    {
                        "type": "conversation",
                        "tools": [],
                        "toolIds": [],
                        "prompt": "x",
                        "globalNodePlan": {},
                        "variableExtractionPlan": {},
                        "name": "x",
                        "isStart": true,
                        "metadata": {}
                    }
                ],
                "model": {
                    "messages": [
                        {}
                    ],
                    "provider": "openai",
                    "model": "gpt-5.6-sol",
                    "temperature": 1,
                    "maxTokens": 1
                },
                "transcriber": {
                    "provider": "assembly-ai",
                    "language": "multi",
                    "confidenceThreshold": 0.4,
                    "formatTurns": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "wordFinalizationMaxWaitTime": 160,
                    "maxTurnSilence": 400,
                    "vadAssistedEndpointingEnabled": true,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "languageCodes": [
                        "en"
                    ],
                    "speechModel": "universal-streaming-english",
                    "realtimeUrl": "x",
                    "wordBoost": [
                        "x"
                    ],
                    "keytermsPrompt": [
                        "x"
                    ],
                    "endUtteranceSilenceThreshold": 1,
                    "disablePartialTranscripts": true,
                    "fallbackPlan": {}
                },
                "voice": {
                    "cachingEnabled": true,
                    "provider": "azure",
                    "voiceId": "andrew",
                    "chunkPlan": {},
                    "speed": 1,
                    "fallbackPlan": {}
                },
                "observabilityPlan": {
                    "provider": "langfuse",
                    "promptName": "x",
                    "promptVersion": 1,
                    "traceName": "x",
                    "tags": [
                        "x"
                    ],
                    "metadata": {}
                },
                "backgroundSound": "office",
                "hooks": [
                    {
                        "on": "call.ending",
                        "do": [],
                        "filters": []
                    }
                ],
                "credentials": [
                    {
                        "provider": "anthropic",
                        "apiKey": "x",
                        "name": "x"
                    }
                ],
                "voicemailDetection": "off",
                "maxDurationSeconds": 600,
                "name": "x",
                "edges": [
                    {
                        "condition": {},
                        "from": "x",
                        "to": "x",
                        "metadata": {}
                    }
                ],
                "globalPrompt": "x",
                "server": {
                    "timeoutSeconds": 20,
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "staticIpAddressesEnabled": false,
                    "encryptedPaths": [
                        "x"
                    ],
                    "url": "x",
                    "headers": {},
                    "backoffPlan": {}
                },
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "securityFilterPlan": {},
                    "recordingConsentPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "summaryPlan": {},
                    "structuredDataPlan": {},
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "successEvaluationPlan": {},
                    "outcomeIds": [
                        "x"
                    ]
                },
                "artifactPlan": {
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingUseCustomStorageEnabled": true,
                    "videoRecordingEnabled": false,
                    "fullMessageHistoryEnabled": false,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "loggingEnabled": true,
                    "loggingUseCustomStorageEnabled": true,
                    "transcriptPlan": {},
                    "recordingPath": "x",
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "loggingPath": "x"
                },
                "startSpeakingPlan": {
                    "waitSeconds": 0.4,
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "customEndpointingRules": [],
                    "transcriptionEndpointingPlan": {}
                },
                "stopSpeakingPlan": {
                    "numWords": 0,
                    "voiceSeconds": 0.2,
                    "backoffSeconds": 1,
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ]
                },
                "monitorPlan": {
                    "listenEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "controlAuthenticationEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "backgroundSpeechDenoisingPlan": {
                    "smartDenoisingPlan": {},
                    "fourierDenoisingPlan": {}
                },
                "credentialIds": [
                    "x"
                ],
                "keypadInputPlan": {
                    "enabled": true,
                    "timeoutSeconds": 1,
                    "delimiters": "#"
                },
                "voicemailMessage": "x"
            },
            "workflowOverrides": {
                "variableValues": {}
            },
            "phoneNumberId": "x",
            "phoneNumber": {
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "message": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ringing"
                    }
                ],
                "smsEnabled": true,
                "twilioPhoneNumber": "x",
                "twilioAccountSid": "x",
                "twilioAuthToken": "x",
                "twilioApiKey": "x",
                "twilioApiSecret": "x",
                "name": "x",
                "assistantId": "x",
                "workflowId": "x",
                "squadId": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                }
            },
            "customerId": "x",
            "customer": {
                "numberE164CheckEnabled": true,
                "extension": null,
                "assistantOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "squadOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "number": "x",
                "sipUri": "x",
                "name": "x",
                "email": "x",
                "externalId": "x"
            },
            "name": "x",
            "schedulePlan": {
                "earliestAt": "2026-01-01T00:00:00Z",
                "latestAt": "2026-01-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "call",
        "accessor": "Call",
        "op": "update",
        "method": "PATCH",
        "path": "/call/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "inboundPhoneCall",
            "costs": [
                {
                    "type": "transport",
                    "provider": "daily",
                    "minutes": 1,
                    "cost": 1
                }
            ],
            "messages": [
                {
                    "role": "x",
                    "message": "x",
                    "time": 1,
                    "endTime": 1,
                    "secondsFromStart": 1,
                    "duration": 1,
                    "isFiltered": true,
                    "detectedThreats": [
                        "x"
                    ],
                    "originalMessage": "x",
                    "metadata": {},
                    "speakerLabel": "x"
                }
            ],
            "phoneCallProvider": "twilio",
            "phoneCallTransport": "sip",
            "status": "scheduled",
            "endedReason": "call-start-error-neither-assistant-nor-server-set",
            "endedMessage": "x",
            "destination": {
                "message": "x",
                "type": "number",
                "numberE164CheckEnabled": true,
                "number": "x",
                "extension": "x",
                "callerId": "x",
                "transferPlan": {
                    "contextEngineeringPlan": {},
                    "dialTimeout": 1,
                    "fallbackPlan": {},
                    "holdAudioUrl": "x",
                    "message": "x",
                    "mode": "blind-transfer",
                    "sipHeadersInReferToEnabled": true,
                    "sipVerb": "refer",
                    "summaryPlan": {},
                    "timeout": 1,
                    "transferCompleteAudioUrl": "x",
                    "twiml": "x"
                },
                "name": "x",
                "description": "x"
            },
            "assistantVersion": "x",
            "squadVersion": "x",
            "transport": {
                "conversationType": "voice",
                "provider": "vapi.websocket",
                "audioFormat": {
                    "sampleRate": 1,
                    "format": "pcm_s16le",
                    "container": "raw"
                }
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "endedAt": "2026-01-01T00:00:00Z",
            "cost": 1,
            "costBreakdown": {
                "transport": 1,
                "stt": 1,
                "llm": 1,
                "tts": 1,
                "vapi": 1,
                "chat": 1,
                "total": 1,
                "llmPromptTokens": 1,
                "llmCompletionTokens": 1,
                "llmCachedPromptTokens": 1,
                "ttsCharacters": 1,
                "analysisCostBreakdown": {
                    "summary": 1,
                    "summaryPromptTokens": 1,
                    "summaryCompletionTokens": 1,
                    "summaryCachedPromptTokens": 1,
                    "structuredData": 1,
                    "structuredDataPromptTokens": 1,
                    "structuredDataCompletionTokens": 1,
                    "structuredDataCachedPromptTokens": 1,
                    "successEvaluation": 1,
                    "successEvaluationPromptTokens": 1,
                    "successEvaluationCompletionTokens": 1,
                    "successEvaluationCachedPromptTokens": 1,
                    "structuredOutput": 1,
                    "structuredOutputPromptTokens": 1,
                    "structuredOutputCompletionTokens": 1,
                    "structuredOutputCachedPromptTokens": 1
                }
            },
            "artifactPlan": {
                "recordingEnabled": true,
                "recordingFormat": "wav;l16",
                "recordingUseCustomStorageEnabled": true,
                "videoRecordingEnabled": false,
                "fullMessageHistoryEnabled": false,
                "pcapEnabled": true,
                "pcapS3PathPrefix": "/pcaps",
                "pcapUseCustomStorageEnabled": true,
                "loggingEnabled": true,
                "loggingUseCustomStorageEnabled": true,
                "transcriptPlan": {
                    "assistantName": "x",
                    "enabled": true,
                    "userName": "x"
                },
                "recordingPath": "x",
                "structuredOutputIds": [
                    "x"
                ],
                "structuredOutputs": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "description": "x",
                        "model": {},
                        "name": "x",
                        "regex": "x",
                        "schema": {},
                        "type": "ai",
                        "workflowIds": [
                            "x"
                        ]
                    }
                ],
                "scorecardIds": [
                    "x"
                ],
                "scorecards": [
                    {
                        "assistantIds": [
                            "x"
                        ],
                        "description": "x",
                        "metrics": [
                            {}
                        ],
                        "name": "x"
                    }
                ],
                "loggingPath": "x"
            },
            "analysis": {
                "summary": "x",
                "structuredData": {},
                "structuredDataMulti": [
                    {}
                ],
                "successEvaluation": "x"
            },
            "monitor": {
                "monitors": [
                    {
                        "monitorId": "x",
                        "filterPassed": true
                    }
                ],
                "listenUrl": "x",
                "controlUrl": "x"
            },
            "artifact": {
                "messages": [
                    {
                        "detectedThreats": [],
                        "duration": 1,
                        "endTime": 1,
                        "isFiltered": true,
                        "message": "x",
                        "metadata": {},
                        "originalMessage": "x",
                        "role": "x",
                        "secondsFromStart": 1,
                        "speakerLabel": "x",
                        "time": 1
                    }
                ],
                "messagesOpenAIFormatted": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "skippedStructuredOutputs": {},
                "transfers": [
                    {
                        "destination": {},
                        "messages": [],
                        "mode": "blind-transfer",
                        "status": "connected",
                        "transcript": "x"
                    }
                ],
                "recordingUrl": "x",
                "stereoRecordingUrl": "x",
                "videoRecordingUrl": "x",
                "videoRecordingStartDelaySeconds": 1,
                "recording": {
                    "mono": {},
                    "stereoUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "videoUrl": "x"
                },
                "transcript": "x",
                "pcapUrl": "x",
                "logUrl": "x",
                "nodes": [
                    {
                        "messages": [],
                        "nodeName": "x",
                        "variableValues": {}
                    }
                ],
                "assistantActivations": [
                    {
                        "assistantId": "x",
                        "assistantName": "x",
                        "assistantVersion": "x",
                        "squadVersion": "x"
                    }
                ],
                "variableValues": {},
                "performanceMetrics": {
                    "endpointingLatencyAverage": 1,
                    "fromTransportLatencyAverage": 1,
                    "modelLatencyAverage": 1,
                    "numAssistantInterrupted": 1,
                    "numUserInterrupted": 1,
                    "toTransportLatencyAverage": 1,
                    "transcriberLatencyAverage": 1,
                    "turnLatencies": [
                        {}
                    ],
                    "turnLatencyAverage": 1,
                    "voiceLatencyAverage": 1
                },
                "structuredOutputs": {},
                "scorecards": {},
                "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                "presignedMonoUrl": "x",
                "presignedStereoUrl": "x",
                "presignedVideoUrl": "x",
                "presignedAssistantUrl": "x",
                "presignedCustomerUrl": "x",
                "presignedPcapUrl": "x",
                "presignedLogUrl": "x",
                "presignedUrlsExpiresAt": "x"
            },
            "compliance": {
                "recordingConsent": {
                    "type": "stay-on-line",
                    "grantedAt": "2026-01-01T00:00:00Z"
                }
            },
            "phoneCallProviderId": "x",
            "campaignId": "x",
            "assistantId": "x",
            "assistant": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "assistantOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "squadId": "x",
            "squad": {
                "name": "x",
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                }
            },
            "squadOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "workflowId": "x",
            "workflow": {
                "nodes": [
                    {
                        "type": "conversation",
                        "tools": [],
                        "toolIds": [],
                        "prompt": "x",
                        "globalNodePlan": {},
                        "variableExtractionPlan": {},
                        "name": "x",
                        "isStart": true,
                        "metadata": {}
                    }
                ],
                "model": {
                    "messages": [
                        {}
                    ],
                    "provider": "openai",
                    "model": "gpt-5.6-sol",
                    "temperature": 1,
                    "maxTokens": 1
                },
                "transcriber": {
                    "provider": "assembly-ai",
                    "language": "multi",
                    "confidenceThreshold": 0.4,
                    "formatTurns": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "wordFinalizationMaxWaitTime": 160,
                    "maxTurnSilence": 400,
                    "vadAssistedEndpointingEnabled": true,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "languageCodes": [
                        "en"
                    ],
                    "speechModel": "universal-streaming-english",
                    "realtimeUrl": "x",
                    "wordBoost": [
                        "x"
                    ],
                    "keytermsPrompt": [
                        "x"
                    ],
                    "endUtteranceSilenceThreshold": 1,
                    "disablePartialTranscripts": true,
                    "fallbackPlan": {}
                },
                "voice": {
                    "cachingEnabled": true,
                    "provider": "azure",
                    "voiceId": "andrew",
                    "chunkPlan": {},
                    "speed": 1,
                    "fallbackPlan": {}
                },
                "observabilityPlan": {
                    "provider": "langfuse",
                    "promptName": "x",
                    "promptVersion": 1,
                    "traceName": "x",
                    "tags": [
                        "x"
                    ],
                    "metadata": {}
                },
                "backgroundSound": "office",
                "hooks": [
                    {
                        "on": "call.ending",
                        "do": [],
                        "filters": []
                    }
                ],
                "credentials": [
                    {
                        "provider": "anthropic",
                        "apiKey": "x",
                        "name": "x"
                    }
                ],
                "voicemailDetection": "off",
                "maxDurationSeconds": 600,
                "name": "x",
                "edges": [
                    {
                        "condition": {},
                        "from": "x",
                        "to": "x",
                        "metadata": {}
                    }
                ],
                "globalPrompt": "x",
                "server": {
                    "timeoutSeconds": 20,
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "staticIpAddressesEnabled": false,
                    "encryptedPaths": [
                        "x"
                    ],
                    "url": "x",
                    "headers": {},
                    "backoffPlan": {}
                },
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "securityFilterPlan": {},
                    "recordingConsentPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "summaryPlan": {},
                    "structuredDataPlan": {},
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "successEvaluationPlan": {},
                    "outcomeIds": [
                        "x"
                    ]
                },
                "artifactPlan": {
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingUseCustomStorageEnabled": true,
                    "videoRecordingEnabled": false,
                    "fullMessageHistoryEnabled": false,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "loggingEnabled": true,
                    "loggingUseCustomStorageEnabled": true,
                    "transcriptPlan": {},
                    "recordingPath": "x",
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "loggingPath": "x"
                },
                "startSpeakingPlan": {
                    "waitSeconds": 0.4,
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "customEndpointingRules": [],
                    "transcriptionEndpointingPlan": {}
                },
                "stopSpeakingPlan": {
                    "numWords": 0,
                    "voiceSeconds": 0.2,
                    "backoffSeconds": 1,
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ]
                },
                "monitorPlan": {
                    "listenEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "controlAuthenticationEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "backgroundSpeechDenoisingPlan": {
                    "smartDenoisingPlan": {},
                    "fourierDenoisingPlan": {}
                },
                "credentialIds": [
                    "x"
                ],
                "keypadInputPlan": {
                    "enabled": true,
                    "timeoutSeconds": 1,
                    "delimiters": "#"
                },
                "voicemailMessage": "x"
            },
            "workflowOverrides": {
                "variableValues": {}
            },
            "phoneNumberId": "x",
            "phoneNumber": {
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "message": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ringing"
                    }
                ],
                "smsEnabled": true,
                "twilioPhoneNumber": "x",
                "twilioAccountSid": "x",
                "twilioAuthToken": "x",
                "twilioApiKey": "x",
                "twilioApiSecret": "x",
                "name": "x",
                "assistantId": "x",
                "workflowId": "x",
                "squadId": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                }
            },
            "customerId": "x",
            "customer": {
                "numberE164CheckEnabled": true,
                "extension": null,
                "assistantOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "squadOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "number": "x",
                "sipUri": "x",
                "name": "x",
                "email": "x",
                "externalId": "x"
            },
            "name": "x",
            "schedulePlan": {
                "earliestAt": "2026-01-01T00:00:00Z",
                "latestAt": "2026-01-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "campaign",
        "accessor": "Campaign",
        "op": "list",
        "method": "GET",
        "path": "/v2/campaign",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "include_counter": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "status": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "status",
            "includeCounters",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "assistantId": "x",
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "callMetrics": {
                        "connected": 1,
                        "dialed": 1
                    },
                    "contactCounters": {
                        "completed": 1,
                        "dispatched": 1,
                        "failed": 1,
                        "pending": 1,
                        "predialFailed": 1,
                        "skipped": 1
                    },
                    "createdAt": "2026-01-01T00:00:00Z",
                    "endedReason": "campaign.scheduled.ended-by-user",
                    "id": "x",
                    "maxConcurrency": 1,
                    "name": "Q2 Sales Campaign",
                    "orgId": "x",
                    "phoneNumberId": "x",
                    "predialPlan": {
                        "enabled": true
                    },
                    "schedulePlan": {
                        "earliestAt": "2026-01-01T00:00:00Z",
                        "latestAt": "2026-01-01T00:00:00Z"
                    },
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [
                            "x"
                        ],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    },
                    "serverMessages": [
                        "campaign.started",
                        "contact.dispatched"
                    ],
                    "squadId": "x",
                    "squadOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "status": "scheduled",
                    "updatedAt": "2026-01-01T00:00:00Z"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "campaign",
        "accessor": "Campaign",
        "op": "list",
        "method": "GET",
        "path": "/campaign",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "status": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "status",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "assistantId": "x",
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "calls": {},
                    "callsCounterEnded": 1,
                    "callsCounterEndedVoicemail": 1,
                    "callsCounterInProgress": 1,
                    "callsCounterQueued": 1,
                    "callsCounterScheduled": 1,
                    "createdAt": "2026-01-01T00:00:00Z",
                    "customers": [
                        {
                            "assistantOverrides": {},
                            "email": "x",
                            "extension": null,
                            "externalId": "x",
                            "name": "x",
                            "number": "x",
                            "numberE164CheckEnabled": true,
                            "sipUri": "x",
                            "squadOverrides": {}
                        }
                    ],
                    "dialPlan": [
                        {
                            "customers": [
                                {}
                            ],
                            "phoneNumberId": "x"
                        }
                    ],
                    "endedReason": "campaign.scheduled.ended-by-user",
                    "id": "x",
                    "maxConcurrency": 1,
                    "name": "Q2 Sales Campaign",
                    "orgId": "x",
                    "phoneNumberId": "x",
                    "predialPlan": {
                        "enabled": true
                    },
                    "schedulePlan": {
                        "earliestAt": "2026-01-01T00:00:00Z",
                        "latestAt": "2026-01-01T00:00:00Z"
                    },
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [
                            "x"
                        ],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    },
                    "serverMessages": [
                        "campaign.started",
                        "contact.dispatched"
                    ],
                    "squadId": "x",
                    "squadOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "status": "scheduled",
                    "updatedAt": "2026-01-01T00:00:00Z",
                    "workflowId": "x"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "campaign",
        "accessor": "Campaign",
        "op": "list",
        "method": "GET",
        "path": "/v2/campaign/{id}/contacts",
        "action": "contact",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "status": "v1"
        },
        "headers": [],
        "query": [
            "status",
            "limit",
            "sortBy",
            "page"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "callId": "x",
                    "dispatchedAt": "2026-01-01T00:00:00Z",
                    "endedReason": "x",
                    "id": "x",
                    "name": "x",
                    "number": "x",
                    "status": "contact.pending"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "campaign",
        "accessor": "Campaign",
        "op": "load",
        "method": "GET",
        "path": "/v2/campaign/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "include_counter": "v1"
        },
        "headers": [],
        "query": [
            "includeCounters"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "status": "scheduled",
            "endedReason": "campaign.scheduled.ended-by-user",
            "name": "Q2 Sales Campaign",
            "assistantId": "x",
            "squadId": "x",
            "phoneNumberId": "x",
            "schedulePlan": {
                "earliestAt": "2026-01-01T00:00:00Z",
                "latestAt": "2026-01-01T00:00:00Z"
            },
            "maxConcurrency": 1,
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "server": {
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                },
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "encryptedPaths": [
                    "x"
                ],
                "headers": {},
                "staticIpAddressesEnabled": false,
                "timeoutSeconds": 20,
                "url": "x"
            },
            "serverMessages": [
                "campaign.started",
                "contact.dispatched"
            ],
            "predialPlan": {
                "enabled": true
            },
            "contactCounters": {
                "completed": 1,
                "dispatched": 1,
                "failed": 1,
                "pending": 1,
                "predialFailed": 1,
                "skipped": 1
            },
            "callMetrics": {
                "connected": 1,
                "dialed": 1
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "campaign",
        "accessor": "Campaign",
        "op": "load",
        "method": "GET",
        "path": "/campaign/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "status": "scheduled",
            "endedReason": "campaign.scheduled.ended-by-user",
            "name": "Q2 Sales Campaign",
            "assistantId": "x",
            "workflowId": "x",
            "squadId": "x",
            "phoneNumberId": "x",
            "dialPlan": [
                {
                    "customers": [
                        {
                            "assistantOverrides": {},
                            "email": "x",
                            "extension": null,
                            "externalId": "x",
                            "name": "x",
                            "number": "x",
                            "numberE164CheckEnabled": true,
                            "sipUri": "x",
                            "squadOverrides": {}
                        }
                    ],
                    "phoneNumberId": "x"
                }
            ],
            "schedulePlan": {
                "earliestAt": "2026-01-01T00:00:00Z",
                "latestAt": "2026-01-01T00:00:00Z"
            },
            "customers": [
                {
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "email": "x",
                    "extension": null,
                    "externalId": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "sipUri": "x",
                    "squadOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    }
                }
            ],
            "maxConcurrency": 1,
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "server": {
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                },
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "encryptedPaths": [
                    "x"
                ],
                "headers": {},
                "staticIpAddressesEnabled": false,
                "timeoutSeconds": 20,
                "url": "x"
            },
            "serverMessages": [
                "campaign.started",
                "contact.dispatched"
            ],
            "predialPlan": {
                "enabled": true
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "calls": {},
            "callsCounterScheduled": 1,
            "callsCounterQueued": 1,
            "callsCounterInProgress": 1,
            "callsCounterEndedVoicemail": 1,
            "callsCounterEnded": 1
        },
        "idField": "id"
    },
    {
        "entity": "chat",
        "accessor": "Chat",
        "op": "create",
        "method": "POST",
        "path": "/chat",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "assistantId": "x",
            "assistant": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [],
                    "structuredDataMultiPlan": [],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [],
                    "scorecards": [],
                    "structuredOutputIds": [],
                    "structuredOutputs": [],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {},
                    "securityFilterPlan": {}
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {}
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {}
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {
                    "emotionRecognitionEnabled": true,
                    "maxTokens": 1,
                    "messages": [],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [],
                    "toolRefs": [],
                    "tools": []
                },
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [],
                    "language": "multi",
                    "languageCodes": [],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {}
                ],
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [],
                    "structuredDataMultiPlan": [],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [],
                    "scorecards": [],
                    "structuredOutputIds": [],
                    "structuredOutputs": [],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {},
                    "securityFilterPlan": {}
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {}
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {}
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {}
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [],
                    "language": "multi",
                    "languageCodes": [],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {}
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadId": "x",
            "squad": {
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {},
                    "credentialIds": [],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {},
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voicemailMessage": "x"
                },
                "name": "x"
            },
            "name": "x",
            "sessionId": "x",
            "input": "x",
            "stream": true,
            "previousChatId": "x",
            "id": "x",
            "orgId": "x",
            "messages": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "output": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "costs": [
                {
                    "cachedPromptTokens": 1,
                    "completionTokens": 1,
                    "cost": 1,
                    "model": {},
                    "promptTokens": 1,
                    "reasoningTokens": 1,
                    "seconds": 1,
                    "type": "model",
                    "usageComplete": true
                }
            ],
            "cost": 1
        },
        "idField": "id"
    },
    {
        "entity": "chat",
        "accessor": "Chat",
        "op": "create",
        "method": "POST",
        "path": "/chat/responses",
        "action": "response",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "object": "response",
            "created_at": 1,
            "status": "completed",
            "error": "x",
            "output": [
                {
                    "id": "x",
                    "content": [
                        {
                            "annotations": [],
                            "text": "x",
                            "type": "output_text"
                        }
                    ],
                    "role": "assistant",
                    "status": "in_progress",
                    "type": "message"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "chat",
        "accessor": "Chat",
        "op": "list",
        "method": "GET",
        "path": "/chat",
        "args": [],
        "select": {
            "assistant_id": "v1",
            "assistant_id_any": "v1",
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "id_any": "v1",
            "limit": "v1",
            "page": "v1",
            "previous_chat_id": "v1",
            "session_id": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "squad_id": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "assistantId",
            "assistantIdAny",
            "squadId",
            "sessionId",
            "previousChatId",
            "idAny",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "assistant": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "transcriber": {},
                        "transportConfigurations": [],
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "assistantId": "x",
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "cost": 1,
                    "costs": [
                        {
                            "cachedPromptTokens": 1,
                            "completionTokens": 1,
                            "cost": 1,
                            "model": {},
                            "promptTokens": 1,
                            "reasoningTokens": 1,
                            "seconds": 1,
                            "type": "model",
                            "usageComplete": true
                        }
                    ],
                    "createdAt": "2026-01-01T00:00:00Z",
                    "id": "x",
                    "input": "x",
                    "messages": [
                        {
                            "message": "x",
                            "role": "x",
                            "secondsFromStart": 1,
                            "time": 1
                        }
                    ],
                    "name": "x",
                    "orgId": "x",
                    "output": [
                        {
                            "message": "x",
                            "role": "x",
                            "secondsFromStart": 1,
                            "time": 1
                        }
                    ],
                    "previousChatId": "x",
                    "sessionId": "x",
                    "squad": {
                        "members": [
                            {}
                        ],
                        "membersOverrides": {},
                        "name": "x"
                    },
                    "squadId": "x",
                    "stream": true,
                    "updatedAt": "2026-01-01T00:00:00Z"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "chat",
        "accessor": "Chat",
        "op": "load",
        "method": "GET",
        "path": "/chat/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "assistantId": "x",
            "assistant": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadId": "x",
            "squad": {
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "name": "x"
            },
            "name": "x",
            "sessionId": "x",
            "input": "x",
            "stream": true,
            "previousChatId": "x",
            "id": "x",
            "orgId": "x",
            "messages": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "output": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "costs": [
                {
                    "cachedPromptTokens": 1,
                    "completionTokens": 1,
                    "cost": 1,
                    "model": {},
                    "promptTokens": 1,
                    "reasoningTokens": 1,
                    "seconds": 1,
                    "type": "model",
                    "usageComplete": true
                }
            ],
            "cost": 1
        },
        "idField": "id"
    },
    {
        "entity": "chat",
        "accessor": "Chat",
        "op": "remove",
        "method": "DELETE",
        "path": "/chat/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "assistantId": "x",
            "assistant": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadId": "x",
            "squad": {
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "name": "x"
            },
            "name": "x",
            "sessionId": "x",
            "input": "x",
            "stream": true,
            "previousChatId": "x",
            "id": "x",
            "orgId": "x",
            "messages": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "output": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "costs": [
                {
                    "cachedPromptTokens": 1,
                    "completionTokens": 1,
                    "cost": 1,
                    "model": {},
                    "promptTokens": 1,
                    "reasoningTokens": 1,
                    "seconds": 1,
                    "type": "model",
                    "usageComplete": true
                }
            ],
            "cost": 1
        },
        "idField": "id"
    },
    {
        "entity": "eval",
        "accessor": "Eval",
        "op": "create",
        "method": "POST",
        "path": "/eval",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "messages": "[{ role: \"user\", content: \"Hello, how are you?\" }, { role: \"assistant\", judgePlan: { type: \"exact\", content: \"I am good, thank you!\" } }]",
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Verified User Flow Eval",
            "description": "This eval checks if the user flow is verified.",
            "type": "chat.mockConversation"
        },
        "idField": "id"
    },
    {
        "entity": "eval",
        "accessor": "Eval",
        "op": "create",
        "method": "POST",
        "path": "/eval/run",
        "action": "run",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "eval",
        "accessor": "Eval",
        "op": "list",
        "method": "GET",
        "path": "/eval/run",
        "action": "run",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "limit": "v1",
            "page": "v1",
            "search": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "sortBy",
            "search",
            "id",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe",
            "page",
            "sortOrder"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "cost": 0.01,
                    "costs": "[{ type: \"model\", model: \"gpt-4o\", cost: 0.01 }]",
                    "createdAt": "2026-01-01T00:00:00Z",
                    "endedAt": "2026-01-01T00:00:00Z",
                    "endedMessage": "The Assistant returned an error",
                    "endedReason": "mockConversation.done",
                    "eval": {
                        "description": "This eval checks if the user flow is verified.",
                        "messages": "[{ role: \"user\", content: \"Hello, how are you?\" }, { role: \"assistant\", judgePlan: { type: \"exact\", content: \"I am good, thank you!\" } }]",
                        "name": "Verified User Flow Eval",
                        "type": "chat.mockConversation"
                    },
                    "evalId": "123e4567-e89b-12d3-a456-426614174000",
                    "id": "x",
                    "orgId": "x",
                    "results": [
                        {
                            "endedAt": "2021-01-01T00:00:00.000Z",
                            "messages": [],
                            "startedAt": "2021-01-01T00:00:00.000Z",
                            "status": "pass"
                        }
                    ],
                    "startedAt": "2026-01-01T00:00:00Z",
                    "status": "running",
                    "target": {
                        "assistant": {},
                        "assistantId": "123e4567-e89b-12d3-a456-426614174000",
                        "assistantOverrides": "{",
                        "type": "assistant"
                    },
                    "type": "eval"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "eval",
        "accessor": "Eval",
        "op": "list",
        "method": "GET",
        "path": "/eval",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "createdAt": "2026-01-01T00:00:00Z",
                    "description": "This eval checks if the user flow is verified.",
                    "id": "x",
                    "messages": "[{ role: \"user\", content: \"Hello, how are you?\" }, { role: \"assistant\", judgePlan: { type: \"exact\", content: \"I am good, thank you!\" } }]",
                    "name": "Verified User Flow Eval",
                    "orgId": "x",
                    "type": "chat.mockConversation",
                    "updatedAt": "2026-01-01T00:00:00Z"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "eval",
        "accessor": "Eval",
        "op": "update",
        "method": "PATCH",
        "path": "/eval/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "messages": "[{ role: \"user\", content: \"Hello, how are you?\" }, { role: \"assistant\", judgePlan: { type: \"exact\", content: \"I am good, thank you!\" } }]",
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Verified User Flow Eval",
            "description": "This eval checks if the user flow is verified.",
            "type": "chat.mockConversation"
        },
        "idField": "id"
    },
    {
        "entity": "file",
        "accessor": "File",
        "op": "create",
        "method": "POST",
        "path": "/file",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "object": "file",
            "status": "processing",
            "name": "x",
            "originalName": "x",
            "bytes": 1,
            "purpose": "x",
            "mimetype": "x",
            "key": "x",
            "path": "x",
            "bucket": "x",
            "url": "x",
            "parsedTextUrl": "x",
            "parsedTextBytes": 1,
            "metadata": {},
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "file",
        "accessor": "File",
        "op": "list",
        "method": "GET",
        "path": "/file",
        "args": [],
        "select": {
            "purpose": "v1"
        },
        "headers": [],
        "query": [
            "purpose"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "object": "file",
                "status": "processing",
                "name": "x",
                "originalName": "x",
                "bytes": 1,
                "purpose": "x",
                "mimetype": "x",
                "key": "x",
                "path": "x",
                "bucket": "x",
                "url": "x",
                "parsedTextUrl": "x",
                "parsedTextBytes": 1,
                "metadata": {},
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "file",
        "accessor": "File",
        "op": "load",
        "method": "GET",
        "path": "/file/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "file",
            "status": "processing",
            "name": "x",
            "originalName": "x",
            "bytes": 1,
            "purpose": "x",
            "mimetype": "x",
            "key": "x",
            "path": "x",
            "bucket": "x",
            "url": "x",
            "parsedTextUrl": "x",
            "parsedTextBytes": 1,
            "metadata": {},
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "file",
        "accessor": "File",
        "op": "remove",
        "method": "DELETE",
        "path": "/file/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "file",
            "status": "processing",
            "name": "x",
            "originalName": "x",
            "bytes": 1,
            "purpose": "x",
            "mimetype": "x",
            "key": "x",
            "path": "x",
            "bucket": "x",
            "url": "x",
            "parsedTextUrl": "x",
            "parsedTextBytes": 1,
            "metadata": {},
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "file",
        "accessor": "File",
        "op": "update",
        "method": "PATCH",
        "path": "/file/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "file",
            "status": "processing",
            "name": "x",
            "originalName": "x",
            "bytes": 1,
            "purpose": "x",
            "mimetype": "x",
            "key": "x",
            "path": "x",
            "bucket": "x",
            "url": "x",
            "parsedTextUrl": "x",
            "parsedTextBytes": 1,
            "metadata": {},
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "insight",
        "accessor": "Insight",
        "op": "create",
        "method": "POST",
        "path": "/reporting/insight/{id}/run",
        "action": "run",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "insightId": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "insight",
        "accessor": "Insight",
        "op": "create",
        "method": "POST",
        "path": "/reporting/insight",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "name": "x",
            "type": "bar",
            "formulas": [
                {
                    "name": "Booking Rate",
                    "formula": "x"
                }
            ],
            "metadata": {
                "xAxisLabel": "x",
                "yAxisLabel": "x",
                "yAxisMin": 1,
                "yAxisMax": 1,
                "name": "x"
            },
            "timeRange": {
                "step": "minute",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "end": "\"2025-01-01\" or \"now\"",
                "timezone": "x"
            },
            "groupBy": [
                "assistant_id"
            ],
            "queries": [
                {
                    "type": "vapiql-json",
                    "table": "call",
                    "filters": [],
                    "column": "id",
                    "operation": "count",
                    "name": "Total Calls"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x"
        },
        "idField": "id"
    },
    {
        "entity": "insight",
        "accessor": "Insight",
        "op": "create",
        "method": "POST",
        "path": "/reporting/insight/preview",
        "action": "preview",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "insightId": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "insight",
        "accessor": "Insight",
        "op": "list",
        "method": "GET",
        "path": "/reporting/insight",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "createdAt": "2026-01-01T00:00:00Z",
                    "id": "x",
                    "name": "x",
                    "orgId": "x",
                    "systemKey": "x",
                    "type": "bar",
                    "updatedAt": "2026-01-01T00:00:00Z"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "insight",
        "accessor": "Insight",
        "op": "load",
        "method": "GET",
        "path": "/reporting/insight/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "name": "x",
            "type": "bar",
            "formulas": [
                {
                    "name": "Booking Rate",
                    "formula": "x"
                }
            ],
            "metadata": {
                "xAxisLabel": "x",
                "yAxisLabel": "x",
                "yAxisMin": 1,
                "yAxisMax": 1,
                "name": "x"
            },
            "timeRange": {
                "step": "minute",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "end": "\"2025-01-01\" or \"now\"",
                "timezone": "x"
            },
            "groupBy": [
                "assistant_id"
            ],
            "queries": [
                {
                    "type": "vapiql-json",
                    "table": "call",
                    "filters": [],
                    "column": "id",
                    "operation": "count",
                    "name": "Total Calls"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x"
        },
        "idField": "id"
    },
    {
        "entity": "insight",
        "accessor": "Insight",
        "op": "remove",
        "method": "DELETE",
        "path": "/reporting/insight/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "name": "x",
            "type": "bar",
            "formulas": [
                {
                    "name": "Booking Rate",
                    "formula": "x"
                }
            ],
            "metadata": {
                "xAxisLabel": "x",
                "yAxisLabel": "x",
                "yAxisMin": 1,
                "yAxisMax": 1,
                "name": "x"
            },
            "timeRange": {
                "step": "minute",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "end": "\"2025-01-01\" or \"now\"",
                "timezone": "x"
            },
            "groupBy": [
                "assistant_id"
            ],
            "queries": [
                {
                    "type": "vapiql-json",
                    "table": "call",
                    "filters": [],
                    "column": "id",
                    "operation": "count",
                    "name": "Total Calls"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x"
        },
        "idField": "id"
    },
    {
        "entity": "insight",
        "accessor": "Insight",
        "op": "update",
        "method": "PATCH",
        "path": "/reporting/insight/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "name": "x",
            "type": "bar",
            "formulas": [
                {
                    "name": "Booking Rate",
                    "formula": "x"
                }
            ],
            "metadata": {
                "xAxisLabel": "x",
                "yAxisLabel": "x",
                "yAxisMin": 1,
                "yAxisMax": 1,
                "name": "x"
            },
            "timeRange": {
                "step": "minute",
                "start": "\"2025-01-01\" or \"-7d\" or \"now\"",
                "end": "\"2025-01-01\" or \"now\"",
                "timezone": "x"
            },
            "groupBy": [
                "assistant_id"
            ],
            "queries": [
                {
                    "type": "vapiql-json",
                    "table": "call",
                    "filters": [],
                    "column": "id",
                    "operation": "count",
                    "name": "Total Calls"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "systemKey": "x"
        },
        "idField": "id"
    },
    {
        "entity": "knowledge_base",
        "accessor": "KnowledgeBase",
        "op": "create",
        "method": "POST",
        "path": "/v2/knowledge-base",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "name": "x",
            "description": "x",
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "knowledge_base",
        "accessor": "KnowledgeBase",
        "op": "list",
        "method": "GET",
        "path": "/v2/knowledge-base",
        "args": [],
        "select": {
            "limit": "v1"
        },
        "headers": [],
        "query": [
            "limit"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "name": "x",
                "description": "x",
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "knowledge_base",
        "accessor": "KnowledgeBase",
        "op": "load",
        "method": "GET",
        "path": "/v2/knowledge-base/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "name": "x",
            "description": "x",
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "files": [
                {
                    "id": "x",
                    "knowledgeBaseV2Id": "x",
                    "fileId": "x",
                    "fileName": "x",
                    "mimetype": "x",
                    "bytes": 1,
                    "status": "indexing",
                    "createdAt": "2026-01-01T00:00:00Z",
                    "updatedAt": "2026-01-01T00:00:00Z"
                }
            ],
            "toolId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "knowledge_base",
        "accessor": "KnowledgeBase",
        "op": "remove",
        "method": "DELETE",
        "path": "/v2/knowledge-base/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "name": "x",
            "description": "x",
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "knowledge_base",
        "accessor": "KnowledgeBase",
        "op": "update",
        "method": "PATCH",
        "path": "/v2/knowledge-base/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "name": "x",
            "description": "x",
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "knowledge_base_v2_file",
        "accessor": "KnowledgeBaseV2File",
        "op": "create",
        "method": "POST",
        "path": "/v2/knowledge-base/{id}/file/{fileId}/retry",
        "args": [
            {
                "name": "file_id",
                "wire": "fileId",
                "value": "p1"
            },
            {
                "name": "knowledge_base_id",
                "wire": "id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "knowledgeBaseV2Id": "x",
            "fileId": "x",
            "fileName": "x",
            "mimetype": "x",
            "bytes": 1,
            "status": "indexing",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "knowledge_base_v2_file",
        "accessor": "KnowledgeBaseV2File",
        "op": "create",
        "method": "POST",
        "path": "/v2/knowledge-base/{id}/file",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "knowledgeBaseV2Id": "x",
            "fileId": "x",
            "fileName": "x",
            "mimetype": "x",
            "bytes": 1,
            "status": "indexing",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "knowledge_base_v2_file",
        "accessor": "KnowledgeBaseV2File",
        "op": "list",
        "method": "GET",
        "path": "/v2/knowledge-base/{id}/file",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "knowledgeBaseV2Id": "x",
                "fileId": "x",
                "fileName": "x",
                "mimetype": "x",
                "bytes": 1,
                "status": "indexing",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "knowledge_base_v2_file",
        "accessor": "KnowledgeBaseV2File",
        "op": "remove",
        "method": "DELETE",
        "path": "/v2/knowledge-base/{id}/file/{fileId}",
        "args": [
            {
                "name": "id",
                "wire": "fileId",
                "value": "p1"
            },
            {
                "name": "knowledge_base_id",
                "wire": "id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "knowledgeBaseV2Id": "x",
            "fileId": "x",
            "fileName": "x",
            "mimetype": "x",
            "bytes": 1,
            "status": "indexing",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "personality",
        "accessor": "Personality",
        "op": "create",
        "method": "POST",
        "path": "/eval/simulation/personality",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "assistant": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "personality",
        "accessor": "Personality",
        "op": "list",
        "method": "GET",
        "path": "/eval/simulation/personality",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "name": "x",
                "assistant": {
                    "transcriber": {
                        "agentContext": "x",
                        "agentContextAutoUpdateEnabled": true,
                        "confidenceThreshold": 0.4,
                        "disablePartialTranscripts": true,
                        "endOfTurnConfidenceThreshold": 0.7,
                        "endUtteranceSilenceThreshold": 1,
                        "fallbackPlan": {},
                        "formatTurns": true,
                        "keytermsPrompt": [],
                        "language": "multi",
                        "languageCodes": [],
                        "maxTurnSilence": 400,
                        "minEndOfTurnSilenceWhenConfident": 160,
                        "mode": "max_accuracy",
                        "prompt": "x",
                        "provider": "assembly-ai",
                        "realtimeUrl": "x",
                        "speechModel": "universal-streaming-english",
                        "vadAssistedEndpointingEnabled": true,
                        "wordBoost": [],
                        "wordFinalizationMaxWaitTime": 160
                    },
                    "model": {
                        "emotionRecognitionEnabled": true,
                        "maxTokens": 1,
                        "messages": [],
                        "model": "claude-3-opus-20240229",
                        "numFastTurns": 1,
                        "provider": "anthropic",
                        "temperature": 1,
                        "thinking": {},
                        "toolIds": [],
                        "toolRefs": [],
                        "tools": []
                    },
                    "voice": {
                        "cachingEnabled": true,
                        "chunkPlan": {},
                        "fallbackPlan": {},
                        "provider": "azure",
                        "speed": 1
                    },
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "voicemailDetection": "off",
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "maxDurationSeconds": 600,
                    "backgroundSound": "office",
                    "modelOutputInMessagesEnabled": false,
                    "transportConfigurations": [
                        {}
                    ],
                    "observabilityPlan": {
                        "metadata": {},
                        "promptName": "x",
                        "promptVersion": 1,
                        "provider": "langfuse",
                        "tags": [],
                        "traceName": "x"
                    },
                    "credentials": [
                        {}
                    ],
                    "hooks": [
                        {}
                    ],
                    "name": "x",
                    "voicemailMessage": "x",
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "recordingConsentPlan": {},
                        "securityFilterPlan": {}
                    },
                    "metadata": {},
                    "backgroundSpeechDenoisingPlan": {
                        "fourierDenoisingPlan": {},
                        "smartDenoisingPlan": {}
                    },
                    "analysisPlan": {
                        "minMessagesThreshold": 1,
                        "outcomeIds": [],
                        "structuredDataMultiPlan": [],
                        "structuredDataPlan": {},
                        "successEvaluationPlan": {},
                        "summaryPlan": {}
                    },
                    "artifactPlan": {
                        "fullMessageHistoryEnabled": false,
                        "loggingEnabled": true,
                        "loggingPath": "x",
                        "loggingUseCustomStorageEnabled": true,
                        "pcapEnabled": true,
                        "pcapS3PathPrefix": "/pcaps",
                        "pcapUseCustomStorageEnabled": true,
                        "recordingEnabled": true,
                        "recordingFormat": "wav;l16",
                        "recordingPath": "x",
                        "recordingUseCustomStorageEnabled": true,
                        "scorecardIds": [],
                        "scorecards": [],
                        "structuredOutputIds": [],
                        "structuredOutputs": [],
                        "transcriptPlan": {},
                        "videoRecordingEnabled": false
                    },
                    "startSpeakingPlan": {
                        "customEndpointingRules": [],
                        "smartEndpointingEnabled": false,
                        "transcriptionEndpointingPlan": {},
                        "waitSeconds": 0.4
                    },
                    "stopSpeakingPlan": {
                        "acknowledgementPhrases": [
                            "i understand",
                            "i see",
                            "i got it"
                        ],
                        "backoffSeconds": 1,
                        "interruptionPhrases": [
                            "stop",
                            "shut",
                            "up"
                        ],
                        "numWords": 0,
                        "voiceSeconds": 0.2
                    },
                    "monitorPlan": {
                        "controlAuthenticationEnabled": false,
                        "controlEnabled": false,
                        "listenAuthenticationEnabled": false,
                        "listenEnabled": false,
                        "monitorIds": [
                            "123e4567-e89b-12d3-a456-426614174000"
                        ]
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    },
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    }
                },
                "path": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "personality",
        "accessor": "Personality",
        "op": "load",
        "method": "GET",
        "path": "/eval/simulation/personality/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "assistant": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "personality",
        "accessor": "Personality",
        "op": "remove",
        "method": "DELETE",
        "path": "/eval/simulation/personality/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "assistant": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "personality",
        "accessor": "Personality",
        "op": "update",
        "method": "PATCH",
        "path": "/eval/simulation/personality/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "assistant": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "phone_number",
        "accessor": "PhoneNumber",
        "op": "create",
        "method": "POST",
        "path": "/phone-number",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "fallbackDestination": {
                "callerId": "x",
                "description": "x",
                "extension": "x",
                "message": "x",
                "name": "x",
                "number": "x",
                "numberE164CheckEnabled": true,
                "transferPlan": {
                    "dialTimeout": 1,
                    "fallbackPlan": {},
                    "holdAudioUrl": "x",
                    "mode": "blind-transfer",
                    "sipHeadersInReferToEnabled": true,
                    "sipVerb": "refer",
                    "summaryPlan": {},
                    "timeout": 1,
                    "transferCompleteAudioUrl": "x",
                    "twiml": "x"
                },
                "type": "number"
            },
            "hooks": [
                {
                    "do": [],
                    "filters": [
                        {}
                    ],
                    "on": "call.ringing"
                }
            ],
            "provider": "byo-phone-number",
            "numberE164CheckEnabled": true,
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "status": "active",
            "name": "x",
            "assistantId": "x",
            "workflowId": "x",
            "squadId": "x",
            "server": {
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                },
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "encryptedPaths": [
                    "x"
                ],
                "headers": {},
                "staticIpAddressesEnabled": false,
                "timeoutSeconds": 20,
                "url": "x"
            },
            "number": "x",
            "credentialId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "phone_number",
        "accessor": "PhoneNumber",
        "op": "list",
        "method": "GET",
        "path": "/v2/phone-number",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "limit": "v1",
            "page": "v1",
            "search": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "search",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "assistantId": "x",
                    "createdAt": "2026-01-01T00:00:00Z",
                    "credentialId": "x",
                    "fallbackDestination": {
                        "callerId": "x",
                        "description": "x",
                        "extension": "x",
                        "name": "x",
                        "number": "x",
                        "numberE164CheckEnabled": true,
                        "transferPlan": {},
                        "type": "number"
                    },
                    "hooks": [
                        {}
                    ],
                    "id": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "orgId": "x",
                    "provider": "byo-phone-number",
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    },
                    "squadId": "x",
                    "status": "active",
                    "updatedAt": "2026-01-01T00:00:00Z",
                    "workflowId": "x"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "phone_number",
        "accessor": "PhoneNumber",
        "op": "list",
        "method": "GET",
        "path": "/phone-number",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "limit": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "message": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ringing"
                    }
                ],
                "provider": "byo-phone-number",
                "numberE164CheckEnabled": true,
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "status": "active",
                "name": "x",
                "assistantId": "x",
                "workflowId": "x",
                "squadId": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "number": "x",
                "credentialId": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "phone_number",
        "accessor": "PhoneNumber",
        "op": "load",
        "method": "GET",
        "path": "/phone-number/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "fallbackDestination": {
                "callerId": "x",
                "description": "x",
                "extension": "x",
                "message": "x",
                "name": "x",
                "number": "x",
                "numberE164CheckEnabled": true,
                "transferPlan": {
                    "dialTimeout": 1,
                    "fallbackPlan": {},
                    "holdAudioUrl": "x",
                    "mode": "blind-transfer",
                    "sipHeadersInReferToEnabled": true,
                    "sipVerb": "refer",
                    "summaryPlan": {},
                    "timeout": 1,
                    "transferCompleteAudioUrl": "x",
                    "twiml": "x"
                },
                "type": "number"
            },
            "hooks": [
                {
                    "do": [],
                    "filters": [
                        {}
                    ],
                    "on": "call.ringing"
                }
            ],
            "provider": "byo-phone-number",
            "numberE164CheckEnabled": true,
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "status": "active",
            "name": "x",
            "assistantId": "x",
            "workflowId": "x",
            "squadId": "x",
            "server": {
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                },
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "encryptedPaths": [
                    "x"
                ],
                "headers": {},
                "staticIpAddressesEnabled": false,
                "timeoutSeconds": 20,
                "url": "x"
            },
            "number": "x",
            "credentialId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "phone_number",
        "accessor": "PhoneNumber",
        "op": "remove",
        "method": "DELETE",
        "path": "/phone-number/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "fallbackDestination": {
                "callerId": "x",
                "description": "x",
                "extension": "x",
                "message": "x",
                "name": "x",
                "number": "x",
                "numberE164CheckEnabled": true,
                "transferPlan": {
                    "dialTimeout": 1,
                    "fallbackPlan": {},
                    "holdAudioUrl": "x",
                    "mode": "blind-transfer",
                    "sipHeadersInReferToEnabled": true,
                    "sipVerb": "refer",
                    "summaryPlan": {},
                    "timeout": 1,
                    "transferCompleteAudioUrl": "x",
                    "twiml": "x"
                },
                "type": "number"
            },
            "hooks": [
                {
                    "do": [],
                    "filters": [
                        {}
                    ],
                    "on": "call.ringing"
                }
            ],
            "provider": "byo-phone-number",
            "numberE164CheckEnabled": true,
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "status": "active",
            "name": "x",
            "assistantId": "x",
            "workflowId": "x",
            "squadId": "x",
            "server": {
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                },
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "encryptedPaths": [
                    "x"
                ],
                "headers": {},
                "staticIpAddressesEnabled": false,
                "timeoutSeconds": 20,
                "url": "x"
            },
            "number": "x",
            "credentialId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "phone_number",
        "accessor": "PhoneNumber",
        "op": "update",
        "method": "PATCH",
        "path": "/phone-number/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "fallbackDestination": {
                "callerId": "x",
                "description": "x",
                "extension": "x",
                "message": "x",
                "name": "x",
                "number": "x",
                "numberE164CheckEnabled": true,
                "transferPlan": {
                    "dialTimeout": 1,
                    "fallbackPlan": {},
                    "holdAudioUrl": "x",
                    "mode": "blind-transfer",
                    "sipHeadersInReferToEnabled": true,
                    "sipVerb": "refer",
                    "summaryPlan": {},
                    "timeout": 1,
                    "transferCompleteAudioUrl": "x",
                    "twiml": "x"
                },
                "type": "number"
            },
            "hooks": [
                {
                    "do": [],
                    "filters": [
                        {}
                    ],
                    "on": "call.ringing"
                }
            ],
            "provider": "byo-phone-number",
            "numberE164CheckEnabled": true,
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "status": "active",
            "name": "x",
            "assistantId": "x",
            "workflowId": "x",
            "squadId": "x",
            "server": {
                "backoffPlan": {
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ],
                    "maxRetries": 0,
                    "type": "fixed"
                },
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "encryptedPaths": [
                    "x"
                ],
                "headers": {},
                "staticIpAddressesEnabled": false,
                "timeoutSeconds": 20,
                "url": "x"
            },
            "number": "x",
            "credentialId": "x"
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "create",
        "method": "POST",
        "path": "/provider/{provider}/{resourceName}",
        "args": [
            {
                "name": "provider",
                "wire": "provider",
                "value": "p1"
            },
            {
                "name": "resource_name",
                "wire": "resourceName",
                "value": "p2"
            }
        ],
        "select": {
            "content_type": "v1"
        },
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "provider": "cartesia",
            "resourceName": "pronunciation-dictionary",
            "resourceId": "x",
            "resource": {}
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "load",
        "method": "GET",
        "path": "/provider/{provider}/{resourceName}",
        "args": [
            {
                "name": "provider",
                "wire": "provider",
                "value": "p1"
            },
            {
                "name": "resource_name",
                "wire": "resourceName",
                "value": "p2"
            }
        ],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "limit": "v1",
            "page": "v1",
            "resource_id": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "resourceId",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "id": "x",
                    "orgId": "x",
                    "createdAt": "2026-01-01T00:00:00Z",
                    "updatedAt": "2026-01-01T00:00:00Z",
                    "provider": "cartesia",
                    "resourceName": "pronunciation-dictionary",
                    "resourceId": "x",
                    "resource": {}
                }
            ],
            "metadata": {
                "itemsPerPage": 1,
                "totalItems": 1,
                "currentPage": 1,
                "totalPages": 1,
                "hasNextPage": true,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "itemsBeyondRetention": true,
                "createdAtLe": "2026-01-01T00:00:00Z",
                "createdAtGe": "2026-01-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "load",
        "method": "GET",
        "path": "/provider/{provider}/{resourceName}/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            },
            {
                "name": "provider",
                "wire": "provider",
                "value": "p2"
            },
            {
                "name": "resource_name",
                "wire": "resourceName",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "provider": "cartesia",
            "resourceName": "pronunciation-dictionary",
            "resourceId": "x",
            "resource": {}
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "remove",
        "method": "DELETE",
        "path": "/provider/{provider}/{resourceName}/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            },
            {
                "name": "provider",
                "wire": "provider",
                "value": "p2"
            },
            {
                "name": "resource_name",
                "wire": "resourceName",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "provider": "cartesia",
            "resourceName": "pronunciation-dictionary",
            "resourceId": "x",
            "resource": {}
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "update",
        "method": "PATCH",
        "path": "/provider/{provider}/{resourceName}/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            },
            {
                "name": "provider",
                "wire": "provider",
                "value": "p2"
            },
            {
                "name": "resource_name",
                "wire": "resourceName",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "provider": "cartesia",
            "resourceName": "pronunciation-dictionary",
            "resourceId": "x",
            "resource": {}
        },
        "idField": "id"
    },
    {
        "entity": "scenario",
        "accessor": "Scenario",
        "op": "create",
        "method": "POST",
        "path": "/eval/simulation/scenario",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Health Enrollment - Eligible Path",
            "instructions": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
            "evaluations": [
                {
                    "structuredOutputId": "x",
                    "structuredOutput": {
                        "type": "ai",
                        "regex": "x",
                        "model": {},
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "name": "x",
                        "schema": {},
                        "description": "x",
                        "assistantIds": [
                            "x"
                        ],
                        "workflowIds": [
                            "x"
                        ]
                    },
                    "path": "contact.auth_started",
                    "comparator": "=",
                    "value": 1,
                    "required": true
                }
            ],
            "hooks": [
                {
                    "on": "simulation.run.started",
                    "do": [
                        {}
                    ]
                }
            ],
            "targetOverrides": {
                "variableValues": {
                    "customerName": "Alice",
                    "orderId": "12345"
                }
            },
            "toolMocks": [
                {
                    "toolName": "x",
                    "result": "x",
                    "enabled": true
                }
            ],
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "scenario",
        "accessor": "Scenario",
        "op": "list",
        "method": "GET",
        "path": "/eval/simulation/scenario",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id_any": "v1",
            "limit": "v1",
            "name": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "idAny",
            "name",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "name": "Health Enrollment - Eligible Path",
                "instructions": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
                "evaluations": [
                    {
                        "structuredOutputId": "x",
                        "structuredOutput": {
                            "type": "ai",
                            "regex": "x",
                            "compliancePlan": {
                                "forceStoreOnHipaaEnabled": false
                            },
                            "conditions": [
                                {
                                    "count": 4,
                                    "type": "minMessages"
                                },
                                {
                                    "seconds": 10,
                                    "type": "minCallDuration"
                                }
                            ],
                            "name": "x",
                            "schema": {},
                            "description": "x",
                            "assistantIds": [],
                            "workflowIds": []
                        },
                        "path": "contact.auth_started",
                        "comparator": "=",
                        "value": 1,
                        "required": true
                    }
                ],
                "hooks": [
                    {
                        "on": "simulation.run.started",
                        "do": []
                    }
                ],
                "targetOverrides": {
                    "variableValues": {
                        "customerName": "Alice",
                        "orderId": "12345"
                    }
                },
                "toolMocks": [
                    {
                        "toolName": "x",
                        "result": "x",
                        "enabled": true
                    }
                ],
                "path": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "scenario",
        "accessor": "Scenario",
        "op": "load",
        "method": "GET",
        "path": "/eval/simulation/scenario/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Health Enrollment - Eligible Path",
            "instructions": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
            "evaluations": [
                {
                    "structuredOutputId": "x",
                    "structuredOutput": {
                        "type": "ai",
                        "regex": "x",
                        "model": {},
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "name": "x",
                        "schema": {},
                        "description": "x",
                        "assistantIds": [
                            "x"
                        ],
                        "workflowIds": [
                            "x"
                        ]
                    },
                    "path": "contact.auth_started",
                    "comparator": "=",
                    "value": 1,
                    "required": true
                }
            ],
            "hooks": [
                {
                    "on": "simulation.run.started",
                    "do": [
                        {}
                    ]
                }
            ],
            "targetOverrides": {
                "variableValues": {
                    "customerName": "Alice",
                    "orderId": "12345"
                }
            },
            "toolMocks": [
                {
                    "toolName": "x",
                    "result": "x",
                    "enabled": true
                }
            ],
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "scenario",
        "accessor": "Scenario",
        "op": "remove",
        "method": "DELETE",
        "path": "/eval/simulation/scenario/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Health Enrollment - Eligible Path",
            "instructions": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
            "evaluations": [
                {
                    "structuredOutputId": "x",
                    "structuredOutput": {
                        "type": "ai",
                        "regex": "x",
                        "model": {},
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "name": "x",
                        "schema": {},
                        "description": "x",
                        "assistantIds": [
                            "x"
                        ],
                        "workflowIds": [
                            "x"
                        ]
                    },
                    "path": "contact.auth_started",
                    "comparator": "=",
                    "value": 1,
                    "required": true
                }
            ],
            "hooks": [
                {
                    "on": "simulation.run.started",
                    "do": [
                        {}
                    ]
                }
            ],
            "targetOverrides": {
                "variableValues": {
                    "customerName": "Alice",
                    "orderId": "12345"
                }
            },
            "toolMocks": [
                {
                    "toolName": "x",
                    "result": "x",
                    "enabled": true
                }
            ],
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "scenario",
        "accessor": "Scenario",
        "op": "update",
        "method": "PATCH",
        "path": "/eval/simulation/scenario/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Health Enrollment - Eligible Path",
            "instructions": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
            "evaluations": [
                {
                    "structuredOutputId": "x",
                    "structuredOutput": {
                        "type": "ai",
                        "regex": "x",
                        "model": {},
                        "compliancePlan": {
                            "forceStoreOnHipaaEnabled": false
                        },
                        "conditions": [
                            {
                                "count": 4,
                                "type": "minMessages"
                            },
                            {
                                "seconds": 10,
                                "type": "minCallDuration"
                            }
                        ],
                        "name": "x",
                        "schema": {},
                        "description": "x",
                        "assistantIds": [
                            "x"
                        ],
                        "workflowIds": [
                            "x"
                        ]
                    },
                    "path": "contact.auth_started",
                    "comparator": "=",
                    "value": 1,
                    "required": true
                }
            ],
            "hooks": [
                {
                    "on": "simulation.run.started",
                    "do": [
                        {}
                    ]
                }
            ],
            "targetOverrides": {
                "variableValues": {
                    "customerName": "Alice",
                    "orderId": "12345"
                }
            },
            "toolMocks": [
                {
                    "toolName": "x",
                    "result": "x",
                    "enabled": true
                }
            ],
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "scorecard",
        "accessor": "Scorecard",
        "op": "create",
        "method": "POST",
        "path": "/observability/scorecard",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "description": "x",
            "metrics": [
                {
                    "conditions": [
                        {
                            "comparator": "=",
                            "points": 1,
                            "type": "comparator",
                            "value": 1
                        }
                    ],
                    "structuredOutputId": "x"
                }
            ],
            "assistantIds": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "scorecard",
        "accessor": "Scorecard",
        "op": "list",
        "method": "GET",
        "path": "/observability/scorecard",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "assistantIds": [
                        "x"
                    ],
                    "createdAt": "2026-01-01T00:00:00Z",
                    "description": "x",
                    "id": "x",
                    "metrics": [
                        {
                            "conditions": [],
                            "structuredOutputId": "x"
                        }
                    ],
                    "name": "x",
                    "orgId": "x",
                    "updatedAt": "2026-01-01T00:00:00Z"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "scorecard",
        "accessor": "Scorecard",
        "op": "load",
        "method": "GET",
        "path": "/observability/scorecard/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "description": "x",
            "metrics": [
                {
                    "conditions": [
                        {
                            "comparator": "=",
                            "points": 1,
                            "type": "comparator",
                            "value": 1
                        }
                    ],
                    "structuredOutputId": "x"
                }
            ],
            "assistantIds": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "scorecard",
        "accessor": "Scorecard",
        "op": "remove",
        "method": "DELETE",
        "path": "/observability/scorecard/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "description": "x",
            "metrics": [
                {
                    "conditions": [
                        {
                            "comparator": "=",
                            "points": 1,
                            "type": "comparator",
                            "value": 1
                        }
                    ],
                    "structuredOutputId": "x"
                }
            ],
            "assistantIds": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "scorecard",
        "accessor": "Scorecard",
        "op": "update",
        "method": "PATCH",
        "path": "/observability/scorecard/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "description": "x",
            "metrics": [
                {
                    "conditions": [
                        {
                            "comparator": "=",
                            "points": 1,
                            "type": "comparator",
                            "value": 1
                        }
                    ],
                    "structuredOutputId": "x"
                }
            ],
            "assistantIds": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "session",
        "accessor": "Session",
        "op": "create",
        "method": "POST",
        "path": "/session",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "cost": 1,
            "costs": [
                {
                    "cachedPromptTokens": 1,
                    "completionTokens": 1,
                    "cost": 1,
                    "model": {},
                    "promptTokens": 1,
                    "reasoningTokens": 1,
                    "seconds": 1,
                    "type": "model",
                    "usageComplete": true
                }
            ],
            "name": "x",
            "status": "active",
            "expirationSeconds": 86400,
            "assistantId": "x",
            "assistant": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadId": "x",
            "squad": {
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "name": "x"
            },
            "messages": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "customer": {
                "assistantOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "email": "x",
                "extension": null,
                "externalId": "x",
                "name": "x",
                "number": "x",
                "numberE164CheckEnabled": true,
                "sipUri": "x",
                "squadOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                }
            },
            "customerId": "x",
            "phoneNumberId": "x",
            "phoneNumber": {
                "assistantId": "x",
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "message": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ringing"
                    }
                ],
                "name": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "smsEnabled": true,
                "squadId": "x",
                "twilioAccountSid": "x",
                "twilioApiKey": "x",
                "twilioApiSecret": "x",
                "twilioAuthToken": "x",
                "twilioPhoneNumber": "x",
                "workflowId": "x"
            },
            "artifact": {
                "assistantActivations": [
                    {
                        "assistantId": "x",
                        "assistantName": "x",
                        "assistantVersion": "x",
                        "squadVersion": "x"
                    }
                ],
                "logUrl": "x",
                "messages": [
                    {
                        "detectedThreats": [],
                        "duration": 1,
                        "endTime": 1,
                        "isFiltered": true,
                        "message": "x",
                        "metadata": {},
                        "originalMessage": "x",
                        "role": "x",
                        "secondsFromStart": 1,
                        "speakerLabel": "x",
                        "time": 1
                    }
                ],
                "messagesOpenAIFormatted": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "nodes": [
                    {
                        "messages": [],
                        "nodeName": "x",
                        "variableValues": {}
                    }
                ],
                "pcapUrl": "x",
                "performanceMetrics": {
                    "endpointingLatencyAverage": 1,
                    "fromTransportLatencyAverage": 1,
                    "modelLatencyAverage": 1,
                    "numAssistantInterrupted": 1,
                    "numUserInterrupted": 1,
                    "toTransportLatencyAverage": 1,
                    "transcriberLatencyAverage": 1,
                    "turnLatencies": [
                        {}
                    ],
                    "turnLatencyAverage": 1,
                    "voiceLatencyAverage": 1
                },
                "presignedAssistantUrl": "x",
                "presignedCustomerUrl": "x",
                "presignedLogUrl": "x",
                "presignedMonoUrl": "x",
                "presignedPcapUrl": "x",
                "presignedStereoUrl": "x",
                "presignedUrlsExpiresAt": "x",
                "presignedVideoUrl": "x",
                "recording": {
                    "mono": {},
                    "stereoUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "videoUrl": "x"
                },
                "recordingUrl": "x",
                "scorecards": {},
                "skippedStructuredOutputs": {},
                "stereoRecordingUrl": "x",
                "structuredOutputs": {},
                "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                "transcript": "x",
                "transfers": [
                    {
                        "destination": {},
                        "messages": [],
                        "mode": "blind-transfer",
                        "status": "connected",
                        "transcript": "x"
                    }
                ],
                "variableValues": {},
                "videoRecordingStartDelaySeconds": 1,
                "videoRecordingUrl": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "session",
        "accessor": "Session",
        "op": "list",
        "method": "GET",
        "path": "/session",
        "args": [],
        "select": {
            "assistant_id": "v1",
            "assistant_id_any": "v1",
            "assistant_override": "v1",
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "customer_number_any": "v1",
            "email": "v1",
            "extension": "v1",
            "external_id": "v1",
            "id": "v1",
            "id_any": "v1",
            "limit": "v1",
            "name": "v1",
            "number": "v1",
            "number_e164_check_enabled": "v1",
            "page": "v1",
            "phone_number_id": "v1",
            "phone_number_id_any": "v1",
            "sip_uri": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "squad_id": "v1",
            "squad_override": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1",
            "workflow_id": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "name",
            "assistantId",
            "assistantIdAny",
            "squadId",
            "workflowId",
            "numberE164CheckEnabled",
            "extension",
            "assistantOverrides",
            "squadOverrides",
            "number",
            "sipUri",
            "name",
            "email",
            "externalId",
            "customerNumberAny",
            "idAny",
            "phoneNumberId",
            "phoneNumberIdAny",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "artifact": {
                        "assistantActivations": [
                            {}
                        ],
                        "logUrl": "x",
                        "messages": [],
                        "messagesOpenAIFormatted": [
                            {}
                        ],
                        "nodes": [
                            {}
                        ],
                        "pcapUrl": "x",
                        "performanceMetrics": {},
                        "presignedAssistantUrl": "x",
                        "presignedCustomerUrl": "x",
                        "presignedLogUrl": "x",
                        "presignedMonoUrl": "x",
                        "presignedPcapUrl": "x",
                        "presignedStereoUrl": "x",
                        "presignedUrlsExpiresAt": "x",
                        "presignedVideoUrl": "x",
                        "recording": {},
                        "recordingUrl": "x",
                        "scorecards": {},
                        "skippedStructuredOutputs": {},
                        "stereoRecordingUrl": "x",
                        "structuredOutputs": {},
                        "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                        "transcript": "x",
                        "transfers": [
                            {}
                        ],
                        "variableValues": {},
                        "videoRecordingStartDelaySeconds": 1,
                        "videoRecordingUrl": "x"
                    },
                    "assistant": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "transcriber": {},
                        "transportConfigurations": [],
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "assistantId": "x",
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    },
                    "cost": 1,
                    "costs": [
                        {
                            "cachedPromptTokens": 1,
                            "completionTokens": 1,
                            "cost": 1,
                            "model": {},
                            "promptTokens": 1,
                            "reasoningTokens": 1,
                            "seconds": 1,
                            "type": "model",
                            "usageComplete": true
                        }
                    ],
                    "createdAt": "2026-01-01T00:00:00Z",
                    "customer": {
                        "assistantOverrides": {},
                        "email": "x",
                        "extension": null,
                        "externalId": "x",
                        "name": "x",
                        "number": "x",
                        "numberE164CheckEnabled": true,
                        "sipUri": "x",
                        "squadOverrides": {}
                    },
                    "customerId": "x",
                    "expirationSeconds": 86400,
                    "id": "x",
                    "messages": [
                        {
                            "message": "x",
                            "role": "x",
                            "secondsFromStart": 1,
                            "time": 1
                        }
                    ],
                    "name": "x",
                    "orgId": "x",
                    "phoneNumber": {
                        "assistantId": "x",
                        "fallbackDestination": {},
                        "hooks": [],
                        "name": "x",
                        "server": {},
                        "smsEnabled": true,
                        "squadId": "x",
                        "twilioAccountSid": "x",
                        "twilioApiKey": "x",
                        "twilioApiSecret": "x",
                        "twilioAuthToken": "x",
                        "twilioPhoneNumber": "x",
                        "workflowId": "x"
                    },
                    "phoneNumberId": "x",
                    "squad": {
                        "members": [
                            {}
                        ],
                        "membersOverrides": {},
                        "name": "x"
                    },
                    "squadId": "x",
                    "status": "active",
                    "updatedAt": "2026-01-01T00:00:00Z"
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "session",
        "accessor": "Session",
        "op": "load",
        "method": "GET",
        "path": "/session/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "cost": 1,
            "costs": [
                {
                    "cachedPromptTokens": 1,
                    "completionTokens": 1,
                    "cost": 1,
                    "model": {},
                    "promptTokens": 1,
                    "reasoningTokens": 1,
                    "seconds": 1,
                    "type": "model",
                    "usageComplete": true
                }
            ],
            "name": "x",
            "status": "active",
            "expirationSeconds": 86400,
            "assistantId": "x",
            "assistant": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadId": "x",
            "squad": {
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "name": "x"
            },
            "messages": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "customer": {
                "assistantOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "email": "x",
                "extension": null,
                "externalId": "x",
                "name": "x",
                "number": "x",
                "numberE164CheckEnabled": true,
                "sipUri": "x",
                "squadOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                }
            },
            "customerId": "x",
            "phoneNumberId": "x",
            "phoneNumber": {
                "assistantId": "x",
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "message": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ringing"
                    }
                ],
                "name": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "smsEnabled": true,
                "squadId": "x",
                "twilioAccountSid": "x",
                "twilioApiKey": "x",
                "twilioApiSecret": "x",
                "twilioAuthToken": "x",
                "twilioPhoneNumber": "x",
                "workflowId": "x"
            },
            "artifact": {
                "assistantActivations": [
                    {
                        "assistantId": "x",
                        "assistantName": "x",
                        "assistantVersion": "x",
                        "squadVersion": "x"
                    }
                ],
                "logUrl": "x",
                "messages": [
                    {
                        "detectedThreats": [],
                        "duration": 1,
                        "endTime": 1,
                        "isFiltered": true,
                        "message": "x",
                        "metadata": {},
                        "originalMessage": "x",
                        "role": "x",
                        "secondsFromStart": 1,
                        "speakerLabel": "x",
                        "time": 1
                    }
                ],
                "messagesOpenAIFormatted": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "nodes": [
                    {
                        "messages": [],
                        "nodeName": "x",
                        "variableValues": {}
                    }
                ],
                "pcapUrl": "x",
                "performanceMetrics": {
                    "endpointingLatencyAverage": 1,
                    "fromTransportLatencyAverage": 1,
                    "modelLatencyAverage": 1,
                    "numAssistantInterrupted": 1,
                    "numUserInterrupted": 1,
                    "toTransportLatencyAverage": 1,
                    "transcriberLatencyAverage": 1,
                    "turnLatencies": [
                        {}
                    ],
                    "turnLatencyAverage": 1,
                    "voiceLatencyAverage": 1
                },
                "presignedAssistantUrl": "x",
                "presignedCustomerUrl": "x",
                "presignedLogUrl": "x",
                "presignedMonoUrl": "x",
                "presignedPcapUrl": "x",
                "presignedStereoUrl": "x",
                "presignedUrlsExpiresAt": "x",
                "presignedVideoUrl": "x",
                "recording": {
                    "mono": {},
                    "stereoUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "videoUrl": "x"
                },
                "recordingUrl": "x",
                "scorecards": {},
                "skippedStructuredOutputs": {},
                "stereoRecordingUrl": "x",
                "structuredOutputs": {},
                "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                "transcript": "x",
                "transfers": [
                    {
                        "destination": {},
                        "messages": [],
                        "mode": "blind-transfer",
                        "status": "connected",
                        "transcript": "x"
                    }
                ],
                "variableValues": {},
                "videoRecordingStartDelaySeconds": 1,
                "videoRecordingUrl": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "session",
        "accessor": "Session",
        "op": "remove",
        "method": "DELETE",
        "path": "/session/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "cost": 1,
            "costs": [
                {
                    "cachedPromptTokens": 1,
                    "completionTokens": 1,
                    "cost": 1,
                    "model": {},
                    "promptTokens": 1,
                    "reasoningTokens": 1,
                    "seconds": 1,
                    "type": "model",
                    "usageComplete": true
                }
            ],
            "name": "x",
            "status": "active",
            "expirationSeconds": 86400,
            "assistantId": "x",
            "assistant": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadId": "x",
            "squad": {
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "name": "x"
            },
            "messages": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "customer": {
                "assistantOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "email": "x",
                "extension": null,
                "externalId": "x",
                "name": "x",
                "number": "x",
                "numberE164CheckEnabled": true,
                "sipUri": "x",
                "squadOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                }
            },
            "customerId": "x",
            "phoneNumberId": "x",
            "phoneNumber": {
                "assistantId": "x",
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "message": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ringing"
                    }
                ],
                "name": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "smsEnabled": true,
                "squadId": "x",
                "twilioAccountSid": "x",
                "twilioApiKey": "x",
                "twilioApiSecret": "x",
                "twilioAuthToken": "x",
                "twilioPhoneNumber": "x",
                "workflowId": "x"
            },
            "artifact": {
                "assistantActivations": [
                    {
                        "assistantId": "x",
                        "assistantName": "x",
                        "assistantVersion": "x",
                        "squadVersion": "x"
                    }
                ],
                "logUrl": "x",
                "messages": [
                    {
                        "detectedThreats": [],
                        "duration": 1,
                        "endTime": 1,
                        "isFiltered": true,
                        "message": "x",
                        "metadata": {},
                        "originalMessage": "x",
                        "role": "x",
                        "secondsFromStart": 1,
                        "speakerLabel": "x",
                        "time": 1
                    }
                ],
                "messagesOpenAIFormatted": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "nodes": [
                    {
                        "messages": [],
                        "nodeName": "x",
                        "variableValues": {}
                    }
                ],
                "pcapUrl": "x",
                "performanceMetrics": {
                    "endpointingLatencyAverage": 1,
                    "fromTransportLatencyAverage": 1,
                    "modelLatencyAverage": 1,
                    "numAssistantInterrupted": 1,
                    "numUserInterrupted": 1,
                    "toTransportLatencyAverage": 1,
                    "transcriberLatencyAverage": 1,
                    "turnLatencies": [
                        {}
                    ],
                    "turnLatencyAverage": 1,
                    "voiceLatencyAverage": 1
                },
                "presignedAssistantUrl": "x",
                "presignedCustomerUrl": "x",
                "presignedLogUrl": "x",
                "presignedMonoUrl": "x",
                "presignedPcapUrl": "x",
                "presignedStereoUrl": "x",
                "presignedUrlsExpiresAt": "x",
                "presignedVideoUrl": "x",
                "recording": {
                    "mono": {},
                    "stereoUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "videoUrl": "x"
                },
                "recordingUrl": "x",
                "scorecards": {},
                "skippedStructuredOutputs": {},
                "stereoRecordingUrl": "x",
                "structuredOutputs": {},
                "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                "transcript": "x",
                "transfers": [
                    {
                        "destination": {},
                        "messages": [],
                        "mode": "blind-transfer",
                        "status": "connected",
                        "transcript": "x"
                    }
                ],
                "variableValues": {},
                "videoRecordingStartDelaySeconds": 1,
                "videoRecordingUrl": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "session",
        "accessor": "Session",
        "op": "update",
        "method": "PATCH",
        "path": "/session/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "cost": 1,
            "costs": [
                {
                    "cachedPromptTokens": 1,
                    "completionTokens": 1,
                    "cost": 1,
                    "model": {},
                    "promptTokens": 1,
                    "reasoningTokens": 1,
                    "seconds": 1,
                    "type": "model",
                    "usageComplete": true
                }
            ],
            "name": "x",
            "status": "active",
            "expirationSeconds": 86400,
            "assistantId": "x",
            "assistant": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {
                    "emotionRecognitionEnabled": true,
                    "knowledgeBase": {},
                    "maxTokens": 1,
                    "messages": [
                        {}
                    ],
                    "model": "claude-3-opus-20240229",
                    "numFastTurns": 1,
                    "provider": "anthropic",
                    "temperature": 1,
                    "thinking": {},
                    "toolIds": [
                        "x"
                    ],
                    "toolRefs": [
                        {}
                    ],
                    "tools": []
                },
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "assistantOverrides": {
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "backgroundSound": "office",
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "credentialIds": [
                    "x"
                ],
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                },
                "maxDurationSeconds": 600,
                "metadata": {},
                "model": {},
                "modelOutputInMessagesEnabled": false,
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "name": "x",
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "variableValues": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "voicemailDetection": "off",
                "voicemailMessage": "x"
            },
            "squadId": "x",
            "squad": {
                "members": [
                    {
                        "assistant": {},
                        "assistantDestinations": [],
                        "assistantId": "x",
                        "assistantOverrides": {},
                        "assistantVersion": "x"
                    }
                ],
                "membersOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "name": "x"
            },
            "messages": [
                {
                    "message": "x",
                    "role": "x",
                    "secondsFromStart": 1,
                    "time": 1
                }
            ],
            "customer": {
                "assistantOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                },
                "email": "x",
                "extension": null,
                "externalId": "x",
                "name": "x",
                "number": "x",
                "numberE164CheckEnabled": true,
                "sipUri": "x",
                "squadOverrides": {
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "backgroundSound": "office",
                    "backgroundSpeechDenoisingPlan": {},
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "credentials": [],
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "hooks": [],
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    },
                    "maxDurationSeconds": 600,
                    "metadata": {},
                    "model": {},
                    "modelOutputInMessagesEnabled": false,
                    "monitorPlan": {},
                    "name": "x",
                    "observabilityPlan": {},
                    "server": {},
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "tools:append": [],
                    "transcriber": {},
                    "transportConfigurations": [],
                    "variableValues": {},
                    "voice": {},
                    "voicemailDetection": "off",
                    "voicemailMessage": "x"
                }
            },
            "customerId": "x",
            "phoneNumberId": "x",
            "phoneNumber": {
                "assistantId": "x",
                "fallbackDestination": {
                    "callerId": "x",
                    "description": "x",
                    "extension": "x",
                    "message": "x",
                    "name": "x",
                    "number": "x",
                    "numberE164CheckEnabled": true,
                    "transferPlan": {},
                    "type": "number"
                },
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ringing"
                    }
                ],
                "name": "x",
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "smsEnabled": true,
                "squadId": "x",
                "twilioAccountSid": "x",
                "twilioApiKey": "x",
                "twilioApiSecret": "x",
                "twilioAuthToken": "x",
                "twilioPhoneNumber": "x",
                "workflowId": "x"
            },
            "artifact": {
                "assistantActivations": [
                    {
                        "assistantId": "x",
                        "assistantName": "x",
                        "assistantVersion": "x",
                        "squadVersion": "x"
                    }
                ],
                "logUrl": "x",
                "messages": [
                    {
                        "detectedThreats": [],
                        "duration": 1,
                        "endTime": 1,
                        "isFiltered": true,
                        "message": "x",
                        "metadata": {},
                        "originalMessage": "x",
                        "role": "x",
                        "secondsFromStart": 1,
                        "speakerLabel": "x",
                        "time": 1
                    }
                ],
                "messagesOpenAIFormatted": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "nodes": [
                    {
                        "messages": [],
                        "nodeName": "x",
                        "variableValues": {}
                    }
                ],
                "pcapUrl": "x",
                "performanceMetrics": {
                    "endpointingLatencyAverage": 1,
                    "fromTransportLatencyAverage": 1,
                    "modelLatencyAverage": 1,
                    "numAssistantInterrupted": 1,
                    "numUserInterrupted": 1,
                    "toTransportLatencyAverage": 1,
                    "transcriberLatencyAverage": 1,
                    "turnLatencies": [
                        {}
                    ],
                    "turnLatencyAverage": 1,
                    "voiceLatencyAverage": 1
                },
                "presignedAssistantUrl": "x",
                "presignedCustomerUrl": "x",
                "presignedLogUrl": "x",
                "presignedMonoUrl": "x",
                "presignedPcapUrl": "x",
                "presignedStereoUrl": "x",
                "presignedUrlsExpiresAt": "x",
                "presignedVideoUrl": "x",
                "recording": {
                    "mono": {},
                    "stereoUrl": "x",
                    "videoRecordingStartDelaySeconds": 1,
                    "videoUrl": "x"
                },
                "recordingUrl": "x",
                "scorecards": {},
                "skippedStructuredOutputs": {},
                "stereoRecordingUrl": "x",
                "structuredOutputs": {},
                "structuredOutputsLastUpdatedAt": "2026-01-01T00:00:00Z",
                "transcript": "x",
                "transfers": [
                    {
                        "destination": {},
                        "messages": [],
                        "mode": "blind-transfer",
                        "status": "connected",
                        "transcript": "x"
                    }
                ],
                "variableValues": {},
                "videoRecordingStartDelaySeconds": 1,
                "videoRecordingUrl": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "simulation",
        "accessor": "Simulation",
        "op": "list",
        "method": "GET",
        "path": "/eval/simulation",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id_any": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "standalone_only": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "idAny",
            "standaloneOnly",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "name": "Eligible Path with Confused User",
                "scenarioId": "x",
                "personalityId": "x",
                "path": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "simulation",
        "accessor": "Simulation",
        "op": "load",
        "method": "GET",
        "path": "/eval/simulation/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Eligible Path with Confused User",
            "scenarioId": "x",
            "personalityId": "x",
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "simulation",
        "accessor": "Simulation",
        "op": "load",
        "method": "GET",
        "path": "/eval/simulation/concurrency",
        "action": "concurrency",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "orgId": "x",
            "concurrencyLimit": 1,
            "activeSimulations": 1,
            "availableToStart": 1,
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "isDefault": true
        },
        "idField": "id"
    },
    {
        "entity": "simulation",
        "accessor": "Simulation",
        "op": "remove",
        "method": "DELETE",
        "path": "/eval/simulation/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Eligible Path with Confused User",
            "scenarioId": "x",
            "personalityId": "x",
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "simulation",
        "accessor": "Simulation",
        "op": "update",
        "method": "PATCH",
        "path": "/eval/simulation/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Eligible Path with Confused User",
            "scenarioId": "x",
            "personalityId": "x",
            "path": "x"
        },
        "idField": "id"
    },
    {
        "entity": "simulation_run",
        "accessor": "SimulationRun",
        "op": "create",
        "method": "POST",
        "path": "/eval/simulation/run",
        "args": [],
        "select": {},
        "headers": [
            {
                "name": "user_agent",
                "wire": "user-agent",
                "value": "h1"
            }
        ],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "orgId": "x",
            "status": "queued",
            "queuedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "endedAt": "2026-01-01T00:00:00Z",
            "endedReason": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "itemCounts": {
                "total": 1,
                "passed": 1,
                "failed": 1,
                "running": 1,
                "queued": 1,
                "canceled": 1,
                "distinctSimulationTotal": 1,
                "distinctSimulationFailed": 1
            },
            "simulations": [
                {
                    "type": "simulation",
                    "simulationId": "x",
                    "scenarioId": "x",
                    "scenario": {
                        "name": "Health Enrollment - Eligible Path",
                        "instructions": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
                        "evaluations": [],
                        "hooks": [],
                        "targetOverrides": {
                            "variableValues": {
                                "customerName": "Alice",
                                "orderId": "12345"
                            }
                        },
                        "toolMocks": [],
                        "path": "x"
                    },
                    "personalityId": "x",
                    "personality": {
                        "name": "x",
                        "assistant": {},
                        "path": "x"
                    },
                    "name": "x"
                }
            ],
            "target": {
                "type": "assistant",
                "assistantId": "x",
                "assistant": {
                    "transcriber": {},
                    "model": {},
                    "voice": {},
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "voicemailDetection": "off",
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "maxDurationSeconds": 600,
                    "backgroundSound": "office",
                    "modelOutputInMessagesEnabled": false,
                    "transportConfigurations": [],
                    "observabilityPlan": {},
                    "credentials": [],
                    "hooks": [],
                    "name": "x",
                    "voicemailMessage": "x",
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "metadata": {},
                    "backgroundSpeechDenoisingPlan": {},
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "monitorPlan": {},
                    "credentialIds": [
                        "x"
                    ],
                    "server": {},
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    }
                }
            },
            "iterations": 1,
            "transport": {
                "provider": "vapi.websocket"
            },
            "simulationRunItemIds": [
                "x"
            ],
            "message": "x",
            "url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "simulation_run",
        "accessor": "SimulationRun",
        "op": "load",
        "method": "GET",
        "path": "/eval/simulation/run",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "filter_status": "v1",
            "limit": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "status": "v1",
            "target_id": "v1",
            "target_type": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "status",
            "filterStatus",
            "targetType",
            "targetId",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "orgId": "x",
                "status": "queued",
                "queuedAt": "2026-01-01T00:00:00Z",
                "startedAt": "2026-01-01T00:00:00Z",
                "endedAt": "2026-01-01T00:00:00Z",
                "endedReason": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "itemCounts": {
                    "total": 1,
                    "passed": 1,
                    "failed": 1,
                    "running": 1,
                    "queued": 1,
                    "canceled": 1,
                    "distinctSimulationTotal": 1,
                    "distinctSimulationFailed": 1
                },
                "simulations": [
                    {
                        "type": "simulation",
                        "simulationId": "x",
                        "scenarioId": "x",
                        "scenario": {},
                        "personalityId": "x",
                        "personality": {},
                        "name": "x"
                    }
                ],
                "target": {
                    "type": "assistant",
                    "assistantId": "x",
                    "assistant": {}
                },
                "iterations": 1,
                "transport": {
                    "provider": "vapi.websocket"
                }
            }
        ],
        "idField": "id"
    },
    {
        "entity": "simulation_run",
        "accessor": "SimulationRun",
        "op": "load",
        "method": "GET",
        "path": "/eval/simulation/run/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "status": "queued",
            "queuedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "endedAt": "2026-01-01T00:00:00Z",
            "endedReason": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "itemCounts": {
                "total": 1,
                "passed": 1,
                "failed": 1,
                "running": 1,
                "queued": 1,
                "canceled": 1,
                "distinctSimulationTotal": 1,
                "distinctSimulationFailed": 1
            },
            "simulations": [
                {
                    "type": "simulation",
                    "simulationId": "x",
                    "scenarioId": "x",
                    "scenario": {
                        "name": "Health Enrollment - Eligible Path",
                        "instructions": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
                        "evaluations": [],
                        "hooks": [],
                        "targetOverrides": {
                            "variableValues": {
                                "customerName": "Alice",
                                "orderId": "12345"
                            }
                        },
                        "toolMocks": [],
                        "path": "x"
                    },
                    "personalityId": "x",
                    "personality": {
                        "name": "x",
                        "assistant": {},
                        "path": "x"
                    },
                    "name": "x"
                }
            ],
            "target": {
                "type": "assistant",
                "assistantId": "x",
                "assistant": {
                    "transcriber": {},
                    "model": {},
                    "voice": {},
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "voicemailDetection": "off",
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "maxDurationSeconds": 600,
                    "backgroundSound": "office",
                    "modelOutputInMessagesEnabled": false,
                    "transportConfigurations": [],
                    "observabilityPlan": {},
                    "credentials": [],
                    "hooks": [],
                    "name": "x",
                    "voicemailMessage": "x",
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "metadata": {},
                    "backgroundSpeechDenoisingPlan": {},
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "monitorPlan": {},
                    "credentialIds": [
                        "x"
                    ],
                    "server": {},
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    }
                }
            },
            "iterations": 1,
            "transport": {
                "provider": "vapi.websocket"
            }
        },
        "idField": "id"
    },
    {
        "entity": "simulation_run",
        "accessor": "SimulationRun",
        "op": "update",
        "method": "PATCH",
        "path": "/eval/simulation/run/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "status": "queued",
            "queuedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "endedAt": "2026-01-01T00:00:00Z",
            "endedReason": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "itemCounts": {
                "total": 1,
                "passed": 1,
                "failed": 1,
                "running": 1,
                "queued": 1,
                "canceled": 1,
                "distinctSimulationTotal": 1,
                "distinctSimulationFailed": 1
            },
            "simulations": [
                {
                    "type": "simulation",
                    "simulationId": "x",
                    "scenarioId": "x",
                    "scenario": {
                        "name": "Health Enrollment - Eligible Path",
                        "instructions": "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
                        "evaluations": [],
                        "hooks": [],
                        "targetOverrides": {
                            "variableValues": {
                                "customerName": "Alice",
                                "orderId": "12345"
                            }
                        },
                        "toolMocks": [],
                        "path": "x"
                    },
                    "personalityId": "x",
                    "personality": {
                        "name": "x",
                        "assistant": {},
                        "path": "x"
                    },
                    "name": "x"
                }
            ],
            "target": {
                "type": "assistant",
                "assistantId": "x",
                "assistant": {
                    "transcriber": {},
                    "model": {},
                    "voice": {},
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "voicemailDetection": "off",
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "maxDurationSeconds": 600,
                    "backgroundSound": "office",
                    "modelOutputInMessagesEnabled": false,
                    "transportConfigurations": [],
                    "observabilityPlan": {},
                    "credentials": [],
                    "hooks": [],
                    "name": "x",
                    "voicemailMessage": "x",
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "securityFilterPlan": {}
                    },
                    "metadata": {},
                    "backgroundSpeechDenoisingPlan": {},
                    "analysisPlan": {},
                    "artifactPlan": {},
                    "startSpeakingPlan": {},
                    "stopSpeakingPlan": {},
                    "monitorPlan": {},
                    "credentialIds": [
                        "x"
                    ],
                    "server": {},
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    }
                }
            },
            "iterations": 1,
            "transport": {
                "provider": "vapi.websocket"
            }
        },
        "idField": "id"
    },
    {
        "entity": "simulation_run_item",
        "accessor": "SimulationRunItem",
        "op": "create",
        "method": "POST",
        "path": "/eval/simulation/run/{id}/item/{itemId}/generate",
        "action": "generate",
        "args": [
            {
                "name": "item_id",
                "wire": "itemId",
                "value": "p1"
            },
            {
                "name": "run_id",
                "wire": "id",
                "value": "p2"
            }
        ],
        "select": {
            "force": "v1",
            "persist": "v1"
        },
        "headers": [],
        "query": [
            "force",
            "persist"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "simulation_run_item",
        "accessor": "SimulationRunItem",
        "op": "list",
        "method": "GET",
        "path": "/eval/simulation/run/{id}/item",
        "args": [
            {
                "name": "run_id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "limit": "v1",
            "page": "v1",
            "simulation_id": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "status": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1",
            "run_id": "v1"
        },
        "headers": [],
        "query": [
            "simulationId",
            "runId",
            "status",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "orgId": "x",
                "simulationId": "x",
                "status": "queued",
                "queuedAt": "2026-01-01T00:00:00Z",
                "startedAt": "2026-01-01T00:00:00Z",
                "completedAt": "2026-01-01T00:00:00Z",
                "failedAt": "2026-01-01T00:00:00Z",
                "canceledAt": "2026-01-01T00:00:00Z",
                "failureReason": "x",
                "callId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "runId": "x",
                "hooks": [
                    {
                        "on": "simulation.run.started",
                        "do": []
                    }
                ],
                "iterationNumber": 1,
                "sessionId": "x",
                "scenarioId": "x",
                "personalityId": "x",
                "metadata": {
                    "assistant": {},
                    "squad": {},
                    "scenario": {},
                    "personality": {},
                    "simulation": {},
                    "call": {
                        "transcript": "x",
                        "messages": [],
                        "recordingUrl": "x",
                        "monitor": {}
                    },
                    "hooks": {}
                },
                "results": {
                    "evaluations": [
                        {
                            "structuredOutputId": "x",
                            "name": "x",
                            "path": "x",
                            "description": "x",
                            "schema": {},
                            "comparator": "=",
                            "passed": true,
                            "required": true,
                            "error": "x",
                            "isSkipped": true,
                            "skipReason": "x"
                        }
                    ],
                    "passed": true,
                    "latencyMetrics": {
                        "turnCount": 1,
                        "avgTurn": 1,
                        "avgTranscriber": 1,
                        "avgModel": 1,
                        "avgVoice": 1,
                        "avgEndpointing": 1
                    }
                },
                "improvementSuggestions": {
                    "analysis": "x",
                    "systemPromptSuggestions": [
                        {
                            "issue": "x",
                            "suggestion": "x"
                        }
                    ],
                    "toolSuggestions": [
                        {
                            "issue": "x",
                            "suggestion": "x"
                        }
                    ],
                    "scenarioSuggestions": [
                        {
                            "issue": "x",
                            "suggestion": "x"
                        }
                    ],
                    "suggestedSystemPrompt": "x"
                },
                "configurations": {
                    "transport": {
                        "provider": "vapi.websocket"
                    }
                }
            }
        ],
        "idField": "id"
    },
    {
        "entity": "simulation_run_item",
        "accessor": "SimulationRunItem",
        "op": "load",
        "method": "GET",
        "path": "/eval/simulation/run/{id}/item/{itemId}",
        "args": [
            {
                "name": "id",
                "wire": "itemId",
                "value": "p1"
            },
            {
                "name": "run_id",
                "wire": "id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "simulationId": "x",
            "status": "queued",
            "queuedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "completedAt": "2026-01-01T00:00:00Z",
            "failedAt": "2026-01-01T00:00:00Z",
            "canceledAt": "2026-01-01T00:00:00Z",
            "failureReason": "x",
            "callId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "runId": "x",
            "hooks": [
                {
                    "on": "simulation.run.started",
                    "do": [
                        {}
                    ]
                }
            ],
            "iterationNumber": 1,
            "sessionId": "x",
            "scenarioId": "x",
            "personalityId": "x",
            "metadata": {
                "assistant": {},
                "squad": {},
                "scenario": {},
                "personality": {},
                "simulation": {},
                "call": {
                    "transcript": "x",
                    "messages": [
                        {}
                    ],
                    "recordingUrl": "x",
                    "monitor": {}
                },
                "hooks": {}
            },
            "results": {
                "evaluations": [
                    {
                        "structuredOutputId": "x",
                        "name": "x",
                        "path": "x",
                        "description": "x",
                        "schema": {},
                        "extractedValue": 1,
                        "expectedValue": 1,
                        "comparator": "=",
                        "passed": true,
                        "required": true,
                        "error": "x",
                        "isSkipped": true,
                        "skipReason": "x"
                    }
                ],
                "passed": true,
                "latencyMetrics": {
                    "turnCount": 1,
                    "avgTurn": 1,
                    "avgTranscriber": 1,
                    "avgModel": 1,
                    "avgVoice": 1,
                    "avgEndpointing": 1
                }
            },
            "improvementSuggestions": {
                "analysis": "x",
                "systemPromptSuggestions": [
                    {
                        "issue": "x",
                        "suggestion": "x"
                    }
                ],
                "toolSuggestions": [
                    {
                        "issue": "x",
                        "suggestion": "x"
                    }
                ],
                "scenarioSuggestions": [
                    {
                        "issue": "x",
                        "suggestion": "x"
                    }
                ],
                "suggestedSystemPrompt": "x"
            },
            "configurations": {
                "transport": {
                    "provider": "vapi.websocket"
                }
            }
        },
        "idField": "id"
    },
    {
        "entity": "simulation_run_item",
        "accessor": "SimulationRunItem",
        "op": "update",
        "method": "PATCH",
        "path": "/eval/simulation/run/{id}/item/{itemId}",
        "args": [
            {
                "name": "id",
                "wire": "itemId",
                "value": "p1"
            },
            {
                "name": "run_id",
                "wire": "id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "simulationId": "x",
            "status": "queued",
            "queuedAt": "2026-01-01T00:00:00Z",
            "startedAt": "2026-01-01T00:00:00Z",
            "completedAt": "2026-01-01T00:00:00Z",
            "failedAt": "2026-01-01T00:00:00Z",
            "canceledAt": "2026-01-01T00:00:00Z",
            "failureReason": "x",
            "callId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "runId": "x",
            "hooks": [
                {
                    "on": "simulation.run.started",
                    "do": [
                        {}
                    ]
                }
            ],
            "iterationNumber": 1,
            "sessionId": "x",
            "scenarioId": "x",
            "personalityId": "x",
            "metadata": {
                "assistant": {},
                "squad": {},
                "scenario": {},
                "personality": {},
                "simulation": {},
                "call": {
                    "transcript": "x",
                    "messages": [
                        {}
                    ],
                    "recordingUrl": "x",
                    "monitor": {}
                },
                "hooks": {}
            },
            "results": {
                "evaluations": [
                    {
                        "structuredOutputId": "x",
                        "name": "x",
                        "path": "x",
                        "description": "x",
                        "schema": {},
                        "extractedValue": 1,
                        "expectedValue": 1,
                        "comparator": "=",
                        "passed": true,
                        "required": true,
                        "error": "x",
                        "isSkipped": true,
                        "skipReason": "x"
                    }
                ],
                "passed": true,
                "latencyMetrics": {
                    "turnCount": 1,
                    "avgTurn": 1,
                    "avgTranscriber": 1,
                    "avgModel": 1,
                    "avgVoice": 1,
                    "avgEndpointing": 1
                }
            },
            "improvementSuggestions": {
                "analysis": "x",
                "systemPromptSuggestions": [
                    {
                        "issue": "x",
                        "suggestion": "x"
                    }
                ],
                "toolSuggestions": [
                    {
                        "issue": "x",
                        "suggestion": "x"
                    }
                ],
                "scenarioSuggestions": [
                    {
                        "issue": "x",
                        "suggestion": "x"
                    }
                ],
                "suggestedSystemPrompt": "x"
            },
            "configurations": {
                "transport": {
                    "provider": "vapi.websocket"
                }
            }
        },
        "idField": "id"
    },
    {
        "entity": "simulation_suite",
        "accessor": "SimulationSuite",
        "op": "create",
        "method": "POST",
        "path": "/eval/simulation/suite/{id}/duplicate",
        "args": [
            {
                "name": "suite_id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Checkout Flow Tests",
            "slackWebhookUrl": "x",
            "path": "x",
            "simulationIds": [
                "x"
            ],
            "targetAssignments": [
                {
                    "targetType": "assistant",
                    "targetId": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "simulation_suite",
        "accessor": "SimulationSuite",
        "op": "create",
        "method": "POST",
        "path": "/eval/simulation/suite",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Checkout Flow Tests",
            "slackWebhookUrl": "x",
            "path": "x",
            "simulationIds": [
                "x"
            ],
            "targetAssignments": [
                {
                    "targetType": "assistant",
                    "targetId": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "simulation_suite",
        "accessor": "SimulationSuite",
        "op": "list",
        "method": "GET",
        "path": "/eval/simulation/suite",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "limit": "v1",
            "name": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "name",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "name": "Checkout Flow Tests",
                "slackWebhookUrl": "x",
                "path": "x",
                "simulationIds": [
                    "x"
                ],
                "targetAssignments": [
                    {
                        "targetType": "assistant",
                        "targetId": "x"
                    }
                ]
            }
        ],
        "idField": "id"
    },
    {
        "entity": "simulation_suite",
        "accessor": "SimulationSuite",
        "op": "load",
        "method": "GET",
        "path": "/eval/simulation/suite/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Checkout Flow Tests",
            "slackWebhookUrl": "x",
            "path": "x",
            "simulationIds": [
                "x"
            ],
            "targetAssignments": [
                {
                    "targetType": "assistant",
                    "targetId": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "simulation_suite",
        "accessor": "SimulationSuite",
        "op": "remove",
        "method": "DELETE",
        "path": "/eval/simulation/suite/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Checkout Flow Tests",
            "slackWebhookUrl": "x",
            "path": "x",
            "simulationIds": [
                "x"
            ],
            "targetAssignments": [
                {
                    "targetType": "assistant",
                    "targetId": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "simulation_suite",
        "accessor": "SimulationSuite",
        "op": "update",
        "method": "PATCH",
        "path": "/eval/simulation/suite/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "Checkout Flow Tests",
            "slackWebhookUrl": "x",
            "path": "x",
            "simulationIds": [
                "x"
            ],
            "targetAssignments": [
                {
                    "targetType": "assistant",
                    "targetId": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "squad",
        "accessor": "Squad",
        "op": "create",
        "method": "POST",
        "path": "/squad",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "latestVersion": "x",
            "modelDeprecations": [
                {
                    "slot": "model.fallbackModels[1]",
                    "provider": "openai",
                    "model": "gpt-4-1106-preview",
                    "deprecationDate": "2025-09-26",
                    "retirementDate": "2026-03-26",
                    "replacementModel": "gpt-5"
                }
            ],
            "name": "x",
            "members": [
                {
                    "assistantVersion": "x",
                    "assistantDestinations": [
                        {
                            "assistantName": "x",
                            "description": "x",
                            "name": "x",
                            "transferMode": "rolling-history",
                            "type": "assistant"
                        }
                    ],
                    "assistantId": "x",
                    "assistant": {},
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    }
                }
            ],
            "membersOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "squad",
        "accessor": "Squad",
        "op": "list",
        "method": "GET",
        "path": "/squad",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id_any": "v1",
            "limit": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "idAny",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "latestVersion": "x",
                "modelDeprecations": [
                    {
                        "slot": "model.fallbackModels[1]",
                        "provider": "openai",
                        "model": "gpt-4-1106-preview",
                        "deprecationDate": "2025-09-26",
                        "retirementDate": "2026-03-26",
                        "replacementModel": "gpt-5"
                    }
                ],
                "name": "x",
                "members": [
                    {
                        "assistantVersion": "x",
                        "assistantDestinations": [
                            {}
                        ],
                        "assistantId": "x",
                        "assistant": {},
                        "assistantOverrides": {
                            "analysisPlan": {},
                            "artifactPlan": {},
                            "backgroundSpeechDenoisingPlan": {},
                            "clientMessages": [
                                "conversation-update",
                                "function-call",
                                "hang"
                            ],
                            "compliancePlan": {},
                            "credentialIds": [],
                            "credentials": [],
                            "endCallMessage": "x",
                            "endCallPhrases": [],
                            "firstMessage": "Hello! How can I help you today?",
                            "firstMessageInterruptionsEnabled": true,
                            "firstMessageMode": "assistant-speaks-first",
                            "hooks": [],
                            "keypadInputPlan": {},
                            "maxDurationSeconds": 600,
                            "metadata": {},
                            "modelOutputInMessagesEnabled": false,
                            "monitorPlan": {},
                            "name": "x",
                            "observabilityPlan": {},
                            "server": {},
                            "serverMessages": [
                                "conversation-update",
                                "end-of-call-report",
                                "function-call"
                            ],
                            "startSpeakingPlan": {},
                            "stopSpeakingPlan": {},
                            "tools:append": [],
                            "transportConfigurations": [],
                            "variableValues": {},
                            "voicemailMessage": "x"
                        }
                    }
                ],
                "membersOverrides": {
                    "transcriber": {
                        "agentContext": "x",
                        "agentContextAutoUpdateEnabled": true,
                        "confidenceThreshold": 0.4,
                        "disablePartialTranscripts": true,
                        "endOfTurnConfidenceThreshold": 0.7,
                        "endUtteranceSilenceThreshold": 1,
                        "fallbackPlan": {},
                        "formatTurns": true,
                        "keytermsPrompt": [],
                        "language": "multi",
                        "languageCodes": [],
                        "maxTurnSilence": 400,
                        "minEndOfTurnSilenceWhenConfident": 160,
                        "mode": "max_accuracy",
                        "prompt": "x",
                        "provider": "assembly-ai",
                        "realtimeUrl": "x",
                        "speechModel": "universal-streaming-english",
                        "vadAssistedEndpointingEnabled": true,
                        "wordBoost": [],
                        "wordFinalizationMaxWaitTime": 160
                    },
                    "model": {},
                    "voice": {
                        "cachingEnabled": true,
                        "chunkPlan": {},
                        "fallbackPlan": {},
                        "provider": "azure",
                        "speed": 1
                    },
                    "firstMessage": "Hello! How can I help you today?",
                    "firstMessageInterruptionsEnabled": true,
                    "firstMessageMode": "assistant-speaks-first",
                    "voicemailDetection": "off",
                    "clientMessages": [
                        "conversation-update",
                        "function-call",
                        "hang"
                    ],
                    "serverMessages": [
                        "conversation-update",
                        "end-of-call-report",
                        "function-call"
                    ],
                    "maxDurationSeconds": 600,
                    "backgroundSound": "office",
                    "modelOutputInMessagesEnabled": false,
                    "transportConfigurations": [
                        {}
                    ],
                    "observabilityPlan": {
                        "metadata": {},
                        "promptName": "x",
                        "promptVersion": 1,
                        "provider": "langfuse",
                        "tags": [],
                        "traceName": "x"
                    },
                    "credentials": [
                        {}
                    ],
                    "hooks": [
                        {}
                    ],
                    "tools:append": [
                        {}
                    ],
                    "variableValues": {},
                    "name": "x",
                    "voicemailMessage": "x",
                    "endCallMessage": "x",
                    "endCallPhrases": [
                        "x"
                    ],
                    "compliancePlan": {
                        "hipaaEnabled": true,
                        "pciEnabled": {
                            "pciEnabled": false
                        },
                        "recordingConsentPlan": {},
                        "securityFilterPlan": {}
                    },
                    "metadata": {},
                    "backgroundSpeechDenoisingPlan": {
                        "fourierDenoisingPlan": {},
                        "smartDenoisingPlan": {}
                    },
                    "analysisPlan": {
                        "minMessagesThreshold": 1,
                        "outcomeIds": [],
                        "structuredDataMultiPlan": [],
                        "structuredDataPlan": {},
                        "successEvaluationPlan": {},
                        "summaryPlan": {}
                    },
                    "artifactPlan": {
                        "fullMessageHistoryEnabled": false,
                        "loggingEnabled": true,
                        "loggingPath": "x",
                        "loggingUseCustomStorageEnabled": true,
                        "pcapEnabled": true,
                        "pcapS3PathPrefix": "/pcaps",
                        "pcapUseCustomStorageEnabled": true,
                        "recordingEnabled": true,
                        "recordingFormat": "wav;l16",
                        "recordingPath": "x",
                        "recordingUseCustomStorageEnabled": true,
                        "scorecardIds": [],
                        "scorecards": [],
                        "structuredOutputIds": [],
                        "structuredOutputs": [],
                        "transcriptPlan": {},
                        "videoRecordingEnabled": false
                    },
                    "startSpeakingPlan": {
                        "customEndpointingRules": [],
                        "smartEndpointingEnabled": false,
                        "transcriptionEndpointingPlan": {},
                        "waitSeconds": 0.4
                    },
                    "stopSpeakingPlan": {
                        "acknowledgementPhrases": [
                            "i understand",
                            "i see",
                            "i got it"
                        ],
                        "backoffSeconds": 1,
                        "interruptionPhrases": [
                            "stop",
                            "shut",
                            "up"
                        ],
                        "numWords": 0,
                        "voiceSeconds": 0.2
                    },
                    "monitorPlan": {
                        "controlAuthenticationEnabled": false,
                        "controlEnabled": false,
                        "listenAuthenticationEnabled": false,
                        "listenEnabled": false,
                        "monitorIds": [
                            "123e4567-e89b-12d3-a456-426614174000"
                        ]
                    },
                    "credentialIds": [
                        "x"
                    ],
                    "server": {
                        "backoffPlan": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "encryptedPaths": [],
                        "headers": {},
                        "staticIpAddressesEnabled": false,
                        "timeoutSeconds": 20,
                        "url": "x"
                    },
                    "keypadInputPlan": {
                        "delimiters": "#",
                        "enabled": true,
                        "timeoutSeconds": 1
                    }
                },
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "squad",
        "accessor": "Squad",
        "op": "load",
        "method": "GET",
        "path": "/squad/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "latestVersion": "x",
            "modelDeprecations": [
                {
                    "slot": "model.fallbackModels[1]",
                    "provider": "openai",
                    "model": "gpt-4-1106-preview",
                    "deprecationDate": "2025-09-26",
                    "retirementDate": "2026-03-26",
                    "replacementModel": "gpt-5"
                }
            ],
            "name": "x",
            "members": [
                {
                    "assistantVersion": "x",
                    "assistantDestinations": [
                        {
                            "assistantName": "x",
                            "description": "x",
                            "name": "x",
                            "transferMode": "rolling-history",
                            "type": "assistant"
                        }
                    ],
                    "assistantId": "x",
                    "assistant": {},
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    }
                }
            ],
            "membersOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "squad",
        "accessor": "Squad",
        "op": "remove",
        "method": "DELETE",
        "path": "/squad/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "latestVersion": "x",
            "modelDeprecations": [
                {
                    "slot": "model.fallbackModels[1]",
                    "provider": "openai",
                    "model": "gpt-4-1106-preview",
                    "deprecationDate": "2025-09-26",
                    "retirementDate": "2026-03-26",
                    "replacementModel": "gpt-5"
                }
            ],
            "name": "x",
            "members": [
                {
                    "assistantVersion": "x",
                    "assistantDestinations": [
                        {
                            "assistantName": "x",
                            "description": "x",
                            "name": "x",
                            "transferMode": "rolling-history",
                            "type": "assistant"
                        }
                    ],
                    "assistantId": "x",
                    "assistant": {},
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    }
                }
            ],
            "membersOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "squad",
        "accessor": "Squad",
        "op": "update",
        "method": "PATCH",
        "path": "/squad/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "latestVersion": "x",
            "modelDeprecations": [
                {
                    "slot": "model.fallbackModels[1]",
                    "provider": "openai",
                    "model": "gpt-4-1106-preview",
                    "deprecationDate": "2025-09-26",
                    "retirementDate": "2026-03-26",
                    "replacementModel": "gpt-5"
                }
            ],
            "name": "x",
            "members": [
                {
                    "assistantVersion": "x",
                    "assistantDestinations": [
                        {
                            "assistantName": "x",
                            "description": "x",
                            "name": "x",
                            "transferMode": "rolling-history",
                            "type": "assistant"
                        }
                    ],
                    "assistantId": "x",
                    "assistant": {},
                    "assistantOverrides": {
                        "analysisPlan": {},
                        "artifactPlan": {},
                        "backgroundSound": "office",
                        "backgroundSpeechDenoisingPlan": {},
                        "clientMessages": [
                            "conversation-update",
                            "function-call",
                            "hang"
                        ],
                        "compliancePlan": {
                            "hipaaEnabled": true,
                            "pciEnabled": {
                                "pciEnabled": false
                            },
                            "securityFilterPlan": {}
                        },
                        "credentialIds": [
                            "x"
                        ],
                        "credentials": [],
                        "endCallMessage": "x",
                        "endCallPhrases": [
                            "x"
                        ],
                        "firstMessage": "Hello! How can I help you today?",
                        "firstMessageInterruptionsEnabled": true,
                        "firstMessageMode": "assistant-speaks-first",
                        "hooks": [],
                        "keypadInputPlan": {
                            "delimiters": "#",
                            "enabled": true,
                            "timeoutSeconds": 1
                        },
                        "maxDurationSeconds": 600,
                        "metadata": {},
                        "model": {},
                        "modelOutputInMessagesEnabled": false,
                        "monitorPlan": {},
                        "name": "x",
                        "observabilityPlan": {},
                        "server": {},
                        "serverMessages": [
                            "conversation-update",
                            "end-of-call-report",
                            "function-call"
                        ],
                        "startSpeakingPlan": {},
                        "stopSpeakingPlan": {},
                        "tools:append": [],
                        "transcriber": {},
                        "transportConfigurations": [],
                        "variableValues": {},
                        "voice": {},
                        "voicemailDetection": "off",
                        "voicemailMessage": "x"
                    }
                }
            ],
            "membersOverrides": {
                "transcriber": {
                    "agentContext": "x",
                    "agentContextAutoUpdateEnabled": true,
                    "confidenceThreshold": 0.4,
                    "disablePartialTranscripts": true,
                    "endOfTurnConfidenceThreshold": 0.7,
                    "endUtteranceSilenceThreshold": 1,
                    "fallbackPlan": {},
                    "formatTurns": true,
                    "keytermsPrompt": [
                        "x"
                    ],
                    "language": "multi",
                    "languageCodes": [
                        "en"
                    ],
                    "maxTurnSilence": 400,
                    "minEndOfTurnSilenceWhenConfident": 160,
                    "mode": "max_accuracy",
                    "prompt": "x",
                    "provider": "assembly-ai",
                    "realtimeUrl": "x",
                    "speechModel": "universal-streaming-english",
                    "vadAssistedEndpointingEnabled": true,
                    "wordBoost": [
                        "x"
                    ],
                    "wordFinalizationMaxWaitTime": 160
                },
                "model": {},
                "voice": {
                    "cachingEnabled": true,
                    "chunkPlan": {},
                    "fallbackPlan": {},
                    "provider": "azure",
                    "speed": 1,
                    "voiceId": "andrew"
                },
                "firstMessage": "Hello! How can I help you today?",
                "firstMessageInterruptionsEnabled": true,
                "firstMessageMode": "assistant-speaks-first",
                "voicemailDetection": "off",
                "clientMessages": [
                    "conversation-update",
                    "function-call",
                    "hang"
                ],
                "serverMessages": [
                    "conversation-update",
                    "end-of-call-report",
                    "function-call"
                ],
                "maxDurationSeconds": 600,
                "backgroundSound": "office",
                "modelOutputInMessagesEnabled": false,
                "transportConfigurations": [
                    {
                        "provider": "twilio",
                        "record": false,
                        "recordingChannels": "mono",
                        "timeout": 60
                    }
                ],
                "observabilityPlan": {
                    "metadata": {},
                    "promptName": "x",
                    "promptVersion": 1,
                    "provider": "langfuse",
                    "tags": [
                        "x"
                    ],
                    "traceName": "x"
                },
                "credentials": [
                    {
                        "apiKey": "x",
                        "name": "x",
                        "provider": "anthropic"
                    }
                ],
                "hooks": [
                    {
                        "do": [],
                        "filters": [],
                        "on": "call.ending"
                    }
                ],
                "tools:append": [
                    {
                        "backoffPlan": {},
                        "body": {},
                        "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                        "description": "x",
                        "encryptedPaths": [],
                        "headers": {},
                        "messages": [],
                        "method": "POST",
                        "name": "x",
                        "parameters": [],
                        "rejectionPlan": {},
                        "timeoutSeconds": 20,
                        "type": "apiRequest",
                        "url": "x",
                        "variableExtractionPlan": {}
                    }
                ],
                "variableValues": {},
                "name": "x",
                "voicemailMessage": "x",
                "endCallMessage": "x",
                "endCallPhrases": [
                    "x"
                ],
                "compliancePlan": {
                    "hipaaEnabled": true,
                    "pciEnabled": {
                        "pciEnabled": false
                    },
                    "recordingConsentPlan": {
                        "firstMessageMode": "assistant-speaks-first",
                        "message": "x",
                        "type": "stay-on-line",
                        "waitSeconds": 3
                    },
                    "securityFilterPlan": {
                        "enabled": true,
                        "filters": "[{ type: \"sql-injection\" }, { type: \"xss\" }]",
                        "mode": "sanitize",
                        "replacementText": "x"
                    }
                },
                "metadata": {},
                "backgroundSpeechDenoisingPlan": {
                    "fourierDenoisingPlan": {},
                    "smartDenoisingPlan": {}
                },
                "analysisPlan": {
                    "minMessagesThreshold": 1,
                    "outcomeIds": [
                        "x"
                    ],
                    "structuredDataMultiPlan": [
                        {}
                    ],
                    "structuredDataPlan": {},
                    "successEvaluationPlan": {},
                    "summaryPlan": {}
                },
                "artifactPlan": {
                    "fullMessageHistoryEnabled": false,
                    "loggingEnabled": true,
                    "loggingPath": "x",
                    "loggingUseCustomStorageEnabled": true,
                    "pcapEnabled": true,
                    "pcapS3PathPrefix": "/pcaps",
                    "pcapUseCustomStorageEnabled": true,
                    "recordingEnabled": true,
                    "recordingFormat": "wav;l16",
                    "recordingPath": "x",
                    "recordingUseCustomStorageEnabled": true,
                    "scorecardIds": [
                        "x"
                    ],
                    "scorecards": [
                        {}
                    ],
                    "structuredOutputIds": [
                        "x"
                    ],
                    "structuredOutputs": [
                        {}
                    ],
                    "transcriptPlan": {},
                    "videoRecordingEnabled": false
                },
                "startSpeakingPlan": {
                    "customEndpointingRules": [],
                    "smartEndpointingEnabled": false,
                    "smartEndpointingPlan": {},
                    "transcriptionEndpointingPlan": {},
                    "waitSeconds": 0.4
                },
                "stopSpeakingPlan": {
                    "acknowledgementPhrases": [
                        "i understand",
                        "i see",
                        "i got it"
                    ],
                    "backoffSeconds": 1,
                    "interruptionPhrases": [
                        "stop",
                        "shut",
                        "up"
                    ],
                    "numWords": 0,
                    "voiceSeconds": 0.2
                },
                "monitorPlan": {
                    "controlAuthenticationEnabled": false,
                    "controlEnabled": false,
                    "listenAuthenticationEnabled": false,
                    "listenEnabled": false,
                    "monitorIds": [
                        "123e4567-e89b-12d3-a456-426614174000"
                    ]
                },
                "credentialIds": [
                    "x"
                ],
                "server": {
                    "backoffPlan": {},
                    "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                    "encryptedPaths": [
                        "x"
                    ],
                    "headers": {},
                    "staticIpAddressesEnabled": false,
                    "timeoutSeconds": 20,
                    "url": "x"
                },
                "keypadInputPlan": {
                    "delimiters": "#",
                    "enabled": true,
                    "timeoutSeconds": 1
                }
            },
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "structured_output",
        "accessor": "StructuredOutput",
        "op": "create",
        "method": "POST",
        "path": "/structured-output",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "type": "ai",
            "regex": "x",
            "model": {
                "maxTokens": 1,
                "messages": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "model": "gpt-5.6-sol",
                "provider": "openai",
                "temperature": 1
            },
            "compliancePlan": {
                "forceStoreOnHipaaEnabled": false
            },
            "conditions": [
                {
                    "count": 4,
                    "type": "minMessages"
                },
                {
                    "seconds": 10,
                    "type": "minCallDuration"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "description": "x",
            "assistantIds": [
                "x"
            ],
            "workflowIds": [
                "x"
            ],
            "schema": {
                "description": "x",
                "enum": [
                    "x"
                ],
                "format": "date-time",
                "items": {},
                "pattern": "x",
                "properties": {},
                "required": [
                    "x"
                ],
                "title": "x",
                "type": "string"
            }
        },
        "idField": "id"
    },
    {
        "entity": "structured_output",
        "accessor": "StructuredOutput",
        "op": "create",
        "method": "POST",
        "path": "/structured-output/run",
        "action": "run",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "skipped": {}
        },
        "idField": "id"
    },
    {
        "entity": "structured_output",
        "accessor": "StructuredOutput",
        "op": "list",
        "method": "GET",
        "path": "/structured-output",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "id": "v1",
            "limit": "v1",
            "name": "v1",
            "page": "v1",
            "sort_by": "v1",
            "sort_order": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "id",
            "name",
            "page",
            "sortOrder",
            "sortBy",
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "results": [
                {
                    "assistantIds": [
                        "x"
                    ],
                    "compliancePlan": {
                        "forceStoreOnHipaaEnabled": false
                    },
                    "conditions": [
                        {
                            "count": 4,
                            "type": "minMessages"
                        },
                        {
                            "seconds": 10,
                            "type": "minCallDuration"
                        }
                    ],
                    "createdAt": "2026-01-01T00:00:00Z",
                    "description": "x",
                    "id": "x",
                    "model": {
                        "maxTokens": 1,
                        "messages": [
                            {}
                        ],
                        "model": "gpt-5.6-sol",
                        "provider": "openai",
                        "temperature": 1
                    },
                    "name": "x",
                    "orgId": "x",
                    "regex": "x",
                    "schema": {
                        "description": "x",
                        "enum": [
                            "x"
                        ],
                        "format": "date-time",
                        "items": {},
                        "pattern": "x",
                        "properties": {},
                        "required": [
                            "x"
                        ],
                        "title": "x",
                        "type": "string"
                    },
                    "type": "ai",
                    "updatedAt": "2026-01-01T00:00:00Z",
                    "workflowIds": [
                        "x"
                    ]
                }
            ],
            "metadata": {
                "createdAtGe": "2026-01-01T00:00:00Z",
                "createdAtLe": "2026-01-01T00:00:00Z",
                "currentPage": 1,
                "hasNextPage": true,
                "itemsBeyondRetention": true,
                "itemsPerPage": 1,
                "nextCursor": "x",
                "sortOrder": "ASC",
                "totalItems": 1,
                "totalPages": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "structured_output",
        "accessor": "StructuredOutput",
        "op": "load",
        "method": "GET",
        "path": "/structured-output/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "ai",
            "regex": "x",
            "model": {
                "maxTokens": 1,
                "messages": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "model": "gpt-5.6-sol",
                "provider": "openai",
                "temperature": 1
            },
            "compliancePlan": {
                "forceStoreOnHipaaEnabled": false
            },
            "conditions": [
                {
                    "count": 4,
                    "type": "minMessages"
                },
                {
                    "seconds": 10,
                    "type": "minCallDuration"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "description": "x",
            "assistantIds": [
                "x"
            ],
            "workflowIds": [
                "x"
            ],
            "schema": {
                "description": "x",
                "enum": [
                    "x"
                ],
                "format": "date-time",
                "items": {},
                "pattern": "x",
                "properties": {},
                "required": [
                    "x"
                ],
                "title": "x",
                "type": "string"
            }
        },
        "idField": "id"
    },
    {
        "entity": "structured_output",
        "accessor": "StructuredOutput",
        "op": "remove",
        "method": "DELETE",
        "path": "/structured-output/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "ai",
            "regex": "x",
            "model": {
                "maxTokens": 1,
                "messages": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "model": "gpt-5.6-sol",
                "provider": "openai",
                "temperature": 1
            },
            "compliancePlan": {
                "forceStoreOnHipaaEnabled": false
            },
            "conditions": [
                {
                    "count": 4,
                    "type": "minMessages"
                },
                {
                    "seconds": 10,
                    "type": "minCallDuration"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "description": "x",
            "assistantIds": [
                "x"
            ],
            "workflowIds": [
                "x"
            ],
            "schema": {
                "description": "x",
                "enum": [
                    "x"
                ],
                "format": "date-time",
                "items": {},
                "pattern": "x",
                "properties": {},
                "required": [
                    "x"
                ],
                "title": "x",
                "type": "string"
            }
        },
        "idField": "id"
    },
    {
        "entity": "structured_output",
        "accessor": "StructuredOutput",
        "op": "update",
        "method": "PATCH",
        "path": "/structured-output/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "schema_override": "v1"
        },
        "headers": [],
        "query": [
            "schemaOverride"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "type": "ai",
            "regex": "x",
            "model": {
                "maxTokens": 1,
                "messages": [
                    {
                        "content": "x",
                        "role": "assistant"
                    }
                ],
                "model": "gpt-5.6-sol",
                "provider": "openai",
                "temperature": 1
            },
            "compliancePlan": {
                "forceStoreOnHipaaEnabled": false
            },
            "conditions": [
                {
                    "count": 4,
                    "type": "minMessages"
                },
                {
                    "seconds": 10,
                    "type": "minCallDuration"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "name": "x",
            "description": "x",
            "assistantIds": [
                "x"
            ],
            "workflowIds": [
                "x"
            ],
            "schema": {
                "description": "x",
                "enum": [
                    "x"
                ],
                "format": "date-time",
                "items": {},
                "pattern": "x",
                "properties": {},
                "required": [
                    "x"
                ],
                "title": "x",
                "type": "string"
            }
        },
        "idField": "id"
    },
    {
        "entity": "tool",
        "accessor": "Tool",
        "op": "create",
        "method": "POST",
        "path": "/tool",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "latestVersion": "x",
            "messages": [
                {
                    "contents": [],
                    "type": "request-start",
                    "blocking": false,
                    "content": "x",
                    "conditions": [
                        {}
                    ]
                }
            ],
            "type": "apiRequest",
            "name": "x",
            "method": "POST",
            "timeoutSeconds": 20,
            "credentialId": "550e8400-e29b-41d4-a716-446655440000",
            "encryptedPaths": [
                "x"
            ],
            "parameters": [
                {
                    "key": "x",
                    "value": "x"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "rejectionPlan": {
                "conditions": [
                    {}
                ]
            },
            "description": "x",
            "url": "x",
            "body": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "x",
                "pattern": "x",
                "format": "date-time",
                "required": [
                    "x"
                ],
                "enum": [
                    "x"
                ],
                "title": "x"
            },
            "headers": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "x",
                "pattern": "x",
                "format": "date-time",
                "required": [
                    "x"
                ],
                "enum": [
                    "x"
                ],
                "title": "x"
            },
            "backoffPlan": {
                "type": "fixed",
                "maxRetries": 0,
                "baseDelaySeconds": 1,
                "excludedStatusCodes": [
                    400,
                    401,
                    403
                ]
            },
            "variableExtractionPlan": {
                "schema": {
                    "description": "x",
                    "enum": [],
                    "format": "date-time",
                    "items": {},
                    "pattern": "x",
                    "properties": {},
                    "required": [],
                    "title": "x",
                    "type": "string"
                },
                "aliases": [
                    {
                        "key": "x",
                        "value": "x"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "tool",
        "accessor": "Tool",
        "op": "list",
        "method": "GET",
        "path": "/tool",
        "args": [],
        "select": {
            "created_at_ge": "v1",
            "created_at_gt": "v1",
            "created_at_le": "v1",
            "created_at_lt": "v1",
            "limit": "v1",
            "updated_at_ge": "v1",
            "updated_at_gt": "v1",
            "updated_at_le": "v1",
            "updated_at_lt": "v1"
        },
        "headers": [],
        "query": [
            "limit",
            "createdAtGt",
            "createdAtLt",
            "createdAtGe",
            "createdAtLe",
            "updatedAtGt",
            "updatedAtLt",
            "updatedAtGe",
            "updatedAtLe"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "latestVersion": "x",
                "messages": [
                    {
                        "contents": [],
                        "type": "request-start",
                        "blocking": false,
                        "content": "x",
                        "conditions": []
                    }
                ],
                "type": "apiRequest",
                "name": "x",
                "method": "POST",
                "timeoutSeconds": 20,
                "credentialId": "550e8400-e29b-41d4-a716-446655440000",
                "encryptedPaths": [
                    "x"
                ],
                "parameters": [
                    {
                        "key": "x",
                        "value": "x"
                    }
                ],
                "id": "x",
                "orgId": "x",
                "createdAt": "2026-01-01T00:00:00Z",
                "updatedAt": "2026-01-01T00:00:00Z",
                "rejectionPlan": {
                    "conditions": []
                },
                "description": "x",
                "url": "x",
                "body": {
                    "type": "string",
                    "items": {},
                    "properties": {},
                    "description": "x",
                    "pattern": "x",
                    "format": "date-time",
                    "required": [
                        "x"
                    ],
                    "enum": [
                        "x"
                    ],
                    "title": "x"
                },
                "headers": {
                    "type": "string",
                    "items": {},
                    "properties": {},
                    "description": "x",
                    "pattern": "x",
                    "format": "date-time",
                    "required": [
                        "x"
                    ],
                    "enum": [
                        "x"
                    ],
                    "title": "x"
                },
                "backoffPlan": {
                    "type": "fixed",
                    "maxRetries": 0,
                    "baseDelaySeconds": 1,
                    "excludedStatusCodes": [
                        400,
                        401,
                        403
                    ]
                },
                "variableExtractionPlan": {
                    "schema": {},
                    "aliases": [
                        {}
                    ]
                }
            }
        ],
        "idField": "id"
    },
    {
        "entity": "tool",
        "accessor": "Tool",
        "op": "load",
        "method": "GET",
        "path": "/tool/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "latestVersion": "x",
            "messages": [
                {
                    "contents": [],
                    "type": "request-start",
                    "blocking": false,
                    "content": "x",
                    "conditions": [
                        {}
                    ]
                }
            ],
            "type": "apiRequest",
            "name": "x",
            "method": "POST",
            "timeoutSeconds": 20,
            "credentialId": "550e8400-e29b-41d4-a716-446655440000",
            "encryptedPaths": [
                "x"
            ],
            "parameters": [
                {
                    "key": "x",
                    "value": "x"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "rejectionPlan": {
                "conditions": [
                    {}
                ]
            },
            "description": "x",
            "url": "x",
            "body": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "x",
                "pattern": "x",
                "format": "date-time",
                "required": [
                    "x"
                ],
                "enum": [
                    "x"
                ],
                "title": "x"
            },
            "headers": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "x",
                "pattern": "x",
                "format": "date-time",
                "required": [
                    "x"
                ],
                "enum": [
                    "x"
                ],
                "title": "x"
            },
            "backoffPlan": {
                "type": "fixed",
                "maxRetries": 0,
                "baseDelaySeconds": 1,
                "excludedStatusCodes": [
                    400,
                    401,
                    403
                ]
            },
            "variableExtractionPlan": {
                "schema": {
                    "description": "x",
                    "enum": [],
                    "format": "date-time",
                    "items": {},
                    "pattern": "x",
                    "properties": {},
                    "required": [],
                    "title": "x",
                    "type": "string"
                },
                "aliases": [
                    {
                        "key": "x",
                        "value": "x"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "tool",
        "accessor": "Tool",
        "op": "remove",
        "method": "DELETE",
        "path": "/tool/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "latestVersion": "x",
            "messages": [
                {
                    "contents": [],
                    "type": "request-start",
                    "blocking": false,
                    "content": "x",
                    "conditions": [
                        {}
                    ]
                }
            ],
            "type": "apiRequest",
            "name": "x",
            "method": "POST",
            "timeoutSeconds": 20,
            "credentialId": "550e8400-e29b-41d4-a716-446655440000",
            "encryptedPaths": [
                "x"
            ],
            "parameters": [
                {
                    "key": "x",
                    "value": "x"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "rejectionPlan": {
                "conditions": [
                    {}
                ]
            },
            "description": "x",
            "url": "x",
            "body": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "x",
                "pattern": "x",
                "format": "date-time",
                "required": [
                    "x"
                ],
                "enum": [
                    "x"
                ],
                "title": "x"
            },
            "headers": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "x",
                "pattern": "x",
                "format": "date-time",
                "required": [
                    "x"
                ],
                "enum": [
                    "x"
                ],
                "title": "x"
            },
            "backoffPlan": {
                "type": "fixed",
                "maxRetries": 0,
                "baseDelaySeconds": 1,
                "excludedStatusCodes": [
                    400,
                    401,
                    403
                ]
            },
            "variableExtractionPlan": {
                "schema": {
                    "description": "x",
                    "enum": [],
                    "format": "date-time",
                    "items": {},
                    "pattern": "x",
                    "properties": {},
                    "required": [],
                    "title": "x",
                    "type": "string"
                },
                "aliases": [
                    {
                        "key": "x",
                        "value": "x"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "tool",
        "accessor": "Tool",
        "op": "update",
        "method": "PATCH",
        "path": "/tool/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "latestVersion": "x",
            "messages": [
                {
                    "contents": [],
                    "type": "request-start",
                    "blocking": false,
                    "content": "x",
                    "conditions": [
                        {}
                    ]
                }
            ],
            "type": "apiRequest",
            "name": "x",
            "method": "POST",
            "timeoutSeconds": 20,
            "credentialId": "550e8400-e29b-41d4-a716-446655440000",
            "encryptedPaths": [
                "x"
            ],
            "parameters": [
                {
                    "key": "x",
                    "value": "x"
                }
            ],
            "id": "x",
            "orgId": "x",
            "createdAt": "2026-01-01T00:00:00Z",
            "updatedAt": "2026-01-01T00:00:00Z",
            "rejectionPlan": {
                "conditions": [
                    {}
                ]
            },
            "description": "x",
            "url": "x",
            "body": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "x",
                "pattern": "x",
                "format": "date-time",
                "required": [
                    "x"
                ],
                "enum": [
                    "x"
                ],
                "title": "x"
            },
            "headers": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "x",
                "pattern": "x",
                "format": "date-time",
                "required": [
                    "x"
                ],
                "enum": [
                    "x"
                ],
                "title": "x"
            },
            "backoffPlan": {
                "type": "fixed",
                "maxRetries": 0,
                "baseDelaySeconds": 1,
                "excludedStatusCodes": [
                    400,
                    401,
                    403
                ]
            },
            "variableExtractionPlan": {
                "schema": {
                    "description": "x",
                    "enum": [],
                    "format": "date-time",
                    "items": {},
                    "pattern": "x",
                    "properties": {},
                    "required": [],
                    "title": "x",
                    "type": "string"
                },
                "aliases": [
                    {
                        "key": "x",
                        "value": "x"
                    }
                ]
            }
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map