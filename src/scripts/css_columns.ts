import { COLUMNS_PREFIX_VALUES } from "../constants/standardSize";
import parsePropertyValues from "../utils/parsePropertyValues";

const css_columns = (attr: string) => {
  console.log(COLUMNS_PREFIX_VALUES)
  const format = new RegExp(`^columns-(${ Object.keys(COLUMNS_PREFIX_VALUES).join("|") })`);
  let match = attr.match(format);
  
  if (!match) return false;
  const [selector, prefix] = match;
  
  return {
    selector: selector,
    value: `columns: ${COLUMNS_PREFIX_VALUES[prefix]}`
  }
}
export = css_columns;