"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
  fillOpacity: ".3",
  d: "M17 4h-3V2h-4v2H7v4h10V4z"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M7 8v14h10V8H7z"
})), 'Battery90Sharp');

exports["default"] = _default;