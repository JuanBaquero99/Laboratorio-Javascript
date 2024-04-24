const originalArray = [1,2,3,4,5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)

//Combinar arrays

const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

//En este caso combina los dos usando del mismo modo los puntos suspensivos.
//Se llaman spread operator

// Pasar elementos a una fucnión

function sum (a,b,c) {
    return a + b + c
}

const number = [1,2,3]
const result = sum(...number)
console.log(result)
//En ese caso los sumo