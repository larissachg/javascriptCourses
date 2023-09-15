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

//Declaration:
async function ejectutar2(){

}

//Expression
const ejecutar = async() => {
    try {
        console.log(1+1); //Se ejecuta

        const respuesta = await descargarClientes(); //El await espera a que finalice el promise y recien continua con el resto del codigo (detiene el codigo hasta que se resuelva el promise)

        console.log(respuesta); //Despues de 2.5seg (promise resuelto) se ejecuta
    } catch (error) {
        console.log(error);
    }
}

ejecutar();