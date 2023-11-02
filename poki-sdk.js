(()=>{var e=function(e){var n=RegExp("[?&]".concat(e,"=([^&]*)")).exec(window.location.search);return n&&decodeURIComponent(n[1].replace(/\+/g," "))},n="kids"===e("tag"),t=!!window.adBridge,o="yes"===e("gdhoist"),i=new(function(){function e(){var e=this;this.queue=[],this.init=function(n,t){return void 0===n&&(n={}),void 0===t&&(t={}),new Promise((function(o,i){e.enqueue("init",[n,t],o,i)}))},this.rewardedBreak=function(){return new Promise((function(e){e(!1)}))},this.commercialBreak=function(n){return new Promise((function(t,o){e.enqueue("commercialBreak",[n],t,o)}))},this.displayAd=function(e,n,t,o){o&&o(!0),t&&t()},this.withArguments=function(n){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];e.enqueue(n,t)}},this.handleAutoResolvePromise=function(){return new Promise((function(e){e()}))},this.throwNotLoaded=function(){console.debug("PokiSDK is not loaded yet. Not all methods are available.")},this.doNothing=function(){}}return e.prototype.enqueue=function(e,t,o,i){var r={fn:e,args:t||[],resolveFn:o,rejectFn:i};n?o&&o(!0):this.queue.push(r)},e.prototype.dequeue=function(){for(var e=this,n=function(){var n,o,i=t.queue.shift(),r=i,a=r.fn,u=r.args;if("function"==typeof window.PokiSDK[a])if((null==i?void 0:i.resolveFn)||(null==i?void 0:i.rejectFn)){var c="init"===a;if((n=window.PokiSDK)[a].apply(n,u).catch((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];"function"==typeof i.rejectFn&&i.rejectFn.apply(i,n),c&&setTimeout((function(){e.dequeue()}),0)})).then((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];"function"==typeof i.resolveFn&&i.resolveFn.apply(i,n),c&&setTimeout((function(){e.dequeue()}),0)})),c)return"break"}else(o=window.PokiSDK)[a].apply(o,u);else console.error("Cannot execute ".concat(a))},t=this;this.queue.length>0;){if("break"===n())break}},e}());window.PokiSDK={init:i.init,initWithVideoHB:i.init,commercialBreak:i.commercialBreak,rewardedBreak:i.rewardedBreak,displayAd:i.displayAd,destroyAd:i.doNothing,getLeaderboard:i.handleAutoResolvePromise,shareableURL:function(){return new Promise((function(e,n){return n()}))},getURLParam:function(n){return e("gd".concat(n))||e(n)||""},getLanguage:function(){return navigator.language.toLowerCase().split("-")[0]},isAdBlocked:function(){}},["captureError","customEvent","gameInteractive","gameLoadingFinished","gameLoadingProgress","gameLoadingStart","gameplayStart","gameplayStop","happyTime","logError","muteAd","roundEnd","roundStart","sendHighscore","setDebug","setDebugTouchOverlayController","setLogging","setPlayerAge","setPlaytestCanvas","enableEventTracking"].forEach((function(e){window.PokiSDK[e]=i.withArguments(e)}));var r,a,u=(r=window.pokiSDKVersion||e("ab")||"v".concat("2.373.0"),a="poki-sdk-core-".concat(r,".js"),n&&(a="poki-sdk-kids-".concat(r,".js")),t&&(a="poki-sdk-playground-".concat(r,".js")),o&&(a="poki-sdk-hoist-".concat(r,".js")),"https://game-cdn.poki.com/scripts/".concat(r,"/").concat(a)),c=document.createElement("script");c.setAttribute("src",u),c.setAttribute("type","text/javascript"),c.setAttribute("crossOrigin","anonymous"),c.onload=function(){return i.dequeue()},document.head.appendChild(c)})();


(function (Scratch) {
	'use strict';

	if (!Scratch.extensions.unsandboxed) {
		throw new Error('This extension must run unsandboxed');
	}

    let initialized = false;

    PokiSDK.init().then(() => {
        console.log('Poki SDK successfully initialized');
        initialized = true;
    }).catch(() => {
        initialized = true;
        console.log('Initialized, but the user likely has adblock');
    });

    let gameplayStarted = false;
    let rewardedBreakSucces = false;

	class PokiSDKExtension {
		getInfo() {
			return {
				id: 'PokiSDKExtension',
				name: 'Poki SDK',
				blocks: [
                    {
                        opcode: 'gameplay_start',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'gameplay start',
                    },
                    {
                        opcode: 'gameplay_stop',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'gameplay stop',
                    },
                    {
                        opcode: 'gameplay_started',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'gameplay started?',
                    },
                    '---',
                    {
                        opcode: 'commercial_break',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'commercial break',
                    },
                    {
                        opcode: 'rewarded_break',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'rewarded break',
                    },
                    {
                        opcode: 'rewarded_break_success',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'rewarded break success?',
                    },
                    '---',
                    {
                        opcode: 'when_commercial_break_ends',
                        blockType: Scratch.BlockType.HAT,
                        text: 'when commercial break ends',
                    },
                    {
                        opcode: 'when_rewarded_break_ends',
                        blockType: Scratch.BlockType.HAT,
                        text: 'when rewarded break ends',
                    },
				],
				menus: {

				// menus ...

				}
			};
		}

        gameplay_start() {
            PokiSDK.gameplayStart();
            gameplayStarted = true;
        }

        gameplay_stop() {
            PokiSDK.gameplayStop();
            gameplayStarted = false;
        }

        gameplay_started() {
            return gameplayStarted;
        }
        

        commercial_break(util) {
            PokiSDK.commercialBreak().then(() => {
                util.startHats('PokiSDKExtension_when_commercial_break_ends');
            });
        }

        rewarded_break(util) {
            PokiSDK.rewardedBreak().then((success) => {
                rewardedBreakSucces = success;
                util.startHats('PokiSDKExtension_when_rewarded_break_ends');
            });
        }
	}

Scratch.extensions.register(new PokiSDKExtension());
})(Scratch);
