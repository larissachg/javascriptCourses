//Agregar Elementos a Local Storage -> setItem(compuesto por una llave y un valor) La llave es como se va obtener los valores o como hacer referencia a ellos y el valor es lo que puede cambiar:
localStorage.setItem("nombre", 1); //Solo lee String, si colocamos un numero lo va a leer como string

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 300,
};

const productoString = JSON.stringify(producto); //Convierte el objeto en String
localStorage.setItem("producto", productoString);

const meses = ["Enero", "Febrero", "Marzo"];
localStorage.setItem("meses", JSON.stringify(meses)); //Tambien se puede colocar el JSON aqui y es el mismo resultado
