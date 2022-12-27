const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/b365880147014f928d117886dcc8e428")

async function totalTransactions() {
        let latestBlockNo = await web3.eth.getBlockNumber();
        let transactionCount = await web3.eth.getBlockTransactionCount(latestBlockNo);
        console.log("Total Transactions are: ",transactionCount)
        let blockinfo = await web3.eth.getBlock(latestBlockNo)
        // console.log(blockinfo)
        let timeStamp = blockinfo.timestamp
        let date = new Date(timeStamp * 1000);
        dateFormat = date.getHours() + ":" + date.getMinutes() + ", "+ date.toDateString();
        console.log("Date:",dateFormat)
}
totalTransactions();
