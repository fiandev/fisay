"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const init_1 = require("../init");
const addSlashes_1 = __importDefault(require("./addSlashes"));
const breakpointFormat_1 = __importDefault(require("../constants/breakpointFormat"));
const breakpointParser = (breakpoint, items) => {
    const device = breakpointFormat_1.default[breakpoint] ? breakpointFormat_1.default[breakpoint] : "small";
    let syntax = "";
    syntax += `@include devices(${device}) {`;
    for (let item of items) {
        for (let key in init_1.scripts) {
            let res = init_1.scripts[key](item);
            if (res) {
                let selector = (0, addSlashes_1.default)(`.${breakpoint}:${res.selector}`);
                syntax += `${selector} {`
                    + `${res.value}`
                    + `}`;
            }
        }
    }
    syntax += "}";
    globalThis.blob += syntax;
};
module.exports = breakpointParser;
