
const newrelease = document.querySelector('#new');
const btnNewrelease = document.querySelector('#btnNewRelease');
const arrow = document.querySelector('.navigation__arrow');

btnNewrelease.addEventListener('click', showNewRel);

function showNewRel(e){
    e.preventDefault();
    newrelease.classList.toggle('hideRelease');
    arrow.classList.toggle('arrowActive');
    btnNewrelease.classList.toggle('navigation__link--activo');  
    btnNewrelease.classList.toggle('navigation__link');  
}