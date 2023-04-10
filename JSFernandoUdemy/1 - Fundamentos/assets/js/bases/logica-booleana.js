
//Funcion si es True -> retorna (se muestra) "Regresa true"
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

//Funcion si es False -> retorna (se muestra) "Regresa false"
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

// Negacion (!)
console.warn('Not o la negacion'); //Aviso
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse() ); //true

console.warn('And'); //true si todos los valores son verdaderos
console.log( true && true); //true
console.log( true && false); //false
console.log( true && !false); //true

console.log('------------');
console.log( regresaFalse() && regresaTrue() );//false
//En consola solo muestra hasta el falso porque JS llega hasta el primer falso, no muestra todo lo demas que haya
console.log( regresaTrue() && regresaFalse() );//false
//Si el True esta de primero, por mas que sea falso igual se muestra en consola

console.log('---- && ----');
regresaFalse() && regresaTrue();
console.log('4 condiciones', true && true && false && true); //false

//OR
console.warn('OR'); //true
console.log( true || false); //true
console.log( false || true); //true

console.log( regresaTrue() || regresaFalse());
console.log('4 condiciones', true || true || false || true); //true

// ASIGNACIONES
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo';

console.log({a1});