"use strict";
const standardSize_1 = require("../constants/standardSize");
const css_break = (attr) => {
    const format = new RegExp(`^box-decoration-(${Object.keys(standardSize_1.BREAK_DECORATION_PREFIX_VALUES).join("|")})`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix] = match;
    return {
        selector: selector,
        value: `box-decoration-${prefix}: ${standardSize_1.BREAK_DECORATION_PREFIX_VALUES[prefix]}`
    };
};
module.exports = css_break;
