//CREAR OBJETOS CON CLASES
/* CON UNA CLASE TENEMOS EL MOLDE PARA CREAR LAS PERSONAS QUE QUERRAMOS:
    class NOMBRE{ 
    constructor(PARAMETROS){ 
        this.PARAMETROS}

        NOMBRE DE FUNCION() No se puede poner funcion de flecha o con function {
            return `Hola, me llamo ${this.nombre}` SIEMPRE CON THIS.
        } 
} 
Se crean todas las personas que querramos: 
    const NUEVO NOMBRE = new NOMBRE DE LA CLASE(se colocan directos los DATOS DE LOS PARAMETROS segun el molde creado en la clase) */

// class Persona{
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;

//         this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} anhos.`
//     }

//     saludar(){
//         return `Hola, me llamo ${this.nombre} y tengo ${this.edad}.`
//     }
// }

// const juan = new Persona('Juan', 'Garcia', 25);
// const martha = new Persona('Martha', 'Garcia', 35);

// console.log(juan);

//PRACTICA
/* Crea una clase Libro que tendra titulo, autor, anho y genero.
Crea un metodo que devuelva toda la informacion del libro
Pide 3 libros y guardalos en un array
Los libros se introduciran al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzan vacios
Validar que el anho sea un numero y tenga 4 digitos
Validar que el genero sea: aventuras, terror o fantasia
Crea una funcion que muestre todos los libros
Crea una funcion que muestre los autores ordenados alfabeticamente
Crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando un metodo */

class Libro {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }
  informacion() {
    return `El libro ${this.title} del autor ${this.author} anho ${this.year} pertenece al genero ${this.gender}`;
  }
}

let librery = [];

while (librery.length < 3) {
    let title = prompt(`Introduce el titulo de un libro`);
    let author = prompt(`Introduce el autor del libro`);
    let year = prompt(`Introduce el anho que fue publicado el libro`);
    let gender = prompt(`Introduce el genero al que pertenece (opciones: aventura, terror, fantasia`);

    if (title != "" &&
        author != "" &&
        year.length == 4 &&
        ["aventura", "terror", "fantasia"].includes(gender)) {
            librery.push(new Libro(title, author, year, gender));
          } else {
            alert("Verifica la informacion");
          }

    
        
//   let libroTitulo = prompt(`Introduce el titulo de un libro`);
//   while (libroTitulo === "") {
//     libroTitulo = prompt(`Introduce el autor del libro`);
//   }

//   let libroAutor = prompt(`Introduce el autor del libro`);
//   while (libroAutor === "") {
//     libroAutor = prompt(`Introduce el autor del libro`);
//   }

//   let libroAnho = prompt(`Introduce el anho que fue publicado el libro`);
//   while (libroAnho.length !== 4) {
//     libroAnho = prompt(
//       `Introduce el anho que fue publicado el libro (4 digitos)`
//     );
//   }

//   let libroGenero = prompt(
//     `Introduce el genero al que pertenece (opciones: aventura, terror, fantasia)`
//   );
//   while (["aventura", "terror", "fantasia"].includes(libroGenero) === false) {
//     libroGenero = prompt(
//       `Introduce el genero al que pertenece (opciones: aventura, terror, fantasia)`
//     );
//   }

// const infoTotal = new Libro(title, author, year, gender);
//     librery.push(infoTotal);
}

const showLibrery = () => {
    console.log(librery);
}

const authorList = () => {
    // authorArray = [];

    // for(const Libro of librery){
    //     authorArray.push(Libro.author);
    // }

    // console.log(authorArray.sort());
    const result = librery.map((libro)=>libro.author);
    console.log(result.sort());
}

const showGender = () => {
    const selectGender = prompt(`Selecciona un genero de libros a buscar`);

    for (const Libro of librery) {
        if(Libro.gender == selectGender){
            console.log(Libro.informacion());
        }
    }
}

showLibrery();
authorList();
// showGender();