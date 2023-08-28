import "../scss/style.scss";

//Variables y Selectores
const form = document.querySelector("#agregar-gasto");
const expenseList = document.querySelector("#gastos ul");

//Eventos
eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", budgetQuestion);

  form.addEventListener("submit", addExpense);
}

//Classes
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.residue = Number(presupuesto); //Al inicio es lo mismo que el presupuesto antes de que se coloquen los gastos
    this.gastos = [];
  }

  //Nuevo metodo
  newExpense(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calculateRest();
  }

  //Nuevo metodo
  calculateRest() {
    const spend = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.residue = this.presupuesto - spend;
  }

  deleteExpense(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    this.calculateRest();
  }
}

class UI {
  //Lo que ve el usuario (user interface)
  //Metodo
  insertBudget(cantidad) {
    //Extraer los valores
    const { presupuesto, residue } = cantidad;

    //Agregar al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = residue;
  }

  //Metodo
  showAlert(mensaje, tipo) {
    //Crear el DIV
    const divAlert = document.createElement("div");
    divAlert.classList.add("text-center", "alert");
    if (tipo === "error") {
      divAlert.classList.add("alert-danger");
    } else {
      divAlert.classList.add("alert-success");
    }

    //Mensaje de error
    divAlert.textContent = mensaje;

    //Insertar en el HTML
    document.querySelector(".primario").insertBefore(divAlert, form);

    //Quitar del HTML
    setTimeout(() => {
      divAlert.remove();
    }, 2000);
  }

  addExpense(gastos) {
    this.cleanHTML(); //Elimina el HTML previo

    //Iterar sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;

      //Crear un LI
      const newExpense = document.createElement("li");
      newExpense.className =
        "list-group-item d-flex justify-content-between align-items-center";
      // newExpense.setAttribute('data-id', id); /*Es lo mismo que: (version antigua)
      newExpense.dataset.id = id; //Se recomienda esta forma (nueva version)

      //Agregar el HTML del gasto nuevo
      newExpense.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`;

      //Boton para borrar el gasto
      const btnDelete = document.createElement("button");
      btnDelete.classList.add("btn", "btn-danger", "borrar-gasto");
      btnDelete.innerHTML = "Borrar &times;";
      btnDelete.onclick = () => {
        deleteExpense(id);
      };
      newExpense.appendChild(btnDelete);

      //Agregar al HTML
      expenseList.appendChild(newExpense);
    });
  }

  cleanHTML() {
    while (expenseList.firstChild) {
      expenseList.removeChild(expenseList.firstChild);
    }
  }

  updateResidue(residue) {
    document.querySelector("#restante").textContent = residue;
  }

  checkBudget(presupuestoObj) {
    const { presupuesto, residue } = presupuestoObj;
    const residueDiv = document.querySelector(".restante");

    //Comprobar que queda el 25% (se ha gastado el 75% del presupuesto)
    if (presupuesto / 4 > residue) {
      residueDiv.classList.remove("alert-success", "alert-warning");
      residueDiv.classList.add("alert-danger");
    } else if (presupuesto / 2 > residue) {
      //Comprobar que queda el 50% (se ha gastado el 50%)
      residueDiv.classList.remove("alert-success", "alert-danger");
      residueDiv.classList.add("alert-warning");
    } else {
      residueDiv.classList.remove("alert-danger", "alert-warning");
      residueDiv.classList.add("alert-success");
    }

    //Si el total es 0 o menor
    if (residue <= 0) {
      ui.showAlert("El presupuesto se ha agotado");

      form.querySelector('button[type="submit"]').disabled = true;
    } else if (residue > 0) {
      form.querySelector('button[type="submit"]').disabled = false;
    }
  }
}

//Instanciar
const ui = new UI();
let presupuesto; //Se crea la variable afuera sin ningun valor para poder instanciarlo dentra de la funcion:

//Funciones
function budgetQuestion() {
  const usersBudget = prompt("Cual es tu presupuesto?");

  if (
    usersBudget === "" ||
    usersBudget === null ||
    isNaN(usersBudget) ||
    usersBudget <= 0
  ) {
    //Si esta en blanco, clic cancelar, no es un numero, el numero es negativo
    window.location.reload(); //Se recarga la pagina
  }

  presupuesto = new Presupuesto(usersBudget); //Se instancia la clase Presupuesto
  ui.insertBudget(presupuesto); //Se instancia la clase UI
}

function addExpense(e) {
  e.preventDefault();

  //Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  //Validar
  if (nombre === "" || cantidad === "") {
    ui.showAlert("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.showAlert("Cantidad no valida", "error");
    return;
  }

  //Generar un objeto con el gasto
  const gasto = {
    nombre, //es lo mismo que nombre: nombre,
    cantidad,
    id: Date.now(),
  };

  //Añade un nuevo gasto
  presupuesto.newExpense(gasto);

  //Mensaje de agregar gasto exitoso
  ui.showAlert("Gasto agregado correctamente");

  //Imprimir los gastos (HTML)
  const { gastos, residue } = presupuesto;
  ui.addExpense(gastos);

  ui.updateResidue(residue);

  //Comprobar lo que hemos gastado con el presupuesto
  ui.checkBudget(presupuesto);

  //Reiniciar el formulario
  form.reset();
}

function deleteExpense(id) {
  //Elimina los gastos del objeto
  presupuesto.deleteExpense(id);

  //Elimina los gastos del HTML (visualmente)
  const { gastos, residue } = presupuesto;
  ui.addExpense(gastos);
  ui.updateResidue(residue);
  ui.checkBudget(presupuesto);
}
