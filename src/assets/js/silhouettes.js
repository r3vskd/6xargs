document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.silhouettes-container');
    const silhouetteCount = 5;
    const silhouettePaths = [
        'M18 9.87c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
        'M17.66 9.53l-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66 1.41 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93zm18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3z',
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z',
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z'
    ];

    function createSilhouette() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.classList.add('silhouette');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', silhouettePaths[Math.floor(Math.random() * silhouettePaths.length)]);

        svg.appendChild(path);
        container.appendChild(svg);

        const size = Math.random() * 200 + 100; // Random size between 100px and 300px
        svg.style.width = `${size}px`;
        svg.style.height = `${size}px`;

        const hue = Math.random() * 60 + 200; // Random hue between 200 and 260 (blues and purples)
        path.style.fill = `hsla(${hue}, 70%, 50%, 0.3)`;

        // Set random position
        svg.style.left = `${Math.random() * 100}%`;
        svg.style.top = `${Math.random() * 100}%`;

        // Set random animation variables
        svg.style.setProperty('--tx1', `${(Math.random() - 0.5) * 100}px`);
        svg.style.setProperty('--ty1', `${(Math.random() - 0.5) * 100}px`);
        svg.style.setProperty('--scale1', `${Math.random() * 0.4 + 0.8}`);
        svg.style.setProperty('--rotate1', `${Math.random() * 360}deg`);

        svg.style.setProperty('--tx2', `${(Math.random() - 0.5) * 100}px`);
        svg.style.setProperty('--ty2', `${(Math.random() - 0.5) * 100}px`);
        svg.style.setProperty('--scale2', `${Math.random() * 0.4 + 0.8}`);
        svg.style.setProperty('--rotate2', `${Math.random() * 360}deg`);

        svg.style.animationDuration = `${Math.random() * 10 + 15}s`; // Random duration between 15s and 25s
        svg.style.animationDelay = `${Math.random() * -25}s`; // Random start time
    }

    for (let i = 0; i < silhouetteCount; i++) {
        createSilhouette();
    }
});