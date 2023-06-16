//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadena = null;
let listaPalabras = [];

do {
  cadena = prompt("Introduzca el mensaje");

  if (cadena) {
    listaPalabras.push(cadena)
  }

  console.log(cadena);
} while (cadena);


 let resultado = "";
// let i = 0;
// while(i < listaPalabras.length){
//     resultado = resultado + '-' + listaPalabras[i];
//     i++;
// }

listaPalabras.forEach((el, index) => {
    if (index === 0) {
        resultado = el;        
    }else{
        resultado = resultado + '-' + el;        
    }
})

console.log(resultado);



