const { appName } = require('../manifest.json');
const { apps } = require('../application/routes.json');
document.title = appName;

apps.forEach(app => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.textContent = app.name;
  document.body.querySelector('.menu').appendChild(menuItem);
});
