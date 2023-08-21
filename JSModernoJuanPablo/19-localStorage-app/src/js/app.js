//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

let tweets = [];

//Eventos
eventListeners();

function eventListeners() {
  //Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  //Cuando el documento este listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    console.log(tweets);
    crearHTML();
  });
}

//Funciones
function agregarTweet(e) {
  e.preventDefault();

  //Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  //Validacion
  if (tweet === "") {
    mostrarError("No puede ir vacio");
    return; //Evita que se ejecuten mas lineas de codigo
  }

  //Para que cada tweet tenga un identificador:
  const tweetObj = {
    id: Date.now(),
    tweet, //Es lo mismo que poner texto: tweet o tweet: tweet
  };

  //Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];

  //Agregar el tweet al HTML:
  crearHTML();

  //Reiniciar el formulario
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //Insertarlo en el HTML
  const contenedor = document.querySelector("#contenido");
  contenedor.appendChild(mensajeError);

  //Eliminar la alerta despues de 3seg.
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//Funcion para crear el listado de los tweet
function crearHTML() {
  limpiarHTML();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Agregar boton de eliminar tweet
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.innerText = "X";

      //Funcion de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      //Crear el HTML
      const li = document.createElement("li");

      //Añadir el texto
      li.innerText = tweet.tweet;

      //Asignar el boton de eliminar
      li.appendChild(btnEliminar);

      //Insertarlo en el HTML
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

//Agregar los Tweets actuales a LocalStorage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Funcion para eliminar un tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);

  crearHTML();
}

//Limpiar el HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
