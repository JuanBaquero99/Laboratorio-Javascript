let palabraOculta = 'Javascript';
let intentos = 3;

function verificarSuposicion(suposicion, palabra) {
    // Convertir ambas cadenas a minúsculas para una comparación insensible a mayúsculas/minúsculas
    if (suposicion.toLowerCase() === palabra.toLowerCase()) {
        return true;
    }
    return false;
}

function jugarAdivinaLaPalabra() {
    alert('Bienvenido al juego');
    alert('Tienes 3 intentos');
    alert('Pista: La palabra oculta es un lenguaje de programación');
    while (intentos > 0) {
        let suposicion = prompt('Adivina la palabra');

        if (verificarSuposicion(suposicion, palabraOculta)) {
            alert('¡Correcto!');
            break;
        } else {
            intentos--;
            if (intentos > 0) {
                alert(`Incorrecto, aún tienes ${intentos} intentos.`);
            } else {
                alert(`Agotaste intentos, la palabra era ${palabraOculta}.`);
            }
        }
    }
}

jugarAdivinaLaPalabra();
