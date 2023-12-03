(function(Scratch) {
    "use strict";

    if (!Scratch.extensions.unsandboxed) {
        throw new Error("This extension must run unsandboxed");
    }

    const Cast = Scratch.Cast;

    class Extension {
        getInfo() {
            return {
                id: "stringextension",
                name: "Text",
                color1: "#59c059",
                color2: "#50ad50",
                color3: "#479a47",
                blocks: [
                    {
                        opcode: "string",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[input]",
                        arguments: {
                            input: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple",
                            }
                        },
                        disableMonitor: true,
                    },
                    "---",
                    {
                        opcode: "substring",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "letters [start] to [end] of [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            start: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "1"
                            },
                            end: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "3"
                            }
                        }
                    },
                    {
                        opcode: "split",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "split [text] by [sep]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            sep: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "p"
                            }
                        }
                    },
                    {
                        opcode: "indexOf",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "index of [letter] in [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            letter: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "p"
                            }
                        }
                    },
                    {
                        opcode: "allIndexesOf",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "all indexes of [letter] in [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            letter: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "p"
                            }
                        }
                    },
                    "---",
                    {
                        opcode: "replace",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "replace [index] with [letter] in [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            index: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            },
                            letter: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "b"
                            }
                        }
                    },
                    {
                        opcode: "replaceAll",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "replace all [letter] with [letter2] in [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            letter: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "p"
                            },
                            letter2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "b"
                            }
                        }
                    },
                    {
                        opcode: "count",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "count [letter] in [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            letter: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "p"
                            }
                        }
                    },
                    {
                        opcode: "repeat",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "repeat [text] [times] times",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple "
                            },
                            times: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            }
                        }
                    },
                    "---",
                    {
                        opcode: "unicodeOf",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "unicode of [char]",
                        arguments: {
                            char: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "a"
                            }
                        }
                    },
                    {
                        opcode: "unicodeAsLetter",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "unicode [unicode] as letter",
                        arguments: {
                            unicode: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 65
                            }
                        }
                    },
                    "---",
                    {
                        opcode: "containsExactly",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "[text] contains exactly [text2]?",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            text2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Pp"
                            }
                        }
                    },
                    {
                        opcode: "startsEndsWith",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "[text] [startsEnds] with [text2]?",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            text2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "ap"
                            },
                            startsEnds: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "startsEndsWithMenu"
                            }
                        }
                    },
                    // {
                    //     opcode: "startsEndsExactlyWith",
                    //     blockType: Scratch.BlockType.BOOLEAN,
                    //     text: "[text] [startsEnds] exactly with [text2]?",
                    //     arguments: {
                    //         text: {
                    //             type: Scratch.ArgumentType.STRING,
                    //             defaultValue: "apple"
                    //         },
                    //         text2: {
                    //             type: Scratch.ArgumentType.STRING,
                    //             defaultValue: "Ap"
                    //         },
                    //         startsEnds: {
                    //             type: Scratch.ArgumentType.STRING,
                    //             menu: "startsEndsWithMenu"
                    //         }
                    //     }
                    // },
                    "---",
                    {
                        opcode: "isCase",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "is [text] [textCase]?",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            textCase: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "caseMenu"
                            }
                        }
                    },
                    {
                        opcode: "toCase",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[text] to [textCase]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "apple"
                            },
                            textCase: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "caseMenu"
                            }
                        }
                    },
                    "---",
                    {
                        opcode: "newLine",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "new line",
                        disableMonitor: true
                    },
                    {
                        opcode: "readLine",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "read line [line] from [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Text with\nmultiple lines"
                            },
                            line: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            }
                        }
                    },
                ],
                menus: {
                    startsEndsWithMenu: {
                        acceptReporters: true,
                        items: ["starts", "ends"]
                    },
                    caseMenu: {
                        acceptReporters: true,
                        items: ["lowercase", "uppercase"]
                    }
                }
            };
        }

        
        string(args) {
            return Cast.toString(args.input);
        }
        
        substring(args) {
            const text = Cast.toString(args.text);
            const start = Cast.toNumber(args.start);
            const end = Cast.toNumber(args.end);
            return text.substring(start - 1, end);
        }

        split(args) {
            const text = Cast.toString(args.text);
            const sep = Cast.toString(args.sep);
            return JSON.stringify(text.split(sep).filter(x => x !== ""));
        }

        indexOf(args) {
            const text = Cast.toString(args.text);
            const letter = Cast.toString(args.letter);
            return text.indexOf(letter) + 1;
        }

        allIndexesOf(args) {
            const text = Cast.toString(args.text);
            const letter = Cast.toString(args.letter);
            let indexes = [];
            let index = text.indexOf(letter);
            while (index !== -1) {
                indexes.push(index + 1);
                index = text.indexOf(letter, index + 1);
            }
            return JSON.stringify(indexes);
        }

        replace(args) {
            const text = Cast.toString(args.text);
            const index = Cast.toNumber(args.index);
            const letter = Cast.toString(args.letter);
            let asArray = text.split("");
            asArray[index - 1] = letter;
            return asArray.join("");
        }

        replaceAll(args) {
            const text = Cast.toString(args.text);
            const letterToReplace = Cast.toString(args.letter);
            const letter = Cast.toString(args.letter2);
            return text.replaceAll(letterToReplace, letter);
        }

        count(args) {
            const text = Cast.toString(args.text);
            const letter = Cast.toString(args.letter);
            return text.split(letter).length - 1;
        }

        repeat(args) {
            const text = Cast.toString(args.text);
            const times = Cast.toString(args.times);
            return text.repeat(times);
        }

        unicodeOf(args) {
            const char = Cast.toString(args.char);
            let asArray = Array.from(char);
            return asArray.map((x, i) => char.charCodeAt(i)).join(" ");
        }

        unicodeAsLetter(args) {
            const unicode = Cast.toString(args.unicode);
            return String.fromCharCode(unicode);
        }

        startsEndsWith(args) {
            const text = Cast.toString(args.text);
            const text2 = Cast.toString(args.text2);
            const startsEnds = Cast.toString(args.startsEnds);
            switch(startsEnds) {
                case "starts":
                    return text.startsWith(text2);
                case "ends":
                    return text.endsWith(text2);
                default:
                    return "";
            }
        }

        // startsEndsExactlyWith(args) {
        //     const text = Cast.toString(args.text);
        //     const text2 = Cast.toString(args.text2);
        //     const startsEnds = Cast.toString(args.startsEnds);
        //     switch(startsEnds) {
        //         case "starts":
        //             return text.startsWith(text2);
        //         case "ends":
        //             return text.endsWith(text2);
        //         default:
        //             return "";
        //     }
        // }

        containsExactly(args) {
            const text = Cast.toString(args.text);
            const text2 = Cast.toString(args.text2);
            return text.includes(text2);
        }

        isCase(args) {
            const text = Cast.toString(args.text);
            const textCase = Cast.toString(args.textCase);
            switch(textCase.toLowerCase()) {
                case "lowercase":
                    return text.toLowerCase() === text;
                case "uppercase":
                    return text.toUpperCase() === text;
                default:
                    return false;
            }
            return false;
        }

        toCase(args) {
            const text = Cast.toString(args.text);
            const textCase = Cast.toString(args.textCase);
            switch(textCase.toLowerCase()) {
                case "lowercase":
                    return text.toLowerCase();
                case "uppercase":
                    return text.toUpperCase();
                default:
                    return "";
            }
            return "";
        }

        newLine() {
            return "\n";
        }

        readLine(args) {
            const text = Cast.toString(args.text);
            const line = Cast.toNumber(args.line) - 1;
            const splitted = text.split("\n");
            return line >= 0 && line < splitted.length ? splitted[line] : "";
        }
    }
    
    Scratch.extensions.register(new Extension());
})(Scratch);
