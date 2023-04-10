// Declaracion de Funcion (Function Declaration)

/* function Aqui Se pone el nombre de lo que se quiere realizar con la funcion(Aqui el parentesis puede estar vacio o colocar un argumento){ aqui va el cuerpo de la funcion y se imprime con console.log() }  Luego para visualizar se manda a llamar con el nombre de la funcion(); */
function sumar() {
    console.log( 2 + 2);
}

sumar();


// Expresion de Funcion (Function Expression). Es como crear una variable y se le asigna una funcion
const sumar2 = function() {
    console.log( 3 + 3);
}

sumar2();