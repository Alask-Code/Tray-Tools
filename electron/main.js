require('electron-reload')('../');

const { app } = require('electron');
const createTray = require('./Tray');
const { appName: id } = require('../manifest.json');

app.whenReady().then(() => {
  createTray();
});

app.setAppUserModelId(id);
