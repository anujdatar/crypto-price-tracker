// require('electron-reload')(__dirname)
const electron = require('electron')
const url = require('url')
const path = require('path')
const menuFile = require('./src/menu')

const{app, BrowserWindow, ipcMain} = electron

let mainWindow

function createWindow() {
  // Create main browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, '/assets/images/logo.png'),
    title: 'BitCoin Price Tracker'
  })

  // load index.html of the app in main window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/src/index.html'),
    protocol: 'file',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    // mainWindow = null
    app.quit()
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

exports.close_all = function() {
  app.quit()
}
