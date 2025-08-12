// Animación de terminal para proceso de pentesting
class TerminalAnimation {
    constructor() {
        this.terminalOutput = document.getElementById('terminal-output');
        this.currentLineIndex = 0;
        this.isAnimating = false;
        
        // Secuencia de comandos y outputs del proceso
        this.sequence = [
            {
                type: 'command',
                content: '$ search for open ports with nmap based on the target program and use case toggling technique with awesome-waf on 6xargs.com',
                typewriter: true,
                delay: 2
            },
            {
                type: 'output',
                content: 'Initializing network scanner...',
                delay: 500
            },
            {
                type: 'output',
                content: 'Loading security modules...',
                delay: 500
            },
            {
                type: 'output',
                content: 'Starting reconnaissance phase...',
                delay: 500
            },
            {
                type: 'output',
                content: '✓ Port scanning completed',
                delay: 500
            },
            {
                type: 'output',
                content: '✓ Service enumeration finished',
                delay: 500
            },
            {
                type: 'output',
                content: 'Initializing Anti-WAF scanner on each service...',
                delay: 1000
            },
            {
                type: 'output',
                content: '✓ Found 3 potential vulnerabilities',
                delay: 500
            },
            {
                type: 'output',
                content: 'Generating penetration test report...',
                delay: 1200
            },
            {
                type: 'table',
                content: [
                    '+--------------------------------------------------+',
                    '| PENTEST REPORT - TARGET: 6xargs.com             |',
                    '+--------------------------------------------------+',
                    '| Date: 08/11/2025 | Type: Grey Box Testing       |',
                    '+--------------------------------------------------+',
                    '| VULNERABILITIES FOUND                           |',
                    '+--------------------------------------------------+',
                    '| [!] SQL Injection - /product?id= (CRITICAL)     |',
                    '| [!] Stored XSS - comments field (HIGH)          |',
                    '| [!] CSRF - password form (MEDIUM)               |',
                    '+--------------------------------------------------+',
                ],
                delay: 200
            }
        ];
    }

    // Efecto de escritura letra por letra
    async typewriterEffect(element, text, speed = 2) { // Cambié de 50 a 30 ms
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await this.sleep(speed);
        }
    }

    // Función de delay
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Crear línea de terminal
    createTerminalLine(type, content) {
        const lineDiv = document.createElement('div');
        lineDiv.className = `terminal-line ${type}`;
        
        const contentSpan = document.createElement('span');
        contentSpan.className = 'line-content';
        contentSpan.textContent = content;
        
        lineDiv.appendChild(contentSpan);
        return lineDiv;
    }

    // Limpiar terminal
    clearTerminal() {
        this.terminalOutput.innerHTML = '<div class="terminal-line output"><span class="line-content"></span></div>';
    }

    // Animación principal
    async startAnimation() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.clearTerminal();
        
        for (const item of this.sequence) {
            if (item.type === 'table') {
                // Mostrar tabla línea por línea
                for (const tableLine of item.content) {
                    const lineElement = this.createTerminalLine('output', tableLine);
                    this.terminalOutput.appendChild(lineElement);
                    
                    // Scroll automático
                    this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
                    
                    await this.sleep(item.delay);
                }
            } else {
                const lineElement = this.createTerminalLine(item.type, '');
                this.terminalOutput.appendChild(lineElement);
                
                const contentSpan = lineElement.querySelector('.line-content');
                
                if (item.typewriter) {
                    // Efecto typewriter para el comando
                    await this.typewriterEffect(contentSpan, item.content, 80);
                } else {
                    // Mostrar texto normal
                    contentSpan.textContent = item.content;
                }
                
                // Scroll automático
                this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
                
                await this.sleep(item.delay);
            }
        }
        
        // Agregar línea de input al final
        const inputLine = document.createElement('div');
        inputLine.className = 'terminal-input-line';
        inputLine.innerHTML = `
            <span class="prompt">$</span>
            <span class="cursor">|</span>
            <input type="text" class="terminal-input" placeholder=" " readonly>
        `;
        this.terminalOutput.appendChild(inputLine);
        
        this.isAnimating = false;
    }

    // Reiniciar animación
    restartAnimation() {
        if (!this.isAnimating) {
            this.startAnimation();
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const terminalAnimation = new TerminalAnimation();
    
    // Iniciar automáticamente después de 1 segundo
    setTimeout(() => {
        terminalAnimation.startAnimation();
    }, 1000);
    
    // Reiniciar al hacer clic en el terminal (opcional)
    document.getElementById('terminal-output').addEventListener('click', () => {
        terminalAnimation.restartAnimation();
    });
});