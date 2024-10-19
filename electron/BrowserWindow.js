const { resolve } = require('path');
const { BrowserWindow } = require('electron');
const icon = resolve(__dirname, '../', 'build', 'icon.png');

const {
  appName: title,
  openDevTools,
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
    width: 190,
    height: 190,
    transparent,
    skipTaskbar,
    alwaysOnTop,
    webPreferences,
    resizable: false,
    fullscreenable: false
  });
  win.hide();
  win.removeMenu();
  if (openDevTools) { win.openDevTools(); };
  win.loadFile('src/index.html');

  return win;
}

module.exports = createWindow;
