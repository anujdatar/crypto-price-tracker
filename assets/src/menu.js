const remote = require('electron')
const Menu = remote.Menu

menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Add Target'
      },
      {
        label: 'Go To Link'
      },
      {type: 'separator'},
      {
        label: 'Exit',
        click() {
          remote.app.quit()
          // mainJs.close_all()
        },
        accelerator: 'Ctrl+Q',
        icon: __dirname + '/exit-icon16x16.png'
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
