const { appName } = require("../manifest.json");
const { apps } = require("../application/routes.json");
const { ipcRenderer } = require("electron");
const devLog = require("../electron/devLog");
document.title = appName;

function createLabel(appName) {
  const labelItem = document.createElement("p");
  labelItem.textContent = appName;
  return labelItem;
}
function createID(appName, appList) {
  return `${String(appName)
    .replaceAll(" ", "")
    .toString("camel")}-${apps.indexOf(appName)}`;
}

function createIcon(appIcon) {
  const iconItem = document.createElement("i");
  iconItem.classList.add("ph");
  iconItem.classList.add("menu-icon");
  iconItem.classList.add(appIcon);
  return iconItem;
}

function createWidgetScreen(pathToApp) {
  const widgetScreen = document.createElement("iframe");
  widgetScreen.classList.add("widget-screen");
  widgetScreen.src = `../${pathToApp}/widgetScreen.html`;
  return widgetScreen;
}
function createMenuItem(app) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.id = createID(app.name, apps);
  if (app.useWidgetScreen) {
    devLog(`${app.name} is using widget screen`);
    menuItem.appendChild(createWidgetScreen(app.pathToApp));
  } else {
    menuItem.appendChild(createIcon(app.icon));
    menuItem.appendChild(createLabel(app.name));
  }

  return menuItem;
}
apps.forEach((app) => {
  const menuItem = createMenuItem(app);
  menuItem.addEventListener("click", () => {
    ipcRenderer.send("createWindow", app.pathToApp);
  });
  document.body.querySelector(".menu").appendChild(menuItem);
});
