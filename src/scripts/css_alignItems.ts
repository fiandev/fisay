const css_alignItems = (attr: string) => {
  const format = /^(items)-(center|stretch|start|end)/
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector,, value] = match;
  return {
    selector: selector,
    value: `align-items: ${ value };`
  }
  
}

export = css_alignItems;