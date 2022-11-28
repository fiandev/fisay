import chalk from "chalk";

class Message {
  private generate(text: string, color: string, option: string = "normal") {
    return option == "normal" ? chalk.hex(color)(text) : chalk.hex(color)[option](text);
  }
  
  public console (text: string) {
    console.log(text);
  }
  
  public danger (text: string) {
    this.console( this.generate(text, "#f93b00") );
    process.exit();
  }
  
  public info (text: string) {
    this.console( this.generate(text, "#00ff13") );
  }
}


export = new Message;