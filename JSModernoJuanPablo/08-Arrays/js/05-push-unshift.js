const meses = ['Enero', 'Febrero', 'Marzo'];

// Sin conocer la extension del arreglo, se puede agregar al final
meses.push('Abril');

console.table(meses);


const carrito = [];

console.warn('Carrito');
// Definir un producto que estara dentro del array del carrito:
const producto = {
    nombre: "Monitor 30 pulgadas",
    precio: 400
};

const producto2 = {
    nombre: "Celular",
    precio: 800
};

const producto3 = {
    nombre: "Mouse",
    precio: 200
};

carrito.push(producto2); // Dependiendo del orden que se coloque va antes del ultimo
carrito.push(producto);

//Para agregar al inicio:
carrito.unshift(producto3);


console.table(carrito);