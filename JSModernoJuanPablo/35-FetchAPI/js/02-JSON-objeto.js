//Un JSON es similar a un objeto, la diferencia es que las llaves estan detrno de comillas como si fueran string

//Leer de JSON:
const cargarJSONBtn = document.querySelector("#cargarJSON");
cargarJSONBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleado.json";
  /* fetch(url)
    .then(respuesta => {
        return respuesta.json(); 
    })
    .then(resultado => {
        console.log(resultado);
    }) */

  //Lo mismo de forma mas reducida:
  fetch(url)
    .then((respuesta) => respuesta.json()) //Que devuelva los datos como JSON
    //.then(resultado => console.log(resultado))
    .then((resultado) => mostrarHTML(resultado));
}

//Una vez que se obtiene los datos, se pone scripting para mostrarlo en pantalla:
function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");

  contenido.innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Trabajo: ${trabajo}</p>
    <p>Empresa: ${empresa}</p>
    `;
}
