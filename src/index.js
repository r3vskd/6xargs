// Importar las dependencias necesarias
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la ruta absoluta
const __dirname = path.resolve();

// Servir archivos estáticos de la carpeta "assets"
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// Ruta para servir el archivo index.html desde la carpeta 'html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/html/index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});