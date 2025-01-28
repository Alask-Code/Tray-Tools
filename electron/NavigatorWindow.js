const { BrowserWindow, app } = require('electron'); // Certifique-se de importar corretamente

function NavigatorWindow (path) {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true, // Use com cuidado por questões de segurança
      contextIsolation: false
    }
  });

  win.loadFile(`${path}/index.html`);
  win.webContents.openDevTools();

  return win; // Retorne a instância, caso necessário
}

module.exports = NavigatorWindow;
