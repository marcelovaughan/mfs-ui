"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M6.38 6L12 16l5.63-10z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"
})), 'DetailsTwoTone');

exports["default"] = _default;