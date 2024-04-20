//Metodos para iterar en un array
//Metodo que no modifica el array original (inmutabilidad)

const numbers = [1,2,3,4,5]
const squaredNumbers = numbers.map(num => num * num)
//La función de flecha nos indica que los números serán multiplicados por los mismos números


console.log(numbers)
console.log(squaredNumbers)

//forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))
//Manda cada uno de los elementos del array a parte
console.log(colors)
console.log(iteratedColors)

function FarenheitToCelsius(f) {
    const conversion = (5/9) * (f - 32);
    return conversion;
}

// Uso de la función:
const fahrenheitValue = 32; // Por ejemplo, 32 grados Fahrenheit
const celsiusValue = FarenheitToCelsius(fahrenheitValue);
console.log(celsiusValue); // Mostrará el valor en grados Celsius

//Con map

const TemperatureFahrenheit = [32,68,95,104,212]
const TemperatureInCelsius = TemperatureFahrenheit.map(fahrenheit => (5/9 * (fahrenheit - 32)))

console.log('La temperatura es: ', TemperatureFahrenheit)
console.log('La temperatura en Celsius: ', TemperatureInCelsius)

//Con foreach

const newNumber = [1, 2, 3, 4, 5];

let sum = 0;

newNumber.forEach(number => {
    sum += number;
}); // Aquí se cierra correctamente la función de forEach

console.log('Array de números: ', newNumber);
console.log('Suma de números: ', sum);
