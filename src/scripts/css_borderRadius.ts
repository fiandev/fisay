import { BORDER_PREFIX_VALUES, WAY_PRERIX_VALUES } from "../constants/standardSize";

const css_borderRadius = (attr: string) => {
  const format = /^rounded\-?(t|r|b|l)\-((xs|sm|md|lg|xl|xxl|full)|\[(\w+)\])/;
  let match = attr.match(format);
  if (!match) return false;
  const [selector, way, value, customValue] = match;
  
  return {
    selector: selector.replace(/\[/, "\\[").replace(/\]/, "\\]"),
    value: `border${ way ? "-" + WAY_PRERIX_VALUES[way] : "" }: ${ /(\[|\])/.test(value) ? customValue : value };`
  } 
}


export = css_borderRadius;