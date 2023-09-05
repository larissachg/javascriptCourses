const paises = [];

function nuevoPais(pais, callback) {
  paises.push(pais);
  console.log(`Agregado: ${pais}`);
  callback();
}

function mostrarPaises() {
  console.log(paises);
}

function iniciarCallbackHell() {
  setTimeout(() => {
    nuevoPais("Alemania", mostrarPaises); //el callback es mostrarPaises

    setTimeout(() => {
      nuevoPais("Francia", mostrarPaises);

      setTimeout(() => {
        nuevoPais("Inglaterra", mostrarPaises);
      }, 2000); //Despues de otros 2seg se agrega Inglaterra al arreglo de paises en el que ya esta alemania y francia
    }, 2000); //Despues de otros 2seg se agrega francia al arreglo de paises en el que ya esta alemania
  }, 2000); //Despues de 2seg se agrega Alemania al arreglo de paises
}

iniciarCallbackHell();
