import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/users.routes.js';
import programRoutes from './routes/programs.routes.js';
import reportRoutes from './routes/reports.routes.js';
import aiRoutes from './routes/ai.routes.js';
import apiRoutes from './routes/index.js';

// Import middleware
import { errorHandler } from './middleware/error.middleware.js';
import { corsMiddleware } from './middleware/cors.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);

// Static files (for legacy support)
app.use('/assets', express.static(path.join(__dirname, '../../../src/assets')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: '6xargs API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Legacy route for root (redirect to frontend)
app.get('/', (req, res) => {
  res.redirect('http://localhost:3001'); // Frontend URL
});

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;