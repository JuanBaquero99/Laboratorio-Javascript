// Método .find()
// Inmutable
const multiple5 = [5, 10, 15, 20];

const firstNumber = multiple5.find(number => number > 10);

console.log(multiple5); // Output: [5, 10, 15, 20]
console.log(firstNumber); // Output: 15
// El método .find() itera hasta encontrar el primer elemento que cumple la condición.

// Método .findIndex()
const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex(number => number > 40);

console.log(randomNumber); // Output: [6, 14, 27, 56, 40]
console.log(indexNumber); // Output: 3
// El método .findIndex() devuelve el índice del primer elemento que cumple la condición.

// Ejercicio

const winningParticipants = [
    { id: 1, name: 'Juan', ticketNumber: 1 },
    { id: 2, name: 'Pablo', ticketNumber: 2 },
    { id: 3, name: 'Pedro', ticketNumber: 3 },
    { id: 4, name: 'Carlos', ticketNumber: 4 }
];

function findWinnerByName(name) {
    const winner = winningParticipants.find(participant => participant.name === name);
    return winner || 'No se encuentra ganador con ese nombre';
}

function findIndexWinnerByTicket(ticketNumber) {
    const index = winningParticipants.findIndex(participant => participant.ticketNumber === ticketNumber);
    return index !== -1 ? index : 'No se encontró ganador con el número de ticket';
}

function displayWinnerInformation(winner) {
    if (winner !== 'No se encuentra ganador con ese nombre' && winner !== 'No se encontró ganador con el número de ticket') {
        console.log('Información del ganador:', winner);
    } else {
        console.log('No se encontró ganador');
    }
}

const winnerByName = findWinnerByName('Juan');
const winnerByTicket = findIndexWinnerByTicket(4);
displayWinnerInformation(winnerByName);
console.log('El ganador y su numero de ticket: ', winnerByName)