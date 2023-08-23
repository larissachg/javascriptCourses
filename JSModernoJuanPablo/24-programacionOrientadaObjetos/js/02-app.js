//Metodos de las clases (funciones especificas para los objetos)

class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //Agregar Metodos
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    //Propiedades Estaticas -> Pertenece a la Clase y no al objeto (no se visualiza en el prototype del objeto), no requiere una instancia 
    static bienvenida(){
        return `Bienvenido al Cajero`;
    }
}

const lara = new Cliente('Lara', 700);
console.log( lara.mostrarInformacion() ); //Se llama desde el objeto
console.log( Cliente.bienvenida() ); //Se llama desde la clase
console.log(lara);