const css_justifyContent = (attr: string) => {
  const format = /^(justify)\-?(around|center|between|start|end)?/
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector,, property] = match;
  return {
    selector: selector,
    value: `justify-content: ${ property };`
  }
  
}

export = css_justifyContent;