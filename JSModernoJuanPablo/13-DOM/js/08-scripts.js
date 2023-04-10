// Recorrer el DOM - DEL PADRE HACIA LOS HIJOS (con CHILDREN)
/* //PARA ENLACES 
const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes); // Los espacios en blancos son considerados elementos (como no se pueden eliminar porque desorganizaria el html) se usa:
console.log(navegacion.children); //Los espacios en blanco no se consideran elementos

//Para acceder a uno de los elementos:
console.log(navegacion.children[1]);
console.log(navegacion.children[1].nodeName); // Para saber la etiqueta
console.log(navegacion.children[1].nodeType); // Para saber el tipo de node */

/*
//PARA CAMBIAR DE UNA SECCION
const card = document.querySelector('.card');
console.log(card.children[1].children); // Va a mostrar los hijos de ese info
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM'; // Para acceder al titulo y modificarlo
console.log(card.children[1].children[1].textContent);
*/ 

/* //PARA CAMBIAR UNA IMAGEN
const card = document.querySelector('.card');
card.children[0].src = 'img/hacer2.jpg';
console.log(card.children[0]); */

/* // Transversing el DOM - DE LOS HIJOS HACIA EL PADRE (con PARENT)
const card = document.querySelector('.card');
//console.log(card.parentNode); //Toman cuenta los espacios en blanco
console.log(card.parentElement); // Es la mejor forma
console.log(card.parentElement.parentElement.parentElement); // Si se le continua colocando se va hacia el principal padre */

/* //DE HERMANO AL SIGUIENTE HERMANO Y ASI SUCESIVAMENTE (NEXTELEMENTSIBLING)
const card = document.querySelector('.card');
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling); */

//Para ir a un elemento PREVIO 
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);