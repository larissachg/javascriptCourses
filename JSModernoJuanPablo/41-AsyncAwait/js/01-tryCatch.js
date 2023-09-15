//Try Catch -> es intentar ejecutar una pieza de codigo y si no se puede, obtenemos una excepcion que podria ser un mensaje de error para poderlo debuguear pero nuestro codigo no deja de funcionar

//Sin Try Catch
/* console.log(1 + 1); //Si se ejecuta

hola(); //Esta funcion no esta definida, el codigo se detiene y no se ejecuta lo que sigue

console.log(2 + 2); //No llega a ejecutarse */


//con TRY CATCH:
console.log(1 + 1);

try {
    hola()
} catch (error) {
    console.log(error);
}

console.log(2 + 2);
