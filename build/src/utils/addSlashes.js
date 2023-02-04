"use strict";
const addSlashes = (str) => {
    return str
        .replace(/\[/g, `\\[`)
        .replace(/\]/g, `\\]`);
};
module.exports = addSlashes;
