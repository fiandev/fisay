import { BREAK_PREFIX_VALUES } from "../constants/standardSize";

const css_break = (attr: string) => {
  const format = new RegExp(`^break-(after|before|inside)-(${ Object.keys(BREAK_PREFIX_VALUES).join("|") })`);
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, prefix, value] = match;
  
  return {
    selector: selector,
    value: `break-${prefix}: ${BREAK_PREFIX_VALUES[value]}`
  }
}
export = css_break;