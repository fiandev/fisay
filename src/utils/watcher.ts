import observer from "node-watch";

const watcher = async (path: string, callback: Function) => {
  callback()
  observer(path, { 
    filter: /\.(htm(l)|js|jsx|vue|php)$/,
    recursive: true
  }, function(event, filename){
    console.log(`${filename} ${event}`)
    callback()
  });
}

export = watcher