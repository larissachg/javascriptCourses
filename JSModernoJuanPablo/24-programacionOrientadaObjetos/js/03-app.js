class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

//Herencia --> extends
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo); //Para heredar los atributos se usa la funcion "super()" y los busca en el constructor de la clase Padre
    this.telefono = telefono;
    this.categoria = categoria;
  }

  static bienvenida() {
    //Si no se reescribe un metodo, hereda el anterior
    return `Bienvenido al cajero de Empresas`;
  }
}

const lara = new Cliente("Lara", 700);
const empresa = new Empresa("Aprendiendo Javascript", 500, 77777777, "Cursos");
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
