"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeString = 'FunctionNode';
function functionNode() {
    return {
        type: typeString,
    };
}
exports.functionNode = functionNode;
function isFunctionNode(node) {
    return node.type === typeString;
}
exports.isFunctionNode = isFunctionNode;
//# sourceMappingURL=function.js.map