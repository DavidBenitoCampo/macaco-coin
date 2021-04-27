const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp
        this.transactions = transactions
        this.previousHash = previousHash
        this.wildCard = 0
        this.hash = this.calculateHash()
    }

    calculateHash() {
        return SHA256(this.timestamp + this.previousHash + JSON.stringify(this.transactions) + this.wildCard).toString()
    }

    //Minado del bloque
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.wildCard++
            this.hash = this.calculateHash()
        }
        console.log('Bloque minado: ' + this.hash)
    }
}

module.exports = Block;