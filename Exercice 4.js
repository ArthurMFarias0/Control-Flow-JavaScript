const prompt = require('prompt-sync')()
//variable declaration
let x1, x2

//Data imput
const X = prompt('Type your number: ')
const x = Number(X)

//Processing
if (x % 2 == 0) {
    x1 = Math.sqrt(x,2)
    console.log('\nEven number ')
    console.log('Result: '+ x1)
}
else{
    x2 = Math.pow(x,2)
    console.log('\nOdd number ')
    console.log('Result: '+ x2)
}
