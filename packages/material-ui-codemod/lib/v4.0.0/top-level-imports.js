"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = transformer;

var _jscodeshiftAddImports = _interopRequireDefault(require("jscodeshift-add-imports"));

function transformer(fileInfo, api, options) {
  var j = api.jscodeshift;
  var importModule = options.importModule || '@material-ui/core';
  var targetModule = options.targetModule || '@material-ui/core';
  var requirePath = importModule;

  if (process.env.NODE_ENV === 'test') {
    requirePath = requirePath.replace(/^@material-ui\/core/, '../../../material-ui/src');
  } // eslint-disable-next-line global-require, import/no-dynamic-require


  var whitelist = require(requirePath);

  var printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true
  };
  var root = j(fileInfo.source);
  var importRegExp = new RegExp("^".concat(importModule, "/(?:[^/]+/)*([^/]+)$"));
  var resultSpecifiers = [];
  root.find(j.ImportDeclaration).forEach(function (path) {
    if (!path.node.specifiers.length) return;
    if (path.value.importKind && path.value.importKind !== 'value') return;
    var importPath = path.value.source.value;
    var match = importPath.match(importRegExp);
    if (!match) return;
    if (importPath.includes('internal/')) return;
    path.node.specifiers.forEach(function (specifier, index) {
      if (specifier.importKind && specifier.importKind !== 'value') return;
      if (specifier.type === 'ImportNamespaceSpecifier') return;

      switch (specifier.type) {
        case 'ImportDefaultSpecifier':
          {
            var localName = specifier.local.name;
            var moduleName = match[1];
            if (whitelist[moduleName] == null) return;
            resultSpecifiers.push(j.importSpecifier(j.identifier(moduleName), j.identifier(localName)));
            path.get('specifiers', index).prune();
            break;
          }

        case 'ImportSpecifier':
          if (whitelist[specifier.imported.name] == null) return;
          resultSpecifiers.push(specifier);
          path.get('specifiers', index).prune();
          break;

        default:
          break;
      }
    });
    if (!path.node.specifiers.length) path.prune();
  });

  if (resultSpecifiers.length) {
    (0, _jscodeshiftAddImports["default"])(root, j.importDeclaration(resultSpecifiers, j.stringLiteral(targetModule)));
  }

  return root.toSource(printOptions);
}