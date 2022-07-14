/// LogError extends Error to alter the stack trace to not show the first line of the stack trace.
export default class LogError extends Error {
  stackTraceDepth: number;
  constructor(message: string) {
    super(message);
    this.name = "Logover";
    this.stackTraceDepth = 2;
  }

  get stacks(): string {
    if (this.stack) {
      const lines = this.stack.split("\n");
      const stack = [lines[0], ...lines.slice(2, this.stackTraceDepth + 2)];
      return stack.join("\n");
    }
    return "";
  }

  set stackDepth(depth: number) {
    this.stackTraceDepth = depth;
  }
}
