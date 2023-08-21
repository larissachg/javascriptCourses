// VARIABLES
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
const notificacionCarrito = document.getElementById("notificacion-carrito");
let articulosCarrito = [];

agregarNotificacion();

cargarEventListener();
function cargarEventListener() {
  //Cuando se agrega un curso haciendo click en "Agregar al Carrito"
  listaCursos.addEventListener("click", agregarCurso);

  //Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  //Muestra los cursos de Local Storage
  document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    carritoHTML();
  })

  //Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = []; //reseteamos el arreglo

    limpiarHTML(); //limpiamos el HTML
    agregarNotificacion();
  });
}

//FUNCIONES
/* Para cuando se hace click SOLO en el boton de Agregar carrito*/
function agregarCurso(e) {
  e.preventDefault(); //Previene que no se vaya hacia arriba al hacer click ya que el enlace/link aun esta vacio(#)

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
  agregarNotificacion();
}

//Funcion para agregar la notificacion de cuantos cursos hay en el carrito
function agregarNotificacion() {
  const cantidad = articulosCarrito.reduce((acc, curso) => {
    return acc + curso.cantidad;
  }, 0);
  if (cantidad !== 0) {
    notificacionCarrito.dataset.cantidadnotificacion = cantidad;
    notificacionCarrito.classList.add("notificacion-carrito--visible");
  } else if (cantidad === 0) {
    notificacionCarrito.classList.remove("notificacion-carrito--visible");
  }
}

//Elimina un curso del carrito
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    //Elimina el arreglo de articulosCarrito por el data-id

    /**articulosCarrito.forEach((curso) => { //forma menos practica con for each
      if (curso.id === cursoId) {
        if (curso.cantidad > 1) {
          curso.cantidad--;
        } else {
          articulosCarrito = articulosCarrito.filter(
            (curso) => curso.id !== cursoId
          );
        }
      }
    });*/

    //Mejor forma con find
    const curso = articulosCarrito.find((curso) => curso.id === cursoId);
    if (curso.cantidad > 1) {
      curso.cantidad--;
    } else {
      articulosCarrito = articulosCarrito.filter(
        (curso) => curso.id !== cursoId
      );
    }
  }
  agregarNotificacion();
  carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
}

// Se le dira en una funcion que lea el contenido del HTML al que le dimos Click y extrae la informacion del curso
function leerDatosCurso(curso) {
  //Se crea un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Revisa si un curso ya existe en el carrito para solo aumentar la cantidad
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos la cantidad

    /**const cursos = articulosCarrito.map((curso) => { //Forma menos practica con map
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; //retorna el objeto actualizado
      } else {
        return curso; //retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos]; */

    //Mejor forma con Find
    const curso = articulosCarrito.find((curso) => curso.id === infoCurso.id);
    if (curso) {
      curso.cantidad++;
    }
  } else {
    //Agregamos el curso al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);
  carritoHTML();
}

//Funcion para MOSTRAR el carrito de compras en el HTML
function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  //Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        <img src="${imagen}" width = "100">
    </td>
    <td>${titulo} </td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>
        <a href='#' class='borrar-curso' data-id='${id}' > X </a>
    </td>
    `;

    //Agrega el HTML al carrito en el tbody
    contenedorCarrito.appendChild(row);

    //Agregar el carrito de compras al storage
    sincronizarStorage();
  });
}

//Funcion para sincronizar la info a local storage
function sincronizarStorage(){
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML() {
  //Forma lenta
  /**contenedorCarrito.innerHTML = '';*/
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }

  sincronizarStorage();
}
