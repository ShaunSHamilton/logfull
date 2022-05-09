declare const options: {
    level: string | number;
    info: string;
    warn: string;
    error: string;
    debug: string;
};
export default function Logfull(ops?: Partial<typeof options>): void;
export declare function info(...args: any[]): void;
export declare function warn(...args: any[]): void;
export declare function error(...args: any[]): void;
export declare function debug(...args: any[]): void;
export {};
