//Speech Recognition API -> Permite que cuando el usuario hable Javascript pueda saber o trasladar lo que esta diciendo por el microfono a la pagina web.

const salida = document.querySelector("#salida");
const microfonoBtn = document.querySelector("#microfono");

microfonoBtn.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
  const SpeechRecognition = webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  // Tiene diferentes etapas:
  recognition.start(); // 1) Arrancar recognition

  recognition.onstart = function () {
    // 2)Comenzar a escuchar
    salida.classList.add("mostrar");
    salida.textContent = "Escuchando...";
  };

  recognition.onspeechend = function () {
    // 3)Cuando el usuario termina de hablar
    salida.textContent = "Se dejo de grabar...";
    recognition.stop();
  };

  recognition.onresult = function (e) {
    // 4)se muestra el resultado (lo que el usuario hablo)
    console.log(e.results);
    console.log(e.results[0][0]); //Para acceder directo a la confianza y a las transcripcion

    const { confidence, transcript } = e.results[0][0]; //Confidence -> nivel de confianza, que tan seguro esta en la traduccion realizada (mientras mas facil lo que se haya dicho mas alto).

    const speech = document.createElement("p");
    speech.innerHTML = `Grabado: ${transcript}`;

    const seguridad = document.createElement("p");
    seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100)}`;

    salida.appendChild(speech);
    salida.appendChild(seguridad);
  };
}
