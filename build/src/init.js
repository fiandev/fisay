"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssBlob = exports.scripts = exports.pkg = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pJson = __importStar(require("../package.json"));
const minify_1 = __importDefault(require("./helpers/minify"));
const defaultConfig_1 = __importDefault(require("./constants/defaultConfig"));
const Message_1 = __importDefault(require("./lib/Message"));
const path_sass_includes = "/../../sass/includes";
exports.pkg = pJson;
exports.scripts = require('require-all')({
    dirname: path_1.default.join(__dirname, "/scripts"),
    recursive: true
});
const files = fs_1.default.readdirSync(path_1.default.join(__dirname, path_sass_includes));
/* declare global blob */
let blob = "";
/* includes mixin scss files */
for (let file of files) {
    blob += fs_1.default.readFileSync(path_1.default.join(__dirname, `${path_sass_includes}/${file}`));
}
exports.scssBlob = (0, minify_1.default)(blob);
let pwd = process.cwd();
let pathfile = path_1.default.join(pwd, `./${exports.pkg.name}.config.json`);
let isFileConfigExist = fs_1.default.existsSync(pathfile);
let fileConfig = isFileConfigExist ? fs_1.default.readFileSync(pathfile, "utf8") : JSON.stringify(defaultConfig_1.default);
if (isFileConfigExist)
    Message_1.default.warning(`file config is exist at ./${path_1.default.basename(pathfile)}, use it!`);
else
    Message_1.default.info("file config not found, use default configuration!");
try {
    let config = JSON.parse(fileConfig);
    /* load & parse config */
    for (let key in defaultConfig_1.default) {
        if (typeof config[key] === "undefined")
            config[key] = defaultConfig_1.default[key];
    }
    /* passing config */
    globalThis.config = config;
}
catch (err) {
    Message_1.default.danger("invalid file config, please check your file config!");
    process.exit();
}
