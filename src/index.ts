export default function logfull(...args: any[]): void {
  console.log(...args);
}

export function info(...args: any[]): void {
  console.info("🔵 ", ...args);
}

export function warn(...args: any[]): void {
  console.warn("🟠 ", ...args);
}

export function error(...args: any[]): void {
  console.error("🔴 ", ...args);
}

export function debug(...args: any[]): void {
  console.debug("🟢 ", ...args);
}

export enum Logger {
  INFO = "info",
  DEBUG = "debug",
  WARN = "warn",
  ERROR = "error",
}
