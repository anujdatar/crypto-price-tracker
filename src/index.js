const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('notifyBtn')

notifyBtn.addEventListener('click', () => {
    let win = new BrowserWindow({
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        width: 400,
        height: 200
    })

    const modalPath = path.join('file://', __dirname, 'add.html')
    win.loadURL(modalPath)

    win.on('close', () => {
        win = null
    })

    win.show()
})