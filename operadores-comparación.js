//Igualdad
//Operadores de comparación
// == si son iguales 
// === si son iguales en valor y tipo de dato
// != si es diferente de
//!== si es diferente en valor y tipo de dato
//> mayor
//< Menor
//>= mayor o igual
//<= menor o igual

const a = 10;
const b = 20;
const c = '10'

console.log(a == b)
console.log(a===c) //False porque uno es string y otro numero

//Operadores Lógicos

//&& si este valor y este valor son
//|| O este valor (A o B)
//! Este no es el valor

const d = 10;
const e = 20;
const f = '10'

console.log(d === e && f === d)
console.log(d != e || d === f)

