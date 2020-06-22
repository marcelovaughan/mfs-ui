webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../packages/material-ui/src/styles */ "../packages/material-ui/src/styles/index.js");
/* harmony import */ var _packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../packages/material-ui/src/Typography */ "../packages/material-ui/src/Typography/index.js");
/* harmony import */ var _packages_material_ui_src_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../packages/material-ui/src/Button */ "../packages/material-ui/src/Button/index.js");
/* harmony import */ var _packages_material_ui_src_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../packages/material-ui/src/Container */ "../packages/material-ui/src/Container/index.js");
/* harmony import */ var _src_pages_landing_Steps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/pages/landing/Steps */ "./src/pages/landing/Steps.js");
/* harmony import */ var _src_pages_landing_Themes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/pages/landing/Themes */ "./src/pages/landing/Themes.js");
/* harmony import */ var _src_pages_landing_QuickWord__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/pages/landing/QuickWord */ "./src/pages/landing/QuickWord.js");
/* harmony import */ var _src_pages_landing_Sponsors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/pages/landing/Sponsors */ "./src/pages/landing/Sponsors.js");
/* harmony import */ var _src_pages_landing_Users__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/pages/landing/Users */ "./src/pages/landing/Users.js");
/* harmony import */ var _src_pages_landing_Quotes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/pages/landing/Quotes */ "./src/pages/landing/Quotes.js");
/* harmony import */ var _src_pages_landing_Pro__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/pages/landing/Pro */ "./src/pages/landing/Pro.js");
/* harmony import */ var _src_modules_components_AppFooter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/modules/components/AppFooter */ "./src/modules/components/AppFooter.js");
/* harmony import */ var _src_modules_components_AppFrame__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/modules/components/AppFrame */ "./src/modules/components/AppFrame.js");
/* harmony import */ var _src_modules_components_Link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/modules/components/Link */ "./src/modules/components/Link.js");
/* harmony import */ var _src_modules_components_Head__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/modules/components/Head */ "./src/modules/components/Head.js");
/* harmony import */ var _src_modules_utils_loadScript__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../src/modules/utils/loadScript */ "./src/modules/utils/loadScript.js");





var _this = undefined,
    _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/docs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



















var dependenciesLoaded = false;

function loadDependencies() {
  if (dependenciesLoaded) {
    return;
  }

  dependenciesLoaded = true;
  Object(_src_modules_utils_loadScript__WEBPACK_IMPORTED_MODULE_22__["default"])('https://buttons.github.io/buttons.js', document.querySelector('head'));
  Object(_src_modules_utils_loadScript__WEBPACK_IMPORTED_MODULE_22__["default"])('https://platform.twitter.com/widgets.js', document.querySelector('head'));
}

var useStyles = Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      flex: '1 0 100%'
    },
    hero: {
      paddingTop: theme.spacing(8),
      color: theme.palette.primary.main
    },
    content: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8)
    }, theme.breakpoints.up('md'), {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
      flexDirection: 'row',
      alignItems: 'flex-start',
      textAlign: 'left'
    }),
    title: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      marginLeft: -12,
      whiteSpace: 'nowrap',
      letterSpacing: '.7rem',
      textIndent: '.7rem',
      fontWeight: theme.typography.fontWeightLight
    }, theme.breakpoints.only('xs'), {
      fontSize: 28
    }),
    logo: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      flexShrink: 0,
      width: 120,
      height: 120,
      marginBottom: theme.spacing(2)
    }, theme.breakpoints.up('md'), {
      marginRight: theme.spacing(8),
      width: 195,
      height: 175
    }),
    button: {
      marginTop: theme.spacing(4)
    },
    social: {
      padding: theme.spacing(2, 0),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 21,
      boxSizing: 'content-box',
      '& a': {
        color: theme.palette.background.paper
      }
    },
    github: {
      width: 105,
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: theme.spacing(1),
      '& span': {
        display: 'flex'
      }
    },
    twitter: {
      width: 160,
      display: 'flex'
    }
  };
}, {
  name: 'LandingPage'
});
var GettingStartedLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (props, ref) {
  return __jsx(_src_modules_components_Link__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    href: "/getting-started/installation",
    naked: true,
    ref: ref
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 10
    }
  }));
});
function LandingPage(props) {
  var sponsorsProps = props.sponsorsProps;
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    loadDependencies();
  }, []);
  var t = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.options.t;
  });
  var classes = useStyles();
  return __jsx(_src_modules_components_AppFrame__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(_src_modules_components_Head__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }), __jsx("main", {
    id: "main-content",
    tabIndex: "-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.hero,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_src_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    maxWidth: "md",
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/static/logo_raw.svg",
    alt: "",
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx(_packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h3",
    component: "h1",
    color: "inherit",
    gutterBottom: true,
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, 'MFS-UI'), __jsx(_packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5",
    component: "p",
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, t('strapline')), __jsx(_packages_material_ui_src_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: GettingStartedLink,
    className: classes.button,
    variant: "outlined",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, t('getStarted'))))), __jsx(_src_pages_landing_Steps__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }), __jsx(_src_pages_landing_Themes__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }), __jsx(_src_pages_landing_Quotes__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }), __jsx(_src_pages_landing_Users__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  })), __jsx(_src_modules_components_AppFooter__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  })), __jsx("script", {
    type: "application/ld+json" // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: "\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Organization\",\n  \"name\": \"Material-UI\",\n  \"url\": \"https://material-ui.com/\",\n  \"logo\": \"https://material-ui.com/static/logo.png\",\n  \"sameAs\": [\n    \"https://twitter.com/materialUI\",\n    \"https://github.com/mui-org/material-ui\",\n    \"https://opencollective.com/material-ui\"\n  ]\n}\n          "
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }));
}
LandingPage.propTypes = {
  sponsorsProps: prop_types__WEBPACK_IMPORTED_MODULE_5__["object"].isRequired
};
LandingPage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_src_pages_landing_Sponsors__WEBPACK_IMPORTED_MODULE_14__["getInitialProps"])();

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            sponsorsProps: _context.t0
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

/***/ })

})
//# sourceMappingURL=index.js.2817af91b05b4629dbf7.hot-update.js.map