const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un forEach
let resultado = '';
carrito.forEach( (producto, index) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[index]
    }
});

console.log(resultado);

// Con un Find
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2); // Mismo resultado pero codigo mas corto

// Find solo trae el primer resultado que encuentre, por mas que haya mas de uno con lo que se busca
const resultado3 = carrito.find( producto => producto.precio === 100);
console.log(resultado3); // En este caso television y Tablet tienen precio de 100 pero solo trae television