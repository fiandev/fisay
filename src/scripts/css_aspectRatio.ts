import { ASPECT_PREFIX_VALUES } from "../constants/standardSize";

const css_aspectRatio = (attr: string) => {
  const format = new RegExp(`^aspect\-(${ Object.keys(ASPECT_PREFIX_VALUES).join("|") })$`);
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, prefix] = match;
  
  return {
    selector: selector,
    value: `aspect-ratio: ${ ASPECT_PREFIX_VALUES[prefix] }`
  }
}
export = css_aspectRatio;