document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Coordenada X dentro de la tarjeta
        const y = e.clientY - rect.top;  // Coordenada Y dentro de la tarjeta

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(161, 126, 218, 0.5), transparent 70%)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = ''; // Restablece el fondo al salir
    });
});