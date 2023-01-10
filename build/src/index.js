"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./bin/App"));
if (typeof process === "undefined")
    throw new Error("sorry, not supported via browser");
let app = new App_1.default("node");
app.start();
