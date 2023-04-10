const producto = '      Monitor 20 pulgadas     ';
console.log(producto);
console.log(producto.length); //Tambien cuenta los espacios vacios

//Eliminar espacio del inicio:
console.log(producto.trimStart());
//Eliminar espacio del final:
console.log(producto.trimEnd());
//Eliminar espacio al inicio y al final:
console.log(producto.trimStart().trimEnd());

//Metodo mas antiguo solo dejaba eliminar en todas las direcciones (inicio y final al mismo tiempo):
console.log(producto.trim());