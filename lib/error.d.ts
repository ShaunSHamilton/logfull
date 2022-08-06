export declare class LogError extends Error {
    stackTraceDepth: number;
    expected: any;
    actual: any;
    msg: string;
    constructor(message: string);
    get stacks(): string;
    set stackDepth(depth: number);
}
//# sourceMappingURL=error.d.ts.map