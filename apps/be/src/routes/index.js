import express from 'express';
const router = express.Router();

// Import B2B API route modules
import clientRoutes from './clients.routes.js';
import triageRoutes from './triage.routes.js';
import webhookRoutes from './webhooks.routes.js';
import usageRoutes from './usage.routes.js';
import leadRoutes from './leads.routes.js';

// B2B API Routes
router.use('/clients', clientRoutes);     // Gestión de clientes empresariales
router.use('/triage', triageRoutes);      // Core: Triage AI API
router.use('/webhooks', webhookRoutes);   // Webhook management
router.use('/usage', usageRoutes);        // Métricas y billing
router.use('/leads', leadRoutes);         // Landing page leads

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    service: '6xargs API',
    version: '1.0.0',
    timestamp: new Date().toISOString() 
  });
});

// API Info endpoint
router.get('/', (req, res) => {
  res.json({
    name: '6xargs API',
    description: 'B2B Security API for Triage AI and Air-Gapped CLI',
    version: '1.0.0',
    endpoints: {
      triage: '/api/triage',
      clients: '/api/clients',
      webhooks: '/api/webhooks',
      usage: '/api/usage',
      leads: '/api/leads'
    }
  });
});

export default router;