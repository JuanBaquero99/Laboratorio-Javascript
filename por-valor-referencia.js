//Paso por valor
let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)

a = 12
b = 'Juan'
c = undefined
//Por valores unicamente se reasigna un nuevo lugar en memoria

//Paso por referencia 

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['Rollito']
let copiaDePanes = panes
panes.push('Hojaldre')
console.log(panes, copiaDePanes)
//Por referencia quiere decir que por ejemplo la copia de una variable apunta a la misma dirección en memoría de la otra
//Es decir que aún agregando valores a panes, copia de panes que esta basada en esta sigue apuntando al mismo lugare en memoria

//Tipo de dato complejo por referencia

let frutales = {
    naranja : '🍊'
}
let vegetales = frutales

vegetales.naranja = '🥦'
console.log(frutales)
//Como estamos apuntando al mismo lugar de memoria lo único que causamos es que se modifique

let ropa = {
    blusa : '👘'
}

ropa.pantalon = '👖'
console.log(ropa)
//En este caso podemos evidenciar que estamos agregando un nuevo valor de memoria
//El recolector de basura de Java se encarga de que ahora ocupe un nuevo lugar en memoria tanto blusa como pantalon
