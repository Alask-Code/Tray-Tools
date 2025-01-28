const { appName } = require('../manifest.json');
const { apps } = require('../application/routes.json');
const { ipcRenderer } = require('electron');
document.title = appName;

apps.forEach(app => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.id = `${String(app.name).replaceAll(' ', '').toString('camel')}-${apps.indexOf(app)}`;
  menuItem.textContent = app.name;
  menuItem.addEventListener('click', () => {
    ipcRenderer.send('createWindow', app.pathToApp);
  });
  document.body.querySelector('.menu').appendChild(menuItem);
});
