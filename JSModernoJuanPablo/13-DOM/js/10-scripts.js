// .createElement('Aqui se coloca la etiqueta que se vaya agregar: a (si es enlace), p (parrafo), img (imagen), div, h1, etc)

//CREAR UN ENLACE
const enlace = document.createElement('a');
enlace.textContent = 'Nuevo Enlace'; //Agregarle el texto
enlace.href = '/nuevo-enlace'; //Agregarle href

console.log(enlace);

//HAY QUE DEFINIR DONDE SE QUIERE MOSTRAR LO RECIEN AGREGADO:
/* // En este caso va a ir en la Navegacion AL FINAL
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //Se le agrega un hijo a la navegacion al final de los elementos que ya existen */

//Para agregarlo ENTRE otros elementos (AL MEDIO):
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]); //Requiere 2 argumentos(el elemento que queremos agregar, y en que posicion se quiere insertar)

//CREAR UNA SECCION (Card)
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Regueton';
parrafo2.classList.add('titulo');
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$100 por persona';
parrafo3.classList.add('price');
console.log(parrafo3);

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info);

// FALTA PORQUE NO LE ENTENDI