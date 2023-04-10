// A veces no se tiene los argumentos (valor) que solicita el parametro, para ello se agrega un valor por default es decir en caso de que este vacio:
function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Larissa', 'Chavez'); // Le asignamos los argumentos
saludar('Daniel'); // apellido por default
saludar(); //Cuando no se obtiene los valores (vacio) aparecen los valores por default

