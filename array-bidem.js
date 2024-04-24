// Definición de una matriz bidimensional (3x3)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Modificar un elemento específico en la matriz (fila 1, columna 2)
matrix[1][2] = 10;
console.log(matrix); // Imprimir la matriz modificada

// Acceder y almacenar un valor específico de la matriz (fila 0, columna 1)
let value = matrix[0][1];
console.log(value); // Imprimir el valor almacenado

// Iterar sobre todos los elementos de la matriz y mostrarlos en la consola
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Función para buscar un elemento específico en la matriz
function findElement(matrix, element) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === element) {
                return true; // Retorna true si el elemento se encuentra
            }
        }
    }
    return false; // Retorna false si el elemento no se encuentra
}

console.log(findElement(matrix, 5)); // Buscar el número 5 en la matriz y mostrar el resultado

// Función para duplicar una matriz
function duplicateMatrix(matrix) {
    const newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push([...matrix[i]]); // Agregar una copia de cada fila a la nueva matriz
    }
    return newMatrix; // Retorna la matriz duplicada
}

console.log(duplicateMatrix(matrix)); // Duplicar la matriz y mostrar la matriz duplicada en la consola
