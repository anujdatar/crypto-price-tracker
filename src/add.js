const electron = require('electron')
const remote = electron.remote
const ipcRenderer = electron.ipcRenderer

const currentWindow = remote.getCurrentWindow()
document.getElementById('notifyVal').focus()

function closeWindow() {
    currentWindow.close()
}

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', () => {
    closeWindow()
})

const updateBtn = document.getElementById('updateBtn')

function updateValue(arg) {
    ipcRenderer.send('update-notify-value', arg)
    closeWindow()
}

updateBtn.addEventListener('click', () => {
    const notifyVal = document.getElementById('notifyVal').value
    if(notifyVal !== '') {
        updateValue(notifyVal)
    }
})

let notifyInput = document.getElementById('notifyVal')
notifyInput.addEventListener('keypress', (event) => {
    if (event.which === 13) {
        const notifyVal = document.getElementById('notifyVal').value
        if (notifyVal !== '') {
            updateValue(notifyVal)
        }        
    }
})

window.addEventListener('keyup', (event) => {
    if (event.which === 27) {
        closeWindow()
    }
})
