"use strict";
const addSlashes = (str) => {
    str.replace(/\[/g, `\\[`);
    str.replace(/\]/g, `\\]`);
    return str;
};
module.exports = addSlashes;
