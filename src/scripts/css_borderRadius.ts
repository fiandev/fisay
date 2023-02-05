import { BORDER_PREFIX_VALUES, WAY_PRERIX_VALUES } from "../constants/standardSize";

const css_borderRadius = (attr: string) => {
  const format = /^rounded\-?(t|r|b|l)?\-((xs|sm|md|lg|xl|xxl|full)|\[(\w+)\])/;
  let match = attr.match(format);
  if (!match) return false;
  const [selector, way, prefix, value, customValue] = match;
  
  return {
    selector: selector,
    value: `border${ way ? "-" + WAY_PRERIX_VALUES[way] : "" }: ${ /(\[|\])/.test(selector) ? customValue : BORDER_PREFIX_VALUES[prefix] };`
  } 
}


export = css_borderRadius;