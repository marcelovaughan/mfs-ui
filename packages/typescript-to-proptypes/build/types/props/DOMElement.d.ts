import { Node } from '../nodes/baseNodes';
interface DOMElementNode extends Node {
    optional?: boolean;
}
export declare function DOMElementNode(optional?: boolean): DOMElementNode;
export declare function isDOMElementNode(node: Node): node is DOMElementNode;
export {};
