export default class {
  public constructor(text: any) {
    let isBreakPoint = this.isBreakPoint(text);
    let isNormalScope = this.isNormalScope(text);
    if (isBreakPoint) {
      let [captures, breakpoint, attrs] = isBreakPoint;
      if (!globalThis.memory[breakpoint]) globalThis.memory[breakpoint] = [];
      this.push(breakpoint, attrs.split(" "));
    }
    
    if (isNormalScope) {
      if (!globalThis.memory["normal"]) globalThis.memory["normal"] = [];
      this.push("normal", text.split(" "));
      
    }
  }
  
  private isBreakPoint(text: any) {
    return text.match(/(\w+):\s?((\w|\-|\s)+)/);
  }
  
  private isNormalScope(text: any) {
    return !/(\w+):\s?((\w|\-|\s)+)/.test(text);
  }
  
  private push(key: string, items: string[]) {
    for (let item of items) {
      if (!globalThis.memory[key].includes(item)) globalThis.memory[key].push(item);
    }
  }
}