import fs from "fs";
import path from "path";
import * as pkg from '../package.json';

const scripts = require('require-all')({
  dirname: path.join(__dirname, "/scripts"),
  recursive: true,
  filter: /^(\S)+.js/
});

globalThis.blob = fs.readFileSync(path.join(__dirname, "/../../template/breakpoint.scss"));
export = {
  pkg,
  scripts
}