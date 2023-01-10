import fs from "fs";
import path from "path";
import * as pkg from '../package.json';
import minify from "./helpers/minify";
import defaultConfig from "./constants/defaultConfig"
import message from "./lib/Message";

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

let pwd = process.cwd();
let pathfile = path.join(pwd, "./fisay.config.json");
let isFileConfigExist = fs.existsSync(pathfile);
let fileConfig = isFileConfigExist ? fs.readFileSync(pathfile, "utf8") : JSON.stringify(defaultConfig);

if (isFileConfigExist) message.warning("file config is exist, use it!");
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


export = {
  pkg,
  scripts
}