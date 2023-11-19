(()=>{var e=function(e){var n=RegExp("[?&]".concat(e,"=([^&]*)")).exec(window.location.search);return n&&decodeURIComponent(n[1].replace(/\+/g," "))},n="kids"===e("tag"),t=!!window.adBridge,o="yes"===e("gdhoist"),i=new(function(){function e(){var e=this;this.queue=[],this.init=function(n,t){return void 0===n&&(n={}),void 0===t&&(t={}),new Promise((function(o,i){e.enqueue("init",[n,t],o,i)}))},this.rewardedBreak=function(){return new Promise((function(e){e(!1)}))},this.commercialBreak=function(n){return new Promise((function(t,o){e.enqueue("commercialBreak",[n],t,o)}))},this.displayAd=function(e,n,t,o){o&&o(!0),t&&t()},this.withArguments=function(n){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];e.enqueue(n,t)}},this.handleAutoResolvePromise=function(){return new Promise((function(e){e()}))},this.throwNotLoaded=function(){console.debug("PokiSDK is not loaded yet. Not all methods are available.")},this.doNothing=function(){}}return e.prototype.enqueue=function(e,t,o,i){var r={fn:e,args:t||[],resolveFn:o,rejectFn:i};n?o&&o(!0):this.queue.push(r)},e.prototype.dequeue=function(){for(var e=this,n=function(){var n,o,i=t.queue.shift(),r=i,a=r.fn,u=r.args;if("function"==typeof window.PokiSDK[a])if((null==i?void 0:i.resolveFn)||(null==i?void 0:i.rejectFn)){var c="init"===a;if((n=window.PokiSDK)[a].apply(n,u).catch((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];"function"==typeof i.rejectFn&&i.rejectFn.apply(i,n),c&&setTimeout((function(){e.dequeue()}),0)})).then((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];"function"==typeof i.resolveFn&&i.resolveFn.apply(i,n),c&&setTimeout((function(){e.dequeue()}),0)})),c)return"break"}else(o=window.PokiSDK)[a].apply(o,u);else console.error("Cannot execute ".concat(a))},t=this;this.queue.length>0;){if("break"===n())break}},e}());window.PokiSDK={init:i.init,initWithVideoHB:i.init,commercialBreak:i.commercialBreak,rewardedBreak:i.rewardedBreak,displayAd:i.displayAd,destroyAd:i.doNothing,getLeaderboard:i.handleAutoResolvePromise,shareableURL:function(){return new Promise((function(e,n){return n()}))},getURLParam:function(n){return e("gd".concat(n))||e(n)||""},getLanguage:function(){return navigator.language.toLowerCase().split("-")[0]},isAdBlocked:function(){}},["captureError","customEvent","gameInteractive","gameLoadingFinished","gameLoadingProgress","gameLoadingStart","gameplayStart","gameplayStop","happyTime","logError","muteAd","roundEnd","roundStart","sendHighscore","setDebug","setDebugTouchOverlayController","setLogging","setPlayerAge","setPlaytestCanvas","enableEventTracking"].forEach((function(e){window.PokiSDK[e]=i.withArguments(e)}));var r,a,u=(r=window.pokiSDKVersion||e("ab")||"v".concat("2.373.0"),a="poki-sdk-core-".concat(r,".js"),n&&(a="poki-sdk-kids-".concat(r,".js")),t&&(a="poki-sdk-playground-".concat(r,".js")),o&&(a="poki-sdk-hoist-".concat(r,".js")),"https://game-cdn.poki.com/scripts/".concat(r,"/").concat(a)),c=document.createElement("script");c.setAttribute("src",u),c.setAttribute("type","text/javascript"),c.setAttribute("crossOrigin","anonymous"),c.onload=function(){return i.dequeue()},document.head.appendChild(c)})();


(function (Scratch) {
	'use strict';

	if (!Scratch.extensions.unsandboxed) {
		throw new Error('This extension must run unsandboxed');
	}

    const menuIconURI =
    "data:image/png;base64,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"

    

    let onPoki = Boolean(window.location.hostname.match(/poki\.dev|com/));
    let gameplayStarted = false;
    let breakContinues = false;
    let rewardedBreakSucces = false;

    let initialized = false;

    if (onPoki) {
        PokiSDK.init().then(() => {
            console.log('Poki SDK successfully initialized');
            initialized = true;
        }).catch(() => {
            initialized = true;
            console.log('Initialized, but the user likely has adblock');
        });
    } else {
        console.log("Cannot initialize Poki SDK at website other than 'https://poki.com'")
    }

	class PokiSDKExtension {
		getInfo() {
			return {
				id: 'pokisdk',
				name: 'Poki SDK',
                menuIconURI: menuIconURI,
                color1: '#009cff',
				blocks: [
                    {
                        opcode: 'on_poki',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'on Poki?',
                        disableMonitor: true,
                    },
                    '---',
                    {
                        opcode: 'game_loaded',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'game loaded',
                    },
                    '---',
                    {
                        opcode: 'gameplay_start',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'start gameplay',
                    },
                    {
                        opcode: 'gameplay_stop',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'stop gameplay',
                    },
                    {
                        opcode: 'gameplay_started',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'gameplay started?',
                        disableMonitor: true,
                    },
                    '---',
                    {
                        opcode: 'commercial_break',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'run commercial ad',
                    },
                    {
                        opcode: 'rewarded_break',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'run rewarded ad',
                    },
                    {
                        opcode: 'break_running',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'ad running?',
                        disableMonitor: true,
                    },
                    {
                        opcode: 'rewarded_break_success',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'rewarded ad success?',
                        disableMonitor: true,
                    },
                    '---',
                    {
                        opcode: 'when_break_starts',
                        blockType: Scratch.BlockType.EVENT,
                        text: 'when [BREAK_TYPE] starts',
                        isEdgeActivated: false,
                        arguments: {
                            BREAK_TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'break_type'
                            }
                        }
                    },
                    {
                        opcode: 'when_break_ends',
                        blockType: Scratch.BlockType.EVENT,
                        text: 'when [BREAK_TYPE] ends',
                        isEdgeActivated: false,
                        arguments: {
                            BREAK_TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'break_type'
                            }
                        }
                    },
				],
				menus: {
                    break_type: {
                        items: [
                            { text: 'any ad', value: 'any' },
                            { text: 'commercial ad', value: 'commercial break' },
                            { text: 'rewarded ad', value: 'rewarded break' },
                        ]
                    }
				}
			};
		}

        on_poki() {
            return onPoki;
        }

        game_loaded() {
            if (onPoki) {
                PokiSDK.gameLoadingFinished();
            } else {
                console.log('Game loading finished');
            }
        }

        gameplay_start() {
            if (onPoki) {
                PokiSDK.gameplayStart();
            } else {
                console.log('Gameplay started');
            }
            gameplayStarted = true;
        }

        gameplay_stop() {
            if (onPoki) {
                PokiSDK.gameplayStop();
            } else {
                console.log('Gameplay stopped');
            }
            gameplayStarted = false;
        }

        gameplay_started() {
            return gameplayStarted;
        }
        
        break_running() {
            return breakContinues;
        }

        rewarded_break_success() {
            return rewardedBreakSucces;
        }

        commercial_break(agrs, util) {
            if (onPoki) {
                PokiSDK.commercialBreak(() => {
                    breakContinues = true;
                    util.startHats('pokisdk_when_break_starts', { BREAK_TYPE: 'commercial break' });
                    util.startHats('pokisdk_when_break_starts', { BREAK_TYPE: 'any' });
                    PokiSDK.gameplayStop();
                }).then(() => {
                    breakContinues = false;
                    util.startHats('pokisdk_when_break_ends', { BREAK_TYPE: 'commercial break' });
                    util.startHats('pokisdk_when_break_ends', { BREAK_TYPE: 'any' });
                    PokiSDK.gameplayStart();
                });
            } else {
                util.startHats('pokisdk_when_break_starts', { BREAK_TYPE: 'commercial break' });
                util.startHats('pokisdk_when_break_starts', { BREAK_TYPE: 'any' });
                util.startHats('pokisdk_when_break_ends', { BREAK_TYPE: 'commercial break' });
                util.startHats('pokisdk_when_break_ends', { BREAK_TYPE: 'any' });
                console.log('Commercial break launched')
            }
        }

        rewarded_break(args, util) {
            if (onPoki) {
                PokiSDK.rewardedBreak(() => {
                    breakContinues = true;
                    util.startHats('pokisdk_when_break_starts', { BREAK_TYPE: 'rewarded break' });
                    util.startHats('pokisdk_when_break_starts', { BREAK_TYPE: 'any' });
                    PokiSDK.gameplayStop();
                }).then((success) => {
                    breakContinues = false;
                    rewardedBreakSucces = success;
                    util.startHats('pokisdk_when_break_ends', { BREAK_TYPE: 'rewarded break' });
                    PokiSDK.gameplayStart();
                });
            } else {
                rewardedBreakSucces = true;
                util.startHats('pokisdk_when_break_starts', { BREAK_TYPE: 'rewarded break' });
                util.startHats('pokisdk_when_break_starts', { BREAK_TYPE: 'any' });
                util.startHats('pokisdk_when_break_ends', { BREAK_TYPE: 'commercial break' });
                util.startHats('pokisdk_when_break_ends', { BREAK_TYPE: 'any' });
                console.log('Rewarded break launched')
            }
        }
	}

Scratch.extensions.register(new PokiSDKExtension());
})(Scratch);
