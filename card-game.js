
const deck = ['♤', '♡', '♧', '♢','♤', '♡', '♧', '♢','♤', '♡', '♧', '♢','♤', '♡', '♧', '♢']

//Fisher-Yate Algorithm
function suffleDeck () {
    for (let i = deck.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1)); 
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

function dealCards (numCard) {
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

suffleDeck()

const player1Hand = dealCards(3)
const player2Hand = dealCards(3)
const player3Hand = dealCards(3)

console.log(player1Hand)
console.log(player2Hand)
console.log(player3Hand)

//tenemos la función que baraja las cartas
// se itera donde i esta dado por la longitud de la baraja
//Mientras i sea mayor que cero, i va a ir retrocediendo
//luego el math nos da un número entero y random el cual es multiplicado por i
//Dicha multiplicación esta sumada a 1
//Se suma para que sea incluido el rango de i