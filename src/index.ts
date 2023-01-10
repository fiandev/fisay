import App from "./bin/App";

if (typeof process === "undefined") throw new Error("sorry, not supported via browser");

let app = new App("node");
app.start();