const { resolve } = require('path');
const { BrowserWindow } = require('electron');
const icon = resolve(__dirname, '../', 'build', 'icon.png');

const {
  appName: title,
  developerMode,
  featureFlags: {
    BrowserWindow: {
      options: {
        width,
        height,
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
    width,
    height,
    transparent,
    skipTaskbar,
    alwaysOnTop,
    webPreferences,
    resizable: false,
    fullscreenable: false
  });
  win.hide();
  win.removeMenu();
  if (developerMode) { win.openDevTools({ mode: 'detach' }); };
  win.loadFile('src/index.html');

  return win;
}

module.exports = createWindow;
