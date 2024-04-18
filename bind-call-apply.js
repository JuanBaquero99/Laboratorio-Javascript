const owner = 'Lucy'
const address = 'Avenue 123'

function dogGreeeting (owner, address) {
    console.log(`Hola, soy ${this.dogName} y vivo con ${owner} en la dirección ${address}`)
}

const newHouse = {
    dogName: 'Coco'
} //Contexto de ejecución llamado con el this

dogGreeeting.call(newHouse, owner, address)

const necessaryValues = [owner,address]
dogGreeeting.apply(newHouse, necessaryValues) //Es necesario llamar al contexto de ejecución
//Apply para llamar el array que se creo con los objetos

const bindingWithBind = dogGreeeting.bind(newHouse, owner, address)
bindingWithBind()

