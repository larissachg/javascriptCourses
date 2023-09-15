function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los Clientes fueron descargados');
        }, 4000);
    })
}

function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 2000);
    })
}

//FORMA MAS LENTA (primero se ejecuta uno y despues otro) cuando son dos peticiones diferentes
// const app = async() => {
//     try {
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);

//         const pedidos = await descargarNuevosPedidos();
//         console.log(pedidos);

//     } catch (error) {
//         console.log(error);
//     }
// }  

// app();

//La mejor forma de hacerlo (se ejecutan las dos al mismo tiempo)
const app2 = async() => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}  

app2();