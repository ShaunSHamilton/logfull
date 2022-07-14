export default class LogError extends Error {
    stackTraceDepth: number;
    constructor(message: string);
    get stacks(): string;
    set stackDepth(depth: number);
}
