// LENGTH
let juegos = ['Kira', 'Pepo', 'Angel', 'Sky'];

console.log('Largo:', juegos.length);
// Lenght es el largo de los elementos (ejemplo: son 4 datos)

let primero = juegos[ 2-2 ];
let ultimo = juegos[ juegos.length - 1 ];
// Es muy comun usar el .length para conocer el ultimo elemento  el cual siempre sera -1

console.log( {primero, ultimo});

//FOREACH
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

// PUSH -> Para colocar al final:
let nuevaLongitud = juegos.push( 'Maia');
console.log( {nuevaLongitud, juegos});

//UNSHIFT -> Para colocar al principio:
juegos.unshift('Loly');
console.log( {nuevaLongitud, juegos});

// POP -> Para eliminar el ultimo elemento
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// SPLICE -> Para eliminar un ultimo en un orden especifico, ej a partir del segundo y que cantidad
let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice( pos, 2);
console.log( { juegosBorrados, juegos } );

// INDEXOF
let AngelIndex = juegos.indexOf('Angel');
console.log( {AngelIndex});
