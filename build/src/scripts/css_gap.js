"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const standardSize_1 = require("../constants/standardSize");
const parsePropertyValues_1 = __importDefault(require("../utils/parsePropertyValues"));
const css_gap = (attr) => {
    const format = new RegExp(`^gap\-?(y|x)?\-(\\[(\\w+)\\]|(((${standardSize_1.PREFIX_VALUES.join("|")})+)))$`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix, value, customValue] = match;
    let property = "gap";
    if (prefix && prefix === "x")
        property = "row-gap";
    if (prefix && prefix === "y")
        property = "column-gap";
    return {
        selector: selector,
        value: `${property}: ${/(\[|\])/.test(value) ? customValue : (0, parsePropertyValues_1.default)(value)};`
    };
};
module.exports = css_gap;
