/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/softsol_pam.json`.
 */
export type SoftsolPam = {
  "address": "soft4qNbN2X9oykC34VZKh1VA6dkKJJNjSeko1SzAWS",
  "metadata": {
    "name": "softsolPam",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Softsol Player Account Management Smart Contract"
  },
  "instructions": [
    {
      "name": "claim",
      "discriminator": [
        62,
        198,
        214,
        193,
        213,
        159,
        108,
        210
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "stakeAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "yieldState",
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
            ]
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
            ]
          }
        },
        {
          "name": "usdcMint"
        },
        {
          "name": "userUsdc",
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
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": []
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
            ]
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
            ]
          }
        },
        {
          "name": "stakeVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "usdcMint",
          "address": "CymSSq5hChAz4P64Kr5LxaSHS4HgAdn3w4X83byxYf62"
        },
        {
          "name": "sftcAccount"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializePlatform",
      "discriminator": [
        119,
        201,
        101,
        45,
        75,
        122,
        89,
        3
      ],
      "accounts": [
        {
          "name": "platform",
          "writable": true,
          "signer": true
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
            ]
          }
        },
        {
          "name": "platformUsdcAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "platform"
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
          "name": "usdcMint",
          "address": "CymSSq5hChAz4P64Kr5LxaSHS4HgAdn3w4X83byxYf62"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "place",
      "discriminator": [
        143,
        53,
        56,
        40,
        41,
        16,
        5,
        75
      ],
      "accounts": [
        {
          "name": "operator",
          "signer": true
        },
        {
          "name": "platform"
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "betEscrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "platform"
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "id"
              }
            ]
          }
        },
        {
          "name": "bet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  98,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platform"
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "id"
              }
            ]
          }
        },
        {
          "name": "resolution",
          "docs": [
            "The Resolution this bet will settle against.",
            "Must not already be Finalized."
          ],
          "writable": true
        },
        {
          "name": "usdcMint",
          "address": "CymSSq5hChAz4P64Kr5LxaSHS4HgAdn3w4X83byxYf62"
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
            ]
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
            ]
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
            ]
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
          "name": "stake",
          "type": "u64"
        },
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "payoutMatrix",
          "type": {
            "vec": {
              "defined": {
                "name": "payoutRow"
              }
            }
          }
        }
      ]
    },
    {
      "name": "requestResolution",
      "discriminator": [
        200,
        62,
        148,
        110,
        22,
        92,
        78,
        187
      ],
      "accounts": [
        {
          "name": "platform",
          "writable": true,
          "signer": true
        },
        {
          "name": "resolution",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  114,
                  101,
                  115,
                  111,
                  108,
                  117,
                  116,
                  105,
                  111,
                  110
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
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
          "name": "ancillary",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "settle",
      "discriminator": [
        175,
        42,
        185,
        87,
        144,
        131,
        102,
        212
      ],
      "accounts": [
        {
          "name": "settler",
          "signer": true
        },
        {
          "name": "platform"
        },
        {
          "name": "user",
          "writable": true
        },
        {
          "name": "betEscrow",
          "docs": [
            "Escrow token account holding stake + max_win."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "platform"
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "id"
              }
            ]
          }
        },
        {
          "name": "bet",
          "docs": [
            "Bet descriptor — conditionally closed depending on the matched row's",
            "`closes` flag. Closed manually in the handler via AccountsClose."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  115,
                  95,
                  98,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platform"
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "id"
              }
            ]
          }
        },
        {
          "name": "resolution",
          "docs": [
            "The Resolution this bet was placed against.",
            "Must be Finalized before settlement can proceed."
          ],
          "writable": true
        },
        {
          "name": "usdcMint",
          "address": "CymSSq5hChAz4P64Kr5LxaSHS4HgAdn3w4X83byxYf62"
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
            ]
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
          "type": "u64"
        }
      ]
    },
    {
      "name": "stake",
      "discriminator": [
        206,
        176,
        202,
        18,
        200,
        209,
        179,
        108
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "stakeAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
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
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "userTokenAccount",
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
                "path": "mint"
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
          "name": "stakeVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
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
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "submitResolution",
      "discriminator": [
        62,
        142,
        7,
        233,
        2,
        252,
        233,
        196
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "Primary authority. For SingleSource this must match method.authority.",
            "For Consensus and ProvablyFair this is just the transaction fee payer."
          ],
          "signer": true
        },
        {
          "name": "coAuthority",
          "docs": [
            "Required only for SingleSource 2-of-2 resolutions (co_authority is Some)."
          ],
          "signer": true,
          "optional": true
        },
        {
          "name": "resolution",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "resolvedSlots",
          "type": {
            "vec": {
              "option": "i64"
            }
          }
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
        },
        {
          "name": "serverSeed",
          "type": {
            "option": "bytes"
          }
        },
        {
          "name": "clientSeed",
          "type": {
            "option": "bytes"
          }
        }
      ]
    },
    {
      "name": "unstake",
      "discriminator": [
        90,
        95,
        107,
        42,
        205,
        124,
        50,
        225
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "stakeAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
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
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "userTokenAccount",
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
                "path": "mint"
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
          "name": "stakeVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
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
            ]
          }
        },
        {
          "name": "usdcMint"
        },
        {
          "name": "userUsdc",
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
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bet",
      "discriminator": [
        147,
        23,
        35,
        59,
        15,
        75,
        155,
        32
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
      "name": "stakeAccount",
      "discriminator": [
        80,
        158,
        67,
        124,
        50,
        189,
        192,
        255
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
      "name": "unauthorized",
      "msg": "unauthorized"
    },
    {
      "code": 6001,
      "name": "invalidAmount",
      "msg": "Invalid amount (must be > 0)"
    },
    {
      "code": 6002,
      "name": "insufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6003,
      "name": "mathOverflow",
      "msg": "Math overflow"
    },
    {
      "code": 6004,
      "name": "missingAccount",
      "msg": "Missing required account"
    },
    {
      "code": 6005,
      "name": "invalidMint",
      "msg": "Invalid mint"
    },
    {
      "code": 6006,
      "name": "resolverVerificationFailed",
      "msg": "Resolver attestation missing or invalid"
    },
    {
      "code": 6007,
      "name": "consensusTempDisabled",
      "msg": "Consensus Temporarily Disabled"
    },
    {
      "code": 6008,
      "name": "ancillaryTooLarge",
      "msg": "Ancillary data exceeds 512 bytes"
    },
    {
      "code": 6009,
      "name": "invalidSeedHash",
      "msg": "Seed hash must be non-zero"
    },
    {
      "code": 6010,
      "name": "tooManySlots",
      "msg": "Resolved slots exceeds maximum of 20"
    },
    {
      "code": 6011,
      "name": "emptyPayoutMatrix",
      "msg": "Payout matrix must not be empty"
    },
    {
      "code": 6012,
      "name": "ancillaryNotUtf8",
      "msg": "Ancillary data is not valid UTF-8"
    },
    {
      "code": 6013,
      "name": "ancillaryMissingQuestion",
      "msg": "Ancillary data missing required 'q:' (question) field"
    },
    {
      "code": 6014,
      "name": "ancillaryMissingOutcomes",
      "msg": "Ancillary data missing required 'o:' (outcomes) field with at least one outcome"
    }
  ],
  "types": [
    {
      "name": "bet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "PDA bump seed."
            ],
            "type": "u8"
          },
          {
            "name": "id",
            "docs": [
              "Set to the bet token account key at placement — canonical bet ID."
            ],
            "type": "pubkey"
          },
          {
            "name": "ts",
            "docs": [
              "Unix timestamp of placement."
            ],
            "type": "i64"
          },
          {
            "name": "stake",
            "docs": [
              "Full stake amount deposited by the bettor at placement."
            ],
            "type": "u64"
          },
          {
            "name": "resolution",
            "docs": [
              "The Resolution account this bet settles against."
            ],
            "type": "pubkey"
          },
          {
            "name": "payoutMatrix",
            "docs": [
              "Payout predicate matrix, evaluated top-to-bottom.",
              "First matching row determines the payout."
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "payoutRow"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "condition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "o1",
            "docs": [
              "Index into resolved_slots used as the left-hand side of the comparison."
            ],
            "type": "u8"
          },
          {
            "name": "o2",
            "docs": [
              "If Some, the right-hand side is resolved_slots[o2] rather than `value`."
            ],
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "op",
            "docs": [
              "Comparison operator applied to lhs and rhs."
            ],
            "type": {
              "defined": {
                "name": "op"
              }
            }
          },
          {
            "name": "value",
            "docs": [
              "Literal right-hand side, scaled ×1_000_000. Ignored when o2 is Some."
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "consensusCertificate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "outcomeStake",
            "docs": [
              "Stake weight that voted for the attested resolved_slots values."
            ],
            "type": "u64"
          },
          {
            "name": "totalVotedStake",
            "docs": [
              "Total stake that cast any vote in this round."
            ],
            "type": "u64"
          },
          {
            "name": "participantCount",
            "docs": [
              "Number of individual voters represented by this certificate."
            ],
            "type": "u32"
          },
          {
            "name": "voteMerkleRoot",
            "docs": [
              "Merkle root of the full off-chain vote set."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "aggregateSig",
            "docs": [
              "BLS aggregate signature."
            ],
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
      "name": "op",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "gt"
          },
          {
            "name": "gte"
          },
          {
            "name": "lt"
          },
          {
            "name": "lte"
          },
          {
            "name": "eq"
          },
          {
            "name": "neq"
          }
        ]
      }
    },
    {
      "name": "payoutRow",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "conditions",
            "docs": [
              "Predicates evaluated top-to-bottom; all must match for this row to fire."
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "condition"
                }
              }
            }
          },
          {
            "name": "payoutAmount",
            "docs": [
              "Absolute token amount paid to the bettor. None = void/push (return stake)."
            ],
            "type": {
              "option": "u64"
            }
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
            "docs": [
              "Canonical identifier for this Resolution account."
            ],
            "type": "pubkey"
          },
          {
            "name": "method",
            "docs": [
              "Determines who can write resolved_slots and how."
            ],
            "type": {
              "defined": {
                "name": "resolutionMethod"
              }
            }
          },
          {
            "name": "status",
            "docs": [
              "Current lifecycle state of this resolution."
            ],
            "type": {
              "defined": {
                "name": "resolutionStatus"
              }
            }
          },
          {
            "name": "ancillary",
            "docs": [
              "Arbitrary off-chain metadata."
            ],
            "type": "bytes"
          },
          {
            "name": "resolvedSlots",
            "docs": [
              "Authoritative output values written at resolution."
            ],
            "type": {
              "vec": {
                "option": "i64"
              }
            }
          },
          {
            "name": "openPositions",
            "docs": [
              "Tracks open Bet accounts linked to this Resolution.",
              "None = no positions ever opened. Some(n) = n positions still open."
            ],
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
                "docs": [
                  "Number of outcome slots."
                ],
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
                "docs": [
                  "Number of outcome slots to derive from result bytes."
                ],
                "type": "u8"
              },
              {
                "name": "divisor",
                "docs": [
                  "Modulus applied to each result byte to produce a slot value."
                ],
                "type": "u16"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "stakeAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "Tokens currently staked by this account."
            ],
            "type": "u64"
          },
          {
            "name": "rewardDebt",
            "docs": [
              "Snapshot of acc_reward_per_share at last claim or deposit."
            ],
            "type": "u128"
          },
          {
            "name": "earned",
            "docs": [
              "Lifetime rewards earned and available to claim."
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed."
            ],
            "type": "u8"
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
            "docs": [
              "Probability weights parallel to resolved_slots."
            ],
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
            "docs": [
              "Accumulated reward tokens per staked token, scaled for precision."
            ],
            "type": "u128"
          },
          {
            "name": "totalStaked",
            "docs": [
              "Total tokens currently staked across all StakeAccounts."
            ],
            "type": "u64"
          },
          {
            "name": "mint",
            "docs": [
              "Mint of the token used for staking and rewards."
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed."
            ],
            "type": "u8"
          }
        ]
      }
    }
  ]
};
