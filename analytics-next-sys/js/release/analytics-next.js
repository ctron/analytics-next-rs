var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var n={},r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function u(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function s(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r}function _(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{!function(e){e.value instanceof m?Promise.resolve(e.value.v).then(s,c):l(o[0][2],e)}(i[e](t))}catch(e){l(o[0][3],e)}}function s(e){u("next",e)}function c(e){u("throw",e)}function l(e,t){e(t),o.shift(),o.length&&u(o[0][0],o[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:!1}:i?i(t):t}:i}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return O(t,e),t}function k(e){return e&&e.__esModule?e:{default:e}}function x(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function I(e,t,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n}function A(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function E(e,t,n){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose]}if("function"!=typeof r)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var M="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function C(e){function t(t){e.error=e.hasError?new M(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function n(){for(;e.stack.length;){var r=e.stack.pop();try{var i=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(i).then(n,(function(e){return t(e),n()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}var T={__extends:i,__assign:o,__rest:a,__decorate:u,__param:s,__metadata:c,__awaiter:l,__generator:f,__createBinding:d,__exportStar:p,__values:h,__read:v,__spread:y,__spreadArrays:g,__spreadArray:_,__await:m,__asyncGenerator:b,__asyncDelegator:w,__asyncValues:P,__makeTemplateObject:S,__importStar:j,__importDefault:k,__classPrivateFieldGet:x,__classPrivateFieldSet:I,__classPrivateFieldIn:A,__addDisposableResource:E,__disposeResources:C},F=Object.freeze({__proto__:null,__addDisposableResource:E,get __assign(){return o},__asyncDelegator:w,__asyncGenerator:b,__asyncValues:P,__await:m,__awaiter:l,__classPrivateFieldGet:x,__classPrivateFieldIn:A,__classPrivateFieldSet:I,__createBinding:d,__decorate:u,__disposeResources:C,__esDecorate:function(e,t,n,r,i,o){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var u,s=r.kind,c="getter"===s?"get":"setter"===s?"set":"value",l=!t&&e?r.static?e:e.prototype:null,f=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d=!1,p=n.length-1;p>=0;p--){var h={};for(var v in r)h[v]="access"===v?{}:r[v];for(var v in r.access)h.access[v]=r.access[v];h.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");o.push(a(e||null))};var y=(0,n[p])("accessor"===s?{get:f.get,set:f.set}:f[c],h);if("accessor"===s){if(void 0===y)continue;if(null===y||"object"!=typeof y)throw new TypeError("Object expected");(u=a(y.get))&&(f.get=u),(u=a(y.set))&&(f.set=u),(u=a(y.init))&&i.unshift(u)}else(u=a(y))&&("field"===s?i.unshift(u):f[c]=u)}l&&Object.defineProperty(l,r.name,f),d=!0},__exportStar:p,__extends:i,__generator:f,__importDefault:k,__importStar:j,__makeTemplateObject:S,__metadata:c,__param:s,__propKey:function(e){return"symbol"==typeof e?e:"".concat(e)},__read:v,__rest:a,__runInitializers:function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},__setFunctionName:function(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})},__spread:y,__spreadArray:_,__spreadArrays:g,__values:h,default:T}),D=t(F),N={};Object.defineProperty(N,"__esModule",{value:!0}),N.getProcessEnv=void 0,N.getProcessEnv=function(){return"undefined"!=typeof process&&process.env?process.env:{}};var R={},U={};Object.defineProperty(U,"__esModule",{value:!0}),U.embeddedWriteKey=void 0;try{window.analyticsWriteKey="__WRITE_KEY__"}catch(e){}U.embeddedWriteKey=function(){if(void 0!==window.analyticsWriteKey)return window.analyticsWriteKey!==["__","WRITE","_","KEY","__"].join("")?window.analyticsWriteKey:void 0},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getLegacyAJSPath=e.getNextIntegrationsURL=e.getCDN=e.setGlobalCDNUrl=void 0;var t,n=U,r=/(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;e.setGlobalCDNUrl=function(e){window.analytics&&(window.analytics._cdn=e),t=e};e.getCDN=function(){var e=function(){var e;return null!=t?t:null===(e=window.analytics)||void 0===e?void 0:e._cdn}();if(e)return e;var n,i=(Array.prototype.slice.call(document.querySelectorAll("script")).forEach((function(e){var t,i=null!==(t=e.getAttribute("src"))&&void 0!==t?t:"",o=r.exec(i);o&&o[1]&&(n=o[1])})),n);return i||"https://cdn.segment.com"};e.getNextIntegrationsURL=function(){var t=(0,e.getCDN)();return"".concat(t,"/next-integrations")},e.getLegacyAJSPath=function(){for(var e,t,i=null!==(e=(0,n.embeddedWriteKey)())&&void 0!==e?e:window.analytics._writeKey,o=void 0,a=0,u=Array.prototype.slice.call(document.querySelectorAll("script"));a<u.length;a++){var s=null!==(t=u[a].getAttribute("src"))&&void 0!==t?t:"",c=r.exec(s);if(c&&c[1]){o=s;break}}return o?o.replace("analytics.min.js","analytics.classic.js"):"https://cdn.segment.com/analytics.js/v1/".concat(i,"/analytics.classic.js")}}(R);var L={};var B,q=Object.freeze({__proto__:null,default:function(e,t){return t=t||{},new Promise((function(n,r){var i=new XMLHttpRequest,o=[],a=[],u={},s=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:s,headers:{keys:function(){return o},entries:function(){return a},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var c in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){o.push(t=t.toLowerCase()),a.push([t,n]),u[t]=u[t]?u[t]+","+n:n})),n(s())},i.onerror=r,i.withCredentials="include"==t.credentials,t.headers)i.setRequestHeader(c,t.headers[c]);i.send(t.body||null)}))}}),z=t(q),V={};function K(){if(B)return V;B=1,Object.defineProperty(V,"__esModule",{value:!0}),V.getGlobal=void 0;return V.getGlobal=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:null},V}Object.defineProperty(L,"__esModule",{value:!0}),L.fetch=void 0;var G=D.__importDefault(z),H=K();L.fetch=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=(0,H.getGlobal)();return(n&&n.fetch||G.default).apply(void 0,e)};var J={},Q={},W=function(){function e(){this.callbacks={}}return e.prototype.on=function(e,t){return this.callbacks[e]?this.callbacks[e].push(t):this.callbacks[e]=[t],this},e.prototype.once=function(e,t){var n=this,r=function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];n.off(e,r),t.apply(n,i)};return this.on(e,r),this},e.prototype.off=function(e,t){var n,r=(null!==(n=this.callbacks[e])&&void 0!==n?n:[]).filter((function(e){return e!==t}));return this.callbacks[e]=r,this},e.prototype.emit=function(e){for(var t,n=this,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return(null!==(t=this.callbacks[e])&&void 0!==t?t:[]).forEach((function(e){e.apply(n,r)})),this},e}();function Y(e,t,n){t.split&&(t=t.split("."));for(var r,i,o=0,a=t.length,u=e;o<a&&"__proto__"!==(i=t[o++])&&"constructor"!==i&&"prototype"!==i;)u=u[i]=o===a?n:typeof(r=u[i])==typeof t?r:0*t[o]!=0||~(""+t[o]).indexOf(".")?{}:[]}var $=function(e){function t(t,n){var r=e.call(this,"".concat(t," ").concat(n))||this;return r.field=t,r}return i(t,e),t}(Error);function Z(e){return"string"==typeof e}function X(e){return null!=e}function ee(e){return"object"===Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var te="is not a string",ne="is not an object",re="is nil";function ie(e){var t=".userId/anonymousId/previousId/groupId",n=function(e){var t,n,r;return null!==(r=null!==(n=null!==(t=e.userId)&&void 0!==t?t:e.anonymousId)&&void 0!==n?n:e.groupId)&&void 0!==r?r:e.previousId}(e);if(!X(n))throw new $(t,re);if(!Z(n))throw new $(t,te)}function oe(e){if(!X(e))throw new $("Event",re);if("object"!=typeof e)throw new $("Event",ne)}function ae(e){if(!Z(e.type))throw new $(".type",te)}function ue(e){if(!Z(e.event))throw new $(".event",te)}function se(e){if(!ee(e.properties))throw new $(".properties",ne)}function ce(e){if(!ee(e.traits))throw new $(".traits",ne)}function le(e){oe(e),ae(e),"track"===e.type&&(ue(e),se(e)),["group","identify"].includes(e.type)&&ce(e),ie(e)}var fe=function(){function e(e){this.user=e.user,this.createMessageId=e.createMessageId}return e.prototype.track=function(e,t,n,r){return this.normalize(o(o({},this.baseEvent()),{event:e,type:"track",properties:null!=t?t:{},options:o({},n),integrations:o({},r)}))},e.prototype.page=function(e,t,n,r,i){var a,u={type:"page",properties:o({},n),options:o({},r),integrations:o({},i)};return null!==e&&(u.category=e,u.properties=null!==(a=u.properties)&&void 0!==a?a:{},u.properties.category=e),null!==t&&(u.name=t),this.normalize(o(o({},this.baseEvent()),u))},e.prototype.screen=function(e,t,n,r,i){var a={type:"screen",properties:o({},n),options:o({},r),integrations:o({},i)};return null!==e&&(a.category=e),null!==t&&(a.name=t),this.normalize(o(o({},this.baseEvent()),a))},e.prototype.identify=function(e,t,n,r){return this.normalize(o(o({},this.baseEvent()),{type:"identify",userId:e,traits:null!=t?t:{},options:o({},n),integrations:r}))},e.prototype.group=function(e,t,n,r){return this.normalize(o(o({},this.baseEvent()),{type:"group",traits:null!=t?t:{},options:o({},n),integrations:o({},r),groupId:e}))},e.prototype.alias=function(e,t,n,r){var i={userId:e,type:"alias",options:o({},n),integrations:o({},r)};return null!==t&&(i.previousId=t),void 0===e?this.normalize(o(o({},i),this.baseEvent())):this.normalize(o(o({},this.baseEvent()),i))},e.prototype.baseEvent=function(){var e={integrations:{},options:{}};if(!this.user)return e;var t=this.user;return t.id()&&(e.userId=t.id()),t.anonymousId()&&(e.anonymousId=t.anonymousId()),e},e.prototype.context=function(e){var t,n=["userId","anonymousId","timestamp"];delete e.integrations;var r=Object.keys(e),i=null!==(t=e.context)&&void 0!==t?t:{},o={};return r.forEach((function(t){"context"!==t&&(n.includes(t)?Y(o,t,e[t]):Y(i,t,e[t]))})),[i,o]},e.prototype.normalize=function(e){var t,n,r,i,u=Object.keys(null!==(t=e.integrations)&&void 0!==t?t:{}).reduce((function(t,n){var r,i;return o(o({},t),((r={})[n]=Boolean(null===(i=e.integrations)||void 0===i?void 0:i[n]),r))}),{});e.options=(r=e.options||{},i=function(e,t){return void 0!==t},Object.keys(r).filter((function(e){return i(e,r[e])})).reduce((function(e,t){return e[t]=r[t],e}),{}));var s=o(o({},u),null===(n=e.options)||void 0===n?void 0:n.integrations),c=e.options?this.context(e.options):[],l=c[0],f=c[1];e.options;var d=a(e,["options"]),p=o(o(o({timestamp:new Date},d),{integrations:s,context:l}),f),h=o(o({},p),{messageId:this.createMessageId()});return le(h),h},e}();function de(e,t){return new Promise((function(n,r){var i=setTimeout((function(){r(Error("Promise timed out"))}),t);e.then((function(e){return clearTimeout(i),n(e)})).catch(r)}))}function pe(e){return new Promise((function(t){return setTimeout(t,e)}))}function he(e,t,n){return pe(n).then((function(){return de(function(){try{return Promise.resolve(t(e))}catch(e){return Promise.reject(e)}}(),1e3)})).catch((function(t){null==e||e.log("warn","Callback Error",{error:t}),null==e||e.stats.increment("callback_error")})).then((function(){return e}))}function ve(e){var t=Math.random()+1,n=e.minTimeout,r=void 0===n?500:n,i=e.factor,o=void 0===i?2:i,a=e.attempt,u=e.maxTimeout,s=void 0===u?1/0:u;return Math.min(t*r*Math.pow(o,a),s)}for(var ye,ge="onRemoveFromFuture",_e=function(e){function t(t,n,r){var i=e.call(this)||this;return i.future=[],i.maxAttempts=t,i.queue=n,i.seen=null!=r?r:{},i}return i(t,e),t.prototype.push=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=t.map((function(t){return!(e.updateAttempts(t)>e.maxAttempts||e.includes(t))&&(e.queue.push(t),!0)}));return this.queue=this.queue.sort((function(t,n){return e.getAttempts(t)-e.getAttempts(n)})),r},t.prototype.pushWithBackoff=function(e){var t=this;if(0===this.getAttempts(e))return this.push(e)[0];var n=this.updateAttempts(e);if(n>this.maxAttempts||this.includes(e))return!1;var r=ve({attempt:n-1});return setTimeout((function(){t.queue.push(e),t.future=t.future.filter((function(t){return t.id!==e.id})),t.emit(ge)}),r),this.future.push(e),!0},t.prototype.getAttempts=function(e){var t;return null!==(t=this.seen[e.id])&&void 0!==t?t:0},t.prototype.updateAttempts=function(e){return this.seen[e.id]=this.getAttempts(e)+1,this.getAttempts(e)},t.prototype.includes=function(e){return this.queue.includes(e)||this.future.includes(e)||Boolean(this.queue.find((function(t){return t.id===e.id})))||Boolean(this.future.find((function(t){return t.id===e.id})))},t.prototype.pop=function(){return this.queue.shift()},Object.defineProperty(t.prototype,"length",{get:function(){return this.queue.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"todo",{get:function(){return this.queue.length+this.future.length},enumerable:!1,configurable:!0}),t}(W),me=256,be=[];me--;)be[me]=(me+256).toString(16).substring(1);var we=function(){function e(){this._logs=[]}return e.prototype.log=function(e,t,n){var r=new Date;this._logs.push({level:e,message:t,time:r,extras:n})},Object.defineProperty(e.prototype,"logs",{get:function(){return this._logs},enumerable:!1,configurable:!0}),e.prototype.flush=function(){if(this.logs.length>1){var e=this._logs.reduce((function(e,t){var n,r,i,a=o(o({},t),{json:JSON.stringify(t.extras,null," "),extras:t.extras});delete a.time;var u=null!==(i=null===(r=t.time)||void 0===r?void 0:r.toISOString())&&void 0!==i?i:"";return e[u]&&(u="".concat(u,"-").concat(Math.random())),o(o({},e),((n={})[u]=a,n))}),{});console.table?console.table(e):console.log(e)}else this.logs.forEach((function(e){var t=e.level,n=e.message,r=e.extras;"info"===t||"debug"===t?console.log(n,null!=r?r:""):console[t](n,null!=r?r:"")}));this._logs=[]},e}(),Pe=function(){function e(){this.metrics=[]}return e.prototype.increment=function(e,t,n){void 0===t&&(t=1),this.metrics.push({metric:e,value:t,tags:null!=n?n:[],type:"counter",timestamp:Date.now()})},e.prototype.gauge=function(e,t,n){this.metrics.push({metric:e,value:t,tags:null!=n?n:[],type:"gauge",timestamp:Date.now()})},e.prototype.flush=function(){var e=this.metrics.map((function(e){return o(o({},e),{tags:e.tags.join(",")})}));console.table?console.table(e):console.log(e),this.metrics=[]},e.prototype.serialize=function(){return this.metrics.map((function(e){return{m:e.metric,v:e.value,t:e.tags,k:(t=e.type,{gauge:"g",counter:"c"}[t]),e:e.timestamp};var t}))},e}(),Se=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.gauge=function(){},t.prototype.increment=function(){},t.prototype.flush=function(){},t.prototype.serialize=function(){return[]},t}(Pe),Oe=function(e){var t,n,r;this.retry=null===(t=e.retry)||void 0===t||t,this.type=null!==(n=e.type)&&void 0!==n?n:"plugin Error",this.reason=null!==(r=e.reason)&&void 0!==r?r:""},je=function(){function e(e,t,n,r){void 0===t&&(t=function(){var e,t=0,n="";if(!ye||me+16>256){for(ye=Array(t=256);t--;)ye[t]=256*Math.random()|0;t=me=0}for(;t<16;t++)e=ye[me+t],n+=6==t?be[15&e|64]:8==t?be[63&e|128]:be[e],1&t&&t>1&&t<11&&(n+="-");return me++,n}()),void 0===n&&(n=new Se),void 0===r&&(r=new we),this.attempts=0,this.event=e,this._id=t,this.logger=r,this.stats=n}return e.system=function(){},e.prototype.isSame=function(e){return e.id===this.id},e.prototype.cancel=function(e){if(e)throw e;throw new Oe({reason:"Context Cancel"})},e.prototype.log=function(e,t,n){this.logger.log(e,t,n)},Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),e.prototype.updateEvent=function(e,t){var n;if("integrations"===e.split(".")[0]){var r=e.split(".")[1];if(!1===(null===(n=this.event.integrations)||void 0===n?void 0:n[r]))return this.event}return Y(this.event,e,t),this.event},e.prototype.failedDelivery=function(){return this._failedDelivery},e.prototype.setFailedDelivery=function(e){this._failedDelivery=e},e.prototype.logs=function(){return this.logger.logs},e.prototype.flush=function(){this.logger.flush(),this.stats.flush()},e.prototype.toJSON=function(){return{id:this._id,event:this.event,logs:this.logger.logs,metrics:this.stats.metrics}},e}();function ke(e,t){e.log("debug","plugin",{plugin:t.name});var n=(new Date).getTime(),r=t[e.event.type];if(void 0===r)return Promise.resolve(e);var i=function(e){return l(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e()];case 1:return[2,n.sent()];case 2:return t=n.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))}((function(){return r.apply(t,[e])})).then((function(e){var r=(new Date).getTime()-n;return e.stats.gauge("plugin_time",r,["plugin:".concat(t.name)]),e})).catch((function(n){if(n instanceof Oe&&"middleware_cancellation"===n.type)throw n;return n instanceof Oe?(e.log("warn",n.type,{plugin:t.name,error:n}),n):(e.log("error","plugin Error",{plugin:t.name,error:n}),e.stats.increment("plugin_error",1,["plugin:".concat(t.name)]),n)}));return i}function xe(e,t){return ke(e,t).then((function(t){if(t instanceof je)return t;e.log("debug","Context canceled"),e.stats.increment("context_canceled"),e.cancel(t)}))}var Ie=function(e){function t(t){var n,r,i,o=e.call(this)||this;return o.criticalTasks=(i=0,{done:function(){return n},run:function(e){var t,o=e();return"object"==typeof(t=o)&&null!==t&&"then"in t&&"function"==typeof t.then&&(1==++i&&(n=new Promise((function(e){return r=e}))),o.finally((function(){return 0==--i&&r()}))),o}}),o.plugins=[],o.failedInitializations=[],o.flushing=!1,o.queue=t,o.queue.on(ge,(function(){o.scheduleFlush(0)})),o}return i(t,e),t.prototype.register=function(e,t,n){return l(this,void 0,void 0,(function(){var r=this;return f(this,(function(i){switch(i.label){case 0:return[4,Promise.resolve(t.load(e,n)).then((function(){r.plugins.push(t)})).catch((function(n){if("destination"===t.type)return r.failedInitializations.push(t.name),console.warn(t.name,n),void e.log("warn","Failed to load destination",{plugin:t.name,error:n});throw n}))];case 1:return i.sent(),[2]}}))}))},t.prototype.deregister=function(e,t,n){return l(this,void 0,void 0,(function(){var r;return f(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t.unload?[4,Promise.resolve(t.unload(e,n))]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.plugins=this.plugins.filter((function(e){return e.name!==t.name})),[3,4];case 3:return r=i.sent(),e.log("warn","Failed to unload destination",{plugin:t.name,error:r}),[3,4];case 4:return[2]}}))}))},t.prototype.dispatch=function(e){return l(this,void 0,void 0,(function(){var t;return f(this,(function(n){return e.log("debug","Dispatching"),e.stats.increment("message_dispatched"),this.queue.push(e),t=this.subscribeToDelivery(e),this.scheduleFlush(0),[2,t]}))}))},t.prototype.subscribeToDelivery=function(e){return l(this,void 0,void 0,(function(){var t=this;return f(this,(function(n){return[2,new Promise((function(n){var r=function(i,o){i.isSame(e)&&(t.off("flush",r),n(i))};t.on("flush",r)}))]}))}))},t.prototype.dispatchSingle=function(e){return l(this,void 0,void 0,(function(){var t=this;return f(this,(function(n){return e.log("debug","Dispatching"),e.stats.increment("message_dispatched"),this.queue.updateAttempts(e),e.attempts=1,[2,this.deliver(e).catch((function(n){return t.enqueuRetry(n,e)?t.subscribeToDelivery(e):(e.setFailedDelivery({reason:n}),e)}))]}))}))},t.prototype.isEmpty=function(){return 0===this.queue.length},t.prototype.scheduleFlush=function(e){var t=this;void 0===e&&(e=500),this.flushing||(this.flushing=!0,setTimeout((function(){t.flush().then((function(){setTimeout((function(){t.flushing=!1,t.queue.length&&t.scheduleFlush(0)}),0)}))}),e))},t.prototype.deliver=function(e){return l(this,void 0,void 0,(function(){var t,n,r,i;return f(this,(function(o){switch(o.label){case 0:return[4,this.criticalTasks.done()];case 1:o.sent(),t=Date.now(),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.flushOne(e)];case 3:return e=o.sent(),n=Date.now()-t,this.emit("delivery_success",e),e.stats.gauge("delivered",n),e.log("debug","Delivered",e.event),[2,e];case 4:throw r=o.sent(),i=r,e.log("error","Failed to deliver",i),this.emit("delivery_failure",e,i),e.stats.increment("delivery_failed"),r;case 5:return[2]}}))}))},t.prototype.enqueuRetry=function(e,t){return!(e instanceof Oe&&!e.retry)&&this.queue.pushWithBackoff(t)},t.prototype.flush=function(){return l(this,void 0,void 0,(function(){var e,t;return f(this,(function(n){switch(n.label){case 0:if(0===this.queue.length)return[2,[]];if(!(e=this.queue.pop()))return[2,[]];e.attempts=this.queue.getAttempts(e),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.deliver(e)];case 2:return e=n.sent(),this.emit("flush",e,!0),[3,4];case 3:return t=n.sent(),this.enqueuRetry(t,e)||(e.setFailedDelivery({reason:t}),this.emit("flush",e,!1)),[2,[]];case 4:return[2,[e]]}}))}))},t.prototype.isReady=function(){return!0},t.prototype.availableExtensions=function(e){var t,n,r=this.plugins.filter((function(t){var n,r,i;if("destination"!==t.type&&"Segment.io"!==t.name)return!0;var o=void 0;return null===(n=t.alternativeNames)||void 0===n||n.forEach((function(t){void 0!==e[t]&&(o=e[t])})),null!==(i=null!==(r=e[t.name])&&void 0!==r?r:o)&&void 0!==i?i:!1!==("Segment.io"===t.name||e.All)})),i=(t="type",n={},r.forEach((function(e){var r,i=void 0;if("string"==typeof t){var o=e[t];i="string"!=typeof o?JSON.stringify(o):o}else t instanceof Function&&(i=t(e));void 0!==i&&(n[i]=_(_([],null!==(r=n[i])&&void 0!==r?r:[],!0),[e],!1))})),n),o=i.before,a=void 0===o?[]:o,u=i.enrichment,s=void 0===u?[]:u,c=i.destination,l=void 0===c?[]:c,f=i.after;return{before:a,enrichment:s,destinations:l,after:void 0===f?[]:f}},t.prototype.flushOne=function(e){var t,n;return l(this,void 0,void 0,(function(){var r,i,o,a,u,s,c,l,d,p,h,v,y,g;return f(this,(function(f){switch(f.label){case 0:if(!this.isReady())throw new Error("Not ready");e.attempts>1&&this.emit("delivery_retry",e),r=this.availableExtensions(null!==(t=e.event.integrations)&&void 0!==t?t:{}),i=r.before,o=r.enrichment,a=0,u=i,f.label=1;case 1:return a<u.length?(s=u[a],[4,xe(e,s)]):[3,4];case 2:(p=f.sent())instanceof je&&(e=p),this.emit("message_enriched",e,s),f.label=3;case 3:return a++,[3,1];case 4:c=0,l=o,f.label=5;case 5:return c<l.length?(d=l[c],[4,ke(e,d)]):[3,8];case 6:(p=f.sent())instanceof je&&(e=p),this.emit("message_enriched",e,d),f.label=7;case 7:return c++,[3,5];case 8:return h=this.availableExtensions(null!==(n=e.event.integrations)&&void 0!==n?n:{}),v=h.destinations,y=h.after,[4,new Promise((function(t,n){setTimeout((function(){var r=v.map((function(t){return ke(e,t)}));Promise.all(r).then(t).catch(n)}),0)}))];case 9:return f.sent(),e.stats.increment("message_delivered"),this.emit("message_delivered",e),g=y.map((function(t){return ke(e,t)})),[4,Promise.all(g)];case 10:return f.sent(),[2,e]}}))}))},t}(W),Ae=function(e,t){var n=Date.now()-e;return Math.max((null!=t?t:300)-n,0)};var Ee=Object.freeze({__proto__:null,ContextCancelation:Oe,CoreContext:je,CoreEventQueue:Ie,CoreLogger:we,CoreStats:Pe,Emitter:W,EventFactory:fe,NullStats:Se,ON_REMOVE_FROM_FUTURE:ge,PriorityQueue:_e,ValidationError:$,assertEventExists:oe,assertEventType:ae,assertTrackEventName:ue,assertTrackEventProperties:se,assertTraits:ce,assertUserIdentity:ie,attempt:ke,backoff:ve,bindAll:function(e){for(var t=e.constructor.prototype,n=0,r=Object.getOwnPropertyNames(t);n<r.length;n++){var i=r[n];if("constructor"!==i){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);o&&"function"==typeof o.value&&(e[i]=e[i].bind(e))}}return e},dispatch:function(e,t,n,r){return l(this,void 0,void 0,(function(){var i,o;return f(this,(function(a){switch(a.label){case 0:return n.emit("dispatch_start",e),i=Date.now(),t.isEmpty()?[4,t.dispatchSingle(e)]:[3,2];case 1:return o=a.sent(),[3,4];case 2:return[4,t.dispatch(e)];case 3:o=a.sent(),a.label=4;case 4:return(null==r?void 0:r.callback)?[4,he(o,r.callback,Ae(i,r.timeout))]:[3,6];case 5:o=a.sent(),a.label=6;case 6:return(null==r?void 0:r.debug)&&o.flush(),[2,o]}}))}))},ensure:xe,exists:X,getDelay:Ae,invokeCallback:he,isFunction:function(e){return"function"==typeof e},isNumber:function(e){return"number"==typeof e},isPlainObject:ee,isString:Z,pTimeout:de,sleep:pe,validateEvent:le}),Me=t(Ee);Object.defineProperty(Q,"__esModule",{value:!0}),Q.resolveAliasArguments=Q.resolveUserArguments=Q.resolvePageArguments=Q.resolveArguments=void 0;var Ce=Me;Q.resolveArguments=function(e,t,n,r){var i,o=[e,t,n,r],a=(0,Ce.isPlainObject)(e)?e.event:e;if(!a||!(0,Ce.isString)(a))throw new Error("Event missing");var u=(0,Ce.isPlainObject)(e)?null!==(i=e.properties)&&void 0!==i?i:{}:(0,Ce.isPlainObject)(t)?t:{},s={};return(0,Ce.isFunction)(n)||(s=null!=n?n:{}),(0,Ce.isPlainObject)(e)&&!(0,Ce.isFunction)(t)&&(s=null!=t?t:{}),[a,u,s,o.find(Ce.isFunction)]},Q.resolvePageArguments=function(e,t,n,r,i){var o,a,u=null,s=null,c=[e,t,n,r,i],l=c.filter(Ce.isString);void 0!==l[0]&&void 0!==l[1]&&(u=l[0],s=l[1]),1===l.length&&(u=null,s=l[0]);var f=c.find(Ce.isFunction),d=c.filter((function(e){return null===s?(0,Ce.isPlainObject)(e):(0,Ce.isPlainObject)(e)||null===e})),p=null!==(o=d[0])&&void 0!==o?o:{},h=null!==(a=d[1])&&void 0!==a?a:{};return[u,s,p,h,f]};Q.resolveUserArguments=function(e){return function(){for(var t,n,r,i,o,a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];var s;s=null!==(r=null!==(t=a.find(Ce.isString))&&void 0!==t?t:null===(n=a.find(Ce.isNumber))||void 0===n?void 0:n.toString())&&void 0!==r?r:e.id();var c=a.filter((function(e){return null===s?(0,Ce.isPlainObject)(e):(0,Ce.isPlainObject)(e)||null===e})),l=null!==(i=c[0])&&void 0!==i?i:{},f=null!==(o=c[1])&&void 0!==o?o:{},d=a.find(Ce.isFunction);return[s,l,f,d]}},Q.resolveAliasArguments=function(e,t,n,r){(0,Ce.isNumber)(e)&&(e=e.toString()),(0,Ce.isNumber)(t)&&(t=t.toString());var i=[e,t,n,r],o=i.filter(Ce.isString),a=o[0],u=void 0===a?e:a,s=o[1],c=void 0===s?null:s,l=i.filter(Ce.isPlainObject)[0];return[u,c,void 0===l?{}:l,i.find(Ce.isFunction)]};var Te,Fe={},De={};function Ne(){if(Te)return De;function e(){return"undefined"!=typeof window}return Te=1,Object.defineProperty(De,"__esModule",{value:!0}),De.isServer=De.isBrowser=void 0,De.isBrowser=e,De.isServer=function(){return!e()},De}Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.isOffline=Fe.isOnline=void 0;var Re=Ne();function Ue(){return!(0,Re.isBrowser)()||window.navigator.onLine}Fe.isOnline=Ue,Fe.isOffline=function(){return!Ue()};var Le={},Be={},qe={},ze={};Object.defineProperty(ze,"__esModule",{value:!0}),ze.version=void 0,ze.version="1.53.4";var Ve,Ke={},Ge={exports:{}};function He(){return Ve||(Ve=1,Ge.exports=function(){function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function t(n,r){function i(t,i,o){if("undefined"!=typeof document){"number"==typeof(o=e({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var u in o)o[u]&&(a+="; "+u,!0!==o[u]&&(a+="="+o[u].split(";")[0]));return document.cookie=t+"="+n.write(i,t)+a}}function o(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},i=0;i<t.length;i++){var o=t[i].split("="),a=o.slice(1).join("=");try{var u=decodeURIComponent(o[0]);if(r[u]=n.read(a,u),e===u)break}catch(e){}}return e?r[e]:r}}return Object.create({set:i,get:o,remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()),Ge.exports}var Je,Qe={};function We(){if(Je)return Qe;return Je=1,Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.gracefulDecodeURIComponent=void 0,Qe.gracefulDecodeURIComponent=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},Qe}var Ye,$e={};function Ze(){if(Ye)return $e;Ye=1,Object.defineProperty($e,"__esModule",{value:!0}),$e.tld=void 0;var e=D.__importDefault(He());return $e.tld=function(t){var n=function(e){try{return new URL(e)}catch(e){return}}(t);if(n)for(var r=function(e){var t=e.hostname.split("."),n=t[t.length-1],r=[];if(4===t.length&&parseInt(n,10)>0)return r;if(t.length<=1)return r;for(var i=t.length-2;i>=0;--i)r.push(t.slice(i).join("."));return r}(n),i=0;i<r.length;++i){var o="__tld__",a=r[i],u={domain:"."+a};try{if(e.default.set(o,"1",u),e.default.get(o))return e.default.remove(o,u),a}catch(e){return}}},$e}for(var Xe,et={},tt={},nt=256,rt=[];nt--;)rt[nt]=(nt+256).toString(16).substring(1);tt.v4=function(){var e,t=0,n="";if(!Xe||nt+16>256){for(Xe=Array(t=256);t--;)Xe[t]=256*Math.random()|0;t=nt=0}for(;t<16;t++)e=Xe[nt+t],n+=6==t?rt[15&e|64]:8==t?rt[63&e|128]:rt[e],1&t&&t>1&&t<11&&(n+="-");return nt++,n};var it,ot={};function at(){if(it)return ot;return it=1,Object.defineProperty(ot,"__esModule",{value:!0}),ot.default=function(e){for(var t=e.constructor.prototype,n=0,r=Object.getOwnPropertyNames(t);n<r.length;n++){var i=r[n];if("constructor"!==i){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);o&&"function"==typeof o.value&&(e[i]=e[i].bind(e))}}return e},ot}Object.defineProperty(et,"__esModule",{value:!0}),et.Group=et.User=et.getAvailableStorageOptions=et.UniversalStorage=et.LocalStorage=et.Cookie=void 0;var ut=D,st=tt,ct=ut.__importDefault(He()),lt=Ze(),ft=ut.__importDefault(at()),dt={persist:!0,cookie:{key:"ajs_user_id",oldKey:"ajs_user"},localStorage:{key:"ajs_user_traits"}},pt=function(){function e(){this.cache={}}return e.prototype.get=function(e){return this.cache[e]},e.prototype.set=function(e,t){this.cache[e]=t},e.prototype.remove=function(e){delete this.cache[e]},Object.defineProperty(e.prototype,"type",{get:function(){return"memory"},enumerable:!1,configurable:!0}),e}(),ht=function(e){function t(n){void 0===n&&(n=t.defaults);var r=e.call(this)||this;return r.options=ut.__assign(ut.__assign({},t.defaults),n),r}return ut.__extends(t,e),t.available=function(){try{var e="ajs_cookies_check";ct.default.set(e,"test");var t=document.cookie.includes(e);return ct.default.remove(e),t}catch(e){return!1}},Object.defineProperty(t,"defaults",{get:function(){return{maxage:365,domain:(0,lt.tld)(window.location.href),path:"/",sameSite:"Lax"}},enumerable:!1,configurable:!0}),t.prototype.opts=function(){return{sameSite:this.options.sameSite,expires:this.options.maxage,domain:this.options.domain,path:this.options.path,secure:this.options.secure}},t.prototype.get=function(e){try{var t=ct.default.get(e);if(!t)return null;try{return JSON.parse(t)}catch(e){return t}}catch(e){return null}},t.prototype.set=function(e,t){"string"==typeof t?ct.default.set(e,t,this.opts()):null===t?ct.default.remove(e,this.opts()):ct.default.set(e,JSON.stringify(t),this.opts())},t.prototype.remove=function(e){return ct.default.remove(e,this.opts())},Object.defineProperty(t.prototype,"type",{get:function(){return"cookie"},enumerable:!1,configurable:!0}),t}(pt);et.Cookie=ht;var vt=function(e,t){console.warn("Unable to access ".concat(e,", localStorage may be ").concat(t))},yt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ut.__extends(t,e),t.available=function(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}},t.prototype.get=function(e){try{var t=localStorage.getItem(e);if(null===t)return null;try{return JSON.parse(t)}catch(e){return t}}catch(t){return vt(e,"unavailable"),null}},t.prototype.set=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(t){vt(e,"full")}},t.prototype.remove=function(e){try{return localStorage.removeItem(e)}catch(t){vt(e,"unavailable")}},Object.defineProperty(t.prototype,"type",{get:function(){return"localStorage"},enumerable:!1,configurable:!0}),t}(pt);et.LocalStorage=yt;var gt=function(){function e(e,t){this.storageOptions=t,this.enabledStores=e}return e.prototype.getStores=function(e){var t=this,n=[];return this.enabledStores.filter((function(t){return!e||(null==e?void 0:e.includes(t))})).forEach((function(e){var r=t.storageOptions[e];void 0!==r&&n.push(r)})),n},e.prototype.getAndSync=function(e,t){var n=this.get(e,t),r="number"==typeof n?n.toString():n;return this.set(e,r,t),r},e.prototype.get=function(e,t){for(var n=null,r=0,i=this.getStores(t);r<i.length;r++){if(n=i[r].get(e))return n}return null},e.prototype.set=function(e,t,n){for(var r=0,i=this.getStores(n);r<i.length;r++){i[r].set(e,t)}},e.prototype.clear=function(e,t){for(var n=0,r=this.getStores(t);n<r.length;n++){r[n].remove(e)}},e}();function _t(e){return{cookie:ht.available()?new ht(e):void 0,localStorage:yt.available()?new yt:void 0,memory:new pt}}et.UniversalStorage=gt,et.getAvailableStorageOptions=_t;var mt=function(){function e(e,t){void 0===e&&(e=dt);var n,r,i,o,a=this;this.options={},this.id=function(e){if(a.options.disable)return null;var t=a.identityStore.getAndSync(a.idKey);void 0!==e&&(a.identityStore.set(a.idKey,e),e!==t&&null!==t&&null!==e&&a.anonymousId(null));var n=a.identityStore.getAndSync(a.idKey);if(n)return n;var r=a.legacyUserStore.get(dt.cookie.oldKey);return r?"object"==typeof r?r.id:r:null},this.anonymousId=function(e){var t,n;if(a.options.disable)return null;if(void 0===e){var r=null!==(t=a.identityStore.getAndSync(a.anonKey))&&void 0!==t?t:null===(n=a.legacySIO())||void 0===n?void 0:n[0];if(r)return r}return null===e?(a.identityStore.set(a.anonKey,null),a.identityStore.getAndSync(a.anonKey)):(a.identityStore.set(a.anonKey,null!=e?e:(0,st.v4)()),a.identityStore.getAndSync(a.anonKey))},this.traits=function(e){var t;if(!a.options.disable)return null===e&&(e={}),e&&a.traitsStore.set(a.traitsKey,null!=e?e:{}),null!==(t=a.traitsStore.get(a.traitsKey))&&void 0!==t?t:{}},this.options=e,this.cookieOptions=t,this.idKey=null!==(r=null===(n=e.cookie)||void 0===n?void 0:n.key)&&void 0!==r?r:dt.cookie.key,this.traitsKey=null!==(o=null===(i=e.localStorage)||void 0===i?void 0:i.key)&&void 0!==o?o:dt.localStorage.key,this.anonKey="ajs_anonymous_id";var u=!0===e.disable,s=!1!==e.persist,c=u?[]:s?["localStorage","cookie","memory"]:["memory"],l=_t(t);e.localStorageFallbackDisabled&&(c=c.filter((function(e){return"localStorage"!==e}))),this.identityStore=new gt(c,l),this.legacyUserStore=new gt(c.filter((function(e){return"localStorage"!==e&&"memory"!==e})),l),this.traitsStore=new gt(c.filter((function(e){return"cookie"!==e})),l);var f=this.legacyUserStore.get(dt.cookie.oldKey);f&&"object"==typeof f&&(f.id&&this.id(f.id),f.traits&&this.traits(f.traits)),(0,ft.default)(this)}return e.prototype.legacySIO=function(){var e=this.legacyUserStore.get("_sio");if(!e)return null;var t=e.split("----");return[t[0],t[1]]},e.prototype.identify=function(e,t){if(!this.options.disable){t=null!=t?t:{};var n=this.id();null!==n&&n!==e||(t=ut.__assign(ut.__assign({},this.traits()),t)),e&&this.id(e),this.traits(t)}},e.prototype.logout=function(){this.anonymousId(null),this.id(null),this.traits({})},e.prototype.reset=function(){this.logout(),this.identityStore.clear(this.idKey),this.identityStore.clear(this.anonKey),this.traitsStore.clear(this.traitsKey)},e.prototype.load=function(){return new e(this.options,this.cookieOptions)},e.prototype.save=function(){return!0},e.defaults=dt,e}();et.User=mt;var bt,wt={persist:!0,cookie:{key:"ajs_group_id"},localStorage:{key:"ajs_group_properties"}},Pt=function(e){function t(t,n){void 0===t&&(t=wt);var r=e.call(this,t,n)||this;return r.anonymousId=function(e){},(0,ft.default)(r),r}return ut.__extends(t,e),t}(mt);function St(){if(bt)return Ke;bt=1,Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.normalize=Ke.utm=Ke.ampId=Ke.getVersionType=Ke.setVersionType=void 0;var e,t=D,n=t.__importDefault(He()),r=We(),i=Ze(),o=ze,a=et;var u="npm";function s(){return u}function c(){var e=n.default.get("_ga");if(e&&e.startsWith("amp"))return e}function l(e){return e.startsWith("?")&&(e=e.substring(1)),(e=e.replace(/\?/g,"&")).split("&").reduce((function(e,t){var n=t.split("="),i=n[0],o=n[1],a=void 0===o?"":o;if(i.includes("utm_")&&i.length>4){var u=i.substr(4);"campaign"===u&&(u="name"),e[u]=(0,r.gracefulDecodeURIComponent)(a)}return e}),{})}function f(n,r,o){var u=new a.UniversalStorage(o?[]:["cookie"],(0,a.getAvailableStorageOptions)(function(){if(e)return e;var t=(0,i.tld)(window.location.href);return e={expires:31536e6,secure:!1,path:"/"},t&&(e.domain=t),e}())),s=u.get("s:context.referrer"),c=function(e){var t={btid:"dataxu",urid:"millennial-media"};e.startsWith("?")&&(e=e.substring(1));for(var n=0,r=(e=e.replace(/\?/g,"&")).split("&");n<r.length;n++){var i=r[n].split("="),o=i[0],a=i[1];if(t[o])return{id:a,type:t[o]}}}(n);(c=null!=c?c:s)&&(r&&(r.referrer=t.__assign(t.__assign({},r.referrer),c)),u.set("s:context.referrer",c))}return Ke.setVersionType=function(e){u=e},Ke.getVersionType=s,Ke.ampId=c,Ke.utm=l,Ke.normalize=function(e,n,r,i){var a,u,d,p,h,v,y=e.user();n.context=null!==(u=null!==(a=n.context)&&void 0!==a?a:n.options)&&void 0!==u?u:{};var g=n.context,_="string"==typeof(null===(d=g.page)||void 0===d?void 0:d.search)?null===(p=g.page)||void 0===p?void 0:p.search:"";delete n.options,n.writeKey=null==r?void 0:r.apiKey,g.userAgent=navigator.userAgent;var m=navigator.userLanguage||navigator.language;if(void 0===g.locale&&void 0!==m&&(g.locale=m),!g.library){var b=s();g.library="web"===b?{name:"analytics.js",version:"next-".concat(o.version)}:{name:"analytics.js",version:"npm:next-".concat(o.version)}}_&&!g.campaign&&(g.campaign=l(_)),f(_,g,null!==(h=e.options.disableClientPersistence)&&void 0!==h&&h),n.userId=n.userId||y.id(),n.anonymousId=n.anonymousId||y.anonymousId(),n.sentAt=new Date;var w=e.queue.failedInitializations||[];w.length>0&&(n._metadata={failedInitializations:w});var P=[],S=[];for(var O in i){var j=i[O];"Segment.io"===O&&P.push(O),"bundled"===j.bundlingStatus&&P.push(O),"unbundled"===j.bundlingStatus&&S.push(O)}for(var k=0,x=(null==r?void 0:r.unbundledIntegrations)||[];k<x.length;k++){var I=x[k];S.includes(I)||S.push(I)}var A=null!==(v=null==r?void 0:r.maybeBundledConfigIds)&&void 0!==v?v:{},E=[];P.sort().forEach((function(e){var t;(null!==(t=A[e])&&void 0!==t?t:[]).forEach((function(e){E.push(e)}))})),!1!==(null==r?void 0:r.addBundledMetadata)&&(n._metadata=t.__assign(t.__assign({},n._metadata),{bundled:P.sort(),unbundled:S.sort(),bundledIds:E}));var M=c();return M&&(g.amp={id:M}),n},Ke}et.Group=Pt;var Ot,jt={};function kt(){return Ot||(Ot=1,Object.defineProperty(jt,"__esModule",{value:!0}),jt.SEGMENT_API_HOST=void 0,jt.SEGMENT_API_HOST="api.segment.io/v1"),jt}Object.defineProperty(qe,"__esModule",{value:!0}),qe.RemoteMetrics=void 0;var xt=D,It=L,At=ze,Et=St(),Mt=kt();function Ct(e){console.error("Error sending segment performance metrics",e)}var Tt=function(){function e(e){var t,n,r,i,o=this;if(this.host=null!==(t=null==e?void 0:e.host)&&void 0!==t?t:Mt.SEGMENT_API_HOST,this.sampleRate=null!==(n=null==e?void 0:e.sampleRate)&&void 0!==n?n:1,this.flushTimer=null!==(r=null==e?void 0:e.flushTimer)&&void 0!==r?r:3e4,this.maxQueueSize=null!==(i=null==e?void 0:e.maxQueueSize)&&void 0!==i?i:20,this.queue=[],this.sampleRate>0){var a=!1,u=function(){a||(a=!0,o.flush().catch(Ct),a=!1,setTimeout(u,o.flushTimer))};u()}}return e.prototype.increment=function(e,t){if(e.includes("analytics_js.")&&0!==t.length&&!(Math.random()>this.sampleRate||this.queue.length>=this.maxQueueSize)){var n=function(e,t,n){var r=t.reduce((function(e,t){var n=t.split(":"),r=n[0],i=n[1];return e[r]=i,e}),{});return{type:"Counter",metric:e,value:1,tags:xt.__assign(xt.__assign({},r),{library:"analytics.js",library_version:"web"===n?"next-".concat(At.version):"npm:next-".concat(At.version)})}}(e,t,(0,Et.getVersionType)());this.queue.push(n),e.includes("error")&&this.flush().catch(Ct)}},e.prototype.flush=function(){return xt.__awaiter(this,void 0,void 0,(function(){var e=this;return xt.__generator(this,(function(t){switch(t.label){case 0:return this.queue.length<=0?[2]:[4,this.send().catch((function(t){Ct(t),e.sampleRate=0}))];case 1:return t.sent(),[2]}}))}))},e.prototype.send=function(){return xt.__awaiter(this,void 0,void 0,(function(){var e,t,n;return xt.__generator(this,(function(r){return e={series:this.queue},this.queue=[],t={"Content-Type":"text/plain"},n="https://".concat(this.host,"/m"),[2,(0,It.fetch)(n,{headers:t,body:JSON.stringify(e),method:"POST"})]}))}))},e}();qe.RemoteMetrics=Tt,Object.defineProperty(Be,"__esModule",{value:!0}),Be.Stats=void 0;var Ft,Dt=D,Nt=qe,Rt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Dt.__extends(t,e),t.initRemoteMetrics=function(e){Ft=new Nt.RemoteMetrics(e)},t.prototype.increment=function(t,n,r){e.prototype.increment.call(this,t,n,r),null==Ft||Ft.increment(t,null!=r?r:[])},t}(Me.CoreStats);Be.Stats=Rt,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ContextCancelation=e.Context=void 0;var t=D,n=Me;Object.defineProperty(e,"ContextCancelation",{enumerable:!0,get:function(){return n.ContextCancelation}});var r=Be,i=function(e){function n(t,n){return e.call(this,t,n,new r.Stats)||this}return t.__extends(n,e),n.system=function(){return new this({type:"track",event:"system"})},n}(n.CoreContext);e.Context=i}(Le);var Ut={},Lt={};Lt.dset=function(e,t,n){t.split&&(t=t.split("."));for(var r,i,o=0,a=t.length,u=e;o<a&&"__proto__"!==(i=t[o++])&&"constructor"!==i&&"prototype"!==i;)u=u[i]=o===a?n:typeof(r=u[i])==typeof t?r:0*t[o]!=0||~(""+t[o]).indexOf(".")?{}:[]};var Bt,qt={exports:{}};function zt(){return Bt?qt.exports:(Bt=1,qt.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function n(e,t){var n=e[0],r=e[1],i=e[2],o=e[3];r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+t[1]-389564586|0)<<12|o>>>20)+n|0)&n|~o&r)+t[2]+606105819|0)<<17|i>>>15)+o|0)&o|~i&n)+t[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+t[5]+1200080426|0)<<12|o>>>20)+n|0)&n|~o&r)+t[6]-1473231341|0)<<17|i>>>15)+o|0)&o|~i&n)+t[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+t[9]-1958414417|0)<<12|o>>>20)+n|0)&n|~o&r)+t[10]-42063|0)<<17|i>>>15)+o|0)&o|~i&n)+t[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+t[13]-40341101|0)<<12|o>>>20)+n|0)&n|~o&r)+t[14]-1502002290|0)<<17|i>>>15)+o|0)&o|~i&n)+t[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+t[6]-1069501632|0)<<9|o>>>23)+n|0)&r|n&~r)+t[11]+643717713|0)<<14|i>>>18)+o|0)&n|o&~n)+t[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+t[10]+38016083|0)<<9|o>>>23)+n|0)&r|n&~r)+t[15]-660478335|0)<<14|i>>>18)+o|0)&n|o&~n)+t[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+t[14]-1019803690|0)<<9|o>>>23)+n|0)&r|n&~r)+t[3]-187363961|0)<<14|i>>>18)+o|0)&n|o&~n)+t[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+t[2]-51403784|0)<<9|o>>>23)+n|0)&r|n&~r)+t[7]+1735328473|0)<<14|i>>>18)+o|0)&n|o&~n)+t[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+t[8]-2022574463|0)<<11|o>>>21)+n|0)^n^r)+t[11]+1839030562|0)<<16|i>>>16)+o|0)^o^n)+t[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+t[4]+1272893353|0)<<11|o>>>21)+n|0)^n^r)+t[7]-155497632|0)<<16|i>>>16)+o|0)^o^n)+t[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+t[0]-358537222|0)<<11|o>>>21)+n|0)^n^r)+t[3]-722521979|0)<<16|i>>>16)+o|0)^o^n)+t[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+t[12]-421815835|0)<<11|o>>>21)+n|0)^n^r)+t[15]+530742520|0)<<16|i>>>16)+o|0)^o^n)+t[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+t[7]+1126891415|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[14]-1416354905|0)<<15|i>>>17)+o|0)|~n))+t[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+t[3]-1894986606|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[10]-1051523|0)<<15|i>>>17)+o|0)|~n))+t[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+t[15]-30611744|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[6]-1560198380|0)<<15|i>>>17)+o|0)|~n))+t[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+t[11]-1120210379|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[2]+718787259|0)<<15|i>>>17)+o|0)|~n))+t[9]-343485551|0)<<21|r>>>11)+i|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}function r(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function i(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function o(e){var t,i,o,a,u,s,c=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=c;t+=64)n(l,r(e.substring(t-64,t)));for(i=(e=e.substring(t-64)).length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<i;t+=1)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(n(l,o),t=0;t<16;t+=1)o[t]=0;return a=(a=8*c).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(a[2],16),s=parseInt(a[1],16)||0,o[14]=u,o[15]=s,n(l,o),l}function a(e){var t,r,o,a,u,s,c=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=c;t+=64)n(l,i(e.subarray(t-64,t)));for(r=(e=t-64<c?e.subarray(t-64):new Uint8Array(0)).length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<r;t+=1)o[t>>2]|=e[t]<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(n(l,o),t=0;t<16;t+=1)o[t]=0;return a=(a=8*c).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(a[2],16),s=parseInt(a[1],16)||0,o[14]=u,o[15]=s,n(l,o),l}function u(e){var n,r="";for(n=0;n<4;n+=1)r+=t[e>>8*n+4&15]+t[e>>8*n&15];return r}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=u(e[t]);return e.join("")}function c(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function l(e,t){var n,r=e.length,i=new ArrayBuffer(r),o=new Uint8Array(i);for(n=0;n<r;n+=1)o[n]=e.charCodeAt(n);return t?o:i}function f(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function d(e,t,n){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),n?r:r.buffer}function p(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function h(){this.reset()}return s(o("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(n,r){var i,o,a,u,s=this.byteLength,c=t(n,s),l=s;return r!==e&&(l=t(r,s)),c>l?new ArrayBuffer(0):(i=l-c,o=new ArrayBuffer(i),a=new Uint8Array(o),u=new Uint8Array(this,c,i),a.set(u),o)}}(),h.prototype.append=function(e){return this.appendBinary(c(e)),this},h.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,i=this._buff.length;for(t=64;t<=i;t+=64)n(this._hash,r(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},h.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=p(n)),this.reset(),n},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},h.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(e,t){var r,i,o,a=t;if(e[a>>2]|=128<<(a%4<<3),a>55)for(n(this._hash,e),a=0;a<16;a+=1)e[a]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),i=parseInt(r[2],16),o=parseInt(r[1],16)||0,e[14]=i,e[15]=o,n(this._hash,e)},h.hash=function(e,t){return h.hashBinary(c(e),t)},h.hashBinary=function(e,t){var n=s(o(e));return t?p(n):n},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(e){var t,r=d(this._buff.buffer,e,!0),o=r.length;for(this._length+=e.byteLength,t=64;t<=o;t+=64)n(this._hash,i(r.subarray(t-64,t)));return this._buff=t-64<o?new Uint8Array(r.buffer.slice(t-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r[t]<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=p(n)),this.reset(),n},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var e=h.prototype.getState.call(this);return e.buff=f(e.buff),e},h.ArrayBuffer.prototype.setState=function(e){return e.buff=l(e.buff,!0),h.prototype.setState.call(this,e)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(e,t){var n=s(a(new Uint8Array(e)));return t?p(n):n},h}())}var Vt,Kt={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.EventFactory=void 0;var t=D,n=tt,r=Lt,i=t.__importDefault(zt());t.__exportStar((Vt||(Vt=1,Object.defineProperty(Kt,"__esModule",{value:!0})),Kt),e);var o=function(){function e(e){this.user=e}return e.prototype.track=function(e,n,r,i){return this.normalize(t.__assign(t.__assign({},this.baseEvent()),{event:e,type:"track",properties:n,options:t.__assign({},r),integrations:t.__assign({},i)}))},e.prototype.page=function(e,n,r,i,o){var a,u={type:"page",properties:t.__assign({},r),options:t.__assign({},i),integrations:t.__assign({},o)};return null!==e&&(u.category=e,u.properties=null!==(a=u.properties)&&void 0!==a?a:{},u.properties.category=e),null!==n&&(u.name=n),this.normalize(t.__assign(t.__assign({},this.baseEvent()),u))},e.prototype.screen=function(e,n,r,i,o){var a={type:"screen",properties:t.__assign({},r),options:t.__assign({},i),integrations:t.__assign({},o)};return null!==e&&(a.category=e),null!==n&&(a.name=n),this.normalize(t.__assign(t.__assign({},this.baseEvent()),a))},e.prototype.identify=function(e,n,r,i){return this.normalize(t.__assign(t.__assign({},this.baseEvent()),{type:"identify",userId:e,traits:n,options:t.__assign({},r),integrations:t.__assign({},i)}))},e.prototype.group=function(e,n,r,i){return this.normalize(t.__assign(t.__assign({},this.baseEvent()),{type:"group",traits:n,options:t.__assign({},r),integrations:t.__assign({},i),groupId:e}))},e.prototype.alias=function(e,n,r,i){var o={userId:e,type:"alias",options:t.__assign({},r),integrations:t.__assign({},i)};return null!==n&&(o.previousId=n),void 0===e?this.normalize(t.__assign(t.__assign({},o),this.baseEvent())):this.normalize(t.__assign(t.__assign({},this.baseEvent()),o))},e.prototype.baseEvent=function(){var e={integrations:{},options:{}},t=this.user;return t.id()&&(e.userId=t.id()),t.anonymousId()&&(e.anonymousId=t.anonymousId()),e},e.prototype.context=function(e){var t,n,i,o=["integrations","anonymousId","timestamp","userId"],a=null!==(t=e.options)&&void 0!==t?t:{};delete a.integrations;var u=Object.keys(a),s=null!==(i=null===(n=e.options)||void 0===n?void 0:n.context)&&void 0!==i?i:{},c={};return u.forEach((function(e){"context"!==e&&(o.includes(e)?(0,r.dset)(c,e,a[e]):(0,r.dset)(s,e,a[e]))})),[s,c]},e.prototype.normalize=function(e){var r,o,a;(null===(r=e.options)||void 0===r?void 0:r.anonymousId)&&this.user.anonymousId(e.options.anonymousId);var u=Object.keys(null!==(o=e.integrations)&&void 0!==o?o:{}).reduce((function(n,r){var i,o;return t.__assign(t.__assign({},n),((i={})[r]=Boolean(null===(o=e.integrations)||void 0===o?void 0:o[r]),i))}),{}),s=t.__assign(t.__assign({},u),null===(a=e.options)||void 0===a?void 0:a.integrations),c=this.context(e),l=c[0],f=c[1];e.options;var d=t.__rest(e,["options"]),p=t.__assign(t.__assign(t.__assign({timestamp:new Date},d),{context:l,integrations:s}),f),h="ajs-next-"+i.default.hash(JSON.stringify(p)+(0,n.v4)());return t.__assign(t.__assign({},p),{messageId:h})},e}();e.EventFactory=o}(Ut);var Gt={},Ht={},Jt={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ON_REMOVE_FROM_FUTURE=e.PriorityQueue=void 0;var t=Me;Object.defineProperty(e,"PriorityQueue",{enumerable:!0,get:function(){return t.PriorityQueue}}),Object.defineProperty(e,"ON_REMOVE_FROM_FUTURE",{enumerable:!0,get:function(){return t.ON_REMOVE_FROM_FUTURE}})}(Jt),Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.PersistedPriorityQueue=void 0;var Qt=D,Wt=Jt,Yt=Le,$t=Ne(),Zt={getItem:function(){},setItem:function(){},removeItem:function(){}};try{Zt=(0,$t.isBrowser)()&&window.localStorage?window.localStorage:Zt}catch(e){console.warn("Unable to access localStorage",e)}function Xt(e){var t=Zt.getItem(e);return(t?JSON.parse(t):[]).map((function(e){return new Yt.Context(e.event,e.id)}))}function en(e){var t=Zt.getItem(e);return t?JSON.parse(t):{}}function tn(e){Zt.removeItem(e)}function nn(e,t,n){void 0===n&&(n=0);var r="persisted-queue:v1:".concat(e,":lock"),i=Zt.getItem(r),o=i?JSON.parse(i):null,a=null===o||function(e){return(new Date).getTime()>e}(o);if(a)return Zt.setItem(r,JSON.stringify((new Date).getTime()+50)),t(),void Zt.removeItem(r);!a&&n<3?setTimeout((function(){nn(e,t,n+1)}),50):console.error("Unable to retrieve lock")}var rn=function(e){function t(t,n){var r=e.call(this,t,[])||this,i="persisted-queue:v1:".concat(n,":items"),o="persisted-queue:v1:".concat(n,":seen"),a=[],u={};return nn(n,(function(){try{a=Xt(i),u=en(o),tn(i),tn(o),r.queue=Qt.__spreadArray(Qt.__spreadArray([],a,!0),r.queue,!0),r.seen=Qt.__assign(Qt.__assign({},u),r.seen)}catch(e){console.error(e)}})),window.addEventListener("pagehide",(function(){if(r.todo>0){var e=Qt.__spreadArray(Qt.__spreadArray([],r.queue,!0),r.future,!0);try{nn(n,(function(){!function(e,t){var n=Xt(e),r=Qt.__spreadArray(Qt.__spreadArray([],t,!0),n,!0).reduce((function(e,t){var n;return Qt.__assign(Qt.__assign({},e),((n={})[t.id]=t,n))}),{});Zt.setItem(e,JSON.stringify(Object.values(r)))}(i,e),function(e,t){var n=en(e);Zt.setItem(e,JSON.stringify(Qt.__assign(Qt.__assign({},n),t)))}(o,r.seen)}))}catch(e){console.error(e)}}})),r}return Qt.__extends(t,e),t}(Wt.PriorityQueue);Ht.PersistedPriorityQueue=rn,Object.defineProperty(Gt,"__esModule",{value:!0}),Gt.EventQueue=void 0;var on=D,an=Ht,un=Fe,sn=function(e){function t(t){return e.call(this,"string"==typeof t?new an.PersistedPriorityQueue(4,t):t)||this}return on.__extends(t,e),t.prototype.flush=function(){return on.__awaiter(this,void 0,void 0,(function(){return on.__generator(this,(function(t){return(0,un.isOffline)()?[2,[]]:[2,e.prototype.flush.call(this)]}))}))},t}(Me.CoreEventQueue);Gt.EventQueue=sn;var cn,ln,fn={},dn={};function pn(){if(ln)return fn;ln=1,Object.defineProperty(fn,"__esModule",{value:!0}),fn.form=fn.link=void 0;var e=(cn||(cn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.pTimeout=e.invokeCallback=void 0;var t=Me;Object.defineProperty(e,"invokeCallback",{enumerable:!0,get:function(){return t.invokeCallback}}),Object.defineProperty(e,"pTimeout",{enumerable:!0,get:function(){return t.pTimeout}})}(dn)),dn);return fn.link=function(t,n,r,i){var o=this;return t?((t instanceof Element?[t]:"toArray"in t?t.toArray():t).forEach((function(t){t.addEventListener("click",(function(a){var u,s,c=n instanceof Function?n(t):n,l=r instanceof Function?r(t):r,f=t.getAttribute("href")||t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("xlink:href")||(null===(u=t.getElementsByTagName("a")[0])||void 0===u?void 0:u.getAttribute("href")),d=(0,e.pTimeout)(o.track(c,l,null!=i?i:{}),null!==(s=o.settings.timeout)&&void 0!==s?s:500);(function(e,t){return!("_blank"!==e.target||!t)})(t,f)||function(e){var t=e;return!!(t.ctrlKey||t.shiftKey||t.metaKey||t.button&&1==t.button)}(a)||f&&(a.preventDefault?a.preventDefault():a.returnValue=!1,d.catch(console.error).then((function(){window.location.href=f})).catch(console.error))}),!1)})),this):this},fn.form=function(t,n,r,i){var o=this;return t?(t instanceof HTMLFormElement&&(t=[t]),t.forEach((function(t){if(!(t instanceof Element))throw new TypeError("Must pass HTMLElement to trackForm/trackSubmit.");var a=function(a){var u;a.preventDefault?a.preventDefault():a.returnValue=!1;var s=n instanceof Function?n(t):n,c=r instanceof Function?r(t):r;(0,e.pTimeout)(o.track(s,c,null!=i?i:{}),null!==(u=o.settings.timeout)&&void 0!==u?u:500).catch(console.error).then((function(){t.submit()})).catch(console.error)},u=window.jQuery||window.Zepto;u?u(t).submit(a):t.addEventListener("submit",a,!1)})),this):this},fn}var hn,vn,yn={},gn={},_n={},mn={},bn={},wn={exports:{}};function Pn(){return hn||(hn=1,function(e){function t(e){return function(t,n,r,o){var a,u=o&&function(e){return"function"==typeof e}(o.normalizer)?o.normalizer:i;n=u(n);for(var s=!1;!s;)c();function c(){for(a in t){var e=u(a);if(0===n.indexOf(e)){var r=n.substr(e.length);if("."===r.charAt(0)||0===r.length){n=r.substr(1);var i=t[a];return null==i?void(s=!0):n.length?void(t=i):void(s=!0)}}}a=void 0,s=!0}if(a)return null==t?t:e(t,a,r)}}function n(e,t){return e.hasOwnProperty(t)&&delete e[t],e}function r(e,t,n){return e.hasOwnProperty(t)&&(e[t]=n),e}function i(e){return e.replace(/[^a-zA-Z0-9\.]+/g,"").toLowerCase()}e.exports=t((function(e,t){if(e.hasOwnProperty(t))return e[t]})),e.exports.find=e.exports,e.exports.replace=function(e,n,i,o){return t(r).call(this,e,n,i,o),e},e.exports.del=function(e,r,i){return t(n).call(this,e,r,null,i),e}}(wn)),wn.exports}var Sn,On={};var jn,kn={};var xn,In={};function An(){if(xn)return In;xn=1;var e=/^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;return In.parse=function(t){var n=[1,5,6,7,11,12],r=e.exec(t),i=0;if(!r)return new Date(t);for(var o,a=0;o=n[a];a++)r[o]=parseInt(r[o],10)||0;r[2]=parseInt(r[2],10)||1,r[3]=parseInt(r[3],10)||1,r[2]--,r[8]=r[8]?(r[8]+"00").substring(0,3):0," "===r[4]?i=(new Date).getTimezoneOffset():"Z"!==r[9]&&r[10]&&(i=60*r[11]+r[12],"+"===r[10]&&(i=0-i));var u=Date.UTC(r[1],r[2],r[3],r[5],r[6]+i,r[7],r[8]);return new Date(u)},In.is=function(t,n){return"string"==typeof t&&((!n||!1!==/^\d{4}-\d{2}-\d{2}/.test(t))&&e.test(t))},In}var En,Mn={};function Cn(){if(En)return Mn;En=1;var e=/\d{13}/;return Mn.is=function(t){return e.test(t)},Mn.parse=function(e){return e=parseInt(e,10),new Date(e)},Mn}var Tn,Fn,Dn,Nn,Rn,Un,Ln={};function Bn(){if(Tn)return Ln;Tn=1;var e=/\d{10}/;return Ln.is=function(t){return e.test(t)},Ln.parse=function(e){var t=1e3*parseInt(e,10);return new Date(t)},Ln}function qn(){if(Dn)return Fn;Dn=1;var e=An(),t=Cn(),n=Bn(),r=Object.prototype.toString;return Fn=function(i){return o=i,"[object Date]"===r.call(o)?i:function(e){return"[object Number]"===r.call(e)}(i)?new Date((a=i)<315576e5?1e3*a:a):e.is(i)?e.parse(i):t.is(i)?t.parse(i):n.is(i)?n.parse(i):new Date(i);var o,a}}function zn(){if(Rn)return Nn;Rn=1;var e=An();function t(n,r){return void 0===r&&(r=!0),n&&"object"==typeof n?function(e,n){return Object.keys(e).forEach((function(r){e[r]=t(e[r],n)})),e}(n,r):Array.isArray(n)?function(e,n){return e.forEach((function(r,i){e[i]=t(r,n)})),e}(n,r):e.is(n,r)?e.parse(n):n}return Nn=t}function Vn(){if(Un)return mn;Un=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mn,"__esModule",{value:!0}),mn.Facade=void 0;var n=t(function(){if(vn)return bn;vn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bn,"__esModule",{value:!0});var n=t(Pn());function r(e,t){return function(){var r=this.traits(),i=this.properties?this.properties():{};return n.default(r,"address."+e)||n.default(r,e)||(t?n.default(r,"address."+t):null)||(t?n.default(r,t):null)||n.default(i,"address."+e)||n.default(i,e)||(t?n.default(i,"address."+t):null)||(t?n.default(i,t):null)}}return bn.default=function(e){e.zip=r("postalCode","zip"),e.country=r("country"),e.street=r("street"),e.state=r("state"),e.city=r("city"),e.region=r("region")},bn}()),r=(Sn||(Sn=1,Object.defineProperty(On,"__esModule",{value:!0}),On.clone=void 0,On.clone=function e(t){if("object"!=typeof t)return t;if("[object Object]"===Object.prototype.toString.call(t)){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=e(t[r]));return n}return Array.isArray(t)?t.map(e):t}),On),i=t(function(){if(jn)return kn;jn=1,Object.defineProperty(kn,"__esModule",{value:!0});var e={Salesforce:!0};return kn.default=function(t){return!e[t]},kn}()),o=t(qn()),a=t(Pn()),u=t(zn());function s(e,t){t=t||{},this.raw=r.clone(e),"clone"in t||(t.clone=!0),t.clone&&(e=r.clone(e)),"traverse"in t||(t.traverse=!0),e.timestamp="timestamp"in e?o.default(e.timestamp):new Date,t.traverse&&u.default(e),this.opts=t,this.obj=e}mn.Facade=s;var c=s.prototype;function l(e){return r.clone(e)}return c.proxy=function(e){var t=e.split("."),n=this[e=t.shift()]||this.obj[e];return n?("function"==typeof n&&(n=n.call(this)||{}),0===t.length||(n=a.default(n,t.join("."))),this.opts.clone?l(n):n):n},c.field=function(e){var t=this.obj[e];return this.opts.clone?l(t):t},s.proxy=function(e){return function(){return this.proxy(e)}},s.field=function(e){return function(){return this.field(e)}},s.multi=function(e){return function(){var t=this.proxy(e+"s");if(Array.isArray(t))return t;var n=this.proxy(e);return n&&(n=[this.opts.clone?r.clone(n):n]),n||[]}},s.one=function(e){return function(){var t=this.proxy(e);if(t)return t;var n=this.proxy(e+"s");return Array.isArray(n)?n[0]:void 0}},c.json=function(){var e=this.opts.clone?r.clone(this.obj):this.obj;return this.type&&(e.type=this.type()),e},c.rawEvent=function(){return this.raw},c.options=function(e){var t=this.obj.options||this.obj.context||{},n=this.opts.clone?r.clone(t):t;if(!e)return n;if(this.enabled(e)){var i=this.integrations(),o=i[e]||a.default(i,e);return"object"!=typeof o&&(o=a.default(this.options(),e)),"object"==typeof o?o:{}}},c.context=c.options,c.enabled=function(e){var t=this.proxy("options.providers.all");"boolean"!=typeof t&&(t=this.proxy("options.all")),"boolean"!=typeof t&&(t=this.proxy("integrations.all")),"boolean"!=typeof t&&(t=!0);var n=t&&i.default(e),r=this.integrations();if(r.providers&&r.providers.hasOwnProperty(e)&&(n=r.providers[e]),r.hasOwnProperty(e)){var o=r[e];n="boolean"!=typeof o||o}return!!n},c.integrations=function(){return this.obj.integrations||this.proxy("options.providers")||this.options()},c.active=function(){var e=this.proxy("options.active");return null==e&&(e=!0),e},c.anonymousId=function(){return this.field("anonymousId")||this.field("sessionId")},c.sessionId=c.anonymousId,c.groupId=s.proxy("options.groupId"),c.traits=function(e){var t=this.proxy("options.traits")||{},n=this.userId();for(var r in e=e||{},n&&(t.id=n),e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=null==this[r]?this.proxy("options.traits."+r):this[r]();if(null==i)continue;t[e[r]]=i,delete t[r]}return t},c.library=function(){var e=this.proxy("options.library");return e?"string"==typeof e?{name:e,version:null}:e:{name:"unknown",version:null}},c.device=function(){var e=this.proxy("context.device");"object"==typeof e&&null!==e||(e={});var t=this.library().name;return e.type||(t.indexOf("ios")>-1&&(e.type="ios"),t.indexOf("android")>-1&&(e.type="android")),e},c.userAgent=s.proxy("context.userAgent"),c.timezone=s.proxy("context.timezone"),c.timestamp=s.field("timestamp"),c.channel=s.field("channel"),c.ip=s.proxy("context.ip"),c.userId=s.field("userId"),n.default(c),mn}var Kn,Gn,Hn,Jn={},Qn={exports:{}},Wn={exports:{}};function Yn(){if(Gn)return Qn.exports;Gn=1;try{var e=require("util");if("function"!=typeof e.inherits)throw"";Qn.exports=e.inherits}catch(e){Qn.exports=(Kn||(Kn=1,"function"==typeof Object.create?Wn.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Wn.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}),Wn.exports)}return Qn.exports}var $n,Zn,Xn={},er={};function tr(){if($n)return er;$n=1,Object.defineProperty(er,"__esModule",{value:!0});var e=/.+\@.+\..+/;return er.default=function(t){return e.test(t)},er}var nr,rr={};function ir(){if(nr)return rr;nr=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rr,"__esModule",{value:!0}),rr.Identify=void 0;var n=Vn(),r=t(Pn()),i=t(Yn()),o=t(tr()),a=t(qn()),u=function(e){return e.trim()};function s(e,t){n.Facade.call(this,e,t)}rr.Identify=s,i.default(s,n.Facade);var c=s.prototype;return c.action=function(){return"identify"},c.type=c.action,c.traits=function(e){var t=this.field("traits")||{},n=this.userId();for(var r in e=e||{},n&&(t.id=n),e){var i=null==this[r]?this.proxy("traits."+r):this[r]();null!=i&&(t[e[r]]=i,r!==e[r]&&delete t[r])}return t},c.email=function(){var e=this.proxy("traits.email");if(e)return e;var t=this.userId();return o.default(t)?t:void 0},c.created=function(){var e=this.proxy("traits.created")||this.proxy("traits.createdAt");if(e)return a.default(e)},c.companyCreated=function(){var e=this.proxy("traits.company.created")||this.proxy("traits.company.createdAt");if(e)return a.default(e)},c.companyName=function(){return this.proxy("traits.company.name")},c.name=function(){var e=this.proxy("traits.name");if("string"==typeof e)return u(e);var t=this.firstName(),n=this.lastName();return t&&n?u(t+" "+n):void 0},c.firstName=function(){var e=this.proxy("traits.firstName");if("string"==typeof e)return u(e);var t=this.proxy("traits.name");return"string"==typeof t?u(t).split(" ")[0]:void 0},c.lastName=function(){var e=this.proxy("traits.lastName");if("string"==typeof e)return u(e);var t=this.proxy("traits.name");if("string"==typeof t){var n=u(t).indexOf(" ");if(-1!==n)return u(t.substr(n+1))}},c.uid=function(){return this.userId()||this.username()||this.email()},c.description=function(){return this.proxy("traits.description")||this.proxy("traits.background")},c.age=function(){var e=this.birthday(),t=r.default(this.traits(),"age");return null!=t?t:e instanceof Date?(new Date).getFullYear()-e.getFullYear():void 0},c.avatar=function(){var e=this.traits();return r.default(e,"avatar")||r.default(e,"photoUrl")||r.default(e,"avatarUrl")},c.position=function(){var e=this.traits();return r.default(e,"position")||r.default(e,"jobTitle")},c.username=n.Facade.proxy("traits.username"),c.website=n.Facade.one("traits.website"),c.websites=n.Facade.multi("traits.website"),c.phone=n.Facade.one("traits.phone"),c.phones=n.Facade.multi("traits.phone"),c.address=n.Facade.proxy("traits.address"),c.gender=n.Facade.proxy("traits.gender"),c.birthday=n.Facade.proxy("traits.birthday"),rr}var or,ar={};function ur(){if(or)return ar;or=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ar,"__esModule",{value:!0}),ar.Track=void 0;var n=t(Yn()),r=Vn(),i=ir(),o=t(tr()),a=t(Pn());function u(e,t){r.Facade.call(this,e,t)}ar.Track=u,n.default(u,r.Facade);var s=u.prototype;return s.action=function(){return"track"},s.type=s.action,s.event=r.Facade.field("event"),s.value=r.Facade.proxy("properties.value"),s.category=r.Facade.proxy("properties.category"),s.id=r.Facade.proxy("properties.id"),s.productId=function(){return this.proxy("properties.product_id")||this.proxy("properties.productId")},s.promotionId=function(){return this.proxy("properties.promotion_id")||this.proxy("properties.promotionId")},s.cartId=function(){return this.proxy("properties.cart_id")||this.proxy("properties.cartId")},s.checkoutId=function(){return this.proxy("properties.checkout_id")||this.proxy("properties.checkoutId")},s.paymentId=function(){return this.proxy("properties.payment_id")||this.proxy("properties.paymentId")},s.couponId=function(){return this.proxy("properties.coupon_id")||this.proxy("properties.couponId")},s.wishlistId=function(){return this.proxy("properties.wishlist_id")||this.proxy("properties.wishlistId")},s.reviewId=function(){return this.proxy("properties.review_id")||this.proxy("properties.reviewId")},s.orderId=function(){return this.proxy("properties.id")||this.proxy("properties.order_id")||this.proxy("properties.orderId")},s.sku=r.Facade.proxy("properties.sku"),s.tax=r.Facade.proxy("properties.tax"),s.name=r.Facade.proxy("properties.name"),s.price=r.Facade.proxy("properties.price"),s.total=r.Facade.proxy("properties.total"),s.repeat=r.Facade.proxy("properties.repeat"),s.coupon=r.Facade.proxy("properties.coupon"),s.shipping=r.Facade.proxy("properties.shipping"),s.discount=r.Facade.proxy("properties.discount"),s.shippingMethod=function(){return this.proxy("properties.shipping_method")||this.proxy("properties.shippingMethod")},s.paymentMethod=function(){return this.proxy("properties.payment_method")||this.proxy("properties.paymentMethod")},s.description=r.Facade.proxy("properties.description"),s.plan=r.Facade.proxy("properties.plan"),s.subtotal=function(){var e=a.default(this.properties(),"subtotal"),t=this.total()||this.revenue();if(e)return e;if(!t)return 0;if(this.total()){var n=this.tax();n&&(t-=n),(n=this.shipping())&&(t-=n),(n=this.discount())&&(t+=n)}return t},s.products=function(){var e=this.properties(),t=a.default(e,"products");return Array.isArray(t)?t.filter((function(e){return null!==e})):[]},s.quantity=function(){return(this.obj.properties||{}).quantity||1},s.currency=function(){return(this.obj.properties||{}).currency||"USD"},s.referrer=function(){return this.proxy("context.referrer.url")||this.proxy("context.page.referrer")||this.proxy("properties.referrer")},s.query=r.Facade.proxy("options.query"),s.properties=function(e){var t=this.field("properties")||{};for(var n in e=e||{})if(Object.prototype.hasOwnProperty.call(e,n)){var r=null==this[n]?this.proxy("properties."+n):this[n]();if(null==r)continue;t[e[n]]=r,delete t[n]}return t},s.username=function(){return this.proxy("traits.username")||this.proxy("properties.username")||this.userId()||this.sessionId()},s.email=function(){var e=this.proxy("traits.email")||this.proxy("properties.email")||this.proxy("options.traits.email");if(e)return e;var t=this.userId();return o.default(t)?t:void 0},s.revenue=function(){var e=this.proxy("properties.revenue"),t=this.event();return!e&&t&&t.match(/^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i)&&(e=this.proxy("properties.total")),function(e){if(!e)return;if("number"==typeof e)return e;if("string"!=typeof e)return;if(e=e.replace(/\$/g,""),e=parseFloat(e),!isNaN(e))return e}(e)},s.cents=function(){var e=this.revenue();return"number"!=typeof e?this.value()||0:100*e},s.identify=function(){var e=this.json();return e.traits=this.traits(),new i.Identify(e,this.opts)},ar}var sr,cr={};function lr(){if(sr)return cr;sr=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cr,"__esModule",{value:!0}),cr.Page=void 0;var n=t(Yn()),r=Vn(),i=ur(),o=t(tr());function a(e,t){r.Facade.call(this,e,t)}cr.Page=a,n.default(a,r.Facade);var u=a.prototype;return u.action=function(){return"page"},u.type=u.action,u.category=r.Facade.field("category"),u.name=r.Facade.field("name"),u.title=r.Facade.proxy("properties.title"),u.path=r.Facade.proxy("properties.path"),u.url=r.Facade.proxy("properties.url"),u.referrer=function(){return this.proxy("context.referrer.url")||this.proxy("context.page.referrer")||this.proxy("properties.referrer")},u.properties=function(e){var t=this.field("properties")||{},n=this.category(),r=this.name();for(var i in e=e||{},n&&(t.category=n),r&&(t.name=r),e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=null==this[i]?this.proxy("properties."+i):this[i]();if(null==o)continue;t[e[i]]=o,i!==e[i]&&delete t[i]}return t},u.email=function(){var e=this.proxy("context.traits.email")||this.proxy("properties.email");if(e)return e;var t=this.userId();return o.default(t)?t:void 0},u.fullName=function(){var e=this.category(),t=this.name();return t&&e?e+" "+t:t},u.event=function(e){return e?"Viewed "+e+" Page":"Loaded a Page"},u.track=function(e){var t=this.json();return t.event=this.event(e),t.timestamp=this.timestamp(),t.properties=this.properties(),new i.Track(t,this.opts)},cr}var fr,dr={};var pr,hr,vr={};function yr(){return hr||(hr=1,function(t){var n=e&&e.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Delete=t.Screen=t.Page=t.Track=t.Identify=t.Group=t.Alias=t.Facade=void 0;var r=Vn();Object.defineProperty(t,"Facade",{enumerable:!0,get:function(){return r.Facade}});var i=function(){if(Hn)return Jn;Hn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.Alias=void 0;var n=t(Yn()),r=Vn();function i(e,t){r.Facade.call(this,e,t)}return Jn.Alias=i,n.default(i,r.Facade),i.prototype.action=function(){return"alias"},i.prototype.type=i.prototype.action,i.prototype.previousId=function(){return this.field("previousId")||this.field("from")},i.prototype.from=i.prototype.previousId,i.prototype.userId=function(){return this.field("userId")||this.field("to")},i.prototype.to=i.prototype.userId,Jn}();Object.defineProperty(t,"Alias",{enumerable:!0,get:function(){return i.Alias}});var o=function(){if(Zn)return Xn;Zn=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xn,"__esModule",{value:!0}),Xn.Group=void 0;var n=t(Yn()),r=t(tr()),i=t(qn()),o=Vn();function a(e,t){o.Facade.call(this,e,t)}Xn.Group=a,n.default(a,o.Facade);var u=a.prototype;return u.action=function(){return"group"},u.type=u.action,u.groupId=o.Facade.field("groupId"),u.created=function(){var e=this.proxy("traits.createdAt")||this.proxy("traits.created")||this.proxy("properties.createdAt")||this.proxy("properties.created");if(e)return i.default(e)},u.email=function(){var e=this.proxy("traits.email");if(e)return e;var t=this.groupId();return r.default(t)?t:void 0},u.traits=function(e){var t=this.properties(),n=this.groupId();for(var r in e=e||{},n&&(t.id=n),e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=null==this[r]?this.proxy("traits."+r):this[r]();if(null==i)continue;t[e[r]]=i,delete t[r]}return t},u.name=o.Facade.proxy("traits.name"),u.industry=o.Facade.proxy("traits.industry"),u.employees=o.Facade.proxy("traits.employees"),u.properties=function(){return this.field("traits")||this.field("properties")||{}},Xn}();Object.defineProperty(t,"Group",{enumerable:!0,get:function(){return o.Group}});var a=ir();Object.defineProperty(t,"Identify",{enumerable:!0,get:function(){return a.Identify}});var u=ur();Object.defineProperty(t,"Track",{enumerable:!0,get:function(){return u.Track}});var s=lr();Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return s.Page}});var c=function(){if(fr)return dr;fr=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dr,"__esModule",{value:!0}),dr.Screen=void 0;var n=t(Yn()),r=lr(),i=ur();function o(e,t){r.Page.call(this,e,t)}return dr.Screen=o,n.default(o,r.Page),o.prototype.action=function(){return"screen"},o.prototype.type=o.prototype.action,o.prototype.event=function(e){return e?"Viewed "+e+" Screen":"Loaded a Screen"},o.prototype.track=function(e){var t=this.json();return t.event=this.event(e),t.timestamp=this.timestamp(),t.properties=this.properties(),new i.Track(t,this.opts)},dr}();Object.defineProperty(t,"Screen",{enumerable:!0,get:function(){return c.Screen}});var l=function(){if(pr)return vr;pr=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vr,"__esModule",{value:!0}),vr.Delete=void 0;var n=t(Yn()),r=Vn();function i(e,t){r.Facade.call(this,e,t)}return vr.Delete=i,n.default(i,r.Facade),i.prototype.type=function(){return"delete"},vr}();Object.defineProperty(t,"Delete",{enumerable:!0,get:function(){return l.Delete}}),t.default=n(n({},r.Facade),{Alias:i.Alias,Group:o.Group,Identify:a.Identify,Track:u.Track,Page:s.Page,Screen:c.Screen,Delete:l.Delete})}(_n)),_n}Object.defineProperty(gn,"__esModule",{value:!0}),gn.toFacade=void 0;var gr=yr();gn.toFacade=function(e,t){var n=new gr.Facade(e,t);return"track"===e.type&&(n=new gr.Track(e,t)),"identify"===e.type&&(n=new gr.Identify(e,t)),"page"===e.type&&(n=new gr.Page(e,t)),"alias"===e.type&&(n=new gr.Alias(e,t)),"group"===e.type&&(n=new gr.Group(e,t)),"screen"===e.type&&(n=new gr.Screen(e,t)),Object.defineProperty(n,"obj",{value:e,writable:!0}),n},Object.defineProperty(yn,"__esModule",{value:!0}),yn.sourceMiddlewarePlugin=yn.applyDestinationMiddleware=void 0;var _r=D,mr=Le,br=gn;yn.applyDestinationMiddleware=function(e,t,n){return _r.__awaiter(this,void 0,void 0,(function(){function r(t,n){return _r.__awaiter(this,void 0,void 0,(function(){var r,i,o;return _r.__generator(this,(function(a){switch(a.label){case 0:return r=!1,i=null,[4,n({payload:(0,br.toFacade)(t,{clone:!0,traverse:!1}),integration:e,next:function(e){r=!0,null===e&&(i=null),e&&(i=e.obj)}})];case 1:return a.sent(),r||null===i||(i.integrations=_r.__assign(_r.__assign({},t.integrations),((o={})[e]=!1,o))),[2,i]}}))}))}var i,o,a,u,s;return _r.__generator(this,(function(e){switch(e.label){case 0:i=(0,br.toFacade)(t,{clone:!0,traverse:!1}).rawEvent(),o=0,a=n,e.label=1;case 1:return o<a.length?(u=a[o],[4,r(i,u)]):[3,4];case 2:if(null===(s=e.sent()))return[2,null];i=s,e.label=3;case 3:return o++,[3,1];case 4:return[2,i]}}))}))},yn.sourceMiddlewarePlugin=function(e,t){function n(n){return _r.__awaiter(this,void 0,void 0,(function(){var r;return _r.__generator(this,(function(i){switch(i.label){case 0:return r=!1,[4,e({payload:(0,br.toFacade)(n.event,{clone:!0,traverse:!1}),integrations:null!=t?t:{},next:function(e){r=!0,e&&(n.event=e.obj)}})];case 1:if(i.sent(),!r)throw new mr.ContextCancelation({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,n]}}))}))}return{name:"Source Middleware ".concat(e.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(e){return Promise.resolve(e)},track:n,page:n,identify:n,alias:n,group:n}};var wr,Pr,Sr={},Or={};function jr(){if(Pr)return Sr;Pr=1,Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.queryString=void 0;var e=(wr||(wr=1,Object.defineProperty(Or,"__esModule",{value:!0}),Or.pickPrefix=void 0,Or.pickPrefix=function(e,t){return Object.keys(t).reduce((function(n,r){return r.startsWith(e)&&(n[r.substr(e.length)]=t[r]),n}),{})}),Or),t=We(),n=Me;return Sr.queryString=function(r,i){var o=document.createElement("a");o.href=i;var a=o.search.slice(1).split("&").reduce((function(e,n){var r=n.split("="),i=r[0],o=r[1];return e[i]=(0,t.gracefulDecodeURIComponent)(o),e}),{}),u=[],s=a.ajs_uid,c=a.ajs_event,l=a.ajs_aid,f=(0,n.isPlainObject)(r.options.useQueryString)?r.options.useQueryString:{},d=f.aid,p=void 0===d?/.+/:d,h=f.uid,v=void 0===h?/.+/:h;if(l){var y=Array.isArray(a.ajs_aid)?a.ajs_aid[0]:a.ajs_aid;p.test(y)&&r.setAnonymousId(y)}if(s){var g=Array.isArray(a.ajs_uid)?a.ajs_uid[0]:a.ajs_uid;if(v.test(g)){var _=(0,e.pickPrefix)("ajs_trait_",a);u.push(r.identify(g,_))}}if(c){var m=Array.isArray(a.ajs_event)?a.ajs_event[0]:a.ajs_event,b=(0,e.pickPrefix)("ajs_prop_",a);u.push(r.track(m,b))}return Promise.all(u)},Sr}Object.defineProperty(J,"__esModule",{value:!0}),J.Analytics=void 0;var kr=D,xr=Q,Ir=Fe,Ar=Le,Er=Me,Mr=Ut,Cr=Gt,Tr=et,Fr=kr.__importDefault(at()),Dr=Ht,Nr=ze,Rr=Jt,Ur=K(),Lr="This is being deprecated and will be not be available in future releases of Analytics JS",Br=(0,Ur.getGlobal)(),qr=null==Br?void 0:Br.analytics;function zr(){console.warn(Lr)}var Vr=function(e){function t(t,n,r,i,o){var a,u,s,c=this;(c=e.call(this)||this)._debug=!1,c.initialized=!1,c.user=function(){return c._user},c.init=c.initialize.bind(c),c.log=zr,c.addIntegrationMiddleware=zr,c.listeners=zr,c.addEventListener=zr,c.removeAllListeners=zr,c.removeListener=zr,c.removeEventListener=zr,c.hasListeners=zr,c.add=zr,c.addIntegration=zr;var l=null==n?void 0:n.cookie,f=null!==(a=null==n?void 0:n.disableClientPersistence)&&void 0!==a&&a;return c.settings=t,c.settings.timeout=null!==(u=c.settings.timeout)&&void 0!==u?u:300,c.queue=null!=r?r:function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=t?4:1,i=n?new Rr.PriorityQueue(r,[]):new Dr.PersistedPriorityQueue(r,e);return new Cr.EventQueue(i)}("".concat(t.writeKey,":event-queue"),null==n?void 0:n.retryQueue,f),c._universalStorage=new Tr.UniversalStorage(f?["memory"]:["localStorage","cookie","memory"],(0,Tr.getAvailableStorageOptions)(l)),c._user=null!=i?i:new Tr.User(f?kr.__assign(kr.__assign({},null==n?void 0:n.user),{persist:!1}):null==n?void 0:n.user,l).load(),c._group=null!=o?o:new Tr.Group(f?kr.__assign(kr.__assign({},null==n?void 0:n.group),{persist:!1}):null==n?void 0:n.group,l).load(),c.eventFactory=new Mr.EventFactory(c._user),c.integrations=null!==(s=null==n?void 0:n.integrations)&&void 0!==s?s:{},c.options=null!=n?n:{},(0,Fr.default)(c),c}return kr.__extends(t,e),Object.defineProperty(t.prototype,"storage",{get:function(){return this._universalStorage},enumerable:!1,configurable:!0}),t.prototype.track=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,o,a,u=this;return kr.__generator(this,(function(s){return t=xr.resolveArguments.apply(void 0,e),n=t[0],r=t[1],i=t[2],o=t[3],a=this.eventFactory.track(n,r,i,this.integrations),[2,this._dispatch(a,o).then((function(e){return u.emit("track",n,e.event.properties,e.event.options),e}))]}))}))},t.prototype.page=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,o,a,u,s=this;return kr.__generator(this,(function(c){return t=xr.resolvePageArguments.apply(void 0,e),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],u=this.eventFactory.page(n,r,i,o,this.integrations),[2,this._dispatch(u,a).then((function(e){return s.emit("page",n,r,e.event.properties,e.event.options),e}))]}))}))},t.prototype.identify=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,o,a,u=this;return kr.__generator(this,(function(s){return t=(0,xr.resolveUserArguments)(this._user).apply(void 0,e),n=t[0],r=t[1],i=t[2],o=t[3],this._user.identify(n,r),a=this.eventFactory.identify(this._user.id(),this._user.traits(),i,this.integrations),[2,this._dispatch(a,o).then((function(e){return u.emit("identify",e.event.userId,e.event.traits,e.event.options),e}))]}))}))},t.prototype.group=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(0===t.length)return this._group;var r=(0,xr.resolveUserArguments)(this._group).apply(void 0,t),i=r[0],o=r[1],a=r[2],u=r[3];this._group.identify(i,o);var s=this._group.id(),c=this._group.traits(),l=this.eventFactory.group(s,c,a,this.integrations);return this._dispatch(l,u).then((function(t){return e.emit("group",t.event.groupId,t.event.traits,t.event.options),t}))},t.prototype.alias=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,o,a,u=this;return kr.__generator(this,(function(s){return t=xr.resolveAliasArguments.apply(void 0,e),n=t[0],r=t[1],i=t[2],o=t[3],a=this.eventFactory.alias(n,r,i,this.integrations),[2,this._dispatch(a,o).then((function(e){return u.emit("alias",n,r,e.event.options),e}))]}))}))},t.prototype.screen=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,o,a,u,s=this;return kr.__generator(this,(function(c){return t=xr.resolvePageArguments.apply(void 0,e),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],u=this.eventFactory.screen(n,r,i,o,this.integrations),[2,this._dispatch(u,a).then((function(e){return s.emit("screen",n,r,e.event.properties,e.event.options),e}))]}))}))},t.prototype.trackClick=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n;return kr.__generator(this,(function(r){switch(r.label){case 0:return[4,Promise.resolve().then((function(){return kr.__importStar(pn())}))];case 1:return t=r.sent(),[2,(n=t.link).call.apply(n,kr.__spreadArray([this],e,!1))]}}))}))},t.prototype.trackLink=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n;return kr.__generator(this,(function(r){switch(r.label){case 0:return[4,Promise.resolve().then((function(){return kr.__importStar(pn())}))];case 1:return t=r.sent(),[2,(n=t.link).call.apply(n,kr.__spreadArray([this],e,!1))]}}))}))},t.prototype.trackSubmit=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n;return kr.__generator(this,(function(r){switch(r.label){case 0:return[4,Promise.resolve().then((function(){return kr.__importStar(pn())}))];case 1:return t=r.sent(),[2,(n=t.form).call.apply(n,kr.__spreadArray([this],e,!1))]}}))}))},t.prototype.trackForm=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n;return kr.__generator(this,(function(r){switch(r.label){case 0:return[4,Promise.resolve().then((function(){return kr.__importStar(pn())}))];case 1:return t=r.sent(),[2,(n=t.form).call.apply(n,kr.__spreadArray([this],e,!1))]}}))}))},t.prototype.register=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n,r=this;return kr.__generator(this,(function(i){switch(i.label){case 0:return t=Ar.Context.system(),n=e.map((function(e){return r.queue.register(t,e,r)})),[4,Promise.all(n)];case 1:return i.sent(),[2,t]}}))}))},t.prototype.deregister=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return kr.__awaiter(this,void 0,void 0,(function(){var t,n,r=this;return kr.__generator(this,(function(i){switch(i.label){case 0:return t=Ar.Context.system(),n=e.map((function(e){var n=r.queue.plugins.find((function(t){return t.name===e}));if(n)return r.queue.deregister(t,n,r);t.log("warn","plugin ".concat(e," not found"))})),[4,Promise.all(n)];case 1:return i.sent(),[2,t]}}))}))},t.prototype.debug=function(e){return!1===e&&localStorage.getItem("debug")&&localStorage.removeItem("debug"),this._debug=e,this},t.prototype.reset=function(){this._user.reset(),this._group.reset(),this.emit("reset")},t.prototype.timeout=function(e){this.settings.timeout=e},t.prototype._dispatch=function(e,t){return kr.__awaiter(this,void 0,void 0,(function(){var n;return kr.__generator(this,(function(r){return n=new Ar.Context(e),(0,Ir.isOffline)()&&!this.options.retryQueue?[2,n]:[2,(0,Er.dispatch)(n,this.queue,this,{callback:t,debug:this._debug,timeout:this.settings.timeout})]}))}))},t.prototype.addSourceMiddleware=function(e){return kr.__awaiter(this,void 0,void 0,(function(){var t=this;return kr.__generator(this,(function(n){switch(n.label){case 0:return[4,this.queue.criticalTasks.run((function(){return kr.__awaiter(t,void 0,void 0,(function(){var t,n,r;return kr.__generator(this,(function(i){switch(i.label){case 0:return[4,Promise.resolve().then((function(){return kr.__importStar(yn)}))];case 1:return t=i.sent().sourceMiddlewarePlugin,n={},this.queue.plugins.forEach((function(e){if("destination"===e.type)return n[e.name]=!0})),r=t(e,n),[4,this.register(r)];case 2:return i.sent(),[2]}}))}))}))];case 1:return n.sent(),[2,this]}}))}))},t.prototype.addDestinationMiddleware=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return this.queue.plugins.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()})).forEach((function(e){e.addMiddleware.apply(e,t)})),Promise.resolve(this)},t.prototype.setAnonymousId=function(e){return this._user.anonymousId(e)},t.prototype.queryString=function(e){return kr.__awaiter(this,void 0,void 0,(function(){return kr.__generator(this,(function(t){switch(t.label){case 0:return!1===this.options.useQueryString?[2,[]]:[4,Promise.resolve().then((function(){return kr.__importStar(jr())}))];case 1:return[2,(0,t.sent().queryString)(this,e)]}}))}))},t.prototype.use=function(e){return e(this),this},t.prototype.ready=function(e){return void 0===e&&(e=function(e){return e}),kr.__awaiter(this,void 0,void 0,(function(){return kr.__generator(this,(function(t){return[2,Promise.all(this.queue.plugins.map((function(e){return e.ready?e.ready():Promise.resolve()}))).then((function(t){return e(t),t}))]}))}))},t.prototype.noConflict=function(){return console.warn(Lr),window.analytics=null!=qr?qr:this,this},t.prototype.normalize=function(e){return console.warn(Lr),this.eventFactory.normalize(e)},Object.defineProperty(t.prototype,"failedInitializations",{get:function(){return console.warn(Lr),this.queue.failedInitializations},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"VERSION",{get:function(){return Nr.version},enumerable:!1,configurable:!0}),t.prototype.initialize=function(e,t){return kr.__awaiter(this,void 0,void 0,(function(){return kr.__generator(this,(function(e){return console.warn(Lr),[2,Promise.resolve(this)]}))}))},t.prototype.pageview=function(e){return kr.__awaiter(this,void 0,void 0,(function(){return kr.__generator(this,(function(t){switch(t.label){case 0:return console.warn(Lr),[4,this.page({path:e})];case 1:return t.sent(),[2,this]}}))}))},Object.defineProperty(t.prototype,"plugins",{get:function(){var e;return console.warn(Lr),null!==(e=this._plugins)&&void 0!==e?e:{}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Integrations",{get:function(){return console.warn(Lr),this.queue.plugins.filter((function(e){return"destination"===e.type})).reduce((function(e,t){var n="".concat(t.name.toLowerCase().replace(".","").split(" ").join("-"),"Integration"),r=window[n];if(!r)return e;var i=r.Integration;return i?(e[t.name]=i,e):(e[t.name]=r,e)}),{})},enumerable:!1,configurable:!0}),t.prototype.push=function(e){var t=e.shift();t&&!this[t]||this[t].apply(this,e)},t}(Er.Emitter);J.Analytics=Vr;var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.mergedOptions=void 0;var Gr=D;Kr.mergedOptions=function(e,t){var n,r=Object.entries(null!==(n=t.integrations)&&void 0!==n?n:{}).reduce((function(e,t){var n,r,i=t[0],o=t[1];return"object"==typeof o?Gr.__assign(Gr.__assign({},e),((n={})[i]=o,n)):Gr.__assign(Gr.__assign({},e),((r={})[i]={},r))}),{});return Object.entries(e.integrations).reduce((function(e,t){var n,i=t[0],o=t[1];return Gr.__assign(Gr.__assign({},e),((n={})[i]=Gr.__assign(Gr.__assign({},o),r[i]),n))}),{})};var Hr={};Object.defineProperty(Hr,"__esModule",{value:!0}),Hr.createDeferred=void 0;Hr.createDeferred=function(){var e,t,n=new Promise((function(n,r){e=n,t=r}));return{resolve:e,reject:t,promise:n}};var Jr={},Qr={};Object.defineProperty(Qr,"__esModule",{value:!0}),Qr.pick=void 0;var Wr=D;Qr.pick=function(e,t){return Object.assign.apply(Object,Wr.__spreadArray([{}],t.map((function(t){var n;if(e&&Object.prototype.hasOwnProperty.call(e,t))return(n={})[t]=e[t],n})),!1))},Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.pageEnrichment=Jr.pageDefaults=Jr.canonicalUrl=void 0;var Yr=D,$r=Qr;function Zr(){var e=document.querySelector("link[rel='canonical']");if(e)return e.getAttribute("href")||void 0}function Xr(){var e=Zr();if(!e)return window.location.pathname;var t=document.createElement("a");return t.href=e,t.pathname.startsWith("/")?t.pathname:"/"+t.pathname}function ei(e){void 0===e&&(e="");var t=Zr();if(t)return t.includes("?")?t:"".concat(t).concat(e);var n=window.location.href,r=n.indexOf("#");return-1===r?n:n.slice(0,r)}function ti(){return{path:Xr(),referrer:document.referrer,search:location.search,title:document.title,url:ei(location.search)}}function ni(e){var t=e.event;t.context=t.context||{};var n=ti(),r=void 0;return"page"===t.type&&(r=t.properties&&(0,$r.pick)(t.properties,Object.keys(n)),t.properties=Yr.__assign(Yr.__assign(Yr.__assign({},n),t.properties),t.name?{name:t.name}:{})),t.context.page=Yr.__assign(Yr.__assign(Yr.__assign({},n),r),t.context.page),e}Jr.canonicalUrl=ei,Jr.pageDefaults=ti,Jr.pageEnrichment={name:"Page Enrichment",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},type:"before",page:ni,alias:ni,track:ni,identify:ni,group:ni};var ri={},ii={};function oi(e){return Array.prototype.slice.call(window.document.querySelectorAll("script")).find((function(t){return t.src===e}))}Object.defineProperty(ii,"__esModule",{value:!0}),ii.unloadScript=ii.loadScript=void 0,ii.loadScript=function(e,t){var n=oi(e);if(void 0!==n){var r=null==n?void 0:n.getAttribute("status");if("loaded"===r)return Promise.resolve(n);if("loading"===r)return new Promise((function(e,t){n.addEventListener("load",(function(){return e(n)})),n.addEventListener("error",(function(e){return t(e)}))}))}return new Promise((function(n,r){var i,o=window.document.createElement("script");o.type="text/javascript",o.src=e,o.async=!0,o.setAttribute("status","loading");for(var a=0,u=Object.entries(null!=t?t:{});a<u.length;a++){var s=u[a],c=s[0],l=s[1];o.setAttribute(c,l)}o.onload=function(){o.onerror=o.onload=null,o.setAttribute("status","loaded"),n(o)},o.onerror=function(){o.onerror=o.onload=null,o.setAttribute("status","error"),r(new Error("Failed to load ".concat(e)))};var f=window.document.getElementsByTagName("script")[0];null===(i=f.parentElement)||void 0===i||i.insertBefore(o,f)}))},ii.unloadScript=function(e){var t=oi(e);return void 0!==t&&t.remove(),Promise.resolve()},Object.defineProperty(ri,"__esModule",{value:!0}),ri.remoteLoader=ri.ActionDestination=void 0;var ai=D,ui=ii,si=R,ci=yn,li=Le,fi=function(){function e(e,t){this.version="1.0.0",this.alternativeNames=[],this.middleware=[],this.alias=this._createMethod("alias"),this.group=this._createMethod("group"),this.identify=this._createMethod("identify"),this.page=this._createMethod("page"),this.screen=this._createMethod("screen"),this.track=this._createMethod("track"),this.action=t,this.name=e,this.type=t.type,this.alternativeNames.push(t.name)}return e.prototype.addMiddleware=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];"destination"===this.type&&(e=this.middleware).push.apply(e,t)},e.prototype.transform=function(e){return ai.__awaiter(this,void 0,void 0,(function(){var t;return ai.__generator(this,(function(n){switch(n.label){case 0:return[4,(0,ci.applyDestinationMiddleware)(this.name,e.event,this.middleware)];case 1:return null===(t=n.sent())&&e.cancel(new li.ContextCancelation({retry:!1,reason:"dropped by destination middleware"})),[2,new li.Context(t)]}}))}))},e.prototype._createMethod=function(e){var t=this;return function(n){return ai.__awaiter(t,void 0,void 0,(function(){var t;return ai.__generator(this,(function(r){switch(r.label){case 0:return this.action[e]?(t=n,"destination"!==this.type?[3,2]:[4,this.transform(n)]):[2,n];case 1:t=r.sent(),r.label=2;case 2:return[4,this.action[e](t)];case 3:return r.sent(),[2,n]}}))}))}},e.prototype.isLoaded=function(){return this.action.isLoaded()},e.prototype.ready=function(){return this.action.ready?this.action.ready():Promise.resolve()},e.prototype.load=function(e,t){return this.action.load(e,t)},e.prototype.unload=function(e,t){var n,r;return null===(r=(n=this.action).unload)||void 0===r?void 0:r.call(n,e,t)},e}();ri.ActionDestination=fi,ri.remoteLoader=function(e,t,n,r,i){var o,a,u;return ai.__awaiter(this,void 0,void 0,(function(){var s,c,l,f,d=this;return ai.__generator(this,(function(p){switch(p.label){case 0:return s=[],c=(0,si.getCDN)(),l=null!==(a=null===(o=e.middlewareSettings)||void 0===o?void 0:o.routingRules)&&void 0!==a?a:[],f=(null!==(u=e.remotePlugins)&&void 0!==u?u:[]).map((function(e){return ai.__awaiter(d,void 0,void 0,(function(){var o,a,u,f,d,p,h,v,y;return ai.__generator(this,(function(g){switch(g.label){case 0:if(function(e,t){var n=e[t.creationName],r=e[t.name];return!1===e.All&&!n&&!r||!1===n||!1===r}(t,e))return[2];g.label=1;case 1:if(g.trys.push([1,12,,13]),o=new RegExp("https://cdn.segment.(com|build)"),!r)return[3,7];a=e.url.split("/"),u=a[a.length-2],f=e.url.replace(u,btoa(u).replace(/=/g,"")),g.label=2;case 2:return g.trys.push([2,4,,6]),[4,(0,ui.loadScript)(f.replace(o,c))];case 3:return g.sent(),[3,6];case 4:return g.sent(),[4,(0,ui.loadScript)(e.url.replace(o,c))];case 5:return g.sent(),[3,6];case 6:return[3,9];case 7:return[4,(0,ui.loadScript)(e.url.replace(o,c))];case 8:g.sent(),g.label=9;case 9:return d=e.libraryName,"function"!=typeof window[d]?[3,11]:[4,(0,window[d])(ai.__assign(ai.__assign({},e.settings),n[e.name]))];case 10:p=g.sent(),function(e){if(!Array.isArray(e))throw new Error("Not a valid list of plugins");var t=["load","isLoaded","name","version","type"];e.forEach((function(e){t.forEach((function(t){var n;if(void 0===e[t])throw new Error("Plugin: ".concat(null!==(n=e.name)&&void 0!==n?n:"unknown"," missing required function ").concat(t))}))}))}(h=Array.isArray(p)?p:[p]),v=l.filter((function(t){return t.destinationName===e.creationName})),h.forEach((function(t){var n=new fi(e.creationName,t);v.length&&i&&"destination"===t.type&&n.addMiddleware(i),s.push(n)})),g.label=11;case 11:return[3,13];case 12:return y=g.sent(),console.warn("Failed to load Remote Plugin",y),[3,13];case 13:return[2]}}))}))})),[4,Promise.all(f)];case 1:return p.sent(),[2,s.filter(Boolean)]}}))}))};var di,pi,hi={},vi={},yi={};var gi,_i={};var mi,bi,wi={},Pi={};function Si(){if(mi)return Pi;mi=1,Object.defineProperty(Pi,"__esModule",{value:!0}),Pi.pWhile=void 0;var e=D;return Pi.pWhile=function(t,n){return e.__awaiter(void 0,void 0,void 0,(function(){var r;return e.__generator(this,(function(i){return r=function(i){return e.__awaiter(void 0,void 0,void 0,(function(){var o;return e.__generator(this,(function(e){switch(e.label){case 0:return t(i)?(o=r,[4,n()]):[3,2];case 1:return[2,o.apply(void 0,[e.sent()])];case 2:return[2]}}))}))},[2,r(void 0)]}))}))},Pi}var Oi,ji={};Object.defineProperty(hi,"__esModule",{value:!0}),hi.segmentio=void 0;var ki=D,xi=Fe,Ii=Jt,Ai=Ht,Ei=gn,Mi=ki.__importDefault(function(){if(pi)return vi;pi=1,Object.defineProperty(vi,"__esModule",{value:!0});var e=D,t=L,n=(di||(di=1,Object.defineProperty(yi,"__esModule",{value:!0}),yi.onPageChange=void 0,yi.onPageChange=function(e){var t=!1;window.addEventListener("pagehide",(function(){t||e(t=!0)})),document.addEventListener("visibilitychange",(function(){if("hidden"==document.visibilityState){if(t)return;t=!0}else t=!1;e(t)}))}),yi),r=500;function i(e){return(encodeURI(JSON.stringify(e)).split(/%..|./).length-1)/1024}return vi.default=function(o,a){var u,s,c,l=[],f=!1,d=null!==(u=null==a?void 0:a.size)&&void 0!==u?u:10,p=null!==(s=null==a?void 0:a.timeout)&&void 0!==s?s:5e3;function h(n){var r;if(0!==n.length){var i=null===(r=n[0])||void 0===r?void 0:r.writeKey,a=n.map((function(t){var n=t;return n.sentAt,e.__rest(n,["sentAt"])}));return(0,t.fetch)("https://".concat(o,"/b"),{keepalive:f,headers:{"Content-Type":"text/plain"},method:"post",body:JSON.stringify({writeKey:i,batch:a,sentAt:(new Date).toISOString()})})}}function v(){return e.__awaiter(this,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){return l.length?(t=l,l=[],[2,h(t)]):[2]}))}))}return(0,n.onPageChange)((function(e){if((f=e)&&l.length){var t=function(e){var t=[],n=0;return e.forEach((function(e){i(t[n])>=64&&n++,t[n]?t[n].push(e):t[n]=[e]})),t}(l).map(h);Promise.all(t).catch(console.error)}})),{dispatch:function(t,n){return e.__awaiter(this,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){return l.push(n),t=l.length>=d||function(e){return i(e)>=r-50}(l),[2,t||f?v():void(c||(c=setTimeout((function(){c=void 0,v().catch(console.error)}),p)))]}))}))}}},vi}()),Ci=ki.__importDefault(function(){if(gi)return _i;gi=1,Object.defineProperty(_i,"__esModule",{value:!0});var e=L;return _i.default=function(t){return{dispatch:function(n,r){return(0,e.fetch)(n,{keepalive:null==t?void 0:t.keepalive,headers:{"Content-Type":"text/plain"},method:"post",body:JSON.stringify(r)})}}},_i}()),Ti=St(),Fi=function(){if(bi)return wi;bi=1,Object.defineProperty(wi,"__esModule",{value:!0}),wi.scheduleFlush=void 0;var e=D,t=Fe,n=Le,r=Me,i=Si();function o(o,a){return e.__awaiter(this,void 0,void 0,(function(){var u,s=this;return e.__generator(this,(function(c){switch(c.label){case 0:return u=[],(0,t.isOffline)()?[2,a]:[4,(0,i.pWhile)((function(){return a.length>0&&!(0,t.isOffline)()}),(function(){return e.__awaiter(s,void 0,void 0,(function(){var t,i;return e.__generator(this,(function(e){switch(e.label){case 0:return(t=a.pop())?[4,(0,r.attempt)(t,o)]:[2];case 1:return i=e.sent(),i instanceof n.Context||u.push(t),[2]}}))}))}))];case 1:return c.sent(),u.map((function(e){return a.pushWithBackoff(e)})),[2,a]}}))}))}return wi.scheduleFlush=function(t,n,r,i){var a=this;t||setTimeout((function(){return e.__awaiter(a,void 0,void 0,(function(){var t,a;return e.__generator(this,(function(e){switch(e.label){case 0:return t=!0,[4,o(r,n)];case 1:return a=e.sent(),t=!1,n.todo>0&&i(t,a,r,i),[2]}}))}))}),5e3*Math.random())},wi}(),Di=kt(),Ni=function(){if(Oi)return ji;Oi=1,Object.defineProperty(ji,"__esModule",{value:!0}),ji.clientHints=void 0;var e=D;return ji.clientHints=function(t){return e.__awaiter(this,void 0,void 0,(function(){var n;return e.__generator(this,(function(e){return(n=navigator.userAgentData)?t?[2,n.getHighEntropyValues(t).catch((function(){return n.toJSON()}))]:[2,n.toJSON()]:[2,void 0]}))}))},ji}();hi.segmentio=function(e,t,n){var r,i,o;return ki.__awaiter(this,void 0,void 0,(function(){function a(r){return ki.__awaiter(this,void 0,void 0,(function(){var i,o;return ki.__generator(this,(function(a){return(0,xi.isOffline)()?(s.push(r),(0,Fi.scheduleFlush)(l,s,g,Fi.scheduleFlush),[2,r]):(c.add(r),i=r.event.type.charAt(0),y&&r.event.context&&(r.event.context.userAgentData=y),o=(0,Ei.toFacade)(r.event).json(),"track"===r.event.type&&delete o.traits,"alias"===r.event.type&&(o=function(e,t){var n,r,i,o,a=e.user();return t.previousId=null!==(i=null!==(r=null!==(n=t.previousId)&&void 0!==n?n:t.from)&&void 0!==r?r:a.id())&&void 0!==i?i:a.anonymousId(),t.userId=null!==(o=t.userId)&&void 0!==o?o:t.to,delete t.from,delete t.to,t}(e,o)),[2,v.dispatch("".concat(p,"/").concat(i),(0,Ti.normalize)(e,o,t,n)).then((function(){return r})).catch((function(){return s.pushWithBackoff(r),(0,Fi.scheduleFlush)(l,s,g,Fi.scheduleFlush),r})).finally((function(){c.delete(r)}))])}))}))}var u,s,c,l,f,d,p,h,v,y,g;return ki.__generator(this,(function(n){switch(n.label){case 0:window.addEventListener("pagehide",(function(){s.push.apply(s,Array.from(c)),c.clear()})),u=null!==(r=null==t?void 0:t.apiKey)&&void 0!==r?r:"",s=e.options.disableClientPersistence?new Ii.PriorityQueue(e.queue.queue.maxAttempts,[]):new Ai.PersistedPriorityQueue(e.queue.queue.maxAttempts,"".concat(u,":dest-Segment.io")),c=new Set,l=!1,f=null!==(i=null==t?void 0:t.apiHost)&&void 0!==i?i:Di.SEGMENT_API_HOST,d=null!==(o=null==t?void 0:t.protocol)&&void 0!==o?o:"https",p="".concat(d,"://").concat(f),h=null==t?void 0:t.deliveryStrategy,v="batching"===(null==h?void 0:h.strategy)?(0,Mi.default)(f,h.config):(0,Ci.default)(null==h?void 0:h.config),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,(0,Ni.clientHints)(e.options.highEntropyValuesClientHints)];case 2:return y=n.sent(),[3,4];case 3:return n.sent(),y=void 0,[3,4];case 4:return g={name:"Segment.io",type:"after",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},track:a,identify:a,page:a,alias:a,group:a,screen:a},s.todo&&(0,Fi.scheduleFlush)(l,s,g,Fi.scheduleFlush),[2,g]}}))}))};var Ri={};Object.defineProperty(Ri,"__esModule",{value:!0}),Ri.validation=void 0;var Ui=Me;function Li(e){var t,n=e.event;(0,Ui.assertEventExists)(n),(0,Ui.assertEventType)(n),"track"===n.type&&(0,Ui.assertTrackEventName)(n);var r=null!==(t=n.properties)&&void 0!==t?t:n.traits;if("alias"!==n.type&&!(0,Ui.isPlainObject)(r))throw new Ui.ValidationError(".properties","is not an object");return(0,Ui.assertUserIdentity)(n),e}Ri.validation={name:"Event Validation",type:"before",version:"1.0.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},track:Li,identify:Li,page:Li,alias:Li,group:Li,screen:Li};var Bi={},qi={};Object.defineProperty(qi,"__esModule",{value:!0}),qi.isThenable=void 0;qi.isThenable=function(e){return"object"==typeof e&&null!==e&&"then"in e&&"function"==typeof e.then},Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.AnalyticsBuffered=Bi.callAnalyticsMethod=Bi.PreInitMethodCallBuffer=Bi.flushAnalyticsCallsInNewTask=Bi.flushSetAnonymousID=Bi.flushOn=Bi.flushAddSourceMiddleware=void 0;var zi=D,Vi=qi,Ki=ze,Gi=function(e,t,n){n.getCalls(e).forEach((function(e){Ji(t,e).catch(console.error)}))};Bi.flushAddSourceMiddleware=function(e,t){return zi.__awaiter(void 0,void 0,void 0,(function(){var n,r,i;return zi.__generator(this,(function(o){switch(o.label){case 0:n=0,r=t.getCalls("addSourceMiddleware"),o.label=1;case 1:return n<r.length?(i=r[n],[4,Ji(e,i).catch(console.error)]):[3,4];case 2:o.sent(),o.label=3;case 3:return n++,[3,1];case 4:return[2]}}))}))},Bi.flushOn=Gi.bind(e,"on"),Bi.flushSetAnonymousID=Gi.bind(e,"setAnonymousId");Bi.flushAnalyticsCallsInNewTask=function(e,t){t.toArray().forEach((function(t){setTimeout((function(){Ji(e,t).catch(console.error)}),0)}))};var Hi=function(){function e(){this._value={}}return e.prototype.toArray=function(){var e;return(e=[]).concat.apply(e,Object.values(this._value))},e.prototype.getCalls=function(e){var t;return null!==(t=this._value[e])&&void 0!==t?t:[]},e.prototype.push=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.forEach((function(t){e._value[t.method]?e._value[t.method].push(t):e._value[t.method]=[t]})),this},e.prototype.clear=function(){return this._value={},this},e}();function Ji(e,t){return zi.__awaiter(this,void 0,void 0,(function(){var n,r;return zi.__generator(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t.called?[2,void 0]:(t.called=!0,n=e[t.method].apply(e,t.args),(0,Vi.isThenable)(n)?[4,n]:[3,2]);case 1:i.sent(),i.label=2;case 2:return t.resolve(n),[3,4];case 3:return r=i.sent(),t.reject(r),[3,4];case 4:return[2]}}))}))}Bi.PreInitMethodCallBuffer=Hi,Bi.callAnalyticsMethod=Ji;var Qi=function(){function e(e){var t=this;this._preInitBuffer=new Hi,this.trackSubmit=this._createMethod("trackSubmit"),this.trackClick=this._createMethod("trackClick"),this.trackLink=this._createMethod("trackLink"),this.pageView=this._createMethod("pageview"),this.identify=this._createMethod("identify"),this.reset=this._createMethod("reset"),this.group=this._createMethod("group"),this.track=this._createMethod("track"),this.ready=this._createMethod("ready"),this.alias=this._createMethod("alias"),this.debug=this._createChainableMethod("debug"),this.page=this._createMethod("page"),this.once=this._createChainableMethod("once"),this.off=this._createChainableMethod("off"),this.on=this._createChainableMethod("on"),this.addSourceMiddleware=this._createMethod("addSourceMiddleware"),this.setAnonymousId=this._createMethod("setAnonymousId"),this.addDestinationMiddleware=this._createMethod("addDestinationMiddleware"),this.screen=this._createMethod("screen"),this.register=this._createMethod("register"),this.deregister=this._createMethod("deregister"),this.user=this._createMethod("user"),this.VERSION=Ki.version,this._promise=e(this._preInitBuffer),this._promise.then((function(e){var n=e[0],r=e[1];t.instance=n,t.ctx=r})).catch((function(){}))}return e.prototype.then=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(e=this._promise).then.apply(e,t)},e.prototype.catch=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(e=this._promise).catch.apply(e,t)},e.prototype.finally=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(e=this._promise).finally.apply(e,t)},e.prototype._createMethod=function(e){var t=this;return function(){for(var n,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t.instance){var o=(n=t.instance)[e].apply(n,r);return Promise.resolve(o)}return new Promise((function(n,i){t._preInitBuffer.push({method:e,args:r,resolve:n,reject:i,called:!1})}))}},e.prototype._createChainableMethod=function(e){var t=this;return function(){for(var n,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return t.instance?((n=t.instance)[e].apply(n,r),t):(t._preInitBuffer.push({method:e,args:r,resolve:function(){},reject:console.error,called:!1}),t)}},e}();Bi.AnalyticsBuffered=Qi;var Wi={};function Yi(e){var t=e[0],n=e.slice(1);return{method:t,resolve:function(){},reject:console.error,args:n,called:!1}}Object.defineProperty(Wi,"__esModule",{value:!0}),Wi.popSnippetWindowBuffer=Wi.transformSnippetCall=void 0,Wi.transformSnippetCall=Yi;Wi.popSnippetWindowBuffer=function(){var e=window.analytics;return Array.isArray(e)?function(e){return e.map(Yi)}(e.splice(0,e.length)):[]};var $i,Zi,Xi={};Object.defineProperty(Xi,"__esModule",{value:!0}),Xi.attachInspector=void 0;var eo=null!==($i=(Zi=(0,K().getGlobal)()).__SEGMENT_INSPECTOR__)&&void 0!==$i?$i:Zi.__SEGMENT_INSPECTOR__={};Xi.attachInspector=function(e){var t;return null===(t=eo.attach)||void 0===t?void 0:t.call(eo,e)};for(var to={},no={},ro={},io=[],oo=0;oo<64;)io[oo]=0|4294967296*Math.sin(++oo%Math.PI);var ao=t(Object.freeze({__proto__:null,default:function(e){var t,n,r,i=[t=1732584193,n=4023233417,~t,~n],o=[],a=unescape(encodeURI(e))+"",u=a.length;for(e=--u/4+2|15,o[--e]=8*u;~u;)o[u>>2]|=a.charCodeAt(u)<<8*u--;for(oo=a=0;oo<e;oo+=16){for(u=i;a<64;u=[r=u[3],t+((r=u[0]+[t&n|~t&r,r&t|~r&n,t^n^r,n^(t|~r)][u=a>>4]+io[a]+~~o[oo|15&[a,5*a+1,3*a+5,7*a][u]])<<(u=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*u+a++%4])|r>>>-u),t,n])t=0|u[1],n=u[2];for(a=4;a;)i[--a]+=u[a]}for(e="";a<32;)e+=(i[a>>3]>>4*(1^a++)&15).toString(16);return e}}));var uo,so,co,lo,fo,po,ho,vo,yo,go,_o,mo,bo,wo,Po,So,Oo,jo,ko,xo,Io,Ao,Eo,Mo,Co,To,Fo,Do,No,Ro,Uo,Lo,Bo,qo,zo,Vo,Ko,Go,Ho,Jo,Qo,Wo,Yo,$o,Zo,Xo,ea,ta,na,ra,ia,oa,aa,ua,sa,ca,la,fa,da,pa,ha,va,ya,ga,_a,ma,ba,wa,Pa,Sa,Oa,ja,ka,xa,Ia,Aa,Ea,Ma,Ca,Ta,Fa,Da,Na,Ra,Ua,La,Ba,qa,za,Va,Ka,Ga,Ha,Ja,Qa,Wa,Ya,$a,Za,Xa,eu,tu,nu,ru,iu,ou,au,uu,su,cu,lu,fu,du,pu,hu,vu,yu,gu,_u,mu,bu,wu,Pu,Su,Ou,ju,ku,xu,Iu,Au,Eu,Mu,Cu,Tu,Fu,Du,Nu,Ru,Uu,Lu,Bu,qu,zu,Vu,Ku,Gu,Hu,Ju,Qu,Wu,Yu,$u,Zu,Xu,es,ts,ns,rs,is,os,as,us,ss,cs,ls,fs,ds,ps,hs,vs,ys,gs,_s,ms,bs,ws,Ps,Ss,Os,js,ks,xs,Is,As,Es,Ms,Cs=Object.freeze({__proto__:null,default:function(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}}),Ts=t(Cs);function Fs(){if(so)return uo;so=1;var e=Number.POSITIVE_INFINITY;return uo=e}
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
*/function Ds(){return lo?co:(lo=1,co=Number)}
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
*/function Ns(){if(vo)return ho;vo=1;var e=function(){if(po)return fo;po=1;var e=Ds();return fo=e}
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
*/().NEGATIVE_INFINITY;return ho=e}
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
*/function Rs(){if(go)return yo;go=1;return yo=1023}
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
*/function Us(){if(xo)return ko;xo=1;var e=jo?Oo:(jo=1,Oo=function(e){return e!=e});return ko=e}
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
*/function Ls(){if(Mo)return Eo;Mo=1;var e=function(){if(Ao)return Io;Ao=1;var e=Fs(),t=Ns();return Io=function(n){return n===e||n===t}}
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
*/();return Eo=e}
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
*/function Bs(){if(Lo)return Uo;Lo=1;var e=function(){if(Ro)return No;Ro=1;var e="function"==typeof Object.defineProperty?Object.defineProperty:null;return No=e}
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
*/();return Uo=function(){try{return e({},"x",{}),!0}catch(e){return!1}}}
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
*/function qs(){if(qo)return Bo;qo=1;var e=Object.defineProperty;return Bo=e}
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
*/function zs(){if(Go)return Ko;Go=1;var e,t=Bs(),n=qs(),r=function(){if(Vo)return zo;Vo=1;var e=Object.prototype,t=e.toString,n=e.__defineGetter__,r=e.__defineSetter__,i=e.__lookupGetter__,o=e.__lookupSetter__;return zo=function(a,u,s){var c,l,f,d;if("object"!=typeof a||null===a||"[object Array]"===t.call(a))throw new TypeError("invalid argument. First argument must be an object. Value: `"+a+"`.");if("object"!=typeof s||null===s||"[object Array]"===t.call(s))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+s+"`.");if((l="value"in s)&&(i.call(a,u)||o.call(a,u)?(c=a.__proto__,a.__proto__=e,delete a[u],a[u]=s.value,a.__proto__=c):a[u]=s.value),f="get"in s,d="set"in s,l&&(f||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&n&&n.call(a,u,s.get),d&&r&&r.call(a,u,s.set),a}}
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
*/();return e=t()?n:r,Ko=e}
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
*/function Vs(){if(Wo)return Qo;Wo=1;var e=function(){if(Jo)return Ho;Jo=1;var e=zs();return Ho=function(t,n,r){e(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}}
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
*/();return Qo=e}
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
*/function Ks(){if(Xo)return Zo;Xo=1;var e=$o?Yo:($o=1,Yo=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")});return Zo=e}
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
*/function Gs(){if(ra)return na;ra=1;var e=function(){if(ta)return ea;ta=1;var e=Ks()();return ea=function(){return e&&"symbol"==typeof Symbol.toStringTag}}
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
*/();return na=e}
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
*/function Hs(){if(oa)return ia;oa=1;var e=Object.prototype.toString;return ia=e}
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
*/function Js(){if(fa)return la;fa=1;var e=function(){if(ca)return sa;ca=1;var e=Object.prototype.hasOwnProperty;return sa=function(t,n){return null!=t&&e.call(t,n)}}
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
*/();return la=e}
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
*/function Qs(){if(va)return ha;va=1;var e=Js(),t=function(){if(pa)return da;pa=1;var e="function"==typeof Symbol?Symbol.toStringTag:"";return da=e}
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
*/(),n=Hs();return ha=function(r){var i,o,a;if(null==r)return n.call(r);o=r[t],i=e(r,t);try{r[t]=void 0}catch(e){return n.call(r)}return a=n.call(r),i?r[t]=o:delete r[t],a}}
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
*/function Ws(){if(ga)return ya;ga=1;var e,t=Gs(),n=function(){if(ua)return aa;ua=1;var e=Hs();return aa=function(t){return e.call(t)}}
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
*/(),r=Qs();return e=t()?r:n,ya=e}
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
*/function Ys(){if(wa)return ba;wa=1;var e=function(){if(ma)return _a;ma=1;var e=Ws(),t="function"==typeof Uint32Array;return _a=function(n){return t&&n instanceof Uint32Array||"[object Uint32Array]"===e(n)}}
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
*/();return ba=e}
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
*/function $s(){if(xa)return ka;xa=1;var e=Ys(),t=Sa?Pa:(Sa=1,Pa=4294967295),n=function(){if(ja)return Oa;ja=1;var e="function"==typeof Uint32Array?Uint32Array:null;return Oa=e}
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
*/();return ka=function(){var r,i;if("function"!=typeof n)return!1;try{i=new n(i=[1,3.14,-3.14,t+1,t+2]),r=e(i)&&1===i[0]&&3===i[1]&&i[2]===t-2&&0===i[3]&&1===i[4]}catch(e){r=!1}return r}}
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
*/function Zs(){if(Da)return Fa;Da=1;var e,t=function(){if(Aa)return Ia;Aa=1;var e=$s();return Ia=e}
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
*/(),n=function(){if(Ma)return Ea;Ma=1;var e="function"==typeof Uint32Array?Uint32Array:void 0;return Ea=e}
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
*/(),r=Ta?Ca:(Ta=1,Ca=function(){throw new Error("not implemented")});return e=t()?n:r,Fa=e}
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
*/function Xs(){if(La)return Ua;La=1;var e=function(){if(Ra)return Na;Ra=1;var e=Ws(),t="function"==typeof Float64Array;return Na=function(n){return t&&n instanceof Float64Array||"[object Float64Array]"===e(n)}}
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
*/function ec(){if(Va)return za;Va=1;var e=Xs(),t=function(){if(qa)return Ba;qa=1;var e="function"==typeof Float64Array?Float64Array:null;return Ba=e}
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
*/();return za=function(){var n,r;if("function"!=typeof t)return!1;try{r=new t([1,3.14,-3.14,NaN]),n=e(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(e){n=!1}return n}}
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
*/function tc(){if($a)return Ya;$a=1;var e,t=function(){if(Ga)return Ka;Ga=1;var e=ec();return Ka=e}
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
*/(),n=function(){if(Ja)return Ha;Ja=1;var e="function"==typeof Float64Array?Float64Array:void 0;return Ha=e}
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
*/(),r=Wa?Qa:(Wa=1,Qa=function(){throw new Error("not implemented")});return e=t()?n:r,Ya=e}
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
*/function nc(){if(tu)return eu;tu=1;var e=function(){if(Xa)return Za;Xa=1;var e=Ws(),t="function"==typeof Uint8Array;return Za=function(n){return t&&n instanceof Uint8Array||"[object Uint8Array]"===e(n)}}
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
*/();return eu=e}
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
*/function rc(){if(uu)return au;uu=1;var e=nc(),t=ru?nu:(ru=1,nu=255),n=function(){if(ou)return iu;ou=1;var e="function"==typeof Uint8Array?Uint8Array:null;return iu=e}
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
*/();return au=function(){var r,i;if("function"!=typeof n)return!1;try{i=new n(i=[1,3.14,-3.14,t+1,t+2]),r=e(i)&&1===i[0]&&3===i[1]&&i[2]===t-2&&0===i[3]&&1===i[4]}catch(e){r=!1}return r}}
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
*/function ic(){if(vu)return hu;vu=1;var e,t=function(){if(cu)return su;cu=1;var e=rc();return su=e}
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
*/(),n=function(){if(fu)return lu;fu=1;var e="function"==typeof Uint8Array?Uint8Array:void 0;return lu=e}
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
*/(),r=pu?du:(pu=1,du=function(){throw new Error("not implemented")});return e=t()?n:r,hu=e}
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
*/function oc(){if(mu)return _u;mu=1;var e=function(){if(gu)return yu;gu=1;var e=Ws(),t="function"==typeof Uint16Array;return yu=function(n){return t&&n instanceof Uint16Array||"[object Uint16Array]"===e(n)}}
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
*/();return _u=e}
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
*/function ac(){if(ju)return Ou;ju=1;var e=oc(),t=wu?bu:(wu=1,bu=65535),n=function(){if(Su)return Pu;Su=1;var e="function"==typeof Uint16Array?Uint16Array:null;return Pu=e}
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
*/();return Ou=function(){var r,i;if("function"!=typeof n)return!1;try{i=new n(i=[1,3.14,-3.14,t+1,t+2]),r=e(i)&&1===i[0]&&3===i[1]&&i[2]===t-2&&0===i[3]&&1===i[4]}catch(e){r=!1}return r}}
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
*/function uc(){if(Tu)return Cu;Tu=1;var e,t=function(){if(xu)return ku;xu=1;var e=ac();return ku=e}
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
*/(),n=function(){if(Au)return Iu;Au=1;var e="function"==typeof Uint16Array?Uint16Array:void 0;return Iu=e}
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
*/(),r=Mu?Eu:(Mu=1,Eu=function(){throw new Error("not implemented")});return e=t()?n:r,Cu=e}
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
*/function sc(){if(Ru)return Nu;Ru=1;var e,t,n=function(){if(Du)return Fu;Du=1;var e=ic(),t=uc();return Fu={uint16:t,uint8:e}}
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
*/();return(t=new n.uint16(1))[0]=4660,e=52===new n.uint8(t.buffer)[0],Nu=e}
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
*/function cc(){if(Lu)return Uu;Lu=1;var e=sc();return Uu=e}
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
*/function lc(){if(Vu)return zu;Vu=1;var e=Zs(),t=tc(),n=function(){return qu?Bu:(qu=1,!0===cc()?(e=1,t=0):(e=0,t=1),Bu={HIGH:e,LOW:t});var e,t}
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
*/(),r=new t(1),i=new e(r.buffer),o=n.HIGH,a=n.LOW;return zu=function(e,t,n,u){return r[0]=e,t[u]=i[o],t[u+n]=i[a],t}}
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
*/function fc(){if(Ju)return Hu;Ju=1;var e=Vs(),t=function(){if(Gu)return Ku;Gu=1;var e=lc();return Ku=function(t){return e(t,[0,0],1,0)}}
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
*/();return e(t,"assign",lc()),Hu=t}
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
*/function dc(){if($u)return Yu;$u=1;var e=Zs(),t=tc(),n=function(){if(Wu)return Qu;Wu=1;var e=cc();return Qu=!0===e?1:0}
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
*/(),r=new t(1),i=new e(r.buffer);return Yu=function(e){return r[0]=e,i[n]}}
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
*/function pc(){if(Xu)return Zu;Xu=1;var e=dc();return Zu=e}
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
*/function hc(){if(rs)return ns;rs=1;var e=Zs(),t=tc(),n=function(){return ts?es:(ts=1,!0===cc()?(e=1,t=0):(e=0,t=1),es={HIGH:e,LOW:t});var e,t}
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
*/(),r=new t(1),i=new e(r.buffer),o=n.HIGH,a=n.LOW;return ns=function(e,t){return i[o]=e,i[a]=t,r[0]},ns}
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
*/function vc(){if(os)return is;os=1;var e=hc();return is=e}
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
*/function yc(){if(us)return as;us=1;var e=To?Co:(To=1,Co=2147483648),t=Do?Fo:(Do=1,Fo=2147483647),n=fc(),r=pc(),i=vc(),o=[0,0];return as=function(a,u){var s,c;return n.assign(a,o,1,0),s=o[0],s&=t,c=r(u),i(s|=c&=e,o[1])}}
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
*/function gc(){if(vs)return hs;vs=1;var e=ps?ds:(ps=1,ds=function(e){return Math.abs(e)});return hs=e}
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
*/function _c(){if(gs)return ys;gs=1;var e=fs?ls:(fs=1,ls=22250738585072014e-324),t=Ls(),n=Us(),r=gc();return ys=function(i,o,a,u){return n(i)||t(i)?(o[u]=i,o[u+a]=0,o):0!==i&&r(i)<e?(o[u]=4503599627370496*i,o[u+a]=-52,o):(o[u]=i,o[u+a]=0,o)}}
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
*/function mc(){if(ws)return bs;ws=1;var e=Vs(),t=function(){if(ms)return _s;ms=1;var e=_c();return _s=function(t){return e(t,[0,0],1,0)}}
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
*/();return e(t,"assign",_c()),bs=t}
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
*/function bc(){if(js)return Os;js=1;var e=pc(),t=Ss?Ps:(Ss=1,Ps=2146435072),n=Rs();return Os=function(r){var i=e(r);return(i=(i&t)>>>20)-n|0},Os}
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
*/function wc(){if(As)return Is;As=1;var e=Fs(),t=Ns(),n=Rs(),r=mo?_o:(mo=1,_o=1023),i=wo?bo:(wo=1,bo=-1023),o=So?Po:(So=1,Po=-1074),a=Us(),u=Ls(),s=function(){if(cs)return ss;cs=1;var e=yc();return ss=e}
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
*/(),c=mc(),l=function(){if(xs)return ks;xs=1;var e=bc();return ks=e}
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
*/(),f=fc(),d=vc(),p=[0,0],h=[0,0];return Is=function(v,y){var g,_;return 0===v||a(v)||u(v)?v:(c(p,v),y+=p[1],(y+=l(v=p[0]))<o?s(0,v):y>r?v<0?t:e:(y<=i?(y+=52,_=2220446049250313e-31):_=1,f(h,v),g=h[0],g&=2148532223,_*d(g|=y+n<<20,h[1])))},Is}
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
*/var Pc,Sc,Oc={};function jc(){if(Sc)return ro;Sc=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ro,"__esModule",{value:!0});var n=t(ao),r=t(Ts),i=t(function(){if(Ms)return Es;Ms=1;var e=wc();return Es=e}()),o=Lt,a=function(){if(Pc)return Oc;Pc=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Oc,"__esModule",{value:!0}),Oc.unset=void 0;var n=t(Ts);return Oc.unset=function(e,t){if((0,n.default)(e,t)){for(var r=t.split("."),i=r.pop();r.length&&"\\"===r[r.length-1].slice(-1);)i=r.pop().slice(0,-1)+"."+i;for(;r.length;)e=e[t=r.shift()];return delete e[i]}return!0},Oc}();function u(e,t){c(e,t.drop,(function(e,t){t.forEach((function(t){return delete e[t]}))}))}function s(e,t){c(e,t.allow,(function(e,t){Object.keys(e).forEach((function(n){t.includes(n)||delete e[n]}))}))}function c(e,t,n){Object.entries(t).forEach((function(t){var i=t[0],o=t[1],a=function(e){"object"==typeof e&&null!==e&&n(e,o)},u=""===i?e:(0,r.default)(e,i);Array.isArray(u)?u.forEach(a):a(u)}))}function l(e,t){var n=JSON.parse(JSON.stringify(e));for(var i in t.map)if(t.map.hasOwnProperty(i)){var u=t.map[i],s=i.split("."),c=void 0;if(s.length>1?(s.pop(),c=(0,r.default)(n,s.join("."))):c=e,"object"==typeof c){if(u.copy){var l=(0,r.default)(n,u.copy);void 0!==l&&(0,o.dset)(e,i,l)}else if(u.move){var f=(0,r.default)(n,u.move);void 0!==f&&(0,o.dset)(e,i,f),(0,a.unset)(e,u.move)}else u.hasOwnProperty("set")&&(0,o.dset)(e,i,u.set);if(u.to_string){var d=(0,r.default)(e,i);if("string"==typeof d||"object"==typeof d&&null!==d)continue;void 0!==d?(0,o.dset)(e,i,JSON.stringify(d)):(0,o.dset)(e,i,"undefined")}}}}function f(e,t){return!(t.sample.percent<=0)&&(t.sample.percent>=1||(t.sample.path?function(e,t){var o=(0,r.default)(e,t.sample.path),a=(0,n.default)(JSON.stringify(o)),u=-64,s=[];d(a.slice(0,8),s);for(var c=0,l=0;l<64&&1!==s[l];l++)c++;if(0!==c){var f=[];d(a.slice(9,16),f),u-=c,s.splice(0,c),f.splice(64-c),s=s.concat(f)}return s[63]=0===s[63]?1:0,(0,i.default)(parseInt(s.join(""),2),u)<t.sample.percent}(e,t):(o=t.sample.percent,Math.random()<=o)));var o}function d(e,t){for(var n=0;n<8;n++)for(var r=e[n],i=128;i>=1;i/=2)r-i>=0?(r-=i,t.push(1)):t.push(0)}return ro.default=function(e,t){for(var n=e,r=0,i=t;r<i.length;r++){var o=i[r];switch(o.type){case"drop":return null;case"drop_properties":u(n,o.config);break;case"allow_properties":s(n,o.config);break;case"sample_event":if(f(n,o.config))break;return null;case"map_properties":l(n,o.config);break;case"hash_properties":break;default:throw new Error('Transformer of type "'.concat(o.type,'" is unsupported.'))}}return n},ro}var kc,xc={};function Ic(){if(kc)return xc;kc=1;var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xc,"__esModule",{value:!0});var n=t(Ts);function r(e,t){if(!Array.isArray(e))return!0===i(e,t);var n=e[0];switch(n){case"!":return!r(e[1],t);case"or":for(var s=1;s<e.length;s++)if(r(e[s],t))return!0;return!1;case"and":for(s=1;s<e.length;s++)if(!r(e[s],t))return!1;return!0;case"=":case"!=":return function(e,t,n,i){o(e)&&(e=r(e,i));o(t)&&(t=r(t,i));"object"==typeof e&&"object"==typeof t&&(e=JSON.stringify(e),t=JSON.stringify(t));switch(n){case"=":return e===t;case"!=":return e!==t;default:throw new Error("Invalid operator in compareItems: ".concat(n))}}(i(e[1],t),i(e[2],t),n,t);case"<=":case"<":case">":case">=":return function(e,t,n,i){o(e)&&(e=r(e,i));o(t)&&(t=r(t,i));if("number"!=typeof e||"number"!=typeof t)return!1;switch(n){case"<=":return e<=t;case">=":return e>=t;case"<":return e<t;case">":return e>t;default:throw new Error("Invalid operator in compareNumbers: ".concat(n))}}(i(e[1],t),i(e[2],t),n,t);case"in":return function(e,t,n){return void 0!==t.find((function(t){return i(t,n)===e}))}(i(e[1],t),i(e[2],t),t);case"contains":return function(e,t){if("string"!=typeof e||"string"!=typeof t)return!1;return-1!==e.indexOf(t)}(i(e[1],t),i(e[2],t));case"match":return function(e,t){if("string"!=typeof e||"string"!=typeof t)return!1;return function(e,t){var n,r;e:for(;e.length>0;){var i=void 0,o=void 0;if(i=(n=a(e)).star,o=n.chunk,e=n.pattern,i&&""===o)return!0;var s=u(o,t),c=s.t,l=s.ok,f=s.err;if(f)return!1;if(!l||!(0===c.length||e.length>0)){if(i)for(var d=0;d<t.length;d++){if(c=(r=u(o,t.slice(d+1))).t,l=r.ok,f=r.err,l){if(0===e.length&&c.length>0)continue;t=c;continue e}if(f)return!1}return!1}t=c}return 0===t.length}(t,e)}(i(e[1],t),i(e[2],t));case"lowercase":var c=i(e[1],t);return"string"!=typeof c?null:c.toLowerCase();case"typeof":return typeof i(e[1],t);case"length":return function(e){if(null===e)return 0;if(!Array.isArray(e)&&"string"!=typeof e)return NaN;return e.length}(i(e[1],t));default:throw new Error("FQL IR could not evaluate for token: ".concat(n))}}function i(e,t){return Array.isArray(e)?e:"object"==typeof e?e.value:(0,n.default)(t,e)}function o(e){return!!Array.isArray(e)&&(("lowercase"===e[0]||"length"===e[0]||"typeof"===e[0])&&2===e.length||("contains"===e[0]||"match"===e[0])&&3===e.length)}function a(e){for(var t={star:!1,chunk:"",pattern:""};e.length>0&&"*"===e[0];)e=e.slice(1),t.star=!0;var n,r=!1;e:for(n=0;n<e.length;n++)switch(e[n]){case"\\":n+1<e.length&&n++;break;case"[":r=!0;break;case"]":r=!1;break;case"*":if(!r)break e}return t.chunk=e.slice(0,n),t.pattern=e.slice(n),t}function u(e,t){for(var n,r,i={t:"",ok:!1,err:!1};e.length>0;){if(0===t.length)return i;switch(e[0]){case"[":var o=t[0];t=t.slice(1);var a=!0;(e=e.slice(1)).length>0&&"^"===e[0]&&(a=!1,e=e.slice(1));for(var u=!1,c=0;;){if(e.length>0&&"]"===e[0]&&c>0){e=e.slice(1);break}var l,f="";if(l=(n=s(e)).char,e=n.newChunk,n.err)return i;if(f=l,"-"===e[0]&&(f=(r=s(e.slice(1))).char,e=r.newChunk,r.err))return i;l<=o&&o<=f&&(u=!0),c++}if(u!==a)return i;break;case"?":t=t.slice(1),e=e.slice(1);break;case"\\":if(0===(e=e.slice(1)).length)return i.err=!0,i;default:if(e[0]!==t[0])return i;t=t.slice(1),e=e.slice(1)}}return i.t=t,i.ok=!0,i.err=!1,i}function s(e){var t={char:"",newChunk:"",err:!1};return 0===e.length||"-"===e[0]||"]"===e[0]||"\\"===e[0]&&0===(e=e.slice(1)).length?(t.err=!0,t):(t.char=e[0],t.newChunk=e.slice(1),0===t.newChunk.length&&(t.err=!0),t)}return xc.default=function(e,t){if(!t)throw new Error("No matcher supplied!");switch(t.type){case"all":return!0;case"fql":return function(e,t){if(!e)return!1;try{e=JSON.parse(e)}catch(t){throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(e,'": ').concat(t))}var n=r(e,t);if("boolean"!=typeof n)return!1;return n}(t.ir,e);default:throw new Error("Matcher of type ".concat(t.type," unsupported."))}},xc}var Ac,Ec,Mc,Cc={};function Tc(){return Ec||(Ec=1,function(t){var n=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Store=t.matches=t.transform=void 0;var r=jc();Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return n(r).default}});var i=Ic();Object.defineProperty(t,"matches",{enumerable:!0,get:function(){return n(i).default}});var o=function(){if(Ac)return Cc;Ac=1,Object.defineProperty(Cc,"__esModule",{value:!0});var e=function(){function e(e){this.rules=[],this.rules=e||[]}return e.prototype.getRulesByDestinationName=function(e){for(var t=[],n=0,r=this.rules;n<r.length;n++){var i=r[n];i.destinationName!==e&&void 0!==i.destinationName||t.push(i)}return t},e}();return Cc.default=e,Cc}();Object.defineProperty(t,"Store",{enumerable:!0,get:function(){return n(o).default}})}(no)),no}var Fc,Dc={},Nc={};function Rc(){if(Fc)return Nc;return Fc=1,Object.defineProperty(Nc,"__esModule",{value:!0}),Nc.isPlanEventEnabled=void 0,Nc.isPlanEventEnabled=function(e,t){var n,r;return"boolean"==typeof(null==t?void 0:t.enabled)?t.enabled:null===(r=null===(n=null==e?void 0:e.__default)||void 0===n?void 0:n.enabled)||void 0===r||r},Nc}var Uc,Lc={};function Bc(){if(Uc)return Lc;Uc=1,Object.defineProperty(Lc,"__esModule",{value:!0}),Lc.resolveVersion=Lc.unloadIntegration=Lc.loadIntegration=Lc.buildIntegration=Lc.resolveIntegrationNameFromSource=void 0;var e=D,t=R,n=ii;function r(e){return e.toLowerCase().replace(".","").replace(/\s+/g,"-")}function i(e,t){return void 0===t&&(t=!1),t?btoa(e).replace(/=/g,""):void 0}return Lc.resolveIntegrationNameFromSource=function(e){return("Integration"in e?e.Integration:e).prototype.name},Lc.buildIntegration=function(e,t,n){var r;"Integration"in e?(e({user:function(){return n.user()},addIntegration:function(){}}),r=e.Integration):r=e;var i=new r(t);return i.analytics=n,i},Lc.loadIntegration=function(o,a,u,s){return e.__awaiter(this,void 0,void 0,(function(){var c,l,f,d,p,h;return e.__generator(this,(function(v){switch(v.label){case 0:c=r(a),l=i(c,s),f=(0,t.getNextIntegrationsURL)(),d="".concat(f,"/integrations/").concat(null!=l?l:c,"/").concat(u,"/").concat(null!=l?l:c,".dynamic.js.gz"),v.label=1;case 1:return v.trys.push([1,3,,4]),[4,(0,n.loadScript)(d)];case 2:return v.sent(),function(t,n,r){var i,o;try{var a=(null!==(o=null===(i=null===window||void 0===window?void 0:window.performance)||void 0===i?void 0:i.getEntriesByName(t,"resource"))&&void 0!==o?o:[])[0];a&&n.stats.gauge("legacy_destination_time",Math.round(a.duration),e.__spreadArray([r],a.duration<100?["cached"]:[],!0))}catch(e){}}(d,o,a),[3,4];case 3:throw p=v.sent(),o.stats.gauge("legacy_destination_time",-1,["plugin:".concat(a),"failed"]),p;case 4:return h=window["".concat(c,"Deps")],[4,Promise.all(h.map((function(e){return(0,n.loadScript)(f+e+".gz")})))];case 5:return v.sent(),window["".concat(c,"Loader")](),[2,window["".concat(c,"Integration")]]}}))}))},Lc.unloadIntegration=function(o,a,u){return e.__awaiter(this,void 0,void 0,(function(){var s,c,l,f;return e.__generator(this,(function(e){return s=(0,t.getNextIntegrationsURL)(),c=r(o),l=i(o,u),f="".concat(s,"/integrations/").concat(null!=l?l:c,"/").concat(a,"/").concat(null!=l?l:c,".dynamic.js.gz"),[2,(0,n.unloadScript)(f)]}))}))},Lc.resolveVersion=function(e){var t,n,r,i;return null!==(i=null!==(n=null===(t=null==e?void 0:e.versionSettings)||void 0===t?void 0:t.override)&&void 0!==n?n:null===(r=null==e?void 0:e.versionSettings)||void 0===r?void 0:r.version)&&void 0!==i?i:"latest"},Lc}var qc,zc,Vc={};function Kc(){if(zc)return Dc;zc=1,Object.defineProperty(Dc,"__esModule",{value:!0}),Dc.ajsDestinations=Dc.LegacyDestination=void 0;var e=D,t=yr(),n=Fe,r=Le,i=Ne(),o=Me,a=Rc(),u=Kr,s=Si(),c=Jt,l=Ht,f=yn,d=Bc(),p=Me,h=(qc||(qc=1,Object.defineProperty(Vc,"__esModule",{value:!0}),Vc.isDisabledIntegration=Vc.isInstallableIntegration=void 0,Vc.isInstallableIntegration=function(e,t){var n,r=t.type,i=t.bundlingStatus,o=t.versionSettings,a="unbundled"!==i&&("browser"===r||(null===(n=null==o?void 0:o.componentTypes)||void 0===n?void 0:n.includes("browser")));return!e.startsWith("Segment")&&"Iterable"!==e&&a},Vc.isDisabledIntegration=function(e,t){var n=!1===t.All&&void 0===t[e];return!1===t[e]||n}),Vc);function v(t,i){return e.__awaiter(this,void 0,void 0,(function(){var a,u=this;return e.__generator(this,(function(c){switch(c.label){case 0:return a=[],(0,n.isOffline)()?[2,i]:[4,(0,s.pWhile)((function(){return i.length>0&&(0,n.isOnline)()}),(function(){return e.__awaiter(u,void 0,void 0,(function(){var n,u;return e.__generator(this,(function(e){switch(e.label){case 0:return(n=i.pop())?[4,(0,o.attempt)(n,t)]:[2];case 1:return u=e.sent(),u instanceof r.Context||a.push(n),[2]}}))}))}))];case 1:return c.sent(),a.map((function(e){return i.pushWithBackoff(e)})),[2,i]}}))}))}var y=function(){function i(t,n,r,i,o,a){void 0===i&&(i={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=n,this.settings=e.__assign({},i),this.disableAutoISOConversion=o.disableAutoISOConversion||!1,this.integrationSource=a,this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=o,this.buffer=o.disableClientPersistence?new c.PriorityQueue(4,[]):new l.PersistedPriorityQueue(4,"".concat(r,":dest-").concat(t)),this.scheduleFlush()}return i.prototype.isLoaded=function(){return this._ready},i.prototype.ready=function(){var e;return null!==(e=this.onReady)&&void 0!==e?e:Promise.resolve()},i.prototype.load=function(t,n){var r;return e.__awaiter(this,void 0,void 0,(function(){var i,o,a=this;return e.__generator(this,(function(e){switch(e.label){case 0:return this._ready||void 0!==this.onReady?[2]:null===(r=this.integrationSource)||void 0===r?[3,1]:(o=r,[3,3]);case 1:return[4,(0,d.loadIntegration)(t,this.name,this.version,this.options.obfuscate)];case 2:o=e.sent(),e.label=3;case 3:i=o,this.integration=(0,d.buildIntegration)(i,this.settings,n),this.onReady=new Promise((function(e){a.integration.once("ready",(function(){a._ready=!0,e(!0)}))})),this.onInitialize=new Promise((function(e){a.integration.on("initialize",(function(){a._initialized=!0,e(!0)}))}));try{t.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name)]),this.integration.initialize()}catch(e){throw t.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name)]),e}return[2]}}))}))},i.prototype.unload=function(e,t){return(0,d.unloadIntegration)(this.name,this.version,this.options.obfuscate)},i.prototype.addMiddleware=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.middleware=(e=this.middleware).concat.apply(e,t)},i.prototype.shouldBuffer=function(e){return"page"!==e.event.type&&((0,n.isOffline)()||!1===this._ready||!1===this._initialized)},i.prototype.send=function(t,n,i){var o,u;return e.__awaiter(this,void 0,void 0,(function(){var s,c,l,d,p,h;return e.__generator(this,(function(v){switch(v.label){case 0:if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(s=null===(u=null===(o=this.options)||void 0===o?void 0:o.plan)||void 0===u?void 0:u.track,c=t.event.event,s&&c&&"Segment.io"!==this.name){if(l=s[c],!(0,a.isPlanEventEnabled)(s,l))return t.updateEvent("integrations",e.__assign(e.__assign({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new r.ContextCancelation({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(t.updateEvent("integrations",e.__assign(e.__assign({},t.event.integrations),null==l?void 0:l.integrations)),(null==l?void 0:l.enabled)&&!1===(null==l?void 0:l.integrations[this.name]))return t.cancel(new r.ContextCancelation({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,(0,f.applyDestinationMiddleware)(this.name,t.event,this.middleware)];case 1:if(null===(d=v.sent()))return[2,t];p=new n(d,{traverse:!this.disableAutoISOConversion}),t.stats.increment("analytics_js.integration.invoke",1,["method:".concat(i),"integration_name:".concat(this.name)]),v.label=2;case 2:return v.trys.push([2,5,,6]),this.integration?[4,this.integration.invoke.call(this.integration,i,p)]:[3,4];case 3:v.sent(),v.label=4;case 4:return[3,6];case 5:throw h=v.sent(),t.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(i),"integration_name:".concat(this.name)]),h;case 6:return[2,t]}}))}))},i.prototype.track=function(n){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.send(n,t.Track,"track")]}))}))},i.prototype.page=function(n){var r;return e.__awaiter(this,void 0,void 0,(function(){var i=this;return e.__generator(this,(function(e){return(null===(r=this.integration)||void 0===r?void 0:r._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then((function(){return i.send(n,t.Page,"page")}))]}))}))},i.prototype.identify=function(n){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.send(n,t.Identify,"identify")]}))}))},i.prototype.alias=function(n){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.send(n,t.Alias,"alias")]}))}))},i.prototype.group=function(n){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.send(n,t.Group,"group")]}))}))},i.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout((function(){return e.__awaiter(t,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){switch(e.label){case 0:return this.flushing=!0,t=this,[4,v(this,this.buffer)];case 1:return t.buffer=e.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}}))}))}),5e3*Math.random())},i}();return Dc.LegacyDestination=y,Dc.ajsDestinations=function(t,n,r,o,a,s){var c,l;if(void 0===r&&(r={}),void 0===o&&(o={}),(0,i.isServer)())return[];n.plan&&((o=null!=o?o:{}).plan=n.plan);var f=null!==(l=null===(c=n.middlewareSettings)||void 0===c?void 0:c.routingRules)&&void 0!==l?l:[],v=n.integrations,g=o.integrations,_=(0,u.mergedOptions)(n,null!=o?o:{}),m=null==s?void 0:s.reduce((function(t,n){var r;return e.__assign(e.__assign({},t),((r={})[(0,d.resolveIntegrationNameFromSource)(n)]=n,r))}),{}),b=new Set(e.__spreadArray(e.__spreadArray([],Object.keys(v).filter((function(e){return(0,h.isInstallableIntegration)(e,v[e])})),!0),Object.keys(m||{}).filter((function(e){return(0,p.isPlainObject)(v[e])||(0,p.isPlainObject)(null==g?void 0:g[e])})),!0));return Array.from(b).filter((function(e){return!(0,h.isDisabledIntegration)(e,r)})).map((function(e){var n=v[e],r=(0,d.resolveVersion)(n),i=new y(e,r,t,_[e],o,null==m?void 0:m[e]);return f.filter((function(t){return t.destinationName===e})).length>0&&a&&i.addMiddleware(a),i}))},Dc}var Gc,Hc,Jc={},Qc={exports:{}};function Wc(){return Gc||(Gc=1,window,Qc.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){n.r(t);var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise((function(n,r){var i=new XMLHttpRequest;for(var o in i.open(t.method||"get",e,!0),t.headers)i.setRequestHeader(o,t.headers[o]);function a(){var e,t=[],n=[],r={};return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(i,o,a){t.push(o=o.toLowerCase()),n.push([o,a]),e=r[o],r[o]=e?e+","+a:a})),{ok:2==(i.status/100|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:a,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}i.withCredentials="include"==t.credentials,i.onload=function(){n(a())},i.onerror=r,i.send(t.body)}))};t.default=r},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pluginName=t}return r(e,[{key:"track",value:function(e,t){window.analytics.track(e,t,{integration:{name:this.pluginName}})}}]),e}();t.default=i},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeAnalytics=t.VimeoAnalytics=void 0;var r=o(n(3)),i=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}t.VimeoAnalytics=r.default,t.YouTubeAnalytics=i.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"VimeoAnalytics"));return r.authToken=n,r.player=e,r.metadata={content:{},playback:{videoPlayer:"Vimeo"}},r.mostRecentHeartbeat=0,r.isPaused=!1,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"initialize",value:function(){var e=this,t={loaded:this.retrieveMetadata,play:this.trackPlay,pause:this.trackPause,ended:this.trackEnded,timeupdate:this.trackHeartbeat};for(var n in t)this.registerHandler(n,t[n]);this.player.getVideoId().then((function(t){e.retrieveMetadata({id:t})})).catch(console.error)}},{key:"registerHandler",value:function(e,t){var n=this;this.player.on(e,(function(e){n.updateMetadata(e),t.call(n,e)}))}},{key:"trackPlay",value:function(){this.isPaused?(this.track("Video Playback Resumed",this.metadata.playback),this.isPaused=!1):(this.track("Video Playback Started",this.metadata.playback),this.track("Video Content Started",this.metadata.content))}},{key:"trackEnded",value:function(){this.track("Video Playback Completed",this.metadata.playback),this.track("Video Content Completed",this.metadata.content)}},{key:"trackHeartbeat",value:function(){var e=this.mostRecentHeartbeat,t=this.metadata.playback.position;t!==e&&t-e>=10&&(this.track("Video Content Playing",this.metadata.content),this.mostRecentHeartbeat=Math.floor(t))}},{key:"trackPause",value:function(){this.isPaused=!0,this.track("Video Playback Paused",this.metadata.playback)}},{key:"retrieveMetadata",value:function(e){var t=this;return new Promise((function(n,r){var o=e.id;(0,i.default)("https://api.vimeo.com/videos/"+o,{headers:{Authorization:"Bearer "+t.authToken}}).then((function(e){return e.ok?e.json():r(e)})).then((function(e){t.metadata.content.title=e.name,t.metadata.content.description=e.description,t.metadata.content.publisher=e.user.name,t.metadata.playback.position=0,t.metadata.playback.totalLength=e.duration})).catch((function(e){return console.error("Request to Vimeo API Failed with: ",e),r(e)}))}))}},{key:"updateMetadata",value:function(e){var t=this;return new Promise((function(n,r){t.player.getVolume().then((function(r){r&&(t.metadata.playback.sound=100*r),t.metadata.playback.position=e.seconds,n()})).catch(r)}))}}]),t}(o(n(1)).default);t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"YoutubeAnalytics"));return r.player=e,r.apiKey=n,r.playerLoaded=!1,r.playbackStarted=!1,r.contentStarted=!1,r.isPaused=!1,r.isBuffering=!1,r.isSeeking=!1,r.lastRecordedTime={timeReported:Date.now(),timeElapsed:0},r.metadata=[{playback:{video_player:"youtube"},content:{}}],r.playlistIndex=0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"initialize",value:function(){window.segmentYoutubeOnStateChange=this.onPlayerStateChange.bind(this),window.segmentYoutubeOnReady=this.onPlayerReady.bind(this),this.player.addEventListener("onReady","segmentYoutubeOnReady"),this.player.addEventListener("onStateChange","segmentYoutubeOnStateChange")}},{key:"onPlayerReady",value:function(e){this.retrieveMetadata()}},{key:"onPlayerStateChange",value:function(e){var t=this.player.getCurrentTime();switch(this.metadata[this.playlistIndex]&&(this.metadata[this.playlistIndex].playback.position=this.metadata[this.playlistIndex].content.position=t,this.metadata[this.playlistIndex].playback.quality=this.player.getPlaybackQuality(),this.metadata[this.playlistIndex].playback.sound=this.player.isMuted()?0:this.player.getVolume()),e.data){case-1:if(this.playerLoaded)break;this.retrieveMetadata(),this.playerLoaded=!0;break;case YT.PlayerState.BUFFERING:this.handleBuffer();break;case YT.PlayerState.PLAYING:this.handlePlay();break;case YT.PlayerState.PAUSED:this.handlePause();break;case YT.PlayerState.ENDED:this.handleEnd()}this.lastRecordedTime={timeReported:Date.now(),timeElapsed:1e3*this.player.getCurrentTime()}}},{key:"retrieveMetadata",value:function(){var e=this;return new Promise((function(t,n){var r=e.player.getVideoData(),o=e.player.getPlaylist()||[r.video_id],a=o.join();(0,i.default)("https://www.googleapis.com/youtube/v3/videos?id="+a+"&part=snippet,contentDetails&key="+e.apiKey).then((function(e){if(!e.ok){var t=new Error("Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)");throw t.response=e,t}return e.json()})).then((function(n){e.metadata=[];for(var r=0,i=0;i<o.length;i++){var a=n.items[i];e.metadata.push({content:{title:a.snippet.title,description:a.snippet.description,keywords:a.snippet.tags,channel:a.snippet.channelTitle,airdate:a.snippet.publishedAt}}),r+=u(a.contentDetails.duration)}for(i=0;i<o.length;i++)e.metadata[i].playback={total_length:r,video_player:"youtube"};t()})).catch((function(t){e.metadata=o.map((function(e){return{playback:{video_player:"youtube"},content:{}}})),n(t)}))}))}},{key:"handleBuffer",value:function(){var e=this.determineSeek();this.playbackStarted||(this.playbackStarted=!0,this.track("Video Playback Started",this.metadata[this.playlistIndex].playback)),e&&!this.isSeeking&&(this.isSeeking=!0,this.track("Video Playback Seek Started",this.metadata[this.playlistIndex].playback)),this.isSeeking&&(this.track("Video Playback Seek Completed",this.metadata[this.playlistIndex].playback),this.isSeeking=!1);var t=this.player.getPlaylist();t&&0===this.player.getCurrentTime()&&this.player.getPlaylistIndex()!==this.playlistIndex&&(this.contentStarted=!1,this.playlistIndex===t.length-1&&0===this.player.getPlaylistIndex()&&(this.track("Video Playback Completed",this.metadata[this.player.getPlaylistIndex()].playback),this.track("Video Playback Started",this.metadata[this.player.getPlaylistIndex()].playback))),this.track("Video Playback Buffer Started",this.metadata[this.playlistIndex].playback),this.isBuffering=!0}},{key:"handlePlay",value:function(){this.contentStarted||(this.playlistIndex=this.player.getPlaylistIndex(),-1===this.playlistIndex&&(this.playlistIndex=0),this.track("Video Content Started",this.metadata[this.playlistIndex].content),this.contentStarted=!0),this.isBuffering&&(this.track("Video Playback Buffer Completed",this.metadata[this.playlistIndex].playback),this.isBuffering=!1),this.isPaused&&(this.track("Video Playback Resumed",this.metadata[this.playlistIndex].playback),this.isPaused=!1)}},{key:"handlePause",value:function(){var e=this.determineSeek();this.isBuffering&&(this.track("Video Playback Buffer Completed",this.metadata[this.playlistIndex].playback),this.isBuffering=!1),this.isPaused||(e?(this.track("Video Playback Seek Started",this.metadata[this.playlistIndex].playback),this.isSeeking=!0):(this.track("Video Playback Paused",this.metadata[this.playlistIndex].playback),this.isPaused=!0))}},{key:"handleEnd",value:function(){this.track("Video Content Completed",this.metadata[this.playlistIndex].content),this.contentStarted=!1;var e=this.player.getPlaylistIndex(),t=this.player.getPlaylist();(t&&e===t.length-1||-1===e)&&(this.track("Video Playback Completed",this.metadata[this.playlistIndex].playback),this.playbackStarted=!1)}},{key:"determineSeek",value:function(){var e=this.isPaused||this.isBuffering?0:Date.now()-this.lastRecordedTime.timeReported,t=1e3*this.player.getCurrentTime()-this.lastRecordedTime.timeElapsed;return Math.abs(e-t)>2e3}}]),t}(o(n(1)).default);function u(e){var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);return t=t.slice(1).map((function(e){if(null!=e)return e.replace(/\D/,"")})),3600*(parseInt(t[0])||0)+60*(parseInt(t[1])||0)+(parseInt(t[2])||0)}t.default=a}])),Qc.exports}var Yc,$c={};function Zc(){if(Yc)return $c;Yc=1,Object.defineProperty($c,"__esModule",{value:!0}),$c.schemaFilter=void 0;var e=D,t=Rc();return $c.schemaFilter=function(n,r){function i(i){var o=n,a=i.event.event;if(o&&a){var u=o[a];if(!(0,t.isPlanEventEnabled)(o,u))return i.updateEvent("integrations",e.__assign(e.__assign({},i.event.integrations),{All:!1,"Segment.io":!0})),i;var s=function(e,t){var n,r;if(!e||!Object.keys(e))return{};var i=e.integrations?Object.keys(e.integrations).filter((function(t){return!1===e.integrations[t]})):[],o=[];return(null!==(n=t.remotePlugins)&&void 0!==n?n:[]).forEach((function(e){i.forEach((function(t){(e.name.includes(t)||t.includes(e.name))&&o.push(e.name)}))})),(null!==(r=t.remotePlugins)&&void 0!==r?r:[]).reduce((function(e,t){return t.settings.subscriptions&&o.includes(t.name)&&t.settings.subscriptions.forEach((function(n){return e["".concat(t.name," ").concat(n.partnerAction)]=!1})),e}),{})}(u,r);i.updateEvent("integrations",e.__assign(e.__assign(e.__assign({},i.event.integrations),null==u?void 0:u.integrations),s))}return i}return{name:"Schema Filter",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},type:"before",page:i,alias:i,track:i,identify:i,group:i}},$c}var Xc,el={};Object.defineProperty(n,"__esModule",{value:!0});var tl=n.AnalyticsBrowser=n.loadLegacySettings=void 0,nl=D,rl=N,il=R,ol=L,al=J,ul=Kr,sl=Hr,cl=Jr,ll=ri,fl=hi,dl=Ri,pl=Bi,hl=Wi,vl=Xi,yl=Be;function gl(e,t){var n=null!=t?t:(0,il.getCDN)();return(0,ol.fetch)("".concat(n,"/v1/projects/").concat(e,"/settings")).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){throw console.error(e.message),e}))}var _l=n.loadLegacySettings=gl;function ml(e,t){return nl.__awaiter(this,void 0,void 0,(function(){return nl.__generator(this,(function(n){switch(n.label){case 0:return t.push.apply(t,(0,hl.popSnippetWindowBuffer)()),[4,(0,pl.flushAddSourceMiddleware)(e,t)];case 1:return n.sent(),t.push.apply(t,(0,hl.popSnippetWindowBuffer)()),(0,pl.flushAnalyticsCallsInNewTask)(e,t),t.clear(),[2]}}))}))}function bl(e,t,n,r,i,o,a){var u,s,c;return nl.__awaiter(this,void 0,void 0,(function(){var l,f,d,p,h,v,y,g,_,m,b,w,P=this;return nl.__generator(this,(function(S){switch(S.label){case 0:return function(e){var t,n,r;return"test"!==(0,rl.getProcessEnv)().NODE_ENV&&(null!==(r=null===(n=null===(t=e.middlewareSettings)||void 0===t?void 0:t.routingRules)||void 0===n?void 0:n.length)&&void 0!==r?r:0)>0}(t)?[4,Promise.resolve().then((function(){return nl.__importStar(function(){if(Mc)return to;Mc=1,Object.defineProperty(to,"__esModule",{value:!0}),to.tsubMiddleware=void 0;var e=D.__importStar(Tc());return to.tsubMiddleware=function(t){return function(n){var r=n.payload,i=n.integration,o=n.next;new e.Store(t).getRulesByDestinationName(i).forEach((function(t){for(var n=t.matchers,i=t.transformers,a=0;a<n.length;a++)if(e.matches(r.obj,n[a])&&(r.obj=e.transform(r.obj,i[a]),null===r.obj))return o(null)})),o(r)}},to}())})).then((function(e){return e.tsubMiddleware(t.middlewareSettings.routingRules)}))]:[3,2];case 1:return f=S.sent(),[3,3];case 2:f=void 0,S.label=3;case 3:return l=f,O=t,"test"!==(0,rl.getProcessEnv)().NODE_ENV&&Object.keys(O.integrations).length>1||a.length>0?[4,Promise.resolve().then((function(){return nl.__importStar(Kc())})).then((function(i){return i.ajsDestinations(e,t,n.integrations,r,l,a)}))]:[3,5];case 4:return p=S.sent(),[3,6];case 5:p=[],S.label=6;case 6:return d=p,t.legacyVideoPluginsEnabled?[4,Promise.resolve().then((function(){return nl.__importStar(function(){if(Hc)return Jc;Hc=1,Object.defineProperty(Jc,"__esModule",{value:!0}),Jc.loadLegacyVideoPlugins=void 0;var e=D;return Jc.loadLegacyVideoPlugins=function(t){return e.__awaiter(this,void 0,void 0,(function(){var n;return e.__generator(this,(function(r){switch(r.label){case 0:return[4,Promise.resolve().then((function(){return e.__importStar(Wc())}))];case 1:return n=r.sent(),t._plugins=n,[2]}}))}))},Jc}())})).then((function(e){return e.loadLegacyVideoPlugins(n)}))]:[3,8];case 7:S.sent(),S.label=8;case 8:return(null===(u=r.plan)||void 0===u?void 0:u.track)?[4,Promise.resolve().then((function(){return nl.__importStar(Zc())})).then((function(e){var n;return e.schemaFilter(null===(n=r.plan)||void 0===n?void 0:n.track,t)}))]:[3,10];case 9:return v=S.sent(),[3,11];case 10:v=void 0,S.label=11;case 11:return h=v,y=(0,ul.mergedOptions)(t,i),[4,(0,ll.remoteLoader)(t,n.integrations,y,i.obfuscate,l).catch((function(){return[]}))];case 12:return g=S.sent(),_=nl.__spreadArray(nl.__spreadArray(nl.__spreadArray([dl.validation,cl.pageEnrichment],o,!0),d,!0),g,!0),h&&_.push(h),!1===(null===(s=r.integrations)||void 0===s?void 0:s.All)&&!r.integrations["Segment.io"]||r.integrations&&!1===r.integrations["Segment.io"]?[3,14]:(b=(m=_).push,[4,(0,fl.segmentio)(n,y["Segment.io"],t.integrations)]);case 13:b.apply(m,[S.sent()]),S.label=14;case 14:return[4,n.register.apply(n,_)];case 15:return w=S.sent(),Object.entries(null!==(c=t.enabledMiddleware)&&void 0!==c?c:{}).some((function(e){return e[1]}))?[4,Promise.resolve().then((function(){return nl.__importStar(function(){if(Xc)return el;Xc=1,Object.defineProperty(el,"__esModule",{value:!0}),el.remoteMiddlewares=void 0;var e=D,t=Ne(),n=ii,r=R;return el.remoteMiddlewares=function(i,o,a){var u;return e.__awaiter(this,void 0,void 0,(function(){var s,c,l,f,d=this;return e.__generator(this,(function(p){switch(p.label){case 0:return(0,t.isServer)()?[2,[]]:(s=(0,r.getNextIntegrationsURL)(),c=null!==(u=o.enabledMiddleware)&&void 0!==u?u:{},l=Object.entries(c).filter((function(e){return e[0],e[1]})).map((function(e){return e[0]})),f=l.map((function(t){return e.__awaiter(d,void 0,void 0,(function(){var r,o,u,c;return e.__generator(this,(function(e){switch(e.label){case 0:r=t.replace("@segment/",""),o=r,a&&(o=btoa(r).replace(/=/g,"")),u="".concat(s,"/middleware/").concat(o,"/latest/").concat(o,".js.gz"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,(0,n.loadScript)(u)];case 2:return e.sent(),[2,window["".concat(r,"Middleware")]];case 3:return c=e.sent(),i.log("error",c),i.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}}))}))})),[4,Promise.all(f)]);case 1:return[2,p.sent().filter(Boolean)]}}))}))},el}())})).then((function(e){var r=e.remoteMiddlewares;return nl.__awaiter(P,void 0,void 0,(function(){var e,o;return nl.__generator(this,(function(a){switch(a.label){case 0:return[4,r(w,t,i.obfuscate)];case 1:return e=a.sent(),o=e.map((function(e){return n.addSourceMiddleware(e)})),[2,Promise.all(o)]}}))}))}))]:[3,17];case 16:S.sent(),S.label=17;case 17:return[2,w]}var O}))}))}function wl(e,t,n){var r,i,o,a,u,s,c;return void 0===t&&(t={}),nl.__awaiter(this,void 0,void 0,(function(){var l,f,d,p,h,v,y,g,_,m,b;return nl.__generator(this,(function(w){switch(w.label){case 0:return e.cdnURL&&(0,il.setGlobalCDNUrl)(e.cdnURL),null===(r=e.cdnSettings)||void 0===r?[3,1]:(f=r,[3,3]);case 1:return[4,gl(e.writeKey,e.cdnURL)];case 2:f=w.sent(),w.label=3;case 3:return l=f,t.updateCDNSettings&&(l=t.updateCDNSettings(l)),d=null===(o=null===(i=l.integrations["Segment.io"])||void 0===i?void 0:i.retryQueue)||void 0===o||o,p=nl.__assign({retryQueue:d},t),h=new al.Analytics(e,p),(0,vl.attachInspector)(h),v=null!==(a=e.plugins)&&void 0!==a?a:[],y=null!==(u=e.classicIntegrations)&&void 0!==u?u:[],yl.Stats.initRemoteMetrics(l.metrics),function(e,t){t.push.apply(t,(0,hl.popSnippetWindowBuffer)()),(0,pl.flushSetAnonymousID)(e,t),(0,pl.flushOn)(e,t)}(h,n),[4,bl(e.writeKey,l,h,p,t,v,y)];case 4:return g=w.sent(),_=null!==(s=window.location.search)&&void 0!==s?s:"",m=null!==(c=window.location.hash)&&void 0!==c?c:"",(b=_.length?_:m.replace(/(?=#).*(?=\?)/,"")).includes("ajs_")?[4,h.queryString(b).catch(console.error)]:[3,6];case 5:w.sent(),w.label=6;case 6:return h.initialized=!0,h.emit("initialize",e,t),t.initialPageview&&h.page().catch(console.error),[4,ml(h,n)];case 7:return w.sent(),[2,[h,g]]}}))}))}var Pl=function(e){function t(){var t=this,n=(0,sl.createDeferred)(),r=n.promise,i=n.resolve;return t=e.call(this,(function(e){return r.then((function(t){return wl(t[0],t[1],e)}))}))||this,t._resolveLoadStart=function(e,t){return i([e,t])},t}return nl.__extends(t,e),t.prototype.load=function(e,t){return void 0===t&&(t={}),this._resolveLoadStart(e,t),this},t.load=function(e,n){return void 0===n&&(n={}),(new t).load(e,n)},t.standalone=function(e,n){return t.load({writeKey:e},n).then((function(e){return e[0]}))},t}(pl.AnalyticsBuffered);tl=n.AnalyticsBrowser=Pl;export{tl as AnalyticsBrowser,n as default,_l as loadLegacySettings};