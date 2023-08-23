//PROPIEDADES PRIVADAS
class Cliente {
  #saldo; //Propiedad Privada, solo se puede acceder desde la clase con otro atributo con un get o modificarlo con un set, o desde un constructor o de un metodo.

  constructor(nombre, saldo) {
    this.nombre = nombre; //Propiedad Publica
    this.#saldo = saldo; //Propiedad Privada
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.#saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

const lara = new Cliente("Lara", 700);
//console.log(lara.#saldo); /*Va a mostrar error, porque solo se puede acceder a el mediante la clase*/
console.log(lara.mostrarInformacion());

//Otra forma en vez de ponerlo en el constructor
class Cliente2 {
  #nombre;

  setNombre(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }
}

const lari = new Cliente2();
lari.setNombre("Lari");
console.log(lari.getNombre());
