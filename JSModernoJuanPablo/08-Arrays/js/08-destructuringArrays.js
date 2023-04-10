const producto = {
    nombre: "Monitor 30 pulgadas",
    precio: 400,
    disponible: true,
};

// Destructuring
const {nombre} = producto;

console.log(nombre);

// Destructuring con Arreglos
const numeros = [10,20,30,40,50];

// El nombre que se coloque (puede ser cualquiera) se asigna segun el orden:
/* const [primero] va a ser para el elemento 0 y asi sucesivamente */
const [primero, segundo, tercero, etc] = numeros;
console.log(segundo);

// Tambien puede dejarse el nombre en blanco separado por comas (,) hasta el elemento que nos interesa:
const [ , , , , quinto] = numeros
console.log(quinto);

// Si queremos seleccionar un elemento y que los demas se armen en un arreglo:
const [primer, segund, ...tercer] = numeros;
console.log(tercer);