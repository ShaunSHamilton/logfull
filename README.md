# Logover

A blazingly brilliant logger for JavaScript applications. The logger uses eye-catching output to make it easy to spot your logs.

## Usage

```javascript
import logover, { debug, info, warn, error } from "logover";

const logoverOptions = {
  level: "debug",
};

logover(logoverOptions);

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

## Options

- `level`: The minimum level to log.
- `info`: The prefix for info logs.
- `debug`: The prefix for debug logs.
- `warn`: The prefix for warn logs.
- `error`: The prefix for error logs.
- `trace`: The log level to show stack trace for.
- `stackTraceDepth`: The depth of stack trace to show.

## Full Example

See [test/index.ts](https://github.com/ShaunSHamilton/logover/blob/main/test/index.ts)

Output:

```bash
🟢 DEBUG:  0 with trace
Trace: [DEBUG]
    at debug (file:///home/shauh/logover/src/index.ts:125:15)
    at file:///home/shauh/logover/test/index.ts:5:1

🔵 INFO:  1
🟠 WARN:  2 with trace
Trace: [WARN]
    at warn (file:///home/shauh/logover/src/index.ts:97:15)
    at file:///home/shauh/logover/test/index.ts:7:1

🔴 ERROR:  3
🙂 I  get  logged 1.
⚠️ I  get  logged 2.
Trace: [WARN]
    at warn (file:///home/shauh/logover/src/index.ts:97:15)
    at file:///home/shauh/logover/test/index.ts:22:1

🔴 I  get  logged 3.
🔴 I  get  logged
```

**NOTE:** This package compiles to ES2022. To use in Node.js, you will either need to use a transpiler, or declare your package as a module.
