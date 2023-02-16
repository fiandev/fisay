import { FLEX_BASIS_PREFIX_VALUES } from "../constants/standardSize";
import parsePropertyValues from "../utils/parsePropertyValues";

const css_flexBasis = (attr: string) => {
  const format = new RegExp(`^basis-(${ Object.keys(FLEX_BASIS_PREFIX_VALUES).join("|") })$`);
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, value, customValue] = match;
  
  return {
    selector: selector,
    value: `flex-basis: ${ /(\[|\])/.test(value) ? customValue : (typeof value === "number" ? parsePropertyValues(FLEX_BASIS_PREFIX_VALUES[value]) : FLEX_BASIS_PREFIX_VALUES[value]) };`
  }
}
export = css_flexBasis;