const skate = document.querySelector('#skate');
const urban = document.querySelector('#urban');
const basket = document.querySelector('#basket');
const filter450 = document.querySelector('#filter450');
const filter450m = document.querySelector('#filter450m');
const clearFilter = document.querySelector('.filter__icon');


events();

function events(){
    skate.addEventListener('click', filterSkProducts);
    urban.addEventListener('click', filterUbProducts);
    basket.addEventListener('click', filterBkProducts);
    filter450m.addEventListener('click', filterP4);
    filter450.addEventListener('click', filterP4D);
    clearFilter.addEventListener('click', clearFilters);
}

//function products
function filterSkProducts(e){
    e.preventDefault();

    skate.classList.add('link--activo');
    urban.classList.remove('link--activo');
    basket.classList.remove('link--activo');
    filter450m.classList.remove('link--activo');
    filter450.classList.remove('link--activo');

    const skateP = document.querySelectorAll('.skate');
    skateP.forEach(index =>{
        index.classList.remove('hiddenProducts')
    });

    const urbanP = document.querySelectorAll('.urban');
    urbanP.forEach(index =>{
        index.classList.add('hiddenProducts')
    });

    const basketP = document.querySelectorAll('.basket');
    basketP.forEach(index =>{
        index.classList.add('hiddenProducts')
    });
}

function filterUbProducts(e){
    e.preventDefault();
    
    skate.classList.remove('link--activo');
    urban.classList.add('link--activo');
    basket.classList.remove('link--activo');
    filter450m.classList.remove('link--activo');
    filter450.classList.remove('link--activo');

    const urbanP = document.querySelectorAll('.urban');
    urbanP.forEach(index =>{
        index.classList.remove('hiddenProducts')
    });

    const skateP = document.querySelectorAll('.skate');
    skateP.forEach(index =>{
        index.classList.add('hiddenProducts')
    });

    const basketP = document.querySelectorAll('.basket');
    basketP.forEach(index =>{
        index.classList.add('hiddenProducts')
    });
}

function filterBkProducts(e){
    e.preventDefault();
   
    skate.classList.remove('link--activo');
    urban.classList.remove('link--activo');
    basket.classList.add('link--activo');
    filter450m.classList.remove('link--activo');
    filter450.classList.remove('link--activo');
    
    const basketP = document.querySelectorAll('.basket');
    basketP.forEach(index =>{
        index.classList.remove('hiddenProducts')
    });

    const skateP = document.querySelectorAll('.skate');
    skateP.forEach(index =>{
        index.classList.add('hiddenProducts')
    });

    const urbanP = document.querySelectorAll('.urban');
    urbanP.forEach(index =>{
        index.classList.add('hiddenProducts')
    });
   
}

//function price

function filterP4(e){
    e.preventDefault();
    filter450m.classList.add('link--activo');
    filter450.classList.remove('link--activo');
    skate.classList.remove('link--activo');
    urban.classList.remove('link--activo');
    basket.classList.remove('link--activo');

    const filterpD = document.querySelectorAll('.priceD');
    filterpD.forEach(index =>{
        index.classList.add('hiddenProducts')
    });

    const filterpU = document.querySelectorAll('.priceU');
    filterpU.forEach(index =>{
        index.classList.remove('hiddenProducts')
    });
}

function filterP4D(e){
    e.preventDefault();
    filter450.classList.add('link--activo');
    filter450m.classList.remove('link--activo');
    skate.classList.remove('link--activo');
    urban.classList.remove('link--activo');
    basket.classList.remove('link--activo');


    const filterpU = document.querySelectorAll('.priceU');
    filterpU.forEach(index =>{
        index.classList.add('hiddenProducts')
    });

    const filterpD = document.querySelectorAll('.priceD');
    filterpD.forEach(index =>{
        index.classList.remove('hiddenProducts')
    });
}

//clear filter

function clearFilters(e){
    e.preventDefault();

    skate.classList.remove('link--activo');
    urban.classList.remove('link--activo');
    basket.classList.remove('link--activo');
    filter450m.classList.remove('link--activo');
    filter450.classList.remove('link--activo');

    const basketP = document.querySelectorAll('.basket');
    basketP.forEach(index =>{
        index.classList.remove('hiddenProducts')
    });

    const skateP = document.querySelectorAll('.skate');
    skateP.forEach(index =>{
        index.classList.remove('hiddenProducts')
    });

    const urbanP = document.querySelectorAll('.urban');
    urbanP.forEach(index =>{
        index.classList.remove('hiddenProducts')
    });

}
