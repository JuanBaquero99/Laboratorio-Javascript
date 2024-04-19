// Como crearlo

//1.
const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const number = Array(1,2,3,4,5)
console.log(number)

//Array literal syntaxis

const oneNumber = [4]
console.log(oneNumber)

const empyArray = []
console.log(empyArray)
//Para ir llenando el array+

const sport = ['soccer', 'tennis', 'rugby']
console.log(sport)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quintify: '1 cup'
    },
    false
]
//Dentro del array se contiene tambien un tipo de diccionario
console.log(recipeIngredients)

//Accesing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

//lengt property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutability

fruits.push('Watermelon')
console.log(fruits)
//Agrega al array

//Inmutability

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(newFruits)
//No modifica el array original

//Checking array with array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

//Sumar todos los elementos de un array

const numberArray = [1,2,3,4,5]
let sum = 0

for (let i = 0; i < numberArray.length; i++) {
    sum = numberArray[i]
}

console.log(sum)
//tenemos un array. Luego un recorrido for asignado a i que es igual a 0
// mientras i sea menor que la longitud del array, seguir avanzando ++
//luego a suma se le asigna el numero en la ubicación [i]

