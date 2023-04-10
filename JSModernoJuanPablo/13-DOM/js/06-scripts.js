/* const encabezado = document.querySelector('.contenido-hero h1').textContent; // Puede escribirse aqui mismo o separado:
console.log(encabezado); */

// SEPARADO:
//Para acceder al texto en javaScript hay 3 formas:
//console.log(encabezado.innerText); // Si en el CSS tiene la propiedad visibility:hidden; no lo va a encontrar
//console.log(encabezado.textContent); // Si lo va a encontrar
//console.log(encabezado.innerHTML); // Lo trae tal cual como esta en el HTML

//document.querySelector('.contenido-hero h1').textContent = 'nuevo heading'; // Se puede colocar asi como string

// O crearlo como nueva variable:
/* const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading; */

//PARA SELECCIONAR IMAGEN
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';