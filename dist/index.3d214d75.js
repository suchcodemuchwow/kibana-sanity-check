// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iKiqL":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
const elasticApm = require('@elastic/apm-rum');
elasticApm.init({
    serverUrl: 'https://kibana-ops-e2e-perf.apm.us-central1.gcp.cloud.es.io:443',
    serviceName: 'sanity-check',
    environment: 'development'
});

},{"@elastic/apm-rum":"ajI8k"}],"ajI8k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
parcelHelpers.export(exports, "apmBase", ()=>apmBase
);
parcelHelpers.export(exports, "ApmBase", ()=>_apmBaseDefault.default
);
parcelHelpers.export(exports, "apm", ()=>apmBase
);
var _apmRumCore = require("@elastic/apm-rum-core");
var _apmBase = require("./apm-base");
var _apmBaseDefault = parcelHelpers.interopDefault(_apmBase);
function getApmBase() {
    if (_apmRumCore.isBrowser && window.elasticApm) return window.elasticApm;
    var enabled = _apmRumCore.bootstrap();
    var serviceFactory = _apmRumCore.createServiceFactory();
    var apmBase1 = new _apmBaseDefault.default(serviceFactory, !enabled);
    if (_apmRumCore.isBrowser) window.elasticApm = apmBase1;
    return apmBase1;
}
var apmBase = getApmBase();
var init = apmBase.init.bind(apmBase);
exports.default = init;

},{"@elastic/apm-rum-core":"a8cGf","./apm-base":"8zNdn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8cGf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createServiceFactory", ()=>createServiceFactory
);
parcelHelpers.export(exports, "ServiceFactory", ()=>_serviceFactory.ServiceFactory
);
parcelHelpers.export(exports, "patchAll", ()=>_patching.patchAll
);
parcelHelpers.export(exports, "patchEventHandler", ()=>_patching.patchEventHandler
);
parcelHelpers.export(exports, "isPlatformSupported", ()=>_utils.isPlatformSupported
);
parcelHelpers.export(exports, "isBrowser", ()=>_utils.isBrowser
);
parcelHelpers.export(exports, "getInstrumentationFlags", ()=>_instrument.getInstrumentationFlags
);
parcelHelpers.export(exports, "createTracer", ()=>_opentracing.createTracer
);
parcelHelpers.export(exports, "scheduleMicroTask", ()=>_utils.scheduleMicroTask
);
parcelHelpers.export(exports, "scheduleMacroTask", ()=>_utils.scheduleMacroTask
);
parcelHelpers.export(exports, "afterFrame", ()=>_afterFrameDefault.default
);
parcelHelpers.export(exports, "ERROR", ()=>_constants.ERROR
);
parcelHelpers.export(exports, "PAGE_LOAD", ()=>_constants.PAGE_LOAD
);
parcelHelpers.export(exports, "CONFIG_SERVICE", ()=>_constants.CONFIG_SERVICE
);
parcelHelpers.export(exports, "LOGGING_SERVICE", ()=>_constants.LOGGING_SERVICE
);
parcelHelpers.export(exports, "APM_SERVER", ()=>_constants.APM_SERVER
);
parcelHelpers.export(exports, "bootstrap", ()=>_bootstrap.bootstrap
);
var _errorLogging = require("./error-logging");
var _performanceMonitoring = require("./performance-monitoring");
var _serviceFactory = require("./common/service-factory");
var _utils = require("./common/utils");
var _patching = require("./common/patching");
var _constants = require("./common/constants");
var _instrument = require("./common/instrument");
var _afterFrame = require("./common/after-frame");
var _afterFrameDefault = parcelHelpers.interopDefault(_afterFrame);
var _bootstrap = require("./bootstrap");
var _opentracing = require("./opentracing");
function createServiceFactory() {
    _performanceMonitoring.registerServices();
    _errorLogging.registerServices();
    var serviceFactory = new _serviceFactory.ServiceFactory();
    return serviceFactory;
}

},{"./error-logging":"6c1Zz","./performance-monitoring":"66LBG","./common/service-factory":"4Sdok","./common/utils":"f32Di","./common/patching":"dj6fY","./common/constants":"f2U8D","./common/instrument":"2fdpi","./common/after-frame":"flCz0","./bootstrap":"kyDk8","./opentracing":"1T69k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6c1Zz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerServices", ()=>registerServices
);
var _errorLogging = require("./error-logging");
var _errorLoggingDefault = parcelHelpers.interopDefault(_errorLogging);
var _constants = require("../common/constants");
var _serviceFactory = require("../common/service-factory");
function registerServices() {
    _serviceFactory.serviceCreators['ErrorLogging'] = function(serviceFactory) {
        var _serviceFactory$getSe = serviceFactory.getService([
            _constants.APM_SERVER,
            _constants.CONFIG_SERVICE,
            'TransactionService'
        ]), apmServer = _serviceFactory$getSe[0], configService = _serviceFactory$getSe[1], transactionService = _serviceFactory$getSe[2];
        return new _errorLoggingDefault.default(apmServer, configService, transactionService);
    };
}

},{"./error-logging":"04Tnn","../common/constants":"f2U8D","../common/service-factory":"4Sdok","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04Tnn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stackTrace = require("./stack-trace");
var _utils = require("../common/utils");
var _context = require("../common/context");
var _truncate = require("../common/truncate");
var _excluded = [
    "tags"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var IGNORE_KEYS = [
    'stack',
    'message'
];
function getErrorProperties(error) {
    var propertyFound = false;
    var properties = {};
    Object.keys(error).forEach(function(key) {
        if (IGNORE_KEYS.indexOf(key) >= 0) return;
        var val = error[key];
        if (val == null || typeof val === 'function') return;
        if (typeof val === 'object') {
            if (typeof val.toISOString !== 'function') return;
            val = val.toISOString();
        }
        properties[key] = val;
        propertyFound = true;
    });
    if (propertyFound) return properties;
}
var ErrorLogging = function() {
    function ErrorLogging1(apmServer, configService, transactionService) {
        this._apmServer = apmServer;
        this._configService = configService;
        this._transactionService = transactionService;
    }
    var _proto = ErrorLogging1.prototype;
    _proto.createErrorDataModel = function createErrorDataModel(errorEvent) {
        var frames = _stackTrace.createStackTraces(errorEvent);
        var filteredFrames = _stackTrace.filterInvalidFrames(frames);
        var culprit = '(inline script)';
        var lastFrame = filteredFrames[filteredFrames.length - 1];
        if (lastFrame && lastFrame.filename) culprit = lastFrame.filename;
        var message = errorEvent.message, error = errorEvent.error;
        var errorMessage = message;
        var errorType = '';
        var errorContext = {};
        if (error && typeof error === 'object') {
            errorMessage = errorMessage || error.message;
            errorType = error.name;
            var customProperties = getErrorProperties(error);
            if (customProperties) errorContext.custom = customProperties;
        }
        if (!errorType) {
            if (errorMessage && errorMessage.indexOf(':') > -1) errorType = errorMessage.split(':')[0];
        }
        var currentTransaction = this._transactionService.getCurrentTransaction();
        var transactionContext = currentTransaction ? currentTransaction.context : {};
        var _this$_configService$ = this._configService.get('context'), tags = _this$_configService$.tags, configContext = _objectWithoutPropertiesLoose(_this$_configService$, _excluded);
        var pageContext = _context.getPageContext();
        var context = _utils.merge({}, pageContext, transactionContext, configContext, errorContext);
        var errorObject = {
            id: _utils.generateRandomId(),
            culprit: culprit,
            exception: {
                message: errorMessage,
                stacktrace: filteredFrames,
                type: errorType
            },
            context: context
        };
        if (currentTransaction) errorObject = _utils.extend(errorObject, {
            trace_id: currentTransaction.traceId,
            parent_id: currentTransaction.id,
            transaction_id: currentTransaction.id,
            transaction: {
                type: currentTransaction.type,
                sampled: currentTransaction.sampled
            }
        });
        return _truncate.truncateModel(_truncate.ERROR_MODEL, errorObject);
    };
    _proto.logErrorEvent = function logErrorEvent(errorEvent) {
        if (typeof errorEvent === 'undefined') return;
        var errorObject = this.createErrorDataModel(errorEvent);
        if (typeof errorObject.exception.message === 'undefined') return;
        this._apmServer.addError(errorObject);
    };
    _proto.registerListeners = function registerListeners() {
        var _this = this;
        window.addEventListener('error', function(errorEvent) {
            return _this.logErrorEvent(errorEvent);
        });
        window.addEventListener('unhandledrejection', function(promiseRejectionEvent) {
            return _this.logPromiseEvent(promiseRejectionEvent);
        });
    };
    _proto.logPromiseEvent = function logPromiseEvent(promiseRejectionEvent) {
        var prefix = 'Unhandled promise rejection: ';
        var reason = promiseRejectionEvent.reason;
        if (reason == null) reason = '<no reason specified>';
        var errorEvent;
        if (typeof reason.message === 'string') {
            var name = reason.name ? reason.name + ': ' : '';
            errorEvent = {
                error: reason,
                message: prefix + name + reason.message
            };
        } else {
            reason = typeof reason === 'object' ? '<object>' : typeof reason === 'function' ? '<function>' : reason;
            errorEvent = {
                message: prefix + reason
            };
        }
        this.logErrorEvent(errorEvent);
    };
    _proto.logError = function logError(messageOrError) {
        var errorEvent = {};
        if (typeof messageOrError === 'string') errorEvent.message = messageOrError;
        else errorEvent.error = messageOrError;
        return this.logErrorEvent(errorEvent);
    };
    return ErrorLogging1;
}();
exports.default = ErrorLogging;

},{"./stack-trace":"dmTGh","../common/utils":"f32Di","../common/context":"a4Yla","../common/truncate":"4K50u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmTGh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStackTraces", ()=>createStackTraces
);
parcelHelpers.export(exports, "filterInvalidFrames", ()=>filterInvalidFrames
);
var _errorStackParser = require("error-stack-parser");
var _errorStackParserDefault = parcelHelpers.interopDefault(_errorStackParser);
function filePathToFileName(fileUrl) {
    var origin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    if (fileUrl.indexOf(origin) > -1) fileUrl = fileUrl.replace(origin + '/', '');
    return fileUrl;
}
function cleanFilePath(filePath) {
    if (filePath === void 0) filePath = '';
    if (filePath === '<anonymous>') filePath = '';
    return filePath;
}
function isFileInline(fileUrl) {
    if (fileUrl) return window.location.href.indexOf(fileUrl) === 0;
    return false;
}
function normalizeStackFrames(stackFrames) {
    return stackFrames.map(function(frame) {
        if (frame.functionName) frame.functionName = normalizeFunctionName(frame.functionName);
        return frame;
    });
}
function normalizeFunctionName(fnName) {
    var parts = fnName.split('/');
    if (parts.length > 1) fnName = [
        'Object',
        parts[parts.length - 1]
    ].join('.');
    else fnName = parts[0];
    fnName = fnName.replace(/.<$/gi, '.<anonymous>');
    fnName = fnName.replace(/^Anonymous function$/, '<anonymous>');
    parts = fnName.split('.');
    if (parts.length > 1) fnName = parts[parts.length - 1];
    else fnName = parts[0];
    return fnName;
}
function createStackTraces(errorEvent) {
    var error = errorEvent.error, filename = errorEvent.filename, lineno = errorEvent.lineno, colno = errorEvent.colno;
    var stackTraces = [];
    if (error) try {
        stackTraces = _errorStackParserDefault.default.parse(error);
    } catch (e) {}
    if (stackTraces.length === 0) stackTraces = [
        {
            fileName: filename,
            lineNumber: lineno,
            columnNumber: colno
        }
    ];
    var normalizedStackTraces = normalizeStackFrames(stackTraces);
    return normalizedStackTraces.map(function(stack) {
        var fileName = stack.fileName, lineNumber = stack.lineNumber, columnNumber = stack.columnNumber, _stack$functionName = stack.functionName, functionName = _stack$functionName === void 0 ? '<anonymous>' : _stack$functionName;
        if (!fileName && !lineNumber) return {};
        if (!columnNumber && !lineNumber) return {};
        var filePath = cleanFilePath(fileName);
        var cleanedFileName = filePathToFileName(filePath);
        if (isFileInline(filePath)) cleanedFileName = '(inline script)';
        return {
            abs_path: fileName,
            filename: cleanedFileName,
            function: functionName,
            lineno: lineNumber,
            colno: columnNumber
        };
    });
}
function filterInvalidFrames(frames) {
    return frames.filter(function(_ref) {
        var filename = _ref.filename, lineno = _ref.lineno;
        return typeof filename !== 'undefined' && typeof lineno !== 'undefined';
    });
}

},{"error-stack-parser":"6wDUZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6wDUZ":[function(require,module,exports) {
(function(root, factory) {
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
    /* istanbul ignore next */ if (typeof define === 'function' && define.amd) define('error-stack-parser', [
        'stackframe'
    ], factory);
    else module.exports = factory(require('stackframe'));
})(this, function ErrorStackParser(StackFrame) {
    'use strict';
    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
    function _map(array, fn, thisArg) {
        if (typeof Array.prototype.map === 'function') return array.map(fn, thisArg);
        else {
            var output = new Array(array.length);
            for(var i = 0; i < array.length; i++)output[i] = fn.call(thisArg, array[i]);
            return output;
        }
    }
    function _filter(array, fn, thisArg) {
        if (typeof Array.prototype.filter === 'function') return array.filter(fn, thisArg);
        else {
            var output = [];
            for(var i = 0; i < array.length; i++)if (fn.call(thisArg, array[i])) output.push(array[i]);
            return output;
        }
    }
    function _indexOf(array, target) {
        if (typeof Array.prototype.indexOf === 'function') return array.indexOf(target);
        else {
            for(var i = 0; i < array.length; i++){
                if (array[i] === target) return i;
            }
            return -1;
        }
    }
    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */ parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') return this.parseOpera(error);
            else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) return this.parseV8OrIE(error);
            else if (error.stack) return this.parseFFOrSafari(error);
            else throw new Error('Cannot parse given Error object');
        },
        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) return [
                urlLike
            ];
            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [
                parts[1],
                parts[2] || undefined,
                parts[3] || undefined
            ];
        },
        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);
            return _map(filtered, function(line) {
                if (line.indexOf('(eval ') > -1) // Throw away eval information until we implement stacktrace.js/stackframe#8
                line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = _indexOf([
                    'eval',
                    '<anonymous>'
                ], locationParts[0]) > -1 ? undefined : locationParts[0];
                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
            }, this);
        },
        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);
            return _map(filtered, function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) // Safari eval frames only have function names and nothing else
                return new StackFrame(line);
                else {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join('@') || undefined;
                    return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
                }
            }, this);
        },
        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) return this.parseOpera9(e);
            else if (!e.stack) return this.parseOpera10(e);
            else return this.parseOpera11(e);
        },
        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];
            for(var i = 2, len = lines.length; i < len; i += 2){
                var match = lineRE.exec(lines[i]);
                if (match) result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
            }
            return result;
        },
        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];
            for(var i = 0, len = lines.length; i < len; i += 2){
                var match = lineRE.exec(lines[i]);
                if (match) result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
            }
            return result;
        },
        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);
            return _map(filtered, function(line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = tokens.shift() || '';
                var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
            }, this);
        }
    };
});

},{"stackframe":"kuXue"}],"kuXue":[function(require,module,exports) {
(function(root, factory) {
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
    /* istanbul ignore next */ if (typeof define === 'function' && define.amd) define('stackframe', [], factory);
    else module.exports = factory();
})(this, function() {
    'use strict';
    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
        if (functionName !== undefined) this.setFunctionName(functionName);
        if (args !== undefined) this.setArgs(args);
        if (fileName !== undefined) this.setFileName(fileName);
        if (lineNumber !== undefined) this.setLineNumber(lineNumber);
        if (columnNumber !== undefined) this.setColumnNumber(columnNumber);
        if (source !== undefined) this.setSource(source);
    }
    StackFrame.prototype = {
        getFunctionName: function() {
            return this.functionName;
        },
        setFunctionName: function(v) {
            this.functionName = String(v);
        },
        getArgs: function() {
            return this.args;
        },
        setArgs: function(v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') throw new TypeError('Args must be an Array');
            this.args = v;
        },
        // NOTE: Property name may be misleading as it includes the path,
        // but it somewhat mirrors V8's JavaScriptStackTraceApi
        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
        getFileName: function() {
            return this.fileName;
        },
        setFileName: function(v) {
            this.fileName = String(v);
        },
        getLineNumber: function() {
            return this.lineNumber;
        },
        setLineNumber: function(v) {
            if (!_isNumber(v)) throw new TypeError('Line Number must be a Number');
            this.lineNumber = Number(v);
        },
        getColumnNumber: function() {
            return this.columnNumber;
        },
        setColumnNumber: function(v) {
            if (!_isNumber(v)) throw new TypeError('Column Number must be a Number');
            this.columnNumber = Number(v);
        },
        getSource: function() {
            return this.source;
        },
        setSource: function(v) {
            this.source = String(v);
        },
        toString: function() {
            var functionName = this.getFunctionName() || '{anonymous}';
            var args = '(' + (this.getArgs() || []).join(',') + ')';
            var fileName = this.getFileName() ? '@' + this.getFileName() : '';
            var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
            var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
            return functionName + args + fileName + lineNumber + columnNumber;
        }
    };
    return StackFrame;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f32Di":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "merge", ()=>merge
);
parcelHelpers.export(exports, "isUndefined", ()=>isUndefined
);
parcelHelpers.export(exports, "noop", ()=>noop
);
parcelHelpers.export(exports, "baseExtend", ()=>baseExtend
);
parcelHelpers.export(exports, "bytesToHex", ()=>bytesToHex
);
parcelHelpers.export(exports, "isCORSSupported", ()=>isCORSSupported
);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
parcelHelpers.export(exports, "isPlatformSupported", ()=>isPlatformSupported
);
parcelHelpers.export(exports, "isDtHeaderValid", ()=>isDtHeaderValid
);
parcelHelpers.export(exports, "parseDtHeaderValue", ()=>parseDtHeaderValue
);
parcelHelpers.export(exports, "getServerTimingInfo", ()=>getServerTimingInfo
);
parcelHelpers.export(exports, "getDtHeaderValue", ()=>getDtHeaderValue
);
parcelHelpers.export(exports, "getTSHeaderValue", ()=>getTSHeaderValue
);
parcelHelpers.export(exports, "getCurrentScript", ()=>getCurrentScript
);
parcelHelpers.export(exports, "getElasticScript", ()=>getElasticScript
);
parcelHelpers.export(exports, "getTimeOrigin", ()=>getTimeOrigin
);
parcelHelpers.export(exports, "generateRandomId", ()=>generateRandomId
);
parcelHelpers.export(exports, "getEarliestSpan", ()=>getEarliestSpan
);
parcelHelpers.export(exports, "getLatestNonXHRSpan", ()=>getLatestNonXHRSpan
);
parcelHelpers.export(exports, "getDuration", ()=>getDuration
);
parcelHelpers.export(exports, "getTime", ()=>getTime
);
parcelHelpers.export(exports, "now", ()=>now
);
parcelHelpers.export(exports, "rng", ()=>rng
);
parcelHelpers.export(exports, "checkSameOrigin", ()=>checkSameOrigin
);
parcelHelpers.export(exports, "scheduleMacroTask", ()=>scheduleMacroTask
);
parcelHelpers.export(exports, "scheduleMicroTask", ()=>scheduleMicroTask
);
parcelHelpers.export(exports, "setLabel", ()=>setLabel
);
parcelHelpers.export(exports, "setRequestHeader", ()=>setRequestHeader
);
parcelHelpers.export(exports, "stripQueryStringFromUrl", ()=>stripQueryStringFromUrl
);
parcelHelpers.export(exports, "find", ()=>find
);
parcelHelpers.export(exports, "removeInvalidChars", ()=>removeInvalidChars
);
parcelHelpers.export(exports, "PERF", ()=>PERF
);
parcelHelpers.export(exports, "isPerfTimelineSupported", ()=>isPerfTimelineSupported
);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser
);
parcelHelpers.export(exports, "isPerfTypeSupported", ()=>isPerfTypeSupported
);
var _polyfills = require("./polyfills");
var slice = [].slice;
var isBrowser = typeof window !== 'undefined';
var PERF = isBrowser && typeof performance !== 'undefined' ? performance : {};
function isCORSSupported() {
    var xhr = new window.XMLHttpRequest();
    return 'withCredentials' in xhr;
}
var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex[i] = (i + 256).toString(16).substr(1);
function bytesToHex(buffer) {
    var hexOctets = [];
    for(var _i = 0; _i < buffer.length; _i++)hexOctets.push(byteToHex[buffer[_i]]);
    return hexOctets.join('');
}
var destination = new Uint8Array(16);
function rng() {
    if (typeof crypto != 'undefined' && typeof crypto.getRandomValues == 'function') return crypto.getRandomValues(destination);
    else if (typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function') return msCrypto.getRandomValues(destination);
    return destination;
}
function generateRandomId(length) {
    var id = bytesToHex(rng());
    return id.substr(0, length);
}
function getDtHeaderValue(span) {
    var dtVersion = '00';
    var dtUnSampledFlags = '00';
    var dtSampledFlags = '01';
    if (span && span.traceId && span.id && span.parentId) {
        var flags = span.sampled ? dtSampledFlags : dtUnSampledFlags;
        var id = span.sampled ? span.id : span.parentId;
        return dtVersion + '-' + span.traceId + '-' + id + '-' + flags;
    }
}
function parseDtHeaderValue(value) {
    var parsed = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(value);
    if (parsed) {
        var flags = parsed[4];
        var sampled = flags !== '00';
        return {
            traceId: parsed[2],
            id: parsed[3],
            sampled: sampled
        };
    }
}
function isDtHeaderValid(header) {
    return /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(header) && header.slice(3, 35) !== '00000000000000000000000000000000' && header.slice(36, 52) !== '0000000000000000';
}
function getTSHeaderValue(_ref) {
    var sampleRate = _ref.sampleRate;
    if (typeof sampleRate !== 'number' || String(sampleRate).length > 256) return;
    var NAMESPACE = 'es';
    var SEPARATOR = '=';
    return "" + NAMESPACE + SEPARATOR + "s:" + sampleRate;
}
function setRequestHeader(target, name, value) {
    if (typeof target.setRequestHeader === 'function') target.setRequestHeader(name, value);
    else if (target.headers && typeof target.headers.append === 'function') target.headers.append(name, value);
    else target[name] = value;
}
function checkSameOrigin(source, target) {
    var isSame = false;
    if (typeof target === 'string') isSame = source === target;
    else if (target && typeof target.test === 'function') isSame = target.test(source);
    else if (Array.isArray(target)) target.forEach(function(t) {
        if (!isSame) isSame = checkSameOrigin(source, t);
    });
    return isSame;
}
function isPlatformSupported() {
    return isBrowser && typeof Set === 'function' && typeof JSON.stringify === 'function' && PERF && typeof PERF.now === 'function' && isCORSSupported();
}
function setLabel(key, value, obj) {
    if (!obj || !key) return;
    var skey = removeInvalidChars(key);
    var valueType = typeof value;
    if (value != undefined && valueType !== 'boolean' && valueType !== 'number') value = String(value);
    obj[skey] = value;
    return obj;
}
function getServerTimingInfo(serverTimingEntries) {
    if (serverTimingEntries === void 0) serverTimingEntries = [];
    var serverTimingInfo = [];
    var entrySeparator = ', ';
    var valueSeparator = ';';
    for(var _i2 = 0; _i2 < serverTimingEntries.length; _i2++){
        var _serverTimingEntries$ = serverTimingEntries[_i2], name = _serverTimingEntries$.name, duration = _serverTimingEntries$.duration, description = _serverTimingEntries$.description;
        var timingValue = name;
        if (description) timingValue += valueSeparator + 'desc=' + description;
        if (duration) timingValue += valueSeparator + 'dur=' + duration;
        serverTimingInfo.push(timingValue);
    }
    return serverTimingInfo.join(entrySeparator);
}
function getTimeOrigin() {
    return PERF.timing.fetchStart;
}
function stripQueryStringFromUrl(url) {
    return url && url.split('?')[0];
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isFunction(value) {
    return typeof value === 'function';
}
function baseExtend(dst, objs, deep) {
    for(var i1 = 0, ii = objs.length; i1 < ii; ++i1){
        var obj = objs[i1];
        if (!isObject(obj) && !isFunction(obj)) continue;
        var keys = Object.keys(obj);
        for(var j = 0, jj = keys.length; j < jj; j++){
            var key = keys[j];
            var src = obj[key];
            if (deep && isObject(src)) {
                if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
                baseExtend(dst[key], [
                    src
                ], false);
            } else dst[key] = src;
        }
    }
    return dst;
}
function getElasticScript() {
    if (typeof document !== 'undefined') {
        var scripts = document.getElementsByTagName('script');
        for(var i2 = 0, l = scripts.length; i2 < l; i2++){
            var sc = scripts[i2];
            if (sc.src.indexOf('elastic') > 0) return sc;
        }
    }
}
function getCurrentScript() {
    if (typeof document !== 'undefined') {
        var currentScript = document.currentScript;
        if (!currentScript) return getElasticScript();
        return currentScript;
    }
}
function extend(dst) {
    return baseExtend(dst, slice.call(arguments, 1), false);
}
function merge(dst) {
    return baseExtend(dst, slice.call(arguments, 1), true);
}
function isUndefined(obj) {
    return typeof obj === 'undefined';
}
function noop() {}
function find(array, predicate, thisArg) {
    if (array == null) throw new TypeError('array is null or not defined');
    var o = Object(array);
    var len = o.length >>> 0;
    if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
    var k = 0;
    while(k < len){
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) return kValue;
        k++;
    }
    return undefined;
}
function removeInvalidChars(key) {
    return key.replace(/[.*"]/g, '_');
}
function getLatestNonXHRSpan(spans) {
    var latestSpan = null;
    for(var _i3 = 0; _i3 < spans.length; _i3++){
        var span = spans[_i3];
        if (String(span.type).indexOf('external') === -1 && (!latestSpan || latestSpan._end < span._end)) latestSpan = span;
    }
    return latestSpan;
}
function getEarliestSpan(spans) {
    var earliestSpan = spans[0];
    for(var _i4 = 1; _i4 < spans.length; _i4++){
        var span = spans[_i4];
        if (earliestSpan._start > span._start) earliestSpan = span;
    }
    return earliestSpan;
}
function now() {
    return PERF.now();
}
function getTime(time) {
    return typeof time === 'number' && time >= 0 ? time : now();
}
function getDuration(start, end) {
    if (isUndefined(end) || isUndefined(start)) return null;
    return parseInt(end - start);
}
function scheduleMacroTask(callback) {
    setTimeout(callback, 0);
}
function scheduleMicroTask(callback) {
    _polyfills.Promise.resolve().then(callback);
}
function isPerfTimelineSupported() {
    return typeof PERF.getEntriesByType === 'function';
}
function isPerfTypeSupported(type) {
    return typeof PerformanceObserver !== 'undefined' && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.indexOf(type) >= 0;
}

},{"./polyfills":"7ytA5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ytA5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Promise", ()=>Promise
);
var _promisePolyfill = require("promise-polyfill");
var _promisePolyfillDefault = parcelHelpers.interopDefault(_promisePolyfill);
var _utils = require("./utils");
var local = {};
if (_utils.isBrowser) local = window;
else if (typeof self !== 'undefined') local = self;
var Promise = 'Promise' in local ? local.Promise : _promisePolyfillDefault.default;

},{"promise-polyfill":"aAO1F","./utils":"f32Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAO1F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _finally = require("./finally");
var _finallyDefault = parcelHelpers.interopDefault(_finally);
var _allSettled = require("./allSettled");
var _allSettledDefault = parcelHelpers.interopDefault(_allSettled);
// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;
function isArray(x) {
    return Boolean(x && typeof x.length !== 'undefined');
}
function noop() {}
// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
    return function() {
        fn.apply(thisArg, arguments);
    };
}
/**
 * @constructor
 * @param {Function} fn
 */ function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    /** @type {!number} */ this._state = 0;
    /** @type {!boolean} */ this._handled = false;
    /** @type {Promise|undefined} */ this._value = undefined;
    /** @type {!Array<!Function>} */ this._deferreds = [];
    doResolve(fn, this);
}
function handle(self, deferred) {
    while(self._state === 3)self = self._value;
    if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
    }
    self._handled = true;
    Promise._immediateFn(function() {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
            (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
            return;
        }
        var ret;
        try {
            ret = cb(self._value);
        } catch (e) {
            reject(deferred.promise, e);
            return;
        }
        resolve(deferred.promise, ret);
    });
}
function resolve(self, newValue) {
    try {
        // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
        if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
            var then = newValue.then;
            if (newValue instanceof Promise) {
                self._state = 3;
                self._value = newValue;
                finale(self);
                return;
            } else if (typeof then === 'function') {
                doResolve(bind(then, newValue), self);
                return;
            }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
    } catch (e) {
        reject(self, e);
    }
}
function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
}
function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) Promise._immediateFn(function() {
        if (!self._handled) Promise._unhandledRejectionFn(self._value);
    });
    for(var i = 0, len = self._deferreds.length; i < len; i++)handle(self, self._deferreds[i]);
    self._deferreds = null;
}
/**
 * @constructor
 */ function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */ function doResolve(fn, self) {
    var done = false;
    try {
        fn(function(value) {
            if (done) return;
            done = true;
            resolve(self, value);
        }, function(reason) {
            if (done) return;
            done = true;
            reject(self, reason);
        });
    } catch (ex) {
        if (done) return;
        done = true;
        reject(self, ex);
    }
}
Promise.prototype['catch'] = function(onRejected) {
    return this.then(null, onRejected);
};
Promise.prototype.then = function(onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
};
Promise.prototype['finally'] = _finallyDefault.default;
Promise.all = function(arr) {
    return new Promise(function(resolve1, reject1) {
        if (!isArray(arr)) return reject1(new TypeError('Promise.all accepts an array'));
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve1([]);
        var remaining = args.length;
        function res(i, val1) {
            try {
                if (val1 && (typeof val1 === 'object' || typeof val1 === 'function')) {
                    var then = val1.then;
                    if (typeof then === 'function') {
                        then.call(val1, function(val) {
                            res(i, val);
                        }, reject1);
                        return;
                    }
                }
                args[i] = val1;
                if (--remaining === 0) resolve1(args);
            } catch (ex) {
                reject1(ex);
            }
        }
        for(var i1 = 0; i1 < args.length; i1++)res(i1, args[i1]);
    });
};
Promise.allSettled = _allSettledDefault.default;
Promise.resolve = function(value) {
    if (value && typeof value === 'object' && value.constructor === Promise) return value;
    return new Promise(function(resolve2) {
        resolve2(value);
    });
};
Promise.reject = function(value) {
    return new Promise(function(resolve, reject2) {
        reject2(value);
    });
};
Promise.race = function(arr) {
    return new Promise(function(resolve3, reject3) {
        if (!isArray(arr)) return reject3(new TypeError('Promise.race accepts an array'));
        for(var i = 0, len = arr.length; i < len; i++)Promise.resolve(arr[i]).then(resolve3, reject3);
    });
};
// Use polyfill for setImmediate for performance gains
Promise._immediateFn = // @ts-ignore
typeof setImmediate === 'function' && function(fn) {
    // @ts-ignore
    setImmediate(fn);
} || function(fn) {
    setTimeoutFunc(fn, 0);
};
Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
};
exports.default = Promise;

},{"./finally":"32gns","./allSettled":"iCseJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32gns":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @this {Promise}
 */ function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function(value) {
        // @ts-ignore
        return constructor.resolve(callback()).then(function() {
            return value;
        });
    }, function(reason) {
        // @ts-ignore
        return constructor.resolve(callback()).then(function() {
            // @ts-ignore
            return constructor.reject(reason);
        });
    });
}
exports.default = finallyConstructor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCseJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function allSettled(arr) {
    var P = this;
    return new P(function(resolve, reject) {
        if (!(arr && typeof arr.length !== 'undefined')) return reject(new TypeError(typeof arr + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;
        function res(i, val1) {
            if (val1 && (typeof val1 === 'object' || typeof val1 === 'function')) {
                var then = val1.then;
                if (typeof then === 'function') {
                    then.call(val1, function(val) {
                        res(i, val);
                    }, function(e) {
                        args[i] = {
                            status: 'rejected',
                            reason: e
                        };
                        if (--remaining === 0) resolve(args);
                    });
                    return;
                }
            }
            args[i] = {
                status: 'fulfilled',
                value: val1
            };
            if (--remaining === 0) resolve(args);
        }
        for(var i1 = 0; i1 < args.length; i1++)res(i1, args[i1]);
    });
}
exports.default = allSettled;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a4Yla":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPageContext", ()=>getPageContext
);
parcelHelpers.export(exports, "addSpanContext", ()=>addSpanContext
);
parcelHelpers.export(exports, "addTransactionContext", ()=>addTransactionContext
);
var _url = require("./url");
var _constants = require("./constants");
var _utils = require("./utils");
var _excluded = [
    "tags"
];
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var EXTERNAL = 'external';
var RESOURCE = 'resource';
var HARD_NAVIGATION = 'hard-navigation';
function getPortNumber(port, protocol) {
    if (port === '') port = protocol === 'http:' ? '80' : protocol === 'https:' ? '443' : '';
    return port;
}
function getResponseContext(perfTimingEntry) {
    var transferSize = perfTimingEntry.transferSize, encodedBodySize = perfTimingEntry.encodedBodySize, decodedBodySize = perfTimingEntry.decodedBodySize, serverTiming = perfTimingEntry.serverTiming;
    var respContext = {
        transfer_size: transferSize,
        encoded_body_size: encodedBodySize,
        decoded_body_size: decodedBodySize
    };
    var serverTimingStr = _utils.getServerTimingInfo(serverTiming);
    if (serverTimingStr) respContext.headers = {
        'server-timing': serverTimingStr
    };
    return respContext;
}
function getDestination(parsedUrl) {
    var port = parsedUrl.port, protocol = parsedUrl.protocol, hostname = parsedUrl.hostname;
    var portNumber = getPortNumber(port, protocol);
    var ipv6Hostname = hostname.charCodeAt(0) === LEFT_SQUARE_BRACKET && hostname.charCodeAt(hostname.length - 1) === RIGHT_SQUARE_BRACKET;
    var address = hostname;
    if (ipv6Hostname) address = hostname.slice(1, -1);
    return {
        service: {
            resource: hostname + ':' + portNumber,
            name: '',
            type: ''
        },
        address: address,
        port: Number(portNumber)
    };
}
function getResourceContext(data) {
    var entry = data.entry, url = data.url;
    var parsedUrl = new _url.Url(url);
    var destination = getDestination(parsedUrl);
    return {
        http: {
            url: url,
            response: getResponseContext(entry)
        },
        destination: destination
    };
}
function getExternalContext(data) {
    var url = data.url, method = data.method, target = data.target, response = data.response;
    var parsedUrl = new _url.Url(url);
    var destination = getDestination(parsedUrl);
    var context = {
        http: {
            method: method,
            url: parsedUrl.href
        },
        destination: destination
    };
    var statusCode;
    if (target && typeof target.status !== 'undefined') statusCode = target.status;
    else if (response) statusCode = response.status;
    context.http.status_code = statusCode;
    return context;
}
function getNavigationContext(data) {
    var url = data.url;
    var parsedUrl = new _url.Url(url);
    var destination = getDestination(parsedUrl);
    return {
        destination: destination
    };
}
function getPageContext() {
    return {
        page: {
            referer: document.referrer,
            url: location.href
        }
    };
}
function addSpanContext(span, data) {
    if (!data) return;
    var type = span.type;
    var context;
    switch(type){
        case EXTERNAL:
            context = getExternalContext(data);
            break;
        case RESOURCE:
            context = getResourceContext(data);
            break;
        case HARD_NAVIGATION:
            context = getNavigationContext(data);
            break;
    }
    span.addContext(context);
}
function addTransactionContext(transaction, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, tags = _ref.tags, configContext = _objectWithoutPropertiesLoose(_ref, _excluded);
    var pageContext = getPageContext();
    var responseContext = {};
    if (transaction.type === _constants.PAGE_LOAD && _utils.isPerfTimelineSupported()) {
        var entries = _utils.PERF.getEntriesByType(_constants.NAVIGATION);
        if (entries && entries.length > 0) responseContext = {
            response: getResponseContext(entries[0])
        };
    }
    transaction.addContext(pageContext, responseContext, configContext);
}

},{"./url":"9VSZm","./constants":"f2U8D","./utils":"f32Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9VSZm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Url", ()=>Url
);
parcelHelpers.export(exports, "slugifyUrl", ()=>slugifyUrl
);
var _utils = require("./utils");
function isDefaultPort(port, protocol) {
    switch(protocol){
        case 'http:':
            return port === '80';
        case 'https:':
            return port === '443';
    }
    return true;
}
var RULES = [
    [
        '#',
        'hash'
    ],
    [
        '?',
        'query'
    ],
    [
        '/',
        'path'
    ],
    [
        '@',
        'auth',
        1
    ],
    [
        NaN,
        'host',
        undefined,
        1
    ]
];
var PROTOCOL_REGEX = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
var Url = function() {
    function Url1(url) {
        var _this$extractProtocol = this.extractProtocol(url || ''), protocol = _this$extractProtocol.protocol, address = _this$extractProtocol.address, slashes = _this$extractProtocol.slashes;
        var relative = !protocol && !slashes;
        var location = this.getLocation();
        var instructions = RULES.slice();
        address = address.replace('\\', '/');
        if (!slashes) instructions[2] = [
            NaN,
            'path'
        ];
        var index;
        for(var i = 0; i < instructions.length; i++){
            var instruction = instructions[i];
            var parse = instruction[0];
            var key = instruction[1];
            if (typeof parse === 'string') {
                index = address.indexOf(parse);
                if (~index) {
                    var instLength = instruction[2];
                    if (instLength) {
                        var newIndex = address.lastIndexOf(parse);
                        index = Math.max(index, newIndex);
                        this[key] = address.slice(0, index);
                        address = address.slice(index + instLength);
                    } else {
                        this[key] = address.slice(index);
                        address = address.slice(0, index);
                    }
                }
            } else {
                this[key] = address;
                address = '';
            }
            this[key] = this[key] || (relative && instruction[3] ? location[key] || '' : '');
            if (instruction[3]) this[key] = this[key].toLowerCase();
        }
        if (relative && this.path.charAt(0) !== '/') this.path = '/' + this.path;
        this.relative = relative;
        this.protocol = protocol || location.protocol;
        this.hostname = this.host;
        this.port = '';
        if (/:\d+$/.test(this.host)) {
            var value = this.host.split(':');
            var port = value.pop();
            var hostname = value.join(':');
            if (isDefaultPort(port, this.protocol)) this.host = hostname;
            else this.port = port;
            this.hostname = hostname;
        }
        this.origin = this.protocol && this.host && this.protocol !== 'file:' ? this.protocol + '//' + this.host : 'null';
        this.href = this.toString();
    }
    var _proto = Url1.prototype;
    _proto.toString = function toString() {
        var result = this.protocol;
        result += '//';
        if (this.auth) {
            var REDACTED = '[REDACTED]';
            var userpass = this.auth.split(':');
            var username = userpass[0] ? REDACTED : '';
            var password = userpass[1] ? ':' + REDACTED : '';
            result += username + password + '@';
        }
        result += this.host;
        result += this.path;
        result += this.query;
        result += this.hash;
        return result;
    };
    _proto.getLocation = function getLocation() {
        var globalVar = {};
        if (_utils.isBrowser) globalVar = window;
        return globalVar.location;
    };
    _proto.extractProtocol = function extractProtocol(url) {
        var match = PROTOCOL_REGEX.exec(url);
        return {
            protocol: match[1] ? match[1].toLowerCase() : '',
            slashes: !!match[2],
            address: match[3]
        };
    };
    return Url1;
}();
function slugifyUrl(urlStr, depth) {
    if (depth === void 0) depth = 2;
    var parsedUrl = new Url(urlStr);
    var query = parsedUrl.query, path = parsedUrl.path;
    var pathParts = path.substring(1).split('/');
    var redactString = ':id';
    var wildcard = '*';
    var specialCharsRegex = /\W|_/g;
    var digitsRegex = /[0-9]/g;
    var lowerCaseRegex = /[a-z]/g;
    var upperCaseRegex = /[A-Z]/g;
    var redactedParts = [];
    var redactedBefore = false;
    for(var index = 0; index < pathParts.length; index++){
        var part = pathParts[index];
        if (redactedBefore || index > depth - 1) {
            if (part) redactedParts.push(wildcard);
            break;
        }
        var numberOfSpecialChars = (part.match(specialCharsRegex) || []).length;
        if (numberOfSpecialChars >= 2) {
            redactedParts.push(redactString);
            redactedBefore = true;
            continue;
        }
        var numberOfDigits = (part.match(digitsRegex) || []).length;
        if (numberOfDigits > 3 || part.length > 3 && numberOfDigits / part.length >= 0.3) {
            redactedParts.push(redactString);
            redactedBefore = true;
            continue;
        }
        var numberofUpperCase = (part.match(upperCaseRegex) || []).length;
        var numberofLowerCase = (part.match(lowerCaseRegex) || []).length;
        var lowerCaseRate = numberofLowerCase / part.length;
        var upperCaseRate = numberofUpperCase / part.length;
        if (part.length > 5 && (upperCaseRate > 0.3 && upperCaseRate < 0.6 || lowerCaseRate > 0.3 && lowerCaseRate < 0.6)) {
            redactedParts.push(redactString);
            redactedBefore = true;
            continue;
        }
        part && redactedParts.push(part);
    }
    var redacted = '/' + (redactedParts.length >= 2 ? redactedParts.join('/') : redactedParts.join('')) + (query ? '?{query}' : '');
    return redacted;
}

},{"./utils":"f32Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f2U8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SCHEDULE", ()=>SCHEDULE
);
parcelHelpers.export(exports, "INVOKE", ()=>INVOKE
);
parcelHelpers.export(exports, "ADD_EVENT_LISTENER_STR", ()=>ADD_EVENT_LISTENER_STR
);
parcelHelpers.export(exports, "REMOVE_EVENT_LISTENER_STR", ()=>REMOVE_EVENT_LISTENER_STR
);
parcelHelpers.export(exports, "RESOURCE_INITIATOR_TYPES", ()=>RESOURCE_INITIATOR_TYPES
);
parcelHelpers.export(exports, "REUSABILITY_THRESHOLD", ()=>REUSABILITY_THRESHOLD
);
parcelHelpers.export(exports, "MAX_SPAN_DURATION", ()=>MAX_SPAN_DURATION
);
parcelHelpers.export(exports, "PAGE_LOAD", ()=>PAGE_LOAD
);
parcelHelpers.export(exports, "ROUTE_CHANGE", ()=>ROUTE_CHANGE
);
parcelHelpers.export(exports, "NAME_UNKNOWN", ()=>NAME_UNKNOWN
);
parcelHelpers.export(exports, "TYPE_CUSTOM", ()=>TYPE_CUSTOM
);
parcelHelpers.export(exports, "USER_TIMING_THRESHOLD", ()=>USER_TIMING_THRESHOLD
);
parcelHelpers.export(exports, "TRANSACTION_START", ()=>TRANSACTION_START
);
parcelHelpers.export(exports, "TRANSACTION_END", ()=>TRANSACTION_END
);
parcelHelpers.export(exports, "CONFIG_CHANGE", ()=>CONFIG_CHANGE
);
parcelHelpers.export(exports, "XMLHTTPREQUEST", ()=>XMLHTTPREQUEST
);
parcelHelpers.export(exports, "FETCH", ()=>FETCH
);
parcelHelpers.export(exports, "HISTORY", ()=>HISTORY
);
parcelHelpers.export(exports, "EVENT_TARGET", ()=>EVENT_TARGET
);
parcelHelpers.export(exports, "ERROR", ()=>ERROR
);
parcelHelpers.export(exports, "BEFORE_EVENT", ()=>BEFORE_EVENT
);
parcelHelpers.export(exports, "AFTER_EVENT", ()=>AFTER_EVENT
);
parcelHelpers.export(exports, "LOCAL_CONFIG_KEY", ()=>LOCAL_CONFIG_KEY
);
parcelHelpers.export(exports, "HTTP_REQUEST_TYPE", ()=>HTTP_REQUEST_TYPE
);
parcelHelpers.export(exports, "LONG_TASK", ()=>LONG_TASK
);
parcelHelpers.export(exports, "PAINT", ()=>PAINT
);
parcelHelpers.export(exports, "MEASURE", ()=>MEASURE
);
parcelHelpers.export(exports, "NAVIGATION", ()=>NAVIGATION
);
parcelHelpers.export(exports, "RESOURCE", ()=>RESOURCE
);
parcelHelpers.export(exports, "FIRST_CONTENTFUL_PAINT", ()=>FIRST_CONTENTFUL_PAINT
);
parcelHelpers.export(exports, "LARGEST_CONTENTFUL_PAINT", ()=>LARGEST_CONTENTFUL_PAINT
);
parcelHelpers.export(exports, "KEYWORD_LIMIT", ()=>KEYWORD_LIMIT
);
parcelHelpers.export(exports, "TEMPORARY_TYPE", ()=>TEMPORARY_TYPE
);
parcelHelpers.export(exports, "USER_INTERACTION", ()=>USER_INTERACTION
);
parcelHelpers.export(exports, "TRANSACTION_TYPE_ORDER", ()=>TRANSACTION_TYPE_ORDER
);
parcelHelpers.export(exports, "ERRORS", ()=>ERRORS
);
parcelHelpers.export(exports, "TRANSACTIONS", ()=>TRANSACTIONS
);
parcelHelpers.export(exports, "CONFIG_SERVICE", ()=>CONFIG_SERVICE
);
parcelHelpers.export(exports, "LOGGING_SERVICE", ()=>LOGGING_SERVICE
);
parcelHelpers.export(exports, "APM_SERVER", ()=>APM_SERVER
);
parcelHelpers.export(exports, "TRUNCATED_TYPE", ()=>TRUNCATED_TYPE
);
parcelHelpers.export(exports, "FIRST_INPUT", ()=>FIRST_INPUT
);
parcelHelpers.export(exports, "LAYOUT_SHIFT", ()=>LAYOUT_SHIFT
);
parcelHelpers.export(exports, "OUTCOME_SUCCESS", ()=>OUTCOME_SUCCESS
);
parcelHelpers.export(exports, "OUTCOME_FAILURE", ()=>OUTCOME_FAILURE
);
parcelHelpers.export(exports, "SESSION_TIMEOUT", ()=>SESSION_TIMEOUT
);
var SCHEDULE = 'schedule';
var INVOKE = 'invoke';
var ADD_EVENT_LISTENER_STR = 'addEventListener';
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
var RESOURCE_INITIATOR_TYPES = [
    'link',
    'css',
    'script',
    'img',
    'xmlhttprequest',
    'fetch',
    'beacon',
    'iframe'
];
var REUSABILITY_THRESHOLD = 5000;
var MAX_SPAN_DURATION = 300000;
var PAGE_LOAD = 'page-load';
var ROUTE_CHANGE = 'route-change';
var TYPE_CUSTOM = 'custom';
var USER_INTERACTION = 'user-interaction';
var HTTP_REQUEST_TYPE = 'http-request';
var TEMPORARY_TYPE = 'temporary';
var NAME_UNKNOWN = 'Unknown';
var TRANSACTION_TYPE_ORDER = [
    PAGE_LOAD,
    ROUTE_CHANGE,
    USER_INTERACTION,
    HTTP_REQUEST_TYPE,
    TYPE_CUSTOM,
    TEMPORARY_TYPE
];
var OUTCOME_SUCCESS = 'success';
var OUTCOME_FAILURE = 'failure';
var USER_TIMING_THRESHOLD = 60;
var TRANSACTION_START = 'transaction:start';
var TRANSACTION_END = 'transaction:end';
var CONFIG_CHANGE = 'config:change';
var XMLHTTPREQUEST = 'xmlhttprequest';
var FETCH = 'fetch';
var HISTORY = 'history';
var EVENT_TARGET = 'eventtarget';
var ERROR = 'error';
var BEFORE_EVENT = ':before';
var AFTER_EVENT = ':after';
var LOCAL_CONFIG_KEY = 'elastic_apm_config';
var LONG_TASK = 'longtask';
var PAINT = 'paint';
var MEASURE = 'measure';
var NAVIGATION = 'navigation';
var RESOURCE = 'resource';
var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';
var LARGEST_CONTENTFUL_PAINT = 'largest-contentful-paint';
var FIRST_INPUT = 'first-input';
var LAYOUT_SHIFT = 'layout-shift';
var ERRORS = 'errors';
var TRANSACTIONS = 'transactions';
var CONFIG_SERVICE = 'ConfigService';
var LOGGING_SERVICE = 'LoggingService';
var APM_SERVER = 'ApmServer';
var TRUNCATED_TYPE = '.truncated';
var KEYWORD_LIMIT = 1024;
var SESSION_TIMEOUT = 1800000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4K50u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "truncate", ()=>truncate
);
parcelHelpers.export(exports, "truncateModel", ()=>truncateModel
);
parcelHelpers.export(exports, "SPAN_MODEL", ()=>SPAN_MODEL
);
parcelHelpers.export(exports, "TRANSACTION_MODEL", ()=>TRANSACTION_MODEL
);
parcelHelpers.export(exports, "ERROR_MODEL", ()=>ERROR_MODEL
);
parcelHelpers.export(exports, "METADATA_MODEL", ()=>METADATA_MODEL
);
parcelHelpers.export(exports, "RESPONSE_MODEL", ()=>RESPONSE_MODEL
);
var _constants = require("./constants");
var METADATA_MODEL = {
    service: {
        name: [
            _constants.KEYWORD_LIMIT,
            true
        ],
        version: true,
        agent: {
            version: [
                _constants.KEYWORD_LIMIT,
                true
            ]
        },
        environment: true
    },
    labels: {
        '*': true
    }
};
var RESPONSE_MODEL = {
    '*': true,
    headers: {
        '*': true
    }
};
var DESTINATION_MODEL = {
    address: [
        _constants.KEYWORD_LIMIT
    ],
    service: {
        '*': [
            _constants.KEYWORD_LIMIT,
            true
        ]
    }
};
var CONTEXT_MODEL = {
    user: {
        id: true,
        email: true,
        username: true
    },
    tags: {
        '*': true
    },
    http: {
        response: RESPONSE_MODEL
    },
    destination: DESTINATION_MODEL,
    response: RESPONSE_MODEL
};
var SPAN_MODEL = {
    name: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    type: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    id: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    trace_id: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    parent_id: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    transaction_id: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    subtype: true,
    action: true,
    context: CONTEXT_MODEL
};
var TRANSACTION_MODEL = {
    name: true,
    parent_id: true,
    type: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    id: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    trace_id: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    span_count: {
        started: [
            _constants.KEYWORD_LIMIT,
            true
        ]
    },
    context: CONTEXT_MODEL
};
var ERROR_MODEL = {
    id: [
        _constants.KEYWORD_LIMIT,
        true
    ],
    trace_id: true,
    transaction_id: true,
    parent_id: true,
    culprit: true,
    exception: {
        type: true
    },
    transaction: {
        type: true
    },
    context: CONTEXT_MODEL
};
function truncate(value, limit, required, placeholder) {
    if (limit === void 0) limit = _constants.KEYWORD_LIMIT;
    if (required === void 0) required = false;
    if (placeholder === void 0) placeholder = 'N/A';
    if (required && isEmpty(value)) value = placeholder;
    if (typeof value === 'string') return value.substring(0, limit);
    return value;
}
function isEmpty(value) {
    return value == null || value === '' || typeof value === 'undefined';
}
function replaceValue(target, key, currModel) {
    var value = truncate(target[key], currModel[0], currModel[1]);
    if (isEmpty(value)) {
        delete target[key];
        return;
    }
    target[key] = value;
}
function truncateModel(model, target, childTarget) {
    if (model === void 0) model = {};
    if (childTarget === void 0) childTarget = target;
    var keys = Object.keys(model);
    var emptyArr = [];
    var _loop = function _loop(i) {
        var currKey = keys[i];
        var currModel = model[currKey] === true ? emptyArr : model[currKey];
        if (!Array.isArray(currModel)) truncateModel(currModel, target, childTarget[currKey]);
        else if (currKey === '*') Object.keys(childTarget).forEach(function(key) {
            return replaceValue(childTarget, key, currModel);
        });
        else replaceValue(childTarget, currKey, currModel);
    };
    for(var i1 = 0; i1 < keys.length; i1++)_loop(i1);
    return target;
}

},{"./constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Sdok":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serviceCreators", ()=>serviceCreators
);
parcelHelpers.export(exports, "ServiceFactory", ()=>ServiceFactory
);
var _apmServer = require("./apm-server");
var _apmServerDefault = parcelHelpers.interopDefault(_apmServer);
var _configService = require("./config-service");
var _configServiceDefault = parcelHelpers.interopDefault(_configService);
var _loggingService = require("./logging-service");
var _loggingServiceDefault = parcelHelpers.interopDefault(_loggingService);
var _constants = require("./constants");
var _state = require("../state");
var _serviceCreators;
var serviceCreators = (_serviceCreators = {}, _serviceCreators[_constants.CONFIG_SERVICE] = function() {
    return new _configServiceDefault.default();
}, _serviceCreators[_constants.LOGGING_SERVICE] = function() {
    return new _loggingServiceDefault.default({
        prefix: '[Elastic APM] '
    });
}, _serviceCreators[_constants.APM_SERVER] = function(factory) {
    var _factory$getService = factory.getService([
        _constants.CONFIG_SERVICE,
        _constants.LOGGING_SERVICE
    ]), configService = _factory$getService[0], loggingService = _factory$getService[1];
    return new _apmServerDefault.default(configService, loggingService);
}, _serviceCreators);
var ServiceFactory = function() {
    function ServiceFactory1() {
        this.instances = {};
        this.initialized = false;
    }
    var _proto = ServiceFactory1.prototype;
    _proto.init = function init() {
        if (this.initialized) return;
        this.initialized = true;
        var configService = this.getService(_constants.CONFIG_SERVICE);
        configService.init();
        var _this$getService = this.getService([
            _constants.LOGGING_SERVICE,
            _constants.APM_SERVER
        ]), loggingService = _this$getService[0], apmServer = _this$getService[1];
        configService.events.observe(_constants.CONFIG_CHANGE, function() {
            var logLevel = configService.get('logLevel');
            loggingService.setLevel(logLevel);
        });
        apmServer.init();
    };
    _proto.getService = function getService(name) {
        var _this = this;
        if (typeof name === 'string') {
            if (!this.instances[name]) {
                if (typeof serviceCreators[name] === 'function') this.instances[name] = serviceCreators[name](this);
                else if (_state.__DEV__) console.log('Cannot get service, No creator for: ' + name);
            }
            return this.instances[name];
        } else if (Array.isArray(name)) return name.map(function(n) {
            return _this.getService(n);
        });
    };
    return ServiceFactory1;
}();

},{"./apm-server":"ewgZw","./config-service":"2tjDk","./logging-service":"hcDye","./constants":"f2U8D","../state":"5wzyl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewgZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _queue = require("./queue");
var _queueDefault = parcelHelpers.interopDefault(_queue);
var _throttle = require("./throttle");
var _throttleDefault = parcelHelpers.interopDefault(_throttle);
var _ndjson = require("./ndjson");
var _ndjsonDefault = parcelHelpers.interopDefault(_ndjson);
var _patchUtils = require("./patching/patch-utils");
var _truncate = require("./truncate");
var _constants = require("./constants");
var _utils = require("./utils");
var _polyfills = require("./polyfills");
var _compress = require("./compress");
var _state = require("../state");
var THROTTLE_INTERVAL = 60000;
var ApmServer = function() {
    function ApmServer1(configService, loggingService) {
        this._configService = configService;
        this._loggingService = loggingService;
        this.queue = undefined;
        this.throttleEvents = _utils.noop;
    }
    var _proto = ApmServer1.prototype;
    _proto.init = function init() {
        var _this = this;
        var queueLimit = this._configService.get('queueLimit');
        var flushInterval = this._configService.get('flushInterval');
        var limit = this._configService.get('eventsLimit');
        var onFlush = function onFlush(events) {
            var promise = _this.sendEvents(events);
            if (promise) promise.catch(function(reason) {
                _this._loggingService.warn('Failed sending events!', _this._constructError(reason));
            });
        };
        this.queue = new _queueDefault.default(onFlush, {
            queueLimit: queueLimit,
            flushInterval: flushInterval
        });
        this.throttleEvents = _throttleDefault.default(this.queue.add.bind(this.queue), function() {
            return _this._loggingService.warn('Dropped events due to throttling!');
        }, {
            limit: limit,
            interval: THROTTLE_INTERVAL
        });
    };
    _proto._postJson = function _postJson(endPoint, payload) {
        var _this2 = this;
        var headers = {
            'Content-Type': 'application/x-ndjson'
        };
        var apmRequest = this._configService.get('apmRequest');
        var params = {
            payload: payload,
            headers: headers,
            beforeSend: apmRequest
        };
        return _compress.compressPayload(params).catch(function(error) {
            if (_state.__DEV__) _this2._loggingService.debug('Compressing the payload using CompressionStream API failed', error.message);
            return params;
        }).then(function(result) {
            return _this2._makeHttpRequest('POST', endPoint, result);
        }).then(function(_ref) {
            var responseText = _ref.responseText;
            return responseText;
        });
    };
    _proto._constructError = function _constructError(reason) {
        var url = reason.url, status = reason.status, responseText = reason.responseText;
        if (typeof status == 'undefined') return reason;
        var message = url + ' HTTP status: ' + status;
        if (_state.__DEV__ && responseText) try {
            var serverErrors = [];
            var response = JSON.parse(responseText);
            if (response.errors && response.errors.length > 0) {
                response.errors.forEach(function(err) {
                    return serverErrors.push(err.message);
                });
                message += ' ' + serverErrors.join(',');
            }
        } catch (e) {
            this._loggingService.debug('Error parsing response from APM server', e);
        }
        return new Error(message);
    };
    _proto._makeHttpRequest = function _makeHttpRequest(method, url, _temp) {
        var _ref2 = _temp === void 0 ? {} : _temp, _ref2$timeout = _ref2.timeout, timeout = _ref2$timeout === void 0 ? 10000 : _ref2$timeout, payload = _ref2.payload, headers = _ref2.headers, beforeSend = _ref2.beforeSend;
        return new _polyfills.Promise(function(resolve, reject) {
            var xhr = new window.XMLHttpRequest();
            xhr[_patchUtils.XHR_IGNORE] = true;
            xhr.open(method, url, true);
            xhr.timeout = timeout;
            if (headers) {
                for(var header in headers)if (headers.hasOwnProperty(header)) xhr.setRequestHeader(header, headers[header]);
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    var status = xhr.status, responseText = xhr.responseText;
                    if (status === 0 || status > 399 && status < 600) reject({
                        url: url,
                        status: status,
                        responseText: responseText
                    });
                    else resolve(xhr);
                }
            };
            xhr.onerror = function() {
                var status = xhr.status, responseText = xhr.responseText;
                reject({
                    url: url,
                    status: status,
                    responseText: responseText
                });
            };
            var canSend = true;
            if (typeof beforeSend === 'function') canSend = beforeSend({
                url: url,
                method: method,
                headers: headers,
                payload: payload,
                xhr: xhr
            });
            if (canSend) xhr.send(payload);
            else reject({
                url: url,
                status: 0,
                responseText: 'Request rejected by user configuration.'
            });
        });
    };
    _proto.fetchConfig = function fetchConfig(serviceName, environment) {
        var _this3 = this;
        var serverUrl = this._configService.get('serverUrl');
        var configEndpoint = serverUrl + "/config/v1/rum/agents";
        if (!serviceName) return _polyfills.Promise.reject('serviceName is required for fetching central config.');
        configEndpoint += "?service.name=" + serviceName;
        if (environment) configEndpoint += "&service.environment=" + environment;
        var localConfig = this._configService.getLocalConfig();
        if (localConfig) configEndpoint += "&ifnonematch=" + localConfig.etag;
        var apmRequest = this._configService.get('apmRequest');
        return this._makeHttpRequest('GET', configEndpoint, {
            timeout: 5000,
            beforeSend: apmRequest
        }).then(function(xhr) {
            var status = xhr.status, responseText = xhr.responseText;
            if (status === 304) return localConfig;
            else {
                var remoteConfig = JSON.parse(responseText);
                var etag = xhr.getResponseHeader('etag');
                if (etag) {
                    remoteConfig.etag = etag.replace(/["]/g, '');
                    _this3._configService.setLocalConfig(remoteConfig, true);
                }
                return remoteConfig;
            }
        }).catch(function(reason) {
            var error = _this3._constructError(reason);
            return _polyfills.Promise.reject(error);
        });
    };
    _proto.createMetaData = function createMetaData() {
        var cfg = this._configService;
        var metadata = {
            service: {
                name: cfg.get('serviceName'),
                version: cfg.get('serviceVersion'),
                agent: {
                    name: 'rum-js',
                    version: cfg.version
                },
                language: {
                    name: 'javascript'
                },
                environment: cfg.get('environment')
            },
            labels: cfg.get('context.tags')
        };
        return _truncate.truncateModel(_truncate.METADATA_MODEL, metadata);
    };
    _proto.addError = function addError(error) {
        var _this$throttleEvents;
        this.throttleEvents((_this$throttleEvents = {}, _this$throttleEvents[_constants.ERRORS] = error, _this$throttleEvents));
    };
    _proto.addTransaction = function addTransaction(transaction) {
        var _this$throttleEvents2;
        this.throttleEvents((_this$throttleEvents2 = {}, _this$throttleEvents2[_constants.TRANSACTIONS] = transaction, _this$throttleEvents2));
    };
    _proto.ndjsonErrors = function ndjsonErrors(errors, compress) {
        var key = compress ? 'e' : 'error';
        return errors.map(function(error) {
            var _NDJSON$stringify;
            return _ndjsonDefault.default.stringify((_NDJSON$stringify = {}, _NDJSON$stringify[key] = compress ? _compress.compressError(error) : error, _NDJSON$stringify));
        });
    };
    _proto.ndjsonMetricsets = function ndjsonMetricsets(metricsets) {
        return metricsets.map(function(metricset) {
            return _ndjsonDefault.default.stringify({
                metricset: metricset
            });
        }).join('');
    };
    _proto.ndjsonTransactions = function ndjsonTransactions(transactions, compress) {
        var _this4 = this;
        var key = compress ? 'x' : 'transaction';
        return transactions.map(function(tr) {
            var _NDJSON$stringify2;
            var spans = '', breakdowns = '';
            if (!compress) {
                if (tr.spans) {
                    spans = tr.spans.map(function(span) {
                        return _ndjsonDefault.default.stringify({
                            span: span
                        });
                    }).join('');
                    delete tr.spans;
                }
                if (tr.breakdown) {
                    breakdowns = _this4.ndjsonMetricsets(tr.breakdown);
                    delete tr.breakdown;
                }
            }
            return _ndjsonDefault.default.stringify((_NDJSON$stringify2 = {}, _NDJSON$stringify2[key] = compress ? _compress.compressTransaction(tr) : tr, _NDJSON$stringify2)) + spans + breakdowns;
        });
    };
    _proto.sendEvents = function sendEvents(events) {
        var _payload, _NDJSON$stringify3;
        if (events.length === 0) return;
        var transactions = [];
        var errors = [];
        for(var i = 0; i < events.length; i++){
            var event = events[i];
            if (event[_constants.TRANSACTIONS]) transactions.push(event[_constants.TRANSACTIONS]);
            if (event[_constants.ERRORS]) errors.push(event[_constants.ERRORS]);
        }
        if (transactions.length === 0 && errors.length === 0) return;
        var cfg = this._configService;
        var payload = (_payload = {}, _payload[_constants.TRANSACTIONS] = transactions, _payload[_constants.ERRORS] = errors, _payload);
        var filteredPayload = cfg.applyFilters(payload);
        if (!filteredPayload) {
            this._loggingService.warn('Dropped payload due to filtering!');
            return;
        }
        var apiVersion = cfg.get('apiVersion');
        var compress = apiVersion > 2;
        var ndjson = [];
        var metadata = this.createMetaData();
        var metadataKey = compress ? 'm' : 'metadata';
        ndjson.push(_ndjsonDefault.default.stringify((_NDJSON$stringify3 = {}, _NDJSON$stringify3[metadataKey] = compress ? _compress.compressMetadata(metadata) : metadata, _NDJSON$stringify3)));
        ndjson = ndjson.concat(this.ndjsonErrors(filteredPayload[_constants.ERRORS], compress), this.ndjsonTransactions(filteredPayload[_constants.TRANSACTIONS], compress));
        var ndjsonPayload = ndjson.join('');
        var serverUrlPrefix = cfg.get('serverUrlPrefix') || "/intake/v" + apiVersion + "/rum/events";
        var endPoint = cfg.get('serverUrl') + serverUrlPrefix;
        return this._postJson(endPoint, ndjsonPayload);
    };
    return ApmServer1;
}();
exports.default = ApmServer;

},{"./queue":"8cZLW","./throttle":"8aK61","./ndjson":"6Q1HX","./patching/patch-utils":"lA6aw","./truncate":"4K50u","./constants":"f2U8D","./utils":"f32Di","./polyfills":"7ytA5","./compress":"8aqYw","../state":"5wzyl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cZLW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var Queue = function() {
    function Queue1(onFlush, opts) {
        if (opts === void 0) opts = {};
        this.onFlush = onFlush;
        this.items = [];
        this.queueLimit = opts.queueLimit || -1;
        this.flushInterval = opts.flushInterval || 0;
        this.timeoutId = undefined;
    }
    var _proto = Queue1.prototype;
    _proto._setTimer = function _setTimer() {
        var _this = this;
        this.timeoutId = setTimeout(function() {
            return _this.flush();
        }, this.flushInterval);
    };
    _proto._clear = function _clear() {
        if (typeof this.timeoutId !== 'undefined') {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
        this.items = [];
    };
    _proto.flush = function flush() {
        this.onFlush(this.items);
        this._clear();
    };
    _proto.add = function add(item) {
        this.items.push(item);
        if (this.queueLimit !== -1 && this.items.length >= this.queueLimit) this.flush();
        else if (typeof this.timeoutId === 'undefined') this._setTimer();
    };
    return Queue1;
}();
exports.default = Queue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aK61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function throttle(fn, onThrottle, opts) {
    var context = this;
    var limit = opts.limit;
    var interval = opts.interval;
    var counter = 0;
    var timeoutId;
    return function() {
        counter++;
        if (typeof timeoutId === 'undefined') timeoutId = setTimeout(function() {
            counter = 0;
            timeoutId = undefined;
        }, interval);
        if (counter > limit && typeof onThrottle === 'function') return onThrottle.apply(context, arguments);
        else return fn.apply(context, arguments);
    };
}
exports.default = throttle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Q1HX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var NDJSON = function() {
    function NDJSON1() {}
    NDJSON1.stringify = function stringify(object) {
        return JSON.stringify(object) + '\n';
    };
    return NDJSON1;
}();
exports.default = NDJSON;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lA6aw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "globalState", ()=>globalState
);
parcelHelpers.export(exports, "apmSymbol", ()=>apmSymbol
);
parcelHelpers.export(exports, "patchMethod", ()=>patchMethod
);
parcelHelpers.export(exports, "XHR_IGNORE", ()=>XHR_IGNORE
);
parcelHelpers.export(exports, "XHR_SYNC", ()=>XHR_SYNC
);
parcelHelpers.export(exports, "XHR_URL", ()=>XHR_URL
);
parcelHelpers.export(exports, "XHR_METHOD", ()=>XHR_METHOD
);
var globalState = {
    fetchInProgress: false
};
function apmSymbol(name) {
    return '__apm_symbol__' + name;
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) return true;
    if (propertyDesc.writable === false) return false;
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
function attachOriginToPatched(patched, original) {
    patched[apmSymbol('OriginalDelegate')] = original;
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while(proto && !proto.hasOwnProperty(name))proto = Object.getPrototypeOf(proto);
    if (!proto && target[name]) proto = target;
    var delegateName = apmSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        var desc = proto && Object.getOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);
            proto[name] = function() {
                return patchDelegate(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
var XHR_IGNORE = apmSymbol('xhrIgnore');
var XHR_SYNC = apmSymbol('xhrSync');
var XHR_URL = apmSymbol('xhrURL');
var XHR_METHOD = apmSymbol('xhrMethod');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aqYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compressMetadata", ()=>compressMetadata
);
parcelHelpers.export(exports, "compressTransaction", ()=>compressTransaction
);
parcelHelpers.export(exports, "compressError", ()=>compressError
);
parcelHelpers.export(exports, "compressMetricsets", ()=>compressMetricsets
);
parcelHelpers.export(exports, "compressPayload", ()=>compressPayload
);
var _polyfills = require("./polyfills");
var _captureNavigation = require("../performance-monitoring/capture-navigation");
function compressStackFrames(frames) {
    return frames.map(function(frame) {
        return {
            ap: frame.abs_path,
            f: frame.filename,
            fn: frame.function,
            li: frame.lineno,
            co: frame.colno
        };
    });
}
function compressResponse(response) {
    return {
        ts: response.transfer_size,
        ebs: response.encoded_body_size,
        dbs: response.decoded_body_size
    };
}
function compressHTTP(http) {
    var compressed = {};
    var method = http.method, status_code = http.status_code, url = http.url, response = http.response;
    compressed.url = url;
    if (method) compressed.mt = method;
    if (status_code) compressed.sc = status_code;
    if (response) compressed.r = compressResponse(response);
    return compressed;
}
function compressContext(context) {
    if (!context) return null;
    var compressed = {};
    var page = context.page, http = context.http, response = context.response, destination = context.destination, user = context.user, custom = context.custom;
    if (page) compressed.p = {
        rf: page.referer,
        url: page.url
    };
    if (http) compressed.h = compressHTTP(http);
    if (response) compressed.r = compressResponse(response);
    if (destination) {
        var service = destination.service;
        compressed.dt = {
            se: {
                n: service.name,
                t: service.type,
                rc: service.resource
            },
            ad: destination.address,
            po: destination.port
        };
    }
    if (user) compressed.u = {
        id: user.id,
        un: user.username,
        em: user.email
    };
    if (custom) compressed.cu = custom;
    return compressed;
}
function compressMarks(marks) {
    if (!marks) return null;
    var compressedNtMarks = compressNavigationTimingMarks(marks.navigationTiming);
    var compressed = {
        nt: compressedNtMarks,
        a: compressAgentMarks(compressedNtMarks, marks.agent)
    };
    return compressed;
}
function compressNavigationTimingMarks(ntMarks) {
    if (!ntMarks) return null;
    var compressed = {};
    _captureNavigation.COMPRESSED_NAV_TIMING_MARKS.forEach(function(mark, index) {
        var mapping = _captureNavigation.NAVIGATION_TIMING_MARKS[index];
        compressed[mark] = ntMarks[mapping];
    });
    return compressed;
}
function compressAgentMarks(compressedNtMarks, agentMarks) {
    var compressed = {};
    if (compressedNtMarks) compressed = {
        fb: compressedNtMarks.rs,
        di: compressedNtMarks.di,
        dc: compressedNtMarks.dc
    };
    if (agentMarks) {
        var fp = agentMarks.firstContentfulPaint;
        var lp = agentMarks.largestContentfulPaint;
        if (fp) compressed.fp = fp;
        if (lp) compressed.lp = lp;
    }
    if (Object.keys(compressed).length === 0) return null;
    return compressed;
}
function compressMetadata(metadata) {
    var service = metadata.service, labels = metadata.labels;
    var agent = service.agent, language = service.language;
    return {
        se: {
            n: service.name,
            ve: service.version,
            a: {
                n: agent.name,
                ve: agent.version
            },
            la: {
                n: language.name
            },
            en: service.environment
        },
        l: labels
    };
}
function compressTransaction(transaction) {
    var spans = transaction.spans.map(function(span) {
        var spanData = {
            id: span.id,
            n: span.name,
            t: span.type,
            s: span.start,
            d: span.duration,
            c: compressContext(span.context),
            o: span.outcome,
            sr: span.sample_rate
        };
        if (span.parent_id !== transaction.id) spanData.pid = span.parent_id;
        if (span.sync === true) spanData.sy = true;
        if (span.subtype) spanData.su = span.subtype;
        if (span.action) spanData.ac = span.action;
        return spanData;
    });
    var tr = {
        id: transaction.id,
        tid: transaction.trace_id,
        n: transaction.name,
        t: transaction.type,
        d: transaction.duration,
        c: compressContext(transaction.context),
        k: compressMarks(transaction.marks),
        me: compressMetricsets(transaction.breakdown),
        y: spans,
        yc: {
            sd: spans.length
        },
        sm: transaction.sampled,
        sr: transaction.sample_rate,
        o: transaction.outcome
    };
    if (transaction.experience) {
        var _transaction$experien = transaction.experience, cls = _transaction$experien.cls, fid = _transaction$experien.fid, tbt = _transaction$experien.tbt, longtask = _transaction$experien.longtask;
        tr.exp = {
            cls: cls,
            fid: fid,
            tbt: tbt,
            lt: longtask
        };
    }
    if (transaction.session) {
        var _transaction$session = transaction.session, id = _transaction$session.id, sequence = _transaction$session.sequence;
        tr.ses = {
            id: id,
            seq: sequence
        };
    }
    return tr;
}
function compressError(error) {
    var exception = error.exception;
    var compressed = {
        id: error.id,
        cl: error.culprit,
        ex: {
            mg: exception.message,
            st: compressStackFrames(exception.stacktrace),
            t: error.type
        },
        c: compressContext(error.context)
    };
    var transaction = error.transaction;
    if (transaction) {
        compressed.tid = error.trace_id;
        compressed.pid = error.parent_id;
        compressed.xid = error.transaction_id;
        compressed.x = {
            t: transaction.type,
            sm: transaction.sampled
        };
    }
    return compressed;
}
function compressMetricsets(breakdowns) {
    return breakdowns.map(function(_ref) {
        var span = _ref.span, samples = _ref.samples;
        var isSpan = span != null;
        if (isSpan) return {
            y: {
                t: span.type
            },
            sa: {
                ysc: {
                    v: samples['span.self_time.count'].value
                },
                yss: {
                    v: samples['span.self_time.sum.us'].value
                }
            }
        };
        return {
            sa: {
                xdc: {
                    v: samples['transaction.duration.count'].value
                },
                xds: {
                    v: samples['transaction.duration.sum.us'].value
                },
                xbc: {
                    v: samples['transaction.breakdown.count'].value
                }
            }
        };
    });
}
function compressPayload(params, type) {
    if (type === void 0) type = 'gzip';
    var isCompressionStreamSupported = typeof CompressionStream === 'function';
    return new _polyfills.Promise(function(resolve) {
        if (!isCompressionStreamSupported) return resolve(params);
        var payload1 = params.payload, headers = params.headers, beforeSend = params.beforeSend;
        var payloadStream = new Blob([
            payload1
        ]).stream();
        var compressedStream = payloadStream.pipeThrough(new CompressionStream(type));
        return new Response(compressedStream).blob().then(function(payload) {
            headers['Content-Encoding'] = type;
            return resolve({
                payload: payload,
                headers: headers,
                beforeSend: beforeSend
            });
        });
    });
}

},{"./polyfills":"7ytA5","../performance-monitoring/capture-navigation":"2w27l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2w27l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPageLoadMarks", ()=>getPageLoadMarks
);
parcelHelpers.export(exports, "captureNavigation", ()=>captureNavigation
);
parcelHelpers.export(exports, "createNavigationTimingSpans", ()=>createNavigationTimingSpans
);
parcelHelpers.export(exports, "createResourceTimingSpans", ()=>createResourceTimingSpans
);
parcelHelpers.export(exports, "createUserTimingSpans", ()=>createUserTimingSpans
);
parcelHelpers.export(exports, "NAVIGATION_TIMING_MARKS", ()=>NAVIGATION_TIMING_MARKS
);
parcelHelpers.export(exports, "COMPRESSED_NAV_TIMING_MARKS", ()=>COMPRESSED_NAV_TIMING_MARKS
);
var _span = require("./span");
var _spanDefault = parcelHelpers.interopDefault(_span);
var _constants = require("../common/constants");
var _utils = require("../common/utils");
var _state = require("../state");
var eventPairs = [
    [
        'domainLookupStart',
        'domainLookupEnd',
        'Domain lookup'
    ],
    [
        'connectStart',
        'connectEnd',
        'Making a connection to the server'
    ],
    [
        'requestStart',
        'responseEnd',
        'Requesting and receiving the document'
    ],
    [
        'domLoading',
        'domInteractive',
        'Parsing the document, executing sync. scripts'
    ],
    [
        'domContentLoadedEventStart',
        'domContentLoadedEventEnd',
        'Fire "DOMContentLoaded" event'
    ],
    [
        'loadEventStart',
        'loadEventEnd',
        'Fire "load" event'
    ]
];
function shouldCreateSpan(start, end, trStart, trEnd, baseTime) {
    if (baseTime === void 0) baseTime = 0;
    return typeof start === 'number' && typeof end === 'number' && start >= baseTime && end > start && start - baseTime >= trStart && end - baseTime <= trEnd && end - start < _constants.MAX_SPAN_DURATION && start - baseTime < _constants.MAX_SPAN_DURATION && end - baseTime < _constants.MAX_SPAN_DURATION;
}
function createNavigationTimingSpans(timings, baseTime, trStart, trEnd) {
    var spans = [];
    for(var i = 0; i < eventPairs.length; i++){
        var start = timings[eventPairs[i][0]];
        var end = timings[eventPairs[i][1]];
        if (!shouldCreateSpan(start, end, trStart, trEnd, baseTime)) continue;
        var span = new _spanDefault.default(eventPairs[i][2], 'hard-navigation.browser-timing');
        var data = null;
        if (eventPairs[i][0] === 'requestStart') {
            span.pageResponse = true;
            data = {
                url: location.origin
            };
        }
        span._start = start - baseTime;
        span.end(end - baseTime, data);
        spans.push(span);
    }
    return spans;
}
function createResourceTimingSpan(resourceTimingEntry) {
    var name = resourceTimingEntry.name, initiatorType = resourceTimingEntry.initiatorType, startTime = resourceTimingEntry.startTime, responseEnd = resourceTimingEntry.responseEnd;
    var kind = 'resource';
    if (initiatorType) kind += '.' + initiatorType;
    var spanName = _utils.stripQueryStringFromUrl(name);
    var span = new _spanDefault.default(spanName, kind);
    span._start = startTime;
    span.end(responseEnd, {
        url: name,
        entry: resourceTimingEntry
    });
    return span;
}
function isCapturedByPatching(resourceStartTime, requestPatchTime) {
    return requestPatchTime != null && resourceStartTime > requestPatchTime;
}
function isIntakeAPIEndpoint(url) {
    return /intake\/v\d+\/rum\/events/.test(url);
}
function createResourceTimingSpans(entries, requestPatchTime, trStart, trEnd) {
    var spans = [];
    for(var i = 0; i < entries.length; i++){
        var _entries$i = entries[i], initiatorType = _entries$i.initiatorType, name = _entries$i.name, startTime = _entries$i.startTime, responseEnd = _entries$i.responseEnd;
        if (_constants.RESOURCE_INITIATOR_TYPES.indexOf(initiatorType) === -1 || name == null) continue;
        if ((initiatorType === 'xmlhttprequest' || initiatorType === 'fetch') && (isIntakeAPIEndpoint(name) || isCapturedByPatching(startTime, requestPatchTime))) continue;
        if (shouldCreateSpan(startTime, responseEnd, trStart, trEnd)) spans.push(createResourceTimingSpan(entries[i]));
    }
    return spans;
}
function createUserTimingSpans(entries, trStart, trEnd) {
    var userTimingSpans = [];
    for(var i = 0; i < entries.length; i++){
        var _entries$i2 = entries[i], name = _entries$i2.name, startTime = _entries$i2.startTime, duration = _entries$i2.duration;
        var end = startTime + duration;
        if (duration <= _constants.USER_TIMING_THRESHOLD || !shouldCreateSpan(startTime, end, trStart, trEnd)) continue;
        var kind = 'app';
        var span = new _spanDefault.default(name, kind);
        span._start = startTime;
        span.end(end);
        userTimingSpans.push(span);
    }
    return userTimingSpans;
}
var NAVIGATION_TIMING_MARKS = [
    'fetchStart',
    'domainLookupStart',
    'domainLookupEnd',
    'connectStart',
    'connectEnd',
    'requestStart',
    'responseStart',
    'responseEnd',
    'domLoading',
    'domInteractive',
    'domContentLoadedEventStart',
    'domContentLoadedEventEnd',
    'domComplete',
    'loadEventStart',
    'loadEventEnd'
];
var COMPRESSED_NAV_TIMING_MARKS = [
    'fs',
    'ls',
    'le',
    'cs',
    'ce',
    'qs',
    'rs',
    're',
    'dl',
    'di',
    'ds',
    'de',
    'dc',
    'es',
    'ee'
];
function getNavigationTimingMarks(timing) {
    var fetchStart = timing.fetchStart, navigationStart = timing.navigationStart, responseStart = timing.responseStart, responseEnd = timing.responseEnd;
    if (fetchStart >= navigationStart && responseStart >= fetchStart && responseEnd >= responseStart) {
        var marks = {};
        NAVIGATION_TIMING_MARKS.forEach(function(timingKey) {
            var m = timing[timingKey];
            if (m && m >= fetchStart) marks[timingKey] = parseInt(m - fetchStart);
        });
        return marks;
    }
    return null;
}
function getPageLoadMarks(timing) {
    var marks = getNavigationTimingMarks(timing);
    if (marks == null) return null;
    return {
        navigationTiming: marks,
        agent: {
            timeToFirstByte: marks.responseStart,
            domInteractive: marks.domInteractive,
            domComplete: marks.domComplete
        }
    };
}
function captureNavigation(transaction) {
    if (!transaction.captureTimings) return;
    var trEnd = transaction._end;
    if (transaction.type === _constants.PAGE_LOAD) {
        if (transaction.marks && transaction.marks.custom) {
            var customMarks = transaction.marks.custom;
            Object.keys(customMarks).forEach(function(key) {
                customMarks[key] += transaction._start;
            });
        }
        var trStart = 0;
        transaction._start = trStart;
        var timings = _utils.PERF.timing;
        createNavigationTimingSpans(timings, timings.fetchStart, trStart, trEnd).forEach(function(span) {
            span.traceId = transaction.traceId;
            span.sampled = transaction.sampled;
            if (span.pageResponse && transaction.options.pageLoadSpanId) span.id = transaction.options.pageLoadSpanId;
            transaction.spans.push(span);
        });
        transaction.addMarks(getPageLoadMarks(timings));
    }
    if (_utils.isPerfTimelineSupported()) {
        var _trStart = transaction._start;
        var resourceEntries = _utils.PERF.getEntriesByType(_constants.RESOURCE);
        createResourceTimingSpans(resourceEntries, _state.state.bootstrapTime, _trStart, trEnd).forEach(function(span) {
            return transaction.spans.push(span);
        });
        var userEntries = _utils.PERF.getEntriesByType(_constants.MEASURE);
        createUserTimingSpans(userEntries, _trStart, trEnd).forEach(function(span) {
            return transaction.spans.push(span);
        });
    }
}

},{"./span":"8jSuU","../common/constants":"f2U8D","../common/utils":"f32Di","../state":"5wzyl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jSuU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spanBase = require("./span-base");
var _spanBaseDefault = parcelHelpers.interopDefault(_spanBase);
var _context = require("../common/context");
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
var Span = function(_SpanBase) {
    _inheritsLoose(Span1, _SpanBase);
    function Span1(name, type, options) {
        var _this;
        _this = _SpanBase.call(this, name, type, options) || this;
        _this.parentId = _this.options.parentId;
        _this.subtype = undefined;
        _this.action = undefined;
        if (_this.type.indexOf('.') !== -1) {
            var fields = _this.type.split('.', 3);
            _this.type = fields[0];
            _this.subtype = fields[1];
            _this.action = fields[2];
        }
        _this.sync = _this.options.sync;
        return _this;
    }
    var _proto = Span1.prototype;
    _proto.end = function end(endTime, data) {
        _SpanBase.prototype.end.call(this, endTime);
        _context.addSpanContext(this, data);
    };
    return Span1;
}(_spanBaseDefault.default);
exports.default = Span;

},{"./span-base":"5PZYO","../common/context":"a4Yla","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5PZYO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../common/utils");
var _constants = require("../common/constants");
var SpanBase = function() {
    function SpanBase1(name, type, options) {
        if (options === void 0) options = {};
        if (!name) name = _constants.NAME_UNKNOWN;
        if (!type) type = _constants.TYPE_CUSTOM;
        this.name = name;
        this.type = type;
        this.options = options;
        this.id = options.id || _utils.generateRandomId(16);
        this.traceId = options.traceId;
        this.sampled = options.sampled;
        this.sampleRate = options.sampleRate;
        this.timestamp = options.timestamp;
        this._start = _utils.getTime(options.startTime);
        this._end = undefined;
        this.ended = false;
        this.outcome = undefined;
        this.onEnd = options.onEnd;
    }
    var _proto = SpanBase1.prototype;
    _proto.ensureContext = function ensureContext() {
        if (!this.context) this.context = {};
    };
    _proto.addLabels = function addLabels(tags) {
        this.ensureContext();
        var ctx = this.context;
        if (!ctx.tags) ctx.tags = {};
        var keys = Object.keys(tags);
        keys.forEach(function(k) {
            return _utils.setLabel(k, tags[k], ctx.tags);
        });
    };
    _proto.addContext = function addContext() {
        for(var _len = arguments.length, context = new Array(_len), _key = 0; _key < _len; _key++)context[_key] = arguments[_key];
        if (context.length === 0) return;
        this.ensureContext();
        _utils.merge.apply(void 0, [
            this.context
        ].concat(context));
    };
    _proto.end = function end(endTime) {
        if (this.ended) return;
        this.ended = true;
        this._end = _utils.getTime(endTime);
        this.callOnEnd();
    };
    _proto.callOnEnd = function callOnEnd() {
        if (typeof this.onEnd === 'function') this.onEnd(this);
    };
    _proto.duration = function duration() {
        return _utils.getDuration(this._start, this._end);
    };
    return SpanBase1;
}();
exports.default = SpanBase;

},{"../common/utils":"f32Di","../common/constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wzyl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__DEV__", ()=>__DEV__
);
parcelHelpers.export(exports, "state", ()=>state
);
var __DEV__ = true;
var state = {
    bootstrapTime: null,
    lastHiddenStart: Number.MIN_SAFE_INTEGER
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tjDk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
var _eventHandler = require("./event-handler");
var _eventHandlerDefault = parcelHelpers.interopDefault(_eventHandler);
var _constants = require("./constants");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function getConfigFromScript() {
    var script = _utils.getCurrentScript();
    var config = getDataAttributesFromNode(script);
    return config;
}
function getDataAttributesFromNode(node) {
    if (!node) return {};
    var dataAttrs = {};
    var dataRegex = /^data-([\w-]+)$/;
    var attrs = node.attributes;
    for(var i = 0; i < attrs.length; i++){
        var attr = attrs[i];
        if (dataRegex.test(attr.nodeName)) {
            var key = attr.nodeName.match(dataRegex)[1];
            var camelCasedkey = key.split('-').map(function(value, index) {
                return index > 0 ? value.charAt(0).toUpperCase() + value.substring(1) : value;
            }).join('');
            dataAttrs[camelCasedkey] = attr.value || attr.nodeValue;
        }
    }
    return dataAttrs;
}
var Config = function() {
    function Config1() {
        this.config = {
            serviceName: '',
            serviceVersion: '',
            environment: '',
            serverUrl: 'http://localhost:8200',
            serverUrlPrefix: '',
            active: true,
            instrument: true,
            disableInstrumentations: [],
            logLevel: 'warn',
            breakdownMetrics: false,
            ignoreTransactions: [],
            eventsLimit: 80,
            queueLimit: -1,
            flushInterval: 500,
            distributedTracing: true,
            distributedTracingOrigins: [],
            distributedTracingHeaderName: 'traceparent',
            pageLoadTraceId: '',
            pageLoadSpanId: '',
            pageLoadSampled: false,
            pageLoadTransactionName: '',
            propagateTracestate: false,
            transactionSampleRate: 1,
            centralConfig: false,
            monitorLongtasks: true,
            apiVersion: 2,
            context: {},
            session: false,
            apmRequest: null
        };
        this.events = new _eventHandlerDefault.default();
        this.filters = [];
        this.version = '';
    }
    var _proto = Config1.prototype;
    _proto.init = function init() {
        var scriptData = getConfigFromScript();
        this.setConfig(scriptData);
    };
    _proto.setVersion = function setVersion(version) {
        this.version = version;
    };
    _proto.addFilter = function addFilter(cb) {
        if (typeof cb !== 'function') throw new Error('Argument to must be function');
        this.filters.push(cb);
    };
    _proto.applyFilters = function applyFilters(data) {
        for(var i = 0; i < this.filters.length; i++){
            data = this.filters[i](data);
            if (!data) return;
        }
        return data;
    };
    _proto.get = function get(key) {
        return key.split('.').reduce(function(obj, objKey) {
            return obj && obj[objKey];
        }, this.config);
    };
    _proto.setUserContext = function setUserContext(userContext) {
        if (userContext === void 0) userContext = {};
        var context = {};
        var _userContext = userContext, id = _userContext.id, username = _userContext.username, email = _userContext.email;
        if (typeof id === 'number' || typeof id === 'string') context.id = id;
        if (typeof username === 'string') context.username = username;
        if (typeof email === 'string') context.email = email;
        this.config.context.user = _utils.extend(this.config.context.user || {}, context);
    };
    _proto.setCustomContext = function setCustomContext(customContext) {
        if (customContext === void 0) customContext = {};
        this.config.context.custom = _utils.extend(this.config.context.custom || {}, customContext);
    };
    _proto.addLabels = function addLabels(tags) {
        var _this = this;
        if (!this.config.context.tags) this.config.context.tags = {};
        var keys = Object.keys(tags);
        keys.forEach(function(k) {
            return _utils.setLabel(k, tags[k], _this.config.context.tags);
        });
    };
    _proto.setConfig = function setConfig(properties) {
        if (properties === void 0) properties = {};
        var _properties = properties, transactionSampleRate = _properties.transactionSampleRate, serverUrl = _properties.serverUrl;
        if (serverUrl) properties.serverUrl = serverUrl.replace(/\/+$/, '');
        if (!_utils.isUndefined(transactionSampleRate)) {
            if (transactionSampleRate < 0.0001 && transactionSampleRate > 0) transactionSampleRate = 0.0001;
            properties.transactionSampleRate = Math.round(transactionSampleRate * 10000) / 10000;
        }
        _utils.merge(this.config, properties);
        this.events.send(_constants.CONFIG_CHANGE, [
            this.config
        ]);
    };
    _proto.validate = function validate(properties) {
        if (properties === void 0) properties = {};
        var requiredKeys = [
            'serviceName',
            'serverUrl'
        ];
        var errors = {
            missing: [],
            invalid: []
        };
        Object.keys(properties).forEach(function(key) {
            if (requiredKeys.indexOf(key) !== -1 && !properties[key]) errors.missing.push(key);
        });
        if (properties.serviceName && !/^[a-zA-Z0-9 _-]+$/.test(properties.serviceName)) errors.invalid.push({
            key: 'serviceName',
            value: properties.serviceName,
            allowed: 'a-z, A-Z, 0-9, _, -, <space>'
        });
        var sampleRate = properties.transactionSampleRate;
        if (typeof sampleRate !== 'undefined' && (typeof sampleRate !== 'number' || isNaN(sampleRate) || sampleRate < 0 || sampleRate > 1)) errors.invalid.push({
            key: 'transactionSampleRate',
            value: sampleRate,
            allowed: 'Number between 0 and 1'
        });
        return errors;
    };
    _proto.getLocalConfig = function getLocalConfig() {
        var storage = sessionStorage;
        if (this.config.session) storage = localStorage;
        var config = storage.getItem(_constants.LOCAL_CONFIG_KEY);
        if (config) return JSON.parse(config);
    };
    _proto.setLocalConfig = function setLocalConfig(config, merge) {
        if (config) {
            if (merge) {
                var prevConfig = this.getLocalConfig();
                config = _extends({}, prevConfig, config);
            }
            var storage = sessionStorage;
            if (this.config.session) storage = localStorage;
            storage.setItem(_constants.LOCAL_CONFIG_KEY, JSON.stringify(config));
        }
    };
    return Config1;
}();
exports.default = Config;

},{"./utils":"f32Di","./event-handler":"bJzPP","./constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJzPP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./constants");
var EventHandler = function() {
    function EventHandler1() {
        this.observers = {};
    }
    var _proto = EventHandler1.prototype;
    _proto.observe = function observe(name, fn) {
        var _this = this;
        if (typeof fn === 'function') {
            if (!this.observers[name]) this.observers[name] = [];
            this.observers[name].push(fn);
            return function() {
                var index = _this.observers[name].indexOf(fn);
                if (index > -1) _this.observers[name].splice(index, 1);
            };
        }
    };
    _proto.sendOnly = function sendOnly(name, args) {
        var obs = this.observers[name];
        if (obs) obs.forEach(function(fn) {
            try {
                fn.apply(undefined, args);
            } catch (error) {
                console.log(error, error.stack);
            }
        });
    };
    _proto.send = function send(name, args) {
        this.sendOnly(name + _constants.BEFORE_EVENT, args);
        this.sendOnly(name, args);
        this.sendOnly(name + _constants.AFTER_EVENT, args);
    };
    return EventHandler1;
}();
exports.default = EventHandler;

},{"./constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcDye":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
var LoggingService = function() {
    function LoggingService1(spec) {
        if (spec === void 0) spec = {};
        this.levels = [
            'trace',
            'debug',
            'info',
            'warn',
            'error'
        ];
        this.level = spec.level || 'warn';
        this.prefix = spec.prefix || '';
        this.resetLogMethods();
    }
    var _proto = LoggingService1.prototype;
    _proto.shouldLog = function shouldLog(level) {
        return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
    };
    _proto.setLevel = function setLevel(level) {
        if (level === this.level) return;
        this.level = level;
        this.resetLogMethods();
    };
    _proto.resetLogMethods = function resetLogMethods() {
        var _this = this;
        this.levels.forEach(function(level) {
            _this[level] = _this.shouldLog(level) ? log : _utils.noop;
            function log() {
                var normalizedLevel = level;
                if (level === 'trace' || level === 'debug') normalizedLevel = 'info';
                var args = arguments;
                args[0] = this.prefix + args[0];
                if (console) {
                    var realMethod = console[normalizedLevel] || console.log;
                    if (typeof realMethod === 'function') realMethod.apply(console, args);
                }
            }
        });
    };
    return LoggingService1;
}();
exports.default = LoggingService;

},{"./utils":"f32Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66LBG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerServices", ()=>registerServices
);
var _performanceMonitoring = require("./performance-monitoring");
var _performanceMonitoringDefault = parcelHelpers.interopDefault(_performanceMonitoring);
var _transactionService = require("./transaction-service");
var _transactionServiceDefault = parcelHelpers.interopDefault(_transactionService);
var _constants = require("../common/constants");
var _serviceFactory = require("../common/service-factory");
function registerServices() {
    _serviceFactory.serviceCreators['TransactionService'] = function(serviceFactory) {
        var _serviceFactory$getSe = serviceFactory.getService([
            _constants.LOGGING_SERVICE,
            _constants.CONFIG_SERVICE
        ]), loggingService = _serviceFactory$getSe[0], configService = _serviceFactory$getSe[1];
        return new _transactionServiceDefault.default(loggingService, configService);
    };
    _serviceFactory.serviceCreators['PerformanceMonitoring'] = function(serviceFactory) {
        var _serviceFactory$getSe2 = serviceFactory.getService([
            _constants.APM_SERVER,
            _constants.CONFIG_SERVICE,
            _constants.LOGGING_SERVICE,
            'TransactionService'
        ]), apmServer = _serviceFactory$getSe2[0], configService = _serviceFactory$getSe2[1], loggingService = _serviceFactory$getSe2[2], transactionService = _serviceFactory$getSe2[3];
        return new _performanceMonitoringDefault.default(apmServer, configService, loggingService, transactionService);
    };
}

},{"./performance-monitoring":"1TZI1","./transaction-service":"ecxv9","../common/constants":"f2U8D","../common/service-factory":"4Sdok","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TZI1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groupSmallContinuouslySimilarSpans", ()=>groupSmallContinuouslySimilarSpans
);
parcelHelpers.export(exports, "adjustTransaction", ()=>adjustTransaction
);
parcelHelpers.export(exports, "default", ()=>PerformanceMonitoring
);
var _utils = require("../common/utils");
var _url = require("../common/url");
var _patching = require("../common/patching");
var _patchUtils = require("../common/patching/patch-utils");
var _constants = require("../common/constants");
var _truncate = require("../common/truncate");
var _state = require("../state");
var SIMILAR_SPAN_TO_TRANSACTION_RATIO = 0.05;
var TRANSACTION_DURATION_THRESHOLD = 60000;
function groupSmallContinuouslySimilarSpans(originalSpans, transDuration, threshold) {
    originalSpans.sort(function(spanA, spanB) {
        return spanA._start - spanB._start;
    });
    var spans = [];
    var lastCount = 1;
    originalSpans.forEach(function(span, index) {
        if (spans.length === 0) spans.push(span);
        else {
            var lastSpan = spans[spans.length - 1];
            var isContinuouslySimilar = lastSpan.type === span.type && lastSpan.subtype === span.subtype && lastSpan.action === span.action && lastSpan.name === span.name && span.duration() / transDuration < threshold && (span._start - lastSpan._end) / transDuration < threshold;
            var isLastSpan = originalSpans.length === index + 1;
            if (isContinuouslySimilar) {
                lastCount++;
                lastSpan._end = span._end;
            }
            if (lastCount > 1 && (!isContinuouslySimilar || isLastSpan)) {
                lastSpan.name = lastCount + 'x ' + lastSpan.name;
                lastCount = 1;
            }
            if (!isContinuouslySimilar) spans.push(span);
        }
    });
    return spans;
}
function adjustTransaction(transaction) {
    if (transaction.sampled) {
        var filterdSpans = transaction.spans.filter(function(span) {
            return span.duration() > 0 && span._start >= transaction._start && span._end <= transaction._end;
        });
        if (transaction.isManaged()) {
            var duration = transaction.duration();
            var similarSpans = groupSmallContinuouslySimilarSpans(filterdSpans, duration, SIMILAR_SPAN_TO_TRANSACTION_RATIO);
            transaction.spans = similarSpans;
        } else transaction.spans = filterdSpans;
    } else transaction.resetFields();
    return transaction;
}
var PerformanceMonitoring = function() {
    function PerformanceMonitoring1(apmServer, configService, loggingService, transactionService) {
        this._apmServer = apmServer;
        this._configService = configService;
        this._logginService = loggingService;
        this._transactionService = transactionService;
    }
    var _proto = PerformanceMonitoring1.prototype;
    _proto.init = function init(flags) {
        var _this = this;
        if (flags === void 0) flags = {};
        this._configService.events.observe(_constants.TRANSACTION_END + _constants.AFTER_EVENT, function(tr) {
            var payload = _this.createTransactionPayload(tr);
            if (payload) _this._apmServer.addTransaction(payload);
        });
        if (flags[_constants.HISTORY]) _patching.patchEventHandler.observe(_constants.HISTORY, this.getHistorySub());
        if (flags[_constants.XMLHTTPREQUEST]) _patching.patchEventHandler.observe(_constants.XMLHTTPREQUEST, this.getXHRSub());
        if (flags[_constants.FETCH]) _patching.patchEventHandler.observe(_constants.FETCH, this.getFetchSub());
        if (flags[_constants.EVENT_TARGET]) _patching.patchEventHandler.observe(_constants.EVENT_TARGET, this.getEventTargetSub());
    };
    _proto.getEventTargetSub = function getEventTargetSub() {
        var transactionService = this._transactionService;
        return function(event, task) {
            if (event === _constants.SCHEDULE && task.source === _constants.EVENT_TARGET && task.eventType === 'click') {
                var target = task.target;
                var tagName = target.tagName.toLowerCase();
                var transactionName = tagName;
                if (!!target.dataset.transactionName) transactionName = target.dataset.transactionName;
                else {
                    var name = target.getAttribute('name');
                    if (!!name) transactionName = tagName + "[\"" + name + "\"]";
                }
                var tr = transactionService.startTransaction("Click - " + transactionName, _constants.USER_INTERACTION, {
                    managed: true,
                    canReuse: true,
                    reuseThreshold: 300
                });
                if (tr) {
                    var classes = target.getAttribute('class');
                    if (classes) tr.addContext({
                        custom: {
                            classes: classes
                        }
                    });
                }
            }
        };
    };
    _proto.getHistorySub = function getHistorySub() {
        var transactionService = this._transactionService;
        return function(event, task) {
            if (task.source === _constants.HISTORY && event === _constants.INVOKE) transactionService.startTransaction(task.data.title, 'route-change', {
                managed: true,
                canReuse: true
            });
        };
    };
    _proto.getXHRSub = function getXHRSub() {
        var _this2 = this;
        return function(event, task) {
            if (task.source === _constants.XMLHTTPREQUEST && !_patchUtils.globalState.fetchInProgress) _this2.processAPICalls(event, task);
        };
    };
    _proto.getFetchSub = function getFetchSub() {
        var _this3 = this;
        return function(event, task) {
            if (task.source === _constants.FETCH) _this3.processAPICalls(event, task);
        };
    };
    _proto.processAPICalls = function processAPICalls(event, task) {
        var configService = this._configService;
        var transactionService = this._transactionService;
        if (event === _constants.SCHEDULE && task.data) {
            var data = task.data;
            var requestUrl = new _url.Url(data.url);
            var spanName = data.method + ' ' + (requestUrl.relative ? requestUrl.path : _utils.stripQueryStringFromUrl(requestUrl.href));
            if (!transactionService.getCurrentTransaction()) transactionService.startTransaction(spanName, _constants.HTTP_REQUEST_TYPE, {
                managed: true
            });
            var span = transactionService.startSpan(spanName, 'external.http', {
                blocking: true
            });
            if (!span) return;
            var isDtEnabled = configService.get('distributedTracing');
            var dtOrigins = configService.get('distributedTracingOrigins');
            var currentUrl = new _url.Url(window.location.href);
            var isSameOrigin = _utils.checkSameOrigin(requestUrl.origin, currentUrl.origin) || _utils.checkSameOrigin(requestUrl.origin, dtOrigins);
            var target = data.target;
            if (isDtEnabled && isSameOrigin && target) {
                this.injectDtHeader(span, target);
                var propagateTracestate = configService.get('propagateTracestate');
                if (propagateTracestate) this.injectTSHeader(span, target);
            } else if (_state.__DEV__) this._logginService.debug("Could not inject distributed tracing header to the request origin ('" + requestUrl.origin + "') from the current origin ('" + currentUrl.origin + "')");
            if (data.sync) span.sync = data.sync;
            data.span = span;
        } else if (event === _constants.INVOKE) {
            var _data = task.data;
            if (_data && _data.span) {
                var _span = _data.span, response = _data.response, _target = _data.target;
                var status;
                if (response) status = response.status;
                else status = _target.status;
                var outcome;
                if (_data.status != 'abort') {
                    if (status >= 400 || status == 0) outcome = _constants.OUTCOME_FAILURE;
                    else outcome = _constants.OUTCOME_SUCCESS;
                }
                _span.outcome = outcome;
                var tr = transactionService.getCurrentTransaction();
                if (tr && tr.type === _constants.HTTP_REQUEST_TYPE) tr.outcome = outcome;
                transactionService.endSpan(_span, _data);
            }
        }
    };
    _proto.injectDtHeader = function injectDtHeader(span, target) {
        var headerName = this._configService.get('distributedTracingHeaderName');
        var headerValue = _utils.getDtHeaderValue(span);
        var isHeaderValid = _utils.isDtHeaderValid(headerValue);
        if (isHeaderValid && headerValue && headerName) _utils.setRequestHeader(target, headerName, headerValue);
    };
    _proto.injectTSHeader = function injectTSHeader(span, target) {
        var headerValue = _utils.getTSHeaderValue(span);
        if (headerValue) _utils.setRequestHeader(target, 'tracestate', headerValue);
    };
    _proto.extractDtHeader = function extractDtHeader(target) {
        var configService = this._configService;
        var headerName = configService.get('distributedTracingHeaderName');
        if (target) return _utils.parseDtHeaderValue(target[headerName]);
    };
    _proto.filterTransaction = function filterTransaction(tr) {
        var duration = tr.duration();
        if (!duration) {
            if (_state.__DEV__) {
                var message = "transaction(" + tr.id + ", " + tr.name + ") was discarded! ";
                if (duration === 0) message += "Transaction duration is 0";
                else message += "Transaction wasn't ended";
                this._logginService.debug(message);
            }
            return false;
        }
        if (tr.isManaged()) {
            if (duration > TRANSACTION_DURATION_THRESHOLD) {
                if (_state.__DEV__) this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction duration (" + duration + ") is greater than managed transaction threshold (" + TRANSACTION_DURATION_THRESHOLD + ")");
                return false;
            }
            if (tr.sampled && tr.spans.length === 0) {
                if (_state.__DEV__) this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction does not have any spans");
                return false;
            }
        }
        return true;
    };
    _proto.createTransactionDataModel = function createTransactionDataModel(transaction) {
        var transactionStart = transaction._start;
        var spans = transaction.spans.map(function(span) {
            var spanData = {
                id: span.id,
                transaction_id: transaction.id,
                parent_id: span.parentId || transaction.id,
                trace_id: transaction.traceId,
                name: span.name,
                type: span.type,
                subtype: span.subtype,
                action: span.action,
                sync: span.sync,
                start: parseInt(span._start - transactionStart),
                duration: span.duration(),
                context: span.context,
                outcome: span.outcome,
                sample_rate: span.sampleRate
            };
            return _truncate.truncateModel(_truncate.SPAN_MODEL, spanData);
        });
        var transactionData = {
            id: transaction.id,
            trace_id: transaction.traceId,
            session: transaction.session,
            name: transaction.name,
            type: transaction.type,
            duration: transaction.duration(),
            spans: spans,
            context: transaction.context,
            marks: transaction.marks,
            breakdown: transaction.breakdownTimings,
            span_count: {
                started: spans.length
            },
            sampled: transaction.sampled,
            sample_rate: transaction.sampleRate,
            experience: transaction.experience,
            outcome: transaction.outcome
        };
        return _truncate.truncateModel(_truncate.TRANSACTION_MODEL, transactionData);
    };
    _proto.createTransactionPayload = function createTransactionPayload(transaction) {
        var adjustedTransaction = adjustTransaction(transaction);
        var filtered = this.filterTransaction(adjustedTransaction);
        if (filtered) return this.createTransactionDataModel(transaction);
    };
    return PerformanceMonitoring1;
}();

},{"../common/utils":"f32Di","../common/url":"9VSZm","../common/patching":"dj6fY","../common/patching/patch-utils":"lA6aw","../common/constants":"f2U8D","../common/truncate":"4K50u","../state":"5wzyl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dj6fY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "patchAll", ()=>patchAll
);
parcelHelpers.export(exports, "patchEventHandler", ()=>patchEventHandler
);
var _xhrPatch = require("./xhr-patch");
var _fetchPatch = require("./fetch-patch");
var _historyPatch = require("./history-patch");
var _eventTargetPatch = require("./event-target-patch");
var _eventHandler = require("../event-handler");
var _eventHandlerDefault = parcelHelpers.interopDefault(_eventHandler);
var _constants = require("../constants");
var patchEventHandler = new _eventHandlerDefault.default();
var alreadyPatched = false;
function patchAll() {
    if (!alreadyPatched) {
        alreadyPatched = true;
        _xhrPatch.patchXMLHttpRequest(function(event, task) {
            patchEventHandler.send(_constants.XMLHTTPREQUEST, [
                event,
                task
            ]);
        });
        _fetchPatch.patchFetch(function(event, task) {
            patchEventHandler.send(_constants.FETCH, [
                event,
                task
            ]);
        });
        _historyPatch.patchHistory(function(event, task) {
            patchEventHandler.send(_constants.HISTORY, [
                event,
                task
            ]);
        });
        _eventTargetPatch.patchEventTarget(function(event, task) {
            patchEventHandler.send(_constants.EVENT_TARGET, [
                event,
                task
            ]);
        });
    }
    return patchEventHandler;
}

},{"./xhr-patch":"6jbAk","./fetch-patch":"bPEdV","./history-patch":"kxKjS","./event-target-patch":"aIQpT","../event-handler":"bJzPP","../constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jbAk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "patchXMLHttpRequest", ()=>patchXMLHttpRequest
);
var _patchUtils = require("./patch-utils");
var _constants = require("../constants");
function patchXMLHttpRequest(callback) {
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    if (!XMLHttpRequestPrototype || !XMLHttpRequestPrototype[_constants.ADD_EVENT_LISTENER_STR]) return;
    var READY_STATE_CHANGE = 'readystatechange';
    var LOAD = 'load';
    var ERROR = 'error';
    var TIMEOUT = 'timeout';
    var ABORT = 'abort';
    function invokeTask(task, status) {
        if (task.state !== _constants.INVOKE) {
            task.state = _constants.INVOKE;
            task.data.status = status;
            callback(_constants.INVOKE, task);
        }
    }
    function scheduleTask(task) {
        if (task.state === _constants.SCHEDULE) return;
        task.state = _constants.SCHEDULE;
        callback(_constants.SCHEDULE, task);
        var target = task.data.target;
        function addListener(name) {
            target[_constants.ADD_EVENT_LISTENER_STR](name, function(_ref) {
                var type = _ref.type;
                if (type === READY_STATE_CHANGE) {
                    if (target.readyState === 4 && target.status !== 0) invokeTask(task, 'success');
                } else {
                    var status = type === LOAD ? 'success' : type;
                    invokeTask(task, status);
                }
            });
        }
        addListener(READY_STATE_CHANGE);
        addListener(LOAD);
        addListener(TIMEOUT);
        addListener(ERROR);
        addListener(ABORT);
    }
    var openNative = _patchUtils.patchMethod(XMLHttpRequestPrototype, 'open', function() {
        return function(self, args) {
            if (!self[_patchUtils.XHR_IGNORE]) {
                self[_patchUtils.XHR_METHOD] = args[0];
                self[_patchUtils.XHR_URL] = args[1];
                self[_patchUtils.XHR_SYNC] = args[2] === false;
            }
            return openNative.apply(self, args);
        };
    });
    var sendNative = _patchUtils.patchMethod(XMLHttpRequestPrototype, 'send', function() {
        return function(self, args) {
            if (self[_patchUtils.XHR_IGNORE]) return sendNative.apply(self, args);
            var task = {
                source: _constants.XMLHTTPREQUEST,
                state: '',
                type: 'macroTask',
                data: {
                    target: self,
                    method: self[_patchUtils.XHR_METHOD],
                    sync: self[_patchUtils.XHR_SYNC],
                    url: self[_patchUtils.XHR_URL],
                    status: ''
                }
            };
            try {
                scheduleTask(task);
                return sendNative.apply(self, args);
            } catch (e) {
                invokeTask(task, ERROR);
                throw e;
            }
        };
    });
}

},{"./patch-utils":"lA6aw","../constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPEdV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "patchFetch", ()=>patchFetch
);
var _polyfills = require("../polyfills");
var _patchUtils = require("./patch-utils");
var _constants = require("../constants");
var _utils = require("../utils");
function patchFetch(callback) {
    if (!window.fetch || !window.Request) return;
    function scheduleTask(task) {
        task.state = _constants.SCHEDULE;
        callback(_constants.SCHEDULE, task);
    }
    function invokeTask(task) {
        task.state = _constants.INVOKE;
        callback(_constants.INVOKE, task);
    }
    var nativeFetch = window.fetch;
    window.fetch = function(input, init) {
        var fetchSelf = this;
        var args = arguments;
        var request, url;
        if (typeof input === 'string') {
            request = new Request(input, init);
            url = input;
        } else if (input) {
            request = input;
            url = request.url;
        } else return nativeFetch.apply(fetchSelf, args);
        var task = {
            source: _constants.FETCH,
            state: '',
            type: 'macroTask',
            data: {
                target: request,
                method: request.method,
                url: url,
                aborted: false
            }
        };
        return new _polyfills.Promise(function(resolve, reject) {
            _patchUtils.globalState.fetchInProgress = true;
            scheduleTask(task);
            var promise;
            try {
                promise = nativeFetch.apply(fetchSelf, [
                    request
                ]);
            } catch (error1) {
                reject(error1);
                task.data.error = error1;
                invokeTask(task);
                _patchUtils.globalState.fetchInProgress = false;
                return;
            }
            promise.then(function(response) {
                resolve(response);
                _utils.scheduleMicroTask(function() {
                    task.data.response = response;
                    invokeTask(task);
                });
            }, function(error) {
                reject(error);
                _utils.scheduleMicroTask(function() {
                    task.data.error = error;
                    invokeTask(task);
                });
            });
            _patchUtils.globalState.fetchInProgress = false;
        });
    };
}

},{"../polyfills":"7ytA5","./patch-utils":"lA6aw","../constants":"f2U8D","../utils":"f32Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxKjS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "patchHistory", ()=>patchHistory
);
var _constants = require("../constants");
function patchHistory(callback) {
    if (!window.history) return;
    var nativePushState = history.pushState;
    if (typeof nativePushState === 'function') history.pushState = function(state, title, url) {
        var task = {
            source: _constants.HISTORY,
            data: {
                state: state,
                title: title,
                url: url
            }
        };
        callback(_constants.INVOKE, task);
        nativePushState.apply(this, arguments);
    };
}

},{"../constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIQpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "patchEventTarget", ()=>patchEventTarget
);
var _constants = require("../constants");
var _patchUtils = require("./patch-utils");
var eventTypes = [
    'click'
];
var eventTypeSymbols = {};
for(var i = 0; i < eventTypes.length; i++){
    var et = eventTypes[i];
    eventTypeSymbols[et] = _patchUtils.apmSymbol(et);
}
function shouldInstrumentEvent(target, eventType, listenerFn) {
    return target instanceof EventTarget && eventTypes.indexOf(eventType) >= 0 && typeof listenerFn === 'function';
}
function patchEventTarget(callback) {
    if (!window.EventTarget) return;
    var proto = window.EventTarget.prototype;
    var nativeAddEventListener = proto[_constants.ADD_EVENT_LISTENER_STR];
    var nativeRemoveEventListener = proto[_constants.REMOVE_EVENT_LISTENER_STR];
    function findTaskIndex(existingTasks, eventType, listenerFn, capture) {
        for(var _i = 0; _i < existingTasks.length; _i++){
            var task = existingTasks[_i];
            if (task.eventType === eventType && task.listenerFn === listenerFn && task.capture === capture) return _i;
        }
        return -1;
    }
    function isCapture(options) {
        var capture;
        if (typeof options === 'boolean') capture = options;
        else capture = options ? !!options.capture : false;
        return capture;
    }
    function createListenerWrapper(target, eventType, listenerFn, options) {
        var eventSymbol = eventTypeSymbols[eventType];
        if (!eventSymbol) return listenerFn;
        var existingTasks = target[eventSymbol];
        var capture = isCapture(options);
        if (existingTasks) {
            var taskIndex = findTaskIndex(existingTasks, eventType, listenerFn, capture);
            if (taskIndex !== -1) {
                var _task = existingTasks[taskIndex];
                return _task.wrappingFn;
            }
        } else existingTasks = target[eventSymbol] = [];
        var task = {
            source: _constants.EVENT_TARGET,
            eventType: eventType,
            listenerFn: listenerFn,
            capture: capture,
            wrappingFn: wrappingFn
        };
        existingTasks.push(task);
        function wrappingFn() {
            var event = arguments[0];
            task.target = event.target;
            callback(_constants.SCHEDULE, task);
            var result;
            try {
                result = listenerFn.apply(this, arguments);
            } finally{
                callback(_constants.INVOKE, task);
            }
            return result;
        }
        return wrappingFn;
    }
    function getWrappingFn(target, eventType, listenerFn, options) {
        var eventSymbol = eventTypeSymbols[eventType];
        var existingTasks = target[eventSymbol];
        if (existingTasks) {
            var capture = isCapture(options);
            var taskIndex = findTaskIndex(existingTasks, eventType, listenerFn, capture);
            if (taskIndex !== -1) {
                var task = existingTasks[taskIndex];
                existingTasks.splice(taskIndex, 1);
                if (existingTasks.length === 0) target[eventSymbol] = undefined;
                return task.wrappingFn;
            }
        }
        return listenerFn;
    }
    proto[_constants.ADD_EVENT_LISTENER_STR] = function(eventType, listenerFn, optionsOrCapture) {
        var target = this;
        if (!shouldInstrumentEvent(target, eventType, listenerFn)) return nativeAddEventListener.apply(target, arguments);
        var wrappingListenerFn = createListenerWrapper(target, eventType, listenerFn, optionsOrCapture);
        var args = Array.prototype.slice.call(arguments);
        args[1] = wrappingListenerFn;
        return nativeAddEventListener.apply(target, args);
    };
    proto[_constants.REMOVE_EVENT_LISTENER_STR] = function(eventType, listenerFn, optionsOrCapture) {
        var target = this;
        if (!shouldInstrumentEvent(target, eventType, listenerFn)) return nativeRemoveEventListener.apply(target, arguments);
        var wrappingFn = getWrappingFn(target, eventType, listenerFn, optionsOrCapture);
        var args = Array.prototype.slice.call(arguments);
        args[1] = wrappingFn;
        return nativeRemoveEventListener.apply(target, args);
    };
}

},{"../constants":"f2U8D","./patch-utils":"lA6aw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecxv9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _polyfills = require("../common/polyfills");
var _transaction = require("./transaction");
var _transactionDefault = parcelHelpers.interopDefault(_transaction);
var _metrics = require("./metrics");
var _utils = require("../common/utils");
var _captureNavigation = require("./capture-navigation");
var _constants = require("../common/constants");
var _context = require("../common/context");
var _state = require("../state");
var _url = require("../common/url");
var TransactionService = function() {
    function TransactionService1(logger, config) {
        var _this = this;
        this._config = config;
        this._logger = logger;
        this.currentTransaction = undefined;
        this.respIntervalId = undefined;
        this.recorder = new _metrics.PerfEntryRecorder(function(list) {
            var tr = _this.getCurrentTransaction();
            if (tr && tr.captureTimings) {
                var _tr$spans;
                var isHardNavigation = tr.type === _constants.PAGE_LOAD;
                var _captureObserverEntri = _metrics.captureObserverEntries(list, {
                    isHardNavigation: isHardNavigation,
                    trStart: isHardNavigation ? 0 : tr._start
                }), spans = _captureObserverEntri.spans, marks = _captureObserverEntri.marks;
                (_tr$spans = tr.spans).push.apply(_tr$spans, spans);
                tr.addMarks({
                    agent: marks
                });
            }
        });
    }
    var _proto = TransactionService1.prototype;
    _proto.createCurrentTransaction = function createCurrentTransaction(name, type, options) {
        var tr = new _transactionDefault.default(name, type, options);
        this.currentTransaction = tr;
        return tr;
    };
    _proto.getCurrentTransaction = function getCurrentTransaction() {
        if (this.currentTransaction && !this.currentTransaction.ended) return this.currentTransaction;
    };
    _proto.createOptions = function createOptions(options) {
        var config = this._config.config;
        var presetOptions = {
            transactionSampleRate: config.transactionSampleRate
        };
        var perfOptions = _utils.extend(presetOptions, options);
        if (perfOptions.managed) perfOptions = _utils.extend({
            pageLoadTraceId: config.pageLoadTraceId,
            pageLoadSampled: config.pageLoadSampled,
            pageLoadSpanId: config.pageLoadSpanId,
            pageLoadTransactionName: config.pageLoadTransactionName
        }, perfOptions);
        return perfOptions;
    };
    _proto.startManagedTransaction = function startManagedTransaction(name, type, perfOptions) {
        var tr = this.getCurrentTransaction();
        var isRedefined = false;
        if (!tr) tr = this.createCurrentTransaction(name, type, perfOptions);
        else if (tr.canReuse() && perfOptions.canReuse) {
            var redefineType = tr.type;
            var currentTypeOrder = _constants.TRANSACTION_TYPE_ORDER.indexOf(tr.type);
            var redefineTypeOrder = _constants.TRANSACTION_TYPE_ORDER.indexOf(type);
            if (currentTypeOrder >= 0 && redefineTypeOrder < currentTypeOrder) redefineType = type;
            if (_state.__DEV__) this._logger.debug("redefining transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", 'to', "(" + (name || tr.name) + ", " + redefineType + ")", tr);
            tr.redefine(name, redefineType, perfOptions);
            isRedefined = true;
        } else {
            if (_state.__DEV__) this._logger.debug("ending previous transaction(" + tr.id + ", " + tr.name + ")", tr);
            tr.end();
            tr = this.createCurrentTransaction(name, type, perfOptions);
        }
        if (tr.type === _constants.PAGE_LOAD) {
            if (!isRedefined) {
                this.recorder.start(_constants.LARGEST_CONTENTFUL_PAINT);
                this.recorder.start(_constants.PAINT);
                this.recorder.start(_constants.FIRST_INPUT);
                this.recorder.start(_constants.LAYOUT_SHIFT);
            }
            if (perfOptions.pageLoadTraceId) tr.traceId = perfOptions.pageLoadTraceId;
            if (perfOptions.pageLoadSampled) tr.sampled = perfOptions.pageLoadSampled;
            if (tr.name === _constants.NAME_UNKNOWN && perfOptions.pageLoadTransactionName) tr.name = perfOptions.pageLoadTransactionName;
        }
        if (!isRedefined && this._config.get('monitorLongtasks')) this.recorder.start(_constants.LONG_TASK);
        if (tr.sampled) tr.captureTimings = true;
        return tr;
    };
    _proto.startTransaction = function startTransaction(name, type, options) {
        var _this2 = this;
        var perfOptions = this.createOptions(options);
        var tr;
        var fireOnstartHook = true;
        if (perfOptions.managed) {
            var current = this.currentTransaction;
            tr = this.startManagedTransaction(name, type, perfOptions);
            if (current === tr) fireOnstartHook = false;
        } else tr = new _transactionDefault.default(name, type, perfOptions);
        tr.onEnd = function() {
            return _this2.handleTransactionEnd(tr);
        };
        if (fireOnstartHook) {
            if (_state.__DEV__) this._logger.debug("startTransaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")");
            this._config.events.send(_constants.TRANSACTION_START, [
                tr
            ]);
        }
        return tr;
    };
    _proto.handleTransactionEnd = function handleTransactionEnd(tr) {
        var _this3 = this;
        this.recorder.stop();
        var currentUrl = window.location.href;
        return _polyfills.Promise.resolve().then(function() {
            var name = tr.name, type = tr.type;
            var lastHiddenStart = _state.state.lastHiddenStart;
            if (lastHiddenStart >= tr._start) {
                if (_state.__DEV__) _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") was discarded! The page was hidden during the transaction!");
                return;
            }
            if (_this3.shouldIgnoreTransaction(name) || type === _constants.TEMPORARY_TYPE) {
                if (_state.__DEV__) _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") is ignored");
                return;
            }
            if (type === _constants.PAGE_LOAD) {
                var pageLoadTransactionName = _this3._config.get('pageLoadTransactionName');
                if (name === _constants.NAME_UNKNOWN && pageLoadTransactionName) tr.name = pageLoadTransactionName;
                if (tr.captureTimings) {
                    var cls = _metrics.metrics.cls, fid = _metrics.metrics.fid, tbt = _metrics.metrics.tbt, longtask = _metrics.metrics.longtask;
                    if (tbt.duration > 0) tr.spans.push(_metrics.createTotalBlockingTimeSpan(tbt));
                    tr.experience = {};
                    if (_utils.isPerfTypeSupported(_constants.LONG_TASK)) tr.experience.tbt = tbt.duration;
                    if (_utils.isPerfTypeSupported(_constants.LAYOUT_SHIFT)) tr.experience.cls = cls.score;
                    if (fid > 0) tr.experience.fid = fid;
                    if (longtask.count > 0) tr.experience.longtask = {
                        count: longtask.count,
                        sum: longtask.duration,
                        max: longtask.max
                    };
                }
                _this3.setSession(tr);
            }
            if (tr.name === _constants.NAME_UNKNOWN) tr.name = _url.slugifyUrl(currentUrl);
            _captureNavigation.captureNavigation(tr);
            _this3.adjustTransactionTime(tr);
            var breakdownMetrics = _this3._config.get('breakdownMetrics');
            if (breakdownMetrics) tr.captureBreakdown();
            var configContext = _this3._config.get('context');
            _context.addTransactionContext(tr, configContext);
            _this3._config.events.send(_constants.TRANSACTION_END, [
                tr
            ]);
            if (_state.__DEV__) _this3._logger.debug("end transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", tr);
        }, function(err) {
            if (_state.__DEV__) _this3._logger.debug("error ending transaction(" + tr.id + ", " + tr.name + ")", err);
        });
    };
    _proto.setSession = function setSession(tr) {
        var session = this._config.get('session');
        if (session) {
            if (typeof session == 'boolean') tr.session = {
                id: _utils.generateRandomId(16),
                sequence: 1
            };
            else if (session.timestamp && Date.now() - session.timestamp > _constants.SESSION_TIMEOUT) tr.session = {
                id: _utils.generateRandomId(16),
                sequence: 1
            };
            else tr.session = {
                id: session.id,
                sequence: session.sequence ? session.sequence + 1 : 1
            };
            var sessionConfig = {
                session: {
                    id: tr.session.id,
                    sequence: tr.session.sequence,
                    timestamp: Date.now()
                }
            };
            this._config.setConfig(sessionConfig);
            this._config.setLocalConfig(sessionConfig, true);
        }
    };
    _proto.adjustTransactionTime = function adjustTransactionTime(transaction) {
        var spans = transaction.spans;
        var earliestSpan = _utils.getEarliestSpan(spans);
        if (earliestSpan && earliestSpan._start < transaction._start) transaction._start = earliestSpan._start;
        var latestSpan = _utils.getLatestNonXHRSpan(spans);
        if (latestSpan && latestSpan._end > transaction._end) transaction._end = latestSpan._end;
        var transactionEnd = transaction._end;
        for(var i = 0; i < spans.length; i++){
            var span = spans[i];
            if (span._end > transactionEnd) {
                span._end = transactionEnd;
                span.type += _constants.TRUNCATED_TYPE;
            }
            if (span._start > transactionEnd) span._start = transactionEnd;
        }
    };
    _proto.shouldIgnoreTransaction = function shouldIgnoreTransaction(transactionName) {
        var ignoreList = this._config.get('ignoreTransactions');
        if (ignoreList && ignoreList.length) for(var i = 0; i < ignoreList.length; i++){
            var element = ignoreList[i];
            if (typeof element.test === 'function') {
                if (element.test(transactionName)) return true;
            } else if (element === transactionName) return true;
        }
        return false;
    };
    _proto.startSpan = function startSpan(name, type, options) {
        var tr = this.getCurrentTransaction();
        if (!tr) tr = this.createCurrentTransaction(undefined, _constants.TEMPORARY_TYPE, this.createOptions({
            canReuse: true,
            managed: true
        }));
        var span = tr.startSpan(name, type, options);
        if (_state.__DEV__) this._logger.debug("startSpan(" + name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
        return span;
    };
    _proto.endSpan = function endSpan(span, context) {
        if (!span) return;
        if (_state.__DEV__) {
            var tr = this.getCurrentTransaction();
            tr && this._logger.debug("endSpan(" + span.name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
        }
        span.end(null, context);
    };
    return TransactionService1;
}();
exports.default = TransactionService;

},{"../common/polyfills":"7ytA5","./transaction":"2cBCH","./metrics":"ejxkz","../common/utils":"f32Di","./capture-navigation":"2w27l","../common/constants":"f2U8D","../common/context":"a4Yla","../state":"5wzyl","../common/url":"9VSZm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2cBCH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _span = require("./span");
var _spanDefault = parcelHelpers.interopDefault(_span);
var _spanBase = require("./span-base");
var _spanBaseDefault = parcelHelpers.interopDefault(_spanBase);
var _utils = require("../common/utils");
var _constants = require("../common/constants");
var _breakdown = require("./breakdown");
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
var Transaction = function(_SpanBase) {
    _inheritsLoose(Transaction1, _SpanBase);
    function Transaction1(name, type, options) {
        var _this;
        _this = _SpanBase.call(this, name, type, options) || this;
        _this.traceId = _utils.generateRandomId();
        _this.marks = undefined;
        _this.spans = [];
        _this._activeSpans = {};
        _this._activeTasks = new Set();
        _this.blocked = false;
        _this.captureTimings = false;
        _this.breakdownTimings = [];
        _this.sampleRate = _this.options.transactionSampleRate;
        _this.sampled = Math.random() <= _this.sampleRate;
        return _this;
    }
    var _proto = Transaction1.prototype;
    _proto.addMarks = function addMarks(obj) {
        this.marks = _utils.merge(this.marks || {}, obj);
    };
    _proto.mark = function mark(key) {
        var skey = _utils.removeInvalidChars(key);
        var markTime = _utils.now() - this._start;
        var custom = {};
        custom[skey] = markTime;
        this.addMarks({
            custom: custom
        });
    };
    _proto.canReuse = function canReuse() {
        var threshold = this.options.reuseThreshold || _constants.REUSABILITY_THRESHOLD;
        return !!this.options.canReuse && !this.ended && _utils.now() - this._start < threshold;
    };
    _proto.redefine = function redefine(name, type, options) {
        if (name) this.name = name;
        if (type) this.type = type;
        if (options) _utils.extend(this.options, options);
    };
    _proto.startSpan = function startSpan(name, type, options) {
        var _this2 = this;
        if (this.ended) return;
        var opts = _utils.extend({}, options);
        opts.onEnd = function(trc) {
            _this2._onSpanEnd(trc);
        };
        opts.traceId = this.traceId;
        opts.sampled = this.sampled;
        opts.sampleRate = this.sampleRate;
        if (!opts.parentId) opts.parentId = this.id;
        var span = new _spanDefault.default(name, type, opts);
        this._activeSpans[span.id] = span;
        if (opts.blocking) this.addTask(span.id);
        return span;
    };
    _proto.isFinished = function isFinished() {
        return !this.blocked && this._activeTasks.size === 0;
    };
    _proto.detectFinish = function detectFinish() {
        if (this.isFinished()) this.end();
    };
    _proto.end = function end(endTime) {
        if (this.ended) return;
        this.ended = true;
        this._end = _utils.getTime(endTime);
        for(var sid in this._activeSpans){
            var span = this._activeSpans[sid];
            span.type = span.type + _constants.TRUNCATED_TYPE;
            span.end(endTime);
        }
        this.callOnEnd();
    };
    _proto.captureBreakdown = function captureBreakdown() {
        this.breakdownTimings = _breakdown.captureBreakdown(this);
    };
    _proto.block = function block(flag) {
        this.blocked = flag;
        if (!this.blocked) this.detectFinish();
    };
    _proto.addTask = function addTask(taskId) {
        if (!taskId) taskId = 'task-' + _utils.generateRandomId(16);
        this._activeTasks.add(taskId);
        return taskId;
    };
    _proto.removeTask = function removeTask(taskId) {
        var deleted = this._activeTasks.delete(taskId);
        deleted && this.detectFinish();
    };
    _proto.resetFields = function resetFields() {
        this.spans = [];
        this.sampleRate = 0;
    };
    _proto._onSpanEnd = function _onSpanEnd(span) {
        this.spans.push(span);
        delete this._activeSpans[span.id];
        this.removeTask(span.id);
    };
    _proto.isManaged = function isManaged() {
        return !!this.options.managed;
    };
    return Transaction1;
}(_spanBaseDefault.default);
exports.default = Transaction;

},{"./span":"8jSuU","./span-base":"5PZYO","../common/utils":"f32Di","../common/constants":"f2U8D","./breakdown":"eSgmp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSgmp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "captureBreakdown", ()=>captureBreakdown
);
var _utils = require("../common/utils");
var _constants = require("../common/constants");
var pageLoadBreakdowns = [
    [
        'domainLookupStart',
        'domainLookupEnd',
        'DNS'
    ],
    [
        'connectStart',
        'connectEnd',
        'TCP'
    ],
    [
        'requestStart',
        'responseStart',
        'Request'
    ],
    [
        'responseStart',
        'responseEnd',
        'Response'
    ],
    [
        'domLoading',
        'domComplete',
        'Processing'
    ],
    [
        'loadEventStart',
        'loadEventEnd',
        'Load'
    ]
];
function getValue(value) {
    return {
        value: value
    };
}
function calculateSelfTime(transaction) {
    var spans = transaction.spans, _start = transaction._start, _end = transaction._end;
    if (spans.length === 0) return transaction.duration();
    spans.sort(function(span1, span2) {
        return span1._start - span2._start;
    });
    var span = spans[0];
    var spanEnd = span._end;
    var spanStart = span._start;
    var lastContinuousEnd = spanEnd;
    var selfTime = spanStart - _start;
    for(var i = 1; i < spans.length; i++){
        span = spans[i];
        spanStart = span._start;
        spanEnd = span._end;
        if (spanStart > lastContinuousEnd) {
            selfTime += spanStart - lastContinuousEnd;
            lastContinuousEnd = spanEnd;
        } else if (spanEnd > lastContinuousEnd) lastContinuousEnd = spanEnd;
    }
    if (lastContinuousEnd < _end) selfTime += _end - lastContinuousEnd;
    return selfTime;
}
function groupSpans(transaction) {
    var spanMap = {};
    var transactionSelfTime = calculateSelfTime(transaction);
    spanMap['app'] = {
        count: 1,
        duration: transactionSelfTime
    };
    var spans = transaction.spans;
    for(var i = 0; i < spans.length; i++){
        var span = spans[i];
        var duration = span.duration();
        if (duration === 0 || duration == null) continue;
        var type = span.type, subtype = span.subtype;
        var key = type.replace(_constants.TRUNCATED_TYPE, '');
        if (subtype) key += '.' + subtype;
        if (!spanMap[key]) spanMap[key] = {
            duration: 0,
            count: 0
        };
        spanMap[key].count++;
        spanMap[key].duration += duration;
    }
    return spanMap;
}
function getSpanBreakdown(transactionDetails, _ref) {
    var details = _ref.details, _ref$count = _ref.count, count = _ref$count === void 0 ? 1 : _ref$count, duration = _ref.duration;
    return {
        transaction: transactionDetails,
        span: details,
        samples: {
            'span.self_time.count': getValue(count),
            'span.self_time.sum.us': getValue(duration)
        }
    };
}
function captureBreakdown(transaction, timings) {
    if (timings === void 0) timings = _utils.PERF.timing;
    var breakdowns = [];
    var trDuration = transaction.duration();
    var name = transaction.name, type1 = transaction.type, sampled = transaction.sampled;
    var transactionDetails = {
        name: name,
        type: type1
    };
    breakdowns.push({
        transaction: transactionDetails,
        samples: {
            'transaction.duration.count': getValue(1),
            'transaction.duration.sum.us': getValue(trDuration),
            'transaction.breakdown.count': getValue(sampled ? 1 : 0)
        }
    });
    if (!sampled) return breakdowns;
    if (type1 === _constants.PAGE_LOAD && timings) for(var i = 0; i < pageLoadBreakdowns.length; i++){
        var current = pageLoadBreakdowns[i];
        var start = timings[current[0]];
        var end = timings[current[1]];
        var duration = _utils.getDuration(start, end);
        if (duration === 0 || duration == null) continue;
        breakdowns.push(getSpanBreakdown(transactionDetails, {
            details: {
                type: current[2]
            },
            duration: duration
        }));
    }
    else {
        var spanMap = groupSpans(transaction);
        Object.keys(spanMap).forEach(function(key) {
            var _key$split = key.split('.'), type = _key$split[0], subtype = _key$split[1];
            var _spanMap$key = spanMap[key], duration = _spanMap$key.duration, count = _spanMap$key.count;
            breakdowns.push(getSpanBreakdown(transactionDetails, {
                details: {
                    type: type,
                    subtype: subtype
                },
                duration: duration,
                count: count
            }));
        });
    }
    return breakdowns;
}

},{"../common/utils":"f32Di","../common/constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ejxkz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "metrics", ()=>metrics
);
parcelHelpers.export(exports, "createLongTaskSpans", ()=>createLongTaskSpans
);
parcelHelpers.export(exports, "createFirstInputDelaySpan", ()=>createFirstInputDelaySpan
);
parcelHelpers.export(exports, "createTotalBlockingTimeSpan", ()=>createTotalBlockingTimeSpan
);
parcelHelpers.export(exports, "calculateTotalBlockingTime", ()=>calculateTotalBlockingTime
);
parcelHelpers.export(exports, "calculateCumulativeLayoutShift", ()=>calculateCumulativeLayoutShift
);
parcelHelpers.export(exports, "captureObserverEntries", ()=>captureObserverEntries
);
parcelHelpers.export(exports, "PerfEntryRecorder", ()=>PerfEntryRecorder
);
var _constants = require("../common/constants");
var _utils = require("../common/utils");
var _span = require("./span");
var _spanDefault = parcelHelpers.interopDefault(_span);
var metrics = {
    fid: 0,
    fcp: 0,
    tbt: {
        start: Infinity,
        duration: 0
    },
    cls: {
        score: 0,
        firstEntryTime: Number.NEGATIVE_INFINITY,
        prevEntryTime: Number.NEGATIVE_INFINITY,
        currentSessionScore: 0
    },
    longtask: {
        count: 0,
        duration: 0,
        max: 0
    }
};
var LONG_TASK_THRESHOLD = 50;
function createLongTaskSpans(longtasks, agg) {
    var spans = [];
    for(var i = 0; i < longtasks.length; i++){
        var _longtasks$i = longtasks[i], name = _longtasks$i.name, startTime = _longtasks$i.startTime, duration = _longtasks$i.duration, attribution = _longtasks$i.attribution;
        var end = startTime + duration;
        var span = new _spanDefault.default("Longtask(" + name + ")", _constants.LONG_TASK, {
            startTime: startTime
        });
        agg.count++;
        agg.duration += duration;
        agg.max = Math.max(duration, agg.max);
        if (attribution.length > 0) {
            var _attribution$ = attribution[0], _name = _attribution$.name, containerType = _attribution$.containerType, containerName = _attribution$.containerName, containerId = _attribution$.containerId;
            var customContext = {
                attribution: _name,
                type: containerType
            };
            if (containerName) customContext.name = containerName;
            if (containerId) customContext.id = containerId;
            span.addContext({
                custom: customContext
            });
        }
        span.end(end);
        spans.push(span);
    }
    return spans;
}
function createFirstInputDelaySpan(fidEntries) {
    var firstInput = fidEntries[0];
    if (firstInput) {
        var startTime = firstInput.startTime, processingStart = firstInput.processingStart;
        var span = new _spanDefault.default('First Input Delay', _constants.FIRST_INPUT, {
            startTime: startTime
        });
        span.end(processingStart);
        return span;
    }
}
function createTotalBlockingTimeSpan(tbtObject) {
    var start = tbtObject.start, duration = tbtObject.duration;
    var tbtSpan = new _spanDefault.default('Total Blocking Time', _constants.LONG_TASK, {
        startTime: start
    });
    tbtSpan.end(start + duration);
    return tbtSpan;
}
function calculateTotalBlockingTime(longtaskEntries) {
    longtaskEntries.forEach(function(entry) {
        var name = entry.name, startTime = entry.startTime, duration = entry.duration;
        if (startTime < metrics.fcp) return;
        if (name !== 'self' && name.indexOf('same-origin') === -1) return;
        metrics.tbt.start = Math.min(metrics.tbt.start, startTime);
        var blockingTime = duration - LONG_TASK_THRESHOLD;
        if (blockingTime > 0) metrics.tbt.duration += blockingTime;
    });
}
function calculateCumulativeLayoutShift(clsEntries) {
    clsEntries.forEach(function(entry) {
        if (!entry.hadRecentInput && entry.value) {
            var shouldCreateNewSession = entry.startTime - metrics.cls.firstEntryTime > 5000 || entry.startTime - metrics.cls.prevEntryTime > 1000;
            if (shouldCreateNewSession) {
                metrics.cls.firstEntryTime = entry.startTime;
                metrics.cls.currentSessionScore = 0;
            }
            metrics.cls.prevEntryTime = entry.startTime;
            metrics.cls.currentSessionScore += entry.value;
            metrics.cls.score = Math.max(metrics.cls.score, metrics.cls.currentSessionScore);
        }
    });
}
function captureObserverEntries(list, _ref) {
    var isHardNavigation = _ref.isHardNavigation, trStart = _ref.trStart;
    var longtaskEntries = list.getEntriesByType(_constants.LONG_TASK).filter(function(entry) {
        return entry.startTime >= trStart;
    });
    var longTaskSpans = createLongTaskSpans(longtaskEntries, metrics.longtask);
    var result = {
        spans: longTaskSpans,
        marks: {}
    };
    if (!isHardNavigation) return result;
    var lcpEntries = list.getEntriesByType(_constants.LARGEST_CONTENTFUL_PAINT);
    var lastLcpEntry = lcpEntries[lcpEntries.length - 1];
    if (lastLcpEntry) {
        var lcp = parseInt(lastLcpEntry.startTime);
        metrics.lcp = lcp;
        result.marks.largestContentfulPaint = lcp;
    }
    var timing = _utils.PERF.timing;
    var unloadDiff = timing.fetchStart - timing.navigationStart;
    var fcpEntry = list.getEntriesByName(_constants.FIRST_CONTENTFUL_PAINT)[0];
    if (fcpEntry) {
        var fcp = parseInt(unloadDiff >= 0 ? fcpEntry.startTime - unloadDiff : fcpEntry.startTime);
        metrics.fcp = fcp;
        result.marks.firstContentfulPaint = fcp;
    }
    var fidEntries = list.getEntriesByType(_constants.FIRST_INPUT);
    var fidSpan = createFirstInputDelaySpan(fidEntries);
    if (fidSpan) {
        metrics.fid = fidSpan.duration();
        result.spans.push(fidSpan);
    }
    calculateTotalBlockingTime(longtaskEntries);
    var clsEntries = list.getEntriesByType(_constants.LAYOUT_SHIFT);
    calculateCumulativeLayoutShift(clsEntries);
    return result;
}
var PerfEntryRecorder = function() {
    function PerfEntryRecorder1(callback) {
        this.po = {
            observe: _utils.noop,
            disconnect: _utils.noop
        };
        if (window.PerformanceObserver) this.po = new PerformanceObserver(callback);
    }
    var _proto = PerfEntryRecorder1.prototype;
    _proto.start = function start(type) {
        try {
            this.po.observe({
                type: type,
                buffered: true
            });
        } catch (_) {}
    };
    _proto.stop = function stop() {
        this.po.disconnect();
    };
    return PerfEntryRecorder1;
}();

},{"../common/constants":"f2U8D","../common/utils":"f32Di","./span":"8jSuU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fdpi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInstrumentationFlags", ()=>getInstrumentationFlags
);
var _constants = require("./constants");
function getInstrumentationFlags(instrument, disabledInstrumentations) {
    var _flags;
    var flags = (_flags = {}, _flags[_constants.XMLHTTPREQUEST] = false, _flags[_constants.FETCH] = false, _flags[_constants.HISTORY] = false, _flags[_constants.PAGE_LOAD] = false, _flags[_constants.ERROR] = false, _flags[_constants.EVENT_TARGET] = false, _flags);
    if (!instrument) return flags;
    Object.keys(flags).forEach(function(key) {
        if (disabledInstrumentations.indexOf(key) === -1) flags[key] = true;
    });
    return flags;
}

},{"./constants":"f2U8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"flCz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var RAF_TIMEOUT = 100;
function afterFrame(callback) {
    var handler = function handler() {
        clearTimeout(timeout);
        cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    var timeout = setTimeout(handler, RAF_TIMEOUT);
    var raf = requestAnimationFrame(handler);
}
exports.default = afterFrame;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kyDk8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bootstrap", ()=>bootstrap
);
parcelHelpers.export(exports, "bootstrapPerf", ()=>bootstrapPerf
);
var _utils = require("./common/utils");
var _patching = require("./common/patching");
var _state = require("./state");
var enabled = false;
function bootstrap() {
    if (_utils.isPlatformSupported()) {
        _patching.patchAll();
        bootstrapPerf();
        _state.state.bootstrapTime = _utils.now();
        enabled = true;
    } else if (_utils.isBrowser) console.log('[Elastic APM] platform is not supported!');
    return enabled;
}
function bootstrapPerf() {
    if (document.visibilityState === 'hidden') _state.state.lastHiddenStart = 0;
    window.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') _state.state.lastHiddenStart = performance.now();
    }, {
        capture: true
    });
}

},{"./common/utils":"f32Di","./common/patching":"dj6fY","./state":"5wzyl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1T69k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Span", ()=>_spanDefault.default
);
parcelHelpers.export(exports, "Tracer", ()=>_tracerDefault.default
);
parcelHelpers.export(exports, "createTracer", ()=>createTracer
);
var _tracer = require("./tracer");
var _tracerDefault = parcelHelpers.interopDefault(_tracer);
var _span = require("./span");
var _spanDefault = parcelHelpers.interopDefault(_span);
function createTracer(serviceFactory) {
    var performanceMonitoring = serviceFactory.getService('PerformanceMonitoring');
    var transactionService = serviceFactory.getService('TransactionService');
    var errorLogging = serviceFactory.getService('ErrorLogging');
    var loggingService = serviceFactory.getService('LoggingService');
    return new _tracerDefault.default(performanceMonitoring, transactionService, loggingService, errorLogging);
}

},{"./tracer":"8BRNh","./span":"7PLzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8BRNh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tracer = require("opentracing/lib/tracer");
var _constants = require("opentracing/lib/constants");
var _span = require("opentracing/lib/span");
var _utils = require("../common/utils");
var _state = require("../state");
var _span1 = require("./span");
var _spanDefault = parcelHelpers.interopDefault(_span1);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
var Tracer = function(_otTracer) {
    _inheritsLoose(Tracer1, _otTracer);
    function Tracer1(performanceMonitoring, transactionService, loggingService, errorLogging) {
        var _this;
        _this = _otTracer.call(this) || this;
        _this.performanceMonitoring = performanceMonitoring;
        _this.transactionService = transactionService;
        _this.loggingService = loggingService;
        _this.errorLogging = errorLogging;
        return _this;
    }
    var _proto = Tracer1.prototype;
    _proto._startSpan = function _startSpan(name, options) {
        var spanOptions = {
            managed: true
        };
        if (options) {
            spanOptions.timestamp = options.startTime;
            if (options.childOf) spanOptions.parentId = options.childOf.id;
            else if (options.references && options.references.length > 0) {
                if (options.references.length > 1) {
                    if (_state.__DEV__) this.loggingService.debug('Elastic APM OpenTracing: Unsupported number of references, only the first childOf reference will be recorded.');
                }
                var childRef = _utils.find(options.references, function(ref) {
                    return ref.type() === _constants.REFERENCE_CHILD_OF;
                });
                if (childRef) spanOptions.parentId = childRef.referencedContext().id;
            }
        }
        var span;
        var currentTransaction = this.transactionService.getCurrentTransaction();
        if (currentTransaction) span = this.transactionService.startSpan(name, undefined, spanOptions);
        else span = this.transactionService.startTransaction(name, undefined, spanOptions);
        if (!span) return new _span.Span();
        if (spanOptions.timestamp) span._start = spanOptions.timestamp - _utils.getTimeOrigin();
        var otSpan = new _spanDefault.default(this, span);
        if (options && options.tags) otSpan.addTags(options.tags);
        return otSpan;
    };
    _proto._inject = function _inject(spanContext, format, carrier) {
        switch(format){
            case _constants.FORMAT_TEXT_MAP:
            case _constants.FORMAT_HTTP_HEADERS:
                this.performanceMonitoring.injectDtHeader(spanContext, carrier);
                break;
            case _constants.FORMAT_BINARY:
                if (_state.__DEV__) this.loggingService.debug('Elastic APM OpenTracing: binary carrier format is not supported.');
                break;
        }
    };
    _proto._extract = function _extract(format, carrier) {
        var ctx;
        switch(format){
            case _constants.FORMAT_TEXT_MAP:
            case _constants.FORMAT_HTTP_HEADERS:
                ctx = this.performanceMonitoring.extractDtHeader(carrier);
                break;
            case _constants.FORMAT_BINARY:
                if (_state.__DEV__) this.loggingService.debug('Elastic APM OpenTracing: binary carrier format is not supported.');
                break;
        }
        if (!ctx) ctx = null;
        return ctx;
    };
    return Tracer1;
}(_tracer.Tracer);
exports.default = Tracer;

},{"opentracing/lib/tracer":"dCiKQ","opentracing/lib/constants":"fgxa6","opentracing/lib/span":"e94ly","../common/utils":"f32Di","../state":"5wzyl","./span":"7PLzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCiKQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var Functions = require("./functions");
var Noop = require("./noop");
var span_1 = require("./span");
/**
 * Tracer is the entry-point between the instrumentation API and the tracing
 * implementation.
 *
 * The default object acts as a no-op implementation.
 *
 * Note to implementators: derived classes can choose to directly implement the
 * methods in the "OpenTracing API methods" section, or optionally the subset of
 * underscore-prefixed methods to pick up the argument checking and handling
 * automatically from the base class.
 */ var Tracer = /** @class */ function() {
    function Tracer1() {}
    // ---------------------------------------------------------------------- //
    // OpenTracing API methods
    // ---------------------------------------------------------------------- //
    /**
     * Starts and returns a new Span representing a logical unit of work.
     *
     * For example:
     *
     *     // Start a new (parentless) root Span:
     *     var parent = Tracer.startSpan('DoWork');
     *
     *     // Start a new (child) Span:
     *     var child = Tracer.startSpan('load-from-db', {
     *         childOf: parent.context(),
     *     });
     *
     *     // Start a new async (FollowsFrom) Span:
     *     var child = Tracer.startSpan('async-cache-write', {
     *         references: [
     *             opentracing.followsFrom(parent.context())
     *         ],
     *     });
     *
     * @param {string} name - the name of the operation (REQUIRED).
     * @param {SpanOptions} [options] - options for the newly created span.
     * @return {Span} - a new Span object.
     */ Tracer1.prototype.startSpan = function(name, options) {
        if (options === void 0) options = {};
        // Convert options.childOf to fields.references as needed.
        if (options.childOf) {
            // Convert from a Span or a SpanContext into a Reference.
            var childOf = Functions.childOf(options.childOf);
            if (options.references) options.references.push(childOf);
            else options.references = [
                childOf
            ];
            delete options.childOf;
        }
        return this._startSpan(name, options);
    };
    /**
     * Injects the given SpanContext instance for cross-process propagation
     * within `carrier`. The expected type of `carrier` depends on the value of
     * `format.
     *
     * OpenTracing defines a common set of `format` values (see
     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
     * an expected carrier type.
     *
     * Consider this pseudocode example:
     *
     *     var clientSpan = ...;
     *     ...
     *     // Inject clientSpan into a text carrier.
     *     var headersCarrier = {};
     *     Tracer.inject(clientSpan.context(), Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
     *     // Incorporate the textCarrier into the outbound HTTP request header
     *     // map.
     *     Object.assign(outboundHTTPReq.headers, headersCarrier);
     *     // ... send the httpReq
     *
     * @param  {SpanContext} spanContext - the SpanContext to inject into the
     *         carrier object. As a convenience, a Span instance may be passed
     *         in instead (in which case its .context() is used for the
     *         inject()).
     * @param  {string} format - the format of the carrier.
     * @param  {any} carrier - see the documentation for the chosen `format`
     *         for a description of the carrier object.
     */ Tracer1.prototype.inject = function(spanContext, format, carrier) {
        // Allow the user to pass a Span instead of a SpanContext
        if (spanContext instanceof span_1.default) spanContext = spanContext.context();
        return this._inject(spanContext, format, carrier);
    };
    /**
     * Returns a SpanContext instance extracted from `carrier` in the given
     * `format`.
     *
     * OpenTracing defines a common set of `format` values (see
     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
     * an expected carrier type.
     *
     * Consider this pseudocode example:
     *
     *     // Use the inbound HTTP request's headers as a text map carrier.
     *     var headersCarrier = inboundHTTPReq.headers;
     *     var wireCtx = Tracer.extract(Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
     *     var serverSpan = Tracer.startSpan('...', { childOf : wireCtx });
     *
     * @param  {string} format - the format of the carrier.
     * @param  {any} carrier - the type of the carrier object is determined by
     *         the format.
     * @return {SpanContext}
     *         The extracted SpanContext, or null if no such SpanContext could
     *         be found in `carrier`
     */ Tracer1.prototype.extract = function(format, carrier) {
        return this._extract(format, carrier);
    };
    // ---------------------------------------------------------------------- //
    // Derived classes can choose to implement the below
    // ---------------------------------------------------------------------- //
    // NOTE: the input to this method is *always* an associative array. The
    // public-facing startSpan() method normalizes the arguments so that
    // all N implementations do not need to worry about variations in the call
    // signature.
    //
    // The default behavior returns a no-op span.
    Tracer1.prototype._startSpan = function(name, fields) {
        return Noop.span;
    };
    // The default behavior is a no-op.
    Tracer1.prototype._inject = function(spanContext, format, carrier) {};
    // The default behavior is to return a no-op SpanContext.
    Tracer1.prototype._extract = function(format, carrier) {
        return Noop.spanContext;
    };
    return Tracer1;
}();
exports.Tracer = Tracer;
exports.default = Tracer;

},{"./functions":"gSjzq","./noop":"ilyNA","./span":"e94ly"}],"gSjzq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var Constants = require("./constants");
var reference_1 = require("./reference");
var span_1 = require("./span");
/**
 * Return a new REFERENCE_CHILD_OF reference.
 *
 * @param {SpanContext} spanContext - the parent SpanContext instance to
 *        reference.
 * @return a REFERENCE_CHILD_OF reference pointing to `spanContext`
 */ function childOf(spanContext) {
    // Allow the user to pass a Span instead of a SpanContext
    if (spanContext instanceof span_1.default) spanContext = spanContext.context();
    return new reference_1.default(Constants.REFERENCE_CHILD_OF, spanContext);
}
exports.childOf = childOf;
/**
 * Return a new REFERENCE_FOLLOWS_FROM reference.
 *
 * @param {SpanContext} spanContext - the parent SpanContext instance to
 *        reference.
 * @return a REFERENCE_FOLLOWS_FROM reference pointing to `spanContext`
 */ function followsFrom(spanContext) {
    // Allow the user to pass a Span instead of a SpanContext
    if (spanContext instanceof span_1.default) spanContext = spanContext.context();
    return new reference_1.default(Constants.REFERENCE_FOLLOWS_FROM, spanContext);
}
exports.followsFrom = followsFrom;

},{"./constants":"fgxa6","./reference":"5lCmO","./span":"e94ly"}],"fgxa6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * The FORMAT_BINARY format represents SpanContexts in an opaque binary
 * carrier.
 *
 * Tracer.inject() will set the buffer field to an Array-like (Array,
 * ArrayBuffer, or TypedBuffer) object containing the injected binary data.
 * Any valid Object can be used as long as the buffer field of the object
 * can be set.
 *
 * Tracer.extract() will look for `carrier.buffer`, and that field is
 * expected to be an Array-like object (Array, ArrayBuffer, or
 * TypedBuffer).
 */ exports.FORMAT_BINARY = 'binary';
/**
 * The FORMAT_TEXT_MAP format represents SpanContexts using a
 * string->string map (backed by a Javascript Object) as a carrier.
 *
 * NOTE: Unlike FORMAT_HTTP_HEADERS, FORMAT_TEXT_MAP places no restrictions
 * on the characters used in either the keys or the values of the map
 * entries.
 *
 * The FORMAT_TEXT_MAP carrier map may contain unrelated data (e.g.,
 * arbitrary gRPC metadata); as such, the Tracer implementation should use
 * a prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */ exports.FORMAT_TEXT_MAP = 'text_map';
/**
 * The FORMAT_HTTP_HEADERS format represents SpanContexts using a
 * character-restricted string->string map (backed by a Javascript Object)
 * as a carrier.
 *
 * Keys and values in the FORMAT_HTTP_HEADERS carrier must be suitable for
 * use as HTTP headers (without modification or further escaping). That is,
 * the keys have a greatly restricted character set, casing for the keys
 * may not be preserved by various intermediaries, and the values should be
 * URL-escaped.
 *
 * The FORMAT_HTTP_HEADERS carrier map may contain unrelated data (e.g.,
 * arbitrary HTTP headers); as such, the Tracer implementation should use a
 * prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */ exports.FORMAT_HTTP_HEADERS = 'http_headers';
/**
 * A Span may be the "child of" a parent Span. In a “child of” reference,
 * the parent Span depends on the child Span in some capacity.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */ exports.REFERENCE_CHILD_OF = 'child_of';
/**
 * Some parent Spans do not depend in any way on the result of their child
 * Spans. In these cases, we say merely that the child Span “follows from”
 * the parent Span in a causal sense.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */ exports.REFERENCE_FOLLOWS_FROM = 'follows_from';

},{}],"5lCmO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var span_1 = require("./span");
/**
 * Reference pairs a reference type constant (e.g., REFERENCE_CHILD_OF or
 * REFERENCE_FOLLOWS_FROM) with the SpanContext it points to.
 *
 * See the exported childOf() and followsFrom() functions at the package level.
 */ var Reference = /** @class */ function() {
    /**
     * Initialize a new Reference instance.
     *
     * @param {string} type - the Reference type constant (e.g.,
     *        REFERENCE_CHILD_OF or REFERENCE_FOLLOWS_FROM).
     * @param {SpanContext} referencedContext - the SpanContext being referred
     *        to. As a convenience, a Span instance may be passed in instead
     *        (in which case its .context() is used here).
     */ function Reference1(type, referencedContext) {
        this._type = type;
        this._referencedContext = referencedContext instanceof span_1.default ? referencedContext.context() : referencedContext;
    }
    /**
     * @return {string} The Reference type (e.g., REFERENCE_CHILD_OF or
     *         REFERENCE_FOLLOWS_FROM).
     */ Reference1.prototype.type = function() {
        return this._type;
    };
    /**
     * @return {SpanContext} The SpanContext being referred to (e.g., the
     *         parent in a REFERENCE_CHILD_OF Reference).
     */ Reference1.prototype.referencedContext = function() {
        return this._referencedContext;
    };
    return Reference1;
}();
exports.default = Reference;

},{"./span":"e94ly"}],"e94ly":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var noop = require("./noop");
/**
 * Span represents a logical unit of work as part of a broader Trace. Examples
 * of span might include remote procedure calls or a in-process function calls
 * to sub-components. A Trace has a single, top-level "root" Span that in turn
 * may have zero or more child Spans, which in turn may have children.
 */ var Span = /** @class */ function() {
    function Span1() {}
    // ---------------------------------------------------------------------- //
    // OpenTracing API methods
    // ---------------------------------------------------------------------- //
    /**
     * Returns the SpanContext object associated with this Span.
     *
     * @return {SpanContext}
     */ Span1.prototype.context = function() {
        return this._context();
    };
    /**
     * Returns the Tracer object used to create this Span.
     *
     * @return {Tracer}
     */ Span1.prototype.tracer = function() {
        return this._tracer();
    };
    /**
     * Sets the string name for the logical operation this span represents.
     *
     * @param {string} name
     */ Span1.prototype.setOperationName = function(name) {
        this._setOperationName(name);
        return this;
    };
    /**
     * Sets a key:value pair on this Span that also propagates to future
     * children of the associated Span.
     *
     * setBaggageItem() enables powerful functionality given a full-stack
     * opentracing integration (e.g., arbitrary application data from a web
     * client can make it, transparently, all the way into the depths of a
     * storage system), and with it some powerful costs: use this feature with
     * care.
     *
     * IMPORTANT NOTE #1: setBaggageItem() will only propagate baggage items to
     * *future* causal descendants of the associated Span.
     *
     * IMPORTANT NOTE #2: Use this thoughtfully and with care. Every key and
     * value is copied into every local *and remote* child of the associated
     * Span, and that can add up to a lot of network and cpu overhead.
     *
     * @param {string} key
     * @param {string} value
     */ Span1.prototype.setBaggageItem = function(key, value) {
        this._setBaggageItem(key, value);
        return this;
    };
    /**
     * Returns the value for a baggage item given its key.
     *
     * @param  {string} key
     *         The key for the given trace attribute.
     * @return {string}
     *         String value for the given key, or undefined if the key does not
     *         correspond to a set trace attribute.
     */ Span1.prototype.getBaggageItem = function(key) {
        return this._getBaggageItem(key);
    };
    /**
     * Adds a single tag to the span.  See `addTags()` for details.
     *
     * @param {string} key
     * @param {any} value
     */ Span1.prototype.setTag = function(key, value) {
        var _a;
        // NOTE: the call is normalized to a call to _addTags()
        this._addTags((_a = {}, _a[key] = value, _a));
        return this;
    };
    /**
     * Adds the given key value pairs to the set of span tags.
     *
     * Multiple calls to addTags() results in the tags being the superset of
     * all calls.
     *
     * The behavior of setting the same key multiple times on the same span
     * is undefined.
     *
     * The supported type of the values is implementation-dependent.
     * Implementations are expected to safely handle all types of values but
     * may choose to ignore unrecognized / unhandle-able values (e.g. objects
     * with cyclic references, function objects).
     *
     * @return {[type]} [description]
     */ Span1.prototype.addTags = function(keyValueMap) {
        this._addTags(keyValueMap);
        return this;
    };
    /**
     * Add a log record to this Span, optionally at a user-provided timestamp.
     *
     * For example:
     *
     *     span.log({
     *         size: rpc.size(),  // numeric value
     *         URI: rpc.URI(),  // string value
     *         payload: rpc.payload(),  // Object value
     *         "keys can be arbitrary strings": rpc.foo(),
     *     });
     *
     *     span.log({
     *         "error.description": someError.description(),
     *     }, someError.timestampMillis());
     *
     * @param {object} keyValuePairs
     *        An object mapping string keys to arbitrary value types. All
     *        Tracer implementations should support bool, string, and numeric
     *        value types, and some may also support Object values.
     * @param {number} timestamp
     *        An optional parameter specifying the timestamp in milliseconds
     *        since the Unix epoch. Fractional values are allowed so that
     *        timestamps with sub-millisecond accuracy can be represented. If
     *        not specified, the implementation is expected to use its notion
     *        of the current time of the call.
     */ Span1.prototype.log = function(keyValuePairs, timestamp) {
        this._log(keyValuePairs, timestamp);
        return this;
    };
    /**
     * DEPRECATED
     */ Span1.prototype.logEvent = function(eventName, payload) {
        return this._log({
            event: eventName,
            payload: payload
        });
    };
    /**
     * Sets the end timestamp and finalizes Span state.
     *
     * With the exception of calls to Span.context() (which are always allowed),
     * finish() must be the last call made to any span instance, and to do
     * otherwise leads to undefined behavior.
     *
     * @param  {number} finishTime
     *         Optional finish time in milliseconds as a Unix timestamp. Decimal
     *         values are supported for timestamps with sub-millisecond accuracy.
     *         If not specified, the current time (as defined by the
     *         implementation) will be used.
     */ Span1.prototype.finish = function(finishTime) {
        this._finish(finishTime);
    // Do not return `this`. The Span generally should not be used after it
    // is finished so chaining is not desired in this context.
    };
    // ---------------------------------------------------------------------- //
    // Derived classes can choose to implement the below
    // ---------------------------------------------------------------------- //
    // By default returns a no-op SpanContext.
    Span1.prototype._context = function() {
        return noop.spanContext;
    };
    // By default returns a no-op tracer.
    //
    // The base class could store the tracer that created it, but it does not
    // in order to ensure the no-op span implementation has zero members,
    // which allows V8 to aggressively optimize calls to such objects.
    Span1.prototype._tracer = function() {
        return noop.tracer;
    };
    // By default does nothing
    Span1.prototype._setOperationName = function(name) {};
    // By default does nothing
    Span1.prototype._setBaggageItem = function(key, value) {};
    // By default does nothing
    Span1.prototype._getBaggageItem = function(key) {
        return undefined;
    };
    // By default does nothing
    //
    // NOTE: both setTag() and addTags() map to this function. keyValuePairs
    // will always be an associative array.
    Span1.prototype._addTags = function(keyValuePairs) {};
    // By default does nothing
    Span1.prototype._log = function(keyValuePairs, timestamp) {};
    // By default does nothing
    //
    // finishTime is expected to be either a number or undefined.
    Span1.prototype._finish = function(finishTime) {};
    return Span1;
}();
exports.Span = Span;
exports.default = Span;

},{"./noop":"ilyNA"}],"ilyNA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var span_1 = require("./span");
var span_context_1 = require("./span_context");
var tracer_1 = require("./tracer");
exports.tracer = null;
exports.spanContext = null;
exports.span = null;
// Deferred initialization to avoid a dependency cycle where Tracer depends on
// Span which depends on the noop tracer.
function initialize() {
    exports.tracer = new tracer_1.default();
    exports.span = new span_1.default();
    exports.spanContext = new span_context_1.default();
}
exports.initialize = initialize;

},{"./span":"e94ly","./span_context":"lfUgs","./tracer":"dCiKQ"}],"lfUgs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * SpanContext represents Span state that must propagate to descendant Spans
 * and across process boundaries.
 *
 * SpanContext is logically divided into two pieces: the user-level "Baggage"
 * (see setBaggageItem and getBaggageItem) that propagates across Span
 * boundaries and any Tracer-implementation-specific fields that are needed to
 * identify or otherwise contextualize the associated Span instance (e.g., a
 * <trace_id, span_id, sampled> tuple).
 */ var SpanContext = /** @class */ function() {
    function SpanContext1() {}
    // The SpanContext is entirely implementation dependent
    /**
     * Returns a string representation of the implementation internal trace ID.
     *
     * @returns {string}
     */ SpanContext1.prototype.toTraceId = function() {
        return '';
    };
    /**
     * Returns a string representation of the implementation internal span ID.
     *
     * @returns {string}
     */ SpanContext1.prototype.toSpanId = function() {
        return '';
    };
    return SpanContext1;
}();
exports.SpanContext = SpanContext;
exports.default = SpanContext;

},{}],"7PLzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _span = require("opentracing/lib/span");
var _utils = require("../common/utils");
var _transaction = require("../performance-monitoring/transaction");
var _transactionDefault = parcelHelpers.interopDefault(_transaction);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
var Span = function(_otSpan) {
    _inheritsLoose(Span1, _otSpan);
    function Span1(tracer, span) {
        var _this;
        _this = _otSpan.call(this) || this;
        _this.__tracer = tracer;
        _this.span = span;
        _this.isTransaction = span instanceof _transactionDefault.default;
        _this.spanContext = {
            id: span.id,
            traceId: span.traceId,
            sampled: span.sampled
        };
        return _this;
    }
    var _proto = Span1.prototype;
    _proto._context = function _context() {
        return this.spanContext;
    };
    _proto._tracer = function _tracer() {
        return this.__tracer;
    };
    _proto._setOperationName = function _setOperationName(name) {
        this.span.name = name;
    };
    _proto._addTags = function _addTags(keyValuePairs) {
        var tags = _utils.extend({}, keyValuePairs);
        if (tags.type) {
            this.span.type = tags.type;
            delete tags.type;
        }
        if (this.isTransaction) {
            var userId = tags['user.id'];
            var username = tags['user.username'];
            var email = tags['user.email'];
            if (userId || username || email) {
                this.span.addContext({
                    user: {
                        id: userId,
                        username: username,
                        email: email
                    }
                });
                delete tags['user.id'];
                delete tags['user.username'];
                delete tags['user.email'];
            }
        }
        this.span.addLabels(tags);
    };
    _proto._log = function _log(log, timestamp) {
        if (log.event === 'error') {
            if (log['error.object']) this.__tracer.errorLogging.logError(log['error.object']);
            else if (log.message) this.__tracer.errorLogging.logError(log.message);
        }
    };
    _proto._finish = function _finish(finishTime) {
        this.span.end();
        if (finishTime) this.span._end = finishTime - _utils.getTimeOrigin();
    };
    return Span1;
}(_span.Span);
exports.default = Span;

},{"opentracing/lib/span":"e94ly","../common/utils":"f32Di","../performance-monitoring/transaction":"2cBCH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zNdn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ApmBase
);
var _apmRumCore = require("@elastic/apm-rum-core");
var ApmBase = function() {
    function ApmBase1(serviceFactory, disable) {
        this._disable = disable;
        this.serviceFactory = serviceFactory;
        this._initialized = false;
    }
    var _proto = ApmBase1.prototype;
    _proto.isEnabled = function isEnabled() {
        return !this._disable;
    };
    _proto.isActive = function isActive() {
        var configService = this.serviceFactory.getService(_apmRumCore.CONFIG_SERVICE);
        return this.isEnabled() && this._initialized && configService.get('active');
    };
    _proto.init = function init(config) {
        var _this = this;
        if (this.isEnabled() && !this._initialized) {
            this._initialized = true;
            var _this$serviceFactory$ = this.serviceFactory.getService([
                _apmRumCore.CONFIG_SERVICE,
                _apmRumCore.LOGGING_SERVICE
            ]), configService = _this$serviceFactory$[0], loggingService = _this$serviceFactory$[1];
            configService.setVersion('5.10.2');
            this.config(config);
            var logLevel = configService.get('logLevel');
            loggingService.setLevel(logLevel);
            var isConfigActive = configService.get('active');
            if (isConfigActive) {
                this.serviceFactory.init();
                var flags = _apmRumCore.getInstrumentationFlags(configService.get('instrument'), configService.get('disableInstrumentations'));
                var performanceMonitoring = this.serviceFactory.getService('PerformanceMonitoring');
                performanceMonitoring.init(flags);
                if (flags[_apmRumCore.ERROR]) {
                    var errorLogging = this.serviceFactory.getService('ErrorLogging');
                    errorLogging.registerListeners();
                }
                if (configService.get('session')) {
                    var localConfig = configService.getLocalConfig();
                    if (localConfig && localConfig.session) configService.setConfig({
                        session: localConfig.session
                    });
                }
                var sendPageLoad = function sendPageLoad() {
                    return flags[_apmRumCore.PAGE_LOAD] && _this._sendPageLoadMetrics();
                };
                if (configService.get('centralConfig')) this.fetchCentralConfig().then(sendPageLoad);
                else sendPageLoad();
            } else {
                this._disable = true;
                loggingService.warn('RUM agent is inactive');
            }
        }
        return this;
    };
    _proto.fetchCentralConfig = function fetchCentralConfig() {
        var _this$serviceFactory$2 = this.serviceFactory.getService([
            _apmRumCore.APM_SERVER,
            _apmRumCore.LOGGING_SERVICE,
            _apmRumCore.CONFIG_SERVICE
        ]), apmServer = _this$serviceFactory$2[0], loggingService = _this$serviceFactory$2[1], configService = _this$serviceFactory$2[2];
        return apmServer.fetchConfig(configService.get('serviceName'), configService.get('environment')).then(function(config) {
            var transactionSampleRate = config['transaction_sample_rate'];
            if (transactionSampleRate) {
                transactionSampleRate = Number(transactionSampleRate);
                var _config2 = {
                    transactionSampleRate: transactionSampleRate
                };
                var _configService$valida = configService.validate(_config2), invalid = _configService$valida.invalid;
                if (invalid.length === 0) configService.setConfig(_config2);
                else {
                    var _invalid$ = invalid[0], key = _invalid$.key, value = _invalid$.value, allowed = _invalid$.allowed;
                    loggingService.warn("invalid value \"" + value + "\" for " + key + ". Allowed: " + allowed + ".");
                }
            }
            return config;
        }).catch(function(error) {
            loggingService.warn('failed fetching config:', error);
        });
    };
    _proto._sendPageLoadMetrics = function _sendPageLoadMetrics() {
        var tr = this.startTransaction(undefined, _apmRumCore.PAGE_LOAD, {
            managed: true,
            canReuse: true
        });
        if (!tr) return;
        tr.addTask(_apmRumCore.PAGE_LOAD);
        var sendPageLoadMetrics = function sendPageLoadMetrics() {
            setTimeout(function() {
                return tr.removeTask(_apmRumCore.PAGE_LOAD);
            });
        };
        if (document.readyState === 'complete') sendPageLoadMetrics();
        else window.addEventListener('load', sendPageLoadMetrics);
    };
    _proto.observe = function observe(name, fn) {
        var configService = this.serviceFactory.getService(_apmRumCore.CONFIG_SERVICE);
        configService.events.observe(name, fn);
    };
    _proto.config = function config(_config) {
        var configService = this.serviceFactory.getService(_apmRumCore.CONFIG_SERVICE);
        var _configService$valida2 = configService.validate(_config), missing = _configService$valida2.missing, invalid = _configService$valida2.invalid;
        if (missing.length === 0 && invalid.length === 0) configService.setConfig(_config);
        else {
            var loggingService = this.serviceFactory.getService(_apmRumCore.LOGGING_SERVICE);
            var separator = ', ';
            var message = "RUM agent isn't correctly configured. ";
            if (missing.length > 0) {
                message += missing.join(separator) + ' is missing';
                if (invalid.length > 0) message += separator;
            }
            invalid.forEach(function(_ref, index) {
                var key = _ref.key, value = _ref.value, allowed = _ref.allowed;
                message += key + " \"" + value + "\" contains invalid characters! (allowed: " + allowed + ")" + (index !== invalid.length - 1 ? separator : '');
            });
            loggingService.error(message);
            configService.setConfig({
                active: false
            });
        }
    };
    _proto.setUserContext = function setUserContext(userContext) {
        var configService = this.serviceFactory.getService(_apmRumCore.CONFIG_SERVICE);
        configService.setUserContext(userContext);
    };
    _proto.setCustomContext = function setCustomContext(customContext) {
        var configService = this.serviceFactory.getService(_apmRumCore.CONFIG_SERVICE);
        configService.setCustomContext(customContext);
    };
    _proto.addLabels = function addLabels(labels) {
        var configService = this.serviceFactory.getService(_apmRumCore.CONFIG_SERVICE);
        configService.addLabels(labels);
    };
    _proto.setInitialPageLoadName = function setInitialPageLoadName(name) {
        var configService = this.serviceFactory.getService(_apmRumCore.CONFIG_SERVICE);
        configService.setConfig({
            pageLoadTransactionName: name
        });
    };
    _proto.startTransaction = function startTransaction(name, type, options) {
        if (this.isEnabled()) {
            var transactionService = this.serviceFactory.getService('TransactionService');
            return transactionService.startTransaction(name, type, options);
        }
    };
    _proto.startSpan = function startSpan(name, type, options) {
        if (this.isEnabled()) {
            var transactionService = this.serviceFactory.getService('TransactionService');
            return transactionService.startSpan(name, type, options);
        }
    };
    _proto.getCurrentTransaction = function getCurrentTransaction() {
        if (this.isEnabled()) {
            var transactionService = this.serviceFactory.getService('TransactionService');
            return transactionService.getCurrentTransaction();
        }
    };
    _proto.captureError = function captureError(error) {
        if (this.isEnabled()) {
            var errorLogging = this.serviceFactory.getService('ErrorLogging');
            return errorLogging.logError(error);
        }
    };
    _proto.addFilter = function addFilter(fn) {
        var configService = this.serviceFactory.getService(_apmRumCore.CONFIG_SERVICE);
        configService.addFilter(fn);
    };
    return ApmBase1;
}();

},{"@elastic/apm-rum-core":"a8cGf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iKiqL","bB7Pu"], "bB7Pu", "parcelRequire109c")

//# sourceMappingURL=index.3d214d75.js.map
