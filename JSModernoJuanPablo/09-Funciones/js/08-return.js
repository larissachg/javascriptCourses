function sumar( a, b) {
    /* console.log( a + b); */ //En vez de solo llamar una funcion se pueda usar el resultado:
    return a + b;  // funcion que retorna un valor
}

//Cuando se tiene una funcion que retorna algo, se tiene que tener otra variable a la cual se le asigna el valor retornado (es decir resultado = manda a llamar la funcion (con los argumentos correspondientes) y en vez de imprimirlo en la misma funcion regresa el valor a resultado)
const resultado = sumar(2, 3);

//Resultado tiene valor que esta retornando la funcion:
console.log(resultado);



console.warn('Ejemplo');
//EJEMPLO MAS AVANZADO

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(100);

const totalPagar = calcularImpuesto(total);

console.log(total);
console.log(`El total a pagar es de ${totalPagar}`);