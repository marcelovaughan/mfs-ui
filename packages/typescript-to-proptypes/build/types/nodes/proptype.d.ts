import { Node } from './baseNodes';
export interface PropTypeNode extends Node {
    name: string;
    jsDoc?: string;
    propType: Node;
    filenames: Set<string>;
    /**
     * @internal
     */
    $$id: number | undefined;
}
export declare function propTypeNode(name: string, jsDoc: string | undefined, propType: Node, filenames: Set<string>, id: number | undefined): PropTypeNode;
export declare function isPropTypeNode(node: Node): node is PropTypeNode;
