const {log} = require('console')
const {developerMode:isDev} = require('../manifest.json')
const devLog = (message) => isDev ? log(message) : "" 

module.exports = devLog