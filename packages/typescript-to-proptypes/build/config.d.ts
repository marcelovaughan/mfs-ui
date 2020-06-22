import * as ts from 'typescript';
/**
 * Loads and parses a `tsconfig` file and returns a `ts.CompilerOptions` object
 * @param tsConfigPath The location for a `tsconfig.json` file
 */
export declare function loadConfig(tsConfigPath: string): ts.CompilerOptions;
