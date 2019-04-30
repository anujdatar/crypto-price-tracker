const electron = require('electron')

const url = require('url')
const path = require('path')

const Store = require('electron-store')

const{app, BrowserWindow, ipcMain, Tray, Menu} = electron

let tray
let mainWindow
let splash

app.on('ready', () => {
  //set up tray item
  tray = new Tray(path.join(__dirname, './assets/images/bitcoin.png'))
  const contextMenu = Menu.buildFromTemplate([
    {label: 'item1', type: 'radio'},
    {label: 'item2', type: 'radio', checked: true}
  ])
  tray.setToolTip('myapp')
  tray.setContextMenu(contextMenu)
  // create main browser window
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 1920,
    height: 1080,
    show: false // don't show the main window
  });

  // create a new `splash`-Window 
  splash = new BrowserWindow({
    width: 810,
    height: 610,
    // transparent: true,
    frame: false,
    alwaysOnTop: true
  });

  splash.loadURL(`file://${__dirname}/src/html/splash.html`);
  mainWindow.loadURL(`file://${__dirname}/src/html/index.html`);
  
  // if main window is ready to show, then destroy the splash window and show up the main window
  mainWindow.once('ready-to-show', () => {
    setTimeout(function() {
      splash.destroy();
      mainWindow.show();
    }, 5000)
  });
});