import init from "../init";
const { scripts } = init;

const propertiesParser = (attr: string) => {
  let syntax = "";
  for (let key in scripts) {
    let res = scripts[key](attr);
    if (res) {
      syntax += `.${ res.selector } {`
             + `${ res.value }`
             + `}`
     globalThis.blob += syntax;
    }
  }
  
}

export = propertiesParser;