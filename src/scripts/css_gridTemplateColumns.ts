const css_gridTemplateColumns = (attr: string) => {
  const format = /^(grid-cols)-(\d)+/
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector,, value] = match;
  return {
    selector: selector,
    value: `grid-template-columns: repeat(${ value }, 1fr);`
  }
  
}

export = css_gridTemplateColumns;