const container = document.querySelector('#container');
const parrafo = document.querySelector('.faq__par');

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('faq__btn')) {
        e.target.parentElement.parentElement.classList.toggle('openAcordeon');
        e.target.classList.toggle('rotateBtn');
    }
})


