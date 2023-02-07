const chalk = require("chalk");

class Message {
   generate(text, color, option = "normal") {
    return option == "normal" ? chalk.hex(color)(text) : chalk.hex(color)[option](text);
  }
  
   console (text) {
    console.log(text);
  }
  
   danger (text) {
    this.console( this.generate(text, "#f93b00") );
    process.exit();
  }
  
   info (text) {
    this.console( this.generate(text, "#0798ff") );
  }
  
   warning (text) {
    this.console( this.generate(text, "#feff08") );
  }
  
   success (text) {
    this.console( this.generate(text, "#08b835") );
  }
}

const message = new Message();

module.exports = {
  Message,
  message
};