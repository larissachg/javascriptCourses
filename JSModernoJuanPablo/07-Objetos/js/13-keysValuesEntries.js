const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
};

//Para saber si un objeto tiene o no informacion (si las llaves estan vacias o si tiene propiedades)
// Retorna solo el nombre de las propiedades (sin sus valores)
console.log(Object.keys(producto));

//Para saber solo los valores de las propiedades de un objeto
console.log(Object.values(producto));

// Retorna cada propiedad con su valor de un objeto
console.log(Object.entries(producto));

