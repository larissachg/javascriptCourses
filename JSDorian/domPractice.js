const body = document.querySelector('body');
console.log(body);

body.style.backgroundColor = 'lightgray';
body.style.display = 'flex';


const container = document.createElement('div');
body.insertAdjacentElement('afterbegin',container);
container.style.margin = '50px auto';
container.style.width = '70%';
container.style.textAlign = 'center';

const title = document.createElement('h1');
title.textContent = 'Hola, bienvenida Lara';
container.appendChild(title);

const date = document.createElement('small');
date.textContent = '07 de marzo de 2023';
title.insertAdjacentElement('afterend', date);

const paragraph = document.createElement('p');
paragraph.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, repellendus ipsum. Repellat, ratione harum in aliquam at assumenda consequuntur recusandae omnis qui iusto quo, nesciunt ex ipsum error vero aspernatur?';
container.appendChild(paragraph);

const image = document.createElement('img');
image.src = 'https://picsum.photos/id/237/200/300';
container.appendChild(image);

const final = document.createElement('h2');
final.textContent = 'Hola Daniel';
container.appendChild(final);