const prompt = require('prompt-sync')()

//Data imput
const X1 = prompt('\nTyper your number: ')
const x1 = Number(X1)

const X2 = prompt('Type your second number:  ')
const x2 = Number(X2)

const X3 = prompt('Typer your third number: ')
const x3 = Number(X3)

//Processing

if (x1 > x2 && x1 > x2) {
    console.log('\nResult: '+ x1) 
}
if (x2 > x1 && x2 > x3) {
    console.log('\nResult: '+ x2)
}
if (x3 > x2 && x3 > x1) {
    console.log('\nResultado: '+ x3)
}