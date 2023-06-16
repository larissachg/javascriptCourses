// 1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.

console.warn('Aaaaaa');

let edad = prompt('Cual es tu edad?');

console.log({edad});

const esMayor = (edad) => {
    return edad >= 18;
}

// if (edad >= 18) {
//     alert(`Ya puedes conducir con ${edad} anhos`);
// } else {
//     alert('No puedes conducir');
// }

esMayor(edad) ? alert(`Ya puedes conducir con ${edad} anhos`) : alert('No puedes conducir');