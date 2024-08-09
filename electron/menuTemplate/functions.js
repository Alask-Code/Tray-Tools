const { app, dialog, Notification } = require('electron');

const { exec } = require('child_process');

function edgeNewTab () {
  exec('start msedge');
}
function edgeNewInPrivateTab () {
  exec('start msedge.exe "" -inprivate');
}
function vsCodeOpenApp () {
  exec('code');
}
function vsCodeOpenProjectFolder () {
  try {
    const path = dialog.showOpenDialogSync({ properties: ['openDirectory'] }).toString();
    exec(`code "${path}"`);
  } catch (error) {
    new Notification({
      title: 'Erro',
      body: 'Operação cancelada pelo usuario.'
    }).show();
  }
}
function terminalNewPrompt () {
  exec('start cmd');
}

function quit () {
  app.quit();
}

module.exports = {
  edgeNewTab,
  edgeNewInPrivateTab,
  vsCodeOpenApp,
  vsCodeOpenProjectFolder,
  terminalNewPrompt,
  quit
};
