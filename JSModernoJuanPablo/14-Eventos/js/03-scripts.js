// Eventos que suceden en los INPUT (formularios cuando se van llenando) se da funciones para ejecutar

const busqueda = document.querySelector('.busqueda');
/* busqueda.addEventListener('keydown', () => { //Se ejecuta cuando se presiona una tecla
    console.log('escribiendo...');
}) */

/* busqueda.addEventListener('keyup', () => { //Se ejecuta cuando se presiona y se suelta la tecla
    console.log('escribiendo...');
}) */

/* busqueda.addEventListener('blur', () => { //Se ejecuta cuando se entra al input (click) y luego se sale y hace click por fuera de el
    console.log('escribiendo...');
}) */

/* busqueda.addEventListener('copy', () => { //Se ejecuta cuando se copia el texto que se escribio en el input (ctrl + c)
    console.log('texto copiado...');
}) */

/* busqueda.addEventListener('paste', () => { //Se ejecuta cuando se pega el texto en el input (ctrl + v)
    console.log('texto pegado...');
}) */

/* busqueda.addEventListener('cut', () => { //Se ejecuta cuando se corta el texto del input (ctrl + x)
    console.log('texto cortado...');
}) */

busqueda.addEventListener('input', (comoTuDesees) => { //Se ejecuta cuando se realiza cualquiera de los anteriores menos el blur (apretar una tecla, copiar, cortar, pegar)
    console.log(comoTuDesees.type); //Nos dice sobre que elemento se esta trabajando
    console.log(comoTuDesees.target); //Nos va a decir que input en especifico es sobre el cual estamos escribiendo
    console.log(comoTuDesees.target.value); //Para saber lo que el usuario esta escribiendo, tambien ayuda a validar (dentro de un if)
})