const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set("nombre", "Lara");
datos.set("profesion", "Desarrollador");

//DEFAULT ITERATOR
for (let ciudad of ciudades) {
  console.log(ciudad);
}

for (let orden of ordenes) {
  console.log(orden);
}

for (let dato of datos) {
  console.log(dato);
}

//KEYS ITERATOR
for (let keys of ciudades.keys()) {
  //Devuelve solo la LLAVE
  console.log(keys);
}

for (let keys of ordenes.keys()) {
  console.log(keys);
}

for (let keys of datos.keys()) {
  console.log(keys);
}

//VALUES ITERATOR
for (let value of ciudades.values()) {
  //Devuelve solo el VALOR
  console.log(value);
}

for (let value of ordenes.values()) {
  console.log(value);
}

for (let value of datos.values()) {
  console.log(value);
}

//ENTRIES ITERATOR
for (let entry of ciudades.entries()) {
  //Devuelve LLAVE y VALOR (Agrega una llave si no existe)
  console.log(entry);
}

for (let entry of ordenes.entries()) {
  console.log(entry);
}

for (let entry of datos.entries()) {
  console.log(entry);
}
