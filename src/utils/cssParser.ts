import fs from "fs";
import path from "path";
import sass from "sass";
import child_process from "child_process";
import Message from "../lib/Message";
import init from "../init";

const { pkg } = init;

const executeParser = ({ from, output }) => {
  const result =  sass.compile(from, {
    sourceMap: true,
    style: globalThis.config.minified ? "compressed" : "expanded"
  });
  
  fs.writeFileSync(output, result.css)
}

const cssParser = (syntax: string, output: string) => {
  try {
    let isExist = fs.existsSync(output);
    let outdir = path.dirname(output);
    let fileSass = `${ outdir }/blob.scss`;
    
    globalThis.fileSass =  fileSass;
    
    if (!isExist) {
      try {
        fs.writeFileSync(output, syntax);
        fs.writeFileSync(fileSass, syntax);
      } catch(e) {
        Message.success(`generate folder at ${ output }`);
        fs.mkdirSync( outdir );
        fs.writeFileSync(fileSass, syntax);
      } finally {
        executeParser({
          from: fileSass,
          output: output
        });
      }
    }
    
  } catch(e) {
    Message.danger(`
      Error Occurred !
      message ; ${ Message.generate(e.message, "#FFFFFF") }
      please report this error at ${ pkg.bugs }
    `);
  }
}

export = cssParser;