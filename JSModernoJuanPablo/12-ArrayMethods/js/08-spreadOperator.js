//SPREAD OPERATOR CON ARREGLO DE INDICES
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.log(meses);

// Para agregar un mes que NO MODIFIQUE el arreglo original (se crea uno nuevo) a diferencia de push
const meses2 = [...meses, 'Julio'];
console.log(meses2);

console.warn('EL ORDEN ES IMPORTANTE');
const meses3 = ['Julio', ...meses];
console.log(meses3);


// SPREAD OPERATOR CON ARREGLO DE OBJETOS
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const producto = { nombre: 'Disco Duro', precio: 300}; // Crear un nuevo producto
const carrito2 = [...carrito, producto];
console.log(carrito2);