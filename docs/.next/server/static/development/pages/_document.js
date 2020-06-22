module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/next/dist/next-server/lib/constants.js":
/*!**************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/constants.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PHASE_EXPORT = 'phase-export';
exports.PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PAGES_MANIFEST = 'pages-manifest.json';
exports.BUILD_MANIFEST = 'build-manifest.json';
exports.EXPORT_MARKER = 'export-marker.json';
exports.EXPORT_DETAIL = 'export-detail.json';
exports.PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.ROUTES_MANIFEST = 'routes-manifest.json';
exports.REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.SERVER_DIRECTORY = 'server';
exports.SERVERLESS_DIRECTORY = 'serverless';
exports.CONFIG_FILE = 'next.config.js';
exports.BUILD_ID_FILE = 'BUILD_ID';
exports.BLOCKED_PAGES = ['/_document', '/_app'];
exports.CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__';
exports.CLIENT_STATIC_FILES_RUNTIME_PATH = `${exports.CLIENT_STATIC_FILES_PATH}/${exports.CLIENT_STATIC_FILES_RUNTIME}`; // static/runtime/main.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`; // static/runtime/polyfills.js

exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/polyfills.js`; // matches static/<buildid>/pages/<page>.js

exports.IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/; // matches static/<buildid>/pages/:page*.js

exports.ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;
exports.SERVERLESS_ROUTE_NAME_REGEX = /^pages[/\\](.*)\.js$/;
exports.TEMPORARY_REDIRECT_STATUS = 307;
exports.PERMANENT_REDIRECT_STATUS = 308;
exports.STATIC_PROPS_ID = '__N_SSG';
exports.SERVER_PROPS_ID = '__N_SSP';

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/document-context.js":
/*!*********************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/document-context.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.DocumentContext = React.createContext(null);

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');

  if (path) {
    path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

    if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  }

  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../node_modules/next/dist/next-server/server/utils.js":
/*!*************************************************************!*\
  !*** ../node_modules/next/dist/next-server/server/utils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ../lib/constants */ "../node_modules/next/dist/next-server/lib/constants.js");
function isBlockedPage(pathname) {
    return constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1;
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/&amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;


/***/ }),

/***/ "../node_modules/next/dist/pages/_document.js":
/*!****************************************************!*\
  !*** ../node_modules/next/dist/pages/_document.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../node_modules/next/dist/next-server/lib/constants.js");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../node_modules/next/dist/next-server/lib/document-context.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../node_modules/next/dist/next-server/server/utils.js");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => _react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return _react.default.createElement("html", _extends({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        const isReactHelmet = child && child.props && child.props['data-react-helmet'];

        if (child && child.type === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", _extends({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", _extends({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => _react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [_react.default.createElement("script", _extends({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", _extends({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, this.getPolyfillScripts(), page !== '/_error' && pageScript, appScript, staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? `/index.${buildId}.js` : '/index.js';
  }

  return buildId ? `${page}.${buildId}.js` : `${page}.js`;
}

/***/ }),

/***/ "../node_modules/next/dist/server/htmlescape.js":
/*!******************************************************!*\
  !*** ../node_modules/next/dist/server/htmlescape.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "../node_modules/next/document.js":
/*!****************************************!*\
  !*** ../node_modules/next/document.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "../node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "../packages/material-ui-styles/src/ServerStyleSheets/ServerStyleSheets.js":
/*!*********************************************************************************!*\
  !*** ../packages/material-ui-styles/src/ServerStyleSheets/ServerStyleSheets.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerStyleSheets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StylesProvider */ "../packages/material-ui-styles/src/StylesProvider/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createGenerateClassName */ "../packages/material-ui-styles/src/createGenerateClassName/index.js");
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/packages/material-ui-styles/src/ServerStyleSheets/ServerStyleSheets.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class ServerStyleSheets {
  constructor(options = {}) {
    this.options = options;
  }

  collect(children) {
    // This is needed in order to deduplicate the injection of CSS in the page.
    const sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

    this.sheetsRegistry = new jss__WEBPACK_IMPORTED_MODULE_1__["SheetsRegistry"](); // A new class name generator

    const generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return __jsx(_StylesProvider__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      sheetsManager: sheetsManager,
      serverGenerateClassName: generateClassName,
      sheetsRegistry: this.sheetsRegistry
    }, this.options, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }), children);
  }

  toString() {
    return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
  }

  getStyleElement(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('style', _objectSpread({
      id: 'jss-server-side',
      key: 'jss-server-side',
      dangerouslySetInnerHTML: {
        __html: this.toString()
      }
    }, props));
  }

}

/***/ }),

/***/ "../packages/material-ui-styles/src/ServerStyleSheets/index.js":
/*!*********************************************************************!*\
  !*** ../packages/material-ui-styles/src/ServerStyleSheets/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerStyleSheets */ "../packages/material-ui-styles/src/ServerStyleSheets/ServerStyleSheets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/StylesProvider/StylesProvider.js":
/*!***************************************************************************!*\
  !*** ../packages/material-ui-styles/src/StylesProvider/StylesProvider.js ***!
  \***************************************************************************/
/*! exports provided: sheetsManager, StylesContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return sheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return StylesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StylesProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createGenerateClassName */ "../packages/material-ui-styles/src/createGenerateClassName/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jssPreset */ "../packages/material-ui-styles/src/jssPreset/index.js");
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/packages/material-ui-styles/src/StylesProvider/StylesProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






 // Default JSS instance.

const jss = Object(jss__WEBPACK_IMPORTED_MODULE_4__["create"])(Object(_jssPreset__WEBPACK_IMPORTED_MODULE_5__["default"])()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

const generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Exported for test purposes

const sheetsManager = new Map();
const defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
const StylesContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultOptions);

if (true) {
  StylesContext.displayName = 'StylesContext';
}

let injectFirstNode;
function StylesProvider(props) {
  const {
    children,
    injectFirst = false,
    disableGeneration = false
  } = props,
        localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);

  const outerOptions = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StylesContext);

  const context = _objectSpread(_objectSpread({}, outerOptions), {}, {
    disableGeneration
  }, localOptions);

  if (true) {
    if ( true && !context.sheetsManager) {
      console.error('Material-UI: You need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error('Material-UI: You cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && false) {
    if (!injectFirstNode) {
      const head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = Object(jss__WEBPACK_IMPORTED_MODULE_4__["create"])({
      plugins: Object(_jssPreset__WEBPACK_IMPORTED_MODULE_5__["default"])().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return __jsx(StylesContext.Provider, {
    value: context,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 10
    }
  }, children);
}
StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * JSS's class name generator.
   */
  generateClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * JSS's instance.
   */
  jss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * @ignore
   */
  serverGenerateClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

if (true) {
  StylesProvider.propTypes = Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_2__["exactProp"])(StylesProvider.propTypes);
}

/***/ }),

/***/ "../packages/material-ui-styles/src/StylesProvider/index.js":
/*!******************************************************************!*\
  !*** ../packages/material-ui-styles/src/StylesProvider/index.js ***!
  \******************************************************************/
/*! exports provided: default, sheetsManager, StylesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesProvider */ "../packages/material-ui-styles/src/StylesProvider/StylesProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["sheetsManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["StylesContext"]; });




/***/ }),

/***/ "../packages/material-ui-styles/src/ThemeProvider/ThemeProvider.js":
/*!*************************************************************************!*\
  !*** ../packages/material-ui-styles/src/ThemeProvider/ThemeProvider.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useTheme/ThemeContext */ "../packages/material-ui-styles/src/useTheme/ThemeContext.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useTheme */ "../packages/material-ui-styles/src/useTheme/index.js");
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nested */ "../packages/material-ui-styles/src/ThemeProvider/nested.js");
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/packages/material-ui-styles/src/ThemeProvider/ThemeProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    if (true) {
      if (!mergedTheme) {
        console.error(['Material-UI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }

    return mergedTheme;
  }

  return _objectSpread(_objectSpread({}, outerTheme), localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_4__["default"])();

  if (true) {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['Material-UI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }

  const theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[_nested__WEBPACK_IMPORTED_MODULE_5__["default"]] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return __jsx(_useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 10
    }
  }, children);
}

ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired
};

if (true) {
  ThemeProvider.propTypes = Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_2__["exactProp"])(ThemeProvider.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "../packages/material-ui-styles/src/ThemeProvider/index.js":
/*!*****************************************************************!*\
  !*** ../packages/material-ui-styles/src/ThemeProvider/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeProvider */ "../packages/material-ui-styles/src/ThemeProvider/ThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/ThemeProvider/nested.js":
/*!******************************************************************!*\
  !*** ../packages/material-ui-styles/src/ThemeProvider/nested.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ __webpack_exports__["default"] = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');

/***/ }),

/***/ "../packages/material-ui-styles/src/createGenerateClassName/createGenerateClassName.js":
/*!*********************************************************************************************!*\
  !*** ../packages/material-ui-styles/src/createGenerateClassName/createGenerateClassName.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGenerateClassName; });
/* harmony import */ var _ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ThemeProvider/nested */ "../packages/material-ui-styles/src/ThemeProvider/nested.js");

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

const pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName(options = {}) {
  const {
    disableGlobal = false,
    productionPrefix = 'jss',
    seed = ''
  } = options;
  const seedPrefix = seed === '' ? '' : `${seed}-`;
  let ruleCounter = 0;

  const getNextCounterId = () => {
    ruleCounter += 1;

    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(['Material-UI: You might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    return ruleCounter;
  };

  return (rule, styleSheet) => {
    const name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return `Mui-${rule.key}`;
      }

      const prefix = `${seedPrefix}${name}-${rule.key}`;

      if (!styleSheet.options.theme[_ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__["default"]] || seed !== '') {
        return prefix;
      }

      return `${prefix}-${getNextCounterId()}`;
    }

    if (false) {}

    const suffix = `${rule.key}-${getNextCounterId()}`; // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return `${seedPrefix}${styleSheet.options.classNamePrefix}-${suffix}`;
    }

    return `${seedPrefix}${suffix}`;
  };
}

/***/ }),

/***/ "../packages/material-ui-styles/src/createGenerateClassName/index.js":
/*!***************************************************************************!*\
  !*** ../packages/material-ui-styles/src/createGenerateClassName/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGenerateClassName */ "../packages/material-ui-styles/src/createGenerateClassName/createGenerateClassName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/createStyles/createStyles.js":
/*!***********************************************************************!*\
  !*** ../packages/material-ui-styles/src/createStyles/createStyles.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyles; });
function createStyles(styles) {
  return styles;
}

/***/ }),

/***/ "../packages/material-ui-styles/src/createStyles/index.js":
/*!****************************************************************!*\
  !*** ../packages/material-ui-styles/src/createStyles/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyles */ "../packages/material-ui-styles/src/createStyles/createStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/getStylesCreator/getStylesCreator.js":
/*!*******************************************************************************!*\
  !*** ../packages/material-ui-styles/src/getStylesCreator/getStylesCreator.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStylesCreator; });
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _noopTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noopTheme */ "../packages/material-ui-styles/src/getStylesCreator/noopTheme.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getStylesCreator(stylesOrCreator) {
  const themingEnabled = typeof stylesOrCreator === 'function';

  if (true) {
    if (typeof stylesOrCreator !== 'object' && !themingEnabled) {
      console.error(['Material-UI: The `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: (theme, name) => {
      let styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === _noopTheme__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            // TODO: prepend error message/name instead
            console.error(['Material-UI: The `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      const overrides = theme.overrides[name];

      const stylesWithOverrides = _objectSpread({}, styles);

      Object.keys(overrides).forEach(key => {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(['Material-UI: You are trying to override a style that does not exist.', `Fix the \`${key}\` key of \`theme.overrides.${name}\`.`].join('\n'));
          }
        }

        stylesWithOverrides[key] = Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

/***/ }),

/***/ "../packages/material-ui-styles/src/getStylesCreator/index.js":
/*!********************************************************************!*\
  !*** ../packages/material-ui-styles/src/getStylesCreator/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStylesCreator */ "../packages/material-ui-styles/src/getStylesCreator/getStylesCreator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/getStylesCreator/noopTheme.js":
/*!************************************************************************!*\
  !*** ../packages/material-ui-styles/src/getStylesCreator/noopTheme.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We use the same empty object to ref count the styles that don't need a theme object.
const noopTheme = {};
/* harmony default export */ __webpack_exports__["default"] = (noopTheme);

/***/ }),

/***/ "../packages/material-ui-styles/src/getThemeProps/getThemeProps.js":
/*!*************************************************************************!*\
  !*** ../packages/material-ui-styles/src/getThemeProps/getThemeProps.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getThemeProps; });
/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.props[name];
  let propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

/***/ }),

/***/ "../packages/material-ui-styles/src/getThemeProps/index.js":
/*!*****************************************************************!*\
  !*** ../packages/material-ui-styles/src/getThemeProps/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getThemeProps */ "../packages/material-ui-styles/src/getThemeProps/getThemeProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getThemeProps__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/index.js":
/*!***************************************************!*\
  !*** ../packages/material-ui-styles/src/index.js ***!
  \***************************************************/
/*! exports provided: createGenerateClassName, createStyles, getThemeProps, jssPreset, makeStyles, mergeClasses, ServerStyleSheets, styled, StylesProvider, sheetsManager, StylesContext, ThemeProvider, useTheme, withStyles, withTheme, withThemeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGenerateClassName */ "../packages/material-ui-styles/src/createGenerateClassName/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStyles */ "../packages/material-ui-styles/src/createStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getThemeProps */ "../packages/material-ui-styles/src/getThemeProps/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemeProps", function() { return _getThemeProps__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jssPreset */ "../packages/material-ui-styles/src/jssPreset/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./makeStyles */ "../packages/material-ui-styles/src/makeStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeClasses */ "../packages/material-ui-styles/src/mergeClasses/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeClasses", function() { return _mergeClasses__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServerStyleSheets */ "../packages/material-ui-styles/src/ServerStyleSheets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheets", function() { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "../packages/material-ui-styles/src/styled/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StylesProvider */ "../packages/material-ui-styles/src/StylesProvider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["sheetsManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["StylesContext"]; });

/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ThemeProvider */ "../packages/material-ui-styles/src/ThemeProvider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useTheme */ "../packages/material-ui-styles/src/useTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./withStyles */ "../packages/material-ui-styles/src/withStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withTheme */ "../packages/material-ui-styles/src/withTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_13__["withThemeCreator"]; });

/* eslint-disable import/export */

/* Warning if there are several instances of @material-ui/styles */

if (false) {}




























/***/ }),

/***/ "../packages/material-ui-styles/src/jssPreset/index.js":
/*!*************************************************************!*\
  !*** ../packages/material-ui-styles/src/jssPreset/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jssPreset */ "../packages/material-ui-styles/src/jssPreset/jssPreset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/jssPreset/jssPreset.js":
/*!*****************************************************************!*\
  !*** ../packages/material-ui-styles/src/jssPreset/jssPreset.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jssPreset; });
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss-plugin-rule-value-function */ "jss-plugin-rule-value-function");
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-plugin-global */ "jss-plugin-global");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss-plugin-nested */ "jss-plugin-nested");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-plugin-camel-case */ "jss-plugin-camel-case");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss-plugin-default-unit */ "jss-plugin-default-unit");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "jss-plugin-vendor-prefixer");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-plugin-props-sort */ "jss-plugin-props-sort");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__);






 // Subset of jss-preset-default with only the plugins the Material-UI components are using.

function jssPreset() {
  return {
    plugins: [jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0___default()(), jss_plugin_global__WEBPACK_IMPORTED_MODULE_1___default()(), jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2___default()(), jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3___default()(), jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4___default()(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    true ? null : undefined, jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6___default()()]
  };
}

/***/ }),

/***/ "../packages/material-ui-styles/src/makeStyles/index.js":
/*!**************************************************************!*\
  !*** ../packages/material-ui-styles/src/makeStyles/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeStyles */ "../packages/material-ui-styles/src/makeStyles/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/makeStyles/indexCounter.js":
/*!*********************************************************************!*\
  !*** ../packages/material-ui-styles/src/makeStyles/indexCounter.js ***!
  \*********************************************************************/
/*! exports provided: increment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
let indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (true) {
    if (indexCounter >= 0) {
      console.warn(['Material-UI: You might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
}

/***/ }),

/***/ "../packages/material-ui-styles/src/makeStyles/makeStyles.js":
/*!*******************************************************************!*\
  !*** ../packages/material-ui-styles/src/makeStyles/makeStyles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mergeClasses */ "../packages/material-ui-styles/src/mergeClasses/index.js");
/* harmony import */ var _multiKeyStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiKeyStore */ "../packages/material-ui-styles/src/makeStyles/multiKeyStore.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useTheme */ "../packages/material-ui-styles/src/useTheme/index.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StylesProvider */ "../packages/material-ui-styles/src/StylesProvider/index.js");
/* harmony import */ var _indexCounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indexCounter */ "../packages/material-ui-styles/src/makeStyles/indexCounter.js");
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getStylesCreator */ "../packages/material-ui-styles/src/getStylesCreator/index.js");
/* harmony import */ var _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../getStylesCreator/noopTheme */ "../packages/material-ui-styles/src/getStylesCreator/noopTheme.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function getClasses({
  state,
  stylesOptions
}, classes, Component) {
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  let generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = Object(_mergeClasses__WEBPACK_IMPORTED_MODULE_2__["default"])({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }

  return state.cacheClasses.value;
}

function attach({
  state,
  theme,
  stylesOptions,
  stylesCreator,
  name
}, props) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  let sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  const options = _objectSpread(_objectSpread(_objectSpread({}, stylesCreator.options), stylesOptions), {}, {
    theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    let staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = _multiKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    const styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, _objectSpread({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        _multiKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = Object(jss__WEBPACK_IMPORTED_MODULE_1__["getDynamicStyles"])(styles);
  }

  if (sheetManager.dynamicStyles) {
    const dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _objectSpread({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = Object(_mergeClasses__WEBPACK_IMPORTED_MODULE_2__["default"])({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update({
  state
}, props) {
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach({
  state,
  theme,
  stylesOptions,
  stylesCreator
}) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  const sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  const key = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef([]);
  let output; // Store "generation" key. Just returns a new object every time

  const currentKey = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => ({}), values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => () => {
    if (output) {
      output();
    }
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator, options = {}) {
  const {
    // alias for classNamePrefix, if provided will listen to theme (required for theme.overrides)
    name,
    // Help with debuggability.
    classNamePrefix: classNamePrefixOption,
    Component,
    defaultTheme = _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_8__["default"]
  } = options,
        stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  const stylesCreator = Object(_getStylesCreator__WEBPACK_IMPORTED_MODULE_7__["default"])(stylesOrCreator);
  const classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: Object(_indexCounter__WEBPACK_IMPORTED_MODULE_6__["increment"])(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };

  const useStyles = (props = {}) => {
    const theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_4__["default"])() || defaultTheme;

    const stylesOptions = _objectSpread(_objectSpread({}, react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_StylesProvider__WEBPACK_IMPORTED_MODULE_5__["StylesContext"])), stylesOptions2);

    const instance = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    const shouldUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    useSynchronousEffect(() => {
      const current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return () => {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    const classes = getClasses(instance.current, props.classes, Component);

    if (true) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      react__WEBPACK_IMPORTED_MODULE_0___default.a.useDebugValue(classes);
    }

    return classes;
  };

  return useStyles;
}

/***/ }),

/***/ "../packages/material-ui-styles/src/makeStyles/multiKeyStore.js":
/*!**********************************************************************!*\
  !*** ../packages/material-ui-styles/src/makeStyles/multiKeyStore.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Used https://github.com/thinkloop/multi-key-cache as inspiration
const multiKeyStore = {
  set: (cache, key1, key2, value) => {
    let subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (multiKeyStore);

/***/ }),

/***/ "../packages/material-ui-styles/src/mergeClasses/index.js":
/*!****************************************************************!*\
  !*** ../packages/material-ui-styles/src/mergeClasses/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeClasses */ "../packages/material-ui-styles/src/mergeClasses/mergeClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _mergeClasses__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/mergeClasses/mergeClasses.js":
/*!***********************************************************************!*\
  !*** ../packages/material-ui-styles/src/mergeClasses/mergeClasses.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeClasses; });
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function mergeClasses(options = {}) {
  const {
    baseClasses,
    newClasses,
    Component
  } = options;

  if (!newClasses) {
    return baseClasses;
  }

  const nextClasses = _objectSpread({}, baseClasses);

  if (true) {
    if (typeof newClasses === 'string') {
      console.error([`Material-UI: The value \`${newClasses}\` ` + `provided to the classes prop of ${Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["getDisplayName"])(Component)} is incorrect.`, 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(key => {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error([`Material-UI: The key \`${key}\` ` + `provided to the classes prop is not implemented in ${Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["getDisplayName"])(Component)}.`, `You can only override one of the following: ${Object.keys(baseClasses).join(',')}.`].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error([`Material-UI: The key \`${key}\` ` + `provided to the classes prop is not valid for ${Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["getDisplayName"])(Component)}.`, `You need to provide a non empty string instead of: ${newClasses[key]}.`].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
    }
  });
  return nextClasses;
}

/***/ }),

/***/ "../packages/material-ui-styles/src/styled/index.js":
/*!**********************************************************!*\
  !*** ../packages/material-ui-styles/src/styled/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "../packages/material-ui-styles/src/styled/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _styled__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/styled/styled.js":
/*!***********************************************************!*\
  !*** ../packages/material-ui-styles/src/styled/styled.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return styled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../makeStyles */ "../packages/material-ui-styles/src/makeStyles/index.js");
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/packages/material-ui-styles/src/styled/styled.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function omit(input, fields) {
  const output = {};
  Object.keys(input).forEach(prop => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  const componentCreator = (style, options = {}) => {
    const {
      name
    } = options,
          stylesOptions = _objectWithoutProperties(options, ["name"]);

    if ( true && Component === undefined) {
      throw new Error(['You are calling styled(Component)(style) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }

    let classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        const displayName = Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    const stylesOrCreator = typeof style === 'function' ? theme => ({
      root: props => style(_objectSpread({
        theme
      }, props))
    }) : {
      root: style
    };
    const useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(stylesOrCreator, _objectSpread({
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    let filterProps;
    let propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    const StyledComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function StyledComponent(props, ref) {
      const {
        children,
        className: classNameProp,
        clone,
        component: ComponentProp
      } = props,
            other = _objectWithoutProperties(props, ["children", "className", "clone", "component"]);

      const classes = useStyles(props);
      const className = clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, classNameProp);
      let spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, _objectSpread({
          className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(_objectSpread({
          className
        }, spread));
      }

      const FinalComponent = ComponentProp || Component;
      return __jsx(FinalComponent, _extends({
        ref: ref,
        className: className
      }, spread, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }), children);
    });
    StyledComponent.propTypes = _objectSpread({
      /**
       * A render function or node.
       */
      children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),

      /**
       * @ignore
       */
      className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

      /**
       * If `true`, the component will recycle it's children HTML element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, props => {
        if (props.clone && props.component) {
          return new Error('You can not use the clone and component prop at the same time.');
        }

        return null;
      }),

      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a
      /* @typescript-to-proptypes-ignore */
      .elementType
    }, propTypes);

    if (true) {
      StyledComponent.displayName = `Styled(${classNamePrefix})`;
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}

/***/ }),

/***/ "../packages/material-ui-styles/src/useTheme/ThemeContext.js":
/*!*******************************************************************!*\
  !*** ../packages/material-ui-styles/src/useTheme/ThemeContext.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ThemeContext.displayName = 'ThemeContext';
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeContext);

/***/ }),

/***/ "../packages/material-ui-styles/src/useTheme/index.js":
/*!************************************************************!*\
  !*** ../packages/material-ui-styles/src/useTheme/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTheme */ "../packages/material-ui-styles/src/useTheme/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/useTheme/useTheme.js":
/*!***************************************************************!*\
  !*** ../packages/material-ui-styles/src/useTheme/useTheme.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeContext */ "../packages/material-ui-styles/src/useTheme/ThemeContext.js");


function useTheme() {
  const theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "../packages/material-ui-styles/src/withStyles/index.js":
/*!**************************************************************!*\
  !*** ../packages/material-ui-styles/src/withStyles/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withStyles */ "../packages/material-ui-styles/src/withStyles/withStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui-styles/src/withStyles/withStyles.js":
/*!*******************************************************************!*\
  !*** ../packages/material-ui-styles/src/withStyles/withStyles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../makeStyles */ "../packages/material-ui-styles/src/makeStyles/index.js");
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../getThemeProps */ "../packages/material-ui-styles/src/getThemeProps/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useTheme */ "../packages/material-ui-styles/src/useTheme/index.js");
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/packages/material-ui-styles/src/withStyles/withStyles.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

const withStyles = (stylesOrCreator, options = {}) => Component => {
  const {
    defaultTheme,
    withTheme = false,
    name
  } = options,
        stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);

  if (true) {
    if (Component === undefined) {
      throw new Error(['You are calling withStyles(styles)(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }
  }

  let classNamePrefix = name;

  if (true) {
    if (!name) {
      // Provide a better DX outside production.
      const displayName = Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(Component);

      if (displayName !== undefined) {
        classNamePrefix = displayName;
      }
    }
  }

  const useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(stylesOrCreator, _objectSpread({
    defaultTheme,
    Component,
    name: name || Component.displayName,
    classNamePrefix
  }, stylesOptions));
  const WithStyles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function WithStyles(props, ref) {
    const {
      classes: classesProp,
      innerRef
    } = props,
          other = _objectWithoutProperties(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
    // the actual props Component might receive due to merging with defaultProps.
    // So copying it here would give us the same result in the wrapper as well.


    const classes = useStyles(_objectSpread(_objectSpread({}, Component.defaultProps), props));
    let theme;
    let more = other;

    if (typeof name === 'string' || withTheme) {
      // name and withTheme are invariant in the outer scope
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])() || defaultTheme;

      if (name) {
        more = Object(_getThemeProps__WEBPACK_IMPORTED_MODULE_5__["default"])({
          theme,
          name,
          props: other
        });
      } // Provide the theme to the wrapped component.
      // So we don't have to use the `withTheme()` Higher-order Component.


      if (withTheme && !more.theme) {
        more.theme = theme;
      }
    }

    return __jsx(Component, _extends({
      ref: innerRef || ref,
      classes: classes
    }, more, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 12
      }
    }));
  });
  WithStyles.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

    /**
     * Use that prop to pass a ref to the decorated component.
     * @deprecated
     */
    innerRef: Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]), props => {
      if (props.innerRef == null) {
        return null;
      }

      return null; // return new Error(
      //   'Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' +
      //     'Refs are now automatically forwarded to the inner component.',
      // );
    })
  };

  if (true) {
    WithStyles.displayName = `WithStyles(${Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(Component)})`;
  }

  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(WithStyles, Component);

  if (true) {
    // Exposed for test purposes.
    WithStyles.Naked = Component;
    WithStyles.options = options;
    WithStyles.useStyles = useStyles;
  }

  return WithStyles;
};

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "../packages/material-ui-styles/src/withTheme/index.js":
/*!*************************************************************!*\
  !*** ../packages/material-ui-styles/src/withTheme/index.js ***!
  \*************************************************************/
/*! exports provided: default, withThemeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withTheme */ "../packages/material-ui-styles/src/withTheme/withTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_0__["withThemeCreator"]; });




/***/ }),

/***/ "../packages/material-ui-styles/src/withTheme/withTheme.js":
/*!*****************************************************************!*\
  !*** ../packages/material-ui-styles/src/withTheme/withTheme.js ***!
  \*****************************************************************/
/*! exports provided: withThemeCreator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return withThemeCreator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useTheme */ "../packages/material-ui-styles/src/useTheme/index.js");
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/packages/material-ui-styles/src/withTheme/withTheme.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function withThemeCreator(options = {}) {
  const {
    defaultTheme
  } = options;

  const withTheme = Component => {
    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withTheme(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    const WithTheme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function WithTheme(props, ref) {
      const {
        innerRef
      } = props,
            other = _objectWithoutProperties(props, ["innerRef"]);

      const theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_4__["default"])() || defaultTheme;
      return __jsx(Component, _extends({
        theme: theme,
        ref: innerRef || ref
      }, other, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 14
        }
      }));
    });
    WithTheme.propTypes = {
      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]), props => {
        if (props.innerRef == null) {
          return null;
        }

        return new Error('Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' + 'Refs are now automatically forwarded to the inner component.');
      })
    };

    if (true) {
      WithTheme.displayName = `WithTheme(${Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(Component)})`;
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

const withTheme = withThemeCreator();
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "../packages/material-ui-system/src/borders.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui-system/src/borders.js ***!
  \*****************************************************/
/*! exports provided: border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");



function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
const borderTop = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
const borderRight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
const borderBottom = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
const borderLeft = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
const borderColor = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderRadius = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderRadius',
  themeKey: 'shape'
});
const borders = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
/* harmony default export */ __webpack_exports__["default"] = (borders);

/***/ }),

/***/ "../packages/material-ui-system/src/breakpoints.js":
/*!*********************************************************!*\
  !*** ../packages/material-ui-system/src/breakpoints.js ***!
  \*********************************************************/
/*! exports provided: handleBreakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleBreakpoints", function() { return handleBreakpoints; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge */ "../packages/material-ui-system/src/merge.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (true) {
    if (!props.theme) {
      console.error('Material-UI: You are calling a style function without a theme value.');
    }
  }

  if (Array.isArray(propValue)) {
    const themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (typeof propValue === 'object') {
    const themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      acc[themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  const newStyleFunction = props => {
    const base = styleFunction(props);
    const themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    const extended = themeBreakpoints.keys.reduce((acc, key) => {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(_objectSpread({
          theme: props.theme
        }, props[key]));
      }

      return acc;
    }, null);
    return Object(_merge__WEBPACK_IMPORTED_MODULE_1__["default"])(base, extended);
  };

  newStyleFunction.propTypes = true ? _objectSpread(_objectSpread({}, styleFunction.propTypes), {}, {
    xs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    sm: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    md: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    lg: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    xl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  }) : undefined;
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl', ...styleFunction.filterProps];
  return newStyleFunction;
}

/* harmony default export */ __webpack_exports__["default"] = (breakpoints);

/***/ }),

/***/ "../packages/material-ui-system/src/compose.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui-system/src/compose.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge */ "../packages/material-ui-system/src/merge.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function compose(...styles) {
  const fn = props => styles.reduce((acc, style) => {
    const output = style(props);

    if (output) {
      return Object(_merge__WEBPACK_IMPORTED_MODULE_0__["default"])(acc, output);
    }

    return acc;
  }, {}); // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes = true ? styles.reduce((acc, style) => _extends(acc, style.propTypes), {}) : undefined;
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

/* harmony default export */ __webpack_exports__["default"] = (compose);

/***/ }),

/***/ "../packages/material-ui-system/src/css.js":
/*!*************************************************!*\
  !*** ../packages/material-ui-system/src/css.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge */ "../packages/material-ui-system/src/merge.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function omit(input, fields) {
  const output = {};
  Object.keys(input).forEach(prop => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

function css(styleFunction) {
  const newStyleFunction = props => {
    const output = styleFunction(props);

    if (props.css) {
      return _objectSpread(_objectSpread({}, Object(_merge__WEBPACK_IMPORTED_MODULE_1__["default"])(output, styleFunction(_objectSpread({
        theme: props.theme
      }, props.css)))), omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes = true ? _objectSpread(_objectSpread({}, styleFunction.propTypes), {}, {
    css: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  }) : undefined;
  newStyleFunction.filterProps = ['css', ...styleFunction.filterProps];
  return newStyleFunction;
}

/* harmony default export */ __webpack_exports__["default"] = (css);

/***/ }),

/***/ "../packages/material-ui-system/src/display.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui-system/src/display.js ***!
  \*****************************************************/
/*! exports provided: displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayPrint", function() { return displayPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayRaw", function() { return displayRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textOverflow", function() { return textOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteSpace", function() { return whiteSpace; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");


const displayPrint = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'display'
});
const overflow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'overflow'
});
const textOverflow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'textOverflow'
});
const visibility = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'visibility'
});
const whiteSpace = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'whiteSpace'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));

/***/ }),

/***/ "../packages/material-ui-system/src/flexbox.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui-system/src/flexbox.js ***!
  \*****************************************************/
/*! exports provided: flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return flexBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return flexDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return flexWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return justifyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return alignItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return alignContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return flexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return flexShrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return alignSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return justifyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return justifySelf; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");


const flexBasis = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexBasis'
});
const flexDirection = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexDirection'
});
const flexWrap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexWrap'
});
const justifyContent = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifyContent'
});
const alignItems = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignItems'
});
const alignContent = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignContent'
});
const order = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'order'
});
const flex = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flex'
});
const flexGrow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexGrow'
});
const flexShrink = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexShrink'
});
const alignSelf = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignSelf'
});
const justifyItems = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifyItems'
});
const justifySelf = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifySelf'
});
const flexbox = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ __webpack_exports__["default"] = (flexbox);

/***/ }),

/***/ "../packages/material-ui-system/src/grid.js":
/*!**************************************************!*\
  !*** ../packages/material-ui-system/src/grid.js ***!
  \**************************************************/
/*! exports provided: gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return gridGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return gridColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return gridRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return gridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return gridAutoFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return gridAutoColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return gridAutoRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return gridTemplateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return gridTemplateRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return gridTemplateAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return gridArea; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");


const gridGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridGap'
});
const gridColumnGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridColumnGap'
});
const gridRowGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridRowGap'
});
const gridColumn = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridColumn'
});
const gridRow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridRow'
});
const gridAutoFlow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoColumns'
});
const gridAutoRows = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateAreas'
});
const gridArea = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridArea'
});
const grid = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ __webpack_exports__["default"] = (grid);

/***/ }),

/***/ "../packages/material-ui-system/src/index.js":
/*!***************************************************!*\
  !*** ../packages/material-ui-system/src/index.js ***!
  \***************************************************/
/*! exports provided: borders, border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius, breakpoints, compose, css, display, flexbox, flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf, grid, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, palette, color, bgcolor, positions, position, zIndex, top, right, bottom, left, shadows, sizing, width, maxWidth, minWidth, height, maxHeight, minHeight, sizeWidth, sizeHeight, boxSizing, spacing, createUnarySpacing, style, typography, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, visuallyHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borders */ "../packages/material-ui-system/src/borders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "border", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["border"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderRadius"]; });

/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "../packages/material-ui-system/src/breakpoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css */ "../packages/material-ui-system/src/css.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "../packages/material-ui-system/src/display.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "display", function() { return _display__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _flexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flexbox */ "../packages/material-ui-system/src/flexbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifyContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "order", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["order"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexGrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexShrink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignSelf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifyItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifySelf"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid */ "../packages/material-ui-system/src/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridColumnGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridRowGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoFlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateAreas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridArea"]; });

/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./palette */ "../packages/material-ui-system/src/palette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgcolor", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["bgcolor"]; });

/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./positions */ "../packages/material-ui-system/src/positions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positions", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["zIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["left"]; });

/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shadows */ "../packages/material-ui-system/src/shadows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return _shadows__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sizing */ "../packages/material-ui-system/src/sizing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizing", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "width", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["width"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["maxWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["minWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "height", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["height"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["maxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["minHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["sizeWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["sizeHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxSizing", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["boxSizing"]; });

/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spacing */ "../packages/material-ui-system/src/spacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return _spacing__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUnarySpacing", function() { return _spacing__WEBPACK_IMPORTED_MODULE_11__["createUnarySpacing"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _style__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./typography */ "../packages/material-ui-system/src/typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontFamily"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["letterSpacing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["lineHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["textAlign"]; });

/* harmony import */ var _visuallyHidden__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visuallyHidden */ "../packages/material-ui-system/src/visuallyHidden.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visuallyHidden", function() { return _visuallyHidden__WEBPACK_IMPORTED_MODULE_14__["default"]; });

























/***/ }),

/***/ "../packages/material-ui-system/src/memoize.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui-system/src/memoize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

/***/ }),

/***/ "../packages/material-ui-system/src/merge.js":
/*!***************************************************!*\
  !*** ../packages/material-ui-system/src/merge.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");


function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

/* harmony default export */ __webpack_exports__["default"] = (merge);

/***/ }),

/***/ "../packages/material-ui-system/src/palette.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui-system/src/palette.js ***!
  \*****************************************************/
/*! exports provided: color, bgcolor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgcolor", function() { return bgcolor; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");


const color = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'color',
  themeKey: 'palette'
});
const bgcolor = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
const palette = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(color, bgcolor);
/* harmony default export */ __webpack_exports__["default"] = (palette);

/***/ }),

/***/ "../packages/material-ui-system/src/positions.js":
/*!*******************************************************!*\
  !*** ../packages/material-ui-system/src/positions.js ***!
  \*******************************************************/
/*! exports provided: position, zIndex, top, right, bottom, left, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return zIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");


const position = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'position'
});
const zIndex = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const top = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'top'
});
const right = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'right'
});
const bottom = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'bottom'
});
const left = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'left'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(position, zIndex, top, right, bottom, left));

/***/ }),

/***/ "../packages/material-ui-system/src/responsivePropType.js":
/*!****************************************************************!*\
  !*** ../packages/material-ui-system/src/responsivePropType.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const responsivePropType = true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (responsivePropType);

/***/ }),

/***/ "../packages/material-ui-system/src/shadows.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui-system/src/shadows.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");

const boxShadow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ __webpack_exports__["default"] = (boxShadow);

/***/ }),

/***/ "../packages/material-ui-system/src/sizing.js":
/*!****************************************************!*\
  !*** ../packages/material-ui-system/src/sizing.js ***!
  \****************************************************/
/*! exports provided: width, maxWidth, minWidth, height, maxHeight, minHeight, sizeWidth, sizeHeight, boxSizing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return maxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return maxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return minHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeWidth", function() { return sizeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeHeight", function() { return sizeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxSizing", function() { return boxSizing; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");



function transform(value) {
  return value <= 1 ? `${value * 100}%` : value;
}

const width = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'width',
  transform
});
const maxWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'maxWidth',
  transform
});
const minWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'minWidth',
  transform
});
const height = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'height',
  transform
});
const maxHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'maxHeight',
  transform
});
const minHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'minHeight',
  transform
});
const sizeWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'size',
  cssProperty: 'width',
  transform
});
const sizeHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'size',
  cssProperty: 'height',
  transform
});
const boxSizing = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'boxSizing'
});
const sizing = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ __webpack_exports__["default"] = (sizing);

/***/ }),

/***/ "../packages/material-ui-system/src/spacing.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui-system/src/spacing.js ***!
  \*****************************************************/
/*! exports provided: createUnarySpacing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnarySpacing", function() { return createUnarySpacing; });
/* harmony import */ var _responsivePropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsivePropType */ "../packages/material-ui-system/src/responsivePropType.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "../packages/material-ui-system/src/breakpoints.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge */ "../packages/material-ui-system/src/merge.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memoize */ "../packages/material-ui-system/src/memoize.js");




const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

const getCssProperties = Object(_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
function createUnarySpacing(theme) {
  const themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return abs => {
      if (true) {
        if (typeof abs !== 'number') {
          console.error(`Material-UI: Expected spacing argument to be a number, got ${abs}.`);
        }
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (true) {
        if (abs > themeSpacing.length - 1) {
          console.error([`Material-UI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
        }
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  if (true) {
    console.error([`Material-UI: The \`theme.spacing\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
  }

  return () => undefined;
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}

function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}

function spacing(props) {
  const theme = props.theme;
  const transformer = createUnarySpacing(theme);
  return Object.keys(props).map(prop => {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return Object(_breakpoints__WEBPACK_IMPORTED_MODULE_1__["handleBreakpoints"])(props, propValue, styleFromPropValue);
  }).reduce(_merge__WEBPACK_IMPORTED_MODULE_2__["default"], {});
}

spacing.propTypes = true ? spacingKeys.reduce((obj, key) => {
  obj[key] = _responsivePropType__WEBPACK_IMPORTED_MODULE_0__["default"];
  return obj;
}, {}) : undefined;
spacing.filterProps = spacingKeys;
/* harmony default export */ __webpack_exports__["default"] = (spacing);

/***/ }),

/***/ "../packages/material-ui-system/src/style.js":
/*!***************************************************!*\
  !*** ../packages/material-ui-system/src/style.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responsivePropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsivePropType */ "../packages/material-ui-system/src/responsivePropType.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "../packages/material-ui-system/src/breakpoints.js");



function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  const fn = props => {
    if (props[prop] == null) {
      return null;
    }

    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};

    const styleFromPropValue = propValueFinal => {
      let value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return {
        [cssProperty]: value
      };
    };

    return Object(_breakpoints__WEBPACK_IMPORTED_MODULE_1__["handleBreakpoints"])(props, propValue, styleFromPropValue);
  };

  fn.propTypes = true ? {
    [prop]: _responsivePropType__WEBPACK_IMPORTED_MODULE_0__["default"]
  } : undefined;
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "../packages/material-ui-system/src/typography.js":
/*!********************************************************!*\
  !*** ../packages/material-ui-system/src/typography.js ***!
  \********************************************************/
/*! exports provided: fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return fontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return letterSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return textAlign; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "../packages/material-ui-system/src/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "../packages/material-ui-system/src/compose.js");


const fontFamily = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'letterSpacing'
});
const lineHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'lineHeight'
});
const textAlign = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'textAlign'
});
const typography = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ __webpack_exports__["default"] = (typography);

/***/ }),

/***/ "../packages/material-ui-system/src/visuallyHidden.js":
/*!************************************************************!*\
  !*** ../packages/material-ui-system/src/visuallyHidden.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1
};
/* harmony default export */ __webpack_exports__["default"] = (visuallyHidden);

/***/ }),

/***/ "../packages/material-ui-utils/src/HTMLElementType.js":
/*!************************************************************!*\
  !*** ../packages/material-ui-utils/src/HTMLElementType.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLElementType; });
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {}

  const propValue = props[propName];
  const safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
  }

  return null;
}

/***/ }),

/***/ "../packages/material-ui-utils/src/chainPropTypes.js":
/*!***********************************************************!*\
  !*** ../packages/material-ui-utils/src/chainPropTypes.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chainPropTypes; });
function chainPropTypes(propType1, propType2) {
  if (false) {}

  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

/***/ }),

/***/ "../packages/material-ui-utils/src/deepmerge.js":
/*!******************************************************!*\
  !*** ../packages/material-ui-utils/src/deepmerge.js ***!
  \******************************************************/
/*! exports provided: isPlainObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepmerge; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isPlainObject(item) {
  return item && typeof item === 'object' && item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _objectSpread({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/***/ }),

/***/ "../packages/material-ui-utils/src/elementAcceptingRef.js":
/*!****************************************************************!*\
  !*** ../packages/material-ui-utils/src/elementAcceptingRef.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "../packages/material-ui-utils/src/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;

  if (element == null) {
    return null;
  }

  let warningHint;
  const elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

const elementAcceptingRef = Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, acceptingRef);
elementAcceptingRef.isRequired = Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element.isRequired, acceptingRef);
/* harmony default export */ __webpack_exports__["default"] = (elementAcceptingRef);

/***/ }),

/***/ "../packages/material-ui-utils/src/elementTypeAcceptingRef.js":
/*!********************************************************************!*\
  !*** ../packages/material-ui-utils/src/elementTypeAcceptingRef.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "../packages/material-ui-utils/src/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}

function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  let warningHint;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof propValue === 'function' && !isClassComponent(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }

  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element type that can hold a ref. ${warningHint} ` + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["elementType"], elementTypeAcceptingRef));

/***/ }),

/***/ "../packages/material-ui-utils/src/exactProp.js":
/*!******************************************************!*\
  !*** ../packages/material-ui-utils/src/exactProp.js ***!
  \******************************************************/
/*! exports provided: specialProperty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialProperty", function() { return specialProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exactProp; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
  if (false) {}

  return _objectSpread(_objectSpread({}, propTypes), {}, {
    [specialProperty]: props => {
      const unsupportedProps = Object.keys(props).filter(prop => !propTypes.hasOwnProperty(prop));

      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map(prop => `\`${prop}\``).join(', ')}. Please remove them.`);
      }

      return null;
    }
  });
}

/***/ }),

/***/ "../packages/material-ui-utils/src/formatMuiErrorMessage.js":
/*!******************************************************************!*\
  !*** ../packages/material-ui-utils/src/formatMuiErrorMessage.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatMuiErrorMessage; });
/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  let url = 'https://material-ui.com/production-error/?code=' + code;

  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/***/ }),

/***/ "../packages/material-ui-utils/src/getDisplayName.js":
/*!***********************************************************!*\
  !*** ../packages/material-ui-utils/src/getDisplayName.js ***!
  \***********************************************************/
/*! exports provided: getFunctionName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDisplayName; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "react-is");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
 // Simplified polyfill for IE 11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || '';
}
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */

function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case react_is__WEBPACK_IMPORTED_MODULE_0__["ForwardRef"]:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case react_is__WEBPACK_IMPORTED_MODULE_0__["Memo"]:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}

/***/ }),

/***/ "../packages/material-ui-utils/src/index.js":
/*!**************************************************!*\
  !*** ../packages/material-ui-utils/src/index.js ***!
  \**************************************************/
/*! exports provided: chainPropTypes, deepmerge, elementAcceptingRef, elementTypeAcceptingRef, exactProp, formatMuiErrorMessage, getDisplayName, HTMLElementType, ponyfillGlobal, refType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chainPropTypes */ "../packages/material-ui-utils/src/chainPropTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainPropTypes", function() { return _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepmerge */ "../packages/material-ui-utils/src/deepmerge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepmerge", function() { return _deepmerge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementAcceptingRef */ "../packages/material-ui-utils/src/elementAcceptingRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAcceptingRef", function() { return _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementTypeAcceptingRef */ "../packages/material-ui-utils/src/elementTypeAcceptingRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementTypeAcceptingRef", function() { return _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _exactProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exactProp */ "../packages/material-ui-utils/src/exactProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exactProp", function() { return _exactProp__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatMuiErrorMessage */ "../packages/material-ui-utils/src/formatMuiErrorMessage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMuiErrorMessage", function() { return _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _getDisplayName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDisplayName */ "../packages/material-ui-utils/src/getDisplayName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return _getDisplayName__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _HTMLElementType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTMLElementType */ "../packages/material-ui-utils/src/HTMLElementType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLElementType", function() { return _HTMLElementType__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ponyfillGlobal */ "../packages/material-ui-utils/src/ponyfillGlobal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _refType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refType */ "../packages/material-ui-utils/src/refType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refType", function() { return _refType__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/***/ }),

/***/ "../packages/material-ui-utils/src/ponyfillGlobal.js":
/*!***********************************************************!*\
  !*** ../packages/material-ui-utils/src/ponyfillGlobal.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
/* harmony default export */ __webpack_exports__["default"] = ( false ? undefined : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')());

/***/ }),

/***/ "../packages/material-ui-utils/src/refType.js":
/*!****************************************************!*\
  !*** ../packages/material-ui-utils/src/refType.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const refType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]);
/* harmony default export */ __webpack_exports__["default"] = (refType);

/***/ }),

/***/ "../packages/material-ui/src/colors/amber.js":
/*!***************************************************!*\
  !*** ../packages/material-ui/src/colors/amber.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const amber = {
  50: '#fff8e1',
  100: '#ffecb3',
  200: '#ffe082',
  300: '#ffd54f',
  400: '#ffca28',
  500: '#ffc107',
  600: '#ffb300',
  700: '#ffa000',
  800: '#ff8f00',
  900: '#ff6f00',
  A100: '#ffe57f',
  A200: '#ffd740',
  A400: '#ffc400',
  A700: '#ffab00'
};
/* harmony default export */ __webpack_exports__["default"] = (amber);

/***/ }),

/***/ "../packages/material-ui/src/colors/blue.js":
/*!**************************************************!*\
  !*** ../packages/material-ui/src/colors/blue.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ __webpack_exports__["default"] = (blue);

/***/ }),

/***/ "../packages/material-ui/src/colors/blueGrey.js":
/*!******************************************************!*\
  !*** ../packages/material-ui/src/colors/blueGrey.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const blueGrey = {
  50: '#eceff1',
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  A100: '#cfd8dc',
  A200: '#b0bec5',
  A400: '#78909c',
  A700: '#455a64'
};
/* harmony default export */ __webpack_exports__["default"] = (blueGrey);

/***/ }),

/***/ "../packages/material-ui/src/colors/brown.js":
/*!***************************************************!*\
  !*** ../packages/material-ui/src/colors/brown.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const brown = {
  50: '#efebe9',
  100: '#d7ccc8',
  200: '#bcaaa4',
  300: '#a1887f',
  400: '#8d6e63',
  500: '#795548',
  600: '#6d4c41',
  700: '#5d4037',
  800: '#4e342e',
  900: '#3e2723',
  A100: '#d7ccc8',
  A200: '#bcaaa4',
  A400: '#8d6e63',
  A700: '#5d4037'
};
/* harmony default export */ __webpack_exports__["default"] = (brown);

/***/ }),

/***/ "../packages/material-ui/src/colors/common.js":
/*!****************************************************!*\
  !*** ../packages/material-ui/src/colors/common.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "../packages/material-ui/src/colors/cyan.js":
/*!**************************************************!*\
  !*** ../packages/material-ui/src/colors/cyan.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cyan = {
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4'
};
/* harmony default export */ __webpack_exports__["default"] = (cyan);

/***/ }),

/***/ "../packages/material-ui/src/colors/deepOrange.js":
/*!********************************************************!*\
  !*** ../packages/material-ui/src/colors/deepOrange.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const deepOrange = {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00'
};
/* harmony default export */ __webpack_exports__["default"] = (deepOrange);

/***/ }),

/***/ "../packages/material-ui/src/colors/deepPurple.js":
/*!********************************************************!*\
  !*** ../packages/material-ui/src/colors/deepPurple.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const deepPurple = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea'
};
/* harmony default export */ __webpack_exports__["default"] = (deepPurple);

/***/ }),

/***/ "../packages/material-ui/src/colors/green.js":
/*!***************************************************!*\
  !*** ../packages/material-ui/src/colors/green.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ __webpack_exports__["default"] = (green);

/***/ }),

/***/ "../packages/material-ui/src/colors/grey.js":
/*!**************************************************!*\
  !*** ../packages/material-ui/src/colors/grey.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["default"] = (grey);

/***/ }),

/***/ "../packages/material-ui/src/colors/index.js":
/*!***************************************************!*\
  !*** ../packages/material-ui/src/colors/index.js ***!
  \***************************************************/
/*! exports provided: common, red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../packages/material-ui/src/colors/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "common", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./red */ "../packages/material-ui/src/colors/red.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red", function() { return _red__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _pink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pink */ "../packages/material-ui/src/colors/pink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return _pink__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _purple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purple */ "../packages/material-ui/src/colors/purple.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return _purple__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _deepPurple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deepPurple */ "../packages/material-ui/src/colors/deepPurple.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepPurple", function() { return _deepPurple__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _indigo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indigo */ "../packages/material-ui/src/colors/indigo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return _indigo__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _blue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blue */ "../packages/material-ui/src/colors/blue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return _blue__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _lightBlue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lightBlue */ "../packages/material-ui/src/colors/lightBlue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightBlue", function() { return _lightBlue__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _cyan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cyan */ "../packages/material-ui/src/colors/cyan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return _cyan__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _teal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teal */ "../packages/material-ui/src/colors/teal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return _teal__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _green__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./green */ "../packages/material-ui/src/colors/green.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green", function() { return _green__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _lightGreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lightGreen */ "../packages/material-ui/src/colors/lightGreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightGreen", function() { return _lightGreen__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _lime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lime */ "../packages/material-ui/src/colors/lime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return _lime__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _yellow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./yellow */ "../packages/material-ui/src/colors/yellow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return _yellow__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _amber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./amber */ "../packages/material-ui/src/colors/amber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return _amber__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _orange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orange */ "../packages/material-ui/src/colors/orange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return _orange__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _deepOrange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./deepOrange */ "../packages/material-ui/src/colors/deepOrange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepOrange", function() { return _deepOrange__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _brown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./brown */ "../packages/material-ui/src/colors/brown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return _brown__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _grey__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./grey */ "../packages/material-ui/src/colors/grey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return _grey__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _blueGrey__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blueGrey */ "../packages/material-ui/src/colors/blueGrey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blueGrey", function() { return _blueGrey__WEBPACK_IMPORTED_MODULE_19__["default"]; });






















/***/ }),

/***/ "../packages/material-ui/src/colors/indigo.js":
/*!****************************************************!*\
  !*** ../packages/material-ui/src/colors/indigo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["default"] = (indigo);

/***/ }),

/***/ "../packages/material-ui/src/colors/lightBlue.js":
/*!*******************************************************!*\
  !*** ../packages/material-ui/src/colors/lightBlue.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
/* harmony default export */ __webpack_exports__["default"] = (lightBlue);

/***/ }),

/***/ "../packages/material-ui/src/colors/lightGreen.js":
/*!********************************************************!*\
  !*** ../packages/material-ui/src/colors/lightGreen.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lightGreen = {
  50: '#f1f8e9',
  100: '#dcedc8',
  200: '#c5e1a5',
  300: '#aed581',
  400: '#9ccc65',
  500: '#8bc34a',
  600: '#7cb342',
  700: '#689f38',
  800: '#558b2f',
  900: '#33691e',
  A100: '#ccff90',
  A200: '#b2ff59',
  A400: '#76ff03',
  A700: '#64dd17'
};
/* harmony default export */ __webpack_exports__["default"] = (lightGreen);

/***/ }),

/***/ "../packages/material-ui/src/colors/lime.js":
/*!**************************************************!*\
  !*** ../packages/material-ui/src/colors/lime.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lime = {
  50: '#f9fbe7',
  100: '#f0f4c3',
  200: '#e6ee9c',
  300: '#dce775',
  400: '#d4e157',
  500: '#cddc39',
  600: '#c0ca33',
  700: '#afb42b',
  800: '#9e9d24',
  900: '#827717',
  A100: '#f4ff81',
  A200: '#eeff41',
  A400: '#c6ff00',
  A700: '#aeea00'
};
/* harmony default export */ __webpack_exports__["default"] = (lime);

/***/ }),

/***/ "../packages/material-ui/src/colors/orange.js":
/*!****************************************************!*\
  !*** ../packages/material-ui/src/colors/orange.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["default"] = (orange);

/***/ }),

/***/ "../packages/material-ui/src/colors/pink.js":
/*!**************************************************!*\
  !*** ../packages/material-ui/src/colors/pink.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "../packages/material-ui/src/colors/purple.js":
/*!****************************************************!*\
  !*** ../packages/material-ui/src/colors/purple.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
/* harmony default export */ __webpack_exports__["default"] = (purple);

/***/ }),

/***/ "../packages/material-ui/src/colors/red.js":
/*!*************************************************!*\
  !*** ../packages/material-ui/src/colors/red.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "../packages/material-ui/src/colors/teal.js":
/*!**************************************************!*\
  !*** ../packages/material-ui/src/colors/teal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const teal = {
  50: '#e0f2f1',
  100: '#b2dfdb',
  200: '#80cbc4',
  300: '#4db6ac',
  400: '#26a69a',
  500: '#009688',
  600: '#00897b',
  700: '#00796b',
  800: '#00695c',
  900: '#004d40',
  A100: '#a7ffeb',
  A200: '#64ffda',
  A400: '#1de9b6',
  A700: '#00bfa5'
};
/* harmony default export */ __webpack_exports__["default"] = (teal);

/***/ }),

/***/ "../packages/material-ui/src/colors/yellow.js":
/*!****************************************************!*\
  !*** ../packages/material-ui/src/colors/yellow.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600'
};
/* harmony default export */ __webpack_exports__["default"] = (yellow);

/***/ }),

/***/ "../packages/material-ui/src/locale/index.ts":
/*!***************************************************!*\
  !*** ../packages/material-ui/src/locale/index.ts ***!
  \***************************************************/
/*! exports provided: azAZ, bgBG, caES, csCZ, deDE, enUS, esES, etEE, faIR, fiFI, frFR, heIL, hiIN, huHU, hyAM, idID, isIS, itIT, jaJP, koKR, nlNL, plPL, ptBR, ptPT, roRO, ruRU, skSK, svSE, trTR, ukUA, viVN, zhCN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azAZ", function() { return azAZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgBG", function() { return bgBG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caES", function() { return caES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csCZ", function() { return csCZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deDE", function() { return deDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enUS", function() { return enUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esES", function() { return esES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "etEE", function() { return etEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIR", function() { return faIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fiFI", function() { return fiFI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frFR", function() { return frFR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heIL", function() { return heIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiIN", function() { return hiIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "huHU", function() { return huHU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyAM", function() { return hyAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idID", function() { return idID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIS", function() { return isIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itIT", function() { return itIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jaJP", function() { return jaJP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "koKR", function() { return koKR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nlNL", function() { return nlNL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plPL", function() { return plPL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ptBR", function() { return ptBR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ptPT", function() { return ptPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roRO", function() { return roRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruRU", function() { return ruRU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skSK", function() { return skSK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svSE", function() { return svSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trTR", function() { return trTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ukUA", function() { return ukUA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viVN", function() { return viVN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zhCN", function() { return zhCN; });
const azAZ = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Yolu göstər'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Birinci səhifəyə keç';
        }

        if (type === 'last') {
          return 'Sonuncu səhifəyə keç';
        }

        if (type === 'next') {
          return 'Növbəti səhifəyə keç';
        } // if (type === 'previous') {


        return 'Əvvəlki səhifəyə keç';
      },
      labelRowsPerPage: 'Səhifəyə düşən sətrlər:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} dən ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => {
        let pluralForm = 'Ulduz';
        const lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Ulduzlar';
        }

        return `${value} ${pluralForm}`;
      },
      emptyLabelText: 'Boş'
    },
    MuiAutocomplete: {
      clearText: 'Silmək',
      closeText: 'Bağlamaq',
      loadingText: 'Yüklənir…',
      noOptionsText: 'Seçimlər mövcud deyil',
      openText: 'Открыть'
    },
    MuiAlert: {
      closeText: 'Bağlamaq'
    },
    MuiPagination: {
      'aria-label': 'Səhifənin naviqasiyası',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${page} ${selected ? 'səhifə' : 'səhifəyə keç'}`;
        }

        if (type === 'first') {
          return 'Birinci səhifəyə keç';
        }

        if (type === 'last') {
          return 'Sonuncu səhifəyə keç';
        }

        if (type === 'next') {
          return 'Növbəti səhifəyə keç';
        } // if (type === 'previous') {


        return 'Əvvəlki səhifəyə keç';
      }
    }
  }
};
const bgBG = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Показване на пътя'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Отиди на първата страница';
        }

        if (type === 'last') {
          return 'Отиди на последната страница';
        }

        if (type === 'next') {
          return 'Отиди на следващата страница';
        } // if (type === 'previous') {


        return 'Отиди на предишната страница';
      },
      labelRowsPerPage: 'Редове на страница:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} от ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Звезд${value !== 1 ? 'и' : 'а'}`,
      emptyLabelText: 'Изчисти'
    },
    MuiAutocomplete: {
      clearText: 'Изчисти',
      closeText: 'Затвори',
      loadingText: 'Зареждане…',
      noOptionsText: 'Няма налични опции',
      openText: 'Отвори'
    },
    MuiAlert: {
      closeText: 'Затвори'
    },
    MuiPagination: {
      'aria-label': 'Пагинация',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Към '}страница ${page}`;
        }

        if (type === 'first') {
          return 'Отиди на първата страница';
        }

        if (type === 'last') {
          return 'Отиди на последната страница';
        }

        if (type === 'next') {
          return 'Отиди на следващата страница';
        } // if (type === 'previous') {


        return 'Отиди на предишната страница';
      }
    }
  }
};
const caES = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'Files per pàgina:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} ${value !== 1 ? 'Estrelles' : 'Estrella'}`,
      emptyLabelText: 'Buit'
    },
    MuiAutocomplete: {
      clearText: 'Netejar',
      closeText: 'Tancar',
      loadingText: 'Carregant…',
      noOptionsText: 'Sense opcions',
      openText: 'Obert'
    },
    MuiAlert: {
      closeText: 'Tancat'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const csCZ = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Ukázat cestu'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Jít na první stránku';
        }

        if (type === 'last') {
          return 'Jít na poslední stránku';
        }

        if (type === 'next') {
          return 'Jít na další stránku';
        } // if (type === 'previous') {


        return 'Jít na předchozí stránku';
      },
      labelRowsPerPage: 'Řádků na stránce:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} z ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => {
        if (value === 1) {
          return `${value} hvězdička`;
        }

        if (value >= 2 && value <= 4) {
          return `${value} hvězdičky`;
        }

        return `${value} hvězdiček`;
      },
      emptyLabelText: 'Prázdné'
    },
    MuiAutocomplete: {
      clearText: 'Vymazat',
      closeText: 'Zavřít',
      loadingText: 'Načítání…',
      noOptionsText: 'Žádné možnosti',
      openText: 'Otevřít'
    },
    MuiAlert: {
      closeText: 'Zavřít'
    },
    MuiPagination: {
      'aria-label': 'Navigace stránkováním',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Jít na '}${page} stránku`;
        }

        if (type === 'first') {
          return 'Jít na první stránku';
        }

        if (type === 'last') {
          return 'Jít na poslední stránku';
        }

        if (type === 'next') {
          return 'Jít na další stránku';
        } // if (type === 'previous') {


        return 'Jít na předchozí stránku';
      }
    }
  }
};
const deDE = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Pfad anzeigen'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Zur ersten Seite';
        }

        if (type === 'last') {
          return 'Zur letzten Seite';
        }

        if (type === 'next') {
          return 'Zur nächsten Seite';
        } // if (type === 'previous') {


        return 'Zur vorherigen Seite';
      },
      labelRowsPerPage: 'Zeilen pro Seite:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} von ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} ${value !== 1 ? 'Sterne' : 'Stern'}`,
      emptyLabelText: 'Keine Wertung'
    },
    MuiAutocomplete: {
      clearText: 'Leeren',
      closeText: 'Schließen',
      loadingText: 'Wird geladen…',
      noOptionsText: 'Keine Optionen',
      openText: 'Öffnen'
    },
    MuiAlert: {
      closeText: 'Schließen'
    },
    MuiPagination: {
      'aria-label': 'Navigation via Seitennummerierung',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Gehe zu '}Seite ${page}`;
        }

        if (type === 'first') {
          return 'Zur ersten Seite';
        }

        if (type === 'last') {
          return 'Zur letzten Seite';
        }

        if (type === 'next') {
          return 'Zur nächsten Seite';
        } // if (type === 'previous') {


        return 'Zur vorherigen Seite';
      }
    }
  }
}; // default

const enUS = {
  /*
  props: {
    MuiBreadcrumbs: {
      expandText: 'Show path',
    },
    MuiTablePagination: {
      getItemAriaLabel: (type) => {
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) =>
  `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`,
    },
    MuiRating: {
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    },
    MuiAutocomplete: {
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    },
    MuiAlert: {
      closeText: 'Close',
    },
    MuiPagination: {
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Go to '}page ${page}`;
        }
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
    },
  },
  */
};
const esES = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Mostrar ruta'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Ir a la primera página';
        }

        if (type === 'last') {
          return 'Ir a la última página';
        }

        if (type === 'next') {
          return 'Ir a la página siguiente';
        } // if (type === 'previous') {


        return 'Ir a la página anterior';
      },
      labelRowsPerPage: 'Filas por página:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Estrella${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Vacío'
    },
    MuiAutocomplete: {
      clearText: 'Limpiar',
      closeText: 'Cerrar',
      loadingText: 'Cargando…',
      noOptionsText: 'Sin opciones',
      openText: 'Abierto'
    },
    MuiAlert: {
      closeText: 'Cerrar'
    },
    MuiPagination: {
      'aria-label': 'Paginador',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Ir a la '}página ${page}`;
        }

        if (type === 'first') {
          return 'Ir a la primera página';
        }

        if (type === 'last') {
          return 'Ir a la última página';
        }

        if (type === 'next') {
          return 'Ir a la página siguiente';
        } // if (type === 'previous') {


        return 'Ir a la página anterior';
      }
    }
  }
};
const etEE = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Näita teed'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Vali esimene lehekülg';
        }

        if (type === 'last') {
          return 'Vali viimane lehekülg';
        }

        if (type === 'next') {
          return 'Vali järgmine lehekülg';
        } // if (type === 'previous') {


        return 'Vali eelmine lehekülg';
      },
      labelRowsPerPage: 'Ridu leheküljel:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} / ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Tärn${value !== 1 ? 'i' : ''}`,
      emptyLabelText: 'Tühi'
    },
    MuiAutocomplete: {
      clearText: 'Tühjenda',
      closeText: 'Sulge',
      loadingText: 'Laen…',
      noOptionsText: 'Valikuid ei ole',
      openText: 'Ava'
    },
    MuiAlert: {
      closeText: 'Sulge'
    },
    MuiPagination: {
      'aria-label': 'Lehekülgede valik',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Vali '}lehekülg ${page}`;
        }

        if (type === 'first') {
          return 'Vali esimene lehekülg';
        }

        if (type === 'last') {
          return 'Vali viimane lehekülg';
        }

        if (type === 'next') {
          return 'Vali järgmine lehekülg';
        } // if (type === 'previous') {


        return 'Vali eelmine lehekülg';
      }
    }
  }
};
const faIR = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiBreadcrumbs: {
      expandText: 'نمایش مسیر'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'رفتن به اولین صفحه';
        }

        if (type === 'last') {
          return 'رفتن به آخرین صفحه';
        }

        if (type === 'next') {
          return 'رفتن به صفحه‌ی بعدی';
        } // if (type === 'previous') {


        return 'رفتن به صفحه‌ی قبلی';
      },
      labelRowsPerPage: 'تعداد سطرهای هر صفحه:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} از ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} ستاره`,
      emptyLabelText: 'خالی'
    },
    MuiAutocomplete: {
      clearText: 'پاک‌کردن',
      closeText: 'بستن',
      loadingText: 'در حال بارگذاری…',
      noOptionsText: 'بی‌نتیجه',
      openText: 'بازکردن'
    },
    MuiAlert: {
      closeText: 'بستن'
    },
    MuiPagination: {
      'aria-label': 'ناوبری صفحه',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'رفتن به '}صفحهٔ ${page}`;
        }

        if (type === 'first') {
          return 'رفتن به اولین صفحه';
        }

        if (type === 'last') {
          return 'رفتن به آخرین صفحه';
        }

        if (type === 'next') {
          return 'رفتن به صفحه‌ی بعدی';
        } // if (type === 'previous') {


        return 'رفتن به صفحه‌ی قبلی';
      }
    }
  }
};
const fiFI = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Näytä reitti'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Mene ensimmäiselle sivulle';
        }

        if (type === 'last') {
          return 'Mene viimeiselle sivulle';
        }

        if (type === 'next') {
          return 'Mene seuraavalle sivulle';
        } // if (type === 'previous') {


        return 'Mene edelliselle sivulle';
      },
      labelRowsPerPage: 'Rivejä per sivu:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} / ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Täht${value !== 1 ? 'eä' : 'i'}`,
      emptyLabelText: 'Tyhjä'
    },
    MuiAutocomplete: {
      clearText: 'Tyhjennä',
      closeText: 'Sulje',
      loadingText: 'Ladataan…',
      noOptionsText: 'Ei valintoja',
      openText: 'Avaa'
    },
    MuiAlert: {
      closeText: 'Sulje'
    },
    MuiPagination: {
      'aria-label': 'Sivutus navigaatio',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? 'sivu' : 'Mene sivulle'} ${page}`;
        }

        if (type === 'first') {
          return 'Mene ensimmäiselle sivulle';
        }

        if (type === 'last') {
          return 'Mene viimeiselle sivulle';
        }

        if (type === 'next') {
          return 'Mene seuraavalle sivulle';
        } // if (type === 'previous') {


        return 'Mene edelliselle sivulle';
      }
    }
  }
};
const frFR = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Montrer le chemin'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Aller à la première page';
        }

        if (type === 'last') {
          return 'Aller à la dernière page';
        }

        if (type === 'next') {
          return 'Aller à la page suivante';
        } // if (type === 'previous') {


        return 'Aller à la page précédente';
      },
      labelRowsPerPage: 'Lignes par page :',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} sur ${count !== -1 ? count : `plus que ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Etoile${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Vide'
    },
    MuiAutocomplete: {
      clearText: 'Vider',
      closeText: 'Fermer',
      loadingText: 'Chargement…',
      noOptionsText: 'Pas de résultats',
      openText: 'Ouvrir'
    },
    MuiAlert: {
      closeText: 'Fermer'
    },
    MuiPagination: {
      'aria-label': 'navigation de pagination',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Aller à la '}page ${page}`;
        }

        if (type === 'first') {
          return 'Aller à la première page';
        }

        if (type === 'last') {
          return 'Aller à la dernière page';
        }

        if (type === 'next') {
          return 'Aller à la page suivante';
        } // if (type === 'previous') {


        return 'Aller à la page précédente';
      }
    }
  }
};
const heIL = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'שורות בעמוד:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} מתוך ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} כוכב${value !== 1 ? 'ים' : ''}`,
      emptyLabelText: 'ריק'
    },
    MuiAutocomplete: {
      clearText: 'נקה',
      closeText: 'סגור',
      loadingText: 'טוען…',
      noOptionsText: 'אין אופציות',
      openText: 'פתח'
    },
    MuiAlert: {
      closeText: 'סגור'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const hiIN = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'रास्ता दिखायें'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'पहले पृष्ठ पर जाएँ';
        }

        if (type === 'last') {
          return 'अंतिम पृष्ठ पर जाएँ';
        }

        if (type === 'next') {
          return 'अगले पृष्ठ पर जाएँ';
        } // if (type === 'previous') {


        return 'पिछले पृष्ठ पर जाएँ';
      },
      labelRowsPerPage: 'पंक्तियाँ प्रति पृष्ठ:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to === -1 ? count : to} कुल ${count} में`
    },
    MuiRating: {
      getLabelText: value => `${value} तार${value !== 1 ? 'े' : 'ा'}`,
      emptyLabelText: 'रिक्त'
    },
    MuiAutocomplete: {
      clearText: 'हटायें',
      closeText: 'बंद करें',
      loadingText: 'लोड हो रहा है…',
      noOptionsText: 'कोई विकल्प नहीं',
      openText: 'खोलें'
    },
    MuiAlert: {
      closeText: 'बंद करें'
    },
    MuiPagination: {
      'aria-label': 'पृस्ठानुसार संचालन',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `पृष्ठ ${page} ${selected ? '' : ' पर जाएँ'}`;
        }

        if (type === 'first') {
          return 'पहले पृष्ठ पर जाएँ';
        }

        if (type === 'last') {
          return 'अंतिम पृष्ठ पर जाएँ';
        }

        if (type === 'next') {
          return 'अगले पृष्ठ पर जाएँ';
        } // if (type === 'previous') {


        return 'पिछले पृष्ठ पर जाएँ';
      }
    }
  }
};
const huHU = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Útvonal'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Első oldalra';
        }

        if (type === 'last') {
          return 'Utolsó oldalra';
        }

        if (type === 'next') {
          return 'Következő oldalra';
        } // if (type === 'previous') {


        return 'Előző oldalra';
      },
      labelRowsPerPage: 'Sorok száma:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} / ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Csillag`,
      emptyLabelText: 'Üres'
    },
    MuiAutocomplete: {
      clearText: 'Törlés',
      closeText: 'Bezárás',
      loadingText: 'Töltés…',
      noOptionsText: 'Nincs találat',
      openText: 'Megnyitás'
    },
    MuiAlert: {
      closeText: 'Bezárás'
    },
    MuiPagination: {
      'aria-label': 'Lapozás',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${page}. oldal${selected ? '' : 'ra'}`;
        }

        if (type === 'first') {
          return 'Első oldalra';
        }

        if (type === 'last') {
          return 'Utolsó oldalra';
        }

        if (type === 'next') {
          return 'Következő oldalra';
        } // if (type === 'previous') {


        return 'Előző oldalra';
      }
    }
  }
};
const hyAM = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'Տողեր մեկ էջում`',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} / ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Աստղ`,
      emptyLabelText: 'Դատարկ'
    },
    MuiAutocomplete: {
      clearText: 'Մաքրել',
      closeText: 'Փակել',
      loadingText: 'Բեռնում…',
      noOptionsText: 'Տարբերակներ չկան',
      openText: 'Բացել'
    },
    MuiAlert: {
      closeText: 'Փակել'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const idID = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'Baris per halaman:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} dari ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Bintang` // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Hapus',
      closeText: 'Tutup',
      loadingText: 'Memuat…',
      noOptionsText: 'Tidak ada opsi',
      openText: 'Buka'
    },
    MuiAlert: {
      closeText: 'Tutup'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const isIS = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'Raðir á síðu:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} af ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} ${value === 1 ? 'Stjarna' : 'Stjörnur'}`,
      emptyLabelText: 'Tómt'
    },
    MuiAutocomplete: {
      clearText: 'Hreinsa',
      closeText: 'Loka',
      loadingText: 'Hlaða…',
      noOptionsText: 'Engar niðurstöður',
      openText: 'Opna'
    },
    MuiAlert: {
      closeText: 'Loka'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const itIT = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Visualizza percorso'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Vai alla prima pagina';
        }

        if (type === 'last') {
          return "Vai all'ultima pagina";
        }

        if (type === 'next') {
          return 'Vai alla pagina successiva';
        } // if (type === 'previous') {


        return 'Vai alla pagina precedente';
      },
      labelRowsPerPage: 'Righe per pagina:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} di ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Stell${value !== 1 ? 'e' : 'a'}`,
      emptyLabelText: 'Vuoto'
    },
    MuiAutocomplete: {
      clearText: 'Svuota',
      closeText: 'Chiudi',
      loadingText: 'Caricamento in corso…',
      noOptionsText: 'Nessuna opzione',
      openText: 'Apri'
    },
    MuiAlert: {
      closeText: 'Chiudi'
    },
    MuiPagination: {
      'aria-label': 'Navigazione impaginata',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Vai alla '}pagina ${page}`;
        }

        if (type === 'first') {
          return 'Vai alla prima pagina';
        }

        if (type === 'last') {
          return "Vai all'ultima pagina";
        }

        if (type === 'next') {
          return 'Vai alla pagina successiva';
        } // if (type === 'previous') {


        return 'Vai alla pagina precedente';
      }
    }
  }
};
const jaJP = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'ページごとの行:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} ${value !== 1 ? '出演者' : '星'}` // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'クリア',
      closeText: '閉じる',
      loadingText: '積み込み…',
      noOptionsText: '結果がありません',
      openText: '開いた'
    },
    MuiAlert: {
      closeText: '閉じる'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const koKR = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: '페이지 당 행:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} / ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} 점` // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: '지우기',
      closeText: '닫기',
      loadingText: '불러오는 중…',
      noOptionsText: '옵션 없음',
      openText: '열기'
    } // MuiAlert: {
    //   closeText: 'Close',
    // },
    // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const nlNL = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'Regels per pagina :',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} van ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Ster${value !== 1 ? 'ren' : ''}` // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Wissen',
      closeText: 'Sluiten',
      loadingText: 'Laden…',
      noOptionsText: 'Geen opties',
      openText: 'Openen'
    },
    MuiAlert: {
      closeText: 'Sluiten'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const plPL = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Pokaż ścieżkę'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Przejdź do pierwszej strony';
        }

        if (type === 'last') {
          return 'Przejdź do ostatniej strony';
        }

        if (type === 'next') {
          return 'Przejdź do następnej strony';
        } // if (type === 'previous') {


        return 'Przejdź do poprzedniej strony';
      },
      labelRowsPerPage: 'Wierszy na stronę:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} z ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => {
        let pluralForm = 'gwiazdek';
        const lastDigit = value % 10;

        if ((value < 10 || value > 20) && lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'gwiazdki';
        } else if (value === 1) {
          pluralForm = 'gwiazdka';
        }

        return `${value} ${pluralForm}`;
      },
      emptyLabelText: 'Brak gwiazdek'
    },
    MuiAutocomplete: {
      clearText: 'Wyczyść',
      closeText: 'Zamknij',
      loadingText: 'Ładowanie…',
      noOptionsText: 'Brak opcji',
      openText: 'Otwórz'
    },
    MuiAlert: {
      closeText: 'Zamknij'
    },
    MuiPagination: {
      'aria-label': 'Nawigacja podziału na strony',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return selected ? `${page}. strona` : `Przejdź do ${page}. strony`;
        }

        if (type === 'first') {
          return 'Przejdź do pierwszej strony';
        }

        if (type === 'last') {
          return 'Przejdź do ostatniej strony';
        }

        if (type === 'next') {
          return 'Przejdź do następnej strony';
        } // if (type === 'previous') {


        return 'Przejdź do poprzedniej strony';
      }
    }
  }
};
const ptBR = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Mostrar caminho'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Ir para a primeira página';
        }

        if (type === 'last') {
          return 'Ir para a última página';
        }

        if (type === 'next') {
          return 'Ir para a próxima página';
        } // if (type === 'previous') {


        return 'Ir para a página anterior';
      },
      labelRowsPerPage: 'Linhas por página:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Estrela${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Vazio'
    },
    MuiAutocomplete: {
      clearText: 'Limpar',
      closeText: 'Fechar',
      loadingText: 'Carregando…',
      noOptionsText: 'Sem opções',
      openText: 'Abrir'
    },
    MuiAlert: {
      closeText: 'Fechar'
    },
    MuiPagination: {
      'aria-label': 'Navegar pela paginação',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Ir para a '}página ${page}`;
        }

        if (type === 'first') {
          return 'Ir para a primeira página';
        }

        if (type === 'last') {
          return 'Ir para a última página';
        }

        if (type === 'next') {
          return 'Ir para a próxima página';
        } // if (type === 'previous') {


        return 'Ir para a página anterior';
      }
    }
  }
};
const ptPT = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Mostrar caminho'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Primeira página';
        }

        if (type === 'last') {
          return 'Última página';
        }

        if (type === 'next') {
          return 'Próxima página';
        } // if (type === 'previous') {


        return 'Página anterior';
      },
      labelRowsPerPage: 'Linhas por página:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Estrela${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Vazio'
    },
    MuiAutocomplete: {
      clearText: 'Limpar',
      closeText: 'Fechar',
      loadingText: 'A carregar…',
      noOptionsText: 'Sem opções',
      openText: 'Abrir'
    },
    MuiAlert: {
      closeText: 'Fechar'
    },
    MuiPagination: {
      'aria-label': 'Navegar por páginas',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Ir para a '}página ${page}`;
        }

        if (type === 'first') {
          return 'Primeira página';
        }

        if (type === 'last') {
          return 'Última página';
        }

        if (type === 'next') {
          return 'Próxima página';
        } // if (type === 'previous') {


        return 'Página anterior';
      }
    }
  }
};
const roRO = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Arată calea'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Mergi la prima pagină';
        }

        if (type === 'last') {
          return 'Mergi la ultima pagină';
        }

        if (type === 'next') {
          return 'Mergi la pagina următoare';
        } // if (type === 'previous') {


        return 'Mergi la pagina precedentă';
      },
      labelRowsPerPage: 'Rânduri pe pagină:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} din ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} St${value !== 1 ? 'ele' : 'ea'}`,
      emptyLabelText: 'Gol'
    },
    MuiAutocomplete: {
      clearText: 'Șterge',
      closeText: 'Închide',
      loadingText: 'Se încarcă…',
      noOptionsText: 'Nicio opțiune',
      openText: 'Deschide'
    },
    MuiAlert: {
      closeText: 'Închide'
    },
    MuiPagination: {
      'aria-label': 'Navigare prin paginare',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Mergi la '}pagina ${page}`;
        }

        if (type === 'first') {
          return 'Mergi la prima pagină';
        }

        if (type === 'last') {
          return 'Mergi la ultima pagină';
        }

        if (type === 'next') {
          return 'Mergi la pagina următoare';
        } // if (type === 'previous') {


        return 'Mergi la pagina precedentă';
      }
    }
  }
};
const ruRU = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Показать полный путь'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Перейти на первую страницу';
        }

        if (type === 'last') {
          return 'Перейти на последнюю страницу';
        }

        if (type === 'next') {
          return 'Перейти на следующую страницу';
        } // if (type === 'previous') {


        return 'Перейти на предыдущую страницу';
      },
      labelRowsPerPage: 'Строк на странице:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} из ${count !== -1 ? count : `более чем ${to}`}`
    },
    MuiRating: {
      getLabelText: value => {
        let pluralForm = 'Звёзд';
        const lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Звезды';
        } else if (lastDigit === 1) {
          pluralForm = 'Звезда';
        }

        return `${value} ${pluralForm}`;
      },
      emptyLabelText: 'Рейтинг отсутствует'
    },
    MuiAutocomplete: {
      clearText: 'Очистить',
      closeText: 'Закрыть',
      loadingText: 'Загрузка…',
      noOptionsText: 'Нет доступных вариантов',
      openText: 'Открыть'
    },
    MuiAlert: {
      closeText: 'Закрыть'
    },
    MuiPagination: {
      'aria-label': 'Навигация по страницам',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          if (selected) return `${page} страница`;
          return `Перейти на ${page} страницу`;
        }

        if (type === 'first') {
          return 'Перейти на первую страницу';
        }

        if (type === 'last') {
          return 'Перейти на последнюю страницу';
        }

        if (type === 'next') {
          return 'Перейти на следующую страницу';
        } // if (type === 'previous') {


        return 'Перейти на предыдущую страницу';
      }
    }
  }
};
const skSK = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'Riadkov na stránke:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} z ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => {
        if (value === 1) {
          return `${value} hviezdička`;
        }

        if (value >= 2 && value <= 4) {
          return `${value} hviezdičky`;
        }

        return `${value} hviezdičiek`;
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Vymazať',
      closeText: 'Zavrieť',
      loadingText: 'Načítanie…',
      noOptionsText: 'Žiadne možnosti',
      openText: 'Otvoriť'
    },
    MuiAlert: {
      closeText: 'Zavrieť'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const svSE = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'Rader per sida:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} av ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} ${value !== 1 ? 'Stjärnor' : 'Stjärna'}` // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Rensa',
      closeText: 'Stäng',
      loadingText: 'Laddar…',
      noOptionsText: 'Inga alternativ',
      openText: 'Öppen'
    },
    MuiAlert: {
      closeText: 'Stäng'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const trTR = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Yolu göster'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'İlk sayfaya git';
        }

        if (type === 'last') {
          return 'Son sayfaya git';
        }

        if (type === 'next') {
          return 'Sonraki sayfaya git';
        } // if (type === 'previous') {


        return 'Önceki sayfaya git';
      },
      labelRowsPerPage: 'Sayfa başına satır:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} tanesinden ${count !== -1 ? count : `more than ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} Yıldız`,
      emptyLabelText: 'Boş'
    },
    MuiAutocomplete: {
      clearText: 'Temizle',
      closeText: 'Kapat',
      loadingText: 'Yükleniyor…',
      noOptionsText: 'Seçenek yok',
      openText: 'Aç'
    },
    MuiAlert: {
      closeText: 'Kapat'
    },
    MuiPagination: {
      'aria-label': 'Sayfa navigasyonu',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${page}. ${selected ? 'sayfa' : 'sayfaya git'}`;
        }

        if (type === 'first') {
          return 'İlk sayfaya git';
        }

        if (type === 'last') {
          return 'Son sayfaya git';
        }

        if (type === 'next') {
          return 'Sonraki sayfaya git';
        } // if (type === 'previous') {


        return 'Önceki sayfaya git';
      }
    }
  }
};
const ukUA = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Показати шлях сторінок'
    },
    MuiTablePagination: {
      getItemAriaLabel: type => {
        if (type === 'first') {
          return 'Перейти на першу сторінку';
        }

        if (type === 'last') {
          return 'Перейти на останню сторінку';
        }

        if (type === 'next') {
          return 'Перейти на наступну сторінку';
        } // if (type === 'previous') {


        return 'Перейти на попередню сторінку';
      },
      labelRowsPerPage: 'Рядків на сторінці:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} з ${count !== -1 ? count : `понад ${to}`}`
    },
    MuiRating: {
      getLabelText: value => {
        let pluralForm = 'Зірок';
        const lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Зірки';
        } else if (lastDigit === 1) {
          pluralForm = 'Зірка';
        }

        return `${value} ${pluralForm}`;
      },
      emptyLabelText: 'Рейтинг відсутній'
    },
    MuiAutocomplete: {
      clearText: 'Очистити',
      closeText: 'Згорнути',
      loadingText: 'Завантаження…',
      noOptionsText: 'Немає варіантів',
      openText: 'Розгорнути'
    },
    MuiAlert: {
      closeText: 'Згорнути'
    },
    MuiPagination: {
      'aria-label': 'Навігація сторінками',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Перейти на '}сторінку ${page}`;
        }

        if (type === 'first') {
          return 'Перейти на першу сторінку';
        }

        if (type === 'last') {
          return 'Перейти на останню сторінку';
        }

        if (type === 'next') {
          return 'Перейти на наступну сторінку';
        } // if (type === 'previous') {


        return 'Перейти на попередню сторінку';
      }
    }
  }
};
const viVN = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: 'Số hàng mỗi trang:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} trong ${count !== -1 ? count : `nhiều hơn ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} sao`,
      emptyLabelText: 'Trống'
    },
    MuiAutocomplete: {
      clearText: 'Xóa',
      closeText: 'Đóng',
      loadingText: 'Đang tải…',
      noOptionsText: 'Không có lựa chọn',
      openText: 'Mở'
    },
    MuiAlert: {
      closeText: 'Đóng'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};
const zhCN = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      // getItemAriaLabel: (type) => {
      //   if (type === 'first') {
      //     return 'Go to first page';
      //   }
      //   if (type === 'last') {
      //     return 'Go to last page';
      //   }
      //   if (type === 'next') {
      //     return 'Go to next page';
      //   }
      //   // if (type === 'previous') {
      //   return 'Go to previous page';
      // },
      labelRowsPerPage: '每页行数:',
      labelDisplayedRows: ({
        from,
        to,
        count
      }) => `${from}-${to} 的 ${count !== -1 ? count : `超过 ${to}`}`
    },
    MuiRating: {
      getLabelText: value => `${value} 星${value !== 1 ? '星' : ''}` // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: '明确',
      closeText: '关',
      loadingText: '载入中…',
      noOptionsText: '没有选择',
      openText: '打开'
    },
    MuiAlert: {
      closeText: '关'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     // if (type === 'previous') {
    //     return 'Go to previous page';
    //   },
    // },

  }
};

/***/ }),

/***/ "../packages/material-ui/src/styles/colorManipulator.js":
/*!**************************************************************!*\
  !*** ../packages/material-ui/src/styles/colorManipulator.js ***!
  \**************************************************************/
/*! exports provided: hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio, getLuminance, emphasize, fade, darken, lighten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return decomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return recomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return getContrastRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return emphasize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min = 0, max = 1) {
  if (true) {
    if (value < min || value > max) {
      console.error(`Material-UI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}

function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  const {
    values
  } = decomposeColor(color);
  return `#${values.map(n => intToHex(n)).join('')}`;
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(true ? `Material-UI: Unsupported \`${color}\` color.
We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().` : undefined);
  }

  let values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(value => parseFloat(value));
  return {
    type,
    values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  const {
    type
  } = color;
  let {
    values
  } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  return `${type}(${values.join(', ')})`;
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "../packages/material-ui/src/styles/createBreakpoints.js":
/*!***************************************************************!*\
  !*** ../packages/material-ui/src/styles/createBreakpoints.js ***!
  \***************************************************************/
/*! exports provided: keys, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBreakpoints; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm[.
    values = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    },
    unit = 'px',
    step = 5
  } = breakpoints,
        other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100}${unit})`;
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return _objectSpread({
    keys,
    values,
    up,
    down,
    between,
    only,
    width
  }, other);
}

/***/ }),

/***/ "../packages/material-ui/src/styles/createMixins.js":
/*!**********************************************************!*\
  !*** ../packages/material-ui/src/styles/createMixins.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMixins; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createMixins(breakpoints, spacing, mixins) {
  return _objectSpread({
    gutters: (styles = {}) => {
      // To deprecate in v4.1
      //       warning(
      //         false,
      //         [
      //           'Material-UI: Theme.mixins.gutters() is deprecated.',
      //           'You can use the source of the mixin directly:',
      //           `
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   paddingLeft: theme.spacing(3),
      //   paddingRight: theme.spacing(3),
      // },
      // `,
      //         ].join('\n'),
      //       );
      return _objectSpread(_objectSpread({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles), {}, {
        [breakpoints.up('sm')]: _objectSpread({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up('sm')])
      });
    },
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}

/***/ }),

/***/ "../packages/material-ui/src/styles/createMuiStrictModeTheme.js":
/*!**********************************************************************!*\
  !*** ../packages/material-ui/src/styles/createMuiStrictModeTheme.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMuiStrictModeTheme; });
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "../packages/material-ui/src/styles/createMuiTheme.js");


function createMuiStrictModeTheme(options, ...args) {
  return Object(_createMuiTheme__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])({
    unstable_strictMode: true
  }, options), ...args);
}

/***/ }),

/***/ "../packages/material-ui/src/styles/createMuiTheme.js":
/*!************************************************************!*\
  !*** ../packages/material-ui/src/styles/createMuiTheme.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBreakpoints */ "../packages/material-ui/src/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMixins */ "../packages/material-ui/src/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "../packages/material-ui/src/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTypography */ "../packages/material-ui/src/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shadows */ "../packages/material-ui/src/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shape */ "../packages/material-ui/src/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createSpacing */ "../packages/material-ui/src/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transitions */ "../packages/material-ui/src/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zIndex */ "../packages/material-ui/src/styles/zIndex.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function createMuiTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {}
  } = options,
        other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  const palette = Object(_createPalette__WEBPACK_IMPORTED_MODULE_3__["default"])(paletteInput);
  const breakpoints = Object(_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__["default"])(breakpointsInput);
  const spacing = Object(_createSpacing__WEBPACK_IMPORTED_MODULE_7__["default"])(spacingInput);
  let muiTheme = Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])({
    breakpoints,
    direction: 'ltr',
    mixins: Object(_createMixins__WEBPACK_IMPORTED_MODULE_2__["default"])(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_5__["default"],
    typography: Object(_createTypography__WEBPACK_IMPORTED_MODULE_4__["default"])(palette, typographyInput),
    spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_6__["default"],
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_8__["default"],
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, other);
  muiTheme = args.reduce((acc, argument) => Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])(acc, argument), muiTheme);

  if (true) {
    const pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    const traverse = (node, parentKey, depth = 1) => {
      let key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        const child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error([`Material-UI: The \`${parentKey}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`, 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: {
                [`&$${key}`]: child
              }
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

/* harmony default export */ __webpack_exports__["default"] = (createMuiTheme);

/***/ }),

/***/ "../packages/material-ui/src/styles/createPalette.js":
/*!***********************************************************!*\
  !*** ../packages/material-ui/src/styles/createPalette.js ***!
  \***********************************************************/
/*! exports provided: light, dark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPalette; });
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors/common */ "../packages/material-ui/src/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors/grey */ "../packages/material-ui/src/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/indigo */ "../packages/material-ui/src/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/pink */ "../packages/material-ui/src/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colors/red */ "../packages/material-ui/src/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/orange */ "../packages/material-ui/src/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/blue */ "../packages/material-ui/src/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/green */ "../packages/material-ui/src/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./colorManipulator */ "../packages/material-ui/src/styles/colorManipulator.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_1__["default"].white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_2__["default"][50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_1__["default"].white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_2__["default"][800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_1__["default"].white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["lighten"])(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["darken"])(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  const {
    primary = {
      light: _colors_indigo__WEBPACK_IMPORTED_MODULE_3__["default"][300],
      main: _colors_indigo__WEBPACK_IMPORTED_MODULE_3__["default"][500],
      dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_3__["default"][700]
    },
    secondary = {
      light: _colors_pink__WEBPACK_IMPORTED_MODULE_4__["default"].A200,
      main: _colors_pink__WEBPACK_IMPORTED_MODULE_4__["default"].A400,
      dark: _colors_pink__WEBPACK_IMPORTED_MODULE_4__["default"].A700
    },
    error = {
      light: _colors_red__WEBPACK_IMPORTED_MODULE_5__["default"][300],
      main: _colors_red__WEBPACK_IMPORTED_MODULE_5__["default"][500],
      dark: _colors_red__WEBPACK_IMPORTED_MODULE_5__["default"][700]
    },
    warning = {
      light: _colors_orange__WEBPACK_IMPORTED_MODULE_6__["default"][300],
      main: _colors_orange__WEBPACK_IMPORTED_MODULE_6__["default"][500],
      dark: _colors_orange__WEBPACK_IMPORTED_MODULE_6__["default"][700]
    },
    info = {
      light: _colors_blue__WEBPACK_IMPORTED_MODULE_7__["default"][300],
      main: _colors_blue__WEBPACK_IMPORTED_MODULE_7__["default"][500],
      dark: _colors_blue__WEBPACK_IMPORTED_MODULE_7__["default"][700]
    },
    success = {
      light: _colors_green__WEBPACK_IMPORTED_MODULE_8__["default"][300],
      main: _colors_green__WEBPACK_IMPORTED_MODULE_8__["default"][500],
      dark: _colors_green__WEBPACK_IMPORTED_MODULE_8__["default"][700]
    },
    type = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette,
        other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    const contrastText = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["getContrastRatio"])(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      const contrast = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["getContrastRatio"])(background, contrastText);

      if (contrast < 3) {
        console.error([`Material-UI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  const augmentColor = (color, mainShade = 500, lightShade = 300, darkShade = 700) => {
    color = _objectSpread({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error(true ? `Material-UI: The color provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : undefined);
    }

    if (typeof color.main !== 'string') {
      throw new Error(true ? `Material-UI: The color provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@material-ui/core/colors";

const theme1 = createMuiTheme({ palette: {
  primary: green,
} });

const theme2 = createMuiTheme({ palette: {
  primary: { main: green[500] },
} });` : undefined);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  const types = {
    dark,
    light
  };

  if (true) {
    if (!types[type]) {
      console.error(`Material-UI: The palette type \`${type}\` is not supported.`);
    }
  }

  const paletteOutput = Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])(_objectSpread({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_1__["default"],
    // The palette type, can be light or dark.
    type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_2__["default"],
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "../packages/material-ui/src/styles/createSpacing.js":
/*!***********************************************************!*\
  !*** ../packages/material-ui/src/styles/createSpacing.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSpacing; });
/* harmony import */ var _material_ui_system_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-system/src */ "../packages/material-ui-system/src/index.js");

let warnOnce;
function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  const transform = Object(_material_ui_system_src__WEBPACK_IMPORTED_MODULE_0__["createUnarySpacing"])({
    spacing: spacingInput
  });

  const spacing = (...args) => {
    if (true) {
      if (!(args.length <= 4)) {
        console.error(`Material-UI: Too many arguments provided, expected between 0 and 4, got ${args.length}`);
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(argument => {
      if (typeof argument === 'string') {
        return argument;
      }

      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: () => {
      if (true) {
        if (!warnOnce || false) {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "../packages/material-ui/src/styles/createStyles.js":
/*!**********************************************************!*\
  !*** ../packages/material-ui/src/styles/createStyles.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyles; });
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__["createStyles"])(styles);
}

/***/ }),

/***/ "../packages/material-ui/src/styles/createTypography.js":
/*!**************************************************************!*\
  !*** ../packages/material-ui/src/styles/createTypography.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTypography; });
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
        {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref,
        other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  const coef = fontSize / 14;

  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _objectSpread(_objectSpread(_objectSpread({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}), casing), allVariants);

  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return Object(_material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])(_objectSpread({
    htmlFontSize,
    pxToRem,
    round,
    // TODO v5: remove
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "../packages/material-ui/src/styles/cssUtils.js":
/*!******************************************************!*\
  !*** ../packages/material-ui/src/styles/cssUtils.js ***!
  \******************************************************/
/*! exports provided: isUnitless, getUnit, toUnitless, convertLength, alignProperty, fontGrid, responsiveProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnitless", function() { return isUnitless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnit", function() { return getUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnitless", function() { return toUnitless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertLength", function() { return convertLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignProperty", function() { return alignProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontGrid", function() { return fontGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveProperty", function() { return responsiveProperty; });
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return (length, toUnit) => {
    const fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    let pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    let outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = 'rem',
  breakpoints = [600, 960, 1280],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(breakpoint => {
    let value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
    };
  });
  return output;
}

/***/ }),

/***/ "../packages/material-ui/src/styles/defaultTheme.js":
/*!**********************************************************!*\
  !*** ../packages/material-ui/src/styles/defaultTheme.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMuiTheme */ "../packages/material-ui/src/styles/createMuiTheme.js");

const defaultTheme = Object(_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "../packages/material-ui/src/styles/index.js":
/*!***************************************************!*\
  !*** ../packages/material-ui/src/styles/index.js ***!
  \***************************************************/
/*! exports provided: hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio, getLuminance, emphasize, fade, darken, lighten, createMuiTheme, unstable_createMuiStrictModeTheme, createStyles, makeStyles, responsiveFontSizes, styled, easing, duration, useTheme, withStyles, withTheme, createGenerateClassName, jssPreset, ServerStyleSheets, StylesProvider, MuiThemeProvider, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "../packages/material-ui/src/styles/colorManipulator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["decomposeColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["recomposeColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["getContrastRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["getLuminance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["emphasize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["fade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["darken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["lighten"]; });

/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "../packages/material-ui/src/styles/createMuiTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMuiTheme", function() { return _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "../packages/material-ui/src/styles/createMuiStrictModeTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_createMuiStrictModeTheme", function() { return _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "../packages/material-ui/src/styles/createStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "../packages/material-ui/src/styles/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "../packages/material-ui/src/styles/responsiveFontSizes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsiveFontSizes", function() { return _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "../packages/material-ui/src/styles/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "../packages/material-ui/src/styles/transitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return _transitions__WEBPACK_IMPORTED_MODULE_7__["easing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return _transitions__WEBPACK_IMPORTED_MODULE_7__["duration"]; });

/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "../packages/material-ui/src/styles/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "../packages/material-ui/src/styles/withStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "../packages/material-ui/src/styles/withTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_11__["createGenerateClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_11__["jssPreset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheets", function() { return _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_11__["ServerStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_11__["StylesProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiThemeProvider", function() { return _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"]; });


 // eslint-disable-next-line camelcase












/***/ }),

/***/ "../packages/material-ui/src/styles/makeStyles.js":
/*!********************************************************!*\
  !*** ../packages/material-ui/src/styles/makeStyles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "../packages/material-ui/src/styles/defaultTheme.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function makeStyles(stylesOrCreator, options = {}) {
  return Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(stylesOrCreator, _objectSpread({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "../packages/material-ui/src/styles/responsiveFontSizes.js":
/*!*****************************************************************!*\
  !*** ../packages/material-ui/src/styles/responsiveFontSizes.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return responsiveFontSizes; });
/* harmony import */ var _material_ui_utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-utils/src */ "../packages/material-ui-utils/src/index.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssUtils */ "../packages/material-ui/src/styles/cssUtils.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function responsiveFontSizes(themeInput, options = {}) {
  const {
    breakpoints = ['sm', 'md', 'lg'],
    disableAlign = false,
    factor = 2,
    variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline']
  } = options;

  const theme = _objectSpread({}, themeInput);

  theme.typography = _objectSpread({}, theme.typography);
  const typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  const convert = Object(_cssUtils__WEBPACK_IMPORTED_MODULE_1__["convertLength"])(typography.htmlFontSize);
  const breakpointValues = breakpoints.map(x => theme.breakpoints.values[x]);
  variants.forEach(variant => {
    const style = typography[variant];
    const remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    const maxFontSize = remFontSize;
    const minFontSize = 1 + (maxFontSize - 1) / factor;
    let {
      lineHeight
    } = style;

    if (!Object(_cssUtils__WEBPACK_IMPORTED_MODULE_1__["isUnitless"])(lineHeight) && !disableAlign) {
      throw new Error(true ? `Material-UI: Unsupported non-unitless line height with grid alignment.
Use unitless line heights instead.` : undefined);
    }

    if (!Object(_cssUtils__WEBPACK_IMPORTED_MODULE_1__["isUnitless"])(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    let transform = null;

    if (!disableAlign) {
      transform = value => Object(_cssUtils__WEBPACK_IMPORTED_MODULE_1__["alignProperty"])({
        size: value,
        grid: Object(_cssUtils__WEBPACK_IMPORTED_MODULE_1__["fontGrid"])({
          pixels: 4,
          lineHeight,
          htmlFontSize: typography.htmlFontSize
        })
      });
    }

    typography[variant] = _objectSpread(_objectSpread({}, style), Object(_cssUtils__WEBPACK_IMPORTED_MODULE_1__["responsiveProperty"])({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "../packages/material-ui/src/styles/shadows.js":
/*!*****************************************************!*\
  !*** ../packages/material-ui/src/styles/shadows.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ "../packages/material-ui/src/styles/shape.js":
/*!***************************************************!*\
  !*** ../packages/material-ui/src/styles/shape.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shape = {
  borderRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = (shape);

/***/ }),

/***/ "../packages/material-ui/src/styles/styled.js":
/*!****************************************************!*\
  !*** ../packages/material-ui/src/styles/styled.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "../packages/material-ui/src/styles/defaultTheme.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const styled = Component => {
  const componentCreator = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__["styled"])(Component);
  return (style, options) => componentCreator(style, _objectSpread({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, options));
};

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "../packages/material-ui/src/styles/transitions.js":
/*!*********************************************************!*\
  !*** ../packages/material-ui/src/styles/transitions.js ***!
  \*********************************************************/
/*! exports provided: easing, duration, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return duration; });
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  easing,
  duration,
  create: (props = ['all'], options = {}) => {
    const {
      duration: durationOption = duration.standard,
      easing: easingOption = easing.easeInOut,
      delay = 0
    } = options,
          other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);

    if (true) {
      const isString = value => typeof value === 'string';

      const isNumber = value => !isNaN(parseFloat(value));

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`Material-UI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error(`Material-UI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
      }
    }

    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  },

  getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }

});

/***/ }),

/***/ "../packages/material-ui/src/styles/useTheme.js":
/*!******************************************************!*\
  !*** ../packages/material-ui/src/styles/useTheme.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "../packages/material-ui/src/styles/defaultTheme.js");



function useTheme() {
  const theme = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__["useTheme"])() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "../packages/material-ui/src/styles/withStyles.js":
/*!********************************************************!*\
  !*** ../packages/material-ui/src/styles/withStyles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "../packages/material-ui/src/styles/defaultTheme.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function withStyles(stylesOrCreator, options) {
  return Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(stylesOrCreator, _objectSpread({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "../packages/material-ui/src/styles/withTheme.js":
/*!*******************************************************!*\
  !*** ../packages/material-ui/src/styles/withTheme.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "../packages/material-ui/src/styles/defaultTheme.js");


const withTheme = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_0__["withThemeCreator"])({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "../packages/material-ui/src/styles/zIndex.js":
/*!****************************************************!*\
  !*** ../packages/material-ui/src/styles/zIndex.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["default"] = (zIndex);

/***/ }),

/***/ "../packages/material-ui/src/useMediaQuery/index.js":
/*!**********************************************************!*\
  !*** ../packages/material-ui/src/useMediaQuery/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMediaQuery */ "../packages/material-ui/src/useMediaQuery/useMediaQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../packages/material-ui/src/useMediaQuery/useMediaQuery.js":
/*!******************************************************************!*\
  !*** ../packages/material-ui/src/useMediaQuery/useMediaQuery.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMediaQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function useMediaQuery(queryInput, options = {}) {
  const theme = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const props = Object(_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_1__["getThemeProps"])({
    theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (true) {
    if (typeof queryInput === 'function' && theme === null) {
      console.error(['Material-UI: The `query` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
    }
  }

  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  const supportMatchMedia =  false && false;

  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    noSsr = false,
    ssrMatchMedia = null
  } = _objectSpread(_objectSpread({}, props), options);

  const [match, setMatch] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](() => {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = matchMedia(query);

    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]({
      query,
      match
    });
  }

  return match;
}

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../packages/material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "../node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/next-server/lib/router/rewrite-url-for-export */ "../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");
/* harmony import */ var next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_modules_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/modules/constants */ "./src/modules/constants.js");
/* harmony import */ var _src_modules_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_modules_constants__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/modules/utils/helpers */ "./src/modules/utils/helpers.js");
/* harmony import */ var _src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_modules_components_ThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/modules/components/ThemeContext */ "./src/modules/components/ThemeContext.js");
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/docs/pages/_document.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}







 // You can find a benchmark of the available CSS minifiers under
// https://github.com/GoalSmashers/css-minification-benchmark
// We have found that clean-css is faster than cssnano but the output is larger.
// Waiting for https://github.com/cssinjs/jss/issues/279
// 4% slower but 12% smaller output than doing it in a single step.
//
// It's using .browserslistrc

let prefixer;
let cleanCSS;

if (false) {}

const GOOGLE_ID = false ? undefined : 'UA-106598593-3';
class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const {
      canonical,
      userLanguage
    } = this.props;
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Html"], {
      lang: userLanguage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx("link", {
      rel: "manifest",
      href: "/static/manifest.json",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: _src_modules_components_ThemeContext__WEBPACK_IMPORTED_MODULE_6__["themeColor"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "/static/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/static/icons/180x180.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "canonical",
      href: `https://material-ui.com${Object(next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_3__["rewriteUrlForNextExport"])(`${userLanguage === 'en' ? '' : `/${userLanguage}`}${canonical}`)}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "alternate",
      href: `https://material-ui.com${Object(next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_3__["rewriteUrlForNextExport"])(canonical)}`,
      hrefLang: "x-default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }), _src_modules_constants__WEBPACK_IMPORTED_MODULE_4__["LANGUAGES_SSR"].map(userLanguage2 => __jsx("link", {
      key: userLanguage2,
      rel: "alternate",
      href: `https://material-ui.com${Object(next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_3__["rewriteUrlForNextExport"])(`${userLanguage2 === 'en' ? '' : `/${userLanguage2}`}${canonical}`)}`,
      hrefLang: userLanguage2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    })), __jsx("link", {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossOrigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }), __jsx("style", {
      id: "material-icon-font",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }), __jsx("style", {
      id: "font-awesome-css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }), __jsx("style", {
      id: "app-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }), __jsx("style", {
      id: "prismjs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }), __jsx("style", {
      id: "insertion-point-jss",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    })), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }), __jsx("script", {
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML: {
        __html: `
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                window.ga('create','${GOOGLE_ID}','auto');
              `
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    })));
  }

}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new _packages_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_1__["ServerStyleSheets"]();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect(__jsx(App, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 54
      }
    })))
  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);
  let css = sheets.toString(); // It might be undefined, e.g. after an error.

  if (css && false) {
    const result1 = await prefixer.process(css, {
      from: undefined
    });
    css = result1.css;
    css = cleanCSS.minify(css).styles;
  }

  return _objectSpread(_objectSpread({}, initialProps), {}, {
    canonical: Object(_src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["pathnameToLanguage"])(ctx.req.url).canonical,
    userLanguage: ctx.query.userLanguage || 'en',
    styles: [...react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(initialProps.styles), __jsx("style", {
      id: "jss-server-side",
      key: "jss-server-side" // eslint-disable-next-line react/no-danger
      ,
      dangerouslySetInnerHTML: {
        __html: css
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }
    })]
  });
};

/***/ }),

/***/ "./src/modules/components/ThemeContext.js":
/*!************************************************!*\
  !*** ./src/modules/components/ThemeContext.js ***!
  \************************************************/
/*! exports provided: themeColor, DispatchContext, ThemeProvider, useChangeTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeColor", function() { return themeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchContext", function() { return DispatchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChangeTheme", function() { return useChangeTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../packages/material-ui/src/styles */ "../packages/material-ui/src/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _packages_material_ui_src_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../packages/material-ui/src/useMediaQuery */ "../packages/material-ui/src/useMediaQuery/index.js");
/* harmony import */ var _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../packages/material-ui/src/locale */ "../packages/material-ui/src/locale/index.ts");
/* harmony import */ var _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../packages/material-ui/src/colors */ "../packages/material-ui/src/colors/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./src/modules/utils/helpers.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_useLazyCSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useLazyCSS */ "./src/modules/utils/useLazyCSS.js");
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/docs/src/modules/components/ThemeContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}










const languageMap = {
  en: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["enUS"],
  zh: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["zhCN"],
  fa: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["faIR"],
  ru: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["ruRU"],
  pt: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["ptBR"],
  es: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["esES"],
  fr: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["frFR"],
  de: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["deDE"],
  ja: _packages_material_ui_src_locale__WEBPACK_IMPORTED_MODULE_5__["jaJP"]
};
const themeColor = _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_6__["blue"][700];
const themeInitialOptions = {
  dense: false,
  direction: 'ltr',
  paletteColors: {},
  spacing: 8 // spacing unit

};
const highDensity = {
  props: {
    MuiButton: {
      size: 'small'
    },
    MuiFilledInput: {
      margin: 'dense'
    },
    MuiFormControl: {
      margin: 'dense'
    },
    MuiFormHelperText: {
      margin: 'dense'
    },
    MuiIconButton: {
      size: 'small'
    },
    MuiInputBase: {
      margin: 'dense'
    },
    MuiInputLabel: {
      margin: 'dense'
    },
    MuiListItem: {
      dense: true
    },
    MuiOutlinedInput: {
      margin: 'dense'
    },
    MuiFab: {
      size: 'small'
    },
    MuiTable: {
      size: 'small'
    },
    MuiTextField: {
      margin: 'dense'
    },
    MuiToolbar: {
      variant: 'dense'
    }
  },
  overrides: {
    MuiIconButton: {
      sizeSmall: {
        // minimal touch target hit spacing
        marginLeft: 4,
        marginRight: 4,
        padding: 12
      }
    }
  }
};
const DispatchContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(() => {
  throw new Error('Forgot to wrap component in `ThemeProvider`');
});

if (true) {
  DispatchContext.displayName = 'ThemeDispatchContext';
}

const useEnhancedEffect = true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect : undefined;
let createMuiTheme;

if (true) {
  createMuiTheme = _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"];
} else {}

function ThemeProvider(props) {
  const {
    children
  } = props;
  const [themeOptions, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer((state, action) => {
    switch (action.type) {
      case 'SET_SPACING':
        return _objectSpread(_objectSpread({}, state), {}, {
          spacing: action.payload
        });

      case 'INCREASE_SPACING':
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            spacing: state.spacing + 1
          });
        }

      case 'DECREASE_SPACING':
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            spacing: state.spacing - 1
          });
        }

      case 'SET_DENSE':
        return _objectSpread(_objectSpread({}, state), {}, {
          dense: action.payload
        });

      case 'RESET_DENSITY':
        return _objectSpread(_objectSpread({}, state), {}, {
          dense: themeInitialOptions.dense,
          spacing: themeInitialOptions.spacing
        });

      case 'RESET_COLORS':
        return _objectSpread(_objectSpread({}, state), {}, {
          paletteColors: themeInitialOptions.paletteColors
        });

      case 'CHANGE':
        return _objectSpread(_objectSpread({}, state), {}, {
          paletteType: action.payload.paletteType || state.paletteType,
          direction: action.payload.direction || state.direction,
          paletteColors: action.payload.paletteColors || state.paletteColors
        });

      default:
        throw new Error(`Unrecognized type ${action.type}`);
    }
  }, themeInitialOptions);
  const userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.options.userLanguage);
  const prefersDarkMode = Object(_packages_material_ui_src_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])('(prefers-color-scheme: dark)');
  const preferredType = prefersDarkMode ? 'dark' : 'light';
  const {
    dense,
    direction,
    paletteColors,
    paletteType = preferredType,
    spacing
  } = themeOptions;
  Object(_utils_useLazyCSS__WEBPACK_IMPORTED_MODULE_8__["default"])('/static/styles/prism-okaidia.css', '#prismjs');
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (false) {}
  }, []); // persist paletteType

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.cookie = `paletteType=${paletteType};path=/;max-age=31536000`;
  }, [paletteType]);
  useEnhancedEffect(() => {
    document.body.dir = direction;
  }, [direction]);
  const theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
    const nextTheme = createMuiTheme({
      direction,
      nprogress: {
        color: paletteType === 'light' ? '#000' : '#fff'
      },
      palette: _objectSpread({
        primary: {
          main: paletteType === 'light' ? _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_6__["blue"][700] : _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_6__["blue"][200]
        },
        secondary: {
          main: paletteType === 'light' ? Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_2__["darken"])(_packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_6__["pink"].A400, 0.1) : _packages_material_ui_src_colors__WEBPACK_IMPORTED_MODULE_6__["pink"][200]
        },
        type: paletteType,
        background: {
          default: paletteType === 'light' ? '#fff' : '#121212'
        }
      }, paletteColors),
      spacing
    }, dense ? highDensity : null, languageMap[userLanguage]);
    nextTheme.palette.background.level2 = paletteType === 'light' ? nextTheme.palette.grey[100] : '#333';
    nextTheme.palette.background.level1 = paletteType === 'light' ? '#fff' : nextTheme.palette.grey[900];
    return nextTheme;
  }, [dense, direction, paletteColors, paletteType, spacing, userLanguage]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // Expose the theme as a global variable so people can play with it.
    if (false) {}
  }, [theme]);
  return __jsx(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    }
  }, __jsx(DispatchContext.Provider, {
    value: dispatch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }
  }, children));
}
ThemeProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/**
 * @returns {(nextOptions: Partial<typeof themeInitialOptions>) => void}
 */

function useChangeTheme() {
  const dispatch = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(DispatchContext);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(options => dispatch({
    type: 'CHANGE',
    payload: options
  }), [dispatch]);
}

/***/ }),

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const CODE_VARIANTS = {
  JS: 'JS',
  TS: 'TS'
};
const ACTION_TYPES = {
  OPTIONS_CHANGE: 'OPTIONS_CHANGE',
  NOTIFICATIONS_CHANGE: 'NOTIFICATIONS_CHANGE'
}; // Valid languages to server-side render in production

const LANGUAGES = ['en', 'zh', 'ru', 'pt', 'es', 'fr', 'de', 'ja', 'aa']; // Server side rendered languages

const LANGUAGES_SSR = ['en', 'zh', 'ru', 'pt', 'es']; // Work in progress

const LANGUAGES_IN_PROGRESS = LANGUAGES.slice(); // Valid languages to use in production

const LANGUAGES_LABEL = [{
  code: 'en',
  text: 'English'
}, {
  code: 'zh',
  text: '中文'
}, {
  code: 'ru',
  text: 'Русский'
}, {
  code: 'pt',
  text: 'Português'
}, {
  code: 'es',
  text: 'Español'
}, {
  code: 'fr',
  text: 'Français'
}, {
  code: 'de',
  text: 'Deutsch'
}, {
  code: 'ja',
  text: '日本語'
}];
const SOURCE_CODE_ROOT_URL = 'https://github.com/mui-org/material-ui/blob/master';
module.exports = {
  CODE_VARIANTS,
  ACTION_TYPES,
  LANGUAGES,
  LANGUAGES_SSR,
  LANGUAGES_LABEL,
  LANGUAGES_IN_PROGRESS,
  SOURCE_CODE_ROOT_URL
};

/***/ }),

/***/ "./src/modules/utils/helpers.js":
/*!**************************************!*\
  !*** ./src/modules/utils/helpers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const upperFirst = __webpack_require__(/*! lodash/upperFirst */ "lodash/upperFirst");

const camelCase = __webpack_require__(/*! lodash/camelCase */ "lodash/camelCase");

const {
  CODE_VARIANTS,
  LANGUAGES
} = __webpack_require__(/*! ../constants */ "./src/modules/constants.js");

function titleize(string) {
  if (true) {
    if (typeof string !== 'string' || string.length <= 0) {
      console.error('titleize(string) expects a non empty string argument.');
    }
  }

  return string.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function pageToTitle(page) {
  if (page.title === false) {
    return null;
  }

  if (page.title) {
    return page.title;
  }

  const path = page.subheader || page.pathname;
  const name = path.replace(/.*\//, '');

  if (path.indexOf('/api/') !== -1) {
    return upperFirst(camelCase(name));
  }

  return titleize(name);
}

function pageToTitleI18n(page, t) {
  const path = page.subheader || page.pathname;
  return t(`pages.${path}`, {
    ignoreWarning: true
  }) || pageToTitle(page);
}
/**
 * @var
 * set of packages that ship their own typings instead of using @types/ namespace
 * Array because Set([iterable]) is not supported in IE11
 */


const packagesWithBundledTypes = ['@material-ui/core', '@material-ui/lab'];
/**
 * WARNING: Always uses `latest` typings.
 *
 * Adds dependencies to @types packages only for packages that are not listed
 * in packagesWithBundledTypes
 *
 * @see packagesWithBundledTypes in this module namespace
 *
 * @param {Record<string, string>} deps - list of dependency as `name => version`
 */

function addTypeDeps(deps) {
  const packagesWithDTPackage = Object.keys(deps).filter(name => packagesWithBundledTypes.indexOf(name) === -1);
  packagesWithDTPackage.forEach(name => {
    let resolvedName = name; // scoped package?

    if (name.startsWith('@')) {
      // https://github.com/DefinitelyTyped/DefinitelyTyped#what-about-scoped-packages
      resolvedName = name.slice(1).replace('/', '__');
    }

    deps[`@types/${resolvedName}`] = 'latest';
  });
}

function includePeerDependencies(deps, versions) {
  _extends(deps, {
    'react-dom': versions['react-dom'],
    react: versions.react
  });

  if (deps['@material-ui/lab'] && !deps['@material-ui/core']) {
    deps['@material-ui/core'] = versions['@material-ui/core'];
  }
}
/**
 * @param {string} raw - ES6 source with es module imports
 * @param {objects} options
 * @param {'JS' | 'TS'} options.codeLanguage
 * @param {'next' | 'latest'} options.reactVersion
 * @returns {Record<string, 'latest'>} map of packages with their required version
 */


function getDependencies(raw, options = {}) {
  const {
    codeLanguage = CODE_VARIANTS.JS,
    reactVersion = 'latest'
  } = options;
  const deps = {};
  const versions = {
    'react-dom': reactVersion,
    react: reactVersion,
    '@material-ui/core': 'latest',
    '@material-ui/icons': 'latest',
    '@material-ui/lab': 'latest',
    '@material-ui/styles': 'latest',
    '@material-ui/system': 'latest',
    '@material-ui/utils': 'latest',
    // TODO: remove once @material-ui/pickers v4 is released.
    '@date-io/date-fns': 'v1'
  };
  const re = /^import\s'([^']+)'|import\s[\s\S]*?\sfrom\s+'([^']+)/gm;
  let m; // eslint-disable-next-line no-cond-assign

  while (m = re.exec(raw)) {
    let name;

    if (m[2]) {
      // full import
      // handle scope names
      name = m[2].charAt(0) === '@' ? m[2].split('/', 2).join('/') : m[2].split('/', 1)[0];
    } else {
      name = m[1];
    }

    if (!deps[name]) {
      deps[name] = versions[name] ? versions[name] : 'latest';
    }
  }

  includePeerDependencies(deps, versions);

  if (codeLanguage === CODE_VARIANTS.TS) {
    addTypeDeps(deps);
    deps.typescript = 'latest';
  }

  return deps;
}

function getCookie(name) {
  const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`);
  return document.cookie.replace(regex, '$1');
}

function pathnameToLanguage(pathname) {
  const userLanguage = pathname.substring(1, 3);

  if (LANGUAGES.indexOf(userLanguage) !== -1 && pathname.indexOf(`/${userLanguage}/`) === 0) {
    return {
      userLanguage,
      canonical: userLanguage === 'en' ? pathname : pathname.substring(3)
    };
  }

  return {
    userLanguage: 'en',
    canonical: pathname
  };
}

module.exports = {
  titleize,
  pageToTitle,
  pageToTitleI18n,
  getDependencies,
  getCookie,
  pathnameToLanguage
};

/***/ }),

/***/ "./src/modules/utils/useLazyCSS.js":
/*!*****************************************!*\
  !*** ./src/modules/utils/useLazyCSS.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLazyCSS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fg-loadcss/src/loadCSS */ "fg-loadcss/src/loadCSS");
/* harmony import */ var fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Convenience wrapper around fgLoadCSS for hooks usage
 * @param {string} href
 * @param {string} before - CSS selector
 * @returns {() => void} cleanup function
 */

function useLazyCSS(href, before) {
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const link = Object(fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_1__["loadCSS"])(href, document.querySelector(before));
    return () => {
      link.parentElement.removeChild(link);
    };
  }, [href, before]);
}

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "fg-loadcss/src/loadCSS":
/*!*****************************************!*\
  !*** external "fg-loadcss/src/loadCSS" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fg-loadcss/src/loadCSS");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "jss-plugin-camel-case":
/*!****************************************!*\
  !*** external "jss-plugin-camel-case" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-plugin-camel-case");

/***/ }),

/***/ "jss-plugin-default-unit":
/*!******************************************!*\
  !*** external "jss-plugin-default-unit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-plugin-default-unit");

/***/ }),

/***/ "jss-plugin-global":
/*!************************************!*\
  !*** external "jss-plugin-global" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-plugin-global");

/***/ }),

/***/ "jss-plugin-nested":
/*!************************************!*\
  !*** external "jss-plugin-nested" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-plugin-nested");

/***/ }),

/***/ "jss-plugin-props-sort":
/*!****************************************!*\
  !*** external "jss-plugin-props-sort" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-plugin-props-sort");

/***/ }),

/***/ "jss-plugin-rule-value-function":
/*!*************************************************!*\
  !*** external "jss-plugin-rule-value-function" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-plugin-rule-value-function");

/***/ }),

/***/ "jss-plugin-vendor-prefixer":
/*!*********************************************!*\
  !*** external "jss-plugin-vendor-prefixer" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-plugin-vendor-prefixer");

/***/ }),

/***/ "lodash/camelCase":
/*!***********************************!*\
  !*** external "lodash/camelCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),

/***/ "lodash/upperFirst":
/*!************************************!*\
  !*** external "lodash/upperFirst" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map