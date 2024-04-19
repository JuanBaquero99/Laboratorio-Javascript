/*

for in ---> objetos

los objetos tiene propiedades con un valor

Los arrays y strings son items

for(variable in objeto) {
    codigo a ejecutar
}

*/

const listaDeCompras = {
    manzana: 5, 
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

//Tengo una lista de compras con propiedad y valor
// El for en este caso con el in va a recoger en frutas lo que recorra en lista de compras
// Va a mostrar luego el recorrido de fruta y la lista de compras
//Que es el valor de frutas