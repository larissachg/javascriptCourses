const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un forEach
let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

//Con un Reduce
// Es como si empieza con una acumulacion antes del total que se va a sacar, en este caso es 0 + total
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);

// Por ejemplo si ya hubiera un total anterior al que se va a sacar (2000):
let resultado2 = carrito.reduce( (total, producto) => total + producto.precio, 2000);
console.log(resultado2);