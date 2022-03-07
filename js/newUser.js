const form = document.querySelector('#form');
form.addEventListener('submit', checkUser);

function checkUser(e){
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const user = {
        email,
        password
    }
    if(check(user)) {
        showAlert('All fields are required')
        return;
    }else{
        newUser(user);
    }

    window.location.href = 'index.html';
}

function check(obj){
    return !Object.values(obj).every( input => input !== '')
}


function showAlert(msg){
    const alert = document.querySelector('.bg-red')
    
    if(!alert){
        const alert = document.createElement('p');
        alert.classList.add('alert');
        alert.innerHTML =`
            <strong>Error!</strong>
            <span>${msg}</span>
        `;
        const form = document.querySelector('#form');
        form.appendChild(alert);
        setTimeout(()=>{
            alert.remove();
        },3000)
    }
}
