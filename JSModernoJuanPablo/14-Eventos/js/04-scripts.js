const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => { //Cuando alguien presiona el input o button)
    e.preventDefault(); //Para evitar que se realice la accion por defecto al enviar el formulario al apretar

    console.log('Buscando...');

    console.log(e.target.action);
});

