// Generar un número aleatorio entre 1 y 10 (ambos inclusive)
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

// Pedir al usuario que adivine el número secreto
const numeroJugador = parseInt(prompt('Adivina el número secreto entre 1 al 10'));

// Mostrar el número con el que juega el jugador
console.log(`Este es el número con el que juegas: ${numeroJugador}`);

// Comparar el número del jugador con el número secreto y dar retroalimentación
if (numeroJugador === numeroSecreto) {
    console.log('¡Adivinaste el número secreto!');
} else if (numeroJugador > numeroSecreto) {
    console.log('El número es demasiado bajo');
} else {
    console.log('El número es muy alto');
}
