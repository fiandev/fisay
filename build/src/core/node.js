"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const commander_1 = require("commander");
const init_1 = require("../init");
const watcher_1 = __importDefault(require("../utils/watcher"));
const Compiler_1 = __importDefault(require("../lib/Compiler"));
const Message_1 = __importDefault(require("../lib/Message"));
/* initilize */
const program = new commander_1.Command();
const pwd = process.cwd();
const config = globalThis.config;
/* program information */
program
    .name(init_1.pkg.name)
    .usage("<command> [options]")
    .argument("<command>", "command to execute")
    .version(init_1.pkg.version, "-v, --version", "show app version")
    .showSuggestionAfterError()
    .helpOption("-h, --help", "show help menu");
program
    .command("init")
    .usage("<command>")
    .description("initialize fisay configuration file")
    .action(() => {
    let dest = path_1.default.join(pwd, `/${init_1.pkg.name}.config.json`);
    let content = JSON.stringify(config, null, 2);
    fs_1.default.writeFileSync(dest, content);
    Message_1.default.warning(`file config added at ./${path_1.default.basename(dest)}`);
});
program
    .command("compile")
    .usage("[options]")
    .description("read file to compile class selector into css")
    .option("-i, --input <input>", "path file input to compile")
    .option("-o, --output <output>", "path file output from compile")
    .option("-w, --watch [watch]", "path file / folder watched")
    .action((options) => {
    if (!options.input && !config.input)
        Message_1.default.danger("need options input [-i, --input]");
    if (!options.output && !config.output)
        Message_1.default.danger("need options input [-o, --output]");
    let input = options.input ? path_1.default.join(pwd, options.input) : path_1.default.join(pwd, config.input);
    let output = options.output ? path_1.default.join(pwd, options.output) : path_1.default.join(pwd, config.output);
    let isWatched = options.watch ? true : config.watch;
    const compiler = new Compiler_1.default(input, output);
    if (isWatched)
        (0, watcher_1.default)(input, () => compiler.run());
    else
        compiler.run();
});
module.exports = program;
