import * as babel from '@babel/core';
import * as t from './types/index';
import { GenerateOptions } from './generator';
export declare type InjectOptions = {
    /**
     * By default all unused props are omitted from the result.
     * Set this to true to include them instead.
     */
    includeUnusedProps?: boolean;
    /**
     * By default existing PropTypes are left alone, set this to true
     * to have them removed before injecting the PropTypes
     */
    removeExistingPropTypes?: boolean;
    /**
     * Used to control which props are includes in the result
     * @return true to include the prop, false to skip it, or undefined to
     * use the default behaviour
     * @default includeUnusedProps ? true : data.usedProps.includes(data.prop.name)
     */
    shouldInclude?(data: {
        component: t.ComponentNode;
        prop: t.PropTypeNode;
        usedProps: string[];
    }): boolean | undefined;
    /**
     * You can override the order of literals in unions based on the proptype.
     *
     * By default literals in unions are sorted by:
     * - numbers last, ascending
     * - anything else by their stringified value using localeCompare
     * Note: The order of the literals as they "appear" in the typings cannot be preserved.
     * Sometimes the type checker preserves it, sometimes it doesn't.
     * By always returning 0 from the sort function you keep the order the type checker dictates.
     */
    getSortLiteralUnions?: (component: t.ComponentNode, propType: t.PropTypeNode) => ((a: t.LiteralNode, b: t.LiteralNode) => number) | undefined;
    /**
     * Options passed to babel.transformSync
     */
    babelOptions?: babel.TransformOptions;
} & Pick<GenerateOptions, 'sortProptypes' | 'includeJSDoc' | 'comment' | 'reconcilePropTypes'>;
/**
 * Injects the PropTypes from `parse` into the provided JavaScript code
 * @param propTypes Result from `parse` to inject into the JavaScript code
 * @param target The JavaScript code to add the PropTypes to
 * @param options Options controlling the final result
 */
export declare function inject(propTypes: t.ProgramNode, target: string, options?: InjectOptions): string | null;
