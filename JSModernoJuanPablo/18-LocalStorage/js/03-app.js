//Para ELIMINAR de localStorage -> removeItem('valor que se desea eliminar')
localStorage.removeItem('nombre');

//No se puede modificar directamente un dato, para poder actualizar se debe obtenerlo, modificarlo y luego volver a agregarlo:
const mesesArray = JSON.parse(localStorage.getItem('meses')); //Se obtiene el array que estaba con string
console.log(mesesArray);
mesesArray.push('Nuevo Mes'); //Se modifica con las propiedades de los array
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray)); //Se vuelve a agregar a localStorage el array como string

localStorage.clear();