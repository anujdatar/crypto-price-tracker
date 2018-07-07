// require('electron-reload')(__dirname)
const electron = require('electron')
const url = require('url')
const path = require('path')
// const Toaster = require('electron-toaster')
// const ipcMain = require('electron').ipcMain
require('./src/menu')

const{app, BrowserWindow, ipcMain} = electron

let mainWindow
// let toaster = new Toaster()

function createWindow() {
  // Create main browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, './assets/images/bitcoin.png'),
    title: 'BitCoin Price Tracker'
  })

  // load index.html of the app in main window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './sections/index.html'),
    protocol: 'file',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    // mainWindow = null
    app.quit()
  })

  //Open the DevTools.
  // mainWindow.webContents.openDevTools()

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

app.setAppUserModelId('com.ajax.crypto')

// exports.close_all = function() {
//   app.quit()
// }

ipcMain.on('update-notify-value', (event, arg) => {
  mainWindow.webContents.send('targetPriceVal', arg)
})

// ipcMain.on('electron-toaster-message', (message) => {
//   toaster.init(mainWindow)
// })
