const greeting = function (name) {
    return `Hola, ${name}`
}

const newGreeting = (name) => {
    return `Hola, ${name}`
}

// Arrow Function - implicit return

const newGreetingImplicit = name => `Hola, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hola, ${name} ${lastName}`

//Lexical Binding

const functionalCharacter = {
    name: 'Tío Ben',
    // Usando una expresión de función normal
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} dice: ${message}`);
    },
    // Usando una función flecha (que no es adecuada aquí)
    // Las funciones flecha no enlazan su propio 'this'
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} dice: ${message}`);
    }
};

// Uso correcto de la función normal
functionalCharacter.messageWithTraditionalFunction('Un gran poder conlleva una gran responsabilidad');
// Uso incorrecto de la función flecha dentro del objeto
// Esto dará como resultado 'undefined' para 'this.name'
functionalCharacter.messageWithArrowFunction('Un gran poder conlleva una gran responsabilidad');

//Con funcion tradicional puede acceder con el this a name
//con función de flecha no puede acceder correctamente al this
//Lo cual arroja indefinido

//La logica es que el objecto rceibe el name
//recibe una función con un mensaje adentro
//Muestra el name accediento con el this
//y dice el mensaje que se encuentra en la función
//Cuando invocamos el objeto con su mensaje trae la función y el name
//Menos en el caso del arrow porque el this no tiene acceso a un name