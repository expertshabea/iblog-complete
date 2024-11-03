// Handle form submission
document.getElementById('signup_container').onsubmit = function(e) {
    e.preventDefault(); // Prevent form refresh

    // Get form values
    let password = document.getElementById('password').value;
    let recheckPassword = document.getElementById('recheck_password').value;

    // Check if passwords match
    if (password !== recheckPassword) {
        alert("Passwords do not match.");
        return; // Stop the form from submitting
    }
let array = []
let obj = {name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: password}
    // Store user details in localStorage
    array.push(obj)
    
       localStorage.setItem('user', JSON.stringify(array))
    

    alert("Sign-up successful!");
    this.reset(); // Clear form
};
