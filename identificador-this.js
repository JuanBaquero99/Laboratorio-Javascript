//Enlace implicito
const house = { //Objeto
    dogName: 'Fido',
    dogGreeting: function () { //Función que muestra un mensaje en pantalla
        console.log(`Hola, soy ${this.dogName}`)
    }
}
//El this es una manera de acceder a los elementos del objeto, en este caso house
house.dogGreeting() //Aqui se invoca al objeto y su función
//El objeto donde se encuentra el nombre de la variable


//Enlace explicito

function dogGreeting () {
    console.log(`Hola, mi nombre es ${this.dogName}`)
}

const newHouse = {
    dogName: 'Cocount',
    dogAge: 3
}

dogGreeting.call(newHouse) //En este caso se esta llamando con la función call
//Y el parametro que recibe el objeto newHouse

function newDogGreeting (owner, address) {
    console.log(`Hola, mi nombre es ${this.dogName} y vivo con ${owner} en ${address}`)
}

const owner = 'Lucy'
const address = 'Avenue 123'

newDogGreeting.call(newHouse, owner, address)
//En este caso le estamos enviando varios parametros