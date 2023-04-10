// FUNCIONES BASICAS

function saludar( nombre ){
    console.log('Hola ' + nombre );
}

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre );
}

// Se llama a la funcion:
saludar('Larissa');
saludar2('Lara');

// En el caso de tener mas elementos, la funcion tienen un objeto implicito llamado arguments el cual hace referencia a todos los elementos que tiene:
function saludar3( nombre){
    console.log(arguments);
}
saludar3('Larissa', 25, false, 'Santa Cruz');


// FUNCIONES DE FLECHA
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

saludarFlecha();
saludarFlecha2( 'Larissa');


// RETURN
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2 ());