import express from 'express';
import apiRoutes from './routes/api.js';

const app = express();

// Middlewares
//app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes
app.use(express.static('./src/assets/html/index.html'));

// Rutas
app.use('/api', apiRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
