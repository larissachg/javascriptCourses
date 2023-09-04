import Appointments from "./classes/Appointments.js";
import UI from "./classes/UI.js";

import {
  petInput,
  ownerInput,
  phoneInput,
  dateInput,
  timeInput,
  symptomsInput,
  form,
} from "./selectors.js";

const manageApointments = new Appointments();
const ui = new UI(manageApointments);

let editing = false;

export let DB;

export function database() {
  window.onload = () => {
    crearDB();
  };
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
export function dataAppointment(e) {
  appointmentObj[e.target.name] = e.target.value;
}

//Funcion para validar y agregar una nueva cita a la clase de citas
export function newAppointment(e) {
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
    //Pasar el objeto de la cita a edicion
    manageApointments.editAppointment({ ...appointmentObj });

    //Edita en indexDB
    const transaction = DB.transaction(["citas"], "readwrite");
    const objectStore = transaction.objectStore("citas");
    objectStore.put(appointmentObj);

    transaction.oncomplete = () => {
      ui.showAlert("Se modifico correctamente");

      //Se vuelve el boton submit a su estado original
      form.querySelector('button[type="submit"]').textContent = "Crear Cita";

      //Quitar modo edicion
      editing = false;
    };

    transaction.onerror = () => {};
  } else {
    //Nuevo Registro

    //Generar un ID unico
    appointmentObj.id = Date.now();

    //Crear una nueva cita
    manageApointments.addAppointment({ ...appointmentObj });

    //Insertar registro en indexedDB
    const transaction = DB.transaction(["citas"], "readwrite");

    //Habilitar el objectStore
    const objectStore = transaction.objectStore("citas");

    //Insertar en la base de datos
    objectStore.add(appointmentObj);

    transaction.oncomplete = function () {
      //Mensaje de agregado correctamente
      ui.showAlert("Se agrego correctamente");
    };
  }

  //Reiniciar el objeto para la validacion
  resetObject();

  //Una vez llenado el formulario y creada la cita, se reinicia
  form.reset(); //funcion reset() ya viene por defecto para reiniciar

  //Mostrar el HTML con la cita creada
  ui.showAppointments();
}

//Funcion para reiniciar el objeto de citas y que los datos vuelvan a espacios en blanco ''
export function resetObject() {
  appointmentObj.pet = "";
  appointmentObj.owner = "";
  appointmentObj.phone = "";
  appointmentObj.date = "";
  appointmentObj.time = "";
  appointmentObj.symptoms = "";
}

//Funcion para eliminar una cita
export function deleteAppointment(id) {
  const transaction = DB.transaction(["citas"], "readwrite");
  const objectStore = transaction.objectStore("citas");
  objectStore.delete(id);

  transaction.oncomplete = () => {
    //Resfrescar las citas
    ui.showAppointments();
  };

  //Elminar la cita
  manageApointments.deleteAppointment(id);

  //Muestre un mensaje
  ui.showAlert("La cita se elimino correctamente");
}

//Funcion para Cargar los datos y el modo edicion
export function uploadEdition(appointment) {
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

function crearDB() {
  //Crear la base de datos en version 1.0
  const crearDB = window.indexedDB.open("citas", 1);

  //Si hay un error
  crearDB.onerror = function () {
    console.log("Hubo un error");
  };

  //Si todo sale bien
  crearDB.onsuccess = function () {
    console.log("Base de datos creada");

    DB = crearDB.result;

    //Mostrar citas al cargar pero indexedBD ya esta listo
    ui.showAppointments();
  };

  //Definamos las columnas
  crearDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    const objectStore = db.createObjectStore("citas", {
      keyPath: "id",
      autoIncrement: true,
    });

    //Definimos todas las columnas
    objectStore.createIndex("pet", "pet", { unique: false });
    objectStore.createIndex("owner", "owner", { unique: false });
    objectStore.createIndex("phone", "phone", { unique: false });
    objectStore.createIndex("date", "date", { unique: false });
    objectStore.createIndex("time", "time", { unique: false });
    objectStore.createIndex("symptoms", "symptoms", { unique: false });
    objectStore.createIndex("id", "id", { unique: true });

    console.log("DB creada y lista");
  };
}
