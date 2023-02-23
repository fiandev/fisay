"use strict";
const standardSize_1 = require("../constants/standardSize");
const css_flexWrap = (attr) => {
    const format = new RegExp(`^flex-(${Object.keys(standardSize_1.FLEX_PREFIX_VALUES).join("|")})$`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix] = match;
    return {
        selector: selector,
        value: `flex: ${standardSize_1.FLEX_PREFIX_VALUES[prefix]}`
    };
};
module.exports = css_flexWrap;
