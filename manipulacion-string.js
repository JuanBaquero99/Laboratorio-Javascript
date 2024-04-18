const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)

//Dos formas de escribir string primitivos

//Strings objeto

const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)
//Crea un nuevo objeto en memoria

// Acceder a caracteres

const saludo = 'Hola, como estas?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('como'))
console.log(saludo.slice(3,1)) //De donde a donde quiero navegar en los caracteres
console.log(saludo.length) //Longitud de la variable
console.log(saludo.toLocaleLowerCase())//Todo a minusculas
console.log(saludo.toLocaleUpperCase())//Todo a mayusculas
console.log(saludo.split())//Divide la expresión

const saludoDivido = saludo.split(' ')
console.log(saludoDivido)
console.log(saludoDivido[1])//Accede a la posición del array

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'Juan')
console.log(nuevoSaludo)
//Va remplazar la expresión mundo por Juan




