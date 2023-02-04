import addSlashes from "../utils/addSlashes";

const css_zIndex = (attr: string) => {
  const format = /^z-(\[(\d+)\]|((10|20|30|40|50|60|70|80|90|100)))$/;
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, property, customValue] = match;
  
  return {
    selector: selector.replace(/\[/, "\\[").replace(/\]/, "\\]"),
    value: `z-index: ${ /(\[|\])/.test(property) ? customValue : property };`
  }
}
export = css_zIndex;