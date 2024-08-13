const { Menu, Tray } = require('electron');
const { resolve } = require('path');
const icon = resolve(__dirname, '../', 'assets', 'icon.png');

function createTray () {
  const tray = new Tray(icon);
  tray.setToolTip('Tray Tools');

  const createWindow = require('./BrowserWindow');
  const win = createWindow();

  tray.on('click', () => {
    const windowPositioner = require('./windowPositioner');
    windowPositioner(tray, win);
  });

  tray.on('right-click', () => {
    const contextMenu = Menu.buildFromTemplate(require('./menuTemplate/template'));
    tray.setContextMenu(contextMenu);
    tray.popUpContextMenu();
  });

  return tray;
}
module.exports = createTray;