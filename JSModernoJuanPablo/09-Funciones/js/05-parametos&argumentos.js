function sumar(a, b) { // a y b son parametros
    console.log( a + b );
}

sumar(2, 3); // 2 y 3 son argumentos
sumar( 200, 184); // se reemplazan los argumentos

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Larissa', 'Chavez'); // Le asignamos los argumentos (valores) que van a tener nombre, apellido
saludar(); // sin nada no funciona (undefined)