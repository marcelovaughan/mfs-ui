"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const t = tslib_1.__importStar(require("../../types"));
const typeString = 'UnionNode';
function unionNode(types) {
    const flatTypes = [];
    flattenTypes(types);
    function flattenTypes(nodes) {
        nodes.forEach((x) => {
            if (isUnionNode(x)) {
                flattenTypes(x.types);
            }
            else {
                flatTypes.push(x);
            }
        });
    }
    return uniqueUnionTypes({
        type: typeString,
        types: flatTypes,
    });
}
exports.unionNode = unionNode;
function isUnionNode(node) {
    return node.type === typeString;
}
exports.isUnionNode = isUnionNode;
function uniqueUnionTypes(node) {
    return {
        type: node.type,
        types: lodash_1.default.uniqBy(node.types, (x) => {
            if (t.isLiteralNode(x)) {
                return x.value;
            }
            if (t.isInstanceOfNode(x)) {
                return `${x.type}.${x.instance}`;
            }
            return x.type;
        }),
    };
}
exports.uniqueUnionTypes = uniqueUnionTypes;
//# sourceMappingURL=union.js.map