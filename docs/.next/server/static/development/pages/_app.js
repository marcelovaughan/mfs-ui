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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _src_modules_components_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/components/bootstrap */ "./src/modules/components/bootstrap.js");
/* harmony import */ var _src_modules_components_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_modules_components_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fg-loadcss/src/loadCSS */ "fg-loadcss/src/loadCSS");
/* harmony import */ var fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var accept_language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! accept-language */ "accept-language");
/* harmony import */ var accept_language__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(accept_language__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jss-rtl */ "jss-rtl");
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jss_rtl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/next-server/lib/router/rewrite-url-for-export */ "../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");
/* harmony import */ var next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _packages_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../packages/material-ui-styles/src */ "../packages/material-ui-styles/src/index.js");
/* harmony import */ var _src_pages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/pages */ "./src/pages.js");
/* harmony import */ var _src_modules_redux_initRedux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/modules/redux/initRedux */ "./src/modules/redux/initRedux.js");
/* harmony import */ var _src_modules_components_PageContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/modules/components/PageContext */ "./src/modules/components/PageContext.js");
/* harmony import */ var _src_modules_components_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/modules/components/GoogleAnalytics */ "./src/modules/components/GoogleAnalytics.js");
/* harmony import */ var _src_modules_utils_loadScript__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/modules/utils/loadScript */ "./src/modules/utils/loadScript.js");
/* harmony import */ var _src_modules_components_ThemeContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/modules/components/ThemeContext */ "./src/modules/components/ThemeContext.js");
/* harmony import */ var _src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/modules/utils/helpers */ "./src/modules/utils/helpers.js");
/* harmony import */ var _src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _src_modules_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/modules/constants */ "./src/modules/constants.js");
/* harmony import */ var _src_modules_constants__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_src_modules_constants__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/docs/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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
/* eslint-disable no-underscore-dangle */


 // --- Post bootstrap -----




















 // Configure JSS

const jss = Object(jss__WEBPACK_IMPORTED_MODULE_8__["create"])({
  plugins: [...Object(_packages_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_12__["jssPreset"])().plugins, jss_rtl__WEBPACK_IMPORTED_MODULE_9___default()()],
  insertionPoint: false ? undefined : null
});

function useFirstRender() {
  const firstRenderRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(true);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    firstRenderRef.current = false;
  }, []);
  return firstRenderRef.current;
}

accept_language__WEBPACK_IMPORTED_MODULE_7___default.a.languages(['en', 'zh', 'pt']);

function loadCrowdin() {
  window._jipt = [];

  window._jipt.push(['project', 'material-ui-docs']);

  Object(_src_modules_utils_loadScript__WEBPACK_IMPORTED_MODULE_17__["default"])('https://cdn.crowdin.com/jipt/jipt.js', document.querySelector('head'));
}

function LanguageNegotiation() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.options.userLanguage);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (userLanguage === 'aa') {
      loadCrowdin();
    }
  }, [userLanguage]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const {
      userLanguage: userLanguageUrl,
      canonical
    } = Object(_src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_19__["pathnameToLanguage"])(Object(next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_11__["rewriteUrlForNextExport"])(router.asPath));
    const preferedLanguage = Object(_src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_19__["getCookie"])('userLanguage') !== 'noDefault' && userLanguage === 'en' ? accept_language__WEBPACK_IMPORTED_MODULE_7___default.a.get(navigator.language) : userLanguage;

    if (preferedLanguage !== userLanguage) {
      window.location = preferedLanguage === 'en' ? canonical : `/${preferedLanguage}${canonical}`;
    } else if (userLanguageUrl !== userLanguage) {
      dispatch({
        type: _src_modules_constants__WEBPACK_IMPORTED_MODULE_20__["ACTION_TYPES"].OPTIONS_CHANGE,
        payload: {
          userLanguage: userLanguageUrl
        }
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
/**
 * Priority: on first render: navigated value, persisted value; otherwise initial value, 'JS'
 *
 * @returns {string} - The persisted variant if the initial value is undefined
 */


function usePersistCodeVariant() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    codeVariant: initialCodeVariant = _src_modules_constants__WEBPACK_IMPORTED_MODULE_20__["CODE_VARIANTS"].JS
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.options);
  const isFirstRender = useFirstRender();
  const navigatedCodeVariant = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
    const navigatedCodeVariantMatch = false ? undefined : null;

    if (navigatedCodeVariantMatch === null) {
      return undefined;
    }

    return navigatedCodeVariantMatch[1] === 'tsx' ? _src_modules_constants__WEBPACK_IMPORTED_MODULE_20__["CODE_VARIANTS"].TS : _src_modules_constants__WEBPACK_IMPORTED_MODULE_20__["CODE_VARIANTS"].JS;
  }, []);
  const persistedCodeVariant = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
    if (true) {
      return undefined;
    }

    return Object(_src_modules_utils_helpers__WEBPACK_IMPORTED_MODULE_19__["getCookie"])('codeVariant');
  }, []);
  /**
   * we initialize from navigation or cookies. on subsequent renders the store is the
   * truth
   */

  const codeVariant = isFirstRender === true ? navigatedCodeVariant || persistedCodeVariant || initialCodeVariant : initialCodeVariant;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (codeVariant !== initialCodeVariant) {
      dispatch({
        type: _src_modules_constants__WEBPACK_IMPORTED_MODULE_20__["ACTION_TYPES"].OPTIONS_CHANGE,
        payload: {
          codeVariant
        }
      });
    }
  });
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    document.cookie = `codeVariant=${codeVariant};path=/;max-age=31536000`;
  }, [codeVariant]);
  return codeVariant;
}
/**
 * basically just a `useAnalytics` hook.
 * However, it needs the redux store which is created
 * in the same component this "hook" is used.
 */


function Analytics() {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    Object(_src_modules_utils_loadScript__WEBPACK_IMPORTED_MODULE_17__["default"])('https://www.google-analytics.com/analytics.js', document.querySelector('head'));
  }, []);
  const options = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.options);
  const codeVariant = usePersistCodeVariant();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    window.ga('set', 'dimension1', codeVariant);
  }, [codeVariant]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    window.ga('set', 'dimension2', options.userLanguage);
  }, [options.userLanguage]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    /**
     * @type {null | MediaQueryList}
     */
    let matchMedia = null;
    /**
     * Based on https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#Monitoring_screen_resolution_or_zoom_level_changes
     * Adjusted to track 3 or more different ratios
     */

    function trackDevicePixelRation() {
      window.ga('set', 'dimension3', Math.round(window.devicePixelRatio * 10) / 10);
      matchMedia = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`); // Need to setup again.
      // Otherwise we track only changes from the initial ratio to another.
      // It would not track 3 or more different monitors/zoom stages

      matchMedia.addListener(trackDevicePixelRation);
    }

    trackDevicePixelRation();
    return () => {
      matchMedia = null;
    };
  }, []);
  return null;
} // Inspired by
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users


function forcePageReload(registration) {
  // console.log('already controlled?', Boolean(navigator.serviceWorker.controller));
  if (!navigator.serviceWorker.controller) {
    // The window client isn't currently controlled so it's a new service
    // worker that will activate immediately.
    return;
  } // console.log('registration waiting?', Boolean(registration.waiting));


  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    registration.waiting.postMessage('skipWaiting');
    return;
  }

  function listenInstalledStateChange() {
    registration.installing.addEventListener('statechange', event => {
      // console.log('statechange', event.target.state);
      if (event.target.state === 'installed' && registration.waiting) {
        // A new service worker is available, inform the user
        registration.waiting.postMessage('skipWaiting');
      } else if (event.target.state === 'activated') {
        // Force the control of the page by the activated service worker.
        window.location.reload();
      }
    });
  }

  if (registration.installing) {
    listenInstalledStateChange();
    return;
  } // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,


  registration.addEventListener('updatefound', listenInstalledStateChange);
}

async function registerServiceWorker() {
  if ('serviceWorker' in navigator && false && window.location.host.indexOf('material-ui.com') <= 0) {
    // register() automatically attempts to refresh the sw.js.
    const registration = await navigator.serviceWorker.register('/sw.js'); // Force the page reload for users.

    forcePageReload(registration);
  }
}

let dependenciesLoaded = false;

function loadDependencies() {
  if (dependenciesLoaded) {
    return;
  }

  dependenciesLoaded = true;
  Object(fg_loadcss_src_loadCSS__WEBPACK_IMPORTED_MODULE_4__["loadCSS"])('https://fonts.googleapis.com/icon?family=Material+Icons', document.querySelector('#material-icon-font'));
}

if (false) {}

function findActivePage(currentPages, pathname) {
  const activePage = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(currentPages, page => {
    if (page.children) {
      if (pathname.indexOf(`${page.pathname}/`) === 0) {
        // Check if one of the children matches (for /components)
        return findActivePage(page.children, pathname);
      }
    } // Should be an exact match if no children


    return pathname === page.pathname;
  });

  if (!activePage) {
    return null;
  } // We need to drill down


  if (activePage.pathname !== pathname) {
    return findActivePage(activePage.children, pathname);
  }

  return activePage;
}

function AppWrapper(props) {
  const {
    children,
    pageProps
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const [redux] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(() => Object(_src_modules_redux_initRedux__WEBPACK_IMPORTED_MODULE_14__["default"])({
    options: {
      userLanguage: pageProps.userLanguage
    }
  }));
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    loadDependencies();
    registerServiceWorker(); // Remove the server-side injected CSS.

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  let pathname = router.pathname; // Add support for leading / in development mode.

  if (pathname !== '/') {
    // The leading / is only added to support static hosting (resolve /index.html).
    // We remove it to normalize the pathname.
    // See `rewriteUrlForNextExport` on Next.js side.
    pathname = pathname.replace(/\/$/, '');
  }

  const activePage = findActivePage(_src_pages__WEBPACK_IMPORTED_MODULE_13__["default"], pathname);
  let fonts = ['https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'];

  if (pathname.match(/onepirate/)) {
    fonts = ['https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Work+Sans:300,400&display=swap'];
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 7
    }
  }, fonts.map(font => __jsx("link", {
    rel: "stylesheet",
    href: font,
    key: font,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }))), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: redux,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 7
    }
  }, __jsx(_src_modules_components_PageContext__WEBPACK_IMPORTED_MODULE_15__["default"].Provider, {
    value: {
      activePage,
      pages: _src_pages__WEBPACK_IMPORTED_MODULE_13__["default"],
      versions: pageProps.versions
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 9
    }
  }, __jsx(_packages_material_ui_styles_src__WEBPACK_IMPORTED_MODULE_12__["StylesProvider"], {
    jss: jss,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 11
    }
  }, __jsx(_src_modules_components_ThemeContext__WEBPACK_IMPORTED_MODULE_18__["ThemeProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }, children))), __jsx(LanguageNegotiation, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 9
    }
  }), __jsx(Analytics, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 9
    }
  })), __jsx(_src_modules_components_GoogleAnalytics__WEBPACK_IMPORTED_MODULE_16__["default"], {
    key: router.route,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 7
    }
  }));
}

AppWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  return __jsx(AppWrapper, {
    pageProps: pageProps,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 7
    }
  })));
}
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};

MyApp.getInitialProps = async ({
  ctx,
  Component
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps: _objectSpread({
      userLanguage: ctx.query.userLanguage || 'en'
    }, pageProps)
  };
};

/***/ }),

/***/ "./src/modules/components/GoogleAnalytics.js":
/*!***************************************************!*\
  !*** ./src/modules/components/GoogleAnalytics.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleAnalytics; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ "./src/modules/utils/helpers.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__);

 // So we can write code like:
//
// <Button
//   ga-event-category="demo"
//   ga-event-action="expand"
// >
//   Foo
// </Button>

function handleClick(event) {
  let element = event.target;

  while (element && element !== document) {
    const category = element.getAttribute('data-ga-event-category'); // We reach a tracking element, no need to look higher in the dom tree.

    if (category) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: element.getAttribute('data-ga-event-action'),
        eventLabel: element.getAttribute('data-ga-event-label'),
        eventValue: element.getAttribute('data-ga-event-value')
      });
      break;
    }

    element = element.parentElement;
  }
}

let bound = false;
function GoogleAnalytics() {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // Wait for the title to be updated.
    setTimeout(() => {
      const {
        canonical
      } = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["pathnameToLanguage"])(window.location.pathname);
      window.ga('set', {
        page: canonical
      });
      window.ga('send', {
        hitType: 'pageview'
      });
    });

    if (bound) {
      return;
    }

    bound = true;
    document.addEventListener('click', handleClick);
  }, []);
  return null;
}

/***/ }),

/***/ "./src/modules/components/PageContext.js":
/*!***********************************************!*\
  !*** ./src/modules/components/PageContext.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // The default value is never and should never be used.
// It's here to improve DX by enabling autocompletion for editors supporting TypeScript.

const PageContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  activePage: {
    pathname: ''
  },
  pages: [],
  versions: []
});

if (true) {
  PageContext.displayName = 'PageContext';
}

/* harmony default export */ __webpack_exports__["default"] = (PageContext);

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

/***/ "./src/modules/components/bootstrap.js":
/*!*********************************************!*\
  !*** ./src/modules/components/bootstrap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Disable auto highlighting
// https://github.com/PrismJS/prism/issues/765
if (false) {}

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

/***/ "./src/modules/redux/initRedux.js":
/*!****************************************!*\
  !*** ./src/modules/redux/initRedux.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return create; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _optionsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionsReducer */ "./src/modules/redux/optionsReducer.js");
/* harmony import */ var _notificationsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationsReducer */ "./src/modules/redux/notificationsReducer.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable no-underscore-dangle */



 // Get the Redux DevTools extension and fallback to a no-op function

let devtools = x => x;

if (false) {}

function create(initialState) {
  let middleware = [];

  if (false) {}

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    options: _optionsReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
    notifications: _notificationsReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), initialState, // Hydrate the store with server-side data
  Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware), devtools));
}

/***/ }),

/***/ "./src/modules/redux/notificationsReducer.js":
/*!***************************************************!*\
  !*** ./src/modules/redux/notificationsReducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notificationsReducer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/modules/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_0__);
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


const mapping = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].NOTIFICATIONS_CHANGE]: (state, action) => {
    const newState = _objectSpread(_objectSpread({}, state), action.payload);

    return newState;
  }
};
function notificationsReducer(state = {}, action) {
  let newState = _objectSpread({}, state);

  if (mapping[action.type]) {
    newState = mapping[action.type](state, action);
  }

  return newState;
}

/***/ }),

/***/ "./src/modules/redux/optionsReducer.js":
/*!*********************************************!*\
  !*** ./src/modules/redux/optionsReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return optionsReducer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/modules/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_material_ui_system_src_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../packages/material-ui-system/src/memoize */ "../packages/material-ui-system/src/memoize.js");
/* harmony import */ var _utils_mapTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/mapTranslations */ "./src/modules/utils/mapTranslations.js");
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





const req = __webpack_require__("./translations sync translations.*\\.json$");

const translations = Object(_utils_mapTranslations__WEBPACK_IMPORTED_MODULE_2__["default"])(req, 'json');

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

const warnOnce = {};
const getT = Object(_packages_material_ui_system_src_memoize__WEBPACK_IMPORTED_MODULE_1__["default"])(userLanguage => (key, options = {}) => {
  const {
    ignoreWarning = false
  } = options;
  const wordings = translations[userLanguage];

  if (!wordings) {
    console.error(`Missing language: ${userLanguage}.`);
    return '…';
  }

  const translation = getPath(wordings, key);

  if (!translation) {
    const fullKey = `${userLanguage}:${key}`; // No warnings in CI env

    if (!ignoreWarning && !warnOnce[fullKey] && false) {
      console.error(`Missing translation for ${fullKey}.`);
      warnOnce[fullKey] = true;
    }

    return getPath(translations.en, key);
  }

  return translation;
});
const mapping = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].OPTIONS_CHANGE]: (state, action) => {
    const newState = {
      codeVariant: action.payload.codeVariant || state.codeVariant,
      userLanguage: action.payload.userLanguage || state.userLanguage
    };
    return newState;
  }
};
function optionsReducer(state = {}, action) {
  let newState = _objectSpread({}, state);

  if (!newState.codeVariant) {
    newState.codeVariant = _constants__WEBPACK_IMPORTED_MODULE_0__["CODE_VARIANTS"].JS;
  }

  if (!newState.userLanguage) {
    newState.userLanguage = 'en';
  }

  if (mapping[action.type]) {
    newState = mapping[action.type](state, action);
  }

  newState.t = getT(newState.userLanguage);
  return newState;
}

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

/***/ "./src/modules/utils/loadScript.js":
/*!*****************************************!*\
  !*** ./src/modules/utils/loadScript.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadScript; });
function loadScript(src, position) {
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.src = src;
  position.appendChild(script);
  return script;
}

/***/ }),

/***/ "./src/modules/utils/mapTranslations.js":
/*!**********************************************!*\
  !*** ./src/modules/utils/mapTranslations.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapTranslations; });
function mapTranslations(req, ext) {
  const translations = {};
  req.keys().forEach(filename => {
    const match = filename.match(new RegExp(`-([a-z]{2}).${ext}$`));

    if (match) {
      translations[match[1]] = req(filename);
    } else {
      translations.en = req(filename);
    }
  });
  return translations;
}

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

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

const findPages = [{
  "pathname": "/api-docs",
  "children": [{
    "pathname": "/api-docs/alert"
  }, {
    "pathname": "/api-docs/alert-title"
  }, {
    "pathname": "/api-docs/app-bar"
  }, {
    "pathname": "/api-docs/autocomplete"
  }, {
    "pathname": "/api-docs/avatar"
  }, {
    "pathname": "/api-docs/avatar-group"
  }, {
    "pathname": "/api-docs/backdrop"
  }, {
    "pathname": "/api-docs/badge"
  }, {
    "pathname": "/api-docs/bottom-navigation"
  }, {
    "pathname": "/api-docs/bottom-navigation-action"
  }, {
    "pathname": "/api-docs/breadcrumbs"
  }, {
    "pathname": "/api-docs/button"
  }, {
    "pathname": "/api-docs/button-base"
  }, {
    "pathname": "/api-docs/button-group"
  }, {
    "pathname": "/api-docs/card"
  }, {
    "pathname": "/api-docs/card-action-area"
  }, {
    "pathname": "/api-docs/card-actions"
  }, {
    "pathname": "/api-docs/card-content"
  }, {
    "pathname": "/api-docs/card-header"
  }, {
    "pathname": "/api-docs/card-media"
  }, {
    "pathname": "/api-docs/checkbox"
  }, {
    "pathname": "/api-docs/chip"
  }, {
    "pathname": "/api-docs/circular-progress"
  }, {
    "pathname": "/api-docs/click-away-listener"
  }, {
    "pathname": "/api-docs/collapse"
  }, {
    "pathname": "/api-docs/container"
  }, {
    "pathname": "/api-docs/css-baseline"
  }, {
    "pathname": "/api-docs/dialog"
  }, {
    "pathname": "/api-docs/dialog-actions"
  }, {
    "pathname": "/api-docs/dialog-content"
  }, {
    "pathname": "/api-docs/dialog-content-text"
  }, {
    "pathname": "/api-docs/dialog-title"
  }, {
    "pathname": "/api-docs/divider"
  }, {
    "pathname": "/api-docs/drawer"
  }, {
    "pathname": "/api-docs/expansion-panel"
  }, {
    "pathname": "/api-docs/expansion-panel-actions"
  }, {
    "pathname": "/api-docs/expansion-panel-details"
  }, {
    "pathname": "/api-docs/expansion-panel-summary"
  }, {
    "pathname": "/api-docs/fab"
  }, {
    "pathname": "/api-docs/fade"
  }, {
    "pathname": "/api-docs/filled-input"
  }, {
    "pathname": "/api-docs/form-control"
  }, {
    "pathname": "/api-docs/form-control-label"
  }, {
    "pathname": "/api-docs/form-group"
  }, {
    "pathname": "/api-docs/form-helper-text"
  }, {
    "pathname": "/api-docs/form-label"
  }, {
    "pathname": "/api-docs/grid"
  }, {
    "pathname": "/api-docs/grid-list"
  }, {
    "pathname": "/api-docs/grid-list-tile"
  }, {
    "pathname": "/api-docs/grid-list-tile-bar"
  }, {
    "pathname": "/api-docs/grow"
  }, {
    "pathname": "/api-docs/hidden"
  }, {
    "pathname": "/api-docs/icon"
  }, {
    "pathname": "/api-docs/icon-button"
  }, {
    "pathname": "/api-docs/input"
  }, {
    "pathname": "/api-docs/input-adornment"
  }, {
    "pathname": "/api-docs/input-base"
  }, {
    "pathname": "/api-docs/input-label"
  }, {
    "pathname": "/api-docs/linear-progress"
  }, {
    "pathname": "/api-docs/link"
  }, {
    "pathname": "/api-docs/list"
  }, {
    "pathname": "/api-docs/list-item"
  }, {
    "pathname": "/api-docs/list-item-avatar"
  }, {
    "pathname": "/api-docs/list-item-icon"
  }, {
    "pathname": "/api-docs/list-item-secondary-action"
  }, {
    "pathname": "/api-docs/list-item-text"
  }, {
    "pathname": "/api-docs/list-subheader"
  }, {
    "pathname": "/api-docs/loading-button"
  }, {
    "pathname": "/api-docs/menu"
  }, {
    "pathname": "/api-docs/menu-item"
  }, {
    "pathname": "/api-docs/menu-list"
  }, {
    "pathname": "/api-docs/mobile-stepper"
  }, {
    "pathname": "/api-docs/modal"
  }, {
    "pathname": "/api-docs/native-select"
  }, {
    "pathname": "/api-docs/no-ssr"
  }, {
    "pathname": "/api-docs/outlined-input"
  }, {
    "pathname": "/api-docs/pagination"
  }, {
    "pathname": "/api-docs/pagination-item"
  }, {
    "pathname": "/api-docs/paper"
  }, {
    "pathname": "/api-docs/popover"
  }, {
    "pathname": "/api-docs/popper"
  }, {
    "pathname": "/api-docs/portal"
  }, {
    "pathname": "/api-docs/radio"
  }, {
    "pathname": "/api-docs/radio-group"
  }, {
    "pathname": "/api-docs/rating"
  }, {
    "pathname": "/api-docs/root-ref"
  }, {
    "pathname": "/api-docs/scoped-css-baseline"
  }, {
    "pathname": "/api-docs/select"
  }, {
    "pathname": "/api-docs/skeleton"
  }, {
    "pathname": "/api-docs/slide"
  }, {
    "pathname": "/api-docs/slider"
  }, {
    "pathname": "/api-docs/snackbar"
  }, {
    "pathname": "/api-docs/snackbar-content"
  }, {
    "pathname": "/api-docs/speed-dial"
  }, {
    "pathname": "/api-docs/speed-dial-action"
  }, {
    "pathname": "/api-docs/speed-dial-icon"
  }, {
    "pathname": "/api-docs/step"
  }, {
    "pathname": "/api-docs/step-button"
  }, {
    "pathname": "/api-docs/step-connector"
  }, {
    "pathname": "/api-docs/step-content"
  }, {
    "pathname": "/api-docs/step-icon"
  }, {
    "pathname": "/api-docs/step-label"
  }, {
    "pathname": "/api-docs/stepper"
  }, {
    "pathname": "/api-docs/svg-icon"
  }, {
    "pathname": "/api-docs/swipeable-drawer"
  }, {
    "pathname": "/api-docs/switch"
  }, {
    "pathname": "/api-docs/tab"
  }, {
    "pathname": "/api-docs/tab-context"
  }, {
    "pathname": "/api-docs/table"
  }, {
    "pathname": "/api-docs/table-body"
  }, {
    "pathname": "/api-docs/table-cell"
  }, {
    "pathname": "/api-docs/table-container"
  }, {
    "pathname": "/api-docs/table-footer"
  }, {
    "pathname": "/api-docs/table-head"
  }, {
    "pathname": "/api-docs/table-pagination"
  }, {
    "pathname": "/api-docs/table-row"
  }, {
    "pathname": "/api-docs/table-sort-label"
  }, {
    "pathname": "/api-docs/tab-list"
  }, {
    "pathname": "/api-docs/tab-panel"
  }, {
    "pathname": "/api-docs/tabs"
  }, {
    "pathname": "/api-docs/tab-scroll-button"
  }, {
    "pathname": "/api-docs/textarea-autosize"
  }, {
    "pathname": "/api-docs/text-field"
  }, {
    "pathname": "/api-docs/timeline"
  }, {
    "pathname": "/api-docs/timeline-connector"
  }, {
    "pathname": "/api-docs/timeline-content"
  }, {
    "pathname": "/api-docs/timeline-dot"
  }, {
    "pathname": "/api-docs/timeline-item"
  }, {
    "pathname": "/api-docs/timeline-opposite-content"
  }, {
    "pathname": "/api-docs/timeline-separator"
  }, {
    "pathname": "/api-docs/toggle-button"
  }, {
    "pathname": "/api-docs/toggle-button-group"
  }, {
    "pathname": "/api-docs/toolbar"
  }, {
    "pathname": "/api-docs/tooltip"
  }, {
    "pathname": "/api-docs/tree-item"
  }, {
    "pathname": "/api-docs/tree-view"
  }, {
    "pathname": "/api-docs/typography"
  }, {
    "pathname": "/api-docs/unstable-trap-focus"
  }, {
    "pathname": "/api-docs/zoom"
  }]
}, {
  "pathname": "/components",
  "children": [{
    "pathname": "/components/about-the-lab"
  }, {
    "pathname": "/components/alert"
  }, {
    "pathname": "/components/app-bar"
  }, {
    "pathname": "/components/autocomplete"
  }, {
    "pathname": "/components/avatars"
  }, {
    "pathname": "/components/backdrop"
  }, {
    "pathname": "/components/badges"
  }, {
    "pathname": "/components/bottom-navigation"
  }, {
    "pathname": "/components/box"
  }, {
    "pathname": "/components/breadcrumbs"
  }, {
    "pathname": "/components/button-group"
  }, {
    "pathname": "/components/buttons"
  }, {
    "pathname": "/components/cards"
  }, {
    "pathname": "/components/checkboxes"
  }, {
    "pathname": "/components/chips"
  }, {
    "pathname": "/components/click-away-listener"
  }, {
    "pathname": "/components/container"
  }, {
    "pathname": "/components/css-baseline"
  }, {
    "pathname": "/components/dialogs"
  }, {
    "pathname": "/components/dividers"
  }, {
    "pathname": "/components/drawers"
  }, {
    "pathname": "/components/expansion-panels"
  }, {
    "pathname": "/components/floating-action-button"
  }, {
    "pathname": "/components/grid"
  }, {
    "pathname": "/components/grid-list"
  }, {
    "pathname": "/components/hidden"
  }, {
    "pathname": "/components/icons"
  }, {
    "pathname": "/components/links"
  }, {
    "pathname": "/components/lists"
  }, {
    "pathname": "/components/material-icons"
  }, {
    "pathname": "/components/menus"
  }, {
    "pathname": "/components/modal"
  }, {
    "pathname": "/components/no-ssr"
  }, {
    "pathname": "/components/pagination"
  }, {
    "pathname": "/components/paper"
  }, {
    "pathname": "/components/pickers"
  }, {
    "pathname": "/components/popover"
  }, {
    "pathname": "/components/popper"
  }, {
    "pathname": "/components/portal"
  }, {
    "pathname": "/components/progress"
  }, {
    "pathname": "/components/radio-buttons"
  }, {
    "pathname": "/components/rating"
  }, {
    "pathname": "/components/selects"
  }, {
    "pathname": "/components/skeleton"
  }, {
    "pathname": "/components/slider"
  }, {
    "pathname": "/components/snackbars"
  }, {
    "pathname": "/components/speed-dial"
  }, {
    "pathname": "/components/steppers"
  }, {
    "pathname": "/components/switches"
  }, {
    "pathname": "/components/tables"
  }, {
    "pathname": "/components/tabs"
  }, {
    "pathname": "/components/textarea-autosize"
  }, {
    "pathname": "/components/text-fields"
  }, {
    "pathname": "/components/timeline"
  }, {
    "pathname": "/components/toggle-button"
  }, {
    "pathname": "/components/tooltips"
  }, {
    "pathname": "/components/transfer-list"
  }, {
    "pathname": "/components/transitions"
  }, {
    "pathname": "/components/tree-view"
  }, {
    "pathname": "/components/typography"
  }, {
    "pathname": "/components/use-media-query"
  }]
}];
const pages = [{
  pathname: '/getting-started',
  children: [{
    pathname: '/getting-started/installation'
  }, {
    pathname: '/getting-started/usage'
  }, {
    pathname: '/getting-started/example-projects'
  }, {
    pathname: '/getting-started/templates'
  }, {
    pathname: '/getting-started/learn'
  }, {
    pathname: '/getting-started/faq',
    title: 'FAQs'
  }, {
    pathname: '/getting-started/supported-components'
  }, {
    pathname: '/getting-started/supported-platforms'
  }, {
    pathname: '/getting-started/support'
  }]
}, {
  pathname: '/components',
  children: [{
    pathname: '/components',
    subheader: '/components/layout',
    children: [{
      pathname: '/components/box'
    }, {
      pathname: '/components/container'
    }, {
      pathname: '/components/grid'
    }, {
      pathname: '/components/grid-list'
    }, {
      pathname: '/components/hidden'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/inputs',
    children: [{
      pathname: '/components/buttons'
    }, {
      pathname: '/components/button-group'
    }, {
      pathname: '/components/checkboxes'
    }, {
      pathname: '/components/floating-action-button'
    }, {
      pathname: '/components/pickers',
      title: 'Date / Time'
    }, {
      pathname: '/components/radio-buttons'
    }, {
      pathname: '/components/selects'
    }, {
      pathname: '/components/slider'
    }, {
      pathname: '/components/switches'
    }, {
      pathname: '/components/text-fields'
    }, {
      pathname: '/components/transfer-list'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/navigation',
    children: [{
      pathname: '/components/bottom-navigation'
    }, {
      pathname: '/components/breadcrumbs'
    }, {
      pathname: '/components/drawers'
    }, {
      pathname: '/components/links'
    }, {
      pathname: '/components/menus'
    }, {
      pathname: '/components/steppers'
    }, {
      pathname: '/components/tabs'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/surfaces',
    children: [{
      pathname: '/components/app-bar'
    }, {
      pathname: '/components/paper'
    }, {
      pathname: '/components/cards'
    }, {
      pathname: '/components/expansion-panels'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/feedback',
    children: [{
      pathname: '/components/progress'
    }, {
      pathname: '/components/dialogs'
    }, {
      pathname: '/components/snackbars'
    }, {
      pathname: '/components/backdrop'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/data-display',
    children: [{
      pathname: '/components/avatars'
    }, {
      pathname: '/components/badges'
    }, {
      pathname: '/components/chips'
    }, {
      pathname: '/components/dividers'
    }, {
      pathname: '/components/icons'
    }, {
      pathname: '/components/material-icons'
    }, {
      pathname: '/components/lists'
    }, {
      pathname: '/components/tables'
    }, {
      pathname: '/components/tooltips'
    }, {
      pathname: '/components/typography'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/utils',
    children: [{
      pathname: '/components/click-away-listener'
    }, {
      pathname: '/components/css-baseline',
      title: 'CSS Baseline'
    }, {
      pathname: '/components/modal'
    }, {
      pathname: '/components/no-ssr',
      title: 'No SSR'
    }, {
      pathname: '/components/popover'
    }, {
      pathname: '/components/popper'
    }, {
      pathname: '/components/portal'
    }, {
      pathname: '/components/textarea-autosize'
    }, {
      pathname: '/components/transitions'
    }, {
      pathname: '/components/use-media-query',
      title: 'useMediaQuery'
    }]
  }, {
    pathname: '/components',
    subheader: '/components/lab',
    children: [{
      pathname: '/components/about-the-lab'
    }, {
      pathname: '/components/alert'
    }, {
      pathname: '/components/autocomplete'
    }, {
      pathname: '/components/pagination'
    }, {
      pathname: '/components/rating'
    }, {
      pathname: '/components/skeleton'
    }, {
      pathname: '/components/speed-dial'
    }, {
      pathname: '/components/timeline'
    }, {
      pathname: '/components/toggle-button'
    }, {
      pathname: '/components/tree-view'
    }]
  }]
}, _objectSpread({
  title: 'Component API'
}, findPages[0]), {
  pathname: '/styles',
  children: [{
    pathname: '/styles/basics'
  }, {
    pathname: '/styles/advanced'
  }, {
    pathname: '/styles/api',
    title: 'API'
  }]
}, {
  pathname: '/system',
  children: [{
    pathname: '/system/basics'
  }, {
    pathname: '/system/borders'
  }, {
    pathname: '/system/display'
  }, {
    pathname: '/system/flexbox'
  }, {
    pathname: '/system/palette'
  }, {
    pathname: '/system/positions'
  }, {
    pathname: '/system/shadows'
  }, {
    pathname: '/system/sizing'
  }, {
    pathname: '/system/spacing'
  }, {
    pathname: '/system/screen-readers'
  }, {
    pathname: '/system/typography'
  }, {
    pathname: '/system/api',
    title: 'API'
  }]
}, {
  pathname: '/customization',
  children: [{
    pathname: '/customization',
    subheader: '/customization/theme',
    children: [{
      pathname: '/customization/theming'
    }, {
      pathname: '/customization/palette'
    }, {
      pathname: '/customization/typography'
    }, {
      pathname: '/customization/spacing'
    }, {
      pathname: '/customization/breakpoints'
    }, {
      pathname: '/customization/density'
    }, {
      pathname: '/customization/z-index',
      title: 'z-index'
    }, {
      pathname: '/customization/globals'
    }, {
      pathname: '/customization/transitions'
    }]
  }, {
    pathname: '/customization/components'
  }, {
    pathname: '/customization/color'
  }, {
    pathname: '/customization/default-theme',
    title: 'Default Theme'
  }]
}, {
  pathname: '/guides',
  children: [{
    pathname: '/guides/api',
    title: 'API Design Approach'
  }, {
    pathname: '/guides/typescript',
    title: 'TypeScript'
  }, {
    pathname: '/guides/interoperability',
    title: 'Style Library Interoperability'
  }, {
    pathname: '/guides/minimizing-bundle-size'
  }, {
    pathname: '/guides/composition'
  }, {
    pathname: '/guides/server-rendering'
  }, {
    pathname: '/guides/responsive-ui',
    title: 'Responsive UI'
  }, {
    pathname: '/guides/migration-v4',
    title: 'Migration From v4'
  }, {
    pathname: '/guides/migration-v3',
    title: 'Migration From v3'
  }, {
    pathname: '/guides/migration-v0x',
    title: 'Migration From v0.x'
  }, {
    pathname: '/guides/testing'
  }, {
    pathname: '/guides/localization'
  }, {
    pathname: '/guides/right-to-left',
    title: 'Right-to-left'
  }, {
    pathname: '/guides/flow'
  }]
}, {
  pathname: 'https://material-ui.com/store/',
  title: 'Premium themes',
  linkProps: {
    'data-ga-event-category': 'store',
    'data-ga-event-action': 'click',
    'data-ga-event-label': 'sidenav'
  }
}, {
  pathname: '/discover-more',
  children: [{
    pathname: '/discover-more/showcase'
  }, {
    pathname: '/discover-more/related-projects'
  }, {
    pathname: '/discover-more/roadmap'
  }, {
    pathname: '/discover-more/backers',
    title: 'Sponsors & Backers'
  }, {
    pathname: '/discover-more/vision'
  }, {
    pathname: '/discover-more/team'
  }, {
    pathname: '/discover-more/changelog'
  }, {
    pathname: '/discover-more/languages'
  }]
}, {
  pathname: '/versions',
  disableNav: true
}, {
  pathname: '/',
  displayNav: false,
  disableDrawer: true
}, {
  pathname: 'https://medium.com/material-ui',
  title: 'Blog'
}];
/* harmony default export */ __webpack_exports__["default"] = (pages);

/***/ }),

/***/ "./translations sync translations.*\\.json$":
/*!**************************************************************!*\
  !*** ./translations sync nonrecursive translations.*\.json$ ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./translations-aa.json": "./translations/translations-aa.json",
	"./translations-de.json": "./translations/translations-de.json",
	"./translations-es.json": "./translations/translations-es.json",
	"./translations-fr.json": "./translations/translations-fr.json",
	"./translations-ja.json": "./translations/translations-ja.json",
	"./translations-pt.json": "./translations/translations-pt.json",
	"./translations-ru.json": "./translations/translations-ru.json",
	"./translations-zh.json": "./translations/translations-zh.json",
	"./translations.json": "./translations/translations.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./translations sync translations.*\\.json$";

/***/ }),

/***/ "./translations/translations-aa.json":
/*!*******************************************!*\
  !*** ./translations/translations-aa.json ***!
  \*******************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"crwdns99882:0crwdne99882:0\",\"albumDescr\":\"crwdns99926:0crwdne99926:0\",\"albumTitle\":\"crwdns99924:0crwdne99924:0\",\"algoliaSearch\":\"crwdns131140:0crwdne131140:0\",\"blogDescr\":\"crwdns99918:0crwdne99918:0\",\"blogTitle\":\"crwdns99916:0crwdne99916:0\",\"cdn\":\"crwdns99840:0crwdne99840:0\",\"changeLanguage\":\"crwdns99968:0crwdne99968:0\",\"checkoutDescr\":\"crwdns99922:0crwdne99922:0\",\"checkoutTitle\":\"crwdns99920:0crwdne99920:0\",\"close\":\"crwdns99976:0crwdne99976:0\",\"codesandbox\":\"crwdns99944:0crwdne99944:0\",\"copiedSource\":\"crwdns107929:0crwdne107929:0\",\"copiedSourceLink\":\"crwdns107931:0crwdne107931:0\",\"copySource\":\"crwdns99948:0crwdne99948:0\",\"copySourceLinkJS\":\"crwdns99950:0crwdne99950:0\",\"copySourceLinkTS\":\"crwdns99952:0crwdne99952:0\",\"dashboardDescr\":\"crwdns99902:0crwdne99902:0\",\"dashboardTitle\":\"crwdns99900:0crwdne99900:0\",\"decreaseSpacing\":\"crwdns99986:0crwdne99986:0\",\"demoToolbarLabel\":\"crwdns131032:0crwdne131032:0\",\"diamondSponsors\":\"crwdns105090:0crwdne105090:0\",\"editPage\":\"crwdns99886:0crwdne99886:0\",\"editWebsiteColors\":\"crwdns99824:0crwdne99824:0\",\"emojiLove\":\"crwdns99958:0crwdne99958:0\",\"emoojiWarning\":\"crwdns99960:0crwdne99960:0\",\"expandAll\":\"crwdns99936:0crwdne99936:0\",\"footerCommunity\":\"crwdns102246:0crwdne102246:0\",\"footerCompany\":\"crwdns107571:0crwdne107571:0\",\"footerResources\":\"crwdns102248:0crwdne102248:0\",\"getProfessionalSupport\":\"crwdns103878:0crwdne103878:0\",\"getStarted\":\"crwdns99834:0crwdne99834:0\",\"github\":\"crwdns99830:0crwdne99830:0\",\"headTitle\":\"crwdns99956:0crwdne99956:0\",\"helpToTranslate\":\"crwdns100754:0crwdne100754:0\",\"hideFullSource\":\"crwdns103876:0crwdne103876:0\",\"hideSource\":\"crwdns99940:0crwdne99940:0\",\"homeFooterRelease\":\"crwdns99876:0{{versionNumber}}crwdnd99876:0{{license}}crwdne99876:0\",\"homeQuickWord\":\"crwdns99822:0crwdne99822:0\",\"increaseSpacing\":\"crwdns99984:0crwdne99984:0\",\"installation\":\"crwdns99836:0crwdne99836:0\",\"installButton\":\"crwdns99844:0crwdne99844:0\",\"installDescr\":\"crwdns99838:0crwdne99838:0\",\"joinThese\":\"crwdns99860:0crwdne99860:0\",\"letUsKnow\":\"crwdns99864:0crwdne99864:0\",\"license\":\"crwdns99878:0crwdne99878:0\",\"likeMui\":\"crwdns99880:0crwdne99880:0\",\"loadFont\":\"crwdns99842:0crwdne99842:0\",\"mainNavigation\":\"crwdns99962:0crwdne99962:0\",\"newest\":\"crwdns99894:0crwdne99894:0\",\"openDrawer\":\"crwdns99966:0crwdne99966:0\",\"pageTOC\":\"crwdns99970:0crwdne99970:0\",\"praise\":\"crwdns108807:0crwdne108807:0\",\"praiseDescr\":\"crwdns108809:0crwdne108809:0\",\"pricingDescr\":\"crwdns99930:0crwdne99930:0\",\"pricingTitle\":\"crwdns99928:0crwdne99928:0\",\"resetDemo\":\"crwdns131034:0crwdne131034:0\",\"resetDensity\":\"crwdns99982:0crwdne99982:0\",\"seeMore\":\"crwdns99946:0crwdne99946:0\",\"showFullSource\":\"crwdns103874:0crwdne103874:0\",\"showJSSource\":\"crwdns99972:0crwdne99972:0\",\"showSource\":\"crwdns99938:0crwdne99938:0\",\"showTSSource\":\"crwdns99974:0crwdne99974:0\",\"signInDescr\":\"crwdns99906:0crwdne99906:0\",\"signInSideDescr\":\"crwdns99910:0crwdne99910:0\",\"signInSideTitle\":\"crwdns99908:0crwdne99908:0\",\"signInTitle\":\"crwdns99904:0crwdne99904:0\",\"signUpDescr\":\"crwdns99914:0crwdne99914:0\",\"signUpTitle\":\"crwdns99912:0crwdne99912:0\",\"skipToContent\":\"crwdns99964:0crwdne99964:0\",\"sourceCode\":\"crwdns99890:0crwdne99890:0\",\"spacingUnit\":\"crwdns99980:0crwdne99980:0\",\"stackblitz\":\"crwdns99954:0crwdne99954:0\",\"stars\":\"crwdns99896:0crwdne99896:0\",\"stickyFooterDescr\":\"crwdns99934:0crwdne99934:0\",\"stickyFooterTitle\":\"crwdns99932:0crwdne99932:0\",\"strapline\":\"crwdns99832:0crwdne99832:0\",\"tableOfContents\":\"crwdns99888:0crwdne99888:0\",\"thanks\":\"crwdns99884:0crwdne99884:0\",\"themes\":\"crwdns99852:0crwdne99852:0\",\"themesButton\":\"crwdns99856:0crwdne99856:0\",\"themesDescr\":\"crwdns130356:0crwdne130356:0\",\"toggleNotifications\":\"crwdns109565:0crwdne109565:0\",\"toggleRTL\":\"crwdns103672:0crwdne103672:0\",\"toggleTheme\":\"crwdns103670:0crwdne103670:0\",\"traffic\":\"crwdns99892:0crwdne99892:0\",\"usage\":\"crwdns99846:0crwdne99846:0\",\"usageButton\":\"crwdns99850:0crwdne99850:0\",\"usageDescr\":\"crwdns99848:0crwdne99848:0\",\"useDarkTheme\":\"crwdns107927:0crwdne107927:0\",\"useHighDensity\":\"crwdns99978:0crwdne99978:0\",\"usingMui\":\"crwdns99862:0crwdne99862:0\",\"viewGitHub\":\"crwdns99942:0crwdne99942:0\",\"visit\":\"crwdns99898:0crwdne99898:0\",\"whosUsing\":\"crwdns99858:0crwdne99858:0\",\"initialFocusLabel\":\"crwdns131754:0crwdne131754:0\",\"resetFocus\":\"crwdns131756:0crwdne131756:0\",\"pages\":{\"/getting-started\":\"crwdns99988:0crwdne99988:0\",\"/getting-started/installation\":\"crwdns99990:0crwdne99990:0\",\"/getting-started/usage\":\"crwdns99992:0crwdne99992:0\",\"/getting-started/example-projects\":\"crwdns99994:0crwdne99994:0\",\"/getting-started/templates\":\"crwdns99996:0crwdne99996:0\",\"/getting-started/learn\":\"crwdns99998:0crwdne99998:0\",\"/getting-started/faq\":\"crwdns100000:0crwdne100000:0\",\"/getting-started/supported-components\":\"crwdns100002:0crwdne100002:0\",\"/getting-started/supported-platforms\":\"crwdns100004:0crwdne100004:0\",\"/getting-started/support\":\"crwdns102250:0crwdne102250:0\",\"/components\":\"crwdns100006:0crwdne100006:0\",\"/components/about-the-lab\":\"crwdns100008:0crwdne100008:0\",\"/components/click-away-listener\":\"crwdns100010:0crwdne100010:0\",\"/component/about\":\"crwdns100012:0crwdne100012:0\",\"/components/app-bar\":\"crwdns100014:0crwdne100014:0\",\"/components/autocomplete\":\"crwdns100016:0crwdne100016:0\",\"/components/avatars\":\"crwdns106385:0crwdne106385:0\",\"/components/badges\":\"crwdns106387:0crwdne106387:0\",\"/components/basic-inputs\":\"crwdns100022:0crwdne100022:0\",\"/components/bottom-navigation\":\"crwdns100024:0crwdne100024:0\",\"/components/box\":\"crwdns100026:0crwdne100026:0\",\"/components/breadcrumbs\":\"crwdns100028:0crwdne100028:0\",\"/components/buttons\":\"crwdns106389:0crwdne106389:0\",\"/components/cards\":\"crwdns106391:0crwdne106391:0\",\"/components/checkboxes\":\"crwdns106393:0crwdne106393:0\",\"/components/chips\":\"crwdns106395:0crwdne106395:0\",\"/components/container\":\"crwdns100038:0crwdne100038:0\",\"/components/content\":\"crwdns100040:0crwdne100040:0\",\"/components/css-baseline\":\"crwdns100042:0crwdne100042:0\",\"/components/data-display\":\"crwdns100044:0crwdne100044:0\",\"/components/dialogs\":\"crwdns106397:0crwdne106397:0\",\"/components/dividers\":\"crwdns106399:0crwdne106399:0\",\"/components/drawers\":\"crwdns106401:0crwdne106401:0\",\"/components/expansion-panels\":\"crwdns106403:0crwdne106403:0\",\"/components/feedback\":\"crwdns100054:0crwdne100054:0\",\"/components/grid\":\"crwdns100056:0crwdne100056:0\",\"/components/hidden\":\"crwdns100058:0crwdne100058:0\",\"/components/grid-list\":\"crwdns100060:0crwdne100060:0\",\"/components/icons\":\"crwdns100062:0crwdne100062:0\",\"/components/inputs\":\"crwdns100064:0crwdne100064:0\",\"/components/lab\":\"crwdns100066:0crwdne100066:0\",\"/components/layout\":\"crwdns100068:0crwdne100068:0\",\"/components/links\":\"crwdns106405:0crwdne106405:0\",\"/components/lists\":\"crwdns106407:0crwdne106407:0\",\"/components/menus\":\"crwdns106409:0crwdne106409:0\",\"/components/modal\":\"crwdns100076:0crwdne100076:0\",\"/components/navigation\":\"crwdns100078:0crwdne100078:0\",\"/components/no-ssr\":\"crwdns100080:0crwdne100080:0\",\"/components/other\":\"crwdns100082:0crwdne100082:0\",\"/components/paper\":\"crwdns100084:0crwdne100084:0\",\"/components/pickers\":\"crwdns100756:0crwdne100756:0\",\"/components/popover\":\"crwdns100088:0crwdne100088:0\",\"/components/popper\":\"crwdns100090:0crwdne100090:0\",\"/components/portal\":\"crwdns100092:0crwdne100092:0\",\"/components/progress\":\"crwdns100094:0crwdne100094:0\",\"/components/progress-validation\":\"crwdns100096:0crwdne100096:0\",\"/components/radio-buttons\":\"crwdns106411:0crwdne106411:0\",\"/components/selects\":\"crwdns106413:0crwdne106413:0\",\"/components/slider\":\"crwdns100104:0crwdne100104:0\",\"/components/snackbars\":\"crwdns106415:0crwdne106415:0\",\"/components/speed-dial\":\"crwdns100108:0crwdne100108:0\",\"/components/steppers\":\"crwdns106417:0crwdne106417:0\",\"/components/surfaces\":\"crwdns100112:0crwdne100112:0\",\"/components/switches\":\"crwdns106419:0crwdne106419:0\",\"/components/tables\":\"crwdns106421:0crwdne106421:0\",\"/components/tabs\":\"crwdns100118:0crwdne100118:0\",\"/components/text-fields\":\"crwdns106423:0crwdne106423:0\",\"/components/toggle-button\":\"crwdns100122:0crwdne100122:0\",\"/components/tooltips\":\"crwdns106425:0crwdne106425:0\",\"/components/transfer-list\":\"crwdns100126:0crwdne100126:0\",\"/components/transitions\":\"crwdns100128:0crwdne100128:0\",\"/components/typography\":\"crwdns100130:0crwdne100130:0\",\"/components/use-media-query\":\"crwdns100132:0crwdne100132:0\",\"/components/utils\":\"crwdns100134:0crwdne100134:0\",\"/css-in-js\":\"crwdns100136:0crwdne100136:0\",\"/css-in-js/basics\":\"crwdns100138:0crwdne100138:0\",\"/css-in-js/advanced\":\"crwdns100140:0crwdne100140:0\",\"/system\":\"crwdns100142:0crwdne100142:0\",\"/system/basics\":\"crwdns100144:0crwdne100144:0\",\"/system/borders\":\"crwdns100146:0crwdne100146:0\",\"/system/display\":\"crwdns100148:0crwdne100148:0\",\"/system/flexbox\":\"crwdns100150:0crwdne100150:0\",\"/system/palette\":\"crwdns100152:0crwdne100152:0\",\"/system/positions\":\"crwdns100154:0crwdne100154:0\",\"/system/shadows\":\"crwdns100156:0crwdne100156:0\",\"/system/sizing\":\"crwdns100158:0crwdne100158:0\",\"/system/spacing\":\"crwdns100160:0crwdne100160:0\",\"/system/typography\":\"crwdns100162:0crwdne100162:0\",\"/customization\":\"crwdns100164:0crwdne100164:0\",\"/customization/theming\":\"crwdns100758:0crwdne100758:0\",\"/customization/theme\":\"crwdns106427:0crwdne106427:0\",\"/customization/breakpoints\":\"crwdns100168:0crwdne100168:0\",\"/customization/color\":\"crwdns100170:0crwdne100170:0\",\"/customization/palette\":\"crwdns100174:0crwdne100174:0\",\"/customization/type\":\"crwdns100176:0crwdne100176:0\",\"/customization/typography\":\"crwdns100178:0crwdne100178:0\",\"/customization/spacing\":\"crwdns100180:0crwdne100180:0\",\"/customization/z-index\":\"crwdns100182:0crwdne100182:0\",\"/customization/globals\":\"crwdns100184:0crwdne100184:0\",\"/customization/components\":\"crwdns100186:0crwdne100186:0\",\"/customization/default-theme\":\"crwdns100188:0crwdne100188:0\",\"/guides\":\"crwdns100190:0crwdne100190:0\",\"/guides/api\":\"crwdns100192:0crwdne100192:0\",\"/guides/typescript\":\"crwdns100194:0crwdne100194:0\",\"/guides/interoperability\":\"crwdns100196:0crwdne100196:0\",\"/guides/minimizing-bundle-size\":\"crwdns100198:0crwdne100198:0\",\"/guides/composition\":\"crwdns100200:0crwdne100200:0\",\"/guides/responsive-ui\":\"crwdns100202:0crwdne100202:0\",\"/guides/server-rendering\":\"crwdns100204:0crwdne100204:0\",\"/guides/migration-v3\":\"crwdns100206:0crwdne100206:0\",\"/guides/migration-v0x\":\"crwdns100208:0crwdne100208:0\",\"/guides/testing\":\"crwdns100210:0crwdne100210:0\",\"/guides/flow\":\"crwdns100212:0crwdne100212:0\",\"/guides/right-to-left\":\"crwdns100214:0crwdne100214:0\",\"/guides/localization\":\"crwdns105309:0crwdne105309:0\",\"/discover-more\":\"crwdns100216:0crwdne100216:0\",\"/discover-more/showcase\":\"crwdns100218:0crwdne100218:0\",\"/discover-more/related-projects\":\"crwdns100220:0crwdne100220:0\",\"/discover-more/roadmap\":\"crwdns100222:0crwdne100222:0\",\"/discover-more/backers\":\"crwdns100224:0crwdne100224:0\",\"/discover-more/vision\":\"crwdns100226:0crwdne100226:0\",\"/discover-more/team\":\"crwdns100228:0crwdne100228:0\",\"/discover-more/community\":\"crwdns100230:0crwdne100230:0\",\"/discover-more/changelog\":\"crwdns100232:0crwdne100232:0\",\"/discover-more/languages\":\"crwdns100236:0crwdne100236:0\",\"/versions\":\"crwdns100238:0crwdne100238:0\",\"/styles\":\"crwdns100240:0crwdne100240:0\",\"/styles/basics\":\"crwdns100242:0crwdne100242:0\",\"/styles/advanced\":\"crwdns100244:0crwdne100244:0\",\"https://material-ui.com/store/\":\"crwdns132758:0crwdne132758:0\",\"/components/material-icons\":\"crwdns100760:0crwdne100760:0\",\"/components/textarea-autosize\":\"crwdns100762:0crwdne100762:0\",\"/components/rating\":\"crwdns100764:0crwdne100764:0\",\"/components/skeleton\":\"crwdns100766:0crwdne100766:0\",\"/components/tree-view\":\"crwdns100768:0crwdne100768:0\",\"/customization/density\":\"crwdns100770:0crwdne100770:0\",\"/components/button-group\":\"crwdns110054:0crwdne110054:0\",\"/components/floating-action-button\":\"crwdns110056:0crwdne110056:0\",\"/components/backdrop\":\"crwdns110058:0crwdne110058:0\",\"/components/alert\":\"crwdns110060:0crwdne110060:0\",\"/components/pagination\":\"crwdns110062:0crwdne110062:0\"}}");

/***/ }),

/***/ "./translations/translations-de.json":
/*!*******************************************!*\
  !*** ./translations/translations-de.json ***!
  \*******************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"Wenn ihnen technologie-bezogene Werbung nichts ausmacht und Sie Open Source unterstützen möchten, dann können Sie gern ihren Ad-Blocker für Material-UI deaktivieren.\",\"albumDescr\":\"Ein responsives Album- / Galerie-Seitenlayout mit einer \\\"hero unit\\\" und einer Fußzeile.\",\"albumTitle\":\"Album\",\"algoliaSearch\":\"Search\",\"blogDescr\":\"Ein ausgeklügeltes Blog-Seitenlayout. Markdown-Unterstützung wird von markdown-to-jsx zur Verfügung gestellt, kann jedoch leicht ersetzt werden.\",\"blogTitle\":\"Blog\",\"cdn\":\"oder benutzen Sie ein CDN.\",\"changeLanguage\":\"Sprache ändern\",\"checkoutDescr\":\"Ein schrittweises Checkout-Seitenlayout. Die Anzahl der Schritte ist anpassbar oder gar komplett optional.\",\"checkoutTitle\":\"Check Out\",\"close\":\"Schließen\",\"codesandbox\":\"In CodeSandbox bearbeiten\",\"copiedSource\":\"Der Quellcode wurde kopiert.\",\"copiedSourceLink\":\"Der Link zum Quellcode wurde kopiert.\",\"copySource\":\"Quellcode kopieren\",\"copySourceLinkJS\":\"Kopiere Link zum JavaScript Quellcode\",\"copySourceLinkTS\":\"Kopiere Link zum TypeScript Quellcode\",\"dashboardDescr\":\"Ein minimales Dashboard mit Taskleiste und einem Drawer in mini Variante. Das Diagramm wurde von Recharts zur Verfügung gestellt, aber es ist leicht ein anderes Paket dafür zu nutzen.\",\"dashboardTitle\":\"Dashboard\",\"decreaseSpacing\":\"Abstand verringern\",\"demoToolbarLabel\":\"demo source\",\"diamondSponsors\":\"Diamant-Sponsoren\",\"editPage\":\"Helfen Sie, diese Seite zu übersetzen\",\"editWebsiteColors\":\"Farbschema der Seite bearbeiten\",\"emojiLove\":\"Liebe\",\"emoojiWarning\":\"Warnung\",\"expandAll\":\"Alles aufklappen\",\"footerCommunity\":\"Gemeinschaft\",\"footerCompany\":\"Unternehmen\",\"footerResources\":\"Ressourcen\",\"getProfessionalSupport\":\"Professionellen Support erhalten\",\"getStarted\":\"Erste Schritte\",\"github\":\"GitHub-Repository\",\"headTitle\":\"Material-UI: Ein beliebtes React UI Framework\",\"helpToTranslate\":\"Hilf beim Übersetzen\",\"hideFullSource\":\"Kompletten Quellcode verstecken\",\"hideSource\":\"Quellcode verstecken\",\"homeFooterRelease\":\"Aktuell {{versionNumber}}. Veröffentlicht unter der {{license}}.\",\"homeQuickWord\":\"Ein schnelles Wort von unseren Sponsoren:\",\"increaseSpacing\":\"Abstand erhöhen\",\"installation\":\"Installation\",\"installButton\":\"Lesen Sie die Installationsschritte\",\"installDescr\":\"Installieren sie Material-UI via npm. Wir kümmern uns um das benötigte CSS.\",\"joinThese\":\"Treten Sie dieser oder anderer großartiger Organisationen bei!\",\"letUsKnow\":\"Lassen Sie es uns wissen!\",\"license\":\"MIT-Lizenz\",\"likeMui\":\"Gefällt ihnen Material-UI?\",\"loadFont\":\"Laden Sie die Standard Roboto Schriftart.\",\"mainNavigation\":\"Haupt-Navigation\",\"newest\":\"neueste\",\"openDrawer\":\"Haupt-Navigation öffnen\",\"pageTOC\":\"Inhaltsverzeichnis der Seite\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"pricingDescr\":\"Erstellen Sie mit diesem Seitenlayout schnell eine effektive Preistabelle für ihre potenziellen Kunden.\",\"pricingTitle\":\"Preise\",\"resetDemo\":\"Reset demo\",\"resetDensity\":\"Dichte zurücksetzen\",\"seeMore\":\"Mehr anzeigen\",\"showFullSource\":\"Kompletten Quellcode anzeigen\",\"showJSSource\":\"Quelltext in JavaScript anzeigen\",\"showSource\":\"Quellcode anzeigen\",\"showTSSource\":\"Quelltext in TypeScript anzeigen\",\"signInDescr\":\"Eine einfache Anmeldeseite.\",\"signInSideDescr\":\"Eine einfache Anmeldeseite.\",\"signInSideTitle\":\"Anmeldeseite\",\"signInTitle\":\"Anmelden\",\"signUpDescr\":\"Eine einfache Anmeldeseite.\",\"signUpTitle\":\"Registrieren\",\"skipToContent\":\"Zu Seitenhinhalt springen\",\"sourceCode\":\"Quelltext\",\"spacingUnit\":\"Abstandseinheit\",\"stackblitz\":\"In StackBlitz bearbeiten (nur JS)\",\"stars\":\"Github-Star\",\"stickyFooterDescr\":\"Hängen Sie eine Fußzeile am unteren Rand des Ansichtsfensters an, wenn der Seiteninhalt kurz ist.\",\"stickyFooterTitle\":\"Feste Fußzeile\",\"strapline\":\"React Komponenten für schnellere und einfachere Web-Entwicklung. Bauen Sie ihr eigenes Design-System oder starten Sie mit Material Design.\",\"tableOfContents\":\"Inhaltsverzeichnis\",\"thanks\":\"Vielen Dank!\",\"themes\":\"Premium Themen\",\"themesButton\":\"Themen durchsuchen\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"toggleNotifications\":\"Toggle notifications panel\",\"toggleRTL\":\"rechtsläufig/linksläufig umschalten\",\"toggleTheme\":\"helles/dunkles Thema umschalten\",\"traffic\":\"Datenverkehr\",\"usage\":\"Nutzung\",\"usageButton\":\"Erkunden Sie die Dokumentation\",\"usageDescr\":\"Material-UI Komponenten funktionieren ohne zusätzliche Einrichtung und verändern keine Variablen im globalen Sichtbarkeitsbereich.\",\"useDarkTheme\":\"Dunkles Design verwenden\",\"useHighDensity\":\"Höhere Dichte anwenden durch props\",\"usingMui\":\"Nutzen Sie Material-UI?\",\"viewGitHub\":\"Den Quellcode auf GitHub anzeigen\",\"visit\":\"Besuchen sie die Website\",\"whosUsing\":\"Wer nutzt Material-UI?\",\"initialFocusLabel\":\"A generic container that is programmatically focused to test keyboard navigation of our components.\",\"resetFocus\":\"Reset focus to test keyboard navigation\",\"pages\":{\"/getting-started\":\"Erste Schritte\",\"/getting-started/installation\":\"Installation\",\"/getting-started/usage\":\"Nutzung\",\"/getting-started/example-projects\":\"Beispielprojekte\",\"/getting-started/templates\":\"Vorlagen\",\"/getting-started/learn\":\"Lernen\",\"/getting-started/faq\":\"Häufige Fragen\",\"/getting-started/supported-components\":\"Unterstützte Komponenten\",\"/getting-started/supported-platforms\":\"Unterstützte Plattformen\",\"/getting-started/support\":\"Unterstützung\",\"/components\":\"Komponenten\",\"/components/about-the-lab\":\"Über das Labor\",\"/components/click-away-listener\":\"Außerhalb Klick Ereignisbehandlungsroutine\",\"/component/about\":\"Über das Labor\",\"/components/app-bar\":\"App Bar\",\"/components/autocomplete\":\"Autovervollständigung (Autocomplete)\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Grundlegende Eingaben\",\"/components/bottom-navigation\":\"Bottom Navigation (Untere Navigation)\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Brotkrumen\",\"/components/buttons\":\"Button (schaltfläche)\",\"/components/cards\":\"Card (karte)\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Inhalt\",\"/components/css-baseline\":\"CSS-Baseline\",\"/components/data-display\":\"Datenanzeige\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Seitliches Menü (Drawer)\",\"/components/expansion-panels\":\"Expansion Panel (erweiterungspanel)\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Rasterliste (Grid List)\",\"/components/icons\":\"Icons\",\"/components/inputs\":\"Eingaben\",\"/components/lab\":\"Labor\",\"/components/layout\":\"Layout\",\"/components/links\":\"Link\",\"/components/lists\":\"List (liste)\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navigation\",\"/components/no-ssr\":\"NoSSR\",\"/components/other\":\"Sonstiges\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Datum / Zeit\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Fortschritt (Progress)\",\"/components/progress-validation\":\"Feedback\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Selects (auswähler)\",\"/components/slider\":\"Regler\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Schnellwahl\",\"/components/steppers\":\"Stepper\",\"/components/surfaces\":\"Oberflächen\",\"/components/switches\":\"Switch\",\"/components/tables\":\"Tabelle\",\"/components/tabs\":\"Tabs\",\"/components/text-fields\":\"Textfeld\",\"/components/toggle-button\":\"Schalter\",\"/components/tooltips\":\"Tooltip\",\"/components/transfer-list\":\"Transferliste (Transfer List)\",\"/components/transitions\":\"Übergänge\",\"/components/typography\":\"Typografie\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utils\",\"/css-in-js\":\"Stile\",\"/css-in-js/basics\":\"Grundlegendes\",\"/css-in-js/advanced\":\"Erweitertes\",\"/system\":\"System\",\"/system/basics\":\"Grundlegendes\",\"/system/borders\":\"Rahmen\",\"/system/display\":\"Anzeige\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Palette\",\"/system/positions\":\"Positionen\",\"/system/shadows\":\"Schatten\",\"/system/sizing\":\"Dimensionierung\",\"/system/spacing\":\"Abstände\",\"/system/typography\":\"Typografie\",\"/customization\":\"Individuelle Anpassung\",\"/customization/theming\":\"Übersicht\",\"/customization/theme\":\"Theming\",\"/customization/breakpoints\":\"Haltepunkte\",\"/customization/color\":\"Farbe (Color)\",\"/customization/palette\":\"Palette\",\"/customization/type\":\"Typ (helles/dunkles Theme)\",\"/customization/typography\":\"Typografie\",\"/customization/spacing\":\"Abstände\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Global\",\"/customization/components\":\"Überschreibungen\",\"/customization/default-theme\":\"Standardtheme\",\"/guides\":\"Leitfäden\",\"/guides/api\":\"API-Design-Ansatz\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Interoperabilität der Stilbibliothek\",\"/guides/minimizing-bundle-size\":\"Paketgröße minimieren\",\"/guides/composition\":\"Komposition\",\"/guides/responsive-ui\":\"Responsive UI\",\"/guides/server-rendering\":\"Server-Rendering\",\"/guides/migration-v3\":\"Migration von v3\",\"/guides/migration-v0x\":\"Migration von v0.x\",\"/guides/testing\":\"Testen\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Rechts nach links\",\"/guides/localization\":\"Lokalisierung\",\"/discover-more\":\"Mehr entdecken\",\"/discover-more/showcase\":\"Ausstellung\",\"/discover-more/related-projects\":\"Verwandte Projekte\",\"/discover-more/roadmap\":\"Zeitplan\",\"/discover-more/backers\":\"Sponsoren & Unterstützer\",\"/discover-more/vision\":\"Vision\",\"/discover-more/team\":\"Team\",\"/discover-more/community\":\"Gemeinschaft\",\"/discover-more/changelog\":\"Änderungen\",\"/discover-more/languages\":\"Sprachen\",\"/versions\":\"Versionen\",\"/styles\":\"Stile\",\"/styles/basics\":\"Grundlegendes\",\"/styles/advanced\":\"Erweitert\",\"https://material-ui.com/store/\":\"Premium Themen\",\"/components/material-icons\":\"Material Icons\",\"/components/textarea-autosize\":\"Textarea Autosize\",\"/components/rating\":\"Bewertung\",\"/components/skeleton\":\"Skelett\",\"/components/tree-view\":\"Baumstrukturansicht\",\"/customization/density\":\"Dichte\",\"/components/button-group\":\"Button Group\",\"/components/floating-action-button\":\"Floating Action Button\",\"/components/backdrop\":\"Backdrop\",\"/components/alert\":\"Hinweis\",\"/components/pagination\":\"Paginierung\"}}");

/***/ }),

/***/ "./translations/translations-es.json":
/*!*******************************************!*\
  !*** ./translations/translations-es.json ***!
  \*******************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"Si no te molestan los anuncios sobre tecnología (sin seguimiento o re-mercadeo), y quieres apoyar al Open Source, por favor añade a Material-UI a tu lista blanca en tu bloqueador de anuncios.\",\"albumDescr\":\"Diseño responsive de una página tipo álbum / galería con una unidad hero y footer.\",\"albumTitle\":\"Álbum\",\"algoliaSearch\":\"Buscar\",\"blogDescr\":\"Diseño de una sofisticada página de blog. El soporte para Markdown por cortesía de markdown-to-jsx, pero es fácilmente reemplazable.\",\"blogTitle\":\"Blog\",\"cdn\":\"o use un CDN.\",\"changeLanguage\":\"Cambiar idioma\",\"checkoutDescr\":\"Diseño de página de pagos paso a paso. Adapte el número de pasos para que se ajuste a sus necesidades, o haga los pasos opcionales.\",\"checkoutTitle\":\"Pagar\",\"close\":\"Cerrar\",\"codesandbox\":\"Editar en CodeSandbox\",\"copiedSource\":\"El código fuente ha sido copiado.\",\"copiedSourceLink\":\"El enlace al código fuente ha sido copiado.\",\"copySource\":\"Copiar el código fuente\",\"copySourceLinkJS\":\"Copiar enlace a fuente de JavaScript\",\"copySourceLinkTS\":\"Copiar enlace a código fuente en TypeScript\",\"dashboardDescr\":\"Un dashboard simple con barra de tareas y mini dibujo variante. Gráfico por cortesía de Recharts, pero es muy simple sustituirlo por otra alternativa.\",\"dashboardTitle\":\"Dashboard\",\"decreaseSpacing\":\"disminuir espaciado\",\"demoToolbarLabel\":\"código fuente demostrativo\",\"diamondSponsors\":\"Patrocinadores Destacados\",\"editPage\":\"Ayuda a traducir esta página\",\"editWebsiteColors\":\"Editar los colores del sitio web\",\"emojiLove\":\"Amor\",\"emoojiWarning\":\"Advertencia\",\"expandAll\":\"Expandir todo\",\"footerCommunity\":\"Comunidad\",\"footerCompany\":\"Compañía\",\"footerResources\":\"Recursos\",\"getProfessionalSupport\":\"Obten soporte profesional\",\"getStarted\":\"Comenzar\",\"github\":\"Repositorio en GitHub\",\"headTitle\":\"Material-UI: Un framework popular para UI en React\",\"helpToTranslate\":\"Ayúdanos a traducir\",\"hideFullSource\":\"Esconder la fuente completa\",\"hideSource\":\"Ocultar el código fuente\",\"homeFooterRelease\":\"Actualmente {{versionNumber}}. Publicado bajo la {{license}}.\",\"homeQuickWord\":\"Unas palabras de nuestros patrocinadores:\",\"increaseSpacing\":\"iumentar espaciado\",\"installation\":\"Instalación\",\"installButton\":\"Lea los docs de instalación\",\"installDescr\":\"Instale los archivos necesarios de Material-UI a través de npm. Nosotros nos encargamos de inyectar todo el CSS necesario.\",\"joinThese\":\"¡Únete a estas y otras grandes organizaciones!\",\"letUsKnow\":\"¡Déjanos saber!\",\"license\":\"Licencia MIT\",\"likeMui\":\"¿Te gusta Material-UI?\",\"loadFont\":\"Cargue la fuente por defecto Roboto.\",\"mainNavigation\":\"Navegación principal\",\"newest\":\"Lo último\",\"openDrawer\":\"Abrir navegación principal\",\"pageTOC\":\"Tabla de contenidos\",\"praise\":\"Elogios a Material-UI\",\"praiseDescr\":\"He aquí lo que algunos de nuestros usuarios están diciendo.\",\"pricingDescr\":\"Construya rápidamente una efectiva tabla de precios para sus potenciales clientes con este diseño de página.\",\"pricingTitle\":\"Precios\",\"resetDemo\":\"Restablecer demostración\",\"resetDensity\":\"Restablecer densidad\",\"seeMore\":\"Ver más\",\"showFullSource\":\"Ver la fuente completa\",\"showJSSource\":\"Mostrar código fuente en JavaScript\",\"showSource\":\"Mostrar el código fuente\",\"showTSSource\":\"Mostrar código fuente en TypeScript\",\"signInDescr\":\"Simple página de inicio de sesión.\",\"signInSideDescr\":\"Una simple página de inicio de sesión lateral.\",\"signInSideTitle\":\"Inicio de sesión lateral\",\"signInTitle\":\"Iniciar sesión\",\"signUpDescr\":\"Una simple página de registro.\",\"signUpTitle\":\"Registrarse\",\"skipToContent\":\"Saltar al contenido\",\"sourceCode\":\"Código fuente\",\"spacingUnit\":\"Unidad de espaciamiento\",\"stackblitz\":\"Editar en StackBlitz (solo JS)\",\"stars\":\"Estrellas de GitHub\",\"stickyFooterDescr\":\"Adjunte un pie de página a la parte inferior de la ventana gráfica cuando el contenido de la página sea breve.\",\"stickyFooterTitle\":\"Pié de página fijo\",\"strapline\":\"Componentes de React para un desarrollo web más rápido y sencillo. Construya su propio sistema de diseño, o empiece con Material Design.\",\"tableOfContents\":\"Tabla de Contenido\",\"thanks\":\"¡Gracias!\",\"themes\":\"Temas Premium\",\"themesButton\":\"Examinar temas\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"toggleNotifications\":\"Cambiar panel de notificaciones\",\"toggleRTL\":\"Alternar derecha-izquierda/izquierda-derecha\",\"toggleTheme\":\"Alternar tema claro/oscuro\",\"traffic\":\"Tráfico\",\"usage\":\"Implementación\",\"usageButton\":\"Explore la documentación\",\"usageDescr\":\"Los componentes de Material-UI funcionan sin ninguna configuración adicional, y no ensucian el global scope.\",\"useDarkTheme\":\"Usar tema oscuro\",\"useHighDensity\":\"Aplicar una mayor densidad vía props\",\"usingMui\":\"¿Estás usando Material-UI?\",\"viewGitHub\":\"Ver el código fuente en GitHub\",\"visit\":\"Visita el sitio web\",\"whosUsing\":\"¿Quién está usando Material-UI?\",\"initialFocusLabel\":\"Un contenedor genérico que está enfocado programáticamente para probar la navegación vía teclado de nuestros componentes.\",\"resetFocus\":\"Restablecer foco para probar la navegación vía teclado\",\"pages\":{\"/getting-started\":\"Primeros pasos\",\"/getting-started/installation\":\"Instalación\",\"/getting-started/usage\":\"Implementación\",\"/getting-started/example-projects\":\"Proyectos de Ejemplo\",\"/getting-started/templates\":\"Plantillas\",\"/getting-started/learn\":\"Aprender\",\"/getting-started/faq\":\"Preguntas frecuentes\",\"/getting-started/supported-components\":\"Componentes Compatibles\",\"/getting-started/supported-platforms\":\"Plataformas compatibles\",\"/getting-started/support\":\"Apóyanos\",\"/components\":\"Componentes\",\"/components/about-the-lab\":\"Acerca de El Laboratorio\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"Acerca de El Laboratorio\",\"/components/app-bar\":\"App Bar\",\"/components/autocomplete\":\"Autocompletado\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Entradas Básicas\",\"/components/bottom-navigation\":\"Navegación a pie de página\",\"/components/box\":\"Cuadro\",\"/components/breadcrumbs\":\"Migas de pan\",\"/components/buttons\":\"Button (botón)\",\"/components/cards\":\"Card (tarjeta)\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Contenido\",\"/components/css-baseline\":\"Base de CSS\",\"/components/data-display\":\"Visualización de datos\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Cajón\",\"/components/expansion-panels\":\"Expansion Panel (panel de expansión)\",\"/components/feedback\":\"Opiniones\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Lista cuadriculada\",\"/components/icons\":\"Iconos\",\"/components/inputs\":\"Inputs\",\"/components/lab\":\"Laboratorio\",\"/components/layout\":\"Diseño\",\"/components/links\":\"Link\",\"/components/lists\":\"Lista\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navegación\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"Otros\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Fecha / hora\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Progreso\",\"/components/progress-validation\":\"Opiniones\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Selección\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Marcación rápida\",\"/components/steppers\":\"Stepper (Pasos a pasos)\",\"/components/surfaces\":\"Superficies\",\"/components/switches\":\"Switch\",\"/components/tables\":\"Table (tabla)\",\"/components/tabs\":\"Pestañas\",\"/components/text-fields\":\"Text Field (campo de texto)\",\"/components/toggle-button\":\"Botón conmutador\",\"/components/tooltips\":\"Tooltip\",\"/components/transfer-list\":\"Lista de transferencia\",\"/components/transitions\":\"Transiciones\",\"/components/typography\":\"Tipografía\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utilidades\",\"/css-in-js\":\"Estilos\",\"/css-in-js/basics\":\"Fundamentos\",\"/css-in-js/advanced\":\"Avanzado\",\"/system\":\"Sistema\",\"/system/basics\":\"Fundamentos\",\"/system/borders\":\"Bordes\",\"/system/display\":\"Mostrar\",\"/system/flexbox\":\"Caja flexible\",\"/system/palette\":\"Paleta\",\"/system/positions\":\"Posiciones\",\"/system/shadows\":\"Sombras\",\"/system/sizing\":\"Dimensionamiento\",\"/system/spacing\":\"Espaciado\",\"/system/typography\":\"Tipografía\",\"/customization\":\"Personalización\",\"/customization/theming\":\"Estilos\",\"/customization/theme\":\"Temática\",\"/customization/breakpoints\":\"Puntos de interrupción\",\"/customization/color\":\"Color\",\"/customization/palette\":\"Paleta\",\"/customization/type\":\"Alternar tema (claro/oscuro)\",\"/customization/typography\":\"Tipografía\",\"/customization/spacing\":\"Espaciado\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Globales\",\"/customization/components\":\"Sobreponer\",\"/customization/default-theme\":\"Tema predeterminado\",\"/guides\":\"Guías\",\"/guides/api\":\"Enfoque de diseño para el API\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Interoperabilidad de la biblioteca de estilos\",\"/guides/minimizing-bundle-size\":\"Minimizando el tamaño del paquete\",\"/guides/composition\":\"Composición\",\"/guides/responsive-ui\":\"Interfaz de usuario adaptable\",\"/guides/server-rendering\":\"Renderizado en el servidor\",\"/guides/migration-v3\":\"Migración desde v3\",\"/guides/migration-v0x\":\"Migración desde v0.x\",\"/guides/testing\":\"Pruebas\",\"/guides/flow\":\"Flujo\",\"/guides/right-to-left\":\"Derecha-a-izquierda\",\"/guides/localization\":\"Localización\",\"/discover-more\":\"Descubrir Más\",\"/discover-more/showcase\":\"Exhibición\",\"/discover-more/related-projects\":\"Proyectos Relacionados\",\"/discover-more/roadmap\":\"Mapa de ruta\",\"/discover-more/backers\":\"Patrocinadores Y Mecenas\",\"/discover-more/vision\":\"Visión\",\"/discover-more/team\":\"Equipo\",\"/discover-more/community\":\"Comunidad\",\"/discover-more/changelog\":\"Registro de cambios\",\"/discover-more/languages\":\"Lenguajes\",\"/versions\":\"Versiones\",\"/styles\":\"Estilos\",\"/styles/basics\":\"Fundamentos\",\"/styles/advanced\":\"Avanzado\",\"https://material-ui.com/store/\":\"Temas Premium\",\"/components/material-icons\":\"Material Icons\",\"/components/textarea-autosize\":\"Auto-dimensionar área de texto\",\"/components/rating\":\"Rating\",\"/components/skeleton\":\"Esqueleto\",\"/components/tree-view\":\"Vista de arbol\",\"/customization/density\":\"Densidad\",\"/components/button-group\":\"Grupo de botones\",\"/components/floating-action-button\":\"Botón de acción flotante\",\"/components/backdrop\":\"Backdrop\",\"/components/alert\":\"Alerta\",\"/components/pagination\":\"Pagination\"}}");

/***/ }),

/***/ "./translations/translations-fr.json":
/*!*******************************************!*\
  !*** ./translations/translations-fr.json ***!
  \*******************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"Si les annonces techniques ne vous dérangent pas et si vous souhaitez soutenir l'Open Source, veuillez ajouter Material-UI à la liste blanche de votre ad blocker.\",\"albumDescr\":\"Une mise en page d'album / galerie responsive avec un hero unit et un footer.\",\"albumTitle\":\"Album\",\"algoliaSearch\":\"Chercher\",\"blogDescr\":\"Une mise en page de blog sophistiquée. Le support du Markdown est fourni grâce à markdown-to-jsx mais est facilement remplaçable.\",\"blogTitle\":\"Blog\",\"cdn\":\"ou utilisez un CDN.\",\"changeLanguage\":\"Changer de langue\",\"checkoutDescr\":\"Un layout étape par étape de la commande. Adaptez le nombre d'étapes à vos besoins ou faites-en des étapes facultatives.\",\"checkoutTitle\":\"Paiement final\",\"close\":\"Fermer\",\"codesandbox\":\"Modifier dans CodeSandbox\",\"copiedSource\":\"Le code source a été copié.\",\"copiedSourceLink\":\"Le lien vers le code source a été copié.\",\"copySource\":\"Copier la source\",\"copySourceLinkJS\":\"Copier le lien vers la source en JavaScript\",\"copySourceLinkTS\":\"Copier le lien vers la source en TypeScript\",\"dashboardDescr\":\"Un tableau de bord minimal. Le graphique est implementé avec l'aide de Recharts, mais il peut être remplacé par une solution alternative.\",\"dashboardTitle\":\"Tableau de bord\",\"decreaseSpacing\":\"diminuer l'espacement\",\"demoToolbarLabel\":\"source de la démo\",\"diamondSponsors\":\"Sponsors Diamant\",\"editPage\":\"Aidez à traduire cette page\",\"editWebsiteColors\":\"Modifier les couleurs du site\",\"emojiLove\":\"Amour\",\"emoojiWarning\":\"Attention\",\"expandAll\":\"Tout étendre\",\"footerCommunity\":\"Communauté\",\"footerCompany\":\"Entreprise\",\"footerResources\":\"Ressources\",\"getProfessionalSupport\":\"Obtenir de l'aide professionnelle\",\"getStarted\":\"Commencer\",\"github\":\"Répertoire GitHub\",\"headTitle\":\"Material-UI : Un framework UI React populaire\",\"helpToTranslate\":\"Aider à la traduction\",\"hideFullSource\":\"Masquer la source complète\",\"hideSource\":\"Masquer la source\",\"homeFooterRelease\":\"Actuellement {{versionNumber}}. Délivrée sous la {{license}}.\",\"homeQuickWord\":\"Un mot rapide de nos sponsors :\",\"increaseSpacing\":\"augmenter l'espacement\",\"installation\":\"Installation\",\"installButton\":\"Lire les docs d'installation\",\"installDescr\":\"Installez les fichiers source de Material-UI avec npm. Nous nous occupons d'injecter le CSS nécessaire.\",\"joinThese\":\"Rejoignez ces organisations et d’autres formidables!\",\"letUsKnow\":\"Faites-nous savoir !\",\"license\":\"Licence MIT\",\"likeMui\":\"Aidez-nous à fonctionner\",\"loadFont\":\"Chargez la police Roboto par défaut.\",\"mainNavigation\":\"Navigation principale\",\"newest\":\"Plus récent\",\"openDrawer\":\"Voir la navigation principale\",\"pageTOC\":\"La table des matières\",\"praise\":\"Éloge de Material-UI\",\"praiseDescr\":\"Voici ce que disent certains de nos utilisateurs.\",\"pricingDescr\":\"Construisez rapidement un tableau de prix pour vos clients potentiels avec cette mise en page.\",\"pricingTitle\":\"Tarifs\",\"resetDemo\":\"Réinitialiser la démo\",\"resetDensity\":\"Réinitialiser la densité\",\"seeMore\":\"Voir plus\",\"showFullSource\":\"Afficher la source complète\",\"showJSSource\":\"Afficher la source en JavaScript\",\"showSource\":\"Voir la source\",\"showTSSource\":\"Afficher la source en TypeScript\",\"signInDescr\":\"Une simple page de connexion.\",\"signInSideDescr\":\"Une simple page de connexion latérale.\",\"signInSideTitle\":\"Se connecter\",\"signInTitle\":\"Connexion\",\"signUpDescr\":\"Une simple page de connexion.\",\"signUpTitle\":\"Créer un compte\",\"skipToContent\":\"Passer au contenu\",\"sourceCode\":\"Code source\",\"spacingUnit\":\"Unité d'espacement\",\"stackblitz\":\"Modifier dans StackBlitz (JS uniquement)\",\"stars\":\"Étoiles GitHub\",\"stickyFooterDescr\":\"Fixer un pied de page au bas de la fenêtre lorsque le contenu des pages est court.\",\"stickyFooterTitle\":\"Pied de page collant\",\"strapline\":\"Des composants React pour un développement web plus rapide et plus simple. Confectionner votre propre thème graphique ou aidez-vous de Material Design.\",\"tableOfContents\":\"Sommaire\",\"thanks\":\"Merci !\",\"themes\":\"Thèmes Premium\",\"themesButton\":\"Parcourir les thèmes\",\"themesDescr\":\"Faites passer votre projet au niveau supérieur avec des thèmes premium de notre store officiel, tous construits sur Material-UI.\",\"toggleNotifications\":\"Ouvrir/Fermer le panneau des notifications\",\"toggleRTL\":\"Inverser la direction du texte\",\"toggleTheme\":\"Basculer le thème de couleurs \\\"clair/sombre\\\"\",\"traffic\":\"Trafic\",\"usage\":\"Usage\",\"usageButton\":\"Consulter la documentation\",\"usageDescr\":\"Les composants Material-UI fonctionnent de manière isolée. Ils sont autonomes.\",\"useDarkTheme\":\"Utiliser le thème sombre\",\"useHighDensity\":\"Appliquer une densité plus élevée via les props\",\"usingMui\":\"Utilisez-vous Material-UI ?\",\"viewGitHub\":\"Voir la source sur GitHub\",\"visit\":\"Visiter le site web\",\"whosUsing\":\"Qui utilise Material-UI ?\",\"initialFocusLabel\":\"Un conteneur générique qui est focused pour tester la navigation au clavier des composants.\",\"resetFocus\":\"Réinitialiser le focus pour tester la navigation au clavier\",\"pages\":{\"/getting-started\":\"Bien démarrer\",\"/getting-started/installation\":\"Installation\",\"/getting-started/usage\":\"Utilisation\",\"/getting-started/example-projects\":\"Exemples de Projets\",\"/getting-started/templates\":\"Templates\",\"/getting-started/learn\":\"Apprendre\",\"/getting-started/faq\":\"FAQs\",\"/getting-started/supported-components\":\"Composants pris en charge\",\"/getting-started/supported-platforms\":\"Plateformes supportées\",\"/getting-started/support\":\"Assistance\",\"/components\":\"Composants\",\"/components/about-the-lab\":\"À propos du Lab\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"À propos du Lab\",\"/components/app-bar\":\"App Bar\",\"/components/autocomplete\":\"Autocomplete\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Simple inputs\",\"/components/bottom-navigation\":\"Bottom Navigation\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Breadcrumbs\",\"/components/buttons\":\"Button\",\"/components/cards\":\"Card\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Content\",\"/components/css-baseline\":\"CSS de Base\",\"/components/data-display\":\"Affichage des données\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Drawer\",\"/components/expansion-panels\":\"Expansion Panel\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Grid List\",\"/components/icons\":\"Icônes\",\"/components/inputs\":\"Inputs\",\"/components/lab\":\"Laboratoire\",\"/components/layout\":\"Disposition\",\"/components/links\":\"Link\",\"/components/lists\":\"List\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navigation\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"Autres\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Date / Heure\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Barres de progression\",\"/components/progress-validation\":\"Feedback\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Select\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Speed Dial\",\"/components/steppers\":\"Stepper\",\"/components/surfaces\":\"Surfaces\",\"/components/switches\":\"Switch\",\"/components/tables\":\"Table\",\"/components/tabs\":\"Tabs\",\"/components/text-fields\":\"Text Field\",\"/components/toggle-button\":\"Toggle Button\",\"/components/tooltips\":\"Tooltip\",\"/components/transfer-list\":\"Transfer List\",\"/components/transitions\":\"Transitions\",\"/components/typography\":\"Typography\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utilitaires\",\"/css-in-js\":\"Styles\",\"/css-in-js/basics\":\"Bases\",\"/css-in-js/advanced\":\"Avancé\",\"/system\":\"Système\",\"/system/basics\":\"Bases\",\"/system/borders\":\"Bordures\",\"/system/display\":\"Affichage\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Palette\",\"/system/positions\":\"Positions\",\"/system/shadows\":\"Ombres\",\"/system/sizing\":\"Dimensionnement\",\"/system/spacing\":\"Ecartement\",\"/system/typography\":\"Typographie\",\"/customization\":\"Personnalisation\",\"/customization/theming\":\"Vue d'ensemble\",\"/customization/theme\":\"Thématisation\",\"/customization/breakpoints\":\"Points d'arrêt\",\"/customization/color\":\"Couleur\",\"/customization/palette\":\"Palette\",\"/customization/type\":\"Type (thème clair / sombre)\",\"/customization/typography\":\"Typography\",\"/customization/spacing\":\"Ecartement\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Variables globales\",\"/customization/components\":\"Composants\",\"/customization/default-theme\":\"Thèmes par défaut\",\"/guides\":\"Guides\",\"/guides/api\":\"Conception de l'API\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Interopérabilité de la bibliothèque de styles\",\"/guides/minimizing-bundle-size\":\"Réduire la taille du bundle\",\"/guides/composition\":\"Composition\",\"/guides/responsive-ui\":\"Responsive UI\",\"/guides/server-rendering\":\"Rendu serveur\",\"/guides/migration-v3\":\"Migration depuis v3x\",\"/guides/migration-v0x\":\"Migration depuis v0.x\",\"/guides/testing\":\"Test\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Droite à gauche\",\"/guides/localization\":\"Localisation\",\"/discover-more\":\"Découvrir plus\",\"/discover-more/showcase\":\"Démonstration\",\"/discover-more/related-projects\":\"Projets liés\",\"/discover-more/roadmap\":\"Feuille de route\",\"/discover-more/backers\":\"Sponsors\",\"/discover-more/vision\":\"Vision\",\"/discover-more/team\":\"Équipe\",\"/discover-more/community\":\"Communauté\",\"/discover-more/changelog\":\"Journal des modifications\",\"/discover-more/languages\":\"Langages\",\"/versions\":\"Versions\",\"/styles\":\"Styles\",\"/styles/basics\":\"Bases\",\"/styles/advanced\":\"Avancé\",\"https://material-ui.com/store/\":\"Thèmes Premium\",\"/components/material-icons\":\"Icônes Material\",\"/components/textarea-autosize\":\"Textarea Autosize\",\"/components/rating\":\"Rating\",\"/components/skeleton\":\"Skeleton\",\"/components/tree-view\":\"Tree View\",\"/customization/density\":\"Densité\",\"/components/button-group\":\"Button Group\",\"/components/floating-action-button\":\"Floating Action Button\",\"/components/backdrop\":\"Backdrop\",\"/components/alert\":\"Alert\",\"/components/pagination\":\"Pagination\"}}");

/***/ }),

/***/ "./translations/translations-ja.json":
/*!*******************************************!*\
  !*** ./translations/translations-ja.json ***!
  \*******************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"もしテクノロジー関連の広告が気にならず、オープンソースを支援したい場合は、Material-UIを広告ブロッカーのホワイトリストに追加してください。\",\"albumDescr\":\"ヒーローユニットとフッターが付いたレスポンシブ対応のアルバム/ギャラリーページのレイアウト。\",\"albumTitle\":\"アルバム\",\"algoliaSearch\":\"検索\",\"blogDescr\":\"洗練されたブログページのレイアウト。マークダウンのサポートはmarkdown-to-jsxによるものですが、差し替えるのは簡単です。\",\"blogTitle\":\"ブログ\",\"cdn\":\"または、CDNを使用します。\",\"changeLanguage\":\"言語を切り替える\",\"checkoutDescr\":\"段階的な購入手続きページのレイアウト。必要に合わせてステップ数が変化し、また任意でステップを追加できます。\",\"checkoutTitle\":\"確認する\",\"close\":\"閉じる\",\"codesandbox\":\"CodeSandboxで編集する\",\"copiedSource\":\"ソースコードがコピーされました。\",\"copiedSourceLink\":\"Link to the source code has been copied.\",\"copySource\":\"ソースコードをコピーする\",\"copySourceLinkJS\":\"JavaScriptソースへのリンクをコピーする\",\"copySourceLinkTS\":\"TypeScriptソースへのリンクをコピーする\",\"dashboardDescr\":\"タスクバーと変異チャート機能を備えたミニマルなダッシュボード。チャートはRechartsによるものですが、差し替えるのは簡単です。\",\"dashboardTitle\":\"ダッシュボード\",\"decreaseSpacing\":\"間隔を狭める\",\"demoToolbarLabel\":\"demo source\",\"diamondSponsors\":\"Diamond Sponsors\",\"editPage\":\"このページの翻訳を手伝ってください\",\"editWebsiteColors\":\"ウェブサイトの色を編集する\",\"emojiLove\":\"かしこ\",\"emoojiWarning\":\"注意\",\"expandAll\":\"全て展開\",\"footerCommunity\":\"コミュニティ\",\"footerCompany\":\"Company\",\"footerResources\":\"Resources\",\"getProfessionalSupport\":\"Get Professional Support\",\"getStarted\":\"はじめましょう!\",\"github\":\"GitHubリポジトリ\",\"headTitle\":\"ポピュラーなReact UIフレームワーク\",\"helpToTranslate\":\"翻訳を手伝う\",\"hideFullSource\":\"全体のソースコードを隠す\",\"hideSource\":\"ソースコードを隠す\",\"homeFooterRelease\":\"現在 {{versionNumber}}です。 {{license}}下でリリースされました。\",\"homeQuickWord\":\"私たちのスポンサーからの言葉:\",\"increaseSpacing\":\"間隔を広げる\",\"installation\":\"インストール\",\"installButton\":\"インストールに関して\",\"installDescr\":\"npmからMaterial-UIのソースファイルをインストールします。必要なCSSを導入することを忘れないでください。\",\"joinThese\":\"この素晴らしい団体に参加しましょう！\",\"letUsKnow\":\"ご連絡ください！\",\"license\":\"MIT ライセンス\",\"likeMui\":\"Material-UIがスキですか？\",\"loadFont\":\"デフォルトのRobotoフォントを読み込みます。\",\"mainNavigation\":\"メインナビゲーション\",\"newest\":\"新着\",\"openDrawer\":\"メインナビゲーションを開く\",\"pageTOC\":\"ページの目次\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"pricingDescr\":\"このページレイアウトを用いて顧客に効果的な料金テーブルをすぐに作りましょう。\",\"pricingTitle\":\"料金プラン\",\"resetDemo\":\"Reset demo\",\"resetDensity\":\"密度をリセット\",\"seeMore\":\"もっと見る\",\"showFullSource\":\"全体のソースコードを表示する\",\"showJSSource\":\"JavaScriptのソースを表示する\",\"showSource\":\"ソースコード\",\"showTSSource\":\"TypeScriptのソースを表示する\",\"signInDescr\":\"シンプルなログインページ。\",\"signInSideDescr\":\"シンプルなサイドページのログイン。\",\"signInSideTitle\":\"ログイン（サイドページ）\",\"signInTitle\":\"ログイン\",\"signUpDescr\":\"シンプルな新規登録ページ。\",\"signUpTitle\":\"新規登録\",\"skipToContent\":\"コンテンツへ移動\",\"sourceCode\":\"ソースコード\",\"spacingUnit\":\"スペーシングユニット\",\"stackblitz\":\"StackBlitz(JS only) で編集する\",\"stars\":\"GitHubのスター数\",\"stickyFooterDescr\":\"ページ内コンテンツが短い場合は、表示領域の下にフッターを固定します。\",\"stickyFooterTitle\":\"固定フッター\",\"strapline\":\"ウェブ開発をより高速かつ簡単なものにするReactコンポーネントです。あなたのデザインシステムを構築するかMaterial Designで始めましょう。\",\"tableOfContents\":\"目次\",\"thanks\":\"感謝します！\",\"themes\":\"プレミアムテーマ\",\"themesButton\":\"テーマを見る\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"toggleNotifications\":\"Toggle notifications panel\",\"toggleRTL\":\"左右反転する\",\"toggleTheme\":\"ライト/ダークテーマに変更する\",\"traffic\":\"トラフィック\",\"usage\":\"使い方\",\"usageButton\":\"ドキュメントを探索する\",\"usageDescr\":\"Material-UIコンポーネントは追加の設定なしで機能し、グローバルスコープを汚染しません。\",\"useDarkTheme\":\"ダークテーマを使用する\",\"useHighDensity\":\"より高密度を適用する\",\"usingMui\":\"Material-UIを使ってみませんか？\",\"viewGitHub\":\"GitHubでソースコードを見る\",\"visit\":\"ウェブサイトへ行く\",\"whosUsing\":\"誰がMaterial-UIを利用してますか？\",\"initialFocusLabel\":\"A generic container that is programmatically focused to test keyboard navigation of our components.\",\"resetFocus\":\"Reset focus to test keyboard navigation\",\"pages\":{\"/getting-started\":\"はじめに\",\"/getting-started/installation\":\"インストール\",\"/getting-started/usage\":\"使い方\",\"/getting-started/example-projects\":\"サンプルプロジェクト\",\"/getting-started/templates\":\"テンプレート\",\"/getting-started/learn\":\"学ぶ\",\"/getting-started/faq\":\"よくある質問と回答\",\"/getting-started/supported-components\":\"サポートされているコンポーネント\",\"/getting-started/supported-platforms\":\"サポートされているプラットフォーム\",\"/getting-started/support\":\"サポート\",\"/components\":\"コンポーネント\",\"/components/about-the-lab\":\"ラボについて\",\"/components/click-away-listener\":\"クリックリスナー\",\"/component/about\":\"ラボについて\",\"/components/app-bar\":\"アプリバー\",\"/components/autocomplete\":\"オートコンプリート\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"基本的な入力\",\"/components/bottom-navigation\":\"ボトムナビゲーション\",\"/components/box\":\"ボックス\",\"/components/breadcrumbs\":\"Breadcrumbs\",\"/components/buttons\":\"Button (ボタン)\",\"/components/cards\":\"Card (カード)\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"コンテナ\",\"/components/content\":\"コンテンツ\",\"/components/css-baseline\":\"CSSベースライン\",\"/components/data-display\":\"データの表示\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Drawer\",\"/components/expansion-panels\":\"Expansion Panel (拡張パネル)\",\"/components/feedback\":\"フィードバック\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"グリッドリスト\",\"/components/icons\":\"アイコン\",\"/components/inputs\":\"入力\",\"/components/lab\":\"ラボ\",\"/components/layout\":\"レイアウト\",\"/components/links\":\"Link\",\"/components/lists\":\"List (リスト)\",\"/components/menus\":\"Menu\",\"/components/modal\":\"モーダル\",\"/components/navigation\":\"ナビゲーション\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"その他\",\"/components/paper\":\"紙\",\"/components/pickers\":\"日付時刻\",\"/components/popover\":\"ポップオーバー\",\"/components/popper\":\"ポッパー\",\"/components/portal\":\"ポータル\",\"/components/progress\":\"Progress\",\"/components/progress-validation\":\"フィードバック\",\"/components/radio-buttons\":\"Radio\",\"/components/selects\":\"Select (選択)\",\"/components/slider\":\"スライダー\",\"/components/snackbars\":\"Snackbar (スナックバー)\",\"/components/speed-dial\":\"スピードダイヤル\",\"/components/steppers\":\"Stepper（ステッパー）\",\"/components/surfaces\":\"サーフェス\",\"/components/switches\":\"Switch\",\"/components/tables\":\"テーブル\",\"/components/tabs\":\"タブ\",\"/components/text-fields\":\"Text Field (テキストフィールド)\",\"/components/toggle-button\":\"トグルボタン\",\"/components/tooltips\":\"Tooltip\",\"/components/transfer-list\":\"転送リスト\",\"/components/transitions\":\"トランジション\",\"/components/typography\":\"タイポグラフィ\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"ユーティリティ\",\"/css-in-js\":\"スタイル\",\"/css-in-js/basics\":\"基本\",\"/css-in-js/advanced\":\"高度な\",\"/system\":\"システム\",\"/system/basics\":\"基本\",\"/system/borders\":\"ボーダー\",\"/system/display\":\"ディスプレイ\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"パレット\",\"/system/positions\":\"Position\",\"/system/shadows\":\"Shadows\",\"/system/sizing\":\"サイジング\",\"/system/spacing\":\"間隔\",\"/system/typography\":\"タイポグラフィ\",\"/customization\":\"カスタマイズ\",\"/customization/theming\":\"Themes\",\"/customization/theme\":\"テーマ\",\"/customization/breakpoints\":\"ブレイクポイント\",\"/customization/color\":\"カラー\",\"/customization/palette\":\"パレット\",\"/customization/type\":\"タイプ(ライト／ダークテーマ)\",\"/customization/typography\":\"タイポグラフィ\",\"/customization/spacing\":\"間隔\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"グローバル\",\"/customization/components\":\"Overrides\",\"/customization/default-theme\":\"デフォルトのテーマ\",\"/guides\":\"ガイド\",\"/guides/api\":\"APIの設計アプローチ\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"スタイルライブラリの相互運用性\",\"/guides/minimizing-bundle-size\":\"バンドルサイズの最小化\",\"/guides/composition\":\"従属関係\",\"/guides/responsive-ui\":\"レスポンシブUI\",\"/guides/server-rendering\":\"サーバーサイドレンダリング\",\"/guides/migration-v3\":\"v3からの移行\",\"/guides/migration-v0x\":\"v0.からの移行\",\"/guides/testing\":\"テスト中\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"右から左\",\"/guides/localization\":\"Localization\",\"/discover-more\":\"もっと知る\",\"/discover-more/showcase\":\"事例\",\"/discover-more/related-projects\":\"関連プロジェクト\",\"/discover-more/roadmap\":\"ロードマップ\",\"/discover-more/backers\":\"スポンサー\",\"/discover-more/vision\":\"ビジョン\",\"/discover-more/team\":\"チーム\",\"/discover-more/community\":\"コミュニティ\",\"/discover-more/changelog\":\"変更履歴\",\"/discover-more/languages\":\"言語\",\"/versions\":\"バージョン\",\"/styles\":\"スタイル\",\"/styles/basics\":\"基本\",\"/styles/advanced\":\"高度な機能\",\"https://material-ui.com/store/\":\"プレミアムテーマ\",\"/components/material-icons\":\"マテリアルアイコン（Material Icons）\",\"/components/textarea-autosize\":\"テキストエリアの自動サイズ調整\",\"/components/rating\":\"レート\",\"/components/skeleton\":\"スケルトン\",\"/components/tree-view\":\"ツリービュー (Tree View)\",\"/customization/density\":\"密度(Density)\",\"/components/button-group\":\"Button Group\",\"/components/floating-action-button\":\"Floating Action Button\",\"/components/backdrop\":\"Backdrop\",\"/components/alert\":\"Alert\",\"/components/pagination\":\"Pagination\"}}");

/***/ }),

/***/ "./translations/translations-pt.json":
/*!*******************************************!*\
  !*** ./translations/translations-pt.json ***!
  \*******************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"Se você não se importa com anúncios relacionados à tecnologia e deseja dar suporte ao Código Aberto, inscreva o Material-UI na lista de liberações no seu bloqueador de anúncios.\",\"albumDescr\":\"Um layout de página de álbum / galeria responsivo com uma unidade de herói e rodapé.\",\"albumTitle\":\"Álbum\",\"algoliaSearch\":\"Buscar\",\"blogDescr\":\"Um leiaute de página de blog sofisticado. O suporte do Markdown é cortesia do markdown-to-jsx, mas pode ser facilmente substituído.\",\"blogTitle\":\"Blog\",\"cdn\":\"ou use uma CDN.\",\"changeLanguage\":\"Alterar idioma\",\"checkoutDescr\":\"Um layout de página de check-out por passo a passo. Adapte o número de etapas para atender às suas necessidades ou torne as etapas opcionais.\",\"checkoutTitle\":\"Finalizar\",\"close\":\"Fechar\",\"codesandbox\":\"Edite em CodeSandbox\",\"copiedSource\":\"O código fonte foi copiado.\",\"copiedSourceLink\":\"Link para o código-fonte foi copiado.\",\"copySource\":\"Copiar código fonte\",\"copySourceLinkJS\":\"Copiar link para o fonte JavaScript\",\"copySourceLinkTS\":\"Copiar link para o fonte TypeScript\",\"dashboardDescr\":\"Um painel mínimo com barra de tarefas e mini variante. O gráfico é cortesia do Recharts, mas é simples substituir por um alternativo.\",\"dashboardTitle\":\"Painel de controle\",\"decreaseSpacing\":\"diminuir o espaçamento\",\"demoToolbarLabel\":\"código de demonstração\",\"diamondSponsors\":\"Patrocinadores Diamante\",\"editPage\":\"Ajude a traduzir esta página\",\"editWebsiteColors\":\"Editar cores do site\",\"emojiLove\":\"Amor\",\"emoojiWarning\":\"Alerta\",\"expandAll\":\"Expandir tudo\",\"footerCommunity\":\"Comunidade\",\"footerCompany\":\"Empresa\",\"footerResources\":\"Recursos\",\"getProfessionalSupport\":\"Obtenha Suporte Profissional\",\"getStarted\":\"Comece a Usar\",\"github\":\"Repositório no GitHub\",\"headTitle\":\"Material-UI: Um framework popular de React UI\",\"helpToTranslate\":\"Ajude a traduzir\",\"hideFullSource\":\"Esconder o código fonte\",\"hideSource\":\"Esconder o código fonte\",\"homeFooterRelease\":\"Atualmente {{versionNumber}}. Lançado sob a {{license}}.\",\"homeQuickWord\":\"Uma palavra rápida de nossos patrocinadores:\",\"increaseSpacing\":\"aumentar o espaçamento\",\"installation\":\"Instalação\",\"installButton\":\"Ler instruções de instalação\",\"installDescr\":\"Instale o Material-UI via npm. Nós cuidaremos de injetar o CSS necessário.\",\"joinThese\":\"Junte-se a estas e outras grandes organizações!\",\"letUsKnow\":\"Nos conte!\",\"license\":\"Licença MIT\",\"likeMui\":\"Gostou do Material-UI?\",\"loadFont\":\"Carregue a fonte padrão Roboto.\",\"mainNavigation\":\"Navegação principal\",\"newest\":\"Mais recentes\",\"openDrawer\":\"Abrir navegação principal\",\"pageTOC\":\"Tabela de conteúdo\",\"praise\":\"Elogios para Material-UI\",\"praiseDescr\":\"Veja o que alguns dos nossos usuários estão dizendo.\",\"pricingDescr\":\"Crie rapidamente uma tabela de preços eficaz para seus clientes em potencial com este layout de página.\",\"pricingTitle\":\"Preço\",\"resetDemo\":\"Reiniciar demonstração\",\"resetDensity\":\"Repor densidade\",\"seeMore\":\"Ver mais\",\"showFullSource\":\"Ver o código fonte\",\"showJSSource\":\"Ver o fonte JavaScript\",\"showSource\":\"Ver o código fonte\",\"showTSSource\":\"Ver o fonte TypeScript\",\"signInDescr\":\"Uma simples página de login.\",\"signInSideDescr\":\"Uma página simples de login.\",\"signInSideTitle\":\"Entrar ao lado\",\"signInTitle\":\"Entrar\",\"signUpDescr\":\"Uma página simples de cadastro.\",\"signUpTitle\":\"Cadastre-se\",\"skipToContent\":\"Pular para o conteúdo\",\"sourceCode\":\"Código fonte\",\"spacingUnit\":\"Unidade de espaçamento\",\"stackblitz\":\"Editar em StackBlits (apenas JS)\",\"stars\":\"Estrelas GitHub\",\"stickyFooterDescr\":\"Anexe um rodapé abaixo na janela de visualização quando o conteúdo da página for curto.\",\"stickyFooterTitle\":\"Rodapé fixo\",\"strapline\":\"Biblioteca de componentes React para um desenvolvimento ágil e fácil. Construa seu próprio design, ou comece com Material Design.\",\"tableOfContents\":\"Índice\",\"thanks\":\"Obrigado!\",\"themes\":\"Temas premium\",\"themesButton\":\"Explorar temas\",\"themesDescr\":\"Leve seu projeto para um nível superior com os temas premium da nossa loja - todos construídos em Material-UI.\",\"toggleNotifications\":\"Alternar Painel de notificações\",\"toggleRTL\":\"Alternar da direita para a esquerda/esquerda para a direita\",\"toggleTheme\":\"Alternar tema claro/escuro\",\"traffic\":\"Tráfego\",\"usage\":\"Uso\",\"usageButton\":\"Explorar documentação\",\"usageDescr\":\"Os componentes do Material-UI funcionam sem qualquer configuração adicional, e não poluem o escopo global.\",\"useDarkTheme\":\"Usar tema escuro\",\"useHighDensity\":\"Aplique densidade mais alta via propriedades\",\"usingMui\":\"Você está usando o Material-UI?\",\"viewGitHub\":\"Visualizar o código fonte no GitHub\",\"visit\":\"Acesse o site\",\"whosUsing\":\"Quem tem usado Material-UI?\",\"initialFocusLabel\":\"Um contêiner genérico que é focado via programação para testar a navegação por teclado dos nossos componentes.\",\"resetFocus\":\"Resetar foco para testar a navegação por teclado\",\"pages\":{\"/getting-started\":\"Comece a usar\",\"/getting-started/installation\":\"Instalação\",\"/getting-started/usage\":\"Uso\",\"/getting-started/example-projects\":\"Projetos de exemplo\",\"/getting-started/templates\":\"Modelos\",\"/getting-started/learn\":\"Aprenda\",\"/getting-started/faq\":\"Perguntas Frequentes\",\"/getting-started/supported-components\":\"Componentes Suportados\",\"/getting-started/supported-platforms\":\"Plataformas Suportadas\",\"/getting-started/support\":\"Suporte\",\"/components\":\"Componentes\",\"/components/about-the-lab\":\"Sobre o Lab\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"Sobre o Lab\",\"/components/app-bar\":\"Barra de Aplicativos\",\"/components/autocomplete\":\"Autocompletar\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Entradas Básicas\",\"/components/bottom-navigation\":\"Navegação inferior\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Navegação estrutural\",\"/components/buttons\":\"Botão\",\"/components/cards\":\"Cartão\",\"/components/checkboxes\":\"Caixa de Seleção\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Conteúdo\",\"/components/css-baseline\":\"CSS Baseline\",\"/components/data-display\":\"Exibição de Dados\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Drawer\",\"/components/expansion-panels\":\"Painel de Expansão\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grade\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Lista de Grade\",\"/components/icons\":\"Ícones\",\"/components/inputs\":\"Entradas\",\"/components/lab\":\"Lab\",\"/components/layout\":\"Leiaute\",\"/components/links\":\"Link\",\"/components/lists\":\"Lista\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navegação\",\"/components/no-ssr\":\"Sem SSR\",\"/components/other\":\"Outros\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Data / Hora\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Progresso\",\"/components/progress-validation\":\"Feedback\",\"/components/radio-buttons\":\"Botões de opção\",\"/components/selects\":\"Seleção\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Discagem Rápida\",\"/components/steppers\":\"Assistente\",\"/components/surfaces\":\"Superfícies\",\"/components/switches\":\"Interruptor\",\"/components/tables\":\"Tabela\",\"/components/tabs\":\"Abas\",\"/components/text-fields\":\"Campo de Texto\",\"/components/toggle-button\":\"Botões de alternância\",\"/components/tooltips\":\"Dica\",\"/components/transfer-list\":\"Transferência de Lista\",\"/components/transitions\":\"Transições\",\"/components/typography\":\"Tipografia\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utilidades\",\"/css-in-js\":\"Estilos\",\"/css-in-js/basics\":\"Noções Básicas\",\"/css-in-js/advanced\":\"Avançado\",\"/system\":\"Sistema\",\"/system/basics\":\"Noções Básicas\",\"/system/borders\":\"Bordas\",\"/system/display\":\"Display\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Paleta de Cores\",\"/system/positions\":\"Posições\",\"/system/shadows\":\"Sombras\",\"/system/sizing\":\"Dimensionando\",\"/system/spacing\":\"Espaçamento\",\"/system/typography\":\"Tipografia\",\"/customization\":\"Customização\",\"/customization/theming\":\"Temas\",\"/customization/theme\":\"Temas\",\"/customization/breakpoints\":\"Pontos de quebra\",\"/customization/color\":\"Cor\",\"/customization/palette\":\"Paleta de Cores\",\"/customization/type\":\"Tipo (claro / escuro)\",\"/customization/typography\":\"Tipografia\",\"/customization/spacing\":\"Espaçamento\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Globais\",\"/customization/components\":\"Componentes\",\"/customization/default-theme\":\"Tema Padrão\",\"/guides\":\"Guias\",\"/guides/api\":\"Abordagem de Design da API\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Interoperabilidade da Biblioteca de Estilo\",\"/guides/minimizing-bundle-size\":\"Minimizando o tamanho do pacote\",\"/guides/composition\":\"Composição\",\"/guides/responsive-ui\":\"UI Responsiva\",\"/guides/server-rendering\":\"Renderização no servidor\",\"/guides/migration-v3\":\"Migrando da v3\",\"/guides/migration-v0x\":\"Migrando da v0.x\",\"/guides/testing\":\"Testando\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Da Direita para Esquerda\",\"/guides/localization\":\"Localização\",\"/discover-more\":\"Descubra mais\",\"/discover-more/showcase\":\"Demonstração\",\"/discover-more/related-projects\":\"Projetos Relacionados\",\"/discover-more/roadmap\":\"Planejamento\",\"/discover-more/backers\":\"Patrocinadores & Apoiadores\",\"/discover-more/vision\":\"Visão\",\"/discover-more/team\":\"Equipe\",\"/discover-more/community\":\"Comunidade\",\"/discover-more/changelog\":\"Histórico de Mudanças\",\"/discover-more/languages\":\"Idiomas\",\"/versions\":\"Versões\",\"/styles\":\"Estilos\",\"/styles/basics\":\"Noções Básicas\",\"/styles/advanced\":\"Avançado\",\"https://material-ui.com/store/\":\"Temas premium\",\"/components/material-icons\":\"Ícones Material\",\"/components/textarea-autosize\":\"Texto autoajustável\",\"/components/rating\":\"Avaliação\",\"/components/skeleton\":\"Skeleton\",\"/components/tree-view\":\"Visualização em árvore\",\"/customization/density\":\"Densidade\",\"/components/button-group\":\"Grupo de botões\",\"/components/floating-action-button\":\"Botão de ação flutuante\",\"/components/backdrop\":\"Backdrop\",\"/components/alert\":\"Alerta\",\"/components/pagination\":\"Paginação\"}}");

/***/ }),

/***/ "./translations/translations-ru.json":
/*!*******************************************!*\
  !*** ./translations/translations-ru.json ***!
  \*******************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"Если вы не против рекламы, связанной с технологиями, и хотите поддерживать Open Source, добавьте Material-UI в белый список своего блокиратора рекламы.\",\"albumDescr\":\"Адаптивный макет страницы альбома/галереи с выделенным блоком (hero unit) и подвалом (footer).\",\"albumTitle\":\"Альбом\",\"algoliaSearch\":\"Search\",\"blogDescr\":\"Сложный макет страницы блога. Поддержка Markdown любезно предоставлена markdown-to-jsx, но его легко заменить на другой.\",\"blogTitle\":\"Блог\",\"cdn\":\"или используйте CDN.\",\"changeLanguage\":\"Сменить язык\",\"checkoutDescr\":\"Макет пошаговой страницы оформления заказа. Измените количество шагов по своему усмотрению или сделайте их опциональными.\",\"checkoutTitle\":\"Страница оформления заказа\",\"close\":\"Закрыть\",\"codesandbox\":\"Редактировать в CodeSandbox\",\"copiedSource\":\"The source code has been copied.\",\"copiedSourceLink\":\"Link to the source code has been copied.\",\"copySource\":\"Копировать исходник\",\"copySourceLinkJS\":\"Скопировать ссылку на исходный код JavaScript\",\"copySourceLinkTS\":\"Скопировать ссылку на TypeScript источник\",\"dashboardDescr\":\"Минималистичная панель управления с панелью задач и небольшим графиком. График любезно предоставлен Recharts, но легко могут быть заменены на другие.\",\"dashboardTitle\":\"Панель управления\",\"decreaseSpacing\":\"decrease spacing\",\"demoToolbarLabel\":\"demo source\",\"diamondSponsors\":\"Алмазные спонсоры\",\"editPage\":\"Редактировать эту страницу\",\"editWebsiteColors\":\"Редактировать цветовую гамму сайта\",\"emojiLove\":\"Любовь\",\"emoojiWarning\":\"Внимание\",\"expandAll\":\"Развернуть все\",\"footerCommunity\":\"Сообщество\",\"footerCompany\":\"Company\",\"footerResources\":\"Ресурсы\",\"getProfessionalSupport\":\"Get Professional Support\",\"getStarted\":\"Начать\",\"github\":\"GitHub репозиторий\",\"headTitle\":\"Материал-интерфейс: популярный фреймворк React UI\",\"helpToTranslate\":\"Помогите нам с переводом\",\"hideFullSource\":\"Скрыть источник\",\"hideSource\":\"Скрыть исходник\",\"homeFooterRelease\":\"Текущая {{versionNumber}}. Выпущено под {{license}}.\",\"homeQuickWord\":\"Несколько слов от наших спонсоров:\",\"increaseSpacing\":\"increase spacing\",\"installation\":\"Инструкция по установке\",\"installButton\":\"Читать документацию по установке\",\"installDescr\":\"Установить исходные файлы Material-UI через npm. Мы позаботились о включение необходимых CSS.\",\"joinThese\":\"Присоединяйтесь к этим и другим замечательным организациям!\",\"letUsKnow\":\"Дайте нам знать!\",\"license\":\"Лицензия MIT\",\"likeMui\":\"Нравится Material-UI?\",\"loadFont\":\"Загрузить шрифт Roboto по умолчанию.\",\"mainNavigation\":\"Основное меню\",\"newest\":\"По новизне\",\"openDrawer\":\"Открыть панель навигации\",\"pageTOC\":\"Содержание\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"pricingDescr\":\"Быстро создайте эффективную таблицу цен для ваших потенциальных покупателей с использованием этого макета страницы.\",\"pricingTitle\":\"Цены\",\"resetDemo\":\"Reset demo\",\"resetDensity\":\"Reset density\",\"seeMore\":\"Ещё\",\"showFullSource\":\"Показать источник\",\"showJSSource\":\"Показать источник TypeScript\",\"showSource\":\"Показать исходник\",\"showTSSource\":\"Показать источник TypeScript\",\"signInDescr\":\"Простая страница входа.\",\"signInSideDescr\":\"Простая страница входа в систему.\",\"signInSideTitle\":\"Сторона входа\",\"signInTitle\":\"Авторизация\",\"signUpDescr\":\"Простая страница регистрации.\",\"signUpTitle\":\"Зарегистрируйтесь\",\"skipToContent\":\"Перейти к контенту\",\"sourceCode\":\"Исходный код\",\"spacingUnit\":\"Интервал\",\"stackblitz\":\"Редактировать в StackBlitz (только JS)\",\"stars\":\"Звезды на GitHub\",\"stickyFooterDescr\":\"Крепите футер к нижней части окна, когда высота содержимого небольшая.\",\"stickyFooterTitle\":\"Липкий футер\",\"strapline\":\"React компоненты для быстрой и легкой веб-разработки. Создайте свой собственный дизайн или начните с Material Design.\",\"tableOfContents\":\"Содержание\",\"thanks\":\"Спасибо!\",\"themes\":\"Премиум темы\",\"themesButton\":\"Смотреть темы\",\"themesDescr\":\"Take your project to the next level with premium themes from our official marketplace – all built on Material-UI.\",\"toggleNotifications\":\"Toggle notifications panel\",\"toggleRTL\":\"Переключить справа-налево/слева-направо\",\"toggleTheme\":\"Переключить светлую/темную тему\",\"traffic\":\"Трафик\",\"usage\":\"Использование\",\"usageButton\":\"Читать документацию\",\"usageDescr\":\"Компоненты Material-UI работают без какой-либо дополнительной настройки и не загрязняют глобальную область.\",\"useDarkTheme\":\"Use dark theme\",\"useHighDensity\":\"Apply higher density via props\",\"usingMui\":\"Используете ли вы Material-UI?\",\"viewGitHub\":\"Посмотреть исходник на GitHub\",\"visit\":\"Посетить веб-сайт\",\"whosUsing\":\"Кто использует Material-UI?\",\"initialFocusLabel\":\"A generic container that is programmatically focused to test keyboard navigation of our components.\",\"resetFocus\":\"Reset focus to test keyboard navigation\",\"pages\":{\"/getting-started\":\"Приступая к работе\",\"/getting-started/installation\":\"Инструкция по установке\",\"/getting-started/usage\":\"Использование\",\"/getting-started/example-projects\":\"Примеры проектов\",\"/getting-started/templates\":\"Шаблоны\",\"/getting-started/learn\":\"Узнать\",\"/getting-started/faq\":\"Часто задаваемые вопросы (FAQ)\",\"/getting-started/supported-components\":\"Поддерживаемые компоненты\",\"/getting-started/supported-platforms\":\"Поддерживаемые платформы\",\"/getting-started/support\":\"Support\",\"/components\":\"Компоненты\",\"/components/about-the-lab\":\"About The Lab\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"About The Lab\",\"/components/app-bar\":\"Панель навигации\",\"/components/autocomplete\":\"Автодополнение\",\"/components/avatars\":\"Avatar\",\"/components/badges\":\"Badge\",\"/components/basic-inputs\":\"Basic Inputs\",\"/components/bottom-navigation\":\"Bottom Navigation (Нижняя панель навигации)\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Хлебные крошки\",\"/components/buttons\":\"Button (кнопки)\",\"/components/cards\":\"Card (карточка)\",\"/components/checkboxes\":\"Checkbox\",\"/components/chips\":\"Chip\",\"/components/container\":\"Container\",\"/components/content\":\"Контент\",\"/components/css-baseline\":\"CSS Baseline\",\"/components/data-display\":\"Отображение данных\",\"/components/dialogs\":\"Dialog\",\"/components/dividers\":\"Divider\",\"/components/drawers\":\"Панель\",\"/components/expansion-panels\":\"Expansion Panel (панель расширения)\",\"/components/feedback\":\"Обратная связь\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Сеть изображений\",\"/components/icons\":\"Иконки\",\"/components/inputs\":\"Поля ввода\",\"/components/lab\":\"Лаборатория\",\"/components/layout\":\"Расположение\",\"/components/links\":\"Link\",\"/components/lists\":\"Список\",\"/components/menus\":\"Menu\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Навигацию\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"Прочее\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Дата / время\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Прогресс\",\"/components/progress-validation\":\"Обратная связь\",\"/components/radio-buttons\":\"Радиокнопка\",\"/components/selects\":\"Select (Список)\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbar\",\"/components/speed-dial\":\"Speed Dial\",\"/components/steppers\":\"Stepper\",\"/components/surfaces\":\"Surfaces\",\"/components/switches\":\"Switch (переключатель)\",\"/components/tables\":\"Table (tаблица)\",\"/components/tabs\":\"Вкладки\",\"/components/text-fields\":\"Text Field (Текстовое поле)\",\"/components/toggle-button\":\"Кнопка-переключатель\",\"/components/tooltips\":\"Tooltip (подсказки)\",\"/components/transfer-list\":\"Transfer List\",\"/components/transitions\":\"Transições\",\"/components/typography\":\"Оформление текста\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Утилиты\",\"/css-in-js\":\"Стили\",\"/css-in-js/basics\":\"Основы\",\"/css-in-js/advanced\":\"Дополнительные параметры\",\"/system\":\"Система\",\"/system/basics\":\"Основы\",\"/system/borders\":\"Границы\",\"/system/display\":\"Дисплей\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Палитра\",\"/system/positions\":\"Positions\",\"/system/shadows\":\"Тени\",\"/system/sizing\":\"Sizing\",\"/system/spacing\":\"Интервал\",\"/system/typography\":\"Оформление текста\",\"/customization\":\"Кастомизация\",\"/customization/theming\":\"Themes\",\"/customization/theme\":\"Темизация\",\"/customization/breakpoints\":\"Точки останова\",\"/customization/color\":\"Цвет\",\"/customization/palette\":\"Палитра\",\"/customization/type\":\"Тип (светлая / темная тема)\",\"/customization/typography\":\"Оформление текста\",\"/customization/spacing\":\"Интервал\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Глобальная настройка\",\"/customization/components\":\"Overrides\",\"/customization/default-theme\":\"Тема по умолчанию\",\"/guides\":\"Руководства\",\"/guides/api\":\"Подход к проектированию API\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Style Library Interoperability\",\"/guides/minimizing-bundle-size\":\"Minimizing Bundle Size\",\"/guides/composition\":\"Composition\",\"/guides/responsive-ui\":\"Адаптивный пользовательский интерфейс\",\"/guides/server-rendering\":\"Серверная отрисовка\",\"/guides/migration-v3\":\"Переход с v3\",\"/guides/migration-v0x\":\"Переход с v0.x\",\"/guides/testing\":\"Тестирование\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Справа налево\",\"/guides/localization\":\"Локализация\",\"/discover-more\":\"Узнайть больше\",\"/discover-more/showcase\":\"Showcase\",\"/discover-more/related-projects\":\"Связанные проекты\",\"/discover-more/roadmap\":\"План\",\"/discover-more/backers\":\"Спонсоры\",\"/discover-more/vision\":\"Vision\",\"/discover-more/team\":\"Команда\",\"/discover-more/community\":\"Сообщество\",\"/discover-more/changelog\":\"Журнал изменений\",\"/discover-more/languages\":\"Языки\",\"/versions\":\"Версии\",\"/styles\":\"Стили\",\"/styles/basics\":\"Основы\",\"/styles/advanced\":\"Дополнительные параметры\",\"https://material-ui.com/store/\":\"Премиум темы\",\"/components/material-icons\":\"Material Иконки\",\"/components/textarea-autosize\":\"Textarea Autosize\",\"/components/rating\":\"Рейтинг\",\"/components/skeleton\":\"Скелет\",\"/components/tree-view\":\"Иерархическое представление\",\"/customization/density\":\"Density\",\"/components/button-group\":\"Button Group\",\"/components/floating-action-button\":\"Floating Action Button\",\"/components/backdrop\":\"Backdrop\",\"/components/alert\":\"Alert\",\"/components/pagination\":\"Pagination\"}}");

/***/ }),

/***/ "./translations/translations-zh.json":
/*!*******************************************!*\
  !*** ./translations/translations-zh.json ***!
  \*******************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"如果您不介意与技术相关的广告，并且支持开源代码，请在你的 ad blocker 中将 Material-UI 设置为白名单。\",\"albumDescr\":\"这是一个包含了 hero 的单元和页脚的响应式相册 / 展览页面布局。\",\"albumTitle\":\"相册\",\"algoliaSearch\":\"搜索\",\"blogDescr\":\"这是一个精致的博客页面布局。这个 Markdown 由 markdown-to-jsx 提供支持，但是这也不难替换。\",\"blogTitle\":\"博客\",\"cdn\":\"或者您也可以使用 CDN。\",\"changeLanguage\":\"更改语言\",\"checkoutDescr\":\"这是一个逐步建立的支付页面布局。您可以根据具体需求来调整步骤，或者只采用部分步骤。\",\"checkoutTitle\":\"支付\",\"close\":\"关闭\",\"codesandbox\":\"在 CodeSandbox 中编辑\",\"copiedSource\":\"源代码已被复制。\",\"copiedSourceLink\":\"源代码的链接已被复制。\",\"copySource\":\"复制源代码\",\"copySourceLinkJS\":\"请将链接复制到 JavaScript 源代码\",\"copySourceLinkTS\":\"请将链接复制到 TypeScript 源代码\",\"dashboardDescr\":\"这是一个含有任务栏和迷你变体抽屉的最小化管理面板。这个图表由 Recharts 提供，但是很容易替换成其他的。\",\"dashboardTitle\":\"管理面板\",\"decreaseSpacing\":\"减少间距\",\"demoToolbarLabel\":\"demo 源\",\"diamondSponsors\":\"钻石赞助商\",\"editPage\":\"编辑此页面\",\"editWebsiteColors\":\"编辑网站的颜色\",\"emojiLove\":\"喜爱\",\"emoojiWarning\":\"警告\",\"expandAll\":\"展开全部\",\"footerCommunity\":\"社区\",\"footerCompany\":\"企业\",\"footerResources\":\"资源\",\"getProfessionalSupport\":\"获取专业客服\",\"getStarted\":\"快速上手\",\"github\":\"GitHub 存储库\",\"headTitle\":\"Material-UI：当下流行的 React UI 框架\",\"helpToTranslate\":\"来帮助我们翻译吧\",\"hideFullSource\":\"隐藏全部源代码\",\"hideSource\":\"隐藏源代码\",\"homeFooterRelease\":\"当前版本为 {{versionNumber}}。在 {{license}} 下发布。\",\"homeQuickWord\":\"来自我们的赞助商的一个简短概括：\",\"increaseSpacing\":\"增加间距\",\"installation\":\"安装\",\"installButton\":\"阅读安装文档\",\"installDescr\":\"您可以通过 npm 安装 Material-UI 的源码。我们会负责引入样式。\",\"joinThese\":\"一起加入这些或者其他的有名的组织中吧！\",\"letUsKnow\":\"请告诉我们吧！\",\"license\":\"MIT 许可证\",\"likeMui\":\"请帮助我们继续运行把\",\"loadFont\":\"加载默认的 Roboto 字体。\",\"mainNavigation\":\"主导航\",\"newest\":\"最新的\",\"openDrawer\":\"打开主导航栏\",\"pageTOC\":\"目录内容的页面\",\"praise\":\"给 Material-UI 点赞\",\"praiseDescr\":\"以下是一些我们用户的看法。\",\"pricingDescr\":\"使用此页面布局，您可以快速的为潜在客户创建一个高效的价格表。\",\"pricingTitle\":\"定价\",\"resetDemo\":\"重置 demo\",\"resetDensity\":\"重置密度\",\"seeMore\":\"查看更多\",\"showFullSource\":\"显示全部源代码\",\"showJSSource\":\"显示 JavaScript 源代码\",\"showSource\":\"查看源代码\",\"showTSSource\":\"显示 TypeScript 源代码\",\"signInDescr\":\"这是一个简单的登录页面。\",\"signInSideDescr\":\"一个简单的侧边登录页面\",\"signInSideTitle\":\"侧边页登录\",\"signInTitle\":\"登录\",\"signUpDescr\":\"一个简单的注册页面\",\"signUpTitle\":\"注册\",\"skipToContent\":\"跳转到内容\",\"sourceCode\":\"源代码\",\"spacingUnit\":\"间隔单元\",\"stackblitz\":\"在 StackBlitz 中编辑（仅限JS）\",\"stars\":\"GitHub 点赞数\",\"stickyFooterDescr\":\"当页面内容比较简短的时候，在可视区域的底端附加上一个页脚。\",\"stickyFooterTitle\":\"Sticky footer\",\"strapline\":\"React 组件用于更快速、更简便的 web 开发。你也可以建立你自己的设计系统，或者从 Material Design 开始。\",\"tableOfContents\":\"目录\",\"thanks\":\"感谢！\",\"themes\":\"高级版主题\",\"themesButton\":\"浏览主题\",\"themesDescr\":\"试一试我们的商城中的高级主题吧——它们均以 Material-UI 为基础，它们可以让你的项目更上一层楼。\",\"toggleNotifications\":\"切换通知面板\",\"toggleRTL\":\"从右到左 / 从左到右切换 \",\"toggleTheme\":\"在light（亮色）和dark（暗色）主题中切换\",\"traffic\":\"流量\",\"usage\":\"使用\",\"usageButton\":\"探索文档\",\"usageDescr\":\"Material-UI 组件无需任何额外的设置即可使用，并且不会影响全局变量。\",\"useDarkTheme\":\"使用暗色主题\",\"useHighDensity\":\"通过 props 来实现更高的密度值\",\"usingMui\":\"您在使用 Material-UI 吗？\",\"viewGitHub\":\"在 GitHub 中查看源代码\",\"visit\":\"访问网站\",\"whosUsing\":\"谁在使用 Material-UI 呢？\",\"initialFocusLabel\":\"一个旨在测试我们的组件的键盘导航功能的程序化的通用容器\",\"resetFocus\":\"重置焦点以测试键盘导航功能\",\"pages\":{\"/getting-started\":\"快速上手\",\"/getting-started/installation\":\"安装\",\"/getting-started/usage\":\"使用\",\"/getting-started/example-projects\":\"项目实战\",\"/getting-started/templates\":\"模板\",\"/getting-started/learn\":\"学习\",\"/getting-started/faq\":\"常见问题解答\",\"/getting-started/supported-components\":\"支持的组件\",\"/getting-started/supported-platforms\":\"支持的平台\",\"/getting-started/support\":\"获得我们的支持\",\"/components\":\"Components 组件\",\"/components/about-the-lab\":\"关于 Lab\",\"/components/click-away-listener\":\"Click Away Listener 他处点击监听器\",\"/component/about\":\"关于 Lab\",\"/components/app-bar\":\"App Bar 应用栏\",\"/components/autocomplete\":\"Autocomplete 自动补全\",\"/components/avatars\":\"Avatar 头像\",\"/components/badges\":\"Badge 徽标数\",\"/components/basic-inputs\":\"基本的输入框\",\"/components/bottom-navigation\":\"Bottom Navigation 底部导航栏\",\"/components/box\":\"Box 分组\",\"/components/breadcrumbs\":\"Breadcrumbs 面包屑导航\",\"/components/buttons\":\"Button 按钮\",\"/components/cards\":\"Card 卡片\",\"/components/checkboxes\":\"Checkbox 多选框\",\"/components/chips\":\"Chip 纸片组件\",\"/components/container\":\"Container 容器\",\"/components/content\":\"Content 内容\",\"/components/css-baseline\":\"CSS Baseline 基线\",\"/components/data-display\":\"Data Display 数据展示\",\"/components/dialogs\":\"Dialog 对话框\",\"/components/dividers\":\"Divider 分隔线\",\"/components/drawers\":\"Drawer 抽屉\",\"/components/expansion-panels\":\"Expansion Panel 拓展面板\",\"/components/feedback\":\"Feedback 用户反馈\",\"/components/grid\":\"Grid 栅格\",\"/components/hidden\":\"Hidden 隐藏\",\"/components/grid-list\":\"Grid List 网格列表\",\"/components/icons\":\"Icons 图标\",\"/components/inputs\":\"Inputs 输入框\",\"/components/lab\":\"Lab 实验室\",\"/components/layout\":\"Layout 布局\",\"/components/links\":\"Link 链接\",\"/components/lists\":\"List 列表\",\"/components/menus\":\"Menu 菜单\",\"/components/modal\":\"Modal 模态框\",\"/components/navigation\":\"Navigation 导航栏\",\"/components/no-ssr\":\"没有 SSR\",\"/components/other\":\"其他\",\"/components/paper\":\"Paper 纸张\",\"/components/pickers\":\"Date/Time 日期/时间\",\"/components/popover\":\"Popover 弹出框\",\"/components/popper\":\"Popper 弹出提示工具\",\"/components/portal\":\"Portal 传送门\",\"/components/progress\":\"Progress 进度条\",\"/components/progress-validation\":\"Feedback 用户反馈\",\"/components/radio-buttons\":\"Radio 单选框\",\"/components/selects\":\"Select 选择器\",\"/components/slider\":\"Slider 滑块\",\"/components/snackbars\":\"Snackbar 消息条\",\"/components/speed-dial\":\"Speed Dial 快速拨号\",\"/components/steppers\":\"Stepper 步骤条\",\"/components/surfaces\":\"Surfaces 表面展示\",\"/components/switches\":\"Switch 开关\",\"/components/tables\":\"Table 表格\",\"/components/tabs\":\"Tabs 选项卡\",\"/components/text-fields\":\"TextField 文本框\",\"/components/toggle-button\":\"Toggle Button 切换按钮\",\"/components/tooltips\":\"Tooltip 提示\",\"/components/transfer-list\":\"Transfer List 传递列表\",\"/components/transitions\":\"Transitions 过渡动画\",\"/components/typography\":\"Typography 文字铸排\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utils 工具包\",\"/css-in-js\":\"Styles 样式\",\"/css-in-js/basics\":\"Basics 基本\",\"/css-in-js/advanced\":\"Advanced 进阶\",\"/system\":\"System 系统\",\"/system/basics\":\"Basics 基础\",\"/system/borders\":\"Borders 边框属性\",\"/system/display\":\"Display 显示属性\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Palette 调色\",\"/system/positions\":\"Positions 位置\",\"/system/shadows\":\"Shadows 阴影属性\",\"/system/sizing\":\"Sizing 大小\",\"/system/spacing\":\"Spacing 间距\",\"/system/typography\":\"Typography 文字铸排\",\"/customization\":\"Customization 个性化\",\"/customization/theming\":\"Overview 概览\",\"/customization/theme\":\"Theming 主题\",\"/customization/breakpoints\":\"Breakpoints 断点\",\"/customization/color\":\"Color 颜色\",\"/customization/palette\":\"Palette 调色\",\"/customization/type\":\"类型（浅色/深色主题）\",\"/customization/typography\":\"Typography 文字铸排\",\"/customization/spacing\":\"Spacing 间距\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Globals 全局变量\",\"/customization/components\":\"Components 组件\",\"/customization/default-theme\":\"Default Theme 默认主题\",\"/guides\":\"指南\",\"/guides/api\":\"API 设计方法\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"样式库的互通性\",\"/guides/minimizing-bundle-size\":\"最小化打包文件大小\",\"/guides/composition\":\"Composition 组合\",\"/guides/responsive-ui\":\"响应式 UI\",\"/guides/server-rendering\":\"服务器端渲染\",\"/guides/migration-v3\":\"从v3版本迁移\",\"/guides/migration-v0x\":\"从 v0.x 版本迁移\",\"/guides/testing\":\"测试\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"源文语言从右至左读\",\"/guides/localization\":\"Localization 本地化\",\"/discover-more\":\"发现更多\",\"/discover-more/showcase\":\"展示\",\"/discover-more/related-projects\":\"相关的项目\",\"/discover-more/roadmap\":\"产品规划\",\"/discover-more/backers\":\"赞助商和支持者\",\"/discover-more/vision\":\"愿景\",\"/discover-more/team\":\"团队\",\"/discover-more/community\":\"社区\",\"/discover-more/changelog\":\"更新日志\",\"/discover-more/languages\":\"语言\",\"/versions\":\"版本\",\"/styles\":\"Styles 样式表单\",\"/styles/basics\":\"Basics 基础\",\"/styles/advanced\":\"Advanced 高级\",\"https://material-ui.com/store/\":\"高级版主题\",\"/components/material-icons\":\"Material Icons 图标\",\"/components/textarea-autosize\":\"Textarea Autosize 多行文本框自适应\",\"/components/rating\":\"Rating 评分\",\"/components/skeleton\":\"Skeleton 骨架屏\",\"/components/tree-view\":\"Tree View 树视图\",\"/customization/density\":\"Density 间距\",\"/components/button-group\":\"Button groups 按钮组\",\"/components/floating-action-button\":\"Floating Action Buttons 提升动作按钮\",\"/components/backdrop\":\"Backdrop 背景板\",\"/components/alert\":\"Alert 警告提示\",\"/components/pagination\":\"Pagination 分页\"}}");

/***/ }),

/***/ "./translations/translations.json":
/*!****************************************!*\
  !*** ./translations/translations.json ***!
  \****************************************/
/*! exports provided: adblock, albumDescr, albumTitle, algoliaSearch, blogDescr, blogTitle, cdn, changeLanguage, checkoutDescr, checkoutTitle, close, codesandbox, copiedSource, copiedSourceLink, copySource, copySourceLinkJS, copySourceLinkTS, dashboardDescr, dashboardTitle, decreaseSpacing, demoToolbarLabel, diamondSponsors, editPage, editWebsiteColors, emojiLove, emoojiWarning, expandAll, footerCommunity, footerCompany, footerResources, getProfessionalSupport, getStarted, github, headTitle, helpToTranslate, hideFullSource, hideSource, homeFooterRelease, homeQuickWord, increaseSpacing, installation, installButton, installDescr, joinThese, letUsKnow, license, likeMui, loadFont, mainNavigation, newest, openDrawer, pageTOC, praise, praiseDescr, pricingDescr, pricingTitle, resetDemo, resetDensity, seeMore, showFullSource, showJSSource, showSource, showTSSource, signInDescr, signInSideDescr, signInSideTitle, signInTitle, signUpDescr, signUpTitle, skipToContent, sourceCode, spacingUnit, stackblitz, stars, stickyFooterDescr, stickyFooterTitle, strapline, tableOfContents, thanks, themes, themesButton, themesDescr, toggleNotifications, toggleRTL, toggleTheme, traffic, usage, usageButton, usageDescr, useDarkTheme, useHighDensity, usingMui, viewGitHub, visit, whosUsing, initialFocusLabel, resetFocus, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"adblock\":\"If you don't mind tech related ads (no tracking or remarketing), and want to keep us running, please whitelist Material-UI in your blocker.\",\"albumDescr\":\"A responsive album / gallery page layout with a hero unit and footer.\",\"albumTitle\":\"Album\",\"algoliaSearch\":\"Search\",\"blogDescr\":\"A sophisticated blog page layout. Markdown support is courtesy of markdown-to-jsx but is easily replaced.\",\"blogTitle\":\"Blog\",\"cdn\":\"or use a CDN.\",\"changeLanguage\":\"Change language\",\"checkoutDescr\":\"A step-by-step checkout page layout. Adapt the number of steps to suit your needs, or make steps optional.\",\"checkoutTitle\":\"Checkout\",\"close\":\"Close\",\"codesandbox\":\"Edit in CodeSandbox\",\"copiedSource\":\"The source code has been copied.\",\"copiedSourceLink\":\"Link to the source code has been copied.\",\"copySource\":\"Copy the source\",\"copySourceLinkJS\":\"Copy link to JavaScript source\",\"copySourceLinkTS\":\"Copy link to TypeScript source\",\"dashboardDescr\":\"A minimal dashboard with taskbar and mini variant draw. The chart is courtesy of Recharts, but it is simple to substitute an alternative.\",\"dashboardTitle\":\"Dashboard\",\"decreaseSpacing\":\"decrease spacing\",\"demoToolbarLabel\":\"demo source\",\"diamondSponsors\":\"Diamond Sponsors\",\"editPage\":\"Edit this page\",\"editWebsiteColors\":\"Edit website colors\",\"emojiLove\":\"Love\",\"emoojiWarning\":\"Warning\",\"expandAll\":\"Expand all\",\"footerCommunity\":\"Community\",\"footerCompany\":\"Company\",\"footerResources\":\"Resources\",\"getProfessionalSupport\":\"Get Professional Support\",\"getStarted\":\"Get Started\",\"github\":\"GitHub repository\",\"headTitle\":\"Material-UI: A popular React UI framework\",\"helpToTranslate\":\"Help to translate\",\"hideFullSource\":\"Hide the full source\",\"hideSource\":\"Hide the source\",\"homeFooterRelease\":\"Currently {{versionNumber}}. Released under the {{license}}.\",\"homeQuickWord\":\"A quick word from our sponsors:\",\"increaseSpacing\":\"increase spacing\",\"installation\":\"Installation\",\"installButton\":\"Read installation docs\",\"installDescr\":\"Install Material-UI's source files via npm. We take care of injecting the CSS needed.\",\"joinThese\":\"Join these and other great organisations!\",\"letUsKnow\":\"Let us know!\",\"license\":\"MIT License\",\"likeMui\":\"Help us keep running\",\"loadFont\":\"Load the default Roboto font.\",\"mainNavigation\":\"Main navigation\",\"newest\":\"Newest\",\"openDrawer\":\"Open main navigation\",\"pageTOC\":\"Page table of contents\",\"praise\":\"Praise for Material-UI\",\"praiseDescr\":\"Here's what some of our users are saying.\",\"pricingDescr\":\"Quickly build an effective pricing table for your potential customers with this page layout.\",\"pricingTitle\":\"Pricing\",\"resetDemo\":\"Reset demo\",\"resetDensity\":\"Reset density\",\"seeMore\":\"See more\",\"showFullSource\":\"Show the full source\",\"showJSSource\":\"Show JavaScript source\",\"showSource\":\"Show the source\",\"showTSSource\":\"Show TypeScript source\",\"signInDescr\":\"A simple Sign In page.\",\"signInSideDescr\":\"A simple Sign In side page.\",\"signInSideTitle\":\"Sign-in side\",\"signInTitle\":\"Sign In\",\"signUpDescr\":\"A simple Sign Up page.\",\"signUpTitle\":\"Sign Up\",\"skipToContent\":\"Skip to content\",\"sourceCode\":\"Source code\",\"spacingUnit\":\"Spacing unit\",\"stackblitz\":\"Edit in StackBlitz (JS only)\",\"stars\":\"GitHub stars\",\"stickyFooterDescr\":\"Attach a footer to the bottom of the viewport when page content is short.\",\"stickyFooterTitle\":\"Sticky footer\",\"strapline\":\"React components for faster and easier web development. Build your own design system, or start with Material Design.\",\"tableOfContents\":\"Contents\",\"thanks\":\"Thank you!\",\"themes\":\"Premium themes\",\"themesButton\":\"Browse themes\",\"themesDescr\":\"Take your project to the next level with premium themes from our store – all built on Material-UI.\",\"toggleNotifications\":\"Toggle notifications panel\",\"toggleRTL\":\"Toggle right-to-left/left-to-right\",\"toggleTheme\":\"Toggle light/dark theme\",\"traffic\":\"Traffic\",\"usage\":\"Usage\",\"usageButton\":\"Explore the docs\",\"usageDescr\":\"Material-UI components work without any additional setup, and don't pollute the global scope.\",\"useDarkTheme\":\"Use dark theme\",\"useHighDensity\":\"Apply higher density via props\",\"usingMui\":\"Are you using Material-UI?\",\"viewGitHub\":\"View the source on GitHub\",\"visit\":\"Visit the website\",\"whosUsing\":\"Who's using Material-UI?\",\"initialFocusLabel\":\"A generic container that is programmatically focused to test keyboard navigation of our components.\",\"resetFocus\":\"Reset focus to test keyboard navigation\",\"pages\":{\"/getting-started\":\"Getting Started\",\"/getting-started/installation\":\"Installation\",\"/getting-started/usage\":\"Usage\",\"/getting-started/example-projects\":\"Example Projects\",\"/getting-started/templates\":\"Templates\",\"/getting-started/learn\":\"Learn\",\"/getting-started/faq\":\"FAQs\",\"/getting-started/supported-components\":\"Supported Components\",\"/getting-started/supported-platforms\":\"Supported Platforms\",\"/getting-started/support\":\"Support\",\"/components\":\"Components\",\"/components/about-the-lab\":\"About The Lab\",\"/components/click-away-listener\":\"Click Away Listener\",\"/component/about\":\"About The Lab\",\"/components/app-bar\":\"App Bar\",\"/components/autocomplete\":\"Autocomplete\",\"/components/avatars\":\"Avatars\",\"/components/badges\":\"Badges\",\"/components/basic-inputs\":\"Basic Inputs\",\"/components/bottom-navigation\":\"Bottom Navigation\",\"/components/box\":\"Box\",\"/components/breadcrumbs\":\"Breadcrumbs\",\"/components/buttons\":\"Buttons\",\"/components/cards\":\"Cards\",\"/components/checkboxes\":\"Checkboxes\",\"/components/chips\":\"Chips\",\"/components/container\":\"Container\",\"/components/content\":\"Content\",\"/components/css-baseline\":\"CSS Baseline\",\"/components/data-display\":\"Data Display\",\"/components/dialogs\":\"Dialogs\",\"/components/dividers\":\"Dividers\",\"/components/drawers\":\"Drawers\",\"/components/expansion-panels\":\"Expansion Panels\",\"/components/feedback\":\"Feedback\",\"/components/grid\":\"Grid\",\"/components/hidden\":\"Hidden\",\"/components/grid-list\":\"Grid List\",\"/components/icons\":\"Icons\",\"/components/inputs\":\"Inputs\",\"/components/lab\":\"Lab\",\"/components/layout\":\"Layout\",\"/components/links\":\"Links\",\"/components/lists\":\"Lists\",\"/components/menus\":\"Menus\",\"/components/modal\":\"Modal\",\"/components/navigation\":\"Navigation\",\"/components/no-ssr\":\"No SSR\",\"/components/other\":\"Other\",\"/components/paper\":\"Paper\",\"/components/pickers\":\"Date / Time\",\"/components/popover\":\"Popover\",\"/components/popper\":\"Popper\",\"/components/portal\":\"Portal\",\"/components/progress\":\"Progress\",\"/components/progress-validation\":\"Feedback\",\"/components/radio-buttons\":\"Radio Buttons\",\"/components/selects\":\"Selects\",\"/components/slider\":\"Slider\",\"/components/snackbars\":\"Snackbars\",\"/components/speed-dial\":\"Speed Dial\",\"/components/steppers\":\"Steppers\",\"/components/surfaces\":\"Surfaces\",\"/components/switches\":\"Switches\",\"/components/tables\":\"Tables\",\"/components/tabs\":\"Tabs\",\"/components/text-fields\":\"Text Fields\",\"/components/timeline\":\"Timeline\",\"/components/toggle-button\":\"Toggle Button\",\"/components/tooltips\":\"Tooltips\",\"/components/transfer-list\":\"Transfer List\",\"/components/transitions\":\"Transitions\",\"/components/typography\":\"Typography\",\"/components/use-media-query\":\"useMediaQuery\",\"/components/utils\":\"Utils\",\"/css-in-js\":\"Styles\",\"/css-in-js/basics\":\"Basics\",\"/css-in-js/advanced\":\"Advanced\",\"/system\":\"System\",\"/system/basics\":\"Basics\",\"/system/borders\":\"Borders\",\"/system/display\":\"Display\",\"/system/flexbox\":\"Flexbox\",\"/system/palette\":\"Palette\",\"/system/positions\":\"Positions\",\"/system/shadows\":\"Shadows\",\"/system/sizing\":\"Sizing\",\"/system/spacing\":\"Spacing\",\"/system/typography\":\"Typography\",\"/customization\":\"Customization\",\"/customization/theming\":\"Theming\",\"/customization/theme\":\"Theme\",\"/customization/breakpoints\":\"Breakpoints\",\"/customization/color\":\"Color\",\"/customization/palette\":\"Palette\",\"/customization/type\":\"Type (light / dark theme)\",\"/customization/typography\":\"Typography\",\"/customization/spacing\":\"Spacing\",\"/customization/z-index\":\"z-index\",\"/customization/globals\":\"Globals\",\"/customization/components\":\"Components\",\"/customization/default-theme\":\"Default Theme\",\"/guides\":\"Guides\",\"/guides/api\":\"API Design Approach\",\"/guides/typescript\":\"TypeScript\",\"/guides/interoperability\":\"Style Library Interoperability\",\"/guides/minimizing-bundle-size\":\"Minimizing Bundle Size\",\"/guides/composition\":\"Composition\",\"/guides/responsive-ui\":\"Responsive UI\",\"/guides/server-rendering\":\"Server Rendering\",\"/guides/migration-v3\":\"Migration From v3\",\"/guides/migration-v0x\":\"Migration From v0.x\",\"/guides/testing\":\"Testing\",\"/guides/flow\":\"Flow\",\"/guides/right-to-left\":\"Right-to-left\",\"/guides/localization\":\"Localization\",\"/discover-more\":\"Discover More\",\"/discover-more/showcase\":\"Showcase\",\"/discover-more/related-projects\":\"Related Projects\",\"/discover-more/roadmap\":\"Roadmap\",\"/discover-more/backers\":\"Sponsors & Backers\",\"/discover-more/vision\":\"Vision\",\"/discover-more/team\":\"Team\",\"/discover-more/community\":\"Community\",\"/discover-more/changelog\":\"Changelog\",\"/discover-more/languages\":\"Languages\",\"/versions\":\"Versions\",\"/styles\":\"Styles\",\"/styles/basics\":\"Basics\",\"/styles/advanced\":\"Advanced\",\"https://material-ui.com/store/\":\"Premium themes\",\"/components/material-icons\":\"Material Icons\",\"/components/textarea-autosize\":\"Textarea Autosize\",\"/components/rating\":\"Rating\",\"/components/skeleton\":\"Skeleton\",\"/components/tree-view\":\"Tree View\",\"/customization/density\":\"Density\",\"/components/button-group\":\"Button Group\",\"/components/floating-action-button\":\"Floating Action Button\",\"/components/backdrop\":\"Backdrop\",\"/components/alert\":\"Alert\",\"/components/pagination\":\"Pagination\",\"/system/screen-readers\":\"Screen Readers\",\"/customization/transitions\":\"Transitions\",\"/guides/migration-v4\":\"Migration From v4\",\"https://medium.com/material-ui\":\"Blog\"}}");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "accept-language":
/*!**********************************!*\
  !*** external "accept-language" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("accept-language");

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

/***/ "jss-rtl":
/*!**************************!*\
  !*** external "jss-rtl" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "lodash/camelCase":
/*!***********************************!*\
  !*** external "lodash/camelCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),

/***/ "lodash/find":
/*!******************************!*\
  !*** external "lodash/find" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),

/***/ "lodash/upperFirst":
/*!************************************!*\
  !*** external "lodash/upperFirst" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map