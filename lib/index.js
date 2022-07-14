import LogError from "./error";
/**
 * The minimum level of logging to output.
 */
const LogLevel = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};
/**
 * Default options for the logs.
 */
const options = {
    /**
     * The minimum level of logging to output.
     * @options "debug" | "info" | "warn" | "error"
     * @default "info"
     */
    level: "info",
    /**
     * @default "🔵 INFO: "
     */
    info: "🔵 INFO: ",
    /**
     * @default "🟠 WARN: "
     */
    warn: "🟠 WARN: ",
    /**
     * @default "🔴 ERROR: "
     */
    error: "🔴 ERROR: ",
    /**
     * @default "🟢 DEBUG: "
     */
    debug: "🟢 DEBUG: ",
    /**
     * Which logs to output the trace.
     *
     * @example ["debug", "info", "warn", "error"]
     *
     * @default []
     */
    trace: [],
    /**
     * The depth of the trace.
     *
     * **NOTE**: This uses the `Error.stackTraceLimit` property which is not supported on all browsers.
     *
     * @default 2
     */
    stackTraceDepth: 2,
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
    timestamp: {
        debug: "YYYY-MM-dd hh:mm:ss",
        info: "YYYY-MM-dd hh:mm:ss",
        warn: "YYYY-MM-dd hh:mm:ss",
        error: "YYYY-MM-dd hh:mm:ss",
    },
};
/**
 * Sets the options for the logs.
 *
 * @example
 * logover({ level: LogLevel.debug });
 *
 * @param ops Options to override the default options.
 */
export default function logover(ops) {
    if (ops) {
        Object.keys(ops).map((key) => {
            if (!options.hasOwnProperty(key)) {
                throw new LogError(`Logover \nUnknown option: ${key}`);
            }
            options[key] = ops[key];
        });
    }
}
/**
 * Equivalent to `console.info`.
 * @param args The arguments to log.
 */
export function info(...args) {
    if (LogLevel[options.level] <= LogLevel.info) {
        const timestamp = useTimestamp(options.timestamp, "info");
        console.info(options.info, timestamp, ...args);
        if (options.trace.includes("info")) {
            const error = new LogError("\x1b[36m[INFO] \x1b[0m");
            error.stackDepth = options.stackTraceDepth;
            console.log(error.stacks);
            console.log("");
        }
    }
}
/**
 * Equivalent to `console.warn`.
 * @param args The arguments to log.
 */
export function warn(...args) {
    if (LogLevel[options.level] <= LogLevel.warn) {
        const timestamp = useTimestamp(options.timestamp, "warn");
        console.warn(options.warn, timestamp, ...args);
        if (options.trace.includes("warn")) {
            const error = new LogError("\x1b[36m[WARN] \x1b[0m");
            error.stackDepth = options.stackTraceDepth;
            console.log(error.stacks);
            console.log("");
        }
    }
}
/**
 * Equivalent to `console.error`.
 * @param args The arguments to log.
 */
export function error(...args) {
    if (LogLevel[options.level] <= LogLevel.error) {
        const timestamp = useTimestamp(options.timestamp, "error");
        console.error(options.error, timestamp, ...args);
        if (options.trace.includes("error")) {
            const error = new LogError("\x1b[36m[ERROR] \x1b[0m");
            error.stackDepth = options.stackTraceDepth;
            console.log(error.stacks);
            console.log("");
        }
    }
}
/**
 * Equivalent to `console.debug`.
 * @param args The arguments to log.
 */
export function debug(...args) {
    if (LogLevel[options.level] === LogLevel.debug) {
        const timestamp = useTimestamp(options.timestamp, "debug");
        console.debug(options.debug, timestamp, ...args);
        if (options.trace.includes("debug")) {
            const error = new LogError("\x1b[36m[DEBUG] \x1b[0m");
            error.stackDepth = options.stackTraceDepth;
            console.log(error.stacks);
            console.log("");
        }
    }
}
const THREE_LETTER_MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const FULL_MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const THREE_LETTER_DAY = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const FULL_DAY = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
export function useTimestamp(timestamp, level) {
    if (timestamp === null) {
        return "";
    }
    if (typeof timestamp === "string") {
        return formatDate(new Date(), timestamp);
    }
    else if (timestamp[level] === undefined) {
        return "";
    }
    else if (timestamp[level]) {
        return formatDate(new Date(), timestamp[level]);
    }
    throw new LogError("Invalid timestamp format. See https://github.com/ShaunSHamilton/logover for configuration options.\n");
}
export function formatDate(date, ts) {
    const YYYY = date.getFullYear().toString();
    const YY = YYYY.slice(-2);
    const month = date.getMonth();
    const Mmm = THREE_LETTER_MONTH[month];
    const MM = (month + 1).toString().padStart(2, "0");
    const M = FULL_MONTH[month];
    const day = date.getDay();
    const Www = THREE_LETTER_DAY[day];
    const W = FULL_DAY[day];
    const dd = date.getDate().toString().padStart(2, "0");
    const hh = date.getHours().toString().padStart(2, "0");
    const mm = date.getMinutes().toString().padStart(2, "0");
    const ss = date.getSeconds().toString().padStart(2, "0");
    const SSS = date.getMilliseconds().toString().padStart(3, "0");
    const ZZ = date.getTimezoneOffset();
    const Z = ZZ > 0 ? "-" : "+";
    return ts
        .replace(/(?<!\\)Y(?<!\\)Y(?<!\\)Y(?<!\\)Y/g, YYYY)
        .replace(/(?<!\\)Y(?<!\\)Y/g, YY)
        .replace(/(?<!\\)M(?<!\\)M(?<!\\)M/g, Mmm)
        .replace(/(?<!\\)M(?<!\\)M/g, MM)
        .replace(/(?<!\\)M/g, M)
        .replace(/(?<!\\)W(?<!\\)w(?<!\\)w/g, Www)
        .replace(/(?<!\\)W/g, W)
        .replace(/(?<!\\)d(?<!\\)d/g, dd)
        .replace(/(?<!\\)h(?<!\\)h/g, hh)
        .replace(/(?<!\\)m(?<!\\)m/g, mm)
        .replace(/(?<!\\)s(?<!\\)s/g, ss)
        .replace(/(?<!\\)S(?<!\\)S(?<!\\)S/g, SSS)
        .replace(/(?<!\\)Z/g, Z);
}
