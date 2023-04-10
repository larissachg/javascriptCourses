const nombre = "Hola";
const precio = 300;

// Para que acceder a los valores del mismo objeto y busque por afuera. nombre="hola" -> es de AFUERA - nombre:"Monitor..." es del objeto (.this)

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El Producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
};

producto.mostrarInfo();
