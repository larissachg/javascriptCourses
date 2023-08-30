//GENERADOR (*) -> es una funcion que retorna un iterador. Usa una palabra reservada YIELD -> son los valores que se pueden iterar

function *crearGenerador() { 
    //Elementos estaticos definidos:
    yield 1;
    yield 'Lara';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador); //Muestra generador suspendido
console.log(iterador.next()); //Accede al primer valor del generador
console.log(iterador.next().done); //Con next va recorriendo (Accede al segundo) - Done?(Aqui termina?) -> False
console.log(iterador.next().value); //Devuelve el resultado del 3ro valor
console.log(iterador.next()); //Accede al 4to y ultimo valor
console.log(iterador.next().done); //Done?(Aqui termina?) -> True (ya no hay mas valores)
console.log(iterador); //Muestra generador cerrado


//EJEMPLO #2
//Generador para carrito de compras
function *generadorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}
//Elementos dinamicos
const carrito = ['Produco 1', 'Producto 2', 'Producto 3'];

const iterador2 = generadorCarrito(carrito) 

console.log(iterador2);
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());