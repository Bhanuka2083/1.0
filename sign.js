
//Form containers
const signInForm = document.getElementById('form_signin');
const signUpForm = document.getElementById('form_signup');

//Button
const showSignUp = document.getElementById('show_sign_up');
const showSignIn = document.getElementById('show_sign_in');

//switch to sign-up
function switchTosignUp(){
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
}

//switch to sign-in
function switchTosignIn(){
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
}

// Attach event listeners to the buttons
showSignUp.addEventListener('click', switchTosignUp);
showSignIn.addEventListener('click', switchTosignIn);





