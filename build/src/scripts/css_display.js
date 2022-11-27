"use strict";
const css_display = (attr) => {
    const format = /^(flex|block|grid|table|inline-table|inline-block)$/;
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, property] = match;
    return {
        selector: selector,
        value: `display: ${property};`
    };
};
module.exports = css_display;
