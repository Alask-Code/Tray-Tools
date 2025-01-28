const { ipcMain } = require('electron');
const NavigatorWindow = require('./NavigatorWindow');

function registerIpcMain () {
  ipcMain.on('createWindow', (event, pathToFile) => {
    console.log('Message Received: ' + event);

    NavigatorWindow(pathToFile);
    event.reply('created window for ' + pathToFile);
  }
  );
}

module.exports = registerIpcMain;
