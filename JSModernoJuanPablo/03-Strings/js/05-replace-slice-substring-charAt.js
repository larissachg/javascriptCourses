const producto = 'Monitor 20 Pulgadas';

//Reemplazar un texto de una cadena (.replace):
console.log(producto);
console.warn('Replace');
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));

//Para extraer o cortar una parte de la cadena de texto (.slice):
console.warn('Slice');
console.log(producto.slice(0,10)); //Se mantiene desde donde hasta donde (0=M y 10=cantidad de letras)
console.log(producto.slice(8)); //Con un solo numero muestra a partir de el. 8=P
console.log(producto.slice(2,1)); //Si el primer numero es mayor al segundo no va a funcionar, no va a mostrar nada

//Alternativa a Slice
console.warn('Substring');
console.log(producto.substring(0,5)); //Se comporta igual que slice
console.log(producto.substring(2,1)); //La unica diferencia con slice es que si le damos un primer numero mayor al segundo lo cambia de lugar ejemplo muestra como si fuera (1,2)

console.warn('Ejemplo'); //Para cortar la primer letra (.charAt)
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));