// Se ejecuta hasta que el codigo deje de cumplir una condicion

/* for(en que lugar va iniciar a contar o repetirse; hasta cuando va ejecutarse; incremento) { lo que se va ejecutar }   */

//Nuestro codigo se ejecuta iniciando en la posicion "0" hasta que sea menor a 10 y va incrementando 1 en 1
for(let i = 0; i < 10; i++) {
    console.log(`Numero: ${i}`);
}

console.warn(''); //Se ejecuta HASTA que llegue a 10 e Incrementa de 2 en 2
for(let i = 0; i <= 10; i+=2) {
    console.log(`Numero: ${i}`);
}

console.warn('Pares');
// Como se identifica los numeros que sean PARES y los IMPAR?
for(let i = 1; i <= 15; i++) {
    if( i % 2 === 0 ){
        console.log(`El numero: ${i} es PAR`);
    } else {
        console.log(`El numero: ${i} es IMPAR`);
    }
}

console.warn('Carrito');
//CARRITO
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Celular', precio: 800},
    { nombre: 'Teclado', precio: 200},
    { nombre: 'Audifonos', precio: 100},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}