export enum Colours {
  Black = "0m",
  Red = "1m",
  Green = "2m",
  Yellow = "3m",
  Blue = "4m",
  Magenta = "5m",
  Cyan = "6m",
  White = "7m",
}

export enum Ansi {
  Reset = "\x1b[0m",
  Bright = "\x1b[1m",
  Dim = "\x1b[2m",
  Italic = "\x1b[3m",
  Underline = "\x1b[4m",
  Blink = "\x1b[5m",
  FastBlink = "\x1b[6m",
  Reverse = "\x1b[7m",
  Hide = "\x1b[8m",
  Strike = "\x1b[9m",
  Foreground = "\x1b[3",
  Background = "\x1b[4",
}

/**
 * The minimum level of logging to output.
 */
export const LogLevel = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
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

export type Options = {
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
