//Acceder a las Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Acceder a los resultados
const result = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); //Muestra los autos al cargar

  llenarSelect(); //Llena las opciones de años
});

//Evento para los select de busqueda
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});
year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);
  filtrarAuto();
});
minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});
maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
});
puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = parseInt(e.target.value);
  filtrarAuto();
});
transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});

//FUNCIONES
function mostrarAutos(autos) {
  limpiarHTML(); //Elimina el HTML previo

  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, color, transmision, precio } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
        ${marca} ${modelo} - 
        Año: ${year} - 
        ${puertas} Puertas - 
        Color: ${color} - 
        Transmision: ${transmision} - 
        Precio: ${precio}
        `;

    //Insertar en el HTML
    result.appendChild(autoHTML);
  });
}

//Limpiar HTML para mostrar los resultados dependiendo de la seleccion
function limpiarHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

//Funcion para Generar los Años del Select
const llenarSelect = () => {
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");

    option.value = i;
    option.textContent = i;
    year.appendChild(option); //Agrega las opciones de año al select
  }
};

/*Funcion de Alto Nivel -> Es una funcion que toma otra funcion*/
//Funcion que Filtra en Base a la Busqueda
function filtrarAuto() {
  // const result = autos
  //   .filter((auto) => filtrado(auto, "marca"))
  //   .filter((auto) => filtrado(auto, "year"))
  //   .filter((auto) => filtrado(auto, "preciomin"))
  //   .filter((auto) => filtrado(auto, "preciomax"))
  //   .filter((auto) => filtrado(auto, "puertas"))
  //   .filter((auto) => filtrado(auto, "transmision"))
  //   .filter((auto) => filtrado(auto, "color"));

  /*Forma Mejorada, mismo resultado: **/
  const searchKeys = Object.keys(datosBusqueda);
  let result = [];
  searchKeys.forEach((key) => {
    result =
      result.length === 0
        ? autos.filter((auto) => filtrado(auto, key))
        : result.filter((auto) => filtrado(auto, key));
  });

  if (result.length) {
    mostrarAutos(result);
  } else {
    noResultado();
  }
}

//Funcion cuando no haya resultados segun lo seleccionado
function noResultado() {
  limpiarHTML();

  const noResultText = document.createElement("div");
  noResultText.classList.add("alerta", "error");
  noResultText.textContent = "No hay Resultados con ese filtro";
  result.appendChild(noResultText);
}

function filtrado(auto, tipo) {
  if (datosBusqueda[tipo]) {
    return auto[tipo] === datosBusqueda[tipo];
  }
  return auto;
}
