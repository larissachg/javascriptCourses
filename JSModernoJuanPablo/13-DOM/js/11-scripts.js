// EJEMPLO PARA QUE UN BOTON MUESTRE Y ESCONDA EL MENU CUANDO SE HACE CLICK

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
    }

    console.log(footer.classList);
}

