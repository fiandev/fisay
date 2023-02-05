import { PREFIX_VALUES } from "../constants/standardSize";
import parsePropertyValues from "../utils/parsePropertyValues";

const css_gap = (attr: string) => {
  const format = new RegExp(`^gap\-?(y|x)?\-(\\[(\\w+)\\]|(((${ PREFIX_VALUES.join("|") })+)))$`);
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, prefix, value, customValue] = match;
  
  let property = "gap";
  if (prefix && prefix === "x") property = "row-gap";
  if (prefix && prefix === "y") property = "column-gap";
  
  return {
    selector: selector,
    value: `${property}: ${ /(\[|\])/.test(value) ? customValue : parsePropertyValues(value) };`
  }
}
export = css_gap;