window.__require = (function e(t, o, i) {
  function n(a, l) {
    if (!o[a]) {
      if (!t[a]) {
        var s = a.split("/");
        if (((s = s[s.length - 1]), !t[s])) {
          var c = "function" == typeof __require && __require;
          if (!l && c) return c(s, !0);
          if (r) return r(s, !0);
          throw new Error("Cannot find module '" + a + "'");
        }
      }
      var u = (o[a] = { exports: {} });
      t[a][0].call(
        u.exports,
        function (e) {
          return n(t[a][1][e] || e);
        },
        u,
        u.exports,
        e,
        t,
        o,
        i
      );
    }
    return o[a].exports;
  }
  for (
    var r = "function" == typeof __require && __require, a = 0;
    a < i.length;
    a++
  )
    n(i[a]);
  return n;
})(
  {
    AudioController: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9e9e7nIyP5BGquwjN7hFiaR", "AudioController"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Utils/HashMap"),
          n = e("./EventManager"),
          r = e("./EventName");
        window.oncanplay &&
          (window.oncanplay = function () {
            l.canPlay = !0;
          });
        var a = "sounds/",
          l = (function () {
            function e() {
              (this.audioID = {}), (this.clips = new i.HashMap());
            }
            return (
              Object.defineProperty(e, "inst", {
                get: function () {
                  return this.ins ? this.ins : (this.ins = new e());
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.init = function (e) {
                var t = this;
                console.warn(" start load AudioClip ");
                var o = this;
                cc.loader.loadRes(a + "bgm", cc.AudioClip, function (t, i) {
                  t
                    ? console.error(t)
                    : ("string" == typeof i._audio &&
                        cc.loader._cache &&
                        cc.loader._cache[i._audio] &&
                        cc.loader._cache[i._audio].buffer &&
                        (i._audio = cc.loader._cache[i._audio].buffer),
                      o.clips.add(i.name, i),
                      o.initEvent(),
                      e && e());
                }),
                  cc.loader.loadRes(a + "mouse_bgm", function (e, t) {
                    e ? console.error(e) : o.clips.add(t.name, t);
                  }),
                  cc.loader.loadRes(a + "bgm_30", function (e, t) {
                    e ? console.error(e) : o.clips.add(t.name, t);
                  }),
                  cc.loader.loadResDir(a, function (e, o, i) {
                    if (e) console.error(e);
                    else
                      for (var n = 0, r = o; n < r.length; n++) {
                        var a = r[n];
                        "string" == typeof a._audio &&
                          cc.loader._cache &&
                          cc.loader._cache[a._audio] &&
                          cc.loader._cache[a._audio].buffer &&
                          (a._audio = cc.loader._cache[a._audio].buffer),
                          t.clips.has(a.name) || t.clips.add(a.name, a);
                      }
                  });
              }),
              (e.prototype.initEvent = function () {
                var e = this;
                n.gEventMgr.targetOff(this),
                  this.playMusic("bgm"),
                  n.gEventMgr.on(
                    r.GlobalEvent.CHANGE_BGM,
                    function (t) {
                      e.playMusic(t);
                    },
                    this
                  ),
                  n.gEventMgr.on(
                    r.GlobalEvent.PLAY_EFFECT,
                    function (t, o, i) {
                      e.playEffect(t, o, i);
                    },
                    this
                  );
              }),
              (e.prototype.playEffect = function (t, o, i) {
                var n = this;
                if ((void 0 === o && (o = !1), e.canPlay)) {
                  if (!(cc.audioEngine.getEffectsVolume() <= 0.05)) {
                    var r = this.clips.get(t);
                    r
                      ? ((this.audioID[t] = cc.audioEngine.playEffect(r, o)),
                        cc.audioEngine.setFinishCallback(
                          this.audioID[t],
                          function () {
                            i && i();
                          }
                        ))
                      : cc.loader.loadRes(a + t, cc.AudioClip, function (e, r) {
                          e
                            ? console.error(e)
                            : ("string" == typeof r._audio &&
                                cc.loader._cache &&
                                cc.loader._cache[r._audio] &&
                                cc.loader._cache[r._audio].buffer &&
                                (console.log(
                                  typeof cc.loader._cache[r._audio].buffer
                                ),
                                (r._audio = cc.loader._cache[r._audio].buffer)),
                              n.clips.add(r.name, r),
                              (n.audioID[t] = cc.audioEngine.playEffect(r, o)),
                              cc.audioEngine.setFinishCallback(
                                n.audioID[t],
                                function () {
                                  i && i();
                                }
                              ));
                        });
                  }
                } else this.bindTouch();
              }),
              (e.prototype.playMusic = function (t, o) {
                var i = this;
                if ((void 0 === o && (o = !0), !e.canPlay))
                  return (
                    this.bindTouch(),
                    void e.PlayedList.push({
                      loop: !0,
                      volume: 1,
                      clipName: t,
                      supTime: Date.now(),
                      skip: !1,
                      isBgm: !0,
                    })
                  );
                var n = this.clips.get(t);
                n
                  ? cc.audioEngine.playMusic(n, o)
                  : cc.loader.loadRes(a + t, cc.AudioClip, function (e, t) {
                      e
                        ? console.error(e)
                        : ("string" == typeof t._audio &&
                            cc.loader._cache &&
                            cc.loader._cache[t._audio] &&
                            cc.loader._cache[t._audio].buffer &&
                            (t._audio = cc.loader._cache[t._audio].buffer),
                          i.clips.add(t.name, t),
                          cc.audioEngine.playMusic(t, o));
                    });
              }),
              (e.prototype.bindTouch = function () {
                if (!e.hasBindTouch) {
                  var t = this,
                    o = function () {
                      var i;
                      for (
                        cc.game.canvas.removeEventListener("touchstart", o),
                          e.canPlay = !0;
                        (i = e.PlayedList.pop()) &&
                        t.clips.get(i.clipName) &&
                        !i.skip;

                      )
                        cc.audioEngine.playMusic(
                          t.clips.get(i.clipName),
                          i.loop
                        );
                    };
                  (e.hasBindTouch = !0),
                    cc.game.canvas.addEventListener("touchstart", o);
                }
              }),
              (e.PlayedList = []),
              (e.canPlay = !1),
              (e.hasBindTouch = !1),
              e
            );
          })();
        (o.gAudio = l.inst), cc._RF.pop();
      },
      {
        "../Utils/HashMap": "HashMap",
        "./EventManager": "EventManager",
        "./EventName": "EventName",
      },
    ],
    BingoFont: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9b2689flLVCXKcfA4lZOSJg", "BingoFont"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/EventManager"),
          n = e("./Controller/EventName"),
          r = cc._decorator,
          a = r.ccclass,
          l =
            (r.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {
                  (this.node.scaleX = 0),
                    i.gEventMgr.targetOff(this),
                    i.gEventMgr.on(n.GlobalEvent.BINGO, this.onBingo, this);
                }),
                (t.prototype.start = function () {}),
                (t.prototype.onBingo = function () {
                  this.node.getNumberOfRunningActions() > 0 ||
                    this.node.runAction(
                      cc.sequence(
                        cc.scaleTo(0.1, 1, 1),
                        cc.scaleTo(0.05, 1.2, 1.2),
                        cc.scaleTo(0.1, 1, 1),
                        cc.delayTime(1),
                        cc.scaleTo(0.1, 0, 1)
                      )
                    );
                }),
                (t.prototype.update = function (e) {}),
                (t = __decorate([a], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      {
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
      },
    ],
    BingoReminder: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b60d4YMyYhJJZcy3WJokZ9O", "BingoReminder"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Utils/GameSignal"),
          n = e("./Reminder"),
          r = cc._decorator,
          a = r.ccclass,
          l =
            (r.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.isFull = !1), t;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {
                  var e = this;
                  i.BingoSignal.inst.addListenerOne(function (t) {
                    var o = e.getComponent(n.default);
                    e.isFull != t &&
                      o &&
                      ((e.isFull = t),
                      (o.isStop = !t),
                      e.isFull ? o.play() : o.stop());
                  }, this);
                }),
                (t.prototype.start = function () {}),
                (t.prototype.onDestroy = function () {
                  i.BingoSignal.inst.removeTarget(this);
                }),
                (t = __decorate([a], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      { "../Utils/GameSignal": "GameSignal", "./Reminder": "Reminder" },
    ],
    CardLabels: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "18d6dS+vd1Px5pALo6loK3z", "CardLabels"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Utils/GameSignal"),
          n = cc._decorator,
          r = n.ccclass,
          a =
            (n.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {
                  var e = this;
                  i.UpdateCardNumberSignal.inst.addListenerFour(
                    this.onNumberUpdate,
                    this
                  ),
                    i.UpdateCardNumberOpciatySignal.inst.addListenerTwo(
                      this.onOpciatyUpdate,
                      this
                    ),
                    i.ResultLayerShow.inst.addListener(function () {
                      e.node.active = !1;
                    }, this);
                }),
                (t.prototype.start = function () {}),
                (t.prototype.onOpciatyUpdate = function (e, t) {
                  var o = this.node.getChildByName(e);
                  if (o) {
                    if (o.opacity == t) return;
                    !CELER_X && console.log("update number opciaty :", e, t),
                      (o.active = t > 0),
                      (o.opacity = t);
                  }
                }),
                (t.prototype.onNumberUpdate = function (e, t, o, i) {
                  var n = this;
                  setTimeout(function () {
                    var t = n.node.getChildByName(i);
                    t &&
                      (!CELER_X && console.log("update number :", i, e),
                      (t.scale = 0.9),
                      (t.getComponent(cc.Label).string = "/" + e.toString()),
                      t.setPosition(CMath.ConvertToNodeSpaceAR(o, n.node)));
                  }, 0);
                }),
                (t = __decorate([r], t))
              );
            })(cc.Component));
        (o.default = a), cc._RF.pop();
      },
      { "../Utils/GameSignal": "GameSignal" },
    ],
    Card: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "abb83Mso7xFbKdwnWlntVp4", "Card"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/EventManager"),
          n = e("./Const"),
          r = e("./Controller/Game"),
          a = e("./Point"),
          l = e("./Controller/EventName"),
          s = e("./FrameAniBase"),
          c = e("./Utils/GameSignal"),
          u = cc._decorator,
          h = u.ccclass,
          p =
            (u.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.bingoTimes = 0),
                  (t.pause = !1),
                  (t.nextTurnTime = 0),
                  (t.mouseHideTime = 0),
                  t
                );
              }
              return (
                __extends(t, e),
                Object.defineProperty(t.prototype, "Wrong", {
                  get: function () {
                    return this.node.getChildByName("Wrong");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Word", {
                  get: function () {
                    return this.word;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Index", {
                  get: function () {
                    return this.index;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "BingoTimesLabel", {
                  get: function () {
                    return this.node
                      .getChildByName("BingoTimes")
                      .getComponent(cc.Label);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Pos", {
                  get: function () {
                    return n.CardWord[this.word] + "." + this.index;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "StringValue", {
                  get: function () {
                    return this.word + "." + this.value;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Star", {
                  get: function () {
                    return this.node.getChildByName("Star");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "NumberLabel", {
                  get: function () {
                    return this.node
                      .getChildByName("Number")
                      .getComponent(cc.Label);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Bingo", {
                  get: function () {
                    return this.node
                      .getChildByName("Bingo")
                      .getChildByName(n.Theme[r.Game.Theme]);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Mouse", {
                  get: function () {
                    return this.node.getChildByName("Mouse");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Magic", {
                  get: function () {
                    return this.node.getChildByName("Magic");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "MagicAni", {
                  get: function () {
                    return this.Magic.getComponent(s.default);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onLoad = function () {
                  var e = this;
                  c.SwitchCardSignal.inst.addListener(function () {
                    e.value &&
                      e.word &&
                      r.Game.cardIndex == e.pageIndex &&
                      (c.UpdateCardNumberSignal.inst.dispatchFour(
                        e.value,
                        e.NumberLabel.node,
                        e.NumberLabel.node.parent,
                        e.Pos
                      ),
                      e.updateNumberOpciaty());
                  }, this);
                }),
                (t.prototype.updateNumberOpciaty = function () {
                  if (this.pageIndex == r.Game.cardIndex) {
                    var e = 255;
                    this.isBingo() ||
                    n.StarCard.indexOf(this.Pos) >= 0 ||
                    this.Mouse.active
                      ? (e = 0)
                      : (this.Star.active || this.Magic.active) && (e = 100),
                      c.UpdateCardNumberOpciatySignal.inst.dispatchTwo(
                        this.Pos,
                        e
                      );
                  }
                }),
                (t.prototype.setPageIndex = function (e) {
                  this.pageIndex = e;
                }),
                (t.prototype.reuse = function () {
                  this.setPageIndex(arguments[0][3]),
                    this.setIndex(arguments[0][1]),
                    this.setWord(arguments[0][0]),
                    (this.bingoTimes = 0),
                    (this.Wrong.active = !1),
                    (this.Mouse.active = !1),
                    (this.Magic.active = !1);
                  for (var e = 0, t = this.Bingo.children; e < t.length; e++) {
                    (a = t[e]).active = !1;
                  }
                  for (
                    var o = 0, i = this.Bingo.getParent().children;
                    o < i.length;
                    o++
                  ) {
                    var a;
                    (a = i[o]).active = a.name == n.Theme[r.Game.Theme];
                  }
                  (this.Star.active = !1),
                    (this.Bingo.getChildByName(
                      this.bingoTimes.toString()
                    ).active = n.StarCard.indexOf(this.Pos) >= 0),
                    this.setValue(arguments[0][2]),
                    r.Game.addCurrentCardValueByWord(
                      this.pageIndex,
                      this.value,
                      this.word
                    ),
                    n.StarCard.indexOf(this.Pos) >= 0 &&
                      (r.Game.delCurrentCardValue(this.pageIndex, this.value),
                      r.Game.deleteCurrentCardValueByWord(
                        this.pageIndex,
                        this.value,
                        this.word
                      ),
                      r.Game.addHighLightCard(this.pageIndex),
                      r.Game.addHighLightCardByWord(this.pageIndex, this.word)),
                    this.initEvent();
                }),
                (t.prototype.unuse = function () {
                  i.gEventMgr.targetOff(this), this.node.targetOff(this);
                }),
                (t.prototype.initEvent = function () {
                  var e = this;
                  this.node.on(
                    cc.Node.EventType.TOUCH_START,
                    this.onCardTouch,
                    this
                  ),
                    i.gEventMgr.on(
                      l.GlobalEvent.CHANGE_GAME_MODE,
                      this.onGameModeChange,
                      this
                    ),
                    i.gEventMgr.on(
                      l.GlobalEvent.ON_HIDE,
                      function () {
                        n.StarCard.indexOf(e.Pos) >= 0 &&
                          console.log(" card pause ... "),
                          (e.pause = !0);
                      },
                      this
                    ),
                    i.gEventMgr.on(
                      l.GlobalEvent.SKILL_RESUME,
                      function () {
                        n.StarCard.indexOf(e.Pos) >= 0 &&
                          console.log(" card skill resume ... "),
                          (e.pause = !1);
                      },
                      this
                    );
                }),
                (t.prototype.update = function (e) {
                  r.Game.getCurMode() == n.SkillType.Super &&
                    this.nextTurnTime > 0 &&
                    this.mouseHideTime > 0 &&
                    r.Game.superHighLightCount <
                      r.Game.LevelInfo.SuperTime.HighLightLimit &&
                    !this.pause &&
                    (this.isLight() ||
                      (Date.now() >= this.nextTurnTime &&
                        ((this.Mouse.active = !0), this.updateNumberOpciaty()),
                      Date.now() >= this.mouseHideTime &&
                        ((this.Mouse.active = !1),
                        this.updateNumberOpciaty(),
                        (this.nextTurnTime =
                          Date.now() +
                          1e3 *
                            CMath.getRandom(
                              r.Game.LevelInfo.SuperTime.RandomMin,
                              r.Game.LevelInfo.SuperTime.RandomMax
                            )),
                        (this.mouseHideTime =
                          this.nextTurnTime +
                          1e3 *
                            CMath.getRandom(
                              r.Game.LevelInfo.SuperTime.ShowTimeMin,
                              r.Game.LevelInfo.SuperTime.ShowTimeMax
                            )))));
                }),
                (t.prototype.onGameModeChange = function () {
                  r.Game.getCurMode() != n.SkillType.Super
                    ? ((this.Mouse.active = !1),
                      this.updateNumberOpciaty(),
                      (this.nextTurnTime = 0))
                    : ((this.nextTurnTime =
                        Date.now() +
                        1e3 *
                          CMath.getRandom(
                            r.Game.LevelInfo.SuperTime.RandomMin,
                            r.Game.LevelInfo.SuperTime.RandomMax
                          )),
                      (this.mouseHideTime =
                        this.nextTurnTime +
                        1e3 *
                          CMath.getRandom(
                            r.Game.LevelInfo.SuperTime.ShowTimeMin,
                            r.Game.LevelInfo.SuperTime.ShowTimeMax
                          )));
                }),
                (t.prototype.isLight = function () {
                  for (var e = 0, t = this.Bingo.children; e < t.length; e++) {
                    if (t[e].active) return !0;
                  }
                  return this.Star.active;
                }),
                (t.prototype.isMouse = function () {
                  return this.Mouse.active;
                }),
                (t.prototype.onCardTouch = function (e) {
                  var t = this;
                  if (this.isLight())
                    console.log(" card has already high light:", this.value);
                  else if (r.Game.isOver)
                    console.log(" game is over :", this.value);
                  else if (
                    r.Game.getCurMode() == n.SkillType.Super &&
                    r.Game.superHighLightCount >=
                      r.Game.LevelInfo.SuperTime.HighLightLimit
                  )
                    console.log(
                      " in Super mode , highLight has 5 counts limit:",
                      this.value
                    );
                  else {
                    var o = 0,
                      s = n.ScoreType.Oops;
                    if (r.Game.getCurMode() == n.SkillType.Normal) {
                      if (
                        (p = r.Game.CurrentReward.children[0]) &&
                        p.getComponent(a.default)
                      )
                        if (
                          (d = p.getComponent(a.default)).TimeLeftPercent > 0 &&
                          d.StringValue == this.StringValue
                        ) {
                          var c = 1 - d.TimeLeftPercent;
                          c <= n.TimeScorePercent.Perfect
                            ? ((o = n.Score.Normal + n.Score.Perfect),
                              (s = n.ScoreType.Perfect))
                            : c <= n.TimeScorePercent.Great
                            ? ((o =
                                n.Score.Normal +
                                n.Score.Nice +
                                (n.Score.Great *
                                  (n.TimeScorePercent.Great - c)) /
                                  (n.TimeScorePercent.Great -
                                    n.TimeScorePercent.Perfect)),
                              (s = n.ScoreType.Great))
                            : ((o =
                                n.Score.Normal +
                                (n.Score.Nice * (1 - c)) /
                                  n.TimeScorePercent.Great),
                              (s = n.ScoreType.Nice));
                        } else
                          d.addTime(-d.TotalTime / 5),
                            (o = n.Score.Oops),
                            (s = n.ScoreType.Oops);
                      if (o <= 0)
                        for (
                          var u = 0, h = r.Game.RewardArray.children;
                          u < h.length;
                          u++
                        ) {
                          (d = h[u].getComponent(a.default)) &&
                            d.StringValue == this.StringValue &&
                            ((o = n.Score.Normal), (s = n.ScoreType.Normal));
                        }
                      o = Math.ceil(o);
                    } else if (r.Game.getCurMode() == n.SkillType.Star)
                      (o = n.Score.Normal + n.Score.Star),
                        (s = n.ScoreType.Star);
                    else if (r.Game.getCurMode() == n.SkillType.Gold)
                      this.value == r.Game.goldSelectValue &&
                        ((o = n.Score.Normal + n.Score.Gold),
                        (s = n.ScoreType.Gold));
                    else if (r.Game.getCurMode() == n.SkillType.Super)
                      this.isMouse()
                        ? ((o = n.Score.Normal + n.Score.Mouse),
                          (s = n.ScoreType.Mouse),
                          r.Game.superHighLightCount++,
                          i.gEventMgr.emit(l.GlobalEvent.UPDATE_MOUSE_LIGHT))
                        : (r.Game.superWrongCount++,
                          r.Game.superWrongCount >
                            r.Game.LevelInfo.SuperTime.WrongLimit &&
                            ((o = r.Game.LevelInfo.SuperTime.SubScore),
                            (s = n.ScoreType.Oops)));
                    else if (r.Game.getCurMode() == n.SkillType.Magic) {
                      var p;
                      if (
                        (p = r.Game.CurrentReward.children[0]) &&
                        p.getComponent(a.default)
                      ) {
                        if (0 == r.Game.hasDaubMagicBall) {
                          var d;
                          (d = p.getComponent(a.default)).Word != this.Word ||
                            (d.Value == this.value
                              ? i.gEventMgr.emit(
                                  l.GlobalEvent.MAGIC_TIP,
                                  this.node,
                                  !1
                                )
                              : ((this.Magic.active = !0),
                                this.updateNumberOpciaty(),
                                (this.Magic.opacity = 0),
                                this.Magic.runAction(cc.fadeIn(0.1)),
                                this.MagicAni.play(),
                                (this.MagicAni.onComplete = function () {
                                  t.Magic.runAction(
                                    cc.sequence(
                                      cc.fadeOut(0.1),
                                      cc.callFunc(function () {
                                        (t.Magic.active = !1),
                                          t.updateNumberOpciaty();
                                      })
                                    )
                                  );
                                }),
                                r.Game.replaceCurrentCardValue(
                                  this.pageIndex,
                                  this.value,
                                  d.Value
                                ),
                                r.Game.replaceCurrentCardValueByWord(
                                  this.pageIndex,
                                  this.value,
                                  d.Value,
                                  d.Word
                                ),
                                this.setValue(d.Value),
                                (r.Game.hasDaubMagicBall = !0),
                                i.gEventMgr.emit(l.GlobalEvent.MAGIC_DAUB),
                                i.gEventMgr.emit(
                                  l.GlobalEvent.MAGIC_TIP,
                                  this.node,
                                  !0
                                )));
                        }
                      } else
                        console.log(" not CurrentRewardmagicSkill  click!");
                    }
                    switch (r.Game.getCurMode()) {
                      case n.SkillType.Star:
                        i.gEventMgr.emit(l.GlobalEvent.SKILL_DONE);
                        break;
                      case n.SkillType.Gold:
                        if (r.Game.getCardNumber() > 1) {
                          var g =
                              (r.Game.cardIndex + 1) % r.Game.getCardNumber(),
                            m = r.Game.getCurrentPageValues(g);
                          (r.Game.checkIsFull(g) ||
                            m.indexOf(r.Game.goldSelectValue) < 0) &&
                            i.gEventMgr.emit(l.GlobalEvent.SKILL_DONE);
                        } else i.gEventMgr.emit(l.GlobalEvent.SKILL_DONE);
                        break;
                      case n.SkillType.Super:
                        (r.Game.checkIsFull(r.Game.cardIndex) ||
                          r.Game.superHighLightCount >=
                            r.Game.LevelInfo.SuperTime.HighLightLimit) &&
                          i.gEventMgr.emit(l.GlobalEvent.SUPER_END_COMPLETE);
                        break;
                      case n.SkillType.Magic:
                        return;
                    }
                    o > 0
                      ? (this.turnStar(),
                        r.Game.addScore(s, o, 1),
                        i.gEventMgr.emit(
                          l.GlobalEvent.CHECK_BINGO,
                          this,
                          n.RectCard.indexOf(this.Pos) >= 0
                        ))
                      : (r.Game.addScore(s, o, 1), this.showWrong());
                  }
                }),
                (t.prototype.showWrong = function () {
                  var e = this;
                  this.Wrong.active ||
                    this.Wrong.getNumberOfRunningActions() > 0 ||
                    ((this.Wrong.opacity = 0),
                    (this.Wrong.active = !0),
                    this.Wrong.runAction(
                      cc.sequence(
                        cc.fadeIn(0.1),
                        cc.delayTime(0.05),
                        cc.fadeOut(0.05),
                        cc.callFunc(function () {
                          e.Wrong.active = !1;
                        })
                      )
                    ));
                }),
                (t.prototype.turnStar = function () {
                  (this.Star.active = !0),
                    (this.Star.group = "default"),
                    this.Mouse.stopAllActions(),
                    (this.Mouse.active = !1),
                    this.updateNumberOpciaty(),
                    r.Game.addHighLightCard(this.pageIndex),
                    r.Game.addHighLightCardByWord(this.pageIndex, this.word),
                    r.Game.delCurrentCardValue(this.pageIndex, this.value),
                    r.Game.deleteCurrentCardValueByWord(
                      this.pageIndex,
                      this.value,
                      this.word
                    );
                }),
                (t.prototype.setValue = function (e) {
                  console.log(" card set val:", e),
                    (this.value = e),
                    (this.NumberLabel.string = this.value.toString()),
                    (this.NumberLabel.node.active = !1),
                    this.updateLabelInfo();
                }),
                (t.prototype.updateLabelInfo = function () {
                  this.value &&
                    this.word &&
                    r.Game.cardIndex == this.pageIndex &&
                    (c.UpdateCardNumberSignal.inst.dispatchFour(
                      this.value,
                      this.NumberLabel.node,
                      this.NumberLabel.node.parent,
                      this.Pos
                    ),
                    this.updateNumberOpciaty());
                }),
                (t.prototype.setIndex = function (e) {
                  this.index = e;
                }),
                (t.prototype.setWord = function (e) {
                  this.word = e;
                }),
                (t.prototype.isBingo = function () {
                  return this.bingoTimes >= 1;
                }),
                (t.prototype.bingo = function () {
                  if (!this.isLight())
                    return (
                      console.log(" this card can not bingo:", this.Pos), 0
                    );
                  this.bingoTimes++;
                  for (var e = 0, t = this.Bingo.children; e < t.length; e++) {
                    var o = t[e];
                    o.active = parseInt(o.name) <= this.bingoTimes;
                  }
                  (this.NumberLabel.node.active = !1),
                    this.updateNumberOpciaty();
                  var i = 0;
                  this.bingoTimes >= 2 &&
                    (r.Game.addOverBingoTimes(this.pageIndex),
                    (i = r.Game.getTotalBingoTimes() * n.Score.BingoStep));
                  return i;
                }),
                (t.prototype.start = function () {}),
                (t = __decorate([h], t))
              );
            })(cc.Component));
        (o.default = p), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
        "./FrameAniBase": "FrameAniBase",
        "./Point": "Point",
        "./Utils/GameSignal": "GameSignal",
      },
    ],
    CelerSDK: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ed9c4kHhRZCyKBWDxdeArVs", "CelerSDK"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Game"),
          n = e("./LogHandler"),
          r = e("./EventManager"),
          a = e("./EventName"),
          l = (function () {
            function e() {
              (this.alreadySubmit = !1),
                (this.isNewPlayer = !0),
                (this.isBackgroundRunning = !1),
                (this.celerStartCallback = null),
                (this.isInCeler = CELER_X);
            }
            return (
              Object.defineProperty(e, "inst", {
                get: function () {
                  return this.ins ? this.ins : (this.ins = new e());
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "MatchID", {
                get: function () {
                  return this.match.matchId;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "MatchRandomSeed", {
                get: function () {
                  return this.match.sharedRandomSeed;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.init = function (e) {
                (this.alreadySubmit = !1),
                  CELER_X && celerSDK.onStart(this.onCelerStart.bind(this)),
                  CELER_X &&
                    celerSDK.provideScore(function () {
                      return parseInt(i.Game.getScore().toString());
                    }),
                  (this.celerStartCallback = e),
                  CELER_X && n.LogHandler.inst.initLog(celerSDK.log),
                  n.LogHandler.inst.log(" game scene on load");
              }),
              (e.prototype.celerXReady = function () {
                n.LogHandler.inst.log(" invoke celerx.ready() "),
                  CELER_X && celerSDK.ready(),
                  !CELER_X && this.onCelerStart();
              }),
              (e.prototype.isNew = function () {
                return this.isNewPlayer;
              }),
              (e.prototype.isOnCelerPlatform = function () {
                return this.isInCeler;
              }),
              (e.prototype.onCelerStart = function () {
                var e = this;
                (this.match = (CELER_X && celerSDK.getMatch()) || {
                  matchId: "error id",
                  sharedRandomSeed: null,
                  difficultyLevel: null,
                  shouldLaunchTutorial: !0,
                }),
                  n.LogHandler.inst.log(
                    " celerx onStart call",
                    "match id:",
                    this.match.matchId,
                    ", seed:",
                    this.match.sharedRandomSeed,
                    ", difficulty level:",
                    this.match.difficultyLevel
                  ),
                  (!this.match.difficultyLevel ||
                    this.match.difficultyLevel > 3 ||
                    this.match.difficultyLevel < 1) &&
                    (CELER_X
                      ? (console.error(
                          " difficulth level error, should be in range (1 ~ 3):",
                          this.match.difficultyLevel
                        ),
                        (this.match.difficultyLevel = 1))
                      : (this.match.difficultyLevel = 1)),
                  i.Game.setLevel(this.match.difficultyLevel),
                  this.match && this.match.sharedRandomSeed
                    ? ((CMath.randomSeed = this.match.sharedRandomSeed),
                      (CMath.sharedSeed = this.match.sharedRandomSeed),
                      (this.isInCeler = !0))
                    : ((this.isInCeler = !1),
                      (CMath.sharedSeed = CMath.randomSeed = 0.8665240636212592),
                      console.log(" debug random seed:", CMath.randomSeed)),
                  (this.match && this.match.shouldLaunchTutorial) || !CELER_X
                    ? (this.isNewPlayer = !0)
                    : (this.isNewPlayer = !1),
                  this.celerStartCallback &&
                    (this.celerStartCallback(),
                    (this.celerStartCallback = null)),
                  CELER_X
                    ? (celerSDK.onPause(function () {
                        i.Game.isOver ||
                          ((e.isBackgroundRunning = !0),
                          console.log(" game on background"),
                          r.gEventMgr.emit(a.GlobalEvent.ON_HIDE));
                      }),
                      celerSDK.onResume(function () {
                        i.Game.isOver ||
                          (console.log(" game on forground"),
                          (e.isBackgroundRunning = !1),
                          r.gEventMgr.emit(a.GlobalEvent.ON_SHOW));
                      }))
                    : (cc.game.on(
                        cc.game.EVENT_HIDE,
                        function () {
                          i.Game.isOver ||
                            ((e.isBackgroundRunning = !0),
                            console.log(
                              "cc.game.EVENT_HIDE game on background"
                            ),
                            r.gEventMgr.emit(a.GlobalEvent.ON_HIDE));
                        },
                        this
                      ),
                      cc.game.on(
                        cc.game.EVENT_SHOW,
                        function () {
                          i.Game.isOver ||
                            (console.log(
                              "cc.game.EVENT_SHOW game on forground"
                            ),
                            (e.isBackgroundRunning = !1),
                            r.gEventMgr.emit(a.GlobalEvent.ON_SHOW));
                        },
                        this
                      ));
              }),
              (e.prototype.submitScore = function (e) {
                this.alreadySubmit ||
                  ((this.alreadySubmit = !0),
                  n.LogHandler.inst.log(
                    " submit score:",
                    e,
                    ", match id:",
                    this.match.matchId
                  ),
                  CELER_X && celerSDK.submitScore(e));
              }),
              e
            );
          })();
        (o.CelerSDK = l), cc._RF.pop();
      },
      {
        "./EventManager": "EventManager",
        "./EventName": "EventName",
        "./Game": "Game",
        "./LogHandler": "LogHandler",
      },
    ],
    Const: [
      function (e, t, o) {
        "use strict";
        var i, n;
        cc._RF.push(t, "6380cLWFRRCbqDZ1T+XmugM", "Const"),
          Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.SkillTimeBouns = 10),
          (function (e) {
            (e[(e.Time = 0)] = "Time"),
              (e[(e.Star = 1)] = "Star"),
              (e[(e.Gold = 2)] = "Gold"),
              (e[(e.Super = 3)] = "Super"),
              (e[(e.Normal = 4)] = "Normal"),
              (e[(e.Magic = 5)] = "Magic"),
              (e[(e.Skip = 6)] = "Skip");
          })((i = o.SkillType || (o.SkillType = {}))),
          (o.GameLevel = {
            1: {
              GameTime: 120,
              CardNumber: 1,
              MaxSkillEquipCount: 3,
              TimeLimit: 91,
              Skills: {
                first3Round: [i.Gold, i.Star],
                all: [i.Gold, i.Star, i.Skip],
              },
              RewardTime: { One: 4, Two: 3.2 },
              TotalSkillCount: 5,
              SuperTime: {
                LastTime: 8,
                RandomMin: 1.5,
                RandomMax: 7.5,
                ShowTimeMin: 0.3,
                ShowTimeMax: 0.7,
                WrongLimit: 5,
                HighLightLimit: 5,
                SubScore: -25,
              },
              GoldSkillTimeLimit: { Select: 7, Click: 4 },
            },
            2: {
              GameTime: 90,
              CardNumber: 1,
              MaxSkillEquipCount: 3,
              TimeLimit: 61,
              Skills: {
                first3Round: [i.Gold, i.Star],
                all: [i.Gold, i.Star, i.Time],
              },
              RewardTime: { One: 3, Two: 3.2 * 0.75 },
              TotalSkillCount: 5,
              SuperTime: {
                LastTime: 8,
                RandomMin: 1.5,
                RandomMax: 7.5,
                ShowTimeMin: 0.3,
                ShowTimeMax: 0.7,
                WrongLimit: 5,
                HighLightLimit: 5,
                SubScore: -25,
              },
              GoldSkillTimeLimit: { Select: 7, Click: 4 },
            },
            3: {
              GameTime: 120,
              CardNumber: 2,
              MaxSkillEquipCount: 3,
              TimeLimit: 91,
              Skills: {
                first3Round: [i.Gold, i.Magic, i.Star],
                all: [i.Gold, i.Magic, i.Star, i.Time, i.Skip],
              },
              RewardTime: { One: 4, Two: 3.2 },
              TotalSkillCount: 5,
              SuperTime: {
                LastTime: 10,
                RandomMin: 1.5,
                RandomMax: 7.5,
                ShowTimeMin: 0.3,
                ShowTimeMax: 0.7,
                WrongLimit: 5,
                HighLightLimit: 5,
                SubScore: -25,
              },
              GoldSkillTimeLimit: { Select: 7, Click: 4 },
            },
          }),
          (o.PausePenilty = 1e3),
          (o.PausePenilthBase = 1e3),
          (o.PauseLimit = 2),
          (o.SuperAniName = {
            Percent: "super_percent",
            Get: "super_get",
            Remind: "super",
          }),
          (function (e) {
            (e[(e.Wheel = 0)] = "Wheel"),
              (e[(e.Carousel = 1)] = "Carousel"),
              (e[(e.Roller = 2)] = "Roller"),
              (e[(e.Circus = 3)] = "Circus");
          })((n = o.Theme || (o.Theme = {}))),
          (o.ThemePool = [n.Carousel, n.Roller, n.Wheel, n.Circus]),
          (o.RewardTime = { One: 4, Two: 3.2 }),
          (o.TimeScorePercent = { Perfect: 0.2, Great: 0.5 }),
          (function (e) {
            (e[(e.Perfect = 0)] = "Perfect"),
              (e[(e.Great = 1)] = "Great"),
              (e[(e.Nice = 2)] = "Nice"),
              (e[(e.Normal = 3)] = "Normal"),
              (e[(e.Oops = 4)] = "Oops"),
              (e[(e.Bingo = 5)] = "Bingo"),
              (e[(e.OverBingo = 6)] = "OverBingo"),
              (e[(e.AllBingo = 7)] = "AllBingo"),
              (e[(e.Star = 8)] = "Star"),
              (e[(e.Gold = 9)] = "Gold"),
              (e[(e.Mouse = 10)] = "Mouse"),
              (e[(e.SpeedScore = 11)] = "SpeedScore"),
              (e[(e.BingoScore = 12)] = "BingoScore"),
              (e[(e.CorrectScore = 13)] = "CorrectScore"),
              (e[(e.OverBingoScore = 14)] = "OverBingoScore"),
              (e[(e.AllBingoScore = 15)] = "AllBingoScore"),
              (e[(e.OopScore = 16)] = "OopScore"),
              (e[(e.TotalScore = 17)] = "TotalScore");
          })(o.ScoreType || (o.ScoreType = {})),
          (function (e) {
            (e[(e.SpeedBonusCount = 0)] = "SpeedBonusCount"),
              (e[(e.CorrectCount = 1)] = "CorrectCount"),
              (e[(e.OopCount = 2)] = "OopCount"),
              (e[(e.BingoCount = 3)] = "BingoCount"),
              (e[(e.OverBingoCount = 4)] = "OverBingoCount"),
              (e[(e.AllBingoCount = 5)] = "AllBingoCount");
          })(o.ScoreCountType || (o.ScoreCountType = {})),
          (o.ToolPercent = {
            Perfect: 0.8,
            Great: 0.5,
            Nice: 0.4,
            Normal: 0,
            Oops: 0,
            Bingo: 0,
            OverBingo: 0,
            AllBingo: 0,
            Star: 0.8,
            Gold: 0.8,
            Mouse: 0,
          }),
          (o.ScoreText = {
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
            Mouse: "font_awesome",
          }),
          (o.SuperLight = { Gray: "bg_supergray", Light: "bg_superlight" }),
          (o.UI_Atlas = {
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
            Skill_Icon_Skip: "bg_skill_5",
            Super_Skill_Down: "btn_change_down",
            Super_Skill_Up: "btn_change_up",
            Super_Skill_Gray: "btn_change_gray",
          }),
          (o.Score = {
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
            Mouse: 50,
          }),
          (o.TimeLimit = 91),
          (o.RewardListLimit = 4),
          (o.CardNumber = { Min: 2, Max: 3 }),
          (function (e) {
            (e.Score = "Score"),
              (e.Card = "Card"),
              (e.Point = "Point"),
              (e.Time = "TimeBonus");
          })(o.PrefabName || (o.PrefabName = {})),
          (o.TargetRange = { Start: 1, End: 75 }),
          (o.CardStep = 15),
          (function (e) {
            (e[(e.B = 1)] = "B"),
              (e[(e.I = 2)] = "I"),
              (e[(e.N = 3)] = "N"),
              (e[(e.G = 4)] = "G"),
              (e[(e.O = 5)] = "O");
          })(o.CardWord || (o.CardWord = {})),
          (o.PointColor = {
            0: cc.color(79, 130, 233),
            1: cc.color(229, 103, 236),
            2: cc.color(145, 85, 212),
            3: cc.color(42, 197, 183),
            4: cc.color(231, 209, 125),
          }),
          (o.StarCard = ["N.3"]),
          (o.RectCard = ["B.1", "O.1", "B.5", "O.5"]),
          (function (e) {
            (e[(e.TimeUp = 0)] = "TimeUp"),
              (e[(e.PoolClear = 1)] = "PoolClear"),
              (e[(e.CardClear = 2)] = "CardClear"),
              (e[(e.AllBingo = 3)] = "AllBingo");
          })(o.OverType || (o.OverType = {})),
          (o.OverFont = {
            TimeUp: "bg_result_font1",
            PoolClear: "bg_result_font2",
            CardClear: "bg_result_font2",
            AllBingo: "bg_result_font2",
          }),
          (o.TotalSkillCount = 5),
          (o.SkillPercentRange = { Max: 140, Min: 11 }),
          (o.GoldSkillTimeLimit = { Select: 7, Click: 4 }),
          (o.SuperTime = {
            LastTime: 10,
            RandomMin: 1.5,
            RandomMax: 7.5,
            ShowTimeMin: 0.3,
            ShowTimeMax: 0.7,
            WrongLimit: 5,
            HighLightLimit: 5,
            SubScore: -25,
          }),
          cc._RF.pop();
      },
      {},
    ],
    EventManager: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "abedd8TuIVPHo+8lpclbjlp", "EventManager"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = (function () {
          function e() {
            this.eventTarget = new cc.EventTarget();
          }
          return (
            Object.defineProperty(e, "inst", {
              get: function () {
                return this.ins ? this.ins : (this.ins = new e());
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.emit = function (e, t, o, i, n, r) {
              this.eventTarget.emit(e.toString(), t, o, i, n, r);
            }),
            (e.prototype.on = function (e, t, o, i) {
              return this.eventTarget.on(e.toString(), t, o, i);
            }),
            (e.prototype.once = function (e, t, o) {
              this.eventTarget.once(e.toString(), t, o);
            }),
            (e.prototype.dispatchEvent = function (e) {
              this.eventTarget.dispatchEvent(e);
            }),
            (e.prototype.off = function (e, t, o) {
              this.eventTarget.off(e.toString(), t, o);
            }),
            (e.prototype.hasEventListener = function (e) {
              return this.eventTarget.hasEventListener(e.toString());
            }),
            (e.prototype.targetOff = function (e) {
              this.eventTarget.targetOff(e);
            }),
            e
          );
        })();
        (o.gEventMgr = i.inst), cc._RF.pop();
      },
      {},
    ],
    EventName: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5e448W2wb5EB7XC2O5CyNch", "EventName"),
          Object.defineProperty(o, "__esModule", { value: !0 }),
          (function (e) {
            (e[(e.PLAY_EFFECT = 0)] = "PLAY_EFFECT"),
              (e[(e.CHANGE_BGM = 1)] = "CHANGE_BGM"),
              (e[(e.SMALL_BGM = 2)] = "SMALL_BGM"),
              (e[(e.NORMAL_BGM = 3)] = "NORMAL_BGM"),
              (e[(e.GAME_START = 4)] = "GAME_START"),
              (e[(e.ADD_SCORE = 5)] = "ADD_SCORE"),
              (e[(e.GAME_OVER = 6)] = "GAME_OVER"),
              (e[(e.ADD_2_NORMAL_REWARD = 7)] = "ADD_2_NORMAL_REWARD"),
              (e[(e.CHECK_BINGO = 8)] = "CHECK_BINGO"),
              (e[(e.UPDATE_TOOL_PERCENT = 9)] = "UPDATE_TOOL_PERCENT"),
              (e[(e.SKILL_DONE = 10)] = "SKILL_DONE"),
              (e[(e.SUPER_END_COMPLETE = 11)] = "SUPER_END_COMPLETE"),
              (e[(e.GOLD_POINT_SELECT_DONE = 12)] = "GOLD_POINT_SELECT_DONE"),
              (e[(e.CHANGE_GAME_MODE = 13)] = "CHANGE_GAME_MODE"),
              (e[(e.UPDATE_MOUSE_LIGHT = 14)] = "UPDATE_MOUSE_LIGHT"),
              (e[(e.SCROLL_CARD = 15)] = "SCROLL_CARD"),
              (e[(e.CHANGE_CARD_TAB = 16)] = "CHANGE_CARD_TAB"),
              (e[(e.PXIEL_ENABLE = 17)] = "PXIEL_ENABLE"),
              (e[(e.SHOW_SKILL_GUIDE = 18)] = "SHOW_SKILL_GUIDE"),
              (e[(e.MAGIC_DAUB = 19)] = "MAGIC_DAUB"),
              (e[(e.MAGIC_TIP = 20)] = "MAGIC_TIP"),
              (e[(e.SKILL_TIP = 21)] = "SKILL_TIP"),
              (e[(e.BINGO = 22)] = "BINGO"),
              (e[(e.CHANGE_SKILL_ORDER = 23)] = "CHANGE_SKILL_ORDER"),
              (e[(e.HIDE_HELP = 24)] = "HIDE_HELP"),
              (e[(e.ON_HIDE = 25)] = "ON_HIDE"),
              (e[(e.ON_SHOW = 26)] = "ON_SHOW"),
              (e[(e.SKILL_RESUME = 27)] = "SKILL_RESUME");
          })(o.GlobalEvent || (o.GlobalEvent = {})),
          cc._RF.pop();
      },
      {},
    ],
    FrameAniBase: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "40ac1Eu6RlIMb5+29+y7eVp", "FrameAniBase"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = cc._decorator,
          n = i.ccclass,
          r = i.property,
          a = i.executeInEditMode,
          l = i.requireComponent,
          s = i.playOnFocus,
          c = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.Frames = null),
                (t.Interval = 0.1),
                (t.Priority = 0),
                (t.Loop = !1),
                (t.PlayOnLoad = !1),
                (t.currentIndex = 0),
                (t.time = 0),
                (t.isPlay = !1),
                (t.listener = []),
                (t.complateEvent = []),
                t
              );
            }
            var o;
            return (
              __extends(t, e),
              (o = t),
              Object.defineProperty(t.prototype, "Sprite", {
                get: function () {
                  return this.node.getComponent(cc.Sprite);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Animation", {
                set: function (e) {
                  this.Frames = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.onFocusInEditor = function () {
                (this.time = this.Interval),
                  (o.intervalID = setInterval(
                    this.update.bind(this),
                    0.016,
                    0.016
                  ));
              }),
              (t.prototype.onLostFocusInEditor = function () {
                clearInterval(o.intervalID);
              }),
              (t.prototype.onLoad = function () {
                (this.time = this.Interval), (this.isPlay = this.PlayOnLoad);
              }),
              (t.prototype.play = function () {
                (this.isPlay = !0),
                  (this.currentIndex = 0),
                  0 == this.isPlaying && this.callEventComplete();
              }),
              (t.prototype.playOnLoop = function () {
                (this.Loop = !0), this.play();
              }),
              (t.prototype.playByStep = function () {
                (this.isPlay = !0), this.nextFrame(), (this.isPlay = !1);
              }),
              (t.prototype.pause = function () {
                this.isPlay = !1;
              }),
              (t.prototype.resume = function () {
                this.isPlay = !0;
              }),
              (t.prototype.stop = function () {
                (this.isPlay = !1),
                  (this.currentIndex = 0),
                  (this.Loop = !1),
                  (this.Sprite.spriteFrame = this.Frames.getSpriteFrames()[
                    this.currentIndex
                  ]);
              }),
              (t.prototype.onKeyFrame = function (e) {}),
              (t.prototype.addKeyEventListener = function (e, t) {
                this.listener.push({ callback: e, target: t });
              }),
              Object.defineProperty(t.prototype, "ListenerCount", {
                get: function () {
                  return this.listener.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.clearAllListener = function () {
                return (this.listener.length = 0), this;
              }),
              (t.prototype.onComplete = function () {}),
              (t.prototype.callEventFrame = function () {
                this.onKeyFrame(this.currentIndex);
                for (var e = 0, t = this.listener; e < t.length; e++) {
                  var o = t[e];
                  o.callback.apply(o.target, [
                    this.currentIndex,
                    this.__classname__,
                  ]);
                }
              }),
              (t.prototype.callEventComplete = function () {
                this.onComplete();
                for (var e = 0, t = this.complateEvent; e < t.length; e++) {
                  var o = t[e];
                  o.f.apply(o.target, [this.__classname__]);
                }
              }),
              (t.prototype.addCompleteEvent = function (e, t) {
                this.complateEvent.push({ f: e, target: t });
              }),
              Object.defineProperty(t.prototype, "TotalFrameCount", {
                get: function () {
                  return this.Frames && this.Frames.getSpriteFrames
                    ? this.Frames.getSpriteFrames().length
                    : 0;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "CompleteEventCount", {
                get: function () {
                  return this.complateEvent.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.clearCompleteEvent = function () {
                return (this.complateEvent.length = 0), this;
              }),
              (t.prototype.start = function () {}),
              Object.defineProperty(t.prototype, "isPlaying", {
                get: function () {
                  if (
                    this.isPlay &&
                    this.Frames &&
                    this.Frames.getSpriteFrames &&
                    this.Frames.getSpriteFrames().length > 0
                  ) {
                    for (
                      var e = 0, t = this.getComponents(o);
                      e < t.length;
                      e++
                    ) {
                      var i = t[e];
                      if (i.Priority > this.Priority && i.isPlaying) return !1;
                    }
                    return !0;
                  }
                  return !1;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.nextFrame = function () {
                0 != this.isPlaying
                  ? this.Frames &&
                    this.Frames.getSpriteFrames &&
                    this.Frames.getSpriteFrames().length > 0 &&
                    ((this.Sprite.spriteFrame = this.Frames.getSpriteFrames()[
                      this.currentIndex
                    ]),
                    this.callEventFrame(),
                    (this.currentIndex =
                      (this.currentIndex + 1) %
                      this.Frames.getSpriteFrames().length),
                    0 == this.currentIndex &&
                      0 == this.Loop &&
                      ((this.isPlay = !1), this.callEventComplete()))
                  : (this.time = this.Interval);
              }),
              (t.prototype.update = function (e) {
                this.time >= this.Interval &&
                  ((this.time = 0), this.nextFrame()),
                  (this.time += e);
              }),
              (t.aniName = "FrameAniBase"),
              (t.intervalID = -1),
              __decorate([r(cc.SpriteAtlas)], t.prototype, "Frames", void 0),
              __decorate([r], t.prototype, "Interval", void 0),
              __decorate([r], t.prototype, "Priority", void 0),
              __decorate([r], t.prototype, "Loop", void 0),
              __decorate([r], t.prototype, "PlayOnLoad", void 0),
              (t = o = __decorate([n, a, s, l(cc.Sprite)], t))
            );
          })(cc.Component);
        (o.default = c), cc._RF.pop();
      },
      {},
    ],
    GameFactory: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4ba85CHTExANJR6/Hab8WvI", "GameFactory"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Utils/HashMap"),
          n = (function () {
            function e(e, t, o) {
              (this._pool = []),
                (this.poolHandlerComps = []),
                (this.poolHandlerComps = o),
                (this.template = e),
                this.initPool(t);
            }
            return (
              (e.prototype.initPool = function (e) {
                for (var t = 0; t < e; ++t) {
                  var o = cc.instantiate(this.template);
                  this.put(o);
                }
              }),
              (e.prototype.size = function () {
                return this._pool.length;
              }),
              (e.prototype.clear = function () {
                for (var e = this._pool.length, t = 0; t < e; ++t)
                  this._pool[t].destroy && this._pool[t].destroy();
                this._pool.length = 0;
              }),
              (e.prototype.put = function (e) {
                if (e && -1 === this._pool.indexOf(e)) {
                  if ((e.removeFromParent(!1), this.poolHandlerComps))
                    for (
                      var t = 0, o = this.poolHandlerComps;
                      t < o.length;
                      t++
                    ) {
                      var i = o[t],
                        n = e.getComponent(i);
                      n && n.unuse && n.unuse.apply(n);
                    }
                  else
                    for (
                      var r = 0, a = e.getComponents(cc.Component);
                      r < a.length;
                      r++
                    ) {
                      (i = a[r]) && i.unuse && i.unuse.apply(i);
                    }
                  this._pool.push(e);
                }
              }),
              (e.prototype.get = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var o = this._pool.length - 1;
                o < 0 && this.initPool(1), (o = this._pool.length - 1);
                var i = this._pool[o];
                if (((this._pool.length = o), this.poolHandlerComps))
                  for (
                    var n = 0, r = this.poolHandlerComps;
                    n < r.length;
                    n++
                  ) {
                    var a = r[n],
                      l = i.getComponent(a);
                    l && l.reuse && l.reuse.apply(l, arguments);
                  }
                else
                  for (
                    var s = 0, c = i.getComponents(cc.Component);
                    s < c.length;
                    s++
                  ) {
                    (a = c[s]) && a.reuse && a.reuse.apply(a, arguments);
                  }
                return i;
              }),
              e
            );
          })(),
          r = (function () {
            function e() {
              this.objPool = new i.HashMap();
            }
            return (
              Object.defineProperty(e, "inst", {
                get: function () {
                  return this.ins ? this.ins : (this.ins = new e());
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.init = function (e) {
                var t = this;
                (this.doneCallback = e),
                  cc.loader.loadResDir("prefabs/", cc.Prefab, function (
                    e,
                    o,
                    i
                  ) {
                    if (e) console.error(" Game Factory init failed:", e);
                    else {
                      for (var r = 0, a = o; r < a.length; r++) {
                        var l = a[r],
                          s = l.name.split("."),
                          c = s[0],
                          u = s[1] ? parseInt(s[1]) : 30,
                          h = new n(l, u);
                        t.objPool.add(c, h);
                      }
                      t.doneCallback();
                    }
                  });
              }),
              (e.prototype.getObj = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
                return this.objPool.has(e)
                  ? this.objPool.get(e).get(t)
                  : (console.error(" objPool dosen't exists this obj:", e),
                    null);
              }),
              (e.prototype.putObj = function (e, t) {
                if (this.objPool.has(e)) return this.objPool.get(e).put(t);
                console.error(" objPool dosen't exists this obj:", e);
              }),
              e
            );
          })();
        (o.gFactory = r.inst), cc._RF.pop();
      },
      { "../Utils/HashMap": "HashMap" },
    ],
    GameScene: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "641d0IYt6xLgqqVz9F0bymV", "GameScene"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i,
          n = e("./Controller/GameFactory"),
          r = e("./Controller/EventManager"),
          a = e("./Controller/StepController"),
          l = e("./Controller/AudioController"),
          s = e("./Controller/EventName"),
          c = e("./Controller/Game"),
          u = e("./Guide"),
          h = e("./Controller/CelerSDK"),
          p = e("./Const"),
          d = e("./UI/Pad"),
          g = e("./Card"),
          m = e("./GoldSkillLayer"),
          f = e("./SuperSkillLayer"),
          y = e("./ResultLayer"),
          S = e("./LoadLayer"),
          C = e("./PauseLayer"),
          v = e("./Controller/LogHandler"),
          b = e("./MagicLayer"),
          T = e("./Point"),
          _ = e("./Skill"),
          E = e("./Utils/GameSignal");
        (function (e) {
          (e.Prefab = "Prefab"), (e.Audio = "Audio");
        })(i || (i = {}));
        var P = cc._decorator,
          G = P.ccclass,
          M = P.property,
          L = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.ResultAnimation = null),
                (t.Background = null),
                (t.TopNode = null),
                (t.TimeLabel = null),
                (t.ScoreLabel = null),
                (t.PageTabButtonRoot = null),
                (t.ResultTitle = null),
                (t.CardPages = null),
                (t.CurrentPoint = null),
                (t.NextPoint = null),
                (t.PointArray = null),
                (t.RecycleArray = null),
                (t.Help = null),
                (t.Guide = null),
                (t.TextAtlas = null),
                (t.UIAtlas = null),
                (t.ToolBar = null),
                (t.BingoButton = null),
                (t.SuperSkillButton = null),
                (t.SkillRoot = null),
                (t.SuperSkillBar = null),
                (t.CurrentSkillProgressLabel = null),
                (t.TotalSkillProgressLabel = null),
                (t.StarSkillLayer = null),
                (t.GoldSkillLayer = null),
                (t.MagicLayer = null),
                (t.SuperSkillLayer = null),
                (t.ResultLayer = null),
                (t.LoadLayer = null),
                (t.TimeFont = null),
                (t.SuperAnimation = null),
                (t.StartTimeCount = null),
                (t.StartTimeCountLabel = null),
                (t.StartTimeAtlas = null),
                (t.PauseLayer = null),
                (t.ChangeButton = null),
                (t.showScore = 0),
                (t.score = 0),
                (t.addScoreStep = 0),
                (t.completeCallback = null),
                (t.scoreNodeCache = []),
                (t.timeNodeCache = []),
                (t.toolPercent = 0),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.onLoad = function () {
                var e = this;
                (window.chichihaoshuaihahaha = !1),
                  h.CelerSDK.inst.init(this.celerOnStart.bind(this)),
                  cc.debug.setDisplayStats(false),
                  (c.Game.TopNode = this.TopNode),
                  (c.Game.CurrentReward = this.CurrentPoint),
                  (c.Game.RewardArray = this.PointArray),
                  (this.PageTabButtonRoot.active = !1),
                  (this.ToolBar.progress = 0),
                  (this.ResultAnimation.node.active = !1),
                  setTimeout(function () {
                    (e.StarSkillLayer.active = !1),
                      e.GoldSkillLayer.hide(),
                      e.SuperSkillLayer.hide(),
                      e.ResultLayer.hide(),
                      e.PauseLayer.hide(),
                      e.MagicLayer.hide();
                  }, 0),
                  (this.LoadLayer.node.active = !0),
                  (this.TimeLabel.string = CMath.TimeFormat(90)),
                  a.gStep.register(this.celerReady.bind(this), [
                    i.Prefab,
                    i.Audio,
                  ]),
                  l.gAudio.init(function () {
                    a.gStep.nextStep(i.Audio);
                  }),
                  n.gFactory.init(function () {
                    a.gStep.nextStep(i.Prefab);
                  }),
                  this.initEvent();
              }),
              (t.prototype.celerReady = function () {
                v.LogHandler.inst.log(" celer ready"),
                  h.CelerSDK.inst.celerXReady();
              }),
              (t.prototype.celerOnStart = function () {
                c.Game.prepare();
                for (
                  var e = 0, t = this.Background.children;
                  e < t.length;
                  e++
                ) {
                  var o = t[e];
                  o.active = o.name == p.Theme[c.Game.Theme];
                }
                this.initGameScene(),
                  this.LoadLayer.ready(),
                  (this.TimeLabel.string = CMath.TimeFormat(
                    c.Game.LevelInfo.GameTime
                  )),
                  c.Game.initSkillPool(20);
              }),
              (t.prototype.updateSuperSkillProgress = function () {
                (this.TotalSkillProgressLabel.string = c.Game.LevelInfo.TotalSkillCount.toString()),
                  (this.CurrentSkillProgressLabel.string = c.Game.getCurrentSkillUseCount().toString());
                var e = c.Game.getSkillUsePercent();
                this.SuperSkillBar.active = e < 1;
                var t =
                  e * (p.SkillPercentRange.Max - p.SkillPercentRange.Min) +
                  p.SkillPercentRange.Min;
                this.SuperSkillBar.height < t
                  ? e < 1
                    ? ((this.SuperAnimation.node.opacity = 0),
                      this.SuperAnimation.stop(p.SuperAniName.Remind),
                      this.SuperAnimation.playAdditive(p.SuperAniName.Percent))
                    : (this.SuperAnimation.playAdditive(p.SuperAniName.Get),
                      this.SuperAnimation.playAdditive(p.SuperAniName.Remind),
                      h.CelerSDK.inst.isNew() &&
                        !c.Game.skillGuide[p.SkillType.Super] &&
                        ((c.Game.skillGuide[p.SkillType.Super] = !0),
                        1 == c.Game.Level
                          ? r.gEventMgr.emit(
                              s.GlobalEvent.SHOW_SKILL_GUIDE,
                              p.SkillType.Super,
                              this.superSkill.bind(this)
                            )
                          : r.gEventMgr.emit(
                              s.GlobalEvent.SHOW_SKILL_GUIDE,
                              p.SkillType.Super,
                              c.Game.resume
                            )))
                  : e < 1 &&
                    ((this.SuperAnimation.node.opacity = 0),
                    this.SuperAnimation.stop(p.SuperAniName.Remind)),
                  (this.SuperSkillBar.height = t),
                  (this.SuperSkillButton.interactable = e >= 1),
                  E.WildDaubSignal.inst.dispatchOne(
                    c.Game.getCurMode() == p.SkillType.Normal &&
                      this.SuperSkillButton.interactable &&
                      !c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                  );
              }),
              (t.prototype.updateButtonGroup = function () {
                for (
                  var e = 0, t = this.PageTabButtonRoot.children;
                  e < t.length;
                  e++
                ) {
                  var o = t[e];
                  (o.getChildByName("Normal").active = o.getComponent(
                    cc.Button
                  ).interactable),
                    (o.getChildByName("Press").active = !o.getChildByName(
                      "Normal"
                    ).active),
                    o.getComponent(cc.Button).interactable
                      ? (o.getChildByName("Text").opacity = 127.5)
                      : (o.getChildByName("Text").opacity = 255);
                }
              }),
              (t.prototype.setButtonGroupDefault = function () {
                for (
                  var e = 0, t = this.PageTabButtonRoot.children;
                  e < t.length;
                  e++
                ) {
                  var o = t[e];
                  (o.getChildByName("Press").group = "default"),
                    (o.getChildByName("Text").group = "default");
                }
              }),
              (t.prototype.setButtonGroupUI = function () {
                for (
                  var e = 0, t = this.PageTabButtonRoot.children;
                  e < t.length;
                  e++
                ) {
                  var o = t[e];
                  (o.getChildByName("Press").group = "UI"),
                    (o.getChildByName("Text").group = "UI");
                }
              }),
              (t.prototype.initGameScene = function () {
                var e = c.Game.getCardNumber();
                this.PageTabButtonRoot.active = !(e <= 1);
                for (
                  var t = this.PageTabButtonRoot.childrenCount, o = 1;
                  o <= t;
                  o++
                ) {
                  (r = this.PageTabButtonRoot.getChildByName(o.toString())) &&
                  o > e
                    ? r.removeFromParent(!0)
                    : (r.on(
                        cc.Node.EventType.TOUCH_START,
                        this.scrollCardPage,
                        this
                      ),
                      1 == o && (r.getComponent(cc.Button).interactable = !1));
                }
                this.updateButtonGroup(),
                  (this.PageTabButtonRoot.active = e > 1);
                var i = this.CardPages.content.childrenCount;
                for (o = 1; o <= i; o++) {
                  var r;
                  (r = this.CardPages.content.getChildByName(o.toString())) &&
                  o > e
                    ? this.CardPages.removePage(r)
                    : r.addComponent(d.default);
                }
                this.CardPages.node.on(
                  "scroll-ended",
                  this.onPageTurnDone,
                  this
                ),
                  this.CardPages._unregisterEvent();
                for (
                  var a = 0, l = 0, s = this.CardPages.content.children;
                  l < s.length;
                  l++
                ) {
                  var u = s[l];
                  console.log(
                    "\u521d\u59cb\u5316\u5361\u7247\u5185\u5bb9Count:",
                    a++
                  );
                  for (o = p.CardWord.B; o <= p.CardWord.O; o++) {
                    for (var h = [], m = [], f = 0; f < 15; f++) m.push(f);
                    h.length = m.length;
                    for (
                      f = (o - 1) * p.CardStep + 1;
                      f <= o * p.CardStep;
                      f++
                    ) {
                      var y = Math.floor(CMath.getRandom(0, m.length));
                      (h[m[y]] = f), m.splice(y, 1);
                    }
                    console.log(" -------- randomPool ------------"),
                      console.log(h);
                    for (f = 1; f <= 5; f++) {
                      var S = h.pop(),
                        C = parseInt(u.name) - 1;
                      c.Game.addCurrentCardValue(C, S);
                      var v = n.gFactory.getObj("Card", o, f, S, C);
                      u.addChild(v);
                      v.setPosition(
                        7 + v.width / 2 + (o - 1) * (v.width + 2),
                        -5 - v.height / 2 - (f - 1) * (v.height + 10)
                      ),
                        v.getComponent(g.default).updateLabelInfo();
                    }
                  }
                }
                console.log(c.Game.getCurrentCardValue()),
                  this.updateSuperSkillProgress(),
                  this.updateToolPercent(),
                  (c.Game.cardIndex = this.CardPages.getCurrentPageIndex());
              }),
              (t.prototype.onPageTurnDone = function () {
                for (
                  var e = 0, t = this.PageTabButtonRoot.children;
                  e < t.length;
                  e++
                ) {
                  var o = t[e];
                  o.getComponent(cc.Button).interactable =
                    o.name !=
                    (this.CardPages.getCurrentPageIndex() + 1).toString();
                }
                this.updateButtonGroup(),
                  this.updateBingoButton(),
                  E.SkillFullSignal.inst.dispatchOne(
                    this.SkillRoot.childrenCount > 0 &&
                      !c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                  ),
                  E.WildDaubSignal.inst.dispatchOne(
                    c.Game.getCurMode() == p.SkillType.Normal &&
                      this.SuperSkillButton.interactable &&
                      !c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                  );
              }),
              (t.prototype.scrollCardPage = function (e) {
                if (
                  !(
                    [
                      p.SkillType.Normal,
                      p.SkillType.Gold,
                      p.SkillType.Magic,
                    ].indexOf(c.Game.getCurMode()) < 0
                  ) &&
                  e.target.getComponent(cc.Button).interactable
                ) {
                  r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "tab");
                  for (
                    var t = 0, o = this.PageTabButtonRoot.children;
                    t < o.length;
                    t++
                  ) {
                    var i = o[t];
                    e.target == i
                      ? (i.getComponent(cc.Button).interactable = !1)
                      : (i.getComponent(cc.Button).interactable = !0);
                  }
                  this.updateButtonGroup(),
                    this.CardPages.scrollToPage(parseInt(e.target.name) - 1, 0),
                    (c.Game.cardIndex = this.CardPages.getCurrentPageIndex()),
                    this.updateBingoButton(),
                    r.gEventMgr.emit(s.GlobalEvent.CHANGE_CARD_TAB),
                    E.SwitchCardSignal.inst.dispatch(),
                    E.SkillFullSignal.inst.dispatchOne(
                      this.SkillRoot.childrenCount > 0 &&
                        !c.Game.checkIsFull(
                          this.CardPages.getCurrentPageIndex()
                        )
                    ),
                    E.WildDaubSignal.inst.dispatchOne(
                      c.Game.getCurMode() == p.SkillType.Normal &&
                        this.SuperSkillButton.interactable &&
                        !c.Game.checkIsFull(
                          this.CardPages.getCurrentPageIndex()
                        )
                    );
                }
              }),
              (t.prototype.changeSkillOrder = function () {
                var e = this;
                if (0 != this.ChangeButton.interactable)
                  if (this.SkillRoot.childrenCount < 2)
                    console.log(
                      " \u9053\u5177\u6570\u91cf\u4e0d\u8db3\u4e24\u4e2a\uff0c\u65e0\u6cd5\u4ea4\u6362"
                    );
                  else if (c.Game.getCurMode() == p.SkillType.Normal) {
                    (this.ChangeButton.interactable = !1),
                      r.gEventMgr.emit(s.GlobalEvent.CHANGE_SKILL_ORDER);
                    var t = this.SkillRoot.children[0];
                    t.runAction(
                      cc.sequence(
                        cc.callFunc(function () {
                          for (var t = 0; t < e.SkillRoot.childrenCount; t++)
                            e.SkillRoot.children[t]
                              .getComponent(_.default)
                              .unready();
                        }),
                        cc.moveTo(0.15, 0, 214),
                        cc.callFunc(function () {
                          e.SkillRoot.children.splice(0, 1),
                            e.SkillRoot.children.push(t);
                          for (var o = 0; o < e.SkillRoot.childrenCount; o++) {
                            var i = e.SkillRoot.children[o];
                            (i.zIndex = o + 1),
                              i.zIndex < e.SkillRoot.childrenCount &&
                                (i.y = 67 + 5 * (i.zIndex - 1));
                          }
                        }),
                        cc.moveTo(
                          0.1,
                          0,
                          67 + 5 * (this.SkillRoot.childrenCount - 1)
                        ),
                        cc.callFunc(function () {
                          e.SkillRoot.children[e.SkillRoot.childrenCount - 1]
                            .getComponent(_.default)
                            .turnReady(),
                            (e.ChangeButton.interactable =
                              e.SkillRoot.childrenCount >= 2);
                        })
                      )
                    );
                  } else
                    console.log(
                      "changeSkillOrder \u4f7f\u7528\u9053\u5177\u4e2d "
                    );
                else console.log(" change button interactable false");
              }),
              (t.prototype.initEvent = function () {
                var e = this;
                r.gEventMgr.targetOff(this),
                  this.CurrentPoint.on(
                    cc.Node.EventType.CHILD_REMOVED,
                    this.onCurrentPointRemoveChild,
                    this
                  ),
                  (this.ChangeButton.interactable =
                    this.SkillRoot.childrenCount >= 2),
                  this.ChangeButton.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.changeSkillOrder,
                    this
                  ),
                  this.TopNode.getChildByName("ScoreRoot").on(
                    cc.Node.EventType.CHILD_REMOVED,
                    this.onScoreRootRemoveChild,
                    this
                  ),
                  this.TopNode.getChildByName("TimeRoot").on(
                    cc.Node.EventType.CHILD_REMOVED,
                    this.onTimeRootRemoveChild,
                    this
                  ),
                  this.BingoButton.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.Bingo,
                    this
                  ),
                  this.SuperSkillButton.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.superSkill,
                    this
                  ),
                  this.Help.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      c.Game.getCurMode() == p.SkillType.Normal
                        ? e.PauseLayer.show(
                            function () {
                              e.Guide.show(
                                u.GuideType.Help,
                                c.Game.pause.bind(c.Game)
                              );
                            },
                            function () {
                              c.Game.resume(),
                                r.gEventMgr.emit(s.GlobalEvent.SKILL_RESUME);
                            }
                          )
                        : console.log(
                            " only the normal mode can open help info"
                          );
                    },
                    this
                  ),
                  r.gEventMgr.on(
                    s.GlobalEvent.ON_HIDE,
                    function () {
                      c.Game.getCurMode() == p.SkillType.Normal
                        ? (e.Guide.node.active && e.Guide.hide(),
                          e.PauseLayer.show(
                            function () {
                              e.Guide.show(
                                u.GuideType.Help,
                                c.Game.pause.bind(c.Game)
                              );
                            },
                            function () {
                              c.Game.resume(),
                                r.gEventMgr.emit(s.GlobalEvent.SKILL_RESUME);
                            }
                          ))
                        : e.PauseLayer.show(
                            function () {
                              e.Guide.show(
                                u.GuideType.Help,
                                c.Game.pause.bind(c.Game)
                              );
                            },
                            function () {
                              r.gEventMgr.emit(s.GlobalEvent.SKILL_RESUME);
                            }
                          );
                    },
                    this
                  ),
                  this.SkillRoot.on(
                    cc.Node.EventType.CHILD_ADDED,
                    function () {
                      console.log(
                        "\u83b7\u5f97\u9053\u5177\uff1a" +
                          e.SkillRoot.childrenCount
                      ),
                        (e.ChangeButton.interactable =
                          e.SkillRoot.childrenCount >= 2),
                        E.SkillFullSignal.inst.dispatchOne(
                          !c.Game.checkIsFull(e.CardPages.getCurrentPageIndex())
                        );
                    },
                    this
                  ),
                  this.SkillRoot.on(
                    cc.Node.EventType.CHILD_REMOVED,
                    function () {
                      E.SkillFullSignal.inst.dispatchOne(
                        e.SkillRoot.childrenCount > 0 &&
                          !c.Game.checkIsFull(e.CardPages.getCurrentPageIndex())
                      ),
                        e.SkillRoot.childrenCount >= 1 &&
                          e.SkillRoot.children[e.SkillRoot.childrenCount - 1]
                            .getComponent(_.default)
                            .turnReady(),
                        console.log(
                          "\u5220\u9664\u9053\u5177\uff1a" +
                            e.SkillRoot.childrenCount
                        ),
                        (e.ChangeButton.interactable =
                          e.SkillRoot.childrenCount >= 2);
                    },
                    this
                  ),
                  r.gEventMgr.on(
                    s.GlobalEvent.ADD_2_NORMAL_REWARD,
                    this.addNormalReward,
                    this
                  ),
                  r.gEventMgr.on(s.GlobalEvent.ADD_SCORE, this.addScore, this),
                  r.gEventMgr.on(
                    s.GlobalEvent.CHECK_BINGO,
                    this.CheckBingo,
                    this
                  ),
                  r.gEventMgr.on(
                    s.GlobalEvent.UPDATE_TOOL_PERCENT,
                    this.updateToolPercent,
                    this
                  ),
                  r.gEventMgr.on(
                    s.GlobalEvent.SKILL_DONE,
                    this.skillDone,
                    this
                  ),
                  r.gEventMgr.once(
                    s.GlobalEvent.GAME_OVER,
                    this.onGameOver,
                    this
                  ),
                  r.gEventMgr.once(
                    s.GlobalEvent.GAME_START,
                    this.startGame,
                    this
                  ),
                  r.gEventMgr.on(
                    s.GlobalEvent.SHOW_SKILL_GUIDE,
                    this.showSkillGuide,
                    this
                  );
              }),
              (t.prototype.startGame = function () {
                var e = this;
                console.log(" start game time count..."),
                  (this.StartTimeCount.spriteFrame = this.StartTimeAtlas.getSpriteFrame(
                    "ae_start1"
                  ));
                this.StartTimeCountLabel.string = (3).toString();
                var t = 1,
                  o = [];
                this.LoadLayer.enableBlock(!1);
                for (
                  var i = function (i) {
                      o.push(
                        cc.repeat(
                          cc.sequence(
                            cc.delayTime(1 / 12),
                            cc.callFunc(function () {
                              (t = Math.max(1, (t + 1) % 7)),
                                (e.StartTimeCount.spriteFrame = e.StartTimeAtlas.getSpriteFrame(
                                  "ae_start" + t
                                ));
                            })
                          ),
                          12
                        ),
                        cc.callFunc(function () {
                          i <= 0
                            ? ((e.StartTimeCountLabel.string = ""),
                              (e.StartTimeCount.node.scale = 0.8),
                              (e.StartTimeCount.spriteFrame = e.StartTimeAtlas.getSpriteFrame(
                                "ae_LETSGO"
                              )))
                            : (r.gEventMgr.emit(
                                s.GlobalEvent.PLAY_EFFECT,
                                "count"
                              ),
                              (e.StartTimeCountLabel.string = i.toString()));
                        })
                      );
                    },
                    n = 2;
                  n >= 0;
                  n--
                )
                  i(n);
                o.push(
                  cc.callFunc(function () {
                    r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "letsgo");
                  }),
                  cc.scaleTo(0.1, 1.5),
                  cc.delayTime(0.5),
                  cc.scaleTo(0.1, 1),
                  cc.fadeOut(0.5),
                  cc.callFunc(function () {
                    console.log(" Game.start() --"),
                      e.onCurrentPointRemoveChild(null),
                      c.Game.start(),
                      e.PauseLayer.node.active &&
                        0 == c.Game.isPause() &&
                        (console.warn(
                          "\u5728\u6682\u505c\u9875\u9762\uff0c\u7403\u7684\u5012\u8ba1\u65f6\u6ca1\u6709\u8fdb\u5165\u6682\u505c\u72b6\u6001"
                        ),
                        c.Game.pause());
                  })
                ),
                  h.CelerSDK.inst.isNew()
                    ? this.Guide.show(u.GuideType.Guide, function () {
                        r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "count"),
                          e.StartTimeCount.node.runAction(cc.sequence(o));
                      })
                    : (r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "count"),
                      this.StartTimeCount.node.runAction(cc.sequence(o)));
              }),
              (t.prototype.onGameOver = function (e) {
                var t = this;
                console.log("OverType:", p.OverType[e]),
                  E.BingoSignal.inst.dispatchOne(!1),
                  E.SkillFullSignal.inst.dispatchOne(!1),
                  this.skillDone(),
                  (c.Game.isOver = !0),
                  (this.scoreNodeCache.length = 0),
                  (this.ResultAnimation.node.active = !0),
                  this.ResultAnimation.once(
                    cc.Animation.EventType.FINISHED,
                    function () {
                      setTimeout(function () {
                        t.ResultLayer.show(e);
                      }, 1e3);
                    },
                    this
                  ),
                  e == p.OverType.TimeUp
                    ? (this.ResultAnimation.play("time_up"),
                      r.gEventMgr.emit(s.GlobalEvent.SMALL_BGM),
                      r.gEventMgr.emit(
                        s.GlobalEvent.PLAY_EFFECT,
                        "mouse_time_up"
                      ))
                    : (this.ResultAnimation.play("complete"),
                      r.gEventMgr.emit(s.GlobalEvent.SMALL_BGM),
                      r.gEventMgr.emit(
                        s.GlobalEvent.PLAY_EFFECT,
                        "mouse_complete"
                      ));
              }),
              (t.prototype.Bingo = function () {
                if (c.Game.getCurMode() == p.SkillType.Normal)
                  if (c.Game.canBingo(this.CardPages.getCurrentPageIndex())) {
                    var e = c.Game.popBingoCache(
                      this.CardPages.getCurrentPageIndex()
                    );
                    if (e) {
                      c.Game.addScore(p.ScoreType.Bingo, e.score, 1);
                      for (var t = 0, o = 0, i = e.cards; o < i.length; o++) {
                        t += i[o].bingo();
                      }
                      t > 0 && c.Game.addScore(p.ScoreType.OverBingo, t, 1),
                        r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "bingo");
                    }
                    r.gEventMgr.emit(s.GlobalEvent.BINGO),
                      this.updateBingoButton(),
                      c.Game.checkIsComplete();
                  } else
                    c.Game.addScore(p.ScoreType.Oops, p.Score.BingoFail, 1);
                else console.log("Bingo \u4f7f\u7528\u9053\u5177\u4e2d ");
              }),
              (t.prototype.updateBingoButton = function () {
                E.BingoSignal.inst.dispatchOne(
                  c.Game.canBingo(this.CardPages.getCurrentPageIndex())
                ),
                  c.Game.canBingo(this.CardPages.getCurrentPageIndex())
                    ? (this.BingoButton.normalSprite !=
                        this.UIAtlas.getSpriteFrame(
                          p.UI_Atlas.Bingo_Orange_Up
                        ) &&
                        r.gEventMgr.emit(
                          s.GlobalEvent.PLAY_EFFECT,
                          "turn_bingo"
                        ),
                      (this.BingoButton.normalSprite = this.UIAtlas.getSpriteFrame(
                        p.UI_Atlas.Bingo_Orange_Up
                      )),
                      (this.BingoButton.hoverSprite = this.UIAtlas.getSpriteFrame(
                        p.UI_Atlas.Bingo_Orange_Up
                      )),
                      (this.BingoButton.pressedSprite = this.UIAtlas.getSpriteFrame(
                        p.UI_Atlas.Bingo_Orange_Down
                      )))
                    : ((this.BingoButton.normalSprite = this.UIAtlas.getSpriteFrame(
                        p.UI_Atlas.Bingo_Blue_Up
                      )),
                      (this.BingoButton.hoverSprite = this.UIAtlas.getSpriteFrame(
                        p.UI_Atlas.Bingo_Blue_Up
                      )),
                      (this.BingoButton.pressedSprite = this.UIAtlas.getSpriteFrame(
                        p.UI_Atlas.Bingo_Blue_Down
                      )));
              }),
              (t.prototype.CheckBingo = function (e, t) {
                void 0 === t && (t = !1);
                var o = this.CardPages.getCurrentPageIndex() + 1;
                console.log(" current page index:", o);
                for (
                  var i = [],
                    n = [],
                    r = [],
                    a = [],
                    l = [],
                    s = 0,
                    u = this.CardPages.content.getChildByName(o.toString())
                      .children;
                  s < u.length;
                  s++
                ) {
                  if ((S = u[s].getComponent(g.default))) {
                    if (
                      (p.RectCard.indexOf(S.Pos) >= 0 &&
                        t &&
                        S.isLight() &&
                        i.push(S),
                      S.Index == S.Word &&
                        e.Index == e.Word &&
                        S.isLight() &&
                        r.push(S),
                      S.Index + S.Word == 6 &&
                        e.Index + e.Word == 6 &&
                        S.isLight() &&
                        n.push(S),
                      !S.isLight())
                    )
                      continue;
                    S.Index == e.Index && a.push(S),
                      S.Word == e.Word && l.push(S);
                  }
                }
                var h = [],
                  d = 0;
                if ((i.length < 4 && (i.length = 0), i.length > 0)) {
                  console.log(" ------------- \u56db\u8fb9\u89d2 ------------"),
                    (h = h.concat(i)),
                    (d += p.Score.Bingo);
                  for (var m = [], f = 0, y = i; f < y.length; f++) {
                    var S = y[f];
                    m.push(S.Pos);
                  }
                  console.log(m);
                }
                if ((n.length < 5 && (n.length = 0), n.length > 0)) {
                  console.log(" -------- \u53cd\u5bf9\u89d2 ----------"),
                    (h = h.concat(n)),
                    (d += p.Score.Bingo);
                  m = [];
                  for (var C = 0, v = n; C < v.length; C++) {
                    S = v[C];
                    m.push(S.Pos);
                  }
                  console.log(m);
                }
                if ((r.length < 5 && (r.length = 0), r.length > 0)) {
                  console.log(" ---------- \u6b63\u5bf9\u89d2 ------------"),
                    (h = h.concat(r)),
                    (d += p.Score.Bingo);
                  m = [];
                  for (var b = 0, T = r; b < T.length; b++) {
                    S = T[b];
                    m.push(S.Pos);
                  }
                  console.log(m);
                }
                if ((a.length < 5 && (a.length = 0), a.length > 0)) {
                  console.log(" -------------  \u7ad6\u5411 ---------------"),
                    (h = h.concat(a)),
                    (d += p.Score.Bingo);
                  m = [];
                  for (var _ = 0, P = a; _ < P.length; _++) {
                    S = P[_];
                    m.push(S.Pos);
                  }
                  console.log(m);
                }
                if ((l.length < 5 && (l.length = 0), l.length > 0)) {
                  console.log(
                    " ----------------- \u6a2a\u5411 ---------------"
                  ),
                    (h = h.concat(l)),
                    (d += p.Score.Bingo);
                  m = [];
                  for (var G = 0, M = l; G < M.length; G++) {
                    S = M[G];
                    m.push(S.Pos);
                  }
                  console.log(m);
                }
                h.length > 0 &&
                  c.Game.pushBingoCache(this.CardPages.getCurrentPageIndex(), {
                    cards: h,
                    score: d,
                  }),
                  this.updateBingoButton(),
                  E.SkillFullSignal.inst.dispatchOne(
                    this.SkillRoot.childrenCount > 0 &&
                      !c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                  ),
                  E.WildDaubSignal.inst.dispatchOne(
                    c.Game.getCurMode() == p.SkillType.Normal &&
                      this.SuperSkillButton.interactable &&
                      !c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                  );
              }),
              (t.prototype.onCurrentPointRemoveChild = function (e) {
                var t = this;
                if (this.NextPoint.childrenCount <= 0) {
                  var o = n.gFactory.getObj("Point", c.Game.getNextPoint());
                  this.NextPoint.addChild(o),
                    (o.x = 0),
                    (o.y = 0),
                    (o.scale = 0),
                    o.runAction(
                      cc.sequence(
                        cc.scaleTo(0.15, 1),
                        cc.callFunc(function () {
                          o.setParent(t.CurrentPoint), (o.x = 0), (o.y = 0);
                        })
                      )
                    );
                }
              }),
              (t.prototype.addNormalReward = function (e) {
                var t = 0;
                if (this.PointArray.childrenCount >= 4) {
                  var o = this.PointArray.children[0];
                  o.setPosition(
                    CMath.ConvertToNodeSpaceAR(o, this.RecycleArray)
                  ),
                    o.setParent(this.RecycleArray),
                    (t = 0.1),
                    o.runAction(
                      cc.sequence(
                        cc.scaleTo(0.1, 0.5),
                        cc.moveTo(0.15, 0, 0),
                        cc.callFunc(function () {
                          n.gFactory.putObj("Point", o);
                        })
                      )
                    );
                }
                for (
                  var i = 0, a = this.PointArray.children;
                  i < a.length;
                  i++
                ) {
                  var l = a[i];
                  l.runAction(
                    cc.sequence(
                      cc.delayTime(t),
                      cc.moveBy(0.15, -l.width - 20, 0)
                    )
                  );
                }
                e.setPosition(CMath.ConvertToNodeSpaceAR(e, this.PointArray)),
                  e.setParent(this.PointArray),
                  e.runAction(
                    cc.sequence(
                      cc.delayTime(t),
                      cc.callFunc(function () {}),
                      cc.spawn(cc.moveTo(0.15, 0, 0), cc.scaleTo(0.15, 0.9))
                    )
                  ),
                  r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "new_point");
              }),
              (t.prototype.addScore = function (e, t, o, i) {
                var r = this;
                void 0 === i && (i = cc.v2(49, 704));
                var a = c.Game.getScore(),
                  l = n.gFactory.getObj(
                    p.PrefabName.Score,
                    t,
                    o,
                    this.ScoreLabel.node,
                    function () {
                      (r.score = a),
                        (r.addScoreStep = (r.score - r.showScore) / 20),
                        n.gFactory.putObj(p.PrefabName.Score, l),
                        console.log(
                          " score:",
                          r.score,
                          " , show:",
                          r.showScore,
                          ", step:",
                          r.addScoreStep
                        );
                    },
                    this.TextAtlas.getSpriteFrame(p.ScoreText[p.ScoreType[e]])
                  );
                l.setPosition(i),
                  this.TopNode.getChildByName("ScoreRoot").childrenCount > 0
                    ? (console.log(" font node cache!"),
                      this.scoreNodeCache.push(l))
                    : this.TopNode.getChildByName("ScoreRoot").addChild(l);
              }),
              (t.prototype.addTime = function () {
                r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "add_time");
                var e = n.gFactory.getObj(
                  p.PrefabName.Time,
                  function () {
                    n.gFactory.putObj(p.PrefabName.Time, e);
                  },
                  this.TimeLabel.node
                );
                e.setPosition(0, 0),
                  this.TopNode.getChildByName("TimeRoot").childrenCount > 0
                    ? this.timeNodeCache.push(e)
                    : this.TopNode.getChildByName("TimeRoot").addChild(e);
              }),
              (t.prototype.onScoreRootRemoveChild = function (e) {
                this.scoreNodeCache.length > 0 &&
                  this.TopNode.getChildByName("ScoreRoot").addChild(
                    this.scoreNodeCache.shift()
                  );
              }),
              (t.prototype.onTimeRootRemoveChild = function (e) {
                this.timeNodeCache.length > 0 &&
                  this.TopNode.getChildByName("TimeRoot").addChild(
                    this.timeNodeCache.shift()
                  );
              }),
              (t.prototype.updateTimeCount = function () {
                var e = Math.floor(c.Game.getGameTime());
                if (!(e > 5)) {
                  var t = this.TimeLabel.node
                      .getChildByName("font")
                      .getComponent(cc.Sprite),
                    o = this.TimeFont.getSpriteFrame("bg_time" + e);
                  t.spriteFrame != o &&
                    (r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "count"),
                    (t.spriteFrame = o),
                    t.node.runAction(
                      cc.sequence(
                        cc.fadeTo(0.2, 255),
                        cc.scaleTo(0.1, 1.2),
                        cc.delayTime(0.5),
                        cc.scaleTo(0.1, 1),
                        cc.fadeTo(0.1, 0)
                      )
                    ));
                }
              }),
              (t.prototype.updateToolPercent = function () {
                (this.toolPercent = c.Game.getToolPercent()),
                  (this.toolPercent = CMath.Clamp(this.toolPercent, 1, 0));
              }),
              (t.prototype.showSkillGuide = function (e, t) {
                this.Guide.isGuideShow()
                  ? console.log(" skill guide showing now!")
                  : c.Game.getCurMode() == p.SkillType.Normal
                  ? (console.log(" show skill guide:", p.SkillType[e]),
                    (c.Game.skillGuide[e] = !0),
                    this.Guide.showSkillGuide(e, t))
                  : console.log(" only normal mode can should guide");
              }),
              (t.prototype.addSkill = function () {
                if (
                  !(
                    c.Game.getGameTime() <= 0 ||
                    this.SkillRoot.childrenCount >=
                      c.Game.LevelInfo.MaxSkillEquipCount
                  )
                ) {
                  c.Game.addToolPercent(-1), (this.ToolBar.progress -= 0.01);
                  var e,
                    t = c.Game.getSkill(),
                    o = "";
                  switch (
                    (console.log(" \u83b7\u5f97\u6280\u80fd:", p.SkillType[t]),
                    t)
                  ) {
                    case p.SkillType.Gold:
                      (e = this.goldSkill.bind(this)),
                        (o = p.UI_Atlas.Skill_Icon_Gold);
                      break;
                    case p.SkillType.Star:
                      (e = this.starSkill.bind(this)),
                        (o = p.UI_Atlas.Skill_Icon_Star);
                      break;
                    case p.SkillType.Time:
                      (e = this.timeSkill.bind(this)),
                        (o = p.UI_Atlas.Skill_Icon_Time);
                      break;
                    case p.SkillType.Magic:
                      (e = this.magicSkill.bind(this)),
                        (o = p.UI_Atlas.Skill_Icon_Magic);
                      break;
                    case p.SkillType.Skip:
                      (e = this.skipSkill.bind(this)),
                        (o = p.UI_Atlas.Skill_Icon_Skip);
                  }
                  for (
                    var i = n.gFactory.getObj(
                        "Skill",
                        e,
                        this.UIAtlas.getSpriteFrame(o),
                        t,
                        this.SkillRoot.childrenCount
                      ),
                      a = 0,
                      l = this.SkillRoot.children;
                    a < l.length;
                    a++
                  ) {
                    l[a].getComponent(_.default).unready();
                  }
                  r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "get_skill"),
                    this.SkillRoot.addChild(i),
                    (i.zIndex = this.SkillRoot.childrenCount);
                }
              }),
              (t.prototype.magicSkill = function () {
                if (c.Game.getGameTime() <= 0)
                  console.log(" game time up - magicSkill");
                else if (
                  c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                )
                  console.log(
                    " \u6b64\u5361\u7247\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1magicSkill"
                  );
                else {
                  var e = c.Game.CurrentReward.children[0];
                  if (e && e.getComponent(T.default)) {
                    var t = e.getComponent(T.default);
                    c.Game.checkIsFullFromWord(
                      this.CardPages.getCurrentPageIndex(),
                      t.Word
                    )
                      ? console.log(
                          " \u6b64\u5217\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1magicSkill"
                        )
                      : c.Game.checkIsFullFromWord2(
                          this.CardPages.getCurrentPageIndex(),
                          t.Word,
                          t.Value
                        )
                      ? console.log(
                          " \u6b64\u5217\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1magicSkill, \u5269\u4f59\u5361\u7247\u8ddfpoint\u70b9\u6570\u4e00\u6837\uff0c\u65e0\u9700\u4f7f\u7528\u9b54\u6cd5\u7403\uff0c"
                        )
                      : c.Game.getCurMode() == p.SkillType.Normal
                      ? (c.Game.pause(),
                        console.log("  \u9b54\u6cd5\u9053\u5177"),
                        this.MagicLayer.show(t.Value),
                        r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "skill"),
                        c.Game.setCurClickMode(p.SkillType.Magic),
                        this.setButtonGroupDefault())
                      : console.log(" not normal mode!magicSkill");
                  } else console.log(" not CurrentRewardmagicSkill !");
                }
              }),
              (t.prototype.starSkill = function () {
                c.Game.getGameTime() <= 0
                  ? console.log(" game time up - starSkill")
                  : (console.log("  \u84dd\u8272\u9053\u5177"),
                    c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                      ? console.log(
                          " \u6b64\u5361\u7247\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1"
                        )
                      : c.Game.getCurMode() == p.SkillType.Normal
                      ? (c.Game.pause(),
                        (this.StarSkillLayer.active = !0),
                        r.gEventMgr.emit(s.GlobalEvent.PLAY_EFFECT, "skill"),
                        c.Game.setCurClickMode(p.SkillType.Star),
                        this.setButtonGroupDefault())
                      : console.log(" not normal mode!"));
              }),
              (t.prototype.skillDone = function () {
                c.Game.resume(),
                  c.Game.setCurClickMode(p.SkillType.Normal),
                  (this.StarSkillLayer.active = !1),
                  this.GoldSkillLayer.hide(),
                  this.SuperSkillLayer.hide(),
                  this.MagicLayer.hide(),
                  this.setButtonGroupUI(),
                  this.updateSuperSkillProgress();
              }),
              (t.prototype.goldSkill = function () {
                c.Game.getGameTime() <= 0
                  ? console.log(" game time up - goldSkill")
                  : (console.log(" \u91d1\u8272\u9053\u5177"),
                    c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                      ? console.log(
                          " \u6b64\u5361\u7247\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1"
                        )
                      : c.Game.getCurMode() == p.SkillType.Normal
                      ? (c.Game.pause(),
                        this.GoldSkillLayer.show(
                          this.CardPages.getCurrentPageIndex()
                        ),
                        c.Game.setCurClickMode(p.SkillType.Gold),
                        this.setButtonGroupDefault())
                      : console.log(" not normal mode!"));
              }),
              (t.prototype.timeSkill = function () {
                c.Game.getGameTime() <= 0
                  ? console.log(" game time up - timeSkill")
                  : (console.log(" \u65f6\u95f4\u9053\u5177"),
                    c.Game.getCurMode() == p.SkillType.Normal
                      ? (c.Game.addGameTime(p.SkillTimeBouns),
                        this.updateSuperSkillProgress(),
                        this.addTime())
                      : console.log(" not normal mode!"));
              }),
              (t.prototype.skipSkill = function () {
                if (c.Game.getGameTime() <= 0)
                  console.log(" game time up - skipSkill");
                else if (
                  (console.log(" \u8df3\u8fc7\u9053\u5177"),
                  c.Game.getCurMode() == p.SkillType.Normal)
                ) {
                  var e = this.CurrentPoint.children[0];
                  if (null != e) {
                    var t = e.getComponent(T.default);
                    null != t
                      ? (this.updateSuperSkillProgress(), t.goToRewardArray())
                      : console.log(" has no point component!");
                  } else console.log(" has no point!");
                } else console.log(" not normal mode!");
              }),
              (t.prototype.superSkill = function () {
                var e = this;
                c.Game.getGameTime() <= 0
                  ? console.log(" game time up superSkill")
                  : this.SuperSkillButton.interactable
                  ? (console.log(" \u8d85\u7ea7\u9053\u5177"),
                    c.Game.checkIsFull(this.CardPages.getCurrentPageIndex())
                      ? console.log(
                          " \u6b64\u5361\u7247\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1"
                        )
                      : c.Game.getCurMode() == p.SkillType.Normal
                      ? (E.WildDaubSignal.inst.dispatchOne(!1),
                        c.Game.pause(),
                        c.Game.clearSkillUseCount(),
                        c.Game.setCurClickMode(p.SkillType.Super),
                        this.setButtonGroupDefault(),
                        r.gEventMgr.once(
                          s.GlobalEvent.SCROLL_CARD,
                          function (t) {
                            e.CardPages.scrollToPage(t, 0),
                              (c.Game.cardIndex = e.CardPages.getCurrentPageIndex()),
                              E.SwitchCardSignal.inst.dispatch();
                            for (
                              var o = 0, i = e.PageTabButtonRoot.children;
                              o < i.length;
                              o++
                            ) {
                              var n = i[o];
                              n.getComponent(cc.Button).interactable =
                                (
                                  e.CardPages.getCurrentPageIndex() + 1
                                ).toString() != n.name;
                            }
                            e.updateButtonGroup();
                          },
                          this
                        ),
                        this.SuperSkillLayer.show())
                      : console.log(" not normal mode!"))
                  : console.log(
                      "this.SuperSkillButton.interactable:",
                      this.SuperSkillButton.interactable
                    );
              }),
              (t.prototype.update = function (e) {
                if (c.Game.isStart) {
                  if (
                    (this.Guide.node.active ||
                      c.Game.isPause() ||
                      this.PauseLayer.node.active ||
                      (c.Game.addGameTime(-e),
                      (this.TimeLabel.string = CMath.TimeFormat(
                        c.Game.getGameTime()
                      )),
                      30 == Math.floor(c.Game.getGameTime()) &&
                        this.TimeLabel.node.getChildByName("noTime") &&
                        this.TimeLabel.node.getChildByName("noTime").opacity <=
                          0 &&
                        (this.TimeLabel.getComponent(cc.Animation).play(),
                        r.gEventMgr.emit(s.GlobalEvent.CHANGE_BGM, "bgm_30")),
                      this.updateTimeCount()),
                    this.ToolBar.progress.toFixed(2) !=
                      this.toolPercent.toFixed(2))
                  ) {
                    var t =
                      0 == this.toolPercent
                        ? -0.1
                        : this.toolPercent > this.ToolBar.progress
                        ? 0.01
                        : -0.01;
                    (this.ToolBar.progress += t),
                      (this.ToolBar.progress = CMath.Clamp(
                        this.ToolBar.progress,
                        1,
                        0
                      ));
                  }
                  this.ToolBar.progress >= 1 && this.addSkill();
                  var o =
                    this.ToolBar.progress >= 1 &&
                    this.SkillRoot.childrenCount >=
                      c.Game.LevelInfo.MaxSkillEquipCount;
                  (c.Game.isToolFull = o),
                    c.Game.isToolFull
                      ? (this.ToolBar.barSprite.spriteFrame !=
                          this.UIAtlas.getSpriteFrame(p.UI_Atlas.Skill_Full) &&
                          r.gEventMgr.emit(
                            s.GlobalEvent.PLAY_EFFECT,
                            "get_horce"
                          ),
                        (this.ToolBar.barSprite.spriteFrame = this.UIAtlas.getSpriteFrame(
                          p.UI_Atlas.Skill_Full
                        )))
                      : (this.ToolBar.barSprite.spriteFrame = this.UIAtlas.getSpriteFrame(
                          p.UI_Atlas.Skill_Normal
                        )),
                    this.showScore != this.score &&
                      ((this.showScore += this.addScoreStep),
                      ((this.addScoreStep > 0 && this.showScore > this.score) ||
                        (this.addScoreStep < 0 &&
                          this.showScore < this.score)) &&
                        (this.showScore = this.score),
                      (this.ScoreLabel.string = Math.floor(
                        this.showScore
                      ).toString()));
                }
                c.Game.isOver &&
                  this.score == this.showScore &&
                  this.completeCallback &&
                  (this.completeCallback(), (this.completeCallback = null));
              }),
              __decorate(
                [M(cc.Animation)],
                t.prototype,
                "ResultAnimation",
                void 0
              ),
              __decorate([M(cc.Node)], t.prototype, "Background", void 0),
              __decorate([M(cc.Node)], t.prototype, "TopNode", void 0),
              __decorate([M(cc.Label)], t.prototype, "TimeLabel", void 0),
              __decorate([M(cc.Label)], t.prototype, "ScoreLabel", void 0),
              __decorate(
                [M(cc.Node)],
                t.prototype,
                "PageTabButtonRoot",
                void 0
              ),
              __decorate(
                [M(cc.SpriteAtlas)],
                t.prototype,
                "ResultTitle",
                void 0
              ),
              __decorate([M(cc.PageView)], t.prototype, "CardPages", void 0),
              __decorate([M(cc.Node)], t.prototype, "CurrentPoint", void 0),
              __decorate([M(cc.Node)], t.prototype, "NextPoint", void 0),
              __decorate([M(cc.Node)], t.prototype, "PointArray", void 0),
              __decorate([M(cc.Node)], t.prototype, "RecycleArray", void 0),
              __decorate([M(cc.Node)], t.prototype, "Help", void 0),
              __decorate([M(u.default)], t.prototype, "Guide", void 0),
              __decorate([M(cc.SpriteAtlas)], t.prototype, "TextAtlas", void 0),
              __decorate([M(cc.SpriteAtlas)], t.prototype, "UIAtlas", void 0),
              __decorate([M(cc.ProgressBar)], t.prototype, "ToolBar", void 0),
              __decorate([M(cc.Button)], t.prototype, "BingoButton", void 0),
              __decorate(
                [M(cc.Button)],
                t.prototype,
                "SuperSkillButton",
                void 0
              ),
              __decorate([M(cc.Node)], t.prototype, "SkillRoot", void 0),
              __decorate([M(cc.Node)], t.prototype, "SuperSkillBar", void 0),
              __decorate(
                [M(cc.Label)],
                t.prototype,
                "CurrentSkillProgressLabel",
                void 0
              ),
              __decorate(
                [M(cc.Label)],
                t.prototype,
                "TotalSkillProgressLabel",
                void 0
              ),
              __decorate([M(cc.Node)], t.prototype, "StarSkillLayer", void 0),
              __decorate([M(m.default)], t.prototype, "GoldSkillLayer", void 0),
              __decorate([M(b.default)], t.prototype, "MagicLayer", void 0),
              __decorate(
                [M(f.default)],
                t.prototype,
                "SuperSkillLayer",
                void 0
              ),
              __decorate([M(y.default)], t.prototype, "ResultLayer", void 0),
              __decorate([M(S.default)], t.prototype, "LoadLayer", void 0),
              __decorate([M(cc.SpriteAtlas)], t.prototype, "TimeFont", void 0),
              __decorate(
                [M(cc.Animation)],
                t.prototype,
                "SuperAnimation",
                void 0
              ),
              __decorate([M(cc.Sprite)], t.prototype, "StartTimeCount", void 0),
              __decorate(
                [M(cc.Label)],
                t.prototype,
                "StartTimeCountLabel",
                void 0
              ),
              __decorate(
                [M(cc.SpriteAtlas)],
                t.prototype,
                "StartTimeAtlas",
                void 0
              ),
              __decorate([M(C.default)], t.prototype, "PauseLayer", void 0),
              __decorate([M(cc.Button)], t.prototype, "ChangeButton", void 0),
              (t = __decorate([G], t))
            );
          })(cc.Component);
        (o.default = L), cc._RF.pop();
      },
      {
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
        "./Skill": "Skill",
        "./SuperSkillLayer": "SuperSkillLayer",
        "./UI/Pad": "Pad",
        "./Utils/GameSignal": "GameSignal",
      },
    ],
    GameSignal: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "86d8esA/XBG4ZFK+CkGs+KY", "GameSignal"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Signal"),
          n = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return __extends(t, e), t;
          })(i.BaseSignal);
        o.SkillFullSignal = n;
        var r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return __extends(t, e), t;
        })(i.BaseSignal);
        o.BingoSignal = r;
        var a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return __extends(t, e), t;
        })(i.BaseSignal);
        o.WildDaubSignal = a;
        var l = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return __extends(t, e), t;
        })(i.BaseSignal);
        o.UpdateCardNumberSignal = l;
        var s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return __extends(t, e), t;
        })(i.BaseSignal);
        o.UpdateCardNumberOpciatySignal = s;
        var c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return __extends(t, e), t;
        })(i.BaseSignal);
        o.SwitchCardSignal = c;
        var u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return __extends(t, e), t;
        })(i.BaseSignal);
        (o.ResultLayerShow = u), cc._RF.pop();
      },
      { "./Signal": "Signal" },
    ],
    Game: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "af369eKsM9Cn4vz3KUTDwcJ", "Game"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./EventManager"),
          n = e("./EventName"),
          r = e("../Const"),
          a = e("../Utils/HashMap"),
          l = e("./CelerSDK"),
          s = e("../Utils/GameSignal"),
          c = (function () {
            function e() {
              (this.CurrentReward = null),
                (this.RewardArray = null),
                (this.TopNode = null),
                (this.FontRoot = null),
                (this.score = 0),
                (this.level = 1),
                (this.bingoScore = {}),
                (this.overBingoTimes = new a.HashMap()),
                (this.numberRandomPool = []),
                (this.currentCardPool = new a.HashMap()),
                (this.skillUseCount = 0),
                (this.streak = 0),
                (this.maxStreak = 0),
                (this.cardAllBingoCount = new a.HashMap()),
                (this.highLightCardCount = new a.HashMap()),
                (this.highLightCardCountByWord = new a.HashMap()),
                (this.currentCardByWord = new a.HashMap()),
                (this.goldSelectValue = 0),
                (this.currentSkillPool = []),
                (this.skillUsedRecord = []),
                (this.totalOverBingoTimes = 0),
                (this.totalHighLightCount = 0),
                (this.cardIndex = 0),
                (this.skillGuide = {}),
                (this.LevelInfo = null),
                (this.superWrongCount = 0),
                (this.superHighLightCount = 0),
                (this.bingoCache = new a.HashMap()),
                (this.toolPercent = 0),
                (this.gameTime = 0),
                (this.ispause = !1),
                (this.cardNumber = 0),
                (this.pauseCount = 0),
                (this.isStart = !1),
                (this.isOver = !1),
                (this.isCheckScore = !1),
                (this.isToolFull = !1),
                (this.TIME_TOOL_COUNT_LIMIT = 2),
                (this.SKIP_TOOL_COUNT_LIMIT = 2),
                (this.timeToolTotalCount = 0),
                (this.skipToolTotalCount = 0),
                (this.toolRound = 0),
                (this.hasDaubMagicBall = !1),
                (this.sameColorCount = {});
            }
            return (
              Object.defineProperty(e, "inst", {
                get: function () {
                  return this.ins ? this.ins : (this.ins = new e());
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.start = function () {
                (this.isStart = !0),
                  (this.isOver = !1),
                  (this.isCheckScore = !1);
              }),
              (e.prototype.addPauseCount = function () {
                this.pauseCount++,
                  console.log(" pause Count:", this.pauseCount),
                  this.pauseCount > r.PauseLimit &&
                    o.Game.addScore(
                      r.ScoreType.Oops,
                      -r.PausePenilty * (this.pauseCount - r.PauseLimit - 1) -
                        r.PausePenilthBase,
                      1
                    );
              }),
              (e.prototype.getPauseCount = function () {
                return this.pauseCount;
              }),
              Object.defineProperty(e.prototype, "Level", {
                get: function () {
                  return this.level;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.setLevel = function (e) {
                (this.level = 2),
                  (this.LevelInfo = r.GameLevel[this.level]),
                  console.log(
                    " set level:",
                    this.level,
                    ", level info:",
                    this.LevelInfo
                  );
              }),
              (e.prototype.checkScore = function () {
                this.isCheckScore;
              }),
              (e.prototype.superStart = function () {
                (this.superHighLightCount = 0), (this.superWrongCount = 0);
              }),
              (e.prototype.pause = function () {
                console.log(" game --- pause "), (this.ispause = !0);
              }),
              (e.prototype.resume = function () {
                console.log(" game --- resume "), (this.ispause = !1);
              }),
              (e.prototype.getAllBingoCardCount = function () {
                return this.cardAllBingoCount.keys.length;
              }),
              (e.prototype.addAllBingoCardCount = function (e) {
                this.cardAllBingoCount.add(e, 1),
                  console.log(
                    " card complete bingo:",
                    this.cardAllBingoCount.keys.length,
                    " , extra score:",
                    r.Score.AllBingo
                  ),
                  this.addScore(r.ScoreType.AllBingo, r.Score.AllBingo, 1);
              }),
              (e.prototype.getNextPoint = function () {
                return window.chichihaoshuaihahaha
                  ? this.getNextCurrentCardPoint(this.cardIndex, !1)
                  : this.numberRandomPool.length > 0
                  ? this.numberRandomPool.pop()
                  : (console.log("  over type pool clear !!"),
                    Math.floor(75 * CMath.getRandom() + 1));
              }),
              (e.prototype.setCurClickMode = function (e) {
                this.curClickMode != e &&
                  ((this.curClickMode = e),
                  this.curClickMode != r.SkillType.Normal &&
                    s.WildDaubSignal.inst.dispatchOne(!1),
                  i.gEventMgr.emit(n.GlobalEvent.CHANGE_GAME_MODE));
              }),
              (e.prototype.getCurMode = function () {
                return this.curClickMode;
              }),
              (e.prototype.getScore = function () {
                return this.score;
              }),
              (e.prototype.addScore = function (e, t, o, r) {
                t > 0 ? this.addStreak() : this.clearStreak(),
                  this.score + t < 0 && (t = -this.score),
                  0 != t
                    ? (t < 0 && this.clearToolPercent(),
                      (this.score += t),
                      (this.score = Math.max(0, this.score)),
                      this.addBingoScore(e, t),
                      i.gEventMgr.emit(n.GlobalEvent.ADD_SCORE, e, t, o, r))
                    : i.gEventMgr.emit(n.GlobalEvent.PLAY_EFFECT, "oop");
              }),
              (e.prototype.addStreak = function () {
                this.streak++, this.maxStreak++;
              }),
              (e.prototype.clearStreak = function () {
                this.streak = 0;
              }),
              (e.prototype.getCardNumber = function () {
                return this.cardNumber;
              }),
              (e.prototype.addToolPercent = function (e) {
                "number" == typeof e
                  ? o.Game.isToolFull && e > 0
                    ? console.log(" tool full:", this.toolPercent, ", add:", e)
                    : ((this.toolPercent += e),
                      console.log(
                        " tool percent:",
                        this.toolPercent,
                        ", add:",
                        e
                      ),
                      i.gEventMgr.emit(n.GlobalEvent.UPDATE_TOOL_PERCENT))
                  : console.error(" tool percent is not a number !");
              }),
              (e.prototype.clearToolPercent = function () {
                (this.toolPercent = 0),
                  i.gEventMgr.emit(n.GlobalEvent.UPDATE_TOOL_PERCENT);
              }),
              (e.prototype.getToolPercent = function () {
                return this.toolPercent;
              }),
              (e.prototype.pushBingoCache = function (e, t) {
                this.bingoCache.has(e)
                  ? this.bingoCache.get(e).push(t)
                  : this.bingoCache.add(e, [t]);
              }),
              (e.prototype.popBingoCache = function (e) {
                if (this.bingoCache.has(e)) {
                  var t = this.bingoCache.get(e).pop();
                  return (
                    this.bingoCache.get(e).length <= 0 &&
                      this.bingoCache.remove(e),
                    t
                  );
                }
                return null;
              }),
              (e.prototype.canBingo = function (e) {
                return (
                  this.bingoCache.has(e) && this.bingoCache.get(e).length > 0
                );
              }),
              (e.prototype.addCurrentCardValue = function (e, t) {
                this.currentCardPool.has(e)
                  ? this.currentCardPool.get(e).push(t)
                  : this.currentCardPool.add(e, [t]);
              }),
              (e.prototype.addCurrentCardValueByWord = function (e, t, o) {
                var i;
                this.currentCardByWord.has(e)
                  ? (i = this.currentCardByWord.get(e)).has(o)
                    ? i.get(o).push(t)
                    : i.add(o, [t])
                  : ((i = new a.HashMap()).add(o, [t]),
                    this.currentCardByWord.add(e, i));
              }),
              (e.prototype.replaceCurrentCardValue = function (e, t, o) {
                if (this.currentCardPool.has(e)) {
                  var i = this.currentCardPool.get(e).indexOf(t);
                  i >= 0 && this.currentCardPool.get(e).splice(i, 1),
                    this.currentCardPool.get(e).push(o);
                } else
                  console.warn(
                    " replace null page:",
                    e,
                    ", old:",
                    t,
                    ", new :",
                    o
                  ),
                    this.currentCardPool.add(e, [o]);
              }),
              (e.prototype.replaceCurrentCardValueByWord = function (
                e,
                t,
                o,
                i
              ) {
                var n;
                if (this.currentCardByWord.has(e))
                  if ((n = this.currentCardByWord.get(e)).has(i)) {
                    var l = n.get(i).indexOf(t);
                    l >= 0 && n.get(i).splice(l, 1), n.get(i).push(o);
                  } else
                    console.warn(
                      " replace a null word value, page:",
                      e,
                      " , old\uff1a",
                      t,
                      ", new :",
                      o,
                      ", word:",
                      r.CardWord[i]
                    ),
                      n.add(i, [o]);
                else
                  console.warn(
                    " replace a null page value, page:",
                    e,
                    " , old\uff1a",
                    t,
                    ", new :",
                    o,
                    ", word:",
                    r.CardWord[i]
                  ),
                    (n = new a.HashMap()).add(i, [o]),
                    this.currentCardByWord.add(e, n);
              }),
              (e.prototype.getCurrentCardValue = function () {
                return this.currentCardPool;
              }),
              (e.prototype.getCurrentPageValues = function (e) {
                return this.currentCardPool.has(e)
                  ? this.currentCardPool.get(e).concat()
                  : [];
              }),
              (e.prototype.delCurrentCardValue = function (e, t) {
                if (this.currentCardPool.has(e)) {
                  var o = this.currentCardPool.get(e).indexOf(t);
                  console.log(
                    " del current card :",
                    e,
                    " , val:",
                    t,
                    ", index:",
                    o
                  ),
                    o >= 0 &&
                      (this.currentCardPool.get(e).splice(o, 1),
                      console.log(
                        " del card val:",
                        this.currentCardPool.get(e).length
                      ),
                      this.currentCardPool.get(e).length <= 0 &&
                        this.currentCardPool.remove(e));
                }
              }),
              (e.prototype.deleteCurrentCardValueByWord = function (e, t, o) {
                if (0 != this.currentCardByWord.has(e)) {
                  var i = this.currentCardByWord.get(e);
                  if (0 != i.has(o)) {
                    var n = i.get(o).indexOf(t);
                    n >= 0 &&
                      (i.get(o).splice(n, 1),
                      i.get(o).length <= 0 && i.remove(o));
                  }
                }
              }),
              (e.prototype.getNextCurrentCardPoint = function (e, t, o) {
                if (
                  (void 0 === t && (t = !1),
                  void 0 === o && (o = !0),
                  !this.currentCardPool.has(e))
                )
                  return Math.floor(75 * CMath.getRandom() + 1);
                if (this.currentCardPool.length > 0) {
                  var i = 0;
                  if (t) {
                    var n = Math.floor(
                      CMath.getRandom(0, this.currentCardPool.get(e).length)
                    );
                    (i = this.currentCardPool.get(e)[n]),
                      o && this.currentCardPool.get(e).splice(n, 1);
                  } else if (o) i = this.currentCardPool.get(e).pop();
                  else {
                    var r = this.currentCardPool.get(e).length - 1;
                    i = this.currentCardPool.get(e)[r];
                  }
                  return (
                    this.currentCardPool.get(e).length <= 0 &&
                      this.currentCardPool.remove(e),
                    i
                  );
                }
                return Math.floor(75 * CMath.getRandom() + 1);
              }),
              (e.prototype.getOverBingoTimes = function (e) {
                return this.overBingoTimes.get(e);
              }),
              (e.prototype.getTotalBingoTimes = function () {
                return this.totalOverBingoTimes;
              }),
              (e.prototype.addHighLightCardByWord = function (e, t) {
                this.highLightCardCountByWord.has(e) ||
                  this.highLightCardCountByWord.add(e, new a.HashMap());
                var o = this.highLightCardCountByWord.get(e);
                o.has(t) || o.add(t, 0), o.add(t, o.get(t) + 1);
              }),
              (e.prototype.addHighLightCard = function (e) {
                this.highLightCardCount.has(e) ||
                  this.highLightCardCount.add(e, 0),
                  this.highLightCardCount.add(
                    e,
                    this.highLightCardCount.get(e) + 1
                  ),
                  this.curClickMode == r.SkillType.Super &&
                    this.highLightCardCount.get(e) >= 25 &&
                    i.gEventMgr.emit(n.GlobalEvent.SUPER_END_COMPLETE),
                  this.totalHighLightCount++,
                  console.log(
                    "--------\u5361\u7247-",
                    e,
                    "- \u70b9\u4eae:",
                    this.highLightCardCount.get(e),
                    " \u5f20",
                    " , \u603b\u5171\u70b9\u4eae:",
                    this.totalHighLightCount
                  );
              }),
              (e.prototype.addOverBingoTimes = function (e) {
                this.overBingoTimes.has(e) || this.overBingoTimes.add(e, 0),
                  this.totalOverBingoTimes++,
                  this.overBingoTimes.add(e, this.overBingoTimes.get(e) + 1),
                  console.log(
                    "--------\u5361\u7247-",
                    e,
                    "- \u53e0\u52a0bingo:",
                    this.overBingoTimes.get(e),
                    " \u6b21",
                    " , \u603b\u5171\u53e0\u52a0bingo:",
                    this.totalOverBingoTimes
                  ),
                  this.overBingoTimes.get(e) >= 39 &&
                    (console.log(" card:", e, " has all bingo!!"),
                    this.addAllBingoCardCount(e));
              }),
              (e.prototype.checkIsComplete = function () {
                this.cardAllBingoCount.keys.length >= this.cardNumber &&
                  (console.log(
                    this.cardNumber,
                    " all cards has all complete bingo! \u725b\u6279\u725b\u6279:",
                    this.bingoScore[r.ScoreType[r.ScoreType.OverBingoScore]]
                  ),
                  i.gEventMgr.emit(
                    n.GlobalEvent.GAME_OVER,
                    r.OverType.AllBingo
                  ));
              }),
              (e.prototype.checkIsFull = function (e) {
                return (
                  this.highLightCardCount.get(e) &&
                  this.highLightCardCount.get(e) >= 25
                );
              }),
              (e.prototype.checkIsFullFromWord = function (e, t) {
                var o = this.highLightCardCountByWord.get(e);
                if (!o) return !1;
                var i = o.get(t);
                return !!i && i >= 5;
              }),
              (e.prototype.checkIsFullFromWord2 = function (e, t, o) {
                console.log(
                  " check magic :",
                  e,
                  ", word:",
                  r.CardWord[t],
                  ", val:",
                  o
                ),
                  console.log(this.currentCardByWord);
                var i = this.currentCardByWord.get(e);
                if (!i) return !1;
                var n = i.get(t);
                return !(null == n || n.length > 1) && n[0] == o;
              }),
              (e.prototype.clearSkillUseCount = function () {
                this.skillUseCount = 0;
              }),
              (e.prototype.getSkillUsePercent = function () {
                return this.skillUseCount / o.Game.LevelInfo.TotalSkillCount;
              }),
              (e.prototype.getCurrentSkillUseCount = function () {
                return this.skillUseCount;
              }),
              (e.prototype.initSkillPool = function (e) {
                for (
                  var t = this.LevelInfo.Skills.all,
                    o = this.LevelInfo.Skills.first3Round,
                    i = 0;
                  i < e;
                  i++
                ) {
                  var n,
                    a = [];
                  if (
                    (this.toolRound++,
                    (a = this.toolRound <= 3 ? o.concat() : t.concat()),
                    this.timeToolTotalCount >= this.TIME_TOOL_COUNT_LIMIT)
                  )
                    (n = a.indexOf(r.SkillType.Time)) >= 0 && a.splice(n, 1);
                  if (this.skipToolTotalCount >= this.SKIP_TOOL_COUNT_LIMIT)
                    (n = a.indexOf(r.SkillType.Skip)) >= 0 && a.splice(n, 1);
                  if (
                    (this.skillUsedRecord[this.skillUsedRecord.length - 1] ==
                      r.SkillType.Time &&
                      0 == i &&
                      this.skillUsedRecord.length > 0) ||
                    (i > 0 &&
                      this.currentSkillPool[this.currentSkillPool.length - 1] ==
                        r.SkillType.Time)
                  )
                    (n = a.indexOf(r.SkillType.Time)) >= 0 && a.splice(n, 1);
                  if (
                    0 == i &&
                    this.skillUsedRecord.length >= 2 &&
                    this.skillUsedRecord[this.skillUsedRecord.length - 1] ==
                      this.skillUsedRecord[this.skillUsedRecord.length - 2]
                  )
                    (n = a.indexOf(
                      this.skillUsedRecord[this.skillUsedRecord.length - 1]
                    )) >= 0 && a.splice(n, 1);
                  if (
                    i >= 2 &&
                    this.currentSkillPool.length >= 2 &&
                    this.currentSkillPool[this.currentSkillPool.length - 1] ==
                      this.currentSkillPool[this.currentSkillPool.length - 2]
                  )
                    (n = a.indexOf(
                      this.currentSkillPool[this.currentSkillPool.length - 1]
                    )) >= 0 && a.splice(n, 1);
                  a.length <= 0 &&
                    (a = this.toolRound <= 3 ? o.concat() : t.concat());
                  for (var l = [], s = 0, c = a; s < c.length; s++) {
                    var u = c[s];
                    l.push(r.SkillType[u]);
                  }
                  (g = a[Math.floor(CMath.getRandom(0, a.length))]) ==
                  r.SkillType.Time
                    ? this.timeToolTotalCount++
                    : g == r.SkillType.Skip && this.skipToolTotalCount++,
                    console.log("i:", i, ", skill:", r.SkillType[g]),
                    this.currentSkillPool.push(g);
                }
                for (
                  var h = [], p = 0, d = this.currentSkillPool;
                  p < d.length;
                  p++
                ) {
                  var g = d[p];
                  h.push(r.SkillType[g]);
                }
                console.log("  skill pool init ", h);
              }),
              (e.prototype.useSkill = function (e) {
                this.skillUsedRecord.push(e),
                  this.skillUseCount >= o.Game.LevelInfo.TotalSkillCount ||
                    (this.skillUseCount += 1);
              }),
              (e.prototype.getSkill = function () {
                return (
                  this.currentSkillPool.length <= 0 && this.initSkillPool(10),
                  this.currentSkillPool.shift()
                );
              }),
              (e.prototype.setEasy = function () {
                var e, t, i, n, r;
                if (1 == o.Game.Level && 0 != l.CelerSDK.inst.isNew()) {
                  for (
                    var a = 30,
                      s = 0,
                      c = 0,
                      u = this.getCurrentPageValues(0).concat(),
                      h = this.numberRandomPool.concat();
                    a--;

                  )
                    u.indexOf(h.pop()) >= 0 && (a > 20 ? c++ : s++);
                  console.log(
                    "\u524d10\u4e2a\u539f\u672c\u5339\u914d\u4e86",
                    c
                  );
                  var p = Math.max(5 - c, 0);
                  console.log(
                    "\u524d10\u4e2a\u9700\u8981\u547d\u4e2d\u81f3\u5c11\uff1a",
                    p,
                    "\u4e2a"
                  );
                  for (
                    var d = this.getCurrentPageValues(0).concat(), g = 0;
                    g < d.length;
                    g++
                  ) {
                    (e = [
                      d[(C = Math.floor(CMath.getRandom() * d.length))],
                      d[g],
                    ]),
                      (d[g] = e[0]),
                      (d[C] = e[1]);
                  }
                  var m = [];
                  for (g = 1; g <= 10; g++)
                    m.push(this.numberRandomPool.length - g);
                  for (g = 0; g < m.length; g++) {
                    (t = [
                      m[(C = Math.floor(CMath.getRandom() * m.length))],
                      m[g],
                    ]),
                      (m[g] = t[0]),
                      (m[C] = t[1]);
                  }
                  for (; m.length > 0 && p > 0 && d.length > 0; ) {
                    g = m.pop();
                    if (d.indexOf(this.numberRandomPool[g]) < 0) {
                      for (
                        var f = d[(v = 0)],
                          y = this.numberRandomPool.indexOf(f);
                        (y < 0 || y >= this.numberRandomPool.length - 10) &&
                        v < d.length;

                      )
                        (f = d[++v]), (y = this.numberRandomPool.indexOf(f));
                      v < d.length &&
                        y >= 0 &&
                        y < this.numberRandomPool.length - 10 &&
                        ((i = [
                          this.numberRandomPool[y],
                          this.numberRandomPool[g],
                        ]),
                        (this.numberRandomPool[g] = i[0]),
                        (this.numberRandomPool[y] = i[1]),
                        p--,
                        d.splice(v, 1));
                    }
                  }
                  for (
                    a = 30,
                      s = 0,
                      u = this.getCurrentPageValues(0).concat(),
                      h = this.numberRandomPool.concat();
                    a--;

                  )
                    u.indexOf(h.pop()) >= 0 && (a > 20 ? c++ : s++);
                  console.log(
                    " \u540e20\u4e2a\u539f\u672c\u5339\u914d\u4e86",
                    s
                  );
                  var S = Math.min(d.length, Math.max(5 - s, 0));
                  console.log(
                    "10-30\u4e2a\u9700\u8981\u547d\u4e2d\u81f3\u5c11\uff1a",
                    S,
                    "\u4e2a",
                    ",\u5269\u4f59\u5361\u7247\u6570\u5b57:",
                    d.length,
                    "\u4e2a"
                  ),
                    (m = []);
                  for (g = 11; g <= 30; g++)
                    m.push(this.numberRandomPool.length - g);
                  for (g = 0; g < m.length; g++) {
                    var C;
                    (n = [
                      m[(C = Math.floor(CMath.getRandom() * m.length))],
                      m[g],
                    ]),
                      (m[g] = n[0]),
                      (m[C] = n[1]);
                  }
                  for (; m.length > 0 && S > 0 && d.length > 0; ) {
                    g = m.pop();
                    if (d.indexOf(this.numberRandomPool[g]) < 0) {
                      var v;
                      for (
                        f = d[(v = 0)], y = this.numberRandomPool.indexOf(f);
                        (y < 0 || y >= this.numberRandomPool.length - 30) &&
                        v < d.length;

                      )
                        (f = d[++v]), (y = this.numberRandomPool.indexOf(f));
                      v < d.length &&
                        y >= 0 &&
                        y < this.numberRandomPool.length - 30 &&
                        ((r = [
                          this.numberRandomPool[y],
                          this.numberRandomPool[g],
                        ]),
                        (this.numberRandomPool[g] = r[0]),
                        (this.numberRandomPool[y] = r[1]),
                        S--,
                        d.splice(v, 1));
                    }
                  }
                  for (
                    a = 31,
                      s = 0,
                      c = 0,
                      u = this.getCurrentPageValues(0).concat(),
                      h = this.numberRandomPool.concat();
                    a--;

                  )
                    u.indexOf(h.pop()) >= 0 && (a > 20 ? c++ : s++);
                  console.log(
                    "\u524d10\u4e2a\u73b0\u5728\u5339\u914d\u4e86",
                    c,
                    ", \u540e20\u4e2a\u73b0\u5728\u5339\u914d\u4e86",
                    s
                  );
                }
              }),
              (e.prototype.prepare = function () {
                (this.sameColorCount = {}),
                  (this.score = 0),
                  (this.gameTime = this.LevelInfo.GameTime),
                  (this.streak = 0),
                  (this.maxStreak = 0),
                  (this.curClickMode = r.SkillType.Normal),
                  this.overBingoTimes.clear(),
                  (this.totalOverBingoTimes = 0),
                  (this.totalHighLightCount = 0),
                  this.highLightCardCount.clear(),
                  (this.toolPercent = 0),
                  (this.bingoScore = {}),
                  this.bingoCache.clear(),
                  this.currentCardPool.clear(),
                  (this.currentSkillPool = []),
                  (this.skillUsedRecord = []),
                  (this.skillUseCount = 0),
                  (this.ispause = !1),
                  (this.isOver = !1),
                  (this.isCheckScore = !1),
                  this.cardAllBingoCount.clear(),
                  (this.numberRandomPool.length =
                    r.TargetRange.End - r.TargetRange.Start + 1);
                for (var e = [], t = 1; t <= this.numberRandomPool.length; t++)
                  e.push(t);
                for (t = r.TargetRange.Start; t <= r.TargetRange.End; t++) {
                  for (
                    var o = Math.floor(CMath.getRandom(0, e.length)),
                      i = e[o],
                      n = t - 1,
                      a = e.concat();
                    this.sameColorCount[Math.ceil(i / r.CardStep)] &&
                    this.sameColorCount[Math.ceil(i / r.CardStep)] >= 4 &&
                    a.length > 0;

                  ) {
                    if ((a.splice(o, 1), 0 == a.length)) {
                      console.error(
                        "\u968f\u673a\u6570\u961f\u5217\u7a7a\u4e86"
                      );
                      break;
                    }
                    i = a[(o = Math.floor(CMath.getRandom(0, a.length)))];
                  }
                  (void 0 != i && NaN != i && "number" == typeof i) ||
                    (console.error(" \u968f\u673a\u6570\u9519\u8bef:", o),
                    (i = e[(o = Math.floor(CMath.getRandom(0, e.length)))])),
                    (this.numberRandomPool[n] = i),
                    (o = e.indexOf(i)),
                    this.sameColorCount.type &&
                    this.sameColorCount.type == Math.ceil(i / r.CardStep)
                      ? this.sameColorCount[Math.ceil(i / r.CardStep)]++
                      : (this.sameColorCount = {}),
                    (this.sameColorCount.type = Math.ceil(i / r.CardStep)),
                    o >= 0 && e.splice(o, 1);
                }
                console.log(
                  " ------------------ \u968f\u673a\u6c60 --------------------"
                ),
                  console.log(this.numberRandomPool.join(",")),
                  console.log(
                    this.numberRandomPool
                      .concat()
                      .sort(function (e, t) {
                        return e - t;
                      })
                      .join(",")
                  );
                var l = this.numberRandomPool.concat();
                for (t = 0; t < l.length; t++)
                  l[t] = Math.ceil(l[t] / r.CardStep);
                console.log(
                  "--------\u9a8c\u8bc1\u662f\u5426\u6709\u8fde\u7eed4\u4e2a\u540c\u8272"
                ),
                  console.log(l.join(" - ")),
                  console.log(this.sameColorCount),
                  (this.cardNumber = this.LevelInfo.CardNumber),
                  console.log(" \u5361\u7247\u6570\u91cf:", this.cardNumber);
                for (t = 0; t < 5; t++)
                  this.Theme =
                    r.ThemePool[
                      Math.floor(CMath.getRandom(0, r.ThemePool.length))
                    ];
                console.log("\u6e38\u620f\u4e3b\u9898:", r.Theme[this.Theme]);
              }),
              (e.prototype.addGameTime = function (e) {
                (this.gameTime += e),
                  this.gameTime <= 0 &&
                    ((this.gameTime = 0),
                    i.gEventMgr.emit(
                      n.GlobalEvent.GAME_OVER,
                      r.OverType.TimeUp
                    ));
              }),
              (e.prototype.getGameTime = function () {
                return this.gameTime;
              }),
              (e.prototype.addBingoScore = function (e, t) {
                var o = r.ScoreType[e];
                switch (
                  (this.bingoScore[o] || (this.bingoScore[o] = 0),
                  (this.bingoScore[o] += t),
                  this.addToolPercent(r.ToolPercent[o]),
                  this.bingoScore[r.ScoreType[r.ScoreType.TotalScore]] ||
                    (this.bingoScore[r.ScoreType[r.ScoreType.TotalScore]] = 0),
                  (this.bingoScore[r.ScoreType[r.ScoreType.TotalScore]] += t),
                  e)
                ) {
                  case r.ScoreType.Gold:
                  case r.ScoreType.Star:
                  case r.ScoreType.Mouse:
                  case r.ScoreType.Perfect:
                  case r.ScoreType.Nice:
                  case r.ScoreType.Great:
                    var i = r.ScoreCountType[r.ScoreCountType.SpeedBonusCount],
                      n = r.ScoreCountType[r.ScoreCountType.CorrectCount],
                      a = r.ScoreType[r.ScoreType.CorrectScore],
                      l = r.ScoreType[r.ScoreType.SpeedScore];
                    this.bingoScore[n] || (this.bingoScore[n] = 0),
                      this.bingoScore[n]++,
                      this.bingoScore[a] || (this.bingoScore[a] = 0),
                      (this.bingoScore[a] += r.Score.Normal);
                    var s = t - r.Score.Normal;
                    s > 0
                      ? (this.bingoScore[i] || (this.bingoScore[i] = 0),
                        this.bingoScore[i]++,
                        this.bingoScore[l] || (this.bingoScore[l] = 0),
                        (this.bingoScore[l] += s))
                      : console.log(
                          " special should not smaller than normal score:",
                          t,
                          ", type:",
                          a
                        );
                    break;
                  case r.ScoreType.Oops:
                    var c = r.ScoreCountType[r.ScoreCountType.OopCount],
                      u = r.ScoreType[r.ScoreType.OopScore];
                    this.bingoScore[u] || (this.bingoScore[u] = 0),
                      (this.bingoScore[u] += t),
                      this.bingoScore[c] || (this.bingoScore[c] = 0),
                      this.bingoScore[c]++;
                    break;
                  case r.ScoreType.Bingo:
                    var h = r.ScoreType[r.ScoreType.BingoScore],
                      p = r.ScoreCountType[r.ScoreCountType.BingoCount];
                    this.bingoScore[h] || (this.bingoScore[h] = 0),
                      (this.bingoScore[h] += t),
                      this.bingoScore[p] || (this.bingoScore[p] = 0),
                      this.bingoScore[p]++;
                    break;
                  case r.ScoreType.AllBingo:
                    var d = r.ScoreType[r.ScoreType.AllBingoScore],
                      g = r.ScoreCountType[r.ScoreCountType.AllBingoCount];
                    this.bingoScore[d] || (this.bingoScore[d] = 0),
                      (this.bingoScore[d] += t),
                      this.bingoScore[g] || (this.bingoScore[g] = 0),
                      this.bingoScore[g]++;
                    break;
                  case r.ScoreType.OverBingo:
                    var m = r.ScoreType[r.ScoreType.OverBingoScore],
                      f = r.ScoreCountType[r.ScoreCountType.OverBingoCount];
                    this.bingoScore[m] || (this.bingoScore[m] = 0),
                      (this.bingoScore[m] += t),
                      this.bingoScore[f] || (this.bingoScore[f] = 0),
                      this.bingoScore[f]++;
                    break;
                  case r.ScoreType.Normal:
                    var y = r.ScoreType[r.ScoreType.CorrectScore],
                      S = r.ScoreCountType[r.ScoreCountType.CorrectCount];
                    this.bingoScore[y] || (this.bingoScore[y] = 0),
                      (this.bingoScore[y] += t),
                      this.bingoScore[S] || (this.bingoScore[S] = 0),
                      this.bingoScore[S]++;
                }
              }),
              (e.prototype.getBingoScore = function () {
                return this.bingoScore;
              }),
              (e.prototype.isPause = function () {
                return this.ispause;
              }),
              e
            );
          })();
        (o.Game = c.inst), cc._RF.pop();
      },
      {
        "../Const": "Const",
        "../Utils/GameSignal": "GameSignal",
        "../Utils/HashMap": "HashMap",
        "./CelerSDK": "CelerSDK",
        "./EventManager": "EventManager",
        "./EventName": "EventName",
      },
    ],
    GoldSkillLayer: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5c379TpPltKe7icSxr7Juma", "GoldSkillLayer"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Point"),
          n = e("./Controller/Game"),
          r = e("./Const"),
          a = e("./Controller/EventManager"),
          l = e("./Controller/EventName"),
          s = cc._decorator,
          c = s.ccclass,
          u =
            (s.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.selectTime = 0), (t.clickTime = 0), (t.pause = !1), t;
              }
              return (
                __extends(t, e),
                Object.defineProperty(t.prototype, "SelectLayer", {
                  get: function () {
                    return this.node.getChildByName("Select");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "SelectTimeBar", {
                  get: function () {
                    return this.SelectLayer.getChildByName(
                      "SelectTimeBar"
                    ).getComponent(cc.ProgressBar);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "SelectTimeLabel", {
                  get: function () {
                    return this.SelectTimeBar.node
                      .getChildByName("TimeLabel")
                      .getComponent(cc.Label);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "ClickTimeLabel", {
                  get: function () {
                    return this.ClickTimeBar.node
                      .getChildByName("TimeLabel")
                      .getComponent(cc.Label);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "SelectPointRoot", {
                  get: function () {
                    return this.SelectLayer.getChildByName("SelectRoot");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "CurrentPoint", {
                  get: function () {
                    return this.node
                      .getChildByName("CurrentPoint")
                      .getComponent(i.default);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Desk", {
                  get: function () {
                    return this.node.getChildByName("Desk");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "ClickTimeBar", {
                  get: function () {
                    return this.node
                      .getChildByName("ClickTimeBar")
                      .getComponent(cc.ProgressBar);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onLoad = function () {
                  var e = this;
                  (this.node.scale = 0),
                    a.gEventMgr.targetOff(this),
                    a.gEventMgr.on(
                      l.GlobalEvent.GOLD_POINT_SELECT_DONE,
                      this.selectDone,
                      this
                    ),
                    a.gEventMgr.on(
                      l.GlobalEvent.ON_HIDE,
                      function () {
                        setTimeout(function () {
                          console.log(
                            "gold skill pause:",
                            r.SkillType[n.Game.getCurMode()]
                          ),
                            (e.pause = !0);
                        }, 0);
                      },
                      this
                    ),
                    a.gEventMgr.on(
                      l.GlobalEvent.SKILL_RESUME,
                      function () {
                        setTimeout(function () {
                          console.log(
                            "gold skill resume:",
                            r.SkillType[n.Game.getCurMode()]
                          ),
                            (e.pause = !1);
                        }, 0);
                      },
                      this
                    );
                }),
                (t.prototype.show = function (e) {
                  a.gEventMgr.emit(l.GlobalEvent.PLAY_EFFECT, "skill"),
                    (this.pageIndex = e),
                    (this.node.active = !0),
                    (this.Desk.active = !1),
                    (this.SelectLayer.active = !0),
                    (this.CurrentPoint.node.active = !1),
                    (this.selectTime =
                      n.Game.LevelInfo.GoldSkillTimeLimit.Select),
                    (this.clickTime =
                      n.Game.LevelInfo.GoldSkillTimeLimit.Click),
                    (this.node.scale = 1);
                  var t = n.Game.getCurrentPageValues(0).concat(
                    n.Game.getCurrentPageValues(1)
                  );
                  if (
                    ((this.SelectPointRoot.getComponent(cc.Layout).enabled =
                      t.length >= 4),
                    t.length < 4)
                  )
                    switch (t.length) {
                      case 1:
                        (this.SelectPointRoot.x = 231),
                          (this.SelectPointRoot.y = -75),
                          (this.SelectPointRoot.children[2].x = -235);
                        break;
                      case 2:
                        (this.SelectPointRoot.x = 0),
                          (this.SelectPointRoot.y = -75),
                          (this.SelectPointRoot.children[2].x = -235);
                        break;
                      case 3:
                        (this.SelectPointRoot.x = 0),
                          (this.SelectPointRoot.y = 177),
                          (this.SelectPointRoot.children[2].x = 0);
                    }
                  else
                    (this.SelectPointRoot.x = 0),
                      (this.SelectPointRoot.y = 177),
                      (this.SelectPointRoot.children[2].x = -235);
                  for (
                    var o = 0, r = this.SelectPointRoot.children;
                    o < r.length;
                    o++
                  ) {
                    var s = r[o],
                      c = s.getComponent(i.default);
                    if (c && t.length > 0) {
                      var u = Math.floor(CMath.getRandom(0, t.length));
                      c.setValue(t[u]), t.splice(u, 1), (s.active = !0);
                    } else s.active = !1;
                  }
                  (this.SelectTimeBar.progress = 1),
                    (this.SelectTimeLabel.string = Math.ceil(
                      this.selectTime
                    ).toString());
                }),
                (t.prototype.selectDone = function () {
                  if (n.Game.goldSelectValue <= 0)
                    return (
                      (this.node.active = !1),
                      void a.gEventMgr.emit(l.GlobalEvent.SKILL_DONE)
                    );
                  (this.Desk.active = !0),
                    (this.SelectLayer.active = !1),
                    (this.CurrentPoint.node.active = !0),
                    this.CurrentPoint.setValue(n.Game.goldSelectValue),
                    (this.ClickTimeLabel.string = Math.ceil(
                      this.selectTime
                    ).toString()),
                    (this.ClickTimeBar.progress = 1);
                }),
                (t.prototype.hide = function () {
                  this.node.active = !1;
                }),
                (t.prototype.update = function (e) {
                  this.node.active &&
                    !this.pause &&
                    n.Game.LevelInfo &&
                    (this.SelectLayer.active
                      ? ((this.selectTime -= e),
                        (this.SelectTimeBar.progress =
                          this.selectTime /
                          n.Game.LevelInfo.GoldSkillTimeLimit.Select),
                        (this.SelectTimeLabel.string = Math.ceil(
                          this.selectTime
                        ).toString()),
                        this.selectTime <= 0 &&
                          ((this.node.active = !1),
                          a.gEventMgr.emit(l.GlobalEvent.SKILL_DONE)))
                      : ((this.clickTime -= e),
                        (this.ClickTimeBar.progress =
                          this.clickTime /
                          n.Game.LevelInfo.GoldSkillTimeLimit.Click),
                        (this.ClickTimeLabel.string = Math.ceil(
                          this.clickTime
                        ).toString()),
                        this.clickTime <= 0 &&
                          ((this.node.active = !1),
                          a.gEventMgr.emit(l.GlobalEvent.SKILL_DONE))));
                }),
                (t = __decorate([c], t))
              );
            })(cc.Component));
        (o.default = u), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
        "./Point": "Point",
      },
    ],
    Guide: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "51171YOST5DI7oenF2960D9", "Guide"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i,
          n = e("./Controller/Game"),
          r = e("./Const"),
          a = e("./MouseGuidePage"),
          l = e("./Controller/EventManager"),
          s = e("./Controller/EventName"),
          c = e("./Help/MagicPageGuide"),
          u = cc._decorator,
          h = u.ccclass,
          p = u.property;
        (function (e) {
          (e[(e.Guide = 0)] = "Guide"), (e[(e.Help = 1)] = "Help");
        })((i = o.GuideType || (o.GuideType = {})));
        var d = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.ButtonAtlas = null),
              (t.Next = null),
              (t.Forward = null),
              (t.GuideContent = null),
              (t.HelpContent = null),
              (t.GuideView = null),
              (t.HelpView = null),
              (t.callback = null),
              t
            );
          }
          return (
            __extends(t, e),
            Object.defineProperty(t.prototype, "SkillGuide", {
              get: function () {
                return this.node.getChildByName("SkillGuide");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Button", {
              get: function () {
                return this.node.getChildByName("Button");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Skip", {
              get: function () {
                return this.Button.getChildByName("Skip");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "StarGuide", {
              get: function () {
                return this.SkillGuide.getChildByName("StarGuide");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "GoldGuide", {
              get: function () {
                return this.SkillGuide.getChildByName("GoldGuide");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "MouseGuide", {
              get: function () {
                return this.SkillGuide.getChildByName("MouseGuide");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "MagicGuide", {
              get: function () {
                return this.SkillGuide.getChildByName("MagicGuide");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "MagicOJBK", {
              get: function () {
                return this.MagicGuide.getChildByName("OJBK");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "SkipGuide", {
              get: function () {
                return this.SkillGuide.getChildByName("SkipGuide");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "SkipOJBK", {
              get: function () {
                return this.SkipGuide.getChildByName("OJBK");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "StarOJBK", {
              get: function () {
                return this.StarGuide.getChildByName("OJBK");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "GoldOJBK", {
              get: function () {
                return this.GoldGuide.getChildByName("OJBK");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "MouseOJBK", {
              get: function () {
                return this.MouseGuide.getChildByName("OJBK");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Block", {
              get: function () {
                return this.node.getChildByName("Block");
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.onLoad = function () {
              var e = this;
              this.Next.node.on(
                cc.Node.EventType.TOUCH_END,
                this.nextPage,
                this
              ),
                this.Forward.node.on(
                  cc.Node.EventType.TOUCH_END,
                  this.forwardPage,
                  this
                ),
                this.GuideView.node.on("scroll-ended", this.updateButton, this),
                this.HelpView.node.on("scroll-ended", this.updateButton, this),
                this.StarOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this),
                this.GoldOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this),
                this.MouseOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this),
                this.MagicOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this),
                this.SkipOJBK.on(cc.Node.EventType.TOUCH_END, this.hide, this),
                this.Block.on(
                  cc.Node.EventType.TOUCH_END,
                  function () {
                    e.HelpView.node.active && e.hide();
                  },
                  this
                ),
                l.gEventMgr.on(s.GlobalEvent.HIDE_HELP, this.hide, this);
            }),
            (t.prototype.start = function () {}),
            (t.prototype.hide = function () {
              n.Game.getCurMode() == r.SkillType.Normal
                ? n.Game.resume()
                : console.warn(" not in normal mode, dont resume"),
                (this.node.active = !1),
                (this.StarGuide.active = !1),
                (this.GoldGuide.active = !1),
                (this.MouseGuide.active = !1),
                (this.MagicGuide.active = !1),
                (this.SkipGuide.active = !1),
                this.callback && this.callback();
            }),
            (t.prototype.showStarGuide = function (e) {
              (this.node.active = !0),
                (this.SkillGuide.active = !0),
                (this.Button.active = !1),
                (this.HelpView.node.active = !1),
                (this.GuideView.node.active = !1),
                (this.StarGuide.active = !0),
                (this.GoldGuide.active = !1),
                (this.MouseGuide.active = !1),
                (this.MagicGuide.active = !1),
                (this.SkipGuide.active = !1),
                (this.callback = e);
            }),
            (t.prototype.showGoldGuide = function (e) {
              (this.node.active = !0),
                (this.SkillGuide.active = !0),
                (this.Button.active = !1),
                (this.HelpView.node.active = !1),
                (this.GuideView.node.active = !1),
                (this.StarGuide.active = !1),
                (this.GoldGuide.active = !0),
                (this.MouseGuide.active = !1),
                (this.MagicGuide.active = !1),
                (this.SkipGuide.active = !1),
                (this.callback = e);
            }),
            (t.prototype.showMouseGuide = function (e) {
              var t = this;
              (this.node.active = !0),
                (this.SkillGuide.active = !0),
                (this.Button.active = !1),
                (this.HelpView.node.active = !1),
                (this.GuideView.node.active = !1),
                (this.StarGuide.active = !1),
                (this.GoldGuide.active = !1),
                (this.MouseGuide.active = !0),
                (this.MagicGuide.active = !1),
                (this.SkipGuide.active = !1),
                (this.callback = e),
                (this.MouseOJBK.active = !1),
                (this.MouseOJBK.active = !0);
              var o = this.MouseGuide.getChildByName(
                "MouseGuidePage"
              ).getComponent(a.default);
              o.reset(),
                (o.onComplete = function () {
                  t.MouseOJBK.active = !0;
                });
            }),
            (t.prototype.showMagicGuide = function (e) {
              var t = this;
              (this.node.active = !0),
                (this.SkillGuide.active = !0),
                (this.Button.active = !1),
                (this.HelpView.node.active = !1),
                (this.GuideView.node.active = !1),
                (this.StarGuide.active = !1),
                (this.GoldGuide.active = !1),
                (this.MouseGuide.active = !1),
                (this.MagicGuide.active = !0),
                (this.SkipGuide.active = !1),
                (this.MagicOJBK.active = !1);
              var o = this.MagicGuide.getChildByName("Magic").getComponent(
                c.default
              );
              (this.MagicOJBK.active = !0),
                (o.onComplete = function () {
                  t.MagicOJBK.active = !0;
                }),
                o.reset(),
                (this.callback = e);
            }),
            (t.prototype.showSkipGuide = function (e) {
              (this.node.active = !0),
                (this.SkillGuide.active = !0),
                (this.Button.active = !1),
                (this.HelpView.node.active = !1),
                (this.GuideView.node.active = !1),
                (this.StarGuide.active = !1),
                (this.GoldGuide.active = !1),
                (this.MouseGuide.active = !1),
                (this.MagicGuide.active = !1),
                (this.SkipGuide.active = !0),
                (this.callback = e);
            }),
            (t.prototype.isGuideShow = function () {
              return this.node.active;
            }),
            (t.prototype.showSkillGuide = function (e, t) {
              switch (e) {
                case r.SkillType.Gold:
                  n.Game.pause(), this.showGoldGuide(t);
                  break;
                case r.SkillType.Star:
                  n.Game.pause(), this.showStarGuide(t);
                  break;
                case r.SkillType.Super:
                  n.Game.pause(), this.showMouseGuide(t);
                  break;
                case r.SkillType.Magic:
                  n.Game.pause(), this.showMagicGuide(t);
                  break;
                case r.SkillType.Skip:
                  n.Game.pause(), this.showSkipGuide(t);
              }
            }),
            (t.prototype.show = function (e, t) {
              n.Game.pause(),
                (this.guideType = e),
                e == i.Guide
                  ? ((this.GuideView.node.active = !0),
                    (this.HelpView.node.active = !1),
                    (this.curSelectView = this.GuideView))
                  : ((this.GuideView.node.active = !1),
                    (this.HelpView.node.active = !0),
                    (this.curSelectView = this.HelpView)),
                console.log(" show guide:", i[e]),
                (this.SkillGuide.active = !1),
                (this.Button.active = !0),
                this.curSelectView.scrollToPage(0, 0),
                (this.node.active = !0),
                (this.callback = t),
                (this.Forward.node.active = !1),
                (this.Next.node.active = !0),
                (this.Skip.active = !1),
                this.curSelectView.node.setContentSize(
                  this.curSelectView.content.children[
                    this.curSelectView.getCurrentPageIndex()
                  ].getContentSize()
                );
            }),
            (t.prototype.nextPage = function () {
              if (
                this.curSelectView.getCurrentPageIndex() >=
                this.curSelectView.content.childrenCount - 1
              )
                this.hide();
              else {
                var e =
                  (this.curSelectView.getCurrentPageIndex() + 1) %
                  this.curSelectView.content.childrenCount;
                this.curSelectView.setCurrentPageIndex(e), this.updateButton();
              }
            }),
            (t.prototype.forwardPage = function () {
              if (this.curSelectView.getCurrentPageIndex() <= 0);
              else {
                var e =
                  (this.curSelectView.getCurrentPageIndex() - 1) %
                  this.curSelectView.content.childrenCount;
                this.curSelectView.setCurrentPageIndex(e), this.updateButton();
              }
            }),
            (t.prototype.updateButton = function () {
              var e = this;
              this.curSelectView.getCurrentPageIndex() >=
              this.curSelectView.content.childrenCount - 1
                ? setTimeout(function () {
                    (e.Next.node.active = !1), (e.Skip.active = !0);
                  }, 0)
                : ((this.Next.node.active = !0), (this.Skip.active = !1)),
                (this.Forward.node.active = !1),
                this.curSelectView.node.setContentSize(
                  this.curSelectView.content.children[
                    this.curSelectView.getCurrentPageIndex()
                  ].getContentSize()
                );
            }),
            __decorate([p(cc.SpriteAtlas)], t.prototype, "ButtonAtlas", void 0),
            __decorate([p(cc.Button)], t.prototype, "Next", void 0),
            __decorate([p(cc.Button)], t.prototype, "Forward", void 0),
            __decorate([p(cc.Node)], t.prototype, "GuideContent", void 0),
            __decorate([p(cc.Node)], t.prototype, "HelpContent", void 0),
            __decorate([p(cc.PageView)], t.prototype, "GuideView", void 0),
            __decorate([p(cc.PageView)], t.prototype, "HelpView", void 0),
            (t = __decorate([h], t))
          );
        })(cc.Component);
        (o.default = d), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
        "./Help/MagicPageGuide": "MagicPageGuide",
        "./MouseGuidePage": "MouseGuidePage",
      },
    ],
    HashMap: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3fb89I0oSVCL4wes+uFEx94", "HashMap"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = (function () {
          function e() {
            (this._list = new Array()), this.clear();
          }
          return (
            (e.prototype.getIndexByKey = function (e) {
              for (var t = this._list.length, o = 0; o < t; o++) {
                if (this._list[o].key == e) return o;
              }
              return -1;
            }),
            (e.prototype.keyOf = function (e) {
              for (var t = this._list.length, o = 0; o < t; o++) {
                var i = this._list[o];
                if (i.value == e) return i.key;
              }
              return null;
            }),
            Object.defineProperty(e.prototype, "keys", {
              get: function () {
                for (
                  var e = new Array(), t = 0, o = this._list;
                  t < o.length;
                  t++
                ) {
                  var i = o[t];
                  i && e.push(i.key);
                }
                return e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.add = function (e, t) {
              var o = { key: e, value: t },
                i = this.getIndexByKey(e);
              -1 != i ? (this._list[i] = o) : this._list.push(o);
            }),
            Object.defineProperty(e.prototype, "values", {
              get: function () {
                return this._list;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.remove = function (e) {
              var t = this.getIndexByKey(e);
              if (-1 != t) {
                var o = this._list[t];
                return this._list.splice(t, 1), o;
              }
              return null;
            }),
            (e.prototype.has = function (e) {
              return -1 != this.getIndexByKey(e);
            }),
            (e.prototype.get = function (e) {
              var t = this.getIndexByKey(e);
              return -1 != t ? this._list[t].value : null;
            }),
            Object.defineProperty(e.prototype, "length", {
              get: function () {
                return this._list.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.sort = function (e) {
              this._list.sort(e);
            }),
            (e.prototype.forEachKeyValue = function (e) {
              for (var t = this._list.length, o = 0; o < t; o++) {
                e(this._list[o]);
              }
            }),
            (e.prototype.forEach = function (e) {
              for (var t = this._list.length, o = 0; o < t; o++) {
                var i = this._list[o];
                e(i.key, i.value);
              }
            }),
            (e.prototype.clear = function () {
              this._list = [];
            }),
            e
          );
        })();
        (o.HashMap = i), cc._RF.pop();
      },
      {},
    ],
    LoadLayer: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "1bfe9wchfRNVK/geqXwo8+E", "LoadLayer"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Shader/TransitionSprite"),
          n = e("./Controller/Game"),
          r = e("./Controller/EventManager"),
          a = e("./Controller/EventName"),
          l = e("./Const"),
          s = e("./Controller/UpdateController"),
          c = cc._decorator,
          u = c.ccclass,
          h = c.property,
          p = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.manifest = null),
                (t.time = 5),
                (t.isStart = !1),
                (t.TotalWidth = 710),
                (t.startTimer = !1),
                t
              );
            }
            return (
              __extends(t, e),
              Object.defineProperty(t.prototype, "StartButton", {
                get: function () {
                  return this.node.getChildByName("BeginButton");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Background", {
                get: function () {
                  return this.node.getChildByName("Background");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Position", {
                get: function () {
                  return this.node.getChildByName("Position");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "StartProgress", {
                get: function () {
                  return this.StartButton.getChildByName("ProgressBar");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "UpdateInfo", {
                get: function () {
                  return this.node
                    .getChildByName("UpdateInfo")
                    .getComponent(cc.Label);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Version", {
                get: function () {
                  return this.node
                    .getChildByName("version")
                    .getComponent(cc.Label);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.onLoad = function () {
                (this.node.scale = 1),
                  (this.StartButton.opacity = 255),
                  (this.StartButton.scale = 0),
                  this.manifest && s.default.inst.setManifest(this.manifest),
                  (this.UpdateInfo.node.active = !1),
                  (this.Version.node.active =
                    "" != s.default.inst.getVersion()),
                  s.default.inst.addCompleteCallback(this.onComplete, this),
                  s.default.inst.addErrorCallback(this, this.onError),
                  s.default.inst.addProgressCallback(this, this.onProgress),
                  s.default.inst.addStartCallback(this, this.onStart);
              }),
              (t.prototype.onStart = function (e, t) {
                console.log(" startUpdate:", e, ",gotoAppStore:", t),
                  t
                    ? this.showStartButton()
                    : ((this.StartProgress.width = 0 * this.TotalWidth),
                      (this.UpdateInfo.node.active = !0),
                      (this.UpdateInfo.string =
                        "\u66f4\u65b0\u8d44\u6e90\u4e2d..."));
              }),
              (t.prototype.onError = function (e, t) {
                console.log("update error:", e), this.showStartButton();
              }),
              (t.prototype.onProgress = function (e, t) {
                "number" != typeof t && (t = 0),
                  (this.StartProgress.width = this.TotalWidth * t),
                  (this.UpdateInfo.string =
                    "\u66f4\u65b0\u8d44\u6e90\u4e2d..." +
                    (100 * t).toFixed(0) +
                    "%");
              }),
              (t.prototype.onComplete = function (e, t) {
                console.log(" update complete:", e),
                  t ? s.default.inst.restart() : this.showStartButton();
              }),
              (t.prototype.enableBlock = function (e) {
                this.node.getComponent(cc.BlockInputEvents) &&
                  (this.node.getComponent(cc.BlockInputEvents).enabled = e);
              }),
              (t.prototype.showStartButton = function () {
                var e = this;
                (this.StartProgress.width = this.TotalWidth),
                  (this.UpdateInfo.node.active = !1),
                  (this.Version.node.active =
                    "" != s.default.inst.getVersion()),
                  (this.Version.string = "v" + s.default.inst.getVersion()),
                  this.StartButton.runAction(
                    cc.sequence(
                      cc.scaleTo(0.15, 1.2),
                      cc.scaleTo(0.1, 1),
                      cc.callFunc(function () {
                        (e.startTimer = !0),
                          e.StartButton.on(
                            cc.Node.EventType.TOUCH_START,
                            function () {
                              e.StartProgress.active = !1;
                            },
                            e
                          ),
                          e.StartButton.on(
                            cc.Node.EventType.TOUCH_END,
                            e.startGame,
                            e
                          );
                      })
                    )
                  );
              }),
              (t.prototype.ready = function () {
                console.log(" loading layer ready"),
                  (this.isStart = !1),
                  (this.startTimer = !1),
                  this.enableBlock(!0),
                  (this.StartProgress.width = this.TotalWidth),
                  (this.Position.active = !0);
                for (
                  var e = 0, t = this.Background.children;
                  e < t.length;
                  e++
                ) {
                  ((a = t[e]).active = a.name == l.Theme[n.Game.Theme]),
                    a.getComponent(i.default) &&
                      ((a.getComponent(i.default).enabled = a.active),
                      a.active &&
                        (this.transition = a.getComponent(i.default)));
                }
                for (var o = 0, r = this.Position.children; o < r.length; o++) {
                  var a;
                  (a = r[o]).active = a.name == l.Theme[n.Game.Theme];
                }
                s.default.inst.checkForUpdate();
              }),
              (t.prototype.startGame = function () {
                var e = this;
                this.isStart ||
                  ((this.isStart = !0),
                  this.StartButton.targetOff(this),
                  this.unscheduleAllCallbacks(),
                  (this.Position.active = !1),
                  this.transition && this.transition.enabled
                    ? ((this.transition.isStart = !0),
                      this.transition.gameStart(),
                      this.StartButton.runAction(
                        cc.sequence(
                          cc.fadeOut(0.2),
                          cc.callFunc(function () {
                            e.StartButton.active = !1;
                          })
                        )
                      ))
                    : ((this.node.active = !1),
                      r.gEventMgr.emit(a.GlobalEvent.GAME_START)));
              }),
              (t.prototype.update = function (e) {
                this.startTimer &&
                  ((this.time -= e),
                  (this.time = Math.max(0, this.time)),
                  (this.StartProgress.width = (710 * this.time) / 3),
                  this.time <= 0 && !this.isStart && this.startGame());
              }),
              (t.prototype.onDestroy = function () {
                s.default.inst.destory();
              }),
              __decorate(
                [h({ type: cc.Asset })],
                t.prototype,
                "manifest",
                void 0
              ),
              (t = __decorate([u], t))
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
        "./Controller/UpdateController": "UpdateController",
        "./Shader/TransitionSprite": "TransitionSprite",
      },
    ],
    LogHandler: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "8104dX5fRlIPb4q1d60qPIM", "LogHandler"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = (function () {
          function e() {
            if (
              ((this.logFunc = console.log),
              (this.logMsg = null),
              (this.frameTimes = 0),
              (this.now = 0),
              (this.Frame = 20),
              (this.totalFrames = 0),
              (this.startTime = 0),
              window.addEventListener && CELER_X)
            )
              for (var t = 0, o = e.LISTENNING_EVENTS; t < o.length; t++) {
                var i = o[t],
                  n =
                    "trigger" +
                    i.charAt(0).toLocaleUpperCase() +
                    i.substring(1);
                this[n] &&
                  "function" == typeof this[n] &&
                  window.addEventListener(i, this[n].bind(this));
              }
          }
          return (
            Object.defineProperty(e, "inst", {
              get: function () {
                return this.ins ? this.ins : (this.ins = new e());
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.dumpFrameInfo = function () {
              var e = (Date.now() - this.startTime) / 1e3,
                t = e / this.totalFrames;
              this.log(
                " total frames:",
                this.totalFrames,
                " ,total cost time:",
                e + "s",
                " , per frame cost time ave:" + t + "s"
              );
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.addLog.apply(this, e), this.sendLog();
            }),
            (e.prototype.initLog = function (t) {
              var o = this;
              cc.director.once(
                cc.Director.EVENT_AFTER_SCENE_LAUNCH,
                function () {
                  (o.frameTimes = 0),
                    (o.now = Date.now()),
                    (o.startTime = Date.now());
                },
                this
              ),
                cc.director.on(
                  cc.Director.EVENT_AFTER_DRAW,
                  function () {
                    o.frameTimes++,
                      o.totalFrames++,
                      o.frameTimes >= o.Frame &&
                        ((o.frameTimes = 0), (o.now = Date.now()));
                  },
                  this
                ),
                CELER_X
                  ? ((this.logFunc = t),
                    (console.error = function () {
                      for (var t, o = [], i = 0; i < arguments.length; i++)
                        o[i] = arguments[i];
                      (t = e.ins).log.apply(t, ["[ERROR]"].concat(o));
                    }),
                    (console.warn = function () {
                      for (var t, o = [], i = 0; i < arguments.length; i++)
                        o[i] = arguments[i];
                      (t = e.ins).log.apply(t, ["[WARN]"].concat(o));
                    }),
                    (console.log = function () {
                      for (var t, o = [], i = 0; i < arguments.length; i++)
                        o[i] = arguments[i];
                      (t = e.ins).log.apply(t, ["[INFO]"].concat(o));
                    }))
                  : (this.logFunc = console.log);
            }),
            (e.prototype.formatLogArguments = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              for (var o = "", i = 0; i < arguments.length; i++) {
                var n = typeof arguments[i];
                "string" == n || "number" == n
                  ? (o += " " + arguments[i])
                  : "object" == n
                  ? (o += " " + JSON.stringify(arguments[i]))
                  : "boolean" == n &&
                    arguments[i].toString &&
                    (o += arguments[i].toString());
              }
              return o;
            }),
            (e.prototype.addLog = function () {
              for (var t = [], o = 0; o < arguments.length; o++)
                t[o] = arguments[o];
              null == this.logMsg && (this.logMsg = {});
              var i = this.formatLogArguments.apply(this, t),
                n = this.getFullTime(new Date());
              this.logMsg[n] = e.VERSION + i;
            }),
            (e.prototype.getFullTime = function (e) {
              var t = "";
              t += e.getFullYear();
              var o = e.getMonth() + 1;
              t += "-" + (o >= 10 ? o : "0" + o);
              var i = e.getDate();
              t += "-" + (i >= 10 ? i : "0" + i);
              var n = e.getHours();
              t += "  " + (n >= 10 ? n : "0" + n);
              var r = e.getMinutes();
              t += ":" + (r >= 10 ? r : "0" + r);
              var a = e.getSeconds();
              return (t += ":" + (a >= 10 ? a : "0" + a));
            }),
            (e.prototype.sendLog = function () {
              this.logFunc &&
                null != this.logMsg &&
                (this.logFunc(JSON.stringify(this.logMsg)),
                (this.logMsg = null));
            }),
            (e.prototype.triggerClose = function (e) {
              this.addLog("triggerClose"), this.sendLog();
            }),
            (e.prototype.triggerLoad = function (e) {
              this.addLog("triggerLoad"), this.sendLog();
            }),
            (e.prototype.triggerUnload = function (e) {
              this.addLog("triggerUnload"), this.sendLog();
            }),
            (e.prototype.triggerOnunload = function (e) {
              this.addLog("triggerUnload"), this.sendLog();
            }),
            (e.prototype.triggerError = function (e) {
              this.addLog("triggerError"),
                this.addLog(e.message),
                this.sendLog();
            }),
            (e.prototype.triggerFocus = function (e) {
              this.addLog("triggerFocus"), this.sendLog();
            }),
            (e.prototype.triggerBlur = function (e) {
              this.addLog("triggerBlur"), this.sendLog();
            }),
            (e.prototype.triggerAbort = function (e) {
              this.addLog("triggerAbort"), this.sendLog();
            }),
            (e.prototype.triggerSuspend = function (e) {
              this.addLog("triggerSuspend"), this.sendLog();
            }),
            (e.prototype.beforeunload = function (e) {
              this.addLog("beforeunload"), this.sendLog();
            }),
            (e.VERSION = window.GAME_VERSION || "Daub Cash version 110: "),
            (e.LISTENNING_EVENTS = ["error"]),
            e
          );
        })();
        (o.LogHandler = i), cc._RF.pop();
      },
      {},
    ],
    MagicLayer: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c827aekCwJAg623zHJEGQBN", "MagicLayer"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Point"),
          n = e("./Controller/EventManager"),
          r = e("./Controller/EventName"),
          a = e("./Controller/Game"),
          l = e("./FrameAniBase"),
          s = e("./Const"),
          c = cc._decorator,
          u = c.ccclass,
          h = c.property,
          p = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.PenAtlas = null),
                (t.pause = !1),
                (t.Frame = null),
                (t.Pen = null),
                (t.TotalTime = 7),
                (t.time = 7),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.onLoad = function () {
                var e = this;
                console.log(" Magic layer on load"),
                  (this.node.scale = 0),
                  n.gEventMgr.targetOff(this),
                  n.gEventMgr.on(
                    r.GlobalEvent.MAGIC_DAUB,
                    this.onMagicDaub,
                    this
                  ),
                  n.gEventMgr.on(r.GlobalEvent.MAGIC_TIP, this.showTip, this),
                  n.gEventMgr.on(
                    r.GlobalEvent.CHANGE_CARD_TAB,
                    function () {
                      e.Tip.scale = 0;
                    },
                    this
                  ),
                  n.gEventMgr.on(
                    r.GlobalEvent.ON_HIDE,
                    function () {
                      setTimeout(function () {
                        console.log(
                          "magic skill pause:",
                          s.SkillType[a.Game.getCurMode()]
                        ),
                          (e.pause = !0);
                      }, 0);
                    },
                    this
                  ),
                  n.gEventMgr.on(
                    r.GlobalEvent.SKILL_RESUME,
                    function () {
                      setTimeout(function () {
                        console.log(
                          "magic skill resume:",
                          s.SkillType[a.Game.getCurMode()]
                        ),
                          (e.pause = !1);
                      }, 0);
                    },
                    this
                  );
              }),
              (t.prototype.start = function () {
                console.log(" Magic layer on start");
              }),
              Object.defineProperty(t.prototype, "AnimationRoot", {
                get: function () {
                  return this.node.getChildByName("Animation");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Point", {
                get: function () {
                  return this.node
                    .getChildByName("Point")
                    .getComponent(i.default);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "TimeBar", {
                get: function () {
                  return this.node
                    .getChildByName("TimeBar")
                    .getComponent(cc.ProgressBar);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "TimeLabel", {
                get: function () {
                  return this.TimeBar.node
                    .getChildByName("TimeLabel")
                    .getComponent(cc.Label);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Tip", {
                get: function () {
                  return this.node.getChildByName("Tip");
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.onMagicDaub = function () {
                this.Pen.stopAllActions(),
                  this.Pen.getComponent(l.default).play(),
                  (this.Pen.getComponent(l.default).onComplete = function () {
                    n.gEventMgr.emit(r.GlobalEvent.SKILL_DONE);
                  });
              }),
              (t.prototype.show = function (e) {
                (this.Time = this.TotalTime),
                  (this.Tip.scale = 0),
                  (this.node.active = !0),
                  (this.node.scale = 1),
                  this.Point.setValue(e);
                for (
                  var t = 0, o = this.AnimationRoot.children;
                  t < o.length;
                  t++
                ) {
                  var i = o[t];
                  (i.active = i.name == this.Point.WordString),
                    i.active &&
                      ((this.Frame = i.getChildByName("Frame")),
                      (this.Pen = i.getChildByName("Pen")));
                }
                if (null == this.Frame || null == this.Pen)
                  return (
                    console.error(" this.Frame == null || this.Pen == null "),
                    void n.gEventMgr.emit(r.GlobalEvent.SKILL_DONE)
                  );
                (a.Game.hasDaubMagicBall = !1),
                  (this.Frame.opacity = 255),
                  this.Frame.runAction(
                    cc.repeatForever(
                      cc.sequence(cc.fadeOut(0.15), cc.fadeIn(0.2))
                    )
                  ),
                  (this.Pen.getComponent(
                    cc.Sprite
                  ).spriteFrame = this.PenAtlas.getSpriteFrame("bg_magic02")),
                  (this.Pen.opacity = 255),
                  this.Pen.runAction(
                    cc.repeatForever(
                      cc.sequence(cc.fadeOut(0.15), cc.fadeIn(0.2))
                    )
                  );
              }),
              (t.prototype.hide = function () {
                this.node.active = !1;
              }),
              (t.prototype.showTip = function (e, t) {
                this.Tip.setPosition(
                  CMath.ConvertToNodeSpaceAR(e, this.Tip.getParent())
                ),
                  this.Tip.scale > 0
                    ? t
                      ? this.Tip.runAction(cc.scaleTo(0.1, 0))
                      : this.Tip.runAction(
                          cc.sequence(
                            cc.moveBy(0.025, -5, 0),
                            cc.moveBy(0.05, 10, 0),
                            cc.moveBy(0.05, -10, 0),
                            cc.moveBy(0.025, 5, 0)
                          )
                        )
                    : t ||
                      this.Tip.runAction(
                        cc.sequence(cc.scaleTo(0.05, 1.2), cc.scaleTo(0.05, 1))
                      );
              }),
              Object.defineProperty(t.prototype, "Time", {
                get: function () {
                  return this.time;
                },
                set: function (e) {
                  (this.time = e),
                    (this.time = Math.max(0, this.time)),
                    (this.TimeLabel.string = Math.ceil(this.time).toString()),
                    (this.TimeBar.progress = this.time / this.TotalTime),
                    this.time <= 0 &&
                      n.gEventMgr.emit(r.GlobalEvent.SKILL_DONE);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.update = function (e) {
                this.node.active && !this.pause && (this.Time -= e);
              }),
              __decorate([h(cc.SpriteAtlas)], t.prototype, "PenAtlas", void 0),
              (t = __decorate([u], t))
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
        "./FrameAniBase": "FrameAniBase",
        "./Point": "Point",
      },
    ],
    MagicPageGuide: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "a6eb6F1U0FNX7wCy5Iq8Hk+", "MagicPageGuide"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../FrameAniBase"),
          n = cc._decorator,
          r = n.ccclass,
          a =
            (n.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.time = 8), t;
              }
              return (
                __extends(t, e),
                Object.defineProperty(t.prototype, "TimeBar", {
                  get: function () {
                    return this.node
                      .getChildByName("TimeBar")
                      .getComponent(cc.ProgressBar);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "TimeLabel", {
                  get: function () {
                    return this.TimeBar.node
                      .getChildByName("TimeLabel")
                      .getComponent(cc.Label);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "CardAni", {
                  get: function () {
                    return this.node
                      .getChildByName("card")
                      .getComponent(i.default);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "HandAni", {
                  get: function () {
                    return this.node
                      .getChildByName("touch")
                      .getComponent(i.default);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Frame", {
                  get: function () {
                    return this.node
                      .getChildByName("O")
                      .getChildByName("Frame");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onLoad = function () {}),
                (t.prototype.start = function () {
                  this.reset();
                }),
                Object.defineProperty(t.prototype, "Time", {
                  get: function () {
                    return this.time;
                  },
                  set: function (e) {
                    (this.time = e),
                      (this.time = Math.max(0, this.time)),
                      (this.TimeLabel.string = Math.floor(
                        this.time
                      ).toString()),
                      (this.TimeBar.progress = this.time / 10);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.reset = function () {
                  var e = this;
                  (this.Time = 8),
                    (this.HandAni.node.opacity = 0),
                    (this.CardAni.node.opacity = 0),
                    (this.Frame.opacity = 255),
                    this.Frame.stopAllActions(),
                    console.log(
                      "\u9b54\u6cd5\u7403\u5f15\u5bfc\u9875\u9762reset"
                    ),
                    this.Frame.runAction(
                      cc.repeatForever(
                        cc.sequence(cc.fadeOut(0.15), cc.fadeIn(0.2))
                      )
                    ),
                    setTimeout(function () {
                      e.HandAni.play(), (e.HandAni.node.opacity = 255);
                    }, 1e3),
                    (this.HandAni.onKeyFrame = function (t) {
                      3 == t &&
                        ((e.CardAni.node.opacity = 255), e.CardAni.play());
                    }),
                    (this.HandAni.onComplete = function () {
                      e.HandAni.node.runAction(cc.fadeOut(0.1));
                    }),
                    (this.CardAni.onComplete = function () {
                      setTimeout(function () {
                        e.CardAni.node.runAction(cc.fadeOut(0.1)),
                          e.reset(),
                          e.onComplete();
                      }, 1e3);
                    });
                }),
                (t.prototype.onComplete = function () {}),
                (t.prototype.update = function (e) {
                  (this.Time -= e), this.Time <= 4 && this.reset();
                }),
                (t = __decorate([r], t))
              );
            })(cc.Component));
        (o.default = a), cc._RF.pop();
      },
      { "../FrameAniBase": "FrameAniBase" },
    ],
    MouseGuidePage: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d8f62swh41NQrpkpv9WU4DY", "MouseGuidePage"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Const"),
          n = e("./FrameAniBase"),
          r = cc._decorator,
          a = r.ccclass,
          l = r.property,
          s = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.SuperLightAtlas = null),
                (t.time = 8),
                (t.superHighLightCount = 0),
                t
              );
            }
            return (
              __extends(t, e),
              Object.defineProperty(t.prototype, "Light", {
                get: function () {
                  return this.node.getChildByName("Light");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Touch", {
                get: function () {
                  return this.node.getChildByName("AnimationTouch");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "TimeBar", {
                get: function () {
                  return this.node
                    .getChildByName("TimeBar")
                    .getComponent(cc.ProgressBar);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "TimeLabel", {
                get: function () {
                  return this.TimeBar.node
                    .getChildByName("TimeLabel")
                    .getComponent(cc.Label);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.onLoad = function () {
                this.reset();
              }),
              Object.defineProperty(t.prototype, "Time", {
                get: function () {
                  return this.time;
                },
                set: function (e) {
                  (this.time = e),
                    (this.time = Math.max(0, this.time)),
                    (this.TimeLabel.string = Math.floor(this.time).toString()),
                    (this.TimeBar.progress = this.time / 10);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.updateTouch = function () {
                for (var e = 0, t = this.Touch.children; e < t.length; e++) {
                  var o = t[e],
                    i = o.getComponent(n.default),
                    r = o.getComponent(cc.Sprite);
                  parseInt(o.name) <= this.superHighLightCount
                    ? ((o.active = !0),
                      (r.spriteFrame = i.Frames.getSpriteFrame("ae_new_07")))
                    : (o.active = !1);
                }
              }),
              (t.prototype.nextTouch = function () {
                var e = this;
                this.superHighLightCount++;
                var t = this.Touch.getChildByName(
                  this.superHighLightCount.toString()
                );
                if (t) {
                  var o = t.getComponent(n.default);
                  (t.active = !0),
                    (o.onComplete = function () {
                      e.updateTouch(),
                        e.updateLight(),
                        setTimeout(function () {
                          e.nextTouch();
                        }, 1e3);
                    }),
                    o.play();
                } else this.onComplete(), this.reset();
              }),
              (t.prototype.updateLight = function () {
                for (
                  var e = function (e) {
                      parseInt(e.name) <= t.superHighLightCount
                        ? e
                            .getComponent(cc.Animation)
                            .getAnimationState("shink").isPlaying ||
                          (e.getComponent(cc.Animation).once(
                            cc.Animation.EventType.FINISHED,
                            function () {
                              e.getComponent(cc.Animation).play("shink");
                            },
                            t
                          ),
                          e.getComponent(cc.Animation).play("turn"))
                        : (e.getComponent(cc.Animation).stop(),
                          (e.getComponent(
                            cc.Sprite
                          ).spriteFrame = t.SuperLightAtlas.getSpriteFrame(
                            i.SuperLight.Gray
                          )));
                    },
                    t = this,
                    o = 0,
                    n = this.Light.children;
                  o < n.length;
                  o++
                ) {
                  e(n[o]);
                }
              }),
              (t.prototype.reset = function () {
                (this.superHighLightCount = 0),
                  (this.Time = 8),
                  this.updateTouch(),
                  this.updateLight(),
                  this.nextTouch();
              }),
              (t.prototype.onComplete = function () {}),
              (t.prototype.update = function (e) {
                (this.Time -= e), this.Time <= 0 && this.reset();
              }),
              __decorate(
                [l(cc.SpriteAtlas)],
                t.prototype,
                "SuperLightAtlas",
                void 0
              ),
              (t = __decorate([a], t))
            );
          })(cc.Component);
        (o.default = s), cc._RF.pop();
      },
      { "./Const": "Const", "./FrameAniBase": "FrameAniBase" },
    ],
    Pad: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "482dbcxNt1HaKHvMljr3XXT", "Pad"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = cc._decorator,
          n = i.ccclass,
          r =
            (i.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {}),
                (t.prototype.start = function () {}),
                (t = __decorate([n], t))
              );
            })(cc.Component));
        (o.default = r), cc._RF.pop();
      },
      {},
    ],
    PauseLayer: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c98ebyBcvpGl54TB3ikQEWN", "PauseLayer"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/Game"),
          n = e("./Const"),
          r = e("./Controller/EventManager"),
          a = e("./Controller/EventName"),
          l = cc._decorator,
          s = l.ccclass,
          c = l.property,
          u = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.closeCallback = null),
                (t.openHelp = null),
                (t.TipAtlas = null),
                (t.MaskWidth = 440),
                t
              );
            }
            return (
              __extends(t, e),
              Object.defineProperty(t.prototype, "ResumeButton", {
                get: function () {
                  return this.node.getChildByName("Resume");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "VolumeSlider", {
                get: function () {
                  return this.node
                    .getChildByName("VolumeSlider")
                    .getComponent(cc.Slider);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "HelpButton", {
                get: function () {
                  return this.node.getChildByName("HelpButton");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Mask", {
                get: function () {
                  return this.VolumeSlider.node.getChildByName("Mask");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "MaskEffect", {
                get: function () {
                  return this.VolumeEffectSlider.node.getChildByName("Mask");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "VolumeEffectSlider", {
                get: function () {
                  return this.node
                    .getChildByName("VolumeEffectSlider")
                    .getComponent(cc.Slider);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Tip", {
                get: function () {
                  return this.node
                    .getChildByName("Tip")
                    .getComponent(cc.Sprite);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "ScoreLabel", {
                get: function () {
                  return this.Tip.node
                    .getChildByName("Score")
                    .getComponent(cc.Label);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "EndNow", {
                get: function () {
                  return this.node.getChildByName("btn_end");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "SoundButton", {
                get: function () {
                  return this.node
                    .getChildByName("SoundButton")
                    .getComponent(cc.Button);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.onLoad = function () {
                var e = this;
                this.ResumeButton.on(
                  cc.Node.EventType.TOUCH_END,
                  function (t) {
                    (t.bubbles = !1), setTimeout(e.hide.bind(e), 0);
                  },
                  this
                ),
                  this.HelpButton.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      e.openHelp && e.openHelp();
                    },
                    this
                  ),
                  this.EndNow.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      e.hide(!1),
                        r.gEventMgr.emit(
                          a.GlobalEvent.GAME_OVER,
                          n.OverType.TimeUp
                        );
                    },
                    this
                  ),
                  this.VolumeSlider.node.on("slide", this.onSlider, this),
                  this.VolumeEffectSlider.node.on(
                    "slide",
                    this.onEffectSlider,
                    this
                  ),
                  (this.SoundButton.interactable = !0),
                  this.SoundButton.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      e.SoundButton.interactable = !e.SoundButton.interactable;
                      var t = e.SoundButton.interactable ? 1 : 0;
                      cc.audioEngine.setMusicVolume(t),
                        cc.audioEngine.setEffectsVolume(t);
                    },
                    this
                  );
              }),
              (t.prototype.onSlider = function () {
                cc.audioEngine.setMusicVolume(this.VolumeSlider.progress),
                  (this.Mask.width =
                    this.VolumeSlider.progress * this.MaskWidth);
              }),
              (t.prototype.onEffectSlider = function () {
                cc.audioEngine.setEffectsVolume(
                  this.VolumeEffectSlider.progress
                ),
                  (this.MaskEffect.width =
                    this.VolumeEffectSlider.progress * this.MaskWidth);
              }),
              (t.prototype.start = function () {}),
              (t.prototype.show = function (e, t) {
                if (!this.node.active)
                  switch (
                    (console.log(" pause layer show !"),
                    (this.VolumeSlider.progress = cc.audioEngine.getMusicVolume()),
                    (this.VolumeEffectSlider.progress = cc.audioEngine.getEffectsVolume()),
                    (this.Mask.width =
                      this.VolumeSlider.progress * this.MaskWidth),
                    (this.MaskEffect.width =
                      this.VolumeEffectSlider.progress * this.MaskWidth),
                    (this.closeCallback = t),
                    (this.openHelp = e),
                    (this.node.active = !0),
                    i.Game.pause(),
                    i.Game.getPauseCount())
                  ) {
                    case 0:
                      (this.Tip.spriteFrame = this.TipAtlas.getSpriteFrame(
                        "bg_pause_2free"
                      )),
                        (this.ScoreLabel.string =
                          "/" + n.PausePenilthBase.toString());
                      break;
                    case 1:
                      (this.Tip.spriteFrame = this.TipAtlas.getSpriteFrame(
                        "bg_pause_1free"
                      )),
                        (this.ScoreLabel.string =
                          "/" + n.PausePenilthBase.toString());
                      break;
                    default:
                      (this.Tip.spriteFrame = this.TipAtlas.getSpriteFrame(
                        "bg_pause_nofree"
                      )),
                        (this.ScoreLabel.string =
                          "/" +
                          (
                            n.PausePenilty * (i.Game.getPauseCount() - 2) +
                            n.PausePenilthBase
                          ).toString());
                  }
              }),
              (t.prototype.hide = function (e) {
                void 0 === e && (e = !0),
                  0 != this.node.active &&
                    ((this.node.active = !1),
                    e && i.Game.addPauseCount(),
                    this.closeCallback &&
                      (this.closeCallback(), (this.closeCallback = null)));
              }),
              __decorate([c(cc.SpriteAtlas)], t.prototype, "TipAtlas", void 0),
              (t = __decorate([s], t))
            );
          })(cc.Component);
        (o.default = u), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
      },
    ],
    Point: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9e72aDeGvxJjI3bwYHxFww7", "Point"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/Game"),
          n = e("./Const"),
          r = e("./Controller/EventManager"),
          a = e("./Controller/EventName"),
          l = e("./Controller/CelerSDK"),
          s = cc._decorator,
          c = s.ccclass,
          u =
            (s.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.totalTime = 0), (t.currentTime = 0), (t.value = 0), t;
              }
              return (
                __extends(t, e),
                Object.defineProperty(t.prototype, "TimeBar", {
                  get: function () {
                    return this.node
                      .getChildByName("TimeBar")
                      .getComponent(cc.ProgressBar);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Icon", {
                  get: function () {
                    return this.node.getChildByName("Icon");
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "NumberLabel", {
                  get: function () {
                    return this.node
                      .getChildByName("Label")
                      .getChildByName("Number")
                      .getComponent(cc.Label);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "CurrentTime", {
                  get: function () {
                    return this.currentTime;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "TotalTime", {
                  get: function () {
                    return this.totalTime;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "StringValue", {
                  get: function () {
                    return this.word + "." + this.value;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Value", {
                  get: function () {
                    return this.value;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Word", {
                  get: function () {
                    return this.word;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "WordString", {
                  get: function () {
                    return n.CardWord[this.word];
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "TimeLeftPercent", {
                  get: function () {
                    return this.totalTime <= 0
                      ? 0
                      : this.currentTime / this.totalTime;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onSetParent = function (e) {
                  var t = this;
                  e &&
                    ((this.TimeBar.node.active = "CurrentPoint" == e.name),
                    this.TimeBar.node.active
                      ? (i.Game.getGameTime() >= n.TimeLimit
                          ? (this.totalTime =
                              (window.chichihaoshuaihahaha,
                              i.Game.LevelInfo.RewardTime.One))
                          : (this.totalTime =
                              (window.chichihaoshuaihahaha,
                              i.Game.LevelInfo.RewardTime.Two)),
                        (this.currentTime = this.totalTime),
                        r.gEventMgr.emit(
                          a.GlobalEvent.PLAY_EFFECT,
                          n.CardWord[this.word],
                          !1,
                          function () {
                            r.gEventMgr.emit(
                              a.GlobalEvent.PLAY_EFFECT,
                              t.value
                            );
                          }
                        ))
                      : ((this.totalTime = 0), (this.currentTime = 0)));
                }),
                Object.defineProperty(t.prototype, "isGoldSelectMode", {
                  get: function () {
                    return "SelectRoot" == this.node.getParent().name;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onLoad = function () {
                  this.node.on(cc.Node.EventType.TOUCH_END, this.onTouch, this);
                }),
                (t.prototype.reuse = function () {
                  (this.node._onSetParent = this.onSetParent.bind(this)),
                    (this.NumberLabel.node.active = !0),
                    (this.TimeBar.progress = 1),
                    (this.TimeBar.node.active = !1),
                    (this.node.scale = 1),
                    (this.node.active = !0),
                    this.setValue(arguments[0][0]);
                }),
                (t.prototype.onTouch = function (e) {
                  console.log(this.node.parent.name),
                    this.isGoldSelectMode &&
                      ((i.Game.goldSelectValue = this.value),
                      r.gEventMgr.emit(a.GlobalEvent.GOLD_POINT_SELECT_DONE));
                }),
                (t.prototype.setValue = function (e) {
                  console.log(" point set val:", e), (this.value = e);
                  for (var t = n.CardWord.B; t <= n.CardWord.O; t++)
                    if (
                      this.value >= (t - 1) * n.CardStep + 1 &&
                      this.value <= t * n.CardStep
                    ) {
                      this.word = t;
                      break;
                    }
                  this.NumberLabel.string = this.value.toString();
                  for (var o = 0, i = this.Icon.children; o < i.length; o++) {
                    var r = i[o];
                    r.active = r.name == n.CardWord[this.word];
                  }
                }),
                (t.prototype.unuse = function () {
                  this.node.targetOff(this),
                    (this.NumberLabel.node.active = !1),
                    (this.node.active = !1);
                }),
                (t.prototype.update = function (e) {
                  this.TimeBar.node.active &&
                    this.totalTime > 0 &&
                    !i.Game.isPause() &&
                    i.Game.isStart &&
                    ((this.currentTime -= e),
                    (this.TimeBar.progress = this.currentTime / this.totalTime),
                    (this.TimeBar.node.active = this.currentTime > 0),
                    this.currentTime <= 0 && this.goToRewardArray());
                }),
                (t.prototype.addTime = function (e) {
                  l.CelerSDK.inst.isOnCelerPlatform() ||
                    (i.Game.LevelInfo.RewardTime.One < 10 &&
                      !window.chichihaoshuaihahaha) ||
                    ((this.currentTime += e),
                    (this.currentTime = Math.max(0, this.currentTime)));
                }),
                (t.prototype.goToRewardArray = function () {
                  (this.TimeBar.node.active = !1),
                    r.gEventMgr.emit(
                      a.GlobalEvent.ADD_2_NORMAL_REWARD,
                      this.node
                    );
                }),
                (t = __decorate([c], t))
              );
            })(cc.Component));
        (o.default = u), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/CelerSDK": "CelerSDK",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
      },
    ],
    Reminder: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "03c8azTaURGtZC6qcEVyntC", "Reminder"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../FrameAniBase"),
          n = cc._decorator,
          r = n.ccclass,
          a =
            (n.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.round = 0),
                  (t.playCount = 0),
                  (t.circleCount = 0),
                  (t.isStop = !0),
                  t
                );
              }
              return (
                __extends(t, e),
                Object.defineProperty(t.prototype, "Light", {
                  get: function () {
                    return this.node
                      .getChildByName("Click")
                      .getComponent(i.default);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Hand", {
                  get: function () {
                    return this.node
                      .getChildByName("Hand")
                      .getComponent(i.default);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onLoad = function () {}),
                (t.prototype.start = function () {
                  this.node.active = !1;
                }),
                (t.prototype.play = function () {
                  var e = this;
                  this.isStop ||
                    this.node.active ||
                    ((this.node.active = !0),
                    (this.round = 0),
                    (this.playCount = 0),
                    (this.circleCount = 0),
                    (this.Hand.node.active = !0),
                    (this.Hand.node.opacity = 0),
                    (this.Light.node.active = !0),
                    (this.Light.onKeyFrame = function (t) {
                      0 == t && (e.Light.node.opacity = 255);
                    }),
                    (this.Hand.onKeyFrame = function (t) {
                      0 == t && (e.Hand.node.opacity = 255);
                    }),
                    (this.Light.onComplete = function () {
                      e.playCount++,
                        (e.Light.node.opacity = 0),
                        e.playCount >= 5
                          ? ((e.playCount = 0),
                            e.round++,
                            e.round >= 2
                              ? ((e.Light.onComplete = function () {
                                  e.playCount++,
                                    (e.Light.node.opacity = 0),
                                    (e.Hand.node.opacity = 0),
                                    e.playCount >= 5
                                      ? (e.circleCount++,
                                        setTimeout(function () {
                                          (e.node.active = !1), e.play();
                                        }, 3e3))
                                      : (e.Hand.play(), e.Light.play());
                                }),
                                (e.playCount = 0),
                                setTimeout(function () {
                                  e.Hand.play(), e.Light.play();
                                }, 2e3))
                              : setTimeout(function () {
                                  e.Light.play();
                                }, 2e3))
                          : e.Light.play();
                    }),
                    this.Light.play());
                }),
                (t.prototype.stop = function () {
                  (this.isStop = !0),
                    (this.node.active = !1),
                    (this.Hand.onComplete = function () {}),
                    (this.Light.onComplete = function () {}),
                    this.Hand.stop(),
                    this.Light.stop();
                }),
                (t.prototype.update = function (e) {}),
                (t = __decorate([r], t))
              );
            })(cc.Component));
        (o.default = a), cc._RF.pop();
      },
      { "../FrameAniBase": "FrameAniBase" },
    ],
    ResultLayer: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "37000IS74xCBIj2O3JKO3wm", "ResultLayer"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/Game"),
          n = e("./Controller/CelerSDK"),
          r = e("./Const"),
          a = e("./Controller/EventManager"),
          l = e("./Controller/EventName"),
          s = e("./Controller/UpdateController"),
          c = e("./Utils/GameSignal"),
          u = cc._decorator,
          h = u.ccclass,
          p = u.property,
          d = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.TitleAtlas = null),
                (t.Hource = null),
                (t.showLabel = {}),
                (t.label = {}),
                (t.step = {}),
                (t.curDoneCount = 0),
                (t.startUpdate = !1),
                t
              );
            }
            return (
              __extends(t, e),
              Object.defineProperty(t.prototype, "FlowerAnimation", {
                get: function () {
                  return this.node
                    .getChildByName("FlowerAnimation")
                    .getComponent(cc.Animation);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "SubmitButton", {
                get: function () {
                  return this.node
                    .getChildByName("SubmitButton")
                    .getComponent(cc.Button);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "LabelRoot", {
                get: function () {
                  return this.node.getChildByName("LabelRoot");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Title", {
                get: function () {
                  return this.node
                    .getChildByName("Title")
                    .getComponent(cc.Sprite);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Background", {
                get: function () {
                  return this.node.getChildByName("Background");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "ResultLight", {
                get: function () {
                  return this.node.getChildByName("bg_resultlight");
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "Position", {
                get: function () {
                  return this.node.getChildByName("Position");
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.onLoad = function () {
                this.SubmitButton.node.on(
                  cc.Node.EventType.TOUCH_END,
                  this.onSubmit,
                  this
                ),
                  this.Hource.setEventListener(this.eventListener.bind(this));
              }),
              (t.prototype.eventListener = function (e, t) {
                switch (t.stringValue) {
                  case "light":
                    this.FlowerAnimation.play(),
                      a.gEventMgr.emit(l.GlobalEvent.PLAY_EFFECT, "result_dev"),
                      this.ResultLight.runAction(
                        cc.repeatForever(cc.rotateBy(0.01, 0.5))
                      );
                }
              }),
              (t.prototype.onSubmit = function () {
                n.CelerSDK.inst.isOnCelerPlatform()
                  ? n.CelerSDK.inst.submitScore(i.Game.getScore())
                  : s.default.inst.restart();
              }),
              (t.prototype.initScoreLabel = function () {
                var e = i.Game.getBingoScore();
                (e[r.ScoreCountType[r.ScoreCountType.BingoCount]] =
                  e[r.ScoreType[r.ScoreType.BingoScore]] / r.Score.Bingo),
                  (e[
                    r.ScoreCountType[r.ScoreCountType.OverBingoCount]
                  ] = i.Game.getTotalBingoTimes()),
                  (e[
                    r.ScoreCountType[r.ScoreCountType.AllBingoCount]
                  ] = i.Game.getAllBingoCardCount()),
                  console.log(" game score:", e),
                  (this.showLabel = {}),
                  (this.label = {}),
                  (this.curDoneCount = 0),
                  (this.startUpdate = !1);
                for (
                  var t = 0, o = this.LabelRoot.children;
                  t < o.length;
                  t++
                ) {
                  var n = o[t],
                    a = n.getComponent(cc.Label);
                  a
                    ? ((n.active = !0),
                      (a.string = "0"),
                      (this.showLabel[n.name] = 0),
                      (this.label[n.name] = e[n.name] || 0),
                      this.label[n.name] > 0
                        ? (this.step[n.name] = Math.max(
                            1,
                            Math.floor(this.label[n.name] / 100)
                          ))
                        : this.label[n.name] < 0
                        ? (this.step[n.name] = Math.min(
                            -1,
                            Math.ceil(this.label[n.name] / 100)
                          ))
                        : ((this.step[n.name] = 0), this.addDoneCount()))
                    : (console.error(
                        n.name,
                        "'s component  cc.Label is missiing!"
                      ),
                      (n.active = !1));
                }
                console.log(
                  " init result label :",
                  this.LabelRoot.childrenCount
                ),
                  console.log(this.label),
                  console.log("====== step =========="),
                  console.log(this.step),
                  console.log(" show label"),
                  console.log(this.showLabel),
                  (this.startUpdate = !0);
              }),
              (t.prototype.show = function (e) {
                if (!this.node.active) {
                  c.ResultLayerShow.inst.dispatch(),
                    a.gEventMgr.emit(l.GlobalEvent.NORMAL_BGM),
                    i.Game.getAllBingoCardCount() >= 2
                      ? a.gEventMgr.emit(
                          l.GlobalEvent.PLAY_EFFECT,
                          "over_complete"
                        )
                      : a.gEventMgr.emit(
                          l.GlobalEvent.PLAY_EFFECT,
                          "over_time_up"
                        );
                  for (
                    var t = 0, o = this.Background.children;
                    t < o.length;
                    t++
                  ) {
                    (h = o[t]).active = h.name == r.Theme[i.Game.Theme];
                  }
                  for (
                    var s = 0, u = this.Position.children;
                    s < u.length;
                    s++
                  ) {
                    var h;
                    (h = u[s]).active = h.name == r.Theme[i.Game.Theme];
                  }
                  console.log(
                    " result layer show, matchid:",
                    n.CelerSDK.inst.MatchID,
                    ", seed:",
                    n.CelerSDK.inst.MatchRandomSeed
                  ),
                    (this.SubmitButton.node.scale = 0),
                    i.Game.pause(),
                    this.initScoreLabel(),
                    (this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame(
                      r.OverFont[r.OverType[e]]
                    )),
                    (this.node.active = !0);
                }
              }),
              (t.prototype.hide = function () {
                i.Game.resume(), (this.node.active = !1);
              }),
              (t.prototype.addDoneCount = function () {
                var e = this;
                this.curDoneCount++,
                  console.log(
                    "curDone:",
                    this.curDoneCount,
                    ", total:",
                    this.LabelRoot.childrenCount
                  ),
                  this.curDoneCount >= this.LabelRoot.childrenCount &&
                    ((this.startUpdate = !1),
                    this.SubmitButton.node.runAction(
                      cc.sequence(
                        cc.scaleTo(0.15, 1.2),
                        cc.scaleTo(0.1, 1),
                        cc.callFunc(function () {
                          e.scheduleOnce(function () {
                            n.CelerSDK.inst.submitScore(i.Game.getScore());
                          }, 5);
                        })
                      )
                    ));
              }),
              (t.prototype.update = function () {
                if (this.startUpdate)
                  for (
                    var e = 0, t = this.LabelRoot.children;
                    e < t.length;
                    e++
                  ) {
                    var o = t[e],
                      i = o.name;
                    if (o.active && this.showLabel[i] != this.label[i]) {
                      var n = o.getComponent(cc.Label);
                      n &&
                        (this.label[i] != this.showLabel[i] &&
                          0 != this.step[i] &&
                          (this.showLabel[i] += this.step[i]),
                        ((this.step[i] > 0 &&
                          this.showLabel[i] > this.label[i]) ||
                          (this.step[i] < 0 &&
                            this.showLabel[i] < this.label[i])) &&
                          (this.showLabel[i] = this.label[i]),
                        (n.string =
                          this.showLabel[i] > 0
                            ? this.showLabel[i]
                            : "/" + Math.abs(this.showLabel[i])),
                        this.showLabel[i] == this.label[i] &&
                          this.addDoneCount());
                    }
                  }
              }),
              __decorate(
                [p(cc.SpriteAtlas)],
                t.prototype,
                "TitleAtlas",
                void 0
              ),
              __decorate([p(sp.Skeleton)], t.prototype, "Hource", void 0),
              (t = __decorate([h], t))
            );
          })(cc.Component);
        (o.default = d), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/CelerSDK": "CelerSDK",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
        "./Controller/UpdateController": "UpdateController",
        "./Utils/GameSignal": "GameSignal",
      },
    ],
    Score: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "145bfRPC9pPLaM0crpB/9nD", "Score"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/EventManager"),
          n = e("./Controller/EventName"),
          r = e("./Const"),
          a = e("./Controller/Game"),
          l = cc._decorator,
          s = l.ccclass,
          c =
            (l.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.setParentCallback = null), t;
              }
              return (
                __extends(t, e),
                Object.defineProperty(t.prototype, "ScoreFail", {
                  get: function () {
                    return this.node
                      .getChildByName("ScoreFail")
                      .getComponent(cc.Label);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "ScoreSuccess", {
                  get: function () {
                    return this.node
                      .getChildByName("Score")
                      .getComponent(cc.Label);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Text", {
                  get: function () {
                    return this.node
                      .getChildByName("Text")
                      .getComponent(cc.Sprite);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onSetParent = function (e) {
                  e && this.setParentCallback && this.setParentCallback();
                }),
                (t.prototype.reuse = function () {
                  var e = this;
                  this.node._onSetParent = this.onSetParent.bind(this);
                  var t = arguments[0][0],
                    o = arguments[0][1],
                    l = arguments[0][2],
                    s = arguments[0][3],
                    c = arguments[0][4];
                  (this.node.active = !0),
                    (this.ScoreFail.node.active = !0),
                    (this.ScoreSuccess.node.active = !0),
                    (this.Text.node.active = null != c),
                    t > 0
                      ? ((this.ScoreSuccess.string = "/" + t.toString()),
                        (this.ScoreFail.string = ""))
                      : ((this.ScoreFail.string = "/" + Math.abs(t).toString()),
                        (this.ScoreSuccess.string = ""));
                  var u = t > 0 ? this.ScoreSuccess : this.ScoreFail;
                  t > 0
                    ? t > r.Score.Normal
                      ? a.Game.isOver ||
                        i.gEventMgr.emit(
                          n.GlobalEvent.PLAY_EFFECT,
                          "extra_score"
                        )
                      : a.Game.isOver ||
                        i.gEventMgr.emit(n.GlobalEvent.PLAY_EFFECT, "score")
                    : 0 == t ||
                      a.Game.isOver ||
                      i.gEventMgr.emit(n.GlobalEvent.PLAY_EFFECT, "oop_score"),
                    this.Text.node.active
                      ? ((this.Text.spriteFrame = c), (u.node.x = 0))
                      : (u.node.x = (-70 * u.string.length) / 2),
                    (u.node.opacity = 0 != t ? 255 : 0),
                    0 == t
                      ? ((this.Text.node.x = 0), (this.Text.node.anchorX = 0.5))
                      : ((this.Text.node.x = 0), (this.Text.node.anchorX = 1)),
                    (this.ScoreFail.node.scale = 0),
                    (this.ScoreSuccess.node.scale = 0),
                    (this.setParentCallback = function () {
                      var r =
                          CMath.Distance(l.position, e.node.position) / 1950,
                        a = CMath.ConvertToNodeSpaceAR(l, e.node),
                        c = 0,
                        h = 0;
                      0 == t && (h = 1);
                      var p = [];
                      e.Text.node.active &&
                        ((e.Text.node.scale = 0),
                        (e.Text.node.opacity = 255),
                        e.Text.node.runAction(
                          cc.sequence(
                            cc.scaleTo(0.1, 1.2 * o),
                            cc.callFunc(function () {
                              0 == t &&
                                i.gEventMgr.emit(
                                  n.GlobalEvent.PLAY_EFFECT,
                                  "timeup"
                                );
                            }),
                            cc.delayTime(0.4),
                            cc.scaleTo(0.1, 1 * o),
                            cc.delayTime(h),
                            cc.spawn(cc.scaleTo(0.3, 0), cc.fadeOut(0.1)),
                            cc.callFunc(function () {
                              0 == t &&
                                (console.log(" text action done!"), s && s());
                            })
                          )
                        ),
                        (c = 0.2)),
                        u.node.opacity > 10 &&
                          ((p = [
                            cc.delayTime(c),
                            cc.scaleTo(0.1, 1.2 * o),
                            cc.delayTime(0.2),
                            cc.scaleTo(0.1, 1 * o),
                            cc.callFunc(function () {
                              e.node.runAction(
                                cc.sequence(
                                  cc.delayTime(r / 2),
                                  cc.callFunc(function () {
                                    e.node.setParent(
                                      e.node.getParent().getParent()
                                    );
                                  })
                                )
                              );
                            }),
                            cc.spawn(
                              cc.moveTo(r, a).easing(cc.easeInOut(1)),
                              cc.fadeOut(r)
                            ),
                            cc.scaleTo(0.3, 0),
                            cc.callFunc(function () {
                              s && s();
                            }),
                          ]),
                          u.node.runAction(cc.sequence(p)));
                    });
                }),
                (t.prototype.unuse = function () {
                  (this.Text.node.x = 0),
                    (this.Text.node.y = 0),
                    this.Text.node.stopAllActions(),
                    (this.ScoreFail.node.x = 0),
                    (this.ScoreFail.node.y = 0),
                    (this.ScoreSuccess.node.x = 0),
                    (this.ScoreSuccess.node.y = 0),
                    this.ScoreFail.node.stopAllActions(),
                    (this.ScoreFail.node.scale = 1),
                    (this.ScoreFail.node.opacity = 255),
                    this.ScoreSuccess.node.stopAllActions(),
                    (this.ScoreSuccess.node.scale = 1),
                    (this.ScoreSuccess.node.opacity = 255),
                    (this.ScoreFail.node.active = !1),
                    (this.ScoreSuccess.node.active = !1),
                    (this.node.active = !1),
                    this.node.stopAllActions(),
                    (this.setParentCallback = null);
                }),
                (t = __decorate([s], t))
              );
            })(cc.Component));
        (o.default = c), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
      },
    ],
    Signal: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "85c5ci/wmNHyKlv3+6StAlz", "Signal"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.listenerMap = []), (t.onceListenerMap = []), t;
          }
          return (
            __extends(t, e),
            (t.prototype.doDispatch = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.excuteListener.apply(this, e),
                this.excuteOnce.apply(this, e);
            }),
            (t.prototype.excuteListener = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              if (this.listenerMap && this.listenerMap.length > 0)
                for (var o = 0, i = this.listenerMap; o < i.length; o++) {
                  var n = i[o];
                  n.callback.apply(n.target, e);
                }
            }),
            (t.prototype.excuteOnce = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              if (this.onceListenerMap && this.onceListenerMap.length > 0) {
                for (var o = 0, i = this.onceListenerMap; o < i.length; o++) {
                  var n = i[o];
                  n.callback.apply(n.target, e);
                }
                this.onceListenerMap.length = 0;
              }
            }),
            (t.prototype.listen = function (e, t) {
              this.listenerMap.push({ callback: e, target: t });
            }),
            (t.prototype.listenOnce = function (e, t) {
              this.onceListenerMap.push({ callback: e, target: t });
            }),
            (t.prototype.removeListener = function (e, t) {
              if (this.listenerMap && this.listenerMap.length > 0)
                for (var o = 0; o < this.listenerMap.length; ++o) {
                  var i = this.listenerMap[o];
                  i.callback == e &&
                    i.target == t &&
                    (this.listenerMap.splice(o, 1), --o);
                }
            }),
            (t.prototype.removeTarget = function (e) {
              if (this.listenerMap && this.listenerMap.length > 0)
                for (var t = 0; t < this.listenerMap.length; ++t) {
                  this.listenerMap[t].target == e &&
                    (this.listenerMap.splice(t, 1), --t);
                }
            }),
            (t.prototype.dispatch = function () {
              this.doDispatch(null);
            }),
            (t.prototype.dispatchOne = function (e) {
              this.doDispatch(e);
            }),
            (t.prototype.dispatchTwo = function (e, t) {
              this.doDispatch(e, t);
            }),
            (t.prototype.dispatchThree = function (e, t, o) {
              this.doDispatch(e, t, o);
            }),
            (t.prototype.dispatchFour = function (e, t, o, i) {
              this.doDispatch(e, t, o, i);
            }),
            (t.prototype.dispatchFive = function (e, t, o, i, n) {
              this.doDispatch(e, t, o, i, n);
            }),
            (t.prototype.addListener = function (e, t) {
              this.listen(e, t);
            }),
            (t.prototype.addOnce = function (e, t) {
              this.listenOnce(e, t);
            }),
            (t.prototype.addListenerOne = function (e, t) {
              this.listen(e, t);
            }),
            (t.prototype.addListenerTwo = function (e, t) {
              this.listen(e, t);
            }),
            (t.prototype.addListenerThree = function (e, t) {
              this.listen(e, t);
            }),
            (t.prototype.addListenerFour = function (e, t) {
              this.listen(e, t);
            }),
            (t.prototype.addListenerFive = function (e, t) {
              this.listen(e, t);
            }),
            (t.prototype.addOnceOne = function (e, t) {
              this.listenOnce(e, t);
            }),
            (t.prototype.addOnceTwo = function (e, t) {
              this.listenOnce(e, t);
            }),
            (t.prototype.addOnceThree = function (e, t) {
              this.listenOnce(e, t);
            }),
            (t.prototype.addOnceFour = function (e, t) {
              this.listenOnce(e, t);
            }),
            (t.prototype.addOnceFive = function (e, t) {
              this.listenOnce(e, t);
            }),
            t
          );
        })(e("./ToSingleton").SingleTon());
        (o.BaseSignal = i), cc._RF.pop();
      },
      { "./ToSingleton": "ToSingleton" },
    ],
    SkillPage: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4a566yh2NVEdrXc4uWoN/P6", "SkillPage"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Controller/Game"),
          n = e("../Const"),
          r = cc._decorator,
          a = r.ccclass,
          l =
            (r.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {
                  i.Game.LevelInfo.Skills.all.indexOf(
                    n.SkillType[this.node.name]
                  ) < 0 &&
                    (console.log(
                      " \u5220\u9664\u5f15\u5bfc\u9875\u9762:",
                      this.node.name
                    ),
                    this.node.removeFromParent(!0));
                }),
                (t.prototype.start = function () {}),
                (t = __decorate([a], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      { "../Const": "Const", "../Controller/Game": "Game" },
    ],
    SkillReminder: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "38c28H3NTdO15uR4EGgjfz6", "SkillReminder"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Utils/GameSignal"),
          n = e("./Reminder"),
          r = cc._decorator,
          a = r.ccclass,
          l =
            (r.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.isFull = !1), t;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {
                  var e = this;
                  i.SkillFullSignal.inst.addListenerOne(function (t) {
                    var o = e.getComponent(n.default);
                    e.isFull != t &&
                      o &&
                      ((e.isFull = t),
                      (o.isStop = !t),
                      e.isFull ? o.play() : o.stop());
                  }, this);
                }),
                (t.prototype.start = function () {}),
                (t.prototype.onDestroy = function () {
                  i.SkillFullSignal.inst.removeTarget(this);
                }),
                (t = __decorate([a], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      { "../Utils/GameSignal": "GameSignal", "./Reminder": "Reminder" },
    ],
    SkillTip: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b2d0avc+mRE3K+KTvNfUqhr", "SkillTip"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/EventManager"),
          n = e("./Controller/EventName"),
          r = cc._decorator,
          a = r.ccclass,
          l =
            (r.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {
                  (this.node.scaleX = 0),
                    i.gEventMgr.targetOff(this),
                    i.gEventMgr.on(n.GlobalEvent.SKILL_TIP, this.onTip, this);
                  for (
                    var e = 0,
                      t = [
                        n.GlobalEvent.BINGO,
                        n.GlobalEvent.ADD_SCORE,
                        n.GlobalEvent.CHANGE_CARD_TAB,
                        n.GlobalEvent.CHANGE_GAME_MODE,
                        n.GlobalEvent.CHANGE_SKILL_ORDER,
                        n.GlobalEvent.SHOW_SKILL_GUIDE,
                        n.GlobalEvent.ADD_2_NORMAL_REWARD,
                      ];
                    e < t.length;
                    e++
                  ) {
                    var o = t[e];
                    i.gEventMgr.on(o, this.hideTip, this);
                  }
                }),
                (t.prototype.start = function () {}),
                (t.prototype.onTip = function () {
                  this.node.scaleX > 0
                    ? this.node.runAction(
                        cc.sequence(
                          cc.moveBy(0.025, -5, 0),
                          cc.moveBy(0.05, 10, 0),
                          cc.moveBy(0.05, -10, 0),
                          cc.moveBy(0.025, 5, 0)
                        )
                      )
                    : this.node.runAction(cc.scaleTo(0.1, 1, 1));
                }),
                (t.prototype.hideTip = function () {
                  this.node.stopAllActions(),
                    this.node.runAction(cc.scaleTo(0.1, 0, 1));
                }),
                (t.prototype.update = function (e) {}),
                (t = __decorate([a], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      {
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
      },
    ],
    Skill: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "02d8d4FjeFEz4GYY7djfM63", "Skill"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/GameFactory"),
          n = e("./Const"),
          r = e("./Controller/Game"),
          a = e("./Controller/CelerSDK"),
          l = e("./Controller/EventManager"),
          s = e("./Controller/EventName"),
          c = e("./Point"),
          u = cc._decorator,
          h = u.ccclass,
          p =
            (u.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.ready = !1), t;
              }
              return (
                __extends(t, e),
                Object.defineProperty(t.prototype, "Background", {
                  get: function () {
                    return this.node
                      .getChildByName("Background")
                      .getComponent(cc.Sprite);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "Animation", {
                  get: function () {
                    return this.node.getComponent(cc.Animation);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.reuse = function () {
                  var e = this;
                  (this.node.scale = 0),
                    (this.pressCallback = arguments[0][0]),
                    (this.Background.spriteFrame = arguments[0][1]),
                    (this.skillType = arguments[0][2]);
                  var t = arguments[0][3];
                  this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function (t) {
                      if (((t.bubbles = !1), 0 == e.ready))
                        return (
                          console.log(
                            " skill no ready:",
                            n.SkillType[e.skillType]
                          ),
                          void l.gEventMgr.emit(s.GlobalEvent.SKILL_TIP)
                        );
                      if (r.Game.getGameTime() <= 0)
                        return (
                          console.log(
                            " game time up reuse:",
                            n.SkillType[e.skillType]
                          ),
                          void l.gEventMgr.emit(s.GlobalEvent.SKILL_TIP)
                        );
                      if (
                        r.Game.checkIsFull(r.Game.cardIndex) &&
                        [n.SkillType.Time, n.SkillType.Skip].indexOf(
                          e.skillType
                        ) < 0
                      )
                        return (
                          console.log("this card is full:", r.Game.cardIndex),
                          void l.gEventMgr.emit(s.GlobalEvent.SKILL_TIP)
                        );
                      var o = r.Game.CurrentReward.children[0];
                      if (e.skillType == n.SkillType.Magic) {
                        if (!o || !o.getComponent(c.default))
                          return (
                            console.log(" not CurrentRewardmagicSkill !"),
                            void l.gEventMgr.emit(s.GlobalEvent.SKILL_TIP)
                          );
                        var u = o.getComponent(c.default);
                        if (
                          u &&
                          r.Game.checkIsFullFromWord(r.Game.cardIndex, u.Word)
                        )
                          return (
                            console.log(
                              " \u6b64\u5217\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1magicSkill"
                            ),
                            void l.gEventMgr.emit(s.GlobalEvent.SKILL_TIP)
                          );
                        if (
                          u &&
                          r.Game.checkIsFullFromWord2(
                            r.Game.cardIndex,
                            u.Word,
                            u.Value
                          )
                        )
                          return (
                            console.log(
                              " \u6b64\u5217\u5df2\u7ecf\u5168\u90e8\u70b9\u6ee1magicSkill\u5269\u4f59\u5361\u7247\u8ddfpoint\u70b9\u6570\u4e00\u6837\uff0c\u65e0\u9700\u4f7f\u7528\u9b54\u6cd5\u7403"
                            ),
                            void l.gEventMgr.emit(s.GlobalEvent.SKILL_TIP)
                          );
                      }
                      if (r.Game.getCurMode() != n.SkillType.Normal)
                        return (
                          console.log(
                            " is using other skill now:",
                            n.SkillType[r.Game.getCurMode()]
                          ),
                          void l.gEventMgr.emit(s.GlobalEvent.SKILL_TIP)
                        );
                      var h = function () {
                        console.log(" use skill :", n.SkillType[e.skillType]),
                          r.Game.useSkill(e.skillType),
                          e.pressCallback &&
                            (e.pressCallback(), (e.pressCallback = null)),
                          i.gFactory.putObj("Skill", e.node);
                      };
                      a.CelerSDK.inst.isNew() && !r.Game.skillGuide[e.skillType]
                        ? l.gEventMgr.emit(
                            s.GlobalEvent.SHOW_SKILL_GUIDE,
                            e.skillType,
                            h
                          )
                        : h();
                    },
                    this
                  ),
                    (this.node.x = -120),
                    this.node.runAction(
                      cc.sequence(
                        cc.spawn(
                          cc.sequence(
                            cc.moveTo(0.1, -60, 214),
                            cc.moveTo(0.1, 0, 67 + 5 * t)
                          ),
                          cc.sequence(
                            cc.scaleTo(0.1, 1.2),
                            cc.scaleTo(0.1, 0.8)
                          )
                        ),
                        cc.callFunc(function () {
                          e.Animation.play();
                        }),
                        cc.scaleTo(0.1, 1),
                        cc.callFunc(function () {
                          (e.ready = !0),
                            a.CelerSDK.inst.isNew() &&
                              !r.Game.skillGuide[e.skillType] &&
                              l.gEventMgr.emit(
                                s.GlobalEvent.SHOW_SKILL_GUIDE,
                                e.skillType
                              );
                        })
                      )
                    );
                }),
                (t.prototype.unready = function () {
                  this.ready = !1;
                }),
                (t.prototype.turnReady = function () {
                  this.ready = !0;
                }),
                Object.defineProperty(t.prototype, "Type", {
                  get: function () {
                    return this.skillType;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.unuse = function () {
                  (this.ready = !1),
                    this.node.targetOff(this),
                    this.node.stopAllActions(),
                    (this.pressCallback = null);
                }),
                (t = __decorate([h], t))
              );
            })(cc.Component));
        (o.default = p), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/CelerSDK": "CelerSDK",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
        "./Controller/GameFactory": "GameFactory",
        "./Point": "Point",
      },
    ],
    SkipButton: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "35f4dgEnmhOB5KHLu7KVa3T", "SkipButton"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Controller/EventManager"),
          n = e("./Controller/EventName"),
          r = cc._decorator,
          a = r.ccclass,
          l =
            (r.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {
                  this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      setTimeout(function () {
                        i.gEventMgr.emit(n.GlobalEvent.HIDE_HELP);
                      }, 0);
                    },
                    this
                  );
                }),
                (t.prototype.start = function () {}),
                (t.prototype.update = function (e) {}),
                (t = __decorate([a], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      {
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
      },
    ],
    StepController: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5e60515g5pBlJXudFf1Z4T3", "StepController"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./LogHandler"),
          n = (function () {
            function e() {
              (this.totalStep = []), (this.curStep = []);
            }
            return (
              Object.defineProperty(e, "inst", {
                get: function () {
                  return this._ins ? this._ins : (this._ins = new e());
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.register = function (e, t) {
                (this.completeCallback = e), (this.totalStep = t);
              }),
              (e.prototype.nextStep = function (e) {
                this.totalStep.indexOf(e) < 0
                  ? console.error(" \u6ca1\u6709\u8fd9\u4e00\u6b65\uff1a", e)
                  : this.curStep.indexOf(e) >= 0
                  ? console.warn(" \u6b65\u9aa4\u5df2\u5b8c\u6210\uff1a", e)
                  : (this.curStep.push(e),
                    this.curStep.sort(function (e, t) {
                      return e > t ? -1 : 1;
                    }),
                    this.totalStep.sort(function (e, t) {
                      return e > t ? -1 : 1;
                    }),
                    i.LogHandler.inst.log(" cur step:", this.curStep.join(",")),
                    i.LogHandler.inst.log(
                      " total step:",
                      this.totalStep.join(",")
                    ),
                    this.curStep.join(",") == this.totalStep.join(",") &&
                      (i.LogHandler.inst.log(" step done"),
                      (this.totalStep.length = 0),
                      this.completeCallback(),
                      (this.completeCallback = null)));
              }),
              e
            );
          })();
        (o.gStep = n.inst), cc._RF.pop();
      },
      { "./LogHandler": "LogHandler" },
    ],
    SuperSkillLayer: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d8917JXrNNKupwEf3iWB7n+", "SuperSkillLayer"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("./Const"),
          n = e("./Controller/EventManager"),
          r = e("./Controller/EventName"),
          a = e("./Controller/Game"),
          l = cc._decorator,
          s = l.ccclass,
          c = l.property;
        (function (e) {
          (e[(e.TimeUp = 0)] = "TimeUp"), (e[(e.Complete = 1)] = "Complete");
        })(o.SuperEndType || (o.SuperEndType = {}));
        var u = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.SuperLightAtlas = null), (t.time = 0), (t.pause = !1), t;
          }
          return (
            __extends(t, e),
            Object.defineProperty(t.prototype, "Background", {
              get: function () {
                return this.node.getChildByName("Background");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "TimeBar", {
              get: function () {
                return this.node
                  .getChildByName("TimeBar")
                  .getComponent(cc.ProgressBar);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "TimeLabel", {
              get: function () {
                return this.TimeBar.node
                  .getChildByName("TimeLabel")
                  .getComponent(cc.Label);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Light", {
              get: function () {
                return this.node.getChildByName("Light");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "SelectCard", {
              get: function () {
                return this.node.getChildByName("SelectCard");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Card1Btn", {
              get: function () {
                return this.SelectCard.getChildByName("Card1");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Card2Btn", {
              get: function () {
                return this.SelectCard.getChildByName("Card2");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "ResultAnimation", {
              get: function () {
                return this.node
                  .getChildByName("ResultAnimation")
                  .getComponent(cc.Animation);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.onLoad = function () {
              var e = this;
              console.log(" super skill layer onload"),
                (this.node.scale = 0),
                n.gEventMgr.on(
                  r.GlobalEvent.UPDATE_MOUSE_LIGHT,
                  this.updateLight,
                  this
                ),
                n.gEventMgr.on(
                  r.GlobalEvent.SUPER_END_COMPLETE,
                  this.endComplete,
                  this
                ),
                n.gEventMgr.on(
                  r.GlobalEvent.ON_HIDE,
                  function () {
                    setTimeout(function () {
                      console.log(
                        " super skill pause:",
                        i.SkillType[a.Game.getCurMode()]
                      ),
                        (e.pause = !0);
                    }, 0);
                  },
                  this
                ),
                n.gEventMgr.on(
                  r.GlobalEvent.SKILL_RESUME,
                  function () {
                    setTimeout(function () {
                      console.log(
                        " super skill resume:",
                        i.SkillType[a.Game.getCurMode()]
                      ),
                        (e.pause = !1);
                    }, 0);
                  },
                  this
                ),
                this.Card1Btn.on(
                  cc.Node.EventType.TOUCH_END,
                  function () {
                    n.gEventMgr.emit(r.GlobalEvent.SCROLL_CARD, 0),
                      e.onSelectDone();
                  },
                  this
                ),
                this.Card2Btn.on(
                  cc.Node.EventType.TOUCH_END,
                  function () {
                    n.gEventMgr.emit(r.GlobalEvent.SCROLL_CARD, 1),
                      e.onSelectDone();
                  },
                  this
                );
            }),
            (t.prototype.onSelectDone = function () {
              (this.SelectCard.active = !1), (this.TimeBar.node.active = !0);
            }),
            (t.prototype.show = function () {
              this.ResultAnimation.once(
                cc.Animation.EventType.FINISHED,
                function () {
                  setTimeout(function () {
                    n.gEventMgr.emit(r.GlobalEvent.SKILL_DONE);
                  }, 1e3);
                },
                this
              );
              for (var e = 0, t = this.Background.children; e < t.length; e++) {
                var o = t[e];
                o.active = o.name == i.Theme[a.Game.Theme];
              }
              console.log(" \u5f00\u59cb\u6253\u5730\u9f20"),
                (this.ResultAnimation.node.active = !1),
                (this.TimeBar.node.active = !1),
                (this.time =
                  (window.chichihaoshuaihahaha,
                  a.Game.LevelInfo.SuperTime.LastTime)),
                (this.node.active = !0),
                (this.node.scale = 1),
                (this.TimeBar.progress = 1),
                (this.TimeLabel.string = Math.ceil(this.time).toString()),
                n.gEventMgr.emit(r.GlobalEvent.CHANGE_BGM, "mouse_bgm"),
                a.Game.superStart(),
                this.updateLight(),
                a.Game.getCardNumber() > 1
                  ? ((this.Card1Btn.active = !a.Game.checkIsFull(0)),
                    (this.Card2Btn.active = !a.Game.checkIsFull(1)),
                    (this.SelectCard.active = !0))
                  : this.onSelectDone();
            }),
            (t.prototype.updateLight = function () {
              for (
                var e = function (e) {
                    parseInt(e.name) <= a.Game.superHighLightCount
                      ? e.getComponent(cc.Animation).getAnimationState("shink")
                          .isPlaying ||
                        (e.getComponent(cc.Animation).once(
                          cc.Animation.EventType.FINISHED,
                          function () {
                            e.getComponent(cc.Animation).play("shink");
                          },
                          t
                        ),
                        n.gEventMgr.emit(
                          r.GlobalEvent.PLAY_EFFECT,
                          "mouse_light_up"
                        ),
                        e.getComponent(cc.Animation).play("turn"))
                      : (e.getComponent(cc.Animation).stop(),
                        (e.getComponent(
                          cc.Sprite
                        ).spriteFrame = t.SuperLightAtlas.getSpriteFrame(
                          i.SuperLight.Gray
                        )));
                  },
                  t = this,
                  o = 0,
                  l = this.Light.children;
                o < l.length;
                o++
              ) {
                e(l[o]);
              }
            }),
            (t.prototype.hide = function () {
              this.node.active &&
                ((this.node.active = !1),
                Math.floor(a.Game.getGameTime()) > 30
                  ? n.gEventMgr.emit(r.GlobalEvent.CHANGE_BGM, "bgm")
                  : n.gEventMgr.emit(r.GlobalEvent.CHANGE_BGM, "bgm_30"),
                n.gEventMgr.emit(r.GlobalEvent.NORMAL_BGM));
            }),
            (t.prototype.endTimeUp = function () {
              this.ResultAnimation.node.active ||
                ((this.TimeBar.node.active = !1),
                (this.ResultAnimation.node.active = !0),
                this.ResultAnimation.play("time_up"),
                n.gEventMgr.emit(r.GlobalEvent.SMALL_BGM),
                n.gEventMgr.emit(r.GlobalEvent.PLAY_EFFECT, "mouse_time_up"));
            }),
            (t.prototype.endComplete = function () {
              this.ResultAnimation.node.active ||
                ((this.TimeBar.node.active = !1),
                (this.ResultAnimation.node.active = !0),
                this.ResultAnimation.play("complete"),
                n.gEventMgr.emit(r.GlobalEvent.SMALL_BGM),
                n.gEventMgr.emit(r.GlobalEvent.PLAY_EFFECT, "mouse_complete"));
            }),
            (t.prototype.update = function (e) {
              this.node.active &&
                !this.SelectCard.active &&
                this.time > 0 &&
                0 == this.pause &&
                ((this.time -= e),
                (this.TimeLabel.string = Math.ceil(this.time).toString()),
                (this.TimeBar.progress =
                  this.time / a.Game.LevelInfo.SuperTime.LastTime),
                this.time <= 0 && this.endTimeUp());
            }),
            __decorate(
              [c(cc.SpriteAtlas)],
              t.prototype,
              "SuperLightAtlas",
              void 0
            ),
            (t = __decorate([s], t))
          );
        })(cc.Component);
        (o.default = u), cc._RF.pop();
      },
      {
        "./Const": "Const",
        "./Controller/EventManager": "EventManager",
        "./Controller/EventName": "EventName",
        "./Controller/Game": "Game",
      },
    ],
    TimeBonus: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e173aWv7rdBm6Av7NvVi4Ci", "TimeBonus"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = cc._decorator,
          n = i.ccclass,
          r =
            (i.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.setParentCallback = null), t;
              }
              return (
                __extends(t, e),
                (t.prototype.reuse = function () {
                  var e = this;
                  this.node._onSetParent = this.onSetParent.bind(this);
                  var t = arguments[0][0],
                    o = arguments[0][1];
                  this.setParentCallback = function () {
                    var i,
                      n = CMath.Distance(o.position, e.node.position) / 1950,
                      r = CMath.ConvertToNodeSpaceAR(o, e.node);
                    (i = [
                      cc.scaleTo(0.1, 1.2),
                      cc.delayTime(0.2),
                      cc.scaleTo(0.1, 1),
                      cc.spawn(
                        cc.moveTo(n, r).easing(cc.easeInOut(1)),
                        cc.fadeOut(n)
                      ),
                      cc.scaleTo(0.3, 0),
                      cc.callFunc(function () {
                        t && t();
                      }),
                    ]),
                      e.node.runAction(cc.sequence(i));
                  };
                }),
                (t.prototype.unuse = function () {
                  (this.node.scale = 1), (this.node.opacity = 255);
                }),
                (t.prototype.onSetParent = function (e) {
                  e && this.setParentCallback && this.setParentCallback();
                }),
                (t = __decorate([n], t))
              );
            })(cc.Component));
        (o.default = r), cc._RF.pop();
      },
      {},
    ],
    ToSingleton: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "13b67hH+whETpkf/Nbxx1Q1", "ToSingleton"),
          Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.SingleTon = function () {
            return (function () {
              function e() {}
              return (
                Object.defineProperty(e, "inst", {
                  get: function () {
                    return this.ins ? this.ins : (this.ins = new this());
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                e
              );
            })();
          }),
          cc._RF.pop();
      },
      {},
    ],
    TransitionSprite: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5cba704AVFGFZnPDW8Ox6DN", "TransitionSprite"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Controller/EventManager"),
          n = e("../Controller/EventName"),
          r = cc._decorator,
          a = r.ccclass,
          l =
            (r.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.isStart = !1), (t.time = 1), t;
              }
              return (
                __extends(t, e),
                (t.prototype.onLoad = function () {}),
                (t.prototype.start = function () {}),
                (t.prototype.gameStart = function () {
                  var e = this;
                  this.node.runAction(cc.fadeOut(1)),
                    setTimeout(function () {
                      i.gEventMgr.emit(n.GlobalEvent.GAME_START),
                        (e.node.active = !1);
                    }, 1e3);
                }),
                (t.prototype.update = function (e) {}),
                (t = __decorate([a], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      {
        "../Controller/EventManager": "EventManager",
        "../Controller/EventName": "EventName",
      },
    ],
    UpdateController: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5b33dt9985NxbWxSzXo0Dxg", "UpdateController"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Utils/ToSingleton"),
          n = cc._decorator,
          r = n.ccclass,
          a =
            (n.property,
            (function (e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t.assetsManager = null),
                  (t.STORAGE_PATH =
                    (window.jsb && jsb.fileUtils
                      ? jsb.fileUtils.getWritablePath()
                      : "/") + "hot-update"),
                  (t.MANIFEST_PAth = ""),
                  (t.isUpdating = !1),
                  (t.manifest = null),
                  (t.completeCallback = []),
                  (t.startCallback = []),
                  (t.errorCallback = []),
                  (t.progressCallback = []),
                  t.init(),
                  t
                );
              }
              return (
                __extends(t, e),
                (t.prototype.init = function () {
                  window.jsb &&
                    ((this.assetsManager = new jsb.AssetsManager(
                      this.MANIFEST_PAth,
                      this.STORAGE_PATH,
                      this.versionCompareHandle
                    )),
                    this.assetsManager.setVerifyCallback(
                      this.verifyCallback.bind(this)
                    ),
                    cc.sys.os === cc.sys.OS_ANDROID &&
                      this.assetsManager.setMaxConcurrentTask(2));
                }),
                (t.prototype.setManifest = function (e) {
                  this.manifest = e;
                }),
                (t.prototype.getVersion = function () {
                  return null == this.assetsManager
                    ? ""
                    : null == this.assetsManager.getLocalManifest()
                    ? ""
                    : this.assetsManager.getLocalManifest().getVersion();
                }),
                (t.prototype.addCompleteCallback = function (e, t) {
                  this.completeCallback.push({ target: t, callback: e });
                }),
                (t.prototype.addErrorCallback = function (e, t) {
                  this.errorCallback.push({ target: e, callback: t });
                }),
                (t.prototype.addStartCallback = function (e, t) {
                  this.startCallback.push({ target: e, callback: t });
                }),
                (t.prototype.addProgressCallback = function (e, t) {
                  this.progressCallback.push({ target: e, callback: t });
                }),
                (t.prototype.triggeError = function (e, t) {
                  void 0 === t && (t = !1), this.onError(e, t);
                }),
                (t.prototype.onError = function (e, t) {
                  void 0 === t && (t = !1),
                    console.log(
                      " this.errorCallback:",
                      this.errorCallback.length,
                      "error:",
                      e
                    );
                  for (var o = 0, i = this.errorCallback; o < i.length; o++) {
                    var n = i[o];
                    n.callback.apply(n.target, [e, t]);
                  }
                }),
                (t.prototype.onComplete = function (e, t) {
                  void 0 === t && (t = !1),
                    console.log(" on update complete:", this.getVersion()),
                    console.log("storagePath:", this.getStoragePath()),
                    console.log("search path:", this.getSearchPaths());
                  for (
                    var o = function (o) {
                        setTimeout(function () {
                          o.callback.apply(o.target, [e, t]);
                        }, 0);
                      },
                      i = 0,
                      n = this.completeCallback;
                    i < n.length;
                    i++
                  ) {
                    o(n[i]);
                  }
                }),
                (t.prototype.getStoragePath = function () {
                  return this.assetsManager
                    ? this.assetsManager.getStoragePath()
                    : "";
                }),
                (t.prototype.getSearchPaths = function () {
                  return window.jsb ? jsb.fileUtils.getSearchPaths() : "";
                }),
                (t.prototype.onStart = function (e, t) {
                  void 0 === t && (t = !1),
                    console.log(
                      " this.startCallback:",
                      this.startCallback.length
                    );
                  for (var o = 0, i = this.startCallback; o < i.length; o++) {
                    var n = i[o];
                    n.callback.apply(n.target, [e, t]);
                  }
                }),
                (t.prototype.onProgress = function (e, t) {
                  for (
                    var o = 0, i = this.progressCallback;
                    o < i.length;
                    o++
                  ) {
                    var n = i[o];
                    n.callback.apply(n.target, [e, t]);
                  }
                }),
                (t.prototype.loadCustomManifest = function (e) {
                  if (
                    null != this.assetsManager &&
                    this.assetsManager.getState() ==
                      jsb.AssetsManager.State.UNINITED
                  ) {
                    var t = new jsb.Manifest(e, this.STORAGE_PATH);
                    this.assetsManager.loadLocalManifest(t, this.STORAGE_PATH);
                  }
                }),
                (t.prototype.checkForUpdate = function () {
                  if (null != this.assetsManager) {
                    if (this.isUpdating)
                      return "Version update is on process...";
                    if (
                      (console.log(" start check for update ..."),
                      this.assetsManager.getState() ===
                        jsb.AssetsManager.State.UNINITED)
                    ) {
                      var e = this.manifest.nativeUrl;
                      console.log(" native url:", e),
                        cc.loader.md5Pipe &&
                          (e = cc.loader.md5Pipe.transformURL(e)),
                        this.assetsManager.loadLocalManifest(e);
                    }
                    if (
                      !this.assetsManager.getLocalManifest() ||
                      !this.assetsManager.getLocalManifest().isLoaded()
                    )
                      return (
                        this.onError("Failed to load local manifest ..."),
                        "Failed to load local manifest ..."
                      );
                    this.assetsManager.setEventCallback(
                      this.checkUpdateCallback.bind(this)
                    ),
                      this.assetsManager.checkUpdate(),
                      (this.isUpdating = !0);
                  } else this.onComplete("no need to update.");
                }),
                (t.prototype.checkUpdateCallback = function (e) {
                  switch (
                    (console.log(
                      "checkUpdateCallback Code: " + e.getEventCode()
                    ),
                    e.getEventCode())
                  ) {
                    case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                      this.onError(
                        "No local manifest file found, hot update skipped."
                      );
                      break;
                    case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                    case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                      this.onError(
                        "Fail to download manifest file, hot update skipped."
                      );
                      break;
                    case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                      var t = this.assetsManager.getRemoteManifest()
                          ? this.assetsManager.getRemoteManifest().getVersion()
                          : " null",
                        o = this.assetsManager.getLocalManifest()
                          ? this.assetsManager.getLocalManifest().getVersion()
                          : "null";
                      this.onComplete(
                        "Already up to date with the latest remote version :" +
                          t +
                          ", local version :" +
                          o
                      );
                      break;
                    case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                      this.isUpdating = !1;
                      var i = this.assetsManager.getLocalManifest()
                          ? this.assetsManager.getLocalManifest().getVersion()
                          : "null",
                        n = this.assetsManager.getRemoteManifest()
                          ? this.assetsManager.getRemoteManifest().getVersion()
                          : "null";
                      if (
                        (console.log(
                          "New version found, old:",
                          i,
                          ", new: ",
                          n
                        ),
                        "null" == i || "null" == n)
                      );
                      else {
                        console.log(
                          "storage path:",
                          this.assetsManager.getStoragePath()
                        );
                        var r = i.split(".")[0];
                        n.split(".")[0] > r
                          ? this.onStart(
                              "new version found, go to store to download new app.",
                              !0
                            )
                          : (this.onStart(
                              "new version found, update process start.",
                              !1
                            ),
                            this.updateVersion());
                      }
                      break;
                    default:
                      return;
                  }
                }),
                (t.prototype.getUpdateDescription = function () {
                  return "";
                }),
                (t.prototype.updateVersion = function () {
                  if (null != this.assetsManager && !this.isUpdating)
                    if (
                      [
                        jsb.AssetsManager.State.UPDATING,
                        jsb.AssetsManager.State.UNZIPPING,
                        jsb.AssetsManager.State.UP_TO_DATE,
                      ].indexOf(this.assetsManager.getState()) >= 0
                    )
                      this.onComplete(
                        "no need to update: " + this.assetsManager.getState(),
                        !1
                      );
                    else {
                      if (
                        this.assetsManager.getState() ===
                        jsb.AssetsManager.State.UNINITED
                      ) {
                        var e = this.manifest.nativeUrl;
                        cc.loader.md5Pipe &&
                          (e = cc.loader.md5Pipe.transformURL(e)),
                          this.assetsManager.loadLocalManifest(e);
                      }
                      this.assetsManager.setEventCallback(
                        this.updateCallback.bind(this)
                      ),
                        console.log(
                          " start update ...:",
                          this.assetsManager.getState()
                        ),
                        this.assetsManager.update(),
                        (this.isUpdating = !0);
                    }
                }),
                (t.prototype.versionToInt = function (e) {
                  return parseInt(e.toString().split(".").join(""));
                }),
                (t.prototype.versionToString = function (e) {
                  return (
                    Math.floor(e / 100) +
                    "." +
                    (Math.floor(e / 10) % 10) +
                    "." +
                    (Math.floor(e) % 10)
                  );
                }),
                (t.prototype.updateCallback = function (e) {
                  var t = this,
                    o = !1,
                    i = !1,
                    n = null;
                  switch (
                    (console.log("update event code:", e.getEventCode()),
                    e.getEventCode())
                  ) {
                    case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                      this.onError(
                        "No local manifest file found, hot update skipped."
                      ),
                        (i = !0);
                      break;
                    case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                      var r = e.getPercent();
                      (NaN != r && "number" == typeof r) || (r = 0),
                        this.onProgress(
                          e.getMessage()
                            ? "Updated file:" + e.getMessage()
                            : "Updating:" + (100 * r).toFixed(0) + "%",
                          r
                        );
                      break;
                    case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                    case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                      this.onError(
                        "Fail to download manifest file, hot update skipped."
                      ),
                        (i = !0);
                      break;
                    case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                      (n = function () {
                        var e = t.assetsManager.getRemoteManifest()
                          ? t.assetsManager.getRemoteManifest().getVersion()
                          : " null";
                        t.onComplete(
                          "Already up to date with the latest remote version :" +
                            e
                        );
                      }),
                        (i = !0);
                      break;
                    case jsb.EventAssetsManager.UPDATE_FINISHED:
                      (n = function () {
                        var o = t.assetsManager.getRemoteManifest()
                          ? t.assetsManager.getRemoteManifest().getVersion()
                          : " null";
                        t.onComplete(
                          "Update finished. new : " + o + e.getMessage(),
                          !0
                        );
                      }),
                        (o = !0);
                      break;
                    case jsb.EventAssetsManager.UPDATE_FAILED:
                      this.onError("Update failed. " + e.getMessage(), !0);
                      break;
                    case jsb.EventAssetsManager.ERROR_UPDATING:
                      this.onError(
                        "Asset update error: " +
                          e.getAssetId() +
                          ", " +
                          e.getMessage()
                      );
                      break;
                    case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                      this.onError(e.getMessage());
                  }
                  if (
                    (i &&
                      (this.assetsManager.setEventCallback(null),
                      (this.isUpdating = !1)),
                    o)
                  ) {
                    this.assetsManager.setEventCallback(null);
                    var a = jsb.fileUtils.getSearchPaths();
                    console.log("old searchPaths:", a);
                    var l = this.assetsManager
                      .getLocalManifest()
                      .getSearchPaths();
                    console.log("new path:", JSON.stringify(l));
                    for (var s = 0, c = l; s < c.length; s++) {
                      var u = c[s];
                      a.indexOf(u) < 0 && Array.prototype.unshift.apply(a, u);
                    }
                    cc.sys.localStorage.setItem(
                      "HotUpdateSearchPaths",
                      JSON.stringify(a)
                    ),
                      jsb.fileUtils.setSearchPaths(a),
                      console.log("new searchPaths:", JSON.stringify(a)),
                      console.log(
                        " paths storage:",
                        cc.sys.localStorage.getItem("HotUpdateSearchPaths")
                      );
                  }
                  n && n();
                }),
                (t.prototype.restart = function () {
                  window.jsb
                    ? (cc.audioEngine.stopAll(), cc.game.restart())
                    : window.location.reload();
                }),
                (t.prototype.retry = function () {
                  null != this.assetsManager &&
                    0 == this.isUpdating &&
                    this.assetsManager.downloadFailedAssets();
                }),
                (t.prototype.versionCompareHandle = function (e, t) {
                  cc.log(
                    "JS Custom Version Compare: version A is " +
                      e +
                      ", version B is " +
                      t
                  );
                  for (
                    var o = e.split("."), i = t.split("."), n = 0;
                    n < o.length;
                    ++n
                  ) {
                    var r = parseInt(o[n]),
                      a = parseInt(i[n] || "0");
                    if (r !== a) return r - a;
                  }
                  return i.length > o.length ? -1 : 0;
                }),
                (t.prototype.verifyCallback = function (e, t) {
                  var o = t.compressed,
                    i = t.md5,
                    n = t.path;
                  t.size;
                  return o
                    ? ("Verification passed : " + n, !0)
                    : ("Verification passed : " + n + " (" + i + ")", !0);
                }),
                (t.prototype.destory = function () {
                  this.assetsManager &&
                    this.assetsManager.setEventCallback(null),
                    (this.startCallback = []),
                    (this.completeCallback = []),
                    (this.errorCallback = []),
                    (this.progressCallback = []);
                }),
                (t = __decorate([r], t))
              );
            })(i.SingleTon()));
        (o.default = a), cc._RF.pop();
      },
      { "../Utils/ToSingleton": "ToSingleton" },
    ],
    WildDaubReminder: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "19a02n8kKtA34zFGz6dXGh8", "WildDaubReminder"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var i = e("../Utils/GameSignal"),
          n = e("../FrameAniBase"),
          r = cc._decorator,
          a = r.ccclass,
          l =
            (r.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.playCount = 0), (t.round = 0), t;
              }
              return (
                __extends(t, e),
                Object.defineProperty(t.prototype, "Tip", {
                  get: function () {
                    return this.node
                      .getChildByName("Tip")
                      .getComponent(n.default);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onLoad = function () {
                  (this.node.scale = 0),
                    i.WildDaubSignal.inst.addListenerOne(
                      this.onWildDaubStateChanged,
                      this
                    );
                }),
                (t.prototype.start = function () {}),
                (t.prototype.onWildDaubStateChanged = function (e) {
                  (this.node.active = e),
                    this.node.active
                      ? ((this.node.scale = 0),
                        (this.playCount = 0),
                        (this.round = 0),
                        this.play())
                      : ((this.node.scale = 0),
                        (this.Tip.onComplete = function () {}),
                        this.Tip.stop());
                }),
                (t.prototype.play = function () {
                  var e = this;
                  (this.node.scale = 0),
                    this.node.runAction(
                      cc.sequence(
                        cc.scaleTo(0.05, 1.2),
                        cc.scaleTo(0.05, 0.8, 1.4),
                        cc.scaleTo(0.05, 1.2, 0.8),
                        cc.scaleTo(0.05, 1),
                        cc.callFunc(function () {
                          e.Tip.play();
                        })
                      )
                    ),
                    (this.Tip.onComplete = function () {
                      e.playCount++ >= 5
                        ? ((e.playCount = 0),
                          e.round++ >= 3
                            ? ((e.round = 0),
                              (e.node.scale = 0),
                              setTimeout(function () {
                                e.play();
                              }, 3e3))
                            : ((e.node.scale = 0),
                              setTimeout(function () {
                                e.play();
                              }, 2e3)))
                        : e.Tip.play();
                    });
                }),
                (t.prototype.update = function (e) {}),
                (t.prototype.onDestroy = function () {
                  i.WildDaubSignal.inst.removeTarget(this);
                }),
                (t = __decorate([a], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      {
        "../FrameAniBase": "FrameAniBase",
        "../Utils/GameSignal": "GameSignal",
      },
    ],
  },
  {},
  [
    "BingoFont",
    "Card",
    "Const",
    "AudioController",
    "CelerSDK",
    "EventManager",
    "EventName",
    "Game",
    "GameFactory",
    "LogHandler",
    "StepController",
    "UpdateController",
    "FrameAniBase",
    "GameScene",
    "GoldSkillLayer",
    "Guide",
    "MagicPageGuide",
    "SkillPage",
    "CardLabels",
    "LoadLayer",
    "MagicLayer",
    "MouseGuidePage",
    "PauseLayer",
    "Point",
    "BingoReminder",
    "Reminder",
    "SkillReminder",
    "WildDaubReminder",
    "ResultLayer",
    "Score",
    "TransitionSprite",
    "Skill",
    "SkillTip",
    "SkipButton",
    "SuperSkillLayer",
    "TimeBonus",
    "Pad",
    "GameSignal",
    "HashMap",
    "Signal",
    "ToSingleton",
  ]
);
