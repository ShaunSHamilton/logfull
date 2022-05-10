/**
 * Default options for the logs.
 */
declare const options: {
    /**
     * @default "info"
     */
    level: string | number;
    /**
     * @default "🔵INFO: "
     */
    info: string;
    /**
     * @default "🟠WARN: "
     */
    warn: string;
    /**
     * @default "🔴ERROR: "
     */
    error: string;
    /**
     * @default "🟢DEBUG: "
     */
    debug: string;
};
/**
 * Sets the options for the logs.
 *
 * @example
 * logover({ level: LogLevel.debug });
 *
 * @param ops Options to override the default options.
 */
export default function Logover(ops?: Partial<typeof options>): void;
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
