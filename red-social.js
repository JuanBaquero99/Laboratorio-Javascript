const userDatabase = [
    {
        username: 'Juan',
        password: '123',
    },
    {
        username: 'Pablo',
        password: '456',
    },
    {
        username: 'Claudia',
        password: '678'
    },
];

const usersTimeline = [
    {
        username: 'Juan',
        timeline: 'Me encanta Javascript',
    },
    {
        username: 'Pablo',
        timeline: 'Me encanta Python'
    },
    {
        username: 'Claudia',
        timeline: 'Me encanta el pollo de Kikiriqui',
    },
];

const username = prompt('¿Cuál es tu usuario?');
const password = prompt('¿Cuál es tu contraseña?');

function usuarioExistente(username, password) {
    for (let i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].username === username && userDatabase[i].password === password) {
            console.log('Usuario y contraseña correctos');
            // Aquí podrías acceder a la línea de tiempo del usuario desde usersTimeline
            const timeline = usersTimeline.find((user) => user.username === username).timeline;
            console.log(`Bienvenido ${username}! ${timeline}`);
            return true; // Usuario encontrado
        }
    }
    console.log('Usuario o contraseña incorrectos');
    return false; // Usuario no encontrado
}

const usuarioEncontrado = usuarioExistente(username, password);
