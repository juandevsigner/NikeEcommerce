//BURGER MENU
const burguer = document.querySelector('.navigation__burger');
const menu = document.querySelector('.mobile');

burguer.addEventListener('click', showMenu);

function showMenu(e) {
    e.preventDefault();
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active'); 
    }
}

