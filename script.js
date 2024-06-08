const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Authenticate user with Firebase
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // User signed in successfully, redirect to dashboard
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            // Handle errors such as invalid credentials
            console.error(error.message);
            alert('Failed to login. Please check your credentials.');
        });
});