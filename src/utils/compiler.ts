import cheerio from "cheerio";
import fs from "fs";
import fsx from "fs-extra";
import path from "path";
import Memories from "../lib/Memories";
import propertiesParser from "./propertiesParser";
import breakpointParser from "./breakpointParser";
import cssParser from "./cssParser";

const compiler = async (input: string, output: string) => {
  const blob = fs.readFileSync(path.resolve(input));
  const $ = cheerio.load(blob);
  
  // resolving path output
  const __output__ = path.resolve(output);
  
  // clear result files
  let isExist = fs.existsSync(__output__);
  if (isExist) fs.unlinkSync(__output__);
  
  // global memory
  globalThis.memory = {};
  
  // parsing body
  $("body, body *").each(function(i, e){
    let element = $(e);
    let attrClass = element?.attr("class");
    if (typeof attrClass !== "undefined") new Memories(attrClass);
  }) 
  
  const memories = globalThis.memory;
  
  // normal breakpoint
  memories["normal"].map(v => propertiesParser(v));
  delete globalThis.memory["normal"];
  
  // breakpoint
  for (let breakpoint in memories) {
    breakpointParser(breakpoint, memories[breakpoint]);
    delete globalThis.memory[breakpoint];
  }
  
  const blobCSS = globalThis.blob.replace(/(undefined)/g, "");
  cssParser(blobCSS, __output__);
}

export = compiler