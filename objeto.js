/*

Objeto estructura de datos

key / value

objeto {
    propiedad: valor,
    propiedad: valor
}

Abstraer objetos de la realidad para llevarlos a la programación


*/

const persona = {
    nombre: 'Juan',
    edad: 25,
    dirección: {
        calle: 'Insurgente',
        ciudad: 'BTA'
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona);

console.log(persona.nombre);
console.log(persona.saludar());

persona.telefono = '555-555-555';

console.log(persona.telefono);
console.log(persona)
//Al revisar de nuevo podemos verificar que el objeto fue modificado y agregado telefono

persona.despedir = () => {
    console.log('Adios');

}

console.log(persona.despedir())

console.log(persona.dirección.calle);
//Acceder al objeto dentro del objeto

delete persona.telefono;
//Borra el elemento
console.log(persona)
