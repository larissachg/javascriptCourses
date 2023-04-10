const autenticado = true;

//se recomienda NO PONER ES IGUAL A TRUE O FALSE:
// if (autenticado === true) {...}
/*SOLO colocar (autenticado) {...} */ 
if (autenticado) { 
    console.log('Si puedes ver netflix');
} else {
    console.log('No puedes verlo');
}

//OPERADOR TERNARIO
/* ? = Si el usuario esta autenticado. Caso contrario (:) = "...." */
console.log(autenticado ? 'Si esta autenticado': 'No esta autenticado');