const producto = 'Monitor 20 pulgas';

console.warn('Repeat');
//.repeat -> permite repetir una cadena de texto

const texto = 'en Promocion'.repeat(2);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

const texto2 = ' en Promocion'.repeat(3.4); //JavaScript redondea el numero
console.log(texto2);
console.log(`${producto} ${texto2} !!!`);

console.warn('Split');
//.split -> permite dividir un string

const actividad = "Estoy aprendiendo JavaScript";
console.log(actividad.split(" ")); //Divide cada palabra

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", ")); //Divide lo que esta separado por comas (,)

const tweet = "Aprendiendo JavaScript #JSModerno";
console.log(tweet.split('#')); //Divide el hashtag (#)
