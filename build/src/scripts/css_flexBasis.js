"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const standardSize_1 = require("../constants/standardSize");
const parsePropertyValues_1 = __importDefault(require("../utils/parsePropertyValues"));
const css_flexBasis = (attr) => {
    const format = new RegExp(`^basis-(${Object.keys(standardSize_1.FLEX_BASIS_PREFIX_VALUES).join("|")})$`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, value, customValue] = match;
    return {
        selector: selector,
        value: `flex-basis: ${/(\[|\])/.test(value) ? customValue : (typeof value === "number" ? (0, parsePropertyValues_1.default)(standardSize_1.FLEX_BASIS_PREFIX_VALUES[value]) : standardSize_1.FLEX_BASIS_PREFIX_VALUES[value])};`
    };
};
module.exports = css_flexBasis;
