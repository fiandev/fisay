import { BREAK_DECORATION_PREFIX_VALUES } from "../constants/standardSize";

const css_break = (attr: string) => {
  const format = new RegExp(`^box-decoration-(${ Object.keys(BREAK_DECORATION_PREFIX_VALUES).join("|") })`);
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, prefix] = match;
  
  return {
    selector: selector,
    value: `box-decoration-${prefix}: ${BREAK_DECORATION_PREFIX_VALUES[prefix]}`
  }
}
export = css_break;