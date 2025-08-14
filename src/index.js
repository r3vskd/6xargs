import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use('/app', express.static(path.join(__dirname, 'app/routes/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/html/index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});