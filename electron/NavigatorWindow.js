const { BrowserWindow, app } = require('electron');

function NavigatorWindow (path) {
  const win = new BrowserWindow({
    height: 500,
    width: 700,
    resizable:false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    alwaysOnTop:true,
  });
win.removeMenu()
  win.loadFile(`${path}/index.html`);
  win.webContents.openDevTools();

  return win;
}

module.exports = NavigatorWindow;
