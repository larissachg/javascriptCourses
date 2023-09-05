const aplicarDescuento = new Promise((resolve, reject) => {
  //Funciones o palabras reservadas como parametros de PROMISE(resolve -> es lo que se va a ejecutar cuando el promise se ejecuta correctamente o se cumple. & Reject -> es cuando tenemos un error en el promise)
  const descuento = true;

  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar");
  }
});

aplicarDescuento
    .then(resultado => descuento(resultado)) //Es la accion que va a pasar una vez que se realiza el PROMISE
    .catch(error => console.log(error)) //Si el promise falla se tiene acceso al .catch

/* Hay 3 valores posibles: 
    fulfilled -> el promise se cumplio
    rejected -> el promise no se cumplio
    pending -> aun no se cumple y tampoco fue rechazado */


function descuento(mensaje){
    console.log(mensaje);
}