const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios')
const ipcRenderer = electron.ipcRenderer

const notifyBtn = document.getElementById('notifyBtn')
let price = document.querySelector('h1')
let targetPrice = document.getElementById('targetPrice')
let targetPriceVal

const notification = {
    title: 'BTC Alert',
    body: ' BTC just beat your target price!'
}

function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(res => {
        const cryptos = res.data.USD
        price.innerHTML = '$'+cryptos.toLocaleString('en')

        console.log(targetPriceVal)
        console.log(res.data.USD)

        if (targetPriceVal < res.data.USD) {
            console.log('yes')
            let myNotification = new Notification('title', notification)
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
    // addWindow.on('show', () => {
    //     document.getElementById('')
    // })
    addWindow.show()
})

ipcRenderer.on('targetPriceVal', (event, arg) => {
    targetPriceVal = Number(arg)
    targetPrice.innerHTML = '$'+targetPriceVal.toLocaleString('en')
})