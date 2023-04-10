//RECORRER EL DOM (DOM TRAVERSING)
/* Padre/Parent (nodo del que desciende):

    parentNode -> Devuelve el nodo padre (que puede no ser un elemento)
    parentElement -> Devuelve el nodo elemento padre

Nota: Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolvera siempre null. */

// const parent = document.getElementById('parent');

// console.log(parent.parentNode);
// console.log(parent.parentElement); //Arrojan el mismo resultado
// console.log(parent.parentElement.parentElement);//Para ir subiendo de nivel (punto mas alto: padre-abuelo)

/* HIJOS/CHILD (nodo que desciende de un padre):
    childNodes -> Devuelve todos los nodos hijos
    children -> Devuelve todos los nodos elementos hijos
    firstChild -> Devuelve el primer nodo hijo
    firtsElementChild -> Devuelve el primer nodo elemento hijo
    lastChild -> Devuelve el ultimo nodo hijo
    lastElementChild -> Devuelve el ultimo nodo elemento hijo
    hasChildNodes() -> Devuelve true si el nodo tiene hijos y false si no tiene */

const parent = document.getElementById('parent');

//console.log(parent.childNodes); //Toma en cuenta los espacios en blanco o los saltos de linea
//console.log(parent.children); //No toma en cuenta los espacios en blanco ni los saltos de linea
//console.log(parent.firstChild);//Toma el salto de linea como el primer hijo
//console.log(parent.firstElementChild); //Toma el primer elemento como hijo (primer li)
// console.log(parent.lastChild);//Toma el salto de linea como el primer hijo
// console.log(parent.lastElementChild); //Toma el primer elemento como hijo (primer li)
// console.log(parent.hasChildNodes());
// console.log(parent.firstChild.hasChildNodes());

/* HERMANOS - SIBLINGS (nodo al mismo nivel):
    nextSibling -> Devuelve el siguiente nodo hermano
    nextElementSibling -> Devuelve el siguiente elemento hermano
    previousSibling -> Devuelve el anterior nodo hermano
    previousElementSibling -> Devuelve el anterior elemento hermano */

