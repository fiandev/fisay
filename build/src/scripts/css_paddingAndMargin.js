"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const standardSize_1 = require("../constants/standardSize");
const parsePropertyValues_1 = __importDefault(require("../utils/parsePropertyValues"));
const css_paddingAndMargin = (attr) => {
    const format = new RegExp(`^(p|m)(t|r|b|l|x|y)?\-(((${standardSize_1.PREFIX_VALUES.join("|")})+)|\\[(\\w+)\\])`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix, way, , value, , customValue] = match;
    let result = `${/(\[|\])/.test(selector) ? customValue : (0, parsePropertyValues_1.default)(value)}`;
    return {
        selector: selector,
        value: `${prefix === "p" ? "padding" : "margin"}${way ? (standardSize_1.WAY_PRERIX_VALUES[way] ? "-" + standardSize_1.WAY_PRERIX_VALUES[way] : "") : ""}: ${way === "x" || way === "y" ? (way === "x" ? "0 " + result : result + " 0") : result};`
    };
};
module.exports = css_paddingAndMargin;
