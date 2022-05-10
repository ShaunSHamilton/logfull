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
   * @default "info"
   */
  level: process?.env?.LOG_LEVEL || LogLevel.info,
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
};

/**
 * Sets the options for the logs.
 *
 * @example
 * logover({ level: LogLevel.debug });
 *
 * @param ops Options to override the default options.
 */
export default function logover(ops?: Partial<typeof options>) {
  if (ops) {
    Object.keys(ops).map((key) => {
      if (!options.hasOwnProperty(key)) {
        throw new Error(`Logover \nUnknown option: ${key}`);
      }
      options[key] = ops[key];
    });
  }
}

/**
 * Equivalent to `console.info`.
 * @param args The arguments to log.
 */
export function info(...args: any[]): void {
  if (LogLevel[options.level] <= LogLevel.info) {
    console.info(options.info, ...args);
  }
}
/**
 * Equivalent to `console.warn`.
 * @param args The arguments to log.
 */
export function warn(...args: any[]): void {
  if (LogLevel[options.level] <= LogLevel.warn) {
    console.warn(options.warn, ...args);
  }
}
/**
 * Equivalent to `console.error`.
 * @param args The arguments to log.
 */
export function error(...args: any[]): void {
  if (LogLevel[options.level] <= LogLevel.error) {
    console.error(options.error, ...args);
  }
}
/**
 * Equivalent to `console.debug`.
 * @param args The arguments to log.
 */
export function debug(...args: any[]): void {
  if (LogLevel[options.level] === LogLevel.debug) {
    // console.trace("[DEBUG]");
    console.debug(options.debug, ...args);
  }
}
