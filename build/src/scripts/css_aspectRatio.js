"use strict";
const standardSize_1 = require("../constants/standardSize");
const css_aspectRatio = (attr) => {
    const format = new RegExp(`^aspect\-(${Object.keys(standardSize_1.ASPECT_PREFIX_VALUES).join("|")})$`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix] = match;
    return {
        selector: selector,
        value: `aspect-ratio: ${standardSize_1.ASPECT_PREFIX_VALUES[prefix]}`
    };
};
module.exports = css_aspectRatio;
