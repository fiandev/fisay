"use strict";
const minify = (filecontent) => {
    if (!filecontent)
        return;
    return filecontent
        .replace(/\/\s?.*\s?\//g, '') // delete comments
        .replace(/\n/g, '')
        .replace(/\s\s+/g, ' ');
};
module.exports = minify;
