const longinButton = document.getElementById('boton-iniciarSesion')
const userInput = document.getElementById('username')
const passwordInput = document.getElementById('contraseña')



const users = [
    {
        username: '1111',
        password: '1111'
    },
    {
        username: '2222',
        password: '2222'
    }
]

longinButton.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(userInput.value);
    // console.log(passwordInput.value);
    const userValue = userInput.value;
    const passwordValue = passwordInput.value;

    // let loggedIn = false;


    const user = users.find((user) => user.username == userValue && user.password == passwordValue)
    if(user) {
        alert("Info correcta");
        localStorage.setItem('isLoggeIn',true);
        window.location.href = './home.html';
        

    } else alert("info incorrecta, vuelve a intentarlo");



})
