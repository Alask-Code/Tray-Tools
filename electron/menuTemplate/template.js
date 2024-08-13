const {
  edgeNewTab,
  edgeNewInPrivateTab,
  vsCodeOpenApp,
  vsCodeOpenProjectFolder,
  terminalNewPrompt,
  quit
} = require('./functions');

const { appName, version } = require('../../manifest.json');
module.exports = [
  {
    label: `${appName} | ${version}`,
    enabled: false
  },
  { type: 'separator' },
  {
    label: 'Microsoft Edge',
    submenu: [
      {
        label: 'Nova Aba',
        click: edgeNewTab
      },
      {
        label: 'Nova Aba InPrivate',
        click: edgeNewInPrivateTab
      }
    ]
  },
  {
    label: 'VS Code',
    submenu: [
      {
        label: 'Abrir VS Code',
        click: vsCodeOpenApp
      },
      {
        label: 'Abrir Projeto...',
        click: vsCodeOpenProjectFolder
      }
    ]
  },
  {
    label: 'Prompt de Comando',
    submenu: [
      {
        label: 'Novo Terminal',
        click: terminalNewPrompt
      }
    ]
  },
  { type: 'separator' },
  {
    label: 'Fechar',
    click: quit
  }
];
