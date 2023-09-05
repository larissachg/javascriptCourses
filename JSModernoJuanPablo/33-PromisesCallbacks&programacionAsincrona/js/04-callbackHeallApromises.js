const paises = [];

const nuevoPais = (pais) =>
  new Promise((resolve) => {
    setTimeout(() => {
      paises.push(pais);
      resolve(`El resultado del Resolve: Agregado ${pais}`);
    }, 2000);
  });

nuevoPais("Alemania")
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Francia");
  })
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Inglaterra");
  })
  .then((resultado) => {
    console.log(resultado);
  });
