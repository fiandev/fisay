import { FLEX_PREFIX_VALUES } from "../constants/standardSize";

const css_flexWrap = (attr: string) => {
  const format = new RegExp(`^flex-(${ Object.keys(FLEX_PREFIX_VALUES).join("|") })$`);
  let match = attr.match(format);
  if (!match) return false;
  const [selector, prefix] = match;
  
  return {
    selector: selector,
    value: `flex: ${FLEX_PREFIX_VALUES[prefix]}`
  }
}
export = css_flexWrap;