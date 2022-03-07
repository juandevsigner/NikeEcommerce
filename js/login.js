const formLogin = document.querySelector('#formLogin');
formLogin.addEventListener('submit', checkUser);

async function checkUser(e){
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    const user = {
        email,
        password
    }
    if(check(user)) {
        return showAlert('All fields are required');
    }

   /*  const usersNow = await getUsers();
    const userFind = usersNow.find(user => {
        return user.email === email;
    });
    
    if(!userFind){
       return showAlert ('user does not exist')
    }

    if(userFind.password !== password){
        return showAlert ('password incorrect')   
    } */
    window.location.href = 'index.html'
    
    
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
        const form = document.querySelector('#formLogin');
        form.appendChild(alert);
        setTimeout(()=>{
            alert.remove();
        },3000)
    }
}
