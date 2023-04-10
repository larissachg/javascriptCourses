const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const Qr = true;

// Else if da otra opcion si la condicion anterior no se cumple:
if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) { //Si no alcanza con el dinero tenemos otra opcion
    console.log('Si podemos pagar con la tarjeta');
} else if (Qr) { //Si no tenemos la tarjeta, tenemos otra opcion
    console.log('Si podemos pagar por Qr');
} else{ // Si ninguna condicion se cumple
    console.log('Fondos insuficientes');
};


const dinero2 = 300;
const totalAPagar2 = 500;
const tarjeta2 = false;
const Qr2 = false;

if (dinero2 >= totalAPagar2) {
    console.log('Si podemos pagar');
} else if (tarjeta2) { 
    console.log('Si podemos pagar con la tarjeta');
} else if (Qr2) { 
    console.log('Si podemos pagar por Qr');
} else{ 
    console.log('Fondos insuficientes');
};