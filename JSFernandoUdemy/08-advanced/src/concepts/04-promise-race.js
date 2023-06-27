/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseRaceComponent = (element) => { 

    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([ //Va a traer la promesa que primero se cumpla (la que tarde menos)
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
    ]).then(renderValue);

}

//Es una funcion que regresa una promesa
const slowPromise = () => new Promise(resolve => {
    setTimeout(()=> { //Es una funcion propia de js que sirve para ejecutar en un tiempo establecido
        resolve('Slow Promise')
    }, 2000); //equivale a 2s
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(()=> { //Es una funcion propia de js que sirve para ejecutar en un tiempo establecido
        resolve('Medium Promise')
    }, 1500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(()=> { //Es una funcion propia de js que sirve para ejecutar en un tiempo establecido
        resolve('Fast Promise')
    }, 1000);
})