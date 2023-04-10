console.warn('Break');
//Crear un for loop que al detectar al elemente 5 detenga su ejecucion
for(let i = 0; i <= 10; i++) {
    if(i===5){
        console.log('Cinco');
        break
    }
    console.log(`Numero: ${i}`);
}

console.warn('Continue');
//Crear un for loop que detectar el elemente 3 y continue su ejecucion
for(let i = 0; i <= 5; i++) {
    if(i===3){
        console.log('Tres');
        continue
    }
    console.log(`Numero: ${i}`);
}


console.warn('Carrito');
//CARRITO: Decirle al usuario que uno de los elementos que agrego al carrito tiene descuento
const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 300, descuento: true},
    {nombre: 'Audifono', precio: 100},
]

for(let i=0; i<carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue
    }
    console.log(carrito[i].nombre);
}