function cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

//Para crear un prototype:
cliente.prototype.tipoCliente = function () {
  //es mejor usar function que arrow function porque busca a nivel global y function busca dentro de las mismos valores del objeto (this)
  let tipo;

  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platino";
  } else {
    tipo = "Normal";
  }
  return tipo;
};

//Instanciarlo
const pedro = new cliente("Pedro", 6000);
console.log(pedro);
console.log(pedro.tipoCliente());
