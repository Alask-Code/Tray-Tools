const { app } = require('electron');
const createTray = require('./Tray');

app.whenReady().then(() => {
  createTray();
});
app.setAppUserModelId('Tray Tools');
