//Acceder al DOM de los input o div donde interactua el usuario
const petInput = document.querySelector("#pet");
const ownerInput = document.querySelector("#owner");
const phoneInput = document.querySelector("#phone");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const symptomsInput = document.querySelector("#symptoms");

//UI (User Interface)
const form = document.querySelector("#nueva-cita");
const appointmentList = document.querySelector("#citas");

let editing;

class Appointments {
  constructor() {
    this.appointments = [];
  }

  addAppointment(appointment) {
    this.appointments = [...this.appointments, appointment];
  }

  deleteAppointment(id) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
  }

  editAppointment(updatedAppointment) {
    this.appointments = this.appointments.map((appointment) =>
      appointment.id === updatedAppointment.id
        ? updatedAppointment
        : appointment
    );
  }
}

class UI {
  showAlert(message, type) {
    //Crear el div
    const divMessage = document.createElement("div");
    divMessage.classList.add("text-center", "alert", "d-block", "col-12");

    //Agregar clase en base al tipo de error
    if (type === "error") {
      divMessage.classList.add("alert-danger");
    } else {
      divMessage.classList.add("alert-success");
    }

    //Mensaje de error
    divMessage.textContent = message;

    //Agregar al DOM
    document
      .querySelector("#contenido")
      .insertBefore(divMessage, document.querySelector(".agregar-cita"));

    //Quitar la alerta despues de 3 segundos
    setTimeout(() => {
      divMessage.remove();
    }, 3000);
  }

  showAppointments({ appointments }) {
    this.cleanHTML();

    appointments.forEach((appointment) => {
      const { pet, owner, phone, date, time, symptoms, id } = appointment;

      const divAppointment = document.createElement("div");
      divAppointment.classList.add("cita", "p-3");
      divAppointment.dataset.id = id;

      //Scripting de los elementos de la cita
      const petBlock = document.createElement("h2");
      petBlock.classList.add("card-title", "font-weight-bolder");
      petBlock.textContent = pet;

      const ownerBlock = document.createElement("p");
      ownerBlock.innerHTML = `<span class="font-weight-bolder">Owner:</span> ${owner}`;

      const phoneBlock = document.createElement("p");
      phoneBlock.innerHTML = `<span class="font-weight-bolder">Phone:</span> ${phone}`;

      const dateBlock = document.createElement("p");
      dateBlock.innerHTML = `<span class="font-weight-bolder">Date:</span> ${date}`;

      const timeBlock = document.createElement("p");
      timeBlock.innerHTML = `<span class="font-weight-bolder">Time:</span> ${time}`;

      const symptomsBlock = document.createElement("p");
      symptomsBlock.innerHTML = `<span class="font-weight-bolder">Symptoms:</span> ${symptoms}`;

      //Boton para Eliminar una cita
      const btnDelete = document.createElement("button");
      btnDelete.classList.add("btn", "btn-danger", "mr-2");
      btnDelete.innerHTML = "Eliminar";
      btnDelete.onclick = () => deleteAppointment(id);

      //Boton para Editar una cita
      const btnEdit = document.createElement("button");
      btnEdit.classList.add("btn", "btn-info");
      btnEdit.innerHTML = "Editar";
      btnEdit.onclick = () => uploadEdition(appointment);

      //Agregar los parrafos al divAppointment
      divAppointment.appendChild(petBlock);
      divAppointment.appendChild(ownerBlock);
      divAppointment.appendChild(phoneBlock);
      divAppointment.appendChild(dateBlock);
      divAppointment.appendChild(timeBlock);
      divAppointment.appendChild(symptomsBlock);
      divAppointment.appendChild(btnDelete);
      divAppointment.appendChild(btnEdit);

      //Agregar las citas al HTML
      appointmentList.appendChild(divAppointment);
    });
  }

  cleanHTML() {
    while (appointmentList.firstChild) {
      appointmentList.removeChild(appointmentList.firstChild);
    }
  }
}

const ui = new UI();
const manageApointments = new Appointments();

//Eventos
eventListeners();
function eventListeners() {
  petInput.addEventListener("change", dataAppointment);
  ownerInput.addEventListener("change", dataAppointment);
  phoneInput.addEventListener("change", dataAppointment);
  dateInput.addEventListener("change", dataAppointment);
  timeInput.addEventListener("change", dataAppointment);
  symptomsInput.addEventListener("change", dataAppointment);

  form.addEventListener("submit", newAppointment);
}

//Objeto Principal (Informacion de la Cita)
const appointmentObj = {
  pet: "",
  owner: "",
  phone: "",
  date: "",
  time: "",
  symptoms: "",
};

//Funcion para agregar datos al objeto de cita
function dataAppointment(e) {
  appointmentObj[e.target.name] = e.target.value;
}

//Funcion para validar y agregar una nueva cita a la clase de citas
function newAppointment(e) {
  e.preventDefault();

  //Extraer la informacion del objeto de cita
  const { pet, owner, phone, date, time, symptoms } = appointmentObj;

  //Validar
  if (
    pet === "" ||
    owner === "" ||
    phone === "" ||
    date === "" ||
    time === "" ||
    symptoms === ""
  ) {
    ui.showAlert("Todos los campos son obligatorios", "error");
    return;
  }

  if (editing) {
    ui.showAlert("Se modifico correctamente");

    //Pasar el objeto de la cita a edicion
    manageApointments.editAppointment({ ...appointmentObj });

    //Se vuelve el boton submit a su estado original
    form.querySelector('button[type="submit"]').textContent = "Crear Cita";

    //Quitar modo edicion
    editing = false;
  } else {
    //Generar un ID unico
    appointmentObj.id = Date.now();

    //Crear una nueva cita
    manageApointments.addAppointment({ ...appointmentObj });

    //Mensaje de agregado correctamente
    ui.showAlert("Se agrego correctamente");
  }

  //Reiniciar el objeto para la validacion
  resetObject();

  //Una vez llenado el formulario y creada la cita, se reinicia
  form.reset(); //funcion reset() ya viene por defecto para reiniciar

  //Mostrar el HTML con la cita creada
  ui.showAppointments(manageApointments);
}

//Funcion para reiniciar el objeto de citas y que los datos vuelvan a espacios en blanco ''
function resetObject() {
  appointmentObj.pet = "";
  appointmentObj.owner = "";
  appointmentObj.phone = "";
  appointmentObj.date = "";
  appointmentObj.time = "";
  appointmentObj.symptoms = "";
}

//Funcion para eliminar una cita
function deleteAppointment(id) {
  //Elminar la cita
  manageApointments.deleteAppointment(id);

  //Muestre un mensaje
  ui.showAlert("La cita se elimino correctamente");

  //Resfrescar las citas
  ui.showAppointments(manageApointments);
}

//Funcion para Cargar los datos y el modo edicion
function uploadEdition(appointment) {
  const { pet, owner, phone, date, time, symptoms, id } = appointment;

  //Llenar los inputs
  petInput.value = pet;
  ownerInput.value = owner;
  phoneInput.value = phone;
  dateInput.value = date;
  timeInput.value = time;
  symptomsInput.value = symptoms;

  //Llenar nuevamente el objeto
  appointmentObj.pet = pet;
  appointmentObj.owner = owner;
  appointmentObj.phone = phone;
  appointmentObj.date = date;
  appointmentObj.time = time;
  appointmentObj.symptoms = symptoms;
  appointmentObj.id = id;

  //Cambiar el texto del boton
  form.querySelector('button[type="submit"]').textContent = "Guardar Cambios";
  editing = true;
}
