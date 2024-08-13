const { resolve } = require('path');
const { BrowserWindow } = require('electron');
const icon = resolve(__dirname, '../', 'build', 'icon.png');
const { appName: title } = require('../manifest.json');

function createWindow () {
  const win = new BrowserWindow({
    icon,
    title,
    width: 290,
    height: 290,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    // transparent: true,
    alwaysOnTop: true,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });
  win.hide();
  win.removeMenu();
  win.openDevTools();
  win.loadFile('src/index.html');

  return win;
}

module.exports = createWindow;
