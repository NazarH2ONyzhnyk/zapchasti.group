var signin = document.getElementById('signin')
var signup = document.getElementById('signup')
var loginForm = document.getElementById('loginForm')
var registerForm = document.getElementById('registerForm')


// if true = login // else if false = sign up
var signStatus = true

function signIn() {
    if(signStatus == false) {

        signup.classList.replace('login__switch__active','login__switch__disabled')
        signin.classList.replace('login__switch__disabled','login__switch__active')
        loginForm.classList.replace('hidden','block')
        registerForm.classList.replace('block', 'hidden')
        
        
        signStatus = true
    } 
}

function signUp() {
    if(signStatus == true) {
        
        signup.classList.replace('login__switch__disabled','login__switch__active')
        signin.classList.replace('login__switch__active','login__switch__disabled')
        registerForm.classList.replace('hidden', 'block')
        loginForm.classList.replace('block','hidden')

        signStatus = false
    }
}