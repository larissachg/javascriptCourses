// Maps -> son listas ordenadas en llave y valor que pueden ser cualquier tipo de dato (un arreglo, un numero), Son especialmente diseñados para agregar, quitar elementos o recorrerlos

const cliente = new Map();

cliente.set('nombre', 'Lara'); //Para agregar en vez de .add se usa .set
cliente.set('tipo', 'Premium');
cliente.set('color', 'rojo');
cliente.set('saldo', 3000);

cliente.delete('saldo'); //Para eliminar un valor
console.log(cliente);
console.log(cliente.size); //Para saber su longitud
console.log(cliente.has('nombre2')); //Para comprobar los valores
console.log(cliente.get('nombre')); //Para extraer un valor
//cliente.clear(); //Para eliminar todos los elementos


const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]); //2 arreglos dentro de un arreglo (agregarle valores en el constructor)
paciente.set('dr', 'Dr. Asignado'); //Para asignar nuevo valor 
paciente.set('nombre', 'Larissa') //O para reescribir uno existente
console.log(paciente);

//Los MAPS tambien son Iterables
paciente.forEach( (datos, index) => {
    console.log(datos); //Muestra los valores
    console.log(index); //Muestra las llaves
})