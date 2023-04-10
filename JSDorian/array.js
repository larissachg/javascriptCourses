//ARRAY METHODS

// FROM -> convierte en array
let word = 'Hola mundo';

console.log(Array.from(word));

// Hace lo mismo que SPLIT:
console.log(word.split(''));
console.log(word.split(' ')); //Con espacio


//SORT (ordena alfabeticamnente) No funciona con numeros

const letters = ['b', 'z', 'c', 'a'];
const numbers = [1, 100, 3, 8, 350];

console.log(letters.sort());
console.log(numbers.sort());
//Para que funcione en numeros:
console.log(numbers.sort((a,b)=>a-b));

/*function menorMayor(a, b){
    if (a-b < 0) return -1;
    if (a-b > 0) return 1;
    if (a == b) return 0;
}

function mayorMenor(a, b){
    if (b-a < 0) return -1;
    if (b-a > 0) return 1;
    if (b == a < 0) return 0;
}
*/