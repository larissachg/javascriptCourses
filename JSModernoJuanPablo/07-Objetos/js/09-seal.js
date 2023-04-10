"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

Object.seal(producto);
//Si se puede modificar lo que existe pero no se puede agregar o eliminar propiedades

producto.disponible = false;  //Si se puede
// producto.imagen = "imagen.jpg"; No se puede
// delete producto.precio; No se puede


console.log(producto);
//Para saber si un objeto esta sellado:
console.log(Object.isSealed(producto));