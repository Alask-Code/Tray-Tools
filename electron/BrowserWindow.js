const { resolve } = require('path');
const { BrowserWindow } = require('electron');
const icon = resolve(__dirname, '../', 'build', 'icon.png');
const {
  appName: title,
  featureFlags: {
    BrowserWindow: {
      options: {
        frame,
        transparent,
        alwaysOnTop,
        skipTaskbar,
        webPreferences
      }
    }
  }
} = require('../manifest.json');

function createWindow () {
  const win = new BrowserWindow({
    icon,
    title,
    frame,
    width: 290,
    height: 290,
    transparent,
    skipTaskbar,
    alwaysOnTop,
    webPreferences,
    resizable: false,
    fullscreenable: false
  });
  win.hide();
  win.removeMenu();
  win.loadFile('src/index.html');

  return win;
}

module.exports = createWindow;
