const flexer = (blob: string) => {
  return blob.replace(/(undefined)/g, "").replace(/\{/g, "{\n").replace(/\;/g, ";\n").replace(/\}/g, "}\n");
}

export = flexer;