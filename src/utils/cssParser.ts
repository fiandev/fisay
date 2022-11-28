import fs from "fs";
import path from "path";
import child_process from "child_process";


const cssParser = (syntax: string, output: string) => {
  try {
    let isExist = fs.existsSync(output);
    let outdir = path.dirname(output);
    let fileSass = `${ outdir }/blob.scss`;
    if (!isExist) {
      try {
        fs.writeFileSync(output, syntax);
        fs.writeFileSync(fileSass, syntax);
        child_process.exec(`sass ${ fileSass } ${ output }`, (err, stdout, stderr) => console.log(stdout) );
      } catch(e) {
        fs.mkdirSync( outdir );
        fs.writeFileSync(fileSass, syntax);
        child_process.exec(`sass ${ fileSass } ${ output }`, (err, stdout, stderr) => console.log(stdout) );
        
        console.error(e.message)
      } finally {
        /* delete blob of sass */
        console.log("task completed!");
      }
    }
    
  } catch(e) {
    console.error(e);
  }
}

export = cssParser;