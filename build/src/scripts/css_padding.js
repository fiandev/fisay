"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const standardSize_1 = require("../constants/standardSize");
const parsePropertyValues_1 = __importDefault(require("../utils/parsePropertyValues"));
const css_borderRadius = (attr) => {
    const format = new RegExp(`^p(t|r|b|l)?\-((${standardSize_1.PREFIX_VALUES.join("|")})|\[(\w+)\])`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, way, prefix, value, customValue] = match;
    return {
        selector: selector,
        value: `border${way ? "-" + standardSize_1.WAY_PRERIX_VALUES[way] : ""}: ${/(\[|\])/.test(selector) ? customValue : (0, parsePropertyValues_1.default)(value)};`
    };
};
module.exports = css_borderRadius;
