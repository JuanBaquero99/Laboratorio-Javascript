function persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//El this hace referencia a la función, lo que va despues hace referencia a los argumentos

const persona1 = new persona('Juan', 'Baquero', 20);
console.log(persona1);
//Esto nos permitiria construir una base de datos grandes a partir de una función

persona1.nacionalidad = 'Colombia';
//El problema es que esto no termina haciendo parte de la función constructora

const persona2 = new persona ('Pablo', 'Davila', 25);
console.log(persona2)

persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
};
//Esto permite agregar esa propiedad al método 
persona1.saludar();