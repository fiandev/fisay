import { scripts } from "../init";
import addSlashes from "../utils/addSlashes";

const propertiesParser = (attr: string) => {
  let syntax = "";
  for (let key in scripts) {
    let res = scripts[key](attr);
    if (res) {
      syntax += `.${ addSlashes(res.selector) } {`
             + `${ res.value }`
             + `}`
     globalThis.blob += syntax;
    }
  }
  
}

export = propertiesParser;