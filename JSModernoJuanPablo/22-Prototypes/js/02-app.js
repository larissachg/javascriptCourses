function cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new cliente("Juan", 500);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(juan));

function empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  return `La empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

const LCG = new empresa("Aprendiendo Javascript", 4000, "Cursos Online");
console.log(formatearEmpresa(LCG));

//Cuando es un proyecto que tiene varios objetos, varias funciones, cuando muchas personas son las que modifica el codigo, es facil equivocarse con las funciones que se crean para cada objeto, por eso es importante usar prototypes
