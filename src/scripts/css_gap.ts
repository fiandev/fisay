import parsePropertyValues from "../utils/parsePropertyValues";

const css_gap = (attr: string) => {
  const format = /^gap\-?(y|x)?\-(\[(\w+)\]|((1|2|3|4|6|8|10|12)))$/;
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, prefix, value, customValue] = match;
  
  let property = "gap";
  if (prefix && prefix === "x") property = "row-gap";
  if (prefix && prefix === "y") property = "column-gap";
  
  return {
    selector: selector.replace(/\[/, "\[").replace(/\]/, "\]"),
    value: `${property}: ${ /(\[|\])/.test(value) ? customValue : parsePropertyValues(value) };`
  }
}
export = css_gap;