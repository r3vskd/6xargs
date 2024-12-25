// Efecto de luz que sigue al cursor en las tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Coordenada X dentro de la tarjeta
        const y = e.clientY - rect.top;  // Coordenada Y dentro de la tarjeta

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 0, 0, 0.5), transparent 70%)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = ''; // Restablece el fondo al salir
    });
});
