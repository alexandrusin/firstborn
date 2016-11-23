// app/index.js
console.log('hello from node.js')

const calc = require('./calc')

const numbersToAdd = [ 7, 11, 33, 0, 1]

const result = calc.sum(numbersToAdd)
console.log('sum of the numbers is: ', result)