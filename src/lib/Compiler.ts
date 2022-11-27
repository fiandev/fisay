import path from "path";
import cheerio from "cheerio";
import fs from "fs";
import fsx from "fs-extra";
import readDirectory from "fs-readdir-recursive";
import Memories from "./Memories";
import propertiesParser from "../utils/propertiesParser";
import breakpointParser from "../utils/breakpointParser";
import cssParser from "../utils/cssParser";

export default class {
  private input: string;
  private output: string;
  
  public constructor (input: string, output: string) {
    /* initialize attributes */
    this.output = output;
    this.input = input;
  }
  
  public run () {
    /* check if target input is directory */
    if (fs.lstatSync(this.input).isDirectory()) this.parseDirectory(this.input);
    else this.compile(this.input);
  }
  
  private async parseDirectory (input: string) {
    const files = readDirectory(input);
    
    files.forEach(file => {
      let pathfile = path.join(this.input, `/${ file }`);
      this.compile(pathfile);
    });
  }
  
  private async compile (input: string) {
    const blob = fs.readFileSync(path.resolve(input));
    const $ = cheerio.load(blob);
    
    // resolving path output
    const __output__ = path.resolve(this.output);
    
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
  
}