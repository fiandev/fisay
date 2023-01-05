import init from "../init";
import propertiesParser from "./propertiesParser";
import addSlashes from "./addSlashes";
import breakpointFormat from "../constants/breakpointFormat";

const { scripts } = init;

const breakpointParser = (breakpoint: string, items: string[]) => {
  const device = breakpointFormat[breakpoint] ? breakpointFormat[breakpoint] : "small";
  let syntax = "";
  syntax += `@include devices(${ device }) {`
  for (let item of items) {
    for (let key in scripts) {
      let res = scripts[key](item);
      if (res) {
        let selector = `.${breakpoint}\\:${res.selector}`;
        syntax += `${ addSlashes(selector) } {`
               + `${ res.value }`
               + `}`
      }
    }
  }
  syntax += "}";
  globalThis.blob += syntax;
}

export = breakpointParser;