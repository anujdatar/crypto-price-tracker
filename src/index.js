const electron = require('electron')
const path = require('path')
const axios = require('axios')

const BrowserWindow = electron.remote.BrowserWindow
const ipcRenderer = electron.ipcRenderer

const notifyBtn = document.getElementById('notifyBtn')
let price = document.querySelector('h1')
let targetPrice = document.getElementById('targetPrice')
let targetPriceVal

const notification = {
    title: 'BTC Alert',
    message: ' BTC just beat your target price!',
    icon: path.join(__dirname, '../assets/images/bitcoin.png'),
    width: 440,
    height: 150,
    timeout: 2500
}

function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(res => {
        const cryptos = res.data.USD
        price.innerHTML = '$'+cryptos.toLocaleString('en')

        if (targetPrice.innerHTML != '' && targetPriceVal < cryptos) {
            console.log('yes')
            Notification.requestPermission().then(() => {
                new Notification(notification.title, notification)
            })
            
            // ipcRenderer.send('electron-toaster-message', notification)
        }
    })
}

getBTC();
setInterval (getBTC, 5000);

notifyBtn.addEventListener('click', () => {
    let addWindow = new BrowserWindow({
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        width: 400,
        height: 200
    })
    const modalPath = path.join('file://', __dirname, 'add.html')
    addWindow.loadURL(modalPath)
    addWindow.on('close', () => {
        addWindow = null
    })
    addWindow.show()
})

ipcRenderer.on('targetPriceVal', (event, arg) => {
    targetPriceVal = Number(arg)
    targetPrice.innerHTML = '$'+targetPriceVal.toLocaleString('en')
})
