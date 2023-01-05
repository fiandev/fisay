"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
class Message {
    generate(text, color, option = "normal") {
        return option == "normal" ? chalk_1.default.hex(color)(text) : chalk_1.default.hex(color)[option](text);
    }
    console(text) {
        console.log(text);
    }
    danger(text) {
        this.console(this.generate(text, "#f93b00"));
        process.exit();
    }
    info(text) {
        this.console(this.generate(text, "#00ff13"));
    }
    warning(text) {
        this.console(this.generate(text, "#feff08"));
    }
    success(text) {
        this.console(this.generate(text, "#08b835"));
    }
}
module.exports = new Message;
