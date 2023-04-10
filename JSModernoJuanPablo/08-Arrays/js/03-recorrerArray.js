const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

console.warn('length');
// Cuanto mide el arreglo
console.log(meses.length);

// Recorrer el arreglo con un iterador
console.warn('for');
/* Es una funcion de 3 partes: donde va a iniciar (i = #); cuantas veces quieres que se ejecute el codigo (i = <> #); que vaya recorriendo uno por uno (i++ o de a otras cantidades)  */
for(let i=0; i < meses.length; i++ ){
    console.log(meses[i]);
}