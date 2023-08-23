/*Hay 2 formas de crear clases en JS (se recomiendad que inicien con mayusculas)*/

//CLASS DECLARATION -> La Mas Usada
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
const lara = new Cliente('Lara', 700);
console.log(lara);

//CLASS EXPRESION
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
const daniel = new Cliente2('Daniel', 700);
console.log(daniel);