//Capacidades que tienen las funciones al igual que otros
//1. Pasar funciones como argumentos - Callback
/*
function a () {}
function b (a) {}
b(a)

//Retornar funciones

function a () {
    function b () {}
    return b
}

//Asginar funciones a variables - Expresión de función

const a = function () {}

// Tener propiedades y métodos

function a () {}
const obj = {}
a.call(obj) //Es una forma de llamar el objeto como método de ejecución

// Anidar funciones - Nested functions

function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()

// Es posible almacenar funciones en objetos?
*/
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () { //LaunchMessage su clave es la function
        console.log('Launch') //Dicha funcion manda el mensaje
    }
}

rocket.launchMessage() //Aqui se invoca el objeto con la funcion