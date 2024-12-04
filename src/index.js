import express from 'express';
import routes from './modules';

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join('public')));

// Ruta principal del frontend
app.get('/', (req, res) => {
    res.sendFile(path.join('public', 'index.html'));
});

// Importar y usar las rutas de la API
const apiRoutes = require('./routes/api');
app.use('/api', routes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
