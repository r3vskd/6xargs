function redirections(pagina) {
  const paginas = {
    login: "/assets/html/login.html",
    dashboard
  };
  
  if (paginas[pagina]) {
  window.location.href = paginas[pagina]; // Redirige a la página especificada
    } else {
        console.error("La página no existe");
        } 
}