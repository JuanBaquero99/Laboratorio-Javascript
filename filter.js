const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];

// Filtrar las calificaciones que son 70 o más
const passingGrades = grades.filter(grade => grade >= 70);

// Calcular el promedio de las calificaciones aprobatorias
const sumGrades = passingGrades.reduce((sum, grade) => sum + grade, 0);
const averagePassingGrade = sumGrades / passingGrades.length; // Usar .length en lugar de .lenght

// Mostrar resultados
console.log('Original Grades: ', grades);
console.log('Passing Grades: ', passingGrades);
console.log('Average Passing Grade: ', averagePassingGrade);

