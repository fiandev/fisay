"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_watch_1 = __importDefault(require("node-watch"));
const path_1 = __importDefault(require("path"));
const Message_1 = __importDefault(require("../lib/Message"));
const watcher = (pathTarget, callback) => __awaiter(void 0, void 0, void 0, function* () {
    callback();
    Message_1.default.info("watching file changed...");
    (0, node_watch_1.default)(pathTarget, {
        filter: /\.(htm(l)|js|jsx|vue|php)$/,
        recursive: true
    }, function (event, filename) {
        console.log(`${path_1.default.basename(filename)} ${event}`);
        callback();
    });
});
module.exports = watcher;
