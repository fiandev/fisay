import specialCharacters from "../constants/specialCharacters";

const addSlashes = (str: string) => {
  let text = str.replace(/\:/, "\\:")
                .replace(/\]/, "\\]")
                .replace(/\[/, "\\[")
                .replace("/", "\\/")
                .replace(/\./, "\\.")
  return text;
}
export = addSlashes;