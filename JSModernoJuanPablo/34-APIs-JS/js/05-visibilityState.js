//VisibilityState -> Para detectar cuando estamos viendo la pagina web actual

document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion para reproducir el video...');
    } else{
        console.log('Pausar el video');
    }
})