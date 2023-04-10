const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

// Una variable con CONST no puede reasignarse su valor
/* 
    const nombreProducto = 'Monitor'
    nombreProducto = 'Tablet';
*/ 

// Pero un OBJETO DENTRO de un CONST SI SE PUEDE reasigar o elimar
producto.disponible = false;
delete producto.precio;

console.log(producto);