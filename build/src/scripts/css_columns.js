"use strict";
const standardSize_1 = require("../constants/standardSize");
const css_columns = (attr) => {
    const format = new RegExp(`^columns-(${Object.keys(standardSize_1.COLUMNS_PREFIX_VALUES).join("|")})`);
    let match = attr.match(format);
    if (!match)
        return false;
    const [selector, prefix] = match;
    return {
        selector: selector,
        value: `columns: ${standardSize_1.COLUMNS_PREFIX_VALUES[prefix]}`
    };
};
module.exports = css_columns;
