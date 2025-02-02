const { ipcMain,app } = require("electron");
const ChildWindow = require("./ChildWindow");

function registerIpcMain() {
  let childWindow;
  ipcMain.on("createWindow", (event, pathToFile) => {
    childWindow = ChildWindow();
    console.log(pathToFile);
    childWindow.loadFile(`${pathToFile}/index.html`);
    childWindow.show();  
    console.log("created window for " + pathToFile);
  });
  ipcMain.on("minimize", (event) => {
    childWindow.minimize();
  });
  ipcMain.on("close", (event) => {
    childWindow.close();
  });
}

module.exports = registerIpcMain;
