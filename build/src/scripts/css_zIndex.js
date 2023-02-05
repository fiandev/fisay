"use strict";
const standardSize_1 = require("../constants/standardSize");
const css_zIndex = (attr) => {
    const format = new RegExp(`^z-(\[(\d+)\]|((${standardSize_1.Z_INDEX_VALUES.join("|")})))$`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, property, customValue] = match;
    return {
        selector: selector,
        value: `z-index: ${/(\[|\])/.test(property) ? customValue : property};`
    };
};
module.exports = css_zIndex;
