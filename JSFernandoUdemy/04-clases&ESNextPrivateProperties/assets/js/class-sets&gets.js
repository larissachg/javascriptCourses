class Persona {
  //Para las clases siempre se usa el UpperCamelcase (desde la primera con mayuscula)

  //Propiedades
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre); //undefined
    console.log("Hola, soy un metodo estatico");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set comidaFavorita(comida) {
    //El set es para establecer un valor. Recibe solo un argumento para establecer. - El set no puede tener el mismo nombre de la propiedad(definida mas arriba en la clase) - Puede ir la palabra al inicio del nombre o no, es opcional.
    this.comida = comida;
  }

  get getComidaFavorita() {
    //El get es para recuperar un valor. - Puede ir la palabra al inicio del nombre o no, es opcional.
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona("Peter Parker", "Spider", "Soy tu vecino");
const ironman = new Persona("Tony Stark", "Iron", "Soy tu amigo");
// console.log(ironman);

spiderman.quienSoy();
// ironman.miFrase();

spiderman.comidaFavorita = "El pie de ceraza"; //Se llama diferente (con igual)
// console.log(spiderman);
// console.log(spiderman.getComidaFavorita);

console.log("Conteo statico", Persona._conteo);
console.log(Persona._conteo);
Persona.mensaje();
