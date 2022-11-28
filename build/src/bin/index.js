"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const commander_1 = require("commander");
const init_1 = __importDefault(require("../init"));
const watcher_1 = __importDefault(require("../utils/watcher"));
const Compiler_1 = __importDefault(require("../lib/Compiler"));
const Message_1 = __importDefault(require("../lib/Message"));
/* initilize */
const { pkg } = init_1.default;
const program = new commander_1.Command();
const pwd = process.cwd();
/* global pwd */
globalThis.pwd = pwd;
/* program information */
program
    .name(pkg.name)
    .usage("<command> [options]")
    .argument("<command>", "command to execute")
    .version(pkg.version, "-v, --version", "show app version")
    .showSuggestionAfterError()
    .helpOption("-h, --help", "show help menu");
program
    .command("compile")
    .usage("[options]")
    .description("read file to conpile class selector into css")
    .option("-i, --input <input>", "path file input to compile")
    .option("-o, --output <output>", "path file output from compile")
    .option("-w, --watch [watch]", "path file / folder watched")
    .action((options) => {
    if (!options.input)
        Message_1.default.danger("need options input [-i, --input]");
    if (!options.output)
        Message_1.default.danger("need options input [-o, --output]");
    let input = options.input ? path_1.default.join(pwd, options.input) : "./";
    let output = options.output ? path_1.default.join(pwd, options.output) : "./output";
    let isWatched = options.watch ? true : false;
    const compiler = new Compiler_1.default(input, output);
    if (isWatched)
        (0, watcher_1.default)(input, () => compiler.run());
    else
        compiler.run();
});
module.exports = program;
