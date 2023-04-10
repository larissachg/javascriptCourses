const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Comprobar si un valor existe en un arreglo:
// De forma manual (con forEach) :
meses.forEach((mes) => {
    if (mes === 'Enero') {
        console.log('Enero si existe')
    }
});

// De la forma mas corta con Array Method INCLUDES (retorna true or false):
// Includes solo funciona con los tipos de arreglos basados en indice (con un solo elemento)
const resultado = meses.includes('Enero');
console.log(resultado);
const resultado2 = meses.includes('Diciembre');
console.log(resultado2);
console.warn('some en Array');
// Tambien se puede usar el method .some
const resultado3 = meses.some( mes => mes === 'Febrero');
console.log(resultado3);

console.warn('some en Obj');
// Para arreglos de OBJETOS solo se puede usar el method .some
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const existe = carrito.some( ( producto) => {
    return producto.nombre === 'Celular'
});
const existe2 = carrito.some( ( producto) => {
    return producto.nombre === 'Monitor Curvo'
});
console.log(existe);
console.log(existe2);