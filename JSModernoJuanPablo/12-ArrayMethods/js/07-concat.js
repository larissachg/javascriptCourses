const meses = ['Enero', 'Febrero'];
const meses2 =['Marzo', 'Abril'];
const meses3 =['Mayo', 'Junio'];

// EL ORDEN QUE SE LOS COLOQUE ES IMPORTANTE
// Concat
const resultado = meses.concat(meses2, meses3, 'Otro mes'); //Solo separado por coma se puede seguir concatenando
console.log(resultado);
// Spread Operator
const resultado2 = [...meses3, ...meses2, 'Otro mes']; 
console.log(resultado2);

//Los puntos se colocan solo si es un arreglo. Por ejemplo para agregar un string se coloca sin los puntos, porque si no se agregaria letra por letra:
const resultado3 = [...meses2, ...'Otro mes'];
console.log(resultado3);