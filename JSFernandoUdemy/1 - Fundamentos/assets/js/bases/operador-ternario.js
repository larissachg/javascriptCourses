/**
 * Dias de semana abrimos a las 11
 * Los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 2;
const horaActual = 8;

let horaApertura;
let mensaje; 

// if ( dia === 0 || dia === 6){
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

//OPERADOR TERNARIO
horaApertura = (dia === 0 || dia === 6) ? 9 : 11

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta Abierto'
// } else {
//     mensaje = `Esta cerrado, abrimos a las ${horaApertura}`
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje});