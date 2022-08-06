import { Options } from "./types.js";
export declare class Logger {
    options: Options;
    constructor(ops?: Partial<Options>);
    /**
     * Equivalent to `console.info`.
     * @param args The arguments to log.
     */
    info(...args: any[]): void;
    /**
     * Equivalent to `console.warn`.
     * @param args The arguments to log.
     */
    warn(...args: any[]): void;
    /**
     * Equivalent to `console.error`.
     * @param args The arguments to log.
     */
    error(...args: any[]): void;
    /**
     * Equivalent to `console.debug`.
     * @param args The arguments to log.
     */
    debug(...args: any[]): void;
    /**
     * Sets the options for the logs.
     *
     * @example
     * logover.option = { level: LogLevel.debug };
     *
     * @param ops Options to override the default options.
     */
    set option(ops: Partial<Options>);
}
//# sourceMappingURL=logger.d.ts.map