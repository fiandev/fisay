import observer from "node-watch";
import path from "path";
import message from "../lib/Message";

const watcher = async (pathTarget: string, callback: Function) => {
  callback();
  message.info("watching file changed...")
  observer(pathTarget, { 
    filter: /\.(htm(l)|js|jsx|vue|php)$/,
    recursive: true
  }, function(event, filename){
    console.log(`${ path.basename(filename) } ${event}`)
    callback()
  });
}

export = watcher