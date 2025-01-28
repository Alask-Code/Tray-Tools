const { ipcMain } = require('electron');
const ChildWindow = require('./ChildWindow');

function registerIpcMain () {
  ipcMain.on('createWindow', (event, pathToFile) => {
    ChildWindow(pathToFile);
    event.reply('created window for ' + pathToFile);
  }
  );
}

module.exports = registerIpcMain;
