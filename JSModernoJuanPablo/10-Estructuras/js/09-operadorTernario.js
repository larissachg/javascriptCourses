const autenticado = true;
const puedePagar = true;

// Es como if -> ? - else -> :
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');

const autenticado2 = true;
const puedePagar2 = false;

console.log(autenticado2 && puedePagar2 ? 'Si esta autenticado y si puede pagar' : 'No esta autenticado o no puede pagar');


const autenticado3 = false;
const puedePagar3 = true;

console.log(autenticado3 || puedePagar3 ? 'Si esta autenticado O si puede pagar' : 'No esta autenticado y no puede pagar');