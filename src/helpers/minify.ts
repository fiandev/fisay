const minify = (filecontent: any) => {
  if (!filecontent) return;
  return filecontent
          .replace(/\/\s?.*\s?\//g, '') // delete comments
          .replace(/\n/g, '')
          .replace(/\s\s+/g, ' ');
}

export = minify;