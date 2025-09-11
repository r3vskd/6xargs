const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/error.middleware');
const { authenticateAdmin } = require('../middleware/auth.middleware');
const clientService = require('../services/client.service');
const apiKeyService = require('../services/apikey.service');
const { logger } = require('../utils/logger');

// Todas las rutas requieren autenticación de admin (para 6xargs team)
router.use(authenticateAdmin);

/**
 * GET /api/clients
 * Listar todos los clientes
 */
router.get('/', asyncHandler(async (req, res) => {
  const { page = 1, limit = 20, status } = req.query;
  
  const clients = await clientService.getClients({
    page: parseInt(page),
    limit: parseInt(limit),
    status
  });

  res.json(clients);
}));

/**
 * POST /api/clients
 * Crear nuevo cliente empresarial
 * 
 * Body:
 * {
 *   "name": "HackerOne",
 *   "email": "partnerships@hackerone.com",
 *   "domain": "hackerone.com",
 *   "planType": "ENTERPRISE",
 *   "webhookUrl": "https://api.hackerone.com/webhooks/6xargs",
 *   "ipWhitelist": ["192.168.1.0/24"]
 * }
 */
router.post('/', asyncHandler(async (req, res) => {
  const clientData = req.body;
  
  logger.info('Creating new client', { name: clientData.name });
  
  const client = await clientService.createClient(clientData);
  
  // Generar API keys iniciales
  const secretKey = await apiKeyService.generateApiKey({
    clientId: client.id,
    type: 'SECRET',
    name: 'Production'
  });

  res.status(201).json({
    client,
    initial_api_key: {
      id: secretKey.id,
      key: secretKey.key, // Solo se muestra una vez
      type: secretKey.type
    }
  });
}));

/**
 * GET /api/clients/:clientId
 * Obtener detalles de un cliente
 */
router.get('/:clientId', asyncHandler(async (req, res) => {
  const { clientId } = req.params;
  
  const client = await clientService.getClientById(clientId);
  
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }

  res.json(client);
}));

/**
 * PUT /api/clients/:clientId
 * Actualizar cliente
 */
router.put('/:clientId', asyncHandler(async (req, res) => {
  const { clientId } = req.params;
  const updateData = req.body;
  
  const client = await clientService.updateClient(clientId, updateData);
  
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }

  logger.info('Client updated', { clientId, updatedFields: Object.keys(updateData) });
  
  res.json(client);
}));

/**
 * POST /api/clients/:clientId/suspend
 * Suspender cliente
 */
router.post('/:clientId/suspend', asyncHandler(async (req, res) => {
  const { clientId } = req.params;
  const { reason } = req.body;
  
  await clientService.suspendClient(clientId, reason);
  
  logger.warn('Client suspended', { clientId, reason });
  
  res.json({ message: 'Client suspended successfully' });
}));

/**
 * POST /api/clients/:clientId/activate
 * Reactivar cliente
 */
router.post('/:clientId/activate', asyncHandler(async (req, res) => {
  const { clientId } = req.params;
  
  await clientService.activateClient(clientId);
  
  logger.info('Client activated', { clientId });
  
  res.json({ message: 'Client activated successfully' });
}));

/**
 * GET /api/clients/:clientId/api-keys
 * Listar API keys del cliente
 */
router.get('/:clientId/api-keys', asyncHandler(async (req, res) => {
  const { clientId } = req.params;
  
  const apiKeys = await apiKeyService.getClientApiKeys(clientId);
  
  // No devolver las keys reales por seguridad
  const safeApiKeys = apiKeys.map(key => ({
    id: key.id,
    name: key.name,
    type: key.type,
    active: key.active,
    lastUsed: key.lastUsed,
    createdAt: key.createdAt,
    keyPreview: `${key.key.substring(0, 12)}...` // Solo mostrar preview
  }));
  
  res.json(safeApiKeys);
}));

/**
 * POST /api/clients/:clientId/api-keys
 * Generar nueva API key
 */
router.post('/:clientId/api-keys', asyncHandler(async (req, res) => {
  const { clientId } = req.params;
  const { name, type = 'SECRET' } = req.body;
  
  const apiKey = await apiKeyService.generateApiKey({
    clientId,
    name,
    type
  });
  
  logger.info('API key generated', { clientId, keyId: apiKey.id, type });
  
  res.status(201).json({
    id: apiKey.id,
    key: apiKey.key, // Solo se muestra una vez
    name: apiKey.name,
    type: apiKey.type,
    active: apiKey.active,
    createdAt: apiKey.createdAt
  });
}));

/**
 * DELETE /api/clients/:clientId/api-keys/:keyId
 * Revocar API key
 */
router.delete('/:clientId/api-keys/:keyId', asyncHandler(async (req, res) => {
  const { clientId, keyId } = req.params;
  
  await apiKeyService.revokeApiKey(keyId, clientId);
  
  logger.info('API key revoked', { clientId, keyId });
  
  res.json({ message: 'API key revoked successfully' });
}));

/**
 * GET /api/clients/:clientId/usage
 * Obtener métricas de uso del cliente
 */
router.get('/:clientId/usage', asyncHandler(async (req, res) => {
  const { clientId } = req.params;
  const { months = 3 } = req.query;
  
  const usage = await clientService.getClientUsage(clientId, parseInt(months));
  
  res.json(usage);
}));

module.exports = router;