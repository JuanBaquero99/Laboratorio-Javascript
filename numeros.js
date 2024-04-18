//1. Entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)
//En javascript cualquier tipo de número se le conoce como number

//2. Notación cientifica
const cientifico = 5e3

//3. Infinitos y NaN

const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones aritmeticas

const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 4 * 7
const division = 16 / 2

//Modulo y Exponeciación

const modulo = 15 % 8
const exponeciacion = 2 ** 3

//Precisión

const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))//Limita la cantidad de números despues del punto
console.log(resultado === 0.3)//No es tan preciso al momento de hacer estos calculos

//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16) //Raiz cuadrada del número
const valorAbsoluto = Math.abs(-7) //Valo absoluto
const aleatorio = Math.random() //Un numero al azar
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)





