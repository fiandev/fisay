"use strict";
const flexer = (blob) => {
    return blob.replace(/(undefined)/g, "").replace(/\{/g, "{\n").replace(/\;/g, ";\n").replace(/\}/g, "}\n");
};
module.exports = flexer;
