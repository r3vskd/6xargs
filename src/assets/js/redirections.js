function redirections(pagina) {
  const paginas = {
    home: "/assets/html/index.html",
    login: "/assets/html/login.html",
    contact: "/assets/html/contact.html",
    dashboard: "/assets/html/dashboard.html",
    profile: "/assets/html/profile.html",
    orgs: "/assets/html/orgs.html",
    inbox: "/assets/html/inbox.html",
    about: "/assets/html/about.html",
    policies: "/assets/html/policies.html",
    privacypolicy: "/assets/html/privacy-policy.html",
    terms: "/assets/html/terms-and-conditions.html",
    guidelines: "/assets/html/program-guidelines.html",
    register: "/assets/html/register.html",
  };
  
if (paginas[pagina]) {
  window.location.href = paginas[pagina]; // Redirige a la página especificada
} else {
    console.error("La página no existe");
 } 
}