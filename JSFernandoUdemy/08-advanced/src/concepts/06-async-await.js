import { heroes } from "../data/heroes"


//El AWAIT debe estar siempre dentro de una funcion ASYNC

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async(element) => { 

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    //En el caso de un error (es decir si no lo encuentra) en un Await se utiliza TRY CATCH:
    try {
        const hero1 = await findHero(id1); //El await es espera hasta que se cumpla esta promesa para recien poder ejecutarse la proxima
        const hero2 = await findHero(id2);
    
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
    } catch (error) {
        element.innerHTML = error;
    }

}

const findHero = async(id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero){
        throw `Hero not found`;
    }
    return hero;
}