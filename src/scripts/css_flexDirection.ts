import { FLEX_DIRECTION_PREFIX_VALUES } from "../constants/standardSize";

const css_flexDirection = (attr: string) => {
  const format = /flex\-((row|col)(\-(reverse))?)/;
  let match = attr.match(format);
  if (!match) return false;
  const [selector, prefix] = match;
  
  return {
    selector: selector,
    value: `flex-direction: ${FLEX_DIRECTION_PREFIX_VALUES[prefix]}`
  }
}
export = css_flexDirection;