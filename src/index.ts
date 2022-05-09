const LogLevel = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const options = {
  // @ts-expect-error Error from browser build
  logLevel: process?.env?.LOG_LEVEL || LogLevel.info,
};

export default function Logfull(ops?: typeof options) {
  if (ops) {
    Object.keys(ops).map((key) => {
      if (!options.hasOwnProperty(key)) {
        throw new Error(`Logfull \nUnknown option: ${key}`);
      }
      options[key] = ops[key];
    });
  }
}

export function info(...args: any[]): void {
  if (LogLevel[options.logLevel] <= LogLevel.info) {
    console.info("🔵%cINFO: ", "color: blue", ...args);
  }
}
export function warn(...args: any[]): void {
  if (LogLevel[options.logLevel] <= LogLevel.warn) {
    console.warn("🟠%cWARN: ", "color: orange", ...args);
  }
}
export function error(...args: any[]): void {
  if (LogLevel[options.logLevel] <= LogLevel.error) {
    console.error("🔴%cERROR: ", "color: red", ...args);
  }
}
export function debug(...args: any[]): void {
  if (LogLevel[options.logLevel] === LogLevel.debug) {
    // console.trace("[DEBUG]");
    console.debug("🟢%cDEBUG: ", "color: green", ...args);
  }
}
