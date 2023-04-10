// Se puede eliminar elementos POR SI MISMO o DESDE EL PADRE

/* //Por si mismo:
const primerEnlace = document.querySelector('a');
primerEnlace.remove(); */

// Desde el Padre:
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
navegacion.removeChild(navegacion.children[2]);