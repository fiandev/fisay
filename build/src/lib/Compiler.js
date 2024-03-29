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
const Message_1 = __importDefault(require("./Message"));
const propertiesParser_1 = __importDefault(require("../utils/propertiesParser"));
const breakpointParser_1 = __importDefault(require("../utils/breakpointParser"));
const cssParser_1 = __importDefault(require("../utils/cssParser"));
const init_1 = require("../init");
class default_1 {
    constructor(input, output) {
        /* initialize attributes */
        this.output = output;
        this.input = input;
        // resolving path output
        this.__output__ = path_1.default.resolve(this.output);
        this.config = globalThis.config;
    }
    run() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            /* set to default value */
            if (globalThis["memory"])
                delete globalThis["memory"];
            globalThis["blob"] = init_1.scssBlob;
            /* check if target input is directory */
            let isDir = fs_1.default.lstatSync(this.input).isDirectory();
            if (isDir)
                yield this.parseDirectory(this.input);
            else
                yield this.compile(this.input);
            const memories = globalThis.memory;
            // normal breakpoint
            (_a = memories["normal"]) === null || _a === void 0 ? void 0 : _a.map(v => (0, propertiesParser_1.default)(v));
            // breakpoint
            for (let breakpoint in memories) {
                if (breakpoint !== "normal")
                    yield (0, breakpointParser_1.default)(breakpoint, memories[breakpoint]);
            }
            let blob = globalThis.blob;
            blob.replace(/(undefined)/g, "");
            const blobCSS = blob;
            (0, cssParser_1.default)(blobCSS, this.__output__);
            Message_1.default.warning(`task completed!`);
            Message_1.default.success(`success compile ${isDir ? "directory" : "file"} at ${path_1.default.basename(this.input)}`);
        });
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
            // get extension of file input
            let extension = path_1.default.extname(path_1.default.resolve(input)).slice(1);
            // ignore file when extension now allowed
            if (!this.config.allowedExtension.includes(extension))
                return;
            const blob = fs_1.default.readFileSync(path_1.default.resolve(input));
            const $ = cheerio_1.default.load(blob);
            // clear result files
            let isExist = fs_1.default.existsSync(this.__output__);
            if (isExist)
                fs_1.default.unlinkSync(this.__output__);
            // global memory
            globalThis.memory = Object.keys(typeof globalThis.memory === "undefined" ? {} : globalThis.memory).length !== 0 ? globalThis.memory : {};
            // parsing body
            $("body, body *").each(function (i, e) {
                let element = $(e);
                let attrClass = element === null || element === void 0 ? void 0 : element.attr("class");
                if (typeof attrClass !== "undefined")
                    new Memories_1.default(attrClass);
            });
        });
    }
}
exports.default = default_1;
