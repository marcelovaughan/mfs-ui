"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _nprogress = _interopRequireDefault(require("nprogress"));

var _styles = require("@material-ui/core/styles");

var _NoSsr = _interopRequireDefault(require("@material-ui/core/NoSsr"));

var _utils = require("@material-ui/utils");

_nprogress["default"].configure({
  template: "\n    <div class=\"nprogress-bar\" role=\"bar\">\n      <dt></dt>\n      <dd></dd>\n    </div>\n  "
});

var styles = function styles(theme) {
  if (!theme.nprogress.color) {
    throw new Error('Material-UI: You need to provide a `theme.nprogress.color` property' + ' for using the `NProgressBar` component.');
  }

  return {
    '@global': {
      '#nprogress': {
        direction: 'ltr',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: theme.zIndex.tooltip,
        backgroundColor: '#e0e0e0',
        '& .nprogress-bar': {
          position: 'fixed',
          backgroundColor: theme.nprogress.color,
          top: 0,
          left: 0,
          right: 0,
          height: 2
        },
        '& dd, & dt': {
          position: 'absolute',
          top: 0,
          height: 2,
          boxShadow: "".concat(theme.nprogress.color, " 1px 0 6px 1px"),
          borderRadius: '100%',
          animation: 'mui-nprogress-pulse 2s ease-out 0s infinite'
        },
        '& dd': {
          opacity: 0.6,
          width: 20,
          right: 0,
          clip: 'rect(-6px,22px,14px,10px)'
        },
        '& dt': {
          opacity: 0.6,
          width: 180,
          right: -80,
          clip: 'rect(-6px,90px,14px,-6px)'
        }
      },
      '@keyframes mui-nprogress-pulse': {
        '30%': {
          opacity: 0.6
        },
        '60%': {
          opacity: 0
        },
        to: {
          opacity: 0.6
        }
      }
    }
  };
};

var GlobalStyles = (0, _styles.withStyles)(styles, {
  flip: false,
  name: 'MuiNProgressBar'
})(function () {
  return null;
});
/**
 * Elegant and ready to use wrapper on top of https://github.com/rstacruz/nprogress/.
 * The implementation is highly inspired by the YouTube one.
 */

var _ref = /*#__PURE__*/_react["default"].createElement(GlobalStyles, null);

function NProgressBar(props) {
  return /*#__PURE__*/_react["default"].createElement(_NoSsr["default"], null, props.children, _ref);
}

process.env.NODE_ENV !== "production" ? NProgressBar.propTypes = {
  children: _propTypes["default"].node
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? NProgressBar.propTypes = (0, _utils.exactProp)(NProgressBar.propTypes) : void 0;
}

var _default = NProgressBar;
exports["default"] = _default;