const { exec } = require('child_process');
const { app, dialog, Notification } = require('electron');
module.exports = [
  {
    label: 'Tray Tools v1.2.0',
    enabled: false
  },
  { type: 'separator' },
  {
    label: 'Microsoft Edge',
    submenu: [
      {
        label: 'Nova Aba',
        click: () => { exec('start msedge'); }
      },
      {
        label: 'Nova Aba InPrivate',
        click: () => { exec('start msedge.exe "" -inprivate'); }
      }
    ]
  },
  {
    label: 'VS Code',
    submenu: [
      {
        label: 'Abrir VS Code',
        click: () => { exec('code'); }
      },
      {
        label: 'Abrir Projeto...',
        click: () => {
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
      }
    ]
  },
  {
    label: 'Prompt de Comando',
    submenu: [
      {
        label: 'Novo Terminal',
        click: () => { exec('start cmd'); }
      }
    ]
  },
  { type: 'separator' },
  {
    label: 'Fechar',
    click: () => { app.quit(); }
  }
];
