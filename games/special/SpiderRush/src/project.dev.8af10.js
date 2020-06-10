window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AudioController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d6d0OoirhGUovLXt4pSNNX", "AudioController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HashMap_1 = require("../utils/HashMap");
    var EventManager_1 = require("./EventManager");
    var EventName_1 = require("./EventName");
    var Game_1 = require("./Game");
    var PATH = "sounds/";
    window.oncanplay && (window.oncanplay = function() {
      AudioController.canPlay = true;
    });
    var AudioController = function() {
      function AudioController() {
        this.audioID = {};
        this.clips = new HashMap_1.HashMap();
      }
      Object.defineProperty(AudioController, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new AudioController();
        },
        enumerable: true,
        configurable: true
      });
      AudioController.prototype.init = function(callback) {
        console.warn(" start load AudioClip ");
        var self = this;
        cc.loader.loadResDir(PATH, cc.AudioClip, function(err, clips, urls) {
          if (err) console.error(err); else {
            for (var _i = 0, clips_1 = clips; _i < clips_1.length; _i++) {
              var clip = clips_1[_i];
              true;
              "string" == typeof clip["_audio"] && cc.loader["_cache"] && cc.loader["_cache"][clip["_audio"]] && cc.loader["_cache"][clip["_audio"]]["buffer"] && (clip["_audio"] = cc.loader["_cache"][clip["_audio"]]["buffer"]);
              self.clips.add(clip.name, clip);
            }
            self.initEvent();
            callback && callback();
          }
        });
      };
      AudioController.prototype.initEvent = function() {
        var _this = this;
        EventManager_1.gEventMgr.targetOff(this);
        this.playMusic("bgm");
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_RECYCLE_POKERS, function() {
          _this.playEffect("recyclePoker");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.DEV_POKERS, function() {
          _this.playEffect("devPoker");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_POKER_PLACE, function() {
          _this.playEffect("pokerPlace");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_RECYCLE, function() {
          _this.playEffect("recycle" + Game_1.Game.getCombo());
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_POKER_FLY, function() {
          _this.playEffect("pokerFly");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_OVER_1, function() {
          _this.playEffect("result_flip");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_OVER_2, function() {
          _this.playEffect("result_dev");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_PAUSE, function() {
          _this.playEffect("pause");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_SHAKE, function() {
          _this.playEffect("shake");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_START, function() {
          _this.playEffect("start_count");
        }, this);
      };
      AudioController.prototype.playEffect = function(name, loop) {
        var _this = this;
        void 0 === loop && (loop = false);
        if (!AudioController.canPlay) {
          this.bindTouch();
          return;
        }
        if (cc.audioEngine.getEffectsVolume() <= .05) return;
        var effect = this.clips.get(name);
        effect ? this.audioID[name] = cc.audioEngine.playEffect(effect, loop) : cc.loader.loadRes(PATH + name, cc.AudioClip, function(err, res) {
          if (err) console.error(err); else {
            true;
            "string" == typeof res["_audio"] && cc.loader["_cache"] && cc.loader["_cache"][res["_audio"]] && cc.loader["_cache"][res["_audio"]]["buffer"] && (res["_audio"] = cc.loader["_cache"][res["_audio"]]["buffer"]);
            _this.clips.add(res.name, res);
            _this.audioID[name] = cc.audioEngine.playEffect(res, loop);
          }
        });
      };
      AudioController.prototype.playMusic = function(name, loop) {
        var _this = this;
        void 0 === loop && (loop = true);
        if (!AudioController.canPlay) {
          this.bindTouch();
          AudioController.PlayedList.push({
            loop: true,
            volume: 1,
            clipName: name,
            supTime: Date.now(),
            skip: false,
            isBgm: true
          });
          return;
        }
        var music = this.clips.get(name);
        music ? cc.audioEngine.playMusic(music, loop) : cc.loader.loadRes(PATH + name, cc.AudioClip, function(err, res) {
          if (err) console.error(err); else {
            "string" == typeof res["_audio"] && cc.loader["_cache"] && cc.loader["_cache"][res["_audio"]] && cc.loader["_cache"][res["_audio"]]["buffer"] && (res["_audio"] = cc.loader["_cache"][res["_audio"]]["buffer"]);
            _this.clips.add(res.name, res);
            cc.audioEngine.playMusic(res, loop);
          }
        });
      };
      AudioController.prototype.bindTouch = function() {
        if (!AudioController.hasBindTouch) {
          var self_1 = this;
          var playFunc_1 = function() {
            cc.game.canvas.removeEventListener("touchstart", playFunc_1);
            AudioController.canPlay = true;
            var item;
            while ((item = AudioController.PlayedList.pop()) && self_1.clips.get(item.clipName) && !item.skip) cc.audioEngine.playMusic(self_1.clips.get(item.clipName), item.loop);
          };
          AudioController.hasBindTouch = true;
          cc.game.canvas.addEventListener("touchstart", playFunc_1);
        }
      };
      AudioController.PlayedList = [];
      AudioController.canPlay = false;
      AudioController.hasBindTouch = false;
      return AudioController;
    }();
    exports.gAudio = AudioController.inst;
    cc._RF.pop();
  }, {
    "../utils/HashMap": "HashMap",
    "./EventManager": "EventManager",
    "./EventName": "EventName",
    "./Game": "Game"
  } ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15a47pj/bZLz4bw5c1lt4L9", "EventManager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager = function() {
      function EventManager() {
        this.eventTarget = new cc.EventTarget();
      }
      Object.defineProperty(EventManager, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new EventManager();
        },
        enumerable: true,
        configurable: true
      });
      EventManager.prototype.emit = function(type, arg1, arg2, arg3, arg4, arg5) {
        this.eventTarget.emit(type.toString(), arg1, arg2, arg3, arg4, arg5);
      };
      EventManager.prototype.on = function(type, callback, target, useCapture) {
        return this.eventTarget.on(type.toString(), callback, target, useCapture);
      };
      EventManager.prototype.once = function(type, callback, target) {
        this.eventTarget.once(type.toString(), callback, target);
      };
      EventManager.prototype.dispatchEvent = function(event) {
        this.eventTarget.dispatchEvent(event);
      };
      EventManager.prototype.off = function(type, callback, target) {
        this.eventTarget.off(type.toString(), callback, target);
      };
      EventManager.prototype.hasEventListener = function(type) {
        return this.eventTarget.hasEventListener(type.toString());
      };
      EventManager.prototype.targetOff = function(target) {
        this.eventTarget.targetOff(target);
      };
      return EventManager;
    }();
    exports.gEventMgr = EventManager.inst;
    cc._RF.pop();
  }, {} ],
  EventName: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf67a7QRNNGpo1qJkcJdq4+", "EventName");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GlobalEvent;
    (function(GlobalEvent) {
      GlobalEvent[GlobalEvent["UPDATE_DRAW_ICON"] = 0] = "UPDATE_DRAW_ICON";
      GlobalEvent[GlobalEvent["UPDATE_SCORE"] = 1] = "UPDATE_SCORE";
      GlobalEvent[GlobalEvent["UPDATE_BACK_BTN_ICON"] = 2] = "UPDATE_BACK_BTN_ICON";
      GlobalEvent[GlobalEvent["UPDATE_RECYCLE_POKER"] = 3] = "UPDATE_RECYCLE_POKER";
      GlobalEvent[GlobalEvent["OPEN_RESULT"] = 4] = "OPEN_RESULT";
      GlobalEvent[GlobalEvent["RESTART"] = 5] = "RESTART";
      GlobalEvent[GlobalEvent["COMPLETE"] = 6] = "COMPLETE";
      GlobalEvent[GlobalEvent["AUTO_COMPLETE_DONE"] = 7] = "AUTO_COMPLETE_DONE";
      GlobalEvent[GlobalEvent["PLAY_RECYCLE_POKERS"] = 8] = "PLAY_RECYCLE_POKERS";
      GlobalEvent[GlobalEvent["DEV_POKERS"] = 9] = "DEV_POKERS";
      GlobalEvent[GlobalEvent["PLAY_POKER_PLACE"] = 10] = "PLAY_POKER_PLACE";
      GlobalEvent[GlobalEvent["PLAY_POKER_FLY"] = 11] = "PLAY_POKER_FLY";
      GlobalEvent[GlobalEvent["PLAY_OVER_1"] = 12] = "PLAY_OVER_1";
      GlobalEvent[GlobalEvent["PLAY_OVER_2"] = 13] = "PLAY_OVER_2";
      GlobalEvent[GlobalEvent["PLAY_PAUSE"] = 14] = "PLAY_PAUSE";
      GlobalEvent[GlobalEvent["PLAY_START"] = 15] = "PLAY_START";
      GlobalEvent[GlobalEvent["PLAY_SHAKE"] = 16] = "PLAY_SHAKE";
      GlobalEvent[GlobalEvent["SMALL_BGM"] = 17] = "SMALL_BGM";
      GlobalEvent[GlobalEvent["NORMAL_BGM"] = 18] = "NORMAL_BGM";
      GlobalEvent[GlobalEvent["PLAY_RECYCLE"] = 19] = "PLAY_RECYCLE";
    })(GlobalEvent = exports.GlobalEvent || (exports.GlobalEvent = {}));
    cc._RF.pop();
  }, {} ],
  GameFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44968IEriNJurc3wbMrKqft", "GameFactory");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HashMap_1 = require("../utils/HashMap");
    var ObjPool = function() {
      function ObjPool(template, initSize, handle) {
        this._pool = [];
        this.totalSize = 0;
        this.initTime = [];
        this.completeHandler = handle;
        this.template = template;
        this.totalSize = initSize;
        this.hashKey = "ObjPool:" + this.template.name + " - " + this.totalSize;
        this.initPool(initSize);
      }
      ObjPool.prototype.initPool = function(size, immediately) {
        var _this = this;
        void 0 === immediately && (immediately = false);
        if (immediately) for (var i = 0; i < size; ++i) {
          this.initTime.push(Date.now());
          var newNode = cc.instantiate(this.template);
          this.put(newNode);
        } else for (var i = 0; i < size; ++i) {
          this.initTime.push(Date.now());
          setTimeout(function() {
            var newNode = cc.instantiate(_this.template);
            _this.put(newNode);
          }, i);
        }
      };
      ObjPool.prototype.size = function() {
        return this._pool.length;
      };
      ObjPool.prototype.clear = function() {
        var count = this._pool.length;
        for (var i = 0; i < count; ++i) this._pool[i].destroy && this._pool[i].destroy();
        this._pool.length = 0;
      };
      ObjPool.prototype.put = function(obj) {
        if (obj && -1 === this._pool.indexOf(obj)) {
          obj.removeFromParent(false);
          var handlers = obj.getComponents(cc.Component);
          for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            handler && handler.unuse && handler.unuse.apply(handler);
          }
          this._pool.push(obj);
          if (this.completeHandler) {
            true;
            console.log(" pool:", this.template.name, ", now:", this._pool.length, ", total:", this.totalSize, ", cost:", (Date.now() - this.initTime[this._pool.length - 1]).toFixed(2) + "ms");
            if (this.totalSize <= this._pool.length) {
              this.completeHandler();
              console.error(" pool:", this.template.name, ", now:", this._pool.length, ", total:", this.totalSize, ", cost:", (Date.now() - this.initTime[this._pool.length - 1]).toFixed(2) + "ms");
              this.completeHandler = null;
            }
          }
        }
      };
      ObjPool.prototype.get = function() {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) _[_i] = arguments[_i];
        var last = this._pool.length - 1;
        if (last < 0) {
          console.warn(" last < 0 ");
          this.initPool(1, true);
        }
        last = this._pool.length - 1;
        var obj = this._pool[last];
        this._pool.length = last;
        var handlers = obj.getComponents(cc.Component);
        for (var _a = 0, handlers_2 = handlers; _a < handlers_2.length; _a++) {
          var handler = handlers_2[_a];
          handler && handler.reuse && handler.reuse.apply(handler, arguments);
        }
        return obj;
      };
      return ObjPool;
    }();
    var Step;
    (function(Step) {
      Step[Step["INIT"] = 0] = "INIT";
      Step[Step["POKER"] = 4] = "POKER";
      Step[Step["AddScore"] = 8] = "AddScore";
      Step[Step["SubScore"] = 16] = "SubScore";
      Step[Step["DONE"] = 28] = "DONE";
    })(Step || (Step = {}));
    var GameFactory = function() {
      function GameFactory() {
        this.step = Step.INIT;
        this.PokerPool = new HashMap_1.HashMap();
        this.addScorePool = new HashMap_1.HashMap();
        this.subScorePool = new HashMap_1.HashMap();
      }
      Object.defineProperty(GameFactory, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new GameFactory();
        },
        enumerable: true,
        configurable: true
      });
      GameFactory.prototype.init = function(callback, poker, addScoreLabel, subScoreLabel) {
        var _this = this;
        this.doneCallback = callback;
        setTimeout(function() {
          _this.initPoker(52, poker);
        }, 0);
        setTimeout(function() {
          _this.initAddScore(10, addScoreLabel);
        }, 10);
        setTimeout(function() {
          _this.initSubScore(10, subScoreLabel);
        }, 20);
      };
      GameFactory.prototype.nextStep = function(step) {
        this.step |= step;
        this.step >= Step.DONE && this.doneCallback && this.doneCallback();
      };
      GameFactory.prototype.initPoker = function(initCount, prefab) {
        var self = this;
        prefab ? self.PokerPool.add("Poker", new ObjPool(prefab, initCount, function() {
          self.nextStep(Step.POKER);
        })) : cc.loader.loadRes("prefabs/poker", cc.Prefab, function(err, prefabRes) {
          err ? console.error(err) : self.PokerPool.add("Poker", new ObjPool(prefabRes, initCount, function() {
            self.nextStep(Step.POKER);
          }));
        });
      };
      GameFactory.prototype.getPoker = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        return this.PokerPool.get("Poker").get(args);
      };
      GameFactory.prototype.putPoker = function(poker) {
        this.PokerPool.get("Poker").put(poker);
      };
      GameFactory.prototype.initAddScore = function(initCount, prefab) {
        var self = this;
        prefab ? self.addScorePool.add("AddScore", new ObjPool(prefab, initCount, function() {
          self.nextStep(Step.AddScore);
        })) : cc.loader.loadRes("prefabs/AddScoreLabel", cc.Prefab, function(err, prefabRes) {
          err ? console.error(err) : self.addScorePool.add("AddScore", new ObjPool(prefabRes, initCount, function() {
            self.nextStep(Step.AddScore);
          }));
        });
      };
      GameFactory.prototype.getAddScore = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        return this.addScorePool.get("AddScore").get(args);
      };
      GameFactory.prototype.putAddScore = function(poker) {
        this.addScorePool.get("AddScore").put(poker);
      };
      GameFactory.prototype.initSubScore = function(initCount, prefab) {
        var self = this;
        prefab ? self.subScorePool.add("SubScore", new ObjPool(prefab, initCount, function() {
          self.nextStep(Step.SubScore);
        })) : cc.loader.loadRes("prefabs/SubScoreLabel", cc.Prefab, function(err, prefabRes) {
          err ? console.error(err) : self.subScorePool.add("SubScore", new ObjPool(prefabRes, initCount, function() {
            self.nextStep(Step.SubScore);
          }));
        });
      };
      GameFactory.prototype.getSubScore = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        return this.subScorePool.get("SubScore").get(args);
      };
      GameFactory.prototype.putSubScore = function(poker) {
        this.subScorePool.get("SubScore").put(poker);
      };
      return GameFactory;
    }();
    exports.gFactory = GameFactory.inst;
    cc._RF.pop();
  }, {
    "../utils/HashMap": "HashMap"
  } ],
  GameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "GameScene");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameFactory_1 = require("./controller/GameFactory");
    var Game_1 = require("./controller/Game");
    var Poker_1 = require("./Poker");
    var Pokers_1 = require("./Pokers");
    var EventManager_1 = require("./controller/EventManager");
    var EventName_1 = require("./controller/EventName");
    var Stop_1 = require("./Stop");
    var AudioController_1 = require("./controller/AudioController");
    var Guide_1 = require("./Guide");
    var LogHandler_1 = require("./utils/LogHandler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var celerx = require("./utils/celerx");
    var LOAD_STEP;
    (function(LOAD_STEP) {
      LOAD_STEP[LOAD_STEP["READY"] = 0] = "READY";
      LOAD_STEP[LOAD_STEP["PREFABS"] = 2] = "PREFABS";
      LOAD_STEP[LOAD_STEP["AUDIO"] = 16] = "AUDIO";
      LOAD_STEP[LOAD_STEP["CELER"] = 32] = "CELER";
      LOAD_STEP[LOAD_STEP["GUIDE"] = 64] = "GUIDE";
      LOAD_STEP[LOAD_STEP["CELER_READY"] = 18] = "CELER_READY";
      LOAD_STEP[LOAD_STEP["DONE"] = 114] = "DONE";
    })(LOAD_STEP = exports.LOAD_STEP || (exports.LOAD_STEP = {}));
    var GameScene = function(_super) {
      __extends(GameScene, _super);
      function GameScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Poker = null;
        _this.PokerClip = null;
        _this.PlaceRoot = null;
        _this.PokerDevl = null;
        _this.RemoveNode = null;
        _this.BackButton = null;
        _this.PauseButton = null;
        _this.BackButtonAtlas = null;
        _this.DrawButtonAtlas = null;
        _this.TimeLabel = null;
        _this.TimeIcon = null;
        _this.TimeIconAtlas = null;
        _this.ScoreLabel = null;
        _this.SmallOrg = null;
        _this.SubScoreLabel = null;
        _this.AddScoreLabel = null;
        _this.TimeAnimation = null;
        _this.Stop = null;
        _this.Guide = null;
        _this.Complete = null;
        _this.SubmitButton = null;
        _this.CheatToggle = null;
        _this.RecyclePokerLabel = null;
        _this.step = LOAD_STEP.READY;
        _this.canDispatchPoker = false;
        _this.dispatchCardCount = 38;
        _this.devTime = 10;
        _this.backTime = 10;
        _this.score = 0;
        _this.showScore = 0;
        _this.scoreStep = 0;
        _this.isStart = false;
        _this.isCelerReady = false;
        return _this;
      }
      GameScene.prototype.init = function() {
        this.Stop.hide();
        this.Complete.node.active = false;
        this.TimeLabel.string = CMath.TimeFormat(Game_1.Game.getGameTime());
        this.ScoreLabel.string = "0";
        this.TimeAnimation.node.active = false;
        this.TimeIcon.spriteFrame = this.TimeIconAtlas.getSpriteFrame("icon_time");
        Game_1.Game.getCycledPokerRoot().clear();
        Game_1.Game.getPlacePokerRoot().clear();
        for (var _i = 0, _a = this.PlaceRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.getComponent(cc.Sprite) && child.getComponent(cc.Sprite).enabled && (child.getComponent(cc.Sprite).enabled = true);
          Game_1.Game.addPlacePokerRoot(parseInt(child.name), child);
        }
      };
      GameScene.prototype.onLoad = function() {
        var _this = this;
        LogHandler_1.LogHandler.inst.initLog(celerx.log);
        LogHandler_1.LogHandler.inst.log(" game scene on load");
        Game_1.Game.removeNode = this.RemoveNode;
        Game_1.Game.pokerClip = this.PokerClip;
        CMath.randomSeed = .9367951130243051;
        CMath.sharedSeed = .9367951130243051;
        var self = this;
        celerx.onStart(function() {
          self.celerStart();
        }.bind(this));
        celerx.provideScore(function() {
          return parseInt(Game_1.Game.getScore().toString());
        });
        this.CheatToggle.node.active = true;
        this.CheatToggle.isChecked = false;
        window["CheatOpen"] = false;
        this.CheatToggle.node.on("toggle", function() {
          _this.CheatToggle.isChecked ? window["noTime"] = window["CheatOpen"] = true : window["noTime"] = window["CheatOpen"] = false;
        }, this);
        this.init();
        setTimeout(function() {
          GameFactory_1.gFactory.init(function() {
            this.nextStep(LOAD_STEP.PREFABS);
          }.bind(_this), _this.Poker, _this.AddScoreLabel, _this.SubScoreLabel);
        }, 0);
        this.nextStep(LOAD_STEP.AUDIO);
        AudioController_1.gAudio.init(function() {});
        this.PokerClip.on(cc.Node.EventType.TOUCH_START, function(e) {}, this);
        this.PokerClip.on(cc.Node.EventType.TOUCH_END, function(e) {
          if (Game_1.Game.isTimeOver() || Game_1.Game.isComplete()) return;
          if (_this.devTime >= .3) {
            _this.dispatchPoker();
            _this.devTime = 0;
          }
        }, this);
        this.PokerClip.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
          if (Game_1.Game.isTimeOver() || Game_1.Game.isComplete()) return;
          if (_this.devTime >= .3) {
            _this.dispatchPoker();
            _this.devTime = 0;
          }
        }, this);
        this.PauseButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          if (Game_1.Game.isComplete()) return;
          _this.Stop.show(1);
          Game_1.Game.setPause(true);
        }, this);
        this.SubmitButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          if (Game_1.Game.isComplete()) return;
          _this.Stop.show(-1);
          Game_1.Game.setPause(true);
        }, this);
        this.PokerDevl.on(cc.Node.EventType.CHILD_ADDED, function(child) {
          var poker = child.getComponent(Poker_1.default);
          poker && poker.setRecycle(false);
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.COMPLETE, function() {
          _this.Complete.node.active = true;
          _this.Complete.play();
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_RECYCLE_POKER, function(count) {
          _this.RecyclePokerLabel.string = count.toString();
        }, this);
        this.BackButton.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.BackButtonAtlas.getSpriteFrame("btn_backgray");
        this.BackButton.interactable = false;
        this.BackButton.node.on(cc.Node.EventType.TOUCH_START, function() {
          if (Game_1.Game.isTimeOver() || _this.backTime < .5 || Game_1.Game.isComplete()) return;
          _this.backTime = 0;
          Game_1.Game.backStep() && Game_1.Game.addScore(-Pokers_1.BACK_STEP_SCORE, CMath.ConvertToNodeSpaceAR(_this.BackButton.node, Game_1.Game.removeNode));
        }, Game_1.Game);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_BACK_BTN_ICON, function() {
          _this.BackButton.interactable = Game_1.Game.canBackStep();
          _this.BackButton.interactable ? _this.BackButton.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = _this.BackButtonAtlas.getSpriteFrame("btn_back") : _this.BackButton.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = _this.BackButtonAtlas.getSpriteFrame("btn_backgray");
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_DRAW_ICON, function() {
          switch (Game_1.Game.getFreeDrawTimes()) {
           case 1:
            _this.PokerDevl.getComponent(cc.Sprite).spriteFrame = _this.DrawButtonAtlas.getSpriteFrame("free_draw_1");
            break;

           case 2:
            _this.PokerDevl.getComponent(cc.Sprite).spriteFrame = _this.DrawButtonAtlas.getSpriteFrame("free_draw_2");
            break;

           case 3:
            _this.PokerDevl.getComponent(cc.Sprite).spriteFrame = _this.DrawButtonAtlas.getSpriteFrame("free_draw_3");
            break;

           default:
            _this.PokerDevl.getComponent(cc.Sprite).spriteFrame = _this.DrawButtonAtlas.getSpriteFrame("draw_20");
          }
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_SCORE, function(score, pos) {
          _this.scoreStep = Math.ceil(Math.max(score / 20, _this.scoreStep));
          var targetPos = CMath.ConvertToNodeSpaceAR(_this.ScoreLabel.node, _this.RemoveNode);
          if (score > 0) {
            var scoreLabel_1 = GameFactory_1.gFactory.getAddScore("/" + score.toString());
            scoreLabel_1.setParent(_this.RemoveNode);
            scoreLabel_1.setPosition(pos);
            scoreLabel_1.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.15, 1.5), cc.delayTime(.25), cc.scaleTo(.1, 1), cc.moveTo(.25, targetPos.x, targetPos.y), cc.callFunc(function() {
              _this.showScore = Game_1.Game.getScore();
              GameFactory_1.gFactory.putAddScore(scoreLabel_1);
            })));
          } else {
            var scoreLabel_2 = GameFactory_1.gFactory.getSubScore("/" + Math.abs(score).toString());
            scoreLabel_2.setParent(_this.RemoveNode);
            scoreLabel_2.setPosition(pos);
            scoreLabel_2.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.15, 1.5), cc.delayTime(.25), cc.scaleTo(.1, 1), cc.moveTo(.25, targetPos.x, targetPos.y), cc.callFunc(function() {
              _this.showScore = Game_1.Game.getScore();
              GameFactory_1.gFactory.putSubScore(scoreLabel_2);
            })));
          }
        }, this);
        EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.OPEN_RESULT, this.openResult, this);
        setTimeout(function() {
          cc.loader.loadRes("prefabs/Result");
        }, 20);
      };
      GameScene.prototype.openResult = function() {
        var _this = this;
        this.Stop.hide();
        if (this.node.getChildByName("Result")) return;
        console.error(" load result layer");
        cc.loader.loadRes("prefabs/Result", cc.Prefab, function(err, result) {
          if (err) {
            console.error(" submit score by load err:", err, " matchid:", Game_1.Game.MatchInfo.matchId);
            celerx.submitScore(Game_1.Game.getScore());
          } else {
            var resultLayer = cc.instantiate(result);
            resultLayer.name = "Result";
            _this.node.addChild(resultLayer);
          }
        });
      };
      GameScene.prototype.celerStart = function() {
        var _this = this;
        var match = celerx.getMatch();
        Game_1.Game.MatchInfo = match || {};
        if (match && match.sharedRandomSeed) {
          CMath.randomSeed = match.sharedRandomSeed;
          CMath.sharedSeed = match.sharedRandomSeed;
        } else {
          CMath.randomSeed = Math.random();
          CMath.sharedSeed = CMath.randomSeed;
        }
        this.nextStep(LOAD_STEP.CELER);
        LogHandler_1.LogHandler.inst.log(" celerx.onStart call, matchid:", Game_1.Game.MatchInfo.matchId, ", seed:", Game_1.Game.MatchInfo.sharedRandomSeed);
        if (match && match.shouldLaunchTutorial || true) this.Guide.show(function() {
          _this.nextStep(LOAD_STEP.GUIDE);
        }); else {
          this.Guide.hide();
          this.nextStep(LOAD_STEP.GUIDE);
        }
      };
      GameScene.prototype.nextStep = function(loadStep) {
        this.step |= loadStep;
        console.error("loadStep Step:" + LOAD_STEP[loadStep]);
        if (this.step >= LOAD_STEP.DONE && !this.isStart) {
          console.error("  startGame ---------------------- ");
          this.isStart = true;
          this.startGame();
        } else if (this.step >= LOAD_STEP.CELER_READY && !this.isCelerReady) {
          LogHandler_1.LogHandler.inst.log(" invoke celerx.ready");
          celerx.ready();
          this.isCelerReady = true;
          this.celerStart();
        }
      };
      GameScene.prototype.startGame = function() {
        var _this = this;
        cc.Node.maxTouchNum = 1;
        cc.Node.touchNum = 0;
        var pokers = Pokers_1.Pokers.concat([]).reverse();
        console.error(pokers);
        console.error(pokers.length);
        while (pokers.length > 0) {
          var curIndex = pokers.length - 1;
          var totalWeight = pokers.length;
          var random = CMath.getRandom(0, 1);
          var randomIndex = Math.floor(random * totalWeight);
          var i = pokers.splice(randomIndex, 1);
          var pokerNode = GameFactory_1.gFactory.getPoker(i);
          pokerNode.name = curIndex.toString();
          pokerNode.x = 0;
          pokerNode.y = 0;
          this.PokerDevl.addChild(pokerNode);
        }
        var count = 0;
        var totalCount = this.PokerDevl.childrenCount;
        var func2 = function() {
          var pokerNode = _this.PokerDevl.getChildByName((totalCount - count++).toString());
          if (!pokerNode) {
            _this.canDispatchPoker = true;
            console.error(" \u53d1\u724c\u7ed3\u675f");
            return;
          }
          var targetPos = cc.v2(0, 0);
          if (_this.PokerClip.childrenCount > 0) {
            var child = _this.PokerClip.children[_this.PokerClip.childrenCount - 1];
            targetPos = cc.v2(child.x - 20, child.y);
          }
          var selfPos = CMath.ConvertToNodeSpaceAR(pokerNode, _this.PokerClip);
          var poker_1 = pokerNode.getComponent(Poker_1.default);
          poker_1.setLastPosition(targetPos);
          pokerNode.setParent(_this.PokerClip);
          pokerNode.setPosition(selfPos);
          pokerNode.group = "top";
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.DEV_POKERS);
          pokerNode.runAction(cc.sequence(cc.moveTo(.05, targetPos.x, targetPos.y), cc.callFunc(function() {
            pokerNode.group = "default";
            poker_1.setLastPosition();
            func2();
          }, _this)));
        };
        var func1 = function() {
          if (count++ >= _this.dispatchCardCount) {
            console.error(" start call func2");
            func2();
            return;
          }
          var pokerNode = _this.PokerDevl.getChildByName((totalCount - count).toString());
          if (!pokerNode) {
            console.error(" poker node invaild!");
            return;
          }
          var rootIndex = (count - 1) % 8;
          var targetNode = Game_1.Game.getPlacePokerRoot().get(rootIndex);
          if (targetNode) {
            var selfPos = CMath.ConvertToNodeSpaceAR(pokerNode, targetNode);
            var offset = Pokers_1.OFFSET_Y / 3;
            if (!targetNode.getComponent(Poker_1.default)) {
              Game_1.Game.addPlacePokerRoot(rootIndex, pokerNode);
              offset = 0;
            }
            pokerNode.setParent(targetNode);
            var poker_2 = pokerNode.getComponent(Poker_1.default);
            pokerNode.setPosition(selfPos);
            pokerNode.group = "top";
            if (count > 30) {
              poker_2.flipCard(.1);
              poker_2.setNormal();
            }
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.DEV_POKERS);
            pokerNode.runAction(cc.sequence(cc.moveTo(.05, 0, offset), cc.callFunc(function() {
              pokerNode.group = "default";
              poker_2.setDefaultPosition();
              func1();
            }, _this)));
          }
        };
        console.error(" call func1");
        func1();
      };
      GameScene.prototype.recyclePoker = function() {};
      GameScene.prototype.devPoker = function() {};
      GameScene.prototype.dispatchPoker = function() {
        var _this = this;
        if (Game_1.Game.isTimeOver() || Game_1.Game.isComplete()) {
          console.error(" cant dispatch poker ,  game is complete");
          return;
        }
        if (this.PokerClip.childrenCount <= 0 || !this.canDispatchPoker) {
          console.error(" cant dispatch poker , child count:", this.PokerClip.childrenCount, ", this.canDispatchPoker:", this.canDispatchPoker);
          return;
        }
        Game_1.Game.isGameStarted() || Game_1.Game.start();
        var nodes = [];
        var parents = [];
        var poses = [];
        var funcs = [];
        var canDispatch = true;
        Game_1.Game.getPlacePokerRoot().forEach(function(index, targetNode) {
          if (_this.PokerClip.childrenCount <= 0) return;
          var pokerNode = _this.PokerClip.children[_this.PokerClip.childrenCount - 1];
          if (pokerNode.getNumberOfRunningActions() > 0) {
            canDispatch = false;
            return;
          }
          if (targetNode.getNumberOfRunningActions() > 0 || targetNode.getComponent(Poker_1.default) && targetNode.getComponent(Poker_1.default).isCycled()) {
            canDispatch = false;
            return;
          }
        });
        if (!canDispatch) {
          console.error(" targetnode is recycled or has runing actions ,cant dispatchPoker!");
          return;
        }
        Game_1.Game.getPlacePokerRoot().forEach(function(index, targetNode) {
          if (_this.PokerClip.childrenCount <= 0) return;
          var pokerNode = _this.PokerClip.children[_this.PokerClip.childrenCount - 1];
          var selfPos = CMath.ConvertToNodeSpaceAR(pokerNode, targetNode);
          var poker = pokerNode.getComponent(Poker_1.default);
          nodes.push(pokerNode);
          parents.push(pokerNode.getParent());
          poses.push(pokerNode.position.clone());
          funcs.push({
            callback: poker.flipCard,
            args: [ .1 ],
            target: poker
          });
          pokerNode.setParent(targetNode);
          pokerNode.setPosition(selfPos);
          var offset = Pokers_1.OFFSET_Y;
          if (targetNode.getComponent(Poker_1.default)) targetNode.getComponent(Poker_1.default).getCardState() == Poker_1.CardState.Back && (offset = Pokers_1.OFFSET_Y / 3); else {
            Game_1.Game.addPlacePokerRoot(index, pokerNode);
            offset = 0;
          }
          poker.flipCard(.1);
          poker.setNormal();
          pokerNode.group = "top";
          _this.canDispatchPoker = false;
          pokerNode.runAction(cc.sequence(cc.moveTo(.3, 0, offset), cc.callFunc(function() {
            poker.setDefaultPosition();
            pokerNode.group = "default";
            poker.checkPos();
            poker.check(1);
            _this.canDispatchPoker = true;
          }, _this)));
        });
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.DEV_POKERS);
        Game_1.Game.addStep(nodes, parents, poses, funcs);
      };
      GameScene.prototype.start = function() {};
      GameScene.prototype.update = function(dt) {
        this.devTime += dt;
        this.backTime += dt;
        if (Game_1.Game.isGameStarted()) {
          Game_1.Game.addGameTime(-dt);
          var gameTime = Game_1.Game.getGameTime();
          this.TimeLabel.string = CMath.TimeFormat(gameTime);
          if (gameTime <= 60) {
            this.TimeLabel.font = this.SmallOrg;
            if (!this.TimeAnimation.node.active) {
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_SHAKE);
              this.TimeAnimation.node.active = true;
              this.TimeAnimation.play();
              this.TimeIcon.spriteFrame = this.TimeIconAtlas.getSpriteFrame("icon_time_2");
            }
          }
          if (this.score < this.showScore) {
            this.score += this.scoreStep;
            this.score = Math.min(this.score, this.showScore);
            this.ScoreLabel.string = this.score.toString();
          } else if (this.score > this.showScore) {
            this.score -= this.scoreStep;
            this.score = Math.max(this.score, this.showScore);
            this.ScoreLabel.string = this.score.toString();
          }
        }
      };
      __decorate([ property(cc.Prefab) ], GameScene.prototype, "Poker", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "PokerClip", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "PlaceRoot", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "PokerDevl", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "RemoveNode", void 0);
      __decorate([ property(cc.Button) ], GameScene.prototype, "BackButton", void 0);
      __decorate([ property(cc.Button) ], GameScene.prototype, "PauseButton", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "BackButtonAtlas", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "DrawButtonAtlas", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "TimeLabel", void 0);
      __decorate([ property(cc.Sprite) ], GameScene.prototype, "TimeIcon", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "TimeIconAtlas", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "ScoreLabel", void 0);
      __decorate([ property(cc.Font) ], GameScene.prototype, "SmallOrg", void 0);
      __decorate([ property(cc.Prefab) ], GameScene.prototype, "SubScoreLabel", void 0);
      __decorate([ property(cc.Prefab) ], GameScene.prototype, "AddScoreLabel", void 0);
      __decorate([ property(cc.Animation) ], GameScene.prototype, "TimeAnimation", void 0);
      __decorate([ property(Stop_1.default) ], GameScene.prototype, "Stop", void 0);
      __decorate([ property(Guide_1.default) ], GameScene.prototype, "Guide", void 0);
      __decorate([ property(cc.Animation) ], GameScene.prototype, "Complete", void 0);
      __decorate([ property(cc.Button) ], GameScene.prototype, "SubmitButton", void 0);
      __decorate([ property(cc.Toggle) ], GameScene.prototype, "CheatToggle", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "RecyclePokerLabel", void 0);
      GameScene = __decorate([ ccclass ], GameScene);
      return GameScene;
    }(cc.Component);
    exports.default = GameScene;
    cc._RF.pop();
  }, {
    "./Guide": "Guide",
    "./Poker": "Poker",
    "./Pokers": "Pokers",
    "./Stop": "Stop",
    "./controller/AudioController": "AudioController",
    "./controller/EventManager": "EventManager",
    "./controller/EventName": "EventName",
    "./controller/Game": "Game",
    "./controller/GameFactory": "GameFactory",
    "./utils/LogHandler": "LogHandler",
    "./utils/celerx": "celerx"
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40425qmjHtE2rUaEpFgHzOS", "Game");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HashMap_1 = require("../utils/HashMap");
    var Poker_1 = require("../Poker");
    var Pokers_1 = require("../Pokers");
    var EventManager_1 = require("./EventManager");
    var EventName_1 = require("./EventName");
    var GameMgr = function() {
      function GameMgr() {
        this.placePokerRoot = new HashMap_1.HashMap();
        this.cyclePokerRoot = new HashMap_1.HashMap();
        this.posOffsetCal = new HashMap_1.HashMap();
        this.stepInfoArray = [];
        this.score = 0;
        this.timeBonus = 0;
        this.freeDrawTimes = 3;
        this.flipCounts = 0;
        this.pokerClip = null;
        this.gameStart = false;
        this.gameTime = 300;
        this.removePokerCount = 0;
        this.recycleCount = 0;
        this.pokerFlipRoot = null;
        this.combo = -1;
        this.recyclePoker = 0;
      }
      GameMgr.prototype.GameMgr = function() {};
      Object.defineProperty(GameMgr, "inst", {
        get: function() {
          return this._inst ? this._inst : this._inst = new GameMgr();
        },
        enumerable: true,
        configurable: true
      });
      GameMgr.prototype.addRecyclePoker = function(count) {
        this.recyclePoker += count;
        this.recyclePoker > 6 && console.error(" recycle poker error!!!!");
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_RECYCLE_POKER, this.recyclePoker);
      };
      GameMgr.prototype.addPosOffset = function(key, offset) {
        var pos = this.posOffsetCal.get(key);
        if (pos) {
          var off = Math.max(0, pos + offset);
          this.posOffsetCal.add(key, pos + offset);
        } else this.posOffsetCal.add(key, offset);
        for (var i = 0; i < 8; i++) console.log(" --------addPosOffset key:", i, ":", this.getPosOffset(i));
      };
      GameMgr.prototype.getPosOffset = function(key) {
        var pos = this.posOffsetCal.get(key);
        return null == pos ? 0 : pos;
      };
      GameMgr.prototype.getCombo = function() {
        return this.combo;
      };
      GameMgr.prototype.resetCombo = function() {
        this.combo = -1;
      };
      GameMgr.prototype.addCombo = function(combo) {
        this.combo += combo;
        this.combo = Math.max(0, this.combo % 13);
        console.log(" combo:", this.combo);
      };
      GameMgr.prototype.getGameTime = function() {
        return this.gameTime;
      };
      GameMgr.prototype.addRecycleCount = function(count) {
        this.recycleCount += count;
        console.log(" ---------------------recycle count :", this.recycleCount);
        if (this.recycleCount > 78 || this.recycleCount < 0) {
          console.error(" recycle count error! ", this.recycleCount);
          this.recycleCount = CMath.Clamp(this.recycleCount, 78, 0);
        }
      };
      GameMgr.prototype.addGameTime = function(time) {
        if (window["noTime"] || exports.Game.isComplete()) return;
        this.gameTime += time;
        this.gameTime = Math.max(this.gameTime, 0);
        if (this.gameTime <= 0) {
          this.gameStart = false;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.OPEN_RESULT);
        }
      };
      GameMgr.prototype.calTimeBonus = function() {
        if (this.gameTime >= 300 || this.gameTime <= 0 || this.flipCounts <= 0) return;
        this.timeBonus = (this.flipCounts / 45 * 2.4 + .3) * this.gameTime;
        this.timeBonus = Math.floor(this.timeBonus);
        console.error("this.flipCounts: ", this.flipCounts, ", this.gameTime:", this.gameTime, ",this.timbonus:", this.timeBonus);
        this.gameTime = 0;
        exports.Game.addScore(this.timeBonus);
      };
      GameMgr.prototype.getTimeBonus = function() {
        return this.timeBonus;
      };
      GameMgr.prototype.isTimeOver = function() {
        return this.gameTime <= 0;
      };
      GameMgr.prototype.start = function() {
        this.gameStart = true;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_START);
      };
      GameMgr.prototype.isComplete = function() {
        return this.flipCounts >= 45;
      };
      GameMgr.prototype.checkIsRecycleComplete = function() {
        var isComplete = 78 == this.recycleCount;
        if (isComplete) {
          console.log(" isComplete isComplete ");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.AUTO_COMPLETE_DONE);
        }
        return isComplete;
      };
      GameMgr.prototype.restart = function() {
        this.gameTime = 300;
        this.score = 0;
        this.flipCounts = 0;
        this.stepInfoArray = [];
        this.timeBonus = 0;
        this.cyclePokerRoot.clear();
        this.placePokerRoot.clear();
        this.gameStart = false;
        this.removePokerCount = 0;
      };
      GameMgr.prototype.addRemovePokerCount = function(count) {
        var _this = this;
        this.removePokerCount = 78;
        exports.Game.getPlacePokerRoot().forEach(function(k, v) {
          v.getComponent(Poker_1.default) && (_this.removePokerCount = 0);
        });
        if (78 == this.removePokerCount && this.removeNode.childrenCount <= 0) {
          this.calTimeBonus();
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.OPEN_RESULT);
        }
      };
      GameMgr.prototype.setPause = function(pause) {
        this.gameStart = !pause;
      };
      GameMgr.prototype.isGameStarted = function() {
        return this.gameStart;
      };
      GameMgr.prototype.addScore = function(score, pos) {
        void 0 === pos && (pos = cc.v2(-200, 700));
        if (0 == score) return;
        score = Math.floor(score);
        this.score += score;
        this.score = Math.max(this.score, 0);
        console.log("------------------- score:", this.score, score);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_SCORE, score, pos);
      };
      GameMgr.prototype.getScore = function() {
        return this.score;
      };
      GameMgr.prototype.addFreeDrawTimes = function(times) {
        this.freeDrawTimes += times;
        this.freeDrawTimes = Math.max(this.freeDrawTimes, 0);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_DRAW_ICON);
      };
      GameMgr.prototype.getFreeDrawTimes = function() {
        return this.freeDrawTimes;
      };
      GameMgr.prototype.addFlipCounts = function(count) {
        if (!this.isGameStarted()) return;
        this.flipCounts += count;
        this.flipCounts = Math.max(this.flipCounts, 0);
        console.error("-----------------------------------flipCounts:", this.flipCounts);
        if (this.isComplete()) {
          console.error("-------------emit Complete!!!----------------------flipCounts:", this.flipCounts);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.COMPLETE);
        }
      };
      GameMgr.prototype.getFlipCounts = function() {
        return this.flipCounts;
      };
      GameMgr.prototype.addStep = function(node, lastParent, lastPos, func, scores, scorePos) {
        false;
        this.stepInfoArray.push({
          node: node,
          lastParent: lastParent,
          lastPos: lastPos,
          func: func,
          scores: scores,
          scoresPos: scorePos
        });
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_BACK_BTN_ICON);
      };
      GameMgr.prototype.getPlacePokerRoot = function() {
        return this.placePokerRoot;
      };
      GameMgr.prototype.getCycledPokerRoot = function() {
        return this.cyclePokerRoot;
      };
      GameMgr.prototype.addPlacePokerRoot = function(key, node) {
        if (this.isComplete()) return;
        var poker = node.getComponent(Poker_1.default);
        if (key < 0 || key > 7 || null === key) {
          console.error(" add to poker root error, key invaild:", key);
          poker && console.error(" poker val:", poker.getValue(), ", poker key:", poker.getKey());
          return;
        }
        poker && console.error(" add to place root:", key, " , val:", poker.getValue(), ", type:", Poker_1.PokerType[poker.getPokerType()]);
        this.placePokerRoot.add(key, node);
        this.placePokerRoot.length > 8 && console.error(" place Poker Root over size!!!!!:", this.placePokerRoot.length);
      };
      GameMgr.prototype.addCycledPokerRoot = function(key, node) {
        if (key < 0 || key > 3 || null === key) {
          console.error(" add to poker cycle error, key invaild:", key);
          var poker = node.getComponent(Poker_1.default);
          poker && console.error(" poker val:", poker.getValue(), ", poker key:", poker.getKey(), ", type:", Poker_1.PokerType[poker.getPokerType()]);
          return;
        }
        this.cyclePokerRoot.add(key, node);
        this.cyclePokerRoot.length > 4 && console.error(" cycled Poker root over size!!!!!:", this.cyclePokerRoot.length);
      };
      GameMgr.prototype.clearStep = function() {
        this.stepInfoArray.length = 0;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_BACK_BTN_ICON);
      };
      GameMgr.prototype.backStep = function() {
        if (this.stepInfoArray.length <= 0) {
          console.warn(" no cache step!");
          return false;
        }
        var steps = this.stepInfoArray[this.stepInfoArray.length - 1];
        var isAction = false;
        for (var _i = 0, _a = steps.node; _i < _a.length; _i++) {
          var node = _a[_i];
          if (node.getNumberOfRunningActions() > 0) {
            isAction = true;
            break;
          }
        }
        if (isAction) {
          console.error(" click back step ! but has running action! shengqi!");
          return;
        }
        exports.Game.resetCombo();
        var step = this.stepInfoArray.pop();
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_BACK_BTN_ICON);
        var count = 0;
        var _loop_1 = function() {
          count++;
          var node = step.node.pop();
          var parent = step.lastParent.pop();
          var pos = step.lastPos.pop();
          var func = step.func ? step.func.pop() : null;
          var score = step.scores && step.scores.length > 0 ? step.scores.pop() : 0;
          var scorePos = step.scoresPos && step.scoresPos.length > 0 ? step.scoresPos.pop() : null;
          scorePos ? exports.Game.addScore(score, scorePos) : exports.Game.addScore(score);
          if ("PokerClip" == parent.name || "PokerFlipRoot" == parent.name) {
            var selfPos = CMath.ConvertToNodeSpaceAR(node, parent);
            node.setPosition(selfPos);
          } else node.setPosition(pos);
          if (func && func.callback && func.target) {
            console.log("call func !");
            func.callback.apply(func.target, func.args);
          }
          var poker = node.getComponent(Poker_1.default);
          poker.setPosState(Poker_1.POS_STATE.NORMAL, false);
          node.setParent(parent);
          node.group = "top";
          if (poker) {
            var returnPos = void 0;
            if ("PokerClip" == parent.name) returnPos = poker.getLastPosition(); else {
              returnPos = "PokerFlipRoot" == parent.name ? poker.getFlipPos() : poker.getDefaultPosition();
              if (parent.getComponent(Poker_1.default)) if (parent.getComponent(Poker_1.default).isCycled()) {
                returnPos.x = 0;
                returnPos.y = 0;
              } else func && func.callback && func.callback == parent.getComponent(Poker_1.default).flipCard ? returnPos.y = Pokers_1.OFFSET_Y / 3 : returnPos.y = Pokers_1.OFFSET_Y; else if ("PokerFlipRoot" != parent.name) {
                returnPos.x = 0;
                returnPos.y = 0;
              }
            }
            var action = cc.sequence(cc.delayTime(count / 500), cc.callFunc(function() {
              poker.node.stopActionByTag(Pokers_1.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE);
              poker.node.stopActionByTag(Pokers_1.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD);
              poker.node.stopActionByTag(Pokers_1.ACTION_TAG.SHAKE);
            }, this_1), cc.moveTo(.1, returnPos.x, returnPos.y), cc.callFunc(function() {
              node.group = "default";
              poker.setDefaultPosition();
              parent.getComponent(Poker_1.default) && poker.checkPos();
            }, this_1));
            action.setTag(Pokers_1.ACTION_TAG.BACK_STEP);
            poker.node.runAction(action);
          }
        };
        var this_1 = this;
        while (step.node.length > 0) _loop_1();
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.DEV_POKERS);
        return count > 0;
      };
      GameMgr.prototype.canBackStep = function() {
        return this.stepInfoArray.length > 0;
      };
      return GameMgr;
    }();
    exports.Game = GameMgr.inst;
    true, window["Game"] = exports.Game;
    cc._RF.pop();
  }, {
    "../Poker": "Poker",
    "../Pokers": "Pokers",
    "../utils/HashMap": "HashMap",
    "./EventManager": "EventManager",
    "./EventName": "EventName"
  } ],
  Guide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b35055BqMpN/5j/PIM39A+p", "Guide");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Guide = function(_super) {
      __extends(Guide, _super);
      function Guide() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ButtonAtlas = null;
        _this.Next = null;
        _this.Forward = null;
        _this.GuideView = null;
        _this.callback = null;
        return _this;
      }
      Guide.prototype.onLoad = function() {
        this.Next.node.on(cc.Node.EventType.TOUCH_END, this.nextPage, this);
        this.Forward.node.on(cc.Node.EventType.TOUCH_END, this.forwardPage, this);
        this.GuideView.node.on("scroll-ended", this.updateButton, this);
      };
      Guide.prototype.start = function() {};
      Guide.prototype.hide = function() {
        this.node.active = false;
        this.callback && this.callback();
        cc.Node.maxTouchNum = 1;
        cc.Node.touchNum = 0;
      };
      Guide.prototype.show = function(closeCallback) {
        console.error(" show guide");
        this.node.active = true;
        this.callback = closeCallback;
        this.GuideView.scrollToPage(0, 0);
        this.Forward.node.active = false;
        this.Next.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("btn_new");
      };
      Guide.prototype.nextPage = function() {
        if (this.GuideView.getCurrentPageIndex() >= this.GuideView.content.childrenCount - 1) this.hide(); else {
          var nextPageIndex = (this.GuideView.getCurrentPageIndex() + 1) % this.GuideView.content.childrenCount;
          this.GuideView.setCurrentPageIndex(nextPageIndex);
          this.updateButton();
        }
      };
      Guide.prototype.forwardPage = function() {
        if (this.GuideView.getCurrentPageIndex() <= 0) ; else {
          var forwardPageIndex = (this.GuideView.getCurrentPageIndex() - 1) % this.GuideView.content.childrenCount;
          this.GuideView.setCurrentPageIndex(forwardPageIndex);
          this.updateButton();
        }
      };
      Guide.prototype.updateButton = function() {
        this.GuideView.getCurrentPageIndex() >= this.GuideView.content.childrenCount - 1 ? this.Next.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("new_close") : this.Next.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("btn_new");
        this.Forward.node.active = 0 != this.GuideView.getCurrentPageIndex();
      };
      __decorate([ property(cc.SpriteAtlas) ], Guide.prototype, "ButtonAtlas", void 0);
      __decorate([ property(cc.Button) ], Guide.prototype, "Next", void 0);
      __decorate([ property(cc.Button) ], Guide.prototype, "Forward", void 0);
      __decorate([ property(cc.PageView) ], Guide.prototype, "GuideView", void 0);
      Guide = __decorate([ ccclass ], Guide);
      return Guide;
    }(cc.Component);
    exports.default = Guide;
    cc._RF.pop();
  }, {} ],
  HashMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07791aKdvNDo7wFtZ+VAQS2", "HashMap");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HashMap = function() {
      function HashMap() {
        this._list = new Array();
        this.clear();
      }
      HashMap.prototype.getIndexByKey = function(key) {
        var count = this._list.length;
        for (var index = 0; index < count; index++) {
          var element = this._list[index];
          if (element.key == key) return index;
        }
        return -1;
      };
      HashMap.prototype.keyOf = function(value) {
        var count = this._list.length;
        for (var index = 0; index < count; index++) {
          var element = this._list[index];
          if (element.value == value) return element.key;
        }
        return null;
      };
      Object.defineProperty(HashMap.prototype, "keys", {
        get: function() {
          var keys = new Array();
          for (var _i = 0, _a = this._list; _i < _a.length; _i++) {
            var element = _a[_i];
            element && keys.push(element.key);
          }
          return keys;
        },
        enumerable: true,
        configurable: true
      });
      HashMap.prototype.add = function(key, value) {
        var data = {
          key: key,
          value: value
        };
        var index = this.getIndexByKey(key);
        -1 != index ? this._list[index] = data : this._list.push(data);
      };
      Object.defineProperty(HashMap.prototype, "values", {
        get: function() {
          return this._list;
        },
        enumerable: true,
        configurable: true
      });
      HashMap.prototype.remove = function(key) {
        var index = this.getIndexByKey(key);
        if (-1 != index) {
          var data = this._list[index];
          this._list.splice(index, 1);
          return data;
        }
        return null;
      };
      HashMap.prototype.has = function(key) {
        var index = this.getIndexByKey(key);
        return -1 != index;
      };
      HashMap.prototype.get = function(key) {
        var index = this.getIndexByKey(key);
        if (-1 != index) {
          var data = this._list[index];
          return data.value;
        }
        return null;
      };
      Object.defineProperty(HashMap.prototype, "length", {
        get: function() {
          return this._list.length;
        },
        enumerable: true,
        configurable: true
      });
      HashMap.prototype.sort = function(compare) {
        this._list.sort(compare);
      };
      HashMap.prototype.forEachKeyValue = function(f) {
        var count = this._list.length;
        for (var index = 0; index < count; index++) {
          var element = this._list[index];
          f(element);
        }
      };
      HashMap.prototype.forEach = function(f) {
        var count = this._list.length;
        for (var index = 0; index < count; index++) {
          var element = this._list[index];
          f(element.key, element.value);
        }
      };
      HashMap.prototype.clear = function() {
        this._list = [];
      };
      return HashMap;
    }();
    exports.HashMap = HashMap;
    cc._RF.pop();
  }, {} ],
  LogHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a682UCuFVOMpQvNRzyu0e4", "LogHandler");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogHandler = function() {
      function LogHandler() {
        this.logFunc = console.log;
        this.logMsg = null;
        this.frameTimes = 0;
        this.now = 0;
        this.Frame = 20;
        this.totalFrames = 0;
        this.startTime = 0;
        if (window.addEventListener) for (var _i = 0, _a = LogHandler.LISTENNING_EVENTS; _i < _a.length; _i++) {
          var event = _a[_i];
          var funcName = "trigger" + event.charAt(0).toLocaleUpperCase() + event.substring(1);
          this[funcName] && "function" == typeof this[funcName] && window.addEventListener(event, this[funcName].bind(this));
        }
      }
      Object.defineProperty(LogHandler, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new LogHandler();
        },
        enumerable: true,
        configurable: true
      });
      LogHandler.prototype.dumpFrameInfo = function() {
        var timeCost = (Date.now() - this.startTime) / 1e3;
        var perFrame = timeCost / this.totalFrames;
        this.addLog(" total frames:", this.totalFrames, " ,total cost time:", timeCost + "s", " , per frame cost time ave:" + perFrame + "s");
        this.sendLog();
      };
      LogHandler.prototype.initLog = function(callback) {
        var _this = this;
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
          _this.frameTimes = 0;
          _this.now = Date.now();
          _this.startTime = Date.now();
        }, this);
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, function() {
          _this.frameTimes++;
          _this.totalFrames++;
          if (_this.frameTimes >= _this.Frame) {
            _this.frameTimes = 0;
            _this.now = Date.now();
          }
        }, this);
        true;
      };
      LogHandler.prototype.formatLogArguments = function() {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) _[_i] = arguments[_i];
        var logString = "";
        for (var i = 0; i < arguments.length; i++) {
          var type = typeof arguments[i];
          "string" == type || "number" == type ? logString += " " + arguments[i] : "object" == type ? logString += " " + JSON.stringify(arguments[i]) : "boolean" == type && arguments[i].toString && (logString += arguments[i].toString());
        }
        return logString;
      };
      LogHandler.prototype.addLog = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        null == this.logMsg && (this.logMsg = {});
        var msg = this.formatLogArguments.apply(this, args);
        var fullTime = this.getFullTime(new Date());
        this.logMsg[fullTime] = LogHandler.VERSION + msg;
      };
      LogHandler.prototype.log = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this.addLog.apply(this, args);
        this.sendLog();
      };
      LogHandler.prototype.getFullTime = function(date) {
        var fullTime = "";
        var year = date.getFullYear();
        fullTime += year;
        var month = date.getMonth();
        fullTime += "-" + (month >= 10 ? month : "0" + month);
        var day = date.getDate();
        fullTime += "-" + (day >= 10 ? day : "0" + day);
        var hour = date.getHours();
        fullTime += "  " + (hour >= 10 ? hour : "0" + hour);
        var minute = date.getMinutes();
        fullTime += ":" + (minute >= 10 ? minute : "0" + minute);
        var second = date.getSeconds();
        fullTime += ":" + (second >= 10 ? second : "0" + second);
        return fullTime;
      };
      LogHandler.prototype.sendLog = function() {
        if (!this.logFunc) return;
        if (null == this.logMsg) return;
        this.logFunc(JSON.stringify(this.logMsg));
        this.logMsg = null;
      };
      LogHandler.prototype.triggerClose = function(ev) {
        this.addLog("triggerClose");
        this.sendLog();
      };
      LogHandler.prototype.triggerLoad = function(ev) {
        this.addLog("triggerLoad");
        this.sendLog();
      };
      LogHandler.prototype.triggerUnload = function(ev) {
        this.addLog("triggerUnload");
        this.sendLog();
      };
      LogHandler.prototype.triggerOnunload = function(ev) {
        this.addLog("triggerUnload");
        this.sendLog();
      };
      LogHandler.prototype.triggerError = function(err) {
        this.addLog("triggerError");
        this.addLog(err.message);
        this.sendLog();
      };
      LogHandler.prototype.triggerFocus = function(foc) {
        this.addLog("triggerFocus");
        this.sendLog();
      };
      LogHandler.prototype.triggerBlur = function(foc) {
        this.addLog("triggerBlur");
        this.sendLog();
      };
      LogHandler.prototype.triggerAbort = function(ui) {
        this.addLog("triggerAbort");
        this.sendLog();
      };
      LogHandler.prototype.triggerSuspend = function(sus) {
        this.addLog("triggerSuspend");
        this.sendLog();
      };
      LogHandler.prototype.beforeunload = function(bf) {
        this.addLog("beforeunload");
        this.sendLog();
      };
      LogHandler.VERSION = "SpiderRush version 71 : ";
      LogHandler.LISTENNING_EVENTS = [ "error" ];
      return LogHandler;
    }();
    exports.LogHandler = LogHandler;
    true, window["LogHandler"] = LogHandler;
    cc._RF.pop();
  }, {} ],
  PokerRoot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11cba6M6B9Awbm3ikseAzvv", "PokerRoot");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./controller/Game");
    var Poker_1 = require("./Poker");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PokerRoot = function(_super) {
      __extends(PokerRoot, _super);
      function PokerRoot() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PokerRoot.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.CHILD_ADDED, this.onAddChild, this);
        this.node.on(cc.Node.EventType.CHILD_REMOVED, this.onChildRemove, this);
      };
      PokerRoot.prototype.start = function() {};
      PokerRoot.prototype.onChildRemove = function(child) {
        if (Game_1.Game.isGameStarted()) {
          if (this.node.childrenCount > 0 && this.next && !this.next.isCycled()) {
            console.error(" root already has a poker");
            return;
          }
          this.next = null;
          Game_1.Game.addPlacePokerRoot(parseInt(this.node.name), this.node);
        }
      };
      PokerRoot.prototype.onAddChild = function(child) {
        var poker = child.getComponent(Poker_1.default);
        if (!poker) {
          console.error(" \u6ca1\u6709 Poker\u7c7b");
          return;
        }
        this.setNewRoot(poker);
        this.next = poker;
        poker.setRecycle(false);
      };
      PokerRoot.prototype.setNewRoot = function(poker) {
        if (poker.getNext()) this.setNewRoot(poker.getNext()); else {
          Game_1.Game.addPlacePokerRoot(parseInt(this.node.name), poker.node);
          poker.setNormal();
        }
      };
      PokerRoot.prototype.update = function(dt) {};
      PokerRoot = __decorate([ ccclass ], PokerRoot);
      return PokerRoot;
    }(cc.Component);
    exports.default = PokerRoot;
    cc._RF.pop();
  }, {
    "./Poker": "Poker",
    "./controller/Game": "Game"
  } ],
  Pokers: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d504dBfU4JI0K2nPtJ3w844", "Pokers");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SpadeStartIndex = 0;
    exports.HeartStartIndex = 1;
    exports.ClubStartIndex = 2;
    exports.DiamondStartIndex = 3;
    exports.PokerTypes = {
      spade_: 3,
      club_: 10,
      diamond_: 5,
      heart_: 12
    };
    exports.Pokers = [ "spade_,1", "spade_,1", "spade_,1", "spade_,1", "spade_,1", "spade_,1", "spade_,2", "spade_,2", "spade_,2", "spade_,2", "spade_,2", "spade_,2", "spade_,3", "spade_,3", "spade_,3", "spade_,3", "spade_,3", "spade_,3", "spade_,4", "spade_,4", "spade_,4", "spade_,4", "spade_,4", "spade_,4", "spade_,5", "spade_,5", "spade_,5", "spade_,5", "spade_,5", "spade_,5", "spade_,6", "spade_,6", "spade_,6", "spade_,6", "spade_,6", "spade_,6", "spade_,7", "spade_,7", "spade_,7", "spade_,7", "spade_,7", "spade_,7", "spade_,8", "spade_,8", "spade_,8", "spade_,8", "spade_,8", "spade_,8", "spade_,9", "spade_,9", "spade_,9", "spade_,9", "spade_,9", "spade_,9", "spade_,10", "spade_,10", "spade_,10", "spade_,10", "spade_,10", "spade_,10", "spade_,11", "spade_,11", "spade_,11", "spade_,11", "spade_,11", "spade_,11", "spade_,12", "spade_,12", "spade_,12", "spade_,12", "spade_,12", "spade_,12", "spade_,13", "spade_,13", "spade_,13", "spade_,13", "spade_,13", "spade_,13" ];
    exports.PokerIndex = [ 6, 5, 4, 3, 2, 1, 0, 12, 11, 10, 9, 8, 7, 17, 16, 15, 14, 13, 21, 20, 19, 18, 24, 23, 22, 26, 25, 27, 28, 29, 50, 49, 46, 43, 40, 37, 34, 31, 30, 33, 36, 39, 42, 45, 48, 51 ];
    var ACTION_TAG;
    (function(ACTION_TAG) {
      ACTION_TAG[ACTION_TAG["FLIP_CARD_REPOS_ON_ADD"] = 0] = "FLIP_CARD_REPOS_ON_ADD";
      ACTION_TAG[ACTION_TAG["FLIP_CARD_REPOS_ON_REMOVE"] = 1] = "FLIP_CARD_REPOS_ON_REMOVE";
      ACTION_TAG[ACTION_TAG["BACK_STEP"] = 2] = "BACK_STEP";
      ACTION_TAG[ACTION_TAG["DEV_POKER"] = 3] = "DEV_POKER";
      ACTION_TAG[ACTION_TAG["RE_DEV_POKER"] = 4] = "RE_DEV_POKER";
      ACTION_TAG[ACTION_TAG["SHAKE"] = 5] = "SHAKE";
      ACTION_TAG[ACTION_TAG["RECYCLE"] = 6] = "RECYCLE";
      ACTION_TAG[ACTION_TAG["POS_SCALE"] = 7] = "POS_SCALE";
      ACTION_TAG[ACTION_TAG["POS_NORMAL"] = 8] = "POS_NORMAL";
    })(ACTION_TAG = exports.ACTION_TAG || (exports.ACTION_TAG = {}));
    exports.COLOR_GRAY = cc.color(238, 218, 166);
    exports.OFFSET_Y = -70;
    exports.OFFSET_X = 0;
    exports.OFFSET_SCALE = 15;
    exports.FLIP_SCORE = 50;
    exports.BACK_STEP_SCORE = 20;
    cc._RF.pop();
  }, {} ],
  Poker: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19c3a5acP5K/YiwGw559yBs", "Poker");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./controller/Game");
    var GameFactory_1 = require("./controller/GameFactory");
    var Pokers_1 = require("./Pokers");
    var EventManager_1 = require("./controller/EventManager");
    var EventName_1 = require("./controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CardState;
    (function(CardState) {
      CardState[CardState["Front"] = 0] = "Front";
      CardState[CardState["Back"] = 1] = "Back";
    })(CardState = exports.CardState || (exports.CardState = {}));
    var PokerColor;
    (function(PokerColor) {
      PokerColor[PokerColor["Red"] = 0] = "Red";
      PokerColor[PokerColor["Black"] = 1] = "Black";
    })(PokerColor = exports.PokerColor || (exports.PokerColor = {}));
    var PokerType;
    (function(PokerType) {
      PokerType[PokerType["Club"] = 0] = "Club";
      PokerType[PokerType["Spade"] = 1] = "Spade";
      PokerType[PokerType["Heart"] = 2] = "Heart";
      PokerType[PokerType["Diamond"] = 3] = "Diamond";
    })(PokerType = exports.PokerType || (exports.PokerType = {}));
    var POS_STATE;
    (function(POS_STATE) {
      POS_STATE[POS_STATE["NORMAL"] = 0] = "NORMAL";
      POS_STATE[POS_STATE["SCALE"] = 1] = "SCALE";
    })(POS_STATE = exports.POS_STATE || (exports.POS_STATE = {}));
    var Poker = function(_super) {
      __extends(Poker, _super);
      function Poker() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.frontCard = null;
        _this.backCard = null;
        _this.pokerAtlas = null;
        _this.RecycleAnimation = null;
        _this.flips = [];
        _this.value = 0;
        _this.posState = POS_STATE.NORMAL;
        _this.hasMove = false;
        _this.canMove = false;
        _this.key = -1;
        _this._next = null;
        _this._forward = null;
        _this.defualtChildCount = 0;
        _this.isCheck = false;
        _this.cycled = false;
        _this.placeLimit = cc.size(0, 0);
        _this.isReadyAutoComplete = false;
        _this.recycleActionInfo = {
          startTime: 0,
          duration: 0
        };
        return _this;
      }
      Poker_1 = Poker;
      Object.defineProperty(Poker.prototype, "next", {
        get: function() {
          for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.getComponent(Poker_1) && false == child.getComponent(Poker_1).isCycled()) return child.getComponent(Poker_1);
          }
          return null;
        },
        set: function(val) {},
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Poker.prototype, "forward", {
        get: function() {
          if (this.node.getParent()) return this.node.getParent().getComponent(Poker_1);
          return null;
        },
        set: function(val) {},
        enumerable: true,
        configurable: true
      });
      Poker.prototype.reuse = function() {
        this.node["_onSetParent"] = this.onSetParent.bind(this);
        this.posState = POS_STATE.NORMAL;
        this.hasMove = false;
        this.isReadyAutoComplete = false;
        var pokerInfo = arguments[0][0][0];
        console.log(" ----------------------- poker reuse ---------------------------");
        console.error(arguments[0][0][0]);
        this.value = parseInt(pokerInfo.split(",")[1]);
        var type = pokerInfo.split(",")[0];
        this.pokerColer = "spade_" == type || "club_" == type ? PokerColor.Black : PokerColor.Red;
        switch (type) {
         case "spade_":
          this.pokerType = PokerType.Spade;
          break;

         case "club_":
          this.pokerType = PokerType.Club;
          break;

         case "heart_":
          this.pokerType = PokerType.Heart;
          break;

         case "diamond_":
          this.pokerType = PokerType.Diamond;
        }
        this.frontCard.spriteFrame = this.pokerAtlas.getSpriteFrame(pokerInfo.split(",")[0] + this.value);
        this.frontCard.spriteFrame || console.error(pokerInfo.split(",")[0] + this.value);
        this.setCardState(CardState.Back);
        this.initEvent();
      };
      Poker.prototype.getPokerColor = function() {
        return this.pokerColer;
      };
      Poker.prototype.getPokerType = function() {
        return this.pokerType;
      };
      Poker.prototype.unuse = function() {
        this.node.targetOff(this);
        EventManager_1.gEventMgr.targetOff(this);
        this.cycled = false;
      };
      Poker.prototype.getNext = function() {
        return this.next;
      };
      Poker.prototype.getForward = function() {
        return this.forward;
      };
      Poker.prototype.setNext = function(next) {
        this.next = next;
        this.node.getChildByName("Label").getComponent(cc.Label).string = "next:" + (this.next ? this.next.getValue() : "null") + ", key:" + this.key;
      };
      Poker.prototype.setForward = function(forward) {
        this.forward = forward;
      };
      Poker.prototype.setRecycle = function(cycled) {
        if (this.cycled == cycled) return;
        this.cycled = cycled;
        this.cycled ? Game_1.Game.addRecycleCount(1) : Game_1.Game.addRecycleCount(-1);
      };
      Poker.prototype.getValue = function() {
        return this.value;
      };
      Poker.prototype.getCardState = function() {
        return this.carState;
      };
      Poker.prototype.onLoad = function() {
        this.RecycleAnimation.node.opacity = 0;
        this.placeLimit.width = this.node.width / 2;
        this.placeLimit.height = .75 * this.node.height;
        this.node.getChildByName("Label").active = false;
        this.defualtChildCount = this.node.childrenCount;
        this.setCardState(CardState.Back);
      };
      Poker.prototype.initEvent = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.CHILD_ADDED, this.onAddChild, this);
        this.node.on(cc.Node.EventType.CHILD_REMOVED, this.onChildRemove, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onMoveEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onMoveEnd, this);
        this.node.on("check-done", this.onCheckDone, this);
        this.node.on("pos-scale", function(key) {
          console.log("pos-scale:", key, _this.key, _this.isCycled(), POS_STATE[_this.posState], CardState[_this.carState], _this.value);
          if (key != _this.key || _this.isCycled() || _this.posState == POS_STATE.SCALE || _this.carState == CardState.Back) return;
          _this.setPosState(POS_STATE.SCALE);
        }, this);
        this.node.on("pos-normal", function(key) {
          console.log("pos-normal:", key, _this.key, _this.isCycled(), POS_STATE[_this.posState], CardState[_this.carState], _this.value);
          if (key != _this.key || _this.isCycled() || _this.posState == POS_STATE.NORMAL || _this.carState == CardState.Back) return;
          _this.setPosState(POS_STATE.NORMAL);
        }, this);
        EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.COMPLETE, this.autoComplete, this);
        EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.AUTO_COMPLETE_DONE, function() {}, this);
      };
      Poker.prototype.autoCompleteDone = function() {
        var _this = this;
        var time = .05 + this.value / 200;
        var moveTime = (13 - this.value) / 500;
        if (this.hasMove) {
          console.log(" has move key :", this.key, ", value:", this.value);
          Game_1.Game.addPosOffset(this.key, Pokers_1.OFFSET_SCALE);
        }
        this.scheduleOnce(function() {
          var selfPos = CMath.ConvertToNodeSpaceAR(_this.node, Game_1.Game.removeNode);
          _this.node.setParent(Game_1.Game.removeNode);
          _this.node.setPosition(selfPos);
          _this.node.zIndex = 13 - _this.value;
        }, time * this.value);
        this.scheduleOnce(function() {
          var dir = _this.value % 2 == 1 ? -1 : 1;
          var offsetX = CMath.getRandom(0, 2) * dir;
          _this.canMove = false;
          _this.node.runAction(cc.sequence(cc.delayTime(_this.value / 8), cc.callFunc(function() {
            var score = 10 * (13 - _this.value);
            var scorePos = CMath.ConvertToNodeSpaceAR(_this.node, Game_1.Game.removeNode);
            Game_1.Game.addScore(score, scorePos);
            _this.frontCard.node.opacity = 255;
            _this.node.group = "top";
            _this.node.zIndex = _this.value;
            Game_1.Game.addCombo(1);
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_POKER_FLY);
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_RECYCLE);
          }, _this), cc.sequence(cc.repeat(cc.spawn(cc.moveBy(.01, 1.5 * dir + offsetX, 25).easing(cc.easeQuinticActionOut()), cc.rotateBy(.01, 20 * dir).easing(cc.easeQuadraticActionIn())), 30), cc.repeat(cc.spawn(cc.moveBy(.01, 2 * dir + offsetX, -25).easing(cc.easeQuinticActionIn()), cc.rotateBy(.01, 20 * dir).easing(cc.easeQuadraticActionIn())), 180), cc.callFunc(function() {
            console.log("done:", _this.value);
            13 == _this.value && Game_1.Game.addRecyclePoker(1);
            if (_this.node.childrenCount > _this.defualtChildCount) {
              console.error(" \u53ef\u80fd\u9020\u6210\u4e22\u724c");
              var child = _this.node.children[_this.node.childrenCount - 1];
              var childpoker = child.getComponent(Poker_1);
              if (childpoker && !childpoker.isCycled()) {
                true, childpoker.backCard.node.color = cc.Color.RED;
                child.stopAllActions();
                child.rotation = 0;
                child.setParent(Game_1.Game.pokerClip);
                var childw = Game_1.Game.pokerClip.children[Game_1.Game.pokerClip.childrenCount - 1];
                child.setPosition(cc.v2(childw.x - 20, childw.y));
                childpoker.flipCard(0);
              }
            }
            GameFactory_1.gFactory.putPoker(_this.node);
            Game_1.Game.addRemovePokerCount(1 + _this.node.childrenCount - _this.defualtChildCount);
          }, _this))));
        }, moveTime + time);
      };
      Poker.prototype.autoComplete = function() {
        if (!this.next && "PokerFlipRoot" != this.node.getParent().name || this.isCycled()) {
          this.isReadyAutoComplete = true;
          console.error(" isAutoComplete:", this.isReadyAutoComplete);
        } else this.isReadyAutoComplete = false;
      };
      Poker.prototype.onCheckDone = function(key) {
        console.log(" check done: ", key, ":", this.key, this.value);
        if (this.key != key || !this.isCheck) return;
        this.setRecycle(true);
        this.autoCompleteDone();
        13 == this.value && (key <= 7 && key >= 0 && null !== key ? Game_1.Game.addPlacePokerRoot(this.key, this.node.getParent()) : console.error(" onCheckDone, key invaild:", key, ", val:", this.value, " type:", PokerType[this.pokerType]));
      };
      Poker.prototype.setDefaultPosition = function(pos) {
        if (pos) if (this.defaultPos) {
          this.defaultPos.x = pos.x;
          this.defaultPos.y = pos.y;
        } else this.defaultPos = pos.clone(); else this.defaultPos = this.node.position.clone();
      };
      Poker.prototype.setLastPosition = function(pos) {
        this.lastPos = pos || this.node.position.clone();
      };
      Poker.prototype.setFlipPos = function(pos) {
        this.flipPos = pos || this.node.position.clone();
      };
      Poker.prototype.getFlipPos = function() {
        return this.flipPos ? this.flipPos.clone() : this.node.position.clone();
      };
      Poker.prototype.getDefaultPosition = function() {
        return this.defaultPos ? this.defaultPos.clone() : this.node.position.clone();
      };
      Poker.prototype.getLastPosition = function() {
        return this.lastPos ? this.lastPos.clone() : this.node.position.clone();
      };
      Poker.prototype.setKey = function(key) {
        this.key = key;
        key && "NaN" == key.toString() ? this.node.getChildByName("Label").getComponent(cc.Label).string += "value:" + this.value.toString() : this.node.getChildByName("Label").getComponent(cc.Label).string = "next:" + (this.next ? this.next.getValue() : "null") + ", key:" + this.key;
        this.next && this.next.getKey() != this.key && this.next.setKey(key);
      };
      Poker.prototype.getKey = function() {
        return this.key;
      };
      Poker.prototype.onTouchStart = function(e) {
        if (this.carState == CardState.Back) {
          console.error(" on touch start , card is back");
          return;
        }
        e.bubbles = !this.isNormal();
        this.node.stopActionByTag(Pokers_1.ACTION_TAG.SHAKE);
        if (Game_1.Game.isTimeOver() || Game_1.Game.isComplete()) {
          console.error(" on touch start , game is over");
          return;
        }
        if (!Game_1.Game.isGameStarted()) {
          Game_1.Game.start();
          console.error(" start game ");
        }
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_POKER_PLACE);
      };
      Poker.prototype.checkAutoRecycle = function() {
        var _this = this;
        return false;
        var index;
      };
      Poker.prototype.onMove = function(e) {
        if (this.carState == CardState.Back) {
          console.error(" on touch move , card is back");
          return;
        }
        e.bubbles = false;
        if (Game_1.Game.isTimeOver() || Game_1.Game.isComplete()) {
          console.error(" on touch move , game is over ");
          return;
        }
        if (!this.canMove) {
          console.error(" on touch move , card cant move");
          return;
        }
        if (this.isCycled() && this.next) {
          console.error(" on touch move , card is recycled");
          return;
        }
        var action = this.node.getActionByTag(Pokers_1.ACTION_TAG.RECYCLE);
        if (action && !action.isDone()) {
          console.error(" on touch move , card recycled action is running");
          return;
        }
        this.node.group = "top";
        var move = e.getDelta();
        this.node.x += move.x;
        this.node.y += move.y;
      };
      Poker.prototype.setCanMove = function(isCanMove) {
        this.canMove = isCanMove;
      };
      Poker.prototype.onMoveEnd = function(e) {
        var _this = this;
        if (this.carState == CardState.Back) {
          console.error("on move end, card is back");
          return;
        }
        e.bubbles = false;
        if (Game_1.Game.isTimeOver() || Game_1.Game.isComplete()) {
          console.error("on move end ,game is over");
          return;
        }
        var action = this.node.getActionByTag(Pokers_1.ACTION_TAG.RECYCLE);
        if (action && !action.isDone()) {
          console.error(" on move end , running action");
          return;
        }
        if (this.defaultPos && this.canMove) {
          var placeIndex = this.checkCanPlace();
          if (placeIndex >= 0 && null != placeIndex && placeIndex <= 7) this.placeToNewRoot(placeIndex); else {
            var recycleIndex = this.checkCanRecycled();
            if (recycleIndex >= 0) ; else if (!this.checkAutoRecycle()) if (CMath.Distance(this.node.position, this.defaultPos) < 5) {
              this.node.group = "default";
              this.node.setPosition(this.defaultPos);
              this.next || this.shake();
            } else {
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.DEV_POKERS);
              this.node.runAction(cc.sequence(cc.moveTo(.1, this.defaultPos.x, this.defaultPos.y), cc.callFunc(function() {
                _this.node.group = "default";
              }, this)));
            }
          }
        } else console.error(" on move end ,cant move");
      };
      Poker.prototype.checkCanPlace = function() {
        var _this = this;
        var index = -1;
        Game_1.Game.getPlacePokerRoot().forEach(function(key, root) {
          var poker = root.getComponent(Poker_1);
          if (_this.node.name == root.name && poker) return;
          if (poker && poker.getKey() == _this.getKey()) return;
          if (poker && Poker_1.checkBeNext(poker, _this) || !poker) {
            var pos = CMath.ConvertToNodeSpaceAR(root, _this.node.parent);
            Math.abs(pos.x - _this.node.position.x) <= _this.placeLimit.width && Math.abs(pos.y - _this.node.position.y) <= _this.placeLimit.height && (index = key);
          }
        });
        return index;
      };
      Poker.prototype.checkCanRecycled = function() {
        var _this = this;
        return -1;
        var index;
      };
      Poker.prototype.updateRootNode = function(index) {
        if (this.cycled || null == this.key || null == index) return;
        if (this.node.childrenCount <= this.defualtChildCount) {
          this.key >= 0 && this.key <= 7 && null !== this.key ? Game_1.Game.addPlacePokerRoot(index, this.node) : console.error(" updateRootNode, key invaild:", this.key, ", value:", this.value, "type:", PokerType[this.pokerType]);
          this.check(1);
        } else {
          if (!this.next) {
            console.error("no next, value:", this.value, ", key:", this.key);
            return;
          }
          this.next.updateRootNode.call(this.next, index);
        }
      };
      Poker.prototype.checkPos = function() {
        if ("default" != this.node.group) {
          console.error(" checkPos");
          return;
        }
        if (this.isCycled()) return;
        var rootNode = Game_1.Game.getPlacePokerRoot().get(this.key);
        if (!rootNode) return;
        var poker = rootNode.getComponent(Poker_1);
        if (!poker) return;
        var pos = CMath.ConvertToNodeSpaceAR(rootNode, Game_1.Game.removeNode);
        var offset = Game_1.Game.getPosOffset(this.key);
        console.log(" check ----- Pos key:", poker.key, ", value:", poker.value, ", posY:", pos.y - this.node.height, ", offset:", offset);
        if (pos.y - this.node.height + offset <= Game_1.Game.pokerClip.y) {
          console.log("pos-scale-------------");
          poker.emitNodeEventToForward("pos-scale");
        } else poker.emitNodeEventToForward("pos-normal");
      };
      Poker.prototype.setPosState = function(posS, isMove) {
        void 0 === isMove && (isMove = true);
        if (this.posState == posS) return;
        this.posState = posS;
        if (this.posState == POS_STATE.NORMAL) {
          if (this.hasMove) {
            isMove && this.node.runAction(cc.moveBy(.01, 0, -Pokers_1.OFFSET_SCALE));
            var pos = this.getDefaultPosition();
            this.setDefaultPosition(cc.v2(pos.x, pos.y - Pokers_1.OFFSET_SCALE));
            Game_1.Game.addPosOffset(this.key, Pokers_1.OFFSET_SCALE);
            this.hasMove = false;
          }
          this.next && this.next.setPosState.call(this.next, POS_STATE.NORMAL);
        } else if (isMove && this.forward && this.forward.carState != CardState.Back) {
          this.hasMove = true;
          this.node.runAction(cc.moveBy(.01, 0, Pokers_1.OFFSET_SCALE));
          var pos = this.getDefaultPosition();
          this.setDefaultPosition(cc.v2(pos.x, pos.y + Pokers_1.OFFSET_SCALE));
          Game_1.Game.addPosOffset(this.key, -Pokers_1.OFFSET_SCALE);
        }
      };
      Poker.prototype.placeToNewRoot = function(index) {
        var _this = this;
        var root = Game_1.Game.getPlacePokerRoot().get(index);
        var selfPos = CMath.ConvertToNodeSpaceAR(this.node, root);
        var score = 0;
        this.isCycled() && (score = 10 * -(13 - this.value));
        var socre2 = 0;
        var addFlip = "PokerFlipRoot" == this.node.getParent().name;
        addFlip && (socre2 = Pokers_1.FLIP_SCORE);
        Game_1.Game.resetCombo();
        var scorePos = CMath.ConvertToNodeSpaceAR(this.node, Game_1.Game.removeNode);
        Game_1.Game.addScore(score, scorePos);
        Game_1.Game.addScore(socre2, CMath.ConvertToNodeSpaceAR(this.node.getParent(), Game_1.Game.removeNode));
        if (this.forward && this.forward.carState == CardState.Back) Game_1.Game.addStep([ this.node ], [ this.forward.node ], [ this.node.position.clone() ], [ {
          callback: this.forward.flipCard,
          args: [ .1, false, function() {
            Game_1.Game.addFlipCounts(-1);
          } ],
          target: this.forward
        } ], [ -Pokers_1.FLIP_SCORE - score - socre2 ], [ scorePos ]); else {
          var funs = [];
          addFlip && (funs = [ {
            callback: Game_1.Game.addFlipCounts,
            args: [ -1 ],
            target: Game_1.Game
          } ]);
          Game_1.Game.addStep([ this.node ], [ this.node.getParent() ], [ this.node.position.clone() ], funs, [ -score - socre2 ], [ scorePos ]);
        }
        this.setPosState(POS_STATE.NORMAL, false);
        console.log(" set pos normal ------------");
        this.node.setParent(root);
        this.node.setPosition(selfPos);
        var offset = 0;
        root.getComponent(Poker_1) && (offset = Pokers_1.OFFSET_Y);
        this.setDefaultPosition(cc.v2(0, offset));
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.DEV_POKERS);
        this.node.runAction(cc.sequence(cc.moveTo(.1, 0, offset), cc.callFunc(function() {
          addFlip && Game_1.Game.addFlipCounts(1);
          _this.node.group = "default";
          _this.checkPos();
        }, this)));
      };
      Poker.prototype.isCycled = function() {
        return this.cycled;
      };
      Poker.prototype.check = function(valua) {
        if (this.carState == CardState.Back) {
          console.error(" cardState is back while check");
          return;
        }
        console.log(" check :", valua, this.value);
        if (this.value == valua) {
          this.isCheck = true;
          if (13 == valua) {
            this.emitNodeEventToNext("check-done");
            Game_1.Game.clearStep();
          } else this.forward ? this.forward.check.call(this.forward, valua + 1) : console.error(" has no forward card:", this.value, valua);
        } else this.isCheck = false;
      };
      Poker.prototype.shake = function() {
        if (this.isCycled()) return;
        this.node.group = "default";
        var pos = this.getDefaultPosition();
        var shake = cc.sequence(cc.repeat(cc.sequence(cc.moveTo(.02, pos.x - 10, pos.y), cc.moveTo(.04, pos.x + 20, pos.y), cc.moveTo(.02, pos.x - 10, pos.y)), 5), cc.moveTo(.01, pos.x, pos.y));
        shake.setTag(Pokers_1.ACTION_TAG.SHAKE);
        this.node.stopActionByTag(Pokers_1.ACTION_TAG.SHAKE);
        this.node.runAction(shake);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_SHAKE);
      };
      Poker.prototype.emitNodeEventToNext = function(event) {
        this.node.emit(event, this.key);
        this.next && this.next.emitNodeEventToNext.call(this.next, event);
      };
      Poker.prototype.emitNodeEventToForward = function(event) {
        this.node.emit(event, this.key);
        this.forward && this.forward.emitNodeEventToForward.call(this.forward, event);
      };
      Poker.prototype.onAddChild = function(child) {
        var poker = child.getComponent(Poker_1);
        if (!poker) {
          console.error(" \u6ca1\u6709 Poker\u7c7b");
          return;
        }
        this.setNext(poker);
        if (this.cycled) return;
        poker.setRecycle(false);
        Poker_1.checkBeNext(this, this.next) ? this.setNormal() : this.setAllGray();
        poker.setNormal();
        this.updateRootNode(this.key);
      };
      Poker.checkBeNext = function(poker, next) {
        if (!next || !poker) return false;
        if (window["CheatOpen"]) return true;
        return poker.getValue() - next.getValue() == 1 && poker.getPokerColor() == next.getPokerColor();
      };
      Poker.checkRecycled = function(poker, next) {
        return false;
      };
      Poker.prototype.onChildRemove = function(child) {
        this.setNext(null);
        if (!Game_1.Game.isGameStarted() || Game_1.Game.isComplete()) return;
        if (this.cycled) return;
        if (this.node.childrenCount <= this.defualtChildCount) {
          this.key >= 0 && this.key <= 7 && null !== this.key ? Game_1.Game.addPlacePokerRoot(this.key, this.node) : console.error(" on child remove, key invaild:", this.key, ", val:", this.value, "type:", PokerType[this.pokerType]);
          this.setNormal();
          this.checkPos();
          if (this.carState == CardState.Back) {
            this.flipCard(.1);
            Game_1.Game.addFlipCounts(1);
            Game_1.Game.addScore(Pokers_1.FLIP_SCORE, CMath.ConvertToNodeSpaceAR(this.node, Game_1.Game.removeNode));
          } else this.forward && this.forward.updateState.call(this.forward);
        }
      };
      Poker.prototype.updateState = function() {
        if (this.next) {
          if (Poker_1.checkBeNext(this, this.next) && this.next.isNormal()) this.setNormal(); else {
            this.frontCard.node.color = Pokers_1.COLOR_GRAY.clone();
            this.canMove = false;
          }
          this.forward && this.forward.updateState.call(this.forward);
        } else this.setNormal();
      };
      Poker.prototype.setAllGray = function() {
        if (!this.node.parent) return;
        this.frontCard.node.color = Pokers_1.COLOR_GRAY.clone();
        this.canMove = false;
        this.forward && this.forward.setAllGray.call(this.forward);
      };
      Poker.prototype.setNormal = function() {
        console.log("setNormal:", this.value, ", setNormal key:", this.key);
        this.frontCard.node.color = cc.Color.WHITE;
        this.canMove = this.carState == CardState.Front;
      };
      Poker.prototype.isGray = function() {
        return this.frontCard.node.color == Pokers_1.COLOR_GRAY && false == this.canMove;
      };
      Poker.prototype.setCardState = function(state, canMove) {
        void 0 === canMove && (canMove = true);
        this.carState = state;
        this.frontCard.node.scaleX = this.carState == CardState.Front ? 1 : 0;
        this.backCard.node.scaleX = this.carState == CardState.Back ? 1 : 0;
        this.canMove = this.carState == CardState.Front && canMove;
        this.canMove && this.next && !Poker_1.checkBeNext(this, this.next) && (this.canMove = false);
        if (this.canMove) {
          this.frontCard.node.color = cc.Color.WHITE;
          this.setDefaultPosition();
        } else this.forward && (this.frontCard.node.color = Pokers_1.COLOR_GRAY);
      };
      Poker.prototype.isNormal = function() {
        return this.carState == CardState.Front && this.canMove;
      };
      Poker.prototype.isFront = function() {
        return this.carState == CardState.Front;
      };
      Poker.prototype.flipCard = function(duration, canMove, callback) {
        var _this = this;
        void 0 === duration && (duration = 1);
        void 0 === canMove && (canMove = true);
        if (this.frontCard.node.getNumberOfRunningActions() > 0 || this.backCard.node.getNumberOfRunningActions() > 0) {
          console.warn("\u7ffb\u9762\u672a\u5b8c\u6210");
          this.flips.push(duration);
          return;
        }
        if (this.carState == CardState.Back) {
          this.frontCard.node.runAction(cc.sequence(cc.delayTime(duration), cc.scaleTo(duration, 1, 1), cc.callFunc(function() {
            _this.setCardState(CardState.Front, canMove);
            callback && callback();
            if (_this.flips.length > 0) {
              _this.frontCard.node.stopAllActions();
              _this.flipCard.call(_this, _this.flips.pop());
            }
          }, this)));
          this.backCard.node.runAction(cc.scaleTo(duration, 0, 1));
        } else {
          this.backCard.node.runAction(cc.sequence(cc.delayTime(duration), cc.scaleTo(duration, 1, 1), cc.callFunc(function() {
            _this.setCardState(CardState.Back, false);
            callback && callback();
            if (_this.flips.length > 0) {
              _this.backCard.node.stopAllActions();
              _this.flipCard.call(_this, _this.flips.pop());
            }
          }, this)));
          this.frontCard.node.runAction(cc.scaleTo(duration, 0, 1));
        }
      };
      Poker.prototype.start = function() {};
      Poker.prototype.update = function(dt) {
        if (this.isCycled()) return;
        this.isReadyAutoComplete && (this.isReadyAutoComplete = !this.checkAutoRecycle());
      };
      Poker.prototype.onSetParent = function(parent) {
        if (!parent) {
          this.setForward(null);
          return;
        }
        var poker = parent.getComponent(Poker_1);
        if (poker) {
          this.setForward(poker);
          this.setKey(poker.getKey());
        } else {
          this.setForward(null);
          this.setKey(parseInt(parent.name));
        }
      };
      var Poker_1;
      Poker.DebugRecycIndex = 0;
      __decorate([ property(cc.Sprite) ], Poker.prototype, "frontCard", void 0);
      __decorate([ property(cc.Sprite) ], Poker.prototype, "backCard", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Poker.prototype, "pokerAtlas", void 0);
      __decorate([ property(cc.Animation) ], Poker.prototype, "RecycleAnimation", void 0);
      Poker = Poker_1 = __decorate([ ccclass ], Poker);
      return Poker;
    }(cc.Component);
    exports.default = Poker;
    cc._RF.pop();
  }, {
    "./Pokers": "Pokers",
    "./controller/EventManager": "EventManager",
    "./controller/EventName": "EventName",
    "./controller/Game": "Game",
    "./controller/GameFactory": "GameFactory"
  } ],
  RecycleRoot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc8dfsy/SxCYZDWNhC7pOvt", "RecycleRoot");
    cc._RF.pop();
  }, {} ],
  Result: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d3e694EHtE55kWvZJIadml", "Result");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./controller/Game");
    var EventManager_1 = require("./controller/EventManager");
    var EventName_1 = require("./controller/EventName");
    var celerx = require("./utils/celerx");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Result = function(_super) {
      __extends(Result, _super);
      function Result() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Score = null;
        _this.TimeBonus = null;
        _this.FinalScore = null;
        _this.ConfirmButton = null;
        _this.Title = null;
        _this.TitleAtlas = null;
        _this.Result = null;
        _this.Light = null;
        _this.Stars = null;
        _this.score = 0;
        _this.timeBonus = 0;
        _this.finalScore = 0;
        _this.scoreStep = 0;
        _this.timeBonusStep = 0;
        _this.finalScoreStep = 0;
        _this.showScore = 0;
        _this.hasSubmit = false;
        _this.scoreComplete = false;
        _this.timeBonusComplete = false;
        _this.finalScoreComplete = false;
        _this.sumbit = false;
        return _this;
      }
      Result.prototype.onLoad = function() {
        var _this = this;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SMALL_BGM);
        var _loop_1 = function(child) {
          var action = cc.repeatForever(cc.sequence(cc.fadeIn(CMath.getRandom(.5, 1.5)).easing(cc.easeQuadraticActionInOut()), cc.fadeOut(CMath.getRandom(.4, .8)).easing(cc.easeQuadraticActionInOut())));
          child.opacity = 0;
          setTimeout(function() {
            child.runAction(action);
          }, 1e3 * CMath.getRandom(0, .5));
        };
        for (var _i = 0, _a = this.Stars.children; _i < _a.length; _i++) {
          var child = _a[_i];
          _loop_1(child);
        }
        this.Light.active = false;
        this.Score.string = "0";
        this.TimeBonus.string = "0";
        this.FinalScore.string = "0";
        Game_1.Game.getTimeBonus() > 0 ? Game_1.Game.isComplete() ? this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame("bg_complete") : this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame("bg_font02") : Game_1.Game.isComplete() ? this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame("bg_complete") : this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame("bg_font03");
        this.Result.setEventListener(this.eventListener.bind(this));
        this.showScore = Math.max(0, Game_1.Game.getScore() - Game_1.Game.getTimeBonus());
        console.log(" result:", Game_1.Game.getScore(), ", timeBonus:", Game_1.Game.getTimeBonus(), ",showScore:", this.showScore);
        this.scoreStep = Math.ceil(this.showScore / 30);
        this.timeBonusStep = Math.ceil(Game_1.Game.getTimeBonus() / 30);
        this.finalScoreStep = Math.ceil(Game_1.Game.getScore() / 30);
        this.ConfirmButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          true;
          window.location.reload();
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.RESTART, function() {
          _this.node.removeFromParent();
        }, this);
      };
      Result.prototype.eventListener = function(trackEntry, event) {
        switch (event.stringValue) {
         case "light":
          this.Light.active = true;
          this.Light.runAction(cc.repeatForever(cc.rotateBy(5, 360)));
          break;

         case "music1":
          console.log(" music1111111111111111111111111111111");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_OVER_1);
          break;

         case "music2":
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_OVER_2);
        }
      };
      Result.prototype.start = function() {};
      Result.prototype.check = function() {
        var _this = this;
        if (this.sumbit) return;
        false;
      };
      Result.prototype.update = function(dt) {
        this.showScore = Math.max(0, Game_1.Game.getScore() - Game_1.Game.getTimeBonus());
        if (this.score < this.showScore) {
          this.score += this.scoreStep;
          this.score = Math.min(this.score, this.showScore);
          this.Score.string = this.score.toString();
        } else {
          this.scoreComplete = true;
          this.check();
        }
        if (this.timeBonus < Game_1.Game.getTimeBonus()) {
          this.timeBonus += this.timeBonusStep;
          this.timeBonus = Math.min(this.timeBonus, Game_1.Game.getTimeBonus());
          this.TimeBonus.string = this.timeBonus.toString();
        } else {
          this.timeBonusComplete = true;
          this.check();
        }
        if (this.finalScore < Game_1.Game.getScore()) {
          this.finalScore += this.finalScoreStep;
          this.finalScore = Math.min(this.finalScore, Game_1.Game.getScore());
          this.FinalScore.string = this.finalScore.toString();
        } else {
          this.finalScoreComplete = true;
          this.check();
        }
      };
      __decorate([ property(cc.Label) ], Result.prototype, "Score", void 0);
      __decorate([ property(cc.Label) ], Result.prototype, "TimeBonus", void 0);
      __decorate([ property(cc.Label) ], Result.prototype, "FinalScore", void 0);
      __decorate([ property(cc.Button) ], Result.prototype, "ConfirmButton", void 0);
      __decorate([ property(cc.Sprite) ], Result.prototype, "Title", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Result.prototype, "TitleAtlas", void 0);
      __decorate([ property(sp.Skeleton) ], Result.prototype, "Result", void 0);
      __decorate([ property(cc.Node) ], Result.prototype, "Light", void 0);
      __decorate([ property(cc.Node) ], Result.prototype, "Stars", void 0);
      Result = __decorate([ ccclass ], Result);
      return Result;
    }(cc.Component);
    exports.default = Result;
    cc._RF.pop();
  }, {
    "./controller/EventManager": "EventManager",
    "./controller/EventName": "EventName",
    "./controller/Game": "Game",
    "./utils/celerx": "celerx"
  } ],
  ScoreLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63782W3hqJOj5tpO+PG+bef", "ScoreLabel");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ScoreLabel = function(_super) {
      __extends(ScoreLabel, _super);
      function ScoreLabel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Score = null;
        return _this;
      }
      ScoreLabel.prototype.reuse = function() {
        this.node.scale = 0;
        console.log(arguments[0][0]);
        this.Score.string = arguments[0][0];
      };
      ScoreLabel.prototype.unuse = function() {};
      ScoreLabel.prototype.onLoad = function() {};
      ScoreLabel.prototype.start = function() {};
      __decorate([ property(cc.Label) ], ScoreLabel.prototype, "Score", void 0);
      ScoreLabel = __decorate([ ccclass ], ScoreLabel);
      return ScoreLabel;
    }(cc.Component);
    exports.default = ScoreLabel;
    cc._RF.pop();
  }, {} ],
  Stop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8765cbDuHdBm6FKOUQ5ug79", "Stop");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./controller/Game");
    var EventManager_1 = require("./controller/EventManager");
    var EventName_1 = require("./controller/EventName");
    var Guide_1 = require("./Guide");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Stop = function(_super) {
      __extends(Stop, _super);
      function Stop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.EndButton = null;
        _this.ResumeButton = null;
        _this.Help = null;
        _this.Content = null;
        _this.TitleAtlas = null;
        _this.Title = null;
        _this.Guide = null;
        return _this;
      }
      Object.defineProperty(Stop.prototype, "VolumeSlider", {
        get: function() {
          return this.node.getChildByName("VolumeSlider").getComponent(cc.Slider);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Stop.prototype, "Mask", {
        get: function() {
          return this.VolumeSlider.node.getChildByName("Mask");
        },
        enumerable: true,
        configurable: true
      });
      Stop.prototype.onLoad = function() {
        this.EndButton.node.on(cc.Node.EventType.TOUCH_END, this.endNow, this);
        this.ResumeButton.node.on(cc.Node.EventType.TOUCH_END, this.Resume, this);
        this.Help.node.on(cc.Node.EventType.TOUCH_END, this.ShowHelp, this);
        this.VolumeSlider.node.on("slide", this.onSlider, this);
        this.Content["_enableBold"](true);
      };
      Stop.prototype.onSlider = function() {
        cc.audioEngine.setEffectsVolume(this.VolumeSlider.progress);
        cc.audioEngine.setMusicVolume(this.VolumeSlider.progress);
        this.updateMask();
      };
      Stop.prototype.updateMask = function() {
        this.Mask.width = 440 * this.VolumeSlider.progress;
      };
      Stop.prototype.endNow = function() {
        console.log(" end game manualy");
        Game_1.Game.calTimeBonus();
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.OPEN_RESULT);
      };
      Stop.prototype.hide = function() {
        this.node.active = false;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.NORMAL_BGM);
      };
      Stop.prototype.show = function(type) {
        this.node.active = true;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_PAUSE);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SMALL_BGM);
        this.VolumeSlider.progress = cc.audioEngine.getEffectsVolume();
        this.updateMask();
        this.VolumeSlider.node.active = type > 0;
        if (type > 0) {
          this.Content.node.y = -33;
          this.EndButton.node.active = false;
          this.ResumeButton.node.x = 0;
          this.Content.string = "The game has been paused, please resume.";
          this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame("bg_font06");
        } else {
          this.Content.node.y = 37;
          this.EndButton.node.active = true;
          this.ResumeButton.node.x = -215;
          this.Content.string = "Do you want to stop now with the current score?";
          this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame("bg_font01");
        }
      };
      Stop.prototype.ShowHelp = function() {
        this.Guide.show(function() {});
      };
      Stop.prototype.Resume = function() {
        this.hide();
        Game_1.Game.setPause(false);
      };
      Stop.prototype.start = function() {};
      __decorate([ property(cc.Button) ], Stop.prototype, "EndButton", void 0);
      __decorate([ property(cc.Button) ], Stop.prototype, "ResumeButton", void 0);
      __decorate([ property(cc.Button) ], Stop.prototype, "Help", void 0);
      __decorate([ property(cc.Label) ], Stop.prototype, "Content", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Stop.prototype, "TitleAtlas", void 0);
      __decorate([ property(cc.Sprite) ], Stop.prototype, "Title", void 0);
      __decorate([ property(Guide_1.default) ], Stop.prototype, "Guide", void 0);
      Stop = __decorate([ ccclass ], Stop);
      return Stop;
    }(cc.Component);
    exports.default = Stop;
    cc._RF.pop();
  }, {
    "./Guide": "Guide",
    "./controller/EventManager": "EventManager",
    "./controller/EventName": "EventName",
    "./controller/Game": "Game"
  } ],
  celerx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "153b7Xcy2FNELHDjVpmsk/P", "celerx");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var bridge = {
      default: void 0,
      call: function call(b, a, c) {
        var e = "";
        "function" == typeof a && (c = a, a = {});
        a = {
          data: void 0 === a ? null : a
        };
        if ("function" == typeof c) {
          var g = "dscb" + window.dscb++;
          window[g] = c;
          a._dscbstub = g;
        }
        a = JSON.stringify(a);
        window._dsbridge ? e = _dsbridge.call(b, a) : (window._dswk || -1 != navigator.userAgent.indexOf("_dsbridge")) && (e = prompt("_dsbridge=" + b, a));
        return JSON.parse(e || "{}").data;
      },
      register: function register(b, a, c) {
        c = c ? window._dsaf : window._dsf;
        window._dsInit || (window._dsInit = !0, setTimeout(function() {
          bridge.call("_dsb.dsinit");
        }, 0));
        "object" == ("undefined" === typeof a ? "undefined" : _typeof(a)) ? c._obs[b] = a : c[b] = a;
      },
      registerAsyn: function registerAsyn(b, a) {
        this.register(b, a, !0);
      },
      hasNativeMethod: function hasNativeMethod(b, a) {
        return this.call("_dsb.hasNativeMethod", {
          name: b,
          type: a || "all"
        });
      },
      disableJavascriptDialogBlock: function disableJavascriptDialogBlock(b) {
        this.call("_dsb.disableJavascriptDialogBlock", {
          disable: !1 !== b
        });
      }
    };
    !function() {
      if (!window._dsf) {
        var b = {
          _dsf: {
            _obs: {}
          },
          _dsaf: {
            _obs: {}
          },
          dscb: 0,
          celerx: bridge,
          close: function close() {
            bridge.call("_dsb.closePage");
          },
          _handleMessageFromNative: function _handleMessageFromNative(a) {
            var e = JSON.parse(a.data), b = {
              id: a.callbackId,
              complete: !0
            }, c = this._dsf[a.method], d = this._dsaf[a.method], h = function h(a, c) {
              b.data = a.apply(c, e);
              bridge.call("_dsb.returnValue", b);
            }, k = function k(a, c) {
              e.push(function(a, c) {
                b.data = a;
                b.complete = !1 !== c;
                bridge.call("_dsb.returnValue", b);
              });
              a.apply(c, e);
            };
            if (c) h(c, this._dsf); else if (d) k(d, this._dsaf); else if (c = a.method.split("."), 
            !(2 > c.length)) {
              a = c.pop();
              var c = c.join("."), d = this._dsf._obs, d = d[c] || {}, f = d[a];
              f && "function" == typeof f ? h(f, d) : (d = this._dsaf._obs, d = d[c] || {}, (f = d[a]) && "function" == typeof f && k(f, d));
            }
          }
        }, a;
        for (a in b) window[a] = b[a];
        bridge.register("_hasJavascriptMethod", function(a, b) {
          b = a.split(".");
          if (2 > b.length) return !(!_dsf[b] && !_dsaf[b]);
          a = b.pop();
          b = b.join(".");
          return (b = _dsf._obs[b] || _dsaf._obs[b]) && !!b[a];
        });
      }
    }();
    var base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function binary_to_base64(arr) {
      var input = new Uint8Array(arr);
      var ret = new Array();
      var i = 0;
      var j = 0;
      var char_array_3 = new Array(3);
      var char_array_4 = new Array(4);
      var in_len = input.length;
      var pos = 0;
      while (in_len--) {
        char_array_3[i++] = input[pos++];
        if (3 == i) {
          char_array_4[0] = (252 & char_array_3[0]) >> 2;
          char_array_4[1] = ((3 & char_array_3[0]) << 4) + ((240 & char_array_3[1]) >> 4);
          char_array_4[2] = ((15 & char_array_3[1]) << 2) + ((192 & char_array_3[2]) >> 6);
          char_array_4[3] = 63 & char_array_3[2];
          for (i = 0; i < 4; i++) ret += base64_chars.charAt(char_array_4[i]);
          i = 0;
        }
      }
      if (i) {
        for (j = i; j < 3; j++) char_array_3[j] = 0;
        char_array_4[0] = (252 & char_array_3[0]) >> 2;
        char_array_4[1] = ((3 & char_array_3[0]) << 4) + ((240 & char_array_3[1]) >> 4);
        char_array_4[2] = ((15 & char_array_3[1]) << 2) + ((192 & char_array_3[2]) >> 6);
        char_array_4[3] = 63 & char_array_3[2];
        for (j = 0; j < i + 1; j++) ret += base64_chars.charAt(char_array_4[j]);
        while (i++ < 3) ret += "=";
      }
      return ret;
    }
    var hD = "0123456789ABCDEF";
    function dec2hex(d) {
      var h = hD.substr(15 & d, 1);
      while (d > 15) {
        d >>= 4;
        h = hD.substr(15 & d, 1) + h;
      }
      return h;
    }
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function base64_decode(input) {
      var output = new Array();
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      var orig_input = input;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      orig_input != input && alert("Warning! Characters outside Base64 range in input string ignored.");
      if (input.length % 4) {
        alert("Error: Input length is not a multiple of 4 bytes.");
        return "";
      }
      var j = 0;
      while (i < input.length) {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (15 & enc2) << 4 | enc3 >> 2;
        chr3 = (3 & enc3) << 6 | enc4;
        output[j++] = chr1;
        64 != enc3 && (output[j++] = chr2);
        64 != enc4 && (output[j++] = chr3);
      }
      return output;
    }
    var _provideScore = {
      callback: function callback() {
        return "";
      }
    };
    var _provideCurrentFrameData = {
      callback: function callback() {
        return "";
      }
    };
    bridge.register("provideScore", function() {
      return _provideScore.callback();
    });
    bridge.register("provideCurrentFrameData", function() {
      return _provideCurrentFrameData.callback();
    });
    module.exports = window["celerSDK"] = {
      onStateReceived: function onStateReceived(callback) {
        return bridge.register("onStateReceived", function(base64) {
          var output = base64_decode(base64);
          return callback(new Uint8Array(output));
        });
      },
      onCourtModeStarted: function onCourtModeStarted(callback) {
        return bridge.register("onCourtModeStarted", callback);
      },
      getMatch: function getMatch() {
        var result = bridge.call("getMatch", "123");
        try {
          result = JSON.parse(result);
        } catch (error) {}
        return result;
      },
      showCourtModeDialog: function showCourtModeDialog() {
        return bridge.call("showCourtModeDialog");
      },
      start: function start() {
        return bridge.call("start");
      },
      sendState: function sendState(arr) {
        return bridge.call("sendState", binary_to_base64(arr));
      },
      draw: function draw(arr) {
        return bridge.call("draw", binary_to_base64(arr));
      },
      win: function win(arr) {
        return bridge.call("win", binary_to_base64(arr));
      },
      lose: function lose(arr) {
        return bridge.call("lose", binary_to_base64(arr));
      },
      surrender: function surrender(arr) {
        return bridge.call("surrender", binary_to_base64(arr));
      },
      applyAction: function applyAction(arr, callback) {
        return bridge.call("applyAction", binary_to_base64(arr), callback);
      },
      getOnChainState: function getOnChainState(callback) {
        return bridge.call("getOnChainState", "123", function(base64) {
          var output = base64_decode(base64);
          return callback(new Uint8Array(output));
        });
      },
      getOnChainActionDeadline: function getOnChainActionDeadline(callback) {
        return bridge.call("getOnChainActionDeadline", "123", callback);
      },
      getCurrentBlockNumber: function getCurrentBlockNumber() {
        return bridge.call("getCurrentBlockNumber", "123");
      },
      finalizeOnChainGame: function finalizeOnChainGame(callback) {
        return bridge.call("finalizeOnChainGame", "123", callback);
      },
      submitScore: function submitScore(score) {
        return bridge.call("submitScore", score);
      },
      ready: function ready() {
        if (window.cc) {
          var takeImage = false;
          var canvas = document.getElementsByTagName("canvas")[0];
          cc.director.on(cc.Director.EVENT_AFTER_DRAW, function() {
            if (takeImage) {
              takeImage = false;
              celerSDK.didTakeSnapshot(canvas.toDataURL("image/jpeg", .1));
            }
          });
          celerSDK.provideCurrentFrameData(function() {
            takeImage = true;
          });
        }
        return bridge.call("ready");
      },
      onStart: function onStart(callback) {
        return bridge.register("onStart", callback);
      },
      provideScore: function provideScore(callback) {
        return _provideScore = {
          callback: callback
        };
      },
      provideCurrentFrameData: function provideCurrentFrameData(callback) {
        return _provideCurrentFrameData = {
          callback: callback
        };
      },
      didTakeSnapshot: function didTakeSnapshot(e) {
        if (!(window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers["celerSDK"] && window["webkit"].messageHandlers["celerSDK"].postMessage)) return bridge.call("didTakeSnapshot", e);
        window["webkit"].messageHandlers["celerSDK"].postMessage({
          method: "didTakeSnapshot",
          args: e
        });
      },
      log: function log(e) {
        if (!(window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers["celerSDK"] && window.webkit.messageHandlers["celerSDK"].postMessage)) return bridge.call("log", e);
        window.webkit.messageHandlers["celerSDK"].postMessage({
          method: "log",
          args: e
        });
      },
      getGameScore: function getGameScore() {
        if (!_provideScore || !_provideScore.callback || "" == _provideScore.callback()) return 0;
        return _provideScore.callback();
      },
      switchSnapShotFlag: function switchSnapShotFlag() {
        if (!_provideCurrentFrameData || !_provideCurrentFrameData.callback || "" == _provideCurrentFrameData.callback()) return 0;
        return _provideCurrentFrameData.callback();
      }
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameScene", "Guide", "Poker", "PokerRoot", "Pokers", "RecycleRoot", "Result", "ScoreLabel", "Stop", "AudioController", "EventManager", "EventName", "Game", "GameFactory", "HashMap", "LogHandler", "celerx" ]);