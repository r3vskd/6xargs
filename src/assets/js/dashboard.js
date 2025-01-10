document.addEventListener('DOMContentLoaded', function() {
    // Inicializar los iconos de Lucide
    lucide.createIcons();

    // Agregar funcionalidad a los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            // Aquí puedes agregar lógica para cargar el contenido correspondiente
            console.log('Navegando a:', this.getAttribute('href'));
        });
    });

    // Ejemplo de cómo se podria actualizar dinámicamente el contenido de las tarjetas
    function updateCardContent() {
        // Esto es solo un ejemplo. En una aplicación real, obtendrías estos datos de una API
        const activePrograms = Math.floor(Math.random() * 5) + 1;
        const newMessages = Math.floor(Math.random() * 10);
        const totalEarnings = Math.floor(Math.random() * 5000);

        document.querySelector('.card:nth-child(1) p').textContent = `Tienes ${activePrograms} programas activos`;
        document.querySelector('.card:nth-child(2) p').textContent = `${newMessages} nuevos mensajes en tu bandeja de entrada`;
        document.querySelector('.card:nth-child(3) p').textContent = `Ganancias totales: $${totalEarnings}`;
    }

    // Actualizar el contenido cada 30 segundos 
    setInterval(updateCardContent, 30000);
});
