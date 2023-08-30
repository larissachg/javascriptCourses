//SET permite crear una lista de valores sin duplicado
const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

//Caracteristicas de SET
carrito.delete('Disco #3'); //Para eliminar un valor
/*carrito.clear();*/ //Para eliminar todo
console.log(carrito);
console.log(carrito.size); //Saber cuanto mide, es como .length
console.log(carrito.has('Guitarra')); //Para comprobar que existe un valor
//los SET son iterables
carrito.forEach((producto, index, pertenece) => {
    // console.log(producto); //Llave y valor en un SET es lo mismo
    // console.log(index); //Imprime lo mismo que producto
    // console.log(pertenece); //Devuelve el set completo
})

//Ejemplo: Del siguiente arreglo, eliminar los duplicados
const numeros = [10, 15, 18, 7, 10, 15];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);