const encabezado = document.querySelector('h1');

//En CSS se separa con guiones, aca con mayusculas
encabezado.style.backgroundColor = 'red'; 
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

// Para agregar o elimniar Clases
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);