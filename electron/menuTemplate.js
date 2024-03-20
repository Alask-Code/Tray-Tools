const { exec } = require('child_process');
const { app, dialog, Notification } = require('electron');
module.exports = [
  {
    label: 'Microsoft Edge',
    submenu: [
      {
        label: 'New Tab',
        click: () => { exec('start msedge'); }
      },
      {
        label: 'New InPrivate Tab',
        click: () => { exec('start msedge.exe "" -inprivate'); }
      }
    ]
  },
  {
    label: 'VS Code',
    submenu: [
      {
        label: 'Open VS Code',
        click: () => { exec('code'); }
      },
      {
        label: 'Open Project...',
        click: () => {
          let path;
          try {
            path = dialog.showOpenDialogSync({ properties: ['openDirectory'] }).toString();
            exec(`code "${path}"`);
          } catch (error) {
            new Notification({
              title: 'Error',
              body: 'No file selected.'
            }).show();
          }
        }
      }
    ]
  },
  {
    label: 'Command Prompt',
    submenu: [
      {
        label: 'New Terminal',
        click: () => { exec('start cmd'); }
      }
    ]
  }, {
    label: 'Settings',
    submenu: [
      { label: 'Language' },
      { label: 'Search for Updates' },
      { label: 'About Project' },
      { label: 'Help' }
    ],
    enabled: false
  },
  { type: 'separator' },
  {
    label: 'Quit',
    click: () => { app.quit(); }
  }
];
