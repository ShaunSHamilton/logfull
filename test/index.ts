import { Logger, Options, Assert } from "../src/index";
const logover = new Logger({
  level: "debug",
  trace: ["debug", "warn"],
});

logover.debug("0 with trace");
logover.info("1");
logover.warn("2 with trace");
logover.error("3");

const logoverOptions: Partial<Options> = {
  level: "info",
  info: "🙂",
  debug: "🐛",
  warn: "⚠️",
  error: "🔴",
  timestamp: null,
};

logover.option = logoverOptions;

logover.debug("I do not get logged.", "Also, there is no date");
logover.info("I get logged.", "I have no date");
logover.warn("I", "get", "logged");
logover.error("I", "get", "logged");

logover.option = { level: "error" };

logover.debug("I", "do", "not", "get", "logged");
logover.info("I", "do", "not", "get", "logged");
logover.warn("I", "do", "not", "get", "logged");
logover.error("I", "get", "logged");

logoverOptions.timestamp = "hh:mm:ss.SSS";
logover.option = logoverOptions;

logover.error("What time I am logged?");

logoverOptions.timestamp = { warn: "[W the dd of M in the year YYYY]" };

logover.option = logoverOptions;
logover.warn("That is a nice date format.");

// ---------------------
// ASSERTION TESTS
// ---------------------

const assert = new Assert();
assert.equal(1, 2);
assert(false);
