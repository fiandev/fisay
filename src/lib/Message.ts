import chalk from "chalk";

class Message {
  public generate(text: string, color: string, option: string = "normal") {
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
  
  public warning (text: string) {
    this.console( this.generate(text, "#feff08") );
  }
  
  public success (text: string) {
    this.console( this.generate(text, "#08b835") );
  }
}


export = new Message;