System.register("chunks:///_virtual/WhiteDropAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "0227cNe965A4Y/BbLei6G7o", "WhiteDropAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WhiteDropAnimation = exports('WhiteDropAnimation', (_dec = ccclass("WhiteDropAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(WhiteDropAnimation, _SpriteUIAnimation);

        function WhiteDropAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = WhiteDropAnimation.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          // Your initialization goes here.
          this.Interval = 0.08;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return WhiteDropAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameLogic.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './ToSingleTon.ts', './Signal2.ts', './Signal3.ts', './Random.ts', './Cocos.ts', './PlayModel.ts', './GameStateController.ts', './TableManager.ts', './CelerSDK.ts', './HashMap.ts', './table.ts', './TutorialRotation.ts', './BorderCollider.ts', './BallModel.ts', './BallRoot.ts', './AudioManager.ts', './App.ts', './ScoreScaleRoot.ts', './TutorialLayerView.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, _assertThisInitialized, cclegacy, v3, math, Vec3, SphereCollider, GetTotalHeartCount, HoleBonus, GetScoreByType, ScoreType, StreakBonusLimit, SingleTon, BaseSignal, GameReadySignal, ShotSignal, GameOverSignal, Random, disOrderArray, PlayModel, GameStateController, RoundEndType, TableManager, CelerSDK, HashMap, Balls_ID, Level_IsRandom, TutorialStep, HoleName, BallModel, BallRoot, AudioController, App, ScoreScaleRoot, Black8Pos, Yellow9Pos, Pink12Pos;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      math = module.math;
      Vec3 = module.Vec3;
      SphereCollider = module.SphereCollider;
    }, function (module) {
      GetTotalHeartCount = module.GetTotalHeartCount;
      HoleBonus = module.HoleBonus;
      GetScoreByType = module.GetScoreByType;
      ScoreType = module.ScoreType;
      StreakBonusLimit = module.StreakBonusLimit;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      GameReadySignal = module.GameReadySignal;
      ShotSignal = module.ShotSignal;
      GameOverSignal = module.GameOverSignal;
    }, function (module) {
      Random = module.Random;
    }, function (module) {
      disOrderArray = module.disOrderArray;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      GameStateController = module.GameStateController;
      RoundEndType = module.RoundEndType;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      CelerSDK = module.CelerSDK;
    }, function (module) {
      HashMap = module.HashMap;
    }, function (module) {
      Balls_ID = module.Balls_ID;
      Level_IsRandom = module.Level_IsRandom;
    }, function (module) {
      TutorialStep = module.TutorialStep;
    }, function (module) {
      HoleName = module.HoleName;
    }, function (module) {
      BallModel = module.BallModel;
    }, function (module) {
      BallRoot = module.BallRoot;
    }, function (module) {
      AudioController = module.AudioController;
    }, function (module) {
      App = module.App;
    }, function (module) {
      ScoreScaleRoot = module.ScoreScaleRoot;
    }, function (module) {
      Black8Pos = module.Black8Pos;
      Yellow9Pos = module.Yellow9Pos;
      Pink12Pos = module.Pink12Pos;
    }],
    execute: function () {
      exports('ShotType', void 0);

      cclegacy._RF.push({}, "030273ugmVLtoTCNGMagCm4", "GameLogic", undefined);
      /** 下一轮 */


      var NextRountSignal = exports('NextRountSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(NextRountSignal, _BaseSignal);

        function NextRountSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return NextRountSignal;
      }(BaseSignal));
      /** 准备下一轮 */

      var ReadyNextRoundSignal = exports('ReadyNextRoundSignal', /*#__PURE__*/function (_BaseSignal2) {
        _inheritsLoose(ReadyNextRoundSignal, _BaseSignal2);

        function ReadyNextRoundSignal() {
          return _BaseSignal2.apply(this, arguments) || this;
        }

        return ReadyNextRoundSignal;
      }(BaseSignal));
      /** 初始化球杆旋转 */

      var PoleRotationInitSignal = exports('PoleRotationInitSignal', /*#__PURE__*/function (_BaseSignal3) {
        _inheritsLoose(PoleRotationInitSignal, _BaseSignal3);

        function PoleRotationInitSignal() {
          return _BaseSignal3.apply(this, arguments) || this;
        }

        return PoleRotationInitSignal;
      }(BaseSignal));
      /** 白球重新归位 */

      var WhiteBallReposSignal = exports('WhiteBallReposSignal', /*#__PURE__*/function (_BaseSignal4) {
        _inheritsLoose(WhiteBallReposSignal, _BaseSignal4);

        function WhiteBallReposSignal() {
          return _BaseSignal4.apply(this, arguments) || this;
        }

        return WhiteBallReposSignal;
      }(BaseSignal));
      /** 球入袋 */

      var BallDropSignal = exports('BallDropSignal', /*#__PURE__*/function (_BaseSignal5) {
        _inheritsLoose(BallDropSignal, _BaseSignal5);

        function BallDropSignal() {
          return _BaseSignal5.apply(this, arguments) || this;
        }

        return BallDropSignal;
      }(BaseSignal));
      /** 入袋加成初始化 */

      var HoleBonusInitSignal = exports('HoleBonusInitSignal', /*#__PURE__*/function (_BaseSignal6) {
        _inheritsLoose(HoleBonusInitSignal, _BaseSignal6);

        function HoleBonusInitSignal() {
          return _BaseSignal6.apply(this, arguments) || this;
        }

        return HoleBonusInitSignal;
      }(BaseSignal));
      /** 红心数量变化 */

      var UpdateHeartCountSignal = exports('UpdateHeartCountSignal', /*#__PURE__*/function (_BaseSignal7) {
        _inheritsLoose(UpdateHeartCountSignal, _BaseSignal7);

        function UpdateHeartCountSignal() {
          return _BaseSignal7.apply(this, arguments) || this;
        }

        return UpdateHeartCountSignal;
      }(BaseSignal));
      /** 入袋 */

      var DropPocketSignal = exports('DropPocketSignal', /*#__PURE__*/function (_BaseSignal8) {
        _inheritsLoose(DropPocketSignal, _BaseSignal8);

        function DropPocketSignal() {
          return _BaseSignal8.apply(this, arguments) || this;
        }

        return DropPocketSignal;
      }(BaseSignal));
      /** 刷新红心奖励 */

      var RefreshHeartBonusSignal = exports('RefreshHeartBonusSignal', /*#__PURE__*/function (_BaseSignal9) {
        _inheritsLoose(RefreshHeartBonusSignal, _BaseSignal9);

        function RefreshHeartBonusSignal() {
          return _BaseSignal9.apply(this, arguments) || this;
        }

        return RefreshHeartBonusSignal;
      }(BaseSignal));
      /** 入袋并得分 */

      var PocketScoredSignal = exports('PocketScoredSignal', /*#__PURE__*/function (_BaseSignal10) {
        _inheritsLoose(PocketScoredSignal, _BaseSignal10);

        function PocketScoredSignal() {
          return _BaseSignal10.apply(this, arguments) || this;
        }

        return PocketScoredSignal;
      }(BaseSignal));
      /**  新手指引步数更新 */

      var TutorialStepSignal = exports('TutorialStepSignal', /*#__PURE__*/function (_BaseSignal11) {
        _inheritsLoose(TutorialStepSignal, _BaseSignal11);

        function TutorialStepSignal() {
          return _BaseSignal11.apply(this, arguments) || this;
        }

        return TutorialStepSignal;
      }(BaseSignal));
      /** 球重新回到起始位置 */

      var BallReturnSignal = exports('BallReturnSignal', /*#__PURE__*/function (_BaseSignal12) {
        _inheritsLoose(BallReturnSignal, _BaseSignal12);

        function BallReturnSignal() {
          return _BaseSignal12.apply(this, arguments) || this;
        }

        return BallReturnSignal;
      }(BaseSignal));
      var SyncShotLineSignal = exports('SyncShotLineSignal', /*#__PURE__*/function (_BaseSignal13) {
        _inheritsLoose(SyncShotLineSignal, _BaseSignal13);

        function SyncShotLineSignal() {
          return _BaseSignal13.apply(this, arguments) || this;
        }

        return SyncShotLineSignal;
      }(BaseSignal));
      var BallInitSignal = exports('BallInitSignal', /*#__PURE__*/function (_BaseSignal14) {
        _inheritsLoose(BallInitSignal, _BaseSignal14);

        function BallInitSignal() {
          return _BaseSignal14.apply(this, arguments) || this;
        }

        return BallInitSignal;
      }(BaseSignal));
      var UpdateStreakSignal = exports('UpdateStreakSignal', /*#__PURE__*/function (_BaseSignal15) {
        _inheritsLoose(UpdateStreakSignal, _BaseSignal15);

        function UpdateStreakSignal() {
          return _BaseSignal15.apply(this, arguments) || this;
        }

        return UpdateStreakSignal;
      }(BaseSignal));
      var ShotType;

      (function (ShotType) {
        ShotType[ShotType["TrickShot"] = 0] = "TrickShot";
        ShotType[ShotType["NormalShot"] = 1] = "NormalShot";
        ShotType[ShotType["NoScore"] = 2] = "NoScore";
      })(ShotType || (ShotType = exports('ShotType', {})));

      var GameLogic = exports('GameLogic', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(GameLogic, _SingleTon);

        var _proto = GameLogic.prototype;

        _proto.clear = function clear() {
          this.noBust = true;
          this.scaleMap = {};
          this.sleepCount = 0;
          this.totalCheckCount = 0;
          this.shotCount = 0;
          this.HeartCount = GetTotalHeartCount();
          this.scoreType = ShotType.NoScore;
          this.streak = 0;
          this.whiteBall = null;
          PlayModel.inst.clearScore();
        };

        function GameLogic() {
          var _this;

          _this = _SingleTon.call(this) || this;
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
          _this.isOnTutorial = false;
          _this.tutorialStep = null;
          _this.scaleMap = {};
          _this.currentLevel = null;
          _this.noNeed = false;
          ShotSignal.inst.addListener(_this.ballShot, _assertThisInitialized(_this));
          GameOverSignal.inst.addListener(function () {
            if (PlayModel.inst.getScoreByType(ScoreType.Pocket) <= 0) return;
            /** 剩余爱心分数 */

            if (_this.heartCount > 0) {
              AudioController.inst.playEffect("heart_bonus");
              PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.HeartBonus, _this.heartCount), ScoreType.HeartBonus, App.HeartIcon);
            }
            /** nobust 分数 */


            if (_this.noBust) {
              PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.NoBust), ScoreType.NoBust, null, 100);
            }
          }, _assertThisInitialized(_this));
          return _this;
        }
        /** combo之后会随机 ♥ 的奖励 */


        _proto.streakBonus = function streakBonus() {
          if (this.isOnTutorial) return;
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
        };

        _proto.resetWhiteBall = function resetWhiteBall(callback) {
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

          WhiteBallReposSignal.inst.dispatch(position, callback);
        };

        _proto.ballDrop = function ballDrop(model, pocket) {
          var _this3 = this;

          console.log("球：", model.Point, " 入袋:", pocket, HoleName[pocket], ", bonus:", this.holeBonus[pocket].bonusStr, ",是否加心：", this.holeBonus[pocket].isHeart);

          if (model.isWhiteBall) {
            this.resetWhiteBall(function () {
              _this3.ballSleep(model);
            });
            this.HeartCount--;
          } else {
            this.BallCombo++;
            var node = ScoreScaleRoot.Node.getChildByName(HoleName[pocket]);
            this.scoreType = ShotType.NormalShot;
            this.scaleMap[model.Point] = this.holeBonus[pocket].bonusStr;
            PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.Pocket, model.Point) * this.holeBonus[pocket].bonus, ScoreType.Pocket, node);
            var delayStep = 600;
            var delay = delayStep;
            /** 反弹 */

            if (model.hitBorderCount > 0 || this.whiteBall.hitBorderCount > 0) {
              PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.Rebound), ScoreType.Rebound, node, delay);
              delay += delayStep;
              this.scoreType = ShotType.TrickShot;
              console.log(" 反弹：", model.hitBorderCount, ", white:", this.whiteBall.hitBorderCount);
            }
            /** 一杆多进 */


            if (this.ballCombo > 1) {
              PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.Multip, this.ballCombo), ScoreType.Multip, node, delay);
              delay += delayStep;
              this.scoreType = ShotType.TrickShot;
              console.log(" 一杆多进");
            }
            /** 没有直接碰到白球 传递击球 */


            if (model.isHitWhite == false) {
              PlayModel.inst.addPlayerScore(GetScoreByType(ScoreType.Link), ScoreType.Link, node, delay);
              delay += delayStep;
              this.scoreType = ShotType.TrickShot;
              console.log(" 传递击球");
            }

            if (this.holeBonus[pocket].isHeart) {
              this.HeartCount++;
              this.holeBonus[pocket].isHeart = false;
            }

            this.balls.remove(model.ID);
            model.removeSelf();

            if (this.balls.length <= 1 && this.isOnTutorial == false) {
              GameStateController.inst.roundEnd(RoundEndType.Complete);
            }

            PocketScoredSignal.inst.dispatch(this.scoreType, HoleName[pocket]);
          }

          BallDropSignal.inst.dispatch(model, pocket);
          DropPocketSignal.inst.dispatch(HoleName[pocket]);

          if (model.isWhiteBall == false) {
            this.ballSleep(model);
          }
        };

        _proto.ballShot = function ballShot() {
          this.sleepCount = 0;
          this.totalCheckCount = 0;
          this.shotCount++;
          this.scoreType = ShotType.NoScore;
          this.BallCombo = 0;
        };

        _proto.ballSleep = function ballSleep(model) {
          this.sleepCount++;
          console.log("ball:", model.Material, "sleep,  count:", this.sleepCount, ", total:", this.totalCheckCount);
          if (GameStateController.inst.isGameOver()) return;

          if (this.sleepCount == this.totalCheckCount && GameStateController.inst.isPause()) {
            this.overThisRound();
          }
        };

        _proto.overThisRound = function overThisRound() {
          if (this.scoreType == ShotType.NoScore && this.shotCount > 1) {
            this.HeartCount--;
          }

          var loopCount = this.scoreType == ShotType.NoScore && this.shotCount > 1 ? 0 : 1;

          if ((this.balls.length <= 3 || this.scoreType == ShotType.TrickShot) && this.scoreType != ShotType.NoScore && this.isOnTutorial == false) {
            loopCount = 3;
          }

          if ((this.scoreType != ShotType.NoScore || this.shotCount == 1) && !this.isOnTutorial) {
            for (var i = 0; i < loopCount; i++) {
              this.clockwiseHoleBonus();
            }
          }

          console.log(" rotation loop count:", loopCount, ", ShotType:", ShotType[this.scoreType]);
          ReadyNextRoundSignal.inst.dispatch(this.shotCount, loopCount);

          if (this.scoreType != ShotType.NoScore) {
            this.Streak++;
          } else {
            this.Streak--;
          }

          if (this.isOnTutorial) {
            if (this.scoreType == ShotType.NoScore) {
              this.TutorialStep = TutorialStep.Suspend;
            } else {
              this.TutorialStep++;
            }
          }
        };

        _proto.ballMove = function ballMove(model) {
          this.totalCheckCount++;
          console.log(" ball:", model.Material, " moved, total:", this.totalCheckCount);
        };

        _proto.initLevel = function initLevel() {
          /** 初始化 心 */
          this.HeartCount = GetTotalHeartCount();
          this.balls.clear();
          /** 随机一下对应关卡 */

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

          this.currentLevel = randomLevels[Random.randomFloorToInt(0, randomLevels.length)];
          /** 初始化白球会同时初始化球杆 */

          this.whiteBallPosition = v3(this.currentLevel.X[0], this.currentLevel.Y[0], this.currentLevel.Z[0]);
        };

        _proto.gameReady = function gameReady() {
          GameReadySignal.inst.dispatch();
        };

        _proto.initTutorialBallStep1 = function initTutorialBallStep1() {
          var _this4 = this;

          PoleRotationInitSignal.inst.dispatch(0);

          if (this.whiteBall == null) {
            BallInitSignal.inst.dispatch();
            var whiteBall = TableManager.inst.getBalls(Balls_ID.BaiQiu);
            this.whiteBall = new BallModel(Balls_ID.BaiQiu, whiteBall.Material, whiteBall.Number, v3(this.currentLevel.X[0], this.currentLevel.Y[0], this.currentLevel.Z[0]));
            var blackBall = TableManager.inst.getBalls(Balls_ID.HeiQiu);
            var ballModel = new BallModel(Balls_ID.HeiQiu, blackBall.Material, blackBall.Number, Black8Pos);
            this.balls.add(ballModel.ID, ballModel);
            this.balls.add(this.whiteBall.ID, this.whiteBall);
          } else {
            BallReturnSignal.inst.dispatch(function () {
              _this4.TutorialStep = TutorialStep.RotatePole;
              NextRountSignal.inst.dispatch();
              SyncShotLineSignal.inst.dispatch();
              BallInitSignal.inst.dispatch();
            });
          }
        };

        _proto.initTutorialBallStep2 = function initTutorialBallStep2() {
          var _this5 = this;

          if (this.noNeed) return;
          PoleRotationInitSignal.inst.dispatch(0);
          BallReturnSignal.inst.dispatch(function () {
            if (_this5.TutorialStep == TutorialStep.Suspend) {
              _this5.noNeed = true;
              _this5.TutorialStep = TutorialStep.MiniRotatePole;
            }

            NextRountSignal.inst.dispatch();
            SyncShotLineSignal.inst.dispatch;
          });
          if (this.balls.length >= 3) return;
          var yellowBall = TableManager.inst.getBalls(Balls_ID.HuangQiu);
          var ballModel1 = new BallModel(Balls_ID.HuangQiu, yellowBall.Material, yellowBall.Number, Yellow9Pos);
          this.balls.add(ballModel1.ID, ballModel1);
          var pinkBall = TableManager.inst.getBalls(Balls_ID.DanZiQiu);
          var ballModel2 = new BallModel(Balls_ID.DanZiQiu, pinkBall.Material, pinkBall.Number, Pink12Pos);
          this.balls.add(ballModel2.ID, ballModel2);
          BallInitSignal.inst.dispatch();
        };

        _proto.initBalls = function initBalls() {
          this.balls.forEach(function (key, model) {
            model.removeSelf();
          });
          this.balls.clear();
          this.whiteBall = null;
          var randomOffset = Random.getRandom(this.currentLevel.Min, this.currentLevel.Max);
          console.log("randomOffset:", randomOffset);
          /** 初始化球 */

          var balls = this.currentLevel.Balls.slice(1); // balls = [balls[Random.randomFloorToInt(0, balls.length)]];
          // for (let ball of balls) {
          //   if (ball == Balls_ID.ZiQiu) {
          //     balls = [ball];
          //     break;
          //   }
          // }

          var firstPosition = null;

          if (this.currentLevel.IsRandom == Level_IsRandom.Shi) {
            disOrderArray(balls);
          }

          for (var i = 0; i < balls.length; i++) {
            var ball = TableManager.inst.getBalls(balls[i]);

            var _ballModel = new BallModel(balls[i], ball.Material, ball.Number, v3(this.currentLevel.X[i + 1] + randomOffset, this.currentLevel.Y[i + 1], this.currentLevel.Z[i + 1]));

            if (firstPosition == null) {
              firstPosition = v3(this.currentLevel.X[i + 1] + randomOffset, 0, this.currentLevel.Z[i + 1]);
            } else {
              if (this.currentLevel.Z[i + 1] > firstPosition.z) {
                firstPosition = v3(this.currentLevel.X[i + 1] + randomOffset, 0, this.currentLevel.Z[i + 1]);
              }
            }

            this.balls.add(_ballModel.ID, _ballModel);
          }

          firstPosition = firstPosition.subtract(v3(this.currentLevel.X[0], 0, this.currentLevel.Z[0]));
          randomOffset == 0 ? randomOffset = 1 : randomOffset = randomOffset;
          var degree = -(math.toDegree(Vec3.angle(firstPosition, v3(0, 0, -1))) * Math.abs(randomOffset)) / randomOffset;
          PoleRotationInitSignal.inst.dispatch(degree);
          var whiteBall = TableManager.inst.getBalls(Balls_ID.BaiQiu);
          var ballModel = new BallModel(Balls_ID.BaiQiu, whiteBall.Material, whiteBall.Number, v3(this.currentLevel.X[0], this.currentLevel.Y[0], this.currentLevel.Z[0]));
          this.whiteBall = ballModel;
          this.balls.add(ballModel.ID, ballModel);
          BallInitSignal.inst.dispatch();
        };

        _proto.initHoleBonus = function initHoleBonus() {
          var pos = ScoreScaleRoot.Clockwise.concat();
          this.holeBonus.length = 0;

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
        };

        _proto.clockwiseHoleBonus = function clockwiseHoleBonus() {
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
        };

        _createClass(GameLogic, [{
          key: "TutorialStep",
          get:
          /** 进入休眠的球数 */

          /** 需要等待休眠的球数 */

          /**  白球的初始化位置 */

          /** 洞的分数加成 */

          /** 出杆的次数 */

          /** 爱心数 */

          /** 得分的类型 */

          /** combo */

          /** 本轮进球数 */

          /** 记录每个球入洞时的倍数 */
          function get() {
            return this.tutorialStep;
          },
          set: function set(step) {
            if (step == TutorialStep.Suspend) {
              this.noNeed = false;

              switch (this.tutorialStep) {
                case TutorialStep.Ready:
                  break;

                case TutorialStep.RotatePole:
                  break;

                /** 击球失败，重新来 */

                case TutorialStep.Shot:
                  this.initTutorialBallStep1();
                  break;

                case TutorialStep.MiniRotatePole:
                  break;

                /** 击球失败，重新来 */

                case TutorialStep.TrickShot:
                  this.initTutorialBallStep2();
                  break;

                case TutorialStep.Complete:
                  break;
              }
            }

            this.tutorialStep = step;

            switch (step) {
              case TutorialStep.Ready:
                this.initTutorialBallStep1();
                break;

              case TutorialStep.RotatePole:
                break;

              case TutorialStep.Shot:
                break;

              case TutorialStep.MiniRotatePole:
                this.initTutorialBallStep2();
                break;

              case TutorialStep.TrickShot:
                break;

              case TutorialStep.Complete:
                break;
            }

            TutorialStepSignal.inst.dispatch(this.tutorialStep);
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
              if (this.isOnTutorial) {
                this.HeartCount = GetTotalHeartCount();
              } else {
                GameStateController.inst.roundEnd(RoundEndType.OutOfMove);
              }
            }
          }
        }, {
          key: "BallCombo",
          get: function get() {
            return this.ballCombo;
          },
          set: function set(val) {
            this.ballCombo = val;
            UpdateStreakSignal.inst.dispatch(this.ballCombo);
          }
        }, {
          key: "Streak",
          get: function get() {
            return this.streak;
          },
          set: function set(val) {
            this.streak = val;
            this.streak = Math.max(0, this.streak);

            if (this.streak >= StreakBonusLimit()) {
              this.streak = 0;
              this.streakBonus();
            }
          }
        }]);

        return GameLogic;
      }(SingleTon()));
      CC_DEBUG && (window["Logic"] = GameLogic.inst);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Signal.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0625f/72GNE+7Axsqw7trNs", "Signal", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadAudioCommand.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SimpleCommand.ts', './AudioManager.ts', './InitialFacade.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, SimpleCommand, AudioController, InitialFacade, STEP;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SimpleCommand = module.SimpleCommand;
    }, function (module) {
      AudioController = module.AudioController;
    }, function (module) {
      InitialFacade = module.InitialFacade;
      STEP = module.STEP;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06a548MnE5Dz4dpDON+EArR", "LoadAudioCommand", undefined);

      var LoadAudioCommand = exports('LoadAudioCommand', /*#__PURE__*/function (_SimpleCommand) {
        _inheritsLoose(LoadAudioCommand, _SimpleCommand);

        function LoadAudioCommand() {
          return _SimpleCommand.apply(this, arguments) || this;
        }

        var _proto = LoadAudioCommand.prototype;

        _proto.excute = function excute() {
          InitialFacade.inst.startStep(STEP.Audio);
          AudioController.inst.init(function () {
            InitialFacade.inst.step(STEP.Audio);
          });
        };

        return LoadAudioCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HoleEffectRoot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './WhiteDropAnimation.ts', './BorderCollider.ts', './GameLogic.ts', './DropPocketAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, Component, WhiteDropAnimation, HoleName, PocketScoredSignal, BallDropSignal, DropPocketAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      WhiteDropAnimation = module.WhiteDropAnimation;
    }, function (module) {
      HoleName = module.HoleName;
    }, function (module) {
      PocketScoredSignal = module.PocketScoredSignal;
      BallDropSignal = module.BallDropSignal;
    }, function (module) {
      DropPocketAnimation = module.DropPocketAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "08306qfvqxBYrKKslgxIzZQ", "HoleEffectRoot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HoleEffectRoot = exports('HoleEffectRoot', (_dec = ccclass("HoleEffectRoot"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HoleEffectRoot, _Component);

        function HoleEffectRoot() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = HoleEffectRoot.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          var _this = this; // Your initialization goes here.


          for (var _iterator = _createForOfIteratorHelperLoose(this.node.children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.active = false;
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
        };

        _proto.onPocketScored = function onPocketScored(type, name) {
          var child = this.node.getChildByName(name);

          if (child) {
            child.active = true;
            child.getComponent(DropPocketAnimation).play();
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return HoleEffectRoot;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PointTouchView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts', './Signal3.ts', './GameStateController.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Node, Component, BaseSignal, ButtonClickSignal, GameStateController;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      ButtonClickSignal = module.ButtonClickSignal;
    }, function (module) {
      GameStateController = module.GameStateController;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "11a7cECazxDMJqSf5K3w0pA", "PointTouchView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /** 打开击球点界面 */

      var PointTouchSignal = exports('PointTouchSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(PointTouchSignal, _BaseSignal);

        function PointTouchSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return PointTouchSignal;
      }(BaseSignal));
      var PointTouchView = exports('PointTouchView', (_dec = ccclass("PointTouchView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PointTouchView, _Component);

        function PointTouchView() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = PointTouchView.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          // Your initialization goes here.
          this.node.on(Node.EventType.TOUCH_END, function () {
            ButtonClickSignal.inst.dispatch();
            if (!GameStateController.inst.canInteractive()) return;
            PointTouchSignal.inst.dispatch();
          }, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return PointTouchView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VersionLabel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, UIOpacity, Label, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "12b96U7ryRFsJTN1NVKLFcy", "VersionLabel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var VersionLabel = exports('VersionLabel', (_dec = ccclass("VersionLabel"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VersionLabel, _Component);

        function VersionLabel() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = VersionLabel.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          if (CC_PREVIEW) {
            window["DEBUG_VERSION"] = "test 6.0.0";
          }

          this.getComponent(UIOpacity).opacity = 100;
          this.getComponent(Label).string = window["GAME_VERSION"] && window["GAME_VERSION"].split("version") && window["GAME_VERSION"].split("version")[1] ? window["GAME_VERSION"].split("version")[1].replace(":", "") : window["DEBUG_VERSION"];
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return VersionLabel;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Turn8.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, ReadyNextRoundSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ReadyNextRoundSignal = module.ReadyNextRoundSignal;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "13083QU8AdK55ru7qbavGga", "Turn8", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Turn8 = exports('Turn8', (_dec = ccclass("Turn8"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Turn8, _Component);

        function Turn8() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Turn8.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          // Your initialization goes here.
          this.node.active = false;
          ReadyNextRoundSignal.inst.addListener(this.onReadyNextRound, this);
          this.node.setRotationFromEuler(0, 0, 0);
        };

        _proto.onReadyNextRound = function onReadyNextRound(shotCount, loopCount) {
          return;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return Turn8;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Signal2.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ToSingleTon.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, SingleTon;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SingleTon = module.SingleTon;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1c0c4SIiTBHObK+m4/fv7/j", "Signal", undefined);

      var BaseSignal = exports('BaseSignal', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(BaseSignal, _SingleTon);

        function BaseSignal() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this.listenerMap = [];
          _this.onceListenerMap = [];
          return _this;
        }

        var _proto = BaseSignal.prototype;

        _proto.doDispatch = function doDispatch() {
          this.excuteListener.apply(this, arguments);
          this.excuteOnce.apply(this, arguments);
        };

        _proto.excuteListener = function excuteListener() {
          if (this.listenerMap && this.listenerMap.length > 0) {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            for (var _iterator = _createForOfIteratorHelperLoose(this.listenerMap), _step; !(_step = _iterator()).done;) {
              var listener = _step.value;
              listener.callback.apply(listener.target, args);
            }
          }
        };

        _proto.excuteOnce = function excuteOnce() {
          if (this.onceListenerMap && this.onceListenerMap.length > 0) {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            for (var _iterator2 = _createForOfIteratorHelperLoose(this.onceListenerMap), _step2; !(_step2 = _iterator2()).done;) {
              var listener = _step2.value;
              listener.callback.apply(listener.target, args);
            }

            this.onceListenerMap.length = 0;
          }
        };

        _proto.listen = function listen(callback, target) {
          this.listenerMap.push({
            callback: callback,
            target: target
          });
        };

        _proto.listenOnce = function listenOnce(callback, target) {
          this.onceListenerMap.push({
            callback: callback,
            target: target
          });
        };

        _proto.removeListener = function removeListener(callback, target) {
          if (this.listenerMap && this.listenerMap.length > 0) {
            for (var i = 0; i < this.listenerMap.length; ++i) {
              var listener = this.listenerMap[i];

              if (listener.callback == callback && listener.target == target) {
                this.listenerMap.splice(i, 1);
                --i;
              }
            }
          }
        };

        _proto.removeTarget = function removeTarget(target) {
          if (this.listenerMap && this.listenerMap.length > 0) {
            for (var i = 0; i < this.listenerMap.length; ++i) {
              var listener = this.listenerMap[i];

              if (listener.target == target) {
                this.listenerMap.splice(i, 1);
                --i;
              }
            }
          }
        };

        _proto.dispatch = function dispatch(val1, val2, val3, val4, val5) {
          this.doDispatch(val1, val2, val3, val4, val5);
        };

        _proto.addListener = function addListener(callback, target) {
          this.listen(callback, target);
        };

        _proto.addOnce = function addOnce(callback, target) {
          this.listenOnce(callback, target);
        };

        return BaseSignal;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InitialFacade.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Notification.ts', './ToSingleTon.ts', './CelerSDK.ts', './StepManager.ts', './InitialCommand.ts', './StartupCommand.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, Notification, SingleTon, CelerSDK, StepManager, InitialCommand, StartupCommand;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Notification = module.Notification;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      CelerSDK = module.CelerSDK;
    }, function (module) {
      StepManager = module.StepManager;
    }, function (module) {
      InitialCommand = module.InitialCommand;
    }, function (module) {
      StartupCommand = module.StartupCommand;
    }],
    execute: function () {
      exports('STEP', void 0);

      cclegacy._RF.push({}, "1e8bcsxRDVMVZUnFxHWDXZu", "InitialFacade", undefined);

      var STEP;

      (function (STEP) {
        STEP["Audio"] = "Audio";
        STEP["Prefab"] = "Prefab";
        STEP["Json"] = "Json";
        STEP["Material"] = "Material";
      })(STEP || (STEP = exports('STEP', {})));

      var InitialFacade = exports('InitialFacade', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(InitialFacade, _SingleTon);

        function InitialFacade() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this.stepManager = new StepManager();
          _this.notification = new Notification();
          return _this;
        }

        var _proto = InitialFacade.prototype;

        _proto.startStep = function startStep(step) {
          this.stepManager.start(step);
        };

        _proto.register = function register() {
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
        };

        _proto.start = function start() {
          this.register();

          if (InitialFacade.CelerFirst) {
            CelerSDK.inst.celerXReady();
          } else {
            this.notification.sendNotification(InitialFacade.INIT, this);
          }
        };

        _proto.step = function step(commandName) {
          console.log(" initialization step:", commandName);
          this.stepManager.nextStep(commandName);
        };

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

System.register("chunks:///_virtual/TimeEffectAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts', './Signal3.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation, TimeAnimationStateChanged;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }, function (module) {
      TimeAnimationStateChanged = module.TimeAnimationStateChanged;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1eaddfQXxtCKIdNPE4ltlZx", "TimeEffectAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TimeEffectAnimation = exports('TimeEffectAnimation', (_dec = ccclass("TimeEffectAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(TimeEffectAnimation, _SpriteUIAnimation);

        function TimeEffectAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = TimeEffectAnimation.prototype;

        _proto.onLoad = function onLoad() {
          _SpriteUIAnimation.prototype.onLoad.call(this);

          this.Sprite.color.a = 0;
          TimeAnimationStateChanged.inst.addListener(this.onPlayStateChanged, this);
        };

        _proto.onPlayStateChanged = function onPlayStateChanged(isPlay) {
          if (isPlay) {
            if (this.isPlaying == false) {
              this.playOnLoop();
            }
          } else {
            this.stop();
          }
        };

        _proto.start = function start() {};

        _proto.playOnLoop = function playOnLoop() {
          this.Sprite.color.a = 255;

          _SpriteUIAnimation.prototype.playOnLoop.call(this);
        };

        _proto.stop = function stop() {
          this.Sprite.color.a = 0;

          _SpriteUIAnimation.prototype.stop.call(this);
        } // update (dt) {}
        ;

        return TimeEffectAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HashMap.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, _createForOfIteratorHelperLoose, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1ef5dw1pKtNYaEqYhYExFBI", "HashMap", undefined);
      /**
       * HashMap泛型实现
       */


      var HashMap = exports('HashMap', /*#__PURE__*/function () {
        //存储列表
        function HashMap() {
          this._list = new Array();
          this.clear();
        } //通过key获取索引


        var _proto = HashMap.prototype;

        _proto.getIndexByKey = function getIndexByKey(key) {
          var count = this._list.length;

          for (var index = 0; index < count; index++) {
            var element = this._list[index];

            if (element.key == key) {
              return index;
            }
          }

          return -1;
        };

        _proto.keyOf = function keyOf(value) {
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
        ;
        /**
         * 添加键值
         */


        _proto.add = function add(key, value) {
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
        };
        /**
         * 删除键值
         */


        _proto.remove = function remove(key) {
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
        ;

        _proto.has = function has(key) {
          var index = this.getIndexByKey(key);
          return index != -1;
        }
        /**
         * 通过key获取键值value
         * @param key
         */
        ;

        _proto.get = function get(key) {
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
        ;
        /**
         * 排序
         * @param
         */


        _proto.sort = function sort(compare) {
          this._list.sort(compare);
        }
        /**
         * 遍历列表，回调(data:KeyValue<K, V>)
         */
        ;

        _proto.forEachKeyValue = function forEachKeyValue(f) {
          var count = this._list.length;

          for (var index = 0; index < count; index++) {
            var element = this._list[index];
            f(element);
          }
        }
        /**
         * 遍历列表，回调(K,V)
         */
        ;

        _proto.forEach = function forEach(f) {
          var count = this._list.length;

          for (var index = 0; index < count; index++) {
            var element = this._list[index];
            f(element.key, element.value);
          }
        }
        /**
         * 清空全部
         */
        ;

        _proto.clear = function clear() {
          this._list = [];
        };

        _createClass(HashMap, [{
          key: "keys",
          get: function get() {
            var keys = new Array();

            for (var _iterator = _createForOfIteratorHelperLoose(this._list), _step; !(_step = _iterator()).done;) {
              var element = _step.value;

              if (element) {
                keys.push(element.key);
              }
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

System.register("chunks:///_virtual/WhiteBall.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, v3, RigidBody, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      RigidBody = module.RigidBody;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "219c5nWhGpF77j8W/lgWxRQ", "WhiteBall", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WhiteBall = exports('WhiteBall', (_dec = ccclass("WhiteBall"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WhiteBall, _Component);

        function WhiteBall() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = WhiteBall.prototype;

        _proto.start = function start() {// Your initialization goes here.
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _proto.shot = function shot(force) {
          console.log("force:", force);
          this.RigidBody.applyForce(v3(Math.random() * 600, Math.random() * 600, Math.random() * 600));
        };

        _createClass(WhiteBall, [{
          key: "RigidBody",
          get:
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          function get() {
            return this.getComponent(RigidBody);
          }
        }]);

        return WhiteBall;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseMediator.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "2588aikF8ZLGogdwfKvfPeO", "BaseMediator", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseMediator = exports('BaseMediator', (_dec = ccclass("BaseMediator"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseMediator, _Component);

        function BaseMediator() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = BaseMediator.prototype;

        _proto.bind = function bind(view) {
          this.view = view;
        };

        _proto.onRegister = function onRegister() {
          console.error(" should override onRegister ");
        };

        _proto.onUnregister = function onUnregister() {
          console.error(" should override onUnregister ");
        };

        _createClass(BaseMediator, [{
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

System.register("chunks:///_virtual/BallRoot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './HashMap.ts', './PrefabFactory.ts', './BallModel.ts', './Pole.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, v3, Component, GamePrepareSignal, HashMap, PrefabFactory, BallCreatedSignal, BallRemoveSignal, InitPolePositionSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      GamePrepareSignal = module.GamePrepareSignal;
    }, function (module) {
      HashMap = module.HashMap;
    }, function (module) {
      PrefabFactory = module.PrefabFactory;
    }, function (module) {
      BallCreatedSignal = module.BallCreatedSignal;
      BallRemoveSignal = module.BallRemoveSignal;
    }, function (module) {
      InitPolePositionSignal = module.InitPolePositionSignal;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "25e7e93IY9NBb1/s/V6XKPA", "BallRoot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BallRoot = exports('BallRoot', (_dec = ccclass("BallRoot"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BallRoot, _Component);

        function BallRoot() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = BallRoot.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          var _this = this; // Your initialization goes here.


          GamePrepareSignal.inst.addListener(function () {
            _this.node.removeAllChildren();
          }, this);
          BallCreatedSignal.inst.addListener(this.onBallCreate, this);
          BallRemoveSignal.inst.addListener(this.onBallRemove, this);
        };

        _proto.onBallCreate = function onBallCreate(ballModel) {
          var ball = PrefabFactory.inst.getObj("Ball", ballModel);
          ball.setRotationFromEuler(0, 180, 0);
          ball.setPosition(ballModel.Position.add(v3(0, 0, 0)));
          ball.name = ballModel.ID;
          this.node.addChild(ball);

          if (ballModel.isWhiteBall) {
            BallRoot.WhiteBall = ball;
            InitPolePositionSignal.inst.dispatch(ballModel.Position);
          }
        };

        _proto.onBallRemove = function onBallRemove(ballModel) {
          var ball = this.node.getChildByName(ballModel.ID);

          if (ball) {
            PrefabFactory.inst.putObj("Ball", ball);
          }
        };

        _proto.update = function update(deltaTime) {};

        return BallRoot;
      }(Component), _class2.WhiteBall = null, _class2.Balls = new HashMap(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Level.ts", ['cc', './GameRule.ts', './Cocos.ts'], function (exports) {
  'use strict';

  var cclegacy, Theme, disOrderArray;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Theme = module.Theme;
    }, function (module) {
      disOrderArray = module.disOrderArray;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2c61ff3ojFA+b0ekQBXtCGj", "Level", undefined);
      /** 游戏不同难度内容区分 */


      var Level = exports('Level', /*#__PURE__*/function () {
        function Level() {}

        Level.GetThemeRandomPool = function GetThemeRandomPool(level) {
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
        };

        return Level;
      }());
      Level.themePool = [];

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TableManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, _createClass, cclegacy, loader;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      loader = module.loader;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3152d8IVxNJ0bZnGxcI+7M6", "TableManager", undefined);
      /**
       * json数据管理
       */


      var TableManager = exports('TableManager', /*#__PURE__*/function () {
        function TableManager() {
          this.load = TableManager.JSON_URL && TableManager.JSON_URL != "" ? loader.load.bind(loader) : loader.loadRes.bind(loader);
          this.fileFormat = TableManager.JSON_URL && TableManager.JSON_URL != "" ? ".json?time=" + Date.now() : "";
          this.total = 0;
          this.complete = 0;
          this.Balls = {};
          this.En = {};
          this.Level = {};
          this.Physical = {};
        }

        var _proto = TableManager.prototype;
        /**
         *
         * @param url json 路径
         * @param complete
         * @param progress
         */

        _proto.startLoad = function startLoad(url, complete, progress) {
          this.completeCallback = complete;
          this.progressCallback = progress;
          var self = this;
          console.log("Base URL:", TableManager.JSON_URL);
          this.load(TableManager.JSON_URL + url.trim().split("/").join("") + "/file_list" + this.fileFormat, function (err, JsonAsset) {
            if (err) {
              console.error(err.errorMessage);
            } else {
              var jsonArray = JsonAsset.constructor["name"] == "Array" ? JsonAsset : JsonAsset.json;
              self.total = jsonArray.length;

              for (var _iterator = _createForOfIteratorHelperLoose(jsonArray), _step; !(_step = _iterator()).done;) {
                var jsonFile = _step.value;
                self.loadJson(url.trim().split("/").join("") + "/" + jsonFile.replace(".json", ""));
              }
            }
          }.bind(this));
        };

        _proto.loadJson = function loadJson(url) {
          console.log("start load:" + url);
          var self = this;
          var tableName = url.split("/")[1];
          tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1, tableName.length);
          this.load(TableManager.JSON_URL + url + this.fileFormat, function (err, JsonAsset) {
            if (err) {
              console.error(err.errorMessage);
            } else {
              var jsonArray = JsonAsset.constructor["name"] == "Array" ? JsonAsset : JsonAsset.json;

              for (var _iterator2 = _createForOfIteratorHelperLoose(jsonArray), _step2; !(_step2 = _iterator2()).done;) {
                var json = _step2.value;
                self[tableName][json["ID"]] = json;
              }

              self.completeLoad();
            }
          }.bind(this));
        };

        _proto.completeLoad = function completeLoad() {
          this.complete++;

          if (this.progressCallback) {
            this.progressCallback(this.complete / this.total);
          }

          if (this.complete >= this.total) {
            if (this.completeCallback) this.completeCallback();
          }
        };

        _proto.getBalls = function getBalls(key) {
          if (this.Balls[key]) {
            return this.Balls[key];
          } else {
            console.error('Balls 不存key：' + key);
            return null;
          }
        };

        _proto.getAll_Balls_Data = function getAll_Balls_Data() {
          return this.Balls;
        };

        _proto.getEn = function getEn(key) {
          if (this.En[key]) {
            return this.En[key];
          } else {
            console.error('En 不存key：' + key);
            return null;
          }
        };

        _proto.getAll_En_Data = function getAll_En_Data() {
          return this.En;
        };

        _proto.getLevel = function getLevel(key) {
          if (this.Level[key]) {
            return this.Level[key];
          } else {
            console.error('Level 不存key：' + key);
            return null;
          }
        };

        _proto.getAll_Level_Data = function getAll_Level_Data() {
          return this.Level;
        };

        _proto.getPhysical = function getPhysical(key) {
          if (this.Physical[key]) {
            return this.Physical[key];
          } else {
            console.error('Physical 不存key：' + key);
            return null;
          }
        };

        _proto.getAll_Physical_Data = function getAll_Physical_Data() {
          return this.Physical;
        };

        _createClass(TableManager, null, [{
          key: "inst",
          get: function get() {
            return this.ins ? this.ins : this.ins = new TableManager();
          }
        }]);

        return TableManager;
      }());
      TableManager.JSON_URL = "";

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ToSingleTon.ts', './AudioManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, director, Node, VideoPlayer, UITransform, SingleTon, AudioController;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Node = module.Node;
      VideoPlayer = module.VideoPlayer;
      UITransform = module.UITransform;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      AudioController = module.AudioController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34f55CXNDFMZbvIq4L0XTiw", "AdController", undefined);

      var AdController = exports('AdController', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(AdController, _SingleTon);

        function AdController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this.hasBind = false;
          _this.finishCallback = {};
          _this.failedCallback = {};
          _this.adCount = 0;
          _this.msgMap = {};
          _this.volume = 0;
          return _this;
        }

        var _proto = AdController.prototype;

        _proto.showAd = function showAd(adUnitId, finsh, failed) {
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
        };

        _proto.bindCallback = function bindCallback() {
          this.hasBind = true;

          if (CELER_X) {
            celerSDK.onAdPlayFailed(this.onAddFaild.bind(this));
            celerSDK.onAdPlayFinished(this.onAdFinish.bind(this));
          }
        };

        _proto.onAdFinish = function onAdFinish(uniqeKey) {
          if (this.finishCallback[uniqeKey]) {
            var callbacks = this.finishCallback[uniqeKey];

            for (var _iterator = _createForOfIteratorHelperLoose(callbacks), _step; !(_step = _iterator()).done;) {
              var finish = _step.value;
              finish(this.msgMap[uniqeKey]);
            }

            this.finishCallback[uniqeKey] = null;
            this.failedCallback[uniqeKey] = null;
            this.msgMap[uniqeKey] = null;
          }

          if (!CELER_X) {
            AudioController.inst.setMusicVolume(this.volume);
          }
        };

        _proto.onAddFaild = function onAddFaild(uniqeKey) {
          if (this.failedCallback[uniqeKey]) {
            var callbacks = this.failedCallback[uniqeKey];

            for (var _iterator2 = _createForOfIteratorHelperLoose(callbacks), _step2; !(_step2 = _iterator2()).done;) {
              var failed = _step2.value;
              failed(this.msgMap[uniqeKey]);
            }

            this.failedCallback[uniqeKey] = null;
            this.finishCallback[uniqeKey] = null;
            this.msgMap[uniqeKey] = null;
          }

          if (!CELER_X) {
            AudioController.inst.setMusicVolume(this.volume);
          }
        };

        return AdController;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PointBallButtonView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './HitPointLayer.ts', './Pole.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, UITransform, v3, Component, UpdateShotCenterSignal, Pole;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      UpdateShotCenterSignal = module.UpdateShotCenterSignal;
    }, function (module) {
      Pole = module.Pole;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "35bf1BNR0hNmrvOEsujt1Mc", "PointBallButtonView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PointBallButtonView = exports('PointBallButtonView', (_dec = ccclass("PointBallButtonView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PointBallButtonView, _Component);

        function PointBallButtonView() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = PointBallButtonView.prototype;

        _proto.start = function start() {
          var _this = this; // Your initialization goes here.


          UpdateShotCenterSignal.inst.addListener(function () {
            var radius = _this.getComponent(UITransform).width / 2;
            var pointRadius = _this.Point.getComponent(UITransform).width / 2;

            _this.Point.setPosition(v3((radius - pointRadius) * Pole.HitPoint.x, (radius - pointRadius) * Pole.HitPoint.y, 0));
          }, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(PointBallButtonView, [{
          key: "Point",
          get:
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          function get() {
            return this.node.getChildByName("bg_redpoint");
          }
        }]);

        return PointBallButtonView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HelpLayerMediator.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './GameStateController.ts', './BaseMediator.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, ShowHelpLayerSignal, HideHelpLayerSignal, GameStateController, BaseMediator;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ShowHelpLayerSignal = module.ShowHelpLayerSignal;
      HideHelpLayerSignal = module.HideHelpLayerSignal;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      BaseMediator = module.BaseMediator;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "3bc60X0KO1JzJXd7Wo2je/U", "HelpLayerMediator", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HelpLayerMediator = exports('HelpLayerMediator', (_dec = ccclass("HelpLayerMediator"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseMediator) {
        _inheritsLoose(HelpLayerMediator, _BaseMediator);

        function HelpLayerMediator() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseMediator.call.apply(_BaseMediator, [this].concat(args)) || this;
          _this.closeCallback = null;
          return _this;
        }

        var _proto = HelpLayerMediator.prototype;

        _proto.onRegister = function onRegister() {
          ShowHelpLayerSignal.inst.addListener(this.showHelp, this); // ShowTutorialSignal.inst.addListener(this.showGuide, this);

          HideHelpLayerSignal.inst.addListener(this.hideGuide, this);
        };

        _proto.showHelp = function showHelp(callback) {
          if (this.View.isShowed()) return;
          GameStateController.inst.pause();
          this.closeCallback = callback;
          this.View.Show();
        };

        _proto.showGuide = function showGuide(callback) {
          if (this.View.isShowed()) return;
          GameStateController.inst.pause(true);
          this.closeCallback = callback;
          this.View.Show();
        };

        _proto.hideGuide = function hideGuide() {
          if (this.View.isShowed() == false) return;
          GameStateController.inst.resume();
          this.View.Hide(this.closeCallback);
          this.closeCallback = null;
        };

        return HelpLayerMediator;
      }(BaseMediator), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HelpLayerView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './BaseView.ts', './GameStateController.ts', './TutorialRotation.ts', './GameLogic.ts', './HelpLayerMediator.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, PageView, Label, v3, Tween, Vec3, tween, GameOverSignal, ButtonClickSignal, HideHelpLayerSignal, BaseView, GameStateController, TutorialStep, GameLogic, TutorialStepSignal, HelpLayerMediator;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      PageView = module.PageView;
      Label = module.Label;
      v3 = module.v3;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      GameOverSignal = module.GameOverSignal;
      ButtonClickSignal = module.ButtonClickSignal;
      HideHelpLayerSignal = module.HideHelpLayerSignal;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      TutorialStep = module.TutorialStep;
    }, function (module) {
      GameLogic = module.GameLogic;
      TutorialStepSignal = module.TutorialStepSignal;
    }, function (module) {
      HelpLayerMediator = module.HelpLayerMediator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "3e761geQgBBvrtLtcJcAQAE", "HelpLayerView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var State;

      (function (State) {
        State[State["Show"] = 0] = "Show";
        State[State["Hide"] = 1] = "Hide";
      })(State || (State = {}));

      var HelpLayerView = exports('HelpLayerView', (_dec = ccclass("HelpLayerView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(PageView), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(HelpLayerView, _BaseView);

        function HelpLayerView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this.state = State.Hide;

          _initializerDefineProperty(_this, "Next", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Close", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "GuidePage", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TotalPage", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Page", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = HelpLayerView.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.BindMedaitor(HelpLayerMediator);
          this.state = State.Hide;
          this.node.scale = v3(1, 1, 1);
          this.node.active = false;
          this.GuidePage.node.on("scroll-ended", this.onPageChanged, this);
          this.Close.on(Node.EventType.TOUCH_END, function () {
            if (_this2.state == State.Hide) return;

            _this2.close();

            if (GameLogic.inst.isOnTutorial) {
              GameLogic.inst.TutorialStep++;
            }
          }, this);
          this.Next.on(Node.EventType.TOUCH_END, this.next, this);
          GameOverSignal.inst.addListener(this.close, this);
          TutorialStepSignal.inst.addListener(function (step) {
            if (step == TutorialStep.NormalScore) {
              GameStateController.inst.pause(true);

              _this2.Show(function () {
                _this2.GuidePage.scrollToPage(1, 0);
              });
            } else if (step == TutorialStep.TrickScore) {
              GameStateController.inst.pause(true);

              _this2.Show(function () {
                _this2.GuidePage.scrollToPage(0, 0);
              });
            }
          }, this);
        };

        _proto.start = function start() {};

        _proto.close = function close() {
          ButtonClickSignal.inst.dispatch();
          HideHelpLayerSignal.inst.dispatch();
        };

        _proto.next = function next() {
          ButtonClickSignal.inst.dispatch();

          if (GameLogic.inst.isOnTutorial) {
            this.close();
            GameLogic.inst.TutorialStep++;
          }

          this.GuidePage.scrollToPage((this.GuidePage.getCurrentPageIndex() + 1) % this.GuidePage.content.children.length, 0);
          this.onPageChanged();
        };

        _proto.onPageChanged = function onPageChanged() {
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
        };

        _proto.isShowed = function isShowed() {
          return this.state == State.Show;
        };

        _proto.Show = function Show(callback) {
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
        };

        _proto.Hide = function Hide(callback) {
          var _this3 = this;

          if (this.isShowed() == false) return;
          this.state = State.Hide;
          Tween.stopAllByTarget(this.node);
          tween(this.node).sequence(tween(this.node).to(0.1, {
            scale: v3(0, 0, 0)
          }), tween(this.node).call(function () {
            _this3.node.scale = v3(1, 1, 1);
            callback && callback();
            _this3.node.active = false;
          })).start();
        } // update (dt) {}
        ;

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

System.register("chunks:///_virtual/StepManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, cclegacy;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "40cb5NQZgtIJI0r/H26O+5G", "StepManager", undefined);

      var StepManager = exports('StepManager', /*#__PURE__*/function () {
        function StepManager() {
          this.totalStep = [];
          this.curStep = [];
          this.loadTime = {};
        }

        var _proto = StepManager.prototype;

        _proto.register = function register(complete, totalSteps) {
          this.completeCallback = complete;
          this.totalStep = totalSteps;

          for (var _iterator = _createForOfIteratorHelperLoose(totalSteps), _step; !(_step = _iterator()).done;) {
            var _key = _step.value;
            this.loadTime[_key] = Date.now();
          }
        };

        _proto.start = function start(step) {
          this.loadTime[step] = Date.now();
        };

        _proto.nextStep = function nextStep(step) {
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
        };

        return StepManager;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "43fd8d5LH1PVqExvFFWxY1v", "TestView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TestView = exports('TestView', (_dec = ccclass("TestView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestView, _Component);

        function TestView() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = TestView.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          this.node.destroy();
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return TestView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MenuButtonView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './SingleTouchView.ts', './GameStateController.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, ButtonClickSignal, MenuButtonClickSignal, SingleTouchView, GameStateController, GameLogic;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ButtonClickSignal = module.ButtonClickSignal;
      MenuButtonClickSignal = module.MenuButtonClickSignal;
    }, function (module) {
      SingleTouchView = module.SingleTouchView;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      GameLogic = module.GameLogic;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "44738JUeE1ID40DyAL6Gs2H", "MenuButtonView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MenuButtonView = exports('MenuButtonView', (_dec = ccclass("MenuButtonView"), _dec(_class = /*#__PURE__*/function (_SingleTouchView) {
        _inheritsLoose(MenuButtonView, _SingleTouchView);

        function MenuButtonView() {
          return _SingleTouchView.apply(this, arguments) || this;
        }

        var _proto = MenuButtonView.prototype;

        _proto.onLoad = function onLoad() {
          MenuButtonView.Node = this.node;

          _SingleTouchView.prototype.onLoad.call(this);
        };

        _proto.onTouchEnd = function onTouchEnd() {
          ButtonClickSignal.inst.dispatch();
          if (GameStateController.inst.isGameOver()) return;
          if (GameLogic.inst.isOnTutorial) return;
          MenuButtonClickSignal.inst.dispatch();
        };

        _proto.start = function start() {};

        return MenuButtonView;
      }(SingleTouchView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BallModel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, v3, BaseSignal, NextRountSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      NextRountSignal = module.NextRountSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4482cbhIlJL4puxhbFfG59V", "BallModel", undefined);

      var BallCreatedSignal = exports('BallCreatedSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(BallCreatedSignal, _BaseSignal);

        function BallCreatedSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return BallCreatedSignal;
      }(BaseSignal));
      var BallRemoveSignal = exports('BallRemoveSignal', /*#__PURE__*/function (_BaseSignal2) {
        _inheritsLoose(BallRemoveSignal, _BaseSignal2);

        function BallRemoveSignal() {
          return _BaseSignal2.apply(this, arguments) || this;
        }

        return BallRemoveSignal;
      }(BaseSignal));
      var BallModel = exports('BallModel', /*#__PURE__*/function () {
        function BallModel(type, materialName, point, position) {
          var _this = this;

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

        var _proto = BallModel.prototype;

        _proto.hitBall = function hitBall(model) {
          if (model.isWhiteBall) {
            this.isHitWhite = true;
          }

          this.hitBallCount++;
        };

        _proto.hitBorder = function hitBorder() {
          if (this.isWhiteBall) {
            if (this.hitBallCount <= 0) {
              this.hitBorderCount++;
            }
          } else {
            this.hitBorderCount++;
          }
        };

        _proto.syncPosition = function syncPosition(position) {
          this.position = position;
        };

        _proto.removeSelf = function removeSelf() {
          BallRemoveSignal.inst.dispatch(this);
          NextRountSignal.inst.removeTarget(this);
        };

        _createClass(BallModel, [{
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

System.register("chunks:///_virtual/NoBustView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './Signal3.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, v3, tween, Component, ScoreType, PlayerScoreChanged;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ScoreType = module.ScoreType;
    }, function (module) {
      PlayerScoreChanged = module.PlayerScoreChanged;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "49876R9QG9KCbb1z479iOVt", "NoBustView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var NoBustView = exports('NoBustView', (_dec = ccclass("NoBustView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NoBustView, _Component);

        function NoBustView() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = NoBustView.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
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
        ;

        return NoBustView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BallObject.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './Signal2.ts', './Signal3.ts', './Cocos.ts', './TableManager.ts', './MaterialFactory.ts', './table.ts', './BorderCollider.ts', './Pole.ts', './PrefabView.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, MeshRenderer, PhysicsSystem, Tween, math, tween, Vec3, v3, SphereCollider, BoxCollider, RigidBody, EasyMode, BaseSignal, ShotSignal, Clamp, TableManager, MaterialFactory, Physical_ID, BorderCollider, BorderType, HitBorderSignal, Pole, PrefabView, GameLogic, WhiteBallReposSignal, NextRountSignal, BallReturnSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      MeshRenderer = module.MeshRenderer;
      PhysicsSystem = module.PhysicsSystem;
      Tween = module.Tween;
      math = module.math;
      tween = module.tween;
      Vec3 = module.Vec3;
      v3 = module.v3;
      SphereCollider = module.SphereCollider;
      BoxCollider = module.BoxCollider;
      RigidBody = module.RigidBody;
    }, function (module) {
      EasyMode = module.EasyMode;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      ShotSignal = module.ShotSignal;
    }, function (module) {
      Clamp = module.Clamp;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      MaterialFactory = module.MaterialFactory;
    }, function (module) {
      Physical_ID = module.Physical_ID;
    }, function (module) {
      BorderCollider = module.BorderCollider;
      BorderType = module.BorderType;
      HitBorderSignal = module.HitBorderSignal;
    }, function (module) {
      Pole = module.Pole;
    }, function (module) {
      PrefabView = module.PrefabView;
    }, function (module) {
      GameLogic = module.GameLogic;
      WhiteBallReposSignal = module.WhiteBallReposSignal;
      NextRountSignal = module.NextRountSignal;
      BallReturnSignal = module.BallReturnSignal;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "4aaeaCpbk9OA4V7a+4cqSqQ", "BallObject", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BallHitSignal = exports('BallHitSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(BallHitSignal, _BaseSignal);

        function BallHitSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return BallHitSignal;
      }(BaseSignal));
      var WhiteBallReposDoneSignal = exports('WhiteBallReposDoneSignal', /*#__PURE__*/function (_BaseSignal2) {
        _inheritsLoose(WhiteBallReposDoneSignal, _BaseSignal2);

        function WhiteBallReposDoneSignal() {
          return _BaseSignal2.apply(this, arguments) || this;
        }

        return WhiteBallReposDoneSignal;
      }(BaseSignal));
      var BallObject = exports('BallObject', (_dec = ccclass("BallObject"), _dec(_class = (_temp = /*#__PURE__*/function (_PrefabView) {
        _inheritsLoose(BallObject, _PrefabView);

        function BallObject() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _PrefabView.call.apply(_PrefabView, [this].concat(args)) || this;
          _this.isSleep = false;
          _this.isUpdate = false;
          _this.shotVelocity = null;
          _this.shotImpulse = null;
          return _this;
        }

        var _proto = BallObject.prototype;

        _proto.onReuse = function onReuse() {
          if (this.model) {
            this.initRenderer();
            this.initPhysic();
            this.initEvent();
          }
        };

        _proto.initRenderer = function initRenderer() {
          this.MeshRenderer.shadowCastingMode = MeshRenderer.ShadowCastingMode.ON;
          this.MeshRenderer.setMaterial(MaterialFactory.inst.getMaterial(this.model.Material), 0);
        };

        _proto.initPhysic = function initPhysic() {
          var ball = TableManager.inst.getBalls(this.model.Type);

          if (this.Collider.material == null) {
            this.Collider.material = PhysicsSystem.instance.defaultMaterial;
          }

          this.Collider.material.friction = ball.Friction;
          this.Collider.material.restitution = ball.Restitution;
          this.Collider.material.rollingFriction = ball.RollingFriction;
          this.Collider.material.spinningFriction = ball.SpinningFriction;
          this.RigidBody.allowSleep = true;
          this.RigidBody.sleepThreshold = 0.5;
          this.RigidBody.mass = ball.Mass;
          this.RigidBody.useCCD = true;
          this.RigidBody.linearDamping = ball.LinearDamping;
          this.RigidBody.angularDamping = ball.AngularDamping;

          if (this.model.isWhiteBall) {
            this.RigidBody.group = 2;
          } else {
            this.RigidBody.group = 2;
          }
        };

        _proto.onNextRound = function onNextRound() {
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
        };

        _proto.onReposition = function onReposition(position, callback) {
          var _this2 = this;

          if (this.model && this.model.isWhiteBall) {
            this.registerTrigger();
            this.RigidBody.clearState();
            this.isUpdate = false;
            this.RigidBody.enabled = false;
            this.Collider.enabled = false;
            Tween.stopAllByTarget(this.node);
            var rotation = math.quat();
            var time = Vec3.distance(this.node.position, position) / 20;
            math.Quat.fromEuler(rotation, 0, 180, 0);
            var ballWorld = v3();

            if (math.approx(time, 0, 0.01)) {
              time = 0;
              this.node.setRotation(rotation);
              this.node.setPosition(this.model.Position);
              this.RigidBody.enabled = true;
              this.Collider.enabled = true;
              this.RigidBody.clearState();
              this.node.getWorldPosition(ballWorld);
              WhiteBallReposDoneSignal.inst.dispatch(ballWorld);
              if (callback && this.model.isWhiteBall) callback();
            } else {
              // tween(this.node)
              //   .to(time, {
              //     rotation: rotation,
              //   })
              //   .start();
              tween(this.node).to(time, {
                position: this.model.Position
              }).call(function () {
                _this2.RigidBody.enabled = true;
                _this2.Collider.enabled = true;

                _this2.RigidBody.clearState();

                _this2.node.getWorldPosition(ballWorld);

                WhiteBallReposDoneSignal.inst.dispatch(ballWorld);
                if (callback && _this2.model.isWhiteBall) callback();
              }).start();
            }
          }
        };

        _proto.onCollideExit = function onCollideExit(a) {};

        _proto.onCollide = function onCollide(a) {
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
              var impulse = Pole.HitNormal.clone().normalize().multiplyScalar(this.shotImpulse.length()).multiplyScalar(ballOtherPhysic.Damping * ballPhysicWhite.Damping * Math.abs(velocity.length() / this.shotVelocity.length()));
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
        };

        _proto.registerTrigger = function registerTrigger() {
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
        };

        _proto.onShot = function onShot(power, angleY, forward) {
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
        };

        _proto.onUnuse = function onUnuse() {
          ShotSignal.inst.removeTarget(this);
          this.Collider.targetOff(this);
          this.model = null;
          this.isUpdate = false;
        };

        _proto.initEvent = function initEvent() {
          ShotSignal.inst.addListener(this.onShot, this);
          WhiteBallReposSignal.inst.addListener(this.onReposition, this);
          NextRountSignal.inst.addListener(this.onNextRound, this);
          BallReturnSignal.inst.addListener(this.onReturn, this);
          this.Collider.on("onCollisionEnter", this.onCollide, this);
          this.Collider.on("onCollisionExit", this.onCollideExit, this);
          this.registerTrigger();
        };

        _proto.onReturn = function onReturn(callback) {
          var _this3 = this;

          if (GameLogic.inst.isOnTutorial == false || !this.model) return;
          this.RigidBody.enabled = false;
          this.Collider.enabled = false;
          this.RigidBody.clearState();
          Tween.stopAllByTarget(this.node);
          var rotation = math.quat();
          var time = Vec3.distance(this.node.position, this.model.Position) / 20;
          math.Quat.fromEuler(rotation, 0, 180, 0);

          if (math.approx(time, 0, 0.01)) {
            time = 0;
            this.node.setRotation(rotation);
            this.node.setPosition(this.model.Position);
            this.RigidBody.enabled = true;
            this.Collider.enabled = true;
            this.RigidBody.clearState();
            if (callback && this.model.isWhiteBall) callback();
          } else {
            // tween(this.node)
            //   .to(time, {
            //     rotation: rotation,
            //   })
            //   .start();
            tween(this.node).to(time, {
              position: this.model.Position
            }).call(function () {
              _this3.RigidBody.enabled = true;
              _this3.Collider.enabled = true;

              _this3.RigidBody.clearState();

              if (callback && _this3.model.isWhiteBall) callback();
            }).start();
          }
        };

        _proto.update = function update() {};

        _proto.lateUpdate = function lateUpdate() {
          if (this.isUpdate == false || !this.model) return;

          if (this.RigidBody.isSleeping) {
            GameLogic.inst.ballSleep(this.model);
            this.isSleep = this.RigidBody.isSleeping;
            this.isUpdate = false;
          }
        };

        _createClass(BallObject, [{
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

System.register("chunks:///_virtual/GlobalSingleTouchView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './GlobalSingleTouchMediator.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseView, GlobalSingleTouchMediator;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      GlobalSingleTouchMediator = module.GlobalSingleTouchMediator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "4eb47teSZlLQ5K7/rgpl/z3", "GlobalSingleTouchView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GlobalSingleTouchView = exports('GlobalSingleTouchView', (_dec = ccclass("GlobalSingleTouchView"), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(GlobalSingleTouchView, _BaseView);

        function GlobalSingleTouchView() {
          return _BaseView.apply(this, arguments) || this;
        }

        var _proto = GlobalSingleTouchView.prototype; // LIFE-CYCLE CALLBACKS:

        _proto.onLoad = function onLoad() {
          this.BindMedaitor(GlobalSingleTouchMediator);
        };

        _proto.start = function start() {} // update (dt) {}
        ;

        return GlobalSingleTouchView;
      }(BaseView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingViewMediator.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './PlayModel.ts', './CelerSDK.ts', './BaseMediator.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, GameReadySignal, ShowTutorialSignal, WildButtonReadySignal, PlayModel, CelerSDK, BaseMediator;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameReadySignal = module.GameReadySignal;
      ShowTutorialSignal = module.ShowTutorialSignal;
      WildButtonReadySignal = module.WildButtonReadySignal;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      CelerSDK = module.CelerSDK;
    }, function (module) {
      BaseMediator = module.BaseMediator;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "516487bxQ9CBr01QHyo6yB9", "LoadingViewMediator", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadingViewMediator = exports('LoadingViewMediator', (_dec = ccclass("LoadingViewMediator"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseMediator) {
        _inheritsLoose(LoadingViewMediator, _BaseMediator);

        function LoadingViewMediator() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseMediator.call.apply(_BaseMediator, [this].concat(args)) || this;
          _this.time = 1500;
          _this.startTime = 0;
          return _this;
        }

        var _proto = LoadingViewMediator.prototype;

        _proto.onRegister = function onRegister() {
          this.startTime = Date.now();
          GameReadySignal.inst.addOnce(this.onGameReady, this);
        };

        _proto.onGameReady = function onGameReady() {
          var _this2 = this;

          var waitingTime = Date.now() - this.startTime;
          console.log(" -- game init done, hide loading page: ", waitingTime);

          if (waitingTime <= this.time) {
            setTimeout(function () {
              _this2.View.Hide(function () {});

              _this2.startGame();
            }, this.time - waitingTime);
          } else {
            this.View.Hide(function () {});
            this.startGame();
          }
        };

        _proto.startGame = function startGame() {
          if (CelerSDK.inst.isNew()) {
            ShowTutorialSignal.inst.dispatch(function () {
              WildButtonReadySignal.inst.dispatch();
            });
          } else {
            WildButtonReadySignal.inst.dispatch();
          }

          PlayModel.inst.gameReadyShow();
        };

        _proto.onDestroy = function onDestroy() {};

        return LoadingViewMediator;
      }(BaseMediator), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BorderCollider.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts', './Signal3.ts', './TableManager.ts', './table.ts', './TutorialRotation.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, MeshRenderer, PhysicsSystem, Collider, Component, BaseSignal, GameReadySignal, TableManager, Physical_ID, TutorialStep, TutorialStepSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      MeshRenderer = module.MeshRenderer;
      PhysicsSystem = module.PhysicsSystem;
      Collider = module.Collider;
      Component = module.Component;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      GameReadySignal = module.GameReadySignal;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      Physical_ID = module.Physical_ID;
    }, function (module) {
      TutorialStep = module.TutorialStep;
    }, function (module) {
      TutorialStepSignal = module.TutorialStepSignal;
    }],
    execute: function () {
      exports({
        BorderType: void 0,
        HoleName: void 0
      });

      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "55f56Brk8pF25oXmG1eiGdC", "BorderCollider", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BorderType;
      /** 顺时针 */

      (function (BorderType) {
        BorderType[BorderType["Border"] = 0] = "Border";
        BorderType[BorderType["Floor"] = 1] = "Floor";
        BorderType[BorderType["Up"] = 2] = "Up";
        BorderType[BorderType["HoleBorder"] = 3] = "HoleBorder";
        BorderType[BorderType["HoleChecker"] = 4] = "HoleChecker";
        BorderType[BorderType["TutorialChecker"] = 5] = "TutorialChecker";
      })(BorderType || (BorderType = exports('BorderType', {})));

      var HoleName;

      (function (HoleName) {
        HoleName[HoleName["TopLeft"] = 0] = "TopLeft";
        HoleName[HoleName["TopRight"] = 1] = "TopRight";
        HoleName[HoleName["MidRight"] = 2] = "MidRight";
        HoleName[HoleName["BotRight"] = 3] = "BotRight";
        HoleName[HoleName["BotLeft"] = 4] = "BotLeft";
        HoleName[HoleName["MidLeft"] = 5] = "MidLeft";
      })(HoleName || (HoleName = exports('HoleName', {})));

      var HitBorderSignal = exports('HitBorderSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(HitBorderSignal, _BaseSignal);

        function HitBorderSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return HitBorderSignal;
      }(BaseSignal));
      var BorderCollider = exports('BorderCollider', (_dec = ccclass("BorderCollider"), _dec2 = property({
        type: Enum(BorderType)
      }), _dec3 = property({
        type: Enum(TutorialStep)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BorderCollider, _Component);

        function BorderCollider() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "step", _descriptor2, _assertThisInitialized(_this));

          _this.Pocket = null;
          return _this;
        }

        var _proto = BorderCollider.prototype;

        _proto.start = function start() {
          var _this2 = this; // Your initialization goes here.


          var meshRender = this.getComponent(MeshRenderer);

          if (meshRender) {
            meshRender.destroy(); // meshRender.setMaterial(App.Material, 0);
          }

          GameReadySignal.inst.addListener(this.onReady, this);
          TutorialStepSignal.inst.addListener(function (step) {
            if (_this2.type == BorderType.TutorialChecker && _this2.BoxCollider) {
              _this2.BoxCollider.enabled = _this2.step == step;
            }
          }, this);
        };

        _proto.onReady = function onReady() {
          if (this.type == BorderType.HoleChecker || this.type == BorderType.TutorialChecker) {
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
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(BorderCollider, [{
          key: "BoxCollider",
          get: function get() {
            return this.getComponent(Collider);
          }
        }]);

        return BorderCollider;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BorderType.Border;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "step", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TutorialStep.Ready;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TablePlane.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './Signal3.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Material, MeshRenderer, Component, Theme, GameThemeInit;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }, function (module) {
      Theme = module.Theme;
    }, function (module) {
      GameThemeInit = module.GameThemeInit;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "5606e1TlwlCJZGtzTPX5oL7", "TablePlane", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TablePlane = exports('TablePlane', (_dec = ccclass("TablePlane"), _dec2 = property(Material), _dec3 = property(Material), _dec4 = property(Material), _dec5 = property(Material), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TablePlane, _Component);

        function TablePlane() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "Green", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Red", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Blue", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Purple", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TablePlane.prototype;

        _proto.start = function start() {
          var _this2 = this;

          GameThemeInit.inst.addListener(function (theme) {
            if (_this2[Theme[theme]]) {
              _this2.MeshRenderer.setMaterial(_this2[Theme[theme]], 0);
            }
          }, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(TablePlane, [{
          key: "MeshRenderer",
          get:
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          function get() {
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

System.register("chunks:///_virtual/SoundButtonView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './SingleTouchView.ts', './AudioManager.ts', './ResourceController.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Sprite, SoundStateChangedSignal, SingleTouchView, AudioController, ResourceController;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
    }, function (module) {
      SoundStateChangedSignal = module.SoundStateChangedSignal;
    }, function (module) {
      SingleTouchView = module.SingleTouchView;
    }, function (module) {
      AudioController = module.AudioController;
    }, function (module) {
      ResourceController = module.ResourceController;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "57bbbHi8R9Ge5kYa7JgQS4p", "SoundButtonView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SoundButtonView = exports('SoundButtonView', (_dec = ccclass("SoundButtonView"), _dec(_class = /*#__PURE__*/function (_SingleTouchView) {
        _inheritsLoose(SoundButtonView, _SingleTouchView);

        function SoundButtonView() {
          return _SingleTouchView.apply(this, arguments) || this;
        }

        var _proto = SoundButtonView.prototype;

        _proto.onLoad = function onLoad() {
          _SingleTouchView.prototype.onLoad.call(this);

          this.updateState();
          SoundStateChangedSignal.inst.addListener(this.updateState, this);
        };

        _proto.onTouchEnd = function onTouchEnd() {
          var vol = AudioController.inst.MusicVolume;

          if (vol > 0) {
            AudioController.inst.setEffectVolume(0);
            AudioController.inst.setMusicVolume(0);
          } else {
            AudioController.inst.setEffectVolume(1);
            AudioController.inst.setMusicVolume(1);
          }

          SoundStateChangedSignal.inst.dispatch();
        };

        _proto.updateState = function updateState() {
          var vol = AudioController.inst.MusicVolume;

          if (vol > 0) {
            this.Sprite.spriteFrame = ResourceController.inst.getSoundEnable();
          } else {
            this.Sprite.spriteFrame = ResourceController.inst.getSoundDisabled();
          }
        };

        _createClass(SoundButtonView, [{
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

System.register("chunks:///_virtual/SimpleCommand.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "583e4ZqIPZIP4QkHW8PKIta", "SimpleCommand", undefined);

      var BaseCommand = exports('BaseCommand', /*#__PURE__*/function () {
        function BaseCommand() {}

        var _proto = BaseCommand.prototype;

        _proto.excute = function excute(body) {};

        return BaseCommand;
      }());
      var SimpleCommand = exports('SimpleCommand', /*#__PURE__*/function (_BaseCommand) {
        _inheritsLoose(SimpleCommand, _BaseCommand);

        function SimpleCommand() {
          return _BaseCommand.apply(this, arguments) || this;
        }

        return SimpleCommand;
      }(BaseCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CompleteView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './GameStateController.ts', './ResourceController.ts', './FireWorkAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, v3, tween, Vec3, Sprite, Component, GameOverSignal, OpenResultLayerSignal, RoundEndType, ResourceController, AnimationType, Title, FireWorkAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      tween = module.tween;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      GameOverSignal = module.GameOverSignal;
      OpenResultLayerSignal = module.OpenResultLayerSignal;
    }, function (module) {
      RoundEndType = module.RoundEndType;
    }, function (module) {
      ResourceController = module.ResourceController;
      AnimationType = module.AnimationType;
      Title = module.Title;
    }, function (module) {
      FireWorkAnimation = module.FireWorkAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "5cd27Zj3mtF95n+3dmdehmD", "CompleteView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CompleteView = exports('CompleteView', (_dec = ccclass("CompleteView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CompleteView, _Component);

        function CompleteView() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = CompleteView.prototype;

        _proto.onLoad = function onLoad() {
          GameOverSignal.inst.addListener(this.onGameOver, this);
          this.Font.node.active = false;
          this.Con && (this.Con.active = false);
          this.node.active = false;
          this.node.scale = v3(1, 1, 1);
        };

        _proto.start = function start() {};

        _proto.onGameOver = function onGameOver(type) {
          this.Font.node.active = true;
          var delay = 1500;
          this.node.active = true;
          this.FireWork.node.active = false;

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
            tween(this.Con).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.05, {
              scale: v3(1, 1, 1)
            }).delay(0.15).to(0.1, v3(1, 1, 1)).start();
          }

          setTimeout(function () {
            OpenResultLayerSignal.inst.dispatch(type);
          }, delay);
        };

        _createClass(CompleteView, [{
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

System.register("chunks:///_virtual/Time.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f955hpCORPk74+xf0XvlSB", "Time", undefined);

      var Time = exports('Time', /*#__PURE__*/function () {
        function Time() {}

        Time.timeFormat = function timeFormat(time) {
          var min = Math.floor(time / 60); //if (min < 10) min = "0" + min;

          var sec = Math.floor(time % 60);
          var secStr = sec.toString();
          if (sec < 10) secStr = "0" + sec;
          return min + ":" + secStr;
        };

        return Time;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadPrefabCommand.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SimpleCommand.ts', './PrefabFactory.ts', './InitialFacade.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, SimpleCommand, PrefabFactory, InitialFacade, STEP;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SimpleCommand = module.SimpleCommand;
    }, function (module) {
      PrefabFactory = module.PrefabFactory;
    }, function (module) {
      InitialFacade = module.InitialFacade;
      STEP = module.STEP;
    }],
    execute: function () {
      cclegacy._RF.push({}, "613ecCCWNlL6bPxnJN/UPo6", "LoadPrefabCommand", undefined);

      var LoadPrefabCommand = exports('LoadPrefabCommand', /*#__PURE__*/function (_SimpleCommand) {
        _inheritsLoose(LoadPrefabCommand, _SimpleCommand);

        function LoadPrefabCommand() {
          return _SimpleCommand.apply(this, arguments) || this;
        }

        var _proto = LoadPrefabCommand.prototype;

        _proto.excute = function excute() {
          InitialFacade.inst.startStep(STEP.Prefab);
          PrefabFactory.inst.init(function () {
            InitialFacade.inst.step(STEP.Prefab);
          });
        };

        return LoadPrefabCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToSingleTon.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('SingleTon', SingleTon);

      cclegacy._RF.push({}, "63dff2MRHZF8qucsyunVOPG", "ToSingleTon", undefined);

      function SingleTon() {
        var ToSingleTon = /*#__PURE__*/function () {
          function ToSingleTon() {}

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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "67086yAVsFPUYPIVnkjGFG8", "LoadingAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadingAnimation = exports('LoadingAnimation', (_dec = ccclass("LoadingAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(LoadingAnimation, _SpriteUIAnimation);

        function LoadingAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        return LoadingAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AddHeartAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation, UpdateHeartCountSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }, function (module) {
      UpdateHeartCountSignal = module.UpdateHeartCountSignal;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "6910bA7uvBOabac/ukKm7F7", "AddHeartAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AddHeartAnimation = exports('AddHeartAnimation', (_dec = ccclass("AddHeartAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(AddHeartAnimation, _SpriteUIAnimation);

        function AddHeartAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = AddHeartAnimation.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
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
        ;

        return AddHeartAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InitialCommand.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './MacroCommand.ts', './LoadAudioCommand.ts', './LoadJsonCommand.ts', './LoadMaterialCommand.ts', './LoadPrefabCommand.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, MacroCommand, LoadAudioCommand, LoadJsonCommand, LoadMaterialCommand, LoadPrefabCommand;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MacroCommand = module.MacroCommand;
    }, function (module) {
      LoadAudioCommand = module.LoadAudioCommand;
    }, function (module) {
      LoadJsonCommand = module.LoadJsonCommand;
    }, function (module) {
      LoadMaterialCommand = module.LoadMaterialCommand;
    }, function (module) {
      LoadPrefabCommand = module.LoadPrefabCommand;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6a508zSDOVLS6ttpTnMOX/h", "InitialCommand", undefined);

      var InitialCommand = exports('InitialCommand', /*#__PURE__*/function (_MacroCommand) {
        _inheritsLoose(InitialCommand, _MacroCommand);

        function InitialCommand() {
          return _MacroCommand.apply(this, arguments) || this;
        }

        var _proto = InitialCommand.prototype;

        _proto.initializeMacroCommand = function initializeMacroCommand() {
          this.addSubCommond(LoadJsonCommand);
          this.addSubCommond(LoadAudioCommand);
          this.addSubCommond(LoadPrefabCommand);
          this.addSubCommond(LoadMaterialCommand);
        };

        return InitialCommand;
      }(MacroCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SingleTouchView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Node, BaseView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      BaseView = module.BaseView;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "6ae4czD7XJJ1pkkxnfN4Nmq", "SingleTouchView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SingleTouchView = exports('SingleTouchView', (_dec = ccclass("SingleTouchView"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(SingleTouchView, _BaseView);

        function SingleTouchView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this._touchid = null;
          return _this;
        }

        var _proto = SingleTouchView.prototype;

        _proto.onLoad = function onLoad() {
          this.node.onSetParent = this._onSetParent.bind(this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        };

        _proto.start = function start() {};

        _proto.touchStart = function touchStart(event) {
          if (this.touchid !== null && this.touchid !== event.getID()) {
            console.log(this.node.name, " touch start  touchid is different! ");
            return;
          }

          this.touchid = event.getID();
          this.onTouchStart(event);
        };

        _proto.touchMove = function touchMove(event) {
          if (this.touchid !== null && this.touchid !== event.getID()) {
            // console.log(this.node.name, " touch move  touchid is different! ");
            return;
          }

          this.touchid = event.getID();
          this.onTouchMove(event);
        };

        _proto.touchEnd = function touchEnd(event) {
          if (this.touchid !== null && this.touchid !== event.getID()) {
            console.log(this.node.name, " touch end  touchid is different! ");
            return;
          }

          this.touchid = null;
          this.onTouchEnd(event);
        };

        _proto.touchCancel = function touchCancel(event) {
          if (this.touchid !== null && this.touchid !== event.getID()) {
            console.log(this.node.name, " touch cancel  touchid is different! ");
            return;
          }

          this.touchid = null;
          this.onTouchCancel(event);
        };

        _proto.onTouchStart = function onTouchStart(event) {};

        _proto.onTouchMove = function onTouchMove(event) {};

        _proto.onTouchEnd = function onTouchEnd(event) {};

        _proto.onTouchCancel = function onTouchCancel(event) {};

        _proto.onSetParent = function onSetParent(parent, oldParent) {};

        _proto._onSetParent = function _onSetParent(parent, oldParent) {
          if (parent == null) {
            this.touchid = null;
          }

          this.onSetParent(parent, oldParent);
        };

        _createClass(SingleTouchView, [{
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

System.register("chunks:///_virtual/ResultAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "6e49bSoebFPF5J6NbKv8gc6", "ResultAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ResultAnimation = exports('ResultAnimation', (_dec = ccclass("ResultAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(ResultAnimation, _SpriteUIAnimation);

        function ResultAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = ResultAnimation.prototype;

        _proto.start = function start() {
          var _this = this;

          this.Interval = 0.06;

          this.onComplete = function () {
            _this.currentIndex = 14;

            _this.updateCurrentFrame();
          };
        };

        return ResultAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GridUtil.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "70435x/0eNDJqPDMkUtLOs0", "GridUtil", undefined);

      var GridRange = exports('GridRange', {
        i: {
          max: 11,
          min: 0
        },
        j: {
          max: 8,
          min: 0
        }
      });
      var GridUtil = exports('GridUtil', /*#__PURE__*/function () {
        function GridUtil() {}

        GridUtil.copyGrid = function copyGrid(origin) {
          return {
            i: origin.i,
            j: origin.j
          };
        }
        /** 获取水平 */
        ;

        GridUtil.GetHorizontalWayByOrigin = function GetHorizontalWayByOrigin(origin) {
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
        ;

        GridUtil.GetVerticalWayByOrigin = function GetVerticalWayByOrigin(origin) {
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
        ;

        GridUtil.GetDiagonalWayByOrigin = function GetDiagonalWayByOrigin(origin) {
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
        ;

        GridUtil.GetSquaredWayByOrigin = function GetSquaredWayByOrigin(origin) {
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
        };

        return GridUtil;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeartBonusAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "7104aQxfEFKeoXHluCHZufO", "HeartBonusAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HeartBonusAnimation = exports('HeartBonusAnimation', (_dec = ccclass("HeartBonusAnimation"), _dec(_class = (_temp = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(HeartBonusAnimation, _SpriteUIAnimation);

        function HeartBonusAnimation() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SpriteUIAnimation.call.apply(_SpriteUIAnimation, [this].concat(args)) || this;
          _this.completeCount = 0;
          return _this;
        }

        var _proto = HeartBonusAnimation.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.play = function play() {
          var _this2 = this;

          this.onComplete = function () {
            _this2.completeCount++;

            if (_this2.completeCount >= 2) {
              _this2.completeCount = 0;

              _SpriteUIAnimation.prototype.stop.call(_this2);

              _this2.scheduleOnce(function () {
                _SpriteUIAnimation.prototype.play.call(_this2);
              }, Math.random() + 1.5);
            } else {
              _SpriteUIAnimation.prototype.play.call(_this2);
            }
          };

          _SpriteUIAnimation.prototype.play.call(this);
        };

        _proto.stop = function stop() {
          this.unscheduleAllCallbacks();

          _SpriteUIAnimation.prototype.stop.call(this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return HeartBonusAnimation;
      }(SpriteUIAnimation), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MenuLayerView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './Signal3.ts', './BaseView.ts', './PlayModel.ts', './GameStateController.ts', './table.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Node, RichText, GetScoreByType, ScoreType, MenuButtonClickSignal, ShowPauseLayerSignal, ButtonClickSignal, GameOverSignal, EndNowSignal, BaseView, PlayModel, GameStateController, En_View, En_ID;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      RichText = module.RichText;
    }, function (module) {
      GetScoreByType = module.GetScoreByType;
      ScoreType = module.ScoreType;
    }, function (module) {
      MenuButtonClickSignal = module.MenuButtonClickSignal;
      ShowPauseLayerSignal = module.ShowPauseLayerSignal;
      ButtonClickSignal = module.ButtonClickSignal;
      GameOverSignal = module.GameOverSignal;
      EndNowSignal = module.EndNowSignal;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      En_View = module.En_View;
      En_ID = module.En_ID;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "7622behYcdBdalJSCiO8nwa", "MenuLayerView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MenuLayerView = exports('MenuLayerView', (_dec = ccclass("MenuLayerView"), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(MenuLayerView, _BaseView);

        function MenuLayerView() {
          return _BaseView.apply(this, arguments) || this;
        }

        var _proto = MenuLayerView.prototype;

        _proto.onLoad = function onLoad() {
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

          _BaseView.prototype.onLoad.call(this);

          this.node.active = false;
        };

        _proto.onShow = function onShow() {
          if (this.node.active) return;

          if (PlayModel.inst.FreePauseCount <= 0) {
            this.Content.string = lan.t(En_View.ZanTingJieMian, En_ID.ZanTingKouFen, ["" + GetScoreByType(ScoreType.PauseCost)]);
          } else {
            this.Content.string = lan.t(En_View.ZanTingJieMian, En_ID.MianFeiZanTing, [PlayModel.inst.FreePauseCount.toString(), "" + GetScoreByType(ScoreType.PauseCost)]);
          }

          this.Show();
          GameStateController.inst.pause();
        };

        _proto.start = function start() {} // update (dt) {}
        ;

        _createClass(MenuLayerView, [{
          key: "Resume",
          get: // LIFE-CYCLE CALLBACKS:
          function get() {
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

System.register("chunks:///_virtual/FireWorkAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "7724fKKz09K66SYobx3BHeq", "FireWorkAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FireWorkAnimation = exports('FireWorkAnimation', (_dec = ccclass("FireWorkAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(FireWorkAnimation, _SpriteUIAnimation);

        function FireWorkAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        return FireWorkAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WildAdButton.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Enum, sys, Vec3, Button, tween, v3, Node, Component, WildButtonReadySignal, WildAdButtonClick, HideWildAdButtonSignal;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      sys = module.sys;
      Vec3 = module.Vec3;
      Button = module.Button;
      tween = module.tween;
      v3 = module.v3;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      WildButtonReadySignal = module.WildButtonReadySignal;
      WildAdButtonClick = module.WildAdButtonClick;
      HideWildAdButtonSignal = module.HideWildAdButtonSignal;
    }],
    execute: function () {
      exports('AdButtonType', void 0);

      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "7775di/1uRObJZuOeiWV/SO", "WildAdButton", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AdButtonType;

      (function (AdButtonType) {
        AdButtonType[AdButtonType["Default"] = 0] = "Default";
      })(AdButtonType || (AdButtonType = exports('AdButtonType', {})));

      var WildAdButton = exports('WildAdButton', (_dec = ccclass("WildAdButton"), _dec2 = property({
        type: Enum(AdButtonType)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WildAdButton, _Component);

        function WildAdButton() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "adType", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = WildAdButton.prototype;

        _proto.onLoad = function onLoad() {
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

            for (var _iterator = _createForOfIteratorHelperLoose(_this2.node.parent.children), _step; !(_step = _iterator()).done;) {
              var child = _step.value;

              if (child.active) {
                _this2.node.parent.active = true;
                break;
              }
            }
          }, this);
        };

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

System.register("chunks:///_virtual/WhiteShotLine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './TableManager.ts', './PrefabFactory.ts', './BallRoot.ts', './Pole.ts', './BallObject.ts', './ResourceController.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, geometry, _decorator, Node, v3, Camera, SphereCollider, math, PhysicsSystem, UITransform, Vec3, Sprite, CylinderCollider, Component, ShotSignal, TableManager, PrefabFactory, BallRoot, UpdateShotLineSignal, Pole, BallObject, ResourceController, GameLogic;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      geometry = module.geometry;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      Camera = module.Camera;
      SphereCollider = module.SphereCollider;
      math = module.math;
      PhysicsSystem = module.PhysicsSystem;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      CylinderCollider = module.CylinderCollider;
      Component = module.Component;
    }, function (module) {
      ShotSignal = module.ShotSignal;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      PrefabFactory = module.PrefabFactory;
    }, function (module) {
      BallRoot = module.BallRoot;
    }, function (module) {
      UpdateShotLineSignal = module.UpdateShotLineSignal;
      Pole = module.Pole;
    }, function (module) {
      BallObject = module.BallObject;
    }, function (module) {
      ResourceController = module.ResourceController;
    }, function (module) {
      GameLogic = module.GameLogic;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "7829dHeV0BEDJticg8p3pRI", "WhiteShotLine", undefined);

      var ray = geometry.ray;
      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WhiteShotLine = exports('WhiteShotLine', (_dec = ccclass("WhiteShotLine"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WhiteShotLine, _Component);

        function WhiteShotLine() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "CameraRoot", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "NormalLine", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = WhiteShotLine.prototype;

        _proto.start = function start() {
          var _this2 = this;

          this.LeftStart.active = CC_DEBUG;
          this.RightStart.active = CC_DEBUG;
          this.CenterStart.active = CC_DEBUG;
          this.HitPoint.active = CC_DEBUG;
          this.TestRayStart.active = CC_DEBUG; // Your initialization goes here.

          UpdateShotLineSignal.inst.addListener(this.updateShotLine, this);
          ShotSignal.inst.addListener(function () {
            // return;
            _this2.node.active = false;
          }, this);
          this.node.active = false;
        }; // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


        _proto.updateShotLine = function updateShotLine(rotation) {
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
        };

        _proto.testShot = function testShot(rotation) {
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
          var raycastResult;
          PhysicsSystem.instance.raycastClosest(centerRay, this.getMask(["Ball", "Border", "BallWhite"]));
          raycastResult = PhysicsSystem.instance.raycastClosestResult.clone();
          hitTest = "Center";
          PhysicsSystem.instance.raycastClosest(rightRay, this.getMask(["Ball", "Border", "BallWhite"]));

          if (PhysicsSystem.instance.raycastClosestResult.distance < raycastResult.distance) {
            hitTest = "Right";
            raycastResult = PhysicsSystem.instance.raycastClosestResult.clone();
          }

          PhysicsSystem.instance.raycastClosest(leftRay, this.getMask(["Ball", "Border", "BallWhite"]));

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
          /** 碰撞球的坐标 */

          var hitBallOrigin = v3();
          /** 会碰撞到球 */

          if (raycastResult.collider instanceof SphereCollider) {
            this.ColorLineRoot.active = true;
            /** 球的半径 */

            var ballRadius = BallRoot.WhiteBall.getComponent(SphereCollider).radius - 0.08;
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
        };

        _proto.getMask = function getMask(groups) {
          var mask = 0x00000000;
          var groupConfig = [{
            index: 1,
            name: "Ball"
          }, {
            index: 2,
            name: "Border"
          }, {
            index: 3,
            name: "BallWhite"
          }, {
            index: 4,
            name: "TutorialChecker"
          }];

          for (var _i = 0, _groupConfig = groupConfig; _i < _groupConfig.length; _i++) {
            var group = _groupConfig[_i];

            if (groups.indexOf(group.name) >= 0) {
              mask |= 2 << group.index - 1;
            }
          }

          if (mask == 0x00000000) {
            mask = 0xffffffff;
          } // mask = 0xffffffff;


          return mask;
        };

        _proto.drawColorLine = function drawColorLine(hitBall, hitNormal) {
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

          for (var _iterator = _createForOfIteratorHelperLoose(this.ColorLineRoot.children), _step; !(_step = _iterator()).done;) {
            var _line = _step.value;
            _line.getComponent(Sprite).spriteFrame = ResourceController.inst.getColorLine(lineName);
          }

          if (GameLogic.inst.isOnTutorial && Pole.HitNormal != null) {
            var testRadian = math.Vec3.angle(v3(1, 0, 0), v3(hitNormal.x, 0, hitNormal.z));
            var rayStart = v3(hitBallWorld.x + Math.cos(testRadian) * 0.3, hitBallWorld.y, hitBallWorld.z - Math.sin(testRadian) * 0.3);
            var testRay = ray.create(rayStart.x, rayStart.y, rayStart.z, hitNormal.x, Pole.PoleForward.y, hitNormal.z);
            var testRayLocal = v3();
            camera.convertToUINode(rayStart, this.node, testRayLocal);
            this.TestRayStart.setPosition(testRayLocal);
            PhysicsSystem.instance.raycastClosest(testRay, this.getMask(["TutorialChecker"]));

            if (PhysicsSystem.instance.raycastClosestResult.collider instanceof CylinderCollider) {
              // if (GameLogic.inst.TutorialStep == TutorialStep.MiniRotatePole) {
              //   console.log(
              //     "OK!!!!!!!!",
              //     PhysicsSystem.instance.raycastClosestResult.collider.name
              //   );
              //   return;
              // }
              GameLogic.inst.TutorialStep++;
            }
          }
        };

        _proto.drawLine = function drawLine() {
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
        };

        _createClass(WhiteShotLine, [{
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
          key: "TestRayStart",
          get: function get() {
            return this.node.getChildByName("TestRayStart");
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
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "NormalLine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ThemeView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './Signal3.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, Theme, GameThemeInit;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Theme = module.Theme;
    }, function (module) {
      GameThemeInit = module.GameThemeInit;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "7ab7fGvUlxM4JJv4dbVsF8P", "ThemeView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ThemeView = exports('ThemeView', (_dec = ccclass("ThemeView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ThemeView, _Component);

        function ThemeView() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ThemeView.prototype;

        _proto.onLoad = function onLoad() {
          GameThemeInit.inst.addListener(this.onThemeInit, this);
        };

        _proto.start = function start() {};

        _proto.onThemeInit = function onThemeInit(theme) {
          this.node.active = this.node.name == Theme[theme];
        };

        return ThemeView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadJsonCommand.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './TableManager.ts', './CelerSDK.ts', './SimpleCommand.ts', './InitialFacade.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, TableManager, CelerSDK, SimpleCommand, InitialFacade, STEP;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      CelerSDK = module.CelerSDK;
    }, function (module) {
      SimpleCommand = module.SimpleCommand;
    }, function (module) {
      InitialFacade = module.InitialFacade;
      STEP = module.STEP;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7be3eOvZ9dEQKofxmmp4yPe", "LoadJsonCommand", undefined);

      var LoadJsonCommand = exports('LoadJsonCommand', /*#__PURE__*/function (_SimpleCommand) {
        _inheritsLoose(LoadJsonCommand, _SimpleCommand);

        function LoadJsonCommand() {
          return _SimpleCommand.apply(this, arguments) || this;
        }

        var _proto = LoadJsonCommand.prototype;

        _proto.excute = function excute() {
          InitialFacade.inst.startStep(STEP.Json);
          TableManager.inst.startLoad("/json", function () {
            InitialFacade.inst.step(STEP.Json);

            if (InitialFacade.CelerFirst) {
              CelerSDK.inst.defineLan();
            }
          });
        };

        return LoadJsonCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainUI.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts', './GameStateController.ts', './TutorialRotation.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Node, Component, BaseSignal, GameStateController, TutorialStep, GameLogic;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      TutorialStep = module.TutorialStep;
    }, function (module) {
      GameLogic = module.GameLogic;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "7bf3erfTGdJMKrA3iroTyrQ", "MainUI", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RotationPoleSignal = exports('RotationPoleSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(RotationPoleSignal, _BaseSignal);

        function RotationPoleSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return RotationPoleSignal;
      }(BaseSignal));
      var MainUI = exports('MainUI', (_dec = ccclass("MainUI"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainUI, _Component);

        function MainUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.scale = 0.2;
          return _this;
        }

        var _proto = MainUI.prototype;

        _proto.start = function start() {
          // Your initialization goes here.
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        };

        _proto.onTouchMoved = function onTouchMoved(e) {
          if (GameLogic.inst.isOnTutorial && GameLogic.inst.TutorialStep != TutorialStep.RotatePole) return;

          if (GameStateController.inst.canInteractive()) {
            RotationPoleSignal.inst.dispatch(this.scale * e.getDeltaX());
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return MainUI;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Vec3, tween, v3, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "7db6dkYS3xMfZur7pasav48", "BaseView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BaseView = exports('BaseView', (_dec = ccclass("BaseView"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseView, _Component);

        function BaseView() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = BaseView.prototype;

        _proto.onLoad = function onLoad() {
          this.node.setScale(Vec3.ZERO);
        };

        _proto.Show = function Show(callback) {
          this.node.active = true;
          tween(this.node).sequence(tween(this.node).to(0.1, {
            scale: v3(1, 1, 1)
          }), tween(this.node).call(function () {
            callback && callback();
          })).start();
        };

        _proto.Hide = function Hide(callback) {
          var _this = this;

          tween(this.node).sequence(tween(this.node).to(0.1, {
            scale: Vec3.ZERO
          }), tween(this.node).call(function () {
            _this.node.active = false;

            if (callback && typeof callback == "function") {
              callback();
            }
          })).start();
        };

        _proto.OnClick = function OnClick() {};

        _proto.BindMedaitor = function BindMedaitor(type) {
          if (this.node.getComponent(type)) {
            console.warn(" this node already has the same component..");
            return null;
          }

          var comp = this.node.addComponent(type);
          if (comp["bind"]) comp["bind"](this);

          if (comp["onRegister"]) {
            comp["onRegister"]();
          }

          return comp;
        };

        _proto.UnbindMedaitor = function UnbindMedaitor(type) {
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
        };

        return BaseView;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrefabView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "7f240qKN99BFpgRBGbutcFN", "PrefabView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PrefabView = exports('PrefabView', (_dec = ccclass("PrefabView"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PrefabView, _Component);

        function PrefabView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.model = null;
          return _this;
        }

        var _proto = PrefabView.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.reuse = function reuse(model) {
          this.model = model;
          this.scheduleOnce(this.onReuse, 0);
        };

        _proto.unuse = function unuse() {
          if (this.model) ;
          this.model = null;
          this.onUnuse();
        };

        _proto.onReuse = function onReuse() {
          console.warn(" should override onReuse.");
        };

        _proto.onUnuse = function onUnuse() {
          console.warn(" should override onUnuse.");
        };

        return PrefabView;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrefabFactory.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ToSingleTon.ts', './HashMap.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, loader, Prefab, instantiate, Component, SingleTon, HashMap;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      loader = module.loader;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      HashMap = module.HashMap;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8271774ET9NtLUyI6ZWf4eK", "PrefabFactory", undefined);

      var ObjPool = /*#__PURE__*/function () {
        function ObjPool(template, initSize, completeHandle) {
          this._pool = [];
          this.totalSize = 0;
          this.initTime = [];
          this.completeHandler = completeHandle;
          this.template = template;
          this.totalSize = initSize;
          this.hashKey = "ObjPool:" + this.template.name + " - " + this.totalSize;
          this.initPool(initSize);
        }

        var _proto = ObjPool.prototype;

        _proto.initPool = function initPool(size, immediately) {
          var _this = this;

          if (immediately === void 0) {
            immediately = false;
          }

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
        };

        _proto.size = function size() {
          return this._pool.length;
        };

        _proto.clear = function clear() {
          var count = this._pool.length;

          for (var i = 0; i < count; ++i) {
            this._pool[i].destroy && this._pool[i].destroy();
          }

          this._pool.length = 0;
        };

        _proto.put = function put(obj) {
          if (obj && this._pool.indexOf(obj) === -1) {
            // Remove from parent, but don't cleanup
            obj.removeFromParent(false); //obj.setParent(null);
            // Invoke pool handler

            var handlers = obj.getComponents(Component);

            for (var _iterator = _createForOfIteratorHelperLoose(handlers), _step; !(_step = _iterator()).done;) {
              var handler = _step.value;

              if (handler && handler.unuse) {
                handler.unuse.apply(handler);
              }
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
        };

        _proto.get = function get() {
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

          for (var _iterator2 = _createForOfIteratorHelperLoose(handlers), _step2; !(_step2 = _iterator2()).done;) {
            var handler = _step2.value;

            if (handler && handler.reuse) {
              handler.reuse.apply(handler, arguments);
            }
          }

          return obj;
        };

        return ObjPool;
      }();

      var PrefabFactory = exports('PrefabFactory', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(PrefabFactory, _SingleTon);

        function PrefabFactory() {
          var _this2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this2 = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this2.count = 0;
          _this2.totalCount = 0;
          _this2.objPool = new HashMap();
          _this2.startTime = 0;
          return _this2;
        }

        var _proto2 = PrefabFactory.prototype;

        _proto2.init = function init(callback, progress) {
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
        };

        _proto2.addObject = function addObject(name, url, count) {
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
        };

        _proto2.addCount = function addCount() {
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
        };

        _proto2.getObj = function getObj(name) {
          if (this.objPool.has(name)) {
            var _ref;

            for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            return (_ref = this.objPool.get(name)).get.apply(_ref, args);
          } else {
            console.error(" objPool dosen't exists this obj:", name);
            return null;
          }
        };

        _proto2.putObj = function putObj(name, node) {
          if (this.objPool.has(name)) {
            return this.objPool.get(name).put(node);
          } else {
            console.error(" objPool dosen't exists this obj:", name);
          }
        };

        return PrefabFactory;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NumberChangedView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, tween, v3, Label, BaseView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      v3 = module.v3;
      Label = module.Label;
    }, function (module) {
      BaseView = module.BaseView;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "86160vnlZBLn7zjppFqtUYn", "NumberChangedView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var NumberChangedView = exports('default', (_dec = ccclass("NumberChangedView"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(NumberChangedView, _BaseView);

        function NumberChangedView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this.num = 0;
          _this.showNum = 0;
          _this.step = 0;
          _this.fixCount = 0;
          _this.isSingle = true;
          _this.isUpperCase = false;
          _this.isSmartFix = false;
          _this.action = true;
          _this.STEP = 60;
          _this.scale = 1;
          _this.maxNumber = 0;
          _this.preFix = "";
          return _this;
        }

        var _proto = NumberChangedView.prototype;

        _proto.setNumber = function setNumber(val) {
          return;
        };

        _proto.onLoad = function onLoad() {};

        _proto.start = function start() {};

        _proto.onStep = function onStep(step) {};

        _proto.onNumberChanged = function onNumberChanged(num, callback) {
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
        };

        _proto.update = function update(dt) {
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
            return;
          } else {
            return;
          }
        };

        _createClass(NumberChangedView, [{
          key: "Label",
          get: function get() {
            return this.label ? this.label : this.label = this.node.getComponent(Label);
          }
        }]);

        return NumberChangedView;
      }(BaseView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraAdaption.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, v3, view, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      view = module.view;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "89ee3s1GqhJf575oa7aEcuZ", "CameraAdaption", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CameraAdaption = exports('CameraAdaption', (_dec = ccclass("CameraAdaption"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraAdaption, _Component);

        function CameraAdaption() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.defaultY = 0;
          return _this;
        }

        var _proto = CameraAdaption.prototype;

        _proto.start = function start() {
          this.node.setPosition(v3(0, 10, -0.343)); // this.defaultY = this.node.position.y;
          // if (sys.isMobile) {
          //   window.addEventListener("resize", this.onResize.bind(this));
          // } else {
          //   view.on("canvas-resize", this.onResize, this);
          // }
          // this.onResize();
        };

        _proto.onResize = function onResize() {
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
        ;

        return CameraAdaption;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlyAdCnicornAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "8cfecG9Tl9Ffa+3gHbpMJrH", "FlyAdCnicornAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FlyAdCnicornAnimation = exports('FlyAdCnicornAnimation', (_dec = ccclass("FlyAdCnicornAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(FlyAdCnicornAnimation, _SpriteUIAnimation);

        function FlyAdCnicornAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        return FlyAdCnicornAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MaterialFactory.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ToSingleTon.ts', './HashMap.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, loader, Material, SingleTon, HashMap;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      loader = module.loader;
      Material = module.Material;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      HashMap = module.HashMap;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8f81bDlvIFAo79lBq3LDIyI", "MaterialFactory", undefined);

      var MaterialFactory = exports('MaterialFactory', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(MaterialFactory, _SingleTon);

        function MaterialFactory() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this.materials = new HashMap();
          return _this;
        }

        var _proto = MaterialFactory.prototype;

        _proto.init = function init(callback) {
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
        };

        _proto.getMaterial = function getMaterial(name) {
          return this.materials.get(name);
        };

        return MaterialFactory;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TrickShotLightAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "8f837JIGfZAJJf5ZzjWKRmV", "TrickShotLightAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TrickShotLightAnimation = exports('TrickShotLightAnimation', (_dec = ccclass("TrickShotLightAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(TrickShotLightAnimation, _SpriteUIAnimation);

        function TrickShotLightAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = TrickShotLightAnimation.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// Your initialization goes here.
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return TrickShotLightAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameRule.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        EasyMode: EasyMode,
        GetFreePauseCount: GetFreePauseCount,
        GetScoreByType: GetScoreByType,
        GetScoreRatio: GetScoreRatio,
        GetTotalHeartCount: GetTotalHeartCount,
        GetTotalTime: GetTotalTime,
        HoleBonus: void 0,
        RandomTheme: RandomTheme,
        ScoreType: void 0,
        StreakBonusLimit: StreakBonusLimit,
        Theme: void 0
      });

      cclegacy._RF.push({}, "9007elfmZdNrKffJiRadvPn", "GameRule", undefined);

      var Theme;
      /** 得分类型 */

      (function (Theme) {
        Theme[Theme["Green"] = 0] = "Green";
        Theme[Theme["Blue"] = 1] = "Blue";
        Theme[Theme["Red"] = 2] = "Red";
        Theme[Theme["Purple"] = 3] = "Purple";
      })(Theme || (Theme = exports('Theme', {})));

      var ScoreType;

      (function (ScoreType) {
        ScoreType[ScoreType["PauseCost"] = 0] = "PauseCost";
        ScoreType[ScoreType["Pocket"] = 1] = "Pocket";
        ScoreType[ScoreType["Rebound"] = 2] = "Rebound";
        ScoreType[ScoreType["Multip"] = 3] = "Multip";
        ScoreType[ScoreType["Link"] = 4] = "Link";
        ScoreType[ScoreType["HeartBonus"] = 5] = "HeartBonus";
        ScoreType[ScoreType["NoBust"] = 6] = "NoBust";
      })(ScoreType || (ScoreType = exports('ScoreType', {})));

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

      function GetScoreByType(scoreType, count) {
        if (count === void 0) {
          count = 1;
        }

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
        }

        return score * GetScoreRatio();
      }

      function GetScoreRatio() {
        return 1;
      }

      function EasyMode() {
        return true;
      }

      var HoleBonus;

      (function (HoleBonus) {
        HoleBonus[HoleBonus["x2"] = 2] = "x2";
        HoleBonus[HoleBonus["x3"] = 3] = "x3";
        HoleBonus[HoleBonus["x4"] = 4] = "x4";
        HoleBonus[HoleBonus["x6"] = 6] = "x6";
        HoleBonus[HoleBonus["x8"] = 8] = "x8";
        HoleBonus[HoleBonus["x10"] = 10] = "x10";
      })(HoleBonus || (HoleBonus = exports('HoleBonus', {})));

      function GetTotalHeartCount() {
        return 5;
      }

      function StreakBonusLimit() {
        return CC_DEBUG ? 3 : 3;
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadMaterialCommand.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SimpleCommand.ts', './MaterialFactory.ts', './InitialFacade.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, SimpleCommand, MaterialFactory, InitialFacade, STEP;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SimpleCommand = module.SimpleCommand;
    }, function (module) {
      MaterialFactory = module.MaterialFactory;
    }, function (module) {
      InitialFacade = module.InitialFacade;
      STEP = module.STEP;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9472fLnHtNPYoICW4TEWwMA", "LoadMaterialCommand", undefined);

      var LoadMaterialCommand = exports('LoadMaterialCommand', /*#__PURE__*/function (_SimpleCommand) {
        _inheritsLoose(LoadMaterialCommand, _SimpleCommand);

        function LoadMaterialCommand() {
          return _SimpleCommand.apply(this, arguments) || this;
        }

        var _proto = LoadMaterialCommand.prototype;

        _proto.excute = function excute() {
          InitialFacade.inst.startStep(STEP.Material);
          MaterialFactory.inst.init(function () {
            InitialFacade.inst.step(STEP.Material);
          });
        };

        return LoadMaterialCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResultLayerView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './Signal3.ts', './BaseView.ts', './PlayModel.ts', './GameStateController.ts', './CelerSDK.ts', './table.ts', './AudioManager.ts', './ResourceController.ts', './GameLogic.ts', './ResultAnimation.ts', './NumberChangedView.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, SpriteAtlas, v3, Label, tween, Sprite, RichText, Node, ScoreType, OpenResultLayerSignal, ShowSubmitSignal, ScoreCountingSignal, BaseView, PlayModel, RoundEndType, CelerSDK, En_View, En_ID, AudioController, Title, GameLogic, ResultAnimation, NumberChangedView;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteAtlas = module.SpriteAtlas;
      v3 = module.v3;
      Label = module.Label;
      tween = module.tween;
      Sprite = module.Sprite;
      RichText = module.RichText;
      Node = module.Node;
    }, function (module) {
      ScoreType = module.ScoreType;
    }, function (module) {
      OpenResultLayerSignal = module.OpenResultLayerSignal;
      ShowSubmitSignal = module.ShowSubmitSignal;
      ScoreCountingSignal = module.ScoreCountingSignal;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      RoundEndType = module.RoundEndType;
    }, function (module) {
      CelerSDK = module.CelerSDK;
    }, function (module) {
      En_View = module.En_View;
      En_ID = module.En_ID;
    }, function (module) {
      AudioController = module.AudioController;
    }, function (module) {
      Title = module.Title;
    }, function (module) {
      GameLogic = module.GameLogic;
    }, function (module) {
      ResultAnimation = module.ResultAnimation;
    }, function (module) {
      NumberChangedView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "94ab2SctrtJ97pzOWo8Ldy3", "ResultLayerView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ResultLayerView = exports('ResultLayerView', (_dec = ccclass("ResultLayerView"), _dec2 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(ResultLayerView, _BaseView);

        function ResultLayerView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this.CountTotal = 4;

          _initializerDefineProperty(_this, "ResultAtlas", _descriptor, _assertThisInitialized(_this));

          _this.count = 0;
          return _this;
        }

        var _proto = ResultLayerView.prototype;

        _proto.onLoad = function onLoad() {
          this.node.active = false;
          this.node.scale = v3(1, 1, 1);
          OpenResultLayerSignal.inst.addListener(this.onGameOver, this);
          this.Ani.Sprite.color.a = 0;
        } // update() {
        //   console.log(this.Ani.node.scale);
        // }
        ;

        _proto.onGameOver = function onGameOver(type) {
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

          for (var _iterator = _createForOfIteratorHelperLoose(this.ScaleRoot.children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.getComponent(Label).string = GameLogic.inst.scaleMap[parseInt(child.name)] || "x0";
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
        };

        _proto.showInfo = function showInfo() {
          var _this3 = this;

          this.Count = 0;
          this.TotalScore.STEP = 100;
          this.TimeBonus.STEP = 100;
          this.Score.STEP = 100;
          this.TrickScore.STEP = 100;
          this.Ani.play();
          AudioController.inst.playEffect("result_ani");

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
        };

        _createClass(ResultLayerView, [{
          key: "Root",
          get: // LIFE-CYCLE CALLBACKS:

          /** 根节点 */
          function get() {
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

System.register("chunks:///_virtual/App.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './PlayModel.ts', './InitialFacade.ts', './ResourceController.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Material, SpriteAtlas, Node, PhysicsSystem, v3, setDisplayStats, Component, PlayModel, InitialFacade, ResourceController, AnimationType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
      SpriteAtlas = module.SpriteAtlas;
      Node = module.Node;
      PhysicsSystem = module.PhysicsSystem;
      v3 = module.v3;
      setDisplayStats = module.setDisplayStats;
      Component = module.Component;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      InitialFacade = module.InitialFacade;
    }, function (module) {
      ResourceController = module.ResourceController;
      AnimationType = module.AnimationType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

      cclegacy._RF.push({}, "95f2biD1FxLxYns3Xsv3c7f", "App", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var App = exports('App', (_dec = ccclass("App"), _dec2 = property(Material), _dec3 = property(SpriteAtlas), _dec4 = property(SpriteAtlas), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(App, _Component);

        function App() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "Test", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UI", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Effect", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "HeartIcon", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = App.prototype;

        _proto.start = function start() {
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
          setDisplayStats(!CELER_X);
        };

        _proto.update = function update(deltaTime) {
          PlayModel.inst.addGameTime(-deltaTime);
        };

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

System.register("chunks:///_virtual/GlobalSingleTouchMediator.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './GameStateController.ts', './SingleTouchMediator.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, ShowTipSignal, GameStateController, SingleTouchMediator;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ShowTipSignal = module.ShowTipSignal;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      SingleTouchMediator = module.SingleTouchMediator;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "9e22fsqeiNA6brU2JjHGngm", "GlobalSingleTouchMediator", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GlobalSingleTouchMediator = exports('GlobalSingleTouchMediator', (_dec = ccclass("GlobalSingleTouchMediator"), _dec(_class = (_temp = /*#__PURE__*/function (_SingleTouchMediator) {
        _inheritsLoose(GlobalSingleTouchMediator, _SingleTouchMediator);

        function GlobalSingleTouchMediator() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTouchMediator.call.apply(_SingleTouchMediator, [this].concat(args)) || this;
          _this.time = 0;
          return _this;
        }

        var _proto = GlobalSingleTouchMediator.prototype;

        _proto.onRegister = function onRegister() {
          _SingleTouchMediator.prototype.onRegister.call(this);

          this.node.eventProcessor.touchListener["swallowTouches"] = false;
        };

        _proto.onTouchStart = function onTouchStart(event) {
          if (GameStateController.inst.canStart() && GameStateController.inst.isRoundStart() == false) {
            GameStateController.inst.roundStart();
          }

          this.time = 0;
        };

        _proto.onTouchMove = function onTouchMove(event) {
          this.time = 0;
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          this.time = 0;
        };

        _proto.onTouchCancel = function onTouchCancel(event) {
          this.time = 0;
        };

        _proto.update = function update(dt) {
          this.time += dt;

          if (this.time >= 3) {
            this.time = 0;
            ShowTipSignal.inst.dispatch();
          }
        };

        return GlobalSingleTouchMediator;
      }(SingleTouchMediator), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MacroCommand.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SimpleCommand.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, BaseCommand;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseCommand = module.BaseCommand;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a464cRqnHZJFqe/UY6Xh9WQ", "MacroCommand", undefined);

      var MacroCommand = exports('MacroCommand', /*#__PURE__*/function (_BaseCommand) {
        _inheritsLoose(MacroCommand, _BaseCommand);

        function MacroCommand() {
          var _this;

          _this = _BaseCommand.call(this) || this;
          _this.commands = [];

          _this.initializeMacroCommand();

          return _this;
        }

        var _proto = MacroCommand.prototype;

        _proto.initializeMacroCommand = function initializeMacroCommand() {};

        _proto.addSubCommond = function addSubCommond(command) {
          this.commands.push(new command());
        };

        _proto.excute = function excute(body) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.commands), _step; !(_step = _iterator()).done;) {
            var subCommand = _step.value;
            subCommand.excute(body);
          }

          this.commands.length = 0;
        };

        return MacroCommand;
      }(BaseCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EaseBaseView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, v3, math, BaseView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      math = module.math;
    }, function (module) {
      BaseView = module.BaseView;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "a702e+JokpAlrV9ych6GQz4", "EaseBaseView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EaseBaseView = exports('EaseBaseView', (_dec = ccclass("EaseBaseView"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(EaseBaseView, _BaseView);

        function EaseBaseView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this.targetVal = v3(0, 0, 0);
          _this.startTime = 0;
          _this.lastTime = 0;
          _this.completeCallback = null;
          _this.callOnStart = false;
          return _this;
        }

        var _proto = EaseBaseView.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.start = function start() {};

        _proto.onStart = function onStart() {};

        _proto.end = function end() {
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
        ;

        _proto.startUpdate = function startUpdate(targetVal, lastTime, callback, delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }

          this.callOnStart = false;
          this.targetVal = targetVal;
          this.startTime = Date.now() + delayTime * 1000;
          this.lastTime = lastTime * 1000;
          this.completeCallback = callback;
        };

        _proto.complete = function complete() {
          this.startTime = this.lastTime = 0;

          if (this.completeCallback) {
            var callback = this.completeCallback;
            this.completeCallback = null;
            callback();
          }
        };

        _proto.clear = function clear() {
          this.startTime = this.lastTime = 0;
        };

        _proto.update = function update(dt) {
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
        };

        _proto.canStart = function canStart() {
          return Date.now() >= this.startTime && this.startTime != 0;
        };

        _proto.isComplete = function isComplete() {
          return Date.now() >= this.startTime + this.lastTime;
        };

        _proto.canUpdate = function canUpdate() {
          console.error("you should override this method.");
          return true;
        };

        _proto.onStep = function onStep() {};

        _proto.onComplete = function onComplete() {};

        _proto.ease = function ease(startVal, endVal) {
          if (this.lastTime <= 0) {
            return endVal;
          }

          var spendTime = Date.now() - this.startTime;
          return (endVal - startVal) * spendTime / this.lastTime + startVal;
        };

        _createClass(EaseBaseView, [{
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

System.register("chunks:///_virtual/SingleTouchMediator.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Node, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "a8cb4DReGdLxalUY3r9Gu66", "SingleTouchMediator", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SingleTouchMediator = exports('SingleTouchMediator', (_dec = ccclass("SingleTouchMediator"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SingleTouchMediator, _Component);

        function SingleTouchMediator() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._touchid = null;
          return _this;
        }

        var _proto = SingleTouchMediator.prototype;

        _proto.bind = function bind(view) {
          this.view = view;
        };

        _proto.onRegister = function onRegister() {
          this.node.targetOff(this);
          this.node.onSetParent = this._onSetParent.bind(this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        };

        _proto.onUnregister = function onUnregister() {
          this.node.targetOff(this);
        };

        _proto.touchStart = function touchStart(event) {
          if (this.touchid !== null && this.touchid !== event.getID()) {
            console.log(this.node.name, " touch start  touchid is different: ", this.touchid, event.getID());
            event.propagationStopped = true;
            return;
          }

          this.touchid = event.getID();
          this.onTouchStart(event);
        };

        _proto.touchMove = function touchMove(event) {
          if (this.touchid !== null && this.touchid !== event.getID()) {
            //console.log(this.node.name, " touch move  touchid is different! ");
            event.propagationStopped = true;
            return;
          }

          this.touchid = event.getID();
          this.onTouchMove(event);
        };

        _proto.touchEnd = function touchEnd(event) {
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
        };

        _proto.touchCancel = function touchCancel(event) {
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
        };

        _proto.OnClick = function OnClick() {};

        _proto.onTouchStart = function onTouchStart(event) {};

        _proto.onTouchMove = function onTouchMove(event) {};

        _proto.onTouchEnd = function onTouchEnd(event) {};

        _proto.onTouchCancel = function onTouchCancel(event) {};

        _proto.onSetParent = function onSetParent(parent, oldParent) {};

        _proto._onSetParent = function _onSetParent(parent, oldParent) {
          if (parent == null) {
            this.touchid = null;
          }

          this.onSetParent(parent, oldParent);
        };

        _createClass(SingleTouchMediator, [{
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

System.register("chunks:///_virtual/PocketEffectRoot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameLogic.ts', './TrickShotLightAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, v3, Tween, tween, Component, PocketScoredSignal, ShotType, TrickShotLightAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      PocketScoredSignal = module.PocketScoredSignal;
      ShotType = module.ShotType;
    }, function (module) {
      TrickShotLightAnimation = module.TrickShotLightAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a8ddcAh97VC47ofaEu26kWv", "PocketEffectRoot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PocketEffectRoot = exports('PocketEffectRoot', (_dec = ccclass("PocketEffectRoot"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PocketEffectRoot, _Component);

        function PocketEffectRoot() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = PocketEffectRoot.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          // Your initialization goes here.
          for (var _iterator = _createForOfIteratorHelperLoose(this.node.children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.active = false;
          }

          PocketScoredSignal.inst.addListener(this.onPocketScored, this);
        };

        _proto.onPocketScored = function onPocketScored(type, name) {
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
        ;

        return PocketEffectRoot;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/3DRootAdaption.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, v3, sys, view, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      sys = module.sys;
      view = module.view;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "aa31472lZdECrfZejsuysbk", "3DRootAdaption", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DRootAdaption = exports('DRootAdaption', (_dec = ccclass("DRootAdaption"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DRootAdaption, _Component);

        function DRootAdaption() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.defalultScale = v3(0, 0, 0);
          return _this;
        }

        var _proto = DRootAdaption.prototype;

        _proto.start = function start() {
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
        };

        _proto.onResize = function onResize() {
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
        ;

        return DRootAdaption;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SliderView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Random.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Slider, UITransform, Component, Random;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Slider = module.Slider;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      Random = module.Random;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "aebb3v33IxMgrh7r+6GK1cN", "SliderView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SliderView = exports('SliderView', (_dec = ccclass("SliderView"), _dec2 = property(Node), _dec3 = property(Slider), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SliderView, _Component);

        function SliderView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "Progress", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Slider", _descriptor2, _assertThisInitialized(_this));

          _this.totalLength = 0;
          return _this;
        }

        var _proto = SliderView.prototype;

        _proto.onLoad = function onLoad() {
          this.Slider.node.on("slide", this.onSlided, this);
          this.totalLength = this.Progress.getComponent(UITransform).width;
          this.Slider.node.getComponent(UITransform).width = this.totalLength;
        };

        _proto.onSlided = function onSlided() {
          this.Progress.getComponent(UITransform).width = this.totalLength * this.Slider.progress;

          if (this.onProgress) {
            this.onProgress(this.Slider.progress);
          }
        };

        _proto.start = function start() {};

        _proto.onProgress = function onProgress(percent) {} // update (dt) {}
        ;

        _createClass(SliderView, [{
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

System.register("chunks:///_virtual/HelpButtonView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './SingleTouchView.ts', './GameStateController.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, ShowHelpLayerSignal, ButtonClickSignal, SingleTouchView, GameStateController;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ShowHelpLayerSignal = module.ShowHelpLayerSignal;
      ButtonClickSignal = module.ButtonClickSignal;
    }, function (module) {
      SingleTouchView = module.SingleTouchView;
    }, function (module) {
      GameStateController = module.GameStateController;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "b0ed0PZGBtGV7tX6v1tD9Ct", "HelpButtonView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HelpButtonView = exports('HelpButtonView', (_dec = ccclass("HelpButtonView"), _dec(_class = /*#__PURE__*/function (_SingleTouchView) {
        _inheritsLoose(HelpButtonView, _SingleTouchView);

        function HelpButtonView() {
          return _SingleTouchView.apply(this, arguments) || this;
        }

        var _proto = HelpButtonView.prototype;

        _proto.onTouchEnd = function onTouchEnd() {
          if (GameStateController.inst.isGameOver()) return;
          ShowHelpLayerSignal.inst.dispatch();
          ButtonClickSignal.inst.dispatch();
        };

        return HelpButtonView;
      }(SingleTouchView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PositionView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './EaseBaseView.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Vec3, v3, EaseBaseView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      v3 = module.v3;
    }, function (module) {
      EaseBaseView = module.EaseBaseView;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "b137aIFdPBEaIBagR/JHpiX", "PositionView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PositionView = exports('PositionView', (_dec = ccclass("PositionView"), _dec(_class = (_temp = /*#__PURE__*/function (_EaseBaseView) {
        _inheritsLoose(PositionView, _EaseBaseView);

        function PositionView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _EaseBaseView.call.apply(_EaseBaseView, [this].concat(args)) || this;
          _this.startPos = Vec3.ZERO;
          return _this;
        }

        var _proto = PositionView.prototype;

        _proto.canUpdate = function canUpdate() {
          return true;
        };

        _proto.onLoad = function onLoad() {
          if (CC_DEBUG && this.node.name == "TestNode") {
            window["testPosition"] = this.onPositionChanged.bind(this);
          }
        };

        _proto.start = function start() {};

        _proto.onPositionChanged = function onPositionChanged(targetPos, lastTime, callback, delay) {
          if (delay === void 0) {
            delay = 0;
          }

          this.startPos = this.node.position.clone();
          this.startUpdate(v3(targetPos.x, targetPos.y, targetPos.z), lastTime, callback, delay);
        };

        _proto.onStep = function onStep() {
          this.node.setPosition(this.ease(this.startPos.x, this.Target.x), this.ease(this.startPos.y, this.Target.y), this.ease(this.startPos.z, this.Target.z));
        };

        _proto.onComplete = function onComplete() {
          this.node.setPosition(v3(this.Target.x, this.Target.y, this.Target.z));
        };

        _createClass(PositionView, [{
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

System.register("chunks:///_virtual/PlayModel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './ToSingleTon.ts', './Signal3.ts', './FlyCnicornAd.ts', './Random.ts', './Level.ts', './MenuButtonView.ts', './GameStateController.ts', './CelerSDK.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, math, GetFreePauseCount, GetScoreByType, ScoreType, GetTotalTime, Theme, SingleTon, StartCountSignal, UpdateTimeNumber, TimeAnimationStateChanged, ShowFlyCnicornSignal, EndNowSignal, PLayerScoreInitSignal, PlayerScoreChanged, GameStartSignal, GamePrepareSignal, GameThemeInit, FlyCnicornAd, Random, Level, MenuButtonView, GameStateController, RoundEndType, CelerSDK, GameLogic;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
    }, function (module) {
      GetFreePauseCount = module.GetFreePauseCount;
      GetScoreByType = module.GetScoreByType;
      ScoreType = module.ScoreType;
      GetTotalTime = module.GetTotalTime;
      Theme = module.Theme;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      StartCountSignal = module.StartCountSignal;
      UpdateTimeNumber = module.UpdateTimeNumber;
      TimeAnimationStateChanged = module.TimeAnimationStateChanged;
      ShowFlyCnicornSignal = module.ShowFlyCnicornSignal;
      EndNowSignal = module.EndNowSignal;
      PLayerScoreInitSignal = module.PLayerScoreInitSignal;
      PlayerScoreChanged = module.PlayerScoreChanged;
      GameStartSignal = module.GameStartSignal;
      GamePrepareSignal = module.GamePrepareSignal;
      GameThemeInit = module.GameThemeInit;
    }, function (module) {
      FlyCnicornAd = module.FlyCnicornAd;
    }, function (module) {
      Random = module.Random;
    }, function (module) {
      Level = module.Level;
    }, function (module) {
      MenuButtonView = module.MenuButtonView;
    }, function (module) {
      GameStateController = module.GameStateController;
      RoundEndType = module.RoundEndType;
    }, function (module) {
      CelerSDK = module.CelerSDK;
    }, function (module) {
      GameLogic = module.GameLogic;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b2e2ftHDlpJep6mkwruLmn0", "PlayModel", undefined);

      var PlayModel = exports('PlayModel', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(PlayModel, _SingleTon);

        function PlayModel() {
          var _this;

          _this = _SingleTon.call(this) || this;
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

        var _proto = PlayModel.prototype;

        _proto.addGameTime = function addGameTime(dt) {
          if (GameStateController.inst.isPause() || GameStateController.inst.isRoundStart() == false || GameLogic.inst.isOnTutorial) {
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
        };

        _proto.bindSignal = function bindSignal() {
          EndNowSignal.inst.addListener(this.onEndNow, this);
        };

        _proto.getTotalScore = function getTotalScore() {
          return this.TotalScore;
        };

        _proto.setTotalTime = function setTotalTime(time) {
          this.Time = time;
          UpdateTimeNumber.inst.dispatch(this.Time);
        };

        _proto.addPauseCount = function addPauseCount() {
          if (GameLogic.inst.isOnTutorial) return;
          this.pauseCount++;
          console.log("pause count:", this.pauseCount);

          if (this.pauseCount > GetFreePauseCount()) {
            this.addPlayerScore(-GetScoreByType(ScoreType.PauseCost), ScoreType.PauseCost, MenuButtonView.Node);
          }
        };

        _proto.resetCombo = function resetCombo() {
          this.streak = 0;
        };

        _proto.clearScore = function clearScore() {
          this.playerScore = 0;
          this.playerScoreMap = {};
          PlayModel.inst.setTotalTime(GetTotalTime());
          PLayerScoreInitSignal.inst.dispatch(this.playerScore);
        };

        _proto.addPlayerScore = function addPlayerScore(score, type, fromNode, delay) {
          if (fromNode === void 0) {
            fromNode = null;
          }

          if (delay === void 0) {
            delay = 0;
          }

          if (math.approx(score, 0, 0.001)) return 0;
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
        };

        _proto.addStreak = function addStreak() {
          this.streak++;
          this.totalStreak++;
          this.maxStreak = Math.max(this.maxStreak, this.streak);
        };

        _proto.checkCompleteScore = function checkCompleteScore() {};

        _proto.getScoreByType = function getScoreByType(type) {
          if (typeof this.playerScoreMap[type] != "number") return 0;
          return this.playerScoreMap[type];
        };

        _proto.gameReadyShow = function gameReadyShow() {
          GameStateController.inst.isReady = true;
          GameStartSignal.inst.dispatch();
          console.log("gameReadyToStart");
        };

        _proto.onEndNow = function onEndNow() {
          console.log(" player end now.");
          this.checkCompleteScore();
          GameStateController.inst.roundEnd(RoundEndType.Over);
        }
        /** 初始化游戏数据 */
        ;

        _proto.initGameData = function initGameData() {
          console.log("init game data.");
          this.Level = 0;
        }
        /**  初始化游戏主题 */
        ;

        _proto.initGametheme = function initGametheme() {
          var pool = Level.GetThemeRandomPool(this.Level);
          this.Theme = pool[Math.floor(Random.getRandom() * pool.length)];
        };

        _proto.init = function init() {
          GamePrepareSignal.inst.dispatch();
          this.initGametheme();
          this.initGameData();
          GameLogic.inst.initLevel();
          GameLogic.inst.initHoleBonus();

          if (CelerSDK.inst.isNew()) {
            GameLogic.inst.isOnTutorial = true;
          } else {
            GameLogic.inst.initBalls();
          }

          GameLogic.inst.gameReady();
        };

        _createClass(PlayModel, [{
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

System.register("chunks:///_virtual/ResourceController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './ToSingleTon.ts', './HashMap.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, HoleBonus, SingleTon, HashMap;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      HoleBonus = module.HoleBonus;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      HashMap = module.HashMap;
    }],
    execute: function () {
      exports('AnimationType', void 0);

      var _HoleBonusSprite;

      cclegacy._RF.push({}, "badf8Fh2FtCWJXVje31ksyE", "ResourceController", undefined);

      var Title = exports('Title', {
        Complete: "bg_font3",
        CompleteAni: "font_complete",
        TimeUp: "bg_font1",
        Over: "bg_font2",
        OutOfMove: "bg_font2"
      });
      var PauseFont = exports('PauseFont', {
        HasFree: "bg_fontfree",
        NoneFree: "bg_fontnofree"
      });
      var FontType = exports('FontType', {
        TotalScore: "totalScore",
        ResultScore: "resultScore",
        TimeWhite: "TimeWhite",
        TimeRed: "TimeRed",
        AddScore: "addScore",
        SubScore: "subScore",
        ShowScore: "showScore"
      });
      var HoleBonusSprite = exports('HoleBonusSprite', (_HoleBonusSprite = {}, _HoleBonusSprite[HoleBonus.x10] = "font_x10yellow", _HoleBonusSprite[HoleBonus.x2] = "font_x2", _HoleBonusSprite[HoleBonus.x3] = "font_x3", _HoleBonusSprite[HoleBonus.x4] = "font_x4", _HoleBonusSprite[HoleBonus.x6] = "font_x6", _HoleBonusSprite[HoleBonus.x8] = "font_x8", _HoleBonusSprite));
      var AnimationType;

      (function (AnimationType) {
        AnimationType[AnimationType["UI"] = 0] = "UI";
        AnimationType[AnimationType["GamePlay"] = 1] = "GamePlay";
      })(AnimationType || (AnimationType = exports('AnimationType', {})));

      var ResourceController = exports('ResourceController', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(ResourceController, _SingleTon);

        function ResourceController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this.fontMap = new HashMap();
          _this.UIAtlas = null;
          _this.ResultAtlas = null;
          _this.PauseAtlas = null;
          _this.Animations = new HashMap();
          return _this;
        }

        var _proto = ResourceController.prototype;

        _proto.setFont = function setFont(key, font) {
          this.fontMap.add(key, font);
        };

        _proto.setAtlas = function setAtlas(atlas) {
          console.assert(atlas != null, "game atlas is null!");
          this.UIAtlas = atlas;
        };

        _proto.setResultAtlas = function setResultAtlas(atlas) {
          console.assert(atlas != null, "game atlas is null!");
          this.ResultAtlas = atlas;
        };

        _proto.setPauseAtlas = function setPauseAtlas(atlas) {
          console.assert(atlas != null, "game atlas is null!");
          this.PauseAtlas = atlas;
        };

        _proto.getTitleSprite = function getTitleSprite(name) {
          return this.UIAtlas.getSpriteFrame(name);
        };

        _proto.getResultSprite = function getResultSprite(name) {
          return this.ResultAtlas.getSpriteFrame(name);
        };

        _proto.getAltas = function getAltas(name) {
          return this.UIAtlas.getSpriteFrame(name);
        };

        _proto.getColorLine = function getColorLine(name) {
          return this.UIAtlas.getSpriteFrame(name);
        };

        _proto.getHoleBonus = function getHoleBonus(bonus) {
          return this.UIAtlas.getSpriteFrame(HoleBonusSprite[bonus]);
        };

        _proto.getPauseAtlas = function getPauseAtlas(name) {
          return this.PauseAtlas.getSpriteFrame(name);
        };

        _proto.pushAnimationAtlas = function pushAnimationAtlas(animationType, atlas) {
          console.assert(atlas != null, "animation atlas is null!");
          this.Animations.add(animationType, atlas);
        };

        _proto.getAnimationAtlas = function getAnimationAtlas(animationType, name) {
          return this.Animations.get(animationType).getSpriteFrame(name);
        };

        _proto.getAddScoreFont = function getAddScoreFont() {
          return this.fontMap.get(FontType.AddScore);
        };

        _proto.getSubScoreFont = function getSubScoreFont() {
          return this.fontMap.get(FontType.SubScore);
        };

        _proto.getSoundDisabled = function getSoundDisabled() {
          return this.PauseAtlas.getSpriteFrame("btn_nosound");
        };

        _proto.getSoundEnable = function getSoundEnable() {
          return this.PauseAtlas.getSpriteFrame("btn_sound");
        };

        _proto.getPauseFont = function getPauseFont(name) {
          return this.PauseAtlas.getSpriteFrame(name);
        };

        _proto.getTimeRedFont = function getTimeRedFont() {
          return this.fontMap.get(FontType.TimeRed);
        };

        _proto.getTimeWhiteFont = function getTimeWhiteFont() {
          return this.fontMap.get(FontType.TimeWhite);
        };

        return ResourceController;
      }(SingleTon()));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScoreLabelView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './Cocos.ts', './PlayModel.ts', './PrefabFactory.ts', './NumberChangedView.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, v3, tween, PlayerScoreChanged, PLayerScoreInitSignal, ConvertToNodeSpaceAR, Distance, PlayModel, PrefabFactory, NumberChangedView;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      v3 = module.v3;
      tween = module.tween;
    }, function (module) {
      PlayerScoreChanged = module.PlayerScoreChanged;
      PLayerScoreInitSignal = module.PLayerScoreInitSignal;
    }, function (module) {
      ConvertToNodeSpaceAR = module.ConvertToNodeSpaceAR;
      Distance = module.Distance;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      PrefabFactory = module.PrefabFactory;
    }, function (module) {
      NumberChangedView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "bc256d31IhPe6vDcFgy797C", "ScoreLabelView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ScoreLabelView = exports('ScoreLabelView', (_dec = ccclass("ScoreLabelView"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_NumberChangedView) {
        _inheritsLoose(ScoreLabelView, _NumberChangedView);

        function ScoreLabelView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _NumberChangedView.call.apply(_NumberChangedView, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "ScoreFloatRoot", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ScoreLabelView.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          PlayerScoreChanged.inst.addListener(this.onScoreChanged, this);
          PLayerScoreInitSignal.inst.addListener(function (score) {
            _this2.setNumber(score);
          }, this);
        };

        _proto.onScoreChanged = function onScoreChanged(score, changed, node, delay) {
          var _this3 = this;

          if (delay === void 0) {
            delay = 0;
          }

          if (this.ScoreFloatRoot == null || node == null) {
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
          tween(scoreLableNode).delay(delay / 1000).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).delay(0.2).to(floatTime, {
            position: targetPos
          }).call(function () {
            PrefabFactory.inst.putObj("AddScore", scoreLableNode);
          }).start();
          setTimeout(function () {
            _this3.onNumberChanged(PlayModel.inst.PlayerScore);
          }, (floatTime + delay + 0.7) * 1000);
        };

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

System.register("chunks:///_virtual/WildAdAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts', './Signal3.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation, WildAdAnimationIsPlaySignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }, function (module) {
      WildAdAnimationIsPlaySignal = module.WildAdAnimationIsPlaySignal;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "be980UzCrJAS7FY3f4VP9QC", "WildAdAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var WildAdAnimation = exports('WildAdAnimation', (_dec = ccclass("WildAdAnimation"), _dec(_class = (_temp = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(WildAdAnimation, _SpriteUIAnimation);

        function WildAdAnimation() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SpriteUIAnimation.call.apply(_SpriteUIAnimation, [this].concat(args)) || this;
          _this.isStart = false;
          return _this;
        }

        var _proto = WildAdAnimation.prototype;

        _proto.onStartPlay = function onStartPlay() {
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
        };

        _proto.onComplete = function onComplete() {
          WildAdAnimationIsPlaySignal.inst.dispatch(false);
        };

        return WildAdAnimation;
      }(SpriteUIAnimation), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeartBrokenAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation, UpdateHeartCountSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }, function (module) {
      UpdateHeartCountSignal = module.UpdateHeartCountSignal;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "c00f9JM4BNOTLsXYYNpKJka", "HeartBrokenAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HeartBrokenAnimation = exports('HeartBrokenAnimation', (_dec = ccclass("HeartBrokenAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(HeartBrokenAnimation, _SpriteUIAnimation);

        function HeartBrokenAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = HeartBrokenAnimation.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          var _this = this; // Your initialization goes here.


          this.Interval = 0.1;
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
        ;

        return HeartBrokenAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TutorialRotation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameLogic.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Component, TutorialStepSignal;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Component = module.Component;
    }, function (module) {
      TutorialStepSignal = module.TutorialStepSignal;
    }],
    execute: function () {
      exports('TutorialStep', void 0);

      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "c061eySVshG84oFw7ABdlCt", "TutorialRotation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /** 引导步骤 */

      var TutorialStep;

      (function (TutorialStep) {
        TutorialStep[TutorialStep["Ready"] = 0] = "Ready";
        TutorialStep[TutorialStep["RotatePole"] = 1] = "RotatePole";
        TutorialStep[TutorialStep["Shot"] = 2] = "Shot";
        TutorialStep[TutorialStep["NormalScore"] = 3] = "NormalScore";
        TutorialStep[TutorialStep["MiniRotatePole"] = 4] = "MiniRotatePole";
        TutorialStep[TutorialStep["TrickShot"] = 5] = "TrickShot";
        TutorialStep[TutorialStep["TrickScore"] = 6] = "TrickScore";
        TutorialStep[TutorialStep["Complete"] = 7] = "Complete";
        TutorialStep[TutorialStep["Suspend"] = 8] = "Suspend";
      })(TutorialStep || (TutorialStep = exports('TutorialStep', {})));

      var TutorialRotation = exports('TutorialRotation', (_dec = ccclass("TutorialRotation"), _dec2 = property({
        type: Enum(TutorialStep)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TutorialRotation, _Component);

        function TutorialRotation() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TutorialRotation.prototype;

        _proto.start = function start() {
          var _this2 = this; // Your initialization goes here.


          this.node.active = false;
          TutorialStepSignal.inst.addListener(function (step) {
            if (step == _this2.type) {
              _this2.node.active = true;
            } else {
              _this2.node.active = false;
            }
          }, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return TutorialRotation;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TutorialStep.Ready;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PoleTouchView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts', './GameStateController.ts', './TutorialRotation.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Node, v3, Tween, tween, Component, BaseSignal, GameStateController, TutorialStep, GameLogic;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      v3 = module.v3;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      TutorialStep = module.TutorialStep;
    }, function (module) {
      GameLogic = module.GameLogic;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "c2757lDIexI66p7yhsdSvel", "PoleTouchView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ReleasePoleSignal = exports('ReleasePoleSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(ReleasePoleSignal, _BaseSignal);

        function ReleasePoleSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return ReleasePoleSignal;
      }(BaseSignal));
      var PowerUpdateSignal = exports('PowerUpdateSignal', /*#__PURE__*/function (_BaseSignal2) {
        _inheritsLoose(PowerUpdateSignal, _BaseSignal2);

        function PowerUpdateSignal() {
          return _BaseSignal2.apply(this, arguments) || this;
        }

        return PowerUpdateSignal;
      }(BaseSignal));
      var PoleTouchView = exports('PoleTouchView', (_dec = ccclass("PoleTouchView"), _dec2 = property(ProgressBar), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PoleTouchView, _Component);

        function PoleTouchView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "PowerBar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Pole", _descriptor2, _assertThisInitialized(_this));

          _this.startY = 0;
          _this.endY = -602.359;
          _this.scale = 1.2;
          return _this;
        }

        var _proto = PoleTouchView.prototype;

        _proto.start = function start() {
          // Your initialization goes here.
          this.PowerBar.progress = 0;
          this.startY = this.Pole.position.y;
          this.node.on(Node.EventType.TOUCH_START, this.onStart, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onEnd, this);
          this.node.on(Node.EventType.TOUCH_END, this.onEnd, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onMove, this);
        };

        _proto.onMove = function onMove(ev) {
          if (!GameStateController.inst.canInteractive()) return;
          if (GameLogic.inst.isOnTutorial && GameLogic.inst.TutorialStep != TutorialStep.Shot && GameLogic.inst.TutorialStep != TutorialStep.TrickShot) return;
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
        };

        _proto.onStart = function onStart(ev) {
          Tween.stopAllByTarget(this.Pole);
        };

        _proto.onEnd = function onEnd(ev) {
          if (!GameStateController.inst.canInteractive()) return;
          if (GameLogic.inst.isOnTutorial && GameLogic.inst.TutorialStep != TutorialStep.Shot && GameLogic.inst.TutorialStep != TutorialStep.TrickShot) return;
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
        ;

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

System.register("chunks:///_virtual/AdaptationWigetView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, v3, sys, view, UITransform, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      v3 = module.v3;
      sys = module.sys;
      view = module.view;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      exports('AlignType', void 0);

      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "c346fnUZrdDV6WB8tQd14w4", "AdaptationWigetView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AlignType;

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
      })(AlignType || (AlignType = exports('AlignType', {})));

      var AdaptationWigetView = exports('AdaptationWigetView', (_dec = ccclass("AdaptationWigetView"), _dec2 = property({
        type: Enum(AlignType)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdaptationWigetView, _Component);

        function AdaptationWigetView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "alignType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "offset", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = AdaptationWigetView.prototype;

        _proto.start = function start() {
          if (sys.isMobile) {
            window.addEventListener("resize", this.onResize.bind(this));
          } else {
            view.on("canvas-resize", this.onResize, this);
          }

          this.onResize();
        };

        _proto.onResize = function onResize() {
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
        };

        _proto.alignTop = function alignTop() {
          /** 实际尺寸 */
          var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 0.5;
          // this.node.getComponent(UITransform).anchorY = 1;

          this.node.setPosition(this.LocalZero.add(v3(canvasSize.width / this.UseRatio / 2, canvasSize.height / this.UseRatio)).add(v3(0, -this.node.getComponent(UITransform).height * (1 - this.node.getComponent(UITransform).anchorY))));
        };

        _proto.alignTopLeft = function alignTopLeft() {
          var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 0;
          // this.node.getComponent(UITransform).anchorY = 1;

          this.node.setPosition(this.LocalZero.add(v3(0, canvasSize.height / this.UseRatio)).add(v3(this.node.getComponent(UITransform).width * this.node.getComponent(UITransform).anchorX, -this.node.getComponent(UITransform).height * (1 - this.node.getComponent(UITransform).anchorY))));
        };

        _proto.alignTopRight = function alignTopRight() {
          var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 1;
          // this.node.getComponent(UITransform).anchorY = 1;

          this.node.setPosition(this.LocalZero.add(v3(canvasSize.width / this.UseRatio, canvasSize.height / this.UseRatio).add(v3(-this.node.getComponent(UITransform).width * (1 - this.node.getComponent(UITransform).anchorX), -this.node.getComponent(UITransform).height * (1 - this.node.getComponent(UITransform).anchorY)))));
        };

        _proto.alignBottom = function alignBottom() {
          /** 实际尺寸 */
          var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 0.5;
          // this.node.getComponent(UITransform).anchorY = 0;

          this.node.setPosition(this.LocalZero.add(v3(canvasSize.width / this.UseRatio / 2, 0)).add(v3(0, this.node.getComponent(UITransform).height * this.node.getComponent(UITransform).anchorY)));
        };

        _proto.alignBotLeft = function alignBotLeft() {
          // this.node.getComponent(UITransform).anchorX = 0;
          // this.node.getComponent(UITransform).anchorY = 0;
          this.node.setPosition(this.LocalZero.add(v3(this.node.getComponent(UITransform).width * this.node.getComponent(UITransform).anchorX, this.node.getComponent(UITransform).height * this.node.getComponent(UITransform).anchorY)));
        };

        _proto.alignBotRight = function alignBotRight() {
          /** 实际尺寸 */
          var canvasSize = view.getCanvasSize(); // this.node.getComponent(UITransform).anchorX = 1;
          // this.node.getComponent(UITransform).anchorY = 0;

          this.node.setPosition(this.LocalZero.add(v3(canvasSize.width / this.UseRatio, 0)).add(v3(-this.node.getComponent(UITransform).width * (1 - this.node.getComponent(UITransform).anchorX), this.node.getComponent(UITransform).height * this.node.getComponent(UITransform).anchorY)));
        };

        _proto.alignLeft = function alignLeft() {
          // this.node.getComponent(UITransform).anchorX = 0;
          // this.node.getComponent(UITransform).anchorY = 0; /** 实际尺寸 */
          var canvasSize = view.getCanvasSize();
          this.node.setPosition(this.LocalZero.add(v3(this.node.getComponent(UITransform).width * this.node.getComponent(UITransform).anchorX, this.node.getComponent(UITransform).height * this.node.getComponent(UITransform).anchorY + 0.5 * canvasSize.height)));
        };

        _proto.alignRight = function alignRight() {};

        _proto.alignCenter = function alignCenter() {};

        _createClass(AdaptationWigetView, [{
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

System.register("chunks:///_virtual/ColliderRoot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "c358aP2yrpPzafOqHZPsSbq", "ColliderRoot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ColliderRoot = exports('ColliderRoot', (_dec = ccclass("ColliderRoot"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColliderRoot, _Component);

        function ColliderRoot() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ColliderRoot.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          // Your initialization goes here.
          this.node.setPosition(0, 0, 0);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return ColliderRoot;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartupCommand.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './PlayModel.ts', './SimpleCommand.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, PlayModel, SimpleCommand;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      SimpleCommand = module.SimpleCommand;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c41f6JIhipB8r8BSDDzyAGd", "StartupCommand", undefined);

      var StartupCommand = exports('StartupCommand', /*#__PURE__*/function (_SimpleCommand) {
        _inheritsLoose(StartupCommand, _SimpleCommand);

        function StartupCommand() {
          return _SimpleCommand.apply(this, arguments) || this;
        }

        var _proto = StartupCommand.prototype;

        _proto.excute = function excute() {
          console.log("start up.");
          PlayModel.inst.init();
        };

        return StartupCommand;
      }(SimpleCommand));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScoreScaleRoot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './GameStateController.ts', './BorderCollider.ts', './ResourceController.ts', './HeartBonusAnimation.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, tween, v3, Sprite, Tween, Component, GamePrepareSignal, GameStateController, HoleName, ResourceController, HeartBonusAnimation, HoleBonusInitSignal, ReadyNextRoundSignal, DropPocketSignal, RefreshHeartBonusSignal, GameLogic, NextRountSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      v3 = module.v3;
      Sprite = module.Sprite;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      GamePrepareSignal = module.GamePrepareSignal;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      HoleName = module.HoleName;
    }, function (module) {
      ResourceController = module.ResourceController;
    }, function (module) {
      HeartBonusAnimation = module.HeartBonusAnimation;
    }, function (module) {
      HoleBonusInitSignal = module.HoleBonusInitSignal;
      ReadyNextRoundSignal = module.ReadyNextRoundSignal;
      DropPocketSignal = module.DropPocketSignal;
      RefreshHeartBonusSignal = module.RefreshHeartBonusSignal;
      GameLogic = module.GameLogic;
      NextRountSignal = module.NextRountSignal;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "c444ehh7/FFrKAHw1vhgPW5", "ScoreScaleRoot", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ScoreScaleRoot = exports('ScoreScaleRoot', (_dec = ccclass("ScoreScaleRoot"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScoreScaleRoot, _Component);

        function ScoreScaleRoot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.heartNode = null;
          return _this;
        }

        var _proto = ScoreScaleRoot.prototype;

        _proto.start = function start() {
          var _this2 = this;

          ScoreScaleRoot.Node = this.node; // Your initialization goes here.

          HoleBonusInitSignal.inst.addListener(this.onHoleBonusUpdated, this);
          ReadyNextRoundSignal.inst.addListener(this.onReadyNextRound, this);
          DropPocketSignal.inst.addListener(this.onDropPocket, this);
          RefreshHeartBonusSignal.inst.addListener(this.onHeartBounsUpdated, this);
          GamePrepareSignal.inst.addListener(function () {
            for (var _iterator = _createForOfIteratorHelperLoose(_this2.node.children), _step; !(_step = _iterator()).done;) {
              var child = _step.value;
              child.getChildByName("HeartBling").active = false;
            }
          }, this);
        };

        _proto.onHeartBounsUpdated = function onHeartBounsUpdated(name) {
          this.heartNode = name; // console.error(" heart node:", name);
        };

        _proto.onDropPocket = function onDropPocket(name) {
          var _this3 = this;

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
            _this3.tween = null;
          }).start();
        };

        _proto.onRotation = function onRotation(loopCount) {
          var _this4 = this;

          console.log(" loopCount:", loopCount);
          var lastTime = 0.5;
          var firstPosition = this.node.getChildByName(HoleName[HoleName.TopLeft]).position.clone();

          var _loop = function _loop(i) {
            var child = _this4.node.getChildByName(ScoreScaleRoot.Clockwise[i]);

            var nextChild = _this4.node.getChildByName(ScoreScaleRoot.Clockwise[i + 1]);

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

            _this4.scheduleOnce(function () {
              if (--loopCount > 0) {
                _this4.onRotation(loopCount);

                return;
              }

              _this4.showHeartBonus();

              if (GameLogic.inst.isOnTutorial) ;else {
                NextRountSignal.inst.dispatch();
                console.log("NextRound after rotation.");
              }
              GameStateController.inst.resume();
            }, 0);
          }).start();
        };

        _proto.onReadyNextRound = function onReadyNextRound(shotCount, loopCount) {
          if (loopCount === void 0) {
            loopCount = 1;
          }

          this.heartNode = null;
          this.tween = null;

          for (var _iterator2 = _createForOfIteratorHelperLoose(this.node.children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            Tween.stopAllByTarget(child);
            child.setScale(v3(1, 1, 1));
            child.getChildByName("HeartBling").active = false;
            child.getComponent(HeartBonusAnimation).stop();
            child["oldFrame"] && (child.getComponent(Sprite).spriteFrame = child["oldFrame"]);
          }

          if (shotCount <= 1 || loopCount <= 0) {
            this.showHeartBonus();
            if (GameLogic.inst.isOnTutorial) ;else {
              NextRountSignal.inst.dispatch();
              console.log("NextRound .");
            }
            GameStateController.inst.resume();
            return;
          }

          this.onRotation(loopCount);
        };

        _proto.showHeartBonus = function showHeartBonus() {
          if (this.heartNode && this.node.getChildByName(this.heartNode)) {
            var child = this.node.getChildByName(this.heartNode);
            child.getChildByName("HeartBling").active = true;
            child["oldFrame"] = child.getComponent(Sprite).spriteFrame;
            child.getComponent(HeartBonusAnimation).play();
            this.heartNode = null;
          }
        };

        _proto.onHoleBonusUpdated = function onHoleBonusUpdated(bonusArr) {
          for (var _iterator3 = _createForOfIteratorHelperLoose(bonusArr), _step3; !(_step3 = _iterator3()).done;) {
            var bonus = _step3.value;
            var child = this.node.getChildByName(HoleName[bonus.pos]);

            if (child) {
              child.getChildByName("HeartBling").active = false;
              child.getComponent(Sprite).spriteFrame = ResourceController.inst.getHoleBonus(bonus.bonus);
              child["oldFrame"] = ResourceController.inst.getHoleBonus(bonus.bonus);
            }
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return ScoreScaleRoot;
      }(Component), _class2.Clockwise = [HoleName[HoleName.TopLeft], HoleName[HoleName.TopRight], HoleName[HoleName.MidRight], HoleName[HoleName.BotRight], HoleName[HoleName.BotLeft], HoleName[HoleName.MidLeft]], _class2.Node = null, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeartCountLabel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Label, Component, UpdateHeartCountSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UpdateHeartCountSignal = module.UpdateHeartCountSignal;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "c5612EQ+klIepEuXIlgefiO", "HeartCountLabel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HeartCountLabel = exports('HeartCountLabel', (_dec = ccclass("HeartCountLabel"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeartCountLabel, _Component);

        function HeartCountLabel() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = HeartCountLabel.prototype;

        _proto.start = function start() {
          var _this = this; // Your initialization goes here.


          UpdateHeartCountSignal.inst.addListener(function (count, step) {
            _this.Label.string = "x" + count;
          }, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(HeartCountLabel, [{
          key: "Label",
          get:
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          function get() {
            return this.getComponent(Label);
          }
        }]);

        return HeartCountLabel;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameStateController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ToSingleTon.ts', './Signal3.ts', './PlayModel.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, SingleTon, GameOverSignal, GamePauseSignal, PlayModel, GameLogic;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      GameOverSignal = module.GameOverSignal;
      GamePauseSignal = module.GamePauseSignal;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      GameLogic = module.GameLogic;
    }],
    execute: function () {
      exports('RoundEndType', void 0);

      cclegacy._RF.push({}, "c5f7dc2VdRPBLcN+cZI4lsB", "GameStateController", undefined);

      var RoundEndType;

      (function (RoundEndType) {
        RoundEndType[RoundEndType["Complete"] = 0] = "Complete";
        RoundEndType[RoundEndType["Over"] = 1] = "Over";
        RoundEndType[RoundEndType["TimeUp"] = 2] = "TimeUp";
        RoundEndType[RoundEndType["OutOfMove"] = 3] = "OutOfMove";
      })(RoundEndType || (RoundEndType = exports('RoundEndType', {})));

      var GameStateController = exports('GameStateController', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(GameStateController, _SingleTon);

        function GameStateController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this.interactivePauseCount = 0;
          _this.pauseCount = 0;
          _this.roundstart = false;
          _this.isReady = false;
          _this.isOver = false;
          _this.currentRound = 0;
          _this.onResumeCallbacks = [];
          return _this;
        }

        var _proto = GameStateController.prototype;

        _proto.start = function start() {
          this.pauseCount = 0;
          this.interactivePauseCount = 0;
        };

        _proto.canStart = function canStart() {
          return this.isReady;
        };

        _proto.roundStart = function roundStart() {
          if (this.isOver) return;
          console.log(" round start:", ++this.currentRound);
          this.roundstart = true;
        };

        _proto.setRoundStart = function setRoundStart(isStart) {
          this.roundstart = isStart;
        };

        _proto.roundEnd = function roundEnd(type) {
          console.log("round end :", RoundEndType[type]);
          this.roundstart = false;
          this.isOver = true;
          GameOverSignal.inst.dispatch(type);
        };

        _proto.isRoundStart = function isRoundStart() {
          return this.roundstart;
        };

        _proto.pauseInteractive = function pauseInteractive() {
          this.interactivePauseCount++;
        };

        _proto.pause = function pause(isFree) {
          if (isFree === void 0) {
            isFree = false;
          }

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
        };

        _proto.testEndComplete = function testEndComplete() {
          this.roundEnd(RoundEndType.Complete);
        };

        _proto.testEndTimeUp = function testEndTimeUp() {
          PlayModel.inst.addGameTime(-1000000000000);
        };

        _proto.clearResumeCallback = function clearResumeCallback() {
          this.onResumeCallbacks.length = 0;
        };

        _proto.resume = function resume() {
          this.pauseCount--;
          console.assert(this.pauseCount >= 0, " pause count smaller than 0!!!");
          this.pauseCount = Math.max(this.pauseCount, 0);

          if (this.pauseCount <= 0) {
            for (var _iterator = _createForOfIteratorHelperLoose(this.onResumeCallbacks), _step; !(_step = _iterator()).done;) {
              var callback = _step.value;
              callback();
            }

            this.onResumeCallbacks.length = 0;
          }
        };

        _proto.resumeInteractive = function resumeInteractive() {
          this.interactivePauseCount--;
          console.assert(this.interactivePauseCount >= 0, " pause count smaller than 0!!!");
          this.interactivePauseCount = Math.max(this.interactivePauseCount, 0);
        };

        _proto.isPause = function isPause() {
          return this.pauseCount > 0;
        };

        _proto.isInteractivePause = function isInteractivePause() {
          return this.interactivePauseCount > 0;
        };

        _proto.addResumeCallback = function addResumeCallback(callback) {
          if (!this.onResumeCallbacks) this.onResumeCallbacks = [];
          this.onResumeCallbacks.push(callback);
        };

        _proto.isGameOver = function isGameOver() {
          return this.isOver;
        }
        /** 是否可以交互 */
        ;

        _proto.canInteractive = function canInteractive() {
          if (GameLogic.inst.isOnTutorial) return !(GameStateController.inst.isPause() || GameStateController.inst.isGameOver());
          return !(GameStateController.inst.isPause() || GameStateController.inst.isGameOver() || !GameStateController.inst.isRoundStart() || GameStateController.inst.isInteractivePause());
        };

        return GameStateController;
      }(SingleTon()));
      !CELER_X && (window["GameState"] = GameStateController.inst);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Signal3.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, BaseSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ca846PrBlhEL7Q80ylNGl26", "Signal", undefined);
      /** 隐藏广告按钮 */


      var HideWildAdButtonSignal = exports('HideWildAdButtonSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(HideWildAdButtonSignal, _BaseSignal);

        function HideWildAdButtonSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return HideWildAdButtonSignal;
      }(BaseSignal));
      /** 隐藏小马广告 */

      var RemoveFlyCnicornSignal = exports('RemoveFlyCnicornSignal', /*#__PURE__*/function (_BaseSignal2) {
        _inheritsLoose(RemoveFlyCnicornSignal, _BaseSignal2);

        function RemoveFlyCnicornSignal() {
          return _BaseSignal2.apply(this, arguments) || this;
        }

        return RemoveFlyCnicornSignal;
      }(BaseSignal));
      /** 显示小马广告 */

      var ShowFlyCnicornSignal = exports('ShowFlyCnicornSignal', /*#__PURE__*/function (_BaseSignal3) {
        _inheritsLoose(ShowFlyCnicornSignal, _BaseSignal3);

        function ShowFlyCnicornSignal() {
          return _BaseSignal3.apply(this, arguments) || this;
        }

        return ShowFlyCnicornSignal;
      }(BaseSignal));
      /** 小马广告观看失败 */

      var CnicornWatchFailSignal = exports('CnicornWatchFailSignal', /*#__PURE__*/function (_BaseSignal4) {
        _inheritsLoose(CnicornWatchFailSignal, _BaseSignal4);

        function CnicornWatchFailSignal() {
          return _BaseSignal4.apply(this, arguments) || this;
        }

        return CnicornWatchFailSignal;
      }(BaseSignal));
      /** 小马广告消失 */

      var FlyCnicornAdDispearSignal = exports('FlyCnicornAdDispearSignal', /*#__PURE__*/function (_BaseSignal5) {
        _inheritsLoose(FlyCnicornAdDispearSignal, _BaseSignal5);

        function FlyCnicornAdDispearSignal() {
          return _BaseSignal5.apply(this, arguments) || this;
        }

        return FlyCnicornAdDispearSignal;
      }(BaseSignal));
      /** 小马广告点击 */

      var FlyCnicornClickSignal = exports('FlyCnicornClickSignal', /*#__PURE__*/function (_BaseSignal6) {
        _inheritsLoose(FlyCnicornClickSignal, _BaseSignal6);

        function FlyCnicornClickSignal() {
          return _BaseSignal6.apply(this, arguments) || this;
        }

        return FlyCnicornClickSignal;
      }(BaseSignal));
      /** 游戏结束 */

      var GameOverSignal = exports('GameOverSignal', /*#__PURE__*/function (_BaseSignal7) {
        _inheritsLoose(GameOverSignal, _BaseSignal7);

        function GameOverSignal() {
          return _BaseSignal7.apply(this, arguments) || this;
        }

        return GameOverSignal;
      }(BaseSignal));
      /** 游戏暂停 */

      var GamePauseSignal = exports('GamePauseSignal', /*#__PURE__*/function (_BaseSignal8) {
        _inheritsLoose(GamePauseSignal, _BaseSignal8);

        function GamePauseSignal() {
          return _BaseSignal8.apply(this, arguments) || this;
        }

        return GamePauseSignal;
      }(BaseSignal));
      /** 显示暂停界面 */

      var ShowPauseLayerSignal = exports('ShowPauseLayerSignal', /*#__PURE__*/function (_BaseSignal9) {
        _inheritsLoose(ShowPauseLayerSignal, _BaseSignal9);

        function ShowPauseLayerSignal() {
          return _BaseSignal9.apply(this, arguments) || this;
        }

        return ShowPauseLayerSignal;
      }(BaseSignal));
      /** 时间动画 */

      var TimeAnimationStateChanged = exports('TimeAnimationStateChanged', /*#__PURE__*/function (_BaseSignal10) {
        _inheritsLoose(TimeAnimationStateChanged, _BaseSignal10);

        function TimeAnimationStateChanged() {
          return _BaseSignal10.apply(this, arguments) || this;
        }

        return TimeAnimationStateChanged;
      }(BaseSignal));
      /** 显示帮助界面 */

      var ShowHelpLayerSignal = exports('ShowHelpLayerSignal', /*#__PURE__*/function (_BaseSignal11) {
        _inheritsLoose(ShowHelpLayerSignal, _BaseSignal11);

        function ShowHelpLayerSignal() {
          return _BaseSignal11.apply(this, arguments) || this;
        }

        return ShowHelpLayerSignal;
      }(BaseSignal));
      /** 隐藏帮助界面 */

      var HideHelpLayerSignal = exports('HideHelpLayerSignal', /*#__PURE__*/function (_BaseSignal12) {
        _inheritsLoose(HideHelpLayerSignal, _BaseSignal12);

        function HideHelpLayerSignal() {
          return _BaseSignal12.apply(this, arguments) || this;
        }

        return HideHelpLayerSignal;
      }(BaseSignal));
      /** 按钮点击 */

      var ButtonClickSignal = exports('ButtonClickSignal', /*#__PURE__*/function (_BaseSignal13) {
        _inheritsLoose(ButtonClickSignal, _BaseSignal13);

        function ButtonClickSignal() {
          return _BaseSignal13.apply(this, arguments) || this;
        }

        return ButtonClickSignal;
      }(BaseSignal));
      /** 显示新手引导 */

      var ShowTutorialSignal = exports('ShowTutorialSignal', /*#__PURE__*/function (_BaseSignal14) {
        _inheritsLoose(ShowTutorialSignal, _BaseSignal14);

        function ShowTutorialSignal() {
          return _BaseSignal14.apply(this, arguments) || this;
        }

        return ShowTutorialSignal;
      }(BaseSignal));
      /** 显示tip */

      var ShowTipSignal = exports('ShowTipSignal', /*#__PURE__*/function (_BaseSignal15) {
        _inheritsLoose(ShowTipSignal, _BaseSignal15);

        function ShowTipSignal() {
          return _BaseSignal15.apply(this, arguments) || this;
        }

        return ShowTipSignal;
      }(BaseSignal));
      /** 更新时间 */

      var UpdateTimeNumber = exports('UpdateTimeNumber', /*#__PURE__*/function (_BaseSignal16) {
        _inheritsLoose(UpdateTimeNumber, _BaseSignal16);

        function UpdateTimeNumber() {
          return _BaseSignal16.apply(this, arguments) || this;
        }

        return UpdateTimeNumber;
      }(BaseSignal));
      /** 开始计时 */

      var StartCountSignal = exports('StartCountSignal', /*#__PURE__*/function (_BaseSignal17) {
        _inheritsLoose(StartCountSignal, _BaseSignal17);

        function StartCountSignal() {
          return _BaseSignal17.apply(this, arguments) || this;
        }

        return StartCountSignal;
      }(BaseSignal));
      /** 分数跳动 */

      var ScoreCountingSignal = exports('ScoreCountingSignal', /*#__PURE__*/function (_BaseSignal18) {
        _inheritsLoose(ScoreCountingSignal, _BaseSignal18);

        function ScoreCountingSignal() {
          return _BaseSignal18.apply(this, arguments) || this;
        }

        return ScoreCountingSignal;
      }(BaseSignal));
      /** 显示提交按钮 */

      var ShowSubmitSignal = exports('ShowSubmitSignal', /*#__PURE__*/function (_BaseSignal19) {
        _inheritsLoose(ShowSubmitSignal, _BaseSignal19);

        function ShowSubmitSignal() {
          return _BaseSignal19.apply(this, arguments) || this;
        }

        return ShowSubmitSignal;
      }(BaseSignal));
      /** 打开结算界面 */

      var OpenResultLayerSignal = exports('OpenResultLayerSignal', /*#__PURE__*/function (_BaseSignal20) {
        _inheritsLoose(OpenResultLayerSignal, _BaseSignal20);

        function OpenResultLayerSignal() {
          return _BaseSignal20.apply(this, arguments) || this;
        }

        return OpenResultLayerSignal;
      }(BaseSignal));
      /** 玩家分数变化 */

      var PlayerScoreChanged = exports('PlayerScoreChanged', /*#__PURE__*/function (_BaseSignal21) {
        _inheritsLoose(PlayerScoreChanged, _BaseSignal21);

        function PlayerScoreChanged() {
          return _BaseSignal21.apply(this, arguments) || this;
        }

        return PlayerScoreChanged;
      }(BaseSignal));
      /** 下一关 */

      var NextLevelSignal = exports('NextLevelSignal', /*#__PURE__*/function (_BaseSignal22) {
        _inheritsLoose(NextLevelSignal, _BaseSignal22);

        function NextLevelSignal() {
          return _BaseSignal22.apply(this, arguments) || this;
        }

        return NextLevelSignal;
      }(BaseSignal));
      /** 倒计时 */

      var CountDownSignal = exports('CountDownSignal', /*#__PURE__*/function (_BaseSignal23) {
        _inheritsLoose(CountDownSignal, _BaseSignal23);

        function CountDownSignal() {
          return _BaseSignal23.apply(this, arguments) || this;
        }

        return CountDownSignal;
      }(BaseSignal));
      /** 游戏主题初始化 */

      var GameThemeInit = exports('GameThemeInit', /*#__PURE__*/function (_BaseSignal24) {
        _inheritsLoose(GameThemeInit, _BaseSignal24);

        function GameThemeInit() {
          return _BaseSignal24.apply(this, arguments) || this;
        }

        return GameThemeInit;
      }(BaseSignal));
      /** 更新加载进度 */

      var UpdateInitLoadingSignal = exports('UpdateInitLoadingSignal', /*#__PURE__*/function (_BaseSignal25) {
        _inheritsLoose(UpdateInitLoadingSignal, _BaseSignal25);

        function UpdateInitLoadingSignal() {
          return _BaseSignal25.apply(this, arguments) || this;
        }

        return UpdateInitLoadingSignal;
      }(BaseSignal));
      /** 游戏开始准备完毕 */

      var GamePrepareSignal = exports('GamePrepareSignal', /*#__PURE__*/function (_BaseSignal26) {
        _inheritsLoose(GamePrepareSignal, _BaseSignal26);

        function GamePrepareSignal() {
          return _BaseSignal26.apply(this, arguments) || this;
        }

        return GamePrepareSignal;
      }(BaseSignal));
      /** 游戏准备完毕 */

      var GameReadySignal = exports('GameReadySignal', /*#__PURE__*/function (_BaseSignal27) {
        _inheritsLoose(GameReadySignal, _BaseSignal27);

        function GameReadySignal() {
          return _BaseSignal27.apply(this, arguments) || this;
        }

        return GameReadySignal;
      }(BaseSignal));
      /** 游戏开始 */

      var GameStartSignal = exports('GameStartSignal', /*#__PURE__*/function (_BaseSignal28) {
        _inheritsLoose(GameStartSignal, _BaseSignal28);

        function GameStartSignal() {
          return _BaseSignal28.apply(this, arguments) || this;
        }

        return GameStartSignal;
      }(BaseSignal));
      /** 广告按钮准备 */

      var WildButtonReadySignal = exports('WildButtonReadySignal', /*#__PURE__*/function (_BaseSignal29) {
        _inheritsLoose(WildButtonReadySignal, _BaseSignal29);

        function WildButtonReadySignal() {
          return _BaseSignal29.apply(this, arguments) || this;
        }

        return WildButtonReadySignal;
      }(BaseSignal));
      /** 玩家手动结算 */

      var EndNowSignal = exports('EndNowSignal', /*#__PURE__*/function (_BaseSignal30) {
        _inheritsLoose(EndNowSignal, _BaseSignal30);

        function EndNowSignal() {
          return _BaseSignal30.apply(this, arguments) || this;
        }

        return EndNowSignal;
      }(BaseSignal));
      /** 音乐按钮 */

      var SoundStateChangedSignal = exports('SoundStateChangedSignal', /*#__PURE__*/function (_BaseSignal31) {
        _inheritsLoose(SoundStateChangedSignal, _BaseSignal31);

        function SoundStateChangedSignal() {
          return _BaseSignal31.apply(this, arguments) || this;
        }

        return SoundStateChangedSignal;
      }(BaseSignal));
      /** 分数初始化 */

      var PLayerScoreInitSignal = exports('PLayerScoreInitSignal', /*#__PURE__*/function (_BaseSignal32) {
        _inheritsLoose(PLayerScoreInitSignal, _BaseSignal32);

        function PLayerScoreInitSignal() {
          return _BaseSignal32.apply(this, arguments) || this;
        }

        return PLayerScoreInitSignal;
      }(BaseSignal));
      /** 菜单按钮点击 */

      var MenuButtonClickSignal = exports('MenuButtonClickSignal', /*#__PURE__*/function (_BaseSignal33) {
        _inheritsLoose(MenuButtonClickSignal, _BaseSignal33);

        function MenuButtonClickSignal() {
          return _BaseSignal33.apply(this, arguments) || this;
        }

        return MenuButtonClickSignal;
      }(BaseSignal));
      /** 广告按钮动画 */

      var WildAdAnimationIsPlaySignal = exports('WildAdAnimationIsPlaySignal', /*#__PURE__*/function (_BaseSignal34) {
        _inheritsLoose(WildAdAnimationIsPlaySignal, _BaseSignal34);

        function WildAdAnimationIsPlaySignal() {
          return _BaseSignal34.apply(this, arguments) || this;
        }

        return WildAdAnimationIsPlaySignal;
      }(BaseSignal));
      /** 固定位广告按钮点击 */

      var WildAdButtonClick = exports('WildAdButtonClick', /*#__PURE__*/function (_BaseSignal35) {
        _inheritsLoose(WildAdButtonClick, _BaseSignal35);

        function WildAdButtonClick() {
          return _BaseSignal35.apply(this, arguments) || this;
        }

        return WildAdButtonClick;
      }(BaseSignal));
      /** 看广告结束 */

      var AdFinishSignal = exports('AdFinishSignal', /*#__PURE__*/function (_BaseSignal36) {
        _inheritsLoose(AdFinishSignal, _BaseSignal36);

        function AdFinishSignal() {
          return _BaseSignal36.apply(this, arguments) || this;
        }

        return AdFinishSignal;
      }(BaseSignal));
      var ShotSignal = exports('ShotSignal', /*#__PURE__*/function (_BaseSignal37) {
        _inheritsLoose(ShotSignal, _BaseSignal37);

        function ShotSignal() {
          return _BaseSignal37.apply(this, arguments) || this;
        }

        return ShotSignal;
      }(BaseSignal));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HitPointLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts', './Signal3.ts', './BaseView.ts', './GameStateController.ts', './CelerSDK.ts', './table.ts', './PointTouchView.ts', './Pole.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Node, v3, UITransform, math, Vec3, RichText, BaseSignal, GameReadySignal, GameOverSignal, BaseView, GameStateController, CelerSDK, En_View, En_ID, PointTouchSignal, Pole, GameLogic;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      UITransform = module.UITransform;
      math = module.math;
      Vec3 = module.Vec3;
      RichText = module.RichText;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      GameReadySignal = module.GameReadySignal;
      GameOverSignal = module.GameOverSignal;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      CelerSDK = module.CelerSDK;
    }, function (module) {
      En_View = module.En_View;
      En_ID = module.En_ID;
    }, function (module) {
      PointTouchSignal = module.PointTouchSignal;
    }, function (module) {
      Pole = module.Pole;
    }, function (module) {
      GameLogic = module.GameLogic;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "cce11My0pFIL7wxtfg7lMSW", "HitPointLayer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /** 更新击球中心点 */

      var UpdateShotCenterSignal = exports('UpdateShotCenterSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(UpdateShotCenterSignal, _BaseSignal);

        function UpdateShotCenterSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return UpdateShotCenterSignal;
      }(BaseSignal));
      var HitPointLayer = exports('HitPointLayer', (_dec = ccclass("HitPointLayer"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(HitPointLayer, _BaseView);

        function HitPointLayer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this.hasShow = false;
          return _this;
        }

        var _proto = HitPointLayer.prototype;

        _proto.start = function start() {
          var _this2 = this; // Your initialization goes here.


          this.Confirm.on(Node.EventType.TOUCH_END, function () {
            _this2.Hide(function () {
              GameStateController.inst.resume();
            });
          }, this);
          GameReadySignal.inst.addListener(function () {}, this);
          this.Point.on(Node.EventType.TOUCH_MOVE, this.onAdjustPoint, this);
          GameOverSignal.inst.addListener(this.Hide, this);
          PointTouchSignal.inst.addListener(function () {
            if (GameLogic.inst.isOnTutorial) return;

            if (_this2.hasShow == false && CelerSDK.inst.isNew()) {
              _this2.Tip.active = true;
              _this2.Content.string = lan.t(En_View.JiQiuDianJieMian, En_ID.JiQiuDianXuanQuYinDao);
              var style = lan.style(En_View.JiQiuDianJieMian, En_ID.JiQiuDianXuanQuYinDao);

              _this2.Content.node.setPosition(v3(style.x, style.y));
            } else {
              _this2.Tip.active = false;
              _this2.Content.string = lan.t(En_View.JiQiuDianJieMian, En_ID.JiQiuDianXuanQu);

              var _style = lan.style(En_View.JiQiuDianJieMian, En_ID.JiQiuDianXuanQu);

              _this2.Content.node.setPosition(v3(_style.x, _style.y));
            }

            _this2.Show();

            GameStateController.inst.pause(true);
            var radius = _this2.Ball.getComponent(UITransform).contentSize.width / 2;
            var pointRadius = _this2.Point.getComponent(UITransform).contentSize.width / 2;

            _this2.Point.setPosition(v3((radius - pointRadius) * Pole.HitPoint.x, (radius - pointRadius) * Pole.HitPoint.y, 0));

            _this2.hasShow = true;
          }, this);
        };

        _proto.onAdjustPoint = function onAdjustPoint(e) {
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
        ;

        _createClass(HitPointLayer, [{
          key: "Ball",
          get:
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          function get() {
            return this.node.getChildByName("Ball");
          }
        }, {
          key: "Tip",
          get: function get() {
            return this.node.getChildByName("Tip");
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
      }(BaseView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/migrate-canvas.ts", ['cc'], function () {
  'use strict';

  var cclegacy, director, Director, Canvas, Camera, game, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      Canvas = module.Canvas;
      Camera = module.Camera;
      game = module.game;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cd0b6MnW2tPO7sAL/DZmSCH", "migrate-canvas", undefined);

      var customLayerMask = 0x000fffff;
      var builtinLayerMask = 0xfff00000;
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        var _director$getScene, _director$getScene2, _director$getScene3;

        var roots = (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.children;
        var allCanvases = (_director$getScene2 = director.getScene()) === null || _director$getScene2 === void 0 ? void 0 : _director$getScene2.getComponentsInChildren(Canvas);
        if (allCanvases.length <= 1) return;
        allCanvases = allCanvases.filter(function (x) {
          return !!x.cameraComponent;
        });
        var allCameras = (_director$getScene3 = director.getScene()) === null || _director$getScene3 === void 0 ? void 0 : _director$getScene3.getComponentsInChildren(Camera);
        var usedLayer = 0;
        allCameras.forEach(function (x) {
          return usedLayer |= x.visibility & customLayerMask;
        });
        var persistCanvas = [];

        for (var i = 0, l = roots.length; i < l; i++) {
          var root = roots[i];
          if (!game.isPersistRootNode(root)) continue;
          var canvases = root.getComponentsInChildren(Canvas);
          if (canvases.length === 0) continue;
          persistCanvas.push.apply(persistCanvas, canvases.filter(function (x) {
            return !!x.cameraComponent;
          }));
        }

        persistCanvas.forEach(function (val) {
          var isLayerCollided = allCanvases.find(function (x) {
            return x !== val && x.cameraComponent.visibility & val.cameraComponent.visibility & customLayerMask;
          });

          if (isLayerCollided) {
            var availableLayers = ~usedLayer;
            var lastAvailableLayer = availableLayers & ~(availableLayers - 1);
            val.cameraComponent.visibility = lastAvailableLayer | val.cameraComponent.visibility & builtinLayerMask;
            setChildrenLayer(val.node, lastAvailableLayer);
            usedLayer |= availableLayers;
          }
        });
      });

      function setChildrenLayer(node, layer) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          node.children[i].layer = layer;
          setChildrenLayer(node.children[i], layer);
        }
      }

      var setParentEngine = Node.prototype.setParent;
      {
        Node.prototype.setParent = function (value, keepWorldTransform) {
          setParentEngine.call(this, value, keepWorldTransform);
          if (!value) return; // find canvas

          var layer = getCanvasCameraLayer(this);

          if (layer) {
            this.layer = layer;
            setChildrenLayer(this, layer);
          }
        };
      }

      function getCanvasCameraLayer(node) {
        var layer = 0;
        var canvas = node.getComponent(Canvas);

        if (canvas && canvas.cameraComponent) {
          if (canvas.cameraComponent.visibility & canvas.node.layer) {
            layer = canvas.node.layer;
          } else {
            layer = canvas.cameraComponent.visibility & ~(canvas.cameraComponent.visibility - 1);
          }

          return layer;
        }

        if (node.parent) {
          layer = getCanvasCameraLayer(node.parent);
        }

        return layer;
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './FlyCnicornAd.ts', './GameStateController.ts', './AdController.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteAtlas, v3, Node, Sprite, Label, Component, WildAdButtonClick, FlyCnicornClickSignal, AdFinishSignal, HideWildAdButtonSignal, RemoveFlyCnicornSignal, CnicornWatchFailSignal, FlyCnicornAd, GameStateController, AdController;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteAtlas = module.SpriteAtlas;
      v3 = module.v3;
      Node = module.Node;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      WildAdButtonClick = module.WildAdButtonClick;
      FlyCnicornClickSignal = module.FlyCnicornClickSignal;
      AdFinishSignal = module.AdFinishSignal;
      HideWildAdButtonSignal = module.HideWildAdButtonSignal;
      RemoveFlyCnicornSignal = module.RemoveFlyCnicornSignal;
      CnicornWatchFailSignal = module.CnicornWatchFailSignal;
    }, function (module) {
      FlyCnicornAd = module.FlyCnicornAd;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      AdController = module.AdController;
    }],
    execute: function () {
      exports('AdType', void 0);

      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "ce181whyv9BaLYSAnQp4Seg", "AdLayer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AdType;

      (function (AdType) {
        AdType[AdType["Cnicorn"] = 0] = "Cnicorn";
        AdType[AdType["Sun"] = 1] = "Sun";
      })(AdType || (AdType = exports('AdType', {})));

      var AdLayer = exports('AdLayer', (_dec = ccclass("AdLayer"), _dec2 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AdLayer, _Component);

        function AdLayer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "AdAtlas", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = AdLayer.prototype;

        _proto.onLoad = function onLoad() {
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
        };

        _proto.onAdFinish = function onAdFinish(adUnitId) {
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
        };

        _proto.onAdFailed = function onAdFailed(adUnitId) {
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
        };

        _proto.Show = function Show(type) {
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
        };

        _createClass(AdLayer, [{
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

System.register("chunks:///_virtual/DropPocketAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "ce2d6DVdbdLua5RPzzkLuSL", "DropPocketAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DropPocketAnimation = exports('DropPocketAnimation', (_dec = ccclass("DropPocketAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(DropPocketAnimation, _SpriteUIAnimation);

        function DropPocketAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = DropPocketAnimation.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          // Your initialization goes here.
          this.Interval = 0.08;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return DropPocketAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './BaseView.ts', './LoadingViewMediator.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, v3, tween, Label, UIOpacity, UpdateInitLoadingSignal, BaseView, LoadingViewMediator;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      tween = module.tween;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      UpdateInitLoadingSignal = module.UpdateInitLoadingSignal;
    }, function (module) {
      BaseView = module.BaseView;
    }, function (module) {
      LoadingViewMediator = module.LoadingViewMediator;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "cfc30bHSDNEZ5oXLB0OxCj0", "LoadingView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadingView = exports('LoadingView', (_dec = ccclass("LoadingView"), _dec(_class = (_temp = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(LoadingView, _BaseView);

        function LoadingView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this.percent = 0;
          _this.uiopacity = null;
          return _this;
        }

        var _proto = LoadingView.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this; // this.ProgressLabel.node.active = CC_DEBUG;


          this.node.scale = v3(1, 1, 1);
          this.UIOpacity.opacity = 255;
          this.BindMedaitor(LoadingViewMediator);
          UpdateInitLoadingSignal.inst.addListener(function (percentAdd) {
            _this2.percent += percentAdd;
            _this2.percent = Math.min(1, _this2.percent); //   console.log(this.percent, " loaded :", percentAdd);

            _this2.ProgressLabel.string = (_this2.percent * 100).toFixed(0) + "%";
          }, this);
        };

        _proto.start = function start() {};

        _proto.Hide = function Hide(callback) {
          var _this3 = this;

          this.Loading && (this.Loading.active = false);
          tween(this.UIOpacity).sequence(tween(this.UIOpacity).to(0.5, {
            opacity: 0
          }), tween(this.UIOpacity).call(function () {
            _this3.node.active = false;
            callback();
          })).start();
        };

        _createClass(LoadingView, [{
          key: "ProgressLabel",
          get: // LIFE-CYCLE CALLBACKS:
          function get() {
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

System.register("chunks:///_virtual/RotationView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './EaseBaseView.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Vec3, EaseBaseView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }, function (module) {
      EaseBaseView = module.EaseBaseView;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "d0021wAKQZPE5ub73UcCQpv", "RotationView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RotationView = exports('RotationView', (_dec = ccclass("RotationView"), _dec(_class = (_temp = /*#__PURE__*/function (_EaseBaseView) {
        _inheritsLoose(RotationView, _EaseBaseView);

        function RotationView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _EaseBaseView.call.apply(_EaseBaseView, [this].concat(args)) || this;
          _this.startRotation = Vec3.ZERO;
          return _this;
        }

        var _proto = RotationView.prototype;

        _proto.onLoad = function onLoad() {
          if (CC_DEBUG && this.node.name == "TestNode") {
            window["testRotation"] = this.onRotationChanged.bind(this);
          }
        };

        _proto.canUpdate = function canUpdate() {
          return true;
        };

        _proto.start = function start() {};

        _proto.onRotationChanged = function onRotationChanged(targetRotation, lastTime, callback, delay) {
          if (delay === void 0) {
            delay = 0;
          }

          this.node.getRotation().getEulerAngles(this.startRotation);
          this.startUpdate(targetRotation, lastTime, callback, delay);
        };

        _proto.onStep = function onStep() {
          this.node.setRotationFromEuler(this.ease(this.startRotation.x, this.Target.x), this.ease(this.startRotation.y, this.Target.y), this.ease(this.startRotation.z, this.Target.z));
        };

        _proto.onComplete = function onComplete() {
          this.node.setRotationFromEuler(this.Target.x, this.Target.y, this.Target.z);
        };

        return RotationView;
      }(EaseBaseView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestSprite.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, BaseView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseView = module.BaseView;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "d27068zXehES6hCrPIJ3nYe", "TestSprite", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TestSprite = exports('TestSprite', (_dec = ccclass("TestSprite"), _dec(_class = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(TestSprite, _BaseView);

        function TestSprite() {
          return _BaseView.apply(this, arguments) || this;
        }

        var _proto = TestSprite.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// Your initialization goes here.
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return TestSprite;
      }(BaseView)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HelpTextView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './table.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, RichText, Label, Component, ShowHelpLayerSignal, En_View, En_ID;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ShowHelpLayerSignal = module.ShowHelpLayerSignal;
    }, function (module) {
      En_View = module.En_View;
      En_ID = module.En_ID;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "d7af3xH90pNcbwQyM6S1tyi", "HelpTextView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HelpTextView = exports('HelpTextView', (_dec = ccclass("HelpTextView"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HelpTextView, _Component);

        function HelpTextView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.rendered = false;
          return _this;
        }

        var _proto = HelpTextView.prototype;

        _proto.onLoad = function onLoad() {
          ShowHelpLayerSignal.inst.addListener(this.renderText, this);
        };

        _proto.renderText = function renderText() {
          if (this.rendered) return;
          this.rendered = true;

          if (this.text) {
            this.text.string = lan.t(En_View.BangZhuJieMian, En_ID.BangZhuYeMian1 + parseInt(this.node.name));
          } else if (this.richText) {
            this.richText.string = lan.t(En_View.BangZhuJieMian, En_ID.BangZhuYeMian1 + parseInt(this.node.name));
          }
        };

        _createClass(HelpTextView, [{
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

System.register("chunks:///_virtual/TimeLabelView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './Time.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, Label, Component, UpdateTimeNumber, CountDownSignal, Time;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UpdateTimeNumber = module.UpdateTimeNumber;
      CountDownSignal = module.CountDownSignal;
    }, function (module) {
      Time = module.Time;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "db700GNA9FKfaKMwY0am0De", "TimeLabelView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TimeLabelView = exports('TimeLabelView', (_dec = ccclass("TimeLabelView"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TimeLabelView, _Component);

        function TimeLabelView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.sec = 0;
          return _this;
        }

        var _proto = TimeLabelView.prototype;

        _proto.onLoad = function onLoad() {
          UpdateTimeNumber.inst.addListener(this.onTimeChanged, this);
        };

        _proto.onTimeChanged = function onTimeChanged(time) {
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
        };

        _proto.start = function start() {} // update (dt) {}
        ;

        _createClass(TimeLabelView, [{
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

System.register("chunks:///_virtual/HeartIdleAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts', './GameStateController.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation, GameStateController;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }, function (module) {
      GameStateController = module.GameStateController;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "dc88cJbWnxFmZlNTAEKSmV7", "HeartIdleAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HeartIdleAnimation = exports('HeartIdleAnimation', (_dec = ccclass("HeartIdleAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(HeartIdleAnimation, _SpriteUIAnimation);

        function HeartIdleAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = HeartIdleAnimation.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
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
        ;

        return HeartIdleAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TutorialLayerView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './GameStateController.ts', './table.ts', './TutorialRotation.ts', './MainUI.ts', './PoleTouchView.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, v3, SpriteAtlas, Tween, UIOpacity, Sprite, Node, tween, RichText, Component, ShowTutorialSignal, ButtonClickSignal, GameStateController, En_View, En_ID, TutorialStep, RotationPoleSignal, PowerUpdateSignal, GameLogic, TutorialStepSignal;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      SpriteAtlas = module.SpriteAtlas;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      Node = module.Node;
      tween = module.tween;
      RichText = module.RichText;
      Component = module.Component;
    }, function (module) {
      ShowTutorialSignal = module.ShowTutorialSignal;
      ButtonClickSignal = module.ButtonClickSignal;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      En_View = module.En_View;
      En_ID = module.En_ID;
    }, function (module) {
      TutorialStep = module.TutorialStep;
    }, function (module) {
      RotationPoleSignal = module.RotationPoleSignal;
    }, function (module) {
      PowerUpdateSignal = module.PowerUpdateSignal;
    }, function (module) {
      GameLogic = module.GameLogic;
      TutorialStepSignal = module.TutorialStepSignal;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "dd5abv8mFBGILoJYAAAAhlT", "TutorialLayerView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Black8Pos = exports('Black8Pos', v3(-2.812, 0.2095, -6.622));
      var Pink12Pos = exports('Pink12Pos', v3(-2.943, 0.2095, -6.708));
      var Yellow9Pos = exports('Yellow9Pos', v3(-1.5, 0.2095, -5.249));
      var TutorialLayerView = exports('TutorialLayerView', (_dec = ccclass("TutorialLayerView"), _dec2 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TutorialLayerView, _Component);

        function TutorialLayerView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "Atlas", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TutorialLayerView.prototype;

        _proto.start = function start() {
          var _this2 = this; // Your initialization goes here.


          this.node.scale = v3(1, 1, 1);
          this.node.active = false;
          this.Hand.active = false;
          ShowTutorialSignal.inst.addListener(function () {
            _this2.node.active = true;
            GameLogic.inst.TutorialStep = TutorialStep.Ready;
          }, this);
          TutorialStepSignal.inst.addListener(this.onStepUpdate, this);
          PowerUpdateSignal.inst.addListener(function () {
            Tween.stopAllByTarget(_this2.Hand);
            Tween.stopAllByTarget(_this2.Hand.getComponent(UIOpacity));
            _this2.Hand.active = false;
          }, this);
          RotationPoleSignal.inst.addListener(function () {// Tween.stopAllByTarget(this.Hand);
            // Tween.stopAllByTarget(this.Hand.getComponent(UIOpacity));
            // this.Hand.active = false;
          }, this);
        };

        _proto.showStart = function showStart() {
          this.Back.active = true;
          this.Tip.active = false;
          this.Panel.active = true;
          this.Title.spriteFrame = this.Atlas.getSpriteFrame("font_tutorial");
          this.Button.getComponent(Sprite).spriteFrame = this.Atlas.getSpriteFrame("btn_OK");
          this.Button.once(Node.EventType.TOUCH_END, function () {
            ButtonClickSignal.inst.dispatch();
            GameLogic.inst.TutorialStep = TutorialStep.RotatePole;
          }, this);
        };

        _proto.onStepUpdate = function onStepUpdate(step) {
          console.log("OnStepUpdate:", TutorialStep[step]);
          this.Content.node.active = true;
          this.Tip.active = true;
          var style = lan.style(En_View.XinShouZhiYin, En_ID.ZhiYinKaiShiDanChuang + step);
          this.Content.node.setPosition(v3(style.x, style.y, 1));
          Tween.stopAllByTarget(this.Content.node);
          this.Content.string = lan.t(En_View.XinShouZhiYin, En_ID.ZhiYinKaiShiDanChuang + step);

          switch (step) {
            case TutorialStep.Ready:
              this.showStart();
              break;

            case TutorialStep.RotatePole:
              tween(this.Content.node).to(0.1, {
                scale: v3(1.2, 1.2, 1.2)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              }).start();
              this.Hand.active = true;
              this.Hand.setScale(v3(1, 1, 1));
              this.Panel.active = false;
              this.Back.active = false;
              Tween.stopAllByTarget(this.Hand);
              Tween.stopAllByTarget(this.Hand.getComponent(UIOpacity));
              this.Hand.setPosition(v3(-180, 0, 0));
              this.Hand.getComponent(UIOpacity).opacity = 255;
              tween(this.Hand).sequence(tween(this.Hand).to(1, {
                position: v3(200, 0, 0)
              }), tween(this.Hand.getComponent(UIOpacity)).to(0.3, {
                opacity: 0
              }), tween(this.Hand).to(0, {
                position: v3(-180, 0, 0)
              }), tween(this.Hand.getComponent(UIOpacity)).to(0, {
                opacity: 255
              })).repeatForever().start();
              break;

            case TutorialStep.Shot:
            case TutorialStep.TrickShot:
              tween(this.Content.node).to(0.1, {
                scale: v3(1.2, 1.2, 1.2)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              }).start();
              Tween.stopAllByTarget(this.Hand);
              Tween.stopAllByTarget(this.Hand.getComponent(UIOpacity));
              this.Hand.setPosition(v3(-413.586, -277.102, 0));
              this.Hand.setScale(v3(1, 1, 1));
              this.Hand.active = true;
              tween(this.Hand).sequence(tween(this.Hand).to(1, {
                position: v3(-413.586, -494.234, 0)
              }), tween(this.Hand.getComponent(UIOpacity)).to(0.3, {
                opacity: 0
              }), tween(this.Hand).to(0, {
                position: v3(-413.586, -277.102, 0)
              }), tween(this.Hand.getComponent(UIOpacity)).to(0, {
                opacity: 255
              })).repeatForever().start();
              break;

            case TutorialStep.MiniRotatePole:
              tween(this.Content.node).to(0.1, {
                scale: v3(1.2, 1.2, 1.2)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              }).start();
              this.Hand.active = true;
              this.Hand.setScale(v3(-1, 1, 1));
              this.Hand.setPosition(v3(401.202, -236.793, 0));
              Tween.stopAllByTarget(this.Hand);
              Tween.stopAllByTarget(this.Hand.getComponent(UIOpacity));
              tween(this.Hand).sequence(tween(this.Hand).to(1, {
                position: v3(401.202, 39.226, 0)
              }), tween(this.Hand).to(1, {
                position: v3(401.202, -236.793, 0)
              })).repeatForever().start();
              break;

            case TutorialStep.Complete:
              this.showComplete();
              break;

            case TutorialStep.TrickScore:
            case TutorialStep.NormalScore:
              Tween.stopAllByTarget(this.Hand);
              Tween.stopAllByTarget(this.Hand.getComponent(UIOpacity));
              this.Tip.active = false;
              this.Content.node.active = false;
              break;
          }
        };

        _proto.showComplete = function showComplete() {
          var _this3 = this;

          this.Back.active = true;
          this.Tip.active = false;
          this.Panel.active = true;
          this.Title.spriteFrame = this.Atlas.getSpriteFrame("font_welldone");
          this.Button.getComponent(Sprite).spriteFrame = this.Atlas.getSpriteFrame("btn_play");
          this.Button.once(Node.EventType.TOUCH_END, function () {
            GameStateController.inst.setRoundStart(false);
            ButtonClickSignal.inst.dispatch();
            GameLogic.inst.isOnTutorial = false;
            GameLogic.inst.clear();
            GameLogic.inst.initBalls();
            _this3.node.active = false;
          }, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(TutorialLayerView, [{
          key: "Back",
          get: function get() {
            return this.node.getChildByName("bg_back_tutorial");
          }
        }, {
          key: "Panel",
          get: function get() {
            return this.node.getChildByName("Panel");
          }
        }, {
          key: "Title",
          get: function get() {
            return this.Panel.getChildByName("Title").getComponent(Sprite);
          }
        }, {
          key: "Tip",
          get: function get() {
            return this.node.getChildByName("Tip");
          }
        }, {
          key: "Content",
          get: function get() {
            return this.node.getChildByName("Content").getComponent(RichText);
          }
        }, {
          key: "Hand",
          get: function get() {
            return this.node.getChildByName("Hand");
          }
        }, {
          key: "Button",
          get: function get() {
            return this.Panel.getChildByName("bg_btnbackbig").getChildByName("btn_play");
          }
        }]);

        return TutorialLayerView;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Atlas", [_dec2], {
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

System.register("chunks:///_virtual/SpriteUIAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Sprite, SpriteAtlas, tween, color, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteAtlas = module.SpriteAtlas;
      tween = module.tween;
      color = module.color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _temp;

      cclegacy._RF.push({}, "e164eQEBcdG/IpNLtTPyZj7", "SpriteUIAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          requireComponent = _decorator.requireComponent;
      var SpriteUIAnimation = exports('SpriteUIAnimation', (_dec = ccclass("SpriteUIAnimation"), _dec2 = requireComponent(Sprite), _dec3 = property(SpriteAtlas), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpriteUIAnimation, _Component);

        function SpriteUIAnimation() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

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

        var _proto = SpriteUIAnimation.prototype;

        _proto.onFocusInEditor = function onFocusInEditor() {// this.time = this.Interval;
          // FrameAniBase.intervalID = setInterval(this.update.bind(this), 0.016, 0.016);
        };

        _proto.onLostFocusInEditor = function onLostFocusInEditor() {
          clearInterval(SpriteUIAnimation.intervalID);
        };

        _proto.onLoad = function onLoad() {
          this.time = this.Interval;
          this.isPlay = this.PlayOnLoad;
        };

        _proto.play = function play() {
          this.isPlay = true;
          this.currentIndex = 0;
          this.Sprite.color.a = 255;
          this.node.active = true;
          this.updateCurrentFrame();

          if (this.isPlaying == false) {
            this.callEventComplete();
          }
        };

        _proto.onStartPlay = function onStartPlay() {};

        _proto.playOnLoop = function playOnLoop() {
          this.Loop = true;
          this.play();
        };

        _proto.playByStep = function playByStep() {
          this.isPlay = true;
          this.nextFrame();
          this.isPlay = false;
        };

        _proto.pause = function pause() {
          this.isPlay = false;
        };

        _proto.resume = function resume() {
          this.isPlay = true;
        };

        _proto.stop = function stop() {
          this.isPlay = false;
          this.currentIndex = 0;
          this.updateCurrentFrame();
          this.Loop = false;
        };

        _proto.updateCurrentFrame = function updateCurrentFrame() {
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

        };

        _proto.onKeyFrame = function onKeyFrame(key) {};

        _proto.addKeyEventListener = function addKeyEventListener(f, target) {
          this.listener.push({
            callback: f,
            target: target
          });
        };

        _proto.clearAllListener = function clearAllListener() {
          this.listener.length = 0;
          return this;
        };

        _proto.onComplete = function onComplete() {
          tween(this.Sprite).to(0.2, {
            color: color(this.Sprite.color.r, this.Sprite.color.g, this.Sprite.color.b, 0)
          }).start();
        };

        _proto.callEventFrame = function callEventFrame() {
          this.onKeyFrame(this.currentIndex);

          for (var _iterator = _createForOfIteratorHelperLoose(this.listener), _step; !(_step = _iterator()).done;) {
            var callback = _step.value;
            callback.callback.apply(callback.target, [this.currentIndex, this["__classname__"]]);
          }
        };

        _proto.callEventComplete = function callEventComplete() {
          this.isPlay = false; //  this.Sprite.spriteFrame = null;

          for (var _iterator2 = _createForOfIteratorHelperLoose(this.complateEvent), _step2; !(_step2 = _iterator2()).done;) {
            var complete = _step2.value;
            complete.f.apply(complete.target, [this["__classname__"]]);
          }

          this.onComplete();
        };

        _proto.addCompleteEvent = function addCompleteEvent(f, target) {
          this.complateEvent.push({
            f: f,
            target: target
          });
        };

        _proto.clearCompleteEvent = function clearCompleteEvent() {
          this.complateEvent.length = 0;
          return this;
        };

        _proto.start = function start() {};

        _proto.nextFrame = function nextFrame() {
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
        };

        _proto.update = function update(dt) {
          if (this.time >= this.Interval) {
            this.time = 0;
            this.nextFrame();
          }

          this.time += dt;
        };

        _createClass(SpriteUIAnimation, [{
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

              for (var _iterator3 = _createForOfIteratorHelperLoose(Components), _step3; !(_step3 = _iterator3()).done;) {
                var comp = _step3.value;

                if (comp.Priority > this.Priority && comp.isPlaying) {
                  return false;
                }
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

System.register("chunks:///_virtual/Pole.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts', './Signal3.ts', './GameStateController.ts', './HitPointLayer.ts', './MainUI.ts', './PoleTouchView.ts', './BallRoot.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, v3, Tween, tween, Component, BaseSignal, ShotSignal, GameStateController, UpdateShotCenterSignal, RotationPoleSignal, PowerUpdateSignal, ReleasePoleSignal, BallRoot, NextRountSignal, PoleRotationInitSignal, SyncShotLineSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }, function (module) {
      ShotSignal = module.ShotSignal;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      UpdateShotCenterSignal = module.UpdateShotCenterSignal;
    }, function (module) {
      RotationPoleSignal = module.RotationPoleSignal;
    }, function (module) {
      PowerUpdateSignal = module.PowerUpdateSignal;
      ReleasePoleSignal = module.ReleasePoleSignal;
    }, function (module) {
      BallRoot = module.BallRoot;
    }, function (module) {
      NextRountSignal = module.NextRountSignal;
      PoleRotationInitSignal = module.PoleRotationInitSignal;
      SyncShotLineSignal = module.SyncShotLineSignal;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "e736e0YY8tBZbv/zxVEs5wF", "Pole", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /** 击球 */

      var InitPolePositionSignal = exports('InitPolePositionSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(InitPolePositionSignal, _BaseSignal);

        function InitPolePositionSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return InitPolePositionSignal;
      }(BaseSignal));
      var UpdateShotLineSignal = exports('UpdateShotLineSignal', /*#__PURE__*/function (_BaseSignal2) {
        _inheritsLoose(UpdateShotLineSignal, _BaseSignal2);

        function UpdateShotLineSignal() {
          return _BaseSignal2.apply(this, arguments) || this;
        }

        return UpdateShotLineSignal;
      }(BaseSignal));
      var Pole = exports('Pole', (_dec = ccclass("Pole"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Pole, _Component);

        function Pole() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.defaultZ = 0;
          _this.MaxOffset = 3;
          return _this;
        }

        var _proto = Pole.prototype;

        _proto.start = function start() {
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
          SyncShotLineSignal.inst.addListener(this.onUpdateShotLine, this);
        };

        _proto.onUpdateShotLine = function onUpdateShotLine() {
          Pole.PoleForward = this.node.forward.clone();
          var rotation = v3(0, 0, 0);
          this.node.rotation.getEulerAngles(rotation);
          UpdateShotLineSignal.inst.dispatch(rotation);
        };

        _proto.onFollowWhiteBall = function onFollowWhiteBall() {
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
        };

        _proto.onRotation = function onRotation(step, fromLine) {
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
          UpdateShotLineSignal.inst.dispatch(rotation); // if (GameLogic.inst.isOnTutorial) {
          //   if (CC_PREVIEW) {
          //     console.error(TutorialStep[GameLogic.inst.TutorialStep], rotation);
          //   }
          //   if (GameLogic.inst.TutorialStep == TutorialStep.RotatePole) {
          //     if (math.approx(13.2, rotation.y, 0.2)) {
          //       GameLogic.inst.TutorialStep++;
          //     }
          //   } else if (GameLogic.inst.TutorialStep == TutorialStep.MiniRotatePole) {
          //     /**
          //      *            6.916000427246138,
          //      *            7.294000000000023
          //      */
          //     if (math.approx(7.2764999999999525, rotation.y, 0.005)) {
          //       // return;
          //       GameLogic.inst.TutorialStep++;
          //     }
          //   }
          // }
        };

        _proto.onPoleRelease = function onPoleRelease(power) {
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
        };

        _proto.onPowerUpdate = function onPowerUpdate(power) {
          if (!this.node.active) return;
          Tween.stopAllByTarget(this.Pole);
          this.Pole.setPosition(this.Pole.position.x, this.Pole.position.y, this.defaultZ + (this.MaxOffset - this.defaultZ) * power);
        };

        _proto.Shot = function Shot(power) {
          var rotation = v3(0, 0, 0);
          this.node.rotation.getEulerAngles(rotation);
          ShotSignal.inst.dispatch(power, rotation.y, this.node.forward);
          GameStateController.inst.pause(true);
          this.Hide();
        };

        _proto.Hide = function Hide() {
          var _this4 = this;

          this.scheduleOnce(function () {
            _this4.node.active = false;
          }, 0.1);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        _createClass(Pole, [{
          key: "Pole",
          get:
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          function get() {
            return this.node.getChildByName("PoleObject");
          }
        }]);

        return Pole;
      }(Component), _class2.PoleForward = v3(0, 0, 0), _class2.HitPoint = v3(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ToSingleTon.ts', './Signal3.ts', './GameStateController.ts', './HashMap.ts', './BorderCollider.ts', './MainUI.ts', './Pole.ts', './BallObject.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, loader, AudioClip, AudioSource, Node, game, sys, SingleTon, ShotSignal, UpdateTimeNumber, StartCountSignal, ScoreCountingSignal, ShowSubmitSignal, OpenResultLayerSignal, PlayerScoreChanged, NextLevelSignal, ButtonClickSignal, CountDownSignal, GameOverSignal, RoundEndType, HashMap, HitBorderSignal, BorderType, RotationPoleSignal, InitPolePositionSignal, BallHitSignal, WhiteBallReposSignal, NextRountSignal, PocketScoredSignal, ShotType, UpdateHeartCountSignal, UpdateStreakSignal, BallInitSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      loader = module.loader;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      Node = module.Node;
      game = module.game;
      sys = module.sys;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      ShotSignal = module.ShotSignal;
      UpdateTimeNumber = module.UpdateTimeNumber;
      StartCountSignal = module.StartCountSignal;
      ScoreCountingSignal = module.ScoreCountingSignal;
      ShowSubmitSignal = module.ShowSubmitSignal;
      OpenResultLayerSignal = module.OpenResultLayerSignal;
      PlayerScoreChanged = module.PlayerScoreChanged;
      NextLevelSignal = module.NextLevelSignal;
      ButtonClickSignal = module.ButtonClickSignal;
      CountDownSignal = module.CountDownSignal;
      GameOverSignal = module.GameOverSignal;
    }, function (module) {
      RoundEndType = module.RoundEndType;
    }, function (module) {
      HashMap = module.HashMap;
    }, function (module) {
      HitBorderSignal = module.HitBorderSignal;
      BorderType = module.BorderType;
    }, function (module) {
      RotationPoleSignal = module.RotationPoleSignal;
    }, function (module) {
      InitPolePositionSignal = module.InitPolePositionSignal;
    }, function (module) {
      BallHitSignal = module.BallHitSignal;
    }, function (module) {
      WhiteBallReposSignal = module.WhiteBallReposSignal;
      NextRountSignal = module.NextRountSignal;
      PocketScoredSignal = module.PocketScoredSignal;
      ShotType = module.ShotType;
      UpdateHeartCountSignal = module.UpdateHeartCountSignal;
      UpdateStreakSignal = module.UpdateStreakSignal;
      BallInitSignal = module.BallInitSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e807a8/1xBEkK6W4LroZNLh", "AudioManager", undefined);

      if (window.oncanplay) {
        window.oncanplay = function () {
          AudioController.canPlay = true;
        };
      }

      var PATH = "sounds/";
      var EffectLimitTime = 100;
      var EffectCountLimit = 15;
      var AudioController = exports('AudioController', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(AudioController, _SingleTon);

        function AudioController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this.ballHitMap = new HashMap();
          _this.audioID = {};
          _this.effectCount = 0;
          _this.clips = new HashMap();
          _this.effectVolumeScale = 1;
          _this.musicVolumeScale = 0.5;
          _this.effectVolume = 1;
          _this.musicVolume = 1;
          return _this;
        }

        var _proto = AudioController.prototype;

        _proto.init = function init(callback, progress) {
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
              var audioSource = new AudioSource(clip.name);
              audioSource.node = new Node(clip.name);
              audioSource.clip = clip;
              self.clips.add(clip.name, audioSource);
              self.bgm = audioSource;
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
              for (var _iterator = _createForOfIteratorHelperLoose(res), _step; !(_step = _iterator()).done;) {
                var clip = _step.value;

                if (!_this2.clips.has(clip.name)) {
                  var audioSource = new AudioSource(clip.name);
                  audioSource.node = new Node(clip.name);
                  audioSource.clip = clip;
                  self.clips.add(clip.name, audioSource);
                }
              }
            }
          });
          this.bindSignal();
        };

        _proto.setEffectVolume = function setEffectVolume(volume) {
          var _this3 = this; // this.effectVolumeScale = 1;


          this.effectVolume = volume;
          this.clips.forEach(function (key, clip) {
            if (_this3.bgm && clip.name != _this3.bgm.name) {
              clip.volume = volume * _this3.effectVolumeScale;
            }
          });
        };

        _proto.setMusicVolume = function setMusicVolume(volume) {
          // this.musicVolumeScale = 1;
          this.musicVolume = volume;

          if (this.bgm) {
            this.bgm.volume = volume * this.musicVolumeScale;
          }
        };

        _proto.bindSignal = function bindSignal() {
          var _this4 = this;

          this.setEffectVolume(1);
          this.setMusicVolume(1);
          WhiteBallReposSignal.inst.addListener(function () {
            _this4.playEffect("white_drop");
          }, this);
          NextRountSignal.inst.addListener(function () {
            _this4.playEffect("pole_pos");
          }, this);
          InitPolePositionSignal.inst.addListener(function () {
            _this4.playEffect("pole_pos");
          }, this);
          RotationPoleSignal.inst.addListener(function (a, isFromLine) {
            // Tween.stopAllByTarget(this.Hand);
            // Tween.stopAllByTarget(this.Hand.getComponent(UIOpacity));
            // this.Hand.active = false;
            if (isFromLine) {
              _this4.playEffect("line_scale");
            }
          }, this);
          PocketScoredSignal.inst.addListener(function (type) {
            if (type == ShotType.TrickShot) {
              _this4.playEffect("yeah");
            }
          }, this);
          UpdateHeartCountSignal.inst.addListener(function (count, step) {
            if (step == 1) {
              _this4.playEffect("get_heart");
            } else if (step < 0) {
              _this4.playEffect("heart_broken");
            }
          }, this);
          UpdateStreakSignal.inst.addListener(function (streak) {
            if (streak <= 0) return;

            if (streak <= 1) {
              _this4.playEffect("combo1");
            } else {
              _this4.playEffect("combo2");
            }
          }, this);
          WhiteBallReposSignal.inst.addListener(function () {
            _this4.playEffect("pocket");
          }, this);
          BallInitSignal.inst.addListener(function () {
            _this4.playEffect("repos_ball");
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
              if (_this4.bgm && _this4.bgm.name == "bgm" && _this4.bgm.state == AudioSource.AudioState.PLAYING) {
                return;
              }

              _this4.playMusic("bgm", true);
            } else {
              if (_this4.bgm && _this4.bgm.name == "bgm_30" && _this4.bgm.state == AudioSource.AudioState.PLAYING) {
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
            if (_this4.audioID["scoreCount"] && _this4.audioID["scoreCount"].state == AudioSource.AudioState.PLAYING) return;

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
        };

        _proto.playEffect = function playEffect(name, loop, finishCallback, volume, autoLimit) {
          var _this5 = this;

          if (loop === void 0) {
            loop = false;
          }

          if (volume === void 0) {
            volume = 1;
          }

          if (autoLimit === void 0) {
            autoLimit = true;
          }

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

            if (effect.state == AudioSource.AudioState.PLAYING && this.audioID[name] == null) {
              effect.stop();
            }

            effect.play();
            effect.loop = loop;
            effect.volume = volume * this.EffectVolume;
            this.EffectCount++;
            this.audioID[name].node.once(AudioSource.EventType.ENDED, function () {
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
                var audioSource = new AudioSource(res.name);
                audioSource.node = new Node(res.name);
                audioSource.clip = res;

                _this5.clips.add(res.name, audioSource); // if (this.audioID[name]) return;


                _this5.audioID[name] = audioSource;
                audioSource.play();
                audioSource.loop = loop;
                audioSource.volume = volume * _this5.EffectVolume;
                _this5.EffectCount++;

                _this5.audioID[name].node.once(AudioSource.EventType.ENDED, function () {
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
        };

        _proto.playMusic = function playMusic(name, loop) {
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
            this.bgm.loop = true;
            this.bgm.volume = this.MusicVolume;
          } else {
            loader.loadRes(PATH + name, AudioClip, function (err, res) {
              if (err) {
                console.error(err);
              } else {
                var audioSource = new AudioSource(res.name);
                audioSource.node = new Node(res.name);
                audioSource.clip = res;

                _this6.clips.add(res.name, audioSource);

                _this6.bgm = audioSource;
                _this6.audioID[name] = audioSource;

                _this6.bgm.play();

                _this6.bgm.loop = true;
              }
            });
          }
        };

        _proto.bindTouch = function bindTouch() {
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
        };

        _createClass(AudioController, [{
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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeartBlingAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, SpriteUIAnimation;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e81d3m/ySBMgpQMv54o4Q+6", "HeartBlingAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HeartBlingAnimation = exports('HeartBlingAnimation', (_dec = ccclass("HeartBlingAnimation"), _dec(_class = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(HeartBlingAnimation, _SpriteUIAnimation);

        function HeartBlingAnimation() {
          return _SpriteUIAnimation.apply(this, arguments) || this;
        }

        var _proto = HeartBlingAnimation.prototype;
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          // Your initialization goes here.
          this.Interval = 0.1;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return HeartBlingAnimation;
      }(SpriteUIAnimation)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestLabelView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './NumberChangedView.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Node, NumberChangedView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      NumberChangedView = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "ea50eoV6kRGK6+iihfqfZVk", "TestLabelView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TestLabelView = exports('TestLabelView', (_dec = ccclass("TestLabelView"), _dec(_class = (_temp = /*#__PURE__*/function (_NumberChangedView) {
        _inheritsLoose(TestLabelView, _NumberChangedView);

        function TestLabelView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _NumberChangedView.call.apply(_NumberChangedView, [this].concat(args)) || this;
          _this.score = 0;
          return _this;
        }

        var _proto = TestLabelView.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          _NumberChangedView.prototype.onLoad.call(this);

          this.node.on(Node.EventType.TOUCH_END, function () {
            _this2.onNumberChanged(_this2.score += 100);
          }, this);
        };

        return TestLabelView;
      }(NumberChangedView), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LineScaleView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameStateController.ts', './TutorialRotation.ts', './MainUI.ts', './GameLogic.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, UITransform, Component, GameStateController, TutorialStep, RotationPoleSignal, GameLogic;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      TutorialStep = module.TutorialStep;
    }, function (module) {
      RotationPoleSignal = module.RotationPoleSignal;
    }, function (module) {
      GameLogic = module.GameLogic;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "eac3b5QwRROBK9rOg7ZYeM5", "LineScaleView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LineScaleView = exports('LineScaleView', (_dec = ccclass("LineScaleView"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LineScaleView, _Component);

        function LineScaleView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "LineScale", _descriptor, _assertThisInitialized(_this));

          _this.top = null;
          _this.bot = null;
          _this.offset = 0;
          _this.scale = 1;
          _this.augleScale = 0.007;
          return _this;
        }

        var _proto = LineScaleView.prototype;

        _proto.start = function start() {
          this.top = this.LineScale.children[0];
          this.bot = this.LineScale.children[this.LineScale.children.length - 1];
          this.node.on(Node.EventType.TOUCH_MOVE, this.onMove, this);
          this.node.eventProcessor.touchListener["swallowTouches"] = true;
        };

        _proto.onMove = function onMove(ev) {
          if (GameLogic.inst.isOnTutorial && GameLogic.inst.TutorialStep != TutorialStep.MiniRotatePole) return;

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
        ;

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

System.register("chunks:///_virtual/WhiteBallAgainAnimation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SpriteUIAnimation.ts', './BallObject.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, Camera, SpriteUIAnimation, WhiteBallReposDoneSignal;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      Camera = module.Camera;
    }, function (module) {
      SpriteUIAnimation = module.SpriteUIAnimation;
    }, function (module) {
      WhiteBallReposDoneSignal = module.WhiteBallReposDoneSignal;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "eea16FQTedNGLIfwN9qnjiG", "WhiteBallAgainAnimation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = WhiteBallAgainAnimation
       * DateTime = Thu Sep 30 2021 11:19:28 GMT+0800 (中国标准时间)
       * Author = 友兮王吃吃
       * FileBasename = WhiteBallAgainAnimation.ts
       * FileBasenameNoExtension = WhiteBallAgainAnimation
       * URL = db://assets/Scripts/GamePlay/Animation/WhiteBallAgainAnimation.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      var WhiteBallAgainAnimation = exports('WhiteBallAgainAnimation', (_dec = ccclass("WhiteBallAgainAnimation"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_SpriteUIAnimation) {
        _inheritsLoose(WhiteBallAgainAnimation, _SpriteUIAnimation);

        function WhiteBallAgainAnimation() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SpriteUIAnimation.call.apply(_SpriteUIAnimation, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = WhiteBallAgainAnimation.prototype;

        _proto.start = function start() {
          var _this2 = this; // [3]


          this.Sprite.color.a = 0;
          WhiteBallReposDoneSignal.inst.addListener(function (position) {
            var localPosition = v3(0, 0, 0);

            _this2.camera.getComponentInChildren(Camera).convertToUINode(position, _this2.node.parent, localPosition);

            _this2.node.setPosition(localPosition);

            _this2.play();
          }, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return WhiteBallAgainAnimation;
      }(SpriteUIAnimation), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CelerSDK.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameRule.ts', './ToSingleTon.ts', './Signal3.ts', './Random.ts', './PlayModel.ts', './GameStateController.ts', './TableManager.ts', './LogHandler.ts', './InitialFacade.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, game, Game, sys, GetTotalTime, SingleTon, HideWildAdButtonSignal, RemoveFlyCnicornSignal, ShowPauseLayerSignal, Random, PlayModel, GameStateController, TableManager, LogHandler, InitialFacade;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      Game = module.Game;
      sys = module.sys;
    }, function (module) {
      GetTotalTime = module.GetTotalTime;
    }, function (module) {
      SingleTon = module.SingleTon;
    }, function (module) {
      HideWildAdButtonSignal = module.HideWildAdButtonSignal;
      RemoveFlyCnicornSignal = module.RemoveFlyCnicornSignal;
      ShowPauseLayerSignal = module.ShowPauseLayerSignal;
    }, function (module) {
      Random = module.Random;
    }, function (module) {
      PlayModel = module.PlayModel;
    }, function (module) {
      GameStateController = module.GameStateController;
    }, function (module) {
      TableManager = module.TableManager;
    }, function (module) {
      LogHandler = module.LogHandler;
    }, function (module) {
      InitialFacade = module.InitialFacade;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f058b49JtNBSYr9SexzhltZ", "CelerSDK", undefined);

      var CelerSDK = exports('CelerSDK', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(CelerSDK, _SingleTon);

        function CelerSDK() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SingleTon.call.apply(_SingleTon, [this].concat(args)) || this;
          _this.alreadySubmit = false;
          _this.isNewPlayer = true;
          _this.celerStartCallback = null;
          return _this;
        }

        var _proto = CelerSDK.prototype;

        _proto.init = function init(callback) {
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
        };

        _proto.celerXReady = function celerXReady() {
          console.log(" invoke celerx.ready() ");

          if (!CELER_X) {
            this.onCelerStart();
          } else {
            celerSDK.ready();
          }
        };

        _proto.isNew = function isNew() {
          return this.isNewPlayer;
        };

        _proto.isOnCelerPlatform = function isOnCelerPlatform() {
          return CELER_X;
        };

        _proto.onCelerStart = function onCelerStart() {
          console.log(" celerx onStart call");
          this.match = CELER_X ? celerSDK.getMatch() : {
            matchId: "error : can not get id",
            shouldLaunchTutorial: true,
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
        };

        _proto.defineLan = function defineLan() {
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
        };

        _proto.submitScore = function submitScore(score) {
          if (this.alreadySubmit) return;
          this.alreadySubmit = true;
          console.log(" submit score:", score, ", match id:", this.match);

          if (CELER_X) {
            celerSDK.submitScore(score);
          } else {
            window.location.reload();
          }
        };

        _createClass(CelerSDK, [{
          key: "MatchID",
          get:
          /** 匹配ID */
          function get() {
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
            return sys.os == sys.OS_ANDROID;
          }
        }, {
          key: "isIOSWeb",
          get: function get() {
            return sys.os == sys.OS_IOS;
          }
        }]);

        return CelerSDK;
      }(SingleTon()));
      CC_DEBUG && (window["SDK"] = CelerSDK.inst);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/table.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        Balls_ID: void 0,
        En_ID: void 0,
        En_View: void 0,
        Level_Balls: void 0,
        Level_IsRandom: void 0,
        Physical_ID: void 0
      });

      cclegacy._RF.push({}, "f46ed9tWlVM2L8/jLLZl+K3", "table", undefined);
      /**
      * 导出表自动生成的表数据声明
      */

      /** Balls的球*/


      var Balls_ID;

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
      })(Balls_ID || (Balls_ID = exports('Balls_ID', {})));
      /** en的文本内容类型*/


      var En_ID;

      (function (En_ID) {
        En_ID[En_ID["MianFeiZanTing"] = 1] = "MianFeiZanTing";
        En_ID[En_ID["ZanTingKouFen"] = 2] = "ZanTingKouFen";
        En_ID[En_ID["DeFen"] = 4] = "DeFen";
        En_ID[En_ID["JiQiuDianXuanQu"] = 5] = "JiQiuDianXuanQu";
        En_ID[En_ID["JiQiuDianXuanQuYinDao"] = 6] = "JiQiuDianXuanQuYinDao";
        En_ID[En_ID["BangZhuYeMian1"] = 100] = "BangZhuYeMian1";
        En_ID[En_ID["BangZhuYeMian2"] = 101] = "BangZhuYeMian2";
        En_ID[En_ID["BangZhuYeMian3"] = 102] = "BangZhuYeMian3";
        En_ID[En_ID["ZhiYinKaiShiDanChuang"] = 200] = "ZhiYinKaiShiDanChuang";
        En_ID[En_ID["TiaoZhengQiuGanJiaoDuZhiYin"] = 201] = "TiaoZhengQiuGanJiaoDuZhiYin";
        En_ID[En_ID["JiQiuZhiYin"] = 202] = "JiQiuZhiYin";
        En_ID[En_ID["DeFenShuoMing"] = 203] = "DeFenShuoMing";
        En_ID[En_ID["WeiTiaoJiaoDuZhiYin"] = 204] = "WeiTiaoJiaoDuZhiYin";
        En_ID[En_ID["ChuGanTrickZhiYin"] = 205] = "ChuGanTrickZhiYin";
        En_ID[En_ID["JiQiaoDeFenShuoMing"] = 206] = "JiQiaoDeFenShuoMing";
        En_ID[En_ID["ZhiYinWanChengDanChuang"] = 207] = "ZhiYinWanChengDanChuang";
      })(En_ID || (En_ID = exports('En_ID', {})));
      /** en的界面*/


      var En_View;

      (function (En_View) {
        En_View[En_View["ZanTingJieMian"] = 1] = "ZanTingJieMian";
        En_View[En_View["BangZhuJieMian"] = 2] = "BangZhuJieMian";
        En_View[En_View["GuangGaoJieMian"] = 3] = "GuangGaoJieMian";
        En_View[En_View["JieSuanJieMian"] = 4] = "JieSuanJieMian";
        En_View[En_View["XinShouZhiYin"] = 5] = "XinShouZhiYin";
        En_View[En_View["JiQiuDianJieMian"] = 6] = "JiQiuDianJieMian";
      })(En_View || (En_View = exports('En_View', {})));
      /** Level的球*/


      var Level_Balls;

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
      })(Level_Balls || (Level_Balls = exports('Level_Balls', {})));
      /** Level的是否随机摆放*/


      var Level_IsRandom;

      (function (Level_IsRandom) {
        Level_IsRandom[Level_IsRandom["Shi"] = 1] = "Shi";
        Level_IsRandom[Level_IsRandom["Fou"] = 2] = "Fou";
      })(Level_IsRandom || (Level_IsRandom = exports('Level_IsRandom', {})));
      /** Physical的材质*/


      var Physical_ID;

      (function (Physical_ID) {
        Physical_ID[Physical_ID["Qiu"] = 100] = "Qiu";
        Physical_ID[Physical_ID["ZhuoMian"] = 101] = "ZhuoMian";
        Physical_ID[Physical_ID["QiuGan"] = 102] = "QiuGan";
        Physical_ID[Physical_ID["ZhuoBian"] = 103] = "ZhuoBian";
        Physical_ID[Physical_ID["FangZhiTiaoQiuDangBan"] = 104] = "FangZhiTiaoQiuDangBan";
      })(Physical_ID || (Physical_ID = exports('Physical_ID', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlyCnicornAd.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal3.ts', './CelerSDK.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, _decorator, v3, Node, tween, UIOpacity, Component, FlyCnicornAdDispearSignal, RemoveFlyCnicornSignal, ShowFlyCnicornSignal, CnicornWatchFailSignal, FlyCnicornClickSignal, CelerSDK;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Node = module.Node;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      FlyCnicornAdDispearSignal = module.FlyCnicornAdDispearSignal;
      RemoveFlyCnicornSignal = module.RemoveFlyCnicornSignal;
      ShowFlyCnicornSignal = module.ShowFlyCnicornSignal;
      CnicornWatchFailSignal = module.CnicornWatchFailSignal;
      FlyCnicornClickSignal = module.FlyCnicornClickSignal;
    }, function (module) {
      CelerSDK = module.CelerSDK;
    }],
    execute: function () {
      exports('FlyOrigin', void 0);

      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "f4b67491ARI8KUrshxReKDI", "FlyCnicornAd", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FlyOrigin;

      (function (FlyOrigin) {
        FlyOrigin[FlyOrigin["Left"] = 0] = "Left";
        FlyOrigin[FlyOrigin["Right"] = 1] = "Right";
      })(FlyOrigin || (FlyOrigin = exports('FlyOrigin', {})));

      var FlyCnicornAd = exports('FlyCnicornAd', (_dec = ccclass("FlyCnicornAd"), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlyCnicornAd, _Component);

        function FlyCnicornAd() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.flyopacity = null;
          _this.uiopacity = null;
          _this.initY = 0;
          _this.tween = null;
          return _this;
        }

        var _proto = FlyCnicornAd.prototype;

        _proto.reuse = function reuse(origin, y) {
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
        };

        _proto.unuse = function unuse() {};

        _proto.onLoad = function onLoad() {
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
        };

        _proto.onAddTouch = function onAddTouch(ev) {
          if (this.tween) {
            this.tween.stop();
          }

          tween(this.FlyOpacity).to(0.2, {
            opacity: 0
          }).start();
          FlyCnicornClickSignal.inst.dispatch();
        };

        _proto.update = function update(dt) {};

        _createClass(FlyCnicornAd, [{
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

System.register("chunks:///_virtual/Notification.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f5488zT53NDy7p1Vf9k8sT8", "Notification", undefined);

      var Notification = exports('Notification', /*#__PURE__*/function () {
        function Notification() {
          this.notification = {};
        }

        var _proto = Notification.prototype;

        _proto.register = function register(notificationName, command) {
          if (this.notification[notificationName]) {
            console.error(notificationName, " is already exist.");
          }

          this.notification[notificationName] = new command();
        };

        _proto.sendNotification = function sendNotification(notificationName, body) {
          if (this.notification[notificationName]) {
            this.notification[notificationName].excute(body);
            this.notification[notificationName] = null;
          }
        };

        return Notification;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cocos.ts", ['cc', './Random.ts'], function (exports) {
  'use strict';

  var cclegacy, v3, v2, math, Random;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      v2 = module.v2;
      math = module.math;
    }, function (module) {
      Random = module.Random;
    }],
    execute: function () {
      exports({
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

      cclegacy._RF.push({}, "f6d1f4JxyRGLZGcMhw5zqwm", "Cocos", undefined);
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


      function GetPixels(xInView, yInView, width, height) {
        throw new Error("GetPixels");
      }
      /**
       * 获取旋转后的坐标点
       * @param point
       * @param angle
       * @param center
       * @param isFollowClock
       */


      function RotatePoint(point, angle, center, isFollowClock) {
        if (center === void 0) {
          center = v2(0, 0);
        }

        if (isFollowClock === void 0) {
          isFollowClock = true;
        }

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


      function Approx(a, b, maxDiff) {
        if (maxDiff === void 0) {
          maxDiff = 0.000001;
        }

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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LogHandler.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ToSingleTon.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createForOfIteratorHelperLoose, _assertThisInitialized, cclegacy, director, Director, SingleTon;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
    }, function (module) {
      SingleTon = module.SingleTon;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fa3abvo3A5JTYG4Hamv49xr", "LogHandler", undefined);

      var LogHandler = exports('LogHandler', /*#__PURE__*/function (_SingleTon) {
        _inheritsLoose(LogHandler, _SingleTon);

        function LogHandler() {
          var _this;

          _this = _SingleTon.call(this) || this;
          _this.logFunc = console.log;
          _this.logMsg = null;
          _this.frameTimes = 0;
          _this.now = 0;
          _this.Frame = 20;
          _this.totalFrames = 0;
          _this.startTime = 0;

          if (window.addEventListener) {
            for (var _iterator = _createForOfIteratorHelperLoose(LogHandler.LISTENNING_EVENTS), _step; !(_step = _iterator()).done;) {
              var event = _step.value;
              var funcName = "trigger" + event.charAt(0).toLocaleUpperCase() + event.substring(1);

              if (_assertThisInitialized(_this)[funcName] && typeof _assertThisInitialized(_this)[funcName] == "function") {
                window.addEventListener(event, _assertThisInitialized(_this)[funcName].bind(_assertThisInitialized(_this)));
              }
            }
          }

          return _this;
        }

        var _proto = LogHandler.prototype;

        _proto.dumpFrameInfo = function dumpFrameInfo() {
          var timeCost = (Date.now() - this.startTime) / 1000;
          var perFrame = timeCost / this.totalFrames;
          this.log(" total frames:", this.totalFrames, " ,total cost time:", timeCost + "s", " , per frame cost time ave:" + perFrame + "s");
        };

        _proto.log = function log() {
          this.addLog.apply(this, arguments);
          this.sendLog();
        };

        _proto.ready = function ready() {
          console.log(LogHandler.VERSION);
        };

        _proto.initLog = function initLog(callback) {
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
        };

        _proto.formatLogArguments = function formatLogArguments() {
          for (var _len5 = arguments.length, _ = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            _[_key5] = arguments[_key5];
          }

          var logString = "";

          for (var i = 0; i < arguments.length; i++) {
            var type = typeof arguments[i];

            if (type == "string" || type == "number") {
              logString += " " + arguments[i];
            } else if (type == "object") {
              logString += " " + JSON.stringify(arguments[i]);
            } else if (type == "boolean" && arguments[i].toString) {
              logString += arguments[i].toString();
            }
          }

          return logString;
        };

        _proto.addLog = function addLog() {
          if (this.logMsg == null) {
            this.logMsg = {};
          }

          var msg = this.formatLogArguments.apply(this, arguments);
          var fullTime = this.getFullTime(new Date());
          this.logMsg[fullTime] = LogHandler.VERSION + msg;
        };

        _proto.getFullTime = function getFullTime(date) {
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

        _proto.sendLog = function sendLog() {
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
        ;

        _proto.triggerClose = function triggerClose(ev) {
          this.addLog("triggerClose");
          this.sendLog();
        };

        _proto.triggerLoad = function triggerLoad(ev) {
          this.addLog("triggerLoad");
          this.sendLog();
        };

        _proto.triggerUnload = function triggerUnload(ev) {
          this.addLog("triggerUnload");
          this.sendLog();
        };

        _proto.triggerOnunload = function triggerOnunload(ev) {
          this.addLog("triggerUnload");
          this.sendLog();
        };

        _proto.triggerError = function triggerError(err) {
          this.addLog("triggerError");
          this.addLog(err.message);
          this.sendLog();
        };

        _proto.triggerFocus = function triggerFocus(foc) {
          this.addLog("triggerFocus");
          this.sendLog();
        };

        _proto.triggerBlur = function triggerBlur(foc) {
          this.addLog("triggerBlur");
          this.sendLog();
        };

        _proto.triggerAbort = function triggerAbort(ui) {
          this.addLog("triggerAbort");
          this.sendLog();
        };

        _proto.triggerSuspend = function triggerSuspend(sus) {
          this.addLog("triggerSuspend");
          this.sendLog();
        };

        _proto.beforeunload = function beforeunload(bf) {
          this.addLog("beforeunload");
          this.sendLog();
        };

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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Random.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Signal2.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, BaseSignal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseSignal = module.BaseSignal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fbf05AoIXRKC62yFwJuATpS", "Random", undefined);

      var RandomSeedInitSignal = exports('RandomSeedInitSignal', /*#__PURE__*/function (_BaseSignal) {
        _inheritsLoose(RandomSeedInitSignal, _BaseSignal);

        function RandomSeedInitSignal() {
          return _BaseSignal.apply(this, arguments) || this;
        }

        return RandomSeedInitSignal;
      }(BaseSignal));
      var Random = exports('Random', /*#__PURE__*/function () {
        function Random() {}

        Random.seededRandom = function seededRandom(seed, min, max) {
          var seed1 = (1711 * seed + 88888) % 302654;
          var seed2 = (1722 * seed + 55555) % 302665;
          var seed3 = (1755 * seed + 23333) % 302766;
          var rand = (seed1 / 302654 + seed2 / 302665 + seed3 / 302766) * 1000000 % 1000000 / 1000000;
          return min + rand * (max - min);
        };

        Random.getRandom = function getRandom(min, max) {
          if (min === void 0) {
            min = 0;
          }

          if (max === void 0) {
            max = 1;
          }

          var seed = this.randomSeed;
          var result = this.seededRandom(seed, min, max);
          var step = Math.floor(this.seededRandom(seed, 1, 302766));
          this.randomSeed += step;
          return result;
        };

        Random.setRandomSeed = function setRandomSeed(seed) {
          console.log(" set random seed:", seed); // if (CELER_X) {
          //   Math.random = this.getRandom.bind(this);
          // }

          this.randomSeed = seed;
          this.sharedSeed = seed;
          RandomSeedInitSignal.inst.dispatch(seed);
        };

        Random.randomRoundToInt = function randomRoundToInt(min, max) {
          if (min === void 0) {
            min = 0;
          }

          if (max === void 0) {
            max = 1;
          }

          return Math.round(this.getRandom(min, max));
        };

        Random.randomFloorToInt = function randomFloorToInt(min, max) {
          if (min === void 0) {
            min = 0;
          }

          if (max === void 0) {
            max = 1;
          }

          var val = this.getRandom(min, max);
          return val > 0 ? Math.floor(val) : Math.ceil(val);
        };

        Random.randomCeilToInt = function randomCeilToInt(min, max) {
          if (min === void 0) {
            min = 0;
          }

          if (max === void 0) {
            max = 1;
          }

          var val = this.getRandom(min, max);
          return val > 0 ? Math.ceil(val) : Math.floor(val);
        };

        Random.clamp = function clamp(val, min, max) {
          return Math.max(min, Math.min(val, max));
        };

        return Random;
      }());
      Random.randomSeed = Math.random();
      Random.sharedSeed = Math.random();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./SpriteUIAnimation.ts', './WhiteDropAnimation.ts', './Notification.ts', './GameRule.ts', './ToSingleTon.ts', './Signal2.ts', './Signal3.ts', './FlyCnicornAd.ts', './Random.ts', './Cocos.ts', './Level.ts', './BaseView.ts', './SingleTouchView.ts', './MenuButtonView.ts', './PlayModel.ts', './GameStateController.ts', './TableManager.ts', './LogHandler.ts', './CelerSDK.ts', './StepManager.ts', './SimpleCommand.ts', './MacroCommand.ts', './HashMap.ts', './MaterialFactory.ts', './table.ts', './TutorialRotation.ts', './BorderCollider.ts', './PointTouchView.ts', './HitPointLayer.ts', './MainUI.ts', './PoleTouchView.ts', './PrefabFactory.ts', './BallModel.ts', './BallRoot.ts', './Pole.ts', './PrefabView.ts', './BallObject.ts', './AudioManager.ts', './LoadAudioCommand.ts', './LoadJsonCommand.ts', './LoadMaterialCommand.ts', './LoadPrefabCommand.ts', './InitialCommand.ts', './StartupCommand.ts', './InitialFacade.ts', './ResourceController.ts', './App.ts', './HeartBonusAnimation.ts', './ScoreScaleRoot.ts', './TutorialLayerView.ts', './GameLogic.ts', './Signal.ts', './DropPocketAnimation.ts', './HoleEffectRoot.ts', './VersionLabel.ts', './Turn8.ts', './TimeEffectAnimation.ts', './WhiteBall.ts', './BaseMediator.ts', './AdController.ts', './PointBallButtonView.ts', './HelpLayerMediator.ts', './HelpLayerView.ts', './TestView.ts', './NoBustView.ts', './SingleTouchMediator.ts', './GlobalSingleTouchMediator.ts', './GlobalSingleTouchView.ts', './LoadingViewMediator.ts', './TablePlane.ts', './SoundButtonView.ts', './FireWorkAnimation.ts', './CompleteView.ts', './Time.ts', './LoadingAnimation.ts', './AddHeartAnimation.ts', './ResultAnimation.ts', './GridUtil.ts', './MenuLayerView.ts', './WildAdButton.ts', './WhiteShotLine.ts', './ThemeView.ts', './NumberChangedView.ts', './CameraAdaption.ts', './FlyAdCnicornAnimation.ts', './TrickShotLightAnimation.ts', './ResultLayerView.ts', './EaseBaseView.ts', './PocketEffectRoot.ts', './3DRootAdaption.ts', './SliderView.ts', './HelpButtonView.ts', './PositionView.ts', './ScoreLabelView.ts', './WildAdAnimation.ts', './HeartBrokenAnimation.ts', './AdaptationWigetView.ts', './ColliderRoot.ts', './HeartCountLabel.ts', './migrate-canvas.ts', './AdLayer.ts', './LoadingView.ts', './RotationView.ts', './TestSprite.ts', './HelpTextView.ts', './TimeLabelView.ts', './HeartIdleAnimation.ts', './HeartBlingAnimation.ts', './TestLabelView.ts', './LineScaleView.ts', './WhiteBallAgainAnimation.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});