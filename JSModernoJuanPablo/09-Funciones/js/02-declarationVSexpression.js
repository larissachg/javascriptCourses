// LA DIFERENCIA ES que la declaracion va a funcionar hasta si el orden es que se la llama primero y despues se crea la funcion y la expression no va imprimir nada porque primero se le tiene que asignar un valor a la variable (const) es decir DEPENDE DEL ORDEN para que funcione.

// Declaracion de Funcion (Function Declaration)
sumar();   // SI va a funcionar

function sumar() {
    console.log( 2 + 2);
}


// Expresion de Funcion (Function Expression). 
sumar2(); // Aqui NO va a funcionar

const sumar2 = function() {
    console.log( 3 + 3);
}

// sumar2(); // si esta en este orden SI. TIENE que estar debajo de la asignacion para que funcione