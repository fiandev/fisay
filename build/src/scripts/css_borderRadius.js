"use strict";
const standardSize_1 = require("../constants/standardSize");
const css_borderRadius = (attr) => {
    const format = /^rounded\-?(t|r|b|l)\-((xs|sm|md|lg|xl|xxl|full)|\[(\w+)\])/;
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, way, value, customValue] = match;
    return {
        selector: selector.replace(/\[/, "\\[").replace(/\]/, "\\]"),
        value: `border${way ? "-" + standardSize_1.WAY_PRERIX_VALUES[way] : ""}: ${/(\[|\])/.test(value) ? customValue : value};`
    };
};
module.exports = css_borderRadius;
