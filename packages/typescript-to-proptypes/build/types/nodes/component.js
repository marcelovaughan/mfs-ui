"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeString = 'ComponentNode';
function componentNode(name, types, propsFilename) {
    return {
        type: typeString,
        name: name,
        types: types || [],
        propsFilename,
    };
}
exports.componentNode = componentNode;
function isComponentNode(node) {
    return node.type === typeString;
}
exports.isComponentNode = isComponentNode;
//# sourceMappingURL=component.js.map