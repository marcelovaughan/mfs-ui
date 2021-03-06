"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

var _ref = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
});

function FileDownload(props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], props, _ref);
}

FileDownload.muiName = 'SvgIcon';
var _default = FileDownload;
exports["default"] = _default;