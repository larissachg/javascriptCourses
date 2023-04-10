// La sintaxis es la misma de CSS ( . -> para clases; # -> para id o etiqueta html)
// La diferencia principal con querySelector, es que retorna todos los elementos que contenga el selector
const card = document.querySelectorAll('.card');
console.log(card);

// En el caso de que hayan 2 Id iguales (NO DEBERIA), retorna ambos
const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Si un elemento no existe -> retorna un arreglo vario
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);