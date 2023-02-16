"use strict";
const standardSize_1 = require("../constants/standardSize");
const css_flexDirection = (attr) => {
    const format = /flex\-((row|col)(\-(reverse))?)/;
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix] = match;
    return {
        selector: selector,
        value: `flex-direction: ${standardSize_1.FLEX_DIRECTION_PREFIX_VALUES[prefix]}`
    };
};
module.exports = css_flexDirection;
