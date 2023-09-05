
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

//Un nuevo pais se agrega despues de 2seg.
function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais);
        callback();
        console.log('----------------------');
    }, 2000);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        })
    }, 1000);
}

mostrarPaises();
nuevoPais('Alemania', mostrarPaises);