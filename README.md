# Logfull

A blazingly brilliant logger for JavaScript applications. The logger uses eye-catching output to make it easy to spot your logs.

## Usage

```javascript
import logfull, { debug, info, warn, error } from "logfull";

const logfullOptions = {
  level: "debug",
};

logfull(logfullOptions);

debug("0");
info("1");
warn("2");
error("3");
```

What would get logged to the console:

```bash
🟢DEBUG:  0
🔵INFO:  1
🟠WARN:  2
🔴ERROR:  3
```
