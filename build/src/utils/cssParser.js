"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = __importDefault(require("child_process"));
const Message_1 = __importDefault(require("../lib/Message"));
const init_1 = __importDefault(require("../init"));
const { pkg } = init_1.default;
const executeParser = ({ from, output }) => {
    child_process_1.default.exec(`sass ${from} ${output}`, (err, stdout, stderr) => {
        if (err)
            Message_1.default.danger(err.message);
    });
};
const cssParser = (syntax, output) => {
    try {
        let isExist = fs_1.default.existsSync(output);
        let outdir = path_1.default.dirname(output);
        let fileSass = `${outdir}/blob.scss`;
        globalThis.fileSass = fileSass;
        if (!isExist) {
            try {
                fs_1.default.writeFileSync(output, syntax);
                fs_1.default.writeFileSync(fileSass, syntax);
            }
            catch (e) {
                Message_1.default.success(`generate folder at ${output}`);
                fs_1.default.mkdirSync(outdir);
                fs_1.default.writeFileSync(fileSass, syntax);
            }
            finally {
                executeParser({
                    from: fileSass,
                    output: output
                });
            }
        }
    }
    catch (e) {
        Message_1.default.danger(`
      Error Occurred !
      message ; ${Message_1.default.generate(e.message, "#FFFFFF")}
      please report this error at ${pkg.bugs}
    `);
    }
};
module.exports = cssParser;
