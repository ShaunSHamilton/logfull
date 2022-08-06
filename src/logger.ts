import { LogError } from "./error.js";
import { LogLevel, Options } from "./types.js";
import { useTimestamp } from "./utils.js";

export class Logger {
  public options: Options;
  constructor(ops?: Partial<Options>) {
    this.options = {
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
    if (ops) {
      Object.keys(ops).map((key) => {
        if (!this.options.hasOwnProperty(key)) {
          throw new LogError(`Logover \nUnknown option: ${key}`);
        }
        this.options[key] = ops[key];
      });
    }
  }
  /**
   * Equivalent to `console.info`.
   * @param args The arguments to log.
   */
  info(...args: any[]): void {
    if (LogLevel[this.options.level] <= LogLevel.info) {
      const timestamp = useTimestamp(this.options.timestamp, "info");
      console.info(this.options.info, timestamp, ...args);
      if (this.options.trace.includes("info")) {
        const error = new LogError("\x1b[36m[INFO] \x1b[0m");
        error.stackDepth = this.options.stackTraceDepth;
        console.log(error.stacks);
        console.log("");
      }
    }
  }
  /**
   * Equivalent to `console.warn`.
   * @param args The arguments to log.
   */
  warn(...args: any[]): void {
    if (LogLevel[this.options.level] <= LogLevel.warn) {
      const timestamp = useTimestamp(this.options.timestamp, "warn");
      console.warn(this.options.warn, timestamp, ...args);
      if (this.options.trace.includes("warn")) {
        const error = new LogError("\x1b[33m[WARN] \x1b[0m");
        error.stackDepth = this.options.stackTraceDepth;
        console.log(error.stacks);
        console.log("");
      }
    }
  }
  /**
   * Equivalent to `console.error`.
   * @param args The arguments to log.
   */
  error(...args: any[]): void {
    if (LogLevel[this.options.level] <= LogLevel.error) {
      const timestamp = useTimestamp(this.options.timestamp, "error");
      console.error(this.options.error, timestamp, ...args);
      if (this.options.trace.includes("error")) {
        const error = new LogError("\x1b[31m[ERROR] \x1b[0m");
        error.stackDepth = this.options.stackTraceDepth;
        console.log(error.stacks);
        console.log("");
      }
    }
  }
  /**
   * Equivalent to `console.debug`.
   * @param args The arguments to log.
   */
  debug(...args: any[]): void {
    if (LogLevel[this.options.level] === LogLevel.debug) {
      const timestamp = useTimestamp(this.options.timestamp, "debug");
      console.debug(this.options.debug, timestamp, ...args);
      if (this.options.trace.includes("debug")) {
        const error = new LogError("\x1b[32m[DEBUG] \x1b[0m");
        error.stackDepth = this.options.stackTraceDepth;
        console.log(error.stacks);
        console.log("");
      }
    }
  }

  /**
   * Sets the options for the logs.
   *
   * @example
   * logover.option = { level: LogLevel.debug };
   *
   * @param ops Options to override the default options.
   */
  set option(ops: Partial<Options>) {
    Object.keys(ops).map((key) => {
      if (!this.options.hasOwnProperty(key)) {
        throw new LogError(`Logover \nUnknown option: ${key}`);
      }
      this.options[key] = ops[key];
    });
  }
}
