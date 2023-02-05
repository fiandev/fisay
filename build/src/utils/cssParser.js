"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sass_1 = __importDefault(require("sass"));
const autoprefixer_1 = __importDefault(require("autoprefixer"));
const postcss_1 = __importDefault(require("postcss"));
const Message_1 = __importDefault(require("../lib/Message"));
const init_1 = require("../init");
const executeParser = ({ syntax, output, outdir }) => {
    let filename = path_1.default.basename(output);
    const compiled = sass_1.default.compileString(syntax, {
        sourceMap: globalThis.config.sourceMap,
        style: globalThis.config.minified ? "compressed" : "expanded"
    });
    (0, postcss_1.default)([(0, autoprefixer_1.default)(init_1.pkg.browserslist.production)])
        .process(compiled.css)
        .then(function (result) {
        fs_1.default.writeFileSync(output, result.css);
    });
    if (compiled["sourceMap"])
        fs_1.default.writeFileSync(`${outdir}/${filename}.map`, JSON.stringify(compiled.sourceMap, null, 2));
    Message_1.default.success(`success compiled to ${outdir}/${filename}`);
};
const cssParser = (syntax, output) => {
    try {
        let isExist = fs_1.default.existsSync(output);
        let outdir = path_1.default.dirname(output);
        if (!isExist) {
            try {
                fs_1.default.writeFileSync(output, syntax);
            }
            catch (e) {
                Message_1.default.success(`generate folder at ${output}`);
                fs_1.default.mkdirSync(outdir);
            }
            finally {
                executeParser({
                    syntax: syntax,
                    output: output,
                    outdir: outdir
                });
            }
        }
    }
    catch (e) {
        Message_1.default.danger(`
      Error Occurred !
      message ; ${Message_1.default.generate(e.message, "#FFFFFF")}
      please report this error at ${init_1.pkg.bugs}
    `);
    }
};
module.exports = cssParser;
