export default class {
  public constructor(attrClass: string) {
    let attrs = attrClass.split(/\s/)
    for (let attr of attrs) {
      
      let isBreakPoint = this.isBreakPoint(attr);
      let isNormalScope = this.isNormalScope(attr);
      
      if (isBreakPoint) {
        let [captures, breakpoint, scopes] = isBreakPoint;
        if (!globalThis.memory[breakpoint]) globalThis.memory[breakpoint] = [];
        this.push(breakpoint, scopes.split(" "));
      }
      
      if (isNormalScope) {
        if (!globalThis.memory["normal"]) globalThis.memory["normal"] = [];
        this.push("normal", attr.split(" "));
        
      }
      
    }
  }
  
  private isBreakPoint(text: any) {
    return text.match(/\s?(\w+):\s?((\w|\-|\s)+)/);
  }
  
  private isNormalScope(text: any) {
    return !/\s?(\w+):\s?((\w|\-|\s)+)/.test(text);
  }
  
  private push(key: string, items: string[]) {
    for (let item of items) {
      if (!globalThis.memory[key].includes(item)) globalThis.memory[key].push(item);
    }
  }
}