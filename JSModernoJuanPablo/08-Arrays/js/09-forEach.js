const carrito = [
    { nombre: 'Monitor 10 Pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Audifonos', precio: 150 },
    { nombre: 'Mouse', precio: 100 },
    { nombre: 'Computadora', precio: 1000 },
]


for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

console.warn('forEach');
// Funcion forEach
/* carrito.forEach( function (Se coloca el nombre que se desee el cual representa a los elementos) ) { ..... }   */
carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});


const listaElectronicos = ['Monitor 10 Pulgadas - Precio: 500', 'Tablet - Precio: 300', 'Celular - Precio: 800', 'Audifonos - Precio: 150', 'Mouse - Precio: 100', 'Computadora - Precio: 1000'];
listaElectronicos.forEach(electronico => {
    console.log(electronico);
});