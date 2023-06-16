let persona1 = {
    nombre: 'Larissa Chavez',
    edad: 25,
    color: 'rojo',
};

let persona2 = {
    nombre: 'Daniel Cespedes',
    edad: 25,
    color: 'negro',
}

let personas = [persona1, persona2]
console.log(personas);



const nuevaPersona = (nombre, edad, color) => {
    let persona3 = {nombre, edad, color}
    personas.push(persona3);
}
nuevaPersona('Fabrizio', 10, 'azul');

console.log(personas);

const nombresito = "pepe"
const edadsita = 29
const colorsito = 'verde'

const personitaNueva = 
{'nombre': nombresito, edadsita, colorsito}
console.log(personitaNueva);


// Revisar let y const
//crear un objeto dentro de la funcion con los datos recibidos del parametro
//agregar el nuevo objeto creado al arreglo mediante el metodo push
//imprimir nuevo arreglo
