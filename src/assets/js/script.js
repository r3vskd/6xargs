document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('responsive');
    });

    // Add glitch effect to navbar links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.setAttribute('data-text', link.textContent);
    });
});