const { Menu, Tray, app } = require('electron');
const menuTemplate = require('./menuTemplate/template');
const createWindow = require('./BrowserWindow');
const { resolve } = require('path');
const windowPositioner = require('./windowPositioner');

function createTray () {
  const tray = new Tray(resolve(__dirname, '../', 'assets', 'icon.png'));
  const contextMenu = Menu.buildFromTemplate(menuTemplate);
  tray.setToolTip('Tray Tools');

  const win = createWindow();
  tray.on('click', () => {
    windowPositioner(tray, win);
  });

  tray.on('right-click', () => {
    tray.setContextMenu(contextMenu);
    tray.popUpContextMenu();
  });

  return tray;
}
module.exports = createTray;
