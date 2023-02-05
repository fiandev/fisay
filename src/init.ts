import fs from "fs";
import path from "path";
import * as pJson from '../package.json';
import minify from "./helpers/minify";
import defaultConfig from "./constants/defaultConfig"
import message from "./lib/Message";

const path_sass_includes = "/../../sass/includes";

export const pkg = pJson;
export const scripts = require('require-all')({
  dirname: path.join(__dirname, "/scripts"),
  recursive: true
});

const files = fs.readdirSync(path.join(__dirname, path_sass_includes));

/* declare global blob */
let blob = "";

/* includes mixin scss files */
for (let file of files) {
  blob += fs.readFileSync(path.join(__dirname, `${path_sass_includes}/${ file }`));
}

export const scssBlob = minify(blob);

let pwd = process.cwd();
let pathfile = path.join(pwd, `./${pkg.name}.config.json`);
let isFileConfigExist = fs.existsSync(pathfile);
let fileConfig = isFileConfigExist ? fs.readFileSync(pathfile, "utf8") : JSON.stringify(defaultConfig);

if (isFileConfigExist) message.warning(`file config is exist at ./${path.basename(pathfile)}, use it!`);
else message.info("file config not found, use default configuration!");

try {
  let config = JSON.parse(fileConfig);
  
  /* load & parse config */
  for (let key in defaultConfig) {
    if (typeof config[key] === "undefined") config[key] = defaultConfig[key];
  }
  
  /* passing config */
  globalThis.config = config;
} catch (err) {
  message.danger("invalid file config, please check your file config!");
  process.exit();
}