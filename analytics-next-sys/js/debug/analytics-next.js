var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var browser = {};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
}
var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

var tslib_es6 = {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
};

var tslib_es6$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__addDisposableResource: __addDisposableResource,
	get __assign () { return __assign; },
	__asyncDelegator: __asyncDelegator,
	__asyncGenerator: __asyncGenerator,
	__asyncValues: __asyncValues,
	__await: __await,
	__awaiter: __awaiter,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldIn: __classPrivateFieldIn,
	__classPrivateFieldSet: __classPrivateFieldSet,
	__createBinding: __createBinding,
	__decorate: __decorate,
	__disposeResources: __disposeResources,
	__esDecorate: __esDecorate,
	__exportStar: __exportStar,
	__extends: __extends,
	__generator: __generator,
	__importDefault: __importDefault,
	__importStar: __importStar,
	__makeTemplateObject: __makeTemplateObject,
	__metadata: __metadata,
	__param: __param,
	__propKey: __propKey,
	__read: __read,
	__rest: __rest,
	__runInitializers: __runInitializers,
	__setFunctionName: __setFunctionName,
	__spread: __spread,
	__spreadArray: __spreadArray,
	__spreadArrays: __spreadArrays,
	__values: __values,
	default: tslib_es6
});

var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(tslib_es6$1);

var getProcessEnv$1 = {};

Object.defineProperty(getProcessEnv$1, "__esModule", { value: true });
getProcessEnv$1.getProcessEnv = void 0;
/**
 * Returns `process.env` if it is available in the environment.
 * Always returns an object make it similarly easy to use as `process.env`.
 */
function getProcessEnv() {
    if (typeof process === 'undefined' || !process.env) {
        return {};
    }
    return process.env;
}
getProcessEnv$1.getProcessEnv = getProcessEnv;

var parseCdn = {};

var globalAnalyticsHelper = {};

Object.defineProperty(globalAnalyticsHelper, "__esModule", { value: true });
globalAnalyticsHelper.setGlobalAnalytics = globalAnalyticsHelper.setGlobalAnalyticsKey = globalAnalyticsHelper.getGlobalAnalytics = void 0;
/**
 * Stores the global window analytics key
 */
var _globalAnalyticsKey = 'analytics';
/**
 * Gets the global analytics/buffer
 * @param key name of the window property where the buffer is stored (default: analytics)
 * @returns AnalyticsSnippet
 */
function getGlobalAnalytics() {
    return window[_globalAnalyticsKey];
}
globalAnalyticsHelper.getGlobalAnalytics = getGlobalAnalytics;
/**
 * Replaces the global window key for the analytics/buffer object
 * @param key key name
 */
function setGlobalAnalyticsKey(key) {
    _globalAnalyticsKey = key;
}
globalAnalyticsHelper.setGlobalAnalyticsKey = setGlobalAnalyticsKey;
/**
 * Sets the global analytics object
 * @param analytics analytics snippet
 */
function setGlobalAnalytics(analytics) {
    window[_globalAnalyticsKey] = analytics;
}
globalAnalyticsHelper.setGlobalAnalytics = setGlobalAnalytics;

var embeddedWriteKey$1 = {};

Object.defineProperty(embeddedWriteKey$1, "__esModule", { value: true });
embeddedWriteKey$1.embeddedWriteKey = void 0;
// This variable is used as an optional fallback for when customers
// host or proxy their own analytics.js.
try {
    window.analyticsWriteKey = '__WRITE_KEY__';
}
catch (_) {
    // @ eslint-disable-next-line
}
function embeddedWriteKey() {
    if (window.analyticsWriteKey === undefined) {
        return undefined;
    }
    // this is done so that we don't accidentally override every reference to __write_key__
    return window.analyticsWriteKey !== ['__', 'WRITE', '_', 'KEY', '__'].join('')
        ? window.analyticsWriteKey
        : undefined;
}
embeddedWriteKey$1.embeddedWriteKey = embeddedWriteKey;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getLegacyAJSPath = exports.getNextIntegrationsURL = exports.getCDN = exports.setGlobalCDNUrl = void 0;
	var global_analytics_helper_1 = globalAnalyticsHelper;
	var embedded_write_key_1 = embeddedWriteKey$1;
	var analyticsScriptRegex = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;
	var getCDNUrlFromScriptTag = function () {
	    var cdn;
	    var scripts = Array.prototype.slice.call(document.querySelectorAll('script'));
	    scripts.forEach(function (s) {
	        var _a;
	        var src = (_a = s.getAttribute('src')) !== null && _a !== void 0 ? _a : '';
	        var result = analyticsScriptRegex.exec(src);
	        if (result && result[1]) {
	            cdn = result[1];
	        }
	    });
	    return cdn;
	};
	var _globalCDN; // set globalCDN as in-memory singleton
	var getGlobalCDNUrl = function () {
	    var _a;
	    var result = _globalCDN !== null && _globalCDN !== void 0 ? _globalCDN : (_a = (0, global_analytics_helper_1.getGlobalAnalytics)()) === null || _a === void 0 ? void 0 : _a._cdn;
	    return result;
	};
	var setGlobalCDNUrl = function (cdn) {
	    var globalAnalytics = (0, global_analytics_helper_1.getGlobalAnalytics)();
	    if (globalAnalytics) {
	        globalAnalytics._cdn = cdn;
	    }
	    _globalCDN = cdn;
	};
	exports.setGlobalCDNUrl = setGlobalCDNUrl;
	var getCDN = function () {
	    var globalCdnUrl = getGlobalCDNUrl();
	    if (globalCdnUrl)
	        return globalCdnUrl;
	    var cdnFromScriptTag = getCDNUrlFromScriptTag();
	    if (cdnFromScriptTag) {
	        return cdnFromScriptTag;
	    }
	    else {
	        // it's possible that the CDN is not found in the page because:
	        // - the script is loaded through a proxy
	        // - the script is removed after execution
	        // in this case, we fall back to the default Segment CDN
	        return "https://cdn.segment.com";
	    }
	};
	exports.getCDN = getCDN;
	var getNextIntegrationsURL = function () {
	    var cdn = (0, exports.getCDN)();
	    return "".concat(cdn, "/next-integrations");
	};
	exports.getNextIntegrationsURL = getNextIntegrationsURL;
	/**
	 * Replaces the CDN URL in the script tag with the one from Analytics.js 1.0
	 *
	 * @returns the path to Analytics JS 1.0
	 **/
	function getLegacyAJSPath() {
	    var _a, _b, _c;
	    var writeKey = (_a = (0, embedded_write_key_1.embeddedWriteKey)()) !== null && _a !== void 0 ? _a : (_b = (0, global_analytics_helper_1.getGlobalAnalytics)()) === null || _b === void 0 ? void 0 : _b._writeKey;
	    var scripts = Array.prototype.slice.call(document.querySelectorAll('script'));
	    var path = undefined;
	    for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
	        var s = scripts_1[_i];
	        var src = (_c = s.getAttribute('src')) !== null && _c !== void 0 ? _c : '';
	        var result = analyticsScriptRegex.exec(src);
	        if (result && result[1]) {
	            path = src;
	            break;
	        }
	    }
	    if (path) {
	        return path.replace('analytics.min.js', 'analytics.classic.js');
	    }
	    return "https://cdn.segment.com/analytics.js/v1/".concat(writeKey, "/analytics.classic.js");
	}
	exports.getLegacyAJSPath = getLegacyAJSPath;
	
} (parseCdn));

var fetch$2 = {};

function unfetch_module(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return {ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t;}),t(a());},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null);})}

var unfetch_module$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: unfetch_module
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(unfetch_module$1);

var getGlobal = {};

var hasRequiredGetGlobal;

function requireGetGlobal () {
	if (hasRequiredGetGlobal) return getGlobal;
	hasRequiredGetGlobal = 1;
	Object.defineProperty(getGlobal, "__esModule", { value: true });
	getGlobal.getGlobal = void 0;
	// This an imperfect polyfill for globalThis
	var getGlobal$1 = function () {
	    if (typeof globalThis !== 'undefined') {
	        return globalThis;
	    }
	    if (typeof self !== 'undefined') {
	        return self;
	    }
	    if (typeof window !== 'undefined') {
	        return window;
	    }
	    if (typeof commonjsGlobal !== 'undefined') {
	        return commonjsGlobal;
	    }
	    return null;
	};
	getGlobal.getGlobal = getGlobal$1;
	
	return getGlobal;
}

Object.defineProperty(fetch$2, "__esModule", { value: true });
fetch$2.fetch = void 0;
var tslib_1$c = require$$0$2;
var unfetch_1 = tslib_1$c.__importDefault(require$$1);
var get_global_1$2 = requireGetGlobal();
/**
 * Wrapper around native `fetch` containing `unfetch` fallback.
 */
var fetch$1 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var global = (0, get_global_1$2.getGlobal)();
    return ((global && global.fetch) || unfetch_1.default).apply(void 0, args);
};
fetch$2.fetch = fetch$1;

var analytics = {};

var argumentsResolver = {};

function dset$1(obj, keys, val) {
	keys.split && (keys=keys.split('.'));
	var i=0, l=keys.length, t=obj, x, k;
	while (i < l) {
		k = keys[i++];
		if (k === '__proto__' || k === 'constructor' || k === 'prototype') break;
		t = t[k] = (i === l) ? val : (typeof(x=t[k])===typeof(keys)) ? x : (keys[i]*0 !== 0 || !!~(''+keys[i]).indexOf('.')) ? {} : [];
	}
}

var pickBy = function (obj, fn) {
    return Object.keys(obj)
        .filter(function (k) { return fn(k, obj[k]); })
        .reduce(function (acc, key) { return ((acc[key] = obj[key]), acc); }, {});
};

var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(field, message) {
        var _this = _super.call(this, "".concat(field, " ").concat(message)) || this;
        _this.field = field;
        return _this;
    }
    return ValidationError;
}(Error));

function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function exists(val) {
    return val !== undefined && val !== null;
}
function isPlainObject(obj) {
    return (Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object');
}

var stringError = 'is not a string';
var objError = 'is not an object';
var nilError = 'is nil';
function assertUserIdentity(event) {
    var USER_FIELD_NAME = '.userId/anonymousId/previousId/groupId';
    var getAnyUserId = function (event) { var _a, _b, _c; return (_c = (_b = (_a = event.userId) !== null && _a !== void 0 ? _a : event.anonymousId) !== null && _b !== void 0 ? _b : event.groupId) !== null && _c !== void 0 ? _c : event.previousId; };
    var id = getAnyUserId(event);
    if (!exists(id)) {
        throw new ValidationError(USER_FIELD_NAME, nilError);
    }
    else if (!isString(id)) {
        throw new ValidationError(USER_FIELD_NAME, stringError);
    }
}
function assertEventExists(event) {
    if (!exists(event)) {
        throw new ValidationError('Event', nilError);
    }
    if (typeof event !== 'object') {
        throw new ValidationError('Event', objError);
    }
}
function assertEventType(event) {
    if (!isString(event.type)) {
        throw new ValidationError('.type', stringError);
    }
}
function assertTrackEventName(event) {
    if (!isString(event.event)) {
        throw new ValidationError('.event', stringError);
    }
}
function assertTrackEventProperties(event) {
    if (!isPlainObject(event.properties)) {
        throw new ValidationError('.properties', objError);
    }
}
function assertTraits(event) {
    if (!isPlainObject(event.traits)) {
        throw new ValidationError('.traits', objError);
    }
}
function validateEvent(event) {
    assertEventExists(event);
    assertEventType(event);
    if (event.type === 'track') {
        assertTrackEventName(event);
        assertTrackEventProperties(event);
    }
    if (['group', 'identify'].includes(event.type)) {
        assertTraits(event);
    }
    assertUserIdentity(event);
}

var EventFactory = /** @class */ (function () {
    function EventFactory(settings) {
        this.user = settings.user;
        this.createMessageId = settings.createMessageId;
    }
    EventFactory.prototype.track = function (event, properties, options, globalIntegrations) {
        return this.normalize(__assign(__assign({}, this.baseEvent()), { event: event, type: 'track', properties: properties !== null && properties !== void 0 ? properties : {}, options: __assign({}, options), integrations: __assign({}, globalIntegrations) }));
    };
    EventFactory.prototype.page = function (category, page, properties, options, globalIntegrations) {
        var _a;
        var event = {
            type: 'page',
            properties: __assign({}, properties),
            options: __assign({}, options),
            integrations: __assign({}, globalIntegrations),
        };
        if (category !== null) {
            event.category = category;
            event.properties = (_a = event.properties) !== null && _a !== void 0 ? _a : {};
            event.properties.category = category;
        }
        if (page !== null) {
            event.name = page;
        }
        return this.normalize(__assign(__assign({}, this.baseEvent()), event));
    };
    EventFactory.prototype.screen = function (category, screen, properties, options, globalIntegrations) {
        var event = {
            type: 'screen',
            properties: __assign({}, properties),
            options: __assign({}, options),
            integrations: __assign({}, globalIntegrations),
        };
        if (category !== null) {
            event.category = category;
        }
        if (screen !== null) {
            event.name = screen;
        }
        return this.normalize(__assign(__assign({}, this.baseEvent()), event));
    };
    EventFactory.prototype.identify = function (userId, traits, options, globalIntegrations) {
        return this.normalize(__assign(__assign({}, this.baseEvent()), { type: 'identify', userId: userId, traits: traits !== null && traits !== void 0 ? traits : {}, options: __assign({}, options), integrations: globalIntegrations }));
    };
    EventFactory.prototype.group = function (groupId, traits, options, globalIntegrations) {
        return this.normalize(__assign(__assign({}, this.baseEvent()), { type: 'group', traits: traits !== null && traits !== void 0 ? traits : {}, options: __assign({}, options), integrations: __assign({}, globalIntegrations), //
            groupId: groupId }));
    };
    EventFactory.prototype.alias = function (to, from, // TODO: can we make this undefined?
    options, globalIntegrations) {
        var base = {
            userId: to,
            type: 'alias',
            options: __assign({}, options),
            integrations: __assign({}, globalIntegrations),
        };
        if (from !== null) {
            base.previousId = from;
        }
        if (to === undefined) {
            return this.normalize(__assign(__assign({}, base), this.baseEvent()));
        }
        return this.normalize(__assign(__assign({}, this.baseEvent()), base));
    };
    EventFactory.prototype.baseEvent = function () {
        var base = {
            integrations: {},
            options: {},
        };
        if (!this.user)
            return base;
        var user = this.user;
        if (user.id()) {
            base.userId = user.id();
        }
        if (user.anonymousId()) {
            base.anonymousId = user.anonymousId();
        }
        return base;
    };
    /**
     * Builds the context part of an event based on "foreign" keys that
     * are provided in the `Options` parameter for an Event
     */
    EventFactory.prototype.context = function (options) {
        var _a;
        /**
         * If the event options are known keys from this list, we move them to the top level of the event.
         * Any other options are moved to context.
         */
        var eventOverrideKeys = [
            'userId',
            'anonymousId',
            'timestamp',
        ];
        delete options['integrations'];
        var providedOptionsKeys = Object.keys(options);
        var context = (_a = options.context) !== null && _a !== void 0 ? _a : {};
        var eventOverrides = {};
        providedOptionsKeys.forEach(function (key) {
            if (key === 'context') {
                return;
            }
            if (eventOverrideKeys.includes(key)) {
                dset$1(eventOverrides, key, options[key]);
            }
            else {
                dset$1(context, key, options[key]);
            }
        });
        return [context, eventOverrides];
    };
    EventFactory.prototype.normalize = function (event) {
        var _a, _b;
        var integrationBooleans = Object.keys((_a = event.integrations) !== null && _a !== void 0 ? _a : {}).reduce(function (integrationNames, name) {
            var _a;
            var _b;
            return __assign(__assign({}, integrationNames), (_a = {}, _a[name] = Boolean((_b = event.integrations) === null || _b === void 0 ? void 0 : _b[name]), _a));
        }, {});
        // filter out any undefined options
        event.options = pickBy(event.options || {}, function (_, value) {
            return value !== undefined;
        });
        // This is pretty trippy, but here's what's going on:
        // - a) We don't pass initial integration options as part of the event, only if they're true or false
        // - b) We do accept per integration overrides (like integrations.Amplitude.sessionId) at the event level
        // Hence the need to convert base integration options to booleans, but maintain per event integration overrides
        var allIntegrations = __assign(__assign({}, integrationBooleans), (_b = event.options) === null || _b === void 0 ? void 0 : _b.integrations);
        var _c = event.options
            ? this.context(event.options)
            : [], context = _c[0], overrides = _c[1];
        event.options; var rest = __rest(event, ["options"]);
        var body = __assign(__assign(__assign({ timestamp: new Date() }, rest), { integrations: allIntegrations, context: context }), overrides);
        var evt = __assign(__assign({}, body), { messageId: this.createMessageId() });
        validateEvent(evt);
        return evt;
    };
    return EventFactory;
}());

function pTimeout(promise, timeout) {
    return new Promise(function (resolve, reject) {
        var timeoutId = setTimeout(function () {
            reject(Error('Promise timed out'));
        }, timeout);
        promise
            .then(function (val) {
            clearTimeout(timeoutId);
            return resolve(val);
        })
            .catch(reject);
    });
}
function sleep(timeoutInMs) {
    return new Promise(function (resolve) { return setTimeout(resolve, timeoutInMs); });
}
/**
 * @param ctx
 * @param callback - the function to invoke
 * @param delay - aka "timeout". The amount of time in ms to wait before invoking the callback.
 */
function invokeCallback(ctx, callback, delay) {
    var cb = function () {
        try {
            return Promise.resolve(callback(ctx));
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    return (sleep(delay)
        // pTimeout ensures that the callback can't cause the context to hang
        .then(function () { return pTimeout(cb(), 1000); })
        .catch(function (err) {
        ctx === null || ctx === void 0 ? void 0 : ctx.log('warn', 'Callback Error', { error: err });
        ctx === null || ctx === void 0 ? void 0 : ctx.stats.increment('callback_error');
    })
        .then(function () { return ctx; }));
}

/**
 * Return a promise that can be externally resolved
 */
var createDeferred = function () {
    var resolve;
    var reject;
    var promise = new Promise(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise: promise,
    };
};

/**
 * Event Emitter that takes the expected contract as a generic
 * @example
 * ```ts
 *  type Contract = {
 *    delivery_success: [DeliverySuccessResponse, Metrics],
 *    delivery_failure: [DeliveryError]
 * }
 *  new Emitter<Contract>()
 *  .on('delivery_success', (res, metrics) => ...)
 *  .on('delivery_failure', (err) => ...)
 * ```
 */
var Emitter = /** @class */ (function () {
    function Emitter(options) {
        var _a;
        this.callbacks = {};
        this.warned = false;
        this.maxListeners = (_a = options === null || options === void 0 ? void 0 : options.maxListeners) !== null && _a !== void 0 ? _a : 10;
    }
    Emitter.prototype.warnIfPossibleMemoryLeak = function (event) {
        if (this.warned) {
            return;
        }
        if (this.maxListeners &&
            this.callbacks[event].length > this.maxListeners) {
            console.warn("Event Emitter: Possible memory leak detected; ".concat(String(event), " has exceeded ").concat(this.maxListeners, " listeners."));
            this.warned = true;
        }
    };
    Emitter.prototype.on = function (event, callback) {
        if (!this.callbacks[event]) {
            this.callbacks[event] = [callback];
        }
        else {
            this.callbacks[event].push(callback);
            this.warnIfPossibleMemoryLeak(event);
        }
        return this;
    };
    Emitter.prototype.once = function (event, callback) {
        var _this = this;
        var on = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.off(event, on);
            callback.apply(_this, args);
        };
        this.on(event, on);
        return this;
    };
    Emitter.prototype.off = function (event, callback) {
        var _a;
        var fns = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
        var without = fns.filter(function (fn) { return fn !== callback; });
        this.callbacks[event] = without;
        return this;
    };
    Emitter.prototype.emit = function (event) {
        var _this = this;
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var callbacks = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
        callbacks.forEach(function (callback) {
            callback.apply(_this, args);
        });
        return this;
    };
    return Emitter;
}());

var esm$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Emitter: Emitter,
	createDeferred: createDeferred
});

function backoff(params) {
    var random = Math.random() + 1;
    var _a = params.minTimeout, minTimeout = _a === void 0 ? 500 : _a, _b = params.factor, factor = _b === void 0 ? 2 : _b, attempt = params.attempt, _c = params.maxTimeout, maxTimeout = _c === void 0 ? Infinity : _c;
    return Math.min(random * minTimeout * Math.pow(factor, attempt), maxTimeout);
}

/**
 * @internal
 */
var ON_REMOVE_FROM_FUTURE = 'onRemoveFromFuture';
var PriorityQueue = /** @class */ (function (_super) {
    __extends(PriorityQueue, _super);
    function PriorityQueue(maxAttempts, queue, seen) {
        var _this = _super.call(this) || this;
        _this.future = [];
        _this.maxAttempts = maxAttempts;
        _this.queue = queue;
        _this.seen = seen !== null && seen !== void 0 ? seen : {};
        return _this;
    }
    PriorityQueue.prototype.push = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var accepted = items.map(function (operation) {
            var attempts = _this.updateAttempts(operation);
            if (attempts > _this.maxAttempts || _this.includes(operation)) {
                return false;
            }
            _this.queue.push(operation);
            return true;
        });
        this.queue = this.queue.sort(function (a, b) { return _this.getAttempts(a) - _this.getAttempts(b); });
        return accepted;
    };
    PriorityQueue.prototype.pushWithBackoff = function (item) {
        var _this = this;
        if (this.getAttempts(item) === 0) {
            return this.push(item)[0];
        }
        var attempt = this.updateAttempts(item);
        if (attempt > this.maxAttempts || this.includes(item)) {
            return false;
        }
        var timeout = backoff({ attempt: attempt - 1 });
        setTimeout(function () {
            _this.queue.push(item);
            // remove from future list
            _this.future = _this.future.filter(function (f) { return f.id !== item.id; });
            // Lets listeners know that a 'future' message is now available in the queue
            _this.emit(ON_REMOVE_FROM_FUTURE);
        }, timeout);
        this.future.push(item);
        return true;
    };
    PriorityQueue.prototype.getAttempts = function (item) {
        var _a;
        return (_a = this.seen[item.id]) !== null && _a !== void 0 ? _a : 0;
    };
    PriorityQueue.prototype.updateAttempts = function (item) {
        this.seen[item.id] = this.getAttempts(item) + 1;
        return this.getAttempts(item);
    };
    PriorityQueue.prototype.includes = function (item) {
        return (this.queue.includes(item) ||
            this.future.includes(item) ||
            Boolean(this.queue.find(function (i) { return i.id === item.id; })) ||
            Boolean(this.future.find(function (i) { return i.id === item.id; })));
    };
    PriorityQueue.prototype.pop = function () {
        return this.queue.shift();
    };
    Object.defineProperty(PriorityQueue.prototype, "length", {
        get: function () {
            return this.queue.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PriorityQueue.prototype, "todo", {
        get: function () {
            return this.queue.length + this.future.length;
        },
        enumerable: false,
        configurable: true
    });
    return PriorityQueue;
}(Emitter));

var IDX$1=256, HEX$1=[], BUFFER$1;
while (IDX$1--) HEX$1[IDX$1] = (IDX$1 + 256).toString(16).substring(1);

function v4$1() {
	var i=0, num, out='';

	if (!BUFFER$1 || ((IDX$1 + 16) > 256)) {
		BUFFER$1 = Array(i=256);
		while (i--) BUFFER$1[i] = 256 * Math.random() | 0;
		i = IDX$1 = 0;
	}

	for (; i < 16; i++) {
		num = BUFFER$1[IDX$1 + i];
		if (i==6) out += HEX$1[num & 15 | 64];
		else if (i==8) out += HEX$1[num & 63 | 128];
		else out += HEX$1[num];

		if (i & 1 && i > 1 && i < 11) out += '-';
	}

	IDX$1++;
	return out;
}

var CoreLogger = /** @class */ (function () {
    function CoreLogger() {
        this._logs = [];
    }
    CoreLogger.prototype.log = function (level, message, extras) {
        var time = new Date();
        this._logs.push({
            level: level,
            message: message,
            time: time,
            extras: extras,
        });
    };
    Object.defineProperty(CoreLogger.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    CoreLogger.prototype.flush = function () {
        if (this.logs.length > 1) {
            var formatted = this._logs.reduce(function (logs, log) {
                var _a;
                var _b, _c;
                var line = __assign(__assign({}, log), { json: JSON.stringify(log.extras, null, ' '), extras: log.extras });
                delete line['time'];
                var key = (_c = (_b = log.time) === null || _b === void 0 ? void 0 : _b.toISOString()) !== null && _c !== void 0 ? _c : '';
                if (logs[key]) {
                    key = "".concat(key, "-").concat(Math.random());
                }
                return __assign(__assign({}, logs), (_a = {}, _a[key] = line, _a));
            }, {});
            // ie doesn't like console.table
            if (console.table) {
                console.table(formatted);
            }
            else {
                console.log(formatted);
            }
        }
        else {
            this.logs.forEach(function (logEntry) {
                var level = logEntry.level, message = logEntry.message, extras = logEntry.extras;
                if (level === 'info' || level === 'debug') {
                    console.log(message, extras !== null && extras !== void 0 ? extras : '');
                }
                else {
                    console[level](message, extras !== null && extras !== void 0 ? extras : '');
                }
            });
        }
        this._logs = [];
    };
    return CoreLogger;
}());

var compactMetricType = function (type) {
    var enums = {
        gauge: 'g',
        counter: 'c',
    };
    return enums[type];
};
var CoreStats = /** @class */ (function () {
    function CoreStats() {
        this.metrics = [];
    }
    CoreStats.prototype.increment = function (metric, by, tags) {
        if (by === void 0) { by = 1; }
        this.metrics.push({
            metric: metric,
            value: by,
            tags: tags !== null && tags !== void 0 ? tags : [],
            type: 'counter',
            timestamp: Date.now(),
        });
    };
    CoreStats.prototype.gauge = function (metric, value, tags) {
        this.metrics.push({
            metric: metric,
            value: value,
            tags: tags !== null && tags !== void 0 ? tags : [],
            type: 'gauge',
            timestamp: Date.now(),
        });
    };
    CoreStats.prototype.flush = function () {
        var formatted = this.metrics.map(function (m) { return (__assign(__assign({}, m), { tags: m.tags.join(',') })); });
        // ie doesn't like console.table
        if (console.table) {
            console.table(formatted);
        }
        else {
            console.log(formatted);
        }
        this.metrics = [];
    };
    /**
     * compact keys for smaller payload
     */
    CoreStats.prototype.serialize = function () {
        return this.metrics.map(function (m) {
            return {
                m: m.metric,
                v: m.value,
                t: m.tags,
                k: compactMetricType(m.type),
                e: m.timestamp,
            };
        });
    };
    return CoreStats;
}());
var NullStats = /** @class */ (function (_super) {
    __extends(NullStats, _super);
    function NullStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullStats.prototype.gauge = function () {
    };
    NullStats.prototype.increment = function () {
    };
    NullStats.prototype.flush = function () {
    };
    NullStats.prototype.serialize = function () {
        return [];
    };
    return NullStats;
}(CoreStats));

var ContextCancelation = /** @class */ (function () {
    function ContextCancelation(options) {
        var _a, _b, _c;
        this.retry = (_a = options.retry) !== null && _a !== void 0 ? _a : true;
        this.type = (_b = options.type) !== null && _b !== void 0 ? _b : 'plugin Error';
        this.reason = (_c = options.reason) !== null && _c !== void 0 ? _c : '';
    }
    return ContextCancelation;
}());
var CoreContext = /** @class */ (function () {
    function CoreContext(event, id, stats, logger) {
        if (id === void 0) { id = v4$1(); }
        if (stats === void 0) { stats = new NullStats(); }
        if (logger === void 0) { logger = new CoreLogger(); }
        this.attempts = 0;
        this.event = event;
        this._id = id;
        this.logger = logger;
        this.stats = stats;
    }
    CoreContext.system = function () {
        // This should be overridden by the subclass to return an instance of the subclass.
    };
    CoreContext.prototype.isSame = function (other) {
        return other.id === this.id;
    };
    CoreContext.prototype.cancel = function (error) {
        if (error) {
            throw error;
        }
        throw new ContextCancelation({ reason: 'Context Cancel' });
    };
    CoreContext.prototype.log = function (level, message, extras) {
        this.logger.log(level, message, extras);
    };
    Object.defineProperty(CoreContext.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    CoreContext.prototype.updateEvent = function (path, val) {
        var _a;
        // Don't allow integrations that are set to false to be overwritten with integration settings.
        if (path.split('.')[0] === 'integrations') {
            var integrationName = path.split('.')[1];
            if (((_a = this.event.integrations) === null || _a === void 0 ? void 0 : _a[integrationName]) === false) {
                return this.event;
            }
        }
        dset$1(this.event, path, val);
        return this.event;
    };
    CoreContext.prototype.failedDelivery = function () {
        return this._failedDelivery;
    };
    CoreContext.prototype.setFailedDelivery = function (options) {
        this._failedDelivery = options;
    };
    CoreContext.prototype.logs = function () {
        return this.logger.logs;
    };
    CoreContext.prototype.flush = function () {
        this.logger.flush();
        this.stats.flush();
    };
    CoreContext.prototype.toJSON = function () {
        return {
            id: this._id,
            event: this.event,
            logs: this.logger.logs,
            metrics: this.stats.metrics,
        };
    };
    return CoreContext;
}());

function groupBy(collection, grouper) {
    var results = {};
    collection.forEach(function (item) {
        var _a;
        var key = undefined;
        if (typeof grouper === 'string') {
            var suggestedKey = item[grouper];
            key =
                typeof suggestedKey !== 'string'
                    ? JSON.stringify(suggestedKey)
                    : suggestedKey;
        }
        else if (grouper instanceof Function) {
            key = grouper(item);
        }
        if (key === undefined) {
            return;
        }
        results[key] = __spreadArray(__spreadArray([], ((_a = results[key]) !== null && _a !== void 0 ? _a : []), true), [item], false);
    });
    return results;
}

/**
 *  Check if  thenable
 *  (instanceof Promise doesn't respect realms)
 */
var isThenable$2 = function (value) {
    return typeof value === 'object' &&
        value !== null &&
        'then' in value &&
        typeof value.then === 'function';
};

var createTaskGroup = function () {
    var taskCompletionPromise;
    var resolvePromise;
    var count = 0;
    return {
        done: function () { return taskCompletionPromise; },
        run: function (op) {
            var returnValue = op();
            if (isThenable$2(returnValue)) {
                if (++count === 1) {
                    taskCompletionPromise = new Promise(function (res) { return (resolvePromise = res); });
                }
                returnValue.finally(function () { return --count === 0 && resolvePromise(); });
            }
            return returnValue;
        },
    };
};

function tryAsync(fn) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fn()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_1)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function attempt(ctx, plugin) {
    ctx.log('debug', 'plugin', { plugin: plugin.name });
    var start = new Date().getTime();
    var hook = plugin[ctx.event.type];
    if (hook === undefined) {
        return Promise.resolve(ctx);
    }
    var newCtx = tryAsync(function () { return hook.apply(plugin, [ctx]); })
        .then(function (ctx) {
        var done = new Date().getTime() - start;
        ctx.stats.gauge('plugin_time', done, ["plugin:".concat(plugin.name)]);
        return ctx;
    })
        .catch(function (err) {
        if (err instanceof ContextCancelation &&
            err.type === 'middleware_cancellation') {
            throw err;
        }
        if (err instanceof ContextCancelation) {
            ctx.log('warn', err.type, {
                plugin: plugin.name,
                error: err,
            });
            return err;
        }
        ctx.log('error', 'plugin Error', {
            plugin: plugin.name,
            error: err,
        });
        ctx.stats.increment('plugin_error', 1, ["plugin:".concat(plugin.name)]);
        return err;
    });
    return newCtx;
}
function ensure(ctx, plugin) {
    return attempt(ctx, plugin).then(function (newContext) {
        if (newContext instanceof CoreContext) {
            return newContext;
        }
        ctx.log('debug', 'Context canceled');
        ctx.stats.increment('context_canceled');
        ctx.cancel(newContext);
    });
}

var CoreEventQueue = /** @class */ (function (_super) {
    __extends(CoreEventQueue, _super);
    function CoreEventQueue(priorityQueue) {
        var _this = _super.call(this) || this;
        /**
         * All event deliveries get suspended until all the tasks in this task group are complete.
         * For example: a middleware that augments the event object should be loaded safely as a
         * critical task, this way, event queue will wait for it to be ready before sending events.
         *
         * This applies to all the events already in the queue, and the upcoming ones
         */
        _this.criticalTasks = createTaskGroup();
        _this.plugins = [];
        _this.failedInitializations = [];
        _this.flushing = false;
        _this.queue = priorityQueue;
        _this.queue.on(ON_REMOVE_FROM_FUTURE, function () {
            _this.scheduleFlush(0);
        });
        return _this;
    }
    CoreEventQueue.prototype.register = function (ctx, plugin, instance) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(plugin.load(ctx, instance))
                            .then(function () {
                            _this.plugins.push(plugin);
                        })
                            .catch(function (err) {
                            if (plugin.type === 'destination') {
                                _this.failedInitializations.push(plugin.name);
                                console.warn(plugin.name, err);
                                ctx.log('warn', 'Failed to load destination', {
                                    plugin: plugin.name,
                                    error: err,
                                });
                                return;
                            }
                            throw err;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoreEventQueue.prototype.deregister = function (ctx, plugin, instance) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!plugin.unload) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.resolve(plugin.unload(ctx, instance))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.plugins = this.plugins.filter(function (p) { return p.name !== plugin.name; });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        ctx.log('warn', 'Failed to unload destination', {
                            plugin: plugin.name,
                            error: e_1,
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CoreEventQueue.prototype.dispatch = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var willDeliver;
            return __generator(this, function (_a) {
                ctx.log('debug', 'Dispatching');
                ctx.stats.increment('message_dispatched');
                this.queue.push(ctx);
                willDeliver = this.subscribeToDelivery(ctx);
                this.scheduleFlush(0);
                return [2 /*return*/, willDeliver];
            });
        });
    };
    CoreEventQueue.prototype.subscribeToDelivery = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var onDeliver = function (flushed, delivered) {
                            if (flushed.isSame(ctx)) {
                                _this.off('flush', onDeliver);
                                if (delivered) {
                                    resolve(flushed);
                                }
                                else {
                                    resolve(flushed);
                                }
                            }
                        };
                        _this.on('flush', onDeliver);
                    })];
            });
        });
    };
    CoreEventQueue.prototype.dispatchSingle = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                ctx.log('debug', 'Dispatching');
                ctx.stats.increment('message_dispatched');
                this.queue.updateAttempts(ctx);
                ctx.attempts = 1;
                return [2 /*return*/, this.deliver(ctx).catch(function (err) {
                        var accepted = _this.enqueuRetry(err, ctx);
                        if (!accepted) {
                            ctx.setFailedDelivery({ reason: err });
                            return ctx;
                        }
                        return _this.subscribeToDelivery(ctx);
                    })];
            });
        });
    };
    CoreEventQueue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    CoreEventQueue.prototype.scheduleFlush = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 500; }
        if (this.flushing) {
            return;
        }
        this.flushing = true;
        setTimeout(function () {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            _this.flush().then(function () {
                setTimeout(function () {
                    _this.flushing = false;
                    if (_this.queue.length) {
                        _this.scheduleFlush(0);
                    }
                }, 0);
            });
        }, timeout);
    };
    CoreEventQueue.prototype.deliver = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var start, done, err_1, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.criticalTasks.done()];
                    case 1:
                        _a.sent();
                        start = Date.now();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.flushOne(ctx)];
                    case 3:
                        ctx = _a.sent();
                        done = Date.now() - start;
                        this.emit('delivery_success', ctx);
                        ctx.stats.gauge('delivered', done);
                        ctx.log('debug', 'Delivered', ctx.event);
                        return [2 /*return*/, ctx];
                    case 4:
                        err_1 = _a.sent();
                        error = err_1;
                        ctx.log('error', 'Failed to deliver', error);
                        this.emit('delivery_failure', ctx, error);
                        ctx.stats.increment('delivery_failed');
                        throw err_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CoreEventQueue.prototype.enqueuRetry = function (err, ctx) {
        var retriable = !(err instanceof ContextCancelation) || err.retry;
        if (!retriable) {
            return false;
        }
        return this.queue.pushWithBackoff(ctx);
    };
    CoreEventQueue.prototype.flush = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ctx, err_2, accepted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.queue.length === 0) {
                            return [2 /*return*/, []];
                        }
                        ctx = this.queue.pop();
                        if (!ctx) {
                            return [2 /*return*/, []];
                        }
                        ctx.attempts = this.queue.getAttempts(ctx);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.deliver(ctx)];
                    case 2:
                        ctx = _a.sent();
                        this.emit('flush', ctx, true);
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        accepted = this.enqueuRetry(err_2, ctx);
                        if (!accepted) {
                            ctx.setFailedDelivery({ reason: err_2 });
                            this.emit('flush', ctx, false);
                        }
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/, [ctx]];
                }
            });
        });
    };
    CoreEventQueue.prototype.isReady = function () {
        // return this.plugins.every((p) => p.isLoaded())
        // should we wait for every plugin to load?
        return true;
    };
    CoreEventQueue.prototype.availableExtensions = function (denyList) {
        var available = this.plugins.filter(function (p) {
            var _a, _b, _c;
            // Only filter out destination plugins or the Segment.io plugin
            if (p.type !== 'destination' && p.name !== 'Segment.io') {
                return true;
            }
            var alternativeNameMatch = undefined;
            (_a = p.alternativeNames) === null || _a === void 0 ? void 0 : _a.forEach(function (name) {
                if (denyList[name] !== undefined) {
                    alternativeNameMatch = denyList[name];
                }
            });
            // Explicit integration option takes precedence, `All: false` does not apply to Segment.io
            return ((_c = (_b = denyList[p.name]) !== null && _b !== void 0 ? _b : alternativeNameMatch) !== null && _c !== void 0 ? _c : (p.name === 'Segment.io' ? true : denyList.All) !== false);
        });
        var _a = groupBy(available, 'type'), _b = _a.before, before = _b === void 0 ? [] : _b, _c = _a.enrichment, enrichment = _c === void 0 ? [] : _c, _d = _a.destination, destination = _d === void 0 ? [] : _d, _e = _a.after, after = _e === void 0 ? [] : _e;
        return {
            before: before,
            enrichment: enrichment,
            destinations: destination,
            after: after,
        };
    };
    CoreEventQueue.prototype.flushOne = function (ctx) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, before, enrichment, _i, before_1, beforeWare, temp, _d, enrichment_1, enrichmentWare, temp, _e, destinations, after, afterCalls;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!this.isReady()) {
                            throw new Error('Not ready');
                        }
                        if (ctx.attempts > 1) {
                            this.emit('delivery_retry', ctx);
                        }
                        _c = this.availableExtensions((_a = ctx.event.integrations) !== null && _a !== void 0 ? _a : {}), before = _c.before, enrichment = _c.enrichment;
                        _i = 0, before_1 = before;
                        _f.label = 1;
                    case 1:
                        if (!(_i < before_1.length)) return [3 /*break*/, 4];
                        beforeWare = before_1[_i];
                        return [4 /*yield*/, ensure(ctx, beforeWare)];
                    case 2:
                        temp = _f.sent();
                        if (temp instanceof CoreContext) {
                            ctx = temp;
                        }
                        this.emit('message_enriched', ctx, beforeWare);
                        _f.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _d = 0, enrichment_1 = enrichment;
                        _f.label = 5;
                    case 5:
                        if (!(_d < enrichment_1.length)) return [3 /*break*/, 8];
                        enrichmentWare = enrichment_1[_d];
                        return [4 /*yield*/, attempt(ctx, enrichmentWare)];
                    case 6:
                        temp = _f.sent();
                        if (temp instanceof CoreContext) {
                            ctx = temp;
                        }
                        this.emit('message_enriched', ctx, enrichmentWare);
                        _f.label = 7;
                    case 7:
                        _d++;
                        return [3 /*break*/, 5];
                    case 8:
                        _e = this.availableExtensions((_b = ctx.event.integrations) !== null && _b !== void 0 ? _b : {}), destinations = _e.destinations, after = _e.after;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                setTimeout(function () {
                                    var attempts = destinations.map(function (destination) {
                                        return attempt(ctx, destination);
                                    });
                                    Promise.all(attempts).then(resolve).catch(reject);
                                }, 0);
                            })];
                    case 9:
                        _f.sent();
                        ctx.stats.increment('message_delivered');
                        this.emit('message_delivered', ctx);
                        afterCalls = after.map(function (after) { return attempt(ctx, after); });
                        return [4 /*yield*/, Promise.all(afterCalls)];
                    case 10:
                        _f.sent();
                        return [2 /*return*/, ctx];
                }
            });
        });
    };
    return CoreEventQueue;
}(Emitter));

/* The amount of time in ms to wait before invoking the callback. */
var getDelay = function (startTimeInEpochMS, timeoutInMS) {
    var elapsedTime = Date.now() - startTimeInEpochMS;
    // increasing the timeout increases the delay by almost the same amount -- this is weird legacy behavior.
    return Math.max((timeoutInMS !== null && timeoutInMS !== void 0 ? timeoutInMS : 300) - elapsedTime, 0);
};
/**
 * Push an event into the dispatch queue and invoke any callbacks.
 *
 * @param event - Segment event to enqueue.
 * @param queue - Queue to dispatch against.
 * @param emitter - This is typically an instance of "Analytics" -- used for metrics / progress information.
 * @param options
 */
function dispatch(ctx, queue, emitter, options) {
    return __awaiter(this, void 0, void 0, function () {
        var startTime, dispatched;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    emitter.emit('dispatch_start', ctx);
                    startTime = Date.now();
                    if (!queue.isEmpty()) return [3 /*break*/, 2];
                    return [4 /*yield*/, queue.dispatchSingle(ctx)];
                case 1:
                    dispatched = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, queue.dispatch(ctx)];
                case 3:
                    dispatched = _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(options === null || options === void 0 ? void 0 : options.callback)) return [3 /*break*/, 6];
                    return [4 /*yield*/, invokeCallback(dispatched, options.callback, getDelay(startTime, options.timeout))];
                case 5:
                    dispatched = _a.sent();
                    _a.label = 6;
                case 6:
                    if (options === null || options === void 0 ? void 0 : options.debug) {
                        dispatched.flush();
                    }
                    return [2 /*return*/, dispatched];
            }
        });
    });
}

function bindAll$1(obj) {
    var proto = obj.constructor.prototype;
    for (var _i = 0, _a = Object.getOwnPropertyNames(proto); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'constructor') {
            var desc = Object.getOwnPropertyDescriptor(obj.constructor.prototype, key);
            if (!!desc && typeof desc.value === 'function') {
                obj[key] = obj[key].bind(obj);
            }
        }
    }
    return obj;
}

var esm = /*#__PURE__*/Object.freeze({
	__proto__: null,
	ContextCancelation: ContextCancelation,
	CoreContext: CoreContext,
	CoreEventQueue: CoreEventQueue,
	CoreLogger: CoreLogger,
	CoreStats: CoreStats,
	EventFactory: EventFactory,
	NullStats: NullStats,
	ON_REMOVE_FROM_FUTURE: ON_REMOVE_FROM_FUTURE,
	PriorityQueue: PriorityQueue,
	ValidationError: ValidationError,
	assertEventExists: assertEventExists,
	assertEventType: assertEventType,
	assertTrackEventName: assertTrackEventName,
	assertTrackEventProperties: assertTrackEventProperties,
	assertTraits: assertTraits,
	assertUserIdentity: assertUserIdentity,
	attempt: attempt,
	backoff: backoff,
	bindAll: bindAll$1,
	dispatch: dispatch,
	ensure: ensure,
	exists: exists,
	getDelay: getDelay,
	invokeCallback: invokeCallback,
	isFunction: isFunction,
	isNumber: isNumber,
	isPlainObject: isPlainObject,
	isString: isString,
	pTimeout: pTimeout,
	sleep: sleep,
	validateEvent: validateEvent
});

var require$$5 = /*@__PURE__*/getAugmentedNamespace(esm);

Object.defineProperty(argumentsResolver, "__esModule", { value: true });
argumentsResolver.resolveAliasArguments = argumentsResolver.resolveUserArguments = argumentsResolver.resolvePageArguments = argumentsResolver.resolveArguments = void 0;
var analytics_core_1$4 = require$$5;
/**
 * Helper for the track method
 */
function resolveArguments(eventName, properties, options, callback) {
    var _a;
    var args = [eventName, properties, options, callback];
    var name = (0, analytics_core_1$4.isPlainObject)(eventName) ? eventName.event : eventName;
    if (!name || !(0, analytics_core_1$4.isString)(name)) {
        throw new Error('Event missing');
    }
    var data = (0, analytics_core_1$4.isPlainObject)(eventName)
        ? (_a = eventName.properties) !== null && _a !== void 0 ? _a : {}
        : (0, analytics_core_1$4.isPlainObject)(properties)
            ? properties
            : {};
    var opts = {};
    if (!(0, analytics_core_1$4.isFunction)(options)) {
        opts = options !== null && options !== void 0 ? options : {};
    }
    if ((0, analytics_core_1$4.isPlainObject)(eventName) && !(0, analytics_core_1$4.isFunction)(properties)) {
        opts = properties !== null && properties !== void 0 ? properties : {};
    }
    var cb = args.find(analytics_core_1$4.isFunction);
    return [name, data, opts, cb];
}
argumentsResolver.resolveArguments = resolveArguments;
/**
 * Helper for page, screen methods
 */
function resolvePageArguments(category, name, properties, options, callback) {
    var _a, _b;
    var resolvedCategory = null;
    var resolvedName = null;
    var args = [category, name, properties, options, callback];
    var strings = args.filter(analytics_core_1$4.isString);
    if (strings[0] !== undefined && strings[1] !== undefined) {
        resolvedCategory = strings[0];
        resolvedName = strings[1];
    }
    if (strings.length === 1) {
        resolvedCategory = null;
        resolvedName = strings[0];
    }
    var resolvedCallback = args.find(analytics_core_1$4.isFunction);
    var objects = args.filter(function (obj) {
        if (resolvedName === null) {
            return (0, analytics_core_1$4.isPlainObject)(obj);
        }
        return (0, analytics_core_1$4.isPlainObject)(obj) || obj === null;
    });
    var resolvedProperties = ((_a = objects[0]) !== null && _a !== void 0 ? _a : {});
    var resolvedOptions = ((_b = objects[1]) !== null && _b !== void 0 ? _b : {});
    return [
        resolvedCategory,
        resolvedName,
        resolvedProperties,
        resolvedOptions,
        resolvedCallback,
    ];
}
argumentsResolver.resolvePageArguments = resolvePageArguments;
/**
 * Helper for group, identify methods
 */
var resolveUserArguments = function (user) {
    return function () {
        var _a, _b, _c;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var values = {};
        // It's a stack so it's reversed so that we go through each of the expected arguments
        var orderStack = [
            'callback',
            'options',
            'traits',
            'id',
        ];
        // Read each argument and eval the possible values here
        for (var _d = 0, args_1 = args; _d < args_1.length; _d++) {
            var arg = args_1[_d];
            var current = orderStack.pop();
            if (current === 'id') {
                if ((0, analytics_core_1$4.isString)(arg) || (0, analytics_core_1$4.isNumber)(arg)) {
                    values.id = arg.toString();
                    continue;
                }
                if (arg === null || arg === undefined) {
                    continue;
                }
                // First argument should always be the id, if it is not a valid value we can skip it
                current = orderStack.pop();
            }
            // Traits and Options
            if ((current === 'traits' || current === 'options') &&
                (arg === null || arg === undefined || (0, analytics_core_1$4.isPlainObject)(arg))) {
                values[current] = arg;
            }
            // Callback
            if ((0, analytics_core_1$4.isFunction)(arg)) {
                values.callback = arg;
                break; // This is always the last argument
            }
        }
        return [
            (_a = values.id) !== null && _a !== void 0 ? _a : user.id(),
            ((_b = values.traits) !== null && _b !== void 0 ? _b : {}),
            (_c = values.options) !== null && _c !== void 0 ? _c : {},
            values.callback,
        ];
    };
};
argumentsResolver.resolveUserArguments = resolveUserArguments;
/**
 * Helper for alias method
 */
function resolveAliasArguments(to, from, options, callback) {
    if ((0, analytics_core_1$4.isNumber)(to))
        to = to.toString(); // Legacy behaviour - allow integers for alias calls
    if ((0, analytics_core_1$4.isNumber)(from))
        from = from.toString();
    var args = [to, from, options, callback];
    var _a = args.filter(analytics_core_1$4.isString), _b = _a[0], aliasTo = _b === void 0 ? to : _b, _c = _a[1], aliasFrom = _c === void 0 ? null : _c;
    var _d = args.filter(analytics_core_1$4.isPlainObject)[0], opts = _d === void 0 ? {} : _d;
    var resolvedCallback = args.find(analytics_core_1$4.isFunction);
    return [aliasTo, aliasFrom, opts, resolvedCallback];
}
argumentsResolver.resolveAliasArguments = resolveAliasArguments;

var connection = {};

var environment = {};

var hasRequiredEnvironment;

function requireEnvironment () {
	if (hasRequiredEnvironment) return environment;
	hasRequiredEnvironment = 1;
	Object.defineProperty(environment, "__esModule", { value: true });
	environment.isServer = environment.isBrowser = void 0;
	function isBrowser() {
	    return typeof window !== 'undefined';
	}
	environment.isBrowser = isBrowser;
	function isServer() {
	    return !isBrowser();
	}
	environment.isServer = isServer;
	
	return environment;
}

Object.defineProperty(connection, "__esModule", { value: true });
connection.isOffline = connection.isOnline = void 0;
var environment_1$1 = requireEnvironment();
function isOnline() {
    if ((0, environment_1$1.isBrowser)()) {
        return window.navigator.onLine;
    }
    return true;
}
connection.isOnline = isOnline;
function isOffline() {
    return !isOnline();
}
connection.isOffline = isOffline;

var context = {};

var stats = {};

var remoteMetrics$1 = {};

var version = {};

Object.defineProperty(version, "__esModule", { value: true });
version.version = void 0;
// This file is generated.
version.version = '1.62.0';

var versionType = {};

var hasRequiredVersionType;

function requireVersionType () {
	if (hasRequiredVersionType) return versionType;
	hasRequiredVersionType = 1;
	Object.defineProperty(versionType, "__esModule", { value: true });
	versionType.getVersionType = versionType.setVersionType = void 0;
	// Default value will be updated to 'web' in `bundle-umd.ts` for web build.
	var _version = 'npm';
	function setVersionType(version) {
	    _version = version;
	}
	versionType.setVersionType = setVersionType;
	function getVersionType() {
	    return _version;
	}
	versionType.getVersionType = getVersionType;
	
	return versionType;
}

var constants = {};

var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;
	Object.defineProperty(constants, "__esModule", { value: true });
	constants.SEGMENT_API_HOST = void 0;
	constants.SEGMENT_API_HOST = 'api.segment.io/v1';
	
	return constants;
}

Object.defineProperty(remoteMetrics$1, "__esModule", { value: true });
remoteMetrics$1.RemoteMetrics = void 0;
var tslib_1$b = require$$0$2;
var fetch_1$1 = fetch$2;
var version_1$2 = version;
var version_type_1$1 = requireVersionType();
var constants_1$1 = requireConstants();
var createRemoteMetric = function (metric, tags, versionType) {
    var formattedTags = tags.reduce(function (acc, t) {
        var _a = t.split(':'), k = _a[0], v = _a[1];
        acc[k] = v;
        return acc;
    }, {});
    return {
        type: 'Counter',
        metric: metric,
        value: 1,
        tags: tslib_1$b.__assign(tslib_1$b.__assign({}, formattedTags), { library: 'analytics.js', library_version: versionType === 'web' ? "next-".concat(version_1$2.version) : "npm:next-".concat(version_1$2.version) }),
    };
};
function logError(err) {
    console.error('Error sending segment performance metrics', err);
}
var RemoteMetrics = /** @class */ (function () {
    function RemoteMetrics(options) {
        var _this = this;
        var _a, _b, _c, _d;
        this.host = (_a = options === null || options === void 0 ? void 0 : options.host) !== null && _a !== void 0 ? _a : constants_1$1.SEGMENT_API_HOST;
        this.sampleRate = (_b = options === null || options === void 0 ? void 0 : options.sampleRate) !== null && _b !== void 0 ? _b : 1;
        this.flushTimer = (_c = options === null || options === void 0 ? void 0 : options.flushTimer) !== null && _c !== void 0 ? _c : 30 * 1000; /* 30s */
        this.maxQueueSize = (_d = options === null || options === void 0 ? void 0 : options.maxQueueSize) !== null && _d !== void 0 ? _d : 20;
        this.queue = [];
        if (this.sampleRate > 0) {
            var flushing_1 = false;
            var run_1 = function () {
                if (flushing_1) {
                    return;
                }
                flushing_1 = true;
                _this.flush().catch(logError);
                flushing_1 = false;
                setTimeout(run_1, _this.flushTimer);
            };
            run_1();
        }
    }
    RemoteMetrics.prototype.increment = function (metric, tags) {
        // All metrics are part of an allow list in Tracking API
        if (!metric.includes('analytics_js.')) {
            return;
        }
        // /m doesn't like empty tags
        if (tags.length === 0) {
            return;
        }
        if (Math.random() > this.sampleRate) {
            return;
        }
        if (this.queue.length >= this.maxQueueSize) {
            return;
        }
        var remoteMetric = createRemoteMetric(metric, tags, (0, version_type_1$1.getVersionType)());
        this.queue.push(remoteMetric);
        if (metric.includes('error')) {
            this.flush().catch(logError);
        }
    };
    RemoteMetrics.prototype.flush = function () {
        return tslib_1$b.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1$b.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.queue.length <= 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.send().catch(function (error) {
                                logError(error);
                                _this.sampleRate = 0;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RemoteMetrics.prototype.send = function () {
        return tslib_1$b.__awaiter(this, void 0, void 0, function () {
            var payload, headers, url;
            return tslib_1$b.__generator(this, function (_a) {
                payload = { series: this.queue };
                this.queue = [];
                headers = { 'Content-Type': 'text/plain' };
                url = "https://".concat(this.host, "/m");
                return [2 /*return*/, (0, fetch_1$1.fetch)(url, {
                        headers: headers,
                        body: JSON.stringify(payload),
                        method: 'POST',
                    })];
            });
        });
    };
    return RemoteMetrics;
}());
remoteMetrics$1.RemoteMetrics = RemoteMetrics;

Object.defineProperty(stats, "__esModule", { value: true });
stats.Stats = void 0;
var tslib_1$a = require$$0$2;
var analytics_core_1$3 = require$$5;
var remote_metrics_1 = remoteMetrics$1;
var remoteMetrics;
var Stats = /** @class */ (function (_super) {
    tslib_1$a.__extends(Stats, _super);
    function Stats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stats.initRemoteMetrics = function (options) {
        remoteMetrics = new remote_metrics_1.RemoteMetrics(options);
    };
    Stats.prototype.increment = function (metric, by, tags) {
        _super.prototype.increment.call(this, metric, by, tags);
        remoteMetrics === null || remoteMetrics === void 0 ? void 0 : remoteMetrics.increment(metric, tags !== null && tags !== void 0 ? tags : []);
    };
    return Stats;
}(analytics_core_1$3.CoreStats));
stats.Stats = Stats;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContextCancelation = exports.Context = void 0;
	var tslib_1 = require$$0$2;
	var analytics_core_1 = require$$5;
	Object.defineProperty(exports, "ContextCancelation", { enumerable: true, get: function () { return analytics_core_1.ContextCancelation; } });
	var stats_1 = stats;
	var Context = /** @class */ (function (_super) {
	    tslib_1.__extends(Context, _super);
	    function Context(event, id) {
	        return _super.call(this, event, id, new stats_1.Stats()) || this;
	    }
	    Context.system = function () {
	        return new this({ type: 'track', event: 'system' });
	    };
	    return Context;
	}(analytics_core_1.CoreContext));
	exports.Context = Context;
	
} (context));

var require$$7 = /*@__PURE__*/getAugmentedNamespace(esm$1);

var events = {};

var dist$3 = {};

var IDX=256, HEX=[], BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

function v4() {
	var i=0, num, out='';

	if (!BUFFER || ((IDX + 16) > 256)) {
		BUFFER = Array(i=256);
		while (i--) BUFFER[i] = 256 * Math.random() | 0;
		i = IDX = 0;
	}

	for (; i < 16; i++) {
		num = BUFFER[IDX + i];
		if (i==6) out += HEX[num & 15 | 64];
		else if (i==8) out += HEX[num & 63 | 128];
		else out += HEX[num];

		if (i & 1 && i > 1 && i < 11) out += '-';
	}

	IDX++;
	return out;
}

dist$3.v4 = v4;

var dist$2 = {};

function dset(obj, keys, val) {
	keys.split && (keys=keys.split('.'));
	var i=0, l=keys.length, t=obj, x, k;
	while (i < l) {
		k = keys[i++];
		if (k === '__proto__' || k === 'constructor' || k === 'prototype') break;
		t = t[k] = (i === l) ? val : (typeof(x=t[k])===typeof(keys)) ? x : (keys[i]*0 !== 0 || !!~(''+keys[i]).indexOf('.')) ? {} : [];
	}
}

dist$2.dset = dset;

var sparkMd5 = {exports: {}};

var hasRequiredSparkMd5;

function requireSparkMd5 () {
	if (hasRequiredSparkMd5) return sparkMd5.exports;
	hasRequiredSparkMd5 = 1;
	(function (module, exports) {
		(function (factory) {
		    {
		        // Node/CommonJS
		        module.exports = factory();
		    }
		}(function (undefined$1) {

		    /*
		     * Fastest md5 implementation around (JKM md5).
		     * Credits: Joseph Myers
		     *
		     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
		     * @see http://jsperf.com/md5-shootout/7
		     */

		    /* this function is much faster,
		      so if possible we use it. Some IEs
		      are the only ones I know of that
		      need the idiotic second function,
		      generated by an if clause.  */
		    var hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

		    function md5cycle(x, k) {
		        var a = x[0],
		            b = x[1],
		            c = x[2],
		            d = x[3];

		        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
		        a  = (a << 7 | a >>> 25) + b | 0;
		        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
		        d  = (d << 12 | d >>> 20) + a | 0;
		        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
		        c  = (c << 17 | c >>> 15) + d | 0;
		        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
		        b  = (b << 22 | b >>> 10) + c | 0;
		        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
		        a  = (a << 7 | a >>> 25) + b | 0;
		        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
		        d  = (d << 12 | d >>> 20) + a | 0;
		        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
		        c  = (c << 17 | c >>> 15) + d | 0;
		        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
		        b  = (b << 22 | b >>> 10) + c | 0;
		        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
		        a  = (a << 7 | a >>> 25) + b | 0;
		        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
		        d  = (d << 12 | d >>> 20) + a | 0;
		        c += (d & a | ~d & b) + k[10] - 42063 | 0;
		        c  = (c << 17 | c >>> 15) + d | 0;
		        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
		        b  = (b << 22 | b >>> 10) + c | 0;
		        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
		        a  = (a << 7 | a >>> 25) + b | 0;
		        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
		        d  = (d << 12 | d >>> 20) + a | 0;
		        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
		        c  = (c << 17 | c >>> 15) + d | 0;
		        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
		        b  = (b << 22 | b >>> 10) + c | 0;

		        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
		        a  = (a << 5 | a >>> 27) + b | 0;
		        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
		        d  = (d << 9 | d >>> 23) + a | 0;
		        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
		        c  = (c << 14 | c >>> 18) + d | 0;
		        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
		        b  = (b << 20 | b >>> 12) + c | 0;
		        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
		        a  = (a << 5 | a >>> 27) + b | 0;
		        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
		        d  = (d << 9 | d >>> 23) + a | 0;
		        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
		        c  = (c << 14 | c >>> 18) + d | 0;
		        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
		        b  = (b << 20 | b >>> 12) + c | 0;
		        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
		        a  = (a << 5 | a >>> 27) + b | 0;
		        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
		        d  = (d << 9 | d >>> 23) + a | 0;
		        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
		        c  = (c << 14 | c >>> 18) + d | 0;
		        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
		        b  = (b << 20 | b >>> 12) + c | 0;
		        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
		        a  = (a << 5 | a >>> 27) + b | 0;
		        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
		        d  = (d << 9 | d >>> 23) + a | 0;
		        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
		        c  = (c << 14 | c >>> 18) + d | 0;
		        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
		        b  = (b << 20 | b >>> 12) + c | 0;

		        a += (b ^ c ^ d) + k[5] - 378558 | 0;
		        a  = (a << 4 | a >>> 28) + b | 0;
		        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
		        d  = (d << 11 | d >>> 21) + a | 0;
		        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
		        c  = (c << 16 | c >>> 16) + d | 0;
		        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
		        b  = (b << 23 | b >>> 9) + c | 0;
		        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
		        a  = (a << 4 | a >>> 28) + b | 0;
		        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
		        d  = (d << 11 | d >>> 21) + a | 0;
		        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
		        c  = (c << 16 | c >>> 16) + d | 0;
		        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
		        b  = (b << 23 | b >>> 9) + c | 0;
		        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
		        a  = (a << 4 | a >>> 28) + b | 0;
		        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
		        d  = (d << 11 | d >>> 21) + a | 0;
		        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
		        c  = (c << 16 | c >>> 16) + d | 0;
		        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
		        b  = (b << 23 | b >>> 9) + c | 0;
		        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
		        a  = (a << 4 | a >>> 28) + b | 0;
		        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
		        d  = (d << 11 | d >>> 21) + a | 0;
		        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
		        c  = (c << 16 | c >>> 16) + d | 0;
		        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
		        b  = (b << 23 | b >>> 9) + c | 0;

		        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
		        a  = (a << 6 | a >>> 26) + b | 0;
		        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
		        d  = (d << 10 | d >>> 22) + a | 0;
		        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
		        c  = (c << 15 | c >>> 17) + d | 0;
		        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
		        b  = (b << 21 |b >>> 11) + c | 0;
		        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
		        a  = (a << 6 | a >>> 26) + b | 0;
		        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
		        d  = (d << 10 | d >>> 22) + a | 0;
		        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
		        c  = (c << 15 | c >>> 17) + d | 0;
		        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
		        b  = (b << 21 |b >>> 11) + c | 0;
		        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
		        a  = (a << 6 | a >>> 26) + b | 0;
		        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
		        d  = (d << 10 | d >>> 22) + a | 0;
		        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
		        c  = (c << 15 | c >>> 17) + d | 0;
		        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
		        b  = (b << 21 |b >>> 11) + c | 0;
		        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
		        a  = (a << 6 | a >>> 26) + b | 0;
		        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
		        d  = (d << 10 | d >>> 22) + a | 0;
		        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
		        c  = (c << 15 | c >>> 17) + d | 0;
		        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
		        b  = (b << 21 | b >>> 11) + c | 0;

		        x[0] = a + x[0] | 0;
		        x[1] = b + x[1] | 0;
		        x[2] = c + x[2] | 0;
		        x[3] = d + x[3] | 0;
		    }

		    function md5blk(s) {
		        var md5blks = [],
		            i; /* Andy King said do it this way. */

		        for (i = 0; i < 64; i += 4) {
		            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
		        }
		        return md5blks;
		    }

		    function md5blk_array(a) {
		        var md5blks = [],
		            i; /* Andy King said do it this way. */

		        for (i = 0; i < 64; i += 4) {
		            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
		        }
		        return md5blks;
		    }

		    function md51(s) {
		        var n = s.length,
		            state = [1732584193, -271733879, -1732584194, 271733878],
		            i,
		            length,
		            tail,
		            tmp,
		            lo,
		            hi;

		        for (i = 64; i <= n; i += 64) {
		            md5cycle(state, md5blk(s.substring(i - 64, i)));
		        }
		        s = s.substring(i - 64);
		        length = s.length;
		        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		        for (i = 0; i < length; i += 1) {
		            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
		        }
		        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
		        if (i > 55) {
		            md5cycle(state, tail);
		            for (i = 0; i < 16; i += 1) {
		                tail[i] = 0;
		            }
		        }

		        // Beware that the final length might not fit in 32 bits so we take care of that
		        tmp = n * 8;
		        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
		        lo = parseInt(tmp[2], 16);
		        hi = parseInt(tmp[1], 16) || 0;

		        tail[14] = lo;
		        tail[15] = hi;

		        md5cycle(state, tail);
		        return state;
		    }

		    function md51_array(a) {
		        var n = a.length,
		            state = [1732584193, -271733879, -1732584194, 271733878],
		            i,
		            length,
		            tail,
		            tmp,
		            lo,
		            hi;

		        for (i = 64; i <= n; i += 64) {
		            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
		        }

		        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
		        // containing the last element of the parent array if the sub array specified starts
		        // beyond the length of the parent array - weird.
		        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
		        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

		        length = a.length;
		        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		        for (i = 0; i < length; i += 1) {
		            tail[i >> 2] |= a[i] << ((i % 4) << 3);
		        }

		        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
		        if (i > 55) {
		            md5cycle(state, tail);
		            for (i = 0; i < 16; i += 1) {
		                tail[i] = 0;
		            }
		        }

		        // Beware that the final length might not fit in 32 bits so we take care of that
		        tmp = n * 8;
		        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
		        lo = parseInt(tmp[2], 16);
		        hi = parseInt(tmp[1], 16) || 0;

		        tail[14] = lo;
		        tail[15] = hi;

		        md5cycle(state, tail);

		        return state;
		    }

		    function rhex(n) {
		        var s = '',
		            j;
		        for (j = 0; j < 4; j += 1) {
		            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
		        }
		        return s;
		    }

		    function hex(x) {
		        var i;
		        for (i = 0; i < x.length; i += 1) {
		            x[i] = rhex(x[i]);
		        }
		        return x.join('');
		    }

		    // In some cases the fast add32 function cannot be used..
		    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') ;

		    // ---------------------------------------------------

		    /**
		     * ArrayBuffer slice polyfill.
		     *
		     * @see https://github.com/ttaubert/node-arraybuffer-slice
		     */

		    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
		        (function () {
		            function clamp(val, length) {
		                val = (val | 0) || 0;

		                if (val < 0) {
		                    return Math.max(val + length, 0);
		                }

		                return Math.min(val, length);
		            }

		            ArrayBuffer.prototype.slice = function (from, to) {
		                var length = this.byteLength,
		                    begin = clamp(from, length),
		                    end = length,
		                    num,
		                    target,
		                    targetArray,
		                    sourceArray;

		                if (to !== undefined$1) {
		                    end = clamp(to, length);
		                }

		                if (begin > end) {
		                    return new ArrayBuffer(0);
		                }

		                num = end - begin;
		                target = new ArrayBuffer(num);
		                targetArray = new Uint8Array(target);

		                sourceArray = new Uint8Array(this, begin, num);
		                targetArray.set(sourceArray);

		                return target;
		            };
		        })();
		    }

		    // ---------------------------------------------------

		    /**
		     * Helpers.
		     */

		    function toUtf8(str) {
		        if (/[\u0080-\uFFFF]/.test(str)) {
		            str = unescape(encodeURIComponent(str));
		        }

		        return str;
		    }

		    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
		        var length = str.length,
		           buff = new ArrayBuffer(length),
		           arr = new Uint8Array(buff),
		           i;

		        for (i = 0; i < length; i += 1) {
		            arr[i] = str.charCodeAt(i);
		        }

		        return returnUInt8Array ? arr : buff;
		    }

		    function arrayBuffer2Utf8Str(buff) {
		        return String.fromCharCode.apply(null, new Uint8Array(buff));
		    }

		    function concatenateArrayBuffers(first, second, returnUInt8Array) {
		        var result = new Uint8Array(first.byteLength + second.byteLength);

		        result.set(new Uint8Array(first));
		        result.set(new Uint8Array(second), first.byteLength);

		        return returnUInt8Array ? result : result.buffer;
		    }

		    function hexToBinaryString(hex) {
		        var bytes = [],
		            length = hex.length,
		            x;

		        for (x = 0; x < length - 1; x += 2) {
		            bytes.push(parseInt(hex.substr(x, 2), 16));
		        }

		        return String.fromCharCode.apply(String, bytes);
		    }

		    // ---------------------------------------------------

		    /**
		     * SparkMD5 OOP implementation.
		     *
		     * Use this class to perform an incremental md5, otherwise use the
		     * static methods instead.
		     */

		    function SparkMD5() {
		        // call reset to init the instance
		        this.reset();
		    }

		    /**
		     * Appends a string.
		     * A conversion will be applied if an utf8 string is detected.
		     *
		     * @param {String} str The string to be appended
		     *
		     * @return {SparkMD5} The instance itself
		     */
		    SparkMD5.prototype.append = function (str) {
		        // Converts the string to utf8 bytes if necessary
		        // Then append as binary
		        this.appendBinary(toUtf8(str));

		        return this;
		    };

		    /**
		     * Appends a binary string.
		     *
		     * @param {String} contents The binary string to be appended
		     *
		     * @return {SparkMD5} The instance itself
		     */
		    SparkMD5.prototype.appendBinary = function (contents) {
		        this._buff += contents;
		        this._length += contents.length;

		        var length = this._buff.length,
		            i;

		        for (i = 64; i <= length; i += 64) {
		            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
		        }

		        this._buff = this._buff.substring(i - 64);

		        return this;
		    };

		    /**
		     * Finishes the incremental computation, reseting the internal state and
		     * returning the result.
		     *
		     * @param {Boolean} raw True to get the raw string, false to get the hex string
		     *
		     * @return {String} The result
		     */
		    SparkMD5.prototype.end = function (raw) {
		        var buff = this._buff,
		            length = buff.length,
		            i,
		            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		            ret;

		        for (i = 0; i < length; i += 1) {
		            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
		        }

		        this._finish(tail, length);
		        ret = hex(this._hash);

		        if (raw) {
		            ret = hexToBinaryString(ret);
		        }

		        this.reset();

		        return ret;
		    };

		    /**
		     * Resets the internal state of the computation.
		     *
		     * @return {SparkMD5} The instance itself
		     */
		    SparkMD5.prototype.reset = function () {
		        this._buff = '';
		        this._length = 0;
		        this._hash = [1732584193, -271733879, -1732584194, 271733878];

		        return this;
		    };

		    /**
		     * Gets the internal state of the computation.
		     *
		     * @return {Object} The state
		     */
		    SparkMD5.prototype.getState = function () {
		        return {
		            buff: this._buff,
		            length: this._length,
		            hash: this._hash.slice()
		        };
		    };

		    /**
		     * Gets the internal state of the computation.
		     *
		     * @param {Object} state The state
		     *
		     * @return {SparkMD5} The instance itself
		     */
		    SparkMD5.prototype.setState = function (state) {
		        this._buff = state.buff;
		        this._length = state.length;
		        this._hash = state.hash;

		        return this;
		    };

		    /**
		     * Releases memory used by the incremental buffer and other additional
		     * resources. If you plan to use the instance again, use reset instead.
		     */
		    SparkMD5.prototype.destroy = function () {
		        delete this._hash;
		        delete this._buff;
		        delete this._length;
		    };

		    /**
		     * Finish the final calculation based on the tail.
		     *
		     * @param {Array}  tail   The tail (will be modified)
		     * @param {Number} length The length of the remaining buffer
		     */
		    SparkMD5.prototype._finish = function (tail, length) {
		        var i = length,
		            tmp,
		            lo,
		            hi;

		        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
		        if (i > 55) {
		            md5cycle(this._hash, tail);
		            for (i = 0; i < 16; i += 1) {
		                tail[i] = 0;
		            }
		        }

		        // Do the final computation based on the tail and length
		        // Beware that the final length may not fit in 32 bits so we take care of that
		        tmp = this._length * 8;
		        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
		        lo = parseInt(tmp[2], 16);
		        hi = parseInt(tmp[1], 16) || 0;

		        tail[14] = lo;
		        tail[15] = hi;
		        md5cycle(this._hash, tail);
		    };

		    /**
		     * Performs the md5 hash on a string.
		     * A conversion will be applied if utf8 string is detected.
		     *
		     * @param {String}  str The string
		     * @param {Boolean} [raw] True to get the raw string, false to get the hex string
		     *
		     * @return {String} The result
		     */
		    SparkMD5.hash = function (str, raw) {
		        // Converts the string to utf8 bytes if necessary
		        // Then compute it using the binary function
		        return SparkMD5.hashBinary(toUtf8(str), raw);
		    };

		    /**
		     * Performs the md5 hash on a binary string.
		     *
		     * @param {String}  content The binary string
		     * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
		     *
		     * @return {String} The result
		     */
		    SparkMD5.hashBinary = function (content, raw) {
		        var hash = md51(content),
		            ret = hex(hash);

		        return raw ? hexToBinaryString(ret) : ret;
		    };

		    // ---------------------------------------------------

		    /**
		     * SparkMD5 OOP implementation for array buffers.
		     *
		     * Use this class to perform an incremental md5 ONLY for array buffers.
		     */
		    SparkMD5.ArrayBuffer = function () {
		        // call reset to init the instance
		        this.reset();
		    };

		    /**
		     * Appends an array buffer.
		     *
		     * @param {ArrayBuffer} arr The array to be appended
		     *
		     * @return {SparkMD5.ArrayBuffer} The instance itself
		     */
		    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
		        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
		            length = buff.length,
		            i;

		        this._length += arr.byteLength;

		        for (i = 64; i <= length; i += 64) {
		            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
		        }

		        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

		        return this;
		    };

		    /**
		     * Finishes the incremental computation, reseting the internal state and
		     * returning the result.
		     *
		     * @param {Boolean} raw True to get the raw string, false to get the hex string
		     *
		     * @return {String} The result
		     */
		    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
		        var buff = this._buff,
		            length = buff.length,
		            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		            i,
		            ret;

		        for (i = 0; i < length; i += 1) {
		            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
		        }

		        this._finish(tail, length);
		        ret = hex(this._hash);

		        if (raw) {
		            ret = hexToBinaryString(ret);
		        }

		        this.reset();

		        return ret;
		    };

		    /**
		     * Resets the internal state of the computation.
		     *
		     * @return {SparkMD5.ArrayBuffer} The instance itself
		     */
		    SparkMD5.ArrayBuffer.prototype.reset = function () {
		        this._buff = new Uint8Array(0);
		        this._length = 0;
		        this._hash = [1732584193, -271733879, -1732584194, 271733878];

		        return this;
		    };

		    /**
		     * Gets the internal state of the computation.
		     *
		     * @return {Object} The state
		     */
		    SparkMD5.ArrayBuffer.prototype.getState = function () {
		        var state = SparkMD5.prototype.getState.call(this);

		        // Convert buffer to a string
		        state.buff = arrayBuffer2Utf8Str(state.buff);

		        return state;
		    };

		    /**
		     * Gets the internal state of the computation.
		     *
		     * @param {Object} state The state
		     *
		     * @return {SparkMD5.ArrayBuffer} The instance itself
		     */
		    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
		        // Convert string to buffer
		        state.buff = utf8Str2ArrayBuffer(state.buff, true);

		        return SparkMD5.prototype.setState.call(this, state);
		    };

		    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

		    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

		    /**
		     * Performs the md5 hash on an array buffer.
		     *
		     * @param {ArrayBuffer} arr The array buffer
		     * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
		     *
		     * @return {String} The result
		     */
		    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
		        var hash = md51_array(new Uint8Array(arr)),
		            ret = hex(hash);

		        return raw ? hexToBinaryString(ret) : ret;
		    };

		    return SparkMD5;
		})); 
	} (sparkMd5));
	return sparkMd5.exports;
}

var page$1 = {};

var getPageContext = {};

var hasRequiredGetPageContext;

function requireGetPageContext () {
	if (hasRequiredGetPageContext) return getPageContext;
	hasRequiredGetPageContext = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.getDefaultPageContext = exports.getDefaultBufferedPageContext = exports.createPageContext = exports.isBufferedPageContext = exports.createBufferedPageContext = exports.BufferedPageContextDiscriminant = void 0;
		var analytics_core_1 = require$$5;
		exports.BufferedPageContextDiscriminant = 'bpc';
		/**
		 * `BufferedPageContext` object builder
		 */
		var createBufferedPageContext = function (url, canonicalUrl, search, path, title, referrer) { return ({
		    __t: exports.BufferedPageContextDiscriminant,
		    c: canonicalUrl,
		    p: path,
		    u: url,
		    s: search,
		    t: title,
		    r: referrer,
		}); };
		exports.createBufferedPageContext = createBufferedPageContext;
		// my clever/dubious way of making sure this type guard does not get out sync with the type definition
		var BUFFERED_PAGE_CONTEXT_KEYS = Object.keys((0, exports.createBufferedPageContext)('', '', '', '', '', ''));
		function isBufferedPageContext(bufferedPageCtx) {
		    if (!(0, analytics_core_1.isPlainObject)(bufferedPageCtx))
		        return false;
		    if (bufferedPageCtx.__t !== exports.BufferedPageContextDiscriminant)
		        return false;
		    // ensure obj has all the keys we expect, and none we don't.
		    for (var k in bufferedPageCtx) {
		        if (!BUFFERED_PAGE_CONTEXT_KEYS.includes(k)) {
		            return false;
		        }
		    }
		    return true;
		}
		exports.isBufferedPageContext = isBufferedPageContext;
		//  Legacy logic: we are we appending search parameters to the canonical URL -- I guess the canonical URL is  "not canonical enough" (lol)
		var createCanonicalURL = function (canonicalUrl, searchParams) {
		    return canonicalUrl.indexOf('?') > -1
		        ? canonicalUrl
		        : canonicalUrl + searchParams;
		};
		/**
		 * Strips hash from URL.
		 * http://www.segment.local#test -> http://www.segment.local
		 */
		var removeHash = function (href) {
		    var hashIdx = href.indexOf('#');
		    return hashIdx === -1 ? href : href.slice(0, hashIdx);
		};
		var parseCanonicalPath = function (canonicalUrl) {
		    try {
		        return new URL(canonicalUrl).pathname;
		    }
		    catch (_e) {
		        // this is classic behavior -- we assume that if the canonical URL is invalid, it's a raw path.
		        return canonicalUrl[0] === '/' ? canonicalUrl : '/' + canonicalUrl;
		    }
		};
		/**
		 * Create a `PageContext` from a `BufferedPageContext`.
		 * `BufferedPageContext` keys are minified to save bytes in the snippet.
		 */
		var createPageContext = function (_a) {
		    var canonicalUrl = _a.c, pathname = _a.p, search = _a.s, url = _a.u, referrer = _a.r, title = _a.t;
		    var newPath = canonicalUrl ? parseCanonicalPath(canonicalUrl) : pathname;
		    var newUrl = canonicalUrl
		        ? createCanonicalURL(canonicalUrl, search)
		        : removeHash(url);
		    return {
		        path: newPath,
		        referrer: referrer,
		        search: search,
		        title: title,
		        url: newUrl,
		    };
		};
		exports.createPageContext = createPageContext;
		/**
		 * Get page properties from the browser window/document.
		 */
		var getDefaultBufferedPageContext = function () {
		    var c = document.querySelector("link[rel='canonical']");
		    return (0, exports.createBufferedPageContext)(location.href, (c && c.getAttribute('href')) || undefined, location.search, location.pathname, document.title, document.referrer);
		};
		exports.getDefaultBufferedPageContext = getDefaultBufferedPageContext;
		/**
		 * Get page properties from the browser window/document.
		 */
		var getDefaultPageContext = function () {
		    return (0, exports.createPageContext)((0, exports.getDefaultBufferedPageContext)());
		};
		exports.getDefaultPageContext = getDefaultPageContext;
		
	} (getPageContext));
	return getPageContext;
}

var addPageContext = {};

var pick = {};

var hasRequiredPick;

function requirePick () {
	if (hasRequiredPick) return pick;
	hasRequiredPick = 1;
	Object.defineProperty(pick, "__esModule", { value: true });
	pick.pick = void 0;
	var tslib_1 = require$$0$2;
	/**
	 * @example
	 * pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])
	 * => { 'a': 1, 'c': 3 }
	 */
	function pick$1(object, keys) {
	    return Object.assign.apply(Object, tslib_1.__spreadArray([{}], keys.map(function (key) {
	        var _a;
	        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
	            return _a = {}, _a[key] = object[key], _a;
	        }
	    }), false));
	}
	pick.pick = pick$1;
	
	return pick;
}

var hasRequiredAddPageContext;

function requireAddPageContext () {
	if (hasRequiredAddPageContext) return addPageContext;
	hasRequiredAddPageContext = 1;
	Object.defineProperty(addPageContext, "__esModule", { value: true });
	addPageContext.addPageContext = void 0;
	var tslib_1 = require$$0$2;
	var pick_1 = requirePick();
	var get_page_context_1 = requireGetPageContext();
	/**
	 * Augments a segment event with information about the current page.
	 * Page information like URL changes frequently, so this is meant to be captured as close to the event call as possible.
	 * Things like `userAgent` do not change, so they can be added later in the flow.
	 * We prefer not to add this information to this function, as it increases the main bundle size.
	 */
	var addPageContext$1 = function (event, pageCtx) {
	    if (pageCtx === void 0) { pageCtx = (0, get_page_context_1.getDefaultPageContext)(); }
	    var evtCtx = event.context; // Context should be set earlier in the flow
	    var pageContextFromEventProps;
	    if (event.type === 'page') {
	        pageContextFromEventProps =
	            event.properties && (0, pick_1.pick)(event.properties, Object.keys(pageCtx));
	        event.properties = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pageCtx), event.properties), (event.name ? { name: event.name } : {}));
	    }
	    evtCtx.page = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pageCtx), pageContextFromEventProps), evtCtx.page);
	};
	addPageContext.addPageContext = addPageContext$1;
	
	return addPageContext;
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = require$$0$2;
	tslib_1.__exportStar(requireGetPageContext(), exports);
	tslib_1.__exportStar(requireAddPageContext(), exports);
	
} (page$1));

var interfaces = {};

var hasRequiredInterfaces;

function requireInterfaces () {
	if (hasRequiredInterfaces) return interfaces;
	hasRequiredInterfaces = 1;
	Object.defineProperty(interfaces, "__esModule", { value: true });
	
	return interfaces;
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.EventFactory = void 0;
	var tslib_1 = require$$0$2;
	var uuid_1 = dist$3;
	var dset_1 = dist$2;
	var spark_md5_1 = tslib_1.__importDefault(requireSparkMd5());
	var page_1 = page$1;
	tslib_1.__exportStar(requireInterfaces(), exports);
	var EventFactory = /** @class */ (function () {
	    function EventFactory(user) {
	        this.user = user;
	    }
	    EventFactory.prototype.track = function (event, properties, options, globalIntegrations, pageCtx) {
	        return this.normalize(tslib_1.__assign(tslib_1.__assign({}, this.baseEvent()), { event: event, type: 'track', properties: properties, options: tslib_1.__assign({}, options), integrations: tslib_1.__assign({}, globalIntegrations) }), pageCtx);
	    };
	    EventFactory.prototype.page = function (category, page, properties, options, globalIntegrations, pageCtx) {
	        var _a;
	        var event = {
	            type: 'page',
	            properties: tslib_1.__assign({}, properties),
	            options: tslib_1.__assign({}, options),
	            integrations: tslib_1.__assign({}, globalIntegrations),
	        };
	        if (category !== null) {
	            event.category = category;
	            event.properties = (_a = event.properties) !== null && _a !== void 0 ? _a : {};
	            event.properties.category = category;
	        }
	        if (page !== null) {
	            event.name = page;
	        }
	        return this.normalize(tslib_1.__assign(tslib_1.__assign({}, this.baseEvent()), event), pageCtx);
	    };
	    EventFactory.prototype.screen = function (category, screen, properties, options, globalIntegrations, pageCtx) {
	        var event = {
	            type: 'screen',
	            properties: tslib_1.__assign({}, properties),
	            options: tslib_1.__assign({}, options),
	            integrations: tslib_1.__assign({}, globalIntegrations),
	        };
	        if (category !== null) {
	            event.category = category;
	        }
	        if (screen !== null) {
	            event.name = screen;
	        }
	        return this.normalize(tslib_1.__assign(tslib_1.__assign({}, this.baseEvent()), event), pageCtx);
	    };
	    EventFactory.prototype.identify = function (userId, traits, options, globalIntegrations, pageCtx) {
	        return this.normalize(tslib_1.__assign(tslib_1.__assign({}, this.baseEvent()), { type: 'identify', userId: userId, traits: traits, options: tslib_1.__assign({}, options), integrations: tslib_1.__assign({}, globalIntegrations) }), pageCtx);
	    };
	    EventFactory.prototype.group = function (groupId, traits, options, globalIntegrations, pageCtx) {
	        return this.normalize(tslib_1.__assign(tslib_1.__assign({}, this.baseEvent()), { type: 'group', traits: traits, options: tslib_1.__assign({}, options), integrations: tslib_1.__assign({}, globalIntegrations), groupId: groupId }), pageCtx);
	    };
	    EventFactory.prototype.alias = function (to, from, options, globalIntegrations, pageCtx) {
	        var base = {
	            userId: to,
	            type: 'alias',
	            options: tslib_1.__assign({}, options),
	            integrations: tslib_1.__assign({}, globalIntegrations),
	        };
	        if (from !== null) {
	            base.previousId = from;
	        }
	        if (to === undefined) {
	            return this.normalize(tslib_1.__assign(tslib_1.__assign({}, base), this.baseEvent()));
	        }
	        return this.normalize(tslib_1.__assign(tslib_1.__assign({}, this.baseEvent()), base), pageCtx);
	    };
	    EventFactory.prototype.baseEvent = function () {
	        var base = {
	            integrations: {},
	            options: {},
	        };
	        var user = this.user;
	        if (user.id()) {
	            base.userId = user.id();
	        }
	        if (user.anonymousId()) {
	            base.anonymousId = user.anonymousId();
	        }
	        return base;
	    };
	    /**
	     * Builds the context part of an event based on "foreign" keys that
	     * are provided in the `Options` parameter for an Event
	     */
	    EventFactory.prototype.context = function (event) {
	        var _a, _b, _c;
	        var optionsKeys = ['integrations', 'anonymousId', 'timestamp', 'userId'];
	        var options = (_a = event.options) !== null && _a !== void 0 ? _a : {};
	        delete options['integrations'];
	        var providedOptionsKeys = Object.keys(options);
	        var context = (_c = (_b = event.options) === null || _b === void 0 ? void 0 : _b.context) !== null && _c !== void 0 ? _c : {};
	        var overrides = {};
	        providedOptionsKeys.forEach(function (key) {
	            if (key === 'context') {
	                return;
	            }
	            if (optionsKeys.includes(key)) {
	                (0, dset_1.dset)(overrides, key, options[key]);
	            }
	            else {
	                (0, dset_1.dset)(context, key, options[key]);
	            }
	        });
	        return [context, overrides];
	    };
	    EventFactory.prototype.normalize = function (event, pageCtx) {
	        var _a, _b, _c;
	        // set anonymousId globally if we encounter an override
	        //segment.com/docs/connections/sources/catalog/libraries/website/javascript/identity/#override-the-anonymous-id-using-the-options-object
	        ((_a = event.options) === null || _a === void 0 ? void 0 : _a.anonymousId) &&
	            this.user.anonymousId(event.options.anonymousId);
	        var integrationBooleans = Object.keys((_b = event.integrations) !== null && _b !== void 0 ? _b : {}).reduce(function (integrationNames, name) {
	            var _a;
	            var _b;
	            return tslib_1.__assign(tslib_1.__assign({}, integrationNames), (_a = {}, _a[name] = Boolean((_b = event.integrations) === null || _b === void 0 ? void 0 : _b[name]), _a));
	        }, {});
	        // This is pretty trippy, but here's what's going on:
	        // - a) We don't pass initial integration options as part of the event, only if they're true or false
	        // - b) We do accept per integration overrides (like integrations.Amplitude.sessionId) at the event level
	        // Hence the need to convert base integration options to booleans, but maintain per event integration overrides
	        var allIntegrations = tslib_1.__assign(tslib_1.__assign({}, integrationBooleans), (_c = event.options) === null || _c === void 0 ? void 0 : _c.integrations);
	        var _d = this.context(event), context = _d[0], overrides = _d[1];
	        event.options; var rest = tslib_1.__rest(event, ["options"]);
	        var newEvent = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ timestamp: new Date() }, rest), { context: context, integrations: allIntegrations }), overrides), { messageId: 'ajs-next-' + spark_md5_1.default.hash(JSON.stringify(event) + (0, uuid_1.v4)()) });
	        (0, page_1.addPageContext)(newEvent, pageCtx);
	        return newEvent;
	    };
	    return EventFactory;
	}());
	exports.EventFactory = EventFactory;
	
} (events));

var eventQueue = {};

var persisted$1 = {};

var priorityQueue = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ON_REMOVE_FROM_FUTURE = exports.PriorityQueue = void 0;
	var analytics_core_1 = require$$5;
	Object.defineProperty(exports, "PriorityQueue", { enumerable: true, get: function () { return analytics_core_1.PriorityQueue; } });
	Object.defineProperty(exports, "ON_REMOVE_FROM_FUTURE", { enumerable: true, get: function () { return analytics_core_1.ON_REMOVE_FROM_FUTURE; } });
	
} (priorityQueue));

Object.defineProperty(persisted$1, "__esModule", { value: true });
persisted$1.PersistedPriorityQueue = void 0;
var tslib_1$9 = require$$0$2;
var _1 = priorityQueue;
var context_1$4 = context;
var environment_1 = requireEnvironment();
var loc = {
    getItem: function () { },
    setItem: function () { },
    removeItem: function () { },
};
try {
    loc = (0, environment_1.isBrowser)() && window.localStorage ? window.localStorage : loc;
}
catch (err) {
    console.warn('Unable to access localStorage', err);
}
function persisted(key) {
    var items = loc.getItem(key);
    return (items ? JSON.parse(items) : []).map(function (p) { return new context_1$4.Context(p.event, p.id); });
}
function persistItems(key, items) {
    var existing = persisted(key);
    var all = tslib_1$9.__spreadArray(tslib_1$9.__spreadArray([], items, true), existing, true);
    var merged = all.reduce(function (acc, item) {
        var _a;
        return tslib_1$9.__assign(tslib_1$9.__assign({}, acc), (_a = {}, _a[item.id] = item, _a));
    }, {});
    loc.setItem(key, JSON.stringify(Object.values(merged)));
}
function seen(key) {
    var stored = loc.getItem(key);
    return stored ? JSON.parse(stored) : {};
}
function persistSeen(key, memory) {
    var stored = seen(key);
    loc.setItem(key, JSON.stringify(tslib_1$9.__assign(tslib_1$9.__assign({}, stored), memory)));
}
function remove(key) {
    loc.removeItem(key);
}
var now = function () { return new Date().getTime(); };
function mutex(key, onUnlock, attempt) {
    if (attempt === void 0) { attempt = 0; }
    var lockTimeout = 50;
    var lockKey = "persisted-queue:v1:".concat(key, ":lock");
    var expired = function (lock) { return new Date().getTime() > lock; };
    var rawLock = loc.getItem(lockKey);
    var lock = rawLock ? JSON.parse(rawLock) : null;
    var allowed = lock === null || expired(lock);
    if (allowed) {
        loc.setItem(lockKey, JSON.stringify(now() + lockTimeout));
        onUnlock();
        loc.removeItem(lockKey);
        return;
    }
    if (!allowed && attempt < 3) {
        setTimeout(function () {
            mutex(key, onUnlock, attempt + 1);
        }, lockTimeout);
    }
    else {
        console.error('Unable to retrieve lock');
    }
}
var PersistedPriorityQueue = /** @class */ (function (_super) {
    tslib_1$9.__extends(PersistedPriorityQueue, _super);
    function PersistedPriorityQueue(maxAttempts, key) {
        var _this = _super.call(this, maxAttempts, []) || this;
        var itemsKey = "persisted-queue:v1:".concat(key, ":items");
        var seenKey = "persisted-queue:v1:".concat(key, ":seen");
        var saved = [];
        var lastSeen = {};
        mutex(key, function () {
            try {
                saved = persisted(itemsKey);
                lastSeen = seen(seenKey);
                remove(itemsKey);
                remove(seenKey);
                _this.queue = tslib_1$9.__spreadArray(tslib_1$9.__spreadArray([], saved, true), _this.queue, true);
                _this.seen = tslib_1$9.__assign(tslib_1$9.__assign({}, lastSeen), _this.seen);
            }
            catch (err) {
                console.error(err);
            }
        });
        window.addEventListener('pagehide', function () {
            // we deliberately want to use the less powerful 'pagehide' API to only persist on events where the analytics instance gets destroyed, and not on tab away.
            if (_this.todo > 0) {
                var items_1 = tslib_1$9.__spreadArray(tslib_1$9.__spreadArray([], _this.queue, true), _this.future, true);
                try {
                    mutex(key, function () {
                        persistItems(itemsKey, items_1);
                        persistSeen(seenKey, _this.seen);
                    });
                }
                catch (err) {
                    console.error(err);
                }
            }
        });
        return _this;
    }
    return PersistedPriorityQueue;
}(_1.PriorityQueue));
persisted$1.PersistedPriorityQueue = PersistedPriorityQueue;

Object.defineProperty(eventQueue, "__esModule", { value: true });
eventQueue.EventQueue = void 0;
var tslib_1$8 = require$$0$2;
var persisted_1$2 = persisted$1;
var analytics_core_1$2 = require$$5;
var connection_1$2 = connection;
var EventQueue = /** @class */ (function (_super) {
    tslib_1$8.__extends(EventQueue, _super);
    function EventQueue(nameOrQueue) {
        return _super.call(this, typeof nameOrQueue === 'string'
            ? new persisted_1$2.PersistedPriorityQueue(4, nameOrQueue)
            : nameOrQueue) || this;
    }
    EventQueue.prototype.flush = function () {
        return tslib_1$8.__awaiter(this, void 0, void 0, function () {
            return tslib_1$8.__generator(this, function (_a) {
                if ((0, connection_1$2.isOffline)())
                    return [2 /*return*/, []];
                return [2 /*return*/, _super.prototype.flush.call(this)];
            });
        });
    };
    return EventQueue;
}(analytics_core_1$2.CoreEventQueue));
eventQueue.EventQueue = EventQueue;

var user = {};

var bindAll = {};

var hasRequiredBindAll;

function requireBindAll () {
	if (hasRequiredBindAll) return bindAll;
	hasRequiredBindAll = 1;
	Object.defineProperty(bindAll, "__esModule", { value: true });
	function bindAll$1(obj) {
	    var proto = obj.constructor.prototype;
	    for (var _i = 0, _a = Object.getOwnPropertyNames(proto); _i < _a.length; _i++) {
	        var key = _a[_i];
	        if (key !== 'constructor') {
	            var desc = Object.getOwnPropertyDescriptor(obj.constructor.prototype, key);
	            if (!!desc && typeof desc.value === 'function') {
	                obj[key] = obj[key].bind(obj);
	            }
	        }
	    }
	    return obj;
	}
	bindAll.default = bindAll$1;
	
	return bindAll;
}

var storage = {};

var cookieStorage = {};

var js_cookie = {exports: {}};

/*! js-cookie v3.0.1 | MIT */

var hasRequiredJs_cookie;

function requireJs_cookie () {
	if (hasRequiredJs_cookie) return js_cookie.exports;
	hasRequiredJs_cookie = 1;
	(function (module, exports) {
		(function (global, factory) {
		  module.exports = factory() ;
		}(commonjsGlobal, (function () {
		  /* eslint-disable no-var */
		  function assign (target) {
		    for (var i = 1; i < arguments.length; i++) {
		      var source = arguments[i];
		      for (var key in source) {
		        target[key] = source[key];
		      }
		    }
		    return target
		  }
		  /* eslint-enable no-var */

		  /* eslint-disable no-var */
		  var defaultConverter = {
		    read: function (value) {
		      if (value[0] === '"') {
		        value = value.slice(1, -1);
		      }
		      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
		    },
		    write: function (value) {
		      return encodeURIComponent(value).replace(
		        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
		        decodeURIComponent
		      )
		    }
		  };
		  /* eslint-enable no-var */

		  /* eslint-disable no-var */

		  function init (converter, defaultAttributes) {
		    function set (key, value, attributes) {
		      if (typeof document === 'undefined') {
		        return
		      }

		      attributes = assign({}, defaultAttributes, attributes);

		      if (typeof attributes.expires === 'number') {
		        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
		      }
		      if (attributes.expires) {
		        attributes.expires = attributes.expires.toUTCString();
		      }

		      key = encodeURIComponent(key)
		        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
		        .replace(/[()]/g, escape);

		      var stringifiedAttributes = '';
		      for (var attributeName in attributes) {
		        if (!attributes[attributeName]) {
		          continue
		        }

		        stringifiedAttributes += '; ' + attributeName;

		        if (attributes[attributeName] === true) {
		          continue
		        }

		        // Considers RFC 6265 section 5.2:
		        // ...
		        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
		        //     character:
		        // Consume the characters of the unparsed-attributes up to,
		        // not including, the first %x3B (";") character.
		        // ...
		        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
		      }

		      return (document.cookie =
		        key + '=' + converter.write(value, key) + stringifiedAttributes)
		    }

		    function get (key) {
		      if (typeof document === 'undefined' || (arguments.length && !key)) {
		        return
		      }

		      // To prevent the for loop in the first place assign an empty array
		      // in case there are no cookies at all.
		      var cookies = document.cookie ? document.cookie.split('; ') : [];
		      var jar = {};
		      for (var i = 0; i < cookies.length; i++) {
		        var parts = cookies[i].split('=');
		        var value = parts.slice(1).join('=');

		        try {
		          var foundKey = decodeURIComponent(parts[0]);
		          jar[foundKey] = converter.read(value, foundKey);

		          if (key === foundKey) {
		            break
		          }
		        } catch (e) {}
		      }

		      return key ? jar[key] : jar
		    }

		    return Object.create(
		      {
		        set: set,
		        get: get,
		        remove: function (key, attributes) {
		          set(
		            key,
		            '',
		            assign({}, attributes, {
		              expires: -1
		            })
		          );
		        },
		        withAttributes: function (attributes) {
		          return init(this.converter, assign({}, this.attributes, attributes))
		        },
		        withConverter: function (converter) {
		          return init(assign({}, this.converter, converter), this.attributes)
		        }
		      },
		      {
		        attributes: { value: Object.freeze(defaultAttributes) },
		        converter: { value: Object.freeze(converter) }
		      }
		    )
		  }

		  var api = init(defaultConverter, { path: '/' });
		  /* eslint-enable no-var */

		  return api;

		}))); 
	} (js_cookie));
	return js_cookie.exports;
}

var tld = {};

var hasRequiredTld;

function requireTld () {
	if (hasRequiredTld) return tld;
	hasRequiredTld = 1;
	Object.defineProperty(tld, "__esModule", { value: true });
	tld.tld = void 0;
	var tslib_1 = require$$0$2;
	var js_cookie_1 = tslib_1.__importDefault(requireJs_cookie());
	/**
	 * Levels returns all levels of the given url.
	 *
	 * @param {string} url
	 * @return {Array}
	 * @api public
	 */
	function levels(url) {
	    var host = url.hostname;
	    var parts = host.split('.');
	    var last = parts[parts.length - 1];
	    var levels = [];
	    // Ip address.
	    if (parts.length === 4 && parseInt(last, 10) > 0) {
	        return levels;
	    }
	    // Localhost.
	    if (parts.length <= 1) {
	        return levels;
	    }
	    // Create levels.
	    for (var i = parts.length - 2; i >= 0; --i) {
	        levels.push(parts.slice(i).join('.'));
	    }
	    return levels;
	}
	function parseUrl(url) {
	    try {
	        return new URL(url);
	    }
	    catch (_a) {
	        return;
	    }
	}
	function tld$1(url) {
	    var parsedUrl = parseUrl(url);
	    if (!parsedUrl)
	        return;
	    var lvls = levels(parsedUrl);
	    // Lookup the real top level one.
	    for (var i = 0; i < lvls.length; ++i) {
	        var cname = '__tld__';
	        var domain = lvls[i];
	        var opts = { domain: '.' + domain };
	        try {
	            // cookie access throw an error if the library is ran inside a sandboxed environment (e.g. sandboxed iframe)
	            js_cookie_1.default.set(cname, '1', opts);
	            if (js_cookie_1.default.get(cname)) {
	                js_cookie_1.default.remove(cname, opts);
	                return domain;
	            }
	        }
	        catch (_) {
	            return;
	        }
	    }
	}
	tld.tld = tld$1;
	
	return tld;
}

var hasRequiredCookieStorage;

function requireCookieStorage () {
	if (hasRequiredCookieStorage) return cookieStorage;
	hasRequiredCookieStorage = 1;
	Object.defineProperty(cookieStorage, "__esModule", { value: true });
	cookieStorage.CookieStorage = void 0;
	var tslib_1 = require$$0$2;
	var js_cookie_1 = tslib_1.__importDefault(requireJs_cookie());
	var tld_1 = requireTld();
	var ONE_YEAR = 365;
	/**
	 * Data storage using browser cookies
	 */
	var CookieStorage = /** @class */ (function () {
	    function CookieStorage(options) {
	        if (options === void 0) { options = CookieStorage.defaults; }
	        this.options = tslib_1.__assign(tslib_1.__assign({}, CookieStorage.defaults), options);
	    }
	    Object.defineProperty(CookieStorage, "defaults", {
	        get: function () {
	            return {
	                maxage: ONE_YEAR,
	                domain: (0, tld_1.tld)(window.location.href),
	                path: '/',
	                sameSite: 'Lax',
	            };
	        },
	        enumerable: false,
	        configurable: true
	    });
	    CookieStorage.prototype.opts = function () {
	        return {
	            sameSite: this.options.sameSite,
	            expires: this.options.maxage,
	            domain: this.options.domain,
	            path: this.options.path,
	            secure: this.options.secure,
	        };
	    };
	    CookieStorage.prototype.get = function (key) {
	        var _a;
	        try {
	            var value = js_cookie_1.default.get(key);
	            if (value === undefined || value === null) {
	                return null;
	            }
	            try {
	                return (_a = JSON.parse(value)) !== null && _a !== void 0 ? _a : null;
	            }
	            catch (e) {
	                return (value !== null && value !== void 0 ? value : null);
	            }
	        }
	        catch (e) {
	            return null;
	        }
	    };
	    CookieStorage.prototype.set = function (key, value) {
	        if (typeof value === 'string') {
	            js_cookie_1.default.set(key, value, this.opts());
	        }
	        else if (value === null) {
	            js_cookie_1.default.remove(key, this.opts());
	        }
	        else {
	            js_cookie_1.default.set(key, JSON.stringify(value), this.opts());
	        }
	    };
	    CookieStorage.prototype.remove = function (key) {
	        return js_cookie_1.default.remove(key, this.opts());
	    };
	    return CookieStorage;
	}());
	cookieStorage.CookieStorage = CookieStorage;
	
	return cookieStorage;
}

var localStorage$1 = {};

var hasRequiredLocalStorage;

function requireLocalStorage () {
	if (hasRequiredLocalStorage) return localStorage$1;
	hasRequiredLocalStorage = 1;
	Object.defineProperty(localStorage$1, "__esModule", { value: true });
	localStorage$1.LocalStorage = void 0;
	/**
	 * Data storage using browser's localStorage
	 */
	var LocalStorage = /** @class */ (function () {
	    function LocalStorage() {
	    }
	    LocalStorage.prototype.localStorageWarning = function (key, state) {
	        console.warn("Unable to access ".concat(key, ", localStorage may be ").concat(state));
	    };
	    LocalStorage.prototype.get = function (key) {
	        var _a;
	        try {
	            var val = localStorage.getItem(key);
	            if (val === null) {
	                return null;
	            }
	            try {
	                return (_a = JSON.parse(val)) !== null && _a !== void 0 ? _a : null;
	            }
	            catch (e) {
	                return (val !== null && val !== void 0 ? val : null);
	            }
	        }
	        catch (err) {
	            this.localStorageWarning(key, 'unavailable');
	            return null;
	        }
	    };
	    LocalStorage.prototype.set = function (key, value) {
	        try {
	            localStorage.setItem(key, JSON.stringify(value));
	        }
	        catch (_a) {
	            this.localStorageWarning(key, 'full');
	        }
	    };
	    LocalStorage.prototype.remove = function (key) {
	        try {
	            return localStorage.removeItem(key);
	        }
	        catch (err) {
	            this.localStorageWarning(key, 'unavailable');
	        }
	    };
	    return LocalStorage;
	}());
	localStorage$1.LocalStorage = LocalStorage;
	
	return localStorage$1;
}

var memoryStorage = {};

var hasRequiredMemoryStorage;

function requireMemoryStorage () {
	if (hasRequiredMemoryStorage) return memoryStorage;
	hasRequiredMemoryStorage = 1;
	Object.defineProperty(memoryStorage, "__esModule", { value: true });
	memoryStorage.MemoryStorage = void 0;
	/**
	 * Data Storage using in memory object
	 */
	var MemoryStorage = /** @class */ (function () {
	    function MemoryStorage() {
	        this.cache = {};
	    }
	    MemoryStorage.prototype.get = function (key) {
	        var _a;
	        return ((_a = this.cache[key]) !== null && _a !== void 0 ? _a : null);
	    };
	    MemoryStorage.prototype.set = function (key, value) {
	        this.cache[key] = value;
	    };
	    MemoryStorage.prototype.remove = function (key) {
	        delete this.cache[key];
	    };
	    return MemoryStorage;
	}());
	memoryStorage.MemoryStorage = MemoryStorage;
	
	return memoryStorage;
}

var settings = {};

var types = {};

var hasRequiredTypes;

function requireTypes () {
	if (hasRequiredTypes) return types;
	hasRequiredTypes = 1;
	Object.defineProperty(types, "__esModule", { value: true });
	types.StoreType = void 0;
	types.StoreType = {
	    Cookie: 'cookie',
	    LocalStorage: 'localStorage',
	    Memory: 'memory',
	};
	
	return types;
}

var hasRequiredSettings;

function requireSettings () {
	if (hasRequiredSettings) return settings;
	hasRequiredSettings = 1;
	Object.defineProperty(settings, "__esModule", { value: true });
	settings.isStoreTypeWithSettings = settings.isArrayOfStoreType = void 0;
	var types_1 = requireTypes();
	function isArrayOfStoreType(s) {
	    return (s &&
	        s.stores &&
	        Array.isArray(s.stores) &&
	        s.stores.every(function (e) { return Object.values(types_1.StoreType).includes(e); }));
	}
	settings.isArrayOfStoreType = isArrayOfStoreType;
	function isStoreTypeWithSettings(s) {
	    return typeof s === 'object' && s.name !== undefined;
	}
	settings.isStoreTypeWithSettings = isStoreTypeWithSettings;
	
	return settings;
}

var universalStorage = {};

var hasRequiredUniversalStorage;

function requireUniversalStorage () {
	if (hasRequiredUniversalStorage) return universalStorage;
	hasRequiredUniversalStorage = 1;
	Object.defineProperty(universalStorage, "__esModule", { value: true });
	universalStorage.UniversalStorage = void 0;
	// not adding to private method because those method names do not get minified atm, and does not use 'this'
	var _logStoreKeyError = function (store, action, key, err) {
	    console.warn("".concat(store.constructor.name, ": Can't ").concat(action, " key \"").concat(key, "\" | Err: ").concat(err));
	};
	/**
	 * Uses multiple storages in a priority list to get/set values in the order they are specified.
	 */
	var UniversalStorage = /** @class */ (function () {
	    function UniversalStorage(stores) {
	        this.stores = stores;
	    }
	    UniversalStorage.prototype.get = function (key) {
	        var val = null;
	        for (var _i = 0, _a = this.stores; _i < _a.length; _i++) {
	            var store = _a[_i];
	            try {
	                val = store.get(key);
	                if (val !== undefined && val !== null) {
	                    return val;
	                }
	            }
	            catch (e) {
	                _logStoreKeyError(store, 'get', key, e);
	            }
	        }
	        return null;
	    };
	    UniversalStorage.prototype.set = function (key, value) {
	        this.stores.forEach(function (store) {
	            try {
	                store.set(key, value);
	            }
	            catch (e) {
	                _logStoreKeyError(store, 'set', key, e);
	            }
	        });
	    };
	    UniversalStorage.prototype.clear = function (key) {
	        this.stores.forEach(function (store) {
	            try {
	                store.remove(key);
	            }
	            catch (e) {
	                _logStoreKeyError(store, 'remove', key, e);
	            }
	        });
	    };
	    /*
	      This is to support few scenarios where:
	      - value exist in one of the stores ( as a result of other stores being cleared from browser ) and we want to resync them
	      - read values in AJS 1.0 format ( for customers after 1.0 --> 2.0 migration ) and then re-write them in AJS 2.0 format
	    */
	    UniversalStorage.prototype.getAndSync = function (key) {
	        var val = this.get(key);
	        // legacy behavior, getAndSync can change the type of a value from number to string (AJS 1.0 stores numerical values as a number)
	        var coercedValue = (typeof val === 'number' ? val.toString() : val);
	        this.set(key, coercedValue);
	        return coercedValue;
	    };
	    return UniversalStorage;
	}());
	universalStorage.UniversalStorage = UniversalStorage;
	
	return universalStorage;
}

var hasRequiredStorage;

function requireStorage () {
	if (hasRequiredStorage) return storage;
	hasRequiredStorage = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.applyCookieOptions = exports.initializeStorages = void 0;
		var tslib_1 = require$$0$2;
		var cookieStorage_1 = requireCookieStorage();
		var localStorage_1 = requireLocalStorage();
		var memoryStorage_1 = requireMemoryStorage();
		var settings_1 = requireSettings();
		var types_1 = requireTypes();
		tslib_1.__exportStar(requireTypes(), exports);
		tslib_1.__exportStar(requireLocalStorage(), exports);
		tslib_1.__exportStar(requireCookieStorage(), exports);
		tslib_1.__exportStar(requireMemoryStorage(), exports);
		tslib_1.__exportStar(requireUniversalStorage(), exports);
		tslib_1.__exportStar(requireSettings(), exports);
		/**
		 * Creates multiple storage systems from an array of StoreType and options
		 * @param args StoreType and options
		 * @returns Storage array
		 */
		function initializeStorages(args) {
		    var storages = args.map(function (s) {
		        var type;
		        var settings;
		        if ((0, settings_1.isStoreTypeWithSettings)(s)) {
		            type = s.name;
		            settings = s.settings;
		        }
		        else {
		            type = s;
		        }
		        switch (type) {
		            case types_1.StoreType.Cookie:
		                return new cookieStorage_1.CookieStorage(settings);
		            case types_1.StoreType.LocalStorage:
		                return new localStorage_1.LocalStorage();
		            case types_1.StoreType.Memory:
		                return new memoryStorage_1.MemoryStorage();
		            default:
		                throw new Error("Unknown Store Type: ".concat(s));
		        }
		    });
		    return storages;
		}
		exports.initializeStorages = initializeStorages;
		/**
		 * Injects the CookieOptions into a the arguments for initializeStorage
		 * @param storeTypes list of storeType
		 * @param cookieOptions cookie Options
		 * @returns arguments for initializeStorage
		 */
		function applyCookieOptions(storeTypes, cookieOptions) {
		    return storeTypes.map(function (s) {
		        if (cookieOptions && s === types_1.StoreType.Cookie) {
		            return {
		                name: s,
		                settings: cookieOptions,
		            };
		        }
		        return s;
		    });
		}
		exports.applyCookieOptions = applyCookieOptions;
		
	} (storage));
	return storage;
}

Object.defineProperty(user, "__esModule", { value: true });
user.Group = user.User = void 0;
var tslib_1$7 = require$$0$2;
var uuid_1 = dist$3;
var bind_all_1$1 = tslib_1$7.__importDefault(requireBindAll());
var storage_1$2 = requireStorage();
var defaults = {
    persist: true,
    cookie: {
        key: 'ajs_user_id',
        oldKey: 'ajs_user',
    },
    localStorage: {
        key: 'ajs_user_traits',
    },
};
var User = /** @class */ (function () {
    function User(options, cookieOptions) {
        if (options === void 0) { options = defaults; }
        var _this = this;
        var _a, _b, _c, _d;
        this.options = {};
        this.id = function (id) {
            if (_this.options.disable) {
                return null;
            }
            var prevId = _this.identityStore.getAndSync(_this.idKey);
            if (id !== undefined) {
                _this.identityStore.set(_this.idKey, id);
                var changingIdentity = id !== prevId && prevId !== null && id !== null;
                if (changingIdentity) {
                    _this.anonymousId(null);
                }
            }
            var retId = _this.identityStore.getAndSync(_this.idKey);
            if (retId)
                return retId;
            var retLeg = _this.legacyUserStore.get(defaults.cookie.oldKey);
            return retLeg ? (typeof retLeg === 'object' ? retLeg.id : retLeg) : null;
        };
        this.anonymousId = function (id) {
            var _a, _b;
            if (_this.options.disable) {
                return null;
            }
            if (id === undefined) {
                var val = (_a = _this.identityStore.getAndSync(_this.anonKey)) !== null && _a !== void 0 ? _a : (_b = _this.legacySIO()) === null || _b === void 0 ? void 0 : _b[0];
                if (val) {
                    return val;
                }
            }
            if (id === null) {
                _this.identityStore.set(_this.anonKey, null);
                return _this.identityStore.getAndSync(_this.anonKey);
            }
            _this.identityStore.set(_this.anonKey, id !== null && id !== void 0 ? id : (0, uuid_1.v4)());
            return _this.identityStore.getAndSync(_this.anonKey);
        };
        this.traits = function (traits) {
            var _a;
            if (_this.options.disable) {
                return;
            }
            if (traits === null) {
                traits = {};
            }
            if (traits) {
                _this.traitsStore.set(_this.traitsKey, traits !== null && traits !== void 0 ? traits : {});
            }
            return (_a = _this.traitsStore.get(_this.traitsKey)) !== null && _a !== void 0 ? _a : {};
        };
        this.options = tslib_1$7.__assign(tslib_1$7.__assign({}, defaults), options);
        this.cookieOptions = cookieOptions;
        this.idKey = (_b = (_a = options.cookie) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : defaults.cookie.key;
        this.traitsKey = (_d = (_c = options.localStorage) === null || _c === void 0 ? void 0 : _c.key) !== null && _d !== void 0 ? _d : defaults.localStorage.key;
        this.anonKey = 'ajs_anonymous_id';
        this.identityStore = this.createStorage(this.options, cookieOptions);
        // using only cookies for legacy user store
        this.legacyUserStore = this.createStorage(this.options, cookieOptions, function (s) { return s === storage_1$2.StoreType.Cookie; });
        // using only localStorage / memory for traits store
        this.traitsStore = this.createStorage(this.options, cookieOptions, function (s) { return s !== storage_1$2.StoreType.Cookie; });
        var legacyUser = this.legacyUserStore.get(defaults.cookie.oldKey);
        if (legacyUser && typeof legacyUser === 'object') {
            legacyUser.id && this.id(legacyUser.id);
            legacyUser.traits && this.traits(legacyUser.traits);
        }
        (0, bind_all_1$1.default)(this);
    }
    User.prototype.legacySIO = function () {
        var val = this.legacyUserStore.get('_sio');
        if (!val) {
            return null;
        }
        var _a = val.split('----'), anon = _a[0], user = _a[1];
        return [anon, user];
    };
    User.prototype.identify = function (id, traits) {
        if (this.options.disable) {
            return;
        }
        traits = traits !== null && traits !== void 0 ? traits : {};
        var currentId = this.id();
        if (currentId === null || currentId === id) {
            traits = tslib_1$7.__assign(tslib_1$7.__assign({}, this.traits()), traits);
        }
        if (id) {
            this.id(id);
        }
        this.traits(traits);
    };
    User.prototype.logout = function () {
        this.anonymousId(null);
        this.id(null);
        this.traits({});
    };
    User.prototype.reset = function () {
        this.logout();
        this.identityStore.clear(this.idKey);
        this.identityStore.clear(this.anonKey);
        this.traitsStore.clear(this.traitsKey);
    };
    User.prototype.load = function () {
        return new User(this.options, this.cookieOptions);
    };
    User.prototype.save = function () {
        return true;
    };
    /**
     * Creates the right storage system applying all the user options, cookie options and particular filters
     * @param options UserOptions
     * @param cookieOpts CookieOptions
     * @param filterStores filter function to apply to any StoreTypes (skipped if options specify using a custom storage)
     * @returns a Storage object
     */
    User.prototype.createStorage = function (options, cookieOpts, filterStores) {
        var stores = [
            storage_1$2.StoreType.LocalStorage,
            storage_1$2.StoreType.Cookie,
            storage_1$2.StoreType.Memory,
        ];
        // If disabled we won't have any storage functionality
        if (options.disable) {
            return new storage_1$2.UniversalStorage([]);
        }
        // If persistance is disabled we will always fallback to Memory Storage
        if (!options.persist) {
            return new storage_1$2.UniversalStorage([new storage_1$2.MemoryStorage()]);
        }
        if (options.storage !== undefined && options.storage !== null) {
            if ((0, storage_1$2.isArrayOfStoreType)(options.storage)) {
                // If the user only specified order of stores we will still apply filters and transformations e.g. not using localStorage if localStorageFallbackDisabled
                stores = options.storage.stores;
            }
        }
        // Disable LocalStorage
        if (options.localStorageFallbackDisabled) {
            stores = stores.filter(function (s) { return s !== storage_1$2.StoreType.LocalStorage; });
        }
        // Apply Additional filters
        if (filterStores) {
            stores = stores.filter(filterStores);
        }
        return new storage_1$2.UniversalStorage((0, storage_1$2.initializeStorages)((0, storage_1$2.applyCookieOptions)(stores, cookieOpts)));
    };
    User.defaults = defaults;
    return User;
}());
user.User = User;
var groupDefaults = {
    persist: true,
    cookie: {
        key: 'ajs_group_id',
    },
    localStorage: {
        key: 'ajs_group_properties',
    },
};
var Group = /** @class */ (function (_super) {
    tslib_1$7.__extends(Group, _super);
    function Group(options, cookie) {
        if (options === void 0) { options = groupDefaults; }
        var _this = _super.call(this, tslib_1$7.__assign(tslib_1$7.__assign({}, groupDefaults), options), cookie) || this;
        _this.anonymousId = function (_id) {
            return undefined;
        };
        (0, bind_all_1$1.default)(_this);
        return _this;
    }
    return Group;
}(User));
user.Group = Group;

var buffer = {};

var isThenable$1 = {};

Object.defineProperty(isThenable$1, "__esModule", { value: true });
isThenable$1.isThenable = void 0;
/**
 *  Check if  thenable
 *  (instanceof Promise doesn't respect realms)
 */
var isThenable = function (value) {
    return typeof value === 'object' &&
        value !== null &&
        'then' in value &&
        typeof value.then === 'function';
};
isThenable$1.isThenable = isThenable;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AnalyticsBuffered = exports.callAnalyticsMethod = exports.PreInitMethodCallBuffer = exports.PreInitMethodCall = exports.hasBufferedPageContextAsLastArg = exports.popPageContext = exports.flushAnalyticsCallsInNewTask = exports.flushSetAnonymousID = exports.flushOn = exports.flushAddSourceMiddleware = void 0;
	var tslib_1 = require$$0$2;
	var is_thenable_1 = isThenable$1;
	var version_1 = version;
	var global_analytics_helper_1 = globalAnalyticsHelper;
	var page_1 = page$1;
	var flushSyncAnalyticsCalls = function (name, analytics, buffer) {
	    buffer.getCalls(name).forEach(function (c) {
	        // While the underlying methods are synchronous, the callAnalyticsMethod returns a promise,
	        // which normalizes success and error states between async and non-async methods, with no perf penalty.
	        callAnalyticsMethod(analytics, c).catch(console.error);
	    });
	};
	var flushAddSourceMiddleware = function (analytics, buffer) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var _i, _a, c;
	    return tslib_1.__generator(this, function (_b) {
	        switch (_b.label) {
	            case 0:
	                _i = 0, _a = buffer.getCalls('addSourceMiddleware');
	                _b.label = 1;
	            case 1:
	                if (!(_i < _a.length)) return [3 /*break*/, 4];
	                c = _a[_i];
	                return [4 /*yield*/, callAnalyticsMethod(analytics, c).catch(console.error)];
	            case 2:
	                _b.sent();
	                _b.label = 3;
	            case 3:
	                _i++;
	                return [3 /*break*/, 1];
	            case 4: return [2 /*return*/];
	        }
	    });
	}); };
	exports.flushAddSourceMiddleware = flushAddSourceMiddleware;
	exports.flushOn = flushSyncAnalyticsCalls.bind(commonjsGlobal, 'on');
	exports.flushSetAnonymousID = flushSyncAnalyticsCalls.bind(commonjsGlobal, 'setAnonymousId');
	var flushAnalyticsCallsInNewTask = function (analytics, buffer) {
	    buffer.toArray().forEach(function (m) {
	        setTimeout(function () {
	            callAnalyticsMethod(analytics, m).catch(console.error);
	        }, 0);
	    });
	};
	exports.flushAnalyticsCallsInNewTask = flushAnalyticsCallsInNewTask;
	var popPageContext = function (args) {
	    if ((0, exports.hasBufferedPageContextAsLastArg)(args)) {
	        var ctx = args.pop();
	        return (0, page_1.createPageContext)(ctx);
	    }
	};
	exports.popPageContext = popPageContext;
	var hasBufferedPageContextAsLastArg = function (args) {
	    var lastArg = args[args.length - 1];
	    return (0, page_1.isBufferedPageContext)(lastArg);
	};
	exports.hasBufferedPageContextAsLastArg = hasBufferedPageContextAsLastArg;
	/**
	 *  Represents a buffered method call that occurred before initialization.
	 */
	var PreInitMethodCall = /** @class */ (function () {
	    function PreInitMethodCall(method, args, resolve, reject) {
	        if (resolve === void 0) { resolve = function () { }; }
	        if (reject === void 0) { reject = console.error; }
	        this.method = method;
	        this.resolve = resolve;
	        this.reject = reject;
	        this.called = false;
	        this.args = args;
	    }
	    return PreInitMethodCall;
	}());
	exports.PreInitMethodCall = PreInitMethodCall;
	/**
	 *  Represents any and all the buffered method calls that occurred before initialization.
	 */
	var PreInitMethodCallBuffer = /** @class */ (function () {
	    function PreInitMethodCallBuffer() {
	        var calls = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            calls[_i] = arguments[_i];
	        }
	        this._callMap = {};
	        this.push.apply(this, calls);
	    }
	    Object.defineProperty(PreInitMethodCallBuffer.prototype, "calls", {
	        /**
	         * Pull any buffered method calls from the window object, and use them to hydrate the instance buffer.
	         */
	        get: function () {
	            this._pushSnippetWindowBuffer();
	            return this._callMap;
	        },
	        set: function (calls) {
	            this._callMap = calls;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    PreInitMethodCallBuffer.prototype.getCalls = function (methodName) {
	        var _a;
	        return ((_a = this.calls[methodName]) !== null && _a !== void 0 ? _a : []);
	    };
	    PreInitMethodCallBuffer.prototype.push = function () {
	        var _this = this;
	        var calls = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            calls[_i] = arguments[_i];
	        }
	        calls.forEach(function (call) {
	            var eventsExpectingPageContext = [
	                'track',
	                'screen',
	                'alias',
	                'group',
	                'page',
	                'identify',
	            ];
	            if (eventsExpectingPageContext.includes(call.method) &&
	                !(0, exports.hasBufferedPageContextAsLastArg)(call.args)) {
	                call.args = tslib_1.__spreadArray(tslib_1.__spreadArray([], call.args, true), [(0, page_1.getDefaultBufferedPageContext)()], false);
	            }
	            if (_this.calls[call.method]) {
	                _this.calls[call.method].push(call);
	            }
	            else {
	                _this.calls[call.method] = [call];
	            }
	        });
	    };
	    PreInitMethodCallBuffer.prototype.clear = function () {
	        // clear calls in the global snippet buffered array.
	        this._pushSnippetWindowBuffer();
	        // clear calls in this instance
	        this.calls = {};
	    };
	    PreInitMethodCallBuffer.prototype.toArray = function () {
	        var _a;
	        return (_a = []).concat.apply(_a, Object.values(this.calls));
	    };
	    /**
	     * Fetch the buffered method calls from the window object,
	     * normalize them, and use them to hydrate the buffer.
	     * This removes existing buffered calls from the window object.
	     */
	    PreInitMethodCallBuffer.prototype._pushSnippetWindowBuffer = function () {
	        var wa = (0, global_analytics_helper_1.getGlobalAnalytics)();
	        if (!Array.isArray(wa))
	            return undefined;
	        var buffered = wa.splice(0, wa.length);
	        var calls = buffered.map(function (_a) {
	            var methodName = _a[0], args = _a.slice(1);
	            return new PreInitMethodCall(methodName, args);
	        });
	        this.push.apply(this, calls);
	    };
	    return PreInitMethodCallBuffer;
	}());
	exports.PreInitMethodCallBuffer = PreInitMethodCallBuffer;
	/**
	 *  Call method and mark as "called"
	 *  This function should never throw an error
	 */
	function callAnalyticsMethod(analytics, call) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var result, err_1;
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    _a.trys.push([0, 3, , 4]);
	                    if (call.called) {
	                        return [2 /*return*/, undefined];
	                    }
	                    call.called = true;
	                    result = analytics[call.method].apply(analytics, call.args);
	                    if (!(0, is_thenable_1.isThenable)(result)) return [3 /*break*/, 2];
	                    // do not defer for non-async methods
	                    return [4 /*yield*/, result];
	                case 1:
	                    // do not defer for non-async methods
	                    _a.sent();
	                    _a.label = 2;
	                case 2:
	                    call.resolve(result);
	                    return [3 /*break*/, 4];
	                case 3:
	                    err_1 = _a.sent();
	                    call.reject(err_1);
	                    return [3 /*break*/, 4];
	                case 4: return [2 /*return*/];
	            }
	        });
	    });
	}
	exports.callAnalyticsMethod = callAnalyticsMethod;
	var AnalyticsBuffered = /** @class */ (function () {
	    function AnalyticsBuffered(loader) {
	        var _this = this;
	        this.trackSubmit = this._createMethod('trackSubmit');
	        this.trackClick = this._createMethod('trackClick');
	        this.trackLink = this._createMethod('trackLink');
	        this.pageView = this._createMethod('pageview');
	        this.identify = this._createMethod('identify');
	        this.reset = this._createMethod('reset');
	        this.group = this._createMethod('group');
	        this.track = this._createMethod('track');
	        this.ready = this._createMethod('ready');
	        this.alias = this._createMethod('alias');
	        this.debug = this._createChainableMethod('debug');
	        this.page = this._createMethod('page');
	        this.once = this._createChainableMethod('once');
	        this.off = this._createChainableMethod('off');
	        this.on = this._createChainableMethod('on');
	        this.addSourceMiddleware = this._createMethod('addSourceMiddleware');
	        this.setAnonymousId = this._createMethod('setAnonymousId');
	        this.addDestinationMiddleware = this._createMethod('addDestinationMiddleware');
	        this.screen = this._createMethod('screen');
	        this.register = this._createMethod('register');
	        this.deregister = this._createMethod('deregister');
	        this.user = this._createMethod('user');
	        this.VERSION = version_1.version;
	        this._preInitBuffer = new PreInitMethodCallBuffer();
	        this._promise = loader(this._preInitBuffer);
	        this._promise
	            .then(function (_a) {
	            var ajs = _a[0], ctx = _a[1];
	            _this.instance = ajs;
	            _this.ctx = ctx;
	        })
	            .catch(function () {
	            // intentionally do nothing...
	            // this result of this promise will be caught by the 'catch' block on this class.
	        });
	    }
	    AnalyticsBuffered.prototype.then = function () {
	        var _a;
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return (_a = this._promise).then.apply(_a, args);
	    };
	    AnalyticsBuffered.prototype.catch = function () {
	        var _a;
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return (_a = this._promise).catch.apply(_a, args);
	    };
	    AnalyticsBuffered.prototype.finally = function () {
	        var _a;
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return (_a = this._promise).finally.apply(_a, args);
	    };
	    AnalyticsBuffered.prototype._createMethod = function (methodName) {
	        var _this = this;
	        return function () {
	            var _a;
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            if (_this.instance) {
	                var result = (_a = _this.instance)[methodName].apply(_a, args);
	                return Promise.resolve(result);
	            }
	            return new Promise(function (resolve, reject) {
	                _this._preInitBuffer.push(new PreInitMethodCall(methodName, args, resolve, reject));
	            });
	        };
	    };
	    /**
	     *  These are for methods that where determining when the method gets "flushed" is not important.
	     *  These methods will resolve when analytics is fully initialized, and return type (other than Analytics)will not be available.
	     */
	    AnalyticsBuffered.prototype._createChainableMethod = function (methodName) {
	        var _this = this;
	        return function () {
	            var _a;
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            if (_this.instance) {
	                void (_a = _this.instance)[methodName].apply(_a, args);
	                return _this;
	            }
	            else {
	                _this._preInitBuffer.push(new PreInitMethodCall(methodName, args));
	            }
	            return _this;
	        };
	    };
	    return AnalyticsBuffered;
	}());
	exports.AnalyticsBuffered = AnalyticsBuffered;
	
} (buffer));

var autoTrack = {};

var callback = {};

var hasRequiredCallback;

function requireCallback () {
	if (hasRequiredCallback) return callback;
	hasRequiredCallback = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.pTimeout = exports.invokeCallback = void 0;
		var analytics_core_1 = require$$5;
		Object.defineProperty(exports, "invokeCallback", { enumerable: true, get: function () { return analytics_core_1.invokeCallback; } });
		Object.defineProperty(exports, "pTimeout", { enumerable: true, get: function () { return analytics_core_1.pTimeout; } });
		
	} (callback));
	return callback;
}

var hasRequiredAutoTrack;

function requireAutoTrack () {
	if (hasRequiredAutoTrack) return autoTrack;
	hasRequiredAutoTrack = 1;
	Object.defineProperty(autoTrack, "__esModule", { value: true });
	autoTrack.form = autoTrack.link = void 0;
	var callback_1 = requireCallback();
	// Check if a user is opening the link in a new tab
	function userNewTab(event) {
	    var typedEvent = event;
	    if (typedEvent.ctrlKey ||
	        typedEvent.shiftKey ||
	        typedEvent.metaKey ||
	        (typedEvent.button && typedEvent.button == 1)) {
	        return true;
	    }
	    return false;
	}
	// Check if the link opens in new tab
	function linkNewTab(element, href) {
	    if (element.target === '_blank' && href) {
	        return true;
	    }
	    return false;
	}
	function link(links, event, properties, options) {
	    var _this = this;
	    var elements = [];
	    // always arrays, handles jquery
	    if (!links) {
	        return this;
	    }
	    if (links instanceof Element) {
	        elements = [links];
	    }
	    else if ('toArray' in links) {
	        elements = links.toArray();
	    }
	    else {
	        elements = links;
	    }
	    elements.forEach(function (el) {
	        el.addEventListener('click', function (elementEvent) {
	            var _a, _b;
	            var ev = event instanceof Function ? event(el) : event;
	            var props = properties instanceof Function ? properties(el) : properties;
	            var href = el.getAttribute('href') ||
	                el.getAttributeNS('http://www.w3.org/1999/xlink', 'href') ||
	                el.getAttribute('xlink:href') ||
	                ((_a = el.getElementsByTagName('a')[0]) === null || _a === void 0 ? void 0 : _a.getAttribute('href'));
	            var trackEvent = (0, callback_1.pTimeout)(_this.track(ev, props, options !== null && options !== void 0 ? options : {}), (_b = _this.settings.timeout) !== null && _b !== void 0 ? _b : 500);
	            if (!linkNewTab(el, href) &&
	                !userNewTab(elementEvent)) {
	                if (href) {
	                    elementEvent.preventDefault
	                        ? elementEvent.preventDefault()
	                        : (elementEvent.returnValue = false);
	                    trackEvent
	                        .catch(console.error)
	                        .then(function () {
	                        window.location.href = href;
	                    })
	                        .catch(console.error);
	                }
	            }
	        }, false);
	    });
	    return this;
	}
	autoTrack.link = link;
	function form(forms, event, properties, options) {
	    var _this = this;
	    // always arrays, handles jquery
	    if (!forms)
	        return this;
	    if (forms instanceof HTMLFormElement)
	        forms = [forms];
	    var elements = forms;
	    elements.forEach(function (el) {
	        if (!(el instanceof Element))
	            throw new TypeError('Must pass HTMLElement to trackForm/trackSubmit.');
	        var handler = function (elementEvent) {
	            var _a;
	            elementEvent.preventDefault
	                ? elementEvent.preventDefault()
	                : (elementEvent.returnValue = false);
	            var ev = event instanceof Function ? event(el) : event;
	            var props = properties instanceof Function ? properties(el) : properties;
	            var trackEvent = (0, callback_1.pTimeout)(_this.track(ev, props, options !== null && options !== void 0 ? options : {}), (_a = _this.settings.timeout) !== null && _a !== void 0 ? _a : 500);
	            trackEvent
	                .catch(console.error)
	                .then(function () {
	                el.submit();
	            })
	                .catch(console.error);
	        };
	        // Support the events happening through jQuery or Zepto instead of through
	        // the normal DOM API, because `el.submit` doesn't bubble up events...
	        var $ = window.jQuery || window.Zepto;
	        if ($) {
	            $(el).submit(handler);
	        }
	        else {
	            // eslint-disable-next-line @typescript-eslint/no-misused-promises
	            el.addEventListener('submit', handler, false);
	        }
	    });
	    return this;
	}
	autoTrack.form = form;
	
	return autoTrack;
}

var middleware = {};

var toFacade$1 = {};

var dist$1 = {};

var facade = {};

var address = {};

var objCase = {exports: {}};

var hasRequiredObjCase;

function requireObjCase () {
	if (hasRequiredObjCase) return objCase.exports;
	hasRequiredObjCase = 1;
	(function (module) {


		/**
		 * Module exports, export
		 */

		module.exports = multiple(find);
		module.exports.find = module.exports;


		/**
		 * Export the replacement function, return the modified object
		 */

		module.exports.replace = function (obj, key, val, options) {
		  multiple(replace).call(this, obj, key, val, options);
		  return obj;
		};


		/**
		 * Export the delete function, return the modified object
		 */

		module.exports.del = function (obj, key, options) {
		  multiple(del).call(this, obj, key, null, options);
		  return obj;
		};


		/**
		 * Compose applying the function to a nested key
		 */

		function multiple (fn) {
		  return function (obj, path, val, options) {
		    var normalize = options && isFunction(options.normalizer) ? options.normalizer : defaultNormalize;
		    path = normalize(path);

		    var key;
		    var finished = false;

		    while (!finished) loop();

		    function loop() {
		      for (key in obj) {
		        var normalizedKey = normalize(key);
		        if (0 === path.indexOf(normalizedKey)) {
		          var temp = path.substr(normalizedKey.length);
		          if (temp.charAt(0) === '.' || temp.length === 0) {
		            path = temp.substr(1);
		            var child = obj[key];

		            // we're at the end and there is nothing.
		            if (null == child) {
		              finished = true;
		              return;
		            }

		            // we're at the end and there is something.
		            if (!path.length) {
		              finished = true;
		              return;
		            }

		            // step into child
		            obj = child;

		            // but we're done here
		            return;
		          }
		        }
		      }

		      key = undefined;
		      // if we found no matching properties
		      // on the current object, there's no match.
		      finished = true;
		    }

		    if (!key) return;
		    if (null == obj) return obj;

		    // the `obj` and `key` is one above the leaf object and key, so
		    // start object: { a: { 'b.c': 10 } }
		    // end object: { 'b.c': 10 }
		    // end key: 'b.c'
		    // this way, you can do `obj[key]` and get `10`.
		    return fn(obj, key, val);
		  };
		}


		/**
		 * Find an object by its key
		 *
		 * find({ first_name : 'Calvin' }, 'firstName')
		 */

		function find (obj, key) {
		  if (obj.hasOwnProperty(key)) return obj[key];
		}


		/**
		 * Delete a value for a given key
		 *
		 * del({ a : 'b', x : 'y' }, 'X' }) -> { a : 'b' }
		 */

		function del (obj, key) {
		  if (obj.hasOwnProperty(key)) delete obj[key];
		  return obj;
		}


		/**
		 * Replace an objects existing value with a new one
		 *
		 * replace({ a : 'b' }, 'a', 'c') -> { a : 'c' }
		 */

		function replace (obj, key, val) {
		  if (obj.hasOwnProperty(key)) obj[key] = val;
		  return obj;
		}

		/**
		 * Normalize a `dot.separated.path`.
		 *
		 * A.HELL(!*&#(!)O_WOR   LD.bar => ahelloworldbar
		 *
		 * @param {String} path
		 * @return {String}
		 */

		function defaultNormalize(path) {
		  return path.replace(/[^a-zA-Z0-9\.]+/g, '').toLowerCase();
		}

		/**
		 * Check if a value is a function.
		 *
		 * @param {*} val
		 * @return {boolean} Returns `true` if `val` is a function, otherwise `false`.
		 */

		function isFunction(val) {
		  return typeof val === 'function';
		} 
	} (objCase));
	return objCase.exports;
}

var hasRequiredAddress;

function requireAddress () {
	if (hasRequiredAddress) return address;
	hasRequiredAddress = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(address, "__esModule", { value: true });
	var obj_case_1 = __importDefault(requireObjCase());
	function trait(a, b) {
	    return function () {
	        var traits = this.traits();
	        var props = this.properties ? this.properties() : {};
	        return (obj_case_1.default(traits, "address." + a) ||
	            obj_case_1.default(traits, a) ||
	            (b ? obj_case_1.default(traits, "address." + b) : null) ||
	            (b ? obj_case_1.default(traits, b) : null) ||
	            obj_case_1.default(props, "address." + a) ||
	            obj_case_1.default(props, a) ||
	            (b ? obj_case_1.default(props, "address." + b) : null) ||
	            (b ? obj_case_1.default(props, b) : null));
	    };
	}
	function default_1(proto) {
	    proto.zip = trait("postalCode", "zip");
	    proto.country = trait("country");
	    proto.street = trait("street");
	    proto.state = trait("state");
	    proto.city = trait("city");
	    proto.region = trait("region");
	}
	address.default = default_1;
	
	return address;
}

var clone = {};

var hasRequiredClone;

function requireClone () {
	if (hasRequiredClone) return clone;
	hasRequiredClone = 1;
	Object.defineProperty(clone, "__esModule", { value: true });
	clone.clone = void 0;
	function clone$1(properties) {
	    if (typeof properties !== 'object')
	        return properties;
	    if (Object.prototype.toString.call(properties) === '[object Object]') {
	        var temp = {};
	        for (var key in properties) {
	            if (Object.prototype.hasOwnProperty.call(properties, key)) {
	                temp[key] = clone$1(properties[key]);
	            }
	        }
	        return temp;
	    }
	    else if (Array.isArray(properties)) {
	        return properties.map(clone$1);
	    }
	    else {
	        return properties;
	    }
	}
	clone.clone = clone$1;
	
	return clone;
}

var isEnabled = {};

var hasRequiredIsEnabled;

function requireIsEnabled () {
	if (hasRequiredIsEnabled) return isEnabled;
	hasRequiredIsEnabled = 1;
	Object.defineProperty(isEnabled, "__esModule", { value: true });
	var disabled = {
	    Salesforce: true,
	};
	function default_1(integration) {
	    return !disabled[integration];
	}
	isEnabled.default = default_1;
	
	return isEnabled;
}

var lib$J = {};

var hasRequiredLib$J;

function requireLib$J () {
	if (hasRequiredLib$J) return lib$J;
	hasRequiredLib$J = 1;

	/**
	 * Matcher, slightly modified from:
	 *
	 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
	 */

	var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;

	/**
	 * Convert an ISO date string to a date. Fallback to native `Date.parse`.
	 *
	 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
	 *
	 * @param {String} iso
	 * @return {Date}
	 */

	lib$J.parse = function(iso) {
	  var numericKeys = [1, 5, 6, 7, 11, 12];
	  var arr = matcher.exec(iso);
	  var offset = 0;

	  // fallback to native parsing
	  if (!arr) {
	    return new Date(iso);
	  }

	  /* eslint-disable no-cond-assign */
	  // remove undefined values
	  for (var i = 0, val; val = numericKeys[i]; i++) {
	    arr[val] = parseInt(arr[val], 10) || 0;
	  }
	  /* eslint-enable no-cond-assign */

	  // allow undefined days and months
	  arr[2] = parseInt(arr[2], 10) || 1;
	  arr[3] = parseInt(arr[3], 10) || 1;

	  // month is 0-11
	  arr[2]--;

	  // allow abitrary sub-second precision
	  arr[8] = arr[8] ? (arr[8] + '00').substring(0, 3) : 0;

	  // apply timezone if one exists
	  if (arr[4] === ' ') {
	    offset = new Date().getTimezoneOffset();
	  } else if (arr[9] !== 'Z' && arr[10]) {
	    offset = arr[11] * 60 + arr[12];
	    if (arr[10] === '+') {
	      offset = 0 - offset;
	    }
	  }

	  var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
	  return new Date(millis);
	};


	/**
	 * Checks whether a `string` is an ISO date string. `strict` mode requires that
	 * the date string at least have a year, month and date.
	 *
	 * @param {String} string
	 * @param {Boolean} strict
	 * @return {Boolean}
	 */

	lib$J.is = function(string, strict) {
	  if (typeof string !== 'string') {
	    return false;
	  }
	  if (strict && (/^\d{4}-\d{2}-\d{2}/).test(string) === false) {
	    return false;
	  }
	  return matcher.test(string);
	};
	return lib$J;
}

var milliseconds = {};

var hasRequiredMilliseconds;

function requireMilliseconds () {
	if (hasRequiredMilliseconds) return milliseconds;
	hasRequiredMilliseconds = 1;

	/**
	 * Matcher.
	 */

	var matcher = /\d{13}/;

	/**
	 * Check whether a string is a millisecond date string.
	 *
	 * @param {string} string
	 * @return {boolean}
	 */
	milliseconds.is = function (string) {
	  return matcher.test(string);
	};

	/**
	 * Convert a millisecond string to a date.
	 *
	 * @param {string} millis
	 * @return {Date}
	 */
	milliseconds.parse = function (millis) {
	  millis = parseInt(millis, 10);
	  return new Date(millis);
	};
	return milliseconds;
}

var seconds = {};

var hasRequiredSeconds;

function requireSeconds () {
	if (hasRequiredSeconds) return seconds;
	hasRequiredSeconds = 1;

	/**
	 * Matcher.
	 */

	var matcher = /\d{10}/;

	/**
	 * Check whether a string is a second date string.
	 *
	 * @param {string} string
	 * @return {Boolean}
	 */
	seconds.is = function (string) {
	  return matcher.test(string);
	};

	/**
	 * Convert a second string to a date.
	 *
	 * @param {string} seconds
	 * @return {Date}
	 */
	seconds.parse = function (seconds) {
	  var millis = parseInt(seconds, 10) * 1000;
	  return new Date(millis);
	};
	return seconds;
}

var lib$I;
var hasRequiredLib$I;

function requireLib$I () {
	if (hasRequiredLib$I) return lib$I;
	hasRequiredLib$I = 1;

	var isodate = requireLib$J();
	var milliseconds = requireMilliseconds();
	var seconds = requireSeconds();

	var objProto = Object.prototype;
	var toStr = objProto.toString;

	function isDate(value) {
	  return toStr.call(value) === "[object Date]";
	}

	function isNumber(value) {
	  return toStr.call(value) === "[object Number]";
	}

	/**
	 * Returns a new Javascript Date object, allowing a variety of extra input types
	 * over the native Date constructor.
	 *
	 * @param {Date|string|number} val
	 */
	lib$I = function newDate(val) {
	  if (isDate(val)) return val;
	  if (isNumber(val)) return new Date(toMs(val));

	  // date strings
	  if (isodate.is(val)) {
	    return isodate.parse(val);
	  }
	  if (milliseconds.is(val)) {
	    return milliseconds.parse(val);
	  }
	  if (seconds.is(val)) {
	    return seconds.parse(val);
	  }

	  // fallback to Date.parse
	  return new Date(val);
	};

	/**
	 * If the number passed val is seconds from the epoch, turn it into milliseconds.
	 * Milliseconds would be greater than 31557600000 (December 31, 1970).
	 *
	 * @param {number} num
	 */
	function toMs(num) {
	  if (num < 31557600000) return num * 1000;
	  return num;
	}
	return lib$I;
}

var lib$H;
var hasRequiredLib$H;

function requireLib$H () {
	if (hasRequiredLib$H) return lib$H;
	hasRequiredLib$H = 1;

	var isodate = requireLib$J();

	/**
	 * Expose `traverse`.
	 */
	lib$H = traverse;

	/**
	 * Recursively traverse an object or array, and convert
	 * all ISO date strings parse into Date objects.
	 *
	 * @param {Object} input - object, array, or string to convert
	 * @param {Boolean} strict - only convert strings with year, month, and date
	 * @return {Object}
	 */
	function traverse(input, strict) {
	  if (strict === undefined) strict = true;
	  if (input && typeof input === 'object') {
	    return traverseObject(input, strict);
	  } else if (Array.isArray(input)) {
	    return traverseArray(input, strict);
	  } else if (isodate.is(input, strict)) {
	    return isodate.parse(input);
	  }
	  return input;
	}

	/**
	 * Object traverser helper function.
	 *
	 * @param {Object} obj - object to traverse
	 * @param {Boolean} strict - only convert strings with year, month, and date
	 * @return {Object}
	 */
	function traverseObject(obj, strict) {
	  Object.keys(obj).forEach(function(key) {
	    obj[key] = traverse(obj[key], strict);
	  });
	  return obj;
	}

	/**
	 * Array traverser helper function
	 *
	 * @param {Array} arr - array to traverse
	 * @param {Boolean} strict - only convert strings with year, month, and date
	 * @return {Array}
	 */
	function traverseArray(arr, strict) {
	  arr.forEach(function(value, index) {
	    arr[index] = traverse(value, strict);
	  });
	  return arr;
	}
	return lib$H;
}

var hasRequiredFacade;

function requireFacade () {
	if (hasRequiredFacade) return facade;
	hasRequiredFacade = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(facade, "__esModule", { value: true });
	facade.Facade = void 0;
	var address_1 = __importDefault(requireAddress());
	var clone_1 = requireClone();
	var is_enabled_1 = __importDefault(requireIsEnabled());
	var new_date_1 = __importDefault(requireLib$I());
	var obj_case_1 = __importDefault(requireObjCase());
	var isodate_traverse_1 = __importDefault(requireLib$H());
	function Facade(obj, opts) {
	    opts = opts || {};
	    this.raw = clone_1.clone(obj);
	    if (!("clone" in opts))
	        opts.clone = true;
	    if (opts.clone)
	        obj = clone_1.clone(obj);
	    if (!("traverse" in opts))
	        opts.traverse = true;
	    if (!("timestamp" in obj))
	        obj.timestamp = new Date();
	    else
	        obj.timestamp = new_date_1.default(obj.timestamp);
	    if (opts.traverse)
	        isodate_traverse_1.default(obj);
	    this.opts = opts;
	    this.obj = obj;
	}
	facade.Facade = Facade;
	var f = Facade.prototype;
	f.proxy = function (field) {
	    var fields = field.split(".");
	    field = fields.shift();
	    var obj = this[field] || this.obj[field];
	    if (!obj)
	        return obj;
	    if (typeof obj === "function")
	        obj = obj.call(this) || {};
	    if (fields.length === 0)
	        return this.opts.clone ? transform(obj) : obj;
	    obj = obj_case_1.default(obj, fields.join("."));
	    return this.opts.clone ? transform(obj) : obj;
	};
	f.field = function (field) {
	    var obj = this.obj[field];
	    return this.opts.clone ? transform(obj) : obj;
	};
	Facade.proxy = function (field) {
	    return function () {
	        return this.proxy(field);
	    };
	};
	Facade.field = function (field) {
	    return function () {
	        return this.field(field);
	    };
	};
	Facade.multi = function (path) {
	    return function () {
	        var multi = this.proxy(path + "s");
	        if (Array.isArray(multi))
	            return multi;
	        var one = this.proxy(path);
	        if (one)
	            one = [this.opts.clone ? clone_1.clone(one) : one];
	        return one || [];
	    };
	};
	Facade.one = function (path) {
	    return function () {
	        var one = this.proxy(path);
	        if (one)
	            return one;
	        var multi = this.proxy(path + "s");
	        if (Array.isArray(multi))
	            return multi[0];
	    };
	};
	f.json = function () {
	    var ret = this.opts.clone ? clone_1.clone(this.obj) : this.obj;
	    if (this.type)
	        ret.type = this.type();
	    return ret;
	};
	f.rawEvent = function () {
	    return this.raw;
	};
	f.options = function (integration) {
	    var obj = this.obj.options || this.obj.context || {};
	    var options = this.opts.clone ? clone_1.clone(obj) : obj;
	    if (!integration)
	        return options;
	    if (!this.enabled(integration))
	        return;
	    var integrations = this.integrations();
	    var value = integrations[integration] || obj_case_1.default(integrations, integration);
	    if (typeof value !== "object")
	        value = obj_case_1.default(this.options(), integration);
	    return typeof value === "object" ? value : {};
	};
	f.context = f.options;
	f.enabled = function (integration) {
	    var allEnabled = this.proxy("options.providers.all");
	    if (typeof allEnabled !== "boolean")
	        allEnabled = this.proxy("options.all");
	    if (typeof allEnabled !== "boolean")
	        allEnabled = this.proxy("integrations.all");
	    if (typeof allEnabled !== "boolean")
	        allEnabled = true;
	    var enabled = allEnabled && is_enabled_1.default(integration);
	    var options = this.integrations();
	    if (options.providers && options.providers.hasOwnProperty(integration)) {
	        enabled = options.providers[integration];
	    }
	    if (options.hasOwnProperty(integration)) {
	        var settings = options[integration];
	        if (typeof settings === "boolean") {
	            enabled = settings;
	        }
	        else {
	            enabled = true;
	        }
	    }
	    return !!enabled;
	};
	f.integrations = function () {
	    return (this.obj.integrations || this.proxy("options.providers") || this.options());
	};
	f.active = function () {
	    var active = this.proxy("options.active");
	    if (active === null || active === undefined)
	        active = true;
	    return active;
	};
	f.anonymousId = function () {
	    return this.field("anonymousId") || this.field("sessionId");
	};
	f.sessionId = f.anonymousId;
	f.groupId = Facade.proxy("options.groupId");
	f.traits = function (aliases) {
	    var ret = this.proxy("options.traits") || {};
	    var id = this.userId();
	    aliases = aliases || {};
	    if (id)
	        ret.id = id;
	    for (var alias in aliases) {
	        if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
	            var value = this[alias] == null
	                ? this.proxy("options.traits." + alias)
	                : this[alias]();
	            if (value == null)
	                continue;
	            ret[aliases[alias]] = value;
	            delete ret[alias];
	        }
	    }
	    return ret;
	};
	f.library = function () {
	    var library = this.proxy("options.library");
	    if (!library)
	        return { name: "unknown", version: null };
	    if (typeof library === "string")
	        return { name: library, version: null };
	    return library;
	};
	f.device = function () {
	    var device = this.proxy("context.device");
	    if (typeof device !== "object" || device === null) {
	        device = {};
	    }
	    var library = this.library().name;
	    if (device.type)
	        return device;
	    if (library.indexOf("ios") > -1)
	        device.type = "ios";
	    if (library.indexOf("android") > -1)
	        device.type = "android";
	    return device;
	};
	f.userAgent = Facade.proxy("context.userAgent");
	f.timezone = Facade.proxy("context.timezone");
	f.timestamp = Facade.field("timestamp");
	f.channel = Facade.field("channel");
	f.ip = Facade.proxy("context.ip");
	f.userId = Facade.field("userId");
	address_1.default(f);
	function transform(obj) {
	    return clone_1.clone(obj);
	}
	
	return facade;
}

var alias = {};

var inherits = {exports: {}};

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}

var hasRequiredInherits;

function requireInherits () {
	if (hasRequiredInherits) return inherits.exports;
	hasRequiredInherits = 1;
	try {
	  var util = require('util');
	  /* istanbul ignore next */
	  if (typeof util.inherits !== 'function') throw '';
	  inherits.exports = util.inherits;
	} catch (e) {
	  /* istanbul ignore next */
	  inherits.exports = requireInherits_browser();
	}
	return inherits.exports;
}

var hasRequiredAlias;

function requireAlias () {
	if (hasRequiredAlias) return alias;
	hasRequiredAlias = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(alias, "__esModule", { value: true });
	alias.Alias = void 0;
	var inherits_1 = __importDefault(requireInherits());
	var facade_1 = requireFacade();
	function Alias(dictionary, opts) {
	    facade_1.Facade.call(this, dictionary, opts);
	}
	alias.Alias = Alias;
	inherits_1.default(Alias, facade_1.Facade);
	Alias.prototype.action = function () {
	    return "alias";
	};
	Alias.prototype.type = Alias.prototype.action;
	Alias.prototype.previousId = function () {
	    return this.field("previousId") || this.field("from");
	};
	Alias.prototype.from = Alias.prototype.previousId;
	Alias.prototype.userId = function () {
	    return this.field("userId") || this.field("to");
	};
	Alias.prototype.to = Alias.prototype.userId;
	
	return alias;
}

var group = {};

var isEmail = {};

var hasRequiredIsEmail;

function requireIsEmail () {
	if (hasRequiredIsEmail) return isEmail;
	hasRequiredIsEmail = 1;
	Object.defineProperty(isEmail, "__esModule", { value: true });
	var matcher = /.+\@.+\..+/;
	function isEmail$1(string) {
	    return matcher.test(string);
	}
	isEmail.default = isEmail$1;
	
	return isEmail;
}

var hasRequiredGroup;

function requireGroup () {
	if (hasRequiredGroup) return group;
	hasRequiredGroup = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(group, "__esModule", { value: true });
	group.Group = void 0;
	var inherits_1 = __importDefault(requireInherits());
	var is_email_1 = __importDefault(requireIsEmail());
	var new_date_1 = __importDefault(requireLib$I());
	var facade_1 = requireFacade();
	function Group(dictionary, opts) {
	    facade_1.Facade.call(this, dictionary, opts);
	}
	group.Group = Group;
	inherits_1.default(Group, facade_1.Facade);
	var g = Group.prototype;
	g.action = function () {
	    return "group";
	};
	g.type = g.action;
	g.groupId = facade_1.Facade.field("groupId");
	g.created = function () {
	    var created = this.proxy("traits.createdAt") ||
	        this.proxy("traits.created") ||
	        this.proxy("properties.createdAt") ||
	        this.proxy("properties.created");
	    if (created)
	        return new_date_1.default(created);
	};
	g.email = function () {
	    var email = this.proxy("traits.email");
	    if (email)
	        return email;
	    var groupId = this.groupId();
	    if (is_email_1.default(groupId))
	        return groupId;
	};
	g.traits = function (aliases) {
	    var ret = this.properties();
	    var id = this.groupId();
	    aliases = aliases || {};
	    if (id)
	        ret.id = id;
	    for (var alias in aliases) {
	        if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
	            var value = this[alias] == null
	                ? this.proxy("traits." + alias)
	                : this[alias]();
	            if (value == null)
	                continue;
	            ret[aliases[alias]] = value;
	            delete ret[alias];
	        }
	    }
	    return ret;
	};
	g.name = facade_1.Facade.proxy("traits.name");
	g.industry = facade_1.Facade.proxy("traits.industry");
	g.employees = facade_1.Facade.proxy("traits.employees");
	g.properties = function () {
	    return this.field("traits") || this.field("properties") || {};
	};
	
	return group;
}

var identify = {};

var hasRequiredIdentify;

function requireIdentify () {
	if (hasRequiredIdentify) return identify;
	hasRequiredIdentify = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(identify, "__esModule", { value: true });
	identify.Identify = void 0;
	var facade_1 = requireFacade();
	var obj_case_1 = __importDefault(requireObjCase());
	var inherits_1 = __importDefault(requireInherits());
	var is_email_1 = __importDefault(requireIsEmail());
	var new_date_1 = __importDefault(requireLib$I());
	var trim = function (str) { return str.trim(); };
	function Identify(dictionary, opts) {
	    facade_1.Facade.call(this, dictionary, opts);
	}
	identify.Identify = Identify;
	inherits_1.default(Identify, facade_1.Facade);
	var i = Identify.prototype;
	i.action = function () {
	    return "identify";
	};
	i.type = i.action;
	i.traits = function (aliases) {
	    var ret = this.field("traits") || {};
	    var id = this.userId();
	    aliases = aliases || {};
	    if (id)
	        ret.id = id;
	    for (var alias in aliases) {
	        var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
	        if (value == null)
	            continue;
	        ret[aliases[alias]] = value;
	        if (alias !== aliases[alias])
	            delete ret[alias];
	    }
	    return ret;
	};
	i.email = function () {
	    var email = this.proxy("traits.email");
	    if (email)
	        return email;
	    var userId = this.userId();
	    if (is_email_1.default(userId))
	        return userId;
	};
	i.created = function () {
	    var created = this.proxy("traits.created") || this.proxy("traits.createdAt");
	    if (created)
	        return new_date_1.default(created);
	};
	i.companyCreated = function () {
	    var created = this.proxy("traits.company.created") ||
	        this.proxy("traits.company.createdAt");
	    if (created) {
	        return new_date_1.default(created);
	    }
	};
	i.companyName = function () {
	    return this.proxy("traits.company.name");
	};
	i.name = function () {
	    var name = this.proxy("traits.name");
	    if (typeof name === "string") {
	        return trim(name);
	    }
	    var firstName = this.firstName();
	    var lastName = this.lastName();
	    if (firstName && lastName) {
	        return trim(firstName + " " + lastName);
	    }
	};
	i.firstName = function () {
	    var firstName = this.proxy("traits.firstName");
	    if (typeof firstName === "string") {
	        return trim(firstName);
	    }
	    var name = this.proxy("traits.name");
	    if (typeof name === "string") {
	        return trim(name).split(" ")[0];
	    }
	};
	i.lastName = function () {
	    var lastName = this.proxy("traits.lastName");
	    if (typeof lastName === "string") {
	        return trim(lastName);
	    }
	    var name = this.proxy("traits.name");
	    if (typeof name !== "string") {
	        return;
	    }
	    var space = trim(name).indexOf(" ");
	    if (space === -1) {
	        return;
	    }
	    return trim(name.substr(space + 1));
	};
	i.uid = function () {
	    return this.userId() || this.username() || this.email();
	};
	i.description = function () {
	    return this.proxy("traits.description") || this.proxy("traits.background");
	};
	i.age = function () {
	    var date = this.birthday();
	    var age = obj_case_1.default(this.traits(), "age");
	    if (age != null)
	        return age;
	    if (!(date instanceof Date))
	        return;
	    var now = new Date();
	    return now.getFullYear() - date.getFullYear();
	};
	i.avatar = function () {
	    var traits = this.traits();
	    return (obj_case_1.default(traits, "avatar") || obj_case_1.default(traits, "photoUrl") || obj_case_1.default(traits, "avatarUrl"));
	};
	i.position = function () {
	    var traits = this.traits();
	    return obj_case_1.default(traits, "position") || obj_case_1.default(traits, "jobTitle");
	};
	i.username = facade_1.Facade.proxy("traits.username");
	i.website = facade_1.Facade.one("traits.website");
	i.websites = facade_1.Facade.multi("traits.website");
	i.phone = facade_1.Facade.one("traits.phone");
	i.phones = facade_1.Facade.multi("traits.phone");
	i.address = facade_1.Facade.proxy("traits.address");
	i.gender = facade_1.Facade.proxy("traits.gender");
	i.birthday = facade_1.Facade.proxy("traits.birthday");
	
	return identify;
}

var track = {};

var hasRequiredTrack;

function requireTrack () {
	if (hasRequiredTrack) return track;
	hasRequiredTrack = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(track, "__esModule", { value: true });
	track.Track = void 0;
	var inherits_1 = __importDefault(requireInherits());
	var facade_1 = requireFacade();
	var identify_1 = requireIdentify();
	var is_email_1 = __importDefault(requireIsEmail());
	var obj_case_1 = __importDefault(requireObjCase());
	function Track(dictionary, opts) {
	    facade_1.Facade.call(this, dictionary, opts);
	}
	track.Track = Track;
	inherits_1.default(Track, facade_1.Facade);
	var t = Track.prototype;
	t.action = function () {
	    return "track";
	};
	t.type = t.action;
	t.event = facade_1.Facade.field("event");
	t.value = facade_1.Facade.proxy("properties.value");
	t.category = facade_1.Facade.proxy("properties.category");
	t.id = facade_1.Facade.proxy("properties.id");
	t.productId = function () {
	    return (this.proxy("properties.product_id") || this.proxy("properties.productId"));
	};
	t.promotionId = function () {
	    return (this.proxy("properties.promotion_id") ||
	        this.proxy("properties.promotionId"));
	};
	t.cartId = function () {
	    return this.proxy("properties.cart_id") || this.proxy("properties.cartId");
	};
	t.checkoutId = function () {
	    return (this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId"));
	};
	t.paymentId = function () {
	    return (this.proxy("properties.payment_id") || this.proxy("properties.paymentId"));
	};
	t.couponId = function () {
	    return (this.proxy("properties.coupon_id") || this.proxy("properties.couponId"));
	};
	t.wishlistId = function () {
	    return (this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId"));
	};
	t.reviewId = function () {
	    return (this.proxy("properties.review_id") || this.proxy("properties.reviewId"));
	};
	t.orderId = function () {
	    return (this.proxy("properties.id") ||
	        this.proxy("properties.order_id") ||
	        this.proxy("properties.orderId"));
	};
	t.sku = facade_1.Facade.proxy("properties.sku");
	t.tax = facade_1.Facade.proxy("properties.tax");
	t.name = facade_1.Facade.proxy("properties.name");
	t.price = facade_1.Facade.proxy("properties.price");
	t.total = facade_1.Facade.proxy("properties.total");
	t.repeat = facade_1.Facade.proxy("properties.repeat");
	t.coupon = facade_1.Facade.proxy("properties.coupon");
	t.shipping = facade_1.Facade.proxy("properties.shipping");
	t.discount = facade_1.Facade.proxy("properties.discount");
	t.shippingMethod = function () {
	    return (this.proxy("properties.shipping_method") ||
	        this.proxy("properties.shippingMethod"));
	};
	t.paymentMethod = function () {
	    return (this.proxy("properties.payment_method") ||
	        this.proxy("properties.paymentMethod"));
	};
	t.description = facade_1.Facade.proxy("properties.description");
	t.plan = facade_1.Facade.proxy("properties.plan");
	t.subtotal = function () {
	    var subtotal = obj_case_1.default(this.properties(), "subtotal");
	    var total = this.total() || this.revenue();
	    if (subtotal)
	        return subtotal;
	    if (!total)
	        return 0;
	    if (this.total()) {
	        var n = this.tax();
	        if (n)
	            total -= n;
	        n = this.shipping();
	        if (n)
	            total -= n;
	        n = this.discount();
	        if (n)
	            total += n;
	    }
	    return total;
	};
	t.products = function () {
	    var props = this.properties();
	    var products = obj_case_1.default(props, "products");
	    if (Array.isArray(products)) {
	        return products.filter(function (item) { return item !== null; });
	    }
	    return [];
	};
	t.quantity = function () {
	    var props = this.obj.properties || {};
	    return props.quantity || 1;
	};
	t.currency = function () {
	    var props = this.obj.properties || {};
	    return props.currency || "USD";
	};
	t.referrer = function () {
	    return (this.proxy("context.referrer.url") ||
	        this.proxy("context.page.referrer") ||
	        this.proxy("properties.referrer"));
	};
	t.query = facade_1.Facade.proxy("options.query");
	t.properties = function (aliases) {
	    var ret = this.field("properties") || {};
	    aliases = aliases || {};
	    for (var alias in aliases) {
	        if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
	            var value = this[alias] == null
	                ? this.proxy("properties." + alias)
	                : this[alias]();
	            if (value == null)
	                continue;
	            ret[aliases[alias]] = value;
	            delete ret[alias];
	        }
	    }
	    return ret;
	};
	t.username = function () {
	    return (this.proxy("traits.username") ||
	        this.proxy("properties.username") ||
	        this.userId() ||
	        this.sessionId());
	};
	t.email = function () {
	    var email = this.proxy("traits.email") ||
	        this.proxy("properties.email") ||
	        this.proxy("options.traits.email");
	    if (email)
	        return email;
	    var userId = this.userId();
	    if (is_email_1.default(userId))
	        return userId;
	};
	t.revenue = function () {
	    var revenue = this.proxy("properties.revenue");
	    var event = this.event();
	    var orderCompletedRegExp = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;
	    if (!revenue && event && event.match(orderCompletedRegExp)) {
	        revenue = this.proxy("properties.total");
	    }
	    return currency(revenue);
	};
	t.cents = function () {
	    var revenue = this.revenue();
	    return typeof revenue !== "number" ? this.value() || 0 : revenue * 100;
	};
	t.identify = function () {
	    var json = this.json();
	    json.traits = this.traits();
	    return new identify_1.Identify(json, this.opts);
	};
	function currency(val) {
	    if (!val)
	        return;
	    if (typeof val === "number") {
	        return val;
	    }
	    if (typeof val !== "string") {
	        return;
	    }
	    val = val.replace(/\$/g, "");
	    val = parseFloat(val);
	    if (!isNaN(val)) {
	        return val;
	    }
	}
	
	return track;
}

var page = {};

var hasRequiredPage;

function requirePage () {
	if (hasRequiredPage) return page;
	hasRequiredPage = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(page, "__esModule", { value: true });
	page.Page = void 0;
	var inherits_1 = __importDefault(requireInherits());
	var facade_1 = requireFacade();
	var track_1 = requireTrack();
	var is_email_1 = __importDefault(requireIsEmail());
	function Page(dictionary, opts) {
	    facade_1.Facade.call(this, dictionary, opts);
	}
	page.Page = Page;
	inherits_1.default(Page, facade_1.Facade);
	var p = Page.prototype;
	p.action = function () {
	    return "page";
	};
	p.type = p.action;
	p.category = facade_1.Facade.field("category");
	p.name = facade_1.Facade.field("name");
	p.title = facade_1.Facade.proxy("properties.title");
	p.path = facade_1.Facade.proxy("properties.path");
	p.url = facade_1.Facade.proxy("properties.url");
	p.referrer = function () {
	    return (this.proxy("context.referrer.url") ||
	        this.proxy("context.page.referrer") ||
	        this.proxy("properties.referrer"));
	};
	p.properties = function (aliases) {
	    var props = this.field("properties") || {};
	    var category = this.category();
	    var name = this.name();
	    aliases = aliases || {};
	    if (category)
	        props.category = category;
	    if (name)
	        props.name = name;
	    for (var alias in aliases) {
	        if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
	            var value = this[alias] == null
	                ? this.proxy("properties." + alias)
	                : this[alias]();
	            if (value == null)
	                continue;
	            props[aliases[alias]] = value;
	            if (alias !== aliases[alias])
	                delete props[alias];
	        }
	    }
	    return props;
	};
	p.email = function () {
	    var email = this.proxy("context.traits.email") || this.proxy("properties.email");
	    if (email)
	        return email;
	    var userId = this.userId();
	    if (is_email_1.default(userId))
	        return userId;
	};
	p.fullName = function () {
	    var category = this.category();
	    var name = this.name();
	    return name && category ? category + " " + name : name;
	};
	p.event = function (name) {
	    return name ? "Viewed " + name + " Page" : "Loaded a Page";
	};
	p.track = function (name) {
	    var json = this.json();
	    json.event = this.event(name);
	    json.timestamp = this.timestamp();
	    json.properties = this.properties();
	    return new track_1.Track(json, this.opts);
	};
	
	return page;
}

var screen = {};

var hasRequiredScreen;

function requireScreen () {
	if (hasRequiredScreen) return screen;
	hasRequiredScreen = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(screen, "__esModule", { value: true });
	screen.Screen = void 0;
	var inherits_1 = __importDefault(requireInherits());
	var page_1 = requirePage();
	var track_1 = requireTrack();
	function Screen(dictionary, opts) {
	    page_1.Page.call(this, dictionary, opts);
	}
	screen.Screen = Screen;
	inherits_1.default(Screen, page_1.Page);
	Screen.prototype.action = function () {
	    return "screen";
	};
	Screen.prototype.type = Screen.prototype.action;
	Screen.prototype.event = function (name) {
	    return name ? "Viewed " + name + " Screen" : "Loaded a Screen";
	};
	Screen.prototype.track = function (name) {
	    var json = this.json();
	    json.event = this.event(name);
	    json.timestamp = this.timestamp();
	    json.properties = this.properties();
	    return new track_1.Track(json, this.opts);
	};
	
	return screen;
}

var _delete = {};

var hasRequired_delete;

function require_delete () {
	if (hasRequired_delete) return _delete;
	hasRequired_delete = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(_delete, "__esModule", { value: true });
	_delete.Delete = void 0;
	var inherits_1 = __importDefault(requireInherits());
	var facade_1 = requireFacade();
	function Delete(dictionary, opts) {
	    facade_1.Facade.call(this, dictionary, opts);
	}
	_delete.Delete = Delete;
	inherits_1.default(Delete, facade_1.Facade);
	Delete.prototype.type = function () {
	    return "delete";
	};
	
	return _delete;
}

var hasRequiredDist$1;

function requireDist$1 () {
	if (hasRequiredDist$1) return dist$1;
	hasRequiredDist$1 = 1;
	(function (exports) {
		var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
		    __assign = Object.assign || function(t) {
		        for (var s, i = 1, n = arguments.length; i < n; i++) {
		            s = arguments[i];
		            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
		                t[p] = s[p];
		        }
		        return t;
		    };
		    return __assign.apply(this, arguments);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Delete = exports.Screen = exports.Page = exports.Track = exports.Identify = exports.Group = exports.Alias = exports.Facade = void 0;
		var facade_1 = requireFacade();
		Object.defineProperty(exports, "Facade", { enumerable: true, get: function () { return facade_1.Facade; } });
		var alias_1 = requireAlias();
		Object.defineProperty(exports, "Alias", { enumerable: true, get: function () { return alias_1.Alias; } });
		var group_1 = requireGroup();
		Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return group_1.Group; } });
		var identify_1 = requireIdentify();
		Object.defineProperty(exports, "Identify", { enumerable: true, get: function () { return identify_1.Identify; } });
		var track_1 = requireTrack();
		Object.defineProperty(exports, "Track", { enumerable: true, get: function () { return track_1.Track; } });
		var page_1 = requirePage();
		Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return page_1.Page; } });
		var screen_1 = requireScreen();
		Object.defineProperty(exports, "Screen", { enumerable: true, get: function () { return screen_1.Screen; } });
		var delete_1 = require_delete();
		Object.defineProperty(exports, "Delete", { enumerable: true, get: function () { return delete_1.Delete; } });
		exports.default = __assign(__assign({}, facade_1.Facade), { Alias: alias_1.Alias,
		    Group: group_1.Group,
		    Identify: identify_1.Identify,
		    Track: track_1.Track,
		    Page: page_1.Page,
		    Screen: screen_1.Screen,
		    Delete: delete_1.Delete });
		
	} (dist$1));
	return dist$1;
}

Object.defineProperty(toFacade$1, "__esModule", { value: true });
toFacade$1.toFacade = void 0;
var facade_1 = requireDist$1();
function toFacade(evt, options) {
    var fcd = new facade_1.Facade(evt, options);
    if (evt.type === 'track') {
        fcd = new facade_1.Track(evt, options);
    }
    if (evt.type === 'identify') {
        fcd = new facade_1.Identify(evt, options);
    }
    if (evt.type === 'page') {
        fcd = new facade_1.Page(evt, options);
    }
    if (evt.type === 'alias') {
        fcd = new facade_1.Alias(evt, options);
    }
    if (evt.type === 'group') {
        fcd = new facade_1.Group(evt, options);
    }
    if (evt.type === 'screen') {
        fcd = new facade_1.Screen(evt, options);
    }
    Object.defineProperty(fcd, 'obj', {
        value: evt,
        writable: true,
    });
    return fcd;
}
toFacade$1.toFacade = toFacade;

Object.defineProperty(middleware, "__esModule", { value: true });
middleware.sourceMiddlewarePlugin = middleware.applyDestinationMiddleware = void 0;
var tslib_1$6 = require$$0$2;
var context_1$3 = context;
var to_facade_1$1 = toFacade$1;
function applyDestinationMiddleware(destination, evt, middleware) {
    return tslib_1$6.__awaiter(this, void 0, void 0, function () {
        function applyMiddleware(event, fn) {
            return tslib_1$6.__awaiter(this, void 0, void 0, function () {
                var nextCalled, returnedEvent;
                var _a;
                return tslib_1$6.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            nextCalled = false;
                            returnedEvent = null;
                            return [4 /*yield*/, fn({
                                    payload: (0, to_facade_1$1.toFacade)(event, {
                                        clone: true,
                                        traverse: false,
                                    }),
                                    integration: destination,
                                    next: function (evt) {
                                        nextCalled = true;
                                        if (evt === null) {
                                            returnedEvent = null;
                                        }
                                        if (evt) {
                                            returnedEvent = evt.obj;
                                        }
                                    },
                                })];
                        case 1:
                            _b.sent();
                            if (!nextCalled && returnedEvent !== null) {
                                returnedEvent = returnedEvent;
                                returnedEvent.integrations = tslib_1$6.__assign(tslib_1$6.__assign({}, event.integrations), (_a = {}, _a[destination] = false, _a));
                            }
                            return [2 /*return*/, returnedEvent];
                    }
                });
            });
        }
        var modifiedEvent, _i, middleware_1, md, result;
        return tslib_1$6.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modifiedEvent = (0, to_facade_1$1.toFacade)(evt, {
                        clone: true,
                        traverse: false,
                    }).rawEvent();
                    _i = 0, middleware_1 = middleware;
                    _a.label = 1;
                case 1:
                    if (!(_i < middleware_1.length)) return [3 /*break*/, 4];
                    md = middleware_1[_i];
                    return [4 /*yield*/, applyMiddleware(modifiedEvent, md)];
                case 2:
                    result = _a.sent();
                    if (result === null) {
                        return [2 /*return*/, null];
                    }
                    modifiedEvent = result;
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, modifiedEvent];
            }
        });
    });
}
middleware.applyDestinationMiddleware = applyDestinationMiddleware;
function sourceMiddlewarePlugin(fn, integrations) {
    function apply(ctx) {
        return tslib_1$6.__awaiter(this, void 0, void 0, function () {
            var nextCalled;
            return tslib_1$6.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nextCalled = false;
                        return [4 /*yield*/, fn({
                                payload: (0, to_facade_1$1.toFacade)(ctx.event, {
                                    clone: true,
                                    traverse: false,
                                }),
                                integrations: integrations !== null && integrations !== void 0 ? integrations : {},
                                next: function (evt) {
                                    nextCalled = true;
                                    if (evt) {
                                        ctx.event = evt.obj;
                                    }
                                },
                            })];
                    case 1:
                        _a.sent();
                        if (!nextCalled) {
                            throw new context_1$3.ContextCancelation({
                                retry: false,
                                type: 'middleware_cancellation',
                                reason: 'Middleware `next` function skipped',
                            });
                        }
                        return [2 /*return*/, ctx];
                }
            });
        });
    }
    return {
        name: "Source Middleware ".concat(fn.name),
        type: 'before',
        version: '0.1.0',
        isLoaded: function () { return true; },
        load: function (ctx) { return Promise.resolve(ctx); },
        track: apply,
        page: apply,
        identify: apply,
        alias: apply,
        group: apply,
    };
}
middleware.sourceMiddlewarePlugin = sourceMiddlewarePlugin;

var queryString = {};

var pickPrefix = {};

var hasRequiredPickPrefix;

function requirePickPrefix () {
	if (hasRequiredPickPrefix) return pickPrefix;
	hasRequiredPickPrefix = 1;
	Object.defineProperty(pickPrefix, "__esModule", { value: true });
	pickPrefix.pickPrefix = void 0;
	/**
	 * Returns an object containing only the properties prefixed by the input
	 * string.
	 * Ex: prefix('ajs_traits_', { ajs_traits_address: '123 St' })
	 * will return { address: '123 St' }
	 **/
	function pickPrefix$1(prefix, object) {
	    return Object.keys(object).reduce(function (acc, key) {
	        if (key.startsWith(prefix)) {
	            var field = key.substr(prefix.length);
	            acc[field] = object[key];
	        }
	        return acc;
	    }, {});
	}
	pickPrefix.pickPrefix = pickPrefix$1;
	
	return pickPrefix;
}

var gracefulDecodeURIComponent = {};

var hasRequiredGracefulDecodeURIComponent;

function requireGracefulDecodeURIComponent () {
	if (hasRequiredGracefulDecodeURIComponent) return gracefulDecodeURIComponent;
	hasRequiredGracefulDecodeURIComponent = 1;
	Object.defineProperty(gracefulDecodeURIComponent, "__esModule", { value: true });
	gracefulDecodeURIComponent.gracefulDecodeURIComponent = void 0;
	/**
	 * Tries to gets the unencoded version of an encoded component of a
	 * Uniform Resource Identifier (URI). If input string is malformed,
	 * returns it back as-is.
	 *
	 * Note: All occurences of the `+` character become ` ` (spaces).
	 **/
	function gracefulDecodeURIComponent$1(encodedURIComponent) {
	    try {
	        return decodeURIComponent(encodedURIComponent.replace(/\+/g, ' '));
	    }
	    catch (_a) {
	        return encodedURIComponent;
	    }
	}
	gracefulDecodeURIComponent.gracefulDecodeURIComponent = gracefulDecodeURIComponent$1;
	
	return gracefulDecodeURIComponent;
}

var hasRequiredQueryString;

function requireQueryString () {
	if (hasRequiredQueryString) return queryString;
	hasRequiredQueryString = 1;
	Object.defineProperty(queryString, "__esModule", { value: true });
	queryString.queryString = void 0;
	var pickPrefix_1 = requirePickPrefix();
	var gracefulDecodeURIComponent_1 = requireGracefulDecodeURIComponent();
	var analytics_core_1 = require$$5;
	function queryString$1(analytics, query) {
	    var a = document.createElement('a');
	    a.href = query;
	    var parsed = a.search.slice(1);
	    var params = parsed.split('&').reduce(function (acc, str) {
	        var _a = str.split('='), k = _a[0], v = _a[1];
	        acc[k] = (0, gracefulDecodeURIComponent_1.gracefulDecodeURIComponent)(v);
	        return acc;
	    }, {});
	    var calls = [];
	    var ajs_uid = params.ajs_uid, ajs_event = params.ajs_event, ajs_aid = params.ajs_aid;
	    var _a = (0, analytics_core_1.isPlainObject)(analytics.options.useQueryString)
	        ? analytics.options.useQueryString
	        : {}, _b = _a.aid, aidPattern = _b === void 0 ? /.+/ : _b, _c = _a.uid, uidPattern = _c === void 0 ? /.+/ : _c;
	    if (ajs_aid) {
	        var anonId = Array.isArray(params.ajs_aid)
	            ? params.ajs_aid[0]
	            : params.ajs_aid;
	        if (aidPattern.test(anonId)) {
	            analytics.setAnonymousId(anonId);
	        }
	    }
	    if (ajs_uid) {
	        var uid = Array.isArray(params.ajs_uid)
	            ? params.ajs_uid[0]
	            : params.ajs_uid;
	        if (uidPattern.test(uid)) {
	            var traits = (0, pickPrefix_1.pickPrefix)('ajs_trait_', params);
	            calls.push(analytics.identify(uid, traits));
	        }
	    }
	    if (ajs_event) {
	        var event_1 = Array.isArray(params.ajs_event)
	            ? params.ajs_event[0]
	            : params.ajs_event;
	        var props = (0, pickPrefix_1.pickPrefix)('ajs_prop_', params);
	        calls.push(analytics.track(event_1, props));
	    }
	    return Promise.all(calls);
	}
	queryString.queryString = queryString$1;
	
	return queryString;
}

Object.defineProperty(analytics, "__esModule", { value: true });
analytics.NullAnalytics = analytics.Analytics = void 0;
var tslib_1$5 = require$$0$2;
var arguments_resolver_1 = argumentsResolver;
var connection_1$1 = connection;
var context_1$2 = context;
var analytics_core_1$1 = require$$5;
var analytics_generic_utils_1$1 = require$$7;
var events_1 = events;
var event_queue_1 = eventQueue;
var user_1 = user;
var bind_all_1 = tslib_1$5.__importDefault(requireBindAll());
var persisted_1$1 = persisted$1;
var version_1$1 = version;
var priority_queue_1$1 = priorityQueue;
var get_global_1$1 = requireGetGlobal();
var storage_1$1 = requireStorage();
var global_analytics_helper_1$1 = globalAnalyticsHelper;
var buffer_1$1 = buffer;
var deprecationWarning = 'This is being deprecated and will be not be available in future releases of Analytics JS';
// reference any pre-existing "analytics" object so a user can restore the reference
var global$1 = (0, get_global_1$1.getGlobal)();
var _analytics = global$1 === null || global$1 === void 0 ? void 0 : global$1.analytics;
function createDefaultQueue(name, retryQueue, disablePersistance) {
    if (retryQueue === void 0) { retryQueue = false; }
    if (disablePersistance === void 0) { disablePersistance = false; }
    var maxAttempts = retryQueue ? 10 : 1;
    var priorityQueue = disablePersistance
        ? new priority_queue_1$1.PriorityQueue(maxAttempts, [])
        : new persisted_1$1.PersistedPriorityQueue(maxAttempts, name);
    return new event_queue_1.EventQueue(priorityQueue);
}
/* analytics-classic stubs */
function _stub() {
    console.warn(deprecationWarning);
}
var Analytics = /** @class */ (function (_super) {
    tslib_1$5.__extends(Analytics, _super);
    function Analytics(settings, options, queue, user, group) {
        var _this = this;
        var _a, _b, _c;
        _this = _super.call(this) || this;
        _this._debug = false;
        _this.initialized = false;
        _this.user = function () {
            return _this._user;
        };
        _this.init = _this.initialize.bind(_this);
        _this.log = _stub;
        _this.addIntegrationMiddleware = _stub;
        _this.listeners = _stub;
        _this.addEventListener = _stub;
        _this.removeAllListeners = _stub;
        _this.removeListener = _stub;
        _this.removeEventListener = _stub;
        _this.hasListeners = _stub;
        _this.add = _stub;
        _this.addIntegration = _stub;
        var cookieOptions = options === null || options === void 0 ? void 0 : options.cookie;
        var disablePersistance = (_a = options === null || options === void 0 ? void 0 : options.disableClientPersistence) !== null && _a !== void 0 ? _a : false;
        _this.settings = settings;
        _this.settings.timeout = (_b = _this.settings.timeout) !== null && _b !== void 0 ? _b : 300;
        _this.queue =
            queue !== null && queue !== void 0 ? queue : createDefaultQueue("".concat(settings.writeKey, ":event-queue"), options === null || options === void 0 ? void 0 : options.retryQueue, disablePersistance);
        var storageSetting = options === null || options === void 0 ? void 0 : options.storage;
        _this._universalStorage = _this.createStore(disablePersistance, storageSetting, cookieOptions);
        _this._user =
            user !== null && user !== void 0 ? user : new user_1.User(tslib_1$5.__assign({ persist: !disablePersistance, storage: options === null || options === void 0 ? void 0 : options.storage }, options === null || options === void 0 ? void 0 : options.user), cookieOptions).load();
        _this._group =
            group !== null && group !== void 0 ? group : new user_1.Group(tslib_1$5.__assign({ persist: !disablePersistance, storage: options === null || options === void 0 ? void 0 : options.storage }, options === null || options === void 0 ? void 0 : options.group), cookieOptions).load();
        _this.eventFactory = new events_1.EventFactory(_this._user);
        _this.integrations = (_c = options === null || options === void 0 ? void 0 : options.integrations) !== null && _c !== void 0 ? _c : {};
        _this.options = options !== null && options !== void 0 ? options : {};
        (0, bind_all_1.default)(_this);
        return _this;
    }
    /**
     * Creates the storage system based on the settings received
     * @returns Storage
     */
    Analytics.prototype.createStore = function (disablePersistance, storageSetting, cookieOptions) {
        // DisablePersistance option overrides all, no storage will be used outside of memory even if specified
        if (disablePersistance) {
            return new storage_1$1.UniversalStorage([new storage_1$1.MemoryStorage()]);
        }
        else {
            if (storageSetting) {
                if ((0, storage_1$1.isArrayOfStoreType)(storageSetting)) {
                    // We will create the store with the priority for customer settings
                    return new storage_1$1.UniversalStorage((0, storage_1$1.initializeStorages)((0, storage_1$1.applyCookieOptions)(storageSetting.stores, cookieOptions)));
                }
            }
        }
        // We default to our multi storage with priority
        return new storage_1$1.UniversalStorage((0, storage_1$1.initializeStorages)([
            storage_1$1.StoreType.LocalStorage,
            {
                name: storage_1$1.StoreType.Cookie,
                settings: cookieOptions,
            },
            storage_1$1.StoreType.Memory,
        ]));
    };
    Object.defineProperty(Analytics.prototype, "storage", {
        get: function () {
            return this._universalStorage;
        },
        enumerable: false,
        configurable: true
    });
    Analytics.prototype.track = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var pageCtx, _a, name, data, opts, cb, segmentEvent;
            var _this = this;
            return tslib_1$5.__generator(this, function (_b) {
                pageCtx = (0, buffer_1$1.popPageContext)(args);
                _a = arguments_resolver_1.resolveArguments.apply(void 0, args), name = _a[0], data = _a[1], opts = _a[2], cb = _a[3];
                segmentEvent = this.eventFactory.track(name, data, opts, this.integrations, pageCtx);
                return [2 /*return*/, this._dispatch(segmentEvent, cb).then(function (ctx) {
                        _this.emit('track', name, ctx.event.properties, ctx.event.options);
                        return ctx;
                    })];
            });
        });
    };
    Analytics.prototype.page = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var pageCtx, _a, category, page, properties, options, callback, segmentEvent;
            var _this = this;
            return tslib_1$5.__generator(this, function (_b) {
                pageCtx = (0, buffer_1$1.popPageContext)(args);
                _a = arguments_resolver_1.resolvePageArguments.apply(void 0, args), category = _a[0], page = _a[1], properties = _a[2], options = _a[3], callback = _a[4];
                segmentEvent = this.eventFactory.page(category, page, properties, options, this.integrations, pageCtx);
                return [2 /*return*/, this._dispatch(segmentEvent, callback).then(function (ctx) {
                        _this.emit('page', category, page, ctx.event.properties, ctx.event.options);
                        return ctx;
                    })];
            });
        });
    };
    Analytics.prototype.identify = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var pageCtx, _a, id, _traits, options, callback, segmentEvent;
            var _this = this;
            return tslib_1$5.__generator(this, function (_b) {
                pageCtx = (0, buffer_1$1.popPageContext)(args);
                _a = (0, arguments_resolver_1.resolveUserArguments)(this._user).apply(void 0, args), id = _a[0], _traits = _a[1], options = _a[2], callback = _a[3];
                this._user.identify(id, _traits);
                segmentEvent = this.eventFactory.identify(this._user.id(), this._user.traits(), options, this.integrations, pageCtx);
                return [2 /*return*/, this._dispatch(segmentEvent, callback).then(function (ctx) {
                        _this.emit('identify', ctx.event.userId, ctx.event.traits, ctx.event.options);
                        return ctx;
                    })];
            });
        });
    };
    Analytics.prototype.group = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var pageCtx = (0, buffer_1$1.popPageContext)(args);
        if (args.length === 0) {
            return this._group;
        }
        var _a = (0, arguments_resolver_1.resolveUserArguments)(this._group).apply(void 0, args), id = _a[0], _traits = _a[1], options = _a[2], callback = _a[3];
        this._group.identify(id, _traits);
        var groupId = this._group.id();
        var groupTraits = this._group.traits();
        var segmentEvent = this.eventFactory.group(groupId, groupTraits, options, this.integrations, pageCtx);
        return this._dispatch(segmentEvent, callback).then(function (ctx) {
            _this.emit('group', ctx.event.groupId, ctx.event.traits, ctx.event.options);
            return ctx;
        });
    };
    Analytics.prototype.alias = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var pageCtx, _a, to, from, options, callback, segmentEvent;
            var _this = this;
            return tslib_1$5.__generator(this, function (_b) {
                pageCtx = (0, buffer_1$1.popPageContext)(args);
                _a = arguments_resolver_1.resolveAliasArguments.apply(void 0, args), to = _a[0], from = _a[1], options = _a[2], callback = _a[3];
                segmentEvent = this.eventFactory.alias(to, from, options, this.integrations, pageCtx);
                return [2 /*return*/, this._dispatch(segmentEvent, callback).then(function (ctx) {
                        _this.emit('alias', to, from, ctx.event.options);
                        return ctx;
                    })];
            });
        });
    };
    Analytics.prototype.screen = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var pageCtx, _a, category, page, properties, options, callback, segmentEvent;
            var _this = this;
            return tslib_1$5.__generator(this, function (_b) {
                pageCtx = (0, buffer_1$1.popPageContext)(args);
                _a = arguments_resolver_1.resolvePageArguments.apply(void 0, args), category = _a[0], page = _a[1], properties = _a[2], options = _a[3], callback = _a[4];
                segmentEvent = this.eventFactory.screen(category, page, properties, options, this.integrations, pageCtx);
                return [2 /*return*/, this._dispatch(segmentEvent, callback).then(function (ctx) {
                        _this.emit('screen', category, page, ctx.event.properties, ctx.event.options);
                        return ctx;
                    })];
            });
        });
    };
    Analytics.prototype.trackClick = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var autotrack;
            var _a;
            return tslib_1$5.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1$5.__importStar(requireAutoTrack()); })];
                    case 1:
                        autotrack = _b.sent();
                        return [2 /*return*/, (_a = autotrack.link).call.apply(_a, tslib_1$5.__spreadArray([this], args, false))];
                }
            });
        });
    };
    Analytics.prototype.trackLink = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var autotrack;
            var _a;
            return tslib_1$5.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1$5.__importStar(requireAutoTrack()); })];
                    case 1:
                        autotrack = _b.sent();
                        return [2 /*return*/, (_a = autotrack.link).call.apply(_a, tslib_1$5.__spreadArray([this], args, false))];
                }
            });
        });
    };
    Analytics.prototype.trackSubmit = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var autotrack;
            var _a;
            return tslib_1$5.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1$5.__importStar(requireAutoTrack()); })];
                    case 1:
                        autotrack = _b.sent();
                        return [2 /*return*/, (_a = autotrack.form).call.apply(_a, tslib_1$5.__spreadArray([this], args, false))];
                }
            });
        });
    };
    Analytics.prototype.trackForm = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var autotrack;
            var _a;
            return tslib_1$5.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1$5.__importStar(requireAutoTrack()); })];
                    case 1:
                        autotrack = _b.sent();
                        return [2 /*return*/, (_a = autotrack.form).call.apply(_a, tslib_1$5.__spreadArray([this], args, false))];
                }
            });
        });
    };
    Analytics.prototype.register = function () {
        var plugins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            plugins[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var ctx, registrations;
            var _this = this;
            return tslib_1$5.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = context_1$2.Context.system();
                        registrations = plugins.map(function (xt) {
                            return _this.queue.register(ctx, xt, _this);
                        });
                        return [4 /*yield*/, Promise.all(registrations)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, ctx];
                }
            });
        });
    };
    Analytics.prototype.deregister = function () {
        var plugins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            plugins[_i] = arguments[_i];
        }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var ctx, deregistrations;
            var _this = this;
            return tslib_1$5.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = context_1$2.Context.system();
                        deregistrations = plugins.map(function (pl) {
                            var plugin = _this.queue.plugins.find(function (p) { return p.name === pl; });
                            if (plugin) {
                                return _this.queue.deregister(ctx, plugin, _this);
                            }
                            else {
                                ctx.log('warn', "plugin ".concat(pl, " not found"));
                            }
                        });
                        return [4 /*yield*/, Promise.all(deregistrations)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, ctx];
                }
            });
        });
    };
    Analytics.prototype.debug = function (toggle) {
        // Make sure legacy ajs debug gets turned off if it was enabled before upgrading.
        if (toggle === false && localStorage.getItem('debug')) {
            localStorage.removeItem('debug');
        }
        this._debug = toggle;
        return this;
    };
    Analytics.prototype.reset = function () {
        this._user.reset();
        this._group.reset();
        this.emit('reset');
    };
    Analytics.prototype.timeout = function (timeout) {
        this.settings.timeout = timeout;
    };
    Analytics.prototype._dispatch = function (event, callback) {
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var ctx;
            return tslib_1$5.__generator(this, function (_a) {
                ctx = new context_1$2.Context(event);
                if ((0, connection_1$1.isOffline)() && !this.options.retryQueue) {
                    return [2 /*return*/, ctx];
                }
                return [2 /*return*/, (0, analytics_core_1$1.dispatch)(ctx, this.queue, this, {
                        callback: callback,
                        debug: this._debug,
                        timeout: this.settings.timeout,
                    })];
            });
        });
    };
    Analytics.prototype.addSourceMiddleware = function (fn) {
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1$5.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.queue.criticalTasks.run(function () { return tslib_1$5.__awaiter(_this, void 0, void 0, function () {
                            var sourceMiddlewarePlugin, integrations, plugin;
                            return tslib_1$5.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1$5.__importStar(middleware); })];
                                    case 1:
                                        sourceMiddlewarePlugin = (_a.sent()).sourceMiddlewarePlugin;
                                        integrations = {};
                                        this.queue.plugins.forEach(function (plugin) {
                                            if (plugin.type === 'destination') {
                                                return (integrations[plugin.name] = true);
                                            }
                                        });
                                        plugin = sourceMiddlewarePlugin(fn, integrations);
                                        return [4 /*yield*/, this.register(plugin)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    /* TODO: This does not have to return a promise? */
    Analytics.prototype.addDestinationMiddleware = function (integrationName) {
        var middlewares = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            middlewares[_i - 1] = arguments[_i];
        }
        var legacyDestinations = this.queue.plugins.filter(function (xt) { return xt.name.toLowerCase() === integrationName.toLowerCase(); });
        legacyDestinations.forEach(function (destination) {
            destination.addMiddleware.apply(destination, middlewares);
        });
        return Promise.resolve(this);
    };
    Analytics.prototype.setAnonymousId = function (id) {
        return this._user.anonymousId(id);
    };
    Analytics.prototype.queryString = function (query) {
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            var queryString;
            return tslib_1$5.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.options.useQueryString === false) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1$5.__importStar(requireQueryString()); })];
                    case 1:
                        queryString = (_a.sent()).queryString;
                        return [2 /*return*/, queryString(this, query)];
                }
            });
        });
    };
    /**
     * @deprecated This function does not register a destination plugin.
     *
     * Instantiates a legacy Analytics.js destination.
     *
     * This function does not register the destination as an Analytics.JS plugin,
     * all the it does it to invoke the factory function back.
     */
    Analytics.prototype.use = function (legacyPluginFactory) {
        legacyPluginFactory(this);
        return this;
    };
    Analytics.prototype.ready = function (callback) {
        if (callback === void 0) { callback = function (res) { return res; }; }
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            return tslib_1$5.__generator(this, function (_a) {
                return [2 /*return*/, Promise.all(this.queue.plugins.map(function (i) { return (i.ready ? i.ready() : Promise.resolve()); })).then(function (res) {
                        callback(res);
                        return res;
                    })];
            });
        });
    };
    // analytics-classic api
    Analytics.prototype.noConflict = function () {
        console.warn(deprecationWarning);
        (0, global_analytics_helper_1$1.setGlobalAnalytics)(_analytics !== null && _analytics !== void 0 ? _analytics : this);
        return this;
    };
    Analytics.prototype.normalize = function (msg) {
        console.warn(deprecationWarning);
        return this.eventFactory.normalize(msg);
    };
    Object.defineProperty(Analytics.prototype, "failedInitializations", {
        get: function () {
            console.warn(deprecationWarning);
            return this.queue.failedInitializations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Analytics.prototype, "VERSION", {
        get: function () {
            return version_1$1.version;
        },
        enumerable: false,
        configurable: true
    });
    /* @deprecated - noop */
    Analytics.prototype.initialize = function (_settings, _options) {
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            return tslib_1$5.__generator(this, function (_a) {
                console.warn(deprecationWarning);
                return [2 /*return*/, Promise.resolve(this)];
            });
        });
    };
    Analytics.prototype.pageview = function (url) {
        return tslib_1$5.__awaiter(this, void 0, void 0, function () {
            return tslib_1$5.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn(deprecationWarning);
                        return [4 /*yield*/, this.page({ path: url })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Object.defineProperty(Analytics.prototype, "plugins", {
        get: function () {
            var _a;
            console.warn(deprecationWarning);
            // @ts-expect-error
            return (_a = this._plugins) !== null && _a !== void 0 ? _a : {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Analytics.prototype, "Integrations", {
        get: function () {
            console.warn(deprecationWarning);
            var integrations = this.queue.plugins
                .filter(function (plugin) { return plugin.type === 'destination'; })
                .reduce(function (acc, plugin) {
                var name = "".concat(plugin.name
                    .toLowerCase()
                    .replace('.', '')
                    .split(' ')
                    .join('-'), "Integration");
                // @ts-expect-error
                var integration = window[name];
                if (!integration) {
                    return acc;
                }
                var nested = integration.Integration; // hack - Google Analytics function resides in the "Integration" field
                if (nested) {
                    acc[plugin.name] = nested;
                    return acc;
                }
                acc[plugin.name] = integration;
                return acc;
            }, {});
            return integrations;
        },
        enumerable: false,
        configurable: true
    });
    // snippet function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Analytics.prototype.push = function (args) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var an = this;
        var method = args.shift();
        if (method) {
            if (!an[method])
                return;
        }
        an[method].apply(this, args);
    };
    return Analytics;
}(analytics_generic_utils_1$1.Emitter));
analytics.Analytics = Analytics;
/**
 * @returns a no-op analytics instance that does not create cookies or localstorage, or send any events to segment.
 */
var NullAnalytics = /** @class */ (function (_super) {
    tslib_1$5.__extends(NullAnalytics, _super);
    function NullAnalytics() {
        var _this = _super.call(this, { writeKey: '' }, { disableClientPersistence: true }) || this;
        _this.initialized = true;
        return _this;
    }
    return NullAnalytics;
}(Analytics));
analytics.NullAnalytics = NullAnalytics;

var mergedOptions$1 = {};

Object.defineProperty(mergedOptions$1, "__esModule", { value: true });
mergedOptions$1.mergedOptions = void 0;
var tslib_1$4 = require$$0$2;
/**
 * Merge legacy settings and initialized Integration option overrides.
 *
 * This will merge any options that were passed from initialization into
 * overrides for settings that are returned by the Segment CDN.
 *
 * i.e. this allows for passing options directly into destinations from
 * the Analytics constructor.
 */
function mergedOptions(settings, options) {
    var _a;
    var optionOverrides = Object.entries((_a = options.integrations) !== null && _a !== void 0 ? _a : {}).reduce(function (overrides, _a) {
        var _b, _c;
        var integration = _a[0], options = _a[1];
        if (typeof options === 'object') {
            return tslib_1$4.__assign(tslib_1$4.__assign({}, overrides), (_b = {}, _b[integration] = options, _b));
        }
        return tslib_1$4.__assign(tslib_1$4.__assign({}, overrides), (_c = {}, _c[integration] = {}, _c));
    }, {});
    return Object.entries(settings.integrations).reduce(function (integrationSettings, _a) {
        var _b;
        var integration = _a[0], settings = _a[1];
        return tslib_1$4.__assign(tslib_1$4.__assign({}, integrationSettings), (_b = {}, _b[integration] = tslib_1$4.__assign(tslib_1$4.__assign({}, settings), optionOverrides[integration]), _b));
    }, {});
}
mergedOptions$1.mergedOptions = mergedOptions;

var envEnrichment = {};

var clientHints = {};

var hasRequiredClientHints;

function requireClientHints () {
	if (hasRequiredClientHints) return clientHints;
	hasRequiredClientHints = 1;
	Object.defineProperty(clientHints, "__esModule", { value: true });
	clientHints.clientHints = void 0;
	var tslib_1 = require$$0$2;
	function clientHints$1(hints) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var userAgentData;
	        return tslib_1.__generator(this, function (_a) {
	            userAgentData = navigator.userAgentData;
	            if (!userAgentData)
	                return [2 /*return*/, undefined];
	            if (!hints)
	                return [2 /*return*/, userAgentData.toJSON()];
	            return [2 /*return*/, userAgentData
	                    .getHighEntropyValues(hints)
	                    .catch(function () { return userAgentData.toJSON(); })];
	        });
	    });
	}
	clientHints.clientHints = clientHints$1;
	
	return clientHints;
}

Object.defineProperty(envEnrichment, "__esModule", { value: true });
envEnrichment.envEnrichment = envEnrichment.ampId = envEnrichment.utm = void 0;
var tslib_1$3 = require$$0$2;
var js_cookie_1 = tslib_1$3.__importDefault(requireJs_cookie());
var version_1 = version;
var version_type_1 = requireVersionType();
var tld_1 = requireTld();
var gracefulDecodeURIComponent_1 = requireGracefulDecodeURIComponent();
var storage_1 = requireStorage();
var client_hints_1 = requireClientHints();
var cookieOptions;
function getCookieOptions() {
    if (cookieOptions) {
        return cookieOptions;
    }
    var domain = (0, tld_1.tld)(window.location.href);
    cookieOptions = {
        expires: 31536000000,
        secure: false,
        path: '/',
    };
    if (domain) {
        cookieOptions.domain = domain;
    }
    return cookieOptions;
}
function ads(query) {
    var queryIds = {
        btid: 'dataxu',
        urid: 'millennial-media',
    };
    if (query.startsWith('?')) {
        query = query.substring(1);
    }
    query = query.replace(/\?/g, '&');
    var parts = query.split('&');
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var part = parts_1[_i];
        var _a = part.split('='), k = _a[0], v = _a[1];
        if (queryIds[k]) {
            return {
                id: v,
                type: queryIds[k],
            };
        }
    }
}
function utm(query) {
    if (query.startsWith('?')) {
        query = query.substring(1);
    }
    query = query.replace(/\?/g, '&');
    return query.split('&').reduce(function (acc, str) {
        var _a = str.split('='), k = _a[0], _b = _a[1], v = _b === void 0 ? '' : _b;
        if (k.includes('utm_') && k.length > 4) {
            var utmParam = k.slice(4);
            if (utmParam === 'campaign') {
                utmParam = 'name';
            }
            acc[utmParam] = (0, gracefulDecodeURIComponent_1.gracefulDecodeURIComponent)(v);
        }
        return acc;
    }, {});
}
envEnrichment.utm = utm;
function ampId() {
    var ampId = js_cookie_1.default.get('_ga');
    if (ampId && ampId.startsWith('amp')) {
        return ampId;
    }
}
envEnrichment.ampId = ampId;
function referrerId(query, ctx, disablePersistance) {
    var _a;
    var storage = new storage_1.UniversalStorage(disablePersistance ? [] : [new storage_1.CookieStorage(getCookieOptions())]);
    var stored = storage.get('s:context.referrer');
    var ad = (_a = ads(query)) !== null && _a !== void 0 ? _a : stored;
    if (!ad) {
        return;
    }
    if (ctx) {
        ctx.referrer = tslib_1$3.__assign(tslib_1$3.__assign({}, ctx.referrer), ad);
    }
    storage.set('s:context.referrer', ad);
}
/**
 *
 * @param obj e.g. { foo: 'b', bar: 'd', baz: ['123', '456']}
 * @returns e.g. 'foo=b&bar=d&baz=123&baz=456'
 */
var objectToQueryString = function (obj) {
    try {
        var searchParams_1 = new URLSearchParams();
        Object.entries(obj).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            if (Array.isArray(v)) {
                v.forEach(function (value) { return searchParams_1.append(k, value); });
            }
            else {
                searchParams_1.append(k, v);
            }
        });
        return searchParams_1.toString();
    }
    catch (_a) {
        return '';
    }
};
var EnvironmentEnrichmentPlugin = /** @class */ (function () {
    function EnvironmentEnrichmentPlugin() {
        var _this = this;
        this.name = 'Page Enrichment';
        this.type = 'before';
        this.version = '0.1.0';
        this.isLoaded = function () { return true; };
        this.load = function (_ctx, instance) { return tslib_1$3.__awaiter(_this, void 0, void 0, function () {
            var _a;
            return tslib_1$3.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.instance = instance;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, (0, client_hints_1.clientHints)(this.instance.options.highEntropyValuesClientHints)];
                    case 2:
                        _a.userAgentData = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve()];
                }
            });
        }); };
        this.enrich = function (ctx) {
            var _a, _b;
            // Note: Types are off - context should never be undefined here, since it is set as part of event creation.
            var evtCtx = ctx.event.context;
            var search = evtCtx.page.search || '';
            var query = typeof search === 'object' ? objectToQueryString(search) : search;
            evtCtx.userAgent = navigator.userAgent;
            evtCtx.userAgentData = _this.userAgentData;
            // @ts-ignore
            var locale = navigator.userLanguage || navigator.language;
            if (typeof evtCtx.locale === 'undefined' && typeof locale !== 'undefined') {
                evtCtx.locale = locale;
            }
            (_a = evtCtx.library) !== null && _a !== void 0 ? _a : (evtCtx.library = {
                name: 'analytics.js',
                version: "".concat((0, version_type_1.getVersionType)() === 'web' ? 'next' : 'npm:next', "-").concat(version_1.version),
            });
            if (query && !evtCtx.campaign) {
                evtCtx.campaign = utm(query);
            }
            var amp = ampId();
            if (amp) {
                evtCtx.amp = { id: amp };
            }
            referrerId(query, evtCtx, (_b = _this.instance.options.disableClientPersistence) !== null && _b !== void 0 ? _b : false);
            try {
                evtCtx.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            }
            catch (_) {
                // If browser doesn't have support leave timezone undefined
            }
            return ctx;
        };
        this.track = this.enrich;
        this.identify = this.enrich;
        this.page = this.enrich;
        this.group = this.enrich;
        this.alias = this.enrich;
        this.screen = this.enrich;
    }
    return EnvironmentEnrichmentPlugin;
}());
envEnrichment.envEnrichment = new EnvironmentEnrichmentPlugin();

var remoteLoader$1 = {};

var loadScript$1 = {};

Object.defineProperty(loadScript$1, "__esModule", { value: true });
loadScript$1.unloadScript = loadScript$1.loadScript = void 0;
function findScript(src) {
    var scripts = Array.prototype.slice.call(window.document.querySelectorAll('script'));
    return scripts.find(function (s) { return s.src === src; });
}
function loadScript(src, attributes) {
    var found = findScript(src);
    if (found !== undefined) {
        var status_1 = found === null || found === void 0 ? void 0 : found.getAttribute('status');
        if (status_1 === 'loaded') {
            return Promise.resolve(found);
        }
        if (status_1 === 'loading') {
            return new Promise(function (resolve, reject) {
                found.addEventListener('load', function () { return resolve(found); });
                found.addEventListener('error', function (err) { return reject(err); });
            });
        }
    }
    return new Promise(function (resolve, reject) {
        var _a;
        var script = window.document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        script.setAttribute('status', 'loading');
        for (var _i = 0, _b = Object.entries(attributes !== null && attributes !== void 0 ? attributes : {}); _i < _b.length; _i++) {
            var _c = _b[_i], k = _c[0], v = _c[1];
            script.setAttribute(k, v);
        }
        script.onload = function () {
            script.onerror = script.onload = null;
            script.setAttribute('status', 'loaded');
            resolve(script);
        };
        script.onerror = function () {
            script.onerror = script.onload = null;
            script.setAttribute('status', 'error');
            reject(new Error("Failed to load ".concat(src)));
        };
        var tag = window.document.getElementsByTagName('script')[0];
        (_a = tag.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(script, tag);
    });
}
loadScript$1.loadScript = loadScript;
function unloadScript(src) {
    var found = findScript(src);
    if (found !== undefined) {
        found.remove();
    }
    return Promise.resolve();
}
loadScript$1.unloadScript = unloadScript;

var metricHelpers = {};

Object.defineProperty(metricHelpers, "__esModule", { value: true });
metricHelpers.recordIntegrationMetric = void 0;
function recordIntegrationMetric(ctx, _a) {
    var methodName = _a.methodName, integrationName = _a.integrationName, type = _a.type, _b = _a.didError, didError = _b === void 0 ? false : _b;
    ctx.stats.increment("analytics_js.integration.invoke".concat(didError ? '.error' : ''), 1, [
        "method:".concat(methodName),
        "integration_name:".concat(integrationName),
        "type:".concat(type),
    ]);
}
metricHelpers.recordIntegrationMetric = recordIntegrationMetric;

Object.defineProperty(remoteLoader$1, "__esModule", { value: true });
remoteLoader$1.remoteLoader = remoteLoader$1.ActionDestination = void 0;
var tslib_1$2 = require$$0$2;
var load_script_1 = loadScript$1;
var parse_cdn_1$1 = parseCdn;
var middleware_1 = middleware;
var context_1$1 = context;
var metric_helpers_1 = metricHelpers;
var ActionDestination = /** @class */ (function () {
    function ActionDestination(name, action) {
        this.version = '1.0.0';
        this.alternativeNames = [];
        this.middleware = [];
        this.alias = this._createMethod('alias');
        this.group = this._createMethod('group');
        this.identify = this._createMethod('identify');
        this.page = this._createMethod('page');
        this.screen = this._createMethod('screen');
        this.track = this._createMethod('track');
        this.action = action;
        this.name = name;
        this.type = action.type;
        this.alternativeNames.push(action.name);
    }
    ActionDestination.prototype.addMiddleware = function () {
        var _a;
        var fn = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fn[_i] = arguments[_i];
        }
        if (this.type === 'destination') {
            (_a = this.middleware).push.apply(_a, fn);
        }
    };
    ActionDestination.prototype.transform = function (ctx) {
        return tslib_1$2.__awaiter(this, void 0, void 0, function () {
            var modifiedEvent;
            return tslib_1$2.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, middleware_1.applyDestinationMiddleware)(this.name, ctx.event, this.middleware)];
                    case 1:
                        modifiedEvent = _a.sent();
                        if (modifiedEvent === null) {
                            ctx.cancel(new context_1$1.ContextCancelation({
                                retry: false,
                                reason: 'dropped by destination middleware',
                            }));
                        }
                        return [2 /*return*/, new context_1$1.Context(modifiedEvent)];
                }
            });
        });
    };
    ActionDestination.prototype._createMethod = function (methodName) {
        var _this = this;
        return function (ctx) { return tslib_1$2.__awaiter(_this, void 0, void 0, function () {
            var transformedContext, error_1;
            return tslib_1$2.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.action[methodName])
                            return [2 /*return*/, ctx];
                        transformedContext = ctx;
                        if (!(this.type === 'destination')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.transform(ctx)];
                    case 1:
                        transformedContext = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        (0, metric_helpers_1.recordIntegrationMetric)(ctx, {
                            integrationName: this.action.name,
                            methodName: methodName,
                            type: 'action',
                        });
                        return [4 /*yield*/, this.action[methodName](transformedContext)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        (0, metric_helpers_1.recordIntegrationMetric)(ctx, {
                            integrationName: this.action.name,
                            methodName: methodName,
                            type: 'action',
                            didError: true,
                        });
                        throw error_1;
                    case 5: return [2 /*return*/, ctx];
                }
            });
        }); };
    };
    /* --- PASSTHROUGH METHODS --- */
    ActionDestination.prototype.isLoaded = function () {
        return this.action.isLoaded();
    };
    ActionDestination.prototype.ready = function () {
        return this.action.ready ? this.action.ready() : Promise.resolve();
    };
    ActionDestination.prototype.load = function (ctx, analytics) {
        return tslib_1$2.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1$2.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        (0, metric_helpers_1.recordIntegrationMetric)(ctx, {
                            integrationName: this.action.name,
                            methodName: 'load',
                            type: 'action',
                        });
                        return [4 /*yield*/, this.action.load(ctx, analytics)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        (0, metric_helpers_1.recordIntegrationMetric)(ctx, {
                            integrationName: this.action.name,
                            methodName: 'load',
                            type: 'action',
                            didError: true,
                        });
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ActionDestination.prototype.unload = function (ctx, analytics) {
        var _a, _b;
        return (_b = (_a = this.action).unload) === null || _b === void 0 ? void 0 : _b.call(_a, ctx, analytics);
    };
    return ActionDestination;
}());
remoteLoader$1.ActionDestination = ActionDestination;
function validate$1(pluginLike) {
    if (!Array.isArray(pluginLike)) {
        throw new Error('Not a valid list of plugins');
    }
    var required = ['load', 'isLoaded', 'name', 'version', 'type'];
    pluginLike.forEach(function (plugin) {
        required.forEach(function (method) {
            var _a;
            if (plugin[method] === undefined) {
                throw new Error("Plugin: ".concat((_a = plugin.name) !== null && _a !== void 0 ? _a : 'unknown', " missing required function ").concat(method));
            }
        });
    });
    return true;
}
function isPluginDisabled(userIntegrations, remotePlugin) {
    var creationNameEnabled = userIntegrations[remotePlugin.creationName];
    var currentNameEnabled = userIntegrations[remotePlugin.name];
    // Check that the plugin isn't explicitly enabled when All: false
    if (userIntegrations.All === false &&
        !creationNameEnabled &&
        !currentNameEnabled) {
        return true;
    }
    // Check that the plugin isn't explicitly disabled
    if (creationNameEnabled === false || currentNameEnabled === false) {
        return true;
    }
    return false;
}
function loadPluginFactory(remotePlugin, obfuscate) {
    return tslib_1$2.__awaiter(this, void 0, void 0, function () {
        var defaultCdn, cdn, urlSplit, name_1, obfuscatedURL;
        return tslib_1$2.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    defaultCdn = new RegExp('https://cdn.segment.(com|build)');
                    cdn = (0, parse_cdn_1$1.getCDN)();
                    if (!obfuscate) return [3 /*break*/, 6];
                    urlSplit = remotePlugin.url.split('/');
                    name_1 = urlSplit[urlSplit.length - 2];
                    obfuscatedURL = remotePlugin.url.replace(name_1, btoa(name_1).replace(/=/g, ''));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, (0, load_script_1.loadScript)(obfuscatedURL.replace(defaultCdn, cdn))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    _a.sent();
                    // Due to syncing concerns it is possible that the obfuscated action destination (or requested version) might not exist.
                    // We should use the unobfuscated version as a fallback.
                    return [4 /*yield*/, (0, load_script_1.loadScript)(remotePlugin.url.replace(defaultCdn, cdn))];
                case 4:
                    // Due to syncing concerns it is possible that the obfuscated action destination (or requested version) might not exist.
                    // We should use the unobfuscated version as a fallback.
                    _a.sent();
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, (0, load_script_1.loadScript)(remotePlugin.url.replace(defaultCdn, cdn))];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    // @ts-expect-error
                    if (typeof window[remotePlugin.libraryName] === 'function') {
                        // @ts-expect-error
                        return [2 /*return*/, window[remotePlugin.libraryName]];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function remoteLoader(settings, userIntegrations, mergedIntegrations, obfuscate, routingMiddleware, pluginSources) {
    var _a, _b, _c;
    return tslib_1$2.__awaiter(this, void 0, void 0, function () {
        var allPlugins, routingRules, pluginPromises;
        var _this = this;
        return tslib_1$2.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    allPlugins = [];
                    routingRules = (_b = (_a = settings.middlewareSettings) === null || _a === void 0 ? void 0 : _a.routingRules) !== null && _b !== void 0 ? _b : [];
                    pluginPromises = ((_c = settings.remotePlugins) !== null && _c !== void 0 ? _c : []).map(function (remotePlugin) { return tslib_1$2.__awaiter(_this, void 0, void 0, function () {
                        var pluginFactory, _a, plugin, plugins, routing_1, error_4;
                        return tslib_1$2.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (isPluginDisabled(userIntegrations, remotePlugin))
                                        return [2 /*return*/];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 6, , 7]);
                                    _a = (pluginSources === null || pluginSources === void 0 ? void 0 : pluginSources.find(function (_a) {
                                        var pluginName = _a.pluginName;
                                        return pluginName === remotePlugin.name;
                                    }));
                                    if (_a) return [3 /*break*/, 3];
                                    return [4 /*yield*/, loadPluginFactory(remotePlugin, obfuscate)];
                                case 2:
                                    _a = (_b.sent());
                                    _b.label = 3;
                                case 3:
                                    pluginFactory = _a;
                                    if (!pluginFactory) return [3 /*break*/, 5];
                                    return [4 /*yield*/, pluginFactory(tslib_1$2.__assign(tslib_1$2.__assign({}, remotePlugin.settings), mergedIntegrations[remotePlugin.name]))];
                                case 4:
                                    plugin = _b.sent();
                                    plugins = Array.isArray(plugin) ? plugin : [plugin];
                                    validate$1(plugins);
                                    routing_1 = routingRules.filter(function (rule) { return rule.destinationName === remotePlugin.creationName; });
                                    plugins.forEach(function (plugin) {
                                        var wrapper = new ActionDestination(remotePlugin.creationName, plugin);
                                        /** Make sure we only apply destination filters to actions of the "destination" type to avoid causing issues for hybrid destinations */
                                        if (routing_1.length &&
                                            routingMiddleware &&
                                            plugin.type === 'destination') {
                                            wrapper.addMiddleware(routingMiddleware);
                                        }
                                        allPlugins.push(wrapper);
                                    });
                                    _b.label = 5;
                                case 5: return [3 /*break*/, 7];
                                case 6:
                                    error_4 = _b.sent();
                                    console.warn('Failed to load Remote Plugin', error_4);
                                    return [3 /*break*/, 7];
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(pluginPromises)];
                case 1:
                    _d.sent();
                    return [2 /*return*/, allPlugins.filter(Boolean)];
            }
        });
    });
}
remoteLoader$1.remoteLoader = remoteLoader;

var segmentio$1 = {};

var batchedDispatcher = {};

var onPageChange = {};

var hasRequiredOnPageChange;

function requireOnPageChange () {
	if (hasRequiredOnPageChange) return onPageChange;
	hasRequiredOnPageChange = 1;
	Object.defineProperty(onPageChange, "__esModule", { value: true });
	onPageChange.onPageChange = void 0;
	/**
	 * Register event listener on document that fires when:
	 * * tab change or tab close (in mobile or desktop)
	 * * click back / forward button
	 * * click any link or perform any other navigation action
	 * * soft refresh / hard refresh
	 *
	 * adapted from https://stackoverflow.com/questions/3239834/window-onbeforeunload-not-working-on-the-ipad/52864508#52864508,
	 */
	var onPageChange$1 = function (cb) {
	    var unloaded = false; // prevents double firing if both are supported
	    window.addEventListener('pagehide', function () {
	        if (unloaded)
	            return;
	        unloaded = true;
	        cb(unloaded);
	    });
	    // using document instead of window because of bug affecting browsers before safari 14 (detail in footnotes https://caniuse.com/?search=visibilitychange)
	    document.addEventListener('visibilitychange', function () {
	        if (document.visibilityState == 'hidden') {
	            if (unloaded)
	                return;
	            unloaded = true;
	        }
	        else {
	            unloaded = false;
	        }
	        cb(unloaded);
	    });
	};
	onPageChange.onPageChange = onPageChange$1;
	
	return onPageChange;
}

var hasRequiredBatchedDispatcher;

function requireBatchedDispatcher () {
	if (hasRequiredBatchedDispatcher) return batchedDispatcher;
	hasRequiredBatchedDispatcher = 1;
	Object.defineProperty(batchedDispatcher, "__esModule", { value: true });
	var tslib_1 = require$$0$2;
	var fetch_1 = fetch$2;
	var on_page_change_1 = requireOnPageChange();
	var MAX_PAYLOAD_SIZE = 500;
	function kilobytes(buffer) {
	    var size = encodeURI(JSON.stringify(buffer)).split(/%..|./).length - 1;
	    return size / 1024;
	}
	/**
	 * Checks if the payload is over or close to
	 * the maximum payload size allowed by tracking
	 * API.
	 */
	function approachingTrackingAPILimit(buffer) {
	    return kilobytes(buffer) >= MAX_PAYLOAD_SIZE - 50;
	}
	function chunks(batch) {
	    var result = [];
	    var index = 0;
	    batch.forEach(function (item) {
	        var size = kilobytes(result[index]);
	        if (size >= 64) {
	            index++;
	        }
	        if (result[index]) {
	            result[index].push(item);
	        }
	        else {
	            result[index] = [item];
	        }
	    });
	    return result;
	}
	function batch(apiHost, config) {
	    var _a, _b;
	    var buffer = [];
	    var pageUnloaded = false;
	    var limit = (_a = config === null || config === void 0 ? void 0 : config.size) !== null && _a !== void 0 ? _a : 10;
	    var timeout = (_b = config === null || config === void 0 ? void 0 : config.timeout) !== null && _b !== void 0 ? _b : 5000;
	    function sendBatch(batch) {
	        var _a;
	        if (batch.length === 0) {
	            return;
	        }
	        var writeKey = (_a = batch[0]) === null || _a === void 0 ? void 0 : _a.writeKey;
	        // Remove sentAt from every event as batching only needs a single timestamp
	        var updatedBatch = batch.map(function (event) {
	            var _a = event; _a.sentAt; var newEvent = tslib_1.__rest(_a, ["sentAt"]);
	            return newEvent;
	        });
	        return (0, fetch_1.fetch)("https://".concat(apiHost, "/b"), {
	            keepalive: pageUnloaded,
	            headers: {
	                'Content-Type': 'text/plain',
	            },
	            method: 'post',
	            body: JSON.stringify({
	                writeKey: writeKey,
	                batch: updatedBatch,
	                sentAt: new Date().toISOString(),
	            }),
	        });
	    }
	    function flush() {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var batch_1;
	            return tslib_1.__generator(this, function (_a) {
	                if (buffer.length) {
	                    batch_1 = buffer;
	                    buffer = [];
	                    return [2 /*return*/, sendBatch(batch_1)];
	                }
	                return [2 /*return*/];
	            });
	        });
	    }
	    var schedule;
	    function scheduleFlush() {
	        if (schedule) {
	            return;
	        }
	        schedule = setTimeout(function () {
	            schedule = undefined;
	            flush().catch(console.error);
	        }, timeout);
	    }
	    (0, on_page_change_1.onPageChange)(function (unloaded) {
	        pageUnloaded = unloaded;
	        if (pageUnloaded && buffer.length) {
	            var reqs = chunks(buffer).map(sendBatch);
	            Promise.all(reqs).catch(console.error);
	        }
	    });
	    function dispatch(_url, body) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var bufferOverflow;
	            return tslib_1.__generator(this, function (_a) {
	                buffer.push(body);
	                bufferOverflow = buffer.length >= limit || approachingTrackingAPILimit(buffer);
	                return [2 /*return*/, bufferOverflow || pageUnloaded ? flush() : scheduleFlush()];
	            });
	        });
	    }
	    return {
	        dispatch: dispatch,
	    };
	}
	batchedDispatcher.default = batch;
	
	return batchedDispatcher;
}

var fetchDispatcher = {};

var hasRequiredFetchDispatcher;

function requireFetchDispatcher () {
	if (hasRequiredFetchDispatcher) return fetchDispatcher;
	hasRequiredFetchDispatcher = 1;
	Object.defineProperty(fetchDispatcher, "__esModule", { value: true });
	var fetch_1 = fetch$2;
	function default_1(config) {
	    function dispatch(url, body) {
	        return (0, fetch_1.fetch)(url, {
	            keepalive: config === null || config === void 0 ? void 0 : config.keepalive,
	            headers: { 'Content-Type': 'text/plain' },
	            method: 'post',
	            body: JSON.stringify(body),
	        });
	    }
	    return {
	        dispatch: dispatch,
	    };
	}
	fetchDispatcher.default = default_1;
	
	return fetchDispatcher;
}

var normalize = {};

var hasRequiredNormalize;

function requireNormalize () {
	if (hasRequiredNormalize) return normalize;
	hasRequiredNormalize = 1;
	Object.defineProperty(normalize, "__esModule", { value: true });
	normalize.normalize = void 0;
	var tslib_1 = require$$0$2;
	function normalize$1(analytics, json, settings, integrations) {
	    var _a;
	    var user = analytics.user();
	    delete json.options;
	    json.writeKey = settings === null || settings === void 0 ? void 0 : settings.apiKey;
	    json.userId = json.userId || user.id();
	    json.anonymousId = json.anonymousId || user.anonymousId();
	    json.sentAt = new Date();
	    var failed = analytics.queue.failedInitializations || [];
	    if (failed.length > 0) {
	        json._metadata = { failedInitializations: failed };
	    }
	    var bundled = [];
	    var unbundled = [];
	    for (var key in integrations) {
	        var integration = integrations[key];
	        if (key === 'Segment.io') {
	            bundled.push(key);
	        }
	        if (integration.bundlingStatus === 'bundled') {
	            bundled.push(key);
	        }
	        if (integration.bundlingStatus === 'unbundled') {
	            unbundled.push(key);
	        }
	    }
	    // This will make sure that the disabled cloud mode destinations will be
	    // included in the unbundled list.
	    for (var _i = 0, _b = (settings === null || settings === void 0 ? void 0 : settings.unbundledIntegrations) || []; _i < _b.length; _i++) {
	        var settingsUnbundled = _b[_i];
	        if (!unbundled.includes(settingsUnbundled)) {
	            unbundled.push(settingsUnbundled);
	        }
	    }
	    var configIds = (_a = settings === null || settings === void 0 ? void 0 : settings.maybeBundledConfigIds) !== null && _a !== void 0 ? _a : {};
	    var bundledConfigIds = [];
	    bundled.sort().forEach(function (name) {
	        var _a;
	        ((_a = configIds[name]) !== null && _a !== void 0 ? _a : []).forEach(function (id) {
	            bundledConfigIds.push(id);
	        });
	    });
	    if ((settings === null || settings === void 0 ? void 0 : settings.addBundledMetadata) !== false) {
	        json._metadata = tslib_1.__assign(tslib_1.__assign({}, json._metadata), { bundled: bundled.sort(), unbundled: unbundled.sort(), bundledIds: bundledConfigIds });
	    }
	    return json;
	}
	normalize.normalize = normalize$1;
	
	return normalize;
}

var scheduleFlush = {};

var pWhile = {};

var hasRequiredPWhile;

function requirePWhile () {
	if (hasRequiredPWhile) return pWhile;
	hasRequiredPWhile = 1;
	Object.defineProperty(pWhile, "__esModule", { value: true });
	pWhile.pWhile = void 0;
	var tslib_1 = require$$0$2;
	var pWhile$1 = function (condition, action) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	    var loop;
	    return tslib_1.__generator(this, function (_a) {
	        loop = function (actionResult) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
	            var _a;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        if (!condition(actionResult)) return [3 /*break*/, 2];
	                        _a = loop;
	                        return [4 /*yield*/, action()];
	                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
	                    case 2: return [2 /*return*/];
	                }
	            });
	        }); };
	        return [2 /*return*/, loop(undefined)];
	    });
	}); };
	pWhile.pWhile = pWhile$1;
	
	return pWhile;
}

var hasRequiredScheduleFlush;

function requireScheduleFlush () {
	if (hasRequiredScheduleFlush) return scheduleFlush;
	hasRequiredScheduleFlush = 1;
	Object.defineProperty(scheduleFlush, "__esModule", { value: true });
	scheduleFlush.scheduleFlush = void 0;
	var tslib_1 = require$$0$2;
	var connection_1 = connection;
	var context_1 = context;
	var analytics_core_1 = require$$5;
	var p_while_1 = requirePWhile();
	function flushQueue(xt, queue) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var failedQueue;
	        var _this = this;
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    failedQueue = [];
	                    if ((0, connection_1.isOffline)()) {
	                        return [2 /*return*/, queue];
	                    }
	                    return [4 /*yield*/, (0, p_while_1.pWhile)(function () { return queue.length > 0 && !(0, connection_1.isOffline)(); }, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                            var ctx, result, success;
	                            return tslib_1.__generator(this, function (_a) {
	                                switch (_a.label) {
	                                    case 0:
	                                        ctx = queue.pop();
	                                        if (!ctx) {
	                                            return [2 /*return*/];
	                                        }
	                                        return [4 /*yield*/, (0, analytics_core_1.attempt)(ctx, xt)];
	                                    case 1:
	                                        result = _a.sent();
	                                        success = result instanceof context_1.Context;
	                                        if (!success) {
	                                            failedQueue.push(ctx);
	                                        }
	                                        return [2 /*return*/];
	                                }
	                            });
	                        }); })
	                        // re-add failed tasks
	                    ];
	                case 1:
	                    _a.sent();
	                    // re-add failed tasks
	                    failedQueue.map(function (failed) { return queue.pushWithBackoff(failed); });
	                    return [2 /*return*/, queue];
	            }
	        });
	    });
	}
	function scheduleFlush$1(flushing, buffer, xt, scheduleFlush) {
	    var _this = this;
	    if (flushing) {
	        return;
	    }
	    // eslint-disable-next-line @typescript-eslint/no-misused-promises
	    setTimeout(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	        var isFlushing, newBuffer;
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    isFlushing = true;
	                    return [4 /*yield*/, flushQueue(xt, buffer)];
	                case 1:
	                    newBuffer = _a.sent();
	                    isFlushing = false;
	                    if (buffer.todo > 0) {
	                        scheduleFlush(isFlushing, newBuffer, xt, scheduleFlush);
	                    }
	                    return [2 /*return*/];
	            }
	        });
	    }); }, Math.random() * 5000);
	}
	scheduleFlush.scheduleFlush = scheduleFlush$1;
	
	return scheduleFlush;
}

Object.defineProperty(segmentio$1, "__esModule", { value: true });
segmentio$1.segmentio = void 0;
var tslib_1$1 = require$$0$2;
var connection_1 = connection;
var priority_queue_1 = priorityQueue;
var persisted_1 = persisted$1;
var to_facade_1 = toFacade$1;
var batched_dispatcher_1 = tslib_1$1.__importDefault(requireBatchedDispatcher());
var fetch_dispatcher_1 = tslib_1$1.__importDefault(requireFetchDispatcher());
var normalize_1 = requireNormalize();
var schedule_flush_1 = requireScheduleFlush();
var constants_1 = requireConstants();
function onAlias(analytics, json) {
    var _a, _b, _c, _d;
    var user = analytics.user();
    json.previousId =
        (_c = (_b = (_a = json.previousId) !== null && _a !== void 0 ? _a : json.from) !== null && _b !== void 0 ? _b : user.id()) !== null && _c !== void 0 ? _c : user.anonymousId();
    json.userId = (_d = json.userId) !== null && _d !== void 0 ? _d : json.to;
    delete json.from;
    delete json.to;
    return json;
}
function segmentio(analytics, settings, integrations) {
    var _a, _b, _c;
    // Attach `pagehide` before buffer is created so that inflight events are added
    // to the buffer before the buffer persists events in its own `pagehide` handler.
    window.addEventListener('pagehide', function () {
        buffer.push.apply(buffer, Array.from(inflightEvents));
        inflightEvents.clear();
    });
    var writeKey = (_a = settings === null || settings === void 0 ? void 0 : settings.apiKey) !== null && _a !== void 0 ? _a : '';
    var buffer = analytics.options.disableClientPersistence
        ? new priority_queue_1.PriorityQueue(analytics.queue.queue.maxAttempts, [])
        : new persisted_1.PersistedPriorityQueue(analytics.queue.queue.maxAttempts, "".concat(writeKey, ":dest-Segment.io"));
    var inflightEvents = new Set();
    var flushing = false;
    var apiHost = (_b = settings === null || settings === void 0 ? void 0 : settings.apiHost) !== null && _b !== void 0 ? _b : constants_1.SEGMENT_API_HOST;
    var protocol = (_c = settings === null || settings === void 0 ? void 0 : settings.protocol) !== null && _c !== void 0 ? _c : 'https';
    var remote = "".concat(protocol, "://").concat(apiHost);
    var deliveryStrategy = settings === null || settings === void 0 ? void 0 : settings.deliveryStrategy;
    var client = (deliveryStrategy === null || deliveryStrategy === void 0 ? void 0 : deliveryStrategy.strategy) === 'batching'
        ? (0, batched_dispatcher_1.default)(apiHost, deliveryStrategy.config)
        : (0, fetch_dispatcher_1.default)(deliveryStrategy === null || deliveryStrategy === void 0 ? void 0 : deliveryStrategy.config);
    function send(ctx) {
        return tslib_1$1.__awaiter(this, void 0, void 0, function () {
            var path, json;
            return tslib_1$1.__generator(this, function (_a) {
                if ((0, connection_1.isOffline)()) {
                    buffer.push(ctx);
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    (0, schedule_flush_1.scheduleFlush)(flushing, buffer, segmentio, schedule_flush_1.scheduleFlush);
                    return [2 /*return*/, ctx];
                }
                inflightEvents.add(ctx);
                path = ctx.event.type.charAt(0);
                json = (0, to_facade_1.toFacade)(ctx.event).json();
                if (ctx.event.type === 'track') {
                    delete json.traits;
                }
                if (ctx.event.type === 'alias') {
                    json = onAlias(analytics, json);
                }
                return [2 /*return*/, client
                        .dispatch("".concat(remote, "/").concat(path), (0, normalize_1.normalize)(analytics, json, settings, integrations))
                        .then(function () { return ctx; })
                        .catch(function () {
                        buffer.pushWithBackoff(ctx);
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        (0, schedule_flush_1.scheduleFlush)(flushing, buffer, segmentio, schedule_flush_1.scheduleFlush);
                        return ctx;
                    })
                        .finally(function () {
                        inflightEvents.delete(ctx);
                    })];
            });
        });
    }
    var segmentio = {
        name: 'Segment.io',
        type: 'after',
        version: '0.1.0',
        isLoaded: function () { return true; },
        load: function () { return Promise.resolve(); },
        track: send,
        identify: send,
        page: send,
        alias: send,
        group: send,
        screen: send,
    };
    // Buffer may already have items if they were previously stored in localStorage.
    // Start flushing them immediately.
    if (buffer.todo) {
        (0, schedule_flush_1.scheduleFlush)(flushing, buffer, segmentio, schedule_flush_1.scheduleFlush);
    }
    return segmentio;
}
segmentio$1.segmentio = segmentio;

var validation = {};

Object.defineProperty(validation, "__esModule", { value: true });
validation.validation = void 0;
var analytics_core_1 = require$$5;
function validate(ctx) {
    var _a;
    var event = ctx.event;
    (0, analytics_core_1.assertEventExists)(event);
    (0, analytics_core_1.assertEventType)(event);
    if (event.type === 'track') {
        (0, analytics_core_1.assertTrackEventName)(event);
    }
    var props = (_a = event.properties) !== null && _a !== void 0 ? _a : event.traits;
    if (event.type !== 'alias' && !(0, analytics_core_1.isPlainObject)(props)) {
        throw new analytics_core_1.ValidationError('.properties', 'is not an object');
    }
    (0, analytics_core_1.assertUserIdentity)(event);
    return ctx;
}
validation.validation = {
    name: 'Event Validation',
    type: 'before',
    version: '1.0.0',
    isLoaded: function () { return true; },
    load: function () { return Promise.resolve(); },
    track: validate,
    identify: validate,
    page: validate,
    alias: validate,
    group: validate,
    screen: validate,
};

var inspector = {};

var _a;
var _b;
Object.defineProperty(inspector, "__esModule", { value: true });
inspector.attachInspector = void 0;
var get_global_1 = requireGetGlobal();
var env = (0, get_global_1.getGlobal)();
// The code below assumes the inspector extension will use Object.assign
// to add the inspect interface on to this object reference (unless the
// extension code ran first and has already set up the variable)
var inspectorHost = ((_a = (_b = env)['__SEGMENT_INSPECTOR__']) !== null && _a !== void 0 ? _a : (_b['__SEGMENT_INSPECTOR__'] = {}));
var attachInspector = function (analytics) { var _a; return (_a = inspectorHost.attach) === null || _a === void 0 ? void 0 : _a.call(inspectorHost, analytics); };
inspector.attachInspector = attachInspector;

var routingMiddleware = {};

var dist = {};

var transformers = {};

for(var r=[],o=0;o<64;)r[o]=0|4294967296*Math.sin(++o%Math.PI);function index(t){var e,f,n,a=[e=1732584193,f=4023233417,~e,~f],c=[],h=unescape(encodeURI(t))+"",u=h.length;for(t=--u/4+2|15,c[--t]=8*u;~u;)c[u>>2]|=h.charCodeAt(u)<<8*u--;for(o=h=0;o<t;o+=16){for(u=a;h<64;u=[n=u[3],e+((n=u[0]+[e&f|~e&n,n&e|~n&f,e^f^n,f^(e|~n)][u=h>>4]+r[h]+~~c[o|15&[h,5*h+1,3*h+5,7*h][u]])<<(u=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*u+h++%4])|n>>>-u),e,f])e=0|u[1],f=u[2];for(h=4;h;)a[--h]+=u[h];}for(t="";h<32;)t+=(a[h>>3]>>4*(1^h++)&15).toString(16);return t}

var md5 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: index
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(md5);

function dlv_es(t,e,l,n,r){for(e=e.split?e.split("."):e,n=0;n<e.length;n++)t=t?t[e[n]]:r;return t===r?l:t}

var dlv_es$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: dlv_es
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(dlv_es$1);

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$G;
var hasRequiredLib$G;

function requireLib$G () {
	if (hasRequiredLib$G) return lib$G;
	hasRequiredLib$G = 1;

	/**
	* Double-precision floating-point positive infinity.
	*
	* @module @stdlib/constants-float64-pinf
	* @type {number}
	*
	* @example
	* var FLOAT64_PINF = require( '@stdlib/constants-float64-pinf' );
	* // returns Infinity
	*/


	// MAIN //

	/**
	* Double-precision floating-point positive infinity.
	*
	* ## Notes
	*
	* Double-precision floating-point positive infinity has the bit sequence
	*
	* ```binarystring
	* 0 11111111111 00000000000000000000 00000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {number}
	* @default Number.POSITIVE_INFINITY
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_PINF = Number.POSITIVE_INFINITY; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	lib$G = FLOAT64_PINF;
	return lib$G;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var number;
var hasRequiredNumber;

function requireNumber () {
	if (hasRequiredNumber) return number;
	hasRequiredNumber = 1;

	// EXPORTS //

	number = Number; // eslint-disable-line stdlib/require-globals
	return number;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$F;
var hasRequiredLib$F;

function requireLib$F () {
	if (hasRequiredLib$F) return lib$F;
	hasRequiredLib$F = 1;

	/**
	* Constructor which returns a `Number` object.
	*
	* @module @stdlib/number-ctor
	*
	* @example
	* var Number = require( '@stdlib/number-ctor' );
	*
	* var v = new Number( 10.0 );
	* // returns <Number>
	*/

	// MODULES //

	var Number = requireNumber();


	// EXPORTS //

	lib$F = Number;
	return lib$F;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$E;
var hasRequiredLib$E;

function requireLib$E () {
	if (hasRequiredLib$E) return lib$E;
	hasRequiredLib$E = 1;

	/**
	* Double-precision floating-point negative infinity.
	*
	* @module @stdlib/constants-float64-ninf
	* @type {number}
	*
	* @example
	* var FLOAT64_NINF = require( '@stdlib/constants-float64-ninf' );
	* // returns -Infinity
	*/

	// MODULES //

	var Number = requireLib$F();


	// MAIN //

	/**
	* Double-precision floating-point negative infinity.
	*
	* ## Notes
	*
	* Double-precision floating-point negative infinity has the bit sequence
	*
	* ```binarystring
	* 1 11111111111 00000000000000000000 00000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {number}
	* @default Number.NEGATIVE_INFINITY
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_NINF = Number.NEGATIVE_INFINITY;


	// EXPORTS //

	lib$E = FLOAT64_NINF;
	return lib$E;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$D;
var hasRequiredLib$D;

function requireLib$D () {
	if (hasRequiredLib$D) return lib$D;
	hasRequiredLib$D = 1;

	/**
	* The bias of a double-precision floating-point number's exponent.
	*
	* @module @stdlib/constants-float64-exponent-bias
	* @type {integer32}
	*
	* @example
	* var FLOAT64_EXPONENT_BIAS = require( '@stdlib/constants-float64-exponent-bias' );
	* // returns 1023
	*/


	// MAIN //

	/**
	* Bias of a double-precision floating-point number's exponent.
	*
	* ## Notes
	*
	* The bias can be computed via
	*
	* ```tex
	* \mathrm{bias} = 2^{k-1} - 1
	* ```
	*
	* where \\(k\\) is the number of bits in the exponent; here, \\(k = 11\\).
	*
	* @constant
	* @type {integer32}
	* @default 1023
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_EXPONENT_BIAS = 1023|0; // asm type annotation


	// EXPORTS //

	lib$D = FLOAT64_EXPONENT_BIAS;
	return lib$D;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$C;
var hasRequiredLib$C;

function requireLib$C () {
	if (hasRequiredLib$C) return lib$C;
	hasRequiredLib$C = 1;

	/**
	* The maximum biased base 2 exponent for a double-precision floating-point number.
	*
	* @module @stdlib/constants-float64-max-base2-exponent
	* @type {integer32}
	*
	* @example
	* var FLOAT64_MAX_BASE2_EXPONENT = require( '@stdlib/constants-float64-max-base2-exponent' );
	* // returns 1023
	*/


	// MAIN //

	/**
	* The maximum biased base 2 exponent for a double-precision floating-point number.
	*
	* ```text
	* 11111111110 => 2046 - BIAS = 1023
	* ```
	*
	* where `BIAS = 1023`.
	*
	* @constant
	* @type {integer32}
	* @default 1023
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_MAX_BASE2_EXPONENT = 1023|0; // asm type annotation


	// EXPORTS //

	lib$C = FLOAT64_MAX_BASE2_EXPONENT;
	return lib$C;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$B;
var hasRequiredLib$B;

function requireLib$B () {
	if (hasRequiredLib$B) return lib$B;
	hasRequiredLib$B = 1;

	/**
	* The maximum biased base 2 exponent for a subnormal double-precision floating-point number.
	*
	* @module @stdlib/constants-float64-max-base2-exponent-subnormal
	* @type {integer32}
	*
	* @example
	* var FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-max-base2-exponent-subnormal' );
	* // returns -1023
	*/


	// MAIN //

	/**
	* The maximum biased base 2 exponent for a subnormal double-precision floating-point number.
	*
	* ```text
	* 00000000000 => 0 - BIAS = -1023
	* ```
	*
	* where `BIAS = 1023`.
	*
	* @constant
	* @type {integer32}
	* @default -1023
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL = -1023|0; // asm type annotation


	// EXPORTS //

	lib$B = FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL;
	return lib$B;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$A;
var hasRequiredLib$A;

function requireLib$A () {
	if (hasRequiredLib$A) return lib$A;
	hasRequiredLib$A = 1;

	/**
	* The minimum biased base 2 exponent for a subnormal double-precision floating-point number.
	*
	* @module @stdlib/constants-float64-min-base2-exponent-subnormal
	* @type {integer32}
	*
	* @example
	* var FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-min-base2-exponent-subnormal' );
	* // returns -1074
	*/


	// MAIN //

	/**
	* The minimum biased base 2 exponent for a subnormal double-precision floating-point number.
	*
	* ```text
	* -(BIAS+(52-1)) = -(1023+51) = -1074
	* ```
	*
	* where `BIAS = 1023` and `52` is the number of digits in the significand.
	*
	* @constant
	* @type {integer32}
	* @default -1074
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL = -1074|0; // asm type annotation


	// EXPORTS //

	lib$A = FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL;
	return lib$A;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$l;
var hasRequiredMain$l;

function requireMain$l () {
	if (hasRequiredMain$l) return main$l;
	hasRequiredMain$l = 1;

	// MAIN //

	/**
	* Tests if a double-precision floating-point numeric value is `NaN`.
	*
	* @param {number} x - value to test
	* @returns {boolean} boolean indicating whether the value is `NaN`
	*
	* @example
	* var bool = isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan( 7.0 );
	* // returns false
	*/
	function isnan( x ) {
		return ( x !== x );
	}


	// EXPORTS //

	main$l = isnan;
	return main$l;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$z;
var hasRequiredLib$z;

function requireLib$z () {
	if (hasRequiredLib$z) return lib$z;
	hasRequiredLib$z = 1;

	/**
	* Test if a double-precision floating-point numeric value is `NaN`.
	*
	* @module @stdlib/math-base-assert-is-nan
	*
	* @example
	* var isnan = require( '@stdlib/math-base-assert-is-nan' );
	*
	* var bool = isnan( NaN );
	* // returns true
	*
	* bool = isnan( 7.0 );
	* // returns false
	*/

	// MODULES //

	var isnan = requireMain$l();


	// EXPORTS //

	lib$z = isnan;
	return lib$z;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$k;
var hasRequiredMain$k;

function requireMain$k () {
	if (hasRequiredMain$k) return main$k;
	hasRequiredMain$k = 1;

	// MODULES //

	var PINF = requireLib$G();
	var NINF = requireLib$E();


	// MAIN //

	/**
	* Tests if a double-precision floating-point numeric value is infinite.
	*
	* @param {number} x - value to test
	* @returns {boolean} boolean indicating whether the value is infinite
	*
	* @example
	* var bool = isInfinite( Infinity );
	* // returns true
	*
	* @example
	* var bool = isInfinite( -Infinity );
	* // returns true
	*
	* @example
	* var bool = isInfinite( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isInfinite( NaN );
	* // returns false
	*/
	function isInfinite( x ) {
		return (x === PINF || x === NINF);
	}


	// EXPORTS //

	main$k = isInfinite;
	return main$k;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$y;
var hasRequiredLib$y;

function requireLib$y () {
	if (hasRequiredLib$y) return lib$y;
	hasRequiredLib$y = 1;

	/**
	* Test if a double-precision floating-point numeric value is infinite.
	*
	* @module @stdlib/math-base-assert-is-infinite
	*
	* @example
	* var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
	*
	* var bool = isInfinite( Infinity );
	* // returns true
	*
	* bool = isInfinite( -Infinity );
	* // returns true
	*
	* bool = isInfinite( 5.0 );
	* // returns false
	*
	* bool = isInfinite( NaN );
	* // returns false
	*/

	// MODULES //

	var isInfinite = requireMain$k();


	// EXPORTS //

	lib$y = isInfinite;
	return lib$y;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$x;
var hasRequiredLib$x;

function requireLib$x () {
	if (hasRequiredLib$x) return lib$x;
	hasRequiredLib$x = 1;

	/**
	* High word mask for the sign bit of a double-precision floating-point number.
	*
	* @module @stdlib/constants-float64-high-word-sign-mask
	* @type {uinteger32}
	*
	* @example
	* var FLOAT64_HIGH_WORD_SIGN_MASK = require( '@stdlib/constants-float64-high-word-sign-mask' );
	* // returns 2147483648
	*/


	// MAIN //

	/**
	* High word mask for the sign bit of a double-precision floating-point number.
	*
	* ## Notes
	*
	* The high word mask for the sign bot of a double-precision floating-point number is an unsigned 32-bit integer with the value \\( 2147483648 \\), which corresponds to the bit sequence
	*
	* ```binarystring
	* 1 00000000000 00000000000000000000
	* ```
	*
	* @constant
	* @type {uinteger32}
	* @default 0x80000000
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_HIGH_WORD_SIGN_MASK = 0x80000000>>>0; // eslint-disable-line id-length


	// EXPORTS //

	lib$x = FLOAT64_HIGH_WORD_SIGN_MASK;
	return lib$x;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$w;
var hasRequiredLib$w;

function requireLib$w () {
	if (hasRequiredLib$w) return lib$w;
	hasRequiredLib$w = 1;

	/**
	* High word mask for excluding the sign bit of a double-precision floating-point number.
	*
	* @module @stdlib/constants-float64-high-word-abs-mask
	* @type {uinteger32}
	*
	* @example
	* var FLOAT64_HIGH_WORD_ABS_MASK = require( '@stdlib/constants-float64-high-word-abs-mask' );
	* // returns 2147483647
	*/


	// MAIN //

	/**
	* High word mask for excluding the sign bit of a double-precision floating-point number.
	*
	* ## Notes
	*
	* The high word mask for excluding the sign bit of a double-precision floating-point number is an unsigned 32-bit integer with the value \\( 2147483647 \\), which corresponds to the bit sequence
	*
	* ```binarystring
	* 0 11111111111 11111111111111111111
	* ```
	*
	* @constant
	* @type {uinteger32}
	* @default 0x7fffffff
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_HIGH_WORD_ABS_MASK = 0x7fffffff>>>0; // eslint-disable-line id-length


	// EXPORTS //

	lib$w = FLOAT64_HIGH_WORD_ABS_MASK;
	return lib$w;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var define_property;
var hasRequiredDefine_property;

function requireDefine_property () {
	if (hasRequiredDefine_property) return define_property;
	hasRequiredDefine_property = 1;

	// MAIN //

	var main = ( typeof Object.defineProperty === 'function' ) ? Object.defineProperty : null;


	// EXPORTS //

	define_property = main;
	return define_property;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var has_define_property_support;
var hasRequiredHas_define_property_support;

function requireHas_define_property_support () {
	if (hasRequiredHas_define_property_support) return has_define_property_support;
	hasRequiredHas_define_property_support = 1;

	// MODULES //

	var defineProperty = requireDefine_property();


	// MAIN //

	/**
	* Tests for `Object.defineProperty` support.
	*
	* @private
	* @returns {boolean} boolean indicating if an environment has `Object.defineProperty` support
	*
	* @example
	* var bool = hasDefinePropertySupport();
	* // returns <boolean>
	*/
	function hasDefinePropertySupport() {
		// Test basic support...
		try {
			defineProperty( {}, 'x', {} );
			return true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}


	// EXPORTS //

	has_define_property_support = hasDefinePropertySupport;
	return has_define_property_support;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var builtin;
var hasRequiredBuiltin;

function requireBuiltin () {
	if (hasRequiredBuiltin) return builtin;
	hasRequiredBuiltin = 1;

	// MAIN //

	/**
	* Defines (or modifies) an object property.
	*
	* ## Notes
	*
	* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
	*
	* @name defineProperty
	* @type {Function}
	* @param {Object} obj - object on which to define the property
	* @param {(string|symbol)} prop - property name
	* @param {Object} descriptor - property descriptor
	* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
	* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
	* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
	* @param {*} [descriptor.value] - property value
	* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
	* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} third argument must be an object
	* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
	* @returns {Object} object with added property
	*
	* @example
	* var obj = {};
	*
	* defineProperty( obj, 'foo', {
	*     'value': 'bar'
	* });
	*
	* var str = obj.foo;
	* // returns 'bar'
	*/
	var defineProperty = Object.defineProperty;


	// EXPORTS //

	builtin = defineProperty;
	return builtin;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var polyfill$1;
var hasRequiredPolyfill$5;

function requirePolyfill$5 () {
	if (hasRequiredPolyfill$5) return polyfill$1;
	hasRequiredPolyfill$5 = 1;

	// VARIABLES //

	var objectProtoype = Object.prototype;
	var toStr = objectProtoype.toString;
	var defineGetter = objectProtoype.__defineGetter__;
	var defineSetter = objectProtoype.__defineSetter__;
	var lookupGetter = objectProtoype.__lookupGetter__;
	var lookupSetter = objectProtoype.__lookupSetter__;


	// MAIN //

	/**
	* Defines (or modifies) an object property.
	*
	* ## Notes
	*
	* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
	*
	* @param {Object} obj - object on which to define the property
	* @param {string} prop - property name
	* @param {Object} descriptor - property descriptor
	* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
	* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
	* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
	* @param {*} [descriptor.value] - property value
	* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
	* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} third argument must be an object
	* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
	* @returns {Object} object with added property
	*
	* @example
	* var obj = {};
	*
	* defineProperty( obj, 'foo', {
	*     'value': 'bar'
	* });
	*
	* var str = obj.foo;
	* // returns 'bar'
	*/
	function defineProperty( obj, prop, descriptor ) {
		var prototype;
		var hasValue;
		var hasGet;
		var hasSet;

		if ( typeof obj !== 'object' || obj === null || toStr.call( obj ) === '[object Array]' ) {
			throw new TypeError( 'invalid argument. First argument must be an object. Value: `' + obj + '`.' );
		}
		if ( typeof descriptor !== 'object' || descriptor === null || toStr.call( descriptor ) === '[object Array]' ) {
			throw new TypeError( 'invalid argument. Property descriptor must be an object. Value: `' + descriptor + '`.' );
		}
		hasValue = ( 'value' in descriptor );
		if ( hasValue ) {
			if (
				lookupGetter.call( obj, prop ) ||
				lookupSetter.call( obj, prop )
			) {
				// Override `__proto__` to avoid touching inherited accessors:
				prototype = obj.__proto__;
				obj.__proto__ = objectProtoype;

				// Delete property as existing getters/setters prevent assigning value to specified property:
				delete obj[ prop ];
				obj[ prop ] = descriptor.value;

				// Restore original prototype:
				obj.__proto__ = prototype;
			} else {
				obj[ prop ] = descriptor.value;
			}
		}
		hasGet = ( 'get' in descriptor );
		hasSet = ( 'set' in descriptor );

		if ( hasValue && ( hasGet || hasSet ) ) {
			throw new Error( 'invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.' );
		}

		if ( hasGet && defineGetter ) {
			defineGetter.call( obj, prop, descriptor.get );
		}
		if ( hasSet && defineSetter ) {
			defineSetter.call( obj, prop, descriptor.set );
		}
		return obj;
	}


	// EXPORTS //

	polyfill$1 = defineProperty;
	return polyfill$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$v;
var hasRequiredLib$v;

function requireLib$v () {
	if (hasRequiredLib$v) return lib$v;
	hasRequiredLib$v = 1;

	/**
	* Define (or modify) an object property.
	*
	* @module @stdlib/utils-define-property
	*
	* @example
	* var defineProperty = require( '@stdlib/utils-define-property' );
	*
	* var obj = {};
	* defineProperty( obj, 'foo', {
	*     'value': 'bar',
	*     'writable': false,
	*     'configurable': false,
	*     'enumerable': false
	* });
	* obj.foo = 'boop'; // => throws
	*/

	// MODULES //

	var hasDefinePropertySupport = requireHas_define_property_support();
	var builtin = requireBuiltin();
	var polyfill = requirePolyfill$5();


	// MAIN //

	var defineProperty;
	if ( hasDefinePropertySupport() ) {
		defineProperty = builtin;
	} else {
		defineProperty = polyfill;
	}


	// EXPORTS //

	lib$v = defineProperty;
	return lib$v;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$j;
var hasRequiredMain$j;

function requireMain$j () {
	if (hasRequiredMain$j) return main$j;
	hasRequiredMain$j = 1;

	// MODULES //

	var defineProperty = requireLib$v();


	// MAIN //

	/**
	* Defines a non-enumerable read-only property.
	*
	* @param {Object} obj - object on which to define the property
	* @param {(string|symbol)} prop - property name
	* @param {*} value - value to set
	*
	* @example
	* var obj = {};
	*
	* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	*
	* try {
	*     obj.foo = 'boop';
	* } catch ( err ) {
	*     console.error( err.message );
	* }
	*/
	function setNonEnumerableReadOnly( obj, prop, value ) {
		defineProperty( obj, prop, {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': value
		});
	}


	// EXPORTS //

	main$j = setNonEnumerableReadOnly;
	return main$j;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$u;
var hasRequiredLib$u;

function requireLib$u () {
	if (hasRequiredLib$u) return lib$u;
	hasRequiredLib$u = 1;

	/**
	* Define a non-enumerable read-only property.
	*
	* @module @stdlib/utils-define-nonenumerable-read-only-property
	*
	* @example
	* var setNonEnumerableReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
	*
	* var obj = {};
	*
	* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	*
	* try {
	*     obj.foo = 'boop';
	* } catch ( err ) {
	*     console.error( err.message );
	* }
	*/

	// MODULES //

	var setNonEnumerableReadOnly = requireMain$j();


	// EXPORTS //

	lib$u = setNonEnumerableReadOnly;
	return lib$u;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$i;
var hasRequiredMain$i;

function requireMain$i () {
	if (hasRequiredMain$i) return main$i;
	hasRequiredMain$i = 1;

	// MAIN //

	/**
	* Tests for native `Symbol` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Symbol` support
	*
	* @example
	* var bool = hasSymbolSupport();
	* // returns <boolean>
	*/
	function hasSymbolSupport() {
		return (
			typeof Symbol === 'function' &&
			typeof Symbol( 'foo' ) === 'symbol'
		);
	}


	// EXPORTS //

	main$i = hasSymbolSupport;
	return main$i;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$t;
var hasRequiredLib$t;

function requireLib$t () {
	if (hasRequiredLib$t) return lib$t;
	hasRequiredLib$t = 1;

	/**
	* Test for native `Symbol` support.
	*
	* @module @stdlib/assert-has-symbol-support
	*
	* @example
	* var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
	*
	* var bool = hasSymbolSupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasSymbolSupport = requireMain$i();


	// EXPORTS //

	lib$t = hasSymbolSupport;
	return lib$t;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$h;
var hasRequiredMain$h;

function requireMain$h () {
	if (hasRequiredMain$h) return main$h;
	hasRequiredMain$h = 1;

	// MODULES //

	var hasSymbols = requireLib$t();


	// VARIABLES //

	var FLG = hasSymbols();


	// MAIN //

	/**
	* Tests for native `toStringTag` support.
	*
	* @returns {boolean} boolean indicating if an environment has `toStringTag` support
	*
	* @example
	* var bool = hasToStringTagSupport();
	* // returns <boolean>
	*/
	function hasToStringTagSupport() {
		return ( FLG && typeof Symbol.toStringTag === 'symbol' );
	}


	// EXPORTS //

	main$h = hasToStringTagSupport;
	return main$h;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$s;
var hasRequiredLib$s;

function requireLib$s () {
	if (hasRequiredLib$s) return lib$s;
	hasRequiredLib$s = 1;

	/**
	* Test for native `toStringTag` support.
	*
	* @module @stdlib/assert-has-tostringtag-support
	*
	* @example
	* var hasToStringTagSupport = require( '@stdlib/assert-has-tostringtag-support' );
	*
	* var bool = hasToStringTagSupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasToStringTagSupport = requireMain$h();


	// EXPORTS //

	lib$s = hasToStringTagSupport;
	return lib$s;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var tostring;
var hasRequiredTostring;

function requireTostring () {
	if (hasRequiredTostring) return tostring;
	hasRequiredTostring = 1;

	// MAIN //

	var toStr = Object.prototype.toString;


	// EXPORTS //

	tostring = toStr;
	return tostring;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var native_class;
var hasRequiredNative_class;

function requireNative_class () {
	if (hasRequiredNative_class) return native_class;
	hasRequiredNative_class = 1;

	// MODULES //

	var toStr = requireTostring();


	// MAIN //

	/**
	* Returns a string value indicating a specification defined classification (via the internal property `[[Class]]`) of an object.
	*
	* @param {*} v - input value
	* @returns {string} string value indicating a specification defined classification of the input value
	*
	* @example
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* @example
	* var str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* @example
	* function Beep() {
	*     return this;
	* }
	* var str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/
	function nativeClass( v ) {
		return toStr.call( v );
	}


	// EXPORTS //

	native_class = nativeClass;
	return native_class;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$g;
var hasRequiredMain$g;

function requireMain$g () {
	if (hasRequiredMain$g) return main$g;
	hasRequiredMain$g = 1;

	// FUNCTIONS //

	var has = Object.prototype.hasOwnProperty;


	// MAIN //

	/**
	* Tests if an object has a specified property.
	*
	* @param {*} value - value to test
	* @param {*} property - property to test
	* @returns {boolean} boolean indicating if an object has a specified property
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'bap' );
	* // returns false
	*/
	function hasOwnProp( value, property ) {
		if (
			value === void 0 ||
			value === null
		) {
			return false;
		}
		return has.call( value, property );
	}


	// EXPORTS //

	main$g = hasOwnProp;
	return main$g;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$r;
var hasRequiredLib$r;

function requireLib$r () {
	if (hasRequiredLib$r) return lib$r;
	hasRequiredLib$r = 1;

	/**
	* Test whether an object has a specified property.
	*
	* @module @stdlib/assert-has-own-property
	*
	* @example
	* var hasOwnProp = require( '@stdlib/assert-has-own-property' );
	*
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'boop' );
	* // returns true
	*
	* bool = hasOwnProp( beep, 'bop' );
	* // returns false
	*/

	// MODULES //

	var hasOwnProp = requireMain$g();


	// EXPORTS //

	lib$r = hasOwnProp;
	return lib$r;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var tostringtag;
var hasRequiredTostringtag;

function requireTostringtag () {
	if (hasRequiredTostringtag) return tostringtag;
	hasRequiredTostringtag = 1;

	// MAIN //

	var toStrTag = ( typeof Symbol === 'function' ) ? Symbol.toStringTag : '';


	// EXPORTS //

	tostringtag = toStrTag;
	return tostringtag;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var polyfill;
var hasRequiredPolyfill$4;

function requirePolyfill$4 () {
	if (hasRequiredPolyfill$4) return polyfill;
	hasRequiredPolyfill$4 = 1;

	// MODULES //

	var hasOwnProp = requireLib$r();
	var toStringTag = requireTostringtag();
	var toStr = requireTostring();


	// MAIN //

	/**
	* Returns a string value indicating a specification defined classification of an object in environments supporting `Symbol.toStringTag`.
	*
	* @param {*} v - input value
	* @returns {string} string value indicating a specification defined classification of the input value
	*
	* @example
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* @example
	* var str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* @example
	* function Beep() {
	*     return this;
	* }
	* var str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/
	function nativeClass( v ) {
		var isOwn;
		var tag;
		var out;

		if ( v === null || v === void 0 ) {
			return toStr.call( v );
		}
		tag = v[ toStringTag ];
		isOwn = hasOwnProp( v, toStringTag );

		// Attempt to override the `toStringTag` property. For built-ins having a `Symbol.toStringTag` property (e.g., `JSON`, `Math`, etc), the `Symbol.toStringTag` property is read-only (e.g., , so we need to wrap in a `try/catch`.
		try {
			v[ toStringTag ] = void 0;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return toStr.call( v );
		}
		out = toStr.call( v );

		if ( isOwn ) {
			v[ toStringTag ] = tag;
		} else {
			delete v[ toStringTag ];
		}
		return out;
	}


	// EXPORTS //

	polyfill = nativeClass;
	return polyfill;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$q;
var hasRequiredLib$q;

function requireLib$q () {
	if (hasRequiredLib$q) return lib$q;
	hasRequiredLib$q = 1;

	/**
	* Return a string value indicating a specification defined classification of an object.
	*
	* @module @stdlib/utils-native-class
	*
	* @example
	* var nativeClass = require( '@stdlib/utils-native-class' );
	*
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* function Beep() {
	*     return this;
	* }
	* str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/

	// MODULES //

	var hasToStringTag = requireLib$s();
	var builtin = requireNative_class();
	var polyfill = requirePolyfill$4();


	// MAIN //

	var nativeClass;
	if ( hasToStringTag() ) {
		nativeClass = polyfill;
	} else {
		nativeClass = builtin;
	}


	// EXPORTS //

	lib$q = nativeClass;
	return lib$q;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$f;
var hasRequiredMain$f;

function requireMain$f () {
	if (hasRequiredMain$f) return main$f;
	hasRequiredMain$f = 1;

	// MODULES //

	var nativeClass = requireLib$q();


	// VARIABLES //

	var hasUint32Array = ( typeof Uint32Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Uint32Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint32Array
	*
	* @example
	* var bool = isUint32Array( new Uint32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint32Array( [] );
	* // returns false
	*/
	function isUint32Array( value ) {
		return (
			( hasUint32Array && value instanceof Uint32Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Uint32Array]'
		);
	}


	// EXPORTS //

	main$f = isUint32Array;
	return main$f;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$p;
var hasRequiredLib$p;

function requireLib$p () {
	if (hasRequiredLib$p) return lib$p;
	hasRequiredLib$p = 1;

	/**
	* Test if a value is a Uint32Array.
	*
	* @module @stdlib/assert-is-uint32array
	*
	* @example
	* var isUint32Array = require( '@stdlib/assert-is-uint32array' );
	*
	* var bool = isUint32Array( new Uint32Array( 10 ) );
	* // returns true
	*
	* bool = isUint32Array( [] );
	* // returns false
	*/

	// MODULES //

	var isUint32Array = requireMain$f();


	// EXPORTS //

	lib$p = isUint32Array;
	return lib$p;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$o;
var hasRequiredLib$o;

function requireLib$o () {
	if (hasRequiredLib$o) return lib$o;
	hasRequiredLib$o = 1;

	/**
	* Maximum unsigned 32-bit integer.
	*
	* @module @stdlib/constants-uint32-max
	* @type {uinteger32}
	*
	* @example
	* var UINT32_MAX = require( '@stdlib/constants-uint32-max' );
	* // returns 4294967295
	*/


	// MAIN //

	/**
	* Maximum unsigned 32-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{32} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 11111111111111111111111111111111
	* ```
	*
	* @constant
	* @type {uinteger32}
	* @default 4294967295
	*/
	var UINT32_MAX = 4294967295;


	// EXPORTS //

	lib$o = UINT32_MAX;
	return lib$o;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var uint32array$1;
var hasRequiredUint32array$1;

function requireUint32array$1 () {
	if (hasRequiredUint32array$1) return uint32array$1;
	hasRequiredUint32array$1 = 1;

	// MAIN //

	var main = ( typeof Uint32Array === 'function' ) ? Uint32Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	uint32array$1 = main;
	return uint32array$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$e;
var hasRequiredMain$e;

function requireMain$e () {
	if (hasRequiredMain$e) return main$e;
	hasRequiredMain$e = 1;

	// MODULES //

	var isUint32Array = requireLib$p();
	var UINT32_MAX = requireLib$o();
	var GlobalUint32Array = requireUint32array$1();


	// MAIN //

	/**
	* Tests for native `Uint32Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint32Array` support
	*
	* @example
	* var bool = hasUint32ArraySupport();
	* // returns <boolean>
	*/
	function hasUint32ArraySupport() {
		var bool;
		var arr;

		if ( typeof GlobalUint32Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT32_MAX+1, UINT32_MAX+2 ];
			arr = new GlobalUint32Array( arr );
			bool = (
				isUint32Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&            // truncation
				arr[ 2 ] === UINT32_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&            // wrap around
				arr[ 4 ] === 1               // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	main$e = hasUint32ArraySupport;
	return main$e;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$n;
var hasRequiredLib$n;

function requireLib$n () {
	if (hasRequiredLib$n) return lib$n;
	hasRequiredLib$n = 1;

	/**
	* Test for native `Uint32Array` support.
	*
	* @module @stdlib/assert-has-uint32array-support
	*
	* @example
	* var hasUint32ArraySupport = require( '@stdlib/assert-has-uint32array-support' );
	*
	* var bool = hasUint32ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasUint32ArraySupport = requireMain$e();


	// EXPORTS //

	lib$n = hasUint32ArraySupport;
	return lib$n;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var uint32array;
var hasRequiredUint32array;

function requireUint32array () {
	if (hasRequiredUint32array) return uint32array;
	hasRequiredUint32array = 1;

	// MAIN //

	var ctor = ( typeof Uint32Array === 'function' ) ? Uint32Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	uint32array = ctor;
	return uint32array;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var polyfill_1$3;
var hasRequiredPolyfill$3;

function requirePolyfill$3 () {
	if (hasRequiredPolyfill$3) return polyfill_1$3;
	hasRequiredPolyfill$3 = 1;

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of 32-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	polyfill_1$3 = polyfill;
	return polyfill_1$3;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$m;
var hasRequiredLib$m;

function requireLib$m () {
	if (hasRequiredLib$m) return lib$m;
	hasRequiredLib$m = 1;

	/**
	* Typed array constructor which returns a typed array representing an array of 32-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array-uint32
	*
	* @example
	* var ctor = require( '@stdlib/array-uint32' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint32Array>
	*/

	// MODULES //

	var hasUint32ArraySupport = requireLib$n();
	var builtin = requireUint32array();
	var polyfill = requirePolyfill$3();


	// MAIN //

	var ctor;
	if ( hasUint32ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}


	// EXPORTS //

	lib$m = ctor;
	return lib$m;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$d;
var hasRequiredMain$d;

function requireMain$d () {
	if (hasRequiredMain$d) return main$d;
	hasRequiredMain$d = 1;

	// MODULES //

	var nativeClass = requireLib$q();


	// VARIABLES //

	var hasFloat64Array = ( typeof Float64Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Float64Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Float64Array
	*
	* @example
	* var bool = isFloat64Array( new Float64Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isFloat64Array( [] );
	* // returns false
	*/
	function isFloat64Array( value ) {
		return (
			( hasFloat64Array && value instanceof Float64Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Float64Array]'
		);
	}


	// EXPORTS //

	main$d = isFloat64Array;
	return main$d;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$l;
var hasRequiredLib$l;

function requireLib$l () {
	if (hasRequiredLib$l) return lib$l;
	hasRequiredLib$l = 1;

	/**
	* Test if a value is a Float64Array.
	*
	* @module @stdlib/assert-is-float64array
	*
	* @example
	* var isFloat64Array = require( '@stdlib/assert-is-float64array' );
	*
	* var bool = isFloat64Array( new Float64Array( 10 ) );
	* // returns true
	*
	* bool = isFloat64Array( [] );
	* // returns false
	*/

	// MODULES //

	var isFloat64Array = requireMain$d();


	// EXPORTS //

	lib$l = isFloat64Array;
	return lib$l;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var float64array$1;
var hasRequiredFloat64array$1;

function requireFloat64array$1 () {
	if (hasRequiredFloat64array$1) return float64array$1;
	hasRequiredFloat64array$1 = 1;

	// MAIN //

	var main = ( typeof Float64Array === 'function' ) ? Float64Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	float64array$1 = main;
	return float64array$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$c;
var hasRequiredMain$c;

function requireMain$c () {
	if (hasRequiredMain$c) return main$c;
	hasRequiredMain$c = 1;

	// MODULES //

	var isFloat64Array = requireLib$l();
	var GlobalFloat64Array = requireFloat64array$1();


	// MAIN //

	/**
	* Tests for native `Float64Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Float64Array` support
	*
	* @example
	* var bool = hasFloat64ArraySupport();
	* // returns <boolean>
	*/
	function hasFloat64ArraySupport() {
		var bool;
		var arr;

		if ( typeof GlobalFloat64Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalFloat64Array( [ 1.0, 3.14, -3.14, NaN ] );
			bool = (
				isFloat64Array( arr ) &&
				arr[ 0 ] === 1.0 &&
				arr[ 1 ] === 3.14 &&
				arr[ 2 ] === -3.14 &&
				arr[ 3 ] !== arr[ 3 ]
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	main$c = hasFloat64ArraySupport;
	return main$c;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$k;
var hasRequiredLib$k;

function requireLib$k () {
	if (hasRequiredLib$k) return lib$k;
	hasRequiredLib$k = 1;

	/**
	* Test for native `Float64Array` support.
	*
	* @module @stdlib/assert-has-float64array-support
	*
	* @example
	* var hasFloat64ArraySupport = require( '@stdlib/assert-has-float64array-support' );
	*
	* var bool = hasFloat64ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasFloat64ArraySupport = requireMain$c();


	// EXPORTS //

	lib$k = hasFloat64ArraySupport;
	return lib$k;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var float64array;
var hasRequiredFloat64array;

function requireFloat64array () {
	if (hasRequiredFloat64array) return float64array;
	hasRequiredFloat64array = 1;

	// MAIN //

	var ctor = ( typeof Float64Array === 'function' ) ? Float64Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	float64array = ctor;
	return float64array;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var polyfill_1$2;
var hasRequiredPolyfill$2;

function requirePolyfill$2 () {
	if (hasRequiredPolyfill$2) return polyfill_1$2;
	hasRequiredPolyfill$2 = 1;

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of double-precision floating-point numbers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	polyfill_1$2 = polyfill;
	return polyfill_1$2;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$j;
var hasRequiredLib$j;

function requireLib$j () {
	if (hasRequiredLib$j) return lib$j;
	hasRequiredLib$j = 1;

	/**
	* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.
	*
	* @module @stdlib/array-float64
	*
	* @example
	* var ctor = require( '@stdlib/array-float64' );
	*
	* var arr = new ctor( 10 );
	* // returns <Float64Array>
	*/

	// MODULES //

	var hasFloat64ArraySupport = requireLib$k();
	var builtin = requireFloat64array();
	var polyfill = requirePolyfill$2();


	// MAIN //

	var ctor;
	if ( hasFloat64ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}


	// EXPORTS //

	lib$j = ctor;
	return lib$j;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$b;
var hasRequiredMain$b;

function requireMain$b () {
	if (hasRequiredMain$b) return main$b;
	hasRequiredMain$b = 1;

	// MODULES //

	var nativeClass = requireLib$q();


	// VARIABLES //

	var hasUint8Array = ( typeof Uint8Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Uint8Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint8Array
	*
	* @example
	* var bool = isUint8Array( new Uint8Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint8Array( [] );
	* // returns false
	*/
	function isUint8Array( value ) {
		return (
			( hasUint8Array && value instanceof Uint8Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Uint8Array]'
		);
	}


	// EXPORTS //

	main$b = isUint8Array;
	return main$b;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$i;
var hasRequiredLib$i;

function requireLib$i () {
	if (hasRequiredLib$i) return lib$i;
	hasRequiredLib$i = 1;

	/**
	* Test if a value is a Uint8Array.
	*
	* @module @stdlib/assert-is-uint8array
	*
	* @example
	* var isUint8Array = require( '@stdlib/assert-is-uint8array' );
	*
	* var bool = isUint8Array( new Uint8Array( 10 ) );
	* // returns true
	*
	* bool = isUint8Array( [] );
	* // returns false
	*/

	// MODULES //

	var isUint8Array = requireMain$b();


	// EXPORTS //

	lib$i = isUint8Array;
	return lib$i;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$h;
var hasRequiredLib$h;

function requireLib$h () {
	if (hasRequiredLib$h) return lib$h;
	hasRequiredLib$h = 1;

	/**
	* Maximum unsigned 8-bit integer.
	*
	* @module @stdlib/constants-uint8-max
	* @type {integer32}
	*
	* @example
	* var UINT8_MAX = require( '@stdlib/constants-uint8-max' );
	* // returns 255
	*/


	// MAIN //

	/**
	* Maximum unsigned 8-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{8} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 11111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 255
	*/
	var UINT8_MAX = 255|0; // asm type annotation


	// EXPORTS //

	lib$h = UINT8_MAX;
	return lib$h;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var uint8array$1;
var hasRequiredUint8array$1;

function requireUint8array$1 () {
	if (hasRequiredUint8array$1) return uint8array$1;
	hasRequiredUint8array$1 = 1;

	// MAIN //

	var main = ( typeof Uint8Array === 'function' ) ? Uint8Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	uint8array$1 = main;
	return uint8array$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$a;
var hasRequiredMain$a;

function requireMain$a () {
	if (hasRequiredMain$a) return main$a;
	hasRequiredMain$a = 1;

	// MODULES //

	var isUint8Array = requireLib$i();
	var UINT8_MAX = requireLib$h();
	var GlobalUint8Array = requireUint8array$1();


	// MAIN //

	/**
	* Tests for native `Uint8Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint8Array` support
	*
	* @example
	* var bool = hasUint8ArraySupport();
	* // returns <boolean>
	*/
	function hasUint8ArraySupport() {
		var bool;
		var arr;

		if ( typeof GlobalUint8Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT8_MAX+1, UINT8_MAX+2 ];
			arr = new GlobalUint8Array( arr );
			bool = (
				isUint8Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&           // truncation
				arr[ 2 ] === UINT8_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&           // wrap around
				arr[ 4 ] === 1              // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	main$a = hasUint8ArraySupport;
	return main$a;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$g;
var hasRequiredLib$g;

function requireLib$g () {
	if (hasRequiredLib$g) return lib$g;
	hasRequiredLib$g = 1;

	/**
	* Test for native `Uint8Array` support.
	*
	* @module @stdlib/assert-has-uint8array-support
	*
	* @example
	* var hasUint8ArraySupport = require( '@stdlib/assert-has-uint8array-support' );
	*
	* var bool = hasUint8ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasUint8ArraySupport = requireMain$a();


	// EXPORTS //

	lib$g = hasUint8ArraySupport;
	return lib$g;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var uint8array;
var hasRequiredUint8array;

function requireUint8array () {
	if (hasRequiredUint8array) return uint8array;
	hasRequiredUint8array = 1;

	// MAIN //

	var ctor = ( typeof Uint8Array === 'function' ) ? Uint8Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	uint8array = ctor;
	return uint8array;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var polyfill_1$1;
var hasRequiredPolyfill$1;

function requirePolyfill$1 () {
	if (hasRequiredPolyfill$1) return polyfill_1$1;
	hasRequiredPolyfill$1 = 1;

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of 8-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	polyfill_1$1 = polyfill;
	return polyfill_1$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$f;
var hasRequiredLib$f;

function requireLib$f () {
	if (hasRequiredLib$f) return lib$f;
	hasRequiredLib$f = 1;

	/**
	* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array-uint8
	*
	* @example
	* var ctor = require( '@stdlib/array-uint8' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint8Array>
	*/

	// MODULES //

	var hasUint8ArraySupport = requireLib$g();
	var builtin = requireUint8array();
	var polyfill = requirePolyfill$1();


	// MAIN //

	var ctor;
	if ( hasUint8ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}


	// EXPORTS //

	lib$f = ctor;
	return lib$f;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$9;
var hasRequiredMain$9;

function requireMain$9 () {
	if (hasRequiredMain$9) return main$9;
	hasRequiredMain$9 = 1;

	// MODULES //

	var nativeClass = requireLib$q();


	// VARIABLES //

	var hasUint16Array = ( typeof Uint16Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Uint16Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint16Array
	*
	* @example
	* var bool = isUint16Array( new Uint16Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint16Array( [] );
	* // returns false
	*/
	function isUint16Array( value ) {
		return (
			( hasUint16Array && value instanceof Uint16Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Uint16Array]'
		);
	}


	// EXPORTS //

	main$9 = isUint16Array;
	return main$9;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$e;
var hasRequiredLib$e;

function requireLib$e () {
	if (hasRequiredLib$e) return lib$e;
	hasRequiredLib$e = 1;

	/**
	* Test if a value is a Uint16Array.
	*
	* @module @stdlib/assert-is-uint16array
	*
	* @example
	* var isUint16Array = require( '@stdlib/assert-is-uint16array' );
	*
	* var bool = isUint16Array( new Uint16Array( 10 ) );
	* // returns true
	*
	* bool = isUint16Array( [] );
	* // returns false
	*/

	// MODULES //

	var isUint16Array = requireMain$9();


	// EXPORTS //

	lib$e = isUint16Array;
	return lib$e;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$d;
var hasRequiredLib$d;

function requireLib$d () {
	if (hasRequiredLib$d) return lib$d;
	hasRequiredLib$d = 1;

	/**
	* Maximum unsigned 16-bit integer.
	*
	* @module @stdlib/constants-uint16-max
	* @type {integer32}
	*
	* @example
	* var UINT16_MAX = require( '@stdlib/constants-uint16-max' );
	* // returns 65535
	*/


	// MAIN //

	/**
	* Maximum unsigned 16-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{16} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 1111111111111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 65535
	*/
	var UINT16_MAX = 65535|0; // asm type annotation


	// EXPORTS //

	lib$d = UINT16_MAX;
	return lib$d;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var uint16array$1;
var hasRequiredUint16array$1;

function requireUint16array$1 () {
	if (hasRequiredUint16array$1) return uint16array$1;
	hasRequiredUint16array$1 = 1;

	// MAIN //

	var main = ( typeof Uint16Array === 'function' ) ? Uint16Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	uint16array$1 = main;
	return uint16array$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$8;
var hasRequiredMain$8;

function requireMain$8 () {
	if (hasRequiredMain$8) return main$8;
	hasRequiredMain$8 = 1;

	// MODULES //

	var isUint16Array = requireLib$e();
	var UINT16_MAX = requireLib$d();
	var GlobalUint16Array = requireUint16array$1();


	// MAIN //

	/**
	* Tests for native `Uint16Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint16Array` support
	*
	* @example
	* var bool = hasUint16ArraySupport();
	* // returns <boolean>
	*/
	function hasUint16ArraySupport() {
		var bool;
		var arr;

		if ( typeof GlobalUint16Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT16_MAX+1, UINT16_MAX+2 ];
			arr = new GlobalUint16Array( arr );
			bool = (
				isUint16Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&            // truncation
				arr[ 2 ] === UINT16_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&            // wrap around
				arr[ 4 ] === 1               // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	main$8 = hasUint16ArraySupport;
	return main$8;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$c;
var hasRequiredLib$c;

function requireLib$c () {
	if (hasRequiredLib$c) return lib$c;
	hasRequiredLib$c = 1;

	/**
	* Test for native `Uint16Array` support.
	*
	* @module @stdlib/assert-has-uint16array-support
	*
	* @example
	* var hasUint16ArraySupport = require( '@stdlib/assert-has-uint16array-support' );
	*
	* var bool = hasUint16ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasUint16ArraySupport = requireMain$8();


	// EXPORTS //

	lib$c = hasUint16ArraySupport;
	return lib$c;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var uint16array;
var hasRequiredUint16array;

function requireUint16array () {
	if (hasRequiredUint16array) return uint16array;
	hasRequiredUint16array = 1;

	// MAIN //

	var ctor = ( typeof Uint16Array === 'function' ) ? Uint16Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	uint16array = ctor;
	return uint16array;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var polyfill_1;
var hasRequiredPolyfill;

function requirePolyfill () {
	if (hasRequiredPolyfill) return polyfill_1;
	hasRequiredPolyfill = 1;

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of 16-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	polyfill_1 = polyfill;
	return polyfill_1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$b;
var hasRequiredLib$b;

function requireLib$b () {
	if (hasRequiredLib$b) return lib$b;
	hasRequiredLib$b = 1;

	/**
	* Typed array constructor which returns a typed array representing an array of 16-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array-uint16
	*
	* @example
	* var ctor = require( '@stdlib/array-uint16' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint16Array>
	*/

	// MODULES //

	var hasUint16ArraySupport = requireLib$c();
	var builtin = requireUint16array();
	var polyfill = requirePolyfill();


	// MAIN //

	var ctor;
	if ( hasUint16ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}


	// EXPORTS //

	lib$b = ctor;
	return lib$b;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var ctors_1;
var hasRequiredCtors;

function requireCtors () {
	if (hasRequiredCtors) return ctors_1;
	hasRequiredCtors = 1;

	// MODULES //

	var Uint8Array = requireLib$f();
	var Uint16Array = requireLib$b();


	// MAIN //

	var ctors = {
		'uint16': Uint16Array,
		'uint8': Uint8Array
	};


	// EXPORTS //

	ctors_1 = ctors;
	return ctors_1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$7;
var hasRequiredMain$7;

function requireMain$7 () {
	if (hasRequiredMain$7) return main$7;
	hasRequiredMain$7 = 1;

	// MODULES //

	var ctors = requireCtors();


	// VARIABLES //

	var bool;


	// FUNCTIONS //

	/**
	* Returns a boolean indicating if an environment is little endian.
	*
	* @private
	* @returns {boolean} boolean indicating if an environment is little endian
	*
	* @example
	* var bool = isLittleEndian();
	* // returns <boolean>
	*/
	function isLittleEndian() {
		var uint16view;
		var uint8view;

		uint16view = new ctors[ 'uint16' ]( 1 );

		/*
		* Set the uint16 view to a value having distinguishable lower and higher order words.
		*
		* 4660 => 0x1234 => 0x12 0x34 => '00010010 00110100' => (0x12,0x34) == (18,52)
		*/
		uint16view[ 0 ] = 0x1234;

		// Create a uint8 view on top of the uint16 buffer:
		uint8view = new ctors[ 'uint8' ]( uint16view.buffer );

		// If little endian, the least significant byte will be first...
		return ( uint8view[ 0 ] === 0x34 );
	}


	// MAIN //

	bool = isLittleEndian();


	// EXPORTS //

	main$7 = bool;
	return main$7;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$a;
var hasRequiredLib$a;

function requireLib$a () {
	if (hasRequiredLib$a) return lib$a;
	hasRequiredLib$a = 1;

	/**
	* Return a boolean indicating if an environment is little endian.
	*
	* @module @stdlib/assert-is-little-endian
	*
	* @example
	* var IS_LITTLE_ENDIAN = require( '@stdlib/assert-is-little-endian' );
	*
	* var bool = IS_LITTLE_ENDIAN;
	* // returns <boolean>
	*/

	// MODULES //

	var IS_LITTLE_ENDIAN = requireMain$7();


	// EXPORTS //

	lib$a = IS_LITTLE_ENDIAN;
	return lib$a;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var indices_1$1;
var hasRequiredIndices$1;

function requireIndices$1 () {
	if (hasRequiredIndices$1) return indices_1$1;
	hasRequiredIndices$1 = 1;

	// MODULES //

	var isLittleEndian = requireLib$a();


	// MAIN //

	var indices;
	var HIGH;
	var LOW;

	if ( isLittleEndian === true ) {
		HIGH = 1; // second index
		LOW = 0; // first index
	} else {
		HIGH = 0; // first index
		LOW = 1; // second index
	}
	indices = {
		'HIGH': HIGH,
		'LOW': LOW
	};


	// EXPORTS //

	indices_1$1 = indices;
	return indices_1$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var assign$1;
var hasRequiredAssign$1;

function requireAssign$1 () {
	if (hasRequiredAssign$1) return assign$1;
	hasRequiredAssign$1 = 1;

	// MODULES //

	var Uint32Array = requireLib$m();
	var Float64Array = requireLib$j();
	var indices = requireIndices$1();


	// VARIABLES //

	var FLOAT64_VIEW = new Float64Array( 1 );
	var UINT32_VIEW = new Uint32Array( FLOAT64_VIEW.buffer );

	var HIGH = indices.HIGH;
	var LOW = indices.LOW;


	// MAIN //

	/**
	* Splits a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
	*
	* ## Notes
	*
	* ```text
	* float64 (64 bits)
	* f := fraction (significand/mantissa) (52 bits)
	* e := exponent (11 bits)
	* s := sign bit (1 bit)
	*
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |                                Float64                                |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |              Uint32               |               Uint32              |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* ```
	*
	* If little endian (more significant bits last):
	*
	* ```text
	*                         <-- lower      higher -->
	* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
	* ```
	*
	* If big endian (more significant bits first):
	*
	* ```text
	*                         <-- higher      lower -->
	* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
	* ```
	*
	* In which Uint32 can we find the higher order bits? If little endian, the second; if big endian, the first.
	*
	*
	* ## References
	*
	* -   [Open Group][1]
	*
	* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
	*
	*
	* @private
	* @param {number} x - input value
	* @param {Collection} out - output array
	* @param {integer} stride - output array stride
	* @param {NonNegativeInteger} offset - output array index offset
	* @returns {Collection} output array
	*
	* @example
	* var Uint32Array = require( '@stdlib/array-uint32' );
	*
	* var out = new Uint32Array( 2 );
	*
	* var w = toWords( 3.14e201, out, 1, 0 );
	* // returns <Uint32Array>[ 1774486211, 2479577218 ]
	*
	* var bool = ( w === out );
	* // returns true
	*/
	function toWords( x, out, stride, offset ) {
		FLOAT64_VIEW[ 0 ] = x;
		out[ offset ] = UINT32_VIEW[ HIGH ];
		out[ offset + stride ] = UINT32_VIEW[ LOW ];
		return out;
	}


	// EXPORTS //

	assign$1 = toWords;
	return assign$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$6;
var hasRequiredMain$6;

function requireMain$6 () {
	if (hasRequiredMain$6) return main$6;
	hasRequiredMain$6 = 1;

	// MODULES //

	var fcn = requireAssign$1();


	// MAIN //

	/**
	* Splits a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
	*
	* @param {number} x - input value
	* @returns {Array<number>} output array
	*
	* @example
	* var w = toWords( 3.14e201 );
	* // returns [ 1774486211, 2479577218 ]
	*/
	function toWords( x ) {
		return fcn( x, [ 0>>>0, 0>>>0 ], 1, 0 );
	}


	// EXPORTS //

	main$6 = toWords;
	return main$6;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$9;
var hasRequiredLib$9;

function requireLib$9 () {
	if (hasRequiredLib$9) return lib$9;
	hasRequiredLib$9 = 1;

	/**
	* Split a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
	*
	* @module @stdlib/number-float64-base-to-words
	*
	* @example
	* var toWords = require( '@stdlib/number-float64-base-to-words' );
	*
	* var w = toWords( 3.14e201 );
	* // returns [ 1774486211, 2479577218 ]
	*
	* @example
	* var Uint32Array = require( '@stdlib/array-uint32' );
	* var toWords = require( '@stdlib/number-float64-base-to-words' );
	*
	* var out = new Uint32Array( 2 );
	*
	* var w = toWords.assign( 3.14e201, out, 1, 0 );
	* // returns <Uint32Array>[ 1774486211, 2479577218 ]
	*
	* var bool = ( w === out );
	* // returns true
	*/

	// MODULES //

	var setReadOnly = requireLib$u();
	var main = requireMain$6();
	var assign = requireAssign$1();


	// MAIN //

	setReadOnly( main, 'assign', assign );


	// EXPORTS //

	lib$9 = main;
	return lib$9;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var high;
var hasRequiredHigh;

function requireHigh () {
	if (hasRequiredHigh) return high;
	hasRequiredHigh = 1;

	// MODULES //

	var isLittleEndian = requireLib$a();


	// MAIN //

	var HIGH;
	if ( isLittleEndian === true ) {
		HIGH = 1; // second index
	} else {
		HIGH = 0; // first index
	}


	// EXPORTS //

	high = HIGH;
	return high;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$5;
var hasRequiredMain$5;

function requireMain$5 () {
	if (hasRequiredMain$5) return main$5;
	hasRequiredMain$5 = 1;

	// MODULES //

	var Uint32Array = requireLib$m();
	var Float64Array = requireLib$j();
	var HIGH = requireHigh();


	// VARIABLES //

	var FLOAT64_VIEW = new Float64Array( 1 );
	var UINT32_VIEW = new Uint32Array( FLOAT64_VIEW.buffer );


	// MAIN //

	/**
	* Returns an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
	*
	* ## Notes
	*
	* ```text
	* float64 (64 bits)
	* f := fraction (significand/mantissa) (52 bits)
	* e := exponent (11 bits)
	* s := sign bit (1 bit)
	*
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |                                Float64                                |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |              Uint32               |               Uint32              |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* ```
	*
	* If little endian (more significant bits last):
	*
	* ```text
	*                         <-- lower      higher -->
	* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
	* ```
	*
	* If big endian (more significant bits first):
	*
	* ```text
	*                         <-- higher      lower -->
	* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
	* ```
	*
	* In which Uint32 can we find the higher order bits? If little endian, the second; if big endian, the first.
	*
	*
	* ## References
	*
	* -   [Open Group][1]
	*
	* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
	*
	* @param {number} x - input value
	* @returns {uinteger32} higher order word
	*
	* @example
	* var w = getHighWord( 3.14e201 ); // => 01101001110001001000001011000011
	* // returns 1774486211
	*/
	function getHighWord( x ) {
		FLOAT64_VIEW[ 0 ] = x;
		return UINT32_VIEW[ HIGH ];
	}


	// EXPORTS //

	main$5 = getHighWord;
	return main$5;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$8;
var hasRequiredLib$8;

function requireLib$8 () {
	if (hasRequiredLib$8) return lib$8;
	hasRequiredLib$8 = 1;

	/**
	* Return an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
	*
	* @module @stdlib/number-float64-base-get-high-word
	*
	* @example
	* var getHighWord = require( '@stdlib/number-float64-base-get-high-word' );
	*
	* var w = getHighWord( 3.14e201 ); // => 01101001110001001000001011000011
	* // returns 1774486211
	*/

	// MODULES //

	var getHighWord = requireMain$5();


	// EXPORTS //

	lib$8 = getHighWord;
	return lib$8;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var indices_1;
var hasRequiredIndices;

function requireIndices () {
	if (hasRequiredIndices) return indices_1;
	hasRequiredIndices = 1;

	// MODULES //

	var isLittleEndian = requireLib$a();


	// MAIN //

	var indices;
	var HIGH;
	var LOW;

	if ( isLittleEndian === true ) {
		HIGH = 1; // second index
		LOW = 0; // first index
	} else {
		HIGH = 0; // first index
		LOW = 1; // second index
	}
	indices = {
		'HIGH': HIGH,
		'LOW': LOW
	};


	// EXPORTS //

	indices_1 = indices;
	return indices_1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$4;
var hasRequiredMain$4;

function requireMain$4 () {
	if (hasRequiredMain$4) return main$4;
	hasRequiredMain$4 = 1;

	// MODULES //

	var Uint32Array = requireLib$m();
	var Float64Array = requireLib$j();
	var indices = requireIndices();


	// VARIABLES //

	var FLOAT64_VIEW = new Float64Array( 1 );
	var UINT32_VIEW = new Uint32Array( FLOAT64_VIEW.buffer );

	var HIGH = indices.HIGH;
	var LOW = indices.LOW;


	// MAIN //

	/**
	* Creates a double-precision floating-point number from a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
	*
	* ## Notes
	*
	* ```text
	* float64 (64 bits)
	* f := fraction (significand/mantissa) (52 bits)
	* e := exponent (11 bits)
	* s := sign bit (1 bit)
	*
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |                                Float64                                |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |              Uint32               |               Uint32              |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* ```
	*
	* If little endian (more significant bits last):
	*
	* ```text
	*                         <-- lower      higher -->
	* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
	* ```
	*
	* If big endian (more significant bits first):
	*
	* ```text
	*                         <-- higher      lower -->
	* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
	* ```
	*
	*
	* In which Uint32 should we place the higher order bits? If little endian, the second; if big endian, the first.
	*
	*
	* ## References
	*
	* -   [Open Group][1]
	*
	* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
	*
	* @param {uinteger32} high - higher order word (unsigned 32-bit integer)
	* @param {uinteger32} low - lower order word (unsigned 32-bit integer)
	* @returns {number} floating-point number
	*
	* @example
	* var v = fromWords( 1774486211, 2479577218 );
	* // returns 3.14e201
	*
	* @example
	* var v = fromWords( 3221823995, 1413754136 );
	* // returns -3.141592653589793
	*
	* @example
	* var v = fromWords( 0, 0 );
	* // returns 0.0
	*
	* @example
	* var v = fromWords( 2147483648, 0 );
	* // returns -0.0
	*
	* @example
	* var v = fromWords( 2146959360, 0 );
	* // returns NaN
	*
	* @example
	* var v = fromWords( 2146435072, 0 );
	* // returns Infinity
	*
	* @example
	* var v = fromWords( 4293918720, 0 );
	* // returns -Infinity
	*/
	function fromWords( high, low ) {
		UINT32_VIEW[ HIGH ] = high;
		UINT32_VIEW[ LOW ] = low;
		return FLOAT64_VIEW[ 0 ];
	}


	// EXPORTS //

	main$4 = fromWords;
	return main$4;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$7;
var hasRequiredLib$7;

function requireLib$7 () {
	if (hasRequiredLib$7) return lib$7;
	hasRequiredLib$7 = 1;

	/**
	* Create a double-precision floating-point number from a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
	*
	* @module @stdlib/number-float64-base-from-words
	*
	* @example
	* var fromWords = require( '@stdlib/number-float64-base-from-words' );
	*
	* var v = fromWords( 1774486211, 2479577218 );
	* // returns 3.14e201
	*
	* v = fromWords( 3221823995, 1413754136 );
	* // returns -3.141592653589793
	*
	* v = fromWords( 0, 0 );
	* // returns 0.0
	*
	* v = fromWords( 2147483648, 0 );
	* // returns -0.0
	*
	* v = fromWords( 2146959360, 0 );
	* // returns NaN
	*
	* v = fromWords( 2146435072, 0 );
	* // returns Infinity
	*
	* v = fromWords( 4293918720, 0 );
	* // returns -Infinity
	*/

	// MODULES //

	var fromWords = requireMain$4();


	// EXPORTS //

	lib$7 = fromWords;
	return lib$7;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$3;
var hasRequiredMain$3;

function requireMain$3 () {
	if (hasRequiredMain$3) return main$3;
	hasRequiredMain$3 = 1;

	// MODULES //

	var SIGN_MASK = requireLib$x();
	var ABS_MASK = requireLib$w();
	var toWords = requireLib$9();
	var getHighWord = requireLib$8();
	var fromWords = requireLib$7();


	// VARIABLES //

	// High/low words workspace:
	var WORDS = [ 0, 0 ];


	// MAIN //

	/**
	* Returns a double-precision floating-point number with the magnitude of `x` and the sign of `y`.
	*
	* @param {number} x - number from which to derive a magnitude
	* @param {number} y - number from which to derive a sign
	* @returns {number} a double-precision floating-point number
	*
	* @example
	* var z = copysign( -3.14, 10.0 );
	* // returns 3.14
	*
	* @example
	* var z = copysign( 3.14, -1.0 );
	* // returns -3.14
	*
	* @example
	* var z = copysign( 1.0, -0.0 );
	* // returns -1.0
	*
	* @example
	* var z = copysign( -3.14, -0.0 );
	* // returns -3.14
	*
	* @example
	* var z = copysign( -0.0, 1.0 );
	* // returns 0.0
	*/
	function copysign( x, y ) {
		var hx;
		var hy;

		// Split `x` into higher and lower order words:
		toWords.assign( x, WORDS, 1, 0 );
		hx = WORDS[ 0 ];

		// Turn off the sign bit of `x`:
		hx &= ABS_MASK;

		// Extract the higher order word from `y`:
		hy = getHighWord( y );

		// Leave only the sign bit of `y` turned on:
		hy &= SIGN_MASK;

		// Copy the sign bit of `y` to `x`:
		hx |= hy;

		// Return a new value having the same magnitude as `x`, but with the sign of `y`:
		return fromWords( hx, WORDS[ 1 ] );
	}


	// EXPORTS //

	main$3 = copysign;
	return main$3;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$6;
var hasRequiredLib$6;

function requireLib$6 () {
	if (hasRequiredLib$6) return lib$6;
	hasRequiredLib$6 = 1;

	/**
	* Return a double-precision floating-point number with the magnitude of `x` and the sign of `y`.
	*
	* @module @stdlib/math-base-special-copysign
	*
	* @example
	* var copysign = require( '@stdlib/math-base-special-copysign' );
	*
	* var z = copysign( -3.14, 10.0 );
	* // returns 3.14
	*
	* z = copysign( 3.14, -1.0 );
	* // returns -3.14
	*
	* z = copysign( 1.0, -0.0 );
	* // returns -1.0
	*
	* z = copysign( -3.14, -0.0 );
	* // returns -3.14
	*
	* z = copysign( -0.0, 1.0 );
	* // returns 0.0
	*/

	// MODULES //

	var main = requireMain$3();


	// EXPORTS //

	lib$6 = main;
	return lib$6;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$5;
var hasRequiredLib$5;

function requireLib$5 () {
	if (hasRequiredLib$5) return lib$5;
	hasRequiredLib$5 = 1;

	/**
	* Smallest positive double-precision floating-point normal number.
	*
	* @module @stdlib/constants-float64-smallest-normal
	* @type {number}
	*
	* @example
	* var FLOAT64_SMALLEST_NORMAL = require( '@stdlib/constants-float64-smallest-normal' );
	* // returns 2.2250738585072014e-308
	*/


	// MAIN //

	/**
	* The smallest positive double-precision floating-point normal number.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* \frac{1}{2^{1023-1}}
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 0 00000000001 00000000000000000000 00000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {number}
	* @default 2.2250738585072014e-308
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_SMALLEST_NORMAL = 2.2250738585072014e-308;


	// EXPORTS //

	lib$5 = FLOAT64_SMALLEST_NORMAL;
	return lib$5;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$2;
var hasRequiredMain$2;

function requireMain$2 () {
	if (hasRequiredMain$2) return main$2;
	hasRequiredMain$2 = 1;

	// MAIN //

	/**
	* Computes the absolute value of a double-precision floating-point number `x`.
	*
	* @param {number} x - input value
	* @returns {number} absolute value
	*
	* @example
	* var v = abs( -1.0 );
	* // returns 1.0
	*
	* @example
	* var v = abs( 2.0 );
	* // returns 2.0
	*
	* @example
	* var v = abs( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = abs( -0.0 );
	* // returns 0.0
	*
	* @example
	* var v = abs( NaN );
	* // returns NaN
	*/
	function abs( x ) {
		return Math.abs( x ); // eslint-disable-line stdlib/no-builtin-math
	}


	// EXPORTS //

	main$2 = abs;
	return main$2;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$4;
var hasRequiredLib$4;

function requireLib$4 () {
	if (hasRequiredLib$4) return lib$4;
	hasRequiredLib$4 = 1;

	/**
	* Compute an absolute value of a double-precision floating-point number.
	*
	* @module @stdlib/math-base-special-abs
	*
	* @example
	* var abs = require( '@stdlib/math-base-special-abs' );
	*
	* var v = abs( -1.0 );
	* // returns 1.0
	*
	* v = abs( 2.0 );
	* // returns 2.0
	*
	* v = abs( 0.0 );
	* // returns 0.0
	*
	* v = abs( -0.0 );
	* // returns 0.0
	*
	* v = abs( NaN );
	* // returns NaN
	*/

	// MODULES //

	var abs = requireMain$2();


	// EXPORTS //

	lib$4 = abs;
	return lib$4;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var assign;
var hasRequiredAssign;

function requireAssign () {
	if (hasRequiredAssign) return assign;
	hasRequiredAssign = 1;

	// MODULES //

	var FLOAT64_SMALLEST_NORMAL = requireLib$5();
	var isInfinite = requireLib$y();
	var isnan = requireLib$z();
	var abs = requireLib$4();


	// VARIABLES //

	// (1<<52)
	var SCALAR = 4503599627370496;


	// MAIN //

	/**
	* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\) and assigns results to a provided output array.
	*
	* @param {number} x - input value
	* @param {Collection} out - output array
	* @param {integer} stride - output array stride
	* @param {NonNegativeInteger} offset - output array index offset
	* @returns {Collection} output array
	*
	* @example
	* var pow = require( '@stdlib/math-base-special-pow' );
	*
	* var out = normalize( 3.14e-319, [ 0.0, 0 ], 1, 0 );
	* // returns [ 1.4141234400356668e-303, -52 ]
	*
	* var y = out[ 0 ];
	* var exp = out[ 1 ];
	*
	* var bool = ( y*pow(2.0,exp) === 3.14e-319 );
	* // returns true
	*
	* @example
	* var out = normalize( 0.0, [ 0.0, 0 ], 1, 0 );
	* // returns [ 0.0, 0 ];
	*
	* @example
	* var PINF = require( '@stdlib/constants-float64-pinf' );
	*
	* var out = normalize( PINF, [ 0.0, 0 ], 1, 0 );
	* // returns [ Infinity, 0 ]
	*
	* @example
	* var NINF = require( '@stdlib/constants-float64-ninf' );
	*
	* var out = normalize( NINF, [ 0.0, 0 ], 1, 0 );
	* // returns [ -Infinity, 0 ]
	*
	* @example
	* var out = normalize( NaN, [ 0.0, 0 ], 1, 0 );
	* // returns [ NaN, 0 ]
	*/
	function normalize( x, out, stride, offset ) {
		if ( isnan( x ) || isInfinite( x ) ) {
			out[ offset ] = x;
			out[ offset + stride ] = 0;
			return out;
		}
		if ( x !== 0.0 && abs( x ) < FLOAT64_SMALLEST_NORMAL ) {
			out[ offset ] = x * SCALAR;
			out[ offset + stride ] = -52;
			return out;
		}
		out[ offset ] = x;
		out[ offset + stride ] = 0;
		return out;
	}


	// EXPORTS //

	assign = normalize;
	return assign;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main$1;
var hasRequiredMain$1;

function requireMain$1 () {
	if (hasRequiredMain$1) return main$1;
	hasRequiredMain$1 = 1;

	// MODULES //

	var fcn = requireAssign();


	// MAIN //

	/**
	* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
	*
	* @param {number} x - input value
	* @returns {NumberArray} output array
	*
	* @example
	* var pow = require( '@stdlib/math-base-special-pow' );
	*
	* var out = normalize( 3.14e-319 );
	* // returns [ 1.4141234400356668e-303, -52 ]
	*
	* var y = out[ 0 ];
	* var exp = out[ 1 ];
	*
	* var bool = ( y*pow(2.0,exp) === 3.14e-319 );
	* // returns true
	*
	* @example
	* var out = normalize( 0.0 );
	* // returns [ 0.0, 0 ]
	*
	* @example
	* var PINF = require( '@stdlib/constants-float64-pinf' );
	*
	* var out = normalize( PINF );
	* // returns [ Infinity, 0 ]
	*
	* @example
	* var NINF = require( '@stdlib/constants-float64-ninf' );
	*
	* var out = normalize( NINF );
	* // returns [ -Infinity, 0 ]
	*
	* @example
	* var out = normalize( NaN );
	* // returns [ NaN, 0 ]
	*/
	function normalize( x ) {
		return fcn( x, [ 0.0, 0 ], 1, 0 );
	}


	// EXPORTS //

	main$1 = normalize;
	return main$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$3;
var hasRequiredLib$3;

function requireLib$3 () {
	if (hasRequiredLib$3) return lib$3;
	hasRequiredLib$3 = 1;

	/**
	* Return a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
	*
	* @module @stdlib/number-float64-base-normalize
	*
	* @example
	* var normalize = require( '@stdlib/number-float64-base-normalize' );
	* var pow = require( '@stdlib/math-base-special-pow' );
	*
	* var out = normalize( 3.14e-319 );
	* // returns [ 1.4141234400356668e-303, -52 ]
	*
	* var y = out[ 0 ];
	* var exp = out[ 1 ];
	*
	* var bool = ( y*pow(2.0, exp) === 3.14e-319 );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	* var normalize = require( '@stdlib/number-float64-base-normalize' );
	*
	* var out = new Float64Array( 2 );
	*
	* var v = normalize.assign( 3.14e-319, out, 1, 0 );
	* // returns <Float64Array>[ 1.4141234400356668e-303, -52 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/

	// MODULES //

	var setReadOnly = requireLib$u();
	var main = requireMain$1();
	var assign = requireAssign();


	// MAIN //

	setReadOnly( main, 'assign', assign );


	// EXPORTS //

	lib$3 = main;
	return lib$3;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$2;
var hasRequiredLib$2;

function requireLib$2 () {
	if (hasRequiredLib$2) return lib$2;
	hasRequiredLib$2 = 1;

	/**
	* High word mask for the exponent of a double-precision floating-point number.
	*
	* @module @stdlib/constants-float64-high-word-exponent-mask
	* @type {uinteger32}
	*
	* @example
	* var FLOAT64_HIGH_WORD_EXPONENT_MASK = require( '@stdlib/constants-float64-high-word-exponent-mask' );
	* // returns 2146435072
	*/


	// MAIN //

	/**
	* High word mask for the exponent of a double-precision floating-point number.
	*
	* ## Notes
	*
	* The high word mask for the exponent of a double-precision floating-point number is an unsigned 32-bit integer with the value \\( 2146435072 \\), which corresponds to the bit sequence
	*
	* ```binarystring
	* 0 11111111111 00000000000000000000
	* ```
	*
	* @constant
	* @type {uinteger32}
	* @default 0x7ff00000
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_HIGH_WORD_EXPONENT_MASK = 0x7ff00000;


	// EXPORTS //

	lib$2 = FLOAT64_HIGH_WORD_EXPONENT_MASK;
	return lib$2;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var main;
var hasRequiredMain;

function requireMain () {
	if (hasRequiredMain) return main;
	hasRequiredMain = 1;

	// MODULES //

	var getHighWord = requireLib$8();
	var EXP_MASK = requireLib$2();
	var BIAS = requireLib$D();


	// MAIN //

	/**
	* Returns an integer corresponding to the unbiased exponent of a double-precision floating-point number.
	*
	* @param {number} x - input value
	* @returns {integer32} unbiased exponent
	*
	* @example
	* var exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
	* // returns -1019
	*
	* @example
	* var exp = exponent( -3.14 );
	* // returns 1
	*
	* @example
	* var exp = exponent( 0.0 );
	* // returns -1023
	*
	* @example
	* var exp = exponent( NaN );
	* // returns 1024
	*/
	function exponent( x ) {
		// Extract from the input value a higher order word (unsigned 32-bit integer) which contains the exponent:
		var high = getHighWord( x );

		// Apply a mask to isolate only the exponent bits and then shift off all bits which are part of the fraction:
		high = ( high & EXP_MASK ) >>> 20;

		// Remove the bias and return:
		return (high - BIAS)|0; // asm type annotation
	}


	// EXPORTS //

	main = exponent;
	return main;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib$1;
var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib$1;
	hasRequiredLib$1 = 1;

	/**
	* Return an integer corresponding to the unbiased exponent of a double-precision floating-point number.
	*
	* @module @stdlib/number-float64-base-exponent
	*
	* @example
	* var exponent = require( '@stdlib/number-float64-base-exponent' );
	*
	* var exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
	* // returns -1019
	*
	* exp = exponent( -3.14 );
	* // returns 1
	*
	* exp = exponent( 0.0 );
	* // returns -1023
	*
	* exp = exponent( NaN );
	* // returns 1024
	*/

	// MODULES //

	var exponent = requireMain();


	// EXPORTS //

	lib$1 = exponent;
	return lib$1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var ldexp_1;
var hasRequiredLdexp;

function requireLdexp () {
	if (hasRequiredLdexp) return ldexp_1;
	hasRequiredLdexp = 1;

	// NOTES //

	/*
	* => ldexp: load exponent (see [The Open Group]{@link http://pubs.opengroup.org/onlinepubs/9699919799/functions/ldexp.html} and [cppreference]{@link http://en.cppreference.com/w/c/numeric/math/ldexp}).
	*/


	// MODULES //

	var PINF = requireLib$G();
	var NINF = requireLib$E();
	var BIAS = requireLib$D();
	var MAX_EXPONENT = requireLib$C();
	var MAX_SUBNORMAL_EXPONENT = requireLib$B();
	var MIN_SUBNORMAL_EXPONENT = requireLib$A();
	var isnan = requireLib$z();
	var isInfinite = requireLib$y();
	var copysign = requireLib$6();
	var normalize = requireLib$3();
	var floatExp = requireLib$1();
	var toWords = requireLib$9();
	var fromWords = requireLib$7();


	// VARIABLES //

	// 1/(1<<52) = 1/(2**52) = 1/4503599627370496
	var TWO52_INV = 2.220446049250313e-16;

	// Exponent all 0s: 1 00000000000 11111111111111111111 => 2148532223
	var CLEAR_EXP_MASK = 0x800fffff>>>0; // asm type annotation

	// Normalization workspace:
	var FRAC = [ 0.0, 0.0 ]; // WARNING: not thread safe

	// High/low words workspace:
	var WORDS = [ 0, 0 ]; // WARNING: not thread safe


	// MAIN //

	/**
	* Multiplies a double-precision floating-point number by an integer power of two.
	*
	* @param {number} frac - fraction
	* @param {integer} exp - exponent
	* @returns {number} double-precision floating-point number
	*
	* @example
	* var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
	* // returns 4.0
	*
	* @example
	* var x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
	* // returns 1.0
	*
	* @example
	* var x = ldexp( 0.0, 20 );
	* // returns 0.0
	*
	* @example
	* var x = ldexp( -0.0, 39 );
	* // returns -0.0
	*
	* @example
	* var x = ldexp( NaN, -101 );
	* // returns NaN
	*
	* @example
	* var x = ldexp( Infinity, 11 );
	* // returns Infinity
	*
	* @example
	* var x = ldexp( -Infinity, -118 );
	* // returns -Infinity
	*/
	function ldexp( frac, exp ) {
		var high;
		var m;
		if (
			frac === 0.0 || // handles +-0
			isnan( frac ) ||
			isInfinite( frac )
		) {
			return frac;
		}
		// Normalize the input fraction:
		normalize( FRAC, frac );
		frac = FRAC[ 0 ];
		exp += FRAC[ 1 ];

		// Extract the exponent from `frac` and add it to `exp`:
		exp += floatExp( frac );

		// Check for underflow/overflow...
		if ( exp < MIN_SUBNORMAL_EXPONENT ) {
			return copysign( 0.0, frac );
		}
		if ( exp > MAX_EXPONENT ) {
			if ( frac < 0.0 ) {
				return NINF;
			}
			return PINF;
		}
		// Check for a subnormal and scale accordingly to retain precision...
		if ( exp <= MAX_SUBNORMAL_EXPONENT ) {
			exp += 52;
			m = TWO52_INV;
		} else {
			m = 1.0;
		}
		// Split the fraction into higher and lower order words:
		toWords( WORDS, frac );
		high = WORDS[ 0 ];

		// Clear the exponent bits within the higher order word:
		high &= CLEAR_EXP_MASK;

		// Set the exponent bits to the new exponent:
		high |= ((exp+BIAS) << 20);

		// Create a new floating-point number:
		return m * fromWords( high, WORDS[ 1 ] );
	}


	// EXPORTS //

	ldexp_1 = ldexp;
	return ldexp_1;
}

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var lib;
var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;

	/**
	* Multiply a double-precision floating-point number by an integer power of two.
	*
	* @module @stdlib/math-base-special-ldexp
	*
	* @example
	* var ldexp = require( '@stdlib/math-base-special-ldexp' );
	*
	* var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
	* // returns 4.0
	*
	* x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
	* // returns 1.0
	*
	* x = ldexp( 0.0, 20 );
	* // returns 0.0
	*
	* x = ldexp( -0.0, 39 );
	* // returns -0.0
	*
	* x = ldexp( NaN, -101 );
	* // returns NaN
	*
	* x = ldexp( Infinity, 11 );
	* // returns Infinity
	*
	* x = ldexp( -Infinity, -118 );
	* // returns -Infinity
	*/

	// MODULES //

	var ldexp = requireLdexp();


	// EXPORTS //

	lib = ldexp;
	return lib;
}

var unset = {};

var hasRequiredUnset;

function requireUnset () {
	if (hasRequiredUnset) return unset;
	hasRequiredUnset = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(unset, "__esModule", { value: true });
	unset.unset = void 0;
	var dlv_1 = __importDefault(require$$0);
	function unset$1(obj, prop) {
	    if ((0, dlv_1.default)(obj, prop)) {
	        var segs = prop.split('.');
	        var last = segs.pop();
	        while (segs.length && segs[segs.length - 1].slice(-1) === '\\') {
	            last = segs.pop().slice(0, -1) + '.' + last;
	        }
	        while (segs.length)
	            obj = obj[(prop = segs.shift())];
	        return delete obj[last];
	    }
	    return true;
	}
	unset.unset = unset$1;
	
	return unset;
}

var hasRequiredTransformers;

function requireTransformers () {
	if (hasRequiredTransformers) return transformers;
	hasRequiredTransformers = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(transformers, "__esModule", { value: true });
	var md5_1 = __importDefault(require$$0$1);
	var dlv_1 = __importDefault(require$$0);
	var math_base_special_ldexp_1 = __importDefault(requireLib());
	var dset_1 = dist$2;
	var unset_1 = requireUnset();
	function transform(payload, transformers) {
	    var transformedPayload = payload;
	    for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
	        var transformer = transformers_1[_i];
	        switch (transformer.type) {
	            case 'drop':
	                return null;
	            case 'drop_properties':
	                dropProperties(transformedPayload, transformer.config);
	                break;
	            case 'allow_properties':
	                allowProperties(transformedPayload, transformer.config);
	                break;
	            case 'sample_event':
	                if (sampleEvent(transformedPayload, transformer.config)) {
	                    break;
	                }
	                return null;
	            case 'map_properties':
	                mapProperties(transformedPayload, transformer.config);
	                break;
	            case 'hash_properties':
	                // Not yet supported, but don't throw an error. Just ignore.
	                break;
	            default:
	                throw new Error("Transformer of type \"".concat(transformer.type, "\" is unsupported."));
	        }
	    }
	    return transformedPayload;
	}
	transformers.default = transform;
	// dropProperties removes all specified props from the object.
	function dropProperties(payload, config) {
	    filterProperties(payload, config.drop, function (matchedObj, dropList) {
	        dropList.forEach(function (k) { return delete matchedObj[k]; });
	    });
	}
	// allowProperties ONLY allows the specific targets within the keys. (e.g. "a.foo": ["bar", "baz"]
	// on {a: {foo: {bar: 1, baz: 2}, other: 3}} will not have any drops, as it only looks inside a.foo
	function allowProperties(payload, config) {
	    filterProperties(payload, config.allow, function (matchedObj, preserveList) {
	        Object.keys(matchedObj).forEach(function (key) {
	            if (!preserveList.includes(key)) {
	                delete matchedObj[key];
	            }
	        });
	    });
	}
	function filterProperties(payload, ruleSet, filterCb) {
	    Object.entries(ruleSet).forEach(function (_a) {
	        var key = _a[0], targets = _a[1];
	        var filter = function (obj) {
	            // Can only act on objects.
	            if (typeof obj !== 'object' || obj === null) {
	                return;
	            }
	            filterCb(obj, targets);
	        };
	        // If key is empty, it refers to the top-level object.
	        var matchedObject = key === '' ? payload : (0, dlv_1.default)(payload, key);
	        if (Array.isArray(matchedObject)) {
	            matchedObject.forEach(filter);
	        }
	        else {
	            filter(matchedObject);
	        }
	    });
	}
	function mapProperties(payload, config) {
	    // Some configs might try to modify or read from a field multiple times. We will only ever read
	    // values as they were before any modifications began. Thus, if you try to override e.g.
	    // {a: {b: 1}} with set(a, 'b', 2) (which results in {a: {b: 2}}) and then try to copy a.b into
	    // a.c, you will get {a: {b: 2, c:1}} and NOT {a: {b:2, c:2}}. This prevents map evaluation
	    // order from mattering, and === what server-side does.
	    // See: https://github.com/segmentio/tsub/blob/661695a63b60b90471796e667458f076af788c19/transformers/map_properties.go#L179-L200
	    var initialPayload = JSON.parse(JSON.stringify(payload));
	    for (var key in config.map) {
	        if (!config.map.hasOwnProperty(key)) {
	            continue;
	        }
	        var actionMap = config.map[key];
	        // Can't manipulate non-objects. Check that the parent is one. Strip the last .field
	        // from the string.
	        var splitKey = key.split('.');
	        var parent_1 = void 0;
	        if (splitKey.length > 1) {
	            splitKey.pop();
	            parent_1 = (0, dlv_1.default)(initialPayload, splitKey.join('.'));
	        }
	        else {
	            parent_1 = payload;
	        }
	        if (typeof parent_1 !== 'object') {
	            continue;
	        }
	        // These actions are exclusive to each other.
	        if (actionMap.copy) {
	            var valueToCopy = (0, dlv_1.default)(initialPayload, actionMap.copy);
	            if (valueToCopy !== undefined) {
	                (0, dset_1.dset)(payload, key, valueToCopy);
	            }
	        }
	        else if (actionMap.move) {
	            var valueToMove = (0, dlv_1.default)(initialPayload, actionMap.move);
	            if (valueToMove !== undefined) {
	                (0, dset_1.dset)(payload, key, valueToMove);
	            }
	            (0, unset_1.unset)(payload, actionMap.move);
	        }
	        // Have to check only if property exists, as null, undefined, and other vals could be explicitly set.
	        else if (actionMap.hasOwnProperty('set')) {
	            (0, dset_1.dset)(payload, key, actionMap.set);
	        }
	        // to_string is not exclusive and can be paired with other actions. Final action.
	        if (actionMap.to_string) {
	            var valueToString = (0, dlv_1.default)(payload, key);
	            // Do not string arrays and objects. Do not double-encode strings.
	            if (typeof valueToString === 'string' ||
	                (typeof valueToString === 'object' && valueToString !== null)) {
	                continue;
	            }
	            // TODO: Check stringifier in Golang for parity.
	            if (valueToString !== undefined) {
	                (0, dset_1.dset)(payload, key, JSON.stringify(valueToString));
	            }
	            else {
	                // TODO: Check this behavior.
	                (0, dset_1.dset)(payload, key, 'undefined');
	            }
	        }
	    }
	}
	function sampleEvent(payload, config) {
	    if (config.sample.percent <= 0) {
	        return false;
	    }
	    else if (config.sample.percent >= 1) {
	        return true;
	    }
	    // If we're not filtering deterministically, just use raw percentage.
	    if (!config.sample.path) {
	        return samplePercent(config.sample.percent);
	    }
	    // Otherwise, use a deterministic hash.
	    return sampleConsistentPercent(payload, config);
	}
	function samplePercent(percent) {
	    // Math.random returns [0, 1) => 0.0<>0.9999...
	    return Math.random() <= percent;
	}
	// sampleConsistentPercent converts an input string of bytes into a consistent uniform
	// continuous distribution of [0.0, 1.0]. This is based on
	// http://mumble.net/~campbell/tmp/random_real.c, but using the digest
	// result of the input value as the random information.
	// IMPORTANT - This function needs to === the Golang implementation to ensure that the two return the same vals!
	// See: https://github.com/segmentio/sampler/blob/65cb04132305a04fcd4bcaef67d57fbe40c30241/sampler.go#L13-L38
	// Since AJS supports IE9+ (typed arrays were introduced in IE10) we're doing some manual array math.
	// This could be done directly with strings, but arrays are easier to reason about/have better function support.
	function sampleConsistentPercent(payload, config) {
	    var field = (0, dlv_1.default)(payload, config.sample.path);
	    // Operate off of JSON bytes. TODO: Validate all type behavior, esp. strings.
	    var digest = (0, md5_1.default)(JSON.stringify(field));
	    var exponent = -64;
	    // Manually maintain 64-bit int as an array.
	    var significand = [];
	    // Left-shift and OR for first 8 bytes of digest. (8 bytes * 8 = 64 bits)
	    consumeDigest(digest.slice(0, 8), significand);
	    var leadingZeros = 0;
	    for (var i = 0; i < 64; i++) {
	        if (significand[i] === 1) {
	            break;
	        }
	        leadingZeros++;
	    }
	    if (leadingZeros !== 0) {
	        // Use the last 8 bytes of the digest, same as before.
	        var val = [];
	        consumeDigest(digest.slice(9, 16), val);
	        exponent -= leadingZeros;
	        // Left-shift away leading zeros in significand.
	        significand.splice(0, leadingZeros);
	        // Right-shift val by 64 minus leading zeros and push into significand.
	        val.splice(64 - leadingZeros);
	        significand = significand.concat(val);
	    }
	    // Flip 64th bit
	    significand[63] = significand[63] === 0 ? 1 : 0;
	    // Convert our manual binary into a JS num (binary arr => binary string => psuedo-int) and run the ldexp!
	    return (0, math_base_special_ldexp_1.default)(parseInt(significand.join(''), 2), exponent) < config.sample.percent;
	}
	// Array byte filler helper
	function consumeDigest(digest, arr) {
	    for (var i = 0; i < 8; i++) {
	        var remainder = digest[i];
	        for (var binary = 128; binary >= 1; binary /= 2) {
	            if (remainder - binary >= 0) {
	                remainder -= binary;
	                arr.push(1);
	            }
	            else {
	                arr.push(0);
	            }
	        }
	    }
	}
	
	return transformers;
}

var matchers = {};

var hasRequiredMatchers;

function requireMatchers () {
	if (hasRequiredMatchers) return matchers;
	hasRequiredMatchers = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(matchers, "__esModule", { value: true });
	var dlv_1 = __importDefault(require$$0);
	function matches(event, matcher) {
	    if (!matcher) {
	        throw new Error('No matcher supplied!');
	    }
	    switch (matcher.type) {
	        case 'all':
	            return all();
	        case 'fql':
	            return fql(matcher.ir, event);
	        default:
	            throw new Error("Matcher of type ".concat(matcher.type, " unsupported."));
	    }
	}
	matchers.default = matches;
	function all() {
	    return true;
	}
	function fql(ir, event) {
	    if (!ir) {
	        return false;
	    }
	    try {
	        ir = JSON.parse(ir);
	    }
	    catch (e) {
	        throw new Error("Failed to JSON.parse FQL intermediate representation \"".concat(ir, "\": ").concat(e));
	    }
	    var result = fqlEvaluate(ir, event);
	    if (typeof result !== 'boolean') {
	        // An error was returned, or a lowercase, typeof, or similar function was run alone. Nothing to evaluate.
	        return false;
	    }
	    return result;
	}
	// FQL is 100% type strict in Go. Show no mercy to types which do not comply.
	function fqlEvaluate(ir, event) {
	    // If the given ir chunk is not an array, then we should check the single given path or value for literally `true`.
	    if (!Array.isArray(ir)) {
	        return getValue(ir, event) === true;
	    }
	    // Otherwise, it is a sequence of ordered steps to follow to reach our solution!
	    var item = ir[0];
	    switch (item) {
	        /*** Unary cases ***/
	        // '!' => Invert the result
	        case '!':
	            return !fqlEvaluate(ir[1], event);
	        /*** Binary cases ***/
	        // 'or' => Any condition being true returns true
	        case 'or':
	            for (var i = 1; i < ir.length; i++) {
	                if (fqlEvaluate(ir[i], event)) {
	                    return true;
	                }
	            }
	            return false;
	        // 'and' => Any condition being false returns false
	        case 'and':
	            for (var i = 1; i < ir.length; i++) {
	                if (!fqlEvaluate(ir[i], event)) {
	                    return false;
	                }
	            }
	            return true;
	        // Equivalence comparisons
	        case '=':
	        case '!=':
	            return compareItems(getValue(ir[1], event), getValue(ir[2], event), item, event);
	        // Numerical comparisons
	        case '<=':
	        case '<':
	        case '>':
	        case '>=':
	            // Compare the two values with the given operator.
	            return compareNumbers(getValue(ir[1], event), getValue(ir[2], event), item, event);
	        // item in [list]' => Checks whether item is in list
	        case 'in':
	            return checkInList(getValue(ir[1], event), getValue(ir[2], event), event);
	        /*** Functions ***/
	        // 'contains(str1, str2)' => The first string has a substring of the second string
	        case 'contains':
	            return contains(getValue(ir[1], event), getValue(ir[2], event));
	        // 'match(str, match)' => The given string matches the provided glob matcher
	        case 'match':
	            return match(getValue(ir[1], event), getValue(ir[2], event));
	        // 'lowercase(str)' => Returns a lowercased string, null if the item is not a string
	        case 'lowercase':
	            var target = getValue(ir[1], event);
	            if (typeof target !== 'string') {
	                return null;
	            }
	            return target.toLowerCase();
	        // 'typeof(val)' => Returns the FQL type of the value
	        case 'typeof':
	            // TODO: Do we need mapping to allow for universal comparisons? e.g. Object -> JSON, Array -> List, Floats?
	            return typeof getValue(ir[1], event);
	        // 'length(val)' => Returns the length of an array or string, NaN if neither
	        case 'length':
	            return length(getValue(ir[1], event));
	        // If nothing hit, we or the IR messed up somewhere.
	        default:
	            throw new Error("FQL IR could not evaluate for token: ".concat(item));
	    }
	}
	function getValue(item, event) {
	    // If item is an array, leave it as-is.
	    if (Array.isArray(item)) {
	        return item;
	    }
	    // If item is an object, it has the form of `{"value": VAL}`
	    if (typeof item === 'object') {
	        return item.value;
	    }
	    // Otherwise, it's an event path, e.g. "properties.email"
	    return (0, dlv_1.default)(event, item);
	}
	function checkInList(item, list, event) {
	    return list.find(function (it) { return getValue(it, event) === item; }) !== undefined;
	}
	function compareNumbers(first, second, operator, event) {
	    // Check if it's more IR (such as a length() function)
	    if (isIR(first)) {
	        first = fqlEvaluate(first, event);
	    }
	    if (isIR(second)) {
	        second = fqlEvaluate(second, event);
	    }
	    if (typeof first !== 'number' || typeof second !== 'number') {
	        return false;
	    }
	    // Reminder: NaN is not comparable to any other number (including NaN) and will always return false as desired.
	    switch (operator) {
	        // '<=' => The first number is less than or equal to the second.
	        case '<=':
	            return first <= second;
	        // '>=' => The first number is greater than or equal to the second
	        case '>=':
	            return first >= second;
	        // '<' The first number is less than the second.
	        case '<':
	            return first < second;
	        // '>' The first number is greater than the second.
	        case '>':
	            return first > second;
	        default:
	            throw new Error("Invalid operator in compareNumbers: ".concat(operator));
	    }
	}
	function compareItems(first, second, operator, event) {
	    // Check if it's more IR (such as a lowercase() function)
	    if (isIR(first)) {
	        first = fqlEvaluate(first, event);
	    }
	    if (isIR(second)) {
	        second = fqlEvaluate(second, event);
	    }
	    if (typeof first === 'object' && typeof second === 'object') {
	        first = JSON.stringify(first);
	        second = JSON.stringify(second);
	    }
	    // Objects with the exact same contents AND order ARE considered identical. (Don't compare by reference)
	    // Even in Go, this MUST be the same byte order.
	    // e.g. {a: 1, b:2} === {a: 1, b:2} BUT {a:1, b:2} !== {b:2, a:1}
	    // Maybe later we'll use a stable stringifier, but we're matching server-side behavior for now.
	    switch (operator) {
	        // '=' => The two following items are exactly identical
	        case '=':
	            return first === second;
	        // '!=' => The two following items are NOT exactly identical.
	        case '!=':
	            return first !== second;
	        default:
	            throw new Error("Invalid operator in compareItems: ".concat(operator));
	    }
	}
	function contains(first, second) {
	    if (typeof first !== 'string' || typeof second !== 'string') {
	        return false;
	    }
	    return first.indexOf(second) !== -1;
	}
	function match(str, glob) {
	    if (typeof str !== 'string' || typeof glob !== 'string') {
	        return false;
	    }
	    return globMatches(glob, str);
	}
	function length(item) {
	    // Match server-side behavior.
	    if (item === null) {
	        return 0;
	    }
	    // Type-check to avoid returning .length of an object
	    if (!Array.isArray(item) && typeof item !== 'string') {
	        return NaN;
	    }
	    return item.length;
	}
	// This is a heuristic technically speaking, but should be close enough. The odds of someone trying to test
	// a func with identical IR notation is pretty low.
	function isIR(value) {
	    // TODO: This can be better checked by checking if this is a {"value": THIS}
	    if (!Array.isArray(value)) {
	        return false;
	    }
	    // Function checks
	    if ((value[0] === 'lowercase' || value[0] === 'length' || value[0] === 'typeof') &&
	        value.length === 2) {
	        return true;
	    }
	    if ((value[0] === 'contains' || value[0] === 'match') && value.length === 3) {
	        return true;
	    }
	    return false;
	}
	// Any reputable glob matcher is designed to work on filesystems and doesn't allow the override of the separator
	// character "/". This is problematic since our server-side representation e.g. evaluates "match('ab/c', 'a*)"
	// as TRUE, whereas any glob matcher for JS available does false. So we're rewriting it here.
	// See: https://github.com/segmentio/glob/blob/master/glob.go
	function globMatches(pattern, str) {
	    var _a, _b;
	    Pattern: while (pattern.length > 0) {
	        var star = void 0;
	        var chunk = void 0;
	        (_a = scanChunk(pattern), star = _a.star, chunk = _a.chunk, pattern = _a.pattern);
	        if (star && chunk === '') {
	            // Trailing * matches rest of string
	            return true;
	        }
	        // Look for match at current position
	        var _c = matchChunk(chunk, str), t = _c.t, ok = _c.ok, err = _c.err;
	        if (err) {
	            return false;
	        }
	        // If we're the last chunk, make sure we've exhausted the str
	        // otherwise we'll give a false result even if we could still match
	        // using the star
	        if (ok && (t.length === 0 || pattern.length > 0)) {
	            str = t;
	            continue;
	        }
	        if (star) {
	            // Look for match, skipping i+1 bytes.
	            for (var i = 0; i < str.length; i++) {
	                (_b = matchChunk(chunk, str.slice(i + 1)), t = _b.t, ok = _b.ok, err = _b.err);
	                if (ok) {
	                    // If we're the last chunk, make sure we exhausted the str.
	                    if (pattern.length === 0 && t.length > 0) {
	                        continue;
	                    }
	                    str = t;
	                    continue Pattern;
	                }
	                if (err) {
	                    return false;
	                }
	            }
	        }
	        return false;
	    }
	    return str.length === 0;
	}
	function scanChunk(pattern) {
	    var result = {
	        star: false,
	        chunk: '',
	        pattern: '',
	    };
	    while (pattern.length > 0 && pattern[0] === '*') {
	        pattern = pattern.slice(1);
	        result.star = true;
	    }
	    var inRange = false;
	    var i;
	    Scan: for (i = 0; i < pattern.length; i++) {
	        switch (pattern[i]) {
	            case '\\':
	                // Error check handled in matchChunk: bad pattern.
	                if (i + 1 < pattern.length) {
	                    i++;
	                }
	                break;
	            case '[':
	                inRange = true;
	                break;
	            case ']':
	                inRange = false;
	                break;
	            case '*':
	                if (!inRange) {
	                    break Scan;
	                }
	        }
	    }
	    result.chunk = pattern.slice(0, i);
	    result.pattern = pattern.slice(i);
	    return result;
	}
	// matchChunk checks whether chunk matches the beginning of s.
	// If so, it returns the remainder of s (after the match).
	// Chunk is all single-character operators: literals, char classes, and ?.
	function matchChunk(chunk, str) {
	    var _a, _b;
	    var result = {
	        t: '',
	        ok: false,
	        err: false,
	    };
	    while (chunk.length > 0) {
	        if (str.length === 0) {
	            return result;
	        }
	        switch (chunk[0]) {
	            case '[':
	                var char = str[0];
	                str = str.slice(1);
	                chunk = chunk.slice(1);
	                var notNegated = true;
	                if (chunk.length > 0 && chunk[0] === '^') {
	                    notNegated = false;
	                    chunk = chunk.slice(1);
	                }
	                // Parse all ranges
	                var foundMatch = false;
	                var nRange = 0;
	                while (true) {
	                    if (chunk.length > 0 && chunk[0] === ']' && nRange > 0) {
	                        chunk = chunk.slice(1);
	                        break;
	                    }
	                    var lo = '';
	                    var hi = '';
	                    var err = void 0;
	                    (_a = getEsc(chunk), lo = _a.char, chunk = _a.newChunk, err = _a.err);
	                    if (err) {
	                        return result;
	                    }
	                    hi = lo;
	                    if (chunk[0] === '-') {
	                        (_b = getEsc(chunk.slice(1)), hi = _b.char, chunk = _b.newChunk, err = _b.err);
	                        if (err) {
	                            return result;
	                        }
	                    }
	                    if (lo <= char && char <= hi) {
	                        foundMatch = true;
	                    }
	                    nRange++;
	                }
	                if (foundMatch !== notNegated) {
	                    return result;
	                }
	                break;
	            case '?':
	                str = str.slice(1);
	                chunk = chunk.slice(1);
	                break;
	            case '\\':
	                chunk = chunk.slice(1);
	                if (chunk.length === 0) {
	                    result.err = true;
	                    return result;
	                }
	            // Fallthrough, missing break intentional.
	            default:
	                if (chunk[0] !== str[0]) {
	                    return result;
	                }
	                str = str.slice(1);
	                chunk = chunk.slice(1);
	        }
	    }
	    result.t = str;
	    result.ok = true;
	    result.err = false;
	    return result;
	}
	// getEsc gets a possibly-escaped character from chunk, for a character class.
	function getEsc(chunk) {
	    var result = {
	        char: '',
	        newChunk: '',
	        err: false,
	    };
	    if (chunk.length === 0 || chunk[0] === '-' || chunk[0] === ']') {
	        result.err = true;
	        return result;
	    }
	    if (chunk[0] === '\\') {
	        chunk = chunk.slice(1);
	        if (chunk.length === 0) {
	            result.err = true;
	            return result;
	        }
	    }
	    // Unlike Go, JS strings operate on characters instead of bytes.
	    // This is why we aren't copying over the GetRuneFromString stuff.
	    result.char = chunk[0];
	    result.newChunk = chunk.slice(1);
	    if (result.newChunk.length === 0) {
	        result.err = true;
	    }
	    return result;
	}
	
	return matchers;
}

var store = {};

var hasRequiredStore;

function requireStore () {
	if (hasRequiredStore) return store;
	hasRequiredStore = 1;
	Object.defineProperty(store, "__esModule", { value: true });
	var Store = /** @class */ (function () {
	    function Store(rules) {
	        this.rules = [];
	        this.rules = rules || [];
	    }
	    Store.prototype.getRulesByDestinationName = function (destinationName) {
	        var rules = [];
	        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
	            var rule = _a[_i];
	            // Rules with no destinationName are global (workspace || workspace::source)
	            if (rule.destinationName === destinationName || rule.destinationName === undefined) {
	                rules.push(rule);
	            }
	        }
	        return rules;
	    };
	    return Store;
	}());
	store.default = Store;
	
	return store;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	(function (exports) {
		var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Store = exports.matches = exports.transform = void 0;
		var transformers_1 = requireTransformers();
		Object.defineProperty(exports, "transform", { enumerable: true, get: function () { return __importDefault(transformers_1).default; } });
		var matchers_1 = requireMatchers();
		Object.defineProperty(exports, "matches", { enumerable: true, get: function () { return __importDefault(matchers_1).default; } });
		var store_1 = requireStore();
		Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return __importDefault(store_1).default; } });
		
	} (dist));
	return dist;
}

var hasRequiredRoutingMiddleware;

function requireRoutingMiddleware () {
	if (hasRequiredRoutingMiddleware) return routingMiddleware;
	hasRequiredRoutingMiddleware = 1;
	Object.defineProperty(routingMiddleware, "__esModule", { value: true });
	routingMiddleware.tsubMiddleware = void 0;
	var tslib_1 = require$$0$2;
	var tsub = tslib_1.__importStar(requireDist());
	var tsubMiddleware = function (rules) {
	    return function (_a) {
	        var payload = _a.payload, integration = _a.integration, next = _a.next;
	        var store = new tsub.Store(rules);
	        var rulesToApply = store.getRulesByDestinationName(integration);
	        rulesToApply.forEach(function (rule) {
	            var matchers = rule.matchers, transformers = rule.transformers;
	            for (var i = 0; i < matchers.length; i++) {
	                if (tsub.matches(payload.obj, matchers[i])) {
	                    payload.obj = tsub.transform(payload.obj, transformers[i]);
	                    if (payload.obj === null) {
	                        return next(null);
	                    }
	                }
	            }
	        });
	        next(payload);
	    };
	};
	routingMiddleware.tsubMiddleware = tsubMiddleware;
	
	return routingMiddleware;
}

var ajsDestination = {};

var isPlanEventEnabled = {};

var hasRequiredIsPlanEventEnabled;

function requireIsPlanEventEnabled () {
	if (hasRequiredIsPlanEventEnabled) return isPlanEventEnabled;
	hasRequiredIsPlanEventEnabled = 1;
	Object.defineProperty(isPlanEventEnabled, "__esModule", { value: true });
	isPlanEventEnabled.isPlanEventEnabled = void 0;
	/**
	 * Determines whether a track event is allowed to be sent based on the
	 * user's tracking plan.
	 * If the user does not have a tracking plan or the event is allowed based
	 * on the tracking plan configuration, returns true.
	 */
	function isPlanEventEnabled$1(plan, planEvent) {
	    var _a, _b;
	    // Always prioritize the event's `enabled` status
	    if (typeof (planEvent === null || planEvent === void 0 ? void 0 : planEvent.enabled) === 'boolean') {
	        return planEvent.enabled;
	    }
	    // Assume absence of a tracking plan means events are enabled
	    return (_b = (_a = plan === null || plan === void 0 ? void 0 : plan.__default) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : true;
	}
	isPlanEventEnabled.isPlanEventEnabled = isPlanEventEnabled$1;
	
	return isPlanEventEnabled;
}

var loader = {};

var hasRequiredLoader;

function requireLoader () {
	if (hasRequiredLoader) return loader;
	hasRequiredLoader = 1;
	Object.defineProperty(loader, "__esModule", { value: true });
	loader.resolveVersion = loader.unloadIntegration = loader.loadIntegration = loader.buildIntegration = loader.resolveIntegrationNameFromSource = void 0;
	var tslib_1 = require$$0$2;
	var parse_cdn_1 = parseCdn;
	var load_script_1 = loadScript$1;
	function normalizeName(name) {
	    return name.toLowerCase().replace('.', '').replace(/\s+/g, '-');
	}
	function obfuscatePathName(pathName, obfuscate) {
	    if (obfuscate === void 0) { obfuscate = false; }
	    return obfuscate ? btoa(pathName).replace(/=/g, '') : undefined;
	}
	function resolveIntegrationNameFromSource(integrationSource) {
	    return ('Integration' in integrationSource
	        ? integrationSource.Integration
	        : integrationSource).prototype.name;
	}
	loader.resolveIntegrationNameFromSource = resolveIntegrationNameFromSource;
	function recordLoadMetrics(fullPath, ctx, name) {
	    var _a, _b;
	    try {
	        var metric = ((_b = (_a = window === null || window === void 0 ? void 0 : window.performance) === null || _a === void 0 ? void 0 : _a.getEntriesByName(fullPath, 'resource')) !== null && _b !== void 0 ? _b : [])[0];
	        // we assume everything that took under 100ms is cached
	        metric &&
	            ctx.stats.gauge('legacy_destination_time', Math.round(metric.duration), tslib_1.__spreadArray([
	                name
	            ], (metric.duration < 100 ? ['cached'] : []), true));
	    }
	    catch (_) {
	        // not available
	    }
	}
	function buildIntegration(integrationSource, integrationSettings, analyticsInstance) {
	    var integrationCtr;
	    // GA and Appcues use a different interface to instantiating integrations
	    if ('Integration' in integrationSource) {
	        var analyticsStub = {
	            user: function () { return analyticsInstance.user(); },
	            addIntegration: function () { },
	        };
	        integrationSource(analyticsStub);
	        integrationCtr = integrationSource.Integration;
	    }
	    else {
	        integrationCtr = integrationSource;
	    }
	    var integration = new integrationCtr(integrationSettings);
	    integration.analytics = analyticsInstance;
	    return integration;
	}
	loader.buildIntegration = buildIntegration;
	function loadIntegration(ctx, name, version, obfuscate) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var pathName, obfuscatedPathName, path, fullPath, err_1, deps;
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    pathName = normalizeName(name);
	                    obfuscatedPathName = obfuscatePathName(pathName, obfuscate);
	                    path = (0, parse_cdn_1.getNextIntegrationsURL)();
	                    fullPath = "".concat(path, "/integrations/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, "/").concat(version, "/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, ".dynamic.js.gz");
	                    _a.label = 1;
	                case 1:
	                    _a.trys.push([1, 3, , 4]);
	                    return [4 /*yield*/, (0, load_script_1.loadScript)(fullPath)];
	                case 2:
	                    _a.sent();
	                    recordLoadMetrics(fullPath, ctx, name);
	                    return [3 /*break*/, 4];
	                case 3:
	                    err_1 = _a.sent();
	                    ctx.stats.gauge('legacy_destination_time', -1, ["plugin:".concat(name), "failed"]);
	                    throw err_1;
	                case 4:
	                    deps = window["".concat(pathName, "Deps")];
	                    return [4 /*yield*/, Promise.all(deps.map(function (dep) { return (0, load_script_1.loadScript)(path + dep + '.gz'); }))
	                        // @ts-ignore
	                    ];
	                case 5:
	                    _a.sent();
	                    // @ts-ignore
	                    window["".concat(pathName, "Loader")]();
	                    return [2 /*return*/, window[
	                        // @ts-ignore
	                        "".concat(pathName, "Integration")]];
	            }
	        });
	    });
	}
	loader.loadIntegration = loadIntegration;
	function unloadIntegration(name, version, obfuscate) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var path, pathName, obfuscatedPathName, fullPath;
	        return tslib_1.__generator(this, function (_a) {
	            path = (0, parse_cdn_1.getNextIntegrationsURL)();
	            pathName = normalizeName(name);
	            obfuscatedPathName = obfuscatePathName(name, obfuscate);
	            fullPath = "".concat(path, "/integrations/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, "/").concat(version, "/").concat(obfuscatedPathName !== null && obfuscatedPathName !== void 0 ? obfuscatedPathName : pathName, ".dynamic.js.gz");
	            return [2 /*return*/, (0, load_script_1.unloadScript)(fullPath)];
	        });
	    });
	}
	loader.unloadIntegration = unloadIntegration;
	function resolveVersion(settings) {
	    var _a, _b, _c, _d;
	    return ((_d = (_b = (_a = settings === null || settings === void 0 ? void 0 : settings.versionSettings) === null || _a === void 0 ? void 0 : _a.override) !== null && _b !== void 0 ? _b : (_c = settings === null || settings === void 0 ? void 0 : settings.versionSettings) === null || _c === void 0 ? void 0 : _c.version) !== null && _d !== void 0 ? _d : 'latest');
	}
	loader.resolveVersion = resolveVersion;
	
	return loader;
}

var utils = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	Object.defineProperty(utils, "__esModule", { value: true });
	utils.isDisabledIntegration = utils.isInstallableIntegration = void 0;
	var isInstallableIntegration = function (name, integrationSettings) {
	    var _a;
	    var type = integrationSettings.type, bundlingStatus = integrationSettings.bundlingStatus, versionSettings = integrationSettings.versionSettings;
	    // We use `!== 'unbundled'` (versus `=== 'bundled'`) to be inclusive of
	    // destinations without a defined value for `bundlingStatus`
	    var deviceMode = bundlingStatus !== 'unbundled' &&
	        (type === 'browser' || ((_a = versionSettings === null || versionSettings === void 0 ? void 0 : versionSettings.componentTypes) === null || _a === void 0 ? void 0 : _a.includes('browser')));
	    // checking for iterable is a quick fix we need in place to prevent
	    // errors showing Iterable as a failed destiantion. Ideally, we should
	    // fix the Iterable metadata instead, but that's a longer process.
	    return !name.startsWith('Segment') && name !== 'Iterable' && deviceMode;
	};
	utils.isInstallableIntegration = isInstallableIntegration;
	var isDisabledIntegration = function (integrationName, globalIntegrations) {
	    var allDisableAndNotDefined = globalIntegrations.All === false &&
	        globalIntegrations[integrationName] === undefined;
	    return (globalIntegrations[integrationName] === false || allDisableAndNotDefined);
	};
	utils.isDisabledIntegration = isDisabledIntegration;
	
	return utils;
}

var hasRequiredAjsDestination;

function requireAjsDestination () {
	if (hasRequiredAjsDestination) return ajsDestination;
	hasRequiredAjsDestination = 1;
	Object.defineProperty(ajsDestination, "__esModule", { value: true });
	ajsDestination.ajsDestinations = ajsDestination.LegacyDestination = void 0;
	var tslib_1 = require$$0$2;
	var facade_1 = requireDist$1();
	var connection_1 = connection;
	var context_1 = context;
	var environment_1 = requireEnvironment();
	var analytics_core_1 = require$$5;
	var is_plan_event_enabled_1 = requireIsPlanEventEnabled();
	var merged_options_1 = mergedOptions$1;
	var p_while_1 = requirePWhile();
	var priority_queue_1 = priorityQueue;
	var persisted_1 = persisted$1;
	var middleware_1 = middleware;
	var loader_1 = requireLoader();
	var analytics_core_2 = require$$5;
	var utils_1 = requireUtils();
	var metric_helpers_1 = metricHelpers;
	function flushQueue(xt, queue) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var failedQueue;
	        var _this = this;
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    failedQueue = [];
	                    if ((0, connection_1.isOffline)()) {
	                        return [2 /*return*/, queue];
	                    }
	                    return [4 /*yield*/, (0, p_while_1.pWhile)(function () { return queue.length > 0 && (0, connection_1.isOnline)(); }, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                            var ctx, result, success;
	                            return tslib_1.__generator(this, function (_a) {
	                                switch (_a.label) {
	                                    case 0:
	                                        ctx = queue.pop();
	                                        if (!ctx) {
	                                            return [2 /*return*/];
	                                        }
	                                        return [4 /*yield*/, (0, analytics_core_1.attempt)(ctx, xt)];
	                                    case 1:
	                                        result = _a.sent();
	                                        success = result instanceof context_1.Context;
	                                        if (!success) {
	                                            failedQueue.push(ctx);
	                                        }
	                                        return [2 /*return*/];
	                                }
	                            });
	                        }); })
	                        // re-add failed tasks
	                    ];
	                case 1:
	                    _a.sent();
	                    // re-add failed tasks
	                    failedQueue.map(function (failed) { return queue.pushWithBackoff(failed); });
	                    return [2 /*return*/, queue];
	            }
	        });
	    });
	}
	var LegacyDestination = /** @class */ (function () {
	    function LegacyDestination(name, version, writeKey, settings, options, integrationSource) {
	        if (settings === void 0) { settings = {}; }
	        this.options = {};
	        this.type = 'destination';
	        this.middleware = [];
	        this._ready = false;
	        this._initialized = false;
	        this.flushing = false;
	        this.name = name;
	        this.version = version;
	        this.settings = tslib_1.__assign({}, settings);
	        this.disableAutoISOConversion = options.disableAutoISOConversion || false;
	        this.integrationSource = integrationSource;
	        // AJS-Renderer sets an extraneous `type` setting that clobbers
	        // existing type defaults. We need to remove it if it's present
	        if (this.settings['type'] && this.settings['type'] === 'browser') {
	            delete this.settings['type'];
	        }
	        this.options = options;
	        this.buffer = options.disableClientPersistence
	            ? new priority_queue_1.PriorityQueue(4, [])
	            : new persisted_1.PersistedPriorityQueue(4, "".concat(writeKey, ":dest-").concat(name));
	        this.scheduleFlush();
	    }
	    LegacyDestination.prototype.isLoaded = function () {
	        return this._ready;
	    };
	    LegacyDestination.prototype.ready = function () {
	        var _a;
	        return (_a = this.onReady) !== null && _a !== void 0 ? _a : Promise.resolve();
	    };
	    LegacyDestination.prototype.load = function (ctx, analyticsInstance) {
	        var _a;
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var integrationSource, _b;
	            var _this = this;
	            return tslib_1.__generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0:
	                        if (this._ready || this.onReady !== undefined) {
	                            return [2 /*return*/];
	                        }
	                        if (!((_a = this.integrationSource) !== null && _a !== void 0)) return [3 /*break*/, 1];
	                        _b = _a;
	                        return [3 /*break*/, 3];
	                    case 1: return [4 /*yield*/, (0, loader_1.loadIntegration)(ctx, this.name, this.version, this.options.obfuscate)];
	                    case 2:
	                        _b = (_c.sent());
	                        _c.label = 3;
	                    case 3:
	                        integrationSource = _b;
	                        this.integration = (0, loader_1.buildIntegration)(integrationSource, this.settings, analyticsInstance);
	                        this.onReady = new Promise(function (resolve) {
	                            var onReadyFn = function () {
	                                _this._ready = true;
	                                resolve(true);
	                            };
	                            _this.integration.once('ready', onReadyFn);
	                        });
	                        this.onInitialize = new Promise(function (resolve) {
	                            var onInit = function () {
	                                _this._initialized = true;
	                                resolve(true);
	                            };
	                            _this.integration.on('initialize', onInit);
	                        });
	                        try {
	                            (0, metric_helpers_1.recordIntegrationMetric)(ctx, {
	                                integrationName: this.name,
	                                methodName: 'initialize',
	                                type: 'classic',
	                            });
	                            this.integration.initialize();
	                        }
	                        catch (error) {
	                            (0, metric_helpers_1.recordIntegrationMetric)(ctx, {
	                                integrationName: this.name,
	                                methodName: 'initialize',
	                                type: 'classic',
	                                didError: true,
	                            });
	                            throw error;
	                        }
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    LegacyDestination.prototype.unload = function (_ctx, _analyticsInstance) {
	        return (0, loader_1.unloadIntegration)(this.name, this.version, this.options.obfuscate);
	    };
	    LegacyDestination.prototype.addMiddleware = function () {
	        var _a;
	        var fn = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            fn[_i] = arguments[_i];
	        }
	        this.middleware = (_a = this.middleware).concat.apply(_a, fn);
	    };
	    LegacyDestination.prototype.shouldBuffer = function (ctx) {
	        return (
	        // page events can't be buffered because of destinations that automatically add page views
	        ctx.event.type !== 'page' &&
	            ((0, connection_1.isOffline)() || this._ready === false || this._initialized === false));
	    };
	    LegacyDestination.prototype.send = function (ctx, clz, eventType) {
	        var _a, _b;
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var plan, ev, planEvent, afterMiddleware, event, err_1;
	            return tslib_1.__generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0:
	                        if (this.shouldBuffer(ctx)) {
	                            this.buffer.push(ctx);
	                            this.scheduleFlush();
	                            return [2 /*return*/, ctx];
	                        }
	                        plan = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.plan) === null || _b === void 0 ? void 0 : _b.track;
	                        ev = ctx.event.event;
	                        if (plan && ev && this.name !== 'Segment.io') {
	                            planEvent = plan[ev];
	                            if (!(0, is_plan_event_enabled_1.isPlanEventEnabled)(plan, planEvent)) {
	                                ctx.updateEvent('integrations', tslib_1.__assign(tslib_1.__assign({}, ctx.event.integrations), { All: false, 'Segment.io': true }));
	                                ctx.cancel(new context_1.ContextCancelation({
	                                    retry: false,
	                                    reason: "Event ".concat(ev, " disabled for integration ").concat(this.name, " in tracking plan"),
	                                    type: 'Dropped by plan',
	                                }));
	                                return [2 /*return*/, ctx];
	                            }
	                            else {
	                                ctx.updateEvent('integrations', tslib_1.__assign(tslib_1.__assign({}, ctx.event.integrations), planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations));
	                            }
	                            if ((planEvent === null || planEvent === void 0 ? void 0 : planEvent.enabled) && (planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations[this.name]) === false) {
	                                ctx.cancel(new context_1.ContextCancelation({
	                                    retry: false,
	                                    reason: "Event ".concat(ev, " disabled for integration ").concat(this.name, " in tracking plan"),
	                                    type: 'Dropped by plan',
	                                }));
	                                return [2 /*return*/, ctx];
	                            }
	                        }
	                        return [4 /*yield*/, (0, middleware_1.applyDestinationMiddleware)(this.name, ctx.event, this.middleware)];
	                    case 1:
	                        afterMiddleware = _c.sent();
	                        if (afterMiddleware === null) {
	                            return [2 /*return*/, ctx];
	                        }
	                        event = new clz(afterMiddleware, {
	                            traverse: !this.disableAutoISOConversion,
	                        });
	                        (0, metric_helpers_1.recordIntegrationMetric)(ctx, {
	                            integrationName: this.name,
	                            methodName: eventType,
	                            type: 'classic',
	                        });
	                        _c.label = 2;
	                    case 2:
	                        _c.trys.push([2, 5, , 6]);
	                        if (!this.integration) return [3 /*break*/, 4];
	                        return [4 /*yield*/, this.integration.invoke.call(this.integration, eventType, event)];
	                    case 3:
	                        _c.sent();
	                        _c.label = 4;
	                    case 4: return [3 /*break*/, 6];
	                    case 5:
	                        err_1 = _c.sent();
	                        (0, metric_helpers_1.recordIntegrationMetric)(ctx, {
	                            integrationName: this.name,
	                            methodName: eventType,
	                            type: 'classic',
	                            didError: true,
	                        });
	                        throw err_1;
	                    case 6: return [2 /*return*/, ctx];
	                }
	            });
	        });
	    };
	    LegacyDestination.prototype.track = function (ctx) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, this.send(ctx, facade_1.Track, 'track')];
	            });
	        });
	    };
	    LegacyDestination.prototype.page = function (ctx) {
	        var _a;
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_1.__generator(this, function (_b) {
	                if (((_a = this.integration) === null || _a === void 0 ? void 0 : _a._assumesPageview) && !this._initialized) {
	                    this.integration.initialize();
	                }
	                return [2 /*return*/, this.onInitialize.then(function () {
	                        return _this.send(ctx, facade_1.Page, 'page');
	                    })];
	            });
	        });
	    };
	    LegacyDestination.prototype.identify = function (ctx) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, this.send(ctx, facade_1.Identify, 'identify')];
	            });
	        });
	    };
	    LegacyDestination.prototype.alias = function (ctx) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, this.send(ctx, facade_1.Alias, 'alias')];
	            });
	        });
	    };
	    LegacyDestination.prototype.group = function (ctx) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2 /*return*/, this.send(ctx, facade_1.Group, 'group')];
	            });
	        });
	    };
	    LegacyDestination.prototype.scheduleFlush = function () {
	        var _this = this;
	        if (this.flushing) {
	            return;
	        }
	        // eslint-disable-next-line @typescript-eslint/no-misused-promises
	        setTimeout(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var _a;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        this.flushing = true;
	                        _a = this;
	                        return [4 /*yield*/, flushQueue(this, this.buffer)];
	                    case 1:
	                        _a.buffer = _b.sent();
	                        this.flushing = false;
	                        if (this.buffer.todo > 0) {
	                            this.scheduleFlush();
	                        }
	                        return [2 /*return*/];
	                }
	            });
	        }); }, Math.random() * 5000);
	    };
	    return LegacyDestination;
	}());
	ajsDestination.LegacyDestination = LegacyDestination;
	function ajsDestinations(writeKey, settings, globalIntegrations, options, routingMiddleware, legacyIntegrationSources) {
	    var _a, _b;
	    if (globalIntegrations === void 0) { globalIntegrations = {}; }
	    if (options === void 0) { options = {}; }
	    if ((0, environment_1.isServer)()) {
	        return [];
	    }
	    if (settings.plan) {
	        options = options !== null && options !== void 0 ? options : {};
	        options.plan = settings.plan;
	    }
	    var routingRules = (_b = (_a = settings.middlewareSettings) === null || _a === void 0 ? void 0 : _a.routingRules) !== null && _b !== void 0 ? _b : [];
	    var remoteIntegrationsConfig = settings.integrations;
	    var localIntegrationsConfig = options.integrations;
	    // merged remote CDN settings with user provided options
	    var integrationOptions = (0, merged_options_1.mergedOptions)(settings, options !== null && options !== void 0 ? options : {});
	    var adhocIntegrationSources = legacyIntegrationSources === null || legacyIntegrationSources === void 0 ? void 0 : legacyIntegrationSources.reduce(function (acc, integrationSource) {
	        var _a;
	        return (tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[(0, loader_1.resolveIntegrationNameFromSource)(integrationSource)] = integrationSource, _a)));
	    }, {});
	    var installableIntegrations = new Set(tslib_1.__spreadArray(tslib_1.__spreadArray([], Object.keys(remoteIntegrationsConfig).filter(function (name) {
	        return (0, utils_1.isInstallableIntegration)(name, remoteIntegrationsConfig[name]);
	    }), true), Object.keys(adhocIntegrationSources || {}).filter(function (name) {
	        return (0, analytics_core_2.isPlainObject)(remoteIntegrationsConfig[name]) ||
	            (0, analytics_core_2.isPlainObject)(localIntegrationsConfig === null || localIntegrationsConfig === void 0 ? void 0 : localIntegrationsConfig[name]);
	    }), true));
	    return Array.from(installableIntegrations)
	        .filter(function (name) { return !(0, utils_1.isDisabledIntegration)(name, globalIntegrations); })
	        .map(function (name) {
	        var integrationSettings = remoteIntegrationsConfig[name];
	        var version = (0, loader_1.resolveVersion)(integrationSettings);
	        var destination = new LegacyDestination(name, version, writeKey, integrationOptions[name], options, adhocIntegrationSources === null || adhocIntegrationSources === void 0 ? void 0 : adhocIntegrationSources[name]);
	        var routing = routingRules.filter(function (rule) { return rule.destinationName === name; });
	        if (routing.length > 0 && routingMiddleware) {
	            destination.addMiddleware(routingMiddleware);
	        }
	        return destination;
	    });
	}
	ajsDestination.ajsDestinations = ajsDestinations;
	
	return ajsDestination;
}

var legacyVideoPlugins = {};

var index_umd = {exports: {}};

var hasRequiredIndex_umd;

function requireIndex_umd () {
	if (hasRequiredIndex_umd) return index_umd.exports;
	hasRequiredIndex_umd = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(window,(function(){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t,a){a.r(t);var n="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise((function(a,n){var i=new XMLHttpRequest;for(var r in i.open(t.method||"get",e,!0),t.headers)i.setRequestHeader(r,t.headers[r]);function o(){var e,t=[],a=[],n={};return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(i,r,o){t.push(r=r.toLowerCase()),a.push([r,o]),e=n[r],n[r]=e?e+","+o:o;})),{ok:2==(i.status/100|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:o,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return a},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}i.withCredentials="include"==t.credentials,i.onload=function(){a(o());},i.onerror=n,i.send(t.body);}))};t.default=n;},function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var i=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pluginName=t;}return n(e,[{key:"track",value:function(e,t){window.analytics.track(e,t,{integration:{name:this.pluginName}});}}]),e}();t.default=i;},function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeAnalytics=t.VimeoAnalytics=void 0;var n=r(a(3)),i=r(a(4));function r(e){return e&&e.__esModule?e:{default:e}}t.VimeoAnalytics=n.default,t.YouTubeAnalytics=i.default;},function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=r(a(0));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"VimeoAnalytics"));return n.authToken=a,n.player=e,n.metadata={content:{},playback:{videoPlayer:"Vimeo"}},n.mostRecentHeartbeat=0,n.isPaused=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(t,e),n(t,[{key:"initialize",value:function(){var e=this,t={loaded:this.retrieveMetadata,play:this.trackPlay,pause:this.trackPause,ended:this.trackEnded,timeupdate:this.trackHeartbeat};for(var a in t)this.registerHandler(a,t[a]);this.player.getVideoId().then((function(t){e.retrieveMetadata({id:t});})).catch(console.error);}},{key:"registerHandler",value:function(e,t){var a=this;this.player.on(e,(function(e){a.updateMetadata(e),t.call(a,e);}));}},{key:"trackPlay",value:function(){this.isPaused?(this.track("Video Playback Resumed",this.metadata.playback),this.isPaused=!1):(this.track("Video Playback Started",this.metadata.playback),this.track("Video Content Started",this.metadata.content));}},{key:"trackEnded",value:function(){this.track("Video Playback Completed",this.metadata.playback),this.track("Video Content Completed",this.metadata.content);}},{key:"trackHeartbeat",value:function(){var e=this.mostRecentHeartbeat,t=this.metadata.playback.position;t!==e&&t-e>=10&&(this.track("Video Content Playing",this.metadata.content),this.mostRecentHeartbeat=Math.floor(t));}},{key:"trackPause",value:function(){this.isPaused=!0,this.track("Video Playback Paused",this.metadata.playback);}},{key:"retrieveMetadata",value:function(e){var t=this;return new Promise((function(a,n){var r=e.id;(0, i.default)("https://api.vimeo.com/videos/"+r,{headers:{Authorization:"Bearer "+t.authToken}}).then((function(e){return e.ok?e.json():n(e)})).then((function(e){t.metadata.content.title=e.name,t.metadata.content.description=e.description,t.metadata.content.publisher=e.user.name,t.metadata.playback.position=0,t.metadata.playback.totalLength=e.duration;})).catch((function(e){return console.error("Request to Vimeo API Failed with: ",e),n(e)}));}))}},{key:"updateMetadata",value:function(e){var t=this;return new Promise((function(a,n){t.player.getVolume().then((function(n){n&&(t.metadata.playback.sound=100*n),t.metadata.playback.position=e.seconds,a();})).catch(n);}))}}]),t}(r(a(1)).default);t.default=o;},function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=o(a(0)),r=o(a(1));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"YoutubeAnalytics"));return n.player=e,n.apiKey=a,n.playerLoaded=!1,n.playbackStarted=!1,n.contentStarted=!1,n.isPaused=!1,n.isBuffering=!1,n.isSeeking=!1,n.lastRecordedTime={timeReported:Date.now(),timeElapsed:0},n.metadata=[{playback:{video_player:"youtube"},content:{}}],n.playlistIndex=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(t,e),n(t,[{key:"initialize",value:function(){window.segmentYoutubeOnStateChange=this.onPlayerStateChange.bind(this),window.segmentYoutubeOnReady=this.onPlayerReady.bind(this),this.player.addEventListener("onReady","segmentYoutubeOnReady"),this.player.addEventListener("onStateChange","segmentYoutubeOnStateChange");}},{key:"onPlayerReady",value:function(e){this.retrieveMetadata();}},{key:"onPlayerStateChange",value:function(e){var t=this.player.getCurrentTime();switch(this.metadata[this.playlistIndex]&&(this.metadata[this.playlistIndex].playback.position=this.metadata[this.playlistIndex].content.position=t,this.metadata[this.playlistIndex].playback.quality=this.player.getPlaybackQuality(),this.metadata[this.playlistIndex].playback.sound=this.player.isMuted()?0:this.player.getVolume()),e.data){case-1:if(this.playerLoaded)break;this.retrieveMetadata(),this.playerLoaded=!0;break;case YT.PlayerState.BUFFERING:this.handleBuffer();break;case YT.PlayerState.PLAYING:this.handlePlay();break;case YT.PlayerState.PAUSED:this.handlePause();break;case YT.PlayerState.ENDED:this.handleEnd();}this.lastRecordedTime={timeReported:Date.now(),timeElapsed:1e3*this.player.getCurrentTime()};}},{key:"retrieveMetadata",value:function(){var e=this;return new Promise((function(t,a){var n=e.player.getVideoData(),r=e.player.getPlaylist()||[n.video_id],o=r.join();(0, i.default)("https://www.googleapis.com/youtube/v3/videos?id="+o+"&part=snippet,contentDetails&key="+e.apiKey).then((function(e){if(!e.ok){var t=new Error("Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)");throw t.response=e,t}return e.json()})).then((function(a){e.metadata=[];for(var n=0,i=0;i<r.length;i++){var o=a.items[i];e.metadata.push({content:{title:o.snippet.title,description:o.snippet.description,keywords:o.snippet.tags,channel:o.snippet.channelTitle,airdate:o.snippet.publishedAt}}),n+=l(o.contentDetails.duration);}for(i=0;i<r.length;i++)e.metadata[i].playback={total_length:n,video_player:"youtube"};t();})).catch((function(t){e.metadata=r.map((function(e){return {playback:{video_player:"youtube"},content:{}}})),a(t);}));}))}},{key:"handleBuffer",value:function(){var e=this.determineSeek();this.playbackStarted||(this.playbackStarted=!0,this.track("Video Playback Started",this.metadata[this.playlistIndex].playback)),e&&!this.isSeeking&&(this.isSeeking=!0,this.track("Video Playback Seek Started",this.metadata[this.playlistIndex].playback)),this.isSeeking&&(this.track("Video Playback Seek Completed",this.metadata[this.playlistIndex].playback),this.isSeeking=!1);var t=this.player.getPlaylist();t&&0===this.player.getCurrentTime()&&this.player.getPlaylistIndex()!==this.playlistIndex&&(this.contentStarted=!1,this.playlistIndex===t.length-1&&0===this.player.getPlaylistIndex()&&(this.track("Video Playback Completed",this.metadata[this.player.getPlaylistIndex()].playback),this.track("Video Playback Started",this.metadata[this.player.getPlaylistIndex()].playback))),this.track("Video Playback Buffer Started",this.metadata[this.playlistIndex].playback),this.isBuffering=!0;}},{key:"handlePlay",value:function(){this.contentStarted||(this.playlistIndex=this.player.getPlaylistIndex(),-1===this.playlistIndex&&(this.playlistIndex=0),this.track("Video Content Started",this.metadata[this.playlistIndex].content),this.contentStarted=!0),this.isBuffering&&(this.track("Video Playback Buffer Completed",this.metadata[this.playlistIndex].playback),this.isBuffering=!1),this.isPaused&&(this.track("Video Playback Resumed",this.metadata[this.playlistIndex].playback),this.isPaused=!1);}},{key:"handlePause",value:function(){var e=this.determineSeek();this.isBuffering&&(this.track("Video Playback Buffer Completed",this.metadata[this.playlistIndex].playback),this.isBuffering=!1),this.isPaused||(e?(this.track("Video Playback Seek Started",this.metadata[this.playlistIndex].playback),this.isSeeking=!0):(this.track("Video Playback Paused",this.metadata[this.playlistIndex].playback),this.isPaused=!0));}},{key:"handleEnd",value:function(){this.track("Video Content Completed",this.metadata[this.playlistIndex].content),this.contentStarted=!1;var e=this.player.getPlaylistIndex(),t=this.player.getPlaylist();(t&&e===t.length-1||-1===e)&&(this.track("Video Playback Completed",this.metadata[this.playlistIndex].playback),this.playbackStarted=!1);}},{key:"determineSeek",value:function(){var e=this.isPaused||this.isBuffering?0:Date.now()-this.lastRecordedTime.timeReported,t=1e3*this.player.getCurrentTime()-this.lastRecordedTime.timeElapsed;return Math.abs(e-t)>2e3}}]),t}(r.default);function l(e){var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);return t=t.slice(1).map((function(e){if(null!=e)return e.replace(/\D/,"")})),3600*(parseInt(t[0])||0)+60*(parseInt(t[1])||0)+(parseInt(t[2])||0)}t.default=s;}])})); 
	} (index_umd));
	return index_umd.exports;
}

var hasRequiredLegacyVideoPlugins;

function requireLegacyVideoPlugins () {
	if (hasRequiredLegacyVideoPlugins) return legacyVideoPlugins;
	hasRequiredLegacyVideoPlugins = 1;
	Object.defineProperty(legacyVideoPlugins, "__esModule", { value: true });
	legacyVideoPlugins.loadLegacyVideoPlugins = void 0;
	var tslib_1 = require$$0$2;
	function loadLegacyVideoPlugins(analytics) {
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var plugins;
	        return tslib_1.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(requireIndex_umd()); })];
	                case 1:
	                    plugins = _a.sent();
	                    // This is super gross, but we need to support the `window.analytics.plugins` namespace
	                    // that is linked in the segment docs in order to be backwards compatible with ajs-classic
	                    // @ts-expect-error
	                    analytics._plugins = plugins;
	                    return [2 /*return*/];
	            }
	        });
	    });
	}
	legacyVideoPlugins.loadLegacyVideoPlugins = loadLegacyVideoPlugins;
	
	return legacyVideoPlugins;
}

var schemaFilter = {};

var hasRequiredSchemaFilter;

function requireSchemaFilter () {
	if (hasRequiredSchemaFilter) return schemaFilter;
	hasRequiredSchemaFilter = 1;
	Object.defineProperty(schemaFilter, "__esModule", { value: true });
	schemaFilter.schemaFilter = void 0;
	var tslib_1 = require$$0$2;
	var is_plan_event_enabled_1 = requireIsPlanEventEnabled();
	function disabledActionDestinations(plan, settings) {
	    var _a, _b;
	    if (!plan || !Object.keys(plan)) {
	        return {};
	    }
	    var disabledIntegrations = plan.integrations
	        ? Object.keys(plan.integrations).filter(function (i) { return plan.integrations[i] === false; })
	        : [];
	    // This accounts for cases like Fullstory, where the settings.integrations
	    // contains a "Fullstory" object but settings.remotePlugins contains "Fullstory (Actions)"
	    var disabledRemotePlugins = [];
	    ((_a = settings.remotePlugins) !== null && _a !== void 0 ? _a : []).forEach(function (p) {
	        disabledIntegrations.forEach(function (int) {
	            if (p.name.includes(int) || int.includes(p.name)) {
	                disabledRemotePlugins.push(p.name);
	            }
	        });
	    });
	    return ((_b = settings.remotePlugins) !== null && _b !== void 0 ? _b : []).reduce(function (acc, p) {
	        if (p.settings['subscriptions']) {
	            if (disabledRemotePlugins.includes(p.name)) {
	                // @ts-expect-error element implicitly has an 'any' type because p.settings is a JSONObject
	                p.settings['subscriptions'].forEach(
	                // @ts-expect-error parameter 'sub' implicitly has an 'any' type
	                function (sub) { return (acc["".concat(p.name, " ").concat(sub.partnerAction)] = false); });
	            }
	        }
	        return acc;
	    }, {});
	}
	function schemaFilter$1(track, settings) {
	    function filter(ctx) {
	        var plan = track;
	        var ev = ctx.event.event;
	        if (plan && ev) {
	            var planEvent = plan[ev];
	            if (!(0, is_plan_event_enabled_1.isPlanEventEnabled)(plan, planEvent)) {
	                ctx.updateEvent('integrations', tslib_1.__assign(tslib_1.__assign({}, ctx.event.integrations), { All: false, 'Segment.io': true }));
	                return ctx;
	            }
	            else {
	                var disabledActions = disabledActionDestinations(planEvent, settings);
	                ctx.updateEvent('integrations', tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, ctx.event.integrations), planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations), disabledActions));
	            }
	        }
	        return ctx;
	    }
	    return {
	        name: 'Schema Filter',
	        version: '0.1.0',
	        isLoaded: function () { return true; },
	        load: function () { return Promise.resolve(); },
	        type: 'before',
	        page: filter,
	        alias: filter,
	        track: filter,
	        identify: filter,
	        group: filter,
	    };
	}
	schemaFilter.schemaFilter = schemaFilter$1;
	
	return schemaFilter;
}

var remoteMiddleware = {};

var hasRequiredRemoteMiddleware;

function requireRemoteMiddleware () {
	if (hasRequiredRemoteMiddleware) return remoteMiddleware;
	hasRequiredRemoteMiddleware = 1;
	Object.defineProperty(remoteMiddleware, "__esModule", { value: true });
	remoteMiddleware.remoteMiddlewares = void 0;
	var tslib_1 = require$$0$2;
	var environment_1 = requireEnvironment();
	var load_script_1 = loadScript$1;
	var parse_cdn_1 = parseCdn;
	function remoteMiddlewares(ctx, settings, obfuscate) {
	    var _a;
	    return tslib_1.__awaiter(this, void 0, void 0, function () {
	        var path, remoteMiddleware, names, scripts, middleware;
	        var _this = this;
	        return tslib_1.__generator(this, function (_b) {
	            switch (_b.label) {
	                case 0:
	                    if ((0, environment_1.isServer)()) {
	                        return [2 /*return*/, []];
	                    }
	                    path = (0, parse_cdn_1.getNextIntegrationsURL)();
	                    remoteMiddleware = (_a = settings.enabledMiddleware) !== null && _a !== void 0 ? _a : {};
	                    names = Object.entries(remoteMiddleware)
	                        .filter(function (_a) {
	                        _a[0]; var enabled = _a[1];
	                        return enabled;
	                    })
	                        .map(function (_a) {
	                        var name = _a[0];
	                        return name;
	                    });
	                    scripts = names.map(function (name) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	                        var nonNamespaced, bundleName, fullPath, error_1;
	                        return tslib_1.__generator(this, function (_a) {
	                            switch (_a.label) {
	                                case 0:
	                                    nonNamespaced = name.replace('@segment/', '');
	                                    bundleName = nonNamespaced;
	                                    if (obfuscate) {
	                                        bundleName = btoa(nonNamespaced).replace(/=/g, '');
	                                    }
	                                    fullPath = "".concat(path, "/middleware/").concat(bundleName, "/latest/").concat(bundleName, ".js.gz");
	                                    _a.label = 1;
	                                case 1:
	                                    _a.trys.push([1, 3, , 4]);
	                                    return [4 /*yield*/, (0, load_script_1.loadScript)(fullPath)
	                                        // @ts-ignore
	                                    ];
	                                case 2:
	                                    _a.sent();
	                                    // @ts-ignore
	                                    return [2 /*return*/, window["".concat(nonNamespaced, "Middleware")]];
	                                case 3:
	                                    error_1 = _a.sent();
	                                    ctx.log('error', error_1);
	                                    ctx.stats.increment('failed_remote_middleware');
	                                    return [3 /*break*/, 4];
	                                case 4: return [2 /*return*/];
	                            }
	                        });
	                    }); });
	                    return [4 /*yield*/, Promise.all(scripts)];
	                case 1:
	                    middleware = _b.sent();
	                    middleware = middleware.filter(Boolean);
	                    return [2 /*return*/, middleware];
	            }
	        });
	    });
	}
	remoteMiddleware.remoteMiddlewares = remoteMiddlewares;
	
	return remoteMiddleware;
}

Object.defineProperty(browser, "__esModule", { value: true });
var AnalyticsBrowser_1 = browser.AnalyticsBrowser = loadLegacySettings_1 = browser.loadLegacySettings = void 0;
var tslib_1 = require$$0$2;
var get_process_env_1 = getProcessEnv$1;
var parse_cdn_1 = parseCdn;
var fetch_1 = fetch$2;
var analytics_1 = analytics;
var context_1 = context;
var merged_options_1 = mergedOptions$1;
var analytics_generic_utils_1 = require$$7;
var env_enrichment_1 = envEnrichment;
var remote_loader_1 = remoteLoader$1;
var segmentio_1 = segmentio$1;
var validation_1 = validation;
var buffer_1 = buffer;
var inspector_1 = inspector;
var stats_1 = stats;
var global_analytics_helper_1 = globalAnalyticsHelper;
function loadLegacySettings(writeKey, cdnURL) {
    var baseUrl = cdnURL !== null && cdnURL !== void 0 ? cdnURL : (0, parse_cdn_1.getCDN)();
    return (0, fetch_1.fetch)("".concat(baseUrl, "/v1/projects/").concat(writeKey, "/settings"))
        .then(function (res) {
        if (!res.ok) {
            return res.text().then(function (errorResponseMessage) {
                throw new Error(errorResponseMessage);
            });
        }
        return res.json();
    })
        .catch(function (err) {
        console.error(err.message);
        throw err;
    });
}
var loadLegacySettings_1 = browser.loadLegacySettings = loadLegacySettings;
function hasLegacyDestinations(settings) {
    return ((0, get_process_env_1.getProcessEnv)().NODE_ENV !== 'test' &&
        // just one integration means segmentio
        Object.keys(settings.integrations).length > 1);
}
function hasTsubMiddleware(settings) {
    var _a, _b, _c;
    return ((0, get_process_env_1.getProcessEnv)().NODE_ENV !== 'test' &&
        ((_c = (_b = (_a = settings.middlewareSettings) === null || _a === void 0 ? void 0 : _a.routingRules) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0);
}
/**
 * With AJS classic, we allow users to call setAnonymousId before the library initialization.
 * This is important because some of the destinations will use the anonymousId during the initialization,
 * and if we set anonId afterwards, that wouldn’t impact the destination.
 *
 * Also Ensures events can be registered before library initialization.
 * This is important so users can register to 'initialize' and any events that may fire early during setup.
 */
function flushPreBuffer(analytics, buffer) {
    (0, buffer_1.flushSetAnonymousID)(analytics, buffer);
    (0, buffer_1.flushOn)(analytics, buffer);
}
/**
 * Finish flushing buffer and cleanup.
 */
function flushFinalBuffer(analytics, buffer) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Call popSnippetWindowBuffer before each flush task since there may be
                // analytics calls during async function calls.
                return [4 /*yield*/, (0, buffer_1.flushAddSourceMiddleware)(analytics, buffer)];
                case 1:
                    // Call popSnippetWindowBuffer before each flush task since there may be
                    // analytics calls during async function calls.
                    _a.sent();
                    (0, buffer_1.flushAnalyticsCallsInNewTask)(analytics, buffer);
                    // Clear buffer, just in case analytics is loaded twice; we don't want to fire events off again.
                    buffer.clear();
                    return [2 /*return*/];
            }
        });
    });
}
function registerPlugins(writeKey, legacySettings, analytics, opts, options, pluginLikes, legacyIntegrationSources) {
    var _a, _b, _c;
    if (pluginLikes === void 0) { pluginLikes = []; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var plugins, pluginSources, tsubMiddleware, _d, legacyDestinations, _e, schemaFilter, _f, mergedSettings, remotePlugins, toRegister, shouldIgnoreSegmentio, _g, _h, ctx;
        var _this = this;
        return tslib_1.__generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    plugins = pluginLikes === null || pluginLikes === void 0 ? void 0 : pluginLikes.filter(function (pluginLike) { return typeof pluginLike === 'object'; });
                    pluginSources = pluginLikes === null || pluginLikes === void 0 ? void 0 : pluginLikes.filter(function (pluginLike) {
                        return typeof pluginLike === 'function' &&
                            typeof pluginLike.pluginName === 'string';
                    });
                    if (!hasTsubMiddleware(legacySettings)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(requireRoutingMiddleware()); }).then(function (mod) {
                            return mod.tsubMiddleware(legacySettings.middlewareSettings.routingRules);
                        })];
                case 1:
                    _d = _j.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _d = undefined;
                    _j.label = 3;
                case 3:
                    tsubMiddleware = _d;
                    if (!(hasLegacyDestinations(legacySettings) || legacyIntegrationSources.length > 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(requireAjsDestination()); }).then(function (mod) {
                            return mod.ajsDestinations(writeKey, legacySettings, analytics.integrations, opts, tsubMiddleware, legacyIntegrationSources);
                        })];
                case 4:
                    _e = _j.sent();
                    return [3 /*break*/, 6];
                case 5:
                    _e = [];
                    _j.label = 6;
                case 6:
                    legacyDestinations = _e;
                    if (!legacySettings.legacyVideoPluginsEnabled) return [3 /*break*/, 8];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(requireLegacyVideoPlugins()); }).then(function (mod) {
                            return mod.loadLegacyVideoPlugins(analytics);
                        })];
                case 7:
                    _j.sent();
                    _j.label = 8;
                case 8:
                    if (!((_a = opts.plan) === null || _a === void 0 ? void 0 : _a.track)) return [3 /*break*/, 10];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(requireSchemaFilter()); }).then(function (mod) {
                            var _a;
                            return mod.schemaFilter((_a = opts.plan) === null || _a === void 0 ? void 0 : _a.track, legacySettings);
                        })];
                case 9:
                    _f = _j.sent();
                    return [3 /*break*/, 11];
                case 10:
                    _f = undefined;
                    _j.label = 11;
                case 11:
                    schemaFilter = _f;
                    mergedSettings = (0, merged_options_1.mergedOptions)(legacySettings, options);
                    return [4 /*yield*/, (0, remote_loader_1.remoteLoader)(legacySettings, analytics.integrations, mergedSettings, options.obfuscate, tsubMiddleware, pluginSources).catch(function () { return []; })];
                case 12:
                    remotePlugins = _j.sent();
                    toRegister = tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([
                        validation_1.validation,
                        env_enrichment_1.envEnrichment
                    ], plugins, true), legacyDestinations, true), remotePlugins, true);
                    if (schemaFilter) {
                        toRegister.push(schemaFilter);
                    }
                    shouldIgnoreSegmentio = (((_b = opts.integrations) === null || _b === void 0 ? void 0 : _b.All) === false && !opts.integrations['Segment.io']) ||
                        (opts.integrations && opts.integrations['Segment.io'] === false);
                    if (!!shouldIgnoreSegmentio) return [3 /*break*/, 14];
                    _h = (_g = toRegister).push;
                    return [4 /*yield*/, (0, segmentio_1.segmentio)(analytics, mergedSettings['Segment.io'], legacySettings.integrations)];
                case 13:
                    _h.apply(_g, [_j.sent()]);
                    _j.label = 14;
                case 14: return [4 /*yield*/, analytics.register.apply(analytics, toRegister)];
                case 15:
                    ctx = _j.sent();
                    if (!Object.entries((_c = legacySettings.enabledMiddleware) !== null && _c !== void 0 ? _c : {}).some(function (_a) {
                        var enabled = _a[1];
                        return enabled;
                    })) return [3 /*break*/, 17];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(requireRemoteMiddleware()); }).then(function (_a) {
                            var remoteMiddlewares = _a.remoteMiddlewares;
                            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var middleware, promises;
                                return tslib_1.__generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, remoteMiddlewares(ctx, legacySettings, options.obfuscate)];
                                        case 1:
                                            middleware = _b.sent();
                                            promises = middleware.map(function (mdw) {
                                                return analytics.addSourceMiddleware(mdw);
                                            });
                                            return [2 /*return*/, Promise.all(promises)];
                                    }
                                });
                            });
                        })];
                case 16:
                    _j.sent();
                    _j.label = 17;
                case 17: return [2 /*return*/, ctx];
            }
        });
    });
}
function loadAnalytics(settings, options, preInitBuffer) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var legacySettings, _h, disabled, retryQueue, opts, analytics, plugins, classicIntegrations, ctx, search, hash, term;
        return tslib_1.__generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    // return no-op analytics instance if disabled
                    if (options.disable === true) {
                        return [2 /*return*/, [new analytics_1.NullAnalytics(), context_1.Context.system()]];
                    }
                    if (options.globalAnalyticsKey)
                        (0, global_analytics_helper_1.setGlobalAnalyticsKey)(options.globalAnalyticsKey);
                    // this is an ugly side-effect, but it's for the benefits of the plugins that get their cdn via getCDN()
                    if (settings.cdnURL)
                        (0, parse_cdn_1.setGlobalCDNUrl)(settings.cdnURL);
                    if (!((_a = settings.cdnSettings) !== null && _a !== void 0)) return [3 /*break*/, 1];
                    _h = _a;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, loadLegacySettings(settings.writeKey, settings.cdnURL)];
                case 2:
                    _h = (_j.sent());
                    _j.label = 3;
                case 3:
                    legacySettings = _h;
                    if (options.updateCDNSettings) {
                        legacySettings = options.updateCDNSettings(legacySettings);
                    }
                    if (!(typeof options.disable === 'function')) return [3 /*break*/, 5];
                    return [4 /*yield*/, options.disable(legacySettings)];
                case 4:
                    disabled = _j.sent();
                    if (disabled) {
                        return [2 /*return*/, [new analytics_1.NullAnalytics(), context_1.Context.system()]];
                    }
                    _j.label = 5;
                case 5:
                    retryQueue = (_c = (_b = legacySettings.integrations['Segment.io']) === null || _b === void 0 ? void 0 : _b.retryQueue) !== null && _c !== void 0 ? _c : true;
                    opts = tslib_1.__assign({ retryQueue: retryQueue }, options);
                    analytics = new analytics_1.Analytics(settings, opts);
                    (0, inspector_1.attachInspector)(analytics);
                    plugins = (_d = settings.plugins) !== null && _d !== void 0 ? _d : [];
                    classicIntegrations = (_e = settings.classicIntegrations) !== null && _e !== void 0 ? _e : [];
                    stats_1.Stats.initRemoteMetrics(legacySettings.metrics);
                    // needs to be flushed before plugins are registered
                    flushPreBuffer(analytics, preInitBuffer);
                    return [4 /*yield*/, registerPlugins(settings.writeKey, legacySettings, analytics, opts, options, plugins, classicIntegrations)];
                case 6:
                    ctx = _j.sent();
                    search = (_f = window.location.search) !== null && _f !== void 0 ? _f : '';
                    hash = (_g = window.location.hash) !== null && _g !== void 0 ? _g : '';
                    term = search.length ? search : hash.replace(/(?=#).*(?=\?)/, '');
                    if (!term.includes('ajs_')) return [3 /*break*/, 8];
                    return [4 /*yield*/, analytics.queryString(term).catch(console.error)];
                case 7:
                    _j.sent();
                    _j.label = 8;
                case 8:
                    analytics.initialized = true;
                    analytics.emit('initialize', settings, options);
                    if (options.initialPageview) {
                        analytics.page().catch(console.error);
                    }
                    return [4 /*yield*/, flushFinalBuffer(analytics, preInitBuffer)];
                case 9:
                    _j.sent();
                    return [2 /*return*/, [analytics, ctx]];
            }
        });
    });
}
/**
 * The public browser interface for Segment Analytics
 *
 * @example
 * ```ts
 *  export const analytics = new AnalyticsBrowser()
 *  analytics.load({ writeKey: 'foo' })
 * ```
 * @link https://github.com/segmentio/analytics-next/#readme
 */
var AnalyticsBrowser = /** @class */ (function (_super) {
    tslib_1.__extends(AnalyticsBrowser, _super);
    function AnalyticsBrowser() {
        var _this = this;
        var _a = (0, analytics_generic_utils_1.createDeferred)(), loadStart = _a.promise, resolveLoadStart = _a.resolve;
        _this = _super.call(this, function (buffer) {
            return loadStart.then(function (_a) {
                var settings = _a[0], options = _a[1];
                return loadAnalytics(settings, options, buffer);
            });
        }) || this;
        _this._resolveLoadStart = function (settings, options) {
            return resolveLoadStart([settings, options]);
        };
        return _this;
    }
    /**
     * Fully initialize an analytics instance, including:
     *
     * * Fetching settings from the segment CDN (by default).
     * * Fetching all remote destinations configured by the user (if applicable).
     * * Flushing buffered analytics events.
     * * Loading all middleware.
     *
     * Note:️  This method should only be called *once* in your application.
     *
     * @example
     * ```ts
     * export const analytics = new AnalyticsBrowser()
     * analytics.load({ writeKey: 'foo' })
     * ```
     */
    AnalyticsBrowser.prototype.load = function (settings, options) {
        if (options === void 0) { options = {}; }
        this._resolveLoadStart(settings, options);
        return this;
    };
    /**
     * Instantiates an object exposing Analytics methods.
     *
     * @example
     * ```ts
     * const ajs = AnalyticsBrowser.load({ writeKey: '<YOUR_WRITE_KEY>' })
     *
     * ajs.track("foo")
     * ...
     * ```
     */
    AnalyticsBrowser.load = function (settings, options) {
        if (options === void 0) { options = {}; }
        return new AnalyticsBrowser().load(settings, options);
    };
    AnalyticsBrowser.standalone = function (writeKey, options) {
        return AnalyticsBrowser.load({ writeKey: writeKey }, options).then(function (res) { return res[0]; });
    };
    return AnalyticsBrowser;
}(buffer_1.AnalyticsBuffered));
AnalyticsBrowser_1 = browser.AnalyticsBrowser = AnalyticsBrowser;

export { AnalyticsBrowser_1 as AnalyticsBrowser, browser as default, loadLegacySettings_1 as loadLegacySettings };
