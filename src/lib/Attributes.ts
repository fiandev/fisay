export default class {
  private attributes: string[];
  public constructor() {
    this.attributes = [];
  }
  
  private push(attr: string) {
    if (this.attributes?.includes(attr)) return false;
    
    this.attributes?.push(attr);
  }
  
  public add(attr: string[]) {
    attr.forEach(v => this.push(v))
  }
  
  public getAttributes() {
    return this.attributes;
  }
}