const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/error.middleware');
const { authenticateApiKey } = require('../middleware/auth.middleware');
const { validateTriageRequest } = require('../middleware/validation.middleware');
const triageService = require('../services/triage.service');
const usageService = require('../services/usage.service');
const { logger } = require('../utils/logger');

// Middleware para todas las rutas de triage
router.use(authenticateApiKey);

/**
 * POST /api/triage/analyze
 * Core endpoint: Analiza un reporte de seguridad con IA
 * 
 * Body:
 * {
 *   "report": {
 *     "title": "SQL Injection in login form",
 *     "description": "...",
 *     "steps": [...],
 *     "impact": "...",
 *     "attachments": [...]
 *   },
 *   "metadata": {
 *     "source": "hackerone",
 *     "reporter_id": "hacker123",
 *     "program_id": "company_program"
 *   }
 * }
 */
router.post('/analyze', validateTriageRequest, asyncHandler(async (req, res) => {
  const startTime = Date.now();
  const { report, metadata } = req.body;
  const { client, apiKey } = req.auth;

  logger.info('Triage request received', {
    clientId: client.id,
    clientName: client.name,
    reportTitle: report.title
  });

  try {
    // Procesar con IA
    const analysis = await triageService.analyzeReport({
      report,
      metadata,
      clientId: client.id
    });

    const processingTime = Date.now() - startTime;

    // Registrar uso para billing
    await usageService.recordTriageRequest(client.id, {
      processingTime,
      success: true
    });

    // Actualizar último uso de API key
    await apiKey.update({ lastUsed: new Date() });

    res.json({
      id: analysis.id,
      severity: analysis.severity,
      confidence: analysis.confidence,
      classification: analysis.classification,
      reasoning: analysis.reasoning,
      suggested_actions: analysis.suggestedActions,
      processing_time_ms: processingTime,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    
    // Registrar fallo para métricas
    await usageService.recordTriageRequest(client.id, {
      processingTime,
      success: false,
      error: error.message
    });

    logger.error('Triage analysis failed', {
      clientId: client.id,
      error: error.message,
      processingTime
    });

    throw error;
  }
}));

/**
 * GET /api/triage/status/:requestId
 * Consultar estado de un análisis (para requests asíncronos)
 */
router.get('/status/:requestId', asyncHandler(async (req, res) => {
  const { requestId } = req.params;
  const { client } = req.auth;

  const request = await triageService.getRequestStatus(requestId, client.id);
  
  if (!request) {
    return res.status(404).json({
      error: 'Request not found'
    });
  }

  res.json({
    id: request.id,
    status: request.status,
    created_at: request.createdAt,
    completed_at: request.completedAt,
    processing_time_ms: request.processingTime,
    result: request.status === 'COMPLETED' ? {
      severity: request.severity,
      confidence: request.confidence
    } : null
  });
}));

/**
 * POST /api/triage/batch
 * Análisis en lote (para clientes Enterprise)
 */
router.post('/batch', asyncHandler(async (req, res) => {
  const { client } = req.auth;
  const { reports } = req.body;

  // Verificar plan Enterprise
  if (client.planType !== 'ENTERPRISE') {
    return res.status(403).json({
      error: 'Batch processing requires Enterprise plan'
    });
  }

  if (!Array.isArray(reports) || reports.length === 0) {
    return res.status(400).json({
      error: 'Reports array is required and must not be empty'
    });
  }

  if (reports.length > 100) {
    return res.status(400).json({
      error: 'Maximum 100 reports per batch'
    });
  }

  const batchId = await triageService.processBatch({
    reports,
    clientId: client.id
  });

  res.json({
    batch_id: batchId,
    status: 'PROCESSING',
    total_reports: reports.length,
    estimated_completion: new Date(Date.now() + reports.length * 2000).toISOString()
  });
}));

module.exports = router;