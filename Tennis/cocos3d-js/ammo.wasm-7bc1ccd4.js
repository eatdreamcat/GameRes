System.register(["./commonjsHelpers-f5a33273.js"], function (exports) {
  "use strict";
  var createCommonjsModule;
  return {
    setters: [
      function (module) {
        createCommonjsModule = module.c;
      },
    ],
    execute: function () {
      var ammo_wasm = (function (v) {
        return exports({ default: v, __moduleExports: v }), v;
      })(
        createCommonjsModule(function (module, exports) {
          // This is ammo.js, a port of Bullet Physics to JavaScript. zlib licensed.

          var Ammo = (function () {
            var _scriptDir =
              typeof document !== "undefined" && document.currentScript
                ? document.currentScript.src
                : undefined;
            return function (Ammo) {
              Ammo = Ammo || {};

              var Module = typeof Ammo !== "undefined" ? Ammo : {};
              var moduleOverrides = {};
              var key;
              for (key in Module) {
                if (Module.hasOwnProperty(key)) {
                  moduleOverrides[key] = Module[key];
                }
              }
              var arguments_ = [];
              var thisProgram = "./this.program";
              var quit_ = function (status, toThrow) {
                throw toThrow;
              };
              var ENVIRONMENT_IS_WEB = false;
              var ENVIRONMENT_IS_WORKER = false;
              var ENVIRONMENT_IS_NODE = false;
              var ENVIRONMENT_HAS_NODE = false;
              var ENVIRONMENT_IS_SHELL = false;
              ENVIRONMENT_IS_WEB = typeof window === "object";
              ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
              ENVIRONMENT_HAS_NODE =
                typeof process === "object" &&
                typeof process.versions === "object" &&
                typeof process.versions.node === "string";
              ENVIRONMENT_IS_NODE =
                ENVIRONMENT_HAS_NODE &&
                !ENVIRONMENT_IS_WEB &&
                !ENVIRONMENT_IS_WORKER;
              ENVIRONMENT_IS_SHELL =
                !ENVIRONMENT_IS_WEB &&
                !ENVIRONMENT_IS_NODE &&
                !ENVIRONMENT_IS_WORKER;
              var scriptDirectory = "";
              function locateFile(path) {
                if (Module["locateFile"]) {
                  return Module["locateFile"](path, scriptDirectory);
                }
                return scriptDirectory + path;
              }
              var read_, readBinary;
              if (ENVIRONMENT_IS_NODE) {
                scriptDirectory = __dirname + "/";
                read_ = function shell_read(filename, binary) {
                  return console.error(
                    "node_modules missing, please file a issue at https://github.com/cocos-creator/ammo.js"
                  );
                };
                readBinary = function readBinary(filename) {
                  var ret = read_(filename, true);
                  if (!ret.buffer) {
                    ret = new Uint8Array(ret);
                  }
                  assert(ret.buffer);
                  return ret;
                };
                if (process["argv"].length > 1) {
                  thisProgram = process["argv"][1].replace(/\\/g, "/");
                }
                arguments_ = process["argv"].slice(2);
                process["on"]("uncaughtException", function (ex) {
                  if (!(ex instanceof ExitStatus)) {
                    throw ex;
                  }
                });
                process["on"]("unhandledRejection", abort);
                quit_ = function (status) {
                  process["exit"](status);
                };
                Module["inspect"] = function () {
                  return "[Emscripten Module object]";
                };
              } else if (ENVIRONMENT_IS_SHELL) {
                if (typeof read != "undefined") {
                  read_ = function shell_read(f) {
                    return read(f);
                  };
                }
                readBinary = function readBinary(f) {
                  var data;
                  if (typeof readbuffer === "function") {
                    return new Uint8Array(readbuffer(f));
                  }
                  data = read(f, "binary");
                  assert(typeof data === "object");
                  return data;
                };
                if (typeof scriptArgs != "undefined") {
                  arguments_ = scriptArgs;
                } else if (typeof arguments != "undefined") {
                  arguments_ = arguments;
                }
                if (typeof quit === "function") {
                  quit_ = function (status) {
                    quit(status);
                  };
                }
                if (typeof print !== "undefined") {
                  if (typeof console === "undefined") console = {};
                  console.log = print;
                  console.warn = console.error =
                    typeof printErr !== "undefined" ? printErr : print;
                }
              } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
                if (ENVIRONMENT_IS_WORKER) {
                  scriptDirectory = self.location.href;
                } else if (document.currentScript) {
                  scriptDirectory = document.currentScript.src;
                }
                if (_scriptDir) {
                  scriptDirectory = _scriptDir;
                }
                if (scriptDirectory.indexOf("blob:") !== 0) {
                  scriptDirectory = scriptDirectory.substr(
                    0,
                    scriptDirectory.lastIndexOf("/") + 1
                  );
                } else {
                  scriptDirectory = "";
                }
                {
                  read_ = function shell_read(url) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", url, false);
                    xhr.send(null);
                    return xhr.responseText;
                  };
                  if (ENVIRONMENT_IS_WORKER) {
                    readBinary = function readBinary(url) {
                      var xhr = new XMLHttpRequest();
                      xhr.open("GET", url, false);
                      xhr.responseType = "arraybuffer";
                      xhr.send(null);
                      return new Uint8Array(xhr.response);
                    };
                  }
                }
              } else;
              var out = Module["print"] || console.log.bind(console);
              var err = Module["printErr"] || console.warn.bind(console);
              for (key in moduleOverrides) {
                if (moduleOverrides.hasOwnProperty(key)) {
                  Module[key] = moduleOverrides[key];
                }
              }
              moduleOverrides = null;
              if (Module["arguments"]) arguments_ = Module["arguments"];
              if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
              if (Module["quit"]) quit_ = Module["quit"];
              function convertJsFunctionToWasm(func, sig) {
                var typeSection = [1, 0, 1, 96];
                var sigRet = sig.slice(0, 1);
                var sigParam = sig.slice(1);
                var typeCodes = { i: 127, j: 126, f: 125, d: 124 };
                typeSection.push(sigParam.length);
                for (var i = 0; i < sigParam.length; ++i) {
                  typeSection.push(typeCodes[sigParam[i]]);
                }
                if (sigRet == "v") {
                  typeSection.push(0);
                } else {
                  typeSection = typeSection.concat([1, typeCodes[sigRet]]);
                }
                typeSection[1] = typeSection.length - 2;
                var bytes = new Uint8Array(
                  [0, 97, 115, 109, 1, 0, 0, 0].concat(
                    typeSection,
                    [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]
                  )
                );
                var module = new WebAssembly.Module(bytes);
                var instance = new WebAssembly.Instance(module, {
                  e: { f: func },
                });
                var wrappedFunc = instance.exports.f;
                return wrappedFunc;
              }
              function addFunctionWasm(func, sig) {
                var table = wasmTable;
                var ret = table.length;
                try {
                  table.grow(1);
                } catch (err) {
                  if (!err instanceof RangeError) {
                    throw err;
                  }
                  throw "Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.";
                }
                try {
                  table.set(ret, func);
                } catch (err) {
                  if (!err instanceof TypeError) {
                    throw err;
                  }
                  assert(
                    typeof sig !== "undefined",
                    "Missing signature argument to addFunction"
                  );
                  var wrapped = convertJsFunctionToWasm(func, sig);
                  table.set(ret, wrapped);
                }
                return ret;
              }
              function addFunction(func, sig) {
                return addFunctionWasm(func, sig);
              }
              var wasmBinary;
              if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
              var noExitRuntime;
              if (Module["noExitRuntime"])
                noExitRuntime = Module["noExitRuntime"];
              if (typeof WebAssembly !== "object") {
                err("no native wasm support detected");
              }
              var wasmMemory;
              var wasmTable = new WebAssembly.Table({
                initial: 754,
                maximum: 754 + 20,
                element: "anyfunc",
              });
              var ABORT = false;
              function assert(condition, text) {
                if (!condition) {
                  abort("Assertion failed: " + text);
                }
              }
              var UTF8Decoder =
                typeof TextDecoder !== "undefined"
                  ? new TextDecoder("utf8")
                  : undefined;
              function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
                var endIdx = idx + maxBytesToRead;
                var endPtr = idx;
                while (u8Array[endPtr] && !(endPtr >= endIdx)) ++endPtr;
                if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
                  return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
                } else {
                  var str = "";
                  while (idx < endPtr) {
                    var u0 = u8Array[idx++];
                    if (!(u0 & 128)) {
                      str += String.fromCharCode(u0);
                      continue;
                    }
                    var u1 = u8Array[idx++] & 63;
                    if ((u0 & 224) == 192) {
                      str += String.fromCharCode(((u0 & 31) << 6) | u1);
                      continue;
                    }
                    var u2 = u8Array[idx++] & 63;
                    if ((u0 & 240) == 224) {
                      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
                    } else {
                      u0 =
                        ((u0 & 7) << 18) |
                        (u1 << 12) |
                        (u2 << 6) |
                        (u8Array[idx++] & 63);
                    }
                    if (u0 < 65536) {
                      str += String.fromCharCode(u0);
                    } else {
                      var ch = u0 - 65536;
                      str += String.fromCharCode(
                        55296 | (ch >> 10),
                        56320 | (ch & 1023)
                      );
                    }
                  }
                }
                return str;
              }
              function UTF8ToString(ptr, maxBytesToRead) {
                return ptr
                  ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead)
                  : "";
              }
              var UTF16Decoder =
                typeof TextDecoder !== "undefined"
                  ? new TextDecoder("utf-16le")
                  : undefined;
              var WASM_PAGE_SIZE = 65536;
              var buffer,
                HEAP8,
                HEAPU8,
                HEAP16,
                HEAPU16,
                HEAP32,
                HEAPU32,
                HEAPF32,
                HEAPF64;
              function updateGlobalBufferAndViews(buf) {
                buffer = buf;
                Module["HEAP8"] = HEAP8 = new Int8Array(buf);
                Module["HEAP16"] = HEAP16 = new Int16Array(buf);
                Module["HEAP32"] = HEAP32 = new Int32Array(buf);
                Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
                Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
                Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
                Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
                Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
              }
              var DYNAMIC_BASE = 5269648,
                DYNAMICTOP_PTR = 26608;
              var INITIAL_TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 67108864;
              if (Module["wasmMemory"]) {
                wasmMemory = Module["wasmMemory"];
              } else {
                wasmMemory = new WebAssembly.Memory({
                  initial: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE,
                  maximum: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE,
                });
              }
              if (wasmMemory) {
                buffer = wasmMemory.buffer;
              }
              INITIAL_TOTAL_MEMORY = buffer.byteLength;
              updateGlobalBufferAndViews(buffer);
              HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
              function callRuntimeCallbacks(callbacks) {
                while (callbacks.length > 0) {
                  var callback = callbacks.shift();
                  if (typeof callback == "function") {
                    callback();
                    continue;
                  }
                  var func = callback.func;
                  if (typeof func === "number") {
                    if (callback.arg === undefined) {
                      Module["dynCall_v"](func);
                    } else {
                      Module["dynCall_vi"](func, callback.arg);
                    }
                  } else {
                    func(callback.arg === undefined ? null : callback.arg);
                  }
                }
              }
              var __ATPRERUN__ = [];
              var __ATINIT__ = [];
              var __ATMAIN__ = [];
              var __ATPOSTRUN__ = [];
              var runtimeInitialized = false;
              function preRun() {
                if (Module["preRun"]) {
                  if (typeof Module["preRun"] == "function")
                    Module["preRun"] = [Module["preRun"]];
                  while (Module["preRun"].length) {
                    addOnPreRun(Module["preRun"].shift());
                  }
                }
                callRuntimeCallbacks(__ATPRERUN__);
              }
              function initRuntime() {
                runtimeInitialized = true;
                callRuntimeCallbacks(__ATINIT__);
              }
              function preMain() {
                callRuntimeCallbacks(__ATMAIN__);
              }
              function postRun() {
                if (Module["postRun"]) {
                  if (typeof Module["postRun"] == "function")
                    Module["postRun"] = [Module["postRun"]];
                  while (Module["postRun"].length) {
                    addOnPostRun(Module["postRun"].shift());
                  }
                }
                callRuntimeCallbacks(__ATPOSTRUN__);
              }
              function addOnPreRun(cb) {
                __ATPRERUN__.unshift(cb);
              }
              function addOnPreMain(cb) {
                __ATMAIN__.unshift(cb);
              }
              function addOnPostRun(cb) {
                __ATPOSTRUN__.unshift(cb);
              }
              var runDependencies = 0;
              var dependenciesFulfilled = null;
              function addRunDependency(id) {
                runDependencies++;
                if (Module["monitorRunDependencies"]) {
                  Module["monitorRunDependencies"](runDependencies);
                }
              }
              function removeRunDependency(id) {
                runDependencies--;
                if (Module["monitorRunDependencies"]) {
                  Module["monitorRunDependencies"](runDependencies);
                }
                if (runDependencies == 0) {
                  if (dependenciesFulfilled) {
                    var callback = dependenciesFulfilled;
                    dependenciesFulfilled = null;
                    callback();
                  }
                }
              }
              Module["preloadedImages"] = {};
              Module["preloadedAudios"] = {};
              function abort(what) {
                if (Module["onAbort"]) {
                  Module["onAbort"](what);
                }
                what += "";
                out(what);
                err(what);
                ABORT = true;
                what =
                  "abort(" +
                  what +
                  "). Build with -s ASSERTIONS=1 for more info.";
                throw new WebAssembly.RuntimeError(what);
              }
              var dataURIPrefix = "data:application/octet-stream;base64,";
              function isDataURI(filename) {
                return String.prototype.startsWith
                  ? filename.startsWith(dataURIPrefix)
                  : filename.indexOf(dataURIPrefix) === 0;
              }
              var wasmBinaryFile = "ammo.wasm.wasm";
              if (!isDataURI(wasmBinaryFile)) {
                wasmBinaryFile = locateFile(wasmBinaryFile);
              }
              function getBinary() {
                try {
                  if (wasmBinary) {
                    return new Uint8Array(wasmBinary);
                  }
                  if (readBinary) {
                    return readBinary(wasmBinaryFile);
                  } else {
                    throw "both async and sync fetching of the wasm failed";
                  }
                } catch (err) {
                  abort(err);
                }
              }
              function getBinaryPromise() {
                if (
                  !wasmBinary &&
                  (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) &&
                  typeof fetch === "function"
                ) {
                  return fetch(wasmBinaryFile, { credentials: "same-origin" })
                    .then(function (response) {
                      if (!response["ok"]) {
                        throw (
                          "failed to load wasm binary file at '" +
                          wasmBinaryFile +
                          "'"
                        );
                      }
                      return response["arrayBuffer"]();
                    })
                    .catch(function () {
                      return getBinary();
                    });
                }
                return new Promise(function (resolve, reject) {
                  resolve(getBinary());
                });
              }
              function createWasm() {
                var info = { env: asmLibraryArg, wasi_unstable: asmLibraryArg };
                function receiveInstance(instance, module) {
                  var exports = instance.exports;
                  Module["asm"] = exports;
                  removeRunDependency();
                }
                addRunDependency();
                function receiveInstantiatedSource(output) {
                  receiveInstance(output["instance"]);
                }
                function instantiateArrayBuffer(receiver) {
                  return getBinaryPromise()
                    .then(function (binary) {
                      return WebAssembly.instantiate(binary, info);
                    })
                    .then(receiver, function (reason) {
                      err("failed to asynchronously prepare wasm: " + reason);
                      abort(reason);
                    });
                }
                function instantiateAsync() {
                  if (
                    !wasmBinary &&
                    typeof WebAssembly.instantiateStreaming === "function" &&
                    !isDataURI(wasmBinaryFile) &&
                    typeof fetch === "function"
                  ) {
                    fetch(wasmBinaryFile, { credentials: "same-origin" }).then(
                      function (response) {
                        var result = WebAssembly.instantiateStreaming(
                          response,
                          info
                        );
                        return result.then(
                          receiveInstantiatedSource,
                          function (reason) {
                            err("wasm streaming compile failed: " + reason);
                            err("falling back to ArrayBuffer instantiation");
                            instantiateArrayBuffer(receiveInstantiatedSource);
                          }
                        );
                      }
                    );
                  } else {
                    return instantiateArrayBuffer(receiveInstantiatedSource);
                  }
                }
                if (Module["instantiateWasm"]) {
                  try {
                    var exports = Module["instantiateWasm"](
                      info,
                      receiveInstance
                    );
                    return exports;
                  } catch (e) {
                    err(
                      "Module.instantiateWasm callback failed with error: " + e
                    );
                    return false;
                  }
                }
                instantiateAsync();
                return {};
              }
              __ATINIT__.push({
                func: function () {
                  ___wasm_call_ctors();
                },
              });
              function _abort() {
                abort();
              }
              function _emscripten_memcpy_big(dest, src, num) {
                HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
              }
              function abortOnCannotGrowMemory(requestedSize) {
                abort("OOM");
              }
              function _emscripten_resize_heap(requestedSize) {
                abortOnCannotGrowMemory();
              }
              var SYSCALLS = {
                buffers: [null, [], []],
                printChar: function (stream, curr) {
                  var buffer = SYSCALLS.buffers[stream];
                  if (curr === 0 || curr === 10) {
                    (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
                    buffer.length = 0;
                  } else {
                    buffer.push(curr);
                  }
                },
                varargs: 0,
                get: function (varargs) {
                  SYSCALLS.varargs += 4;
                  var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
                  return ret;
                },
                getStr: function () {
                  var ret = UTF8ToString(SYSCALLS.get());
                  return ret;
                },
                get64: function () {
                  var low = SYSCALLS.get(),
                    high = SYSCALLS.get();
                  return low;
                },
                getZero: function () {
                  SYSCALLS.get();
                },
              };
              function _fd_close(fd) {
                try {
                  return 0;
                } catch (e) {
                  if (
                    typeof FS === "undefined" ||
                    !(e instanceof FS.ErrnoError)
                  )
                    abort(e);
                  return e.errno;
                }
              }
              function _fd_seek(
                fd,
                offset_low,
                offset_high,
                whence,
                newOffset
              ) {
                try {
                  return 0;
                } catch (e) {
                  if (
                    typeof FS === "undefined" ||
                    !(e instanceof FS.ErrnoError)
                  )
                    abort(e);
                  return e.errno;
                }
              }
              function _fd_write(fd, iov, iovcnt, pnum) {
                try {
                  var num = 0;
                  for (var i = 0; i < iovcnt; i++) {
                    var ptr = HEAP32[(iov + i * 8) >> 2];
                    var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
                    for (var j = 0; j < len; j++) {
                      SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
                    }
                    num += len;
                  }
                  HEAP32[pnum >> 2] = num;
                  return 0;
                } catch (e) {
                  if (
                    typeof FS === "undefined" ||
                    !(e instanceof FS.ErrnoError)
                  )
                    abort(e);
                  return e.errno;
                }
              }
              function _gettimeofday(ptr) {
                var now = Date.now();
                HEAP32[ptr >> 2] = (now / 1e3) | 0;
                HEAP32[(ptr + 4) >> 2] = ((now % 1e3) * 1e3) | 0;
                return 0;
              }
              var asmLibraryArg = {
                f: _abort,
                c: _emscripten_memcpy_big,
                d: _emscripten_resize_heap,
                e: _fd_close,
                b: _fd_seek,
                g: _fd_write,
                a: _gettimeofday,
                memory: wasmMemory,
                table: wasmTable,
              };
              var asm = createWasm();
              Module["asm"] = asm;
              var ___wasm_call_ctors = (Module["___wasm_call_ctors"] =
                function () {
                  return Module["asm"]["h"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btCollisionShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["i"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btCollisionShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["j"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btCollisionShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["k"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionShape_setMargin_1 = (Module[
                "_emscripten_bind_btCollisionShape_setMargin_1"
              ] = function () {
                return Module["asm"]["l"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionShape_getMargin_0 = (Module[
                "_emscripten_bind_btCollisionShape_getMargin_0"
              ] = function () {
                return Module["asm"]["m"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionShape_isCompound_0 = (Module[
                "_emscripten_bind_btCollisionShape_isCompound_0"
              ] = function () {
                return Module["asm"]["n"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btCollisionShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["o"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btCollisionShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["p"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionShape_getAabb_3 = (Module[
                "_emscripten_bind_btCollisionShape_getAabb_3"
              ] = function () {
                return Module["asm"]["q"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btCollisionShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["r"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionShape___destroy___0 = (Module[
                "_emscripten_bind_btCollisionShape___destroy___0"
              ] = function () {
                return Module["asm"]["s"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_btCollisionObject_0 =
                (Module[
                  "_emscripten_bind_btCollisionObject_btCollisionObject_0"
                ] = function () {
                  return Module["asm"]["t"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setAnisotropicFriction_2 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setAnisotropicFriction_2"
                ] = function () {
                  return Module["asm"]["u"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_getCollisionShape_0 =
                (Module[
                  "_emscripten_bind_btCollisionObject_getCollisionShape_0"
                ] = function () {
                  return Module["asm"]["v"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_getActivationState_0 =
                (Module[
                  "_emscripten_bind_btCollisionObject_getActivationState_0"
                ] = function () {
                  return Module["asm"]["w"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setActivationState_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setActivationState_1"
                ] = function () {
                  return Module["asm"]["x"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_forceActivationState_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_forceActivationState_1"
                ] = function () {
                  return Module["asm"]["y"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_activate_0 = (Module[
                "_emscripten_bind_btCollisionObject_activate_0"
              ] = function () {
                return Module["asm"]["z"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_activate_1 = (Module[
                "_emscripten_bind_btCollisionObject_activate_1"
              ] = function () {
                return Module["asm"]["A"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_isActive_0 = (Module[
                "_emscripten_bind_btCollisionObject_isActive_0"
              ] = function () {
                return Module["asm"]["B"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_isKinematicObject_0 =
                (Module[
                  "_emscripten_bind_btCollisionObject_isKinematicObject_0"
                ] = function () {
                  return Module["asm"]["C"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_isStaticObject_0 = (Module[
                "_emscripten_bind_btCollisionObject_isStaticObject_0"
              ] = function () {
                return Module["asm"]["D"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0 =
                (Module[
                  "_emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0"
                ] = function () {
                  return Module["asm"]["E"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setRestitution_1 = (Module[
                "_emscripten_bind_btCollisionObject_setRestitution_1"
              ] = function () {
                return Module["asm"]["F"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_setFriction_1 = (Module[
                "_emscripten_bind_btCollisionObject_setFriction_1"
              ] = function () {
                return Module["asm"]["G"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_setRollingFriction_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setRollingFriction_1"
                ] = function () {
                  return Module["asm"]["H"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setSpinningFriction_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setSpinningFriction_1"
                ] = function () {
                  return Module["asm"]["I"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_getWorldTransform_0 =
                (Module[
                  "_emscripten_bind_btCollisionObject_getWorldTransform_0"
                ] = function () {
                  return Module["asm"]["J"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_getCollisionFlags_0 =
                (Module[
                  "_emscripten_bind_btCollisionObject_getCollisionFlags_0"
                ] = function () {
                  return Module["asm"]["K"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setCollisionFlags_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setCollisionFlags_1"
                ] = function () {
                  return Module["asm"]["L"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setWorldTransform_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setWorldTransform_1"
                ] = function () {
                  return Module["asm"]["M"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setCollisionShape_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setCollisionShape_1"
                ] = function () {
                  return Module["asm"]["N"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setCcdMotionThreshold_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setCcdMotionThreshold_1"
                ] = function () {
                  return Module["asm"]["O"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1"
                ] = function () {
                  return Module["asm"]["P"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject_getUserIndex_0 = (Module[
                "_emscripten_bind_btCollisionObject_getUserIndex_0"
              ] = function () {
                return Module["asm"]["Q"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_setUserIndex_1 = (Module[
                "_emscripten_bind_btCollisionObject_setUserIndex_1"
              ] = function () {
                return Module["asm"]["R"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionObject_setIgnoreCollisionCheck_2 =
                (Module[
                  "_emscripten_bind_btCollisionObject_setIgnoreCollisionCheck_2"
                ] = function () {
                  return Module["asm"]["S"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionObject___destroy___0 = (Module[
                "_emscripten_bind_btCollisionObject___destroy___0"
              ] = function () {
                return Module["asm"]["T"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btConvexShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["U"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btConvexShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["V"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btConvexShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["W"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexShape_setMargin_1 = (Module[
                "_emscripten_bind_btConvexShape_setMargin_1"
              ] = function () {
                return Module["asm"]["X"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_getMargin_0 = (Module[
                "_emscripten_bind_btConvexShape_getMargin_0"
              ] = function () {
                return Module["asm"]["Y"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_isCompound_0 = (Module[
                "_emscripten_bind_btConvexShape_isCompound_0"
              ] = function () {
                return Module["asm"]["Z"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btConvexShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["_"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btConvexShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["$"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_getAabb_3 = (Module[
                "_emscripten_bind_btConvexShape_getAabb_3"
              ] = function () {
                return Module["asm"]["aa"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btConvexShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["ba"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexShape___destroy___0 = (Module[
                "_emscripten_bind_btConvexShape___destroy___0"
              ] = function () {
                return Module["asm"]["ca"].apply(null, arguments);
              });
              var _emscripten_bind_btConcaveShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btConcaveShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["da"].apply(null, arguments);
              });
              var _emscripten_bind_btConcaveShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btConcaveShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["ea"].apply(null, arguments);
              });
              var _emscripten_bind_btConcaveShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btConcaveShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["fa"].apply(null, arguments);
                });
              var _emscripten_bind_btConcaveShape_isCompound_0 = (Module[
                "_emscripten_bind_btConcaveShape_isCompound_0"
              ] = function () {
                return Module["asm"]["ga"].apply(null, arguments);
              });
              var _emscripten_bind_btConcaveShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btConcaveShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["ha"].apply(null, arguments);
              });
              var _emscripten_bind_btConcaveShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btConcaveShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["ia"].apply(null, arguments);
              });
              var _emscripten_bind_btConcaveShape_getAabb_3 = (Module[
                "_emscripten_bind_btConcaveShape_getAabb_3"
              ] = function () {
                return Module["asm"]["ja"].apply(null, arguments);
              });
              var _emscripten_bind_btConcaveShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btConcaveShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["ka"].apply(null, arguments);
                });
              var _emscripten_bind_btConcaveShape___destroy___0 = (Module[
                "_emscripten_bind_btConcaveShape___destroy___0"
              ] = function () {
                return Module["asm"]["la"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionWorld_getDispatcher_0 = (Module[
                "_emscripten_bind_btCollisionWorld_getDispatcher_0"
              ] = function () {
                return Module["asm"]["ma"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionWorld_rayTest_3 = (Module[
                "_emscripten_bind_btCollisionWorld_rayTest_3"
              ] = function () {
                return Module["asm"]["na"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionWorld_addCollisionObject_1 =
                (Module[
                  "_emscripten_bind_btCollisionWorld_addCollisionObject_1"
                ] = function () {
                  return Module["asm"]["oa"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionWorld_addCollisionObject_2 =
                (Module[
                  "_emscripten_bind_btCollisionWorld_addCollisionObject_2"
                ] = function () {
                  return Module["asm"]["pa"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionWorld_addCollisionObject_3 =
                (Module[
                  "_emscripten_bind_btCollisionWorld_addCollisionObject_3"
                ] = function () {
                  return Module["asm"]["qa"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionWorld_removeCollisionObject_1 =
                (Module[
                  "_emscripten_bind_btCollisionWorld_removeCollisionObject_1"
                ] = function () {
                  return Module["asm"]["ra"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionWorld___destroy___0 = (Module[
                "_emscripten_bind_btCollisionWorld___destroy___0"
              ] = function () {
                return Module["asm"]["sa"].apply(null, arguments);
              });
              var _emscripten_bind_btTypedConstraint_enableFeedback_1 = (Module[
                "_emscripten_bind_btTypedConstraint_enableFeedback_1"
              ] = function () {
                return Module["asm"]["ta"].apply(null, arguments);
              });
              var _emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0 =
                (Module[
                  "_emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0"
                ] = function () {
                  return Module["asm"]["ua"].apply(null, arguments);
                });
              var _emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1 =
                (Module[
                  "_emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1"
                ] = function () {
                  return Module["asm"]["va"].apply(null, arguments);
                });
              var _emscripten_bind_btTypedConstraint_getParam_2 = (Module[
                "_emscripten_bind_btTypedConstraint_getParam_2"
              ] = function () {
                return Module["asm"]["wa"].apply(null, arguments);
              });
              var _emscripten_bind_btTypedConstraint_setParam_3 = (Module[
                "_emscripten_bind_btTypedConstraint_setParam_3"
              ] = function () {
                return Module["asm"]["xa"].apply(null, arguments);
              });
              var _emscripten_bind_btTypedConstraint___destroy___0 = (Module[
                "_emscripten_bind_btTypedConstraint___destroy___0"
              ] = function () {
                return Module["asm"]["ya"].apply(null, arguments);
              });
              var _emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_3 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_3"
                ] = function () {
                  return Module["asm"]["za"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_5 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_5"
                ] = function () {
                  return Module["asm"]["Aa"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_setLinearLowerLimit_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_setLinearLowerLimit_1"
                ] = function () {
                  return Module["asm"]["Ba"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_setLinearUpperLimit_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_setLinearUpperLimit_1"
                ] = function () {
                  return Module["asm"]["Ca"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_setAngularLowerLimit_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_setAngularLowerLimit_1"
                ] = function () {
                  return Module["asm"]["Da"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_setAngularUpperLimit_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_setAngularUpperLimit_1"
                ] = function () {
                  return Module["asm"]["Ea"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_getFrameOffsetA_0 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_getFrameOffsetA_0"
                ] = function () {
                  return Module["asm"]["Fa"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_enableFeedback_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_enableFeedback_1"
                ] = function () {
                  return Module["asm"]["Ga"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_getBreakingImpulseThreshold_0 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_getBreakingImpulseThreshold_0"
                ] = function () {
                  return Module["asm"]["Ha"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_setBreakingImpulseThreshold_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint_setBreakingImpulseThreshold_1"
                ] = function () {
                  return Module["asm"]["Ia"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofConstraint_getParam_2 = (Module[
                "_emscripten_bind_btGeneric6DofConstraint_getParam_2"
              ] = function () {
                return Module["asm"]["Ja"].apply(null, arguments);
              });
              var _emscripten_bind_btGeneric6DofConstraint_setParam_3 = (Module[
                "_emscripten_bind_btGeneric6DofConstraint_setParam_3"
              ] = function () {
                return Module["asm"]["Ka"].apply(null, arguments);
              });
              var _emscripten_bind_btGeneric6DofConstraint___destroy___0 =
                (Module[
                  "_emscripten_bind_btGeneric6DofConstraint___destroy___0"
                ] = function () {
                  return Module["asm"]["La"].apply(null, arguments);
                });
              var _emscripten_bind_btStridingMeshInterface_setScaling_1 =
                (Module[
                  "_emscripten_bind_btStridingMeshInterface_setScaling_1"
                ] = function () {
                  return Module["asm"]["Ma"].apply(null, arguments);
                });
              var _emscripten_bind_btStridingMeshInterface___destroy___0 =
                (Module[
                  "_emscripten_bind_btStridingMeshInterface___destroy___0"
                ] = function () {
                  return Module["asm"]["Na"].apply(null, arguments);
                });
              var _emscripten_bind_btBroadphaseInterface_getOverlappingPairCache_0 =
                (Module[
                  "_emscripten_bind_btBroadphaseInterface_getOverlappingPairCache_0"
                ] = function () {
                  return Module["asm"]["Oa"].apply(null, arguments);
                });
              var _emscripten_bind_btBroadphaseInterface___destroy___0 =
                (Module[
                  "_emscripten_bind_btBroadphaseInterface___destroy___0"
                ] = function () {
                  return Module["asm"]["Pa"].apply(null, arguments);
                });
              var _emscripten_bind_btMotionState_getWorldTransform_1 = (Module[
                "_emscripten_bind_btMotionState_getWorldTransform_1"
              ] = function () {
                return Module["asm"]["Qa"].apply(null, arguments);
              });
              var _emscripten_bind_btMotionState_setWorldTransform_1 = (Module[
                "_emscripten_bind_btMotionState_setWorldTransform_1"
              ] = function () {
                return Module["asm"]["Ra"].apply(null, arguments);
              });
              var _emscripten_bind_btMotionState___destroy___0 = (Module[
                "_emscripten_bind_btMotionState___destroy___0"
              ] = function () {
                return Module["asm"]["Sa"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexInternalShape_getImplicitShapeDimensions_0 =
                (Module[
                  "_emscripten_bind_btConvexInternalShape_getImplicitShapeDimensions_0"
                ] = function () {
                  return Module["asm"]["Ta"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexInternalShape_setLocalScaling_1 =
                (Module[
                  "_emscripten_bind_btConvexInternalShape_setLocalScaling_1"
                ] = function () {
                  return Module["asm"]["Ua"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexInternalShape_getLocalScaling_0 =
                (Module[
                  "_emscripten_bind_btConvexInternalShape_getLocalScaling_0"
                ] = function () {
                  return Module["asm"]["Va"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexInternalShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btConvexInternalShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["Wa"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexInternalShape_setMargin_1 = (Module[
                "_emscripten_bind_btConvexInternalShape_setMargin_1"
              ] = function () {
                return Module["asm"]["Xa"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexInternalShape_getMargin_0 = (Module[
                "_emscripten_bind_btConvexInternalShape_getMargin_0"
              ] = function () {
                return Module["asm"]["Ya"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexInternalShape_isCompound_0 = (Module[
                "_emscripten_bind_btConvexInternalShape_isCompound_0"
              ] = function () {
                return Module["asm"]["Za"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexInternalShape_getUserIndex_0 =
                (Module[
                  "_emscripten_bind_btConvexInternalShape_getUserIndex_0"
                ] = function () {
                  return Module["asm"]["_a"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexInternalShape_setUserIndex_1 =
                (Module[
                  "_emscripten_bind_btConvexInternalShape_setUserIndex_1"
                ] = function () {
                  return Module["asm"]["$a"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexInternalShape_getAabb_3 = (Module[
                "_emscripten_bind_btConvexInternalShape_getAabb_3"
              ] = function () {
                return Module["asm"]["ab"].apply(null, arguments);
              });
              var _emscripten_bind_btConvexInternalShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btConvexInternalShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["bb"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexInternalShape___destroy___0 =
                (Module[
                  "_emscripten_bind_btConvexInternalShape___destroy___0"
                ] = function () {
                  return Module["asm"]["cb"].apply(null, arguments);
                });
              var _emscripten_bind_btDynamicsWorld_addAction_1 = (Module[
                "_emscripten_bind_btDynamicsWorld_addAction_1"
              ] = function () {
                return Module["asm"]["db"].apply(null, arguments);
              });
              var _emscripten_bind_btDynamicsWorld_removeAction_1 = (Module[
                "_emscripten_bind_btDynamicsWorld_removeAction_1"
              ] = function () {
                return Module["asm"]["eb"].apply(null, arguments);
              });
              var _emscripten_bind_btDynamicsWorld_getSolverInfo_0 = (Module[
                "_emscripten_bind_btDynamicsWorld_getSolverInfo_0"
              ] = function () {
                return Module["asm"]["fb"].apply(null, arguments);
              });
              var _emscripten_bind_btDynamicsWorld_getDispatcher_0 = (Module[
                "_emscripten_bind_btDynamicsWorld_getDispatcher_0"
              ] = function () {
                return Module["asm"]["gb"].apply(null, arguments);
              });
              var _emscripten_bind_btDynamicsWorld_rayTest_3 = (Module[
                "_emscripten_bind_btDynamicsWorld_rayTest_3"
              ] = function () {
                return Module["asm"]["hb"].apply(null, arguments);
              });
              var _emscripten_bind_btDynamicsWorld_addCollisionObject_1 =
                (Module[
                  "_emscripten_bind_btDynamicsWorld_addCollisionObject_1"
                ] = function () {
                  return Module["asm"]["ib"].apply(null, arguments);
                });
              var _emscripten_bind_btDynamicsWorld_addCollisionObject_2 =
                (Module[
                  "_emscripten_bind_btDynamicsWorld_addCollisionObject_2"
                ] = function () {
                  return Module["asm"]["jb"].apply(null, arguments);
                });
              var _emscripten_bind_btDynamicsWorld_addCollisionObject_3 =
                (Module[
                  "_emscripten_bind_btDynamicsWorld_addCollisionObject_3"
                ] = function () {
                  return Module["asm"]["kb"].apply(null, arguments);
                });
              var _emscripten_bind_btDynamicsWorld_removeCollisionObject_1 =
                (Module[
                  "_emscripten_bind_btDynamicsWorld_removeCollisionObject_1"
                ] = function () {
                  return Module["asm"]["lb"].apply(null, arguments);
                });
              var _emscripten_bind_btDynamicsWorld___destroy___0 = (Module[
                "_emscripten_bind_btDynamicsWorld___destroy___0"
              ] = function () {
                return Module["asm"]["mb"].apply(null, arguments);
              });
              var _emscripten_bind_btDispatcher_getNumManifolds_0 = (Module[
                "_emscripten_bind_btDispatcher_getNumManifolds_0"
              ] = function () {
                return Module["asm"]["nb"].apply(null, arguments);
              });
              var _emscripten_bind_btDispatcher_getManifoldByIndexInternal_1 =
                (Module[
                  "_emscripten_bind_btDispatcher_getManifoldByIndexInternal_1"
                ] = function () {
                  return Module["asm"]["ob"].apply(null, arguments);
                });
              var _emscripten_bind_btDispatcher___destroy___0 = (Module[
                "_emscripten_bind_btDispatcher___destroy___0"
              ] = function () {
                return Module["asm"]["pb"].apply(null, arguments);
              });
              var _emscripten_bind_RayResultCallback_hasHit_0 = (Module[
                "_emscripten_bind_RayResultCallback_hasHit_0"
              ] = function () {
                return Module["asm"]["qb"].apply(null, arguments);
              });
              var _emscripten_bind_RayResultCallback_get_m_collisionFilterGroup_0 =
                (Module[
                  "_emscripten_bind_RayResultCallback_get_m_collisionFilterGroup_0"
                ] = function () {
                  return Module["asm"]["rb"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_set_m_collisionFilterGroup_1 =
                (Module[
                  "_emscripten_bind_RayResultCallback_set_m_collisionFilterGroup_1"
                ] = function () {
                  return Module["asm"]["sb"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_get_m_collisionFilterMask_0 =
                (Module[
                  "_emscripten_bind_RayResultCallback_get_m_collisionFilterMask_0"
                ] = function () {
                  return Module["asm"]["tb"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_set_m_collisionFilterMask_1 =
                (Module[
                  "_emscripten_bind_RayResultCallback_set_m_collisionFilterMask_1"
                ] = function () {
                  return Module["asm"]["ub"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_get_m_shapePart_0 =
                (Module[
                  "_emscripten_bind_RayResultCallback_get_m_shapePart_0"
                ] = function () {
                  return Module["asm"]["vb"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_set_m_shapePart_1 =
                (Module[
                  "_emscripten_bind_RayResultCallback_set_m_shapePart_1"
                ] = function () {
                  return Module["asm"]["wb"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_get_m_closestHitFraction_0 =
                (Module[
                  "_emscripten_bind_RayResultCallback_get_m_closestHitFraction_0"
                ] = function () {
                  return Module["asm"]["xb"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_set_m_closestHitFraction_1 =
                (Module[
                  "_emscripten_bind_RayResultCallback_set_m_closestHitFraction_1"
                ] = function () {
                  return Module["asm"]["yb"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_get_m_collisionObject_0 =
                (Module[
                  "_emscripten_bind_RayResultCallback_get_m_collisionObject_0"
                ] = function () {
                  return Module["asm"]["zb"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback_set_m_collisionObject_1 =
                (Module[
                  "_emscripten_bind_RayResultCallback_set_m_collisionObject_1"
                ] = function () {
                  return Module["asm"]["Ab"].apply(null, arguments);
                });
              var _emscripten_bind_RayResultCallback___destroy___0 = (Module[
                "_emscripten_bind_RayResultCallback___destroy___0"
              ] = function () {
                return Module["asm"]["Bb"].apply(null, arguments);
              });
              var _emscripten_bind_btActionInterface_updateAction_2 = (Module[
                "_emscripten_bind_btActionInterface_updateAction_2"
              ] = function () {
                return Module["asm"]["Cb"].apply(null, arguments);
              });
              var _emscripten_bind_btActionInterface___destroy___0 = (Module[
                "_emscripten_bind_btActionInterface___destroy___0"
              ] = function () {
                return Module["asm"]["Db"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMeshShape_setLocalScaling_1 =
                (Module[
                  "_emscripten_bind_btTriangleMeshShape_setLocalScaling_1"
                ] = function () {
                  return Module["asm"]["Eb"].apply(null, arguments);
                });
              var _emscripten_bind_btTriangleMeshShape_getLocalScaling_0 =
                (Module[
                  "_emscripten_bind_btTriangleMeshShape_getLocalScaling_0"
                ] = function () {
                  return Module["asm"]["Fb"].apply(null, arguments);
                });
              var _emscripten_bind_btTriangleMeshShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btTriangleMeshShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["Gb"].apply(null, arguments);
                });
              var _emscripten_bind_btTriangleMeshShape_isCompound_0 = (Module[
                "_emscripten_bind_btTriangleMeshShape_isCompound_0"
              ] = function () {
                return Module["asm"]["Hb"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMeshShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btTriangleMeshShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["Ib"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMeshShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btTriangleMeshShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["Jb"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMeshShape_getAabb_3 = (Module[
                "_emscripten_bind_btTriangleMeshShape_getAabb_3"
              ] = function () {
                return Module["asm"]["Kb"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMeshShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btTriangleMeshShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["Lb"].apply(null, arguments);
                });
              var _emscripten_bind_btTriangleMeshShape___destroy___0 = (Module[
                "_emscripten_bind_btTriangleMeshShape___destroy___0"
              ] = function () {
                return Module["asm"]["Mb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_btGhostObject_0 = (Module[
                "_emscripten_bind_btGhostObject_btGhostObject_0"
              ] = function () {
                return Module["asm"]["Nb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_getNumOverlappingObjects_0 =
                (Module[
                  "_emscripten_bind_btGhostObject_getNumOverlappingObjects_0"
                ] = function () {
                  return Module["asm"]["Ob"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject_getOverlappingObject_1 =
                (Module[
                  "_emscripten_bind_btGhostObject_getOverlappingObject_1"
                ] = function () {
                  return Module["asm"]["Pb"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject_setAnisotropicFriction_2 =
                (Module[
                  "_emscripten_bind_btGhostObject_setAnisotropicFriction_2"
                ] = function () {
                  return Module["asm"]["Qb"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject_getCollisionShape_0 = (Module[
                "_emscripten_bind_btGhostObject_getCollisionShape_0"
              ] = function () {
                return Module["asm"]["Rb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_getActivationState_0 = (Module[
                "_emscripten_bind_btGhostObject_getActivationState_0"
              ] = function () {
                return Module["asm"]["Sb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setActivationState_1 = (Module[
                "_emscripten_bind_btGhostObject_setActivationState_1"
              ] = function () {
                return Module["asm"]["Tb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_forceActivationState_1 =
                (Module[
                  "_emscripten_bind_btGhostObject_forceActivationState_1"
                ] = function () {
                  return Module["asm"]["Ub"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject_activate_0 = (Module[
                "_emscripten_bind_btGhostObject_activate_0"
              ] = function () {
                return Module["asm"]["Vb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_activate_1 = (Module[
                "_emscripten_bind_btGhostObject_activate_1"
              ] = function () {
                return Module["asm"]["Wb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_isActive_0 = (Module[
                "_emscripten_bind_btGhostObject_isActive_0"
              ] = function () {
                return Module["asm"]["Xb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_isKinematicObject_0 = (Module[
                "_emscripten_bind_btGhostObject_isKinematicObject_0"
              ] = function () {
                return Module["asm"]["Yb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_isStaticObject_0 = (Module[
                "_emscripten_bind_btGhostObject_isStaticObject_0"
              ] = function () {
                return Module["asm"]["Zb"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_isStaticOrKinematicObject_0 =
                (Module[
                  "_emscripten_bind_btGhostObject_isStaticOrKinematicObject_0"
                ] = function () {
                  return Module["asm"]["_b"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject_setRestitution_1 = (Module[
                "_emscripten_bind_btGhostObject_setRestitution_1"
              ] = function () {
                return Module["asm"]["$b"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setFriction_1 = (Module[
                "_emscripten_bind_btGhostObject_setFriction_1"
              ] = function () {
                return Module["asm"]["ac"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setRollingFriction_1 = (Module[
                "_emscripten_bind_btGhostObject_setRollingFriction_1"
              ] = function () {
                return Module["asm"]["bc"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setSpinningFriction_1 =
                (Module[
                  "_emscripten_bind_btGhostObject_setSpinningFriction_1"
                ] = function () {
                  return Module["asm"]["cc"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject_getWorldTransform_0 = (Module[
                "_emscripten_bind_btGhostObject_getWorldTransform_0"
              ] = function () {
                return Module["asm"]["dc"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_getCollisionFlags_0 = (Module[
                "_emscripten_bind_btGhostObject_getCollisionFlags_0"
              ] = function () {
                return Module["asm"]["ec"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setCollisionFlags_1 = (Module[
                "_emscripten_bind_btGhostObject_setCollisionFlags_1"
              ] = function () {
                return Module["asm"]["fc"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setWorldTransform_1 = (Module[
                "_emscripten_bind_btGhostObject_setWorldTransform_1"
              ] = function () {
                return Module["asm"]["gc"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setCollisionShape_1 = (Module[
                "_emscripten_bind_btGhostObject_setCollisionShape_1"
              ] = function () {
                return Module["asm"]["hc"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setCcdMotionThreshold_1 =
                (Module[
                  "_emscripten_bind_btGhostObject_setCcdMotionThreshold_1"
                ] = function () {
                  return Module["asm"]["ic"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject_setCcdSweptSphereRadius_1 =
                (Module[
                  "_emscripten_bind_btGhostObject_setCcdSweptSphereRadius_1"
                ] = function () {
                  return Module["asm"]["jc"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject_getUserIndex_0 = (Module[
                "_emscripten_bind_btGhostObject_getUserIndex_0"
              ] = function () {
                return Module["asm"]["kc"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setUserIndex_1 = (Module[
                "_emscripten_bind_btGhostObject_setUserIndex_1"
              ] = function () {
                return Module["asm"]["lc"].apply(null, arguments);
              });
              var _emscripten_bind_btGhostObject_setIgnoreCollisionCheck_2 =
                (Module[
                  "_emscripten_bind_btGhostObject_setIgnoreCollisionCheck_2"
                ] = function () {
                  return Module["asm"]["mc"].apply(null, arguments);
                });
              var _emscripten_bind_btGhostObject___destroy___0 = (Module[
                "_emscripten_bind_btGhostObject___destroy___0"
              ] = function () {
                return Module["asm"]["nc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord_x_0 = (Module[
                "_emscripten_bind_btQuadWord_x_0"
              ] = function () {
                return Module["asm"]["oc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord_y_0 = (Module[
                "_emscripten_bind_btQuadWord_y_0"
              ] = function () {
                return Module["asm"]["pc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord_z_0 = (Module[
                "_emscripten_bind_btQuadWord_z_0"
              ] = function () {
                return Module["asm"]["qc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord_w_0 = (Module[
                "_emscripten_bind_btQuadWord_w_0"
              ] = function () {
                return Module["asm"]["rc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord_setX_1 = (Module[
                "_emscripten_bind_btQuadWord_setX_1"
              ] = function () {
                return Module["asm"]["sc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord_setY_1 = (Module[
                "_emscripten_bind_btQuadWord_setY_1"
              ] = function () {
                return Module["asm"]["tc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord_setZ_1 = (Module[
                "_emscripten_bind_btQuadWord_setZ_1"
              ] = function () {
                return Module["asm"]["uc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord_setW_1 = (Module[
                "_emscripten_bind_btQuadWord_setW_1"
              ] = function () {
                return Module["asm"]["vc"].apply(null, arguments);
              });
              var _emscripten_bind_btQuadWord___destroy___0 = (Module[
                "_emscripten_bind_btQuadWord___destroy___0"
              ] = function () {
                return Module["asm"]["wc"].apply(null, arguments);
              });
              var _emscripten_bind_btMatrix3x3_getRotation_1 = (Module[
                "_emscripten_bind_btMatrix3x3_getRotation_1"
              ] = function () {
                return Module["asm"]["xc"].apply(null, arguments);
              });
              var _emscripten_bind_btMatrix3x3___destroy___0 = (Module[
                "_emscripten_bind_btMatrix3x3___destroy___0"
              ] = function () {
                return Module["asm"]["yc"].apply(null, arguments);
              });
              var _emscripten_bind_btScalarArray_size_0 = (Module[
                "_emscripten_bind_btScalarArray_size_0"
              ] = function () {
                return Module["asm"]["zc"].apply(null, arguments);
              });
              var _emscripten_bind_btScalarArray_at_1 = (Module[
                "_emscripten_bind_btScalarArray_at_1"
              ] = function () {
                return Module["asm"]["Ac"].apply(null, arguments);
              });
              var _emscripten_bind_btScalarArray_clear_0 = (Module[
                "_emscripten_bind_btScalarArray_clear_0"
              ] = function () {
                return Module["asm"]["Bc"].apply(null, arguments);
              });
              var _emscripten_bind_btScalarArray___destroy___0 = (Module[
                "_emscripten_bind_btScalarArray___destroy___0"
              ] = function () {
                return Module["asm"]["Cc"].apply(null, arguments);
              });
              var _emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2"
                ] = function () {
                  return Module["asm"]["Dc"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3"
                ] = function () {
                  return Module["asm"]["Ec"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape_setLocalScaling_1 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_setLocalScaling_1"
                ] = function () {
                  return Module["asm"]["Fc"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape_getLocalScaling_0 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_getLocalScaling_0"
                ] = function () {
                  return Module["asm"]["Gc"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["Hc"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape_isCompound_0 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_isCompound_0"
                ] = function () {
                  return Module["asm"]["Ic"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape_getUserIndex_0 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_getUserIndex_0"
                ] = function () {
                  return Module["asm"]["Jc"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape_setUserIndex_1 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_setUserIndex_1"
                ] = function () {
                  return Module["asm"]["Kc"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape_getAabb_3 = (Module[
                "_emscripten_bind_btBvhTriangleMeshShape_getAabb_3"
              ] = function () {
                return Module["asm"]["Lc"].apply(null, arguments);
              });
              var _emscripten_bind_btBvhTriangleMeshShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["Mc"].apply(null, arguments);
                });
              var _emscripten_bind_btBvhTriangleMeshShape___destroy___0 =
                (Module[
                  "_emscripten_bind_btBvhTriangleMeshShape___destroy___0"
                ] = function () {
                  return Module["asm"]["Nc"].apply(null, arguments);
                });
              var _emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0 =
                (Module[
                  "_emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0"
                ] = function () {
                  return Module["asm"]["Oc"].apply(null, arguments);
                });
              var _emscripten_bind_btDbvtBroadphase_getOverlappingPairCache_0 =
                (Module[
                  "_emscripten_bind_btDbvtBroadphase_getOverlappingPairCache_0"
                ] = function () {
                  return Module["asm"]["Pc"].apply(null, arguments);
                });
              var _emscripten_bind_btDbvtBroadphase___destroy___0 = (Module[
                "_emscripten_bind_btDbvtBroadphase___destroy___0"
              ] = function () {
                return Module["asm"]["Qc"].apply(null, arguments);
              });
              var _emscripten_bind_btIntArray_size_0 = (Module[
                "_emscripten_bind_btIntArray_size_0"
              ] = function () {
                return Module["asm"]["Rc"].apply(null, arguments);
              });
              var _emscripten_bind_btIntArray_at_1 = (Module[
                "_emscripten_bind_btIntArray_at_1"
              ] = function () {
                return Module["asm"]["Sc"].apply(null, arguments);
              });
              var _emscripten_bind_btIntArray_clear_0 = (Module[
                "_emscripten_bind_btIntArray_clear_0"
              ] = function () {
                return Module["asm"]["Tc"].apply(null, arguments);
              });
              var _emscripten_bind_btIntArray___destroy___0 = (Module[
                "_emscripten_bind_btIntArray___destroy___0"
              ] = function () {
                return Module["asm"]["Uc"].apply(null, arguments);
              });
              var _emscripten_bind_btConstCollisionObjectArray_size_0 = (Module[
                "_emscripten_bind_btConstCollisionObjectArray_size_0"
              ] = function () {
                return Module["asm"]["Vc"].apply(null, arguments);
              });
              var _emscripten_bind_btConstCollisionObjectArray_at_1 = (Module[
                "_emscripten_bind_btConstCollisionObjectArray_at_1"
              ] = function () {
                return Module["asm"]["Wc"].apply(null, arguments);
              });
              var _emscripten_bind_btConstCollisionObjectArray_clear_0 =
                (Module[
                  "_emscripten_bind_btConstCollisionObjectArray_clear_0"
                ] = function () {
                  return Module["asm"]["Xc"].apply(null, arguments);
                });
              var _emscripten_bind_btConstCollisionObjectArray___destroy___0 =
                (Module[
                  "_emscripten_bind_btConstCollisionObjectArray___destroy___0"
                ] = function () {
                  return Module["asm"]["Yc"].apply(null, arguments);
                });
              var _emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0 =
                (Module[
                  "_emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0"
                ] = function () {
                  return Module["asm"]["Zc"].apply(null, arguments);
                });
              var _emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1 =
                (Module[
                  "_emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1"
                ] = function () {
                  return Module["asm"]["_c"].apply(null, arguments);
                });
              var _emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0 =
                (Module[
                  "_emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0"
                ] = function () {
                  return Module["asm"]["$c"].apply(null, arguments);
                });
              var _emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1 =
                (Module[
                  "_emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1"
                ] = function () {
                  return Module["asm"]["ad"].apply(null, arguments);
                });
              var _emscripten_bind_btBroadphaseProxy___destroy___0 = (Module[
                "_emscripten_bind_btBroadphaseProxy___destroy___0"
              ] = function () {
                return Module["asm"]["bd"].apply(null, arguments);
              });
              var _emscripten_bind_btSliderConstraint_btSliderConstraint_3 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_btSliderConstraint_3"
                ] = function () {
                  return Module["asm"]["cd"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_btSliderConstraint_5 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_btSliderConstraint_5"
                ] = function () {
                  return Module["asm"]["dd"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_setLowerLinLimit_1 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_setLowerLinLimit_1"
                ] = function () {
                  return Module["asm"]["ed"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_setUpperLinLimit_1 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_setUpperLinLimit_1"
                ] = function () {
                  return Module["asm"]["fd"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_setLowerAngLimit_1 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_setLowerAngLimit_1"
                ] = function () {
                  return Module["asm"]["gd"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_setUpperAngLimit_1 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_setUpperAngLimit_1"
                ] = function () {
                  return Module["asm"]["hd"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_enableFeedback_1 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_enableFeedback_1"
                ] = function () {
                  return Module["asm"]["id"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_getBreakingImpulseThreshold_0 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_getBreakingImpulseThreshold_0"
                ] = function () {
                  return Module["asm"]["jd"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_setBreakingImpulseThreshold_1 =
                (Module[
                  "_emscripten_bind_btSliderConstraint_setBreakingImpulseThreshold_1"
                ] = function () {
                  return Module["asm"]["kd"].apply(null, arguments);
                });
              var _emscripten_bind_btSliderConstraint_getParam_2 = (Module[
                "_emscripten_bind_btSliderConstraint_getParam_2"
              ] = function () {
                return Module["asm"]["ld"].apply(null, arguments);
              });
              var _emscripten_bind_btSliderConstraint_setParam_3 = (Module[
                "_emscripten_bind_btSliderConstraint_setParam_3"
              ] = function () {
                return Module["asm"]["md"].apply(null, arguments);
              });
              var _emscripten_bind_btSliderConstraint___destroy___0 = (Module[
                "_emscripten_bind_btSliderConstraint___destroy___0"
              ] = function () {
                return Module["asm"]["nd"].apply(null, arguments);
              });
              var _emscripten_bind_btIndexedMesh_get_m_numTriangles_0 = (Module[
                "_emscripten_bind_btIndexedMesh_get_m_numTriangles_0"
              ] = function () {
                return Module["asm"]["od"].apply(null, arguments);
              });
              var _emscripten_bind_btIndexedMesh_set_m_numTriangles_1 = (Module[
                "_emscripten_bind_btIndexedMesh_set_m_numTriangles_1"
              ] = function () {
                return Module["asm"]["pd"].apply(null, arguments);
              });
              var _emscripten_bind_btIndexedMesh___destroy___0 = (Module[
                "_emscripten_bind_btIndexedMesh___destroy___0"
              ] = function () {
                return Module["asm"]["qd"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3"
                ] = function () {
                  return Module["asm"]["rd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4"
                ] = function () {
                  return Module["asm"]["sd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0"
                ] = function () {
                  return Module["asm"]["td"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1"
                ] = function () {
                  return Module["asm"]["ud"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0"
                ] = function () {
                  return Module["asm"]["vd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1"
                ] = function () {
                  return Module["asm"]["wd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0"
                ] = function () {
                  return Module["asm"]["xd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1"
                ] = function () {
                  return Module["asm"]["yd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0"
                ] = function () {
                  return Module["asm"]["zd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1"
                ] = function () {
                  return Module["asm"]["Ad"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0"
                ] = function () {
                  return Module["asm"]["Bd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1"
                ] = function () {
                  return Module["asm"]["Cd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0"
                ] = function () {
                  return Module["asm"]["Dd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1"
                ] = function () {
                  return Module["asm"]["Ed"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0"
                ] = function () {
                  return Module["asm"]["Fd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1"
                ] = function () {
                  return Module["asm"]["Gd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDamping_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDamping_0"
                ] = function () {
                  return Module["asm"]["Hd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDamping_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDamping_1"
                ] = function () {
                  return Module["asm"]["Id"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDampingFactor_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDampingFactor_0"
                ] = function () {
                  return Module["asm"]["Jd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDampingFactor_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDampingFactor_1"
                ] = function () {
                  return Module["asm"]["Kd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalLinearDampingThresholdSqr_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalLinearDampingThresholdSqr_0"
                ] = function () {
                  return Module["asm"]["Ld"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalLinearDampingThresholdSqr_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalLinearDampingThresholdSqr_1"
                ] = function () {
                  return Module["asm"]["Md"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingThresholdSqr_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingThresholdSqr_0"
                ] = function () {
                  return Module["asm"]["Nd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingThresholdSqr_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingThresholdSqr_1"
                ] = function () {
                  return Module["asm"]["Od"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingFactor_0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingFactor_0"
                ] = function () {
                  return Module["asm"]["Pd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingFactor_1 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingFactor_1"
                ] = function () {
                  return Module["asm"]["Qd"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBodyConstructionInfo___destroy___0 =
                (Module[
                  "_emscripten_bind_btRigidBodyConstructionInfo___destroy___0"
                ] = function () {
                  return Module["asm"]["Rd"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_getAppliedImpulse_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_getAppliedImpulse_0"
                ] = function () {
                  return Module["asm"]["Sd"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_getDistance_0 = (Module[
                "_emscripten_bind_btManifoldPoint_getDistance_0"
              ] = function () {
                return Module["asm"]["Td"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_getShape0_0 = (Module[
                "_emscripten_bind_btManifoldPoint_getShape0_0"
              ] = function () {
                return Module["asm"]["Ud"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_getShape1_0 = (Module[
                "_emscripten_bind_btManifoldPoint_getShape1_0"
              ] = function () {
                return Module["asm"]["Vd"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_get_m_localPointA_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_get_m_localPointA_0"
                ] = function () {
                  return Module["asm"]["Wd"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_set_m_localPointA_1 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_set_m_localPointA_1"
                ] = function () {
                  return Module["asm"]["Xd"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_get_m_localPointB_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_get_m_localPointB_0"
                ] = function () {
                  return Module["asm"]["Yd"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_set_m_localPointB_1 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_set_m_localPointB_1"
                ] = function () {
                  return Module["asm"]["Zd"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0"
                ] = function () {
                  return Module["asm"]["_d"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1"
                ] = function () {
                  return Module["asm"]["$d"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0"
                ] = function () {
                  return Module["asm"]["ae"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1"
                ] = function () {
                  return Module["asm"]["be"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0"
                ] = function () {
                  return Module["asm"]["ce"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1"
                ] = function () {
                  return Module["asm"]["de"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_get_m_distance1_0 = (Module[
                "_emscripten_bind_btManifoldPoint_get_m_distance1_0"
              ] = function () {
                return Module["asm"]["ee"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_set_m_distance1_1 = (Module[
                "_emscripten_bind_btManifoldPoint_set_m_distance1_1"
              ] = function () {
                return Module["asm"]["fe"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_get_m_index0_0 = (Module[
                "_emscripten_bind_btManifoldPoint_get_m_index0_0"
              ] = function () {
                return Module["asm"]["ge"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_set_m_index0_1 = (Module[
                "_emscripten_bind_btManifoldPoint_set_m_index0_1"
              ] = function () {
                return Module["asm"]["he"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_get_m_index1_0 = (Module[
                "_emscripten_bind_btManifoldPoint_get_m_index1_0"
              ] = function () {
                return Module["asm"]["ie"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_set_m_index1_1 = (Module[
                "_emscripten_bind_btManifoldPoint_set_m_index1_1"
              ] = function () {
                return Module["asm"]["je"].apply(null, arguments);
              });
              var _emscripten_bind_btManifoldPoint_get_m_userPersistentData_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_get_m_userPersistentData_0"
                ] = function () {
                  return Module["asm"]["ke"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_set_m_userPersistentData_1 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_set_m_userPersistentData_1"
                ] = function () {
                  return Module["asm"]["le"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_get_m_userPersistentData0_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_get_m_userPersistentData0_0"
                ] = function () {
                  return Module["asm"]["me"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_set_m_userPersistentData0_1 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_set_m_userPersistentData0_1"
                ] = function () {
                  return Module["asm"]["ne"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_get_m_userPersistentData1_0 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_get_m_userPersistentData1_0"
                ] = function () {
                  return Module["asm"]["oe"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint_set_m_userPersistentData1_1 =
                (Module[
                  "_emscripten_bind_btManifoldPoint_set_m_userPersistentData1_1"
                ] = function () {
                  return Module["asm"]["pe"].apply(null, arguments);
                });
              var _emscripten_bind_btManifoldPoint___destroy___0 = (Module[
                "_emscripten_bind_btManifoldPoint___destroy___0"
              ] = function () {
                return Module["asm"]["qe"].apply(null, arguments);
              });
              var _emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0 =
                (Module[
                  "_emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0"
                ] = function () {
                  return Module["asm"]["re"].apply(null, arguments);
                });
              var _emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0 =
                (Module[
                  "_emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0"
                ] = function () {
                  return Module["asm"]["se"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4"
                ] = function () {
                  return Module["asm"]["te"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_setGravity_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_setGravity_1"
                ] = function () {
                  return Module["asm"]["ue"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_getGravity_0 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_getGravity_0"
                ] = function () {
                  return Module["asm"]["ve"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1"
                ] = function () {
                  return Module["asm"]["we"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3"
                ] = function () {
                  return Module["asm"]["xe"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1"
                ] = function () {
                  return Module["asm"]["ye"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1"
                ] = function () {
                  return Module["asm"]["ze"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2"
                ] = function () {
                  return Module["asm"]["Ae"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1"
                ] = function () {
                  return Module["asm"]["Be"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1"
                ] = function () {
                  return Module["asm"]["Ce"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2"
                ] = function () {
                  return Module["asm"]["De"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3"
                ] = function () {
                  return Module["asm"]["Ee"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_getDispatcher_0 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_getDispatcher_0"
                ] = function () {
                  return Module["asm"]["Fe"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_rayTest_3 = (Module[
                "_emscripten_bind_btDiscreteDynamicsWorld_rayTest_3"
              ] = function () {
                return Module["asm"]["Ge"].apply(null, arguments);
              });
              var _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1"
                ] = function () {
                  return Module["asm"]["He"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2"
                ] = function () {
                  return Module["asm"]["Ie"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3"
                ] = function () {
                  return Module["asm"]["Je"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1"
                ] = function () {
                  return Module["asm"]["Ke"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_addAction_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_addAction_1"
                ] = function () {
                  return Module["asm"]["Le"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_removeAction_1 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_removeAction_1"
                ] = function () {
                  return Module["asm"]["Me"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld_getSolverInfo_0 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld_getSolverInfo_0"
                ] = function () {
                  return Module["asm"]["Ne"].apply(null, arguments);
                });
              var _emscripten_bind_btDiscreteDynamicsWorld___destroy___0 =
                (Module[
                  "_emscripten_bind_btDiscreteDynamicsWorld___destroy___0"
                ] = function () {
                  return Module["asm"]["Oe"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2"
                ] = function () {
                  return Module["asm"]["Pe"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4"
                ] = function () {
                  return Module["asm"]["Qe"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_setPivotA_1 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_setPivotA_1"
                ] = function () {
                  return Module["asm"]["Re"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_setPivotB_1 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_setPivotB_1"
                ] = function () {
                  return Module["asm"]["Se"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_getPivotInA_0 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_getPivotInA_0"
                ] = function () {
                  return Module["asm"]["Te"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_getPivotInB_0 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_getPivotInB_0"
                ] = function () {
                  return Module["asm"]["Ue"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_enableFeedback_1 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_enableFeedback_1"
                ] = function () {
                  return Module["asm"]["Ve"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0"
                ] = function () {
                  return Module["asm"]["We"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1"
                ] = function () {
                  return Module["asm"]["Xe"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_getParam_2 = (Module[
                "_emscripten_bind_btPoint2PointConstraint_getParam_2"
              ] = function () {
                return Module["asm"]["Ye"].apply(null, arguments);
              });
              var _emscripten_bind_btPoint2PointConstraint_setParam_3 = (Module[
                "_emscripten_bind_btPoint2PointConstraint_setParam_3"
              ] = function () {
                return Module["asm"]["Ze"].apply(null, arguments);
              });
              var _emscripten_bind_btPoint2PointConstraint_get_m_setting_0 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_get_m_setting_0"
                ] = function () {
                  return Module["asm"]["_e"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint_set_m_setting_1 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint_set_m_setting_1"
                ] = function () {
                  return Module["asm"]["$e"].apply(null, arguments);
                });
              var _emscripten_bind_btPoint2PointConstraint___destroy___0 =
                (Module[
                  "_emscripten_bind_btPoint2PointConstraint___destroy___0"
                ] = function () {
                  return Module["asm"]["af"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1"
                ] = function () {
                  return Module["asm"]["bf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2"
                ] = function () {
                  return Module["asm"]["cf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1"
                ] = function () {
                  return Module["asm"]["df"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0"
                ] = function () {
                  return Module["asm"]["ef"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["ff"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_setMargin_1 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_setMargin_1"
                ] = function () {
                  return Module["asm"]["gf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_getMargin_0 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_getMargin_0"
                ] = function () {
                  return Module["asm"]["hf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_isCompound_0 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_isCompound_0"
                ] = function () {
                  return Module["asm"]["jf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_getUserIndex_0 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_getUserIndex_0"
                ] = function () {
                  return Module["asm"]["kf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_setUserIndex_1 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_setUserIndex_1"
                ] = function () {
                  return Module["asm"]["lf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_getAabb_3 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_getAabb_3"
                ] = function () {
                  return Module["asm"]["mf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["nf"].apply(null, arguments);
                });
              var _emscripten_bind_btConvexTriangleMeshShape___destroy___0 =
                (Module[
                  "_emscripten_bind_btConvexTriangleMeshShape___destroy___0"
                ] = function () {
                  return Module["asm"]["of"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_2 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_2"
                ] = function () {
                  return Module["asm"]["pf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_4 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_4"
                ] = function () {
                  return Module["asm"]["qf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_setLimit_2 = (Module[
                "_emscripten_bind_btConeTwistConstraint_setLimit_2"
              ] = function () {
                return Module["asm"]["rf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeTwistConstraint_setAngularOnly_1 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_setAngularOnly_1"
                ] = function () {
                  return Module["asm"]["sf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_setDamping_1 = (Module[
                "_emscripten_bind_btConeTwistConstraint_setDamping_1"
              ] = function () {
                return Module["asm"]["tf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeTwistConstraint_enableMotor_1 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_enableMotor_1"
                ] = function () {
                  return Module["asm"]["uf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_setMaxMotorImpulse_1 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_setMaxMotorImpulse_1"
                ] = function () {
                  return Module["asm"]["vf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_setMaxMotorImpulseNormalized_1 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_setMaxMotorImpulseNormalized_1"
                ] = function () {
                  return Module["asm"]["wf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_setMotorTarget_1 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_setMotorTarget_1"
                ] = function () {
                  return Module["asm"]["xf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_setMotorTargetInConstraintSpace_1 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_setMotorTargetInConstraintSpace_1"
                ] = function () {
                  return Module["asm"]["yf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_enableFeedback_1 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_enableFeedback_1"
                ] = function () {
                  return Module["asm"]["zf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_getBreakingImpulseThreshold_0 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_getBreakingImpulseThreshold_0"
                ] = function () {
                  return Module["asm"]["Af"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_setBreakingImpulseThreshold_1 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint_setBreakingImpulseThreshold_1"
                ] = function () {
                  return Module["asm"]["Bf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeTwistConstraint_getParam_2 = (Module[
                "_emscripten_bind_btConeTwistConstraint_getParam_2"
              ] = function () {
                return Module["asm"]["Cf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeTwistConstraint_setParam_3 = (Module[
                "_emscripten_bind_btConeTwistConstraint_setParam_3"
              ] = function () {
                return Module["asm"]["Df"].apply(null, arguments);
              });
              var _emscripten_bind_btConeTwistConstraint___destroy___0 =
                (Module[
                  "_emscripten_bind_btConeTwistConstraint___destroy___0"
                ] = function () {
                  return Module["asm"]["Ef"].apply(null, arguments);
                });
              var _emscripten_bind_btConeShape_btConeShape_2 = (Module[
                "_emscripten_bind_btConeShape_btConeShape_2"
              ] = function () {
                return Module["asm"]["Ff"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_setRadius_1 = (Module[
                "_emscripten_bind_btConeShape_setRadius_1"
              ] = function () {
                return Module["asm"]["Gf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_setHeight_1 = (Module[
                "_emscripten_bind_btConeShape_setHeight_1"
              ] = function () {
                return Module["asm"]["Hf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_setConeUpIndex_1 = (Module[
                "_emscripten_bind_btConeShape_setConeUpIndex_1"
              ] = function () {
                return Module["asm"]["If"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btConeShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["Jf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btConeShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["Kf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btConeShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["Lf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeShape_isCompound_0 = (Module[
                "_emscripten_bind_btConeShape_isCompound_0"
              ] = function () {
                return Module["asm"]["Mf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btConeShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["Nf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btConeShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["Of"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_getAabb_3 = (Module[
                "_emscripten_bind_btConeShape_getAabb_3"
              ] = function () {
                return Module["asm"]["Pf"].apply(null, arguments);
              });
              var _emscripten_bind_btConeShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btConeShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["Qf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeShape_getImplicitShapeDimensions_0 =
                (Module[
                  "_emscripten_bind_btConeShape_getImplicitShapeDimensions_0"
                ] = function () {
                  return Module["asm"]["Rf"].apply(null, arguments);
                });
              var _emscripten_bind_btConeShape___destroy___0 = (Module[
                "_emscripten_bind_btConeShape___destroy___0"
              ] = function () {
                return Module["asm"]["Sf"].apply(null, arguments);
              });
              var _emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9"
                ] = function () {
                  return Module["asm"]["Tf"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_setMargin_1 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_setMargin_1"
                ] = function () {
                  return Module["asm"]["Uf"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_getMargin_0 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_getMargin_0"
                ] = function () {
                  return Module["asm"]["Vf"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_setLocalScaling_1 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_setLocalScaling_1"
                ] = function () {
                  return Module["asm"]["Wf"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_getLocalScaling_0 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_getLocalScaling_0"
                ] = function () {
                  return Module["asm"]["Xf"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["Yf"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_isCompound_0 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_isCompound_0"
                ] = function () {
                  return Module["asm"]["Zf"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_getUserIndex_0 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_getUserIndex_0"
                ] = function () {
                  return Module["asm"]["_f"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_setUserIndex_1 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_setUserIndex_1"
                ] = function () {
                  return Module["asm"]["$f"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_getAabb_3 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_getAabb_3"
                ] = function () {
                  return Module["asm"]["ag"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["bg"].apply(null, arguments);
                });
              var _emscripten_bind_btHeightfieldTerrainShape___destroy___0 =
                (Module[
                  "_emscripten_bind_btHeightfieldTerrainShape___destroy___0"
                ] = function () {
                  return Module["asm"]["cg"].apply(null, arguments);
                });
              var _emscripten_bind_VoidPtr___destroy___0 = (Module[
                "_emscripten_bind_VoidPtr___destroy___0"
              ] = function () {
                return Module["asm"]["dg"].apply(null, arguments);
              });
              var _emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0 =
                (Module[
                  "_emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0"
                ] = function () {
                  return Module["asm"]["eg"].apply(null, arguments);
                });
              var _emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1 =
                (Module[
                  "_emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1"
                ] = function () {
                  return Module["asm"]["fg"].apply(null, arguments);
                });
              var _emscripten_bind_btDefaultCollisionConfiguration___destroy___0 =
                (Module[
                  "_emscripten_bind_btDefaultCollisionConfiguration___destroy___0"
                ] = function () {
                  return Module["asm"]["gg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_btPairCachingGhostObject_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_btPairCachingGhostObject_0"
                ] = function () {
                  return Module["asm"]["hg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_2 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_2"
                ] = function () {
                  return Module["asm"]["ig"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_getCollisionShape_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_getCollisionShape_0"
                ] = function () {
                  return Module["asm"]["jg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_getActivationState_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_getActivationState_0"
                ] = function () {
                  return Module["asm"]["kg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setActivationState_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setActivationState_1"
                ] = function () {
                  return Module["asm"]["lg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_forceActivationState_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_forceActivationState_1"
                ] = function () {
                  return Module["asm"]["mg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_activate_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_activate_0"
                ] = function () {
                  return Module["asm"]["ng"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_activate_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_activate_1"
                ] = function () {
                  return Module["asm"]["og"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_isActive_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_isActive_0"
                ] = function () {
                  return Module["asm"]["pg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_isKinematicObject_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_isKinematicObject_0"
                ] = function () {
                  return Module["asm"]["qg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_isStaticObject_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_isStaticObject_0"
                ] = function () {
                  return Module["asm"]["rg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_isStaticOrKinematicObject_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_isStaticOrKinematicObject_0"
                ] = function () {
                  return Module["asm"]["sg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setRestitution_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setRestitution_1"
                ] = function () {
                  return Module["asm"]["tg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setFriction_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setFriction_1"
                ] = function () {
                  return Module["asm"]["ug"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setRollingFriction_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setRollingFriction_1"
                ] = function () {
                  return Module["asm"]["vg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setSpinningFriction_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setSpinningFriction_1"
                ] = function () {
                  return Module["asm"]["wg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_getWorldTransform_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_getWorldTransform_0"
                ] = function () {
                  return Module["asm"]["xg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_getCollisionFlags_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_getCollisionFlags_0"
                ] = function () {
                  return Module["asm"]["yg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setCollisionFlags_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setCollisionFlags_1"
                ] = function () {
                  return Module["asm"]["zg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setWorldTransform_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setWorldTransform_1"
                ] = function () {
                  return Module["asm"]["Ag"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setCollisionShape_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setCollisionShape_1"
                ] = function () {
                  return Module["asm"]["Bg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setCcdMotionThreshold_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setCcdMotionThreshold_1"
                ] = function () {
                  return Module["asm"]["Cg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setCcdSweptSphereRadius_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setCcdSweptSphereRadius_1"
                ] = function () {
                  return Module["asm"]["Dg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_getUserIndex_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_getUserIndex_0"
                ] = function () {
                  return Module["asm"]["Eg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setUserIndex_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setUserIndex_1"
                ] = function () {
                  return Module["asm"]["Fg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_setIgnoreCollisionCheck_2 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_setIgnoreCollisionCheck_2"
                ] = function () {
                  return Module["asm"]["Gg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_getNumOverlappingObjects_0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_getNumOverlappingObjects_0"
                ] = function () {
                  return Module["asm"]["Hg"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject_getOverlappingObject_1 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject_getOverlappingObject_1"
                ] = function () {
                  return Module["asm"]["Ig"].apply(null, arguments);
                });
              var _emscripten_bind_btPairCachingGhostObject___destroy___0 =
                (Module[
                  "_emscripten_bind_btPairCachingGhostObject___destroy___0"
                ] = function () {
                  return Module["asm"]["Jg"].apply(null, arguments);
                });
              var _emscripten_bind_btOverlappingPairCallback___destroy___0 =
                (Module[
                  "_emscripten_bind_btOverlappingPairCallback___destroy___0"
                ] = function () {
                  return Module["asm"]["Kg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_3 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_3"
                ] = function () {
                  return Module["asm"]["Lg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_5 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_5"
                ] = function () {
                  return Module["asm"]["Mg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_enableSpring_2 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_enableSpring_2"
                ] = function () {
                  return Module["asm"]["Ng"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setStiffness_2 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setStiffness_2"
                ] = function () {
                  return Module["asm"]["Og"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setDamping_2 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setDamping_2"
                ] = function () {
                  return Module["asm"]["Pg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_0 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_0"
                ] = function () {
                  return Module["asm"]["Qg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_1"
                ] = function () {
                  return Module["asm"]["Rg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_2 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_2"
                ] = function () {
                  return Module["asm"]["Sg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setLinearLowerLimit_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setLinearLowerLimit_1"
                ] = function () {
                  return Module["asm"]["Tg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setLinearUpperLimit_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setLinearUpperLimit_1"
                ] = function () {
                  return Module["asm"]["Ug"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setAngularLowerLimit_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setAngularLowerLimit_1"
                ] = function () {
                  return Module["asm"]["Vg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setAngularUpperLimit_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setAngularUpperLimit_1"
                ] = function () {
                  return Module["asm"]["Wg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetA_0 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetA_0"
                ] = function () {
                  return Module["asm"]["Xg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_enableFeedback_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_enableFeedback_1"
                ] = function () {
                  return Module["asm"]["Yg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_getBreakingImpulseThreshold_0 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_getBreakingImpulseThreshold_0"
                ] = function () {
                  return Module["asm"]["Zg"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setBreakingImpulseThreshold_1 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setBreakingImpulseThreshold_1"
                ] = function () {
                  return Module["asm"]["_g"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_getParam_2 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_getParam_2"
                ] = function () {
                  return Module["asm"]["$g"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint_setParam_3 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint_setParam_3"
                ] = function () {
                  return Module["asm"]["ah"].apply(null, arguments);
                });
              var _emscripten_bind_btGeneric6DofSpringConstraint___destroy___0 =
                (Module[
                  "_emscripten_bind_btGeneric6DofSpringConstraint___destroy___0"
                ] = function () {
                  return Module["asm"]["bh"].apply(null, arguments);
                });
              var _emscripten_bind_btTriangleMesh_btTriangleMesh_0 = (Module[
                "_emscripten_bind_btTriangleMesh_btTriangleMesh_0"
              ] = function () {
                return Module["asm"]["ch"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMesh_btTriangleMesh_1 = (Module[
                "_emscripten_bind_btTriangleMesh_btTriangleMesh_1"
              ] = function () {
                return Module["asm"]["dh"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMesh_btTriangleMesh_2 = (Module[
                "_emscripten_bind_btTriangleMesh_btTriangleMesh_2"
              ] = function () {
                return Module["asm"]["eh"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMesh_addTriangle_3 = (Module[
                "_emscripten_bind_btTriangleMesh_addTriangle_3"
              ] = function () {
                return Module["asm"]["fh"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMesh_addTriangle_4 = (Module[
                "_emscripten_bind_btTriangleMesh_addTriangle_4"
              ] = function () {
                return Module["asm"]["gh"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMesh_addTriangleIndices_3 =
                (Module[
                  "_emscripten_bind_btTriangleMesh_addTriangleIndices_3"
                ] = function () {
                  return Module["asm"]["hh"].apply(null, arguments);
                });
              var _emscripten_bind_btTriangleMesh_getIndexedMeshArray_0 =
                (Module[
                  "_emscripten_bind_btTriangleMesh_getIndexedMeshArray_0"
                ] = function () {
                  return Module["asm"]["ih"].apply(null, arguments);
                });
              var _emscripten_bind_btTriangleMesh_setScaling_1 = (Module[
                "_emscripten_bind_btTriangleMesh_setScaling_1"
              ] = function () {
                return Module["asm"]["jh"].apply(null, arguments);
              });
              var _emscripten_bind_btTriangleMesh___destroy___0 = (Module[
                "_emscripten_bind_btTriangleMesh___destroy___0"
              ] = function () {
                return Module["asm"]["kh"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionConfiguration___destroy___0 =
                (Module[
                  "_emscripten_bind_btCollisionConfiguration___destroy___0"
                ] = function () {
                  return Module["asm"]["lh"].apply(null, arguments);
                });
              var _emscripten_bind_btPersistentManifold_btPersistentManifold_0 =
                (Module[
                  "_emscripten_bind_btPersistentManifold_btPersistentManifold_0"
                ] = function () {
                  return Module["asm"]["mh"].apply(null, arguments);
                });
              var _emscripten_bind_btPersistentManifold_getBody0_0 = (Module[
                "_emscripten_bind_btPersistentManifold_getBody0_0"
              ] = function () {
                return Module["asm"]["nh"].apply(null, arguments);
              });
              var _emscripten_bind_btPersistentManifold_getBody1_0 = (Module[
                "_emscripten_bind_btPersistentManifold_getBody1_0"
              ] = function () {
                return Module["asm"]["oh"].apply(null, arguments);
              });
              var _emscripten_bind_btPersistentManifold_getNumContacts_0 =
                (Module[
                  "_emscripten_bind_btPersistentManifold_getNumContacts_0"
                ] = function () {
                  return Module["asm"]["ph"].apply(null, arguments);
                });
              var _emscripten_bind_btPersistentManifold_getContactPoint_1 =
                (Module[
                  "_emscripten_bind_btPersistentManifold_getContactPoint_1"
                ] = function () {
                  return Module["asm"]["qh"].apply(null, arguments);
                });
              var _emscripten_bind_btPersistentManifold___destroy___0 = (Module[
                "_emscripten_bind_btPersistentManifold___destroy___0"
              ] = function () {
                return Module["asm"]["rh"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_btBoxShape_1 = (Module[
                "_emscripten_bind_btBoxShape_btBoxShape_1"
              ] = function () {
                return Module["asm"]["sh"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_setMargin_1 = (Module[
                "_emscripten_bind_btBoxShape_setMargin_1"
              ] = function () {
                return Module["asm"]["th"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_getMargin_0 = (Module[
                "_emscripten_bind_btBoxShape_getMargin_0"
              ] = function () {
                return Module["asm"]["uh"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_setUnscaledHalfExtents_1 =
                (Module[
                  "_emscripten_bind_btBoxShape_setUnscaledHalfExtents_1"
                ] = function () {
                  return Module["asm"]["vh"].apply(null, arguments);
                });
              var _emscripten_bind_btBoxShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btBoxShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["wh"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btBoxShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["xh"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_calculateLocalInertia_2 = (Module[
                "_emscripten_bind_btBoxShape_calculateLocalInertia_2"
              ] = function () {
                return Module["asm"]["yh"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_isCompound_0 = (Module[
                "_emscripten_bind_btBoxShape_isCompound_0"
              ] = function () {
                return Module["asm"]["zh"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btBoxShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["Ah"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btBoxShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["Bh"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_getAabb_3 = (Module[
                "_emscripten_bind_btBoxShape_getAabb_3"
              ] = function () {
                return Module["asm"]["Ch"].apply(null, arguments);
              });
              var _emscripten_bind_btBoxShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btBoxShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["Dh"].apply(null, arguments);
                });
              var _emscripten_bind_btBoxShape_getImplicitShapeDimensions_0 =
                (Module[
                  "_emscripten_bind_btBoxShape_getImplicitShapeDimensions_0"
                ] = function () {
                  return Module["asm"]["Eh"].apply(null, arguments);
                });
              var _emscripten_bind_btBoxShape___destroy___0 = (Module[
                "_emscripten_bind_btBoxShape___destroy___0"
              ] = function () {
                return Module["asm"]["Fh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_btCapsuleShape_2 = (Module[
                "_emscripten_bind_btCapsuleShape_btCapsuleShape_2"
              ] = function () {
                return Module["asm"]["Gh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_setMargin_1 = (Module[
                "_emscripten_bind_btCapsuleShape_setMargin_1"
              ] = function () {
                return Module["asm"]["Hh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_getMargin_0 = (Module[
                "_emscripten_bind_btCapsuleShape_getMargin_0"
              ] = function () {
                return Module["asm"]["Ih"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_updateProp_3 = (Module[
                "_emscripten_bind_btCapsuleShape_updateProp_3"
              ] = function () {
                return Module["asm"]["Jh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btCapsuleShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["Kh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btCapsuleShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["Lh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btCapsuleShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["Mh"].apply(null, arguments);
                });
              var _emscripten_bind_btCapsuleShape_isCompound_0 = (Module[
                "_emscripten_bind_btCapsuleShape_isCompound_0"
              ] = function () {
                return Module["asm"]["Nh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btCapsuleShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["Oh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btCapsuleShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["Ph"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_getAabb_3 = (Module[
                "_emscripten_bind_btCapsuleShape_getAabb_3"
              ] = function () {
                return Module["asm"]["Qh"].apply(null, arguments);
              });
              var _emscripten_bind_btCapsuleShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btCapsuleShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["Rh"].apply(null, arguments);
                });
              var _emscripten_bind_btCapsuleShape_getImplicitShapeDimensions_0 =
                (Module[
                  "_emscripten_bind_btCapsuleShape_getImplicitShapeDimensions_0"
                ] = function () {
                  return Module["asm"]["Sh"].apply(null, arguments);
                });
              var _emscripten_bind_btCapsuleShape___destroy___0 = (Module[
                "_emscripten_bind_btCapsuleShape___destroy___0"
              ] = function () {
                return Module["asm"]["Th"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_btCompoundShape_0 = (Module[
                "_emscripten_bind_btCompoundShape_btCompoundShape_0"
              ] = function () {
                return Module["asm"]["Uh"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_btCompoundShape_1 = (Module[
                "_emscripten_bind_btCompoundShape_btCompoundShape_1"
              ] = function () {
                return Module["asm"]["Vh"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_addChildShape_2 = (Module[
                "_emscripten_bind_btCompoundShape_addChildShape_2"
              ] = function () {
                return Module["asm"]["Wh"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_removeChildShape_1 = (Module[
                "_emscripten_bind_btCompoundShape_removeChildShape_1"
              ] = function () {
                return Module["asm"]["Xh"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_removeChildShapeByIndex_1 =
                (Module[
                  "_emscripten_bind_btCompoundShape_removeChildShapeByIndex_1"
                ] = function () {
                  return Module["asm"]["Yh"].apply(null, arguments);
                });
              var _emscripten_bind_btCompoundShape_getNumChildShapes_0 =
                (Module[
                  "_emscripten_bind_btCompoundShape_getNumChildShapes_0"
                ] = function () {
                  return Module["asm"]["Zh"].apply(null, arguments);
                });
              var _emscripten_bind_btCompoundShape_getChildShape_1 = (Module[
                "_emscripten_bind_btCompoundShape_getChildShape_1"
              ] = function () {
                return Module["asm"]["_h"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_updateChildTransform_2 =
                (Module[
                  "_emscripten_bind_btCompoundShape_updateChildTransform_2"
                ] = function () {
                  return Module["asm"]["$h"].apply(null, arguments);
                });
              var _emscripten_bind_btCompoundShape_updateChildTransform_3 =
                (Module[
                  "_emscripten_bind_btCompoundShape_updateChildTransform_3"
                ] = function () {
                  return Module["asm"]["ai"].apply(null, arguments);
                });
              var _emscripten_bind_btCompoundShape_setMargin_1 = (Module[
                "_emscripten_bind_btCompoundShape_setMargin_1"
              ] = function () {
                return Module["asm"]["bi"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_getMargin_0 = (Module[
                "_emscripten_bind_btCompoundShape_getMargin_0"
              ] = function () {
                return Module["asm"]["ci"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_setMaterial_3 = (Module[
                "_emscripten_bind_btCompoundShape_setMaterial_3"
              ] = function () {
                return Module["asm"]["di"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_setMaterial_4 = (Module[
                "_emscripten_bind_btCompoundShape_setMaterial_4"
              ] = function () {
                return Module["asm"]["ei"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_setMaterial_5 = (Module[
                "_emscripten_bind_btCompoundShape_setMaterial_5"
              ] = function () {
                return Module["asm"]["fi"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btCompoundShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["gi"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btCompoundShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["hi"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btCompoundShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["ii"].apply(null, arguments);
                });
              var _emscripten_bind_btCompoundShape_isCompound_0 = (Module[
                "_emscripten_bind_btCompoundShape_isCompound_0"
              ] = function () {
                return Module["asm"]["ji"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btCompoundShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["ki"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btCompoundShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["li"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_getAabb_3 = (Module[
                "_emscripten_bind_btCompoundShape_getAabb_3"
              ] = function () {
                return Module["asm"]["mi"].apply(null, arguments);
              });
              var _emscripten_bind_btCompoundShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btCompoundShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["ni"].apply(null, arguments);
                });
              var _emscripten_bind_btCompoundShape___destroy___0 = (Module[
                "_emscripten_bind_btCompoundShape___destroy___0"
              ] = function () {
                return Module["asm"]["oi"].apply(null, arguments);
              });
              var _emscripten_bind_btDefaultMotionState_btDefaultMotionState_0 =
                (Module[
                  "_emscripten_bind_btDefaultMotionState_btDefaultMotionState_0"
                ] = function () {
                  return Module["asm"]["pi"].apply(null, arguments);
                });
              var _emscripten_bind_btDefaultMotionState_btDefaultMotionState_1 =
                (Module[
                  "_emscripten_bind_btDefaultMotionState_btDefaultMotionState_1"
                ] = function () {
                  return Module["asm"]["qi"].apply(null, arguments);
                });
              var _emscripten_bind_btDefaultMotionState_btDefaultMotionState_2 =
                (Module[
                  "_emscripten_bind_btDefaultMotionState_btDefaultMotionState_2"
                ] = function () {
                  return Module["asm"]["ri"].apply(null, arguments);
                });
              var _emscripten_bind_btDefaultMotionState_getWorldTransform_1 =
                (Module[
                  "_emscripten_bind_btDefaultMotionState_getWorldTransform_1"
                ] = function () {
                  return Module["asm"]["si"].apply(null, arguments);
                });
              var _emscripten_bind_btDefaultMotionState_setWorldTransform_1 =
                (Module[
                  "_emscripten_bind_btDefaultMotionState_setWorldTransform_1"
                ] = function () {
                  return Module["asm"]["ti"].apply(null, arguments);
                });
              var _emscripten_bind_btDefaultMotionState___destroy___0 = (Module[
                "_emscripten_bind_btDefaultMotionState___destroy___0"
              ] = function () {
                return Module["asm"]["ui"].apply(null, arguments);
              });
              var _emscripten_bind_AllHitsRayResultCallback_AllHitsRayResultCallback_2 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_AllHitsRayResultCallback_2"
                ] = function () {
                  return Module["asm"]["vi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_hasHit_0 = (Module[
                "_emscripten_bind_AllHitsRayResultCallback_hasHit_0"
              ] = function () {
                return Module["asm"]["wi"].apply(null, arguments);
              });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_collisionObjects_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_collisionObjects_0"
                ] = function () {
                  return Module["asm"]["xi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_collisionObjects_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_collisionObjects_1"
                ] = function () {
                  return Module["asm"]["yi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0"
                ] = function () {
                  return Module["asm"]["zi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1"
                ] = function () {
                  return Module["asm"]["Ai"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0"
                ] = function () {
                  return Module["asm"]["Bi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1"
                ] = function () {
                  return Module["asm"]["Ci"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_hitNormalWorld_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_hitNormalWorld_0"
                ] = function () {
                  return Module["asm"]["Di"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_hitNormalWorld_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_hitNormalWorld_1"
                ] = function () {
                  return Module["asm"]["Ei"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_hitPointWorld_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_hitPointWorld_0"
                ] = function () {
                  return Module["asm"]["Fi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_hitPointWorld_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_hitPointWorld_1"
                ] = function () {
                  return Module["asm"]["Gi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_hitFractions_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_hitFractions_0"
                ] = function () {
                  return Module["asm"]["Hi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_hitFractions_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_hitFractions_1"
                ] = function () {
                  return Module["asm"]["Ii"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_shapeParts_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_shapeParts_0"
                ] = function () {
                  return Module["asm"]["Ji"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_shapeParts_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_shapeParts_1"
                ] = function () {
                  return Module["asm"]["Ki"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterGroup_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterGroup_0"
                ] = function () {
                  return Module["asm"]["Li"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterGroup_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterGroup_1"
                ] = function () {
                  return Module["asm"]["Mi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterMask_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterMask_0"
                ] = function () {
                  return Module["asm"]["Ni"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterMask_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterMask_1"
                ] = function () {
                  return Module["asm"]["Oi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_shapePart_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_shapePart_0"
                ] = function () {
                  return Module["asm"]["Pi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_shapePart_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_shapePart_1"
                ] = function () {
                  return Module["asm"]["Qi"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_closestHitFraction_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_closestHitFraction_0"
                ] = function () {
                  return Module["asm"]["Ri"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_closestHitFraction_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_closestHitFraction_1"
                ] = function () {
                  return Module["asm"]["Si"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_get_m_collisionObject_0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_get_m_collisionObject_0"
                ] = function () {
                  return Module["asm"]["Ti"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback_set_m_collisionObject_1 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback_set_m_collisionObject_1"
                ] = function () {
                  return Module["asm"]["Ui"].apply(null, arguments);
                });
              var _emscripten_bind_AllHitsRayResultCallback___destroy___0 =
                (Module[
                  "_emscripten_bind_AllHitsRayResultCallback___destroy___0"
                ] = function () {
                  return Module["asm"]["Vi"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_ClosestRayResultCallback_2 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_ClosestRayResultCallback_2"
                ] = function () {
                  return Module["asm"]["Wi"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_hasHit_0 = (Module[
                "_emscripten_bind_ClosestRayResultCallback_hasHit_0"
              ] = function () {
                return Module["asm"]["Xi"].apply(null, arguments);
              });
              var _emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0"
                ] = function () {
                  return Module["asm"]["Yi"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1"
                ] = function () {
                  return Module["asm"]["Zi"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0"
                ] = function () {
                  return Module["asm"]["_i"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1"
                ] = function () {
                  return Module["asm"]["$i"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_get_m_hitNormalWorld_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_hitNormalWorld_0"
                ] = function () {
                  return Module["asm"]["aj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_hitNormalWorld_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_hitNormalWorld_1"
                ] = function () {
                  return Module["asm"]["bj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_get_m_hitPointWorld_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_hitPointWorld_0"
                ] = function () {
                  return Module["asm"]["cj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_hitPointWorld_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_hitPointWorld_1"
                ] = function () {
                  return Module["asm"]["dj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterGroup_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterGroup_0"
                ] = function () {
                  return Module["asm"]["ej"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterGroup_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterGroup_1"
                ] = function () {
                  return Module["asm"]["fj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterMask_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterMask_0"
                ] = function () {
                  return Module["asm"]["gj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterMask_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterMask_1"
                ] = function () {
                  return Module["asm"]["hj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_get_m_shapePart_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_shapePart_0"
                ] = function () {
                  return Module["asm"]["ij"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_shapePart_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_shapePart_1"
                ] = function () {
                  return Module["asm"]["jj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_get_m_closestHitFraction_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_closestHitFraction_0"
                ] = function () {
                  return Module["asm"]["kj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_closestHitFraction_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_closestHitFraction_1"
                ] = function () {
                  return Module["asm"]["lj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_get_m_collisionObject_0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_get_m_collisionObject_0"
                ] = function () {
                  return Module["asm"]["mj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback_set_m_collisionObject_1 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback_set_m_collisionObject_1"
                ] = function () {
                  return Module["asm"]["nj"].apply(null, arguments);
                });
              var _emscripten_bind_ClosestRayResultCallback___destroy___0 =
                (Module[
                  "_emscripten_bind_ClosestRayResultCallback___destroy___0"
                ] = function () {
                  return Module["asm"]["oj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_ccKinematicCharacterController_3 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_ccKinematicCharacterController_3"
                ] = function () {
                  return Module["asm"]["pj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_ccKinematicCharacterController_4 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_ccKinematicCharacterController_4"
                ] = function () {
                  return Module["asm"]["qj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setUpAxis_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setUpAxis_1"
                ] = function () {
                  return Module["asm"]["rj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setWalkDirection_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setWalkDirection_1"
                ] = function () {
                  return Module["asm"]["sj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setVelocityForTimeInterval_2 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setVelocityForTimeInterval_2"
                ] = function () {
                  return Module["asm"]["tj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_warp_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_warp_1"
                ] = function () {
                  return Module["asm"]["uj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_preStep_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_preStep_1"
                ] = function () {
                  return Module["asm"]["vj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_playerStep_2 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_playerStep_2"
                ] = function () {
                  return Module["asm"]["wj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setFallSpeed_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setFallSpeed_1"
                ] = function () {
                  return Module["asm"]["xj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setJumpSpeed_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setJumpSpeed_1"
                ] = function () {
                  return Module["asm"]["yj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setMaxJumpHeight_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setMaxJumpHeight_1"
                ] = function () {
                  return Module["asm"]["zj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_canJump_0 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_canJump_0"
                ] = function () {
                  return Module["asm"]["Aj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_jump_0 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_jump_0"
                ] = function () {
                  return Module["asm"]["Bj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setGravity_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setGravity_1"
                ] = function () {
                  return Module["asm"]["Cj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_getGravity_0 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_getGravity_0"
                ] = function () {
                  return Module["asm"]["Dj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setMaxSlope_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setMaxSlope_1"
                ] = function () {
                  return Module["asm"]["Ej"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_getMaxSlope_0 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_getMaxSlope_0"
                ] = function () {
                  return Module["asm"]["Fj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_getGhostObject_0 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_getGhostObject_0"
                ] = function () {
                  return Module["asm"]["Gj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setUseGhostSweepTest_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setUseGhostSweepTest_1"
                ] = function () {
                  return Module["asm"]["Hj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_onGround_0 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_onGround_0"
                ] = function () {
                  return Module["asm"]["Ij"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_setUpInterpolate_1 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_setUpInterpolate_1"
                ] = function () {
                  return Module["asm"]["Jj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController_updateAction_2 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController_updateAction_2"
                ] = function () {
                  return Module["asm"]["Kj"].apply(null, arguments);
                });
              var _emscripten_bind_ccKinematicCharacterController___destroy___0 =
                (Module[
                  "_emscripten_bind_ccKinematicCharacterController___destroy___0"
                ] = function () {
                  return Module["asm"]["Lj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_btHingeConstraint_2 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_btHingeConstraint_2"
                ] = function () {
                  return Module["asm"]["Mj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_btHingeConstraint_3 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_btHingeConstraint_3"
                ] = function () {
                  return Module["asm"]["Nj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_btHingeConstraint_4 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_btHingeConstraint_4"
                ] = function () {
                  return Module["asm"]["Oj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_btHingeConstraint_5 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_btHingeConstraint_5"
                ] = function () {
                  return Module["asm"]["Pj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_btHingeConstraint_6 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_btHingeConstraint_6"
                ] = function () {
                  return Module["asm"]["Qj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_btHingeConstraint_7 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_btHingeConstraint_7"
                ] = function () {
                  return Module["asm"]["Rj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_setLimit_4 = (Module[
                "_emscripten_bind_btHingeConstraint_setLimit_4"
              ] = function () {
                return Module["asm"]["Sj"].apply(null, arguments);
              });
              var _emscripten_bind_btHingeConstraint_setLimit_5 = (Module[
                "_emscripten_bind_btHingeConstraint_setLimit_5"
              ] = function () {
                return Module["asm"]["Tj"].apply(null, arguments);
              });
              var _emscripten_bind_btHingeConstraint_enableAngularMotor_3 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_enableAngularMotor_3"
                ] = function () {
                  return Module["asm"]["Uj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_setAngularOnly_1 = (Module[
                "_emscripten_bind_btHingeConstraint_setAngularOnly_1"
              ] = function () {
                return Module["asm"]["Vj"].apply(null, arguments);
              });
              var _emscripten_bind_btHingeConstraint_enableMotor_1 = (Module[
                "_emscripten_bind_btHingeConstraint_enableMotor_1"
              ] = function () {
                return Module["asm"]["Wj"].apply(null, arguments);
              });
              var _emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1"
                ] = function () {
                  return Module["asm"]["Xj"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_setMotorTarget_2 = (Module[
                "_emscripten_bind_btHingeConstraint_setMotorTarget_2"
              ] = function () {
                return Module["asm"]["Yj"].apply(null, arguments);
              });
              var _emscripten_bind_btHingeConstraint_enableFeedback_1 = (Module[
                "_emscripten_bind_btHingeConstraint_enableFeedback_1"
              ] = function () {
                return Module["asm"]["Zj"].apply(null, arguments);
              });
              var _emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0"
                ] = function () {
                  return Module["asm"]["_j"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1 =
                (Module[
                  "_emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1"
                ] = function () {
                  return Module["asm"]["$j"].apply(null, arguments);
                });
              var _emscripten_bind_btHingeConstraint_getParam_2 = (Module[
                "_emscripten_bind_btHingeConstraint_getParam_2"
              ] = function () {
                return Module["asm"]["ak"].apply(null, arguments);
              });
              var _emscripten_bind_btHingeConstraint_setParam_3 = (Module[
                "_emscripten_bind_btHingeConstraint_setParam_3"
              ] = function () {
                return Module["asm"]["bk"].apply(null, arguments);
              });
              var _emscripten_bind_btHingeConstraint___destroy___0 = (Module[
                "_emscripten_bind_btHingeConstraint___destroy___0"
              ] = function () {
                return Module["asm"]["ck"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_btQuaternion_4 = (Module[
                "_emscripten_bind_btQuaternion_btQuaternion_4"
              ] = function () {
                return Module["asm"]["dk"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_setValue_4 = (Module[
                "_emscripten_bind_btQuaternion_setValue_4"
              ] = function () {
                return Module["asm"]["ek"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_x_0 = (Module[
                "_emscripten_bind_btQuaternion_x_0"
              ] = function () {
                return Module["asm"]["fk"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_y_0 = (Module[
                "_emscripten_bind_btQuaternion_y_0"
              ] = function () {
                return Module["asm"]["gk"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_z_0 = (Module[
                "_emscripten_bind_btQuaternion_z_0"
              ] = function () {
                return Module["asm"]["hk"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_w_0 = (Module[
                "_emscripten_bind_btQuaternion_w_0"
              ] = function () {
                return Module["asm"]["ik"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_setX_1 = (Module[
                "_emscripten_bind_btQuaternion_setX_1"
              ] = function () {
                return Module["asm"]["jk"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_setY_1 = (Module[
                "_emscripten_bind_btQuaternion_setY_1"
              ] = function () {
                return Module["asm"]["kk"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_setZ_1 = (Module[
                "_emscripten_bind_btQuaternion_setZ_1"
              ] = function () {
                return Module["asm"]["lk"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion_setW_1 = (Module[
                "_emscripten_bind_btQuaternion_setW_1"
              ] = function () {
                return Module["asm"]["mk"].apply(null, arguments);
              });
              var _emscripten_bind_btQuaternion___destroy___0 = (Module[
                "_emscripten_bind_btQuaternion___destroy___0"
              ] = function () {
                return Module["asm"]["nk"].apply(null, arguments);
              });
              var _emscripten_bind_btBU_Simplex1to4_btBU_Simplex1to4_0 =
                (Module[
                  "_emscripten_bind_btBU_Simplex1to4_btBU_Simplex1to4_0"
                ] = function () {
                  return Module["asm"]["ok"].apply(null, arguments);
                });
              var _emscripten_bind_btBU_Simplex1to4_addVertex_1 = (Module[
                "_emscripten_bind_btBU_Simplex1to4_addVertex_1"
              ] = function () {
                return Module["asm"]["pk"].apply(null, arguments);
              });
              var _emscripten_bind_btBU_Simplex1to4_setLocalScaling_1 = (Module[
                "_emscripten_bind_btBU_Simplex1to4_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["qk"].apply(null, arguments);
              });
              var _emscripten_bind_btBU_Simplex1to4_getLocalScaling_0 = (Module[
                "_emscripten_bind_btBU_Simplex1to4_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["rk"].apply(null, arguments);
              });
              var _emscripten_bind_btBU_Simplex1to4_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btBU_Simplex1to4_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["sk"].apply(null, arguments);
                });
              var _emscripten_bind_btBU_Simplex1to4_isCompound_0 = (Module[
                "_emscripten_bind_btBU_Simplex1to4_isCompound_0"
              ] = function () {
                return Module["asm"]["tk"].apply(null, arguments);
              });
              var _emscripten_bind_btBU_Simplex1to4_getUserIndex_0 = (Module[
                "_emscripten_bind_btBU_Simplex1to4_getUserIndex_0"
              ] = function () {
                return Module["asm"]["uk"].apply(null, arguments);
              });
              var _emscripten_bind_btBU_Simplex1to4_setUserIndex_1 = (Module[
                "_emscripten_bind_btBU_Simplex1to4_setUserIndex_1"
              ] = function () {
                return Module["asm"]["vk"].apply(null, arguments);
              });
              var _emscripten_bind_btBU_Simplex1to4_getAabb_3 = (Module[
                "_emscripten_bind_btBU_Simplex1to4_getAabb_3"
              ] = function () {
                return Module["asm"]["wk"].apply(null, arguments);
              });
              var _emscripten_bind_btBU_Simplex1to4_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btBU_Simplex1to4_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["xk"].apply(null, arguments);
                });
              var _emscripten_bind_btBU_Simplex1to4___destroy___0 = (Module[
                "_emscripten_bind_btBU_Simplex1to4___destroy___0"
              ] = function () {
                return Module["asm"]["yk"].apply(null, arguments);
              });
              var _emscripten_bind_btContactSolverInfo_get_m_splitImpulse_0 =
                (Module[
                  "_emscripten_bind_btContactSolverInfo_get_m_splitImpulse_0"
                ] = function () {
                  return Module["asm"]["zk"].apply(null, arguments);
                });
              var _emscripten_bind_btContactSolverInfo_set_m_splitImpulse_1 =
                (Module[
                  "_emscripten_bind_btContactSolverInfo_set_m_splitImpulse_1"
                ] = function () {
                  return Module["asm"]["Ak"].apply(null, arguments);
                });
              var _emscripten_bind_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0 =
                (Module[
                  "_emscripten_bind_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0"
                ] = function () {
                  return Module["asm"]["Bk"].apply(null, arguments);
                });
              var _emscripten_bind_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1 =
                (Module[
                  "_emscripten_bind_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1"
                ] = function () {
                  return Module["asm"]["Ck"].apply(null, arguments);
                });
              var _emscripten_bind_btContactSolverInfo_get_m_numIterations_0 =
                (Module[
                  "_emscripten_bind_btContactSolverInfo_get_m_numIterations_0"
                ] = function () {
                  return Module["asm"]["Dk"].apply(null, arguments);
                });
              var _emscripten_bind_btContactSolverInfo_set_m_numIterations_1 =
                (Module[
                  "_emscripten_bind_btContactSolverInfo_set_m_numIterations_1"
                ] = function () {
                  return Module["asm"]["Ek"].apply(null, arguments);
                });
              var _emscripten_bind_btContactSolverInfo___destroy___0 = (Module[
                "_emscripten_bind_btContactSolverInfo___destroy___0"
              ] = function () {
                return Module["asm"]["Fk"].apply(null, arguments);
              });
              var _emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_3 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_3"
                ] = function () {
                  return Module["asm"]["Gk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_4 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_4"
                ] = function () {
                  return Module["asm"]["Hk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setUp_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setUp_1"
                ] = function () {
                  return Module["asm"]["Ik"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setWalkDirection_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setWalkDirection_1"
                ] = function () {
                  return Module["asm"]["Jk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setVelocityForTimeInterval_2 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setVelocityForTimeInterval_2"
                ] = function () {
                  return Module["asm"]["Kk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_reset_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_reset_1"
                ] = function () {
                  return Module["asm"]["Lk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_warp_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_warp_1"
                ] = function () {
                  return Module["asm"]["Mk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_preStep_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_preStep_1"
                ] = function () {
                  return Module["asm"]["Nk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_playerStep_2 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_playerStep_2"
                ] = function () {
                  return Module["asm"]["Ok"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setFallSpeed_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setFallSpeed_1"
                ] = function () {
                  return Module["asm"]["Pk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setJumpSpeed_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setJumpSpeed_1"
                ] = function () {
                  return Module["asm"]["Qk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setMaxJumpHeight_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setMaxJumpHeight_1"
                ] = function () {
                  return Module["asm"]["Rk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_canJump_0 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_canJump_0"
                ] = function () {
                  return Module["asm"]["Sk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_jump_0 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_jump_0"
                ] = function () {
                  return Module["asm"]["Tk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_jump_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_jump_1"
                ] = function () {
                  return Module["asm"]["Uk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setGravity_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setGravity_1"
                ] = function () {
                  return Module["asm"]["Vk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_getGravity_0 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_getGravity_0"
                ] = function () {
                  return Module["asm"]["Wk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setMaxSlope_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setMaxSlope_1"
                ] = function () {
                  return Module["asm"]["Xk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_getMaxSlope_0 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_getMaxSlope_0"
                ] = function () {
                  return Module["asm"]["Yk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_getGhostObject_0 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_getGhostObject_0"
                ] = function () {
                  return Module["asm"]["Zk"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setUseGhostSweepTest_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setUseGhostSweepTest_1"
                ] = function () {
                  return Module["asm"]["_k"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_onGround_0 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_onGround_0"
                ] = function () {
                  return Module["asm"]["$k"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_setUpInterpolate_1 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_setUpInterpolate_1"
                ] = function () {
                  return Module["asm"]["al"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController_updateAction_2 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController_updateAction_2"
                ] = function () {
                  return Module["asm"]["bl"].apply(null, arguments);
                });
              var _emscripten_bind_btKinematicCharacterController___destroy___0 =
                (Module[
                  "_emscripten_bind_btKinematicCharacterController___destroy___0"
                ] = function () {
                  return Module["asm"]["cl"].apply(null, arguments);
                });
              var _emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2 =
                (Module[
                  "_emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2"
                ] = function () {
                  return Module["asm"]["dl"].apply(null, arguments);
                });
              var _emscripten_bind_btStaticPlaneShape_getPlaneNormal_0 =
                (Module[
                  "_emscripten_bind_btStaticPlaneShape_getPlaneNormal_0"
                ] = function () {
                  return Module["asm"]["el"].apply(null, arguments);
                });
              var _emscripten_bind_btStaticPlaneShape_setPlaneConstant_1 =
                (Module[
                  "_emscripten_bind_btStaticPlaneShape_setPlaneConstant_1"
                ] = function () {
                  return Module["asm"]["fl"].apply(null, arguments);
                });
              var _emscripten_bind_btStaticPlaneShape_setLocalScaling_1 =
                (Module[
                  "_emscripten_bind_btStaticPlaneShape_setLocalScaling_1"
                ] = function () {
                  return Module["asm"]["gl"].apply(null, arguments);
                });
              var _emscripten_bind_btStaticPlaneShape_getLocalScaling_0 =
                (Module[
                  "_emscripten_bind_btStaticPlaneShape_getLocalScaling_0"
                ] = function () {
                  return Module["asm"]["hl"].apply(null, arguments);
                });
              var _emscripten_bind_btStaticPlaneShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btStaticPlaneShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["il"].apply(null, arguments);
                });
              var _emscripten_bind_btStaticPlaneShape_isCompound_0 = (Module[
                "_emscripten_bind_btStaticPlaneShape_isCompound_0"
              ] = function () {
                return Module["asm"]["jl"].apply(null, arguments);
              });
              var _emscripten_bind_btStaticPlaneShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btStaticPlaneShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["kl"].apply(null, arguments);
              });
              var _emscripten_bind_btStaticPlaneShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btStaticPlaneShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["ll"].apply(null, arguments);
              });
              var _emscripten_bind_btStaticPlaneShape_getAabb_3 = (Module[
                "_emscripten_bind_btStaticPlaneShape_getAabb_3"
              ] = function () {
                return Module["asm"]["ml"].apply(null, arguments);
              });
              var _emscripten_bind_btStaticPlaneShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btStaticPlaneShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["nl"].apply(null, arguments);
                });
              var _emscripten_bind_btStaticPlaneShape___destroy___0 = (Module[
                "_emscripten_bind_btStaticPlaneShape___destroy___0"
              ] = function () {
                return Module["asm"]["ol"].apply(null, arguments);
              });
              var _emscripten_bind_btOverlappingPairCache_setInternalGhostPairCallback_1 =
                (Module[
                  "_emscripten_bind_btOverlappingPairCache_setInternalGhostPairCallback_1"
                ] = function () {
                  return Module["asm"]["pl"].apply(null, arguments);
                });
              var _emscripten_bind_btOverlappingPairCache_getNumOverlappingPairs_0 =
                (Module[
                  "_emscripten_bind_btOverlappingPairCache_getNumOverlappingPairs_0"
                ] = function () {
                  return Module["asm"]["ql"].apply(null, arguments);
                });
              var _emscripten_bind_btOverlappingPairCache___destroy___0 =
                (Module[
                  "_emscripten_bind_btOverlappingPairCache___destroy___0"
                ] = function () {
                  return Module["asm"]["rl"].apply(null, arguments);
                });
              var _emscripten_bind_btVector3_btVector3_0 = (Module[
                "_emscripten_bind_btVector3_btVector3_0"
              ] = function () {
                return Module["asm"]["sl"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3_btVector3_3 = (Module[
                "_emscripten_bind_btVector3_btVector3_3"
              ] = function () {
                return Module["asm"]["tl"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3_x_0 = (Module[
                "_emscripten_bind_btVector3_x_0"
              ] = function () {
                return Module["asm"]["ul"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3_y_0 = (Module[
                "_emscripten_bind_btVector3_y_0"
              ] = function () {
                return Module["asm"]["vl"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3_z_0 = (Module[
                "_emscripten_bind_btVector3_z_0"
              ] = function () {
                return Module["asm"]["wl"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3_setX_1 = (Module[
                "_emscripten_bind_btVector3_setX_1"
              ] = function () {
                return Module["asm"]["xl"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3_setY_1 = (Module[
                "_emscripten_bind_btVector3_setY_1"
              ] = function () {
                return Module["asm"]["yl"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3_setZ_1 = (Module[
                "_emscripten_bind_btVector3_setZ_1"
              ] = function () {
                return Module["asm"]["zl"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3_setValue_3 = (Module[
                "_emscripten_bind_btVector3_setValue_3"
              ] = function () {
                return Module["asm"]["Al"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3___destroy___0 = (Module[
                "_emscripten_bind_btVector3___destroy___0"
              ] = function () {
                return Module["asm"]["Bl"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_btSphereShape_1 = (Module[
                "_emscripten_bind_btSphereShape_btSphereShape_1"
              ] = function () {
                return Module["asm"]["Cl"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_setMargin_1 = (Module[
                "_emscripten_bind_btSphereShape_setMargin_1"
              ] = function () {
                return Module["asm"]["Dl"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_getMargin_0 = (Module[
                "_emscripten_bind_btSphereShape_getMargin_0"
              ] = function () {
                return Module["asm"]["El"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_setUnscaledRadius_1 = (Module[
                "_emscripten_bind_btSphereShape_setUnscaledRadius_1"
              ] = function () {
                return Module["asm"]["Fl"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btSphereShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["Gl"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btSphereShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["Hl"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btSphereShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["Il"].apply(null, arguments);
                });
              var _emscripten_bind_btSphereShape_isCompound_0 = (Module[
                "_emscripten_bind_btSphereShape_isCompound_0"
              ] = function () {
                return Module["asm"]["Jl"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btSphereShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["Kl"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btSphereShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["Ll"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_getAabb_3 = (Module[
                "_emscripten_bind_btSphereShape_getAabb_3"
              ] = function () {
                return Module["asm"]["Ml"].apply(null, arguments);
              });
              var _emscripten_bind_btSphereShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btSphereShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["Nl"].apply(null, arguments);
                });
              var _emscripten_bind_btSphereShape_getImplicitShapeDimensions_0 =
                (Module[
                  "_emscripten_bind_btSphereShape_getImplicitShapeDimensions_0"
                ] = function () {
                  return Module["asm"]["Ol"].apply(null, arguments);
                });
              var _emscripten_bind_btSphereShape___destroy___0 = (Module[
                "_emscripten_bind_btSphereShape___destroy___0"
              ] = function () {
                return Module["asm"]["Pl"].apply(null, arguments);
              });
              var _emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0 =
                (Module[
                  "_emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0"
                ] = function () {
                  return Module["asm"]["Ql"].apply(null, arguments);
                });
              var _emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0 =
                (Module[
                  "_emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0"
                ] = function () {
                  return Module["asm"]["Rl"].apply(null, arguments);
                });
              var _emscripten_bind_btEmptyShape_btEmptyShape_0 = (Module[
                "_emscripten_bind_btEmptyShape_btEmptyShape_0"
              ] = function () {
                return Module["asm"]["Sl"].apply(null, arguments);
              });
              var _emscripten_bind_btEmptyShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btEmptyShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["Tl"].apply(null, arguments);
              });
              var _emscripten_bind_btEmptyShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btEmptyShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["Ul"].apply(null, arguments);
              });
              var _emscripten_bind_btEmptyShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btEmptyShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["Vl"].apply(null, arguments);
                });
              var _emscripten_bind_btEmptyShape_isCompound_0 = (Module[
                "_emscripten_bind_btEmptyShape_isCompound_0"
              ] = function () {
                return Module["asm"]["Wl"].apply(null, arguments);
              });
              var _emscripten_bind_btEmptyShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btEmptyShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["Xl"].apply(null, arguments);
              });
              var _emscripten_bind_btEmptyShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btEmptyShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["Yl"].apply(null, arguments);
              });
              var _emscripten_bind_btEmptyShape_getAabb_3 = (Module[
                "_emscripten_bind_btEmptyShape_getAabb_3"
              ] = function () {
                return Module["asm"]["Zl"].apply(null, arguments);
              });
              var _emscripten_bind_btEmptyShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btEmptyShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["_l"].apply(null, arguments);
                });
              var _emscripten_bind_btEmptyShape___destroy___0 = (Module[
                "_emscripten_bind_btEmptyShape___destroy___0"
              ] = function () {
                return Module["asm"]["$l"].apply(null, arguments);
              });
              var _emscripten_bind_btConstraintSetting_btConstraintSetting_0 =
                (Module[
                  "_emscripten_bind_btConstraintSetting_btConstraintSetting_0"
                ] = function () {
                  return Module["asm"]["am"].apply(null, arguments);
                });
              var _emscripten_bind_btConstraintSetting_get_m_tau_0 = (Module[
                "_emscripten_bind_btConstraintSetting_get_m_tau_0"
              ] = function () {
                return Module["asm"]["bm"].apply(null, arguments);
              });
              var _emscripten_bind_btConstraintSetting_set_m_tau_1 = (Module[
                "_emscripten_bind_btConstraintSetting_set_m_tau_1"
              ] = function () {
                return Module["asm"]["cm"].apply(null, arguments);
              });
              var _emscripten_bind_btConstraintSetting_get_m_damping_0 =
                (Module[
                  "_emscripten_bind_btConstraintSetting_get_m_damping_0"
                ] = function () {
                  return Module["asm"]["dm"].apply(null, arguments);
                });
              var _emscripten_bind_btConstraintSetting_set_m_damping_1 =
                (Module[
                  "_emscripten_bind_btConstraintSetting_set_m_damping_1"
                ] = function () {
                  return Module["asm"]["em"].apply(null, arguments);
                });
              var _emscripten_bind_btConstraintSetting_get_m_impulseClamp_0 =
                (Module[
                  "_emscripten_bind_btConstraintSetting_get_m_impulseClamp_0"
                ] = function () {
                  return Module["asm"]["fm"].apply(null, arguments);
                });
              var _emscripten_bind_btConstraintSetting_set_m_impulseClamp_1 =
                (Module[
                  "_emscripten_bind_btConstraintSetting_set_m_impulseClamp_1"
                ] = function () {
                  return Module["asm"]["gm"].apply(null, arguments);
                });
              var _emscripten_bind_btConstraintSetting___destroy___0 = (Module[
                "_emscripten_bind_btConstraintSetting___destroy___0"
              ] = function () {
                return Module["asm"]["hm"].apply(null, arguments);
              });
              var _emscripten_bind_LocalShapeInfo_get_m_shapePart_0 = (Module[
                "_emscripten_bind_LocalShapeInfo_get_m_shapePart_0"
              ] = function () {
                return Module["asm"]["im"].apply(null, arguments);
              });
              var _emscripten_bind_LocalShapeInfo_set_m_shapePart_1 = (Module[
                "_emscripten_bind_LocalShapeInfo_set_m_shapePart_1"
              ] = function () {
                return Module["asm"]["jm"].apply(null, arguments);
              });
              var _emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0 =
                (Module[
                  "_emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0"
                ] = function () {
                  return Module["asm"]["km"].apply(null, arguments);
                });
              var _emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1 =
                (Module[
                  "_emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1"
                ] = function () {
                  return Module["asm"]["lm"].apply(null, arguments);
                });
              var _emscripten_bind_LocalShapeInfo___destroy___0 = (Module[
                "_emscripten_bind_LocalShapeInfo___destroy___0"
              ] = function () {
                return Module["asm"]["mm"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3Array_size_0 = (Module[
                "_emscripten_bind_btVector3Array_size_0"
              ] = function () {
                return Module["asm"]["nm"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3Array_at_1 = (Module[
                "_emscripten_bind_btVector3Array_at_1"
              ] = function () {
                return Module["asm"]["om"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3Array_clear_0 = (Module[
                "_emscripten_bind_btVector3Array_clear_0"
              ] = function () {
                return Module["asm"]["pm"].apply(null, arguments);
              });
              var _emscripten_bind_btVector3Array___destroy___0 = (Module[
                "_emscripten_bind_btVector3Array___destroy___0"
              ] = function () {
                return Module["asm"]["qm"].apply(null, arguments);
              });
              var _emscripten_bind_btConstraintSolver___destroy___0 = (Module[
                "_emscripten_bind_btConstraintSolver___destroy___0"
              ] = function () {
                return Module["asm"]["rm"].apply(null, arguments);
              });
              var _emscripten_bind_btFixedConstraint_btFixedConstraint_4 =
                (Module[
                  "_emscripten_bind_btFixedConstraint_btFixedConstraint_4"
                ] = function () {
                  return Module["asm"]["sm"].apply(null, arguments);
                });
              var _emscripten_bind_btFixedConstraint_enableFeedback_1 = (Module[
                "_emscripten_bind_btFixedConstraint_enableFeedback_1"
              ] = function () {
                return Module["asm"]["tm"].apply(null, arguments);
              });
              var _emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0 =
                (Module[
                  "_emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0"
                ] = function () {
                  return Module["asm"]["um"].apply(null, arguments);
                });
              var _emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1 =
                (Module[
                  "_emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1"
                ] = function () {
                  return Module["asm"]["vm"].apply(null, arguments);
                });
              var _emscripten_bind_btFixedConstraint_getParam_2 = (Module[
                "_emscripten_bind_btFixedConstraint_getParam_2"
              ] = function () {
                return Module["asm"]["wm"].apply(null, arguments);
              });
              var _emscripten_bind_btFixedConstraint_setParam_3 = (Module[
                "_emscripten_bind_btFixedConstraint_setParam_3"
              ] = function () {
                return Module["asm"]["xm"].apply(null, arguments);
              });
              var _emscripten_bind_btFixedConstraint___destroy___0 = (Module[
                "_emscripten_bind_btFixedConstraint___destroy___0"
              ] = function () {
                return Module["asm"]["ym"].apply(null, arguments);
              });
              var _emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1 =
                (Module[
                  "_emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1"
                ] = function () {
                  return Module["asm"]["zm"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionDispatcher_setDispatcherFlags_1 =
                (Module[
                  "_emscripten_bind_btCollisionDispatcher_setDispatcherFlags_1"
                ] = function () {
                  return Module["asm"]["Am"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionDispatcher_getNumManifolds_0 =
                (Module[
                  "_emscripten_bind_btCollisionDispatcher_getNumManifolds_0"
                ] = function () {
                  return Module["asm"]["Bm"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1 =
                (Module[
                  "_emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1"
                ] = function () {
                  return Module["asm"]["Cm"].apply(null, arguments);
                });
              var _emscripten_bind_btCollisionDispatcher___destroy___0 =
                (Module[
                  "_emscripten_bind_btCollisionDispatcher___destroy___0"
                ] = function () {
                  return Module["asm"]["Dm"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_btRigidBody_1 = (Module[
                "_emscripten_bind_btRigidBody_btRigidBody_1"
              ] = function () {
                return Module["asm"]["Em"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getCenterOfMassTransform_0 =
                (Module[
                  "_emscripten_bind_btRigidBody_getCenterOfMassTransform_0"
                ] = function () {
                  return Module["asm"]["Fm"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_setCenterOfMassTransform_1 =
                (Module[
                  "_emscripten_bind_btRigidBody_setCenterOfMassTransform_1"
                ] = function () {
                  return Module["asm"]["Gm"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_setSleepingThresholds_2 =
                (Module[
                  "_emscripten_bind_btRigidBody_setSleepingThresholds_2"
                ] = function () {
                  return Module["asm"]["Hm"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_getLinearSleepingThreshold_0 =
                (Module[
                  "_emscripten_bind_btRigidBody_getLinearSleepingThreshold_0"
                ] = function () {
                  return Module["asm"]["Im"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_getLinearDamping_0 = (Module[
                "_emscripten_bind_btRigidBody_getLinearDamping_0"
              ] = function () {
                return Module["asm"]["Jm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getAngularDamping_0 = (Module[
                "_emscripten_bind_btRigidBody_getAngularDamping_0"
              ] = function () {
                return Module["asm"]["Km"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setDamping_2 = (Module[
                "_emscripten_bind_btRigidBody_setDamping_2"
              ] = function () {
                return Module["asm"]["Lm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setMassProps_2 = (Module[
                "_emscripten_bind_btRigidBody_setMassProps_2"
              ] = function () {
                return Module["asm"]["Mm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getLinearFactor_0 = (Module[
                "_emscripten_bind_btRigidBody_getLinearFactor_0"
              ] = function () {
                return Module["asm"]["Nm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setLinearFactor_1 = (Module[
                "_emscripten_bind_btRigidBody_setLinearFactor_1"
              ] = function () {
                return Module["asm"]["Om"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_applyTorque_1 = (Module[
                "_emscripten_bind_btRigidBody_applyTorque_1"
              ] = function () {
                return Module["asm"]["Pm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_applyForce_2 = (Module[
                "_emscripten_bind_btRigidBody_applyForce_2"
              ] = function () {
                return Module["asm"]["Qm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_applyCentralForce_1 = (Module[
                "_emscripten_bind_btRigidBody_applyCentralForce_1"
              ] = function () {
                return Module["asm"]["Rm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_applyTorqueImpulse_1 = (Module[
                "_emscripten_bind_btRigidBody_applyTorqueImpulse_1"
              ] = function () {
                return Module["asm"]["Sm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_applyImpulse_2 = (Module[
                "_emscripten_bind_btRigidBody_applyImpulse_2"
              ] = function () {
                return Module["asm"]["Tm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_applyCentralImpulse_1 = (Module[
                "_emscripten_bind_btRigidBody_applyCentralImpulse_1"
              ] = function () {
                return Module["asm"]["Um"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_updateInertiaTensor_0 = (Module[
                "_emscripten_bind_btRigidBody_updateInertiaTensor_0"
              ] = function () {
                return Module["asm"]["Vm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getLinearVelocity_0 = (Module[
                "_emscripten_bind_btRigidBody_getLinearVelocity_0"
              ] = function () {
                return Module["asm"]["Wm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getAngularVelocity_0 = (Module[
                "_emscripten_bind_btRigidBody_getAngularVelocity_0"
              ] = function () {
                return Module["asm"]["Xm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setLinearVelocity_1 = (Module[
                "_emscripten_bind_btRigidBody_setLinearVelocity_1"
              ] = function () {
                return Module["asm"]["Ym"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setAngularVelocity_1 = (Module[
                "_emscripten_bind_btRigidBody_setAngularVelocity_1"
              ] = function () {
                return Module["asm"]["Zm"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getMotionState_0 = (Module[
                "_emscripten_bind_btRigidBody_getMotionState_0"
              ] = function () {
                return Module["asm"]["_m"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setMotionState_1 = (Module[
                "_emscripten_bind_btRigidBody_setMotionState_1"
              ] = function () {
                return Module["asm"]["$m"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getAngularFactor_0 = (Module[
                "_emscripten_bind_btRigidBody_getAngularFactor_0"
              ] = function () {
                return Module["asm"]["an"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setAngularFactor_1 = (Module[
                "_emscripten_bind_btRigidBody_setAngularFactor_1"
              ] = function () {
                return Module["asm"]["bn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_upcast_1 = (Module[
                "_emscripten_bind_btRigidBody_upcast_1"
              ] = function () {
                return Module["asm"]["cn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getAabb_2 = (Module[
                "_emscripten_bind_btRigidBody_getAabb_2"
              ] = function () {
                return Module["asm"]["dn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_applyGravity_0 = (Module[
                "_emscripten_bind_btRigidBody_applyGravity_0"
              ] = function () {
                return Module["asm"]["en"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getGravity_0 = (Module[
                "_emscripten_bind_btRigidBody_getGravity_0"
              ] = function () {
                return Module["asm"]["fn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setGravity_1 = (Module[
                "_emscripten_bind_btRigidBody_setGravity_1"
              ] = function () {
                return Module["asm"]["gn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getFlags_0 = (Module[
                "_emscripten_bind_btRigidBody_getFlags_0"
              ] = function () {
                return Module["asm"]["hn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setFlags_1 = (Module[
                "_emscripten_bind_btRigidBody_setFlags_1"
              ] = function () {
                return Module["asm"]["jn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_wantsSleeping_0 = (Module[
                "_emscripten_bind_btRigidBody_wantsSleeping_0"
              ] = function () {
                return Module["asm"]["kn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_clearForces_0 = (Module[
                "_emscripten_bind_btRigidBody_clearForces_0"
              ] = function () {
                return Module["asm"]["ln"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getTotalForce_0 = (Module[
                "_emscripten_bind_btRigidBody_getTotalForce_0"
              ] = function () {
                return Module["asm"]["mn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getTotalTorque_0 = (Module[
                "_emscripten_bind_btRigidBody_getTotalTorque_0"
              ] = function () {
                return Module["asm"]["nn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_clearState_0 = (Module[
                "_emscripten_bind_btRigidBody_clearState_0"
              ] = function () {
                return Module["asm"]["on"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setAnisotropicFriction_2 =
                (Module[
                  "_emscripten_bind_btRigidBody_setAnisotropicFriction_2"
                ] = function () {
                  return Module["asm"]["pn"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_getCollisionShape_0 = (Module[
                "_emscripten_bind_btRigidBody_getCollisionShape_0"
              ] = function () {
                return Module["asm"]["qn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getActivationState_0 = (Module[
                "_emscripten_bind_btRigidBody_getActivationState_0"
              ] = function () {
                return Module["asm"]["rn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setActivationState_1 = (Module[
                "_emscripten_bind_btRigidBody_setActivationState_1"
              ] = function () {
                return Module["asm"]["sn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_forceActivationState_1 = (Module[
                "_emscripten_bind_btRigidBody_forceActivationState_1"
              ] = function () {
                return Module["asm"]["tn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_activate_0 = (Module[
                "_emscripten_bind_btRigidBody_activate_0"
              ] = function () {
                return Module["asm"]["un"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_activate_1 = (Module[
                "_emscripten_bind_btRigidBody_activate_1"
              ] = function () {
                return Module["asm"]["vn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_isActive_0 = (Module[
                "_emscripten_bind_btRigidBody_isActive_0"
              ] = function () {
                return Module["asm"]["wn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_isKinematicObject_0 = (Module[
                "_emscripten_bind_btRigidBody_isKinematicObject_0"
              ] = function () {
                return Module["asm"]["xn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_isStaticObject_0 = (Module[
                "_emscripten_bind_btRigidBody_isStaticObject_0"
              ] = function () {
                return Module["asm"]["yn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_isStaticOrKinematicObject_0 =
                (Module[
                  "_emscripten_bind_btRigidBody_isStaticOrKinematicObject_0"
                ] = function () {
                  return Module["asm"]["zn"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_setRestitution_1 = (Module[
                "_emscripten_bind_btRigidBody_setRestitution_1"
              ] = function () {
                return Module["asm"]["An"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setFriction_1 = (Module[
                "_emscripten_bind_btRigidBody_setFriction_1"
              ] = function () {
                return Module["asm"]["Bn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setRollingFriction_1 = (Module[
                "_emscripten_bind_btRigidBody_setRollingFriction_1"
              ] = function () {
                return Module["asm"]["Cn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setSpinningFriction_1 = (Module[
                "_emscripten_bind_btRigidBody_setSpinningFriction_1"
              ] = function () {
                return Module["asm"]["Dn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getWorldTransform_0 = (Module[
                "_emscripten_bind_btRigidBody_getWorldTransform_0"
              ] = function () {
                return Module["asm"]["En"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_getCollisionFlags_0 = (Module[
                "_emscripten_bind_btRigidBody_getCollisionFlags_0"
              ] = function () {
                return Module["asm"]["Fn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setCollisionFlags_1 = (Module[
                "_emscripten_bind_btRigidBody_setCollisionFlags_1"
              ] = function () {
                return Module["asm"]["Gn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setWorldTransform_1 = (Module[
                "_emscripten_bind_btRigidBody_setWorldTransform_1"
              ] = function () {
                return Module["asm"]["Hn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setCollisionShape_1 = (Module[
                "_emscripten_bind_btRigidBody_setCollisionShape_1"
              ] = function () {
                return Module["asm"]["In"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setCcdMotionThreshold_1 =
                (Module[
                  "_emscripten_bind_btRigidBody_setCcdMotionThreshold_1"
                ] = function () {
                  return Module["asm"]["Jn"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1 =
                (Module[
                  "_emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1"
                ] = function () {
                  return Module["asm"]["Kn"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody_getUserIndex_0 = (Module[
                "_emscripten_bind_btRigidBody_getUserIndex_0"
              ] = function () {
                return Module["asm"]["Ln"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setUserIndex_1 = (Module[
                "_emscripten_bind_btRigidBody_setUserIndex_1"
              ] = function () {
                return Module["asm"]["Mn"].apply(null, arguments);
              });
              var _emscripten_bind_btRigidBody_setIgnoreCollisionCheck_2 =
                (Module[
                  "_emscripten_bind_btRigidBody_setIgnoreCollisionCheck_2"
                ] = function () {
                  return Module["asm"]["Nn"].apply(null, arguments);
                });
              var _emscripten_bind_btRigidBody___destroy___0 = (Module[
                "_emscripten_bind_btRigidBody___destroy___0"
              ] = function () {
                return Module["asm"]["On"].apply(null, arguments);
              });
              var _emscripten_bind_btIndexedMeshArray_size_0 = (Module[
                "_emscripten_bind_btIndexedMeshArray_size_0"
              ] = function () {
                return Module["asm"]["Pn"].apply(null, arguments);
              });
              var _emscripten_bind_btIndexedMeshArray_at_1 = (Module[
                "_emscripten_bind_btIndexedMeshArray_at_1"
              ] = function () {
                return Module["asm"]["Qn"].apply(null, arguments);
              });
              var _emscripten_bind_btIndexedMeshArray___destroy___0 = (Module[
                "_emscripten_bind_btIndexedMeshArray___destroy___0"
              ] = function () {
                return Module["asm"]["Rn"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_btTransform_0 = (Module[
                "_emscripten_bind_btTransform_btTransform_0"
              ] = function () {
                return Module["asm"]["Sn"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_btTransform_2 = (Module[
                "_emscripten_bind_btTransform_btTransform_2"
              ] = function () {
                return Module["asm"]["Tn"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_setIdentity_0 = (Module[
                "_emscripten_bind_btTransform_setIdentity_0"
              ] = function () {
                return Module["asm"]["Un"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_setOrigin_1 = (Module[
                "_emscripten_bind_btTransform_setOrigin_1"
              ] = function () {
                return Module["asm"]["Vn"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_setRotation_1 = (Module[
                "_emscripten_bind_btTransform_setRotation_1"
              ] = function () {
                return Module["asm"]["Wn"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_getOrigin_0 = (Module[
                "_emscripten_bind_btTransform_getOrigin_0"
              ] = function () {
                return Module["asm"]["Xn"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_getRotation_0 = (Module[
                "_emscripten_bind_btTransform_getRotation_0"
              ] = function () {
                return Module["asm"]["Yn"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_getBasis_0 = (Module[
                "_emscripten_bind_btTransform_getBasis_0"
              ] = function () {
                return Module["asm"]["Zn"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_inverse_0 = (Module[
                "_emscripten_bind_btTransform_inverse_0"
              ] = function () {
                return Module["asm"]["_n"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform_op_mul_1 = (Module[
                "_emscripten_bind_btTransform_op_mul_1"
              ] = function () {
                return Module["asm"]["$n"].apply(null, arguments);
              });
              var _emscripten_bind_btTransform___destroy___0 = (Module[
                "_emscripten_bind_btTransform___destroy___0"
              ] = function () {
                return Module["asm"]["ao"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_btCylinderShape_1 = (Module[
                "_emscripten_bind_btCylinderShape_btCylinderShape_1"
              ] = function () {
                return Module["asm"]["bo"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_setMargin_1 = (Module[
                "_emscripten_bind_btCylinderShape_setMargin_1"
              ] = function () {
                return Module["asm"]["co"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_getMargin_0 = (Module[
                "_emscripten_bind_btCylinderShape_getMargin_0"
              ] = function () {
                return Module["asm"]["eo"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_updateProp_3 = (Module[
                "_emscripten_bind_btCylinderShape_updateProp_3"
              ] = function () {
                return Module["asm"]["fo"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_setLocalScaling_1 = (Module[
                "_emscripten_bind_btCylinderShape_setLocalScaling_1"
              ] = function () {
                return Module["asm"]["go"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_getLocalScaling_0 = (Module[
                "_emscripten_bind_btCylinderShape_getLocalScaling_0"
              ] = function () {
                return Module["asm"]["ho"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_calculateLocalInertia_2 =
                (Module[
                  "_emscripten_bind_btCylinderShape_calculateLocalInertia_2"
                ] = function () {
                  return Module["asm"]["io"].apply(null, arguments);
                });
              var _emscripten_bind_btCylinderShape_isCompound_0 = (Module[
                "_emscripten_bind_btCylinderShape_isCompound_0"
              ] = function () {
                return Module["asm"]["jo"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_getUserIndex_0 = (Module[
                "_emscripten_bind_btCylinderShape_getUserIndex_0"
              ] = function () {
                return Module["asm"]["ko"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_setUserIndex_1 = (Module[
                "_emscripten_bind_btCylinderShape_setUserIndex_1"
              ] = function () {
                return Module["asm"]["lo"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_getAabb_3 = (Module[
                "_emscripten_bind_btCylinderShape_getAabb_3"
              ] = function () {
                return Module["asm"]["mo"].apply(null, arguments);
              });
              var _emscripten_bind_btCylinderShape_getLocalBoundingSphere_0 =
                (Module[
                  "_emscripten_bind_btCylinderShape_getLocalBoundingSphere_0"
                ] = function () {
                  return Module["asm"]["no"].apply(null, arguments);
                });
              var _emscripten_bind_btCylinderShape_getImplicitShapeDimensions_0 =
                (Module[
                  "_emscripten_bind_btCylinderShape_getImplicitShapeDimensions_0"
                ] = function () {
                  return Module["asm"]["oo"].apply(null, arguments);
                });
              var _emscripten_bind_btCylinderShape___destroy___0 = (Module[
                "_emscripten_bind_btCylinderShape___destroy___0"
              ] = function () {
                return Module["asm"]["po"].apply(null, arguments);
              });
              var _emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP =
                (Module[
                  "_emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP"
                ] = function () {
                  return Module["asm"]["qo"].apply(null, arguments);
                });
              var _emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP =
                (Module[
                  "_emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP"
                ] = function () {
                  return Module["asm"]["ro"].apply(null, arguments);
                });
              var _emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM =
                (Module[
                  "_emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM"
                ] = function () {
                  return Module["asm"]["so"].apply(null, arguments);
                });
              var _emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM =
                (Module[
                  "_emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM"
                ] = function () {
                  return Module["asm"]["to"].apply(null, arguments);
                });
              var _emscripten_enum_PHY_ScalarType_PHY_FLOAT = (Module[
                "_emscripten_enum_PHY_ScalarType_PHY_FLOAT"
              ] = function () {
                return Module["asm"]["uo"].apply(null, arguments);
              });
              var _emscripten_enum_PHY_ScalarType_PHY_DOUBLE = (Module[
                "_emscripten_enum_PHY_ScalarType_PHY_DOUBLE"
              ] = function () {
                return Module["asm"]["vo"].apply(null, arguments);
              });
              var _emscripten_enum_PHY_ScalarType_PHY_INTEGER = (Module[
                "_emscripten_enum_PHY_ScalarType_PHY_INTEGER"
              ] = function () {
                return Module["asm"]["wo"].apply(null, arguments);
              });
              var _emscripten_enum_PHY_ScalarType_PHY_SHORT = (Module[
                "_emscripten_enum_PHY_ScalarType_PHY_SHORT"
              ] = function () {
                return Module["asm"]["xo"].apply(null, arguments);
              });
              var _emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88 = (Module[
                "_emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88"
              ] = function () {
                return Module["asm"]["yo"].apply(null, arguments);
              });
              var _emscripten_enum_PHY_ScalarType_PHY_UCHAR = (Module[
                "_emscripten_enum_PHY_ScalarType_PHY_UCHAR"
              ] = function () {
                return Module["asm"]["zo"].apply(null, arguments);
              });
              var _malloc = (Module["_malloc"] = function () {
                return Module["asm"]["Ao"].apply(null, arguments);
              });
              var _free = (Module["_free"] = function () {
                return Module["asm"]["Bo"].apply(null, arguments);
              });
              var dynCall_vi = (Module["dynCall_vi"] = function () {
                return Module["asm"]["Co"].apply(null, arguments);
              });
              var dynCall_v = (Module["dynCall_v"] = function () {
                return Module["asm"]["Do"].apply(null, arguments);
              });
              Module["asm"] = asm;
              Module["addFunction"] = addFunction;
              var calledRun;
              Module["then"] = function (func) {
                if (calledRun) {
                  func(Module);
                } else {
                  var old = Module["onRuntimeInitialized"];
                  Module["onRuntimeInitialized"] = function () {
                    if (old) old();
                    func(Module);
                  };
                }
                return Module;
              };
              function ExitStatus(status) {
                this.name = "ExitStatus";
                this.message = "Program terminated with exit(" + status + ")";
                this.status = status;
              }
              dependenciesFulfilled = function runCaller() {
                if (!calledRun) run();
                if (!calledRun) dependenciesFulfilled = runCaller;
              };
              function run(args) {
                if (runDependencies > 0) {
                  return;
                }
                preRun();
                if (runDependencies > 0) return;
                function doRun() {
                  if (calledRun) return;
                  calledRun = true;
                  if (ABORT) return;
                  initRuntime();
                  preMain();
                  if (Module["onRuntimeInitialized"])
                    Module["onRuntimeInitialized"]();
                  postRun();
                }
                if (Module["setStatus"]) {
                  Module["setStatus"]("Running...");
                  setTimeout(function () {
                    setTimeout(function () {
                      Module["setStatus"]("");
                    }, 1);
                    doRun();
                  }, 1);
                } else {
                  doRun();
                }
              }
              Module["run"] = run;
              if (Module["preInit"]) {
                if (typeof Module["preInit"] == "function")
                  Module["preInit"] = [Module["preInit"]];
                while (Module["preInit"].length > 0) {
                  Module["preInit"].pop()();
                }
              }
              noExitRuntime = true;
              run();
              function WrapperObject() {}
              WrapperObject.prototype = Object.create(WrapperObject.prototype);
              WrapperObject.prototype.constructor = WrapperObject;
              WrapperObject.prototype.__class__ = WrapperObject;
              WrapperObject.__cache__ = {};
              Module["WrapperObject"] = WrapperObject;
              function getCache(__class__) {
                return (__class__ || WrapperObject).__cache__;
              }
              Module["getCache"] = getCache;
              function wrapPointer(ptr, __class__) {
                var cache = getCache(__class__);
                var ret = cache[ptr];
                if (ret) return ret;
                ret = Object.create((__class__ || WrapperObject).prototype);
                ret.ptr = ptr;
                return (cache[ptr] = ret);
              }
              Module["wrapPointer"] = wrapPointer;
              function castObject(obj, __class__) {
                return wrapPointer(obj.ptr, __class__);
              }
              Module["castObject"] = castObject;
              Module["NULL"] = wrapPointer(0);
              function destroy(obj) {
                if (!obj["__destroy__"])
                  throw "Error: Cannot destroy object. (Did you create it yourself?)";
                obj["__destroy__"]();
                delete getCache(obj.__class__)[obj.ptr];
              }
              Module["destroy"] = destroy;
              function compare(obj1, obj2) {
                return obj1.ptr === obj2.ptr;
              }
              Module["compare"] = compare;
              function getPointer(obj) {
                return obj.ptr;
              }
              Module["getPointer"] = getPointer;
              function getClass(obj) {
                return obj.__class__;
              }
              Module["getClass"] = getClass;
              function btCollisionShape() {
                throw "cannot construct a btCollisionShape, no constructor in IDL";
              }
              btCollisionShape.prototype = Object.create(
                WrapperObject.prototype
              );
              btCollisionShape.prototype.constructor = btCollisionShape;
              btCollisionShape.prototype.__class__ = btCollisionShape;
              btCollisionShape.__cache__ = {};
              Module["btCollisionShape"] = btCollisionShape;
              btCollisionShape.prototype["setLocalScaling"] =
                btCollisionShape.prototype.setLocalScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btCollisionShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btCollisionShape.prototype["getLocalScaling"] =
                btCollisionShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btCollisionShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btCollisionShape.prototype["calculateLocalInertia"] =
                btCollisionShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btCollisionShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btCollisionShape.prototype["setMargin"] =
                btCollisionShape.prototype.setMargin = function (margin) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btCollisionShape_setMargin_1(self, margin);
                };
              btCollisionShape.prototype["getMargin"] =
                btCollisionShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCollisionShape_getMargin_0(self);
                };
              btCollisionShape.prototype["isCompound"] =
                btCollisionShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btCollisionShape_isCompound_0(self);
                };
              btCollisionShape.prototype["getUserIndex"] =
                btCollisionShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCollisionShape_getUserIndex_0(self);
                };
              btCollisionShape.prototype["setUserIndex"] =
                btCollisionShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btCollisionShape_setUserIndex_1(self, index);
                };
              btCollisionShape.prototype["getAabb"] =
                btCollisionShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btCollisionShape_getAabb_3(
                    self,
                    t,
                    min,
                    max
                  );
                };
              btCollisionShape.prototype["getLocalBoundingSphere"] =
                btCollisionShape.prototype.getLocalBoundingSphere =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btCollisionShape_getLocalBoundingSphere_0(
                      self
                    );
                  };
              btCollisionShape.prototype["__destroy__"] =
                btCollisionShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btCollisionShape___destroy___0(self);
                };
              function btCollisionObject() {
                this.ptr =
                  _emscripten_bind_btCollisionObject_btCollisionObject_0();
                getCache(btCollisionObject)[this.ptr] = this;
              }
              btCollisionObject.prototype = Object.create(
                WrapperObject.prototype
              );
              btCollisionObject.prototype.constructor = btCollisionObject;
              btCollisionObject.prototype.__class__ = btCollisionObject;
              btCollisionObject.__cache__ = {};
              Module["btCollisionObject"] = btCollisionObject;
              btCollisionObject.prototype["setAnisotropicFriction"] =
                btCollisionObject.prototype.setAnisotropicFriction = function (
                  anisotropicFriction,
                  frictionMode
                ) {
                  var self = this.ptr;
                  if (
                    anisotropicFriction &&
                    typeof anisotropicFriction === "object"
                  )
                    anisotropicFriction = anisotropicFriction.ptr;
                  if (frictionMode && typeof frictionMode === "object")
                    frictionMode = frictionMode.ptr;
                  _emscripten_bind_btCollisionObject_setAnisotropicFriction_2(
                    self,
                    anisotropicFriction,
                    frictionMode
                  );
                };
              btCollisionObject.prototype["getCollisionShape"] =
                btCollisionObject.prototype.getCollisionShape = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btCollisionObject_getCollisionShape_0(
                      self
                    ),
                    btCollisionShape
                  );
                };
              btCollisionObject.prototype["getActivationState"] =
                btCollisionObject.prototype.getActivationState = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCollisionObject_getActivationState_0(
                    self
                  );
                };
              btCollisionObject.prototype["setActivationState"] =
                btCollisionObject.prototype.setActivationState = function (
                  newState
                ) {
                  var self = this.ptr;
                  if (newState && typeof newState === "object")
                    newState = newState.ptr;
                  _emscripten_bind_btCollisionObject_setActivationState_1(
                    self,
                    newState
                  );
                };
              btCollisionObject.prototype["forceActivationState"] =
                btCollisionObject.prototype.forceActivationState = function (
                  newState
                ) {
                  var self = this.ptr;
                  if (newState && typeof newState === "object")
                    newState = newState.ptr;
                  _emscripten_bind_btCollisionObject_forceActivationState_1(
                    self,
                    newState
                  );
                };
              btCollisionObject.prototype["activate"] =
                btCollisionObject.prototype.activate = function (
                  forceActivation
                ) {
                  var self = this.ptr;
                  if (forceActivation && typeof forceActivation === "object")
                    forceActivation = forceActivation.ptr;
                  if (forceActivation === undefined) {
                    _emscripten_bind_btCollisionObject_activate_0(self);
                    return;
                  }
                  _emscripten_bind_btCollisionObject_activate_1(
                    self,
                    forceActivation
                  );
                };
              btCollisionObject.prototype["isActive"] =
                btCollisionObject.prototype.isActive = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btCollisionObject_isActive_0(self);
                };
              btCollisionObject.prototype["isKinematicObject"] =
                btCollisionObject.prototype.isKinematicObject = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btCollisionObject_isKinematicObject_0(
                    self
                  );
                };
              btCollisionObject.prototype["isStaticObject"] =
                btCollisionObject.prototype.isStaticObject = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btCollisionObject_isStaticObject_0(
                    self
                  );
                };
              btCollisionObject.prototype["isStaticOrKinematicObject"] =
                btCollisionObject.prototype.isStaticOrKinematicObject =
                  function () {
                    var self = this.ptr;
                    return !!_emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0(
                      self
                    );
                  };
              btCollisionObject.prototype["setRestitution"] =
                btCollisionObject.prototype.setRestitution = function (r) {
                  var self = this.ptr;
                  if (r && typeof r === "object") r = r.ptr;
                  _emscripten_bind_btCollisionObject_setRestitution_1(self, r);
                };
              btCollisionObject.prototype["setFriction"] =
                btCollisionObject.prototype.setFriction = function (f) {
                  var self = this.ptr;
                  if (f && typeof f === "object") f = f.ptr;
                  _emscripten_bind_btCollisionObject_setFriction_1(self, f);
                };
              btCollisionObject.prototype["setRollingFriction"] =
                btCollisionObject.prototype.setRollingFriction = function (rf) {
                  var self = this.ptr;
                  if (rf && typeof rf === "object") rf = rf.ptr;
                  _emscripten_bind_btCollisionObject_setRollingFriction_1(
                    self,
                    rf
                  );
                };
              btCollisionObject.prototype["setSpinningFriction"] =
                btCollisionObject.prototype.setSpinningFriction = function (
                  sf
                ) {
                  var self = this.ptr;
                  if (sf && typeof sf === "object") sf = sf.ptr;
                  _emscripten_bind_btCollisionObject_setSpinningFriction_1(
                    self,
                    sf
                  );
                };
              btCollisionObject.prototype["getWorldTransform"] =
                btCollisionObject.prototype.getWorldTransform = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btCollisionObject_getWorldTransform_0(
                      self
                    ),
                    btTransform
                  );
                };
              btCollisionObject.prototype["getCollisionFlags"] =
                btCollisionObject.prototype.getCollisionFlags = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCollisionObject_getCollisionFlags_0(
                    self
                  );
                };
              btCollisionObject.prototype["setCollisionFlags"] =
                btCollisionObject.prototype.setCollisionFlags = function (
                  flags
                ) {
                  var self = this.ptr;
                  if (flags && typeof flags === "object") flags = flags.ptr;
                  _emscripten_bind_btCollisionObject_setCollisionFlags_1(
                    self,
                    flags
                  );
                };
              btCollisionObject.prototype["setWorldTransform"] =
                btCollisionObject.prototype.setWorldTransform = function (
                  worldTrans
                ) {
                  var self = this.ptr;
                  if (worldTrans && typeof worldTrans === "object")
                    worldTrans = worldTrans.ptr;
                  _emscripten_bind_btCollisionObject_setWorldTransform_1(
                    self,
                    worldTrans
                  );
                };
              btCollisionObject.prototype["setCollisionShape"] =
                btCollisionObject.prototype.setCollisionShape = function (
                  collisionShape
                ) {
                  var self = this.ptr;
                  if (collisionShape && typeof collisionShape === "object")
                    collisionShape = collisionShape.ptr;
                  _emscripten_bind_btCollisionObject_setCollisionShape_1(
                    self,
                    collisionShape
                  );
                };
              btCollisionObject.prototype["setCcdMotionThreshold"] =
                btCollisionObject.prototype.setCcdMotionThreshold = function (
                  ccdMotionThreshold
                ) {
                  var self = this.ptr;
                  if (
                    ccdMotionThreshold &&
                    typeof ccdMotionThreshold === "object"
                  )
                    ccdMotionThreshold = ccdMotionThreshold.ptr;
                  _emscripten_bind_btCollisionObject_setCcdMotionThreshold_1(
                    self,
                    ccdMotionThreshold
                  );
                };
              btCollisionObject.prototype["setCcdSweptSphereRadius"] =
                btCollisionObject.prototype.setCcdSweptSphereRadius = function (
                  radius
                ) {
                  var self = this.ptr;
                  if (radius && typeof radius === "object") radius = radius.ptr;
                  _emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1(
                    self,
                    radius
                  );
                };
              btCollisionObject.prototype["getUserIndex"] =
                btCollisionObject.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCollisionObject_getUserIndex_0(
                    self
                  );
                };
              btCollisionObject.prototype["setUserIndex"] =
                btCollisionObject.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btCollisionObject_setUserIndex_1(
                    self,
                    index
                  );
                };
              btCollisionObject.prototype["setIgnoreCollisionCheck"] =
                btCollisionObject.prototype.setIgnoreCollisionCheck = function (
                  co,
                  ig
                ) {
                  var self = this.ptr;
                  if (co && typeof co === "object") co = co.ptr;
                  if (ig && typeof ig === "object") ig = ig.ptr;
                  _emscripten_bind_btCollisionObject_setIgnoreCollisionCheck_2(
                    self,
                    co,
                    ig
                  );
                };
              btCollisionObject.prototype["__destroy__"] =
                btCollisionObject.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btCollisionObject___destroy___0(self);
                };
              function btConvexShape() {
                throw "cannot construct a btConvexShape, no constructor in IDL";
              }
              btConvexShape.prototype = Object.create(
                btCollisionShape.prototype
              );
              btConvexShape.prototype.constructor = btConvexShape;
              btConvexShape.prototype.__class__ = btConvexShape;
              btConvexShape.__cache__ = {};
              Module["btConvexShape"] = btConvexShape;
              btConvexShape.prototype["setLocalScaling"] =
                btConvexShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btConvexShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btConvexShape.prototype["getLocalScaling"] =
                btConvexShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btConvexShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btConvexShape.prototype["calculateLocalInertia"] =
                btConvexShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btConvexShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btConvexShape.prototype["setMargin"] =
                btConvexShape.prototype.setMargin = function (margin) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btConvexShape_setMargin_1(self, margin);
                };
              btConvexShape.prototype["getMargin"] =
                btConvexShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConvexShape_getMargin_0(self);
                };
              btConvexShape.prototype["isCompound"] =
                btConvexShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btConvexShape_isCompound_0(self);
                };
              btConvexShape.prototype["getUserIndex"] =
                btConvexShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConvexShape_getUserIndex_0(self);
                };
              btConvexShape.prototype["setUserIndex"] =
                btConvexShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btConvexShape_setUserIndex_1(self, index);
                };
              btConvexShape.prototype["getAabb"] =
                btConvexShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btConvexShape_getAabb_3(self, t, min, max);
                };
              btConvexShape.prototype["getLocalBoundingSphere"] =
                btConvexShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConvexShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btConvexShape.prototype["__destroy__"] =
                btConvexShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConvexShape___destroy___0(self);
                };
              function btConcaveShape() {
                throw "cannot construct a btConcaveShape, no constructor in IDL";
              }
              btConcaveShape.prototype = Object.create(
                btCollisionShape.prototype
              );
              btConcaveShape.prototype.constructor = btConcaveShape;
              btConcaveShape.prototype.__class__ = btConcaveShape;
              btConcaveShape.__cache__ = {};
              Module["btConcaveShape"] = btConcaveShape;
              btConcaveShape.prototype["setLocalScaling"] =
                btConcaveShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btConcaveShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btConcaveShape.prototype["getLocalScaling"] =
                btConcaveShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btConcaveShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btConcaveShape.prototype["calculateLocalInertia"] =
                btConcaveShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btConcaveShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btConcaveShape.prototype["isCompound"] =
                btConcaveShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btConcaveShape_isCompound_0(self);
                };
              btConcaveShape.prototype["getUserIndex"] =
                btConcaveShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConcaveShape_getUserIndex_0(self);
                };
              btConcaveShape.prototype["setUserIndex"] =
                btConcaveShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btConcaveShape_setUserIndex_1(self, index);
                };
              btConcaveShape.prototype["getAabb"] =
                btConcaveShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btConcaveShape_getAabb_3(self, t, min, max);
                };
              btConcaveShape.prototype["getLocalBoundingSphere"] =
                btConcaveShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConcaveShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btConcaveShape.prototype["__destroy__"] =
                btConcaveShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConcaveShape___destroy___0(self);
                };
              function btCollisionWorld() {
                throw "cannot construct a btCollisionWorld, no constructor in IDL";
              }
              btCollisionWorld.prototype = Object.create(
                WrapperObject.prototype
              );
              btCollisionWorld.prototype.constructor = btCollisionWorld;
              btCollisionWorld.prototype.__class__ = btCollisionWorld;
              btCollisionWorld.__cache__ = {};
              Module["btCollisionWorld"] = btCollisionWorld;
              btCollisionWorld.prototype["getDispatcher"] =
                btCollisionWorld.prototype.getDispatcher = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btCollisionWorld_getDispatcher_0(self),
                    btDispatcher
                  );
                };
              btCollisionWorld.prototype["rayTest"] =
                btCollisionWorld.prototype.rayTest = function (
                  rayFromWorld,
                  rayToWorld,
                  resultCallback
                ) {
                  var self = this.ptr;
                  if (rayFromWorld && typeof rayFromWorld === "object")
                    rayFromWorld = rayFromWorld.ptr;
                  if (rayToWorld && typeof rayToWorld === "object")
                    rayToWorld = rayToWorld.ptr;
                  if (resultCallback && typeof resultCallback === "object")
                    resultCallback = resultCallback.ptr;
                  _emscripten_bind_btCollisionWorld_rayTest_3(
                    self,
                    rayFromWorld,
                    rayToWorld,
                    resultCallback
                  );
                };
              btCollisionWorld.prototype["addCollisionObject"] =
                btCollisionWorld.prototype.addCollisionObject = function (
                  collisionObject,
                  collisionFilterGroup,
                  collisionFilterMask
                ) {
                  var self = this.ptr;
                  if (collisionObject && typeof collisionObject === "object")
                    collisionObject = collisionObject.ptr;
                  if (
                    collisionFilterGroup &&
                    typeof collisionFilterGroup === "object"
                  )
                    collisionFilterGroup = collisionFilterGroup.ptr;
                  if (
                    collisionFilterMask &&
                    typeof collisionFilterMask === "object"
                  )
                    collisionFilterMask = collisionFilterMask.ptr;
                  if (collisionFilterGroup === undefined) {
                    _emscripten_bind_btCollisionWorld_addCollisionObject_1(
                      self,
                      collisionObject
                    );
                    return;
                  }
                  if (collisionFilterMask === undefined) {
                    _emscripten_bind_btCollisionWorld_addCollisionObject_2(
                      self,
                      collisionObject,
                      collisionFilterGroup
                    );
                    return;
                  }
                  _emscripten_bind_btCollisionWorld_addCollisionObject_3(
                    self,
                    collisionObject,
                    collisionFilterGroup,
                    collisionFilterMask
                  );
                };
              btCollisionWorld.prototype["removeCollisionObject"] =
                btCollisionWorld.prototype.removeCollisionObject = function (
                  collisionObject
                ) {
                  var self = this.ptr;
                  if (collisionObject && typeof collisionObject === "object")
                    collisionObject = collisionObject.ptr;
                  _emscripten_bind_btCollisionWorld_removeCollisionObject_1(
                    self,
                    collisionObject
                  );
                };
              btCollisionWorld.prototype["__destroy__"] =
                btCollisionWorld.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btCollisionWorld___destroy___0(self);
                };
              function btTypedConstraint() {
                throw "cannot construct a btTypedConstraint, no constructor in IDL";
              }
              btTypedConstraint.prototype = Object.create(
                WrapperObject.prototype
              );
              btTypedConstraint.prototype.constructor = btTypedConstraint;
              btTypedConstraint.prototype.__class__ = btTypedConstraint;
              btTypedConstraint.__cache__ = {};
              Module["btTypedConstraint"] = btTypedConstraint;
              btTypedConstraint.prototype["enableFeedback"] =
                btTypedConstraint.prototype.enableFeedback = function (
                  needsFeedback
                ) {
                  var self = this.ptr;
                  if (needsFeedback && typeof needsFeedback === "object")
                    needsFeedback = needsFeedback.ptr;
                  _emscripten_bind_btTypedConstraint_enableFeedback_1(
                    self,
                    needsFeedback
                  );
                };
              btTypedConstraint.prototype["getBreakingImpulseThreshold"] =
                btTypedConstraint.prototype.getBreakingImpulseThreshold =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0(
                      self
                    );
                  };
              btTypedConstraint.prototype["setBreakingImpulseThreshold"] =
                btTypedConstraint.prototype.setBreakingImpulseThreshold =
                  function (threshold) {
                    var self = this.ptr;
                    if (threshold && typeof threshold === "object")
                      threshold = threshold.ptr;
                    _emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1(
                      self,
                      threshold
                    );
                  };
              btTypedConstraint.prototype["getParam"] =
                btTypedConstraint.prototype.getParam = function (num, axis) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  return _emscripten_bind_btTypedConstraint_getParam_2(
                    self,
                    num,
                    axis
                  );
                };
              btTypedConstraint.prototype["setParam"] =
                btTypedConstraint.prototype.setParam = function (
                  num,
                  value,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (value && typeof value === "object") value = value.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_btTypedConstraint_setParam_3(
                    self,
                    num,
                    value,
                    axis
                  );
                };
              btTypedConstraint.prototype["__destroy__"] =
                btTypedConstraint.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btTypedConstraint___destroy___0(self);
                };
              function btGeneric6DofConstraint(
                rbA,
                rbB,
                frameInA,
                frameInB,
                useLinearFrameReferenceFrameA
              ) {
                if (rbA && typeof rbA === "object") rbA = rbA.ptr;
                if (rbB && typeof rbB === "object") rbB = rbB.ptr;
                if (frameInA && typeof frameInA === "object")
                  frameInA = frameInA.ptr;
                if (frameInB && typeof frameInB === "object")
                  frameInB = frameInB.ptr;
                if (
                  useLinearFrameReferenceFrameA &&
                  typeof useLinearFrameReferenceFrameA === "object"
                )
                  useLinearFrameReferenceFrameA =
                    useLinearFrameReferenceFrameA.ptr;
                if (frameInB === undefined) {
                  this.ptr =
                    _emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_3(
                      rbA,
                      rbB,
                      frameInA
                    );
                  getCache(btGeneric6DofConstraint)[this.ptr] = this;
                  return;
                }
                if (useLinearFrameReferenceFrameA === undefined) {
                  this.ptr =
                    _emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_4(
                      rbA,
                      rbB,
                      frameInA,
                      frameInB
                    );
                  getCache(btGeneric6DofConstraint)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_5(
                    rbA,
                    rbB,
                    frameInA,
                    frameInB,
                    useLinearFrameReferenceFrameA
                  );
                getCache(btGeneric6DofConstraint)[this.ptr] = this;
              }
              btGeneric6DofConstraint.prototype = Object.create(
                btTypedConstraint.prototype
              );
              btGeneric6DofConstraint.prototype.constructor =
                btGeneric6DofConstraint;
              btGeneric6DofConstraint.prototype.__class__ =
                btGeneric6DofConstraint;
              btGeneric6DofConstraint.__cache__ = {};
              Module["btGeneric6DofConstraint"] = btGeneric6DofConstraint;
              btGeneric6DofConstraint.prototype["setLinearLowerLimit"] =
                btGeneric6DofConstraint.prototype.setLinearLowerLimit =
                  function (linearLower) {
                    var self = this.ptr;
                    if (linearLower && typeof linearLower === "object")
                      linearLower = linearLower.ptr;
                    _emscripten_bind_btGeneric6DofConstraint_setLinearLowerLimit_1(
                      self,
                      linearLower
                    );
                  };
              btGeneric6DofConstraint.prototype["setLinearUpperLimit"] =
                btGeneric6DofConstraint.prototype.setLinearUpperLimit =
                  function (linearUpper) {
                    var self = this.ptr;
                    if (linearUpper && typeof linearUpper === "object")
                      linearUpper = linearUpper.ptr;
                    _emscripten_bind_btGeneric6DofConstraint_setLinearUpperLimit_1(
                      self,
                      linearUpper
                    );
                  };
              btGeneric6DofConstraint.prototype["setAngularLowerLimit"] =
                btGeneric6DofConstraint.prototype.setAngularLowerLimit =
                  function (angularLower) {
                    var self = this.ptr;
                    if (angularLower && typeof angularLower === "object")
                      angularLower = angularLower.ptr;
                    _emscripten_bind_btGeneric6DofConstraint_setAngularLowerLimit_1(
                      self,
                      angularLower
                    );
                  };
              btGeneric6DofConstraint.prototype["setAngularUpperLimit"] =
                btGeneric6DofConstraint.prototype.setAngularUpperLimit =
                  function (angularUpper) {
                    var self = this.ptr;
                    if (angularUpper && typeof angularUpper === "object")
                      angularUpper = angularUpper.ptr;
                    _emscripten_bind_btGeneric6DofConstraint_setAngularUpperLimit_1(
                      self,
                      angularUpper
                    );
                  };
              btGeneric6DofConstraint.prototype["getFrameOffsetA"] =
                btGeneric6DofConstraint.prototype.getFrameOffsetA =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btGeneric6DofConstraint_getFrameOffsetA_0(
                        self
                      ),
                      btTransform
                    );
                  };
              btGeneric6DofConstraint.prototype["enableFeedback"] =
                btGeneric6DofConstraint.prototype.enableFeedback = function (
                  needsFeedback
                ) {
                  var self = this.ptr;
                  if (needsFeedback && typeof needsFeedback === "object")
                    needsFeedback = needsFeedback.ptr;
                  _emscripten_bind_btGeneric6DofConstraint_enableFeedback_1(
                    self,
                    needsFeedback
                  );
                };
              btGeneric6DofConstraint.prototype["getBreakingImpulseThreshold"] =
                btGeneric6DofConstraint.prototype.getBreakingImpulseThreshold =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btGeneric6DofConstraint_getBreakingImpulseThreshold_0(
                      self
                    );
                  };
              btGeneric6DofConstraint.prototype["setBreakingImpulseThreshold"] =
                btGeneric6DofConstraint.prototype.setBreakingImpulseThreshold =
                  function (threshold) {
                    var self = this.ptr;
                    if (threshold && typeof threshold === "object")
                      threshold = threshold.ptr;
                    _emscripten_bind_btGeneric6DofConstraint_setBreakingImpulseThreshold_1(
                      self,
                      threshold
                    );
                  };
              btGeneric6DofConstraint.prototype["getParam"] =
                btGeneric6DofConstraint.prototype.getParam = function (
                  num,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  return _emscripten_bind_btGeneric6DofConstraint_getParam_2(
                    self,
                    num,
                    axis
                  );
                };
              btGeneric6DofConstraint.prototype["setParam"] =
                btGeneric6DofConstraint.prototype.setParam = function (
                  num,
                  value,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (value && typeof value === "object") value = value.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_btGeneric6DofConstraint_setParam_3(
                    self,
                    num,
                    value,
                    axis
                  );
                };
              btGeneric6DofConstraint.prototype["__destroy__"] =
                btGeneric6DofConstraint.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btGeneric6DofConstraint___destroy___0(self);
                };
              function btStridingMeshInterface() {
                throw "cannot construct a btStridingMeshInterface, no constructor in IDL";
              }
              btStridingMeshInterface.prototype = Object.create(
                WrapperObject.prototype
              );
              btStridingMeshInterface.prototype.constructor =
                btStridingMeshInterface;
              btStridingMeshInterface.prototype.__class__ =
                btStridingMeshInterface;
              btStridingMeshInterface.__cache__ = {};
              Module["btStridingMeshInterface"] = btStridingMeshInterface;
              btStridingMeshInterface.prototype["setScaling"] =
                btStridingMeshInterface.prototype.setScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btStridingMeshInterface_setScaling_1(
                    self,
                    scaling
                  );
                };
              btStridingMeshInterface.prototype["__destroy__"] =
                btStridingMeshInterface.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btStridingMeshInterface___destroy___0(self);
                };
              function btBroadphaseInterface() {
                throw "cannot construct a btBroadphaseInterface, no constructor in IDL";
              }
              btBroadphaseInterface.prototype = Object.create(
                WrapperObject.prototype
              );
              btBroadphaseInterface.prototype.constructor =
                btBroadphaseInterface;
              btBroadphaseInterface.prototype.__class__ = btBroadphaseInterface;
              btBroadphaseInterface.__cache__ = {};
              Module["btBroadphaseInterface"] = btBroadphaseInterface;
              btBroadphaseInterface.prototype["getOverlappingPairCache"] =
                btBroadphaseInterface.prototype.getOverlappingPairCache =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btBroadphaseInterface_getOverlappingPairCache_0(
                        self
                      ),
                      btOverlappingPairCache
                    );
                  };
              btBroadphaseInterface.prototype["__destroy__"] =
                btBroadphaseInterface.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btBroadphaseInterface___destroy___0(self);
                };
              function btMotionState() {
                throw "cannot construct a btMotionState, no constructor in IDL";
              }
              btMotionState.prototype = Object.create(WrapperObject.prototype);
              btMotionState.prototype.constructor = btMotionState;
              btMotionState.prototype.__class__ = btMotionState;
              btMotionState.__cache__ = {};
              Module["btMotionState"] = btMotionState;
              btMotionState.prototype["getWorldTransform"] =
                btMotionState.prototype.getWorldTransform = function (
                  worldTrans
                ) {
                  var self = this.ptr;
                  if (worldTrans && typeof worldTrans === "object")
                    worldTrans = worldTrans.ptr;
                  _emscripten_bind_btMotionState_getWorldTransform_1(
                    self,
                    worldTrans
                  );
                };
              btMotionState.prototype["setWorldTransform"] =
                btMotionState.prototype.setWorldTransform = function (
                  worldTrans
                ) {
                  var self = this.ptr;
                  if (worldTrans && typeof worldTrans === "object")
                    worldTrans = worldTrans.ptr;
                  _emscripten_bind_btMotionState_setWorldTransform_1(
                    self,
                    worldTrans
                  );
                };
              btMotionState.prototype["__destroy__"] =
                btMotionState.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btMotionState___destroy___0(self);
                };
              function btConvexInternalShape() {
                throw "cannot construct a btConvexInternalShape, no constructor in IDL";
              }
              btConvexInternalShape.prototype = Object.create(
                btConvexShape.prototype
              );
              btConvexInternalShape.prototype.constructor =
                btConvexInternalShape;
              btConvexInternalShape.prototype.__class__ = btConvexInternalShape;
              btConvexInternalShape.__cache__ = {};
              Module["btConvexInternalShape"] = btConvexInternalShape;
              btConvexInternalShape.prototype["getImplicitShapeDimensions"] =
                btConvexInternalShape.prototype.getImplicitShapeDimensions =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btConvexInternalShape_getImplicitShapeDimensions_0(
                        self
                      ),
                      btVector3
                    );
                  };
              btConvexInternalShape.prototype["setLocalScaling"] =
                btConvexInternalShape.prototype.setLocalScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btConvexInternalShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btConvexInternalShape.prototype["getLocalScaling"] =
                btConvexInternalShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btConvexInternalShape_getLocalScaling_0(
                      self
                    ),
                    btVector3
                  );
                };
              btConvexInternalShape.prototype["calculateLocalInertia"] =
                btConvexInternalShape.prototype.calculateLocalInertia =
                  function (mass, inertia) {
                    var self = this.ptr;
                    if (mass && typeof mass === "object") mass = mass.ptr;
                    if (inertia && typeof inertia === "object")
                      inertia = inertia.ptr;
                    _emscripten_bind_btConvexInternalShape_calculateLocalInertia_2(
                      self,
                      mass,
                      inertia
                    );
                  };
              btConvexInternalShape.prototype["setMargin"] =
                btConvexInternalShape.prototype.setMargin = function (margin) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btConvexInternalShape_setMargin_1(
                    self,
                    margin
                  );
                };
              btConvexInternalShape.prototype["getMargin"] =
                btConvexInternalShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConvexInternalShape_getMargin_0(
                    self
                  );
                };
              btConvexInternalShape.prototype["isCompound"] =
                btConvexInternalShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btConvexInternalShape_isCompound_0(
                    self
                  );
                };
              btConvexInternalShape.prototype["getUserIndex"] =
                btConvexInternalShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConvexInternalShape_getUserIndex_0(
                    self
                  );
                };
              btConvexInternalShape.prototype["setUserIndex"] =
                btConvexInternalShape.prototype.setUserIndex = function (
                  index
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btConvexInternalShape_setUserIndex_1(
                    self,
                    index
                  );
                };
              btConvexInternalShape.prototype["getAabb"] =
                btConvexInternalShape.prototype.getAabb = function (
                  t,
                  min,
                  max
                ) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btConvexInternalShape_getAabb_3(
                    self,
                    t,
                    min,
                    max
                  );
                };
              btConvexInternalShape.prototype["getLocalBoundingSphere"] =
                btConvexInternalShape.prototype.getLocalBoundingSphere =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btConvexInternalShape_getLocalBoundingSphere_0(
                      self
                    );
                  };
              btConvexInternalShape.prototype["__destroy__"] =
                btConvexInternalShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConvexInternalShape___destroy___0(self);
                };
              function btDynamicsWorld() {
                throw "cannot construct a btDynamicsWorld, no constructor in IDL";
              }
              btDynamicsWorld.prototype = Object.create(
                btCollisionWorld.prototype
              );
              btDynamicsWorld.prototype.constructor = btDynamicsWorld;
              btDynamicsWorld.prototype.__class__ = btDynamicsWorld;
              btDynamicsWorld.__cache__ = {};
              Module["btDynamicsWorld"] = btDynamicsWorld;
              btDynamicsWorld.prototype["addAction"] =
                btDynamicsWorld.prototype.addAction = function (action) {
                  var self = this.ptr;
                  if (action && typeof action === "object") action = action.ptr;
                  _emscripten_bind_btDynamicsWorld_addAction_1(self, action);
                };
              btDynamicsWorld.prototype["removeAction"] =
                btDynamicsWorld.prototype.removeAction = function (action) {
                  var self = this.ptr;
                  if (action && typeof action === "object") action = action.ptr;
                  _emscripten_bind_btDynamicsWorld_removeAction_1(self, action);
                };
              btDynamicsWorld.prototype["getSolverInfo"] =
                btDynamicsWorld.prototype.getSolverInfo = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btDynamicsWorld_getSolverInfo_0(self),
                    btContactSolverInfo
                  );
                };
              btDynamicsWorld.prototype["getDispatcher"] =
                btDynamicsWorld.prototype.getDispatcher = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btDynamicsWorld_getDispatcher_0(self),
                    btDispatcher
                  );
                };
              btDynamicsWorld.prototype["rayTest"] =
                btDynamicsWorld.prototype.rayTest = function (
                  rayFromWorld,
                  rayToWorld,
                  resultCallback
                ) {
                  var self = this.ptr;
                  if (rayFromWorld && typeof rayFromWorld === "object")
                    rayFromWorld = rayFromWorld.ptr;
                  if (rayToWorld && typeof rayToWorld === "object")
                    rayToWorld = rayToWorld.ptr;
                  if (resultCallback && typeof resultCallback === "object")
                    resultCallback = resultCallback.ptr;
                  _emscripten_bind_btDynamicsWorld_rayTest_3(
                    self,
                    rayFromWorld,
                    rayToWorld,
                    resultCallback
                  );
                };
              btDynamicsWorld.prototype["addCollisionObject"] =
                btDynamicsWorld.prototype.addCollisionObject = function (
                  collisionObject,
                  collisionFilterGroup,
                  collisionFilterMask
                ) {
                  var self = this.ptr;
                  if (collisionObject && typeof collisionObject === "object")
                    collisionObject = collisionObject.ptr;
                  if (
                    collisionFilterGroup &&
                    typeof collisionFilterGroup === "object"
                  )
                    collisionFilterGroup = collisionFilterGroup.ptr;
                  if (
                    collisionFilterMask &&
                    typeof collisionFilterMask === "object"
                  )
                    collisionFilterMask = collisionFilterMask.ptr;
                  if (collisionFilterGroup === undefined) {
                    _emscripten_bind_btDynamicsWorld_addCollisionObject_1(
                      self,
                      collisionObject
                    );
                    return;
                  }
                  if (collisionFilterMask === undefined) {
                    _emscripten_bind_btDynamicsWorld_addCollisionObject_2(
                      self,
                      collisionObject,
                      collisionFilterGroup
                    );
                    return;
                  }
                  _emscripten_bind_btDynamicsWorld_addCollisionObject_3(
                    self,
                    collisionObject,
                    collisionFilterGroup,
                    collisionFilterMask
                  );
                };
              btDynamicsWorld.prototype["removeCollisionObject"] =
                btDynamicsWorld.prototype.removeCollisionObject = function (
                  collisionObject
                ) {
                  var self = this.ptr;
                  if (collisionObject && typeof collisionObject === "object")
                    collisionObject = collisionObject.ptr;
                  _emscripten_bind_btDynamicsWorld_removeCollisionObject_1(
                    self,
                    collisionObject
                  );
                };
              btDynamicsWorld.prototype["__destroy__"] =
                btDynamicsWorld.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btDynamicsWorld___destroy___0(self);
                };
              function btDispatcher() {
                throw "cannot construct a btDispatcher, no constructor in IDL";
              }
              btDispatcher.prototype = Object.create(WrapperObject.prototype);
              btDispatcher.prototype.constructor = btDispatcher;
              btDispatcher.prototype.__class__ = btDispatcher;
              btDispatcher.__cache__ = {};
              Module["btDispatcher"] = btDispatcher;
              btDispatcher.prototype["getNumManifolds"] =
                btDispatcher.prototype.getNumManifolds = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btDispatcher_getNumManifolds_0(self);
                };
              btDispatcher.prototype["getManifoldByIndexInternal"] =
                btDispatcher.prototype.getManifoldByIndexInternal = function (
                  index
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  return wrapPointer(
                    _emscripten_bind_btDispatcher_getManifoldByIndexInternal_1(
                      self,
                      index
                    ),
                    btPersistentManifold
                  );
                };
              btDispatcher.prototype["__destroy__"] =
                btDispatcher.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btDispatcher___destroy___0(self);
                };
              function RayResultCallback() {
                throw "cannot construct a RayResultCallback, no constructor in IDL";
              }
              RayResultCallback.prototype = Object.create(
                WrapperObject.prototype
              );
              RayResultCallback.prototype.constructor = RayResultCallback;
              RayResultCallback.prototype.__class__ = RayResultCallback;
              RayResultCallback.__cache__ = {};
              Module["RayResultCallback"] = RayResultCallback;
              RayResultCallback.prototype["hasHit"] =
                RayResultCallback.prototype.hasHit = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_RayResultCallback_hasHit_0(self);
                };
              RayResultCallback.prototype["get_m_collisionFilterGroup"] =
                RayResultCallback.prototype.get_m_collisionFilterGroup =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_RayResultCallback_get_m_collisionFilterGroup_0(
                      self
                    );
                  };
              RayResultCallback.prototype["set_m_collisionFilterGroup"] =
                RayResultCallback.prototype.set_m_collisionFilterGroup =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_RayResultCallback_set_m_collisionFilterGroup_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                RayResultCallback.prototype,
                "m_collisionFilterGroup",
                {
                  get: RayResultCallback.prototype.get_m_collisionFilterGroup,
                  set: RayResultCallback.prototype.set_m_collisionFilterGroup,
                }
              );
              RayResultCallback.prototype["get_m_collisionFilterMask"] =
                RayResultCallback.prototype.get_m_collisionFilterMask =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_RayResultCallback_get_m_collisionFilterMask_0(
                      self
                    );
                  };
              RayResultCallback.prototype["set_m_collisionFilterMask"] =
                RayResultCallback.prototype.set_m_collisionFilterMask =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_RayResultCallback_set_m_collisionFilterMask_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                RayResultCallback.prototype,
                "m_collisionFilterMask",
                {
                  get: RayResultCallback.prototype.get_m_collisionFilterMask,
                  set: RayResultCallback.prototype.set_m_collisionFilterMask,
                }
              );
              RayResultCallback.prototype["get_m_shapePart"] =
                RayResultCallback.prototype.get_m_shapePart = function () {
                  var self = this.ptr;
                  return _emscripten_bind_RayResultCallback_get_m_shapePart_0(
                    self
                  );
                };
              RayResultCallback.prototype["set_m_shapePart"] =
                RayResultCallback.prototype.set_m_shapePart = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_RayResultCallback_set_m_shapePart_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                RayResultCallback.prototype,
                "m_shapePart",
                {
                  get: RayResultCallback.prototype.get_m_shapePart,
                  set: RayResultCallback.prototype.set_m_shapePart,
                }
              );
              RayResultCallback.prototype["get_m_closestHitFraction"] =
                RayResultCallback.prototype.get_m_closestHitFraction =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_RayResultCallback_get_m_closestHitFraction_0(
                      self
                    );
                  };
              RayResultCallback.prototype["set_m_closestHitFraction"] =
                RayResultCallback.prototype.set_m_closestHitFraction =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_RayResultCallback_set_m_closestHitFraction_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                RayResultCallback.prototype,
                "m_closestHitFraction",
                {
                  get: RayResultCallback.prototype.get_m_closestHitFraction,
                  set: RayResultCallback.prototype.set_m_closestHitFraction,
                }
              );
              RayResultCallback.prototype["get_m_collisionObject"] =
                RayResultCallback.prototype.get_m_collisionObject =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_RayResultCallback_get_m_collisionObject_0(
                        self
                      ),
                      btCollisionObject
                    );
                  };
              RayResultCallback.prototype["set_m_collisionObject"] =
                RayResultCallback.prototype.set_m_collisionObject = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_RayResultCallback_set_m_collisionObject_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                RayResultCallback.prototype,
                "m_collisionObject",
                {
                  get: RayResultCallback.prototype.get_m_collisionObject,
                  set: RayResultCallback.prototype.set_m_collisionObject,
                }
              );
              RayResultCallback.prototype["__destroy__"] =
                RayResultCallback.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_RayResultCallback___destroy___0(self);
                };
              function btActionInterface() {
                throw "cannot construct a btActionInterface, no constructor in IDL";
              }
              btActionInterface.prototype = Object.create(
                WrapperObject.prototype
              );
              btActionInterface.prototype.constructor = btActionInterface;
              btActionInterface.prototype.__class__ = btActionInterface;
              btActionInterface.__cache__ = {};
              Module["btActionInterface"] = btActionInterface;
              btActionInterface.prototype["updateAction"] =
                btActionInterface.prototype.updateAction = function (
                  collisionWorld,
                  deltaTimeStep
                ) {
                  var self = this.ptr;
                  if (collisionWorld && typeof collisionWorld === "object")
                    collisionWorld = collisionWorld.ptr;
                  if (deltaTimeStep && typeof deltaTimeStep === "object")
                    deltaTimeStep = deltaTimeStep.ptr;
                  _emscripten_bind_btActionInterface_updateAction_2(
                    self,
                    collisionWorld,
                    deltaTimeStep
                  );
                };
              btActionInterface.prototype["__destroy__"] =
                btActionInterface.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btActionInterface___destroy___0(self);
                };
              function btTriangleMeshShape() {
                throw "cannot construct a btTriangleMeshShape, no constructor in IDL";
              }
              btTriangleMeshShape.prototype = Object.create(
                btConcaveShape.prototype
              );
              btTriangleMeshShape.prototype.constructor = btTriangleMeshShape;
              btTriangleMeshShape.prototype.__class__ = btTriangleMeshShape;
              btTriangleMeshShape.__cache__ = {};
              Module["btTriangleMeshShape"] = btTriangleMeshShape;
              btTriangleMeshShape.prototype["setLocalScaling"] =
                btTriangleMeshShape.prototype.setLocalScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btTriangleMeshShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btTriangleMeshShape.prototype["getLocalScaling"] =
                btTriangleMeshShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btTriangleMeshShape_getLocalScaling_0(
                      self
                    ),
                    btVector3
                  );
                };
              btTriangleMeshShape.prototype["calculateLocalInertia"] =
                btTriangleMeshShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btTriangleMeshShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btTriangleMeshShape.prototype["isCompound"] =
                btTriangleMeshShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btTriangleMeshShape_isCompound_0(
                    self
                  );
                };
              btTriangleMeshShape.prototype["getUserIndex"] =
                btTriangleMeshShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btTriangleMeshShape_getUserIndex_0(
                    self
                  );
                };
              btTriangleMeshShape.prototype["setUserIndex"] =
                btTriangleMeshShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btTriangleMeshShape_setUserIndex_1(
                    self,
                    index
                  );
                };
              btTriangleMeshShape.prototype["getAabb"] =
                btTriangleMeshShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btTriangleMeshShape_getAabb_3(
                    self,
                    t,
                    min,
                    max
                  );
                };
              btTriangleMeshShape.prototype["getLocalBoundingSphere"] =
                btTriangleMeshShape.prototype.getLocalBoundingSphere =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btTriangleMeshShape_getLocalBoundingSphere_0(
                      self
                    );
                  };
              btTriangleMeshShape.prototype["__destroy__"] =
                btTriangleMeshShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btTriangleMeshShape___destroy___0(self);
                };
              function btGhostObject() {
                this.ptr = _emscripten_bind_btGhostObject_btGhostObject_0();
                getCache(btGhostObject)[this.ptr] = this;
              }
              btGhostObject.prototype = Object.create(
                btCollisionObject.prototype
              );
              btGhostObject.prototype.constructor = btGhostObject;
              btGhostObject.prototype.__class__ = btGhostObject;
              btGhostObject.__cache__ = {};
              Module["btGhostObject"] = btGhostObject;
              btGhostObject.prototype["getNumOverlappingObjects"] =
                btGhostObject.prototype.getNumOverlappingObjects = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btGhostObject_getNumOverlappingObjects_0(
                    self
                  );
                };
              btGhostObject.prototype["getOverlappingObject"] =
                btGhostObject.prototype.getOverlappingObject = function (
                  index
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  return wrapPointer(
                    _emscripten_bind_btGhostObject_getOverlappingObject_1(
                      self,
                      index
                    ),
                    btCollisionObject
                  );
                };
              btGhostObject.prototype["setAnisotropicFriction"] =
                btGhostObject.prototype.setAnisotropicFriction = function (
                  anisotropicFriction,
                  frictionMode
                ) {
                  var self = this.ptr;
                  if (
                    anisotropicFriction &&
                    typeof anisotropicFriction === "object"
                  )
                    anisotropicFriction = anisotropicFriction.ptr;
                  if (frictionMode && typeof frictionMode === "object")
                    frictionMode = frictionMode.ptr;
                  _emscripten_bind_btGhostObject_setAnisotropicFriction_2(
                    self,
                    anisotropicFriction,
                    frictionMode
                  );
                };
              btGhostObject.prototype["getCollisionShape"] =
                btGhostObject.prototype.getCollisionShape = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btGhostObject_getCollisionShape_0(self),
                    btCollisionShape
                  );
                };
              btGhostObject.prototype["getActivationState"] =
                btGhostObject.prototype.getActivationState = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btGhostObject_getActivationState_0(
                    self
                  );
                };
              btGhostObject.prototype["setActivationState"] =
                btGhostObject.prototype.setActivationState = function (
                  newState
                ) {
                  var self = this.ptr;
                  if (newState && typeof newState === "object")
                    newState = newState.ptr;
                  _emscripten_bind_btGhostObject_setActivationState_1(
                    self,
                    newState
                  );
                };
              btGhostObject.prototype["forceActivationState"] =
                btGhostObject.prototype.forceActivationState = function (
                  newState
                ) {
                  var self = this.ptr;
                  if (newState && typeof newState === "object")
                    newState = newState.ptr;
                  _emscripten_bind_btGhostObject_forceActivationState_1(
                    self,
                    newState
                  );
                };
              btGhostObject.prototype["activate"] =
                btGhostObject.prototype.activate = function (forceActivation) {
                  var self = this.ptr;
                  if (forceActivation && typeof forceActivation === "object")
                    forceActivation = forceActivation.ptr;
                  if (forceActivation === undefined) {
                    _emscripten_bind_btGhostObject_activate_0(self);
                    return;
                  }
                  _emscripten_bind_btGhostObject_activate_1(
                    self,
                    forceActivation
                  );
                };
              btGhostObject.prototype["isActive"] =
                btGhostObject.prototype.isActive = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btGhostObject_isActive_0(self);
                };
              btGhostObject.prototype["isKinematicObject"] =
                btGhostObject.prototype.isKinematicObject = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btGhostObject_isKinematicObject_0(
                    self
                  );
                };
              btGhostObject.prototype["isStaticObject"] =
                btGhostObject.prototype.isStaticObject = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btGhostObject_isStaticObject_0(
                    self
                  );
                };
              btGhostObject.prototype["isStaticOrKinematicObject"] =
                btGhostObject.prototype.isStaticOrKinematicObject =
                  function () {
                    var self = this.ptr;
                    return !!_emscripten_bind_btGhostObject_isStaticOrKinematicObject_0(
                      self
                    );
                  };
              btGhostObject.prototype["setRestitution"] =
                btGhostObject.prototype.setRestitution = function (r) {
                  var self = this.ptr;
                  if (r && typeof r === "object") r = r.ptr;
                  _emscripten_bind_btGhostObject_setRestitution_1(self, r);
                };
              btGhostObject.prototype["setFriction"] =
                btGhostObject.prototype.setFriction = function (f) {
                  var self = this.ptr;
                  if (f && typeof f === "object") f = f.ptr;
                  _emscripten_bind_btGhostObject_setFriction_1(self, f);
                };
              btGhostObject.prototype["setRollingFriction"] =
                btGhostObject.prototype.setRollingFriction = function (rf) {
                  var self = this.ptr;
                  if (rf && typeof rf === "object") rf = rf.ptr;
                  _emscripten_bind_btGhostObject_setRollingFriction_1(self, rf);
                };
              btGhostObject.prototype["setSpinningFriction"] =
                btGhostObject.prototype.setSpinningFriction = function (sf) {
                  var self = this.ptr;
                  if (sf && typeof sf === "object") sf = sf.ptr;
                  _emscripten_bind_btGhostObject_setSpinningFriction_1(
                    self,
                    sf
                  );
                };
              btGhostObject.prototype["getWorldTransform"] =
                btGhostObject.prototype.getWorldTransform = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btGhostObject_getWorldTransform_0(self),
                    btTransform
                  );
                };
              btGhostObject.prototype["getCollisionFlags"] =
                btGhostObject.prototype.getCollisionFlags = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btGhostObject_getCollisionFlags_0(
                    self
                  );
                };
              btGhostObject.prototype["setCollisionFlags"] =
                btGhostObject.prototype.setCollisionFlags = function (flags) {
                  var self = this.ptr;
                  if (flags && typeof flags === "object") flags = flags.ptr;
                  _emscripten_bind_btGhostObject_setCollisionFlags_1(
                    self,
                    flags
                  );
                };
              btGhostObject.prototype["setWorldTransform"] =
                btGhostObject.prototype.setWorldTransform = function (
                  worldTrans
                ) {
                  var self = this.ptr;
                  if (worldTrans && typeof worldTrans === "object")
                    worldTrans = worldTrans.ptr;
                  _emscripten_bind_btGhostObject_setWorldTransform_1(
                    self,
                    worldTrans
                  );
                };
              btGhostObject.prototype["setCollisionShape"] =
                btGhostObject.prototype.setCollisionShape = function (
                  collisionShape
                ) {
                  var self = this.ptr;
                  if (collisionShape && typeof collisionShape === "object")
                    collisionShape = collisionShape.ptr;
                  _emscripten_bind_btGhostObject_setCollisionShape_1(
                    self,
                    collisionShape
                  );
                };
              btGhostObject.prototype["setCcdMotionThreshold"] =
                btGhostObject.prototype.setCcdMotionThreshold = function (
                  ccdMotionThreshold
                ) {
                  var self = this.ptr;
                  if (
                    ccdMotionThreshold &&
                    typeof ccdMotionThreshold === "object"
                  )
                    ccdMotionThreshold = ccdMotionThreshold.ptr;
                  _emscripten_bind_btGhostObject_setCcdMotionThreshold_1(
                    self,
                    ccdMotionThreshold
                  );
                };
              btGhostObject.prototype["setCcdSweptSphereRadius"] =
                btGhostObject.prototype.setCcdSweptSphereRadius = function (
                  radius
                ) {
                  var self = this.ptr;
                  if (radius && typeof radius === "object") radius = radius.ptr;
                  _emscripten_bind_btGhostObject_setCcdSweptSphereRadius_1(
                    self,
                    radius
                  );
                };
              btGhostObject.prototype["getUserIndex"] =
                btGhostObject.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btGhostObject_getUserIndex_0(self);
                };
              btGhostObject.prototype["setUserIndex"] =
                btGhostObject.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btGhostObject_setUserIndex_1(self, index);
                };
              btGhostObject.prototype["setIgnoreCollisionCheck"] =
                btGhostObject.prototype.setIgnoreCollisionCheck = function (
                  co,
                  ig
                ) {
                  var self = this.ptr;
                  if (co && typeof co === "object") co = co.ptr;
                  if (ig && typeof ig === "object") ig = ig.ptr;
                  _emscripten_bind_btGhostObject_setIgnoreCollisionCheck_2(
                    self,
                    co,
                    ig
                  );
                };
              btGhostObject.prototype["__destroy__"] =
                btGhostObject.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btGhostObject___destroy___0(self);
                };
              function btQuadWord() {
                throw "cannot construct a btQuadWord, no constructor in IDL";
              }
              btQuadWord.prototype = Object.create(WrapperObject.prototype);
              btQuadWord.prototype.constructor = btQuadWord;
              btQuadWord.prototype.__class__ = btQuadWord;
              btQuadWord.__cache__ = {};
              Module["btQuadWord"] = btQuadWord;
              btQuadWord.prototype["x"] = btQuadWord.prototype.x = function () {
                var self = this.ptr;
                return _emscripten_bind_btQuadWord_x_0(self);
              };
              btQuadWord.prototype["y"] = btQuadWord.prototype.y = function () {
                var self = this.ptr;
                return _emscripten_bind_btQuadWord_y_0(self);
              };
              btQuadWord.prototype["z"] = btQuadWord.prototype.z = function () {
                var self = this.ptr;
                return _emscripten_bind_btQuadWord_z_0(self);
              };
              btQuadWord.prototype["w"] = btQuadWord.prototype.w = function () {
                var self = this.ptr;
                return _emscripten_bind_btQuadWord_w_0(self);
              };
              btQuadWord.prototype["setX"] = btQuadWord.prototype.setX =
                function (x) {
                  var self = this.ptr;
                  if (x && typeof x === "object") x = x.ptr;
                  _emscripten_bind_btQuadWord_setX_1(self, x);
                };
              btQuadWord.prototype["setY"] = btQuadWord.prototype.setY =
                function (y) {
                  var self = this.ptr;
                  if (y && typeof y === "object") y = y.ptr;
                  _emscripten_bind_btQuadWord_setY_1(self, y);
                };
              btQuadWord.prototype["setZ"] = btQuadWord.prototype.setZ =
                function (z) {
                  var self = this.ptr;
                  if (z && typeof z === "object") z = z.ptr;
                  _emscripten_bind_btQuadWord_setZ_1(self, z);
                };
              btQuadWord.prototype["setW"] = btQuadWord.prototype.setW =
                function (w) {
                  var self = this.ptr;
                  if (w && typeof w === "object") w = w.ptr;
                  _emscripten_bind_btQuadWord_setW_1(self, w);
                };
              btQuadWord.prototype["__destroy__"] =
                btQuadWord.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btQuadWord___destroy___0(self);
                };
              function btMatrix3x3() {
                throw "cannot construct a btMatrix3x3, no constructor in IDL";
              }
              btMatrix3x3.prototype = Object.create(WrapperObject.prototype);
              btMatrix3x3.prototype.constructor = btMatrix3x3;
              btMatrix3x3.prototype.__class__ = btMatrix3x3;
              btMatrix3x3.__cache__ = {};
              Module["btMatrix3x3"] = btMatrix3x3;
              btMatrix3x3.prototype["getRotation"] =
                btMatrix3x3.prototype.getRotation = function (q) {
                  var self = this.ptr;
                  if (q && typeof q === "object") q = q.ptr;
                  _emscripten_bind_btMatrix3x3_getRotation_1(self, q);
                };
              btMatrix3x3.prototype["__destroy__"] =
                btMatrix3x3.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btMatrix3x3___destroy___0(self);
                };
              function btScalarArray() {
                throw "cannot construct a btScalarArray, no constructor in IDL";
              }
              btScalarArray.prototype = Object.create(WrapperObject.prototype);
              btScalarArray.prototype.constructor = btScalarArray;
              btScalarArray.prototype.__class__ = btScalarArray;
              btScalarArray.__cache__ = {};
              Module["btScalarArray"] = btScalarArray;
              btScalarArray.prototype["size"] = btScalarArray.prototype.size =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btScalarArray_size_0(self);
                };
              btScalarArray.prototype["at"] = btScalarArray.prototype.at =
                function (n) {
                  var self = this.ptr;
                  if (n && typeof n === "object") n = n.ptr;
                  return _emscripten_bind_btScalarArray_at_1(self, n);
                };
              btScalarArray.prototype["clear"] = btScalarArray.prototype.clear =
                function () {
                  var self = this.ptr;
                  _emscripten_bind_btScalarArray_clear_0(self);
                };
              btScalarArray.prototype["__destroy__"] =
                btScalarArray.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btScalarArray___destroy___0(self);
                };
              function btBvhTriangleMeshShape(
                meshInterface,
                useQuantizedAabbCompression,
                buildBvh
              ) {
                if (meshInterface && typeof meshInterface === "object")
                  meshInterface = meshInterface.ptr;
                if (
                  useQuantizedAabbCompression &&
                  typeof useQuantizedAabbCompression === "object"
                )
                  useQuantizedAabbCompression = useQuantizedAabbCompression.ptr;
                if (buildBvh && typeof buildBvh === "object")
                  buildBvh = buildBvh.ptr;
                if (buildBvh === undefined) {
                  this.ptr =
                    _emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2(
                      meshInterface,
                      useQuantizedAabbCompression
                    );
                  getCache(btBvhTriangleMeshShape)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3(
                    meshInterface,
                    useQuantizedAabbCompression,
                    buildBvh
                  );
                getCache(btBvhTriangleMeshShape)[this.ptr] = this;
              }
              btBvhTriangleMeshShape.prototype = Object.create(
                btTriangleMeshShape.prototype
              );
              btBvhTriangleMeshShape.prototype.constructor =
                btBvhTriangleMeshShape;
              btBvhTriangleMeshShape.prototype.__class__ =
                btBvhTriangleMeshShape;
              btBvhTriangleMeshShape.__cache__ = {};
              Module["btBvhTriangleMeshShape"] = btBvhTriangleMeshShape;
              btBvhTriangleMeshShape.prototype["setLocalScaling"] =
                btBvhTriangleMeshShape.prototype.setLocalScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btBvhTriangleMeshShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btBvhTriangleMeshShape.prototype["getLocalScaling"] =
                btBvhTriangleMeshShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btBvhTriangleMeshShape_getLocalScaling_0(
                      self
                    ),
                    btVector3
                  );
                };
              btBvhTriangleMeshShape.prototype["calculateLocalInertia"] =
                btBvhTriangleMeshShape.prototype.calculateLocalInertia =
                  function (mass, inertia) {
                    var self = this.ptr;
                    if (mass && typeof mass === "object") mass = mass.ptr;
                    if (inertia && typeof inertia === "object")
                      inertia = inertia.ptr;
                    _emscripten_bind_btBvhTriangleMeshShape_calculateLocalInertia_2(
                      self,
                      mass,
                      inertia
                    );
                  };
              btBvhTriangleMeshShape.prototype["isCompound"] =
                btBvhTriangleMeshShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btBvhTriangleMeshShape_isCompound_0(
                    self
                  );
                };
              btBvhTriangleMeshShape.prototype["getUserIndex"] =
                btBvhTriangleMeshShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btBvhTriangleMeshShape_getUserIndex_0(
                    self
                  );
                };
              btBvhTriangleMeshShape.prototype["setUserIndex"] =
                btBvhTriangleMeshShape.prototype.setUserIndex = function (
                  index
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btBvhTriangleMeshShape_setUserIndex_1(
                    self,
                    index
                  );
                };
              btBvhTriangleMeshShape.prototype["getAabb"] =
                btBvhTriangleMeshShape.prototype.getAabb = function (
                  t,
                  min,
                  max
                ) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btBvhTriangleMeshShape_getAabb_3(
                    self,
                    t,
                    min,
                    max
                  );
                };
              btBvhTriangleMeshShape.prototype["getLocalBoundingSphere"] =
                btBvhTriangleMeshShape.prototype.getLocalBoundingSphere =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btBvhTriangleMeshShape_getLocalBoundingSphere_0(
                      self
                    );
                  };
              btBvhTriangleMeshShape.prototype["__destroy__"] =
                btBvhTriangleMeshShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btBvhTriangleMeshShape___destroy___0(self);
                };
              function btDbvtBroadphase() {
                this.ptr =
                  _emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0();
                getCache(btDbvtBroadphase)[this.ptr] = this;
              }
              btDbvtBroadphase.prototype = Object.create(
                btBroadphaseInterface.prototype
              );
              btDbvtBroadphase.prototype.constructor = btDbvtBroadphase;
              btDbvtBroadphase.prototype.__class__ = btDbvtBroadphase;
              btDbvtBroadphase.__cache__ = {};
              Module["btDbvtBroadphase"] = btDbvtBroadphase;
              btDbvtBroadphase.prototype["getOverlappingPairCache"] =
                btDbvtBroadphase.prototype.getOverlappingPairCache =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btDbvtBroadphase_getOverlappingPairCache_0(
                        self
                      ),
                      btOverlappingPairCache
                    );
                  };
              btDbvtBroadphase.prototype["__destroy__"] =
                btDbvtBroadphase.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btDbvtBroadphase___destroy___0(self);
                };
              function btIntArray() {
                throw "cannot construct a btIntArray, no constructor in IDL";
              }
              btIntArray.prototype = Object.create(WrapperObject.prototype);
              btIntArray.prototype.constructor = btIntArray;
              btIntArray.prototype.__class__ = btIntArray;
              btIntArray.__cache__ = {};
              Module["btIntArray"] = btIntArray;
              btIntArray.prototype["size"] = btIntArray.prototype.size =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btIntArray_size_0(self);
                };
              btIntArray.prototype["at"] = btIntArray.prototype.at = function (
                n
              ) {
                var self = this.ptr;
                if (n && typeof n === "object") n = n.ptr;
                return _emscripten_bind_btIntArray_at_1(self, n);
              };
              btIntArray.prototype["clear"] = btIntArray.prototype.clear =
                function () {
                  var self = this.ptr;
                  _emscripten_bind_btIntArray_clear_0(self);
                };
              btIntArray.prototype["__destroy__"] =
                btIntArray.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btIntArray___destroy___0(self);
                };
              function btConstCollisionObjectArray() {
                throw "cannot construct a btConstCollisionObjectArray, no constructor in IDL";
              }
              btConstCollisionObjectArray.prototype = Object.create(
                WrapperObject.prototype
              );
              btConstCollisionObjectArray.prototype.constructor =
                btConstCollisionObjectArray;
              btConstCollisionObjectArray.prototype.__class__ =
                btConstCollisionObjectArray;
              btConstCollisionObjectArray.__cache__ = {};
              Module["btConstCollisionObjectArray"] =
                btConstCollisionObjectArray;
              btConstCollisionObjectArray.prototype["size"] =
                btConstCollisionObjectArray.prototype.size = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConstCollisionObjectArray_size_0(
                    self
                  );
                };
              btConstCollisionObjectArray.prototype["at"] =
                btConstCollisionObjectArray.prototype.at = function (n) {
                  var self = this.ptr;
                  if (n && typeof n === "object") n = n.ptr;
                  return wrapPointer(
                    _emscripten_bind_btConstCollisionObjectArray_at_1(self, n),
                    btCollisionObject
                  );
                };
              btConstCollisionObjectArray.prototype["clear"] =
                btConstCollisionObjectArray.prototype.clear = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConstCollisionObjectArray_clear_0(self);
                };
              btConstCollisionObjectArray.prototype["__destroy__"] =
                btConstCollisionObjectArray.prototype.__destroy__ =
                  function () {
                    var self = this.ptr;
                    _emscripten_bind_btConstCollisionObjectArray___destroy___0(
                      self
                    );
                  };
              function btBroadphaseProxy() {
                throw "cannot construct a btBroadphaseProxy, no constructor in IDL";
              }
              btBroadphaseProxy.prototype = Object.create(
                WrapperObject.prototype
              );
              btBroadphaseProxy.prototype.constructor = btBroadphaseProxy;
              btBroadphaseProxy.prototype.__class__ = btBroadphaseProxy;
              btBroadphaseProxy.__cache__ = {};
              Module["btBroadphaseProxy"] = btBroadphaseProxy;
              btBroadphaseProxy.prototype["get_m_collisionFilterGroup"] =
                btBroadphaseProxy.prototype.get_m_collisionFilterGroup =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0(
                      self
                    );
                  };
              btBroadphaseProxy.prototype["set_m_collisionFilterGroup"] =
                btBroadphaseProxy.prototype.set_m_collisionFilterGroup =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                btBroadphaseProxy.prototype,
                "m_collisionFilterGroup",
                {
                  get: btBroadphaseProxy.prototype.get_m_collisionFilterGroup,
                  set: btBroadphaseProxy.prototype.set_m_collisionFilterGroup,
                }
              );
              btBroadphaseProxy.prototype["get_m_collisionFilterMask"] =
                btBroadphaseProxy.prototype.get_m_collisionFilterMask =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0(
                      self
                    );
                  };
              btBroadphaseProxy.prototype["set_m_collisionFilterMask"] =
                btBroadphaseProxy.prototype.set_m_collisionFilterMask =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                btBroadphaseProxy.prototype,
                "m_collisionFilterMask",
                {
                  get: btBroadphaseProxy.prototype.get_m_collisionFilterMask,
                  set: btBroadphaseProxy.prototype.set_m_collisionFilterMask,
                }
              );
              btBroadphaseProxy.prototype["__destroy__"] =
                btBroadphaseProxy.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btBroadphaseProxy___destroy___0(self);
                };
              function btSliderConstraint(
                rbA,
                rbB,
                frameInA,
                frameInB,
                useLinearReferenceFrameA
              ) {
                if (rbA && typeof rbA === "object") rbA = rbA.ptr;
                if (rbB && typeof rbB === "object") rbB = rbB.ptr;
                if (frameInA && typeof frameInA === "object")
                  frameInA = frameInA.ptr;
                if (frameInB && typeof frameInB === "object")
                  frameInB = frameInB.ptr;
                if (
                  useLinearReferenceFrameA &&
                  typeof useLinearReferenceFrameA === "object"
                )
                  useLinearReferenceFrameA = useLinearReferenceFrameA.ptr;
                if (frameInB === undefined) {
                  this.ptr =
                    _emscripten_bind_btSliderConstraint_btSliderConstraint_3(
                      rbA,
                      rbB,
                      frameInA
                    );
                  getCache(btSliderConstraint)[this.ptr] = this;
                  return;
                }
                if (useLinearReferenceFrameA === undefined) {
                  this.ptr =
                    _emscripten_bind_btSliderConstraint_btSliderConstraint_4(
                      rbA,
                      rbB,
                      frameInA,
                      frameInB
                    );
                  getCache(btSliderConstraint)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btSliderConstraint_btSliderConstraint_5(
                    rbA,
                    rbB,
                    frameInA,
                    frameInB,
                    useLinearReferenceFrameA
                  );
                getCache(btSliderConstraint)[this.ptr] = this;
              }
              btSliderConstraint.prototype = Object.create(
                btTypedConstraint.prototype
              );
              btSliderConstraint.prototype.constructor = btSliderConstraint;
              btSliderConstraint.prototype.__class__ = btSliderConstraint;
              btSliderConstraint.__cache__ = {};
              Module["btSliderConstraint"] = btSliderConstraint;
              btSliderConstraint.prototype["setLowerLinLimit"] =
                btSliderConstraint.prototype.setLowerLinLimit = function (
                  lowerLimit
                ) {
                  var self = this.ptr;
                  if (lowerLimit && typeof lowerLimit === "object")
                    lowerLimit = lowerLimit.ptr;
                  _emscripten_bind_btSliderConstraint_setLowerLinLimit_1(
                    self,
                    lowerLimit
                  );
                };
              btSliderConstraint.prototype["setUpperLinLimit"] =
                btSliderConstraint.prototype.setUpperLinLimit = function (
                  upperLimit
                ) {
                  var self = this.ptr;
                  if (upperLimit && typeof upperLimit === "object")
                    upperLimit = upperLimit.ptr;
                  _emscripten_bind_btSliderConstraint_setUpperLinLimit_1(
                    self,
                    upperLimit
                  );
                };
              btSliderConstraint.prototype["setLowerAngLimit"] =
                btSliderConstraint.prototype.setLowerAngLimit = function (
                  lowerAngLimit
                ) {
                  var self = this.ptr;
                  if (lowerAngLimit && typeof lowerAngLimit === "object")
                    lowerAngLimit = lowerAngLimit.ptr;
                  _emscripten_bind_btSliderConstraint_setLowerAngLimit_1(
                    self,
                    lowerAngLimit
                  );
                };
              btSliderConstraint.prototype["setUpperAngLimit"] =
                btSliderConstraint.prototype.setUpperAngLimit = function (
                  upperAngLimit
                ) {
                  var self = this.ptr;
                  if (upperAngLimit && typeof upperAngLimit === "object")
                    upperAngLimit = upperAngLimit.ptr;
                  _emscripten_bind_btSliderConstraint_setUpperAngLimit_1(
                    self,
                    upperAngLimit
                  );
                };
              btSliderConstraint.prototype["enableFeedback"] =
                btSliderConstraint.prototype.enableFeedback = function (
                  needsFeedback
                ) {
                  var self = this.ptr;
                  if (needsFeedback && typeof needsFeedback === "object")
                    needsFeedback = needsFeedback.ptr;
                  _emscripten_bind_btSliderConstraint_enableFeedback_1(
                    self,
                    needsFeedback
                  );
                };
              btSliderConstraint.prototype["getBreakingImpulseThreshold"] =
                btSliderConstraint.prototype.getBreakingImpulseThreshold =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btSliderConstraint_getBreakingImpulseThreshold_0(
                      self
                    );
                  };
              btSliderConstraint.prototype["setBreakingImpulseThreshold"] =
                btSliderConstraint.prototype.setBreakingImpulseThreshold =
                  function (threshold) {
                    var self = this.ptr;
                    if (threshold && typeof threshold === "object")
                      threshold = threshold.ptr;
                    _emscripten_bind_btSliderConstraint_setBreakingImpulseThreshold_1(
                      self,
                      threshold
                    );
                  };
              btSliderConstraint.prototype["getParam"] =
                btSliderConstraint.prototype.getParam = function (num, axis) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  return _emscripten_bind_btSliderConstraint_getParam_2(
                    self,
                    num,
                    axis
                  );
                };
              btSliderConstraint.prototype["setParam"] =
                btSliderConstraint.prototype.setParam = function (
                  num,
                  value,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (value && typeof value === "object") value = value.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_btSliderConstraint_setParam_3(
                    self,
                    num,
                    value,
                    axis
                  );
                };
              btSliderConstraint.prototype["__destroy__"] =
                btSliderConstraint.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btSliderConstraint___destroy___0(self);
                };
              function btIndexedMesh() {
                throw "cannot construct a btIndexedMesh, no constructor in IDL";
              }
              btIndexedMesh.prototype = Object.create(WrapperObject.prototype);
              btIndexedMesh.prototype.constructor = btIndexedMesh;
              btIndexedMesh.prototype.__class__ = btIndexedMesh;
              btIndexedMesh.__cache__ = {};
              Module["btIndexedMesh"] = btIndexedMesh;
              btIndexedMesh.prototype["get_m_numTriangles"] =
                btIndexedMesh.prototype.get_m_numTriangles = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btIndexedMesh_get_m_numTriangles_0(
                    self
                  );
                };
              btIndexedMesh.prototype["set_m_numTriangles"] =
                btIndexedMesh.prototype.set_m_numTriangles = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btIndexedMesh_set_m_numTriangles_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(btIndexedMesh.prototype, "m_numTriangles", {
                get: btIndexedMesh.prototype.get_m_numTriangles,
                set: btIndexedMesh.prototype.set_m_numTriangles,
              });
              btIndexedMesh.prototype["__destroy__"] =
                btIndexedMesh.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btIndexedMesh___destroy___0(self);
                };
              function btRigidBodyConstructionInfo(
                mass,
                motionState,
                collisionShape,
                localInertia
              ) {
                if (mass && typeof mass === "object") mass = mass.ptr;
                if (motionState && typeof motionState === "object")
                  motionState = motionState.ptr;
                if (collisionShape && typeof collisionShape === "object")
                  collisionShape = collisionShape.ptr;
                if (localInertia && typeof localInertia === "object")
                  localInertia = localInertia.ptr;
                if (localInertia === undefined) {
                  this.ptr =
                    _emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3(
                      mass,
                      motionState,
                      collisionShape
                    );
                  getCache(btRigidBodyConstructionInfo)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4(
                    mass,
                    motionState,
                    collisionShape,
                    localInertia
                  );
                getCache(btRigidBodyConstructionInfo)[this.ptr] = this;
              }
              btRigidBodyConstructionInfo.prototype = Object.create(
                WrapperObject.prototype
              );
              btRigidBodyConstructionInfo.prototype.constructor =
                btRigidBodyConstructionInfo;
              btRigidBodyConstructionInfo.prototype.__class__ =
                btRigidBodyConstructionInfo;
              btRigidBodyConstructionInfo.__cache__ = {};
              Module["btRigidBodyConstructionInfo"] =
                btRigidBodyConstructionInfo;
              btRigidBodyConstructionInfo.prototype["get_m_linearDamping"] =
                btRigidBodyConstructionInfo.prototype.get_m_linearDamping =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0(
                      self
                    );
                  };
              btRigidBodyConstructionInfo.prototype["set_m_linearDamping"] =
                btRigidBodyConstructionInfo.prototype.set_m_linearDamping =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_linearDamping",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_linearDamping,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_linearDamping,
                }
              );
              btRigidBodyConstructionInfo.prototype["get_m_angularDamping"] =
                btRigidBodyConstructionInfo.prototype.get_m_angularDamping =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0(
                      self
                    );
                  };
              btRigidBodyConstructionInfo.prototype["set_m_angularDamping"] =
                btRigidBodyConstructionInfo.prototype.set_m_angularDamping =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_angularDamping",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_angularDamping,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_angularDamping,
                }
              );
              btRigidBodyConstructionInfo.prototype["get_m_friction"] =
                btRigidBodyConstructionInfo.prototype.get_m_friction =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0(
                      self
                    );
                  };
              btRigidBodyConstructionInfo.prototype["set_m_friction"] =
                btRigidBodyConstructionInfo.prototype.set_m_friction =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_friction",
                {
                  get: btRigidBodyConstructionInfo.prototype.get_m_friction,
                  set: btRigidBodyConstructionInfo.prototype.set_m_friction,
                }
              );
              btRigidBodyConstructionInfo.prototype["get_m_rollingFriction"] =
                btRigidBodyConstructionInfo.prototype.get_m_rollingFriction =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0(
                      self
                    );
                  };
              btRigidBodyConstructionInfo.prototype["set_m_rollingFriction"] =
                btRigidBodyConstructionInfo.prototype.set_m_rollingFriction =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_rollingFriction",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_rollingFriction,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_rollingFriction,
                }
              );
              btRigidBodyConstructionInfo.prototype["get_m_restitution"] =
                btRigidBodyConstructionInfo.prototype.get_m_restitution =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0(
                      self
                    );
                  };
              btRigidBodyConstructionInfo.prototype["set_m_restitution"] =
                btRigidBodyConstructionInfo.prototype.set_m_restitution =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_restitution",
                {
                  get: btRigidBodyConstructionInfo.prototype.get_m_restitution,
                  set: btRigidBodyConstructionInfo.prototype.set_m_restitution,
                }
              );
              btRigidBodyConstructionInfo.prototype[
                "get_m_linearSleepingThreshold"
              ] = btRigidBodyConstructionInfo.prototype.get_m_linearSleepingThreshold =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0(
                    self
                  );
                };
              btRigidBodyConstructionInfo.prototype[
                "set_m_linearSleepingThreshold"
              ] = btRigidBodyConstructionInfo.prototype.set_m_linearSleepingThreshold =
                function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_linearSleepingThreshold",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_linearSleepingThreshold,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_linearSleepingThreshold,
                }
              );
              btRigidBodyConstructionInfo.prototype[
                "get_m_angularSleepingThreshold"
              ] = btRigidBodyConstructionInfo.prototype.get_m_angularSleepingThreshold =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0(
                    self
                  );
                };
              btRigidBodyConstructionInfo.prototype[
                "set_m_angularSleepingThreshold"
              ] = btRigidBodyConstructionInfo.prototype.set_m_angularSleepingThreshold =
                function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_angularSleepingThreshold",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_angularSleepingThreshold,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_angularSleepingThreshold,
                }
              );
              btRigidBodyConstructionInfo.prototype["get_m_additionalDamping"] =
                btRigidBodyConstructionInfo.prototype.get_m_additionalDamping =
                  function () {
                    var self = this.ptr;
                    return !!_emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDamping_0(
                      self
                    );
                  };
              btRigidBodyConstructionInfo.prototype["set_m_additionalDamping"] =
                btRigidBodyConstructionInfo.prototype.set_m_additionalDamping =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDamping_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_additionalDamping",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_additionalDamping,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_additionalDamping,
                }
              );
              btRigidBodyConstructionInfo.prototype[
                "get_m_additionalDampingFactor"
              ] = btRigidBodyConstructionInfo.prototype.get_m_additionalDampingFactor =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDampingFactor_0(
                    self
                  );
                };
              btRigidBodyConstructionInfo.prototype[
                "set_m_additionalDampingFactor"
              ] = btRigidBodyConstructionInfo.prototype.set_m_additionalDampingFactor =
                function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDampingFactor_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_additionalDampingFactor",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_additionalDampingFactor,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_additionalDampingFactor,
                }
              );
              btRigidBodyConstructionInfo.prototype[
                "get_m_additionalLinearDampingThresholdSqr"
              ] = btRigidBodyConstructionInfo.prototype.get_m_additionalLinearDampingThresholdSqr =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalLinearDampingThresholdSqr_0(
                    self
                  );
                };
              btRigidBodyConstructionInfo.prototype[
                "set_m_additionalLinearDampingThresholdSqr"
              ] = btRigidBodyConstructionInfo.prototype.set_m_additionalLinearDampingThresholdSqr =
                function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalLinearDampingThresholdSqr_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_additionalLinearDampingThresholdSqr",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_additionalLinearDampingThresholdSqr,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_additionalLinearDampingThresholdSqr,
                }
              );
              btRigidBodyConstructionInfo.prototype[
                "get_m_additionalAngularDampingThresholdSqr"
              ] = btRigidBodyConstructionInfo.prototype.get_m_additionalAngularDampingThresholdSqr =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingThresholdSqr_0(
                    self
                  );
                };
              btRigidBodyConstructionInfo.prototype[
                "set_m_additionalAngularDampingThresholdSqr"
              ] = btRigidBodyConstructionInfo.prototype.set_m_additionalAngularDampingThresholdSqr =
                function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingThresholdSqr_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_additionalAngularDampingThresholdSqr",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_additionalAngularDampingThresholdSqr,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_additionalAngularDampingThresholdSqr,
                }
              );
              btRigidBodyConstructionInfo.prototype[
                "get_m_additionalAngularDampingFactor"
              ] = btRigidBodyConstructionInfo.prototype.get_m_additionalAngularDampingFactor =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingFactor_0(
                    self
                  );
                };
              btRigidBodyConstructionInfo.prototype[
                "set_m_additionalAngularDampingFactor"
              ] = btRigidBodyConstructionInfo.prototype.set_m_additionalAngularDampingFactor =
                function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingFactor_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btRigidBodyConstructionInfo.prototype,
                "m_additionalAngularDampingFactor",
                {
                  get: btRigidBodyConstructionInfo.prototype
                    .get_m_additionalAngularDampingFactor,
                  set: btRigidBodyConstructionInfo.prototype
                    .set_m_additionalAngularDampingFactor,
                }
              );
              btRigidBodyConstructionInfo.prototype["__destroy__"] =
                btRigidBodyConstructionInfo.prototype.__destroy__ =
                  function () {
                    var self = this.ptr;
                    _emscripten_bind_btRigidBodyConstructionInfo___destroy___0(
                      self
                    );
                  };
              function btManifoldPoint() {
                throw "cannot construct a btManifoldPoint, no constructor in IDL";
              }
              btManifoldPoint.prototype = Object.create(
                WrapperObject.prototype
              );
              btManifoldPoint.prototype.constructor = btManifoldPoint;
              btManifoldPoint.prototype.__class__ = btManifoldPoint;
              btManifoldPoint.__cache__ = {};
              Module["btManifoldPoint"] = btManifoldPoint;
              btManifoldPoint.prototype["getAppliedImpulse"] =
                btManifoldPoint.prototype.getAppliedImpulse = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btManifoldPoint_getAppliedImpulse_0(
                    self
                  );
                };
              btManifoldPoint.prototype["getDistance"] =
                btManifoldPoint.prototype.getDistance = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btManifoldPoint_getDistance_0(self);
                };
              btManifoldPoint.prototype["getShape0"] =
                btManifoldPoint.prototype.getShape0 = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btManifoldPoint_getShape0_0(self),
                    btCollisionShape
                  );
                };
              btManifoldPoint.prototype["getShape1"] =
                btManifoldPoint.prototype.getShape1 = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btManifoldPoint_getShape1_0(self),
                    btCollisionShape
                  );
                };
              btManifoldPoint.prototype["get_m_localPointA"] =
                btManifoldPoint.prototype.get_m_localPointA = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btManifoldPoint_get_m_localPointA_0(self),
                    btVector3
                  );
                };
              btManifoldPoint.prototype["set_m_localPointA"] =
                btManifoldPoint.prototype.set_m_localPointA = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_localPointA_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btManifoldPoint.prototype,
                "m_localPointA",
                {
                  get: btManifoldPoint.prototype.get_m_localPointA,
                  set: btManifoldPoint.prototype.set_m_localPointA,
                }
              );
              btManifoldPoint.prototype["get_m_localPointB"] =
                btManifoldPoint.prototype.get_m_localPointB = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btManifoldPoint_get_m_localPointB_0(self),
                    btVector3
                  );
                };
              btManifoldPoint.prototype["set_m_localPointB"] =
                btManifoldPoint.prototype.set_m_localPointB = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_localPointB_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btManifoldPoint.prototype,
                "m_localPointB",
                {
                  get: btManifoldPoint.prototype.get_m_localPointB,
                  set: btManifoldPoint.prototype.set_m_localPointB,
                }
              );
              btManifoldPoint.prototype["get_m_positionWorldOnA"] =
                btManifoldPoint.prototype.get_m_positionWorldOnA = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0(
                      self
                    ),
                    btVector3
                  );
                };
              btManifoldPoint.prototype["set_m_positionWorldOnA"] =
                btManifoldPoint.prototype.set_m_positionWorldOnA = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btManifoldPoint.prototype,
                "m_positionWorldOnA",
                {
                  get: btManifoldPoint.prototype.get_m_positionWorldOnA,
                  set: btManifoldPoint.prototype.set_m_positionWorldOnA,
                }
              );
              btManifoldPoint.prototype["get_m_positionWorldOnB"] =
                btManifoldPoint.prototype.get_m_positionWorldOnB = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0(
                      self
                    ),
                    btVector3
                  );
                };
              btManifoldPoint.prototype["set_m_positionWorldOnB"] =
                btManifoldPoint.prototype.set_m_positionWorldOnB = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btManifoldPoint.prototype,
                "m_positionWorldOnB",
                {
                  get: btManifoldPoint.prototype.get_m_positionWorldOnB,
                  set: btManifoldPoint.prototype.set_m_positionWorldOnB,
                }
              );
              btManifoldPoint.prototype["get_m_normalWorldOnB"] =
                btManifoldPoint.prototype.get_m_normalWorldOnB = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0(
                      self
                    ),
                    btVector3
                  );
                };
              btManifoldPoint.prototype["set_m_normalWorldOnB"] =
                btManifoldPoint.prototype.set_m_normalWorldOnB = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btManifoldPoint.prototype,
                "m_normalWorldOnB",
                {
                  get: btManifoldPoint.prototype.get_m_normalWorldOnB,
                  set: btManifoldPoint.prototype.set_m_normalWorldOnB,
                }
              );
              btManifoldPoint.prototype["get_m_distance1"] =
                btManifoldPoint.prototype.get_m_distance1 = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btManifoldPoint_get_m_distance1_0(
                    self
                  );
                };
              btManifoldPoint.prototype["set_m_distance1"] =
                btManifoldPoint.prototype.set_m_distance1 = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_distance1_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(btManifoldPoint.prototype, "m_distance1", {
                get: btManifoldPoint.prototype.get_m_distance1,
                set: btManifoldPoint.prototype.set_m_distance1,
              });
              btManifoldPoint.prototype["get_m_index0"] =
                btManifoldPoint.prototype.get_m_index0 = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btManifoldPoint_get_m_index0_0(self);
                };
              btManifoldPoint.prototype["set_m_index0"] =
                btManifoldPoint.prototype.set_m_index0 = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_index0_1(self, arg0);
                };
              Object.defineProperty(btManifoldPoint.prototype, "m_index0", {
                get: btManifoldPoint.prototype.get_m_index0,
                set: btManifoldPoint.prototype.set_m_index0,
              });
              btManifoldPoint.prototype["get_m_index1"] =
                btManifoldPoint.prototype.get_m_index1 = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btManifoldPoint_get_m_index1_0(self);
                };
              btManifoldPoint.prototype["set_m_index1"] =
                btManifoldPoint.prototype.set_m_index1 = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_index1_1(self, arg0);
                };
              Object.defineProperty(btManifoldPoint.prototype, "m_index1", {
                get: btManifoldPoint.prototype.get_m_index1,
                set: btManifoldPoint.prototype.set_m_index1,
              });
              btManifoldPoint.prototype["get_m_userPersistentData"] =
                btManifoldPoint.prototype.get_m_userPersistentData =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btManifoldPoint_get_m_userPersistentData_0(
                      self
                    );
                  };
              btManifoldPoint.prototype["set_m_userPersistentData"] =
                btManifoldPoint.prototype.set_m_userPersistentData = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_userPersistentData_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btManifoldPoint.prototype,
                "m_userPersistentData",
                {
                  get: btManifoldPoint.prototype.get_m_userPersistentData,
                  set: btManifoldPoint.prototype.set_m_userPersistentData,
                }
              );
              btManifoldPoint.prototype["get_m_userPersistentData0"] =
                btManifoldPoint.prototype.get_m_userPersistentData0 =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btManifoldPoint_get_m_userPersistentData0_0(
                      self
                    );
                  };
              btManifoldPoint.prototype["set_m_userPersistentData0"] =
                btManifoldPoint.prototype.set_m_userPersistentData0 = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_userPersistentData0_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btManifoldPoint.prototype,
                "m_userPersistentData0",
                {
                  get: btManifoldPoint.prototype.get_m_userPersistentData0,
                  set: btManifoldPoint.prototype.set_m_userPersistentData0,
                }
              );
              btManifoldPoint.prototype["get_m_userPersistentData1"] =
                btManifoldPoint.prototype.get_m_userPersistentData1 =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btManifoldPoint_get_m_userPersistentData1_0(
                      self
                    );
                  };
              btManifoldPoint.prototype["set_m_userPersistentData1"] =
                btManifoldPoint.prototype.set_m_userPersistentData1 = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btManifoldPoint_set_m_userPersistentData1_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btManifoldPoint.prototype,
                "m_userPersistentData1",
                {
                  get: btManifoldPoint.prototype.get_m_userPersistentData1,
                  set: btManifoldPoint.prototype.set_m_userPersistentData1,
                }
              );
              btManifoldPoint.prototype["__destroy__"] =
                btManifoldPoint.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btManifoldPoint___destroy___0(self);
                };
              function btSequentialImpulseConstraintSolver() {
                this.ptr =
                  _emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0();
                getCache(btSequentialImpulseConstraintSolver)[this.ptr] = this;
              }
              btSequentialImpulseConstraintSolver.prototype = Object.create(
                WrapperObject.prototype
              );
              btSequentialImpulseConstraintSolver.prototype.constructor =
                btSequentialImpulseConstraintSolver;
              btSequentialImpulseConstraintSolver.prototype.__class__ =
                btSequentialImpulseConstraintSolver;
              btSequentialImpulseConstraintSolver.__cache__ = {};
              Module["btSequentialImpulseConstraintSolver"] =
                btSequentialImpulseConstraintSolver;
              btSequentialImpulseConstraintSolver.prototype["__destroy__"] =
                btSequentialImpulseConstraintSolver.prototype.__destroy__ =
                  function () {
                    var self = this.ptr;
                    _emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0(
                      self
                    );
                  };
              function btDiscreteDynamicsWorld(
                dispatcher,
                pairCache,
                constraintSolver,
                collisionConfiguration
              ) {
                if (dispatcher && typeof dispatcher === "object")
                  dispatcher = dispatcher.ptr;
                if (pairCache && typeof pairCache === "object")
                  pairCache = pairCache.ptr;
                if (constraintSolver && typeof constraintSolver === "object")
                  constraintSolver = constraintSolver.ptr;
                if (
                  collisionConfiguration &&
                  typeof collisionConfiguration === "object"
                )
                  collisionConfiguration = collisionConfiguration.ptr;
                this.ptr =
                  _emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4(
                    dispatcher,
                    pairCache,
                    constraintSolver,
                    collisionConfiguration
                  );
                getCache(btDiscreteDynamicsWorld)[this.ptr] = this;
              }
              btDiscreteDynamicsWorld.prototype = Object.create(
                btDynamicsWorld.prototype
              );
              btDiscreteDynamicsWorld.prototype.constructor =
                btDiscreteDynamicsWorld;
              btDiscreteDynamicsWorld.prototype.__class__ =
                btDiscreteDynamicsWorld;
              btDiscreteDynamicsWorld.__cache__ = {};
              Module["btDiscreteDynamicsWorld"] = btDiscreteDynamicsWorld;
              btDiscreteDynamicsWorld.prototype["setGravity"] =
                btDiscreteDynamicsWorld.prototype.setGravity = function (
                  gravity
                ) {
                  var self = this.ptr;
                  if (gravity && typeof gravity === "object")
                    gravity = gravity.ptr;
                  _emscripten_bind_btDiscreteDynamicsWorld_setGravity_1(
                    self,
                    gravity
                  );
                };
              btDiscreteDynamicsWorld.prototype["getGravity"] =
                btDiscreteDynamicsWorld.prototype.getGravity = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btDiscreteDynamicsWorld_getGravity_0(self),
                    btVector3
                  );
                };
              btDiscreteDynamicsWorld.prototype["addRigidBody"] =
                btDiscreteDynamicsWorld.prototype.addRigidBody = function (
                  body,
                  group,
                  mask
                ) {
                  var self = this.ptr;
                  if (body && typeof body === "object") body = body.ptr;
                  if (group && typeof group === "object") group = group.ptr;
                  if (mask && typeof mask === "object") mask = mask.ptr;
                  if (group === undefined) {
                    _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1(
                      self,
                      body
                    );
                    return;
                  }
                  if (mask === undefined) {
                    _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_2(
                      self,
                      body,
                      group
                    );
                    return;
                  }
                  _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3(
                    self,
                    body,
                    group,
                    mask
                  );
                };
              btDiscreteDynamicsWorld.prototype["removeRigidBody"] =
                btDiscreteDynamicsWorld.prototype.removeRigidBody = function (
                  body
                ) {
                  var self = this.ptr;
                  if (body && typeof body === "object") body = body.ptr;
                  _emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1(
                    self,
                    body
                  );
                };
              btDiscreteDynamicsWorld.prototype["addConstraint"] =
                btDiscreteDynamicsWorld.prototype.addConstraint = function (
                  constraint,
                  disableCollisionsBetweenLinkedBodies
                ) {
                  var self = this.ptr;
                  if (constraint && typeof constraint === "object")
                    constraint = constraint.ptr;
                  if (
                    disableCollisionsBetweenLinkedBodies &&
                    typeof disableCollisionsBetweenLinkedBodies === "object"
                  )
                    disableCollisionsBetweenLinkedBodies =
                      disableCollisionsBetweenLinkedBodies.ptr;
                  if (disableCollisionsBetweenLinkedBodies === undefined) {
                    _emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1(
                      self,
                      constraint
                    );
                    return;
                  }
                  _emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2(
                    self,
                    constraint,
                    disableCollisionsBetweenLinkedBodies
                  );
                };
              btDiscreteDynamicsWorld.prototype["removeConstraint"] =
                btDiscreteDynamicsWorld.prototype.removeConstraint = function (
                  constraint
                ) {
                  var self = this.ptr;
                  if (constraint && typeof constraint === "object")
                    constraint = constraint.ptr;
                  _emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1(
                    self,
                    constraint
                  );
                };
              btDiscreteDynamicsWorld.prototype["stepSimulation"] =
                btDiscreteDynamicsWorld.prototype.stepSimulation = function (
                  timeStep,
                  maxSubSteps,
                  fixedTimeStep
                ) {
                  var self = this.ptr;
                  if (timeStep && typeof timeStep === "object")
                    timeStep = timeStep.ptr;
                  if (maxSubSteps && typeof maxSubSteps === "object")
                    maxSubSteps = maxSubSteps.ptr;
                  if (fixedTimeStep && typeof fixedTimeStep === "object")
                    fixedTimeStep = fixedTimeStep.ptr;
                  if (maxSubSteps === undefined) {
                    return _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1(
                      self,
                      timeStep
                    );
                  }
                  if (fixedTimeStep === undefined) {
                    return _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2(
                      self,
                      timeStep,
                      maxSubSteps
                    );
                  }
                  return _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3(
                    self,
                    timeStep,
                    maxSubSteps,
                    fixedTimeStep
                  );
                };
              btDiscreteDynamicsWorld.prototype["getDispatcher"] =
                btDiscreteDynamicsWorld.prototype.getDispatcher = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btDiscreteDynamicsWorld_getDispatcher_0(
                      self
                    ),
                    btDispatcher
                  );
                };
              btDiscreteDynamicsWorld.prototype["rayTest"] =
                btDiscreteDynamicsWorld.prototype.rayTest = function (
                  rayFromWorld,
                  rayToWorld,
                  resultCallback
                ) {
                  var self = this.ptr;
                  if (rayFromWorld && typeof rayFromWorld === "object")
                    rayFromWorld = rayFromWorld.ptr;
                  if (rayToWorld && typeof rayToWorld === "object")
                    rayToWorld = rayToWorld.ptr;
                  if (resultCallback && typeof resultCallback === "object")
                    resultCallback = resultCallback.ptr;
                  _emscripten_bind_btDiscreteDynamicsWorld_rayTest_3(
                    self,
                    rayFromWorld,
                    rayToWorld,
                    resultCallback
                  );
                };
              btDiscreteDynamicsWorld.prototype["addCollisionObject"] =
                btDiscreteDynamicsWorld.prototype.addCollisionObject =
                  function (
                    collisionObject,
                    collisionFilterGroup,
                    collisionFilterMask
                  ) {
                    var self = this.ptr;
                    if (collisionObject && typeof collisionObject === "object")
                      collisionObject = collisionObject.ptr;
                    if (
                      collisionFilterGroup &&
                      typeof collisionFilterGroup === "object"
                    )
                      collisionFilterGroup = collisionFilterGroup.ptr;
                    if (
                      collisionFilterMask &&
                      typeof collisionFilterMask === "object"
                    )
                      collisionFilterMask = collisionFilterMask.ptr;
                    if (collisionFilterGroup === undefined) {
                      _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1(
                        self,
                        collisionObject
                      );
                      return;
                    }
                    if (collisionFilterMask === undefined) {
                      _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2(
                        self,
                        collisionObject,
                        collisionFilterGroup
                      );
                      return;
                    }
                    _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3(
                      self,
                      collisionObject,
                      collisionFilterGroup,
                      collisionFilterMask
                    );
                  };
              btDiscreteDynamicsWorld.prototype["removeCollisionObject"] =
                btDiscreteDynamicsWorld.prototype.removeCollisionObject =
                  function (collisionObject) {
                    var self = this.ptr;
                    if (collisionObject && typeof collisionObject === "object")
                      collisionObject = collisionObject.ptr;
                    _emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1(
                      self,
                      collisionObject
                    );
                  };
              btDiscreteDynamicsWorld.prototype["addAction"] =
                btDiscreteDynamicsWorld.prototype.addAction = function (
                  action
                ) {
                  var self = this.ptr;
                  if (action && typeof action === "object") action = action.ptr;
                  _emscripten_bind_btDiscreteDynamicsWorld_addAction_1(
                    self,
                    action
                  );
                };
              btDiscreteDynamicsWorld.prototype["removeAction"] =
                btDiscreteDynamicsWorld.prototype.removeAction = function (
                  action
                ) {
                  var self = this.ptr;
                  if (action && typeof action === "object") action = action.ptr;
                  _emscripten_bind_btDiscreteDynamicsWorld_removeAction_1(
                    self,
                    action
                  );
                };
              btDiscreteDynamicsWorld.prototype["getSolverInfo"] =
                btDiscreteDynamicsWorld.prototype.getSolverInfo = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btDiscreteDynamicsWorld_getSolverInfo_0(
                      self
                    ),
                    btContactSolverInfo
                  );
                };
              btDiscreteDynamicsWorld.prototype["__destroy__"] =
                btDiscreteDynamicsWorld.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btDiscreteDynamicsWorld___destroy___0(self);
                };
              function btPoint2PointConstraint(rbA, rbB, pivotInA, pivotInB) {
                if (rbA && typeof rbA === "object") rbA = rbA.ptr;
                if (rbB && typeof rbB === "object") rbB = rbB.ptr;
                if (pivotInA && typeof pivotInA === "object")
                  pivotInA = pivotInA.ptr;
                if (pivotInB && typeof pivotInB === "object")
                  pivotInB = pivotInB.ptr;
                if (pivotInA === undefined) {
                  this.ptr =
                    _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2(
                      rbA,
                      rbB
                    );
                  getCache(btPoint2PointConstraint)[this.ptr] = this;
                  return;
                }
                if (pivotInB === undefined) {
                  this.ptr =
                    _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_3(
                      rbA,
                      rbB,
                      pivotInA
                    );
                  getCache(btPoint2PointConstraint)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4(
                    rbA,
                    rbB,
                    pivotInA,
                    pivotInB
                  );
                getCache(btPoint2PointConstraint)[this.ptr] = this;
              }
              btPoint2PointConstraint.prototype = Object.create(
                btTypedConstraint.prototype
              );
              btPoint2PointConstraint.prototype.constructor =
                btPoint2PointConstraint;
              btPoint2PointConstraint.prototype.__class__ =
                btPoint2PointConstraint;
              btPoint2PointConstraint.__cache__ = {};
              Module["btPoint2PointConstraint"] = btPoint2PointConstraint;
              btPoint2PointConstraint.prototype["setPivotA"] =
                btPoint2PointConstraint.prototype.setPivotA = function (
                  pivotA
                ) {
                  var self = this.ptr;
                  if (pivotA && typeof pivotA === "object") pivotA = pivotA.ptr;
                  _emscripten_bind_btPoint2PointConstraint_setPivotA_1(
                    self,
                    pivotA
                  );
                };
              btPoint2PointConstraint.prototype["setPivotB"] =
                btPoint2PointConstraint.prototype.setPivotB = function (
                  pivotB
                ) {
                  var self = this.ptr;
                  if (pivotB && typeof pivotB === "object") pivotB = pivotB.ptr;
                  _emscripten_bind_btPoint2PointConstraint_setPivotB_1(
                    self,
                    pivotB
                  );
                };
              btPoint2PointConstraint.prototype["getPivotInA"] =
                btPoint2PointConstraint.prototype.getPivotInA = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btPoint2PointConstraint_getPivotInA_0(
                      self
                    ),
                    btVector3
                  );
                };
              btPoint2PointConstraint.prototype["getPivotInB"] =
                btPoint2PointConstraint.prototype.getPivotInB = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btPoint2PointConstraint_getPivotInB_0(
                      self
                    ),
                    btVector3
                  );
                };
              btPoint2PointConstraint.prototype["enableFeedback"] =
                btPoint2PointConstraint.prototype.enableFeedback = function (
                  needsFeedback
                ) {
                  var self = this.ptr;
                  if (needsFeedback && typeof needsFeedback === "object")
                    needsFeedback = needsFeedback.ptr;
                  _emscripten_bind_btPoint2PointConstraint_enableFeedback_1(
                    self,
                    needsFeedback
                  );
                };
              btPoint2PointConstraint.prototype["getBreakingImpulseThreshold"] =
                btPoint2PointConstraint.prototype.getBreakingImpulseThreshold =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0(
                      self
                    );
                  };
              btPoint2PointConstraint.prototype["setBreakingImpulseThreshold"] =
                btPoint2PointConstraint.prototype.setBreakingImpulseThreshold =
                  function (threshold) {
                    var self = this.ptr;
                    if (threshold && typeof threshold === "object")
                      threshold = threshold.ptr;
                    _emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1(
                      self,
                      threshold
                    );
                  };
              btPoint2PointConstraint.prototype["getParam"] =
                btPoint2PointConstraint.prototype.getParam = function (
                  num,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  return _emscripten_bind_btPoint2PointConstraint_getParam_2(
                    self,
                    num,
                    axis
                  );
                };
              btPoint2PointConstraint.prototype["setParam"] =
                btPoint2PointConstraint.prototype.setParam = function (
                  num,
                  value,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (value && typeof value === "object") value = value.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_btPoint2PointConstraint_setParam_3(
                    self,
                    num,
                    value,
                    axis
                  );
                };
              btPoint2PointConstraint.prototype["get_m_setting"] =
                btPoint2PointConstraint.prototype.get_m_setting = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btPoint2PointConstraint_get_m_setting_0(
                      self
                    ),
                    btConstraintSetting
                  );
                };
              btPoint2PointConstraint.prototype["set_m_setting"] =
                btPoint2PointConstraint.prototype.set_m_setting = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btPoint2PointConstraint_set_m_setting_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btPoint2PointConstraint.prototype,
                "m_setting",
                {
                  get: btPoint2PointConstraint.prototype.get_m_setting,
                  set: btPoint2PointConstraint.prototype.set_m_setting,
                }
              );
              btPoint2PointConstraint.prototype["__destroy__"] =
                btPoint2PointConstraint.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btPoint2PointConstraint___destroy___0(self);
                };
              function btConvexTriangleMeshShape(meshInterface, calcAabb) {
                if (meshInterface && typeof meshInterface === "object")
                  meshInterface = meshInterface.ptr;
                if (calcAabb && typeof calcAabb === "object")
                  calcAabb = calcAabb.ptr;
                if (calcAabb === undefined) {
                  this.ptr =
                    _emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1(
                      meshInterface
                    );
                  getCache(btConvexTriangleMeshShape)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2(
                    meshInterface,
                    calcAabb
                  );
                getCache(btConvexTriangleMeshShape)[this.ptr] = this;
              }
              btConvexTriangleMeshShape.prototype = Object.create(
                btConvexShape.prototype
              );
              btConvexTriangleMeshShape.prototype.constructor =
                btConvexTriangleMeshShape;
              btConvexTriangleMeshShape.prototype.__class__ =
                btConvexTriangleMeshShape;
              btConvexTriangleMeshShape.__cache__ = {};
              Module["btConvexTriangleMeshShape"] = btConvexTriangleMeshShape;
              btConvexTriangleMeshShape.prototype["setLocalScaling"] =
                btConvexTriangleMeshShape.prototype.setLocalScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btConvexTriangleMeshShape.prototype["getLocalScaling"] =
                btConvexTriangleMeshShape.prototype.getLocalScaling =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0(
                        self
                      ),
                      btVector3
                    );
                  };
              btConvexTriangleMeshShape.prototype["calculateLocalInertia"] =
                btConvexTriangleMeshShape.prototype.calculateLocalInertia =
                  function (mass, inertia) {
                    var self = this.ptr;
                    if (mass && typeof mass === "object") mass = mass.ptr;
                    if (inertia && typeof inertia === "object")
                      inertia = inertia.ptr;
                    _emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2(
                      self,
                      mass,
                      inertia
                    );
                  };
              btConvexTriangleMeshShape.prototype["setMargin"] =
                btConvexTriangleMeshShape.prototype.setMargin = function (
                  margin
                ) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btConvexTriangleMeshShape_setMargin_1(
                    self,
                    margin
                  );
                };
              btConvexTriangleMeshShape.prototype["getMargin"] =
                btConvexTriangleMeshShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConvexTriangleMeshShape_getMargin_0(
                    self
                  );
                };
              btConvexTriangleMeshShape.prototype["isCompound"] =
                btConvexTriangleMeshShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btConvexTriangleMeshShape_isCompound_0(
                    self
                  );
                };
              btConvexTriangleMeshShape.prototype["getUserIndex"] =
                btConvexTriangleMeshShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConvexTriangleMeshShape_getUserIndex_0(
                    self
                  );
                };
              btConvexTriangleMeshShape.prototype["setUserIndex"] =
                btConvexTriangleMeshShape.prototype.setUserIndex = function (
                  index
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btConvexTriangleMeshShape_setUserIndex_1(
                    self,
                    index
                  );
                };
              btConvexTriangleMeshShape.prototype["getAabb"] =
                btConvexTriangleMeshShape.prototype.getAabb = function (
                  t,
                  min,
                  max
                ) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btConvexTriangleMeshShape_getAabb_3(
                    self,
                    t,
                    min,
                    max
                  );
                };
              btConvexTriangleMeshShape.prototype["getLocalBoundingSphere"] =
                btConvexTriangleMeshShape.prototype.getLocalBoundingSphere =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btConvexTriangleMeshShape_getLocalBoundingSphere_0(
                      self
                    );
                  };
              btConvexTriangleMeshShape.prototype["__destroy__"] =
                btConvexTriangleMeshShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConvexTriangleMeshShape___destroy___0(
                    self
                  );
                };
              function btConeTwistConstraint(rbA, rbB, rbAFrame, rbBFrame) {
                if (rbA && typeof rbA === "object") rbA = rbA.ptr;
                if (rbB && typeof rbB === "object") rbB = rbB.ptr;
                if (rbAFrame && typeof rbAFrame === "object")
                  rbAFrame = rbAFrame.ptr;
                if (rbBFrame && typeof rbBFrame === "object")
                  rbBFrame = rbBFrame.ptr;
                if (rbAFrame === undefined) {
                  this.ptr =
                    _emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_2(
                      rbA,
                      rbB
                    );
                  getCache(btConeTwistConstraint)[this.ptr] = this;
                  return;
                }
                if (rbBFrame === undefined) {
                  this.ptr =
                    _emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_3(
                      rbA,
                      rbB,
                      rbAFrame
                    );
                  getCache(btConeTwistConstraint)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_4(
                    rbA,
                    rbB,
                    rbAFrame,
                    rbBFrame
                  );
                getCache(btConeTwistConstraint)[this.ptr] = this;
              }
              btConeTwistConstraint.prototype = Object.create(
                btTypedConstraint.prototype
              );
              btConeTwistConstraint.prototype.constructor =
                btConeTwistConstraint;
              btConeTwistConstraint.prototype.__class__ = btConeTwistConstraint;
              btConeTwistConstraint.__cache__ = {};
              Module["btConeTwistConstraint"] = btConeTwistConstraint;
              btConeTwistConstraint.prototype["setLimit"] =
                btConeTwistConstraint.prototype.setLimit = function (
                  limitIndex,
                  limitValue
                ) {
                  var self = this.ptr;
                  if (limitIndex && typeof limitIndex === "object")
                    limitIndex = limitIndex.ptr;
                  if (limitValue && typeof limitValue === "object")
                    limitValue = limitValue.ptr;
                  _emscripten_bind_btConeTwistConstraint_setLimit_2(
                    self,
                    limitIndex,
                    limitValue
                  );
                };
              btConeTwistConstraint.prototype["setAngularOnly"] =
                btConeTwistConstraint.prototype.setAngularOnly = function (
                  angularOnly
                ) {
                  var self = this.ptr;
                  if (angularOnly && typeof angularOnly === "object")
                    angularOnly = angularOnly.ptr;
                  _emscripten_bind_btConeTwistConstraint_setAngularOnly_1(
                    self,
                    angularOnly
                  );
                };
              btConeTwistConstraint.prototype["setDamping"] =
                btConeTwistConstraint.prototype.setDamping = function (
                  damping
                ) {
                  var self = this.ptr;
                  if (damping && typeof damping === "object")
                    damping = damping.ptr;
                  _emscripten_bind_btConeTwistConstraint_setDamping_1(
                    self,
                    damping
                  );
                };
              btConeTwistConstraint.prototype["enableMotor"] =
                btConeTwistConstraint.prototype.enableMotor = function (b) {
                  var self = this.ptr;
                  if (b && typeof b === "object") b = b.ptr;
                  _emscripten_bind_btConeTwistConstraint_enableMotor_1(self, b);
                };
              btConeTwistConstraint.prototype["setMaxMotorImpulse"] =
                btConeTwistConstraint.prototype.setMaxMotorImpulse = function (
                  maxMotorImpulse
                ) {
                  var self = this.ptr;
                  if (maxMotorImpulse && typeof maxMotorImpulse === "object")
                    maxMotorImpulse = maxMotorImpulse.ptr;
                  _emscripten_bind_btConeTwistConstraint_setMaxMotorImpulse_1(
                    self,
                    maxMotorImpulse
                  );
                };
              btConeTwistConstraint.prototype["setMaxMotorImpulseNormalized"] =
                btConeTwistConstraint.prototype.setMaxMotorImpulseNormalized =
                  function (maxMotorImpulse) {
                    var self = this.ptr;
                    if (maxMotorImpulse && typeof maxMotorImpulse === "object")
                      maxMotorImpulse = maxMotorImpulse.ptr;
                    _emscripten_bind_btConeTwistConstraint_setMaxMotorImpulseNormalized_1(
                      self,
                      maxMotorImpulse
                    );
                  };
              btConeTwistConstraint.prototype["setMotorTarget"] =
                btConeTwistConstraint.prototype.setMotorTarget = function (q) {
                  var self = this.ptr;
                  if (q && typeof q === "object") q = q.ptr;
                  _emscripten_bind_btConeTwistConstraint_setMotorTarget_1(
                    self,
                    q
                  );
                };
              btConeTwistConstraint.prototype[
                "setMotorTargetInConstraintSpace"
              ] = btConeTwistConstraint.prototype.setMotorTargetInConstraintSpace =
                function (q) {
                  var self = this.ptr;
                  if (q && typeof q === "object") q = q.ptr;
                  _emscripten_bind_btConeTwistConstraint_setMotorTargetInConstraintSpace_1(
                    self,
                    q
                  );
                };
              btConeTwistConstraint.prototype["enableFeedback"] =
                btConeTwistConstraint.prototype.enableFeedback = function (
                  needsFeedback
                ) {
                  var self = this.ptr;
                  if (needsFeedback && typeof needsFeedback === "object")
                    needsFeedback = needsFeedback.ptr;
                  _emscripten_bind_btConeTwistConstraint_enableFeedback_1(
                    self,
                    needsFeedback
                  );
                };
              btConeTwistConstraint.prototype["getBreakingImpulseThreshold"] =
                btConeTwistConstraint.prototype.getBreakingImpulseThreshold =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btConeTwistConstraint_getBreakingImpulseThreshold_0(
                      self
                    );
                  };
              btConeTwistConstraint.prototype["setBreakingImpulseThreshold"] =
                btConeTwistConstraint.prototype.setBreakingImpulseThreshold =
                  function (threshold) {
                    var self = this.ptr;
                    if (threshold && typeof threshold === "object")
                      threshold = threshold.ptr;
                    _emscripten_bind_btConeTwistConstraint_setBreakingImpulseThreshold_1(
                      self,
                      threshold
                    );
                  };
              btConeTwistConstraint.prototype["getParam"] =
                btConeTwistConstraint.prototype.getParam = function (
                  num,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  return _emscripten_bind_btConeTwistConstraint_getParam_2(
                    self,
                    num,
                    axis
                  );
                };
              btConeTwistConstraint.prototype["setParam"] =
                btConeTwistConstraint.prototype.setParam = function (
                  num,
                  value,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (value && typeof value === "object") value = value.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_btConeTwistConstraint_setParam_3(
                    self,
                    num,
                    value,
                    axis
                  );
                };
              btConeTwistConstraint.prototype["__destroy__"] =
                btConeTwistConstraint.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConeTwistConstraint___destroy___0(self);
                };
              function btConeShape(radius, height) {
                if (radius && typeof radius === "object") radius = radius.ptr;
                if (height && typeof height === "object") height = height.ptr;
                this.ptr = _emscripten_bind_btConeShape_btConeShape_2(
                  radius,
                  height
                );
                getCache(btConeShape)[this.ptr] = this;
              }
              btConeShape.prototype = Object.create(
                btConvexInternalShape.prototype
              );
              btConeShape.prototype.constructor = btConeShape;
              btConeShape.prototype.__class__ = btConeShape;
              btConeShape.__cache__ = {};
              Module["btConeShape"] = btConeShape;
              btConeShape.prototype["setRadius"] =
                btConeShape.prototype.setRadius = function (radius) {
                  var self = this.ptr;
                  if (radius && typeof radius === "object") radius = radius.ptr;
                  _emscripten_bind_btConeShape_setRadius_1(self, radius);
                };
              btConeShape.prototype["setHeight"] =
                btConeShape.prototype.setHeight = function (height) {
                  var self = this.ptr;
                  if (height && typeof height === "object") height = height.ptr;
                  _emscripten_bind_btConeShape_setHeight_1(self, height);
                };
              btConeShape.prototype["setConeUpIndex"] =
                btConeShape.prototype.setConeUpIndex = function (upIndex) {
                  var self = this.ptr;
                  if (upIndex && typeof upIndex === "object")
                    upIndex = upIndex.ptr;
                  _emscripten_bind_btConeShape_setConeUpIndex_1(self, upIndex);
                };
              btConeShape.prototype["setLocalScaling"] =
                btConeShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btConeShape_setLocalScaling_1(self, scaling);
                };
              btConeShape.prototype["getLocalScaling"] =
                btConeShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btConeShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btConeShape.prototype["calculateLocalInertia"] =
                btConeShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btConeShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btConeShape.prototype["isCompound"] =
                btConeShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btConeShape_isCompound_0(self);
                };
              btConeShape.prototype["getUserIndex"] =
                btConeShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConeShape_getUserIndex_0(self);
                };
              btConeShape.prototype["setUserIndex"] =
                btConeShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btConeShape_setUserIndex_1(self, index);
                };
              btConeShape.prototype["getAabb"] = btConeShape.prototype.getAabb =
                function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btConeShape_getAabb_3(self, t, min, max);
                };
              btConeShape.prototype["getLocalBoundingSphere"] =
                btConeShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConeShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btConeShape.prototype["getImplicitShapeDimensions"] =
                btConeShape.prototype.getImplicitShapeDimensions = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btConeShape_getImplicitShapeDimensions_0(
                      self
                    ),
                    btVector3
                  );
                };
              btConeShape.prototype["__destroy__"] =
                btConeShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConeShape___destroy___0(self);
                };
              function btHeightfieldTerrainShape(
                heightStickWidth,
                heightStickLength,
                heightfieldData,
                heightScale,
                minHeight,
                maxHeight,
                upAxis,
                hdt,
                flipQuadEdges
              ) {
                if (heightStickWidth && typeof heightStickWidth === "object")
                  heightStickWidth = heightStickWidth.ptr;
                if (heightStickLength && typeof heightStickLength === "object")
                  heightStickLength = heightStickLength.ptr;
                if (heightfieldData && typeof heightfieldData === "object")
                  heightfieldData = heightfieldData.ptr;
                if (heightScale && typeof heightScale === "object")
                  heightScale = heightScale.ptr;
                if (minHeight && typeof minHeight === "object")
                  minHeight = minHeight.ptr;
                if (maxHeight && typeof maxHeight === "object")
                  maxHeight = maxHeight.ptr;
                if (upAxis && typeof upAxis === "object") upAxis = upAxis.ptr;
                if (hdt && typeof hdt === "object") hdt = hdt.ptr;
                if (flipQuadEdges && typeof flipQuadEdges === "object")
                  flipQuadEdges = flipQuadEdges.ptr;
                this.ptr =
                  _emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9(
                    heightStickWidth,
                    heightStickLength,
                    heightfieldData,
                    heightScale,
                    minHeight,
                    maxHeight,
                    upAxis,
                    hdt,
                    flipQuadEdges
                  );
                getCache(btHeightfieldTerrainShape)[this.ptr] = this;
              }
              btHeightfieldTerrainShape.prototype = Object.create(
                btConcaveShape.prototype
              );
              btHeightfieldTerrainShape.prototype.constructor =
                btHeightfieldTerrainShape;
              btHeightfieldTerrainShape.prototype.__class__ =
                btHeightfieldTerrainShape;
              btHeightfieldTerrainShape.__cache__ = {};
              Module["btHeightfieldTerrainShape"] = btHeightfieldTerrainShape;
              btHeightfieldTerrainShape.prototype["setMargin"] =
                btHeightfieldTerrainShape.prototype.setMargin = function (
                  margin
                ) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btHeightfieldTerrainShape_setMargin_1(
                    self,
                    margin
                  );
                };
              btHeightfieldTerrainShape.prototype["getMargin"] =
                btHeightfieldTerrainShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btHeightfieldTerrainShape_getMargin_0(
                    self
                  );
                };
              btHeightfieldTerrainShape.prototype["setLocalScaling"] =
                btHeightfieldTerrainShape.prototype.setLocalScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btHeightfieldTerrainShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btHeightfieldTerrainShape.prototype["getLocalScaling"] =
                btHeightfieldTerrainShape.prototype.getLocalScaling =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btHeightfieldTerrainShape_getLocalScaling_0(
                        self
                      ),
                      btVector3
                    );
                  };
              btHeightfieldTerrainShape.prototype["calculateLocalInertia"] =
                btHeightfieldTerrainShape.prototype.calculateLocalInertia =
                  function (mass, inertia) {
                    var self = this.ptr;
                    if (mass && typeof mass === "object") mass = mass.ptr;
                    if (inertia && typeof inertia === "object")
                      inertia = inertia.ptr;
                    _emscripten_bind_btHeightfieldTerrainShape_calculateLocalInertia_2(
                      self,
                      mass,
                      inertia
                    );
                  };
              btHeightfieldTerrainShape.prototype["isCompound"] =
                btHeightfieldTerrainShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btHeightfieldTerrainShape_isCompound_0(
                    self
                  );
                };
              btHeightfieldTerrainShape.prototype["getUserIndex"] =
                btHeightfieldTerrainShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btHeightfieldTerrainShape_getUserIndex_0(
                    self
                  );
                };
              btHeightfieldTerrainShape.prototype["setUserIndex"] =
                btHeightfieldTerrainShape.prototype.setUserIndex = function (
                  index
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btHeightfieldTerrainShape_setUserIndex_1(
                    self,
                    index
                  );
                };
              btHeightfieldTerrainShape.prototype["getAabb"] =
                btHeightfieldTerrainShape.prototype.getAabb = function (
                  t,
                  min,
                  max
                ) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btHeightfieldTerrainShape_getAabb_3(
                    self,
                    t,
                    min,
                    max
                  );
                };
              btHeightfieldTerrainShape.prototype["getLocalBoundingSphere"] =
                btHeightfieldTerrainShape.prototype.getLocalBoundingSphere =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btHeightfieldTerrainShape_getLocalBoundingSphere_0(
                      self
                    );
                  };
              btHeightfieldTerrainShape.prototype["__destroy__"] =
                btHeightfieldTerrainShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btHeightfieldTerrainShape___destroy___0(
                    self
                  );
                };
              function VoidPtr() {
                throw "cannot construct a VoidPtr, no constructor in IDL";
              }
              VoidPtr.prototype = Object.create(WrapperObject.prototype);
              VoidPtr.prototype.constructor = VoidPtr;
              VoidPtr.prototype.__class__ = VoidPtr;
              VoidPtr.__cache__ = {};
              Module["VoidPtr"] = VoidPtr;
              VoidPtr.prototype["__destroy__"] = VoidPtr.prototype.__destroy__ =
                function () {
                  var self = this.ptr;
                  _emscripten_bind_VoidPtr___destroy___0(self);
                };
              function btDefaultCollisionConfiguration(info) {
                if (info && typeof info === "object") info = info.ptr;
                if (info === undefined) {
                  this.ptr =
                    _emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0();
                  getCache(btDefaultCollisionConfiguration)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1(
                    info
                  );
                getCache(btDefaultCollisionConfiguration)[this.ptr] = this;
              }
              btDefaultCollisionConfiguration.prototype = Object.create(
                WrapperObject.prototype
              );
              btDefaultCollisionConfiguration.prototype.constructor =
                btDefaultCollisionConfiguration;
              btDefaultCollisionConfiguration.prototype.__class__ =
                btDefaultCollisionConfiguration;
              btDefaultCollisionConfiguration.__cache__ = {};
              Module["btDefaultCollisionConfiguration"] =
                btDefaultCollisionConfiguration;
              btDefaultCollisionConfiguration.prototype["__destroy__"] =
                btDefaultCollisionConfiguration.prototype.__destroy__ =
                  function () {
                    var self = this.ptr;
                    _emscripten_bind_btDefaultCollisionConfiguration___destroy___0(
                      self
                    );
                  };
              function btPairCachingGhostObject() {
                this.ptr =
                  _emscripten_bind_btPairCachingGhostObject_btPairCachingGhostObject_0();
                getCache(btPairCachingGhostObject)[this.ptr] = this;
              }
              btPairCachingGhostObject.prototype = Object.create(
                btGhostObject.prototype
              );
              btPairCachingGhostObject.prototype.constructor =
                btPairCachingGhostObject;
              btPairCachingGhostObject.prototype.__class__ =
                btPairCachingGhostObject;
              btPairCachingGhostObject.__cache__ = {};
              Module["btPairCachingGhostObject"] = btPairCachingGhostObject;
              btPairCachingGhostObject.prototype["setAnisotropicFriction"] =
                btPairCachingGhostObject.prototype.setAnisotropicFriction =
                  function (anisotropicFriction, frictionMode) {
                    var self = this.ptr;
                    if (
                      anisotropicFriction &&
                      typeof anisotropicFriction === "object"
                    )
                      anisotropicFriction = anisotropicFriction.ptr;
                    if (frictionMode && typeof frictionMode === "object")
                      frictionMode = frictionMode.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_2(
                      self,
                      anisotropicFriction,
                      frictionMode
                    );
                  };
              btPairCachingGhostObject.prototype["getCollisionShape"] =
                btPairCachingGhostObject.prototype.getCollisionShape =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btPairCachingGhostObject_getCollisionShape_0(
                        self
                      ),
                      btCollisionShape
                    );
                  };
              btPairCachingGhostObject.prototype["getActivationState"] =
                btPairCachingGhostObject.prototype.getActivationState =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btPairCachingGhostObject_getActivationState_0(
                      self
                    );
                  };
              btPairCachingGhostObject.prototype["setActivationState"] =
                btPairCachingGhostObject.prototype.setActivationState =
                  function (newState) {
                    var self = this.ptr;
                    if (newState && typeof newState === "object")
                      newState = newState.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setActivationState_1(
                      self,
                      newState
                    );
                  };
              btPairCachingGhostObject.prototype["forceActivationState"] =
                btPairCachingGhostObject.prototype.forceActivationState =
                  function (newState) {
                    var self = this.ptr;
                    if (newState && typeof newState === "object")
                      newState = newState.ptr;
                    _emscripten_bind_btPairCachingGhostObject_forceActivationState_1(
                      self,
                      newState
                    );
                  };
              btPairCachingGhostObject.prototype["activate"] =
                btPairCachingGhostObject.prototype.activate = function (
                  forceActivation
                ) {
                  var self = this.ptr;
                  if (forceActivation && typeof forceActivation === "object")
                    forceActivation = forceActivation.ptr;
                  if (forceActivation === undefined) {
                    _emscripten_bind_btPairCachingGhostObject_activate_0(self);
                    return;
                  }
                  _emscripten_bind_btPairCachingGhostObject_activate_1(
                    self,
                    forceActivation
                  );
                };
              btPairCachingGhostObject.prototype["isActive"] =
                btPairCachingGhostObject.prototype.isActive = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btPairCachingGhostObject_isActive_0(
                    self
                  );
                };
              btPairCachingGhostObject.prototype["isKinematicObject"] =
                btPairCachingGhostObject.prototype.isKinematicObject =
                  function () {
                    var self = this.ptr;
                    return !!_emscripten_bind_btPairCachingGhostObject_isKinematicObject_0(
                      self
                    );
                  };
              btPairCachingGhostObject.prototype["isStaticObject"] =
                btPairCachingGhostObject.prototype.isStaticObject =
                  function () {
                    var self = this.ptr;
                    return !!_emscripten_bind_btPairCachingGhostObject_isStaticObject_0(
                      self
                    );
                  };
              btPairCachingGhostObject.prototype["isStaticOrKinematicObject"] =
                btPairCachingGhostObject.prototype.isStaticOrKinematicObject =
                  function () {
                    var self = this.ptr;
                    return !!_emscripten_bind_btPairCachingGhostObject_isStaticOrKinematicObject_0(
                      self
                    );
                  };
              btPairCachingGhostObject.prototype["setRestitution"] =
                btPairCachingGhostObject.prototype.setRestitution = function (
                  r
                ) {
                  var self = this.ptr;
                  if (r && typeof r === "object") r = r.ptr;
                  _emscripten_bind_btPairCachingGhostObject_setRestitution_1(
                    self,
                    r
                  );
                };
              btPairCachingGhostObject.prototype["setFriction"] =
                btPairCachingGhostObject.prototype.setFriction = function (f) {
                  var self = this.ptr;
                  if (f && typeof f === "object") f = f.ptr;
                  _emscripten_bind_btPairCachingGhostObject_setFriction_1(
                    self,
                    f
                  );
                };
              btPairCachingGhostObject.prototype["setRollingFriction"] =
                btPairCachingGhostObject.prototype.setRollingFriction =
                  function (rf) {
                    var self = this.ptr;
                    if (rf && typeof rf === "object") rf = rf.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setRollingFriction_1(
                      self,
                      rf
                    );
                  };
              btPairCachingGhostObject.prototype["setSpinningFriction"] =
                btPairCachingGhostObject.prototype.setSpinningFriction =
                  function (sf) {
                    var self = this.ptr;
                    if (sf && typeof sf === "object") sf = sf.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setSpinningFriction_1(
                      self,
                      sf
                    );
                  };
              btPairCachingGhostObject.prototype["getWorldTransform"] =
                btPairCachingGhostObject.prototype.getWorldTransform =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btPairCachingGhostObject_getWorldTransform_0(
                        self
                      ),
                      btTransform
                    );
                  };
              btPairCachingGhostObject.prototype["getCollisionFlags"] =
                btPairCachingGhostObject.prototype.getCollisionFlags =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btPairCachingGhostObject_getCollisionFlags_0(
                      self
                    );
                  };
              btPairCachingGhostObject.prototype["setCollisionFlags"] =
                btPairCachingGhostObject.prototype.setCollisionFlags =
                  function (flags) {
                    var self = this.ptr;
                    if (flags && typeof flags === "object") flags = flags.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setCollisionFlags_1(
                      self,
                      flags
                    );
                  };
              btPairCachingGhostObject.prototype["setWorldTransform"] =
                btPairCachingGhostObject.prototype.setWorldTransform =
                  function (worldTrans) {
                    var self = this.ptr;
                    if (worldTrans && typeof worldTrans === "object")
                      worldTrans = worldTrans.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setWorldTransform_1(
                      self,
                      worldTrans
                    );
                  };
              btPairCachingGhostObject.prototype["setCollisionShape"] =
                btPairCachingGhostObject.prototype.setCollisionShape =
                  function (collisionShape) {
                    var self = this.ptr;
                    if (collisionShape && typeof collisionShape === "object")
                      collisionShape = collisionShape.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setCollisionShape_1(
                      self,
                      collisionShape
                    );
                  };
              btPairCachingGhostObject.prototype["setCcdMotionThreshold"] =
                btPairCachingGhostObject.prototype.setCcdMotionThreshold =
                  function (ccdMotionThreshold) {
                    var self = this.ptr;
                    if (
                      ccdMotionThreshold &&
                      typeof ccdMotionThreshold === "object"
                    )
                      ccdMotionThreshold = ccdMotionThreshold.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setCcdMotionThreshold_1(
                      self,
                      ccdMotionThreshold
                    );
                  };
              btPairCachingGhostObject.prototype["setCcdSweptSphereRadius"] =
                btPairCachingGhostObject.prototype.setCcdSweptSphereRadius =
                  function (radius) {
                    var self = this.ptr;
                    if (radius && typeof radius === "object")
                      radius = radius.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setCcdSweptSphereRadius_1(
                      self,
                      radius
                    );
                  };
              btPairCachingGhostObject.prototype["getUserIndex"] =
                btPairCachingGhostObject.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btPairCachingGhostObject_getUserIndex_0(
                    self
                  );
                };
              btPairCachingGhostObject.prototype["setUserIndex"] =
                btPairCachingGhostObject.prototype.setUserIndex = function (
                  index
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btPairCachingGhostObject_setUserIndex_1(
                    self,
                    index
                  );
                };
              btPairCachingGhostObject.prototype["setIgnoreCollisionCheck"] =
                btPairCachingGhostObject.prototype.setIgnoreCollisionCheck =
                  function (co, ig) {
                    var self = this.ptr;
                    if (co && typeof co === "object") co = co.ptr;
                    if (ig && typeof ig === "object") ig = ig.ptr;
                    _emscripten_bind_btPairCachingGhostObject_setIgnoreCollisionCheck_2(
                      self,
                      co,
                      ig
                    );
                  };
              btPairCachingGhostObject.prototype["getNumOverlappingObjects"] =
                btPairCachingGhostObject.prototype.getNumOverlappingObjects =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btPairCachingGhostObject_getNumOverlappingObjects_0(
                      self
                    );
                  };
              btPairCachingGhostObject.prototype["getOverlappingObject"] =
                btPairCachingGhostObject.prototype.getOverlappingObject =
                  function (index) {
                    var self = this.ptr;
                    if (index && typeof index === "object") index = index.ptr;
                    return wrapPointer(
                      _emscripten_bind_btPairCachingGhostObject_getOverlappingObject_1(
                        self,
                        index
                      ),
                      btCollisionObject
                    );
                  };
              btPairCachingGhostObject.prototype["__destroy__"] =
                btPairCachingGhostObject.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btPairCachingGhostObject___destroy___0(self);
                };
              function btOverlappingPairCallback() {
                throw "cannot construct a btOverlappingPairCallback, no constructor in IDL";
              }
              btOverlappingPairCallback.prototype = Object.create(
                WrapperObject.prototype
              );
              btOverlappingPairCallback.prototype.constructor =
                btOverlappingPairCallback;
              btOverlappingPairCallback.prototype.__class__ =
                btOverlappingPairCallback;
              btOverlappingPairCallback.__cache__ = {};
              Module["btOverlappingPairCallback"] = btOverlappingPairCallback;
              btOverlappingPairCallback.prototype["__destroy__"] =
                btOverlappingPairCallback.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btOverlappingPairCallback___destroy___0(
                    self
                  );
                };
              function btGeneric6DofSpringConstraint(
                rbA,
                rbB,
                frameInA,
                frameInB,
                useLinearFrameReferenceFrameA
              ) {
                if (rbA && typeof rbA === "object") rbA = rbA.ptr;
                if (rbB && typeof rbB === "object") rbB = rbB.ptr;
                if (frameInA && typeof frameInA === "object")
                  frameInA = frameInA.ptr;
                if (frameInB && typeof frameInB === "object")
                  frameInB = frameInB.ptr;
                if (
                  useLinearFrameReferenceFrameA &&
                  typeof useLinearFrameReferenceFrameA === "object"
                )
                  useLinearFrameReferenceFrameA =
                    useLinearFrameReferenceFrameA.ptr;
                if (frameInB === undefined) {
                  this.ptr =
                    _emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_3(
                      rbA,
                      rbB,
                      frameInA
                    );
                  getCache(btGeneric6DofSpringConstraint)[this.ptr] = this;
                  return;
                }
                if (useLinearFrameReferenceFrameA === undefined) {
                  this.ptr =
                    _emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_4(
                      rbA,
                      rbB,
                      frameInA,
                      frameInB
                    );
                  getCache(btGeneric6DofSpringConstraint)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_5(
                    rbA,
                    rbB,
                    frameInA,
                    frameInB,
                    useLinearFrameReferenceFrameA
                  );
                getCache(btGeneric6DofSpringConstraint)[this.ptr] = this;
              }
              btGeneric6DofSpringConstraint.prototype = Object.create(
                btGeneric6DofConstraint.prototype
              );
              btGeneric6DofSpringConstraint.prototype.constructor =
                btGeneric6DofSpringConstraint;
              btGeneric6DofSpringConstraint.prototype.__class__ =
                btGeneric6DofSpringConstraint;
              btGeneric6DofSpringConstraint.__cache__ = {};
              Module["btGeneric6DofSpringConstraint"] =
                btGeneric6DofSpringConstraint;
              btGeneric6DofSpringConstraint.prototype["enableSpring"] =
                btGeneric6DofSpringConstraint.prototype.enableSpring =
                  function (index, onOff) {
                    var self = this.ptr;
                    if (index && typeof index === "object") index = index.ptr;
                    if (onOff && typeof onOff === "object") onOff = onOff.ptr;
                    _emscripten_bind_btGeneric6DofSpringConstraint_enableSpring_2(
                      self,
                      index,
                      onOff
                    );
                  };
              btGeneric6DofSpringConstraint.prototype["setStiffness"] =
                btGeneric6DofSpringConstraint.prototype.setStiffness =
                  function (index, stiffness) {
                    var self = this.ptr;
                    if (index && typeof index === "object") index = index.ptr;
                    if (stiffness && typeof stiffness === "object")
                      stiffness = stiffness.ptr;
                    _emscripten_bind_btGeneric6DofSpringConstraint_setStiffness_2(
                      self,
                      index,
                      stiffness
                    );
                  };
              btGeneric6DofSpringConstraint.prototype["setDamping"] =
                btGeneric6DofSpringConstraint.prototype.setDamping = function (
                  index,
                  damping
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  if (damping && typeof damping === "object")
                    damping = damping.ptr;
                  _emscripten_bind_btGeneric6DofSpringConstraint_setDamping_2(
                    self,
                    index,
                    damping
                  );
                };
              btGeneric6DofSpringConstraint.prototype["setEquilibriumPoint"] =
                btGeneric6DofSpringConstraint.prototype.setEquilibriumPoint =
                  function (index, val) {
                    var self = this.ptr;
                    if (index && typeof index === "object") index = index.ptr;
                    if (val && typeof val === "object") val = val.ptr;
                    if (index === undefined) {
                      _emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_0(
                        self
                      );
                      return;
                    }
                    if (val === undefined) {
                      _emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_1(
                        self,
                        index
                      );
                      return;
                    }
                    _emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_2(
                      self,
                      index,
                      val
                    );
                  };
              btGeneric6DofSpringConstraint.prototype["setLinearLowerLimit"] =
                btGeneric6DofSpringConstraint.prototype.setLinearLowerLimit =
                  function (linearLower) {
                    var self = this.ptr;
                    if (linearLower && typeof linearLower === "object")
                      linearLower = linearLower.ptr;
                    _emscripten_bind_btGeneric6DofSpringConstraint_setLinearLowerLimit_1(
                      self,
                      linearLower
                    );
                  };
              btGeneric6DofSpringConstraint.prototype["setLinearUpperLimit"] =
                btGeneric6DofSpringConstraint.prototype.setLinearUpperLimit =
                  function (linearUpper) {
                    var self = this.ptr;
                    if (linearUpper && typeof linearUpper === "object")
                      linearUpper = linearUpper.ptr;
                    _emscripten_bind_btGeneric6DofSpringConstraint_setLinearUpperLimit_1(
                      self,
                      linearUpper
                    );
                  };
              btGeneric6DofSpringConstraint.prototype["setAngularLowerLimit"] =
                btGeneric6DofSpringConstraint.prototype.setAngularLowerLimit =
                  function (angularLower) {
                    var self = this.ptr;
                    if (angularLower && typeof angularLower === "object")
                      angularLower = angularLower.ptr;
                    _emscripten_bind_btGeneric6DofSpringConstraint_setAngularLowerLimit_1(
                      self,
                      angularLower
                    );
                  };
              btGeneric6DofSpringConstraint.prototype["setAngularUpperLimit"] =
                btGeneric6DofSpringConstraint.prototype.setAngularUpperLimit =
                  function (angularUpper) {
                    var self = this.ptr;
                    if (angularUpper && typeof angularUpper === "object")
                      angularUpper = angularUpper.ptr;
                    _emscripten_bind_btGeneric6DofSpringConstraint_setAngularUpperLimit_1(
                      self,
                      angularUpper
                    );
                  };
              btGeneric6DofSpringConstraint.prototype["getFrameOffsetA"] =
                btGeneric6DofSpringConstraint.prototype.getFrameOffsetA =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetA_0(
                        self
                      ),
                      btTransform
                    );
                  };
              btGeneric6DofSpringConstraint.prototype["enableFeedback"] =
                btGeneric6DofSpringConstraint.prototype.enableFeedback =
                  function (needsFeedback) {
                    var self = this.ptr;
                    if (needsFeedback && typeof needsFeedback === "object")
                      needsFeedback = needsFeedback.ptr;
                    _emscripten_bind_btGeneric6DofSpringConstraint_enableFeedback_1(
                      self,
                      needsFeedback
                    );
                  };
              btGeneric6DofSpringConstraint.prototype[
                "getBreakingImpulseThreshold"
              ] = btGeneric6DofSpringConstraint.prototype.getBreakingImpulseThreshold =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btGeneric6DofSpringConstraint_getBreakingImpulseThreshold_0(
                    self
                  );
                };
              btGeneric6DofSpringConstraint.prototype[
                "setBreakingImpulseThreshold"
              ] = btGeneric6DofSpringConstraint.prototype.setBreakingImpulseThreshold =
                function (threshold) {
                  var self = this.ptr;
                  if (threshold && typeof threshold === "object")
                    threshold = threshold.ptr;
                  _emscripten_bind_btGeneric6DofSpringConstraint_setBreakingImpulseThreshold_1(
                    self,
                    threshold
                  );
                };
              btGeneric6DofSpringConstraint.prototype["getParam"] =
                btGeneric6DofSpringConstraint.prototype.getParam = function (
                  num,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  return _emscripten_bind_btGeneric6DofSpringConstraint_getParam_2(
                    self,
                    num,
                    axis
                  );
                };
              btGeneric6DofSpringConstraint.prototype["setParam"] =
                btGeneric6DofSpringConstraint.prototype.setParam = function (
                  num,
                  value,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (value && typeof value === "object") value = value.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_btGeneric6DofSpringConstraint_setParam_3(
                    self,
                    num,
                    value,
                    axis
                  );
                };
              btGeneric6DofSpringConstraint.prototype["__destroy__"] =
                btGeneric6DofSpringConstraint.prototype.__destroy__ =
                  function () {
                    var self = this.ptr;
                    _emscripten_bind_btGeneric6DofSpringConstraint___destroy___0(
                      self
                    );
                  };
              function btTriangleMesh(use32bitIndices, use4componentVertices) {
                if (use32bitIndices && typeof use32bitIndices === "object")
                  use32bitIndices = use32bitIndices.ptr;
                if (
                  use4componentVertices &&
                  typeof use4componentVertices === "object"
                )
                  use4componentVertices = use4componentVertices.ptr;
                if (use32bitIndices === undefined) {
                  this.ptr = _emscripten_bind_btTriangleMesh_btTriangleMesh_0();
                  getCache(btTriangleMesh)[this.ptr] = this;
                  return;
                }
                if (use4componentVertices === undefined) {
                  this.ptr =
                    _emscripten_bind_btTriangleMesh_btTriangleMesh_1(
                      use32bitIndices
                    );
                  getCache(btTriangleMesh)[this.ptr] = this;
                  return;
                }
                this.ptr = _emscripten_bind_btTriangleMesh_btTriangleMesh_2(
                  use32bitIndices,
                  use4componentVertices
                );
                getCache(btTriangleMesh)[this.ptr] = this;
              }
              btTriangleMesh.prototype = Object.create(
                btStridingMeshInterface.prototype
              );
              btTriangleMesh.prototype.constructor = btTriangleMesh;
              btTriangleMesh.prototype.__class__ = btTriangleMesh;
              btTriangleMesh.__cache__ = {};
              Module["btTriangleMesh"] = btTriangleMesh;
              btTriangleMesh.prototype["addTriangle"] =
                btTriangleMesh.prototype.addTriangle = function (
                  vertex0,
                  vertex1,
                  vertex2,
                  removeDuplicateVertices
                ) {
                  var self = this.ptr;
                  if (vertex0 && typeof vertex0 === "object")
                    vertex0 = vertex0.ptr;
                  if (vertex1 && typeof vertex1 === "object")
                    vertex1 = vertex1.ptr;
                  if (vertex2 && typeof vertex2 === "object")
                    vertex2 = vertex2.ptr;
                  if (
                    removeDuplicateVertices &&
                    typeof removeDuplicateVertices === "object"
                  )
                    removeDuplicateVertices = removeDuplicateVertices.ptr;
                  if (removeDuplicateVertices === undefined) {
                    _emscripten_bind_btTriangleMesh_addTriangle_3(
                      self,
                      vertex0,
                      vertex1,
                      vertex2
                    );
                    return;
                  }
                  _emscripten_bind_btTriangleMesh_addTriangle_4(
                    self,
                    vertex0,
                    vertex1,
                    vertex2,
                    removeDuplicateVertices
                  );
                };
              btTriangleMesh.prototype["addTriangleIndices"] =
                btTriangleMesh.prototype.addTriangleIndices = function (
                  index1,
                  index2,
                  index3
                ) {
                  var self = this.ptr;
                  if (index1 && typeof index1 === "object") index1 = index1.ptr;
                  if (index2 && typeof index2 === "object") index2 = index2.ptr;
                  if (index3 && typeof index3 === "object") index3 = index3.ptr;
                  _emscripten_bind_btTriangleMesh_addTriangleIndices_3(
                    self,
                    index1,
                    index2,
                    index3
                  );
                };
              btTriangleMesh.prototype["getIndexedMeshArray"] =
                btTriangleMesh.prototype.getIndexedMeshArray = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btTriangleMesh_getIndexedMeshArray_0(self),
                    btIndexedMeshArray
                  );
                };
              btTriangleMesh.prototype["setScaling"] =
                btTriangleMesh.prototype.setScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btTriangleMesh_setScaling_1(self, scaling);
                };
              btTriangleMesh.prototype["__destroy__"] =
                btTriangleMesh.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btTriangleMesh___destroy___0(self);
                };
              function btCollisionConfiguration() {
                throw "cannot construct a btCollisionConfiguration, no constructor in IDL";
              }
              btCollisionConfiguration.prototype = Object.create(
                WrapperObject.prototype
              );
              btCollisionConfiguration.prototype.constructor =
                btCollisionConfiguration;
              btCollisionConfiguration.prototype.__class__ =
                btCollisionConfiguration;
              btCollisionConfiguration.__cache__ = {};
              Module["btCollisionConfiguration"] = btCollisionConfiguration;
              btCollisionConfiguration.prototype["__destroy__"] =
                btCollisionConfiguration.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btCollisionConfiguration___destroy___0(self);
                };
              function btPersistentManifold() {
                this.ptr =
                  _emscripten_bind_btPersistentManifold_btPersistentManifold_0();
                getCache(btPersistentManifold)[this.ptr] = this;
              }
              btPersistentManifold.prototype = Object.create(
                WrapperObject.prototype
              );
              btPersistentManifold.prototype.constructor = btPersistentManifold;
              btPersistentManifold.prototype.__class__ = btPersistentManifold;
              btPersistentManifold.__cache__ = {};
              Module["btPersistentManifold"] = btPersistentManifold;
              btPersistentManifold.prototype["getBody0"] =
                btPersistentManifold.prototype.getBody0 = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btPersistentManifold_getBody0_0(self),
                    btCollisionObject
                  );
                };
              btPersistentManifold.prototype["getBody1"] =
                btPersistentManifold.prototype.getBody1 = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btPersistentManifold_getBody1_0(self),
                    btCollisionObject
                  );
                };
              btPersistentManifold.prototype["getNumContacts"] =
                btPersistentManifold.prototype.getNumContacts = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btPersistentManifold_getNumContacts_0(
                    self
                  );
                };
              btPersistentManifold.prototype["getContactPoint"] =
                btPersistentManifold.prototype.getContactPoint = function (
                  index
                ) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  return wrapPointer(
                    _emscripten_bind_btPersistentManifold_getContactPoint_1(
                      self,
                      index
                    ),
                    btManifoldPoint
                  );
                };
              btPersistentManifold.prototype["__destroy__"] =
                btPersistentManifold.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btPersistentManifold___destroy___0(self);
                };
              function btBoxShape(boxHalfExtents) {
                if (boxHalfExtents && typeof boxHalfExtents === "object")
                  boxHalfExtents = boxHalfExtents.ptr;
                this.ptr =
                  _emscripten_bind_btBoxShape_btBoxShape_1(boxHalfExtents);
                getCache(btBoxShape)[this.ptr] = this;
              }
              btBoxShape.prototype = Object.create(
                btConvexInternalShape.prototype
              );
              btBoxShape.prototype.constructor = btBoxShape;
              btBoxShape.prototype.__class__ = btBoxShape;
              btBoxShape.__cache__ = {};
              Module["btBoxShape"] = btBoxShape;
              btBoxShape.prototype["setMargin"] =
                btBoxShape.prototype.setMargin = function (margin) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btBoxShape_setMargin_1(self, margin);
                };
              btBoxShape.prototype["getMargin"] =
                btBoxShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btBoxShape_getMargin_0(self);
                };
              btBoxShape.prototype["setUnscaledHalfExtents"] =
                btBoxShape.prototype.setUnscaledHalfExtents = function (
                  boxHalfExtents
                ) {
                  var self = this.ptr;
                  if (boxHalfExtents && typeof boxHalfExtents === "object")
                    boxHalfExtents = boxHalfExtents.ptr;
                  _emscripten_bind_btBoxShape_setUnscaledHalfExtents_1(
                    self,
                    boxHalfExtents
                  );
                };
              btBoxShape.prototype["setLocalScaling"] =
                btBoxShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btBoxShape_setLocalScaling_1(self, scaling);
                };
              btBoxShape.prototype["getLocalScaling"] =
                btBoxShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btBoxShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btBoxShape.prototype["calculateLocalInertia"] =
                btBoxShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btBoxShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btBoxShape.prototype["isCompound"] =
                btBoxShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btBoxShape_isCompound_0(self);
                };
              btBoxShape.prototype["getUserIndex"] =
                btBoxShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btBoxShape_getUserIndex_0(self);
                };
              btBoxShape.prototype["setUserIndex"] =
                btBoxShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btBoxShape_setUserIndex_1(self, index);
                };
              btBoxShape.prototype["getAabb"] = btBoxShape.prototype.getAabb =
                function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btBoxShape_getAabb_3(self, t, min, max);
                };
              btBoxShape.prototype["getLocalBoundingSphere"] =
                btBoxShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btBoxShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btBoxShape.prototype["getImplicitShapeDimensions"] =
                btBoxShape.prototype.getImplicitShapeDimensions = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btBoxShape_getImplicitShapeDimensions_0(
                      self
                    ),
                    btVector3
                  );
                };
              btBoxShape.prototype["__destroy__"] =
                btBoxShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btBoxShape___destroy___0(self);
                };
              function btCapsuleShape(radius, height) {
                if (radius && typeof radius === "object") radius = radius.ptr;
                if (height && typeof height === "object") height = height.ptr;
                this.ptr = _emscripten_bind_btCapsuleShape_btCapsuleShape_2(
                  radius,
                  height
                );
                getCache(btCapsuleShape)[this.ptr] = this;
              }
              btCapsuleShape.prototype = Object.create(
                btConvexInternalShape.prototype
              );
              btCapsuleShape.prototype.constructor = btCapsuleShape;
              btCapsuleShape.prototype.__class__ = btCapsuleShape;
              btCapsuleShape.__cache__ = {};
              Module["btCapsuleShape"] = btCapsuleShape;
              btCapsuleShape.prototype["setMargin"] =
                btCapsuleShape.prototype.setMargin = function (margin) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btCapsuleShape_setMargin_1(self, margin);
                };
              btCapsuleShape.prototype["getMargin"] =
                btCapsuleShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCapsuleShape_getMargin_0(self);
                };
              btCapsuleShape.prototype["updateProp"] =
                btCapsuleShape.prototype.updateProp = function (r, h, upAxis) {
                  var self = this.ptr;
                  if (r && typeof r === "object") r = r.ptr;
                  if (h && typeof h === "object") h = h.ptr;
                  if (upAxis && typeof upAxis === "object") upAxis = upAxis.ptr;
                  _emscripten_bind_btCapsuleShape_updateProp_3(
                    self,
                    r,
                    h,
                    upAxis
                  );
                };
              btCapsuleShape.prototype["setLocalScaling"] =
                btCapsuleShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btCapsuleShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btCapsuleShape.prototype["getLocalScaling"] =
                btCapsuleShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btCapsuleShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btCapsuleShape.prototype["calculateLocalInertia"] =
                btCapsuleShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btCapsuleShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btCapsuleShape.prototype["isCompound"] =
                btCapsuleShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btCapsuleShape_isCompound_0(self);
                };
              btCapsuleShape.prototype["getUserIndex"] =
                btCapsuleShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCapsuleShape_getUserIndex_0(self);
                };
              btCapsuleShape.prototype["setUserIndex"] =
                btCapsuleShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btCapsuleShape_setUserIndex_1(self, index);
                };
              btCapsuleShape.prototype["getAabb"] =
                btCapsuleShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btCapsuleShape_getAabb_3(self, t, min, max);
                };
              btCapsuleShape.prototype["getLocalBoundingSphere"] =
                btCapsuleShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCapsuleShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btCapsuleShape.prototype["getImplicitShapeDimensions"] =
                btCapsuleShape.prototype.getImplicitShapeDimensions =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btCapsuleShape_getImplicitShapeDimensions_0(
                        self
                      ),
                      btVector3
                    );
                  };
              btCapsuleShape.prototype["__destroy__"] =
                btCapsuleShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btCapsuleShape___destroy___0(self);
                };
              function btCompoundShape(enableDynamicAabbTree) {
                if (
                  enableDynamicAabbTree &&
                  typeof enableDynamicAabbTree === "object"
                )
                  enableDynamicAabbTree = enableDynamicAabbTree.ptr;
                if (enableDynamicAabbTree === undefined) {
                  this.ptr =
                    _emscripten_bind_btCompoundShape_btCompoundShape_0();
                  getCache(btCompoundShape)[this.ptr] = this;
                  return;
                }
                this.ptr = _emscripten_bind_btCompoundShape_btCompoundShape_1(
                  enableDynamicAabbTree
                );
                getCache(btCompoundShape)[this.ptr] = this;
              }
              btCompoundShape.prototype = Object.create(
                btCollisionShape.prototype
              );
              btCompoundShape.prototype.constructor = btCompoundShape;
              btCompoundShape.prototype.__class__ = btCompoundShape;
              btCompoundShape.__cache__ = {};
              Module["btCompoundShape"] = btCompoundShape;
              btCompoundShape.prototype["addChildShape"] =
                btCompoundShape.prototype.addChildShape = function (
                  localTransform,
                  shape
                ) {
                  var self = this.ptr;
                  if (localTransform && typeof localTransform === "object")
                    localTransform = localTransform.ptr;
                  if (shape && typeof shape === "object") shape = shape.ptr;
                  _emscripten_bind_btCompoundShape_addChildShape_2(
                    self,
                    localTransform,
                    shape
                  );
                };
              btCompoundShape.prototype["removeChildShape"] =
                btCompoundShape.prototype.removeChildShape = function (shape) {
                  var self = this.ptr;
                  if (shape && typeof shape === "object") shape = shape.ptr;
                  _emscripten_bind_btCompoundShape_removeChildShape_1(
                    self,
                    shape
                  );
                };
              btCompoundShape.prototype["removeChildShapeByIndex"] =
                btCompoundShape.prototype.removeChildShapeByIndex = function (
                  childShapeindex
                ) {
                  var self = this.ptr;
                  if (childShapeindex && typeof childShapeindex === "object")
                    childShapeindex = childShapeindex.ptr;
                  _emscripten_bind_btCompoundShape_removeChildShapeByIndex_1(
                    self,
                    childShapeindex
                  );
                };
              btCompoundShape.prototype["getNumChildShapes"] =
                btCompoundShape.prototype.getNumChildShapes = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCompoundShape_getNumChildShapes_0(
                    self
                  );
                };
              btCompoundShape.prototype["getChildShape"] =
                btCompoundShape.prototype.getChildShape = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  return wrapPointer(
                    _emscripten_bind_btCompoundShape_getChildShape_1(
                      self,
                      index
                    ),
                    btCollisionShape
                  );
                };
              btCompoundShape.prototype["updateChildTransform"] =
                btCompoundShape.prototype.updateChildTransform = function (
                  childIndex,
                  newChildTransform,
                  shouldRecalculateLocalAabb
                ) {
                  var self = this.ptr;
                  if (childIndex && typeof childIndex === "object")
                    childIndex = childIndex.ptr;
                  if (
                    newChildTransform &&
                    typeof newChildTransform === "object"
                  )
                    newChildTransform = newChildTransform.ptr;
                  if (
                    shouldRecalculateLocalAabb &&
                    typeof shouldRecalculateLocalAabb === "object"
                  )
                    shouldRecalculateLocalAabb = shouldRecalculateLocalAabb.ptr;
                  if (shouldRecalculateLocalAabb === undefined) {
                    _emscripten_bind_btCompoundShape_updateChildTransform_2(
                      self,
                      childIndex,
                      newChildTransform
                    );
                    return;
                  }
                  _emscripten_bind_btCompoundShape_updateChildTransform_3(
                    self,
                    childIndex,
                    newChildTransform,
                    shouldRecalculateLocalAabb
                  );
                };
              btCompoundShape.prototype["setMargin"] =
                btCompoundShape.prototype.setMargin = function (margin) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btCompoundShape_setMargin_1(self, margin);
                };
              btCompoundShape.prototype["getMargin"] =
                btCompoundShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCompoundShape_getMargin_0(self);
                };
              btCompoundShape.prototype["setMaterial"] =
                btCompoundShape.prototype.setMaterial = function (
                  childShapeindex,
                  f,
                  r,
                  rf,
                  sf
                ) {
                  var self = this.ptr;
                  if (childShapeindex && typeof childShapeindex === "object")
                    childShapeindex = childShapeindex.ptr;
                  if (f && typeof f === "object") f = f.ptr;
                  if (r && typeof r === "object") r = r.ptr;
                  if (rf && typeof rf === "object") rf = rf.ptr;
                  if (sf && typeof sf === "object") sf = sf.ptr;
                  if (rf === undefined) {
                    _emscripten_bind_btCompoundShape_setMaterial_3(
                      self,
                      childShapeindex,
                      f,
                      r
                    );
                    return;
                  }
                  if (sf === undefined) {
                    _emscripten_bind_btCompoundShape_setMaterial_4(
                      self,
                      childShapeindex,
                      f,
                      r,
                      rf
                    );
                    return;
                  }
                  _emscripten_bind_btCompoundShape_setMaterial_5(
                    self,
                    childShapeindex,
                    f,
                    r,
                    rf,
                    sf
                  );
                };
              btCompoundShape.prototype["setLocalScaling"] =
                btCompoundShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btCompoundShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btCompoundShape.prototype["getLocalScaling"] =
                btCompoundShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btCompoundShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btCompoundShape.prototype["calculateLocalInertia"] =
                btCompoundShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btCompoundShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btCompoundShape.prototype["isCompound"] =
                btCompoundShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btCompoundShape_isCompound_0(self);
                };
              btCompoundShape.prototype["getUserIndex"] =
                btCompoundShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCompoundShape_getUserIndex_0(self);
                };
              btCompoundShape.prototype["setUserIndex"] =
                btCompoundShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btCompoundShape_setUserIndex_1(self, index);
                };
              btCompoundShape.prototype["getAabb"] =
                btCompoundShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btCompoundShape_getAabb_3(self, t, min, max);
                };
              btCompoundShape.prototype["getLocalBoundingSphere"] =
                btCompoundShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCompoundShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btCompoundShape.prototype["__destroy__"] =
                btCompoundShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btCompoundShape___destroy___0(self);
                };
              function btDefaultMotionState(startTrans, centerOfMassOffset) {
                if (startTrans && typeof startTrans === "object")
                  startTrans = startTrans.ptr;
                if (
                  centerOfMassOffset &&
                  typeof centerOfMassOffset === "object"
                )
                  centerOfMassOffset = centerOfMassOffset.ptr;
                if (startTrans === undefined) {
                  this.ptr =
                    _emscripten_bind_btDefaultMotionState_btDefaultMotionState_0();
                  getCache(btDefaultMotionState)[this.ptr] = this;
                  return;
                }
                if (centerOfMassOffset === undefined) {
                  this.ptr =
                    _emscripten_bind_btDefaultMotionState_btDefaultMotionState_1(
                      startTrans
                    );
                  getCache(btDefaultMotionState)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btDefaultMotionState_btDefaultMotionState_2(
                    startTrans,
                    centerOfMassOffset
                  );
                getCache(btDefaultMotionState)[this.ptr] = this;
              }
              btDefaultMotionState.prototype = Object.create(
                btMotionState.prototype
              );
              btDefaultMotionState.prototype.constructor = btDefaultMotionState;
              btDefaultMotionState.prototype.__class__ = btDefaultMotionState;
              btDefaultMotionState.__cache__ = {};
              Module["btDefaultMotionState"] = btDefaultMotionState;
              btDefaultMotionState.prototype["getWorldTransform"] =
                btDefaultMotionState.prototype.getWorldTransform = function (
                  worldTrans
                ) {
                  var self = this.ptr;
                  if (worldTrans && typeof worldTrans === "object")
                    worldTrans = worldTrans.ptr;
                  _emscripten_bind_btDefaultMotionState_getWorldTransform_1(
                    self,
                    worldTrans
                  );
                };
              btDefaultMotionState.prototype["setWorldTransform"] =
                btDefaultMotionState.prototype.setWorldTransform = function (
                  worldTrans
                ) {
                  var self = this.ptr;
                  if (worldTrans && typeof worldTrans === "object")
                    worldTrans = worldTrans.ptr;
                  _emscripten_bind_btDefaultMotionState_setWorldTransform_1(
                    self,
                    worldTrans
                  );
                };
              btDefaultMotionState.prototype["__destroy__"] =
                btDefaultMotionState.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btDefaultMotionState___destroy___0(self);
                };
              function AllHitsRayResultCallback(from, to) {
                if (from && typeof from === "object") from = from.ptr;
                if (to && typeof to === "object") to = to.ptr;
                this.ptr =
                  _emscripten_bind_AllHitsRayResultCallback_AllHitsRayResultCallback_2(
                    from,
                    to
                  );
                getCache(AllHitsRayResultCallback)[this.ptr] = this;
              }
              AllHitsRayResultCallback.prototype = Object.create(
                RayResultCallback.prototype
              );
              AllHitsRayResultCallback.prototype.constructor =
                AllHitsRayResultCallback;
              AllHitsRayResultCallback.prototype.__class__ =
                AllHitsRayResultCallback;
              AllHitsRayResultCallback.__cache__ = {};
              Module["AllHitsRayResultCallback"] = AllHitsRayResultCallback;
              AllHitsRayResultCallback.prototype["hasHit"] =
                AllHitsRayResultCallback.prototype.hasHit = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_AllHitsRayResultCallback_hasHit_0(
                    self
                  );
                };
              AllHitsRayResultCallback.prototype["get_m_collisionObjects"] =
                AllHitsRayResultCallback.prototype.get_m_collisionObjects =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_AllHitsRayResultCallback_get_m_collisionObjects_0(
                        self
                      ),
                      btConstCollisionObjectArray
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_collisionObjects"] =
                AllHitsRayResultCallback.prototype.set_m_collisionObjects =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_collisionObjects_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_collisionObjects",
                {
                  get: AllHitsRayResultCallback.prototype
                    .get_m_collisionObjects,
                  set: AllHitsRayResultCallback.prototype
                    .set_m_collisionObjects,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_rayFromWorld"] =
                AllHitsRayResultCallback.prototype.get_m_rayFromWorld =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0(
                        self
                      ),
                      btVector3
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_rayFromWorld"] =
                AllHitsRayResultCallback.prototype.set_m_rayFromWorld =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_rayFromWorld",
                {
                  get: AllHitsRayResultCallback.prototype.get_m_rayFromWorld,
                  set: AllHitsRayResultCallback.prototype.set_m_rayFromWorld,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_rayToWorld"] =
                AllHitsRayResultCallback.prototype.get_m_rayToWorld =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0(
                        self
                      ),
                      btVector3
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_rayToWorld"] =
                AllHitsRayResultCallback.prototype.set_m_rayToWorld = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_rayToWorld",
                {
                  get: AllHitsRayResultCallback.prototype.get_m_rayToWorld,
                  set: AllHitsRayResultCallback.prototype.set_m_rayToWorld,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_hitNormalWorld"] =
                AllHitsRayResultCallback.prototype.get_m_hitNormalWorld =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_AllHitsRayResultCallback_get_m_hitNormalWorld_0(
                        self
                      ),
                      btVector3Array
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_hitNormalWorld"] =
                AllHitsRayResultCallback.prototype.set_m_hitNormalWorld =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_hitNormalWorld_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_hitNormalWorld",
                {
                  get: AllHitsRayResultCallback.prototype.get_m_hitNormalWorld,
                  set: AllHitsRayResultCallback.prototype.set_m_hitNormalWorld,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_hitPointWorld"] =
                AllHitsRayResultCallback.prototype.get_m_hitPointWorld =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_AllHitsRayResultCallback_get_m_hitPointWorld_0(
                        self
                      ),
                      btVector3Array
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_hitPointWorld"] =
                AllHitsRayResultCallback.prototype.set_m_hitPointWorld =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_hitPointWorld_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_hitPointWorld",
                {
                  get: AllHitsRayResultCallback.prototype.get_m_hitPointWorld,
                  set: AllHitsRayResultCallback.prototype.set_m_hitPointWorld,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_hitFractions"] =
                AllHitsRayResultCallback.prototype.get_m_hitFractions =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_AllHitsRayResultCallback_get_m_hitFractions_0(
                        self
                      ),
                      btScalarArray
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_hitFractions"] =
                AllHitsRayResultCallback.prototype.set_m_hitFractions =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_hitFractions_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_hitFractions",
                {
                  get: AllHitsRayResultCallback.prototype.get_m_hitFractions,
                  set: AllHitsRayResultCallback.prototype.set_m_hitFractions,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_shapeParts"] =
                AllHitsRayResultCallback.prototype.get_m_shapeParts =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_AllHitsRayResultCallback_get_m_shapeParts_0(
                        self
                      ),
                      btIntArray
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_shapeParts"] =
                AllHitsRayResultCallback.prototype.set_m_shapeParts = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_AllHitsRayResultCallback_set_m_shapeParts_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_shapeParts",
                {
                  get: AllHitsRayResultCallback.prototype.get_m_shapeParts,
                  set: AllHitsRayResultCallback.prototype.set_m_shapeParts,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_collisionFilterGroup"] =
                AllHitsRayResultCallback.prototype.get_m_collisionFilterGroup =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterGroup_0(
                      self
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_collisionFilterGroup"] =
                AllHitsRayResultCallback.prototype.set_m_collisionFilterGroup =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterGroup_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_collisionFilterGroup",
                {
                  get: AllHitsRayResultCallback.prototype
                    .get_m_collisionFilterGroup,
                  set: AllHitsRayResultCallback.prototype
                    .set_m_collisionFilterGroup,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_collisionFilterMask"] =
                AllHitsRayResultCallback.prototype.get_m_collisionFilterMask =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterMask_0(
                      self
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_collisionFilterMask"] =
                AllHitsRayResultCallback.prototype.set_m_collisionFilterMask =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterMask_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_collisionFilterMask",
                {
                  get: AllHitsRayResultCallback.prototype
                    .get_m_collisionFilterMask,
                  set: AllHitsRayResultCallback.prototype
                    .set_m_collisionFilterMask,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_shapePart"] =
                AllHitsRayResultCallback.prototype.get_m_shapePart =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_AllHitsRayResultCallback_get_m_shapePart_0(
                      self
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_shapePart"] =
                AllHitsRayResultCallback.prototype.set_m_shapePart = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_AllHitsRayResultCallback_set_m_shapePart_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_shapePart",
                {
                  get: AllHitsRayResultCallback.prototype.get_m_shapePart,
                  set: AllHitsRayResultCallback.prototype.set_m_shapePart,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_closestHitFraction"] =
                AllHitsRayResultCallback.prototype.get_m_closestHitFraction =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_AllHitsRayResultCallback_get_m_closestHitFraction_0(
                      self
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_closestHitFraction"] =
                AllHitsRayResultCallback.prototype.set_m_closestHitFraction =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_closestHitFraction_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_closestHitFraction",
                {
                  get: AllHitsRayResultCallback.prototype
                    .get_m_closestHitFraction,
                  set: AllHitsRayResultCallback.prototype
                    .set_m_closestHitFraction,
                }
              );
              AllHitsRayResultCallback.prototype["get_m_collisionObject"] =
                AllHitsRayResultCallback.prototype.get_m_collisionObject =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_AllHitsRayResultCallback_get_m_collisionObject_0(
                        self
                      ),
                      btCollisionObject
                    );
                  };
              AllHitsRayResultCallback.prototype["set_m_collisionObject"] =
                AllHitsRayResultCallback.prototype.set_m_collisionObject =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_AllHitsRayResultCallback_set_m_collisionObject_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                AllHitsRayResultCallback.prototype,
                "m_collisionObject",
                {
                  get: AllHitsRayResultCallback.prototype.get_m_collisionObject,
                  set: AllHitsRayResultCallback.prototype.set_m_collisionObject,
                }
              );
              AllHitsRayResultCallback.prototype["__destroy__"] =
                AllHitsRayResultCallback.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_AllHitsRayResultCallback___destroy___0(self);
                };
              function ClosestRayResultCallback(from, to) {
                if (from && typeof from === "object") from = from.ptr;
                if (to && typeof to === "object") to = to.ptr;
                this.ptr =
                  _emscripten_bind_ClosestRayResultCallback_ClosestRayResultCallback_2(
                    from,
                    to
                  );
                getCache(ClosestRayResultCallback)[this.ptr] = this;
              }
              ClosestRayResultCallback.prototype = Object.create(
                RayResultCallback.prototype
              );
              ClosestRayResultCallback.prototype.constructor =
                ClosestRayResultCallback;
              ClosestRayResultCallback.prototype.__class__ =
                ClosestRayResultCallback;
              ClosestRayResultCallback.__cache__ = {};
              Module["ClosestRayResultCallback"] = ClosestRayResultCallback;
              ClosestRayResultCallback.prototype["hasHit"] =
                ClosestRayResultCallback.prototype.hasHit = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_ClosestRayResultCallback_hasHit_0(
                    self
                  );
                };
              ClosestRayResultCallback.prototype["get_m_rayFromWorld"] =
                ClosestRayResultCallback.prototype.get_m_rayFromWorld =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0(
                        self
                      ),
                      btVector3
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_rayFromWorld"] =
                ClosestRayResultCallback.prototype.set_m_rayFromWorld =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_rayFromWorld",
                {
                  get: ClosestRayResultCallback.prototype.get_m_rayFromWorld,
                  set: ClosestRayResultCallback.prototype.set_m_rayFromWorld,
                }
              );
              ClosestRayResultCallback.prototype["get_m_rayToWorld"] =
                ClosestRayResultCallback.prototype.get_m_rayToWorld =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0(
                        self
                      ),
                      btVector3
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_rayToWorld"] =
                ClosestRayResultCallback.prototype.set_m_rayToWorld = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_rayToWorld",
                {
                  get: ClosestRayResultCallback.prototype.get_m_rayToWorld,
                  set: ClosestRayResultCallback.prototype.set_m_rayToWorld,
                }
              );
              ClosestRayResultCallback.prototype["get_m_hitNormalWorld"] =
                ClosestRayResultCallback.prototype.get_m_hitNormalWorld =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_ClosestRayResultCallback_get_m_hitNormalWorld_0(
                        self
                      ),
                      btVector3
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_hitNormalWorld"] =
                ClosestRayResultCallback.prototype.set_m_hitNormalWorld =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_ClosestRayResultCallback_set_m_hitNormalWorld_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_hitNormalWorld",
                {
                  get: ClosestRayResultCallback.prototype.get_m_hitNormalWorld,
                  set: ClosestRayResultCallback.prototype.set_m_hitNormalWorld,
                }
              );
              ClosestRayResultCallback.prototype["get_m_hitPointWorld"] =
                ClosestRayResultCallback.prototype.get_m_hitPointWorld =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_ClosestRayResultCallback_get_m_hitPointWorld_0(
                        self
                      ),
                      btVector3
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_hitPointWorld"] =
                ClosestRayResultCallback.prototype.set_m_hitPointWorld =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_ClosestRayResultCallback_set_m_hitPointWorld_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_hitPointWorld",
                {
                  get: ClosestRayResultCallback.prototype.get_m_hitPointWorld,
                  set: ClosestRayResultCallback.prototype.set_m_hitPointWorld,
                }
              );
              ClosestRayResultCallback.prototype["get_m_collisionFilterGroup"] =
                ClosestRayResultCallback.prototype.get_m_collisionFilterGroup =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterGroup_0(
                      self
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_collisionFilterGroup"] =
                ClosestRayResultCallback.prototype.set_m_collisionFilterGroup =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterGroup_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_collisionFilterGroup",
                {
                  get: ClosestRayResultCallback.prototype
                    .get_m_collisionFilterGroup,
                  set: ClosestRayResultCallback.prototype
                    .set_m_collisionFilterGroup,
                }
              );
              ClosestRayResultCallback.prototype["get_m_collisionFilterMask"] =
                ClosestRayResultCallback.prototype.get_m_collisionFilterMask =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterMask_0(
                      self
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_collisionFilterMask"] =
                ClosestRayResultCallback.prototype.set_m_collisionFilterMask =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterMask_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_collisionFilterMask",
                {
                  get: ClosestRayResultCallback.prototype
                    .get_m_collisionFilterMask,
                  set: ClosestRayResultCallback.prototype
                    .set_m_collisionFilterMask,
                }
              );
              ClosestRayResultCallback.prototype["get_m_shapePart"] =
                ClosestRayResultCallback.prototype.get_m_shapePart =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_ClosestRayResultCallback_get_m_shapePart_0(
                      self
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_shapePart"] =
                ClosestRayResultCallback.prototype.set_m_shapePart = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_ClosestRayResultCallback_set_m_shapePart_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_shapePart",
                {
                  get: ClosestRayResultCallback.prototype.get_m_shapePart,
                  set: ClosestRayResultCallback.prototype.set_m_shapePart,
                }
              );
              ClosestRayResultCallback.prototype["get_m_closestHitFraction"] =
                ClosestRayResultCallback.prototype.get_m_closestHitFraction =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_ClosestRayResultCallback_get_m_closestHitFraction_0(
                      self
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_closestHitFraction"] =
                ClosestRayResultCallback.prototype.set_m_closestHitFraction =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_ClosestRayResultCallback_set_m_closestHitFraction_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_closestHitFraction",
                {
                  get: ClosestRayResultCallback.prototype
                    .get_m_closestHitFraction,
                  set: ClosestRayResultCallback.prototype
                    .set_m_closestHitFraction,
                }
              );
              ClosestRayResultCallback.prototype["get_m_collisionObject"] =
                ClosestRayResultCallback.prototype.get_m_collisionObject =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_ClosestRayResultCallback_get_m_collisionObject_0(
                        self
                      ),
                      btCollisionObject
                    );
                  };
              ClosestRayResultCallback.prototype["set_m_collisionObject"] =
                ClosestRayResultCallback.prototype.set_m_collisionObject =
                  function (arg0) {
                    var self = this.ptr;
                    if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                    _emscripten_bind_ClosestRayResultCallback_set_m_collisionObject_1(
                      self,
                      arg0
                    );
                  };
              Object.defineProperty(
                ClosestRayResultCallback.prototype,
                "m_collisionObject",
                {
                  get: ClosestRayResultCallback.prototype.get_m_collisionObject,
                  set: ClosestRayResultCallback.prototype.set_m_collisionObject,
                }
              );
              ClosestRayResultCallback.prototype["__destroy__"] =
                ClosestRayResultCallback.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_ClosestRayResultCallback___destroy___0(self);
                };
              function ccKinematicCharacterController(
                ghostObject,
                convexShape,
                stepHeight,
                upAxis
              ) {
                if (ghostObject && typeof ghostObject === "object")
                  ghostObject = ghostObject.ptr;
                if (convexShape && typeof convexShape === "object")
                  convexShape = convexShape.ptr;
                if (stepHeight && typeof stepHeight === "object")
                  stepHeight = stepHeight.ptr;
                if (upAxis && typeof upAxis === "object") upAxis = upAxis.ptr;
                if (upAxis === undefined) {
                  this.ptr =
                    _emscripten_bind_ccKinematicCharacterController_ccKinematicCharacterController_3(
                      ghostObject,
                      convexShape,
                      stepHeight
                    );
                  getCache(ccKinematicCharacterController)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_ccKinematicCharacterController_ccKinematicCharacterController_4(
                    ghostObject,
                    convexShape,
                    stepHeight,
                    upAxis
                  );
                getCache(ccKinematicCharacterController)[this.ptr] = this;
              }
              ccKinematicCharacterController.prototype = Object.create(
                btActionInterface.prototype
              );
              ccKinematicCharacterController.prototype.constructor =
                ccKinematicCharacterController;
              ccKinematicCharacterController.prototype.__class__ =
                ccKinematicCharacterController;
              ccKinematicCharacterController.__cache__ = {};
              Module["ccKinematicCharacterController"] =
                ccKinematicCharacterController;
              ccKinematicCharacterController.prototype["setUpAxis"] =
                ccKinematicCharacterController.prototype.setUpAxis = function (
                  axis
                ) {
                  var self = this.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_ccKinematicCharacterController_setUpAxis_1(
                    self,
                    axis
                  );
                };
              ccKinematicCharacterController.prototype["setWalkDirection"] =
                ccKinematicCharacterController.prototype.setWalkDirection =
                  function (walkDirection) {
                    var self = this.ptr;
                    if (walkDirection && typeof walkDirection === "object")
                      walkDirection = walkDirection.ptr;
                    _emscripten_bind_ccKinematicCharacterController_setWalkDirection_1(
                      self,
                      walkDirection
                    );
                  };
              ccKinematicCharacterController.prototype[
                "setVelocityForTimeInterval"
              ] = ccKinematicCharacterController.prototype.setVelocityForTimeInterval =
                function (velocity, timeInterval) {
                  var self = this.ptr;
                  if (velocity && typeof velocity === "object")
                    velocity = velocity.ptr;
                  if (timeInterval && typeof timeInterval === "object")
                    timeInterval = timeInterval.ptr;
                  _emscripten_bind_ccKinematicCharacterController_setVelocityForTimeInterval_2(
                    self,
                    velocity,
                    timeInterval
                  );
                };
              ccKinematicCharacterController.prototype["warp"] =
                ccKinematicCharacterController.prototype.warp = function (
                  origin
                ) {
                  var self = this.ptr;
                  if (origin && typeof origin === "object") origin = origin.ptr;
                  _emscripten_bind_ccKinematicCharacterController_warp_1(
                    self,
                    origin
                  );
                };
              ccKinematicCharacterController.prototype["preStep"] =
                ccKinematicCharacterController.prototype.preStep = function (
                  collisionWorld
                ) {
                  var self = this.ptr;
                  if (collisionWorld && typeof collisionWorld === "object")
                    collisionWorld = collisionWorld.ptr;
                  _emscripten_bind_ccKinematicCharacterController_preStep_1(
                    self,
                    collisionWorld
                  );
                };
              ccKinematicCharacterController.prototype["playerStep"] =
                ccKinematicCharacterController.prototype.playerStep = function (
                  collisionWorld,
                  dt
                ) {
                  var self = this.ptr;
                  if (collisionWorld && typeof collisionWorld === "object")
                    collisionWorld = collisionWorld.ptr;
                  if (dt && typeof dt === "object") dt = dt.ptr;
                  _emscripten_bind_ccKinematicCharacterController_playerStep_2(
                    self,
                    collisionWorld,
                    dt
                  );
                };
              ccKinematicCharacterController.prototype["setFallSpeed"] =
                ccKinematicCharacterController.prototype.setFallSpeed =
                  function (fallSpeed) {
                    var self = this.ptr;
                    if (fallSpeed && typeof fallSpeed === "object")
                      fallSpeed = fallSpeed.ptr;
                    _emscripten_bind_ccKinematicCharacterController_setFallSpeed_1(
                      self,
                      fallSpeed
                    );
                  };
              ccKinematicCharacterController.prototype["setJumpSpeed"] =
                ccKinematicCharacterController.prototype.setJumpSpeed =
                  function (jumpSpeed) {
                    var self = this.ptr;
                    if (jumpSpeed && typeof jumpSpeed === "object")
                      jumpSpeed = jumpSpeed.ptr;
                    _emscripten_bind_ccKinematicCharacterController_setJumpSpeed_1(
                      self,
                      jumpSpeed
                    );
                  };
              ccKinematicCharacterController.prototype["setMaxJumpHeight"] =
                ccKinematicCharacterController.prototype.setMaxJumpHeight =
                  function (maxJumpHeight) {
                    var self = this.ptr;
                    if (maxJumpHeight && typeof maxJumpHeight === "object")
                      maxJumpHeight = maxJumpHeight.ptr;
                    _emscripten_bind_ccKinematicCharacterController_setMaxJumpHeight_1(
                      self,
                      maxJumpHeight
                    );
                  };
              ccKinematicCharacterController.prototype["canJump"] =
                ccKinematicCharacterController.prototype.canJump = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_ccKinematicCharacterController_canJump_0(
                    self
                  );
                };
              ccKinematicCharacterController.prototype["jump"] =
                ccKinematicCharacterController.prototype.jump = function () {
                  var self = this.ptr;
                  _emscripten_bind_ccKinematicCharacterController_jump_0(self);
                };
              ccKinematicCharacterController.prototype["setGravity"] =
                ccKinematicCharacterController.prototype.setGravity = function (
                  gravity
                ) {
                  var self = this.ptr;
                  if (gravity && typeof gravity === "object")
                    gravity = gravity.ptr;
                  _emscripten_bind_ccKinematicCharacterController_setGravity_1(
                    self,
                    gravity
                  );
                };
              ccKinematicCharacterController.prototype["getGravity"] =
                ccKinematicCharacterController.prototype.getGravity =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_ccKinematicCharacterController_getGravity_0(
                      self
                    );
                  };
              ccKinematicCharacterController.prototype["setMaxSlope"] =
                ccKinematicCharacterController.prototype.setMaxSlope =
                  function (slopeRadians) {
                    var self = this.ptr;
                    if (slopeRadians && typeof slopeRadians === "object")
                      slopeRadians = slopeRadians.ptr;
                    _emscripten_bind_ccKinematicCharacterController_setMaxSlope_1(
                      self,
                      slopeRadians
                    );
                  };
              ccKinematicCharacterController.prototype["getMaxSlope"] =
                ccKinematicCharacterController.prototype.getMaxSlope =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_ccKinematicCharacterController_getMaxSlope_0(
                      self
                    );
                  };
              ccKinematicCharacterController.prototype["getGhostObject"] =
                ccKinematicCharacterController.prototype.getGhostObject =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_ccKinematicCharacterController_getGhostObject_0(
                        self
                      ),
                      btPairCachingGhostObject
                    );
                  };
              ccKinematicCharacterController.prototype["setUseGhostSweepTest"] =
                ccKinematicCharacterController.prototype.setUseGhostSweepTest =
                  function (useGhostObjectSweepTest) {
                    var self = this.ptr;
                    if (
                      useGhostObjectSweepTest &&
                      typeof useGhostObjectSweepTest === "object"
                    )
                      useGhostObjectSweepTest = useGhostObjectSweepTest.ptr;
                    _emscripten_bind_ccKinematicCharacterController_setUseGhostSweepTest_1(
                      self,
                      useGhostObjectSweepTest
                    );
                  };
              ccKinematicCharacterController.prototype["onGround"] =
                ccKinematicCharacterController.prototype.onGround =
                  function () {
                    var self = this.ptr;
                    return !!_emscripten_bind_ccKinematicCharacterController_onGround_0(
                      self
                    );
                  };
              ccKinematicCharacterController.prototype["setUpInterpolate"] =
                ccKinematicCharacterController.prototype.setUpInterpolate =
                  function (value) {
                    var self = this.ptr;
                    if (value && typeof value === "object") value = value.ptr;
                    _emscripten_bind_ccKinematicCharacterController_setUpInterpolate_1(
                      self,
                      value
                    );
                  };
              ccKinematicCharacterController.prototype["updateAction"] =
                ccKinematicCharacterController.prototype.updateAction =
                  function (collisionWorld, deltaTimeStep) {
                    var self = this.ptr;
                    if (collisionWorld && typeof collisionWorld === "object")
                      collisionWorld = collisionWorld.ptr;
                    if (deltaTimeStep && typeof deltaTimeStep === "object")
                      deltaTimeStep = deltaTimeStep.ptr;
                    _emscripten_bind_ccKinematicCharacterController_updateAction_2(
                      self,
                      collisionWorld,
                      deltaTimeStep
                    );
                  };
              ccKinematicCharacterController.prototype["__destroy__"] =
                ccKinematicCharacterController.prototype.__destroy__ =
                  function () {
                    var self = this.ptr;
                    _emscripten_bind_ccKinematicCharacterController___destroy___0(
                      self
                    );
                  };
              function btHingeConstraint(
                rbA,
                rbB,
                pivotInA,
                pivotInB,
                axisInA,
                axisInB,
                useReferenceFrameA
              ) {
                if (rbA && typeof rbA === "object") rbA = rbA.ptr;
                if (rbB && typeof rbB === "object") rbB = rbB.ptr;
                if (pivotInA && typeof pivotInA === "object")
                  pivotInA = pivotInA.ptr;
                if (pivotInB && typeof pivotInB === "object")
                  pivotInB = pivotInB.ptr;
                if (axisInA && typeof axisInA === "object")
                  axisInA = axisInA.ptr;
                if (axisInB && typeof axisInB === "object")
                  axisInB = axisInB.ptr;
                if (
                  useReferenceFrameA &&
                  typeof useReferenceFrameA === "object"
                )
                  useReferenceFrameA = useReferenceFrameA.ptr;
                if (pivotInA === undefined) {
                  this.ptr =
                    _emscripten_bind_btHingeConstraint_btHingeConstraint_2(
                      rbA,
                      rbB
                    );
                  getCache(btHingeConstraint)[this.ptr] = this;
                  return;
                }
                if (pivotInB === undefined) {
                  this.ptr =
                    _emscripten_bind_btHingeConstraint_btHingeConstraint_3(
                      rbA,
                      rbB,
                      pivotInA
                    );
                  getCache(btHingeConstraint)[this.ptr] = this;
                  return;
                }
                if (axisInA === undefined) {
                  this.ptr =
                    _emscripten_bind_btHingeConstraint_btHingeConstraint_4(
                      rbA,
                      rbB,
                      pivotInA,
                      pivotInB
                    );
                  getCache(btHingeConstraint)[this.ptr] = this;
                  return;
                }
                if (axisInB === undefined) {
                  this.ptr =
                    _emscripten_bind_btHingeConstraint_btHingeConstraint_5(
                      rbA,
                      rbB,
                      pivotInA,
                      pivotInB,
                      axisInA
                    );
                  getCache(btHingeConstraint)[this.ptr] = this;
                  return;
                }
                if (useReferenceFrameA === undefined) {
                  this.ptr =
                    _emscripten_bind_btHingeConstraint_btHingeConstraint_6(
                      rbA,
                      rbB,
                      pivotInA,
                      pivotInB,
                      axisInA,
                      axisInB
                    );
                  getCache(btHingeConstraint)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btHingeConstraint_btHingeConstraint_7(
                    rbA,
                    rbB,
                    pivotInA,
                    pivotInB,
                    axisInA,
                    axisInB,
                    useReferenceFrameA
                  );
                getCache(btHingeConstraint)[this.ptr] = this;
              }
              btHingeConstraint.prototype = Object.create(
                btTypedConstraint.prototype
              );
              btHingeConstraint.prototype.constructor = btHingeConstraint;
              btHingeConstraint.prototype.__class__ = btHingeConstraint;
              btHingeConstraint.__cache__ = {};
              Module["btHingeConstraint"] = btHingeConstraint;
              btHingeConstraint.prototype["setLimit"] =
                btHingeConstraint.prototype.setLimit = function (
                  low,
                  high,
                  softness,
                  biasFactor,
                  relaxationFactor
                ) {
                  var self = this.ptr;
                  if (low && typeof low === "object") low = low.ptr;
                  if (high && typeof high === "object") high = high.ptr;
                  if (softness && typeof softness === "object")
                    softness = softness.ptr;
                  if (biasFactor && typeof biasFactor === "object")
                    biasFactor = biasFactor.ptr;
                  if (relaxationFactor && typeof relaxationFactor === "object")
                    relaxationFactor = relaxationFactor.ptr;
                  if (relaxationFactor === undefined) {
                    _emscripten_bind_btHingeConstraint_setLimit_4(
                      self,
                      low,
                      high,
                      softness,
                      biasFactor
                    );
                    return;
                  }
                  _emscripten_bind_btHingeConstraint_setLimit_5(
                    self,
                    low,
                    high,
                    softness,
                    biasFactor,
                    relaxationFactor
                  );
                };
              btHingeConstraint.prototype["enableAngularMotor"] =
                btHingeConstraint.prototype.enableAngularMotor = function (
                  enableMotor,
                  targetVelocity,
                  maxMotorImpulse
                ) {
                  var self = this.ptr;
                  if (enableMotor && typeof enableMotor === "object")
                    enableMotor = enableMotor.ptr;
                  if (targetVelocity && typeof targetVelocity === "object")
                    targetVelocity = targetVelocity.ptr;
                  if (maxMotorImpulse && typeof maxMotorImpulse === "object")
                    maxMotorImpulse = maxMotorImpulse.ptr;
                  _emscripten_bind_btHingeConstraint_enableAngularMotor_3(
                    self,
                    enableMotor,
                    targetVelocity,
                    maxMotorImpulse
                  );
                };
              btHingeConstraint.prototype["setAngularOnly"] =
                btHingeConstraint.prototype.setAngularOnly = function (
                  angularOnly
                ) {
                  var self = this.ptr;
                  if (angularOnly && typeof angularOnly === "object")
                    angularOnly = angularOnly.ptr;
                  _emscripten_bind_btHingeConstraint_setAngularOnly_1(
                    self,
                    angularOnly
                  );
                };
              btHingeConstraint.prototype["enableMotor"] =
                btHingeConstraint.prototype.enableMotor = function (
                  enableMotor
                ) {
                  var self = this.ptr;
                  if (enableMotor && typeof enableMotor === "object")
                    enableMotor = enableMotor.ptr;
                  _emscripten_bind_btHingeConstraint_enableMotor_1(
                    self,
                    enableMotor
                  );
                };
              btHingeConstraint.prototype["setMaxMotorImpulse"] =
                btHingeConstraint.prototype.setMaxMotorImpulse = function (
                  maxMotorImpulse
                ) {
                  var self = this.ptr;
                  if (maxMotorImpulse && typeof maxMotorImpulse === "object")
                    maxMotorImpulse = maxMotorImpulse.ptr;
                  _emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1(
                    self,
                    maxMotorImpulse
                  );
                };
              btHingeConstraint.prototype["setMotorTarget"] =
                btHingeConstraint.prototype.setMotorTarget = function (
                  targetAngle,
                  dt
                ) {
                  var self = this.ptr;
                  if (targetAngle && typeof targetAngle === "object")
                    targetAngle = targetAngle.ptr;
                  if (dt && typeof dt === "object") dt = dt.ptr;
                  _emscripten_bind_btHingeConstraint_setMotorTarget_2(
                    self,
                    targetAngle,
                    dt
                  );
                };
              btHingeConstraint.prototype["enableFeedback"] =
                btHingeConstraint.prototype.enableFeedback = function (
                  needsFeedback
                ) {
                  var self = this.ptr;
                  if (needsFeedback && typeof needsFeedback === "object")
                    needsFeedback = needsFeedback.ptr;
                  _emscripten_bind_btHingeConstraint_enableFeedback_1(
                    self,
                    needsFeedback
                  );
                };
              btHingeConstraint.prototype["getBreakingImpulseThreshold"] =
                btHingeConstraint.prototype.getBreakingImpulseThreshold =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0(
                      self
                    );
                  };
              btHingeConstraint.prototype["setBreakingImpulseThreshold"] =
                btHingeConstraint.prototype.setBreakingImpulseThreshold =
                  function (threshold) {
                    var self = this.ptr;
                    if (threshold && typeof threshold === "object")
                      threshold = threshold.ptr;
                    _emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1(
                      self,
                      threshold
                    );
                  };
              btHingeConstraint.prototype["getParam"] =
                btHingeConstraint.prototype.getParam = function (num, axis) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  return _emscripten_bind_btHingeConstraint_getParam_2(
                    self,
                    num,
                    axis
                  );
                };
              btHingeConstraint.prototype["setParam"] =
                btHingeConstraint.prototype.setParam = function (
                  num,
                  value,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (value && typeof value === "object") value = value.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_btHingeConstraint_setParam_3(
                    self,
                    num,
                    value,
                    axis
                  );
                };
              btHingeConstraint.prototype["__destroy__"] =
                btHingeConstraint.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btHingeConstraint___destroy___0(self);
                };
              function btQuaternion(x, y, z, w) {
                if (x && typeof x === "object") x = x.ptr;
                if (y && typeof y === "object") y = y.ptr;
                if (z && typeof z === "object") z = z.ptr;
                if (w && typeof w === "object") w = w.ptr;
                this.ptr = _emscripten_bind_btQuaternion_btQuaternion_4(
                  x,
                  y,
                  z,
                  w
                );
                getCache(btQuaternion)[this.ptr] = this;
              }
              btQuaternion.prototype = Object.create(btQuadWord.prototype);
              btQuaternion.prototype.constructor = btQuaternion;
              btQuaternion.prototype.__class__ = btQuaternion;
              btQuaternion.__cache__ = {};
              Module["btQuaternion"] = btQuaternion;
              btQuaternion.prototype["setValue"] =
                btQuaternion.prototype.setValue = function (x, y, z, w) {
                  var self = this.ptr;
                  if (x && typeof x === "object") x = x.ptr;
                  if (y && typeof y === "object") y = y.ptr;
                  if (z && typeof z === "object") z = z.ptr;
                  if (w && typeof w === "object") w = w.ptr;
                  _emscripten_bind_btQuaternion_setValue_4(self, x, y, z, w);
                };
              btQuaternion.prototype["x"] = btQuaternion.prototype.x =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btQuaternion_x_0(self);
                };
              btQuaternion.prototype["y"] = btQuaternion.prototype.y =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btQuaternion_y_0(self);
                };
              btQuaternion.prototype["z"] = btQuaternion.prototype.z =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btQuaternion_z_0(self);
                };
              btQuaternion.prototype["w"] = btQuaternion.prototype.w =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btQuaternion_w_0(self);
                };
              btQuaternion.prototype["setX"] = btQuaternion.prototype.setX =
                function (x) {
                  var self = this.ptr;
                  if (x && typeof x === "object") x = x.ptr;
                  _emscripten_bind_btQuaternion_setX_1(self, x);
                };
              btQuaternion.prototype["setY"] = btQuaternion.prototype.setY =
                function (y) {
                  var self = this.ptr;
                  if (y && typeof y === "object") y = y.ptr;
                  _emscripten_bind_btQuaternion_setY_1(self, y);
                };
              btQuaternion.prototype["setZ"] = btQuaternion.prototype.setZ =
                function (z) {
                  var self = this.ptr;
                  if (z && typeof z === "object") z = z.ptr;
                  _emscripten_bind_btQuaternion_setZ_1(self, z);
                };
              btQuaternion.prototype["setW"] = btQuaternion.prototype.setW =
                function (w) {
                  var self = this.ptr;
                  if (w && typeof w === "object") w = w.ptr;
                  _emscripten_bind_btQuaternion_setW_1(self, w);
                };
              btQuaternion.prototype["__destroy__"] =
                btQuaternion.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btQuaternion___destroy___0(self);
                };
              function btBU_Simplex1to4() {
                this.ptr =
                  _emscripten_bind_btBU_Simplex1to4_btBU_Simplex1to4_0();
                getCache(btBU_Simplex1to4)[this.ptr] = this;
              }
              btBU_Simplex1to4.prototype = Object.create(
                btConvexShape.prototype
              );
              btBU_Simplex1to4.prototype.constructor = btBU_Simplex1to4;
              btBU_Simplex1to4.prototype.__class__ = btBU_Simplex1to4;
              btBU_Simplex1to4.__cache__ = {};
              Module["btBU_Simplex1to4"] = btBU_Simplex1to4;
              btBU_Simplex1to4.prototype["addVertex"] =
                btBU_Simplex1to4.prototype.addVertex = function (pt) {
                  var self = this.ptr;
                  if (pt && typeof pt === "object") pt = pt.ptr;
                  _emscripten_bind_btBU_Simplex1to4_addVertex_1(self, pt);
                };
              btBU_Simplex1to4.prototype["setLocalScaling"] =
                btBU_Simplex1to4.prototype.setLocalScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btBU_Simplex1to4_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btBU_Simplex1to4.prototype["getLocalScaling"] =
                btBU_Simplex1to4.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btBU_Simplex1to4_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btBU_Simplex1to4.prototype["calculateLocalInertia"] =
                btBU_Simplex1to4.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btBU_Simplex1to4_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btBU_Simplex1to4.prototype["isCompound"] =
                btBU_Simplex1to4.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btBU_Simplex1to4_isCompound_0(self);
                };
              btBU_Simplex1to4.prototype["getUserIndex"] =
                btBU_Simplex1to4.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btBU_Simplex1to4_getUserIndex_0(self);
                };
              btBU_Simplex1to4.prototype["setUserIndex"] =
                btBU_Simplex1to4.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btBU_Simplex1to4_setUserIndex_1(self, index);
                };
              btBU_Simplex1to4.prototype["getAabb"] =
                btBU_Simplex1to4.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btBU_Simplex1to4_getAabb_3(
                    self,
                    t,
                    min,
                    max
                  );
                };
              btBU_Simplex1to4.prototype["getLocalBoundingSphere"] =
                btBU_Simplex1to4.prototype.getLocalBoundingSphere =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btBU_Simplex1to4_getLocalBoundingSphere_0(
                      self
                    );
                  };
              btBU_Simplex1to4.prototype["__destroy__"] =
                btBU_Simplex1to4.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btBU_Simplex1to4___destroy___0(self);
                };
              function btContactSolverInfo() {
                throw "cannot construct a btContactSolverInfo, no constructor in IDL";
              }
              btContactSolverInfo.prototype = Object.create(
                WrapperObject.prototype
              );
              btContactSolverInfo.prototype.constructor = btContactSolverInfo;
              btContactSolverInfo.prototype.__class__ = btContactSolverInfo;
              btContactSolverInfo.__cache__ = {};
              Module["btContactSolverInfo"] = btContactSolverInfo;
              btContactSolverInfo.prototype["get_m_splitImpulse"] =
                btContactSolverInfo.prototype.get_m_splitImpulse = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btContactSolverInfo_get_m_splitImpulse_0(
                    self
                  );
                };
              btContactSolverInfo.prototype["set_m_splitImpulse"] =
                btContactSolverInfo.prototype.set_m_splitImpulse = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btContactSolverInfo_set_m_splitImpulse_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btContactSolverInfo.prototype,
                "m_splitImpulse",
                {
                  get: btContactSolverInfo.prototype.get_m_splitImpulse,
                  set: btContactSolverInfo.prototype.set_m_splitImpulse,
                }
              );
              btContactSolverInfo.prototype[
                "get_m_splitImpulsePenetrationThreshold"
              ] = btContactSolverInfo.prototype.get_m_splitImpulsePenetrationThreshold =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0(
                    self
                  );
                };
              btContactSolverInfo.prototype[
                "set_m_splitImpulsePenetrationThreshold"
              ] = btContactSolverInfo.prototype.set_m_splitImpulsePenetrationThreshold =
                function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btContactSolverInfo.prototype,
                "m_splitImpulsePenetrationThreshold",
                {
                  get: btContactSolverInfo.prototype
                    .get_m_splitImpulsePenetrationThreshold,
                  set: btContactSolverInfo.prototype
                    .set_m_splitImpulsePenetrationThreshold,
                }
              );
              btContactSolverInfo.prototype["get_m_numIterations"] =
                btContactSolverInfo.prototype.get_m_numIterations =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btContactSolverInfo_get_m_numIterations_0(
                      self
                    );
                  };
              btContactSolverInfo.prototype["set_m_numIterations"] =
                btContactSolverInfo.prototype.set_m_numIterations = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btContactSolverInfo_set_m_numIterations_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btContactSolverInfo.prototype,
                "m_numIterations",
                {
                  get: btContactSolverInfo.prototype.get_m_numIterations,
                  set: btContactSolverInfo.prototype.set_m_numIterations,
                }
              );
              btContactSolverInfo.prototype["__destroy__"] =
                btContactSolverInfo.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btContactSolverInfo___destroy___0(self);
                };
              function btKinematicCharacterController(
                ghostObject,
                convexShape,
                stepHeight,
                upAxis
              ) {
                if (ghostObject && typeof ghostObject === "object")
                  ghostObject = ghostObject.ptr;
                if (convexShape && typeof convexShape === "object")
                  convexShape = convexShape.ptr;
                if (stepHeight && typeof stepHeight === "object")
                  stepHeight = stepHeight.ptr;
                if (upAxis && typeof upAxis === "object") upAxis = upAxis.ptr;
                if (upAxis === undefined) {
                  this.ptr =
                    _emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_3(
                      ghostObject,
                      convexShape,
                      stepHeight
                    );
                  getCache(btKinematicCharacterController)[this.ptr] = this;
                  return;
                }
                this.ptr =
                  _emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_4(
                    ghostObject,
                    convexShape,
                    stepHeight,
                    upAxis
                  );
                getCache(btKinematicCharacterController)[this.ptr] = this;
              }
              btKinematicCharacterController.prototype = Object.create(
                btActionInterface.prototype
              );
              btKinematicCharacterController.prototype.constructor =
                btKinematicCharacterController;
              btKinematicCharacterController.prototype.__class__ =
                btKinematicCharacterController;
              btKinematicCharacterController.__cache__ = {};
              Module["btKinematicCharacterController"] =
                btKinematicCharacterController;
              btKinematicCharacterController.prototype["setUp"] =
                btKinematicCharacterController.prototype.setUp = function (
                  upAxis
                ) {
                  var self = this.ptr;
                  if (upAxis && typeof upAxis === "object") upAxis = upAxis.ptr;
                  _emscripten_bind_btKinematicCharacterController_setUp_1(
                    self,
                    upAxis
                  );
                };
              btKinematicCharacterController.prototype["setWalkDirection"] =
                btKinematicCharacterController.prototype.setWalkDirection =
                  function (walkDirection) {
                    var self = this.ptr;
                    if (walkDirection && typeof walkDirection === "object")
                      walkDirection = walkDirection.ptr;
                    _emscripten_bind_btKinematicCharacterController_setWalkDirection_1(
                      self,
                      walkDirection
                    );
                  };
              btKinematicCharacterController.prototype[
                "setVelocityForTimeInterval"
              ] = btKinematicCharacterController.prototype.setVelocityForTimeInterval =
                function (velocity, timeInterval) {
                  var self = this.ptr;
                  if (velocity && typeof velocity === "object")
                    velocity = velocity.ptr;
                  if (timeInterval && typeof timeInterval === "object")
                    timeInterval = timeInterval.ptr;
                  _emscripten_bind_btKinematicCharacterController_setVelocityForTimeInterval_2(
                    self,
                    velocity,
                    timeInterval
                  );
                };
              btKinematicCharacterController.prototype["reset"] =
                btKinematicCharacterController.prototype.reset = function (
                  collisionWorld
                ) {
                  var self = this.ptr;
                  if (collisionWorld && typeof collisionWorld === "object")
                    collisionWorld = collisionWorld.ptr;
                  _emscripten_bind_btKinematicCharacterController_reset_1(
                    self,
                    collisionWorld
                  );
                };
              btKinematicCharacterController.prototype["warp"] =
                btKinematicCharacterController.prototype.warp = function (
                  origin
                ) {
                  var self = this.ptr;
                  if (origin && typeof origin === "object") origin = origin.ptr;
                  _emscripten_bind_btKinematicCharacterController_warp_1(
                    self,
                    origin
                  );
                };
              btKinematicCharacterController.prototype["preStep"] =
                btKinematicCharacterController.prototype.preStep = function (
                  collisionWorld
                ) {
                  var self = this.ptr;
                  if (collisionWorld && typeof collisionWorld === "object")
                    collisionWorld = collisionWorld.ptr;
                  _emscripten_bind_btKinematicCharacterController_preStep_1(
                    self,
                    collisionWorld
                  );
                };
              btKinematicCharacterController.prototype["playerStep"] =
                btKinematicCharacterController.prototype.playerStep = function (
                  collisionWorld,
                  dt
                ) {
                  var self = this.ptr;
                  if (collisionWorld && typeof collisionWorld === "object")
                    collisionWorld = collisionWorld.ptr;
                  if (dt && typeof dt === "object") dt = dt.ptr;
                  _emscripten_bind_btKinematicCharacterController_playerStep_2(
                    self,
                    collisionWorld,
                    dt
                  );
                };
              btKinematicCharacterController.prototype["setFallSpeed"] =
                btKinematicCharacterController.prototype.setFallSpeed =
                  function (fallSpeed) {
                    var self = this.ptr;
                    if (fallSpeed && typeof fallSpeed === "object")
                      fallSpeed = fallSpeed.ptr;
                    _emscripten_bind_btKinematicCharacterController_setFallSpeed_1(
                      self,
                      fallSpeed
                    );
                  };
              btKinematicCharacterController.prototype["setJumpSpeed"] =
                btKinematicCharacterController.prototype.setJumpSpeed =
                  function (jumpSpeed) {
                    var self = this.ptr;
                    if (jumpSpeed && typeof jumpSpeed === "object")
                      jumpSpeed = jumpSpeed.ptr;
                    _emscripten_bind_btKinematicCharacterController_setJumpSpeed_1(
                      self,
                      jumpSpeed
                    );
                  };
              btKinematicCharacterController.prototype["setMaxJumpHeight"] =
                btKinematicCharacterController.prototype.setMaxJumpHeight =
                  function (maxJumpHeight) {
                    var self = this.ptr;
                    if (maxJumpHeight && typeof maxJumpHeight === "object")
                      maxJumpHeight = maxJumpHeight.ptr;
                    _emscripten_bind_btKinematicCharacterController_setMaxJumpHeight_1(
                      self,
                      maxJumpHeight
                    );
                  };
              btKinematicCharacterController.prototype["canJump"] =
                btKinematicCharacterController.prototype.canJump = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btKinematicCharacterController_canJump_0(
                    self
                  );
                };
              btKinematicCharacterController.prototype["jump"] =
                btKinematicCharacterController.prototype.jump = function (v) {
                  var self = this.ptr;
                  if (v && typeof v === "object") v = v.ptr;
                  if (v === undefined) {
                    _emscripten_bind_btKinematicCharacterController_jump_0(
                      self
                    );
                    return;
                  }
                  _emscripten_bind_btKinematicCharacterController_jump_1(
                    self,
                    v
                  );
                };
              btKinematicCharacterController.prototype["setGravity"] =
                btKinematicCharacterController.prototype.setGravity = function (
                  gravity
                ) {
                  var self = this.ptr;
                  if (gravity && typeof gravity === "object")
                    gravity = gravity.ptr;
                  _emscripten_bind_btKinematicCharacterController_setGravity_1(
                    self,
                    gravity
                  );
                };
              btKinematicCharacterController.prototype["getGravity"] =
                btKinematicCharacterController.prototype.getGravity =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btKinematicCharacterController_getGravity_0(
                        self
                      ),
                      btVector3
                    );
                  };
              btKinematicCharacterController.prototype["setMaxSlope"] =
                btKinematicCharacterController.prototype.setMaxSlope =
                  function (slopeRadians) {
                    var self = this.ptr;
                    if (slopeRadians && typeof slopeRadians === "object")
                      slopeRadians = slopeRadians.ptr;
                    _emscripten_bind_btKinematicCharacterController_setMaxSlope_1(
                      self,
                      slopeRadians
                    );
                  };
              btKinematicCharacterController.prototype["getMaxSlope"] =
                btKinematicCharacterController.prototype.getMaxSlope =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btKinematicCharacterController_getMaxSlope_0(
                      self
                    );
                  };
              btKinematicCharacterController.prototype["getGhostObject"] =
                btKinematicCharacterController.prototype.getGhostObject =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btKinematicCharacterController_getGhostObject_0(
                        self
                      ),
                      btPairCachingGhostObject
                    );
                  };
              btKinematicCharacterController.prototype["setUseGhostSweepTest"] =
                btKinematicCharacterController.prototype.setUseGhostSweepTest =
                  function (useGhostObjectSweepTest) {
                    var self = this.ptr;
                    if (
                      useGhostObjectSweepTest &&
                      typeof useGhostObjectSweepTest === "object"
                    )
                      useGhostObjectSweepTest = useGhostObjectSweepTest.ptr;
                    _emscripten_bind_btKinematicCharacterController_setUseGhostSweepTest_1(
                      self,
                      useGhostObjectSweepTest
                    );
                  };
              btKinematicCharacterController.prototype["onGround"] =
                btKinematicCharacterController.prototype.onGround =
                  function () {
                    var self = this.ptr;
                    return !!_emscripten_bind_btKinematicCharacterController_onGround_0(
                      self
                    );
                  };
              btKinematicCharacterController.prototype["setUpInterpolate"] =
                btKinematicCharacterController.prototype.setUpInterpolate =
                  function (value) {
                    var self = this.ptr;
                    if (value && typeof value === "object") value = value.ptr;
                    _emscripten_bind_btKinematicCharacterController_setUpInterpolate_1(
                      self,
                      value
                    );
                  };
              btKinematicCharacterController.prototype["updateAction"] =
                btKinematicCharacterController.prototype.updateAction =
                  function (collisionWorld, deltaTimeStep) {
                    var self = this.ptr;
                    if (collisionWorld && typeof collisionWorld === "object")
                      collisionWorld = collisionWorld.ptr;
                    if (deltaTimeStep && typeof deltaTimeStep === "object")
                      deltaTimeStep = deltaTimeStep.ptr;
                    _emscripten_bind_btKinematicCharacterController_updateAction_2(
                      self,
                      collisionWorld,
                      deltaTimeStep
                    );
                  };
              btKinematicCharacterController.prototype["__destroy__"] =
                btKinematicCharacterController.prototype.__destroy__ =
                  function () {
                    var self = this.ptr;
                    _emscripten_bind_btKinematicCharacterController___destroy___0(
                      self
                    );
                  };
              function btStaticPlaneShape(planeNormal, planeConstant) {
                if (planeNormal && typeof planeNormal === "object")
                  planeNormal = planeNormal.ptr;
                if (planeConstant && typeof planeConstant === "object")
                  planeConstant = planeConstant.ptr;
                this.ptr =
                  _emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2(
                    planeNormal,
                    planeConstant
                  );
                getCache(btStaticPlaneShape)[this.ptr] = this;
              }
              btStaticPlaneShape.prototype = Object.create(
                btConcaveShape.prototype
              );
              btStaticPlaneShape.prototype.constructor = btStaticPlaneShape;
              btStaticPlaneShape.prototype.__class__ = btStaticPlaneShape;
              btStaticPlaneShape.__cache__ = {};
              Module["btStaticPlaneShape"] = btStaticPlaneShape;
              btStaticPlaneShape.prototype["getPlaneNormal"] =
                btStaticPlaneShape.prototype.getPlaneNormal = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btStaticPlaneShape_getPlaneNormal_0(self),
                    btVector3
                  );
                };
              btStaticPlaneShape.prototype["setPlaneConstant"] =
                btStaticPlaneShape.prototype.setPlaneConstant = function (v) {
                  var self = this.ptr;
                  if (v && typeof v === "object") v = v.ptr;
                  _emscripten_bind_btStaticPlaneShape_setPlaneConstant_1(
                    self,
                    v
                  );
                };
              btStaticPlaneShape.prototype["setLocalScaling"] =
                btStaticPlaneShape.prototype.setLocalScaling = function (
                  scaling
                ) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btStaticPlaneShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btStaticPlaneShape.prototype["getLocalScaling"] =
                btStaticPlaneShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btStaticPlaneShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btStaticPlaneShape.prototype["calculateLocalInertia"] =
                btStaticPlaneShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btStaticPlaneShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btStaticPlaneShape.prototype["isCompound"] =
                btStaticPlaneShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btStaticPlaneShape_isCompound_0(
                    self
                  );
                };
              btStaticPlaneShape.prototype["getUserIndex"] =
                btStaticPlaneShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btStaticPlaneShape_getUserIndex_0(
                    self
                  );
                };
              btStaticPlaneShape.prototype["setUserIndex"] =
                btStaticPlaneShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btStaticPlaneShape_setUserIndex_1(
                    self,
                    index
                  );
                };
              btStaticPlaneShape.prototype["getAabb"] =
                btStaticPlaneShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btStaticPlaneShape_getAabb_3(
                    self,
                    t,
                    min,
                    max
                  );
                };
              btStaticPlaneShape.prototype["getLocalBoundingSphere"] =
                btStaticPlaneShape.prototype.getLocalBoundingSphere =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btStaticPlaneShape_getLocalBoundingSphere_0(
                      self
                    );
                  };
              btStaticPlaneShape.prototype["__destroy__"] =
                btStaticPlaneShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btStaticPlaneShape___destroy___0(self);
                };
              function btOverlappingPairCache() {
                throw "cannot construct a btOverlappingPairCache, no constructor in IDL";
              }
              btOverlappingPairCache.prototype = Object.create(
                WrapperObject.prototype
              );
              btOverlappingPairCache.prototype.constructor =
                btOverlappingPairCache;
              btOverlappingPairCache.prototype.__class__ =
                btOverlappingPairCache;
              btOverlappingPairCache.__cache__ = {};
              Module["btOverlappingPairCache"] = btOverlappingPairCache;
              btOverlappingPairCache.prototype["setInternalGhostPairCallback"] =
                btOverlappingPairCache.prototype.setInternalGhostPairCallback =
                  function (ghostPairCallback) {
                    var self = this.ptr;
                    if (
                      ghostPairCallback &&
                      typeof ghostPairCallback === "object"
                    )
                      ghostPairCallback = ghostPairCallback.ptr;
                    _emscripten_bind_btOverlappingPairCache_setInternalGhostPairCallback_1(
                      self,
                      ghostPairCallback
                    );
                  };
              btOverlappingPairCache.prototype["getNumOverlappingPairs"] =
                btOverlappingPairCache.prototype.getNumOverlappingPairs =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btOverlappingPairCache_getNumOverlappingPairs_0(
                      self
                    );
                  };
              btOverlappingPairCache.prototype["__destroy__"] =
                btOverlappingPairCache.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btOverlappingPairCache___destroy___0(self);
                };
              function btVector3(x, y, z) {
                if (x && typeof x === "object") x = x.ptr;
                if (y && typeof y === "object") y = y.ptr;
                if (z && typeof z === "object") z = z.ptr;
                if (x === undefined) {
                  this.ptr = _emscripten_bind_btVector3_btVector3_0();
                  getCache(btVector3)[this.ptr] = this;
                  return;
                }
                if (y === undefined) {
                  this.ptr = _emscripten_bind_btVector3_btVector3_1(x);
                  getCache(btVector3)[this.ptr] = this;
                  return;
                }
                if (z === undefined) {
                  this.ptr = _emscripten_bind_btVector3_btVector3_2(x, y);
                  getCache(btVector3)[this.ptr] = this;
                  return;
                }
                this.ptr = _emscripten_bind_btVector3_btVector3_3(x, y, z);
                getCache(btVector3)[this.ptr] = this;
              }
              btVector3.prototype = Object.create(WrapperObject.prototype);
              btVector3.prototype.constructor = btVector3;
              btVector3.prototype.__class__ = btVector3;
              btVector3.__cache__ = {};
              Module["btVector3"] = btVector3;
              btVector3.prototype["x"] = btVector3.prototype.x = function () {
                var self = this.ptr;
                return _emscripten_bind_btVector3_x_0(self);
              };
              btVector3.prototype["y"] = btVector3.prototype.y = function () {
                var self = this.ptr;
                return _emscripten_bind_btVector3_y_0(self);
              };
              btVector3.prototype["z"] = btVector3.prototype.z = function () {
                var self = this.ptr;
                return _emscripten_bind_btVector3_z_0(self);
              };
              btVector3.prototype["setX"] = btVector3.prototype.setX =
                function (x) {
                  var self = this.ptr;
                  if (x && typeof x === "object") x = x.ptr;
                  _emscripten_bind_btVector3_setX_1(self, x);
                };
              btVector3.prototype["setY"] = btVector3.prototype.setY =
                function (y) {
                  var self = this.ptr;
                  if (y && typeof y === "object") y = y.ptr;
                  _emscripten_bind_btVector3_setY_1(self, y);
                };
              btVector3.prototype["setZ"] = btVector3.prototype.setZ =
                function (z) {
                  var self = this.ptr;
                  if (z && typeof z === "object") z = z.ptr;
                  _emscripten_bind_btVector3_setZ_1(self, z);
                };
              btVector3.prototype["setValue"] = btVector3.prototype.setValue =
                function (x, y, z) {
                  var self = this.ptr;
                  if (x && typeof x === "object") x = x.ptr;
                  if (y && typeof y === "object") y = y.ptr;
                  if (z && typeof z === "object") z = z.ptr;
                  _emscripten_bind_btVector3_setValue_3(self, x, y, z);
                };
              btVector3.prototype["__destroy__"] =
                btVector3.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btVector3___destroy___0(self);
                };
              function btSphereShape(radius) {
                if (radius && typeof radius === "object") radius = radius.ptr;
                this.ptr =
                  _emscripten_bind_btSphereShape_btSphereShape_1(radius);
                getCache(btSphereShape)[this.ptr] = this;
              }
              btSphereShape.prototype = Object.create(
                btConvexInternalShape.prototype
              );
              btSphereShape.prototype.constructor = btSphereShape;
              btSphereShape.prototype.__class__ = btSphereShape;
              btSphereShape.__cache__ = {};
              Module["btSphereShape"] = btSphereShape;
              btSphereShape.prototype["setMargin"] =
                btSphereShape.prototype.setMargin = function (margin) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btSphereShape_setMargin_1(self, margin);
                };
              btSphereShape.prototype["getMargin"] =
                btSphereShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btSphereShape_getMargin_0(self);
                };
              btSphereShape.prototype["setUnscaledRadius"] =
                btSphereShape.prototype.setUnscaledRadius = function (radius) {
                  var self = this.ptr;
                  if (radius && typeof radius === "object") radius = radius.ptr;
                  _emscripten_bind_btSphereShape_setUnscaledRadius_1(
                    self,
                    radius
                  );
                };
              btSphereShape.prototype["setLocalScaling"] =
                btSphereShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btSphereShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btSphereShape.prototype["getLocalScaling"] =
                btSphereShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btSphereShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btSphereShape.prototype["calculateLocalInertia"] =
                btSphereShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btSphereShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btSphereShape.prototype["isCompound"] =
                btSphereShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btSphereShape_isCompound_0(self);
                };
              btSphereShape.prototype["getUserIndex"] =
                btSphereShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btSphereShape_getUserIndex_0(self);
                };
              btSphereShape.prototype["setUserIndex"] =
                btSphereShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btSphereShape_setUserIndex_1(self, index);
                };
              btSphereShape.prototype["getAabb"] =
                btSphereShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btSphereShape_getAabb_3(self, t, min, max);
                };
              btSphereShape.prototype["getLocalBoundingSphere"] =
                btSphereShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btSphereShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btSphereShape.prototype["getImplicitShapeDimensions"] =
                btSphereShape.prototype.getImplicitShapeDimensions =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btSphereShape_getImplicitShapeDimensions_0(
                        self
                      ),
                      btVector3
                    );
                  };
              btSphereShape.prototype["__destroy__"] =
                btSphereShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btSphereShape___destroy___0(self);
                };
              function btDefaultCollisionConstructionInfo() {
                this.ptr =
                  _emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0();
                getCache(btDefaultCollisionConstructionInfo)[this.ptr] = this;
              }
              btDefaultCollisionConstructionInfo.prototype = Object.create(
                WrapperObject.prototype
              );
              btDefaultCollisionConstructionInfo.prototype.constructor =
                btDefaultCollisionConstructionInfo;
              btDefaultCollisionConstructionInfo.prototype.__class__ =
                btDefaultCollisionConstructionInfo;
              btDefaultCollisionConstructionInfo.__cache__ = {};
              Module["btDefaultCollisionConstructionInfo"] =
                btDefaultCollisionConstructionInfo;
              btDefaultCollisionConstructionInfo.prototype["__destroy__"] =
                btDefaultCollisionConstructionInfo.prototype.__destroy__ =
                  function () {
                    var self = this.ptr;
                    _emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0(
                      self
                    );
                  };
              function btEmptyShape() {
                this.ptr = _emscripten_bind_btEmptyShape_btEmptyShape_0();
                getCache(btEmptyShape)[this.ptr] = this;
              }
              btEmptyShape.prototype = Object.create(btConcaveShape.prototype);
              btEmptyShape.prototype.constructor = btEmptyShape;
              btEmptyShape.prototype.__class__ = btEmptyShape;
              btEmptyShape.__cache__ = {};
              Module["btEmptyShape"] = btEmptyShape;
              btEmptyShape.prototype["setLocalScaling"] =
                btEmptyShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btEmptyShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btEmptyShape.prototype["getLocalScaling"] =
                btEmptyShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btEmptyShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btEmptyShape.prototype["calculateLocalInertia"] =
                btEmptyShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btEmptyShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btEmptyShape.prototype["isCompound"] =
                btEmptyShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btEmptyShape_isCompound_0(self);
                };
              btEmptyShape.prototype["getUserIndex"] =
                btEmptyShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btEmptyShape_getUserIndex_0(self);
                };
              btEmptyShape.prototype["setUserIndex"] =
                btEmptyShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btEmptyShape_setUserIndex_1(self, index);
                };
              btEmptyShape.prototype["getAabb"] =
                btEmptyShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btEmptyShape_getAabb_3(self, t, min, max);
                };
              btEmptyShape.prototype["getLocalBoundingSphere"] =
                btEmptyShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btEmptyShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btEmptyShape.prototype["__destroy__"] =
                btEmptyShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btEmptyShape___destroy___0(self);
                };
              function btConstraintSetting() {
                this.ptr =
                  _emscripten_bind_btConstraintSetting_btConstraintSetting_0();
                getCache(btConstraintSetting)[this.ptr] = this;
              }
              btConstraintSetting.prototype = Object.create(
                WrapperObject.prototype
              );
              btConstraintSetting.prototype.constructor = btConstraintSetting;
              btConstraintSetting.prototype.__class__ = btConstraintSetting;
              btConstraintSetting.__cache__ = {};
              Module["btConstraintSetting"] = btConstraintSetting;
              btConstraintSetting.prototype["get_m_tau"] =
                btConstraintSetting.prototype.get_m_tau = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConstraintSetting_get_m_tau_0(self);
                };
              btConstraintSetting.prototype["set_m_tau"] =
                btConstraintSetting.prototype.set_m_tau = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btConstraintSetting_set_m_tau_1(self, arg0);
                };
              Object.defineProperty(btConstraintSetting.prototype, "m_tau", {
                get: btConstraintSetting.prototype.get_m_tau,
                set: btConstraintSetting.prototype.set_m_tau,
              });
              btConstraintSetting.prototype["get_m_damping"] =
                btConstraintSetting.prototype.get_m_damping = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConstraintSetting_get_m_damping_0(
                    self
                  );
                };
              btConstraintSetting.prototype["set_m_damping"] =
                btConstraintSetting.prototype.set_m_damping = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btConstraintSetting_set_m_damping_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btConstraintSetting.prototype,
                "m_damping",
                {
                  get: btConstraintSetting.prototype.get_m_damping,
                  set: btConstraintSetting.prototype.set_m_damping,
                }
              );
              btConstraintSetting.prototype["get_m_impulseClamp"] =
                btConstraintSetting.prototype.get_m_impulseClamp = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btConstraintSetting_get_m_impulseClamp_0(
                    self
                  );
                };
              btConstraintSetting.prototype["set_m_impulseClamp"] =
                btConstraintSetting.prototype.set_m_impulseClamp = function (
                  arg0
                ) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_btConstraintSetting_set_m_impulseClamp_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                btConstraintSetting.prototype,
                "m_impulseClamp",
                {
                  get: btConstraintSetting.prototype.get_m_impulseClamp,
                  set: btConstraintSetting.prototype.set_m_impulseClamp,
                }
              );
              btConstraintSetting.prototype["__destroy__"] =
                btConstraintSetting.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConstraintSetting___destroy___0(self);
                };
              function LocalShapeInfo() {
                throw "cannot construct a LocalShapeInfo, no constructor in IDL";
              }
              LocalShapeInfo.prototype = Object.create(WrapperObject.prototype);
              LocalShapeInfo.prototype.constructor = LocalShapeInfo;
              LocalShapeInfo.prototype.__class__ = LocalShapeInfo;
              LocalShapeInfo.__cache__ = {};
              Module["LocalShapeInfo"] = LocalShapeInfo;
              LocalShapeInfo.prototype["get_m_shapePart"] =
                LocalShapeInfo.prototype.get_m_shapePart = function () {
                  var self = this.ptr;
                  return _emscripten_bind_LocalShapeInfo_get_m_shapePart_0(
                    self
                  );
                };
              LocalShapeInfo.prototype["set_m_shapePart"] =
                LocalShapeInfo.prototype.set_m_shapePart = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_LocalShapeInfo_set_m_shapePart_1(self, arg0);
                };
              Object.defineProperty(LocalShapeInfo.prototype, "m_shapePart", {
                get: LocalShapeInfo.prototype.get_m_shapePart,
                set: LocalShapeInfo.prototype.set_m_shapePart,
              });
              LocalShapeInfo.prototype["get_m_triangleIndex"] =
                LocalShapeInfo.prototype.get_m_triangleIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0(
                    self
                  );
                };
              LocalShapeInfo.prototype["set_m_triangleIndex"] =
                LocalShapeInfo.prototype.set_m_triangleIndex = function (arg0) {
                  var self = this.ptr;
                  if (arg0 && typeof arg0 === "object") arg0 = arg0.ptr;
                  _emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1(
                    self,
                    arg0
                  );
                };
              Object.defineProperty(
                LocalShapeInfo.prototype,
                "m_triangleIndex",
                {
                  get: LocalShapeInfo.prototype.get_m_triangleIndex,
                  set: LocalShapeInfo.prototype.set_m_triangleIndex,
                }
              );
              LocalShapeInfo.prototype["__destroy__"] =
                LocalShapeInfo.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_LocalShapeInfo___destroy___0(self);
                };
              function btVector3Array() {
                throw "cannot construct a btVector3Array, no constructor in IDL";
              }
              btVector3Array.prototype = Object.create(WrapperObject.prototype);
              btVector3Array.prototype.constructor = btVector3Array;
              btVector3Array.prototype.__class__ = btVector3Array;
              btVector3Array.__cache__ = {};
              Module["btVector3Array"] = btVector3Array;
              btVector3Array.prototype["size"] = btVector3Array.prototype.size =
                function () {
                  var self = this.ptr;
                  return _emscripten_bind_btVector3Array_size_0(self);
                };
              btVector3Array.prototype["at"] = btVector3Array.prototype.at =
                function (n) {
                  var self = this.ptr;
                  if (n && typeof n === "object") n = n.ptr;
                  return wrapPointer(
                    _emscripten_bind_btVector3Array_at_1(self, n),
                    btVector3
                  );
                };
              btVector3Array.prototype["clear"] =
                btVector3Array.prototype.clear = function () {
                  var self = this.ptr;
                  _emscripten_bind_btVector3Array_clear_0(self);
                };
              btVector3Array.prototype["__destroy__"] =
                btVector3Array.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btVector3Array___destroy___0(self);
                };
              function btConstraintSolver() {
                throw "cannot construct a btConstraintSolver, no constructor in IDL";
              }
              btConstraintSolver.prototype = Object.create(
                WrapperObject.prototype
              );
              btConstraintSolver.prototype.constructor = btConstraintSolver;
              btConstraintSolver.prototype.__class__ = btConstraintSolver;
              btConstraintSolver.__cache__ = {};
              Module["btConstraintSolver"] = btConstraintSolver;
              btConstraintSolver.prototype["__destroy__"] =
                btConstraintSolver.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btConstraintSolver___destroy___0(self);
                };
              function btFixedConstraint(rbA, rbB, frameInA, frameInB) {
                if (rbA && typeof rbA === "object") rbA = rbA.ptr;
                if (rbB && typeof rbB === "object") rbB = rbB.ptr;
                if (frameInA && typeof frameInA === "object")
                  frameInA = frameInA.ptr;
                if (frameInB && typeof frameInB === "object")
                  frameInB = frameInB.ptr;
                this.ptr =
                  _emscripten_bind_btFixedConstraint_btFixedConstraint_4(
                    rbA,
                    rbB,
                    frameInA,
                    frameInB
                  );
                getCache(btFixedConstraint)[this.ptr] = this;
              }
              btFixedConstraint.prototype = Object.create(
                btTypedConstraint.prototype
              );
              btFixedConstraint.prototype.constructor = btFixedConstraint;
              btFixedConstraint.prototype.__class__ = btFixedConstraint;
              btFixedConstraint.__cache__ = {};
              Module["btFixedConstraint"] = btFixedConstraint;
              btFixedConstraint.prototype["enableFeedback"] =
                btFixedConstraint.prototype.enableFeedback = function (
                  needsFeedback
                ) {
                  var self = this.ptr;
                  if (needsFeedback && typeof needsFeedback === "object")
                    needsFeedback = needsFeedback.ptr;
                  _emscripten_bind_btFixedConstraint_enableFeedback_1(
                    self,
                    needsFeedback
                  );
                };
              btFixedConstraint.prototype["getBreakingImpulseThreshold"] =
                btFixedConstraint.prototype.getBreakingImpulseThreshold =
                  function () {
                    var self = this.ptr;
                    return _emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0(
                      self
                    );
                  };
              btFixedConstraint.prototype["setBreakingImpulseThreshold"] =
                btFixedConstraint.prototype.setBreakingImpulseThreshold =
                  function (threshold) {
                    var self = this.ptr;
                    if (threshold && typeof threshold === "object")
                      threshold = threshold.ptr;
                    _emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1(
                      self,
                      threshold
                    );
                  };
              btFixedConstraint.prototype["getParam"] =
                btFixedConstraint.prototype.getParam = function (num, axis) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  return _emscripten_bind_btFixedConstraint_getParam_2(
                    self,
                    num,
                    axis
                  );
                };
              btFixedConstraint.prototype["setParam"] =
                btFixedConstraint.prototype.setParam = function (
                  num,
                  value,
                  axis
                ) {
                  var self = this.ptr;
                  if (num && typeof num === "object") num = num.ptr;
                  if (value && typeof value === "object") value = value.ptr;
                  if (axis && typeof axis === "object") axis = axis.ptr;
                  _emscripten_bind_btFixedConstraint_setParam_3(
                    self,
                    num,
                    value,
                    axis
                  );
                };
              btFixedConstraint.prototype["__destroy__"] =
                btFixedConstraint.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btFixedConstraint___destroy___0(self);
                };
              function btCollisionDispatcher(conf) {
                if (conf && typeof conf === "object") conf = conf.ptr;
                this.ptr =
                  _emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1(
                    conf
                  );
                getCache(btCollisionDispatcher)[this.ptr] = this;
              }
              btCollisionDispatcher.prototype = Object.create(
                btDispatcher.prototype
              );
              btCollisionDispatcher.prototype.constructor =
                btCollisionDispatcher;
              btCollisionDispatcher.prototype.__class__ = btCollisionDispatcher;
              btCollisionDispatcher.__cache__ = {};
              Module["btCollisionDispatcher"] = btCollisionDispatcher;
              btCollisionDispatcher.prototype["setDispatcherFlags"] =
                btCollisionDispatcher.prototype.setDispatcherFlags = function (
                  flags
                ) {
                  var self = this.ptr;
                  if (flags && typeof flags === "object") flags = flags.ptr;
                  _emscripten_bind_btCollisionDispatcher_setDispatcherFlags_1(
                    self,
                    flags
                  );
                };
              btCollisionDispatcher.prototype["getNumManifolds"] =
                btCollisionDispatcher.prototype.getNumManifolds = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCollisionDispatcher_getNumManifolds_0(
                    self
                  );
                };
              btCollisionDispatcher.prototype["getManifoldByIndexInternal"] =
                btCollisionDispatcher.prototype.getManifoldByIndexInternal =
                  function (index) {
                    var self = this.ptr;
                    if (index && typeof index === "object") index = index.ptr;
                    return wrapPointer(
                      _emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1(
                        self,
                        index
                      ),
                      btPersistentManifold
                    );
                  };
              btCollisionDispatcher.prototype["__destroy__"] =
                btCollisionDispatcher.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btCollisionDispatcher___destroy___0(self);
                };
              function btRigidBody(constructionInfo) {
                if (constructionInfo && typeof constructionInfo === "object")
                  constructionInfo = constructionInfo.ptr;
                this.ptr =
                  _emscripten_bind_btRigidBody_btRigidBody_1(constructionInfo);
                getCache(btRigidBody)[this.ptr] = this;
              }
              btRigidBody.prototype = Object.create(
                btCollisionObject.prototype
              );
              btRigidBody.prototype.constructor = btRigidBody;
              btRigidBody.prototype.__class__ = btRigidBody;
              btRigidBody.__cache__ = {};
              Module["btRigidBody"] = btRigidBody;
              btRigidBody.prototype["getCenterOfMassTransform"] =
                btRigidBody.prototype.getCenterOfMassTransform = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getCenterOfMassTransform_0(
                      self
                    ),
                    btTransform
                  );
                };
              btRigidBody.prototype["setCenterOfMassTransform"] =
                btRigidBody.prototype.setCenterOfMassTransform = function (
                  xform
                ) {
                  var self = this.ptr;
                  if (xform && typeof xform === "object") xform = xform.ptr;
                  _emscripten_bind_btRigidBody_setCenterOfMassTransform_1(
                    self,
                    xform
                  );
                };
              btRigidBody.prototype["setSleepingThresholds"] =
                btRigidBody.prototype.setSleepingThresholds = function (
                  linear,
                  angular
                ) {
                  var self = this.ptr;
                  if (linear && typeof linear === "object") linear = linear.ptr;
                  if (angular && typeof angular === "object")
                    angular = angular.ptr;
                  _emscripten_bind_btRigidBody_setSleepingThresholds_2(
                    self,
                    linear,
                    angular
                  );
                };
              btRigidBody.prototype["getLinearSleepingThreshold"] =
                btRigidBody.prototype.getLinearSleepingThreshold = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBody_getLinearSleepingThreshold_0(
                    self
                  );
                };
              btRigidBody.prototype["getLinearDamping"] =
                btRigidBody.prototype.getLinearDamping = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBody_getLinearDamping_0(self);
                };
              btRigidBody.prototype["getAngularDamping"] =
                btRigidBody.prototype.getAngularDamping = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBody_getAngularDamping_0(self);
                };
              btRigidBody.prototype["setDamping"] =
                btRigidBody.prototype.setDamping = function (
                  lin_damping,
                  ang_damping
                ) {
                  var self = this.ptr;
                  if (lin_damping && typeof lin_damping === "object")
                    lin_damping = lin_damping.ptr;
                  if (ang_damping && typeof ang_damping === "object")
                    ang_damping = ang_damping.ptr;
                  _emscripten_bind_btRigidBody_setDamping_2(
                    self,
                    lin_damping,
                    ang_damping
                  );
                };
              btRigidBody.prototype["setMassProps"] =
                btRigidBody.prototype.setMassProps = function (mass, inertia) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btRigidBody_setMassProps_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btRigidBody.prototype["getLinearFactor"] =
                btRigidBody.prototype.getLinearFactor = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getLinearFactor_0(self),
                    btVector3
                  );
                };
              btRigidBody.prototype["setLinearFactor"] =
                btRigidBody.prototype.setLinearFactor = function (
                  linearFactor
                ) {
                  var self = this.ptr;
                  if (linearFactor && typeof linearFactor === "object")
                    linearFactor = linearFactor.ptr;
                  _emscripten_bind_btRigidBody_setLinearFactor_1(
                    self,
                    linearFactor
                  );
                };
              btRigidBody.prototype["applyTorque"] =
                btRigidBody.prototype.applyTorque = function (torque) {
                  var self = this.ptr;
                  if (torque && typeof torque === "object") torque = torque.ptr;
                  _emscripten_bind_btRigidBody_applyTorque_1(self, torque);
                };
              btRigidBody.prototype["applyForce"] =
                btRigidBody.prototype.applyForce = function (force, rel_pos) {
                  var self = this.ptr;
                  if (force && typeof force === "object") force = force.ptr;
                  if (rel_pos && typeof rel_pos === "object")
                    rel_pos = rel_pos.ptr;
                  _emscripten_bind_btRigidBody_applyForce_2(
                    self,
                    force,
                    rel_pos
                  );
                };
              btRigidBody.prototype["applyCentralForce"] =
                btRigidBody.prototype.applyCentralForce = function (force) {
                  var self = this.ptr;
                  if (force && typeof force === "object") force = force.ptr;
                  _emscripten_bind_btRigidBody_applyCentralForce_1(self, force);
                };
              btRigidBody.prototype["applyTorqueImpulse"] =
                btRigidBody.prototype.applyTorqueImpulse = function (torque) {
                  var self = this.ptr;
                  if (torque && typeof torque === "object") torque = torque.ptr;
                  _emscripten_bind_btRigidBody_applyTorqueImpulse_1(
                    self,
                    torque
                  );
                };
              btRigidBody.prototype["applyImpulse"] =
                btRigidBody.prototype.applyImpulse = function (
                  impulse,
                  rel_pos
                ) {
                  var self = this.ptr;
                  if (impulse && typeof impulse === "object")
                    impulse = impulse.ptr;
                  if (rel_pos && typeof rel_pos === "object")
                    rel_pos = rel_pos.ptr;
                  _emscripten_bind_btRigidBody_applyImpulse_2(
                    self,
                    impulse,
                    rel_pos
                  );
                };
              btRigidBody.prototype["applyCentralImpulse"] =
                btRigidBody.prototype.applyCentralImpulse = function (impulse) {
                  var self = this.ptr;
                  if (impulse && typeof impulse === "object")
                    impulse = impulse.ptr;
                  _emscripten_bind_btRigidBody_applyCentralImpulse_1(
                    self,
                    impulse
                  );
                };
              btRigidBody.prototype["updateInertiaTensor"] =
                btRigidBody.prototype.updateInertiaTensor = function () {
                  var self = this.ptr;
                  _emscripten_bind_btRigidBody_updateInertiaTensor_0(self);
                };
              btRigidBody.prototype["getLinearVelocity"] =
                btRigidBody.prototype.getLinearVelocity = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getLinearVelocity_0(self),
                    btVector3
                  );
                };
              btRigidBody.prototype["getAngularVelocity"] =
                btRigidBody.prototype.getAngularVelocity = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getAngularVelocity_0(self),
                    btVector3
                  );
                };
              btRigidBody.prototype["setLinearVelocity"] =
                btRigidBody.prototype.setLinearVelocity = function (lin_vel) {
                  var self = this.ptr;
                  if (lin_vel && typeof lin_vel === "object")
                    lin_vel = lin_vel.ptr;
                  _emscripten_bind_btRigidBody_setLinearVelocity_1(
                    self,
                    lin_vel
                  );
                };
              btRigidBody.prototype["setAngularVelocity"] =
                btRigidBody.prototype.setAngularVelocity = function (ang_vel) {
                  var self = this.ptr;
                  if (ang_vel && typeof ang_vel === "object")
                    ang_vel = ang_vel.ptr;
                  _emscripten_bind_btRigidBody_setAngularVelocity_1(
                    self,
                    ang_vel
                  );
                };
              btRigidBody.prototype["getMotionState"] =
                btRigidBody.prototype.getMotionState = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getMotionState_0(self),
                    btMotionState
                  );
                };
              btRigidBody.prototype["setMotionState"] =
                btRigidBody.prototype.setMotionState = function (motionState) {
                  var self = this.ptr;
                  if (motionState && typeof motionState === "object")
                    motionState = motionState.ptr;
                  _emscripten_bind_btRigidBody_setMotionState_1(
                    self,
                    motionState
                  );
                };
              btRigidBody.prototype["getAngularFactor"] =
                btRigidBody.prototype.getAngularFactor = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getAngularFactor_0(self),
                    btVector3
                  );
                };
              btRigidBody.prototype["setAngularFactor"] =
                btRigidBody.prototype.setAngularFactor = function (
                  angularFactor
                ) {
                  var self = this.ptr;
                  if (angularFactor && typeof angularFactor === "object")
                    angularFactor = angularFactor.ptr;
                  _emscripten_bind_btRigidBody_setAngularFactor_1(
                    self,
                    angularFactor
                  );
                };
              btRigidBody.prototype["upcast"] = btRigidBody.prototype.upcast =
                function (colObj) {
                  var self = this.ptr;
                  if (colObj && typeof colObj === "object") colObj = colObj.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_upcast_1(self, colObj),
                    btRigidBody
                  );
                };
              btRigidBody.prototype["getAabb"] = btRigidBody.prototype.getAabb =
                function (aabbMin, aabbMax) {
                  var self = this.ptr;
                  if (aabbMin && typeof aabbMin === "object")
                    aabbMin = aabbMin.ptr;
                  if (aabbMax && typeof aabbMax === "object")
                    aabbMax = aabbMax.ptr;
                  _emscripten_bind_btRigidBody_getAabb_2(
                    self,
                    aabbMin,
                    aabbMax
                  );
                };
              btRigidBody.prototype["applyGravity"] =
                btRigidBody.prototype.applyGravity = function () {
                  var self = this.ptr;
                  _emscripten_bind_btRigidBody_applyGravity_0(self);
                };
              btRigidBody.prototype["getGravity"] =
                btRigidBody.prototype.getGravity = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getGravity_0(self),
                    btVector3
                  );
                };
              btRigidBody.prototype["setGravity"] =
                btRigidBody.prototype.setGravity = function (acceleration) {
                  var self = this.ptr;
                  if (acceleration && typeof acceleration === "object")
                    acceleration = acceleration.ptr;
                  _emscripten_bind_btRigidBody_setGravity_1(self, acceleration);
                };
              btRigidBody.prototype["getFlags"] =
                btRigidBody.prototype.getFlags = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBody_getFlags_0(self);
                };
              btRigidBody.prototype["setFlags"] =
                btRigidBody.prototype.setFlags = function (flags) {
                  var self = this.ptr;
                  if (flags && typeof flags === "object") flags = flags.ptr;
                  _emscripten_bind_btRigidBody_setFlags_1(self, flags);
                };
              btRigidBody.prototype["wantsSleeping"] =
                btRigidBody.prototype.wantsSleeping = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btRigidBody_wantsSleeping_0(self);
                };
              btRigidBody.prototype["clearForces"] =
                btRigidBody.prototype.clearForces = function () {
                  var self = this.ptr;
                  _emscripten_bind_btRigidBody_clearForces_0(self);
                };
              btRigidBody.prototype["getTotalForce"] =
                btRigidBody.prototype.getTotalForce = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getTotalForce_0(self),
                    btVector3
                  );
                };
              btRigidBody.prototype["getTotalTorque"] =
                btRigidBody.prototype.getTotalTorque = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getTotalTorque_0(self),
                    btVector3
                  );
                };
              btRigidBody.prototype["clearState"] =
                btRigidBody.prototype.clearState = function () {
                  var self = this.ptr;
                  _emscripten_bind_btRigidBody_clearState_0(self);
                };
              btRigidBody.prototype["setAnisotropicFriction"] =
                btRigidBody.prototype.setAnisotropicFriction = function (
                  anisotropicFriction,
                  frictionMode
                ) {
                  var self = this.ptr;
                  if (
                    anisotropicFriction &&
                    typeof anisotropicFriction === "object"
                  )
                    anisotropicFriction = anisotropicFriction.ptr;
                  if (frictionMode && typeof frictionMode === "object")
                    frictionMode = frictionMode.ptr;
                  _emscripten_bind_btRigidBody_setAnisotropicFriction_2(
                    self,
                    anisotropicFriction,
                    frictionMode
                  );
                };
              btRigidBody.prototype["getCollisionShape"] =
                btRigidBody.prototype.getCollisionShape = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getCollisionShape_0(self),
                    btCollisionShape
                  );
                };
              btRigidBody.prototype["getActivationState"] =
                btRigidBody.prototype.getActivationState = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBody_getActivationState_0(
                    self
                  );
                };
              btRigidBody.prototype["setActivationState"] =
                btRigidBody.prototype.setActivationState = function (newState) {
                  var self = this.ptr;
                  if (newState && typeof newState === "object")
                    newState = newState.ptr;
                  _emscripten_bind_btRigidBody_setActivationState_1(
                    self,
                    newState
                  );
                };
              btRigidBody.prototype["forceActivationState"] =
                btRigidBody.prototype.forceActivationState = function (
                  newState
                ) {
                  var self = this.ptr;
                  if (newState && typeof newState === "object")
                    newState = newState.ptr;
                  _emscripten_bind_btRigidBody_forceActivationState_1(
                    self,
                    newState
                  );
                };
              btRigidBody.prototype["activate"] =
                btRigidBody.prototype.activate = function (forceActivation) {
                  var self = this.ptr;
                  if (forceActivation && typeof forceActivation === "object")
                    forceActivation = forceActivation.ptr;
                  if (forceActivation === undefined) {
                    _emscripten_bind_btRigidBody_activate_0(self);
                    return;
                  }
                  _emscripten_bind_btRigidBody_activate_1(
                    self,
                    forceActivation
                  );
                };
              btRigidBody.prototype["isActive"] =
                btRigidBody.prototype.isActive = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btRigidBody_isActive_0(self);
                };
              btRigidBody.prototype["isKinematicObject"] =
                btRigidBody.prototype.isKinematicObject = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btRigidBody_isKinematicObject_0(
                    self
                  );
                };
              btRigidBody.prototype["isStaticObject"] =
                btRigidBody.prototype.isStaticObject = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btRigidBody_isStaticObject_0(self);
                };
              btRigidBody.prototype["isStaticOrKinematicObject"] =
                btRigidBody.prototype.isStaticOrKinematicObject = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btRigidBody_isStaticOrKinematicObject_0(
                    self
                  );
                };
              btRigidBody.prototype["setRestitution"] =
                btRigidBody.prototype.setRestitution = function (r) {
                  var self = this.ptr;
                  if (r && typeof r === "object") r = r.ptr;
                  _emscripten_bind_btRigidBody_setRestitution_1(self, r);
                };
              btRigidBody.prototype["setFriction"] =
                btRigidBody.prototype.setFriction = function (f) {
                  var self = this.ptr;
                  if (f && typeof f === "object") f = f.ptr;
                  _emscripten_bind_btRigidBody_setFriction_1(self, f);
                };
              btRigidBody.prototype["setRollingFriction"] =
                btRigidBody.prototype.setRollingFriction = function (rf) {
                  var self = this.ptr;
                  if (rf && typeof rf === "object") rf = rf.ptr;
                  _emscripten_bind_btRigidBody_setRollingFriction_1(self, rf);
                };
              btRigidBody.prototype["setSpinningFriction"] =
                btRigidBody.prototype.setSpinningFriction = function (sf) {
                  var self = this.ptr;
                  if (sf && typeof sf === "object") sf = sf.ptr;
                  _emscripten_bind_btRigidBody_setSpinningFriction_1(self, sf);
                };
              btRigidBody.prototype["getWorldTransform"] =
                btRigidBody.prototype.getWorldTransform = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btRigidBody_getWorldTransform_0(self),
                    btTransform
                  );
                };
              btRigidBody.prototype["getCollisionFlags"] =
                btRigidBody.prototype.getCollisionFlags = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBody_getCollisionFlags_0(self);
                };
              btRigidBody.prototype["setCollisionFlags"] =
                btRigidBody.prototype.setCollisionFlags = function (flags) {
                  var self = this.ptr;
                  if (flags && typeof flags === "object") flags = flags.ptr;
                  _emscripten_bind_btRigidBody_setCollisionFlags_1(self, flags);
                };
              btRigidBody.prototype["setWorldTransform"] =
                btRigidBody.prototype.setWorldTransform = function (
                  worldTrans
                ) {
                  var self = this.ptr;
                  if (worldTrans && typeof worldTrans === "object")
                    worldTrans = worldTrans.ptr;
                  _emscripten_bind_btRigidBody_setWorldTransform_1(
                    self,
                    worldTrans
                  );
                };
              btRigidBody.prototype["setCollisionShape"] =
                btRigidBody.prototype.setCollisionShape = function (
                  collisionShape
                ) {
                  var self = this.ptr;
                  if (collisionShape && typeof collisionShape === "object")
                    collisionShape = collisionShape.ptr;
                  _emscripten_bind_btRigidBody_setCollisionShape_1(
                    self,
                    collisionShape
                  );
                };
              btRigidBody.prototype["setCcdMotionThreshold"] =
                btRigidBody.prototype.setCcdMotionThreshold = function (
                  ccdMotionThreshold
                ) {
                  var self = this.ptr;
                  if (
                    ccdMotionThreshold &&
                    typeof ccdMotionThreshold === "object"
                  )
                    ccdMotionThreshold = ccdMotionThreshold.ptr;
                  _emscripten_bind_btRigidBody_setCcdMotionThreshold_1(
                    self,
                    ccdMotionThreshold
                  );
                };
              btRigidBody.prototype["setCcdSweptSphereRadius"] =
                btRigidBody.prototype.setCcdSweptSphereRadius = function (
                  radius
                ) {
                  var self = this.ptr;
                  if (radius && typeof radius === "object") radius = radius.ptr;
                  _emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1(
                    self,
                    radius
                  );
                };
              btRigidBody.prototype["getUserIndex"] =
                btRigidBody.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btRigidBody_getUserIndex_0(self);
                };
              btRigidBody.prototype["setUserIndex"] =
                btRigidBody.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btRigidBody_setUserIndex_1(self, index);
                };
              btRigidBody.prototype["setIgnoreCollisionCheck"] =
                btRigidBody.prototype.setIgnoreCollisionCheck = function (
                  co,
                  ig
                ) {
                  var self = this.ptr;
                  if (co && typeof co === "object") co = co.ptr;
                  if (ig && typeof ig === "object") ig = ig.ptr;
                  _emscripten_bind_btRigidBody_setIgnoreCollisionCheck_2(
                    self,
                    co,
                    ig
                  );
                };
              btRigidBody.prototype["__destroy__"] =
                btRigidBody.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btRigidBody___destroy___0(self);
                };
              function btIndexedMeshArray() {
                throw "cannot construct a btIndexedMeshArray, no constructor in IDL";
              }
              btIndexedMeshArray.prototype = Object.create(
                WrapperObject.prototype
              );
              btIndexedMeshArray.prototype.constructor = btIndexedMeshArray;
              btIndexedMeshArray.prototype.__class__ = btIndexedMeshArray;
              btIndexedMeshArray.__cache__ = {};
              Module["btIndexedMeshArray"] = btIndexedMeshArray;
              btIndexedMeshArray.prototype["size"] =
                btIndexedMeshArray.prototype.size = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btIndexedMeshArray_size_0(self);
                };
              btIndexedMeshArray.prototype["at"] =
                btIndexedMeshArray.prototype.at = function (n) {
                  var self = this.ptr;
                  if (n && typeof n === "object") n = n.ptr;
                  return wrapPointer(
                    _emscripten_bind_btIndexedMeshArray_at_1(self, n),
                    btIndexedMesh
                  );
                };
              btIndexedMeshArray.prototype["__destroy__"] =
                btIndexedMeshArray.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btIndexedMeshArray___destroy___0(self);
                };
              function btTransform(q, v) {
                if (q && typeof q === "object") q = q.ptr;
                if (v && typeof v === "object") v = v.ptr;
                if (q === undefined) {
                  this.ptr = _emscripten_bind_btTransform_btTransform_0();
                  getCache(btTransform)[this.ptr] = this;
                  return;
                }
                if (v === undefined) {
                  this.ptr = _emscripten_bind_btTransform_btTransform_1(q);
                  getCache(btTransform)[this.ptr] = this;
                  return;
                }
                this.ptr = _emscripten_bind_btTransform_btTransform_2(q, v);
                getCache(btTransform)[this.ptr] = this;
              }
              btTransform.prototype = Object.create(WrapperObject.prototype);
              btTransform.prototype.constructor = btTransform;
              btTransform.prototype.__class__ = btTransform;
              btTransform.__cache__ = {};
              Module["btTransform"] = btTransform;
              btTransform.prototype["setIdentity"] =
                btTransform.prototype.setIdentity = function () {
                  var self = this.ptr;
                  _emscripten_bind_btTransform_setIdentity_0(self);
                };
              btTransform.prototype["setOrigin"] =
                btTransform.prototype.setOrigin = function (origin) {
                  var self = this.ptr;
                  if (origin && typeof origin === "object") origin = origin.ptr;
                  _emscripten_bind_btTransform_setOrigin_1(self, origin);
                };
              btTransform.prototype["setRotation"] =
                btTransform.prototype.setRotation = function (rotation) {
                  var self = this.ptr;
                  if (rotation && typeof rotation === "object")
                    rotation = rotation.ptr;
                  _emscripten_bind_btTransform_setRotation_1(self, rotation);
                };
              btTransform.prototype["getOrigin"] =
                btTransform.prototype.getOrigin = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btTransform_getOrigin_0(self),
                    btVector3
                  );
                };
              btTransform.prototype["getRotation"] =
                btTransform.prototype.getRotation = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btTransform_getRotation_0(self),
                    btQuaternion
                  );
                };
              btTransform.prototype["getBasis"] =
                btTransform.prototype.getBasis = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btTransform_getBasis_0(self),
                    btMatrix3x3
                  );
                };
              btTransform.prototype["inverse"] = btTransform.prototype.inverse =
                function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btTransform_inverse_0(self),
                    btTransform
                  );
                };
              btTransform.prototype["op_mul"] = btTransform.prototype.op_mul =
                function (t) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  return wrapPointer(
                    _emscripten_bind_btTransform_op_mul_1(self, t),
                    btTransform
                  );
                };
              btTransform.prototype["__destroy__"] =
                btTransform.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btTransform___destroy___0(self);
                };
              function btCylinderShape(halfExtents) {
                if (halfExtents && typeof halfExtents === "object")
                  halfExtents = halfExtents.ptr;
                this.ptr =
                  _emscripten_bind_btCylinderShape_btCylinderShape_1(
                    halfExtents
                  );
                getCache(btCylinderShape)[this.ptr] = this;
              }
              btCylinderShape.prototype = Object.create(
                btConvexInternalShape.prototype
              );
              btCylinderShape.prototype.constructor = btCylinderShape;
              btCylinderShape.prototype.__class__ = btCylinderShape;
              btCylinderShape.__cache__ = {};
              Module["btCylinderShape"] = btCylinderShape;
              btCylinderShape.prototype["setMargin"] =
                btCylinderShape.prototype.setMargin = function (margin) {
                  var self = this.ptr;
                  if (margin && typeof margin === "object") margin = margin.ptr;
                  _emscripten_bind_btCylinderShape_setMargin_1(self, margin);
                };
              btCylinderShape.prototype["getMargin"] =
                btCylinderShape.prototype.getMargin = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCylinderShape_getMargin_0(self);
                };
              btCylinderShape.prototype["updateProp"] =
                btCylinderShape.prototype.updateProp = function (r, h, upAxis) {
                  var self = this.ptr;
                  if (r && typeof r === "object") r = r.ptr;
                  if (h && typeof h === "object") h = h.ptr;
                  if (upAxis && typeof upAxis === "object") upAxis = upAxis.ptr;
                  _emscripten_bind_btCylinderShape_updateProp_3(
                    self,
                    r,
                    h,
                    upAxis
                  );
                };
              btCylinderShape.prototype["setLocalScaling"] =
                btCylinderShape.prototype.setLocalScaling = function (scaling) {
                  var self = this.ptr;
                  if (scaling && typeof scaling === "object")
                    scaling = scaling.ptr;
                  _emscripten_bind_btCylinderShape_setLocalScaling_1(
                    self,
                    scaling
                  );
                };
              btCylinderShape.prototype["getLocalScaling"] =
                btCylinderShape.prototype.getLocalScaling = function () {
                  var self = this.ptr;
                  return wrapPointer(
                    _emscripten_bind_btCylinderShape_getLocalScaling_0(self),
                    btVector3
                  );
                };
              btCylinderShape.prototype["calculateLocalInertia"] =
                btCylinderShape.prototype.calculateLocalInertia = function (
                  mass,
                  inertia
                ) {
                  var self = this.ptr;
                  if (mass && typeof mass === "object") mass = mass.ptr;
                  if (inertia && typeof inertia === "object")
                    inertia = inertia.ptr;
                  _emscripten_bind_btCylinderShape_calculateLocalInertia_2(
                    self,
                    mass,
                    inertia
                  );
                };
              btCylinderShape.prototype["isCompound"] =
                btCylinderShape.prototype.isCompound = function () {
                  var self = this.ptr;
                  return !!_emscripten_bind_btCylinderShape_isCompound_0(self);
                };
              btCylinderShape.prototype["getUserIndex"] =
                btCylinderShape.prototype.getUserIndex = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCylinderShape_getUserIndex_0(self);
                };
              btCylinderShape.prototype["setUserIndex"] =
                btCylinderShape.prototype.setUserIndex = function (index) {
                  var self = this.ptr;
                  if (index && typeof index === "object") index = index.ptr;
                  _emscripten_bind_btCylinderShape_setUserIndex_1(self, index);
                };
              btCylinderShape.prototype["getAabb"] =
                btCylinderShape.prototype.getAabb = function (t, min, max) {
                  var self = this.ptr;
                  if (t && typeof t === "object") t = t.ptr;
                  if (min && typeof min === "object") min = min.ptr;
                  if (max && typeof max === "object") max = max.ptr;
                  _emscripten_bind_btCylinderShape_getAabb_3(self, t, min, max);
                };
              btCylinderShape.prototype["getLocalBoundingSphere"] =
                btCylinderShape.prototype.getLocalBoundingSphere = function () {
                  var self = this.ptr;
                  return _emscripten_bind_btCylinderShape_getLocalBoundingSphere_0(
                    self
                  );
                };
              btCylinderShape.prototype["getImplicitShapeDimensions"] =
                btCylinderShape.prototype.getImplicitShapeDimensions =
                  function () {
                    var self = this.ptr;
                    return wrapPointer(
                      _emscripten_bind_btCylinderShape_getImplicitShapeDimensions_0(
                        self
                      ),
                      btVector3
                    );
                  };
              btCylinderShape.prototype["__destroy__"] =
                btCylinderShape.prototype.__destroy__ = function () {
                  var self = this.ptr;
                  _emscripten_bind_btCylinderShape___destroy___0(self);
                };
              (function () {
                function setupEnums() {
                  Module["BT_CONSTRAINT_ERP"] =
                    _emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP();
                  Module["BT_CONSTRAINT_STOP_ERP"] =
                    _emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP();
                  Module["BT_CONSTRAINT_CFM"] =
                    _emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM();
                  Module["BT_CONSTRAINT_STOP_CFM"] =
                    _emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM();
                  Module["PHY_FLOAT"] =
                    _emscripten_enum_PHY_ScalarType_PHY_FLOAT();
                  Module["PHY_DOUBLE"] =
                    _emscripten_enum_PHY_ScalarType_PHY_DOUBLE();
                  Module["PHY_INTEGER"] =
                    _emscripten_enum_PHY_ScalarType_PHY_INTEGER();
                  Module["PHY_SHORT"] =
                    _emscripten_enum_PHY_ScalarType_PHY_SHORT();
                  Module["PHY_FIXEDPOINT88"] =
                    _emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88();
                  Module["PHY_UCHAR"] =
                    _emscripten_enum_PHY_ScalarType_PHY_UCHAR();
                }
                if (runtimeInitialized) setupEnums();
                else addOnPreMain(setupEnums);
              })();
              this["Ammo"] = Module;

              return Ammo;
            };
          })();
          module.exports = Ammo;
        })
      );
    },
  };
});
