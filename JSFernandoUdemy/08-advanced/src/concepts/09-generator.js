/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorFunctionsComponent = (element) => { 
    const myGenerator = myFirstGeneratorFunction();

    console.log(myGenerator.next()); //Primer valor
    //console.log(myGenerator.next()); //Segundo
    //console.log(myGenerator.next()); //Tercer
    //console.log(myGenerator.next()); //Cuarto
    //console.log(myGenerator.next()); //Return
    //console.log(myGenerator.next()); //Ya NO se puede

    const genId = idGenerator();

    const button = document.createElement('button');
    button.textContent = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.textContent = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);
}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    
    return 'Ya no hay valores'; //Despues del return ya no se puede hacer nada
    yield 'Ya no pueden hacer nada';
}