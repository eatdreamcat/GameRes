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
    cc._RF.push(module, "c3611jDu5hL7auVf9iIBCz5", "AudioController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HashMap_1 = require("../Utils/HashMap");
    var EventManager_1 = require("./EventManager");
    var EventName_1 = require("./EventName");
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
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.CHANGE_BGM, function(name) {
          _this.playMusic(name);
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_EFFECT, function(name) {
          _this.playEffect(name);
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
    "../Utils/HashMap": "HashMap",
    "./EventManager": "EventManager",
    "./EventName": "EventName"
  } ],
  BlueIdle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20036nLdjNApYvTy8Xi4ECH", "BlueIdle");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../../FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BlueIdle = function(_super) {
      __extends(BlueIdle, _super);
      function BlueIdle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BlueIdle.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      BlueIdle.aniName = "BlueIdle";
      BlueIdle = __decorate([ ccclass ], BlueIdle);
      return BlueIdle;
    }(FrameAniBase_1.default);
    exports.default = BlueIdle;
    cc._RF.pop();
  }, {
    "../../FrameAniBase": "FrameAniBase"
  } ],
  BlueLoad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08214k9+Y1NIr0C3aDpVb67", "BlueLoad");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../../FrameAniBase");
    var EventManager_1 = require("../../Controller/EventManager");
    var EventName_1 = require("../../Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BlueLoad = function(_super) {
      __extends(BlueLoad, _super);
      function BlueLoad() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BlueLoad.prototype.onLoad = function() {
        var _this = this;
        _super.prototype.onLoad.call(this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.PLAY_LOAD, function() {
          _this.play();
        }, this);
      };
      BlueLoad.prototype.onKeyFrame = function(key) {
        8 == key && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.BUBBLE_LOAD);
      };
      BlueLoad.prototype.start = function() {};
      BlueLoad.aniName = "BlueLoad";
      BlueLoad = __decorate([ ccclass ], BlueLoad);
      return BlueLoad;
    }(FrameAniBase_1.default);
    exports.default = BlueLoad;
    cc._RF.pop();
  }, {
    "../../Controller/EventManager": "EventManager",
    "../../Controller/EventName": "EventName",
    "../../FrameAniBase": "FrameAniBase"
  } ],
  BubbleBurst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a3f2DDgVZNpIG4fasOghMK", "BubbleBurst");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BubbleBurst = function(_super) {
      __extends(BubbleBurst, _super);
      function BubbleBurst() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BubbleBurst.prototype.play = function() {
        _super.prototype.play.call(this);
      };
      BubbleBurst.aniName = "BubbleBurst";
      BubbleBurst = __decorate([ ccclass ], BubbleBurst);
      return BubbleBurst;
    }(FrameAniBase_1.default);
    exports.default = BubbleBurst;
    cc._RF.pop();
  }, {
    "../FrameAniBase": "FrameAniBase"
  } ],
  BubbleChange: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a817znFDhDCaEwLpCddbyw", "BubbleChange");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BubbleChange = function(_super) {
      __extends(BubbleChange, _super);
      function BubbleChange() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BubbleChange.prototype.play = function() {
        _super.prototype.play.call(this);
      };
      BubbleChange.aniName = "BubbleChange";
      BubbleChange = __decorate([ ccclass ], BubbleChange);
      return BubbleChange;
    }(FrameAniBase_1.default);
    exports.default = BubbleChange;
    cc._RF.pop();
  }, {
    "../FrameAniBase": "FrameAniBase"
  } ],
  BubbleDrop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "623af7xlK1EQ4Szsrycvrsz", "BubbleDrop");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BubbleDrop = function(_super) {
      __extends(BubbleDrop, _super);
      function BubbleDrop() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BubbleDrop.prototype.play = function() {
        _super.prototype.play.call(this);
      };
      BubbleDrop.aniName = "BubbleDrop";
      BubbleDrop = __decorate([ ccclass ], BubbleDrop);
      return BubbleDrop;
    }(FrameAniBase_1.default);
    exports.default = BubbleDrop;
    cc._RF.pop();
  }, {
    "../FrameAniBase": "FrameAniBase"
  } ],
  BubbleHorce: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc741sapJBNlKYdfySF/Y71", "BubbleHorce");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BubbleHorce = function(_super) {
      __extends(BubbleHorce, _super);
      function BubbleHorce() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BubbleHorce.prototype.play = function() {
        _super.prototype.play.call(this);
      };
      BubbleHorce.aniName = "BubbleHorce";
      BubbleHorce = __decorate([ ccclass ], BubbleHorce);
      return BubbleHorce;
    }(FrameAniBase_1.default);
    exports.default = BubbleHorce;
    cc._RF.pop();
  }, {
    "../FrameAniBase": "FrameAniBase"
  } ],
  BubbleIdle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97381k3pDhIrLdCJF11xOn7", "BubbleIdle");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BubbleIdle = function(_super) {
      __extends(BubbleIdle, _super);
      function BubbleIdle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BubbleIdle.prototype.play = function() {
        _super.prototype.play.call(this);
      };
      BubbleIdle.aniName = "BubbleIdle";
      BubbleIdle = __decorate([ ccclass ], BubbleIdle);
      return BubbleIdle;
    }(FrameAniBase_1.default);
    exports.default = BubbleIdle;
    cc._RF.pop();
  }, {
    "../FrameAniBase": "FrameAniBase"
  } ],
  BubbleMatrix: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fc87k3ArdNNIwVYgSiAJGh", "BubbleMatrix");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../Const");
    var Game_1 = require("../Controller/Game");
    exports.MatrixSize = 15;
    exports.UseSize = 11;
    exports.IndexJStart = (exports.MatrixSize - exports.UseSize) / 2;
    exports.IndexJEnd = exports.UseSize + 1;
    var StartRandomPercent = .8;
    var RandomPercentOffset = .7;
    var AddNewBubbleRowCount = 6;
    var SpecialType;
    (function(SpecialType) {
      SpecialType[SpecialType["Normal"] = 0] = "Normal";
      SpecialType[SpecialType["Double"] = 1] = "Double";
      SpecialType[SpecialType["Boom"] = 2] = "Boom";
      SpecialType[SpecialType["Magic"] = 3] = "Magic";
      SpecialType[SpecialType["Horce"] = 4] = "Horce";
    })(SpecialType = exports.SpecialType || (exports.SpecialType = {}));
    var BubbleMatrix = function() {
      function BubbleMatrix() {
        this.matrixData = [];
        this.addRowTotalCount = 0;
        this.firstRow = 0;
        for (var i = 0; i < exports.MatrixSize * exports.MatrixSize; i++) this.matrixData[i] = {
          color: Const_1.BubbleType.Blank,
          bubble: null,
          type: SpecialType.Normal
        };
      }
      Object.defineProperty(BubbleMatrix.prototype, "data", {
        get: function() {
          return this.matrixData;
        },
        enumerable: true,
        configurable: true
      });
      BubbleMatrix.prototype.addRow = function(rowCount) {
        var oldLength = this.matrixData.length;
        this.matrixData.length += rowCount * exports.MatrixSize;
        for (var i = oldLength; i < this.matrixData.length; i++) this.matrixData[i] = {
          color: Const_1.BubbleType.Blank,
          bubble: null,
          type: SpecialType.Normal
        };
      };
      BubbleMatrix.prototype.getRestRowCount = function() {
        return this.addRowTotalCount;
      };
      BubbleMatrix.prototype.getFirstRow = function() {
        return this.firstRow;
      };
      BubbleMatrix.prototype.moveRow = function(row) {
        if (this.addRowTotalCount <= row) {
          this.addRow(AddNewBubbleRowCount);
          this.firstRow += AddNewBubbleRowCount - 1;
          Game_1.Game.startIndex += exports.MatrixSize * (AddNewBubbleRowCount - 1);
          this.addRowTotalCount += AddNewBubbleRowCount;
          var addCount = AddNewBubbleRowCount * exports.MatrixSize;
          console.log(" \u65b0\u589e6\u884c\uff1a ", addCount, ", total length:", this.data.length);
          for (var i = this.matrixData.length - 1; i >= addCount; i--) {
            this.matrixData[i - addCount] || (this.matrixData[i - addCount] = {
              color: Const_1.BubbleType.Blank,
              bubble: null,
              type: SpecialType.Normal
            });
            this.matrixData[i].color = this.matrixData[i - addCount].color;
            this.matrixData[i].type = this.matrixData[i - addCount].type;
            this.matrixData[i].bubble = this.matrixData[i - addCount].bubble;
            this.matrixData[i - addCount] = {
              color: Const_1.BubbleType.Blank,
              bubble: null,
              type: SpecialType.Normal
            };
            this.matrixData[i].bubble && this.matrixData[i].bubble.setIndex(i);
          }
          var doubleCount = Math.ceil(CMath.getRandom(Const_1.DoubleBubbleRange.Min, Const_1.DoubleBubbleRange.Max));
          var boomCount = Math.ceil(CMath.getRandom(Const_1.BoomBubbleRange.Min, Const_1.BoomBubbleRange.Max));
          var magicCount = Math.ceil(CMath.getRandom(Const_1.MagicBubbleRange.Min, Const_1.MagicBubbleRange.Max));
          console.log(" double:", doubleCount, ", boom:", boomCount, ", magic:", magicCount);
          var allIndex = [];
          for (var i = 0; i <= addCount - 1; i++) this.index2j(i) >= exports.IndexJStart && this.index2j(i) <= exports.IndexJEnd && allIndex.push(i);
          var doubleColors = Const_1.BubbleColors.concat();
          var doubleData = {};
          while (doubleCount > 0 && doubleColors.length > 0 && allIndex.length >= 0) {
            var randomI = Math.floor(CMath.getRandom(0, allIndex.length));
            var Index = allIndex[randomI];
            allIndex.splice(randomI, 1);
            var colorIndex = Math.floor(CMath.getRandom(0, doubleColors.length));
            var color = doubleColors[colorIndex];
            doubleColors.splice(colorIndex, 1);
            doubleData[Index] = color;
            doubleCount--;
          }
          console.log(" ---------- \u53cc\u500d\u7403 --------------");
          console.log(doubleData);
          var boomColors = Const_1.BubbleColors.concat();
          var boomData = {};
          while (boomCount > 0 && boomColors.length > 0 && allIndex.length >= 0) {
            var randomI = Math.floor(CMath.getRandom(0, allIndex.length));
            var Index = allIndex[randomI];
            allIndex.splice(randomI, 1);
            var colorIndex = Math.floor(CMath.getRandom(0, boomColors.length));
            var color = boomColors[colorIndex];
            boomColors.splice(colorIndex, 1);
            boomData[Index] = color;
            boomCount--;
          }
          console.log(" ---------- \u70b8\u5f39\u7403 --------------");
          console.log(boomData);
          var magicData = {};
          while (magicCount > 0 && allIndex.length >= 0) {
            var randomI = Math.floor(CMath.getRandom(0, allIndex.length));
            var Index = allIndex[randomI];
            allIndex.splice(randomI, 1);
            magicData[Index] = Const_1.BubbleType.Blank;
            magicCount--;
          }
          console.log(" ---------- \u9b54\u6cd5\u7403 --------------");
          console.log(magicData);
          for (var i = 0; i < addCount - 1; i++) {
            this.matrixData[i].color = Const_1.BubbleColors[Math.floor(CMath.getRandom() * Const_1.BubbleColors.length)];
            this.matrixData[i].bubble = null;
            this.matrixData[i].type = SpecialType.Normal;
            if (null != doubleData[i]) {
              this.matrixData[i].type = SpecialType.Double;
              this.matrixData[i].color = doubleData[i];
            }
            if (null != magicData[i]) {
              this.matrixData[i].type = SpecialType.Magic;
              this.matrixData[i].color = magicData[i];
            }
            if (null != boomData[i]) {
              this.matrixData[i].type = SpecialType.Boom;
              this.matrixData[i].color = boomData[i];
            }
          }
        } else {
          this.firstRow -= 1;
          Game_1.Game.startIndex -= exports.MatrixSize;
        }
        this.addRowTotalCount -= row;
        console.log(" \u5269\u4f59 ", this.addRowTotalCount, " \u884c\u6570\u636e", ", \u7b2c\u4e00\u884c\uff1a", this.firstRow, this.index2i(Game_1.Game.startIndex));
      };
      BubbleMatrix.prototype.ij2index = function(i, j) {
        return i * exports.MatrixSize + j;
      };
      BubbleMatrix.prototype.index2i = function(index) {
        return Math.floor(index / exports.MatrixSize);
      };
      BubbleMatrix.prototype.index2j = function(index) {
        return index % exports.MatrixSize;
      };
      BubbleMatrix.prototype.getUseIndexStart = function() {
        return (exports.MatrixSize - exports.UseSize) / 2 * (exports.MatrixSize + 1) - 1;
      };
      BubbleMatrix.prototype.getUseIndexEnd = function() {
        return exports.MatrixSize * exports.MatrixSize - this.getUseIndexStart() - 1;
      };
      BubbleMatrix.prototype.getPosOfIndex = function(index) {
        var i = this.index2i(index);
        var j = this.index2j(index);
        return this.getPosOfij(i, j);
      };
      BubbleMatrix.prototype.getPosOfij = function(i, j) {
        var pos = cc.v2(0, 0);
        pos.x = (j - exports.MatrixSize / 2) * Const_1.BubbleSize.width + (i + this.firstRow + Game_1.Game.getMoveTimes()) % 2 * Const_1.BubbleSize.width / 2 + Const_1.BubbleXOffset;
        pos.y = (exports.MatrixSize / 2 - i + Game_1.Game.getMoveTimes() + this.firstRow - this.index2i(Const_1.InitStartIndex)) * (Const_1.BubbleSize.height + Const_1.BubbleHeightOffset) + Const_1.BubbleYOffset;
        return pos;
      };
      BubbleMatrix.prototype.getNeiborMatrix = function(index, range, isBlank) {
        void 0 === isBlank && (isBlank = false);
        var neibers = [];
        var index2i = this.index2i(index);
        var moveTimes = Game_1.Game.getMoveTimes() + this.firstRow;
        for (var i = 0; i <= range; i++) {
          var newi = index2i + i;
          var isSame = index2i % 2 == newi % 2;
          var rangej = (isSame && newi != index2i, range - Math.floor(i / 2));
          rangej = Math.min(rangej, range);
          for (var j = 0; j <= rangej; j++) {
            var neiberIndex1 = index + i * exports.MatrixSize + j;
            var neiberIndex2 = index - i * exports.MatrixSize + j;
            var neiberIndex3 = index + i * exports.MatrixSize - j;
            var neiberIndex4 = index - i * exports.MatrixSize - j;
            if (index != neiberIndex1 && neibers.indexOf(neiberIndex1) < 0 && neiberIndex1 >= 0 && (neiberIndex1 < this.matrixData.length || isBlank) && (isSame || (newi + moveTimes) % 2 == 0 || j < rangej)) {
              var indexJ = this.index2j(neiberIndex1);
              indexJ >= exports.IndexJStart && indexJ <= exports.IndexJEnd && neiberIndex1 >= Game_1.Game.startIndex && (this.data[neiberIndex1] && this.data[neiberIndex1].bubble && !isBlank ? neibers.push(neiberIndex1) : !isBlank || this.data[neiberIndex1] && this.data[neiberIndex1].bubble || neibers.push(neiberIndex1));
            }
            if (index != neiberIndex2 && neibers.indexOf(neiberIndex2) < 0 && neiberIndex2 >= 0 && (neiberIndex2 < this.matrixData.length || isBlank)) {
              var indexJ = this.index2j(neiberIndex2);
              indexJ >= exports.IndexJStart && indexJ <= exports.IndexJEnd && neiberIndex2 >= Game_1.Game.startIndex && (isSame || (newi + moveTimes) % 2 == 0 || j < rangej) && (this.data[neiberIndex2] && this.data[neiberIndex2].bubble && !isBlank ? neibers.push(neiberIndex2) : !isBlank || this.data[neiberIndex2] && this.data[neiberIndex2].bubble || neibers.push(neiberIndex2));
            }
            if (index != neiberIndex3 && neibers.indexOf(neiberIndex3) < 0 && neiberIndex3 >= 0 && (neiberIndex3 < this.matrixData.length || isBlank)) {
              var indexJ = this.index2j(neiberIndex3);
              indexJ >= exports.IndexJStart && indexJ <= exports.IndexJEnd && neiberIndex3 >= Game_1.Game.startIndex && (isSame || (newi + moveTimes) % 2 || j < rangej) && (this.data[neiberIndex3] && this.data[neiberIndex3].bubble && !isBlank ? neibers.push(neiberIndex3) : !isBlank || this.data[neiberIndex3] && this.data[neiberIndex3].bubble || neibers.push(neiberIndex3));
            }
            if (index != neiberIndex4 && neibers.indexOf(neiberIndex4) < 0 && neiberIndex4 >= 0 && (neiberIndex4 < this.matrixData.length || isBlank)) {
              var indexJ = this.index2j(neiberIndex4);
              indexJ >= exports.IndexJStart && indexJ <= exports.IndexJEnd && neiberIndex4 >= Game_1.Game.startIndex && (isSame || (newi + moveTimes) % 2 || j < rangej) && (this.data[neiberIndex4] && this.data[neiberIndex4].bubble && !isBlank ? neibers.push(neiberIndex4) : !isBlank || this.data[neiberIndex4] && this.data[neiberIndex4].bubble || neibers.push(neiberIndex4));
            }
          }
        }
        neibers.sort(function(a, b) {
          return a - b;
        });
        return neibers;
      };
      BubbleMatrix.prototype.initBubbleData = function() {
        console.log(" init bubble data :", Game_1.Game.MatchInfo.matchId, ", seed:", Game_1.Game.MatchInfo.sharedRandomSeed);
        var startIndex = this.getUseIndexStart();
        var endIndex = this.getUseIndexEnd();
        this.firstRow = this.index2i(Game_1.Game.startIndex);
        this.addRowTotalCount = 0;
        var doubleCount = Math.ceil(CMath.getRandom(Const_1.DoubleBubbleInitRange.Min, Const_1.DoubleBubbleInitRange.Max));
        var boomCount = Math.ceil(CMath.getRandom(Const_1.BoomBubbleInitRange.Min, Const_1.BoomBubbleInitRange.Max));
        var magicCount = Math.ceil(CMath.getRandom(Const_1.MagicBubbleInitRange.Min, Const_1.MagicBubbleInitRange.Max));
        console.log("start:", startIndex, ", end:", endIndex, ", firstRow:", this.firstRow);
        console.log(" double:", doubleCount, ", boom:", boomCount, ", magic:", magicCount);
        var allIndex = [];
        for (var i = Game_1.Game.startIndex; i <= endIndex; i++) this.index2j(i) >= exports.IndexJStart && this.index2j(i) <= exports.IndexJEnd && allIndex.push(i);
        var doubleColors = Const_1.BubbleColors.concat();
        var doubleData = {};
        while (doubleCount > 0 && allIndex.length >= 0) {
          var randomI = Math.floor(CMath.getRandom(0, allIndex.length));
          var Index = allIndex[randomI];
          allIndex.splice(randomI, 1);
          var colorIndex = Math.floor(CMath.getRandom(0, doubleColors.length));
          var color = doubleColors[colorIndex];
          doubleColors.splice(colorIndex, 1);
          doubleData[Index] = color;
          doubleCount--;
          doubleColors.length <= 0 && (doubleColors = Const_1.BubbleColors.concat());
        }
        console.log(" ---------- \u53cc\u500d\u7403 --------------");
        console.log(doubleData);
        var boomColors = Const_1.BubbleColors.concat();
        var boomData = {};
        while (boomCount > 0 && allIndex.length >= 0) {
          var randomI = Math.floor(CMath.getRandom(0, allIndex.length));
          var Index = allIndex[randomI];
          allIndex.splice(randomI, 1);
          var colorIndex = Math.floor(CMath.getRandom(0, boomColors.length));
          var color = boomColors[colorIndex];
          boomColors.splice(colorIndex, 1);
          boomData[Index] = color;
          boomCount--;
          boomColors.length <= 0 && (boomColors = Const_1.BubbleColors.concat());
        }
        console.log(" ---------- \u70b8\u5f39\u7403 --------------");
        console.log(boomData);
        var magicData = {};
        while (magicCount > 0 && allIndex.length >= 0) {
          var randomI = Math.floor(CMath.getRandom(0, allIndex.length));
          var Index = allIndex[randomI];
          allIndex.splice(randomI, 1);
          magicData[Index] = Const_1.BubbleType.Blank;
          magicCount--;
        }
        console.log(" ---------- \u9b54\u6cd5\u7403 --------------");
        console.log(magicData);
        for (var i = startIndex; i <= endIndex; i++) {
          var neibers = this.getNeiborMatrix(i, 1);
          var neiberColors = [];
          for (var _i = 0, neibers_1 = neibers; _i < neibers_1.length; _i++) {
            var index = neibers_1[_i];
            this.matrixData[index].color != Const_1.BubbleType.Blank && neiberColors.push(this.matrixData[index]);
          }
          var otherColors = this.getOtherColors(neiberColors);
          CMath.getRandom() <= StartRandomPercent && otherColors.length > 0 ? this.matrixData[i].color = otherColors[Math.floor(CMath.getRandom() * otherColors.length)] : this.matrixData[i].color = Const_1.BubbleColors[Math.floor(CMath.getRandom() * Const_1.BubbleColors.length)];
          for (var j = 0; j < neibers.length; j++) {
            var index = neibers[j];
            if (this.matrixData[index].color == Const_1.BubbleType.Blank) if (CMath.getRandom() <= StartRandomPercent) this.matrixData[index] = this.matrixData[i]; else {
              var otherColors_1 = this.getOtherColors([ this.matrixData[i].color ]);
              this.matrixData[index].color = otherColors_1[Math.floor(CMath.getRandom() * otherColors_1.length)];
            }
            var neiberNeibers = this.getNeiborMatrix(index, 1);
            for (var k = 0; k < neiberNeibers.length; k++) {
              var neiberIndex = neiberNeibers[k];
              if (this.matrixData[neiberIndex].color != Const_1.BubbleType.Blank) continue;
              if (CMath.getRandom() <= StartRandomPercent - RandomPercentOffset && this.matrixData[index] == this.matrixData[i]) this.matrixData[neiberIndex] = this.matrixData[index]; else {
                var otherColors_2 = this.getOtherColors([ this.matrixData[i].color, this.matrixData[index].color ]);
                this.matrixData[neiberIndex].color = otherColors_2[Math.floor(CMath.getRandom() * otherColors_2.length)];
              }
            }
          }
        }
        for (var i = 0; i < this.matrixData.length; i++) {
          this.matrixData[i].color == Const_1.BubbleType.Blank && (this.matrixData[i].color = Const_1.BubbleColors[Math.floor(CMath.getRandom() * Const_1.BubbleColors.length)]);
          this.matrixData[i].type = SpecialType.Normal;
          if (null != doubleData[i]) {
            this.matrixData[i].type = SpecialType.Double;
            this.matrixData[i].color = doubleData[i];
          }
          if (null != magicData[i]) {
            this.matrixData[i].type = SpecialType.Magic;
            this.matrixData[i].color = magicData[i];
          }
          if (null != boomData[i]) {
            this.matrixData[i].type = SpecialType.Boom;
            this.matrixData[i].color = boomData[i];
          }
        }
        console.log(" init bubble data done!");
        console.log(this.matrixData.length);
      };
      BubbleMatrix.prototype.getOtherColors = function(exceptColors) {
        var otherColors = Const_1.BubbleColors.concat();
        for (var _i = 0, exceptColors_1 = exceptColors; _i < exceptColors_1.length; _i++) {
          var except = exceptColors_1[_i];
          var index = otherColors.indexOf(except);
          if (index < 0) continue;
          otherColors.splice(index, 1);
        }
        return otherColors;
      };
      return BubbleMatrix;
    }();
    exports.BubbleMatrix = BubbleMatrix;
    cc._RF.pop();
  }, {
    "../Const": "Const",
    "../Controller/Game": "Game"
  } ],
  BubbleMove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f122cLSg0BF5pRoYWwgPS74", "BubbleMove");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Bubble_1 = require("./Bubble");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var Game_1 = require("./Controller/Game");
    var Const_1 = require("./Const");
    var GameFactory_1 = require("./Controller/GameFactory");
    var BubbleMatrix_1 = require("./Data/BubbleMatrix");
    var BubbleChange_1 = require("./BubbleAnimation/BubbleChange");
    var BubbleDrop_1 = require("./BubbleAnimation/BubbleDrop");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    exports.BorderX = 455;
    var ShootSpeed = 4800;
    var ShootAcceleration = 800;
    exports.DropBorder = -667;
    exports.CollsionFactor = .3;
    exports.CollsionOffset = 40;
    exports.CollsionMinFactor = .01;
    var BubbleMove = function(_super) {
      __extends(BubbleMove, _super);
      function BubbleMove() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.speed = cc.v2(0, 0);
        _this.acceleration = cc.v2(0, 0);
        _this.hasCollision = false;
        _this.shooted = false;
        _this.isDrop = false;
        _this.animationCallback = {};
        return _this;
      }
      Object.defineProperty(BubbleMove.prototype, "bubble", {
        get: function() {
          return this.getComponent(Bubble_1.default);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(BubbleMove.prototype, "radis", {
        get: function() {
          return Const_1.BubbleSize.width / 2;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(BubbleMove.prototype, "isShooterState", {
        get: function() {
          return "Shooter" == this.node.getParent().name && this.node.getNumberOfRunningActions() <= 0 && !this.hasCollision && this.shooted;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(BubbleMove.prototype, "isReady2Shoot", {
        get: function() {
          return "Shooter" == this.node.getParent().name && this.node.getNumberOfRunningActions() <= 0;
        },
        enumerable: true,
        configurable: true
      });
      BubbleMove.prototype.checkBorder = function() {
        if (this.isDrop) return;
        if (this.node.x <= -exports.BorderX || this.node.x >= exports.BorderX) {
          this.node.x = this.node.x > 0 ? exports.BorderX : -exports.BorderX;
          this.speed.x = -this.speed.x;
          this.acceleration.x = -this.acceleration.x;
        }
      };
      BubbleMove.prototype.forceMove = function(offset) {
        var action = this.node.getActionByTag(Bubble_1.BubbleAction.Collision);
        if (action && !action.isDone()) return;
        var actionMove = cc.sequence(cc.moveBy(.1, offset).easing(cc.easeQuadraticActionIn()), cc.moveBy(.1, offset.mul(-1)).easing(cc.easeQuadraticActionOut()));
        actionMove.setTag(Bubble_1.BubbleAction.Collision);
        this.node.runAction(actionMove);
      };
      BubbleMove.prototype.checkCollisionBubble = function() {
        var _this = this;
        if (!this.isShooterState) return;
        if (this.isDrop) return;
        var bubbleIndexes = Game_1.Game.getCollisionIndexes();
        var bubbleMatrix = Game_1.Game.getMatrix();
        var _loop_1 = function(index) {
          var bubble = bubbleMatrix.data[index].bubble;
          if (!bubble) {
            console.warn(" bubble \u4e0d\u5b58\u5728\uff01");
            return "continue";
          }
          var bubblePos = CMath.ConvertToNodeSpaceAR(this_1.node, bubble.node.parent);
          if (CMath.Distance(bubblePos, bubble.node.position) <= 2 * this_1.radis * .8) {
            var targetNeiber = bubbleMatrix.getNeiborMatrix(index, 1, true);
            var targetIndex = -1;
            var minDistance = 100;
            console.log("\u78b0\u5230\uff1a", index);
            console.log(targetNeiber);
            for (var _i = 0, targetNeiber_1 = targetNeiber; _i < targetNeiber_1.length; _i++) {
              var neiberIndex = targetNeiber_1[_i];
              var i = bubbleMatrix.index2i(neiberIndex);
              var j = bubbleMatrix.index2j(neiberIndex);
              var pos = bubbleMatrix.getPosOfij(i, j);
              if (CMath.Distance(pos, bubblePos) < minDistance) {
                minDistance = CMath.Distance(pos, bubblePos);
                targetIndex = neiberIndex;
              }
            }
            var callback = function() {
              Game_1.Game.checkClear(_this.bubble.getIndex(), _this.bubble, bubble);
              Game_1.Game.updateCollisionIndexes();
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.NEXT_BUBBLE);
            };
            if (this_1.bubble.Type == BubbleMatrix_1.SpecialType.Magic) {
              if (bubble.Type != BubbleMatrix_1.SpecialType.Magic && bubble.node.active) {
                this_1.bubble.setColor(bubble.Color, BubbleMatrix_1.SpecialType.Normal);
                EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "change_color");
                this_1.bubble.playAnimation(BubbleChange_1.default, function() {
                  _this.bubble.AnimationRoot.runAction(cc.fadeOut(.1));
                });
              }
            } else if (bubble.Type == BubbleMatrix_1.SpecialType.Magic && bubble.node.active && this_1.bubble.Type != BubbleMatrix_1.SpecialType.Horce) {
              bubble.setColor(this_1.bubble.Color, this_1.bubble.Type);
              bubble.playAnimation(BubbleChange_1.default, function() {
                bubble.AnimationRoot.runAction(cc.fadeOut(.1));
              });
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "change_color");
            }
            bubble.onCollision();
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.BUBBLE_FORCE, targetIndex);
            targetIndex < 0 ? console.error(" target index -1") : this_1.onCollision(targetIndex, callback);
            return {
              value: void 0
            };
          }
        };
        var this_1 = this;
        for (var _i = 0, bubbleIndexes_1 = bubbleIndexes; _i < bubbleIndexes_1.length; _i++) {
          var index = bubbleIndexes_1[_i];
          var state_1 = _loop_1(index);
          if ("object" === typeof state_1) return state_1.value;
        }
      };
      BubbleMove.prototype.onCollision = function(targetIndex, callback) {
        console.log(" on collision:", targetIndex);
        var factor = Math.abs(this.speed.x / this.speed.y);
        var scaleX = 0 == factor || isNaN(factor) ? 1.2 : 1 / factor;
        var scaleY = 1 / scaleX;
        this.speed.x = 0;
        this.speed.y = 0;
        this.acceleration.x = 0;
        this.acceleration.y = 0;
        this.hasCollision = true;
        var bubbleMatrix = Game_1.Game.getMatrix();
        var i = bubbleMatrix.index2i(targetIndex);
        var j = bubbleMatrix.index2j(targetIndex);
        var targetPos = bubbleMatrix.getPosOfij(i, j);
        var pos = CMath.ConvertToNodeSpaceAR(this.node, Game_1.Game.BubbleLayer);
        this.node.x = pos.x;
        this.node.y = pos.y;
        this.node.setParent(Game_1.Game.BubbleLayer);
        this.node.stopAllActions();
        this.scaleBubble(scaleX, scaleY);
        this.bubble.setIndex(targetIndex);
        this.node.runAction(cc.sequence(cc.moveTo(.1, targetPos), cc.callFunc(function() {
          callback && callback();
          Game_1.Game.checkOutOfMove();
        }, this)));
      };
      BubbleMove.prototype.scaleBubble = function(x, y) {
        x = CMath.Clamp(x, 1.2, .8);
        y = CMath.Clamp(y, 1.2, .8);
        this.node.runAction(cc.sequence(cc.scaleTo(.1, x, y), cc.scaleTo(.1, 1, 1)));
      };
      BubbleMove.prototype.initEvent = function() {
        EventManager_1.gEventMgr.targetOff(this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.BUBBLE_FORCE, this.force, this);
      };
      BubbleMove.prototype.readyToShoot = function() {
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.SHOOT, this.shoot, this);
      };
      BubbleMove.prototype.unreadyToShoot = function() {
        EventManager_1.gEventMgr.off(EventName_1.GlobalEvent.SHOOT);
      };
      BubbleMove.prototype.force = function(fromeIndex) {
        var index = this.bubble.getIndex();
        if (index == fromeIndex) return;
        var matrix = Game_1.Game.getMatrix();
        var fromPos = matrix.getPosOfIndex(fromeIndex);
        var selfPos = matrix.getPosOfIndex(index);
        var Distance = CMath.Distance(fromPos, selfPos);
        var count = Math.ceil(Distance / (2 * this.radis));
        var force = Math.pow(exports.CollsionFactor, Math.max(0, count - 1));
        this.forceMove(selfPos.sub(fromPos).normalize().mul(force * exports.CollsionOffset));
      };
      BubbleMove.prototype.reuse = function() {
        this.node.getChildByName("Bubble").color = cc.Color.WHITE;
        this.initEvent();
        this.hasCollision = false;
        this.isDrop = false;
        this.speed = cc.v2(0, 0);
        this.acceleration = cc.v2(0, 0);
        this.shooted = false;
        this.node.group = "default";
      };
      BubbleMove.prototype.unuse = function() {
        this.enabled = false;
        this.shooted = false;
        this.isDrop = false;
        EventManager_1.gEventMgr.targetOff(this);
      };
      BubbleMove.prototype.shoot = function(deltaP) {
        EventManager_1.gEventMgr.off(EventName_1.GlobalEvent.SHOOT);
        console.log("\u53d1\u5c04\uff01");
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "shoot");
        this.enabled = true;
        this.shooted = true;
        deltaP.normalizeSelf();
        this.speed.x = deltaP.x * ShootSpeed;
        this.speed.y = deltaP.y * ShootSpeed;
        this.acceleration.x = deltaP.x * ShootAcceleration;
        this.acceleration.y = deltaP.y * ShootAcceleration;
      };
      BubbleMove.prototype.isShooted = function() {
        return this.shooted;
      };
      BubbleMove.prototype.drop = function() {
        this.isDrop = true;
        this.enabled = true;
        this.speed.y = 800 + CMath.getRandom(0, 1e3);
        this.acceleration.y = 4 * -this.speed.y;
        this.speed.x = this.node.x > 0 ? -200 : 200;
        this.speed.x *= CMath.getRandom(0, 1.5) + 1;
        this.node.group = "drop";
        Game_1.Game.addBubbleDrop(this.bubble.Color);
        console.log(" \u6389\u843d:", this.enabled, this.bubble.getIndex(), this.speed, this.acceleration, this.hasCollision);
      };
      BubbleMove.prototype.update = function(dt) {
        var _this = this;
        if (this.isShooterState || this.isDrop) {
          var count = 10;
          for (var i = 0; i < count; i++) {
            this.checkBorder();
            this.checkCollisionBubble();
            this.node.x += this.speed.x * dt / count;
            this.node.y += this.speed.y * dt / count;
            this.speed.x += this.acceleration.x * dt / count;
            this.speed.y += this.acceleration.y * dt / count;
            var pos = CMath.ConvertToNodeSpaceAR(this.node, this.node.getParent().getParent());
            if (this.isDrop && pos.y <= exports.DropBorder) {
              this.enabled = false;
              this.scaleBubble(1.1, .9);
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "drop");
              var score = this.bubble.DoubleScore ? 2 * Bubble_1.BubbleDropScore : Bubble_1.BubbleDropScore;
              Game_1.Game.addScore(this.bubble.Color, score, 1, CMath.ConvertToNodeSpaceAR(this.node, Game_1.Game.TopNode).add(cc.v2(.5 * Const_1.BubbleSize.width, .5 * Const_1.BubbleSize.height)));
              this.bubble.playAnimation(BubbleDrop_1.default, function() {
                GameFactory_1.gFactory.putBubble(_this.node);
              });
              break;
            }
          }
          if (this.node.parent && "Shooter" == this.node.parent.name && (Math.abs(this.node.x) >= 600 || this.node.y > 1663 || this.node.y < 0)) {
            GameFactory_1.gFactory.putBubble(this.node);
            this.enabled = false;
            console.error("  error , not collision! bubble lost ");
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.NEXT_BUBBLE);
          }
        }
      };
      BubbleMove = __decorate([ ccclass ], BubbleMove);
      return BubbleMove;
    }(cc.Component);
    exports.default = BubbleMove;
    cc._RF.pop();
  }, {
    "./Bubble": "Bubble",
    "./BubbleAnimation/BubbleChange": "BubbleChange",
    "./BubbleAnimation/BubbleDrop": "BubbleDrop",
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Controller/GameFactory": "GameFactory",
    "./Data/BubbleMatrix": "BubbleMatrix"
  } ],
  Bubble: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab9ae70D2ZFXoGg9F2uKBO0", "Bubble");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./Controller/EventManager");
    var Game_1 = require("./Controller/Game");
    var EventName_1 = require("./Controller/EventName");
    var Const_1 = require("./Const");
    var BubbleMove_1 = require("./BubbleMove");
    var GameFactory_1 = require("./Controller/GameFactory");
    var BubbleMatrix_1 = require("./Data/BubbleMatrix");
    var BubbleIdle_1 = require("./BubbleAnimation/BubbleIdle");
    var BubbleBurst_1 = require("./BubbleAnimation/BubbleBurst");
    var BubbleChange_1 = require("./BubbleAnimation/BubbleChange");
    var BubbleDrop_1 = require("./BubbleAnimation/BubbleDrop");
    var BubbleHorce_1 = require("./BubbleAnimation/BubbleHorce");
    exports.BubbleDropScore = 10;
    exports.BubbleScoreStep = 10;
    var BubbleAction;
    (function(BubbleAction) {
      BubbleAction[BubbleAction["Bubble"] = 0] = "Bubble";
      BubbleAction[BubbleAction["Collision"] = 1] = "Collision";
    })(BubbleAction = exports.BubbleAction || (exports.BubbleAction = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bubble = function(_super) {
      __extends(Bubble, _super);
      function Bubble() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.index = -1;
        _this.color = Const_1.BubbleType.Blank;
        _this.type = BubbleMatrix_1.SpecialType.Normal;
        _this.animationCallback = {};
        _this.doubleScore = false;
        return _this;
      }
      Bubble.prototype.getAnimation = function(type) {
        return this.getComponentInChildren(type);
      };
      Object.defineProperty(Bubble.prototype, "AnimationRoot", {
        get: function() {
          return this.node.getChildByName("Animation");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "DropRoot", {
        get: function() {
          return this.node.getChildByName("Down");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "sprite", {
        get: function() {
          return this.node.getChildByName("Bubble").getComponent(cc.Sprite);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "move", {
        get: function() {
          return this.getComponent(BubbleMove_1.default);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "IndexLabel", {
        get: function() {
          return this.node.getChildByName("Index").getComponent(cc.Label);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "Color", {
        get: function() {
          return this.color;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "Type", {
        get: function() {
          return this.type;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "Double", {
        get: function() {
          return this.node.getChildByName("Bubble").getChildByName("Double");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "isDouble", {
        get: function() {
          return this.type == BubbleMatrix_1.SpecialType.Double;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Bubble.prototype, "DoubleScore", {
        get: function() {
          return this.doubleScore;
        },
        set: function(double) {
          this.doubleScore = double;
        },
        enumerable: true,
        configurable: true
      });
      Bubble.prototype.reuse = function(type, index, color, idleFrame, changeFrame, burst, horce, drop) {
        this.node.active = false;
        this.node.scale = 0;
        this.type = color == Const_1.BubbleType.Boom ? BubbleMatrix_1.SpecialType.Boom : type == BubbleMatrix_1.SpecialType.Boom ? BubbleMatrix_1.SpecialType.Normal : type;
        this.color = color;
        this.idleFrames = idleFrame;
        this.burstFrames = burst;
        this.dropFrames = drop;
        this.getAnimation(BubbleChange_1.default).Animation = changeFrame;
        this.getAnimation(BubbleHorce_1.default).Animation = horce;
        this.getAnimation(BubbleIdle_1.default).Animation = this.idleFrames[color];
        this.getAnimation(BubbleBurst_1.default).Animation = this.burstFrames[color];
        this.getAnimation(BubbleDrop_1.default).Animation = this.dropFrames[color];
        this.sprite.node.opacity = 255;
        this.Double.active = this.type == BubbleMatrix_1.SpecialType.Double;
        this.doubleScore = false;
        this.updateSprite();
        this.IndexLabel.node.active = false;
        this.setIndex(index);
        this.initEvent();
      };
      Bubble.prototype.unuse = function() {
        EventManager_1.gEventMgr.targetOff(this);
        this.index = -1;
        this.IndexLabel.string = "";
        this.node.stopAllActions();
        this.getAnimation(BubbleIdle_1.default).clearAllListener().clearCompleteEvent();
        this.getAnimation(BubbleBurst_1.default).clearAllListener().clearCompleteEvent();
        this.getAnimation(BubbleChange_1.default).clearAllListener().clearCompleteEvent();
        this.getAnimation(BubbleHorce_1.default).clearAllListener().clearCompleteEvent();
        this.getAnimation(BubbleDrop_1.default).clearAllListener().clearCompleteEvent();
        this.AnimationRoot.opacity = 0;
        this.DropRoot.opacity = 0;
        this.node.targetOff(this);
        this.node.active = false;
      };
      Bubble.prototype.setColor = function(color, type) {
        if (this.color == color) {
          console.warn(" color:", Const_1.BubbleType[this.color], Const_1.BubbleType[color]);
          return;
        }
        this.color = color;
        this.type = type;
      };
      Bubble.prototype.updateSprite = function(light) {
        void 0 === light && (light = false);
        this.getAnimation(BubbleIdle_1.default).Animation = this.idleFrames[this.color];
        this.getAnimation(BubbleBurst_1.default).Animation = this.burstFrames[this.color];
        this.getAnimation(BubbleDrop_1.default).Animation = this.dropFrames[this.color];
      };
      Bubble.prototype.setIndex = function(index) {
        if (index == this.index) return;
        var bubbleMatrix = Game_1.Game.getMatrix();
        if (bubbleMatrix.data[index] && bubbleMatrix.data[index].bubble) {
          if (bubbleMatrix.data[index].bubble != this) {
            console.error(this.index, "\u6570\u636e\u4e0d\u540c\u6b65\uff01", index, ", oldIndex:", bubbleMatrix.data[index].bubble.getIndex());
            console.log(bubbleMatrix.data[index]);
          }
        } else bubbleMatrix.data[index] = {
          color: this.color,
          bubble: this,
          type: this.type
        };
        this.index = index;
      };
      Bubble.prototype.updateIndex = function() {
        this.IndexLabel.node.active = !this.IndexLabel.node.active;
        this.IndexLabel.string = this.index.toString();
      };
      Bubble.prototype.getIndex = function() {
        return this.index;
      };
      Bubble.prototype.setActive = function(active, isAction, delayTime) {
        if (this.node.active == active) return;
        this.node.active = active;
        this.node.active || (this.node.scale = 0);
        this.node.active && isAction && this.bubbleScale(delayTime);
      };
      Bubble.prototype.initEvent = function() {
        var _this = this;
        this.getAnimation(BubbleIdle_1.default).addCompleteEvent(this.onAnimationComplete, this);
        this.getAnimation(BubbleBurst_1.default).addCompleteEvent(this.onAnimationComplete, this);
        this.getAnimation(BubbleChange_1.default).addCompleteEvent(this.onAnimationComplete, this);
        this.getAnimation(BubbleDrop_1.default).addCompleteEvent(this.onAnimationComplete, this);
        this.getAnimation(BubbleHorce_1.default).addCompleteEvent(this.onAnimationComplete, this);
        this.getAnimation(BubbleIdle_1.default).addKeyEventListener(this.onAnimationKey, this);
        this.getAnimation(BubbleBurst_1.default).addKeyEventListener(this.onAnimationKey, this);
        this.getAnimation(BubbleChange_1.default).addKeyEventListener(this.onAnimationKey, this);
        this.getAnimation(BubbleDrop_1.default).addKeyEventListener(this.onAnimationKey, this);
        this.getAnimation(BubbleHorce_1.default).addKeyEventListener(this.onAnimationKey, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_INDEX, this.updateIndex, this);
        this.node["_onSetParent"] = this.onSetParent.bind(this);
        true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(event) {
          switch (event.keyCode) {
           case cc.macro.KEY.w:
            _this.updateIndex();
          }
        }, this);
      };
      Bubble.prototype.updateActive = function(delay) {
        void 0 === delay && (delay = 0);
        this.setActive(this.index >= Game_1.Game.startIndex, true, delay);
      };
      Bubble.prototype.scaleTest = function(indexs) {
        if (indexs.indexOf(this.index) < 0) return;
        this.bubbleScale();
      };
      Bubble.prototype.bubbleScale = function(delayTime) {
        void 0 === delayTime && (delayTime = 0);
        var action = cc.sequence(cc.scaleTo(0, 0), cc.delayTime(delayTime), cc.scaleTo(.2, .9), cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1));
        action.setTag(BubbleAction.Bubble);
        this.node.stopActionByTag(BubbleAction.Bubble);
        this.node.runAction(action);
      };
      Bubble.prototype.onSetParent = function(parent) {
        if (!parent) return;
        this.move.enabled = "Shooter" == parent.name;
        "BulletArray" == parent.name ? this.node.rotation = -90 : this.node.rotation = 0;
      };
      Bubble.prototype.onCollision = function() {
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "colision");
      };
      Bubble.prototype.onClear = function(delayTime, fromIndex) {
        var _this = this;
        Game_1.Game.addBubbleClear(this.Color);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, this.type == BubbleMatrix_1.SpecialType.Boom ? "boom" : "clear");
        this.node.runAction(cc.sequence(cc.delayTime(.7 * delayTime), cc.callFunc(function() {
          var selfI = Game_1.Game.getMatrix().index2i(_this.index);
          var selfJ = Game_1.Game.getMatrix().index2j(_this.index);
          var fromI = Game_1.Game.getMatrix().index2i(fromIndex);
          var fromJ = Game_1.Game.getMatrix().index2j(fromIndex);
          var factor = Math.max(Math.abs(selfI - fromI) + 1, Math.abs(selfJ - fromJ) + 1);
          var score = Math.max(1, factor) * exports.BubbleScoreStep;
          _this.DoubleScore && (score *= 2);
          var scale = .1 * factor + 1;
          Game_1.Game.addScore(_this.color, score, scale, CMath.ConvertToNodeSpaceAR(_this.node, Game_1.Game.TopNode).add(cc.v2(.5 * Const_1.BubbleSize.width, .5 * Const_1.BubbleSize.height)));
          _this.updateSprite(true);
          _this.playAnimation(BubbleBurst_1.default, function() {
            GameFactory_1.gFactory.putBubble(_this.node);
          });
        }, this)));
      };
      Bubble.prototype.playAnimation = function(animation, complete) {
        console.log(" play animation:", animation["aniName"]);
        this.animationCallback[animation["aniName"]] = complete;
        this.getAnimation(animation).play();
      };
      Object.defineProperty(Bubble.prototype, "Bubble", {
        get: function() {
          return this.node.getChildByName("Bubble");
        },
        enumerable: true,
        configurable: true
      });
      Bubble.prototype.onAnimationKey = function(key, name) {
        0 == key && name != BubbleIdle_1.default.prototype["__classname__"] && (name == BubbleDrop_1.default.prototype["__classname__"] ? this.DropRoot.opacity = 255 : this.AnimationRoot.opacity = 255);
        switch (name) {
         case BubbleBurst_1.default.prototype["__classname__"]:
          0 == key && this.Bubble.runAction(cc.fadeOut(.1));
          break;

         case BubbleChange_1.default.prototype["__classname__"]:
          2 == key && this.updateSprite();
          break;

         case BubbleHorce_1.default.prototype["__classname__"]:
          5 == key && this.updateSprite();
          break;

         case BubbleDrop_1.default.prototype["__classname__"]:
          if (0 == key) {
            this.Bubble.runAction(cc.fadeOut(.1));
            this.DropRoot.opacity = 255;
          }
        }
      };
      Bubble.prototype.onAnimationComplete = function(name) {
        if (this.animationCallback[name]) {
          this.animationCallback[name]();
          this.animationCallback[name] = null;
        }
      };
      Bubble.prototype.update = function(dt) {
        true;
        var collision = Game_1.Game.getCollisionIndexes();
        collision.indexOf(this.index) >= 0 ? this.IndexLabel.node.color = cc.Color.BLACK : this.IndexLabel.node.color = cc.Color.WHITE;
      };
      Bubble = __decorate([ ccclass ], Bubble);
      return Bubble;
    }(cc.Component);
    exports.default = Bubble;
    cc._RF.pop();
  }, {
    "./BubbleAnimation/BubbleBurst": "BubbleBurst",
    "./BubbleAnimation/BubbleChange": "BubbleChange",
    "./BubbleAnimation/BubbleDrop": "BubbleDrop",
    "./BubbleAnimation/BubbleHorce": "BubbleHorce",
    "./BubbleAnimation/BubbleIdle": "BubbleIdle",
    "./BubbleMove": "BubbleMove",
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Controller/GameFactory": "GameFactory",
    "./Data/BubbleMatrix": "BubbleMatrix"
  } ],
  Const: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7b813ZcfJE5JVv1NvPFZPC", "Const");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BubbleColor = {
      0: "blank",
      1: "bg_popblue",
      2: "bg_popgreen",
      3: "bg_poporange",
      4: "bg_poppurple",
      5: "bg_popred",
      6: "bg_popyellow"
    };
    exports.BubbleLightColor = {
      0: "blank",
      1: "bg_popbluelight",
      2: "bg_popgreenlight",
      3: "bg_poporangelight",
      4: "bg_poppurplelight",
      5: "bg_popredlight",
      6: "bg_popyellowlight"
    };
    exports.BoomBubbleLightColor = {
      0: "blank",
      1: "bomb_bluelight",
      2: "bomb_greenlight",
      3: "bomb_orangelight",
      4: "bomb_purplelight",
      5: "bomb_redlight",
      6: "bomb_yellowlight"
    };
    exports.BoomBubbleColor = {
      0: "blank",
      1: "bomb_blue",
      2: "bomb_green",
      3: "bomb_orange",
      4: "bomb_purple",
      5: "bomb_red",
      6: "bomb_yellow"
    };
    exports.HorseBubble = "horse";
    exports.HorseBubbleLight = "horselight";
    exports.MagicBubble = "rainbow";
    exports.MagicBubbleLight = "rainbowlight";
    var BubbleType;
    (function(BubbleType) {
      BubbleType[BubbleType["Blank"] = 0] = "Blank";
      BubbleType[BubbleType["Blue"] = 1] = "Blue";
      BubbleType[BubbleType["DarkBlue"] = 2] = "DarkBlue";
      BubbleType[BubbleType["Green"] = 3] = "Green";
      BubbleType[BubbleType["Orange"] = 4] = "Orange";
      BubbleType[BubbleType["Purple"] = 5] = "Purple";
      BubbleType[BubbleType["Red"] = 6] = "Red";
      BubbleType[BubbleType["Yellow"] = 7] = "Yellow";
      BubbleType[BubbleType["White"] = 8] = "White";
      BubbleType[BubbleType["Boom"] = 9] = "Boom";
      BubbleType[BubbleType["Horce"] = 10] = "Horce";
      BubbleType[BubbleType["Treasure_1"] = 200] = "Treasure_1";
      BubbleType[BubbleType["Treasure_2"] = 400] = "Treasure_2";
      BubbleType[BubbleType["Treasure_3"] = 600] = "Treasure_3";
      BubbleType[BubbleType["Treasure_4"] = 800] = "Treasure_4";
      BubbleType[BubbleType["Treasure_5"] = 1e3] = "Treasure_5";
      BubbleType[BubbleType["Streak"] = 1001] = "Streak";
    })(BubbleType = exports.BubbleType || (exports.BubbleType = {}));
    exports.BubbleColors = [ BubbleType.Yellow, BubbleType.Red, BubbleType.Purple, BubbleType.Orange, BubbleType.Green, BubbleType.Blue, BubbleType.Boom ];
    exports.BubbleHeightOffset = -14;
    exports.BubbleYOffset = 1205;
    exports.BubbleXOffset = 20;
    exports.InitColNumber = 10;
    exports.InitStartIndex = 47;
    exports.BubbleSize = cc.size(83, 83);
    exports.BubbleQueRange = {
      Min: 4,
      Max: 9
    };
    exports.ClearTargetRange = {
      Min: 2,
      Max: 6
    };
    exports.GameTime = 180;
    exports.TargetRandomLimit = 120;
    exports.DefaultTaskCount = 9;
    exports.DoubleBubbleInitRange = {
      Min: 3,
      Max: 5
    };
    exports.DoubleBubbleRange = {
      Min: 1,
      Max: 2
    };
    exports.BoomBubbleRange = {
      Min: 1,
      Max: 2
    };
    exports.MagicBubbleRange = {
      Min: 0,
      Max: 1
    };
    exports.BoomBubbleInitRange = {
      Min: 3,
      Max: 5
    };
    exports.MagicBubbleInitRange = {
      Min: 0,
      Max: 3
    };
    exports.ClearCountLimit = 3;
    true, window["ClearCountLimit"] = exports.ClearCountLimit;
    exports.ShooterDoubleRange = {
      Min: 6,
      Max: 10
    };
    exports.ShooterDoubleBubbleRange = {
      Min: 0,
      Max: 1
    };
    exports.ShooterBoomRange = {
      Min: 6,
      Max: 10
    };
    exports.ShooterBoomBubbleRange = {
      Min: 0,
      Max: 1
    };
    exports.ShooterMagicRange = {
      Min: 4,
      Max: 6
    };
    exports.ShooterMagicBubbleRange = {
      Min: 0,
      Max: 1
    };
    exports.TaskStreakAward = 3;
    var Season;
    (function(Season) {
      Season[Season["Spring"] = 0] = "Spring";
      Season[Season["Summer"] = 1] = "Summer";
      Season[Season["Autumn"] = 2] = "Autumn";
      Season[Season["Winter"] = 3] = "Winter";
    })(Season = exports.Season || (exports.Season = {}));
    exports.SeasonPool = [ Season.Spring, Season.Summer, Season.Autumn, Season.Winter ];
    var TreasureType;
    (function(TreasureType) {
      TreasureType[TreasureType["Level_200"] = 200] = "Level_200";
      TreasureType[TreasureType["Level_400"] = 400] = "Level_400";
      TreasureType[TreasureType["Level_600"] = 600] = "Level_600";
      TreasureType[TreasureType["Level_800"] = 800] = "Level_800";
      TreasureType[TreasureType["Level_1000"] = 1e3] = "Level_1000";
    })(TreasureType = exports.TreasureType || (exports.TreasureType = {}));
    exports.TreasurePool = [ TreasureType.Level_200, TreasureType.Level_400, TreasureType.Level_600, TreasureType.Level_800, TreasureType.Level_1000 ];
    exports.Treasure_Top = {
      0: {
        200: "bg_sfinish200",
        400: "bg_sfinish400",
        600: "bg_sfinish600",
        800: "bg_sfinish800",
        1e3: "bg_sfinish1000"
      },
      1: {
        200: "bg_smfinish200",
        400: "bg_smfinish400",
        600: "bg_smfinish600",
        800: "bg_smfinish800",
        1e3: "bg_smfinish1000"
      },
      2: {
        200: "bg_afinish200",
        400: "bg_afinish400",
        600: "bg_afinish600",
        800: "bg_afinish800",
        1e3: "bg_afinish1000"
      },
      3: {
        200: "bg_wfinish200",
        400: "bg_wfinish400",
        600: "bg_wfinish600",
        800: "bg_wfinish800",
        1e3: "bg_wfinish1000"
      }
    };
    var OverType;
    (function(OverType) {
      OverType[OverType["OUT_OF_MOVE"] = 0] = "OUT_OF_MOVE";
      OverType[OverType["TIME_UP"] = 1] = "TIME_UP";
    })(OverType = exports.OverType || (exports.OverType = {}));
    exports.FireBar = {
      Start: 8,
      End: 87
    };
    cc._RF.pop();
  }, {} ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1be43vsI5VEx6cptNa56Bfq", "EventManager");
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
    true, window["gEventMgr"] = exports.gEventMgr;
    cc._RF.pop();
  }, {} ],
  EventName: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "017c8l+T9FHF5CNitqArJpl", "EventName");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GlobalEvent;
    (function(GlobalEvent) {
      GlobalEvent[GlobalEvent["BUBBLE_SCALE_TEST"] = 0] = "BUBBLE_SCALE_TEST";
      GlobalEvent[GlobalEvent["SMALL_BGM"] = 1] = "SMALL_BGM";
      GlobalEvent[GlobalEvent["NORMAL_BGM"] = 2] = "NORMAL_BGM";
      GlobalEvent[GlobalEvent["SHOOT"] = 3] = "SHOOT";
      GlobalEvent[GlobalEvent["BUBBLE_FORCE"] = 4] = "BUBBLE_FORCE";
      GlobalEvent[GlobalEvent["ADD_BUBBLE"] = 5] = "ADD_BUBBLE";
      GlobalEvent[GlobalEvent["ADD_SCORE"] = 6] = "ADD_SCORE";
      GlobalEvent[GlobalEvent["GAME_OVER"] = 7] = "GAME_OVER";
      GlobalEvent[GlobalEvent["UPDATE_TASK"] = 8] = "UPDATE_TASK";
      GlobalEvent[GlobalEvent["NEXT_BUBBLE"] = 9] = "NEXT_BUBBLE";
      GlobalEvent[GlobalEvent["PLAY_EFFECT"] = 10] = "PLAY_EFFECT";
      GlobalEvent[GlobalEvent["HORCE_CLEAR"] = 11] = "HORCE_CLEAR";
      GlobalEvent[GlobalEvent["GET_TREASURE"] = 12] = "GET_TREASURE";
      GlobalEvent[GlobalEvent["CHECK_TREASURE"] = 13] = "CHECK_TREASURE";
      GlobalEvent[GlobalEvent["CHANGE_BGM"] = 14] = "CHANGE_BGM";
      GlobalEvent[GlobalEvent["SHOW_STREAK"] = 15] = "SHOW_STREAK";
      GlobalEvent[GlobalEvent["UPDATE_INDEX"] = 16] = "UPDATE_INDEX";
      GlobalEvent[GlobalEvent["UPDATE_POINTER_ROTATION"] = 17] = "UPDATE_POINTER_ROTATION";
      GlobalEvent[GlobalEvent["ON_POINTER_ROTATED"] = 18] = "ON_POINTER_ROTATED";
      GlobalEvent[GlobalEvent["IS_GREEN_IDLE"] = 19] = "IS_GREEN_IDLE";
      GlobalEvent[GlobalEvent["GET_CHANGE_BUTTON"] = 20] = "GET_CHANGE_BUTTON";
      GlobalEvent[GlobalEvent["PLAY_LOAD"] = 21] = "PLAY_LOAD";
      GlobalEvent[GlobalEvent["BUBBLE_LOAD"] = 22] = "BUBBLE_LOAD";
      GlobalEvent[GlobalEvent["OPEN_PAUSE"] = 23] = "OPEN_PAUSE";
      GlobalEvent[GlobalEvent["READY_GO"] = 24] = "READY_GO";
      GlobalEvent[GlobalEvent["SHOW_START"] = 25] = "SHOW_START";
      GlobalEvent[GlobalEvent["Hide_Load"] = 26] = "Hide_Load";
    })(GlobalEvent = exports.GlobalEvent || (exports.GlobalEvent = {}));
    true, window["GlobalEvent"] = GlobalEvent;
    cc._RF.pop();
  }, {} ],
  FrameAniBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b2d80rjoMtDXKhceGVjLXGq", "FrameAniBase");
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
    cc._RF.push(module, "949976qNuFDsoz+OUdWWlhf", "GameFactory");
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
        var _this = this;
        for (var i = 0; i < size; ++i) if (size > 1) setTimeout(function() {
          var newNode = cc.instantiate(_this.template);
          _this.put(newNode);
        }); else {
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
    var Step;
    (function(Step) {
      Step[Step["INIT"] = 0] = "INIT";
      Step[Step["Bubble"] = 4] = "Bubble";
      Step[Step["Point"] = 8] = "Point";
      Step[Step["Task"] = 16] = "Task";
      Step[Step["Score"] = 32] = "Score";
      Step[Step["Font"] = 64] = "Font";
      Step[Step["DONE"] = 124] = "DONE";
    })(Step || (Step = {}));
    var GameFactory = function() {
      function GameFactory() {
        this.step = Step.INIT;
        this.BubblePool = new HashMap_1.HashMap();
        this.PointPool = new HashMap_1.HashMap();
        this.TaskPool = new HashMap_1.HashMap();
        this.ScorePool = new HashMap_1.HashMap();
        this.FontPool = new HashMap_1.HashMap();
      }
      Object.defineProperty(GameFactory, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new GameFactory();
        },
        enumerable: true,
        configurable: true
      });
      GameFactory.prototype.init = function(callback, bubble, point, task, score, font) {
        this.doneCallback = callback;
        this.initBubble(132, bubble);
        this.initPoint(20, point);
        this.initTask(8, task);
        this.initScore(10, score);
        this.initFont(5, font);
      };
      GameFactory.prototype.nextStep = function(step) {
        this.step |= step;
        this.step >= Step.DONE && this.doneCallback && this.doneCallback();
      };
      GameFactory.prototype.initBubble = function(initCount, prefab) {
        var self = this;
        if (prefab) {
          self.BubblePool.add("Bubble", new ObjPool(prefab, initCount));
          self.nextStep(Step.Bubble);
        } else cc.loader.loadRes("prefabs/Bubble", cc.Prefab, function(err, prefabRes) {
          if (err) console.error(err); else {
            self.BubblePool.add("Bubble", new ObjPool(prefabRes, initCount));
            self.nextStep(Step.Bubble);
          }
        });
      };
      GameFactory.prototype.getBubble = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var _a;
        return (_a = this.BubblePool.get("Bubble")).get.apply(_a, args);
      };
      GameFactory.prototype.putBubble = function(bubble) {
        this.BubblePool.get("Bubble").put(bubble);
      };
      GameFactory.prototype.initPoint = function(initCount, prefab) {
        var self = this;
        if (prefab) {
          self.PointPool.add("Point", new ObjPool(prefab, initCount));
          self.nextStep(Step.Point);
        } else cc.loader.loadRes("prefabs/Point", cc.Prefab, function(err, prefabRes) {
          if (err) console.error(err); else {
            self.PointPool.add("Point", new ObjPool(prefabRes, initCount));
            self.nextStep(Step.Point);
          }
        });
      };
      GameFactory.prototype.getPoint = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var _a;
        return (_a = this.PointPool.get("Point")).get.apply(_a, args);
      };
      GameFactory.prototype.putPoint = function(Point) {
        this.PointPool.get("Point").put(Point);
      };
      GameFactory.prototype.initTask = function(initCount, prefab) {
        var self = this;
        if (prefab) {
          self.TaskPool.add("Task", new ObjPool(prefab, initCount));
          self.nextStep(Step.Task);
        } else cc.loader.loadRes("prefabs/Mission", cc.Prefab, function(err, prefabRes) {
          if (err) console.error(err); else {
            self.TaskPool.add("Task", new ObjPool(prefabRes, initCount));
            self.nextStep(Step.Task);
          }
        });
      };
      GameFactory.prototype.getTask = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var _a;
        return (_a = this.TaskPool.get("Task")).get.apply(_a, args);
      };
      GameFactory.prototype.putTask = function(Task) {
        this.TaskPool.get("Task").put(Task);
      };
      GameFactory.prototype.initScore = function(initCount, prefab) {
        var self = this;
        if (prefab) {
          self.ScorePool.add("Score", new ObjPool(prefab, initCount));
          self.nextStep(Step.Score);
        } else cc.loader.loadRes("prefabs/ScoreFloat", cc.Prefab, function(err, prefabRes) {
          if (err) console.error(err); else {
            self.ScorePool.add("Score", new ObjPool(prefabRes, initCount));
            self.nextStep(Step.Score);
          }
        });
      };
      GameFactory.prototype.getScore = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var _a;
        return (_a = this.ScorePool.get("Score")).get.apply(_a, args);
      };
      GameFactory.prototype.putScore = function(Score) {
        this.ScorePool.get("Score").put(Score);
      };
      GameFactory.prototype.initFont = function(initCount, prefab) {
        var self = this;
        if (prefab) {
          self.FontPool.add("Font", new ObjPool(prefab, initCount));
          self.nextStep(Step.Font);
        } else cc.loader.loadRes("prefabs/Font", cc.Prefab, function(err, prefabRes) {
          if (err) console.error(err); else {
            self.FontPool.add("Font", new ObjPool(prefabRes, initCount));
            self.nextStep(Step.Font);
          }
        });
      };
      GameFactory.prototype.getFont = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var _a;
        return (_a = this.FontPool.get("Font")).get.apply(_a, args);
      };
      GameFactory.prototype.putFont = function(Font) {
        this.FontPool.get("Font").put(Font);
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
    cc._RF.push(module, "63c91B5GQpJwrTOBvKO60W6", "GameScene");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameFactory_1 = require("./Controller/GameFactory");
    var Game_1 = require("./Controller/Game");
    var Const_1 = require("./Const");
    var BubbleMatrix_1 = require("./Data/BubbleMatrix");
    var Bubble_1 = require("./Bubble");
    var EventManager_1 = require("./Controller/EventManager");
    var StepController_1 = require("./Controller/StepController");
    var AudioController_1 = require("./Controller/AudioController");
    var EventName_1 = require("./Controller/EventName");
    var Guide_1 = require("./Guide");
    var ResultLayer_1 = require("./ResultLayer");
    var BubbleMove_1 = require("./BubbleMove");
    var LogHandler_1 = require("./Utils/LogHandler");
    var FrameAniBase_1 = require("./FrameAniBase");
    var BubbleHorce_1 = require("./BubbleAnimation/BubbleHorce");
    var celerx = require("./Utils/celerx");
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
        _this.BubblePrefab = null;
        _this.PointPrefab = null;
        _this.TaskPrefab = null;
        _this.AddScorePrefab = null;
        _this.BubbleAtlas = [];
        _this.BubbleChange = [];
        _this.BubbleBurst = [];
        _this.BubbleHorce = [];
        _this.BubbleDrop = [];
        _this.SpringBack = null;
        _this.SummerBack = null;
        _this.AutumnBack = null;
        _this.WinterBack = null;
        _this.NowStreak = null;
        _this.FireBar = null;
        _this.Guide = null;
        _this.Background = null;
        _this.FontAtlas = null;
        _this.TimeFont = null;
        _this.FontPrefab = null;
        _this.FontRoot = null;
        _this.TreasureRoot = null;
        _this.BigTreasure = null;
        _this.SmallTreasure = null;
        _this.ResultTitle = null;
        _this.ResultFont = null;
        _this.BubbleLayer = null;
        _this.Shooter = null;
        _this.TopNode = null;
        _this.BulletArray = null;
        _this.TaskArray = null;
        _this.ShooterLayer = null;
        _this.TimeLabel = null;
        _this.TimeLabel2 = null;
        _this.ScoreLabel = null;
        _this.ChangeShooter = null;
        _this.ReadyShooter = null;
        _this.ChangeCube = null;
        _this.ChangeButton = null;
        _this.PauseButton = null;
        _this.TreasureBar = null;
        _this.showScore = 0;
        _this.score = 0;
        _this.addScoreStep = 0;
        _this.TreasureProgress = [ 0, 0, .3, .5, .8, 1 ];
        return _this;
      }
      GameScene.prototype.onLoad = function() {
        this.ChangeCube.active = false;
        this.ChangeButton.node.active = this.ChangeCube.active;
        this.ChangeButton.interactable = this.ChangeCube.active;
        this.ShooterLayer.active = false;
        LogHandler_1.LogHandler.inst.initLog(celerx.log);
        LogHandler_1.LogHandler.inst.log(" game scene on load");
        cc.debug.setDisplayStats(true);
        this.ResultFont.node.scale = 0;
        Game_1.Game.FontRoot = this.FontRoot;
        Game_1.Game.BubbleLayer = this.BubbleLayer;
        Game_1.Game.TopNode = this.TopNode;
        var self = this;
        celerx.onStart(function() {
          self.celerOnStart();
        }.bind(this));
        celerx.provideScore(function() {
          return parseInt(Game_1.Game.getScore().toString());
        });
        StepController_1.gStep.register(this.celerReady.bind(this), [ Step.Audio, Step.Prefab ]);
        GameFactory_1.gFactory.init(function() {
          StepController_1.gStep.nextStep(Step.Prefab);
        }, this.BubblePrefab, this.PointPrefab, this.TaskPrefab, this.AddScorePrefab, this.FontPrefab);
        AudioController_1.gAudio.init(function() {
          StepController_1.gStep.nextStep(Step.Audio);
        });
        this.initEvent();
        this.TimeLabel.node.getParent().getChildByName("noTime").opacity = 0;
      };
      GameScene.prototype.celerReady = function() {
        LogHandler_1.LogHandler.inst.log(" call celerx.ready");
        celerx.ready();
        true;
        this.celerOnStart();
      };
      GameScene.prototype.celerOnStart = function() {
        var match = celerx.getMatch();
        Game_1.Game.MatchInfo = match || {};
        if (match && match.sharedRandomSeed) {
          CMath.randomSeed = match.sharedRandomSeed;
          CMath.sharedSeed = match.sharedRandomSeed;
          console.log(" match id:", match.matchId);
        } else {
          console.error(" match sharedRandomSeed null!");
          CMath.randomSeed = Math.random();
        }
        LogHandler_1.LogHandler.inst.log(" celer on start:", Game_1.Game.MatchInfo.matchId, ", seed:", Game_1.Game.MatchInfo.sharedRandomSeed);
        Game_1.Game.prepare();
        Game_1.Game.start();
        this.updateSeason();
        this.show();
        this.ShooterLayer.active = true;
        if (match && match.shouldLaunchTutorial || (true, !localStorage.getItem("guide"))) {
          this.Guide.show(function() {
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.READY_GO);
          });
          localStorage.setItem("guide", "true");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOW_START, false);
        } else {
          this.Guide.hide();
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOW_START, true);
        }
        cc.loader.loadRes("prefabs/Spring/ResultLayer");
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.Hide_Load);
      };
      GameScene.prototype.updateTreasure = function() {
        console.log(" start load treasure");
        var big = [ Const_1.TreasureType.Level_1000, Const_1.TreasureType.Level_800 ];
        var _loop_1 = function(child) {
          var i = Math.floor(CMath.getRandom(0, big.length));
          var level = big[i];
          cc.loader.loadRes("prefabs/" + Const_1.Season[Game_1.Game.Season] + "/" + level, cc.Prefab, function(err, prefab) {
            if (err) console.error(" load treasure err:", err); else {
              var treasure = cc.instantiate(prefab);
              child.addChild(treasure);
            }
          });
          big.splice(i, 1);
        };
        for (var _i = 0, _a = this.BigTreasure.children; _i < _a.length; _i++) {
          var child = _a[_i];
          _loop_1(child);
        }
        var small = [ Const_1.TreasureType.Level_200, Const_1.TreasureType.Level_400, Const_1.TreasureType.Level_600 ];
        var _loop_2 = function(child) {
          var i = Math.floor(CMath.getRandom(0, small.length));
          var level = small[i];
          cc.loader.loadRes("prefabs/" + Const_1.Season[Game_1.Game.Season] + "/" + level, cc.Prefab, function(err, prefab) {
            if (err) console.error(" load treasure err:", err); else {
              var treasure = cc.instantiate(prefab);
              child.addChild(treasure);
            }
          });
          small.splice(i, 1);
        };
        for (var _b = 0, _c = this.SmallTreasure.children; _b < _c.length; _b++) {
          var child = _c[_b];
          _loop_2(child);
        }
      };
      GameScene.prototype.updateSeason = function() {
        switch (Game_1.Game.Season) {
         case Const_1.Season.Spring:
          console.log(" set Spring bg");
          this.Background.spriteFrame = this.SpringBack;
          break;

         case Const_1.Season.Summer:
          console.log(" set Summer bg");
          this.Background.spriteFrame = this.SummerBack;
          break;

         case Const_1.Season.Autumn:
          this.Background.spriteFrame = this.AutumnBack;
          break;

         case Const_1.Season.Winter:
          this.Background.spriteFrame = this.WinterBack;
        }
      };
      GameScene.prototype.updateIndex = function() {
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_INDEX);
      };
      GameScene.prototype.initEvent = function() {
        var _this = this;
        EventManager_1.gEventMgr.targetOff(this);
        this.BulletArray.on(cc.Node.EventType.CHILD_REMOVED, this.onBubbleQueRemoveChild, this);
        this.Shooter.on(cc.Node.EventType.CHILD_REMOVED, this.onShooterRemoveChild, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.GET_CHANGE_BUTTON, function() {
          _this.ChangeButton.node.active = true;
          _this.ChangeCube.active = true;
          _this.ChangeCube.getChildByName("ani").runAction(cc.fadeIn(0));
          _this.ChangeCube.getChildByName("ani").getComponent(FrameAniBase_1.default).onComplete = function() {
            _this.ChangeCube.getChildByName("ani").runAction(cc.fadeOut(.1));
          };
          _this.ChangeCube.getComponentInChildren(FrameAniBase_1.default).play();
          var cube = _this.ChangeCube.getChildByName("Cube");
          if (cube) {
            var scale = cube.scale;
            cube.runAction(cc.sequence(cc.spawn(cc.scaleTo(.1, 2 * scale), cc.fadeTo(.1, 150)), cc.delayTime(.2), cc.spawn(cc.sequence(cc.scaleTo(.1, 1.2 * scale), cc.scaleTo(.1, 1.6 * scale), cc.scaleTo(.1, 1 * scale)), cc.fadeIn(.15)), cc.delayTime(.15), cc.fadeOut(.15)));
          }
          var cubeAni = _this.ChangeCube.getChildByName("CubeAni");
          if (cubeAni) {
            cubeAni.runAction(cc.fadeIn(0));
            cubeAni.getComponent(FrameAniBase_1.default).onComplete = function() {
              cubeAni.runAction(cc.fadeOut(.1));
            };
            cubeAni.getComponent(FrameAniBase_1.default).play();
          }
        }, this);
        this.ChangeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          if (false == _this.ChangeButton.interactable) return;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "selectionChange");
          var shooterBubble = _this.Shooter.children[0];
          var readyBubble = _this.ReadyShooter.children[0];
          var cubeBubble = _this.ChangeShooter.children[0];
          shooterBubble.setPosition(CMath.ConvertToNodeSpaceAR(shooterBubble, _this.ChangeShooter));
          shooterBubble.setParent(_this.ChangeShooter);
          shooterBubble.getComponent(BubbleMove_1.default).unreadyToShoot();
          shooterBubble.runAction(cc.sequence(cc.moveTo(.1, -128, 136), cc.moveTo(.1, 0, 0)));
          readyBubble.setPosition(CMath.ConvertToNodeSpaceAR(shooterBubble, _this.Shooter));
          readyBubble.setParent(_this.Shooter);
          readyBubble.runAction(cc.sequence(cc.moveTo(.2, 0, 0), cc.callFunc(function() {
            console.log(" ready bubble ready to shoot");
            readyBubble.getComponent(BubbleMove_1.default).readyToShoot();
          })));
          cubeBubble.setPosition(CMath.ConvertToNodeSpaceAR(shooterBubble, _this.ReadyShooter));
          cubeBubble.setParent(_this.ReadyShooter);
          cubeBubble.getComponent(BubbleMove_1.default).unreadyToShoot();
          cubeBubble.runAction(cc.moveTo(.2, 0, 0));
        }, this);
        this.PauseButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "button_click");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.OPEN_PAUSE);
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.GET_TREASURE, function(name) {
          var treasure = _this.TreasureRoot.getChildByName(name.toString());
          var frameAni = treasure.getChildByName("ani").getComponent(FrameAniBase_1.default);
          if (treasure && frameAni) {
            treasure.getChildByName("ani").runAction(cc.fadeIn(0));
            treasure.getChildByName("ani").getComponent(FrameAniBase_1.default).onComplete = function() {
              treasure.getChildByName("ani").runAction(cc.fadeOut(.1));
            };
            treasure.getComponentInChildren(FrameAniBase_1.default).play();
            treasure.getChildByName("icon") && treasure.getChildByName("icon").runAction(cc.fadeIn(.2));
            if (name >= 5) {
              if (treasure.getChildByName("circle")) {
                treasure.getChildByName("circle").active = true;
                treasure.getChildByName("circle").runAction(cc.repeatForever(cc.rotateBy(.1, 10)));
              }
              if (treasure.getChildByName("get")) {
                treasure.getChildByName("get").runAction(cc.sequence(cc.fadeTo(0, 100), cc.scaleTo(0, 5), cc.spawn(cc.scaleTo(.15, .8), cc.fadeIn(.15)), cc.scaleTo(.1, 1.2), cc.scaleTo(.1, .9), cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1)));
                treasure.getChildByName("get").active = true;
              }
            }
          }
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.SHOW_STREAK, function(isStreak, streak) {
          if (!isStreak) return;
          var spriteFrame = null;
          switch (streak) {
           case 2:
            spriteFrame = _this.FontAtlas.getSpriteFrame("f_streak");
            break;

           case 3:
            spriteFrame = _this.FontAtlas.getSpriteFrame("f_sstreak");
            break;

           case 4:
            spriteFrame = _this.FontAtlas.getSpriteFrame("f_great");
            break;

           case 5:
            spriteFrame = _this.FontAtlas.getSpriteFrame("f_amazing");
            break;

           default:
            spriteFrame = _this.FontAtlas.getSpriteFrame("f_awesome");
          }
          var fontNode = GameFactory_1.gFactory.getFont();
          fontNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          fontNode.scale = 0;
          fontNode.opacity = 255;
          _this.FontRoot.addChild(fontNode);
          fontNode.x = 0;
          var targetScale = 1 + .1 * streak;
          fontNode.y = _this.FontRoot.childrenCount * (150 * targetScale);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "font");
          fontNode.runAction(cc.sequence(cc.scaleTo(.1, targetScale), cc.delayTime(.3), cc.callFunc(function() {
            if (isStreak) {
              var baseScore = 25;
              var streakScore = 15;
              Game_1.Game.addScore(Const_1.BubbleType.Streak, baseScore + (streak - 2) * streakScore, .3 * (streak - 2) + 2, CMath.ConvertToNodeSpaceAR(fontNode, _this.TopNode).add(cc.v2(fontNode.width / 2, fontNode.height / 2)));
            }
          }, _this), cc.spawn(cc.scaleTo(.2, 1), cc.fadeTo(.2, 0)), cc.callFunc(function() {
            GameFactory_1.gFactory.putFont(fontNode);
          }, _this)));
        }, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.ADD_BUBBLE, this.addNextBubble, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_TASK, this.updateTask, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.NEXT_BUBBLE, this.getShooterBubble, this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.ADD_SCORE, this.addScore, this);
        EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.GAME_OVER, function(type) {
          Game_1.Game.isStart = false;
          type == Const_1.OverType.OUT_OF_MOVE ? _this.ResultFont.spriteFrame = _this.ResultTitle.getSpriteFrame("bg_font_gameover") : _this.ResultFont.spriteFrame = _this.ResultTitle.getSpriteFrame("bg_font_timeup");
          _this.ResultFont.node.runAction(cc.sequence(cc.scaleTo(.1, 1.5), cc.delayTime(.3), cc.scaleTo(.1, 1.2), cc.callFunc(function() {
            cc.loader.loadRes("prefabs/Spring/ResultLayer", cc.Prefab, function(err, prefab) {
              if (err) {
                cc.error("load result :", err);
                console.error(" submit score by open result err:", Game_1.Game.MatchInfo.matchId, ", seed:", Game_1.Game.MatchInfo.sharedRandomSeed);
                celerx.submitScore(Game_1.Game.getScore());
              } else {
                var title = void 0;
                title = type == Const_1.OverType.OUT_OF_MOVE ? _this.ResultTitle.getSpriteFrame("bg_result_font2") : _this.ResultTitle.getSpriteFrame("bg_result_font1");
                var resultLayer = cc.instantiate(prefab);
                resultLayer.getComponent(ResultLayer_1.default).setTexture(title);
                _this.node.addChild(resultLayer);
              }
            });
          }, _this)));
        }, this);
        true;
        cc.director.on("space-press", function() {
          _this.addNextBubble(3);
        }, this);
      };
      GameScene.prototype.updateTask = function() {
        var task = Game_1.Game.getCurTarget();
        console.log(task);
        for (var i = 0; i < Math.min(task.now, this.TaskArray.childrenCount); i++) {
          var taskNode = this.TaskArray.children[i];
          var complete = taskNode.getChildByName("Complete");
          if (0 == taskNode.scale || complete.scale > .5) continue;
          complete.runAction(cc.sequence(cc.scaleTo(.1, 1.5), cc.scaleTo(.1, 1)));
        }
      };
      GameScene.prototype.addNextBubble = function(count) {
        void 0 === count && (count = 1);
        while (count--) this.nextBubble();
      };
      GameScene.prototype.show = function() {
        console.log(" game show !!!");
        var iStart = 2, iEnd = iStart + Const_1.InitColNumber;
        var jStart = BubbleMatrix_1.IndexJStart, jEnd = BubbleMatrix_1.IndexJEnd;
        this.addBubble(iStart, iEnd, jStart, jEnd);
        this.getNewTask(Const_1.DefaultTaskCount);
      };
      GameScene.prototype.nextBubble = function() {
        Game_1.Game.addMoveTimes();
        var bubbleMatrix = Game_1.Game.getMatrix();
        bubbleMatrix.moveRow(1);
        this.BubbleLayer.height += Const_1.BubbleSize.height + Const_1.BubbleHeightOffset;
        this.BubbleLayer.runAction(cc.sequence(cc.moveBy(.2, 0, -(Const_1.BubbleSize.height + Const_1.BubbleHeightOffset)), cc.callFunc(function() {
          Game_1.Game.checkOutOfMove();
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHECK_TREASURE);
        }, this)));
        this.addBubble(bubbleMatrix.index2i(Game_1.Game.startIndex) - 1, bubbleMatrix.index2i(Game_1.Game.startIndex) - 1, BubbleMatrix_1.IndexJStart, BubbleMatrix_1.IndexJEnd, 1);
        for (var i = Game_1.Game.startIndex; i <= Game_1.Game.startIndex + BubbleMatrix_1.UseSize - 1; i++) {
          if (!bubbleMatrix.data[i] || !bubbleMatrix.data[i].bubble) return;
          bubbleMatrix.data[i].bubble.updateActive(i / 700 + (i - Game_1.Game.startIndex) / 50);
        }
      };
      GameScene.prototype.addBubble = function(istart, iend, jstart, jend, factor) {
        void 0 === factor && (factor = 0);
        console.log(" add bubble , istart:", istart, ", iend:", iend, ",jstart:", jstart, ", jend:", jend);
        var bubbleMatrix = Game_1.Game.getMatrix();
        for (var i = istart; i <= iend; i++) for (var j = jstart; j <= jend; j++) {
          var index = bubbleMatrix.ij2index(i, j);
          var bubble = Game_1.Game.getBubble(bubbleMatrix.data[index].type, index, bubbleMatrix.data[index].color, this.BubbleAtlas, this.BubbleChange[bubbleMatrix.data[index].color], this.BubbleBurst, this.BubbleHorce[bubbleMatrix.data[index].color], this.BubbleDrop);
          bubble || console.error(" bubble is null");
          var pos = bubbleMatrix.getPosOfij(i, j);
          bubble.x = pos.x;
          bubble.y = pos.y;
          this.BubbleLayer.addChild(bubble);
          bubbleMatrix.data[index].bubble = bubble.getComponent(Bubble_1.default);
          bubble.getComponent(Bubble_1.default).updateActive(index / 700 + (index - Game_1.Game.startIndex) / 50 * factor);
        }
        Game_1.Game.updateCollisionIndexes();
      };
      GameScene.prototype.onShooterRemoveChild = function() {};
      GameScene.prototype.newBubbleArray = function(count) {
        var curTask = Game_1.Game.getCurTarget();
        curTask.now < curTask.target && this.addNextBubble(1);
        this.getNewTask(count);
      };
      GameScene.prototype.getShooterBubble = function(count) {
        var _this = this;
        if (this.BulletArray.childrenCount <= 0 && this.ReadyShooter.childrenCount <= 0) {
          if (!this.ChangeCube.active) {
            this.newBubbleArray(count);
            return;
          }
          if (this.ChangeShooter.childrenCount <= 0) {
            console.log(" \u4e09\u4e2a\u4f4d\u7f6e\u90fd\u6ca1\u6ce1\u6ce1");
            this.newBubbleArray(count);
            return;
          }
        }
        this.Shooter.childrenCount > 0 && console.error(" shooter has bubble! getShooterBubble--");
        if (this.ReadyShooter.childrenCount <= 0) {
          console.warn(" ready \u6ca1\u6709\u6ce1\u6ce1");
          if (this.ChangeCube.active) {
            if (this.ChangeShooter.childrenCount <= 0) {
              if (this.BulletArray.childrenCount <= 0) {
                console.error(" bullet array is 0, cube is active");
                this.newBubbleArray(count);
                return;
              }
              var bubble2Cube_1 = this.BulletArray.children[0];
              bubble2Cube_1.setPosition(CMath.ConvertToNodeSpaceAR(bubble2Cube_1, this.ChangeShooter));
              bubble2Cube_1.setParent(this.ChangeShooter);
              bubble2Cube_1.runAction(cc.sequence(cc.moveBy(.1, 0, -200), cc.scaleTo(0, 0), cc.moveTo(0, 0), cc.scaleTo(.1, 1), cc.callFunc(function() {
                bubble2Cube_1.setPosition(CMath.ConvertToNodeSpaceAR(bubble2Cube_1, _this.ReadyShooter));
                bubble2Cube_1.setParent(_this.ReadyShooter);
                bubble2Cube_1.runAction(cc.sequence(cc.moveTo(.2, 0, 0), cc.callFunc(function() {
                  _this.putNextShooterBubble();
                })));
                if (_this.BulletArray.childrenCount > 0) {
                  var bubble2Cube2 = _this.BulletArray.children[0];
                  bubble2Cube2.setPosition(CMath.ConvertToNodeSpaceAR(bubble2Cube2, _this.ChangeShooter));
                  bubble2Cube2.setParent(_this.ChangeShooter);
                  bubble2Cube2.runAction(cc.sequence(cc.moveBy(.1, 0, -200), cc.scaleTo(0, 0), cc.moveTo(0, 0), cc.scaleTo(.1, 1)));
                } else console.log(" bullet array has no bubble 741");
              })));
            }
          } else {
            if (this.BulletArray.childrenCount <= 0) {
              console.error(" bullet array is 0");
              this.newBubbleArray(count);
              return;
            }
            var bubble2Ready_1 = this.BulletArray.children[0];
            bubble2Ready_1.setPosition(CMath.ConvertToNodeSpaceAR(bubble2Ready_1, this.ReadyShooter));
            bubble2Ready_1.setParent(this.ReadyShooter);
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_LOAD);
            bubble2Ready_1.scale = this.BulletArray.scale;
            bubble2Ready_1.runAction(cc.sequence(cc.scaleTo(0, 0), cc.moveTo(0, 0, 0)));
            EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.BUBBLE_LOAD, function() {
              bubble2Ready_1.runAction(cc.scaleTo(.1, 1));
            }, this);
          }
        } else this.putNextShooterBubble();
      };
      GameScene.prototype.putNextShooterBubble = function() {
        console.log("putNextShooterBubble, ready:", this.ReadyShooter.childrenCount, ", cube:", this.ChangeShooter.childrenCount, ", shooter:", this.Shooter.childrenCount);
        var bubble = this.ReadyShooter.children[0];
        bubble.setPosition(CMath.ConvertToNodeSpaceAR(bubble, this.Shooter));
        bubble.setParent(this.Shooter);
        bubble.scale = 1;
        bubble.runAction(cc.spawn(cc.fadeTo(.2, 255), cc.moveTo(.2, 0, 0), cc.callFunc(function() {
          bubble.getComponent(BubbleMove_1.default).readyToShoot();
        })));
        if (this.ChangeCube.active) if (this.ChangeShooter.childrenCount > 0) {
          var bubble2Ready_2 = this.ChangeShooter.children[0];
          bubble2Ready_2.setPosition(CMath.ConvertToNodeSpaceAR(bubble2Ready_2, this.ReadyShooter));
          bubble2Ready_2.setParent(this.ReadyShooter);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_LOAD);
          bubble2Ready_2.scale = 0;
          EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.BUBBLE_LOAD, function() {
            bubble2Ready_2.runAction(cc.scaleTo(.1, 1));
          }, this);
          bubble2Ready_2.runAction(cc.moveTo(.2, 0, 0));
          if (this.BulletArray.childrenCount > 0) {
            var bubble2Cube = this.BulletArray.children[0];
            bubble2Cube.setPosition(CMath.ConvertToNodeSpaceAR(bubble2Cube, this.ChangeShooter));
            bubble2Cube.setParent(this.ChangeShooter);
            bubble2Cube.scale = this.BulletArray.scale;
            bubble2Cube.runAction(cc.sequence(cc.spawn(cc.moveBy(.1, 0, -200), cc.scaleTo(.05, 0)), cc.scaleTo(0, 0), cc.moveTo(0, 0, 0), cc.scaleTo(.1, 1)));
          } else console.log(" bullet array has no bubble");
        } else console.log(" change shooter has no bubble"); else if (this.BulletArray.childrenCount > 0) {
          var bubble2Ready_3 = this.BulletArray.children[0];
          bubble2Ready_3.setPosition(CMath.ConvertToNodeSpaceAR(bubble2Ready_3, this.ReadyShooter));
          bubble2Ready_3.setParent(this.ReadyShooter);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_LOAD);
          bubble2Ready_3.scale = this.BulletArray.scale;
          bubble2Ready_3.runAction(cc.sequence(cc.scaleTo(0, 0), cc.moveTo(0, 0, 0)));
          EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.BUBBLE_LOAD, function() {
            bubble2Ready_3.runAction(cc.scaleTo(.1, 1));
          }, this);
        } else console.log(" bullet array is 0");
      };
      GameScene.prototype.getNewTask = function(count) {
        var _this = this;
        count || (count = Math.ceil(CMath.getRandom(Const_1.BubbleQueRange.Min, Const_1.BubbleQueRange.Max)));
        console.log("bubble que\uff1a", count);
        var allIndex = [];
        for (var i = 0; i < count; i++) allIndex.push(i);
        var doubleRound = Math.ceil(CMath.getRandom(Const_1.ShooterDoubleRange.Min, Const_1.ShooterDoubleRange.Max));
        var doubleCount = 0;
        var doubleColor = Const_1.BubbleColors.concat();
        var doubleData = {};
        if (Game_1.Game.getTaskLength() % doubleRound == 0) {
          doubleCount = Math.ceil(CMath.getRandom(Const_1.ShooterDoubleBubbleRange.Min, Const_1.ShooterDoubleBubbleRange.Max));
          while (doubleCount-- > 0 && allIndex.length > 0) {
            var i = Math.floor(CMath.getRandom(0, allIndex.length));
            var index = allIndex[i];
            allIndex.splice(i, 1);
            var colorIndex = Math.floor(CMath.getRandom(0, doubleColor.length));
            var color = doubleColor[colorIndex];
            doubleColor.splice(colorIndex, 1);
            doubleColor.length <= 0 && (doubleColor = Const_1.BubbleColors.concat());
            doubleData[index] = color;
          }
        }
        var boomRound = Math.ceil(CMath.getRandom(Const_1.ShooterBoomRange.Min, Const_1.ShooterBoomRange.Max));
        var boomCount = 0;
        var boomColor = Const_1.BubbleColors.concat();
        var boomData = {};
        if (Game_1.Game.getTaskLength() % boomRound == 0) {
          boomCount = Math.ceil(CMath.getRandom(Const_1.ShooterBoomBubbleRange.Min, Const_1.ShooterBoomBubbleRange.Max));
          while (boomCount-- > 0 && allIndex.length > 0) {
            var i = Math.floor(CMath.getRandom(0, allIndex.length));
            var index = allIndex[i];
            allIndex.splice(i, 1);
            var colorIndex = Math.floor(CMath.getRandom(0, boomColor.length));
            var color = boomColor[colorIndex];
            boomColor.splice(colorIndex, 1);
            boomColor.length <= 0 && (boomColor = Const_1.BubbleColors.concat());
            boomData[index] = color;
          }
        }
        var magicRound = Math.ceil(CMath.getRandom(Const_1.ShooterMagicRange.Min, Const_1.ShooterMagicRange.Max));
        var magicCount = 0;
        var magicData = {};
        if (Game_1.Game.getTaskLength() % magicRound == 0) {
          magicCount = Math.ceil(CMath.getRandom(Const_1.ShooterMagicBubbleRange.Min, Const_1.ShooterMagicBubbleRange.Max));
          while (magicCount-- > 0 && allIndex.length > 0) {
            var i = Math.floor(CMath.getRandom(0, allIndex.length));
            var index = allIndex[i];
            allIndex.splice(i, 1);
            magicData[index] = Const_1.BubbleType.Blank;
          }
        }
        var bubbleArray = [];
        for (var i = 0; i < count; i++) bubbleArray.push(Const_1.BubbleColors[Math.floor(CMath.getRandom() * Const_1.BubbleColors.length)]);
        var lastTask = Game_1.Game.getCurTarget();
        if (lastTask.now >= lastTask.target && lastTask.target > 0) {
          Game_1.Game.addTaskStreak(1);
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "task_success");
        } else {
          Game_1.Game.addTaskStreak(-Game_1.Game.getTaskStreak());
          lastTask.target > 0 && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "task_fail");
        }
        var _loop_3 = function(i) {
          var color = bubbleArray[i];
          var type = BubbleMatrix_1.SpecialType.Normal;
          if (doubleData[i]) {
            type = BubbleMatrix_1.SpecialType.Double;
            color = doubleData[i];
          }
          if (boomData[i]) {
            type = BubbleMatrix_1.SpecialType.Boom;
            color = boomData[i];
          }
          if (null != magicData[i]) {
            type = BubbleMatrix_1.SpecialType.Magic;
            color = magicData[i];
          }
          var bubble = Game_1.Game.getBubble(type, -1, color, this_1.BubbleAtlas, this_1.BubbleChange[color], this_1.BubbleBurst, this_1.BubbleHorce[color], this_1.BubbleDrop);
          bubble.getComponent(Bubble_1.default).setActive(true, true, i / 50);
          bubble.scale = 0;
          bubble.opacity = 0;
          bubble.y = 0;
          if (0 == i) {
            this_1.Shooter.childrenCount > 0 && console.error(" shooter has bubble!");
            bubble.x = 0;
            this_1.Shooter.addChild(bubble);
            var horce_1 = false;
            if (Game_1.Game.getTaskStreak() >= Const_1.TaskStreakAward) {
              Game_1.Game.addTaskStreak(-Game_1.Game.getTaskStreak());
              horce_1 = true;
            }
            bubble.runAction(cc.spawn(cc.scaleTo(.2, 1), cc.fadeTo(.2, 255), cc.moveTo(.3, 0, 0), cc.callFunc(function() {
              if (horce_1) {
                EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "change_horce");
                bubble.getComponent(Bubble_1.default).setColor(Const_1.BubbleType.Horce, BubbleMatrix_1.SpecialType.Horce);
                bubble.getComponent(Bubble_1.default).playAnimation(BubbleHorce_1.default, function() {
                  bubble.getComponent(Bubble_1.default).AnimationRoot.runAction(cc.fadeOut(.2));
                });
              }
              bubble.getComponent(BubbleMove_1.default).readyToShoot();
            })));
          } else if (1 == i) {
            this_1.ReadyShooter.childrenCount > 0 && console.error(" shooter has bubble!");
            bubble.x = 0;
            this_1.ReadyShooter.addChild(bubble);
            EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.BUBBLE_LOAD, function() {
              bubble.runAction(cc.scaleTo(.1, 1));
            }, this_1);
            bubble.scale = 0;
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_LOAD);
            bubble.runAction(cc.spawn(cc.fadeTo(.2, 255), cc.moveTo(.3, 0, 0), cc.callFunc(function() {})));
          } else if (2 == i) {
            if (this_1.ChangeCube.active) {
              this_1.ChangeShooter.childrenCount > 0 && console.error(" shooter has bubble!");
              bubble.x = 0;
              this_1.ChangeShooter.addChild(bubble);
              bubble.runAction(cc.spawn(cc.scaleTo(.2, 1), cc.fadeTo(.2, 255), cc.moveTo(.3, 0, 0), cc.callFunc(function() {})));
            }
          } else {
            bubble.x = -200 * i;
            this_1.BulletArray.addChild(bubble);
            bubble.runAction(cc.spawn(cc.scaleTo(.2, .5), cc.fadeTo(.2, 255), cc.moveTo(.4, 40 - this_1.BulletArray.childrenCount * Const_1.BubbleSize.width, 0)));
          }
        };
        var this_1 = this;
        for (var i = 0; i < bubbleArray.length; i++) _loop_3(i);
        var random = CMath.getRandom();
        var targetCount = 0;
        targetCount = Game_1.Game.getGameTime() >= 120 ? random <= .6 ? CMath.Clamp(count - Math.ceil(CMath.getRandom(2, 10)), Const_1.ClearTargetRange.Max, Const_1.ClearTargetRange.Min) : random <= .3 ? CMath.Clamp(count - Math.ceil(CMath.getRandom(1, 2)), Const_1.ClearTargetRange.Max, Const_1.ClearTargetRange.Min) : CMath.Clamp(count, Const_1.ClearTargetRange.Max, Const_1.ClearTargetRange.Min) : random <= .6 ? CMath.Clamp(count - Math.ceil(CMath.getRandom(1, 2)), Const_1.ClearTargetRange.Max, Const_1.ClearTargetRange.Min) : random <= .2 ? CMath.Clamp(count - Math.ceil(CMath.getRandom(2, 10)), Const_1.ClearTargetRange.Max, Const_1.ClearTargetRange.Min) : CMath.Clamp(count, Const_1.ClearTargetRange.Max, Const_1.ClearTargetRange.Min);
        targetCount = Math.min(count - 1, targetCount);
        console.log("task count\uff1a", targetCount);
        if (this.TaskArray.childrenCount > 0) {
          var _loop_4 = function(i) {
            var taskNode = this_2.TaskArray.children[i];
            var complete = taskNode.getChildByName("Complete");
            var fail = taskNode.getChildByName("Fail");
            if (lastTask.now >= lastTask.target) taskNode.runAction(cc.sequence(cc.delayTime(i / 10), cc.scaleTo(.1, 0), cc.callFunc(function() {
              i == _this.TaskArray.childrenCount - 1 && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "new_task");
              complete.scale = 0;
              fail.scale = 0;
              i <= targetCount - 1 && taskNode.runAction(cc.sequence(cc.delayTime(0), cc.scaleTo(.1, 1.2), cc.delayTime(.05), cc.scaleTo(.1, 1)));
            }))); else {
              complete.stopAllActions();
              complete.scale = 0;
              fail.runAction(cc.sequence(cc.delayTime(i / 10), cc.scaleTo(.1, 1), cc.delayTime(.2), cc.callFunc(function() {
                i == _this.TaskArray.childrenCount - 1 && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "new_task");
                taskNode.runAction(cc.sequence(cc.delayTime(i / 10), cc.scaleTo(.1, 0), cc.callFunc(function() {
                  fail.scale = 0;
                  i <= targetCount - 1 && taskNode.runAction(cc.sequence(cc.delayTime(0), cc.scaleTo(.1, 1.2), cc.delayTime(.05), cc.scaleTo(.1, 1)));
                })));
              })));
            }
          };
          var this_2 = this;
          for (var i = 0; i < this.TaskArray.childrenCount; i++) _loop_4(i);
        } else {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "new_task");
          while (this.TaskArray.childrenCount < 6) {
            var taskNode = GameFactory_1.gFactory.getTask();
            taskNode.y = 0;
            taskNode.x = this.TaskArray.childrenCount * taskNode.width * 1.3 + 30;
            taskNode.scale = 0;
            this.TaskArray.childrenCount < targetCount && taskNode.runAction(cc.sequence(cc.delayTime(this.TaskArray.childrenCount / 10), cc.scaleTo(.1, 1.2), cc.delayTime(.05), cc.scaleTo(.1, 1)));
            this.TaskArray.addChild(taskNode);
            taskNode.getChildByName("Complete").scale = 0;
            taskNode.getChildByName("Fail").scale = 0;
          }
        }
        Game_1.Game.pushTarget({
          now: 0,
          target: targetCount
        });
        console.log(" add new task done:", this.Shooter.childrenCount);
      };
      GameScene.prototype.onBubbleQueRemoveChild = function() {
        for (var _i = 0, _a = this.BulletArray.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.runAction(cc.moveBy(.2, Const_1.BubbleSize.width, 0));
        }
      };
      GameScene.prototype.addScore = function(score, scale, pos) {
        var _this = this;
        void 0 === pos && (pos = cc.v2(0, 0));
        var scoreLabel = GameFactory_1.gFactory.getScore();
        scoreLabel.scale = 0;
        scoreLabel.opacity = 255;
        scoreLabel.getComponent(cc.Label).string = "/" + score.toString();
        this.TopNode.addChild(scoreLabel);
        scoreLabel.setPosition(pos);
        var dis = CMath.Distance(pos, this.ScoreLabel.node.position);
        var moveTime = dis / 1560;
        scoreLabel.runAction(cc.sequence(cc.delayTime(.4), cc.fadeTo(moveTime + .3, 0)));
        scoreLabel.runAction(cc.sequence(cc.scaleTo(.1, 1.2 * scale), cc.delayTime(.2), cc.scaleTo(.1, 1 * scale), cc.moveTo(moveTime, this.ScoreLabel.node.position).easing(cc.easeInOut(1)), cc.scaleTo(.3, 0), cc.callFunc(function() {
          _this.score = Game_1.Game.getScore();
          _this.addScoreStep = (_this.score - _this.showScore) / 20;
          GameFactory_1.gFactory.putScore(scoreLabel);
        })));
      };
      GameScene.prototype.updateTimeCount = function() {
        var time = Math.floor(Game_1.Game.getGameTime());
        if (time > 5) return;
        var font = this.TimeLabel.node.getParent().getChildByName("font").getComponent(cc.Sprite);
        var timeFrame = this.TimeFont.getSpriteFrame("bg_time" + time);
        if (font.spriteFrame == timeFrame) return;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "count");
        font.spriteFrame = timeFrame;
        font.node.runAction(cc.sequence(cc.fadeTo(.2, 255), cc.scaleTo(.1, 1.2), cc.delayTime(.5), cc.scaleTo(.1, 1), cc.fadeTo(.1, 0)));
      };
      GameScene.prototype.update = function(dt) {
        this.ChangeButton.interactable = this.ReadyShooter.childrenCount > 0 && this.Shooter.childrenCount > 0 && this.ChangeShooter.childrenCount > 0 && Math.abs(this.Shooter.children[0].x) <= .01 && Math.abs(this.Shooter.children[0].y) <= .01 && Math.abs(this.ReadyShooter.children[0].x) <= .01 && Math.abs(this.ReadyShooter.children[0].y) <= .01 && Math.abs(this.ChangeShooter.children[0].x) <= .01 && Math.abs(this.ChangeShooter.children[0].y) <= .01;
        if (Game_1.Game.isStart) {
          this.FireBar.height = Game_1.Game.getTaskStreak() / Const_1.TaskStreakAward * (Const_1.FireBar.End - Const_1.FireBar.Start) + Const_1.FireBar.Start;
          this.NowStreak.string = Game_1.Game.getTaskStreak().toString();
          this.TreasureBar.progress = this.TreasureProgress[Game_1.Game.treasureCount];
          if (!this.Guide.node.active && !this.node.getChildByName("PauseLayer").active) {
            Game_1.Game.addGameTime(-dt);
            var time = CMath.TimeFormat(Game_1.Game.getGameTime()).split("-");
            this.TimeLabel.string = time[0];
            this.TimeLabel2.string = time[1];
            if (30 == Math.floor(Game_1.Game.getGameTime()) && this.TimeLabel.node.getParent().getChildByName("noTime").opacity <= 0) {
              this.TimeLabel.node.getParent().getChildByName("noTime").opacity = 255;
              this.TimeLabel.node.getParent().getComponentInChildren(FrameAniBase_1.default).play();
              EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHANGE_BGM, "bgm_30");
            }
            this.updateTimeCount();
          }
        }
        if (this.showScore < this.score) {
          this.showScore += this.addScoreStep;
          this.showScore = Math.min(this.score, this.showScore);
          this.ScoreLabel.string = Math.floor(this.showScore).toString();
        }
      };
      __decorate([ property(cc.Prefab) ], GameScene.prototype, "BubblePrefab", void 0);
      __decorate([ property(cc.Prefab) ], GameScene.prototype, "PointPrefab", void 0);
      __decorate([ property(cc.Prefab) ], GameScene.prototype, "TaskPrefab", void 0);
      __decorate([ property(cc.Prefab) ], GameScene.prototype, "AddScorePrefab", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "BubbleAtlas", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "BubbleChange", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "BubbleBurst", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "BubbleHorce", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "BubbleDrop", void 0);
      __decorate([ property(cc.SpriteFrame) ], GameScene.prototype, "SpringBack", void 0);
      __decorate([ property(cc.SpriteFrame) ], GameScene.prototype, "SummerBack", void 0);
      __decorate([ property(cc.SpriteFrame) ], GameScene.prototype, "AutumnBack", void 0);
      __decorate([ property(cc.SpriteFrame) ], GameScene.prototype, "WinterBack", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "NowStreak", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "FireBar", void 0);
      __decorate([ property(Guide_1.default) ], GameScene.prototype, "Guide", void 0);
      __decorate([ property(cc.Sprite) ], GameScene.prototype, "Background", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "FontAtlas", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "TimeFont", void 0);
      __decorate([ property(cc.Prefab) ], GameScene.prototype, "FontPrefab", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "FontRoot", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "TreasureRoot", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "BigTreasure", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "SmallTreasure", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameScene.prototype, "ResultTitle", void 0);
      __decorate([ property(cc.Sprite) ], GameScene.prototype, "ResultFont", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "BubbleLayer", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "Shooter", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "TopNode", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "BulletArray", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "TaskArray", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "ShooterLayer", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "TimeLabel", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "TimeLabel2", void 0);
      __decorate([ property(cc.Label) ], GameScene.prototype, "ScoreLabel", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "ChangeShooter", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "ReadyShooter", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "ChangeCube", void 0);
      __decorate([ property(cc.Button) ], GameScene.prototype, "ChangeButton", void 0);
      __decorate([ property(cc.Button) ], GameScene.prototype, "PauseButton", void 0);
      __decorate([ property(cc.ProgressBar) ], GameScene.prototype, "TreasureBar", void 0);
      GameScene = __decorate([ ccclass ], GameScene);
      return GameScene;
    }(cc.Component);
    exports.default = GameScene;
    cc._RF.pop();
  }, {
    "./Bubble": "Bubble",
    "./BubbleAnimation/BubbleHorce": "BubbleHorce",
    "./BubbleMove": "BubbleMove",
    "./Const": "Const",
    "./Controller/AudioController": "AudioController",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Controller/GameFactory": "GameFactory",
    "./Controller/StepController": "StepController",
    "./Data/BubbleMatrix": "BubbleMatrix",
    "./FrameAniBase": "FrameAniBase",
    "./Guide": "Guide",
    "./ResultLayer": "ResultLayer",
    "./Utils/LogHandler": "LogHandler",
    "./Utils/celerx": "celerx"
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f56074wKGJAf7tmCkTOJ+cK", "Game");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BubbleMatrix_1 = require("../Data/BubbleMatrix");
    var Const_1 = require("../Const");
    var GameFactory_1 = require("./GameFactory");
    var BubbleMove_1 = require("../BubbleMove");
    var EventManager_1 = require("./EventManager");
    var EventName_1 = require("./EventName");
    var GameCtrl = function() {
      function GameCtrl() {
        this.BubbleLayer = null;
        this.TopNode = null;
        this.FontRoot = null;
        this.moveTimes = 0;
        this.bubbleMatrix = new BubbleMatrix_1.BubbleMatrix();
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.taskStreak = 0;
        this.maxTaskStreak = 0;
        this.bubbleScore = {};
        this.bubbleClear = {};
        this.bubbleDrop = {};
        this.collisionIndexes = [];
        this.targets = [];
        this.clearIndex = [];
        this.dropIndex = [];
        this.fixedIndex = [];
        this.forceIndex = [];
        this.gameTime = 0;
        this.isStart = false;
        this.lastIndex = Const_1.InitStartIndex;
        this._startIndex = Const_1.InitStartIndex;
        this.hasReadygo = false;
        this.treasureCount = 0;
      }
      Object.defineProperty(GameCtrl, "inst", {
        get: function() {
          return this.ins ? this.ins : this.ins = new GameCtrl();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GameCtrl.prototype, "Season", {
        get: function() {
          return this.season;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(GameCtrl.prototype, "startIndex", {
        get: function() {
          return this._startIndex;
        },
        set: function(index) {
          this._startIndex = index;
          console.log(" startIndex:", this.startIndex);
        },
        enumerable: true,
        configurable: true
      });
      GameCtrl.prototype.start = function() {
        this.moveTimes = 0;
        this.score = 0;
        this.collisionIndexes.length = 0;
        this.targets.length = 0;
        this.clearIndex.length = 0;
        this.dropIndex.length = 0;
        this.forceIndex.length = 0;
        this.gameTime = Const_1.GameTime;
        this.streak = 0;
        this.maxStreak = 0;
        this.taskStreak = 0;
        this.maxTaskStreak = 0;
        for (var _i = 0, BubbleColors_1 = Const_1.BubbleColors; _i < BubbleColors_1.length; _i++) {
          var color = BubbleColors_1[_i];
          this.bubbleClear[color] = 0;
          this.bubbleDrop[color] = 0;
          this.bubbleScore[color] = 0;
        }
        for (var i = 0; i < 10; i++) this.season = Const_1.SeasonPool[Math.floor(CMath.getRandom(0, Const_1.SeasonPool.length))];
        console.log(" Season:", Const_1.Season[this.season]);
      };
      GameCtrl.prototype.getBubbleScore = function() {
        return this.bubbleScore;
      };
      GameCtrl.prototype.getTaskLength = function() {
        return this.targets.length;
      };
      GameCtrl.prototype.getCurTarget = function() {
        return 0 == this.targets.length ? {
          target: 0,
          now: 0
        } : this.targets[this.targets.length - 1];
      };
      GameCtrl.prototype.addTarget = function(now) {
        if (0 == this.targets.length) return;
        this.targets[this.targets.length - 1].now += now;
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_TASK);
      };
      GameCtrl.prototype.pushTarget = function(target) {
        this.streak = 0;
        this.targets.push(target);
      };
      GameCtrl.prototype.getCollisionIndexes = function() {
        return this.collisionIndexes;
      };
      GameCtrl.prototype.updateCollisionIndexes = function() {
        this.collisionIndexes.length = 0;
        var data = this.bubbleMatrix.data;
        for (var i = 0; i < data.length; i++) {
          if (!data[i] || !data[i].bubble) continue;
          var neiber = this.bubbleMatrix.getNeiborMatrix(i, 1);
          neiber.length < 6 && this.collisionIndexes.push(i);
        }
        for (var i = 0; i < data.length; i++) {
          if (!data[i] || !data[i].bubble) continue;
          if (this.collisionIndexes.indexOf(i) >= 0) continue;
          var neiber = this.bubbleMatrix.getNeiborMatrix(i, 1);
          var isCollsionIndex = true;
          for (var _i = 0, neiber_1 = neiber; _i < neiber_1.length; _i++) {
            var nei = neiber_1[_i];
            if (this.collisionIndexes.indexOf(nei) < 0) {
              isCollsionIndex = false;
              break;
            }
          }
          isCollsionIndex && this.collisionIndexes.push(i);
        }
        for (var i = this.startIndex - BubbleMatrix_1.MatrixSize; i < this.startIndex - BubbleMatrix_1.MatrixSize + BubbleMatrix_1.UseSize; i++) ;
        console.log(this.collisionIndexes);
      };
      GameCtrl.prototype.getScore = function() {
        return this.score;
      };
      GameCtrl.prototype.addScore = function(color, score, scale, pos) {
        void 0 === pos && (pos = cc.v2(0, 0));
        this.score += score;
        this.score = Math.max(0, this.score);
        this.addBubbleScore(color, score);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.ADD_SCORE, score, scale, pos);
      };
      GameCtrl.prototype.getMatrix = function() {
        return this.bubbleMatrix;
      };
      GameCtrl.prototype.prepare = function() {
        this.bubbleMatrix.initBubbleData();
      };
      GameCtrl.prototype.getLastI = function() {
        return this.bubbleMatrix.index2i(this.lastIndex);
      };
      GameCtrl.prototype.addGameTime = function(time) {
        this.gameTime += time;
        if (this.gameTime <= 0) {
          this.gameTime = 0;
          this.isStart = false;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GAME_OVER, Const_1.OverType.TIME_UP);
        }
      };
      GameCtrl.prototype.checkOutOfMove = function() {
        var lastBubble = null;
        for (var i = this.bubbleMatrix.data.length - 1; i >= this.startIndex; i--) {
          if (!this.bubbleMatrix.data[i] || !this.bubbleMatrix.data[i].bubble || !this.bubbleMatrix.data[i].bubble.node.active) continue;
          lastBubble = this.bubbleMatrix.data[i].bubble;
          break;
        }
        if (lastBubble) {
          var pos = CMath.ConvertToNodeSpaceAR(lastBubble.node, lastBubble.node.getParent().getParent());
          console.log(" check out of move:", pos.y);
          pos.y <= BubbleMove_1.DropBorder && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GAME_OVER, Const_1.OverType.OUT_OF_MOVE);
        }
      };
      GameCtrl.prototype.getGameTime = function() {
        return this.gameTime;
      };
      GameCtrl.prototype.addMoveTimes = function(count) {
        void 0 === count && (count = 1);
        this.moveTimes += count;
      };
      GameCtrl.prototype.getMoveTimes = function() {
        return this.moveTimes;
      };
      GameCtrl.prototype.getBubble = function(type, index, color, idleFrames, changeFrame, burst, horce, drop) {
        return GameFactory_1.gFactory.getBubble(type, index, color, idleFrames, changeFrame, burst, horce, drop);
      };
      GameCtrl.prototype.checkRecurily = function(index, checkBubble) {
        if (this.clearIndex.indexOf(index) >= 0) return;
        if (index < this.startIndex) return;
        this.clearIndex.push(index);
        var neibers = this.bubbleMatrix.getNeiborMatrix(index, 1);
        for (var _i = 0, neibers_1 = neibers; _i < neibers_1.length; _i++) {
          var otherIndex = neibers_1[_i];
          if (otherIndex < this.startIndex) continue;
          var bubble = this.bubbleMatrix.data[otherIndex].bubble;
          bubble && bubble.node.active && checkBubble.Color == bubble.Color && this.checkRecurily(otherIndex, checkBubble);
        }
      };
      GameCtrl.prototype.addBubbleScore = function(color, score) {
        this.bubbleScore[color] || (this.bubbleScore[color] = 0);
        this.bubbleScore[color] += score;
      };
      GameCtrl.prototype.addBubbleDrop = function(color) {
        this.bubbleDrop[color]++;
      };
      GameCtrl.prototype.addBubbleClear = function(color) {
        this.bubbleClear[color]++;
      };
      GameCtrl.prototype.checkBoomBubble = function(indexs) {
        for (var _i = 0, indexs_1 = indexs; _i < indexs_1.length; _i++) {
          var index = indexs_1[_i];
          if (this.bubbleMatrix.data[index].type == BubbleMatrix_1.SpecialType.Boom) {
            var neibers = this.bubbleMatrix.getNeiborMatrix(index, 1, false);
            var nextCheck = [];
            for (var _a = 0, neibers_2 = neibers; _a < neibers_2.length; _a++) {
              var nei = neibers_2[_a];
              if (this.clearIndex.indexOf(nei) < 0 && nei >= this.startIndex) {
                this.clearIndex.push(nei);
                this.bubbleMatrix.data[nei].type == BubbleMatrix_1.SpecialType.Boom && nextCheck.push(nei);
              }
            }
            this.checkBoomBubble(nextCheck);
          }
        }
      };
      GameCtrl.prototype.checkClear = function(index, checkBubble, colisionBubble) {
        this.clearIndex.length = 0;
        if (checkBubble.Type == BubbleMatrix_1.SpecialType.Horce) {
          console.log("\u5c0f\u9a6c\u7403:", this.startIndex);
          this.clearIndex.push(index);
          for (var i_1 = this.startIndex; i_1 < this.bubbleMatrix.data.length; i_1++) {
            if (!this.bubbleMatrix.data[i_1] || !this.bubbleMatrix.data[i_1].bubble || !this.bubbleMatrix.data[i_1].bubble.node.active) continue;
            this.bubbleMatrix.data[i_1].color == colisionBubble.Color && this.clearIndex.push(i_1);
          }
        } else this.checkRecurily(index, checkBubble);
        if (this.clearIndex.length < Const_1.ClearCountLimit && checkBubble.Type != BubbleMatrix_1.SpecialType.Horce || (true, 
        this.clearIndex.length < window["ClearCountLimit"])) {
          this.clearIndex.length = 0;
          this.streak = 0;
          return;
        }
        console.log(" --------------- \u68c0\u6d4b\u6d88\u9664 start---------------:", this.startIndex);
        console.log(this.clearIndex);
        console.log(" --------------- \u68c0\u6d4b\u6d88\u9664 end---------------");
        this.checkBoomBubble(this.clearIndex);
        this.streak++;
        this.streak >= 2 && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOW_STREAK, true, this.streak);
        this.clearIndex.length >= 5 && (this.clearIndex.length <= 8 ? EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOW_STREAK, false, 4) : this.clearIndex.length <= 12 ? EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOW_STREAK, false, 5) : EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOW_STREAK, false, 6));
        this.maxStreak = Math.max(this.streak, this.maxStreak);
        var length = this.bubbleMatrix.data.length;
        var i = 0;
        for (i = length - 1; i >= this.startIndex; i--) {
          var data = this.bubbleMatrix.data[i];
          if (data && data.color && data.bubble && data.bubble.node.active) break;
        }
        this.lastIndex = i;
        var hasDouble = false;
        for (var i_2 = 0; i_2 < this.clearIndex.length; i_2++) {
          var clear = this.clearIndex[i_2];
          var bubble = this.bubbleMatrix.data[clear].bubble;
          if (!bubble) continue;
          if (bubble.isDouble) {
            hasDouble = true;
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "double_score");
            break;
          }
        }
        if (checkBubble.Type == BubbleMatrix_1.SpecialType.Horce) {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "super_clear");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.HORCE_CLEAR);
        }
        for (var i_3 = 0; i_3 < this.clearIndex.length; i_3++) {
          var clear = this.clearIndex[i_3];
          var bubble = this.bubbleMatrix.data[clear].bubble;
          if (!bubble) continue;
          hasDouble && (bubble.DoubleScore = true);
          bubble.onClear(.1 * i_3, index);
          this.bubbleMatrix.data[clear].bubble = null;
          this.bubbleMatrix.data[clear].color = Const_1.BubbleType.Blank;
          this.bubbleMatrix.data[clear].type = BubbleMatrix_1.SpecialType.Normal;
        }
        this.clearIndex.length = 0;
        this.checkBubbleDrop();
        this.addTarget(1);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.CHECK_TREASURE);
        this.checkAddBubble();
      };
      GameCtrl.prototype.checkAddBubble = function() {
        var count = 0;
        for (var i = this.startIndex; i <= this.startIndex + 9; i++) this.bubbleMatrix.data[i] && this.bubbleMatrix.data[i].bubble && this.bubbleMatrix.data[i].bubble.node.active && count++;
        count <= 5 && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.ADD_BUBBLE, 3);
      };
      GameCtrl.prototype.checkDrop = function(index) {
        var neibers = this.bubbleMatrix.getNeiborMatrix(index, 1, false);
        for (var _i = 0, neibers_3 = neibers; _i < neibers_3.length; _i++) {
          var nei = neibers_3[_i];
          if (this.fixedIndex.indexOf(nei) >= 0) {
            this.fixedIndex = this.fixedIndex.concat(neibers);
            this.fixedIndex.push(index);
            break;
          }
        }
      };
      GameCtrl.prototype.checkBubbleDrop = function() {
        this.dropIndex.length = 0;
        this.fixedIndex.length = 0;
        for (var i = this.startIndex; i < this.startIndex + BubbleMatrix_1.UseSize; i++) this.bubbleMatrix.data[i] && this.bubbleMatrix.data[i].bubble && this.fixedIndex.push(i);
        for (var i = this.startIndex; i < this.bubbleMatrix.data.length; i++) i >= this.startIndex + BubbleMatrix_1.UseSize && this.bubbleMatrix.data[i] && this.bubbleMatrix.data[i].bubble && this.dropIndex.push(i);
        if (this.dropIndex.length <= 0) return;
        for (var _i = 0, _a = this.dropIndex; _i < _a.length; _i++) {
          var index = _a[_i];
          this.checkDrop(index);
        }
        for (var _b = 0, _c = this.fixedIndex; _b < _c.length; _b++) {
          var index = _c[_b];
          var i = this.dropIndex.indexOf(index);
          i >= 0 && this.dropIndex.splice(i, 1);
        }
        console.log(" \u68c0\u6d4b\u6389\u843d---------------");
        console.log(this.dropIndex);
        for (var _d = 0, _e = this.dropIndex; _d < _e.length; _d++) {
          var index = _e[_d];
          if (!this.bubbleMatrix.data[index]) continue;
          var bubble = this.bubbleMatrix.data[index].bubble;
          if (bubble) {
            bubble.move.drop();
            this.bubbleMatrix.data[index].bubble = null;
            this.bubbleMatrix.data[index].color = Const_1.BubbleType.Blank;
            this.bubbleMatrix.data[index].type = BubbleMatrix_1.SpecialType.Normal;
          }
        }
        this.dropIndex.length = 0;
      };
      GameCtrl.prototype.addTaskStreak = function(streak) {
        this.taskStreak += streak;
        console.log(" 1task streak:", this.taskStreak, streak);
        this.taskStreak = Math.max(0, this.taskStreak);
        console.log(" task streak:", this.taskStreak, streak);
        this.maxTaskStreak = Math.max(this.maxTaskStreak, this.taskStreak);
      };
      GameCtrl.prototype.getTaskStreak = function() {
        return this.taskStreak;
      };
      return GameCtrl;
    }();
    exports.Game = GameCtrl.inst;
    true, window["Game"] = exports.Game;
    cc._RF.pop();
  }, {
    "../BubbleMove": "BubbleMove",
    "../Const": "Const",
    "../Data/BubbleMatrix": "BubbleMatrix",
    "./EventManager": "EventManager",
    "./EventName": "EventName",
    "./GameFactory": "GameFactory"
  } ],
  GreenIdle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b6acWt//tGdJok24P7E67l", "GreenIdle");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../../FrameAniBase");
    var EventManager_1 = require("../../Controller/EventManager");
    var EventName_1 = require("../../Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GreenIdle = function(_super) {
      __extends(GreenIdle, _super);
      function GreenIdle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GreenIdle.prototype.onLoad = function() {
        var _this = this;
        _super.prototype.onLoad.call(this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.IS_GREEN_IDLE, function(isPlay) {
          isPlay && false == _this.isPlaying ? _this.playOnLoop() : _this.stop();
        });
      };
      GreenIdle.aniName = "GreenIdle";
      GreenIdle = __decorate([ ccclass ], GreenIdle);
      return GreenIdle;
    }(FrameAniBase_1.default);
    exports.default = GreenIdle;
    cc._RF.pop();
  }, {
    "../../Controller/EventManager": "EventManager",
    "../../Controller/EventName": "EventName",
    "../../FrameAniBase": "FrameAniBase"
  } ],
  Guide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d6d2YvErVK1L2MNAsgprAA", "Guide");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Guide = function(_super) {
      __extends(Guide, _super);
      function Guide() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ButtonAtlas = null;
        _this.Next = null;
        _this.Forward = null;
        _this.Content = null;
        _this.GuideView = null;
        _this.callback = null;
        return _this;
      }
      Guide.prototype.onLoad = function() {
        var _this = this;
        this.Next.node.on(cc.Node.EventType.TOUCH_END, this.nextPage, this);
        this.Forward.node.on(cc.Node.EventType.TOUCH_END, this.forwardPage, this);
        for (var _i = 0, _a = this.Content.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.getChildByName("Close").on(cc.Node.EventType.TOUCH_END, function() {
            _this.hide();
            EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "button_click");
          }, this);
        }
        this.GuideView.node.on("scroll-ended", this.updateButton, this);
      };
      Guide.prototype.start = function() {};
      Guide.prototype.hide = function() {
        var _this = this;
        setTimeout(function() {
          _this.node.active = false;
          _this.callback && _this.callback();
          cc.Node.maxTouchNum = 1;
          cc.Node.touchNum = 0;
        }, 0);
      };
      Guide.prototype.show = function(closeCallback) {
        cc.Node.maxTouchNum = 10;
        cc.Node.touchNum = 0;
        this.node.active = true;
        this.callback = closeCallback;
        this.GuideView.scrollToPage(0, 0);
        this.Forward.node.active = false;
        this.Next.node.getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("btn_new");
      };
      Guide.prototype.nextPage = function() {
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "button_click");
        if (this.GuideView.getCurrentPageIndex() >= this.GuideView.content.childrenCount - 1) this.hide(); else {
          var nextPageIndex = (this.GuideView.getCurrentPageIndex() + 1) % this.GuideView.content.childrenCount;
          this.GuideView.setCurrentPageIndex(nextPageIndex);
          this.updateButton();
        }
      };
      Guide.prototype.forwardPage = function() {
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "button_click");
        if (this.GuideView.getCurrentPageIndex() <= 0) ; else {
          var forwardPageIndex = (this.GuideView.getCurrentPageIndex() - 1) % this.GuideView.content.childrenCount;
          this.GuideView.setCurrentPageIndex(forwardPageIndex);
          this.updateButton();
        }
      };
      Guide.prototype.updateButton = function() {
        this.GuideView.getCurrentPageIndex() >= this.GuideView.content.childrenCount - 1 ? this.Next.node.getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("new_close") : this.Next.node.getComponent(cc.Sprite).spriteFrame = this.ButtonAtlas.getSpriteFrame("btn_new");
        this.Forward.node.active = 0 != this.GuideView.getCurrentPageIndex();
      };
      __decorate([ property(cc.SpriteAtlas) ], Guide.prototype, "ButtonAtlas", void 0);
      __decorate([ property(cc.Button) ], Guide.prototype, "Next", void 0);
      __decorate([ property(cc.Button) ], Guide.prototype, "Forward", void 0);
      __decorate([ property(cc.Node) ], Guide.prototype, "Content", void 0);
      __decorate([ property(cc.PageView) ], Guide.prototype, "GuideView", void 0);
      Guide = __decorate([ ccclass ], Guide);
      return Guide;
    }(cc.Component);
    exports.default = Guide;
    cc._RF.pop();
  }, {
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName"
  } ],
  HandUpLeft: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ffe9bP+UqVKj75trtccD5k+", "HandUpLeft");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("../../FrameAniBase");
    var EventManager_1 = require("../../Controller/EventManager");
    var EventName_1 = require("../../Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HandUpLeft = function(_super) {
      __extends(HandUpLeft, _super);
      function HandUpLeft() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandUpLeft.prototype.onLoad = function() {
        var _this = this;
        _super.prototype.onLoad.call(this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.ON_POINTER_ROTATED, function(isLeft) {
          isLeft ? _this.playByStep() : _this.stop();
        }, this);
      };
      HandUpLeft.aniName = "HandUpLeft";
      HandUpLeft = __decorate([ ccclass ], HandUpLeft);
      return HandUpLeft;
    }(FrameAniBase_1.default);
    exports.default = HandUpLeft;
    cc._RF.pop();
  }, {
    "../../Controller/EventManager": "EventManager",
    "../../Controller/EventName": "EventName",
    "../../FrameAniBase": "FrameAniBase"
  } ],
  HandUpRight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf0e8y4ZthFO51qKbDIAQoB", "HandUpRight");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("../../Controller/EventManager");
    var EventName_1 = require("../../Controller/EventName");
    var FrameAniBase_1 = require("../../FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HandUpRight = function(_super) {
      __extends(HandUpRight, _super);
      function HandUpRight() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandUpRight.prototype.onLoad = function() {
        var _this = this;
        _super.prototype.onLoad.call(this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.ON_POINTER_ROTATED, function(isLeft) {
          isLeft ? _this.stop() : _this.playByStep();
        }, this);
      };
      HandUpRight.aniName = "HandUpRight";
      HandUpRight = __decorate([ ccclass ], HandUpRight);
      return HandUpRight;
    }(FrameAniBase_1.default);
    exports.default = HandUpRight;
    cc._RF.pop();
  }, {
    "../../Controller/EventManager": "EventManager",
    "../../Controller/EventName": "EventName",
    "../../FrameAniBase": "FrameAniBase"
  } ],
  HashMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "834d8P+ikFOAYgMzFmudtRR", "HashMap");
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
  LoadingImg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08b58X7vJJJUY4roqLZ8Atp", "LoadingImg");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadingImg = function(_super) {
      __extends(LoadingImg, _super);
      function LoadingImg() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LoadingImg.prototype.onLoad = function() {
        var _this = this;
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.Hide_Load, function() {
          _this.node.runAction(cc.sequence(cc.fadeOut(.05), cc.callFunc(function() {
            _this.node.removeFromParent(true);
          })));
        }, this);
      };
      LoadingImg = __decorate([ ccclass ], LoadingImg);
      return LoadingImg;
    }(cc.Component);
    exports.default = LoadingImg;
    cc._RF.pop();
  }, {
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName"
  } ],
  LogHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e3f0ZIKgdJt7KKOAGW0fes", "LogHandler");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogHandler = function() {
      function LogHandler() {
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
        this.logFunc = console.log;
      };
      LogHandler.prototype.log = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        this.addLog.apply(this, args);
        this.sendLog();
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
      LogHandler.VERSION = "Bust-A-Move version 19 : ";
      LogHandler.LISTENNING_EVENTS = [ "error" ];
      return LogHandler;
    }();
    exports.LogHandler = LogHandler;
    true, window["LogHandler"] = LogHandler;
    cc._RF.pop();
  }, {} ],
  PauseLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06fb3hXnkNL34EZDW3IRUcG", "PauseLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Guide_1 = require("./Guide");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PauseLayer = function(_super) {
      __extends(PauseLayer, _super);
      function PauseLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.GuideLayer = null;
        return _this;
      }
      Object.defineProperty(PauseLayer.prototype, "Resume", {
        get: function() {
          return this.node.getChildByName("Resume");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "Help", {
        get: function() {
          return this.node.getChildByName("Help");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "MusicSlider", {
        get: function() {
          return this.node.getChildByName("Music").getComponent(cc.Slider);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "EffectSlider", {
        get: function() {
          return this.node.getChildByName("Effect").getComponent(cc.Slider);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "MusicMask", {
        get: function() {
          return this.MusicSlider.node.getChildByName("Mask");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PauseLayer.prototype, "EffectMask", {
        get: function() {
          return this.EffectSlider.node.getChildByName("Mask");
        },
        enumerable: true,
        configurable: true
      });
      PauseLayer.prototype.onLoad = function() {
        var _this = this;
        this.node.active = false;
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.OPEN_PAUSE, function() {
          _this.show();
        }, this);
        this.Help.on(cc.Node.EventType.TOUCH_END, function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "button_click");
          _this.GuideLayer.show();
        }, this);
        this.Resume.on(cc.Node.EventType.TOUCH_END, function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "button_click");
          _this.hide();
        }, this);
        this.EffectSlider.node.on("slide", function() {
          cc.audioEngine.setEffectsVolume(_this.EffectSlider.progress);
          _this.updateVolumeSlider();
        }, this);
        this.MusicSlider.node.on("slide", function() {
          cc.audioEngine.setMusicVolume(_this.MusicSlider.progress);
          _this.updateVolumeSlider();
        }, this);
      };
      PauseLayer.prototype.updateVolumeSlider = function() {
        this.MusicSlider.progress = cc.audioEngine.getMusicVolume();
        this.EffectSlider.progress = cc.audioEngine.getEffectsVolume();
        this.EffectMask.width = 507 * this.EffectSlider.progress;
        this.MusicMask.width = 507 * this.MusicSlider.progress;
      };
      PauseLayer.prototype.show = function() {
        this.node.active = true;
        this.updateVolumeSlider();
      };
      PauseLayer.prototype.hide = function() {
        var _this = this;
        setTimeout(function() {
          _this.node.active = false;
        }, 0);
      };
      __decorate([ property(Guide_1.default) ], PauseLayer.prototype, "GuideLayer", void 0);
      PauseLayer = __decorate([ ccclass ], PauseLayer);
      return PauseLayer;
    }(cc.Component);
    exports.default = PauseLayer;
    cc._RF.pop();
  }, {
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Guide": "Guide"
  } ],
  Pointer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfda2iUzjJK2KNyR3Mo4JBL", "Pointer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Pointer = function(_super) {
      __extends(Pointer, _super);
      function Pointer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.factor = 1;
        return _this;
      }
      Pointer.prototype.onLoad = function() {
        var _this = this;
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.UPDATE_POINTER_ROTATION, function(rotation) {
          Math.floor(rotation) % 5 == 0 && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.ON_POINTER_ROTATED, _this.node.rotation <= 0);
          _this.node.rotation = rotation * _this.factor;
        }, this);
      };
      Pointer.prototype.start = function() {};
      __decorate([ property ], Pointer.prototype, "factor", void 0);
      Pointer = __decorate([ ccclass ], Pointer);
      return Pointer;
    }(cc.Component);
    exports.default = Pointer;
    cc._RF.pop();
  }, {
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName"
  } ],
  ReadyGoAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af2caQWsglGhLpOpE7b4hy8", "ReadyGoAnimation");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var Game_1 = require("./Controller/Game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReadyGo = function(_super) {
      __extends(ReadyGo, _super);
      function ReadyGo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ReadyGo = null;
        return _this;
      }
      Object.defineProperty(ReadyGo.prototype, "sprite", {
        get: function() {
          return this.getComponent(cc.Sprite);
        },
        enumerable: true,
        configurable: true
      });
      ReadyGo.prototype.onLoad = function() {
        var _this = this;
        EventManager_1.gEventMgr.once(EventName_1.GlobalEvent.READY_GO, function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "readygo");
          _this.play();
        }, this);
      };
      ReadyGo.prototype.play = function() {
        var _this = this;
        this.sprite.spriteFrame = this.ReadyGo.getSpriteFrame("bg_font_ready");
        this.node.runAction(cc.fadeIn(.2));
        this.node.runAction(cc.sequence(cc.scaleTo(2.3, 1.5), cc.callFunc(function() {
          _this.sprite.spriteFrame = _this.ReadyGo.getSpriteFrame("bg_font_go");
        }), cc.scaleTo(.1, 1), cc.fadeOut(.5), cc.callFunc(function() {
          Game_1.Game.hasReadygo = true;
          Game_1.Game.isStart = true;
        })));
      };
      __decorate([ property(cc.SpriteAtlas) ], ReadyGo.prototype, "ReadyGo", void 0);
      ReadyGo = __decorate([ ccclass ], ReadyGo);
      return ReadyGo;
    }(cc.Component);
    exports.default = ReadyGo;
    cc._RF.pop();
  }, {
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game"
  } ],
  ResultAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c567CEF4pENLRjcHnTQ9NP", "ResultAnimation");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("./FrameAniBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ResultAnimation = function(_super) {
      __extends(ResultAnimation, _super);
      function ResultAnimation() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.frames = [];
        return _this;
      }
      ResultAnimation.prototype.nextFrame = function() {
        if (this.frames && this.frames.length > 0) {
          this.Sprite.spriteFrame = this.frames[this.currentIndex];
          this.callEventFrame();
          this.currentIndex = (this.currentIndex + 1) % this.frames.length;
        }
      };
      ResultAnimation.aniName = "ResultAnimation";
      __decorate([ property(cc.SpriteFrame) ], ResultAnimation.prototype, "frames", void 0);
      ResultAnimation = __decorate([ ccclass ], ResultAnimation);
      return ResultAnimation;
    }(FrameAniBase_1.default);
    exports.default = ResultAnimation;
    cc._RF.pop();
  }, {
    "./FrameAniBase": "FrameAniBase"
  } ],
  ResultLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cddevafb1BXoHh5PEsKHRP", "ResultLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./Controller/Game");
    var Const_1 = require("./Const");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var LogHandler_1 = require("./Utils/LogHandler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var celerx = require("./Utils/celerx");
    var ResultLayer = function(_super) {
      __extends(ResultLayer, _super);
      function ResultLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Result = null;
        _this.Submit = null;
        _this.Title = null;
        _this.FinalScore = null;
        _this.GameScore = null;
        _this.Bonus = null;
        _this.Equip = null;
        _this.BonusScore = null;
        _this.gameScore = 0;
        _this.showGameScore = 0;
        _this.bonus = 0;
        _this.showBonus = 0;
        _this.bonusScore = 0;
        _this.showBonusScore = 0;
        _this.totalScore = 0;
        _this.showTotalScore = 0;
        _this.scoreStep = 0;
        _this.submit = false;
        _this.show = false;
        _this.canSubmit = false;
        return _this;
      }
      ResultLayer.prototype.onLoad = function() {
        var _this = this;
        LogHandler_1.LogHandler.inst.dumpFrameInfo();
        var bubbleScore = Game_1.Game.getBubbleScore();
        console.log(bubbleScore);
        for (var _i = 0, TreasurePool_1 = Const_1.TreasurePool; _i < TreasurePool_1.length; _i++) {
          var treasure = TreasurePool_1[_i];
          if (bubbleScore[treasure]) {
            this.bonusScore += bubbleScore[treasure];
            this.bonus += 1;
            console.log(" bonusCount:", this.bonus);
          }
        }
        this.totalScore = Game_1.Game.getScore();
        this.gameScore = this.totalScore - this.bonusScore;
        this.scoreStep = Math.max(Math.floor(Math.min(this.totalScore / 100, this.gameScore / 100)), 10);
        this.Equip.getChildByName("ok").active = Game_1.Game.treasureCount >= 5;
        this.Equip.getChildByName("fail").active = Game_1.Game.treasureCount < 5;
        this.Submit.scale = 0;
        this.Result.scale = 0;
        this.Result.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1), cc.callFunc(this.showScore, this)));
        this.Submit.on(cc.Node.EventType.TOUCH_END, function() {
          if (!_this.canSubmit) return;
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "button_click");
          true;
          window.location.reload();
        }, this);
      };
      ResultLayer.prototype.setTexture = function(title) {
        this.Title.spriteFrame = title;
      };
      ResultLayer.prototype.showScore = function() {
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "over");
        this.show = true;
      };
      ResultLayer.prototype.update = function() {
        var _this = this;
        if (this.show) {
          if (this.showGameScore < this.gameScore) {
            this.showGameScore += this.scoreStep;
            this.showGameScore = Math.min(this.showGameScore, this.gameScore);
            this.GameScore.string = this.showGameScore.toString();
          }
          if (this.showBonus < this.bonus) {
            this.showBonus += .1;
            this.showBonus = Math.min(this.showBonus, this.bonus);
            this.Bonus.string = Math.floor(this.showBonus).toString();
          }
          if (this.showBonusScore < this.bonusScore) {
            this.showBonusScore += this.scoreStep;
            this.showBonusScore = Math.min(this.showBonusScore, this.bonusScore);
            this.BonusScore.string = this.showBonusScore.toString();
          }
          if (this.showGameScore == this.gameScore && this.showTotalScore < this.totalScore) {
            this.showTotalScore += this.scoreStep;
            this.showTotalScore = Math.min(this.totalScore, this.showTotalScore);
            this.FinalScore.string = this.showTotalScore.toString();
          }
          if (this.showTotalScore == this.totalScore) {
            this.show = false;
            this.Submit.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
              _this.canSubmit = true;
              setTimeout(function() {
                if (!_this.submit) {
                  console.log(" submit score by timeout:", Game_1.Game.MatchInfo.matchId, ", seed:", Game_1.Game.MatchInfo.sharedRandomSeed);
                  celerx.submitScore(Game_1.Game.getScore());
                  _this.submit = true;
                }
              }, 3e3);
            }, this)));
          }
        }
      };
      __decorate([ property(cc.Node) ], ResultLayer.prototype, "Result", void 0);
      __decorate([ property(cc.Node) ], ResultLayer.prototype, "Submit", void 0);
      __decorate([ property(cc.Sprite) ], ResultLayer.prototype, "Title", void 0);
      __decorate([ property(cc.Label) ], ResultLayer.prototype, "FinalScore", void 0);
      __decorate([ property(cc.Label) ], ResultLayer.prototype, "GameScore", void 0);
      __decorate([ property(cc.Label) ], ResultLayer.prototype, "Bonus", void 0);
      __decorate([ property(cc.Node) ], ResultLayer.prototype, "Equip", void 0);
      __decorate([ property(cc.Label) ], ResultLayer.prototype, "BonusScore", void 0);
      ResultLayer = __decorate([ ccclass ], ResultLayer);
      return ResultLayer;
    }(cc.Component);
    exports.default = ResultLayer;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Utils/LogHandler": "LogHandler",
    "./Utils/celerx": "celerx"
  } ],
  ShooterLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a86feZkxotMl5W4gIeRr5Ex", "ShooterLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var Bubble_1 = require("./Bubble");
    var BubbleMove_1 = require("./BubbleMove");
    var GameFactory_1 = require("./Controller/GameFactory");
    var Game_1 = require("./Controller/Game");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var STAR_OFFSET = 150;
    var SHOOTER_LIMIT_HEIGHT = -700;
    var POINT_OFFSET = 60;
    var POINT_OPCIATY = 150;
    var POINT_COUNT = 15;
    var PointColor = {
      0: "bg_pointrainbow",
      1: "bg_pointblue",
      2: "bg_pointgreen",
      3: "bg_pointorange",
      4: "bg_pointpurple",
      5: "bg_pointred",
      6: "bg_pointyellow",
      7: "bg_pointhorse"
    };
    var SignColor = {
      0: "bg_signrainbow",
      1: "bg_signblue",
      2: "bg_signgreen",
      3: "bg_signorange",
      4: "bg_signpurple",
      5: "bg_signred",
      6: "bg_signyellow",
      7: "bg_signhorse"
    };
    var ShooterLayer = function(_super) {
      __extends(ShooterLayer, _super);
      function ShooterLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ShooterStar = null;
        _this.Shooter = null;
        _this.PointAtlas = null;
        _this.Point = null;
        _this.pointCount = POINT_COUNT;
        _this.isStart = false;
        return _this;
      }
      ShooterLayer.prototype.onLoad = function() {
        this.ShooterStar.active = false;
        this.Point.active = false;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
      };
      ShooterLayer.prototype.start = function() {};
      ShooterLayer.prototype.updateStarPosition = function(touchP) {
        var shooterP = CMath.GetWorldPosition(this.Shooter);
        var touchPNode = this.node.getParent().convertToNodeSpaceAR(touchP);
        var k = CMath.getK(touchP, shooterP);
        var rotation = 0;
        if (null === k) {
          var dir = shooterP.y <= touchP.y ? 1 : -1;
          this.ShooterStar.x = 0;
          this.ShooterStar.y = touchPNode.y + dir * STAR_OFFSET;
          this.updatePoint(k, dir);
        } else {
          var dgree = Math.atan(k);
          var dir = shooterP.x <= touchP.x ? 1 : -1;
          this.ShooterStar.x = touchPNode.x + Math.cos(dgree) * STAR_OFFSET * dir;
          this.ShooterStar.y = touchPNode.y + Math.sin(dgree) * STAR_OFFSET * dir;
          this.updatePoint(k, dir);
          if (dgree > 0) {
            rotation = 180 * (Math.PI / 2 - dgree) / Math.PI;
            dir < 0 && (rotation += 180);
          } else {
            rotation = 180 * (-Math.PI / 2 - dgree) / Math.PI;
            dir > 0 && (rotation += 180);
          }
        }
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.UPDATE_POINTER_ROTATION, rotation);
        return touchP.sub(shooterP);
      };
      ShooterLayer.prototype.updatePoint = function(k, direction) {
        while (this.Point.childrenCount > this.pointCount) GameFactory_1.gFactory.putPoint(this.Point.children[this.Point.childrenCount - 1]);
        while (this.Point.childrenCount < this.pointCount) this.Point.addChild(GameFactory_1.gFactory.getPoint());
        var childrenCount = this.Point.childrenCount;
        if (null === k) for (var i = 0; i < childrenCount; i++) {
          var child = this.Point.children[i];
          child.x = 0;
          child.y = i * POINT_OFFSET * direction;
          child.opacity = 255 - i / childrenCount * POINT_OPCIATY;
          child.getComponent(cc.Sprite).spriteFrame = this.PointAtlas.getSpriteFrames()[i % this.PointAtlas.getSpriteFrames().length];
        } else {
          var dgree = Math.atan(k);
          for (var i = 0; i < childrenCount; i++) {
            var child = this.Point.children[i];
            child.opacity = 255 - i / childrenCount * POINT_OPCIATY;
            child.x = i * POINT_OFFSET * Math.cos(dgree) * direction;
            var count = -1 == direction ? 1 : 2;
            while (Math.abs(child.x) > BubbleMove_1.BorderX) child.x -= (Math.abs(child.x) - BubbleMove_1.BorderX) * Math.pow(-1, count++) * 2;
            child.y = i * POINT_OFFSET * Math.sin(dgree) * direction;
            child.getComponent(cc.Sprite).spriteFrame = this.PointAtlas.getSpriteFrames()[i % this.PointAtlas.getSpriteFrames().length];
          }
        }
      };
      ShooterLayer.prototype.onTouchStart = function(e) {
        if (this.Shooter.childrenCount <= 0) {
          console.log(" shooter has no bubble");
          return;
        }
        if (!Game_1.Game.isStart) {
          console.log(" game not start ");
          return;
        }
        this.updateStarPosition(e.getLocation());
        this.ShooterStar.active = true;
        this.Point.active = true;
        this.ShooterStar.getComponent(cc.Sprite).spriteFrame = this.PointAtlas.getSpriteFrame(SignColor[this.Shooter.children[0].getComponent(Bubble_1.default).Color]);
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.IS_GREEN_IDLE, false);
      };
      ShooterLayer.prototype.onTouchMove = function(e) {
        if (this.Shooter.childrenCount <= 0) {
          console.log(" shooter has no bubble, on touchmove");
          return;
        }
        if (!Game_1.Game.isStart) {
          console.log(" isStart is false, on touchmove");
          return;
        }
        this.ShooterStar.active = true;
        this.Point.active = true;
        this.ShooterStar.getComponent(cc.Sprite).spriteFrame = this.PointAtlas.getSpriteFrame(SignColor[this.Shooter.children[0].getComponent(Bubble_1.default).Color]);
        this.updateStarPosition(e.getLocation());
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.IS_GREEN_IDLE, false);
      };
      ShooterLayer.prototype.onTouchEnd = function(e) {
        if (!Game_1.Game.isStart) {
          console.log(" on touch end ,is not start");
          return;
        }
        this.ShooterStar.active = false;
        this.Point.active = false;
        if (this.Shooter.childrenCount <= 0) {
          console.log(" shooter has no bubble, on touchend");
          return;
        }
        var dP = this.updateStarPosition(e.getLocation());
        if (this.ShooterStar.y >= SHOOTER_LIMIT_HEIGHT) {
          console.log("\u53d1\u9001\u53d1\u5c04\u4e8b\u4ef6");
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.SHOOT, dP);
        } else console.log(" \u53d1\u5c04\u89d2\u5ea6\u4e0d\u5728\u6709\u6548\u8303\u56f4");
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.IS_GREEN_IDLE, true);
      };
      __decorate([ property(cc.Node) ], ShooterLayer.prototype, "ShooterStar", void 0);
      __decorate([ property(cc.Node) ], ShooterLayer.prototype, "Shooter", void 0);
      __decorate([ property(cc.SpriteAtlas) ], ShooterLayer.prototype, "PointAtlas", void 0);
      __decorate([ property(cc.Node) ], ShooterLayer.prototype, "Point", void 0);
      ShooterLayer = __decorate([ ccclass ], ShooterLayer);
      return ShooterLayer;
    }(cc.Component);
    exports.default = ShooterLayer;
    cc._RF.pop();
  }, {
    "./Bubble": "Bubble",
    "./BubbleMove": "BubbleMove",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game",
    "./Controller/GameFactory": "GameFactory"
  } ],
  StartButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b320qWv9lJjqxUKlPWL5Sm", "StartButton");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./Controller/Game");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StartButton = function(_super) {
      __extends(StartButton, _super);
      function StartButton() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StartButton.prototype.onLoad = function() {
        var _this = this;
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.SHOW_START, function(hide) {
          _this.node.active = hide;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "button_click");
          setTimeout(function() {
            if (false == Game_1.Game.hasReadygo) {
              console.log(" has ready go false");
              setTimeout(function() {
                EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.READY_GO);
              }, 0);
              return;
            }
          }, 0);
          _this.node.removeFromParent(true);
        }, this);
      };
      StartButton.prototype.start = function() {};
      StartButton = __decorate([ ccclass ], StartButton);
      return StartButton;
    }(cc.Component);
    exports.default = StartButton;
    cc._RF.pop();
  }, {
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game"
  } ],
  StepController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09ac2ySMaBKF6e+GcvfUxR0", "StepController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
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
          console.error(" \u6b65\u9aa4\u5df2\u5b8c\u6210\uff1a", step);
          return;
        }
        this.curStep.push(step);
        this.curStep.sort(function(a, b) {
          return a > b ? -1 : 1;
        });
        this.totalStep.sort(function(a, b) {
          return a > b ? -1 : 1;
        });
        console.log(" cur step:", this.curStep.join(","));
        console.log(" total step:", this.totalStep.join(","));
        if (this.curStep.join(",") == this.totalStep.join(",")) {
          this.totalStep.length = 0;
          this.completeCallback();
          this.completeCallback = null;
        }
      };
      return StepController;
    }();
    exports.gStep = StepController.inst;
    cc._RF.pop();
  }, {} ],
  SuperHorceAni: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1aa15GeVWdLs6SMx7rN7ubY", "SuperHorceAni");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameAniBase_1 = require("./FrameAniBase");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SuperHorceAni = function(_super) {
      __extends(SuperHorceAni, _super);
      function SuperHorceAni() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SuperHorceAni.prototype.onLoad = function() {
        var _this = this;
        _super.prototype.onLoad.call(this);
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.HORCE_CLEAR, function() {
          _this.play();
          _this.node.opacity = 255;
        }, this);
      };
      SuperHorceAni.prototype.onComplete = function() {
        this.node.runAction(cc.fadeOut(.2));
      };
      SuperHorceAni.aniName = "SuperHorceAni";
      SuperHorceAni = __decorate([ ccclass ], SuperHorceAni);
      return SuperHorceAni;
    }(FrameAniBase_1.default);
    exports.default = SuperHorceAni;
    cc._RF.pop();
  }, {
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./FrameAniBase": "FrameAniBase"
  } ],
  Treasure: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "839c8WNoRJFOZY4LdvRkdlU", "Treasure");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("./Controller/Game");
    var Const_1 = require("./Const");
    var EventManager_1 = require("./Controller/EventManager");
    var EventName_1 = require("./Controller/EventName");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Treasure = function(_super) {
      __extends(Treasure, _super);
      function Treasure() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isCollider = true;
        return _this;
      }
      Object.defineProperty(Treasure.prototype, "Self", {
        get: function() {
          return this.node.getChildByName("self");
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Treasure.prototype, "Alpha", {
        get: function() {
          return this.node.getChildByName("alpha");
        },
        enumerable: true,
        configurable: true
      });
      Treasure.prototype.onLoad = function() {
        var _this = this;
        this.node.group = "default";
        this.node.opacity = 255;
        this.Alpha.opacity = 255;
        EventManager_1.gEventMgr.on(EventName_1.GlobalEvent.CHECK_TREASURE, function() {
          if (!Game_1.Game.isStart) return;
          _this.checkCollider();
        }, this);
      };
      Treasure.prototype.update = function() {};
      Treasure.prototype.checkCollider = function() {
        this.isCollider = false;
        var matrix = Game_1.Game.getMatrix();
        for (var i = Game_1.Game.startIndex; i < matrix.data.length; i++) {
          if (!matrix.data[i] || !matrix.data[i].bubble || !matrix.data[i].bubble.node.active) continue;
          var bubble = matrix.data[i].bubble;
          if (cc.Intersection.polygonCircle(this.getComponent(cc.PolygonCollider).points, {
            position: CMath.ConvertToNodeSpaceAR(bubble.node, this.node.getParent()),
            radius: bubble.getComponent(cc.CircleCollider).radius
          })) {
            this.isCollider = true;
            break;
          }
        }
        if (!this.isCollider) {
          EventManager_1.gEventMgr.targetOff(this);
          Game_1.Game.treasureCount++;
          console.log(" treasureCount:", Game_1.Game.treasureCount);
          Game_1.Game.treasureCount >= 5 && EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GET_CHANGE_BUTTON);
          this.getTreasure(Game_1.Game.treasureCount);
        }
      };
      Treasure.prototype.getTreasure = function(count) {
        var _this = this;
        var speed = 1500;
        var targetPos = CMath.ConvertToNodeSpaceAR(Game_1.Game.TopNode.getChildByName("TreasureRoot").getChildByName(Game_1.Game.treasureCount.toString()), this.node.getParent());
        var time = CMath.Distance(targetPos, this.node.position) / speed;
        this.enabled = false;
        this.node.group = "treasure";
        EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.PLAY_EFFECT, "get_treasure");
        this.Alpha.runAction(cc.sequence(cc.delayTime(.3), cc.spawn(cc.scaleTo(.2, 5), cc.fadeOut(.2))));
        this.Self.runAction(cc.sequence(cc.delayTime(.1), cc.scaleTo(.1, 2), cc.delayTime(.3), cc.callFunc(function() {
          Game_1.Game.addScore(Const_1.BubbleType["Treasure_" + count], Const_1.BubbleType["Treasure_" + count], Const_1.BubbleType["Treasure_" + count] / 200 * .1 + 1, CMath.ConvertToNodeSpaceAR(_this.Self, Game_1.Game.TopNode));
        }), cc.scaleTo(.1, 1), cc.moveTo(time, targetPos), cc.fadeTo(.1, 0), cc.callFunc(function() {
          EventManager_1.gEventMgr.emit(EventName_1.GlobalEvent.GET_TREASURE, count);
          _this.node.removeFromParent();
        })));
      };
      Treasure = __decorate([ ccclass ], Treasure);
      return Treasure;
    }(cc.Component);
    exports.default = Treasure;
    cc._RF.pop();
  }, {
    "./Const": "Const",
    "./Controller/EventManager": "EventManager",
    "./Controller/EventName": "EventName",
    "./Controller/Game": "Game"
  } ],
  celerx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86cd8TXnY5AKqy5mkWiIwvz", "celerx");
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
}, {}, [ "Bubble", "BubbleBurst", "BubbleChange", "BubbleDrop", "BubbleHorce", "BubbleIdle", "BubbleMove", "Const", "AudioController", "EventManager", "EventName", "Game", "GameFactory", "StepController", "BubbleMatrix", "FrameAniBase", "GameScene", "Guide", "LoadingImg", "PauseLayer", "Pointer", "ReadyGoAnimation", "ResultAnimation", "ResultLayer", "BlueIdle", "BlueLoad", "GreenIdle", "HandUpLeft", "HandUpRight", "ShooterLayer", "StartButton", "SuperHorceAni", "Treasure", "HashMap", "LogHandler", "celerx" ]);