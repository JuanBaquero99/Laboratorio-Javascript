//Crear Chicasuperpoderosa

function PowerpuffGirl (name, color, superpower) {
    this.name = name //Es decir que son iguales a los parametros
    this.color = color
    this.superpower = superpower
    this.isLeader = false //Otras propiedades que no esten los parametros para poder cambiar el false por algo más

    this.displayInfo = function () {
        console.log(`Información de la chica superpoderosas: 
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes' : 'Leader:No'}
        `)
    }

    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} es la lider de las chicas superpoderosas`)
    }
}


const bombon =  new PowerpuffGirl ('Bombon', 'rosado', 'Hielo Poder')
const bellota =  new PowerpuffGirl ('Bellota', 'verde', 'Fuerza')
const burbuja =  new PowerpuffGirl ('Burbuja', 'azul', 'Volar')


bombon.displayInfo()
bellota.displayInfo()
burbuja.displayInfo()

bombon.becomeLeader()

bombon.displayInfo()
bellota.displayInfo()
burbuja.displayInfo()