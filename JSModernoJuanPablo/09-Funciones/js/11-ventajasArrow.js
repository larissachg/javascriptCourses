const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('JavaScript');

//Cuando es solo un parametro puede ir sin parentesis, a partir de 2 ya van dentro de parentesis separados por coma
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('JavaScript','Node'));