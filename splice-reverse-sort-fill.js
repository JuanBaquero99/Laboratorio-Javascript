//Metodo para modificar el array original

//splice
const vegetables = ['carrot', 'brocoli', 'spinach', 'tomato']
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')
console.log(vegetables)
console.log(removedVegetables)
//Va iniciar desde la posición 2 y va eliminar solo 1 elemento. Luego va agregar los elementos que se le indique

//reverse()

const numbers = [1,2,3,4,5]
const reverseNumbers = numbers.reverse()

console.log(numbers)
console.log(reverseNumbers)
//Modifico el array original

//Sort() de numeros

const unsortedNumber1 = [4,18,1,62,34]
const unicodeSortedNumbers = unsortedNumber1.sort()

console.log(unsortedNumber1)
console.log(unicodeSortedNumbers)

//En este caso sort no organiza por numeros sino por strings. Por eso no matiene un orden, sino por unicode

const unsortedNumber2 = [4,18,1,62,34]
const sortedNumbers = unsortedNumber2.sort((a, b) => a - b)

console.log(unsortedNumber1)
console.log(sortedNumbers)

const cities = ['NY', 'Paris', 'Tokyo', 'London']
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

//Fill

const ages = [21,35,45,50]
console.log(ages.fill(0,2,4)) //De ceros desde la posición 2 hasta la 4
console.log(ages.fill(15,1)) //15 desde la posición 1

//Llenar desde x hasta x posición llenar el array de cierto números