webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/modules/components/AppFooter.js":
/*!*********************************************!*\
  !*** ./src/modules/components/AppFooter.js ***!
  \*********************************************/
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
/* harmony import */ var _trendmicro_react_interpolate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trendmicro/react-interpolate */ "../node_modules/@trendmicro/react-interpolate/lib/index.js");
/* harmony import */ var _trendmicro_react_interpolate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_trendmicro_react_interpolate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../packages/material-ui/src/styles */ "../packages/material-ui/src/styles/index.js");
/* harmony import */ var _packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Typography */ "../packages/material-ui/src/Typography/index.js");
/* harmony import */ var _packages_material_ui_src_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Grid */ "../packages/material-ui/src/Grid/index.js");
/* harmony import */ var _packages_material_ui_src_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Container */ "../packages/material-ui/src/Container/index.js");
/* harmony import */ var _packages_material_ui_src_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../packages/material-ui/src/Divider */ "../packages/material-ui/src/Divider/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Link */ "./src/modules/components/Link.js");

var _jsxFileName = "/home/marcelo.faria/Documentos/b2w/msf-ui/docs/src/modules/components/AppFooter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* eslint-disable material-ui/no-hardcoded-labels */












var styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing(6)
    },
    footer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: theme.spacing(3, 0)
    }, theme.breakpoints.up('sm'), {
      padding: theme.spacing(8, 0)
    }),
    logo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
      '& img': {
        width: 28,
        height: 22,
        marginRight: theme.spacing(1.5)
      }
    },
    list: {
      marginBottom: theme.spacing(4),
      '& h3': {
        fontWeight: theme.typography.fontWeightMedium
      },
      '& ul': {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      '& li': {
        padding: '6px 0',
        color: theme.palette.text.secondary
      }
    },
    version: {
      marginTop: theme.spacing(3)
    }
  };
};

function AppFooter(props) {
  var classes = props.classes;
  var userLanguage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.options.userLanguage;
  });
  var languagePrefix = userLanguage === 'en' ? '' : "/".concat(userLanguage);
  var t = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.options.t;
  });
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_packages_material_ui_src_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(_packages_material_ui_src_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("footer", {
    className: classes.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_packages_material_ui_src_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(_packages_material_ui_src_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/logo_raw.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "body1",
    color: "inherit",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "MFS-UI"))), __jsx(_packages_material_ui_src_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 6,
    sm: 3,
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h2",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, t('footerCommunity')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "https://github.com/mui-org/material-ui",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, "GitHub")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "https://twitter.com/MaterialUI",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, "Twitter")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "https://stackoverflow.com/questions/tagged/material-ui",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, "StackOverflow")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "/discover-more/team/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, t('pages./discover-more/team'))))), __jsx(_packages_material_ui_src_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 6,
    sm: 3,
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx(_packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h2",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, t('footerResources')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "/getting-started/support/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, t('pages./getting-started/support'))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "https://medium.com/material-ui/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, t('blogTitle'))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "/components/material-icons/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, t('pages./components/material-icons'))))), __jsx(_packages_material_ui_src_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 6,
    sm: 3,
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx(_packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h2",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, t('footerCompany')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "/company/about/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, "About")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "/company/contact/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, "Contact Us")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "body2",
    href: "/company/jobs/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }, "Jobs"))))), __jsx(_packages_material_ui_src_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.version,
    color: "textSecondary",
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx(_trendmicro_react_interpolate__WEBPACK_IMPORTED_MODULE_4___default.a, {
    replacement: {
      versionNumber: __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "inherit",
        href: "https://material-ui.com".concat(languagePrefix, "/versions/"),
        "aria-label": "v".concat("4.10.2", ". View versions page."),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 19
        }
      }, "v".concat("4.10.2")),
      license: __jsx(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "inherit",
        href: "https://github.com/mui-org/material-ui/blob/master/LICENSE",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 19
        }
      }, t('license'))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, t('homeFooterRelease')), ' Copyright © ', new Date().getFullYear(), ' Material-UI. '))));
}

AppFooter.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_packages_material_ui_src_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(AppFooter));

/***/ })

})
//# sourceMappingURL=index.js.9257c4fdda209055edcf.hot-update.js.map