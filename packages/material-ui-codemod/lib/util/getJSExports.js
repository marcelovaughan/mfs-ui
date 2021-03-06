"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _memoize = _interopRequireDefault(require("./memoize"));

var _fs = require("fs");

var _core = require("@babel/core");

var _traverse = _interopRequireDefault(require("@babel/traverse"));

var getJSExports = (0, _memoize["default"])(function (file) {
  var result = new Set();
  var ast = (0, _core.parseSync)((0, _fs.readFileSync)(file, 'utf8'), {
    filename: file
  });
  (0, _traverse["default"])(ast, {
    ExportSpecifier: function ExportSpecifier(_ref) {
      var exported = _ref.node.exported;
      result.add(exported.name);
    }
  });
  return result;
});
var _default = getJSExports;
exports["default"] = _default;