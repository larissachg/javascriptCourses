// Do While al menos se ejecuta una vez y despues verifica la condicion

let i = 1; // Inicializacion

do {
    console.log(`Numero ${i}`);

    i++; //Incremento
} while(i < 10); // La condicion esta aqui abajo


//Ejemplo FIZZBUZZ con DO WHILE
/*
let i = 1; 

do {
    if (i % 15 === 0) {
        console.log(`${i} FIZZBUZZ!!`);
    } else if(i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    }

    i++; 
} while(i < 50);
*/