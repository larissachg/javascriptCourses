//leer JSON Array:
const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");
cargarJSONArrayBtn.addEventListener("click", cargarDatos);

function cargarDatos() {
  const url = "data/empleados.json";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarHTML(resultado));
}

//Para mostrarlo en el html:
function mostrarHTML(empleados) {
  const contenido = document.querySelector(".contenido");

  let html = "";

  empleados.forEach((empleado) => {
    const { nombre, id, empresa, trabajo } = empleado;

    html += `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Trabajo: ${trabajo}</p>
        <p>Empresa: ${empresa}</p>
    `;
  });

  contenido.innerHTML = html;
}
