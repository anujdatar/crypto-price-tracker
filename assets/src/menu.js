const mainJs = require('../../main.js')

exports.mainMenuTemplate = [
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
          mainJs.close_all()
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