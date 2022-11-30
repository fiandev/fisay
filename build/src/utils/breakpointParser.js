"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const init_1 = __importDefault(require("../init"));
const breakpointFormat_1 = __importDefault(require("../constants/breakpointFormat"));
const { scripts } = init_1.default;
const breakpointParser = (breakpoint, items) => {
    const device = breakpointFormat_1.default[breakpoint] ? breakpointFormat_1.default[breakpoint] : "small";
    let syntax = "";
    syntax += `@include devices(${device}) {`;
    for (let item of items) {
        for (let key in scripts) {
            let res = scripts[key](item);
            if (res) {
                syntax += `.${res.selector} {`
                    + `${res.value}`
                    + `}`;
            }
        }
    }
    syntax += "}";
    globalThis.blob += syntax;
};
module.exports = breakpointParser;
