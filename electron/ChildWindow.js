const { BrowserWindow, app } = require('electron');

function ChildWindow (path) {
  const win = new BrowserWindow({
    height: 500,
    width: 700,
    resizable:false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    alwaysOnTop:true,
  });
win.removeMenu()
  win.loadFile(`${path}/index.html`);
  if (developerMode) { win.openDevTools({ mode: 'detach' }); };


  return win;
}

module.exports = ChildWindow;
