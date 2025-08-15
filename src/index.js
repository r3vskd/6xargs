import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

// Middleware para procesar datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use('/app', express.static(path.join(__dirname, 'app/routes/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/html/index.html'));
});

// Ruta para procesar el registro de usuarios
app.post('/register', (req, res) => {
  const { email, username, password } = req.body;
  
  // Validación básica
  if (!email || !username || !password) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  }
  
  // Crear entrada para el archivo de usuarios
  const userData = `${email},${username},${password}\n`;
  
  // Guardar en archivo de texto
  const usersFilePath = path.join(__dirname, 'users.txt');
  
  fs.appendFile(usersFilePath, userData, (err) => {
    if (err) {
      console.error('Error al guardar usuario:', err);
      return res.status(500).json({ success: false, message: 'Error al registrar usuario' });
    }
    
    // Redirigir a la página de login tras registro exitoso
    res.redirect('/assets/html/login.html');
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});