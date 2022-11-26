import init from "../init";
import propertiesParser from "./propertiesParser";
const { scripts } = init;

const breakpointFormat = {
  xs: "verySmall",
  sm: "small",
  md: "medium",
  lg: "large",
  xl: "veryLarge",
  xxl: "superLarge"
}

const breakpointParser = (breakpoint: string, items: string[]) => {
  const device = breakpointFormat[breakpoint];
  let syntax = "";
  syntax += `@include devices(${ device }) {`
  for (let item of items) {
    for (let key in scripts) {
      let res = scripts[key](item);
      if (res) {
        syntax += `.${ res.selector } {`
               + `${ res.value }`
               + `}`
      }
    }
  }
  syntax += "}";
  globalThis.blob += syntax;
}

export = breakpointParser;