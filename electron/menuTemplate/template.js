const {
  edgeNewTab,
  edgeNewInPrivateTab,
  vsCodeOpenApp,
  vsCodeOpenProjectFolder,
  terminalNewPrompt,
  quit
} = require('./functions');

module.exports = [
  {
    label: 'Tray Tools 1.0.0',
    enabled: false
  },
  { type: 'separator' },
  {
    label: 'Microsoft Edge',
    submenu: [
      {
        label: 'Nova Aba',
        click: () => edgeNewTab
      },
      {
        label: 'Nova Aba InPrivate',
        click: () => edgeNewInPrivateTab
      }
    ]
  },
  {
    label: 'VS Code',
    submenu: [
      {
        label: 'Abrir VS Code',
        click: () => vsCodeOpenApp
      },
      {
        label: 'Abrir Projeto...',
        click: () => vsCodeOpenProjectFolder
      }
    ]
  },
  {
    label: 'Prompt de Comando',
    submenu: [
      {
        label: 'Novo Terminal',
        click: () => terminalNewPrompt
      }
    ]
  },
  { type: 'separator' },
  {
    label: 'Fechar',
    click: () => quit
  }
];
