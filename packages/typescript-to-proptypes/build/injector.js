"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const babel = tslib_1.__importStar(require("@babel/core"));
const babelTypes = tslib_1.__importStar(require("@babel/types"));
const generator_1 = require("./generator");
const uuid_1 = require("uuid");
/**
 * Injects the PropTypes from `parse` into the provided JavaScript code
 * @param propTypes Result from `parse` to inject into the JavaScript code
 * @param target The JavaScript code to add the PropTypes to
 * @param options Options controlling the final result
 */
function inject(propTypes, target, options = {}) {
    if (propTypes.body.length === 0) {
        return target;
    }
    const propTypesToInject = new Map();
    const { plugins: babelPlugins = [], ...babelOptions } = options.babelOptions || {};
    const result = babel.transformSync(target, {
        plugins: [
            require.resolve('@babel/plugin-syntax-class-properties'),
            require.resolve('@babel/plugin-syntax-jsx'),
            plugin(propTypes, options, propTypesToInject),
            ...(babelPlugins || []),
        ],
        configFile: false,
        babelrc: false,
        retainLines: true,
        ...babelOptions,
    });
    let code = result && result.code;
    if (!code) {
        return null;
    }
    // Replace the placeholders with the generated prop-types
    // Workaround for issues with comments getting removed and malformed
    propTypesToInject.forEach((value, key) => {
        code = code.replace(key, `\n\n${value}\n\n`);
    });
    return code;
}
exports.inject = inject;
function plugin(propTypes, options = {}, mapOfPropTypes) {
    const { includeUnusedProps = false, reconcilePropTypes = (_prop, _previous, generated) => generated, removeExistingPropTypes = false, ...otherOptions } = options;
    const shouldInclude = (data) => {
        if (options.shouldInclude) {
            const result = options.shouldInclude(data);
            if (result !== undefined) {
                return result;
            }
        }
        return includeUnusedProps ? true : data.usedProps.includes(data.prop.name);
    };
    let importName = '';
    let needImport = false;
    let alreadyImported = false;
    let originalPropTypesPath = null;
    const previousPropTypesSource = new Map();
    return {
        visitor: {
            Program: {
                enter(path, state) {
                    if (!path.node.body.some((n) => {
                        if (babelTypes.isImportDeclaration(n) &&
                            n.source.value === 'prop-types' &&
                            n.specifiers.length) {
                            importName = n.specifiers[0].local.name;
                            alreadyImported = true;
                            return true;
                        }
                    })) {
                        importName = 'PropTypes';
                    }
                    path.get('body').forEach((nodePath) => {
                        const { node } = nodePath;
                        if (babelTypes.isExpressionStatement(node) &&
                            babelTypes.isAssignmentExpression(node.expression, { operator: '=' }) &&
                            babelTypes.isMemberExpression(node.expression.left) &&
                            babelTypes.isIdentifier(node.expression.left.property, { name: 'propTypes' })) {
                            originalPropTypesPath = nodePath;
                            if (babelTypes.isObjectExpression(node.expression.right)) {
                                const { code } = state.file;
                                node.expression.right.properties.forEach((property) => {
                                    if (babelTypes.isObjectProperty(property)) {
                                        const validatorSource = code.slice(property.value.start, property.value.end);
                                        previousPropTypesSource.set(property.key.name, validatorSource);
                                    }
                                });
                            }
                        }
                    });
                },
                exit(path) {
                    if (alreadyImported || !needImport)
                        return;
                    const propTypesImport = babel.template.ast(`import ${importName} from 'prop-types'`);
                    const firstImport = path
                        .get('body')
                        .find((nodePath) => babelTypes.isImportDeclaration(nodePath.node));
                    // Insert import after the first one to avoid issues with comment flags
                    if (firstImport) {
                        firstImport.insertAfter(propTypesImport);
                    }
                    else {
                        path.node.body = [propTypesImport, ...path.node.body];
                    }
                },
            },
            FunctionDeclaration(path) {
                const { node } = path;
                // Prevent visiting again
                if (node.hasBeenVisited) {
                    path.skip();
                    return;
                }
                if (!node.id)
                    return;
                const props = propTypes.body.find((prop) => prop.name === node.id.name);
                if (!props)
                    return;
                // Prevent visiting again
                node.hasBeenVisited = true;
                path.skip();
                const prop = node.params[0];
                injectPropTypes({
                    nodeName: node.id.name,
                    usedProps: babelTypes.isIdentifier(prop) || babelTypes.isObjectPattern(prop)
                        ? getUsedProps(path, prop)
                        : [],
                    path: path,
                    props,
                });
            },
            VariableDeclarator(path) {
                const { node } = path;
                // Prevent visiting again
                if (node.hasBeenVisited) {
                    path.skip();
                    return;
                }
                if (!babelTypes.isIdentifier(node.id))
                    return;
                const nodeName = node.id.name;
                const props = propTypes.body.find((prop) => prop.name === nodeName);
                if (!props)
                    return;
                if (babelTypes.isArrowFunctionExpression(node.init) ||
                    babelTypes.isFunctionExpression(node.init)) {
                    getFromProp(node.init.params[0]);
                }
                else if (babelTypes.isCallExpression(node.init)) {
                    // x = react.memo(props => <div/>)
                    const arg = node.init.arguments[0];
                    if (babelTypes.isArrowFunctionExpression(arg) || babelTypes.isFunctionExpression(arg)) {
                        getFromProp(arg.params[0]);
                    }
                }
                function getFromProp(prop) {
                    // Prevent visiting again
                    node.hasBeenVisited = true;
                    path.skip();
                    injectPropTypes({
                        path: path.parentPath,
                        usedProps: babelTypes.isIdentifier(prop) || babelTypes.isObjectPattern(prop)
                            ? getUsedProps(path, prop)
                            : [],
                        props: props,
                        nodeName,
                    });
                }
            },
            ClassDeclaration(path) {
                const { node } = path;
                // Prevent visiting again
                if (node.hasBeenVisited) {
                    path.skip();
                    return;
                }
                if (!babelTypes.isIdentifier(node.id))
                    return;
                const nodeName = node.id.name;
                const props = propTypes.body.find((prop) => prop.name === nodeName);
                if (!props)
                    return;
                // Prevent visiting again
                node.hasBeenVisited = true;
                path.skip();
                injectPropTypes({
                    nodeName,
                    usedProps: getUsedProps(path, undefined),
                    path: path,
                    props,
                });
            },
        },
    };
    function injectPropTypes(options) {
        const { path, props, usedProps, nodeName } = options;
        const source = generator_1.generate(props, {
            ...otherOptions,
            importedName: importName,
            previousPropTypesSource,
            reconcilePropTypes,
            shouldInclude: (prop) => shouldInclude({ component: props, prop, usedProps }),
        });
        if (source.length === 0) {
            return;
        }
        needImport = true;
        const placeholder = `const a${uuid_1.v4().replace(/\-/g, '_')} = null;`;
        mapOfPropTypes.set(placeholder, source);
        if (removeExistingPropTypes && originalPropTypesPath !== null) {
            originalPropTypesPath.replaceWith(babel.template.ast(placeholder));
        }
        else if (babelTypes.isExportNamedDeclaration(path.parent)) {
            path.insertAfter(babel.template.ast(`export { ${nodeName} };`));
            path.insertAfter(babel.template.ast(placeholder));
            path.parentPath.replaceWith(path.node);
        }
        else if (babelTypes.isExportDefaultDeclaration(path.parent)) {
            path.insertAfter(babel.template.ast(`export default ${nodeName};`));
            path.insertAfter(babel.template.ast(placeholder));
            path.parentPath.replaceWith(path.node);
        }
        else {
            path.insertAfter(babel.template.ast(placeholder));
        }
    }
}
/**
 * Gets used props from path
 * @param rootPath The path to search for uses of rootNode
 * @param rootNode The node to start the search, if undefined searches for `this.props`
 */
function getUsedProps(rootPath, rootNode) {
    const usedProps = [];
    getUsedPropsInternal(rootNode);
    return usedProps;
    function getUsedPropsInternal(node) {
        if (node && babelTypes.isObjectPattern(node)) {
            node.properties.forEach((x) => {
                if (babelTypes.isObjectProperty(x)) {
                    if (babelTypes.isStringLiteral(x.key)) {
                        usedProps.push(x.key.value);
                    }
                    else {
                        usedProps.push(x.key.name);
                    }
                }
                else if (babelTypes.isIdentifier(x.argument)) {
                    getUsedPropsInternal(x.argument);
                }
            });
        }
        else {
            rootPath.traverse({
                VariableDeclarator(path) {
                    const init = path.node.init;
                    if ((node
                        ? babelTypes.isIdentifier(init, { name: node.name })
                        : babelTypes.isMemberExpression(init) &&
                            babelTypes.isThisExpression(init.object) &&
                            babelTypes.isIdentifier(init.property, { name: 'props' })) &&
                        babelTypes.isObjectPattern(path.node.id)) {
                        getUsedPropsInternal(path.node.id);
                    }
                },
                MemberExpression(path) {
                    if ((node
                        ? babelTypes.isIdentifier(path.node.object, { name: node.name })
                        : babelTypes.isMemberExpression(path.node.object) &&
                            babelTypes.isMemberExpression(path.node.object.object) &&
                            babelTypes.isThisExpression(path.node.object.object.object) &&
                            babelTypes.isIdentifier(path.node.object.object.property, { name: 'props' })) &&
                        babelTypes.isIdentifier(path.node.property)) {
                        usedProps.push(path.node.property.name);
                    }
                },
            });
        }
    }
}
//# sourceMappingURL=injector.js.map