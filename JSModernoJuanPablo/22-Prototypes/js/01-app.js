//Object Literal (es estatico)
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

//Object Constructor (reutilizable y dinamico)
function cliente2(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo
}

const juan = new cliente2('Juan', 500)
console.log(juan);

//Cada objeto tiene sus prototypes que son las funciones que tiene disponible