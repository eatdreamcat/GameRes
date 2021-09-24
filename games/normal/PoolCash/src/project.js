System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///Common/ToSingleTon.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy;

  function SingleTon() {
    var ToSingleTon = /*#__PURE__*/function () {
      function ToSingleTon() {
        _classCallCheck(this, ToSingleTon);
      }

      _createClass(ToSingleTon, null, [{
        key: "inst",
        get: function get() {
          return this.ins ? this.ins : this.ins = new this();
        }
      }]);

      return ToSingleTon;
    }();

    return ToSingleTon;
  }

  _export("SingleTon", SingleTon);

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "63dff2MRHZF8qucsyunVOPG", "ToSingleTon", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/HashMap.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, _createForOfIteratorHelper, cclegacy, HashMap;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1ef5dw1pKtNYaEqYhYExFBI", "HashMap", undefined);
      /**
       * HashMap泛型实现
       */


      _export("HashMap", HashMap = /*#__PURE__*/function () {
        //存储列表
        function HashMap() {
          _classCallCheck(this, HashMap);

          this._list = new Array();
          this.clear();
        } //通过key获取索引


        _createClass(HashMap, [{
          key: "getIndexByKey",
          value: function getIndexByKey(key) {
            var count = this._list.length;

            for (var index = 0; index < count; index++) {
              var element = this._list[index];

              if (element.key == key) {
                return index;
              }
            }

            return -1;
          }
        }, {
          key: "keyOf",
          value: function keyOf(value) {
            var count = this._list.length;

            for (var index = 0; index < count; index++) {
              var element = this._list[index];

              if (element.value["hashKey"] && value["hashKey"] && element.value["hashKey"] === value["hashKey"] || element.value == value) {
                return element.key;
              }
            }

            return null;
          }
          /** 获取所有key */

        }, {
          key: "add",

          /**
           * 添加键值
           */
          value: function add(key, value) {
            var data = {
              key: key,
              value: value
            };
            var index = this.getIndexByKey(key);

            if (index != -1) {
              //已存在：刷新值
              this._list[index] = data;
            } else {
              //不存在：添加值
              this._list.push(data);
            }
          }
        }, {
          key: "remove",

          /**
           * 删除键值
           */
          value: function remove(key) {
            var index = this.getIndexByKey(key);

            if (index != -1) {
              var data = this._list[index];

              this._list.splice(index, 1);

              return data;
            }

            return null;
          }
          /**
           * 是否存在键
           */

        }, {
          key: "has",
          value: function has(key) {
            var index = this.getIndexByKey(key);
            return index != -1;
          }
          /**
           * 通过key获取键值value
           * @param key
           */

        }, {
          key: "get",
          value: function get(key) {
            var index = this.getIndexByKey(key);

            if (index != -1) {
              var data = this._list[index];
              return data.value;
            }

            return null;
          }
          /**
           * 获取数据个数
           */

        }, {
          key: "sort",

          /**
           * 排序
           * @param
           */
          value: function sort(compare) {
            this._list.sort(compare);
          }
          /**
           * 遍历列表，回调(data:KeyValue<K, V>)
           */

        }, {
          key: "forEachKeyValue",
          value: function forEachKeyValue(f) {
            var count = this._list.length;

            for (var index = 0; index < count; index++) {
              var element = this._list[index];
              f(element);
            }
          }
          /**
           * 遍历列表，回调(K,V)
           */

        }, {
          key: "forEach",
          value: function forEach(f) {
            var count = this._list.length;

            for (var index = 0; index < count; index++) {
              var element = this._list[index];
              f(element.key, element.value);
            }
          }
          /**
           * 清空全部
           */

        }, {
          key: "clear",
          value: function clear() {
            this._list = [];
          }
        }, {
          key: "keys",
          get: function get() {
            var keys = new Array();

            var _iterator = _createForOfIteratorHelper(this._list),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var element = _step.value;

                if (element) {
                  keys.push(element.key);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return keys;
          }
        }, {
          key: "values",
          get: function get() {
            return this._list;
          }
        }, {
          key: "length",
          get: function get() {
            return this._list.length;
          }
        }]);

        return HashMap;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Command/Notification.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, Notification;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f5488zT53NDy7p1Vf9k8sT8", "Notification", undefined);

      _export("Notification", Notification = /*#__PURE__*/function () {
        function Notification() {
          _classCallCheck(this, Notification);

          this.notification = {};
        }

        _createClass(Notification, [{
          key: "register",
          value: function register(notificationName, command) {
            if (this.notification[notificationName]) {
              console.error(notificationName, " is already exist.");
            }

            this.notification[notificationName] = new command();
          }
        }, {
          key: "sendNotification",
          value: function sendNotification(notificationName, body) {
            if (this.notification[notificationName]) {
              this.notification[notificationName].excute(body);
              this.notification[notificationName] = null;
            }
          }
        }]);

        return Notification;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameRule.js", ["cc"], function (_export, _context) {
  "use strict";

  var cclegacy, Theme, ScoreType, HoleBonus;

  function RandomTheme() {
    return null;
  }

  function GetTotalTime() {
    return CC_DEBUG ? 60 * 3 : 60 * 3;
  }
  /** 免费暂停次数 */


  function GetFreePauseCount() {
    return 3;
  }

  function GetScoreByType(scoreType) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var score = 0;

    switch (scoreType) {
      case ScoreType.PauseCost:
        score = 100;
        break;

      case ScoreType.Pocket:
        score = count;
        break;

      case ScoreType.Rebound:
        score = 75;
        break;

      case ScoreType.Multip:
        if (count <= 1) score = 0;else {
          score = 50 + 50 * (count - 1);
        }
        break;

      case ScoreType.Link:
        score = 75;
        break;

      case ScoreType.HeartBonus:
        score = 20 * count;
        break;

      case ScoreType.NoBust:
        score = 100;
        break;

      default:
        break;
    }

    return score * GetScoreRatio();
  }

  function GetScoreRatio() {
    return 1;
  }

  function EasyMode() {
    return true;
  }

  function GetTotalHeartCount() {
    return CC_DEBUG ? 40 : 4;
  }

  function StreakBonusLimit() {
    return CC_DEBUG ? 1 : 3;
  }

  _export({
    EasyMode: EasyMode,
    GetFreePauseCount: GetFreePauseCount,
    GetScoreByType: GetScoreByType,
    GetScoreRatio: GetScoreRatio,
    GetTotalHeartCount: GetTotalHeartCount,
    GetTotalTime: GetTotalTime,
    RandomTheme: RandomTheme,
    StreakBonusLimit: StreakBonusLimit,
    Theme: void 0,
    ScoreType: void 0,
    HoleBonus: void 0
  });

  return {
    setters: [function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9007elfmZdNrKffJiRadvPn", "GameRule", undefined);

      /** 得分类型 */
      (function (Theme) {
        Theme[Theme["Green"] = 0] = "Green";
        Theme[Theme["Blue"] = 1] = "Blue";
        Theme[Theme["Red"] = 2] = "Red";
        Theme[Theme["Purple"] = 3] = "Purple";
      })(Theme || _export("Theme", Theme = {}));

      (function (ScoreType) {
        ScoreType[ScoreType["PauseCost"] = 0] = "PauseCost";
        ScoreType[ScoreType["Pocket"] = 1] = "Pocket";
        ScoreType[ScoreType["Rebound"] = 2] = "Rebound";
        ScoreType[ScoreType["Multip"] = 3] = "Multip";
        ScoreType[ScoreType["Link"] = 4] = "Link";
        ScoreType[ScoreType["HeartBonus"] = 5] = "HeartBonus";
        ScoreType[ScoreType["NoBust"] = 6] = "NoBust";
      })(ScoreType || _export("ScoreType", ScoreType = {}));

      (function (HoleBonus) {
        HoleBonus[HoleBonus["x2"] = 2] = "x2";
        HoleBonus[HoleBonus["x3"] = 3] = "x3";
        HoleBonus[HoleBonus["x4"] = 4] = "x4";
        HoleBonus[HoleBonus["x6"] = 6] = "x6";
        HoleBonus[HoleBonus["x8"] = 8] = "x8";
        HoleBonus[HoleBonus["x10"] = 10] = "x10";
      })(HoleBonus || _export("HoleBonus", HoleBonus = {}));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/Signal.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "./ToSingleTon.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, cclegacy, SingleTon, BaseSignal;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_ToSingleTonJs) {
      SingleTon = _ToSingleTonJs.SingleTon;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1c0c4SIiTBHObK+m4/fv7/j", "Signal", undefined);

      _export("BaseSignal", BaseSignal = /*#__PURE__*/function (_SingleTon) {
        _inherits(BaseSignal, _SingleTon);

        function BaseSignal() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BaseSignal);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseSignal)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.listenerMap = [];
          _this.onceListenerMap = [];
          return _this;
        }

        _createClass(BaseSignal, [{
          key: "doDispatch",
          value: function doDispatch() {
            this.excuteListener.apply(this, arguments);
            this.excuteOnce.apply(this, arguments);
          }
        }, {
          key: "excuteListener",
          value: function excuteListener() {
            if (this.listenerMap && this.listenerMap.length > 0) {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var _iterator = _createForOfIteratorHelper(this.listenerMap),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var listener = _step.value;
                  listener.callback.apply(listener.target, args);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }, {
          key: "excuteOnce",
          value: function excuteOnce() {
            if (this.onceListenerMap && this.onceListenerMap.length > 0) {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              var _iterator2 = _createForOfIteratorHelper(this.onceListenerMap),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var listener = _step2.value;
                  listener.callback.apply(listener.target, args);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.onceListenerMap.length = 0;
            }
          }
        }, {
          key: "listen",
          value: function listen(callback, target) {
            this.listenerMap.push({
              callback: callback,
              target: target
            });
          }
        }, {
          key: "listenOnce",
          value: function listenOnce(callback, target) {
            this.onceListenerMap.push({
              callback: callback,
              target: target
            });
          }
        }, {
          key: "removeListener",
          value: function removeListener(callback, target) {
            if (this.listenerMap && this.listenerMap.length > 0) {
              for (var i = 0; i < this.listenerMap.length; ++i) {
                var listener = this.listenerMap[i];

                if (listener.callback == callback && listener.target == target) {
                  this.listenerMap.splice(i, 1);
                  --i;
                }
              }
            }
          }
        }, {
          key: "removeTarget",
          value: function removeTarget(target) {
            if (this.listenerMap && this.listenerMap.length > 0) {
              for (var i = 0; i < this.listenerMap.length; ++i) {
                var listener = this.listenerMap[i];

                if (listener.target == target) {
                  this.listenerMap.splice(i, 1);
                  --i;
                }
              }
            }
          }
        }, {
          key: "dispatch",
          value: function dispatch(val1, val2, val3, val4, val5) {
            this.doDispatch(val1, val2, val3, val4, val5);
          }
        }, {
          key: "addListener",
          value: function addListener(callback, target) {
            this.listen(callback, target);
          }
        }, {
          key: "addOnce",
          value: function addOnce(callback, target) {
            this.listenOnce(callback, target);
          }
        }]);

        return BaseSignal;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Signal/Signal.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/Signal.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, BaseSignal, HideWildAdButtonSignal, RemoveFlyCnicornSignal, ShowFlyCnicornSignal, CnicornWatchFailSignal, FlyCnicornAdDispearSignal, FlyCnicornClickSignal, GameOverSignal, GamePauseSignal, ShowPauseLayerSignal, TimeAnimationStateChanged, ShowHelpLayerSignal, HideHelpLayerSignal, ButtonClickSignal, ShowTutorialSignal, ShowTipSignal, UpdateTimeNumber, StartCountSignal, ScoreCountingSignal, ShowSubmitSignal, OpenResultLayerSignal, PlayerScoreChanged, NextLevelSignal, CountDownSignal, GameThemeInit, UpdateInitLoadingSignal, GamePrepareSignal, GameReadySignal, GameStartSignal, WildButtonReadySignal, EndNowSignal, SoundStateChangedSignal, PLayerScoreInitSignal, MenuButtonClickSignal, WildAdAnimationIsPlaySignal, WildAdButtonClick, AdFinishSignal, ShotSignal;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ca846PrBlhEL7Q80ylNGl26", "Signal", undefined);
      /** 隐藏广告按钮 */


      _export("HideWildAdButtonSignal", HideWildAdButtonSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(HideWildAdButtonSignal, _BaseSignal);

        function HideWildAdButtonSignal() {
          _classCallCheck(this, HideWildAdButtonSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(HideWildAdButtonSignal).apply(this, arguments));
        }

        return HideWildAdButtonSignal;
      }(BaseSignal));
      /** 隐藏小马广告 */


      _export("RemoveFlyCnicornSignal", RemoveFlyCnicornSignal = /*#__PURE__*/function (_BaseSignal2) {
        _inherits(RemoveFlyCnicornSignal, _BaseSignal2);

        function RemoveFlyCnicornSignal() {
          _classCallCheck(this, RemoveFlyCnicornSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(RemoveFlyCnicornSignal).apply(this, arguments));
        }

        return RemoveFlyCnicornSignal;
      }(BaseSignal));
      /** 显示小马广告 */


      _export("ShowFlyCnicornSignal", ShowFlyCnicornSignal = /*#__PURE__*/function (_BaseSignal3) {
        _inherits(ShowFlyCnicornSignal, _BaseSignal3);

        function ShowFlyCnicornSignal() {
          _classCallCheck(this, ShowFlyCnicornSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ShowFlyCnicornSignal).apply(this, arguments));
        }

        return ShowFlyCnicornSignal;
      }(BaseSignal));
      /** 小马广告观看失败 */


      _export("CnicornWatchFailSignal", CnicornWatchFailSignal = /*#__PURE__*/function (_BaseSignal4) {
        _inherits(CnicornWatchFailSignal, _BaseSignal4);

        function CnicornWatchFailSignal() {
          _classCallCheck(this, CnicornWatchFailSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(CnicornWatchFailSignal).apply(this, arguments));
        }

        return CnicornWatchFailSignal;
      }(BaseSignal));
      /** 小马广告消失 */


      _export("FlyCnicornAdDispearSignal", FlyCnicornAdDispearSignal = /*#__PURE__*/function (_BaseSignal5) {
        _inherits(FlyCnicornAdDispearSignal, _BaseSignal5);

        function FlyCnicornAdDispearSignal() {
          _classCallCheck(this, FlyCnicornAdDispearSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(FlyCnicornAdDispearSignal).apply(this, arguments));
        }

        return FlyCnicornAdDispearSignal;
      }(BaseSignal));
      /** 小马广告点击 */


      _export("FlyCnicornClickSignal", FlyCnicornClickSignal = /*#__PURE__*/function (_BaseSignal6) {
        _inherits(FlyCnicornClickSignal, _BaseSignal6);

        function FlyCnicornClickSignal() {
          _classCallCheck(this, FlyCnicornClickSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(FlyCnicornClickSignal).apply(this, arguments));
        }

        return FlyCnicornClickSignal;
      }(BaseSignal));
      /** 游戏结束 */


      _export("GameOverSignal", GameOverSignal = /*#__PURE__*/function (_BaseSignal7) {
        _inherits(GameOverSignal, _BaseSignal7);

        function GameOverSignal() {
          _classCallCheck(this, GameOverSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(GameOverSignal).apply(this, arguments));
        }

        return GameOverSignal;
      }(BaseSignal));
      /** 游戏暂停 */


      _export("GamePauseSignal", GamePauseSignal = /*#__PURE__*/function (_BaseSignal8) {
        _inherits(GamePauseSignal, _BaseSignal8);

        function GamePauseSignal() {
          _classCallCheck(this, GamePauseSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(GamePauseSignal).apply(this, arguments));
        }

        return GamePauseSignal;
      }(BaseSignal));
      /** 显示暂停界面 */


      _export("ShowPauseLayerSignal", ShowPauseLayerSignal = /*#__PURE__*/function (_BaseSignal9) {
        _inherits(ShowPauseLayerSignal, _BaseSignal9);

        function ShowPauseLayerSignal() {
          _classCallCheck(this, ShowPauseLayerSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ShowPauseLayerSignal).apply(this, arguments));
        }

        return ShowPauseLayerSignal;
      }(BaseSignal));
      /** 时间动画 */


      _export("TimeAnimationStateChanged", TimeAnimationStateChanged = /*#__PURE__*/function (_BaseSignal10) {
        _inherits(TimeAnimationStateChanged, _BaseSignal10);

        function TimeAnimationStateChanged() {
          _classCallCheck(this, TimeAnimationStateChanged);

          return _possibleConstructorReturn(this, _getPrototypeOf(TimeAnimationStateChanged).apply(this, arguments));
        }

        return TimeAnimationStateChanged;
      }(BaseSignal));
      /** 显示帮助界面 */


      _export("ShowHelpLayerSignal", ShowHelpLayerSignal = /*#__PURE__*/function (_BaseSignal11) {
        _inherits(ShowHelpLayerSignal, _BaseSignal11);

        function ShowHelpLayerSignal() {
          _classCallCheck(this, ShowHelpLayerSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ShowHelpLayerSignal).apply(this, arguments));
        }

        return ShowHelpLayerSignal;
      }(BaseSignal));
      /** 隐藏帮助界面 */


      _export("HideHelpLayerSignal", HideHelpLayerSignal = /*#__PURE__*/function (_BaseSignal12) {
        _inherits(HideHelpLayerSignal, _BaseSignal12);

        function HideHelpLayerSignal() {
          _classCallCheck(this, HideHelpLayerSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(HideHelpLayerSignal).apply(this, arguments));
        }

        return HideHelpLayerSignal;
      }(BaseSignal));
      /** 按钮点击 */


      _export("ButtonClickSignal", ButtonClickSignal = /*#__PURE__*/function (_BaseSignal13) {
        _inherits(ButtonClickSignal, _BaseSignal13);

        function ButtonClickSignal() {
          _classCallCheck(this, ButtonClickSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ButtonClickSignal).apply(this, arguments));
        }

        return ButtonClickSignal;
      }(BaseSignal));
      /** 显示新手引导 */


      _export("ShowTutorialSignal", ShowTutorialSignal = /*#__PURE__*/function (_BaseSignal14) {
        _inherits(ShowTutorialSignal, _BaseSignal14);

        function ShowTutorialSignal() {
          _classCallCheck(this, ShowTutorialSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ShowTutorialSignal).apply(this, arguments));
        }

        return ShowTutorialSignal;
      }(BaseSignal));
      /** 显示tip */


      _export("ShowTipSignal", ShowTipSignal = /*#__PURE__*/function (_BaseSignal15) {
        _inherits(ShowTipSignal, _BaseSignal15);

        function ShowTipSignal() {
          _classCallCheck(this, ShowTipSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ShowTipSignal).apply(this, arguments));
        }

        return ShowTipSignal;
      }(BaseSignal));
      /** 更新时间 */


      _export("UpdateTimeNumber", UpdateTimeNumber = /*#__PURE__*/function (_BaseSignal16) {
        _inherits(UpdateTimeNumber, _BaseSignal16);

        function UpdateTimeNumber() {
          _classCallCheck(this, UpdateTimeNumber);

          return _possibleConstructorReturn(this, _getPrototypeOf(UpdateTimeNumber).apply(this, arguments));
        }

        return UpdateTimeNumber;
      }(BaseSignal));
      /** 开始计时 */


      _export("StartCountSignal", StartCountSignal = /*#__PURE__*/function (_BaseSignal17) {
        _inherits(StartCountSignal, _BaseSignal17);

        function StartCountSignal() {
          _classCallCheck(this, StartCountSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(StartCountSignal).apply(this, arguments));
        }

        return StartCountSignal;
      }(BaseSignal));
      /** 分数跳动 */


      _export("ScoreCountingSignal", ScoreCountingSignal = /*#__PURE__*/function (_BaseSignal18) {
        _inherits(ScoreCountingSignal, _BaseSignal18);

        function ScoreCountingSignal() {
          _classCallCheck(this, ScoreCountingSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ScoreCountingSignal).apply(this, arguments));
        }

        return ScoreCountingSignal;
      }(BaseSignal));
      /** 显示提交按钮 */


      _export("ShowSubmitSignal", ShowSubmitSignal = /*#__PURE__*/function (_BaseSignal19) {
        _inherits(ShowSubmitSignal, _BaseSignal19);

        function ShowSubmitSignal() {
          _classCallCheck(this, ShowSubmitSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ShowSubmitSignal).apply(this, arguments));
        }

        return ShowSubmitSignal;
      }(BaseSignal));
      /** 打开结算界面 */


      _export("OpenResultLayerSignal", OpenResultLayerSignal = /*#__PURE__*/function (_BaseSignal20) {
        _inherits(OpenResultLayerSignal, _BaseSignal20);

        function OpenResultLayerSignal() {
          _classCallCheck(this, OpenResultLayerSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(OpenResultLayerSignal).apply(this, arguments));
        }

        return OpenResultLayerSignal;
      }(BaseSignal));
      /** 玩家分数变化 */


      _export("PlayerScoreChanged", PlayerScoreChanged = /*#__PURE__*/function (_BaseSignal21) {
        _inherits(PlayerScoreChanged, _BaseSignal21);

        function PlayerScoreChanged() {
          _classCallCheck(this, PlayerScoreChanged);

          return _possibleConstructorReturn(this, _getPrototypeOf(PlayerScoreChanged).apply(this, arguments));
        }

        return PlayerScoreChanged;
      }(BaseSignal));
      /** 下一关 */


      _export("NextLevelSignal", NextLevelSignal = /*#__PURE__*/function (_BaseSignal22) {
        _inherits(NextLevelSignal, _BaseSignal22);

        function NextLevelSignal() {
          _classCallCheck(this, NextLevelSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(NextLevelSignal).apply(this, arguments));
        }

        return NextLevelSignal;
      }(BaseSignal));
      /** 倒计时 */


      _export("CountDownSignal", CountDownSignal = /*#__PURE__*/function (_BaseSignal23) {
        _inherits(CountDownSignal, _BaseSignal23);

        function CountDownSignal() {
          _classCallCheck(this, CountDownSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(CountDownSignal).apply(this, arguments));
        }

        return CountDownSignal;
      }(BaseSignal));
      /** 游戏主题初始化 */


      _export("GameThemeInit", GameThemeInit = /*#__PURE__*/function (_BaseSignal24) {
        _inherits(GameThemeInit, _BaseSignal24);

        function GameThemeInit() {
          _classCallCheck(this, GameThemeInit);

          return _possibleConstructorReturn(this, _getPrototypeOf(GameThemeInit).apply(this, arguments));
        }

        return GameThemeInit;
      }(BaseSignal));
      /** 更新加载进度 */


      _export("UpdateInitLoadingSignal", UpdateInitLoadingSignal = /*#__PURE__*/function (_BaseSignal25) {
        _inherits(UpdateInitLoadingSignal, _BaseSignal25);

        function UpdateInitLoadingSignal() {
          _classCallCheck(this, UpdateInitLoadingSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(UpdateInitLoadingSignal).apply(this, arguments));
        }

        return UpdateInitLoadingSignal;
      }(BaseSignal));
      /** 游戏开始准备完毕 */


      _export("GamePrepareSignal", GamePrepareSignal = /*#__PURE__*/function (_BaseSignal26) {
        _inherits(GamePrepareSignal, _BaseSignal26);

        function GamePrepareSignal() {
          _classCallCheck(this, GamePrepareSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(GamePrepareSignal).apply(this, arguments));
        }

        return GamePrepareSignal;
      }(BaseSignal));
      /** 游戏准备完毕 */


      _export("GameReadySignal", GameReadySignal = /*#__PURE__*/function (_BaseSignal27) {
        _inherits(GameReadySignal, _BaseSignal27);

        function GameReadySignal() {
          _classCallCheck(this, GameReadySignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(GameReadySignal).apply(this, arguments));
        }

        return GameReadySignal;
      }(BaseSignal));
      /** 游戏开始 */


      _export("GameStartSignal", GameStartSignal = /*#__PURE__*/function (_BaseSignal28) {
        _inherits(GameStartSignal, _BaseSignal28);

        function GameStartSignal() {
          _classCallCheck(this, GameStartSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(GameStartSignal).apply(this, arguments));
        }

        return GameStartSignal;
      }(BaseSignal));
      /** 广告按钮准备 */


      _export("WildButtonReadySignal", WildButtonReadySignal = /*#__PURE__*/function (_BaseSignal29) {
        _inherits(WildButtonReadySignal, _BaseSignal29);

        function WildButtonReadySignal() {
          _classCallCheck(this, WildButtonReadySignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(WildButtonReadySignal).apply(this, arguments));
        }

        return WildButtonReadySignal;
      }(BaseSignal));
      /** 玩家手动结算 */


      _export("EndNowSignal", EndNowSignal = /*#__PURE__*/function (_BaseSignal30) {
        _inherits(EndNowSignal, _BaseSignal30);

        function EndNowSignal() {
          _classCallCheck(this, EndNowSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(EndNowSignal).apply(this, arguments));
        }

        return EndNowSignal;
      }(BaseSignal));
      /** 音乐按钮 */


      _export("SoundStateChangedSignal", SoundStateChangedSignal = /*#__PURE__*/function (_BaseSignal31) {
        _inherits(SoundStateChangedSignal, _BaseSignal31);

        function SoundStateChangedSignal() {
          _classCallCheck(this, SoundStateChangedSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(SoundStateChangedSignal).apply(this, arguments));
        }

        return SoundStateChangedSignal;
      }(BaseSignal));
      /** 分数初始化 */


      _export("PLayerScoreInitSignal", PLayerScoreInitSignal = /*#__PURE__*/function (_BaseSignal32) {
        _inherits(PLayerScoreInitSignal, _BaseSignal32);

        function PLayerScoreInitSignal() {
          _classCallCheck(this, PLayerScoreInitSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(PLayerScoreInitSignal).apply(this, arguments));
        }

        return PLayerScoreInitSignal;
      }(BaseSignal));
      /** 菜单按钮点击 */


      _export("MenuButtonClickSignal", MenuButtonClickSignal = /*#__PURE__*/function (_BaseSignal33) {
        _inherits(MenuButtonClickSignal, _BaseSignal33);

        function MenuButtonClickSignal() {
          _classCallCheck(this, MenuButtonClickSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(MenuButtonClickSignal).apply(this, arguments));
        }

        return MenuButtonClickSignal;
      }(BaseSignal));
      /** 广告按钮动画 */


      _export("WildAdAnimationIsPlaySignal", WildAdAnimationIsPlaySignal = /*#__PURE__*/function (_BaseSignal34) {
        _inherits(WildAdAnimationIsPlaySignal, _BaseSignal34);

        function WildAdAnimationIsPlaySignal() {
          _classCallCheck(this, WildAdAnimationIsPlaySignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(WildAdAnimationIsPlaySignal).apply(this, arguments));
        }

        return WildAdAnimationIsPlaySignal;
      }(BaseSignal));
      /** 固定位广告按钮点击 */


      _export("WildAdButtonClick", WildAdButtonClick = /*#__PURE__*/function (_BaseSignal35) {
        _inherits(WildAdButtonClick, _BaseSignal35);

        function WildAdButtonClick() {
          _classCallCheck(this, WildAdButtonClick);

          return _possibleConstructorReturn(this, _getPrototypeOf(WildAdButtonClick).apply(this, arguments));
        }

        return WildAdButtonClick;
      }(BaseSignal));
      /** 看广告结束 */


      _export("AdFinishSignal", AdFinishSignal = /*#__PURE__*/function (_BaseSignal36) {
        _inherits(AdFinishSignal, _BaseSignal36);

        function AdFinishSignal() {
          _classCallCheck(this, AdFinishSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(AdFinishSignal).apply(this, arguments));
        }

        return AdFinishSignal;
      }(BaseSignal));

      _export("ShotSignal", ShotSignal = /*#__PURE__*/function (_BaseSignal37) {
        _inherits(ShotSignal, _BaseSignal37);

        function ShotSignal() {
          _classCallCheck(this, ShotSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ShotSignal).apply(this, arguments));
        }

        return ShotSignal;
      }(BaseSignal));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Ad/FlyCnicornAd.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Signal/Signal.js", "../Common/SDK/CelerSDK.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, v3, Node, tween, UIOpacity, Component, FlyCnicornAdDispearSignal, RemoveFlyCnicornSignal, ShowFlyCnicornSignal, CnicornWatchFailSignal, FlyCnicornClickSignal, CelerSDK, _dec, _class, _class2, _temp, ccclass, property, FlyOrigin, FlyCnicornAd;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0,
    FlyOrigin: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Component = _cc.Component;
    }, function (_SignalSignalJs) {
      FlyCnicornAdDispearSignal = _SignalSignalJs.FlyCnicornAdDispearSignal;
      RemoveFlyCnicornSignal = _SignalSignalJs.RemoveFlyCnicornSignal;
      ShowFlyCnicornSignal = _SignalSignalJs.ShowFlyCnicornSignal;
      CnicornWatchFailSignal = _SignalSignalJs.CnicornWatchFailSignal;
      FlyCnicornClickSignal = _SignalSignalJs.FlyCnicornClickSignal;
    }, function (_CommonSDKCelerSDKJs) {
      CelerSDK = _CommonSDKCelerSDKJs.CelerSDK;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f4b67491ARI8KUrshxReKDI", "FlyCnicornAd", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (FlyOrigin) {
        FlyOrigin[FlyOrigin["Left"] = 0] = "Left";
        FlyOrigin[FlyOrigin["Right"] = 1] = "Right";
      })(FlyOrigin || _export("FlyOrigin", FlyOrigin = {}));

      _export("FlyCnicornAd", FlyCnicornAd = (_dec = ccclass("FlyCnicornAd"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inherits(FlyCnicornAd, _Component);

        function FlyCnicornAd() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, FlyCnicornAd);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FlyCnicornAd)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.flyopacity = null;
          _this.uiopacity = null;
          _this.initY = 0;
          _this.tween = null;
          return _this;
        }

        _createClass(FlyCnicornAd, [{
          key: "reuse",
          value: function reuse(origin, y) {
            var _this2 = this;

            console.log("ShowFlyCnicorn:", FlyOrigin[origin]);
            this.UIOPacity.opacity = 255;
            this.flyopacity.opacity = 255;
            this.Fly.setPosition(this.Fly.position.x, y, this.Fly.position.z);
            origin = FlyOrigin.Right;
            this.Fly.setScale(-1, 1, 1);
            this.Fly.setPosition(940, this.Fly.position.y, this.Fly.position.z);
            var target = v3(-940, this.Fly.position.y, this.Fly.position.z);
            this.Fly.once(Node.EventType.TOUCH_END, this.onAddTouch, this);
            this.tween = tween(this.Fly).sequence(tween(this.Fly).to(10, {
              position: target
            }), tween(this.Fly).parallel(tween(this.FlyOpacity).to(2, {
              opacity: 0
            }), tween(this.Fly).by(2, {
              position: v3(940 * 2 / 10 * 2 * this.Fly.scale.x, 0, 0)
            })), tween(this).call(function () {
              FlyCnicornAdDispearSignal.inst.dispatch();
              FlyCnicornAd.ShowTimeRest = 10;
              _this2.tween = null;
            }));
            this.tween.start();
          }
        }, {
          key: "unuse",
          value: function unuse() {}
        }, {
          key: "onLoad",
          value: function onLoad() {
            var _this3 = this;

            this.initY = this.Fly.position.y;
            RemoveFlyCnicornSignal.inst.addOnce(function () {
              ShowFlyCnicornSignal.inst.removeTarget(_this3);
              CnicornWatchFailSignal.inst.removeTarget(_this3);

              _this3.node.removeFromParent();

              _this3.node.destroy();
            }, this);
            CnicornWatchFailSignal.inst.addListener(function () {
              FlyCnicornAd.ShowTimeRest = 10;
            }, this);
            FlyCnicornAd.ShowTimeRest = 10;
            ShowFlyCnicornSignal.inst.addListener(function (origin, originY) {
              console.log(" Show Cnicorn");
              if (_this3.tween) return;

              _this3.reuse(FlyOrigin.Right, _this3.initY);
            }, this);

            if (CelerSDK.inst.isAndroidWeb == false && !CC_DEBUG) {
              RemoveFlyCnicornSignal.inst.dispatch();
            }
          }
        }, {
          key: "onAddTouch",
          value: function onAddTouch(ev) {
            if (this.tween) {
              this.tween.stop();
            }

            tween(this.FlyOpacity).to(0.2, {
              opacity: 0
            }).start();
            FlyCnicornClickSignal.inst.dispatch();
          }
        }, {
          key: "update",
          value: function update(dt) {}
        }, {
          key: "Fly",
          get: function get() {
            return this.node.getChildByName("Fly");
          }
        }, {
          key: "FlyOpacity",
          get: function get() {
            if (this.flyopacity == null) {
              this.flyopacity = this.Fly.addComponent(UIOpacity);
            }

            return this.flyopacity;
          }
        }, {
          key: "UIOPacity",
          get: function get() {
            if (this.uiopacity == null) {
              this.uiopacity = this.addComponent(UIOpacity);
            }

            return this.uiopacity;
          }
        }]);

        return FlyCnicornAd;
      }(Component), _class2.ShowTimeRest = 0, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/Random.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "./Signal.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, BaseSignal, RandomSeedInitSignal, Random;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_SignalJs) {
      BaseSignal = _SignalJs.BaseSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fbf05AoIXRKC62yFwJuATpS", "Random", undefined);

      _export("RandomSeedInitSignal", RandomSeedInitSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(RandomSeedInitSignal, _BaseSignal);

        function RandomSeedInitSignal() {
          _classCallCheck(this, RandomSeedInitSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(RandomSeedInitSignal).apply(this, arguments));
        }

        return RandomSeedInitSignal;
      }(BaseSignal));

      _export("Random", Random = /*#__PURE__*/function () {
        function Random() {
          _classCallCheck(this, Random);
        }

        _createClass(Random, null, [{
          key: "seededRandom",
          value: function seededRandom(seed, min, max) {
            var seed1 = (1711 * seed + 88888) % 302654;
            var seed2 = (1722 * seed + 55555) % 302665;
            var seed3 = (1755 * seed + 23333) % 302766;
            var rand = (seed1 / 302654 + seed2 / 302665 + seed3 / 302766) * 1000000 % 1000000 / 1000000;
            return min + rand * (max - min);
          }
        }, {
          key: "getRandom",
          value: function getRandom() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var seed = this.randomSeed;
            var result = this.seededRandom(seed, min, max);
            var step = Math.floor(this.seededRandom(seed, 1, 302766));
            this.randomSeed += step;
            return result;
          }
        }, {
          key: "setRandomSeed",
          value: function setRandomSeed(seed) {
            console.log(" set random seed:", seed); // if (CELER_X) {
            //   Math.random = this.getRandom.bind(this);
            // }

            this.randomSeed = seed;
            this.sharedSeed = seed;
            RandomSeedInitSignal.inst.dispatch(seed);
          }
        }, {
          key: "randomRoundToInt",
          value: function randomRoundToInt() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            return Math.round(this.getRandom(min, max));
          }
        }, {
          key: "randomFloorToInt",
          value: function randomFloorToInt() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var val = this.getRandom(min, max);
            return val > 0 ? Math.floor(val) : Math.ceil(val);
          }
        }, {
          key: "randomCeilToInt",
          value: function randomCeilToInt() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var val = this.getRandom(min, max);
            return val > 0 ? Math.ceil(val) : Math.floor(val);
          }
        }, {
          key: "clamp",
          value: function clamp(val, min, max) {
            return Math.max(min, Math.min(val, max));
          }
        }]);

        return Random;
      }());

      Random.randomSeed = Math.random();
      Random.sharedSeed = Math.random();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/Cocos.js", ["cc", "./Random.js"], function (_export, _context) {
  "use strict";

  var cclegacy, v3, v2, math, Random;

  /**
   * 转换节点坐标系
   * @param node 转换的节点
   * @param spaceNode 目标坐标系节点
   */
  function ConvertToNodeSpaceAR(node, spaceNode) {
    var out = v3();
    var world = v3();
    node.getWorldPosition(world);
    spaceNode.inverseTransformPoint(out, world);
    return out;
  }
  /**
   * 计算两个坐标的距离
   * @param p1
   * @param p2
   */


  function Distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) + (p1.z - p2.z) * (p1.z - p2.z));
  }
  /**
   * 计算两个rect交叉的面积
   */


  function AreaOf2CrossRect(rect1, rect2) {
    var a_min_x = rect1.x;
    var a_min_y = rect1.y;
    var a_max_x = rect1.x + rect1.width;
    var a_max_y = rect1.y + rect1.height;
    var b_min_x = rect2.x;
    var b_min_y = rect2.y;
    var b_max_x = rect2.x + rect2.width;
    var b_max_y = rect2.y + rect2.height;
    var width = 0,
        height = 0;
    width = Math.max(0, Math.min(a_max_x, b_max_x) - Math.max(a_min_x, b_min_x));
    height = Math.max(0, Math.min(a_max_y, b_max_y) - Math.max(a_min_y, b_min_y));
    return width * height;
  }
  /**
   * 数组乱序
   */


  function disOrderArray(array) {
    for (var i = 0; i < array.length; ++i) {
      var index = Random.randomFloorToInt(0, array.length);
      var _ref = [array[index], array[i]];
      array[i] = _ref[0];
      array[index] = _ref[1];
    }
  }

  function Clamp(val, max, min) {
    return Math.max(Math.min(val, max), min);
  }

  function IndexToi(index, modSize) {
    return Math.floor(index / modSize);
  }

  function IndexToj(index, modSize) {
    return index % modSize;
  }
  /** 获取对应像素位置的rgb */


  function GetPixels(xInView, yInView) {
    throw new Error("GetPixels");
  }
  /**
   * 获取旋转后的坐标点
   * @param point
   * @param angle
   * @param center
   * @param isFollowClock
   */


  function RotatePoint(point, angle) {
    var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : v2(0, 0);
    var isFollowClock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var direction = isFollowClock ? -1 : 1;
    var rad = angle / 180 * Math.PI;
    var p = v2(point.x, point.y);
    point.x = (p.x - center.x) * Math.cos(direction * rad) - (p.y - center.y) * Math.sin(direction * rad) + center.x;
    point.y = (p.x - center.x) * Math.sin(direction * rad) + (p.y - center.y) * Math.cos(direction * rad) + center.y;
  }
  /** a-b减掉矩形 */


  function RectSub(a, rectB) {
    var ax = a.x,
        ay = a.y,
        aw = a.width,
        ah = a.height;
    var bx = rectB.x,
        by = rectB.y,
        bw = rectB.width,
        bh = rectB.height;
    a.x = ax;
    a.y = ay + bh;
    a.height = Math.abs(ah - bh);
    return a;
  }
  /** 近似相等 */


  function Approx(a, b) {
    var maxDiff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.000001;
    return Math.abs(a - b) <= maxDiff;
  }
  /**
   * 计算两条线段的交点
   * @param a1
   * @param a2
   * @param b1
   * @param b2
   * @param out
   * @returns
   */


  function segementIntersection(a, b, c, d) {
    /** 1 解线性方程组, 求线段交点. **/
    // 如果分母为0 则平行或共线, 不相交
    var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y);

    if (math.approx(denominator, 0, 0.001)) {
      return null;
    } // 线段所在直线的交点坐标 (x , y)


    var x = ((b.x - a.x) * (d.x - c.x) * (c.y - a.y) + (b.y - a.y) * (d.x - c.x) * a.x - (d.y - c.y) * (b.x - a.x) * c.x) / denominator;
    var y = -((b.y - a.y) * (d.y - c.y) * (c.x - a.x) + (b.x - a.x) * (d.y - c.y) * a.y - (d.x - c.x) * (b.y - a.y) * c.y) / denominator;
    /** 2 判断交点是否在两条线段上 **/

    if ( // 交点在线段1上
    (x - a.x) * (x - b.x) <= 0 && (y - a.y) * (y - b.y) <= 0 && // 且交点也在线段2上
    (x - c.x) * (x - d.x) <= 0 && (y - c.y) * (y - d.y) <= 0) {
      // 返回交点p
      return v2(x, y);
    } //否则不相交


    return null;
  }

  _export({
    Approx: Approx,
    AreaOf2CrossRect: AreaOf2CrossRect,
    Clamp: Clamp,
    ConvertToNodeSpaceAR: ConvertToNodeSpaceAR,
    Distance: Distance,
    GetPixels: GetPixels,
    IndexToi: IndexToi,
    IndexToj: IndexToj,
    RectSub: RectSub,
    RotatePoint: RotatePoint,
    disOrderArray: disOrderArray,
    segementIntersection: segementIntersection
  });

  return {
    setters: [function (_cc) {
      cclegacy = _cc.cclegacy;
      v3 = _cc.v3;
      v2 = _cc.v2;
      math = _cc.math;
    }, function (_RandomJs) {
      Random = _RandomJs.Random;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f6d1f4JxyRGLZGcMhw5zqwm", "Cocos", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Model/Level.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameRule.js", "../../Common/Cocos.js"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, Theme, disOrderArray, Level;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_GameRuleJs) {
      Theme = _GameRuleJs.Theme;
    }, function (_CommonCocosJs) {
      disOrderArray = _CommonCocosJs.disOrderArray;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2c61ff3ojFA+b0ekQBXtCGj", "Level", undefined);
      /** 游戏不同难度内容区分 */


      _export("Level", Level = /*#__PURE__*/function () {
        function Level() {
          _classCallCheck(this, Level);
        }

        _createClass(Level, null, [{
          key: "GetThemeRandomPool",
          value: function GetThemeRandomPool(level) {
            if (this.themePool.length >= 120) {
              return this.themePool;
            }

            while (this.themePool.length < 120) {
              for (var key in Theme) {
                if (parseInt(key).toString() == "NaN") {
                  this.themePool.push(Theme[key]);
                }
              }
            }

            disOrderArray(this.themePool);
            return this.themePool;
          }
        }]);

        return Level;
      }());

      Level.themePool = [];

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Model/PlayModel.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "../GamePlay/GameRule.js", "../Signal/Signal.js", "../Ad/FlyCnicornAd.js", "../Common/Random.js", "../GamePlay/Model/Level.js", "../Manager/GameStateController.js", "../GamePlay/GameLogic.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, math, SingleTon, GetFreePauseCount, GetScoreByType, ScoreType, Theme, GetTotalTime, StartCountSignal, UpdateTimeNumber, TimeAnimationStateChanged, ShowFlyCnicornSignal, EndNowSignal, PlayerScoreChanged, GameStartSignal, WildButtonReadySignal, GamePrepareSignal, GameThemeInit, FlyCnicornAd, Random, Level, GameStateController, RoundEndType, GameLogic, PlayModel;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      math = _cc.math;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_GamePlayGameRuleJs) {
      GetFreePauseCount = _GamePlayGameRuleJs.GetFreePauseCount;
      GetScoreByType = _GamePlayGameRuleJs.GetScoreByType;
      ScoreType = _GamePlayGameRuleJs.ScoreType;
      Theme = _GamePlayGameRuleJs.Theme;
      GetTotalTime = _GamePlayGameRuleJs.GetTotalTime;
    }, function (_SignalSignalJs) {
      StartCountSignal = _SignalSignalJs.StartCountSignal;
      UpdateTimeNumber = _SignalSignalJs.UpdateTimeNumber;
      TimeAnimationStateChanged = _SignalSignalJs.TimeAnimationStateChanged;
      ShowFlyCnicornSignal = _SignalSignalJs.ShowFlyCnicornSignal;
      EndNowSignal = _SignalSignalJs.EndNowSignal;
      PlayerScoreChanged = _SignalSignalJs.PlayerScoreChanged;
      GameStartSignal = _SignalSignalJs.GameStartSignal;
      WildButtonReadySignal = _SignalSignalJs.WildButtonReadySignal;
      GamePrepareSignal = _SignalSignalJs.GamePrepareSignal;
      GameThemeInit = _SignalSignalJs.GameThemeInit;
    }, function (_AdFlyCnicornAdJs) {
      FlyCnicornAd = _AdFlyCnicornAdJs.FlyCnicornAd;
    }, function (_CommonRandomJs) {
      Random = _CommonRandomJs.Random;
    }, function (_GamePlayModelLevelJs) {
      Level = _GamePlayModelLevelJs.Level;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
      RoundEndType = _ManagerGameStateControllerJs.RoundEndType;
    }, function (_GamePlayGameLogicJs) {
      GameLogic = _GamePlayGameLogicJs.GameLogic;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b2e2ftHDlpJep6mkwruLmn0", "PlayModel", undefined);

      _export("PlayModel", PlayModel = /*#__PURE__*/function (_SingleTon) {
        _inherits(PlayModel, _SingleTon);

        function PlayModel() {
          var _this;

          _classCallCheck(this, PlayModel);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(PlayModel).call(this));
          _this.theme = null;
          _this.playerScore = 0;
          _this.noviceScore = 0;
          _this.gameTime = 0;
          _this.level = 0;
          _this.difficultyLevel = 0;
          _this.pauseCount = 0;
          _this.pauseScore = 0;
          _this.playerScoreMap = {};
          _this.streak = 0;
          _this.totalStreak = 0;
          _this.maxStreak = 0;
          _this.isGameOver = false;
          _this.hasStartCount = false;

          _this.bindSignal();

          return _this;
        }

        _createClass(PlayModel, [{
          key: "addGameTime",
          value: function addGameTime(dt) {
            if (GameStateController.inst.isPause() || GameStateController.inst.isRoundStart() == false) {
              return;
            }

            if (this.isGameOver) return;

            if (this.hasStartCount == false) {
              this.hasStartCount = true;
              StartCountSignal.inst.dispatch();
            }

            this.Time += dt;
            UpdateTimeNumber.inst.dispatch(this.Time, Math.abs(dt));
            TimeAnimationStateChanged.inst.dispatch(this.Time <= 30);

            if (FlyCnicornAd.ShowTimeRest > 0) {
              FlyCnicornAd.ShowTimeRest += dt;

              if (FlyCnicornAd.ShowTimeRest <= 0) {
                ShowFlyCnicornSignal.inst.dispatch();
              }
            }

            if (this.Time <= 0) {
              this.checkCompleteScore();
              GameStateController.inst.roundEnd(RoundEndType.TimeUp);
            }
          }
        }, {
          key: "bindSignal",
          value: function bindSignal() {
            EndNowSignal.inst.addListener(this.onEndNow, this);
          }
        }, {
          key: "getTotalScore",
          value: function getTotalScore() {
            return this.TotalScore;
          }
        }, {
          key: "setTotalTime",
          value: function setTotalTime(time) {
            this.Time = time;
            UpdateTimeNumber.inst.dispatch(this.Time);
          }
        }, {
          key: "addPauseCount",
          value: function addPauseCount() {
            this.pauseCount++;
            console.log("pause count:", this.pauseCount);

            if (this.pauseCount > GetFreePauseCount()) {
              this.addPlayerScore(-GetScoreByType(ScoreType.PauseCost), ScoreType.PauseCost);
            }
          }
        }, {
          key: "resetCombo",
          value: function resetCombo() {
            this.streak = 0;
          }
        }, {
          key: "addPlayerScore",
          value: function addPlayerScore(score, type) {
            var fromNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            if (math.approx(score, 0, 0.001)) return;
            if (this.playerScoreMap[type] == null) this.playerScoreMap[type] = 0;
            this.playerScoreMap[type] += score;
            var oldScore = this.playerScore;
            this.playerScore += score;
            if (score > 0) ;else {
              this.resetCombo();
            }
            this.playerScore = Math.max(this.playerScore, 0);
            PlayerScoreChanged.inst.dispatch(this.playerScore, score, fromNode, delay, type);
            return this.playerScore - oldScore;
          }
        }, {
          key: "addStreak",
          value: function addStreak() {
            this.streak++;
            this.totalStreak++;
            this.maxStreak = Math.max(this.maxStreak, this.streak);
          }
        }, {
          key: "checkCompleteScore",
          value: function checkCompleteScore() {}
        }, {
          key: "getScoreByType",
          value: function getScoreByType(type) {
            if (typeof this.playerScoreMap[type] != "number") return 0;
            return this.playerScoreMap[type];
          }
        }, {
          key: "gameReadyShow",
          value: function gameReadyShow() {
            GameStateController.inst.isReady = true;
            GameStartSignal.inst.dispatch();
            console.log("gameReadyToStart");
            WildButtonReadySignal.inst.dispatch();
          }
        }, {
          key: "onEndNow",
          value: function onEndNow() {
            console.log(" player end now.");
            this.checkCompleteScore();
            GameStateController.inst.roundEnd(RoundEndType.Over);
          }
          /** 初始化游戏数据 */

        }, {
          key: "initGameData",
          value: function initGameData() {
            console.log("init game data.");
            this.Level = 0;
          }
          /**  初始化游戏主题 */

        }, {
          key: "initGametheme",
          value: function initGametheme() {
            var pool = Level.GetThemeRandomPool(this.Level);
            this.Theme = pool[Math.floor(Random.getRandom() * pool.length)];
          }
        }, {
          key: "init",
          value: function init() {
            GamePrepareSignal.inst.dispatch();
            this.initGametheme();
            this.initGameData();
            GameLogic.inst.init();
          }
        }, {
          key: "Theme",
          get: function get() {
            return this.theme;
          },
          set: function set(val) {
            console.log("set game theme:", Theme[val]);
            this.theme = val;
            GameThemeInit.inst.dispatch(this.theme);
          }
        }, {
          key: "Level",
          get: function get() {
            return this.level;
          },
          set: function set(val) {
            this.level = val;
          }
        }, {
          key: "Time",
          get: function get() {
            return this.gameTime;
          },
          set: function set(val) {
            this.gameTime = val;
            this.gameTime = Math.max(0, this.gameTime);
          }
        }, {
          key: "TimeBonus",
          get: function get() {
            if (GameLogic.inst.HeartCount <= 0 || this.getScoreByType(ScoreType.Pocket) <= 0) return 0;
            return Math.floor((this.gameTime / GetTotalTime() * 2.4 + 0.6) * this.gameTime);
          }
        }, {
          key: "ScoreSpread",
          get: function get() {
            return 0;
          }
        }, {
          key: "PauseScore",
          get: function get() {
            return this.pauseScore;
          }
        }, {
          key: "NoviceScore",
          get: function get() {
            return this.noviceScore;
          }
        }, {
          key: "TotalCombo",
          get: function get() {
            return this.totalStreak;
          }
        }, {
          key: "PauseCount",
          get: function get() {
            return this.pauseCount;
          }
        }, {
          key: "PlayerScore",
          get: function get() {
            return this.playerScore;
          }
        }, {
          key: "TotalScore",
          get: function get() {
            return Math.max(this.TimeBonus + this.ScoreSpread + this.playerScore, 0);
          }
        }, {
          key: "FreePauseCount",
          get: function get() {
            return Math.max(0, GetFreePauseCount() - this.pauseCount);
          }
        }]);

        return PlayModel;
      }(SingleTon()));

      CC_DEBUG && (window["PlayModel"] = PlayModel.inst);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Manager/GameStateController.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "../Signal/Signal.js", "../Model/PlayModel.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, cclegacy, SingleTon, GameOverSignal, GamePauseSignal, PlayModel, RoundEndType, GameStateController;

  _export("RoundEndType", void 0);

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_SignalSignalJs) {
      GameOverSignal = _SignalSignalJs.GameOverSignal;
      GamePauseSignal = _SignalSignalJs.GamePauseSignal;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c5f7dc2VdRPBLcN+cZI4lsB", "GameStateController", undefined);

      (function (RoundEndType) {
        RoundEndType[RoundEndType["Complete"] = 0] = "Complete";
        RoundEndType[RoundEndType["Over"] = 1] = "Over";
        RoundEndType[RoundEndType["TimeUp"] = 2] = "TimeUp";
        RoundEndType[RoundEndType["OutOfMove"] = 3] = "OutOfMove";
      })(RoundEndType || _export("RoundEndType", RoundEndType = {}));

      _export("GameStateController", GameStateController = /*#__PURE__*/function (_SingleTon) {
        _inherits(GameStateController, _SingleTon);

        function GameStateController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameStateController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameStateController)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.interactivePauseCount = 0;
          _this.pauseCount = 0;
          _this.roundstart = false;
          _this.isReady = false;
          _this.isOver = false;
          _this.currentRound = 0;
          _this.onResumeCallbacks = [];
          return _this;
        }

        _createClass(GameStateController, [{
          key: "start",
          value: function start() {
            this.pauseCount = 0;
            this.interactivePauseCount = 0;
          }
        }, {
          key: "canStart",
          value: function canStart() {
            return this.isReady;
          }
        }, {
          key: "roundStart",
          value: function roundStart() {
            if (this.isOver) return;
            console.log(" round start:", ++this.currentRound);
            this.roundstart = true;
          }
        }, {
          key: "roundEnd",
          value: function roundEnd(type) {
            console.log("round end :", RoundEndType[type]);
            this.roundstart = false;
            this.isOver = true;
            GameOverSignal.inst.dispatch(type);
          }
        }, {
          key: "isRoundStart",
          value: function isRoundStart() {
            return this.roundstart;
          }
        }, {
          key: "pauseInteractive",
          value: function pauseInteractive() {
            this.interactivePauseCount++;
          }
        }, {
          key: "pause",
          value: function pause() {
            var isFree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.isPause() == false) {
              this.onResumeCallbacks.length = 0;
              GamePauseSignal.inst.dispatch();

              if (!isFree) {
                this.onResumeCallbacks.push(function () {
                  PlayModel.inst.addPauseCount();
                });
              }
            }

            this.pauseCount++;
          }
        }, {
          key: "testEndComplete",
          value: function testEndComplete() {
            this.roundEnd(RoundEndType.Complete);
          }
        }, {
          key: "testEndTimeUp",
          value: function testEndTimeUp() {
            PlayModel.inst.addGameTime(-1000000000000);
          }
        }, {
          key: "clearResumeCallback",
          value: function clearResumeCallback() {
            this.onResumeCallbacks.length = 0;
          }
        }, {
          key: "resume",
          value: function resume() {
            this.pauseCount--;
            console.assert(this.pauseCount >= 0, " pause count smaller than 0!!!");
            this.pauseCount = Math.max(this.pauseCount, 0);

            if (this.pauseCount <= 0) {
              var _iterator = _createForOfIteratorHelper(this.onResumeCallbacks),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var callback = _step.value;
                  callback();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              this.onResumeCallbacks.length = 0;
            }
          }
        }, {
          key: "resumeInteractive",
          value: function resumeInteractive() {
            this.interactivePauseCount--;
            console.assert(this.interactivePauseCount >= 0, " pause count smaller than 0!!!");
            this.interactivePauseCount = Math.max(this.interactivePauseCount, 0);
          }
        }, {
          key: "isPause",
          value: function isPause() {
            return this.pauseCount > 0;
          }
        }, {
          key: "isInteractivePause",
          value: function isInteractivePause() {
            return this.interactivePauseCount > 0;
          }
        }, {
          key: "addResumeCallback",
          value: function addResumeCallback(callback) {
            if (!this.onResumeCallbacks) this.onResumeCallbacks = [];
            this.onResumeCallbacks.push(callback);
          }
        }, {
          key: "isGameOver",
          value: function isGameOver() {
            return this.isOver;
          }
          /** 是否可以交互 */

        }, {
          key: "canInteractive",
          value: function canInteractive() {
            return !(GameStateController.inst.isPause() || GameStateController.inst.isGameOver() || !GameStateController.inst.isRoundStart() || GameStateController.inst.isInteractivePause());
          }
        }]);

        return GameStateController;
      }(SingleTon()));

      !CELER_X && (window["GameState"] = GameStateController.inst);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///TableManager.js", ["./_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, _createForOfIteratorHelper, cclegacy, TableManager;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3152d8IVxNJ0bZnGxcI+7M6", "TableManager", undefined);
      /**
      * json数据管理
      */


      _export("TableManager", TableManager = /*#__PURE__*/function () {
        _createClass(TableManager, null, [{
          key: "inst",
          get: function get() {
            return this.ins ? this.ins : this.ins = new TableManager();
          }
        }]);

        function TableManager() {
          _classCallCheck(this, TableManager);

          this.load = TableManager.JSON_URL && TableManager.JSON_URL != "" ? cc.loader.load.bind(cc.loader) : cc.loader.loadRes.bind(cc.loader);
          this.fileFormat = TableManager.JSON_URL && TableManager.JSON_URL != "" ? ".json?time=" + Date.now() : "";
          this.total = 0;
          this.complete = 0;
          this.Balls = {};
          this.En = {};
          this.Level = {};
          this.Physical = {};
        }

        _createClass(TableManager, [{
          key: "startLoad",

          /** 
          *
          * @param url json 路径
          * @param complete
          * @param progress
          */
          value: function startLoad(url, complete, progress) {
            this.completeCallback = complete;
            this.progressCallback = progress;
            var self = this;
            console.log("Base URL:", TableManager.JSON_URL);
            this.load(TableManager.JSON_URL + url.trim().split('/').join('') + '/file_list' + this.fileFormat, function (err, JsonAsset) {
              if (err) {
                console.error(err.errorMessage);
              } else {
                var jsonArray = JsonAsset.constructor["name"] == "Array" ? JsonAsset : JsonAsset.json;
                this.total = jsonArray.length;

                var _iterator = _createForOfIteratorHelper(jsonArray),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var jsonFile = _step.value;
                    self.loadJson(url.trim().split('/').join('') + '/' + jsonFile.replace('.json', ''));
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            }.bind(this));
          }
        }, {
          key: "loadJson",
          value: function loadJson(url) {
            console.log('start load:' + url);
            var self = this;
            var tableName = url.split("/")[1];
            tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1, tableName.length);
            this.load(TableManager.JSON_URL + url + this.fileFormat, function (err, JsonAsset) {
              if (err) {
                console.error(err.errorMessage);
              } else {
                var jsonArray = JsonAsset.constructor["name"] == "Array" ? JsonAsset : JsonAsset.json;

                var _iterator2 = _createForOfIteratorHelper(jsonArray),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var json = _step2.value;
                    self[tableName][json['ID']] = json;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                self.completeLoad();
              }
            }.bind(this));
          }
        }, {
          key: "completeLoad",
          value: function completeLoad() {
            this.complete++;

            if (this.progressCallback) {
              this.progressCallback(this.complete / this.total);
            }

            if (this.complete >= this.total) {
              if (this.completeCallback) this.completeCallback();
            }
          }
        }, {
          key: "getBalls",
          value: function getBalls(key) {
            if (this.Balls[key]) {
              return this.Balls[key];
            } else {
              console.error('Balls 不存key：' + key);
              return null;
            }
          }
        }, {
          key: "getAll_Balls_Data",
          value: function getAll_Balls_Data() {
            return this.Balls;
          }
        }, {
          key: "getEn",
          value: function getEn(key) {
            if (this.En[key]) {
              return this.En[key];
            } else {
              console.error('En 不存key：' + key);
              return null;
            }
          }
        }, {
          key: "getAll_En_Data",
          value: function getAll_En_Data() {
            return this.En;
          }
        }, {
          key: "getLevel",
          value: function getLevel(key) {
            if (this.Level[key]) {
              return this.Level[key];
            } else {
              console.error('Level 不存key：' + key);
              return null;
            }
          }
        }, {
          key: "getAll_Level_Data",
          value: function getAll_Level_Data() {
            return this.Level;
          }
        }, {
          key: "getPhysical",
          value: function getPhysical(key) {
            if (this.Physical[key]) {
              return this.Physical[key];
            } else {
              console.error('Physical 不存key：' + key);
              return null;
            }
          }
        }, {
          key: "getAll_Physical_Data",
          value: function getAll_Physical_Data() {
            return this.Physical;
          }
        }]);

        return TableManager;
      }());

      TableManager.JSON_URL = "";

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/SDK/LogHandler.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../ToSingleTon.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, _assertThisInitialized, _typeof, cclegacy, director, Director, SingleTon, LogHandler;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _typeof = _virtual_rollupPluginBabelHelpersJs.typeof;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      director = _cc.director;
      Director = _cc.Director;
    }, function (_ToSingleTonJs) {
      SingleTon = _ToSingleTonJs.SingleTon;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fa3abvo3A5JTYG4Hamv49xr", "LogHandler", undefined);

      _export("LogHandler", LogHandler = /*#__PURE__*/function (_SingleTon) {
        _inherits(LogHandler, _SingleTon);

        function LogHandler() {
          var _this;

          _classCallCheck(this, LogHandler);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(LogHandler).call(this));
          _this.logFunc = console.log;
          _this.logMsg = null;
          _this.frameTimes = 0;
          _this.now = 0;
          _this.Frame = 20;
          _this.totalFrames = 0;
          _this.startTime = 0;

          if (window.addEventListener) {
            var _iterator = _createForOfIteratorHelper(LogHandler.LISTENNING_EVENTS),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var event = _step.value;
                var funcName = "trigger" + event.charAt(0).toLocaleUpperCase() + event.substring(1);

                if (_this[funcName] && typeof _this[funcName] == "function") {
                  window.addEventListener(event, _this[funcName].bind(_assertThisInitialized(_this)));
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          return _this;
        }

        _createClass(LogHandler, [{
          key: "dumpFrameInfo",
          value: function dumpFrameInfo() {
            var timeCost = (Date.now() - this.startTime) / 1000;
            var perFrame = timeCost / this.totalFrames;
            this.log(" total frames:", this.totalFrames, " ,total cost time:", timeCost + "s", " , per frame cost time ave:" + perFrame + "s");
          }
        }, {
          key: "log",
          value: function log() {
            this.addLog.apply(this, arguments);
            this.sendLog();
          }
        }, {
          key: "ready",
          value: function ready() {
            console.log(LogHandler.VERSION);
          }
        }, {
          key: "initLog",
          value: function initLog(callback) {
            var _this2 = this;

            director.once(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
              _this2.frameTimes = 0;
              _this2.now = Date.now();
              _this2.startTime = Date.now();
            }, this);
            director.on(Director.EVENT_AFTER_DRAW, function () {
              _this2.frameTimes++;
              _this2.totalFrames++;

              if (_this2.frameTimes >= _this2.Frame) {
                _this2.frameTimes = 0; // this.addLog(
                //   " draw " +
                //     this.Frame +
                //     " frames cost:" +
                //     (Date.now() - this.now) +
                //     " ms"
                // );

                _this2.now = Date.now(); // this.sendLog();
              }
            }, this);
            this.logFunc = callback;
            window["consoleError"] = console.error;
            window["consoleWarn"] = console.warn;
            window["consoleLog"] = console.log;
            window["consoleAssert"] = console.assert;

            console.error = function () {
              var _LogHandler$inst;

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              (_LogHandler$inst = LogHandler.inst).log.apply(_LogHandler$inst, ["[ERROR]"].concat(args));
            };

            console.warn = function () {
              var _LogHandler$inst2;

              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              (_LogHandler$inst2 = LogHandler.inst).log.apply(_LogHandler$inst2, ["[WARN]"].concat(args));
            };

            console.log = function () {
              var _LogHandler$inst3;

              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              (_LogHandler$inst3 = LogHandler.inst).log.apply(_LogHandler$inst3, ["[INFO]"].concat(args));
            };

            console.assert = function (isOk) {
              if (!isOk) {
                var _LogHandler$inst4;

                for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                  args[_key4 - 1] = arguments[_key4];
                }

                (_LogHandler$inst4 = LogHandler.inst).log.apply(_LogHandler$inst4, ["[ASSERT ERROR]"].concat(args));
              }
            };
          }
        }, {
          key: "formatLogArguments",
          value: function formatLogArguments() {
            for (var _len5 = arguments.length, _ = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              _[_key5] = arguments[_key5];
            }

            var logString = "";

            for (var i = 0; i < arguments.length; i++) {
              var type = _typeof(arguments[i]);

              if (type == "string" || type == "number") {
                logString += " " + arguments[i];
              } else if (type == "object") {
                logString += " " + JSON.stringify(arguments[i]);
              } else if (type == "boolean" && arguments[i].toString) {
                logString += arguments[i].toString();
              }
            }

            return logString;
          }
        }, {
          key: "addLog",
          value: function addLog() {
            if (this.logMsg == null) {
              this.logMsg = {};
            }

            var msg = this.formatLogArguments.apply(this, arguments);
            var fullTime = this.getFullTime(new Date());
            this.logMsg[fullTime] = LogHandler.VERSION + msg;
          }
        }, {
          key: "getFullTime",
          value: function getFullTime(date) {
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
          }
        }, {
          key: "sendLog",
          value: function sendLog() {
            if (!this.logFunc) return;
            if (this.logMsg == null) return;
            this.logFunc(JSON.stringify(this.logMsg)); // if (CELER_X) {
            //   if (window["webkit"]) {
            //     window["webkit"].messageHandlers["log"].postMessage(
            //       JSON.stringify(this.logMsg)
            //     );
            //   }
            // }

            this.logMsg = null;
          }
          /**
           * window的事件监听回调，方法格式trigger + 事件名 首字母大写
           */

        }, {
          key: "triggerClose",
          value: function triggerClose(ev) {
            this.addLog("triggerClose");
            this.sendLog();
          }
        }, {
          key: "triggerLoad",
          value: function triggerLoad(ev) {
            this.addLog("triggerLoad");
            this.sendLog();
          }
        }, {
          key: "triggerUnload",
          value: function triggerUnload(ev) {
            this.addLog("triggerUnload");
            this.sendLog();
          }
        }, {
          key: "triggerOnunload",
          value: function triggerOnunload(ev) {
            this.addLog("triggerUnload");
            this.sendLog();
          }
        }, {
          key: "triggerError",
          value: function triggerError(err) {
            this.addLog("triggerError");
            this.addLog(err.message);
            this.sendLog();
          }
        }, {
          key: "triggerFocus",
          value: function triggerFocus(foc) {
            this.addLog("triggerFocus");
            this.sendLog();
          }
        }, {
          key: "triggerBlur",
          value: function triggerBlur(foc) {
            this.addLog("triggerBlur");
            this.sendLog();
          }
        }, {
          key: "triggerAbort",
          value: function triggerAbort(ui) {
            this.addLog("triggerAbort");
            this.sendLog();
          }
        }, {
          key: "triggerSuspend",
          value: function triggerSuspend(sus) {
            this.addLog("triggerSuspend");
            this.sendLog();
          }
        }, {
          key: "beforeunload",
          value: function beforeunload(bf) {
            this.addLog("beforeunload");
            this.sendLog();
          }
        }]);

        return LogHandler;
      }(SingleTon()));

      LogHandler.VERSION = window["GAME_VERSION"] || " --- ";
      LogHandler.LISTENNING_EVENTS = ["error"
      /*"unload",
      "load",
      "focus",
      "blur",
      "abort",
      "suspend",
      "beforeunload",
      "onunload",
      "close",*/
      ];
      CC_DEBUG && (window["LogHandler"] = LogHandler);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/SDK/CelerSDK.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../ToSingleTon.js", "../../GamePlay/GameRule.js", "../../Signal/Signal.js", "../Random.js", "../../Model/PlayModel.js", "../../Manager/GameStateController.js", "../../TableManager.js", "./LogHandler.js", "../../GameLoad/InitialFacade.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, game, Game, sys, SingleTon, GetTotalTime, HideWildAdButtonSignal, RemoveFlyCnicornSignal, ShowPauseLayerSignal, Random, PlayModel, GameStateController, TableManager, LogHandler, InitialFacade, CelerSDK;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      game = _cc.game;
      Game = _cc.Game;
      sys = _cc.sys;
    }, function (_ToSingleTonJs) {
      SingleTon = _ToSingleTonJs.SingleTon;
    }, function (_GamePlayGameRuleJs) {
      GetTotalTime = _GamePlayGameRuleJs.GetTotalTime;
    }, function (_SignalSignalJs) {
      HideWildAdButtonSignal = _SignalSignalJs.HideWildAdButtonSignal;
      RemoveFlyCnicornSignal = _SignalSignalJs.RemoveFlyCnicornSignal;
      ShowPauseLayerSignal = _SignalSignalJs.ShowPauseLayerSignal;
    }, function (_RandomJs) {
      Random = _RandomJs.Random;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_TableManagerJs) {
      TableManager = _TableManagerJs.TableManager;
    }, function (_LogHandlerJs) {
      LogHandler = _LogHandlerJs.LogHandler;
    }, function (_GameLoadInitialFacadeJs) {
      InitialFacade = _GameLoadInitialFacadeJs.InitialFacade;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f058b49JtNBSYr9SexzhltZ", "CelerSDK", undefined);

      _export("CelerSDK", CelerSDK = /*#__PURE__*/function (_SingleTon) {
        _inherits(CelerSDK, _SingleTon);

        function CelerSDK() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, CelerSDK);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CelerSDK)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.alreadySubmit = false;
          _this.isNewPlayer = true;
          _this.celerStartCallback = null;
          return _this;
        }

        _createClass(CelerSDK, [{
          key: "init",
          value: function init(callback) {
            this.alreadySubmit = false;
            CELER_X && celerSDK.onStart(this.onCelerStart.bind(this));
            CELER_X && celerSDK.provideScore(function () {
              return PlayModel.inst.getTotalScore();
            });
            this.celerStartCallback = callback;
            LogHandler.inst.ready();

            if (CELER_X) {
              LogHandler.inst.initLog(celerSDK.log);
            }
          }
        }, {
          key: "celerXReady",
          value: function celerXReady() {
            console.log(" invoke celerx.ready() ");

            if (!CELER_X) {
              this.onCelerStart();
            } else {
              celerSDK.ready();
            }
          }
        }, {
          key: "isNew",
          value: function isNew() {
            return this.isNewPlayer;
          }
        }, {
          key: "isOnCelerPlatform",
          value: function isOnCelerPlatform() {
            return CELER_X;
          }
        }, {
          key: "onCelerStart",
          value: function onCelerStart() {
            console.log(" celerx onStart call");
            this.match = CELER_X ? celerSDK.getMatch() : {
              matchId: "error : can not get id",
              shouldLaunchTutorial: false,
              sharedRandomSeed: Math.random(),
              //*/0.24907066062871674,//Math.random(),0.9483376662548313, //
              difficultyLevel: 1,
              locale: "en_US"
            };
            console.log("match id:", this.match.matchId, ", seed:", this.match.sharedRandomSeed);

            if (this.match.difficultyLevel == 0) {
              this.match.difficultyLevel = 1;
            }

            Random.setRandomSeed(this.match.sharedRandomSeed);
            PlayModel.inst.setTotalTime(GetTotalTime());

            if (this.match && this.match.shouldLaunchTutorial) {
              this.isNewPlayer = true;
            } else {
              this.isNewPlayer = false;
            } // 暂不支持广告


            HideWildAdButtonSignal.inst.dispatch();
            RemoveFlyCnicornSignal.inst.dispatch();

            if (InitialFacade.CelerFirst == false) {
              this.defineLan();
            }

            if (this.celerStartCallback) {
              this.celerStartCallback();
              this.celerStartCallback = null;
            }
          }
        }, {
          key: "defineLan",
          value: function defineLan() {
            this.match.locale = this.match.locale || "en_US";

            if (CC_DEBUG) {
              this.match.locale = "ef_US";
            }

            lan.set(this.match.locale);
            var textMap = {};
            var styleMap = {};
            var textData = null;
            textData = TableManager.inst.getAll_En_Data();
            var locale = this.match.locale.split("_")[0].charAt(0).toUpperCase() + this.match.locale.split("_")[0].substring(1);

            if (TableManager.inst["getAll_" + locale + "_Data"] && TableManager.inst["getAll_" + locale + "_Data"]()) {
              textData = TableManager.inst["getAll_" + locale + "_Data"]();
            }

            if (textData) {
              for (var _key2 in textData) {
                var data = textData[_key2];

                if (!textMap[data.View]) {
                  textMap[data.View] = {};
                }

                textMap[data.View][data.ID] = data.Text;

                if (!styleMap[data.View]) {
                  styleMap[data.View] = {};
                }

                styleMap[data.View][data.ID] = {
                  FontSize: data.FontSize,
                  MaxWidth: data.MaxWidth,
                  HorizontalAlign: data.Horizontal,
                  VerticalAlign: data.Vertical,
                  LineHeight: data.LineHeight,
                  x: data.X,
                  y: data.Y
                };
              }

              lan.define(this.match.locale, textMap);
              /** define style */

              lan.defineStyle(this.match.locale, styleMap);
            }

            if (CELER_X) {
              if (celerSDK.hasMethod("showAd") != true || this.isNewPlayer) {
                HideWildAdButtonSignal.inst.dispatch();
                RemoveFlyCnicornSignal.inst.dispatch();
              }

              celerSDK.onPause(function () {
                console.log(" on pause ");
                if (GameStateController.inst.isGameOver() || GameStateController.inst.isPause()) return;
                ShowPauseLayerSignal.inst.dispatch();
              });
              celerSDK.onResume(function () {
                console.log(" on resume "); // HidePauseLayerSignal.inst.dispatch();
              });
            } else {
              game.on(Game.EVENT_HIDE, function () {
                console.log(" on pause ");
                if (GameStateController.inst.isGameOver() || GameStateController.inst.isPause()) return;
                ShowPauseLayerSignal.inst.dispatch();
              });
              game.on(Game.EVENT_SHOW, function () {
                console.log(" on resume "); // HidePauseLayerSignal.inst.dispatch();
              });
            }
          }
        }, {
          key: "submitScore",
          value: function submitScore(score) {
            if (this.alreadySubmit) return;
            this.alreadySubmit = true;
            console.log(" submit score:", score, ", match id:", this.match);

            if (CELER_X) {
              celerSDK.submitScore(score);
            } else {
              window.location.reload();
            }
          }
        }, {
          key: "MatchID",

          /** 匹配ID */
          get: function get() {
            return this.match.matchId;
          }
          /** 随机种子 */

        }, {
          key: "MatchRandomSeed",
          get: function get() {
            return this.match.sharedRandomSeed;
          }
          /** 难度等级 */

        }, {
          key: "DifficultyLevel",
          get: function get() {
            return this.match.difficultyLevel;
          }
        }, {
          key: "isAndroidWeb",
          get: function get() {
            return sys.isMobile && sys.isBrowser && sys.os == sys.OS_ANDROID;
          }
        }, {
          key: "isIOSWeb",
          get: function get() {
            return sys.isMobile && sys.isBrowser && sys.os == sys.OS_IOS;
          }
        }]);

        return CelerSDK;
      }(SingleTon()));

      CC_DEBUG && (window["SDK"] = CelerSDK.inst);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Manager/StepManager.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, _createForOfIteratorHelper, cclegacy, StepManager;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "40cb5NQZgtIJI0r/H26O+5G", "StepManager", undefined);

      _export("StepManager", StepManager = /*#__PURE__*/function () {
        function StepManager() {
          _classCallCheck(this, StepManager);

          this.totalStep = [];
          this.curStep = [];
          this.loadTime = {};
        }

        _createClass(StepManager, [{
          key: "register",
          value: function register(complete, totalSteps) {
            this.completeCallback = complete;
            this.totalStep = totalSteps;

            var _iterator = _createForOfIteratorHelper(totalSteps),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;
                this.loadTime[key] = Date.now();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "start",
          value: function start(step) {
            this.loadTime[step] = Date.now();
          }
        }, {
          key: "nextStep",
          value: function nextStep(step) {
            if (this.totalStep.indexOf(step) < 0) {
              console.error(" 没有这一步：", step);
              return;
            }

            if (this.curStep.indexOf(step) >= 0) {
              console.warn(" 步骤已完成：", step);
              return;
            }

            this.curStep.push(step);
            this.curStep.sort(function (a, b) {
              return a > b ? -1 : 1;
            });
            this.totalStep.sort(function (a, b) {
              return a > b ? -1 : 1;
            });
            var now = this.curStep.join("-");
            var total = this.totalStep.join("-");
            var costTime = Date.now() - this.loadTime[step];
            console.log(" cur step:", step, ", cost time:", costTime, " ms");

            if (now == total) {
              console.log(" step done");
              this.totalStep.length = 0;
              this.completeCallback();
              this.completeCallback = null;
            }
          }
        }]);

        return StepManager;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Command/SimpleCommand.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, BaseCommand, SimpleCommand;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "583e4ZqIPZIP4QkHW8PKIta", "SimpleCommand", undefined);

      _export("BaseCommand", BaseCommand = /*#__PURE__*/function () {
        function BaseCommand() {
          _classCallCheck(this, BaseCommand);
        }

        _createClass(BaseCommand, [{
          key: "excute",
          value: function excute(body) {}
        }]);

        return BaseCommand;
      }());

      _export("SimpleCommand", SimpleCommand = /*#__PURE__*/function (_BaseCommand) {
        _inherits(SimpleCommand, _BaseCommand);

        function SimpleCommand() {
          _classCallCheck(this, SimpleCommand);

          return _possibleConstructorReturn(this, _getPrototypeOf(SimpleCommand).apply(this, arguments));
        }

        return SimpleCommand;
      }(BaseCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Command/MacroCommand.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "./SimpleCommand.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, cclegacy, BaseCommand, MacroCommand;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_SimpleCommandJs) {
      BaseCommand = _SimpleCommandJs.BaseCommand;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a464cRqnHZJFqe/UY6Xh9WQ", "MacroCommand", undefined);

      _export("MacroCommand", MacroCommand = /*#__PURE__*/function (_BaseCommand) {
        _inherits(MacroCommand, _BaseCommand);

        function MacroCommand() {
          var _this;

          _classCallCheck(this, MacroCommand);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(MacroCommand).call(this));
          _this.commands = [];

          _this.initializeMacroCommand();

          return _this;
        }

        _createClass(MacroCommand, [{
          key: "initializeMacroCommand",
          value: function initializeMacroCommand() {}
        }, {
          key: "addSubCommond",
          value: function addSubCommond(command) {
            this.commands.push(new command());
          }
        }, {
          key: "excute",
          value: function excute(body) {
            var _iterator = _createForOfIteratorHelper(this.commands),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var subCommand = _step.value;
                subCommand.excute(body);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.commands.length = 0;
          }
        }]);

        return MacroCommand;
      }(BaseCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameLoad/LoadAudioCommand.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Command/SimpleCommand.js", "./InitialFacade.js", "../Manager/AudioManager.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, SimpleCommand, InitialFacade, STEP, AudioController, LoadAudioCommand;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_CommandSimpleCommandJs) {
      SimpleCommand = _CommandSimpleCommandJs.SimpleCommand;
    }, function (_InitialFacadeJs) {
      InitialFacade = _InitialFacadeJs.InitialFacade;
      STEP = _InitialFacadeJs.STEP;
    }, function (_ManagerAudioManagerJs) {
      AudioController = _ManagerAudioManagerJs.AudioController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06a548MnE5Dz4dpDON+EArR", "LoadAudioCommand", undefined);

      _export("LoadAudioCommand", LoadAudioCommand = /*#__PURE__*/function (_SimpleCommand) {
        _inherits(LoadAudioCommand, _SimpleCommand);

        function LoadAudioCommand() {
          _classCallCheck(this, LoadAudioCommand);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadAudioCommand).apply(this, arguments));
        }

        _createClass(LoadAudioCommand, [{
          key: "excute",
          value: function excute() {
            InitialFacade.inst.startStep(STEP.Audio);
            AudioController.inst.init(function () {
              InitialFacade.inst.step(STEP.Audio);
            });
          }
        }]);

        return LoadAudioCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameLoad/LoadJsonCommand.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../TableManager.js", "../Common/SDK/CelerSDK.js", "../Command/SimpleCommand.js", "./InitialFacade.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, TableManager, CelerSDK, SimpleCommand, InitialFacade, STEP, LoadJsonCommand;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_TableManagerJs) {
      TableManager = _TableManagerJs.TableManager;
    }, function (_CommonSDKCelerSDKJs) {
      CelerSDK = _CommonSDKCelerSDKJs.CelerSDK;
    }, function (_CommandSimpleCommandJs) {
      SimpleCommand = _CommandSimpleCommandJs.SimpleCommand;
    }, function (_InitialFacadeJs) {
      InitialFacade = _InitialFacadeJs.InitialFacade;
      STEP = _InitialFacadeJs.STEP;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7be3eOvZ9dEQKofxmmp4yPe", "LoadJsonCommand", undefined);

      _export("LoadJsonCommand", LoadJsonCommand = /*#__PURE__*/function (_SimpleCommand) {
        _inherits(LoadJsonCommand, _SimpleCommand);

        function LoadJsonCommand() {
          _classCallCheck(this, LoadJsonCommand);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadJsonCommand).apply(this, arguments));
        }

        _createClass(LoadJsonCommand, [{
          key: "excute",
          value: function excute() {
            InitialFacade.inst.startStep(STEP.Json);
            TableManager.inst.startLoad("/json", function () {
              InitialFacade.inst.step(STEP.Json);

              if (InitialFacade.CelerFirst) {
                CelerSDK.inst.defineLan();
              }
            });
          }
        }]);

        return LoadJsonCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Factory/MaterialFactory.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "../Common/HashMap.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, loader, Material, SingleTon, HashMap, MaterialFactory;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      loader = _cc.loader;
      Material = _cc.Material;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_CommonHashMapJs) {
      HashMap = _CommonHashMapJs.HashMap;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8f81bDlvIFAo79lBq3LDIyI", "MaterialFactory", undefined);

      _export("MaterialFactory", MaterialFactory = /*#__PURE__*/function (_SingleTon) {
        _inherits(MaterialFactory, _SingleTon);

        function MaterialFactory() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MaterialFactory);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MaterialFactory)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.materials = new HashMap();
          return _this;
        }

        _createClass(MaterialFactory, [{
          key: "init",
          value: function init(callback) {
            var _this2 = this;

            loader.loadResDir("/materials/ball/", Material, function (err, materials, urls) {
              if (err) {
                console.error("load material failed:", err);
              } else {
                for (var i = 0; i < materials.length; i++) {
                  var strArr = urls[i].split("/");

                  _this2.materials.add(strArr[strArr.length - 1], materials[i]);
                }

                callback();
              }
            });
          }
        }, {
          key: "getMaterial",
          value: function getMaterial(name) {
            return this.materials.get(name);
          }
        }]);

        return MaterialFactory;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameLoad/LoadMaterialCommand.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Command/SimpleCommand.js", "../Factory/MaterialFactory.js", "./InitialFacade.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, SimpleCommand, MaterialFactory, InitialFacade, STEP, LoadMaterialCommand;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_CommandSimpleCommandJs) {
      SimpleCommand = _CommandSimpleCommandJs.SimpleCommand;
    }, function (_FactoryMaterialFactoryJs) {
      MaterialFactory = _FactoryMaterialFactoryJs.MaterialFactory;
    }, function (_InitialFacadeJs) {
      InitialFacade = _InitialFacadeJs.InitialFacade;
      STEP = _InitialFacadeJs.STEP;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9472fLnHtNPYoICW4TEWwMA", "LoadMaterialCommand", undefined);

      _export("LoadMaterialCommand", LoadMaterialCommand = /*#__PURE__*/function (_SimpleCommand) {
        _inherits(LoadMaterialCommand, _SimpleCommand);

        function LoadMaterialCommand() {
          _classCallCheck(this, LoadMaterialCommand);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadMaterialCommand).apply(this, arguments));
        }

        _createClass(LoadMaterialCommand, [{
          key: "excute",
          value: function excute() {
            InitialFacade.inst.startStep(STEP.Material);
            MaterialFactory.inst.init(function () {
              InitialFacade.inst.step(STEP.Material);
            });
          }
        }]);

        return LoadMaterialCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Factory/PrefabFactory.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "../Common/HashMap.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, cclegacy, loader, Prefab, instantiate, Component, SingleTon, HashMap, ObjPool, PrefabFactory;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Component = _cc.Component;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_CommonHashMapJs) {
      HashMap = _CommonHashMapJs.HashMap;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8271774ET9NtLUyI6ZWf4eK", "PrefabFactory", undefined);

      ObjPool = /*#__PURE__*/function () {
        function ObjPool(template, initSize, completeHandle) {
          _classCallCheck(this, ObjPool);

          this._pool = [];
          this.totalSize = 0;
          this.initTime = [];
          this.completeHandler = completeHandle;
          this.template = template;
          this.totalSize = initSize;
          this.hashKey = "ObjPool:" + this.template.name + " - " + this.totalSize;
          this.initPool(initSize);
        }

        _createClass(ObjPool, [{
          key: "initPool",
          value: function initPool(size) {
            var _this = this;

            var immediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (immediately) {
              for (var i = 0; i < size; ++i) {
                this.initTime.push(Date.now());
                var newNode = instantiate(this.template);
                this.put(newNode);
              }
            } else {
              for (var _i = 0; _i < size; ++_i) {
                this.initTime.push(Date.now());
                setTimeout(function () {
                  var newNode = instantiate(_this.template);

                  _this.put(newNode);
                }, _i);
              }
            }
          }
        }, {
          key: "size",
          value: function size() {
            return this._pool.length;
          }
        }, {
          key: "clear",
          value: function clear() {
            var count = this._pool.length;

            for (var i = 0; i < count; ++i) {
              this._pool[i].destroy && this._pool[i].destroy();
            }

            this._pool.length = 0;
          }
        }, {
          key: "put",
          value: function put(obj) {
            if (obj && this._pool.indexOf(obj) === -1) {
              // Remove from parent, but don't cleanup
              obj.removeFromParent(false); //obj.setParent(null);
              // Invoke pool handler

              var handlers = obj.getComponents(Component);

              var _iterator = _createForOfIteratorHelper(handlers),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var handler = _step.value;

                  if (handler && handler.unuse) {
                    handler.unuse.apply(handler);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              this._pool.push(obj);

              if (this.completeHandler) {
                // if (!CELER_X) {
                //   console.log(
                //     " pool:",
                //     this.template.name,
                //     ", now:",
                //     this._pool.length,
                //     ", total:",
                //     this.totalSize,
                //     ", cost:",
                //     (Date.now() - this.initTime[this._pool.length - 1]).toFixed(2) +
                //       "ms"
                //   );
                // }
                if (this.totalSize <= this._pool.length) {
                  this.completeHandler();
                  this.completeHandler = null;
                }
              }
            }
          }
        }, {
          key: "get",
          value: function get() {
            for (var _len = arguments.length, _ = new Array(_len), _key = 0; _key < _len; _key++) {
              _[_key] = arguments[_key];
            }

            var last = this._pool.length - 1;

            if (last < 0) {
              this.initPool(1, true);
            }

            last = this._pool.length - 1; // Pop the last object in pool

            var obj = this._pool[last];
            this._pool.length = last; // Invoke pool handler

            var handlers = obj.getComponents(Component);

            var _iterator2 = _createForOfIteratorHelper(handlers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var handler = _step2.value;

                if (handler && handler.reuse) {
                  handler.reuse.apply(handler, arguments);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return obj;
          }
        }]);

        return ObjPool;
      }();

      _export("PrefabFactory", PrefabFactory = /*#__PURE__*/function (_SingleTon) {
        _inherits(PrefabFactory, _SingleTon);

        function PrefabFactory() {
          var _getPrototypeOf2;

          var _this2;

          _classCallCheck(this, PrefabFactory);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PrefabFactory)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this2.count = 0;
          _this2.totalCount = 0;
          _this2.objPool = new HashMap();
          _this2.startTime = 0;
          return _this2;
        }

        _createClass(PrefabFactory, [{
          key: "init",
          value: function init(callback, progress) {
            var _this3 = this;

            this.doneCallback = callback;
            this.progressCallback = progress;
            this.startTime = Date.now();
            loader.loadResDir("prefabs/", Prefab, function (err, res, urls) {
              if (err) {
                console.error(" Game Factory init failed:", err);
              } else {
                _this3.totalCount = res.length;

                var _loop = function _loop(i) {
                  var prefab = res[i];
                  var nameSplit = prefab.data.name.split(".");
                  var name = nameSplit[0];
                  var count = nameSplit[1] ? parseInt(nameSplit[1]) : 30;
                  console.log(" init pool:", name, ", count:", count);
                  setTimeout(function () {
                    var objPool = new ObjPool(prefab, count, _this3.addCount.bind(_this3));

                    _this3.objPool.add(name, objPool);
                  }, i * 5);
                };

                for (var i = 0; i < res.length; i++) {
                  _loop(i);
                }
              }
            });
          }
        }, {
          key: "addObject",
          value: function addObject(name, url, count) {
            var _this4 = this;

            return new Promise(function (solve, reject) {
              loader.loadRes(url, Prefab, function (err, prefab) {
                if (err) {
                  reject(err);
                } else {
                  var objPool = new ObjPool(prefab, count, function () {
                    solve(name);
                  });

                  _this4.objPool.add(name, objPool);
                }
              });
            });
          }
        }, {
          key: "addCount",
          value: function addCount() {
            this.count++;

            if (this.progressCallback) {
              this.progressCallback(this.count / this.totalCount);
            }

            if (this.count >= this.totalCount) {
              console.log(" factory cost time:", (Date.now() - this.startTime).toFixed(2) + "ms");

              if (this.doneCallback) {
                this.doneCallback();
                this.doneCallback = null;
              }
            }
          }
        }, {
          key: "getObj",
          value: function getObj(name) {
            if (this.objPool.has(name)) {
              var _this$objPool$get;

              for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
              }

              return (_this$objPool$get = this.objPool.get(name)).get.apply(_this$objPool$get, args);
            } else {
              console.error(" objPool dosen't exists this obj:", name);
              return null;
            }
          }
        }, {
          key: "putObj",
          value: function putObj(name, node) {
            if (this.objPool.has(name)) {
              return this.objPool.get(name).put(node);
            } else {
              console.error(" objPool dosen't exists this obj:", name);
            }
          }
        }]);

        return PrefabFactory;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameLoad/LoadPrefabCommand.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Command/SimpleCommand.js", "../Factory/PrefabFactory.js", "./InitialFacade.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, SimpleCommand, PrefabFactory, InitialFacade, STEP, LoadPrefabCommand;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_CommandSimpleCommandJs) {
      SimpleCommand = _CommandSimpleCommandJs.SimpleCommand;
    }, function (_FactoryPrefabFactoryJs) {
      PrefabFactory = _FactoryPrefabFactoryJs.PrefabFactory;
    }, function (_InitialFacadeJs) {
      InitialFacade = _InitialFacadeJs.InitialFacade;
      STEP = _InitialFacadeJs.STEP;
    }],
    execute: function () {
      cclegacy._RF.push({}, "613ecCCWNlL6bPxnJN/UPo6", "LoadPrefabCommand", undefined);

      _export("LoadPrefabCommand", LoadPrefabCommand = /*#__PURE__*/function (_SimpleCommand) {
        _inherits(LoadPrefabCommand, _SimpleCommand);

        function LoadPrefabCommand() {
          _classCallCheck(this, LoadPrefabCommand);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadPrefabCommand).apply(this, arguments));
        }

        _createClass(LoadPrefabCommand, [{
          key: "excute",
          value: function excute() {
            InitialFacade.inst.startStep(STEP.Prefab);
            PrefabFactory.inst.init(function () {
              InitialFacade.inst.step(STEP.Prefab);
            });
          }
        }]);

        return LoadPrefabCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameLoad/InitialCommand.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Command/MacroCommand.js", "./LoadAudioCommand.js", "./LoadJsonCommand.js", "./LoadMaterialCommand.js", "./LoadPrefabCommand.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, MacroCommand, LoadAudioCommand, LoadJsonCommand, LoadMaterialCommand, LoadPrefabCommand, InitialCommand;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_CommandMacroCommandJs) {
      MacroCommand = _CommandMacroCommandJs.MacroCommand;
    }, function (_LoadAudioCommandJs) {
      LoadAudioCommand = _LoadAudioCommandJs.LoadAudioCommand;
    }, function (_LoadJsonCommandJs) {
      LoadJsonCommand = _LoadJsonCommandJs.LoadJsonCommand;
    }, function (_LoadMaterialCommandJs) {
      LoadMaterialCommand = _LoadMaterialCommandJs.LoadMaterialCommand;
    }, function (_LoadPrefabCommandJs) {
      LoadPrefabCommand = _LoadPrefabCommandJs.LoadPrefabCommand;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6a508zSDOVLS6ttpTnMOX/h", "InitialCommand", undefined);

      _export("InitialCommand", InitialCommand = /*#__PURE__*/function (_MacroCommand) {
        _inherits(InitialCommand, _MacroCommand);

        function InitialCommand() {
          _classCallCheck(this, InitialCommand);

          return _possibleConstructorReturn(this, _getPrototypeOf(InitialCommand).apply(this, arguments));
        }

        _createClass(InitialCommand, [{
          key: "initializeMacroCommand",
          value: function initializeMacroCommand() {
            this.addSubCommond(LoadJsonCommand);
            this.addSubCommond(LoadAudioCommand);
            this.addSubCommond(LoadPrefabCommand);
            this.addSubCommond(LoadMaterialCommand);
          }
        }]);

        return InitialCommand;
      }(MacroCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameLoad/StartupCommand.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Model/PlayModel.js", "../Command/SimpleCommand.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, PlayModel, SimpleCommand, StartupCommand;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }, function (_CommandSimpleCommandJs) {
      SimpleCommand = _CommandSimpleCommandJs.SimpleCommand;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c41f6JIhipB8r8BSDDzyAGd", "StartupCommand", undefined);

      _export("StartupCommand", StartupCommand = /*#__PURE__*/function (_SimpleCommand) {
        _inherits(StartupCommand, _SimpleCommand);

        function StartupCommand() {
          _classCallCheck(this, StartupCommand);

          return _possibleConstructorReturn(this, _getPrototypeOf(StartupCommand).apply(this, arguments));
        }

        _createClass(StartupCommand, [{
          key: "excute",
          value: function excute() {
            console.log("start up.");
            PlayModel.inst.init();
          }
        }]);

        return StartupCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GameLoad/InitialFacade.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "../Command/Notification.js", "../Common/SDK/CelerSDK.js", "../Manager/StepManager.js", "./InitialCommand.js", "./StartupCommand.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, SingleTon, Notification, CelerSDK, StepManager, InitialCommand, StartupCommand, STEP, InitialFacade;

  _export("STEP", void 0);

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_CommandNotificationJs) {
      Notification = _CommandNotificationJs.Notification;
    }, function (_CommonSDKCelerSDKJs) {
      CelerSDK = _CommonSDKCelerSDKJs.CelerSDK;
    }, function (_ManagerStepManagerJs) {
      StepManager = _ManagerStepManagerJs.StepManager;
    }, function (_InitialCommandJs) {
      InitialCommand = _InitialCommandJs.InitialCommand;
    }, function (_StartupCommandJs) {
      StartupCommand = _StartupCommandJs.StartupCommand;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1e8bcsxRDVMVZUnFxHWDXZu", "InitialFacade", undefined);

      (function (STEP) {
        STEP["Audio"] = "Audio";
        STEP["Prefab"] = "Prefab";
        STEP["Json"] = "Json";
        STEP["Material"] = "Material";
      })(STEP || _export("STEP", STEP = {}));

      _export("InitialFacade", InitialFacade = /*#__PURE__*/function (_SingleTon) {
        _inherits(InitialFacade, _SingleTon);

        function InitialFacade() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, InitialFacade);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InitialFacade)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.stepManager = new StepManager();
          _this.notification = new Notification();
          return _this;
        }

        _createClass(InitialFacade, [{
          key: "startStep",
          value: function startStep(step) {
            this.stepManager.start(step);
          }
        }, {
          key: "register",
          value: function register() {
            var _this2 = this;

            this.notification.register(InitialFacade.INIT, InitialCommand);
            this.notification.register(InitialFacade.START, StartupCommand);

            if (InitialFacade.CelerFirst) {
              /** 先celer ready 后再加载游戏内资源 */
              CelerSDK.inst.init(function () {
                _this2.notification.sendNotification(InitialFacade.INIT, _this2);
              });
              this.stepManager.register(function () {
                _this2.notification.sendNotification(InitialFacade.START, _this2);
              }, InitialFacade.TOTAL_STEPS);
            } else {
              /** 先加载所有资源后再调用celer ready */
              CelerSDK.inst.init(function () {
                _this2.notification.sendNotification(InitialFacade.START, _this2);
              });
              this.stepManager.register(function () {
                CelerSDK.inst.celerXReady();
              }, InitialFacade.TOTAL_STEPS);
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.register();

            if (InitialFacade.CelerFirst) {
              CelerSDK.inst.celerXReady();
            } else {
              this.notification.sendNotification(InitialFacade.INIT, this);
            }
          }
        }, {
          key: "step",
          value: function step(commandName) {
            console.log(" initialization step:", commandName);
            this.stepManager.nextStep(commandName);
          }
        }]);

        return InitialFacade;
      }(SingleTon()));

      InitialFacade.INIT = "Initialization";
      InitialFacade.START = "StartUp";
      InitialFacade.CelerFirst = true;
      InitialFacade.TOTAL_STEPS = [STEP.Audio, STEP.Json, STEP.Material, STEP.Prefab];

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Manager/ResourceController.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "../Common/HashMap.js", "../GamePlay/GameRule.js"], function (_export, _context) {
  "use strict";

  var _defineProperty, _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, SingleTon, HashMap, HoleBonus, _HoleBonusSprite, Title, PauseFont, FontType, HoleBonusSprite, AnimationType, ResourceController;

  _export({
    _HoleBonusSprite: void 0,
    AnimationType: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _defineProperty = _virtual_rollupPluginBabelHelpersJs.defineProperty;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_CommonHashMapJs) {
      HashMap = _CommonHashMapJs.HashMap;
    }, function (_GamePlayGameRuleJs) {
      HoleBonus = _GamePlayGameRuleJs.HoleBonus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "badf8Fh2FtCWJXVje31ksyE", "ResourceController", undefined);

      _export("Title", Title = {
        Complete: "bg_font3",
        CompleteAni: "font_complete",
        TimeUp: "bg_font1",
        Over: "bg_font2",
        OutOfMove: "bg_font2"
      });

      _export("PauseFont", PauseFont = {
        HasFree: "bg_fontfree",
        NoneFree: "bg_fontnofree"
      });

      _export("FontType", FontType = {
        TotalScore: "totalScore",
        ResultScore: "resultScore",
        TimeWhite: "TimeWhite",
        TimeRed: "TimeRed",
        AddScore: "addScore",
        SubScore: "subScore",
        ShowScore: "showScore"
      });

      _export("HoleBonusSprite", HoleBonusSprite = (_HoleBonusSprite = {}, _defineProperty(_HoleBonusSprite, HoleBonus.x10, "font_x10yellow"), _defineProperty(_HoleBonusSprite, HoleBonus.x2, "font_x2"), _defineProperty(_HoleBonusSprite, HoleBonus.x3, "font_x3"), _defineProperty(_HoleBonusSprite, HoleBonus.x4, "font_x4"), _defineProperty(_HoleBonusSprite, HoleBonus.x6, "font_x6"), _defineProperty(_HoleBonusSprite, HoleBonus.x8, "font_x8"), _HoleBonusSprite));

      (function (AnimationType) {
        AnimationType[AnimationType["UI"] = 0] = "UI";
        AnimationType[AnimationType["GamePlay"] = 1] = "GamePlay";
      })(AnimationType || _export("AnimationType", AnimationType = {}));

      _export("ResourceController", ResourceController = /*#__PURE__*/function (_SingleTon) {
        _inherits(ResourceController, _SingleTon);

        function ResourceController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ResourceController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResourceController)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.fontMap = new HashMap();
          _this.UIAtlas = null;
          _this.ResultAtlas = null;
          _this.PauseAtlas = null;
          _this.Animations = new HashMap();
          return _this;
        }

        _createClass(ResourceController, [{
          key: "setFont",
          value: function setFont(key, font) {
            this.fontMap.add(key, font);
          }
        }, {
          key: "setAtlas",
          value: function setAtlas(atlas) {
            console.assert(atlas != null, "game atlas is null!");
            this.UIAtlas = atlas;
          }
        }, {
          key: "setResultAtlas",
          value: function setResultAtlas(atlas) {
            console.assert(atlas != null, "game atlas is null!");
            this.ResultAtlas = atlas;
          }
        }, {
          key: "setPauseAtlas",
          value: function setPauseAtlas(atlas) {
            console.assert(atlas != null, "game atlas is null!");
            this.PauseAtlas = atlas;
          }
        }, {
          key: "getTitleSprite",
          value: function getTitleSprite(name) {
            return this.UIAtlas.getSpriteFrame(name);
          }
        }, {
          key: "getResultSprite",
          value: function getResultSprite(name) {
            return this.ResultAtlas.getSpriteFrame(name);
          }
        }, {
          key: "getAltas",
          value: function getAltas(name) {
            return this.UIAtlas.getSpriteFrame(name);
          }
        }, {
          key: "getColorLine",
          value: function getColorLine(name) {
            return this.UIAtlas.getSpriteFrame(name);
          }
        }, {
          key: "getHoleBonus",
          value: function getHoleBonus(bonus) {
            return this.UIAtlas.getSpriteFrame(HoleBonusSprite[bonus]);
          }
        }, {
          key: "getPauseAtlas",
          value: function getPauseAtlas(name) {
            return this.PauseAtlas.getSpriteFrame(name);
          }
        }, {
          key: "pushAnimationAtlas",
          value: function pushAnimationAtlas(animationType, atlas) {
            console.assert(atlas != null, "animation atlas is null!");
            this.Animations.add(animationType, atlas);
          }
        }, {
          key: "getAnimationAtlas",
          value: function getAnimationAtlas(animationType, name) {
            return this.Animations.get(animationType).getSpriteFrame(name);
          }
        }, {
          key: "getAddScoreFont",
          value: function getAddScoreFont() {
            return this.fontMap.get(FontType.AddScore);
          }
        }, {
          key: "getSubScoreFont",
          value: function getSubScoreFont() {
            return this.fontMap.get(FontType.SubScore);
          }
        }, {
          key: "getSoundDisabled",
          value: function getSoundDisabled() {
            return this.PauseAtlas.getSpriteFrame("btn_nosound");
          }
        }, {
          key: "getSoundEnable",
          value: function getSoundEnable() {
            return this.PauseAtlas.getSpriteFrame("btn_sound");
          }
        }, {
          key: "getPauseFont",
          value: function getPauseFont(name) {
            return this.PauseAtlas.getSpriteFrame(name);
          }
        }, {
          key: "getTimeRedFont",
          value: function getTimeRedFont() {
            return this.fontMap.get(FontType.TimeRed);
          }
        }, {
          key: "getTimeWhiteFont",
          value: function getTimeWhiteFont() {
            return this.fontMap.get(FontType.TimeWhite);
          }
        }]);

        return ResourceController;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///App/App.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Model/PlayModel.js", "../GameLoad/InitialFacade.js", "../Manager/ResourceController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Material, SpriteAtlas, Node, PhysicsSystem, v3, Component, PlayModel, InitialFacade, ResourceController, AnimationType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp, ccclass, property, App;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Material = _cc.Material;
      SpriteAtlas = _cc.SpriteAtlas;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      v3 = _cc.v3;
      Component = _cc.Component;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }, function (_GameLoadInitialFacadeJs) {
      InitialFacade = _GameLoadInitialFacadeJs.InitialFacade;
    }, function (_ManagerResourceControllerJs) {
      ResourceController = _ManagerResourceControllerJs.ResourceController;
      AnimationType = _ManagerResourceControllerJs.AnimationType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "95f2biD1FxLxYns3Xsv3c7f", "App", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("App", App = (_dec = ccclass("App"), _dec2 = property(Material), _dec3 = property(SpriteAtlas), _dec4 = property(SpriteAtlas), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(App, _Component);

        function App() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, App);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "Test", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UI", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Effect", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "HeartIcon", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(App, [{
          key: "start",
          value: function start() {
            App.HeartIcon = this.HeartIcon;
            App.Material = this.Test;
            InitialFacade.inst.start();
            PhysicsSystem.instance.enable = true;
            PhysicsSystem.instance.allowSleep = true;
            PhysicsSystem.instance.maxSubSteps = 0.01;
            PhysicsSystem.instance.fixedTimeStep = 1 / 180;
            PhysicsSystem.instance.gravity = v3(0, -500, 0);
            ResourceController.inst.setAtlas(this.UI);
            ResourceController.inst.setPauseAtlas(this.UI);
            ResourceController.inst.pushAnimationAtlas(AnimationType.UI, this.Effect);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            PlayModel.inst.addGameTime(-deltaTime);
          }
        }]);

        return App;
      }(Component), _class3.Material = null, _class3.HeartIcon = null, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Test", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "UI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Effect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "HeartIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///table.js", ["cc"], function (_export, _context) {
  "use strict";

  var cclegacy, Balls_ID, En_ID, En_View, Level_Balls, Level_IsRandom, Physical_ID;

  _export({
    Balls_ID: void 0,
    En_ID: void 0,
    En_View: void 0,
    Level_Balls: void 0,
    Level_IsRandom: void 0,
    Physical_ID: void 0
  });

  return {
    setters: [function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f46ed9tWlVM2L8/jLLZl+K3", "table", undefined);
      /**
      * 导出表自动生成的表数据声明
      */

      /** Balls的球*/


      (function (Balls_ID) {
        Balls_ID[Balls_ID["BaiQiu"] = 1] = "BaiQiu";
        Balls_ID[Balls_ID["LanQiu"] = 2] = "LanQiu";
        Balls_ID[Balls_ID["LvQiu"] = 3] = "LvQiu";
        Balls_ID[Balls_ID["HongQiu"] = 4] = "HongQiu";
        Balls_ID[Balls_ID["ZiQiu"] = 5] = "ZiQiu";
        Balls_ID[Balls_ID["DanLanQiu"] = 6] = "DanLanQiu";
        Balls_ID[Balls_ID["DanZiQiu"] = 7] = "DanZiQiu";
        Balls_ID[Balls_ID["HeiQiu"] = 8] = "HeiQiu";
        Balls_ID[Balls_ID["HuangQiu"] = 9] = "HuangQiu";
      })(Balls_ID || _export("Balls_ID", Balls_ID = {}));
      /** en的文本内容类型*/


      (function (En_ID) {
        En_ID[En_ID["MianFeiZanTing"] = 1] = "MianFeiZanTing";
        En_ID[En_ID["ZanTingKouFen"] = 2] = "ZanTingKouFen";
        En_ID[En_ID["DeFen"] = 4] = "DeFen";
        En_ID[En_ID["JiQiuDianXuanQu"] = 5] = "JiQiuDianXuanQu";
        En_ID[En_ID["BangZhuYeMian1"] = 100] = "BangZhuYeMian1";
        En_ID[En_ID["BangZhuYeMian2"] = 101] = "BangZhuYeMian2";
      })(En_ID || _export("En_ID", En_ID = {}));
      /** en的界面*/


      (function (En_View) {
        En_View[En_View["ZanTingJieMian"] = 1] = "ZanTingJieMian";
        En_View[En_View["BangZhuJieMian"] = 2] = "BangZhuJieMian";
        En_View[En_View["GuangGaoJieMian"] = 3] = "GuangGaoJieMian";
        En_View[En_View["JieSuanJieMian"] = 4] = "JieSuanJieMian";
        En_View[En_View["XinShouZhiYin"] = 5] = "XinShouZhiYin";
        En_View[En_View["JiQiuDianJieMian"] = 6] = "JiQiuDianJieMian";
      })(En_View || _export("En_View", En_View = {}));
      /** Level的球*/


      (function (Level_Balls) {
        Level_Balls[Level_Balls["BaiQiu"] = 1] = "BaiQiu";
        Level_Balls[Level_Balls["LanQiu"] = 2] = "LanQiu";
        Level_Balls[Level_Balls["LvQiu"] = 3] = "LvQiu";
        Level_Balls[Level_Balls["HongQiu"] = 4] = "HongQiu";
        Level_Balls[Level_Balls["ZiQiu"] = 5] = "ZiQiu";
        Level_Balls[Level_Balls["DanLanQiu"] = 6] = "DanLanQiu";
        Level_Balls[Level_Balls["DanZiQiu"] = 7] = "DanZiQiu";
        Level_Balls[Level_Balls["HeiQiu"] = 8] = "HeiQiu";
        Level_Balls[Level_Balls["HuangQiu"] = 9] = "HuangQiu";
      })(Level_Balls || _export("Level_Balls", Level_Balls = {}));
      /** Level的是否随机摆放*/


      (function (Level_IsRandom) {
        Level_IsRandom[Level_IsRandom["Shi"] = 1] = "Shi";
        Level_IsRandom[Level_IsRandom["Fou"] = 2] = "Fou";
      })(Level_IsRandom || _export("Level_IsRandom", Level_IsRandom = {}));
      /** Physical的材质*/


      (function (Physical_ID) {
        Physical_ID[Physical_ID["Qiu"] = 100] = "Qiu";
        Physical_ID[Physical_ID["ZhuoMian"] = 101] = "ZhuoMian";
        Physical_ID[Physical_ID["QiuGan"] = 102] = "QiuGan";
        Physical_ID[Physical_ID["ZhuoBian"] = 103] = "ZhuoBian";
        Physical_ID[Physical_ID["FangZhiTiaoQiuDangBan"] = 104] = "FangZhiTiaoQiuDangBan";
      })(Physical_ID || _export("Physical_ID", Physical_ID = {}));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Model/BallModel.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/Signal.js", "../GameLogic.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, v3, BaseSignal, NextRountSignal, BallCreatedSignal, BallRemoveSignal, BallModel;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      v3 = _cc.v3;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_GameLogicJs) {
      NextRountSignal = _GameLogicJs.NextRountSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4482cbhIlJL4puxhbFfG59V", "BallModel", undefined);

      _export("BallCreatedSignal", BallCreatedSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(BallCreatedSignal, _BaseSignal);

        function BallCreatedSignal() {
          _classCallCheck(this, BallCreatedSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(BallCreatedSignal).apply(this, arguments));
        }

        return BallCreatedSignal;
      }(BaseSignal));

      _export("BallRemoveSignal", BallRemoveSignal = /*#__PURE__*/function (_BaseSignal2) {
        _inherits(BallRemoveSignal, _BaseSignal2);

        function BallRemoveSignal() {
          _classCallCheck(this, BallRemoveSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(BallRemoveSignal).apply(this, arguments));
        }

        return BallRemoveSignal;
      }(BaseSignal));

      _export("BallModel", BallModel = /*#__PURE__*/function () {
        function BallModel(type, materialName, point, position) {
          var _this = this;

          _classCallCheck(this, BallModel);

          this.id = "";
          this.materialName = "";
          this.point = 0;
          this.position = v3(0, 0, 0);
          this.ballType = null;
          this.isHitWhite = false;
          this.hitBorderCount = 0;
          this.hitBallCount = 0;
          this.ballType = type;
          this.point = point;
          this.materialName = materialName;
          this.position = position;
          this.id = "point:" + point + "-material:" + materialName + "-count:" + BallModel.objID++;
          BallCreatedSignal.inst.dispatch(this);
          NextRountSignal.inst.addListener(function () {
            _this.hitBallCount = 0;
            _this.hitBorderCount = 0;
            _this.isHitWhite = false;
          }, this);
        }

        _createClass(BallModel, [{
          key: "hitBall",
          value: function hitBall(model) {
            if (model.isWhiteBall) {
              this.isHitWhite = true;
            }

            this.hitBallCount++;
          }
        }, {
          key: "hitBorder",
          value: function hitBorder() {
            if (this.isWhiteBall) {
              if (this.hitBallCount <= 0) {
                this.hitBorderCount++;
              }
            } else {
              this.hitBorderCount++;
            }
          }
        }, {
          key: "syncPosition",
          value: function syncPosition(position) {
            this.position = position;
          }
        }, {
          key: "removeSelf",
          value: function removeSelf() {
            BallRemoveSignal.inst.dispatch(this);
            NextRountSignal.inst.removeTarget(this);
          }
        }, {
          key: "Type",
          get: function get() {
            return this.ballType;
          }
        }, {
          key: "ID",
          get: function get() {
            return this.id;
          }
        }, {
          key: "Material",
          get: function get() {
            return this.materialName;
          }
        }, {
          key: "Point",
          get: function get() {
            return this.point;
          }
        }, {
          key: "Position",
          get: function get() {
            return this.position;
          }
        }, {
          key: "isWhiteBall",
          get: function get() {
            return this.point == 0;
          }
        }]);

        return BallModel;
      }());

      BallModel.objID = 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/BaseView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Vec3, tween, v3, Component, _dec, _class, ccclass, property, BaseView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      v3 = _cc.v3;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7db6dkYS3xMfZur7pasav48", "BaseView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BaseView", BaseView = (_dec = ccclass("BaseView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(BaseView, _Component);

        function BaseView() {
          _classCallCheck(this, BaseView);

          return _possibleConstructorReturn(this, _getPrototypeOf(BaseView).apply(this, arguments));
        }

        _createClass(BaseView, [{
          key: "onLoad",
          value: function onLoad() {
            this.node.setScale(Vec3.ZERO);
          }
        }, {
          key: "Show",
          value: function Show(callback) {
            this.node.active = true;
            tween(this.node).sequence(tween(this.node).to(0.1, {
              scale: v3(1, 1, 1)
            }), tween(this.node).call(function () {
              callback && callback();
            })).start();
          }
        }, {
          key: "Hide",
          value: function Hide(callback) {
            var _this = this;

            tween(this.node).sequence(tween(this.node).to(0.1, {
              scale: Vec3.ZERO
            }), tween(this.node).call(function () {
              _this.node.active = false;

              if (callback && typeof callback == "function") {
                callback();
              }
            })).start();
          }
        }, {
          key: "OnClick",
          value: function OnClick() {}
        }, {
          key: "BindMedaitor",
          value: function BindMedaitor(type) {
            if (this.node.getComponent(type)) {
              console.warn(" this node already has the same component..");
              return;
            }

            var comp = this.node.addComponent(type);
            if (comp["bind"]) comp["bind"](this);

            if (comp["onRegister"]) {
              comp["onRegister"]();
            }

            return comp;
          }
        }, {
          key: "UnbindMedaitor",
          value: function UnbindMedaitor(type) {
            var comp = this.node.getComponent(type);

            if (!comp) {
              console.warn(" component already removed..");
              return;
            }

            if (comp["onUnregister"]) {
              comp["onUnregister"]();
            }

            if (comp["bind"]) comp["bind"](null);
            comp.destroy();
          }
        }]);

        return BaseView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/PointTouchView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/Signal.js", "../../Signal/Signal.js", "../../Manager/GameStateController.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Node, Component, BaseSignal, ButtonClickSignal, GameStateController, _dec, _class, ccclass, property, PointTouchSignal, PointTouchView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Component = _cc.Component;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_SignalSignalJs) {
      ButtonClickSignal = _SignalSignalJs.ButtonClickSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "11a7cECazxDMJqSf5K3w0pA", "PointTouchView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /** 打开击球点界面 */

      _export("PointTouchSignal", PointTouchSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(PointTouchSignal, _BaseSignal);

        function PointTouchSignal() {
          _classCallCheck(this, PointTouchSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(PointTouchSignal).apply(this, arguments));
        }

        return PointTouchSignal;
      }(BaseSignal));

      _export("PointTouchView", PointTouchView = (_dec = ccclass("PointTouchView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(PointTouchView, _Component);

        function PointTouchView() {
          _classCallCheck(this, PointTouchView);

          return _possibleConstructorReturn(this, _getPrototypeOf(PointTouchView).apply(this, arguments));
        }

        _createClass(PointTouchView, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.node.on(Node.EventType.TOUCH_END, function () {
              ButtonClickSignal.inst.dispatch();
              if (!GameStateController.inst.canInteractive()) return;
              PointTouchSignal.inst.dispatch();
            }, this);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return PointTouchView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/HitPointLayer.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/Signal.js", "../../Signal/Signal.js", "../../Manager/GameStateController.js", "../../table.js", "../../Common/View/BaseView.js", "./PointTouchView.js", "../GameObject/Pole.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Node, UITransform, v3, math, Vec3, RichText, BaseSignal, GameReadySignal, GameOverSignal, GameStateController, En_View, En_ID, BaseView, PointTouchSignal, Pole, _dec, _class, ccclass, property, UpdateShotCenterSignal, HitPointLayer;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      math = _cc.math;
      Vec3 = _cc.Vec3;
      RichText = _cc.RichText;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_SignalSignalJs) {
      GameReadySignal = _SignalSignalJs.GameReadySignal;
      GameOverSignal = _SignalSignalJs.GameOverSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_tableJs) {
      En_View = _tableJs.En_View;
      En_ID = _tableJs.En_ID;
    }, function (_CommonViewBaseViewJs) {
      BaseView = _CommonViewBaseViewJs.BaseView;
    }, function (_PointTouchViewJs) {
      PointTouchSignal = _PointTouchViewJs.PointTouchSignal;
    }, function (_GameObjectPoleJs) {
      Pole = _GameObjectPoleJs.Pole;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cce11My0pFIL7wxtfg7lMSW", "HitPointLayer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /** 更新击球中心点 */

      _export("UpdateShotCenterSignal", UpdateShotCenterSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(UpdateShotCenterSignal, _BaseSignal);

        function UpdateShotCenterSignal() {
          _classCallCheck(this, UpdateShotCenterSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(UpdateShotCenterSignal).apply(this, arguments));
        }

        return UpdateShotCenterSignal;
      }(BaseSignal));

      _export("HitPointLayer", HitPointLayer = (_dec = ccclass("HitPointLayer"), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inherits(HitPointLayer, _BaseView);

        function HitPointLayer() {
          _classCallCheck(this, HitPointLayer);

          return _possibleConstructorReturn(this, _getPrototypeOf(HitPointLayer).apply(this, arguments));
        }

        _createClass(HitPointLayer, [{
          key: "start",
          value: function start() {
            var _this = this; // Your initialization goes here.


            this.Confirm.on(Node.EventType.TOUCH_END, function () {
              _this.Hide(function () {
                GameStateController.inst.resume();
              });
            }, this);
            GameReadySignal.inst.addListener(function () {
              _this.Content.string = lan.t(En_View.JiQiuDianJieMian, En_ID.JiQiuDianXuanQu);
            }, this);
            this.Point.on(Node.EventType.TOUCH_MOVE, this.onAdjustPoint, this);
            GameOverSignal.inst.addListener(this.Hide, this);
            PointTouchSignal.inst.addListener(function () {
              _this.Show();

              GameStateController.inst.pause(true);
              var radius = _this.Ball.getComponent(UITransform).contentSize.width / 2;
              var pointRadius = _this.Point.getComponent(UITransform).contentSize.width / 2;

              _this.Point.setPosition(v3((radius - pointRadius) * Pole.HitPoint.x, (radius - pointRadius) * Pole.HitPoint.y, 0));
            }, this);
          }
        }, {
          key: "onAdjustPoint",
          value: function onAdjustPoint(e) {
            var power = 0;
            this.Point.translate(v3(e.getDeltaX(), e.getDeltaY(), 0));
            var radius = this.Ball.getComponent(UITransform).contentSize.width / 2;
            var pointRadius = this.Point.getChildByName("bg_redpoint").getComponent(UITransform).contentSize.width / 2;
            var radian = math.Vec3.angle(v3(1, 0, 0), v3(this.Point.position.x, 0, -this.Point.position.y));
            var factor = this.Point.position.y > 0 ? 1 : -1;

            if (Vec3.distance(this.Point.position, v3()) > radius - pointRadius) {
              this.Point.setPosition(v3((radius - pointRadius) * Math.cos(radian), (radius - pointRadius) * Math.sin(radian) * factor, 0));
            }

            power = Vec3.distance(this.Point.position, v3()) / (radius - pointRadius);
            Pole.HitPoint.set(Math.abs(this.Point.position.x) / this.Point.position.x * power * Math.abs(Math.cos(radian)), Math.abs(this.Point.position.y) / this.Point.position.y * power * Math.abs(Math.sin(radian)), 0);
            UpdateShotCenterSignal.inst.dispatch();
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "Ball",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          get: function get() {
            return this.node.getChildByName("Ball");
          }
        }, {
          key: "Point",
          get: function get() {
            return this.Ball.getChildByName("Point");
          }
        }, {
          key: "Content",
          get: function get() {
            return this.node.getChildByName("Content").getComponent(RichText);
          }
        }, {
          key: "Confirm",
          get: function get() {
            return this.node.getChildByName("bg_btnbackcon").getChildByName("btn_confirm");
          }
        }]);

        return HitPointLayer;
      }(BaseView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/MainUI.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/Signal.js", "../../Manager/GameStateController.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Node, Component, BaseSignal, GameStateController, _dec, _class, _temp, ccclass, property, RotationPoleSignal, MainUI;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Component = _cc.Component;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7bf3erfTGdJMKrA3iroTyrQ", "MainUI", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("RotationPoleSignal", RotationPoleSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(RotationPoleSignal, _BaseSignal);

        function RotationPoleSignal() {
          _classCallCheck(this, RotationPoleSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(RotationPoleSignal).apply(this, arguments));
        }

        return RotationPoleSignal;
      }(BaseSignal));

      _export("MainUI", MainUI = (_dec = ccclass("MainUI"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainUI, _Component);

        function MainUI() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainUI);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainUI)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.scale = 1;
          return _this;
        }

        _createClass(MainUI, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
          }
        }, {
          key: "onTouchMoved",
          value: function onTouchMoved(e) {
            if (GameStateController.inst.canInteractive()) {
              RotationPoleSignal.inst.dispatch(this.scale * e.getDeltaX());
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return MainUI;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/PoleTouchView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/Signal.js", "../../Manager/GameStateController.js"], function (_export, _context) {
  "use strict";

  var _inherits, _applyDecoratedDescriptor, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, ProgressBar, Node, v3, Tween, tween, Component, BaseSignal, GameStateController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, ReleasePoleSignal, PowerUpdateSignal, PoleTouchView;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      ProgressBar = _cc.ProgressBar;
      Node = _cc.Node;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      tween = _cc.tween;
      Component = _cc.Component;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c2757lDIexI66p7yhsdSvel", "PoleTouchView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ReleasePoleSignal", ReleasePoleSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(ReleasePoleSignal, _BaseSignal);

        function ReleasePoleSignal() {
          _classCallCheck(this, ReleasePoleSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ReleasePoleSignal).apply(this, arguments));
        }

        return ReleasePoleSignal;
      }(BaseSignal));

      _export("PowerUpdateSignal", PowerUpdateSignal = /*#__PURE__*/function (_BaseSignal2) {
        _inherits(PowerUpdateSignal, _BaseSignal2);

        function PowerUpdateSignal() {
          _classCallCheck(this, PowerUpdateSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(PowerUpdateSignal).apply(this, arguments));
        }

        return PowerUpdateSignal;
      }(BaseSignal));

      _export("PoleTouchView", PoleTouchView = (_dec = ccclass("PoleTouchView"), _dec2 = property(ProgressBar), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(PoleTouchView, _Component);

        function PoleTouchView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PoleTouchView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PoleTouchView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "PowerBar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Pole", _descriptor2, _assertThisInitialized(_this));

          _this.startY = 0;
          _this.endY = -602.359;
          _this.scale = 1.2;
          return _this;
        }

        _createClass(PoleTouchView, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.PowerBar.progress = 0;
            this.startY = this.Pole.position.y;
            this.node.on(Node.EventType.TOUCH_START, this.onStart, this);
            this.node.on(Node.EventType.TOUCH_CANCEL, this.onEnd, this);
            this.node.on(Node.EventType.TOUCH_END, this.onEnd, this);
            this.node.on(Node.EventType.TOUCH_MOVE, this.onMove, this);
          }
        }, {
          key: "onMove",
          value: function onMove(ev) {
            if (!GameStateController.inst.canInteractive()) return;
            var offset = ev.getDeltaY() * this.scale;

            if (this.Pole.position.y + offset <= this.endY) {
              offset = this.endY - this.Pole.position.y;
            }

            if (offset + this.Pole.position.y >= this.startY) {
              offset = this.startY - this.Pole.position.y;
            }

            this.Pole.translate(v3(0, offset, 0));
            this.PowerBar.progress = (this.Pole.position.y - this.startY) / (this.endY - this.startY);
            PowerUpdateSignal.inst.dispatch(this.PowerBar.progress);
          }
        }, {
          key: "onStart",
          value: function onStart(ev) {
            Tween.stopAllByTarget(this.Pole);
          }
        }, {
          key: "onEnd",
          value: function onEnd(ev) {
            if (!GameStateController.inst.canInteractive()) return;
            ReleasePoleSignal.inst.dispatch(this.PowerBar.progress);
            tween(this.Pole).to(0.05, {
              position: v3(this.Pole.position.x, this.startY, this.Pole.position.z)
            }, {
              easing: "bounceInOut"
            }).start();
            this.PowerBar.progress = 0;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return PoleTouchView;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PowerBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Pole", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameObject/Pole.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/Signal.js", "../../Signal/Signal.js", "../../Manager/GameStateController.js", "../UI/HitPointLayer.js", "../UI/MainUI.js", "../UI/PoleTouchView.js", "./BallRoot.js", "../GameLogic.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, v3, Tween, tween, Component, BaseSignal, ShotSignal, GameStateController, UpdateShotCenterSignal, RotationPoleSignal, PowerUpdateSignal, ReleasePoleSignal, BallRoot, NextRountSignal, PoleRotationInitSignal, _dec, _class, _class2, _temp, ccclass, property, InitPolePositionSignal, UpdateShotLineSignal, Pole;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      tween = _cc.tween;
      Component = _cc.Component;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_SignalSignalJs) {
      ShotSignal = _SignalSignalJs.ShotSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_UIHitPointLayerJs) {
      UpdateShotCenterSignal = _UIHitPointLayerJs.UpdateShotCenterSignal;
    }, function (_UIMainUIJs) {
      RotationPoleSignal = _UIMainUIJs.RotationPoleSignal;
    }, function (_UIPoleTouchViewJs) {
      PowerUpdateSignal = _UIPoleTouchViewJs.PowerUpdateSignal;
      ReleasePoleSignal = _UIPoleTouchViewJs.ReleasePoleSignal;
    }, function (_BallRootJs) {
      BallRoot = _BallRootJs.BallRoot;
    }, function (_GameLogicJs) {
      NextRountSignal = _GameLogicJs.NextRountSignal;
      PoleRotationInitSignal = _GameLogicJs.PoleRotationInitSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e736e0YY8tBZbv/zxVEs5wF", "Pole", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /** 击球 */

      _export("InitPolePositionSignal", InitPolePositionSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(InitPolePositionSignal, _BaseSignal);

        function InitPolePositionSignal() {
          _classCallCheck(this, InitPolePositionSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(InitPolePositionSignal).apply(this, arguments));
        }

        return InitPolePositionSignal;
      }(BaseSignal));

      _export("UpdateShotLineSignal", UpdateShotLineSignal = /*#__PURE__*/function (_BaseSignal2) {
        _inherits(UpdateShotLineSignal, _BaseSignal2);

        function UpdateShotLineSignal() {
          _classCallCheck(this, UpdateShotLineSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(UpdateShotLineSignal).apply(this, arguments));
        }

        return UpdateShotLineSignal;
      }(BaseSignal));

      _export("Pole", Pole = (_dec = ccclass("Pole"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inherits(Pole, _Component);

        function Pole() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Pole);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pole)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.defaultZ = 0;
          _this.MaxOffset = 3;
          return _this;
        }

        _createClass(Pole, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.defaultZ = this.Pole.position.z; // Your initialization goes here.

            RotationPoleSignal.inst.addListener(this.onRotation, this);
            PowerUpdateSignal.inst.addListener(this.onPowerUpdate, this);
            ReleasePoleSignal.inst.addListener(this.onPoleRelease, this);
            NextRountSignal.inst.addListener(this.onFollowWhiteBall, this);
            PoleRotationInitSignal.inst.addListener(function (rotation) {
              _this2.node.setRotationFromEuler(0, rotation, 0);

              Pole.PoleForward = _this2.node.forward.clone();
            }, this);
            InitPolePositionSignal.inst.addListener(function (position) {
              _this2.node.active = true;

              _this2.node.setPosition(v3(position.x, _this2.node.position.y, position.z));

              Pole.PoleForward = _this2.node.forward.clone();
              var rotation = v3(0, 0, 0);

              _this2.node.rotation.getEulerAngles(rotation);

              UpdateShotLineSignal.inst.dispatch(rotation);
            }, this);
          }
        }, {
          key: "onFollowWhiteBall",
          value: function onFollowWhiteBall() {
            Pole.HitPoint.set(0, 0, 0);
            UpdateShotCenterSignal.inst.dispatch();

            if (BallRoot.WhiteBall) {
              this.node.active = true;
              Pole.PoleForward = this.node.forward.clone();
              var rotation = v3(0, 0, 0);
              this.node.rotation.getEulerAngles(rotation);
              UpdateShotLineSignal.inst.dispatch(rotation);
              this.node.setPosition(v3(BallRoot.WhiteBall.position.x, this.node.position.y, BallRoot.WhiteBall.position.z));
            } else {
              console.error(" White Ball invaild.");
            }
          }
        }, {
          key: "onRotation",
          value: function onRotation(step, fromLine) {
            if (!this.node.active) return;
            var rotation = v3(0, 0, 0);
            this.node.rotation.getEulerAngles(rotation);

            if (fromLine) {
              this.node.setRotationFromEuler(0, rotation.y - step, 0);
            } else {
              this.node.setRotationFromEuler(0, rotation.y + step, 0);
            }

            Pole.PoleForward = this.node.forward.clone();
            this.node.rotation.getEulerAngles(rotation);
            UpdateShotLineSignal.inst.dispatch(rotation);
          }
        }, {
          key: "onPoleRelease",
          value: function onPoleRelease(power) {
            var _this3 = this;

            if (!this.node.active) return;
            if (power <= 0) return;
            Tween.stopAllByTarget(this.Pole);
            var time = Math.abs(this.Pole.position.z - this.defaultZ) / 60;
            time /= power;
            tween(this.Pole).to(time, {
              position: v3(this.Pole.position.x, this.Pole.position.y, this.defaultZ)
            }, {
              easing: "bounceIn"
            }).start();
            this.scheduleOnce(function () {
              _this3.Shot(power);
            }, time);
          }
        }, {
          key: "onPowerUpdate",
          value: function onPowerUpdate(power) {
            if (!this.node.active) return;
            Tween.stopAllByTarget(this.Pole);
            this.Pole.setPosition(this.Pole.position.x, this.Pole.position.y, this.defaultZ + (this.MaxOffset - this.defaultZ) * power);
          }
        }, {
          key: "Shot",
          value: function Shot(power) {
            var rotation = v3(0, 0, 0);
            this.node.rotation.getEulerAngles(rotation);
            ShotSignal.inst.dispatch(power, rotation.y, this.node.forward);
            GameStateController.inst.pause(true);
            this.Hide();
          }
        }, {
          key: "Hide",
          value: function Hide() {
            var _this4 = this;

            this.scheduleOnce(function () {
              _this4.node.active = false;
            }, 0.1);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "Pole",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          get: function get() {
            return this.node.getChildByName("PoleObject");
          }
        }]);

        return Pole;
      }(Component), _class2.PoleForward = v3(0, 0, 0), _class2.HitNormal = null, _class2.HitPoint = v3(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameObject/BallRoot.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/HashMap.js", "../../Signal/Signal.js", "../../Factory/PrefabFactory.js", "../Model/BallModel.js", "./Pole.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, v3, Component, HashMap, GamePrepareSignal, PrefabFactory, BallCreatedSignal, BallRemoveSignal, InitPolePositionSignal, _dec, _class, _class2, _temp, ccclass, property, BallRoot;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      Component = _cc.Component;
    }, function (_CommonHashMapJs) {
      HashMap = _CommonHashMapJs.HashMap;
    }, function (_SignalSignalJs) {
      GamePrepareSignal = _SignalSignalJs.GamePrepareSignal;
    }, function (_FactoryPrefabFactoryJs) {
      PrefabFactory = _FactoryPrefabFactoryJs.PrefabFactory;
    }, function (_ModelBallModelJs) {
      BallCreatedSignal = _ModelBallModelJs.BallCreatedSignal;
      BallRemoveSignal = _ModelBallModelJs.BallRemoveSignal;
    }, function (_PoleJs) {
      InitPolePositionSignal = _PoleJs.InitPolePositionSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "25e7e93IY9NBb1/s/V6XKPA", "BallRoot", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BallRoot", BallRoot = (_dec = ccclass("BallRoot"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inherits(BallRoot, _Component);

        function BallRoot() {
          _classCallCheck(this, BallRoot);

          return _possibleConstructorReturn(this, _getPrototypeOf(BallRoot).apply(this, arguments));
        }

        _createClass(BallRoot, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            var _this = this; // Your initialization goes here.


            GamePrepareSignal.inst.addListener(function () {
              _this.node.removeAllChildren();
            }, this);
            BallCreatedSignal.inst.addListener(this.onBallCreate, this);
            BallRemoveSignal.inst.addListener(this.onBallRemove, this);
          }
        }, {
          key: "onBallCreate",
          value: function onBallCreate(ballModel) {
            var ball = PrefabFactory.inst.getObj("Ball", ballModel);
            ball.setRotationFromEuler(0, 180, 0);
            ball.setPosition(ballModel.Position.add(v3(0, 0, 0)));
            ball.name = ballModel.ID;
            this.node.addChild(ball);

            if (ballModel.isWhiteBall) {
              BallRoot.WhiteBall = ball;
              InitPolePositionSignal.inst.dispatch(ballModel.Position);
            }
          }
        }, {
          key: "onBallRemove",
          value: function onBallRemove(ballModel) {
            var ball = this.node.getChildByName(ballModel.ID);

            if (ball) {
              PrefabFactory.inst.putObj("Ball", ball);
            }
          }
        }, {
          key: "update",
          value: function update(deltaTime) {}
        }]);

        return BallRoot;
      }(Component), _class2.WhiteBall = null, _class2.Balls = new HashMap(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Physics/BorderCollider.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/Signal.js", "../../Signal/Signal.js", "../../TableManager.js", "../../table.js"], function (_export, _context) {
  "use strict";

  var _inherits, _applyDecoratedDescriptor, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, MeshRenderer, PhysicsSystem, BoxCollider, Component, BaseSignal, GameReadySignal, TableManager, Physical_ID, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, BorderType, HoleName, HitBorderSignal, BorderCollider;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0,
    BorderType: void 0,
    HoleName: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      MeshRenderer = _cc.MeshRenderer;
      PhysicsSystem = _cc.PhysicsSystem;
      BoxCollider = _cc.BoxCollider;
      Component = _cc.Component;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_SignalSignalJs) {
      GameReadySignal = _SignalSignalJs.GameReadySignal;
    }, function (_TableManagerJs) {
      TableManager = _TableManagerJs.TableManager;
    }, function (_tableJs) {
      Physical_ID = _tableJs.Physical_ID;
    }],
    execute: function () {
      cclegacy._RF.push({}, "55f56Brk8pF25oXmG1eiGdC", "BorderCollider", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      /** 顺时针 */
      (function (BorderType) {
        BorderType[BorderType["Border"] = 0] = "Border";
        BorderType[BorderType["Floor"] = 1] = "Floor";
        BorderType[BorderType["Up"] = 2] = "Up";
        BorderType[BorderType["HoleBorder"] = 3] = "HoleBorder";
        BorderType[BorderType["HoleChecker"] = 4] = "HoleChecker";
      })(BorderType || _export("BorderType", BorderType = {}));

      (function (HoleName) {
        HoleName[HoleName["TopLeft"] = 0] = "TopLeft";
        HoleName[HoleName["TopRight"] = 1] = "TopRight";
        HoleName[HoleName["MidRight"] = 2] = "MidRight";
        HoleName[HoleName["BotRight"] = 3] = "BotRight";
        HoleName[HoleName["BotLeft"] = 4] = "BotLeft";
        HoleName[HoleName["MidLeft"] = 5] = "MidLeft";
      })(HoleName || _export("HoleName", HoleName = {}));

      _export("HitBorderSignal", HitBorderSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(HitBorderSignal, _BaseSignal);

        function HitBorderSignal() {
          _classCallCheck(this, HitBorderSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(HitBorderSignal).apply(this, arguments));
        }

        return HitBorderSignal;
      }(BaseSignal));

      _export("BorderCollider", BorderCollider = (_dec = ccclass("BorderCollider"), _dec2 = property({
        type: Enum(BorderType)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(BorderCollider, _Component);

        function BorderCollider() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BorderCollider);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BorderCollider)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          _this.Pocket = null;
          return _this;
        }

        _createClass(BorderCollider, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            var meshRender = this.getComponent(MeshRenderer);

            if (meshRender) {
              meshRender.destroy(); // meshRender.setMaterial(App.Material, 0);
            }

            GameReadySignal.inst.addListener(this.onReady, this);
          }
        }, {
          key: "onReady",
          value: function onReady() {
            if (this.type == BorderType.HoleChecker) {
              this.Pocket = HoleName[this.node.name];
              return;
            }

            if (this.BoxCollider.material == null) {
              this.BoxCollider.material = PhysicsSystem.instance.defaultMaterial;
            }

            switch (this.type) {
              /** 桌子边界  */
              case BorderType.Border:
                var physicZhuomian = TableManager.inst.getPhysical(Physical_ID.ZhuoBian);
                this.BoxCollider.material.friction = physicZhuomian.Friction;
                this.BoxCollider.material.restitution = physicZhuomian.Restitution;
                this.BoxCollider.material.rollingFriction = physicZhuomian.RollingFriction;
                this.BoxCollider.material.spinningFriction = physicZhuomian.SpinningFriction;
                break;

              /** 桌底板 */

              case BorderType.Floor:
                var physicFloor = TableManager.inst.getPhysical(Physical_ID.ZhuoMian);
                this.BoxCollider.material.friction = physicFloor.Friction;
                this.BoxCollider.material.restitution = physicFloor.Restitution;
                this.BoxCollider.material.rollingFriction = physicFloor.RollingFriction;
                this.BoxCollider.material.spinningFriction = physicFloor.SpinningFriction;
                break;

              /** 洞的边界 */

              case BorderType.HoleBorder:
                var physicFloo2r = TableManager.inst.getPhysical(Physical_ID.ZhuoMian);
                this.BoxCollider.material.friction = physicFloo2r.Friction;
                this.BoxCollider.material.restitution = physicFloo2r.Restitution;
                this.BoxCollider.material.rollingFriction = physicFloo2r.RollingFriction;
                this.BoxCollider.material.spinningFriction = physicFloo2r.SpinningFriction;
                break;

              /** 防止跳球的挡板 */

              case BorderType.Up:
                var physicUp = TableManager.inst.getPhysical(Physical_ID.FangZhiTiaoQiuDangBan);
                this.BoxCollider.material.friction = physicUp.Friction;
                this.BoxCollider.material.restitution = physicUp.Restitution;
                this.BoxCollider.material.rollingFriction = physicUp.RollingFriction;
                this.BoxCollider.material.spinningFriction = physicUp.SpinningFriction;
                break;

              default:
                break;
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "BoxCollider",
          get: function get() {
            return this.getComponent(BoxCollider);
          }
        }]);

        return BorderCollider;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BorderType.Border;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/SpriteUIAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelper, cclegacy, _decorator, Sprite, SpriteAtlas, tween, color, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _temp, ccclass, property, requireComponent, SpriteUIAnimation;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      tween = _cc.tween;
      color = _cc.color;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e164eQEBcdG/IpNLtTPyZj7", "SpriteUIAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      requireComponent = _decorator.requireComponent;

      _export("SpriteUIAnimation", SpriteUIAnimation = (_dec = ccclass("SpriteUIAnimation"), _dec2 = requireComponent(Sprite), _dec3 = property(SpriteAtlas), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(SpriteUIAnimation, _Component);

        function SpriteUIAnimation() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SpriteUIAnimation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SpriteUIAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "Frames", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "PrefixName", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "FrameCount", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Interval", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Priority", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "FrameIndexStart", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Loop", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "PlayOnLoad", _descriptor8, _assertThisInitialized(_this));

          _this.currentIndex = 0;
          _this.time = 0;
          _this.isPlay = false;
          _this.listener = [];
          _this.complateEvent = [];
          return _this;
        }

        _createClass(SpriteUIAnimation, [{
          key: "onFocusInEditor",
          value: function onFocusInEditor() {// this.time = this.Interval;
            // FrameAniBase.intervalID = setInterval(this.update.bind(this), 0.016, 0.016);
          }
        }, {
          key: "onLostFocusInEditor",
          value: function onLostFocusInEditor() {
            clearInterval(SpriteUIAnimation.intervalID);
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            this.time = this.Interval;
            this.isPlay = this.PlayOnLoad;
          }
        }, {
          key: "play",
          value: function play() {
            this.isPlay = true;
            this.currentIndex = 0;
            this.Sprite.color.a = 255;
            this.updateCurrentFrame();

            if (this.isPlaying == false) {
              this.callEventComplete();
            }
          }
        }, {
          key: "onStartPlay",
          value: function onStartPlay() {}
        }, {
          key: "playOnLoop",
          value: function playOnLoop() {
            this.Loop = true;
            this.play();
          }
        }, {
          key: "playByStep",
          value: function playByStep() {
            this.isPlay = true;
            this.nextFrame();
            this.isPlay = false;
          }
        }, {
          key: "pause",
          value: function pause() {
            this.isPlay = false;
          }
        }, {
          key: "resume",
          value: function resume() {
            this.isPlay = true;
          }
        }, {
          key: "stop",
          value: function stop() {
            this.isPlay = false;
            this.currentIndex = 0;
            this.updateCurrentFrame();
            this.Loop = false;
          }
        }, {
          key: "updateCurrentFrame",
          value: function updateCurrentFrame() {
            // let oldModel = this.Sprite.sizeMode;
            // let isTrim = this.Sprite.trim;
            if (this.PrefixName != "") {
              this.Sprite.spriteFrame = this.Frames.getSpriteFrame(this.PrefixName + (this.currentIndex + 1 + this.FrameIndexStart));
            } else {
              this.Sprite.spriteFrame = this.Frames.getSpriteFrames()[this.currentIndex + this.FrameIndexStart];
            } // this.Sprite.sizeMode = oldModel;
            // this.Sprite.trim = isTrim;
            // console.error(
            //   this.node.parent.name,
            //   this.node.name,
            //   Sprite.SizeMode[this.Sprite.sizeMode],
            //   this.Sprite.trim
            // );

          }
        }, {
          key: "onKeyFrame",
          value: function onKeyFrame(key) {}
        }, {
          key: "addKeyEventListener",
          value: function addKeyEventListener(f, target) {
            this.listener.push({
              callback: f,
              target: target
            });
          }
        }, {
          key: "clearAllListener",
          value: function clearAllListener() {
            this.listener.length = 0;
            return this;
          }
        }, {
          key: "onComplete",
          value: function onComplete() {
            tween(this.Sprite).to(0.2, {
              color: color(this.Sprite.color.r, this.Sprite.color.g, this.Sprite.color.b, 0)
            }).start();
          }
        }, {
          key: "callEventFrame",
          value: function callEventFrame() {
            this.onKeyFrame(this.currentIndex);

            var _iterator = _createForOfIteratorHelper(this.listener),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var callback = _step.value;
                callback.callback.apply(callback.target, [this.currentIndex, this["__classname__"]]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "callEventComplete",
          value: function callEventComplete() {
            this.isPlay = false; //  this.Sprite.spriteFrame = null;

            var _iterator2 = _createForOfIteratorHelper(this.complateEvent),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var complete = _step2.value;
                complete.f.apply(complete.target, [this["__classname__"]]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.onComplete();
          }
        }, {
          key: "addCompleteEvent",
          value: function addCompleteEvent(f, target) {
            this.complateEvent.push({
              f: f,
              target: target
            });
          }
        }, {
          key: "clearCompleteEvent",
          value: function clearCompleteEvent() {
            this.complateEvent.length = 0;
            return this;
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "nextFrame",
          value: function nextFrame() {
            if (this.isPlaying == false) {
              this.time = this.Interval;
              return;
            }

            if (this.Frames && this.Frames.getSpriteFrames && this.Frames.getSpriteFrames().length > 0) {
              if (this.currentIndex == 0) {
                this.onStartPlay();
              }

              this.updateCurrentFrame();
              this.callEventFrame();
              this.currentIndex = (this.currentIndex + 1) % this.TotalFrameCount;

              if (this.currentIndex == 0 && this.Loop == false) {
                this.isPlay = false;
                this.callEventComplete();
              }
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this.time >= this.Interval) {
              this.time = 0;
              this.nextFrame();
            }

            this.time += dt;
          }
        }, {
          key: "Sprite",
          get: function get() {
            return this.node.getComponent(Sprite);
          }
        }, {
          key: "Animation",
          set: function set(val) {
            this.Frames = val;
          }
        }, {
          key: "ListenerCount",
          get: function get() {
            return this.listener.length;
          }
        }, {
          key: "TotalFrameCount",
          get: function get() {
            if (this.PrefixName != "" && this.FrameCount > 0) return this.Loop ? this.FrameCount : this.FrameCount;
            return this.Frames && this.Frames.getSpriteFrames ? this.Frames.getSpriteFrames().length + 1 : 0;
          }
        }, {
          key: "CompleteEventCount",
          get: function get() {
            return this.complateEvent.length;
          }
        }, {
          key: "isPlaying",
          get: function get() {
            if (this.isPlay && this.Frames && this.Frames.getSpriteFrames && this.Frames.getSpriteFrames().length > 0) {
              var Components = this.getComponents(SpriteUIAnimation);

              var _iterator3 = _createForOfIteratorHelper(Components),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var comp = _step3.value;

                  if (comp.Priority > this.Priority && comp.isPlaying) {
                    return false;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              return true;
            }

            return false;
          }
        }]);

        return SpriteUIAnimation;
      }(Component), _class3.aniName = "FrameAniBase", _class3.intervalID = -1, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Frames", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PrefixName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "FrameCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Interval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Priority", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "FrameIndexStart", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Loop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "PlayOnLoad", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/HeartBonusAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, _temp, ccclass, property, HeartBonusAnimation;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7104aQxfEFKeoXHluCHZufO", "HeartBonusAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HeartBonusAnimation", HeartBonusAnimation = (_dec = ccclass("HeartBonusAnimation"), _dec(_class = (_temp = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(HeartBonusAnimation, _SpriteUIAnimation);

        function HeartBonusAnimation() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HeartBonusAnimation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeartBonusAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.completeCount = 0;
          return _this;
        }

        _createClass(HeartBonusAnimation, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "play",
          value: function play() {
            var _this2 = this;

            this.onComplete = function () {
              _this2.completeCount++;

              if (_this2.completeCount >= 2) {
                _this2.completeCount = 0;

                _get(_getPrototypeOf(HeartBonusAnimation.prototype), "stop", _this2).call(_this2);

                _this2.scheduleOnce(function () {
                  _get(_getPrototypeOf(HeartBonusAnimation.prototype), "play", _this2).call(_this2);
                }, Math.random() + 1.5);
              } else {
                _get(_getPrototypeOf(HeartBonusAnimation.prototype), "play", _this2).call(_this2);
              }
            };

            _get(_getPrototypeOf(HeartBonusAnimation.prototype), "play", this).call(this);
          }
        }, {
          key: "stop",
          value: function stop() {
            this.unscheduleAllCallbacks();

            _get(_getPrototypeOf(HeartBonusAnimation.prototype), "stop", this).call(this);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return HeartBonusAnimation;
      }(SpriteUIAnimation), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/ScoreScaleRoot.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Manager/GameStateController.js", "../../Manager/ResourceController.js", "../Physics/BorderCollider.js", "../Animation/HeartBonusAnimation.js", "../GameLogic.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _createForOfIteratorHelper, cclegacy, _decorator, tween, v3, Sprite, Tween, Component, GameStateController, ResourceController, HoleName, HeartBonusAnimation, HoleBonusInitSignal, ReadyNextRoundSignal, DropPocketSignal, RefreshHeartBonusSignal, NextRountSignal, _dec, _class, _class2, _temp, ccclass, property, ScoreScaleRoot;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      v3 = _cc.v3;
      Sprite = _cc.Sprite;
      Tween = _cc.Tween;
      Component = _cc.Component;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_ManagerResourceControllerJs) {
      ResourceController = _ManagerResourceControllerJs.ResourceController;
    }, function (_PhysicsBorderColliderJs) {
      HoleName = _PhysicsBorderColliderJs.HoleName;
    }, function (_AnimationHeartBonusAnimationJs) {
      HeartBonusAnimation = _AnimationHeartBonusAnimationJs.HeartBonusAnimation;
    }, function (_GameLogicJs) {
      HoleBonusInitSignal = _GameLogicJs.HoleBonusInitSignal;
      ReadyNextRoundSignal = _GameLogicJs.ReadyNextRoundSignal;
      DropPocketSignal = _GameLogicJs.DropPocketSignal;
      RefreshHeartBonusSignal = _GameLogicJs.RefreshHeartBonusSignal;
      NextRountSignal = _GameLogicJs.NextRountSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c444ehh7/FFrKAHw1vhgPW5", "ScoreScaleRoot", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ScoreScaleRoot", ScoreScaleRoot = (_dec = ccclass("ScoreScaleRoot"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inherits(ScoreScaleRoot, _Component);

        function ScoreScaleRoot() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ScoreScaleRoot);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScoreScaleRoot)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.heartNode = null;
          return _this;
        }

        _createClass(ScoreScaleRoot, [{
          key: "start",
          value: function start() {
            ScoreScaleRoot.Node = this.node; // Your initialization goes here.

            HoleBonusInitSignal.inst.addListener(this.onHoleBonusUpdated, this);
            ReadyNextRoundSignal.inst.addListener(this.onReadyNextRound, this);
            DropPocketSignal.inst.addListener(this.onDropPocket, this);
            RefreshHeartBonusSignal.inst.addListener(this.onHeartBounsUpdated, this);
          }
        }, {
          key: "onHeartBounsUpdated",
          value: function onHeartBounsUpdated(name) {
            this.heartNode = name; // console.error(" heart node:", name);
          }
        }, {
          key: "onDropPocket",
          value: function onDropPocket(name) {
            var _this2 = this;

            var pocket = this.node.getChildByName(name);
            if (pocket == null || this.tween) return;
            this.tween = tween(pocket).to(0.1, {
              scale: v3(0, 0, 0)
            }).call(function () {
              pocket.getChildByName("HeartBling").active = false;
              pocket.getComponent(HeartBonusAnimation).stop();
              pocket["oldFrame"] && (pocket.getComponent(Sprite).spriteFrame = pocket["oldFrame"]);
            })
            /**  .delay(0.4)
              .to(0.1, { scale: v3(1, 1, 1) })
            */
            .call(function () {
              _this2.tween = null;
            }).start();
          }
        }, {
          key: "onRotation",
          value: function onRotation(loopCount) {
            var _this3 = this;

            console.log(" loopCount:", loopCount);
            var lastTime = 0.5;
            var firstPosition = this.node.getChildByName(HoleName[HoleName.TopLeft]).position.clone();

            var _loop = function _loop(i) {
              var child = _this3.node.getChildByName(ScoreScaleRoot.Clockwise[i]);

              var nextChild = _this3.node.getChildByName(ScoreScaleRoot.Clockwise[i + 1]);

              if (child && nextChild) {
                Tween.stopAllByTarget(child);
                child.setScale(v3(1, 1, 1));
                tween(child).call(function () {// console.log("name:", child.name, ",start:", Date.now());
                }).to(lastTime, {
                  position: v3(nextChild.position.x, nextChild.position.y, nextChild.position.z)
                }).call(function () {
                  // console.log(
                  //   "name:",
                  //   child.name,
                  //   ",next:",
                  //   nextChild.name,
                  //   Date.now()
                  // );
                  child.name = nextChild.name;
                }).start();
              }
            };

            for (var i = 0; i < ScoreScaleRoot.Clockwise.length - 1; i++) {
              _loop(i);
            }

            var lastChild = this.node.getChildByName(HoleName[HoleName.MidLeft]);
            Tween.stopAllByTarget(lastChild);
            lastChild.setScale(v3(1, 1, 1));
            tween(lastChild).to(lastTime, {
              position: v3(firstPosition.x, firstPosition.y, firstPosition.z)
            }).call(function () {
              lastChild.name = HoleName[HoleName.TopLeft];

              _this3.scheduleOnce(function () {
                if (--loopCount > 0) {
                  _this3.onRotation(loopCount);

                  return;
                }

                _this3.showHeartBonus();

                console.log("NextRound after rotation.");
                NextRountSignal.inst.dispatch();
                GameStateController.inst.resume();
              }, 0);
            }).start();
          }
        }, {
          key: "onReadyNextRound",
          value: function onReadyNextRound(shotCount) {
            var loopCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            this.heartNode = null;
            this.tween = null;

            var _iterator = _createForOfIteratorHelper(this.node.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;
                Tween.stopAllByTarget(child);
                child.setScale(v3(1, 1, 1));
                child.getChildByName("HeartBling").active = false;
                child.getComponent(HeartBonusAnimation).stop();
                child["oldFrame"] && (child.getComponent(Sprite).spriteFrame = child["oldFrame"]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (shotCount <= 1 || loopCount <= 0) {
              this.showHeartBonus();
              console.log("NextRound .");
              NextRountSignal.inst.dispatch();
              GameStateController.inst.resume();
              return;
            }

            this.onRotation(loopCount);
          }
        }, {
          key: "showHeartBonus",
          value: function showHeartBonus() {
            if (this.heartNode && this.node.getChildByName(this.heartNode)) {
              var child = this.node.getChildByName(this.heartNode);
              child.getChildByName("HeartBling").active = true;
              child["oldFrame"] = child.getComponent(Sprite).spriteFrame;
              child.getComponent(HeartBonusAnimation).play();
              this.heartNode = null;
            }
          }
        }, {
          key: "onHoleBonusUpdated",
          value: function onHoleBonusUpdated(bonusArr) {
            var _iterator2 = _createForOfIteratorHelper(bonusArr),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var bonus = _step2.value;
                var child = this.node.getChildByName(HoleName[bonus.pos]);

                if (child) {
                  child.getChildByName("HeartBling").active = false;
                  child.getComponent(Sprite).spriteFrame = ResourceController.inst.getHoleBonus(bonus.bonus);
                  child["oldFrame"] = ResourceController.inst.getHoleBonus(bonus.bonus);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return ScoreScaleRoot;
      }(Component), _class2.Clockwise = [HoleName[HoleName.TopLeft], HoleName[HoleName.TopRight], HoleName[HoleName.MidRight], HoleName[HoleName.BotRight], HoleName[HoleName.BotLeft], HoleName[HoleName.MidLeft]], _class2.Node = null, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameLogic.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "../Common/HashMap.js", "./GameRule.js", "../Common/Signal.js", "../Signal/Signal.js", "../Common/Random.js", "../Common/Cocos.js", "../Model/PlayModel.js", "../Manager/GameStateController.js", "../TableManager.js", "../Common/SDK/CelerSDK.js", "../App/App.js", "../table.js", "./Model/BallModel.js", "./GameObject/BallRoot.js", "./Physics/BorderCollider.js", "./UI/ScoreScaleRoot.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, cclegacy, v3, math, Vec3, SphereCollider, SingleTon, HashMap, ScoreType, GetScoreByType, HoleBonus, GetTotalHeartCount, StreakBonusLimit, BaseSignal, ShotSignal, GameOverSignal, GameReadySignal, Random, disOrderArray, PlayModel, GameStateController, RoundEndType, TableManager, CelerSDK, App, Level_IsRandom, Balls_ID, BallModel, BallRoot, HoleName, ScoreScaleRoot, NextRountSignal, ReadyNextRoundSignal, PoleRotationInitSignal, WhiteBallReposSignal, BallDropSignal, HoleBonusInitSignal, UpdateHeartCountSignal, DropPocketSignal, RefreshHeartBonusSignal, PocketScoredSignal, ShotType, GameLogic;

  _export("ShotType", void 0);

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      v3 = _cc.v3;
      math = _cc.math;
      Vec3 = _cc.Vec3;
      SphereCollider = _cc.SphereCollider;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_CommonHashMapJs) {
      HashMap = _CommonHashMapJs.HashMap;
    }, function (_GameRuleJs) {
      ScoreType = _GameRuleJs.ScoreType;
      GetScoreByType = _GameRuleJs.GetScoreByType;
      HoleBonus = _GameRuleJs.HoleBonus;
      GetTotalHeartCount = _GameRuleJs.GetTotalHeartCount;
      StreakBonusLimit = _GameRuleJs.StreakBonusLimit;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_SignalSignalJs) {
      ShotSignal = _SignalSignalJs.ShotSignal;
      GameOverSignal = _SignalSignalJs.GameOverSignal;
      GameReadySignal = _SignalSignalJs.GameReadySignal;
    }, function (_CommonRandomJs) {
      Random = _CommonRandomJs.Random;
    }, function (_CommonCocosJs) {
      disOrderArray = _CommonCocosJs.disOrderArray;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
      RoundEndType = _ManagerGameStateControllerJs.RoundEndType;
    }, function (_TableManagerJs) {
      TableManager = _TableManagerJs.TableManager;
    }, function (_CommonSDKCelerSDKJs) {
      CelerSDK = _CommonSDKCelerSDKJs.CelerSDK;
    }, function (_AppAppJs) {
      App = _AppAppJs.App;
    }, function (_tableJs) {
      Level_IsRandom = _tableJs.Level_IsRandom;
      Balls_ID = _tableJs.Balls_ID;
    }, function (_ModelBallModelJs) {
      BallModel = _ModelBallModelJs.BallModel;
    }, function (_GameObjectBallRootJs) {
      BallRoot = _GameObjectBallRootJs.BallRoot;
    }, function (_PhysicsBorderColliderJs) {
      HoleName = _PhysicsBorderColliderJs.HoleName;
    }, function (_UIScoreScaleRootJs) {
      ScoreScaleRoot = _UIScoreScaleRootJs.ScoreScaleRoot;
    }],
    execute: function () {
      cclegacy._RF.push({}, "030273ugmVLtoTCNGMagCm4", "GameLogic", undefined);
      /** 下一轮 */


      _export("NextRountSignal", NextRountSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(NextRountSignal, _BaseSignal);

        function NextRountSignal() {
          _classCallCheck(this, NextRountSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(NextRountSignal).apply(this, arguments));
        }

        return NextRountSignal;
      }(BaseSignal));
      /** 准备下一轮 */


      _export("ReadyNextRoundSignal", ReadyNextRoundSignal = /*#__PURE__*/function (_BaseSignal2) {
        _inherits(ReadyNextRoundSignal, _BaseSignal2);

        function ReadyNextRoundSignal() {
          _classCallCheck(this, ReadyNextRoundSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(ReadyNextRoundSignal).apply(this, arguments));
        }

        return ReadyNextRoundSignal;
      }(BaseSignal));
      /** 初始化球杆旋转 */


      _export("PoleRotationInitSignal", PoleRotationInitSignal = /*#__PURE__*/function (_BaseSignal3) {
        _inherits(PoleRotationInitSignal, _BaseSignal3);

        function PoleRotationInitSignal() {
          _classCallCheck(this, PoleRotationInitSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(PoleRotationInitSignal).apply(this, arguments));
        }

        return PoleRotationInitSignal;
      }(BaseSignal));
      /** */


      _export("WhiteBallReposSignal", WhiteBallReposSignal = /*#__PURE__*/function (_BaseSignal4) {
        _inherits(WhiteBallReposSignal, _BaseSignal4);

        function WhiteBallReposSignal() {
          _classCallCheck(this, WhiteBallReposSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(WhiteBallReposSignal).apply(this, arguments));
        }

        return WhiteBallReposSignal;
      }(BaseSignal));
      /** */


      _export("BallDropSignal", BallDropSignal = /*#__PURE__*/function (_BaseSignal5) {
        _inherits(BallDropSignal, _BaseSignal5);

        function BallDropSignal() {
          _classCallCheck(this, BallDropSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(BallDropSignal).apply(this, arguments));
        }

        return BallDropSignal;
      }(BaseSignal));
      /** */


      _export("HoleBonusInitSignal", HoleBonusInitSignal = /*#__PURE__*/function (_BaseSignal6) {
        _inherits(HoleBonusInitSignal, _BaseSignal6);

        function HoleBonusInitSignal() {
          _classCallCheck(this, HoleBonusInitSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(HoleBonusInitSignal).apply(this, arguments));
        }

        return HoleBonusInitSignal;
      }(BaseSignal));
      /** */


      _export("UpdateHeartCountSignal", UpdateHeartCountSignal = /*#__PURE__*/function (_BaseSignal7) {
        _inherits(UpdateHeartCountSignal, _BaseSignal7);

        function UpdateHeartCountSignal() {
          _classCallCheck(this, UpdateHeartCountSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(UpdateHeartCountSignal).apply(this, arguments));
        }

        return UpdateHeartCountSignal;
      }(BaseSignal));
      /** */


      _export("DropPocketSignal", DropPocketSignal = /*#__PURE__*/function (_BaseSignal8) {
        _inherits(DropPocketSignal, _BaseSignal8);

        function DropPocketSignal() {
          _classCallCheck(this, DropPocketSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(DropPocketSignal).apply(this, arguments));
        }

        return DropPocketSignal;
      }(BaseSignal));
      /** */


      _export("RefreshHeartBonusSignal", RefreshHeartBonusSignal = /*#__PURE__*/function (_BaseSignal9) {
        _inherits(RefreshHeartBonusSignal, _BaseSignal9);

        function RefreshHeartBonusSignal() {
          _classCallCheck(this, RefreshHeartBonusSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(RefreshHeartBonusSignal).apply(this, arguments));
        }

        return RefreshHeartBonusSignal;
      }(BaseSignal));

      _export("PocketScoredSignal", PocketScoredSignal = /*#__PURE__*/function (_BaseSignal10) {
        _inherits(PocketScoredSignal, _BaseSignal10);

        function PocketScoredSignal() {
          _classCallCheck(this, PocketScoredSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(PocketScoredSignal).apply(this, arguments));
        }

        return PocketScoredSignal;
      }(BaseSignal));

      (function (ShotType) {
        ShotType[ShotType["TrickShot"] = 0] = "TrickShot";
        ShotType[ShotType["NormalShot"] = 1] = "NormalShot";
        ShotType[ShotType["NoScore"] = 2] = "NoScore";
      })(ShotType || _export("ShotType", ShotType = {}));

      _export("GameLogic", GameLogic = /*#__PURE__*/function (_SingleTon) {
        _inherits(GameLogic, _SingleTon);
        /** 进入休眠的球数 */

        /** 需要等待休眠的球数 */

        /**  白球的初始化位置 */

        /** 洞的分数加成 */

        /** 出杆的次数 */

        /** 爱心数 */

        /** 得分的类型 */

        /** combo */

        /** 本轮进球数 */


        function GameLogic() {
          var _this;

          _classCallCheck(this, GameLogic);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(GameLogic).call(this));
          _this.balls = new HashMap();
          _this.sleepCount = 0;
          _this.totalCheckCount = 0;
          _this.whiteBallPosition = v3(0, 0, 0);
          _this.holeBonus = [];
          _this.shotCount = 0;
          _this.heartCount = 0;
          _this.scoreType = null;
          _this.streak = 0;
          _this.ballCombo = 0;
          _this.whiteBall = null;
          _this.noBust = true;
          _this.scaleMap = {};
          ShotSignal.inst.addListener(_this.ballShot, _assertThisInitialized(_this));
          GameOverSignal.inst.addListener(function () {
            if (PlayModel.inst.getScoreByType(ScoreType.Pocket) <= 0) return;
            /** 剩余爱心分数 */

            if (_this.heartCount > 0) {
              PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.HeartBonus, _this.heartCount), ScoreType.HeartBonus, App.HeartIcon);
            }
            /** nobust 分数 */


            if (_this.noBust) {
              PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.NoBust), ScoreType.NoBust, null, 100);
            }
          }, _assertThisInitialized(_this));
          return _this;
        }

        _createClass(GameLogic, [{
          key: "streakBonus",
          value: function streakBonus() {
            var heartBonusPool = [];

            for (var i = 0; i < this.holeBonus.length; i++) {
              var bonus = this.holeBonus[i];

              if (bonus.isHeart == false && bonus.bonus >= HoleBonus.x6) {
                heartBonusPool.push({
                  index: i,
                  bonus: bonus
                });
              }
            }

            var heartBonus = heartBonusPool[Random.randomFloorToInt(0, heartBonusPool.length)];
            this.holeBonus[heartBonus.index].isHeart = true;
            console.log(" heart bonus:", heartBonus.index, this.holeBonus[heartBonus.index]);
            RefreshHeartBonusSignal.inst.dispatch(this.holeBonus[heartBonus.index].posStr);
          }
        }, {
          key: "resetWhiteBall",
          value: function resetWhiteBall() {
            var _this2 = this;

            var canPos = false;
            var position = this.whiteBallPosition.clone();

            var _loop = function _loop() {
              var collideCount = 0;

              _this2.balls.forEach(function (ID, model) {
                if (model.isWhiteBall == false && collideCount <= 0) {
                  var ballNode = BallRoot.Balls.get(model.ID);

                  if (ballNode) {
                    var radius = ballNode.getComponent(SphereCollider).radius;

                    if (Vec3.distance(ballNode.position, position) <= radius * 2) {
                      collideCount++;

                      if (position.z - radius <= -6.9) {
                        position.add(v3(0, 0, radius));
                      } else if (position.z + radius >= 6.9) {
                        position.add(v3(0, 0, -radius));
                      } else {
                        position.add(v3(0, 0, -radius));
                      }
                    }
                  }
                }
              });

              canPos = collideCount <= 0;
            };

            while (canPos == false) {
              _loop();
            }

            WhiteBallReposSignal.inst.dispatch(position);
          }
        }, {
          key: "ballDrop",
          value: function ballDrop(model, pocket) {
            console.log("球：", model.Point, " 入袋:", pocket, HoleName[pocket], ", bonus:", this.holeBonus[pocket].bonusStr, ",是否加心：", this.holeBonus[pocket].isHeart);

            if (model.isWhiteBall) {
              this.resetWhiteBall();
              this.HeartCount--;
            } else {
              this.ballCombo++;
              var node = ScoreScaleRoot.Node.getChildByName(HoleName[pocket]);
              this.scoreType = ShotType.NormalShot;
              this.scaleMap[model.Point] = this.holeBonus[pocket].bonusStr;
              PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.Pocket, model.Point) * this.holeBonus[pocket].bonus, ScoreType.Pocket, node);
              var delay = 100;
              /** 反弹 */

              if (model.hitBorderCount > 0 || this.whiteBall.hitBorderCount > 0) {
                PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.Rebound), ScoreType.Rebound, node, delay);
                delay += 100;
                this.scoreType = ShotType.TrickShot;
                console.log(" 反弹：", model.hitBorderCount, ", white:", this.whiteBall.hitBorderCount);
              }
              /** 一杆多进 */


              if (this.ballCombo > 1) {
                PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.Multip, this.ballCombo), ScoreType.Multip, node, delay);
                delay += 100;
                this.scoreType = ShotType.TrickShot;
                console.log(" 一杆多进");
              }
              /** 没有直接碰到白球 传递击球 */


              if (model.isHitWhite == false) {
                PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.Link), ScoreType.Link, node, delay);
                delay += 100;
                this.scoreType = ShotType.TrickShot;
                console.log(" 传递击球");
              }

              if (this.holeBonus[pocket].isHeart) {
                this.HeartCount++;
                this.holeBonus[pocket].isHeart = false;
              }

              this.balls.remove(model.ID);
              model.removeSelf();

              if (this.balls.length <= 1) {
                GameStateController.inst.roundEnd(RoundEndType.Complete);
              }

              PocketScoredSignal.inst.dispatch(this.scoreType, HoleName[pocket]);
            }

            BallDropSignal.inst.dispatch(model, pocket);
            DropPocketSignal.inst.dispatch(HoleName[pocket]);
            this.ballSleep(model);
          }
        }, {
          key: "ballShot",
          value: function ballShot() {
            this.sleepCount = 0;
            this.totalCheckCount = 0;
            this.shotCount++;
            this.scoreType = ShotType.NoScore;
            this.ballCombo = 0;
          }
        }, {
          key: "ballSleep",
          value: function ballSleep(model) {
            this.sleepCount++;
            console.log("ball:", model.Material, "sleep,  count:", this.sleepCount, ", total:", this.totalCheckCount);
            if (GameStateController.inst.isGameOver()) return;

            if (this.sleepCount == this.totalCheckCount && GameStateController.inst.isPause()) {
              this.overThisRound();
            }
          }
        }, {
          key: "overThisRound",
          value: function overThisRound() {
            if (this.scoreType == ShotType.NoScore && this.shotCount > 1) {
              this.HeartCount--;
            }

            var loopCount = this.scoreType == ShotType.NoScore && this.shotCount > 1 ? 0 : 1;

            if ((this.balls.length <= 3 || this.scoreType == ShotType.TrickShot) && this.scoreType != ShotType.NoScore) {
              loopCount = 3;
            }

            if (this.scoreType != ShotType.NoScore || this.shotCount == 1) {
              for (var i = 0; i < loopCount; i++) {
                this.clockwiseHoleBonus();
              }
            }

            console.log(" rotation loop count:", loopCount);
            ReadyNextRoundSignal.inst.dispatch(this.shotCount, loopCount);

            if (this.scoreType != ShotType.NoScore) {
              this.Streak++;
            } else {
              this.Streak--;
            }
          }
        }, {
          key: "ballMove",
          value: function ballMove(model) {
            this.totalCheckCount++;
            console.log(" ball:", model.Material, " moved, total:", this.totalCheckCount);
          }
        }, {
          key: "init",
          value: function init() {
            this.HeartCount = GetTotalHeartCount();
            this.balls.clear();
            var randomLevels = [];
            var allLevels = TableManager.inst.getAll_Level_Data();

            for (var _key in allLevels) {
              var level = allLevels[_key];

              if (level.Levels.indexOf(CelerSDK.inst.DifficultyLevel) >= 0) {
                randomLevels.push(level);
              }
            }

            if (randomLevels.length <= 0) {
              console.error("no level data.");
              return;
            }

            var currentLevel = randomLevels[Random.randomFloorToInt(0, randomLevels.length)];
            var randomOffset = Random.getRandom(currentLevel.Min, currentLevel.Max);
            console.log("randomOffset:", randomOffset);
            var balls = currentLevel.Balls.slice(1); // balls = [balls[Random.randomFloorToInt(0, balls.length)]];
            // for (let ball of balls) {
            //   if (ball == Balls_ID.ZiQiu) {
            //     balls = [ball];
            //     break;
            //   }
            // }

            var firstPosition = null;

            if (currentLevel.IsRandom == Level_IsRandom.Shi) {
              disOrderArray(balls);
            }

            for (var i = 0; i < balls.length; i++) {
              var ball = TableManager.inst.getBalls(balls[i]);

              var _ballModel = new BallModel(balls[i], ball.Material, ball.Number, v3(currentLevel.X[i + 1] + randomOffset, currentLevel.Y[i + 1], currentLevel.Z[i + 1]));

              if (firstPosition == null) {
                firstPosition = v3(currentLevel.X[i + 1] + randomOffset, 0, currentLevel.Z[i + 1]);
              } else {
                if (currentLevel.Z[i + 1] > firstPosition.z) {
                  firstPosition = v3(currentLevel.X[i + 1] + randomOffset, 0, currentLevel.Z[i + 1]);
                }
              }

              this.balls.add(_ballModel.ID, _ballModel);
            }
            /** 初始化白球会同时初始化球杆 */


            this.whiteBallPosition = v3(currentLevel.X[0], currentLevel.Y[0], currentLevel.Z[0]);
            firstPosition = firstPosition.subtract(v3(currentLevel.X[0], 0, currentLevel.Z[0]));
            randomOffset == 0 ? randomOffset = 1 : randomOffset = randomOffset;
            var degree = -(math.toDegree(Vec3.angle(firstPosition, v3(0, 0, -1))) * Math.abs(randomOffset)) / randomOffset;
            PoleRotationInitSignal.inst.dispatch(degree);
            var whiteBall = TableManager.inst.getBalls(Balls_ID.BaiQiu);
            var ballModel = new BallModel(Balls_ID.BaiQiu, whiteBall.Material, whiteBall.Number, v3(currentLevel.X[0], currentLevel.Y[0], currentLevel.Z[0]));
            this.whiteBall = ballModel;
            this.balls.add(ballModel.ID, ballModel);
            var pos = ScoreScaleRoot.Clockwise.concat();

            while (pos.length > 0) {
              var _pos = pos.shift();

              this.holeBonus.push({
                bonus: HoleBonus.x10,
                pos: HoleName[_pos],
                bonusStr: HoleBonus[HoleBonus.x10],
                posStr: _pos,
                isHeart: false
              });
            }

            HoleBonusInitSignal.inst.dispatch(this.holeBonus);
            GameReadySignal.inst.dispatch();
          }
        }, {
          key: "clockwiseHoleBonus",
          value: function clockwiseHoleBonus() {
            if (this.shotCount == 1) {
              this.holeBonus.length = 0;
              var bonus = [HoleBonus.x2, HoleBonus.x3, HoleBonus.x4, HoleBonus.x6, HoleBonus.x8, HoleBonus.x10];
              var startIndex = Random.randomFloorToInt(0, bonus.length);
              var randomBonus = [];
              var i = startIndex;

              while (randomBonus.length < bonus.length) {
                randomBonus.push(bonus[i]);
                i++;
                i = i % bonus.length;
              }

              var pos = ScoreScaleRoot.Clockwise.concat();

              while (pos.length > 0) {
                var _pos = pos.shift();

                var _bonus = randomBonus.shift();

                this.holeBonus.push({
                  bonus: _bonus,
                  pos: HoleName[_pos],
                  bonusStr: HoleBonus[_bonus],
                  posStr: _pos,
                  isHeart: false
                });
              }

              HoleBonusInitSignal.inst.dispatch(this.holeBonus);
            } else {
              var lastBonus = this.holeBonus[this.holeBonus.length - 1].bonus;
              var lastPos = this.holeBonus[this.holeBonus.length - 1].pos;

              for (var _i = this.holeBonus.length - 1; _i >= 1; _i--) {
                this.holeBonus[_i].bonus = this.holeBonus[_i - 1].bonus;
                this.holeBonus[_i].bonusStr = this.holeBonus[_i - 1].bonusStr;
                this.holeBonus[_i].isHeart = false; // this.holeBonus[i].pos = this.holeBonus[i - 1].pos;
                // this.holeBonus[i].posStr = this.holeBonus[i - 1].posStr;
              }

              this.holeBonus[0].bonus = lastBonus;
              this.holeBonus[0].bonusStr = HoleBonus[lastBonus]; // this.holeBonus[0].pos = lastPos;
              // this.holeBonus[0].posStr = HoleName[lastPos];

              this.holeBonus[0].isHeart = false; // console.log(" after clockwise:", this.holeBonus);
            }
          }
        }, {
          key: "HeartCount",
          get: function get() {
            return this.heartCount;
          },
          set: function set(count) {
            var step = count - this.heartCount;

            if (step < 0) {
              this.noBust = false;
            }

            this.heartCount = count;
            this.heartCount = Math.max(this.heartCount, 0);
            UpdateHeartCountSignal.inst.dispatch(this.heartCount, step);

            if (this.heartCount <= 0) {
              GameStateController.inst.roundEnd(RoundEndType.OutOfMove);
            }
          }
        }, {
          key: "BallCombo",
          get: function get() {
            return this.ballCombo;
          },
          set: function set(val) {
            this.ballCombo = val;
          }
        }, {
          key: "Streak",
          set: function set(val) {
            this.streak = val;
            this.streak = Math.max(0, this.streak);

            if (this.streak >= StreakBonusLimit()) {
              this.streak = 0;
              this.streakBonus();
            }
          },
          get: function get() {
            return this.streak;
          }
        }]);

        return GameLogic;
      }(SingleTon()));

      CC_DEBUG && (window["Logic"] = GameLogic.inst);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameObject/PrefabView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Component, _dec, _class, _temp, ccclass, property, PrefabView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f240qKN99BFpgRBGbutcFN", "PrefabView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PrefabView", PrefabView = (_dec = ccclass("PrefabView"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(PrefabView, _Component);

        function PrefabView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PrefabView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PrefabView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.model = null;
          return _this;
        }

        _createClass(PrefabView, [{
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "reuse",
          value: function reuse(model) {
            this.model = model;
            this.scheduleOnce(this.onReuse, 0);
          }
        }, {
          key: "unuse",
          value: function unuse() {
            if (this.model) ;
            this.model = null;
            this.onUnuse();
          }
        }, {
          key: "onReuse",
          value: function onReuse() {
            console.warn(" should override onReuse.");
          }
        }, {
          key: "onUnuse",
          value: function onUnuse() {
            console.warn(" should override onUnuse.");
          }
        }]);

        return PrefabView;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameObject/BallObject.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameRule.js", "../../Common/Signal.js", "../../Signal/Signal.js", "../../Common/Cocos.js", "../../TableManager.js", "../../Factory/MaterialFactory.js", "../../table.js", "./Pole.js", "../Physics/BorderCollider.js", "../GameLogic.js", "./PrefabView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, MeshRenderer, PhysicsSystem, Tween, math, tween, v3, SphereCollider, BoxCollider, Vec3, RigidBody, EasyMode, BaseSignal, ShotSignal, Clamp, TableManager, MaterialFactory, Physical_ID, Pole, BorderCollider, BorderType, HitBorderSignal, GameLogic, WhiteBallReposSignal, NextRountSignal, PrefabView, _dec, _class, _temp, ccclass, property, BallHitSignal, BallObject;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      MeshRenderer = _cc.MeshRenderer;
      PhysicsSystem = _cc.PhysicsSystem;
      Tween = _cc.Tween;
      math = _cc.math;
      tween = _cc.tween;
      v3 = _cc.v3;
      SphereCollider = _cc.SphereCollider;
      BoxCollider = _cc.BoxCollider;
      Vec3 = _cc.Vec3;
      RigidBody = _cc.RigidBody;
    }, function (_GameRuleJs) {
      EasyMode = _GameRuleJs.EasyMode;
    }, function (_CommonSignalJs) {
      BaseSignal = _CommonSignalJs.BaseSignal;
    }, function (_SignalSignalJs) {
      ShotSignal = _SignalSignalJs.ShotSignal;
    }, function (_CommonCocosJs) {
      Clamp = _CommonCocosJs.Clamp;
    }, function (_TableManagerJs) {
      TableManager = _TableManagerJs.TableManager;
    }, function (_FactoryMaterialFactoryJs) {
      MaterialFactory = _FactoryMaterialFactoryJs.MaterialFactory;
    }, function (_tableJs) {
      Physical_ID = _tableJs.Physical_ID;
    }, function (_PoleJs) {
      Pole = _PoleJs.Pole;
    }, function (_PhysicsBorderColliderJs) {
      BorderCollider = _PhysicsBorderColliderJs.BorderCollider;
      BorderType = _PhysicsBorderColliderJs.BorderType;
      HitBorderSignal = _PhysicsBorderColliderJs.HitBorderSignal;
    }, function (_GameLogicJs) {
      GameLogic = _GameLogicJs.GameLogic;
      WhiteBallReposSignal = _GameLogicJs.WhiteBallReposSignal;
      NextRountSignal = _GameLogicJs.NextRountSignal;
    }, function (_PrefabViewJs) {
      PrefabView = _PrefabViewJs.PrefabView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4aaeaCpbk9OA4V7a+4cqSqQ", "BallObject", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BallHitSignal", BallHitSignal = /*#__PURE__*/function (_BaseSignal) {
        _inherits(BallHitSignal, _BaseSignal);

        function BallHitSignal() {
          _classCallCheck(this, BallHitSignal);

          return _possibleConstructorReturn(this, _getPrototypeOf(BallHitSignal).apply(this, arguments));
        }

        return BallHitSignal;
      }(BaseSignal));

      _export("BallObject", BallObject = (_dec = ccclass("BallObject"), _dec(_class = (_temp = /*#__PURE__*/function (_PrefabView) {
        _inherits(BallObject, _PrefabView);

        function BallObject() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BallObject);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BallObject)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.isSleep = false;
          _this.isUpdate = false;
          _this.shotVelocity = null;
          _this.shotImpulse = null;
          return _this;
        }

        _createClass(BallObject, [{
          key: "onReuse",
          value: function onReuse() {
            if (this.model) {
              this.initRenderer();
              this.initPhysic();
              this.initEvent();
            }
          }
        }, {
          key: "initRenderer",
          value: function initRenderer() {
            this.MeshRenderer.shadowCastingMode = MeshRenderer.ShadowCastingMode.ON;
            this.MeshRenderer.setMaterial(MaterialFactory.inst.getMaterial(this.model.Material), 0);
          }
        }, {
          key: "initPhysic",
          value: function initPhysic() {
            var ball = TableManager.inst.getBalls(this.model.Type);

            if (this.Collider.material == null) {
              this.Collider.material = PhysicsSystem.instance.defaultMaterial;
            }

            this.Collider.material.friction = ball.Friction;
            this.Collider.material.restitution = ball.Restitution;
            this.Collider.material.rollingFriction = ball.RollingFriction;
            this.Collider.material.spinningFriction = ball.SpinningFriction;
            this.RigidBody.allowSleep = true;
            this.RigidBody.sleepThreshold = 0.3;
            this.RigidBody.mass = ball.Mass;
            this.RigidBody.linearDamping = ball.LinearDamping;
            this.RigidBody.angularDamping = ball.AngularDamping;

            if (this.model.isWhiteBall) {
              this.RigidBody.group = 2;
            } else {
              this.RigidBody.group = 2;
            }
          }
        }, {
          key: "onNextRound",
          value: function onNextRound() {
            if (!this.model || this.model.isWhiteBall) return;
            Tween.stopAllByTarget(this.node);
            var rotation = math.quat();
            math.Quat.fromEuler(rotation, 0, 180, 0);
            tween(this.node).to(0.05, {
              rotation: rotation
            }).start();
            this.shotVelocity = null;
            this.shotImpulse = null;
            this.isUpdate = false;
          }
        }, {
          key: "onReposition",
          value: function onReposition(position) {
            if (this.model && this.model.isWhiteBall) {
              this.registerTrigger();
              this.RigidBody.clearState();
              this.isUpdate = false;
              this.node.setPosition(position);
              this.node.setRotationFromEuler(0, 0, 0);
            }
          }
        }, {
          key: "onCollideExit",
          value: function onCollideExit(a) {}
        }, {
          key: "onCollide",
          value: function onCollide(a) {
            var velocity = v3(0, 0, 0);
            this.RigidBody.getLinearVelocity(velocity);
            velocity.y = 0;

            if (a.selfCollider instanceof SphereCollider && a.otherCollider instanceof SphereCollider) {
              if (this.isSleep != this.RigidBody.isSleeping && this.isUpdate == false) {
                this.isUpdate = true;
                this.isSleep = this.RigidBody.isSleeping;
                GameLogic.inst.ballMove(this.model);
              }

              var otherBallObj = a.otherCollider.node.getComponent(BallObject);
              BallHitSignal.inst.dispatch(this.model, otherBallObj.model, Clamp(velocity.length() / 10 * this.RigidBody.mass, 8, 0));
              this.model.hitBall(otherBallObj.Model);

              if (this.model.isWhiteBall && Pole.HitNormal && this.shotVelocity && this.shotImpulse && EasyMode()) {
                var ballPhysicWhite = TableManager.inst.getBalls(this.model.Type);
                var ballOtherPhysic = TableManager.inst.getBalls(otherBallObj.model.Type);
                var impulse = Pole.HitNormal.clone().normalize().multiplyScalar(this.shotImpulse.length()).multiplyScalar(ballOtherPhysic.Restitution * ballPhysicWhite.Restitution * Math.abs(velocity.length() / this.shotVelocity.length()));
                impulse.y = 0;
                otherBallObj.RigidBody.clearState();
                otherBallObj.RigidBody.applyImpulse(impulse);
                var negativeImpulse = Pole.HitNormal.clone().negative().normalize().multiplyScalar(ballOtherPhysic.Damping * ballPhysicWhite.Damping * impulse.clone().length());
                negativeImpulse.y = 0;
                /** 施加反作用力 */
                //this.RigidBody.applyImpulse(negativeImpulse);

                CC_DEBUG && console.log("shot impulse:", this.shotImpulse, " orther impulse:", impulse, ",velocity:", velocity, this.shotVelocity, ", ratio:", velocity.length() / this.shotVelocity.length(), ", hitNormal:", Pole.HitNormal, ",negativeImpulse:", negativeImpulse);
                Pole.HitNormal = null;
                this.shotVelocity = null;
                this.shotImpulse = null;
              }
            }

            if (a.selfCollider instanceof SphereCollider && a.otherCollider instanceof BoxCollider) {
              var borderCollider = a.otherCollider.node.getComponent(BorderCollider);

              if (borderCollider) {
                if (borderCollider.type != BorderType.Floor) {
                  if (borderCollider.type == BorderType.Border) {
                    this.model.hitBorder();
                  }

                  if (this.isSleep != this.RigidBody.isSleeping && this.isUpdate == false) {
                    this.isUpdate = true;
                    this.isSleep = this.RigidBody.isSleeping;
                    GameLogic.inst.ballMove(this.model);
                  }
                }

                HitBorderSignal.inst.dispatch(borderCollider.type, Clamp(velocity.length() / 40 * this.RigidBody.mass, 8, 0));
              }
            }
          }
        }, {
          key: "registerTrigger",
          value: function registerTrigger() {
            this.Collider.once("onTriggerEnter", function (a) {
              if (a.selfCollider instanceof SphereCollider) {
                var ballObject = a.selfCollider.node.getComponent(BallObject);
                var borderCollider = a.otherCollider.node.getComponent(BorderCollider);
                GameLogic.inst.ballDrop(ballObject.model, borderCollider.Pocket);
              } else if (a.otherCollider instanceof SphereCollider) {
                var _ballObject = a.otherCollider.node.getComponent(BallObject);

                var _borderCollider = a.selfCollider.node.getComponent(BorderCollider);

                GameLogic.inst.ballDrop(_ballObject.model, _borderCollider.Pocket);
              }
            }, this);
          }
        }, {
          key: "onShot",
          value: function onShot(power, angleY, forward) {
            this.isSleep = this.RigidBody.isSleeping;
            if (this.model.isWhiteBall == false) return;
            var powerData = TableManager.inst.getPhysical(Physical_ID.QiuGan);
            var impulse = forward.clone().normalize().multiplyScalar(powerData.BaseImpulse + power * powerData.ExtraImpulse);
            this.shotImpulse = impulse.clone();
            this.RigidBody.applyImpulse(impulse);
            /**
             * 施加扭转力
             * x轴： <  0 球会向后跑（对应击球点向下）   >  0  球往前跑
             * y轴： < 0 击球点 偏左  > 0 击球点偏右
             */

            var torque = powerData.BaseTorque + powerData.ExtraTorque * power;
            var torqueRadian = Vec3.angle(forward, v3(0, 0, -1));

            if (forward.x < 0) {
              torqueRadian = -torqueRadian;
            }

            var applyTorque = v3(-Pole.HitPoint.clone().normalize().y * torque * Math.cos(torqueRadian), Pole.HitPoint.clone().normalize().x * torque, -Pole.HitPoint.clone().normalize().y * torque * Math.sin(torqueRadian));

            if (!math.approx(applyTorque.length(), 0, 0.001)) {
              this.RigidBody.applyTorque(applyTorque);
            }

            this.isUpdate = true;
            this.isSleep = this.RigidBody.isSleeping;
            GameLogic.inst.ballMove(this.model);
            var velocity = v3();
            this.RigidBody.getLinearVelocity(velocity);
            this.shotVelocity = v3(velocity.x, 0, velocity.z);
            console.log("shot power:", power, ",impulse:", impulse, ",linerVelocity:", this.shotVelocity, ",torque:", applyTorque, ",forward:", forward, ",torqueDegree:", math.toDegree(torqueRadian));
          }
        }, {
          key: "onUnuse",
          value: function onUnuse() {
            ShotSignal.inst.removeTarget(this);
            this.Collider.targetOff(this);
            this.model = null;
            this.isUpdate = false;
          }
        }, {
          key: "initEvent",
          value: function initEvent() {
            ShotSignal.inst.addListener(this.onShot, this);
            WhiteBallReposSignal.inst.addListener(this.onReposition, this);
            NextRountSignal.inst.addListener(this.onNextRound, this);
            this.Collider.on("onCollisionEnter", this.onCollide, this);
            this.Collider.on("onCollisionExit", this.onCollideExit, this);
            this.registerTrigger();
          }
        }, {
          key: "update",
          value: function update() {}
        }, {
          key: "lateUpdate",
          value: function lateUpdate() {
            if (this.isUpdate == false || !this.model) return;

            if (this.RigidBody.isSleeping) {
              GameLogic.inst.ballSleep(this.model);
              this.isSleep = this.RigidBody.isSleeping;
              this.isUpdate = false;
            }
          }
        }, {
          key: "Model",
          get: function get() {
            return this.model;
          }
        }, {
          key: "RigidBody",
          get: function get() {
            return this.getComponent(RigidBody);
          }
        }, {
          key: "Collider",
          get: function get() {
            return this.getComponent(SphereCollider);
          }
        }, {
          key: "MeshRenderer",
          get: function get() {
            return this.getComponent(MeshRenderer);
          }
        }]);

        return BallObject;
      }(PrefabView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Manager/AudioManager.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "../Common/HashMap.js", "../Signal/Signal.js", "./GameStateController.js", "../GamePlay/Physics/BorderCollider.js", "../GamePlay/GameLogic.js", "../GamePlay/GameObject/BallObject.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, cclegacy, sys, loader, AudioClip, game, SingleTon, HashMap, ShotSignal, UpdateTimeNumber, StartCountSignal, ScoreCountingSignal, ShowSubmitSignal, OpenResultLayerSignal, PlayerScoreChanged, NextLevelSignal, ButtonClickSignal, CountDownSignal, GameOverSignal, RoundEndType, HitBorderSignal, BorderType, BallDropSignal, NextRountSignal, BallHitSignal, PATH, EffectLimitTime, EffectCountLimit, AudioController;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      sys = _cc.sys;
      loader = _cc.loader;
      AudioClip = _cc.AudioClip;
      game = _cc.game;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_CommonHashMapJs) {
      HashMap = _CommonHashMapJs.HashMap;
    }, function (_SignalSignalJs) {
      ShotSignal = _SignalSignalJs.ShotSignal;
      UpdateTimeNumber = _SignalSignalJs.UpdateTimeNumber;
      StartCountSignal = _SignalSignalJs.StartCountSignal;
      ScoreCountingSignal = _SignalSignalJs.ScoreCountingSignal;
      ShowSubmitSignal = _SignalSignalJs.ShowSubmitSignal;
      OpenResultLayerSignal = _SignalSignalJs.OpenResultLayerSignal;
      PlayerScoreChanged = _SignalSignalJs.PlayerScoreChanged;
      NextLevelSignal = _SignalSignalJs.NextLevelSignal;
      ButtonClickSignal = _SignalSignalJs.ButtonClickSignal;
      CountDownSignal = _SignalSignalJs.CountDownSignal;
      GameOverSignal = _SignalSignalJs.GameOverSignal;
    }, function (_GameStateControllerJs) {
      RoundEndType = _GameStateControllerJs.RoundEndType;
    }, function (_GamePlayPhysicsBorderColliderJs) {
      HitBorderSignal = _GamePlayPhysicsBorderColliderJs.HitBorderSignal;
      BorderType = _GamePlayPhysicsBorderColliderJs.BorderType;
    }, function (_GamePlayGameLogicJs) {
      BallDropSignal = _GamePlayGameLogicJs.BallDropSignal;
      NextRountSignal = _GamePlayGameLogicJs.NextRountSignal;
    }, function (_GamePlayGameObjectBallObjectJs) {
      BallHitSignal = _GamePlayGameObjectBallObjectJs.BallHitSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e807a8/1xBEkK6W4LroZNLh", "AudioManager", undefined);

      if (window.oncanplay) {
        window.oncanplay = function () {
          AudioController.canPlay = true;
        };
      }

      PATH = "sounds/";
      EffectLimitTime = 100;
      EffectCountLimit = 15;

      _export("AudioController", AudioController = /*#__PURE__*/function (_SingleTon) {
        _inherits(AudioController, _SingleTon);

        function AudioController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AudioController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AudioController)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.ballHitMap = new HashMap();
          _this.audioID = {};
          _this.effectCount = 0;
          _this.clips = new HashMap();
          _this.bgm = null;
          _this.effectVolumeScale = 1;
          _this.musicVolumeScale = 1;
          _this.effectVolume = 1;
          _this.musicVolume = 1;
          return _this;
        }

        _createClass(AudioController, [{
          key: "init",
          value: function init(callback, progress) {
            var _this2 = this;

            console.log(" start load AudioClip ");
            var self = this;
            loader.loadRes(PATH + "bgm", AudioClip, function (completed, total) {
              if (progress) {
                progress(completed / total);
              }
            }, function (err, clip) {
              if (err) {
                console.error(err);
              } else {
                if (typeof clip["_audio"] == "string" && loader["_cache"] && loader["_cache"][clip["_audio"]] && loader["_cache"][clip["_audio"]]["buffer"]) {
                  clip["_audio"] = loader["_cache"][clip["_audio"]]["buffer"];
                }

                self.clips.add(clip.name, clip);
                self.bgm = clip;
                callback && callback();
                self.playMusic("bgm", true);
                self.setMusicVolume(1);
              }
            }); // cc.loader.loadRes(PATH + "bgm_30", function (err, clip) {
            //     if (err) {
            //         console.error(err);
            //     } else {
            //         self.clips.add(clip.name, clip);
            //     }
            // });

            loader.loadResDir(PATH, function (err, res, urls) {
              if (err) {
                console.error(err);
              } else {
                var _iterator = _createForOfIteratorHelper(res),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var clip = _step.value;

                    if (typeof clip["_audio"] == "string" && loader["_cache"] && loader["_cache"][clip["_audio"]] && loader["_cache"][clip["_audio"]]["buffer"]) {
                      clip["_audio"] = loader["_cache"][clip["_audio"]]["buffer"];
                    }

                    if (!_this2.clips.has(clip.name)) {
                      _this2.clips.add(clip.name, clip);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            });
            this.bindSignal();
          }
        }, {
          key: "setEffectVolume",
          value: function setEffectVolume(volume) {
            var _this3 = this; // this.effectVolumeScale = 1;


            this.effectVolume = volume;
            this.clips.forEach(function (key, clip) {
              if (_this3.bgm && clip.name != _this3.bgm.name) {
                clip.setVolume(volume * _this3.effectVolumeScale);
              }
            });
          }
        }, {
          key: "setMusicVolume",
          value: function setMusicVolume(volume) {
            // this.musicVolumeScale = 1;
            this.musicVolume = volume;

            if (this.bgm) {
              this.bgm.setVolume(volume * this.musicVolumeScale);
            }
          }
        }, {
          key: "bindSignal",
          value: function bindSignal() {
            var _this4 = this;

            this.setEffectVolume(1);
            this.setMusicVolume(1);
            BallDropSignal.inst.addListener(function () {
              _this4.playEffect("pocket");
            }, this);
            HitBorderSignal.inst.addListener(function (type, power) {
              if (type != BorderType.Border && type != BorderType.HoleBorder) return;

              _this4.playEffect("hit_table", false, function () {}, power, false);
            }, this);
            ShotSignal.inst.addListener(function (power) {
              _this4.playEffect("pole_hit", false, function () {}, power * 2 + 0.1);
            }, this);
            NextRountSignal.inst.addListener(function () {
              _this4.ballHitMap.clear();
            }, this);
            BallHitSignal.inst.addListener(function (ballA, ballB, power) {
              // console.log("hit power:", power);
              _this4.playEffect("ball_hit", false, function () {}, power);
            }, this); // bgm

            UpdateTimeNumber.inst.addListener(function (time) {
              if (time >= 30) {
                if (_this4.bgm && _this4.bgm.name == "bgm" && _this4.bgm.state == AudioClip.PlayingState.PLAYING) {
                  return;
                }

                _this4.playMusic("bgm", true);
              } else {
                if (_this4.bgm && _this4.bgm.name == "bgm_30" && _this4.bgm.state == AudioClip.PlayingState.PLAYING) {
                  return;
                }

                _this4.bgm.stop();

                _this4.playMusic("bgm_30", true);
              }
            }, this);
            StartCountSignal.inst.addListener(function () {
              _this4.playEffect("start_count");
            }, this);
            /** 结算分数跳动 */

            ScoreCountingSignal.inst.addListener(function () {
              if (_this4.audioID["scoreCount"] && _this4.audioID["scoreCount"].state == AudioClip.PlayingState.PLAYING) return;

              _this4.playEffect("scoreCount", false, function () {
                _this4.audioID["scoreCount"] = null;
              });
            }, this);
            /** 显示结算按钮 */

            ShowSubmitSignal.inst.addListener(function () {
              if (_this4.audioID["scoreCount"]) {
                _this4.audioID["scoreCount"].stop();
              }

              _this4.playEffect("showSubmit");
            }, this);
            /** 打开结算界面 */

            OpenResultLayerSignal.inst.addListener(function (type) {
              if (type == RoundEndType.TimeUp) {
                _this4.playEffect("show_result");
              } else if (type == RoundEndType.Complete) {
                _this4.playEffect("show_result");
              } else {
                _this4.playEffect("show_result");
              }
            }, this);
            /** 玩家加分 */

            PlayerScoreChanged.inst.addListener(function (playerScore, addScore) {}, this);
            NextLevelSignal.inst.addListener(function (level) {
              if (level == 0) return;

              _this4.playEffect("pass_level"); // this.playEffect("map_move");

            }, this); // /** 游戏暂停 */
            // GamePauseSignal.inst.addListener(() => {
            //   this.playEffect("pause");
            // }, this);

            /** 按钮点击 */

            ButtonClickSignal.inst.addListener(function () {
              _this4.playEffect("click");
            }, this);
            /** 倒计时 */

            CountDownSignal.inst.addListener(function () {
              _this4.playEffect("countDown");
            }, this);
            GameOverSignal.inst.addListener(function (type) {
              _this4.effectCount = 0;

              switch (type) {
                case RoundEndType.Complete:
                  _this4.playEffect("complete");

                  break;

                case RoundEndType.TimeUp:
                  _this4.playEffect("timeup");

                  break;

                case RoundEndType.Over:
                  _this4.playEffect("over");

                  break;

                default:
                  _this4.playEffect("over");

                  break;
              }
            }, this);
          }
        }, {
          key: "playEffect",
          value: function playEffect(name) {
            var _this5 = this;

            var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var finishCallback = arguments.length > 2 ? arguments[2] : undefined;
            var volume = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var autoLimit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

            if (!AudioController.canPlay) {
              this.bindTouch();
              return;
            }

            if (this.effectCount >= EffectCountLimit) return;
            {
              if (this.audioID[name] != null) {
                return;
              }
            }
            if (this.EffectVolume <= 0.05) return;
            var effect = this.clips.get(name); // if (this.audioID[name]) return;

            if (effect) {
              this.audioID[name] = effect;

              if (effect.state == AudioClip.PlayingState.PLAYING && this.audioID[name] == null) {
                effect.stop();
              }

              effect.play();
              effect.setLoop(loop);
              effect.setVolume(volume * this.EffectVolume, true);
              this.EffectCount++;
              effect.once("ended", function () {
                _this5.EffectCount--;

                if (autoLimit) {
                  _this5.audioID[name] = null;
                }

                finishCallback && finishCallback();
              }, this);
              {
                setTimeout(function () {
                  _this5.audioID[name] = null;
                }, EffectLimitTime);
              }
            } else {
              loader.loadRes(PATH + name, AudioClip, function (err, res) {
                if (err) {
                  console.error(err);
                } else {
                  if (typeof res["_audio"] == "string" && loader["_cache"] && loader["_cache"][res["_audio"]] && loader["_cache"][res["_audio"]]["buffer"]) {
                    res["_audio"] = loader["_cache"][res["_audio"]]["buffer"];
                  }

                  _this5.clips.add(res.name, res); // if (this.audioID[name]) return;


                  _this5.audioID[name] = res;
                  res.play();
                  res.setLoop(loop);
                  res.setVolume(volume * _this5.EffectVolume, true);
                  _this5.EffectCount++;

                  _this5.audioID[name].once("ended", function () {
                    finishCallback && finishCallback();

                    if (autoLimit) {
                      _this5.audioID[name] = null;
                    }

                    _this5.EffectCount--;
                  }, _this5);

                  {
                    setTimeout(function () {
                      _this5.audioID[name] = null;
                    }, EffectLimitTime);
                  }
                }
              });
            }
          }
        }, {
          key: "playMusic",
          value: function playMusic(name) {
            var _this6 = this;

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

            if (music) {
              this.bgm = music;
              this.audioID[name] = music;
              this.bgm.play();
              this.bgm.setLoop(true);
              this.bgm.setVolume(this.MusicVolume);
            } else {
              loader.loadRes(PATH + name, AudioClip, function (err, res) {
                if (err) {
                  console.error(err);
                } else {
                  if (typeof res["_audio"] == "string" && loader["_cache"] && loader["_cache"][res["_audio"]] && loader["_cache"][res["_audio"]]["buffer"]) {
                    res["_audio"] = loader["_cache"][res["_audio"]]["buffer"];
                  }

                  _this6.clips.add(res.name, res);

                  _this6.bgm = res;
                  _this6.audioID[name] = res;

                  _this6.bgm.play();

                  _this6.bgm.setLoop(true);
                }
              });
            }
          }
        }, {
          key: "bindTouch",
          value: function bindTouch() {
            if (!AudioController.hasBindTouch) {
              var self = this;

              var playFunc = function playFunc() {
                game.canvas.removeEventListener("touchstart", playFunc);
                AudioController.canPlay = true;
                var item;

                while ((item = AudioController.PlayedList.pop()) && self.clips.get(item.clipName) && !item.skip) {
                  self.playMusic(item.clipName, item.loop);
                }
              };

              AudioController.hasBindTouch = true;
              game.canvas.addEventListener("touchstart", playFunc);
            }
          }
        }, {
          key: "EffectCount",
          get: function get() {
            return this.effectCount;
          },
          set: function set(val) {
            this.effectCount = val;
            this.effectCount = Math.max(0, this.effectCount);
          }
        }, {
          key: "EffectVolume",
          get: function get() {
            if (this.clips.length <= 0) return 0;
            return this.effectVolume / this.effectVolumeScale;
          }
        }, {
          key: "MusicVolume",
          get: function get() {
            if (this.musicVolumeScale <= 0) return 0;
            return this.musicVolume / this.musicVolumeScale;
          }
        }]);

        return AudioController;
      }(SingleTon()));

      AudioController.PlayedList = [];
      AudioController.canPlay = CC_DEBUG || sys.WIN32 == sys.platform;
      AudioController.hasBindTouch = false;
      CC_DEBUG && (window["gAudio"] = AudioController.inst);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Manager/AdController.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/ToSingleTon.js", "./AudioManager.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, cclegacy, director, Node, VideoPlayer, UITransform, SingleTon, AudioController, AdController;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      director = _cc.director;
      Node = _cc.Node;
      VideoPlayer = _cc.VideoPlayer;
      UITransform = _cc.UITransform;
    }, function (_CommonToSingleTonJs) {
      SingleTon = _CommonToSingleTonJs.SingleTon;
    }, function (_AudioManagerJs) {
      AudioController = _AudioManagerJs.AudioController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34f55CXNDFMZbvIq4L0XTiw", "AdController", undefined);

      _export("AdController", AdController = /*#__PURE__*/function (_SingleTon) {
        _inherits(AdController, _SingleTon);

        function AdController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AdController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdController)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.hasBind = false;
          _this.finishCallback = {};
          _this.failedCallback = {};
          _this.adCount = 0;
          _this.msgMap = {};
          _this.volume = 0;
          return _this;
        }

        _createClass(AdController, [{
          key: "showAd",
          value: function showAd(adUnitId, finsh, failed) {
            var _this2 = this;

            if (this.hasBind == false) {
              this.bindCallback();
            }

            var uniqueKey = adUnitId + this.adCount;
            this.msgMap[uniqueKey] = adUnitId;

            if (this.finishCallback[uniqueKey] == null) {
              this.finishCallback[uniqueKey] = [];
            }

            this.finishCallback[uniqueKey].push(finsh);

            if (this.failedCallback[uniqueKey] == null) {
              this.failedCallback[uniqueKey] = [];
            }

            this.failedCallback[uniqueKey].push(failed);

            if (CELER_X) {
              celerSDK.showAd(uniqueKey);
            } else {
              if (director.getScene() && director.getScene().getChildByName("Canvas")) {
                var rootNode = director.getScene().getChildByName("Canvas");

                if (rootNode.getChildByName("adNode")) {
                  return;
                }

                var adNode = new Node("adNode");
                var videoPlayer = adNode.addComponent(VideoPlayer);
                videoPlayer.remoteURL = "https://vicat.wang/GameRes/catcatcat.mp4";
                rootNode.getComponent(UITransform).width = 1464;
                rootNode.getComponent(UITransform).height = 2400;
                rootNode.addChild(adNode);
                adNode.setPosition(0, 0, 0);
                this.volume = AudioController.inst.MusicVolume;
                AudioController.inst.setMusicVolume(0);
                videoPlayer.node.on("ready-to-play", function () {
                  console.log("ready-to-play");
                  adNode.getComponent(UITransform).width = 1080;
                  adNode.getComponent(UITransform).height = 1920;
                  videoPlayer.play();
                }, this);
                videoPlayer.node.on("meta-loaded", function () {
                  console.log("meta-loaded");
                }, this);
                videoPlayer.node.on("clicked", function () {
                  console.log("clicked");
                  adNode["pauseCount"]++;

                  if (adNode["pauseCount"] >= 5) {
                    var cocosVideos = document.getElementsByClassName("cocosVideo");

                    for (var i = 0; i < cocosVideos.length; i++) {
                      var element = cocosVideos.item(i);

                      if (element) {
                        element.remove();
                      }
                    }

                    setTimeout(function () {
                      adNode.removeFromParent();
                      adNode.destroy();

                      _this2.onAddFaild(uniqueKey);
                    }, 0);
                  }
                }, this);
                videoPlayer.node.on("playing", function () {
                  console.log("playing");
                }, this);
                adNode["pauseCount"] = 0;
                videoPlayer.node.on("paused", function () {
                  console.log("paused");
                  adNode["pauseCount"]++;

                  if (adNode["pauseCount"] >= 5) {
                    var cocosVideos = document.getElementsByClassName("cocosVideo");

                    for (var i = 0; i < cocosVideos.length; i++) {
                      var element = cocosVideos.item(i);

                      if (element) {
                        element.remove();
                      }
                    }

                    setTimeout(function () {
                      adNode.removeFromParent();
                      adNode.destroy();

                      _this2.onAddFaild(uniqueKey);
                    }, 0);
                  }
                }, this);
                videoPlayer.node.on("stopped", function () {
                  console.log("stopped");
                }, this);
                videoPlayer.node.on("completed", function () {
                  console.log("completed");
                  videoPlayer.stop();
                  var cocosVideos = document.getElementsByClassName("cocosVideo");

                  for (var i = 0; i < cocosVideos.length; i++) {
                    var element = cocosVideos.item(i);

                    if (element) {
                      element.remove();
                    }
                  }

                  setTimeout(function () {
                    adNode.removeFromParent();
                    adNode.destroy();

                    _this2.onAdFinish(uniqueKey);
                  }, 0);
                }, this);
              }
            }

            this.adCount++;
            console.log(" request ad:", uniqueKey);
          }
        }, {
          key: "bindCallback",
          value: function bindCallback() {
            this.hasBind = true;

            if (CELER_X) {
              celerSDK.onAdPlayFailed(this.onAddFaild.bind(this));
              celerSDK.onAdPlayFinished(this.onAdFinish.bind(this));
            }
          }
        }, {
          key: "onAdFinish",
          value: function onAdFinish(uniqeKey) {
            if (this.finishCallback[uniqeKey]) {
              var callbacks = this.finishCallback[uniqeKey];

              var _iterator = _createForOfIteratorHelper(callbacks),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var finish = _step.value;
                  finish(this.msgMap[uniqeKey]);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              this.finishCallback[uniqeKey] = null;
              this.failedCallback[uniqeKey] = null;
              this.msgMap[uniqeKey] = null;
            }

            if (!CELER_X) {
              AudioController.inst.setMusicVolume(this.volume);
            }
          }
        }, {
          key: "onAddFaild",
          value: function onAddFaild(uniqeKey) {
            if (this.failedCallback[uniqeKey]) {
              var callbacks = this.failedCallback[uniqeKey];

              var _iterator2 = _createForOfIteratorHelper(callbacks),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var failed = _step2.value;
                  failed(this.msgMap[uniqeKey]);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.failedCallback[uniqeKey] = null;
              this.finishCallback[uniqeKey] = null;
              this.msgMap[uniqeKey] = null;
            }

            if (!CELER_X) {
              AudioController.inst.setMusicVolume(this.volume);
            }
          }
        }]);

        return AdController;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Ad/AdLayer.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Signal/Signal.js", "./FlyCnicornAd.js", "../Manager/GameStateController.js", "../Manager/AdController.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteAtlas, v3, Node, Sprite, Label, Component, WildAdButtonClick, FlyCnicornClickSignal, AdFinishSignal, HideWildAdButtonSignal, RemoveFlyCnicornSignal, CnicornWatchFailSignal, FlyCnicornAd, GameStateController, AdController, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, AdType, AdLayer;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0,
    AdType: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      SpriteAtlas = _cc.SpriteAtlas;
      v3 = _cc.v3;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Component = _cc.Component;
    }, function (_SignalSignalJs) {
      WildAdButtonClick = _SignalSignalJs.WildAdButtonClick;
      FlyCnicornClickSignal = _SignalSignalJs.FlyCnicornClickSignal;
      AdFinishSignal = _SignalSignalJs.AdFinishSignal;
      HideWildAdButtonSignal = _SignalSignalJs.HideWildAdButtonSignal;
      RemoveFlyCnicornSignal = _SignalSignalJs.RemoveFlyCnicornSignal;
      CnicornWatchFailSignal = _SignalSignalJs.CnicornWatchFailSignal;
    }, function (_FlyCnicornAdJs) {
      FlyCnicornAd = _FlyCnicornAdJs.FlyCnicornAd;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_ManagerAdControllerJs) {
      AdController = _ManagerAdControllerJs.AdController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ce181whyv9BaLYSAnQp4Seg", "AdLayer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (AdType) {
        AdType[AdType["Cnicorn"] = 0] = "Cnicorn";
        AdType[AdType["Sun"] = 1] = "Sun";
      })(AdType || _export("AdType", AdType = {}));

      _export("AdLayer", AdLayer = (_dec = ccclass("AdLayer"), _dec2 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AdLayer, _Component);

        function AdLayer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AdLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "AdAtlas", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(AdLayer, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            this.node.active = false;
            this.node.scale = v3(1, 1, 1);
            WildAdButtonClick.inst.addListener(function () {
              _this2.Show(AdType.Sun);
            }, this);
            FlyCnicornClickSignal.inst.addListener(function () {
              _this2.Show(AdType.Cnicorn);
            }, this);
            this.BackToGame.on(Node.EventType.TOUCH_END, function () {
              setTimeout(function () {
                _this2.node.active = false;
                GameStateController.inst.resume();
                FlyCnicornAd.ShowTimeRest = 10;
              }, 0);
            }, this);
          }
        }, {
          key: "onAdFinish",
          value: function onAdFinish(adUnitId) {
            var _this3 = this;

            AdFinishSignal.inst.dispatch(adUnitId);

            if (adUnitId == AdType[AdType.Sun]) {
              CELER_X && HideWildAdButtonSignal.inst.dispatch();
            } else {
              CELER_X && RemoveFlyCnicornSignal.inst.dispatch();
            }

            setTimeout(function () {
              _this3.node.active = false;
              GameStateController.inst.resume();
            }, 0);
          }
        }, {
          key: "onAdFailed",
          value: function onAdFailed(adUnitId) {
            var _this4 = this;

            this.FailTip.active = true;
            this.Panel.active = false;

            if (adUnitId == AdType[AdType.Cnicorn]) {
              CnicornWatchFailSignal.inst.dispatch();
            }

            setTimeout(function () {
              _this4.node.active = false;
              GameStateController.inst.resume();
            }, 2000);
          }
        }, {
          key: "Show",
          value: function Show(type) {
            var _this5 = this;

            if (this.node.active == true) return;
            GameStateController.inst.pause(true);
            this.node.active = true;
            this.FailTip.active = false;
            this.Panel.active = true;
            this.WatchAd.active = true;

            if (type == AdType.Sun) {
              this.Title.spriteFrame = this.AdAtlas.getSpriteFrame("font_free");
              this.Content.spriteFrame = this.AdAtlas.getSpriteFrame("font_get prop1");
              this.SubContent.spriteFrame = this.AdAtlas.getSpriteFrame("font_get prop2");
              this.WatchAd.getComponent(Sprite).spriteFrame = this.AdAtlas.getSpriteFrame("btn_getprop");
              this.MoveBonus.active = false;
            } else {
              this.Title.spriteFrame = this.AdAtlas.getSpriteFrame("font_add");
              this.Content.spriteFrame = this.AdAtlas.getSpriteFrame("font_addmoves1");
              this.SubContent.spriteFrame = this.AdAtlas.getSpriteFrame("font_addmoves2");
              this.MoveBonus.active = true;
              this.MoveBonus.getComponent(Label).string = "3";
              this.WatchAd.getComponent(Sprite).spriteFrame = this.AdAtlas.getSpriteFrame("btn_addmoves");
            }

            this.WatchAd.targetOff(this);
            this.WatchAd.once(Node.EventType.TOUCH_END, function () {
              setTimeout(function () {
                _this5.WatchAd.active = false;
              }, 0);
              AdController.inst.showAd(AdType[type], function (adUnitId) {
                console.log(" watch ad success:", adUnitId);

                _this5.onAdFinish(adUnitId);
              }, function (adUnitId) {
                console.log(" watch ad fail:", adUnitId);

                _this5.onAdFailed(adUnitId);
              });
            }, this);
          }
        }, {
          key: "Panel",
          get: function get() {
            return this.node.getChildByName("NormalPanel");
          }
        }, {
          key: "WatchAd",
          get: function get() {
            return this.Panel.getChildByName("btn_get");
          }
        }, {
          key: "BackToGame",
          get: function get() {
            return this.Panel.getChildByName("btn_back");
          }
        }, {
          key: "Content",
          get: function get() {
            return this.Panel.getChildByName("font_freeprop1").getComponent(Sprite);
          }
        }, {
          key: "SubContent",
          get: function get() {
            return this.Panel.getChildByName("font_freeprop2").getComponent(Sprite);
          }
        }, {
          key: "MoveBonus",
          get: function get() {
            return this.Panel.getChildByName("Moves");
          }
        }, {
          key: "Title",
          get: function get() {
            return this.Panel.getChildByName("bg_title_freeprop").getComponent(Sprite);
          }
        }, {
          key: "FailTip",
          get: function get() {
            return this.node.getChildByName("FailTip");
          }
        }]);

        return AdLayer;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "AdAtlas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Ad/FlyAdCnicornAnimation.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, ccclass, property, FlyAdCnicornAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8cfecG9Tl9Ffa+3gHbpMJrH", "FlyAdCnicornAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FlyAdCnicornAnimation", FlyAdCnicornAnimation = (_dec = ccclass("FlyAdCnicornAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(FlyAdCnicornAnimation, _SpriteUIAnimation);

        function FlyAdCnicornAnimation() {
          _classCallCheck(this, FlyAdCnicornAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(FlyAdCnicornAnimation).apply(this, arguments));
        }

        return FlyAdCnicornAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Ad/WildAdAnimation.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Signal/Signal.js", "../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, WildAdAnimationIsPlaySignal, SpriteUIAnimation, _dec, _class, _temp, ccclass, property, WildAdAnimation;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_SignalSignalJs) {
      WildAdAnimationIsPlaySignal = _SignalSignalJs.WildAdAnimationIsPlaySignal;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "be980UzCrJAS7FY3f4VP9QC", "WildAdAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WildAdAnimation", WildAdAnimation = (_dec = ccclass("WildAdAnimation"), _dec(_class = (_temp = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(WildAdAnimation, _SpriteUIAnimation);

        function WildAdAnimation() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WildAdAnimation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WildAdAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.isStart = false;
          return _this;
        }

        _createClass(WildAdAnimation, [{
          key: "onStartPlay",
          value: function onStartPlay() {
            var _this2 = this;

            WildAdAnimationIsPlaySignal.inst.dispatch(true);

            if (this.isStart == false) {
              this.isStart = true;
              setTimeout(function () {
                _this2.isStart = false;

                _this2.stop();

                _this2.Sprite.color.a = 0;
                setTimeout(function () {
                  _this2.Sprite.color.a = 255;
                  _this2.Loop = true;

                  _this2.play();
                }, 8000);
              }, 2000);
            }
          }
        }, {
          key: "onComplete",
          value: function onComplete() {
            WildAdAnimationIsPlaySignal.inst.dispatch(false);
          }
        }]);

        return WildAdAnimation;
      }(SpriteUIAnimation), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Ad/WildAdButton.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Signal/Signal.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelper, cclegacy, _decorator, Enum, sys, Vec3, Button, tween, v3, Node, Component, WildButtonReadySignal, WildAdButtonClick, HideWildAdButtonSignal, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, AdButtonType, WildAdButton;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0,
    AdButtonType: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      sys = _cc.sys;
      Vec3 = _cc.Vec3;
      Button = _cc.Button;
      tween = _cc.tween;
      v3 = _cc.v3;
      Node = _cc.Node;
      Component = _cc.Component;
    }, function (_SignalSignalJs) {
      WildButtonReadySignal = _SignalSignalJs.WildButtonReadySignal;
      WildAdButtonClick = _SignalSignalJs.WildAdButtonClick;
      HideWildAdButtonSignal = _SignalSignalJs.HideWildAdButtonSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7775di/1uRObJZuOeiWV/SO", "WildAdButton", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (AdButtonType) {
        AdButtonType[AdButtonType["Default"] = 0] = "Default";
      })(AdButtonType || _export("AdButtonType", AdButtonType = {}));

      _export("WildAdButton", WildAdButton = (_dec = ccclass("WildAdButton"), _dec2 = property({
        type: Enum(AdButtonType)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(WildAdButton, _Component);

        function WildAdButton() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WildAdButton);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WildAdButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "adType", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(WildAdButton, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            this.node.active = sys.isMobile && sys.isBrowser && sys.os == sys.OS_ANDROID;
            this.node.parent.active = this.node.active;
            this.node.scale = Vec3.ZERO;
            WildButtonReadySignal.inst.addOnce(function (type) {
              if (_this2.adType != type && type != null) return;
              console.log(" Wild button :", _this2.node.active);

              if (_this2.node.active) {
                _this2.node.getComponent(Button).transition = Button.Transition.NONE;
                tween(_this2.node).sequence(tween(_this2.node).to(0.1, {
                  scale: v3(1, 1, 1)
                }), tween(_this2.node).call(function () {
                  _this2.node.getComponent(Button).transition = Button.Transition.SCALE;
                  _this2.node.getComponent(Button).zoomScale = 1.2;

                  _this2.node.on(Node.EventType.TOUCH_END, function () {
                    WildAdButtonClick.inst.dispatch();
                  }, _this2);
                })).start();
              }
            }, this);
            HideWildAdButtonSignal.inst.addListener(function (type) {
              if (_this2.adType != type && type != null) return;
              _this2.node.active = false;
              _this2.node.parent.active = false;

              var _iterator = _createForOfIteratorHelper(_this2.node.parent.children),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var child = _step.value;

                  if (child.active) {
                    _this2.node.parent.active = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }, this);
          }
        }]);

        return WildAdButton;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "adType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AdButtonType.Default;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///App/VersionLabel.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, UIOpacity, Label, Component, _dec, _class, ccclass, property, VersionLabel;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      UIOpacity = _cc.UIOpacity;
      Label = _cc.Label;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "12b96U7ryRFsJTN1NVKLFcy", "VersionLabel", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("VersionLabel", VersionLabel = (_dec = ccclass("VersionLabel"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(VersionLabel, _Component);

        function VersionLabel() {
          _classCallCheck(this, VersionLabel);

          return _possibleConstructorReturn(this, _getPrototypeOf(VersionLabel).apply(this, arguments));
        }

        _createClass(VersionLabel, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            if (CC_PREVIEW) {
              window["DEBUG_VERSION"] = "test 6.0.0";
            }

            this.getComponent(UIOpacity).opacity = 100;
            this.getComponent(Label).string = window["GAME_VERSION"] && window["GAME_VERSION"].split("version") && window["GAME_VERSION"].split("version")[1] ? window["GAME_VERSION"].split("version")[1].replace(":", "") : window["DEBUG_VERSION"];
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return VersionLabel;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/Camera/CameraAdaption.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, v3, view, Component, _dec, _class, _temp, ccclass, property, CameraAdaption;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      view = _cc.view;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "89ee3s1GqhJf575oa7aEcuZ", "CameraAdaption", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CameraAdaption", CameraAdaption = (_dec = ccclass("CameraAdaption"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(CameraAdaption, _Component);

        function CameraAdaption() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, CameraAdaption);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CameraAdaption)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.defaultY = 0;
          return _this;
        }

        _createClass(CameraAdaption, [{
          key: "start",
          value: function start() {
            this.node.setPosition(v3(0, 10, -0.343)); // this.defaultY = this.node.position.y;
            // if (sys.isMobile) {
            //   window.addEventListener("resize", this.onResize.bind(this));
            // } else {
            //   view.on("canvas-resize", this.onResize, this);
            // }
            // this.onResize();
          }
        }, {
          key: "onResize",
          value: function onResize() {
            /** 实际尺寸 */
            var canvasSize = view.getCanvasSize();
            /** 设计尺寸 */

            var designSize = view.getDesignResolutionSize();
            var designRatio = designSize.height / designSize.width;
            var useRatio = canvasSize.height / canvasSize.width;
            this.node.setPosition(v3(this.node.position.x, this.defaultY * Math.max(1, useRatio / designRatio), this.node.position.z));
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return CameraAdaption;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/Time.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, Time;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f955hpCORPk74+xf0XvlSB", "Time", undefined);

      _export("Time", Time = /*#__PURE__*/function () {
        function Time() {
          _classCallCheck(this, Time);
        }

        _createClass(Time, null, [{
          key: "timeFormat",
          value: function timeFormat(time) {
            var min = Math.floor(time / 60); //if (min < 10) min = "0" + min;

            var sec = Math.floor(time % 60);
            var secStr = sec.toString();
            if (sec < 10) secStr = "0" + sec;
            return min + ":" + secStr;
          }
        }]);

        return Time;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/BaseMediator.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, BaseMediator;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2588aikF8ZLGogdwfKvfPeO", "BaseMediator", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BaseMediator", BaseMediator = (_dec = ccclass("BaseMediator"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(BaseMediator, _Component);

        function BaseMediator() {
          _classCallCheck(this, BaseMediator);

          return _possibleConstructorReturn(this, _getPrototypeOf(BaseMediator).apply(this, arguments));
        }

        _createClass(BaseMediator, [{
          key: "bind",
          value: function bind(view) {
            this.view = view;
          }
        }, {
          key: "onRegister",
          value: function onRegister() {
            console.error(" should override onRegister ");
          }
        }, {
          key: "onUnregister",
          value: function onUnregister() {
            console.error(" should override onUnregister ");
          }
        }, {
          key: "View",
          get: function get() {
            console.assert(this.view != null, " view is null");
            return this.view;
          }
        }]);

        return BaseMediator;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/SingleTouchMediator.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Node, Component, _dec, _class, _temp, ccclass, property, SingleTouchMediator;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a8cb4DReGdLxalUY3r9Gu66", "SingleTouchMediator", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SingleTouchMediator", SingleTouchMediator = (_dec = ccclass("SingleTouchMediator"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SingleTouchMediator, _Component);

        function SingleTouchMediator() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SingleTouchMediator);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SingleTouchMediator)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._touchid = null;
          return _this;
        }

        _createClass(SingleTouchMediator, [{
          key: "bind",
          value: function bind(view) {
            this.view = view;
          }
        }, {
          key: "onRegister",
          value: function onRegister() {
            this.node.targetOff(this);
            this.node.onSetParent = this._onSetParent.bind(this);
            this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
            this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
            this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
            this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          }
        }, {
          key: "onUnregister",
          value: function onUnregister() {
            this.node.targetOff(this);
          }
        }, {
          key: "touchStart",
          value: function touchStart(event) {
            if (this.touchid !== null && this.touchid !== event.getID()) {
              console.log(this.node.name, " touch start  touchid is different: ", this.touchid, event.getID());
              event.propagationStopped = true;
              return;
            }

            this.touchid = event.getID();
            this.onTouchStart(event);
          }
        }, {
          key: "touchMove",
          value: function touchMove(event) {
            if (this.touchid !== null && this.touchid !== event.getID()) {
              //console.log(this.node.name, " touch move  touchid is different! ");
              event.propagationStopped = true;
              return;
            }

            this.touchid = event.getID();
            this.onTouchMove(event);
          }
        }, {
          key: "touchEnd",
          value: function touchEnd(event) {
            if (this.touchid !== null && this.touchid !== event.getID()) {
              console.log(this.node.name, " touch end  touchid is different: ", this.touchid, event.getID());
              event.propagationStopped = true;
              return;
            }

            if (this.touchid == null) {
              event.propagationStopped = true;
              return;
            }

            this.touchid = null;
            this.onTouchEnd(event);
            this.OnClick();
          }
        }, {
          key: "touchCancel",
          value: function touchCancel(event) {
            if (this.touchid !== null && this.touchid !== event.getID()) {
              console.log(this.node.name, " touch cancel  touchid is different: ", this.touchid, event.getID());
              event.propagationStopped = true;
              return;
            }

            if (this.touchid == null) {
              event.propagationStopped = true;
              return;
            }

            this.touchid = null;
            this.onTouchCancel(event);
          }
        }, {
          key: "OnClick",
          value: function OnClick() {}
        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {}
        }, {
          key: "onTouchMove",
          value: function onTouchMove(event) {}
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(event) {}
        }, {
          key: "onTouchCancel",
          value: function onTouchCancel(event) {}
        }, {
          key: "onSetParent",
          value: function onSetParent(parent, oldParent) {}
        }, {
          key: "_onSetParent",
          value: function _onSetParent(parent, oldParent) {
            if (parent == null) {
              this.touchid = null;
            }

            this.onSetParent(parent, oldParent);
          }
        }, {
          key: "View",
          get: function get() {
            console.assert(this.view != null, " view is null");
            return this.view;
          }
        }, {
          key: "touchid",
          get: function get() {
            return this._touchid;
          },
          set: function set(val) {
            this._touchid = val;
            window["OpenTouchIDlog"] && console.log(this.node.name, " touchid :", this._touchid);
          }
        }]);

        return SingleTouchMediator;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/GlobalSingleTouch/GlobalSingleTouchMediator.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../../Signal/Signal.js", "../../../Manager/GameStateController.js", "../SingleTouchMediator.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, cclegacy, _decorator, ShowTipSignal, GameStateController, SingleTouchMediator, _dec, _class, _temp, ccclass, property, GlobalSingleTouchMediator;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_SignalSignalJs) {
      ShowTipSignal = _SignalSignalJs.ShowTipSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_SingleTouchMediatorJs) {
      SingleTouchMediator = _SingleTouchMediatorJs.SingleTouchMediator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9e22fsqeiNA6brU2JjHGngm", "GlobalSingleTouchMediator", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GlobalSingleTouchMediator", GlobalSingleTouchMediator = (_dec = ccclass("GlobalSingleTouchMediator"), _dec(_class = (_temp = /*#__PURE__*/function (_SingleTouchMediator) {
        _inherits(GlobalSingleTouchMediator, _SingleTouchMediator);

        function GlobalSingleTouchMediator() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GlobalSingleTouchMediator);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GlobalSingleTouchMediator)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.time = 0;
          return _this;
        }

        _createClass(GlobalSingleTouchMediator, [{
          key: "onRegister",
          value: function onRegister() {
            _get(_getPrototypeOf(GlobalSingleTouchMediator.prototype), "onRegister", this).call(this);

            this.node.eventProcessor.touchListener["swallowTouches"] = false;
          }
        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {
            if (GameStateController.inst.canStart() && GameStateController.inst.isRoundStart() == false) {
              GameStateController.inst.roundStart();
            }

            this.time = 0;
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(event) {
            this.time = 0;
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(event) {
            this.time = 0;
          }
        }, {
          key: "onTouchCancel",
          value: function onTouchCancel(event) {
            this.time = 0;
          }
        }, {
          key: "update",
          value: function update(dt) {
            this.time += dt;

            if (this.time >= 3) {
              this.time = 0;
              ShowTipSignal.inst.dispatch();
            }
          }
        }]);

        return GlobalSingleTouchMediator;
      }(SingleTouchMediator), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/GlobalSingleTouch/GlobalSingleTouchView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseView.js", "./GlobalSingleTouchMediator.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, BaseView, GlobalSingleTouchMediator, _dec, _class, ccclass, property, GlobalSingleTouchView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_BaseViewJs) {
      BaseView = _BaseViewJs.BaseView;
    }, function (_GlobalSingleTouchMediatorJs) {
      GlobalSingleTouchMediator = _GlobalSingleTouchMediatorJs.GlobalSingleTouchMediator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4eb47teSZlLQ5K7/rgpl/z3", "GlobalSingleTouchView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GlobalSingleTouchView", GlobalSingleTouchView = (_dec = ccclass("GlobalSingleTouchView"), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inherits(GlobalSingleTouchView, _BaseView);

        function GlobalSingleTouchView() {
          _classCallCheck(this, GlobalSingleTouchView);

          return _possibleConstructorReturn(this, _getPrototypeOf(GlobalSingleTouchView).apply(this, arguments));
        }

        _createClass(GlobalSingleTouchView, [{
          key: "onLoad",
          // LIFE-CYCLE CALLBACKS:
          value: function onLoad() {
            this.BindMedaitor(GlobalSingleTouchMediator);
          }
        }, {
          key: "start",
          value: function start() {} // update (dt) {}

        }]);

        return GlobalSingleTouchView;
      }(BaseView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/SingleTouchView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "./BaseView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Node, BaseView, _dec, _class, _temp, ccclass, property, SingleTouchView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_BaseViewJs) {
      BaseView = _BaseViewJs.BaseView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6ae4czD7XJJ1pkkxnfN4Nmq", "SingleTouchView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SingleTouchView", SingleTouchView = (_dec = ccclass("SingleTouchView"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inherits(SingleTouchView, _BaseView);

        function SingleTouchView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SingleTouchView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SingleTouchView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._touchid = null;
          return _this;
        }

        _createClass(SingleTouchView, [{
          key: "onLoad",
          value: function onLoad() {
            this.node.onSetParent = this._onSetParent.bind(this);
            this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
            this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
            this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
            this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "touchStart",
          value: function touchStart(event) {
            if (this.touchid !== null && this.touchid !== event.getID()) {
              console.log(this.node.name, " touch start  touchid is different! ");
              return;
            }

            this.touchid = event.getID();
            this.onTouchStart(event);
          }
        }, {
          key: "touchMove",
          value: function touchMove(event) {
            if (this.touchid !== null && this.touchid !== event.getID()) {
              // console.log(this.node.name, " touch move  touchid is different! ");
              return;
            }

            this.touchid = event.getID();
            this.onTouchMove(event);
          }
        }, {
          key: "touchEnd",
          value: function touchEnd(event) {
            if (this.touchid !== null && this.touchid !== event.getID()) {
              console.log(this.node.name, " touch end  touchid is different! ");
              return;
            }

            this.touchid = null;
            this.onTouchEnd(event);
          }
        }, {
          key: "touchCancel",
          value: function touchCancel(event) {
            if (this.touchid !== null && this.touchid !== event.getID()) {
              console.log(this.node.name, " touch cancel  touchid is different! ");
              return;
            }

            this.touchid = null;
            this.onTouchCancel(event);
          }
        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {}
        }, {
          key: "onTouchMove",
          value: function onTouchMove(event) {}
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(event) {}
        }, {
          key: "onTouchCancel",
          value: function onTouchCancel(event) {}
        }, {
          key: "onSetParent",
          value: function onSetParent(parent, oldParent) {}
        }, {
          key: "_onSetParent",
          value: function _onSetParent(parent, oldParent) {
            if (parent == null) {
              this.touchid = null;
            }

            this.onSetParent(parent, oldParent);
          }
        }, {
          key: "touchid",
          get: function get() {
            return this._touchid;
          },
          set: function set(val) {
            this._touchid = val;
            window["OpenTouchIDlog"] && console.log(this.node.name, " touchid :", this._touchid);
          }
        }]);

        return SingleTouchView;
      }(BaseView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/Transform/EaseBaseView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, v3, math, BaseView, _dec, _class, _temp, ccclass, property, EaseBaseView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      math = _cc.math;
    }, function (_BaseViewJs) {
      BaseView = _BaseViewJs.BaseView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a702e+JokpAlrV9ych6GQz4", "EaseBaseView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EaseBaseView", EaseBaseView = (_dec = ccclass("EaseBaseView"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inherits(EaseBaseView, _BaseView);

        function EaseBaseView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EaseBaseView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EaseBaseView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.targetVal = v3(0, 0, 0);
          _this.startTime = 0;
          _this.lastTime = 0;
          _this.completeCallback = null;
          _this.callOnStart = false;
          return _this;
        }

        _createClass(EaseBaseView, [{
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onStart",
          value: function onStart() {}
        }, {
          key: "end",
          value: function end() {
            if (this.completeCallback == null) return;
            this.onComplete();
            this.complete();
          }
          /**
           *
           * @param targetVal 目标值
           * @param lastTime 持续时间（秒）
           * @param callback 完成回调
           * @param delayTime 延迟（秒）
           */

        }, {
          key: "startUpdate",
          value: function startUpdate(targetVal, lastTime, callback) {
            var delayTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            this.callOnStart = false;
            this.targetVal = targetVal;
            this.startTime = Date.now() + delayTime * 1000;
            this.lastTime = lastTime * 1000;
            this.completeCallback = callback;
          }
        }, {
          key: "complete",
          value: function complete() {
            this.startTime = this.lastTime = 0;

            if (this.completeCallback) {
              var callback = this.completeCallback;
              this.completeCallback = null;
              callback();
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.startTime = this.lastTime = 0;
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (math.approx(this.startTime, 0, 0.001)) return;
            if (this.canUpdate() == false) return;

            if (this.isComplete()) {
              this.onComplete();
              this.complete();
            } else {
              if (this.canStart()) {
                if (this.callOnStart == false) {
                  this.callOnStart = true;
                  this.onStart();
                }

                this.onStep();
              }
            }
          }
        }, {
          key: "canStart",
          value: function canStart() {
            return Date.now() >= this.startTime && this.startTime != 0;
          }
        }, {
          key: "isComplete",
          value: function isComplete() {
            return Date.now() >= this.startTime + this.lastTime;
          }
        }, {
          key: "canUpdate",
          value: function canUpdate() {
            console.error("you should override this method.");
            return true;
          }
        }, {
          key: "onStep",
          value: function onStep() {}
        }, {
          key: "onComplete",
          value: function onComplete() {}
        }, {
          key: "ease",
          value: function ease(startVal, endVal) {
            if (this.lastTime <= 0) {
              return endVal;
            }

            var spendTime = Date.now() - this.startTime;
            return (endVal - startVal) * spendTime / this.lastTime + startVal;
          }
        }, {
          key: "CompleteCallback",
          get: function get() {
            return this.completeCallback;
          }
        }, {
          key: "StartTime",
          get: function get() {
            return this.startTime;
          }
        }, {
          key: "LastTime",
          get: function get() {
            return this.lastTime;
          }
        }, {
          key: "Target",
          get: function get() {
            return this.targetVal;
          }
        }]);

        return EaseBaseView;
      }(BaseView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/Transform/PositionView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "./EaseBaseView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Vec3, v3, EaseBaseView, _dec, _class, _temp, ccclass, property, PositionView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
    }, function (_EaseBaseViewJs) {
      EaseBaseView = _EaseBaseViewJs.EaseBaseView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b137aIFdPBEaIBagR/JHpiX", "PositionView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PositionView", PositionView = (_dec = ccclass("PositionView"), _dec(_class = (_temp = /*#__PURE__*/function (_EaseBaseView) {
        _inherits(PositionView, _EaseBaseView);

        function PositionView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PositionView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PositionView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.startPos = Vec3.ZERO;
          return _this;
        }

        _createClass(PositionView, [{
          key: "canUpdate",
          value: function canUpdate() {
            return true;
          }
        }, {
          key: "onLoad",
          value: function onLoad() {
            if (CC_DEBUG && this.node.name == "TestNode") {
              window["testPosition"] = this.onPositionChanged.bind(this);
            }
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onPositionChanged",
          value: function onPositionChanged(targetPos, lastTime, callback) {
            var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            this.startPos = this.node.position.clone();
            this.startUpdate(v3(targetPos.x, targetPos.y, targetPos.z), lastTime, callback, delay);
          }
        }, {
          key: "onStep",
          value: function onStep() {
            this.node.setPosition(this.ease(this.startPos.x, this.Target.x), this.ease(this.startPos.y, this.Target.y), this.ease(this.startPos.z, this.Target.z));
          }
        }, {
          key: "onComplete",
          value: function onComplete() {
            this.node.setPosition(v3(this.Target.x, this.Target.y, this.Target.z));
          }
        }, {
          key: "TargetPos",
          get: function get() {
            return v3(this.Target.x, this.Target.y, this.Target.z);
          }
        }]);

        return PositionView;
      }(EaseBaseView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/Transform/RotationView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "./EaseBaseView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Vec3, EaseBaseView, _dec, _class, _temp, ccclass, property, RotationView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_EaseBaseViewJs) {
      EaseBaseView = _EaseBaseViewJs.EaseBaseView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d0021wAKQZPE5ub73UcCQpv", "RotationView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("RotationView", RotationView = (_dec = ccclass("RotationView"), _dec(_class = (_temp = /*#__PURE__*/function (_EaseBaseView) {
        _inherits(RotationView, _EaseBaseView);

        function RotationView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, RotationView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RotationView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.startRotation = Vec3.ZERO;
          return _this;
        }

        _createClass(RotationView, [{
          key: "onLoad",
          value: function onLoad() {
            if (CC_DEBUG && this.node.name == "TestNode") {
              window["testRotation"] = this.onRotationChanged.bind(this);
            }
          }
        }, {
          key: "canUpdate",
          value: function canUpdate() {
            return true;
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onRotationChanged",
          value: function onRotationChanged(targetRotation, lastTime, callback) {
            var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            this.node.getRotation().getEulerAngles(this.startRotation);
            this.startUpdate(targetRotation, lastTime, callback, delay);
          }
        }, {
          key: "onStep",
          value: function onStep() {
            this.node.setRotationFromEuler(this.ease(this.startRotation.x, this.Target.x), this.ease(this.startRotation.y, this.Target.y), this.ease(this.startRotation.z, this.Target.z));
          }
        }, {
          key: "onComplete",
          value: function onComplete() {
            this.node.setRotationFromEuler(this.Target.x, this.Target.y, this.Target.z);
          }
        }]);

        return RotationView;
      }(EaseBaseView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/AdaptationWigetView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, v3, sys, view, UITransform, Component, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, AlignType, AdaptationWigetView;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0,
    AlignType: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      v3 = _cc.v3;
      sys = _cc.sys;
      view = _cc.view;
      UITransform = _cc.UITransform;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c346fnUZrdDV6WB8tQd14w4", "AdaptationWigetView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (AlignType) {
        AlignType[AlignType["Top"] = 0] = "Top";
        AlignType[AlignType["TopLeft"] = 1] = "TopLeft";
        AlignType[AlignType["TopRight"] = 2] = "TopRight";
        AlignType[AlignType["Bottom"] = 3] = "Bottom";
        AlignType[AlignType["BotLeft"] = 4] = "BotLeft";
        AlignType[AlignType["BotRight"] = 5] = "BotRight";
        AlignType[AlignType["Left"] = 6] = "Left";
        AlignType[AlignType["Right"] = 7] = "Right";
        AlignType[AlignType["Center"] = 8] = "Center";
      })(AlignType || _export("AlignType", AlignType = {}));

      _export("AdaptationWigetView", AdaptationWigetView = (_dec = ccclass("AdaptationWigetView"), _dec2 = property({
        type: Enum(AlignType)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AdaptationWigetView, _Component);

        function AdaptationWigetView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AdaptationWigetView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdaptationWigetView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "alignType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "offset", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(AdaptationWigetView, [{
          key: "start",
          value: function start() {
            if (sys.isMobile) {
              window.addEventListener("resize", this.onResize.bind(this));
            } else {
              view.on("canvas-resize", this.onResize, this);
            }

            this.onResize();
          }
        }, {
          key: "onResize",
          value: function onResize() {
            switch (this.alignType) {
              case AlignType.Top:
                this.alignTop();
                break;

              case AlignType.TopLeft:
                this.alignTopLeft();
                break;

              case AlignType.TopRight:
                this.alignTopRight();
                break;

              case AlignType.Bottom:
                this.alignBottom();
                break;

              case AlignType.BotLeft:
                this.alignBotLeft();
                break;

              case AlignType.BotRight:
                this.alignBotRight();
                break;

              case AlignType.Left:
                this.alignLeft();
                break;

              case AlignType.Right:
                this.alignRight();
                break;

              case AlignType.Center:
                this.alignCenter();
                break;
            }
          }
        }, {
          key: "alignTop",
          value: function alignTop() {
            /** 实际尺寸 */
            var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 0.5;
            // this.node.getComponent(UITransform).anchorY = 1;

            this.node.setPosition(this.LocalZero.add(v3(canvasSize.width / this.UseRatio / 2, canvasSize.height / this.UseRatio)).add(v3(0, -this.node.getComponent(UITransform).height * (1 - this.node.getComponent(UITransform).anchorY))));
          }
        }, {
          key: "alignTopLeft",
          value: function alignTopLeft() {
            var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 0;
            // this.node.getComponent(UITransform).anchorY = 1;

            this.node.setPosition(this.LocalZero.add(v3(0, canvasSize.height / this.UseRatio)).add(v3(this.node.getComponent(UITransform).width * this.node.getComponent(UITransform).anchorX, -this.node.getComponent(UITransform).height * (1 - this.node.getComponent(UITransform).anchorY))));
          }
        }, {
          key: "alignTopRight",
          value: function alignTopRight() {
            var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 1;
            // this.node.getComponent(UITransform).anchorY = 1;

            this.node.setPosition(this.LocalZero.add(v3(canvasSize.width / this.UseRatio, canvasSize.height / this.UseRatio).add(v3(-this.node.getComponent(UITransform).width * (1 - this.node.getComponent(UITransform).anchorX), -this.node.getComponent(UITransform).height * (1 - this.node.getComponent(UITransform).anchorY)))));
          }
        }, {
          key: "alignBottom",
          value: function alignBottom() {
            /** 实际尺寸 */
            var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 0.5;
            // this.node.getComponent(UITransform).anchorY = 0;

            this.node.setPosition(this.LocalZero.add(v3(canvasSize.width / this.UseRatio / 2, 0)).add(v3(0, this.node.getComponent(UITransform).height * this.node.getComponent(UITransform).anchorY)));
          }
        }, {
          key: "alignBotLeft",
          value: function alignBotLeft() {
            // this.node.getComponent(UITransform).anchorX = 0;
            // this.node.getComponent(UITransform).anchorY = 0;
            this.node.setPosition(this.LocalZero.add(v3(this.node.getComponent(UITransform).width * this.node.getComponent(UITransform).anchorX, this.node.getComponent(UITransform).height * this.node.getComponent(UITransform).anchorY)));
          }
        }, {
          key: "alignBotRight",
          value: function alignBotRight() {
            /** 实际尺寸 */
            var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 1;
            // this.node.getComponent(UITransform).anchorY = 0;

            this.node.setPosition(this.LocalZero.add(v3(canvasSize.width / this.UseRatio, 0)).add(v3(-this.node.getComponent(UITransform).width * (1 - this.node.getComponent(UITransform).anchorX), this.node.getComponent(UITransform).height * this.node.getComponent(UITransform).anchorY)));
          }
        }, {
          key: "alignLeft",
          value: function alignLeft() {
            // this.node.getComponent(UITransform).anchorX = 0;
            // this.node.getComponent(UITransform).anchorY = 0; /** 实际尺寸 */
            var canvasSize = view.getCanvasSize();
            this.node.setPosition(this.LocalZero.add(v3(this.node.getComponent(UITransform).width * this.node.getComponent(UITransform).anchorX, this.node.getComponent(UITransform).height * this.node.getComponent(UITransform).anchorY + 0.5 * canvasSize.height)));
          }
        }, {
          key: "alignRight",
          value: function alignRight() {}
        }, {
          key: "alignCenter",
          value: function alignCenter() {}
        }, {
          key: "UseRatio",
          get: function get() {
            /** 实际尺寸 */
            var canvasSize = view.getCanvasSize();
            /** 设计尺寸 */

            var designSize = view.getDesignResolutionSize();
            var withRatio = canvasSize.width / designSize.width;
            var heightRatio = canvasSize.height / designSize.height;
            var useRatio = Math.min(withRatio, heightRatio);
            return useRatio;
          }
        }, {
          key: "LocalZero",
          get: function get() {
            /** 实际尺寸 */
            var canvasSize = view.getCanvasSize();
            /** 设计尺寸 */

            var designSize = view.getDesignResolutionSize();
            var withRatio = canvasSize.width / designSize.width;
            var heightRatio = canvasSize.height / designSize.height;
            var useRatio = Math.min(withRatio, heightRatio);
            var worldZero = v3(0, 0, 0);

            if (withRatio < heightRatio) {
              // 适配宽度
              worldZero = v3(0, -(canvasSize.height / useRatio - designSize.height) / 2, 0);
            } else if (withRatio > heightRatio) {
              worldZero = v3(-(canvasSize.width / useRatio - designSize.width) / 2, 0, 0);
            } else {
              // 等比 缩放
              worldZero = v3(0, 0, 0);
            }

            var localZero = v3(0, 0, 0);
            this.node.parent.inverseTransformPoint(localZero, worldZero);
            localZero.x += this.offset.x;
            localZero.y += this.offset.y;
            localZero.z += this.offset.z;
            return localZero;
          }
        }]);

        return AdaptationWigetView;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "alignType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AlignType.Center;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(0, 0, 0);
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/HelpLayerMediator.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../../Signal/Signal.js", "../../../Manager/GameStateController.js", "../BaseMediator.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, ShowHelpLayerSignal, ShowTutorialSignal, HideHelpLayerSignal, GameStateController, BaseMediator, _dec, _class, _temp, ccclass, property, HelpLayerMediator;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_SignalSignalJs) {
      ShowHelpLayerSignal = _SignalSignalJs.ShowHelpLayerSignal;
      ShowTutorialSignal = _SignalSignalJs.ShowTutorialSignal;
      HideHelpLayerSignal = _SignalSignalJs.HideHelpLayerSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_BaseMediatorJs) {
      BaseMediator = _BaseMediatorJs.BaseMediator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3bc60X0KO1JzJXd7Wo2je/U", "HelpLayerMediator", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HelpLayerMediator", HelpLayerMediator = (_dec = ccclass("HelpLayerMediator"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseMediator) {
        _inherits(HelpLayerMediator, _BaseMediator);

        function HelpLayerMediator() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HelpLayerMediator);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HelpLayerMediator)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.closeCallback = null;
          return _this;
        }

        _createClass(HelpLayerMediator, [{
          key: "onRegister",
          value: function onRegister() {
            ShowHelpLayerSignal.inst.addListener(this.showHelp, this);
            ShowTutorialSignal.inst.addListener(this.showGuide, this);
            HideHelpLayerSignal.inst.addListener(this.hideGuide, this);
          }
        }, {
          key: "showHelp",
          value: function showHelp(callback) {
            if (this.View.isShowed()) return;
            GameStateController.inst.pause();
            this.closeCallback = callback;
            this.View.Show();
          }
        }, {
          key: "showGuide",
          value: function showGuide(callback) {
            if (this.View.isShowed()) return;
            GameStateController.inst.pause(true);
            this.closeCallback = callback;
            this.View.Show();
          }
        }, {
          key: "hideGuide",
          value: function hideGuide() {
            if (this.View.isShowed() == false) return;
            GameStateController.inst.resume();
            this.View.Hide(this.closeCallback);
            this.closeCallback = null;
          }
        }]);

        return HelpLayerMediator;
      }(BaseMediator), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/HelpLayerView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../../Signal/Signal.js", "../BaseView.js", "./HelpLayerMediator.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, PageView, Label, v3, Tween, Vec3, tween, GameOverSignal, ButtonClickSignal, HideHelpLayerSignal, BaseView, HelpLayerMediator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, State, HelpLayerView;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0,
    State: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      PageView = _cc.PageView;
      Label = _cc.Label;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_SignalSignalJs) {
      GameOverSignal = _SignalSignalJs.GameOverSignal;
      ButtonClickSignal = _SignalSignalJs.ButtonClickSignal;
      HideHelpLayerSignal = _SignalSignalJs.HideHelpLayerSignal;
    }, function (_BaseViewJs) {
      BaseView = _BaseViewJs.BaseView;
    }, function (_HelpLayerMediatorJs) {
      HelpLayerMediator = _HelpLayerMediatorJs.HelpLayerMediator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3e761geQgBBvrtLtcJcAQAE", "HelpLayerView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (State) {
        State[State["Show"] = 0] = "Show";
        State[State["Hide"] = 1] = "Hide";
      })(State || (State = {}));

      _export("HelpLayerView", HelpLayerView = (_dec = ccclass("HelpLayerView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(PageView), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseView) {
        _inherits(HelpLayerView, _BaseView);

        function HelpLayerView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HelpLayerView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HelpLayerView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.state = State.Hide;

          _initializerDefineProperty(_this, "Next", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Close", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "GuidePage", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TotalPage", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Page", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(HelpLayerView, [{
          key: "onLoad",
          value: function onLoad() {
            this.BindMedaitor(HelpLayerMediator);
            this.state = State.Hide;
            this.node.scale = v3(1, 1, 1);
            this.node.active = false;
            this.GuidePage.node.on("scroll-ended", this.onPageChanged, this);
            this.Close.on(Node.EventType.TOUCH_END, this.close, this);
            this.Next.on(Node.EventType.TOUCH_END, this.next, this);
            GameOverSignal.inst.addListener(this.close, this);
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "close",
          value: function close() {
            ButtonClickSignal.inst.dispatch();
            HideHelpLayerSignal.inst.dispatch();
          }
        }, {
          key: "next",
          value: function next() {
            ButtonClickSignal.inst.dispatch();
            this.GuidePage.scrollToPage((this.GuidePage.getCurrentPageIndex() + 1) % this.GuidePage.content.children.length, 0);
            this.onPageChanged();
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged() {
            if (this.TotalPage) {
              this.TotalPage.string = this.GuidePage.content.children.length.toString();
            }

            if (this.Page) {
              this.Page.string = (this.GuidePage.getCurrentPageIndex() + 1).toString();
            }

            if (this.GuidePage.getCurrentPageIndex() >= this.GuidePage.content.children.length - 1) {
              this.Next.parent.active = false;
              this.Close.parent.active = true;
            } else {
              this.Next.parent.active = true;
              this.Close.parent.active = false;
            }
          }
        }, {
          key: "isShowed",
          value: function isShowed() {
            return this.state == State.Show;
          }
        }, {
          key: "Show",
          value: function Show(callback) {
            if (this.isShowed()) return;
            this.state = State.Show;
            this.node.active = true;
            Tween.stopAllByTarget(this.node);
            this.node.scale = Vec3.ZERO;
            tween(this.node).sequence(tween(this.node).to(0.1, {
              scale: v3(1, 1, 1)
            }), tween(this.node).call(function () {
              callback && callback();
            })).start();
            this.Next.parent.active = true;
            this.Close.parent.active = false;
            this.GuidePage.scrollToPage(0, 0);
            this.onPageChanged();
          }
        }, {
          key: "Hide",
          value: function Hide(callback) {
            var _this2 = this;

            if (this.isShowed() == false) return;
            this.state = State.Hide;
            Tween.stopAllByTarget(this.node);
            tween(this.node).sequence(tween(this.node).to(0.1, {
              scale: v3(0, 0, 0)
            }), tween(this.node).call(function () {
              _this2.node.scale = v3(1, 1, 1);
              callback && callback();
              _this2.node.active = false;
            })).start();
          } // update (dt) {}

        }]);

        return HelpLayerView;
      }(BaseView), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Next", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Close", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "GuidePage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "TotalPage", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Page", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/HelpTextView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../../Signal/Signal.js", "../../../table.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, RichText, Label, Component, ShowHelpLayerSignal, En_View, En_ID, _dec, _class, _temp, ccclass, property, HelpTextView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      RichText = _cc.RichText;
      Label = _cc.Label;
      Component = _cc.Component;
    }, function (_SignalSignalJs) {
      ShowHelpLayerSignal = _SignalSignalJs.ShowHelpLayerSignal;
    }, function (_tableJs) {
      En_View = _tableJs.En_View;
      En_ID = _tableJs.En_ID;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d7af3xH90pNcbwQyM6S1tyi", "HelpTextView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HelpTextView", HelpTextView = (_dec = ccclass("HelpTextView"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(HelpTextView, _Component);

        function HelpTextView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HelpTextView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HelpTextView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.rendered = false;
          return _this;
        }

        _createClass(HelpTextView, [{
          key: "onLoad",
          value: function onLoad() {
            ShowHelpLayerSignal.inst.addListener(this.renderText, this);
          }
        }, {
          key: "renderText",
          value: function renderText() {
            if (this.rendered) return;
            this.rendered = true;

            if (this.text) {
              this.text.string = lan.t(En_View.BangZhuJieMian, En_ID.BangZhuYeMian1 + parseInt(this.node.name));
            } else if (this.richText) {
              this.richText.string = lan.t(En_View.BangZhuJieMian, En_ID.BangZhuYeMian1 + parseInt(this.node.name));
            }
          }
        }, {
          key: "richText",
          get: function get() {
            return this.getComponent(RichText);
          }
        }, {
          key: "text",
          get: function get() {
            return this.getComponent(Label);
          }
        }]);

        return HelpTextView;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/LoadingAnimation.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, ccclass, property, LoadingAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_SpriteUIAnimationJs) {
      SpriteUIAnimation = _SpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "67086yAVsFPUYPIVnkjGFG8", "LoadingAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadingAnimation", LoadingAnimation = (_dec = ccclass("LoadingAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(LoadingAnimation, _SpriteUIAnimation);

        function LoadingAnimation() {
          _classCallCheck(this, LoadingAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadingAnimation).apply(this, arguments));
        }

        return LoadingAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/LoadingViewMediator.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../../Signal/Signal.js", "../../../Model/PlayModel.js", "../../SDK/CelerSDK.js", "../BaseMediator.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, GameReadySignal, ShowTutorialSignal, PlayModel, CelerSDK, BaseMediator, _dec, _class, _temp, ccclass, property, LoadingViewMediator;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_SignalSignalJs) {
      GameReadySignal = _SignalSignalJs.GameReadySignal;
      ShowTutorialSignal = _SignalSignalJs.ShowTutorialSignal;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }, function (_SDKCelerSDKJs) {
      CelerSDK = _SDKCelerSDKJs.CelerSDK;
    }, function (_BaseMediatorJs) {
      BaseMediator = _BaseMediatorJs.BaseMediator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "516487bxQ9CBr01QHyo6yB9", "LoadingViewMediator", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadingViewMediator", LoadingViewMediator = (_dec = ccclass("LoadingViewMediator"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseMediator) {
        _inherits(LoadingViewMediator, _BaseMediator);

        function LoadingViewMediator() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, LoadingViewMediator);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadingViewMediator)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.time = 1500;
          _this.startTime = 0;
          return _this;
        }

        _createClass(LoadingViewMediator, [{
          key: "onRegister",
          value: function onRegister() {
            this.startTime = Date.now();
            GameReadySignal.inst.addOnce(this.onGameReady, this);
          }
        }, {
          key: "onGameReady",
          value: function onGameReady() {
            var _this2 = this;

            var waitingTime = Date.now() - this.startTime;
            console.log(" -- game init done, hide loading page: ", waitingTime);

            if (waitingTime <= this.time) {
              setTimeout(function () {
                _this2.View.Hide(function () {
                  _this2.startGame();
                });
              }, this.time - waitingTime);
            } else {
              this.View.Hide(function () {
                _this2.startGame();
              });
            }
          }
        }, {
          key: "startGame",
          value: function startGame() {
            if (CelerSDK.inst.isNew()) {
              ShowTutorialSignal.inst.dispatch(function () {
                PlayModel.inst.gameReadyShow();
              });
            } else {
              PlayModel.inst.gameReadyShow();
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {}
        }]);

        return LoadingViewMediator;
      }(BaseMediator), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/LoadingView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../../Signal/Signal.js", "../BaseView.js", "./LoadingViewMediator.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, v3, tween, Label, UIOpacity, UpdateInitLoadingSignal, BaseView, LoadingViewMediator, _dec, _class, _temp, ccclass, property, LoadingView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      tween = _cc.tween;
      Label = _cc.Label;
      UIOpacity = _cc.UIOpacity;
    }, function (_SignalSignalJs) {
      UpdateInitLoadingSignal = _SignalSignalJs.UpdateInitLoadingSignal;
    }, function (_BaseViewJs) {
      BaseView = _BaseViewJs.BaseView;
    }, function (_LoadingViewMediatorJs) {
      LoadingViewMediator = _LoadingViewMediatorJs.LoadingViewMediator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cfc30bHSDNEZ5oXLB0OxCj0", "LoadingView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadingView", LoadingView = (_dec = ccclass("LoadingView"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inherits(LoadingView, _BaseView);

        function LoadingView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, LoadingView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadingView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.percent = 0;
          _this.uiopacity = null;
          return _this;
        }

        _createClass(LoadingView, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this; // this.ProgressLabel.node.active = CC_DEBUG;


            this.node.scale = v3(1, 1, 1);
            this.UIOpacity.opacity = 255;
            this.BindMedaitor(LoadingViewMediator);
            UpdateInitLoadingSignal.inst.addListener(function (percentAdd) {
              _this2.percent += percentAdd;
              _this2.percent = Math.min(1, _this2.percent); //   console.log(this.percent, " loaded :", percentAdd);

              _this2.ProgressLabel.string = (_this2.percent * 100).toFixed(0) + "%";
            }, this);
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "Hide",
          value: function Hide(callback) {
            var _this3 = this;

            this.Loading && (this.Loading.active = false);
            tween(this.UIOpacity).sequence(tween(this.UIOpacity).to(0.5, {
              opacity: 0
            }), tween(this.UIOpacity).call(function () {
              _this3.node.active = false;
              callback();
            })).start();
          }
        }, {
          key: "ProgressLabel",
          // LIFE-CYCLE CALLBACKS:
          get: function get() {
            return this.node.getChildByName("ProgressLabel").getComponent(Label);
          }
        }, {
          key: "Loading",
          get: function get() {
            return this.node.getChildByName("ae_loading1");
          }
        }, {
          key: "UIOpacity",
          get: function get() {
            if (this.uiopacity == null) {
              this.uiopacity = this.addComponent(UIOpacity);
            }

            return this.uiopacity;
          }
        }]);

        return LoadingView;
      }(BaseView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/NumberChangedView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../BaseView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, tween, v3, Label, BaseView, _dec, _class, _temp, ccclass, property, NumberChangedView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      v3 = _cc.v3;
      Label = _cc.Label;
    }, function (_BaseViewJs) {
      BaseView = _BaseViewJs.BaseView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "86160vnlZBLn7zjppFqtUYn", "NumberChangedView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      NumberChangedView = (_dec = ccclass("NumberChangedView"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inherits(NumberChangedView, _BaseView);

        function NumberChangedView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, NumberChangedView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NumberChangedView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.num = 0;
          _this.showNum = 0;
          _this.step = 0;
          _this.label = null;
          _this.fixCount = 0;
          _this.isSingle = true;
          _this.isUpperCase = false;
          _this.isSmartFix = false;
          _this.action = true;
          _this.STEP = 60;
          _this.scale = 1;
          _this.maxNumber = 0;
          _this.preFix = "";
          _this.callback = null;
          return _this;
        }

        _createClass(NumberChangedView, [{
          key: "setNumber",
          value: function setNumber(val) {
            this.showNum = val;
            this.num = val;

            if (this.scale == 1) {
              this.Label.string = this.preFix + cc.ScienceNumber(val, this.maxNumber, this.fixCount, this.isUpperCase, this.isSingle, this.isSmartFix).toString();
            } else {
              this.Label.string = this.preFix + cc.ScienceNumber(val / this.scale, this.maxNumber, this.fixCount, this.isUpperCase, this.isSingle, this.isSmartFix);
            }
          }
        }, {
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onStep",
          value: function onStep(step) {}
        }, {
          key: "onNumberChanged",
          value: function onNumberChanged(num, callback) {
            this.num = num;
            this.callback = callback;

            if (this.num != this.showNum) {
              var step = this.num - this.showNum;
              this.step = step > 0 ? Math.ceil(step / this.STEP) : Math.floor(step / this.STEP); //console.log("this.step:", this.step);

              if (this.action) {
                tween(this.node).sequence(tween(this.node).to(0.1, {
                  scale: v3(1.4, 1.4, 1.4)
                }), tween(this.node).delay(0.05), tween(this.node).to(0.1, {
                  scale: v3(1, 1, 1)
                })).start();
              }
            } else {
              this.step = 0;
            }
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this.num != this.showNum) {
              this.showNum += this.step;
              this.onStep(this.step);

              if (this.showNum > this.num && this.step > 0 || this.showNum < this.num && this.step < 0) {
                this.showNum = this.num;
                this.step = 0;
              }
            }

            if (Math.abs(this.num - this.showNum) <= Math.abs(this.step)) {
              if (this.callback && typeof this.callback == "function") {
                this.callback();
                this.callback = null;
              }
            }

            if (this.scale == 1) {
              this.Label.string = this.showNum >= 0 ? this.preFix + cc.ScienceNumber(this.showNum, this.maxNumber, this.fixCount, this.isUpperCase, this.isSingle, this.isSmartFix) : this.preFix + "/" + cc.ScienceNumber(Math.abs(this.showNum), this.maxNumber, this.fixCount, this.isUpperCase, this.isSingle, this.isSmartFix);
            } else {
              this.Label.string = this.showNum >= 0 ? this.preFix + cc.ScienceNumber(this.showNum / this.scale, this.maxNumber, this.fixCount, this.isUpperCase, this.isSingle, this.isSmartFix) : this.preFix + "/" + cc.ScienceNumber(Math.abs(this.showNum / this.scale), this.maxNumber, this.fixCount, this.isUpperCase, this.isSingle, this.isSmartFix);
            }
          }
        }, {
          key: "Label",
          get: function get() {
            return this.label ? this.label : this.label = this.node.getComponent(Label);
          }
        }]);

        return NumberChangedView;
      }(BaseView), _temp)) || _class);

      cclegacy._RF.pop();

      _export("default", NumberChangedView);
    }
  };
});

System.register("chunks:///Common/View/UI/SliderView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Random.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Slider, UITransform, Component, Random, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, SliderView;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Slider = _cc.Slider;
      UITransform = _cc.UITransform;
      Component = _cc.Component;
    }, function (_RandomJs) {
      Random = _RandomJs.Random;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aebb3v33IxMgrh7r+6GK1cN", "SliderView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SliderView", SliderView = (_dec = ccclass("SliderView"), _dec2 = property(Node), _dec3 = property(Slider), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SliderView, _Component);

        function SliderView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SliderView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SliderView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "Progress", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Slider", _descriptor2, _assertThisInitialized(_this));

          _this.totalLength = 0;
          return _this;
        }

        _createClass(SliderView, [{
          key: "onLoad",
          value: function onLoad() {
            this.Slider.node.on("slide", this.onSlided, this);
            this.totalLength = this.Progress.getComponent(UITransform).width;
            this.Slider.node.getComponent(UITransform).width = this.totalLength;
          }
        }, {
          key: "onSlided",
          value: function onSlided() {
            this.Progress.getComponent(UITransform).width = this.totalLength * this.Slider.progress;

            if (this.onProgress) {
              this.onProgress(this.Slider.progress);
            }
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onProgress",
          value: function onProgress(percent) {} // update (dt) {}

        }, {
          key: "Percent",
          get: function get() {
            return this.Slider.progress;
          },
          set: function set(val) {
            this.Slider.progress = Random.clamp(val, 0, 1);
            this.Progress.getComponent(UITransform).width = this.Slider.node.getComponent(UITransform).width * this.Slider.progress;
          }
        }]);

        return SliderView;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Progress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Slider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/ThemeView.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../../GamePlay/GameRule.js", "../../../Signal/Signal.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, Theme, GameThemeInit, _dec, _class, ccclass, property, ThemeView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_GamePlayGameRuleJs) {
      Theme = _GamePlayGameRuleJs.Theme;
    }, function (_SignalSignalJs) {
      GameThemeInit = _SignalSignalJs.GameThemeInit;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7ab7fGvUlxM4JJv4dbVsF8P", "ThemeView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ThemeView", ThemeView = (_dec = ccclass("ThemeView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(ThemeView, _Component);

        function ThemeView() {
          _classCallCheck(this, ThemeView);

          return _possibleConstructorReturn(this, _getPrototypeOf(ThemeView).apply(this, arguments));
        }

        _createClass(ThemeView, [{
          key: "onLoad",
          value: function onLoad() {
            GameThemeInit.inst.addListener(this.onThemeInit, this);
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "onThemeInit",
          value: function onThemeInit(theme) {
            this.node.active = this.node.name == Theme[theme];
          }
        }]);

        return ThemeView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Common/View/UI/TimeEffectAnimation.js", ["../../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../../Signal/Signal.js", "../SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _get, cclegacy, _decorator, TimeAnimationStateChanged, SpriteUIAnimation, _dec, _class, ccclass, property, TimeEffectAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_SignalSignalJs) {
      TimeAnimationStateChanged = _SignalSignalJs.TimeAnimationStateChanged;
    }, function (_SpriteUIAnimationJs) {
      SpriteUIAnimation = _SpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1eaddfQXxtCKIdNPE4ltlZx", "TimeEffectAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TimeEffectAnimation", TimeEffectAnimation = (_dec = ccclass("TimeEffectAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(TimeEffectAnimation, _SpriteUIAnimation);

        function TimeEffectAnimation() {
          _classCallCheck(this, TimeEffectAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(TimeEffectAnimation).apply(this, arguments));
        }

        _createClass(TimeEffectAnimation, [{
          key: "onLoad",
          value: function onLoad() {
            _get(_getPrototypeOf(TimeEffectAnimation.prototype), "onLoad", this).call(this);

            this.Sprite.color.a = 0;
            TimeAnimationStateChanged.inst.addListener(this.onPlayStateChanged, this);
          }
        }, {
          key: "onPlayStateChanged",
          value: function onPlayStateChanged(isPlay) {
            if (isPlay) {
              if (this.isPlaying == false) {
                this.playOnLoop();
              }
            } else {
              this.stop();
            }
          }
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "playOnLoop",
          value: function playOnLoop() {
            this.Sprite.color.a = 255;

            _get(_getPrototypeOf(TimeEffectAnimation.prototype), "playOnLoop", this).call(this);
          }
        }, {
          key: "stop",
          value: function stop() {
            this.Sprite.color.a = 0;

            _get(_getPrototypeOf(TimeEffectAnimation.prototype), "stop", this).call(this);
          } // update (dt) {}

        }]);

        return TimeEffectAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/AddHeartAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js", "../GameLogic.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, UpdateHeartCountSignal, _dec, _class, ccclass, property, AddHeartAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }, function (_GameLogicJs) {
      UpdateHeartCountSignal = _GameLogicJs.UpdateHeartCountSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6910bA7uvBOabac/ukKm7F7", "AddHeartAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AddHeartAnimation", AddHeartAnimation = (_dec = ccclass("AddHeartAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(AddHeartAnimation, _SpriteUIAnimation);

        function AddHeartAnimation() {
          _classCallCheck(this, AddHeartAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(AddHeartAnimation).apply(this, arguments));
        }

        _createClass(AddHeartAnimation, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            var _this = this;

            this.Sprite.color.a = 0;
            UpdateHeartCountSignal.inst.addListener(function (count, step) {
              console.log(" update heart count:", count, step);

              if (step == 1) {
                _this.play();
              }
            }, this);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AddHeartAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/DropPocketAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, ccclass, property, DropPocketAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ce2d6DVdbdLua5RPzzkLuSL", "DropPocketAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DropPocketAnimation", DropPocketAnimation = (_dec = ccclass("DropPocketAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(DropPocketAnimation, _SpriteUIAnimation);

        function DropPocketAnimation() {
          _classCallCheck(this, DropPocketAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(DropPocketAnimation).apply(this, arguments));
        }

        _createClass(DropPocketAnimation, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.Interval = 0.08;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return DropPocketAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/FireWorkAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, ccclass, property, FireWorkAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7724fKKz09K66SYobx3BHeq", "FireWorkAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FireWorkAnimation", FireWorkAnimation = (_dec = ccclass("FireWorkAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(FireWorkAnimation, _SpriteUIAnimation);

        function FireWorkAnimation() {
          _classCallCheck(this, FireWorkAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(FireWorkAnimation).apply(this, arguments));
        }

        return FireWorkAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/HeartBlingAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, ccclass, property, HeartBlingAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e81d3m/ySBMgpQMv54o4Q+6", "HeartBlingAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HeartBlingAnimation", HeartBlingAnimation = (_dec = ccclass("HeartBlingAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(HeartBlingAnimation, _SpriteUIAnimation);

        function HeartBlingAnimation() {
          _classCallCheck(this, HeartBlingAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(HeartBlingAnimation).apply(this, arguments));
        }

        _createClass(HeartBlingAnimation, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.Interval = 0.1;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return HeartBlingAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/HeartBrokenAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js", "../GameLogic.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, UpdateHeartCountSignal, _dec, _class, ccclass, property, HeartBrokenAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }, function (_GameLogicJs) {
      UpdateHeartCountSignal = _GameLogicJs.UpdateHeartCountSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c00f9JM4BNOTLsXYYNpKJka", "HeartBrokenAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HeartBrokenAnimation", HeartBrokenAnimation = (_dec = ccclass("HeartBrokenAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(HeartBrokenAnimation, _SpriteUIAnimation);

        function HeartBrokenAnimation() {
          _classCallCheck(this, HeartBrokenAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(HeartBrokenAnimation).apply(this, arguments));
        }

        _createClass(HeartBrokenAnimation, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            var _this = this; // Your initialization goes here.


            UpdateHeartCountSignal.inst.addListener(function (count, step) {
              if (step < 0) {
                _this.play();

                _this.onComplete = function () {
                  _this.stop();
                };
              }
            }, this);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return HeartBrokenAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/HeartIdleAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Manager/GameStateController.js", "../../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, GameStateController, SpriteUIAnimation, _dec, _class, ccclass, property, HeartIdleAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dc88cJbWnxFmZlNTAEKSmV7", "HeartIdleAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HeartIdleAnimation", HeartIdleAnimation = (_dec = ccclass("HeartIdleAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(HeartIdleAnimation, _SpriteUIAnimation);

        function HeartIdleAnimation() {
          _classCallCheck(this, HeartIdleAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(HeartIdleAnimation).apply(this, arguments));
        }

        _createClass(HeartIdleAnimation, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            var _this = this; // Your initialization goes here.


            this.play();

            this.onComplete = function () {
              _this.stop();

              if (GameStateController.inst.isGameOver()) {
                return;
              }

              setTimeout(function () {
                _this.play();
              }, Math.random() * 3000 + 1000);
            };
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return HeartIdleAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/ResultAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, ccclass, property, ResultAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e49bSoebFPF5J6NbKv8gc6", "ResultAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ResultAnimation", ResultAnimation = (_dec = ccclass("ResultAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(ResultAnimation, _SpriteUIAnimation);

        function ResultAnimation() {
          _classCallCheck(this, ResultAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(ResultAnimation).apply(this, arguments));
        }

        _createClass(ResultAnimation, [{
          key: "start",
          value: function start() {
            var _this = this;

            this.onComplete = function () {
              _this.currentIndex = 14;

              _this.updateCurrentFrame();
            };
          }
        }]);

        return ResultAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/TrickShotLightAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, ccclass, property, TrickShotLightAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8f837JIGfZAJJf5ZzjWKRmV", "TrickShotLightAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TrickShotLightAnimation", TrickShotLightAnimation = (_dec = ccclass("TrickShotLightAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(TrickShotLightAnimation, _SpriteUIAnimation);

        function TrickShotLightAnimation() {
          _classCallCheck(this, TrickShotLightAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(TrickShotLightAnimation).apply(this, arguments));
        }

        _createClass(TrickShotLightAnimation, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return TrickShotLightAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Animation/WhiteDropAnimation.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Common/View/SpriteUIAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, SpriteUIAnimation, _dec, _class, ccclass, property, WhiteDropAnimation;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewSpriteUIAnimationJs) {
      SpriteUIAnimation = _CommonViewSpriteUIAnimationJs.SpriteUIAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0227cNe965A4Y/BbLei6G7o", "WhiteDropAnimation", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WhiteDropAnimation", WhiteDropAnimation = (_dec = ccclass("WhiteDropAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inherits(WhiteDropAnimation, _SpriteUIAnimation);

        function WhiteDropAnimation() {
          _classCallCheck(this, WhiteDropAnimation);

          return _possibleConstructorReturn(this, _getPrototypeOf(WhiteDropAnimation).apply(this, arguments));
        }

        _createClass(WhiteDropAnimation, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.Interval = 0.08;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return WhiteDropAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameObject/3DRootAdaption.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, v3, sys, view, Component, _dec, _class, _temp, ccclass, property, DRootAdaption;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      sys = _cc.sys;
      view = _cc.view;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aa31472lZdECrfZejsuysbk", "3DRootAdaption", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DRootAdaption", DRootAdaption = (_dec = ccclass("DRootAdaption"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(DRootAdaption, _Component);

        function DRootAdaption() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, DRootAdaption);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DRootAdaption)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.defalultScale = v3(0, 0, 0);
          return _this;
        }

        _createClass(DRootAdaption, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.defalultScale.x = this.node.scale.x;
            this.defalultScale.y = this.node.scale.y;
            this.defalultScale.z = this.node.scale.z;

            if (sys.isMobile) {
              window.addEventListener("resize", this.onResize.bind(this));
            } else {
              view.on("canvas-resize", this.onResize, this);
            }

            this.onResize();
          }
        }, {
          key: "onResize",
          value: function onResize() {
            /** 实际尺寸 */
            var canvasSize = view.getCanvasSize();
            /** 设计尺寸 */

            var designSize = view.getDesignResolutionSize();
            var designRatio = designSize.height / designSize.width;
            var useRatio = canvasSize.height / canvasSize.width;
            this.node.setScale(v3(this.defalultScale.x / Math.max(1, useRatio / designRatio), this.defalultScale.y / Math.max(1, useRatio / designRatio), this.defalultScale.z / Math.max(1, useRatio / designRatio)));
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return DRootAdaption;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameObject/ColliderRoot.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, ColliderRoot;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c358aP2yrpPzafOqHZPsSbq", "ColliderRoot", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ColliderRoot", ColliderRoot = (_dec = ccclass("ColliderRoot"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(ColliderRoot, _Component);

        function ColliderRoot() {
          _classCallCheck(this, ColliderRoot);

          return _possibleConstructorReturn(this, _getPrototypeOf(ColliderRoot).apply(this, arguments));
        }

        _createClass(ColliderRoot, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.node.setPosition(0, 0, 0);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return ColliderRoot;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameObject/TablePlane.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameRule.js", "../../Signal/Signal.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Material, MeshRenderer, Component, Theme, GameThemeInit, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, TablePlane;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
      Component = _cc.Component;
    }, function (_GameRuleJs) {
      Theme = _GameRuleJs.Theme;
    }, function (_SignalSignalJs) {
      GameThemeInit = _SignalSignalJs.GameThemeInit;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5606e1TlwlCJZGtzTPX5oL7", "TablePlane", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TablePlane", TablePlane = (_dec = ccclass("TablePlane"), _dec2 = property(Material), _dec3 = property(Material), _dec4 = property(Material), _dec5 = property(Material), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TablePlane, _Component);

        function TablePlane() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TablePlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TablePlane)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "Green", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Red", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Blue", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Purple", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(TablePlane, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            GameThemeInit.inst.addListener(function (theme) {
              if (_this2[Theme[theme]]) {
                _this2.MeshRenderer.setMaterial(_this2[Theme[theme]], 0);
              }
            }, this);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "MeshRenderer",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          get: function get() {
            return this.getComponent(MeshRenderer);
          }
        }]);

        return TablePlane;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Green", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Red", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Blue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Purple", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/GameObject/WhiteBall.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, v3, RigidBody, Component, _dec, _class, ccclass, property, WhiteBall;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      RigidBody = _cc.RigidBody;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "219c5nWhGpF77j8W/lgWxRQ", "WhiteBall", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WhiteBall", WhiteBall = (_dec = ccclass("WhiteBall"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(WhiteBall, _Component);

        function WhiteBall() {
          _classCallCheck(this, WhiteBall);

          return _possibleConstructorReturn(this, _getPrototypeOf(WhiteBall).apply(this, arguments));
        }

        _createClass(WhiteBall, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "shot",
          value: function shot(force) {
            console.log("force:", force);
            this.RigidBody.applyForce(v3(Math.random() * 600, Math.random() * 600, Math.random() * 600));
          }
        }, {
          key: "RigidBody",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          get: function get() {
            return this.getComponent(RigidBody);
          }
        }]);

        return WhiteBall;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Model/GridUtil.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _createClass, _classCallCheck, cclegacy, GridRange, GridUtil;

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "70435x/0eNDJqPDMkUtLOs0", "GridUtil", undefined);

      _export("GridRange", GridRange = {
        i: {
          max: 11,
          min: 0
        },
        j: {
          max: 8,
          min: 0
        }
      });

      _export("GridUtil", GridUtil = /*#__PURE__*/function () {
        function GridUtil() {
          _classCallCheck(this, GridUtil);
        }

        _createClass(GridUtil, null, [{
          key: "copyGrid",
          value: function copyGrid(origin) {
            return {
              i: origin.i,
              j: origin.j
            };
          }
          /** 获取水平 */

        }, {
          key: "GetHorizontalWayByOrigin",
          value: function GetHorizontalWayByOrigin(origin) {
            var res = [];
            var left = {
              i: origin.i,
              j: origin.j
            };

            while (--left.j >= GridRange.j.min) {
              res.push(this.copyGrid(left));
            }

            var right = {
              i: origin.i,
              j: origin.j
            };

            while (++right.j <= GridRange.j.max) {
              res.push(this.copyGrid(right));
            }

            return res;
          }
          /** 获取竖直 */

        }, {
          key: "GetVerticalWayByOrigin",
          value: function GetVerticalWayByOrigin(origin) {
            var res = [];
            var top = {
              i: origin.i,
              j: origin.j
            };

            while (++top.i <= GridRange.i.max) {
              res.push(this.copyGrid(top));
            }

            var bot = {
              i: origin.i,
              j: origin.j
            };

            while (--bot.i >= GridRange.i.min) {
              res.push(this.copyGrid(bot));
            }

            return res;
          }
          /** 获取对角线 */

        }, {
          key: "GetDiagonalWayByOrigin",
          value: function GetDiagonalWayByOrigin(origin) {
            var res = [];
            var leftTop = {
              i: origin.i,
              j: origin.j
            };

            while (++leftTop.i <= GridRange.i.max && --leftTop.j >= GridRange.j.min) {
              res.push(this.copyGrid(leftTop));
            }

            var rightTop = {
              i: origin.i,
              j: origin.j
            };

            while (++rightTop.i <= GridRange.i.max && ++rightTop.j <= GridRange.j.max) {
              res.push(this.copyGrid(rightTop));
            }

            var leftBot = {
              i: origin.i,
              j: origin.j
            };

            while (--leftBot.i >= GridRange.i.min && --leftBot.j >= GridRange.j.min) {
              res.push(this.copyGrid(leftBot));
            }

            var rightBot = {
              i: origin.i,
              j: origin.j
            };

            while (--rightBot.i >= GridRange.i.min && ++rightBot.j <= GridRange.j.max) {
              res.push(this.copyGrid(rightBot));
            }

            return res;
          }
          /** 获取九宫格 */

        }, {
          key: "GetSquaredWayByOrigin",
          value: function GetSquaredWayByOrigin(origin) {
            var res = []; // 对角

            var leftTop = {
              i: origin.i,
              j: origin.j
            };

            while (++leftTop.i <= GridRange.i.max && --leftTop.j >= GridRange.j.min) {
              res.push(this.copyGrid(leftTop));
              break;
            }

            var rightTop = {
              i: origin.i,
              j: origin.j
            };

            while (++rightTop.i <= GridRange.i.max && ++rightTop.j <= GridRange.j.max) {
              res.push(this.copyGrid(rightTop));
              break;
            }

            var leftBot = {
              i: origin.i,
              j: origin.j
            };

            while (--leftBot.i >= GridRange.i.min && --leftBot.j >= GridRange.j.min) {
              res.push(this.copyGrid(leftBot));
              break;
            }

            var rightBot = {
              i: origin.i,
              j: origin.j
            };

            while (--rightBot.i >= GridRange.i.min && ++rightBot.j <= GridRange.j.max) {
              res.push(this.copyGrid(rightBot));
              break;
            } // 竖直


            var top = {
              i: origin.i,
              j: origin.j
            };

            while (++top.j <= GridRange.j.max) {
              res.push(this.copyGrid(top));
              break;
            }

            var bot = {
              i: origin.i,
              j: origin.j
            };

            while (--bot.j >= GridRange.j.min) {
              res.push(this.copyGrid(bot));
              break;
            } // 水平


            var left = {
              i: origin.i,
              j: origin.j
            };

            while (--left.i >= GridRange.i.min) {
              res.push(this.copyGrid(left));
              break;
            }

            var right = {
              i: origin.i,
              j: origin.j
            };

            while (++right.i <= GridRange.i.max) {
              res.push(this.copyGrid(right));
              break;
            }

            return res;
          }
        }]);

        return GridUtil;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/Signal.js", ["cc"], function (_export, _context) {
  "use strict";

  var cclegacy;
  return {
    setters: [function (_cc) {
      cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0625f/72GNE+7Axsqw7trNs", "Signal", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/CompleteView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Signal/Signal.js", "../../Manager/GameStateController.js", "../../Manager/ResourceController.js", "../Animation/FireWorkAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, v3, tween, Vec3, Sprite, Component, GameOverSignal, OpenResultLayerSignal, RoundEndType, ResourceController, AnimationType, Title, FireWorkAnimation, _dec, _class, ccclass, property, CompleteView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Component = _cc.Component;
    }, function (_SignalSignalJs) {
      GameOverSignal = _SignalSignalJs.GameOverSignal;
      OpenResultLayerSignal = _SignalSignalJs.OpenResultLayerSignal;
    }, function (_ManagerGameStateControllerJs) {
      RoundEndType = _ManagerGameStateControllerJs.RoundEndType;
    }, function (_ManagerResourceControllerJs) {
      ResourceController = _ManagerResourceControllerJs.ResourceController;
      AnimationType = _ManagerResourceControllerJs.AnimationType;
      Title = _ManagerResourceControllerJs.Title;
    }, function (_AnimationFireWorkAnimationJs) {
      FireWorkAnimation = _AnimationFireWorkAnimationJs.FireWorkAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5cd27Zj3mtF95n+3dmdehmD", "CompleteView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CompleteView", CompleteView = (_dec = ccclass("CompleteView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(CompleteView, _Component);

        function CompleteView() {
          _classCallCheck(this, CompleteView);

          return _possibleConstructorReturn(this, _getPrototypeOf(CompleteView).apply(this, arguments));
        }

        _createClass(CompleteView, [{
          key: "onLoad",
          value: function onLoad() {
            GameOverSignal.inst.addListener(this.onGameOver, this);
            this.Font.node.active = false;
            this.Con && (this.Con.active = false);
          }
        }, {
          key: "start",
          value: function start() {
            this.FireWork && (this.FireWork.node.active = false);
          }
        }, {
          key: "onGameOver",
          value: function onGameOver(type) {
            this.Font.node.active = true;
            var delay = 1500;

            switch (type) {
              case RoundEndType.Complete:
                this.FireWork.node.active = true;
                this.Con && (this.Con.active = true);
                this.Font.spriteFrame = ResourceController.inst.getAnimationAtlas(AnimationType.UI, Title.CompleteAni);
                delay = 3000;
                break;

              case RoundEndType.Over:
                this.Font.spriteFrame = ResourceController.inst.getAnimationAtlas(AnimationType.UI, Title.Over);
                break;

              case RoundEndType.TimeUp:
                this.Font.spriteFrame = ResourceController.inst.getAnimationAtlas(AnimationType.UI, Title.TimeUp);
                break;

              case RoundEndType.OutOfMove:
                this.Font.spriteFrame = ResourceController.inst.getAnimationAtlas(AnimationType.UI, Title.OutOfMove);
                break;
            }

            if (this.FireWork && this.FireWork.node.active) {
              this.FireWork.play();
            }

            if (this.Font.node.active) {
              this.Font.node.setScale(v3(0, this.Font.node.scale.y, this.Font.node.scale.z));
              tween(this.Font.node).to(0.1, {
                scale: v3(1.2, 1.2, 1.2)
              }).start();
            }

            if (this.Con) {
              this.Con.setScale(Vec3.ZERO);
              tween(this.Con).sequence(tween(this.Con).to(0.1, {
                scale: v3(1.2, 1.2, 1.2)
              }), tween(this.Con).to(0.05, {
                scale: v3(1, 1, 1)
              }), tween(this.Con).delay(0.15), tween(this.Con).to(0.1, v3(1, 1, 1))).start();
            }

            setTimeout(function () {
              OpenResultLayerSignal.inst.dispatch(type);
            }, delay);
          }
        }, {
          key: "Font",
          get: function get() {
            return this.node.getChildByName("Font").getComponent(Sprite);
          }
        }, {
          key: "Con",
          get: function get() {
            return this.node.getChildByName("Con");
          }
        }, {
          key: "FireWork",
          get: function get() {
            return this.node.getChildByName("FireWork") ? this.node.getChildByName("FireWork").getComponent(FireWorkAnimation) : null;
          }
        }]);

        return CompleteView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/HeartCountLabel.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameLogic.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Label, Component, UpdateHeartCountSignal, _dec, _class, ccclass, property, HeartCountLabel;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Component = _cc.Component;
    }, function (_GameLogicJs) {
      UpdateHeartCountSignal = _GameLogicJs.UpdateHeartCountSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c5612EQ+klIepEuXIlgefiO", "HeartCountLabel", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HeartCountLabel", HeartCountLabel = (_dec = ccclass("HeartCountLabel"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(HeartCountLabel, _Component);

        function HeartCountLabel() {
          _classCallCheck(this, HeartCountLabel);

          return _possibleConstructorReturn(this, _getPrototypeOf(HeartCountLabel).apply(this, arguments));
        }

        _createClass(HeartCountLabel, [{
          key: "start",
          value: function start() {
            var _this = this; // Your initialization goes here.


            UpdateHeartCountSignal.inst.addListener(function (count, step) {
              _this.Label.string = "x" + count;
            }, this);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "Label",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          get: function get() {
            return this.getComponent(Label);
          }
        }]);

        return HeartCountLabel;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/HelpButtonView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Signal/Signal.js", "../../Manager/GameStateController.js", "../../Common/View/SingleTouchView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, ShowHelpLayerSignal, ButtonClickSignal, GameStateController, SingleTouchView, _dec, _class, ccclass, property, HelpButtonView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_SignalSignalJs) {
      ShowHelpLayerSignal = _SignalSignalJs.ShowHelpLayerSignal;
      ButtonClickSignal = _SignalSignalJs.ButtonClickSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_CommonViewSingleTouchViewJs) {
      SingleTouchView = _CommonViewSingleTouchViewJs.SingleTouchView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b0ed0PZGBtGV7tX6v1tD9Ct", "HelpButtonView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HelpButtonView", HelpButtonView = (_dec = ccclass("HelpButtonView"), _dec(_class = /*#__PURE__*/function (_SingleTouchView) {
        _inherits(HelpButtonView, _SingleTouchView);

        function HelpButtonView() {
          _classCallCheck(this, HelpButtonView);

          return _possibleConstructorReturn(this, _getPrototypeOf(HelpButtonView).apply(this, arguments));
        }

        _createClass(HelpButtonView, [{
          key: "onTouchEnd",
          value: function onTouchEnd() {
            if (GameStateController.inst.isGameOver()) return;
            ShowHelpLayerSignal.inst.dispatch();
            ButtonClickSignal.inst.dispatch();
          }
        }]);

        return HelpButtonView;
      }(SingleTouchView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/HoleEffectRoot.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Physics/BorderCollider.js", "../GameLogic.js", "../Animation/DropPocketAnimation.js", "../Animation/WhiteDropAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, cclegacy, _decorator, Component, HoleName, PocketScoredSignal, BallDropSignal, DropPocketAnimation, WhiteDropAnimation, _dec, _class, ccclass, property, HoleEffectRoot;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_PhysicsBorderColliderJs) {
      HoleName = _PhysicsBorderColliderJs.HoleName;
    }, function (_GameLogicJs) {
      PocketScoredSignal = _GameLogicJs.PocketScoredSignal;
      BallDropSignal = _GameLogicJs.BallDropSignal;
    }, function (_AnimationDropPocketAnimationJs) {
      DropPocketAnimation = _AnimationDropPocketAnimationJs.DropPocketAnimation;
    }, function (_AnimationWhiteDropAnimationJs) {
      WhiteDropAnimation = _AnimationWhiteDropAnimationJs.WhiteDropAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "08306qfvqxBYrKKslgxIzZQ", "HoleEffectRoot", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HoleEffectRoot", HoleEffectRoot = (_dec = ccclass("HoleEffectRoot"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(HoleEffectRoot, _Component);

        function HoleEffectRoot() {
          _classCallCheck(this, HoleEffectRoot);

          return _possibleConstructorReturn(this, _getPrototypeOf(HoleEffectRoot).apply(this, arguments));
        }

        _createClass(HoleEffectRoot, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            var _this = this; // Your initialization goes here.


            var _iterator = _createForOfIteratorHelper(this.node.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;
                child.active = false;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            PocketScoredSignal.inst.addListener(this.onPocketScored, this);
            BallDropSignal.inst.addListener(function (model, pocket) {
              if (model.isWhiteBall) {
                var child = _this.node.getChildByName(HoleName[pocket]);

                if (child) {
                  child.active = true;
                  child.getComponent(WhiteDropAnimation).play();
                }
              }
            }, this);
          }
        }, {
          key: "onPocketScored",
          value: function onPocketScored(type, name) {
            var child = this.node.getChildByName(name);

            if (child) {
              child.active = true;
              child.getComponent(DropPocketAnimation).play();
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return HoleEffectRoot;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/LineScaleView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Manager/GameStateController.js", "./MainUI.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, v3, UITransform, Component, GameStateController, RotationPoleSignal, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, LineScaleView;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      Component = _cc.Component;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_MainUIJs) {
      RotationPoleSignal = _MainUIJs.RotationPoleSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eac3b5QwRROBK9rOg7ZYeM5", "LineScaleView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LineScaleView", LineScaleView = (_dec = ccclass("LineScaleView"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(LineScaleView, _Component);

        function LineScaleView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, LineScaleView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LineScaleView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "LineScale", _descriptor, _assertThisInitialized(_this));

          _this.top = null;
          _this.bot = null;
          _this.offset = 0;
          _this.scale = 1;
          _this.augleScale = 0.01;
          return _this;
        }

        _createClass(LineScaleView, [{
          key: "start",
          value: function start() {
            this.top = this.LineScale.children[0];
            this.bot = this.LineScale.children[this.LineScale.children.length - 1];
            this.node.on(Node.EventType.TOUCH_MOVE, this.onMove, this);
            this.node.eventProcessor.touchListener["swallowTouches"] = true;
          }
        }, {
          key: "onMove",
          value: function onMove(ev) {
            if (GameStateController.inst.canInteractive()) {
              this.LineScale.translate(v3(0, ev.getDeltaY() * this.scale, 0));
              this.offset += ev.getDeltaY() * this.scale;

              while (Math.abs(this.offset) >= this.top.getComponent(UITransform).height) {
                if (this.offset > 0) {
                  /** 向上 */
                  this.top.setPosition(0, this.bot.position.y - this.bot.getComponent(UITransform).height, 0);
                  this.offset -= this.top.getComponent(UITransform).height;
                } else {
                  /** 向下 */
                  this.bot.setPosition(0, this.top.position.y + this.bot.getComponent(UITransform).height, 0);
                  this.offset += this.top.getComponent(UITransform).height;
                }

                this.LineScale.children.sort(function (a, b) {
                  return b.position.y - a.position.y;
                });
                this.top = this.LineScale.children[0];
                this.bot = this.LineScale.children[this.LineScale.children.length - 1];
              }

              RotationPoleSignal.inst.dispatch(ev.getDeltaY() * this.augleScale, true);
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return LineScaleView;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "LineScale", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/MenuButtonView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Signal/Signal.js", "../../Manager/GameStateController.js", "../../Common/View/SingleTouchView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _get, cclegacy, _decorator, MenuButtonClickSignal, ButtonClickSignal, GameStateController, SingleTouchView, _dec, _class, ccclass, property, MenuButtonView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_SignalSignalJs) {
      MenuButtonClickSignal = _SignalSignalJs.MenuButtonClickSignal;
      ButtonClickSignal = _SignalSignalJs.ButtonClickSignal;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_CommonViewSingleTouchViewJs) {
      SingleTouchView = _CommonViewSingleTouchViewJs.SingleTouchView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "44738JUeE1ID40DyAL6Gs2H", "MenuButtonView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MenuButtonView", MenuButtonView = (_dec = ccclass("MenuButtonView"), _dec(_class = /*#__PURE__*/function (_SingleTouchView) {
        _inherits(MenuButtonView, _SingleTouchView);

        function MenuButtonView() {
          _classCallCheck(this, MenuButtonView);

          return _possibleConstructorReturn(this, _getPrototypeOf(MenuButtonView).apply(this, arguments));
        }

        _createClass(MenuButtonView, [{
          key: "onLoad",
          value: function onLoad() {
            _get(_getPrototypeOf(MenuButtonView.prototype), "onLoad", this).call(this);
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd() {
            if (GameStateController.inst.isGameOver()) return;
            MenuButtonClickSignal.inst.dispatch();
            ButtonClickSignal.inst.dispatch();
          }
        }, {
          key: "start",
          value: function start() {}
        }]);

        return MenuButtonView;
      }(SingleTouchView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/MenuLayerView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameRule.js", "../../Signal/Signal.js", "../../Model/PlayModel.js", "../../Manager/GameStateController.js", "../../table.js", "../../Common/View/BaseView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _get, cclegacy, _decorator, Node, RichText, GetScoreByType, ScoreType, MenuButtonClickSignal, ShowPauseLayerSignal, ButtonClickSignal, GameOverSignal, EndNowSignal, PlayModel, GameStateController, En_View, En_ID, BaseView, _dec, _class, ccclass, property, MenuLayerView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      RichText = _cc.RichText;
    }, function (_GameRuleJs) {
      GetScoreByType = _GameRuleJs.GetScoreByType;
      ScoreType = _GameRuleJs.ScoreType;
    }, function (_SignalSignalJs) {
      MenuButtonClickSignal = _SignalSignalJs.MenuButtonClickSignal;
      ShowPauseLayerSignal = _SignalSignalJs.ShowPauseLayerSignal;
      ButtonClickSignal = _SignalSignalJs.ButtonClickSignal;
      GameOverSignal = _SignalSignalJs.GameOverSignal;
      EndNowSignal = _SignalSignalJs.EndNowSignal;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }, function (_ManagerGameStateControllerJs) {
      GameStateController = _ManagerGameStateControllerJs.GameStateController;
    }, function (_tableJs) {
      En_View = _tableJs.En_View;
      En_ID = _tableJs.En_ID;
    }, function (_CommonViewBaseViewJs) {
      BaseView = _CommonViewBaseViewJs.BaseView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7622behYcdBdalJSCiO8nwa", "MenuLayerView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MenuLayerView", MenuLayerView = (_dec = ccclass("MenuLayerView"), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inherits(MenuLayerView, _BaseView);

        function MenuLayerView() {
          _classCallCheck(this, MenuLayerView);

          return _possibleConstructorReturn(this, _getPrototypeOf(MenuLayerView).apply(this, arguments));
        }

        _createClass(MenuLayerView, [{
          key: "onLoad",
          value: function onLoad() {
            var _this = this;

            MenuButtonClickSignal.inst.addListener(this.onShow, this);
            ShowPauseLayerSignal.inst.addListener(function () {
              _this.onShow();
            }, this);
            this.Resume.on(Node.EventType.TOUCH_END, function () {
              GameStateController.inst.resume();
              ButtonClickSignal.inst.dispatch();

              _this.Hide();
            }, this);
            GameOverSignal.inst.addListener(this.Hide, this);
            this.EndNow.on(Node.EventType.TOUCH_END, function () {
              _this.Hide();

              ButtonClickSignal.inst.dispatch();
              EndNowSignal.inst.dispatch();
            }, this);

            _get(_getPrototypeOf(MenuLayerView.prototype), "onLoad", this).call(this);

            this.node.active = false;
          }
        }, {
          key: "onShow",
          value: function onShow() {
            if (this.node.active) return;

            if (PlayModel.inst.FreePauseCount <= 0) {
              this.Content.string = lan.t(En_View.ZanTingJieMian, En_ID.ZanTingKouFen, ["" + GetScoreByType(ScoreType.PauseCost)]);
            } else {
              this.Content.string = lan.t(En_View.ZanTingJieMian, En_ID.MianFeiZanTing, [PlayModel.inst.FreePauseCount.toString(), "" + GetScoreByType(ScoreType.PauseCost)]);
            }

            this.Show();
            GameStateController.inst.pause();
          }
        }, {
          key: "start",
          value: function start() {} // update (dt) {}

        }, {
          key: "Resume",
          // LIFE-CYCLE CALLBACKS:
          get: function get() {
            return this.node.getChildByName("Resume").getChildByName("btn_resume");
          }
        }, {
          key: "EndNow",
          get: function get() {
            return this.node.getChildByName("EndNow").getChildByName("btn_end");
          }
        }, {
          key: "Content",
          get: function get() {
            return this.node.getChildByName("Content").getComponent(RichText);
          }
        }]);

        return MenuLayerView;
      }(BaseView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/NoBustView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameRule.js", "../../Signal/Signal.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, v3, tween, Component, ScoreType, PlayerScoreChanged, _dec, _class, ccclass, property, NoBustView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      tween = _cc.tween;
      Component = _cc.Component;
    }, function (_GameRuleJs) {
      ScoreType = _GameRuleJs.ScoreType;
    }, function (_SignalSignalJs) {
      PlayerScoreChanged = _SignalSignalJs.PlayerScoreChanged;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49876R9QG9KCbb1z479iOVt", "NoBustView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("NoBustView", NoBustView = (_dec = ccclass("NoBustView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(NoBustView, _Component);

        function NoBustView() {
          _classCallCheck(this, NoBustView);

          return _possibleConstructorReturn(this, _getPrototypeOf(NoBustView).apply(this, arguments));
        }

        _createClass(NoBustView, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            var _this = this; // Your initialization goes here.


            this.node.scale = v3(0, 0, 0);
            PlayerScoreChanged.inst.addListener(function (score, changed, node, delay, type) {
              if (type == ScoreType.NoBust) {
                tween(_this.node).to(0.1, {
                  scale: v3(1.1, 1.1, 1.1)
                }).to(0.1, {
                  scale: v3(0.9, 0.9, 0.9)
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).delay(0.2).to(0.1, {
                  scale: v3(0, 0, 0)
                }).start();
              }
            }, this);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return NoBustView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/PocketEffectRoot.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameLogic.js", "../Animation/TrickShotLightAnimation.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createForOfIteratorHelper, cclegacy, _decorator, v3, Tween, tween, Component, PocketScoredSignal, ShotType, TrickShotLightAnimation, _dec, _class, ccclass, property, PocketEffectRoot;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      Tween = _cc.Tween;
      tween = _cc.tween;
      Component = _cc.Component;
    }, function (_GameLogicJs) {
      PocketScoredSignal = _GameLogicJs.PocketScoredSignal;
      ShotType = _GameLogicJs.ShotType;
    }, function (_AnimationTrickShotLightAnimationJs) {
      TrickShotLightAnimation = _AnimationTrickShotLightAnimationJs.TrickShotLightAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a8ddcAh97VC47ofaEu26kWv", "PocketEffectRoot", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PocketEffectRoot", PocketEffectRoot = (_dec = ccclass("PocketEffectRoot"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(PocketEffectRoot, _Component);

        function PocketEffectRoot() {
          _classCallCheck(this, PocketEffectRoot);

          return _possibleConstructorReturn(this, _getPrototypeOf(PocketEffectRoot).apply(this, arguments));
        }

        _createClass(PocketEffectRoot, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            var _iterator = _createForOfIteratorHelper(this.node.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;
                child.active = false;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            PocketScoredSignal.inst.addListener(this.onPocketScored, this);
          }
        }, {
          key: "onPocketScored",
          value: function onPocketScored(type, name) {
            var _this = this;

            if (type == ShotType.TrickShot) {
              var child = this.node.getChildByName(name);

              if (child) {
                child.active = true;
                var font = child.getChildByName("Font");
                font.setScale(v3(0, 0, 0));
                Tween.stopAllByTarget(font);
                child.getComponent(TrickShotLightAnimation).play();
                tween(font).to(0.1, {
                  scale: v3(0.5, 0.5, 1)
                }).delay(1).to(0.2, {
                  scale: v3(0, 0, 1)
                }).delay(0).call(function () {
                  _this.scheduleOnce(function () {
                    child.active = false;
                  }, 0);
                }).start();
              }
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return PocketEffectRoot;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/PointBallButtonView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "./HitPointLayer.js", "../GameObject/Pole.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, UITransform, v3, Component, UpdateShotCenterSignal, Pole, _dec, _class, ccclass, property, PointBallButtonView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Component = _cc.Component;
    }, function (_HitPointLayerJs) {
      UpdateShotCenterSignal = _HitPointLayerJs.UpdateShotCenterSignal;
    }, function (_GameObjectPoleJs) {
      Pole = _GameObjectPoleJs.Pole;
    }],
    execute: function () {
      cclegacy._RF.push({}, "35bf1BNR0hNmrvOEsujt1Mc", "PointBallButtonView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PointBallButtonView", PointBallButtonView = (_dec = ccclass("PointBallButtonView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(PointBallButtonView, _Component);

        function PointBallButtonView() {
          _classCallCheck(this, PointBallButtonView);

          return _possibleConstructorReturn(this, _getPrototypeOf(PointBallButtonView).apply(this, arguments));
        }

        _createClass(PointBallButtonView, [{
          key: "start",
          value: function start() {
            var _this = this; // Your initialization goes here.


            UpdateShotCenterSignal.inst.addListener(function () {
              var radius = _this.getComponent(UITransform).width / 2;
              var pointRadius = _this.Point.getComponent(UITransform).width / 2;

              _this.Point.setPosition(v3((radius - pointRadius) * Pole.HitPoint.x, (radius - pointRadius) * Pole.HitPoint.y, 0));
            }, this);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "Point",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          get: function get() {
            return this.node.getChildByName("bg_redpoint");
          }
        }]);

        return PointBallButtonView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/ResultLayerView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../GameRule.js", "../../Signal/Signal.js", "../../Model/PlayModel.js", "../../Manager/GameStateController.js", "../../Common/SDK/CelerSDK.js", "../../Manager/ResourceController.js", "../../table.js", "../../Common/View/BaseView.js", "../GameLogic.js", "../../Common/View/UI/NumberChangedView.js", "../Animation/ResultAnimation.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelper, cclegacy, _decorator, SpriteAtlas, v3, Label, tween, Sprite, RichText, Node, ScoreType, OpenResultLayerSignal, ShowSubmitSignal, ScoreCountingSignal, PlayModel, RoundEndType, CelerSDK, Title, En_View, En_ID, BaseView, GameLogic, NumberChangedView, ResultAnimation, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, ResultLayerView;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      SpriteAtlas = _cc.SpriteAtlas;
      v3 = _cc.v3;
      Label = _cc.Label;
      tween = _cc.tween;
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
      Node = _cc.Node;
    }, function (_GameRuleJs) {
      ScoreType = _GameRuleJs.ScoreType;
    }, function (_SignalSignalJs) {
      OpenResultLayerSignal = _SignalSignalJs.OpenResultLayerSignal;
      ShowSubmitSignal = _SignalSignalJs.ShowSubmitSignal;
      ScoreCountingSignal = _SignalSignalJs.ScoreCountingSignal;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }, function (_ManagerGameStateControllerJs) {
      RoundEndType = _ManagerGameStateControllerJs.RoundEndType;
    }, function (_CommonSDKCelerSDKJs) {
      CelerSDK = _CommonSDKCelerSDKJs.CelerSDK;
    }, function (_ManagerResourceControllerJs) {
      Title = _ManagerResourceControllerJs.Title;
    }, function (_tableJs) {
      En_View = _tableJs.En_View;
      En_ID = _tableJs.En_ID;
    }, function (_CommonViewBaseViewJs) {
      BaseView = _CommonViewBaseViewJs.BaseView;
    }, function (_GameLogicJs) {
      GameLogic = _GameLogicJs.GameLogic;
    }, function (_CommonViewUINumberChangedViewJs) {
      NumberChangedView = _CommonViewUINumberChangedViewJs.default;
    }, function (_AnimationResultAnimationJs) {
      ResultAnimation = _AnimationResultAnimationJs.ResultAnimation;
    }],
    execute: function () {
      cclegacy._RF.push({}, "94ab2SctrtJ97pzOWo8Ldy3", "ResultLayerView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ResultLayerView", ResultLayerView = (_dec = ccclass("ResultLayerView"), _dec2 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseView) {
        _inherits(ResultLayerView, _BaseView);

        function ResultLayerView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ResultLayerView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResultLayerView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.CountTotal = 4;

          _initializerDefineProperty(_this, "ResultAtlas", _descriptor, _assertThisInitialized(_this));

          _this.count = 0;
          return _this;
        }

        _createClass(ResultLayerView, [{
          key: "onLoad",
          value: function onLoad() {
            this.node.active = false;
            this.node.scale = v3(1, 1, 1);
            OpenResultLayerSignal.inst.addListener(this.onGameOver, this);
            this.Ani.Sprite.color.a = 0;
          } // update() {
          //   console.log(this.Ani.node.scale);
          // }

        }, {
          key: "onGameOver",
          value: function onGameOver(type) {
            var _this2 = this;

            console.log("Open result:", RoundEndType[type]);
            this.Submit.scale = v3(0, 0, 0);
            this.Content.string = lan.t(En_View.JieSuanJieMian, En_ID.DeFen);

            if (type == RoundEndType.TimeUp) {
              this.Title.spriteFrame = this.ResultAtlas.getSpriteFrame(Title.TimeUp);
            } else if (type == RoundEndType.Complete) {
              this.Title.spriteFrame = this.ResultAtlas.getSpriteFrame(Title.Complete);
            } else if (type == RoundEndType.OutOfMove) {
              this.Title.spriteFrame = this.ResultAtlas.getSpriteFrame(Title.OutOfMove);
            } else {
              this.Title.spriteFrame = this.ResultAtlas.getSpriteFrame(Title.Over);
            }

            var _iterator = _createForOfIteratorHelper(this.ScaleRoot.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;
                child.getComponent(Label).string = GameLogic.inst.scaleMap[parseInt(child.name)] || "x0";
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.Title.node.scale = v3(0, 0, 0);
            this.Root.scale = v3(0, 0, 0);
            this.node.active = true;
            tween(this.Root).to(0.1, {
              scale: v3(0.9, 1.3, 1)
            }).to(0.1, {
              scale: v3(1.2, 0.9, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).call(function () {
              _this2.scheduleOnce(function () {
                _this2.showInfo();
              }, 0);
            }).start();
          }
        }, {
          key: "showInfo",
          value: function showInfo() {
            var _this3 = this;

            this.Count = 0;
            this.TotalScore.STEP = 100;
            this.TimeBonus.STEP = 100;
            this.Score.STEP = 100;
            this.TrickScore.STEP = 100;
            this.Ani.play();

            var step = function step() {
              ScoreCountingSignal.inst.dispatch();
            };

            this.TimeBonus.onStep = step;
            this.TotalScore.onStep = step;
            this.Score.onStep = step;
            this.TrickScore.onStep = step;
            tween(this.Title.node).to(0.1, {
              scale: v3(1.5, 1.5, 1.5)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
            /** 时间加成 */

            this.TimeBonus.onNumberChanged(PlayModel.inst.TimeBonus, function () {
              _this3.Count++;
              console.log("TimeBonus Done");
            });
            /** 总分 */

            this.TotalScore.onNumberChanged(PlayModel.inst.getTotalScore(), function () {
              _this3.Count++;
              console.log("TotalScore Done");
            });
            /** 普通得分 */

            this.Score.onNumberChanged(PlayModel.inst.getScoreByType(ScoreType.HeartBonus) + PlayModel.inst.getScoreByType(ScoreType.NoBust) + PlayModel.inst.getScoreByType(ScoreType.PauseCost) + PlayModel.inst.getScoreByType(ScoreType.Pocket), function () {
              _this3.Count++;
              console.log("Score Done");
            });
            /** 技巧得分 */

            this.TrickScore.onNumberChanged(PlayModel.inst.getScoreByType(ScoreType.Link) + PlayModel.inst.getScoreByType(ScoreType.Multip) + PlayModel.inst.getScoreByType(ScoreType.Rebound), function () {
              _this3.Count++;
              console.log("TrickScore Done");
            });
          }
        }, {
          key: "Root",
          // LIFE-CYCLE CALLBACKS:

          /** 根节点 */
          get: function get() {
            return this.node.getChildByName("Root");
          }
          /** 标题 */

        }, {
          key: "Title",
          get: function get() {
            return this.Root.getChildByName("Title").getComponent(Sprite);
          }
        }, {
          key: "LabelRoot",
          get: function get() {
            return this.Root.getChildByName("LabelRoot");
          }
          /** 总分 */

        }, {
          key: "TotalScore",
          get: function get() {
            return this.LabelRoot.getChildByName("TotalScore").getComponent(NumberChangedView);
          }
          /**时间加成 */

        }, {
          key: "TimeBonus",
          get: function get() {
            return this.LabelRoot.getChildByName("TimeBonus").getComponent(NumberChangedView);
          }
        }, {
          key: "Score",
          get: function get() {
            return this.LabelRoot.getChildByName("ShotScore").getComponent(NumberChangedView);
          }
        }, {
          key: "TrickScore",
          get: function get() {
            return this.LabelRoot.getChildByName("TrickShot").getComponent(NumberChangedView);
          }
        }, {
          key: "ScaleRoot",
          get: function get() {
            return this.LabelRoot.getChildByName("Ball");
          }
          /** 提交按钮 */

        }, {
          key: "Submit",
          get: function get() {
            return this.Root.getChildByName("bg_btnbackcon");
          }
        }, {
          key: "Content",
          get: function get() {
            return this.LabelRoot.getChildByName("Content").getComponent(RichText);
          }
        }, {
          key: "Ani",
          get: function get() {
            return this.Root.getChildByName("Ani").getComponent(ResultAnimation);
          }
        }, {
          key: "Count",
          get: function get() {
            return this.count;
          },
          set: function set(val) {
            var _this4 = this;

            if (this.count == val) return;
            this.count = val;
            console.log("count:", this.Count);

            if (this.Count >= this.CountTotal) {
              ShowSubmitSignal.inst.dispatch();
              tween(this.Submit).to(0.1, {
                scale: v3(1.2, 1.2, 1.2)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              }).call(function () {
                _this4.Submit.getChildByName("btn_confirm").once(Node.EventType.TOUCH_END, function () {
                  CelerSDK.inst.submitScore(PlayModel.inst.getTotalScore());
                }, _this4);

                if (CELER_X) {
                  setTimeout(function () {
                    CelerSDK.inst.submitScore(PlayModel.inst.getTotalScore());
                  }, 5000);
                }
              }).start();
            }
          }
        }]);

        return ResultLayerView;
      }(BaseView), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "ResultAtlas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/ScoreLabelView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Signal/Signal.js", "../../Common/Cocos.js", "../../Model/PlayModel.js", "../../Factory/PrefabFactory.js", "../../Common/View/UI/NumberChangedView.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, v3, tween, PlayerScoreChanged, PLayerScoreInitSignal, ConvertToNodeSpaceAR, Distance, PlayModel, PrefabFactory, NumberChangedView, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, ScoreLabelView;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      v3 = _cc.v3;
      tween = _cc.tween;
    }, function (_SignalSignalJs) {
      PlayerScoreChanged = _SignalSignalJs.PlayerScoreChanged;
      PLayerScoreInitSignal = _SignalSignalJs.PLayerScoreInitSignal;
    }, function (_CommonCocosJs) {
      ConvertToNodeSpaceAR = _CommonCocosJs.ConvertToNodeSpaceAR;
      Distance = _CommonCocosJs.Distance;
    }, function (_ModelPlayModelJs) {
      PlayModel = _ModelPlayModelJs.PlayModel;
    }, function (_FactoryPrefabFactoryJs) {
      PrefabFactory = _FactoryPrefabFactoryJs.PrefabFactory;
    }, function (_CommonViewUINumberChangedViewJs) {
      NumberChangedView = _CommonViewUINumberChangedViewJs.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bc256d31IhPe6vDcFgy797C", "ScoreLabelView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ScoreLabelView", ScoreLabelView = (_dec = ccclass("ScoreLabelView"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_NumberChangedView) {
        _inherits(ScoreLabelView, _NumberChangedView);

        function ScoreLabelView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, ScoreLabelView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScoreLabelView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "ScoreFloatRoot", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(ScoreLabelView, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            PlayerScoreChanged.inst.addListener(this.onScoreChanged, this);
            PLayerScoreInitSignal.inst.addListener(function (score) {
              _this2.setNumber(score);
            }, this);
          }
        }, {
          key: "onScoreChanged",
          value: function onScoreChanged(score, changed, node) {
            var _this3 = this;

            var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            if (this.ScoreFloatRoot == null || changed < 0 || node == null) {
              this.onNumberChanged(PlayModel.inst.PlayerScore);
              return;
            }

            var scoreLableNode = PrefabFactory.inst.getObj("AddScore");
            var label = scoreLableNode.getComponent(Label);

            if (changed >= 0) {
              label.string = "+" + Math.abs(changed);
            } else {
              label.string = "-" + Math.abs(changed);
            }

            this.ScoreFloatRoot.addChild(scoreLableNode);
            var startPos = v3(0, 0, 0);

            if (node) {
              startPos = ConvertToNodeSpaceAR(node, this.ScoreFloatRoot);
            }

            var targetPos = ConvertToNodeSpaceAR(this.node, this.ScoreFloatRoot);
            scoreLableNode.setPosition(startPos);
            var floatTime = Distance(startPos, targetPos) / 2500;
            scoreLableNode.scale = v3(0, 0, 0);
            tween(scoreLableNode).delay(delay).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).delay(0.4).to(floatTime, {
              position: targetPos
            }).call(function () {
              PrefabFactory.inst.putObj("AddScore", scoreLableNode);
            }).start();
            setTimeout(function () {
              _this3.onNumberChanged(PlayModel.inst.PlayerScore);
            }, (floatTime + delay + 0.7) * 1000);
          }
        }]);

        return ScoreLabelView;
      }(NumberChangedView), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "ScoreFloatRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/SoundButtonView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Signal/Signal.js", "../../Manager/ResourceController.js", "../../Manager/AudioManager.js", "../../Common/View/SingleTouchView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _get, cclegacy, _decorator, Sprite, SoundStateChangedSignal, ResourceController, AudioController, SingleTouchView, _dec, _class, ccclass, property, SoundButtonView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
    }, function (_SignalSignalJs) {
      SoundStateChangedSignal = _SignalSignalJs.SoundStateChangedSignal;
    }, function (_ManagerResourceControllerJs) {
      ResourceController = _ManagerResourceControllerJs.ResourceController;
    }, function (_ManagerAudioManagerJs) {
      AudioController = _ManagerAudioManagerJs.AudioController;
    }, function (_CommonViewSingleTouchViewJs) {
      SingleTouchView = _CommonViewSingleTouchViewJs.SingleTouchView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "57bbbHi8R9Ge5kYa7JgQS4p", "SoundButtonView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SoundButtonView", SoundButtonView = (_dec = ccclass("SoundButtonView"), _dec(_class = /*#__PURE__*/function (_SingleTouchView) {
        _inherits(SoundButtonView, _SingleTouchView);

        function SoundButtonView() {
          _classCallCheck(this, SoundButtonView);

          return _possibleConstructorReturn(this, _getPrototypeOf(SoundButtonView).apply(this, arguments));
        }

        _createClass(SoundButtonView, [{
          key: "onLoad",
          value: function onLoad() {
            _get(_getPrototypeOf(SoundButtonView.prototype), "onLoad", this).call(this);

            this.updateState();
            SoundStateChangedSignal.inst.addListener(this.updateState, this);
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd() {
            var vol = AudioController.inst.MusicVolume;

            if (vol > 0) {
              AudioController.inst.setEffectVolume(0);
              AudioController.inst.setMusicVolume(0);
            } else {
              AudioController.inst.setEffectVolume(1);
              AudioController.inst.setMusicVolume(1);
            }

            SoundStateChangedSignal.inst.dispatch();
          }
        }, {
          key: "updateState",
          value: function updateState() {
            var vol = AudioController.inst.MusicVolume;

            if (vol > 0) {
              this.Sprite.spriteFrame = ResourceController.inst.getSoundEnable();
            } else {
              this.Sprite.spriteFrame = ResourceController.inst.getSoundDisabled();
            }
          }
        }, {
          key: "Sprite",
          get: function get() {
            return this.getComponent(Sprite);
          }
        }]);

        return SoundButtonView;
      }(SingleTouchView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/TimeLabelView.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Signal/Signal.js", "../../Common/Time.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, cclegacy, _decorator, Label, Component, UpdateTimeNumber, CountDownSignal, Time, _dec, _class, _temp, ccclass, property, TimeLabelView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Component = _cc.Component;
    }, function (_SignalSignalJs) {
      UpdateTimeNumber = _SignalSignalJs.UpdateTimeNumber;
      CountDownSignal = _SignalSignalJs.CountDownSignal;
    }, function (_CommonTimeJs) {
      Time = _CommonTimeJs.Time;
    }],
    execute: function () {
      cclegacy._RF.push({}, "db700GNA9FKfaKMwY0am0De", "TimeLabelView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TimeLabelView", TimeLabelView = (_dec = ccclass("TimeLabelView"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TimeLabelView, _Component);

        function TimeLabelView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TimeLabelView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimeLabelView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.sec = 0;
          return _this;
        }

        _createClass(TimeLabelView, [{
          key: "onLoad",
          value: function onLoad() {
            UpdateTimeNumber.inst.addListener(this.onTimeChanged, this);
          }
        }, {
          key: "onTimeChanged",
          value: function onTimeChanged(time) {
            var timeStr = Time.timeFormat(time);

            if (this.node.name == "MinuteLabel") {
              this.Label.string = timeStr.split("/")[0];
            } else if (this.node.name == "SecondLabel") {
              this.Label.string = timeStr.split("/")[1];
            } else {
              this.Label.string = timeStr;
            }

            var secNew = Math.floor(time);

            if (secNew != this.sec && (this.node.name == "MinuteLabel" || this.node.name != "MinuteLabel" && this.node.name != "SecondLabel")) {
              this.sec = secNew;

              if (this.sec <= 5) {
                CountDownSignal.inst.dispatch();
              }
            }
          }
        }, {
          key: "start",
          value: function start() {} // update (dt) {}

        }, {
          key: "Label",
          get: function get() {
            return this.getComponent(Label);
          }
        }]);

        return TimeLabelView;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///GamePlay/UI/WhiteShotLine.js", ["../../_virtual/_rollupPluginBabelHelpers.js", "cc", "../../Signal/Signal.js", "../../TableManager.js", "../../Factory/PrefabFactory.js", "../../Manager/ResourceController.js", "../GameObject/Pole.js", "../GameObject/BallRoot.js", "../GameObject/BallObject.js"], function (_export, _context) {
  "use strict";

  var _applyDecoratedDescriptor, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelper, cclegacy, geometry, _decorator, Node, v3, Camera, SphereCollider, math, PhysicsSystem, UITransform, Vec3, Sprite, Component, ShotSignal, TableManager, PrefabFactory, ResourceController, UpdateShotLineSignal, Pole, BallRoot, BallObject, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ray, ccclass, property, WhiteShotLine;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _applyDecoratedDescriptor = _virtual_rollupPluginBabelHelpersJs.applyDecoratedDescriptor;
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _initializerDefineProperty = _virtual_rollupPluginBabelHelpersJs.initializerDefineProperty;
      _assertThisInitialized = _virtual_rollupPluginBabelHelpersJs.assertThisInitialized;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _createForOfIteratorHelper = _virtual_rollupPluginBabelHelpersJs.createForOfIteratorHelper;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      geometry = _cc.geometry;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      v3 = _cc.v3;
      Camera = _cc.Camera;
      SphereCollider = _cc.SphereCollider;
      math = _cc.math;
      PhysicsSystem = _cc.PhysicsSystem;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Component = _cc.Component;
    }, function (_SignalSignalJs) {
      ShotSignal = _SignalSignalJs.ShotSignal;
    }, function (_TableManagerJs) {
      TableManager = _TableManagerJs.TableManager;
    }, function (_FactoryPrefabFactoryJs) {
      PrefabFactory = _FactoryPrefabFactoryJs.PrefabFactory;
    }, function (_ManagerResourceControllerJs) {
      ResourceController = _ManagerResourceControllerJs.ResourceController;
    }, function (_GameObjectPoleJs) {
      UpdateShotLineSignal = _GameObjectPoleJs.UpdateShotLineSignal;
      Pole = _GameObjectPoleJs.Pole;
    }, function (_GameObjectBallRootJs) {
      BallRoot = _GameObjectBallRootJs.BallRoot;
    }, function (_GameObjectBallObjectJs) {
      BallObject = _GameObjectBallObjectJs.BallObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7829dHeV0BEDJticg8p3pRI", "WhiteShotLine", undefined);

      ray = geometry.ray;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WhiteShotLine", WhiteShotLine = (_dec = ccclass("WhiteShotLine"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(WhiteShotLine, _Component);

        function WhiteShotLine() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WhiteShotLine);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WhiteShotLine)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "CameraRoot", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "NormalLine", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(WhiteShotLine, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            this.LeftStart.active = CC_DEBUG;
            this.RightStart.active = CC_DEBUG;
            this.CenterStart.active = CC_DEBUG;
            this.HitPoint.active = CC_DEBUG; // Your initialization goes here.

            UpdateShotLineSignal.inst.addListener(this.updateShotLine, this);
            ShotSignal.inst.addListener(function () {
              // return;
              _this2.node.active = false;
            }, this);
            this.node.active = false;
          }
        }, {
          key: "updateShotLine",
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }
          value: function updateShotLine(rotation) {
            if (BallRoot.WhiteBall) {
              this.node.active = true;
              var localScreen = v3(0, 0, 0);
              var ballWorld = v3(0, 0, 0);
              BallRoot.WhiteBall.getWorldPosition(ballWorld);
              var camera = this.CameraRoot.getComponentInChildren(Camera);
              camera.convertToUINode(ballWorld, this.node.parent, localScreen);
              this.node.setPosition(localScreen);
              this.node.setRotationFromEuler(0, 0, rotation.y);
              this.testShot(rotation);
            }
          }
        }, {
          key: "testShot",
          value: function testShot(rotation) {
            var camera = this.CameraRoot.getComponentInChildren(Camera);
            var ballWorld = v3(0, 0, 0);
            var radius = BallRoot.WhiteBall.getComponent(SphereCollider).radius;
            BallRoot.WhiteBall.getWorldPosition(ballWorld);
            ballWorld = ballWorld.add(Pole.PoleForward.multiplyScalar(radius / 1.6));
            var hitTest = "";
            var radian = math.toRadian(rotation.y);
            radius -= 0.17;
            var leftStart = v3(ballWorld.x - Math.cos(radian) * radius, ballWorld.y, ballWorld.z + Math.sin(radian) * radius);
            var localLeftStart = v3();
            camera.convertToUINode(leftStart, this.node, localLeftStart);
            this.LeftStart.setPosition(localLeftStart);
            var rightStart = v3(ballWorld.x + Math.cos(radian) * radius, ballWorld.y, ballWorld.z - Math.sin(radian) * radius);
            var localRightStart = v3();
            camera.convertToUINode(rightStart, this.node, localRightStart);
            this.RightStart.setPosition(localRightStart);
            var localCenterStart = v3();
            camera.convertToUINode(v3(ballWorld.x - Math.sin(radian) * radius / 2, ballWorld.y, ballWorld.z - Math.cos(radian) * radius / 2), this.node, localCenterStart);
            this.CenterStart.setPosition(localCenterStart);
            var centerRay = ray.create(ballWorld.x - Math.sin(radian) * radius / 2, ballWorld.y, ballWorld.z - Math.cos(radian) * radius / 2, Pole.PoleForward.x, Pole.PoleForward.y, Pole.PoleForward.z);
            var leftRay = ray.create(leftStart.x, leftStart.y, leftStart.z, Pole.PoleForward.x, Pole.PoleForward.y, Pole.PoleForward.z);
            var rightRay = ray.create(rightStart.x, rightStart.y, rightStart.z, Pole.PoleForward.x, Pole.PoleForward.y, Pole.PoleForward.z);
            var raycastResult = null;
            PhysicsSystem.instance.raycastClosest(centerRay);
            raycastResult = PhysicsSystem.instance.raycastClosestResult.clone();
            hitTest = "Center";
            PhysicsSystem.instance.raycastClosest(rightRay);

            if (PhysicsSystem.instance.raycastClosestResult.distance < raycastResult.distance) {
              hitTest = "Right";
              raycastResult = PhysicsSystem.instance.raycastClosestResult.clone();
            }

            PhysicsSystem.instance.raycastClosest(leftRay);

            if (PhysicsSystem.instance.raycastClosestResult.distance < raycastResult.distance) {
              hitTest = "Left";
              raycastResult = PhysicsSystem.instance.raycastClosestResult.clone();
            }
            /** 碰撞点 */


            var raycastHitPoint = raycastResult.hitPoint.clone();
            /** 碰撞法向 */

            var raycastHitNommal = raycastResult.hitNormal.clone();
            /** 击球方向 */

            var forward = Pole.PoleForward.clone();
            /** 计算点p */

            this.CrossPoint.active = false;
            /** 计算白球模拟位置 */

            var localScreenEnd = v3();
            camera.convertToUINode(raycastResult.hitPoint, this.node, localScreenEnd);
            var normalS = raycastResult.hitNormal.multiplyScalar(forward.clone().negative().dot(raycastResult.hitNormal));
            var reflection = forward.clone().add(normalS.clone()).multiplyScalar(2);
            reflection = reflection.clone().subtract(forward.clone());
            var factor = v3(forward.x, 0, forward.z).cross(v3(reflection.x, 0, reflection.z)).y > 0 ? 1 : -1;
            var normalRadian = math.Vec3.angle(v3(raycastResult.hitNormal.x, 0, raycastResult.hitNormal.z), v3(forward.x, 0, forward.z));
            var yFactor = hitTest == "Center" ? -this.Ball.getComponent(UITransform).width / 2 : Math.cos(normalRadian) * this.Ball.getComponent(UITransform).width / 2;
            /** 会碰撞到球 */

            if (raycastResult.collider instanceof SphereCollider) {
              this.ColorLineRoot.active = true;
              /** 球的半径 */

              var ballRadius = BallRoot.WhiteBall.getComponent(SphereCollider).radius - 0.08;
              /** 碰撞球的坐标 */

              var hitBallOrigin = v3();
              raycastResult.collider.node.getWorldPosition(hitBallOrigin);
              /** 白球坐标 */

              var whiteBallOrigin = ballWorld.clone();
              /** 受击球球心与击球方向的交点 */

              var crossPoint = v3();
              /** 白球碰撞位置球心 */

              var whiteCenter = v3();
              var corssPointLocal = v3();

              if (math.approx(forward.z, 0, 0.001)) {
                crossPoint.z = ballWorld.z;
                crossPoint.x = hitBallOrigin.x;
              } else {
                crossPoint.z = (hitBallOrigin.x * forward.x + whiteBallOrigin.z * forward.x * forward.x / forward.z - whiteBallOrigin.x * forward.x + hitBallOrigin.z * forward.z) / (forward.x * forward.x / forward.z + forward.z);
                crossPoint.x = (crossPoint.z - whiteBallOrigin.z) * forward.x / forward.z + whiteBallOrigin.x;
              }

              camera.convertToUINode(crossPoint, this.node, corssPointLocal);
              this.CrossPoint.active = CC_DEBUG;
              this.CrossPoint.setPosition(corssPointLocal);
              /** 正好相切，球心和交点在同一个点 */

              if (math.approx(Vec3.distance(hitBallOrigin, crossPoint), 2 * ballRadius, 0.001)) {
                whiteCenter.set(crossPoint);
              } else {
                if (math.approx(forward.z, 0, 0.001)) {
                  whiteCenter.z = ballWorld.z;
                  var d = Math.abs(whiteBallOrigin.z - hitBallOrigin.z);
                  d = Math.sqrt(4 * ballRadius * ballRadius - d * d);

                  if (whiteBallOrigin.x > hitBallOrigin.x) {
                    whiteCenter.x = hitBallOrigin.x + d;
                  } else {
                    whiteCenter.x = hitBallOrigin.x - d;
                  }
                } else {
                  var whiteCenterFactor = whiteBallOrigin.z < crossPoint.z ? -1 : 1;
                  var a = 1 + Math.pow(forward.x / forward.z, 2);
                  var b = 2 * crossPoint.x * forward.x / forward.z - 2 * hitBallOrigin.z - 2 * Math.pow(forward.x / forward.z, 2) * crossPoint.z - 2 * hitBallOrigin.x * forward.x / forward.z;
                  var c = hitBallOrigin.x * hitBallOrigin.x + crossPoint.x * crossPoint.x - 2 * crossPoint.x * crossPoint.z * forward.x / forward.z + Math.pow(forward.x / forward.z, 2) * crossPoint.z * crossPoint.z + hitBallOrigin.z * hitBallOrigin.z - 4 * ballRadius * ballRadius - 2 * hitBallOrigin.x * crossPoint.x + 2 * hitBallOrigin.x * crossPoint.z * forward.x / forward.z;
                  whiteCenter.z = (-b + whiteCenterFactor * Math.sqrt(b * b - 4 * a * c)) / (2 * a);
                  whiteCenter.x = crossPoint.x - (crossPoint.z - whiteCenter.z) * forward.x / forward.z;
                }
              }

              var whiteCenterLocal = v3();
              camera.convertToUINode(whiteCenter, this.node, whiteCenterLocal);
              this.Ball.setPosition(v3(0, whiteCenterLocal.y, 0));
              raycastHitPoint = v3((hitBallOrigin.x + whiteCenter.x) / 2, raycastResult.hitPoint.y, (hitBallOrigin.z + whiteCenter.z) / 2);
              raycastHitNommal = v3(whiteCenter.x - hitBallOrigin.x, whiteCenter.y - hitBallOrigin.y, whiteCenter.z - hitBallOrigin.z).normalize();
              /** 重新计算新的反射线 */

              normalS = raycastHitNommal.clone().multiplyScalar(forward.clone().negative().dot(raycastHitNommal));
              reflection = forward.clone().add(normalS.clone()).multiplyScalar(2);
              reflection = reflection.clone().subtract(forward.clone());
              this.drawColorLine(raycastResult.collider.node, raycastHitNommal);
              Pole.HitNormal = raycastHitNommal.clone().negative();
            } else {
              Pole.HitNormal = null;
              /** 没有碰撞到球 */

              this.ColorLineRoot.active = false;
              this.Ball.setPosition(v3(0, localScreenEnd.y + yFactor, 0));
            }

            var hitPointLocal = v3();
            camera.convertToUINode(raycastHitPoint, this.node, hitPointLocal);
            this.HitPoint.setPosition(hitPointLocal);
            var reflectionRadian = factor * math.Vec3.angle(v3(forward.x, 0, forward.z), v3(reflection.x, 0, reflection.z));
            this.NormalLine.setRotationFromEuler(0, 0, math.toDegree(reflectionRadian));

            if (raycastResult.collider instanceof SphereCollider) {
              this.NormalLine.active = false;
            } else {
              this.NormalLine.active = true;
            }

            this.NormalLine.setPosition(this.Ball.position);
            this.drawLine();
          }
        }, {
          key: "drawColorLine",
          value: function drawColorLine(hitBall, hitNormal) {
            this.ColorLineRoot.active = true;
            var camera = this.CameraRoot.getComponentInChildren(Camera);
            var hitModel = hitBall.getComponent(BallObject).Model;
            hitNormal = hitNormal.clone().negative();
            var factor = v3(Pole.PoleForward.x, 0, Pole.PoleForward.z).cross(v3(hitNormal.x, 0, hitNormal.z)).y > 0 ? 1 : -1;
            var reflectionRadian = factor * math.Vec3.angle(v3(Pole.PoleForward.x, 0, Pole.PoleForward.z), v3(hitNormal.x, 0, hitNormal.z));
            var hitBallLocal = v3();
            var hitBallWorld = v3();
            hitBall.getWorldPosition(hitBallWorld);
            camera.convertToUINode(hitBallWorld, this.node, hitBallLocal);
            this.ColorLineRoot.setPosition(hitBallLocal);
            this.ColorLineRoot.setRotationFromEuler(0, 0, math.toDegree(reflectionRadian));
            var step = CC_DEBUG ? 5 : 25;
            var count = Math.floor(255 / step);
            var lineName = TableManager.inst.getBalls(hitModel.Type).ShotLine;

            while (this.ColorLineRoot.children.length != count) {
              if (this.ColorLineRoot.children.length < count) {
                var line = PrefabFactory.inst.getObj("ColorLine");
                line.getComponent(Sprite).color.a = 255 - this.ColorLineRoot.children.length * step;
                this.ColorLineRoot.addChild(line);
                line.setPosition(0, this.ColorLineRoot.children.length * line.getComponent(UITransform).height, 0);
              } else {
                this.LineRoot.removeChild(this.LineRoot.children[this.LineRoot.children.length - 1]);
              }
            }

            var _iterator = _createForOfIteratorHelper(this.ColorLineRoot.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _line = _step.value;
                _line.getComponent(Sprite).spriteFrame = ResourceController.inst.getColorLine(lineName);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "drawLine",
          value: function drawLine() {
            var count = Math.max(0, Math.ceil(Vec3.distance(v3(), this.Ball.position) / 8) - 1);
            var startY = 0;

            if (this.LineRoot.children.length > 0) {
              startY = this.LineRoot.children[this.LineRoot.children.length - 1].position.y;
            }

            while (this.LineRoot.children.length != count) {
              if (this.LineRoot.children.length < count) {
                var line = PrefabFactory.inst.getObj("WhiteLine");
                this.LineRoot.addChild(line);
                line.setPosition(0, startY + line.getComponent(UITransform).height, 0);
                startY += line.getComponent(UITransform).height;
              } else {
                this.LineRoot.removeChild(this.LineRoot.children[this.LineRoot.children.length - 1]);

                if (this.LineRoot.children.length <= 0) {
                  startY = 0;
                } else {
                  startY -= this.LineRoot.children[0].getComponent(UITransform).height;
                }
              }
            }
          }
        }, {
          key: "Ball",
          get: function get() {
            return this.node.getChildByName("Ball");
          }
        }, {
          key: "LineRoot",
          get: function get() {
            return this.node.getChildByName("LineRoot");
          }
        }, {
          key: "ColorLineRoot",
          get: function get() {
            return this.node.getChildByName("ColorLineRoot");
          }
        }, {
          key: "LeftStart",
          get: function get() {
            return this.node.getChildByName("LeftStart");
          }
        }, {
          key: "RightStart",
          get: function get() {
            return this.node.getChildByName("RightStart");
          }
        }, {
          key: "CenterStart",
          get: function get() {
            return this.node.getChildByName("CenterStart");
          }
        }, {
          key: "HitPoint",
          get: function get() {
            return this.node.getChildByName("HitPoint");
          }
        }, {
          key: "CrossPoint",
          get: function get() {
            return this.node.getChildByName("CrossPoint");
          }
        }, {
          key: "UITransform",
          get: function get() {
            return this.getComponent(UITransform);
          }
        }]);

        return WhiteShotLine;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CameraRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "NormalLine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Test/TestLabelView.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/View/UI/NumberChangedView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _createClass, _get, cclegacy, _decorator, Node, NumberChangedView, _dec, _class, _temp, ccclass, property, TestLabelView;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _get = _virtual_rollupPluginBabelHelpersJs.get;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_CommonViewUINumberChangedViewJs) {
      NumberChangedView = _CommonViewUINumberChangedViewJs.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ea50eoV6kRGK6+iihfqfZVk", "TestLabelView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TestLabelView", TestLabelView = (_dec = ccclass("TestLabelView"), _dec(_class = (_temp = /*#__PURE__*/function (_NumberChangedView) {
        _inherits(TestLabelView, _NumberChangedView);

        function TestLabelView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TestLabelView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TestLabelView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.score = 0;
          return _this;
        }

        _createClass(TestLabelView, [{
          key: "onLoad",
          value: function onLoad() {
            var _this2 = this;

            _get(_getPrototypeOf(TestLabelView.prototype), "onLoad", this).call(this);

            this.node.on(Node.EventType.TOUCH_END, function () {
              _this2.onNumberChanged(_this2.score += 100);
            }, this);
          }
        }]);

        return TestLabelView;
      }(NumberChangedView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Test/TestSprite.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc", "../Common/View/BaseView.js"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, BaseView, _dec, _class, ccclass, property, TestSprite;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonViewBaseViewJs) {
      BaseView = _CommonViewBaseViewJs.BaseView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d27068zXehES6hCrPIJ3nYe", "TestSprite", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TestSprite", TestSprite = (_dec = ccclass("TestSprite"), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inherits(TestSprite, _BaseView);

        function TestSprite() {
          _classCallCheck(this, TestSprite);

          return _possibleConstructorReturn(this, _getPrototypeOf(TestSprite).apply(this, arguments));
        }

        _createClass(TestSprite, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return TestSprite;
      }(BaseView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///Test/TestView.js", ["../_virtual/_rollupPluginBabelHelpers.js", "cc"], function (_export, _context) {
  "use strict";

  var _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, cclegacy, _decorator, Component, _dec, _class, ccclass, property, TestView;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_virtual_rollupPluginBabelHelpersJs) {
      _inherits = _virtual_rollupPluginBabelHelpersJs.inherits;
      _createClass = _virtual_rollupPluginBabelHelpersJs.createClass;
      _classCallCheck = _virtual_rollupPluginBabelHelpersJs.classCallCheck;
      _possibleConstructorReturn = _virtual_rollupPluginBabelHelpersJs.possibleConstructorReturn;
      _getPrototypeOf = _virtual_rollupPluginBabelHelpersJs.getPrototypeOf;
    }, function (_cc) {
      cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cclegacy._RF.push({}, "43fd8d5LH1PVqExvFFWxY1v", "TestView", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TestView", TestView = (_dec = ccclass("TestView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(TestView, _Component);

        function TestView() {
          _classCallCheck(this, TestView);

          return _possibleConstructorReturn(this, _getPrototypeOf(TestView).apply(this, arguments));
        }

        _createClass(TestView, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            this.node.destroy();
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return TestView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/prerequisite-imports:main", ["../Common/ToSingleTon.js", "../Common/HashMap.js", "../Command/Notification.js", "../GamePlay/GameRule.js", "../Common/Signal.js", "../Signal/Signal.js", "../Ad/FlyCnicornAd.js", "../Common/Random.js", "../Common/Cocos.js", "../GamePlay/Model/Level.js", "../Model/PlayModel.js", "../Manager/GameStateController.js", "../TableManager.js", "../Common/SDK/LogHandler.js", "../Common/SDK/CelerSDK.js", "../Manager/StepManager.js", "../Command/SimpleCommand.js", "../Command/MacroCommand.js", "../GameLoad/LoadAudioCommand.js", "../GameLoad/LoadJsonCommand.js", "../Factory/MaterialFactory.js", "../GameLoad/LoadMaterialCommand.js", "../Factory/PrefabFactory.js", "../GameLoad/LoadPrefabCommand.js", "../GameLoad/InitialCommand.js", "../GameLoad/StartupCommand.js", "../GameLoad/InitialFacade.js", "../Manager/ResourceController.js", "../App/App.js", "../table.js", "../GamePlay/Model/BallModel.js", "../Common/View/BaseView.js", "../GamePlay/UI/PointTouchView.js", "../GamePlay/UI/HitPointLayer.js", "../GamePlay/UI/MainUI.js", "../GamePlay/UI/PoleTouchView.js", "../GamePlay/GameObject/Pole.js", "../GamePlay/GameObject/BallRoot.js", "../GamePlay/Physics/BorderCollider.js", "../Common/View/SpriteUIAnimation.js", "../GamePlay/Animation/HeartBonusAnimation.js", "../GamePlay/UI/ScoreScaleRoot.js", "../GamePlay/GameLogic.js", "../GamePlay/GameObject/PrefabView.js", "../GamePlay/GameObject/BallObject.js", "../Manager/AudioManager.js", "../Manager/AdController.js", "../Ad/AdLayer.js", "../Ad/FlyAdCnicornAnimation.js", "../Ad/WildAdAnimation.js", "../Ad/WildAdButton.js", "../App/VersionLabel.js", "../Common/Camera/CameraAdaption.js", "../Common/Time.js", "../Common/View/BaseMediator.js", "../Common/View/SingleTouchMediator.js", "../Common/View/GlobalSingleTouch/GlobalSingleTouchMediator.js", "../Common/View/GlobalSingleTouch/GlobalSingleTouchView.js", "../Common/View/SingleTouchView.js", "../Common/View/Transform/EaseBaseView.js", "../Common/View/Transform/PositionView.js", "../Common/View/Transform/RotationView.js", "../Common/View/UI/AdaptationWigetView.js", "../Common/View/UI/HelpLayerMediator.js", "../Common/View/UI/HelpLayerView.js", "../Common/View/UI/HelpTextView.js", "../Common/View/UI/LoadingAnimation.js", "../Common/View/UI/LoadingViewMediator.js", "../Common/View/UI/LoadingView.js", "../Common/View/UI/NumberChangedView.js", "../Common/View/UI/SliderView.js", "../Common/View/UI/ThemeView.js", "../Common/View/UI/TimeEffectAnimation.js", "../GamePlay/Animation/AddHeartAnimation.js", "../GamePlay/Animation/DropPocketAnimation.js", "../GamePlay/Animation/FireWorkAnimation.js", "../GamePlay/Animation/HeartBlingAnimation.js", "../GamePlay/Animation/HeartBrokenAnimation.js", "../GamePlay/Animation/HeartIdleAnimation.js", "../GamePlay/Animation/ResultAnimation.js", "../GamePlay/Animation/TrickShotLightAnimation.js", "../GamePlay/Animation/WhiteDropAnimation.js", "../GamePlay/GameObject/3DRootAdaption.js", "../GamePlay/GameObject/ColliderRoot.js", "../GamePlay/GameObject/TablePlane.js", "../GamePlay/GameObject/WhiteBall.js", "../GamePlay/Model/GridUtil.js", "../GamePlay/Signal.js", "../GamePlay/UI/CompleteView.js", "../GamePlay/UI/HeartCountLabel.js", "../GamePlay/UI/HelpButtonView.js", "../GamePlay/UI/HoleEffectRoot.js", "../GamePlay/UI/LineScaleView.js", "../GamePlay/UI/MenuButtonView.js", "../GamePlay/UI/MenuLayerView.js", "../GamePlay/UI/NoBustView.js", "../GamePlay/UI/PocketEffectRoot.js", "../GamePlay/UI/PointBallButtonView.js", "../GamePlay/UI/ResultLayerView.js", "../GamePlay/UI/ScoreLabelView.js", "../GamePlay/UI/SoundButtonView.js", "../GamePlay/UI/TimeLabelView.js", "../GamePlay/UI/WhiteShotLine.js", "../Test/TestLabelView.js", "../Test/TestSprite.js", "../Test/TestView.js"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_CommonToSingleTonJs) {}, function (_CommonHashMapJs) {}, function (_CommandNotificationJs) {}, function (_GamePlayGameRuleJs) {}, function (_CommonSignalJs) {}, function (_SignalSignalJs) {}, function (_AdFlyCnicornAdJs) {}, function (_CommonRandomJs) {}, function (_CommonCocosJs) {}, function (_GamePlayModelLevelJs) {}, function (_ModelPlayModelJs) {}, function (_ManagerGameStateControllerJs) {}, function (_TableManagerJs) {}, function (_CommonSDKLogHandlerJs) {}, function (_CommonSDKCelerSDKJs) {}, function (_ManagerStepManagerJs) {}, function (_CommandSimpleCommandJs) {}, function (_CommandMacroCommandJs) {}, function (_GameLoadLoadAudioCommandJs) {}, function (_GameLoadLoadJsonCommandJs) {}, function (_FactoryMaterialFactoryJs) {}, function (_GameLoadLoadMaterialCommandJs) {}, function (_FactoryPrefabFactoryJs) {}, function (_GameLoadLoadPrefabCommandJs) {}, function (_GameLoadInitialCommandJs) {}, function (_GameLoadStartupCommandJs) {}, function (_GameLoadInitialFacadeJs) {}, function (_ManagerResourceControllerJs) {}, function (_AppAppJs) {}, function (_tableJs) {}, function (_GamePlayModelBallModelJs) {}, function (_CommonViewBaseViewJs) {}, function (_GamePlayUIPointTouchViewJs) {}, function (_GamePlayUIHitPointLayerJs) {}, function (_GamePlayUIMainUIJs) {}, function (_GamePlayUIPoleTouchViewJs) {}, function (_GamePlayGameObjectPoleJs) {}, function (_GamePlayGameObjectBallRootJs) {}, function (_GamePlayPhysicsBorderColliderJs) {}, function (_CommonViewSpriteUIAnimationJs) {}, function (_GamePlayAnimationHeartBonusAnimationJs) {}, function (_GamePlayUIScoreScaleRootJs) {}, function (_GamePlayGameLogicJs) {}, function (_GamePlayGameObjectPrefabViewJs) {}, function (_GamePlayGameObjectBallObjectJs) {}, function (_ManagerAudioManagerJs) {}, function (_ManagerAdControllerJs) {}, function (_AdAdLayerJs) {}, function (_AdFlyAdCnicornAnimationJs) {}, function (_AdWildAdAnimationJs) {}, function (_AdWildAdButtonJs) {}, function (_AppVersionLabelJs) {}, function (_CommonCameraCameraAdaptionJs) {}, function (_CommonTimeJs) {}, function (_CommonViewBaseMediatorJs) {}, function (_CommonViewSingleTouchMediatorJs) {}, function (_CommonViewGlobalSingleTouchGlobalSingleTouchMediatorJs) {}, function (_CommonViewGlobalSingleTouchGlobalSingleTouchViewJs) {}, function (_CommonViewSingleTouchViewJs) {}, function (_CommonViewTransformEaseBaseViewJs) {}, function (_CommonViewTransformPositionViewJs) {}, function (_CommonViewTransformRotationViewJs) {}, function (_CommonViewUIAdaptationWigetViewJs) {}, function (_CommonViewUIHelpLayerMediatorJs) {}, function (_CommonViewUIHelpLayerViewJs) {}, function (_CommonViewUIHelpTextViewJs) {}, function (_CommonViewUILoadingAnimationJs) {}, function (_CommonViewUILoadingViewMediatorJs) {}, function (_CommonViewUILoadingViewJs) {}, function (_CommonViewUINumberChangedViewJs) {}, function (_CommonViewUISliderViewJs) {}, function (_CommonViewUIThemeViewJs) {}, function (_CommonViewUITimeEffectAnimationJs) {}, function (_GamePlayAnimationAddHeartAnimationJs) {}, function (_GamePlayAnimationDropPocketAnimationJs) {}, function (_GamePlayAnimationFireWorkAnimationJs) {}, function (_GamePlayAnimationHeartBlingAnimationJs) {}, function (_GamePlayAnimationHeartBrokenAnimationJs) {}, function (_GamePlayAnimationHeartIdleAnimationJs) {}, function (_GamePlayAnimationResultAnimationJs) {}, function (_GamePlayAnimationTrickShotLightAnimationJs) {}, function (_GamePlayAnimationWhiteDropAnimationJs) {}, function (_GamePlayGameObject3DRootAdaptionJs) {}, function (_GamePlayGameObjectColliderRootJs) {}, function (_GamePlayGameObjectTablePlaneJs) {}, function (_GamePlayGameObjectWhiteBallJs) {}, function (_GamePlayModelGridUtilJs) {}, function (_GamePlaySignalJs) {}, function (_GamePlayUICompleteViewJs) {}, function (_GamePlayUIHeartCountLabelJs) {}, function (_GamePlayUIHelpButtonViewJs) {}, function (_GamePlayUIHoleEffectRootJs) {}, function (_GamePlayUILineScaleViewJs) {}, function (_GamePlayUIMenuButtonViewJs) {}, function (_GamePlayUIMenuLayerViewJs) {}, function (_GamePlayUINoBustViewJs) {}, function (_GamePlayUIPocketEffectRootJs) {}, function (_GamePlayUIPointBallButtonViewJs) {}, function (_GamePlayUIResultLayerViewJs) {}, function (_GamePlayUIScoreLabelViewJs) {}, function (_GamePlayUISoundButtonViewJs) {}, function (_GamePlayUITimeLabelViewJs) {}, function (_GamePlayUIWhiteShotLineJs) {}, function (_TestTestLabelViewJs) {}, function (_TestTestSpriteJs) {}, function (_TestTestViewJs) {}],
    execute: function () {}
  };
});

(function(r) {
  r('project:///assets/Scripts/Common/ToSingleTon.js', 'chunks:///Common/ToSingleTon.js');
  r('project:///assets/Scripts/Common/HashMap.js', 'chunks:///Common/HashMap.js');
  r('project:///assets/Scripts/Command/Notification.js', 'chunks:///Command/Notification.js');
  r('project:///assets/Scripts/GamePlay/GameRule.js', 'chunks:///GamePlay/GameRule.js');
  r('project:///assets/Scripts/Common/Signal.js', 'chunks:///Common/Signal.js');
  r('project:///assets/Scripts/Signal/Signal.js', 'chunks:///Signal/Signal.js');
  r('project:///assets/Scripts/Ad/FlyCnicornAd.js', 'chunks:///Ad/FlyCnicornAd.js');
  r('project:///assets/Scripts/Common/Random.js', 'chunks:///Common/Random.js');
  r('project:///assets/Scripts/Common/Cocos.js', 'chunks:///Common/Cocos.js');
  r('project:///assets/Scripts/GamePlay/Model/Level.js', 'chunks:///GamePlay/Model/Level.js');
  r('project:///assets/Scripts/Model/PlayModel.js', 'chunks:///Model/PlayModel.js');
  r('project:///assets/Scripts/Manager/GameStateController.js', 'chunks:///Manager/GameStateController.js');
  r('project:///assets/Scripts/TableManager.js', 'chunks:///TableManager.js');
  r('project:///assets/Scripts/Common/SDK/LogHandler.js', 'chunks:///Common/SDK/LogHandler.js');
  r('project:///assets/Scripts/Common/SDK/CelerSDK.js', 'chunks:///Common/SDK/CelerSDK.js');
  r('project:///assets/Scripts/Manager/StepManager.js', 'chunks:///Manager/StepManager.js');
  r('project:///assets/Scripts/Command/SimpleCommand.js', 'chunks:///Command/SimpleCommand.js');
  r('project:///assets/Scripts/Command/MacroCommand.js', 'chunks:///Command/MacroCommand.js');
  r('project:///assets/Scripts/GameLoad/LoadAudioCommand.js', 'chunks:///GameLoad/LoadAudioCommand.js');
  r('project:///assets/Scripts/GameLoad/LoadJsonCommand.js', 'chunks:///GameLoad/LoadJsonCommand.js');
  r('project:///assets/Scripts/Factory/MaterialFactory.js', 'chunks:///Factory/MaterialFactory.js');
  r('project:///assets/Scripts/GameLoad/LoadMaterialCommand.js', 'chunks:///GameLoad/LoadMaterialCommand.js');
  r('project:///assets/Scripts/Factory/PrefabFactory.js', 'chunks:///Factory/PrefabFactory.js');
  r('project:///assets/Scripts/GameLoad/LoadPrefabCommand.js', 'chunks:///GameLoad/LoadPrefabCommand.js');
  r('project:///assets/Scripts/GameLoad/InitialCommand.js', 'chunks:///GameLoad/InitialCommand.js');
  r('project:///assets/Scripts/GameLoad/StartupCommand.js', 'chunks:///GameLoad/StartupCommand.js');
  r('project:///assets/Scripts/GameLoad/InitialFacade.js', 'chunks:///GameLoad/InitialFacade.js');
  r('project:///assets/Scripts/Manager/ResourceController.js', 'chunks:///Manager/ResourceController.js');
  r('project:///assets/Scripts/App/App.js', 'chunks:///App/App.js');
  r('project:///assets/Scripts/table.js', 'chunks:///table.js');
  r('project:///assets/Scripts/GamePlay/Model/BallModel.js', 'chunks:///GamePlay/Model/BallModel.js');
  r('project:///assets/Scripts/Common/View/BaseView.js', 'chunks:///Common/View/BaseView.js');
  r('project:///assets/Scripts/GamePlay/UI/PointTouchView.js', 'chunks:///GamePlay/UI/PointTouchView.js');
  r('project:///assets/Scripts/GamePlay/UI/HitPointLayer.js', 'chunks:///GamePlay/UI/HitPointLayer.js');
  r('project:///assets/Scripts/GamePlay/UI/MainUI.js', 'chunks:///GamePlay/UI/MainUI.js');
  r('project:///assets/Scripts/GamePlay/UI/PoleTouchView.js', 'chunks:///GamePlay/UI/PoleTouchView.js');
  r('project:///assets/Scripts/GamePlay/GameObject/Pole.js', 'chunks:///GamePlay/GameObject/Pole.js');
  r('project:///assets/Scripts/GamePlay/GameObject/BallRoot.js', 'chunks:///GamePlay/GameObject/BallRoot.js');
  r('project:///assets/Scripts/GamePlay/Physics/BorderCollider.js', 'chunks:///GamePlay/Physics/BorderCollider.js');
  r('project:///assets/Scripts/Common/View/SpriteUIAnimation.js', 'chunks:///Common/View/SpriteUIAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/HeartBonusAnimation.js', 'chunks:///GamePlay/Animation/HeartBonusAnimation.js');
  r('project:///assets/Scripts/GamePlay/UI/ScoreScaleRoot.js', 'chunks:///GamePlay/UI/ScoreScaleRoot.js');
  r('project:///assets/Scripts/GamePlay/GameLogic.js', 'chunks:///GamePlay/GameLogic.js');
  r('project:///assets/Scripts/GamePlay/GameObject/PrefabView.js', 'chunks:///GamePlay/GameObject/PrefabView.js');
  r('project:///assets/Scripts/GamePlay/GameObject/BallObject.js', 'chunks:///GamePlay/GameObject/BallObject.js');
  r('project:///assets/Scripts/Manager/AudioManager.js', 'chunks:///Manager/AudioManager.js');
  r('project:///assets/Scripts/Manager/AdController.js', 'chunks:///Manager/AdController.js');
  r('project:///assets/Scripts/Ad/AdLayer.js', 'chunks:///Ad/AdLayer.js');
  r('project:///assets/Scripts/Ad/FlyAdCnicornAnimation.js', 'chunks:///Ad/FlyAdCnicornAnimation.js');
  r('project:///assets/Scripts/Ad/WildAdAnimation.js', 'chunks:///Ad/WildAdAnimation.js');
  r('project:///assets/Scripts/Ad/WildAdButton.js', 'chunks:///Ad/WildAdButton.js');
  r('project:///assets/Scripts/App/VersionLabel.js', 'chunks:///App/VersionLabel.js');
  r('project:///assets/Scripts/Common/Camera/CameraAdaption.js', 'chunks:///Common/Camera/CameraAdaption.js');
  r('project:///assets/Scripts/Common/Time.js', 'chunks:///Common/Time.js');
  r('project:///assets/Scripts/Common/View/BaseMediator.js', 'chunks:///Common/View/BaseMediator.js');
  r('project:///assets/Scripts/Common/View/SingleTouchMediator.js', 'chunks:///Common/View/SingleTouchMediator.js');
  r('project:///assets/Scripts/Common/View/GlobalSingleTouch/GlobalSingleTouchMediator.js', 'chunks:///Common/View/GlobalSingleTouch/GlobalSingleTouchMediator.js');
  r('project:///assets/Scripts/Common/View/GlobalSingleTouch/GlobalSingleTouchView.js', 'chunks:///Common/View/GlobalSingleTouch/GlobalSingleTouchView.js');
  r('project:///assets/Scripts/Common/View/SingleTouchView.js', 'chunks:///Common/View/SingleTouchView.js');
  r('project:///assets/Scripts/Common/View/Transform/EaseBaseView.js', 'chunks:///Common/View/Transform/EaseBaseView.js');
  r('project:///assets/Scripts/Common/View/Transform/PositionView.js', 'chunks:///Common/View/Transform/PositionView.js');
  r('project:///assets/Scripts/Common/View/Transform/RotationView.js', 'chunks:///Common/View/Transform/RotationView.js');
  r('project:///assets/Scripts/Common/View/UI/AdaptationWigetView.js', 'chunks:///Common/View/UI/AdaptationWigetView.js');
  r('project:///assets/Scripts/Common/View/UI/HelpLayerMediator.js', 'chunks:///Common/View/UI/HelpLayerMediator.js');
  r('project:///assets/Scripts/Common/View/UI/HelpLayerView.js', 'chunks:///Common/View/UI/HelpLayerView.js');
  r('project:///assets/Scripts/Common/View/UI/HelpTextView.js', 'chunks:///Common/View/UI/HelpTextView.js');
  r('project:///assets/Scripts/Common/View/UI/LoadingAnimation.js', 'chunks:///Common/View/UI/LoadingAnimation.js');
  r('project:///assets/Scripts/Common/View/UI/LoadingViewMediator.js', 'chunks:///Common/View/UI/LoadingViewMediator.js');
  r('project:///assets/Scripts/Common/View/UI/LoadingView.js', 'chunks:///Common/View/UI/LoadingView.js');
  r('project:///assets/Scripts/Common/View/UI/NumberChangedView.js', 'chunks:///Common/View/UI/NumberChangedView.js');
  r('project:///assets/Scripts/Common/View/UI/SliderView.js', 'chunks:///Common/View/UI/SliderView.js');
  r('project:///assets/Scripts/Common/View/UI/ThemeView.js', 'chunks:///Common/View/UI/ThemeView.js');
  r('project:///assets/Scripts/Common/View/UI/TimeEffectAnimation.js', 'chunks:///Common/View/UI/TimeEffectAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/AddHeartAnimation.js', 'chunks:///GamePlay/Animation/AddHeartAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/DropPocketAnimation.js', 'chunks:///GamePlay/Animation/DropPocketAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/FireWorkAnimation.js', 'chunks:///GamePlay/Animation/FireWorkAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/HeartBlingAnimation.js', 'chunks:///GamePlay/Animation/HeartBlingAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/HeartBrokenAnimation.js', 'chunks:///GamePlay/Animation/HeartBrokenAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/HeartIdleAnimation.js', 'chunks:///GamePlay/Animation/HeartIdleAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/ResultAnimation.js', 'chunks:///GamePlay/Animation/ResultAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/TrickShotLightAnimation.js', 'chunks:///GamePlay/Animation/TrickShotLightAnimation.js');
  r('project:///assets/Scripts/GamePlay/Animation/WhiteDropAnimation.js', 'chunks:///GamePlay/Animation/WhiteDropAnimation.js');
  r('project:///assets/Scripts/GamePlay/GameObject/3DRootAdaption.js', 'chunks:///GamePlay/GameObject/3DRootAdaption.js');
  r('project:///assets/Scripts/GamePlay/GameObject/ColliderRoot.js', 'chunks:///GamePlay/GameObject/ColliderRoot.js');
  r('project:///assets/Scripts/GamePlay/GameObject/TablePlane.js', 'chunks:///GamePlay/GameObject/TablePlane.js');
  r('project:///assets/Scripts/GamePlay/GameObject/WhiteBall.js', 'chunks:///GamePlay/GameObject/WhiteBall.js');
  r('project:///assets/Scripts/GamePlay/Model/GridUtil.js', 'chunks:///GamePlay/Model/GridUtil.js');
  r('project:///assets/Scripts/GamePlay/Signal.js', 'chunks:///GamePlay/Signal.js');
  r('project:///assets/Scripts/GamePlay/UI/CompleteView.js', 'chunks:///GamePlay/UI/CompleteView.js');
  r('project:///assets/Scripts/GamePlay/UI/HeartCountLabel.js', 'chunks:///GamePlay/UI/HeartCountLabel.js');
  r('project:///assets/Scripts/GamePlay/UI/HelpButtonView.js', 'chunks:///GamePlay/UI/HelpButtonView.js');
  r('project:///assets/Scripts/GamePlay/UI/HoleEffectRoot.js', 'chunks:///GamePlay/UI/HoleEffectRoot.js');
  r('project:///assets/Scripts/GamePlay/UI/LineScaleView.js', 'chunks:///GamePlay/UI/LineScaleView.js');
  r('project:///assets/Scripts/GamePlay/UI/MenuButtonView.js', 'chunks:///GamePlay/UI/MenuButtonView.js');
  r('project:///assets/Scripts/GamePlay/UI/MenuLayerView.js', 'chunks:///GamePlay/UI/MenuLayerView.js');
  r('project:///assets/Scripts/GamePlay/UI/NoBustView.js', 'chunks:///GamePlay/UI/NoBustView.js');
  r('project:///assets/Scripts/GamePlay/UI/PocketEffectRoot.js', 'chunks:///GamePlay/UI/PocketEffectRoot.js');
  r('project:///assets/Scripts/GamePlay/UI/PointBallButtonView.js', 'chunks:///GamePlay/UI/PointBallButtonView.js');
  r('project:///assets/Scripts/GamePlay/UI/ResultLayerView.js', 'chunks:///GamePlay/UI/ResultLayerView.js');
  r('project:///assets/Scripts/GamePlay/UI/ScoreLabelView.js', 'chunks:///GamePlay/UI/ScoreLabelView.js');
  r('project:///assets/Scripts/GamePlay/UI/SoundButtonView.js', 'chunks:///GamePlay/UI/SoundButtonView.js');
  r('project:///assets/Scripts/GamePlay/UI/TimeLabelView.js', 'chunks:///GamePlay/UI/TimeLabelView.js');
  r('project:///assets/Scripts/GamePlay/UI/WhiteShotLine.js', 'chunks:///GamePlay/UI/WhiteShotLine.js');
  r('project:///assets/Scripts/Test/TestLabelView.js', 'chunks:///Test/TestLabelView.js');
  r('project:///assets/Scripts/Test/TestSprite.js', 'chunks:///Test/TestSprite.js');
  r('project:///assets/Scripts/Test/TestView.js', 'chunks:///Test/TestView.js');
  r('virtual:///prerequisite-imports:main', 'chunks:///_virtual/prerequisite-imports:main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    var _m;
    return {
        setters: [function(m) { _m = m; }],
        execute: function () { _export(_m); }
    };
    });
});
} }; });