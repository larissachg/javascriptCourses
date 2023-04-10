//SWITCH case
//BREAK y DEFAULT es obligatorio

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default: 
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
        break;
}

//Se agregan mas condiciones (case)
const metodoPago2 = 'qr';

switch (metodoPago2) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago2}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago2}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago2}`);
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago');
        break;
}