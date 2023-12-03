(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
    throw new Error('This extension must run unsandboxed');
    }

    const icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjMyMjgsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDcuMzIyODEsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzk0LjEzMDk3LDEzMi41MDkyN2wtMzUuMjQ3NTIsLTAuMDQ5MjNjLTAuOTQyMDgsNDEuNDQ4ODkgLTIxLjE1OTAxLDk0LjU5NzU0IDcuNDYwMzgsOTQuMjEzMzljMTAuNTAwMTgsLTAuNDQ4MTggMTEuMDYzNDgsLTE2LjA2MTEgMTAuODI1NjgsLTI2LjMwNTE4bDE5LjIyODE0LDEzLjM2NjY3YzAsMTIuNDIwOTQgLTEwLjE0MTgxLDM0Ljg1MjU0IC0zNS4xMTE3NCwzNC4wMjAyYy0xNS4xNzQwMywtMC4xMjgwNSAtMjkuNDQ4NjIsLTExLjI0NDA4IC0yOS44MzI3OCwtMzAuMTk1NjJjMC41MTIyLC0yOC40OTEzMyA2LjMwODAyLC01Ni4zMDg4OSA3Ljk3MjY3LC04NS4zNzY0NWwtMjYuMDA4NDUsLTAuNTY0MjhjLTcuNTU1LDgyLjQ2NDggLTEwLjI2NjU3LDExNS40OTYxIC0zNC41MzIyMiwxMTYuMzI4NDNjLTcuNjgzMDYsLTAuMzIwMTIgLTE0Ljc4OTg4LC01LjgyNjMyIC0xNS41NTgxOSwtMTQuNzg5ODhjLTIuMTEyODQsLTE1LjgxNDI5IDMwLjY5MjYxLC0yNS4xNTk4MSAzMS44NDUwNiwtMTAyLjI0NjQ3Yy0zMS42OTI2MSwtMy41MjE0IC0zMS44MDU0NSwxNS42ODQwMyAtMzcuMTgzNTgsMjEuNzY2NDVsLTE0LjM4NjA2LC0xLjU4NDE1YzE4Ljc2NTU4LC00NC45NDMyNiA5LjQ1ODI5LC0zOS4xMTU4NCAxNTAuNzY1MTIsLTM4LjQzMTM1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNTljMDU5IiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxOTQ5OTk5OTk5ODoxMTIuNjc3NDA1LS0+";

    const Cast = Scratch.Cast;

    const root = (value, degree) => {
        return Math.pow(value, 1 / degree);
    }

    const log = (value, base) => {
        return Math.log(value) / Math.log(base);
    }

    class Extension {
    getInfo() {
        return {
        id: 'mathhhh',
        name: 'Math',
        color1: '#59c059',
        menuIconURI: icon,
        blocks: [

                {
                    opcode: "power",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "[A] ^ [B]",
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                {
                    opcode: "root",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "[A] √ [B]",
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                {
                    opcode: "neg",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "- [value]",
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                    }
                },
                "---",
                {
                    opcode: 'clamp',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'clamp [VALUE] between [MIN] and [MAX]',
                    arguments: {
                        VALUE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        MIN: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        MAX: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                    }
                },
                "---",
                {
                    opcode: 'boolean',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[input]',
                    arguments: {
                        input: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        }
                    },
                    disableMonitor: true
                },
                {
                    opcode: 'true',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'true',
                    disableMonitor: true
                },
                {
                    opcode: 'false',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'false',
                    disableMonitor: true
                },
                "---",
                {
                    opcode: 'matConditional',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[A] ⇒ [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        },
                        B: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        }
                    }
                },
                {
                    opcode: 'matBiconditional',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[A] ⇔ [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        },
                        B: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        }
                    }
                },
                // "---",
                // {
                //     opcode: 'nand',
                //     blockType: Scratch.BlockType.BOOLEAN,
                //     text: '[A] nand [B]',
                //     arguments: {
                //         A: {
                //             type: Scratch.ArgumentType.BOOLEAN,
                //             defaultValue: ""
                //         },
                //         B: {
                //             type: Scratch.ArgumentType.BOOLEAN,
                //             defaultValue: ""
                //         }
                //     }
                // },
                "---",
                {
                    opcode: 'moreOrEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[A] ≥ [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                {
                    opcode: 'lessOrEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[A] ≤ [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                {
                    opcode: 'almostEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[A] ≈ [B]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                {
                    opcode: 'plusMinusEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[A] ≈ [B] ± [C]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        C: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                "---",
                {
                    opcode: 'between',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[A] < [B] < [C]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        C: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                {
                    opcode: 'betweenEqual',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[A] ≤ [B] ≤ [C]',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        C: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                "---",
                {
                    opcode: "log",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "log of [A] with base [B]",
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: 'round',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[roundMode] [value] to [precision] decimal places',
                    arguments: {
                        roundMode: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'round_modes_menu'
                        },
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3.1416
                        },
                        precision: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2
                        }
                    }
                },
                {
                    opcode: "sign",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "sign of [value]",
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    }
                },
                "---",
                {
                    opcode: 'pi',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'π',
                    disableMonitor: true
                },
                {
                    opcode: 'euler',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'e',
                    disableMonitor: true

                },
                {
                    opcode: 'infinity',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '∞',
                    disableMonitor: true

                },
                "---",
                {
                    opcode: 'isNumberType',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is [type] [value]?',
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ""
                        },
                        type: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "number_types_menu"
                        },
                    },
                },
                {
                    opcode: 'isNumber',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is number [value]?',
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ""
                        }
                    },
                    hideFromPalette: true
                },
                {
                    opcode: 'isSafeNumber',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is safe number [value]?',
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    },
                    hideFromPalette: true
                },
                {
                    opcode: 'isInt',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is int [value]?',
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    },
                    hideFromPalette: true
                },
                {
                    opcode: 'isFloat',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is float [value]?',
                    arguments: {
                        value: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ""
                        }
                    },
                    hideFromPalette: true
                },
                {
                    opcode: 'isMultiple',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is [A] multiple of [B]?',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                    },
                },
            ],
            menus: {
                round_modes_menu: {
                    acceptReporters: true,
                    items: ["round", "floor", "ceiling"]
                },
                number_types_menu: {
                    items: ["number", "safe number", "integer", "float", "prime"]
                }
            }
        };
    }

        power(args) {
            const valueA = Cast.toNumber(args.A);
            const valueB = Cast.toNumber(args.B);
            return Math.pow(valueA, valueB);
        }

        root(args) {
            const valueA = Cast.toNumber(args.A);
            const valueB = Cast.toNumber(args.B);
            return root(valueB, valueA);
        }

        log(args) {
            const valueA = Cast.toNumber(args.A);
            const valueB = Cast.toNumber(args.B);
            return log(valueA, valueB);
        }

        neg(args) {
            return -Cast.toNumber(args.value);
        }

        clamp(args) {
            const value = Cast.toNumber(args.VALUE);
            const min = Cast.toNumber(args.MIN);
            const max = Cast.toNumber(args.MAX);
            return Math.min(Math.max(value, min), max);
        }

        boolean(args) {
            return Cast.toBoolean(args.input);
        }
            
        true(args) {
            return true;
        }

        false(args) {
            return false;
        }

        _matConditional(a, b) {
            return !a || b;
        }

        matConditional(args) {
            const a = Cast.toBoolean(args.A);
            const b = Cast.toBoolean(args.B);
            return this._matConditional(a, b);
        }

        
        matBiconditional(args) {
            const a = Cast.toBoolean(args.A);
            const b = Cast.toBoolean(args.B);
            return this._matConditional(a, b) && this._matConditional(b, a);
        }

        moreOrEqual(args) {
            const a = Cast.toNumber(args.A);
            const b = Cast.toNumber(args.B);
            return a >= b;
        }

        lessOrEqual(args) {
            const a = Cast.toNumber(args.A);
            const b = Cast.toNumber(args.B);
            return a <= b;
        }

        almostEqual(args) {
            const a = Cast.toNumber(args.A);
            const b = Cast.toNumber(args.B);
            return Math.round(a) === Math.round(b);
        }

        round(args) {
            const roundMode = Cast.toString(args.roundMode);
            const value = Cast.toNumber(args.value);
            const precision = Cast.toNumber(args.precision);
            const tenToPrecison = Math.pow(10, precision);
            const multiplicated = value * tenToPrecison;
            switch(roundMode) {
                case "round":
                    return Math.round(multiplicated) / tenToPrecison;
                case "floor":
                    return Math.floor(multiplicated) / tenToPrecison;
                case "ceiling":
                    return Math.ceil(multiplicated) / tenToPrecison;
                default:
                    return "";
            }
        }

        between(args) {
            const a = Cast.toNumber(args.A);
            const b = Cast.toNumber(args.B);
            const c = Cast.toNumber(args.C);
            return  Cast.compare(a, b) < 0 && Cast.compare(b, c) < 0;
        }

        betweenEqual(args) {
            const a = Cast.toNumber(args.A);
            const b = Cast.toNumber(args.B);
            const c = Cast.toNumber(args.C);
            return  Cast.compare(a, b) <= 0 && Cast.compare(b, c) <= 0;
        }

        plusMinusEqual(args) {
            const a = Cast.toNumber(args.A);
            const b = Cast.toNumber(args.B);
            const c = Math.abs(Cast.toNumber(args.C));
            return a >= b -c && a <= b + c;
        }

        sign(args) {
            const value = Cast.toNumber(args.value);
            if (value !== 0) {
                return value / Math.abs(value);
            }
            return 1;
        }

        pi(args) {
            return Math.PI;
        }

        euler(args) {
            return 2.718281828459045;
        }

        infinity(args) {
            return Infinity;
        }

        nan(args) {
            return NaN;
        }

        isNumberType(args) {
            const type = Cast.toString(args.type);
            switch(type) {
                case "number": return typeof args.value === "number";
                case "safe number": return Number.isSafeInteger(Cast.toNumber(args.value));
                case "integer": return this.isInt({ value: args.value });
                case "float": return this.isFloat({ value: args.value });
                case "prime": return this.isPrime({ value: args.value });
                default: return false;
            }
        }

        isSafeNumber(args) {
            const value = Cast.toNumber(args.value);
            return Number.isSafeInteger(value);
        }

        isNumber(args) {
            return typeof args.value === "number";
        }

        isInt(args) {
            const value = Cast.toNumber(args.value);
            return Math.round(value) === value && value !== NaN;
        }

        isFloat(args) {
            const value = Cast.toNumber(args.value);
            return Math.round(value) !== value && value !== NaN;
        }

        isPrime(args) {
            const value = Cast.toNumber(args.value);
            const number = Math.trunc(value);
            if (number <= 1) return false;
            for (var i = 2; i < number; i++) {
                if (number % i === 0) {
                    return false;
                }                
            }
            return true;
        }

        isMultiple(args) {
            const a = Cast.toNumber(args.A);
            const b = Cast.toNumber(args.B);
            return a % b === 0;
        }
    }
    
    Scratch.extensions.register(new Extension());
})(Scratch);
