/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwait2Component = async(element) => { 
    // console.time('Start');

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    // element.innerHTML = `
    // value1: ${value1} <br/> 
    // value2: ${value2} <br/> 
    // value3: ${value3} <br/>`;

    // console.timeEnd('Start'); //Tarda + de 4seg en realizar todas las promesas ya que con el await va una por una

    console.time('Start');
    const [value1,value2,value3] = await Promise.all([ //All para no llamar de a una promesa, sino llamar todas al mismo tiempo
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
        value1: ${value1} <br/> 
        value2: ${value2} <br/> 
        value3: ${value3} <br/>`;

    console.timeEnd('Start'); //Tarda menos que el anterios (2seg aprox)
}

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