const { BrowserWindow, app } = require("electron");
const { developerMode, webPreferences } = require("../manifest.json");
function ChildWindow(path) {
  const win = new BrowserWindow({
    height: 500,
    width: 700,
    resizable: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      nodeIntegrationInSubFrames: true,
    },
    frame: false,
    alwaysOnTop: true,
  });
  win.hide();
  win.removeMenu();
  if (developerMode) {
    win.openDevTools({ mode: "detach" });
  }

  return win;
}

module.exports = ChildWindow;
