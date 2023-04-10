// findIndex -> permite saber en que posicion se encuentra un elemento

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Hacerlo con for Each
meses.forEach( (mes, i) => {
    if(mes === 'Abril') {
        console.log(`Encontrado en el indice ${i}`);
    }
})

// De forma mas sencilla con findIndex
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);

const indice2 = meses.findIndex( mes => mes === 'Diciembre');
console.log(indice2); // -1 no lo encontro


console.warn('Arr Obj');
// Encontrar un indice(Valor) en un arreglo de objetos. Solo encuentra el primer valor por mas que haya mas valores igual
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Se busca el que tenga el precio de 100, en esta caso hay 2 productos pero solo encuentra el primero (posicion 1 = Television)
const indice3 = carrito.findIndex (producto => producto.precio === 100);
console.log(indice3);