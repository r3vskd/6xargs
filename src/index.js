import express from 'express';
import apiRoutes from './routes/api.js';
import path from 'path';
import { fileURLToPath } from 'url';
import.meta.url

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
const __dirname = path.resolve();

// Middlewares
//app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes
//app.use('/assets', express.static('assets'));
//app.use(express.static(path.join(path.resolve(), 'assets/css/styles.css')));
//app.use(express.static(path.join(__dirname, 'assets/css')));
app.use('/assets', express.static(path.join(__dirname, 'src')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'assets/html')));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/html/index.html'));
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
  res.sendFile(path.join(__dirname, 'css', 'styles.css'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});