"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = exports.error = exports.warn = exports.info = void 0;
/**
 * The minimum level of logging to output.
 */
var LogLevel = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};
/**
 * Default options for the logs.
 */
var options = {
    /**
     * @default "info"
     */
    level: ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.LOG_LEVEL) || LogLevel.info,
    /**
     * @default "🔵INFO: "
     */
    info: "🔵INFO: ",
    /**
     * @default "🟠WARN: "
     */
    warn: "🟠WARN: ",
    /**
     * @default "🔴ERROR: "
     */
    error: "🔴ERROR: ",
    /**
     * @default "🟢DEBUG: "
     */
    debug: "🟢DEBUG: ",
};
/**
 * Sets the options for the logs.
 *
 * @example
 * logover({ level: LogLevel.debug });
 *
 * @param ops Options to override the default options.
 */
function Logover(ops) {
    if (ops) {
        Object.keys(ops).map(function (key) {
            if (!options.hasOwnProperty(key)) {
                throw new Error("Logover \nUnknown option: ".concat(key));
            }
            options[key] = ops[key];
        });
    }
}
exports.default = Logover;
/**
 * Equivalent to `console.info`.
 * @param args The arguments to log.
 */
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (LogLevel[options.level] <= LogLevel.info) {
        console.info.apply(console, __spreadArray([options.info], args, false));
    }
}
exports.info = info;
/**
 * Equivalent to `console.warn`.
 * @param args The arguments to log.
 */
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (LogLevel[options.level] <= LogLevel.warn) {
        console.warn.apply(console, __spreadArray([options.warn], args, false));
    }
}
exports.warn = warn;
/**
 * Equivalent to `console.error`.
 * @param args The arguments to log.
 */
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (LogLevel[options.level] <= LogLevel.error) {
        console.error.apply(console, __spreadArray([options.error], args, false));
    }
}
exports.error = error;
/**
 * Equivalent to `console.debug`.
 * @param args The arguments to log.
 */
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (LogLevel[options.level] === LogLevel.debug) {
        // console.trace("[DEBUG]");
        console.debug.apply(console, __spreadArray([options.debug], args, false));
    }
}
exports.debug = debug;
