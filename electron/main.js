require('electron-reload')('../')
require('electron-reload')(__dirname)
const { app } = require('electron')
const createTray = require('./Tray')

app.whenReady().then(() => {
    createTray()
})