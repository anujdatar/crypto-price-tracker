const remote = require('electron')
const Menu = remote.Menu
const shell = require('electron').shell
const path = require('path')
const aboutWindow = require('./about')

menuTemplate = [
  {
    label: 'Menu',
    submenu: [
      {
        label: 'Adjust Notification Valiue'
      },
      {
        label: 'CoinMarketCap',
        click: () => {
          shell.openExternal('http://coinmarketcap.com')
        }
      },
      {type: 'separator'},
      {
        label: 'Exit',
        click: () =>  {
          remote.app.quit()
          // mainJs.close_all()
        },
        accelerator: 'Ctrl+Q',
        icon: path.join(__dirname, '../assets/images/exit-icon16x16.png')
      }
    ]
  },
  {
    label: 'Info',
    submenu: [
      {
        label: 'About',
        role: 'about',
        click: () => {
          aboutWindow.createAbout()
        }
      },
      {
        label: 'Check for updates'
      },
      {type: 'separator'},
      {
        label: 'Toggle DevTools',
        click: (item, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.toggleDevTools()
          }
        }
      }
    ]
  },
  {
    label: 'Reload',
    click: (item, focusedWindow) => {
      item = 'file://'+__dirname+'/index.html'
      focusedWindow.loadURL(item)
    }
  }
]

menu  = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)




