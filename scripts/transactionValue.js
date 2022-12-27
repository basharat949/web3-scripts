const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/b365880147014f928d117886dcc8e428")

    async function maxTransactions() {
        let latestBlockNo = await web3.eth.getBlockNumber();
    
        let blockinfo = await web3.eth.getBlock(latestBlockNo)
        
        let transactions = blockinfo.transactions;

        let myArr = []

        let transactionValue = []
        for (let i = 0; i < transactions.length; i++) {
            myArr = (await web3.eth.getTransaction(transactions[i]))
            transactionValue.push(myArr.value)
        }

        let max_of_array = Math.max.apply(Math, transactionValue);
        
        const etherValue = Web3.utils.fromWei(max_of_array.toString());
        console.log("Transaction with the largest amount is", etherValue, "ETH");
}
maxTransactions();
