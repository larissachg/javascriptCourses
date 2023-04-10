//Inicializar una variable con un valor:
var producto = "Monitor de 24 Pulgadas";
console.log(producto);

//Se puede reasignar las variables:
producto = "Monitor de 19 pulgadas";
console.log(producto);

//JavaScript es un lenguaje dinamico, no se especifica tipo de dato
producto = 20;
console.log(producto);

//Se puede inicializar sin valor y asignarlo despues
var disponible;
disponible = true;

disponible = false; 

//Inicializar multiples variables:
var categoria = 'Computadora',
    marca = 'Marca Famosa',
    calificacion = 5;

//NO se puede iniciar con numeros las variables:
//var 99dias; 
var dias99; //SI FUNCIONA

//var 01_; //NO FUNCIONA
var _01; //SI FUNCIONA
var __usuario;

//Para separar las palabras:
var nombreProducto; //LA MAS RECOMENDADA
var nombre_producto_categoria;