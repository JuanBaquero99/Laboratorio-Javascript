
const personalizedMessage = () => 'Chao todos'
function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage = ownMessage
    }

//El objeto recibe un mensaje
//La funcion Rocket recibe el nombre y el mensaje 
//Luego se crea una nueva funcion de Rocket
//Dicha funcion de Rocket tiene un nombre (string) y el mensaje personalizado
//Luego muestra con el objeto y el nombre o mensaje de lanzamiento

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconHevayRocket = new Rocket ('Falcon Heavy', personalizedMessage)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

//El new es una forma de función constructora para evitar duplicar funciones

const RocketWhitArrowFunction = (name, ownMessage) => ({
    name : name,
    launchMessage: ownMessage

})

const personalizedMessageForArrowFunction = () => 'Bien hecho'
const falcon9Rocket1 = RocketWhitArrowFunction('Falcon9', personalizedMessageForArrowFunction) 

console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchMessage())

//El roccket con flecha recibe el nombre y el mensaje
//Con los valores y sus llaves
//Luego la constante con el mensaje personalizado para la funcion  de flecha
//la constante falcon recibe la funcion de rocket con el nombre y el persnalizado

