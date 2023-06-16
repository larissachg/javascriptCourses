
const carros = ['BMW', 'Mazda', 'Audi', 'Honda'];

let i = 0;


// while (i < carros.length) {
//     console.log(carros[i]);
//     i++; //Es lo mismo que i = i + 1
// }

console.warn('WHILE');
//Se considera falso y hace que el ciclo no se ejecute:
//undefined
//null
//false

while (carros[i]) {
    if (i === 1){
        //break
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

console.warn('DO WHILE');
let j = 0;

do {
    console.log(carros[j]);
    j++;
} while (carros [j]);