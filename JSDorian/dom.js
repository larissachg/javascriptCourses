/* ATRIBUTOS:
    element.getAttribute('attribute')
    element.setAttribute('attribute', value) */

// const title = document.getElementById('title')
// const name = document.getElementById('name')

// console.log(title);
// console.log(name.getAttribute('id'));
// console.log(name.getAttribute('type'));

// name.setAttribute('type', 'radio')
// console.log(name);

/* CLASES
    element.classList.add('class','class,...)
    element.classList.remove('class','class,...)
    element.classList.toggle('class'[,force])
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass) */

//add & remove

const title = document.getElementById('title')

// title.classList.add('main-title','other-title');
// title.classList.remove('main-title');

// if(title.classList.contains('title')) console.log('Title tiene la clase title')
// else console.log('Title no tiene la clase title');

title.classList.replace('title', 'main-title')

console.log(title);