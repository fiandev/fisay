"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const init_1 = require("../init");
const addSlashes_1 = __importDefault(require("../utils/addSlashes"));
const propertiesParser = (attr) => {
    let syntax = "";
    for (let key in init_1.scripts) {
        let res = init_1.scripts[key](attr);
        if (res) {
            syntax += `.${(0, addSlashes_1.default)(res.selector)} {`
                + `${res.value}`
                + `}`;
            globalThis.blob += syntax;
        }
    }
};
module.exports = propertiesParser;
