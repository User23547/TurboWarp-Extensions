(function(Scratch) {
    "use strict";

    if (!Scratch.extensions.unsandboxed) {
        throw new Error("This extension must run unsandboxed");
    }

    const Cast = Scratch.Cast;

    class Extension {
        getInfo() {
            return {
                id: "arraybooleanutils",
                name: "Array Boolean",
                color1: "#334867",
                blocks: [
                    {
                        opcode: "arrAnd",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "array [arr] and",
                        arguments: {
                            arr: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "[true, false]"
                            }
                        }
                    },
                    {
                        opcode: "arrOr",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "array [arr] or",
                        arguments: {
                            arr: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "[true, false]"
                            }
                        }
                    },
                    {
                        opcode: "arrXor",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "array [arr] xor",
                        arguments: {
                            arr: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "[true, true]"
                            }
                        }
                    },
                    "---",
                    {
                        opcode: "arrNot",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "array [arr] not",
                        arguments: {
                            arr: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "[true, false]"
                            }
                        }
                    },
                    {
                        opcode: "arrAsBools",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "array [arr] as boolean array",
                        arguments: {
                            arr: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "[1, 0]"
                            }
                        }
                    },
                ],
            };
        }

        arrAnd(args) {
            try {
                const arr = JSON.parse(Cast.toString(args.arr));
                return arr.every(element => Cast.toBoolean(element) === true);
            } catch {
                return false;
            }
            return false;
        }

        arrOr(args) {
            try {
                const arr = JSON.parse(Cast.toString(args.arr));
                return arr.filter(element => Cast.toBoolean(element) === true).length !== 0;
            } catch {
                return false;
            }
            return false;
        }

        arrXor(args) {
            try {
                const arr = JSON.parse(Cast.toString(args.arr));
                return arr.filter(element => Cast.toBoolean(element) === true).length === 1;
            } catch {
                return false;
            }
            return false;
        }

        arrNot(args) {
            try {
                const arr = JSON.parse(Cast.toString(args.arr));
                return JSON.stringify(arr.map(element => !Cast.toBoolean(element)));
            } catch {
                return "[]";
            }
            return "[]";
        }

        arrAsBools(args) {
            try {
                const arr = JSON.parse(Cast.toString(args.arr));
                return JSON.stringify(arr.map(element => Cast.toBoolean(element)));
            } catch {
                return "[]";
            }
            return "[]";
        }

    }
    
    Scratch.extensions.register(new Extension());
})(Scratch);
