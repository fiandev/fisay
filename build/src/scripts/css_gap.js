"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const parsePropertyValues_1 = __importDefault(require("../utils/parsePropertyValues"));
const css_gap = (attr) => {
    const format = /^gap\-?(y|x)?\-(\[(\w+)\]|((1|2|3|4|6|8|10|12)))$/;
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix, value, customValue] = match;
    console.log(match);
    let property = "gap";
    if (prefix && prefix === "x")
        property = "row-gap";
    if (prefix && prefix === "y")
        property = "column-gap";
    return {
        selector: selector.replace(/\[/, "\[").replace(/\]/, "\]"),
        value: `${property}: ${/(\[|\])/.test(value) ? customValue : (0, parsePropertyValues_1.default)(value)};`
    };
};
module.exports = css_gap;
