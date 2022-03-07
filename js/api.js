const url = 'http://localhost:4000/user';

const newUser = async user => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'login.html';
    } catch (error) {
        console.log('error')
    }
}

async function getUsers(){
   try {
  return await fetch(url)
        .then(resp => resp.json())
        .then(result => result)
   } catch (error) {
    console.log('error')
   } 
}

 

