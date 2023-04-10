const nav = document.querySelector('.navegacion');

// Registrar un evento
/* nav.addEventListener('click', () => { //Cuando se hace click
    console.log('click en nav');
}) */

nav.addEventListener('mouseout', () => { //Cuando sales de la navegacion
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseenter', () => { //Cuando se entra a la navegacion
    console.log('entrando a la navegacion');

    nav.style.backgroundColor = 'white';
})

/*nav.addEventListener('mousedown', () => { //Cuando presionas en la navegacion - Similar a click
    console.log('presionando');
    nav.style.backgroundColor = 'white';
}) */

/* nav.addEventListener('mouseup', () => { //Cuando presionas en la navegacion y sueltas el mouse
    console.log('presiono y suelto');

    nav.style.backgroundColor = 'white';
}) */

nav.addEventListener('dblclick', () => { //Doble Click
    console.log('doble click');

    nav.style.backgroundColor = 'white';
}) 