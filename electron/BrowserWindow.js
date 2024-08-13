const { resolve } = require('path');
const { BrowserWindow } = require('electron');
const icon = resolve(__dirname, '../', 'build', 'icon.png');

function createWindow () {
  const win = new BrowserWindow({
    icon,
    width: 290,
    height: 290,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    // transparent: true,
    alwaysOnTop: true,
    fullscreenable: false,
    title: 'Tray Tools',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });
  win.hide();
  win.removeMenu();
  win.loadFile('src/index.html');

  return win;
}

module.exports = createWindow;
