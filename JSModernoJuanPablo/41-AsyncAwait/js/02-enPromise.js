function descargarClientes(){

    return new Promise( (resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El listado de Clientes se descargo correctamente');
            } else{
                reject('Error en la conexion');
            }
        }, 2500);
    })
}

//Async Await -> Async es la funcion padre, sobre la cual se esta ejecutando el promise y await es la parte que va a esperar a que se ejecute el promise:

async function ejecutar() {
    try {
        console.log(1+1); //Se ejecuta

        const respuesta = await descargarClientes(); //El await espera a que finalice el promise y recien continua con el resto del codigo (detiene el codigo hasta que se resuelva el promise)

        console.log(respuesta); //Despues de 2.5seg (promise resuelto) se ejecuta
    } catch (error) {
        console.log(error);
    }
}

ejecutar();