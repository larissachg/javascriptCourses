let cliente = {
  mesa: "",
  hora: "",
  pedido: [],
};

const categorias = {
  1: "Comida",
  2: "Bebida",
  3: "Postres",
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");
btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const mesa = document.querySelector("#mesa").value;
  const hora = document.querySelector("#hora").value;

  //Revisar si hay campos vacios
  const camposVacios = [mesa, hora].some((campo) => campo === "");

  if (camposVacios) {
    //Verificar si ya hay una alerta
    const existeAlerta = document.querySelector(".invalid-feedback");

    if (!existeAlerta) {
      const alerta = document.createElement("div");
      alerta.classList.add("invalid-feedback", "d-block", "text-center");
      alerta.textContent = "Todos los campos son obligatorios";

      document.querySelector(".modal-body form").appendChild(alerta);

      setTimeout(() => {
        alerta.remove();
      }, 2500);
    }

    return;
  }

  //Asignar datos del formulario al cliente
  cliente = { ...cliente, mesa, hora };

  //Ocultar Modal
  const modalFormulario = document.querySelector("#formulario");
  const modelBootstrap = bootstrap.Modal.getInstance(modalFormulario);
  modelBootstrap.hide();

  //Mostrar las secciones
  mostrarSecciones();

  //Obtener Platillos de la API de JSON-Server
  obtenerPlatillos();
}

function mostrarSecciones() {
  const seccionesOcultas = document.querySelectorAll(".d-none");
  seccionesOcultas.forEach((seccion) => seccion.classList.remove("d-none"));
}

function obtenerPlatillos() {
  const url = "http://localhost:4000/platillos"; //La url que creamos con JSON-Server

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarPlatillos(resultado))
    .catch((error) => console.log(error));
}

function mostrarPlatillos(platillos) {
  const contenido = document.querySelector("#platillos .contenido");

  platillos.forEach((platillo) => {
    const row = document.createElement("div");
    row.classList.add("row", "py-3", "border-top");

    const nombre = document.createElement("div");
    nombre.classList.add("col-md-4");
    nombre.textContent = platillo.nombre;

    const precio = document.createElement("div");
    precio.classList.add("col-md-3", "fw-bold");
    precio.textContent = `$${platillo.precio}`;

    const categoria = document.createElement("div");
    categoria.classList.add("col-md-3");
    categoria.textContent = categorias[platillo.categoria];

    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.min = 0;
    inputCantidad.value = 0;
    inputCantidad.id = `producto-${platillo.id}`;
    inputCantidad.classList.add("form-control");

    //Funcion que detecta la cantidad y el platillo que se esta agregando
    inputCantidad.onchange = function () {
      const cantidad = parseInt(inputCantidad.value);
      agregarPlatillo({ ...platillo, cantidad });
    };

    const agregar = document.createElement("div");
    agregar.classList.add("col-md-2");
    agregar.appendChild(inputCantidad);

    row.appendChild(nombre);
    row.appendChild(precio);
    row.appendChild(categoria);
    row.appendChild(agregar);
    contenido.appendChild(row);
  });
}

function agregarPlatillo(producto) {
  //Extraer el pedido actual
  let { pedido } = cliente;

  //Revisar que la cantidad sea mayor a 0
  if (producto.cantidad > 0) {
    //Comprueba si el elemento ya existe en el array
    if (pedido.some((articulo) => articulo.id === producto.id)) {
      //El articulo ya existe, Actualizar la cantidad:
      const pedidoActualizado = pedido.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });

      //Se asigna el nuevo array a cliente.pedido
      cliente.pedido = [...pedidoActualizado];
    } else {
      //El Articulo no existe, lo agregamos al array de pedido
      cliente.pedido = [...pedido, producto];
    }
  } else {
    //Eliminar elementos cuando la cantidad es 0
    const resultado = pedido.filter((articulo) => articulo.id !== producto.id);
    cliente.pedido = [...resultado];
  }
  //Limpiar el codigo HTML previo
  limpiarHTML();

  if (cliente.pedido.length) {
    //Mostrar el resumen
    actualizarResumen();
  } else {
    mensajePedidoVacio();
  }
}

function actualizarResumen() {
  const contenido = document.querySelector("#resumen .contenido");

  const resumen = document.createElement("div");
  resumen.classList.add("col-md-6", "card", "py-5", "px-3", "shadow");

  //Informacion de la mesa
  const mesa = document.createElement("p");
  mesa.textContent = "Mesa: ";
  mesa.classList.add("fw-bold");

  const mesaSpan = document.createElement("span");
  mesaSpan.textContent = cliente.mesa;
  mesaSpan.classList.add("fw-normal");

  //Informacion de la hora
  const hora = document.createElement("p");
  hora.textContent = "Hora: ";
  hora.classList.add("fw-bold");

  const horaSpan = document.createElement("span");
  horaSpan.textContent = cliente.hora;
  horaSpan.classList.add("fw-normal");

  //Agregar a los elementos padres
  mesa.appendChild(mesaSpan);
  hora.appendChild(horaSpan);

  //Titulos de la seccion
  const heading = document.createElement("h3");
  heading.textContent = "Platillos Consumidos";
  heading.classList.add("my-4", "text-center");

  //Iterar sobre el array de pedidos
  const grupo = document.createElement("ul");
  grupo.classList.add("list-group");

  const { pedido } = cliente;
  pedido.forEach((articulo) => {
    const { nombre, cantidad, precio, id } = articulo;

    const lista = document.createElement("li");
    lista.classList.add("list-group-item");

    const nombreEl = document.createElement("h4");
    nombreEl.classList.add("my-4");
    nombreEl.textContent = nombre;

    //Cantidad del articulo
    const cantidadEl = document.createElement("p");
    cantidadEl.classList.add("fw-bold");
    cantidadEl.textContent = "Cantidad: ";

    const cantidadValor = document.createElement("span");
    cantidadValor.classList.add("fw-normal");
    cantidadValor.textContent = cantidad;

    //Precio del articulo
    const preciodEl = document.createElement("p");
    preciodEl.classList.add("fw-bold");
    preciodEl.textContent = "Precio: ";

    const precioValor = document.createElement("span");
    precioValor.classList.add("fw-normal");
    precioValor.textContent = `$${precio}`;

    //Subtotal del articulo
    const subtotal = document.createElement("p");
    subtotal.classList.add("fw-bold");
    subtotal.textContent = "Subtotal: ";

    const subtotalValor = document.createElement("span");
    subtotalValor.classList.add("fw-normal");
    subtotalValor.textContent = `$${precio * cantidad}`;

    //Boton para eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.textContent = "Eliminar del Pedido";

    //Funcion para eliminar el pedido (haciendo click al boton)
    btnEliminar.addEventListener("click", () => {
      eliminarProducto(id);
    });

    //Agregar valores a sus contenedores
    cantidadEl.appendChild(cantidadValor);
    preciodEl.appendChild(precioValor);
    subtotal.appendChild(subtotalValor);

    //Agregar Elementos al LI
    lista.appendChild(nombreEl);
    lista.appendChild(cantidadEl);
    lista.appendChild(preciodEl);
    lista.appendChild(subtotal);
    lista.appendChild(btnEliminar);

    //Agregar lista al grupo principal
    grupo.appendChild(lista);
  });

  //Agregar al contenido
  resumen.appendChild(mesa);
  resumen.appendChild(hora);
  resumen.appendChild(heading);
  resumen.appendChild(grupo);

  contenido.appendChild(resumen);

  //Mostrar Formulario de Propinas
  formularioPropinas();
}

function limpiarHTML() {
  const contenido = document.querySelector("#resumen .contenido");

  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild);
  }
}

function eliminarProducto(id) {
  const { pedido } = cliente;
  const resultado = pedido.filter((articulo) => articulo.id !== id);
  cliente.pedido = [...resultado];

  //Limpiar el codigo HTML previo
  limpiarHTML();

  if (cliente.pedido.length) {
    //Mostrar el resumen
    actualizarResumen();
  } else {
    mensajePedidoVacio();
  }

  //El producto se elimino por lo tanto regresamos la cantidad a 0 en el formulario
  const productoEliminado = `#producto-${id}`;
  const inputEliminado = document.querySelector(productoEliminado);
  inputEliminado.value = 0;
}

function mensajePedidoVacio() {
  const contenido = document.querySelector("#resumen .contenido");

  const texto = document.createElement("p");
  texto.classList.add("text-center");
  texto.textContent = "Añade los elementos del pedido";

  contenido.appendChild(texto);
}

function formularioPropinas() {
  const contenido = document.querySelector("#resumen .contenido");

  const formulario = document.createElement("div");
  formulario.classList.add("col-md-6", "formulario");

  const divFormulario = document.createElement("div");
  divFormulario.classList.add("card", "py-5", "px-3", "shadow");

  const heading = document.createElement("h3");
  heading.classList.add("my-4", "text-center");
  heading.textContent = "Propina";

  //Radio Button para seleccionar la propina
  //5%
  const radio5 = document.createElement("input");
  radio5.type = "radio";
  radio5.name = "propina";
  radio5.value = "5";
  radio5.classList.add("form-check-input");
  radio5.addEventListener("click", () => {
    calcularPropina();
  });

  const radio5Label = document.createElement("label");
  radio5Label.textContent = "5%";
  radio5Label.classList.add("form-check-label");

  const radio5Div = document.createElement("div");
  radio5Div.classList.add("form-check");

  //10%
  const radio10 = document.createElement("input");
  radio10.type = "radio";
  radio10.name = "propina";
  radio10.value = "10";
  radio10.classList.add("form-check-input");
  radio10.addEventListener("click", () => {
    calcularPropina();
  });

  const radio10Label = document.createElement("label");
  radio10Label.textContent = "10%";
  radio10Label.classList.add("form-check-label");

  const radio10Div = document.createElement("div");
  radio10Div.classList.add("form-check");

  //20%
  const radio20 = document.createElement("input");
  radio20.type = "radio";
  radio20.name = "propina";
  radio20.value = "20";
  radio20.classList.add("form-check-input");
  radio20.addEventListener("click", () => {
    calcularPropina();
  });

  const radio20Label = document.createElement("label");
  radio20Label.textContent = "20%";
  radio20Label.classList.add("form-check-label");

  const radio20Div = document.createElement("div");
  radio20Div.classList.add("form-check");

  radio5Div.appendChild(radio5);
  radio10Div.appendChild(radio10);
  radio20Div.appendChild(radio20);

  radio5Div.appendChild(radio5Label);
  radio10Div.appendChild(radio10Label);
  radio20Div.appendChild(radio20Label);

  //Agregar al Div Principal
  divFormulario.appendChild(heading);
  divFormulario.appendChild(radio5Div);
  divFormulario.appendChild(radio10Div);
  divFormulario.appendChild(radio20Div);

  //Agregando al formulario
  formulario.appendChild(divFormulario);

  contenido.appendChild(formulario);
}

function calcularPropina() {
  const { pedido } = cliente;
  let subtotal = 0;

  //Calcular el Subtotal a pagar
  pedido.forEach((articulo) => {
    subtotal += articulo.cantidad * articulo.precio;
  });

  //Seleccionar el Radio Button con la propina del cliente
  const propinaSeleccionada = document.querySelector(
    '[name="propina"]:checked'
  ).value;

  //Calcular la propina
  const propina = (subtotal * parseInt(propinaSeleccionada)) / 100;

  //Calcular el total a pagar
  const total = subtotal + propina;

  mostrarTotalHTML(subtotal, total, propina);
}

function mostrarTotalHTML(subtotal, total, propina) {
  const divTotales = document.createElement("div");
  divTotales.classList.add("total-pagar");

  //Subtotal
  const subtotalHTML = document.createElement("p");
  subtotalHTML.classList.add("fs-3", "fw-bold", "mt-2");
  subtotalHTML.textContent = "Subtotal Consumo: ";

  const subtotalSpan = document.createElement("span");
  subtotalSpan.classList.add("fw-normal");
  subtotalSpan.textContent = `$${subtotal}`;

  //Propina
  const propinalHTML = document.createElement("p");
  propinalHTML.classList.add("fs-3", "fw-bold", "mt-2");
  propinalHTML.textContent = "Propina: ";

  const propinaSpan = document.createElement("span");
  propinaSpan.classList.add("fw-normal");
  propinaSpan.textContent = `$${propina}`;

  //Total
  const totalHTML = document.createElement("p");
  totalHTML.classList.add("fs-3", "fw-bold", "mt-3");
  totalHTML.textContent = "Total: ";

  const totalSpan = document.createElement("span");
  totalSpan.classList.add("fw-normal");
  totalSpan.textContent = `$${total}`;

  subtotalHTML.appendChild(subtotalSpan);
  propinalHTML.appendChild(propinaSpan);
  totalHTML.appendChild(totalSpan);

  //Eliminar el ultimo resultado
  const totalPagarDiv = document.querySelector(".total-pagar");
  if (totalPagarDiv) {
    totalPagarDiv.remove();
  }

  divTotales.appendChild(subtotalHTML);
  divTotales.appendChild(propinalHTML);
  divTotales.appendChild(totalHTML);

  const formulario = document.querySelector(".formulario > div");
  formulario.appendChild(divTotales);
}
