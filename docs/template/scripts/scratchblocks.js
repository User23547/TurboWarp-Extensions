/**
 * @turbowarp/scratchblocks v3.6.4
 *
 * Render scratchblocks code to SVG images.
 *
 * Copyright 2013–2023, Tim Radvan
 * @license MIT
 */

var scratchblocks = function() {
    "use strict";
    function e(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            s.push.apply(s, o)
        }
        return s
    }
    function t(t) {
        for (var o = 1; o < arguments.length; o++) {
            var i = null != arguments[o] ? arguments[o] : {};
            o % 2 ? e(Object(i), !0).forEach((function(e) {
                s(t, e, i[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    function s(e, t, s) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e)
                    return e;
                var s = e[Symbol.toPrimitive];
                if (void 0 !== s) {
                    var o = s.call(e, t || "default");
                    if ("object" != typeof o)
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof t ? t : t + ""
        }(t))in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s,
        e
    }
    function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var o in s)
                    Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
            }
            return e
        }
        ,
        o.apply(this, arguments)
    }
    const i = t(t({}, {
        pen: "pen",
        video: "sensing",
        music: "sound"
    }), {}, {
        tts: "tts",
        translate: "translate",
        microbit: "microbit",
        wedo: "wedo",
        makeymakey: "makeymakey",
        ev3: "ev3",
        boost: "boost",
        gdxfor: "gdxfor"
    })
      , r = {
        wedo2: "wedo",
        text2speech: "tts"
    };
    const c = ["motion", "looks", "sound", "variables", "list", "events", "control", "sensing", "operators", "custom", "custom-arg", "extension", "grey", "obsolete", ...Object.keys(i), ...Object.keys(r)]
      , n = ["hat", "cap", "stack", "boolean", "reporter", "ring", "cat"]
      , a = ["ar", "ckb", "fa", "he"]
      , l = /%([0-9]+)/
      , h = /(%[a-zA-Z0-9](?:\.[a-zA-Z0-9]+)?)/
      , p = RegExp(h.source, "g")
      , d = /(@[a-zA-Z]+)/
      , V = RegExp(h.source + "|" + d.source + "| +", "g")
      , u = /^#(?:[0-9a-fA-F]{3}){1,2}?$/;
    function g(e) {
        const t = l.exec(e);
        return t ? +t[1] : 0
    }
    function f(e) {
        const t = e.split(V).filter((e=>e))
          , s = t.filter((e=>h.test(e)));
        return {
            spec: e,
            parts: t,
            inputs: s,
            hash: A(e)
        }
    }
    function A(e) {
        return b(e.replace(p, " _ "))
    }
    function b(e) {
        return e.replace(/_/g, " _ ").replace(/ +/g, " ").replace(/[,%?:]/g, "").replace(/ß/g, "ss").replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(". . .", "...").replace(/^…$/, "...").trim().toLowerCase()
    }
    const m = {}
      , y = [{
        id: "MOTION_MOVESTEPS",
        selector: "forward:",
        spec: "move %1 steps",
        inputs: ["%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_TURNRIGHT",
        selector: "turnRight:",
        spec: "turn @turnRight %1 degrees",
        inputs: ["%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_TURNLEFT",
        selector: "turnLeft:",
        spec: "turn @turnLeft %1 degrees",
        inputs: ["%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_POINTINDIRECTION",
        selector: "heading:",
        spec: "point in direction %1",
        inputs: ["%d.direction"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_POINTTOWARDS",
        selector: "pointTowards:",
        spec: "point towards %1",
        inputs: ["%m.spriteOrMouse"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_GOTOXY",
        selector: "gotoX:y:",
        spec: "go to x:%1 y:%2",
        inputs: ["%n", "%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_GOTO",
        selector: "gotoSpriteOrMouse:",
        spec: "go to %1",
        inputs: ["%m.location"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_GLIDESECSTOXY",
        selector: "glideSecs:toX:y:elapsed:from:",
        spec: "glide %1 secs to x:%2 y:%3",
        inputs: ["%n", "%n", "%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_GLIDETO",
        spec: "glide %1 secs to %2",
        inputs: ["%n", "%m.location"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_CHANGEXBY",
        selector: "changeXposBy:",
        spec: "change x by %1",
        inputs: ["%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_SETX",
        selector: "xpos:",
        spec: "set x to %1",
        inputs: ["%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_CHANGEYBY",
        selector: "changeYposBy:",
        spec: "change y by %1",
        inputs: ["%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_SETY",
        selector: "ypos:",
        spec: "set y to %1",
        inputs: ["%n"],
        shape: "stack",
        category: "motion"
    }, {
        id: "MOTION_SETROTATIONSTYLE",
        selector: "setRotationStyle",
        spec: "set rotation style %1",
        inputs: ["%m.rotationStyle"],
        shape: "stack",
        category: "motion"
    }, {
        id: "LOOKS_SAYFORSECS",
        selector: "say:duration:elapsed:from:",
        spec: "say %1 for %2 seconds",
        inputs: ["%s", "%n"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_SAY",
        selector: "say:",
        spec: "say %1",
        inputs: ["%s"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_THINKFORSECS",
        selector: "think:duration:elapsed:from:",
        spec: "think %1 for %2 seconds",
        inputs: ["%s", "%n"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_THINK",
        selector: "think:",
        spec: "think %1",
        inputs: ["%s"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_SHOW",
        selector: "show",
        spec: "show",
        inputs: [],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_HIDE",
        selector: "hide",
        spec: "hide",
        inputs: [],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_SWITCHCOSTUMETO",
        selector: "lookLike:",
        spec: "switch costume to %1",
        inputs: ["%m.costume"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_NEXTCOSTUME",
        selector: "nextCostume",
        spec: "next costume",
        inputs: [],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_NEXTBACKDROP_BLOCK",
        selector: "nextScene",
        spec: "next backdrop",
        inputs: [],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_SWITCHBACKDROPTO",
        selector: "startScene",
        spec: "switch backdrop to %1",
        inputs: ["%m.backdrop"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_SWITCHBACKDROPTOANDWAIT",
        selector: "startSceneAndWait",
        spec: "switch backdrop to %1 and wait",
        inputs: ["%m.backdrop"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_CHANGEEFFECTBY",
        selector: "changeGraphicEffect:by:",
        spec: "change %1 effect by %2",
        inputs: ["%m.effect", "%n"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_SETEFFECTTO",
        selector: "setGraphicEffect:to:",
        spec: "set %1 effect to %2",
        inputs: ["%m.effect", "%n"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_CLEARGRAPHICEFFECTS",
        selector: "filterReset",
        spec: "clear graphic effects",
        inputs: [],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_CHANGESIZEBY",
        selector: "changeSizeBy:",
        spec: "change size by %1",
        inputs: ["%n"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_SETSIZETO",
        selector: "setSizeTo:",
        spec: "set size to %1%",
        inputs: ["%n"],
        shape: "stack",
        category: "looks"
    }, {
        selector: "comeToFront",
        spec: "go to front",
        inputs: [],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_GOTOFRONTBACK",
        spec: "go to %1 layer",
        inputs: ["%m"],
        shape: "stack",
        category: "looks"
    }, {
        selector: "goBackByLayers:",
        spec: "go back %1 layers",
        inputs: ["%n"],
        shape: "stack",
        category: "looks"
    }, {
        id: "LOOKS_GOFORWARDBACKWARDLAYERS",
        spec: "go %1 %2 layers",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "looks"
    }, {
        id: "SOUND_PLAY",
        selector: "playSound:",
        spec: "start sound %1",
        inputs: ["%m.sound"],
        shape: "stack",
        category: "sound"
    }, {
        id: "SOUND_CHANGEEFFECTBY",
        spec: "change %1 effect by %2",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "sound"
    }, {
        id: "SOUND_SETEFFECTO",
        spec: "set %1 effect to %2",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "sound"
    }, {
        id: "SOUND_CLEAREFFECTS",
        spec: "clear sound effects",
        inputs: [],
        shape: "stack",
        category: "sound"
    }, {
        id: "SOUND_PLAYUNTILDONE",
        selector: "doPlaySoundAndWait",
        spec: "play sound %1 until done",
        inputs: ["%m.sound"],
        shape: "stack",
        category: "sound"
    }, {
        id: "SOUND_STOPALLSOUNDS",
        selector: "stopAllSounds",
        spec: "stop all sounds",
        inputs: [],
        shape: "stack",
        category: "sound"
    }, {
        id: "music.playDrumForBeats",
        selector: "playDrum",
        spec: "play drum %1 for %2 beats",
        inputs: ["%d.drum", "%n"],
        shape: "stack",
        category: "music"
    }, {
        id: "music.restForBeats",
        selector: "rest:elapsed:from:",
        spec: "rest for %1 beats",
        inputs: ["%n"],
        shape: "stack",
        category: "music"
    }, {
        id: "music.playNoteForBeats",
        selector: "noteOn:duration:elapsed:from:",
        spec: "play note %1 for %2 beats",
        inputs: ["%d.note", "%n"],
        shape: "stack",
        category: "music"
    }, {
        id: "music.setInstrument",
        selector: "instrument:",
        spec: "set instrument to %1",
        inputs: ["%d.instrument"],
        shape: "stack",
        category: "music"
    }, {
        id: "SOUND_CHANGEVOLUMEBY",
        selector: "changeVolumeBy:",
        spec: "change volume by %1",
        inputs: ["%n"],
        shape: "stack",
        category: "sound"
    }, {
        id: "SOUND_SETVOLUMETO",
        selector: "setVolumeTo:",
        spec: "set volume to %1%",
        inputs: ["%n"],
        shape: "stack",
        category: "sound"
    }, {
        id: "music.changeTempo",
        selector: "changeTempoBy:",
        spec: "change tempo by %1",
        inputs: ["%n"],
        shape: "stack",
        category: "music"
    }, {
        selector: "setTempoTo:",
        spec: "set tempo to %1 bpm",
        inputs: ["%n"],
        shape: "stack",
        category: "sound"
    }, {
        id: "music.setTempo",
        selector: "setTempoTo:",
        spec: "set tempo to %1",
        inputs: ["%n"],
        shape: "stack",
        category: "music"
    }, {
        id: "pen.clear",
        selector: "clearPenTrails",
        spec: "erase all",
        inputs: [],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.stamp",
        selector: "stampCostume",
        spec: "stamp",
        inputs: [],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.penDown",
        selector: "putPenDown",
        spec: "pen down",
        inputs: [],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.penUp",
        selector: "putPenUp",
        spec: "pen up",
        inputs: [],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.setColor",
        selector: "penColor:",
        spec: "set pen color to %1",
        inputs: ["%c"],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.changeHue",
        selector: "changePenHueBy:",
        spec: "change pen color by %1",
        inputs: ["%n"],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.setColorParam",
        spec: "set pen %1 to %2",
        inputs: ["%m.color", "%c"],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.changeColorParam",
        spec: "change pen %1 by %2",
        inputs: ["%m.color", "%n"],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.setHue",
        selector: "setPenHueTo:",
        spec: "set pen color to %1",
        inputs: ["%n"],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.changeShade",
        selector: "changePenShadeBy:",
        spec: "change pen shade by %1",
        inputs: ["%n"],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.setShade",
        selector: "setPenShadeTo:",
        spec: "set pen shade to %1",
        inputs: ["%n"],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.changeSize",
        selector: "changePenSizeBy:",
        spec: "change pen size by %1",
        inputs: ["%n"],
        shape: "stack",
        category: "pen"
    }, {
        id: "pen.setSize",
        selector: "penSize:",
        spec: "set pen size to %1",
        inputs: ["%n"],
        shape: "stack",
        category: "pen"
    }, {
        id: "EVENT_WHENFLAGCLICKED",
        selector: "whenGreenFlag",
        spec: "when @greenFlag clicked",
        inputs: [],
        shape: "hat",
        category: "events"
    }, {
        id: "EVENT_WHENKEYPRESSED",
        selector: "whenKeyPressed",
        spec: "when %1 key pressed",
        inputs: ["%m.key"],
        shape: "hat",
        category: "events"
    }, {
        id: "EVENT_WHENTHISSPRITECLICKED",
        selector: "whenClicked",
        spec: "when this sprite clicked",
        inputs: [],
        shape: "hat",
        category: "events"
    }, {
        id: "EVENT_WHENSTAGECLICKED",
        spec: "when stage clicked",
        inputs: [],
        shape: "hat",
        category: "events"
    }, {
        id: "EVENT_WHENBACKDROPSWITCHESTO",
        selector: "whenSceneStarts",
        spec: "when backdrop switches to %1",
        inputs: ["%m.backdrop"],
        shape: "hat",
        category: "events"
    }, {
        id: "EVENT_WHENGREATERTHAN",
        selector: "whenSensorGreaterThan",
        spec: "when %1 > %2",
        inputs: ["%m.triggerSensor", "%n"],
        shape: "hat",
        category: "events"
    }, {
        id: "EVENT_WHENBROADCASTRECEIVED",
        selector: "whenIReceive",
        spec: "when I receive %1",
        inputs: ["%m.broadcast"],
        shape: "hat",
        category: "events"
    }, {
        id: "EVENT_BROADCAST",
        selector: "broadcast:",
        spec: "broadcast %1",
        inputs: ["%m.broadcast"],
        shape: "stack",
        category: "events"
    }, {
        id: "EVENT_BROADCASTANDWAIT",
        selector: "doBroadcastAndWait",
        spec: "broadcast %1 and wait",
        inputs: ["%m.broadcast"],
        shape: "stack",
        category: "events"
    }, {
        id: "CONTROL_WAIT",
        selector: "wait:elapsed:from:",
        spec: "wait %1 seconds",
        inputs: ["%n"],
        shape: "stack",
        category: "control"
    }, {
        id: "CONTROL_REPEAT",
        selector: "doRepeat",
        spec: "repeat %1",
        inputs: ["%n"],
        shape: "c-block",
        category: "control",
        hasLoopArrow: !0
    }, {
        id: "CONTROL_FOREVER",
        selector: "doForever",
        spec: "forever",
        inputs: [],
        shape: "c-block cap",
        category: "control",
        hasLoopArrow: !0
    }, {
        id: "CONTROL_IF",
        selector: "doIf",
        spec: "if %1 then",
        inputs: ["%b"],
        shape: "c-block",
        category: "control"
    }, {
        id: "CONTROL_WAITUNTIL",
        selector: "doWaitUntil",
        spec: "wait until %1",
        inputs: ["%b"],
        shape: "stack",
        category: "control"
    }, {
        id: "CONTROL_REPEATUNTIL",
        selector: "doUntil",
        spec: "repeat until %1",
        inputs: ["%b"],
        shape: "c-block",
        category: "control",
        hasLoopArrow: !0
    }, {
        id: "CONTROL_STOP",
        selector: "stopScripts",
        spec: "stop %1",
        inputs: ["%m.stop"],
        shape: "cap",
        category: "control"
    }, {
        id: "CONTROL_STARTASCLONE",
        selector: "whenCloned",
        spec: "when I start as a clone",
        inputs: [],
        shape: "hat",
        category: "control"
    }, {
        id: "CONTROL_CREATECLONEOF",
        selector: "createCloneOf",
        spec: "create clone of %1",
        inputs: ["%m.spriteOnly"],
        shape: "stack",
        category: "control"
    }, {
        id: "CONTROL_DELETETHISCLONE",
        selector: "deleteClone",
        spec: "delete this clone",
        inputs: [],
        shape: "cap",
        category: "control"
    }, {
        id: "SENSING_ASKANDWAIT",
        selector: "doAsk",
        spec: "ask %1 and wait",
        inputs: ["%s"],
        shape: "stack",
        category: "sensing"
    }, {
        id: "videoSensing.videoToggle",
        selector: "setVideoState",
        spec: "turn video %1",
        inputs: ["%m.videoState"],
        shape: "stack",
        category: "video"
    }, {
        id: "videoSensing.setVideoTransparency",
        selector: "setVideoTransparency",
        spec: "set video transparency to %1%",
        inputs: ["%n"],
        shape: "stack",
        category: "video"
    }, {
        id: "videoSensing.whenMotionGreaterThan",
        spec: "when video motion > %1",
        inputs: ["%n"],
        shape: "hat",
        category: "video"
    }, {
        id: "SENSING_RESETTIMER",
        selector: "timerReset",
        spec: "reset timer",
        inputs: [],
        shape: "stack",
        category: "sensing"
    }, {
        id: "DATA_SETVARIABLETO",
        selector: "setVar:to:",
        spec: "set %1 to %2",
        inputs: ["%m.var", "%s"],
        shape: "stack",
        category: "variables"
    }, {
        id: "DATA_CHANGEVARIABLEBY",
        selector: "changeVar:by:",
        spec: "change %1 by %2",
        inputs: ["%m.var", "%n"],
        shape: "stack",
        category: "variables"
    }, {
        id: "DATA_SHOWVARIABLE",
        selector: "showVariable:",
        spec: "show variable %1",
        inputs: ["%m.var"],
        shape: "stack",
        category: "variables"
    }, {
        id: "DATA_HIDEVARIABLE",
        selector: "hideVariable:",
        spec: "hide variable %1",
        inputs: ["%m.var"],
        shape: "stack",
        category: "variables"
    }, {
        id: "DATA_ADDTOLIST",
        selector: "append:toList:",
        spec: "add %1 to %2",
        inputs: ["%s", "%m.list"],
        shape: "stack",
        category: "list"
    }, {
        id: "DATA_DELETEOFLIST",
        selector: "deleteLine:ofList:",
        spec: "delete %1 of %2",
        inputs: ["%d.listDeleteItem", "%m.list"],
        shape: "stack",
        category: "list"
    }, {
        id: "DATA_DELETEALLOFLIST",
        spec: "delete all of %1",
        inputs: ["%m.list"],
        shape: "stack",
        category: "list"
    }, {
        id: "MOTION_IFONEDGEBOUNCE",
        selector: "bounceOffEdge",
        spec: "if on edge, bounce",
        inputs: [],
        shape: "stack",
        category: "motion"
    }, {
        id: "DATA_INSERTATLIST",
        selector: "insert:at:ofList:",
        spec: "insert %1 at %2 of %3",
        inputs: ["%s", "%d.listItem", "%m.list"],
        shape: "stack",
        category: "list"
    }, {
        id: "DATA_REPLACEITEMOFLIST",
        selector: "setLine:ofList:to:",
        spec: "replace item %1 of %2 with %3",
        inputs: ["%d.listItem", "%m.list", "%s"],
        shape: "stack",
        category: "list"
    }, {
        id: "DATA_SHOWLIST",
        selector: "showList:",
        spec: "show list %1",
        inputs: ["%m.list"],
        shape: "stack",
        category: "list"
    }, {
        id: "DATA_HIDELIST",
        selector: "hideList:",
        spec: "hide list %1",
        inputs: ["%m.list"],
        shape: "stack",
        category: "list"
    }, {
        id: "SENSING_OF_XPOSITION",
        selector: "xpos",
        spec: "x position",
        inputs: [],
        shape: "reporter",
        category: "motion"
    }, {
        id: "SENSING_OF_YPOSITION",
        selector: "ypos",
        spec: "y position",
        inputs: [],
        shape: "reporter",
        category: "motion"
    }, {
        id: "SENSING_OF_DIRECTION",
        selector: "heading",
        spec: "direction",
        inputs: [],
        shape: "reporter",
        category: "motion"
    }, {
        id: "SENSING_OF_COSTUMENUMBER",
        selector: "costumeIndex",
        spec: "costume #",
        inputs: [],
        shape: "reporter",
        category: "looks"
    }, {
        id: "LOOKS_COSTUMENUMBERNAME",
        selector: "LOOKS_COSTUMENUMBERNAME",
        spec: "costume %1",
        inputs: ["%m"],
        shape: "reporter",
        category: "looks"
    }, {
        id: "SENSING_OF_SIZE",
        selector: "scale",
        spec: "size",
        inputs: [],
        shape: "reporter",
        category: "looks"
    }, {
        id: "SENSING_OF_BACKDROPNAME",
        selector: "sceneName",
        spec: "backdrop name",
        inputs: [],
        shape: "reporter",
        category: "looks"
    }, {
        id: "LOOKS_BACKDROPNUMBERNAME",
        spec: "backdrop %1",
        inputs: ["%m"],
        shape: "reporter",
        category: "looks"
    }, {
        id: "SENSING_OF_BACKDROPNUMBER",
        selector: "backgroundIndex",
        spec: "backdrop #",
        inputs: [],
        shape: "reporter",
        category: "looks"
    }, {
        id: "SOUND_VOLUME",
        selector: "volume",
        spec: "volume",
        inputs: [],
        shape: "reporter",
        category: "sound"
    }, {
        id: "music.getTempo",
        selector: "tempo",
        spec: "tempo",
        inputs: [],
        shape: "reporter",
        category: "music"
    }, {
        id: "SENSING_TOUCHINGOBJECT",
        selector: "touching:",
        spec: "touching %1?",
        inputs: ["%m.touching"],
        shape: "boolean",
        category: "sensing"
    }, {
        id: "SENSING_TOUCHINGCOLOR",
        selector: "touchingColor:",
        spec: "touching color %1?",
        inputs: ["%c"],
        shape: "boolean",
        category: "sensing"
    }, {
        id: "SENSING_COLORISTOUCHINGCOLOR",
        selector: "color:sees:",
        spec: "color %1 is touching %2?",
        inputs: ["%c", "%c"],
        shape: "boolean",
        category: "sensing"
    }, {
        id: "SENSING_DISTANCETO",
        selector: "distanceTo:",
        spec: "distance to %1",
        inputs: ["%m.spriteOrMouse"],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "SENSING_ANSWER",
        selector: "answer",
        spec: "answer",
        inputs: [],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "SENSING_KEYPRESSED",
        selector: "keyPressed:",
        spec: "key %1 pressed?",
        inputs: ["%m.key"],
        shape: "boolean",
        category: "sensing"
    }, {
        id: "SENSING_MOUSEDOWN",
        selector: "mousePressed",
        spec: "mouse down?",
        inputs: [],
        shape: "boolean",
        category: "sensing"
    }, {
        id: "SENSING_MOUSEX",
        selector: "mouseX",
        spec: "mouse x",
        inputs: [],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "SENSING_MOUSEY",
        selector: "mouseY",
        spec: "mouse y",
        inputs: [],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "SENSING_SETDRAGMODE",
        spec: "set drag mode %1",
        inputs: ["%m"],
        shape: "stack",
        category: "sensing"
    }, {
        id: "SENSING_LOUDNESS",
        selector: "soundLevel",
        spec: "loudness",
        inputs: [],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "videoSensing.videoOn",
        selector: "senseVideoMotion",
        spec: "video %1 on %2",
        inputs: ["%m.videoMotionType", "%m.stageOrThis"],
        shape: "reporter",
        category: "video"
    }, {
        id: "SENSING_TIMER",
        selector: "timer",
        spec: "timer",
        inputs: [],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "SENSING_OF",
        selector: "getAttribute:of:",
        spec: "%1 of %2",
        inputs: ["%m.attribute", "%m.spriteOrStage"],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "SENSING_CURRENT",
        selector: "timeAndDate",
        spec: "current %1",
        inputs: ["%m.timeAndDate"],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "SENSING_DAYSSINCE2000",
        selector: "timestamp",
        spec: "days since 2000",
        inputs: [],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "SENSING_USERNAME",
        selector: "getUserName",
        spec: "username",
        inputs: [],
        shape: "reporter",
        category: "sensing"
    }, {
        id: "OPERATORS_ADD",
        selector: "+",
        spec: "%1 + %2",
        inputs: ["%n", "%n"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_SUBTRACT",
        selector: "-",
        spec: "%1 - %2",
        inputs: ["%n", "%n"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_MULTIPLY",
        selector: "*",
        spec: "%1 * %2",
        inputs: ["%n", "%n"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_DIVIDE",
        selector: "/",
        spec: "%1 / %2",
        inputs: ["%n", "%n"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_RANDOM",
        selector: "randomFrom:to:",
        spec: "pick random %1 to %2",
        inputs: ["%n", "%n"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_LT",
        selector: "<",
        spec: "%1 < %2",
        inputs: ["%s", "%s"],
        shape: "boolean",
        category: "operators"
    }, {
        id: "OPERATORS_EQUALS",
        selector: "=",
        spec: "%1 = %2",
        inputs: ["%s", "%s"],
        shape: "boolean",
        category: "operators"
    }, {
        id: "OPERATORS_GT",
        selector: ">",
        spec: "%1 > %2",
        inputs: ["%s", "%s"],
        shape: "boolean",
        category: "operators"
    }, {
        id: "OPERATORS_AND",
        selector: "&",
        spec: "%1 and %2",
        inputs: ["%b", "%b"],
        shape: "boolean",
        category: "operators"
    }, {
        id: "OPERATORS_OR",
        selector: "|",
        spec: "%1 or %2",
        inputs: ["%b", "%b"],
        shape: "boolean",
        category: "operators"
    }, {
        id: "OPERATORS_NOT",
        selector: "not",
        spec: "not %1",
        inputs: ["%b"],
        shape: "boolean",
        category: "operators"
    }, {
        id: "OPERATORS_JOIN",
        selector: "concatenate:with:",
        spec: "join %1 %2",
        inputs: ["%s", "%s"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_LETTEROF",
        selector: "letter:of:",
        spec: "letter %1 of %2",
        inputs: ["%n", "%s"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_LENGTH",
        selector: "stringLength:",
        spec: "length of %1",
        inputs: ["%s"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_MOD",
        selector: "%",
        spec: "%1 mod %2",
        inputs: ["%n", "%n"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_ROUND",
        selector: "rounded",
        spec: "round %1",
        inputs: ["%n"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_MATHOP",
        selector: "computeFunction:of:",
        spec: "%1 of %2",
        inputs: ["%m.mathOp", "%n"],
        shape: "reporter",
        category: "operators"
    }, {
        id: "OPERATORS_CONTAINS",
        spec: "%1 contains %2?",
        inputs: ["%s", "%s"],
        shape: "boolean",
        category: "operators"
    }, {
        id: "DATA_ITEMOFLIST",
        selector: "getLine:ofList:",
        spec: "item %1 of %2",
        inputs: ["%d.listItem", "%m.list"],
        shape: "reporter",
        category: "list"
    }, {
        id: "DATA_ITEMNUMOFLIST",
        spec: "item # of %1 in %2",
        inputs: ["%s", "%m.list"],
        shape: "reporter",
        category: "list"
    }, {
        id: "DATA_LENGTHOFLIST",
        selector: "lineCountOfList:",
        spec: "length of %1",
        inputs: ["%m.list"],
        shape: "reporter",
        category: "list"
    }, {
        id: "DATA_LISTCONTAINSITEM",
        selector: "list:contains:",
        spec: "%1 contains %2?",
        inputs: ["%m.list", "%s"],
        shape: "boolean",
        category: "list"
    }, {
        id: "CONTROL_ELSE",
        spec: "else",
        inputs: [],
        shape: "celse",
        category: "control"
    }, {
        id: "scratchblocks:end",
        spec: "end",
        inputs: [],
        shape: "cend",
        category: "control"
    }, {
        id: "scratchblocks:ellipsis",
        spec: ". . .",
        inputs: [],
        shape: "stack",
        category: "grey"
    }, {
        id: "scratchblocks:addInput",
        spec: "%1 @addInput",
        inputs: ["%n"],
        shape: "ring",
        category: "grey"
    }, {
        id: "SENSING_USERID",
        spec: "user id",
        inputs: [],
        shape: "reporter",
        category: "obsolete"
    }, {
        selector: "doIf",
        spec: "if %1",
        inputs: ["%b"],
        shape: "c-block",
        category: "obsolete"
    }, {
        selector: "doForeverIf",
        spec: "forever if %1",
        inputs: ["%b"],
        shape: "c-block cap",
        category: "obsolete"
    }, {
        selector: "doReturn",
        spec: "stop script",
        inputs: [],
        shape: "cap",
        category: "obsolete"
    }, {
        selector: "stopAll",
        spec: "stop all",
        inputs: [],
        shape: "cap",
        category: "obsolete"
    }, {
        selector: "lookLike:",
        spec: "switch to costume %1",
        inputs: ["%m.costume"],
        shape: "stack",
        category: "obsolete"
    }, {
        selector: "nextScene",
        spec: "next background",
        inputs: [],
        shape: "stack",
        category: "obsolete"
    }, {
        selector: "startScene",
        spec: "switch to background %1",
        inputs: ["%m.backdrop"],
        shape: "stack",
        category: "obsolete"
    }, {
        selector: "backgroundIndex",
        spec: "background #",
        inputs: [],
        shape: "reporter",
        category: "obsolete"
    }, {
        id: "SENSING_LOUD",
        selector: "isLoud",
        spec: "loud?",
        inputs: [],
        shape: "boolean",
        category: "obsolete"
    }, {
        id: "text2speech.speakAndWaitBlock",
        spec: "speak %1",
        inputs: ["%s"],
        shape: "stack",
        category: "tts"
    }, {
        id: "text2speech.setVoiceBlock",
        spec: "set voice to %1",
        inputs: ["%m"],
        shape: "stack",
        category: "tts"
    }, {
        id: "text2speech.setLanguageBlock",
        spec: "set language to %1",
        inputs: ["%m"],
        shape: "stack",
        category: "tts"
    }, {
        id: "translate.translateBlock",
        spec: "translate %1 to %2",
        inputs: ["%s", "%m"],
        shape: "reporter",
        category: "translate"
    }, {
        id: "translate.viewerLanguage",
        spec: "language",
        shape: "reporter",
        category: "translate"
    }, {
        id: "makeymakey.whenKeyPressed",
        spec: "when %1 key pressed",
        inputs: ["%m"],
        shape: "hat",
        category: "makeymakey"
    }, {
        id: "makeymakey.whenKeysPressedInOrder",
        spec: "when %1 pressed in order",
        inputs: ["%m"],
        shape: "hat",
        category: "makeymakey"
    }, {
        id: "microbit.whenButtonPressed",
        spec: "when %1 button pressed",
        inputs: ["%m"],
        shape: "hat",
        category: "microbit"
    }, {
        id: "microbit.isButtonPressed",
        spec: "%1 button pressed?",
        inputs: ["%m"],
        shape: "boolean",
        category: "microbit"
    }, {
        id: "microbit.whenGesture",
        spec: "when %1",
        inputs: ["%m"],
        shape: "hat",
        category: "microbit"
    }, {
        id: "microbit.displaySymbol",
        spec: "display %1",
        inputs: ["%m"],
        shape: "stack",
        category: "microbit"
    }, {
        id: "microbit.displayText",
        spec: "display text %1",
        inputs: ["%s"],
        shape: "stack",
        category: "microbit"
    }, {
        id: "microbit.clearDisplay",
        spec: "clear display",
        shape: "stack",
        category: "microbit"
    }, {
        id: "microbit.whenTilted",
        spec: "when tilted %1",
        inputs: ["%m"],
        shape: "hat",
        category: "microbit"
    }, {
        id: "microbit.isTilted",
        spec: "tilted %1?",
        inputs: ["%m"],
        shape: "boolean",
        category: "microbit"
    }, {
        id: "microbit.tiltAngle",
        spec: "tilt angle %1",
        inputs: ["%m"],
        shape: "reporter",
        category: "microbit"
    }, {
        id: "microbit.whenPinConnected",
        spec: "when pin %1 connected",
        inputs: ["%m"],
        shape: "hat",
        category: "microbit"
    }, {
        id: "ev3.motorTurnClockwise",
        spec: "motor %1 turn this way for %2 seconds",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "ev3"
    }, {
        id: "ev3.motorTurnCounterClockwise",
        spec: "motor %1 turn that way for %2 seconds",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "ev3"
    }, {
        id: "ev3.motorSetPower",
        spec: "motor %1 set power %2%",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "ev3"
    }, {
        id: "ev3.getMotorPosition",
        spec: "motor %1 position",
        inputs: ["%m"],
        shape: "reporter",
        category: "ev3"
    }, {
        id: "ev3.whenButtonPressed",
        spec: "when button %1 pressed",
        inputs: ["%m"],
        shape: "hat",
        category: "ev3"
    }, {
        id: "ev3.whenDistanceLessThan",
        spec: "when distance < %1",
        inputs: ["%n"],
        shape: "hat",
        category: "ev3"
    }, {
        id: "ev3.whenBrightnessLessThan",
        spec: "when brightness < %1",
        inputs: ["%n"],
        shape: "hat",
        category: "ev3"
    }, {
        id: "ev3.buttonPressed",
        spec: "button %1 pressed?",
        inputs: ["%m"],
        shape: "boolean",
        category: "ev3"
    }, {
        id: "ev3.getDistance",
        spec: "distance",
        shape: "reporter",
        category: "ev3"
    }, {
        id: "ev3.getBrightness",
        spec: "brightness",
        shape: "reporter",
        category: "ev3"
    }, {
        id: "ev3.beepNote",
        spec: "beep note %1 for %2 secs",
        inputs: ["%d.note", "%n"],
        shape: "stack",
        category: "ev3"
    }, {
        id: "wedo2.motorOn",
        spec: "turn %1 on",
        inputs: ["%m.motor"],
        shape: "stack",
        category: "wedo"
    }, {
        id: "wedo2.motorOff",
        spec: "turn %1 off",
        inputs: ["%m.motor"],
        shape: "stack",
        category: "wedo"
    }, {
        id: "wedo2.startMotorPower",
        spec: "set %1 power to %2",
        inputs: ["%m.motor", "%n"],
        shape: "stack",
        category: "wedo"
    }, {
        id: "wedo2.setMotorDirection",
        spec: "set %1 direction to %2",
        inputs: ["%m.motor2", "%m.motorDirection"],
        shape: "stack",
        category: "wedo"
    }, {
        id: "wedo2.whenDistance",
        spec: "when distance %1 %2",
        inputs: ["%m.lessMore", "%n"],
        shape: "hat",
        category: "wedo"
    }, {
        id: "wedo2.getDistance",
        spec: "distance",
        inputs: [],
        shape: "reporter",
        category: "wedo"
    }, {
        id: "wedo2.motorOnFor",
        spec: "turn %1 on for %2 seconds",
        inputs: ["%m.motor", "%n"],
        shape: "stack",
        category: "wedo"
    }, {
        id: "wedo2.setLightHue",
        spec: "set light color to %1",
        inputs: ["%n"],
        shape: "stack",
        category: "wedo"
    }, {
        id: "wedo2.playNoteFor",
        spec: "play note %1 for %2 seconds",
        inputs: ["%n", "%n"],
        shape: "stack",
        category: "wedo"
    }, {
        id: "wedo2.whenTilted",
        spec: "when tilted %1",
        inputs: ["%m.xxx"],
        shape: "hat",
        category: "wedo"
    }, {
        id: "wedo2.isTilted",
        spec: "tilted %1?",
        inputs: ["%m"],
        shape: "boolean",
        category: "wedo"
    }, {
        id: "wedo2.getTiltAngle",
        spec: "tilt angle %1",
        inputs: ["%m.xxx"],
        shape: "reporter",
        category: "wedo"
    }, {
        id: "gdxfor.whenGesture",
        spec: "when %1",
        inputs: ["%m"],
        shape: "hat",
        category: "gdxfor"
    }, {
        id: "gdxfor.whenForcePushedOrPulled",
        spec: "when force sensor %1",
        inputs: ["%m"],
        shape: "hat",
        category: "gdxfor"
    }, {
        id: "gdxfor.getForce",
        spec: "force",
        shape: "reporter",
        category: "gdxfor"
    }, {
        id: "gdxfor.whenTilted",
        spec: "when tilted %1",
        inputs: ["%m"],
        shape: "hat",
        category: "gdxfor"
    }, {
        id: "gdxfor.isTilted",
        spec: "tilted %1?",
        inputs: ["%m"],
        shape: "boolean",
        category: "gdxfor"
    }, {
        id: "gdxfor.getTilt",
        spec: "tilt angle %1",
        inputs: ["%m"],
        shape: "reporter",
        category: "gdxfor"
    }, {
        id: "gdxfor.isFreeFalling",
        spec: "falling?",
        shape: "boolean",
        category: "gdxfor"
    }, {
        id: "gdxfor.getSpin",
        spec: "spin speed %1",
        inputs: ["%m"],
        shape: "reporter",
        category: "gdxfor"
    }, {
        id: "gdxfor.getAcceleration",
        spec: "acceleration %1",
        inputs: ["%m"],
        shape: "reporter",
        category: "gdxfor"
    }, {
        id: "boost.motorOnFor",
        spec: "turn motor %1 for %2 seconds",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "boost"
    }, {
        id: "boost.motorOnForRotation",
        spec: "turn motor %1 for %2 rotations",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "boost"
    }, {
        id: "boost.motorOn",
        spec: "turn motor %1 on",
        inputs: ["%m"],
        shape: "stack",
        category: "boost"
    }, {
        id: "boost.motorOff",
        spec: "turn motor %1 off",
        inputs: ["%m"],
        shape: "stack",
        category: "boost"
    }, {
        id: "boost.setMotorPower",
        spec: "set motor %1 speed to %2%",
        inputs: ["%m", "%n"],
        shape: "stack",
        category: "boost"
    }, {
        id: "boost.setMotorDirection",
        spec: "set motor %1 direction %2",
        inputs: ["%m", "%m"],
        shape: "stack",
        category: "boost"
    }, {
        id: "boost.getMotorPosition",
        spec: "motor %1 position",
        inputs: ["%m"],
        shape: "reporter",
        category: "boost"
    }, {
        id: "boost.whenColor",
        spec: "when %1 brick seen",
        inputs: ["%m"],
        shape: "hat",
        category: "boost"
    }, {
        id: "boost.seeingColor",
        spec: "seeing %1 brick?",
        inputs: ["%m"],
        shape: "boolean",
        category: "boost"
    }, {
        id: "boost.whenTilted",
        spec: "when tilted %1",
        inputs: ["%m"],
        shape: "hat",
        category: "boost"
    }, {
        id: "boost.getTiltAngle",
        spec: "tilt angle %1",
        inputs: ["%m"],
        shape: "reporter",
        category: "boost"
    }, {
        id: "boost.setLightHue",
        spec: "set light color to %1",
        inputs: ["%n"],
        shape: "stack",
        category: "boost"
    }].map((e=>{
        if (!e.id) {
            if (!e.selector)
                throw Error("Missing ID: " + e.spec);
            e.id = "sb2:" + e.selector
        }
        if (!e.spec)
            throw Error("Missing spec: " + e.id);
        const t = {
            id: e.id,
            spec: e.spec,
            parts: e.spec.split(V).filter((e=>e)),
            selector: e.selector || "sb3:" + e.id,
            inputs: null == e.inputs ? [] : e.inputs,
            shape: e.shape,
            category: e.category,
            hasLoopArrow: !!e.hasLoopArrow
        };
        if (m[t.id])
            throw Error("Duplicate ID: " + t.id);
        return m[t.id] = t,
        t
    }
    ))
      , k = {
        "@greenFlag": "⚑",
        "@turnRight": "↻",
        "@turnLeft": "↺",
        "@addInput": "▸",
        "@delInput": "◂"
    }
      , w = {};
    function v(e) {
        Object.keys(e).forEach((t=>function(e, t) {
            const s = t.blocksByHash = {};
            Object.keys(t.commands).forEach((e=>{
                const o = t.commands[e]
                  , i = m[e]
                  , r = A(o);
                s[r] || (s[r] = []),
                s[r].push(i);
                const c = d.exec(i.spec);
                if (c) {
                    const e = c[0]
                      , t = r.replace(A(e), k[e]);
                    s[t] || (s[t] = []),
                    s[t].push(i)
                }
            }
            )),
            t.nativeAliases = {},
            Object.keys(t.aliases).forEach((e=>{
                const o = t.aliases[e]
                  , i = m[o];
                if (void 0 === i)
                    throw Error("Invalid alias '" + o + "'");
                const r = A(e);
                s[r] || (s[r] = []),
                s[r].push(i),
                t.nativeAliases[o] || (t.nativeAliases[o] = []),
                t.nativeAliases[o].push(e)
            }
            )),
            Object.keys(t.renamedBlocks || {}).forEach((e=>{
                const s = t.renamedBlocks[e];
                if (!m[s])
                    throw Error("Unknown ID: " + s);
                const o = m[s]
                  , i = A(e);
                O.blocksByHash[i] || (O.blocksByHash[i] = []),
                O.blocksByHash[i].push(o)
            }
            )),
            t.nativeDropdowns = {},
            Object.keys(t.dropdowns).forEach((e=>{
                const s = t.dropdowns[e];
                t.nativeDropdowns[s] = e
            }
            )),
            t.code = e,
            w[e] = t
        }(t, e[t])))
    }
    const O = {
        aliases: {
            "turn ccw %1 degrees": "MOTION_TURNLEFT",
            "turn left %1 degrees": "MOTION_TURNLEFT",
            "turn cw %1 degrees": "MOTION_TURNRIGHT",
            "turn right %1 degrees": "MOTION_TURNRIGHT",
            "when flag clicked": "EVENT_WHENFLAGCLICKED",
            "when gf clicked": "EVENT_WHENFLAGCLICKED",
            "when green flag clicked": "EVENT_WHENFLAGCLICKED"
        },
        renamedBlocks: {
            "say %1 for %2 secs": "LOOKS_SAYFORSECS",
            "think %1 for %2 secs": "LOOKS_THINKFORSECS",
            "play sound %1": "SOUND_PLAY",
            "wait %1 secs": "CONTROL_WAIT",
            clear: "pen.clear"
        },
        definePrefix: ["define"],
        defineSuffix: [],
        ignorelt: ["when distance"],
        math: ["abs", "floor", "ceiling", "sqrt", "sin", "cos", "tan", "asin", "acos", "atan", "ln", "log", "e ^", "10 ^"],
        soundEffects: ["pitch", "pan left/right"],
        microbitWhen: ["moved", "shaken", "jumped"],
        osis: ["other scripts in sprite", "other scripts in stage"],
        dropdowns: {},
        commands: {}
    };
    function E(e, t) {
        if (!m[e])
            throw Error("Unknown ID: " + e);
        m[e].accepts = t
    }
    function S(e, t, s) {
        E(e, ((e,t,o)=>s(t, o))),
        E(t, ((e,t,o)=>!s(t, o)))
    }
    function T(e) {
        const t = [];
        for (const s of e.children) {
            if (!s.isLabel)
                return;
            t.push(s.value)
        }
        return t.join(" ")
    }
    function L(e, t) {
        if (!e)
            throw Error("Assertion failed! " + (t || ""))
    }
    y.forEach((e=>{
        O.commands[e.id] = e.spec
    }
    )),
    v({
        en: O
    }),
    S("OPERATORS_MATHOP", "SENSING_OF", ((e,t)=>{
        const s = e[0];
        if (!s.isInput)
            return;
        const o = s.value;
        return t.math.includes(o)
    }
    )),
    S("SOUND_CHANGEEFFECTBY", "LOOKS_CHANGEEFFECTBY", ((e,t)=>{
        for (const s of e)
            if ("dropdown" === s.shape) {
                const e = s.value;
                for (const s of t.soundEffects)
                    if (b(s) === b(e))
                        return !0
            }
        return !1
    }
    )),
    S("SOUND_SETEFFECTO", "LOOKS_SETEFFECTTO", ((e,t)=>{
        for (const s of e)
            if ("dropdown" === s.shape) {
                const e = s.value;
                for (const s of t.soundEffects)
                    if (b(s) === b(e))
                        return !0
            }
        return !1
    }
    )),
    S("DATA_LENGTHOFLIST", "OPERATORS_LENGTH", ((e,t)=>{
        const s = e[e.length - 1];
        if (s.isInput)
            return "dropdown" === s.shape
    }
    )),
    S("DATA_LISTCONTAINSITEM", "OPERATORS_CONTAINS", ((e,t)=>{
        const s = e[0];
        if (s.isInput)
            return "dropdown" === s.shape
    }
    )),
    S("pen.setColor", "pen.setHue", ((e,t)=>{
        const s = e[e.length - 1];
        return s.isInput && s.isColor || s.isBlock
    }
    )),
    S("microbit.whenGesture", "gdxfor.whenGesture", ((e,t)=>{
        for (const s of e)
            if ("dropdown" === s.shape) {
                const e = s.value;
                for (const s of t.microbitWhen)
                    if (b(s) === b(e))
                        return !0
            }
        return !1
    }
    )),
    S("ev3.buttonPressed", "microbit.isButtonPressed", ((e,t)=>{
        for (const t of e)
            if ("dropdown" === t.shape)
                switch (b(t.value)) {
                case "1":
                case "2":
                case "3":
                case "4":
                    return !0
                }
        return !1
    }
    )),
    function(e, t) {
        if (!m[e])
            throw Error("Unknown ID: " + e);
        m[e].specialCase = t
    }("CONTROL_STOP", ((e,s,o)=>{
        const i = s[s.length - 1];
        if (!i.isInput)
            return;
        const r = i.value;
        return o.osis.includes(r) ? t(t({}, m.CONTROL_STOP), {}, {
            shape: "stack"
        }) : void 0
    }
    ));
    class C {
        constructor(e, t) {
            this.value = e,
            this.cls = t || "",
            this.el = null,
            this.height = 12,
            this.metrics = null,
            this.x = 0
        }
        get isLabel() {
            return !0
        }
        stringify() {
            return "<" === this.value || ">" === this.value ? this.value : this.value.replace(/([<>[\](){}])/g, "\\$1")
        }
    }
    class N {
        constructor(e) {
            this.name = e,
            this.isArrow = "loopArrow" === e,
            L(N.icons[e], "no info for icon " + e)
        }
        get isIcon() {
            return !0
        }
        static get icons() {
            return {
                greenFlag: !0,
                stopSign: !0,
                turnLeft: !0,
                turnRight: !0,
                loopArrow: !0,
                addInput: !0,
                delInput: !0,
                list: !0
            }
        }
        stringify() {
            return k["@" + this.name] || ""
        }
    }
    class R {
        constructor(e, t, s) {
            this.shape = e,
            this.value = t,
            this.menu = s || null,
            this.isRound = "number" === e || "number-dropdown" === e,
            this.isBoolean = "boolean" === e,
            this.isStack = "stack" === e,
            this.isInset = "boolean" === e || "stack" === e || "reporter" === e,
            this.isColor = "color" === e,
            this.hasArrow = "dropdown" === e || "number-dropdown" === e,
            this.isDarker = "boolean" === e || "stack" === e || "dropdown" === e,
            this.isSquare = "string" === e || "color" === e || "dropdown" === e,
            this.hasLabel = !(this.isColor || this.isInset),
            this.label = this.hasLabel ? new C(t,"literal-" + this.shape) : null,
            this.x = 0
        }
        get isInput() {
            return !0
        }
        stringify() {
            if (this.isColor)
                return L("#" === this.value[0]),
                "[" + this.value + "]";
            let e = (this.value ? this.value + "" : "").replace(/([\]\\])/g, "\\$1").replace(/ v$/, " \\v");
            return this.hasArrow && (e += " v"),
            this.isRound ? "(" + e + ")" : this.isSquare ? "[" + e + "]" : this.isBoolean ? "<>" : this.isStack ? "{}" : e
        }
        translate(e) {
            if (this.hasArrow) {
                const e = this.menu || this.value;
                this.value = e,
                this.label = new C(this.value,"literal-" + this.shape)
            }
        }
    }
    class I {
        constructor(e, s, o) {
            L(e),
            this.info = t({}, e),
            this.children = s,
            this.comment = o || null,
            this.diff = null;
            const i = this.info.shape;
            this.isHat = "hat" === i || "cat" === i || "define-hat" === i,
            this.hasPuzzle = "stack" === i || "hat" === i || "cat" === i || "c-block" === i,
            this.isFinal = /cap/.test(i),
            this.isCommand = "stack" === i || "cap" === i || /block/.test(i),
            this.isOutline = "outline" === i,
            this.isReporter = "reporter" === i,
            this.isBoolean = "boolean" === i,
            this.isRing = "ring" === i,
            this.hasScript = /block/.test(i),
            this.isElse = "celse" === i,
            this.isEnd = "cend" === i
        }
        get isBlock() {
            return !0
        }
        stringify(e) {
            let t = null
              , s = !1
              , o = this.children.map((e=>(e.isIcon && (s = !0),
            t || e.isLabel || e.isIcon || (t = e),
            e.isScript ? "\n" + function(e) {
                return e.split("\n").map((e=>"  " + e)).join("\n")
            }(e.stringify()) + "\n" : e.stringify().trim() + " "))).join("").trim();
            const i = this.info.language;
            if (s && i && this.info.selector) {
                const e = i.nativeAliases[this.info.id];
                if (e && e.length) {
                    let s = e[0];
                    return h.test(s) && t && (s = s.replace(h, t.stringify())),
                    s
                }
            }
            let r = e || "";
            return (!1 === this.info.categoryIsDefault || "custom-arg" === this.info.category && (this.isReporter || this.isBoolean) || "custom" === this.info.category && "stack" === this.info.shape) && (r && (r += " "),
            r += this.info.category),
            r && (o += " :: " + r),
            this.hasScript ? o + "\nend" : "reporter" === this.info.shape ? "(" + o + ")" : "boolean" === this.info.shape ? "<" + o + ">" : o
        }
        translate(e, t) {
            if (!e)
                throw Error("Missing language");
            const s = this.info.id;
            if (!s)
                return;
            if ("PROCEDURES_DEFINITION" === s) {
                const t = this.children.find((e=>e.isOutline));
                this.children = [];
                for (const t of e.definePrefix)
                    this.children.push(new C(t));
                this.children.push(t);
                for (const t of e.defineSuffix)
                    this.children.push(new C(t));
                return
            }
            const o = this.info.language.commands[s]
              , i = e.commands[s];
            if (!i)
                return;
            const r = f(i)
              , c = this.children.filter((e=>!e.isLabel && !e.isIcon));
            t || c.forEach((t=>t.translate(e)));
            const n = f(o).parts.map((e=>g(e))).filter((e=>e));
            let l = 0;
            const h = n.map((e=>(l = Math.max(l, e),
            c[e - 1])))
              , p = c.slice(l);
            this.children = r.parts.map((e=>{
                if (!(e = e.trim()))
                    return;
                const t = g(e);
                return t ? h[t - 1] : d.test(e) ? new N(e.slice(1)) : new C(e)
            }
            )).filter((e=>e)),
            p.forEach(((t,s)=>{
                1 === s && "CONTROL_IF" === this.info.id && this.children.push(new C(e.commands.CONTROL_ELSE)),
                this.children.push(t)
            }
            )),
            this.info.language = e,
            this.info.isRTL = a.includes(e.code),
            this.info.categoryIsDefault = !0
        }
    }
    class M {
        constructor(e, t) {
            this.label = new C(e,"comment-label"),
            this.width = null,
            this.hasBlock = t
        }
        get isComment() {
            return !0
        }
        stringify() {
            return "// " + this.label.value
        }
    }
    class B {
        constructor(e) {
            L(e),
            this.child = e,
            e.isBlock ? (this.shape = e.info.shape,
            this.info = e.info) : this.shape = "stack"
        }
        get isGlow() {
            return !0
        }
        stringify() {
            if (this.child.isBlock)
                return this.child.stringify("+");
            return this.child.stringify().split("\n").map((e=>"+ " + e)).join("\n")
        }
        translate(e) {
            this.child.translate(e)
        }
    }
    class D {
        constructor(e) {
            this.blocks = e,
            this.isEmpty = !e.length,
            this.isFinal = !this.isEmpty && e[e.length - 1].isFinal
        }
        get isScript() {
            return !0
        }
        stringify() {
            return this.blocks.map((e=>{
                let t = e.stringify();
                return e.comment && (t += " " + e.comment.stringify()),
                t
            }
            )).join("\n")
        }
        translate(e) {
            this.blocks.forEach((t=>t.translate(e)))
        }
    }
    class x {
        constructor(e) {
            this.scripts = e
        }
        stringify() {
            return this.scripts.map((e=>e.stringify())).join("\n\n")
        }
        translate(e) {
            this.scripts.forEach((t=>t.translate(e)))
        }
    }
    function P(e, t, s) {
        let o = [];
        Array.isArray(t[t.length - 1]) && (o = t.pop());
        const i = [];
        for (const e of t)
            e.isLabel ? i.push(e.value) : e.isIcon ? i.push("@" + e.name) : i.push("_");
        const r = i.join(" ")
          , l = function(e, t, s, o) {
            for (const i of o)
                if (Object.prototype.hasOwnProperty.call(i.blocksByHash, e)) {
                    const o = i.blocksByHash[e];
                    for (let e of o)
                        if (("reporter" !== t.shape || "reporter" === e.shape || "ring" === e.shape) && ("boolean" !== t.shape || "boolean" === e.shape) && (!(o.length > 1 && e.accepts) || e.accepts(t, s, i)))
                            return e.specialCase && (e = e.specialCase(t, s, i) || e),
                            {
                                type: e,
                                lang: i
                            }
                }
        }(e.hash = b(r), e, t, s);
        let h, p;
        if (l)
            h = l.lang,
            p = l.type,
            e.language = h,
            e.isRTL = a.includes(h.code),
            ("ring" === p.shape ? "reporter" === e.shape : "stack" === e.shape) && (e.shape = p.shape),
            e.category = p.category,
            e.categoryIsDefault = !0,
            p.selector && (e.selector = p.selector),
            p.id && (e.id = p.id),
            e.hasLoopArrow = p.hasLoopArrow,
            ". . ." === p.spec && (t = [new C(". . .")]);
        else
            for (const o of s) {
                if (!F(t, o))
                    continue;
                e.shape = "define-hat",
                e.category = "custom";
                const i = t.splice(o.definePrefix.length, t.length - o.defineSuffix.length).map((e=>{
                    if (e.isInput && e.isBoolean)
                        e = P({
                            shape: "boolean",
                            argument: "boolean",
                            category: "custom-arg"
                        }, [new C("")], s);
                    else if (!e.isInput || "string" !== e.shape && "number" !== e.shape)
                        (e.isReporter || e.isBoolean) && e.info.categoryIsDefault && (e.info.category = "custom-arg",
                        e.info.argument = e.isBoolean ? "boolean" : "number");
                    else {
                        const t = e.value.split(/ +/g).map((e=>new C(e)));
                        e = P({
                            shape: "reporter",
                            argument: "string" === e.shape ? "string" : "number",
                            category: "custom-arg"
                        }, t, s)
                    }
                    return e
                }
                ))
                  , r = new I({
                    shape: "outline",
                    category: "custom",
                    categoryIsDefault: !0,
                    hasLoopArrow: !1
                },i);
                t.splice(o.definePrefix.length, 0, r);
                break
            }
        !function(e, t) {
            for (const s of t)
                u.test(s) ? (e.color = s,
                e.category = "",
                e.categoryIsDefault = !1) : c.includes(s) ? (e.category = s,
                e.categoryIsDefault = !1) : n.includes(s) ? e.shape = s : "loop" === s ? e.hasLoopArrow = !0 : "+" !== s && "-" !== s || (e.diff = s)
        }(e, o),
        e.hasLoopArrow && t.push(new N("loopArrow"));
        const V = new I(e,t);
        return p && d.test(p.spec) && V.translate(h, !0),
        "+" === e.diff ? new B(V) : (V.diff = e.diff,
        V)
    }
    function F(e, t) {
        if (e.length < t.definePrefix.length)
            return !1;
        if (e.length < t.defineSuffix.length)
            return !1;
        for (let s = 0; s < t.definePrefix.length; s++) {
            const o = t.definePrefix[s]
              , i = e[s];
            if (!i.isLabel || b(i.value) !== b(o))
                return !1
        }
        for (let s = 1; s <= t.defineSuffix.length; s++) {
            const o = t.defineSuffix[t.defineSuffix.length - s]
              , i = e[e.length - s];
            if (!i.isLabel || b(i.value) !== b(o))
                return !1
        }
        return !0
    }
    function z(e, t) {
        let s, o = e[0], i = 0;
        function r() {
            o = e[++i]
        }
        function c() {
            return e[i + 1]
        }
        function n() {
            for (let t = i + 1; t < e.length; t++)
                if (" " !== e[t])
                    return e[t]
        }
        let a = [];
        function l(e, s) {
            const o = s.filter((e=>!e.isLabel)).length;
            return P({
                shape: e,
                category: "reporter" !== e || o ? "obsolete" : "variables",
                categoryIsDefault: !0,
                hasLoopArrow: !1
            }, s, t)
        }
        function h(e, s) {
            const o = function(e, t) {
                for (const s of t)
                    if (Object.prototype.hasOwnProperty.call(s.nativeDropdowns, e))
                        return s.nativeDropdowns[e]
            }(s, t) || s;
            return new R(e,s,o)
        }
        function p(e) {
            const t = [];
            let s;
            for (; o && "\n" !== o; ) {
                if (("<" === o || ">" === o) && ">" === e && 1 === t.length && !t[t.length - 1].isLabel) {
                    const e = n();
                    if ("[" === e || "(" === e || "<" === e || "{" === e) {
                        s = null,
                        t.push(new C(o)),
                        r();
                        continue
                    }
                }
                if (o === e)
                    break;
                if ("/" === o && "/" === c() && !e)
                    break;
                switch (o) {
                case "[":
                    s = null,
                    t.push(d());
                    break;
                case "(":
                    s = null,
                    t.push(g());
                    break;
                case "<":
                    s = null,
                    t.push(f());
                    break;
                case "{":
                    s = null,
                    t.push(A());
                    break;
                case " ":
                case "\t":
                    r(),
                    s = null;
                    break;
                case "◂":
                case "▸":
                    t.push(b()),
                    s = null;
                    break;
                case "@":
                    {
                        r();
                        let e = "";
                        for (; o && /[a-zA-Z]/.test(o); )
                            e += o,
                            r();
                        "cloud" === e ? t.push(new C("☁")) : t.push(Object.prototype.hasOwnProperty.call(N.icons, e) ? new N(e) : new C("@" + e)),
                        s = null;
                        break
                    }
                case "\\":
                    r();
                case ":":
                    if (":" === o && ":" === c())
                        return t.push(m(e)),
                        t;
                default:
                    s || t.push(s = new C("")),
                    s.value += o,
                    r()
                }
            }
            return t
        }
        function d() {
            r();
            let e = ""
              , t = !1;
            for (; o && "]" !== o && "\n" !== o; ) {
                if ("\\" === o) {
                    if (r(),
                    "v" === o && (t = !0),
                    !o)
                        break
                } else
                    t = !1;
                e += o,
                r()
            }
            return "]" === o && r(),
            u.test(e) ? new R("color",e) : !t && / v$/.test(e) ? h("dropdown", e.slice(0, e.length - 2)) : new R("string",e)
        }
        function V(e) {
            const t = p(e);
            if (o && "\n" === o && (s = !0,
            r()),
            0 !== t.length) {
                if (1 === t.length) {
                    const e = t[0];
                    if (e.isBlock && (e.isReporter || e.isBoolean || e.isRing))
                        return e
                }
                return l("stack", t)
            }
        }
        function g() {
            if (r(),
            " " === o && (r(),
            "v" === o && ")" === c()))
                return r(),
                r(),
                new R("number-dropdown","");
            const e = p(")");
            if (o && ")" === o && r(),
            0 === e.length)
                return new R("number","");
            if (1 === e.length && e[0].isLabel) {
                const t = e[0].value;
                if (/^[0-9e.-]*$/.test(t))
                    return new R("number",t);
                if (u.test(t))
                    return new R("color",t)
            }
            if (e.length > 1 && e.every((e=>e.isLabel))) {
                if ("v" === e[e.length - 1].value) {
                    e.pop();
                    return h("number-dropdown", e.map((e=>e.value)).join(" "))
                }
            }
            const t = l("reporter", e);
            if (t.info && "ring" === t.info.shape) {
                const e = t.children[0];
                e && e.isInput && "number" === e.shape && "" === e.value ? t.children[0] = new R("reporter") : (e && e.isScript && e.isEmpty || e && e.isBlock && !e.children.length) && (t.children[0] = new R("stack"))
            }
            return t
        }
        function f() {
            r();
            const e = p(">");
            return o && ">" === o && r(),
            0 === e.length ? new R("boolean") : l("boolean", e)
        }
        function A() {
            r(),
            s = !1;
            const e = H((function() {
                for (; o && "}" !== o; ) {
                    const e = V("}");
                    if (e)
                        return e
                }
            }
            ));
            let t = [];
            return e.forEach((e=>{
                t = t.concat(e.blocks)
            }
            )),
            "}" === o && r(),
            s ? new D(t) : (function(e, t) {
                if (!e)
                    throw Error("Assertion failed! " + (t || ""))
            }(t.length <= 1),
            t.length ? t[0] : l("stack", []))
        }
        function b() {
            const e = o;
            switch (r(),
            e) {
            case "▸":
                return new N("addInput");
            case "◂":
                return new N("delInput");
            default:
                return
            }
        }
        function m(e) {
            r(),
            r();
            const t = [];
            let s = "";
            for (; o && "\n" !== o && o !== e; ) {
                if (" " === o)
                    s && (t.push(s),
                    s = "");
                else {
                    if ("/" === o && "/" === c())
                        break;
                    s += o
                }
                r()
            }
            return s && t.push(s),
            t
        }
        function y() {
            let e;
            "+" !== o && "-" !== o || (e = o,
            r());
            const t = V();
            if ("/" === o && "/" === c()) {
                const e = function(e) {
                    r(),
                    r();
                    let t = "";
                    for (; o && "\n" !== o && o !== e; )
                        t += o,
                        r();
                    return o && "\n" === o && r(),
                    new M(t,!0)
                }();
                if (e.hasBlock = t && t.children.length,
                !e.hasBlock)
                    return e;
                t.comment = e
            }
            return t && (t.diff = e),
            t
        }
        return t.map((e=>{
            a = a.concat(e.define)
        }
        )),
        ()=>{
            if (!o)
                return;
            return y() || "NL"
        }
    }
    function H(e) {
        let s = e();
        function o() {
            s = e()
        }
        function i() {
            const e = s;
            if (o(),
            e.hasScript)
                for (; ; ) {
                    const t = r();
                    if (e.children.push(new D(t)),
                    !s || !s.isElse) {
                        s && s.isEnd && o();
                        break
                    }
                    for (const t of s.children)
                        e.children.push(t);
                    o()
                }
            return e
        }
        function r() {
            const e = [];
            for (; s; ) {
                if ("NL" === s) {
                    o();
                    continue
                }
                if (!s.isCommand)
                    return e;
                const t = i()
                  , r = "+" === t.diff;
                if (r && (t.diff = null),
                r) {
                    const s = e[e.length - 1];
                    let o = [];
                    s && s.isGlow && (e.pop(),
                    o = s.child.isScript ? s.child.blocks : [s.child]),
                    o.push(t),
                    e.push(new B(new D(o)))
                } else
                    e.push(t)
            }
            return e
        }
        return function() {
            for (; "NL" === s; )
                o();
            const e = [];
            for (; s; ) {
                let r = [];
                for (; s && "NL" !== s; ) {
                    let s = i();
                    const o = "+" === s.diff;
                    if (o && (s.diff = null),
                    (s.isElse || s.isEnd) && (s = new I(t(t({}, s.info), {}, {
                        shape: "stack"
                    }),s.children)),
                    o) {
                        const e = r[r.length - 1];
                        let t = [];
                        e && e.isGlow && (r.pop(),
                        t = e.child.isScript ? e.child.blocks : [e.child]),
                        t.push(s),
                        r.push(new B(new D(t)))
                    } else if (s.isHat)
                        r.length && e.push(new D(r)),
                        r = [s];
                    else {
                        if (s.isFinal) {
                            r.push(s);
                            break
                        }
                        if (!s.isCommand) {
                            r.length && e.push(new D(r)),
                            e.push(new D([s])),
                            r = [];
                            break
                        }
                        r.push(s)
                    }
                }
                for (r.length && e.push(new D(r)); "NL" === s; )
                    o()
            }
            return e
        }()
    }
    function U(e, t) {
        e.isScript ? e.blocks = e.blocks.map((e=>(U(e, t),
        t(e) || e))) : e.isBlock ? e.children = e.children.map((e=>(U(e, t),
        t(e) || e))) : e.isGlow && U(e.child, t)
    }
    const G = {
        "append:toList:": 1,
        "deleteLine:ofList:": 1,
        "insert:at:ofList:": 2,
        "setLine:ofList:to:": 1,
        "showList:": 0,
        "hideList:": 0
    };
    function j(e, s) {
        if ((s = t({
            inline: !1,
            languages: ["en"]
        }, s)).dialect)
            throw Error("Option 'dialect' no longer supported");
        e = (e = e.replace(/&lt;/g, "<")).replace(/&gt;/g, ">"),
        s.inline && (e = e.replace(/\n/g, " "));
        const o = s.languages.map((e=>{
            const t = w[e];
            if (!t)
                throw Error("Unknown language: '" + e + "'");
            return t
        }
        ))
          , i = H(z(e, o));
        return function(e) {
            const t = Object.create(null)
              , s = new Set;
            e.forEach((e=>{
                const o = new Set;
                U(e, (e=>{
                    if (e.isBlock)
                        if ("define-hat" === e.info.shape) {
                            const s = e.children.find((e=>e.isOutline));
                            if (!s)
                                return;
                            const i = []
                              , r = [];
                            for (const e of s.children)
                                if (e.isLabel)
                                    r.push(e.value);
                                else if (e.isBlock) {
                                    if (!e.info.argument)
                                        return;
                                    r.push({
                                        number: "%n",
                                        string: "%s",
                                        boolean: "%b"
                                    }[e.info.argument]);
                                    const t = T(e);
                                    i.push(t),
                                    o.add(t)
                                }
                            const c = r.join(" ")
                              , n = A(c)
                              , a = {
                                spec: c,
                                names: i
                            };
                            t[n] || (t[n] = a),
                            e.info.id = "PROCEDURES_DEFINITION",
                            e.info.selector = "procDef",
                            e.info.call = a.spec,
                            e.info.names = a.names,
                            e.info.category = "custom"
                        } else if (e.info.categoryIsDefault && (e.isReporter || e.isBoolean)) {
                            const t = T(e);
                            o.has(t) && (e.info.category = "custom-arg",
                            e.info.categoryIsDefault = !1,
                            e.info.selector = "getParam")
                        } else if (Object.prototype.hasOwnProperty.call(G, e.info.selector)) {
                            const t = G[e.info.selector]
                              , o = e.children.filter((e=>!e.isLabel))[t];
                            o && o.isInput && s.add(o.value)
                        }
                }
                ))
            }
            )),
            e.forEach((e=>{
                U(e, (e=>{
                    if (e.info && e.info.categoryIsDefault && "obsolete" === e.info.category) {
                        const s = t[e.info.hash];
                        return void (s && (e.info.selector = "call",
                        e.info.call = s.spec,
                        e.info.names = s.names,
                        e.info.category = "custom"))
                    }
                    let o, i;
                    e.isReporter && "variables" === e.info.category && e.info.categoryIsDefault && (e.info.selector = "readVariable",
                    o = T(e),
                    i = e.info),
                    o && s.has(o) && (i.category = "list",
                    i.categoryIsDefault = !1,
                    i.selector = "contentsOfList:")
                }
                ))
            }
            ))
        }(i),
        new x(i)
    }
    let K, _;
    const W = {
        textContent: !0
    };
    class X {
        static init(e) {
            K = e.document;
            const t = e.DOMParser;
            _ = (new t).parseFromString("<xml></xml>", "application/xml"),
            X.XMLSerializer = e.XMLSerializer
        }
        static makeCanvas() {
            return K.createElement("canvas")
        }
        static cdata(e) {
            return _.createCDATASection(e)
        }
        static el(e, t) {
            const s = K.createElementNS("http://www.w3.org/2000/svg", e);
            return X.setProps(s, t)
        }
        static setProps(e, t) {
            for (const s in t) {
                const o = t[s] + "";
                W[s] ? e[s] = o : null != t[s] && Object.prototype.hasOwnProperty.call(t, s) && e.setAttributeNS(null, s, o)
            }
            return e
        }
        static withChildren(e, t) {
            for (const s of t)
                e.appendChild(s);
            return e
        }
        static group(e) {
            return X.withChildren(X.el("g"), e)
        }
        static newSVG(e, t, s) {
            return X.el("svg", {
                version: "1.1",
                width: e * s,
                height: t * s,
                viewBox: "0 0 " + e * s + " " + t * s
            })
        }
        static polygon(e) {
            return X.el("polygon", t(t({}, e), {}, {
                points: e.points.join(" ")
            }))
        }
        static path(e) {
            return X.el("path", t(t({}, e), {}, {
                path: null,
                d: e.path.join(" ")
            }))
        }
        static text(e, s, o, i) {
            return X.el("text", t(t({}, i), {}, {
                x: e,
                y: s,
                textContent: o
            }))
        }
        static symbol(e) {
            return X.el("use", {
                href: e
            })
        }
        static move(e, t, s) {
            return X.setProps(s, {
                transform: "translate(" + e + " " + t + ")"
            }),
            s
        }
        static rect(e, s, o) {
            return X.el("rect", t(t({}, o), {}, {
                x: 0,
                y: 0,
                width: e,
                height: s
            }))
        }
        static roundRect(e, s, o) {
            return X.rect(e, s, t(t({}, o), {}, {
                rx: 4,
                ry: 4
            }))
        }
        static pillRect(e, s, o) {
            const i = s / 2;
            return X.rect(e, s, t(t({}, o), {}, {
                rx: i,
                ry: i
            }))
        }
        static pointedPath(e, t) {
            const s = t / 2;
            return ["M " + s + " 0", "L " + (e - s) + " 0 " + e + " " + s, "L " + e + " " + s + " " + (e - s) + " " + t, "L " + s + " " + t + " 0 " + s, "L 0 " + s + " " + s + " 0", "Z"]
        }
        static pointedRect(e, s, o) {
            return X.path(t(t({}, o), {}, {
                path: X.pointedPath(e, s)
            }))
        }
        static topNotch(e, t) {
            return "c 2 0 3 1 4 2\n      l 4 4\n      c 1 1 2 2 4 2\n      h 12\n      c 2 0 3 -1 4 -2\n      l 4 -4\n      c 1 -1 2 -2 4 -2\n      L " + (e - 4) + " " + t + "\n      a 4 4 0 0 1 4 4"
        }
        static getTop(e) {
            return "M 0 4\n      A 4 4 0 0 1 4 0\n      H 12 " + X.topNotch(e, 0)
        }
        static getRingTop(e) {
            return "M 0 3\n      L 3 0\n      L 7 0\n      L 10 3\n      L 16 3\n      L 19 0\n      L " + (e - 3) + " 0\n      L " + e + " 3"
        }
        static getRightAndBottom(e, t, s, o) {
            void 0 === o && (o = 0);
            let i = ["L " + e + " " + (t - 4), "a 4 4 0 0 1 -4 4"];
            return s && (i = i.concat(["L " + (o + 48) + " " + t, "c -2 0 -3 1 -4 2", "l -4 4", "c -1 1 -2 2 -4 2", "h -12", "c -2 0 -3 -1 -4 -2", "l -4 -4", "c -1 -1 -2 -2 -4 -2"])),
            0 === o ? (i.push("L", o + 4, t),
            i.push("a 4 4 0 0 1 -4 -4")) : (i.push("L", o + 4, t),
            i.push("a 4 4 0 0 0 -4 4")),
            i.join(" ")
        }
        static getArm(e, t) {
            return "L 16 " + (t - 4) + "\n      a 4 4 0 0 0 4 4\n      L 28 " + t + " " + X.topNotch(e, t)
        }
        static getArmNoNotch(e, t) {
            return "L 16 " + (t - 4) + "\n      a 4 4 0 0 0 4 4\n      L 28 " + t + " L " + (e - 4) + " " + t + "\n      a 4 4 0 0 1 4 4"
        }
        static stackRect(e, s, o) {
            return X.path(t(t({}, o), {}, {
                path: [X.getTop(e), X.getRightAndBottom(e, s, !0, 0), "Z"]
            }))
        }
        static capPath(e, t) {
            return [X.getTop(e), X.getRightAndBottom(e, t, !1, 0), "Z"]
        }
        static capRect(e, s, o) {
            return X.path(t(t({}, o), {}, {
                path: X.capPath(e, s)
            }))
        }
        static getHatTop(e) {
            return "M 0 16 c 25,-22 71,-22 96,0 L " + (e - 4) + " 16 a 4 4 0 0 1 4 4"
        }
        static getCatTop(e) {
            return "M 0 32\n      c2.6,-2.3 5.5,-4.3 8.5,-6.2c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1\n      L " + (e - 4) + " 32\n      a 4 4 0 0 1 4 4"
        }
        static hatRect(e, s, o) {
            return X.path(t(t({}, o), {}, {
                path: [X.getHatTop(e), X.getRightAndBottom(e, s, !0, 0), "Z"]
            }))
        }
        static catHat(e, s, o) {
            return X.group([X.path(t(t({}, o), {}, {
                path: [X.getCatTop(e), X.getRightAndBottom(e, s, !0, 0), "Z"]
            })), X.move(0, 32, X.setProps(X.group([X.el("circle", {
                cx: 29.1,
                cy: -3.3,
                r: 3.4
            }), X.el("circle", {
                cx: 59.2,
                cy: -3.3,
                r: 3.4
            }), X.el("path", {
                d: "M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z"
            })]), {
                fill: "#000",
                "fill-opacity": .6
            })), X.move(0, 32, X.el("path", {
                d: "M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6C72.8-12.3,72.4-13.7,73.1-15.6z",
                fill: "#FFD5E6",
                transform: "translate(0, 32)"
            })), X.move(0, 32, X.el("path", {
                d: "M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6C22.8-12.3,23.2-13.7,22.4-15.6z",
                fill: "#FFD5E6",
                transform: "translate(0, 32)"
            }))])
        }
        static getProcHatTop(e) {
            return "M 0 20 a 20 20 0 0 1 20 -20 L " + (e - 20) + " 0 a 20,20 0 0,1 20,20"
        }
        static procHatRect(e, s, o) {
            return X.path(t(t({}, o), {}, {
                path: [X.getProcHatTop(e), X.getRightAndBottom(e, s, !0, 0), "Z"]
            }))
        }
        static mouthRect(e, s, o, i, r) {
            let c = i[0].height;
            const n = [X.getTop(e), X.getRightAndBottom(e, c, !0, 16)];
            for (let t = 1; t < i.length; t += 2) {
                const s = t + 2 === i.length
                  , r = i[t];
                c += r.height - 3,
                r.isFinal ? n.push(X.getArmNoNotch(e, c)) : n.push(X.getArm(e, c));
                const a = !(s && o)
                  , l = s ? 0 : 16;
                c += i[t + 1].height + 3,
                n.push(X.getRightAndBottom(e, c, a, l))
            }
            return n.push("Z"),
            X.path(t(t({}, r), {}, {
                path: n
            }))
        }
        static commentRect(e, s, o) {
            return X.roundRect(e, s, t(t({}, o), {}, {
                class: "sb3-comment"
            }))
        }
        static commentLine(e, s) {
            return X.move(-e, 9, X.rect(e, 2, t(t({}, s), {}, {
                class: "sb3-comment-line"
            })))
        }
        static strikethroughLine(e, s) {
            return X.path(t(t({}, s), {}, {
                path: ["M", 0, 0, "L", e, 0],
                class: "sb3-diff sb3-diff-del"
            }))
        }
    }
    const Q = new Set(["dropdownArrow", "turnRight", "turnLeft", "loopArrow", "musicBlock", "penBlock", "videoBlock", "ttsBlock", "translationBlock"]);
    class Y {
        static get cssContent() {
            return ".sb3-label{font:500 12pt Helvetica Neue,Helvetica,sans-serif;word-spacing:1pt}.sb3-literal-dropdown,.sb3-literal-number,.sb3-literal-number-dropdown,.sb3-literal-string{word-spacing:0}.sb3-diff{fill:none;stroke:#000}.sb3-diff-ins{stroke-width:2px}.sb3-diff-del{stroke-width:3px}svg .sb3-motion{fill:#4c97ff;stroke:#3373cc}svg .sb3-motion-alt{fill:#4280d7}svg .sb3-motion-dark{fill:#3373cc}svg .sb3-looks{fill:#96f;stroke:#774dcb}svg .sb3-looks-alt{fill:#855cd6}svg .sb3-looks-dark{fill:#774dcb}svg .sb3-sound{fill:#cf63cf;stroke:#bd42bd}svg .sb3-sound-alt{fill:#c94fc9}svg .sb3-sound-dark{fill:#bd42bd}svg .sb3-control{fill:#ffab19;stroke:#cf8b17}svg .sb3-control-alt{fill:#ec9c13}svg .sb3-control-dark{fill:#cf8b17}svg .sb3-events{fill:#ffbf00;stroke:#c90}svg .sb3-events-alt{fill:#e6ac00}svg .sb3-events-dark{fill:#c90}svg .sb3-sensing{fill:#5cb1d6;stroke:#2e8eb8}svg .sb3-sensing-alt{fill:#47a8d1}svg .sb3-sensing-dark{fill:#2e8eb8}svg .sb3-operators{fill:#59c059;stroke:#389438}svg .sb3-operators-alt{fill:#46b946}svg .sb3-operators-dark{fill:#389438}svg .sb3-variables{fill:#ff8c1a;stroke:#db6e00}svg .sb3-variables-alt{fill:#ff8000}svg .sb3-variables-dark{fill:#db6e00}svg .sb3-list{fill:#ff661a;stroke:#e64d00}svg .sb3-list-alt{fill:#f50}svg .sb3-list-dark{fill:#e64d00}svg .sb3-custom{fill:#ff6680;stroke:#f35}svg .sb3-custom-alt{fill:#ff4d6a}svg .sb3-custom-dark{fill:#f35}svg .sb3-extension{fill:#0fbd8c;stroke:#0b8e69}svg .sb3-extension-alt{fill:#0da57a}svg .sb3-extension-dark{fill:#0b8e69}svg .sb3-obsolete{fill:#ed4242;stroke:#ca2b2b}svg .sb3-obsolete-alt{fill:#db3333}svg .sb3-obsolete-dark{fill:#ca2b2b}svg .sb3-grey{fill:#bfbfbf;stroke:#909090}svg .sb3-grey-alt{fill:#b2b2b2}svg .sb3-grey-dark{fill:#909090}svg .sb3-label{fill:#fff}svg .sb3-input-color{stroke:#fff}svg .sb3-input-number,svg .sb3-input-string{fill:#fff}svg .sb3-literal-number,svg .sb3-literal-string{fill:#575e75}svg .sb3-custom-arg{fill:#ff6680;stroke:#f35}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion{fill:#80b5ff;stroke:#3373cc}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion-alt{fill:#b3d2ff}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion-dark{fill:#3373cc}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks{fill:#ccb3ff;stroke:#774dcb}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks-alt{fill:#dcf}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks-dark{fill:#774dcb}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound{fill:#e19de1;stroke:#bd42bd}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound-alt{fill:#ffb3ff}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound-dark{fill:#bd42bd}svg.scratchblocks-style-scratch3-high-contrast .sb3-control{fill:#ffbe4c;stroke:#cf8b17}svg.scratchblocks-style-scratch3-high-contrast .sb3-control-alt{fill:#ffda99}svg.scratchblocks-style-scratch3-high-contrast .sb3-control-dark{fill:#cf8b17}svg.scratchblocks-style-scratch3-high-contrast .sb3-events{fill:#ffd966;stroke:#c90}svg.scratchblocks-style-scratch3-high-contrast .sb3-events-alt{fill:#ffecb3}svg.scratchblocks-style-scratch3-high-contrast .sb3-events-dark{fill:#c90}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing{fill:#85c4e0;stroke:#2e8eb8}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing-alt{fill:#aed8ea}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing-dark{fill:#2e8eb8}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators{fill:#7ece7e;stroke:#389438}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators-alt{fill:#b5e3b5}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators-dark{fill:#389438}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables{fill:#ffa54c;stroke:#db6e00}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables-alt{fill:#fc9}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables-dark{fill:#db6e00}svg.scratchblocks-style-scratch3-high-contrast .sb3-list{fill:#f96;stroke:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-list-alt{fill:#ffcab0}svg.scratchblocks-style-scratch3-high-contrast .sb3-list-dark{fill:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom{fill:#f9a;stroke:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-alt{fill:#ffccd5}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-dark{fill:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension{fill:#13ecaf;stroke:#0b8e69}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-alt{fill:#75f0cd}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-dark{fill:#0b8e69}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete{fill:#fc6666;stroke:#d32121}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete-alt{fill:#fcb0b0}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete-dark{fill:#d32121}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey{fill:#bfbfbf;stroke:#959595}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey-alt{fill:#b2b2b2}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey-dark{fill:#959595}svg.scratchblocks-style-scratch3-high-contrast .sb3-label{fill:#000}svg.scratchblocks-style-scratch3-high-contrast .sb3-input-color{stroke:#fff}svg.scratchblocks-style-scratch3-high-contrast .sb3-input-number,svg.scratchblocks-style-scratch3-high-contrast .sb3-input-string{fill:#fff}svg.scratchblocks-style-scratch3-high-contrast .sb3-literal-number,svg.scratchblocks-style-scratch3-high-contrast .sb3-literal-string{fill:#000}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-arg{fill:#f9a;stroke:#e64d00}.sb3-comment{fill:#ffffa5;stroke:#d0d1d2;stroke-width:1}.sb3-comment-line{fill:#ffff80}.sb3-comment-label,.sb3-label.sb3-comment-label{font:400 12pt Helvetica Neue,Helvetica,sans-serif;fill:#000;word-spacing:0}"
        }
        static makeCommonIcons() {
            return [X.setProps(X.group([X.el("path", {
                d: "M20.8 3.7c-.4-.2-.9-.1-1.2.2-2 1.6-4.8 1.6-6.8 0-2.3-1.9-5.6-2.3-8.3-1v-.4c0-.6-.5-1-1-1s-1 .4-1 1v18.8c0 .5.5 1 1 1h.1c.5 0 1-.5 1-1v-6.4c1-.7 2.1-1.2 3.4-1.3 1.2 0 2.4.4 3.4 1.2 2.9 2.3 7 2.3 9.8 0 .3-.2.4-.5.4-.9V4.7c0-.5-.3-.9-.8-1zm-.3 10.2C18 16 14.4 16 11.9 14c-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2l.1.1-.1 9.2z",
                fill: "#45993d"
            }), X.el("path", {
                d: "M20.6 4.8l-.1 9.1v.1c-2.5 2-6.1 2-8.6 0-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2c0 .1.1.1.1.2z",
                fill: "#4cbf56"
            })]), {
                id: "sb3-greenFlag"
            }), X.setProps(X.el("polygon", {
                points: "6.6,0.5 13.12,0.5 19.5,6.6 19.5,13.12 13.12,19.5 6.6,19.5 0.5,13.12 0.5,6.6 ",
                fill: "#ec5959",
                stroke: "#b84848",
                "stroke-linejoin": "round",
                "stroke-linecap": "round"
            }), {
                id: "sb3-stopSign"
            }), X.el("path", {
                d: "M0 0L4 4L0 8Z",
                fill: "#111",
                id: "sb3-addInput"
            }), X.el("path", {
                d: "M4 0L4 8L0 4Z",
                fill: "#111",
                id: "sb3-delInput"
            }), X.setProps(X.group([X.el("rect", {
                x: "0",
                y: "0",
                width: "15",
                height: "18",
                fill: "#fff"
            }), X.el("rect", {
                x: "1",
                y: "1",
                width: "13",
                height: "4",
                fill: "#ff920f"
            }), X.el("rect", {
                x: "1",
                y: "7",
                width: "13",
                height: "4",
                fill: "#ff920f"
            }), X.el("rect", {
                x: "1",
                y: "13",
                width: "13",
                height: "4",
                fill: "#ff920f"
            })]), {
                id: "sb3-list"
            }), X.el("image", {
                id: "sb3-microbitBlock",
                width: "40px",
                height: "40px",
                href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAACmlBMVEUAAAArKysrIB8lJCNBRlY2O0U9X48sKCvOoBQzKzMnJyfrswi/xdDRoxN2dnbToxPosgnmsAq/lxo6MSq0kCLOoRXKnhbEmhc7LRooJCTcqQ7OoBXstAjpsgi9lhuvjCCPdSd4Zyg2NjZMi+Slhyq8lR5CR1fZqBG+lh3ttQjFnBnLnhbDmhqZore3kh5ARlW2kR6qiCGcfyU6QEtyYyd4ZSDSoxOGdDedgizLnhfgrA25kx9YXWqbgCxMUWDfqwzcqg/VphBBR1ecpLmcgSzHmxijq77BmRprYkOOlKZARlVGdbabo7m3kRxGcrKwjB9ARVSIjaCZobuVeyahgh+VdyE8XIOLayBIOydBR1f/vwBMl//m5+g+Q1JlanY6P0uCiJjj5OU9QVBARVQ/RFP9vgBFZpjk5ebwtgbzuAR0eotARlZITl3d3+KNlKRQVmRNUmGxs7mRlJtUW2nLnhfInRfpsQn1uQS/wsa0t7qlp62doKeKjpeBg41YXmxCSlvGyMtHb6xCUGlCTGBJgdJDSFVobXlMlPhLhtq/wchIesFGbqpDVXRXXGxCTGNiXEe+lh1LjuzP0dRJg9RIfslJfMW9v8RGbKRFY5Jzd4NdYm88QE1+bjrQpCHQohTxtwVLkPDa3OHd3t9If826vMCusLZHcrGIj6F6gpaDho9ESlpITFOQeTLcqhnEmhnqsw34uwVKkfNNhdi6vMRLUWBPUFC7lzDWpx31uQjutQj6vAP5+frZ29zZ2dvW2NtHc7JGbKVFaJx/hpl/hpdxd4hzd4JDWHpDUm5UWWiZhEh3aT6WfC/EnSqtiyW/lxzBmRpKi+VQgMhRermqq7BSdrCLjpVEXYVEW4A/SFtOT1BaV0pxZUCpjT2xkTcYNOUYAAAAWXRSTlMADBgV5DRLEdcIE+3Z2QLt6unOI/zp1dEcDf7z7eu9qVtFBPv7+/fx7u3p3NnOzcq0lXZENzD6+fj39vTm5uXk4t3c2tbS0c/NvrCopKKcm4yLbGpiTUA3JzDAPbYAAAQqSURBVFjD7dX1fxJhHMDxE+MIRRFrdnd3d3fr9ziwhsVsmC2K6HRTtzlb0ens2uzu7m79X3z4HufdwTNvj/qbfPYaPDe+vMf23AEXL168/6bBTfoWx5r0GskxVMhsoDfg3Lb12LlzIwz0zKZYzzy0lkPVKtXdutXw++o2a5UQ7SUMcqibGpA8kD09slX0azRkazwISB5Inn4D+ShwrNYjIHpQQA96mqPAYlqPgOhBAT0oUpgGyh6C6EHYWz11e7jbO9hAxUMQPezR6+wtW0nBlJzV7CB62nIyN/mB5H/ouM0G0j3ITIXsAMDUVMjcygbSPQgqrzCNDaR7sCEzO2cLKSvlLNP/ED1qgbRbh0m37viBAUSPvU/BYFZWcAMFRI+9HW/fOFLSgAaixw6erZWS5qeBVG+XKwlghWsuwALXHIA5rgUAc10r1KADvViwKNDaLO4EWCQuA5gnLgVYKs4DWCYuUoPoFRhcKa4FWCwuB1gizgeYLy4BWC4uBqWPq9Cjg55EJ5bogUi7J0wBmDwhMXzjBHBOmAyQSG4wnPd4cJ4Kejbem4gdTQL9NPN00Hlk0jRs//0p+puinaeDs0XxwMFtk8RZM6fob4pmPl/wxtqkOcemIai7Kco8HTx/88Ns8dBxgMcrEdTfFKcyP/9m1xhwwbV30sBGCdTPqczPu9Y5BoTzZODAg6S5kT9Zf1PU8+fz25TrTJuizOd32kjtL9CmaOfpJ/Zd5UTV3RTtfP6X3mfl0tNNuVSpILYp5xHL25ccFUQv9cwGhrcvPZB4jgiovyn6IHrrZFB/U/RBf6rD8f4sgqzRwTtZQfKZGPiXm4Kxb8rff6awgf9sU5jTB9O79G63BqTW1C5baQ9geNSwvnIEJ8s2PCkPXqhTtlM6HUxvWpiv3h6kyozmDY2egnzUkjc3/3X0bAjPt3gW+VWVxvFtSn6hgi9acxzfeI001yiBs46pI7/AkjzHVSgjg5XIkwvXB+xbcxNnGraHCmZUr8nxJS/g3AlC1KzujQgnOpo5axufDFasYLUa2gK2p2ohzlTtJB2sV6NCNSECCtUq1Kj3CxSq2luXlY8gufF4e9PkCLiwpWFULg38+qKiILgFYe9Lr++07zSur4SXr7zeV5Gj0z5vxt69GVcFt1vI874kS6/0pDIZsWB6crLgzhNI+wRhOrm7Sr5n4HIhWeW5yRJ/EBYuS4+5yUN5Vy9fuewT6GDouQq8qAFDITX4/XmuDF788eTJRQpoD4PTT6nAXA14KVcNhshgBDx16VTokk9oZo4Czf0JiEkgpoCYApJkEPMJwxOiQFONDn8DlrRbuWjRXrWEzWKzlOhnLNfHWN5S2Va5cndjufLG8uWMpRs0sFmqdMNliRKlS1nIlw2Xxh5kWaVKC0NNLiarqdAfZ+LixYsX77f9BFJt17cXqnnkAAAAAElFTkSuQmCC"
            }), X.setProps(X.group([X.el("path", {
                d: "M23.513 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M24.91 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
            }), X.el("path", {
                d: "M9.54 11.17h-.728c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M10.938 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479z"
            }), X.el("path", {
                d: "M26.305 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M27.702 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z"
            }), X.el("path", {
                d: "M29.101 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M30.498 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
            }), X.el("path", {
                d: "M17.925 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M19.322 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479z"
            }), X.el("path", {
                d: "M20.717 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M22.114 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z"
            }), X.el("path", {
                d: "M15.129 11.17H14.4c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M16.526 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z"
            }), X.el("path", {
                d: "M12.335 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.882v-1.08c0-.265-.26-.479-.577-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M13.732 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z"
            }), X.el("path", {
                d: "M31.893 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M33.29 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z"
            }), X.el("path", {
                d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992",
                fill: "#FFF"
            }), X.el("path", {
                d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992z",
                stroke: "#7C87A5",
                "stroke-width": ".893"
            }), X.el("path", {
                d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
                fill: "#FFF"
            }), X.el("path", {
                d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
                stroke: "#7C87A5",
                "stroke-width": ".893"
            }), X.el("path", {
                d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
                fill: "#4C97FF"
            }), X.el("path", {
                d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
                stroke: "#3D79CC",
                "stroke-width": ".893"
            }), X.el("path", {
                stroke: "#7C87A5",
                "stroke-width": ".893",
                d: "M4.47 20.474h27.961l2.157 2.974"
            }), X.el("path", {
                d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
                stroke: "#7C87A5",
                "stroke-width": ".893"
            }), X.el("path", {
                d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
            }), X.el("path", {
                d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479z"
            }), X.el("path", {
                d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479z"
            }), X.el("path", {
                d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
                fill: "#7C87A5"
            }), X.el("path", {
                d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z"
            }), X.el("path", {
                d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993",
                fill: "#E6E7E8"
            }), X.el("path", {
                d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993z",
                stroke: "#7C87A5",
                "stroke-width": ".893"
            }), X.el("path", {
                d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
                fill: "#E6E7E8"
            }), X.el("path", {
                d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
                stroke: "#7C87A5",
                "stroke-width": ".893"
            }), X.el("path", {
                fill: "#E6E7E8",
                d: "M19.53 24.438h11.294V20.47H19.529z"
            }), X.el("path", {
                stroke: "#7C87A5",
                "stroke-width": ".893",
                d: "M19.53 24.438h11.294V20.47H19.529zm12.902-3.964l2.157-2.794"
            })]), {
                id: "sb3-wedoBlock",
                fill: "none"
            }), X.setProps(X.group([X.el("rect", {
                stroke: "#7C87A5",
                fill: "#FFF",
                x: ".5",
                y: "3.59",
                width: "28",
                height: "25.81",
                rx: "1"
            }), X.el("rect", {
                stroke: "#7C87A5",
                fill: "#E6E7E8",
                x: "2.5",
                y: ".5",
                width: "24",
                height: "32",
                rx: "1"
            }), X.el("path", {
                stroke: "#7C87A5",
                fill: "#FFF",
                d: "M2.5 14.5h24v13h-24z"
            }), X.el("path", {
                d: "M14.5 10.5v4",
                stroke: "#7C87A5",
                fill: "#E6E7E8"
            }), X.el("rect", {
                fill: "#414757",
                x: "4.5",
                y: "2.5",
                width: "20",
                height: "10",
                rx: "1"
            }), X.el("rect", {
                fill: "#7C87A5",
                opacity: ".5",
                x: "13.5",
                y: "20.13",
                width: "2",
                height: "2",
                rx: ".5"
            }), X.el("path", {
                d: "M9.06 20.13h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 1 0-2zM19.93 22.13h-1.51a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5a1 1 0 0 1 .01 2zM8.23 17.5H5a.5.5 0 0 1-.5-.5v-2.5h6l-1.85 2.78a.51.51 0 0 1-.42.22zM18.15 18.85l-.5.5a.49.49 0 0 0-.15.36V20a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-.29a.49.49 0 0 0-.15-.36l-.5-.5a.51.51 0 0 1 0-.71l1.51-1.49a.47.47 0 0 1 .35-.15h3.58a.47.47 0 0 1 .35.15l1.51 1.49a.51.51 0 0 1 0 .71zM10.85 23.45l.5-.5a.49.49 0 0 0 .15-.36v-.29a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.29a.49.49 0 0 0 .15.36l.5.5a.5.5 0 0 1 0 .7l-1.51 1.5a.47.47 0 0 1-.35.15h-3.58a.47.47 0 0 1-.35-.15l-1.51-1.5a.5.5 0 0 1 0-.7z",
                fill: "#7C87A5",
                opacity: ".5"
            }), X.el("path", {
                d: "M21.5 27.5h5v4a1 1 0 0 1-1 1h-4v-5z",
                stroke: "#CC4C23",
                fill: "#F15A29"
            })]), {
                transform: "translate(5.5 3.5)",
                id: "sb3-ev3Block"
            }), X.setProps(X.group([X.el("path", {
                d: "M35 28H5a1 1 0 0 1-1-1V12c0-.6.4-1 1-1h30c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1z",
                fill: "#fff"
            }), X.el("path", {
                fill: "red",
                d: "M4 25h32v2.7H4zm9-1h-2.2a1 1 0 0 1-1-1v-9.7c0-.6.4-1 1-1H13c.6 0 1 .4 1 1V23c0 .6-.5 1-1 1z"
            }), X.el("path", {
                fill: "red",
                d: "M6.1 19.3v-2.2c0-.5.4-1 1-1h9.7c.5 0 1 .5 1 1v2.2c0 .5-.5 1-1 1H7.1a1 1 0 0 1-1-1z"
            }), X.el("circle", {
                fill: "red",
                cx: "22.8",
                cy: "18.2",
                r: "3.4"
            }), X.el("circle", {
                fill: "red",
                cx: "30.6",
                cy: "18.2",
                r: "3.4"
            }), X.el("path", {
                fill: "red",
                d: "M4.2 27h31.9v.7H4.2z"
            }), X.el("circle", {
                fill: "#e0e0e0",
                cx: "22.8",
                cy: "18.2",
                r: "2.3"
            }), X.el("circle", {
                fill: "#e0e0e0",
                cx: "30.6",
                cy: "18.2",
                r: "2.3"
            }), X.el("path", {
                fill: "#e0e0e0",
                d: "M12.5 22.9h-1.2c-.3 0-.5-.2-.5-.5V14c0-.3.2-.5.5-.5h1.2c.3 0 .5.2.5.5v8.4c0 .3-.2.5-.5.5z"
            }), X.el("path", {
                fill: "#e0e0e0",
                d: "M7.2 18.7v-1.2c0-.3.2-.5.5-.5h8.4c.3 0 .5.2.5.5v1.2c0 .3-.2.5-.5.5H7.7c-.3 0-.5-.2-.5-.5zM4 26h32v2H4z"
            }), X.el("path", {
                stroke: "#666",
                "stroke-width": ".5",
                d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z"
            }), X.el("path", {
                stroke: "#666",
                "stroke-width": ".5",
                d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z"
            })]), {
                id: "sb3-makeymakeyBlock",
                fill: "none"
            }), X.el("image", {
                id: "sb3-gdxforBlock",
                width: "40px",
                height: "40px",
                href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABAlBMVEUAAAABAQEAAAB9h6YAAAAAAAAAAAB8iKZ7iKaAjKvm5+h+iqhcXFxGR0d8iKbj5OV9iKZ8h6be3+Db3d19h6acnJ0AAAB7nrDh4uPh4uN9iabZ2tt9iKbX19nJycnExsZ8iKe+wMC7vL2Eka/g4ePU1dV8iKZ9iKZ9iKd+iKitra2RkZGLjo5wcHCLi7l0oqJV//9csdZ8h6WFkq//vwDm5+iEka79vgJ6iql9iaaHk6tgq9Btm71+iadmo8dzk7OCj6yAjKp/iqhiqc1qnsB4jKtgrNFwl7d1tLTgtCxpocN0krJ2j65ossWNtZSbt4LAulHWsDnasTTuvhXzvg9zk7TzqAfaAAAAMXRSTlMAJiLoFBwI8q4a+0c4M/nr3tnQwKxYDAnk2726tbGMh4J9dinXq56ddG9nT01ACwsDk/+seAAAAidJREFUWMPt2Olu2kAUhuE5NvuaBAhZm7TpvufgMXaBbmAghOzp/d9KD7RW6yaqPeL7YVV9/471aBgfCXnUH7ULNhtkF96qv1dgwwoxoM08cDsJcwfMdgwonoiJPRFjQXkscQM3Adhxk4NuJwkoDx0nSp5NDTiae958NEaBwzkvC4YYcOxx7fCoeJhnrwcBv7H9TklFm08R4JD5SEkiMg8B4IjXwsV1HgHAPu+EizsQcMbr2B0OufZz7X0NcIZSwC9+rD3nADI2/fCtrHEfAvZ8Liqp6PuIwZZO+ZmSnspcY8AZ55WU5xkElDwuK1Vm7xgFTjhfLud5AgPHAUvBGARKvYnnTXpp/gvAg9PLyykSPLt1nNszIHjuSOdAcNp1nO4UeYYXNzcX0UH62P+0AnjH8lgCgL8s/+uXzwZgrOV2JAMwxpIMwRjLHIyxzMEYyxyMWgAwYiHAzm99iLQ6eOJEul4d7Ea6WhG8W7rAE+fertHgVXp+clpB9Oet64M/wH2TKwI/FrRFTH6JIZ6NvmZpxoDtptlFULOtzGPWy+4/r//gvwKGgcC90NtTqIg2dIuyClaWDvTjKlDMLba4UaUMcIuVbd0gyiGwjGVlFuKWfkQZhEfSQnypd8mCvOHGvkA5quo6EQSs6yrlNumN3obs0KKGHJ70QD+hLOQMW7r0sFI5KJVeY+bGkr1JopKlEG0StXbrW/uvQGMookXLLPFAZYTMJju/7z6rRW1MZcnIAAAAAElFTkSuQmCC"
            }), X.el("image", {
                id: "sb3-boostBlock",
                width: "40px",
                height: "40px",
                href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAKlBMVEUAAAD///98h6Xm5+iVnrb/Zhq+w9L5hk73+Pnf4eSQmbLr7Ozo39vp184hSCf6AAAAAXRSTlMAQObYZgAAAOFJREFUSMftlDEOgjAUhonhAi1sLvIk7NDJDTYu0LhzBzcXruHoDTyFB/BCNi30KU3InzioSb++hAS+vPfKa5pEIpHvk7a8gpf8ISWINtlg4i7ZFOKVTBlqsUR+ItYZJG7VzQQgMqGYd7zWRArpULEAe5Q/J9JMj4rluC7uleNw7TFRXcoREDnlinjX57eUsvRTn8+AE0/6OKV0g5buYTTyWFFr/XAp3aDzed4yFJWnKbhPbtaXXohDNYlDJWz4zSxEokkkEjb496AiVtqAbIYgYNGWBmhgES+NX6SRSORfeAJMWajr95DdqQAAAABJRU5ErkJggg=="
            })]
        }
        static makeOriginalIcons() {
            return [...Y.makeCommonIcons(), X.setProps(X.group([X.el("path", {
                d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
                fill: "#231f20",
                opacity: ".1"
            }), X.el("path", {
                d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
                fill: "#fff"
            })]), {
                id: "sb3-dropdownArrow",
                transform: "scale(0.944)"
            }), X.setProps(X.group([X.el("path", {
                d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
                fill: "#3d79cc"
            }), X.el("path", {
                d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
                fill: "#fff"
            })]), {
                id: "sb3-turnRight"
            }), X.setProps(X.group([X.el("path", {
                d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
                fill: "#3d79cc"
            }), X.el("path", {
                d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
                fill: "#fff"
            })]), {
                id: "sb3-turnLeft"
            }), X.setProps(X.group([X.el("path", {
                d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
                fill: "#cf8b17"
            }), X.el("path", {
                d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
                fill: "#fff"
            })]), {
                id: "sb3-loopArrow"
            }), X.setProps(X.group([X.el("path", {
                d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z",
                stroke: "#000",
                "stroke-opacity": ".1"
            }), X.el("path", {
                d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z",
                fill: "#FFF"
            })]), {
                id: "sb3-musicBlock",
                fill: "none"
            }), X.setProps(X.group([X.el("path", {
                d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012",
                fill: "#FFF"
            }), X.el("path", {
                d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546"
            }), X.el("path", {
                d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102",
                fill: "#4C97FF"
            }), X.el("path", {
                d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856",
                fill: "#575E75",
                opacity: ".15"
            }), X.el("path", {
                d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z",
                fill: "#575E75"
            })]), {
                id: "sb3-penBlock",
                stroke: "#575E75",
                fill: "none",
                "stroke-linejoin": "round"
            }), X.setProps(X.group([X.el("circle", {
                opacity: .25,
                cx: 32,
                cy: 16,
                r: 4.5
            }), X.el("circle", {
                opacity: .5,
                cx: 32,
                cy: 12,
                r: 4.5
            }), X.el("circle", {
                opacity: .75,
                cx: 32,
                cy: 8,
                r: 4.5
            }), X.el("circle", {
                cx: 32,
                cy: 4,
                r: 4.5
            }), X.el("path", {
                d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z",
                fill: "#4D4D4D",
                "stroke-linejoin": "round"
            })]), {
                id: "sb3-videoBlock",
                stroke: "#000",
                fill: "#FFF",
                "stroke-opacity": .15
            }), X.setProps(X.group([X.el("path", {
                d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z",
                fill: "#FFF"
            }), X.el("path", {
                d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z",
                fill: "#4D4D4D"
            })]), {
                id: "sb3-ttsBlock",
                stroke: "#000",
                "stroke-opacity": .15
            }), X.el("image", {
                id: "sb3-translateBlock",
                width: "40px",
                height: "40px",
                href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA21BMVEUAAAAAAAAAAAAAAADS0tIAAABHR0cAAADX19cAAAAAAACkpKRqamq2traurq6WlpbV1dWEhITHx8fPz8/Ly8vDw8O9vb0AAABMTEz////Z2dlXXnVMl//g4ODu7u7m5ub4+PhPmf/x8fH09PT6+vri4uNRmv/r6+1uqv/0+P9Ynv/p8v+rrrphZ33S5f+51v9ho/+1uMKBhpfH3v+Wmqhrcoacxf+Pvv/KzNSgpLGLkKDd6/+rzf9npv/AwsuDtv98s/90rv9jpP9GieeOrtm5ubl2fI7Z4u56otk5hEFfAAAAGXRSTlMAJhgM1wYyHvIkEWpBhXhc5U+uybyhk0YvleQYgwAABDpJREFUWMPtmNl6mzAQhQMCBAYbvLX1GIwxi7e2TtosTdKk+/L+T1QBVoQtJHDby5yLROYTPzOagSM4e9az6oVUrDgKxh39//Bwb+QBkTZ2VL3hypYilKWicpY6gmWcTCbxIoSh0xHjOkZXA4m0rlGcrcBsslcSmrYq4qm2GczmE6Hms6A8W4GQHZ1BTxXweuTCErGz1TEEaTpLymML6HVq87VhIWPRs21yNu679guNXn9hOnWVMUwanzxG0yCTdYQQts195umwJmnUDSatFHQRPaVvljkl4CAuRlWrCfD9uiZEbR+ObrnjfRDhwHUtdAi0gK/vLtts+VqDVfIMjZSmLEycBuD1D4kK8MHc+Ju3/FFQaHdXc4rBU/8NiCE+OJyAIQKuz32qjA7O1xzwqMtiUETAXeRzinZcyoPgsPpDcco3q9WD729WhTI/e1itbriUzwwtqPI0Q5et4ZoA6SDj1pCWOeB44qJ88aOiIB8j/xMH5IiUJwG+jfyHPMCNH20FQEpkPGnbnBeFuI78Fd82VWJCeTyQCzHb3pMCb8VAQhxBCkPKkzf2Z9J9mR9dCxqb3tBO17EoTw4ky0f0VXSnUCGE6LDp1tvlwK0cyNQMJA1DlL3Px8TenvTjpcAN5cD7VVSsoR992c4oS+aGcuDbzxFBfVqvv5L/375DCzeUAXfnOW5TJHudffvdzg3FwPdZvnbX6/LXr+9t3ZCzAAaMNh/X9BdAWzcUm9T2vnrpk91QbqOhLEDeDZuNHkBSX94Nm7ciAJOWAkW8WZIDl1MikAD57ZwceJsDL0VAfsPJwgzzO5cHvsmBb2IJkAlhB5InntlXlJcc8MO00GMzsHTbsMJDdU+hOxIeCfKuXYQu7ZJ5oDmExwPjfAEvyZ9lGyDW9tOWMH6l1z4nLwjrQ572RRugAvMS57mq4MH7czq9Kgpz1QZoDcI4DsHrWUjw4E1JbLeTSZ5z2gLYMTTwBnaOEwBvS1Ke86UUyF7isKpLrIHkSvVGBORdUQx8nFb0KAUy38aSCO8I510hMrhrBOrGEFIYGToPZM+Fn+XwiraiAMh2Uwnb+3DAC9Z/t3TIA2W7MwZkYbH+uZIC+f0jD3z9+vXF05hIAJTtcK3TLIDnMSLnhqeZlDo8eksYqH/3UskWPz7aCuDTX3urMiA5ejHCp7+YV4W9gxBnMFJP/XRwKNT3IEhLZpIGQMp86seNY6LlutRQgrFr6dLPLyELjm44eemIWt6C+JP0A1HffCIm4GDEw2jvpNTxbIwQ0kUTUYUYkgYTSXfMBU1Ee+G6fSwkOlpA/RFcJCR2erRHkllKSjNWhdd+NQbqkJrgunyPhKBIprpeiZyLZtEeCRNWQdlUZPU8yF1yYJ1J1HGGEC5iknS8pN0tRtoDDzTSNDLpqjMu2s4b9fBZg/TcJVHjrA7GSl/JZz7rWbX6A0ZzUfwVEqfrAAAAAElFTkSuQmCC"
            })]
        }
        static makeHighContrastIcons() {
            return [...Y.makeCommonIcons(), X.setProps(X.group([X.el("path", {
                d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
                fill: "#231f20",
                opacity: ".1"
            }), X.el("path", {
                d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
                fill: "#000"
            })]), {
                id: "sb3-dropdownArrow-high-contrast",
                transform: "scale(0.944)"
            }), X.setProps(X.group([X.el("path", {
                d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
                fill: "#000"
            }), X.el("path", {
                d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
                fill: "#000"
            })]), {
                id: "sb3-turnRight-high-contrast"
            }), X.setProps(X.group([X.el("path", {
                d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
                fill: "#000"
            }), X.el("path", {
                d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
                fill: "#000"
            })]), {
                id: "sb3-turnLeft-high-contrast"
            }), X.setProps(X.group([X.el("path", {
                d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
                fill: "#000"
            }), X.el("path", {
                d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
                fill: "#000"
            })]), {
                id: "sb3-loopArrow-high-contrast"
            }), X.setProps(X.group([X.el("path", {
                d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z",
                stroke: "#000"
            }), X.el("path", {
                d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z",
                fill: "#000"
            })]), {
                id: "sb3-musicBlock-high-contrast",
                fill: "none"
            }), X.setProps(X.group([X.el("path", {
                d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012",
                fill: "#FFF"
            }), X.el("path", {
                d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546"
            }), X.el("path", {
                d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102",
                fill: "#4C97FF"
            }), X.el("path", {
                d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856",
                fill: "#0b8e69",
                opacity: ".15"
            }), X.el("path", {
                d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z",
                fill: "#0b8e69"
            })]), {
                id: "sb3-penBlock-high-contrast",
                stroke: "#0b8e69",
                fill: "none",
                "stroke-linejoin": "round"
            }), X.setProps(X.group([X.el("circle", {
                opacity: .25,
                cx: 32,
                cy: 16,
                r: 4.5
            }), X.el("circle", {
                opacity: .5,
                cx: 32,
                cy: 12,
                r: 4.5
            }), X.el("circle", {
                opacity: .75,
                cx: 32,
                cy: 8,
                r: 4.5
            }), X.el("circle", {
                cx: 32,
                cy: 4,
                r: 4.5
            }), X.el("path", {
                d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z",
                fill: "#000",
                "stroke-linejoin": "round"
            })]), {
                id: "sb3-videoBlock-high-contrast",
                stroke: "#0b8e69",
                fill: "#FFF",
                "stroke-opacity": .15
            }), X.setProps(X.group([X.el("path", {
                d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z",
                fill: "#FFF",
                stroke: "#0b8e69"
            }), X.el("path", {
                d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z",
                fill: "#000"
            })]), {
                id: "sb3-ttsBlock-high-contrast",
                "stroke-opacity": .15
            }), X.el("image", {
                id: "sb3-translateBlock-high-contrast",
                width: "40px",
                height: "40px",
                href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxoAAARjCAMAAADfFKLnAAABhlBMVEUAAAALjWkOj2oLjmkAAAAQj2wkmnkYlHILj2kLjmkAAAAAAABsu6VouaIJjmgimncAAAAAAAALjml0v6kAAAAAAAAAAAAATzhjt6A9pogVk28XlHAVk28ZlHEAAAAAAAAAAAANj2oAAAAJj2oAAAAAAAByvahsu6VVsZcqnXwAAAAAAAAAAAAMj2oQkWsAAAAPkGwAAABHqo4AAAAclnMcl3MKj2kXlHIXk3EAAAALj2gAAAD///8AAAB9w6+ExrONyrmHyLWrzv/3+/r8/v6Fx7VpqP/0+fh7s/9Ml//4/PvK59/4+//u9f/l8P/V5v9vrP9an/9Smv/o6OjMzMwrKysDAwPp8//e7P+w0f+axf9xrf9kpf9jpP9ho/9Nl//e3t7E5Nu+4dfT09OUzb2QzLuZmZlMrJKGhoYpnHxlZWVgYGBCQkINDQ30+P/J4P/D3P+11P+Nvf90rv9Jlvby8vLc3Nyl1cik1ce+vr6DxrKlpaWfn58xnJZBpJWJiYl+fn4fHx9PedmHAAAAPHRSTlMAd4OAxg/0wohyDv78+Tj16Ik6+ux+WAb79e7mvbCemW1rZDYXC/n39PTw39u8t7RVNvX11NLDm5qOWx0x5AFdAAAGd0lEQVR42uzbV3faQBCG4XGChMEU4wLujntv6WXXIUAwxd3Gvfea3nv+eQaBcgS5ztV8zwWMfsB7js7uiAAAAAAAAP6fgKfCwRMg1l49OBzqJgC5DLfZO+nQa7oNovq2Ia2rJwhArFZ/QpVI+Fspr57b8BKAUAEzrgpmXhSHjBmgvDGtQwQglKdWFaU27KnWQ0TekEvruvYwAYh08ym3ML0ei8V2NvlnfZofn98gorC2DBKASFYaq8md9MLW1kJ6O7lqp9Hj0qzqFgGIxGlYtjeUepPkwU6D20AZIJidRmxhZnbxtTMN8rpQBshlpzGdTL2dTzjSYJEnBCCVnYaaS++uqb9pAEhnpzGXXFycn1PZo2g0ejpiL410EYBQhTRepnZTs2vz776f+yYd/EG3QQAiWVd+s+nNV/yX+NEQVyXiDS0EIFKNmeAEZlRe9jyuysSDNQQgkrsvo4qOfOofvgoCEMloNWs/cgNTx9FT+7RqaUV/KI7PcFoFYgVG+7iMxpbK+19UwU+tfyENEC/SvK+yAw8cdxy5XO53AmmAdI8bD/qbxh13HMv67Ex/RhogXVfzvQ6DHGlc6L09fYk0AJgjjalrza7fIw2QrjtSksZXfXFycqm/IQ0QrrPK5XWmcbWylD+/vUIaIFtnldaFNjx+lbd8qNjhMq78QDQug7l6eAwE46pMxsSiCAhVpy1hYu7y9cKM300AMoXbOQ5XyEvMaAn6opbjKQ7jkw9L6SBZSOsxe66pqLSMNnIb/hG8TYFk3mqt66nMw4Gs2m+OEIBgE9zGcFtZHeNN/Qe3OwhAsu5HQ3fq2qiU0XG3Cd+GAwAAAAD8YQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV2IMDAQAAAAAg/9dGUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUV9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWFPTgQAAAAAADyf20EVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhDw4EAAAAAID8XxtBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXYgwMBAAAAACD/10ZQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRX24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWEPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdiDAwEAAAAAIP/XRlBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFfbgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhT04EAAAAAAA8n9tBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV2oNDAgAAAABB/1/7wgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMArKwCvdMdAc1YAAAAASUVORK5CYII="
            })]
        }
        static iconName(e, t) {
            return "high-contrast" === t && Q.has(e) ? e + "-high-contrast" : e
        }
        static makeStyle() {
            const e = X.el("style");
            return e.appendChild(X.cdata(Y.cssContent)),
            e
        }
        static get defaultFont() {
            return "500 12pt Helvetica Neue, Helvetica, sans-serif"
        }
        static get commentFont() {
            return "400 12pt Helvetica Neue, Helvetica, sans-serif"
        }
    }
    const {defaultFont: Z, commentFont: q, makeStyle: J, makeOriginalIcons: $, makeHighContrastIcons: ee, iconName: te} = Y;
    class se {
        constructor(e) {
            o(this, e),
            this.el = null,
            this.height = 12,
            this.metrics = null,
            this.x = 0
        }
        get isLabel() {
            return !0
        }
        draw(e) {
            return this.el
        }
        get width() {
            return this.metrics.width
        }
        measure() {
            const e = this.value
              , t = "sb3-" + this.cls;
            this.el = X.text(0, 13, e, {
                class: "sb3-label " + t
            });
            let s = se.metricsCache[t];
            if (s || (s = se.metricsCache[t] = Object.create(null)),
            Object.hasOwnProperty.call(s, e))
                this.metrics = s[e];
            else {
                const t = /comment-label/.test(this.cls) ? q : Z;
                this.metrics = s[e] = se.measure(e, t)
            }
        }
        static measure(e, t) {
            const s = se.measuring;
            s.font = t;
            return {
                width: s.measureText(e).width + .5 | 0
            }
        }
    }
    se.metricsCache = {},
    se.toMeasure = [];
    class oe {
        constructor(e) {
            o(this, e);
            const t = oe.icons[this.name];
            if (!t)
                throw Error("no info for icon: " + this.name);
            o(this, t)
        }
        get isIcon() {
            return !0
        }
        draw(e) {
            return X.symbol("#sb3-" + te(this.name, e), {
                width: this.width,
                height: this.height
            })
        }
        static get icons() {
            return {
                greenFlag: {
                    width: 20,
                    height: 21,
                    dy: -2
                },
                stopSign: {
                    width: 20,
                    height: 20
                },
                turnLeft: {
                    width: 24,
                    height: 24
                },
                turnRight: {
                    width: 24,
                    height: 24
                },
                loopArrow: {
                    width: 24,
                    height: 24
                },
                addInput: {
                    width: 4,
                    height: 8
                },
                delInput: {
                    width: 4,
                    height: 8
                },
                list: {
                    width: 15,
                    height: 18
                },
                musicBlock: {
                    width: 40,
                    height: 40
                },
                penBlock: {
                    width: 40,
                    height: 40
                },
                videoBlock: {
                    width: 40,
                    height: 40,
                    dy: 10
                },
                ttsBlock: {
                    width: 40,
                    height: 40
                },
                translateBlock: {
                    width: 40,
                    height: 40
                },
                wedoBlock: {
                    width: 40,
                    height: 40
                },
                ev3Block: {
                    width: 40,
                    height: 40
                },
                microbitBlock: {
                    width: 40,
                    height: 40
                },
                makeymakeyBlock: {
                    width: 40,
                    height: 40
                },
                gdxforBlock: {
                    width: 40,
                    height: 40
                },
                boostBlock: {
                    width: 40,
                    height: 40
                }
            }
        }
    }
    class ie {
        constructor() {
            this.width = 1,
            this.height = 40,
            this.x = 0
        }
        get isLine() {
            return !0
        }
        measure() {}
        draw(e, t) {
            const s = t.info.category;
            return X.el("line", {
                class: "sb3-" + s + "-line",
                "stroke-linecap": "round",
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 40
            })
        }
    }
    class re {
        constructor(e) {
            o(this, e),
            e.label && (this.label = pe(e.label)),
            this.isBoolean = "boolean" === this.shape,
            this.isDropdown = "dropdown" === this.shape,
            this.isRound = !(this.isBoolean || this.isDropdown),
            this.x = 0
        }
        get isInput() {
            return !0
        }
        measure() {
            this.hasLabel && this.label.measure()
        }
        static get shapes() {
            return {
                string: X.pillRect,
                number: X.pillRect,
                "number-dropdown": X.pillRect,
                color: X.pillRect,
                dropdown: X.roundRect,
                boolean: X.pointedRect,
                stack: X.stackRect,
                reporter: X.pillRect
            }
        }
        draw(e, t) {
            let s, o;
            if (this.isBoolean)
                s = 48;
            else if (this.isColor)
                s = 40;
            else if (this.hasLabel) {
                o = this.label.draw(e);
                const t = this.label.width >= 18 ? 11 : (40 - this.label.width) / 2;
                s = this.label.width + 2 * t,
                o = X.move(t, 9, o)
            } else
                s = this.isInset ? 30 : null;
            this.hasArrow && (s += 20),
            this.width = s;
            const i = this.height = 32
              , r = re.shapes[this.shape](s, i);
            X.setProps(r, {
                class: (this.isColor ? "" : "sb3-" + t.info.category) + " sb3-input sb3-input-" + this.shape
            }),
            this.isColor ? X.setProps(r, {
                fill: this.value
            }) : "dropdown" === this.shape ? t.info.color && X.setProps(r, {
                fill: t.info.color,
                stroke: "rgba(0, 0, 0, 0.2)"
            }) : "number-dropdown" === this.shape ? (r.classList.add("sb3-" + t.info.category + "-alt"),
            t.info.color && X.setProps(r, {
                fill: "rgba(0, 0, 0, 0.1)",
                stroke: "rgba(0, 0, 0, 0.15)"
            })) : "boolean" === this.shape && (r.classList.remove("sb3-" + t.info.category),
            r.classList.add("sb3-" + t.info.category + "-dark"),
            t.info.color && X.setProps(r, {
                fill: "rgba(0, 0, 0, 0.15)"
            }));
            const c = X.group([r]);
            return this.hasLabel && c.appendChild(o),
            this.hasArrow && c.appendChild(X.move(s - 24, 13, X.symbol("high-contrast" === e ? "#sb3-dropdownArrow-high-contrast" : "#sb3-dropdownArrow", {}))),
            c
        }
    }
    class ce {
        constructor(e) {
            o(this, e),
            this.children = e.children.map(pe),
            this.comment = this.comment ? pe(this.comment) : null,
            this.isRound = this.isReporter,
            this.info = t({}, e.info),
            Object.prototype.hasOwnProperty.call(r, this.info.category) && (this.info.category = r[this.info.category]),
            Object.prototype.hasOwnProperty.call(i, this.info.category) && (this.children.unshift(new ie),
            this.children.unshift(new oe({
                name: this.info.category + "Block"
            })),
            this.info.category = "extension"),
            this.x = 0,
            this.width = null,
            this.height = null,
            this.firstLine = null,
            this.innerWidth = null
        }
        get isBlock() {
            return !0
        }
        measure() {
            for (const e of this.children)
                e.measure && e.measure();
            this.comment && this.comment.measure()
        }
        static get shapes() {
            return {
                stack: X.stackRect,
                "c-block": X.stackRect,
                "if-block": X.stackRect,
                celse: X.stackRect,
                cend: X.stackRect,
                cap: X.capRect,
                reporter: X.pillRect,
                boolean: X.pointedRect,
                hat: X.hatRect,
                cat: X.catHat,
                "define-hat": X.procHatRect,
                ring: X.pillRect
            }
        }
        drawSelf(e, t, s, o) {
            if (o.length > 1)
                return X.mouthRect(t, s, this.isFinal, o, {
                    class: "sb3-" + this.info.category
                });
            if ("outline" === this.info.shape)
                return X.setProps(X.stackRect(t, s), {
                    class: "sb3-" + this.info.category + " sb3-" + this.info.category + "-alt"
                });
            if (this.isRing) {
                const e = this.children[0];
                if (e && (e.isInput || e.isBlock || e.isScript))
                    return X.roundRect(t, s, {
                        class: "sb3-" + this.info.category
                    })
            }
            const i = ce.shapes[this.info.shape];
            if (!i)
                throw Error("no shape func: " + this.info.shape);
            return i(t, s, {
                class: "sb3-" + this.info.category
            })
        }
        static get padding() {
            return {
                hat: [24, 8],
                cat: [24, 8],
                "define-hat": [20, 16],
                null: [4, 4]
            }
        }
        horizontalPadding(e) {
            if (this.isRound) {
                if (e.isIcon)
                    return 16;
                if (e.isLabel)
                    return 12;
                if (e.isDropdown)
                    return 12;
                if (e.isBoolean)
                    return 12;
                if (e.isRound)
                    return 4
            } else if (this.isBoolean) {
                if (e.isIcon)
                    return 24;
                if (e.isLabel)
                    return 20;
                if (e.isDropdown)
                    return 20;
                if (e.isRound && e.isBlock)
                    return 24;
                if (e.isRound)
                    return 20;
                if (e.isBoolean)
                    return 8
            }
            return 8
        }
        marginBetween(e, t) {
            return e.isLabel && t.isLabel ? 5 : 8
        }
        draw(e) {
            const t = "define-hat" === this.info.shape;
            let s = this.children;
            const o = this.isCommand
              , i = ce.padding[this.info.shape] || ce.padding.null
              , r = i[0]
              , c = i[1];
            let n = "cat" === this.info.shape ? 16 : 0;
            const a = function(e) {
                this.y = e,
                this.width = 0,
                this.height = o ? 40 : 32,
                this.children = []
            };
            let l = 0
              , h = 0
              , p = new a(n);
            const d = ()=>{
                0 === V.length ? p.height += r + c : (p.height -= 11,
                p.y -= 2),
                n += p.height,
                V.push(p)
            }
            ;
            if (this.info.isRTL) {
                let e = 0;
                const t = ()=>{
                    s = s.slice(0, e).concat(s.slice(e, o).reverse()).concat(s.slice(o))
                }
                ;
                let o;
                for (o = 0; o < s.length; o++)
                    s[o].isScript && (t(),
                    e = o + 1);
                e < o && t()
            }
            const V = [];
            let u, g;
            for (let t = 0; t < s.length; t++) {
                const o = s[t];
                if (o.el = o.draw(e, this),
                o.isScript && this.isCommand)
                    this.hasScript = !0,
                    d(),
                    o.y = n - 1,
                    V.push(o),
                    h = Math.max(h, Math.max(1, o.width)),
                    o.height = Math.max(29, o.height + 3) - 2,
                    n += o.height,
                    p = new a(n),
                    u = null;
                else if (o.isArrow)
                    p.children.push(o),
                    u = o;
                else {
                    if (V.length || (g = o),
                    u && (p.width += this.marginBetween(u, o)),
                    null != s[0]) {
                        const e = 48 - this.horizontalPadding(s[0]);
                        (this.isCommand || this.isOutline) && !o.isLabel && !o.isIcon && p.width < e && (p.width = e)
                    }
                    o.isIcon && 0 === t && this.isCommand && (p.height = Math.max(p.height, o.height + 8)),
                    o.x = p.width,
                    p.width += o.width,
                    l = Math.max(l, p.width),
                    o.isLabel || (p.height = Math.max(p.height, o.height)),
                    p.children.push(o),
                    u = o
                }
            }
            d();
            let f = s.length ? this.horizontalPadding(s[0]) : 0;
            l += f + (s.length ? this.horizontalPadding(g) : 0);
            const A = l;
            l = Math.max(this.hasScript ? 160 : this.isHat ? 108 : this.isCommand || this.isOutline ? 64 : this.isReporter ? 48 : 0, l),
            this.isReporter && (f += (l - A) / 2),
            this.height = n,
            this.width = h ? Math.max(l, 15 + h) : l,
            this.firstLine = V[0],
            this.innerWidth = l;
            const b = [];
            for (let e = 0; e < V.length; e++) {
                const s = V[e];
                if (s.isScript) {
                    b.push(X.move(16, s.y, s.el));
                    continue
                }
                const o = s.height;
                for (let i = 0; i < s.children.length; i++) {
                    const n = s.children[i];
                    if (n.isArrow) {
                        b.push(X.move(l - 32, this.height - 28, n.el));
                        continue
                    }
                    let a = r + (o - n.height - r - c) / 2;
                    n.isLabel && 0 === e ? a -= 1 : t && n.isLabel ? a += 3 : n.isIcon && (a += 0 | n.dy,
                    this.isCommand && 0 === e && 0 === i && (a += 4));
                    let h = f + n.x;
                    n.dx && (h += n.dx),
                    b.push(X.move(h, s.y + a | 0, n.el))
                }
            }
            const m = this.drawSelf(e, l, this.height, V);
            return b.splice(0, 0, m),
            this.info.color && X.setProps(m, {
                fill: this.info.color,
                stroke: "rgba(0, 0, 0, 0.2)"
            }),
            X.group(b)
        }
    }
    class ne {
        constructor(e) {
            o(this, e),
            this.label = pe(e.label),
            this.width = null
        }
        get isComment() {
            return !0
        }
        static get lineLength() {
            return 12
        }
        get height() {
            return 20
        }
        measure() {
            this.label.measure()
        }
        draw(e) {
            const t = this.label.draw(e);
            return this.width = this.label.width + 16,
            X.group([X.commentLine(this.hasBlock ? ne.lineLength : 0, 6), X.commentRect(this.width, this.height, {
                class: "sb3-comment"
            }), X.move(8, 4, t)])
        }
    }
    class ae {
        constructor(e) {
            o(this, e),
            this.child = pe(e.child),
            this.width = null,
            this.height = null,
            this.y = 0
        }
        get isGlow() {
            return !0
        }
        measure() {
            this.child.measure()
        }
        drawSelf() {
            const e = this.child;
            let t;
            const s = this.width
              , o = this.height - 1;
            return t = e.isScript ? !e.isEmpty && e.blocks[0].isHat ? X.hatRect(s, o) : e.isFinal ? X.capRect(s, o) : X.stackRect(s, o) : e.drawSelf(s, o, []),
            X.setProps(t, {
                class: "sb3-diff sb3-diff-ins"
            })
        }
        draw(e) {
            const t = this.child
              , s = t.isScript ? t.draw(e, !0) : t.draw(e);
            return this.width = t.width,
            this.height = t.isBlock && t.firstLine.height || t.height,
            X.group([s, this.drawSelf()])
        }
    }
    class le {
        constructor(e) {
            o(this, e),
            this.blocks = e.blocks.map(pe),
            this.y = 0
        }
        get isScript() {
            return !0
        }
        measure() {
            for (const e of this.blocks)
                e.measure()
        }
        draw(e, t) {
            const s = [];
            let o = 1;
            this.width = 0;
            for (const i of this.blocks) {
                const r = t ? 0 : 2
                  , c = i.draw(e);
                s.push(X.move(r, o, c)),
                this.width = Math.max(this.width, i.width);
                if ("-" === i.diff) {
                    const e = i.width
                      , t = i.firstLine.height || i.height;
                    s.push(X.move(r, o + t / 2 + 1, X.strikethroughLine(e))),
                    this.width = Math.max(this.width, i.width)
                }
                o += i.height;
                const n = i.comment;
                if (n) {
                    const t = i.firstLine
                      , r = i.innerWidth + 2 + ne.lineLength
                      , c = o - i.height + t.height / 2
                      , a = n.draw(e);
                    s.push(X.move(r, c - n.height / 2, a)),
                    this.width = Math.max(this.width, r + n.width)
                }
            }
            const i = this.blocks[this.blocks.length - 1];
            return this.height = o + 1,
            t || this.isFinal || (this.height += i.hasPuzzle ? 8 : 0),
            !t && i.isGlow && (this.height += 7),
            X.group(s)
        }
    }
    class he {
        constructor(e, t) {
            o(this, e),
            this.scripts = e.scripts.map(pe),
            this.width = null,
            this.height = null,
            this.el = null,
            this.defs = null,
            this.scale = t.scale,
            this.iconStyle = t.style.replace("scratch3-", "")
        }
        measure() {
            this.scripts.forEach((e=>{
                e.measure()
            }
            ))
        }
        render(e) {
            if ("function" == typeof e)
                throw Error("render() no longer takes a callback");
            this.measure();
            let t = 0
              , s = 0;
            const o = [];
            for (let e = 0; e < this.scripts.length; e++) {
                const i = this.scripts[e];
                s && (s += 10),
                i.y = s,
                o.push(X.move(0, s, i.draw(this.iconStyle))),
                s += i.height,
                e !== this.scripts.length - 1 && (s += 36),
                t = Math.max(t, i.width + 4)
            }
            this.width = t,
            this.height = s;
            const i = X.newSVG(t, s, this.scale)
              , r = "high-contrast" === this.iconStyle ? ee() : $();
            return i.appendChild(this.defs = X.withChildren(X.el("defs"), r)),
            i.appendChild(X.setProps(X.group(o), {
                style: "transform: scale(" + this.scale + ")"
            })),
            this.el = i,
            i
        }
        exportSVGString() {
            if (null == this.el)
                throw Error("call draw() first");
            const e = J();
            this.defs.appendChild(e);
            const t = (new X.XMLSerializer).serializeToString(this.el);
            return this.defs.removeChild(e),
            t
        }
        exportSVG() {
            return "data:image/svg+xml;utf8," + this.exportSVGString().replace(/[#]/g, encodeURIComponent)
        }
        toCanvas(e, t) {
            t = t || 1;
            const s = X.makeCanvas();
            s.width = Math.max(1, this.width * t * this.scale),
            s.height = Math.max(1, this.height * t * this.scale);
            const o = s.getContext("2d")
              , i = new Image;
            i.src = this.exportSVG(),
            i.onload = ()=>{
                o.save(),
                o.scale(t, t),
                o.drawImage(i, 0, 0),
                o.restore(),
                e(s)
            }
        }
        exportPNG(e, t) {
            this.toCanvas((t=>{
                URL && URL.createObjectURL && Blob && t.toBlob ? t.toBlob((t=>{
                    e(URL.createObjectURL(t))
                }
                ), "image/png") : e(t.toDataURL("image/png"))
            }
            ), t)
        }
    }
    const pe = (e,t)=>new ((e=>{
        switch (e.constructor) {
        case C:
            return se;
        case N:
            return oe;
        case R:
            return re;
        case I:
            return ce;
        case M:
            return ne;
        case B:
            return ae;
        case D:
            return le;
        case x:
            return he;
        default:
            throw Error("no view for " + e.constructor.name)
        }
    }
    )(e))(e,t);
    const de = Y.makeStyle;
    const Ve = window.scratchblocks = function(e) {
        const s = e.document;
        function o(e, s) {
            if ((s = t({
                style: "scratch3"
            }, s)).scale = s.scale || 1,
            /^scratch3($|-)/.test(s.style))
                return pe(e, s);
            throw Error("Unknown style: " + s.style)
        }
        function i(e, t) {
            if ("function" == typeof t)
                throw Error("render() no longer takes a callback");
            const s = o(e, t).render();
            return s.classList.add("scratchblocks-style-" + t.style),
            s
        }
        function r(e, o) {
            o = t({
                inline: !1
            }, o);
            const i = e.innerHTML.replace(/<br>\s?|\n|\r\n|\r/gi, "\n")
              , r = s.createElement("pre");
            r.innerHTML = i;
            let c = r.textContent;
            return o.inline && (c = c.replace("\n", "")),
            c
        }
        function c(e, t, o, i) {
            let r;
            if (i.inline) {
                r = s.createElement("span");
                let e = "scratchblocks scratchblocks-inline";
                o.scripts[0] && !o.scripts[0].isEmpty && (e += " scratchblocks-inline-" + o.scripts[0].blocks[0].shape),
                r.className = e,
                r.style.display = "inline-block",
                r.style.verticalAlign = "middle"
            } else
                r = s.createElement("div"),
                r.className = "scratchblocks";
            r.appendChild(t),
            e.innerHTML = "",
            e.appendChild(r)
        }
        return function(e) {
            X.init(e),
            se.measuring = X.makeCanvas().getContext("2d")
        }(e),
        {
            allLanguages: w,
            loadLanguages: v,
            stringify: function(e) {
                return e.stringify()
            },
            Label: C,
            Icon: N,
            Input: R,
            Block: I,
            Comment: M,
            Script: D,
            Document: x,
            newView: o,
            read: r,
            parse: j,
            replace: c,
            render: i,
            renderMatching: function(e, o) {
                e = e || "pre.blocks",
                o = t({
                    style: "scratch3",
                    inline: !1,
                    languages: ["en"],
                    scale: 1,
                    read: r,
                    parse: j,
                    render: i,
                    replace: c
                }, o);
                [].slice.apply(s.querySelectorAll(e)).forEach((e=>{
                    const t = o.read(e, o)
                      , s = o.parse(t, o)
                      , i = o.render(s, o);
                    o.replace(e, i, s, o)
                }
                ))
            },
            appendStyles: function() {
                s.head.appendChild(de())
            }
        }
    }(window);
    return Ve.appendStyles(),
    Ve
}();
//# sourceMappingURL=scratchblocks.min.js.map
