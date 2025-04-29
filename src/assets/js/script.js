document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('responsive');
    });

    // Add glitch effect to navbar linkz
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.setAttribute('data-text', link.textContent);
    });
});

function goToIndex() {
    window.location.href = '/assets/html/index.html';
}

function goToAbout() {
    window.location.href = '/assets/html/about.html';
}

function goToProjects() {
    window.location.href = '/assets/html/projects.html';
}

function goToContact() {
    window.location.href = '/assets/html/contact.html';
}

function goToBlog() {
    window.location.href = '/assets/html/blog.html';
}

function goToResume() {
    window.location.href = '/assets/html/resume.html';
}

function goToHome() {
    window.location.href = '/assets/html/home.html';
}

function goToServices() {
    window.location.href = '/assets/html/services.html';
}

function goToTestimonials() {
    window.location.href = '/assets/html/testimonials.html';
}   

function goToPortfolio() {
    window.location.href = '/assets/html/portfolio.html';
}

