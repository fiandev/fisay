"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = __importDefault(require("child_process"));
const cssParser = (syntax, output) => {
    try {
        let isExist = fs_1.default.existsSync(output);
        let outdir = path_1.default.dirname(output);
        let fileSass = `${outdir}/blob.scss`;
        if (!isExist) {
            try {
                fs_1.default.writeFileSync(output, syntax);
                fs_1.default.writeFileSync(fileSass, syntax);
                child_process_1.default.exec(`sass ${fileSass} ${output}`, (err, stdout, stderr) => console.log(stdout));
            }
            catch (e) {
                fs_1.default.mkdirSync(outdir);
                fs_1.default.writeFileSync(fileSass, syntax);
                child_process_1.default.exec(`sass ${fileSass} ${output}`, (err, stdout, stderr) => console.log(stdout));
                console.error(e.message);
            }
            finally {
                /* delete blob of sass */
                console.log("task completed!");
            }
        }
    }
    catch (e) {
        console.error(e);
    }
};
module.exports = cssParser;
