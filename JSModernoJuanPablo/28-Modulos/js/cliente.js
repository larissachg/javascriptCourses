//Export nos permite exportar nuestra variable y usarla en otro archivo, para que funcione tiene que estar en HTML como type:module
export const nombreCliente = "Lara";

export const ahorro = 200;

//Exportar Funciones
export function mostrarInfomacion(nombre, ahorro) {
  return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
  if (ahorro > 0) {
    console.log("Si tiene saldo");
  } else {
    console.log("El Cliente no tiene saldo");
  }
}

//Exportar Clases
export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  //Metodo
  mostrarInfomacion() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
  }
}

//Export Default -> NO SE PUEDE TENER 2, SOLO 1
export default function nuevaFuncion() {
  console.log("Este es el export default");
}
