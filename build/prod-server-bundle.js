module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick(function(){throw e})},n.w={},n(n.s=52)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};n(48),t.default=function(e){e.children;return i.default.createElement("div",{className:"NotFound"},i.default.createElement("div",{className:"inner"},i.default.createElement("h1",null,"Not Found")))}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(14)),o=f(n(13)),i=f(n(12)),a=f(n(0)),u=n(20),s=f(n(24)),c=n(25);n(49);var l=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}var d=(0,s.default)(function(t){return(0,i.default)({id:"./",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Routes.js",load:function(){return Promise.all([n(47)("./"+t.page),(0,o.default)(""+t.page,{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"./"+t.page)},resolve:function(){return n(30).resolve("./"+t.page)},chunkName:function(){return""+t.page}})});t.default=function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"nav"},a.default.createElement(u.Link,{to:"/"},"Gallery"),a.default.createElement(u.Link,{to:"/about"},"About"),a.default.createElement(u.Link,{to:"/article/post"},"Article"),a.default.createElement(u.Link,{to:"/article/post2"},"Article 2")),a.default.createElement(c.Switch,null,a.default.createElement(u.Route,{exact:!0,path:"/"},a.default.createElement(d,{page:"Gallery"})),a.default.createElement(u.Route,{path:"/about",render:function(e){var t=e.staticContext,n=t?t.site:location.hostname.split(".")[0];return a.default.createElement(d,{site:n,page:"About"})}}),a.default.createElement(u.Route,{path:"/article/:slug",render:function(e){var t=e.staticContext,n=e.match,r=t?t.site:location.hostname.split(".")[0];return a.default.createElement(d,{site:r,match:n,page:"Article"})}}),a.default.createElement(u.Route,{component:l.default})))}}).call(this,"/")},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(14)),o=u(n(13)),i=u(n(12)),a=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}n(31);var s=function(){(0,i.default)({id:"lodash",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Gallery.js",load:function(){return Promise.all([Promise.resolve().then(function(){var e=n(15);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}),(0,o.default)("lodash",{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"lodash")},resolve:function(){return 15},chunkName:function(){return"lodash"}}).then(function(e){console.log("imported",e)})};t.default=function(){return a.default.createElement("div",null,a.default.createElement("h1",{onClick:s},"Gallery"))}}).call(this,"/")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0));n(38);var o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=n(19)("./"+e.site+"/siteConfig.js");n(18)("./"+t.aboutImage);n(37)("./"+e.site+"/theme.css");try{var i=n(36)("./"+e.site+"/"+e.match.params.slug+".md"),a={backgroundImage:"url("+i.posterImage+")"};return r.default.createElement("div",null,r.default.createElement("div",{className:"Article"},r.default.createElement("div",{className:"poster",style:a}),r.default.createElement("h1",null,i.title),r.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:i.__content}})))}catch(e){return r.default.createElement(o.default,null)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(0)),i=n(20),a=u(n(3));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(i.BrowserRouter,null,o.default.createElement(a.default,null))}}]),t}();t.default=s},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(14)),o=u(n(13)),i=u(n(12)),a=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}n(46),t.default=function(t){var u=n(19)("./"+t.site+"/siteConfig.js"),s=n(18)("./"+u.aboutImage),c=n(41)("./"+t.site+"/bio.md");return(0,i.default)({id:"../css//theme.css",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/About.js",load:function(){return Promise.all([n(40)("./"+t.site+"/theme.css"),(0,o.default)("css/"+t.site+"-theme.css",{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"../css/"+t.site+"/theme.css")},resolve:function(){return n(39).resolve("./"+t.site+"/theme.css")},chunkName:function(){return"css/"+t.site+"-theme.css"}}),a.default.createElement("div",null,a.default.createElement("div",{className:"About"},a.default.createElement("img",{src:s}),a.default.createElement("h1",null,c.title),a.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:c.__content}})))}}).call(this,"/")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearChunks=t.flushModuleIds=t.flushChunkNames=t.MODULE_IDS=t.CHUNK_NAMES=void 0,t.default=function(e,t,u,s){var c=t.key,l=t.timeout,f=void 0===l?15e3:l,d=t.onLoad,p=t.onError,h=t.isDynamic,m=t.modCache,v=t.promCache,y=a(h,e,t,u),g=y.chunkName,b=y.path,w=y.resolve,_=y.load;return{requireSync:function(e,t){var o=(0,r.loadFromCache)(g,e,m);if(!o){var i=void 0;if(!(0,r.isWebpack)()&&b){var a=(0,r.callForString)(b,e)||"";i=(0,r.tryRequire)(a)}else if((0,r.isWebpack)()&&w){var u=(0,r.callForString)(w,e);n.m[u]&&(i=(0,r.tryRequire)(u))}i&&(o=(0,r.resolveExport)(i,c,d,g,e,t,m,!0))}return o},requireAsync:function(e,t){var n=(0,r.loadFromCache)(g,e,m);if(n)return Promise.resolve(n);var o=(0,r.loadFromPromiseCache)(g,e,v);if(o)return o;var i=new Promise(function(n,o){var i=function(e){if(e=e||new Error("timeout exceeded"),clearTimeout(a),p){var t="undefined"==typeof window,n={isServer:t};p(e,n)}o(e)},a=f&&setTimeout(i,f),u=function(o){clearTimeout(a);var u=(0,r.resolveExport)(o,c,d,g,e,t,m);if(u)return n(u);i(new Error("export not found"))},s=_(e,{resolve:u,reject:i});s&&"function"==typeof s.then&&s.then(u).catch(i)});return(0,r.cacheProm)(i,g,e,v),i},addModule:function(e){if(r.isServer||r.isTest){if(g){var t=(0,r.callForString)(g,e);if(t&&o.add(t),!r.isTest)return t}if((0,r.isWebpack)()){var n=(0,r.callForString)(w,e);return n&&i.add(n),n}if(!(0,r.isWebpack)()){var a=(0,r.callForString)(b,e);return a&&i.add(a),a}}},shouldUpdate:function(n,o){var i=(0,r.callForString)(g,n),u=a(h,e,t,o),s=(0,r.callForString)(u.chunkName,o);return i!==s},asyncOnly:!b&&!w||"function"==typeof g}};var r=n(23),o=t.CHUNK_NAMES=new Set,i=t.MODULE_IDS=new Set;t.flushChunkNames=function(){var e=Array.from(o);return o.clear(),e},t.flushModuleIds=function(){var e=Array.from(i);return i.clear(),e},t.clearChunks=function(){o.clear(),i.clear()};var a=function(e,t,n,r){if(e)return"function"==typeof t?t(r):t;var o="function"==typeof t?t:function(){return t};return{file:"default",id:n.id||"default",chunkName:n.chunkName||"default",resolve:n.resolve||"",path:n.path||"",load:o}}},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"body {\n  background-color: #020f17;\n}\n",""])},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"body {\n  background-color: #2c3227;\n}\n",""])},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){(function(e){e.exports=function(e,t){if(!1===t)return e;var n=e.load;return e.then=function(e){return n().then(function(t){return e&&e(t)})},e.catch=function(e){return n().catch(function(t){return e&&e(t)})},e};var t=!1;!function(){if(!t){var r,o=void 0!==n;try{(r=o?n(24):e.require("react-universal-component"))&&(r.setHasBabelPlugin(),t=!0)}catch(e){}}}()}).call(this,n(11)(e))},function(e,t,n){var r={};e.exports=function(e,t){var n=function(e){return"undefined"!=typeof window&&window.__CSS_CHUNKS__?window.__CSS_CHUNKS__[e]:null}(e);if(n){if(r[n])return r[n];var o=document.getElementsByTagName("head")[0],i=document.createElement("link");i.charset="utf-8",i.type="text/css",i.rel="stylesheet",i.timeout=3e4;var a=new Promise(function(t,r){var a,u,s=function(){u&&(i.href=n,u.onerror=null),i.onerror=null,clearTimeout(a),t()};i.onerror=function(){i.onerror=i.onload=null,clearTimeout(a),r(new Error("could not load css chunk: "+e))},function(){var e=navigator.userAgent.match(/\ AppleWebKit\/(\d+)\.(\d+)/);if(e){var t=+e[1],n=+e[2];return 535===t&&n>=24||t>535}return!0}()&&"onload"in i?(i.onload=s,i.href=n):((u=document.createElement("img")).onerror=s,u.src=n),a=setTimeout(i.onerror,i.timeout),o.appendChild(i)});return r[n]=a,a}}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports={title:"About Zelda",author:"Zelda",__content:'<h1 id="how-did-you-get-past-the-guards-">How did you get past the guards?</h1>\n<p>Zelda wakes in a dark dungeon. Link has found her.</p>\n'}},function(e,t){e.exports={title:"About Link",author:"Link",__content:'<h1 id="long-ago-in-the-kingdom-of-hyrule">Long Ago in the Kingdom of Hyrule</h1>\n<p>Our Hero wakes up. He is alone. He must find his sword.</p>\n'}},function(e,t,n){var r={"./link.jpg":43,"./zelda.png":42};function o(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=18},function(e,t,n){var r={"./link/siteConfig.js":45,"./zelda/siteConfig.js":44};function o(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=19},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=a(n(21));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"getChildContext",value:function(){return{report:this.props.report}}},{key:"render",value:function(){return o.default.Children.only(this.props.children)}}]),t}();u.propTypes={report:i.default.func.isRequired},u.childContextTypes={report:i.default.func.isRequired},t.default=u},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.cacheProm=t.loadFromPromiseCache=t.cacheExport=t.loadFromCache=t.callForString=t.createElement=t.findExport=t.resolveExport=t.requireById=t.tryRequire=t.DefaultError=t.DefaultLoading=t.babelInterop=t.isWebpack=t.isServer=t.isTest=void 0;var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(0),a=(r=i)&&r.__esModule?r:{default:r};t.isTest=!1;var u=t.isServer=!("undefined"!=typeof window&&window.document&&window.document.createElement),s=t.isWebpack=function(){return void 0!==n},c=t.babelInterop=function(e){return e&&"object"===(void 0===e?"undefined":o(e))&&e.__esModule?e.default:e},l=(t.DefaultLoading=function(){return a.default.createElement("div",null,"Loading...")},t.DefaultError=function(e){var t=e.error;return a.default.createElement("div",null,"Error: ",t&&t.message)},t.tryRequire=function(e){try{return l(e)}catch(e){0}return null},t.requireById=function(t){return s()||"string"!=typeof t?n(t):e.require(t)}),f=(t.resolveExport=function(e,t,n,r,o,i,a){var u=arguments.length>7&&void 0!==arguments[7]&&arguments[7],s=f(e,t);n&&e&&n(e,{isServer:"undefined"==typeof window,isSync:u},o,i);return r&&s&&p(s,r,o,a),s},t.findExport=function(e,t){return"function"==typeof t?t(e):null===t?e:e&&"object"===(void 0===e?"undefined":o(e))&&t?e[t]:c(e)}),d=(t.createElement=function(e,t){return a.default.isValidElement(e)?a.default.cloneElement(e,t):a.default.createElement(e,t)},t.callForString=function(e,t){return"function"==typeof e?e(t):e}),p=(t.loadFromCache=function(e,t,n){return!u&&n[d(e,t)]},t.cacheExport=function(e,t,n,r){return r[d(t,n)]=e});t.loadFromPromiseCache=function(e,t,n){return n[d(e,t)]},t.cacheProm=function(e,t,n,r){return r[d(t,n)]=e}}).call(this,n(11)(e))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setHasBabelPlugin=t.ReportChunks=t.MODULE_IDS=t.CHUNK_NAMES=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8);Object.defineProperty(t,"CHUNK_NAMES",{enumerable:!0,get:function(){return i.CHUNK_NAMES}}),Object.defineProperty(t,"MODULE_IDS",{enumerable:!0,get:function(){return i.MODULE_IDS}});var a=n(22);Object.defineProperty(t,"ReportChunks",{enumerable:!0,get:function(){return d(a).default}});var u=d(n(0)),s=d(n(21)),c=d(n(50)),l=d(i),f=n(23);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var h=!1,m=function(){return e.hot&&(e.hot.data||"apply"===e.hot.status())};t.setHasBabelPlugin=function(){h=!0};t.default=function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.loading,d=void 0===a?f.DefaultLoading:a,v=i.error,y=void 0===v?f.DefaultError:v,g=i.minDelay,b=void 0===g?0:g,w=i.alwaysDelay,_=void 0!==w&&w,k=i.testBabelPlugin,j=void 0!==k&&k,E=i.loadingTransition,x=void 0===E||E,O=p(i,["loading","error","minDelay","alwaysDelay","testBabelPlugin","loadingTransition"]),C=h||j;return O.isDynamic=C,O.modCache={},O.promCache={},n=t=function(t){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return r.update=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];r._mounted&&(e.error||(e.error=null),r.handleAfter(e,t,n,o))},r.state={error:null},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,u.default.Component),o(n,null,[{key:"preload",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t||{};var o=(0,l.default)(e,O,t),i=o.requireAsync,a=o.requireSync,u=void 0;try{u=a(t,r)}catch(e){return Promise.reject(e)}return Promise.resolve().then(function(){return u||i(t,r)}).then(function(e){return(0,c.default)(n,e,{preload:!0}),e})}}]),o(n,[{key:"componentWillMount",value:function(){this._mounted=!0;var t=(0,l.default)(e,O,this.props),n=t.addModule,r=t.requireSync,o=t.requireAsync,i=t.asyncOnly,a=void 0;try{a=r(this.props,this.context)}catch(e){return this.update({error:e})}this._asyncOnly=i;var u=n(this.props);if(this.context.report&&this.context.report(u),a||f.isServer)return this.handleBefore(!0,!0,f.isServer),void this.update({Component:a},!0,!0,f.isServer);this.handleBefore(!0,!1),this.requireAsync(o,this.props,!0)}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentWillReceiveProps",value:function(t){var n=this;if(C||this._asyncOnly){var r=(0,l.default)(e,O,t,this.props),o=r.requireSync,i=r.requireAsync;if((0,r.shouldUpdate)(t,this.props)){var a=void 0;try{a=o(t,this.context)}catch(e){return this.update({error:e})}if(this.handleBefore(!1,!!a),!a)return this.requireAsync(i,t);var u={Component:a};if(_)return x&&this.update({Component:null}),void setTimeout(function(){return n.update(u,!1,!0)},b);this.update(u,!1,!0)}else if(m()){var s=o(t,this.context);this.setState({Component:function(){return null}}),setTimeout(function(){return n.setState({Component:s})})}}}},{key:"requireAsync",value:function(e,t,n){var r=this;this.state.Component&&x&&this.update({Component:null});var o=new Date;e(t,this.context).then(function(e){var t={Component:e},i=new Date-o;if(i<b)return setTimeout(function(){return r.update(t,n)},b-i);r.update(t,n)}).catch(function(e){return r.update({error:e})})}},{key:"handleBefore",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.props.onBefore&&(0,this.props.onBefore)({isMount:e,isSync:t,isServer:n})}},{key:"handleAfter",value:function(e,t,r,o){var i=e.Component,a=e.error;i&&!a?((0,c.default)(n,i,{preload:!0}),this.props.onAfter&&(0,this.props.onAfter)({isMount:t,isSync:r,isServer:o},i)):a&&this.props.onError&&this.props.onError(a),this.setState(e)}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.Component,o=this.props,i=o.isLoading,a=o.error,u=p(o,["isLoading","error"]);return i?(0,f.createElement)(d,u):a?(0,f.createElement)(y,r({},u,{error:a})):t?(0,f.createElement)(y,r({},u,{error:t})):n?(0,f.createElement)(n,u):(0,f.createElement)(d,u)}}]),n}(),t.contextTypes={store:s.default.object,report:s.default.func},n}}).call(this,n(11)(e))},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createCssHash=t.stylesAsString=t.isCss=t.isJs=t.getJsFileRegex=void 0;var r=i(n(0)),o=i(n(26));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,o){var i=n.publicPath.replace(/\/$/,""),f=a(e),d=e.filter(function(e){return u(f,e)}),p=t.filter(s),h=l(n),m={Js:function(){return r.default.createElement("span",null,d.map(function(e,t){return r.default.createElement("script",{type:"text/javascript",src:i+"/"+e,key:t,defer:!0})}))},Styles:function(){return r.default.createElement("span",null,p.map(function(e,t){return r.default.createElement("link",{rel:"stylesheet",href:i+"/"+e,key:t})}))},js:{toString:function(){return d.map(function(e){return"<script type='text/javascript' src='"+i+"/"+e+"' defer><\/script>"}).join("\n")}},styles:{toString:function(){return p.map(function(e){return"<link rel='stylesheet' href='"+i+"/"+e+"' />"}).join("\n")}},Css:function(){return r.default.createElement("span",null,r.default.createElement("style",null,c(p,o)))},css:{toString:function(){return"<style>"+c(p,o)+"</style>"}},scripts:d,stylesheets:p,publicPath:i,outputPath:o,cssHashRaw:h,CssHash:function(){return r.default.createElement("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:"window.__CSS_CHUNKS__ = "+JSON.stringify(h)}})},cssHash:{toString:function(){return"<script type='text/javascript'>window.__CSS_CHUNKS__= "+JSON.stringify(h)+"<\/script>"}}};return m};var a=t.getJsFileRegex=function(e){return!!e.find(function(e){return e.includes("no_css")})?/\.no_css\.js$/:/\.js$/},u=t.isJs=function(e,t){return e.test(t)&&!/\.hot-update\.js$/.test(t)},s=t.isCss=function(e){return/\.css$/.test(e)},c=t.stylesAsString=function(e,t){if(!t)throw new Error("No `outputPath` was provided as an option to `flushChunks`. \n      Please provide one so stylesheets can be read from the\n      file system since you're embedding the css as a string.");var n=t.replace(/\/$/,"");return e.map(function(e){var t=n+"/"+e;return o.default.readFileSync(t,"utf8")}).join("\n").replace(/\/\*# sourceMappingURL=.+\*\//g,"")},l=t.createCssHash=function(e){var t=e.assetsByChunkName,n=e.publicPath;return Object.keys(t).reduce(function(e,r){if(!t[r]||!t[r].find)return e;var o=t[r].find(function(e){return e.endsWith(".css")});return o&&(e[r]=""+n+o),e},{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filesFromChunks=t.concatFilesAtKeys=t.normalizePath=t.isUnique=t.createFilesByModuleId=t.createFilesByPath=t.flushWebpack=t.flushBabel=t.flush=t.flushFilesPure=t.flushFiles=t.flushChunks=void 0;var r,o=n(27),i=(r=o)&&r.__esModule?r:{default:r};function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u=null,s=null,c=void 0!==n,l={before:["bootstrap","vendor"],after:["main"]};t.default=function(e,t){return f(e,c,t)};var f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.before||l.before,o=_(r,e.assetsByChunkName),u=n.chunkNames?_(n.chunkNames,e.assetsByChunkName,!0):p(n.moduleIds||[],e,n.rootDir,t),s=n.after||l.after,c=_(s,e.assetsByChunkName);return(0,i.default)([].concat(a(o),a(u),a(c)),[].concat(a(o),a(c.reverse()),a(u)),e,n.outputPath)},d=function(e,t,n){var r=n.chunkNames?_(n.chunkNames,e.assetsByChunkName):p(n.moduleIds||[],e,n.rootDir,t),o=n.filter;if(o){if("function"==typeof o)return r.filter(o);var i=o instanceof RegExp?o:new RegExp("."+o+"$");return r.filter(function(e){return i.test(e)})}return r},p=function(e,t,n,r){return r?m(e,t).filter(g):h(e,t,n).filter(g)},h=function(e,t,n){if(!n)throw new Error("No `rootDir` was provided as an option to `flushChunks`.\n      Please provide one so modules rendered server-side can be\n      paired to their webpack equivalents client-side, and their\n      corresponding chunks.");var r=n;return u=u||v(t),w(u,e.map(function(e){return b(e,r)}))},m=function(e,t){return s=s||y(t),w(s,e)},v=function(e){var t=e.chunks,n=e.modules,r=t.reduce(function(e,t){return e[t.id]=t.files,e},{});return n.reduce(function(e,t){var n=t.name,o=w(r,t.chunks);return e[n]=o.filter(g),e},{})},y=function(e){var t=v(e);return e.modules.reduce(function(e,n){var r=n.name;return e[n.id]=t[r],e},{})},g=function(e,t,n){return n.indexOf(e)===t},b=function(e,t){return e.replace(t,".").replace(/\.js$/,"")+".js"},w=function(e,t){return t.reduce(function(t,n){return t.concat(e[n]||[])},[])},_=function(e,t,n){var r;return(r=[]).concat.apply(r,a(e.filter(function(e){var r=!(!t[e]&&!t[e+"-"]);return!r&&n&&console.warn("[FLUSH CHUNKS]: Unable to find "+e+" in Webpack chunks. Please check usage of Babel plugin."),r}).map(function(e){return t[e]||t[e+"-"]})))};t.flushChunks=f,t.flushFiles=function(e,t){return d(e,c,t)},t.flushFilesPure=d,t.flush=p,t.flushBabel=h,t.flushWebpack=m,t.createFilesByPath=v,t.createFilesByModuleId=y,t.isUnique=g,t.normalizePath=b,t.concatFilesAtKeys=w,t.filesFromChunks=_},function(e,t,n){e.exports={flushModuleIds:n(8).flushModuleIds,flushChunkNames:n(8).flushChunkNames,clearChunks:n(8).clearChunks,ReportChunks:n(22).default}},function(e,t,n){var r={"./About":7,"./About.js":7,"./AppRoot":6,"./AppRoot.js":6,"./Article":5,"./Article.js":5,"./Gallery":4,"./Gallery.js":4,"./NotFound":2,"./NotFound.js":2,"./Routes":3,"./Routes.js":3};function o(e){var t=i(e);if(!n.m[t]){var r=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw r.code="MODULE_NOT_FOUND",r}return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,o.id=30,e.exports=o},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t){e.exports={title:"This lock is making me angry",author:"Zelda",posterImage:"http://laws-articles.s3.amazonaws.com/zelda-article-cover-2.jpg",__content:'<p><img src="http://laws-articles.s3.amazonaws.com/article-zelda-3.jpg" alt=""></p>\n<p>Okay this is getting to be a bore. This lock is watching me. I&#39;m sure of it. Perhaps Link will find me, perhaps not, but if I can just turn these hand cuffs into a sword, with my magic, I can make enough noise to get the guards to open the lock for me.</p>\n<p>Ah ha! I&#39;ve done it. Magic&#39;s working again. Tri-force must be near. Okay, now to make all the noise in the world. These guards have no idea what kind of Princess they&#39;re dealing with.</p>\n<p><img src="http://laws-articles.s3.amazonaws.com/article-zelda-4.jpg" alt=""></p>\n'}},function(e,t){e.exports={title:"Ganon is the Worst Host",author:"Zelda",posterImage:"http://laws-articles.s3.amazonaws.com/triforce-article-cover.jpg",__content:'<p><img src="http://laws-articles.s3.amazonaws.com/article-zelda-1.jpg" alt=""></p>\n<p>It sucks in here. I&#39;m trapped in Ganon&#39;s stinky old prison. The tri-force is just out of range. I can&#39;t feel it from here. I&#39;ll need to devise an escape plan. Something ingeniously magical.</p>\n<p>I&#39;m sure I&#39;ll think of something clever, but until then, I&#39;m going to think of my true love... Hyrule. I do hope she&#39;s doing okay out there. That someone brave is keeping her grass cut. The end.</p>\n<p><img src="http://laws-articles.s3.amazonaws.com/article-zelda-2.jpg" alt=""></p>\n'}},function(e,t){e.exports={title:"There's Rupees in them thar lawns",author:"Link",posterImage:"http://laws-articles.s3.amazonaws.com/link-article-cover-2.jpg",__content:'<p><img src="http://laws-articles.s3.amazonaws.com/article-link-3.jpg" alt=""></p>\n<p>I knew my sword was good for something. Why not earn a little extra money while on my very time sensitive adventure. No real rush tho. I hope Zelda has a few good books she can read.</p>\n<p>Who knew these things swords could be so heavy? I bet I could take on Ganon already, I&#39;m just sharpening it on this grass and Octoroks. I got em all running scared.</p>\n<p><img src="http://laws-articles.s3.amazonaws.com/article-link-4.jpg" alt=""></p>\n'}},function(e,t){e.exports={title:"Day One: An Adventure Begins!",author:"Link",posterImage:"http://laws-articles.s3.amazonaws.com/link-article-cover.jpg",__content:'<p><img src="http://laws-articles.s3.amazonaws.com/article-link-1.jpg" alt=""></p>\n<p>Good morning. I&#39;m off on an adventure to rescue the Princess. I&#39;ll bring my sword because, it&#39;s dangerous to go into caves alone, and my sword counts as people.</p>\n<p>Someone gave me this map. I should keep it on me, like in the upper right-hand corner. Hyrule looks gigantic. I bet they&#39;ll have me mowing lawns for a while.</p>\n<p><img src="http://laws-articles.s3.amazonaws.com/article-link-2.jpg" alt=""></p>\n'}},function(e,t,n){var r={"./link/bio.md":17,"./link/post.md":35,"./link/post2.md":34,"./zelda/bio.md":16,"./zelda/post.md":33,"./zelda/post2.md":32};function o(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=36},function(e,t,n){var r={"./link/theme.css":10,"./zelda/theme.css":9};function o(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=37},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".Article {\n  margin: 200px auto;\n}\n\n.Article h1 {\n  color: white;\n  font-weight: 100;\n  font-size: 4em;\n  text-align: right;\n  max-width: 820px;\n  padding: 0 40px 0 400px;\n  text-shadow: 0 0 20px black;\n  margin: 0 auto -13px auto;\n}\n\n.Article .poster {\n  position: fixed;\n  top: 30px;\n  height: 500px;\n  width: 100%;\n  z-index: -1;\n  border-bottom: 4px solid white;\n  background-position: center 0;\n  background-size: cover;\n}\n\n@media (max-width: 768px) {\n  .Article h1 {\n    padding: 0;\n  }\n}\n",""])},function(e,t,n){var r={"./link/theme.css":10,"./zelda/theme.css":9};function o(e){var t=i(e);if(!n.m[t]){var r=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw r.code="MODULE_NOT_FOUND",r}return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,o.id=39,e.exports=o},function(e,t,n){var r={"./link/theme.css":[10],"./zelda/theme.css":[9]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=n(t[0]);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}):Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=40,e.exports=o},function(e,t,n){var r={"./link/bio.md":17,"./zelda/bio.md":16};function o(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=41},function(e,t,n){e.exports=n.p+"images/zelda.png"},function(e,t,n){e.exports=n.p+"images/link.jpg"},function(e,t,n){"use strict";e.exports={aboutImage:"zelda.png",aboutText:"Hello from Zelda"}},function(e,t,n){"use strict";e.exports={aboutImage:"link.jpg"}},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".About {\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  flex-flow: column;\n}\n\n.About > img {\n  border-radius: 100%;\n  border: 5px;\n  width: 300px;\n  box-shadow: 0 0 20px black;\n}\n\nh1 {\n  font-size: 5em;\n  font-family: sans-serif;\n  color: white;\n  text-shadow: 0 0 20px black;\n  text-align: left;\n}\n\n.About .content {\n  grid-template-columns: 1fr;\n  grid-gap: 0;\n}\n",""])},function(e,t,n){var r={"./About":[7,0],"./About.js":[7,0],"./AppRoot":[6,0],"./AppRoot.js":[6,0],"./Article":[5,0],"./Article.js":[5,0],"./Gallery":[4,0],"./Gallery.js":[4,0],"./NotFound":[2],"./NotFound.js":[2],"./Routes":[3],"./Routes.js":[3]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=n(t[0]);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}):Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=47,e.exports=o},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".NotFound {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.NotFound .inner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 300px;\n  width: 300px;\n  border-radius: 100%;\n  background-color: #fff;\n}\n",""])},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".nav {\n  width: 100%;\n  line-height: 2em;\n  background-color: black;\n  position: fixed;\n  z-index: 2;\n  top: 0;\n}\n\n.nav a {\n  color: white;\n  text-decoration: none;\n  padding: 0 20px;\n}\n",""])},function(e,t){e.exports=require("hoist-non-react-statics")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(0)),o=n(51),i=n(25),a=c(n(3)),u=n(29),s=c(n(28));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.clientStats;return function(e,n){var c=e.hostname.split(".")[0],l={site:c},f=(0,s.default)(t,{chunkNames:(0,u.flushChunkNames)().concat(["css/"+c+"-theme-css"])}),d=f.js,p=f.styles;f.cssHash;n.send("\n    <html>\n      <head>\n        "+p+'\n      </head>\n      <body>\n        <div id="react-root">'+(0,o.renderToString)(r.default.createElement(i.StaticRouter,{location:e.url,context:l},r.default.createElement(a.default,null)))+"</div>\n        "+d+"\n      </body>\n    </html>\n  ")}}}]);