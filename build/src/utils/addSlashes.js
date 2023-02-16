"use strict";
const addSlashes = (str) => {
    let text = str.replace(/\:/, "\\:")
        .replace(/\]/, "\\]")
        .replace(/\[/, "\\[")
        .replace("/", "\\/");
    return text;
};
module.exports = addSlashes;
