// Name: Temporary Variables
// ID: lmsTempVars2
// Description: Create disposable runtime or thread variables.
// By: LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/>

(function (Scratch) {
    "use strict";
  
    const menuIconURI = "";
  
    class TempVars {
      getInfo() {
        return {
          id: "lmsTempVars2",
          name: "Thread Variables",
          color1: "#FF791A",
          //color2: "#E15D00",
          menuIconURI: menuIconURI, // I intend on making one later
          blocks: [
            {
                opcode: "getThreadVariable",
                blockType: Scratch.BlockType.REPORTER,
                text: "thread var [VAR]",
                arguments: {
                  VAR: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "variable",
                  },
                },
            },
            
            "---",

            {
              opcode: "setThreadVariable",
              blockType: Scratch.BlockType.COMMAND,
              text: "set thread var [VAR] to [STRING]",
              arguments: {
                VAR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "variable",
                },
                STRING: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "0",
                },
              },
            },
            {
              opcode: "changeThreadVariable",
              blockType: Scratch.BlockType.COMMAND,
              text: "change thread var [VAR] by [NUM]",
              arguments: {
                VAR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "variable",
                },
                NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: "1",
                },
              },
            },
  
            "---",
  
            {
              opcode: "forEachThreadVariable",
              blockType: Scratch.BlockType.LOOP,
              text: "for each [VAR] in [NUM]",
              arguments: {
                VAR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "variable",
                },
                NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: "10",
                },
              },
            },

            "---",
  
            {
              opcode: "threadVariableExists",
              blockType: Scratch.BlockType.BOOLEAN,
              text: "thread var [VAR] exists?",
              arguments: {
                VAR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "variable",
                },
              },
            },
            {
              opcode: "listThreadVariables",
              blockType: Scratch.BlockType.REPORTER,
              text: "thread variables",
              disableMonitor: true,
            }
          ],
        };
      }
    
      setThreadVariable(args, util) {
        const thread = util.thread;
        if (!thread.variables) thread.variables = Object.create(null);
        const vars = thread.variables;
        vars[args.VAR] = args.STRING;
      }
  
      changeThreadVariable(args, util) {
        const thread = util.thread;
        if (!thread.variables) thread.variables = Object.create(null);
        const vars = thread.variables;
        const prev = Scratch.Cast.toNumber(vars[args.VAR]);
        const next = Scratch.Cast.toNumber(args.NUM);
        vars[args.VAR] = prev + next;
      }
  
      getThreadVariable(args, util) {
        const thread = util.thread;
        if (!thread.variables) thread.variables = Object.create(null);
        const vars = thread.variables;
        const varValue = vars[args.VAR];
        if (typeof varValue === "undefined") return "";
        return varValue;
      }
  
      threadVariableExists(args, util) {
        const thread = util.thread;
        if (!thread.variables) thread.variables = Object.create(null);
        const vars = thread.variables;
        const varValue = vars[args.VAR];
        return !(typeof varValue === "undefined");
      }
  
      forEachThreadVariable(args, util) {
        const thread = util.thread;
        if (!thread.variables) thread.variables = Object.create(null);
        const vars = thread.variables;
        if (typeof util.stackFrame.index === "undefined") {
          util.stackFrame.index = 0;
        }
        if (util.stackFrame.index < Number(args.NUM)) {
          util.stackFrame.index++;
          vars[args.VAR] = util.stackFrame.index;
          return true;
        }
      }
  
      listThreadVariables(args, util) {
        const thread = util.thread;
        if (!thread.variables) thread.variables = Object.create(null);
        const vars = thread.variables;
        return JSON.stringify([...Object.keys(vars)]) //Object.keys(vars).join(",");
      }
    }
    Scratch.extensions.register(new TempVars());
  })(Scratch);
