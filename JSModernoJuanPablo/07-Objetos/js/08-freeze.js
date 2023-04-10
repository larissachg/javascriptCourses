"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

// Prevenir que un objetivo sea modificado
Object.freeze(producto);

// producto.disponible = false; Sale error
// producto.imagen = "imagen.jpg"; Sale error
//delete producto.precio; Sale error

console.log(producto);
//Para saber si un objeto esta congelado:
console.log(Object.isFrozen(producto)); //Da como respuesta true or false
