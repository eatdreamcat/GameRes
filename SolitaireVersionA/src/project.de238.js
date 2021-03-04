window.__require = (function e(t, o, n) {
  function i(c, a) {
    if (!o[c]) {
      if (!t[c]) {
        var s = c.split("/");
        if (((s = s[s.length - 1]), !t[s])) {
          var l = "function" == typeof __require && __require;
          if (!a && l) return l(s, !0);
          if (r) return r(s, !0);
          throw new Error("Cannot find module '" + c + "'");
        }
      }
      var u = (o[c] = { exports: {} });
      t[c][0].call(
        u.exports,
        function (e) {
          return i(t[c][1][e] || e);
        },
        u,
        u.exports,
        e,
        t,
        o,
        n
      );
    }
    return o[c].exports;
  }
  for (
    var r = "function" == typeof __require && __require, c = 0;
    c < n.length;
    c++
  )
    i(n[c]);
  return i;
})(
  {
    AudioController: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "1d6d0OoirhGUovLXt4pSNNX", "AudioController"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var n = e("../utils/HashMap"),
          i = e("./EventManager"),
          r = e("./EventName"),
          c = e("./Game"),
          a = "sounds/";
        window.oncanplay &&
          (window.oncanplay = function () {
            s.canPlay = !0;
          });
        var s = (function () {
          function e() {
            (this.audioID = {}), (this.clips = new n.HashMap());
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
              console.warn(" start load AudioClip ");
              var t = this;
              cc.loader.loadResDir(a, cc.AudioClip, function (o, n, i) {
                if (o) console.error("load bgm fail, err:", o);
                else {
                  for (var r = 0, c = n; r < c.length; r++) {
                    var a = c[r];
                    "string" == typeof a._audio &&
                      cc.loader._cache &&
                      cc.loader._cache[a._audio] &&
                      cc.loader._cache[a._audio].buffer &&
                      (a._audio = cc.loader._cache[a._audio].buffer),
                      t.clips.add(a.name, a);
                  }
                  t.initEvent(), e && e();
                }
              });
            }),
            (e.prototype.initEvent = function () {
              var e = this;
              i.gEventMgr.targetOff(this),
                this.playMusic("bgm", !0),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_EFFECT,
                  function (t) {
                    e.playEffect(t);
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_RECYCLE_POKERS,
                  function () {
                    e.playEffect("recyclePoker");
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.DEV_POKERS,
                  function () {
                    e.playEffect("devPoker");
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_POKER_PLACE,
                  function () {
                    e.playEffect("pokerPlace");
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_RECYCLE,
                  function () {
                    e.playEffect("recycle" + c.Game.getCombo());
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_POKER_FLY,
                  function () {
                    e.playEffect("pokerFly");
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_OVER_1,
                  function () {
                    e.playEffect("result_flip");
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_OVER_2,
                  function () {
                    e.playEffect("result_dev");
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_PAUSE,
                  function () {
                    e.playEffect("pause");
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_SHAKE,
                  function () {
                    e.playEffect("shake");
                  },
                  this
                ),
                i.gEventMgr.on(
                  r.GlobalEvent.PLAY_START,
                  function () {
                    e.playEffect("start_count");
                  },
                  this
                );
            }),
            (e.prototype.playEffect = function (t, o) {
              var n = this;
              if ((void 0 === o && (o = !1), e.canPlay)) {
                if (!(cc.audioEngine.getEffectsVolume() <= 0.05)) {
                  var i = this.clips.get(t);
                  i
                    ? (this.audioID[t] = cc.audioEngine.playEffect(i, o))
                    : cc.loader.loadRes(a + t, cc.AudioClip, function (e, i) {
                        e
                          ? console.error(e)
                          : ("string" == typeof i._audio &&
                              cc.loader._cache &&
                              cc.loader._cache[i._audio] &&
                              cc.loader._cache[i._audio].buffer &&
                              (i._audio = cc.loader._cache[i._audio].buffer),
                            n.clips.add(i.name, i),
                            (n.audioID[t] = cc.audioEngine.playEffect(i, o)));
                      });
                }
              } else this.bindTouch();
            }),
            (e.prototype.playMusic = function (t, o) {
              var n = this;
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
              var i = this.clips.get(t);
              i
                ? cc.audioEngine.playMusic(i, o)
                : cc.loader.loadRes(a + t, cc.AudioClip, function (e, t) {
                    e
                      ? console.error(e)
                      : ("string" == typeof t._audio &&
                          cc.loader._cache &&
                          cc.loader._cache[t._audio] &&
                          cc.loader._cache[t._audio].buffer &&
                          (t._audio = cc.loader._cache[t._audio].buffer),
                        n.clips.add(t.name, t),
                        cc.audioEngine.playMusic(t, o));
                  });
            }),
            (e.prototype.bindTouch = function () {
              if (!e.hasBindTouch) {
                var t = this,
                  o = function () {
                    var n;
                    for (
                      cc.game.canvas.removeEventListener("touchstart", o),
                        e.canPlay = !0;
                      (n = e.PlayedList.pop()) &&
                      t.clips.get(n.clipName) &&
                      !n.skip;

                    )
                      cc.audioEngine.playMusic(t.clips.get(n.clipName), n.loop);
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
        (o.gAudio = s.inst), cc._RF.pop();
      },
      {
        "../utils/HashMap": "HashMap",
        "./EventManager": "EventManager",
        "./EventName": "EventName",
        "./Game": "Game",
      },
    ],
    BaseMediator: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5407aiTYPpBI41kfYYOPUU8", "BaseMediator");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                n(t, e),
                (t.prototype.bind = function (e) {
                  this.view = e;
                }),
                Object.defineProperty(t.prototype, "View", {
                  get: function () {
                    return (
                      console.assert(null != this.view, " view is null"),
                      this.view
                    );
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onRegister = function () {
                  console.error(" should override onRegister ");
                }),
                (t.prototype.onUnregister = function () {
                  console.error(" should override onUnregister ");
                }),
                (t = i([c], t))
              );
            })(cc.Component));
        (o.default = a), cc._RF.pop();
      },
      {},
    ],
    BaseView: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "09d6bvtesFN641k9VsvPjeP", "BaseView");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                n(t, e),
                (t.prototype.onLoad = function () {
                  this.node.scale = 0;
                }),
                (t.prototype.Show = function (e) {
                  (this.node.active = !0),
                    this.node.runAction(
                      cc.sequence(
                        cc.callFunc(function () {}),
                        cc.scaleTo(0.1, 1),
                        cc.callFunc(function () {
                          e && e();
                        })
                      )
                    );
                }),
                (t.prototype.Hide = function (e) {
                  var t = this;
                  this.node.runAction(
                    cc.sequence(
                      cc.scaleTo(0.1, 0),
                      cc.callFunc(function () {
                        (t.node.active = !1), e && e();
                      })
                    )
                  );
                }),
                (t.prototype.OnClick = function () {}),
                (t.prototype.BindMedaitor = function (e) {
                  if (!this.node.getComponent(e)) {
                    var t = this.node.addComponent(e);
                    return (
                      t.bind && t.bind(this), t.onRegister && t.onRegister(), t
                    );
                  }
                  console.warn(" this node already has the same component..");
                }),
                (t.prototype.UnbindMedaitor = function (e) {
                  var t = this.node.getComponent(e);
                  if (t)
                    return (
                      t.onUnregister && t.onUnregister(),
                      t.bind && t.bind(null),
                      this.node.removeComponent(e),
                      t
                    );
                  console.warn(" component already removed..");
                }),
                (t = i([c], t))
              );
            })(cc.Component));
        (o.default = a), cc._RF.pop();
      },
      {},
    ],
    EventManager: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "15a47pj/bZLz4bw5c1lt4L9", "EventManager"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var n = (function () {
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
            (e.prototype.emit = function (e, t, o, n, i, r) {
              this.eventTarget.emit(e.toString(), t, o, n, i, r);
            }),
            (e.prototype.on = function (e, t, o, n) {
              return this.eventTarget.on(e.toString(), t, o, n);
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
        (o.gEventMgr = n.inst), cc._RF.pop();
      },
      {},
    ],
    EventName: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "bf67a7QRNNGpo1qJkcJdq4+", "EventName"),
          Object.defineProperty(o, "__esModule", { value: !0 }),
          (function (e) {
            (e[(e.UPDATE_DRAW_ICON = 0)] = "UPDATE_DRAW_ICON"),
              (e[(e.UPDATE_SCORE = 1)] = "UPDATE_SCORE"),
              (e[(e.UPDATE_BACK_BTN_ICON = 2)] = "UPDATE_BACK_BTN_ICON"),
              (e[(e.OPEN_RESULT = 3)] = "OPEN_RESULT"),
              (e[(e.RESTART = 4)] = "RESTART"),
              (e[(e.COMPLETE = 5)] = "COMPLETE"),
              (e[(e.AUTO_COMPLETE_DONE = 6)] = "AUTO_COMPLETE_DONE"),
              (e[(e.UPDATE_TIP_ANIMATION = 7)] = "UPDATE_TIP_ANIMATION"),
              (e[(e.POP_GUIDE_STEP = 8)] = "POP_GUIDE_STEP"),
              (e[(e.PLAY_RECYCLE_POKERS = 9)] = "PLAY_RECYCLE_POKERS"),
              (e[(e.DEV_POKERS = 10)] = "DEV_POKERS"),
              (e[(e.PLAY_POKER_PLACE = 11)] = "PLAY_POKER_PLACE"),
              (e[(e.PLAY_POKER_FLY = 12)] = "PLAY_POKER_FLY"),
              (e[(e.PLAY_OVER_1 = 13)] = "PLAY_OVER_1"),
              (e[(e.PLAY_OVER_2 = 14)] = "PLAY_OVER_2"),
              (e[(e.PLAY_PAUSE = 15)] = "PLAY_PAUSE"),
              (e[(e.PLAY_START = 16)] = "PLAY_START"),
              (e[(e.PLAY_SHAKE = 17)] = "PLAY_SHAKE"),
              (e[(e.SMALL_BGM = 18)] = "SMALL_BGM"),
              (e[(e.NORMAL_BGM = 19)] = "NORMAL_BGM"),
              (e[(e.PLAY_RECYCLE = 20)] = "PLAY_RECYCLE"),
              (e[(e.PLAY_EFFECT = 21)] = "PLAY_EFFECT"),
              (e[(e.ON_SHOW = 22)] = "ON_SHOW"),
              (e[(e.ON_HIDE = 23)] = "ON_HIDE");
          })(o.GlobalEvent || (o.GlobalEvent = {})),
          cc._RF.pop();
      },
      {},
    ],
    GameFactory: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "44968IEriNJurc3wbMrKqft", "GameFactory"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var n,
          i = e("../utils/HashMap"),
          r = (function () {
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
                      var n = o[t],
                        i = e.getComponent(n);
                      i && i.unuse && i.unuse.apply(i);
                    }
                  else
                    for (
                      var r = 0, c = e.getComponents(cc.Component);
                      r < c.length;
                      r++
                    ) {
                      (n = c[r]) && n.unuse && n.unuse.apply(n);
                    }
                  this._pool.push(e);
                }
              }),
              (e.prototype.get = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var o = this._pool.length - 1;
                o < 0 &&
                  (!CELER_X && console.error(" last < 0 "), this.initPool(1)),
                  (o = this._pool.length - 1);
                var n = this._pool[o];
                if (((this._pool.length = o), this.poolHandlerComps))
                  for (
                    var i = 0, r = this.poolHandlerComps;
                    i < r.length;
                    i++
                  ) {
                    var c = r[i],
                      a = n.getComponent(c);
                    a && a.reuse && a.reuse.apply(a, arguments);
                  }
                else
                  for (
                    var s = 0, l = n.getComponents(cc.Component);
                    s < l.length;
                    s++
                  ) {
                    (c = l[s]) && c.reuse && c.reuse.apply(c, arguments);
                  }
                return n;
              }),
              e
            );
          })();
        (function (e) {
          (e[(e.INIT = 0)] = "INIT"),
            (e[(e.POKER = 4)] = "POKER"),
            (e[(e.AddScore = 8)] = "AddScore"),
            (e[(e.SubScore = 16)] = "SubScore"),
            (e[(e.DONE = 28)] = "DONE");
        })(n || (n = {}));
        var c = (function () {
          function e() {
            (this.step = n.INIT),
              (this.PokerPool = new i.HashMap()),
              (this.addScorePool = new i.HashMap()),
              (this.subScorePool = new i.HashMap());
          }
          return (
            Object.defineProperty(e, "inst", {
              get: function () {
                return this.ins ? this.ins : (this.ins = new e());
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.init = function (e, t, o, n) {
              var i = this;
              (this.doneCallback = e),
                setTimeout(function () {
                  i.initPoker(52, t);
                }, 0),
                setTimeout(function () {
                  i.initAddScore(10, o);
                }, 10),
                setTimeout(function () {
                  i.initSubScore(10, n);
                }, 20);
            }),
            (e.prototype.nextStep = function (e) {
              (this.step |= e),
                this.step >= n.DONE && this.doneCallback && this.doneCallback();
            }),
            (e.prototype.initPoker = function (e, t) {
              var o = this;
              t
                ? (o.PokerPool.add("Poker", new r(t, e)), o.nextStep(n.POKER))
                : cc.loader.loadRes(
                    "prefabs/poker",
                    cc.Prefab,
                    function (t, i) {
                      t
                        ? console.error("load poker prefab err:", t)
                        : (o.PokerPool.add("Poker", new r(i, e)),
                          o.nextStep(n.POKER));
                    }
                  );
            }),
            (e.prototype.getPoker = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return this.PokerPool.get("Poker").get(e);
            }),
            (e.prototype.putPoker = function (e) {
              this.PokerPool.get("Poker").put(e);
            }),
            (e.prototype.getPokerPool = function () {
              return this.PokerPool;
            }),
            (e.prototype.initAddScore = function (e, t) {
              var o = this;
              t
                ? (o.addScorePool.add("AddScore", new r(t, e)),
                  o.nextStep(n.AddScore))
                : cc.loader.loadRes(
                    "prefabs/AddScoreLabel",
                    cc.Prefab,
                    function (t, i) {
                      t
                        ? console.error("load scoreLabel prefab err :", t)
                        : (o.addScorePool.add("AddScore", new r(i, e)),
                          o.nextStep(n.AddScore));
                    }
                  );
            }),
            (e.prototype.getAddScore = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return this.addScorePool.get("AddScore").get(e);
            }),
            (e.prototype.putAddScore = function (e) {
              this.addScorePool.get("AddScore").put(e);
            }),
            (e.prototype.initSubScore = function (e, t) {
              var o = this;
              t
                ? (o.subScorePool.add("SubScore", new r(t, e)),
                  o.nextStep(n.SubScore))
                : cc.loader.loadRes(
                    "prefabs/SubScoreLabel",
                    cc.Prefab,
                    function (t, i) {
                      t
                        ? console.error("load red scoreLabel err:", t)
                        : (o.subScorePool.add("SubScore", new r(i, e)),
                          o.nextStep(n.SubScore));
                    }
                  );
            }),
            (e.prototype.getSubScore = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return this.subScorePool.get("SubScore").get(e);
            }),
            (e.prototype.putSubScore = function (e) {
              this.subScorePool.get("SubScore").put(e);
            }),
            e
          );
        })();
        (o.gFactory = c.inst), cc._RF.pop();
      },
      { "../utils/HashMap": "HashMap" },
    ],
    GameScene: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e1b90/rohdEk4SdmmEZANaD", "GameScene");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r,
          c = e("./controller/GameFactory"),
          a = e("./controller/Game"),
          s = e("./Poker"),
          l = e("./Pokers"),
          u = e("./controller/EventManager"),
          p = e("./controller/EventName"),
          d = e("./Stop"),
          h = e("./controller/AudioController"),
          f = e("./Guide"),
          g = e("./utils/LogHandler"),
          m = e("./utils/Utils"),
          _ = cc._decorator,
          y = _.ccclass,
          v = _.property;
        (function (e) {
          (e[(e.READY = 0)] = "READY"),
            (e[(e.PREFABS = 2)] = "PREFABS"),
            (e[(e.AUDIO = 16)] = "AUDIO"),
            (e[(e.CELER = 32)] = "CELER"),
            (e[(e.GUIDE = 4)] = "GUIDE"),
            (e[(e.CELER_READY = 18)] = "CELER_READY"),
            (e[(e.GUIDE_READY = 50)] = "GUIDE_READY"),
            (e[(e.DONE = 54)] = "DONE");
        })((r = o.LOAD_STEP || (o.LOAD_STEP = {})));
        var C = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.Poker = null),
              (t.PokerClip = null),
              (t.PlaceRoot = null),
              (t.PokerDevl = null),
              (t.GuideEmpty = null),
              (t.RemoveNode = null),
              (t.BackButton = null),
              (t.PauseButton = null),
              (t.CycleRoot = null),
              (t.PokerFlipRoot = null),
              (t.GuideEmpty2 = null),
              (t.BackButtonAtlas = null),
              (t.DrawButtonAtlas = null),
              (t.TimeLabel = null),
              (t.Top = null),
              (t.TimeIcon = null),
              (t.TimeIconAtlas = null),
              (t.ScoreLabel = null),
              (t.SmallOrg = null),
              (t.SmallGreen = null),
              (t.SubScoreLabel = null),
              (t.AddScoreLabel = null),
              (t.TimeAnimation = null),
              (t.LightAnimation = null),
              (t.Stop = null),
              (t.DrawCardAni = null),
              (t.Guide = null),
              (t.FlipAnimation = null),
              (t.Complete = null),
              (t.SubmitButton = null),
              (t.CheatToggle = null),
              (t.Tip = null),
              (t.TipAtlas = null),
              (t.SubmitTip = null),
              (t.step = r.READY),
              (t.canDispatchPoker = !1),
              (t.dispatchCardCount = 28),
              (t.devTime = 10),
              (t.backTime = 10),
              (t.score = 0),
              (t.showScore = 0),
              (t.scoreStep = 0),
              (t.isStart = !1),
              (t.tipIndex = 1),
              (t.isNewPlayer = !1),
              (t.tipTimeout = -1),
              (t.hasShowSubmitTip = !1),
              (t.isCelerStart = !1),
              (t.guideDone = !1),
              (t.canFilp = !1),
              (t.isEnd = !1),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.init = function () {
              (this.SubmitTip.node.active = !1),
                this.Stop.hide(),
                (this.Complete.node.active = !1),
                (this.TimeLabel.string = CMath.TimeFormat(
                  a.Game.getGameTime()
                )),
                (this.ScoreLabel.string = "0"),
                (this.TimeAnimation.node.active = !1),
                (this.LightAnimation.node.active = !1),
                (this.TimeIcon.spriteFrame = this.TimeIconAtlas.getSpriteFrame(
                  "icon_time"
                )),
                a.Game.getCycledPokerRoot().clear(),
                a.Game.getPlacePokerRoot().clear();
              for (var e = 0, t = this.PlaceRoot.children; e < t.length; e++) {
                var o = t[e];
                a.Game.addPlacePokerRoot(parseInt(o.name), o);
              }
              for (var n = 0, i = this.CycleRoot.children; n < i.length; n++) {
                o = i[n];
                a.Game.addCycledPokerRoot(parseInt(o.name), o);
              }
            }),
            (t.prototype.registerGuide = function () {
              var e = this,
                t = a.Game.getPlacePokerRoot().get(0),
                o = a.Game.getPlacePokerRoot().get(3),
                n = a.Game.getPlacePokerRoot().get(2),
                i = this.PlaceRoot.children[0],
                r = this.PlaceRoot.children[4],
                c = a.Game.getPlacePokerRoot().get(4).parent,
                l = this.PlaceRoot.children[6],
                u = a.Game.getPlacePokerRoot().get(6),
                p =
                  (u.parent,
                  this.PokerDevl.children[this.PokerDevl.childrenCount - 3]),
                d = a.Game.getPlacePokerRoot().get(1),
                h = this.PlaceRoot.children[1];
              this.Guide.register([
                {
                  touches: [
                    {
                      node: this.Top,
                      isButton: !1,
                      callback: function () {},
                      start: function () {},
                      end: function () {},
                    },
                    {
                      node: this.CycleRoot.children[0],
                      isButton: !1,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        e.CycleRoot.children[0].group = "default";
                      },
                      isAction: !0,
                    },
                    {
                      node: t,
                      isButton: !1,
                      callback: function () {},
                      start: function () {
                        t.getComponent(s.default) &&
                          t.getComponent(s.default).setGuide(!0);
                      },
                      end: function () {},
                      isAction: !0,
                    },
                  ],
                },
                {
                  touches: [
                    {
                      node: t,
                      isButton: !1,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        t.getComponent(s.default) &&
                          t.getComponent(s.default).setGuide(!1),
                          (t.group = "default");
                      },
                      isAction: !0,
                    },
                    {
                      node: o,
                      isButton: !1,
                      callback: function () {},
                      start: function () {
                        o.getComponent(s.default) &&
                          o.getComponent(s.default).setGuide(!0);
                      },
                      end: function () {
                        o.getComponent(s.default) &&
                          o.getComponent(s.default).setGuide(!1),
                          (o.group = "default");
                      },
                      isAction: !0,
                    },
                  ],
                },
                {
                  touches: [
                    {
                      node: u,
                      callback: function () {},
                      start: function () {
                        u.getComponent(s.default) &&
                          u.getComponent(s.default).setGuide(!0);
                      },
                      end: function () {
                        u.getComponent(s.default) &&
                          u.getComponent(s.default).setGuide(!1),
                          (u.group = "default");
                      },
                      isButton: !1,
                      isAction: !0,
                    },
                    {
                      node: c,
                      callback: function () {},
                      start: function () {
                        c.getComponent(s.default) &&
                          c.getComponent(s.default).setGuide(!0);
                      },
                      end: function () {
                        c.getComponent(s.default) &&
                          c.getComponent(s.default).setGuide(!1),
                          (c.group = "default");
                      },
                      isButton: !1,
                    },
                    {
                      node: this.GuideEmpty2,
                      callback: function () {},
                      start: function () {},
                      end: function () {},
                      isButton: !1,
                      isAction: !0,
                    },
                    {
                      node: r,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        r.group = "default";
                      },
                      isButton: !1,
                    },
                    {
                      node: l,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        l.group = "default";
                      },
                      isButton: !1,
                    },
                  ],
                },
                {
                  touches: [
                    {
                      node: i,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        i.group = "default";
                      },
                      isButton: !1,
                      isAction: !0,
                    },
                    {
                      node: n,
                      callback: function () {},
                      start: function () {
                        n.getComponent(s.default) &&
                          n.getComponent(s.default).setGuide(!0);
                      },
                      end: function () {
                        n.getComponent(s.default) &&
                          n.getComponent(s.default).setGuide(!1),
                          (n.group = "default");
                      },
                      isButton: !1,
                      isAction: !0,
                    },
                  ],
                },
                {
                  touches: [
                    {
                      node: this.PokerDevl,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        e.PokerDevl.group = "default";
                      },
                      isButton: !0,
                    },
                    {
                      node: this.DrawCardAni.node,
                      callback: function () {},
                      start: function () {
                        (e.DrawCardAni.node.active = !0), e.DrawCardAni.play();
                      },
                      end: function () {
                        (e.DrawCardAni.node.active = !1),
                          (e.DrawCardAni.node.group = "default");
                      },
                      isButton: !0,
                    },
                  ],
                },
                {
                  touches: [
                    {
                      node: this.PokerFlipRoot,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        e.PokerFlipRoot.group = "default";
                      },
                      isButton: !0,
                    },
                    {
                      node: p,
                      callback: function () {},
                      start: function () {
                        p.getComponent(s.default) &&
                          p.getComponent(s.default).setGuide(!0);
                      },
                      end: function () {
                        p.getComponent(s.default) &&
                          p.getComponent(s.default).setGuide(!1),
                          (p.group = "defautl");
                      },
                      isButton: !1,
                    },
                    {
                      node: d,
                      callback: function () {},
                      start: function () {
                        d.getComponent(s.default) &&
                          d.getComponent(s.default).setGuide(!0);
                      },
                      end: function () {
                        d.getComponent(s.default) &&
                          d.getComponent(s.default).setGuide(!1),
                          (d.group = "default");
                      },
                      isButton: !1,
                      isAction: !0,
                    },
                    {
                      node: this.GuideEmpty,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        e.GuideEmpty.group = "default";
                      },
                      isButton: !0,
                      isAction: !0,
                    },
                    {
                      node: h,
                      callback: function () {},
                      start: function () {},
                      end: function () {
                        h.group = "default";
                      },
                      isButton: !0,
                    },
                  ],
                },
                {
                  touches: [
                    {
                      node: this.SubmitButton.node,
                      callback: function () {
                        (e.SubmitButton.node.group = "default"),
                          (e.SubmitTip.node.active = !1);
                      },
                      start: function () {
                        e.SubmitTip.node.active = !0;
                      },
                      end: function () {},
                      isButton: !0,
                    },
                    {
                      node: this.Stop.EndButton.node,
                      callback: function () {
                        (e.Stop.EndButton.node.group = "default"),
                          e.Guide.showEnd();
                      },
                      start: function () {},
                      end: function () {},
                      isButton: !0,
                    },
                  ],
                },
              ]);
            }),
            (t.prototype.onLoad = function () {
              var e = this;
              CELER_X && g.LogHandler.inst.initLog(celerSDK.log),
                g.LogHandler.inst.log(" game scene onload"),
                (this.DrawCardAni.node.active = !1),
                (this.Guide.node.active = !1),
                (a.Game.removeNode = this.RemoveNode),
                (a.Game.pokerFlipRoot = this.PokerFlipRoot),
                (a.Game.RecycleRoot = this.CycleRoot),
                (this.Tip.active = !1),
                (CMath.randomSeed = 0.7280168460919095);
              var t = this;
              CELER_X &&
                celerSDK.onStart(
                  function () {
                    t.celerStart();
                  }.bind(this)
                ),
                CELER_X &&
                  celerSDK.provideScore(function () {
                    return parseInt(a.Game.getScore().toString());
                  }),
                (this.CheatToggle.node.active = CHEAT_OPEN),
                (this.CheatToggle.isChecked = !1),
                this.CheatToggle.node.on(
                  "toggle",
                  function () {
                    window.cheat = e.CheatToggle.isChecked;
                  },
                  this
                ),
                this.init(),
                cc.game.setFrameRate(60),
                setTimeout(function () {
                  c.gFactory.init(
                    function () {
                      this.nextStep(r.PREFABS);
                    }.bind(e),
                    e.Poker,
                    e.AddScoreLabel,
                    e.SubScoreLabel
                  );
                }, 0),
                setTimeout(function () {
                  h.gAudio.init(function () {
                    e.nextStep(r.AUDIO);
                  });
                }, 10),
                setTimeout(function () {
                  cc.loader.loadRes("prefabs/Result");
                }, 20),
                setTimeout(function () {
                  cc.loader.loadResDir("sounds");
                }, 30),
                this.PauseButton.node.on(
                  cc.Node.EventType.TOUCH_START,
                  function (t) {
                    a.Game.isComplete() ||
                      (a.Game.setPause(!0), e.Stop.show(1));
                  },
                  this
                ),
                this.PauseButton.node.on(
                  cc.Node.EventType.TOUCH_END,
                  function (e) {},
                  this
                ),
                this.PauseButton.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  function (e) {},
                  this
                ),
                this.SubmitButton.node.on(
                  cc.Node.EventType.TOUCH_END,
                  function (t) {
                    a.Game.resetFreeTime(),
                      t.getUserData
                        ? (t.getUserData()(), e.Stop.show(-1, t.getUserData()))
                        : e.Stop.show(-1),
                      a.Game.setPause(!0);
                  },
                  this
                ),
                this.PokerFlipRoot.on(
                  cc.Node.EventType.CHILD_ADDED,
                  this.onPokerFlipAddChild,
                  this
                ),
                this.PokerDevl.on(
                  cc.Node.EventType.CHILD_REMOVED,
                  function () {
                    !e.LightAnimation.node.active &&
                      e.PokerDevl.childrenCount <= 0 &&
                      ((e.LightAnimation.node.active = !0),
                      e.LightAnimation.play());
                  },
                  this
                ),
                this.PokerDevl.on(
                  cc.Node.EventType.CHILD_ADDED,
                  function (e) {
                    var t = e.getComponent(s.default);
                    t && t.setRecycle(!1);
                  },
                  this
                ),
                this.PokerFlipRoot.on(
                  cc.Node.EventType.CHILD_REMOVED,
                  this.onPokerFlipRemoveChild,
                  this
                ),
                this.PokerDevl.on(
                  cc.Node.EventType.TOUCH_START,
                  function (t) {
                    a.Game.isTimeOver() ||
                      a.Game.isComplete() ||
                      !e.canFilp ||
                      (a.Game.resetFreeTime(),
                      e.devTime >= 0.3 && (e.devPoker(), (e.devTime = 0)));
                  },
                  this
                ),
                this.PokerDevl.on(
                  cc.Node.EventType.TOUCH_END,
                  function (e) {},
                  this
                ),
                this.PokerDevl.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  function (e) {},
                  this
                ),
                u.gEventMgr.on(
                  p.GlobalEvent.COMPLETE,
                  function () {
                    (e.Complete.node.active = !0), e.Complete.play();
                  },
                  this
                ),
                (this.BackButton.node
                  .getChildByName("Background")
                  .getComponent(
                    cc.Sprite
                  ).spriteFrame = this.BackButtonAtlas.getSpriteFrame(
                  "btn_backgray"
                )),
                (this.BackButton.interactable = !1),
                this.BackButton.node.on(
                  cc.Node.EventType.TOUCH_START,
                  function (t) {
                    a.Game.isTimeOver() ||
                      e.backTime < 0.5 ||
                      a.Game.isComplete() ||
                      ((e.backTime = 0),
                      a.Game.resetFreeTime(),
                      a.Game.backStep());
                  },
                  a.Game
                ),
                this.BackButton.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  function (e) {},
                  a.Game
                ),
                this.BackButton.node.on(
                  cc.Node.EventType.TOUCH_END,
                  function (e) {},
                  a.Game
                ),
                u.gEventMgr.on(
                  p.GlobalEvent.UPDATE_BACK_BTN_ICON,
                  function () {
                    (e.BackButton.interactable = a.Game.canBackStep()),
                      e.BackButton.interactable
                        ? (e.BackButton.node
                            .getChildByName("Background")
                            .getComponent(
                              cc.Sprite
                            ).spriteFrame = e.BackButtonAtlas.getSpriteFrame(
                            "btn_back"
                          ))
                        : (e.BackButton.node
                            .getChildByName("Background")
                            .getComponent(
                              cc.Sprite
                            ).spriteFrame = e.BackButtonAtlas.getSpriteFrame(
                            "btn_backgray"
                          ));
                  },
                  this
                ),
                u.gEventMgr.on(
                  p.GlobalEvent.UPDATE_DRAW_ICON,
                  function () {
                    switch (a.Game.getFreeDrawTimes()) {
                      case 1:
                        e.PokerDevl.getComponent(
                          cc.Sprite
                        ).spriteFrame = e.DrawButtonAtlas.getSpriteFrame(
                          "bg_solitarienone1"
                        );
                        break;
                      case 2:
                        e.PokerDevl.getComponent(
                          cc.Sprite
                        ).spriteFrame = e.DrawButtonAtlas.getSpriteFrame(
                          "bg_solitarienone2"
                        );
                        break;
                      case 3:
                        e.PokerDevl.getComponent(
                          cc.Sprite
                        ).spriteFrame = e.DrawButtonAtlas.getSpriteFrame(
                          "bg_solitarienone3"
                        );
                        break;
                      default:
                        e.PokerDevl.getComponent(
                          cc.Sprite
                        ).spriteFrame = e.DrawButtonAtlas.getSpriteFrame(
                          "bg_solitarienone20"
                        );
                    }
                  },
                  this
                ),
                u.gEventMgr.on(
                  p.GlobalEvent.UPDATE_SCORE,
                  function (t, o) {
                    e.scoreStep = Math.ceil(Math.max(t / 20, e.scoreStep));
                    var n = CMath.ConvertToNodeSpaceAR(
                      e.ScoreLabel.node,
                      e.RemoveNode
                    );
                    if (t > 0) {
                      var i = c.gFactory.getAddScore("/" + t.toString());
                      (i.group = e.isStart ? "top" : "guide"),
                        i.setParent(e.RemoveNode),
                        i.setPosition(o),
                        i.runAction(
                          cc.sequence(
                            cc.scaleTo(0, 0),
                            cc.scaleTo(0.15, 1.5),
                            cc.delayTime(0.25),
                            cc.scaleTo(0.1, 1),
                            cc.moveTo(0.25, n.x, n.y),
                            cc.callFunc(function () {
                              (e.showScore = a.Game.getScore()),
                                c.gFactory.putAddScore(i);
                            })
                          )
                        );
                    } else {
                      var r = c.gFactory.getSubScore(
                        "/" + Math.abs(t).toString()
                      );
                      (r.group = e.isStart ? "top" : "guide"),
                        r.setParent(e.RemoveNode),
                        r.setPosition(o),
                        r.runAction(
                          cc.sequence(
                            cc.scaleTo(0, 0),
                            cc.scaleTo(0.15, 1.5),
                            cc.delayTime(0.25),
                            cc.scaleTo(0.1, 1),
                            cc.moveTo(0.25, n.x, n.y),
                            cc.callFunc(function () {
                              (e.showScore = a.Game.getScore()),
                                c.gFactory.putSubScore(r);
                            })
                          )
                        );
                    }
                  },
                  this
                ),
                u.gEventMgr.once(
                  p.GlobalEvent.OPEN_RESULT,
                  this.openResult,
                  this
                );
            }),
            (t.prototype.openResult = function (e) {
              var t = this;
              if (!this.isStart && !e)
                return this.Guide.hide(), void this.nextStep(r.GUIDE);
              this.Stop.hide(!1),
                this.node.getChildByName("Result") ||
                  (console.log(" load result layer..."),
                  cc.loader.loadRes(
                    "prefabs/Result",
                    cc.Prefab,
                    function (e, o) {
                      if (!t.node.getChildByName("Result"))
                        if (e)
                          console.error(
                            "sumbit score by load resultLayer error, matchid:",
                            a.Game.MatchInfo.matchId,
                            ", seed:",
                            a.Game.MatchInfo.sharedRandomSeed
                          ),
                            CELER_X && celerSDK.submitScore(a.Game.getScore());
                        else {
                          var n = cc.instantiate(o);
                          (n.name = "Result"), t.node.addChild(n);
                        }
                    }
                  ));
            }),
            (t.prototype.celerStart = function () {
              console.log(" onStart call!, start call get match.");
              var e = CELER_X
                ? celerSDK.getMatch()
                : {
                    matchId: "",
                    sharedRandomSeed: Math.random(),
                    shouldLaunchTutorial: false,
                    difficultyLevel: 2,
                  };
              (a.Game.MatchInfo = e),
                m.Random.setRandomSeed(e.sharedRandomSeed),
                e && e.sharedRandomSeed
                  ? ((CMath.randomSeed = e.sharedRandomSeed),
                    (CMath.sharedSeed = e.sharedRandomSeed),
                    console.log(
                      " match id:",
                      a.Game.MatchInfo.matchId,
                      ", seed:",
                      a.Game.MatchInfo.sharedRandomSeed
                    ))
                  : (console.error(" Match info invaild "),
                    (CMath.randomSeed = 0.3004413377150996),
                    (CMath.sharedSeed = 0.3004413377150996)),
                g.LogHandler.inst.log(
                  " celerx onStart:",
                  a.Game.MatchInfo.matchId,
                  ", seed:",
                  a.Game.MatchInfo.sharedRandomSeed
                ),
                e && e.shouldLaunchTutorial
                  ? (this.isNewPlayer = !0)
                  : ((this.isNewPlayer = !1),
                    this.Guide.hide(),
                    this.nextStep(r.GUIDE)),
                this.nextStep(r.CELER);
            }),
            (t.prototype.nextStep = function (e) {
              (this.step |= e),
                console.log(
                  " step:",
                  r[this.step],
                  ",",
                  this.step,
                  ", now:",
                  r[e]
                ),
                this.step >= r.DONE && !this.isStart
                  ? (console.log("  startGame ---------------------- "),
                    (this.isStart = !0),
                    this.Guide.hide(),
                    this.startGame())
                  : this.step >= r.GUIDE_READY &&
                    this.isNewPlayer &&
                    !this.guideDone
                  ? (console.log("  start guide ------------"),
                    this.startGuide())
                  : this.step >= r.CELER_READY &&
                    !this.isCelerStart &&
                    (g.LogHandler.inst.log("  celerx.ready ------------"),
                    CELER_X && celerSDK.ready(),
                    (this.isCelerStart = !0),
                    !CELER_X && this.celerStart());
            }),
            (t.prototype.startGuide = function () {
              var e = this;
              (this.canFilp = !1), (this.guideDone = !0);
              var t = l.GuidePokers.concat([]).reverse();
              for (a.Game.allPokers.length = 0; t.length > 0; ) {
                var o = t.length - 1,
                  n = c.gFactory.getPoker([t.pop()]);
                (n.name = o.toString()),
                  (n.x = 0),
                  (n.y = 0),
                  this.PokerDevl.addChild(n),
                  a.Game.allPokers.push(n.getComponent(s.default));
              }
              this.Guide.showBlock(),
                this.startDevPoker(
                  [0, 7, 13, 18, 19, 22, 25, 26, 27],
                  [22, 27],
                  function () {
                    e.registerGuide(),
                      e.Guide.startGuide(function () {
                        e.nextStep(r.GUIDE);
                      }),
                      (e.canFilp = !0);
                  }
                );
            }),
            (t.prototype.prepareGame = function () {
              console.log("GameScene.prepareGame");
              for (var e = 0, t = a.Game.allPokers; e < t.length; e++) {
                var o = t[e];
                c.gFactory.putPoker(o.node);
              }
              (a.Game.allPokers.length = 0),
                (this.Top.group = "default"),
                a.Game.resetscore(),
                (this.showScore = 0),
                (this.TimeAnimation.node.active = !1),
                (this.TimeLabel.font = this.SmallGreen),
                (this.TimeIcon.spriteFrame = this.TimeIconAtlas.getSpriteFrame(
                  "icon_time"
                ));
              var n = a.Game.getGameTime();
              (this.TimeLabel.string = CMath.TimeFormat(n)),
                a.Game.getCycledPokerRoot().clear(),
                a.Game.getPlacePokerRoot().clear();
              for (var i = 0, r = this.PlaceRoot.children; i < r.length; i++) {
                var s = r[i];
                a.Game.addPlacePokerRoot(parseInt(s.name), s);
              }
              for (var l = 0, u = this.CycleRoot.children; l < u.length; l++) {
                s = u[l];
                a.Game.addCycledPokerRoot(parseInt(s.name), s);
              }
            }),
            (t.prototype.startGame = function () {
              var e = this;
              console.log(" GameScene.startGame"),
                CELER_X
                  ? (celerSDK.onPause(function () {
                      e.isEnd ||
                        (console.log(" game on background"),
                        e.Stop.show(0, !1, !1));
                    }),
                    celerSDK.onResume(function () {
                      e.isEnd ||
                        (console.log(" game on forground"),
                        u.gEventMgr.emit(p.GlobalEvent.ON_SHOW));
                    }))
                  : (cc.game.on(
                      cc.game.EVENT_HIDE,
                      function () {
                        e.isEnd ||
                          (console.log(" game on background"),
                          e.Stop.show(0, !1, !1));
                      },
                      this
                    ),
                    cc.game.on(
                      cc.game.EVENT_SHOW,
                      function () {
                        e.isEnd ||
                          (console.log(" game on forground"),
                          u.gEventMgr.emit(p.GlobalEvent.ON_SHOW));
                      },
                      this
                    )),
                (this.canFilp = !1),
                a.Game.initAllData(),
                this.prepareGame();
              for (
                var t = l.Pokers.concat([]),
                  o = l.Pokers.concat([]),
                  n = [],
                  i = [];
                o.length > 0;

              ) {
                var r = o.length,
                  s = CMath.getRandom(0, 1),
                  d = Math.floor(s * r);
                i.push(d), n.push(o.splice(d, 1)[0]);
              }
              for (var h = 0; h++ <= 499 && 0 == m.checkIsNotZeroScore(n); )
                for (
                  n.length = 0,
                    o.length = 0,
                    o = l.Pokers.concat([]),
                    i.length = 0;
                  o.length > 0;

                ) {
                  (r = o.length),
                    (s = CMath.getRandom(0, 1)),
                    (d = Math.floor(s * r));
                  i.push(d), n.push(o.splice(d, 1)[0]);
                }
              for (
                console.log(
                  " \u662f\u5426\u662f\u975e0\u5206\u5c40\uff1a",
                  m.checkIsNotZeroScore(n),
                  ",checkCount:",
                  h,
                  n
                );
                t.length > 0;

              ) {
                var f = t.length - 1,
                  g = t.splice(i.shift(), 1),
                  _ = c.gFactory.getPoker(g);
                _ || console.error(" poker node from factory is null "),
                  (_.name = f.toString()),
                  (_.x = 0),
                  (_.y = 0),
                  this.PokerDevl.addChild(_);
              }
              this.startDevPoker([0, 7, 13, 18, 22, 25, 27], [], function () {
                e.canFilp = !0;
              });
            }),
            (t.prototype.startDevPoker = function (e, t, o) {
              var n = this;
              console.log(" GamsScene.startDevPoker ");
              var i = 0,
                r = this.PokerDevl.childrenCount,
                c = [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  2,
                  3,
                  4,
                  5,
                  6,
                  3,
                  4,
                  5,
                  6,
                  4,
                  5,
                  6,
                  5,
                  6,
                  6,
                ],
                d = function () {
                  if (i++ >= n.dispatchCardCount)
                    return (
                      (n.canDispatchPoker = !0),
                      (n.LightAnimation.node.active = !0),
                      n.LightAnimation.play(),
                      console.log("func1 done ,invoke callback"),
                      void (o && o())
                    );
                  var h = n.PokerDevl.getChildByName((r - i).toString());
                  if (h) {
                    var f = a.Game.getPlacePokerRoot().get(c[i - 1]);
                    if (f) {
                      var g = CMath.ConvertToNodeSpaceAR(h, f),
                        m = t.indexOf(i - 1) >= 0 ? l.OFFSET_Y : l.OFFSET_Y / 3;
                      f.getComponent(s.default) ||
                        (a.Game.addPlacePokerRoot(c[i - 1], h),
                        (m = l.Empty_Offset)),
                        h.setParent(f);
                      var _ = h.getComponent(s.default);
                      h.setPosition(g),
                        (h.group = "top"),
                        e.indexOf(i - 1) >= 0 &&
                          (_.flipCard(0.1), _.setNormal()),
                        u.gEventMgr.emit(p.GlobalEvent.DEV_POKERS),
                        h.runAction(
                          cc.sequence(
                            cc.moveTo(0.05, 0, m),
                            cc.callFunc(function () {
                              (h.group = "default"),
                                _.setDefaultPosition(),
                                d();
                            }, n)
                          )
                        );
                    } else console.error(" no target on func1 dev poker");
                  } else console.log(" poker node invaild on func1!");
                };
              d();
            }),
            (t.prototype.recyclePoker = function () {
              var e = this;
              if (
                !(
                  this.PokerDevl.childrenCount > 0 ||
                  this.PokerFlipRoot.childrenCount <= 0
                )
              ) {
                this.LightAnimation.node.active &&
                  (this.LightAnimation.node.active = !1);
                var t = [],
                  o = 0,
                  n = CMath.ConvertToNodeSpaceAR(
                    this.PokerDevl,
                    this.RemoveNode
                  );
                a.Game.getFreeDrawTimes() > 0
                  ? (a.Game.addFreeDrawTimes(-1), (o = 1))
                  : (a.Game.getScore() >= 20
                      ? t.push(20)
                      : t.push(a.Game.getScore()),
                    a.Game.addScore(-20, n, "DrawPoker"));
                var i = [],
                  r = [],
                  c = [],
                  d = this.PokerFlipRoot.children.concat().reverse(),
                  h = !1;
                this.PokerFlipRoot.childrenCount >= 3
                  ? (this.FlipAnimation.play(),
                    u.gEventMgr.emit(p.GlobalEvent.PLAY_RECYCLE_POKERS))
                  : (h = !0);
                for (
                  var f = function (t) {
                      t.opacity = 255;
                      var o = CMath.ConvertToNodeSpaceAR(t, g.PokerDevl),
                        n = t.getComponent(s.default);
                      i.push(t),
                        r.push(g.PokerFlipRoot),
                        c.push(t.position.clone()),
                        t.setParent(g.PokerDevl),
                        t.setPosition(o),
                        n.setDefaultPosition(cc.v2(0, 0)),
                        n.flipCard(0, !1),
                        h
                          ? ((t.group = "top"),
                            g.scheduleOnce(function () {
                              var o = cc.sequence(
                                cc.moveTo(0, 0, 0),
                                cc.callFunc(function () {
                                  t.group = "default";
                                }, e)
                              );
                              o.setTag(l.ACTION_TAG.RE_DEV_POKER),
                                t.stopActionByTag(
                                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE
                                ),
                                t.runAction(o);
                            }, 0.1))
                          : ((t.group = "default"),
                            t.stopAllActions(),
                            t.setPosition(0, 0)),
                        0;
                    },
                    g = this,
                    m = 0,
                    _ = d;
                  m < _.length;
                  m++
                ) {
                  f(_[m]);
                }
                var y = this.PokerFlipRoot.children,
                  v = function () {
                    for (var e = Math.max(0, y.length - 3), t = 0; t < e; t++) {
                      var o = y[t];
                      t < e - 1 && (o.opacity = 0);
                    }
                  };
                a.Game.addStep(
                  i,
                  r,
                  c,
                  [
                    {
                      callback: function () {
                        a.Game.addFreeDrawTimes(o), setTimeout(v, 200);
                      },
                      target: this,
                      args: [],
                    },
                  ],
                  t,
                  [n]
                );
              }
            }),
            (t.prototype.devPoker = function () {
              var e = this;
              if (this.canDispatchPoker)
                if (this.PokerDevl.childrenCount <= 0) this.recyclePoker();
                else {
                  u.gEventMgr.emit(p.GlobalEvent.POP_GUIDE_STEP);
                  for (
                    var t = [],
                      o = [],
                      n = [],
                      i = [],
                      r = this.PokerFlipRoot.children.concat(),
                      c = 3,
                      d = function (r) {
                        var a =
                          h.PokerDevl.children[h.PokerDevl.childrenCount - 1];
                        if (!a) return "break";
                        c--;
                        var d = CMath.ConvertToNodeSpaceAR(a, h.PokerFlipRoot),
                          f = a.getComponent(s.default);
                        t.push(a),
                          o.push(a.getParent()),
                          n.push(a.position.clone()),
                          i.push({
                            callback: f.flipCard,
                            args: [0.1],
                            target: f,
                          }),
                          a.setParent(h.PokerFlipRoot),
                          a.setPosition(d),
                          (a.group = "top"),
                          h.scheduleOnce(function () {
                            var t = f.getFlipPos(),
                              o = cc.sequence(
                                cc.delayTime(r / 20),
                                cc.callFunc(function () {
                                  u.gEventMgr.emit(p.GlobalEvent.DEV_POKERS);
                                }),
                                cc.moveTo(0.1, t.x, t.y),
                                cc.callFunc(function () {
                                  a.group = "default";
                                }, e)
                              );
                            o.setTag(l.ACTION_TAG.DEV_POKER),
                              a.stopActionByTag(
                                l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD
                              ),
                              a.runAction(o);
                          }, 0);
                      },
                      h = this,
                      f = 0;
                    f < 3;
                    f++
                  ) {
                    if ("break" === d(f)) break;
                  }
                  var g = Math.max(0, r.length - c);
                  for (f = 0; f < g; f++) {
                    var m = r[f];
                    (m.x = 0),
                      f < g - 1 && (m.opacity = 0),
                      m.getNumberOfRunningActions() > 0 &&
                        ((m.group = "default"), m.stopAllActions());
                  }
                  a.Game.addStep(t, o, n, i);
                }
            }),
            (t.prototype.onPokerFlipAddChild = function (e) {
              var t = this;
              this.LightAnimation.node.active &&
                (this.LightAnimation.node.active = !1),
                (e.opacity = 255);
              var o = this.PokerFlipRoot.children.indexOf(e),
                n = e.getComponent(s.default);
              n &&
                (n.isFront() ||
                  n.flipCard(0.1, !1, function () {
                    n.setCanMove(o + 1 == t.PokerFlipRoot.childrenCount);
                  }),
                n.setRecycle(!1)),
                o >= 1 &&
                  this.PokerFlipRoot.children[o - 1]
                    .getComponent(s.default)
                    .setCanMove(!1),
                this.updateFlipPokerPosOnAdd();
            }),
            (t.prototype.onPokerFlipRemoveChild = function (e) {
              (e.opacity = 255),
                this.PokerFlipRoot.childrenCount > 0 &&
                  this.PokerFlipRoot.children[
                    this.PokerFlipRoot.childrenCount - 1
                  ]
                    .getComponent(s.default)
                    .setNormal(),
                this.updateFlipPokerPos();
            }),
            (t.prototype.updateFlipPokerPosOnAdd = function () {
              if (this.PokerFlipRoot.childrenCount >= 3) {
                var e = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 1
                ];
                (r = cc.moveTo(0.1, 120, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD
                ),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  e.runAction(r),
                  e.getComponent(s.default).setFlipPos(cc.v2(120, 0)),
                  e.getComponent(s.default).setDefaultPosition(cc.v2(120, 0)),
                  (e.group = "default"),
                  e.stopActionByTag(l.ACTION_TAG.BACK_STEP),
                  e.stopActionByTag(l.ACTION_TAG.SHAKE);
                var t = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 2
                ];
                (i = cc.moveTo(0.1, 60, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD
                ),
                  t.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  t.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  t.runAction(i),
                  t.getComponent(s.default).setFlipPos(cc.v2(60, 0)),
                  t.getComponent(s.default).setDefaultPosition(cc.v2(60, 0)),
                  (t.group = "default"),
                  t.stopActionByTag(l.ACTION_TAG.BACK_STEP),
                  t.stopActionByTag(l.ACTION_TAG.SHAKE);
                var o = this.PokerFlipRoot.children[
                    this.PokerFlipRoot.childrenCount - 3
                  ],
                  n = cc.moveTo(0.1, 0, 0);
                n.setTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  o.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  o.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  o.runAction(n),
                  o.getComponent(s.default).setFlipPos(cc.v2(0, 0)),
                  o.getComponent(s.default).setDefaultPosition(cc.v2(0, 0)),
                  (o.group = "default"),
                  o.stopActionByTag(l.ACTION_TAG.BACK_STEP),
                  o.stopActionByTag(l.ACTION_TAG.SHAKE),
                  (e.opacity = 255),
                  (t.opacity = 255),
                  (o.opacity = 255);
              } else if (2 == this.PokerFlipRoot.childrenCount) {
                e = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 1
                ];
                (r = cc.moveTo(0.1, 60, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD
                ),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  e.runAction(r),
                  e.getComponent(s.default).setFlipPos(cc.v2(60, 0)),
                  e.getComponent(s.default).setDefaultPosition(cc.v2(60, 0)),
                  (e.group = "default"),
                  e.stopActionByTag(l.ACTION_TAG.BACK_STEP),
                  e.stopActionByTag(l.ACTION_TAG.SHAKE);
                var i;
                t = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 2
                ];
                (i = cc.moveTo(0.1, 0, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD
                ),
                  t.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  t.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  t.runAction(i),
                  t.getComponent(s.default).setFlipPos(cc.v2(0, 0)),
                  t.getComponent(s.default).setDefaultPosition(cc.v2(0, 0)),
                  (t.group = "default"),
                  t.stopActionByTag(l.ACTION_TAG.BACK_STEP),
                  t.stopActionByTag(l.ACTION_TAG.SHAKE),
                  (e.opacity = 255),
                  (t.opacity = 255);
              } else if (1 == this.PokerFlipRoot.childrenCount) {
                var r;
                e = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 1
                ];
                (r = cc.moveTo(0.1, 0, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD
                ),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  e.runAction(r),
                  e.getComponent(s.default).setFlipPos(cc.v2(0, 0)),
                  e.getComponent(s.default).setDefaultPosition(cc.v2(0, 0)),
                  (e.group = "default"),
                  e.stopActionByTag(l.ACTION_TAG.BACK_STEP),
                  e.stopActionByTag(l.ACTION_TAG.SHAKE),
                  (e.opacity = 255);
              }
            }),
            (t.prototype.updateFlipPokerPos = function () {
              if (this.PokerFlipRoot.childrenCount >= 3) {
                var e = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 1
                ];
                (r = cc.moveTo(0.1, 120, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE
                ),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  e.stopActionByTag(l.ACTION_TAG.SHAKE),
                  e.runAction(r),
                  e.getComponent(s.default).setFlipPos(cc.v2(120, 0)),
                  e.getComponent(s.default).setDefaultPosition(cc.v2(120, 0));
                var t = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 2
                ];
                (i = cc.moveTo(0.1, 60, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE
                ),
                  t.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  t.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  t.stopActionByTag(l.ACTION_TAG.SHAKE),
                  t.runAction(i),
                  t.getComponent(s.default).setFlipPos(cc.v2(60, 0)),
                  t.getComponent(s.default).setDefaultPosition(cc.v2(60, 0));
                var o = this.PokerFlipRoot.children[
                    this.PokerFlipRoot.childrenCount - 3
                  ],
                  n = cc.moveTo(0.1, 0, 0);
                n.setTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  o.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  o.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  o.stopActionByTag(l.ACTION_TAG.SHAKE),
                  o.runAction(n),
                  o.getComponent(s.default).setFlipPos(cc.v2(0, 0)),
                  o.getComponent(s.default).setDefaultPosition(cc.v2(0, 0)),
                  (e.opacity = 255),
                  (t.opacity = 255),
                  (o.opacity = 255);
              } else if (2 == this.PokerFlipRoot.childrenCount) {
                e = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 1
                ];
                (r = cc.moveTo(0.1, 60, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE
                ),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  e.stopActionByTag(l.ACTION_TAG.SHAKE),
                  e.runAction(r),
                  e.getComponent(s.default).setFlipPos(cc.v2(60, 0)),
                  e.getComponent(s.default).setDefaultPosition(cc.v2(60, 0));
                var i;
                t = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 2
                ];
                (i = cc.moveTo(0.1, 0, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE
                ),
                  t.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  t.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  t.stopActionByTag(l.ACTION_TAG.SHAKE),
                  t.runAction(i),
                  t.getComponent(s.default).setFlipPos(cc.v2(0, 0)),
                  t.getComponent(s.default).setDefaultPosition(cc.v2(0, 0)),
                  (e.opacity = 255),
                  (t.opacity = 255);
              } else if (1 == this.PokerFlipRoot.childrenCount) {
                var r;
                e = this.PokerFlipRoot.children[
                  this.PokerFlipRoot.childrenCount - 1
                ];
                (r = cc.moveTo(0.1, 0, 0)).setTag(
                  l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE
                ),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE),
                  e.stopActionByTag(l.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD),
                  e.stopActionByTag(l.ACTION_TAG.SHAKE),
                  e.runAction(r),
                  e.getComponent(s.default).setFlipPos(cc.v2(0, 0)),
                  e.getComponent(s.default).setDefaultPosition(cc.v2(0, 0)),
                  (e.opacity = 255);
              }
            }),
            (t.prototype.start = function () {}),
            (t.prototype.update = function (e) {
              if (
                ((this.devTime += e),
                (this.backTime += e),
                a.Game.isGameStarted())
              ) {
                a.Game.addGameTime(-e), a.Game.addFreeTime(e);
                var t = a.Game.getGameTime();
                (this.TimeLabel.string = CMath.TimeFormat(t)),
                  t <= 60 &&
                    ((this.TimeLabel.font = this.SmallOrg),
                    this.TimeAnimation.node.active ||
                      (u.gEventMgr.emit(p.GlobalEvent.PLAY_SHAKE),
                      (this.TimeAnimation.node.active = !0),
                      this.TimeAnimation.play(),
                      (this.TimeIcon.spriteFrame = this.TimeIconAtlas.getSpriteFrame(
                        "icon_timeorg"
                      ))));
              }
              this.score < this.showScore
                ? ((this.score += this.scoreStep),
                  (this.score = Math.min(this.score, this.showScore)),
                  (this.ScoreLabel.string = this.score.toString()))
                : this.score > this.showScore &&
                  ((this.score -= this.scoreStep),
                  (this.score = Math.max(this.score, this.showScore)),
                  (this.ScoreLabel.string = this.score.toString()));
            }),
            i([v(cc.Prefab)], t.prototype, "Poker", void 0),
            i([v(cc.Node)], t.prototype, "PokerClip", void 0),
            i([v(cc.Node)], t.prototype, "PlaceRoot", void 0),
            i([v(cc.Node)], t.prototype, "PokerDevl", void 0),
            i([v(cc.Node)], t.prototype, "GuideEmpty", void 0),
            i([v(cc.Node)], t.prototype, "RemoveNode", void 0),
            i([v(cc.Button)], t.prototype, "BackButton", void 0),
            i([v(cc.Button)], t.prototype, "PauseButton", void 0),
            i([v(cc.Node)], t.prototype, "CycleRoot", void 0),
            i([v(cc.Node)], t.prototype, "PokerFlipRoot", void 0),
            i([v(cc.Node)], t.prototype, "GuideEmpty2", void 0),
            i([v(cc.SpriteAtlas)], t.prototype, "BackButtonAtlas", void 0),
            i([v(cc.SpriteAtlas)], t.prototype, "DrawButtonAtlas", void 0),
            i([v(cc.Label)], t.prototype, "TimeLabel", void 0),
            i([v(cc.Node)], t.prototype, "Top", void 0),
            i([v(cc.Sprite)], t.prototype, "TimeIcon", void 0),
            i([v(cc.SpriteAtlas)], t.prototype, "TimeIconAtlas", void 0),
            i([v(cc.Label)], t.prototype, "ScoreLabel", void 0),
            i([v(cc.Font)], t.prototype, "SmallOrg", void 0),
            i([v(cc.Font)], t.prototype, "SmallGreen", void 0),
            i([v(cc.Prefab)], t.prototype, "SubScoreLabel", void 0),
            i([v(cc.Prefab)], t.prototype, "AddScoreLabel", void 0),
            i([v(cc.Animation)], t.prototype, "TimeAnimation", void 0),
            i([v(cc.Animation)], t.prototype, "LightAnimation", void 0),
            i([v(d.default)], t.prototype, "Stop", void 0),
            i([v(cc.Animation)], t.prototype, "DrawCardAni", void 0),
            i([v(f.default)], t.prototype, "Guide", void 0),
            i([v(cc.Animation)], t.prototype, "FlipAnimation", void 0),
            i([v(cc.Animation)], t.prototype, "Complete", void 0),
            i([v(cc.Button)], t.prototype, "SubmitButton", void 0),
            i([v(cc.Toggle)], t.prototype, "CheatToggle", void 0),
            i([v(cc.Node)], t.prototype, "Tip", void 0),
            i([v(cc.SpriteAtlas)], t.prototype, "TipAtlas", void 0),
            i([v(cc.Animation)], t.prototype, "SubmitTip", void 0),
            (t = i([y], t))
          );
        })(cc.Component);
        (o.default = C), cc._RF.pop();
      },
      {
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
        "./utils/Utils": "Utils",
      },
    ],
    Game: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "40425qmjHtE2rUaEpFgHzOS", "Game"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var n = e("../utils/HashMap"),
          i = e("../Poker"),
          r = e("../Pokers"),
          c = e("./EventManager"),
          a = e("./EventName"),
          s = (function () {
            function e() {
              (this.placePokerRoot = new n.HashMap()),
                (this.cyclePokerRoot = new n.HashMap()),
                (this.stepInfoArray = []),
                (this.score = 0),
                (this.timeBonus = 0),
                (this.freeDrawTimes = 3),
                (this.flipCounts = 0),
                (this.gameStart = !1),
                (this.gameTime = CELER_X ? 300 : 3e3),
                (this.removePokerCount = 0),
                (this.recycleCount = 0),
                (this.pokerFlipRoot = null),
                (this.combo = -1),
                (this.freeTime = 0),
                (this.allPokers = []),
                (this.ScoreDetail = {}),
                (this.pauseCount = 0);
            }
            return (
              (e.prototype.GameMgr = function () {}),
              Object.defineProperty(e, "inst", {
                get: function () {
                  return this._inst ? this._inst : (this._inst = new e());
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.initAllData = function () {
                (this.timeBonus = 0),
                  (this.flipCounts = 0),
                  (this.gameTime = 300),
                  (this.removePokerCount = 0),
                  (this.combo = -1),
                  (this.freeTime = 0),
                  (this.freeDrawTimes = 3),
                  (this.stepInfoArray.length = 0),
                  (this.recycleCount = 0);
              }),
              (e.prototype.addFreeTime = function (e) {
                (this.freeTime += e),
                  this.freeTime >= r.FREE_TIME_LIMIT &&
                    c.gEventMgr.emit(a.GlobalEvent.UPDATE_TIP_ANIMATION, !0);
              }),
              (e.prototype.resetFreeTime = function () {
                (this.freeTime = 0),
                  c.gEventMgr.emit(a.GlobalEvent.UPDATE_TIP_ANIMATION, !1);
              }),
              (e.prototype.getCombo = function () {
                return this.combo;
              }),
              (e.prototype.resetCombo = function () {
                this.combo = -1;
              }),
              (e.prototype.addCombo = function (e) {
                (this.combo += e), (this.combo = Math.max(0, this.combo % 8));
              }),
              (e.prototype.getGameTime = function () {
                return this.gameTime;
              }),
              (e.prototype.addRecycleCount = function (e) {
                (this.recycleCount += e),
                  console.log(
                    " ---------------------recycle count :",
                    this.recycleCount
                  ),
                  (this.recycleCount > 52 || this.recycleCount < 0) &&
                    (console.error(" recycle count error! ", this.recycleCount),
                    (this.recycleCount = CMath.Clamp(
                      this.recycleCount,
                      52,
                      0
                    )));
              }),
              (e.prototype.addGameTime = function (e) {
                o.Game.isComplete() ||
                  window.cheat ||
                  ((this.gameTime += e),
                  (this.gameTime = Math.max(this.gameTime, 0)),
                  this.gameTime <= 0 &&
                    ((this.gameStart = !1),
                    c.gEventMgr.emit(a.GlobalEvent.OPEN_RESULT)));
              }),
              (e.prototype.calTimeBonus = function () {
                this.gameTime >= 300 ||
                  this.gameTime <= 0 ||
                  this.flipCounts <= 0 ||
                  ((this.timeBonus =
                    ((this.flipCounts / 30) * 2.4 + 0.3) * this.gameTime),
                  (this.timeBonus = Math.floor(this.timeBonus)),
                  (this.gameTime = 0),
                  o.Game.addScore(this.timeBonus, null, " timeBonus"));
              }),
              (e.prototype.getTimeBonus = function () {
                return this.timeBonus;
              }),
              (e.prototype.isTimeOver = function () {
                return this.gameTime <= 0;
              }),
              (e.prototype.start = function () {
                (this.gameStart = !0),
                  c.gEventMgr.emit(a.GlobalEvent.PLAY_START);
              }),
              (e.prototype.isComplete = function () {
                return this.flipCounts >= 45;
              }),
              (e.prototype.checkIsRecycleComplete = function () {
                var e = 0;
                return (
                  this.getCycledPokerRoot().forEach(function (t, o) {
                    var n = o.getComponent(i.default);
                    n && 13 == n.getValue() && e++;
                  }),
                  console.error(" isComplete :", e),
                  e >= 4 &&
                    (console.log(" isComplete isComplete "),
                    c.gEventMgr.emit(a.GlobalEvent.AUTO_COMPLETE_DONE),
                    setTimeout(function () {
                      c.gEventMgr.emit(a.GlobalEvent.OPEN_RESULT),
                        console.log(" open result from timeout");
                    }, 5e3)),
                  e >= 4
                );
              }),
              (e.prototype.restart = function () {
                (this.gameTime = 300),
                  (this.score = 0),
                  (this.flipCounts = 0),
                  (this.stepInfoArray = []),
                  (this.timeBonus = 0),
                  this.cyclePokerRoot.clear(),
                  this.placePokerRoot.clear(),
                  (this.gameStart = !1),
                  (this.removePokerCount = 0);
              }),
              (e.prototype.addRemovePokerCount = function (e) {
                this.removePokerCount += e;
                for (
                  var t = "", o = 0, n = this.RecycleRoot.children;
                  o < n.length;
                  o++
                ) {
                  var i = n[o];
                  (t += i.name + ":" + i.childrenCount), i.childrenCount;
                }
                console.log(
                  " remove :",
                  this.removePokerCount,
                  " count:",
                  e,
                  ", recycle root:",
                  t
                ),
                  this.removePokerCount >= 50 &&
                    (c.gEventMgr.emit(a.GlobalEvent.OPEN_RESULT),
                    console.log(" open result from action done"));
              }),
              (e.prototype.setPause = function (e) {
                this.gameStart = !e;
              }),
              (e.prototype.isGameStarted = function () {
                return this.gameStart;
              }),
              (e.prototype.resetscore = function () {
                this.score = 0;
              }),
              (e.prototype.addScore = function (e, t, o) {
                void 0 === t && (t = cc.v2(-200, 700)),
                  0 != e &&
                    (null == t && (t = cc.v2(-200, 700)),
                    (e = Math.floor(e)),
                    (this.score += e),
                    (this.score = Math.max(this.score, 0)),
                    this.ScoreDetail[o] || (this.ScoreDetail[o] = 0),
                    (this.ScoreDetail[o] += e),
                    console.log("------------------- score:", this.score, e),
                    c.gEventMgr.emit(a.GlobalEvent.UPDATE_SCORE, e, t));
              }),
              (e.prototype.getScore = function () {
                return this.score;
              }),
              (e.prototype.addFreeDrawTimes = function (e) {
                (this.freeDrawTimes += e),
                  (this.freeDrawTimes = Math.max(this.freeDrawTimes, 0)),
                  c.gEventMgr.emit(a.GlobalEvent.UPDATE_DRAW_ICON);
              }),
              (e.prototype.getFreeDrawTimes = function () {
                return this.freeDrawTimes;
              }),
              (e.prototype.addFlipCounts = function (e) {
                this.isGameStarted() &&
                  ((this.flipCounts += e),
                  (this.flipCounts = Math.max(this.flipCounts, 0)),
                  console.log(" add FlipCounts:", this.flipCounts),
                  this.isComplete() &&
                    c.gEventMgr.emit(a.GlobalEvent.COMPLETE));
              }),
              (e.prototype.getFlipCounts = function () {
                return this.flipCounts;
              }),
              (e.prototype.addStep = function (e, t, o, n, i, r) {
                CELER_X && (this.stepInfoArray.length = 0),
                  this.stepInfoArray.push({
                    node: e,
                    lastParent: t,
                    lastPos: o,
                    func: n,
                    scores: i,
                    scoresPos: r,
                  }),
                  c.gEventMgr.emit(a.GlobalEvent.UPDATE_BACK_BTN_ICON);
              }),
              (e.prototype.getPlacePokerRoot = function () {
                return this.placePokerRoot;
              }),
              (e.prototype.getCycledPokerRoot = function () {
                return this.cyclePokerRoot;
              }),
              (e.prototype.addPlacePokerRoot = function (e, t) {
                if (!this.isComplete()) {
                  if (e < 0 || e > 6 || null === e) {
                    var o = t.getComponent(i.default);
                    return (
                      console.error(" add an error key:", e),
                      void (
                        o &&
                        console.error(
                          " error poker val:",
                          o.getValue(),
                          ", type:",
                          i.PokerType[o.getPokerType()]
                        )
                      )
                    );
                  }
                  if (
                    (this.placePokerRoot.add(e, t),
                    t.getComponent(i.default) &&
                      t.getComponent(i.default).setRecycle(!1),
                    this.placePokerRoot.length > 7)
                  )
                    console.error(
                      " place Poker Root over size!!!!!:",
                      this.placePokerRoot.length
                    ),
                      console.error(this.placePokerRoot.keys);
                }
              }),
              (e.prototype.addCycledPokerRoot = function (e, t) {
                if (e < 0 || e > 3 || null === e) {
                  var o = t.getComponent(i.default);
                  return (
                    console.error(" add an error key to recycle:", e),
                    void (
                      o &&
                      (console.error(
                        " error poker val:",
                        o.getValue(),
                        ", type:",
                        i.PokerType[o.getKey()]
                      ),
                      !CELER_X && (o.frontCard.node.color = cc.Color.RED))
                    )
                  );
                }
                (this.cyclePokerRoot.add(e, t),
                t.getComponent(i.default) &&
                  t.getComponent(i.default).setRecycle(!0),
                this.cyclePokerRoot.length > 4) &&
                  (console.error(
                    " cycled Poker root over size!!!!!:",
                    this.cyclePokerRoot.length
                  ),
                  console.error(this.cyclePokerRoot.keys));
              }),
              (e.prototype.clearStep = function () {
                (this.stepInfoArray.length = 0),
                  c.gEventMgr.emit(a.GlobalEvent.UPDATE_BACK_BTN_ICON);
              }),
              (e.prototype.backStep = function () {
                if (this.stepInfoArray.length <= 0)
                  console.log(" no cache step!");
                else if (o.Game.isComplete())
                  console.log(" game is complete ,cant go back");
                else {
                  for (
                    var e = this.stepInfoArray[this.stepInfoArray.length - 1],
                      t = !1,
                      n = !0,
                      s = 0,
                      l = e.node;
                    s < l.length;
                    s++
                  ) {
                    if ((f = l[s]).getNumberOfRunningActions() > 0) {
                      t = !0;
                      break;
                    }
                    if (
                      f.getComponent(i.default) &&
                      !f.getComponent(i.default).isMoveEnd &&
                      ["PokerDevl", "PokerFlipRoot"].indexOf(f.parent.name) < 0
                    ) {
                      0, (n = !1);
                      break;
                    }
                  }
                  if (n)
                    if (t)
                      console.log(
                        " click back step ! but has running action! "
                      );
                    else {
                      for (
                        var u = !1, p = !0, d = 0, h = e.lastParent;
                        d < h.length;
                        d++
                      ) {
                        var f;
                        if ((f = h[d]).getNumberOfRunningActions() > 0) {
                          u = !0;
                          break;
                        }
                        if (
                          f.getComponent(i.default) &&
                          !f.getComponent(i.default).isMoveEnd &&
                          ["PokerDevl", "PokerFlipRoot"].indexOf(
                            f.parent.name
                          ) < 0
                        ) {
                          0, (p = !1);
                          break;
                        }
                      }
                      if (p)
                        if (u)
                          console.log(
                            " click back step ! parent but has running action! "
                          );
                        else {
                          o.Game.resetCombo();
                          var g = this.stepInfoArray.pop();
                          c.gEventMgr.emit(a.GlobalEvent.UPDATE_BACK_BTN_ICON);
                          for (
                            var m = 0,
                              _ = function () {
                                m++;
                                var e = g.node.pop(),
                                  t = g.lastParent.pop(),
                                  n = g.lastPos.pop(),
                                  s = g.func ? g.func.pop() : null,
                                  l =
                                    g.scores && g.scores.length > 0
                                      ? g.scores.pop()
                                      : 0,
                                  u =
                                    g.scoresPos && g.scoresPos.length > 0
                                      ? g.scoresPos.pop()
                                      : null;
                                u
                                  ? o.Game.addScore(l, u, "back")
                                  : o.Game.addScore(l, null, "back");
                                var p = e.getComponent(i.default);
                                if (
                                  "PokerClip" == t.name ||
                                  "PokerFlipRoot" == t.name ||
                                  (p && p.isCycled())
                                ) {
                                  var d = CMath.ConvertToNodeSpaceAR(e, t);
                                  e.setPosition(d);
                                } else e.setPosition(n);
                                if (
                                  (s &&
                                    s.callback &&
                                    s.target &&
                                    (console.log("call func !"),
                                    s.callback.apply(s.target, s.args)),
                                  e.setParent(t),
                                  ("CycleRoot" == t.name ||
                                    (t.getComponent(i.default) &&
                                      t.getComponent(i.default).isCycled())) &&
                                    p.setRecycle(!0),
                                  (e.group = "top"),
                                  p)
                                ) {
                                  var h =
                                    "PokerClip" == t.name
                                      ? p.getLastPosition()
                                      : "PokerFlipRoot" == t.name
                                      ? p.getFlipPos()
                                      : p.getDefaultPosition();
                                  t.getComponent(i.default)
                                    ? t.getComponent(i.default).isCycled()
                                      ? ((h.x = 0), (h.y = 0))
                                      : s &&
                                        s.callback &&
                                        s.callback ==
                                          t.getComponent(i.default).flipCard
                                      ? (h.y = r.OFFSET_Y / 3)
                                      : (h.y = r.OFFSET_Y)
                                    : "PokerFlipRoot" != t.name &&
                                      ((h.x = 0),
                                      (h.y =
                                        "PokerDevl" != t.name
                                          ? r.Empty_Offset
                                          : 0)),
                                    t &&
                                      t.parent &&
                                      "CycleRoot" == t.parent.name &&
                                      ((h.x = 0), (h.y = 0));
                                  var f = cc.sequence(
                                    cc.delayTime(m / 500),
                                    cc.callFunc(function () {
                                      c.gEventMgr.emit(
                                        a.GlobalEvent.DEV_POKERS
                                      ),
                                        p.node.stopActionByTag(
                                          r.ACTION_TAG.FLIP_CARD_REPOS_ON_REMOVE
                                        ),
                                        p.node.stopActionByTag(
                                          r.ACTION_TAG.FLIP_CARD_REPOS_ON_ADD
                                        ),
                                        p.node.stopActionByTag(
                                          r.ACTION_TAG.SHAKE
                                        );
                                    }, y),
                                    cc.moveTo(0.1, h.x, h.y),
                                    cc.callFunc(function () {
                                      (e.group = "default"),
                                        p.setDefaultPosition();
                                    }, y)
                                  );
                                  f.setTag(r.ACTION_TAG.BACK_STEP),
                                    p.node.runAction(f);
                                }
                              },
                              y = this;
                            g.node.length > 0;

                          )
                            _();
                        }
                      else console.log(" poker parent is moving;");
                    }
                  else console.log(" poker is moving;");
                }
              }),
              (e.prototype.canBackStep = function () {
                return this.stepInfoArray.length > 0;
              }),
              Object.defineProperty(e.prototype, "PauseCount", {
                get: function () {
                  return this.pauseCount;
                },
                set: function (e) {
                  (this.pauseCount = e),
                    this.pauseCount > 2 && o.Game.addScore(-1e3, null, "pause");
                },
                enumerable: !0,
                configurable: !0,
              }),
              e
            );
          })();
        (o.Game = s.inst), !CELER_X && (window.Game = o.Game), cc._RF.pop();
      },
      {
        "../Poker": "Poker",
        "../Pokers": "Pokers",
        "../utils/HashMap": "HashMap",
        "./EventManager": "EventManager",
        "./EventName": "EventName",
      },
    ],
    GlobalSingleTouchMediator: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "02116IZqj1EB5HTsmFmQouR", "GlobalSingleTouchMediator");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = e("../SingleTouchMediator"),
          c = cc._decorator,
          a = c.ccclass,
          s =
            (c.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                n(t, e),
                (t.prototype.onRegister = function () {
                  e.prototype.onRegister.call(this),
                    (this.node._touchListener.swallowTouches = !1);
                }),
                (t.prototype.onTouchStart = function (e) {}),
                (t.prototype.onTouchMove = function (e) {}),
                (t.prototype.onTouchEnd = function (e) {}),
                (t.prototype.onTouchCancel = function (e) {}),
                (t = i([a], t))
              );
            })(r.default));
        (o.default = s), cc._RF.pop();
      },
      { "../SingleTouchMediator": "SingleTouchMediator" },
    ],
    GlobalSingleTouchView: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "47cdfTkIIlBopkvsd+NlL5V", "GlobalSingleTouchView");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = e("../BaseView"),
          c = e("./GlobalSingleTouchMediator"),
          a = cc._decorator,
          s = a.ccclass,
          l =
            (a.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                n(t, e),
                (t.prototype.onLoad = function () {
                  this.BindMedaitor(c.default);
                }),
                (t.prototype.start = function () {}),
                (t = i([s], t))
              );
            })(r.default));
        (o.default = l), cc._RF.pop();
      },
      {
        "../BaseView": "BaseView",
        "./GlobalSingleTouchMediator": "GlobalSingleTouchMediator",
      },
    ],
    Guide: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b35055BqMpN/5j/PIM39A+p", "Guide");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = e("./controller/EventManager"),
          c = e("./controller/EventName"),
          a = e("./Poker"),
          s = cc._decorator,
          l = s.ccclass,
          u = s.property,
          p = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.GuideAtlas = null),
                (t.GuideHand = null),
                (t.GuideEnd = null),
                (t.Corn = null),
                (t.ButtonAtlas = null),
                (t.Next = null),
                (t.OK = null),
                (t.Forward = null),
                (t.GuideView = null),
                (t.Resume = null),
                (t.Skip = null),
                (t.Block = null),
                (t.GuideBlock = null),
                (t.callback = null),
                (t.guideSteps = []),
                (t.isGuide = !1),
                (t.index = 1),
                (t.guideDefaultY = 0),
                t
              );
            }
            return (
              n(t, e),
              (t.prototype.onLoad = function () {
                var e = this;
                (this.guideDefaultY = this.Corn.node.y),
                  (this.GuideHand.node.active = !1),
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
                  this.Resume.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      e.hide();
                    },
                    this
                  ),
                  this.Skip.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      e.Skip.node.scale < 0.9 || e.hide();
                    },
                    this
                  ),
                  this.OK.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      e.OK.node.scale < 0.9 ||
                        (e.nextGuide(),
                        (e.OK.node.active = !1),
                        (e.isGuide = !0));
                    },
                    this
                  ),
                  r.gEventMgr.on(
                    c.GlobalEvent.POP_GUIDE_STEP,
                    function () {
                      e.guideSteps.length <= 0 ||
                        !e.node.active ||
                        (e.popStep(), e.nextGuide());
                    },
                    this
                  ),
                  this.Block.on(
                    cc.Node.EventType.TOUCH_START,
                    this.onBlockTouch,
                    this
                  ),
                  this.Block.on(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.onBlockTouchCancel,
                    this
                  ),
                  this.Block.on(
                    cc.Node.EventType.TOUCH_END,
                    this.onBlockTouchEnd,
                    this
                  ),
                  this.Block.on(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.onBlockTouchMove,
                    this
                  );
              }),
              (t.prototype.onBlockTouch = function (e) {
                if (!(this.guideSteps.length <= 0) && this.isGuide)
                  for (
                    var t = 0, o = this.guideSteps[0].touches;
                    t < o.length;
                    t++
                  ) {
                    var n = o[t],
                      i = null;
                    if (
                      (n.node.getComponent(a.default) &&
                        n.node.getComponent(a.default).getNext() &&
                        (i = n.node.getComponent(a.default).getNext().node),
                      CMath.GetBoxToWorld(n.node, i).contains(e.getLocation()))
                    ) {
                      var r = new cc.Event.EventCustom(e.getType(), !1);
                      r.setUserData(n.callback),
                        (r.getID = function () {
                          return 0;
                        }),
                        n.node.dispatchEvent(r),
                        (n.touchStarted = !0);
                    }
                  }
              }),
              (t.prototype.onBlockTouchCancel = function (e) {
                if (!(this.guideSteps.length <= 0) && this.isGuide)
                  for (
                    var t = 0, o = this.guideSteps[0].touches;
                    t < o.length;
                    t++
                  ) {
                    var n = o[t],
                      i = null;
                    if (
                      (n.node.getComponent(a.default) &&
                        n.node.getComponent(a.default).getNext() &&
                        (i = n.node.getComponent(a.default).getNext().node),
                      CMath.GetBoxToWorld(n.node, i).contains(
                        e.getLocation()
                      ) && n.touchStarted)
                    ) {
                      var r = new cc.Event.EventCustom(e.getType(), !1);
                      r.setUserData(n.callback),
                        (r.getID = function () {
                          return 0;
                        }),
                        n.node.dispatchEvent(r),
                        (n.touchStarted = !1);
                    }
                  }
              }),
              (t.prototype.onBlockTouchEnd = function (e) {
                if (!(this.guideSteps.length <= 0) && this.isGuide)
                  for (
                    var t = 0, o = this.guideSteps[0].touches;
                    t < o.length;
                    t++
                  ) {
                    var n = o[t];
                    if (
                      (n.node.getComponent(a.default) &&
                        n.node.getComponent(a.default).getNext() &&
                        n.node.getComponent(a.default).getNext().node,
                      n.touchStarted)
                    ) {
                      var i = new cc.Event.EventCustom(e.getType(), !1);
                      i.setUserData(n.callback),
                        (i.getID = function () {
                          return 0;
                        }),
                        n.node.dispatchEvent(i),
                        (n.touchStarted = !1);
                    }
                  }
              }),
              (t.prototype.popStep = function () {
                if (!(this.guideSteps.length <= 0))
                  for (
                    var e = 0, t = this.guideSteps.shift().touches;
                    e < t.length;
                    e++
                  ) {
                    var o = t[e];
                    o.end && o.end();
                  }
              }),
              (t.prototype.clearStep = function () {
                if (!(this.guideSteps.length <= 0)) {
                  for (var e = 0, t = this.guideSteps; e < t.length; e++)
                    for (var o = 0, n = t[e].touches; o < n.length; o++) {
                      var i = n[o];
                      i.end && i.end();
                    }
                  this.guideSteps.length = 0;
                }
              }),
              (t.prototype.showEnd = function () {
                var e = this;
                (this.Corn.node.active = !0),
                  (this.Corn.node.y = this.guideDefaultY),
                  (this.Corn.spriteFrame = this.GuideEnd),
                  (this.OK.node.active = !0),
                  this.OK.node.targetOff(this),
                  this.OK.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      e.popStep(), e.nextGuide();
                    },
                    this
                  );
              }),
              (t.prototype.onBlockTouchMove = function (e) {
                if (!(this.guideSteps.length <= 0) && this.isGuide)
                  for (
                    var t = 0, o = this.guideSteps[0].touches;
                    t < o.length;
                    t++
                  ) {
                    var n = o[t];
                    !n.isButton &&
                      n.touchStarted &&
                      ((e.bubbles = !1), n.node.dispatchEvent(e));
                  }
              }),
              (t.prototype.register = function (e) {
                this.guideSteps = e;
              }),
              (t.prototype.startGuide = function (e) {
                (this.OK.node.active = !0),
                  (this.node.active = !0),
                  (this.Next.node.active = !1),
                  (this.Forward.node.active = !1),
                  (this.GuideView.node.active = !1),
                  (this.Resume.node.active = !1),
                  (this.GuideBlock.active = !1),
                  (this.Skip.node.active = !0),
                  (this.callback = e),
                  (this.isGuide = !1);
              }),
              (t.prototype.nextGuide = function () {
                if (this.guideSteps.length <= 0) this.hide();
                else {
                  (this.Corn.spriteFrame = this.GuideAtlas.getSpriteFrame(
                    "guide" + this.index
                  )),
                    (this.Corn.node.y = -265),
                    this.index++;
                  for (
                    var e = this.guideSteps[0],
                      t = [],
                      o = [],
                      n = 0,
                      i = e.touches;
                    n < i.length;
                    n++
                  ) {
                    (s = i[n]).isAction && o.push(s.node);
                  }
                  if (o.length > 0) {
                    var r = void 0;
                    (r =
                      e.touches.length > 1
                        ? CMath.ConvertToNodeSpaceAR(
                            o[1],
                            this.GuideHand.node.parent
                          )
                        : CMath.ConvertToNodeSpaceAR(
                            o[0],
                            this.GuideHand.node.parent
                          )),
                      (this.GuideHand.node.position = r);
                  }
                  for (var c = 0, a = e.touches; c < a.length; c++) {
                    var s;
                    if (
                      (((s = a[c]).node.group = "guide"), s.start(), s.isAction)
                    ) {
                      r = CMath.ConvertToNodeSpaceAR(
                        s.node,
                        this.GuideHand.node.parent
                      );
                      var l = CMath.Distance(r, this.GuideHand.node.position),
                        u = cc.moveTo(l / 550, r);
                      t.push(u),
                        1 == t.length &&
                          (t.push(cc.fadeTo(0.3, 0)),
                          t.push(cc.delayTime(0.3)));
                    }
                  }
                  2 == t.length && t.pop(),
                    (this.GuideHand.node.active = t.length > 0),
                    this.GuideHand.node.stopAllActions(),
                    (this.GuideHand.node.opacity = 255),
                    t.length > 1 &&
                      (t.push(cc.fadeTo(0.4, 255)),
                      this.GuideHand.node.runAction(
                        cc.repeatForever(cc.sequence(t))
                      ));
                }
              }),
              (t.prototype.hide = function () {
                this.node.active &&
                  (this.clearStep(),
                  (this.node.active = !1),
                  this.callback && this.callback(),
                  (this.callback = null));
              }),
              (t.prototype.showBlock = function () {
                (this.Block.active = !0),
                  (this.node.active = !0),
                  (this.Corn.node.active = !0),
                  (this.OK.node.active = !1),
                  (this.Skip.node.active = !1),
                  (this.isGuide = !1);
              }),
              (t.prototype.show = function (e) {
                (this.OK.node.active = !1),
                  (this.Corn.node.active = !1),
                  (this.GuideHand.node.active = !1),
                  (this.isGuide = !1),
                  (this.Resume.node.active = !1),
                  (this.Next.node.active = !0),
                  (this.GuideView.node.active = !0),
                  (this.Skip.node.active = !1),
                  (this.Next.node.active = !0),
                  (this.Forward.node.active = !0),
                  (this.GuideBlock.active = !0),
                  (this.node.active = !0),
                  (this.callback = e),
                  this.GuideView.scrollToPage(0, 0),
                  (this.Forward.node.active = !1),
                  (this.Next.node
                    .getChildByName("Background")
                    .getComponent(
                      cc.Sprite
                    ).spriteFrame = this.ButtonAtlas.getSpriteFrame("btn_new"));
              }),
              (t.prototype.nextPage = function () {
                if (
                  this.GuideView.getCurrentPageIndex() >=
                  this.GuideView.content.childrenCount - 1
                )
                  this.hide();
                else {
                  var e =
                    (this.GuideView.getCurrentPageIndex() + 1) %
                    this.GuideView.content.childrenCount;
                  this.GuideView.setCurrentPageIndex(e),
                    e >= this.GuideView.content.childrenCount - 1 &&
                      (this.Next.node
                        .getChildByName("Background")
                        .getComponent(
                          cc.Sprite
                        ).spriteFrame = this.ButtonAtlas.getSpriteFrame(
                        "new_close"
                      )),
                    (this.Forward.node.active = 0 != e);
                }
              }),
              (t.prototype.forwardPage = function () {
                if (this.GuideView.getCurrentPageIndex() <= 0);
                else {
                  var e =
                    (this.GuideView.getCurrentPageIndex() - 1) %
                    this.GuideView.content.childrenCount;
                  this.GuideView.setCurrentPageIndex(e),
                    (this.Forward.node.active = 0 != e),
                    (this.Next.node
                      .getChildByName("Background")
                      .getComponent(
                        cc.Sprite
                      ).spriteFrame = this.ButtonAtlas.getSpriteFrame(
                      "btn_new"
                    ));
                }
              }),
              i([u(cc.SpriteAtlas)], t.prototype, "GuideAtlas", void 0),
              i([u(cc.Animation)], t.prototype, "GuideHand", void 0),
              i([u(cc.SpriteFrame)], t.prototype, "GuideEnd", void 0),
              i([u(cc.Sprite)], t.prototype, "Corn", void 0),
              i([u(cc.SpriteAtlas)], t.prototype, "ButtonAtlas", void 0),
              i([u(cc.Button)], t.prototype, "Next", void 0),
              i([u(cc.Button)], t.prototype, "OK", void 0),
              i([u(cc.Button)], t.prototype, "Forward", void 0),
              i([u(cc.PageView)], t.prototype, "GuideView", void 0),
              i([u(cc.Button)], t.prototype, "Resume", void 0),
              i([u(cc.Button)], t.prototype, "Skip", void 0),
              i([u(cc.Node)], t.prototype, "Block", void 0),
              i([u(cc.Node)], t.prototype, "GuideBlock", void 0),
              (t = i([l], t))
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {
        "./Poker": "Poker",
        "./controller/EventManager": "EventManager",
        "./controller/EventName": "EventName",
      },
    ],
    HashMap: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "07791aKdvNDo7wFtZ+VAQS2", "HashMap"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var n = (function () {
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
                var n = this._list[o];
                if (n.value == e) return n.key;
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
                  var n = o[t];
                  n && e.push(n.key);
                }
                return e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.add = function (e, t) {
              var o = { key: e, value: t },
                n = this.getIndexByKey(e);
              -1 != n ? (this._list[n] = o) : this._list.push(o);
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
            (e.prototype.forEach = function (e, t) {
              var o = this._list.length;
              if (t)
                for (var n = o - 1; n >= 0; n--) {
                  e((i = this._list[n]).key, i.value);
                }
              else
                for (n = 0; n < o; n++) {
                  var i;
                  e((i = this._list[n]).key, i.value);
                }
            }),
            (e.prototype.clear = function () {
              this._list = [];
            }),
            e
          );
        })();
        (o.HashMap = n), cc._RF.pop();
      },
      {},
    ],
    LogHandler: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "45299DlRNZPZres/N0gEeTm", "LogHandler"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var n = (function () {
          function e() {
            if (
              ((this.logMsg = null),
              (this.frameTimes = 0),
              (this.now = 0),
              (this.Frame = 20),
              (this.totalFrames = 0),
              (this.startTime = 0),
              window.addEventListener)
            )
              for (var t = 0, o = e.LISTENNING_EVENTS; t < o.length; t++) {
                var n = o[t],
                  i =
                    "trigger" +
                    n.charAt(0).toLocaleUpperCase() +
                    n.substring(1);
                this[i] &&
                  "function" == typeof this[i] &&
                  window.addEventListener(n, this[i].bind(this));
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
              this.addLog(
                " total frames:",
                this.totalFrames,
                " ,total cost time:",
                e + "s",
                " , per frame cost time ave:" + t + "s"
              ),
                this.sendLog();
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
                (this.logFunc = t),
                (console.error = function () {
                  for (var t, o = [], n = 0; n < arguments.length; n++)
                    o[n] = arguments[n];
                  (t = e.inst).log.apply(t, ["[ERROR]"].concat(o));
                }),
                (console.warn = function () {
                  for (var t, o = [], n = 0; n < arguments.length; n++)
                    o[n] = arguments[n];
                  (t = e.inst).log.apply(t, ["[WARN]"].concat(o));
                }),
                (console.log = function () {
                  for (var t, o = [], n = 0; n < arguments.length; n++)
                    o[n] = arguments[n];
                  (t = e.inst).log.apply(t, ["[INFO]"].concat(o));
                });
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.addLog.apply(this, e), this.sendLog();
            }),
            (e.prototype.formatLogArguments = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              for (var o = "", n = 0; n < arguments.length; n++) {
                var i = typeof arguments[n];
                "string" == i || "number" == i
                  ? (o += " " + arguments[n])
                  : "object" == i
                  ? (o += " " + JSON.stringify(arguments[n]))
                  : "boolean" == i &&
                    arguments[n].toString &&
                    (o += arguments[n].toString());
              }
              return o;
            }),
            (e.prototype.addLog = function () {
              for (var t = [], o = 0; o < arguments.length; o++)
                t[o] = arguments[o];
              null == this.logMsg && (this.logMsg = {});
              var n = this.formatLogArguments.apply(this, t),
                i = this.getFullTime(new Date());
              this.logMsg[i] = e.VERSION + n;
            }),
            (e.prototype.getFullTime = function (e) {
              var t = "";
              t += e.getFullYear();
              var o = e.getMonth();
              t += "-" + (o >= 10 ? o : "0" + o);
              var n = e.getDate();
              t += "-" + (n >= 10 ? n : "0" + n);
              var i = e.getHours();
              t += "  " + (i >= 10 ? i : "0" + i);
              var r = e.getMinutes();
              t += ":" + (r >= 10 ? r : "0" + r);
              var c = e.getSeconds();
              return (t += ":" + (c >= 10 ? c : "0" + c));
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
            (e.VERSION = window.GAME_VERSION || "Solitaire Win version 139 : "),
            (e.LISTENNING_EVENTS = ["error"]),
            e
          );
        })();
        (o.LogHandler = n), cc._RF.pop();
      },
      {},
    ],
    PokerRoot: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "11cba6M6B9Awbm3ikseAzvv", "PokerRoot");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = e("./controller/Game"),
          c = e("./Poker"),
          a = cc._decorator,
          s = a.ccclass,
          l =
            (a.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                n(t, e),
                (t.prototype.onLoad = function () {
                  this.node.on(
                    cc.Node.EventType.CHILD_ADDED,
                    this.onAddChild,
                    this
                  ),
                    this.node.on(
                      cc.Node.EventType.CHILD_REMOVED,
                      this.onChildRemove,
                      this
                    );
                }),
                (t.prototype.start = function () {}),
                (t.prototype.onChildRemove = function () {
                  r.Game.isGameStarted() &&
                    r.Game.addPlacePokerRoot(
                      parseInt(this.node.name),
                      this.node
                    );
                }),
                (t.prototype.onAddChild = function (e) {
                  var t = e.getComponent(c.default);
                  t
                    ? (this.setNewRoot(t),
                      (this.next = t),
                      t.setForward(null),
                      t.setRecycle(!1))
                    : console.error(" \u6ca1\u6709 Poker\u7c7b");
                }),
                (t.prototype.setNewRoot = function (e) {
                  e.getNext()
                    ? this.setNewRoot(e.getNext())
                    : (r.Game.addPlacePokerRoot(
                        parseInt(this.node.name),
                        e.node
                      ),
                      e.setNormal());
                }),
                (t.prototype.update = function (e) {}),
                (t = i([s], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      { "./Poker": "Poker", "./controller/Game": "Game" },
    ],
    Pokers: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d504dBfU4JI0K2nPtJ3w844", "Pokers"),
          Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.SpadeStartIndex = 0),
          (o.HeartStartIndex = 1),
          (o.ClubStartIndex = 2),
          (o.DiamondStartIndex = 3),
          (o.PokerTypes = { spade_: 3, club_: 10, diamond_: 5, heart_: 12 }),
          (o.Empty_Offset = -110),
          (o.GuidePokers = [
            "diamond_,1",
            "spade_,1",
            "heart_,1",
            "club_,1",
            "spade_,2",
            "heart_,2",
            "club_,2",
            "club_,5",
            "spade_,3",
            "heart_,3",
            "club_,3",
            "diamond_,3",
            "spade_,4",
            "heart_,13",
            "club_,4",
            "diamond_,4",
            "spade_,5",
            "heart_,5",
            "diamond_,2",
            "spade_,6",
            "club_,6",
            "heart_,6",
            "diamond_,5",
            "diamond_,6",
            "heart_,7",
            "spade_,7",
            "club_,8",
            "diamond_,7",
            "spade_,8",
            "heart_,8",
            "club_,7",
            "diamond_,8",
            "spade_,9",
            "heart_,9",
            "club_,9",
            "diamond_,9",
            "spade_,10",
            "heart_,10",
            "club_,10",
            "diamond_,10",
            "spade_,11",
            "heart_,11",
            "club_,11",
            "diamond_,11",
            "spade_,12",
            "heart_,12",
            "club_,12",
            "diamond_,12",
            "spade_,13",
            "heart_,4",
            "club_,13",
            "diamond_,13",
          ]),
          (o.Pokers = [
            "spade_,1",
            "heart_,1",
            "club_,1",
            "diamond_,1",
            "spade_,2",
            "heart_,2",
            "club_,2",
            "diamond_,2",
            "spade_,3",
            "heart_,3",
            "club_,3",
            "diamond_,3",
            "spade_,4",
            "heart_,4",
            "club_,4",
            "diamond_,4",
            "spade_,5",
            "heart_,5",
            "club_,5",
            "diamond_,5",
            "spade_,6",
            "heart_,6",
            "club_,6",
            "diamond_,6",
            "spade_,7",
            "heart_,7",
            "club_,7",
            "diamond_,7",
            "spade_,8",
            "heart_,8",
            "club_,8",
            "diamond_,8",
            "spade_,9",
            "heart_,9",
            "club_,9",
            "diamond_,9",
            "spade_,10",
            "heart_,10",
            "club_,10",
            "diamond_,10",
            "spade_,11",
            "heart_,11",
            "club_,11",
            "diamond_,11",
            "spade_,12",
            "heart_,12",
            "club_,12",
            "diamond_,12",
            "spade_,13",
            "heart_,13",
            "club_,13",
            "diamond_,13",
          ]),
          (o.PokerSprite = {
            "spade_,1": "bg_solitarie_01A",
            "spade_,2": "bg_solitarie_012",
            "spade_,3": "bg_solitarie_013",
            "spade_,4": "bg_solitarie_014",
            "spade_,5": "bg_solitarie_015",
            "spade_,6": "bg_solitarie_016",
            "spade_,7": "bg_solitarie_017",
            "spade_,8": "bg_solitarie_018",
            "spade_,9": "bg_solitarie_019",
            "spade_,10": "bg_solitarie_0110",
            "spade_,11": "bg_solitarie_01J",
            "spade_,12": "bg_solitarie_01Q",
            "spade_,13": "bg_solitarie_01K",
            "club_,1": "bg_solitarie_03A",
            "club_,2": "bg_solitarie_032",
            "club_,3": "bg_solitarie_033",
            "club_,4": "bg_solitarie_034",
            "club_,5": "bg_solitarie_035",
            "club_,6": "bg_solitarie_036",
            "club_,7": "bg_solitarie_037",
            "club_,8": "bg_solitarie_038",
            "club_,9": "bg_solitarie_039",
            "club_,10": "bg_solitarie_0310",
            "club_,11": "bg_solitarie_03J",
            "club_,12": "bg_solitarie_03Q",
            "club_,13": "bg_solitarie_03K",
            "heart_,1": "bg_solitarie_02A",
            "heart_,2": "bg_solitarie_022",
            "heart_,3": "bg_solitarie_023",
            "heart_,4": "bg_solitarie_024",
            "heart_,5": "bg_solitarie_025",
            "heart_,6": "bg_solitarie_026",
            "heart_,7": "bg_solitarie_027",
            "heart_,8": "bg_solitarie_028",
            "heart_,9": "bg_solitarie_029",
            "heart_,10": "bg_solitarie_0210",
            "heart_,11": "bg_solitarie_02J",
            "heart_,12": "bg_solitarie_02Q",
            "heart_,13": "bg_solitarie_02K",
            "diamond_,1": "bg_solitarie_04A",
            "diamond_,2": "bg_solitarie_042",
            "diamond_,3": "bg_solitarie_043",
            "diamond_,4": "bg_solitarie_044",
            "diamond_,5": "bg_solitarie_045",
            "diamond_,6": "bg_solitarie_046",
            "diamond_,7": "bg_solitarie_047",
            "diamond_,8": "bg_solitarie_048",
            "diamond_,9": "bg_solitarie_049",
            "diamond_,10": "bg_solitarie_0410",
            "diamond_,11": "bg_solitarie_04J",
            "diamond_,12": "bg_solitarie_04Q",
            "diamond_,13": "bg_solitarie_04K",
          }),
          (o.PokerIndex = [
            6,
            5,
            4,
            3,
            2,
            1,
            0,
            12,
            11,
            10,
            9,
            8,
            7,
            17,
            16,
            15,
            14,
            13,
            21,
            20,
            19,
            18,
            24,
            23,
            22,
            26,
            25,
            27,
            28,
            29,
            50,
            49,
            46,
            43,
            40,
            37,
            34,
            31,
            30,
            33,
            36,
            39,
            42,
            45,
            48,
            51,
          ]),
          (function (e) {
            (e[(e.FLIP_CARD_REPOS_ON_ADD = 0)] = "FLIP_CARD_REPOS_ON_ADD"),
              (e[(e.FLIP_CARD_REPOS_ON_REMOVE = 1)] =
                "FLIP_CARD_REPOS_ON_REMOVE"),
              (e[(e.BACK_STEP = 2)] = "BACK_STEP"),
              (e[(e.DEV_POKER = 3)] = "DEV_POKER"),
              (e[(e.RE_DEV_POKER = 4)] = "RE_DEV_POKER"),
              (e[(e.SHAKE = 5)] = "SHAKE"),
              (e[(e.RECYCLE = 6)] = "RECYCLE");
          })(o.ACTION_TAG || (o.ACTION_TAG = {})),
          (o.OFFSET_Y = -70),
          (o.OFFSET_X = 0),
          (o.FREE_TIME_LIMIT = 5),
          cc._RF.pop();
      },
      {},
    ],
    Poker: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "19c3a5acP5K/YiwGw559yBs", "Poker");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r,
          c,
          a,
          s = e("./controller/Game"),
          l = e("./controller/GameFactory"),
          u = e("./Pokers"),
          p = e("./controller/EventManager"),
          d = e("./controller/EventName"),
          h = cc._decorator,
          f = h.ccclass,
          g = h.property;
        (function (e) {
          (e[(e.Front = 0)] = "Front"), (e[(e.Back = 1)] = "Back");
        })((r = o.CardState || (o.CardState = {}))),
          (function (e) {
            (e[(e.Red = 0)] = "Red"), (e[(e.Black = 1)] = "Black");
          })((c = o.PokerColor || (o.PokerColor = {}))),
          (function (e) {
            (e[(e.Club = 0)] = "Club"),
              (e[(e.Spade = 1)] = "Spade"),
              (e[(e.Heart = 2)] = "Heart"),
              (e[(e.Diamond = 3)] = "Diamond");
          })((a = o.PokerType || (o.PokerType = {})));
        var m = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.frontCard = null),
              (t.backCard = null),
              (t.pokerAtlas = null),
              (t.RecycleAnimation = null),
              (t.flips = []),
              (t.value = 0),
              (t.canMove = !1),
              (t.key = -1),
              (t.next = null),
              (t.forward = null),
              (t.defualtChildCount = 0),
              (t.isCheck = !1),
              (t.cycled = !1),
              (t.placeLimit = cc.size(0, 0)),
              (t.isReadyAutoComplete = !1),
              (t.isguide = !1),
              (t.recycleActionInfo = { startTime: 0, duration: 0 }),
              (t.isMoveEnd = !0),
              t
            );
          }
          var o;
          return (
            n(t, e),
            (o = t),
            (t.prototype.reuse = function () {
              (this.node._onSetParent = this.onSetParent.bind(this)),
                (this.RecycleAnimation.node.opacity = 0),
                (this.RecycleAnimation.node.active = !1),
                (this.placeLimit.width = this.node.width / 2),
                (this.placeLimit.height = 0.75 * this.node.height),
                (this.node.getChildByName("Label").active = !1),
                (this.defualtChildCount = this.node.childrenCount),
                (this.isReadyAutoComplete = !1);
              var e = arguments[0][0][0];
              (this.isguide = arguments[0][0][1]),
                (this.value = parseInt(e.split(",")[1]));
              var t = e.split(",")[0];
              switch (
                ((this.pokerColer =
                  "spade_" == t || "club_" == t ? c.Black : c.Red),
                t)
              ) {
                case "spade_":
                  this.pokerType = a.Spade;
                  break;
                case "club_":
                  this.pokerType = a.Club;
                  break;
                case "heart_":
                  this.pokerType = a.Heart;
                  break;
                case "diamond_":
                  this.pokerType = a.Diamond;
              }
              (this.frontCard.spriteFrame = this.pokerAtlas.getSpriteFrame(
                u.PokerSprite[e]
              )),
                this.frontCard.spriteFrame ||
                  console.error(
                    "poker card spriteFrame is null, err:",
                    e.split(",")[0] + this.value
                  ),
                this.setCardState(r.Back),
                this.initEvent();
            }),
            (t.prototype.getPokerColor = function () {
              return this.pokerColer;
            }),
            (t.prototype.getPokerType = function () {
              return this.pokerType;
            }),
            (t.prototype.unuse = function () {
              this.node.stopAllActions(),
                this.frontCard.node.stopAllActions(),
                this.backCard.node.stopAllActions(),
                this.setCardState(r.Back),
                this.node.targetOff(this),
                p.gEventMgr.targetOff(this),
                (this.cycled = !1),
                this.setForward(null),
                this.setNext(null),
                (this.isguide = !1),
                (this.node.group = "default");
            }),
            (t.prototype.getNext = function () {
              return this.next;
            }),
            (t.prototype.getForward = function () {
              return this.forward;
            }),
            (t.prototype.setNext = function (e) {
              (this.next = e),
                (this.node
                  .getChildByName("Label")
                  .getComponent(cc.Label).string =
                  "forward:" +
                  (this.forward ? this.forward.getValue() : "null") +
                  "next:" +
                  (this.next ? this.next.getValue() : "null") +
                  ", key:" +
                  this.key);
            }),
            (t.prototype.setForward = function (e) {
              this.forward = e;
            }),
            (t.prototype.setRecycle = function (e) {
              this.isCycled() != e &&
                ((this.cycled =
                  e ||
                  "CycleRoot" == this.node.parent.parent.name ||
                  (this.forward && this.forward.isCycled())),
                this.node.parent &&
                  "PlaceRoot" == this.node.parent.parent.name &&
                  (this.cycled = !1),
                this.cycled && this.setKey(null),
                (this.debugLabel.string += " , cycle:" + this.isCycled()));
            }),
            Object.defineProperty(t.prototype, "debugLabel", {
              get: function () {
                return this.node.getChildByName("Label").getComponent(cc.Label);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getValue = function () {
              return this.value;
            }),
            (t.prototype.getCardState = function () {
              return this.carState;
            }),
            (t.prototype.initEvent = function () {
              this.node.on(
                cc.Node.EventType.CHILD_ADDED,
                this.onAddChild.bind(this),
                this
              ),
                this.node.on(
                  cc.Node.EventType.CHILD_REMOVED,
                  this.onChildRemove.bind(this),
                  this
                ),
                this.node.on(
                  cc.Node.EventType.TOUCH_START,
                  this.onTouchStart,
                  this
                ),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this),
                this.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  this.onMoveEnd,
                  this
                ),
                this.node.on(cc.Node.EventType.TOUCH_END, this.onMoveEnd, this),
                this.node.on("check-done", this.onCheckDone, this),
                p.gEventMgr.once(
                  d.GlobalEvent.COMPLETE,
                  this.autoComplete,
                  this
                ),
                p.gEventMgr.once(
                  d.GlobalEvent.AUTO_COMPLETE_DONE,
                  this.autoCompleteDone,
                  this
                );
            }),
            (t.prototype.autoCompleteDone = function () {
              var e = this,
                t = 0;
              (t = Math.max(
                0,
                this.recycleActionInfo.duration -
                  (Date.now() - this.recycleActionInfo.startTime)
              )),
                (t += 500),
                this.scheduleOnce(function () {
                  var t = CMath.ConvertToNodeSpaceAR(e.node, s.Game.removeNode);
                  e.node.setParent(s.Game.removeNode),
                    e.node.setPosition(t),
                    (e.node.zIndex = e.value);
                }, t / 1e3),
                this.scheduleOnce(function () {
                  var t = (e.value, 1),
                    o = CMath.getRandom(0, 2);
                  (e.canMove = !1),
                    e.node.runAction(
                      cc.sequence(
                        cc.delayTime(
                          (13 - e.value) / 10 + CMath.getRandom(0, 2)
                        ),
                        cc.callFunc(function () {
                          (e.frontCard.node.opacity = 255),
                            (e.node.group = e.isguide ? "top-guide" : "top"),
                            (e.node.zIndex = e.value),
                            p.gEventMgr.emit(d.GlobalEvent.PLAY_POKER_FLY);
                        }, e),
                        cc.sequence(
                          cc.repeat(
                            cc.spawn(
                              cc
                                .moveBy(0.01, 1.5 * t + o, 25)
                                .easing(cc.easeQuinticActionOut()),
                              cc
                                .rotateBy(0.01, 20 * t)
                                .easing(cc.easeQuadraticActionIn())
                            ),
                            30
                          ),
                          cc.repeat(
                            cc.spawn(
                              cc
                                .moveBy(0.01, 2 * t + o, -25)
                                .easing(cc.easeQuinticActionIn()),
                              cc
                                .rotateBy(0.01, 20 * t)
                                .easing(cc.easeQuadraticActionIn())
                            ),
                            180
                          ),
                          cc.callFunc(function () {
                            console.log("done!"),
                              s.Game.addRemovePokerCount(
                                e.node.childrenCount - e.defualtChildCount + 1
                              ),
                              l.gFactory.putPoker(e.node);
                          }, e)
                        )
                      )
                    );
                }, (13 - this.value) / 500 + t / 1e3 + 0.05);
            }),
            (t.prototype.autoComplete = function () {
              (!this.next && "PokerFlipRoot" != this.node.getParent().name) ||
              this.isCycled()
                ? ((this.isReadyAutoComplete = !0),
                  console.log(" isAutoComplete:", this.isReadyAutoComplete))
                : (this.isReadyAutoComplete = !1);
            }),
            (t.prototype.onCheckDone = function (e) {
              this.key == e && this.isCheck;
            }),
            (t.prototype.setDefaultPosition = function (e) {
              this.defaultPos = e || this.node.position.clone();
            }),
            (t.prototype.setLastPosition = function (e) {
              this.lastPos = e || this.node.position.clone();
            }),
            (t.prototype.setFlipPos = function (e) {
              this.flipPos = e || this.node.position.clone();
            }),
            (t.prototype.getFlipPos = function () {
              return this.flipPos
                ? this.flipPos.clone()
                : this.node.position.clone();
            }),
            (t.prototype.getDefaultPosition = function () {
              return this.defaultPos
                ? this.defaultPos.clone()
                : this.node.position.clone();
            }),
            (t.prototype.getLastPosition = function () {
              return this.lastPos
                ? this.lastPos.clone()
                : this.node.position.clone();
            }),
            (t.prototype.setKey = function (e) {
              (this.key = e),
                e && "NaN" == e.toString()
                  ? (this.node
                      .getChildByName("Label")
                      .getComponent(cc.Label).string +=
                      "value:" + this.value.toString())
                  : (this.node
                      .getChildByName("Label")
                      .getComponent(cc.Label).string =
                      "next:" +
                      (this.next ? this.next.getValue() : "null") +
                      ", key:" +
                      this.key),
                this.next &&
                  this.next.getKey() != this.key &&
                  this.next.setKey(e);
            }),
            (t.prototype.getKey = function () {
              return this.key;
            }),
            (t.prototype.onTouchStart = function (e) {
              if (
                ((e.bubbles = !1),
                this.isguide,
                this.node.getNumberOfRunningActions() > 0)
              )
                console.log(
                  " has running action, wait on touch start , val:",
                  this.value,
                  ", key:",
                  this.key
                );
              else if (
                ((this.isMoveEnd = !1),
                (e.bubbles = !this.isNormal()),
                s.Game.resetFreeTime(),
                this.node.stopActionByTag(u.ACTION_TAG.SHAKE),
                !s.Game.isTimeOver() && !s.Game.isComplete())
              ) {
                var t = this.node.getActionByTag(u.ACTION_TAG.BACK_STEP);
                (t && !t.isDone()) ||
                  (s.Game.isGameStarted() || s.Game.start(),
                  p.gEventMgr.emit(d.GlobalEvent.PLAY_POKER_PLACE));
              }
            }),
            (t.prototype.checkAutoRecycle = function () {
              var e = this;
              if (this.isCycled())
                return (
                  console.log(
                    " poker is recycled !!! ",
                    this.value,
                    ", type:",
                    a[this.pokerType]
                  ),
                  !1
                );
              var t = -1;
              if (
                (s.Game.getCycledPokerRoot().forEach(function (n, i) {
                  var r = i.getComponent(o);
                  r
                    ? o.checkRecycled(r, e) && (t = n)
                    : 1 == e.value && (t = n);
                }, !0),
                this.node.childrenCount > this.defualtChildCount && t >= 0)
              ) {
                console.log(
                  " poker has next !!!, childcount:",
                  this.node.childrenCount,
                  ", default:",
                  this.defualtChildCount,
                  " recycle index:",
                  t,
                  ",val: ",
                  this.value,
                  ",type:",
                  a[this.pokerType]
                );
                var n = this.node.children[this.node.childrenCount - 1];
                return (
                  n &&
                    n.getComponent(o) &&
                    console.log(
                      " key:",
                      n.getComponent(o).key,
                      " ,val:",
                      n.getComponent(o).value
                    ),
                  !1
                );
              }
              return (
                t >= 0 &&
                  t <= 3 &&
                  null !== t &&
                  (console.log(
                    " recycle count auto place to recycled root:",
                    t
                  ),
                  this.placeToNewCycleNode(t)),
                t >= 0 && t <= 3 && null !== t
              );
            }),
            (t.prototype.onMove = function (e) {
              if (
                ((e.bubbles = !1),
                this.isguide,
                this.node.getNumberOfRunningActions() > 0)
              )
                console.log(
                  " has running action, wait on touch move , val:",
                  this.value,
                  ", key:",
                  this.key
                );
              else if (
                ((this.isMoveEnd = !1),
                (e.bubbles = !1),
                s.Game.resetFreeTime(),
                !s.Game.isTimeOver() && !s.Game.isComplete())
              ) {
                var t = this.node.getActionByTag(u.ACTION_TAG.BACK_STEP);
                if (!t || t.isDone())
                  if (this.canMove) {
                    if (!this.isCycled() || !this.next) {
                      var o = this.node.getActionByTag(u.ACTION_TAG.RECYCLE);
                      if (!o || o.isDone()) {
                        this.node.group = this.isguide ? "top-guide" : "top";
                        var n = e.getDelta();
                        (this.node.x += n.x), (this.node.y += n.y);
                      }
                    }
                  } else console.log(" cant move ");
              }
            }),
            (t.prototype.setCanMove = function (e) {
              this.canMove = e;
            }),
            (t.prototype.onMoveEnd = function (e) {
              var t = this;
              if (
                ((e.bubbles = !1),
                (this.isMoveEnd = !0),
                this.isguide,
                this.node.getNumberOfRunningActions() > 0)
              )
                console.log(
                  " has running action, wait on touch end , val:",
                  this.value,
                  ", key:",
                  this.key
                );
              else if (
                (s.Game.resetFreeTime(),
                !s.Game.isTimeOver() && !s.Game.isComplete())
              ) {
                var o = this.node.getActionByTag(u.ACTION_TAG.RECYCLE);
                if (!o || o.isDone()) {
                  var n = this.node.getActionByTag(u.ACTION_TAG.BACK_STEP);
                  if ((!n || n.isDone()) && this.defaultPos && this.canMove) {
                    var i = this.checkCanPlace();
                    if (i >= 0 && i <= 6) this.placeToNewRoot(i);
                    else {
                      var r = this.checkCanRecycled();
                      if (r >= 0 && r <= 3 && null !== r) {
                        if (null === r);
                        this.placeToNewCycleNode(r);
                      } else
                        this.checkAutoRecycle() ||
                          (CMath.Distance(this.node.position, this.defaultPos) <
                          5
                            ? ((this.node.group = this.isguide
                                ? "guide"
                                : "default"),
                              console.log(" return to default pos"),
                              this.node.setPosition(this.defaultPos),
                              this.next || this.shake())
                            : (p.gEventMgr.emit(d.GlobalEvent.DEV_POKERS),
                              this.node.runAction(
                                cc.sequence(
                                  cc.moveTo(
                                    0.1,
                                    this.defaultPos.x,
                                    this.defaultPos.y
                                  ),
                                  cc.callFunc(function () {
                                    t.node.group = t.isguide
                                      ? "guide"
                                      : "default";
                                  }, this)
                                )
                              )));
                    }
                  }
                }
              }
            }),
            (t.prototype.checkCanPlace = function () {
              var e = this,
                t = -1;
              return (
                s.Game.getPlacePokerRoot().forEach(function (n, i) {
                  var r = i.getComponent(o);
                  if (
                    (e.node.name != i.name || !r) &&
                    (!r || r.getKey() != e.getKey()) &&
                    ((r && o.checkBeNext(r, e)) ||
                      (!r && 13 == e.value) ||
                      window.cheat)
                  ) {
                    var c = CMath.ConvertToNodeSpaceAR(i, e.node.parent);
                    Math.abs(c.x - e.node.position.x) <= e.placeLimit.width &&
                      Math.abs(c.y - e.node.position.y) <=
                        e.placeLimit.height &&
                      (t = n);
                  }
                }),
                t
              );
            }),
            (t.prototype.checkCanRecycled = function () {
              var e = this,
                t = -1;
              return this.node.childrenCount > this.defualtChildCount
                ? t
                : (s.Game.getCycledPokerRoot().forEach(function (n, i) {
                    var r = i.getComponent(o);
                    if (
                      (e.node.name != i.name || !r) &&
                      ((r && o.checkRecycled(r, e)) || (!r && 1 == e.value))
                    ) {
                      var c = CMath.ConvertToNodeSpaceAR(i, e.node.parent);
                      Math.abs(c.x - e.node.x) <= e.placeLimit.width &&
                        Math.abs(c.y - e.node.y) <= e.placeLimit.height &&
                        (t = n);
                    }
                  }),
                  t);
            }),
            (t.prototype.updateRootNode = function (e) {
              if (
                !(
                  this.isCycled() ||
                  null == this.key ||
                  null === e ||
                  e < 0 ||
                  e > 6
                )
              )
                if (this.node.childrenCount <= this.defualtChildCount)
                  s.Game.addPlacePokerRoot(e, this.node);
                else {
                  if (!this.next) return;
                  this.next.updateRootNode.call(this.next, e);
                }
            }),
            (t.prototype.placeToNewRoot = function (e) {
              var t = this,
                n = s.Game.getPlacePokerRoot().get(e),
                i = CMath.ConvertToNodeSpaceAR(this.node, n),
                c = 0;
              this.isCycled() && (c = 10 * -(13 - this.value));
              var l = 0,
                h = "PokerFlipRoot" == this.node.getParent().name;
              h && (l = 20), s.Game.resetCombo();
              var f = CMath.ConvertToNodeSpaceAR(this.node, s.Game.removeNode);
              if (
                (s.Game.addScore(
                  c,
                  f,
                  "Recycle-" + a[this.pokerType] + "-" + this.value
                ),
                s.Game.addScore(
                  l,
                  CMath.ConvertToNodeSpaceAR(
                    this.node.getParent(),
                    s.Game.removeNode
                  ),
                  "flip-" + a[this.pokerType] + "-" + this.value
                ),
                this.forward && this.forward.carState == r.Back)
              )
                s.Game.addStep(
                  [this.node],
                  [this.forward.node],
                  [this.node.position.clone()],
                  [
                    {
                      callback: this.forward.flipCard,
                      args: [
                        0.1,
                        !1,
                        function () {
                          s.Game.addFlipCounts(-1);
                        },
                      ],
                      target: this.forward,
                    },
                  ],
                  [-20 - c - l],
                  [f]
                );
              else {
                var g = [];
                h &&
                  (g = [
                    {
                      callback: s.Game.addFlipCounts,
                      args: [-1],
                      target: s.Game,
                    },
                  ]),
                  s.Game.addStep(
                    [this.node],
                    [this.node.getParent()],
                    [this.node.position.clone()],
                    g,
                    [-c - l],
                    [f]
                  );
              }
              this.node.setParent(n),
                this.node.setPosition(i),
                p.gEventMgr.emit(d.GlobalEvent.PLAY_EFFECT, "lay_success");
              var m = u.Empty_Offset;
              n.getComponent(o) && (m = u.OFFSET_Y),
                this.setDefaultPosition(cc.v2(0, m)),
                p.gEventMgr.emit(d.GlobalEvent.DEV_POKERS),
                p.gEventMgr.emit(d.GlobalEvent.POP_GUIDE_STEP),
                this.node.runAction(
                  cc.sequence(
                    cc.moveTo(0.1, 0, m),
                    cc.callFunc(function () {
                      h && s.Game.addFlipCounts(1),
                        (t.node.group = t.isguide ? "guide" : "default");
                    }, this)
                  )
                );
            }),
            (t.prototype.isCycled = function () {
              return (
                ((this.node.parent &&
                  this.node.parent.parent &&
                  "CycleRoot" == this.node.parent.parent.name) ||
                  (this.forward && this.forward.isCycled())) &&
                  ((this.cycled = !0), this.setKey(null)),
                this.node.parent &&
                  this.node.parent.parent &&
                  "PlaceRoot" == this.node.parent.parent.name &&
                  (this.cycled = !1),
                this.cycled
              );
            }),
            (t.prototype.placeToNewCycleNode = function (e, t) {
              var n = this;
              if (
                (void 0 === t && (t = 0),
                console.log(" guide;", this.isguide),
                null === e || e < 0 || e > 3)
              )
                console.log(
                  " place to new cycle node error:" +
                    e +
                    ", val:" +
                    this.value +
                    ", type:" +
                    a[this.pokerType]
                );
              else {
                var i = s.Game.getCycledPokerRoot().get(e),
                  c = i.getComponent(o),
                  l = this.node.getParent(),
                  h = l.getComponent(o);
                if (
                  (l.parent.name === i.parent.name && !c && !h) ||
                  (c && h && c.value == h.value && c.pokerType == h.pokerType)
                )
                  return (
                    console.log(
                      " click too quick recycle count ,val:",
                      this.value,
                      ", key:",
                      this.key
                    ),
                    void (
                      (0 == this.node.x && 0 == this.node.y) ||
                      (console.log(" poker is recycle, but position in wrong"),
                      (this.node.x = 0),
                      (this.node.y = 0))
                    )
                  );
                if (
                  (!(this.node.getNumberOfRunningActions() > 0) &&
                    this.isMoveEnd) ||
                  s.Game.isComplete()
                ) {
                  var f = CMath.ConvertToNodeSpaceAR(this.node, i),
                    g = 10 * (13 - this.value),
                    m = 0,
                    _ = "PokerFlipRoot" == this.node.getParent().name;
                  _ && ((m = 20), s.Game.addFlipCounts(1)),
                    this.isCycled() ? ((g = 0), (m = 0)) : s.Game.addCombo(1);
                  var y,
                    v = CMath.ConvertToNodeSpaceAR(i, s.Game.removeNode);
                  if (
                    (console.log(
                      " add recycle score:",
                      g,
                      ", score2:",
                      m,
                      " val:",
                      this.value,
                      "type:",
                      a[this.pokerType],
                      "cycle:",
                      this.isCycled()
                    ),
                    this.setRecycle(!0),
                    s.Game.addScore(
                      g,
                      v,
                      "Recycle-" + a[this.pokerType] + "-" + this.value
                    ),
                    s.Game.addScore(
                      m,
                      CMath.ConvertToNodeSpaceAR(this.node, s.Game.removeNode),
                      "flip-" + a[this.pokerType] + "-" + this.value
                    ),
                    this.forward && this.forward.carState == r.Back)
                  )
                    s.Game.addStep(
                      [this.node],
                      [this.forward.node],
                      [this.node.position.clone()],
                      [
                        {
                          callback: this.forward.flipCard,
                          args: [
                            0.1,
                            !1,
                            function () {
                              s.Game.addFlipCounts(-1);
                            },
                          ],
                          target: this.forward,
                        },
                      ],
                      [-20 - g - m],
                      [v]
                    );
                  else {
                    var C = [];
                    _ &&
                      (C = [
                        {
                          callback: s.Game.addFlipCounts,
                          args: [-1],
                          target: s.Game,
                        },
                      ]),
                      s.Game.addStep(
                        [this.node],
                        [this.node.getParent()],
                        [this.node.position.clone()],
                        C,
                        [-g - m],
                        [v]
                      );
                  }
                  s.Game.isComplete() &&
                    this.forward &&
                    (y = this.forward.autoComplete.bind(this.forward)),
                    this.node.setParent(i),
                    this.node.setPosition(f);
                  var P = CMath.Distance(f, cc.v2(0, 0)) / 2500;
                  this.setKey(null),
                    this.setNext(null),
                    s.Game.addCycledPokerRoot(e, this.node),
                    this.setDefaultPosition(cc.v2(0, 0));
                  var T = cc.sequence(
                    cc.delayTime(t),
                    cc.callFunc(function () {
                      n.node.group = n.isguide ? "top-guide" : "top";
                    }),
                    cc.moveTo(P, 0, 0),
                    cc.callFunc(function () {
                      p.gEventMgr.emit(d.GlobalEvent.DEV_POKERS),
                        p.gEventMgr.emit(d.GlobalEvent.PLAY_RECYCLE),
                        p.gEventMgr.emit(d.GlobalEvent.POP_GUIDE_STEP);
                    }),
                    cc.delayTime(0),
                    cc.callFunc(function () {
                      (n.node.group = n.isguide ? "guide" : "default"),
                        (n.RecycleAnimation.node.active = !0),
                        n.RecycleAnimation.play(),
                        !s.Game.checkIsRecycleComplete() &&
                          y &&
                          setTimeout(y, e / 5);
                    }, this)
                  );
                  (this.recycleActionInfo.duration = 1e3 * (t + P)),
                    (this.recycleActionInfo.startTime = Date.now()),
                    T.setTag(u.ACTION_TAG.RECYCLE),
                    this.node.runAction(T);
                } else
                  console.log(
                    " poker is moving ,cant recycle now, val:",
                    this.value,
                    " , key:",
                    this.key
                  );
              }
            }),
            (t.prototype.check = function (e) {
              this.carState != r.Back &&
                (this.value == e
                  ? ((this.isCheck = !0),
                    13 == e
                      ? (this.emitCheckDone(), s.Game.clearStep())
                      : this.forward &&
                        this.forward.check.call(this.forward, e + 1))
                  : (this.isCheck = !1));
            }),
            (t.prototype.shake = function () {
              if (
                !this.isCycled() &&
                !(
                  s.Game.isComplete() ||
                  this.node.getNumberOfRunningActions() > 0
                )
              ) {
                var e = this.node.getActionByTag(u.ACTION_TAG.BACK_STEP);
                if (!e || e.isDone()) {
                  this.node.group = this.isguide ? "guide" : "default";
                  var t = this.getDefaultPosition(),
                    o = cc.sequence(
                      cc.repeat(
                        cc.sequence(
                          cc.moveTo(0.02, t.x - 10, t.y),
                          cc.moveTo(0.04, t.x + 20, t.y),
                          cc.moveTo(0.02, t.x - 10, t.y)
                        ),
                        5
                      ),
                      cc.moveTo(0.01, t.x, t.y)
                    );
                  o.setTag(u.ACTION_TAG.SHAKE),
                    this.node.stopActionByTag(u.ACTION_TAG.SHAKE),
                    this.node.runAction(o),
                    p.gEventMgr.emit(d.GlobalEvent.PLAY_SHAKE);
                }
              }
            }),
            (t.prototype.emitCheckDone = function () {
              this.node.emit("check-done", this.key),
                this.next && this.next.emitCheckDone.call(this.next);
            }),
            (t.prototype.onAddChild = function (e) {
              var t = this,
                n = e.getComponent(o);
              if (n)
                if ((this.setNext(n), this.isCycled())) {
                  n.setRecycle(!0);
                  var i = -1;
                  if (
                    (s.Game.getCycledPokerRoot().forEach(function (e, n) {
                      var r = n.getComponent(o);
                      r &&
                        r.getValue() == t.value &&
                        r.getPokerType() == t.pokerType &&
                        (i = e);
                    }),
                    i >= 0 &&
                      i <= 3 &&
                      null !== i &&
                      s.Game.addCycledPokerRoot(i, e),
                    this.forward && this.forward.forward)
                  ) {
                    var r = this.forward.forward;
                    this.scheduleOnce(function () {
                      r.frontCard.node.opacity = 0;
                    }, 0.1);
                  }
                } else
                  n.setRecycle(!1),
                    o.checkBeNext(this, this.next)
                      ? this.setNormal()
                      : this.setAllGray(),
                    n.setNormal(),
                    this.key >= 0 && this.key <= 6 && null !== this.key
                      ? this.updateRootNode(this.key)
                      : console.log(
                          " invaild key, and poker is not recycle, val:",
                          this.value,
                          ", type:",
                          a[this.pokerType]
                        );
              else console.error(" \u6ca1\u6709 Poker\u7c7b");
            }),
            (t.checkBeNext = function (e, t) {
              return (
                !(!t || !e) &&
                (!!window.cheat ||
                  (e.getValue() - t.getValue() == 1 &&
                    e.getPokerColor() != t.getPokerColor()))
              );
            }),
            (t.checkRecycled = function (e, t) {
              return (
                !(!t || !e) &&
                e.getValue() - t.getValue() == -1 &&
                e.getPokerType() == t.getPokerType()
              );
            }),
            (t.prototype.onChildRemove = function (e) {
              if (
                (this.setNext(null),
                s.Game.isGameStarted() && !s.Game.isComplete())
              ) {
                if (this.isCycled()) {
                  this.forward &&
                    this.forward.forward &&
                    (this.forward.forward.frontCard.node.opacity = 255);
                  var t = e.getComponent(o),
                    n = null;
                  return (
                    s.Game.getCycledPokerRoot().forEach(function (e, i) {
                      var r = i.getComponent(o);
                      t &&
                        r &&
                        r.getValue() == t.getValue() &&
                        r.getPokerType() == t.getPokerType() &&
                        (n = e);
                    }),
                    null !== n && n >= 0 && n <= 3
                      ? s.Game.addCycledPokerRoot(n, this.node)
                      : console.log(
                          " index is null on  recyclePoker is RemoveChild, val:",
                          this.value,
                          ", type:",
                          a[this.pokerType]
                        ),
                    void (t && this.isCycled() && t.setRecycle(!1))
                  );
                }
                if (this.node.childrenCount <= this.defualtChildCount)
                  console.log(
                    "onChildRemove update poker root:",
                    this.key,
                    ",value:",
                    this.value
                  ),
                    this.key >= 0 && this.key <= 6 && null !== this.key
                      ? s.Game.addPlacePokerRoot(this.key, this.node)
                      : console.error(
                          " invaild key, onChildremove:",
                          this.value,
                          ", type:",
                          a[this.pokerType]
                        ),
                    this.setNormal(),
                    this.carState == r.Back
                      ? (this.flipCard(0.1),
                        s.Game.addFlipCounts(1),
                        s.Game.addScore(
                          20,
                          CMath.ConvertToNodeSpaceAR(
                            this.node,
                            s.Game.removeNode
                          ),
                          "flip-" + a[this.pokerType] + "-" + this.value
                        ))
                      : this.forward &&
                        this.forward.updateState.call(this.forward);
                else
                  console.error(
                    "onChildRemove childrenCount >= defaultCount:",
                    this.key,
                    ",value:",
                    this.value
                  );
              }
            }),
            (t.prototype.updateState = function () {
              this.next
                ? (o.checkBeNext(this, this.next) && this.next.isNormal()
                    ? this.setNormal()
                    : (this.canMove = !1),
                  this.forward && this.forward.updateState.call(this.forward))
                : this.setNormal();
            }),
            (t.prototype.setAllGray = function () {
              this.node.parent &&
                ((this.canMove = !1),
                this.forward && this.forward.setAllGray.call(this.forward));
            }),
            (t.prototype.setNormal = function () {
              (this.frontCard.node.color = cc.Color.WHITE),
                (this.canMove = this.carState == r.Front);
            }),
            (t.prototype.isGray = function () {
              return 0 == this.canMove;
            }),
            (t.prototype.setCardState = function (e, t) {
              void 0 === t && (t = !0),
                (this.carState = e),
                (this.frontCard.node.scaleX = this.carState == r.Front ? 1 : 0),
                (this.backCard.node.scaleX = this.carState == r.Back ? 1 : 0),
                (this.canMove = this.carState == r.Front && t),
                this.canMove &&
                  this.next &&
                  !o.checkBeNext(this, this.next) &&
                  (this.canMove = !1),
                this.canMove ? this.setDefaultPosition() : this.forward;
            }),
            (t.prototype.isNormal = function () {
              return this.carState == r.Front && this.canMove;
            }),
            (t.prototype.isFront = function () {
              return this.carState == r.Front;
            }),
            (t.prototype.setGuide = function (e) {
              this.isguide = e;
            }),
            (t.prototype.flipCard = function (e, t, o) {
              var n = this;
              if (
                (void 0 === e && (e = 1),
                void 0 === t && (t = !0),
                this.frontCard.node.getNumberOfRunningActions() > 0 ||
                  this.backCard.node.getNumberOfRunningActions() > 0)
              )
                return (
                  console.log("flip action not done!"),
                  void this.flips.push({ duration: e, callback: o, canMove: t })
                );
              this.carState == r.Back
                ? (this.frontCard.node.runAction(
                    cc.sequence(
                      cc.delayTime(e),
                      cc.scaleTo(e, 1, 1),
                      cc.callFunc(function () {
                        if (
                          (n.setCardState(r.Front, t),
                          o && o(),
                          n.flips.length > 0)
                        ) {
                          n.frontCard.node.stopAllActions(),
                            n.backCard.node.stopAllActions();
                          var e = n.flips.pop();
                          n.flipCard.call(n, e.duration, e.canMove, e.callback);
                        }
                      }, this)
                    )
                  ),
                  this.backCard.node.runAction(cc.scaleTo(e, 0, 1)))
                : (this.backCard.node.runAction(
                    cc.sequence(
                      cc.delayTime(e),
                      cc.scaleTo(e, 1, 1),
                      cc.callFunc(function () {
                        if (
                          (n.setCardState(r.Back, !1),
                          o && o(),
                          n.flips.length > 0)
                        ) {
                          n.backCard.node.stopAllActions(),
                            n.frontCard.node.stopAllActions();
                          var e = n.flips.pop();
                          n.flipCard.call(n, e.duration, e.canMove, e.callback);
                        }
                      }, this)
                    )
                  ),
                  this.frontCard.node.runAction(cc.scaleTo(e, 0, 1)));
            }),
            (t.prototype.start = function () {}),
            (t.prototype.update = function (e) {
              if (this.isCycled())
                this.node.parent &&
                  this.node.parent.parent &&
                  "CycleRoot" == this.node.parent.parent.name &&
                  this.node.getNumberOfRunningActions() <= 0 &&
                  this.isMoveEnd &&
                  ((this.node.y = 0), (this.node.x = 0));
              else if (
                (this.node.parent &&
                  this.node.parent.parent &&
                  "PlaceRoot" == this.node.parent.parent.name &&
                  this.node.getNumberOfRunningActions() <= 0 &&
                  this.isMoveEnd &&
                  (this.node.y = u.Empty_Offset),
                this.isReadyAutoComplete)
              ) {
                var t = !this.checkAutoRecycle();
                t != this.isReadyAutoComplete &&
                  console.log(" autoRecycle:", t),
                  (this.isReadyAutoComplete = t);
              }
            }),
            (t.prototype.onSetParent = function (e) {
              if (e) {
                var t = e.getComponent(o);
                t
                  ? (this.setForward(t), this.setKey(t.getKey()))
                  : (this.setForward(null), this.setKey(parseInt(e.name))),
                  (t && t.isCycled()) ||
                  (e && e.parent && "CycleRoot" == e.parent.name)
                    ? (this.setKey(null), this.setRecycle(!0))
                    : e && "RemoveNode" != e.name && this.setRecycle(!1);
              } else this.setForward(null);
            }),
            (t.DebugRecycIndex = 0),
            i([g(cc.Sprite)], t.prototype, "frontCard", void 0),
            i([g(cc.Sprite)], t.prototype, "backCard", void 0),
            i([g(cc.SpriteAtlas)], t.prototype, "pokerAtlas", void 0),
            i([g(cc.Animation)], t.prototype, "RecycleAnimation", void 0),
            (t = o = i([f], t))
          );
        })(cc.Component);
        (o.default = m), cc._RF.pop();
      },
      {
        "./Pokers": "Pokers",
        "./controller/EventManager": "EventManager",
        "./controller/EventName": "EventName",
        "./controller/Game": "Game",
        "./controller/GameFactory": "GameFactory",
      },
    ],
    RecycleRoot: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "bc8dfsy/SxCYZDWNhC7pOvt", "RecycleRoot");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = e("./controller/Game"),
          c = e("./Poker"),
          a = cc._decorator,
          s = a.ccclass,
          l =
            (a.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                n(t, e),
                (t.prototype.onLoad = function () {
                  this.node.on(
                    cc.Node.EventType.CHILD_ADDED,
                    this.onAddChild,
                    this
                  ),
                    this.node.on(
                      cc.Node.EventType.CHILD_REMOVED,
                      this.onChildRemove,
                      this
                    );
                }),
                (t.prototype.onAddChild = function (e) {
                  var t = e.getComponent(c.default);
                  t && (t.setNext(null), t.setRecycle(!0)),
                    r.Game.addCycledPokerRoot(parseInt(this.node.name), e);
                }),
                (t.prototype.onChildRemove = function (e) {
                  r.Game.addCycledPokerRoot(
                    parseInt(this.node.name),
                    this.node
                  );
                }),
                (t.prototype.start = function () {}),
                (t.prototype.update = function (e) {}),
                (t = i([s], t))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      { "./Poker": "Poker", "./controller/Game": "Game" },
    ],
    Result: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3d3e694EHtE55kWvZJIadml", "Result");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = e("./controller/Game"),
          c = e("./controller/EventManager"),
          a = e("./controller/EventName"),
          s = cc._decorator,
          l = s.ccclass,
          u = s.property,
          p = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.Score = null),
                (t.TimeBonus = null),
                (t.FinalScore = null),
                (t.ConfirmButton = null),
                (t.Title = null),
                (t.TitleAtlas = null),
                (t.Result = null),
                (t.Light = null),
                (t.Stars = null),
                (t.score = 0),
                (t.timeBonus = 0),
                (t.finalScore = 0),
                (t.scoreStep = 0),
                (t.timeBonusStep = 0),
                (t.finalScoreStep = 0),
                (t.showScore = 0),
                (t.scoreComplete = !1),
                (t.timeBonusComplete = !1),
                (t.finalScoreComplete = !1),
                (t.sumbit = !1),
                (t.alreadySubmit = !1),
                t
              );
            }
            return (
              n(t, e),
              (t.prototype.onLoad = function () {
                var e = this;
                console.log(" result layer onload..."),
                  r.Game.calTimeBonus(),
                  console.log(" totalScore:", r.Game.getScore()),
                  console.log(" score detail:", r.Game.ScoreDetail),
                  c.gEventMgr.emit(a.GlobalEvent.SMALL_BGM);
                for (
                  var t = function (e) {
                      var t = cc.repeatForever(
                        cc.sequence(
                          cc
                            .fadeIn(CMath.getRandom(0.5, 1.5))
                            .easing(cc.easeQuadraticActionInOut()),
                          cc
                            .fadeOut(CMath.getRandom(0.4, 0.8))
                            .easing(cc.easeQuadraticActionInOut())
                        )
                      );
                      (e.opacity = 0),
                        setTimeout(function () {
                          e.runAction(t);
                        }, 1e3 * CMath.getRandom(0, 0.5));
                    },
                    o = 0,
                    n = this.Stars.children;
                  o < n.length;
                  o++
                ) {
                  t(n[o]);
                }
                (this.Light.active = !1),
                  (this.Score.string = "0"),
                  (this.TimeBonus.string = "0"),
                  (this.FinalScore.string = "0"),
                  r.Game.getTimeBonus() > 0
                    ? r.Game.isComplete()
                      ? (this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame(
                          "bg_complete"
                        ))
                      : (this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame(
                          "bg_font02"
                        ))
                    : r.Game.isComplete()
                    ? (this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame(
                        "bg_complete"
                      ))
                    : (this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame(
                        "bg_font03"
                      )),
                  c.gEventMgr.emit(a.GlobalEvent.PLAY_OVER_1),
                  this.Result.setEventListener(this.eventListener.bind(this)),
                  (this.showScore = Math.max(
                    0,
                    r.Game.getScore() - r.Game.getTimeBonus()
                  )),
                  console.log(
                    " result:",
                    r.Game.getScore(),
                    ", timeBonus:",
                    r.Game.getTimeBonus(),
                    ",showScore:",
                    this.showScore
                  ),
                  (this.scoreStep = Math.ceil(this.showScore / 30)),
                  (this.timeBonusStep = Math.ceil(r.Game.getTimeBonus() / 30)),
                  (this.finalScoreStep = Math.ceil(r.Game.getScore() / 30)),
                  this.ConfirmButton.node.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      e.alreadySubmit ||
                        (console.log(
                          "sumbit score by click, matchid:",
                          r.Game.MatchInfo.matchId,
                          ", seed:",
                          r.Game.MatchInfo.sharedRandomSeed
                        ),
                        CELER_X && celerSDK.submitScore(r.Game.getScore()),
                        (e.alreadySubmit = !0));
                    },
                    this
                  ),
                  c.gEventMgr.on(
                    a.GlobalEvent.RESTART,
                    function () {
                      e.node.removeFromParent();
                    },
                    this
                  );
              }),
              (t.prototype.eventListener = function (e, t) {
                switch (t.stringValue) {
                  case "light":
                    (this.Light.active = !0),
                      this.Light.runAction(
                        cc.repeatForever(cc.rotateBy(5, 360))
                      );
                    break;
                  case "music1":
                    break;
                  case "music2":
                    c.gEventMgr.emit(a.GlobalEvent.PLAY_OVER_2);
                }
              }),
              (t.prototype.start = function () {}),
              (t.prototype.check = function () {
                var e = this;
                this.sumbit ||
                  (this.scoreComplete &&
                    this.timeBonusComplete &&
                    this.finalScoreComplete &&
                    ((this.sumbit = !0),
                    console.log("submit"),
                    this.scheduleOnce(function () {
                      e.alreadySubmit ||
                        (console.log(
                          "sumbit score by scheduleOnce, matchid:",
                          r.Game.MatchInfo.matchId,
                          ", seed:",
                          r.Game.MatchInfo.sharedRandomSeed
                        ),
                        CELER_X && celerSDK.submitScore(r.Game.getScore()),
                        (e.alreadySubmit = !0));
                    }, 2)));
              }),
              (t.prototype.update = function (e) {
                this.score < this.showScore
                  ? ((this.score += this.scoreStep),
                    (this.score = Math.min(this.score, this.showScore)),
                    (this.Score.string = this.score.toString()))
                  : ((this.scoreComplete = !0), this.check()),
                  this.timeBonus < r.Game.getTimeBonus()
                    ? ((this.timeBonus += this.timeBonusStep),
                      (this.timeBonus = Math.min(
                        this.timeBonus,
                        r.Game.getTimeBonus()
                      )),
                      (this.TimeBonus.string = this.timeBonus.toString()))
                    : ((this.timeBonusComplete = !0), this.check()),
                  this.finalScore < r.Game.getScore()
                    ? ((this.finalScore += this.finalScoreStep),
                      (this.finalScore = Math.min(
                        this.finalScore,
                        r.Game.getScore()
                      )),
                      (this.FinalScore.string = this.finalScore.toString()))
                    : ((this.finalScoreComplete = !0), this.check());
              }),
              i([u(cc.Label)], t.prototype, "Score", void 0),
              i([u(cc.Label)], t.prototype, "TimeBonus", void 0),
              i([u(cc.Label)], t.prototype, "FinalScore", void 0),
              i([u(cc.Button)], t.prototype, "ConfirmButton", void 0),
              i([u(cc.Sprite)], t.prototype, "Title", void 0),
              i([u(cc.SpriteAtlas)], t.prototype, "TitleAtlas", void 0),
              i([u(sp.Skeleton)], t.prototype, "Result", void 0),
              i([u(cc.Node)], t.prototype, "Light", void 0),
              i([u(cc.Node)], t.prototype, "Stars", void 0),
              (t = i([l], t))
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {
        "./controller/EventManager": "EventManager",
        "./controller/EventName": "EventName",
        "./controller/Game": "Game",
      },
    ],
    ScoreLabel: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "63782W3hqJOj5tpO+PG+bef", "ScoreLabel");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a = r.property,
          s = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.Score = null), t;
            }
            return (
              n(t, e),
              (t.prototype.reuse = function () {
                (this.node.scale = 0),
                  console.log(arguments[0][0]),
                  (this.Score.string = arguments[0][0]);
              }),
              (t.prototype.unuse = function () {
                this.node.group = "top";
              }),
              (t.prototype.onLoad = function () {}),
              (t.prototype.start = function () {}),
              i([a(cc.Label)], t.prototype, "Score", void 0),
              (t = i([c], t))
            );
          })(cc.Component);
        (o.default = s), cc._RF.pop();
      },
      {},
    ],
    Signal: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e6123pH6LpHF4CS36DVzoZ7", "Signal");
        var n =
          (this && this.__extends) ||
          (function () {
            var e = function (t, o) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(t, o);
            };
            return function (t, o) {
              function n() {
                this.constructor = t;
              }
              e(t, o),
                (t.prototype =
                  null === o
                    ? Object.create(o)
                    : ((n.prototype = o.prototype), new n()));
            };
          })();
        Object.defineProperty(o, "__esModule", { value: !0 });
        var i = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.listenerMap = []), (t.onceListenerMap = []), t;
          }
          return (
            n(t, e),
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
                for (var o = 0, n = this.listenerMap; o < n.length; o++) {
                  var i = n[o];
                  i.callback.apply(i.target, e);
                }
            }),
            (t.prototype.excuteOnce = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              if (this.onceListenerMap && this.onceListenerMap.length > 0) {
                for (var o = 0, n = this.onceListenerMap; o < n.length; o++) {
                  var i = n[o];
                  i.callback.apply(i.target, e);
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
                  var n = this.listenerMap[o];
                  n.callback == e &&
                    n.target == t &&
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
            (t.prototype.dispatchFour = function (e, t, o, n) {
              this.doDispatch(e, t, o, n);
            }),
            (t.prototype.dispatchFive = function (e, t, o, n, i) {
              this.doDispatch(e, t, o, n, i);
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
    SingleTouchMediator: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "17bf7tT4vNBOL4okG2DJZ6g", "SingleTouchMediator");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.touchid = null), t;
              }
              return (
                n(t, e),
                (t.prototype.bind = function (e) {
                  this.view = e;
                }),
                Object.defineProperty(t.prototype, "View", {
                  get: function () {
                    return (
                      console.assert(null != this.view, " view is null"),
                      this.view
                    );
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.onRegister = function () {
                  this.node.targetOff(this),
                    this.node.on(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.touchCancel,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_END,
                      this.touchEnd,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMove,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_START,
                      this.touchStart,
                      this
                    );
                }),
                (t.prototype.onUnregister = function () {
                  this.node.targetOff(this);
                }),
                (t.prototype.touchStart = function (e) {
                  if (null !== this.touchid && this.touchid !== e.getID())
                    return (
                      console.log(
                        this.node.name,
                        " touch start  touchid is different: ",
                        this.touchid,
                        e.getID()
                      ),
                      void e.stopPropagation()
                    );
                  (this.touchid = e.getID()), this.onTouchStart(e);
                }),
                (t.prototype.touchMove = function (e) {
                  null === this.touchid || this.touchid === e.getID()
                    ? ((this.touchid = e.getID()), this.onTouchMove(e))
                    : e.stopPropagation();
                }),
                (t.prototype.touchEnd = function (e) {
                  if (null !== this.touchid && this.touchid !== e.getID())
                    return (
                      console.log(
                        this.node.name,
                        " touch end  touchid is different: ",
                        this.touchid,
                        e.getID()
                      ),
                      void e.stopPropagation()
                    );
                  null != this.touchid
                    ? ((this.touchid = null),
                      this.onTouchEnd(e),
                      this.OnClick())
                    : e.stopPropagation();
                }),
                (t.prototype.touchCancel = function (e) {
                  if (null !== this.touchid && this.touchid !== e.getID())
                    return (
                      console.log(
                        this.node.name,
                        " touch cancel  touchid is different: ",
                        this.touchid,
                        e.getID()
                      ),
                      void e.stopPropagation()
                    );
                  null != this.touchid
                    ? ((this.touchid = null), this.onTouchCancel(e))
                    : e.stopPropagation();
                }),
                (t.prototype.OnClick = function () {}),
                (t.prototype.onTouchStart = function (e) {}),
                (t.prototype.onTouchMove = function (e) {}),
                (t.prototype.onTouchEnd = function (e) {}),
                (t.prototype.onTouchCancel = function (e) {}),
                (t = i([c], t))
              );
            })(cc.Component));
        (o.default = a), cc._RF.pop();
      },
      {},
    ],
    SingleTouchView: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "929e2ZM1FBKT4JnoVB3pxla", "SingleTouchView");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = e("./BaseView"),
          c = cc._decorator,
          a = c.ccclass,
          s =
            (c.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.touchid = null), t;
              }
              return (
                n(t, e),
                (t.prototype.onLoad = function () {
                  this.node.on(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.touchCancel,
                    this
                  ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_END,
                      this.touchEnd,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMove,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_START,
                      this.touchStart,
                      this
                    );
                }),
                (t.prototype.start = function () {}),
                (t.prototype.touchStart = function (e) {
                  null === this.touchid || this.touchid === e.getID()
                    ? ((this.touchid = e.getID()), this.onTouchStart(e))
                    : console.log(
                        this.node.name,
                        " touch start  touchid is different! "
                      );
                }),
                (t.prototype.touchMove = function (e) {
                  (null !== this.touchid && this.touchid !== e.getID()) ||
                    ((this.touchid = e.getID()), this.onTouchMove(e));
                }),
                (t.prototype.touchEnd = function (e) {
                  null === this.touchid || this.touchid === e.getID()
                    ? ((this.touchid = null), this.onTouchEnd(e))
                    : console.log(
                        this.node.name,
                        " touch end  touchid is different! "
                      );
                }),
                (t.prototype.touchCancel = function (e) {
                  null === this.touchid || this.touchid === e.getID()
                    ? ((this.touchid = null), this.onTouchCancel(e))
                    : console.log(
                        this.node.name,
                        " touch cancel  touchid is different! "
                      );
                }),
                (t.prototype.onTouchStart = function (e) {}),
                (t.prototype.onTouchMove = function (e) {}),
                (t.prototype.onTouchEnd = function (e) {}),
                (t.prototype.onTouchCancel = function (e) {}),
                (t = i([a], t))
              );
            })(r.default));
        (o.default = s), cc._RF.pop();
      },
      { "./BaseView": "BaseView" },
    ],
    Stop: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "8765cbDuHdBm6FKOUQ5ug79", "Stop");
        var n =
            (this && this.__extends) ||
            (function () {
              var e = function (t, o) {
                return (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                  })(t, o);
              };
              return function (t, o) {
                function n() {
                  this.constructor = t;
                }
                e(t, o),
                  (t.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (e, t, o, n) {
              var i,
                r = arguments.length,
                c =
                  r < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, o, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
              return r > 3 && c && Object.defineProperty(t, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var r = e("./controller/Game"),
          c = e("./controller/EventManager"),
          a = e("./controller/EventName"),
          s = e("./Guide"),
          l = cc._decorator,
          u = l.ccclass,
          p = l.property,
          d = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.EndButton = null),
                (t.ResumeButton = null),
                (t.Help = null),
                (t.Content = null),
                (t.TitleAtlas = null),
                (t.Title = null),
                (t.Guide = null),
                (t.Block = null),
                (t.DrawCardAni = null),
                (t.Warning = null),
                (t.effect = !1),
                t
              );
            }
            return (
              n(t, e),
              Object.defineProperty(t.prototype, "VolumeSlider", {
                get: function () {
                  return this.node
                    .getChildByName("VolumeSlider")
                    .getComponent(cc.Slider);
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
              Object.defineProperty(t.prototype, "WarningTitle", {
                get: function () {
                  return this.node
                    .getChildByName("bg_pause_font")
                    .getComponent(cc.Sprite);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.onLoad = function () {
                this.EndButton.node.on(
                  cc.Node.EventType.TOUCH_END,
                  this.endNow,
                  this
                ),
                  this.ResumeButton.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.Resume,
                    this
                  ),
                  this.Help.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.ShowHelp,
                    this
                  ),
                  this.VolumeSlider.node.on("slide", this.onSlider, this),
                  this.Content._enableBold(!0);
              }),
              (t.prototype.onSlider = function () {
                cc.audioEngine.setEffectsVolume(this.VolumeSlider.progress),
                  cc.audioEngine.setMusicVolume(this.VolumeSlider.progress),
                  this.updateMask();
              }),
              (t.prototype.endNow = function (e) {
                if (this.node.active)
                  return e.getUserData && "function" == typeof e.getUserData()
                    ? (e.getUserData()(), void this.hide(!1))
                    : void c.gEventMgr.emit(a.GlobalEvent.OPEN_RESULT);
              }),
              (t.prototype.hide = function (e) {
                void 0 === e && (e = !0),
                  0 != this.node.active &&
                    ((this.node.active = !1),
                    this.effect && c.gEventMgr.emit(a.GlobalEvent.NORMAL_BGM),
                    e && r.Game.PauseCount++,
                    r.Game.setPause(!1));
              }),
              (t.prototype.updateMask = function () {
                this.Mask.width = 440 * this.VolumeSlider.progress;
              }),
              (t.prototype.show = function (e, t, o) {
                if ((void 0 === o && (o = !0), !this.node.active)) {
                  switch (((this.node.active = !0), r.Game.PauseCount)) {
                    case 0:
                      this.WarningTitle.spriteFrame = this.Warning.getSpriteFrame(
                        "bg_pause_font2"
                      );
                      break;
                    case 1:
                      this.WarningTitle.spriteFrame = this.Warning.getSpriteFrame(
                        "bg_pause_font1"
                      );
                      break;
                    default:
                      this.WarningTitle.spriteFrame = this.Warning.getSpriteFrame(
                        "bg_pause_fontnone"
                      );
                  }
                  (this.effect = o),
                    this.effect &&
                      (c.gEventMgr.emit(a.GlobalEvent.PLAY_PAUSE),
                      c.gEventMgr.emit(a.GlobalEvent.SMALL_BGM)),
                    (this.VolumeSlider.progress = cc.audioEngine.getEffectsVolume()),
                    this.updateMask(),
                    (this.Block.active = !t),
                    (this.Guide.Corn.node.active = !1),
                    (this.DrawCardAni.node.active = t),
                    this.DrawCardAni.play(),
                    (this.VolumeSlider.node.active = e > 0),
                    e > 0
                      ? ((this.Content.node.y = -33),
                        (this.EndButton.node.active = !1),
                        (this.ResumeButton.node.x = 0),
                        (this.Content.string =
                          "The game has been paused, please resume."),
                        (this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame(
                          "bg_font06"
                        )))
                      : ((this.Content.node.y = 37),
                        (this.EndButton.node.active = !0),
                        (this.ResumeButton.node.x = -215),
                        (this.Content.string =
                          "Do you want to stop now with the current score?"),
                        (this.Title.spriteFrame = this.TitleAtlas.getSpriteFrame(
                          "bg_font01"
                        )));
                }
              }),
              (t.prototype.ShowHelp = function () {
                this.node.active && this.Guide.show(function () {});
              }),
              (t.prototype.Resume = function () {
                this.node.active && (this.hide(), r.Game.setPause(!1));
              }),
              (t.prototype.start = function () {}),
              i([p(cc.Button)], t.prototype, "EndButton", void 0),
              i([p(cc.Button)], t.prototype, "ResumeButton", void 0),
              i([p(cc.Button)], t.prototype, "Help", void 0),
              i([p(cc.Label)], t.prototype, "Content", void 0),
              i([p(cc.SpriteAtlas)], t.prototype, "TitleAtlas", void 0),
              i([p(cc.Sprite)], t.prototype, "Title", void 0),
              i([p(s.default)], t.prototype, "Guide", void 0),
              i([p(cc.Node)], t.prototype, "Block", void 0),
              i([p(cc.Animation)], t.prototype, "DrawCardAni", void 0),
              i([p(cc.SpriteAtlas)], t.prototype, "Warning", void 0),
              (t = i([u], t))
            );
          })(cc.Component);
        (o.default = d), cc._RF.pop();
      },
      {
        "./Guide": "Guide",
        "./controller/EventManager": "EventManager",
        "./controller/EventName": "EventName",
        "./controller/Game": "Game",
      },
    ],
    ToSingleton: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c3392vn5sJD6LvNjHOF0WpR", "ToSingleton"),
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
    Utils: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "33773l49FpHTp7fWn7/BMgK", "Utils"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var n = e("../Poker");
        o.disOrderArray = function (e) {
          for (var t, o = 0; o < e.length; ++o) {
            var n = i.randomFloorToInt(0, e.length);
            (t = [e[n], e[o]]), (e[o] = t[0]), (e[n] = t[1]);
          }
        };
        var i = (function () {
          function e() {}
          return (
            Object.defineProperty(e, "Seed", {
              get: function () {
                return this.randomSeed;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.seededRandom = function (e, t, o) {
              return (
                t +
                (((1e6 *
                  (((1711 * e + 88888) % 302654) / 302654 +
                    ((1722 * e + 55555) % 302665) / 302665 +
                    ((1755 * e + 23333) % 302766) / 302766)) %
                  1e6) /
                  1e6) *
                  (o - t)
              );
            }),
            (e.getRandom = function (e, t) {
              void 0 === e && (e = 0), void 0 === t && (t = 1);
              var o = this.randomSeed,
                n = this.seededRandom(o, e, t),
                i = Math.floor(this.seededRandom(o, 1, 302766));
              return (this.randomSeed += i), n;
            }),
            (e.setRandomSeed = function (e) {
              console.log(" set random seed:", e),
                (this.randomSeed = e),
                (this.sharedSeed = e);
            }),
            (e.randomRoundToInt = function (e, t) {
              return (
                void 0 === e && (e = 0),
                void 0 === t && (t = 1),
                Math.round(this.getRandom(e, t))
              );
            }),
            (e.randomFloorToInt = function (e, t) {
              return (
                void 0 === e && (e = 0),
                void 0 === t && (t = 1),
                Math.floor(this.getRandom(e, t))
              );
            }),
            (e.randomCeilToInt = function (e, t) {
              return (
                void 0 === e && (e = 0),
                void 0 === t && (t = 1),
                Math.ceil(this.getRandom(e, t))
              );
            }),
            (e.clamp = function (e, t, o) {
              return Math.max(t, Math.min(e, o));
            }),
            (e.randomSeed = Math.random()),
            (e.sharedSeed = Math.random()),
            e
          );
        })();
        o.Random = i;
        var r = [0, 7, 13, 18, 22, 25, 27],
          c = [49, 46, 43, 40, 37, 34, 31, 28];
        function a(e) {
          var t = e.split(",")[0];
          return "spade_" == t || "club_" == t
            ? n.PokerColor.Black
            : n.PokerColor.Red;
        }
        function s(e, t, o, n) {
          return 1 == e || 1 == t || (e - t == 1 && o != n);
        }
        (o.getType = function (e) {
          switch (e.split(",")[0]) {
            case "spade_":
              return n.PokerType.Spade;
            case "club_":
              return n.PokerType.Club;
            case "heart_":
              return n.PokerType.Heart;
            case "diamond_":
              return n.PokerType.Diamond;
          }
        }),
          (o.getColor = a),
          (o.checkCanMove = s),
          (o.checkIsNotZeroScore = function (e) {
            for (var t = !1, o = !1, n = 0; n < r.length; ++n)
              for (
                var i = e[r[n]],
                  l = parseInt(i.split(",")[1]),
                  u = a(i.split(",")[0]),
                  p = n + 1;
                p < r.length;
                ++p
              ) {
                var d = e[r[p]];
                if (
                  s(
                    l,
                    (h = parseInt(d.split(",")[1])),
                    u,
                    (f = a(d.split(",")[0]))
                  ) ||
                  s(h, l, u, f)
                ) {
                  t = !0;
                  break;
                }
              }
            for (n = 0; n < r.length; ++n)
              for (
                i = e[r[n]],
                  l = parseInt(i.split(",")[1]),
                  u = a(i.split(",")[0]),
                  p = 0;
                p < c.length;
                ++p
              ) {
                var h, f;
                if (
                  ((d = e[c[p]]),
                  s(
                    l,
                    (h = parseInt(d.split(",")[1])),
                    u,
                    (f = a(d.split(",")[0]))
                  ))
                ) {
                  o = !0;
                  break;
                }
              }
            return t || o;
          }),
          cc._RF.pop();
      },
      { "../Poker": "Poker" },
    ],
  },
  {},
  [
    "GameScene",
    "Guide",
    "Poker",
    "PokerRoot",
    "Pokers",
    "RecycleRoot",
    "Result",
    "ScoreLabel",
    "Stop",
    "BaseMediator",
    "BaseView",
    "GlobalSingleTouchMediator",
    "GlobalSingleTouchView",
    "SingleTouchMediator",
    "SingleTouchView",
    "AudioController",
    "EventManager",
    "EventName",
    "Game",
    "GameFactory",
    "HashMap",
    "LogHandler",
    "Signal",
    "ToSingleton",
    "Utils",
  ]
);
