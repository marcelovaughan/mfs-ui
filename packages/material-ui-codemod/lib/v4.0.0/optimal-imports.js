"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = transformer;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _path = require("path");

var _getJSExports = _interopRequireDefault(require("../util/getJSExports"));

var _jscodeshiftAddImports = _interopRequireDefault(require("jscodeshift-add-imports"));

// istanbul ignore next
if (process.env.NODE_ENV === 'test') {
  var resolve = require.resolve;

  require.resolve = function (source) {
    return resolve(source.replace(/^@material-ui\/core\/es/, '../../../material-ui/src'));
  };
}

function transformer(fileInfo, api, options) {
  var j = api.jscodeshift;
  var importModule = options.importModule || '@material-ui/core';
  var targetModule = options.targetModule || '@material-ui/core';
  var printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true
  };
  var root = j(fileInfo.source);
  var importRegExp = new RegExp("^".concat(importModule, "/([^/]+/)+([^/]+)$"));
  var resultSpecifiers = new Map();

  var addSpecifier = function addSpecifier(source, specifier) {
    if (!resultSpecifiers.has(source)) {
      resultSpecifiers.set(source, []);
    }

    resultSpecifiers.get(source).push(specifier);
  };

  root.find(j.ImportDeclaration).forEach(function (path) {
    if (path.value.importKind && path.value.importKind !== 'value') return;
    var importPath = path.value.source.value.replace(/(index)?(\.js)?$/, '');
    var match = importPath.match(importRegExp);
    if (!match) return;
    var subpath = match[1].replace(/\/$/, '');
    if (/^(internal|test-utils)/.test(subpath)) return;
    var targetImportPath = "".concat(targetModule, "/").concat(subpath);
    var whitelist = (0, _getJSExports["default"])(require.resolve("".concat(importModule, "/es/").concat(subpath), {
      paths: [(0, _path.dirname)(fileInfo.path)]
    }));
    path.node.specifiers.forEach(function (specifier, index) {
      if (!path.node.specifiers.length) return;
      if (specifier.importKind && specifier.importKind !== 'value') return;
      if (specifier.type === 'ImportNamespaceSpecifier') return;
      var localName = specifier.local.name;

      switch (specifier.type) {
        case 'ImportNamespaceSpecifier':
          return;

        case 'ImportDefaultSpecifier':
          {
            var moduleName = match[2];
            if (!whitelist.has(moduleName)) return;
            addSpecifier(targetImportPath, j.importSpecifier(j.identifier(moduleName), j.identifier(localName)));
            path.get('specifiers', index).prune();
            break;
          }

        case 'ImportSpecifier':
          if (!whitelist.has(specifier.imported.name)) return;
          addSpecifier(targetImportPath, specifier);
          path.get('specifiers', index).prune();
          break;

        default:
          break;
      }
    });
    if (!path.node.specifiers.length) path.prune();
  });
  (0, _jscodeshiftAddImports["default"])(root, (0, _toConsumableArray2["default"])(resultSpecifiers.keys()).sort().map(function (source) {
    return j.importDeclaration(resultSpecifiers.get(source).sort(), j.stringLiteral(source));
  }));
  return root.toSource(printOptions);
}