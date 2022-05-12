/**
 * Default options for the logs.
 */
declare const options: {
    /**
     * The minimum level of logging to output.
     * @options "debug" | "info" | "warn" | "error"
     * @default "info"
     */
    level: string;
    /**
     * @default "🔵 INFO: "
     */
    info: string;
    /**
     * @default "🟠 WARN: "
     */
    warn: string;
    /**
     * @default "🔴 ERROR: "
     */
    error: string;
    /**
     * @default "🟢 DEBUG: "
     */
    debug: string;
    /**
     * Which logs to output the trace.
     *
     * @example ["debug", "info", "warn", "error"]
     *
     * @default []
     */
    trace: any[];
    /**
     * The depth of the trace.
     *
     * **NOTE**: This uses the `Error.stackTraceLimit` property which is not supported on all browsers.
     *
     * @default 2
     */
    stackTraceDepth: number;
};
/**
 * Sets the options for the logs.
 *
 * @example
 * logover({ level: LogLevel.debug });
 *
 * @param ops Options to override the default options.
 */
export default function logover(ops?: Partial<typeof options>): void;
/**
 * Equivalent to `console.info`.
 * @param args The arguments to log.
 */
export declare function info(...args: any[]): void;
/**
 * Equivalent to `console.warn`.
 * @param args The arguments to log.
 */
export declare function warn(...args: any[]): void;
/**
 * Equivalent to `console.error`.
 * @param args The arguments to log.
 */
export declare function error(...args: any[]): void;
/**
 * Equivalent to `console.debug`.
 * @param args The arguments to log.
 */
export declare function debug(...args: any[]): void;
export {};
