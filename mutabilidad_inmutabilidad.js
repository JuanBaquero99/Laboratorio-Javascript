//Primitvo inmutable
let numero = 23
numero = numero + 10
console.log(numero)
//No cambian los valores originales, solamente esta generando un nuevo valor de acuerdo a la operación

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

//Dato complejo - Mutable

let usuario = { nombre: 'Pepito', edad: 15}
usuario.edad = 20
console.log(usuario)
//Podemos ver que a usuario en edad le agregamos 20. Se actualizo el valor original

let frutas = ['Manzana', 'Pera']
frutas[0] = 'sandia'
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = 'Nuevo nombre'
}

let persona = {nombre: 'Juan'}
cambiarNombre(persona)

console.log(persona)
//Se declara una función donde cambiar nombre recibira un objeto
//objeto agrega a nombre 'Nuevo Nombre'
//Se declara persona como lista 
//Y al usar la función sobre la variable esta se modifica