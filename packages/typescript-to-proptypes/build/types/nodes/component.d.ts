import { Node, DefinitionHolder } from './baseNodes';
import { PropTypeNode } from './proptype';
export interface ComponentNode extends DefinitionHolder {
    name: string;
    propsFilename?: string;
}
export declare function componentNode(name: string, types: PropTypeNode[], propsFilename: string | undefined): ComponentNode;
export declare function isComponentNode(node: Node): node is ComponentNode;
