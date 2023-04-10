// Pueden haber varios objetos dentro de un objeto

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso: '1kg',
            tamanho: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
};


console.log(producto);

//Aceder al objeto dentro del objeto mediante puntos:
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);

