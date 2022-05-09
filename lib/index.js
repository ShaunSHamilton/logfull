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
var LogLevel = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};
var options = {
    level: ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.LOG_LEVEL) || LogLevel.info,
    info: "🔵%cINFO: ",
    warn: "🟠%cWARN: ",
    error: "🔴%cERROR: ",
    debug: "🟢%cDEBUG: ",
};
function Logfull(ops) {
    if (ops) {
        Object.keys(ops).map(function (key) {
            if (!options.hasOwnProperty(key)) {
                throw new Error("Logfull \nUnknown option: ".concat(key));
            }
            options[key] = ops[key];
        });
    }
}
exports.default = Logfull;
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (LogLevel[options.level] <= LogLevel.info) {
        console.info.apply(console, __spreadArray([options.info, "color: blue"], args, false));
    }
}
exports.info = info;
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (LogLevel[options.level] <= LogLevel.warn) {
        console.warn.apply(console, __spreadArray([options.warn, "color: orange"], args, false));
    }
}
exports.warn = warn;
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (LogLevel[options.level] <= LogLevel.error) {
        console.error.apply(console, __spreadArray([options.error, "color: red"], args, false));
    }
}
exports.error = error;
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (LogLevel[options.level] === LogLevel.debug) {
        // console.trace("[DEBUG]");
        console.debug.apply(console, __spreadArray([options.debug, "color: green"], args, false));
    }
}
exports.debug = debug;
