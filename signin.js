// Handle sign-in form submission
document.getElementById('signin_container').onsubmit = function(e) {
    e.preventDefault(); // Stop form from refreshing the page

    // Get sign-in values
    let email = document.getElementById('signin_email').value;
    let password = document.getElementById('signin_password').value;

    // Get the stored user data from localStorage
    let storedUser = JSON.parse(localStorage.getItem('user'));


    // Check if email and password match
    if (storedUser[0].email === email && storedUser[0].password === password) {
        alert("Sign-in successful!");
    } else {
        alert("Incorrect email or password.");
    }

    this.reset(); // Clear form  
};

