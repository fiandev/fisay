import fs from "fs";
import path from "path";
import sass from "sass";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import child_process from "child_process";
import Message from "../lib/Message";
import { pkg } from "../init";

const executeParser = ({ syntax, output, outdir }) => {
  let filename = path.basename(output);
  const compiled = sass.compileString(syntax, {
    sourceMap: globalThis.config.sourceMap, 
    style: globalThis.config.minified ? "compressed" : "expanded"
  });
  
  postcss([ autoprefixer(pkg.browserslist.production) ])      
  .process(compiled.css)
  .then(function(result) {
    fs.writeFileSync(output, result.css);
  })
  
  if (compiled["sourceMap"]) fs.writeFileSync(`${outdir}/${filename}.map`, JSON.stringify(compiled.sourceMap, null, 2));
  
  Message.success(`success compiled to ${outdir}/${filename}`);
}

const cssParser = (syntax: string, output: string) => {
  try {
    let isExist = fs.existsSync(output);
    let outdir = path.dirname(output);
    
    if (!isExist) {
      try {
        fs.writeFileSync(output, syntax);
      } catch(e) {
        Message.success(`generate folder at ${ output }`);
        fs.mkdirSync( outdir );
      } finally {
        executeParser({
          syntax: syntax,
          output: output,
          outdir: outdir
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