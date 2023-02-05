import { Z_INDEX_VALUES } from "../constants/standardSize";

const css_zIndex = (attr: string) => {
  const format = new RegExp(`^z-(\[(\d+)\]|((${ Z_INDEX_VALUES.join("|") })))$`);
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, property, customValue] = match;
  
  return {
    selector: selector,
    value: `z-index: ${ /(\[|\])/.test(property) ? customValue : property };`
  }
}
export = css_zIndex;