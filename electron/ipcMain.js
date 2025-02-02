const { ipcMain, BrowserWindow } = require("electron");
const ChildWindow = require("./ChildWindow");

function registerIpcMain() {
  const childWindows = new Map();

  ipcMain.on("createWindow", (event, pathToFile) => {
    const childWindow = ChildWindow();
    
    // Garante que estamos armazenando a instância correta
    const windowId = childWindow.webContents.id;
    childWindows.set(windowId, childWindow);

    console.log(`Creating window for ${pathToFile}`);
    childWindow.loadFile(`${pathToFile}/index.html`);
    childWindow.show();
  });

  ipcMain.on("minimize", (event) => {
    const childWindow = childWindows.get(event.sender.id);
    if (childWindow && !childWindow.isDestroyed()) {
      childWindow.minimize();
    } else {
      console.error("No child window found to minimize for sender id:", event.sender.id);
    }
  });

  ipcMain.on("close", (event) => {
    const childWindow = childWindows.get(event.sender.id);
    if (childWindow && !childWindow.isDestroyed()) {
      childWindow.close();
      childWindows.delete(event.sender.id);
    } else {
      console.error("No child window found to close for sender id:", event.sender.id);
    }
  });
}

module.exports = registerIpcMain;
