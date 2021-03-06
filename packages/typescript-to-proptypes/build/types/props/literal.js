"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeString = 'LiteralNode';
function literalNode(value, jsDoc) {
    return {
        type: typeString,
        value,
        jsDoc,
    };
}
exports.literalNode = literalNode;
function isLiteralNode(node) {
    return node.type === typeString;
}
exports.isLiteralNode = isLiteralNode;
//# sourceMappingURL=literal.js.map