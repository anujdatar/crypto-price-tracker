const electron = require('electron')
const path = require('path')
const remote = electron.remote
const axios = require('axios')

const notifyBtn = document.getElementById('notifyBtn')
var price = document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')

function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
        console.log(res)
        const cryptos = res.data.BTC.USD
        price.innerHTML = '$'+cryptos.toLocaleString('en')
    })
}

getBTC();
setInterval ( getBTC, 30000 );

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', () => {
    var window = remote.getCurrentWindow();
    window.close()
})