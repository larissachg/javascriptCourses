//WEAKMAPS sirven para mantener una serie de datos como privados. Esta conformando por llave y valor (igual que maps). Solo aceptan objetos

const producto = {
    idProducto: 10 //Esta parte queda oculta, no se puede acceder con .get
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');
console.log(weakmap);
console.log(weakmap.has(producto)); //Para comprobar que existe un valor
console.log(weakmap.get(producto)); //Para extraer un valor
weakmap.delete(producto); //Para eliminar un valor

//No se pueden iterar (igual que weakset)
//No se puede conocer su extencion (.size)