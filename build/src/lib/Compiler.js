"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
const fs_readdir_recursive_1 = __importDefault(require("fs-readdir-recursive"));
const Memories_1 = __importDefault(require("./Memories"));
const propertiesParser_1 = __importDefault(require("../utils/propertiesParser"));
const breakpointParser_1 = __importDefault(require("../utils/breakpointParser"));
const cssParser_1 = __importDefault(require("../utils/cssParser"));
class default_1 {
    constructor(input, output) {
        /* initialize attributes */
        this.output = output;
        this.input = input;
    }
    run() {
        /* check if target input is directory */
        if (fs_1.default.lstatSync(this.input).isDirectory())
            this.parseDirectory(this.input);
        else
            this.compile(this.input);
    }
    parseDirectory(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = (0, fs_readdir_recursive_1.default)(input);
            files.forEach(file => {
                let pathfile = path_1.default.join(this.input, `/${file}`);
                this.compile(pathfile);
            });
        });
    }
    compile(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const blob = fs_1.default.readFileSync(path_1.default.resolve(input));
            const $ = cheerio_1.default.load(blob);
            // resolving path output
            const __output__ = path_1.default.resolve(this.output);
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
        });
    }
}
exports.default = default_1;
