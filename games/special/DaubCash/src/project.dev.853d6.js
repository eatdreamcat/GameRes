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
    cc._RF.push(module, "9e9e7nIyP5BGquwjN7hFiaR", "AudioController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HashMap_1 = require("../Utils/HashMap");
    var EventManager_1 = require("./EventManager");
    var EventName_1 = require("./EventName");
    window.oncanplay && (window.oncanplay = function() {
      AudioController.canPlay = true;
    });
    var PATH = "sounds/";
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
        var _this = this;
        console.warn(" start load AudioClip ");
        var self = this;
        cc.loader.loadRes(PATH + "bgm", cc.AudioClip, function(err, clip) {
          if (err) console.error(err); else {
            true;
            "string" == typeof clip["_audio"] && cc.loader["_cache"] && cc.loader["_cache"][clip["_audio"]] && cc.loader["_cache"][clip["_audio"]]["buffer"] && (clip["_audio"] = cc.loader["_cache"][clip["_audio"]]["buffer"]);
            self.clips.add(clip.name, clip);
            self.initEvent();
            callback && callback();
          }
        });
        cc.loader.loadRes(PATH + "mouse_bgm", function(err, clip) {
          err ? console.error(err) : self.clips.add(clip.name, clip);
        });
        cc.loader.loadRes(PATH + "bgm_30", function(err, clip) {
          err ? console.error(err) : self.clips.add(clip.name, clip);
        });
        cc.loader.loadResDir(PATH, function(err, res, urls) {
          if (err) console.error(err); else for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
            var clip = res_1[_i];
            _this.clips.has(clip.name) || _this.clips.add(clip.name, clip);
          }
        });
      };
      AudioController.prototype.initEvent = function() {
        var _this = this;
        EventManager_1.gEventMgr.targetOff(this);
        this.playMusic("bgm");
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.CHANGE_BGM, function(name) {
          _this.playMusic(name);
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_EFFECT, function(name, loop, callback) {
          _this.playEffect(name, loop, callback);
        }, this);
      };
      AudioController.prototype.playEffect = function(name, loop, finishCallback) {
        var _this = this;
        void 0 === loop && (loop = false);
        if (!AudioController.canPlay) {
          this.bindTouch();
          return;
        }
        if (cc.audioEngine.getEffectsVolume() <= .05) return;
        var effect = this.clips.get(name);
        if (effect) {
          this.audioID[name] = cc.audioEngine.playEffect(effect, loop);
          cc.audioEngine.setFinishCallback(this.audioID[name], function() {
            finishCallback && finishCallback();
          });
        } else cc.loader.loadRes(PATH + name, cc.AudioClip, function(err, res) {
          if (err) console.error(err); else {
            true;
            "string" == typeof res["_audio"] && cc.loader["_cache"] && cc.loader["_cache"][res["_audio"]] && cc.loader["_cache"][res["_audio"]]["buffer"] && (res["_audio"] = cc.loader["_cache"][res["_audio"]]["buffer"]);
            _this.clips.add(res.name, res);
            _this.audioID[name] = cc.audioEngine.playEffect(res, loop);
            cc.audioEngine.setFinishCallback(_this.audioID[name], function() {
              finishCallback && finishCallback();
            });
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
    "../Utils/HashMap": "HashMap",
    "./EventManager": "EventManager",
    "./EventName": "EventName"
  } ],
  ButterFlySpring: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97a5dckn1RG8bbfjmAJlgQq", "ButterFlySpring");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderManager_1 = require("./ShaderManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ButterflySpring = function(_super) {
      __extends(ButterflySpring, _super);
      function ButterflySpring() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.material = new ShaderManager_1.ButterflySpringMaterial();
        _this.time = 0;
        return _this;
      }
      ButterflySpring.prototype.onLoad = function() {
        var sprite = this.getComponent(cc.Sprite);
        if (!sprite) return;
        sprite["_spriteMaterial"] = this.material;
        sprite["_activateMaterial"]();
      };
      ButterflySpring.prototype.start = function() {};
      ButterflySpring.prototype.update = function(dt) {
        this.time += 10 * dt;
      };
      ButterflySpring = __decorate([ ccclass ], ButterflySpring);
      return ButterflySpring;
    }(cc.Component);
    exports.default = ButterflySpring;
    cc._RF.pop();
  }, {
    "./ShaderManager": "ShaderManager"
  } ],
  Card: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abb83Mso7xFbKdwnWlntVp4", "Card");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./Controller/EventManager");
    var Const_1 = require("./Const");
    var Game_1 = require("./Controller/Game");
    var Point_1 = require("./Point");
    var EventName_1 = require("./Controller/EventName");
    var FrameAniBase_1 = require("./FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Card = function(_super) {
      __extends(Card, _super);
      function Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bingoTimes = 0;
        _this.nextTurnTime = 0;
        _this.mouseHideTime = 0;
        return _this;
      }
      Object.defineProperty(Card.prototype, "Wrong", {
        get: function() {
          return this.node.getChildByName("Wrong");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "Word", {
        get: function() {
          return this.word;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "Index", {
        get: function() {
          return this.index;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "BingoTimesLabel", {
        get: function() {
          return this.node.getChildByName("BingoTimes").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "Pos", {
        get: function() {
          return Const_1.CardWord[this.word] + "." + this.index;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "StringValue", {
        get: function() {
          return this.word + "." + this.value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "Star", {
        get: function() {
          return this.node.getChildByName("Star");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "NumberLabel", {
        get: function() {
          return this.node.getChildByName("Number").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "Bingo", {
        get: function() {
          return this.node.getChildByName("Bingo").getChildByName(Const_1.Theme[Game_1.Game.Theme]);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "Mouse", {
        get: function() {
          return this.node.getChildByName("Mouse");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "Magic", {
        get: function() {
          return this.node.getChildByName("Magic");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Card.prototype, "MagicAni", {
        get: function() {
          return this.Magic.getComponent(FrameAniBase_1.default);
        },
        enumerable: true,
        configurable: true
      });
      Card.prototype.setPageIndex = function(index) {
        this.pageIndex = index;
      };
      Card.prototype.reuse = function() {
        this.setPageIndex(arguments[0][3]);
        this.setValue(arguments[0][2]);
        this.setIndex(arguments[0][1]);
        this.setWord(arguments[0][0]);
        this.bingoTimes = 0;
        this.Wrong.active = false;
        this.Mouse.active = false;
        this.Magic.active = false;
        for (var _i = 0, _a = this.Bingo.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.active = false;
        }
        for (var _b = 0, _c = this.Bingo.getParent().children; _b < _c.length; _b++) {
          var child = _c[_b];
          child.active = child.name == Const_1.Theme[Game_1.Game.Theme];
        }
        this.Star.active = false;
        this.Bingo.getChildByName(this.bingoTimes.toString()).active = Const_1.StarCard.indexOf(this.Pos) >= 0;
        if (Const_1.StarCard.indexOf(this.Pos) >= 0) {
          Game_1.Game.delCurrentCardValue(this.pageIndex, this.value);
          Game_1.Game.addHighLightCard(this.pageIndex);
          Game_1.Game.addHighLightCardByWord(this.pageIndex, this.word);
        }
        this.initEvent();
        console.log(" pos:", Const_1.CardWord[this.word] + "." + this.index);
      };
      Card.prototype.unuse = function() {
        EventManager_1.gEventMgr.targetOff(this);
        this.node.targetOff(this);
      };
      Card.prototype.initEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onCardTouch, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.CHANGE_GAME_MODE, this.onGameModeChange, this);
      };
      Card.prototype.update = function(dt) {
        if (Game_1.Game.getCurMode() == Const_1.SkillType.Super && this.nextTurnTime > 0 && this.mouseHideTime > 0 && Game_1.Game.superHighLightCount < Const_1.SuperTime.HighLightLimit && !this.isLight()) {
          Date.now() >= this.nextTurnTime && (this.Mouse.active = true);
          if (Date.now() >= this.mouseHideTime) {
            this.Mouse.active = false;
            this.nextTurnTime = Date.now() + 1e3 * CMath.getRandom(Const_1.SuperTime.RandomMin, Const_1.SuperTime.RandomMax);
            this.mouseHideTime = this.nextTurnTime + 1e3 * CMath.getRandom(Const_1.SuperTime.ShowTimeMin, Const_1.SuperTime.ShowTimeMax);
          }
        }
      };
      Card.prototype.onGameModeChange = function() {
        if (Game_1.Game.getCurMode() != Const_1.SkillType.Super) {
          this.Mouse.active = false;
          this.nextTurnTime = 0;
        } else {
          this.nextTurnTime = Date.now() + 1e3 * CMath.getRandom(Const_1.SuperTime.RandomMin, Const_1.SuperTime.RandomMax);
          this.mouseHideTime = this.nextTurnTime + 1e3 * CMath.getRandom(Const_1.SuperTime.ShowTimeMin, Const_1.SuperTime.ShowTimeMax);
        }
      };
      Card.prototype.isLight = function() {
        for (var _i = 0, _a = this.Bingo.children; _i < _a.length; _i++) {
          var child = _a[_i];
          if (child.active) return true;
        }
        return this.Star.active;
      };
      Card.prototype.isMouse = function() {
        return this.Mouse.active;
      };
      Card.prototype.onCardTouch = function(e) {
        var _this = this;
        if (this.isLight()) {
          console.log(" card has already high light:", this.value);
          return;
        }
        if (Game_1.Game.isOver) {
          console.log(" game is over :", this.value);
          return;
        }
        if (Game_1.Game.getCurMode() == Const_1.SkillType.Super && Game_1.Game.superHighLightCount >= Const_1.SuperTime.HighLightLimit) {
          console.log(" in Super mode , highLight has 5 counts limit:", this.value);
          return;
        }
        var score = 0;
        var scoreType = Const_1.ScoreType.Oops;
        if (Game_1.Game.getCurMode() == Const_1.SkillType.Normal) {
          var currentReward = Game_1.Game.CurrentReward.children[0];
          if (currentReward && currentReward.getComponent(Point_1.default)) {
            var point = currentReward.getComponent(Point_1.default);
            if (point.TimeLeftPercent > 0 && point.StringValue == this.StringValue) {
              var percentCost = 1 - point.TimeLeftPercent;
              if (percentCost <= Const_1.TimeScorePercent.Perfect) {
                score = Const_1.Score.Normal + Const_1.Score.Perfect;
                scoreType = Const_1.ScoreType.Perfect;
              } else if (percentCost <= Const_1.TimeScorePercent.Great) {
                score = Const_1.Score.Normal + Const_1.Score.Great * (Const_1.TimeScorePercent.Great - percentCost) / (Const_1.TimeScorePercent.Great - Const_1.TimeScorePercent.Perfect);
                scoreType = Const_1.ScoreType.Great;
              } else {
                score = Const_1.Score.Normal + Const_1.Score.Nice * (1 - percentCost) / Const_1.TimeScorePercent.Great;
                scoreType = Const_1.ScoreType.Nice;
              }
            } else {
              point.addTime(-point.TotalTime / 5);
              score = Const_1.Score.Oops;
              scoreType = Const_1.ScoreType.Oops;
            }
          }
          for (var _i = 0, _a = Game_1.Game.RewardArray.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var point = child.getComponent(Point_1.default);
            if (point && point.StringValue == this.StringValue) {
              score = Const_1.Score.Normal;
              scoreType = Const_1.ScoreType.Normal;
            }
          }
          score = Math.ceil(score);
        } else if (Game_1.Game.getCurMode() == Const_1.SkillType.Star) {
          score = Const_1.Score.Normal + Const_1.Score.Star;
          scoreType = Const_1.ScoreType.Star;
        } else if (Game_1.Game.getCurMode() == Const_1.SkillType.Gold) {
          if (this.value == Game_1.Game.goldSelectValue) {
            score = Const_1.Score.Normal + Const_1.Score.Gold;
            scoreType = Const_1.ScoreType.Gold;
          }
        } else if (Game_1.Game.getCurMode() == Const_1.SkillType.Super) if (this.isMouse()) {
          score = Const_1.Score.Normal + Const_1.Score.Mouse;
          scoreType = Const_1.ScoreType.Mouse;
          Game_1.Game.superHighLightCount++;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_MOUSE_LIGHT);
        } else {
          Game_1.Game.superWrongCount++;
          if (Game_1.Game.superWrongCount > Const_1.SuperTime.WrongLimit) {
            score = Const_1.SuperTime.SubScore;
            scoreType = Const_1.ScoreType.Oops;
          }
        } else if (Game_1.Game.getCurMode() == Const_1.SkillType.Magic) {
          var currentReward = Game_1.Game.CurrentReward.children[0];
          if (currentReward && currentReward.getComponent(Point_1.default)) {
            if (false == Game_1.Game.hasDaubMagicBall) {
              var point = currentReward.getComponent(Point_1.default);
              this.Magic.active = true;
              this.Magic.opacity = 0;
              this.Magic.runAction(cc.fadeIn(.1));
              this.MagicAni.play();
              this.MagicAni.onComplete = function() {
                _this.Magic.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function() {
                  _this.Magic.active = false;
                })));
              };
              Game_1.Game.replaceCurrentCardValue(this.pageIndex, this.value, point.Value);
              this.setValue(point.Value);
              Game_1.Game.hasDaubMagicBall = true;
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.MAGIC_DAUB);
            }
          } else console.log(" not CurrentRewardmagicSkill  click!");
        }
        switch (Game_1.Game.getCurMode()) {
         case Const_1.SkillType.Star:
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SKILL_DONE);
          break;

         case Const_1.SkillType.Gold:
          var nextPage = (Game_1.Game.cardIndex + 1) % Game_1.Game.getCardNumber();
          var points = Game_1.Game.getCurrentPageValues(nextPage);
          (Game_1.Game.checkIsFull(nextPage) || points.indexOf(Game_1.Game.goldSelectValue) < 0) && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SKILL_DONE);
          break;

         case Const_1.SkillType.Super:
          (Game_1.Game.checkIsFull(Game_1.Game.cardIndex) || Game_1.Game.superHighLightCount >= Const_1.SuperTime.HighLightLimit) && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SUPER_END_COMPLETE);
          break;

         case Const_1.SkillType.Magic:
          return;
        }
        if (score > 0) {
          this.turnStar();
          Game_1.Game.addScore(scoreType, score, 1);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHECK_BINGO, this, Const_1.RectCard.indexOf(this.Pos) >= 0);
        } else {
          Game_1.Game.addScore(scoreType, score, 1);
          this.showWrong();
        }
      };
      Card.prototype.showWrong = function() {
        var _this = this;
        if (this.Wrong.active || this.Wrong.getNumberOfRunningActions() > 0) return;
        this.Wrong.opacity = 0;
        this.Wrong.active = true;
        this.Wrong.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(.05), cc.fadeOut(.05), cc.callFunc(function() {
          _this.Wrong.active = false;
        })));
      };
      Card.prototype.turnStar = function() {
        this.Star.active = true;
        this.Mouse.stopAllActions();
        this.Mouse.active = false;
        Game_1.Game.addHighLightCard(this.pageIndex);
        Game_1.Game.addHighLightCardByWord(this.pageIndex, this.word);
        Game_1.Game.delCurrentCardValue(this.pageIndex, this.value);
      };
      Card.prototype.setValue = function(val) {
        this.value = val;
        this.NumberLabel.string = this.value.toString();
      };
      Card.prototype.setIndex = function(ind) {
        this.index = ind;
      };
      Card.prototype.setWord = function(word) {
        this.word = word;
      };
      Card.prototype.isBingo = function() {
        return this.bingoTimes >= 1;
      };
      Card.prototype.bingo = function() {
        if (!this.isLight()) {
          console.log(" this card can not bingo:", this.Pos);
          return 0;
        }
        this.bingoTimes++;
        for (var _i = 0, _a = this.Bingo.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.active = parseInt(child.name) <= this.bingoTimes;
        }
        this.NumberLabel.node.active = false;
        var score = 0;
        if (this.bingoTimes >= 2) {
          Game_1.Game.addOverBingoTimes(this.pageIndex);
          var bingoTimes = Game_1.Game.getTotalBingoTimes();
          score = bingoTimes * Const_1.Score.BingoStep;
        }
        return score;
      };
      Card.prototype.start = function() {};
      Card = __decorate([ ccclass ], Card);
      return Card;
    }(cc.Component);
    exports.default = Card;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./FrameAniBase": "FrameAniBase",
    "./Point": "Point"
  } ],
  CelerSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed9c4kHhRZCyKBWDxdeArVs", "CelerSDK");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./Game");
    var LogHandler_1 = require("./LogHandler");
    var celerx = require("../Utils/celerx");
    var CelerSDK = function() {
      function CelerSDK() {
        this.alreadySubmit = false;
        this.isNewPlayer = true;
        this.celerStartCallback = null;
        this.isInCeler = CELER_X;
        LogHandler_1.LogHandler.inst.initLog(celerx.log);
      }
      Object.defineProperty(CelerSDK, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new CelerSDK();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CelerSDK.prototype, "MatchID", {
        get: function() {
          return this.match.matchId;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CelerSDK.prototype, "MatchRandomSeed", {
        get: function() {
          return this.match.sharedRandomSeed;
        },
        enumerable: true,
        configurable: true
      });
      CelerSDK.prototype.init = function(callback) {
        this.alreadySubmit = false;
        celerx.onStart(this.onCelerStart.bind(this));
        celerx.provideScore(function() {
          return parseInt(Game_1.Game.getScore().toString());
        });
        this.celerStartCallback = callback;
        LogHandler_1.LogHandler.inst.initLog(celerx.log);
        LogHandler_1.LogHandler.inst.log(" game scene on load");
      };
      CelerSDK.prototype.celerXReady = function() {
        LogHandler_1.LogHandler.inst.log(" invoke celerx.ready() ");
        celerx.ready();
        true;
        this.onCelerStart();
      };
      CelerSDK.prototype.isNew = function() {
        return this.isNewPlayer;
      };
      CelerSDK.prototype.isOnCelerPlatform = function() {
        return this.isInCeler;
      };
      CelerSDK.prototype.onCelerStart = function() {
        this.match = celerx.getMatch() || {};
        LogHandler_1.LogHandler.inst.log(" celerx onStart call", "match id:", this.match.matchId, ", seed:", this.match.sharedRandomSeed);
        if (this.match && this.match.sharedRandomSeed) {
          CMath.randomSeed = this.match.sharedRandomSeed;
          CMath.sharedSeed = this.match.sharedRandomSeed;
          this.isInCeler = true;
        } else {
          this.isInCeler = false;
          CMath.randomSeed = Math.random();
        }
        this.match && this.match.shouldLaunchTutorial || true ? this.isNewPlayer = true : this.isNewPlayer = false;
        if (this.celerStartCallback) {
          this.celerStartCallback();
          this.celerStartCallback = null;
        }
      };
      CelerSDK.prototype.submitScore = function(score) {
        if (this.alreadySubmit) return;
        this.alreadySubmit = true;
        LogHandler_1.LogHandler.inst.log(" submit score:", score, ", match id:", this.match.matchId);
        celerx.submitScore(score);
      };
      return CelerSDK;
    }();
    exports.CelerSDK = CelerSDK;
    cc._RF.pop();
  }, {
    "../Utils/celerx": "celerx",
    "./Game": "Game",
    "./LogHandler": "LogHandler"
  } ],
  Const: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6380cLWFRRCbqDZ1T+XmugM", "Const");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameTime = 1200;
    exports.SkillTimeBouns = 10;
    var SkillType;
    (function(SkillType) {
      SkillType[SkillType["Time"] = 0] = "Time";
      SkillType[SkillType["Star"] = 1] = "Star";
      SkillType[SkillType["Gold"] = 2] = "Gold";
      SkillType[SkillType["Super"] = 3] = "Super";
      SkillType[SkillType["Normal"] = 4] = "Normal";
      SkillType[SkillType["Magic"] = 5] = "Magic";
    })(SkillType = exports.SkillType || (exports.SkillType = {}));
    exports.SuperAniName = {
      Percent: "super_percent",
      Get: "super_get",
      Remind: "super"
    };
    exports.MaxSkillEquipCount = 3;
    var Theme;
    (function(Theme) {
      Theme[Theme["Wheel"] = 0] = "Wheel";
      Theme[Theme["Carousel"] = 1] = "Carousel";
      Theme[Theme["Roller"] = 2] = "Roller";
    })(Theme = exports.Theme || (exports.Theme = {}));
    exports.ThemePool = [ Theme.Carousel, Theme.Roller, Theme.Wheel ];
    exports.RewardTime = {
      One: 4,
      Two: 3.2
    };
    exports.TimeScorePercent = {
      Perfect: .2,
      Great: .5
    };
    var ScoreType;
    (function(ScoreType) {
      ScoreType[ScoreType["Perfect"] = 0] = "Perfect";
      ScoreType[ScoreType["Great"] = 1] = "Great";
      ScoreType[ScoreType["Nice"] = 2] = "Nice";
      ScoreType[ScoreType["Normal"] = 3] = "Normal";
      ScoreType[ScoreType["Oops"] = 4] = "Oops";
      ScoreType[ScoreType["Bingo"] = 5] = "Bingo";
      ScoreType[ScoreType["OverBingo"] = 6] = "OverBingo";
      ScoreType[ScoreType["AllBingo"] = 7] = "AllBingo";
      ScoreType[ScoreType["Star"] = 8] = "Star";
      ScoreType[ScoreType["Gold"] = 9] = "Gold";
      ScoreType[ScoreType["Mouse"] = 10] = "Mouse";
      ScoreType[ScoreType["SpeedScore"] = 11] = "SpeedScore";
      ScoreType[ScoreType["BingoScore"] = 12] = "BingoScore";
      ScoreType[ScoreType["CorrectScore"] = 13] = "CorrectScore";
      ScoreType[ScoreType["OverBingoScore"] = 14] = "OverBingoScore";
      ScoreType[ScoreType["AllBingoScore"] = 15] = "AllBingoScore";
      ScoreType[ScoreType["OopScore"] = 16] = "OopScore";
      ScoreType[ScoreType["TotalScore"] = 17] = "TotalScore";
    })(ScoreType = exports.ScoreType || (exports.ScoreType = {}));
    var ScoreCountType;
    (function(ScoreCountType) {
      ScoreCountType[ScoreCountType["SpeedBonusCount"] = 0] = "SpeedBonusCount";
      ScoreCountType[ScoreCountType["CorrectCount"] = 1] = "CorrectCount";
      ScoreCountType[ScoreCountType["OopCount"] = 2] = "OopCount";
      ScoreCountType[ScoreCountType["BingoCount"] = 3] = "BingoCount";
      ScoreCountType[ScoreCountType["OverBingoCount"] = 4] = "OverBingoCount";
      ScoreCountType[ScoreCountType["AllBingoCount"] = 5] = "AllBingoCount";
    })(ScoreCountType = exports.ScoreCountType || (exports.ScoreCountType = {}));
    exports.ToolPercent = {
      Perfect: .8,
      Great: .5,
      Nice: .4,
      Normal: 0,
      Oops: 0,
      Bingo: 0,
      OverBingo: 0,
      AllBingo: 0,
      Star: .8,
      Gold: .8,
      Mouse: 0
    };
    exports.ScoreText = {
      Perfect: "font_perfect",
      Great: "font_great",
      Nice: "font_nice",
      Normal: "",
      Oops: "font_oops",
      Bingo: "",
      BingoFail: "font_oops",
      OverBingo: "",
      AllBingo: "",
      Star: "font_perfect",
      Gold: "font_perfect",
      Mouse: "font_awesome"
    };
    exports.SuperLight = {
      Gray: "bg_supergray",
      Light: "bg_superlight"
    };
    exports.UI_Atlas = {
      Bingo_Blue_Up: "btn_bingo_blue_up",
      Bingo_Blue_Down: "btn_bingo_blue_down",
      Bingo_Orange_Up: "btn_bingo_orange_up",
      Bingo_Orange_Down: "btn_bingo_orange_down",
      Skill_Full: "bg_skill_full",
      Skill_Normal: "bg_skill_get",
      Skill_Icon_Star: "bg_skill_1",
      Skill_Icon_Gold: "bg_skill_2",
      Skill_Icon_Time: "bg_skill_3",
      Skill_Icon_Magic: "bg_skill_4",
      Super_Skill_Down: "btn_change_down",
      Super_Skill_Up: "btn_change_up",
      Super_Skill_Gray: "btn_change_gray"
    };
    exports.Score = {
      Perfect: 50,
      Great: 30,
      Nice: 20,
      Normal: 100,
      Oops: -25,
      MouseOops: -25,
      Bingo: 1e3,
      BingoStep: 100,
      BingoFail: -100,
      AllBingo: 3e3,
      Star: 50,
      Gold: 50,
      Mouse: 50
    };
    exports.TimeLimit = 91;
    exports.RewardListLimit = 4;
    exports.CardNumber = {
      Min: 2,
      Max: 3
    };
    var PrefabName;
    (function(PrefabName) {
      PrefabName["Score"] = "Score";
      PrefabName["Card"] = "Card";
      PrefabName["Point"] = "Point";
      PrefabName["Time"] = "TimeBonus";
    })(PrefabName = exports.PrefabName || (exports.PrefabName = {}));
    exports.TargetRange = {
      Start: 1,
      End: 75
    };
    exports.CardStep = 15;
    var CardWord;
    (function(CardWord) {
      CardWord[CardWord["B"] = 1] = "B";
      CardWord[CardWord["I"] = 2] = "I";
      CardWord[CardWord["N"] = 3] = "N";
      CardWord[CardWord["G"] = 4] = "G";
      CardWord[CardWord["O"] = 5] = "O";
    })(CardWord = exports.CardWord || (exports.CardWord = {}));
    exports.PointColor = {
      0: cc.color(79, 130, 233),
      1: cc.color(229, 103, 236),
      2: cc.color(145, 85, 212),
      3: cc.color(42, 197, 183),
      4: cc.color(231, 209, 125)
    };
    exports.StarCard = [ "N.3" ];
    exports.RectCard = [ "B.1", "O.1", "B.5", "O.5" ];
    var OverType;
    (function(OverType) {
      OverType[OverType["TimeUp"] = 0] = "TimeUp";
      OverType[OverType["PoolClear"] = 1] = "PoolClear";
      OverType[OverType["CardClear"] = 2] = "CardClear";
      OverType[OverType["AllBingo"] = 3] = "AllBingo";
    })(OverType = exports.OverType || (exports.OverType = {}));
    exports.OverFont = {
      TimeUp: "bg_result_font1",
      PoolClear: "bg_result_font2",
      CardClear: "bg_result_font2",
      AllBingo: "bg_result_font2"
    };
    exports.TotalSkillCount = 5;
    exports.SkillPercentRange = {
      Max: 140,
      Min: 11
    };
    exports.GoldSkillTimeLimit = {
      Select: 7,
      Click: 4
    };
    exports.SuperTime = {
      LastTime: 10,
      RandomMin: 1.5,
      RandomMax: 7.5,
      ShowTimeMin: .3,
      ShowTimeMax: .7,
      WrongLimit: 5,
      HighLightLimit: 5,
      SubScore: -25
    };
    cc._RF.pop();
  }, {} ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abedd8TuIVPHo+8lpclbjlp", "EventManager");
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
    cc._RF.push(module, "5e448W2wb5EB7XC2O5CyNch", "EventName");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GlobalEvent;
    (function(GlobalEvent) {
      GlobalEvent[GlobalEvent["PLAY_EFFECT"] = 0] = "PLAY_EFFECT";
      GlobalEvent[GlobalEvent["CHANGE_BGM"] = 1] = "CHANGE_BGM";
      GlobalEvent[GlobalEvent["SMALL_BGM"] = 2] = "SMALL_BGM";
      GlobalEvent[GlobalEvent["NORMAL_BGM"] = 3] = "NORMAL_BGM";
      GlobalEvent[GlobalEvent["GAME_START"] = 4] = "GAME_START";
      GlobalEvent[GlobalEvent["ADD_SCORE"] = 5] = "ADD_SCORE";
      GlobalEvent[GlobalEvent["GAME_OVER"] = 6] = "GAME_OVER";
      GlobalEvent[GlobalEvent["ADD_2_NORMAL_REWARD"] = 7] = "ADD_2_NORMAL_REWARD";
      GlobalEvent[GlobalEvent["CHECK_BINGO"] = 8] = "CHECK_BINGO";
      GlobalEvent[GlobalEvent["UPDATE_TOOL_PERCENT"] = 9] = "UPDATE_TOOL_PERCENT";
      GlobalEvent[GlobalEvent["SKILL_DONE"] = 10] = "SKILL_DONE";
      GlobalEvent[GlobalEvent["SUPER_END_COMPLETE"] = 11] = "SUPER_END_COMPLETE";
      GlobalEvent[GlobalEvent["GOLD_POINT_SELECT_DONE"] = 12] = "GOLD_POINT_SELECT_DONE";
      GlobalEvent[GlobalEvent["CHANGE_GAME_MODE"] = 13] = "CHANGE_GAME_MODE";
      GlobalEvent[GlobalEvent["UPDATE_MOUSE_LIGHT"] = 14] = "UPDATE_MOUSE_LIGHT";
      GlobalEvent[GlobalEvent["SCROLL_CARD"] = 15] = "SCROLL_CARD";
      GlobalEvent[GlobalEvent["PXIEL_ENABLE"] = 16] = "PXIEL_ENABLE";
      GlobalEvent[GlobalEvent["SHOW_SKILL_GUIDE"] = 17] = "SHOW_SKILL_GUIDE";
      GlobalEvent[GlobalEvent["MAGIC_DAUB"] = 18] = "MAGIC_DAUB";
    })(GlobalEvent = exports.GlobalEvent || (exports.GlobalEvent = {}));
    cc._RF.pop();
  }, {} ],
  FrameAniBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40ac1Eu6RlIMb5+29+y7eVp", "FrameAniBase");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, playOnFocus = _a.playOnFocus;
    var FrameAniBase = function(_super) {
      __extends(FrameAniBase, _super);
      function FrameAniBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Frames = null;
        _this.Interval = .1;
        _this.Priority = 0;
        _this.Loop = false;
        _this.PlayOnLoad = false;
        _this.currentIndex = 0;
        _this.time = 0;
        _this.isPlay = false;
        _this.listener = [];
        _this.complateEvent = [];
        return _this;
      }
      FrameAniBase_1 = FrameAniBase;
      Object.defineProperty(FrameAniBase.prototype, "Sprite", {
        get: function() {
          return this.node.getComponent(cc.Sprite);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FrameAniBase.prototype, "Animation", {
        set: function(val) {
          this.Frames = val;
        },
        enumerable: true,
        configurable: true
      });
      FrameAniBase.prototype.onFocusInEditor = function() {
        this.time = this.Interval;
        FrameAniBase_1.intervalID = setInterval(this.update.bind(this), .016, .016);
      };
      FrameAniBase.prototype.onLostFocusInEditor = function() {
        clearInterval(FrameAniBase_1.intervalID);
      };
      FrameAniBase.prototype.onLoad = function() {
        this.time = this.Interval;
        this.isPlay = this.PlayOnLoad;
      };
      FrameAniBase.prototype.play = function() {
        this.isPlay = true;
        this.currentIndex = 0;
        false == this.isPlaying && this.callEventComplete();
      };
      FrameAniBase.prototype.playOnLoop = function() {
        this.Loop = true;
        this.play();
      };
      FrameAniBase.prototype.playByStep = function() {
        this.isPlay = true;
        this.nextFrame();
        this.isPlay = false;
      };
      FrameAniBase.prototype.pause = function() {
        this.isPlay = false;
      };
      FrameAniBase.prototype.resume = function() {
        this.isPlay = true;
      };
      FrameAniBase.prototype.stop = function() {
        this.isPlay = false;
        this.currentIndex = 0;
        this.Loop = false;
      };
      FrameAniBase.prototype.onKeyFrame = function(key) {};
      FrameAniBase.prototype.addKeyEventListener = function(f, target) {
        this.listener.push({
          callback: f,
          target: target
        });
      };
      Object.defineProperty(FrameAniBase.prototype, "ListenerCount", {
        get: function() {
          return this.listener.length;
        },
        enumerable: true,
        configurable: true
      });
      FrameAniBase.prototype.clearAllListener = function() {
        this.listener.length = 0;
        return this;
      };
      FrameAniBase.prototype.onComplete = function() {};
      FrameAniBase.prototype.callEventFrame = function() {
        this.onKeyFrame(this.currentIndex);
        for (var _i = 0, _a = this.listener; _i < _a.length; _i++) {
          var callback = _a[_i];
          callback.callback.apply(callback.target, [ this.currentIndex, this["__classname__"] ]);
        }
      };
      FrameAniBase.prototype.callEventComplete = function() {
        this.onComplete();
        for (var _i = 0, _a = this.complateEvent; _i < _a.length; _i++) {
          var complete = _a[_i];
          complete.f.apply(complete.target, [ this["__classname__"] ]);
        }
      };
      FrameAniBase.prototype.addCompleteEvent = function(f, target) {
        this.complateEvent.push({
          f: f,
          target: target
        });
      };
      Object.defineProperty(FrameAniBase.prototype, "TotalFrameCount", {
        get: function() {
          return this.Frames && this.Frames.getSpriteFrames ? this.Frames.getSpriteFrames().length : 0;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FrameAniBase.prototype, "CompleteEventCount", {
        get: function() {
          return this.complateEvent.length;
        },
        enumerable: true,
        configurable: true
      });
      FrameAniBase.prototype.clearCompleteEvent = function() {
        this.complateEvent.length = 0;
        return this;
      };
      FrameAniBase.prototype.start = function() {};
      Object.defineProperty(FrameAniBase.prototype, "isPlaying", {
        get: function() {
          if (this.isPlay && this.Frames && this.Frames.getSpriteFrames && this.Frames.getSpriteFrames().length > 0) {
            var Components = this.getComponents(FrameAniBase_1);
            for (var _i = 0, Components_1 = Components; _i < Components_1.length; _i++) {
              var comp = Components_1[_i];
              if (comp.Priority > this.Priority && comp.isPlaying) return false;
            }
            return true;
          }
          return false;
        },
        enumerable: true,
        configurable: true
      });
      FrameAniBase.prototype.nextFrame = function() {
        if (false == this.isPlaying) {
          this.time = this.Interval;
          return;
        }
        if (this.Frames && this.Frames.getSpriteFrames && this.Frames.getSpriteFrames().length > 0) {
          this.Sprite.spriteFrame = this.Frames.getSpriteFrames()[this.currentIndex];
          this.callEventFrame();
          this.currentIndex = (this.currentIndex + 1) % this.Frames.getSpriteFrames().length;
          if (0 == this.currentIndex && false == this.Loop) {
            this.isPlay = false;
            this.callEventComplete();
          }
        }
      };
      FrameAniBase.prototype.update = function(dt) {
        if (this.time >= this.Interval) {
          this.time = 0;
          this.nextFrame();
        }
        this.time += dt;
      };
      var FrameAniBase_1;
      FrameAniBase.aniName = "FrameAniBase";
      FrameAniBase.intervalID = -1;
      __decorate([ property(cc.SpriteAtlas) ], FrameAniBase.prototype, "Frames", void 0);
      __decorate([ property ], FrameAniBase.prototype, "Interval", void 0);
      __decorate([ property ], FrameAniBase.prototype, "Priority", void 0);
      __decorate([ property ], FrameAniBase.prototype, "Loop", void 0);
      __decorate([ property ], FrameAniBase.prototype, "PlayOnLoad", void 0);
      FrameAniBase = FrameAniBase_1 = __decorate([ ccclass, executeInEditMode, playOnFocus, requireComponent(cc.Sprite) ], FrameAniBase);
      return FrameAniBase;
    }(cc.Component);
    exports.default = FrameAniBase;
    cc._RF.pop();
  }, {} ],
  GameFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ba85CHTExANJR6/Hab8WvI", "GameFactory");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HashMap_1 = require("../Utils/HashMap");
    var ObjPool = function() {
      function ObjPool(template, initSize, poolHandlerComps) {
        this._pool = [];
        this.poolHandlerComps = [];
        this.poolHandlerComps = poolHandlerComps;
        this.template = template;
        this.initPool(initSize);
      }
      ObjPool.prototype.initPool = function(size) {
        for (var i = 0; i < size; ++i) {
          var newNode = cc.instantiate(this.template);
          this.put(newNode);
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
          if (this.poolHandlerComps) {
            var handlers = this.poolHandlerComps;
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
              var handler = handlers_1[_i];
              var comp = obj.getComponent(handler);
              comp && comp.unuse && comp.unuse.apply(comp);
            }
          } else {
            var handlers = obj.getComponents(cc.Component);
            for (var _a = 0, handlers_2 = handlers; _a < handlers_2.length; _a++) {
              var handler = handlers_2[_a];
              handler && handler.unuse && handler.unuse.apply(handler);
            }
          }
          this._pool.push(obj);
        }
      };
      ObjPool.prototype.get = function() {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) _[_i] = arguments[_i];
        var last = this._pool.length - 1;
        if (last < 0) {
          console.warn(" last < 0 ");
          this.initPool(1);
        }
        last = this._pool.length - 1;
        var obj = this._pool[last];
        this._pool.length = last;
        if (this.poolHandlerComps) {
          var handlers = this.poolHandlerComps;
          for (var _a = 0, handlers_3 = handlers; _a < handlers_3.length; _a++) {
            var handler = handlers_3[_a];
            var comp = obj.getComponent(handler);
            comp && comp.reuse && comp.reuse.apply(comp, arguments);
          }
        } else {
          var handlers = obj.getComponents(cc.Component);
          for (var _b = 0, handlers_4 = handlers; _b < handlers_4.length; _b++) {
            var handler = handlers_4[_b];
            handler && handler.reuse && handler.reuse.apply(handler, arguments);
          }
        }
        return obj;
      };
      return ObjPool;
    }();
    var GameFactory = function() {
      function GameFactory() {
        this.objPool = new HashMap_1.HashMap();
      }
      Object.defineProperty(GameFactory, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new GameFactory();
        },
        enumerable: true,
        configurable: true
      });
      GameFactory.prototype.init = function(callback) {
        var _this = this;
        this.doneCallback = callback;
        cc.loader.loadResDir("prefabs/", cc.Prefab, function(err, res, urls) {
          if (err) console.error(" Game Factory init failed:", err); else {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
              var prefab = res_1[_i];
              var nameSplit = prefab.name.split(".");
              var name = nameSplit[0];
              var count = nameSplit[1] ? parseInt(nameSplit[1]) : 30;
              console.log(" init pool:", name, ", count:", count);
              var objPool = new ObjPool(prefab, count);
              _this.objPool.add(name, objPool);
            }
            _this.doneCallback();
          }
        });
      };
      GameFactory.prototype.getObj = function(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        if (this.objPool.has(name)) return this.objPool.get(name).get(args);
        console.error(" objPool dosen't exists this obj:", name);
        return null;
      };
      GameFactory.prototype.putObj = function(name, node) {
        if (this.objPool.has(name)) return this.objPool.get(name).put(node);
        console.error(" objPool dosen't exists this obj:", name);
      };
      return GameFactory;
    }();
    exports.gFactory = GameFactory.inst;
    cc._RF.pop();
  }, {
    "../Utils/HashMap": "HashMap"
  } ],
  GameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "641d0IYt6xLgqqVz9F0bymV", "GameScene");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameFactory_1 = require("./Controller/GameFactory");
    var EventManager_1 = require("./Controller/EventManager");
    var StepController_1 = require("./Controller/StepController");
    var AudioController_1 = require("./Controller/AudioController");
    var EventName_1 = require("./Controller/EventName");
    var Game_1 = require("./Controller/Game");
    var Guide_1 = require("./Guide");
    var CelerSDK_1 = require("./Controller/CelerSDK");
    var Const_1 = require("./Const");
    var Pad_1 = require("./UI/Pad");
    var Card_1 = require("./Card");
    var GoldSkillLayer_1 = require("./GoldSkillLayer");
    var SuperSkillLayer_1 = require("./SuperSkillLayer");
    var ResultLayer_1 = require("./ResultLayer");
    var ShaderManager_1 = require("./Shader/ShaderManager");
    var LoadLayer_1 = require("./LoadLayer");
    var PauseLayer_1 = require("./PauseLayer");
    var LogHandler_1 = require("./Controller/LogHandler");
    var MagicLayer_1 = require("./MagicLayer");
    var Point_1 = require("./Point");
    var Step;
    (function(Step) {
      Step["Prefab"] = "Prefab";
      Step["Audio"] = "Audio";
    })(Step || (Step = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameScene = function(_super) {
      __extends(GameScene, _super);
      function GameScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ResultAnimation = null;
        _this.Background = null;
        _this.TopNode = null;
        _this.TimeLabel = null;
        _this.ScoreLabel = null;
        _this.PageTabButtonRoot = null;
        _this.ResultTitle = null;
        _this.CardPages = null;
        _this.CurrentPoint = null;
        _this.NextPoint = null;
        _this.PointArray = null;
        _this.RecycleArray = null;
        _this.Help = null;
        _this.Guide = null;
        _this.TextAtlas = null;
        _this.UIAtlas = null;
        _this.ToolBar = null;
        _this.BingoButton = null;
        _this.SuperSkillButton = null;
        _this.SkillRoot = null;
        _this.SuperSkillBar = null;
        _this.CurrentSkillProgressLabel = null;
        _this.TotalSkillProgressLabel = null;
        _this.StarSkillLayer = null;
        _this.GoldSkillLayer = null;
        _this.MagicLayer = null;
        _this.SuperSkillLayer = null;
        _this.ResultLayer = null;
        _this.LoadLayer = null;
        _this.TimeFont = null;
        _this.SuperAnimation = null;
        _this.StartTimeCount = null;
        _this.StartTimeCountLabel = null;
        _this.StartTimeAtlas = null;
        _this.PauseLayer = null;
        _this.RemindNode = null;
        _this.showScore = 0;
        _this.score = 0;
        _this.addScoreStep = 0;
        _this.completeCallback = null;
        _this.scoreNodeCache = [];
        _this.timeNodeCache = [];
        _this.toolPercent = 0;
        _this.remindCDTime = 0;
        _this.REMIND_TIME = 3;
        return _this;
      }
      GameScene.prototype.onLoad = function() {
        window["chichihaoshuaihahaha"] = true;
        ShaderManager_1.ShaderManager.inst;
        CelerSDK_1.CelerSDK.inst.init(this.celerOnStart.bind(this));
        cc.debug.setDisplayStats(false);
        Game_1.Game.TopNode = this.TopNode;
        Game_1.Game.CurrentReward = this.CurrentPoint;
        Game_1.Game.RewardArray = this.PointArray;
        this.PageTabButtonRoot.active = false;
        this.ToolBar.progress = 0;
        this.ResultAnimation.node.active = false;
        this.StarSkillLayer.active = false;
        this.GoldSkillLayer.hide();
        this.SuperSkillLayer.hide();
        this.ResultLayer.hide();
        this.PauseLayer.hide();
        this.MagicLayer.hide();
        this.LoadLayer.node.active = true;
        this.TimeLabel.string = CMath.TimeFormat(Const_1.GameTime);
        StepController_1.gStep.register(this.celerReady.bind(this), [ Step.Prefab, Step.Audio ]);
        AudioController_1.gAudio.init(function() {
          StepController_1.gStep.nextStep(Step.Audio);
        });
        GameFactory_1.gFactory.init(function() {
          StepController_1.gStep.nextStep(Step.Prefab);
        });
        this.initEvent();
      };
      GameScene.prototype.celerReady = function() {
        LogHandler_1.LogHandler.inst.log(" celer ready");
        CelerSDK_1.CelerSDK.inst.celerXReady();
      };
      GameScene.prototype.celerOnStart = function() {
        Game_1.Game.prepare();
        for (var _i = 0, _a = this.Background.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.active = child.name == Const_1.Theme[Game_1.Game.Theme];
        }
        this.initGameScene();
        this.LoadLayer.ready();
      };
      GameScene.prototype.updateSuperSkillProgress = function() {
        this.TotalSkillProgressLabel.string = Const_1.TotalSkillCount.toString();
        this.CurrentSkillProgressLabel.string = Game_1.Game.getCurrentSkillUseCount().toString();
        var percent = Game_1.Game.getSkillUsePercent();
        this.SuperSkillBar.active = percent < 1;
        var newHeight = percent * (Const_1.SkillPercentRange.Max - Const_1.SkillPercentRange.Min) + Const_1.SkillPercentRange.Min;
        if (this.SuperSkillBar.height < newHeight) if (percent < 1) {
          this.SuperAnimation.node.opacity = 0;
          this.SuperAnimation.stop(Const_1.SuperAniName.Remind);
          this.SuperAnimation.playAdditive(Const_1.SuperAniName.Percent);
        } else {
          this.SuperAnimation.playAdditive(Const_1.SuperAniName.Get);
          this.SuperAnimation.playAdditive(Const_1.SuperAniName.Remind);
          if (CelerSDK_1.CelerSDK.inst.isNew() && !Game_1.Game.skillGuide[Const_1.SkillType.Super]) {
            Game_1.Game.skillGuide[Const_1.SkillType.Super] = true;
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOW_SKILL_GUIDE, Const_1.SkillType.Super, Game_1.Game.resume);
          }
        } else if (percent < 1) {
          this.SuperAnimation.node.opacity = 0;
          this.SuperAnimation.stop(Const_1.SuperAniName.Remind);
        }
        this.SuperSkillBar.height = newHeight;
        this.SuperSkillButton.interactable = percent >= 1;
      };
      GameScene.prototype.updateButtonGroup = function() {
        for (var _i = 0, _a = this.PageTabButtonRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.getChildByName("Normal").active = child.getComponent(cc.Button).interactable;
          child.getChildByName("Press").active = !child.getChildByName("Normal").active;
          child.getComponent(cc.Button).interactable ? child.getChildByName("Text").opacity = 127.5 : child.getChildByName("Text").opacity = 255;
        }
      };
      GameScene.prototype.setButtonGroupDefault = function() {
        for (var _i = 0, _a = this.PageTabButtonRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.getChildByName("Press").group = "default";
          child.getChildByName("Text").group = "default";
        }
      };
      GameScene.prototype.setButtonGroupUI = function() {
        for (var _i = 0, _a = this.PageTabButtonRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.getChildByName("Press").group = "UI";
          child.getChildByName("Text").group = "UI";
        }
      };
      GameScene.prototype.initGameScene = function() {
        var pageNumber = Game_1.Game.getCardNumber();
        this.PageTabButtonRoot.active = !(pageNumber <= 1);
        var tabCount = this.PageTabButtonRoot.childrenCount;
        for (var i = 1; i <= tabCount; i++) {
          var child = this.PageTabButtonRoot.getChildByName(i.toString());
          if (child && i > pageNumber) child.removeFromParent(true); else {
            child.on(cc.Node.EventType.TOUCH_START, this.scrollCardPage, this);
            1 == i && (child.getComponent(cc.Button).interactable = false);
          }
        }
        this.updateButtonGroup();
        console.log(" tab button count:", this.PageTabButtonRoot.childrenCount);
        this.PageTabButtonRoot.active = pageNumber > 1;
        var padCount = this.CardPages.content.childrenCount;
        for (var i = 1; i <= padCount; i++) {
          var child = this.CardPages.content.getChildByName(i.toString());
          child && i > pageNumber ? this.CardPages.removePage(child) : child.addComponent(Pad_1.default);
        }
        console.log(" pad count:", this.CardPages.content.childrenCount);
        this.CardPages.node.on("scroll-ended", this.onPageTurnDone, this);
        this.CardPages["_unregisterEvent"]();
        for (var _i = 0, _a = this.CardPages.content.children; _i < _a.length; _i++) {
          var pad = _a[_i];
          for (var i = Const_1.CardWord.B; i <= Const_1.CardWord.O; i++) {
            var randomPool = [];
            var randomIndex = [];
            for (var j = 0; j < 15; j++) randomIndex.push(j);
            randomPool.length = randomIndex.length;
            for (var j = (i - 1) * Const_1.CardStep + 1; j <= i * Const_1.CardStep; j++) {
              var index = Math.floor(CMath.getRandom(0, randomIndex.length));
              randomPool[randomIndex[index]] = j;
              randomIndex.splice(index, 1);
            }
            console.log(" -------- randomPool ------------");
            console.log(randomPool);
            for (var j = 1; j <= 5; j++) {
              var value = randomPool.pop();
              var pageIndex = parseInt(pad.name) - 1;
              Game_1.Game.addCurrentCardValue(pageIndex, value);
              var card = GameFactory_1.gFactory.getObj("Card", i, j, value, pageIndex);
              pad.addChild(card);
            }
          }
        }
        console.log(Game_1.Game.getCurrentCardValue());
        this.updateSuperSkillProgress();
        this.updateToolPercent();
      };
      GameScene.prototype.onPageTurnDone = function() {
        for (var _i = 0, _a = this.PageTabButtonRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.getComponent(cc.Button).interactable = child.name != (this.CardPages.getCurrentPageIndex() + 1).toString();
        }
        this.updateButtonGroup();
        this.updateBingoButton();
      };
      GameScene.prototype.scrollCardPage = function(e) {
        if ([ Const_1.SkillType.Normal, Const_1.SkillType.Gold, Const_1.SkillType.Magic ].indexOf(Game_1.Game.getCurMode()) < 0) return;
        if (!e.target.getComponent(cc.Button).interactable) return;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "tab");
        for (var _i = 0, _a = this.PageTabButtonRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          e.target == child ? child.getComponent(cc.Button).interactable = false : child.getComponent(cc.Button).interactable = true;
        }
        this.updateButtonGroup();
        this.CardPages.scrollToPage(parseInt(e.target.name) - 1, 0);
        this.updateBingoButton();
      };
      GameScene.prototype.initEvent = function() {
        var _this = this;
        EventManager_1.gEventMgr.targetOff(this);
        this.CurrentPoint.on(cc.Node.EventType.CHILD_REMOVED, this.onCurrentPointRemoveChild, this);
        this.TopNode.getChildByName("ScoreRoot").on(cc.Node.EventType.CHILD_REMOVED, this.onScoreRootRemoveChild, this);
        this.TopNode.getChildByName("TimeRoot").on(cc.Node.EventType.CHILD_REMOVED, this.onTimeRootRemoveChild, this);
        this.BingoButton.node.on(cc.Node.EventType.TOUCH_END, this.Bingo, this);
        this.SuperSkillButton.node.on(cc.Node.EventType.TOUCH_END, this.superSkill, this);
        this.Help.on(cc.Node.EventType.TOUCH_END, function() {
          Game_1.Game.getCurMode() == Const_1.SkillType.Normal ? _this.PauseLayer.show(function() {
            _this.Guide.show(Guide_1.GuideType.Help, Game_1.Game.pause.bind(Game_1.Game));
          }, Game_1.Game.resume.bind(Game_1.Game)) : console.log(" only the normal mode can open help info");
        }, this);
        this.SkillRoot.on(cc.Node.EventType.CHILD_ADDED, function() {
          console.log("\u83b7\u5f97\u9053\u5177\uff1a" + _this.SkillRoot.childrenCount);
        }, this);
        this.SkillRoot.on(cc.Node.EventType.CHILD_REMOVED, function() {
          console.log("\u5220\u9664\u9053\u5177\uff1a" + _this.SkillRoot.childrenCount);
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.ADD_2_NORMAL_REWARD, this.addNormalReward, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.ADD_SCORE, this.addScore, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.CHECK_BINGO, this.CheckBingo, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_TOOL_PERCENT, this.updateToolPercent, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.SKILL_DONE, this.skillDone, this);
        EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.GAME_OVER, this.onGameOver, this);
        EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.GAME_START, this.startGame, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.SHOW_SKILL_GUIDE, this.showSkillGuide, this);
      };
      GameScene.prototype.startGame = function() {
        var _this = this;
        console.log(" start game time count...");
        this.StartTimeCount.spriteFrame = this.StartTimeAtlas.getSpriteFrame("ae_start1");
        var countStr = 3;
        this.StartTimeCountLabel.string = countStr.toString();
        var count = 1;
        var actions = [];
        var repeatTimes = 12;
        this.LoadLayer.enableBlock(false);
        var _loop_1 = function(i) {
          actions.push(cc.repeat(cc.sequence(cc.delayTime(1 / repeatTimes), cc.callFunc(function() {
            count = Math.max(1, (count + 1) % 7);
            _this.StartTimeCount.spriteFrame = _this.StartTimeAtlas.getSpriteFrame("ae_start" + count);
          })), repeatTimes), cc.callFunc(function() {
            if (i <= 0) {
              _this.StartTimeCountLabel.string = "";
              _this.StartTimeCount.node.scale = .8;
              _this.StartTimeCount.spriteFrame = _this.StartTimeAtlas.getSpriteFrame("ae_LETSGO");
            } else {
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "count");
              _this.StartTimeCountLabel.string = i.toString();
            }
          }));
        };
        for (var i = countStr - 1; i >= 0; i--) _loop_1(i);
        actions.push(cc.callFunc(function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "letsgo");
        }), cc.scaleTo(.1, 1.5), cc.delayTime(.5), cc.scaleTo(.1, 1), cc.fadeOut(.5), cc.callFunc(function() {
          console.log(" Game.start() --");
          _this.onCurrentPointRemoveChild(null);
          Game_1.Game.start();
        }));
        if (CelerSDK_1.CelerSDK.inst.isNew()) this.Guide.show(Guide_1.GuideType.Guide, function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "count");
          _this.StartTimeCount.node.runAction(cc.sequence(actions));
        }); else {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "count");
          this.StartTimeCount.node.runAction(cc.sequence(actions));
        }
      };
      GameScene.prototype.onGameOver = function(overType) {
        var _this = this;
        console.log("OverType:", Const_1.OverType[overType]);
        this.skillDone();
        Game_1.Game.isOver = true;
        this.scoreNodeCache.length = 0;
        this.ResultAnimation.node.active = true;
        this.ResultAnimation.once(cc.Animation.EventType.FINISHED, function() {
          setTimeout(function() {
            _this.ResultLayer.show(overType);
          }, 1e3);
        }, this);
        if (overType == Const_1.OverType.TimeUp) {
          this.ResultAnimation.play("time_up");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SMALL_BGM);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "mouse_time_up");
        } else {
          this.ResultAnimation.play("complete");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SMALL_BGM);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "mouse_complete");
        }
      };
      GameScene.prototype.Bingo = function() {
        if (Game_1.Game.canBingo(this.CardPages.getCurrentPageIndex())) {
          var bingo = Game_1.Game.popBingoCache(this.CardPages.getCurrentPageIndex());
          if (bingo) {
            Game_1.Game.addScore(Const_1.ScoreType.Bingo, bingo.score, 1);
            var overBingoScore = 0;
            for (var _i = 0, _a = bingo.cards; _i < _a.length; _i++) {
              var card = _a[_i];
              overBingoScore += card.bingo();
            }
            overBingoScore > 0 && Game_1.Game.addScore(Const_1.ScoreType.OverBingo, overBingoScore, 1);
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "bingo");
          }
          this.updateBingoButton();
          Game_1.Game.checkIsComplete();
        } else Game_1.Game.addScore(Const_1.ScoreType.Oops, Const_1.Score.BingoFail, 1);
      };
      GameScene.prototype.updateBingoButton = function() {
        Game_1.Game.cardIndex = this.CardPages.getCurrentPageIndex();
        this.BingoButton.node.getChildByName("Ani").active = Game_1.Game.canBingo(this.CardPages.getCurrentPageIndex());
        if (Game_1.Game.canBingo(this.CardPages.getCurrentPageIndex())) {
          this.BingoButton.normalSprite != this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Bingo_Orange_Up) && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "turn_bingo");
          this.BingoButton.normalSprite = this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Bingo_Orange_Up);
          this.BingoButton.hoverSprite = this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Bingo_Orange_Up);
          this.BingoButton.pressedSprite = this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Bingo_Orange_Down);
        } else {
          this.BingoButton.normalSprite = this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Bingo_Blue_Up);
          this.BingoButton.hoverSprite = this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Bingo_Blue_Up);
          this.BingoButton.pressedSprite = this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Bingo_Blue_Down);
        }
      };
      GameScene.prototype.CheckBingo = function(lastCard, checkRect) {
        void 0 === checkRect && (checkRect = false);
        var currentPageIndex = this.CardPages.getCurrentPageIndex() + 1;
        console.log(" current page index:", currentPageIndex);
        var currentPage = this.CardPages.content.getChildByName(currentPageIndex.toString());
        var rectArr = [];
        var oppositeDiagonal = [];
        var positiveDiagonal = [];
        var rowArr = [];
        var colArr = [];
        for (var _i = 0, _a = currentPage.children; _i < _a.length; _i++) {
          var child = _a[_i];
          var card = child.getComponent(Card_1.default);
          if (card) {
            Const_1.RectCard.indexOf(card.Pos) >= 0 && checkRect && card.isLight() && rectArr.push(card);
            card.Index == card.Word && lastCard.Index == lastCard.Word && card.isLight() && positiveDiagonal.push(card);
            card.Index + card.Word == 6 && lastCard.Index + lastCard.Word == 6 && card.isLight() && oppositeDiagonal.push(card);
            if (!card.isLight()) continue;
            card.Index == lastCard.Index && rowArr.push(card);
            card.Word == lastCard.Word && colArr.push(card);
          }
        }
        var bingoArray = [];
        var score = 0;
        rectArr.length < 4 && (rectArr.length = 0);
        if (rectArr.length > 0) {
          console.log(" ------------- \u56db\u8fb9\u89d2 ------------");
          bingoArray = bingoArray.concat(rectArr);
          score += Const_1.Score.Bingo;
          var logArr = [];
          for (var _b = 0, rectArr_1 = rectArr; _b < rectArr_1.length; _b++) {
            var card = rectArr_1[_b];
            logArr.push(card.Pos);
          }
          console.log(logArr);
        }
        oppositeDiagonal.length < 5 && (oppositeDiagonal.length = 0);
        if (oppositeDiagonal.length > 0) {
          console.log(" -------- \u53cd\u5bf9\u89d2 ----------");
          bingoArray = bingoArray.concat(oppositeDiagonal);
          score += Const_1.Score.Bingo;
          var logArr = [];
          for (var _c = 0, oppositeDiagonal_1 = oppositeDiagonal; _c < oppositeDiagonal_1.length; _c++) {
            var card = oppositeDiagonal_1[_c];
            logArr.push(card.Pos);
          }
          console.log(logArr);
        }
        positiveDiagonal.length < 5 && (positiveDiagonal.length = 0);
        if (positiveDiagonal.length > 0) {
          console.log(" ---------- \u6b63\u5bf9\u89d2 ------------");
          bingoArray = bingoArray.concat(positiveDiagonal);
          score += Const_1.Score.Bingo;
          var logArr = [];
          for (var _d = 0, positiveDiagonal_1 = positiveDiagonal; _d < positiveDiagonal_1.length; _d++) {
            var card = positiveDiagonal_1[_d];
            logArr.push(card.Pos);
          }
          console.log(logArr);
        }
        rowArr.length < 5 && (rowArr.length = 0);
        if (rowArr.length > 0) {
          console.log(" -------------  \u7ad6\u5411 ---------------");
          bingoArray = bingoArray.concat(rowArr);
          score += Const_1.Score.Bingo;
          var logArr = [];
          for (var _e = 0, rowArr_1 = rowArr; _e < rowArr_1.length; _e++) {
            var card = rowArr_1[_e];
            logArr.push(card.Pos);
          }
          console.log(logArr);
        }
        colArr.length < 5 && (colArr.length = 0);
        if (colArr.length > 0) {
          console.log(" ----------------- \u6a2a\u5411 ---------------");
          bingoArray = bingoArray.concat(colArr);
          score += Const_1.Score.Bingo;
          var logArr = [];
          for (var _f = 0, colArr_1 = colArr; _f < colArr_1.length; _f++) {
            var card = colArr_1[_f];
            logArr.push(card.Pos);
          }
          console.log(logArr);
        }
        bingoArray.length > 0 && Game_1.Game.pushBingoCache(this.CardPages.getCurrentPageIndex(), {
          cards: bingoArray,
          score: score
        });
        this.updateBingoButton();
      };
      GameScene.prototype.onCurrentPointRemoveChild = function(child) {
        var _this = this;
        if (this.NextPoint.childrenCount <= 0) {
          var point_1 = GameFactory_1.gFactory.getObj("Point", Game_1.Game.getNextPoint());
          this.NextPoint.addChild(point_1);
          point_1.x = 0;
          point_1.y = 0;
          point_1.scale = 0;
          point_1.runAction(cc.sequence(cc.scaleTo(.15, 1), cc.callFunc(function() {
            point_1.setParent(_this.CurrentPoint);
            point_1.x = 0;
            point_1.y = 0;
          })));
        }
      };
      GameScene.prototype.addNormalReward = function(point) {
        var delay = 0;
        if (this.PointArray.childrenCount >= 4) {
          var lastPoint_1 = this.PointArray.children[0];
          lastPoint_1.setPosition(CMath.ConvertToNodeSpaceAR(lastPoint_1, this.RecycleArray));
          lastPoint_1.setParent(this.RecycleArray);
          delay = .1;
          lastPoint_1.runAction(cc.sequence(cc.scaleTo(.1, .5), cc.moveTo(.15, 0, 0), cc.callFunc(function() {
            GameFactory_1.gFactory.putObj("Point", lastPoint_1);
          })));
        }
        for (var _i = 0, _a = this.PointArray.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.runAction(cc.sequence(cc.delayTime(delay), cc.moveBy(.15, -child.width - 20, 0)));
        }
        point.setPosition(CMath.ConvertToNodeSpaceAR(point, this.PointArray));
        point.setParent(this.PointArray);
        point.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(function() {}), cc.spawn(cc.moveTo(.15, 0, 0), cc.scaleTo(.15, .9))));
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "new_point");
      };
      GameScene.prototype.addScore = function(type, score, scale, pos) {
        var _this = this;
        void 0 === pos && (pos = cc.v2(49, 704));
        var totalScore = Game_1.Game.getScore();
        var scoreLabel = GameFactory_1.gFactory.getObj(Const_1.PrefabName.Score, score, scale, this.ScoreLabel.node, function() {
          _this.score = totalScore;
          _this.addScoreStep = (_this.score - _this.showScore) / 20;
          GameFactory_1.gFactory.putObj(Const_1.PrefabName.Score, scoreLabel);
          console.log(" score:", _this.score, " , show:", _this.showScore, ", step:", _this.addScoreStep);
        }, this.TextAtlas.getSpriteFrame(Const_1.ScoreText[Const_1.ScoreType[type]]));
        scoreLabel.setPosition(pos);
        if (this.TopNode.getChildByName("ScoreRoot").childrenCount > 0) {
          console.log(" font node cache!");
          this.scoreNodeCache.push(scoreLabel);
        } else this.TopNode.getChildByName("ScoreRoot").addChild(scoreLabel);
      };
      GameScene.prototype.addTime = function() {
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "add_time");
        var timeBonus = GameFactory_1.gFactory.getObj(Const_1.PrefabName.Time, function() {
          GameFactory_1.gFactory.putObj(Const_1.PrefabName.Time, timeBonus);
        }, this.TimeLabel.node);
        timeBonus.setPosition(0, 0);
        this.TopNode.getChildByName("TimeRoot").childrenCount > 0 ? this.timeNodeCache.push(timeBonus) : this.TopNode.getChildByName("TimeRoot").addChild(timeBonus);
      };
      GameScene.prototype.onScoreRootRemoveChild = function(child) {
        this.scoreNodeCache.length > 0 && this.TopNode.getChildByName("ScoreRoot").addChild(this.scoreNodeCache.shift());
      };
      GameScene.prototype.onTimeRootRemoveChild = function(child) {
        this.timeNodeCache.length > 0 && this.TopNode.getChildByName("TimeRoot").addChild(this.timeNodeCache.shift());
      };
      GameScene.prototype.updateTimeCount = function() {
        var time = Math.floor(Game_1.Game.getGameTime());
        if (time > 5) return;
        var font = this.TimeLabel.node.getChildByName("font").getComponent(cc.Sprite);
        var timeFrame = this.TimeFont.getSpriteFrame("bg_time" + time);
        if (font.spriteFrame == timeFrame) return;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "count");
        font.spriteFrame = timeFrame;
        font.node.runAction(cc.sequence(cc.fadeTo(.2, 255), cc.scaleTo(.1, 1.2), cc.delayTime(.5), cc.scaleTo(.1, 1), cc.fadeTo(.1, 0)));
      };
      GameScene.prototype.updateToolPercent = function() {
        this.toolPercent = Game_1.Game.getToolPercent();
        this.toolPercent = CMath.Clamp(this.toolPercent, 1, 0);
      };
      GameScene.prototype.showSkillGuide = function(type, callback) {
        console.log(" show skill guide:", Const_1.SkillType[type]);
        this.Guide.showSkillGuide(type, callback);
      };
      GameScene.prototype.addSkill = function() {
        if (Game_1.Game.getGameTime() <= 0) {
          console.log(" game time up -addSkill");
          return;
        }
        if (this.SkillRoot.childrenCount >= Const_1.MaxSkillEquipCount) return;
        Game_1.Game.addToolPercent(-1);
        this.ToolBar.progress -= .01;
        var skill = Game_1.Game.getSkill();
        var skillCallback;
        var icon = "";
        console.log(" \u83b7\u5f97\u6280\u80fd:", Const_1.SkillType[skill]);
        switch (skill) {
         case Const_1.SkillType.Gold:
          skillCallback = this.goldSkill.bind(this);
          icon = Const_1.UI_Atlas.Skill_Icon_Gold;
          break;

         case Const_1.SkillType.Star:
          skillCallback = this.starSkill.bind(this);
          icon = Const_1.UI_Atlas.Skill_Icon_Star;
          break;

         case Const_1.SkillType.Time:
          skillCallback = this.timeSkill.bind(this);
          icon = Const_1.UI_Atlas.Skill_Icon_Time;
          break;

         case Const_1.SkillType.Magic:
          skillCallback = this.magicSkill.bind(this);
          icon = Const_1.UI_Atlas.Skill_Icon_Magic;
        }
        var skillButton = GameFactory_1.gFactory.getObj("Skill", skillCallback, this.UIAtlas.getSpriteFrame(icon), skill, this.SkillRoot.childrenCount);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "get_skill");
        this.SkillRoot.addChild(skillButton);
        skillButton.zIndex = this.SkillRoot.childrenCount;
      };
      GameScene.prototype.magicSkill = function() {
        if (Game_1.Game.getGameTime() <= 0) {
          console.log(" game time up - magicSkill");
          return;
        }
        if (Game_1.Game.checkIsFull(this.CardPages.getCurrentPageIndex())) {
          console.log(" \u6b64\u5361\u7247\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1magicSkill");
          return;
        }
        var currentReward = Game_1.Game.CurrentReward.children[0];
        if (!currentReward || !currentReward.getComponent(Point_1.default)) {
          console.log(" not CurrentRewardmagicSkill !");
          return;
        }
        var point = currentReward.getComponent(Point_1.default);
        if (Game_1.Game.checkIsFullFromWord(this.CardPages.getCurrentPageIndex(), point.Word)) {
          console.log(" \u6b64\u5217\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1magicSkill");
          return;
        }
        if (Game_1.Game.getCurMode() != Const_1.SkillType.Normal) {
          console.log(" not normal mode!magicSkill");
          return;
        }
        Game_1.Game.pause();
        console.log("  \u9b54\u6cd5\u9053\u5177");
        this.MagicLayer.show(point.Value);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "skill");
        Game_1.Game.setCurClickMode(Const_1.SkillType.Magic);
        this.setButtonGroupDefault();
      };
      GameScene.prototype.starSkill = function() {
        if (Game_1.Game.getGameTime() <= 0) {
          console.log(" game time up - starSkill");
          return;
        }
        console.log("  \u84dd\u8272\u9053\u5177");
        if (Game_1.Game.checkIsFull(this.CardPages.getCurrentPageIndex())) {
          console.log(" \u6b64\u5361\u7247\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1");
          return;
        }
        if (Game_1.Game.getCurMode() != Const_1.SkillType.Normal) {
          console.log(" not normal mode!");
          return;
        }
        Game_1.Game.pause();
        this.StarSkillLayer.active = true;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "skill");
        Game_1.Game.setCurClickMode(Const_1.SkillType.Star);
        this.setButtonGroupDefault();
      };
      GameScene.prototype.skillDone = function() {
        Game_1.Game.resume();
        Game_1.Game.setCurClickMode(Const_1.SkillType.Normal);
        this.StarSkillLayer.active = false;
        this.GoldSkillLayer.hide();
        this.SuperSkillLayer.hide();
        this.MagicLayer.hide();
        this.setButtonGroupUI();
        this.updateSuperSkillProgress();
      };
      GameScene.prototype.goldSkill = function() {
        if (Game_1.Game.getGameTime() <= 0) {
          console.log(" game time up - goldSkill");
          return;
        }
        console.log(" \u91d1\u8272\u9053\u5177");
        if (Game_1.Game.checkIsFull(this.CardPages.getCurrentPageIndex())) {
          console.log(" \u6b64\u5361\u7247\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1");
          return;
        }
        if (Game_1.Game.getCurMode() != Const_1.SkillType.Normal) {
          console.log(" not normal mode!");
          return;
        }
        Game_1.Game.pause();
        this.GoldSkillLayer.show(this.CardPages.getCurrentPageIndex());
        Game_1.Game.setCurClickMode(Const_1.SkillType.Gold);
        this.setButtonGroupDefault();
      };
      GameScene.prototype.timeSkill = function() {
        if (Game_1.Game.getGameTime() <= 0) {
          console.log(" game time up - timeSkill");
          return;
        }
        console.log(" \u65f6\u95f4\u9053\u5177");
        if (Game_1.Game.getCurMode() != Const_1.SkillType.Normal) {
          console.log(" not normal mode!");
          return;
        }
        Game_1.Game.addGameTime(Const_1.SkillTimeBouns);
        this.updateSuperSkillProgress();
        this.addTime();
      };
      GameScene.prototype.superSkill = function() {
        var _this = this;
        if (Game_1.Game.getGameTime() <= 0) {
          console.log(" game time up superSkill");
          return;
        }
        if (!this.SuperSkillButton.interactable) {
          console.log("this.SuperSkillButton.interactable:", this.SuperSkillButton.interactable);
          return;
        }
        console.log(" \u8d85\u7ea7\u9053\u5177");
        if (Game_1.Game.checkIsFull(this.CardPages.getCurrentPageIndex())) {
          console.log(" \u6b64\u5361\u7247\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1");
          return;
        }
        if (Game_1.Game.getCurMode() != Const_1.SkillType.Normal) {
          console.log(" not normal mode!");
          return;
        }
        Game_1.Game.pause();
        Game_1.Game.clearSkillUseCount();
        Game_1.Game.setCurClickMode(Const_1.SkillType.Super);
        this.setButtonGroupDefault();
        EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.SCROLL_CARD, function(index) {
          _this.CardPages.scrollToPage(index, 0);
          for (var _i = 0, _a = _this.PageTabButtonRoot.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent(cc.Button).interactable = (_this.CardPages.getCurrentPageIndex() + 1).toString() != child.name;
          }
          _this.updateButtonGroup();
        }, this);
        this.SuperSkillLayer.show();
      };
      GameScene.prototype.update = function(dt) {
        if (Game_1.Game.isStart) {
          if (!this.Guide.node.active && !Game_1.Game.isPause() && !this.PauseLayer.node.active) {
            Game_1.Game.addGameTime(-dt);
            this.TimeLabel.string = CMath.TimeFormat(Game_1.Game.getGameTime());
            if (30 == Math.floor(Game_1.Game.getGameTime()) && this.TimeLabel.node.getChildByName("noTime") && this.TimeLabel.node.getChildByName("noTime").opacity <= 0) {
              this.TimeLabel.getComponent(cc.Animation).play();
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHANGE_BGM, "bgm_30");
            }
            this.updateTimeCount();
          }
          if (this.ToolBar.progress != this.toolPercent) {
            var step = 0 == this.toolPercent ? -.1 : this.toolPercent > this.ToolBar.progress ? .01 : -.01;
            this.ToolBar.progress += step;
            this.ToolBar.progress = CMath.Clamp(this.ToolBar.progress, 1, 0);
          }
          this.ToolBar.progress >= 1 && this.addSkill();
          Game_1.Game.isToolFull = this.ToolBar.progress >= 1 && this.SkillRoot.childrenCount >= Const_1.MaxSkillEquipCount;
          if (Game_1.Game.isToolFull) {
            this.remindCDTime += dt;
            if (this.remindCDTime >= this.REMIND_TIME && this.RemindNode.opacity <= 0 && this.RemindNode.getNumberOfRunningActions() <= 0) {
              this.RemindNode.stopAllActions();
              this.RemindNode.opacity = .1;
              this.RemindNode.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.1), cc.delayTime(2), cc.fadeOut(.15), cc.delayTime(this.REMIND_TIME))));
            }
            this.ToolBar.barSprite.spriteFrame != this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Skill_Full) && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "get_horce");
            this.ToolBar.barSprite.spriteFrame = this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Skill_Full);
          } else {
            this.remindCDTime = 0;
            this.RemindNode.stopAllActions();
            this.RemindNode.opacity = 0;
            this.ToolBar.barSprite.spriteFrame = this.UIAtlas.getSpriteFrame(Const_1.UI_Atlas.Skill_Normal);
          }
          if (this.showScore != this.score) {
            this.showScore += this.addScoreStep;
            (this.addScoreStep > 0 && this.showScore > this.score || this.addScoreStep < 0 && this.showScore < this.score) && (this.showScore = this.score);
            this.ScoreLabel.string = Math.floor(this.showScore).toString();
          }
        }
        if (Game_1.Game.isOver && this.score == this.showScore && this.completeCallback) {
          this.completeCallback();
          this.completeCallback = null;
        }
      };
      __decorate([ property(cc.Animation) ], GameScene.prototype, "ResultAnimation", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "Background", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "TopNode", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "TimeLabel", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "ScoreLabel", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "PageTabButtonRoot", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "ResultTitle", void 0);
      __decorate([ property(cc.PageView) ], GameScene.prototype, "CardPages", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "CurrentPoint", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "NextPoint", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "PointArray", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "RecycleArray", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "Help", void 0);
      __decorate([ property(Guide_1.default) ], GameScene.prototype, "Guide", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "TextAtlas", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "UIAtlas", void 0);
      __decorate([ property(cc.ProgressBar) ], GameScene.prototype, "ToolBar", void 0);
      __decorate([ property(cc.Button) ], GameScene.prototype, "BingoButton", void 0);
      __decorate([ property(cc.Button) ], GameScene.prototype, "SuperSkillButton", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "SkillRoot", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "SuperSkillBar", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "CurrentSkillProgressLabel", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "TotalSkillProgressLabel", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "StarSkillLayer", void 0);
      __decorate([ property(GoldSkillLayer_1.default) ], GameScene.prototype, "GoldSkillLayer", void 0);
      __decorate([ property(MagicLayer_1.default) ], GameScene.prototype, "MagicLayer", void 0);
      __decorate([ property(SuperSkillLayer_1.default) ], GameScene.prototype, "SuperSkillLayer", void 0);
      __decorate([ property(ResultLayer_1.default) ], GameScene.prototype, "ResultLayer", void 0);
      __decorate([ property(LoadLayer_1.default) ], GameScene.prototype, "LoadLayer", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "TimeFont", void 0);
      __decorate([ property(cc.Animation) ], GameScene.prototype, "SuperAnimation", void 0);
      __decorate([ property(cc.Sprite) ], GameScene.prototype, "StartTimeCount", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "StartTimeCountLabel", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "StartTimeAtlas", void 0);
      __decorate([ property(PauseLayer_1.default) ], GameScene.prototype, "PauseLayer", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "RemindNode", void 0);
      GameScene = __decorate([ ccclass ], GameScene);
      return GameScene;
    }(cc.Component);
    exports.default = GameScene;
    cc._RF.pop();
  }, {
    "./Card": "Card",
    "./Const": "Const",
    "./Controller/AudioController": "AudioController",
    "./Controller/CelerSDK": "CelerSDK",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Controller/GameFactory": "GameFactory",
    "./Controller/LogHandler": "LogHandler",
    "./Controller/StepController": "StepController",
    "./GoldSkillLayer": "GoldSkillLayer",
    "./Guide": "Guide",
    "./LoadLayer": "LoadLayer",
    "./MagicLayer": "MagicLayer",
    "./PauseLayer": "PauseLayer",
    "./Point": "Point",
    "./ResultLayer": "ResultLayer",
    "./Shader/ShaderManager": "ShaderManager",
    "./SuperSkillLayer": "SuperSkillLayer",
    "./UI/Pad": "Pad"
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af369eKsM9Cn4vz3KUTDwcJ", "Game");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./EventManager");
    var EventName_1 = require("./EventName");
    var Const_1 = require("../Const");
    var HashMap_1 = require("../Utils/HashMap");
    var GameCtrl = function() {
      function GameCtrl() {
        this.CurrentReward = null;
        this.RewardArray = null;
        this.TopNode = null;
        this.FontRoot = null;
        this.score = 0;
        this.bingoScore = {};
        this.overBingoTimes = new HashMap_1.HashMap();
        this.numberRandomPool = [];
        this.currentCardPool = new HashMap_1.HashMap();
        this.skillUseCount = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.cardAllBingoCount = new HashMap_1.HashMap();
        this.highLightCardCount = new HashMap_1.HashMap();
        this.highLightCardCountByWord = new HashMap_1.HashMap();
        this.goldSelectValue = 0;
        this.currentSkillPool = [];
        this.skillUsedRecord = [];
        this.totalOverBingoTimes = 0;
        this.totalHighLightCount = 0;
        this.cardIndex = 0;
        this.skillGuide = {};
        this.superWrongCount = 0;
        this.superHighLightCount = 0;
        this.bingoCache = new HashMap_1.HashMap();
        this.toolPercent = 0;
        this.gameTime = 0;
        this.ispause = false;
        this.cardNumber = 0;
        this.isStart = false;
        this.isOver = false;
        this.isCheckScore = false;
        this.isToolFull = false;
        this.TIME_TOOL_COUNT_LIMIT = 3;
        this.timeToolTotalCount = 0;
        this.toolRound = 0;
        this.hasDaubMagicBall = false;
      }
      Object.defineProperty(GameCtrl, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new GameCtrl();
        },
        enumerable: true,
        configurable: true
      });
      GameCtrl.prototype.start = function() {
        this.isStart = true;
        this.isOver = false;
        this.isCheckScore = false;
      };
      GameCtrl.prototype.checkScore = function() {
        if (this.isCheckScore) return;
      };
      GameCtrl.prototype.superStart = function() {
        this.superHighLightCount = 0;
        this.superWrongCount = 0;
      };
      GameCtrl.prototype.pause = function() {
        console.log(" game --- pause ");
        this.ispause = true;
      };
      GameCtrl.prototype.resume = function() {
        console.log(" game --- resume ");
        this.ispause = false;
      };
      GameCtrl.prototype.getAllBingoCardCount = function() {
        return this.cardAllBingoCount.keys.length;
      };
      GameCtrl.prototype.addAllBingoCardCount = function(pageIndex) {
        this.cardAllBingoCount.add(pageIndex, 1);
        console.log(" card complete bingo:", this.cardAllBingoCount.keys.length, " , extra score:", Const_1.Score.AllBingo);
        this.addScore(Const_1.ScoreType.AllBingo, Const_1.Score.AllBingo, 1);
      };
      GameCtrl.prototype.getNextPoint = function() {
        if (window["chichihaoshuaihahaha"]) return this.getNextCurrentCardPoint(this.cardIndex, false);
        if (this.numberRandomPool.length > 0) return this.numberRandomPool.pop();
        console.log("  over type pool clear !!");
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GAME_OVER, Const_1.OverType.PoolClear);
        return Math.floor(75 * CMath.getRandom() + 1);
      };
      GameCtrl.prototype.setCurClickMode = function(mode) {
        if (this.curClickMode == mode) return;
        this.curClickMode = mode;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHANGE_GAME_MODE);
      };
      GameCtrl.prototype.getCurMode = function() {
        return this.curClickMode;
      };
      GameCtrl.prototype.getScore = function() {
        return this.score;
      };
      GameCtrl.prototype.addScore = function(type, score, scale, pos) {
        score > 0 ? this.addStreak() : this.clearStreak();
        this.score + score < 0 && (score = -this.score);
        if (0 == score) {
          console.log(" play effect oop");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "oop");
          return;
        }
        score < 0 && this.clearToolPercent();
        this.score += score;
        this.score = Math.max(0, this.score);
        this.addBingoScore(type, score);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.ADD_SCORE, type, score, scale, pos);
      };
      GameCtrl.prototype.addStreak = function() {
        this.streak++;
        this.maxStreak++;
      };
      GameCtrl.prototype.clearStreak = function() {
        this.streak = 0;
      };
      GameCtrl.prototype.getCardNumber = function() {
        return this.cardNumber;
      };
      GameCtrl.prototype.addToolPercent = function(percent) {
        if ("number" != typeof percent) {
          console.error(" tool percent is not a number !");
          return;
        }
        if (exports.Game.isToolFull && percent > 0) {
          console.log(" tool full:", this.toolPercent, ", add:", percent);
          return;
        }
        this.toolPercent += percent;
        console.log(" tool percent:", this.toolPercent, ", add:", percent);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_TOOL_PERCENT);
      };
      GameCtrl.prototype.clearToolPercent = function() {
        this.toolPercent = 0;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_TOOL_PERCENT);
      };
      GameCtrl.prototype.getToolPercent = function() {
        return this.toolPercent;
      };
      GameCtrl.prototype.pushBingoCache = function(pageIndex, bingos) {
        this.bingoCache.has(pageIndex) ? this.bingoCache.get(pageIndex).push(bingos) : this.bingoCache.add(pageIndex, [ bingos ]);
      };
      GameCtrl.prototype.popBingoCache = function(pageIndex) {
        if (this.bingoCache.has(pageIndex)) {
          var bingo = this.bingoCache.get(pageIndex).pop();
          this.bingoCache.get(pageIndex).length <= 0 && this.bingoCache.remove(pageIndex);
          return bingo;
        }
        return null;
      };
      GameCtrl.prototype.canBingo = function(pageIndex) {
        return this.bingoCache.has(pageIndex) && this.bingoCache.get(pageIndex).length > 0;
      };
      GameCtrl.prototype.addCurrentCardValue = function(pageIndex, val) {
        this.currentCardPool.has(pageIndex) ? this.currentCardPool.get(pageIndex).push(val) : this.currentCardPool.add(pageIndex, [ val ]);
      };
      GameCtrl.prototype.replaceCurrentCardValue = function(pageIndex, old, newVal) {
        if (this.currentCardPool.has(pageIndex)) {
          var index = this.currentCardPool.get(pageIndex).indexOf(old);
          index >= 0 && this.currentCardPool.get(pageIndex).splice(index, 1);
          this.currentCardPool.get(pageIndex).push(newVal);
        } else this.currentCardPool.add(pageIndex, [ newVal ]);
      };
      GameCtrl.prototype.getCurrentCardValue = function() {
        return this.currentCardPool;
      };
      GameCtrl.prototype.getCurrentPageValues = function(pageIndex) {
        if (this.currentCardPool.has(pageIndex)) return this.currentCardPool.get(pageIndex).concat();
        return [];
      };
      GameCtrl.prototype.delCurrentCardValue = function(pageIndex, val) {
        if (!this.currentCardPool.has(pageIndex)) return;
        var index = this.currentCardPool.get(pageIndex).indexOf(val);
        console.log(" del current card :", pageIndex, " , val:", val, ", index:", index);
        if (index >= 0) {
          this.currentCardPool.get(pageIndex).splice(index, 1);
          console.log(" del card val:", this.currentCardPool.get(pageIndex).length);
          this.currentCardPool.get(pageIndex).length <= 0 && this.currentCardPool.remove(pageIndex);
        }
      };
      GameCtrl.prototype.getNextCurrentCardPoint = function(pageIndex, random, del) {
        void 0 === random && (random = false);
        void 0 === del && (del = true);
        if (!this.currentCardPool.has(pageIndex)) return Math.floor(75 * CMath.getRandom() + 1);
        if (this.currentCardPool.length > 0) {
          var pointVal = 0;
          if (random) {
            var randomIndex = Math.floor(CMath.getRandom(0, this.currentCardPool.get(pageIndex).length));
            pointVal = this.currentCardPool.get(pageIndex)[randomIndex];
            del && this.currentCardPool.get(pageIndex).splice(randomIndex, 1);
          } else if (del) pointVal = this.currentCardPool.get(pageIndex).pop(); else {
            var last = this.currentCardPool.get(pageIndex).length - 1;
            pointVal = this.currentCardPool.get(pageIndex)[last];
          }
          this.currentCardPool.get(pageIndex).length <= 0 && this.currentCardPool.remove(pageIndex);
          return pointVal;
        }
        return Math.floor(75 * CMath.getRandom() + 1);
      };
      GameCtrl.prototype.getOverBingoTimes = function(pageIndex) {
        return this.overBingoTimes.get(pageIndex);
      };
      GameCtrl.prototype.getTotalBingoTimes = function() {
        return this.totalOverBingoTimes;
      };
      GameCtrl.prototype.addHighLightCardByWord = function(pageIndex, word) {
        this.highLightCardCountByWord.has(pageIndex) || this.highLightCardCountByWord.add(pageIndex, new HashMap_1.HashMap());
        var wordHash = this.highLightCardCountByWord.get(pageIndex);
        wordHash.has(word) || wordHash.add(word, 0);
        wordHash.add(word, wordHash.get(word) + 1);
      };
      GameCtrl.prototype.addHighLightCard = function(pageIndex) {
        this.highLightCardCount.has(pageIndex) || this.highLightCardCount.add(pageIndex, 0);
        this.highLightCardCount.add(pageIndex, this.highLightCardCount.get(pageIndex) + 1);
        this.curClickMode == Const_1.SkillType.Super && this.highLightCardCount.get(pageIndex) >= 25 && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SUPER_END_COMPLETE);
        this.totalHighLightCount++;
        console.log("--------\u5361\u7247-", pageIndex, "- \u70b9\u4eae:", this.highLightCardCount.get(pageIndex), " \u5f20", " , \u603b\u5171\u70b9\u4eae:", this.totalHighLightCount);
      };
      GameCtrl.prototype.addOverBingoTimes = function(pageIndex) {
        this.overBingoTimes.has(pageIndex) || this.overBingoTimes.add(pageIndex, 0);
        this.totalOverBingoTimes++;
        this.overBingoTimes.add(pageIndex, this.overBingoTimes.get(pageIndex) + 1);
        console.log("--------\u5361\u7247-", pageIndex, "- \u53e0\u52a0bingo:", this.overBingoTimes.get(pageIndex), " \u6b21", " , \u603b\u5171\u53e0\u52a0bingo:", this.totalOverBingoTimes);
        if (this.overBingoTimes.get(pageIndex) >= 39) {
          console.error(" card:", pageIndex, " has all bingo!!");
          this.addAllBingoCardCount(pageIndex);
        }
      };
      GameCtrl.prototype.checkIsComplete = function() {
        if (this.cardAllBingoCount.keys.length >= this.cardNumber) {
          console.log(this.cardNumber, " all cards has all complete bingo! \u725b\u6279\u725b\u6279:", this.bingoScore[Const_1.ScoreType[Const_1.ScoreType.OverBingoScore]]);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GAME_OVER, Const_1.OverType.AllBingo);
        }
      };
      GameCtrl.prototype.checkIsFull = function(pageIndex) {
        return this.highLightCardCount.get(pageIndex) && this.highLightCardCount.get(pageIndex) >= 25;
      };
      GameCtrl.prototype.checkIsFullFromWord = function(pageIndex, word) {
        var page = this.highLightCardCountByWord.get(pageIndex);
        if (!page) return false;
        var wordCount = page.get(word);
        if (!wordCount) return false;
        return wordCount >= 5;
      };
      GameCtrl.prototype.clearSkillUseCount = function() {
        this.skillUseCount = 0;
      };
      GameCtrl.prototype.getSkillUsePercent = function() {
        return this.skillUseCount / Const_1.TotalSkillCount;
      };
      GameCtrl.prototype.getCurrentSkillUseCount = function() {
        return this.skillUseCount;
      };
      GameCtrl.prototype.initSkillPool = function(count) {
        for (var i = 0; i < count; i++) {
          var pool = this.timeToolTotalCount >= this.TIME_TOOL_COUNT_LIMIT ? [ Const_1.SkillType.Star, Const_1.SkillType.Gold, Const_1.SkillType.Magic ] : [ Const_1.SkillType.Star, Const_1.SkillType.Gold, Const_1.SkillType.Time, Const_1.SkillType.Magic ];
          var randomPool = pool.concat();
          this.toolRound++;
          if (this.toolRound <= 3) {
            var index = randomPool.indexOf(Const_1.SkillType.Time);
            index >= 0 && randomPool.splice(index, 1);
          }
          if (this.skillUsedRecord[this.skillUsedRecord.length - 1] == Const_1.SkillType.Time && 0 == i && this.skillUsedRecord.length > 0 || i > 0 && this.currentSkillPool[this.currentSkillPool.length - 1] == Const_1.SkillType.Time) {
            var index = randomPool.indexOf(Const_1.SkillType.Time);
            index >= 0 && randomPool.splice(index, 1);
          }
          if (0 == i && this.skillUsedRecord.length >= 2 && this.skillUsedRecord[this.skillUsedRecord.length - 1] == this.skillUsedRecord[this.skillUsedRecord.length - 2]) {
            var index = randomPool.indexOf(this.skillUsedRecord[this.skillUsedRecord.length - 1]);
            index >= 0 && randomPool.splice(index, 1);
          }
          if (i >= 2 && this.currentSkillPool.length >= 2 && this.currentSkillPool[this.currentSkillPool.length - 1] == this.currentSkillPool[this.currentSkillPool.length - 2]) {
            var index = randomPool.indexOf(this.currentSkillPool[this.currentSkillPool.length - 1]);
            index >= 0 && randomPool.splice(index, 1);
          }
          randomPool.length <= 0 && (randomPool = pool.concat());
          var poolarr = [];
          for (var _i = 0, randomPool_1 = randomPool; _i < randomPool_1.length; _i++) {
            var skill_1 = randomPool_1[_i];
            poolarr.push(Const_1.SkillType[skill_1]);
          }
          var skill = randomPool[Math.floor(CMath.getRandom(0, randomPool.length))];
          skill == Const_1.SkillType.Time && this.timeToolTotalCount++;
          this.currentSkillPool.push(skill);
        }
        var logArr = [];
        for (var _a = 0, _b = this.currentSkillPool; _a < _b.length; _a++) {
          var skill = _b[_a];
          logArr.push(Const_1.SkillType[skill]);
        }
        console.log("  skill pool init ", logArr);
      };
      GameCtrl.prototype.useSkill = function(skill) {
        this.skillUsedRecord.push(skill);
        if (this.skillUseCount >= Const_1.TotalSkillCount) return;
        this.skillUseCount += 1;
      };
      GameCtrl.prototype.getSkill = function() {
        this.currentSkillPool.length <= 0 && this.initSkillPool(10);
        return this.currentSkillPool.pop();
      };
      GameCtrl.prototype.prepare = function() {
        this.score = 0;
        this.gameTime = Const_1.GameTime;
        this.streak = 0;
        this.maxStreak = 0;
        this.curClickMode = Const_1.SkillType.Normal;
        this.overBingoTimes.clear();
        this.totalOverBingoTimes = 0;
        this.totalHighLightCount = 0;
        this.highLightCardCount.clear();
        this.toolPercent = 0;
        this.bingoScore = {};
        this.bingoCache.clear();
        this.currentCardPool.clear();
        this.currentSkillPool = [];
        this.skillUsedRecord = [];
        this.skillUseCount = 0;
        this.ispause = false;
        this.isOver = false;
        this.isCheckScore = false;
        this.cardAllBingoCount.clear();
        this.numberRandomPool.length = Const_1.TargetRange.End - Const_1.TargetRange.Start + 1;
        var allIndex = [];
        for (var i = 0; i < this.numberRandomPool.length; i++) allIndex.push(i);
        for (var i = Const_1.TargetRange.Start; i <= Const_1.TargetRange.End; i++) {
          var randomIndex = Math.floor(CMath.getRandom(0, allIndex.length));
          this.numberRandomPool[allIndex[randomIndex]] = i;
          allIndex.splice(randomIndex, 1);
        }
        console.log(" ------------------ \u968f\u673a\u6c60 --------------------");
        console.log(this.numberRandomPool);
        this.cardNumber = Math.floor(CMath.getRandom(Const_1.CardNumber.Min, Const_1.CardNumber.Max));
        console.log(" \u5361\u7247\u6570\u91cf:", this.cardNumber);
        for (var i = 0; i < 5; i++) this.Theme = Const_1.ThemePool[Math.floor(CMath.getRandom(0, Const_1.ThemePool.length))];
        console.log("\u6e38\u620f\u4e3b\u9898:", Const_1.Theme[this.Theme]);
        this.initSkillPool(20);
      };
      GameCtrl.prototype.addGameTime = function(time) {
        this.gameTime += time;
        if (this.gameTime <= 0) {
          this.gameTime = 0;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GAME_OVER, Const_1.OverType.TimeUp);
        }
      };
      GameCtrl.prototype.getGameTime = function() {
        return this.gameTime;
      };
      GameCtrl.prototype.addBingoScore = function(scoreType, score) {
        var scoreKey = Const_1.ScoreType[scoreType];
        this.bingoScore[scoreKey] || (this.bingoScore[scoreKey] = 0);
        this.bingoScore[scoreKey] += score;
        this.addToolPercent(Const_1.ToolPercent[scoreKey]);
        this.bingoScore[Const_1.ScoreType[Const_1.ScoreType.TotalScore]] || (this.bingoScore[Const_1.ScoreType[Const_1.ScoreType.TotalScore]] = 0);
        this.bingoScore[Const_1.ScoreType[Const_1.ScoreType.TotalScore]] += score;
        switch (scoreType) {
         case Const_1.ScoreType.Gold:
         case Const_1.ScoreType.Star:
         case Const_1.ScoreType.Mouse:
         case Const_1.ScoreType.Perfect:
         case Const_1.ScoreType.Nice:
         case Const_1.ScoreType.Great:
          var bonusCountKey = Const_1.ScoreCountType[Const_1.ScoreCountType.SpeedBonusCount];
          var correctCountKey = Const_1.ScoreCountType[Const_1.ScoreCountType.CorrectCount];
          var scoreKey_1 = Const_1.ScoreType[Const_1.ScoreType.CorrectScore];
          var bonusKey = Const_1.ScoreType[Const_1.ScoreType.SpeedScore];
          this.bingoScore[correctCountKey] || (this.bingoScore[correctCountKey] = 0);
          this.bingoScore[correctCountKey]++;
          this.bingoScore[scoreKey_1] || (this.bingoScore[scoreKey_1] = 0);
          this.bingoScore[scoreKey_1] += Const_1.Score.Normal;
          var bonusScore = score - Const_1.Score.Normal;
          if (bonusScore > 0) {
            this.bingoScore[bonusCountKey] || (this.bingoScore[bonusCountKey] = 0);
            this.bingoScore[bonusCountKey]++;
            this.bingoScore[bonusKey] || (this.bingoScore[bonusKey] = 0);
            this.bingoScore[bonusKey] += bonusScore;
          } else console.log(" special should not smaller than normal score:", score, ", type:", scoreKey_1);
          break;

         case Const_1.ScoreType.Oops:
          var oopCountKey = Const_1.ScoreCountType[Const_1.ScoreCountType.OopCount];
          var oopScoreKey = Const_1.ScoreType[Const_1.ScoreType.OopScore];
          this.bingoScore[oopScoreKey] || (this.bingoScore[oopScoreKey] = 0);
          this.bingoScore[oopScoreKey] += score;
          this.bingoScore[oopCountKey] || (this.bingoScore[oopCountKey] = 0);
          this.bingoScore[oopCountKey]++;
          break;

         case Const_1.ScoreType.Bingo:
          var bingoScoreKey = Const_1.ScoreType[Const_1.ScoreType.BingoScore];
          var bingoCountKey = Const_1.ScoreCountType[Const_1.ScoreCountType.BingoCount];
          this.bingoScore[bingoScoreKey] || (this.bingoScore[bingoScoreKey] = 0);
          this.bingoScore[bingoScoreKey] += score;
          this.bingoScore[bingoCountKey] || (this.bingoScore[bingoCountKey] = 0);
          this.bingoScore[bingoCountKey]++;
          break;

         case Const_1.ScoreType.AllBingo:
          var allbingoScoreKey = Const_1.ScoreType[Const_1.ScoreType.AllBingoScore];
          var allbingoCountKey = Const_1.ScoreCountType[Const_1.ScoreCountType.AllBingoCount];
          this.bingoScore[allbingoScoreKey] || (this.bingoScore[allbingoScoreKey] = 0);
          this.bingoScore[allbingoScoreKey] += score;
          this.bingoScore[allbingoCountKey] || (this.bingoScore[allbingoCountKey] = 0);
          this.bingoScore[allbingoCountKey]++;
          break;

         case Const_1.ScoreType.OverBingo:
          var overbingoScoreKey = Const_1.ScoreType[Const_1.ScoreType.OverBingoScore];
          var overbingoCountKey = Const_1.ScoreCountType[Const_1.ScoreCountType.OverBingoCount];
          this.bingoScore[overbingoScoreKey] || (this.bingoScore[overbingoScoreKey] = 0);
          this.bingoScore[overbingoScoreKey] += score;
          this.bingoScore[overbingoCountKey] || (this.bingoScore[overbingoCountKey] = 0);
          this.bingoScore[overbingoCountKey]++;
          break;

         case Const_1.ScoreType.Normal:
          var correctScoreKey = Const_1.ScoreType[Const_1.ScoreType.CorrectScore];
          var correctCountKey2 = Const_1.ScoreCountType[Const_1.ScoreCountType.CorrectCount];
          this.bingoScore[correctScoreKey] || (this.bingoScore[correctScoreKey] = 0);
          this.bingoScore[correctScoreKey] += score;
          this.bingoScore[correctCountKey2] || (this.bingoScore[correctCountKey2] = 0);
          this.bingoScore[correctCountKey2]++;
        }
      };
      GameCtrl.prototype.getBingoScore = function() {
        return this.bingoScore;
      };
      GameCtrl.prototype.isPause = function() {
        return this.ispause;
      };
      return GameCtrl;
    }();
    exports.Game = GameCtrl.inst;
    true, window["Game"] = exports.Game;
    cc._RF.pop();
  }, {
    "../Const": "Const",
    "../Utils/HashMap": "HashMap",
    "./EventManager": "EventManager",
    "./EventName": "EventName"
  } ],
  GoldSkillLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c379TpPltKe7icSxr7Juma", "GoldSkillLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Point_1 = require("./Point");
    var Game_1 = require("./Controller/Game");
    var Const_1 = require("./Const");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GoldSkillLayer = function(_super) {
      __extends(GoldSkillLayer, _super);
      function GoldSkillLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.selectTime = Const_1.GoldSkillTimeLimit.Select;
        _this.clickTime = Const_1.GoldSkillTimeLimit.Click;
        return _this;
      }
      Object.defineProperty(GoldSkillLayer.prototype, "SelectLayer", {
        get: function() {
          return this.node.getChildByName("Select");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GoldSkillLayer.prototype, "SelectTimeBar", {
        get: function() {
          return this.SelectLayer.getChildByName("SelectTimeBar").getComponent(cc.ProgressBar);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GoldSkillLayer.prototype, "SelectTimeLabel", {
        get: function() {
          return this.SelectTimeBar.node.getChildByName("TimeLabel").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GoldSkillLayer.prototype, "ClickTimeLabel", {
        get: function() {
          return this.ClickTimeBar.node.getChildByName("TimeLabel").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GoldSkillLayer.prototype, "SelectPointRoot", {
        get: function() {
          return this.SelectLayer.getChildByName("SelectRoot");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GoldSkillLayer.prototype, "CurrentPoint", {
        get: function() {
          return this.node.getChildByName("CurrentPoint").getComponent(Point_1.default);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GoldSkillLayer.prototype, "Desk", {
        get: function() {
          return this.node.getChildByName("Desk");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GoldSkillLayer.prototype, "ClickTimeBar", {
        get: function() {
          return this.node.getChildByName("ClickTimeBar").getComponent(cc.ProgressBar);
        },
        enumerable: true,
        configurable: true
      });
      GoldSkillLayer.prototype.onLoad = function() {
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.GOLD_POINT_SELECT_DONE, this.selectDone, this);
      };
      GoldSkillLayer.prototype.show = function(index) {
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "skill");
        this.pageIndex = index;
        this.node.active = true;
        this.Desk.active = false;
        this.SelectLayer.active = true;
        this.CurrentPoint.node.active = false;
        this.selectTime = Const_1.GoldSkillTimeLimit.Select;
        this.clickTime = Const_1.GoldSkillTimeLimit.Click;
        var points = Game_1.Game.getCurrentPageValues(0).concat(Game_1.Game.getCurrentPageValues(1));
        this.SelectPointRoot.getComponent(cc.Layout).enabled = points.length >= 4;
        if (points.length < 4) switch (points.length) {
         case 1:
          this.SelectPointRoot.x = 231;
          this.SelectPointRoot.y = -75;
          this.SelectPointRoot.children[2].x = -235;
          break;

         case 2:
          this.SelectPointRoot.x = 0;
          this.SelectPointRoot.y = -75;
          this.SelectPointRoot.children[2].x = -235;
          break;

         case 3:
          this.SelectPointRoot.x = 0;
          this.SelectPointRoot.y = 177;
          this.SelectPointRoot.children[2].x = 0;
        } else {
          this.SelectPointRoot.x = 0;
          this.SelectPointRoot.y = 177;
          this.SelectPointRoot.children[2].x = -235;
        }
        for (var _i = 0, _a = this.SelectPointRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          var point = child.getComponent(Point_1.default);
          if (point && points.length > 0) {
            var randomIndex = Math.floor(CMath.getRandom(0, points.length));
            point.setValue(points[randomIndex]);
            points.splice(randomIndex, 1);
            child.active = true;
          } else child.active = false;
        }
        this.SelectTimeBar.progress = 1;
        this.SelectTimeLabel.string = Math.ceil(this.selectTime).toString();
      };
      GoldSkillLayer.prototype.selectDone = function() {
        if (Game_1.Game.goldSelectValue <= 0) {
          this.node.active = false;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SKILL_DONE);
          return;
        }
        this.Desk.active = true;
        this.SelectLayer.active = false;
        this.CurrentPoint.node.active = true;
        this.CurrentPoint.setValue(Game_1.Game.goldSelectValue);
        this.ClickTimeLabel.string = Math.ceil(this.selectTime).toString();
        this.ClickTimeBar.progress = 1;
      };
      GoldSkillLayer.prototype.hide = function() {
        this.node.active = false;
      };
      GoldSkillLayer.prototype.update = function(dt) {
        if (!this.node.active) return;
        if (this.SelectLayer.active) {
          this.selectTime -= dt;
          this.SelectTimeBar.progress = this.selectTime / Const_1.GoldSkillTimeLimit.Select;
          this.SelectTimeLabel.string = Math.ceil(this.selectTime).toString();
          if (this.selectTime <= 0) {
            this.node.active = false;
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SKILL_DONE);
          }
        } else {
          this.clickTime -= dt;
          this.ClickTimeBar.progress = this.clickTime / Const_1.GoldSkillTimeLimit.Click;
          this.ClickTimeLabel.string = Math.ceil(this.clickTime).toString();
          if (this.clickTime <= 0) {
            this.node.active = false;
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SKILL_DONE);
          }
        }
      };
      GoldSkillLayer = __decorate([ ccclass ], GoldSkillLayer);
      return GoldSkillLayer;
    }(cc.Component);
    exports.default = GoldSkillLayer;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Point": "Point"
  } ],
  Guide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51171YOST5DI7oenF2960D9", "Guide");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./Controller/Game");
    var Const_1 = require("./Const");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuideType;
    (function(GuideType) {
      GuideType[GuideType["Guide"] = 0] = "Guide";
      GuideType[GuideType["Help"] = 1] = "Help";
    })(GuideType = exports.GuideType || (exports.GuideType = {}));
    var Guide = function(_super) {
      __extends(Guide, _super);
      function Guide() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ButtonAtlas = null;
        _this.Next = null;
        _this.Forward = null;
        _this.GuideContent = null;
        _this.HelpContent = null;
        _this.GuideView = null;
        _this.HelpView = null;
        _this.callback = null;
        return _this;
      }
      Object.defineProperty(Guide.prototype, "SkillGuide", {
        get: function() {
          return this.node.getChildByName("SkillGuide");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "Button", {
        get: function() {
          return this.node.getChildByName("Button");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "StarGuide", {
        get: function() {
          return this.SkillGuide.getChildByName("StarGuide");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "GoldGuide", {
        get: function() {
          return this.SkillGuide.getChildByName("GoldGuide");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "MouseGuide", {
        get: function() {
          return this.SkillGuide.getChildByName("MouseGuide");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "MagicGuide", {
        get: function() {
          return this.SkillGuide.getChildByName("MagicGuide");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "MagicOJBK", {
        get: function() {
          return this.MagicGuide.getChildByName("OJBK");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "StarOJBK", {
        get: function() {
          return this.StarGuide.getChildByName("OJBK");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "GoldOJBK", {
        get: function() {
          return this.GoldGuide.getChildByName("OJBK");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "MouseOJBK", {
        get: function() {
          return this.MouseGuide.getChildByName("OJBK");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Guide.prototype, "Block", {
        get: function() {
          return this.node.getChildByName("Block");
        },
        enumerable: true,
        configurable: true
      });
      Guide.prototype.onLoad = function() {
        var _this = this;
        this.Next.node.on(cc.Node.EventType.TOUCH_END, this.nextPage, this);
        this.Forward.node.on(cc.Node.EventType.TOUCH_END, this.forwardPage, this);
        this.GuideView.node.on("scroll-ended", this.updateButton, this);
        this.HelpView.node.on("scroll-ended", this.updateButton, this);
        this.StarOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this);
        this.GoldOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this);
        this.MouseOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this);
        this.MagicOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this);
        this.Block.on(cc.Node.EventType.TOUCH_END, function() {
          _this.HelpView.node.active && _this.hide();
        }, this);
      };
      Guide.prototype.start = function() {};
      Guide.prototype.hide = function() {
        Game_1.Game.getCurMode() == Const_1.SkillType.Normal ? Game_1.Game.resume() : console.error(" not in normal mode, dont resume");
        this.node.active = false;
        this.callback && this.callback();
      };
      Guide.prototype.showStarGuide = function(closeCallback) {
        this.node.active = true;
        this.SkillGuide.active = true;
        this.Button.active = false;
        this.HelpView.node.active = false;
        this.GuideView.node.active = false;
        this.StarGuide.active = true;
        this.GoldGuide.active = false;
        this.MouseGuide.active = false;
        this.MagicGuide.active = false;
        this.callback = closeCallback;
      };
      Guide.prototype.showGoldGuide = function(closeCallback) {
        this.node.active = true;
        this.SkillGuide.active = true;
        this.Button.active = false;
        this.HelpView.node.active = false;
        this.GuideView.node.active = false;
        this.StarGuide.active = false;
        this.GoldGuide.active = true;
        this.MouseGuide.active = false;
        this.MagicGuide.active = false;
        this.callback = closeCallback;
      };
      Guide.prototype.showMouseGuide = function(closeCallback) {
        this.node.active = true;
        this.SkillGuide.active = true;
        this.Button.active = false;
        this.HelpView.node.active = false;
        this.GuideView.node.active = false;
        this.StarGuide.active = false;
        this.GoldGuide.active = false;
        this.MouseGuide.active = true;
        this.MagicGuide.active = false;
        this.callback = closeCallback;
      };
      Guide.prototype.showMagicGuide = function(closeCallback) {
        this.node.active = true;
        this.SkillGuide.active = true;
        this.Button.active = false;
        this.HelpView.node.active = false;
        this.GuideView.node.active = false;
        this.StarGuide.active = false;
        this.GoldGuide.active = false;
        this.MouseGuide.active = false;
        this.MagicGuide.active = true;
        this.callback = closeCallback;
      };
      Guide.prototype.showSkillGuide = function(type, callback) {
        switch (type) {
         case Const_1.SkillType.Gold:
          Game_1.Game.pause();
          this.showGoldGuide(callback);
          break;

         case Const_1.SkillType.Star:
          Game_1.Game.pause();
          this.showStarGuide(callback);
          break;

         case Const_1.SkillType.Super:
          Game_1.Game.pause();
          this.showMouseGuide(callback);
          break;

         case Const_1.SkillType.Magic:
          Game_1.Game.pause();
          this.showMagicGuide(callback);
          break;

         default:
          callback();
        }
      };
      Guide.prototype.show = function(type, closeCallback) {
        Game_1.Game.pause();
        this.guideType = type;
        if (type == GuideType.Guide) {
          this.GuideView.node.active = true;
          this.HelpView.node.active = false;
          this.curSelectView = this.GuideView;
        } else {
          this.GuideView.node.active = false;
          this.HelpView.node.active = true;
          this.curSelectView = this.HelpView;
        }
        console.log(" show guide:", GuideType[type]);
        this.SkillGuide.active = false;
        this.Button.active = true;
        this.curSelectView.scrollToPage(0, 0);
        this.node.active = true;
        this.callback = closeCallback;
        this.Forward.node.active = false;
        this.Next.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("btn_new");
        this.curSelectView.node.setContentSize(this.curSelectView.content.children[this.curSelectView.getCurrentPageIndex()].getContentSize());
      };
      Guide.prototype.nextPage = function() {
        if (this.curSelectView.getCurrentPageIndex() >= this.curSelectView.content.childrenCount - 1) this.hide(); else {
          var nextPageIndex = (this.curSelectView.getCurrentPageIndex() + 1) % this.curSelectView.content.childrenCount;
          this.curSelectView.setCurrentPageIndex(nextPageIndex);
          this.updateButton();
        }
      };
      Guide.prototype.forwardPage = function() {
        if (this.curSelectView.getCurrentPageIndex() <= 0) ; else {
          var forwardPageIndex = (this.curSelectView.getCurrentPageIndex() - 1) % this.curSelectView.content.childrenCount;
          this.curSelectView.setCurrentPageIndex(forwardPageIndex);
          this.updateButton();
        }
      };
      Guide.prototype.updateButton = function() {
        this.curSelectView.getCurrentPageIndex() >= this.curSelectView.content.childrenCount - 1 ? this.Next.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("new_close") : this.Next.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("btn_new");
        this.Forward.node.active = 0 != this.curSelectView.getCurrentPageIndex();
        this.curSelectView.node.setContentSize(this.curSelectView.content.children[this.curSelectView.getCurrentPageIndex()].getContentSize());
      };
      __decorate([ property(cc.SpriteAtlas) ], Guide.prototype, "ButtonAtlas", void 0);
      __decorate([ property(cc.Button) ], Guide.prototype, "Next", void 0);
      __decorate([ property(cc.Button) ], Guide.prototype, "Forward", void 0);
      __decorate([ property(cc.Node) ], Guide.prototype, "GuideContent", void 0);
      __decorate([ property(cc.Node) ], Guide.prototype, "HelpContent", void 0);
      __decorate([ property(cc.PageView) ], Guide.prototype, "GuideView", void 0);
      __decorate([ property(cc.PageView) ], Guide.prototype, "HelpView", void 0);
      Guide = __decorate([ ccclass ], Guide);
      return Guide;
    }(cc.Component);
    exports.default = Guide;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/Game": "Game"
  } ],
  HashMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fb89I0oSVCL4wes+uFEx94", "HashMap");
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
  LoadLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bfe9wchfRNVK/geqXwo8+E", "LoadLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TransitionSprite_1 = require("./Shader/TransitionSprite");
    var Game_1 = require("./Controller/Game");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var Const_1 = require("./Const");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadLayer = function(_super) {
      __extends(LoadLayer, _super);
      function LoadLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.time = 5;
        _this.isStart = false;
        _this.startTimer = false;
        return _this;
      }
      Object.defineProperty(LoadLayer.prototype, "StartButton", {
        get: function() {
          return this.node.getChildByName("BeginButton");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LoadLayer.prototype, "Background", {
        get: function() {
          return this.node.getChildByName("Background");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LoadLayer.prototype, "Position", {
        get: function() {
          return this.node.getChildByName("Position");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LoadLayer.prototype, "StartProgress", {
        get: function() {
          return this.StartButton.getChildByName("ProgressBar");
        },
        enumerable: true,
        configurable: true
      });
      LoadLayer.prototype.onLoad = function() {
        this.StartButton.opacity = 255;
        this.StartButton.scale = 0;
      };
      LoadLayer.prototype.enableBlock = function(enable) {
        this.node.getComponent(cc.BlockInputEvents) && (this.node.getComponent(cc.BlockInputEvents).enabled = enable);
      };
      LoadLayer.prototype.ready = function() {
        var _this = this;
        console.log(" loading layer ready");
        this.isStart = false;
        this.startTimer = false;
        this.enableBlock(true);
        this.StartProgress.width = 710;
        this.Position.active = true;
        for (var _i = 0, _a = this.Background.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.active = child.name == Const_1.Theme[Game_1.Game.Theme];
          if (child.getComponent(TransitionSprite_1.default)) {
            child.getComponent(TransitionSprite_1.default).enabled = child.active;
            child.active && (this.transition = child.getComponent(TransitionSprite_1.default));
          }
        }
        for (var _b = 0, _c = this.Position.children; _b < _c.length; _b++) {
          var child = _c[_b];
          child.active = child.name == Const_1.Theme[Game_1.Game.Theme];
        }
        this.StartButton.runAction(cc.sequence(cc.scaleTo(.15, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
          _this.startTimer = true;
          _this.StartButton.on(cc.Node.EventType.TOUCH_START, function() {
            _this.StartProgress.active = false;
          }, _this);
          _this.StartButton.on(cc.Node.EventType.TOUCH_END, _this.startGame, _this);
        })));
      };
      LoadLayer.prototype.startGame = function() {
        if (this.isStart) return;
        this.isStart = true;
        this.StartButton.targetOff(this);
        this.unscheduleAllCallbacks();
        this.Position.active = false;
        this.StartButton.runAction(cc.fadeOut(.2));
        this.StartButton.active = false;
        if (this.transition && this.transition.enabled) this.transition.isStart = true; else {
          this.node.active = false;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GAME_START);
        }
      };
      LoadLayer.prototype.update = function(dt) {
        if (!this.startTimer) return;
        this.time -= dt;
        this.time = Math.max(0, this.time);
        this.StartProgress.width = 710 * this.time / 3;
        this.time <= 0 && !this.isStart && this.startGame();
      };
      LoadLayer = __decorate([ ccclass ], LoadLayer);
      return LoadLayer;
    }(cc.Component);
    exports.default = LoadLayer;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Shader/TransitionSprite": "TransitionSprite"
  } ],
  LogHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8104dX5fRlIPb4q1d60qPIM", "LogHandler");
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
        this.log(" total frames:", this.totalFrames, " ,total cost time:", timeCost + "s", " , per frame cost time ave:" + perFrame + "s");
      };
      LogHandler.prototype.log = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this.addLog.apply(this, args);
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
        if (CELER_X) {
          this.logFunc = callback;
          console.error = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
            var _a;
            (_a = LogHandler.ins).log.apply(_a, [ "[ERROR]" ].concat(args));
          };
          console.warn = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
            var _a;
            (_a = LogHandler.ins).log.apply(_a, [ "[WARN]" ].concat(args));
          };
          console.log = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
            var _a;
            (_a = LogHandler.ins).log.apply(_a, [ "[INFO]" ].concat(args));
          };
        } else this.logFunc = console.log;
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
      LogHandler.prototype.getFullTime = function(date) {
        var fullTime = "";
        var year = date.getFullYear();
        fullTime += year;
        var month = date.getMonth() + 1;
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
      LogHandler.VERSION = "Daub Cash version 55  : ";
      LogHandler.LISTENNING_EVENTS = [ "error" ];
      return LogHandler;
    }();
    exports.LogHandler = LogHandler;
    true, window["LogHandler"] = LogHandler;
    cc._RF.pop();
  }, {} ],
  MagicLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c827aekCwJAg623zHJEGQBN", "MagicLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Point_1 = require("./Point");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var Game_1 = require("./Controller/Game");
    var FrameAniBase_1 = require("./FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MagicLayer = function(_super) {
      __extends(MagicLayer, _super);
      function MagicLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.PenAtlas = null;
        _this.Frame = null;
        _this.Pen = null;
        return _this;
      }
      MagicLayer.prototype.onLoad = function() {
        console.log(" Magic layer on load");
        EventManager_1.gEventMgr.targetOff(this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.MAGIC_DAUB, this.onMagicDaub, this);
      };
      MagicLayer.prototype.start = function() {
        console.log(" Magic layer on start");
      };
      Object.defineProperty(MagicLayer.prototype, "AnimationRoot", {
        get: function() {
          return this.node.getChildByName("Animation");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MagicLayer.prototype, "Point", {
        get: function() {
          return this.node.getChildByName("Point").getComponent(Point_1.default);
        },
        enumerable: true,
        configurable: true
      });
      MagicLayer.prototype.onMagicDaub = function() {
        this.Pen.stopAllActions();
        this.Pen.getComponent(FrameAniBase_1.default).play();
        this.Pen.getComponent(FrameAniBase_1.default).onComplete = function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SKILL_DONE);
        };
      };
      MagicLayer.prototype.show = function(value) {
        this.node.active = true;
        this.Point.setValue(value);
        for (var _i = 0, _a = this.AnimationRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.active = child.name == this.Point.WordString;
          if (child.active) {
            this.Frame = child.getChildByName("Frame");
            this.Pen = child.getChildByName("Pen");
          }
        }
        if (null == this.Frame || null == this.Pen) {
          console.error(" this.Frame == null || this.Pen == null ");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SKILL_DONE);
          return;
        }
        Game_1.Game.hasDaubMagicBall = false;
        this.Frame.opacity = 255;
        this.Frame.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(.15), cc.fadeIn(.2))));
        this.Pen.getComponent(cc.Sprite).spriteFrame = this.PenAtlas.getSpriteFrame("bg_magic02");
        this.Pen.opacity = 255;
        this.Pen.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(.15), cc.fadeIn(.2))));
        console.log(" Magic layer :", this.node.active);
      };
      MagicLayer.prototype.hide = function() {
        this.node.active = false;
        console.log(" Magic layer hide:", this.node.active);
      };
      __decorate([ property(cc.SpriteAtlas) ], MagicLayer.prototype, "PenAtlas", void 0);
      MagicLayer = __decorate([ ccclass ], MagicLayer);
      return MagicLayer;
    }(cc.Component);
    exports.default = MagicLayer;
    cc._RF.pop();
  }, {
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./FrameAniBase": "FrameAniBase",
    "./Point": "Point"
  } ],
  Pad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "482dbcxNt1HaKHvMljr3XXT", "Pad");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Pad = function(_super) {
      __extends(Pad, _super);
      function Pad() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Pad.prototype.onLoad = function() {};
      Pad.prototype.start = function() {};
      Pad = __decorate([ ccclass ], Pad);
      return Pad;
    }(cc.Component);
    exports.default = Pad;
    cc._RF.pop();
  }, {} ],
  PauseLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c98ebyBcvpGl54TB3ikQEWN", "PauseLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./Controller/Game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PauseLayer = function(_super) {
      __extends(PauseLayer, _super);
      function PauseLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeCallback = null;
        _this.openHelp = null;
        _this.MaskWidth = 440;
        return _this;
      }
      Object.defineProperty(PauseLayer.prototype, "ResumeButton", {
        get: function() {
          return this.node.getChildByName("Resume");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "VolumeSlider", {
        get: function() {
          return this.node.getChildByName("VolumeSlider").getComponent(cc.Slider);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "HelpButton", {
        get: function() {
          return this.node.getChildByName("HelpButton");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "Mask", {
        get: function() {
          return this.VolumeSlider.node.getChildByName("Mask");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "MaskEffect", {
        get: function() {
          return this.VolumeEffectSlider.node.getChildByName("Mask");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "VolumeEffectSlider", {
        get: function() {
          return this.node.getChildByName("VolumeEffectSlider").getComponent(cc.Slider);
        },
        enumerable: true,
        configurable: true
      });
      PauseLayer.prototype.onLoad = function() {
        var _this = this;
        this.ResumeButton.on(cc.Node.EventType.TOUCH_END, function() {
          setTimeout(_this.hide.bind(_this), 0);
        }, this);
        this.HelpButton.on(cc.Node.EventType.TOUCH_END, function() {
          _this.openHelp && _this.openHelp();
        }, this);
        this.VolumeSlider.node.on("slide", this.onSlider, this);
        this.VolumeEffectSlider.node.on("slide", this.onEffectSlider, this);
      };
      PauseLayer.prototype.onSlider = function() {
        cc.audioEngine.setMusicVolume(this.VolumeSlider.progress);
        this.Mask.width = this.VolumeSlider.progress * this.MaskWidth;
      };
      PauseLayer.prototype.onEffectSlider = function() {
        cc.audioEngine.setEffectsVolume(this.VolumeEffectSlider.progress);
        this.MaskEffect.width = this.VolumeEffectSlider.progress * this.MaskWidth;
      };
      PauseLayer.prototype.start = function() {};
      PauseLayer.prototype.show = function(openHelp, close) {
        this.VolumeSlider.progress = cc.audioEngine.getMusicVolume();
        this.VolumeEffectSlider.progress = cc.audioEngine.getEffectsVolume();
        this.Mask.width = this.VolumeSlider.progress * this.MaskWidth;
        this.MaskEffect.width = this.VolumeEffectSlider.progress * this.MaskWidth;
        this.closeCallback = close;
        this.openHelp = openHelp;
        this.node.active = true;
        Game_1.Game.pause();
      };
      PauseLayer.prototype.hide = function() {
        this.node.active = false;
        if (this.closeCallback) {
          this.closeCallback();
          this.closeCallback = null;
        }
      };
      PauseLayer = __decorate([ ccclass ], PauseLayer);
      return PauseLayer;
    }(cc.Component);
    exports.default = PauseLayer;
    cc._RF.pop();
  }, {
    "./Controller/Game": "Game"
  } ],
  PixelSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b899j0GphFWKCxXmly3G1I", "PixelSprite");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderManager_1 = require("./ShaderManager");
    var EventManager_1 = require("../Controller/EventManager");
    var EventName_1 = require("../Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PixelSprite = function(_super) {
      __extends(PixelSprite, _super);
      function PixelSprite() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.material = new ShaderManager_1.PixelStyleMaterial();
        _this.spineMaterial = new ShaderManager_1.PixelSpineMaterial();
        _this.oldMaterial = null;
        _this.oldSpineMaterial = null;
        _this.sampleCount = 800;
        return _this;
      }
      PixelSprite.prototype.onLoad = function() {
        var _this = this;
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PXIEL_ENABLE, function() {
          PXIEL ? _this.init() : _this.reset();
        }, this);
        PXIEL ? this.init() : this.reset();
      };
      PixelSprite.prototype.init = function() {
        if (!PXIEL) return;
        var sprite = this.getComponent(cc.Sprite);
        var spine = this.getComponent(sp.Skeleton);
        var label = this.getComponent(cc.Label);
        this.material.setDefine("disableColor", false);
        this.spineMaterial.setDefine("disableColor", false);
        this.material.setProperty("sampleCount", this.sampleCount);
        this.spineMaterial.setProperty("sampleCount", this.sampleCount);
        if (sprite) {
          this.oldMaterial = sprite["_spriteMaterial"];
          sprite["_spriteMaterial"] = this.material;
          sprite["_activateMaterial"]();
        }
        if (label) {
          this.oldMaterial = label["_material"];
          label["_frame"] && label["_frame"]["_texture"] && (this.material.texture = label["_frame"]["_texture"]);
          label["_material"] = this.material;
          label["_activateMaterial"]();
        }
        if (spine) {
          this.oldSpineMaterial = spine["_material"];
          spine["_updateMaterial"](this.spineMaterial);
        }
      };
      PixelSprite.prototype.reset = function() {
        var sprite = this.getComponent(cc.Sprite);
        var spine = this.getComponent(sp.Skeleton);
        var label = this.getComponent(cc.Label);
        if (sprite && this.oldMaterial) {
          sprite["_spriteMaterial"] = this.oldMaterial;
          sprite["_activateMaterial"]();
        }
        if (label && this.oldMaterial) {
          label["_material"] = this.oldMaterial;
          label["_activateMaterial"]();
        }
        spine && this.oldSpineMaterial && spine["_updateMaterial"](this.oldSpineMaterial);
      };
      __decorate([ property(cc.Integer) ], PixelSprite.prototype, "sampleCount", void 0);
      PixelSprite = __decorate([ ccclass ], PixelSprite);
      return PixelSprite;
    }(cc.Component);
    exports.default = PixelSprite;
    cc._RF.pop();
  }, {
    "../Controller/EventManager": "EventManager",
    "../Controller/EventName": "EventName",
    "./ShaderManager": "ShaderManager"
  } ],
  PointWave: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9addOXGQ9FuICubyoJJwKl", "PointWave");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderManager_1 = require("./ShaderManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PointWaveSprite = function(_super) {
      __extends(PointWaveSprite, _super);
      function PointWaveSprite() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.material = new ShaderManager_1.PointWaveMaterial();
        _this.time = 0;
        _this.waveRange = .01;
        return _this;
      }
      PointWaveSprite.prototype.onLoad = function() {
        var _this = this;
        console.log(this.node);
        var sprite = this.getComponent(cc.Sprite);
        if (!sprite) return;
        sprite["_spriteMaterial"] = this.material;
        sprite["_activateMaterial"]();
        this.material.setProperty("range", .01);
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          var location = _this.node.convertToNodeSpace(event.getLocation());
          location.x /= _this.node.getContentSize().width;
          location.y /= _this.node.getContentSize().height;
          location.y = 1 - location.y;
          _this.time = 0;
          _this.waveRange = .01;
          _this.material.setProperty("time", _this.time);
          _this.material.setProperty("range", _this.waveRange);
          _this.material.setProperty("point", location);
        }, this);
      };
      PointWaveSprite.prototype.start = function() {};
      PointWaveSprite.prototype.update = function(dt) {
        this.material.setProperty("range", this.waveRange);
        this.material.setProperty("time", this.time);
        this.material.setProperty("deltaTime", dt);
        this.time += dt / 2;
        this.waveRange > .1 && (this.waveRange = .1);
      };
      PointWaveSprite = __decorate([ ccclass ], PointWaveSprite);
      return PointWaveSprite;
    }(cc.Component);
    exports.default = PointWaveSprite;
    cc._RF.pop();
  }, {
    "./ShaderManager": "ShaderManager"
  } ],
  Point: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e72aDeGvxJjI3bwYHxFww7", "Point");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./Controller/Game");
    var Const_1 = require("./Const");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var CelerSDK_1 = require("./Controller/CelerSDK");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Point = function(_super) {
      __extends(Point, _super);
      function Point() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.totalTime = 0;
        _this.currentTime = 0;
        _this.value = 0;
        return _this;
      }
      Object.defineProperty(Point.prototype, "TimeBar", {
        get: function() {
          return this.node.getChildByName("TimeBar").getComponent(cc.ProgressBar);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "Icon", {
        get: function() {
          return this.node.getChildByName("Icon");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "NumberLabel", {
        get: function() {
          return this.node.getChildByName("Label").getChildByName("Number").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "CurrentTime", {
        get: function() {
          return this.currentTime;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "TotalTime", {
        get: function() {
          return this.totalTime;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "StringValue", {
        get: function() {
          return this.word + "." + this.value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "Value", {
        get: function() {
          return this.value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "Word", {
        get: function() {
          return this.word;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "WordString", {
        get: function() {
          return Const_1.CardWord[this.word];
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Point.prototype, "TimeLeftPercent", {
        get: function() {
          if (this.totalTime <= 0) return 0;
          return this.currentTime / this.totalTime;
        },
        enumerable: true,
        configurable: true
      });
      Point.prototype.onSetParent = function(parent) {
        var _this = this;
        if (parent) {
          this.TimeBar.node.active = "CurrentPoint" == parent.name;
          if (this.TimeBar.node.active) {
            Game_1.Game.getGameTime() >= Const_1.TimeLimit ? this.totalTime = (window["chichihaoshuaihahaha"], 
            Const_1.RewardTime.One) : this.totalTime = (window["chichihaoshuaihahaha"], Const_1.RewardTime.Two);
            this.currentTime = this.totalTime;
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, Const_1.CardWord[this.word], false, function() {
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, _this.value);
            });
          } else {
            this.totalTime = 0;
            this.currentTime = 0;
          }
        }
      };
      Object.defineProperty(Point.prototype, "isGoldSelectMode", {
        get: function() {
          return "SelectRoot" == this.node.getParent().name;
        },
        enumerable: true,
        configurable: true
      });
      Point.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouch, this);
      };
      Point.prototype.reuse = function() {
        this.node["_onSetParent"] = this.onSetParent.bind(this);
        this.NumberLabel.node.active = true;
        this.TimeBar.progress = 1;
        this.TimeBar.node.active = false;
        this.node.scale = 1;
        this.node.active = true;
        this.setValue(arguments[0][0]);
      };
      Point.prototype.onTouch = function(e) {
        console.log(this.node.parent.name);
        if (this.isGoldSelectMode) {
          Game_1.Game.goldSelectValue = this.value;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GOLD_POINT_SELECT_DONE);
        }
      };
      Point.prototype.setValue = function(val) {
        this.value = val;
        for (var i = Const_1.CardWord.B; i <= Const_1.CardWord.O; i++) if (this.value >= (i - 1) * Const_1.CardStep + 1 && this.value <= i * Const_1.CardStep) {
          this.word = i;
          break;
        }
        this.NumberLabel.string = this.value.toString();
        for (var _i = 0, _a = this.Icon.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.active = child.name == Const_1.CardWord[this.word];
        }
      };
      Point.prototype.unuse = function() {
        this.node.targetOff(this);
        this.NumberLabel.node.active = false;
        this.node.active = false;
      };
      Point.prototype.update = function(dt) {
        if (this.TimeBar.node.active && this.totalTime > 0 && !Game_1.Game.isPause() && Game_1.Game.isStart) {
          this.currentTime -= dt;
          this.TimeBar.progress = this.currentTime / this.totalTime;
          this.TimeBar.node.active = this.currentTime > 0;
          this.currentTime <= 0 && this.goToRewardArray();
        }
      };
      Point.prototype.addTime = function(time) {
        if (CelerSDK_1.CelerSDK.inst.isOnCelerPlatform()) return;
        if (Const_1.RewardTime.One < 10 && !window["chichihaoshuaihahaha"]) return;
        this.currentTime += time;
        this.currentTime = Math.max(0, this.currentTime);
      };
      Point.prototype.goToRewardArray = function() {
        this.TimeBar.node.active = false;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.ADD_2_NORMAL_REWARD, this.node);
      };
      Point = __decorate([ ccclass ], Point);
      return Point;
    }(cc.Component);
    exports.default = Point;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/CelerSDK": "CelerSDK",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game"
  } ],
  ResultLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37000IS74xCBIj2O3JKO3wm", "ResultLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./Controller/Game");
    var CelerSDK_1 = require("./Controller/CelerSDK");
    var Const_1 = require("./Const");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ResultLayer = function(_super) {
      __extends(ResultLayer, _super);
      function ResultLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TitleAtlas = null;
        _this.Hource = null;
        _this.showLabel = {};
        _this.label = {};
        _this.step = {};
        _this.curDoneCount = 0;
        _this.startUpdate = false;
        return _this;
      }
      Object.defineProperty(ResultLayer.prototype, "FlowerAnimation", {
        get: function() {
          return this.node.getChildByName("FlowerAnimation").getComponent(cc.Animation);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ResultLayer.prototype, "SubmitButton", {
        get: function() {
          return this.node.getChildByName("SubmitButton").getComponent(cc.Button);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ResultLayer.prototype, "LabelRoot", {
        get: function() {
          return this.node.getChildByName("LabelRoot");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ResultLayer.prototype, "Title", {
        get: function() {
          return this.node.getChildByName("Title").getComponent(cc.Sprite);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ResultLayer.prototype, "Background", {
        get: function() {
          return this.node.getChildByName("Background");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ResultLayer.prototype, "ResultLight", {
        get: function() {
          return this.node.getChildByName("bg_resultlight");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ResultLayer.prototype, "Position", {
        get: function() {
          return this.node.getChildByName("Position");
        },
        enumerable: true,
        configurable: true
      });
      ResultLayer.prototype.onLoad = function() {
        this.SubmitButton.node.on(cc.Node.EventType.TOUCH_END, this.onSubmit, this);
        this.Hource.setEventListener(this.eventListener.bind(this));
      };
      ResultLayer.prototype.eventListener = function(trackEntry, event) {
        switch (event.stringValue) {
         case "light":
          this.FlowerAnimation.play();
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "result_dev");
          this.ResultLight.runAction(cc.repeatForever(cc.rotateBy(.01, .5)));
        }
      };
      ResultLayer.prototype.onSubmit = function() {
        CelerSDK_1.CelerSDK.inst.isOnCelerPlatform() ? CelerSDK_1.CelerSDK.inst.submitScore(Game_1.Game.getScore()) : window.location.reload();
      };
      ResultLayer.prototype.initScoreLabel = function() {
        var bingoScore = Game_1.Game.getBingoScore();
        bingoScore[Const_1.ScoreCountType[Const_1.ScoreCountType.BingoCount]] = bingoScore[Const_1.ScoreType[Const_1.ScoreType.BingoScore]] / Const_1.Score.Bingo;
        bingoScore[Const_1.ScoreCountType[Const_1.ScoreCountType.OverBingoCount]] = Game_1.Game.getTotalBingoTimes();
        bingoScore[Const_1.ScoreCountType[Const_1.ScoreCountType.AllBingoCount]] = Game_1.Game.getAllBingoCardCount();
        console.log(" game score:", bingoScore);
        this.showLabel = {};
        this.label = {};
        this.curDoneCount = 0;
        this.startUpdate = false;
        for (var _i = 0, _a = this.LabelRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          var label = child.getComponent(cc.Label);
          if (label) {
            child.active = true;
            label.string = "0";
            this.showLabel[child.name] = 0;
            this.label[child.name] = bingoScore[child.name] || 0;
            if (this.label[child.name] > 0) this.step[child.name] = Math.max(1, Math.floor(this.label[child.name] / 100)); else if (this.label[child.name] < 0) this.step[child.name] = Math.min(-1, Math.ceil(this.label[child.name] / 100)); else {
              this.step[child.name] = 0;
              this.addDoneCount();
            }
          } else {
            console.error(child.name, "'s component  cc.Label is missiing!");
            child.active = false;
          }
        }
        console.log(" init result label :", this.LabelRoot.childrenCount);
        console.log(this.label);
        console.log("====== step ==========");
        console.log(this.step);
        console.log(" show label");
        console.log(this.showLabel);
        this.startUpdate = true;
      };
      ResultLayer.prototype.show = function(overType) {
        if (this.node.active) return;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.NORMAL_BGM);
        Game_1.Game.getAllBingoCardCount() >= 2 ? EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "over_complete") : EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "over_time_up");
        for (var _i = 0, _a = this.Background.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.active = child.name == Const_1.Theme[Game_1.Game.Theme];
        }
        for (var _b = 0, _c = this.Position.children; _b < _c.length; _b++) {
          var child = _c[_b];
          child.active = child.name == Const_1.Theme[Game_1.Game.Theme];
        }
        console.error(" result layer show, matchid:", CelerSDK_1.CelerSDK.inst.MatchID, ", seed:", CelerSDK_1.CelerSDK.inst.MatchRandomSeed);
        this.SubmitButton.node.scale = 0;
        Game_1.Game.pause();
        this.initScoreLabel();
        this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame(Const_1.OverFont[Const_1.OverType[overType]]);
        this.node.active = true;
      };
      ResultLayer.prototype.hide = function() {
        Game_1.Game.resume();
        this.node.active = false;
      };
      ResultLayer.prototype.addDoneCount = function() {
        var _this = this;
        this.curDoneCount++;
        console.error("curDone:", this.curDoneCount, ", total:", this.LabelRoot.childrenCount);
        if (this.curDoneCount >= this.LabelRoot.childrenCount) {
          this.startUpdate = false;
          this.SubmitButton.node.runAction(cc.sequence(cc.scaleTo(.15, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
            _this.scheduleOnce(function() {
              CelerSDK_1.CelerSDK.inst.submitScore(Game_1.Game.getScore());
            }, 5);
          })));
        }
      };
      ResultLayer.prototype.update = function() {
        if (this.startUpdate) for (var _i = 0, _a = this.LabelRoot.children; _i < _a.length; _i++) {
          var child = _a[_i];
          var key = child.name;
          if (!child.active) continue;
          if (this.showLabel[key] == this.label[key]) continue;
          var label = child.getComponent(cc.Label);
          if (label) {
            this.label[key] != this.showLabel[key] && 0 != this.step[key] && (this.showLabel[key] += this.step[key]);
            (this.step[key] > 0 && this.showLabel[key] > this.label[key] || this.step[key] < 0 && this.showLabel[key] < this.label[key]) && (this.showLabel[key] = this.label[key]);
            label.string = this.showLabel[key] > 0 ? this.showLabel[key] : "/" + Math.abs(this.showLabel[key]);
            this.showLabel[key] == this.label[key] && this.addDoneCount();
          }
        }
      };
      __decorate([ property(cc.SpriteAtlas) ], ResultLayer.prototype, "TitleAtlas", void 0);
      __decorate([ property(sp.Skeleton) ], ResultLayer.prototype, "Hource", void 0);
      ResultLayer = __decorate([ ccclass ], ResultLayer);
      return ResultLayer;
    }(cc.Component);
    exports.default = ResultLayer;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/CelerSDK": "CelerSDK",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game"
  } ],
  Score: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "145bfRPC9pPLaM0crpB/9nD", "Score");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var Const_1 = require("./Const");
    var Game_1 = require("./Controller/Game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ScoreFont = function(_super) {
      __extends(ScoreFont, _super);
      function ScoreFont() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.setParentCallback = null;
        return _this;
      }
      Object.defineProperty(ScoreFont.prototype, "ScoreFail", {
        get: function() {
          return this.node.getChildByName("ScoreFail").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ScoreFont.prototype, "ScoreSuccess", {
        get: function() {
          return this.node.getChildByName("Score").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ScoreFont.prototype, "Text", {
        get: function() {
          return this.node.getChildByName("Text").getComponent(cc.Sprite);
        },
        enumerable: true,
        configurable: true
      });
      ScoreFont.prototype.onSetParent = function(parent) {
        parent && this.setParentCallback && this.setParentCallback();
      };
      ScoreFont.prototype.reuse = function() {
        var _this = this;
        this.node["_onSetParent"] = this.onSetParent.bind(this);
        var score = arguments[0][0];
        var scale = arguments[0][1];
        var target = arguments[0][2];
        var callback = arguments[0][3];
        var text = arguments[0][4];
        this.node.active = true;
        this.ScoreFail.node.active = true;
        this.ScoreSuccess.node.active = true;
        0 == score && console.log(" score - reuse-----------------------------:", score);
        this.Text.node.active = null != text;
        if (score > 0) {
          this.ScoreSuccess.string = "/" + score.toString();
          this.ScoreFail.string = "";
        } else {
          this.ScoreFail.string = "/" + Math.abs(score).toString();
          this.ScoreSuccess.string = "";
        }
        var scoreLabel = score > 0 ? this.ScoreSuccess : this.ScoreFail;
        score > 0 ? score > Const_1.Score.Normal ? Game_1.Game.isOver || EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "extra_score") : Game_1.Game.isOver || EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "score") : 0 == score || Game_1.Game.isOver || EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "oop_score");
        if (this.Text.node.active) {
          this.Text.spriteFrame = text;
          scoreLabel.node.x = 0;
        } else scoreLabel.node.x = -70 * scoreLabel.string.length / 2;
        scoreLabel.node.opacity = 0 != score ? 255 : 0;
        if (0 == score) {
          this.Text.node.x = 0;
          this.Text.node.anchorX = .5;
        } else {
          this.Text.node.x = 0;
          this.Text.node.anchorX = 1;
        }
        this.ScoreFail.node.scale = 0;
        this.ScoreSuccess.node.scale = 0;
        this.setParentCallback = function() {
          var dis = CMath.Distance(target.position, _this.node.position);
          var moveTime = dis / 1950;
          var targetPos = CMath.ConvertToNodeSpaceAR(target, _this.node);
          var delayTime = 0;
          var delayTime2 = 0;
          0 == score && (delayTime2 = 1);
          var labelActions = [];
          if (_this.Text.node.active) {
            _this.Text.node.scale = 0;
            _this.Text.node.opacity = 255;
            _this.Text.node.runAction(cc.sequence(cc.scaleTo(.1, 1.2 * scale), cc.callFunc(function() {
              0 == score && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "timeup");
            }), cc.delayTime(.4), cc.scaleTo(.1, 1 * scale), cc.delayTime(delayTime2), cc.spawn(cc.scaleTo(.3, 0), cc.fadeOut(.1)), cc.callFunc(function() {
              if (0 == score) {
                console.log(" text action done!");
                callback && callback();
              }
            })));
            delayTime = .2;
          }
          if (scoreLabel.node.opacity > 10) {
            labelActions = [ cc.delayTime(delayTime), cc.scaleTo(.1, 1.2 * scale), cc.delayTime(.2), cc.scaleTo(.1, 1 * scale), cc.callFunc(function() {
              _this.node.runAction(cc.sequence(cc.delayTime(moveTime / 2), cc.callFunc(function() {
                _this.node.setParent(_this.node.getParent().getParent());
              })));
            }), cc.spawn(cc.moveTo(moveTime, targetPos).easing(cc.easeInOut(1)), cc.fadeOut(moveTime)), cc.scaleTo(.3, 0), cc.callFunc(function() {
              callback && callback();
            }) ];
            scoreLabel.node.runAction(cc.sequence(labelActions));
          }
        };
      };
      ScoreFont.prototype.unuse = function() {
        console.log(" score - unuse-----------------------------");
        this.Text.node.x = 0;
        this.Text.node.y = 0;
        this.Text.node.stopAllActions();
        this.ScoreFail.node.x = 0;
        this.ScoreFail.node.y = 22;
        this.ScoreSuccess.node.x = 0;
        this.ScoreSuccess.node.y = 22;
        this.ScoreFail.node.stopAllActions();
        this.ScoreFail.node.scale = 1;
        this.ScoreFail.node.opacity = 255;
        this.ScoreSuccess.node.stopAllActions();
        this.ScoreSuccess.node.scale = 1;
        this.ScoreSuccess.node.opacity = 255;
        this.ScoreFail.node.active = false;
        this.ScoreSuccess.node.active = false;
        this.node.active = false;
        this.node.stopAllActions();
        this.setParentCallback = null;
      };
      ScoreFont = __decorate([ ccclass ], ScoreFont);
      return ScoreFont;
    }(cc.Component);
    exports.default = ScoreFont;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game"
  } ],
  ShaderManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95458eY4WhITJgW8y1arDdH", "ShaderManager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderTemplate_1 = require("./ShaderTemplate");
    var renderEngine = cc.renderer.renderEngine;
    var Material = renderEngine.Material;
    var renderer = renderEngine.renderer;
    var gfx = renderEngine.gfx;
    var ShaderManager = function() {
      function ShaderManager() {
        var programLib = cc.renderer["_forward"]["_programLib"];
        if (!programLib) {
          console.error("programLib not exist!");
          return;
        }
        for (var _i = 0, templates_1 = ShaderTemplate_1.templates; _i < templates_1.length; _i++) {
          var template = templates_1[_i];
          programLib._templates[template.name] || programLib.define(template.name, template.vert, template.frag, template.defines);
        }
      }
      Object.defineProperty(ShaderManager, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new ShaderManager();
        },
        enumerable: true,
        configurable: true
      });
      return ShaderManager;
    }();
    exports.ShaderManager = ShaderManager;
    false;
    var TransitionMaterial = function(_super) {
      __extends(TransitionMaterial, _super);
      function TransitionMaterial() {
        var _this = _super.call(this) || this;
        _this.time = 0;
        _this.range = .1;
        var pass = new renderer.Pass("transition_sprite");
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var mainTech = new renderer.Technique([ "transparent" ], [ {
          name: "texture",
          type: renderer.PARAM_TEXTURE_2D
        }, {
          name: "color",
          type: renderer.PARAM_COLOR4
        }, {
          name: "time",
          type: renderer.PARAM_FLOAT
        }, {
          name: "range",
          type: renderer.PARAM_FLOAT
        } ], [ pass ]);
        _this["_color"] = {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        };
        _this["_effect"] = new renderer.Effect([ mainTech ], {
          color: _this._color,
          time: _this.time,
          range: _this.range
        }, [ {
          name: "useTexture",
          value: true
        }, {
          name: "useModel",
          value: false
        }, {
          name: "useColor",
          value: true
        } ]);
        _this["_mainTech"] = mainTech;
        _this["_texture"] = null;
        return _this;
      }
      Object.defineProperty(TransitionMaterial.prototype, "effect", {
        get: function() {
          return this._effect;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(TransitionMaterial.prototype, "texture", {
        get: function() {
          return this._texture;
        },
        set: function(val) {
          if (this._texture !== val) {
            this["_texture"] = val;
            this._effect.setProperty("texture", val.getImpl());
            this._texIds["texture"] = val.getId();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(TransitionMaterial.prototype, "useModel", {
        get: function() {
          return this._effect.getDefine("useModel");
        },
        set: function(val) {
          this._effect.define("useModel", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(TransitionMaterial.prototype, "useTexture", {
        get: function() {
          return this._effect.getDefine("useTexture");
        },
        set: function(val) {
          this._effect.define("useTexture", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(TransitionMaterial.prototype, "useColor", {
        get: function() {
          return this._effect.getDefine("useColor");
        },
        set: function(val) {
          this._effect.define("useColor", val);
        },
        enumerable: true,
        configurable: true
      });
      TransitionMaterial.prototype.setProperty = function(key, val) {
        this._effect.setProperty(key, val);
      };
      TransitionMaterial.prototype.clone = function() {
        var copy = new TransitionMaterial();
        copy._mainTech.copy(this._mainTech);
        copy.texture = this.texture;
        copy.useTexture = this.useTexture;
        copy.useModel = this.useModel;
        copy.useColor = this.useColor;
        copy.updateHash();
        return copy;
      };
      return TransitionMaterial;
    }(Material);
    exports.TransitionMaterial = TransitionMaterial;
    var WaveMaterial = function(_super) {
      __extends(WaveMaterial, _super);
      function WaveMaterial() {
        var _this = _super.call(this) || this;
        _this.time = 0;
        _this.range = 2;
        _this.deltaTime = 0;
        var pass = new renderer.Pass("wave_sprite");
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var mainTech = new renderer.Technique([ "transparent" ], [ {
          name: "texture",
          type: renderer.PARAM_TEXTURE_2D
        }, {
          name: "color",
          type: renderer.PARAM_COLOR4
        }, {
          name: "time",
          type: renderer.PARAM_FLOAT
        }, {
          name: "deltaTime",
          type: renderer.PARAM_FLOAT
        }, {
          name: "range",
          type: renderer.PARAM_FLOAT
        } ], [ pass ]);
        _this["_color"] = {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        };
        _this["_effect"] = new renderer.Effect([ mainTech ], {
          color: _this._color,
          time: _this.time,
          range: _this.range,
          deltaTime: _this.deltaTime
        }, [ {
          name: "useTexture",
          value: true
        }, {
          name: "useModel",
          value: false
        }, {
          name: "useColor",
          value: true
        } ]);
        _this["_mainTech"] = mainTech;
        _this["_texture"] = null;
        return _this;
      }
      Object.defineProperty(WaveMaterial.prototype, "effect", {
        get: function() {
          return this._effect;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WaveMaterial.prototype, "texture", {
        get: function() {
          return this._texture;
        },
        set: function(val) {
          if (this._texture !== val) {
            this["_texture"] = val;
            this._effect.setProperty("texture", val.getImpl());
            this._texIds["texture"] = val.getId();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WaveMaterial.prototype, "useModel", {
        get: function() {
          return this._effect.getDefine("useModel");
        },
        set: function(val) {
          this._effect.define("useModel", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WaveMaterial.prototype, "useTexture", {
        get: function() {
          return this._effect.getDefine("useTexture");
        },
        set: function(val) {
          this._effect.define("useTexture", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WaveMaterial.prototype, "useColor", {
        get: function() {
          return this._effect.getDefine("useColor");
        },
        set: function(val) {
          this._effect.define("useColor", val);
        },
        enumerable: true,
        configurable: true
      });
      WaveMaterial.prototype.setProperty = function(key, val) {
        this._effect.setProperty(key, val);
      };
      WaveMaterial.prototype.clone = function() {
        var copy = new TransitionMaterial();
        copy._mainTech.copy(this._mainTech);
        copy.texture = this.texture;
        copy.useTexture = this.useTexture;
        copy.useModel = this.useModel;
        copy.useColor = this.useColor;
        copy.updateHash();
        return copy;
      };
      return WaveMaterial;
    }(Material);
    exports.WaveMaterial = WaveMaterial;
    var ButterflySpringMaterial = function(_super) {
      __extends(ButterflySpringMaterial, _super);
      function ButterflySpringMaterial() {
        var _this = _super.call(this) || this;
        var pass = new renderer.Pass("butterfly_spring");
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var mainTech = new renderer.Technique([ "transparent" ], [ {
          name: "texture",
          type: renderer.PARAM_TEXTURE_2D
        }, {
          name: "color",
          type: renderer.PARAM_COLOR4
        } ], [ pass ]);
        _this["_color"] = {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        };
        _this["_effect"] = new renderer.Effect([ mainTech ], {
          color: _this._color
        }, [ {
          name: "useTexture",
          value: true
        }, {
          name: "useModel",
          value: false
        }, {
          name: "useColor",
          value: true
        } ]);
        _this["_mainTech"] = mainTech;
        _this["_texture"] = null;
        return _this;
      }
      Object.defineProperty(ButterflySpringMaterial.prototype, "effect", {
        get: function() {
          return this._effect;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ButterflySpringMaterial.prototype, "texture", {
        get: function() {
          return this._texture;
        },
        set: function(val) {
          if (this._texture !== val) {
            this["_texture"] = val;
            this._effect.setProperty("texture", val.getImpl());
            this._texIds["texture"] = val.getId();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ButterflySpringMaterial.prototype, "useModel", {
        get: function() {
          return this._effect.getDefine("useModel");
        },
        set: function(val) {
          this._effect.define("useModel", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ButterflySpringMaterial.prototype, "useTexture", {
        get: function() {
          return this._effect.getDefine("useTexture");
        },
        set: function(val) {
          this._effect.define("useTexture", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ButterflySpringMaterial.prototype, "useColor", {
        get: function() {
          return this._effect.getDefine("useColor");
        },
        set: function(val) {
          this._effect.define("useColor", val);
        },
        enumerable: true,
        configurable: true
      });
      ButterflySpringMaterial.prototype.setProperty = function(key, val) {
        this._effect.setProperty(key, val);
      };
      ButterflySpringMaterial.prototype.setDefine = function(key, val) {
        this._effect.define(key, val);
      };
      ButterflySpringMaterial.prototype.clone = function() {
        var copy = new TransitionMaterial();
        copy._mainTech.copy(this._mainTech);
        copy.texture = this.texture;
        copy.useTexture = this.useTexture;
        copy.useModel = this.useModel;
        copy.useColor = this.useColor;
        copy.updateHash();
        return copy;
      };
      return ButterflySpringMaterial;
    }(Material);
    exports.ButterflySpringMaterial = ButterflySpringMaterial;
    var PointWaveMaterial = function(_super) {
      __extends(PointWaveMaterial, _super);
      function PointWaveMaterial() {
        var _this = _super.call(this) || this;
        _this.time = 0;
        _this.range = 2;
        _this.deltaTime = 0;
        _this.point = cc.v2(0, 0);
        var pass = new renderer.Pass("point_wave");
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var mainTech = new renderer.Technique([ "transparent" ], [ {
          name: "texture",
          type: renderer.PARAM_TEXTURE_2D
        }, {
          name: "color",
          type: renderer.PARAM_COLOR4
        }, {
          name: "point",
          type: renderer.PARAM_FLOAT2
        }, {
          name: "time",
          type: renderer.PARAM_FLOAT
        }, {
          name: "deltaTime",
          type: renderer.PARAM_FLOAT
        }, {
          name: "range",
          type: renderer.PARAM_FLOAT
        } ], [ pass ]);
        _this["_color"] = {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        };
        _this["_effect"] = new renderer.Effect([ mainTech ], {
          color: _this._color,
          time: _this.time,
          range: _this.range,
          deltaTime: _this.deltaTime,
          point: _this.point
        }, [ {
          name: "useTexture",
          value: true
        }, {
          name: "useModel",
          value: false
        }, {
          name: "useColor",
          value: true
        } ]);
        _this["_mainTech"] = mainTech;
        _this["_texture"] = null;
        return _this;
      }
      Object.defineProperty(PointWaveMaterial.prototype, "effect", {
        get: function() {
          return this._effect;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PointWaveMaterial.prototype, "texture", {
        get: function() {
          return this._texture;
        },
        set: function(val) {
          if (this._texture !== val) {
            this["_texture"] = val;
            this._effect.setProperty("texture", val.getImpl());
            this._texIds["texture"] = val.getId();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PointWaveMaterial.prototype, "useModel", {
        get: function() {
          return this._effect.getDefine("useModel");
        },
        set: function(val) {
          this._effect.define("useModel", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PointWaveMaterial.prototype, "useTexture", {
        get: function() {
          return this._effect.getDefine("useTexture");
        },
        set: function(val) {
          this._effect.define("useTexture", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PointWaveMaterial.prototype, "useColor", {
        get: function() {
          return this._effect.getDefine("useColor");
        },
        set: function(val) {
          this._effect.define("useColor", val);
        },
        enumerable: true,
        configurable: true
      });
      PointWaveMaterial.prototype.setProperty = function(key, val) {
        this._effect.setProperty(key, val);
      };
      PointWaveMaterial.prototype.setDefine = function(key, val) {
        this._effect.define(key, val);
      };
      PointWaveMaterial.prototype.clone = function() {
        var copy = new TransitionMaterial();
        copy._mainTech.copy(this._mainTech);
        copy.texture = this.texture;
        copy.useTexture = this.useTexture;
        copy.useModel = this.useModel;
        copy.useColor = this.useColor;
        copy.updateHash();
        return copy;
      };
      return PointWaveMaterial;
    }(Material);
    exports.PointWaveMaterial = PointWaveMaterial;
    var PixelStyleMaterial = function(_super) {
      __extends(PixelStyleMaterial, _super);
      function PixelStyleMaterial() {
        var _this = _super.call(this) || this;
        var pass = new renderer.Pass("pixel_style");
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var mainTech = new renderer.Technique([ "transparent" ], [ {
          name: "texture",
          type: renderer.PARAM_TEXTURE_2D
        }, {
          name: "color",
          type: renderer.PARAM_COLOR4
        }, {
          name: "sampleCount",
          type: renderer.PARAM_FLOAT
        } ], [ pass ]);
        _this["_color"] = {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        };
        _this["_effect"] = new renderer.Effect([ mainTech ], {
          color: _this._color,
          sampleCount: 100
        }, [ {
          name: "useTexture",
          value: true
        }, {
          name: "useModel",
          value: false
        }, {
          name: "disableColor",
          value: false
        }, {
          name: "useColor",
          value: true
        } ]);
        _this["_mainTech"] = mainTech;
        _this["_texture"] = null;
        return _this;
      }
      Object.defineProperty(PixelStyleMaterial.prototype, "effect", {
        get: function() {
          return this._effect;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelStyleMaterial.prototype, "texture", {
        get: function() {
          return this._texture;
        },
        set: function(val) {
          if (this._texture !== val) {
            this["_texture"] = val;
            this._effect.setProperty("texture", val.getImpl());
            this._texIds["texture"] = val.getId();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelStyleMaterial.prototype, "useModel", {
        get: function() {
          return this._effect.getDefine("useModel");
        },
        set: function(val) {
          this._effect.define("useModel", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelStyleMaterial.prototype, "useTexture", {
        get: function() {
          return this._effect.getDefine("useTexture");
        },
        set: function(val) {
          this._effect.define("useTexture", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelStyleMaterial.prototype, "useColor", {
        get: function() {
          return this._effect.getDefine("useColor");
        },
        set: function(val) {
          this._effect.define("useColor", val);
        },
        enumerable: true,
        configurable: true
      });
      PixelStyleMaterial.prototype.setProperty = function(key, val) {
        this._effect.setProperty(key, val);
      };
      PixelStyleMaterial.prototype.setDefine = function(key, val) {
        this._effect.define(key, val);
      };
      PixelStyleMaterial.prototype.clone = function() {
        var copy = new TransitionMaterial();
        copy._mainTech.copy(this._mainTech);
        copy.texture = this.texture;
        copy.useTexture = this.useTexture;
        copy.useModel = this.useModel;
        copy.useColor = this.useColor;
        copy.updateHash();
        return copy;
      };
      return PixelStyleMaterial;
    }(Material);
    exports.PixelStyleMaterial = PixelStyleMaterial;
    var PixelSpineMaterial = function(_super) {
      __extends(PixelSpineMaterial, _super);
      function PixelSpineMaterial() {
        var _this = _super.call(this) || this;
        var pass = new renderer.Pass("spine_pxiel");
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var mainTech = new renderer.Technique([ "transparent" ], [ {
          name: "texture",
          type: renderer.PARAM_TEXTURE_2D
        }, {
          name: "sampleCount",
          type: renderer.PARAM_FLOAT
        } ], [ pass ]);
        _this["_effect"] = new renderer.Effect([ mainTech ], {
          sampleCount: 100
        }, [ {
          name: "useModel",
          value: true
        }, {
          name: "disableColor",
          value: false
        }, {
          name: "alphaTest",
          value: false
        }, {
          name: "use2DPos",
          value: true
        }, {
          name: "useTint",
          value: false
        } ]);
        _this["_mainTech"] = mainTech;
        _this["_texture"] = null;
        return _this;
      }
      Object.defineProperty(PixelSpineMaterial.prototype, "effect", {
        get: function() {
          return this._effect;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelSpineMaterial.prototype, "texture", {
        get: function() {
          return this._texture;
        },
        set: function(val) {
          if (this._texture !== val) {
            this["_texture"] = val;
            this._effect.setProperty("texture", val.getImpl());
            this._texIds["texture"] = val.getId();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelSpineMaterial.prototype, "useModel", {
        get: function() {
          return this._effect.getDefine("useModel");
        },
        set: function(val) {
          this._effect.define("useModel", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelSpineMaterial.prototype, "use2DPos", {
        get: function() {
          return this._effect.getDefine("use2DPos");
        },
        set: function(val) {
          this._effect.define("use2DPos", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelSpineMaterial.prototype, "alphaTest", {
        get: function() {
          return this._effect.getDefine("alphaTest");
        },
        set: function(val) {
          this._effect.define("alphaTest", val);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PixelSpineMaterial.prototype, "useTint", {
        get: function() {
          return this._effect.getDefine("useTint");
        },
        set: function(val) {
          this._effect.define("useTint", val);
        },
        enumerable: true,
        configurable: true
      });
      PixelSpineMaterial.prototype.setProperty = function(key, val) {
        this._effect.setProperty(key, val);
      };
      PixelSpineMaterial.prototype.setDefine = function(key, val) {
        this._effect.define(key, val);
      };
      PixelSpineMaterial.prototype.clone = function() {
        var copy = new TransitionMaterial();
        copy._mainTech.copy(this._mainTech);
        copy.texture = this.texture;
        copy.useTexture = this.useTexture;
        copy.useModel = this.useModel;
        copy.updateHash();
        return copy;
      };
      return PixelSpineMaterial;
    }(Material);
    exports.PixelSpineMaterial = PixelSpineMaterial;
    cc._RF.pop();
  }, {
    "./ShaderTemplate": "ShaderTemplate"
  } ],
  ShaderTemplate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d01daVCtJtLz5bhMte3qIUW", "ShaderTemplate");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.templates = [ {
      name: "transition_sprite",
      vert: "\n    uniform mat4 viewProj;\n    attribute vec3 a_position;\n    attribute lowp vec4 a_color;\n    varying mediump vec4 v_pos;\n    #ifdef useModel \n        uniform mat4 model;\n    #endif\n    #ifdef useTexture\n        attribute mediump vec2 a_uv0;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifndef useColor \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {\n        mat4 mvp;\n        #ifdef useModel\n             mvp = viewProj * model;\n        #else\n             mvp = viewProj;  \n        #endif  \n        vec4 pos = mvp * vec4(a_position, 1);\n        #ifndef useColor\n             v_fragmentColor = a_color;\n        #endif\n        #ifdef useTexture    \n             uv0 = a_uv0;  \n        #endif  \n        v_pos = pos;\n        gl_Position = pos;\n    }",
      frag: "\n    uniform float time;\n    uniform float range;\n    varying mediump vec4 v_pos;\n    #ifdef useTexture  \n        uniform sampler2D texture;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifdef useColor\n        uniform lowp vec4 color;\n    #else  \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {  \n        #ifdef useColor    \n             vec4 o = color;\n        #else\n             vec4 o = v_fragmentColor;  \n        #endif  \n        #ifdef useTexture    \n             o *= texture2D(texture, uv0); \n             if (uv0.y >= time) {\n                float factor = abs(uv0.y - time);\n                if (factor > range) o.w *= 0.0;\n                else o.w *= (1.0-factor/range);\n                \n            } else {\n                o.w *=  1.0;\n            }\n        #else\n            float px = v_pos.x + 1.0;\n            if (px <= time*2.0) {\n                float factor = time*2.0 - px;\n                if (factor > range) o.w *= 0.0;\n                else o.w *= (1.0-factor/range);\n            } else {\n                o.w *=  1.0;\n            }\n        #endif  \n        \n        gl_FragColor = o;\n    }",
      defines: [ {
        name: "useModel"
      }, {
        name: "useTexture"
      }, {
        name: "useColor"
      } ]
    }, {
      name: "butterfly_spring",
      vert: "\n  \n    uniform mat4 viewProj;\n    attribute vec3 a_position;\n    attribute lowp vec4 a_color;\n    #ifdef useModel \n        uniform mat4 model;\n    #endif\n    #ifdef useTexture\n        attribute mediump vec2 a_uv0;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifndef useColor \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {\n        mat4 mvp;\n        #ifdef useModel\n             mvp = viewProj * model;\n        #else\n             mvp = viewProj;  \n        #endif  \n        vec4 pos = mvp * vec4(a_position, 1);\n        #ifndef useColor\n             v_fragmentColor = a_color;\n        #endif\n        #ifdef useTexture    \n             uv0 = a_uv0;  \n        #endif  \n    \n        gl_Position = pos;\n    }",
      frag: "\n    #ifdef useTexture  \n        uniform sampler2D texture;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifdef useColor\n        uniform lowp vec4 color;\n    #else  \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {  \n        #ifdef useColor    \n             vec4 o = color;\n        #else\n             vec4 o = v_fragmentColor;  \n        #endif  \n        #ifdef useTexture    \n             vec2 uv_temp = uv0;\n             float x = uv_temp.x;\n             float y = uv_temp.y;\n             float offset = uv0.x * 3.14 / 2.0;\n             o.r = offset;\n             o *= texture2D(texture, uv_temp); \n\n        #endif  \n        gl_FragColor = o;\n    }",
      defines: [ {
        name: "useModel"
      }, {
        name: "useTexture"
      }, {
        name: "useColor"
      } ]
    }, {
      name: "wave_sprite",
      vert: "\n    uniform float time;\n    uniform float deltaTime;\n    varying float v_time;\n    varying float v_deltaTime;\n    uniform mat4 viewProj;\n    attribute vec3 a_position;\n    attribute lowp vec4 a_color;\n    #ifdef useModel \n        uniform mat4 model;\n    #endif\n    #ifdef useTexture\n        attribute mediump vec2 a_uv0;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifndef useColor \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {\n        mat4 mvp;\n        #ifdef useModel\n             mvp = viewProj * model;\n        #else\n             mvp = viewProj;  \n        #endif  \n        vec4 pos = mvp * vec4(a_position, 1);\n        #ifndef useColor\n             v_fragmentColor = a_color;\n        #endif\n        #ifdef useTexture    \n             uv0 = a_uv0;  \n        #endif  \n        v_time = time;\n        v_deltaTime = deltaTime;\n        gl_Position = pos;\n    }",
      frag: "\n    varying float v_time;\n    varying float v_deltaTime;\n    \n    uniform float range;\n    #ifdef useTexture  \n        uniform sampler2D texture;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifdef useColor\n        uniform lowp vec4 color;\n    #else  \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {  \n        #ifdef useColor    \n             vec4 o = color;\n        #else\n             vec4 o = v_fragmentColor;  \n        #endif  \n        #ifdef useTexture    \n             vec2 uv_temp = uv0;\n             float x = uv_temp.x;\n             float y = uv_temp.y;\n             uv_temp.x += range*(sin(v_deltaTime + v_time + y) - sin(v_time + y));\n             uv_temp.y += range*(sin(v_deltaTime + v_time + x) - sin(v_time + x));\n             \n             o *= texture2D(texture, uv_temp); \n            \n        #endif  \n        //if (abs(o.x - 1.0) < 0.05 && abs(o.y - 1.0) < 0.05 && abs(o.z - 1.0) < 0.05) o.w = 0.0;\n        gl_FragColor = o;\n    }",
      defines: [ {
        name: "useModel"
      }, {
        name: "useTexture"
      }, {
        name: "useColor"
      } ]
    }, {
      name: "point_wave",
      vert: "\n    uniform float time;\n    uniform float deltaTime;\n    varying float v_time;\n    varying float v_deltaTime;\n    uniform mat4 viewProj;\n    attribute vec3 a_position;\n    attribute lowp vec4 a_color;\n    #ifdef useModel \n        uniform mat4 model;\n    #endif\n    #ifdef useTexture\n        attribute mediump vec2 a_uv0;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifndef useColor \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {\n        mat4 mvp;\n        #ifdef useModel\n             mvp = viewProj * model;\n        #else\n             mvp = viewProj;  \n        #endif  \n        vec4 pos = mvp * vec4(a_position, 1);\n        #ifndef useColor\n             v_fragmentColor = a_color;\n        #endif\n        #ifdef useTexture    \n             uv0 = a_uv0;  \n        #endif  \n        v_time = time;\n        v_deltaTime = deltaTime;\n        gl_Position = pos;\n    }",
      frag: "\n    varying float v_time;\n    varying float v_deltaTime;\n    uniform mediump vec2 point;  \n    uniform float range;\n    #ifdef useTexture  \n        uniform sampler2D texture;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifdef useColor\n        uniform lowp vec4 color;\n    #else  \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {  \n        #ifdef useColor    \n             vec4 o = color;\n        #else\n             vec4 o = v_fragmentColor;  \n        #endif  \n        #ifdef useTexture    \n             vec2 uv_temp = uv0;\n             float x = uv_temp.x;\n             float y = uv_temp.y;\n             float r = sqrt((x-point.x)*(x-point.x) + (y-point.y)*(y-point.y));\n             float f = abs(range - abs(r - v_time));\n             if (abs(r - v_time) < range) {\n                 if(x > point.x) {\n                    uv_temp.x -= 0.01;\n                 } else if (x < point.x) {\n                     uv_temp.x += 0.01;\n                 }\n               \n                 if(y > point.y) {\n                    uv_temp.y -= 0.01;\n                 } else if (y > point.y) {\n                     uv_temp.y += 0.01;\n                 }\n                 \n                o.r *= (1.0 + f);\n                o.b *= (1.0 + f);\n                o.g *= (1.0 + f);\n             \n             } else {\n                #ifdef useShadow\n                 if (f > 0.3) f = 0.3;\n                o.r *= (1.0 - f);\n                o.b *= (1.0 - f);\n                o.g *= (1.0 - f);\n                #endif \n\n             }\n             o *= texture2D(texture, uv_temp); \n            \n        #endif  \n        //if (abs(o.x - 1.0) < 0.05 && abs(o.y - 1.0) < 0.05 && abs(o.z - 1.0) < 0.05) o.w = 0.0;\n        gl_FragColor = o;\n    }",
      defines: [ {
        name: "useModel"
      }, {
        name: "useTexture"
      }, {
        name: "useColor"
      } ]
    }, {
      name: "pixel_style",
      vert: "\n    uniform mat4 viewProj;\n    attribute vec3 a_position;\n    attribute lowp vec4 a_color;\n    #ifdef useModel \n        uniform mat4 model;\n    #endif\n    #ifdef useTexture\n        attribute mediump vec2 a_uv0;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifndef useColor \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {\n        mat4 mvp;\n        #ifdef useModel\n             mvp = viewProj * model;\n        #else\n             mvp = viewProj;  \n        #endif  \n        vec4 pos = mvp * vec4(a_position, 1);\n        #ifndef useColor\n             v_fragmentColor = a_color;\n        #endif\n        #ifdef useTexture    \n             uv0 = a_uv0;  \n        #endif  \n        gl_Position = pos;\n    }",
      frag: "\n    uniform float sampleCount;\n    #ifdef useTexture  \n        uniform sampler2D texture;  \n        varying mediump vec2 uv0;\n    #endif\n    #ifdef useColor\n        uniform lowp vec4 color;\n    #else  \n        varying lowp vec4 v_fragmentColor;\n    #endif\n    void main () {  \n        #ifdef useColor    \n             vec4 o = color;\n        #else\n             vec4 o = v_fragmentColor;  \n        #endif  \n        #ifdef useTexture    \n             vec2 uv_temp = uv0;\n             float count = 1.0 / sampleCount;\n\n             float i = floor(uv0.x / count);\n             float j = floor(uv0.y / count);\n             float startX = count * i;\n             float endX = startX + count;\n             float pointX = (startX + endX) / 2.0;\n             \n\n             float startY = count * j;\n             float endY= startY + count;\n             float pointY = (startY + endY) / 2.0;\n             \n             if (uv0.x > startX && uv0.x < endX && uv0.y > startY && uv0.y < endY) {\n                uv_temp.x = pointX;\n                uv_temp.y = pointY;\n            }\n             o *= texture2D(texture, uv_temp); \n             #ifdef disableColor  \n                 float av = (o.r+o.g+o.b) / 3.0;  \n                 o.r = av;\n                 o.g = av;\n                 o.b = av;\n            #endif  \n        #endif  \n        gl_FragColor = o;\n    }",
      defines: [ {
        name: "useModel"
      }, {
        name: "useTexture"
      }, {
        name: "useColor"
      } ]
    }, {
      name: "spine_pxiel",
      vert: "\n    uniform mat4 viewProj;\n    #ifdef use2DPos\n      attribute vec2 a_position;\n    #else\n      attribute vec3 a_position;\n    #endif\n    attribute lowp vec4 a_color;\n    #ifdef useTint\n      attribute lowp vec4 a_color0;\n    #endif\n    #ifdef useModel  \n      uniform mat4 model;\n    #endif\n    attribute mediump vec2 a_uv0;\n    varying mediump vec2 uv0;\n    varying lowp vec4 v_light;\n    #ifdef useTint  \n      varying lowp vec4 v_dark;\n    #endif\n    void main () {\n        mat4 mvp;\n        #ifdef useModel    \n           mvp = viewProj * model;  \n        #else    \n           mvp = viewProj;  \n        #endif\n        #ifdef use2DPos  \n           vec4 pos = mvp * vec4(a_position, 0, 1);\n        #else  \n           vec4 pos = mvp * vec4(a_position, 1);  \n        #endif  \n        v_light = a_color;  \n        #ifdef useTint    \n           v_dark = a_color0;  \n        #endif  \n        uv0 = a_uv0;  \n        gl_Position = pos;\n    }",
      frag: "\n        uniform float sampleCount;\n        uniform sampler2D texture;\n        varying mediump vec2 uv0;\n        #ifdef alphaTest  \n           uniform lowp float alphaThreshold;\n        #endif\n        varying lowp vec4 v_light;\n        #ifdef useTint\n           varying lowp vec4 v_dark;\n        #endif\n        void main () {\n                vec2 uv_temp = uv0;\n                float count = 1.0 / sampleCount;\n\n                float i = floor(uv0.x / count);\n                float j = floor(uv0.y / count);\n                float startX = count * i;\n                float endX = startX + count;\n                float pointX = (startX + endX) / 2.0;\n             \n\n                float startY = count * j;\n                float endY= startY + count;\n                float pointY = (startY + endY) / 2.0;\n             \n                if (uv0.x > startX && uv0.x < endX && uv0.y > startY && uv0.y < endY) {\n                   uv_temp.x = pointX;\n                   uv_temp.y = pointY;\n                }\n\n                vec4 texColor = texture2D(texture, uv_temp);\n                vec4 finalColor;  \n                #ifdef useTint\n                    finalColor.a = v_light.a * texColor.a;    \n                    finalColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;  \n                #else\n                    finalColor = texColor * v_light;\n                #endif  \n                #ifdef alphaTest    \n                    if (finalColor.a <= alphaThreshold)      \n                        discard;  \n                #endif  \n                #ifdef disableColor    \n                    float av = (finalColor.r+finalColor.g+finalColor.b) / 3.0;  \n                    finalColor.r = av;\n                    finalColor.g = av;\n                    finalColor.b = av;\n                #endif  \n                gl_FragColor = finalColor;\n        }",
      defines: [ {
        name: "useModel"
      }, {
        name: "alphaTest"
      }, {
        name: "use2DPos"
      }, {
        name: "useTint"
      } ]
    } ];
    cc._RF.pop();
  }, {} ],
  Skill: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02d8d4FjeFEz4GYY7djfM63", "Skill");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameFactory_1 = require("./Controller/GameFactory");
    var Const_1 = require("./Const");
    var Game_1 = require("./Controller/Game");
    var CelerSDK_1 = require("./Controller/CelerSDK");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var Point_1 = require("./Point");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Skill = function(_super) {
      __extends(Skill, _super);
      function Skill() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(Skill.prototype, "Background", {
        get: function() {
          return this.node.getChildByName("Background").getComponent(cc.Sprite);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Skill.prototype, "Animation", {
        get: function() {
          return this.node.getComponent(cc.Animation);
        },
        enumerable: true,
        configurable: true
      });
      Skill.prototype.reuse = function() {
        var _this = this;
        this.node.scale = 0;
        this.pressCallback = arguments[0][0];
        this.Background.spriteFrame = arguments[0][1];
        this.skillType = arguments[0][2];
        var index = arguments[0][3];
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          if (_this.node.zIndex != _this.node.getParent().childrenCount || _this.node.scale <= .98 || _this.node.scale >= 1.1) return;
          if (Game_1.Game.getGameTime() <= 0) {
            console.log(" game time up reuse:", Const_1.SkillType[_this.skillType]);
            return;
          }
          if (Game_1.Game.checkIsFull(Game_1.Game.cardIndex) && _this.skillType != Const_1.SkillType.Time) {
            console.log("this card is full:", Game_1.Game.cardIndex);
            return;
          }
          var currentReward = Game_1.Game.CurrentReward.children[0];
          if (_this.skillType == Const_1.SkillType.Magic) {
            if (!currentReward || !currentReward.getComponent(Point_1.default)) {
              console.log(" not CurrentRewardmagicSkill !");
              return;
            }
            var point = currentReward.getComponent(Point_1.default);
            if (point && Game_1.Game.checkIsFullFromWord(Game_1.Game.cardIndex, point.Word)) {
              console.log(" \u6b64\u5217\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1magicSkill");
              return;
            }
          }
          if (Game_1.Game.getCurMode() != Const_1.SkillType.Normal) {
            console.error(" is using other skill now:", Const_1.SkillType[Game_1.Game.getCurMode()]);
            return;
          }
          var useFunc = function() {
            console.log(" use skill :", Const_1.SkillType[_this.skillType]);
            Game_1.Game.useSkill(_this.skillType);
            if (_this.pressCallback) {
              _this.pressCallback();
              _this.pressCallback = null;
            }
            GameFactory_1.gFactory.putObj("Skill", _this.node);
          };
          if (CelerSDK_1.CelerSDK.inst.isNew() && !Game_1.Game.skillGuide[_this.skillType]) {
            Game_1.Game.skillGuide[_this.skillType] = true;
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOW_SKILL_GUIDE, _this.skillType, useFunc);
          } else useFunc();
        }, this);
        this.node.x = -120;
        this.node.runAction(cc.sequence(cc.spawn(cc.sequence(cc.moveTo(.1, -60, 214), cc.moveTo(.1, 0, 67 + 5 * index)), cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, .8))), cc.callFunc(function() {
          _this.Animation.play();
        }), cc.scaleTo(.1, 1), cc.callFunc(function() {})));
      };
      Skill.prototype.unuse = function() {
        this.node.targetOff(this);
        this.node.stopAllActions();
        this.pressCallback = null;
      };
      Skill = __decorate([ ccclass ], Skill);
      return Skill;
    }(cc.Component);
    exports.default = Skill;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/CelerSDK": "CelerSDK",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Controller/GameFactory": "GameFactory",
    "./Point": "Point"
  } ],
  StepController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e60515g5pBlJXudFf1Z4T3", "StepController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogHandler_1 = require("./LogHandler");
    var StepController = function() {
      function StepController() {
        this.totalStep = [];
        this.curStep = [];
      }
      Object.defineProperty(StepController, "inst", {
        get: function() {
          return this._ins ? this._ins : this._ins = new StepController();
        },
        enumerable: true,
        configurable: true
      });
      StepController.prototype.register = function(complete, totalSteps) {
        this.completeCallback = complete;
        this.totalStep = totalSteps;
      };
      StepController.prototype.nextStep = function(step) {
        if (this.totalStep.indexOf(step) < 0) {
          console.error(" \u6ca1\u6709\u8fd9\u4e00\u6b65\uff1a", step);
          return;
        }
        if (this.curStep.indexOf(step) >= 0) {
          console.warn(" \u6b65\u9aa4\u5df2\u5b8c\u6210\uff1a", step);
          return;
        }
        this.curStep.push(step);
        this.curStep.sort(function(a, b) {
          return a > b ? -1 : 1;
        });
        this.totalStep.sort(function(a, b) {
          return a > b ? -1 : 1;
        });
        LogHandler_1.LogHandler.inst.log(" cur step:", this.curStep.join(","));
        LogHandler_1.LogHandler.inst.log(" total step:", this.totalStep.join(","));
        if (this.curStep.join(",") == this.totalStep.join(",")) {
          LogHandler_1.LogHandler.inst.log(" step done");
          this.totalStep.length = 0;
          this.completeCallback();
          this.completeCallback = null;
        }
      };
      return StepController;
    }();
    exports.gStep = StepController.inst;
    cc._RF.pop();
  }, {
    "./LogHandler": "LogHandler"
  } ],
  SuperSkillLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8917JXrNNKupwEf3iWB7n+", "SuperSkillLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("./Const");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var Game_1 = require("./Controller/Game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SuperEndType;
    (function(SuperEndType) {
      SuperEndType[SuperEndType["TimeUp"] = 0] = "TimeUp";
      SuperEndType[SuperEndType["Complete"] = 1] = "Complete";
    })(SuperEndType = exports.SuperEndType || (exports.SuperEndType = {}));
    var SuperSkillLayer = function(_super) {
      __extends(SuperSkillLayer, _super);
      function SuperSkillLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.SuperLightAtlas = null;
        _this.time = 0;
        return _this;
      }
      Object.defineProperty(SuperSkillLayer.prototype, "Background", {
        get: function() {
          return this.node.getChildByName("Background");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SuperSkillLayer.prototype, "TimeBar", {
        get: function() {
          return this.node.getChildByName("TimeBar").getComponent(cc.ProgressBar);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SuperSkillLayer.prototype, "TimeLabel", {
        get: function() {
          return this.TimeBar.node.getChildByName("TimeLabel").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SuperSkillLayer.prototype, "Light", {
        get: function() {
          return this.node.getChildByName("Light");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SuperSkillLayer.prototype, "SelectCard", {
        get: function() {
          return this.node.getChildByName("SelectCard");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SuperSkillLayer.prototype, "Card1Btn", {
        get: function() {
          return this.SelectCard.getChildByName("Card1");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SuperSkillLayer.prototype, "Card2Btn", {
        get: function() {
          return this.SelectCard.getChildByName("Card2");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SuperSkillLayer.prototype, "ResultAnimation", {
        get: function() {
          return this.node.getChildByName("ResultAnimation").getComponent(cc.Animation);
        },
        enumerable: true,
        configurable: true
      });
      SuperSkillLayer.prototype.onLoad = function() {
        var _this = this;
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_MOUSE_LIGHT, this.updateLight, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.SUPER_END_COMPLETE, this.endComplete, this);
        this.Card1Btn.on(cc.Node.EventType.TOUCH_END, function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SCROLL_CARD, 0);
          _this.SelectCard.active = false;
          _this.TimeBar.node.active = true;
        }, this);
        this.Card2Btn.on(cc.Node.EventType.TOUCH_END, function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SCROLL_CARD, 1);
          _this.SelectCard.active = false;
          _this.TimeBar.node.active = true;
        }, this);
      };
      SuperSkillLayer.prototype.show = function() {
        this.ResultAnimation.once(cc.Animation.EventType.FINISHED, function() {
          setTimeout(function() {
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SKILL_DONE);
          }, 1e3);
        }, this);
        for (var _i = 0, _a = this.Background.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.active = child.name == Const_1.Theme[Game_1.Game.Theme];
        }
        console.log(" \u5f00\u59cb\u6253\u5730\u9f20");
        this.ResultAnimation.node.active = false;
        this.Card1Btn.active = !Game_1.Game.checkIsFull(0);
        this.Card2Btn.active = !Game_1.Game.checkIsFull(1);
        this.SelectCard.active = true;
        this.TimeBar.node.active = false;
        this.time = (window["chichihaoshuaihahaha"], Const_1.SuperTime.LastTime);
        this.node.active = true;
        this.TimeBar.progress = 1;
        this.TimeLabel.string = Math.ceil(this.time).toString();
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHANGE_BGM, "mouse_bgm");
        Game_1.Game.superStart();
        this.updateLight();
      };
      SuperSkillLayer.prototype.updateLight = function() {
        var _loop_1 = function(child) {
          if (parseInt(child.name) <= Game_1.Game.superHighLightCount) {
            if (!child.getComponent(cc.Animation).getAnimationState("shink").isPlaying) {
              child.getComponent(cc.Animation).once(cc.Animation.EventType.FINISHED, function() {
                child.getComponent(cc.Animation).play("shink");
              }, this_1);
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "mouse_light_up");
              child.getComponent(cc.Animation).play("turn");
            }
          } else {
            child.getComponent(cc.Animation).stop();
            child.getComponent(cc.Sprite).spriteFrame = this_1.SuperLightAtlas.getSpriteFrame(Const_1.SuperLight.Gray);
          }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.Light.children; _i < _a.length; _i++) {
          var child = _a[_i];
          _loop_1(child);
        }
      };
      SuperSkillLayer.prototype.hide = function() {
        if (!this.node.active) return;
        this.node.active = false;
        Math.floor(Game_1.Game.getGameTime()) > 30 ? EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHANGE_BGM, "bgm") : EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHANGE_BGM, "bgm_30");
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.NORMAL_BGM);
      };
      SuperSkillLayer.prototype.endTimeUp = function() {
        if (this.ResultAnimation.node.active) return;
        this.TimeBar.node.active = false;
        this.ResultAnimation.node.active = true;
        this.ResultAnimation.play("time_up");
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SMALL_BGM);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "mouse_time_up");
      };
      SuperSkillLayer.prototype.endComplete = function() {
        if (this.ResultAnimation.node.active) return;
        this.TimeBar.node.active = false;
        this.ResultAnimation.node.active = true;
        this.ResultAnimation.play("complete");
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SMALL_BGM);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "mouse_complete");
      };
      SuperSkillLayer.prototype.update = function(dt) {
        if (this.node.active && !this.SelectCard.active && this.time > 0) {
          this.time -= dt;
          this.TimeLabel.string = Math.ceil(this.time).toString();
          this.TimeBar.progress = this.time / Const_1.SuperTime.LastTime;
          this.time <= 0 && this.endTimeUp();
        }
      };
      __decorate([ property(cc.SpriteAtlas) ], SuperSkillLayer.prototype, "SuperLightAtlas", void 0);
      SuperSkillLayer = __decorate([ ccclass ], SuperSkillLayer);
      return SuperSkillLayer;
    }(cc.Component);
    exports.default = SuperSkillLayer;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game"
  } ],
  TimeBonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e173aWv7rdBm6Av7NvVi4Ci", "TimeBonus");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TimeBonus = function(_super) {
      __extends(TimeBonus, _super);
      function TimeBonus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.setParentCallback = null;
        return _this;
      }
      TimeBonus.prototype.reuse = function() {
        var _this = this;
        this.node["_onSetParent"] = this.onSetParent.bind(this);
        var callback = arguments[0][0];
        var target = arguments[0][1];
        this.setParentCallback = function() {
          var dis = CMath.Distance(target.position, _this.node.position);
          var moveTime = dis / 1950;
          var targetPos = CMath.ConvertToNodeSpaceAR(target, _this.node);
          var labelActions = [];
          labelActions = [ cc.scaleTo(.1, 1.2), cc.delayTime(.2), cc.scaleTo(.1, 1), cc.spawn(cc.moveTo(moveTime, targetPos).easing(cc.easeInOut(1)), cc.fadeOut(moveTime)), cc.scaleTo(.3, 0), cc.callFunc(function() {
            callback && callback();
          }) ];
          _this.node.runAction(cc.sequence(labelActions));
        };
      };
      TimeBonus.prototype.unuse = function() {
        this.node.scale = 1;
        this.node.opacity = 255;
      };
      TimeBonus.prototype.onSetParent = function(parent) {
        parent && this.setParentCallback && this.setParentCallback();
      };
      TimeBonus = __decorate([ ccclass ], TimeBonus);
      return TimeBonus;
    }(cc.Component);
    exports.default = TimeBonus;
    cc._RF.pop();
  }, {} ],
  TransitionMask: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc719XWLLZMWpq6bF6rOJX1", "TransitionMask");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderManager_1 = require("./ShaderManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TransitionMask = function(_super) {
      __extends(TransitionMask, _super);
      function TransitionMask() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.transitionMaterial = new ShaderManager_1.TransitionMaterial();
        _this.startTrans = false;
        _this.time = 0;
        return _this;
      }
      TransitionMask.prototype.onLoad = function() {
        var mask = this.getComponent(cc.Mask);
        mask["_material"] = this.transitionMaterial;
        mask["_activateMaterial"]();
        this.transitionMaterial.setProperty("range", .1);
      };
      TransitionMask.prototype.start = function() {};
      TransitionMask.prototype.update = function(dt) {
        if (!this.startTrans) return;
        this.time += 1.2 * dt;
        this.transitionMaterial.setProperty("time", this.time);
      };
      TransitionMask = __decorate([ ccclass ], TransitionMask);
      return TransitionMask;
    }(cc.Component);
    exports.default = TransitionMask;
    cc._RF.pop();
  }, {
    "./ShaderManager": "ShaderManager"
  } ],
  TransitionSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cba704AVFGFZnPDW8Ox6DN", "TransitionSprite");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderManager_1 = require("./ShaderManager");
    var EventManager_1 = require("../Controller/EventManager");
    var EventName_1 = require("../Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TransitionSprite = function(_super) {
      __extends(TransitionSprite, _super);
      function TransitionSprite() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.transitionMaterial = new ShaderManager_1.TransitionMaterial();
        _this.isStart = false;
        _this.time = 1;
        return _this;
      }
      TransitionSprite.prototype.onLoad = function() {
        var sprite = this.getComponent(cc.Sprite);
        sprite["_spriteMaterial"] = this.transitionMaterial;
        sprite["_activateMaterial"]();
        this.transitionMaterial.setProperty("range", .2);
      };
      TransitionSprite.prototype.start = function() {};
      TransitionSprite.prototype.update = function(dt) {
        if (!this.node.active || !this.isStart) {
          this.Time = 1;
          return;
        }
        this.Time -= dt;
        if (this.time <= 0) {
          this.Time = 1;
          this.node.active = false;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GAME_START);
        }
      };
      Object.defineProperty(TransitionSprite.prototype, "Time", {
        get: function() {
          return this.time;
        },
        set: function(val) {
          this.time = val;
          this.transitionMaterial.setProperty("time", this.time);
        },
        enumerable: true,
        configurable: true
      });
      TransitionSprite = __decorate([ ccclass ], TransitionSprite);
      return TransitionSprite;
    }(cc.Component);
    exports.default = TransitionSprite;
    cc._RF.pop();
  }, {
    "../Controller/EventManager": "EventManager",
    "../Controller/EventName": "EventName",
    "./ShaderManager": "ShaderManager"
  } ],
  WaveSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8999cssAlxJF5v8+8wMnCPE", "WaveSprite");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShaderManager_1 = require("./ShaderManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WaveSprite = function(_super) {
      __extends(WaveSprite, _super);
      function WaveSprite() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.wave = new ShaderManager_1.WaveMaterial();
        _this.time = 0;
        return _this;
      }
      WaveSprite.prototype.onLoad = function() {
        var sprite = this.getComponent(cc.Sprite);
        if (!sprite) return;
        sprite["_spriteMaterial"] = this.wave;
        sprite["_activateMaterial"]();
        this.wave.setProperty("range", 1);
      };
      WaveSprite.prototype.start = function() {};
      WaveSprite.prototype.update = function(dt) {
        this.time += 10 * dt;
        this.wave.setProperty("time", this.time);
        this.wave.setProperty("deltaTime", dt);
      };
      WaveSprite = __decorate([ ccclass ], WaveSprite);
      return WaveSprite;
    }(cc.Component);
    exports.default = WaveSprite;
    cc._RF.pop();
  }, {
    "./ShaderManager": "ShaderManager"
  } ],
  celerx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10d05zhUHtDfJgPk46aOLCS", "celerx");
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
}, {}, [ "Card", "Const", "AudioController", "CelerSDK", "EventManager", "EventName", "Game", "GameFactory", "LogHandler", "StepController", "FrameAniBase", "GameScene", "GoldSkillLayer", "Guide", "LoadLayer", "MagicLayer", "PauseLayer", "Point", "ResultLayer", "Score", "ButterFlySpring", "PixelSprite", "PointWave", "ShaderManager", "ShaderTemplate", "TransitionMask", "TransitionSprite", "WaveSprite", "Skill", "SuperSkillLayer", "TimeBonus", "Pad", "HashMap", "celerx" ]);