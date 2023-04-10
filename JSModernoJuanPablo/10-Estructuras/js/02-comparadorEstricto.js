/* != DIFERENTE NO ESTRICTO, indica si es diferente solo tomando en cuenta el valor, no si son diferentes en tipos de datos */
const puntaje = 1000;

if (puntaje != "1000") {
    console.log('Si es diferente');
} else {
    console.log('No es diferente');
};


/* !== DIFERENTE ESTRICTO, indica si es diferente en todo */
const puntaje2 = 1000;

if (puntaje2 !== "1000") { 
    console.log('Si es diferente');
}


// == es igual a... -> Operador NO ESTRICTO (si son de tipo diferente (uno cadena y el numero) pero es la misma cantidad sale que es igual)
const puntaje3 = 1000;

if (puntaje3 == "1000") { 
    console.log('Si es igual');
};


// === es igual a... -> SI ES ESTRICTO (si son de difernete tipo por mas que sea la misma cantidad sale que NO ES IGUAL)
const puntaje4 = 1000;

if (puntaje4 === "1000") { 
    console.log('Si es igual');
} else {
    console.log('No es igual');
};