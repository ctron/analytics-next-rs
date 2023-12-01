var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r={},n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function u(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function s(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function u(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}s((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function p(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function g(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)n[i]=o[a];return n}function _(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function b(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),o=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){i[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{!function(e){e.value instanceof m?Promise.resolve(e.value.v).then(s,c):l(o[0][2],e)}(i[e](t))}catch(e){l(o[0][3],e)}}function s(e){u("next",e)}function c(e){u("throw",e)}function l(e,t){e(t),o.shift(),o.length&&u(o[0][0],o[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:m(e[n](t)),done:!1}:i?i(t):t}:i}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=h(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,i){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,i,(t=e[r](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return O(t,e),t}function j(e){return e&&e.__esModule?e:{default:e}}function k(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function I(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r}function A(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function M(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if("function"!=typeof n)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var E="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function C(e){function t(t){e.error=e.hasError?new E(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var i=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(i).then(r,(function(e){return t(e),r()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}var T={__extends:i,__assign:o,__rest:a,__decorate:u,__param:s,__metadata:c,__awaiter:l,__generator:f,__createBinding:d,__exportStar:p,__values:h,__read:v,__spread:y,__spreadArrays:g,__spreadArray:_,__await:m,__asyncGenerator:b,__asyncDelegator:w,__asyncValues:P,__makeTemplateObject:S,__importStar:x,__importDefault:j,__classPrivateFieldGet:k,__classPrivateFieldSet:I,__classPrivateFieldIn:A,__addDisposableResource:M,__disposeResources:C},D=Object.freeze({__proto__:null,__addDisposableResource:M,get __assign(){return o},__asyncDelegator:w,__asyncGenerator:b,__asyncValues:P,__await:m,__awaiter:l,__classPrivateFieldGet:k,__classPrivateFieldIn:A,__classPrivateFieldSet:I,__createBinding:d,__decorate:u,__disposeResources:C,__esDecorate:function(e,t,r,n,i,o){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var u,s=n.kind,c="getter"===s?"get":"setter"===s?"set":"value",l=!t&&e?n.static?e:e.prototype:null,f=t||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),d=!1,p=r.length-1;p>=0;p--){var h={};for(var v in n)h[v]="access"===v?{}:n[v];for(var v in n.access)h.access[v]=n.access[v];h.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");o.push(a(e||null))};var y=(0,r[p])("accessor"===s?{get:f.get,set:f.set}:f[c],h);if("accessor"===s){if(void 0===y)continue;if(null===y||"object"!=typeof y)throw new TypeError("Object expected");(u=a(y.get))&&(f.get=u),(u=a(y.set))&&(f.set=u),(u=a(y.init))&&i.unshift(u)}else(u=a(y))&&("field"===s?i.unshift(u):f[c]=u)}l&&Object.defineProperty(l,n.name,f),d=!0},__exportStar:p,__extends:i,__generator:f,__importDefault:j,__importStar:x,__makeTemplateObject:S,__metadata:c,__param:s,__propKey:function(e){return"symbol"==typeof e?e:"".concat(e)},__read:v,__rest:a,__runInitializers:function(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0},__setFunctionName:function(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})},__spread:y,__spreadArray:_,__spreadArrays:g,__values:h,default:T}),F=t(D),N={};Object.defineProperty(N,"__esModule",{value:!0}),N.getProcessEnv=void 0,N.getProcessEnv=function(){return"undefined"!=typeof process&&process.env?process.env:{}};var L={},R={};Object.defineProperty(R,"__esModule",{value:!0}),R.setGlobalAnalytics=R.setGlobalAnalyticsKey=R.getGlobalAnalytics=void 0;var U="analytics";R.getGlobalAnalytics=function(){return window[U]},R.setGlobalAnalyticsKey=function(e){U=e},R.setGlobalAnalytics=function(e){window[U]=e};var B={};Object.defineProperty(B,"__esModule",{value:!0}),B.embeddedWriteKey=void 0;try{window.analyticsWriteKey="__WRITE_KEY__"}catch(e){}B.embeddedWriteKey=function(){if(void 0!==window.analyticsWriteKey)return window.analyticsWriteKey!==["__","WRITE","_","KEY","__"].join("")?window.analyticsWriteKey:void 0},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getLegacyAJSPath=e.getNextIntegrationsURL=e.getCDN=e.setGlobalCDNUrl=void 0;var t,r=R,n=B,i=/(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;e.setGlobalCDNUrl=function(e){var n=(0,r.getGlobalAnalytics)();n&&(n._cdn=e),t=e};e.getCDN=function(){var e=function(){var e;return null!=t?t:null===(e=(0,r.getGlobalAnalytics)())||void 0===e?void 0:e._cdn}();if(e)return e;var n,o=(Array.prototype.slice.call(document.querySelectorAll("script")).forEach((function(e){var t,r=null!==(t=e.getAttribute("src"))&&void 0!==t?t:"",o=i.exec(r);o&&o[1]&&(n=o[1])})),n);return o||"https://cdn.segment.com"};e.getNextIntegrationsURL=function(){var t=(0,e.getCDN)();return"".concat(t,"/next-integrations")},e.getLegacyAJSPath=function(){for(var e,t,o,a=null!==(e=(0,n.embeddedWriteKey)())&&void 0!==e?e:null===(t=(0,r.getGlobalAnalytics)())||void 0===t?void 0:t._writeKey,u=void 0,s=0,c=Array.prototype.slice.call(document.querySelectorAll("script"));s<c.length;s++){var l=null!==(o=c[s].getAttribute("src"))&&void 0!==o?o:"",f=i.exec(l);if(f&&f[1]){u=l;break}}return u?u.replace("analytics.min.js","analytics.classic.js"):"https://cdn.segment.com/analytics.js/v1/".concat(a,"/analytics.classic.js")}}(L);var z={};var q,V=Object.freeze({__proto__:null,default:function(e,t){return t=t||{},new Promise((function(r,n){var i=new XMLHttpRequest,o=[],a=[],u={},s=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:s,headers:{keys:function(){return o},entries:function(){return a},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var c in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,r){o.push(t=t.toLowerCase()),a.push([t,r]),u[t]=u[t]?u[t]+","+r:r})),r(s())},i.onerror=n,i.withCredentials="include"==t.credentials,t.headers)i.setRequestHeader(c,t.headers[c]);i.send(t.body||null)}))}}),G=t(V),K={};function W(){if(q)return K;q=1,Object.defineProperty(K,"__esModule",{value:!0}),K.getGlobal=void 0;return K.getGlobal=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:null},K}Object.defineProperty(z,"__esModule",{value:!0}),z.fetch=void 0;var H=F.__importDefault(G),J=W();z.fetch=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=(0,J.getGlobal)();return(r&&r.fetch||H.default).apply(void 0,e)};var Q={},Y={};function $(e,t,r){t.split&&(t=t.split("."));for(var n,i,o=0,a=t.length,u=e;o<a&&"__proto__"!==(i=t[o++])&&"constructor"!==i&&"prototype"!==i;)u=u[i]=o===a?r:typeof(n=u[i])==typeof t?n:0*t[o]!=0||~(""+t[o]).indexOf(".")?{}:[]}var Z=function(e){function t(t,r){var n=e.call(this,"".concat(t," ").concat(r))||this;return n.field=t,n}return i(t,e),t}(Error);function X(e){return"string"==typeof e}function ee(e){return null!=e}function te(e){return"object"===Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var re="is not a string",ne="is not an object",ie="is nil";function oe(e){var t=".userId/anonymousId/previousId/groupId",r=function(e){var t,r,n;return null!==(n=null!==(r=null!==(t=e.userId)&&void 0!==t?t:e.anonymousId)&&void 0!==r?r:e.groupId)&&void 0!==n?n:e.previousId}(e);if(!ee(r))throw new Z(t,ie);if(!X(r))throw new Z(t,re)}function ae(e){if(!ee(e))throw new Z("Event",ie);if("object"!=typeof e)throw new Z("Event",ne)}function ue(e){if(!X(e.type))throw new Z(".type",re)}function se(e){if(!X(e.event))throw new Z(".event",re)}function ce(e){if(!te(e.properties))throw new Z(".properties",ne)}function le(e){if(!te(e.traits))throw new Z(".traits",ne)}function fe(e){ae(e),ue(e),"track"===e.type&&(se(e),ce(e)),["group","identify"].includes(e.type)&&le(e),oe(e)}var de=function(){function e(e){this.user=e.user,this.createMessageId=e.createMessageId}return e.prototype.track=function(e,t,r,n){return this.normalize(o(o({},this.baseEvent()),{event:e,type:"track",properties:null!=t?t:{},options:o({},r),integrations:o({},n)}))},e.prototype.page=function(e,t,r,n,i){var a,u={type:"page",properties:o({},r),options:o({},n),integrations:o({},i)};return null!==e&&(u.category=e,u.properties=null!==(a=u.properties)&&void 0!==a?a:{},u.properties.category=e),null!==t&&(u.name=t),this.normalize(o(o({},this.baseEvent()),u))},e.prototype.screen=function(e,t,r,n,i){var a={type:"screen",properties:o({},r),options:o({},n),integrations:o({},i)};return null!==e&&(a.category=e),null!==t&&(a.name=t),this.normalize(o(o({},this.baseEvent()),a))},e.prototype.identify=function(e,t,r,n){return this.normalize(o(o({},this.baseEvent()),{type:"identify",userId:e,traits:null!=t?t:{},options:o({},r),integrations:n}))},e.prototype.group=function(e,t,r,n){return this.normalize(o(o({},this.baseEvent()),{type:"group",traits:null!=t?t:{},options:o({},r),integrations:o({},n),groupId:e}))},e.prototype.alias=function(e,t,r,n){var i={userId:e,type:"alias",options:o({},r),integrations:o({},n)};return null!==t&&(i.previousId=t),void 0===e?this.normalize(o(o({},i),this.baseEvent())):this.normalize(o(o({},this.baseEvent()),i))},e.prototype.baseEvent=function(){var e={integrations:{},options:{}};if(!this.user)return e;var t=this.user;return t.id()&&(e.userId=t.id()),t.anonymousId()&&(e.anonymousId=t.anonymousId()),e},e.prototype.context=function(e){var t,r=["userId","anonymousId","timestamp"];delete e.integrations;var n=Object.keys(e),i=null!==(t=e.context)&&void 0!==t?t:{},o={};return n.forEach((function(t){"context"!==t&&(r.includes(t)?$(o,t,e[t]):$(i,t,e[t]))})),[i,o]},e.prototype.normalize=function(e){var t,r,n,i,u=Object.keys(null!==(t=e.integrations)&&void 0!==t?t:{}).reduce((function(t,r){var n,i;return o(o({},t),((n={})[r]=Boolean(null===(i=e.integrations)||void 0===i?void 0:i[r]),n))}),{});e.options=(n=e.options||{},i=function(e,t){return void 0!==t},Object.keys(n).filter((function(e){return i(e,n[e])})).reduce((function(e,t){return e[t]=n[t],e}),{}));var s=o(o({},u),null===(r=e.options)||void 0===r?void 0:r.integrations),c=e.options?this.context(e.options):[],l=c[0],f=c[1];e.options;var d=a(e,["options"]),p=o(o(o({timestamp:new Date},d),{integrations:s,context:l}),f),h=o(o({},p),{messageId:this.createMessageId()});return fe(h),h},e}();function pe(e,t){return new Promise((function(r,n){var i=setTimeout((function(){n(Error("Promise timed out"))}),t);e.then((function(e){return clearTimeout(i),r(e)})).catch(n)}))}function he(e){return new Promise((function(t){return setTimeout(t,e)}))}function ve(e,t,r){return he(r).then((function(){return pe(function(){try{return Promise.resolve(t(e))}catch(e){return Promise.reject(e)}}(),1e3)})).catch((function(t){null==e||e.log("warn","Callback Error",{error:t}),null==e||e.stats.increment("callback_error")})).then((function(){return e}))}var ye=function(){function e(e){var t;this.callbacks={},this.warned=!1,this.maxListeners=null!==(t=null==e?void 0:e.maxListeners)&&void 0!==t?t:10}return e.prototype.warnIfPossibleMemoryLeak=function(e){this.warned||this.maxListeners&&this.callbacks[e].length>this.maxListeners&&(console.warn("Event Emitter: Possible memory leak detected; ".concat(String(e)," has exceeded ").concat(this.maxListeners," listeners.")),this.warned=!0)},e.prototype.on=function(e,t){return this.callbacks[e]?(this.callbacks[e].push(t),this.warnIfPossibleMemoryLeak(e)):this.callbacks[e]=[t],this},e.prototype.once=function(e,t){var r=this,n=function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];r.off(e,n),t.apply(r,i)};return this.on(e,n),this},e.prototype.off=function(e,t){var r,n=(null!==(r=this.callbacks[e])&&void 0!==r?r:[]).filter((function(e){return e!==t}));return this.callbacks[e]=n,this},e.prototype.emit=function(e){for(var t,r=this,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return(null!==(t=this.callbacks[e])&&void 0!==t?t:[]).forEach((function(e){e.apply(r,n)})),this},e}(),ge=Object.freeze({__proto__:null,Emitter:ye,createDeferred:function(){var e,t,r=new Promise((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}}});function _e(e){var t=Math.random()+1,r=e.minTimeout,n=void 0===r?500:r,i=e.factor,o=void 0===i?2:i,a=e.attempt,u=e.maxTimeout,s=void 0===u?1/0:u;return Math.min(t*n*Math.pow(o,a),s)}for(var me,be="onRemoveFromFuture",we=function(e){function t(t,r,n){var i=e.call(this)||this;return i.future=[],i.maxAttempts=t,i.queue=r,i.seen=null!=n?n:{},i}return i(t,e),t.prototype.push=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=t.map((function(t){return!(e.updateAttempts(t)>e.maxAttempts||e.includes(t))&&(e.queue.push(t),!0)}));return this.queue=this.queue.sort((function(t,r){return e.getAttempts(t)-e.getAttempts(r)})),n},t.prototype.pushWithBackoff=function(e){var t=this;if(0===this.getAttempts(e))return this.push(e)[0];var r=this.updateAttempts(e);if(r>this.maxAttempts||this.includes(e))return!1;var n=_e({attempt:r-1});return setTimeout((function(){t.queue.push(e),t.future=t.future.filter((function(t){return t.id!==e.id})),t.emit(be)}),n),this.future.push(e),!0},t.prototype.getAttempts=function(e){var t;return null!==(t=this.seen[e.id])&&void 0!==t?t:0},t.prototype.updateAttempts=function(e){return this.seen[e.id]=this.getAttempts(e)+1,this.getAttempts(e)},t.prototype.includes=function(e){return this.queue.includes(e)||this.future.includes(e)||Boolean(this.queue.find((function(t){return t.id===e.id})))||Boolean(this.future.find((function(t){return t.id===e.id})))},t.prototype.pop=function(){return this.queue.shift()},Object.defineProperty(t.prototype,"length",{get:function(){return this.queue.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"todo",{get:function(){return this.queue.length+this.future.length},enumerable:!1,configurable:!0}),t}(ye),Pe=256,Se=[];Pe--;)Se[Pe]=(Pe+256).toString(16).substring(1);var Oe=function(){function e(){this._logs=[]}return e.prototype.log=function(e,t,r){var n=new Date;this._logs.push({level:e,message:t,time:n,extras:r})},Object.defineProperty(e.prototype,"logs",{get:function(){return this._logs},enumerable:!1,configurable:!0}),e.prototype.flush=function(){if(this.logs.length>1){var e=this._logs.reduce((function(e,t){var r,n,i,a=o(o({},t),{json:JSON.stringify(t.extras,null," "),extras:t.extras});delete a.time;var u=null!==(i=null===(n=t.time)||void 0===n?void 0:n.toISOString())&&void 0!==i?i:"";return e[u]&&(u="".concat(u,"-").concat(Math.random())),o(o({},e),((r={})[u]=a,r))}),{});console.table?console.table(e):console.log(e)}else this.logs.forEach((function(e){var t=e.level,r=e.message,n=e.extras;"info"===t||"debug"===t?console.log(r,null!=n?n:""):console[t](r,null!=n?n:"")}));this._logs=[]},e}(),xe=function(){function e(){this.metrics=[]}return e.prototype.increment=function(e,t,r){void 0===t&&(t=1),this.metrics.push({metric:e,value:t,tags:null!=r?r:[],type:"counter",timestamp:Date.now()})},e.prototype.gauge=function(e,t,r){this.metrics.push({metric:e,value:t,tags:null!=r?r:[],type:"gauge",timestamp:Date.now()})},e.prototype.flush=function(){var e=this.metrics.map((function(e){return o(o({},e),{tags:e.tags.join(",")})}));console.table?console.table(e):console.log(e),this.metrics=[]},e.prototype.serialize=function(){return this.metrics.map((function(e){return{m:e.metric,v:e.value,t:e.tags,k:(t=e.type,{gauge:"g",counter:"c"}[t]),e:e.timestamp};var t}))},e}(),je=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.gauge=function(){},t.prototype.increment=function(){},t.prototype.flush=function(){},t.prototype.serialize=function(){return[]},t}(xe),ke=function(e){var t,r,n;this.retry=null===(t=e.retry)||void 0===t||t,this.type=null!==(r=e.type)&&void 0!==r?r:"plugin Error",this.reason=null!==(n=e.reason)&&void 0!==n?n:""},Ie=function(){function e(e,t,r,n){void 0===t&&(t=function(){var e,t=0,r="";if(!me||Pe+16>256){for(me=Array(t=256);t--;)me[t]=256*Math.random()|0;t=Pe=0}for(;t<16;t++)e=me[Pe+t],r+=6==t?Se[15&e|64]:8==t?Se[63&e|128]:Se[e],1&t&&t>1&&t<11&&(r+="-");return Pe++,r}()),void 0===r&&(r=new je),void 0===n&&(n=new Oe),this.attempts=0,this.event=e,this._id=t,this.logger=n,this.stats=r}return e.system=function(){},e.prototype.isSame=function(e){return e.id===this.id},e.prototype.cancel=function(e){if(e)throw e;throw new ke({reason:"Context Cancel"})},e.prototype.log=function(e,t,r){this.logger.log(e,t,r)},Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),e.prototype.updateEvent=function(e,t){var r;if("integrations"===e.split(".")[0]){var n=e.split(".")[1];if(!1===(null===(r=this.event.integrations)||void 0===r?void 0:r[n]))return this.event}return $(this.event,e,t),this.event},e.prototype.failedDelivery=function(){return this._failedDelivery},e.prototype.setFailedDelivery=function(e){this._failedDelivery=e},e.prototype.logs=function(){return this.logger.logs},e.prototype.flush=function(){this.logger.flush(),this.stats.flush()},e.prototype.toJSON=function(){return{id:this._id,event:this.event,logs:this.logger.logs,metrics:this.stats.metrics}},e}();function Ae(e,t){e.log("debug","plugin",{plugin:t.name});var r=(new Date).getTime(),n=t[e.event.type];if(void 0===n)return Promise.resolve(e);var i=function(e){return l(this,void 0,void 0,(function(){var t;return f(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,e()];case 1:return[2,r.sent()];case 2:return t=r.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))}((function(){return n.apply(t,[e])})).then((function(e){var n=(new Date).getTime()-r;return e.stats.gauge("plugin_time",n,["plugin:".concat(t.name)]),e})).catch((function(r){if(r instanceof ke&&"middleware_cancellation"===r.type)throw r;return r instanceof ke?(e.log("warn",r.type,{plugin:t.name,error:r}),r):(e.log("error","plugin Error",{plugin:t.name,error:r}),e.stats.increment("plugin_error",1,["plugin:".concat(t.name)]),r)}));return i}function Me(e,t){return Ae(e,t).then((function(t){if(t instanceof Ie)return t;e.log("debug","Context canceled"),e.stats.increment("context_canceled"),e.cancel(t)}))}var Ee=function(e){function t(t){var r,n,i,o=e.call(this)||this;return o.criticalTasks=(i=0,{done:function(){return r},run:function(e){var t,o=e();return"object"==typeof(t=o)&&null!==t&&"then"in t&&"function"==typeof t.then&&(1==++i&&(r=new Promise((function(e){return n=e}))),o.finally((function(){return 0==--i&&n()}))),o}}),o.plugins=[],o.failedInitializations=[],o.flushing=!1,o.queue=t,o.queue.on(be,(function(){o.scheduleFlush(0)})),o}return i(t,e),t.prototype.register=function(e,t,r){return l(this,void 0,void 0,(function(){var n=this;return f(this,(function(i){switch(i.label){case 0:return[4,Promise.resolve(t.load(e,r)).then((function(){n.plugins.push(t)})).catch((function(r){if("destination"===t.type)return n.failedInitializations.push(t.name),console.warn(t.name,r),void e.log("warn","Failed to load destination",{plugin:t.name,error:r});throw r}))];case 1:return i.sent(),[2]}}))}))},t.prototype.deregister=function(e,t,r){return l(this,void 0,void 0,(function(){var n;return f(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t.unload?[4,Promise.resolve(t.unload(e,r))]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.plugins=this.plugins.filter((function(e){return e.name!==t.name})),[3,4];case 3:return n=i.sent(),e.log("warn","Failed to unload destination",{plugin:t.name,error:n}),[3,4];case 4:return[2]}}))}))},t.prototype.dispatch=function(e){return l(this,void 0,void 0,(function(){var t;return f(this,(function(r){return e.log("debug","Dispatching"),e.stats.increment("message_dispatched"),this.queue.push(e),t=this.subscribeToDelivery(e),this.scheduleFlush(0),[2,t]}))}))},t.prototype.subscribeToDelivery=function(e){return l(this,void 0,void 0,(function(){var t=this;return f(this,(function(r){return[2,new Promise((function(r){var n=function(i,o){i.isSame(e)&&(t.off("flush",n),r(i))};t.on("flush",n)}))]}))}))},t.prototype.dispatchSingle=function(e){return l(this,void 0,void 0,(function(){var t=this;return f(this,(function(r){return e.log("debug","Dispatching"),e.stats.increment("message_dispatched"),this.queue.updateAttempts(e),e.attempts=1,[2,this.deliver(e).catch((function(r){return t.enqueuRetry(r,e)?t.subscribeToDelivery(e):(e.setFailedDelivery({reason:r}),e)}))]}))}))},t.prototype.isEmpty=function(){return 0===this.queue.length},t.prototype.scheduleFlush=function(e){var t=this;void 0===e&&(e=500),this.flushing||(this.flushing=!0,setTimeout((function(){t.flush().then((function(){setTimeout((function(){t.flushing=!1,t.queue.length&&t.scheduleFlush(0)}),0)}))}),e))},t.prototype.deliver=function(e){return l(this,void 0,void 0,(function(){var t,r,n,i;return f(this,(function(o){switch(o.label){case 0:return[4,this.criticalTasks.done()];case 1:o.sent(),t=Date.now(),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.flushOne(e)];case 3:return e=o.sent(),r=Date.now()-t,this.emit("delivery_success",e),e.stats.gauge("delivered",r),e.log("debug","Delivered",e.event),[2,e];case 4:throw n=o.sent(),i=n,e.log("error","Failed to deliver",i),this.emit("delivery_failure",e,i),e.stats.increment("delivery_failed"),n;case 5:return[2]}}))}))},t.prototype.enqueuRetry=function(e,t){return!(e instanceof ke&&!e.retry)&&this.queue.pushWithBackoff(t)},t.prototype.flush=function(){return l(this,void 0,void 0,(function(){var e,t;return f(this,(function(r){switch(r.label){case 0:if(0===this.queue.length)return[2,[]];if(!(e=this.queue.pop()))return[2,[]];e.attempts=this.queue.getAttempts(e),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.deliver(e)];case 2:return e=r.sent(),this.emit("flush",e,!0),[3,4];case 3:return t=r.sent(),this.enqueuRetry(t,e)||(e.setFailedDelivery({reason:t}),this.emit("flush",e,!1)),[2,[]];case 4:return[2,[e]]}}))}))},t.prototype.isReady=function(){return!0},t.prototype.availableExtensions=function(e){var t,r,n=this.plugins.filter((function(t){var r,n,i;if("destination"!==t.type&&"Segment.io"!==t.name)return!0;var o=void 0;return null===(r=t.alternativeNames)||void 0===r||r.forEach((function(t){void 0!==e[t]&&(o=e[t])})),null!==(i=null!==(n=e[t.name])&&void 0!==n?n:o)&&void 0!==i?i:!1!==("Segment.io"===t.name||e.All)})),i=(t="type",r={},n.forEach((function(e){var n,i=void 0;if("string"==typeof t){var o=e[t];i="string"!=typeof o?JSON.stringify(o):o}else t instanceof Function&&(i=t(e));void 0!==i&&(r[i]=_(_([],null!==(n=r[i])&&void 0!==n?n:[],!0),[e],!1))})),r),o=i.before,a=void 0===o?[]:o,u=i.enrichment,s=void 0===u?[]:u,c=i.destination,l=void 0===c?[]:c,f=i.after;return{before:a,enrichment:s,destinations:l,after:void 0===f?[]:f}},t.prototype.flushOne=function(e){var t,r;return l(this,void 0,void 0,(function(){var n,i,o,a,u,s,c,l,d,p,h,v,y,g;return f(this,(function(f){switch(f.label){case 0:if(!this.isReady())throw new Error("Not ready");e.attempts>1&&this.emit("delivery_retry",e),n=this.availableExtensions(null!==(t=e.event.integrations)&&void 0!==t?t:{}),i=n.before,o=n.enrichment,a=0,u=i,f.label=1;case 1:return a<u.length?(s=u[a],[4,Me(e,s)]):[3,4];case 2:(p=f.sent())instanceof Ie&&(e=p),this.emit("message_enriched",e,s),f.label=3;case 3:return a++,[3,1];case 4:c=0,l=o,f.label=5;case 5:return c<l.length?(d=l[c],[4,Ae(e,d)]):[3,8];case 6:(p=f.sent())instanceof Ie&&(e=p),this.emit("message_enriched",e,d),f.label=7;case 7:return c++,[3,5];case 8:return h=this.availableExtensions(null!==(r=e.event.integrations)&&void 0!==r?r:{}),v=h.destinations,y=h.after,[4,new Promise((function(t,r){setTimeout((function(){var n=v.map((function(t){return Ae(e,t)}));Promise.all(n).then(t).catch(r)}),0)}))];case 9:return f.sent(),e.stats.increment("message_delivered"),this.emit("message_delivered",e),g=y.map((function(t){return Ae(e,t)})),[4,Promise.all(g)];case 10:return f.sent(),[2,e]}}))}))},t}(ye),Ce=function(e,t){var r=Date.now()-e;return Math.max((null!=t?t:300)-r,0)};var Te=Object.freeze({__proto__:null,ContextCancelation:ke,CoreContext:Ie,CoreEventQueue:Ee,CoreLogger:Oe,CoreStats:xe,EventFactory:de,NullStats:je,ON_REMOVE_FROM_FUTURE:be,PriorityQueue:we,ValidationError:Z,assertEventExists:ae,assertEventType:ue,assertTrackEventName:se,assertTrackEventProperties:ce,assertTraits:le,assertUserIdentity:oe,attempt:Ae,backoff:_e,bindAll:function(e){for(var t=e.constructor.prototype,r=0,n=Object.getOwnPropertyNames(t);r<n.length;r++){var i=n[r];if("constructor"!==i){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);o&&"function"==typeof o.value&&(e[i]=e[i].bind(e))}}return e},dispatch:function(e,t,r,n){return l(this,void 0,void 0,(function(){var i,o;return f(this,(function(a){switch(a.label){case 0:return r.emit("dispatch_start",e),i=Date.now(),t.isEmpty()?[4,t.dispatchSingle(e)]:[3,2];case 1:return o=a.sent(),[3,4];case 2:return[4,t.dispatch(e)];case 3:o=a.sent(),a.label=4;case 4:return(null==n?void 0:n.callback)?[4,ve(o,n.callback,Ce(i,n.timeout))]:[3,6];case 5:o=a.sent(),a.label=6;case 6:return(null==n?void 0:n.debug)&&o.flush(),[2,o]}}))}))},ensure:Me,exists:ee,getDelay:Ce,invokeCallback:ve,isFunction:function(e){return"function"==typeof e},isNumber:function(e){return"number"==typeof e},isPlainObject:te,isString:X,pTimeout:pe,sleep:he,validateEvent:fe}),De=t(Te);Object.defineProperty(Y,"__esModule",{value:!0}),Y.resolveAliasArguments=Y.resolveUserArguments=Y.resolvePageArguments=Y.resolveArguments=void 0;var Fe=De;Y.resolveArguments=function(e,t,r,n){var i,o=[e,t,r,n],a=(0,Fe.isPlainObject)(e)?e.event:e;if(!a||!(0,Fe.isString)(a))throw new Error("Event missing");var u=(0,Fe.isPlainObject)(e)?null!==(i=e.properties)&&void 0!==i?i:{}:(0,Fe.isPlainObject)(t)?t:{},s={};return(0,Fe.isFunction)(r)||(s=null!=r?r:{}),(0,Fe.isPlainObject)(e)&&!(0,Fe.isFunction)(t)&&(s=null!=t?t:{}),[a,u,s,o.find(Fe.isFunction)]},Y.resolvePageArguments=function(e,t,r,n,i){var o,a,u=null,s=null,c=[e,t,r,n,i],l=c.filter(Fe.isString);void 0!==l[0]&&void 0!==l[1]&&(u=l[0],s=l[1]),1===l.length&&(u=null,s=l[0]);var f=c.find(Fe.isFunction),d=c.filter((function(e){return null===s?(0,Fe.isPlainObject)(e):(0,Fe.isPlainObject)(e)||null===e})),p=null!==(o=d[0])&&void 0!==o?o:{},h=null!==(a=d[1])&&void 0!==a?a:{};return[u,s,p,h,f]};Y.resolveUserArguments=function(e){return function(){for(var t,r,n,i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];for(var a={},u=["callback","options","traits","id"],s=0,c=i;s<c.length;s++){var l=c[s],f=u.pop();if("id"===f){if((0,Fe.isString)(l)||(0,Fe.isNumber)(l)){a.id=l.toString();continue}if(null==l)continue;f=u.pop()}if("traits"!==f&&"options"!==f||null!=l&&!(0,Fe.isPlainObject)(l)||(a[f]=l),(0,Fe.isFunction)(l)){a.callback=l;break}}return[null!==(t=a.id)&&void 0!==t?t:e.id(),null!==(r=a.traits)&&void 0!==r?r:{},null!==(n=a.options)&&void 0!==n?n:{},a.callback]}},Y.resolveAliasArguments=function(e,t,r,n){(0,Fe.isNumber)(e)&&(e=e.toString()),(0,Fe.isNumber)(t)&&(t=t.toString());var i=[e,t,r,n],o=i.filter(Fe.isString),a=o[0],u=void 0===a?e:a,s=o[1],c=void 0===s?null:s,l=i.filter(Fe.isPlainObject)[0];return[u,c,void 0===l?{}:l,i.find(Fe.isFunction)]};var Ne,Le={},Re={};function Ue(){if(Ne)return Re;function e(){return"undefined"!=typeof window}return Ne=1,Object.defineProperty(Re,"__esModule",{value:!0}),Re.isServer=Re.isBrowser=void 0,Re.isBrowser=e,Re.isServer=function(){return!e()},Re}Object.defineProperty(Le,"__esModule",{value:!0}),Le.isOffline=Le.isOnline=void 0;var Be=Ue();function ze(){return!(0,Be.isBrowser)()||window.navigator.onLine}Le.isOnline=ze,Le.isOffline=function(){return!ze()};var qe={},Ve={},Ge={},Ke={};Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.version=void 0,Ke.version="1.62.0";var We,He={};function Je(){if(We)return He;We=1,Object.defineProperty(He,"__esModule",{value:!0}),He.getVersionType=He.setVersionType=void 0;var e="npm";return He.setVersionType=function(t){e=t},He.getVersionType=function(){return e},He}var Qe,Ye={};function $e(){return Qe||(Qe=1,Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.SEGMENT_API_HOST=void 0,Ye.SEGMENT_API_HOST="api.segment.io/v1"),Ye}Object.defineProperty(Ge,"__esModule",{value:!0}),Ge.RemoteMetrics=void 0;var Ze=F,Xe=z,et=Ke,tt=Je(),rt=$e();function nt(e){console.error("Error sending segment performance metrics",e)}var it=function(){function e(e){var t,r,n,i,o=this;if(this.host=null!==(t=null==e?void 0:e.host)&&void 0!==t?t:rt.SEGMENT_API_HOST,this.sampleRate=null!==(r=null==e?void 0:e.sampleRate)&&void 0!==r?r:1,this.flushTimer=null!==(n=null==e?void 0:e.flushTimer)&&void 0!==n?n:3e4,this.maxQueueSize=null!==(i=null==e?void 0:e.maxQueueSize)&&void 0!==i?i:20,this.queue=[],this.sampleRate>0){var a=!1,u=function(){a||(a=!0,o.flush().catch(nt),a=!1,setTimeout(u,o.flushTimer))};u()}}return e.prototype.increment=function(e,t){if(e.includes("analytics_js.")&&0!==t.length&&!(Math.random()>this.sampleRate||this.queue.length>=this.maxQueueSize)){var r=function(e,t,r){var n=t.reduce((function(e,t){var r=t.split(":"),n=r[0],i=r[1];return e[n]=i,e}),{});return{type:"Counter",metric:e,value:1,tags:Ze.__assign(Ze.__assign({},n),{library:"analytics.js",library_version:"web"===r?"next-".concat(et.version):"npm:next-".concat(et.version)})}}(e,t,(0,tt.getVersionType)());this.queue.push(r),e.includes("error")&&this.flush().catch(nt)}},e.prototype.flush=function(){return Ze.__awaiter(this,void 0,void 0,(function(){var e=this;return Ze.__generator(this,(function(t){switch(t.label){case 0:return this.queue.length<=0?[2]:[4,this.send().catch((function(t){nt(t),e.sampleRate=0}))];case 1:return t.sent(),[2]}}))}))},e.prototype.send=function(){return Ze.__awaiter(this,void 0,void 0,(function(){var e,t,r;return Ze.__generator(this,(function(n){return e={series:this.queue},this.queue=[],t={"Content-Type":"text/plain"},r="https://".concat(this.host,"/m"),[2,(0,Xe.fetch)(r,{headers:t,body:JSON.stringify(e),method:"POST"})]}))}))},e}();Ge.RemoteMetrics=it,Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.Stats=void 0;var ot,at=F,ut=Ge,st=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return at.__extends(t,e),t.initRemoteMetrics=function(e){ot=new ut.RemoteMetrics(e)},t.prototype.increment=function(t,r,n){e.prototype.increment.call(this,t,r,n),null==ot||ot.increment(t,null!=n?n:[])},t}(De.CoreStats);Ve.Stats=st,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ContextCancelation=e.Context=void 0;var t=F,r=De;Object.defineProperty(e,"ContextCancelation",{enumerable:!0,get:function(){return r.ContextCancelation}});var n=Ve,i=function(e){function r(t,r){return e.call(this,t,r,new n.Stats)||this}return t.__extends(r,e),r.system=function(){return new this({type:"track",event:"system"})},r}(r.CoreContext);e.Context=i}(qe);for(var ct,lt=t(ge),ft={},dt={},pt=256,ht=[];pt--;)ht[pt]=(pt+256).toString(16).substring(1);dt.v4=function(){var e,t=0,r="";if(!ct||pt+16>256){for(ct=Array(t=256);t--;)ct[t]=256*Math.random()|0;t=pt=0}for(;t<16;t++)e=ct[pt+t],r+=6==t?ht[15&e|64]:8==t?ht[63&e|128]:ht[e],1&t&&t>1&&t<11&&(r+="-");return pt++,r};var vt={};vt.dset=function(e,t,r){t.split&&(t=t.split("."));for(var n,i,o=0,a=t.length,u=e;o<a&&"__proto__"!==(i=t[o++])&&"constructor"!==i&&"prototype"!==i;)u=u[i]=o===a?r:typeof(n=u[i])==typeof t?n:0*t[o]!=0||~(""+t[o]).indexOf(".")?{}:[]};var yt,gt={exports:{}};function _t(){return yt?gt.exports:(yt=1,gt.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function r(e,t){var r=e[0],n=e[1],i=e[2],o=e[3];n=((n+=((i=((i+=((o=((o+=((r=((r+=(n&i|~n&o)+t[0]-680876936|0)<<7|r>>>25)+n|0)&n|~r&i)+t[1]-389564586|0)<<12|o>>>20)+r|0)&r|~o&n)+t[2]+606105819|0)<<17|i>>>15)+o|0)&o|~i&r)+t[3]-1044525330|0)<<22|n>>>10)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n&i|~n&o)+t[4]-176418897|0)<<7|r>>>25)+n|0)&n|~r&i)+t[5]+1200080426|0)<<12|o>>>20)+r|0)&r|~o&n)+t[6]-1473231341|0)<<17|i>>>15)+o|0)&o|~i&r)+t[7]-45705983|0)<<22|n>>>10)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n&i|~n&o)+t[8]+1770035416|0)<<7|r>>>25)+n|0)&n|~r&i)+t[9]-1958414417|0)<<12|o>>>20)+r|0)&r|~o&n)+t[10]-42063|0)<<17|i>>>15)+o|0)&o|~i&r)+t[11]-1990404162|0)<<22|n>>>10)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n&i|~n&o)+t[12]+1804603682|0)<<7|r>>>25)+n|0)&n|~r&i)+t[13]-40341101|0)<<12|o>>>20)+r|0)&r|~o&n)+t[14]-1502002290|0)<<17|i>>>15)+o|0)&o|~i&r)+t[15]+1236535329|0)<<22|n>>>10)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n&o|i&~o)+t[1]-165796510|0)<<5|r>>>27)+n|0)&i|n&~i)+t[6]-1069501632|0)<<9|o>>>23)+r|0)&n|r&~n)+t[11]+643717713|0)<<14|i>>>18)+o|0)&r|o&~r)+t[0]-373897302|0)<<20|n>>>12)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n&o|i&~o)+t[5]-701558691|0)<<5|r>>>27)+n|0)&i|n&~i)+t[10]+38016083|0)<<9|o>>>23)+r|0)&n|r&~n)+t[15]-660478335|0)<<14|i>>>18)+o|0)&r|o&~r)+t[4]-405537848|0)<<20|n>>>12)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n&o|i&~o)+t[9]+568446438|0)<<5|r>>>27)+n|0)&i|n&~i)+t[14]-1019803690|0)<<9|o>>>23)+r|0)&n|r&~n)+t[3]-187363961|0)<<14|i>>>18)+o|0)&r|o&~r)+t[8]+1163531501|0)<<20|n>>>12)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n&o|i&~o)+t[13]-1444681467|0)<<5|r>>>27)+n|0)&i|n&~i)+t[2]-51403784|0)<<9|o>>>23)+r|0)&n|r&~n)+t[7]+1735328473|0)<<14|i>>>18)+o|0)&r|o&~r)+t[12]-1926607734|0)<<20|n>>>12)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n^i^o)+t[5]-378558|0)<<4|r>>>28)+n|0)^n^i)+t[8]-2022574463|0)<<11|o>>>21)+r|0)^r^n)+t[11]+1839030562|0)<<16|i>>>16)+o|0)^o^r)+t[14]-35309556|0)<<23|n>>>9)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n^i^o)+t[1]-1530992060|0)<<4|r>>>28)+n|0)^n^i)+t[4]+1272893353|0)<<11|o>>>21)+r|0)^r^n)+t[7]-155497632|0)<<16|i>>>16)+o|0)^o^r)+t[10]-1094730640|0)<<23|n>>>9)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n^i^o)+t[13]+681279174|0)<<4|r>>>28)+n|0)^n^i)+t[0]-358537222|0)<<11|o>>>21)+r|0)^r^n)+t[3]-722521979|0)<<16|i>>>16)+o|0)^o^r)+t[6]+76029189|0)<<23|n>>>9)+i|0,n=((n+=((i=((i+=((o=((o+=((r=((r+=(n^i^o)+t[9]-640364487|0)<<4|r>>>28)+n|0)^n^i)+t[12]-421815835|0)<<11|o>>>21)+r|0)^r^n)+t[15]+530742520|0)<<16|i>>>16)+o|0)^o^r)+t[2]-995338651|0)<<23|n>>>9)+i|0,n=((n+=((o=((o+=(n^((r=((r+=(i^(n|~o))+t[0]-198630844|0)<<6|r>>>26)+n|0)|~i))+t[7]+1126891415|0)<<10|o>>>22)+r|0)^((i=((i+=(r^(o|~n))+t[14]-1416354905|0)<<15|i>>>17)+o|0)|~r))+t[5]-57434055|0)<<21|n>>>11)+i|0,n=((n+=((o=((o+=(n^((r=((r+=(i^(n|~o))+t[12]+1700485571|0)<<6|r>>>26)+n|0)|~i))+t[3]-1894986606|0)<<10|o>>>22)+r|0)^((i=((i+=(r^(o|~n))+t[10]-1051523|0)<<15|i>>>17)+o|0)|~r))+t[1]-2054922799|0)<<21|n>>>11)+i|0,n=((n+=((o=((o+=(n^((r=((r+=(i^(n|~o))+t[8]+1873313359|0)<<6|r>>>26)+n|0)|~i))+t[15]-30611744|0)<<10|o>>>22)+r|0)^((i=((i+=(r^(o|~n))+t[6]-1560198380|0)<<15|i>>>17)+o|0)|~r))+t[13]+1309151649|0)<<21|n>>>11)+i|0,n=((n+=((o=((o+=(n^((r=((r+=(i^(n|~o))+t[4]-145523070|0)<<6|r>>>26)+n|0)|~i))+t[11]-1120210379|0)<<10|o>>>22)+r|0)^((i=((i+=(r^(o|~n))+t[2]+718787259|0)<<15|i>>>17)+o|0)|~r))+t[9]-343485551|0)<<21|n>>>11)+i|0,e[0]=r+e[0]|0,e[1]=n+e[1]|0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}function n(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}function i(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return r}function o(e){var t,i,o,a,u,s,c=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=c;t+=64)r(l,n(e.substring(t-64,t)));for(i=(e=e.substring(t-64)).length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<i;t+=1)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(r(l,o),t=0;t<16;t+=1)o[t]=0;return a=(a=8*c).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(a[2],16),s=parseInt(a[1],16)||0,o[14]=u,o[15]=s,r(l,o),l}function a(e){var t,n,o,a,u,s,c=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=c;t+=64)r(l,i(e.subarray(t-64,t)));for(n=(e=t-64<c?e.subarray(t-64):new Uint8Array(0)).length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)o[t>>2]|=e[t]<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(r(l,o),t=0;t<16;t+=1)o[t]=0;return a=(a=8*c).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(a[2],16),s=parseInt(a[1],16)||0,o[14]=u,o[15]=s,r(l,o),l}function u(e){var r,n="";for(r=0;r<4;r+=1)n+=t[e>>8*r+4&15]+t[e>>8*r&15];return n}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=u(e[t]);return e.join("")}function c(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function l(e,t){var r,n=e.length,i=new ArrayBuffer(n),o=new Uint8Array(i);for(r=0;r<n;r+=1)o[r]=e.charCodeAt(r);return t?o:i}function f(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function d(e,t,r){var n=new Uint8Array(e.byteLength+t.byteLength);return n.set(new Uint8Array(e)),n.set(new Uint8Array(t),e.byteLength),r?n:n.buffer}function p(e){var t,r=[],n=e.length;for(t=0;t<n-1;t+=2)r.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,r)}function h(){this.reset()}return s(o("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(r,n){var i,o,a,u,s=this.byteLength,c=t(r,s),l=s;return n!==e&&(l=t(n,s)),c>l?new ArrayBuffer(0):(i=l-c,o=new ArrayBuffer(i),a=new Uint8Array(o),u=new Uint8Array(this,c,i),a.set(u),o)}}(),h.prototype.append=function(e){return this.appendBinary(c(e)),this},h.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,i=this._buff.length;for(t=64;t<=i;t+=64)r(this._hash,n(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},h.prototype.end=function(e){var t,r,n=this._buff,i=n.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=n.charCodeAt(t)<<(t%4<<3);return this._finish(o,i),r=s(this._hash),e&&(r=p(r)),this.reset(),r},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},h.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(e,t){var n,i,o,a=t;if(e[a>>2]|=128<<(a%4<<3),a>55)for(r(this._hash,e),a=0;a<16;a+=1)e[a]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),i=parseInt(n[2],16),o=parseInt(n[1],16)||0,e[14]=i,e[15]=o,r(this._hash,e)},h.hash=function(e,t){return h.hashBinary(c(e),t)},h.hashBinary=function(e,t){var r=s(o(e));return t?p(r):r},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(e){var t,n=d(this._buff.buffer,e,!0),o=n.length;for(this._length+=e.byteLength,t=64;t<=o;t+=64)r(this._hash,i(n.subarray(t-64,t)));return this._buff=t-64<o?new Uint8Array(n.buffer.slice(t-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(e){var t,r,n=this._buff,i=n.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=n[t]<<(t%4<<3);return this._finish(o,i),r=s(this._hash),e&&(r=p(r)),this.reset(),r},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var e=h.prototype.getState.call(this);return e.buff=f(e.buff),e},h.ArrayBuffer.prototype.setState=function(e){return e.buff=l(e.buff,!0),h.prototype.setState.call(this,e)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(e,t){var r=s(a(new Uint8Array(e)));return t?p(r):r},h}())}var mt,bt={},wt={};function Pt(){return mt||(mt=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getDefaultPageContext=e.getDefaultBufferedPageContext=e.createPageContext=e.isBufferedPageContext=e.createBufferedPageContext=e.BufferedPageContextDiscriminant=void 0;var t=De;e.BufferedPageContextDiscriminant="bpc";e.createBufferedPageContext=function(t,r,n,i,o,a){return{__t:e.BufferedPageContextDiscriminant,c:r,p:i,u:t,s:n,t:o,r:a}};var r=Object.keys((0,e.createBufferedPageContext)("","","","","",""));e.isBufferedPageContext=function(n){if(!(0,t.isPlainObject)(n))return!1;if(n.__t!==e.BufferedPageContextDiscriminant)return!1;for(var i in n)if(!r.includes(i))return!1;return!0};e.createPageContext=function(e){var t,r,n=e.c,i=e.p,o=e.s,a=e.u,u=e.r,s=e.t,c=n?function(e){try{return new URL(e).pathname}catch(t){return"/"===e[0]?e:"/"+e}}(n):i,l=n?function(e,t){return e.indexOf("?")>-1?e:e+t}(n,o):-1===(r=(t=a).indexOf("#"))?t:t.slice(0,r);return{path:c,referrer:u,search:o,title:s,url:l}};e.getDefaultBufferedPageContext=function(){var t=document.querySelector("link[rel='canonical']");return(0,e.createBufferedPageContext)(location.href,t&&t.getAttribute("href")||void 0,location.search,location.pathname,document.title,document.referrer)};e.getDefaultPageContext=function(){return(0,e.createPageContext)((0,e.getDefaultBufferedPageContext)())}}(wt)),wt}var St,Ot,xt={},jt={};function kt(){if(Ot)return xt;Ot=1,Object.defineProperty(xt,"__esModule",{value:!0}),xt.addPageContext=void 0;var e=F,t=function(){if(St)return jt;St=1,Object.defineProperty(jt,"__esModule",{value:!0}),jt.pick=void 0;var e=F;return jt.pick=function(t,r){return Object.assign.apply(Object,e.__spreadArray([{}],r.map((function(e){var r;if(t&&Object.prototype.hasOwnProperty.call(t,e))return(r={})[e]=t[e],r})),!1))},jt}(),r=Pt();return xt.addPageContext=function(n,i){void 0===i&&(i=(0,r.getDefaultPageContext)());var o,a=n.context;"page"===n.type&&(o=n.properties&&(0,t.pick)(n.properties,Object.keys(i)),n.properties=e.__assign(e.__assign(e.__assign({},i),n.properties),n.name?{name:n.name}:{})),a.page=e.__assign(e.__assign(e.__assign({},i),o),a.page)},xt}!function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=F;t.__exportStar(Pt(),e),t.__exportStar(kt(),e)}(bt);var It,At={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.EventFactory=void 0;var t=F,r=dt,n=vt,i=t.__importDefault(_t()),o=bt;t.__exportStar((It||(It=1,Object.defineProperty(At,"__esModule",{value:!0})),At),e);var a=function(){function e(e){this.user=e}return e.prototype.track=function(e,r,n,i,o){return this.normalize(t.__assign(t.__assign({},this.baseEvent()),{event:e,type:"track",properties:r,options:t.__assign({},n),integrations:t.__assign({},i)}),o)},e.prototype.page=function(e,r,n,i,o,a){var u,s={type:"page",properties:t.__assign({},n),options:t.__assign({},i),integrations:t.__assign({},o)};return null!==e&&(s.category=e,s.properties=null!==(u=s.properties)&&void 0!==u?u:{},s.properties.category=e),null!==r&&(s.name=r),this.normalize(t.__assign(t.__assign({},this.baseEvent()),s),a)},e.prototype.screen=function(e,r,n,i,o,a){var u={type:"screen",properties:t.__assign({},n),options:t.__assign({},i),integrations:t.__assign({},o)};return null!==e&&(u.category=e),null!==r&&(u.name=r),this.normalize(t.__assign(t.__assign({},this.baseEvent()),u),a)},e.prototype.identify=function(e,r,n,i,o){return this.normalize(t.__assign(t.__assign({},this.baseEvent()),{type:"identify",userId:e,traits:r,options:t.__assign({},n),integrations:t.__assign({},i)}),o)},e.prototype.group=function(e,r,n,i,o){return this.normalize(t.__assign(t.__assign({},this.baseEvent()),{type:"group",traits:r,options:t.__assign({},n),integrations:t.__assign({},i),groupId:e}),o)},e.prototype.alias=function(e,r,n,i,o){var a={userId:e,type:"alias",options:t.__assign({},n),integrations:t.__assign({},i)};return null!==r&&(a.previousId=r),void 0===e?this.normalize(t.__assign(t.__assign({},a),this.baseEvent())):this.normalize(t.__assign(t.__assign({},this.baseEvent()),a),o)},e.prototype.baseEvent=function(){var e={integrations:{},options:{}},t=this.user;return t.id()&&(e.userId=t.id()),t.anonymousId()&&(e.anonymousId=t.anonymousId()),e},e.prototype.context=function(e){var t,r,i,o=["integrations","anonymousId","timestamp","userId"],a=null!==(t=e.options)&&void 0!==t?t:{};delete a.integrations;var u=Object.keys(a),s=null!==(i=null===(r=e.options)||void 0===r?void 0:r.context)&&void 0!==i?i:{},c={};return u.forEach((function(e){"context"!==e&&(o.includes(e)?(0,n.dset)(c,e,a[e]):(0,n.dset)(s,e,a[e]))})),[s,c]},e.prototype.normalize=function(e,n){var a,u,s;(null===(a=e.options)||void 0===a?void 0:a.anonymousId)&&this.user.anonymousId(e.options.anonymousId);var c=Object.keys(null!==(u=e.integrations)&&void 0!==u?u:{}).reduce((function(r,n){var i,o;return t.__assign(t.__assign({},r),((i={})[n]=Boolean(null===(o=e.integrations)||void 0===o?void 0:o[n]),i))}),{}),l=t.__assign(t.__assign({},c),null===(s=e.options)||void 0===s?void 0:s.integrations),f=this.context(e),d=f[0],p=f[1];e.options;var h=t.__rest(e,["options"]),v=t.__assign(t.__assign(t.__assign(t.__assign({timestamp:new Date},h),{context:d,integrations:l}),p),{messageId:"ajs-next-"+i.default.hash(JSON.stringify(e)+(0,r.v4)())});return(0,o.addPageContext)(v,n),v},e}();e.EventFactory=a}(ft);var Mt={},Et={},Ct={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ON_REMOVE_FROM_FUTURE=e.PriorityQueue=void 0;var t=De;Object.defineProperty(e,"PriorityQueue",{enumerable:!0,get:function(){return t.PriorityQueue}}),Object.defineProperty(e,"ON_REMOVE_FROM_FUTURE",{enumerable:!0,get:function(){return t.ON_REMOVE_FROM_FUTURE}})}(Ct),Object.defineProperty(Et,"__esModule",{value:!0}),Et.PersistedPriorityQueue=void 0;var Tt=F,Dt=Ct,Ft=qe,Nt=Ue(),Lt={getItem:function(){},setItem:function(){},removeItem:function(){}};try{Lt=(0,Nt.isBrowser)()&&window.localStorage?window.localStorage:Lt}catch(e){console.warn("Unable to access localStorage",e)}function Rt(e){var t=Lt.getItem(e);return(t?JSON.parse(t):[]).map((function(e){return new Ft.Context(e.event,e.id)}))}function Ut(e){var t=Lt.getItem(e);return t?JSON.parse(t):{}}function Bt(e){Lt.removeItem(e)}function zt(e,t,r){void 0===r&&(r=0);var n="persisted-queue:v1:".concat(e,":lock"),i=Lt.getItem(n),o=i?JSON.parse(i):null,a=null===o||function(e){return(new Date).getTime()>e}(o);if(a)return Lt.setItem(n,JSON.stringify((new Date).getTime()+50)),t(),void Lt.removeItem(n);!a&&r<3?setTimeout((function(){zt(e,t,r+1)}),50):console.error("Unable to retrieve lock")}var qt=function(e){function t(t,r){var n=e.call(this,t,[])||this,i="persisted-queue:v1:".concat(r,":items"),o="persisted-queue:v1:".concat(r,":seen"),a=[],u={};return zt(r,(function(){try{a=Rt(i),u=Ut(o),Bt(i),Bt(o),n.queue=Tt.__spreadArray(Tt.__spreadArray([],a,!0),n.queue,!0),n.seen=Tt.__assign(Tt.__assign({},u),n.seen)}catch(e){console.error(e)}})),window.addEventListener("pagehide",(function(){if(n.todo>0){var e=Tt.__spreadArray(Tt.__spreadArray([],n.queue,!0),n.future,!0);try{zt(r,(function(){!function(e,t){var r=Rt(e),n=Tt.__spreadArray(Tt.__spreadArray([],t,!0),r,!0).reduce((function(e,t){var r;return Tt.__assign(Tt.__assign({},e),((r={})[t.id]=t,r))}),{});Lt.setItem(e,JSON.stringify(Object.values(n)))}(i,e),function(e,t){var r=Ut(e);Lt.setItem(e,JSON.stringify(Tt.__assign(Tt.__assign({},r),t)))}(o,n.seen)}))}catch(e){console.error(e)}}})),n}return Tt.__extends(t,e),t}(Dt.PriorityQueue);Et.PersistedPriorityQueue=qt,Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.EventQueue=void 0;var Vt=F,Gt=Et,Kt=Le,Wt=function(e){function t(t){return e.call(this,"string"==typeof t?new Gt.PersistedPriorityQueue(4,t):t)||this}return Vt.__extends(t,e),t.prototype.flush=function(){return Vt.__awaiter(this,void 0,void 0,(function(){return Vt.__generator(this,(function(t){return(0,Kt.isOffline)()?[2,[]]:[2,e.prototype.flush.call(this)]}))}))},t}(De.CoreEventQueue);Mt.EventQueue=Wt;var Ht,Jt={},Qt={};function Yt(){if(Ht)return Qt;return Ht=1,Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.default=function(e){for(var t=e.constructor.prototype,r=0,n=Object.getOwnPropertyNames(t);r<n.length;r++){var i=n[r];if("constructor"!==i){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);o&&"function"==typeof o.value&&(e[i]=e[i].bind(e))}}return e},Qt}var $t,Zt={},Xt={},er={exports:{}};function tr(){return $t||($t=1,er.exports=function(){function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}function t(r,n){function i(t,i,o){if("undefined"!=typeof document){"number"==typeof(o=e({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var u in o)o[u]&&(a+="; "+u,!0!==o[u]&&(a+="="+o[u].split(";")[0]));return document.cookie=t+"="+r.write(i,t)+a}}function o(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},i=0;i<t.length;i++){var o=t[i].split("="),a=o.slice(1).join("=");try{var u=decodeURIComponent(o[0]);if(n[u]=r.read(a,u),e===u)break}catch(e){}}return e?n[e]:n}}return Object.create({set:i,get:o,remove:function(t,r){i(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()),er.exports}var rr,nr,ir={};function or(){if(rr)return ir;rr=1,Object.defineProperty(ir,"__esModule",{value:!0}),ir.tld=void 0;var e=F.__importDefault(tr());return ir.tld=function(t){var r=function(e){try{return new URL(e)}catch(e){return}}(t);if(r)for(var n=function(e){var t=e.hostname.split("."),r=t[t.length-1],n=[];if(4===t.length&&parseInt(r,10)>0)return n;if(t.length<=1)return n;for(var i=t.length-2;i>=0;--i)n.push(t.slice(i).join("."));return n}(r),i=0;i<n.length;++i){var o="__tld__",a=n[i],u={domain:"."+a};try{if(e.default.set(o,"1",u),e.default.get(o))return e.default.remove(o,u),a}catch(e){return}}},ir}function ar(){if(nr)return Xt;nr=1,Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.CookieStorage=void 0;var e=F,t=e.__importDefault(tr()),r=or(),n=function(){function n(t){void 0===t&&(t=n.defaults),this.options=e.__assign(e.__assign({},n.defaults),t)}return Object.defineProperty(n,"defaults",{get:function(){return{maxage:365,domain:(0,r.tld)(window.location.href),path:"/",sameSite:"Lax"}},enumerable:!1,configurable:!0}),n.prototype.opts=function(){return{sameSite:this.options.sameSite,expires:this.options.maxage,domain:this.options.domain,path:this.options.path,secure:this.options.secure}},n.prototype.get=function(e){var r;try{var n=t.default.get(e);if(null==n)return null;try{return null!==(r=JSON.parse(n))&&void 0!==r?r:null}catch(e){return null!=n?n:null}}catch(e){return null}},n.prototype.set=function(e,r){"string"==typeof r?t.default.set(e,r,this.opts()):null===r?t.default.remove(e,this.opts()):t.default.set(e,JSON.stringify(r),this.opts())},n.prototype.remove=function(e){return t.default.remove(e,this.opts())},n}();return Xt.CookieStorage=n,Xt}var ur,sr={};function cr(){if(ur)return sr;ur=1,Object.defineProperty(sr,"__esModule",{value:!0}),sr.LocalStorage=void 0;var e=function(){function e(){}return e.prototype.localStorageWarning=function(e,t){console.warn("Unable to access ".concat(e,", localStorage may be ").concat(t))},e.prototype.get=function(e){var t;try{var r=localStorage.getItem(e);if(null===r)return null;try{return null!==(t=JSON.parse(r))&&void 0!==t?t:null}catch(e){return null!=r?r:null}}catch(t){return this.localStorageWarning(e,"unavailable"),null}},e.prototype.set=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(t){this.localStorageWarning(e,"full")}},e.prototype.remove=function(e){try{return localStorage.removeItem(e)}catch(t){this.localStorageWarning(e,"unavailable")}},e}();return sr.LocalStorage=e,sr}var lr,fr={};function dr(){if(lr)return fr;lr=1,Object.defineProperty(fr,"__esModule",{value:!0}),fr.MemoryStorage=void 0;var e=function(){function e(){this.cache={}}return e.prototype.get=function(e){var t;return null!==(t=this.cache[e])&&void 0!==t?t:null},e.prototype.set=function(e,t){this.cache[e]=t},e.prototype.remove=function(e){delete this.cache[e]},e}();return fr.MemoryStorage=e,fr}var pr,hr,vr={},yr={};function gr(){return pr||(pr=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.StoreType=void 0,yr.StoreType={Cookie:"cookie",LocalStorage:"localStorage",Memory:"memory"}),yr}function _r(){if(hr)return vr;hr=1,Object.defineProperty(vr,"__esModule",{value:!0}),vr.isStoreTypeWithSettings=vr.isArrayOfStoreType=void 0;var e=gr();return vr.isArrayOfStoreType=function(t){return t&&t.stores&&Array.isArray(t.stores)&&t.stores.every((function(t){return Object.values(e.StoreType).includes(t)}))},vr.isStoreTypeWithSettings=function(e){return"object"==typeof e&&void 0!==e.name},vr}var mr,br,wr={};function Pr(){return br||(br=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.applyCookieOptions=e.initializeStorages=void 0;var t=F,r=ar(),n=cr(),i=dr(),o=_r(),a=gr();t.__exportStar(gr(),e),t.__exportStar(cr(),e),t.__exportStar(ar(),e),t.__exportStar(dr(),e),t.__exportStar(function(){if(mr)return wr;mr=1,Object.defineProperty(wr,"__esModule",{value:!0}),wr.UniversalStorage=void 0;var e=function(e,t,r,n){console.warn("".concat(e.constructor.name,": Can't ").concat(t,' key "').concat(r,'" | Err: ').concat(n))},t=function(){function t(e){this.stores=e}return t.prototype.get=function(t){for(var r=null,n=0,i=this.stores;n<i.length;n++){var o=i[n];try{if(null!=(r=o.get(t)))return r}catch(r){e(o,"get",t,r)}}return null},t.prototype.set=function(t,r){this.stores.forEach((function(n){try{n.set(t,r)}catch(r){e(n,"set",t,r)}}))},t.prototype.clear=function(t){this.stores.forEach((function(r){try{r.remove(t)}catch(n){e(r,"remove",t,n)}}))},t.prototype.getAndSync=function(e){var t=this.get(e),r="number"==typeof t?t.toString():t;return this.set(e,r),r},t}();return wr.UniversalStorage=t,wr}(),e),t.__exportStar(_r(),e),e.initializeStorages=function(e){var t=e.map((function(e){var t,u;switch((0,o.isStoreTypeWithSettings)(e)?(t=e.name,u=e.settings):t=e,t){case a.StoreType.Cookie:return new r.CookieStorage(u);case a.StoreType.LocalStorage:return new n.LocalStorage;case a.StoreType.Memory:return new i.MemoryStorage;default:throw new Error("Unknown Store Type: ".concat(e))}}));return t},e.applyCookieOptions=function(e,t){return e.map((function(e){return t&&e===a.StoreType.Cookie?{name:e,settings:t}:e}))}}(Zt)),Zt}Object.defineProperty(Jt,"__esModule",{value:!0}),Jt.Group=Jt.User=void 0;var Sr=F,Or=dt,xr=Sr.__importDefault(Yt()),jr=Pr(),kr={persist:!0,cookie:{key:"ajs_user_id",oldKey:"ajs_user"},localStorage:{key:"ajs_user_traits"}},Ir=function(){function e(e,t){void 0===e&&(e=kr);var r,n,i,o,a=this;this.options={},this.id=function(e){if(a.options.disable)return null;var t=a.identityStore.getAndSync(a.idKey);void 0!==e&&(a.identityStore.set(a.idKey,e),e!==t&&null!==t&&null!==e&&a.anonymousId(null));var r=a.identityStore.getAndSync(a.idKey);if(r)return r;var n=a.legacyUserStore.get(kr.cookie.oldKey);return n?"object"==typeof n?n.id:n:null},this.anonymousId=function(e){var t,r;if(a.options.disable)return null;if(void 0===e){var n=null!==(t=a.identityStore.getAndSync(a.anonKey))&&void 0!==t?t:null===(r=a.legacySIO())||void 0===r?void 0:r[0];if(n)return n}return null===e?(a.identityStore.set(a.anonKey,null),a.identityStore.getAndSync(a.anonKey)):(a.identityStore.set(a.anonKey,null!=e?e:(0,Or.v4)()),a.identityStore.getAndSync(a.anonKey))},this.traits=function(e){var t;if(!a.options.disable)return null===e&&(e={}),e&&a.traitsStore.set(a.traitsKey,null!=e?e:{}),null!==(t=a.traitsStore.get(a.traitsKey))&&void 0!==t?t:{}},this.options=Sr.__assign(Sr.__assign({},kr),e),this.cookieOptions=t,this.idKey=null!==(n=null===(r=e.cookie)||void 0===r?void 0:r.key)&&void 0!==n?n:kr.cookie.key,this.traitsKey=null!==(o=null===(i=e.localStorage)||void 0===i?void 0:i.key)&&void 0!==o?o:kr.localStorage.key,this.anonKey="ajs_anonymous_id",this.identityStore=this.createStorage(this.options,t),this.legacyUserStore=this.createStorage(this.options,t,(function(e){return e===jr.StoreType.Cookie})),this.traitsStore=this.createStorage(this.options,t,(function(e){return e!==jr.StoreType.Cookie}));var u=this.legacyUserStore.get(kr.cookie.oldKey);u&&"object"==typeof u&&(u.id&&this.id(u.id),u.traits&&this.traits(u.traits)),(0,xr.default)(this)}return e.prototype.legacySIO=function(){var e=this.legacyUserStore.get("_sio");if(!e)return null;var t=e.split("----");return[t[0],t[1]]},e.prototype.identify=function(e,t){if(!this.options.disable){t=null!=t?t:{};var r=this.id();null!==r&&r!==e||(t=Sr.__assign(Sr.__assign({},this.traits()),t)),e&&this.id(e),this.traits(t)}},e.prototype.logout=function(){this.anonymousId(null),this.id(null),this.traits({})},e.prototype.reset=function(){this.logout(),this.identityStore.clear(this.idKey),this.identityStore.clear(this.anonKey),this.traitsStore.clear(this.traitsKey)},e.prototype.load=function(){return new e(this.options,this.cookieOptions)},e.prototype.save=function(){return!0},e.prototype.createStorage=function(e,t,r){var n=[jr.StoreType.LocalStorage,jr.StoreType.Cookie,jr.StoreType.Memory];return e.disable?new jr.UniversalStorage([]):e.persist?(void 0!==e.storage&&null!==e.storage&&(0,jr.isArrayOfStoreType)(e.storage)&&(n=e.storage.stores),e.localStorageFallbackDisabled&&(n=n.filter((function(e){return e!==jr.StoreType.LocalStorage}))),r&&(n=n.filter(r)),new jr.UniversalStorage((0,jr.initializeStorages)((0,jr.applyCookieOptions)(n,t)))):new jr.UniversalStorage([new jr.MemoryStorage])},e.defaults=kr,e}();Jt.User=Ir;var Ar={persist:!0,cookie:{key:"ajs_group_id"},localStorage:{key:"ajs_group_properties"}},Mr=function(e){function t(t,r){void 0===t&&(t=Ar);var n=e.call(this,Sr.__assign(Sr.__assign({},Ar),t),r)||this;return n.anonymousId=function(e){},(0,xr.default)(n),n}return Sr.__extends(t,e),t}(Ir);Jt.Group=Mr;var Er={},Cr={};Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.isThenable=void 0;Cr.isThenable=function(e){return"object"==typeof e&&null!==e&&"then"in e&&"function"==typeof e.then},function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnalyticsBuffered=t.callAnalyticsMethod=t.PreInitMethodCallBuffer=t.PreInitMethodCall=t.hasBufferedPageContextAsLastArg=t.popPageContext=t.flushAnalyticsCallsInNewTask=t.flushSetAnonymousID=t.flushOn=t.flushAddSourceMiddleware=void 0;var r=F,n=Cr,i=Ke,o=R,a=bt,u=function(e,t,r){r.getCalls(e).forEach((function(e){l(t,e).catch(console.error)}))};t.flushAddSourceMiddleware=function(e,t){return r.__awaiter(void 0,void 0,void 0,(function(){var n,i,o;return r.__generator(this,(function(r){switch(r.label){case 0:n=0,i=t.getCalls("addSourceMiddleware"),r.label=1;case 1:return n<i.length?(o=i[n],[4,l(e,o).catch(console.error)]):[3,4];case 2:r.sent(),r.label=3;case 3:return n++,[3,1];case 4:return[2]}}))}))},t.flushOn=u.bind(e,"on"),t.flushSetAnonymousID=u.bind(e,"setAnonymousId");t.flushAnalyticsCallsInNewTask=function(e,t){t.toArray().forEach((function(t){setTimeout((function(){l(e,t).catch(console.error)}),0)}))};t.popPageContext=function(e){if((0,t.hasBufferedPageContextAsLastArg)(e)){var r=e.pop();return(0,a.createPageContext)(r)}};t.hasBufferedPageContextAsLastArg=function(e){var t=e[e.length-1];return(0,a.isBufferedPageContext)(t)};var s=function(e,t,r,n){void 0===r&&(r=function(){}),void 0===n&&(n=console.error),this.method=e,this.resolve=r,this.reject=n,this.called=!1,this.args=t};t.PreInitMethodCall=s;var c=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._callMap={},this.push.apply(this,e)}return Object.defineProperty(e.prototype,"calls",{get:function(){return this._pushSnippetWindowBuffer(),this._callMap},set:function(e){this._callMap=e},enumerable:!1,configurable:!0}),e.prototype.getCalls=function(e){var t;return null!==(t=this.calls[e])&&void 0!==t?t:[]},e.prototype.push=function(){for(var e=this,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];n.forEach((function(n){["track","screen","alias","group","page","identify"].includes(n.method)&&!(0,t.hasBufferedPageContextAsLastArg)(n.args)&&(n.args=r.__spreadArray(r.__spreadArray([],n.args,!0),[(0,a.getDefaultBufferedPageContext)()],!1)),e.calls[n.method]?e.calls[n.method].push(n):e.calls[n.method]=[n]}))},e.prototype.clear=function(){this._pushSnippetWindowBuffer(),this.calls={}},e.prototype.toArray=function(){var e;return(e=[]).concat.apply(e,Object.values(this.calls))},e.prototype._pushSnippetWindowBuffer=function(){var e=(0,o.getGlobalAnalytics)();if(Array.isArray(e)){var t=e.splice(0,e.length).map((function(e){var t=e[0],r=e.slice(1);return new s(t,r)}));this.push.apply(this,t)}},e}();function l(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,o;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),t.called?[2,void 0]:(t.called=!0,i=e[t.method].apply(e,t.args),(0,n.isThenable)(i)?[4,i]:[3,2]);case 1:r.sent(),r.label=2;case 2:return t.resolve(i),[3,4];case 3:return o=r.sent(),t.reject(o),[3,4];case 4:return[2]}}))}))}t.PreInitMethodCallBuffer=c,t.callAnalyticsMethod=l;var f=function(){function e(e){var t=this;this.trackSubmit=this._createMethod("trackSubmit"),this.trackClick=this._createMethod("trackClick"),this.trackLink=this._createMethod("trackLink"),this.pageView=this._createMethod("pageview"),this.identify=this._createMethod("identify"),this.reset=this._createMethod("reset"),this.group=this._createMethod("group"),this.track=this._createMethod("track"),this.ready=this._createMethod("ready"),this.alias=this._createMethod("alias"),this.debug=this._createChainableMethod("debug"),this.page=this._createMethod("page"),this.once=this._createChainableMethod("once"),this.off=this._createChainableMethod("off"),this.on=this._createChainableMethod("on"),this.addSourceMiddleware=this._createMethod("addSourceMiddleware"),this.setAnonymousId=this._createMethod("setAnonymousId"),this.addDestinationMiddleware=this._createMethod("addDestinationMiddleware"),this.screen=this._createMethod("screen"),this.register=this._createMethod("register"),this.deregister=this._createMethod("deregister"),this.user=this._createMethod("user"),this.VERSION=i.version,this._preInitBuffer=new c,this._promise=e(this._preInitBuffer),this._promise.then((function(e){var r=e[0],n=e[1];t.instance=r,t.ctx=n})).catch((function(){}))}return e.prototype.then=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return(e=this._promise).then.apply(e,t)},e.prototype.catch=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return(e=this._promise).catch.apply(e,t)},e.prototype.finally=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return(e=this._promise).finally.apply(e,t)},e.prototype._createMethod=function(e){var t=this;return function(){for(var r,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(t.instance){var o=(r=t.instance)[e].apply(r,n);return Promise.resolve(o)}return new Promise((function(r,i){t._preInitBuffer.push(new s(e,n,r,i))}))}},e.prototype._createChainableMethod=function(e){var t=this;return function(){for(var r,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return t.instance?((r=t.instance)[e].apply(r,n),t):(t._preInitBuffer.push(new s(e,n)),t)}},e}();t.AnalyticsBuffered=f}(Er);var Tr,Dr,Fr={},Nr={};function Lr(){if(Dr)return Fr;Dr=1,Object.defineProperty(Fr,"__esModule",{value:!0}),Fr.form=Fr.link=void 0;var e=(Tr||(Tr=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.pTimeout=e.invokeCallback=void 0;var t=De;Object.defineProperty(e,"invokeCallback",{enumerable:!0,get:function(){return t.invokeCallback}}),Object.defineProperty(e,"pTimeout",{enumerable:!0,get:function(){return t.pTimeout}})}(Nr)),Nr);return Fr.link=function(t,r,n,i){var o=this;return t?((t instanceof Element?[t]:"toArray"in t?t.toArray():t).forEach((function(t){t.addEventListener("click",(function(a){var u,s,c=r instanceof Function?r(t):r,l=n instanceof Function?n(t):n,f=t.getAttribute("href")||t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("xlink:href")||(null===(u=t.getElementsByTagName("a")[0])||void 0===u?void 0:u.getAttribute("href")),d=(0,e.pTimeout)(o.track(c,l,null!=i?i:{}),null!==(s=o.settings.timeout)&&void 0!==s?s:500);(function(e,t){return!("_blank"!==e.target||!t)})(t,f)||function(e){var t=e;return!!(t.ctrlKey||t.shiftKey||t.metaKey||t.button&&1==t.button)}(a)||f&&(a.preventDefault?a.preventDefault():a.returnValue=!1,d.catch(console.error).then((function(){window.location.href=f})).catch(console.error))}),!1)})),this):this},Fr.form=function(t,r,n,i){var o=this;return t?(t instanceof HTMLFormElement&&(t=[t]),t.forEach((function(t){if(!(t instanceof Element))throw new TypeError("Must pass HTMLElement to trackForm/trackSubmit.");var a=function(a){var u;a.preventDefault?a.preventDefault():a.returnValue=!1;var s=r instanceof Function?r(t):r,c=n instanceof Function?n(t):n;(0,e.pTimeout)(o.track(s,c,null!=i?i:{}),null!==(u=o.settings.timeout)&&void 0!==u?u:500).catch(console.error).then((function(){t.submit()})).catch(console.error)},u=window.jQuery||window.Zepto;u?u(t).submit(a):t.addEventListener("submit",a,!1)})),this):this},Fr}var Rr,Ur,Br={},zr={},qr={},Vr={},Gr={},Kr={exports:{}};function Wr(){return Rr||(Rr=1,function(e){function t(e){return function(t,r,n,o){var a,u=o&&function(e){return"function"==typeof e}(o.normalizer)?o.normalizer:i;r=u(r);for(var s=!1;!s;)c();function c(){for(a in t){var e=u(a);if(0===r.indexOf(e)){var n=r.substr(e.length);if("."===n.charAt(0)||0===n.length){r=n.substr(1);var i=t[a];return null==i?void(s=!0):r.length?void(t=i):void(s=!0)}}}a=void 0,s=!0}if(a)return null==t?t:e(t,a,n)}}function r(e,t){return e.hasOwnProperty(t)&&delete e[t],e}function n(e,t,r){return e.hasOwnProperty(t)&&(e[t]=r),e}function i(e){return e.replace(/[^a-zA-Z0-9\.]+/g,"").toLowerCase()}e.exports=t((function(e,t){if(e.hasOwnProperty(t))return e[t]})),e.exports.find=e.exports,e.exports.replace=function(e,r,i,o){return t(n).call(this,e,r,i,o),e},e.exports.del=function(e,n,i){return t(r).call(this,e,n,null,i),e}}(Kr)),Kr.exports}var Hr,Jr={};var Qr,Yr={};var $r,Zr={};function Xr(){if($r)return Zr;$r=1;var e=/^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;return Zr.parse=function(t){var r=[1,5,6,7,11,12],n=e.exec(t),i=0;if(!n)return new Date(t);for(var o,a=0;o=r[a];a++)n[o]=parseInt(n[o],10)||0;n[2]=parseInt(n[2],10)||1,n[3]=parseInt(n[3],10)||1,n[2]--,n[8]=n[8]?(n[8]+"00").substring(0,3):0," "===n[4]?i=(new Date).getTimezoneOffset():"Z"!==n[9]&&n[10]&&(i=60*n[11]+n[12],"+"===n[10]&&(i=0-i));var u=Date.UTC(n[1],n[2],n[3],n[5],n[6]+i,n[7],n[8]);return new Date(u)},Zr.is=function(t,r){return"string"==typeof t&&((!r||!1!==/^\d{4}-\d{2}-\d{2}/.test(t))&&e.test(t))},Zr}var en,tn={};function rn(){if(en)return tn;en=1;var e=/\d{13}/;return tn.is=function(t){return e.test(t)},tn.parse=function(e){return e=parseInt(e,10),new Date(e)},tn}var nn,on,an,un,sn,cn,ln={};function fn(){if(nn)return ln;nn=1;var e=/\d{10}/;return ln.is=function(t){return e.test(t)},ln.parse=function(e){var t=1e3*parseInt(e,10);return new Date(t)},ln}function dn(){if(an)return on;an=1;var e=Xr(),t=rn(),r=fn(),n=Object.prototype.toString;return on=function(i){return o=i,"[object Date]"===n.call(o)?i:function(e){return"[object Number]"===n.call(e)}(i)?new Date((a=i)<315576e5?1e3*a:a):e.is(i)?e.parse(i):t.is(i)?t.parse(i):r.is(i)?r.parse(i):new Date(i);var o,a}}function pn(){if(sn)return un;sn=1;var e=Xr();function t(r,n){return void 0===n&&(n=!0),r&&"object"==typeof r?function(e,r){return Object.keys(e).forEach((function(n){e[n]=t(e[n],r)})),e}(r,n):Array.isArray(r)?function(e,r){return e.forEach((function(n,i){e[i]=t(n,r)})),e}(r,n):e.is(r,n)?e.parse(r):r}return un=t}function hn(){if(cn)return Vr;cn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vr,"__esModule",{value:!0}),Vr.Facade=void 0;var r=t(function(){if(Ur)return Gr;Ur=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gr,"__esModule",{value:!0});var r=t(Wr());function n(e,t){return function(){var n=this.traits(),i=this.properties?this.properties():{};return r.default(n,"address."+e)||r.default(n,e)||(t?r.default(n,"address."+t):null)||(t?r.default(n,t):null)||r.default(i,"address."+e)||r.default(i,e)||(t?r.default(i,"address."+t):null)||(t?r.default(i,t):null)}}return Gr.default=function(e){e.zip=n("postalCode","zip"),e.country=n("country"),e.street=n("street"),e.state=n("state"),e.city=n("city"),e.region=n("region")},Gr}()),n=(Hr||(Hr=1,Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.clone=void 0,Jr.clone=function e(t){if("object"!=typeof t)return t;if("[object Object]"===Object.prototype.toString.call(t)){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=e(t[n]));return r}return Array.isArray(t)?t.map(e):t}),Jr),i=t(function(){if(Qr)return Yr;Qr=1,Object.defineProperty(Yr,"__esModule",{value:!0});var e={Salesforce:!0};return Yr.default=function(t){return!e[t]},Yr}()),o=t(dn()),a=t(Wr()),u=t(pn());function s(e,t){t=t||{},this.raw=n.clone(e),"clone"in t||(t.clone=!0),t.clone&&(e=n.clone(e)),"traverse"in t||(t.traverse=!0),e.timestamp="timestamp"in e?o.default(e.timestamp):new Date,t.traverse&&u.default(e),this.opts=t,this.obj=e}Vr.Facade=s;var c=s.prototype;function l(e){return n.clone(e)}return c.proxy=function(e){var t=e.split("."),r=this[e=t.shift()]||this.obj[e];return r?("function"==typeof r&&(r=r.call(this)||{}),0===t.length||(r=a.default(r,t.join("."))),this.opts.clone?l(r):r):r},c.field=function(e){var t=this.obj[e];return this.opts.clone?l(t):t},s.proxy=function(e){return function(){return this.proxy(e)}},s.field=function(e){return function(){return this.field(e)}},s.multi=function(e){return function(){var t=this.proxy(e+"s");if(Array.isArray(t))return t;var r=this.proxy(e);return r&&(r=[this.opts.clone?n.clone(r):r]),r||[]}},s.one=function(e){return function(){var t=this.proxy(e);if(t)return t;var r=this.proxy(e+"s");return Array.isArray(r)?r[0]:void 0}},c.json=function(){var e=this.opts.clone?n.clone(this.obj):this.obj;return this.type&&(e.type=this.type()),e},c.rawEvent=function(){return this.raw},c.options=function(e){var t=this.obj.options||this.obj.context||{},r=this.opts.clone?n.clone(t):t;if(!e)return r;if(this.enabled(e)){var i=this.integrations(),o=i[e]||a.default(i,e);return"object"!=typeof o&&(o=a.default(this.options(),e)),"object"==typeof o?o:{}}},c.context=c.options,c.enabled=function(e){var t=this.proxy("options.providers.all");"boolean"!=typeof t&&(t=this.proxy("options.all")),"boolean"!=typeof t&&(t=this.proxy("integrations.all")),"boolean"!=typeof t&&(t=!0);var r=t&&i.default(e),n=this.integrations();if(n.providers&&n.providers.hasOwnProperty(e)&&(r=n.providers[e]),n.hasOwnProperty(e)){var o=n[e];r="boolean"!=typeof o||o}return!!r},c.integrations=function(){return this.obj.integrations||this.proxy("options.providers")||this.options()},c.active=function(){var e=this.proxy("options.active");return null==e&&(e=!0),e},c.anonymousId=function(){return this.field("anonymousId")||this.field("sessionId")},c.sessionId=c.anonymousId,c.groupId=s.proxy("options.groupId"),c.traits=function(e){var t=this.proxy("options.traits")||{},r=this.userId();for(var n in e=e||{},r&&(t.id=r),e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=null==this[n]?this.proxy("options.traits."+n):this[n]();if(null==i)continue;t[e[n]]=i,delete t[n]}return t},c.library=function(){var e=this.proxy("options.library");return e?"string"==typeof e?{name:e,version:null}:e:{name:"unknown",version:null}},c.device=function(){var e=this.proxy("context.device");"object"==typeof e&&null!==e||(e={});var t=this.library().name;return e.type||(t.indexOf("ios")>-1&&(e.type="ios"),t.indexOf("android")>-1&&(e.type="android")),e},c.userAgent=s.proxy("context.userAgent"),c.timezone=s.proxy("context.timezone"),c.timestamp=s.field("timestamp"),c.channel=s.field("channel"),c.ip=s.proxy("context.ip"),c.userId=s.field("userId"),r.default(c),Vr}var vn,yn,gn,_n={},mn={exports:{}},bn={exports:{}};function wn(){if(yn)return mn.exports;yn=1;try{var e=require("util");if("function"!=typeof e.inherits)throw"";mn.exports=e.inherits}catch(e){mn.exports=(vn||(vn=1,"function"==typeof Object.create?bn.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:bn.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}),bn.exports)}return mn.exports}var Pn,Sn,On={},xn={};function jn(){if(Pn)return xn;Pn=1,Object.defineProperty(xn,"__esModule",{value:!0});var e=/.+\@.+\..+/;return xn.default=function(t){return e.test(t)},xn}var kn,In={};function An(){if(kn)return In;kn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(In,"__esModule",{value:!0}),In.Identify=void 0;var r=hn(),n=t(Wr()),i=t(wn()),o=t(jn()),a=t(dn()),u=function(e){return e.trim()};function s(e,t){r.Facade.call(this,e,t)}In.Identify=s,i.default(s,r.Facade);var c=s.prototype;return c.action=function(){return"identify"},c.type=c.action,c.traits=function(e){var t=this.field("traits")||{},r=this.userId();for(var n in e=e||{},r&&(t.id=r),e){var i=null==this[n]?this.proxy("traits."+n):this[n]();null!=i&&(t[e[n]]=i,n!==e[n]&&delete t[n])}return t},c.email=function(){var e=this.proxy("traits.email");if(e)return e;var t=this.userId();return o.default(t)?t:void 0},c.created=function(){var e=this.proxy("traits.created")||this.proxy("traits.createdAt");if(e)return a.default(e)},c.companyCreated=function(){var e=this.proxy("traits.company.created")||this.proxy("traits.company.createdAt");if(e)return a.default(e)},c.companyName=function(){return this.proxy("traits.company.name")},c.name=function(){var e=this.proxy("traits.name");if("string"==typeof e)return u(e);var t=this.firstName(),r=this.lastName();return t&&r?u(t+" "+r):void 0},c.firstName=function(){var e=this.proxy("traits.firstName");if("string"==typeof e)return u(e);var t=this.proxy("traits.name");return"string"==typeof t?u(t).split(" ")[0]:void 0},c.lastName=function(){var e=this.proxy("traits.lastName");if("string"==typeof e)return u(e);var t=this.proxy("traits.name");if("string"==typeof t){var r=u(t).indexOf(" ");if(-1!==r)return u(t.substr(r+1))}},c.uid=function(){return this.userId()||this.username()||this.email()},c.description=function(){return this.proxy("traits.description")||this.proxy("traits.background")},c.age=function(){var e=this.birthday(),t=n.default(this.traits(),"age");return null!=t?t:e instanceof Date?(new Date).getFullYear()-e.getFullYear():void 0},c.avatar=function(){var e=this.traits();return n.default(e,"avatar")||n.default(e,"photoUrl")||n.default(e,"avatarUrl")},c.position=function(){var e=this.traits();return n.default(e,"position")||n.default(e,"jobTitle")},c.username=r.Facade.proxy("traits.username"),c.website=r.Facade.one("traits.website"),c.websites=r.Facade.multi("traits.website"),c.phone=r.Facade.one("traits.phone"),c.phones=r.Facade.multi("traits.phone"),c.address=r.Facade.proxy("traits.address"),c.gender=r.Facade.proxy("traits.gender"),c.birthday=r.Facade.proxy("traits.birthday"),In}var Mn,En={};function Cn(){if(Mn)return En;Mn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(En,"__esModule",{value:!0}),En.Track=void 0;var r=t(wn()),n=hn(),i=An(),o=t(jn()),a=t(Wr());function u(e,t){n.Facade.call(this,e,t)}En.Track=u,r.default(u,n.Facade);var s=u.prototype;return s.action=function(){return"track"},s.type=s.action,s.event=n.Facade.field("event"),s.value=n.Facade.proxy("properties.value"),s.category=n.Facade.proxy("properties.category"),s.id=n.Facade.proxy("properties.id"),s.productId=function(){return this.proxy("properties.product_id")||this.proxy("properties.productId")},s.promotionId=function(){return this.proxy("properties.promotion_id")||this.proxy("properties.promotionId")},s.cartId=function(){return this.proxy("properties.cart_id")||this.proxy("properties.cartId")},s.checkoutId=function(){return this.proxy("properties.checkout_id")||this.proxy("properties.checkoutId")},s.paymentId=function(){return this.proxy("properties.payment_id")||this.proxy("properties.paymentId")},s.couponId=function(){return this.proxy("properties.coupon_id")||this.proxy("properties.couponId")},s.wishlistId=function(){return this.proxy("properties.wishlist_id")||this.proxy("properties.wishlistId")},s.reviewId=function(){return this.proxy("properties.review_id")||this.proxy("properties.reviewId")},s.orderId=function(){return this.proxy("properties.id")||this.proxy("properties.order_id")||this.proxy("properties.orderId")},s.sku=n.Facade.proxy("properties.sku"),s.tax=n.Facade.proxy("properties.tax"),s.name=n.Facade.proxy("properties.name"),s.price=n.Facade.proxy("properties.price"),s.total=n.Facade.proxy("properties.total"),s.repeat=n.Facade.proxy("properties.repeat"),s.coupon=n.Facade.proxy("properties.coupon"),s.shipping=n.Facade.proxy("properties.shipping"),s.discount=n.Facade.proxy("properties.discount"),s.shippingMethod=function(){return this.proxy("properties.shipping_method")||this.proxy("properties.shippingMethod")},s.paymentMethod=function(){return this.proxy("properties.payment_method")||this.proxy("properties.paymentMethod")},s.description=n.Facade.proxy("properties.description"),s.plan=n.Facade.proxy("properties.plan"),s.subtotal=function(){var e=a.default(this.properties(),"subtotal"),t=this.total()||this.revenue();if(e)return e;if(!t)return 0;if(this.total()){var r=this.tax();r&&(t-=r),(r=this.shipping())&&(t-=r),(r=this.discount())&&(t+=r)}return t},s.products=function(){var e=this.properties(),t=a.default(e,"products");return Array.isArray(t)?t.filter((function(e){return null!==e})):[]},s.quantity=function(){return(this.obj.properties||{}).quantity||1},s.currency=function(){return(this.obj.properties||{}).currency||"USD"},s.referrer=function(){return this.proxy("context.referrer.url")||this.proxy("context.page.referrer")||this.proxy("properties.referrer")},s.query=n.Facade.proxy("options.query"),s.properties=function(e){var t=this.field("properties")||{};for(var r in e=e||{})if(Object.prototype.hasOwnProperty.call(e,r)){var n=null==this[r]?this.proxy("properties."+r):this[r]();if(null==n)continue;t[e[r]]=n,delete t[r]}return t},s.username=function(){return this.proxy("traits.username")||this.proxy("properties.username")||this.userId()||this.sessionId()},s.email=function(){var e=this.proxy("traits.email")||this.proxy("properties.email")||this.proxy("options.traits.email");if(e)return e;var t=this.userId();return o.default(t)?t:void 0},s.revenue=function(){var e=this.proxy("properties.revenue"),t=this.event();return!e&&t&&t.match(/^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i)&&(e=this.proxy("properties.total")),function(e){if(!e)return;if("number"==typeof e)return e;if("string"!=typeof e)return;if(e=e.replace(/\$/g,""),e=parseFloat(e),!isNaN(e))return e}(e)},s.cents=function(){var e=this.revenue();return"number"!=typeof e?this.value()||0:100*e},s.identify=function(){var e=this.json();return e.traits=this.traits(),new i.Identify(e,this.opts)},En}var Tn,Dn={};function Fn(){if(Tn)return Dn;Tn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.Page=void 0;var r=t(wn()),n=hn(),i=Cn(),o=t(jn());function a(e,t){n.Facade.call(this,e,t)}Dn.Page=a,r.default(a,n.Facade);var u=a.prototype;return u.action=function(){return"page"},u.type=u.action,u.category=n.Facade.field("category"),u.name=n.Facade.field("name"),u.title=n.Facade.proxy("properties.title"),u.path=n.Facade.proxy("properties.path"),u.url=n.Facade.proxy("properties.url"),u.referrer=function(){return this.proxy("context.referrer.url")||this.proxy("context.page.referrer")||this.proxy("properties.referrer")},u.properties=function(e){var t=this.field("properties")||{},r=this.category(),n=this.name();for(var i in e=e||{},r&&(t.category=r),n&&(t.name=n),e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=null==this[i]?this.proxy("properties."+i):this[i]();if(null==o)continue;t[e[i]]=o,i!==e[i]&&delete t[i]}return t},u.email=function(){var e=this.proxy("context.traits.email")||this.proxy("properties.email");if(e)return e;var t=this.userId();return o.default(t)?t:void 0},u.fullName=function(){var e=this.category(),t=this.name();return t&&e?e+" "+t:t},u.event=function(e){return e?"Viewed "+e+" Page":"Loaded a Page"},u.track=function(e){var t=this.json();return t.event=this.event(e),t.timestamp=this.timestamp(),t.properties=this.properties(),new i.Track(t,this.opts)},Dn}var Nn,Ln={};var Rn,Un,Bn={};function zn(){return Un||(Un=1,function(t){var r=e&&e.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Delete=t.Screen=t.Page=t.Track=t.Identify=t.Group=t.Alias=t.Facade=void 0;var n=hn();Object.defineProperty(t,"Facade",{enumerable:!0,get:function(){return n.Facade}});var i=function(){if(gn)return _n;gn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_n,"__esModule",{value:!0}),_n.Alias=void 0;var r=t(wn()),n=hn();function i(e,t){n.Facade.call(this,e,t)}return _n.Alias=i,r.default(i,n.Facade),i.prototype.action=function(){return"alias"},i.prototype.type=i.prototype.action,i.prototype.previousId=function(){return this.field("previousId")||this.field("from")},i.prototype.from=i.prototype.previousId,i.prototype.userId=function(){return this.field("userId")||this.field("to")},i.prototype.to=i.prototype.userId,_n}();Object.defineProperty(t,"Alias",{enumerable:!0,get:function(){return i.Alias}});var o=function(){if(Sn)return On;Sn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(On,"__esModule",{value:!0}),On.Group=void 0;var r=t(wn()),n=t(jn()),i=t(dn()),o=hn();function a(e,t){o.Facade.call(this,e,t)}On.Group=a,r.default(a,o.Facade);var u=a.prototype;return u.action=function(){return"group"},u.type=u.action,u.groupId=o.Facade.field("groupId"),u.created=function(){var e=this.proxy("traits.createdAt")||this.proxy("traits.created")||this.proxy("properties.createdAt")||this.proxy("properties.created");if(e)return i.default(e)},u.email=function(){var e=this.proxy("traits.email");if(e)return e;var t=this.groupId();return n.default(t)?t:void 0},u.traits=function(e){var t=this.properties(),r=this.groupId();for(var n in e=e||{},r&&(t.id=r),e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=null==this[n]?this.proxy("traits."+n):this[n]();if(null==i)continue;t[e[n]]=i,delete t[n]}return t},u.name=o.Facade.proxy("traits.name"),u.industry=o.Facade.proxy("traits.industry"),u.employees=o.Facade.proxy("traits.employees"),u.properties=function(){return this.field("traits")||this.field("properties")||{}},On}();Object.defineProperty(t,"Group",{enumerable:!0,get:function(){return o.Group}});var a=An();Object.defineProperty(t,"Identify",{enumerable:!0,get:function(){return a.Identify}});var u=Cn();Object.defineProperty(t,"Track",{enumerable:!0,get:function(){return u.Track}});var s=Fn();Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return s.Page}});var c=function(){if(Nn)return Ln;Nn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ln,"__esModule",{value:!0}),Ln.Screen=void 0;var r=t(wn()),n=Fn(),i=Cn();function o(e,t){n.Page.call(this,e,t)}return Ln.Screen=o,r.default(o,n.Page),o.prototype.action=function(){return"screen"},o.prototype.type=o.prototype.action,o.prototype.event=function(e){return e?"Viewed "+e+" Screen":"Loaded a Screen"},o.prototype.track=function(e){var t=this.json();return t.event=this.event(e),t.timestamp=this.timestamp(),t.properties=this.properties(),new i.Track(t,this.opts)},Ln}();Object.defineProperty(t,"Screen",{enumerable:!0,get:function(){return c.Screen}});var l=function(){if(Rn)return Bn;Rn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bn,"__esModule",{value:!0}),Bn.Delete=void 0;var r=t(wn()),n=hn();function i(e,t){n.Facade.call(this,e,t)}return Bn.Delete=i,r.default(i,n.Facade),i.prototype.type=function(){return"delete"},Bn}();Object.defineProperty(t,"Delete",{enumerable:!0,get:function(){return l.Delete}}),t.default=r(r({},n.Facade),{Alias:i.Alias,Group:o.Group,Identify:a.Identify,Track:u.Track,Page:s.Page,Screen:c.Screen,Delete:l.Delete})}(qr)),qr}Object.defineProperty(zr,"__esModule",{value:!0}),zr.toFacade=void 0;var qn=zn();zr.toFacade=function(e,t){var r=new qn.Facade(e,t);return"track"===e.type&&(r=new qn.Track(e,t)),"identify"===e.type&&(r=new qn.Identify(e,t)),"page"===e.type&&(r=new qn.Page(e,t)),"alias"===e.type&&(r=new qn.Alias(e,t)),"group"===e.type&&(r=new qn.Group(e,t)),"screen"===e.type&&(r=new qn.Screen(e,t)),Object.defineProperty(r,"obj",{value:e,writable:!0}),r},Object.defineProperty(Br,"__esModule",{value:!0}),Br.sourceMiddlewarePlugin=Br.applyDestinationMiddleware=void 0;var Vn=F,Gn=qe,Kn=zr;Br.applyDestinationMiddleware=function(e,t,r){return Vn.__awaiter(this,void 0,void 0,(function(){function n(t,r){return Vn.__awaiter(this,void 0,void 0,(function(){var n,i,o;return Vn.__generator(this,(function(a){switch(a.label){case 0:return n=!1,i=null,[4,r({payload:(0,Kn.toFacade)(t,{clone:!0,traverse:!1}),integration:e,next:function(e){n=!0,null===e&&(i=null),e&&(i=e.obj)}})];case 1:return a.sent(),n||null===i||(i.integrations=Vn.__assign(Vn.__assign({},t.integrations),((o={})[e]=!1,o))),[2,i]}}))}))}var i,o,a,u,s;return Vn.__generator(this,(function(e){switch(e.label){case 0:i=(0,Kn.toFacade)(t,{clone:!0,traverse:!1}).rawEvent(),o=0,a=r,e.label=1;case 1:return o<a.length?(u=a[o],[4,n(i,u)]):[3,4];case 2:if(null===(s=e.sent()))return[2,null];i=s,e.label=3;case 3:return o++,[3,1];case 4:return[2,i]}}))}))},Br.sourceMiddlewarePlugin=function(e,t){function r(r){return Vn.__awaiter(this,void 0,void 0,(function(){var n;return Vn.__generator(this,(function(i){switch(i.label){case 0:return n=!1,[4,e({payload:(0,Kn.toFacade)(r.event,{clone:!0,traverse:!1}),integrations:null!=t?t:{},next:function(e){n=!0,e&&(r.event=e.obj)}})];case 1:if(i.sent(),!n)throw new Gn.ContextCancelation({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,r]}}))}))}return{name:"Source Middleware ".concat(e.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(e){return Promise.resolve(e)},track:r,page:r,identify:r,alias:r,group:r}};var Wn,Hn={},Jn={};var Qn,Yn,$n={};function Zn(){if(Qn)return $n;return Qn=1,Object.defineProperty($n,"__esModule",{value:!0}),$n.gracefulDecodeURIComponent=void 0,$n.gracefulDecodeURIComponent=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},$n}function Xn(){if(Yn)return Hn;Yn=1,Object.defineProperty(Hn,"__esModule",{value:!0}),Hn.queryString=void 0;var e=(Wn||(Wn=1,Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.pickPrefix=void 0,Jn.pickPrefix=function(e,t){return Object.keys(t).reduce((function(r,n){return n.startsWith(e)&&(r[n.substr(e.length)]=t[n]),r}),{})}),Jn),t=Zn(),r=De;return Hn.queryString=function(n,i){var o=document.createElement("a");o.href=i;var a=o.search.slice(1).split("&").reduce((function(e,r){var n=r.split("="),i=n[0],o=n[1];return e[i]=(0,t.gracefulDecodeURIComponent)(o),e}),{}),u=[],s=a.ajs_uid,c=a.ajs_event,l=a.ajs_aid,f=(0,r.isPlainObject)(n.options.useQueryString)?n.options.useQueryString:{},d=f.aid,p=void 0===d?/.+/:d,h=f.uid,v=void 0===h?/.+/:h;if(l){var y=Array.isArray(a.ajs_aid)?a.ajs_aid[0]:a.ajs_aid;p.test(y)&&n.setAnonymousId(y)}if(s){var g=Array.isArray(a.ajs_uid)?a.ajs_uid[0]:a.ajs_uid;if(v.test(g)){var _=(0,e.pickPrefix)("ajs_trait_",a);u.push(n.identify(g,_))}}if(c){var m=Array.isArray(a.ajs_event)?a.ajs_event[0]:a.ajs_event,b=(0,e.pickPrefix)("ajs_prop_",a);u.push(n.track(m,b))}return Promise.all(u)},Hn}Object.defineProperty(Q,"__esModule",{value:!0}),Q.NullAnalytics=Q.Analytics=void 0;var ei=F,ti=Y,ri=Le,ni=qe,ii=De,oi=lt,ai=ft,ui=Mt,si=Jt,ci=ei.__importDefault(Yt()),li=Et,fi=Ke,di=Ct,pi=W(),hi=Pr(),vi=R,yi=Er,gi="This is being deprecated and will be not be available in future releases of Analytics JS",_i=(0,pi.getGlobal)(),mi=null==_i?void 0:_i.analytics;function bi(){console.warn(gi)}var wi=function(e){function t(t,r,n,i,o){var a,u,s,c=this;(c=e.call(this)||this)._debug=!1,c.initialized=!1,c.user=function(){return c._user},c.init=c.initialize.bind(c),c.log=bi,c.addIntegrationMiddleware=bi,c.listeners=bi,c.addEventListener=bi,c.removeAllListeners=bi,c.removeListener=bi,c.removeEventListener=bi,c.hasListeners=bi,c.add=bi,c.addIntegration=bi;var l=null==r?void 0:r.cookie,f=null!==(a=null==r?void 0:r.disableClientPersistence)&&void 0!==a&&a;c.settings=t,c.settings.timeout=null!==(u=c.settings.timeout)&&void 0!==u?u:300,c.queue=null!=n?n:function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=t?10:1,i=r?new di.PriorityQueue(n,[]):new li.PersistedPriorityQueue(n,e);return new ui.EventQueue(i)}("".concat(t.writeKey,":event-queue"),null==r?void 0:r.retryQueue,f);var d=null==r?void 0:r.storage;return c._universalStorage=c.createStore(f,d,l),c._user=null!=i?i:new si.User(ei.__assign({persist:!f,storage:null==r?void 0:r.storage},null==r?void 0:r.user),l).load(),c._group=null!=o?o:new si.Group(ei.__assign({persist:!f,storage:null==r?void 0:r.storage},null==r?void 0:r.group),l).load(),c.eventFactory=new ai.EventFactory(c._user),c.integrations=null!==(s=null==r?void 0:r.integrations)&&void 0!==s?s:{},c.options=null!=r?r:{},(0,ci.default)(c),c}return ei.__extends(t,e),t.prototype.createStore=function(e,t,r){return e?new hi.UniversalStorage([new hi.MemoryStorage]):t&&(0,hi.isArrayOfStoreType)(t)?new hi.UniversalStorage((0,hi.initializeStorages)((0,hi.applyCookieOptions)(t.stores,r))):new hi.UniversalStorage((0,hi.initializeStorages)([hi.StoreType.LocalStorage,{name:hi.StoreType.Cookie,settings:r},hi.StoreType.Memory]))},Object.defineProperty(t.prototype,"storage",{get:function(){return this._universalStorage},enumerable:!1,configurable:!0}),t.prototype.track=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r,n,i,o,a,u,s=this;return ei.__generator(this,(function(c){return t=(0,yi.popPageContext)(e),r=ti.resolveArguments.apply(void 0,e),n=r[0],i=r[1],o=r[2],a=r[3],u=this.eventFactory.track(n,i,o,this.integrations,t),[2,this._dispatch(u,a).then((function(e){return s.emit("track",n,e.event.properties,e.event.options),e}))]}))}))},t.prototype.page=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r,n,i,o,a,u,s,c=this;return ei.__generator(this,(function(l){return t=(0,yi.popPageContext)(e),r=ti.resolvePageArguments.apply(void 0,e),n=r[0],i=r[1],o=r[2],a=r[3],u=r[4],s=this.eventFactory.page(n,i,o,a,this.integrations,t),[2,this._dispatch(s,u).then((function(e){return c.emit("page",n,i,e.event.properties,e.event.options),e}))]}))}))},t.prototype.identify=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r,n,i,o,a,u,s=this;return ei.__generator(this,(function(c){return t=(0,yi.popPageContext)(e),r=(0,ti.resolveUserArguments)(this._user).apply(void 0,e),n=r[0],i=r[1],o=r[2],a=r[3],this._user.identify(n,i),u=this.eventFactory.identify(this._user.id(),this._user.traits(),o,this.integrations,t),[2,this._dispatch(u,a).then((function(e){return s.emit("identify",e.event.userId,e.event.traits,e.event.options),e}))]}))}))},t.prototype.group=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=(0,yi.popPageContext)(t);if(0===t.length)return this._group;var i=(0,ti.resolveUserArguments)(this._group).apply(void 0,t),o=i[0],a=i[1],u=i[2],s=i[3];this._group.identify(o,a);var c=this._group.id(),l=this._group.traits(),f=this.eventFactory.group(c,l,u,this.integrations,n);return this._dispatch(f,s).then((function(t){return e.emit("group",t.event.groupId,t.event.traits,t.event.options),t}))},t.prototype.alias=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r,n,i,o,a,u,s=this;return ei.__generator(this,(function(c){return t=(0,yi.popPageContext)(e),r=ti.resolveAliasArguments.apply(void 0,e),n=r[0],i=r[1],o=r[2],a=r[3],u=this.eventFactory.alias(n,i,o,this.integrations,t),[2,this._dispatch(u,a).then((function(e){return s.emit("alias",n,i,e.event.options),e}))]}))}))},t.prototype.screen=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r,n,i,o,a,u,s,c=this;return ei.__generator(this,(function(l){return t=(0,yi.popPageContext)(e),r=ti.resolvePageArguments.apply(void 0,e),n=r[0],i=r[1],o=r[2],a=r[3],u=r[4],s=this.eventFactory.screen(n,i,o,a,this.integrations,t),[2,this._dispatch(s,u).then((function(e){return c.emit("screen",n,i,e.event.properties,e.event.options),e}))]}))}))},t.prototype.trackClick=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r;return ei.__generator(this,(function(n){switch(n.label){case 0:return[4,Promise.resolve().then((function(){return ei.__importStar(Lr())}))];case 1:return t=n.sent(),[2,(r=t.link).call.apply(r,ei.__spreadArray([this],e,!1))]}}))}))},t.prototype.trackLink=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r;return ei.__generator(this,(function(n){switch(n.label){case 0:return[4,Promise.resolve().then((function(){return ei.__importStar(Lr())}))];case 1:return t=n.sent(),[2,(r=t.link).call.apply(r,ei.__spreadArray([this],e,!1))]}}))}))},t.prototype.trackSubmit=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r;return ei.__generator(this,(function(n){switch(n.label){case 0:return[4,Promise.resolve().then((function(){return ei.__importStar(Lr())}))];case 1:return t=n.sent(),[2,(r=t.form).call.apply(r,ei.__spreadArray([this],e,!1))]}}))}))},t.prototype.trackForm=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r;return ei.__generator(this,(function(n){switch(n.label){case 0:return[4,Promise.resolve().then((function(){return ei.__importStar(Lr())}))];case 1:return t=n.sent(),[2,(r=t.form).call.apply(r,ei.__spreadArray([this],e,!1))]}}))}))},t.prototype.register=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r,n=this;return ei.__generator(this,(function(i){switch(i.label){case 0:return t=ni.Context.system(),r=e.map((function(e){return n.queue.register(t,e,n)})),[4,Promise.all(r)];case 1:return i.sent(),[2,t]}}))}))},t.prototype.deregister=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ei.__awaiter(this,void 0,void 0,(function(){var t,r,n=this;return ei.__generator(this,(function(i){switch(i.label){case 0:return t=ni.Context.system(),r=e.map((function(e){var r=n.queue.plugins.find((function(t){return t.name===e}));if(r)return n.queue.deregister(t,r,n);t.log("warn","plugin ".concat(e," not found"))})),[4,Promise.all(r)];case 1:return i.sent(),[2,t]}}))}))},t.prototype.debug=function(e){return!1===e&&localStorage.getItem("debug")&&localStorage.removeItem("debug"),this._debug=e,this},t.prototype.reset=function(){this._user.reset(),this._group.reset(),this.emit("reset")},t.prototype.timeout=function(e){this.settings.timeout=e},t.prototype._dispatch=function(e,t){return ei.__awaiter(this,void 0,void 0,(function(){var r;return ei.__generator(this,(function(n){return r=new ni.Context(e),(0,ri.isOffline)()&&!this.options.retryQueue?[2,r]:[2,(0,ii.dispatch)(r,this.queue,this,{callback:t,debug:this._debug,timeout:this.settings.timeout})]}))}))},t.prototype.addSourceMiddleware=function(e){return ei.__awaiter(this,void 0,void 0,(function(){var t=this;return ei.__generator(this,(function(r){switch(r.label){case 0:return[4,this.queue.criticalTasks.run((function(){return ei.__awaiter(t,void 0,void 0,(function(){var t,r,n;return ei.__generator(this,(function(i){switch(i.label){case 0:return[4,Promise.resolve().then((function(){return ei.__importStar(Br)}))];case 1:return t=i.sent().sourceMiddlewarePlugin,r={},this.queue.plugins.forEach((function(e){if("destination"===e.type)return r[e.name]=!0})),n=t(e,r),[4,this.register(n)];case 2:return i.sent(),[2]}}))}))}))];case 1:return r.sent(),[2,this]}}))}))},t.prototype.addDestinationMiddleware=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return this.queue.plugins.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()})).forEach((function(e){e.addMiddleware.apply(e,t)})),Promise.resolve(this)},t.prototype.setAnonymousId=function(e){return this._user.anonymousId(e)},t.prototype.queryString=function(e){return ei.__awaiter(this,void 0,void 0,(function(){return ei.__generator(this,(function(t){switch(t.label){case 0:return!1===this.options.useQueryString?[2,[]]:[4,Promise.resolve().then((function(){return ei.__importStar(Xn())}))];case 1:return[2,(0,t.sent().queryString)(this,e)]}}))}))},t.prototype.use=function(e){return e(this),this},t.prototype.ready=function(e){return void 0===e&&(e=function(e){return e}),ei.__awaiter(this,void 0,void 0,(function(){return ei.__generator(this,(function(t){return[2,Promise.all(this.queue.plugins.map((function(e){return e.ready?e.ready():Promise.resolve()}))).then((function(t){return e(t),t}))]}))}))},t.prototype.noConflict=function(){return console.warn(gi),(0,vi.setGlobalAnalytics)(null!=mi?mi:this),this},t.prototype.normalize=function(e){return console.warn(gi),this.eventFactory.normalize(e)},Object.defineProperty(t.prototype,"failedInitializations",{get:function(){return console.warn(gi),this.queue.failedInitializations},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"VERSION",{get:function(){return fi.version},enumerable:!1,configurable:!0}),t.prototype.initialize=function(e,t){return ei.__awaiter(this,void 0,void 0,(function(){return ei.__generator(this,(function(e){return console.warn(gi),[2,Promise.resolve(this)]}))}))},t.prototype.pageview=function(e){return ei.__awaiter(this,void 0,void 0,(function(){return ei.__generator(this,(function(t){switch(t.label){case 0:return console.warn(gi),[4,this.page({path:e})];case 1:return t.sent(),[2,this]}}))}))},Object.defineProperty(t.prototype,"plugins",{get:function(){var e;return console.warn(gi),null!==(e=this._plugins)&&void 0!==e?e:{}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Integrations",{get:function(){return console.warn(gi),this.queue.plugins.filter((function(e){return"destination"===e.type})).reduce((function(e,t){var r="".concat(t.name.toLowerCase().replace(".","").split(" ").join("-"),"Integration"),n=window[r];if(!n)return e;var i=n.Integration;return i?(e[t.name]=i,e):(e[t.name]=n,e)}),{})},enumerable:!1,configurable:!0}),t.prototype.push=function(e){var t=e.shift();t&&!this[t]||this[t].apply(this,e)},t}(oi.Emitter);Q.Analytics=wi;var Pi=function(e){function t(){var t=e.call(this,{writeKey:""},{disableClientPersistence:!0})||this;return t.initialized=!0,t}return ei.__extends(t,e),t}(wi);Q.NullAnalytics=Pi;var Si={};Object.defineProperty(Si,"__esModule",{value:!0}),Si.mergedOptions=void 0;var Oi=F;Si.mergedOptions=function(e,t){var r,n=Object.entries(null!==(r=t.integrations)&&void 0!==r?r:{}).reduce((function(e,t){var r,n,i=t[0],o=t[1];return"object"==typeof o?Oi.__assign(Oi.__assign({},e),((r={})[i]=o,r)):Oi.__assign(Oi.__assign({},e),((n={})[i]={},n))}),{});return Object.entries(e.integrations).reduce((function(e,t){var r,i=t[0],o=t[1];return Oi.__assign(Oi.__assign({},e),((r={})[i]=Oi.__assign(Oi.__assign({},o),n[i]),r))}),{})};var xi,ji={},ki={};Object.defineProperty(ji,"__esModule",{value:!0}),ji.envEnrichment=ji.ampId=ji.utm=void 0;var Ii,Ai=F,Mi=Ai.__importDefault(tr()),Ei=Ke,Ci=Je(),Ti=or(),Di=Zn(),Fi=Pr(),Ni=function(){if(xi)return ki;xi=1,Object.defineProperty(ki,"__esModule",{value:!0}),ki.clientHints=void 0;var e=F;return ki.clientHints=function(t){return e.__awaiter(this,void 0,void 0,(function(){var r;return e.__generator(this,(function(e){return(r=navigator.userAgentData)?t?[2,r.getHighEntropyValues(t).catch((function(){return r.toJSON()}))]:[2,r.toJSON()]:[2,void 0]}))}))},ki}();function Li(){if(Ii)return Ii;var e=(0,Ti.tld)(window.location.href);return Ii={expires:31536e6,secure:!1,path:"/"},e&&(Ii.domain=e),Ii}function Ri(e){return e.startsWith("?")&&(e=e.substring(1)),(e=e.replace(/\?/g,"&")).split("&").reduce((function(e,t){var r=t.split("="),n=r[0],i=r[1],o=void 0===i?"":i;if(n.includes("utm_")&&n.length>4){var a=n.slice(4);"campaign"===a&&(a="name"),e[a]=(0,Di.gracefulDecodeURIComponent)(o)}return e}),{})}function Ui(){var e=Mi.default.get("_ga");if(e&&e.startsWith("amp"))return e}ji.utm=Ri,ji.ampId=Ui;var Bi=function(){var e=this;this.name="Page Enrichment",this.type="before",this.version="0.1.0",this.isLoaded=function(){return!0},this.load=function(t,r){return Ai.__awaiter(e,void 0,void 0,(function(){var e;return Ai.__generator(this,(function(t){switch(t.label){case 0:this.instance=r,t.label=1;case 1:return t.trys.push([1,3,,4]),e=this,[4,(0,Ni.clientHints)(this.instance.options.highEntropyValuesClientHints)];case 2:return e.userAgentData=t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2,Promise.resolve()]}}))}))},this.enrich=function(t){var r,n,i=t.event.context,o=i.page.search||"",a="object"==typeof o?function(e){try{var t=new URLSearchParams;return Object.entries(e).forEach((function(e){var r=e[0],n=e[1];Array.isArray(n)?n.forEach((function(e){return t.append(r,e)})):t.append(r,n)})),t.toString()}catch(e){return""}}(o):o;i.userAgent=navigator.userAgent,i.userAgentData=e.userAgentData;var u=navigator.userLanguage||navigator.language;void 0===i.locale&&void 0!==u&&(i.locale=u),null!==(r=i.library)&&void 0!==r||(i.library={name:"analytics.js",version:"".concat("web"===(0,Ci.getVersionType)()?"next":"npm:next","-").concat(Ei.version)}),a&&!i.campaign&&(i.campaign=Ri(a));var s=Ui();s&&(i.amp={id:s}),function(e,t,r){var n,i=new Fi.UniversalStorage(r?[]:[new Fi.CookieStorage(Li())]),o=i.get("s:context.referrer"),a=null!==(n=function(e){var t={btid:"dataxu",urid:"millennial-media"};e.startsWith("?")&&(e=e.substring(1));for(var r=0,n=(e=e.replace(/\?/g,"&")).split("&");r<n.length;r++){var i=n[r].split("="),o=i[0],a=i[1];if(t[o])return{id:a,type:t[o]}}}(e))&&void 0!==n?n:o;a&&(t&&(t.referrer=Ai.__assign(Ai.__assign({},t.referrer),a)),i.set("s:context.referrer",a))}(a,i,null!==(n=e.instance.options.disableClientPersistence)&&void 0!==n&&n);try{i.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}return t},this.track=this.enrich,this.identify=this.enrich,this.page=this.enrich,this.group=this.enrich,this.alias=this.enrich,this.screen=this.enrich};ji.envEnrichment=new Bi;var zi={},qi={};function Vi(e){return Array.prototype.slice.call(window.document.querySelectorAll("script")).find((function(t){return t.src===e}))}Object.defineProperty(qi,"__esModule",{value:!0}),qi.unloadScript=qi.loadScript=void 0,qi.loadScript=function(e,t){var r=Vi(e);if(void 0!==r){var n=null==r?void 0:r.getAttribute("status");if("loaded"===n)return Promise.resolve(r);if("loading"===n)return new Promise((function(e,t){r.addEventListener("load",(function(){return e(r)})),r.addEventListener("error",(function(e){return t(e)}))}))}return new Promise((function(r,n){var i,o=window.document.createElement("script");o.type="text/javascript",o.src=e,o.async=!0,o.setAttribute("status","loading");for(var a=0,u=Object.entries(null!=t?t:{});a<u.length;a++){var s=u[a],c=s[0],l=s[1];o.setAttribute(c,l)}o.onload=function(){o.onerror=o.onload=null,o.setAttribute("status","loaded"),r(o)},o.onerror=function(){o.onerror=o.onload=null,o.setAttribute("status","error"),n(new Error("Failed to load ".concat(e)))};var f=window.document.getElementsByTagName("script")[0];null===(i=f.parentElement)||void 0===i||i.insertBefore(o,f)}))},qi.unloadScript=function(e){var t=Vi(e);return void 0!==t&&t.remove(),Promise.resolve()};var Gi={};Object.defineProperty(Gi,"__esModule",{value:!0}),Gi.recordIntegrationMetric=void 0,Gi.recordIntegrationMetric=function(e,t){var r=t.methodName,n=t.integrationName,i=t.type,o=t.didError,a=void 0!==o&&o;e.stats.increment("analytics_js.integration.invoke".concat(a?".error":""),1,["method:".concat(r),"integration_name:".concat(n),"type:".concat(i)])},Object.defineProperty(zi,"__esModule",{value:!0}),zi.remoteLoader=zi.ActionDestination=void 0;var Ki=F,Wi=qi,Hi=L,Ji=Br,Qi=qe,Yi=Gi,$i=function(){function e(e,t){this.version="1.0.0",this.alternativeNames=[],this.middleware=[],this.alias=this._createMethod("alias"),this.group=this._createMethod("group"),this.identify=this._createMethod("identify"),this.page=this._createMethod("page"),this.screen=this._createMethod("screen"),this.track=this._createMethod("track"),this.action=t,this.name=e,this.type=t.type,this.alternativeNames.push(t.name)}return e.prototype.addMiddleware=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];"destination"===this.type&&(e=this.middleware).push.apply(e,t)},e.prototype.transform=function(e){return Ki.__awaiter(this,void 0,void 0,(function(){var t;return Ki.__generator(this,(function(r){switch(r.label){case 0:return[4,(0,Ji.applyDestinationMiddleware)(this.name,e.event,this.middleware)];case 1:return null===(t=r.sent())&&e.cancel(new Qi.ContextCancelation({retry:!1,reason:"dropped by destination middleware"})),[2,new Qi.Context(t)]}}))}))},e.prototype._createMethod=function(e){var t=this;return function(r){return Ki.__awaiter(t,void 0,void 0,(function(){var t,n;return Ki.__generator(this,(function(i){switch(i.label){case 0:return this.action[e]?(t=r,"destination"!==this.type?[3,2]:[4,this.transform(r)]):[2,r];case 1:t=i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),(0,Yi.recordIntegrationMetric)(r,{integrationName:this.action.name,methodName:e,type:"action"}),[4,this.action[e](t)];case 3:return i.sent(),[3,5];case 4:throw n=i.sent(),(0,Yi.recordIntegrationMetric)(r,{integrationName:this.action.name,methodName:e,type:"action",didError:!0}),n;case 5:return[2,r]}}))}))}},e.prototype.isLoaded=function(){return this.action.isLoaded()},e.prototype.ready=function(){return this.action.ready?this.action.ready():Promise.resolve()},e.prototype.load=function(e,t){return Ki.__awaiter(this,void 0,void 0,(function(){var r;return Ki.__generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),(0,Yi.recordIntegrationMetric)(e,{integrationName:this.action.name,methodName:"load",type:"action"}),[4,this.action.load(e,t)];case 1:return[2,n.sent()];case 2:throw r=n.sent(),(0,Yi.recordIntegrationMetric)(e,{integrationName:this.action.name,methodName:"load",type:"action",didError:!0}),r;case 3:return[2]}}))}))},e.prototype.unload=function(e,t){var r,n;return null===(n=(r=this.action).unload)||void 0===n?void 0:n.call(r,e,t)},e}();function Zi(e,t){return Ki.__awaiter(this,void 0,void 0,(function(){var r,n,i,o,a;return Ki.__generator(this,(function(u){switch(u.label){case 0:if(r=new RegExp("https://cdn.segment.(com|build)"),n=(0,Hi.getCDN)(),!t)return[3,6];i=e.url.split("/"),o=i[i.length-2],a=e.url.replace(o,btoa(o).replace(/=/g,"")),u.label=1;case 1:return u.trys.push([1,3,,5]),[4,(0,Wi.loadScript)(a.replace(r,n))];case 2:return u.sent(),[3,5];case 3:return u.sent(),[4,(0,Wi.loadScript)(e.url.replace(r,n))];case 4:return u.sent(),[3,5];case 5:return[3,8];case 6:return[4,(0,Wi.loadScript)(e.url.replace(r,n))];case 7:u.sent(),u.label=8;case 8:return"function"==typeof window[e.libraryName]?[2,window[e.libraryName]]:[2]}}))}))}zi.ActionDestination=$i,zi.remoteLoader=function(e,t,r,n,i,o){var a,u,s;return Ki.__awaiter(this,void 0,void 0,(function(){var c,l,f,d=this;return Ki.__generator(this,(function(p){switch(p.label){case 0:return c=[],l=null!==(u=null===(a=e.middlewareSettings)||void 0===a?void 0:a.routingRules)&&void 0!==u?u:[],f=(null!==(s=e.remotePlugins)&&void 0!==s?s:[]).map((function(e){return Ki.__awaiter(d,void 0,void 0,(function(){var a,u,s,f,d,p;return Ki.__generator(this,(function(h){switch(h.label){case 0:if(function(e,t){var r=e[t.creationName],n=e[t.name];return!1===e.All&&!r&&!n||!1===r||!1===n}(t,e))return[2];h.label=1;case 1:return h.trys.push([1,6,,7]),(u=null==o?void 0:o.find((function(t){return t.pluginName===e.name})))?[3,3]:[4,Zi(e,n)];case 2:u=h.sent(),h.label=3;case 3:return(a=u)?[4,a(Ki.__assign(Ki.__assign({},e.settings),r[e.name]))]:[3,5];case 4:s=h.sent(),function(e){if(!Array.isArray(e))throw new Error("Not a valid list of plugins");var t=["load","isLoaded","name","version","type"];e.forEach((function(e){t.forEach((function(t){var r;if(void 0===e[t])throw new Error("Plugin: ".concat(null!==(r=e.name)&&void 0!==r?r:"unknown"," missing required function ").concat(t))}))}))}(f=Array.isArray(s)?s:[s]),d=l.filter((function(t){return t.destinationName===e.creationName})),f.forEach((function(t){var r=new $i(e.creationName,t);d.length&&i&&"destination"===t.type&&r.addMiddleware(i),c.push(r)})),h.label=5;case 5:return[3,7];case 6:return p=h.sent(),console.warn("Failed to load Remote Plugin",p),[3,7];case 7:return[2]}}))}))})),[4,Promise.all(f)];case 1:return p.sent(),[2,c.filter(Boolean)]}}))}))};var Xi,eo,to={},ro={},no={};var io,oo={};var ao,uo={};var so,co,lo={},fo={};function po(){if(so)return fo;so=1,Object.defineProperty(fo,"__esModule",{value:!0}),fo.pWhile=void 0;var e=F;return fo.pWhile=function(t,r){return e.__awaiter(void 0,void 0,void 0,(function(){var n;return e.__generator(this,(function(i){return n=function(i){return e.__awaiter(void 0,void 0,void 0,(function(){var o;return e.__generator(this,(function(e){switch(e.label){case 0:return t(i)?(o=n,[4,r()]):[3,2];case 1:return[2,o.apply(void 0,[e.sent()])];case 2:return[2]}}))}))},[2,n(void 0)]}))}))},fo}Object.defineProperty(to,"__esModule",{value:!0}),to.segmentio=void 0;var ho=F,vo=Le,yo=Ct,go=Et,_o=zr,mo=ho.__importDefault(function(){if(eo)return ro;eo=1,Object.defineProperty(ro,"__esModule",{value:!0});var e=F,t=z,r=(Xi||(Xi=1,Object.defineProperty(no,"__esModule",{value:!0}),no.onPageChange=void 0,no.onPageChange=function(e){var t=!1;window.addEventListener("pagehide",(function(){t||e(t=!0)})),document.addEventListener("visibilitychange",(function(){if("hidden"==document.visibilityState){if(t)return;t=!0}else t=!1;e(t)}))}),no),n=500;function i(e){return(encodeURI(JSON.stringify(e)).split(/%..|./).length-1)/1024}return ro.default=function(o,a){var u,s,c,l=[],f=!1,d=null!==(u=null==a?void 0:a.size)&&void 0!==u?u:10,p=null!==(s=null==a?void 0:a.timeout)&&void 0!==s?s:5e3;function h(r){var n;if(0!==r.length){var i=null===(n=r[0])||void 0===n?void 0:n.writeKey,a=r.map((function(t){var r=t;return r.sentAt,e.__rest(r,["sentAt"])}));return(0,t.fetch)("https://".concat(o,"/b"),{keepalive:f,headers:{"Content-Type":"text/plain"},method:"post",body:JSON.stringify({writeKey:i,batch:a,sentAt:(new Date).toISOString()})})}}function v(){return e.__awaiter(this,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){return l.length?(t=l,l=[],[2,h(t)]):[2]}))}))}return(0,r.onPageChange)((function(e){if((f=e)&&l.length){var t=function(e){var t=[],r=0;return e.forEach((function(e){i(t[r])>=64&&r++,t[r]?t[r].push(e):t[r]=[e]})),t}(l).map(h);Promise.all(t).catch(console.error)}})),{dispatch:function(t,r){return e.__awaiter(this,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){return l.push(r),t=l.length>=d||function(e){return i(e)>=n-50}(l),[2,t||f?v():void(c||(c=setTimeout((function(){c=void 0,v().catch(console.error)}),p)))]}))}))}}},ro}()),bo=ho.__importDefault(function(){if(io)return oo;io=1,Object.defineProperty(oo,"__esModule",{value:!0});var e=z;return oo.default=function(t){return{dispatch:function(r,n){return(0,e.fetch)(r,{keepalive:null==t?void 0:t.keepalive,headers:{"Content-Type":"text/plain"},method:"post",body:JSON.stringify(n)})}}},oo}()),wo=function(){if(ao)return uo;ao=1,Object.defineProperty(uo,"__esModule",{value:!0}),uo.normalize=void 0;var e=F;return uo.normalize=function(t,r,n,i){var o,a=t.user();delete r.options,r.writeKey=null==n?void 0:n.apiKey,r.userId=r.userId||a.id(),r.anonymousId=r.anonymousId||a.anonymousId(),r.sentAt=new Date;var u=t.queue.failedInitializations||[];u.length>0&&(r._metadata={failedInitializations:u});var s=[],c=[];for(var l in i){var f=i[l];"Segment.io"===l&&s.push(l),"bundled"===f.bundlingStatus&&s.push(l),"unbundled"===f.bundlingStatus&&c.push(l)}for(var d=0,p=(null==n?void 0:n.unbundledIntegrations)||[];d<p.length;d++){var h=p[d];c.includes(h)||c.push(h)}var v=null!==(o=null==n?void 0:n.maybeBundledConfigIds)&&void 0!==o?o:{},y=[];return s.sort().forEach((function(e){var t;(null!==(t=v[e])&&void 0!==t?t:[]).forEach((function(e){y.push(e)}))})),!1!==(null==n?void 0:n.addBundledMetadata)&&(r._metadata=e.__assign(e.__assign({},r._metadata),{bundled:s.sort(),unbundled:c.sort(),bundledIds:y})),r},uo}(),Po=function(){if(co)return lo;co=1,Object.defineProperty(lo,"__esModule",{value:!0}),lo.scheduleFlush=void 0;var e=F,t=Le,r=qe,n=De,i=po();function o(o,a){return e.__awaiter(this,void 0,void 0,(function(){var u,s=this;return e.__generator(this,(function(c){switch(c.label){case 0:return u=[],(0,t.isOffline)()?[2,a]:[4,(0,i.pWhile)((function(){return a.length>0&&!(0,t.isOffline)()}),(function(){return e.__awaiter(s,void 0,void 0,(function(){var t,i;return e.__generator(this,(function(e){switch(e.label){case 0:return(t=a.pop())?[4,(0,n.attempt)(t,o)]:[2];case 1:return i=e.sent(),i instanceof r.Context||u.push(t),[2]}}))}))}))];case 1:return c.sent(),u.map((function(e){return a.pushWithBackoff(e)})),[2,a]}}))}))}return lo.scheduleFlush=function(t,r,n,i){var a=this;t||setTimeout((function(){return e.__awaiter(a,void 0,void 0,(function(){var t,a;return e.__generator(this,(function(e){switch(e.label){case 0:return t=!0,[4,o(n,r)];case 1:return a=e.sent(),t=!1,r.todo>0&&i(t,a,n,i),[2]}}))}))}),5e3*Math.random())},lo}(),So=$e();to.segmentio=function(e,t,r){var n,i,o;window.addEventListener("pagehide",(function(){u.push.apply(u,Array.from(s)),s.clear()}));var a=null!==(n=null==t?void 0:t.apiKey)&&void 0!==n?n:"",u=e.options.disableClientPersistence?new yo.PriorityQueue(e.queue.queue.maxAttempts,[]):new go.PersistedPriorityQueue(e.queue.queue.maxAttempts,"".concat(a,":dest-Segment.io")),s=new Set,c=!1,l=null!==(i=null==t?void 0:t.apiHost)&&void 0!==i?i:So.SEGMENT_API_HOST,f=null!==(o=null==t?void 0:t.protocol)&&void 0!==o?o:"https",d="".concat(f,"://").concat(l),p=null==t?void 0:t.deliveryStrategy,h="batching"===(null==p?void 0:p.strategy)?(0,mo.default)(l,p.config):(0,bo.default)(null==p?void 0:p.config);function v(n){return ho.__awaiter(this,void 0,void 0,(function(){var i,o;return ho.__generator(this,(function(a){return(0,vo.isOffline)()?(u.push(n),(0,Po.scheduleFlush)(c,u,y,Po.scheduleFlush),[2,n]):(s.add(n),i=n.event.type.charAt(0),o=(0,_o.toFacade)(n.event).json(),"track"===n.event.type&&delete o.traits,"alias"===n.event.type&&(o=function(e,t){var r,n,i,o,a=e.user();return t.previousId=null!==(i=null!==(n=null!==(r=t.previousId)&&void 0!==r?r:t.from)&&void 0!==n?n:a.id())&&void 0!==i?i:a.anonymousId(),t.userId=null!==(o=t.userId)&&void 0!==o?o:t.to,delete t.from,delete t.to,t}(e,o)),[2,h.dispatch("".concat(d,"/").concat(i),(0,wo.normalize)(e,o,t,r)).then((function(){return n})).catch((function(){return u.pushWithBackoff(n),(0,Po.scheduleFlush)(c,u,y,Po.scheduleFlush),n})).finally((function(){s.delete(n)}))])}))}))}var y={name:"Segment.io",type:"after",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},track:v,identify:v,page:v,alias:v,group:v,screen:v};return u.todo&&(0,Po.scheduleFlush)(c,u,y,Po.scheduleFlush),y};var Oo={};Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.validation=void 0;var xo=De;function jo(e){var t,r=e.event;(0,xo.assertEventExists)(r),(0,xo.assertEventType)(r),"track"===r.type&&(0,xo.assertTrackEventName)(r);var n=null!==(t=r.properties)&&void 0!==t?t:r.traits;if("alias"!==r.type&&!(0,xo.isPlainObject)(n))throw new xo.ValidationError(".properties","is not an object");return(0,xo.assertUserIdentity)(r),e}Oo.validation={name:"Event Validation",type:"before",version:"1.0.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},track:jo,identify:jo,page:jo,alias:jo,group:jo,screen:jo};var ko,Io,Ao={};Object.defineProperty(Ao,"__esModule",{value:!0}),Ao.attachInspector=void 0;var Mo=null!==(ko=(Io=(0,W().getGlobal)()).__SEGMENT_INSPECTOR__)&&void 0!==ko?ko:Io.__SEGMENT_INSPECTOR__={};Ao.attachInspector=function(e){var t;return null===(t=Mo.attach)||void 0===t?void 0:t.call(Mo,e)};for(var Eo={},Co={},To={},Do=[],Fo=0;Fo<64;)Do[Fo]=0|4294967296*Math.sin(++Fo%Math.PI);var No=t(Object.freeze({__proto__:null,default:function(e){var t,r,n,i=[t=1732584193,r=4023233417,~t,~r],o=[],a=unescape(encodeURI(e))+"",u=a.length;for(e=--u/4+2|15,o[--e]=8*u;~u;)o[u>>2]|=a.charCodeAt(u)<<8*u--;for(Fo=a=0;Fo<e;Fo+=16){for(u=i;a<64;u=[n=u[3],t+((n=u[0]+[t&r|~t&n,n&t|~n&r,t^r^n,r^(t|~n)][u=a>>4]+Do[a]+~~o[Fo|15&[a,5*a+1,3*a+5,7*a][u]])<<(u=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*u+a++%4])|n>>>-u),t,r])t=0|u[1],r=u[2];for(a=4;a;)i[--a]+=u[a]}for(e="";a<32;)e+=(i[a>>3]>>4*(1^a++)&15).toString(16);return e}}));var Lo,Ro,Uo,Bo,zo,qo,Vo,Go,Ko,Wo,Ho,Jo,Qo,Yo,$o,Zo,Xo,ea,ta,ra,na,ia,oa,aa,ua,sa,ca,la,fa,da,pa,ha,va,ya,ga,_a,ma,ba,wa,Pa,Sa,Oa,xa,ja,ka,Ia,Aa,Ma,Ea,Ca,Ta,Da,Fa,Na,La,Ra,Ua,Ba,za,qa,Va,Ga,Ka,Wa,Ha,Ja,Qa,Ya,$a,Za,Xa,eu,tu,ru,nu,iu,ou,au,uu,su,cu,lu,fu,du,pu,hu,vu,yu,gu,_u,mu,bu,wu,Pu,Su,Ou,xu,ju,ku,Iu,Au,Mu,Eu,Cu,Tu,Du,Fu,Nu,Lu,Ru,Uu,Bu,zu,qu,Vu,Gu,Ku,Wu,Hu,Ju,Qu,Yu,$u,Zu,Xu,es,ts,rs,ns,is,os,as,us,ss,cs,ls,fs,ds,ps,hs,vs,ys,gs,_s,ms,bs,ws,Ps,Ss,Os,xs,js,ks,Is,As,Ms,Es,Cs,Ts,Ds,Fs,Ns,Ls,Rs,Us,Bs,zs,qs,Vs,Gs,Ks,Ws,Hs,Js,Qs,Ys,$s,Zs,Xs,ec,tc,rc,nc,ic,oc,ac,uc=Object.freeze({__proto__:null,default:function(e,t,r,n,i){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)e=e?e[t[n]]:i;return e===i?r:e}}),sc=t(uc);function cc(){if(Ro)return Lo;Ro=1;var e=Number.POSITIVE_INFINITY;return Lo=e}
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
*/function lc(){return Bo?Uo:(Bo=1,Uo=Number)}
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
*/function fc(){if(Go)return Vo;Go=1;var e=function(){if(qo)return zo;qo=1;var e=lc();return zo=e}
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
*/().NEGATIVE_INFINITY;return Vo=e}
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
*/function dc(){if(Wo)return Ko;Wo=1;return Ko=1023}
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
*/function pc(){if(ra)return ta;ra=1;var e=ea?Xo:(ea=1,Xo=function(e){return e!=e});return ta=e}
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
*/function hc(){if(aa)return oa;aa=1;var e=function(){if(ia)return na;ia=1;var e=cc(),t=fc();return na=function(r){return r===e||r===t}}
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
*/();return oa=e}
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
*/function vc(){if(ha)return pa;ha=1;var e=function(){if(da)return fa;da=1;var e="function"==typeof Object.defineProperty?Object.defineProperty:null;return fa=e}
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
*/();return pa=function(){try{return e({},"x",{}),!0}catch(e){return!1}}}
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
*/function yc(){if(ya)return va;ya=1;var e=Object.defineProperty;return va=e}
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
*/function gc(){if(ba)return ma;ba=1;var e,t=vc(),r=yc(),n=function(){if(_a)return ga;_a=1;var e=Object.prototype,t=e.toString,r=e.__defineGetter__,n=e.__defineSetter__,i=e.__lookupGetter__,o=e.__lookupSetter__;return ga=function(a,u,s){var c,l,f,d;if("object"!=typeof a||null===a||"[object Array]"===t.call(a))throw new TypeError("invalid argument. First argument must be an object. Value: `"+a+"`.");if("object"!=typeof s||null===s||"[object Array]"===t.call(s))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+s+"`.");if((l="value"in s)&&(i.call(a,u)||o.call(a,u)?(c=a.__proto__,a.__proto__=e,delete a[u],a[u]=s.value,a.__proto__=c):a[u]=s.value),f="get"in s,d="set"in s,l&&(f||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&r&&r.call(a,u,s.get),d&&n&&n.call(a,u,s.set),a}}
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
*/();return e=t()?r:n,ma=e}
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
*/function _c(){if(Oa)return Sa;Oa=1;var e=function(){if(Pa)return wa;Pa=1;var e=gc();return wa=function(t,r,n){e(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}}
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
*/();return Sa=e}
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
*/function mc(){if(Ia)return ka;Ia=1;var e=ja?xa:(ja=1,xa=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")});return ka=e}
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
*/function bc(){if(Ca)return Ea;Ca=1;var e=function(){if(Ma)return Aa;Ma=1;var e=mc()();return Aa=function(){return e&&"symbol"==typeof Symbol.toStringTag}}
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
*/();return Ea=e}
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
*/function wc(){if(Da)return Ta;Da=1;var e=Object.prototype.toString;return Ta=e}
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
*/function Pc(){if(Ba)return Ua;Ba=1;var e=function(){if(Ra)return La;Ra=1;var e=Object.prototype.hasOwnProperty;return La=function(t,r){return null!=t&&e.call(t,r)}}
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
*/();return Ua=e}
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
*/function Sc(){if(Ga)return Va;Ga=1;var e=Pc(),t=function(){if(qa)return za;qa=1;var e="function"==typeof Symbol?Symbol.toStringTag:"";return za=e}
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
*/(),r=wc();return Va=function(n){var i,o,a;if(null==n)return r.call(n);o=n[t],i=e(n,t);try{n[t]=void 0}catch(e){return r.call(n)}return a=r.call(n),i?n[t]=o:delete n[t],a}}
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
*/function Oc(){if(Wa)return Ka;Wa=1;var e,t=bc(),r=function(){if(Na)return Fa;Na=1;var e=wc();return Fa=function(t){return e.call(t)}}
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
*/(),n=Sc();return e=t()?n:r,Ka=e}
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
*/function xc(){if(Ya)return Qa;Ya=1;var e=function(){if(Ja)return Ha;Ja=1;var e=Oc(),t="function"==typeof Uint32Array;return Ha=function(r){return t&&r instanceof Uint32Array||"[object Uint32Array]"===e(r)}}
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
*/();return Qa=e}
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
*/function jc(){if(ru)return tu;ru=1;var e=xc(),t=Za?$a:(Za=1,$a=4294967295),r=function(){if(eu)return Xa;eu=1;var e="function"==typeof Uint32Array?Uint32Array:null;return Xa=e}
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
*/();return tu=function(){var n,i;if("function"!=typeof r)return!1;try{i=new r(i=[1,3.14,-3.14,t+1,t+2]),n=e(i)&&1===i[0]&&3===i[1]&&i[2]===t-2&&0===i[3]&&1===i[4]}catch(e){n=!1}return n}}
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
*/function kc(){if(lu)return cu;lu=1;var e,t=function(){if(iu)return nu;iu=1;var e=jc();return nu=e}
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
*/(),r=function(){if(au)return ou;au=1;var e="function"==typeof Uint32Array?Uint32Array:void 0;return ou=e}
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
*/(),n=su?uu:(su=1,uu=function(){throw new Error("not implemented")});return e=t()?r:n,cu=e}
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
*/function Ic(){if(hu)return pu;hu=1;var e=function(){if(du)return fu;du=1;var e=Oc(),t="function"==typeof Float64Array;return fu=function(r){return t&&r instanceof Float64Array||"[object Float64Array]"===e(r)}}
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
*/();return pu=e}
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
*/function Ac(){if(_u)return gu;_u=1;var e=Ic(),t=function(){if(yu)return vu;yu=1;var e="function"==typeof Float64Array?Float64Array:null;return vu=e}
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
*/();return gu=function(){var r,n;if("function"!=typeof t)return!1;try{n=new t([1,3.14,-3.14,NaN]),r=e(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(e){r=!1}return r}}
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
*/function Mc(){if(ju)return xu;ju=1;var e,t=function(){if(bu)return mu;bu=1;var e=Ac();return mu=e}
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
*/(),r=function(){if(Pu)return wu;Pu=1;var e="function"==typeof Float64Array?Float64Array:void 0;return wu=e}
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
*/(),n=Ou?Su:(Ou=1,Su=function(){throw new Error("not implemented")});return e=t()?r:n,xu=e}
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
*/function Ec(){if(Mu)return Au;Mu=1;var e=function(){if(Iu)return ku;Iu=1;var e=Oc(),t="function"==typeof Uint8Array;return ku=function(r){return t&&r instanceof Uint8Array||"[object Uint8Array]"===e(r)}}
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
*/();return Au=e}
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
*/function Cc(){if(Nu)return Fu;Nu=1;var e=Ec(),t=Cu?Eu:(Cu=1,Eu=255),r=function(){if(Du)return Tu;Du=1;var e="function"==typeof Uint8Array?Uint8Array:null;return Tu=e}
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
*/();return Fu=function(){var n,i;if("function"!=typeof r)return!1;try{i=new r(i=[1,3.14,-3.14,t+1,t+2]),n=e(i)&&1===i[0]&&3===i[1]&&i[2]===t-2&&0===i[3]&&1===i[4]}catch(e){n=!1}return n}}
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
*/function Tc(){if(Gu)return Vu;Gu=1;var e,t=function(){if(Ru)return Lu;Ru=1;var e=Cc();return Lu=e}
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
*/(),r=function(){if(Bu)return Uu;Bu=1;var e="function"==typeof Uint8Array?Uint8Array:void 0;return Uu=e}
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
*/(),n=qu?zu:(qu=1,zu=function(){throw new Error("not implemented")});return e=t()?r:n,Vu=e}
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
*/function Dc(){if(Ju)return Hu;Ju=1;var e=function(){if(Wu)return Ku;Wu=1;var e=Oc(),t="function"==typeof Uint16Array;return Ku=function(r){return t&&r instanceof Uint16Array||"[object Uint16Array]"===e(r)}}
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
*/();return Hu=e}
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
*/function Fc(){if(es)return Xu;es=1;var e=Dc(),t=Yu?Qu:(Yu=1,Qu=65535),r=function(){if(Zu)return $u;Zu=1;var e="function"==typeof Uint16Array?Uint16Array:null;return $u=e}
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
*/();return Xu=function(){var n,i;if("function"!=typeof r)return!1;try{i=new r(i=[1,3.14,-3.14,t+1,t+2]),n=e(i)&&1===i[0]&&3===i[1]&&i[2]===t-2&&0===i[3]&&1===i[4]}catch(e){n=!1}return n}}
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
*/function Nc(){if(ss)return us;ss=1;var e,t=function(){if(rs)return ts;rs=1;var e=Fc();return ts=e}
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
*/(),r=function(){if(is)return ns;is=1;var e="function"==typeof Uint16Array?Uint16Array:void 0;return ns=e}
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
*/(),n=as?os:(as=1,os=function(){throw new Error("not implemented")});return e=t()?r:n,us=e}
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
*/function Lc(){if(ds)return fs;ds=1;var e,t,r=function(){if(ls)return cs;ls=1;var e=Tc(),t=Nc();return cs={uint16:t,uint8:e}}
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
*/();return(t=new r.uint16(1))[0]=4660,e=52===new r.uint8(t.buffer)[0],fs=e}
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
*/function Rc(){if(hs)return ps;hs=1;var e=Lc();return ps=e}
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
*/function Uc(){if(_s)return gs;_s=1;var e=kc(),t=Mc(),r=function(){return ys?vs:(ys=1,!0===Rc()?(e=1,t=0):(e=0,t=1),vs={HIGH:e,LOW:t});var e,t}
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
*/(),n=new t(1),i=new e(n.buffer),o=r.HIGH,a=r.LOW;return gs=function(e,t,r,u){return n[0]=e,t[u]=i[o],t[u+r]=i[a],t}}
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
*/function Bc(){if(Ps)return ws;Ps=1;var e=_c(),t=function(){if(bs)return ms;bs=1;var e=Uc();return ms=function(t){return e(t,[0,0],1,0)}}
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
*/();return e(t,"assign",Uc()),ws=t}
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
*/function zc(){if(js)return xs;js=1;var e=kc(),t=Mc(),r=function(){if(Os)return Ss;Os=1;var e=Rc();return Ss=!0===e?1:0}
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
*/(),n=new t(1),i=new e(n.buffer);return xs=function(e){return n[0]=e,i[r]}}
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
*/function qc(){if(Is)return ks;Is=1;var e=zc();return ks=e}
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
*/function Vc(){if(Cs)return Es;Cs=1;var e=kc(),t=Mc(),r=function(){return Ms?As:(Ms=1,!0===Rc()?(e=1,t=0):(e=0,t=1),As={HIGH:e,LOW:t});var e,t}
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
*/(),n=new t(1),i=new e(n.buffer),o=r.HIGH,a=r.LOW;return Es=function(e,t){return i[o]=e,i[a]=t,n[0]},Es}
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
*/function Gc(){if(Ds)return Ts;Ds=1;var e=Vc();return Ts=e}
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
*/function Kc(){if(Ns)return Fs;Ns=1;var e=sa?ua:(sa=1,ua=2147483648),t=la?ca:(la=1,ca=2147483647),r=Bc(),n=qc(),i=Gc(),o=[0,0];return Fs=function(a,u){var s,c;return r.assign(a,o,1,0),s=o[0],s&=t,c=n(u),i(s|=c&=e,o[1])}}
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
*/function Wc(){if(Gs)return Vs;Gs=1;var e=qs?zs:(qs=1,zs=function(e){return Math.abs(e)});return Vs=e}
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
*/function Hc(){if(Ws)return Ks;Ws=1;var e=Bs?Us:(Bs=1,Us=22250738585072014e-324),t=hc(),r=pc(),n=Wc();return Ks=function(i,o,a,u){return r(i)||t(i)?(o[u]=i,o[u+a]=0,o):0!==i&&n(i)<e?(o[u]=4503599627370496*i,o[u+a]=-52,o):(o[u]=i,o[u+a]=0,o)}}
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
*/function Jc(){if(Ys)return Qs;Ys=1;var e=_c(),t=function(){if(Js)return Hs;Js=1;var e=Hc();return Hs=function(t){return e(t,[0,0],1,0)}}
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
*/();return e(t,"assign",Hc()),Qs=t}
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
*/function Qc(){if(ec)return Xs;ec=1;var e=qc(),t=Zs?$s:(Zs=1,$s=2146435072),r=dc();return Xs=function(n){var i=e(n);return(i=(i&t)>>>20)-r|0},Xs}
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
*/function Yc(){if(ic)return nc;ic=1;var e=cc(),t=fc(),r=dc(),n=Jo?Ho:(Jo=1,Ho=1023),i=Yo?Qo:(Yo=1,Qo=-1023),o=Zo?$o:(Zo=1,$o=-1074),a=pc(),u=hc(),s=function(){if(Rs)return Ls;Rs=1;var e=Kc();return Ls=e}
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
*/(),c=Jc(),l=function(){if(rc)return tc;rc=1;var e=Qc();return tc=e}
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
*/(),f=Bc(),d=Gc(),p=[0,0],h=[0,0];return nc=function(v,y){var g,_;return 0===v||a(v)||u(v)?v:(c(p,v),y+=p[1],(y+=l(v=p[0]))<o?s(0,v):y>n?v<0?t:e:(y<=i?(y+=52,_=2220446049250313e-31):_=1,f(h,v),g=h[0],g&=2148532223,_*d(g|=y+r<<20,h[1])))},nc}
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
*/var $c,Zc,Xc={};function el(){if(Zc)return To;Zc=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(To,"__esModule",{value:!0});var r=t(No),n=t(sc),i=t(function(){if(ac)return oc;ac=1;var e=Yc();return oc=e}()),o=vt,a=function(){if($c)return Xc;$c=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xc,"__esModule",{value:!0}),Xc.unset=void 0;var r=t(sc);return Xc.unset=function(e,t){if((0,r.default)(e,t)){for(var n=t.split("."),i=n.pop();n.length&&"\\"===n[n.length-1].slice(-1);)i=n.pop().slice(0,-1)+"."+i;for(;n.length;)e=e[t=n.shift()];return delete e[i]}return!0},Xc}();function u(e,t){c(e,t.drop,(function(e,t){t.forEach((function(t){return delete e[t]}))}))}function s(e,t){c(e,t.allow,(function(e,t){Object.keys(e).forEach((function(r){t.includes(r)||delete e[r]}))}))}function c(e,t,r){Object.entries(t).forEach((function(t){var i=t[0],o=t[1],a=function(e){"object"==typeof e&&null!==e&&r(e,o)},u=""===i?e:(0,n.default)(e,i);Array.isArray(u)?u.forEach(a):a(u)}))}function l(e,t){var r=JSON.parse(JSON.stringify(e));for(var i in t.map)if(t.map.hasOwnProperty(i)){var u=t.map[i],s=i.split("."),c=void 0;if(s.length>1?(s.pop(),c=(0,n.default)(r,s.join("."))):c=e,"object"==typeof c){if(u.copy){var l=(0,n.default)(r,u.copy);void 0!==l&&(0,o.dset)(e,i,l)}else if(u.move){var f=(0,n.default)(r,u.move);void 0!==f&&(0,o.dset)(e,i,f),(0,a.unset)(e,u.move)}else u.hasOwnProperty("set")&&(0,o.dset)(e,i,u.set);if(u.to_string){var d=(0,n.default)(e,i);if("string"==typeof d||"object"==typeof d&&null!==d)continue;void 0!==d?(0,o.dset)(e,i,JSON.stringify(d)):(0,o.dset)(e,i,"undefined")}}}}function f(e,t){return!(t.sample.percent<=0)&&(t.sample.percent>=1||(t.sample.path?function(e,t){var o=(0,n.default)(e,t.sample.path),a=(0,r.default)(JSON.stringify(o)),u=-64,s=[];d(a.slice(0,8),s);for(var c=0,l=0;l<64&&1!==s[l];l++)c++;if(0!==c){var f=[];d(a.slice(9,16),f),u-=c,s.splice(0,c),f.splice(64-c),s=s.concat(f)}return s[63]=0===s[63]?1:0,(0,i.default)(parseInt(s.join(""),2),u)<t.sample.percent}(e,t):(o=t.sample.percent,Math.random()<=o)));var o}function d(e,t){for(var r=0;r<8;r++)for(var n=e[r],i=128;i>=1;i/=2)n-i>=0?(n-=i,t.push(1)):t.push(0)}return To.default=function(e,t){for(var r=e,n=0,i=t;n<i.length;n++){var o=i[n];switch(o.type){case"drop":return null;case"drop_properties":u(r,o.config);break;case"allow_properties":s(r,o.config);break;case"sample_event":if(f(r,o.config))break;return null;case"map_properties":l(r,o.config);break;case"hash_properties":break;default:throw new Error('Transformer of type "'.concat(o.type,'" is unsupported.'))}}return r},To}var tl,rl={};function nl(){if(tl)return rl;tl=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rl,"__esModule",{value:!0});var r=t(sc);function n(e,t){if(!Array.isArray(e))return!0===i(e,t);var r=e[0];switch(r){case"!":return!n(e[1],t);case"or":for(var s=1;s<e.length;s++)if(n(e[s],t))return!0;return!1;case"and":for(s=1;s<e.length;s++)if(!n(e[s],t))return!1;return!0;case"=":case"!=":return function(e,t,r,i){o(e)&&(e=n(e,i));o(t)&&(t=n(t,i));"object"==typeof e&&"object"==typeof t&&(e=JSON.stringify(e),t=JSON.stringify(t));switch(r){case"=":return e===t;case"!=":return e!==t;default:throw new Error("Invalid operator in compareItems: ".concat(r))}}(i(e[1],t),i(e[2],t),r,t);case"<=":case"<":case">":case">=":return function(e,t,r,i){o(e)&&(e=n(e,i));o(t)&&(t=n(t,i));if("number"!=typeof e||"number"!=typeof t)return!1;switch(r){case"<=":return e<=t;case">=":return e>=t;case"<":return e<t;case">":return e>t;default:throw new Error("Invalid operator in compareNumbers: ".concat(r))}}(i(e[1],t),i(e[2],t),r,t);case"in":return function(e,t,r){return void 0!==t.find((function(t){return i(t,r)===e}))}(i(e[1],t),i(e[2],t),t);case"contains":return function(e,t){if("string"!=typeof e||"string"!=typeof t)return!1;return-1!==e.indexOf(t)}(i(e[1],t),i(e[2],t));case"match":return function(e,t){if("string"!=typeof e||"string"!=typeof t)return!1;return function(e,t){var r,n;e:for(;e.length>0;){var i=void 0,o=void 0;if(i=(r=a(e)).star,o=r.chunk,e=r.pattern,i&&""===o)return!0;var s=u(o,t),c=s.t,l=s.ok,f=s.err;if(f)return!1;if(!l||!(0===c.length||e.length>0)){if(i)for(var d=0;d<t.length;d++){if(c=(n=u(o,t.slice(d+1))).t,l=n.ok,f=n.err,l){if(0===e.length&&c.length>0)continue;t=c;continue e}if(f)return!1}return!1}t=c}return 0===t.length}(t,e)}(i(e[1],t),i(e[2],t));case"lowercase":var c=i(e[1],t);return"string"!=typeof c?null:c.toLowerCase();case"typeof":return typeof i(e[1],t);case"length":return function(e){if(null===e)return 0;if(!Array.isArray(e)&&"string"!=typeof e)return NaN;return e.length}(i(e[1],t));default:throw new Error("FQL IR could not evaluate for token: ".concat(r))}}function i(e,t){return Array.isArray(e)?e:"object"==typeof e?e.value:(0,r.default)(t,e)}function o(e){return!!Array.isArray(e)&&(("lowercase"===e[0]||"length"===e[0]||"typeof"===e[0])&&2===e.length||("contains"===e[0]||"match"===e[0])&&3===e.length)}function a(e){for(var t={star:!1,chunk:"",pattern:""};e.length>0&&"*"===e[0];)e=e.slice(1),t.star=!0;var r,n=!1;e:for(r=0;r<e.length;r++)switch(e[r]){case"\\":r+1<e.length&&r++;break;case"[":n=!0;break;case"]":n=!1;break;case"*":if(!n)break e}return t.chunk=e.slice(0,r),t.pattern=e.slice(r),t}function u(e,t){for(var r,n,i={t:"",ok:!1,err:!1};e.length>0;){if(0===t.length)return i;switch(e[0]){case"[":var o=t[0];t=t.slice(1);var a=!0;(e=e.slice(1)).length>0&&"^"===e[0]&&(a=!1,e=e.slice(1));for(var u=!1,c=0;;){if(e.length>0&&"]"===e[0]&&c>0){e=e.slice(1);break}var l,f="";if(l=(r=s(e)).char,e=r.newChunk,r.err)return i;if(f=l,"-"===e[0]&&(f=(n=s(e.slice(1))).char,e=n.newChunk,n.err))return i;l<=o&&o<=f&&(u=!0),c++}if(u!==a)return i;break;case"?":t=t.slice(1),e=e.slice(1);break;case"\\":if(0===(e=e.slice(1)).length)return i.err=!0,i;default:if(e[0]!==t[0])return i;t=t.slice(1),e=e.slice(1)}}return i.t=t,i.ok=!0,i.err=!1,i}function s(e){var t={char:"",newChunk:"",err:!1};return 0===e.length||"-"===e[0]||"]"===e[0]||"\\"===e[0]&&0===(e=e.slice(1)).length?(t.err=!0,t):(t.char=e[0],t.newChunk=e.slice(1),0===t.newChunk.length&&(t.err=!0),t)}return rl.default=function(e,t){if(!t)throw new Error("No matcher supplied!");switch(t.type){case"all":return!0;case"fql":return function(e,t){if(!e)return!1;try{e=JSON.parse(e)}catch(t){throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(e,'": ').concat(t))}var r=n(e,t);if("boolean"!=typeof r)return!1;return r}(t.ir,e);default:throw new Error("Matcher of type ".concat(t.type," unsupported."))}},rl}var il,ol,al,ul={};function sl(){return ol||(ol=1,function(t){var r=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Store=t.matches=t.transform=void 0;var n=el();Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return r(n).default}});var i=nl();Object.defineProperty(t,"matches",{enumerable:!0,get:function(){return r(i).default}});var o=function(){if(il)return ul;il=1,Object.defineProperty(ul,"__esModule",{value:!0});var e=function(){function e(e){this.rules=[],this.rules=e||[]}return e.prototype.getRulesByDestinationName=function(e){for(var t=[],r=0,n=this.rules;r<n.length;r++){var i=n[r];i.destinationName!==e&&void 0!==i.destinationName||t.push(i)}return t},e}();return ul.default=e,ul}();Object.defineProperty(t,"Store",{enumerable:!0,get:function(){return r(o).default}})}(Co)),Co}var cl,ll={},fl={};function dl(){if(cl)return fl;return cl=1,Object.defineProperty(fl,"__esModule",{value:!0}),fl.isPlanEventEnabled=void 0,fl.isPlanEventEnabled=function(e,t){var r,n;return"boolean"==typeof(null==t?void 0:t.enabled)?t.enabled:null===(n=null===(r=null==e?void 0:e.__default)||void 0===r?void 0:r.enabled)||void 0===n||n},fl}var pl,hl={};function vl(){if(pl)return hl;pl=1,Object.defineProperty(hl,"__esModule",{value:!0}),hl.resolveVersion=hl.unloadIntegration=hl.loadIntegration=hl.buildIntegration=hl.resolveIntegrationNameFromSource=void 0;var e=F,t=L,r=qi;function n(e){return e.toLowerCase().replace(".","").replace(/\s+/g,"-")}function i(e,t){return void 0===t&&(t=!1),t?btoa(e).replace(/=/g,""):void 0}return hl.resolveIntegrationNameFromSource=function(e){return("Integration"in e?e.Integration:e).prototype.name},hl.buildIntegration=function(e,t,r){var n;"Integration"in e?(e({user:function(){return r.user()},addIntegration:function(){}}),n=e.Integration):n=e;var i=new n(t);return i.analytics=r,i},hl.loadIntegration=function(o,a,u,s){return e.__awaiter(this,void 0,void 0,(function(){var c,l,f,d,p,h;return e.__generator(this,(function(v){switch(v.label){case 0:c=n(a),l=i(c,s),f=(0,t.getNextIntegrationsURL)(),d="".concat(f,"/integrations/").concat(null!=l?l:c,"/").concat(u,"/").concat(null!=l?l:c,".dynamic.js.gz"),v.label=1;case 1:return v.trys.push([1,3,,4]),[4,(0,r.loadScript)(d)];case 2:return v.sent(),function(t,r,n){var i,o;try{var a=(null!==(o=null===(i=null===window||void 0===window?void 0:window.performance)||void 0===i?void 0:i.getEntriesByName(t,"resource"))&&void 0!==o?o:[])[0];a&&r.stats.gauge("legacy_destination_time",Math.round(a.duration),e.__spreadArray([n],a.duration<100?["cached"]:[],!0))}catch(e){}}(d,o,a),[3,4];case 3:throw p=v.sent(),o.stats.gauge("legacy_destination_time",-1,["plugin:".concat(a),"failed"]),p;case 4:return h=window["".concat(c,"Deps")],[4,Promise.all(h.map((function(e){return(0,r.loadScript)(f+e+".gz")})))];case 5:return v.sent(),window["".concat(c,"Loader")](),[2,window["".concat(c,"Integration")]]}}))}))},hl.unloadIntegration=function(o,a,u){return e.__awaiter(this,void 0,void 0,(function(){var s,c,l,f;return e.__generator(this,(function(e){return s=(0,t.getNextIntegrationsURL)(),c=n(o),l=i(o,u),f="".concat(s,"/integrations/").concat(null!=l?l:c,"/").concat(a,"/").concat(null!=l?l:c,".dynamic.js.gz"),[2,(0,r.unloadScript)(f)]}))}))},hl.resolveVersion=function(e){var t,r,n,i;return null!==(i=null!==(r=null===(t=null==e?void 0:e.versionSettings)||void 0===t?void 0:t.override)&&void 0!==r?r:null===(n=null==e?void 0:e.versionSettings)||void 0===n?void 0:n.version)&&void 0!==i?i:"latest"},hl}var yl,gl,_l={};function ml(){if(gl)return ll;gl=1,Object.defineProperty(ll,"__esModule",{value:!0}),ll.ajsDestinations=ll.LegacyDestination=void 0;var e=F,t=zn(),r=Le,n=qe,i=Ue(),o=De,a=dl(),u=Si,s=po(),c=Ct,l=Et,f=Br,d=vl(),p=De,h=(yl||(yl=1,Object.defineProperty(_l,"__esModule",{value:!0}),_l.isDisabledIntegration=_l.isInstallableIntegration=void 0,_l.isInstallableIntegration=function(e,t){var r,n=t.type,i=t.bundlingStatus,o=t.versionSettings,a="unbundled"!==i&&("browser"===n||(null===(r=null==o?void 0:o.componentTypes)||void 0===r?void 0:r.includes("browser")));return!e.startsWith("Segment")&&"Iterable"!==e&&a},_l.isDisabledIntegration=function(e,t){var r=!1===t.All&&void 0===t[e];return!1===t[e]||r}),_l),v=Gi;function y(t,i){return e.__awaiter(this,void 0,void 0,(function(){var a,u=this;return e.__generator(this,(function(c){switch(c.label){case 0:return a=[],(0,r.isOffline)()?[2,i]:[4,(0,s.pWhile)((function(){return i.length>0&&(0,r.isOnline)()}),(function(){return e.__awaiter(u,void 0,void 0,(function(){var r,u;return e.__generator(this,(function(e){switch(e.label){case 0:return(r=i.pop())?[4,(0,o.attempt)(r,t)]:[2];case 1:return u=e.sent(),u instanceof n.Context||a.push(r),[2]}}))}))}))];case 1:return c.sent(),a.map((function(e){return i.pushWithBackoff(e)})),[2,i]}}))}))}var g=function(){function i(t,r,n,i,o,a){void 0===i&&(i={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=r,this.settings=e.__assign({},i),this.disableAutoISOConversion=o.disableAutoISOConversion||!1,this.integrationSource=a,this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=o,this.buffer=o.disableClientPersistence?new c.PriorityQueue(4,[]):new l.PersistedPriorityQueue(4,"".concat(n,":dest-").concat(t)),this.scheduleFlush()}return i.prototype.isLoaded=function(){return this._ready},i.prototype.ready=function(){var e;return null!==(e=this.onReady)&&void 0!==e?e:Promise.resolve()},i.prototype.load=function(t,r){var n;return e.__awaiter(this,void 0,void 0,(function(){var i,o,a=this;return e.__generator(this,(function(e){switch(e.label){case 0:return this._ready||void 0!==this.onReady?[2]:null===(n=this.integrationSource)||void 0===n?[3,1]:(o=n,[3,3]);case 1:return[4,(0,d.loadIntegration)(t,this.name,this.version,this.options.obfuscate)];case 2:o=e.sent(),e.label=3;case 3:i=o,this.integration=(0,d.buildIntegration)(i,this.settings,r),this.onReady=new Promise((function(e){a.integration.once("ready",(function(){a._ready=!0,e(!0)}))})),this.onInitialize=new Promise((function(e){a.integration.on("initialize",(function(){a._initialized=!0,e(!0)}))}));try{(0,v.recordIntegrationMetric)(t,{integrationName:this.name,methodName:"initialize",type:"classic"}),this.integration.initialize()}catch(e){throw(0,v.recordIntegrationMetric)(t,{integrationName:this.name,methodName:"initialize",type:"classic",didError:!0}),e}return[2]}}))}))},i.prototype.unload=function(e,t){return(0,d.unloadIntegration)(this.name,this.version,this.options.obfuscate)},i.prototype.addMiddleware=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];this.middleware=(e=this.middleware).concat.apply(e,t)},i.prototype.shouldBuffer=function(e){return"page"!==e.event.type&&((0,r.isOffline)()||!1===this._ready||!1===this._initialized)},i.prototype.send=function(t,r,i){var o,u;return e.__awaiter(this,void 0,void 0,(function(){var s,c,l,d,p,h;return e.__generator(this,(function(y){switch(y.label){case 0:if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(s=null===(u=null===(o=this.options)||void 0===o?void 0:o.plan)||void 0===u?void 0:u.track,c=t.event.event,s&&c&&"Segment.io"!==this.name){if(l=s[c],!(0,a.isPlanEventEnabled)(s,l))return t.updateEvent("integrations",e.__assign(e.__assign({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new n.ContextCancelation({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(t.updateEvent("integrations",e.__assign(e.__assign({},t.event.integrations),null==l?void 0:l.integrations)),(null==l?void 0:l.enabled)&&!1===(null==l?void 0:l.integrations[this.name]))return t.cancel(new n.ContextCancelation({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,(0,f.applyDestinationMiddleware)(this.name,t.event,this.middleware)];case 1:if(null===(d=y.sent()))return[2,t];p=new r(d,{traverse:!this.disableAutoISOConversion}),(0,v.recordIntegrationMetric)(t,{integrationName:this.name,methodName:i,type:"classic"}),y.label=2;case 2:return y.trys.push([2,5,,6]),this.integration?[4,this.integration.invoke.call(this.integration,i,p)]:[3,4];case 3:y.sent(),y.label=4;case 4:return[3,6];case 5:throw h=y.sent(),(0,v.recordIntegrationMetric)(t,{integrationName:this.name,methodName:i,type:"classic",didError:!0}),h;case 6:return[2,t]}}))}))},i.prototype.track=function(r){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.send(r,t.Track,"track")]}))}))},i.prototype.page=function(r){var n;return e.__awaiter(this,void 0,void 0,(function(){var i=this;return e.__generator(this,(function(e){return(null===(n=this.integration)||void 0===n?void 0:n._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then((function(){return i.send(r,t.Page,"page")}))]}))}))},i.prototype.identify=function(r){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.send(r,t.Identify,"identify")]}))}))},i.prototype.alias=function(r){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.send(r,t.Alias,"alias")]}))}))},i.prototype.group=function(r){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.send(r,t.Group,"group")]}))}))},i.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout((function(){return e.__awaiter(t,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){switch(e.label){case 0:return this.flushing=!0,t=this,[4,y(this,this.buffer)];case 1:return t.buffer=e.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}}))}))}),5e3*Math.random())},i}();return ll.LegacyDestination=g,ll.ajsDestinations=function(t,r,n,o,a,s){var c,l;if(void 0===n&&(n={}),void 0===o&&(o={}),(0,i.isServer)())return[];r.plan&&((o=null!=o?o:{}).plan=r.plan);var f=null!==(l=null===(c=r.middlewareSettings)||void 0===c?void 0:c.routingRules)&&void 0!==l?l:[],v=r.integrations,y=o.integrations,_=(0,u.mergedOptions)(r,null!=o?o:{}),m=null==s?void 0:s.reduce((function(t,r){var n;return e.__assign(e.__assign({},t),((n={})[(0,d.resolveIntegrationNameFromSource)(r)]=r,n))}),{}),b=new Set(e.__spreadArray(e.__spreadArray([],Object.keys(v).filter((function(e){return(0,h.isInstallableIntegration)(e,v[e])})),!0),Object.keys(m||{}).filter((function(e){return(0,p.isPlainObject)(v[e])||(0,p.isPlainObject)(null==y?void 0:y[e])})),!0));return Array.from(b).filter((function(e){return!(0,h.isDisabledIntegration)(e,n)})).map((function(e){var r=v[e],n=(0,d.resolveVersion)(r),i=new g(e,n,t,_[e],o,null==m?void 0:m[e]);return f.filter((function(t){return t.destinationName===e})).length>0&&a&&i.addMiddleware(a),i}))},ll}var bl,wl,Pl={},Sl={exports:{}};function Ol(){return bl||(bl=1,window,Sl.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){r.r(t);var n="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise((function(r,n){var i=new XMLHttpRequest;for(var o in i.open(t.method||"get",e,!0),t.headers)i.setRequestHeader(o,t.headers[o]);function a(){var e,t=[],r=[],n={};return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(i,o,a){t.push(o=o.toLowerCase()),r.push([o,a]),e=n[o],n[o]=e?e+","+a:a})),{ok:2==(i.status/100|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:a,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return r},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}i.withCredentials="include"==t.credentials,i.onload=function(){r(a())},i.onerror=n,i.send(t.body)}))};t.default=n},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pluginName=t}return n(e,[{key:"track",value:function(e,t){window.analytics.track(e,t,{integration:{name:this.pluginName}})}}]),e}();t.default=i},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeAnalytics=t.VimeoAnalytics=void 0;var n=o(r(3)),i=o(r(4));function o(e){return e&&e.__esModule?e:{default:e}}t.VimeoAnalytics=n.default,t.YouTubeAnalytics=i.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"VimeoAnalytics"));return n.authToken=r,n.player=e,n.metadata={content:{},playback:{videoPlayer:"Vimeo"}},n.mostRecentHeartbeat=0,n.isPaused=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"initialize",value:function(){var e=this,t={loaded:this.retrieveMetadata,play:this.trackPlay,pause:this.trackPause,ended:this.trackEnded,timeupdate:this.trackHeartbeat};for(var r in t)this.registerHandler(r,t[r]);this.player.getVideoId().then((function(t){e.retrieveMetadata({id:t})})).catch(console.error)}},{key:"registerHandler",value:function(e,t){var r=this;this.player.on(e,(function(e){r.updateMetadata(e),t.call(r,e)}))}},{key:"trackPlay",value:function(){this.isPaused?(this.track("Video Playback Resumed",this.metadata.playback),this.isPaused=!1):(this.track("Video Playback Started",this.metadata.playback),this.track("Video Content Started",this.metadata.content))}},{key:"trackEnded",value:function(){this.track("Video Playback Completed",this.metadata.playback),this.track("Video Content Completed",this.metadata.content)}},{key:"trackHeartbeat",value:function(){var e=this.mostRecentHeartbeat,t=this.metadata.playback.position;t!==e&&t-e>=10&&(this.track("Video Content Playing",this.metadata.content),this.mostRecentHeartbeat=Math.floor(t))}},{key:"trackPause",value:function(){this.isPaused=!0,this.track("Video Playback Paused",this.metadata.playback)}},{key:"retrieveMetadata",value:function(e){var t=this;return new Promise((function(r,n){var o=e.id;(0,i.default)("https://api.vimeo.com/videos/"+o,{headers:{Authorization:"Bearer "+t.authToken}}).then((function(e){return e.ok?e.json():n(e)})).then((function(e){t.metadata.content.title=e.name,t.metadata.content.description=e.description,t.metadata.content.publisher=e.user.name,t.metadata.playback.position=0,t.metadata.playback.totalLength=e.duration})).catch((function(e){return console.error("Request to Vimeo API Failed with: ",e),n(e)}))}))}},{key:"updateMetadata",value:function(e){var t=this;return new Promise((function(r,n){t.player.getVolume().then((function(n){n&&(t.metadata.playback.sound=100*n),t.metadata.playback.position=e.seconds,r()})).catch(n)}))}}]),t}(o(r(1)).default);t.default=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"YoutubeAnalytics"));return n.player=e,n.apiKey=r,n.playerLoaded=!1,n.playbackStarted=!1,n.contentStarted=!1,n.isPaused=!1,n.isBuffering=!1,n.isSeeking=!1,n.lastRecordedTime={timeReported:Date.now(),timeElapsed:0},n.metadata=[{playback:{video_player:"youtube"},content:{}}],n.playlistIndex=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"initialize",value:function(){window.segmentYoutubeOnStateChange=this.onPlayerStateChange.bind(this),window.segmentYoutubeOnReady=this.onPlayerReady.bind(this),this.player.addEventListener("onReady","segmentYoutubeOnReady"),this.player.addEventListener("onStateChange","segmentYoutubeOnStateChange")}},{key:"onPlayerReady",value:function(e){this.retrieveMetadata()}},{key:"onPlayerStateChange",value:function(e){var t=this.player.getCurrentTime();switch(this.metadata[this.playlistIndex]&&(this.metadata[this.playlistIndex].playback.position=this.metadata[this.playlistIndex].content.position=t,this.metadata[this.playlistIndex].playback.quality=this.player.getPlaybackQuality(),this.metadata[this.playlistIndex].playback.sound=this.player.isMuted()?0:this.player.getVolume()),e.data){case-1:if(this.playerLoaded)break;this.retrieveMetadata(),this.playerLoaded=!0;break;case YT.PlayerState.BUFFERING:this.handleBuffer();break;case YT.PlayerState.PLAYING:this.handlePlay();break;case YT.PlayerState.PAUSED:this.handlePause();break;case YT.PlayerState.ENDED:this.handleEnd()}this.lastRecordedTime={timeReported:Date.now(),timeElapsed:1e3*this.player.getCurrentTime()}}},{key:"retrieveMetadata",value:function(){var e=this;return new Promise((function(t,r){var n=e.player.getVideoData(),o=e.player.getPlaylist()||[n.video_id],a=o.join();(0,i.default)("https://www.googleapis.com/youtube/v3/videos?id="+a+"&part=snippet,contentDetails&key="+e.apiKey).then((function(e){if(!e.ok){var t=new Error("Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)");throw t.response=e,t}return e.json()})).then((function(r){e.metadata=[];for(var n=0,i=0;i<o.length;i++){var a=r.items[i];e.metadata.push({content:{title:a.snippet.title,description:a.snippet.description,keywords:a.snippet.tags,channel:a.snippet.channelTitle,airdate:a.snippet.publishedAt}}),n+=u(a.contentDetails.duration)}for(i=0;i<o.length;i++)e.metadata[i].playback={total_length:n,video_player:"youtube"};t()})).catch((function(t){e.metadata=o.map((function(e){return{playback:{video_player:"youtube"},content:{}}})),r(t)}))}))}},{key:"handleBuffer",value:function(){var e=this.determineSeek();this.playbackStarted||(this.playbackStarted=!0,this.track("Video Playback Started",this.metadata[this.playlistIndex].playback)),e&&!this.isSeeking&&(this.isSeeking=!0,this.track("Video Playback Seek Started",this.metadata[this.playlistIndex].playback)),this.isSeeking&&(this.track("Video Playback Seek Completed",this.metadata[this.playlistIndex].playback),this.isSeeking=!1);var t=this.player.getPlaylist();t&&0===this.player.getCurrentTime()&&this.player.getPlaylistIndex()!==this.playlistIndex&&(this.contentStarted=!1,this.playlistIndex===t.length-1&&0===this.player.getPlaylistIndex()&&(this.track("Video Playback Completed",this.metadata[this.player.getPlaylistIndex()].playback),this.track("Video Playback Started",this.metadata[this.player.getPlaylistIndex()].playback))),this.track("Video Playback Buffer Started",this.metadata[this.playlistIndex].playback),this.isBuffering=!0}},{key:"handlePlay",value:function(){this.contentStarted||(this.playlistIndex=this.player.getPlaylistIndex(),-1===this.playlistIndex&&(this.playlistIndex=0),this.track("Video Content Started",this.metadata[this.playlistIndex].content),this.contentStarted=!0),this.isBuffering&&(this.track("Video Playback Buffer Completed",this.metadata[this.playlistIndex].playback),this.isBuffering=!1),this.isPaused&&(this.track("Video Playback Resumed",this.metadata[this.playlistIndex].playback),this.isPaused=!1)}},{key:"handlePause",value:function(){var e=this.determineSeek();this.isBuffering&&(this.track("Video Playback Buffer Completed",this.metadata[this.playlistIndex].playback),this.isBuffering=!1),this.isPaused||(e?(this.track("Video Playback Seek Started",this.metadata[this.playlistIndex].playback),this.isSeeking=!0):(this.track("Video Playback Paused",this.metadata[this.playlistIndex].playback),this.isPaused=!0))}},{key:"handleEnd",value:function(){this.track("Video Content Completed",this.metadata[this.playlistIndex].content),this.contentStarted=!1;var e=this.player.getPlaylistIndex(),t=this.player.getPlaylist();(t&&e===t.length-1||-1===e)&&(this.track("Video Playback Completed",this.metadata[this.playlistIndex].playback),this.playbackStarted=!1)}},{key:"determineSeek",value:function(){var e=this.isPaused||this.isBuffering?0:Date.now()-this.lastRecordedTime.timeReported,t=1e3*this.player.getCurrentTime()-this.lastRecordedTime.timeElapsed;return Math.abs(e-t)>2e3}}]),t}(o(r(1)).default);function u(e){var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);return t=t.slice(1).map((function(e){if(null!=e)return e.replace(/\D/,"")})),3600*(parseInt(t[0])||0)+60*(parseInt(t[1])||0)+(parseInt(t[2])||0)}t.default=a}])),Sl.exports}var xl,jl={};function kl(){if(xl)return jl;xl=1,Object.defineProperty(jl,"__esModule",{value:!0}),jl.schemaFilter=void 0;var e=F,t=dl();return jl.schemaFilter=function(r,n){function i(i){var o=r,a=i.event.event;if(o&&a){var u=o[a];if(!(0,t.isPlanEventEnabled)(o,u))return i.updateEvent("integrations",e.__assign(e.__assign({},i.event.integrations),{All:!1,"Segment.io":!0})),i;var s=function(e,t){var r,n;if(!e||!Object.keys(e))return{};var i=e.integrations?Object.keys(e.integrations).filter((function(t){return!1===e.integrations[t]})):[],o=[];return(null!==(r=t.remotePlugins)&&void 0!==r?r:[]).forEach((function(e){i.forEach((function(t){(e.name.includes(t)||t.includes(e.name))&&o.push(e.name)}))})),(null!==(n=t.remotePlugins)&&void 0!==n?n:[]).reduce((function(e,t){return t.settings.subscriptions&&o.includes(t.name)&&t.settings.subscriptions.forEach((function(r){return e["".concat(t.name," ").concat(r.partnerAction)]=!1})),e}),{})}(u,n);i.updateEvent("integrations",e.__assign(e.__assign(e.__assign({},i.event.integrations),null==u?void 0:u.integrations),s))}return i}return{name:"Schema Filter",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},type:"before",page:i,alias:i,track:i,identify:i,group:i}},jl}var Il,Al={};Object.defineProperty(r,"__esModule",{value:!0});var Ml=r.AnalyticsBrowser=r.loadLegacySettings=void 0,El=F,Cl=N,Tl=L,Dl=z,Fl=Q,Nl=qe,Ll=Si,Rl=lt,Ul=ji,Bl=zi,zl=to,ql=Oo,Vl=Er,Gl=Ao,Kl=Ve,Wl=R;function Hl(e,t){var r=null!=t?t:(0,Tl.getCDN)();return(0,Dl.fetch)("".concat(r,"/v1/projects/").concat(e,"/settings")).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){throw console.error(e.message),e}))}var Jl=r.loadLegacySettings=Hl;function Ql(e,t){return El.__awaiter(this,void 0,void 0,(function(){return El.__generator(this,(function(r){switch(r.label){case 0:return[4,(0,Vl.flushAddSourceMiddleware)(e,t)];case 1:return r.sent(),(0,Vl.flushAnalyticsCallsInNewTask)(e,t),t.clear(),[2]}}))}))}function Yl(e,t,r,n,i,o,a){var u,s,c;return void 0===o&&(o=[]),El.__awaiter(this,void 0,void 0,(function(){var l,f,d,p,h,v,y,g,_,m,b,w,P,S,O=this;return El.__generator(this,(function(x){switch(x.label){case 0:return l=null==o?void 0:o.filter((function(e){return"object"==typeof e})),f=null==o?void 0:o.filter((function(e){return"function"==typeof e&&"string"==typeof e.pluginName})),function(e){var t,r,n;return"test"!==(0,Cl.getProcessEnv)().NODE_ENV&&(null!==(n=null===(r=null===(t=e.middlewareSettings)||void 0===t?void 0:t.routingRules)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0}(t)?[4,Promise.resolve().then((function(){return El.__importStar(function(){if(al)return Eo;al=1,Object.defineProperty(Eo,"__esModule",{value:!0}),Eo.tsubMiddleware=void 0;var e=F.__importStar(sl());return Eo.tsubMiddleware=function(t){return function(r){var n=r.payload,i=r.integration,o=r.next;new e.Store(t).getRulesByDestinationName(i).forEach((function(t){for(var r=t.matchers,i=t.transformers,a=0;a<r.length;a++)if(e.matches(n.obj,r[a])&&(n.obj=e.transform(n.obj,i[a]),null===n.obj))return o(null)})),o(n)}},Eo}())})).then((function(e){return e.tsubMiddleware(t.middlewareSettings.routingRules)}))]:[3,2];case 1:return p=x.sent(),[3,3];case 2:p=void 0,x.label=3;case 3:return d=p,function(e){return"test"!==(0,Cl.getProcessEnv)().NODE_ENV&&Object.keys(e.integrations).length>1}(t)||a.length>0?[4,Promise.resolve().then((function(){return El.__importStar(ml())})).then((function(i){return i.ajsDestinations(e,t,r.integrations,n,d,a)}))]:[3,5];case 4:return v=x.sent(),[3,6];case 5:v=[],x.label=6;case 6:return h=v,t.legacyVideoPluginsEnabled?[4,Promise.resolve().then((function(){return El.__importStar(function(){if(wl)return Pl;wl=1,Object.defineProperty(Pl,"__esModule",{value:!0}),Pl.loadLegacyVideoPlugins=void 0;var e=F;return Pl.loadLegacyVideoPlugins=function(t){return e.__awaiter(this,void 0,void 0,(function(){var r;return e.__generator(this,(function(n){switch(n.label){case 0:return[4,Promise.resolve().then((function(){return e.__importStar(Ol())}))];case 1:return r=n.sent(),t._plugins=r,[2]}}))}))},Pl}())})).then((function(e){return e.loadLegacyVideoPlugins(r)}))]:[3,8];case 7:x.sent(),x.label=8;case 8:return(null===(u=n.plan)||void 0===u?void 0:u.track)?[4,Promise.resolve().then((function(){return El.__importStar(kl())})).then((function(e){var r;return e.schemaFilter(null===(r=n.plan)||void 0===r?void 0:r.track,t)}))]:[3,10];case 9:return g=x.sent(),[3,11];case 10:g=void 0,x.label=11;case 11:return y=g,_=(0,Ll.mergedOptions)(t,i),[4,(0,Bl.remoteLoader)(t,r.integrations,_,i.obfuscate,d,f).catch((function(){return[]}))];case 12:return m=x.sent(),b=El.__spreadArray(El.__spreadArray(El.__spreadArray([ql.validation,Ul.envEnrichment],l,!0),h,!0),m,!0),y&&b.push(y),!1===(null===(s=n.integrations)||void 0===s?void 0:s.All)&&!n.integrations["Segment.io"]||n.integrations&&!1===n.integrations["Segment.io"]?[3,14]:(P=(w=b).push,[4,(0,zl.segmentio)(r,_["Segment.io"],t.integrations)]);case 13:P.apply(w,[x.sent()]),x.label=14;case 14:return[4,r.register.apply(r,b)];case 15:return S=x.sent(),Object.entries(null!==(c=t.enabledMiddleware)&&void 0!==c?c:{}).some((function(e){return e[1]}))?[4,Promise.resolve().then((function(){return El.__importStar(function(){if(Il)return Al;Il=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.remoteMiddlewares=void 0;var e=F,t=Ue(),r=qi,n=L;return Al.remoteMiddlewares=function(i,o,a){var u;return e.__awaiter(this,void 0,void 0,(function(){var s,c,l,f,d=this;return e.__generator(this,(function(p){switch(p.label){case 0:return(0,t.isServer)()?[2,[]]:(s=(0,n.getNextIntegrationsURL)(),c=null!==(u=o.enabledMiddleware)&&void 0!==u?u:{},l=Object.entries(c).filter((function(e){return e[0],e[1]})).map((function(e){return e[0]})),f=l.map((function(t){return e.__awaiter(d,void 0,void 0,(function(){var n,o,u,c;return e.__generator(this,(function(e){switch(e.label){case 0:n=t.replace("@segment/",""),o=n,a&&(o=btoa(n).replace(/=/g,"")),u="".concat(s,"/middleware/").concat(o,"/latest/").concat(o,".js.gz"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,(0,r.loadScript)(u)];case 2:return e.sent(),[2,window["".concat(n,"Middleware")]];case 3:return c=e.sent(),i.log("error",c),i.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}}))}))})),[4,Promise.all(f)]);case 1:return[2,p.sent().filter(Boolean)]}}))}))},Al}())})).then((function(e){var n=e.remoteMiddlewares;return El.__awaiter(O,void 0,void 0,(function(){var e,o;return El.__generator(this,(function(a){switch(a.label){case 0:return[4,n(S,t,i.obfuscate)];case 1:return e=a.sent(),o=e.map((function(e){return r.addSourceMiddleware(e)})),[2,Promise.all(o)]}}))}))}))]:[3,17];case 16:x.sent(),x.label=17;case 17:return[2,S]}}))}))}function $l(e,t,r){var n,i,o,a,u,s,c;return void 0===t&&(t={}),El.__awaiter(this,void 0,void 0,(function(){var l,f,d,p,h,v,y,g,_,m,b;return El.__generator(this,(function(w){switch(w.label){case 0:return!0===t.disable?[2,[new Fl.NullAnalytics,Nl.Context.system()]]:(t.globalAnalyticsKey&&(0,Wl.setGlobalAnalyticsKey)(t.globalAnalyticsKey),e.cdnURL&&(0,Tl.setGlobalCDNUrl)(e.cdnURL),null===(n=e.cdnSettings)||void 0===n?[3,1]:(f=n,[3,3]));case 1:return[4,Hl(e.writeKey,e.cdnURL)];case 2:f=w.sent(),w.label=3;case 3:return l=f,t.updateCDNSettings&&(l=t.updateCDNSettings(l)),"function"!=typeof t.disable?[3,5]:[4,t.disable(l)];case 4:if(w.sent())return[2,[new Fl.NullAnalytics,Nl.Context.system()]];w.label=5;case 5:return d=null===(o=null===(i=l.integrations["Segment.io"])||void 0===i?void 0:i.retryQueue)||void 0===o||o,p=El.__assign({retryQueue:d},t),h=new Fl.Analytics(e,p),(0,Gl.attachInspector)(h),v=null!==(a=e.plugins)&&void 0!==a?a:[],y=null!==(u=e.classicIntegrations)&&void 0!==u?u:[],Kl.Stats.initRemoteMetrics(l.metrics),function(e,t){(0,Vl.flushSetAnonymousID)(e,t),(0,Vl.flushOn)(e,t)}(h,r),[4,Yl(e.writeKey,l,h,p,t,v,y)];case 6:return g=w.sent(),_=null!==(s=window.location.search)&&void 0!==s?s:"",m=null!==(c=window.location.hash)&&void 0!==c?c:"",(b=_.length?_:m.replace(/(?=#).*(?=\?)/,"")).includes("ajs_")?[4,h.queryString(b).catch(console.error)]:[3,8];case 7:w.sent(),w.label=8;case 8:return h.initialized=!0,h.emit("initialize",e,t),t.initialPageview&&h.page().catch(console.error),[4,Ql(h,r)];case 9:return w.sent(),[2,[h,g]]}}))}))}var Zl=function(e){function t(){var t=this,r=(0,Rl.createDeferred)(),n=r.promise,i=r.resolve;return t=e.call(this,(function(e){return n.then((function(t){return $l(t[0],t[1],e)}))}))||this,t._resolveLoadStart=function(e,t){return i([e,t])},t}return El.__extends(t,e),t.prototype.load=function(e,t){return void 0===t&&(t={}),this._resolveLoadStart(e,t),this},t.load=function(e,r){return void 0===r&&(r={}),(new t).load(e,r)},t.standalone=function(e,r){return t.load({writeKey:e},r).then((function(e){return e[0]}))},t}(Vl.AnalyticsBuffered);Ml=r.AnalyticsBrowser=Zl;export{Ml as AnalyticsBrowser,r as default,Jl as loadLegacySettings};