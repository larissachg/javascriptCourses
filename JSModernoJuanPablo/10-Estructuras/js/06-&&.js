const usuario = true;
const puedePagar = true;

// con else if solo se ejecuta la primera que el codiga lea que se cumpla, por mas que la que le sigue tambien se cumpla no lo toma en cuenta.
if (usuario) {
    console.log('Si es usuario');
} else if (puedePagar) {
    console.log('Si puede pagar');
}

// PARA QUE REVISE LAS DOS CONDICIONES se usa &&, si una no se cumple se ejecuta ELSE
if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else {
    console.log('No puedes comprar');
}

console.warn('Usuario2');
const usuario2 = false;
const puedePagar2 = true;

if (usuario2 && puedePagar2) {  //Una no se cumple
    console.log('Si puedes comprar');
} else if (!usuario2 && !puedePagar2) { //NO es usuario se cumple porque es false, pero SI puede pagar entonces no se cumple con la condicion (! = NO puede pagar) -> Pasa a la siguiente
    console.log('No puedes comprar');
} else if (!usuario2) { //No se cumple -> Pasa a la siguiente
    console.log('Inicia sesion o saca una cuenta'); 
} else if (!puedePagar2) { //Si se cumple porque solo puedePagar es false
    console.log('Fondos Insuficientes');
}