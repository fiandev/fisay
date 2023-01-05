import fs from "fs";
import path from "path";
import * as pkg from '../package.json';
import minify from "./helpers/minify";

const scripts = require('require-all')({
  dirname: path.join(__dirname, "/scripts"),
  recursive: true
});

const files = fs.readdirSync(path.join(__dirname, "/../../sass"));

/* includes mixin scss files */
for (let file of files) {
  globalThis.blob += fs.readFileSync(path.join(__dirname, `/../../sass/${ file }`));
}

globalThis.blob = minify(globalThis.blob);

export = {
  pkg,
  scripts
}