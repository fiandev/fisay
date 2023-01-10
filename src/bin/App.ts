import fs from "fs";
import path from "path";

import node from "../core/node";
// import browser from "../core/browser";

export default class App {
  private type: string;
  
  constructor(type: string) {
    this.type = type;
  }
  
  public start () {
    /* initialize */
    
    node.parse();
  }
}