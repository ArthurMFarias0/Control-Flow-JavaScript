const prompt = require('prompt-sync')()

const x = prompt('Your age: ')

if (x >= 10 && x<= 14) {
    console.log('Childish')
}
if (x >= 15 && x <= 17){
    console.log('Juvenile')
}
if (x >= 18 && x<= 25){
    console.log('Adult')
}