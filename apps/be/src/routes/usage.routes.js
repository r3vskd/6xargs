const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../middleware/error.middleware');
const { authenticateApiKey } = require('../middleware/auth.middleware');
const usageService = require('../services/usage.service');
const { logger } = require('../utils/logger');

/**
 * GET /api/usage/current
 * Obtener uso actual del mes
 */
router.get('/current', authenticateApiKey, asyncHandler(async (req, res) => {
  const { client } = req.auth;
  
  const currentUsage = await usageService.getCurrentMonthUsage(client.id);
  const limits = usageService.getPlanLimits(client.planType);
  
  res.json({
    client_id: client.id,
    plan_type: client.planType,
    current_period: currentUsage.month,
    usage: {
      triage_requests: {
        used: currentUsage.triageRequests,
        limit: limits.triageRequests,
        remaining: Math.max(0, limits.triageRequests - currentUsage.triageRequests),
        percentage: Math.round((currentUsage.triageRequests / limits.triageRequests) * 100)
      },
      cli_downloads: {
        used: currentUsage.cliDownloads,
        limit: limits.cliDownloads,
        remaining: Math.max(0, limits.cliDownloads - currentUsage.cliDownloads)
      },
      webhook_deliveries: {
        used: currentUsage.webhookDeliveries,
        limit: limits.webhookDeliveries,
        remaining: Math.max(0, limits.webhookDeliveries - currentUsage.webhookDeliveries)
      }
    },
    total_cost: currentUsage.totalCost,
    last_updated: currentUsage.updatedAt
  });
}));

/**
 * GET /api/usage/history
 * Historial de uso por meses
 */
router.get('/history', authenticateApiKey, asyncHandler(async (req, res) => {
  const { client } = req.auth;
  const { months = 6 } = req.query;
  
  const history = await usageService.getUsageHistory(client.id, parseInt(months));
  
  res.json({
    client_id: client.id,
    months_requested: parseInt(months),
    history: history.map(usage => ({
      month: usage.month,
      triage_requests: usage.triageRequests,
      cli_downloads: usage.cliDownloads,
      webhook_deliveries: usage.webhookDeliveries,
      total_cost: usage.totalCost,
      created_at: usage.createdAt
    }))
  });
}));

/**
 * GET /api/usage/analytics
 * Analytics detallados de uso
 */
router.get('/analytics', authenticateApiKey, asyncHandler(async (req, res) => {
  const { client } = req.auth;
  const { period = '30d' } = req.query; // 7d, 30d, 90d
  
  const analytics = await usageService.getUsageAnalytics(client.id, period);
  
  res.json({
    client_id: client.id,
    period,
    analytics: {
      total_requests: analytics.totalRequests,
      avg_requests_per_day: analytics.avgRequestsPerDay,
      peak_usage_day: analytics.peakUsageDay,
      success_rate: analytics.successRate,
      avg_processing_time_ms: analytics.avgProcessingTime,
      top_severity_classifications: analytics.topSeverities,
      hourly_distribution: analytics.hourlyDistribution,
      cost_breakdown: {
        triage_cost: analytics.triageCost,
        webhook_cost: analytics.webhookCost,
        total_cost: analytics.totalCost
      }
    }
  });
}));

/**
 * GET /api/usage/limits
 * Obtener límites del plan actual
 */
router.get('/limits', authenticateApiKey, asyncHandler(async (req, res) => {
  const { client } = req.auth;
  
  const limits = usageService.getPlanLimits(client.planType);
  const features = usageService.getPlanFeatures(client.planType);
  
  res.json({
    client_id: client.id,
    plan_type: client.planType,
    limits,
    features,
    upgrade_available: client.planType !== 'ENTERPRISE'
  });
}));

/**
 * GET /api/usage/billing
 * Información de facturación
 */
router.get('/billing', authenticateApiKey, asyncHandler(async (req, res) => {
  const { client } = req.auth;
  
  const billingInfo = await usageService.getBillingInfo(client.id);
  
  res.json({
    client_id: client.id,
    stripe_customer_id: client.stripeCustomerId,
    current_plan: client.planType,
    billing_cycle: billingInfo.billingCycle,
    next_billing_date: billingInfo.nextBillingDate,
    current_month_cost: billingInfo.currentMonthCost,
    estimated_next_bill: billingInfo.estimatedNextBill,
    payment_method: billingInfo.paymentMethod,
    billing_history: billingInfo.recentInvoices
  });
}));

/**
 * POST /api/usage/alerts
 * Configurar alertas de uso
 */
router.post('/alerts', authenticateApiKey, asyncHandler(async (req, res) => {
  const { client } = req.auth;
  const { threshold_percentage, alert_types } = req.body;
  
  if (!threshold_percentage || threshold_percentage < 50 || threshold_percentage > 100) {
    return res.status(400).json({
      error: 'threshold_percentage must be between 50 and 100'
    });
  }
  
  const validAlertTypes = ['email', 'webhook', 'both'];
  if (!alert_types || !validAlertTypes.includes(alert_types)) {
    return res.status(400).json({
      error: 'alert_types must be one of: email, webhook, both'
    });
  }
  
  await usageService.configureUsageAlerts(client.id, {
    thresholdPercentage: threshold_percentage,
    alertTypes: alert_types
  });
  
  logger.info('Usage alerts configured', {
    clientId: client.id,
    threshold: threshold_percentage,
    alertTypes: alert_types
  });
  
  res.json({
    message: 'Usage alerts configured successfully',
    threshold_percentage,
    alert_types
  });
}));

/**
 * GET /api/usage/export
 * Exportar datos de uso (CSV)
 */
router.get('/export', authenticateApiKey, asyncHandler(async (req, res) => {
  const { client } = req.auth;
  const { format = 'csv', months = 3 } = req.query;
  
  if (format !== 'csv' && format !== 'json') {
    return res.status(400).json({
      error: 'Format must be csv or json'
    });
  }
  
  const exportData = await usageService.exportUsageData(client.id, {
    format,
    months: parseInt(months)
  });
  
  const filename = `6xargs-usage-${client.name.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.${format}`;
  
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-Type', format === 'csv' ? 'text/csv' : 'application/json');
  
  res.send(exportData);
}));

module.exports = router;