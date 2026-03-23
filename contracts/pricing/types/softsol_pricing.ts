/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/softsol_pricing.json`.
 */
export type SoftsolPricing = {
  "address": "soft93xcMpgmP9DJk3FRAqYiH919kE95aiJYiYUqb27",
  "metadata": {
    "name": "softsolPricing",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Softsol Outcome Market Pricing model"
  },
  "instructions": [
    {
      "name": "getQuote",
      "discriminator": [
        101,
        1,
        95,
        4,
        216,
        171,
        16,
        197
      ],
      "accounts": [
        {
          "name": "market",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platform"
              },
              {
                "kind": "arg",
                "path": "id"
              }
            ]
          }
        },
        {
          "name": "platform"
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "outcomeIndex",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ],
      "returns": {
        "defined": {
          "name": "quoteResult"
        }
      }
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "cpiExecutor",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  112,
                  105,
                  95,
                  101,
                  120,
                  101,
                  99,
                  117,
                  116,
                  111,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "publishMarket",
      "discriminator": [
        145,
        24,
        249,
        5,
        188,
        66,
        211,
        38
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platform"
              },
              {
                "kind": "arg",
                "path": "id"
              }
            ]
          }
        },
        {
          "name": "platform",
          "writable": true,
          "signer": true
        },
        {
          "name": "pamProgram",
          "address": "soft4qNbN2X9oykC34VZKh1VA6dkKJJNjSeko1SzAWS"
        },
        {
          "name": "resolution",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "ancillary",
          "type": "bytes"
        },
        {
          "name": "marginBps",
          "type": "u64"
        },
        {
          "name": "resolver",
          "type": {
            "option": "pubkey"
          }
        }
      ]
    },
    {
      "name": "swap",
      "discriminator": [
        248,
        198,
        158,
        145,
        225,
        117,
        135,
        200
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platform"
              },
              {
                "kind": "arg",
                "path": "id"
              }
            ]
          }
        },
        {
          "name": "platform"
        },
        {
          "name": "operator",
          "signer": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "pamProgram",
          "address": "soft4qNbN2X9oykC34VZKh1VA6dkKJJNjSeko1SzAWS"
        },
        {
          "name": "betEscrow",
          "writable": true
        },
        {
          "name": "bet",
          "writable": true
        },
        {
          "name": "resolution",
          "docs": [
            "Resolution for this market — must not be finalized."
          ],
          "writable": true
        },
        {
          "name": "usdcMint",
          "address": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
        },
        {
          "name": "userAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "usdcMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "activeTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  97,
                  99,
                  116,
                  105,
                  118,
                  101,
                  95,
                  116,
                  114,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platform"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                13,
                3,
                207,
                143,
                233,
                52,
                240,
                60,
                108,
                215,
                40,
                141,
                149,
                175,
                230,
                1,
                251,
                10,
                65,
                83,
                221,
                207,
                27,
                81,
                42,
                116,
                77,
                207,
                176,
                168,
                168,
                103
              ]
            }
          }
        },
        {
          "name": "yieldVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  121,
                  105,
                  101,
                  108,
                  100,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                13,
                3,
                207,
                143,
                233,
                52,
                240,
                60,
                108,
                215,
                40,
                141,
                149,
                175,
                230,
                1,
                251,
                10,
                65,
                83,
                221,
                207,
                27,
                81,
                42,
                116,
                77,
                207,
                176,
                168,
                168,
                103
              ]
            }
          }
        },
        {
          "name": "yieldState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  121,
                  105,
                  101,
                  108,
                  100,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                13,
                3,
                207,
                143,
                233,
                52,
                240,
                60,
                108,
                215,
                40,
                141,
                149,
                175,
                230,
                1,
                251,
                10,
                65,
                83,
                221,
                207,
                27,
                81,
                42,
                116,
                77,
                207,
                176,
                168,
                168,
                103
              ]
            }
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "outcomeIndex",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "slippageBps",
          "type": "u64"
        },
        {
          "name": "isSell",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "market",
      "discriminator": [
        219,
        190,
        213,
        55,
        0,
        227,
        198,
        154
      ]
    },
    {
      "name": "resolution",
      "discriminator": [
        31,
        13,
        235,
        201,
        17,
        66,
        5,
        138
      ]
    },
    {
      "name": "yieldState",
      "discriminator": [
        98,
        182,
        247,
        149,
        10,
        209,
        98,
        152
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "alreadyDeclared",
      "msg": "This address has already declared an outcome"
    },
    {
      "code": 6001,
      "name": "bondsmenPhaseEnded",
      "msg": "Bondsmen phase has ended"
    },
    {
      "code": 6002,
      "name": "disputeThresholdExceeded",
      "msg": "Dispute threshold exceeded"
    },
    {
      "code": 6003,
      "name": "disputeWindowNotExpired",
      "msg": "Dispute window still active"
    },
    {
      "code": 6004,
      "name": "incorrectVote",
      "msg": "Voter did not vote for the winning outcome"
    },
    {
      "code": 6005,
      "name": "inconclusiveNotAllowedFirst",
      "msg": "Inconclusive cannot be the first declared outcome"
    },
    {
      "code": 6006,
      "name": "insufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6007,
      "name": "insufficientShares",
      "msg": "Insufficient shares"
    },
    {
      "code": 6008,
      "name": "insufficientTokens",
      "msg": "Insufficient token balance"
    },
    {
      "code": 6009,
      "name": "invalidAccount",
      "msg": "Invalid account"
    },
    {
      "code": 6010,
      "name": "invalidAncillary",
      "msg": "Invalid ancillary data"
    },
    {
      "code": 6011,
      "name": "invalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6012,
      "name": "invalidMarketType",
      "msg": "Invalid market type"
    },
    {
      "code": 6013,
      "name": "invalidOutcome",
      "msg": "Invalid outcome index"
    },
    {
      "code": 6014,
      "name": "invalidOutcomes",
      "msg": "Must have at least 2 outcomes"
    },
    {
      "code": 6015,
      "name": "invalidVote",
      "msg": "Invalid vote"
    },
    {
      "code": 6016,
      "name": "invalidVoteAccount",
      "msg": "Invalid vote account"
    },
    {
      "code": 6017,
      "name": "invalidVoter",
      "msg": "Invalid voter"
    },
    {
      "code": 6018,
      "name": "mathOverflow",
      "msg": "Math overflow"
    },
    {
      "code": 6019,
      "name": "noCorrectVotes",
      "msg": "No correct votes recorded"
    },
    {
      "code": 6020,
      "name": "noOutcomeDeclared",
      "msg": "No outcome declared"
    },
    {
      "code": 6021,
      "name": "noPosition",
      "msg": "User has no position on this market"
    },
    {
      "code": 6022,
      "name": "noRewardAvailable",
      "msg": "No reward available"
    },
    {
      "code": 6023,
      "name": "noTokensToSettle",
      "msg": "No tokens to settle"
    },
    {
      "code": 6024,
      "name": "outcomeNotFinalized",
      "msg": "Outcome has not been finalized"
    },
    {
      "code": 6025,
      "name": "slippageExceeded",
      "msg": "Slippage tolerance exceeded"
    },
    {
      "code": 6026,
      "name": "tooManyOutcomes",
      "msg": "Too many outcomes (max 99)"
    },
    {
      "code": 6027,
      "name": "tradingInactive",
      "msg": "Trading is not active"
    },
    {
      "code": 6028,
      "name": "unauthorizedCategory",
      "msg": "Provider is not authorized for this category"
    },
    {
      "code": 6029,
      "name": "unauthorizedOperator",
      "msg": "Not authorized as operator"
    },
    {
      "code": 6030,
      "name": "votingNotComplete",
      "msg": "Voting period not complete"
    },
    {
      "code": 6031,
      "name": "votingNotStarted",
      "msg": "Voting has not started yet"
    },
    {
      "code": 6032,
      "name": "votingPeriodExpired",
      "msg": "Voting period has expired"
    }
  ],
  "types": [
    {
      "name": "consensusCertificate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "outcomeStake",
            "type": "u64"
          },
          {
            "name": "totalVotedStake",
            "type": "u64"
          },
          {
            "name": "participantCount",
            "type": "u32"
          },
          {
            "name": "voteMerkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "aggregateSig",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "marginBps",
            "type": "u64"
          },
          {
            "name": "outcomes",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "shares",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "reserves",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "kConstant",
            "type": "u128"
          },
          {
            "name": "lastProbability",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "outcome",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "resolver",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "quoteResult",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "payoutBps",
            "type": "u64"
          },
          {
            "name": "pricePerShare",
            "type": "u64"
          },
          {
            "name": "currentProbability",
            "type": "u64"
          },
          {
            "name": "newProbability",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "resolution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "pubkey"
          },
          {
            "name": "method",
            "type": {
              "defined": {
                "name": "resolutionMethod"
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "resolutionStatus"
              }
            }
          },
          {
            "name": "ancillary",
            "type": "bytes"
          },
          {
            "name": "resolvedSlots",
            "type": {
              "vec": {
                "option": "i64"
              }
            }
          },
          {
            "name": "openPositions",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "resolutionMethod",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "consensus",
            "fields": [
              {
                "name": "thresholdBps",
                "type": "u16"
              },
              {
                "name": "totalEligibleStake",
                "type": "u64"
              },
              {
                "name": "deadline",
                "type": "i64"
              },
              {
                "name": "certificate",
                "type": {
                  "option": {
                    "defined": {
                      "name": "consensusCertificate"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "singleSource",
            "fields": [
              {
                "name": "authority",
                "type": "pubkey"
              },
              {
                "name": "deadline",
                "type": {
                  "option": "i64"
                }
              },
              {
                "name": "coAuthority",
                "type": {
                  "option": "pubkey"
                }
              }
            ]
          },
          {
            "name": "provablyFair",
            "fields": [
              {
                "name": "seedHash",
                "type": {
                  "array": [
                    "u8",
                    32
                  ]
                }
              },
              {
                "name": "result",
                "type": {
                  "option": {
                    "array": [
                      "u8",
                      32
                    ]
                  }
                }
              },
              {
                "name": "selectionMode",
                "type": {
                  "defined": {
                    "name": "selectionMode"
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "resolutionStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "pending"
          },
          {
            "name": "finalized"
          },
          {
            "name": "disputed"
          }
        ]
      }
    },
    {
      "name": "selectionMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "simple",
            "fields": [
              {
                "name": "numSlots",
                "type": "u8"
              }
            ]
          },
          {
            "name": "weighted",
            "fields": [
              {
                "defined": {
                  "name": "weights"
                }
              }
            ]
          },
          {
            "name": "modulo",
            "fields": [
              {
                "name": "numSlots",
                "type": "u8"
              },
              {
                "name": "divisor",
                "type": "u16"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "weights",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "values",
            "type": {
              "vec": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "yieldState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "accRewardPerShare",
            "type": "u128"
          },
          {
            "name": "totalStaked",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "usdcMint",
      "type": "pubkey",
      "value": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
    }
  ]
};
