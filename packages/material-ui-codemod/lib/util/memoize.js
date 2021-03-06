"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var memoize = function memoize(func) {
  var resolver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a) {
    return a;
  };
  var cache = new Map();
  return function () {
    var key = resolver.apply(void 0, arguments);
    if (cache.has(key)) return cache.get(key);
    var value = func.apply(void 0, arguments);
    cache.set(key, value);
    return value;
  };
};

var _default = memoize;
exports["default"] = _default;