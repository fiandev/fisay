"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_watch_1 = __importDefault(require("node-watch"));
const path_1 = __importDefault(require("path"));
const watcher = async (pathTarget, callback) => {
    callback();
    (0, node_watch_1.default)(pathTarget, {
        filter: /\.(htm(l)|js|jsx|vue|php)$/,
        recursive: true
    }, function (event, filename) {
        console.log(`${path_1.default.basename(filename)} ${event}`);
        callback();
    });
};
module.exports = watcher;
