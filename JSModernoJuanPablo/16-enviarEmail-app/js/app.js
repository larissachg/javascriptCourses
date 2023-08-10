import isEmail from "validator/lib/isEmail";

document.addEventListener("DOMContentLoaded", function () {
  //Se crea el arreglo que va a tener cuando todos los input esten llenos y listo para enviar
  const email = {
    email: "",
    cc: "",
    asunto: "",
    mensaje: "",
  };

  //Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputCc = document.querySelector("#cc");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector("#btn-submit");
  const btnReset = document.querySelector("#btn-reset");
  const spinner = document.querySelector("#spinner");

  //Asignar Eventos
  inputEmail.addEventListener("input", validar);
  inputCc.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", (e) => {
    e.preventDefault();

    //Reiniciar el objeto
    resetFormulario();
  });

  //Spinner (animacion de enviando mensaje)
  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    //Ocultar el spinner
    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");

      //reiniciar el objeto
      resetFormulario();

      //Crear una alerta indicando mensaje enviado
      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      alertaExito.textContent = "Mensaje enviado correctamente";

      formulario.appendChild(alertaExito);
      //Ocultar el mensaje de exito
      setTimeout(() => {
        alertaExito.remove();
      }, 2000);
    }, 3000);
  }

  function validar(e) {
    if (e.target.value.trim() === "" && e.target.id !== "cc") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === "email" && !isEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (
      e.target.id === "cc" &&
      e.target.value !== "" &&
      !isEmail(e.target.value)
    ) {
      mostrarAlerta("El email no es valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    //se manda a llamar la funcion para limpiar para que se ejecute despues una vez rellenado el campo obligatorio
    limpiarAlerta(e.target.parentElement);

    //ASIGNAR LOS VALORES (Si se ejecuta hasta aqui es que ya ha pasado todas las validaciones)
    email[e.target.name] = e.target.value.trim().toLowerCase();
    //Comprobar el objeto de email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    //Se llama funcion para que no se repita la alerta para el mismo campo
    limpiarAlerta(referencia);

    //Generar alerta en HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    //Clases con tailwind (css)
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    //Inyectar el error al formulario
    referencia.appendChild(error);
  }

  //Funcion para Limpiar alerta del HTML despues de que se escribe el correo
  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function comprobarEmail() {
    if (email.email === "" || email.asunto === "" || email.mensaje === "") {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }

    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    email.email = "";
    email.cc = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
  }
});
