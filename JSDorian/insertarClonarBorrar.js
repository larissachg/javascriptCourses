/* INSERTAR ELEMENTOS
    Soporte Total:
    parent.insertAdjacentElement(position, element) // ES EL QUE MAS SE USA
    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)

    POSITIONS:
    beforebegin -> Antes de que empiece (hermano anterior)
    afterbegin -> Despues de que empiece (primer hijo)
    beforeend -> Antes de que acabe (ultimo hijo)
    afterend -> Despues de que acabe (hermano siguiente)    

    POSITIONS - JQUERY LIKE:
	parent.before() -> Antes de que empiece (hermano anterior
	parent.prepend() -> despues de que empiece (primer hijo)
	parent.append() -> antes de que acabe (ultimo hijo)
	parent.after() -> despues de que acabe (hermano siguiente) */

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element";

// list.insertAdjacentElement('beforebegin', newElement);
// list.before(newElement);
// list.insertAdjacentElement('afterbegin', newElement);
// list.prepend(newElement);
// list.insertAdjacentElement('beforeend', newElement);
// list.append(newElement);
// list.insertAdjacentElement('afterend', newElement);
// list.after(newElement);

/* REEMPLAZAR (partiendo desde el padre):
    parent.replaceChild(newChild, oldChild) -> Reemplaza un hijo por otro 
 
    REEMPLAZAR JQUERY Like (parte desde el hijo):
	child.replaceWith(newChild)*/

// list.replaceChild(newElement, list.children[1]);
//list.children[1].replaceWith(newElement); //Mismo resultado

/* CLONAR Y ELIMINAR ELEMENTOS:
    element.cloneNode(true|false) -> Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, y si le pasamos false clona solo el elemento sin hijos.
    element.remove() -> Elimina el nodo del DOM
    element.removeChild(child) -> Elimina el nodo hijo del DOM */

// list.after(list.cloneNode(true));