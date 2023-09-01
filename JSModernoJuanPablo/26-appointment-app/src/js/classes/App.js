import {dataAppointment, newAppointment} from '../functions.js';

import {
  petInput,
  ownerInput,
  phoneInput,
  dateInput,
  timeInput,
  symptomsInput,
  form,
} from "../selectors.js";

export class App {
  constructor() {
    this.initApp();
  }

  initApp() {
    petInput.addEventListener("change", dataAppointment);
    ownerInput.addEventListener("change", dataAppointment);
    phoneInput.addEventListener("change", dataAppointment);
    dateInput.addEventListener("change", dataAppointment);
    timeInput.addEventListener("change", dataAppointment);
    symptomsInput.addEventListener("change", dataAppointment);

    //Formulario para nuevas citas
    form.addEventListener("submit", newAppointment);
  }
}
