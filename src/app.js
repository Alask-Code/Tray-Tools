const { appName } = require('../manifest.json');
const { apps } = require('../application/routes.json');
document.title = appName;

apps.forEach(app => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.id = `item${apps.indexOf(app)}`;
  menuItem.textContent = app.name;
  menuItem.addEventListener('click', () => {
    window.alert(JSON.stringify(app));
  });
  document.body.querySelector('.menu').appendChild(menuItem);
});
