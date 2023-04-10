console.warn('Numero Entero');
const numero1 = "20";
console.log(numero1); 
// Para convertirlo de String a NUMERO ENTERO:
console.log(Number.parseInt(numero1));

console.warn('Con Decimal');
const numero2 = "20.2";
console.log(numero2); 
// Si el string a convertir tiene decimales:
console.log(Number.parseFloat(numero2));

console.warn('Letra');
const numero3 = "Uno";
console.log(numero3);
// Revisar si un numero es entero o no
console.log(Number.isInteger(numero3));

console.warn('Numero');
const numero4 = 20;
console.log(numero4);
// Revisar si un numero es entero o no
console.log(Number.isInteger(numero4));