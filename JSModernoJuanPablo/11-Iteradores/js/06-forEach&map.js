// FOR EACH es ideal para recorrer arreglos, va a ejecutarse al menos una vez por cada elemnto que tenga el arreglo.

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

pendientes.forEach( (pendiente, index) => {
    console.log(`${index} : ${pendiente}`);
})

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

const nuevoArreglo = carrito.forEach( producto => producto.precio);

// MAP -> la sintaxis es la misma, la unica diferencia es que crea un arreglo
const nuevoArreglo2 = carrito.map( producto => 
    producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);