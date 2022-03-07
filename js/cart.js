//var
const cart = document.querySelector('#cart');
const listProducts = document.querySelector('.product');
const containerCart = document.querySelector('#cart__container tbody');
const clearBtn = document.querySelector('#cart__clear');
const cartBuy = document.querySelector('#cart__buy');
const modal = document.querySelector('.modal');
let aCart = [];
let priceTotal = document.querySelector('.cart__total');
let amountProduct = document.querySelector('.submenu__countProduct');
let totalCart = 0;
let countProduct = 0;

//events
loadEventListeners();
function loadEventListeners() {

    listProducts.addEventListener('click', addProduct);

    cart.addEventListener('click', removeProduct);

    document.addEventListener('DOMContentLoaded', ()=>{
        aCart = JSON.parse(localStorage.getItem('cart')) || [] ;
        countProduct = JSON.parse(localStorage.getItem('countP')) || 0 ;
        totalCart = JSON.parse(localStorage.getItem('totalC')) || 0 ;
        cartHTML();
    })

    clearBtn.addEventListener('click', ()=>{
        aCart = [];
        totalCart = 0;
        countProduct = 0;
        priceTotal.textContent = totalCart;
        amountProduct.textContent = countProduct;
        cleanHTML();
    })

    cartBuy.addEventListener('click', buyItems);
}

//functions
function addProduct (e) {
    e.preventDefault();

    if(e.target.classList.contains('card__addcart')){
        const productSelected = e.target.parentElement.parentElement
        readingProduct(productSelected);
    }

    modal.classList.add('modalActive');
    setTimeout(()=>{
        modal.classList.remove('modalActive')
    },700);
}

function removeProduct(e){
    e.preventDefault();
        if(e.target.classList.contains('card__remove')) {
        const productId = e.target.getAttribute('data-id');
        aCart.forEach(value =>{
            if(value.id == productId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount) ;
                totalCart = totalCart - priceReduce;
                totalCart = totalCart.toFixed(2);
            }
        })
       aCart = aCart.filter(product => product.id !== productId);
       countProduct--;
    }
    if(aCart.length === 0){
        totalCart = 0;
        countProduct = 0;
        priceTotal.textContent = totalCart;
        amountProduct.textContent = countProduct;
    }
    cartHTML();
}

function readingProduct(product) {
    const infoProduct = {
        img: product.querySelector('.card__img').src,
        tittle: product.querySelector('.card__name').textContent,
        price: product.querySelector('.card__price').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }
    totalCart = parseFloat(totalCart)  + parseFloat(infoProduct.price);
    totalCart = totalCart.toFixed(2);

    const check = aCart.some(product => product.id === infoProduct.id );
        if(check) {
            const products = aCart.map( product =>{
                if(product.id === infoProduct.id){
                    product.amount++;
                    return product;
                }else {
                    return product;
                }
            } );
            aCart = [...products];
        }else{
            aCart = [...aCart, infoProduct];
            countProduct++;
        }
    cartHTML();
}

function cartHTML(){

    cleanHTML();

    aCart.forEach( shoes =>{
        const {img, tittle, price, amount, id} = shoes;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${img}"></td>
        <td>${tittle}</td>
        <td>${price}</td>
        <td>${amount}</td>
        <td>
        <a href="#" class="card__remove" data-id="${id}">⊗</a> 
        `;
        containerCart.appendChild(row);
        priceTotal.innerHTML = totalCart;
        amountProduct.innerHTML = countProduct;
    });
    totalCartS();
    cartStorage();
    countProductS();
    
}

function cartStorage() {
    localStorage.setItem('cart', JSON.stringify(aCart));
}

function countProductS(){
    localStorage.setItem('countP', JSON.stringify(countProduct));
}

function totalCartS(){
    localStorage.setItem('totalC', JSON.stringify(totalCart));
}

function cleanHTML() {
    while(containerCart.firstChild) {
        containerCart.removeChild(containerCart.firstChild)
    }
}

function buyItems(e){
    e.preventDefault();
    if(aCart.length === 0){
        msgCart();
        return;
    }
    window.location.href = 'thanks.html';
    aCart = [];
        totalCart = 0;
        countProduct = 0;
        priceTotal.textContent = totalCart;
        amountProduct.textContent = countProduct;
        cleanHTML();
}

function msgCart () {
    const alert = document.querySelector('.bg');
    if(!alert){
        const alert = document.createElement('p');
        alert.classList.add('alert');
        alert.textContent = 'CART EMPTY! PLEASE ADD PRODUCTS';
        const printAlert = document.querySelector('.cart__msg')
        printAlert.appendChild(alert);
        setTimeout(()=>{
            alert.remove();
        },1500);
    }
}








