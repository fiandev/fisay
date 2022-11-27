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
        child_process.exec(`sass ${ fileSass } ${ output }`);
      } catch(e) {
        fs.mkdirSync( outdir );
        fs.writeFileSync(fileSass, syntax);
        child_process.exec(`sass ${ fileSass } ${ output }`);
        
        console.error(e.message)
      }
    }
    
    /* delete blob of sass */
    fs.unlinkSync(fileSass);
    console.log("task completed!");
  } catch(e) {
    console.error(e);
  }
}

export = cssParser;