// Los Id solo se puede poner UNO por elemento (no se repite), en el caso de que ocurra, javaScript va a retornar el primero que encuentre en el html
const formulario = document.getElementById('formulario');
console.log(formulario);

// Cuando el Id no existe, retorna NULL
const noExiste = document.getElementById('no-existe');
console.log(noExiste);