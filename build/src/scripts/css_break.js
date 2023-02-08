"use strict";
const standardSize_1 = require("../constants/standardSize");
const css_break = (attr) => {
    const format = new RegExp(`^break-(after|before|inside)-(${Object.keys(standardSize_1.BREAK_PREFIX_VALUES).join("|")})`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix, value] = match;
    return {
        selector: selector,
        value: `break-${prefix}: ${standardSize_1.BREAK_PREFIX_VALUES[value]}`
    };
};
module.exports = css_break;
