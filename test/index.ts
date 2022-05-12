import logover, { debug, info, warn, error } from "../src/index";

logover({ level: "debug", trace: ["debug", "warn"] });

debug("0 with trace");
info("1");
warn("2 with trace");
error("3");

const logoverOptions = {
  level: "info",
  info: "🙂",
  debug: "🐛",
  warn: "⚠️",
  error: "🔴",
};

logover(logoverOptions);

debug("I ", "do ", "not ", "get ", "logged");
info("I ", "get ", "logged 1.");
warn("I ", "get ", "logged 2.");
error("I ", "get ", "logged 3.");

logover({ level: "error" });

debug("I ", "do ", "not ", "get ", "logged");
info("I ", "do ", "not ", "get ", "logged");
warn("I ", "do ", "not ", "get ", "logged");
error("I ", "get ", "logged");
