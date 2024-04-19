let expr = 'Mangos'

switch(expr) {
    case 'Naranjas':
        console.log('Las naranjas cuestan $20')
        break;
    case 'Manzanas':
        console.log('Las manzanas cuestan $43')
        break;
    case 'Platanos':
        console.log('El platano esta en ')
    case 'Mangos':
    case 'Papaya':
        console.log('Los mangos y las papayas cuestan 25$');
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`);
}

console.log('Hay algo más que deseas')