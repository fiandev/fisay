import path from "path";
import { Command } from "commander";
import init from "../init";
import watcher from "../utils/watcher";
import Compiler from "../lib/Compiler";

/* initilize */
const { pkg } = init;
const program = new Command();
const pwd = process.cwd()

/* global pwd */
globalThis.pwd = pwd;

/* program information */
program
.name(pkg.name)
.usage("<command> [options]")
.version(pkg.version, "-v, --version", "show app version")
.showSuggestionAfterError()
.helpOption("-h, --help", "show help menu");

program
.command("compile")
.description("compiled html class to css")
.option("-i, --input [input]", "path file input to compile")
.option("-o, --output [output]", "path file output from compile")
.option("-w, --watch [watch]", "path file / folder watched")
.action((options) => {
  let input = options.input ? path.join(pwd, options.input) : "./";
  let output = options.output ? path.join(pwd, options.output) : "./output";
  let isWatched = options.watch ? true : false;
  
  const compiler = new Compiler(input, output);
  if (isWatched) watcher(input, () => compiler.run());
  else compiler.run();
  
});


export = program;