(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
    throw new Error('This extension must run unsandboxed');
    }

    const Cast = Scratch.Cast;

    class Vars {
    getInfo() {
            return {
            id: 'variablessplus',
            name: 'Variables+',
            color1: "#ff8c1a",
            blocks: [
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: 'getVar',
                        text: 'var [VAR]',
                        arguments: {
                            VAR: {
                                type: Scratch.ArgumentType.STRING,
                                //defaultValue: 'variable'
                                menu: "get_vars"
                            }
                        }
                    },
                    "---",
                    {
                        blockType: Scratch.BlockType.COMMAND,
                        opcode: 'setVar',
                        text: 'set [VAR] to [VALUE]',
                        arguments: {
                            VAR: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "get_vars"
                            },
                            VALUE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 0
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.COMMAND,
                        opcode: 'changeVar',
                        text: 'change [VAR] by [VALUE]',
                        arguments: {
                            VAR: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "get_vars"
                            },
                            VALUE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            }
                        }
                    }
                ],
                menus: {
                    get_vars: {
                        acceptReporters: true,
                        items: "getVars"
                    }
                }
            };
        }
        
        getVars() {
            const globalVars = Object.values(vm.runtime.getTargetForStage().variables).filter((x) => x.type == "");
            const localVars = Object.values(vm.editingTarget.variables).filter((x) => x.type == "");
            const uniqueVars = [...new Set([...globalVars, ...localVars])];
            if (uniqueVars.length === 0) {
            return [
                    {
                        text: "",
                        value: "",
                    },
                ];
            }
            return uniqueVars.map((i) => ({
                text: i.name,
                value: i.id,
            }));
        }

        getVar(args, util) {
            const variable = util.target.lookupVariableById(Scratch.Cast.toString(args.VAR));
            //const vari = util.target.lookupOrCreateVariable(args.VAR.id, arsg.VAR.name);
            if (variable) {
                return variable ? variable.value : "";
            }
            return "";
        }

        setVar(args, util) {
            const variable = util.target.lookupVariableById(Scratch.Cast.toString(args.VAR));
            if (variable) {
                variable.value = args.VALUE;

                if (variable.isCloud) {
                    util.ioQuery('cloud', 'requestUpdateVariable', [variable.name, args.VALUE]);
                }
            }
        }

        changeVar(args, util) {
            const variable = util.target.lookupVariableById(Scratch.Cast.toString(args.VAR));
            if (variable) {
                const castedValue = Cast.toNumber(variable.value);
                const dValue = Cast.toNumber(args.VALUE);
                const newValue = castedValue + dValue;
                variable.value = newValue;
        
                if (variable.isCloud) {
                    util.ioQuery('cloud', 'requestUpdateVariable', [variable.name, newValue]);
                }
            }
        }
    }
    
    Scratch.extensions.register(new Vars());
})(Scratch);
