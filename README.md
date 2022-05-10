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

## Full Example

```javascript
import logover, { debug, info, warn, error } from "logover";

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
```

Output:

```bash
🙂 I  get  logged 1.
⚠️ I  get  logged 2.
🔴 I  get  logged 3.
🔴 I  get  logged
```

**NOTE:** This package compiles to ES2022. To use in Node.js, you will either need to use a transpiler, or declare your package as a module.
