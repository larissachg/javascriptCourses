const carrito = [
    { nombre: 'Monitor 10 Pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Audifonos', precio: 150 },
    { nombre: 'Mouse', precio: 100 },
    { nombre: 'Computadora', precio: 1000 },
]

const nuevoArreglo = carrito.map( (producto) => {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo);


carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));