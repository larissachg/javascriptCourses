//IndexedDB -> es una API en JS para almacenar grandes cantidades de datos estructurados

let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(() => {
    crearCliente();
  }, 3000);
});

function crmDB() {
  //Crear base de datos version 1.0
  let crmDB = window.indexedDB.open("crm", 1);

  //Si hay error
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear la BD");
  };

  //Si se creo bien
  crmDB.onsuccess = function () {
    console.log("Base de datos creada!");

    DB = crmDB.result;
  };

  //Configuracion de la base de datos
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    //Definir las columnas
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("phone", "phone", { unique: false });

    console.log("Columnas Creadas");
  };
}

function crearCliente() {
  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Transaccion completada");
  };

  transaction.onerror = function () {
    console.log("Hubo un error en la transaccion");
  };

  const objectStore = transaction.objectStore("crm");

  const nuevoCliente = {
    phone: 12345678,
    name: "Lara",
    email: "correo@correo.com",
  };

  const peticion = objectStore.add(nuevoCliente); //Para actualizar .put y para eliminar .delete
  console.log(peticion);
}
