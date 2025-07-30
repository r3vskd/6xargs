const express = require('express');
const { createRequestHandler } = require('@remix-run/express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Servir archivos estáticos desde la carpeta public

app.use(express.json()); // (Middleware JSON processing)

// API routes para el perfil de usuario
app.get('/api/profile', (req, res) => {   // lógica para obtener el perfil de cada usuario
  res.json({
    username: "HackerUser",
    email: "hacker@example.com",
    avatar: "/assets/images/default-avatar.png"
  });
});

app.put('/api/profile', (req, res) => {   // lógica para modificaciones en el perfil de cada usuario
  res.json({ success: true, message: "Perfil actualizado correctamente" });
});

app.put('/api/profile/password', (req, res) => {
  // cambiar la contraseña
  res.json({ success: true, message: "Contraseña actualizada correctamente" });
});

app.put('/api/profile/2fa', (req, res) => {
  // activar/desactivar 2FA
  const { enabled } = req.body;
  res.json({ success: true, message: `2FA ${enabled ? 'activado' : 'desactivado'} correctamente` });
});

app.get('/api/wallet', (req, res) => {
  // obtener información de wallet
  res.json({
    balance: 1250.75,
    transactions: [
      { id: 1, description: "Recompensa por Bug #1234", amount: 500, date: "2023-05-15" },
      { id: 2, description: "Recompensa por Bug #5678", amount: 750, date: "2023-06-22" }
    ]
  });
});

app.get('/api/programs/active', (req, res) => {
  // obtener programas activos
  res.json([
    { id: 1, name: "Empresa A", status: "active", reward: "$100-$5000", category: "Web" },
    { id: 2, name: "Empresa B", status: "pending", reward: "$500-$10000", category: "Mobile" }
  ]);
});

app.get('/api/bounties', (req, res) => {
  // Lógica para obtener recompensas
  res.json([
    { id: 1, program: "Empresa A", status: "paid", amount: 500, date: "2023-05-15" },
    { id: 2, program: "Empresa B", status: "pending", amount: 750, date: "2023-06-22" }
  ]);
});

// Manejador de Remix para las rutas de la aplicación
app.all(
  '*',
  createRequestHandler({
    build: require('./build'),
    mode: process.env.NODE_ENV
  })
);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});