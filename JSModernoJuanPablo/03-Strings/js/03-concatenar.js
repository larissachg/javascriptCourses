const producto = 'Monitor 20 pulgadas';
const precio = ' 30 USD';

//Para concatenar o unir dos variables (.concat)
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

//Otra forma (+) 
console.log(producto + precio);
console.log(producto + "Con un precio de: " + precio);
//O con coma (,)
console.log("El producto", producto, "tiene un precio de", precio);

//Template String (``) 
//Es la tecnica mas nueva
console.log(`El producto ${producto} tiene un precio de ${precio}`);