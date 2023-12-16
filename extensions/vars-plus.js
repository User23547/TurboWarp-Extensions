(function (Scratch) {
    "use strict";

    if (!Scratch.extensions.unsandboxed) {
        throw new Error(`${ext_name} extension must run unsandboxed`);
    }

    const ext_id = "extensionvariablesplus";
    const ext_name = "Variables+";

    const vm = Scratch.vm;
    const runtime = vm.runtime;
    const Cast = Scratch.Cast;

    class Extension {
        getInfo() {
            return {
                id: ext_id,
                name: ext_name,
                color1: "#ff8c1a",
                color2: "#e67e17",
                color3: "#cc7015",
                blocks: [
                    {
                        opcode: "getVariable",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[variable]",
                        allowDropAnywhere: true,
                        arguments: {
                            variable: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "variablesMenu"
                            }
                        }
                    },
                    "---",
                    {
                        opcode: "setVariable",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "set [variable] to [value]",
                        arguments: {
                            variable: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "variablesMenu"
                            },
                            value: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 0
                            }
                        }
                    },
                    {
                        opcode: "changeVariable",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "change [variable] by [value]",
                        arguments: {
                            variable: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "variablesMenu"
                            },
                            value: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            }
                        }
                    },
                    "---",
                    {
                        opcode: "listVariables",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "list [type] variables",
                        disableMonitor: true,
                        arguments: {
                            type: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "variablesAccessMenu"
                            }
                        }
                    }
                ],
                menus: {
                    variablesMenu: {
                        acceptReporters: true,
                        items: "_getVarsList"
                    },
                    variablesAccessMenu: {
                        items: ["all", "global", "local"]
                    }
                }
            };
        }

        _getVarsList() {
            const globalVars = Object.values(runtime.getTargetForStage().variables).filter(v => v.type === "");
            const localVars = Object.values(vm.editingTarget.variables).filter(v => v.type === "");
            const uniqueVars = [...new Set([...globalVars, ...localVars])];
            if (uniqueVars.length === 0) {
                return [{
                    text: "",
                    value: ""
                }];
            }
            return uniqueVars.map(v => ({
                text: v.name,
                value: v.id,
            }));
        }

        getVariable(args, util) {
            const variable = util.target.lookupVariableById(Cast.toString(args.variable));
            if (variable) {
                return variable.value == "undefined" ? "" : variable.value;
            }
            return "";
        }

        setVariable(args, util) {
            const variable = util.target.lookupVariableById(Cast.toString(args.variable));
            console.log(args.variable);
            if (variable) {
                variable.value = args.value;
                console.log(args.value);

                if (variable.isCloud) {
                    util.ioQuery('cloud', 'requestUpdateVariable', [variable.name, args.value]);
                }
            }
        }

        changeVariable(args, util) {
            const variable = util.target.lookupVariableById(Cast.toString(args.variable));
            if (variable) {
                const castedValue = Cast.toNumber(variable.value);
                const dValue = Cast.toNumber(args.value);
                const newValue = castedValue + dValue;
                variable.value = newValue;

                if (variable.isCloud) {
                    util.ioQuery('cloud', 'requestUpdateVariable', [variable.name, newValue]);
                }
            }
        }

        listVariables(args, util) {
            const globalVars = Object.values(runtime.getTargetForStage().variables).filter(v => v.type === "");
            const localVars = Object.values(util.target.variables).filter(v => v.type === "");
            const uniqueVars = [...new Set([...globalVars, ...localVars])];
            const type = Cast.toString(args.type).toLowerCase();
            switch (type) {
                case "all":
                    return JSON.stringify(uniqueVars.map(v => v.name));
                case "global":
                    return JSON.stringify(globalVars.filter(v => !localVars.includes(v)).map(v => v.name));
                case "local":
                    return JSON.stringify(localVars.filter(v => !globalVars.includes(v)).map(v => v.name));
                default:
                    return "";
            }
        }


    }

    Scratch.extensions.register(new Extension());
})(Scratch);
