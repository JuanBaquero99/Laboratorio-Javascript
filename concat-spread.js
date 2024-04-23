//Inmutables

const morseCode1 = ['....', '----'] // H O
const morseCode2 = ['.-..', '.-'] // L A

const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//Los esta concatenando con la función concat

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//Con spread operator

function combineMorseMessages (morseCode1, morseCode2) {
    console.log([...morseCode1, ...morseCode2])
}

combineMorseMessages(morseCode1,morseCode2)
//Los puntos suspensivos permiten dejar el espacio para el array donde se concatena

const numbers = [1,2,3]
const string = 'string'

combineMorseMessages(numbers, string)

//En este caso divide el string por letras para hacerlo parte del array

//join()

const morseCodeMessageString = morseCodeMessage.join('/')
console.log(morseCodeMessageString)

//En las comillas del argumento de join se puede agregar elementos como espacios, etc