const { ipcMain } = require("electron");
const ChildWindow = require("./ChildWindow");

function registerIpcMain() {
  const childWindow = ChildWindow();
  ipcMain.on("createWindow", (event, pathToFile) => {
    console.log(pathToFile);

    childWindow.loadFile(`${pathToFile}/index.html`);
    childWindow.show();
    event.reply("created window for " + pathToFile);
  });
  ipcMain.on("minimize", (event) => {
    childWindow.minimize();
  });
  ipcMain.on("close", (event) => {
    childWindow.hide();
  });
}

module.exports = registerIpcMain;
