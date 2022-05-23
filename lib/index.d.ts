interface Levels {
    info: string;
    warn: string;
    error: string;
    debug: string;
}
declare type Options = {
    level: string;
    trace: string[];
    stackTraceDepth: number;
    timestamp: string | null | Partial<Levels>;
} & Levels;
/**
 * Default options for the logs.
 */
declare const options: Options;
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
export declare function useTimestamp(timestamp: Options["timestamp"], level: "info" | "warn" | "error" | "debug"): string;
export declare function formatDate(date: Date, ts: string): string;
export {};
