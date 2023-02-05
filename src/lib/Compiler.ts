import path from "path";
import cheerio from "cheerio";
import fs from "fs";
import fsx from "fs-extra";
import readdir from "fs-readdir-recursive";
import Memories from "./Memories";
import Message from "./Message";
import propertiesParser from "../utils/propertiesParser";
import breakpointParser from "../utils/breakpointParser";
import cssParser from "../utils/cssParser";
import { scssBlob } from "../init";

export default class {
  private input: string;
  private output: string;
  private __output__: string;
  private config: any;
  
  public constructor (input: string, output: string) {
    /* initialize attributes */
    this.output = output;
    this.input = input;
    
    // resolving path output
    this.__output__ = path.resolve(this.output);
    this.config = globalThis.config;
  }
  
  public async run () {
    /* set to default value */
    if (globalThis["memory"]) delete globalThis["memory"];
    globalThis["blob"] = scssBlob;
     
    /* check if target input is directory */
    let isDir = fs.lstatSync(this.input).isDirectory();
    if (isDir) await this.parseDirectory(this.input);
    else await this.compile(this.input);
    
    const memories = globalThis.memory;
    // normal breakpoint
    memories["normal"]?.map(v => propertiesParser(v));
    
    // breakpoint
    for (let breakpoint in memories) {
      if (breakpoint !== "normal") await breakpointParser(breakpoint, memories[breakpoint]);
    }
    
    let blob = globalThis.blob;
    blob.replace(/(undefined)/g, "");
    
    const blobCSS = blob;
    cssParser(blobCSS, this.__output__);
    
    Message.warning(`task completed!`);
    Message.success(`success compile ${ isDir ? "directory" : "file" } at ${ path.basename(this.input) }`);
  }
  
  private async parseDirectory (input: string) {
    const files = readdir(input);
    
    files.forEach(file => {
      let pathfile = path.join(this.input, `/${ file }`);
      this.compile(pathfile);
    });
  }
  
  private async compile (input: string) {
    // get extension of file input
    let extension = path.extname(path.resolve(input)).slice(1);
    
    // ignore file when extension now allowed
    if ( !this.config.allowedExtension.includes(extension) ) return;
    
    const blob = fs.readFileSync(path.resolve(input));
    const $ = cheerio.load(blob);
    
    // clear result files
    let isExist = fs.existsSync(this.__output__);
    if (isExist) fs.unlinkSync(this.__output__);
    
    // global memory
    globalThis.memory = Object.keys(typeof globalThis.memory === "undefined" ? {} : globalThis.memory).length !== 0 ? globalThis.memory : {};
    
    // parsing body
    $("body, body *").each(function(i, e){
      let element = $(e);
      let attrClass = element?.attr("class");
      if (typeof attrClass !== "undefined") new Memories(attrClass);
    });
    
  }
  
}