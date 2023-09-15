const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

//Con promises:
// function obtenerDatos() {
//     fetch(url)
//     .then( respuesta => respuesta.json())
//     .then( resultado => console.log(resultado))
//     .catch( error => console.log(error));
// }

//Lo mismo Con Async Await:
async function obtenerDatos() {
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

//Mismo Resultado
