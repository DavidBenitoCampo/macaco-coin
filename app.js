const Block = require('./block')
const BlockChain = require('./blockchain')
const Transaction = require('./transactions')

let macacoCoin = new BlockChain()
// console.log('Minando bloque 1...')
// macacoCoin.addBlock(new Block('25/3/2021', { amount: 10 }))
// console.log('Minando bloque 2...')
// macacoCoin.addBlock(new Block('1/4/2021', { amount: 40 }))
// console.log('Minando bloque 3...')
// macacoCoin.addBlock(new Block('20/4/2021', { amount: 23 }))

// console.log(macacoCoin.validateBlockChain())

// macacoCoin.chain[1].data = { amount: 200 }
// macacoCoin.chain[1].hash = macacoCoin.chain[1].calculateHash()

// console.log(macacoCoin.validateBlockChain())


macacoCoin.addTransaction(new Transaction('David', 'Pepe', 100))
macacoCoin.addTransaction(new Transaction('Diana', 'María', 100))

console.log('Comienza el minado...')
macacoCoin.minePendingTransactions('David')

console.log('Comienza el minado...')
macacoCoin.minePendingTransactions('David')

console.log('El balance nuestro es', macacoCoin.getBalanceOfAddress('David'))

console.log(JSON.stringify(macacoCoin, null, 4))