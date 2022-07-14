import logover, { debug, info, warn, error, Options } from "../src/index";

logover({ level: "debug", trace: ["debug", "warn"] });

debug("0 with trace");
info("1");
warn("2 with trace");
error("3");

const logoverOptions: Partial<Options> = {
  level: "info",
  info: "🙂",
  debug: "🐛",
  warn: "⚠️",
  error: "🔴",
  timestamp: null,
};

logover(logoverOptions);

debug("I do not get logged.", "Also, there is no date");
info("I get logged.", "I have no date");
warn("I", "get", "logged");
error("I", "get", "logged");

logover({ level: "error" });

debug("I", "do", "not", "get", "logged");
info("I", "do", "not", "get", "logged");
warn("I", "do", "not", "get", "logged");
error("I", "get", "logged");

logoverOptions.timestamp = "hh:mm:ss.SSS";
logover(logoverOptions);

error("What time I am logged?");

logoverOptions.timestamp = { warn: "[W the dd of M in the year YYYY]" };

logover(logoverOptions);
warn("That is a nice date format.");
