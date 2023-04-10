

let a = 5;

// if ( se manda un valor buleano, que de como resultado true or false ) {}
// Hay excepciones como undefined, null, una asignacion
if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else{
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay(); //Significa -> 0=Domingo, 1=Lunes, 2=Martes.....

console.log({dia});
if (dia === 0 ) {
    console.log('Domingo');
} else {
    console.log('No es domingo');
}


if (dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');
} else if ( dia === 2 ) {
    console.log('Martes');
// si NO es ninguno de esas opciones:
} else {
    console.log('No es lunes, martes o domingo...');
}

 // Sin usar If Else, o Switch, unicamente objetos
 dia = 3;

 const semana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
 };
 
 console.log(semana[dia]);

// Sin usar If Else, o Switch, unicamente arreglo
const diaSemana = [ 'Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',];
console.log(semana[4]);