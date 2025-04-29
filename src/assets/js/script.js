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

function goindex() {
    window.location.href = '/assets/html/index.html';
}

function goabout() {
    window.location.href = '/assets/html/about.html';
}

function gocontact() {
    window.location.href = '/assets/html/contacts.html';
}

function godashboard() {
    window.location.href = '/assets/html/dashboard.html';
}

function goinbox() {
    window.location.href = '/assets/html/inbox.html';
}

function goleaderboard() {
    window.location.href = '/assets/html/leaderboard.html';
}

function gologin() {
    window.location.href = '/assets/html/login.html';
}

function goorgs() {
    window.location.href = '/assets/html/orgs.html';
}   

function goprivacy() {
    window.location.href = '/assets/html/privacy-policy.html';
}

function goprofile() {
    window.location.href = '/assets/html/profile.html';
}

function goguidelines() {
    window.location.href = '/assets/html/program-guidelines.html';
}

function goprograms() {  
    window.location.href = '/assets/html/programs.html';
}

function goregister() {  
    window.location.href = '/assets/html/register.html';
}

function goservices() {
    window.location.href = '/assets/html/services.html';
}

function goterms() {
    window.location.href = '/assets/html/terms-and-conditions.html';
}