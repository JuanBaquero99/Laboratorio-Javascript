//Methods thay modify teh original array(Mutability)

//push()

const countries = ['USA', 'Canada', 'UK']
const newConuntries = countries.push('Germany', 'Australia')
console.log(countries)
console.log(newConuntries)
//En este caso es de cuidado porque modifica el array original

//pop()
const removeCountry = countries.pop()

console.log(countries)
console.log(removeCountry)
//Quita el ultimo elemento. Podemos asignar ese ultimo elemento removido