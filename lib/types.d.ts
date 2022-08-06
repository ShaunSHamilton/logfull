export declare enum Colours {
    Black = "0m",
    Red = "1m",
    Green = "2m",
    Yellow = "3m",
    Blue = "4m",
    Magenta = "5m",
    Cyan = "6m",
    White = "7m"
}
export declare enum Ansi {
    Reset = "\u001B[0m",
    Bright = "\u001B[1m",
    Dim = "\u001B[2m",
    Italic = "\u001B[3m",
    Underline = "\u001B[4m",
    Blink = "\u001B[5m",
    FastBlink = "\u001B[6m",
    Reverse = "\u001B[7m",
    Hide = "\u001B[8m",
    Strike = "\u001B[9m",
    Foreground = "\u001B[3",
    Background = "\u001B[4"
}
/**
 * The minimum level of logging to output.
 */
export declare const LogLevel: {
    debug: number;
    info: number;
    warn: number;
    error: number;
};
export interface Levels {
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
}
export declare type Options = {
    /**
     * The minimum level of logging to output.
     * @options "debug" | "info" | "warn" | "error"
     * @default "info"
     */
    level: string;
    /**
     * Which logs to output the trace.
     *
     * @example ["debug", "info", "warn", "error"]
     *
     * @default []
     */
    trace: string[];
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
     * @type {string | null | {debug?: string, info?: string, warn?: string, error?: string}}
     *
     * @default "YYYY-MM-dd hh:mm:ss"
     */
    timestamp: string | null | Partial<Levels>;
} & Levels;
//# sourceMappingURL=types.d.ts.map