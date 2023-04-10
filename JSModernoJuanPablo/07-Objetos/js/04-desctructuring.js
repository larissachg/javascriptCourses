const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

// DESTRUCTURING -> Acceder a los valores de un objeto y asignarlo a una variable.
// OBJECT DESTRUCTURING -> Extraer del objeto y crear la variable un un mismo paso

/* const {el valor que se va a extrar} = Al objeto del cual vamos a extrar el valor */
// const { nombre } = producto;
// const { precio } = producto;
//Es lo mismo a: (solo se separa por comas)
const { nombre, precio, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);