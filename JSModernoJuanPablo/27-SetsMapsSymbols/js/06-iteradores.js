//ITERADORES -> Crear un propio iterador:

//Crear una funcion que vaya iterando entre cada elemento:
function crearIterador(carrito) {
  let i = 0;
  return {
    siguiente: () => {
      //Funcion que retorna una funcion
      const fin = i >= carrito.length;
      const valor = !fin ? carrito[i++] : undefined;

      return {
        fin,
        valor,
      };
    },
  };
}
//Los elementos:
const carrito = ["Producto 1", "Producto 2", "Producto 3"];

//Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente()); //Muestra el producto 1
console.log(recorrerCarrito.siguiente()); //Muestra el producto 2
console.log(recorrerCarrito.siguiente()); //Muestra el producto 3
console.log(recorrerCarrito.siguiente()); //No hay mas productos= undefined
