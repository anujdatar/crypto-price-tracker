const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios')
const ipcRenderer = electron.ipcRenderer

const notifyBtn = document.getElementById('notifyBtn')
var price = document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')

function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(res => {
        const cryptos = res.data.USD
        price.innerHTML = '$'+cryptos.toLocaleString('en')
    })
}

getBTC();
setInterval (getBTC, 30000);

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