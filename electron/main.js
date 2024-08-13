require('electron-reload')('../');
const { app } = require('electron');
const createTray = require('./Tray');
const { appName } = require('../manifest.json');

app.whenReady().then(() => {
  const tray = createTray();
});

app.setAppUserModelId(appName);
