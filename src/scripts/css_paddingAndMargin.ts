import { WAY_PRERIX_VALUES, PREFIX_VALUES } from "../constants/standardSize";
import parsePropertyValues from "../utils/parsePropertyValues";

const css_paddingAndMargin = (attr: string) => {
  const format = new RegExp(`^(p|m)(t|r|b|l|x|y)?\-(((${ PREFIX_VALUES.join("|") })+)|\\[(\\w+)\\])`);
  let match = attr.match(format);
  if (!match) return false;
  const [selector, prefix, way,, value,, customValue] = match;
  
  let result = `${ /(\[|\])/.test(selector) ? customValue : parsePropertyValues(value) }`;
  
  return {
    selector: selector,
    value: `${prefix === "p" ? "padding" : "margin"}${ way ? ( WAY_PRERIX_VALUES[way] ? "-" + WAY_PRERIX_VALUES[way] : "" ) : "" }: ${ way === "x" || way === "y" ? (way === "x" ? "0 " + result : result + " 0") : result };`
  } 
}


export = css_paddingAndMargin;