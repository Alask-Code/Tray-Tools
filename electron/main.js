const { app } = require('electron');
const createTray = require('./Tray');

app.whenReady().then(() => {
  const tray = createTray();
});
app.setAppUserModelId('Tray Tools');
