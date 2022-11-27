"use strict";
const css_gridTemplateColumns = (attr) => {
    const format = /^(col)\-?([1-12]{1,2})+/;
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, , value] = match;
    return {
        selector: selector,
        value: `grid-template-columns: repeat(${value}, 1fr);`
    };
};
module.exports = css_gridTemplateColumns;
