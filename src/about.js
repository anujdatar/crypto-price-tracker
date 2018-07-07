const {BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let aboutWindow

module.exports = {
  createAbout: function () {
    aboutWindow = new BrowserWindow({
      // frame: false,
      transparent: true,
      alwaysOnTop: true,
      width: 400,
      height: 200,
      icon: path.join(__dirname, '../assets/images/bitcoin.png')
    })
    aboutWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../sections/about.html'),
      protocol: 'file',
      slashes: true
    }))
    aboutWindow.setMenu(null)
    aboutWindow.on('close', () => {
      aboutWindow = null
    })
  }
}
