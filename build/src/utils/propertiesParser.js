"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const init_1 = __importDefault(require("../init"));
const addSlashes_1 = __importDefault(require("../utils/addSlashes"));
const { scripts } = init_1.default;
const propertiesParser = (attr) => {
    let syntax = "";
    for (let key in scripts) {
        let res = scripts[key](attr);
        if (res) {
            syntax += `.${(0, addSlashes_1.default)(res.selector)} {`
                + `${res.value}`
                + `}`;
            globalThis.blob += syntax;
        }
    }
};
module.exports = propertiesParser;
