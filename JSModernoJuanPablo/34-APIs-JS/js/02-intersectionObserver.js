//Intersection Observer -> permite identificar cuando un elemento esta visible. Es una API nativa de JS 

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( (entries) => {

        if(entries[0].isIntersecting){
            console.log('Ya esta visible');
        }
    });

    observer.observe(document.querySelector('.premium'));
})