"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = transformer;
var entryModuleToFlatten = ['BottomNavigation', 'BottomNavigationAction', 'Card', 'CardActions', 'CardContent', 'CardHeader', 'CardMedia', 'CircularProgress', 'ClickAwayListener', 'Collapse', 'Dialog', 'DialogActions', 'DialogContent', 'DialogContentText', 'DialogTitle', 'ExpansionPanel', 'ExpansionPanelActions', 'ExpansionPanelDetails', 'ExpansionPanelSummary', 'Fade', 'Form', 'FormControl', 'FormControlLabel', 'FormGroup', 'FormHelperText', 'FormLabel', 'GridList', 'GridListTile', 'Grow', 'Input', 'InputLabel', 'LinearProgress', 'List', 'ListItem', 'ListItemAvatar', 'ListItemIcon', 'ListItemSecondaryAction', 'ListItemText', 'ListSubheader', 'Menu', 'MenuItem', 'Progress', 'Radio', 'RadioGroup', 'Slide', 'Step', 'StepButton', 'StepContent', 'Stepper', 'Stepper', 'Tab', 'Table', 'TableBody', 'TableCell', 'TableFooter', 'TableHead', 'TablePagination', 'TableRow', 'Tabs', 'withMobileDialog', 'withWidth', 'Zoom'];
var keepSpecifiers = ['withWidth'];

function transformer(fileInfo, api, options) {
  var j = api.jscodeshift;
  var hasModifications = false;
  var printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true
  };
  var importModule = options.importModule || '@material-ui/core';
  var targetModule = options.targetModule || '@material-ui/core';
  var root = j(fileInfo.source);
  var importRegExp = new RegExp("^".concat(importModule, "/(.+)$"));
  root.find(j.ImportDeclaration).forEach(function (path) {
    var importPath = path.value.source.value;
    var entryModule = importPath.match(importRegExp); // Remove non-Material-UI imports

    if (!entryModule) {
      return;
    }

    entryModule = entryModule[1].split('/');
    entryModule = entryModule[entryModule.length - 1]; // No need to flatten

    if (!entryModuleToFlatten.includes(entryModule)) {
      return;
    }

    hasModifications = true;

    if (keepSpecifiers.includes(entryModule)) {
      path.value.source.value = "".concat(targetModule, "/").concat(entryModule);
      return;
    }

    path.node.specifiers.forEach(function (specifier) {
      var localName = specifier.local.name;
      var importedName = specifier.imported ? specifier.imported.name : null;

      if (!importedName) {
        var importStatement = j.importDeclaration([j.importDefaultSpecifier(j.identifier(localName))], j.literal("".concat(targetModule, "/").concat(entryModule)));
        j(path).insertBefore(importStatement);
      } else {
        var _importStatement = j.importDeclaration([j.importDefaultSpecifier(j.identifier(localName))], j.literal("".concat(targetModule, "/").concat(importedName)));

        j(path).insertBefore(_importStatement);
      }
    });
    path.prune();
  });
  return hasModifications ? root.toSource(printOptions) : null;
}