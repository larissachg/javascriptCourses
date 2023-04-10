// 4. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

//"cancelar" se refleja en consola como null

let cadena = null;
let listaNumero = [];

do {
  cadena = prompt("Inserte numero");
  if (isNaN(cadena)) {
    alert("Digite un numero");
  } else {
    // listaNumero.push(cadena || 0);
    // cadena && listaNumero.push(cadena);
    if (cadena) {
      listaNumero.push(Number(cadena));
    }
  }

  console.log(cadena);
} while (cadena);

console.log(listaNumero);

//SUMA
let suma = 0;

listaNumero.forEach((numerito) => {
    suma = suma + numerito;
})

console.log('Suma:' + suma);