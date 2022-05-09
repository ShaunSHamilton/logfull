import logfull, { debug, info, warn, error } from "../src/index";

const logfullOptions = {
  level: "debug",
};

logfull(logfullOptions);

debug("0");
info("1");
warn("2");
error("3");
