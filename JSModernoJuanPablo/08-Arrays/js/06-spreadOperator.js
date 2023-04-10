const carrito = [];

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

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2]; //al resultado anterior se le agrega el producto
resultado = [producto3, ...resultado]; // Se puede cambiar el orden


console.table(resultado);