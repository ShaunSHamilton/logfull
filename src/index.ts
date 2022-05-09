const LogLevel = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const options = {
  level: process?.env?.LOG_LEVEL || LogLevel.info,
  info: "🔵%cINFO: ",
  warn: "🟠%cWARN: ",
  error: "🔴%cERROR: ",
  debug: "🟢%cDEBUG: ",
};

export default function Logfull(ops?: Partial<typeof options>) {
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
  if (LogLevel[options.level] <= LogLevel.info) {
    console.info(options.info, "color: blue", ...args);
  }
}
export function warn(...args: any[]): void {
  if (LogLevel[options.level] <= LogLevel.warn) {
    console.warn(options.warn, "color: orange", ...args);
  }
}
export function error(...args: any[]): void {
  if (LogLevel[options.level] <= LogLevel.error) {
    console.error(options.error, "color: red", ...args);
  }
}
export function debug(...args: any[]): void {
  if (LogLevel[options.level] === LogLevel.debug) {
    // console.trace("[DEBUG]");
    console.debug(options.debug, "color: green", ...args);
  }
}
