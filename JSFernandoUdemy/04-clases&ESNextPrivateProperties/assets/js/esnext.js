class Rectangulo{
    #area = 0; //# para que la propiedad no pueda ser modificado

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);
rectangulo.area = 100; //Colocando el numeral impide que podamos cambiar los datos
console.log(rectangulo);