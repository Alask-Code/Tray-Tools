const { Menu, Tray } = require('electron')
const menuTemplate = require('./menuTemplate')

function createTray() {
    const tray = new Tray('assets/icon.png')
    const contextMenu = Menu.buildFromTemplate(menuTemplate)
    tray.setToolTip('Tray Tools')
    let open = false
    tray.on('click', () => {
        tray.setContextMenu(contextMenu)
        tray.popUpContextMenu()
    })
}
module.exports = createTray