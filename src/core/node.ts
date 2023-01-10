import path from "path";
import { Command } from "commander";
import init from "../init";
import watcher from "../utils/watcher";
import Compiler from "../lib/Compiler";
import message from "../lib/Message";

/* initilize */
const { pkg } = init;
const program = new Command();
const pwd = process.cwd();
const config = globalThis.config;

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
.description("read file to compile class selector into css")
.option("-i, --input <input>", "path file input to compile")
.option("-o, --output <output>", "path file output from compile")
.option("-w, --watch [watch]", "path file / folder watched")
.action((options) => {
  if (!options.input && !config.input) message.danger("need options input [-i, --input]");
  if (!options.output && !config.output) message.danger("need options input [-o, --output]");
  
  let input = options.input ? path.join(pwd, options.input) : config.input;
  let output = options.output ? path.join(pwd, options.output) : config.output;
  let isWatched = options.watch ? true : config.watch;
  
  const compiler = new Compiler(input, output);
  if (isWatched) watcher(input, () => compiler.run());
  else compiler.run();
  
});


export = program;