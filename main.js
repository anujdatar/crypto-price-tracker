const electron = require('electron')
const url = require('url')
const path = require('path')
const menuFile = require('./assets/src/menu')

const{app, BrowserWindow, ipcMain} = electron

let mainWindow

// function initialize() {
//   const shouldQuit = makeSingleInstane()
//   if (shouldQuit) return app.quit()
// }

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
    pathname: path.join(__dirname, '/assets/src/index.html'),
    protocol: 'file',
    slashes: true
  }))

  mainWindow.on('closed', function() {
    // mainWindow = null
    app.quit()
  })

  // const mainMenu = Menu.buildFromTemplate(menuFile.mainMenuTemplate)
  // Menu.setApplicationMenu(mainMenu)

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
