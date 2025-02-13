document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de uso de la librería Lucide para el dashborad (es solo un POC, pendiente por modificar)
    // Inicializar los iconos de Lucide
    lucide.createIcons();

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            console.log('Navegando a:', this.getAttribute('href'));
        });
    });

    function updateCardContent() {
        const activePrograms = Math.floor(Math.random() * 5) + 1;
        const newMessages = Math.floor(Math.random() * 10);
        const totalEarnings = Math.floor(Math.random() * 5000);

        document.querySelector('.card:nth-child(1) p').textContent = `Tienes ${activePrograms} programas activos`;
        document.querySelector('.card:nth-child(2) p').textContent = `${newMessages} nuevos mensajes en tu bandeja de entrada`;
        document.querySelector('.card:nth-child(3) p').textContent = `Ganancias totales: $${totalEarnings}`;
    }

    // Actualizar el contenido cada 30 segundoss
    // Actualizar el contenido cada 30 segundoss
    setInterval(updateCardContent, 30000);
});
