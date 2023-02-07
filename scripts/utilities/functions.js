const fs = require("fs");
const path = require("path");
const sass = require("sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const pkg = require("../../package.json");
const { message } = require("../lib/Message");

const MESSAGE_EXCEPTION = "the script must be run at the root of the program, see package.json scripts to find out which scripts are available";
let pwd = path.join(process.cwd(), "./");
let root = path.join(__dirname, "../../");

module.exports = {
  verifyPath,
  compile,
  prefixer,
  message
};

function verifyPath () {
  const IsValid = pwd === root;
  if (!IsValid) {
    message.danger(MESSAGE_EXCEPTION);
    process.exit();
  }
}


async function compile (file, outdir) {
  const filename = `${pkg.name}.bundle` || "bundle";
  
  fs.writeFileSync(`${outdir}/${filename}.min.css`, await compileFileScss(file, "compressed"));
  fs.writeFileSync(`${outdir}/${filename}.css`, await compileFileScss(file, "expanded"));
  
  console.log(`success bundling file ${path.basename(file)}`);
}


async function compileFileScss (file, style) {
  const compiled = sass.compile(file, {
    sourceMap: false, 
    style: style
  });
  
  return await prefixer(compiled.css).css;
}

async function prefixer() {
  return await postcss([ autoprefixer(pkg.browserslist.production) ]).process(compiled.css);
}