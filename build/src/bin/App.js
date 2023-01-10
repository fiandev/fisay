"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("../core/node"));
// import browser from "../core/browser";
class App {
    constructor(type) {
        this.type = type;
    }
    start() {
        /* initialize */
        node_1.default.parse();
    }
}
exports.default = App;
