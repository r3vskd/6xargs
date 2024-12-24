function redirections(pagina) {
  const paginas = {
    login: "/assets/html/login.html",
    contact: "/assets/html/contact.html",
    dashboard: "/assets/html/dashboard.html",
    profile: "/assets/html/profile.html",
  };
  
if (paginas[pagina]) {
  window.location.href = paginas[pagina]; // Redirige a la página especificada
} else {
    console.error("La página no existe");
 } 
}