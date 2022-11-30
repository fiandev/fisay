"use strict";
const css_alignItems = (attr) => {
    const format = /^(items)-(center|stretch|start|end|evenly)/;
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, , value] = match;
    return {
        selector: selector,
        value: `align-items: ${value};`
    };
};
module.exports = css_alignItems;
