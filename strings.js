//Creación de strings
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "comillas dobles"
const terceraOpcion = `Comillas invertidas`


//Concatenación: Opción +

const direccion = 'Calle'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es' + ' ' + direccion +' ' + ciudad
console.log(direccionCompleta)

//2. Concatenacion: Template Literals
const nombre = 'Juan'
const pais = 'Colombia'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)
//En este caso es aplicando las comillas invertidas

// 3. Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'La gente de'
const terceraParte = 'Colombia'
const idea = [primeraParte, segundaParte, terceraParte]
console.log(idea.join(' '))

//4. Concatenacion: concat()

const hobbie1 = "correr"
const hobbie2 = "leer"
const hobbie3 = "estudiar"
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ',', hobbie2,',', hobbie3)
console.log(hobbies)

//Caracteres de escape
//1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer"
//Se puede con barra invertida y comilla invertida

//Strings Largos 
const poema = 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Error inesperado,\n\
En la línea 86.';

console.log(poema)

//Son los saltos de linea