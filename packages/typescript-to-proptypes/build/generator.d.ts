import * as t from './types';
export interface GenerateOptions {
    /**
     * Enable/disable the default sorting (ascending) or provide your own sort function
     * @default true
     */
    sortProptypes?: boolean | ((a: t.PropTypeNode, b: t.PropTypeNode) => 0 | -1 | 1);
    /**
     * The name used when importing prop-types
     * @default 'PropTypes'
     */
    importedName?: string;
    /**
     * Enable/disable including JSDoc comments
     * @default true
     */
    includeJSDoc?: boolean;
    /**
     * Previous source code of the validator for each prop type
     */
    previousPropTypesSource?: Map<string, string>;
    /**
     * Given the `prop`, the `previous` source of the validator and the `generated` source:
     * What source should be injected? `previous` is `undefined` if the validator
     * didn't exist before
     * @default Uses `generated` source
     */
    reconcilePropTypes?(proptype: t.PropTypeNode, previous: string | undefined, generated: string): string;
    /**
     * Control which PropTypes are included in the final result
     * @param proptype The current PropType about to be converted to text
     */
    shouldInclude?(proptype: t.PropTypeNode): boolean | undefined;
    /**
     * A comment that will be added to the start of the PropTypes code block
     * @example
     * foo.propTypes = {
     *  // Comment goes here
     * }
     */
    comment?: string;
    /**
     * Overrides the given `sortLiteralUnions` based on the proptype.
     * If `undefined` is returned the default `sortLiteralUnions` will be used.
     */
    getSortLiteralUnions?: (component: t.ComponentNode, propType: t.PropTypeNode) => ((a: t.LiteralNode, b: t.LiteralNode) => number) | undefined;
    /**
     * By default literals in unions are sorted by:
     * - numbers last, ascending
     * - anything else by their stringified value using localeCompare
     */
    sortLiteralUnions?: (a: t.LiteralNode, b: t.LiteralNode) => number;
    /**
     * The component of the given `node`.
     * Must be defined for anything but programs and components
     */
    component?: t.ComponentNode;
}
/**
 * Generates code from the given node
 * @param node The node to convert to code
 * @param options The options used to control the way the code gets generated
 */
export declare function generate(node: t.Node | t.PropTypeNode[], options?: GenerateOptions): string;
