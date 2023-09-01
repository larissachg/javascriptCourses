import { deleteAppointment, uploadEdition } from "../functions.js";
import { appointmentList } from "../selectors.js";


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

export default UI;