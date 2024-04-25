//El prototipo va tener los metodos y las propiedades

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;

    }
    emitirSonido() {
        console.log('El animal emite un sonido')
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); //Con el super accede a la clase y tipo de la clase animal
        this.raza = raza;
    }
    emitirSonido() {
        console.log('El perro ladra')
    }
    correr () {
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro('Kenya', 'Perro', 'Retriever')

console.log(perro1);

perro1.correr(),
perro1.emitirSonido()
//Con esa extensión se hace la herencia
//El this raza pertenece a esa clase especifica.
//Sin embargo con el super puede heredar los otros accesos

perro1.nuevoMetod = function() {
    console.log('Este es un método');
};



