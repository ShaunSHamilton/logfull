# Logover

A blazingly brilliant logger for JavaScript applications. The logger uses eye-catching output to make it easy to spot your logs.

## Usage

```javascript
import { Logger, Options, Assert } from "logover";
const logover = new Logger({
  level: "debug",
  trace: ["debug", "warn"],
});

logover.debug("0 with trace");
logover.info("1");
logover.warn("2 with trace");
logover.error("3");

const assert = new Assert();

assert.equal(1, 2);
assert(false);
```

What would get logged to the console:

```bash
🟢 DEBUG:  2022-08-06 18:44:56 0 with trace
Logover: [DEBUG]
    at file:///home/shauh/logover/temp-test/index.js:226:9
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)

🔵 INFO:  2022-08-06 18:44:56 1
🟠 WARN:  2022-08-06 18:44:56 2 with trace
Logover: [WARN]
    at file:///home/shauh/logover/temp-test/index.js:228:9
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)

🔴 ERROR:  2022-08-06 18:44:56 3

Logover: Assertion failed: 1 !== 2
    at Assert.equal (file:///home/shauh/logover/temp-test/index.js:45:21)
    at file:///home/shauh/logover/temp-test/index.js:255:8
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:409:24)
    at async loadESM (node:internal/process/esm_loader:85:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12) {
  stackTraceDepth: 2,
  expected: 1,
  actual: 2
}
```

## Options

- `level`: The minimum level to log.
- `info`: The prefix for info logs.
- `debug`: The prefix for debug logs.
- `warn`: The prefix for warn logs.
- `error`: The prefix for error logs.
- `trace`: The log level to show stack trace for.
- `stackTraceDepth`: The depth of stack trace to show.
- `timestamp`: The timestamp format.

## Full Example

See [test/index.ts](https://github.com/ShaunSHamilton/logover/blob/main/test/index.ts)

Output:

```bash
🟢 DEBUG:  2022-08-06 18:44:56 0 with trace
Logover: [DEBUG]
    at file:///home/shauh/logover/temp-test/index.js:226:9
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)

🔵 INFO:  2022-08-06 18:44:56 1
🟠 WARN:  2022-08-06 18:44:56 2 with trace
Logover: [WARN]
    at file:///home/shauh/logover/temp-test/index.js:228:9
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)

🔴 ERROR:  2022-08-06 18:44:56 3
🙂  I get logged. I have no date
⚠️  I get logged
Logover: [WARN]
    at file:///home/shauh/logover/temp-test/index.js:241:9
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)

🔴  I get logged
🔴  I get logged
🔴 18:44:56.385 What time I am logged?
⚠️ [Sunday the 06 of August in the year 2022] That is a nice date format.
Logover: [WARN]
    at file:///home/shauh/logover/temp-test/index.js:253:9
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)

file:///home/shauh/logover/temp-test/index.js:45
      const error = new LogError(
                    ^

Logover: Assertion failed: 1 !== 2
    at Assert.equal (file:///home/shauh/logover/temp-test/index.js:45:21)
    at file:///home/shauh/logover/temp-test/index.js:255:8
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:409:24)
    at async loadESM (node:internal/process/esm_loader:85:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12) {
  stackTraceDepth: 2,
  expected: 1,
  actual: 2
}
```
