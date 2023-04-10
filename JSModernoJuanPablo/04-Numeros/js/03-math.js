let resultadoPI;
let resultadoRed;
let resultadoRed2;
let resultadoRed3;
let resultadoRed4;
let resultadoRed5;
let resultadoRed6;
let resultadoRed7;
let resultadoRed8;
let resultadoRed9;
let resultadoRed10;
let resultadoRed11;

console.warn('PI');
// PI
resultadoPI = Math.PI;
console.log(resultadoPI);

console.warn('round');
// Redondear HACIA ABAJO (# =>.5 pasa al siguiente numero) ( # < .5 se mantiene)
resultadoRed = Math.round(2.8);
resultadoRed2 = Math.round(2.5);
resultadoRed3 = Math.round(2.4);

console.log(resultadoRed);
console.log(resultadoRed2);
console.log(resultadoRed3);

console.warn('ceil');
// Redondear HACIA ARRIBA (si tiene decimal, lo pasa al siguiente numero)
resultadoRed4 = Math.ceil(2.1);
console.log(resultadoRed4);

console.warn('floor');
// Redondear de forma Forzosa hacia abajo (por mas que sea mayor a .5 se mantiene el numero) 
resultadoRed5 = Math.floor(2.9);
console.log(resultadoRed5);

console.warn('sqrt');
// Raiz Cuadrada
resultadoRed6 = Math.sqrt(144);
console.log(resultadoRed6);

console.warn('abs');
// Valor Absoluto
resultadoRed7 = Math.abs(-500);
console.log(resultadoRed7);

console.warn('pow');
// POTENCIA
resultadoRed8 = Math.pow(8, 3); //8 a la potencia de 3
console.log(resultadoRed8);

console.warn('min');
// MINIMO
resultadoRed9 = Math.min(8, 3, 5, -2, -4);
console.log(resultadoRed9);

console.warn('max');
// MAXIMO
resultadoRed10 = Math.max(8, 3, 5, -2, -4);
console.log(resultadoRed10);

console.warn('random');
// ALEATORIO dentro de un rango
resultadoRed11 = Math.floor(Math.random() * 30 ); //Redondear hacia arriba un valor entre 0 a 30
console.log(resultadoRed11);