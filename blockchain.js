const Block = require('./block')
const Transaction = require('./transactions')

class BlockChain {
    constructor() {
        this.chain = [this.createBlockGenesis()]
        this.difficulty = 5
        this.pendingTransactions = []
        this.miningReward = 100
    }

    createBlockGenesis() {
        return new Block('26/04/2021', 'Block Genesis', '0')
    }

    getUltimateBlock() {
        return this.chain[this.chain.length - 1]
    }

    // addBlock(newBlock) {
    //     newBlock.previousHash = this.getUltimateBlock().hash
    //     newBlock.mineBlock(this.difficulty)
    //     this.chain.push(newBlock)
    // }

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction)
    }

    minePendingTransactions(addressMiner) {
        let block = new Block(Date.now(), this.pendingTransactions)
        block.previousHash = this.getUltimateBlock().hash
        block.mineBlock(this.difficulty)

        console.log('Se ha minado correctamente el bloque')

        this.chain.push(block)

        this.pendingTransactions = [
            new Transaction(null, addressMiner, this.miningReward)
        ]
    }

    //Valor de los mineros o las personas que han hecho las transacciones.
    getBalanceOfAddress(address) {
        let balance = 0
        for (const block of this.chain) {
            for (const transaction of block.transactions) {
                if (transaction.fromAddress === address) {
                    balance -= transaction.amount
                }

                if (transaction.toAdress === address) {
                    balance += transaction.amount
                }
            }
        }
        return balance
    }

    validateBlockChain() {
        //Recorro la cadena para validar el bloque actual y el bloque anterior.
        for (let i = 1; i < this.chain.length; i++) {
            const actualBlock = this.chain[i]
            const previousBlock = this.chain[i - 1]

            if (actualBlock.hash != actualBlock.calculateHash()) {
                return false
            }
            if (actualBlock.previousHash != previousBlock.hash) {
                return false
            }
        }
        return true;
    }
}
module.exports = BlockChain;