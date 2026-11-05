let email = document.getElementById("email");
let password = document.getElementById("password");
let emailRegister = document.getElementById("email-register");
let passwordRegister = document.getElementById("password-register");
let loginButton = document.getElementById("login-button");
let registerLink = document.getElementById("show-register");
let registerForm = document.getElementById("register-form");
let loginForm = document.getElementById("login-form");
let name = document.getElementById("name");
let lastName = document.getElementById("lastname");
let confirmPassword = document.getElementById("confirm-password");
let registerButton = document.getElementById("register-button");
let showLoginLink = document.getElementById("show-login");

showLoginLink.addEventListener("click", function(event) {
    event.preventDefault();
    showLoginForm();
});

loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    validateEmail(email.value, password.value);
});

function validateEmail(email, password){
    if(email.includes("@") && email.includes(".com") && password !== ""){
        window.location.href = 'https://christianrosado.dev/'
    }
    else if(email === ""){
        alert("Please enter your email.");
    }
    else if(password === ""){
        alert("Please enter your password.");
    }
    else{
        alert("Please enter a valid email address.");
    }
}

registerLink.addEventListener("click", function(event) {
    event.preventDefault();
    showRegisterForm();
});

registerButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Register button clicked!");
    validateregister(name.value, emailRegister.value, passwordRegister.value, confirmPassword.value, lastName.value);
});



function showRegisterForm(){
    loginForm.hidden = true;
    registerForm.hidden = false;
}

function showLoginForm(){
    loginForm.hidden = false;
    registerForm.hidden = true;
}

function validateregister(name,email, password, confirmPassword, lastName){
    if(email.includes("@") && email.includes(".com") && password !== "" && confirmPassword !== "" && name !== "" && lastName !== "" && password === confirmPassword){
        window.location.href = 'https://christianrosado.dev/'
    }
    else if(email === ""){
        alert("Please enter your email.");
    }
    else if(password === ""){
        alert("Please enter your password.");
    }
    else if(confirmPassword === ""){
        alert("Please confirm your password.");
    }
    else if(name === ""){
        alert("Please enter your name.");
    }
    else if (password !== confirmPassword){
        alert("Please make sure that your password is the same")
    }
    else if(lastName === ""){
        alert("Please enter your last name.");
    }
    else{
        alert("Please try again, make sure to fill all the fields.");
    }
}

