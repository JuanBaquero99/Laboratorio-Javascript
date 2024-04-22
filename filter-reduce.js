//filter()

const number = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = number.filter(number => number % 2 === 0)

console.log(number)
console.log(evenNumbers)
//Hace el filtrado según las condiciones. En este caso de números pares

// reduce()

const numberReduce = [1,2,3,4,5]
const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numberReduce)
console.log(sum)    


