import { Options } from "./types.js";
import { LogError } from "./error.js";

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

export function useTimestamp(
  timestamp: Options["timestamp"],
  level: "info" | "warn" | "error" | "debug"
): string {
  if (timestamp === null) {
    return "";
  }
  if (typeof timestamp === "string") {
    return formatDate(new Date(), timestamp);
  }
  const timestampLevel = timestamp[level];
  if (timestampLevel === undefined) {
    return "";
  } else if (timestampLevel) {
    return formatDate(new Date(), timestampLevel);
  }
  throw new LogError(
    "Invalid timestamp format. See https://github.com/ShaunSHamilton/logover for configuration options.\n"
  );
}

export function formatDate(date: Date, ts: string) {
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
