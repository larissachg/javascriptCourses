const producto = 'Monitor 20 Pulgadas';

//LENGTH -> Para conocer la cantidad de letras que tiene la cadena (string)
console.log(producto);
console.log(producto.length);

//indexOf -> Si el string tiene la variable que estamos buscanod. por ejemplo si el producto tiene la palabra 'pulgadas' y nos indica en que posicion esta (empezando desde cero):
//Si sale -1 es que NO se encontro.
console.log(producto.indexOf('Monitor'));

//INCLUDES -> Muestra con true or false si incluye lo que se le pide, por ejemplo no hay la palabra 'table' en la oracion entonces muestra false.
console.log(producto.includes('Tablet'));
console.log(producto.includes('Monitor'));
console.log(producto.includes('monitor'));
