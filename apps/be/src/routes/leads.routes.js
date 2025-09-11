const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/error.middleware');
const { validateLeadData } = require('../middleware/validation.middleware');
const leadService = require('../services/lead.service');
const { logger } = require('../utils/logger');

/**
 * POST /api/leads
 * Capturar lead desde landing page
 * 
 * Body:
 * {
 *   "email": "security@company.com",
 *   "company": "TechCorp Inc",
 *   "message": "Interested in integrating 6xargs API"
 * }
 */
router.post('/', validateLeadData, asyncHandler(async (req, res) => {
  const { email, company, message } = req.body;
  
  logger.info('New lead received', { email, company });
  
  try {
    const lead = await leadService.createLead({
      email,
      company,
      message
    });
    
    // Enviar notificación al equipo de ventas (opcional)
    await leadService.notifySalesTeam(lead);
    
    res.status(201).json({
      message: 'Thank you for your interest! We\'ll contact you soon.',
      id: lead.id
    });
    
  } catch (error) {
    if (error.code === 'P2002') { // Unique constraint violation
      return res.status(409).json({
        error: 'Email already registered. We\'ll update your information.'
      });
    }
    throw error;
  }
}));

/**
 * GET /api/leads
 * Listar leads (solo para admin)
 */
router.get('/', asyncHandler(async (req, res) => {
  // TODO: Agregar autenticación de admin
  const { page = 1, limit = 20, status } = req.query;
  
  const leads = await leadService.getLeads({
    page: parseInt(page),
    limit: parseInt(limit),
    status
  });
  
  res.json(leads);
}));

/**
 * PUT /api/leads/:leadId/status
 * Actualizar estado del lead
 */
router.put('/:leadId/status', asyncHandler(async (req, res) => {
  // TODO: Agregar autenticación de admin
  const { leadId } = req.params;
  const { status } = req.body;
  
  const validStatuses = ['NEW', 'CONTACTED', 'CONVERTED', 'CLOSED'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      error: 'Invalid status',
      validStatuses
    });
  }
  
  const lead = await leadService.updateLeadStatus(leadId, status);
  
  if (!lead) {
    return res.status(404).json({ error: 'Lead not found' });
  }
  
  logger.info('Lead status updated', { leadId, status });
  
  res.json(lead);
}));

/**
 * GET /api/leads/stats
 * Estadísticas de leads
 */
router.get('/stats', asyncHandler(async (req, res) => {
  // TODO: Agregar autenticación de admin
  const stats = await leadService.getLeadStats();
  
  res.json(stats);
}));

module.exports = router;