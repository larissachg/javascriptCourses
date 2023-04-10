const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

const medidas = {
    peso: '1kg',
    medida: '1m'
};

const resultado = Object.assign(producto, medidas);

// Otra forma SPREAD OPERATOR o REST OPERATOR
const resultado2 = {...producto, ...medidas} //El mas recomendado

console.log(resultado);
console.log(resultado2);