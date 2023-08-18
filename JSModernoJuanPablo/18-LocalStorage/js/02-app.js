//OBTENER DATOS de localStorage -> getItem('valor que deseas obtener');
const nombre = localStorage.getItem("nombre");
console.log(nombre);

const productoJSON = localStorage.getItem("producto");
console.log(JSON.parse(productoJSON)); //Para convertir de STRING a lo que era desde un principio, en este caso a OBJETO

const meses = localStorage.getItem("meses");
const mesesArray = JSON.parse(meses); //Tambien sirve para convertir de STRING a ARREGLO
console.log(mesesArray);
