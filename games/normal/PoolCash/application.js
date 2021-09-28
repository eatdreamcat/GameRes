System.register([], function (_export, _context) {
  "use strict";

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function createApplication(_ref) {
    var loadJsListFile = _ref.loadJsListFile,
        moduleLoader = _ref.moduleLoader,
        ammoJsFallback = _ref.ammoJsFallback,
        loadAmmoJsWasmBinary = _ref.loadAmmoJsWasmBinary;

    /**
     * There are restrictions on some platform that we can not use `System` as System JS global.
     * The well-known platform is Baidu.
     * Baidu uses webpack as their pack tool. Webpack by default recognize and transform
     * `System.import`, `System.register` calls.
     * However Baidu does not provide a mechanism to config webpack.
     * So this HACK comes.
     */
    var System = globalThis.System;

    if (moduleLoader) {
      initializeModuleLoader(System, moduleLoader);
    } // NOTE: before here we shall not import any module!


    var promise = Promise.resolve();
    return promise.then(function () {
      return _defineProperty({
        start: start
      }, 'import', topLevelImport);
    });

    function start(_ref3) {
      var findCanvas = _ref3.findCanvas;
      var settings;
      var cc;
      return Promise.resolve().then(function () {
        return topLevelImport('cc');
      }).then(function (engine) {
        cc = engine;
        return loadSettingsJson(cc);
      }).then(function () {
        settings = window._CCSettings;
        return initializeGame(cc, settings, findCanvas).then(function () {
          if (settings.scriptPackages) {
            return loadModulePacks(settings.scriptPackages);
          }
        }).then(function () {
          return loadJsList(settings.jsList);
        }).then(function () {
          return topLevelImport('virtual:///prerequisite-imports:main');
        }).then(function () {
          return cc.game.run(function () {
            return onGameStarted(cc, settings);
          });
        });
      });
    }

    function topLevelImport(url) {
      return System["import"](url);
    }

    function loadModulePacks(packs) {
      return Promise.all(packs.map(function (pack) {
        return topLevelImport(pack);
      }));
    }

    function loadJsList(jsList) {
      var promise = Promise.resolve();
      jsList.forEach(function (jsListFile) {
        promise = promise.then(function () {
          return loadJsListFile("src/".concat(jsListFile));
        });
      });
      return promise;
    }

    function loadSettingsJson(cc) {
      return new Promise(function (resolve, reject) {
        cc.loader.load('./res/settings.e94f2.json', function (err, json) {
          if (err) {
            return reject(err);
          }

          window._CCSettings = json;
          resolve(json);
        });
      });
    }
  }

  function initializeGame(cc, settings, findCanvas) {
    if (settings.macros) {
      for (var key in settings.macros) {
        cc.macro[key] = settings.macros[key];
      }
    }

    var gameOptions = getGameOptions(settings, findCanvas);
    var success = cc.game.init(gameOptions);
    return success ? Promise.resolve() : Promise.reject();
  }

  function onGameStarted(cc, settings) {
    window._CCSettings = undefined;
    cc.loader.downloader._subpackages = settings.subpackages;
    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);

    if (cc.sys.isMobile) {
      if (settings.orientation === 'landscape') {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
      } else if (settings.orientation === 'portrait') {
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
      }

      cc.view.enableAutoFullScreen(false);
    }

    var launchScene = settings.launchScene; // load scene

    cc.director.loadScene(launchScene, null, function () {
      cc.view.setDesignResolutionSize(1080, 1920, 2);
      cc.loader.onProgress = null;
      console.log("Success to load scene: ".concat(launchScene));
    });
  }

  function getGameOptions(settings, findCanvas) {
    var md5AssetsMap = settings.md5AssetsMap;

    for (var _i = 0, _Object$keys = Object.keys(md5AssetsMap); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      var md5Entries = md5AssetsMap[key];

      for (var i = 0; i < md5Entries.length; i += 2) {
        if (typeof md5Entries[i] === 'number') {
          md5Entries[i] = settings.uuids[md5Entries[i]];
        }
      }
    } // asset library options


    var assetOptions = {
      libraryPath: 'res/import',
      rawAssetsBase: 'res/raw-',
      rawAssets: settings.rawAssets,
      packedAssets: settings.packedAssets,
      md5AssetsMap: settings.md5AssetsMap,
      subPackages: settings.subpackages
    };
    var options = {
      scenes: settings.scenes,
      debugMode: settings.debug ? 1 : 3,
      // cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
      showFPS: !false && settings.debug,
      frameRate: 60,
      groupList: settings.groupList,
      collisionMatrix: settings.collisionMatrix,
      renderPipeline: settings.renderPipeline,
      adapter: findCanvas('GameCanvas'),
      assetOptions: assetOptions,
      customJointTextureLayouts: settings.customJointTextureLayouts || []
    };
    return options;
  }

  function initializeModuleLoader(System, _ref4) {
    var importMap = _ref4.importMap,
        importMapBaseUrl = _ref4.importMapBaseUrl,
        execMap = _ref4.execMap,
        execNoSchema = _ref4.execNoSchema;
    var noSchemaPlaceholder = 'no-schema:';
    var systemJsPrototype = System.constructor.prototype;
    var baseUrlSchema = importMapBaseUrl || noSchemaPlaceholder;
    System.patches.setBaseUrl("".concat(baseUrlSchema, "/"));
    System.patches.setImportMap(importMap);

    if (execNoSchema) {
      System.patches.hookInstantiationOverSchema(noSchemaPlaceholder, function (urlNoSchema, firstParentUrl) {
        execNoSchema.call(this, urlNoSchema, firstParentUrl);
        return this.getRegister();
      });
    }

    if (execMap) {
      var _loop = function _loop(schema) {
        var exec = execMap[schema];
        System.patches.hookInstantiationOverSchema(schema, function (urlNoSchema, firstParentUrl) {
          exec.call(this, urlNoSchema, firstParentUrl);
          return this.getRegister();
        });
      };

      for (var schema in execMap) {
        _loop(schema);
      }
    }
  }

  _export("createApplication", createApplication);

  return {
    setters: [],
    execute: function () {}
  };
});