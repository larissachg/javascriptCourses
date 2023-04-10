// Retorna maximo 1 elemento, por mas que haya mas elementos con la misma clase o el mismo Id
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selecctores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo elemento que tenga las mismas clases (Ej: el segundo card de hospedaje):
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar Id -> # (formulario):
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);