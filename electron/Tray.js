const { Menu, Tray } = require('electron');
const menuTemplate = require('./menuTemplate');
const { resolve } = require('path');

function createTray () {
  const tray = new Tray(resolve(__dirname, '../', 'assets', 'icon.png'));
  const contextMenu = Menu.buildFromTemplate(menuTemplate);
  tray.setToolTip('Tray Tools');
  tray.on('click', () => {
    tray.setContextMenu(contextMenu);
    tray.popUpContextMenu();
  });
}
module.exports = createTray;
