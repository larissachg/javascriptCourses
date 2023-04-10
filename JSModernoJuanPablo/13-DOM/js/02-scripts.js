// Seleccionar elementos por su clase

const header = document.getElementsByClassName('header'); //Siempre se hace referencia a document.se coloca las clases como este definidio en el html
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases exiten mas de 1 vez, retorna los multiples elementos que tengan esa clase:
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe retorna como si fuera un arreglo vacio
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);