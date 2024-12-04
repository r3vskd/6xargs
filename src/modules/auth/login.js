
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

function validateForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'your_username' && password === 'your_password') {
      alert('Login successful!');
      return true;
  } else {
      document.getElementById('error-message').innerText = 'Invalid username or password';
      return false;
  }
}































