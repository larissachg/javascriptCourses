
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

for( let pendiente of pendientes) {
    console.log(pendiente);
}


console.warn('Carrito');

//EJEMPLO CARRITO
const carrito = [
    { nombre: 'Monitor 10 Pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Audifonos', precio: 150 },
    { nombre: 'Mouse', precio: 100 },
    { nombre: 'Computadora', precio: 1000 },
]

for(let producto of carrito) {
    console.log(producto.nombre);
}