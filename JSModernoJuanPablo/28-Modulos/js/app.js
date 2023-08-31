//Import permite traer una variable
import alias, {
  nombreCliente,
  ahorro,
  mostrarInfomacion,
  tieneSaldo,
  Cliente,
} from "./cliente.js";
import { Empresa } from "./empresa.js";

alias(); //Export Default, no debe estar dentro de las llaves en la importacion. Su nombre actua con un ALIAS, por ejemplo se lo puede importar con otro nombre e igual funciona (javascript sobre entiende que estas llamando al export default de la funcion que se llama nuevaFuncion() sin embargo es mejor llamarlo por su nombre para evitar confunsiones )

console.log(nombreCliente);
console.log(ahorro);

//Importando Funciones
console.log(mostrarInfomacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

//Importando Clases
const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInfomacion());

//Heredando Clases Importada
const empresa = new Empresa("Codigo con Lara", 200, "Aprendiendo JS");
console.log(empresa);
console.log(empresa.mostrarInfomacion());
