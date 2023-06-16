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

class Heroe extends Persona{
    clan = 'sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe("Peter Parker", "Spider", "Soy tu vecino");
console.log(spiderman);
spiderman.quienSoy();