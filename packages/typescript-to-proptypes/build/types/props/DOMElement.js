"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeString = 'DOMElementNode';
function DOMElementNode(optional) {
    return {
        type: typeString,
        optional,
    };
}
exports.DOMElementNode = DOMElementNode;
function isDOMElementNode(node) {
    return node.type === typeString;
}
exports.isDOMElementNode = isDOMElementNode;
//# sourceMappingURL=DOMElement.js.map