"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

/**
 * Capitalize a string
 * @param {string} string
 */
function capitalize(string) {
  return string ? "".concat(string[0].toUpperCase()).concat(string.slice(1)) : string;
}
/**
 * Transform kebab-case icon name to PascalCase
 * e.g. access-alarm => AccessAlarm
 * @param {string} iconName
 */


function pascalize(iconName) {
  return iconName.split('-').map(capitalize).join('');
}
/**
 * Update all `svg-icons` import references to use `@material-ui/icons` package.
 * Find and replace string literal AST nodes to ensure all svg-icon paths get updated, regardless
 * of being in an import declaration, or a require() call, etc.
 * https://github.com/mui-org/material-ui/tree/master/packages/@material-ui/icons
 * @param {jscodeshift_api_object} j
 * @param {jscodeshift_ast_object} root
 */


function transformSVGIconImports(j, root) {
  var pathMatchRegex = /^material-ui\/svg-icons\/.+\/(.+)$/;
  root.find(j.Literal).filter(function (path) {
    return pathMatchRegex.test(path.node.value);
  }).forEach(function (path) {
    var _path$node$value$matc = path.node.value.match(pathMatchRegex),
        _path$node$value$matc2 = (0, _slicedToArray2["default"])(_path$node$value$matc, 2),
        iconName = _path$node$value$matc2[1]; // update to new path


    path.node.value = "@material-ui/icons/".concat(pascalize(iconName));
  });
}

module.exports = function transformer(fileInfo, api) {
  var j = api.jscodeshift;
  var root = j(fileInfo.source); // transforms

  transformSVGIconImports(j, root);
  return root.toSource({
    quote: 'single'
  });
};