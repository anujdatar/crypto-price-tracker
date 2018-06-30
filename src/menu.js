const remote = require('electron')
const Menu = remote.Menu
const shell = require('electron').shell
const path = require('path')

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
        label: 'About'
      },
      {
        label: 'Check for updates'
      }
    ]
  }
]

menu  = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)
