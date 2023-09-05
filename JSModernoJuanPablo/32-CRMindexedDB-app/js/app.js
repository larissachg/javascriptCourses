(function () { //IIFE
    //Variable que va a guardar el valor:
  let DB;

  document.addEventListener("DOMContentLoaded", () => {
    crearDB();
  });

  //Crea la base de datos de IndexDB (le ponemos nombre y version)
  function crearDB() {
    const crearDB = window.indexedDB.open("crm", 1);

    crearDB.onerror = function () {
      console.log("Hubo un error");
    };

    crearDB.onsuccess = function () {
      DB = crearDB.result;
    };

    crearDB.onupgradeneeded = function () {
      const db = e.target.result;

      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex('name', 'name', {unique: false});
      objectStore.createIndex('email', 'email', {unique: false});
      objectStore.createIndex('phone', 'phone', {unique: false});
      objectStore.createIndex('company', 'company', {unique: false});
      objectStore.createIndex('id', 'id', {unique: true});

      console.log('DB Lista y Creada');
    };

  }
})();
