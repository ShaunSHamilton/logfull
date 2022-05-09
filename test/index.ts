import logover, { debug, info, warn, error } from "../src/index";

const logoverOptions = {
  level: "debug",
};

logover(logoverOptions);

debug("0");
info("1");
warn("2");
error("3");
