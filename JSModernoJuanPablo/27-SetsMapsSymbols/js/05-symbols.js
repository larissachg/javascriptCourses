//SYMBOLS -> permite crear una propiedad unica, no hay dos symbols que sean iguales. 

//Symbol(constructor);
const sym = Symbol('1'); //No se crea con la palabra new
const sym2 = Symbol('1');

//Por mas que tengan los mismos valores en el constructor, devuelve que son diferentes:
if(sym === sym2){
    console.log('Son iguales');
} else{
    console.log('Son diferentes');
}

console.log(Symbol() === Symbol()); //Nunca son iguales

//Ejemplo
const nombre = Symbol();
const apellido = Symbol();

const persona = {};
//Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Lara';
persona[apellido] = 'Chavez';
//De forma tradicional:
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
console.log(persona.nombre); //Acceder de forma tradicional sale undefined
console.log(persona[nombre]); //Para acceder se utiliza los corchetes

//Las propiedades que utilizan los SYMBOLS NO SON ITERABLES
for(let i in persona){
    console.log(i);
}

//Definir una descripcion del symbol es lo que se le pase al constructor:
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Larissa';
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);