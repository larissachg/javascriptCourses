// Cada elemento de un arreglo deben de cumplir la condicion para que devuelva un true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( producto => producto.precio < 1000);
console.log(resultado);

const resultado2 = carrito.every( producto => producto.precio < 500);
console.log(resultado2);

console.warn('some');
// A diferenia de .some que revisa que al menos UNO cumpla la condicion
const resultado3 = carrito.some( producto => producto.precio < 500);
console.log(resultado3);