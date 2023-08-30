//WeakSet -> solamente aceptan objetos

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakset.add(cliente);
console.log(weakset);
console.log(weakset.has('nombre')); //Si existe un objeto
weakset.delete(cliente); //Para eliminar objetos

/* Diferencia entre un SET y un WEAKSET
El set puede almacenar cualquier tipo de valor, el weakset solo objetos
No se puede conocer la extension del weakset -> no tiene .size
Los weakset No son iterables */
