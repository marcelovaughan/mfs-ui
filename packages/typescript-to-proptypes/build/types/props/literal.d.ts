import { Node } from '../nodes/baseNodes';
export interface LiteralNode extends Node {
    value: unknown;
    jsDoc?: string;
}
export declare function literalNode(value: unknown, jsDoc?: string): LiteralNode;
export declare function isLiteralNode(node: Node): node is LiteralNode;
