import specialCharacters from "../constants/specialCharacters";

const addSlashes = (str: string) => {
  str.replace(/\[/g, `\\[`);
  str.replace(/\]/g, `\\]`);
  
  return str;
}
export = addSlashes;