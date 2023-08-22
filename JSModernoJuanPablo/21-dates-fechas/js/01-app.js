const diaHoy = new Date(); //Lo presenta como un objeto

let valor;
valor = diaHoy;

console.log(valor);
console.log(typeof valor);

let valor2;
valor2 = diaHoy.getFullYear(); //Para saber el año actual
valor2 = diaHoy.getMonth(); //Para saber el mes actual
valor2 = diaHoy.getHours(); //Para saber la hora actual
valor2 = diaHoy.getMinutes(); //Para saber el minuto actual
valor2 = diaHoy.getTime(); //Para saber los milisegundos que han transcurrido hasta la fecha actual

console.log(valor2);

let valor3;

valor3 = diaHoy.setFullYear(2010); //Para asignar, se modifica
console.log(diaHoy);