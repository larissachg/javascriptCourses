// VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListener();
function cargarEventListener(){
    //Cuando se agrega un curso haciendo click en "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
/* Para cuando se hace click en cualquier parte de la seccion del curso (imagen, nombre, boton) */
// function agregarCurso() {
//     console.log('Presionando en Cursos');
// }


/* Para cuando se hace click SOLO en el boton de Agregar carrito*/
function agregarCurso(e) {
    e.preventDefault(); //Previene que no se vaya hacia arriba al hacer click ya que el enlace/link aun esta vacio(#)

    // if (e.target.classList.contains('agregar-carrito')) {
    //     console.log('Agregando al carrito...');
    // }

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Se le dira en una funcion que Lea el contenido del HTML al que le dimos Click y extrae la informacion del curso
function leerDatosCurso(curso){
    console.log(curso);

    //Se crea un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCurso)
}


//Funcion para MOSTRAR el carrito de compras en el HTML
function carritoHTML(){
    articulosCarrito.forEach(curso => {
        
    });
}
