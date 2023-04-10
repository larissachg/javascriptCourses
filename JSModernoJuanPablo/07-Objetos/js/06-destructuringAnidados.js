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

//Destructing nomal, de la variable directa del objeto
/* const { nombre } = producto;
   console.log(nombre); 
*/

// Destructing de los objetos anidados:
const { nombre, informacion, informacion:{ fabricacion, fabricacion:{ pais } } } = producto;
console.log(informacion);
console.log(fabricacion);
console.log(pais);