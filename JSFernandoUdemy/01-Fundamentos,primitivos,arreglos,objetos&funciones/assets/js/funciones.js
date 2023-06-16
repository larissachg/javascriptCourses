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

// RETURN -> toda funcion debe retornar algo, de caso contrario retorna UNDEFINED
function sumar(a, b){ //funcion tradicional
    return a + b;
}
console.log(sumar(5, 10));

const sumar2 = (a,b) => { //funcion de flecha
    return a + b;
}
console.log(sumar2(8, 10));

//Si la funcion retorna solo una linea, se puede omitir la palabra y convertirla en una sola linea:
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());