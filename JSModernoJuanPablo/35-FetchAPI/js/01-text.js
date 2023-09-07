//FETCH API puede leer solo textos o JSON
const cargarTxtBtn = document.querySelector("#cargarTxt");
cargarTxtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  //fetch('data/datos.txt'); El url se puede declarar (const) o colocar directo

  //Es lo mismo que:
  const url = "data/datos.txt";
  fetch(url) //Quiero que consultes esta url
    .then((respuesta) => {
      //Entonces imprime los datos
      console.log(respuesta); //Respuesta general
      console.log(respuesta.status); //Estado de que la consulta se realizo bien (mal = 404)
      console.log(respuesta.statusText); //De forma leible que se realizo bien (mal = Not Found)
      console.log(respuesta.url); //Muestra la url de donde obtenemos los datos
      console.log(respuesta.type); //Tipo de consulta

      return respuesta.text(); //Solo puede ser .text o .json
    })
    .then((datos) => {
      //Una vez tengo la respuesta, quiero ejecutar el siguiente codigo que serian los datos, es decir lo que viene en ese archivo txt:
      console.log(datos); //El contenido de la respuesta
    })
    .catch((error) => {
      //En caso de que haya un error en la consulta
      console.log(error);
    });
}
