const carrito = ['Ana','Maria','Sol','Luna','Luz'];

console.table(carrito);

//Eliminar el ultimo elemento de un arreglo:
// carrito.pop();
// console.table(carrito);

//Eliminar del inicio del arreglo:
// carrito.shift();
// console.table(carrito);

// Eliminar cualquier posicion o varios elementos
/* variable.splice(posicion donde va a empezar, cuantos elementos se va a eliminar); */
carrito.splice(2, 2);
console.table(carrito);