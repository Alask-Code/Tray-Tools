const { Menu, Tray } = require('electron');
const { resolve } = require('path');
const icon = resolve(__dirname, '../', 'assets', 'icon.png');
const { log } = require('console');
function createTray () {
  const tray = new Tray(icon);
  tray.setToolTip('Tray Tools');

  const createWindow = require('./BrowserWindow');
  const win = createWindow();

  tray.on('click', () => {
    const { featureFlags: { BrowserWindow: { enabled: windowEnabled }, showLogs } } = require('../manifest.json');
    if (windowEnabled) {
      const windowPositioner = require('./windowPositioner');
      windowPositioner(tray, win);
    } else if (showLogs) {
      log('BrowserWindow is not enabled on manifest.json');
    }
  });

  tray.on('right-click', () => {
    const contextMenu = Menu.buildFromTemplate(require('./menuTemplate/template'));
    tray.setContextMenu(contextMenu);
    tray.popUpContextMenu();
  });

  return tray;
}
module.exports = createTray;
