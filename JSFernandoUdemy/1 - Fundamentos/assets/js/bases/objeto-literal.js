let personaje = {
    nombre: 'Larissa Chavez',
    codeName: 'Lara',
    vivo: true,
    edad: 25,
    coors: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["Vest I", "Vest V", "Dress"],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Santa Cruz, Bolivia'
    },
    'ultima-comida': 'Milanesa',
    // No se puede usar solo - porque Js lo traduce como si significara "menos" si se necesita usar guion para separar palabras se coloca dentro de comilla para que signifique palabras.
};

console.log(personaje);
console.log ('Nombre', personaje.nombre);
console.log('Nombre', personaje ['nombre']);
console.log('Edad', personaje.edad);
console.log('Lat', personaje.coors.lat);
console.log('Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes [personaje.trajes.length -1]);
const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima Comida', personaje["ultima-comida"]);

// DELETE -> para eliminar una propiedad
delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze (personaje);
personaje.dinero = 10000000;
console.log (personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades});