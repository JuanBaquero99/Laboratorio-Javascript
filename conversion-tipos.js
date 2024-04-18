//De forma explicita

const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)
//Lo convierte a número

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

//Lo convierte en número flotante

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//Lo convierte en decimal

//Implicit Type Casting

const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)
//En este caso concatena al tomar el tres como string

const sumWithNumber = 2 + true
console.log(sumWithNumber)
//en este caso esta toma el true como 1 y lo suma

//Es importante entender el comportamiento según los datos
//Por ejemolo como se suma, cuando se concatena de acuerdo a
//Boleano, número, string

const numero = '596'
const numeroConvertido = parseInt(numero)

console.log(typeof numero)
console.log(typeof numeroConvertido)

