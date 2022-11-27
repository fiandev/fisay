import observer from "node-watch";
import path from "path";

const watcher = async (pathTarget: string, callback: Function) => {
  callback()
  observer(pathTarget, { 
    filter: /\.(htm(l)|js|jsx|vue|php)$/,
    recursive: true
  }, function(event, filename){
    console.log(`${ path.basename(filename) } ${event}`)
    callback()
  });
}

export = watcher