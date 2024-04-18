//Null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)
//Es un tipo objeto como lo toma y es primitivo

//Undefined
let name
console.log(name)
//No tiene nada la variable, es decir indefenido

//Symbol
//Valores unicos que nunca queremos que cambien 
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)
//En este caso al verificar si son iguales el programa nos indica que falso
//Ya que lo que permite al crear un symbol con ID es que así tengan el mismo número
//Los toma como distintos

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)
//a user se la asigna el ID 1234. Dicha asignación tiene como origen
//El proceso que se da en el primer symbol declarado

//BigInt
//Numeros matematicos muy grandes

const bigNymber = 12931982398109301278703178278317921973719879831n
console.log(bigNymber)

const numberParticules = 10000000000000000n
console.log(numberParticules)
//Sirve para poder proyectar números grandes

