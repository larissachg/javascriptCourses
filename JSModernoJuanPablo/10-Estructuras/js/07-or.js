
const efectivo = 300;
const tarjetaCredito = 400;
const disponible = efectivo + tarjetaCredito;
const totalPagar = 600;

// Si tenemos efectivo > a lo que hay que pagar O lo que hay en la tarjeta de credito es mayor a lo que vamos a pagar O la suma de ambos es mayor a lo que tenemos que pagar -> 2 NO SE CUMPLEN PERO 1 SI SE CUMPLE (disponible) entonces 'Si podemos pagar' caso contrario Else= 'Fondos Insuficientes'
if ( efectivo > totalPagar || tarjetaCredito > totalPagar || disponible > totalPagar) {
    console.log('Si podemos pagar');
} else {
    console.log('Fondos Insuficientes')
};