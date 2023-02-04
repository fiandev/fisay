import specialCharacters from "../constants/specialCharacters";

const addSlashes = (str: string) => {
  return str
    .replace(/\[/g, `\\[`)
    .replace(/\]/g, `\\]`)
}
export = addSlashes;