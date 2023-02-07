const pkg = require("../package.json");
const path = require("path");
const { verifyPath, compile } = require("./utilities/functions.js");

verifyPath();

const __file__ = path.resolve(__dirname, "../sass/components.scss");
const __outdir__ = path.resolve(__dirname, "../dist/css");
compile(__file__, __outdir__);