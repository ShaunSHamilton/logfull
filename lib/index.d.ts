/**
 * The minimum level of logging to output.
 */
declare const LogLevel: {
    debug: number;
    info: number;
    warn: number;
    error: number;
};
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
    /**
     * The time format to use for timestamps.
     *
     * `null` disables timestamping.
     * A `string` enables given format for all levels.
     * Escape characters using `\`.
     *
     * Recognised formatters:
     * - `YYYY`: 4 digit year
     * - `YY`: 2 digit year
     * - `Mmm`: 3 letter month
     * - `MM`: 2 digit month
     * - `M`: Full month
     * - `Www`: 3 letter week day
     * - `W`: Full week day
     * - `dd`: 2 digit day
     * - `hh`: 2 digit hour
     * - `mm`: 2 digit minute
     * - `ss`: 2 digit second
     * - `SSS`: 3 digit millisecond
     * - `Z`: timezone offset
     *
     * @example {debug: "hh:mm:ss.SSS", info: "YYYY-MM-dd hh:mm:ss.SSS", warn: "W the dd of M in the year YYYY", error: "hh:mm:ss.SSS"}
     *
     * @default "YYYY-MM-dd hh:mm:ss.SSS"
     */
    timestamp: {
        debug: string;
        info: string;
        warn: string;
        error: string;
    };
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
declare type Timestamp = {
    [key in keyof typeof LogLevel]: string;
};
export declare function useTimestamp(timestamp: string | null | Timestamp, level: "info" | "warn" | "error" | "debug"): string;
export declare function formatDate(date: Date, ts: string): string;
export {};
