import fs from "fs";
import path from "path";
import * as pkg from '../package.json';

const scripts = require('require-all')({
  dirname: path.join(__dirname, "/scripts"),
  recursive: true,
  filter: /^(\S)+.js/
});

const mixinFiles = fs.readdirSync(path.join(__dirname, "/../../mixin"));

/* includes mixin scss files */
for (let mixinFile of mixinFiles) {
  globalThis.blob += fs.readFileSync(path.join(__dirname, `/../../mixin/${ mixinFile }`));
}

export = {
  pkg,
  scripts
}