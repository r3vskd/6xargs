function registerUser() {
    // Fetching user input
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return;
    }


    if (username.length < 5 || username.length > 9) {
        alert('Username must be between 3 and 20 characters');
        return;
    }

  
    if (password.length < 12) {
        alert('Password must be at least 12 characters long');
        return;
    }

    
    alert('Registration successful!');
}