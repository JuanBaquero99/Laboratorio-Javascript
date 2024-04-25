/*

this --- class

this --- objeto -- class

*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;//El nombre que se ponga en la instancia
        this.edad = edad; //La edad que se ponga en la instancia
    }
}

const persona1 = new Persona ('Alice', 25)

console.log(persona1);

persona1.nuevoMetodo = function() {
    console.log(`Mi nombre es ${this.nombre}`);

};

