const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener("click", () => {
  //Una vez que demos click, usamos la API de Notificaciones y vamos a correr un metodo que le va a preguntar al usuario si quiere dar permiso para recibir notificaciones
  Notification.requestPermission().then((resultado) => {
    //Una vez que da el permiso.. THEN (entonces muestra el resultado)
    console.log("El resultado es", resultado);
  });
});

const verNotificacion = document.querySelector("#verNotificacion");
verNotificacion.addEventListener("click", () => {
  //Una vez se le da el permiso creamos una nueva notificacion
  if (Notification.permission === "granted") {
    /*new Notification('Esta es la notificacion', { //Para personalizar la notificacion solo ponemos , (coma) y abrimos corchete con el nuevo estilo: 
            icon: '/public/ccj.png',
            body: 'Lara esta aprendiendo API'
        })*/
    //Y Si se quiere que al hacer click en la notificacion lleve a algo o un sitio web, se lo crea como const:
    const notificacion = new Notification("Esta es la notificacion", {
      icon: "/public/ccj.png",
      body: "Lara esta aprendiendo API",
    });
    notificacion.onclick = function () {
      window.open("https://www.google.com/");
    };
  }
});
