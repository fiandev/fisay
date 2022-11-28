"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Memories_1 = __importDefault(require("../lib/Memories"));
const propertiesParser_1 = __importDefault(require("./propertiesParser"));
const breakpointParser_1 = __importDefault(require("./breakpointParser"));
const cssParser_1 = __importDefault(require("./cssParser"));
const compiler = async (input, output) => {
    const blob = fs_1.default.readFileSync(path_1.default.resolve(input));
    const $ = cheerio_1.default.load(blob);
    // resolving path output
    const __output__ = path_1.default.resolve(output);
    // clear result files
    let isExist = fs_1.default.existsSync(__output__);
    if (isExist)
        fs_1.default.unlinkSync(__output__);
    // global memory
    globalThis.memory = {};
    // parsing body
    $("body, body *").each(function (i, e) {
        let element = $(e);
        let attrClass = element === null || element === void 0 ? void 0 : element.attr("class");
        if (typeof attrClass !== "undefined")
            new Memories_1.default(attrClass);
    });
    const memories = globalThis.memory;
    // normal breakpoint
    memories["normal"].map(v => (0, propertiesParser_1.default)(v));
    delete globalThis.memory["normal"];
    // breakpoint
    for (let breakpoint in memories) {
        (0, breakpointParser_1.default)(breakpoint, memories[breakpoint]);
        delete globalThis.memory[breakpoint];
    }
    const blobCSS = globalThis.blob.replace(/(undefined)/g, "");
    (0, cssParser_1.default)(blobCSS, __output__);
};
module.exports = compiler;
