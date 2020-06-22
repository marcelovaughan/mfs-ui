webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/modules/components/AppFrame.js":
/*!********************************************!*\
  !*** ./src/modules/components/AppFrame.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/next-server/lib/router/rewrite-url-for-export */ "../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");
/* harmony import */ var next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../packages/material-ui/src/styles */ "../packages/material-ui/src/styles/index.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "../node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _packages_material_ui_src_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../packages/material-ui/src/CssBaseline */ "../packages/material-ui/src/CssBaseline/index.js");
/* harmony import */ var _packages_material_ui_src_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Link */ "../packages/material-ui/src/Link/index.js");
/* harmony import */ var _packages_material_ui_src_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../packages/material-ui/src/AppBar */ "../packages/material-ui/src/AppBar/index.js");
/* harmony import */ var _packages_material_ui_src_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Toolbar */ "../packages/material-ui/src/Toolbar/index.js");
/* harmony import */ var _packages_material_ui_src_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../packages/material-ui/src/IconButton */ "../packages/material-ui/src/IconButton/index.js");
/* harmony import */ var _packages_material_ui_icons_src_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/Menu */ "../packages/material-ui-icons/src/Menu.js");
/* harmony import */ var _packages_material_ui_src_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Tooltip */ "../packages/material-ui/src/Tooltip/index.js");
/* harmony import */ var _packages_material_ui_src_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Button */ "../packages/material-ui/src/Button/index.js");
/* harmony import */ var _packages_material_ui_src_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Box */ "../packages/material-ui/src/Box/index.js");
/* harmony import */ var _packages_material_ui_src_NoSsr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../packages/material-ui/src/NoSsr */ "../packages/material-ui/src/NoSsr/index.js");
/* harmony import */ var _packages_material_ui_icons_src_Translate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/Translate */ "../packages/material-ui-icons/src/Translate.js");
/* harmony import */ var _packages_material_ui_icons_src_ExpandMore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/ExpandMore */ "../packages/material-ui-icons/src/ExpandMore.js");
/* harmony import */ var _packages_material_ui_src_Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Menu */ "../packages/material-ui/src/Menu/index.js");
/* harmony import */ var _packages_material_ui_src_MenuItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../packages/material-ui/src/MenuItem */ "../packages/material-ui/src/MenuItem/index.js");
/* harmony import */ var _packages_material_ui_src_Divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Divider */ "../packages/material-ui/src/Divider/index.js");
/* harmony import */ var _packages_material_ui_icons_src_InvertColors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/InvertColors */ "../packages/material-ui-icons/src/InvertColors.js");
/* harmony import */ var _packages_material_ui_icons_src_Brightness4__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/Brightness4 */ "../packages/material-ui-icons/src/Brightness4.js");
/* harmony import */ var _packages_material_ui_icons_src_Brightness7__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/Brightness7 */ "../packages/material-ui-icons/src/Brightness7.js");
/* harmony import */ var _packages_material_ui_icons_src_GitHub__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/GitHub */ "../packages/material-ui-icons/src/GitHub.js");
/* harmony import */ var _packages_material_ui_docs_src_NProgressBar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../packages/material-ui-docs/src/NProgressBar */ "../packages/material-ui-docs/src/NProgressBar/index.js");
/* harmony import */ var _packages_material_ui_icons_src_FormatTextdirectionLToR__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/FormatTextdirectionLToR */ "../packages/material-ui-icons/src/FormatTextdirectionLToR.js");
/* harmony import */ var _packages_material_ui_icons_src_FormatTextdirectionRToL__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../packages/material-ui-icons/src/FormatTextdirectionRToL */ "../packages/material-ui-icons/src/FormatTextdirectionRToL.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Link */ "./src/modules/components/Link.js");
/* harmony import */ var _AppDrawer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./AppDrawer */ "./src/modules/components/AppDrawer.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Notifications */ "./src/modules/components/Notifications.js");
/* harmony import */ var _MarkdownLinks__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./MarkdownLinks */ "./src/modules/components/MarkdownLinks.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../constants */ "./src/modules/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../utils/helpers */ "./src/modules/utils/helpers.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_utils_helpers__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ThemeContext */ "./src/modules/components/ThemeContext.js");
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./PageContext */ "./src/modules/components/PageContext.js");

var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/docs/src/modules/components/AppFrame.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





































var LOCALES = {
  zh: 'zh-CN',
  pt: 'pt-BR',
  es: 'es-ES'
};
var CROWDIN_ROOT_URL = 'https://translate.material-ui.com/project/material-ui-docs/';

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();
};

var AppSearch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./AppSearch */ "./src/modules/components/AppSearch.js"));
});

function DeferredAppSearch() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      mounted = _React$useState[0],
      setMounted = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setMounted(true);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("link", {
    rel: "preload",
    href: "https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css",
    as: "style",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), mounted ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Suspense, {
    fallback: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(AppSearch, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })) : null);
}

var styles = function styles(theme) {
  return {
    '@global': {
      '#main-content': {
        outline: 0
      }
    },
    root: {
      display: 'flex',
      backgroundColor: theme.palette.background.level1
    },
    grow: {
      flex: '1 1 auto'
    },
    skipNav: {
      position: 'fixed',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create('top', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.leavingScreen
      }),
      left: theme.spacing(2),
      top: theme.spacing(-10),
      zIndex: theme.zIndex.tooltip + 1,
      '&:focus': {
        top: theme.spacing(2),
        transition: theme.transitions.create('top', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      '@media print': {
        display: 'none'
      }
    },
    appBar: {
      color: theme.palette.type === 'light' ? null : '#fff',
      backgroundColor: theme.palette.type === 'light' ? null : theme.palette.background.level2,
      transition: theme.transitions.create('width')
    },
    language: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      margin: theme.spacing(0, 0.5, 0, 1),
      display: 'none'
    }, theme.breakpoints.up('md'), {
      display: 'block'
    }),
    appBarHome: {
      boxShadow: 'none'
    },
    appBarShift: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('lg'), {
      width: 'calc(100% - 240px)'
    }),
    drawer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('lg'), {
      flexShrink: 0,
      width: 240
    }),
    navIconHide: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('lg'), {
      display: 'none'
    })
  };
};

function AppFrame(props) {
  var _this = this;

  var children = props.children,
      classes = props.classes,
      _props$disableDrawer = props.disableDrawer,
      disableDrawer = _props$disableDrawer === void 0 ? false : _props$disableDrawer;
  var theme = Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var t = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.options.t;
  });
  var userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.options.userLanguage;
  });
  var crowdInLocale = LOCALES[userLanguage] || userLanguage;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      languageMenu = _React$useState2[0],
      setLanguageMenu = _React$useState2[1];

  var handleLanguageIconClick = function handleLanguageIconClick(event) {
    setLanguageMenu(event.currentTarget);
  };

  var handleLanguageMenuClose = function handleLanguageMenuClose(event) {
    if (event.currentTarget.nodeName === 'A') {
      document.cookie = "userLanguage=noDefault;path=/;max-age=31536000";
    }

    setLanguageMenu(null);
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      mobileOpen = _React$useState3[0],
      setMobileOpen = _React$useState3[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setMobileOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setMobileOpen(false);
  };

  var changeTheme = Object(_ThemeContext__WEBPACK_IMPORTED_MODULE_36__["useChangeTheme"])();

  var handleTogglePaletteType = function handleTogglePaletteType() {
    var paletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    changeTheme({
      paletteType: paletteType
    });
  };

  var handleToggleDirection = function handleToggleDirection() {
    changeTheme({
      direction: theme.direction === 'ltr' ? 'rtl' : 'ltr'
    });
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _pathnameToLanguage = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_35__["pathnameToLanguage"])(Object(next_dist_next_server_lib_router_rewrite_url_for_export__WEBPACK_IMPORTED_MODULE_5__["rewriteUrlForNextExport"])(router.asPath)),
      canonical = _pathnameToLanguage.canonical;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_PageContext__WEBPACK_IMPORTED_MODULE_37__["default"]),
      activePage = _React$useContext.activePage;

  var disablePermanent = false;
  var navIconClassName = '';
  var appBarClassName = classes.appBar;

  if ((activePage === null || activePage === void 0 ? void 0 : activePage.disableDrawer) === true || disableDrawer === true) {
    disablePermanent = true;
    appBarClassName += " ".concat(classes.appBarHome);
  } else {
    navIconClassName = classes.navIconHide;
    appBarClassName += " ".concat(classes.appBarShift);
  }

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, __jsx(_packages_material_ui_docs_src_NProgressBar__WEBPACK_IMPORTED_MODULE_27__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }), __jsx(_packages_material_ui_src_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }), __jsx(_packages_material_ui_src_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "secondary",
    className: classes.skipNav,
    href: "#main-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }, t('skipToContent')), __jsx(_MarkdownLinks__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }), __jsx(_packages_material_ui_src_AppBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: appBarClassName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx(_packages_material_ui_src_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx(_packages_material_ui_src_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": t('openDrawer'),
    onClick: handleDrawerOpen,
    className: navIconClassName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_icons_src_Menu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }), __jsx(DeferredAppSearch, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }), __jsx(_packages_material_ui_src_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: t('changeLanguage'),
    enterDelay: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_src_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    color: "inherit",
    "aria-owns": languageMenu ? 'language-menu' : undefined,
    "aria-haspopup": "true",
    "aria-label": t('changeLanguage'),
    onClick: handleLanguageIconClick,
    "data-ga-event-category": "header",
    "data-ga-event-action": "language",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, __jsx(_packages_material_ui_icons_src_Translate__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: classes.language,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, userLanguage === 'aa' ? 'Translating' : _constants__WEBPACK_IMPORTED_MODULE_34__["LANGUAGES_LABEL"].filter(function (language) {
    return language.code === userLanguage;
  })[0].text), __jsx(_packages_material_ui_icons_src_ExpandMore__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontSize: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }))), __jsx(_packages_material_ui_src_NoSsr__WEBPACK_IMPORTED_MODULE_17__["default"], {
    defer: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_src_Menu__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "language-menu",
    anchorEl: languageMenu,
    open: Boolean(languageMenu),
    onClose: handleLanguageMenuClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_34__["LANGUAGES_LABEL"].map(function (language) {
    return __jsx(_packages_material_ui_src_MenuItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      component: "a",
      "data-no-link": "true",
      href: language.code === 'en' ? canonical : "/".concat(language.code).concat(canonical),
      key: language.code,
      selected: userLanguage === language.code,
      onClick: handleLanguageMenuClose,
      lang: language.code,
      hrefLang: language.code,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }
    }, language.text);
  }), __jsx(_packages_material_ui_src_Box__WEBPACK_IMPORTED_MODULE_16__["default"], {
    my: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, __jsx(_packages_material_ui_src_Divider__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  })))), __jsx(_Notifications__WEBPACK_IMPORTED_MODULE_32__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }), __jsx(_packages_material_ui_src_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: t('editWebsiteColors'),
    enterDelay: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_src_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    "aria-label": t('editWebsiteColors'),
    component: _Link__WEBPACK_IMPORTED_MODULE_30__["default"],
    naked: true,
    href: "/customization/color/#playground",
    "data-ga-event-category": "header",
    "data-ga-event-action": "colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }
  }, __jsx(_packages_material_ui_icons_src_InvertColors__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 15
    }
  }))), __jsx(_packages_material_ui_src_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: t('github'),
    enterDelay: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_src_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "a",
    color: "inherit",
    href: "https://github.com/mui-org/material-ui",
    "aria-label": t('github'),
    "data-ga-event-category": "header",
    "data-ga-event-action": "github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx(_packages_material_ui_icons_src_GitHub__WEBPACK_IMPORTED_MODULE_26__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }))), __jsx(_packages_material_ui_src_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: t('toggleTheme'),
    enterDelay: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_src_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    onClick: handleTogglePaletteType,
    "aria-label": t('toggleTheme'),
    "data-ga-event-category": "header",
    "data-ga-event-action": "dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }, theme.palette.type === 'light' ? __jsx(_packages_material_ui_icons_src_Brightness4__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 49
    }
  }) : __jsx(_packages_material_ui_icons_src_Brightness7__WEBPACK_IMPORTED_MODULE_25__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 71
    }
  }))), __jsx(_packages_material_ui_src_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: t('toggleRTL'),
    key: theme.direction,
    enterDelay: 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_src_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    edge: "end",
    color: "inherit",
    onClick: handleToggleDirection,
    "aria-label": t('toggleRTL'),
    "data-ga-event-category": "header",
    "data-ga-event-action": "rtl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_packages_material_ui_icons_src_FormatTextdirectionLToR__WEBPACK_IMPORTED_MODULE_28__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }) : __jsx(_packages_material_ui_icons_src_FormatTextdirectionRToL__WEBPACK_IMPORTED_MODULE_29__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }))))), __jsx(_AppDrawer__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: disablePermanent ? '' : classes.drawer,
    disablePermanent: disablePermanent,
    onClose: handleDrawerClose,
    onOpen: handleDrawerOpen,
    mobileOpen: mobileOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 7
    }
  }), children);
}

AppFrame.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  disableDrawer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(AppFrame));

/***/ })

})
//# sourceMappingURL=index.js.68224e645652489efeac.hot-update.js.map